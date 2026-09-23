# ROTEIRO DE AULA EXPANDIDO — AULA 07

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 18/09/2026 &nbsp;|&nbsp; **Data Programada:** — (Atividade Online Assíncrona com Suporte Virtual)  
**Modalidade:** Online  
**Tema:** Manipulação de Dados em SQL (DML) e Controle de Transações Relacionais (ACID)  
**Ambiente de Software:** SGBD Relacional (PostgreSQL 15 / MySQL 8.0) e DBeaver Community  
**Articulação com o PPC:** Competência 1 — Operar e manter dados com segurança, garantindo a integridade transacional e mitigando riscos de perda acidental  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula de manipulação de dados, você será capaz de:
1. Escrever comandos **`INSERT INTO`** com sintaxe declarativa segura, inserções em lote (*bulk insert*) e inserções baseadas em consultas (`INSERT ... SELECT`).
2. Executar comandos **`UPDATE`** aplicando criteriosamente filtros com a cláusula `WHERE` para evitar corrupção em massa de dados em produção.
3. Diferenciar conceitual e operacionalmente os comandos **`DELETE`**, **`TRUNCATE TABLE`** e **`DROP TABLE`**.
4. Compreender a definição formal de **Transação** como uma unidade lógica de trabalho indivisível.
5. Dominar e justificar as propriedades **ACID** (**A**tomicidade, **C**onsistência, **I**solamento e **D**urabilidade).
6. Utilizar comandos **TCL** (**`BEGIN`**, **`COMMIT`**, **`ROLLBACK`**, **`SAVEPOINT`**) para proteger operações críticas de negócio contra falhas mecânicas ou de sistema.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 Comandos de Manipulação de Dados (SQL DML)

#### A. Inserção de Dados (`INSERT INTO`)
* **Sintaxe Declarativa (Recomendada):** Especifica explicitamente a ordem das colunas, evitando quebras caso novas colunas sejam adicionadas à tabela no futuro:
  ```sql
  INSERT INTO clientes (nome_razao, cpf, limite_credito)
  VALUES ('João da Silva', '12345678901', 3000.00);
  ```
* **Inserção Múltipla em Lote (*Bulk Insert*):** Insere dezenas de linhas em uma única chamada de rede, otimizando drasticamente o desempenho:
  ```sql
  INSERT INTO categorias (nome_categoria) VALUES
  ('Eletrônicos'), ('Mecânica'), ('Pneumática');
  ```
* **Inserção via Subconsulta (`INSERT INTO ... SELECT`):** Popula tabelas históricas ou de auditoria a partir de dados existentes:
  ```sql
  INSERT INTO clientes_inativos (id_cliente, nome)
  SELECT id_cliente, nome_razao FROM clientes WHERE ativo = FALSE;
  ```

---

#### B. Atualização de Dados (`UPDATE`)
* **Atenção Máxima:** O comando `UPDATE` sem a cláusula `WHERE` atualiza **todas as linhas da tabela indistintamente**.
  ```sql
  -- Forma Correta e Segura:
  UPDATE produtos
  SET preco_unitario = preco_unitario * 1.05,
      estoque_atual = estoque_atual - 1
  WHERE id_produto = 42;
  ```

---

#### C. Matriz Comparativa: `DELETE` vs `TRUNCATE` vs `DROP`

| Característica | `DELETE FROM tabela WHERE ...` | `TRUNCATE TABLE tabela` | `DROP TABLE tabela` |
| :--- | :--- | :--- | :--- |
| **Categoria SQL** | **DML** (Manipulação) | **DDL** (Definição) | **DDL** (Definição) |
| **Filtragem com WHERE** | **Sim**, permite excluir tuplas específicas. | **Não**, esvazia a tabela inteira instantaneamente. | **Não**, destrói a tabela inteira. |
| **Velocidade / Custo** | Lento em bases grandes (grava log linha a linha). | **Extremamente rápido** (desaloca páginas de dados no disco). | Instantâneo (remove do catálogo). |
| **Impacto na Estrutura** | Mantém a tabela e seus metadados intactos. | Mantém a tabela intacta (esvaziada). | **Elimina a tabela física e os metadados do banco.** |
| **Sequências / Autoincremento** | Mantém o valor atual da sequência SERIAL. | **Reinicia (*Reset*) a contagem para 1** (padrão). | Destrói a sequência associada. |
| **Gatilhos / Triggers** | Dispara triggers de linha (`BEFORE/AFTER DELETE`). | Não dispara triggers de exclusão de linha. | Não se aplica. |

