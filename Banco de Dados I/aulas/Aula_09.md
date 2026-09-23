# ROTEIRO DE AULA EXPANDIDO — AULA 09

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 02/10/2026 &nbsp;|&nbsp; **Data Programada:** 06/11/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Funções de Agregação, Agrupamentos (`GROUP BY`, `HAVING`) e Junções Multitabelas (`INNER`, `LEFT`, `RIGHT JOIN`)  
**Ambiente de Software:** SGBD Relacional (PostgreSQL / MySQL) e DBeaver Community  
**Articulação com o PPC:** Competência 1 e 2 — Integrar bases de dados relacionais e gerar relatórios analíticos complexos para tomada de decisão  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula prática e intensiva de laboratório, você será capaz de:
1. Utilizar funções estatísticas e de resumo do SQL: **`COUNT`**, **`SUM`**, **`AVG`**, **`MIN`** e **`MAX`**, compreendendo como cada uma trata valores nulos (`NULL`).
2. Sumarizar conjuntos de registros categóricos utilizando a cláusula **`GROUP BY`**, aplicando a **Regra de Ouro do Agrupamento**.
3. Diferenciar o momento exato de processamento e a finalidade prática entre a cláusula **`WHERE`** (filtro pré-agregação de tuplas) e a cláusula **`HAVING`** (filtro pós-agregação de grupos).
4. Compreender a álgebra e a sintaxe das operações de junção: **`INNER JOIN`**, **`LEFT JOIN`**, **`RIGHT JOIN`** e **`FULL OUTER JOIN`**.
5. Construir consultas analíticas integrando 3 ou mais tabelas através de chaves primárias e estrangeiras, sem gerar produtos cartesianos indesejados.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 Funções de Agregação e o Tratamento de `NULL`

As funções de agregação colapsam múltiplas linhas de entrada em um único valor escalar resultante:
* **`COUNT(*)`:** Conta o total de linhas retornadas pela consulta, **incluindo** linhas com valores nulos.
* **`COUNT(coluna)`:** Conta apenas as linhas onde a respectiva coluna **não é nula** (`NOT NULL`).
* **`SUM(coluna)`:** Soma todos os valores numéricos não-nulos.
* **`AVG(coluna)`:** Calcula a média aritmética simples dos valores **não-nulos** ($\text{SUM} / \text{COUNT(coluna)}$).
* **`MIN(coluna)` / `MAX(coluna)`:** Retorna o menor/maior valor do conjunto (aplicável a números, textos e datas).

---

### 2.2 A Cláusula `GROUP BY` e Sua Regra de Ouro

O `GROUP BY` particiona as linhas da tabela em grupos com base em valores idênticos nas colunas especificadas.

> [!CAUTION]
> **A Regra de Ouro do SQL:** *Qualquer coluna presente na cláusula `SELECT` que NÃO seja um argumento de uma função de agregação DEVE, OBRIGATORIAMENTE, constar na cláusula `GROUP BY`.*
> 
> ```sql
> -- ERRADO (Falhará no PostgreSQL/Oracle):
> SELECT departamento, cargo, AVG(salario) FROM funcionarios GROUP BY departamento;
> 
> -- CORRETO:
> SELECT departamento, cargo, AVG(salario) FROM funcionarios GROUP BY departamento, cargo;
> ```

---

### 2.3 `WHERE` vs. `HAVING` — O Momento da Filtragem

A ordem lógica do motor SQL determina claramente o papel de cada filtro:

$$\text{Tabelas } \implies \mathbf{WHERE} \implies \text{Agrupamento } (\mathbf{GROUP\ BY}) \implies \text{Cálculo das Agregações} \implies \mathbf{HAVING} \implies \text{Ordenação}$$

* **`WHERE`:** Avaliado **linha a linha ANTES** de qualquer agrupamento. **Nunca pode conter funções de agregação** (ex.: `WHERE AVG(preco) > 50` é sintaticamente inválido!).
* **`HAVING`:** Avaliado **grupo a grupo DEPOIS** de calcular as agregações. Utilizado exclusivamente para filtrar condições sobre os totais e médias calculadas (ex.: `HAVING AVG(preco) > 50`).

---

### 2.4 As Operações de Junção (`JOIN`)

```
       INNER JOIN                   LEFT JOIN                  RIGHT JOIN
    (Apenas Interseção)       (Tudo de A + Pares de B)    (Tudo de B + Pares de A)
      ┌───┐   ┌───┐             ┌───┐   ┌───┐             ┌───┐   ┌───┐
     │   │███│   │             │███│███│   │             │   │███│███│
      └───┘   └───┘             └───┘   └───┘             └───┘   └───┘
        A       B                 A       B                 A       B
```

1. **`INNER JOIN`:** Retorna apenas as linhas que satisfazem plenamente a condição de junção (`ON a.id = b.id`). Linhas órfãs de ambos os lados são descartadas.
2. **`LEFT (OUTER) JOIN`:** Retorna **todas as linhas da tabela à esquerda** (`FROM`), mesmo que não haja correspondente na tabela à direita (`JOIN`). As colunas da direita sem paridade são preenchidas com `NULL`.
3. **`RIGHT (OUTER) JOIN`:** Retorna **todas as linhas da tabela à direita**, preenchendo colunas da esquerda com `NULL` quando não houver correspondente.
4. **`FULL (OUTER) JOIN`:** Retorna todas as linhas de ambas as tabelas, unindo os registros correspondentes e preenchendo com `NULL` onde não houver casamento.

---

## 3. PRÁTICA EM LABORATÓRIO (CONSULTAS GERENCIAIS)

Considere a base de dados industrial (tabelas `setores`, `maquinas`, `ordens_servico` e `tecnicos`):

```sql
-- 1. Relatório de Desempenho e Custo por Setor (INNER JOIN + GROUP BY)
SELECT s.nome_setor,
       COUNT(os.id_ordem) AS total_manutencoes,
       SUM(os.custo_pecas) AS gasto_total_pecas,
       ROUND(AVG(os.horas_trabalho), 2) AS media_horas_gastas
FROM ordens_servico os
INNER JOIN maquinas m ON os.id_maquina = m.id_maquina
INNER JOIN setores s ON m.id_setor = s.id_setor
GROUP BY s.nome_setor
ORDER BY gasto_total_pecas DESC;

-- 2. Identificação de Máquinas Ociosas ou sem Manutenção (LEFT JOIN)
SELECT m.tag_patrimonio, m.modelo, s.nome_setor
FROM maquinas m
LEFT JOIN ordens_servico os ON m.id_maquina = os.id_maquina
LEFT JOIN setores s ON m.id_setor = s.id_setor
WHERE os.id_ordem IS NULL; -- Filtro de ausência de registros associados!

-- 3. Filtragem de Técnicos Altamente Demandados (HAVING)
SELECT t.nome_tecnico,
       COUNT(os.id_ordem) AS total_os_atendidas
FROM ordens_servico os
INNER JOIN tecnicos t ON os.id_tecnico = t.id_tecnico
WHERE os.status_ordem = 'CONCLUIDA'
GROUP BY t.nome_tecnico
HAVING COUNT(os.id_ordem) >= 3;
```

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Explique por que a expressão `SELECT departamento, MAX(salario) FROM funcionarios WHERE MAX(salario) > 10000;` gera um erro fatal de sintaxe no SGBD e escreva a consulta corrigida.
2. Em um sistema de e-commerce, deseja-se emitir uma lista de **todos os clientes cadastrados**, incluindo inclusive aqueles que **nunca realizaram nenhuma compra**. Qual tipo de junção deve ser obrigatoriamente utilizado e por quê?
3. Qual é a diferença no resultado entre executar `SELECT COUNT(*) FROM produtos;` e `SELECT COUNT(categoria_id) FROM produtos;` caso existam 5 produtos com `categoria_id` igual a `NULL`?

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 8:** *SQL Avançado: Consultas Complexas, Junções Externas (OUTER JOINs), Agrupamentos e Funções de Agregação* (p. 205–242).
2. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - **Capítulo 4:** *A Operação de Junção (Natural, Theta e Externa) e o Problema da Informação Nula* (p. 89–118).
3. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - **Capítulo 4:** *Combinando Tabelas com INNER JOIN e LEFT JOIN* (p. 77–108).  
   - **Capítulo 5:** *Agregação de Dados, Funções de Grupo (COUNT, SUM, AVG) e a Cláusula HAVING* (p. 109–134).
4. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 3:** *Funções de Agregação, Agrupamento e Junções de Múltiplas Relações* (p. 70–84).