---

### 2.2 Transações e as Propriedades ACID

Uma **transação** é uma sequência de uma ou mais operações SQL tratadas pelo SGBD como uma única operação atômica lógica.
* **Exemplo Clássico (Transferência Bancária de R$ 500,00 da Conta A para a Conta B):**
  1. `UPDATE contas SET saldo = saldo - 500 WHERE id_conta = 'A';`
  2. `UPDATE contas SET saldo = saldo + 500 WHERE id_conta = 'B';`
  * Se o servidor cair após o passo 1, o dinheiro desapareceria do sistema bancário caso não houvesse suporte transacional!

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AS 4 PROPRIEDADES ACID                          │
├─────────────────┬──────────────────────────────────────────────────────┤
│ ATOMICIDADE     │ Ou TUDO é executado com sucesso ou NADA é efetivado. │
│ (All-or-Nothing)│ Em caso de erro, desfaz tudo (ROLLBACK).             │
├─────────────────┼──────────────────────────────────────────────────────┤
│ CONSISTÊNCIA    │ A transação leva o banco de um estado válido a outro │
│ (Validity)      │ estado válido, respeitando todas as constraints.     │
├─────────────────┼──────────────────────────────────────────────────────┤
│ ISOLAMENTO      │ Transações simultâneas não interferem entre si antes │
│ (Isolation)     │ de serem finalizadas (evita leituras sujas).         │
├─────────────────┼──────────────────────────────────────────────────────┤
│ DURABILIDADE    │ Após o COMMIT, os dados persistidos jamais serão     │
│ (Persistence)   │ perdidos, mesmo que haja queda total de energia.     │
└─────────────────┴──────────────────────────────────────────────────────┘
```

---

## 3. PRÁTICA GUIADA NO DBEAVER (TESTE TRANSACIONAL)

Abra o DBeaver e execute o bloco de código simulando uma operação crítica de baixa de estoque e registro de venda com proteção contra falhas:

```sql
-- 1. Criação do cenário de teste
CREATE TABLE estoque_produtos (
    id_item INT PRIMARY KEY,
    nome_item VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL CHECK (quantidade >= 0)
);

INSERT INTO estoque_produtos VALUES (1, 'Válvula Reguladora', 10);

-- 2. Demonstração de ROLLBACK sob erro de Constraint
BEGIN TRANSACTION; -- Inicia o bloco transacional

-- Passo A: Tenta dar baixa de 15 unidades (o estoque é 10)
-- O CHECK (quantidade >= 0) causará um erro fatal de violação de restrição!
UPDATE estoque_produtos 
SET quantidade = quantidade - 15 
WHERE id_item = 1;

-- Se houver erro, a transação fica em estado de falha (ABORTED)
ROLLBACK; -- Desfaz qualquer modificação parcial e restaura o saldo 10

-- 3. Demonstração de COMMIT com sucesso
BEGIN TRANSACTION;

UPDATE estoque_produtos 
SET quantidade = quantidade - 3 
WHERE id_item = 1;

COMMIT; -- Efetiva permanentemente a alteração no disco!
```

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Um programador júnior executou um `UPDATE` em uma base de produção esquecendo-se da cláusula `WHERE`. Se a sessão estava com a opção de autocommit ativada (`AUTOCOMMIT = ON`), o que acontece? Como o uso de blocos transacionais explícitos (`BEGIN ... COMMIT`) protege contra esse desastre?
2. Explique a diferença entre **Atomicidade** e **Durabilidade** no modelo ACID.
3. Em quais cenários corporativos o comando `TRUNCATE TABLE` deve ser estritamente preferido em relação ao `DELETE FROM`?

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 7:** *Instruções de Manipulação de Dados em SQL: INSERT, UPDATE e DELETE* (p. 195–204).  
   - **Capítulo 20:** *Conceitos de Processamento de Transações: Estados de Transação, Propriedades ACID e Controle de Recuperação* (p. 605–634).
2. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 3:** *Modificação do Banco de Dados: Inserções, Exclusões e Atualizações* (p. 75–84).  
   - **Capítulo 14:** *Transações: O Conceito de Transação, Atomicidade, Isolamento e Seriabilidade* (p. 497–526).
3. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - **Capítulo 7:** *Manipulação de Registros com INSERT, UPDATE e DELETE: Boas Práticas e Segurança* (p. 161–182).
4. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - **Capítulo 3:** *Integridade Relacional e Comportamento Operacional de Atualizações e Exclusões* (p. 70–88).
