# SIMULADO GERAL PREPARATÓRIO — AVALIAÇÃO FINAL (OFICINA 04)

**Componente Curricular:** Banco de Dados I  
**Data:** 13/11/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Simulado Geral e Revisão Prática Integrada — Modelagem Conceitual, Normalização até 3FN, DDL, DML, DQL Avançado e Views  
**Ambiente de Software:** SGBD Relacional (PostgreSQL / MySQL), DBeaver / pgAdmin e brModelo  
**Articulação com a Ementa:** Preparação integral para a Avaliação Final Prática de Banco de Dados (50% da Média Final)  

---

## 1. INFORMAÇÕES GERAIS E ESTRUTURA DO SIMULADO

Este simulado reproduz com exatidão o formato, o nível de exigência técnica, o rigor sintático e os critérios de correção da **Prova Prática Final de Banco de Dados** (agendada para 27/11/2026).

* **Duração Recomendada:** 100 minutos.
* **Formato:** Prova individual realizada no ambiente de laboratório com consulta livre a materiais de apoio, anotações de aula e documentações oficiais de SQL.
* **Composição das Questões:**
  - **Parte A (2,0 pts):** Fundamentação Teórica, Álgebra Relacional e Formas Normais.
  - **Parte B (3,0 pts):** Modelagem Conceitual (DER) e Mapeamento para Modelo Lógico Relacional.
  - **Parte C (2,0 pts):** Implementação Física em SQL DDL com Restrições de Integridade.
  - **Parte D (3,0 pts):** Consultas Analíticas em SQL DQL com `JOINs`, Agrupamentos, Subconsultas e `VIEW`.

---

## 2. CADERNO DE QUESTÕES DO SIMULADO

### PARTE A: FUNDAMENTAÇÃO TEÓRICA E NORMALIZAÇÃO (2,0 pontos)

#### Questão 01 (1,0 pt) — Análise de Formas Normais e Anomalias
Considere a relação de histórico hospitalar abaixo, onde a chave primária identificadora da consulta é composta por $(\underline{\text{CRM\_Medico}}, \underline{\text{Cod\_Paciente}}, \underline{\text{Data\_Consulta}})$:

$$\text{CONSULTAS} (\underline{\text{CRM\_Medico}}, \underline{\text{Cod\_Paciente}}, \underline{\text{Data\_Consulta}}, \text{Nome\_Medico}, \text{Especialidade}, \text{Nome\_Paciente}, \text{Telefone\_Paciente}, \text{Diagnostico}, \text{Valor\_Consulta})$$

a) **(0,50 pt)** Identifique as **dependências funcionais parciais** presentes na relação e explique por que a relação viola a **Segunda Forma Normal (2FN)**.  
b) **(0,50 pt)** Apresente a decomposição completa da relação até a **Terceira Forma Normal (3FN)**, escrevendo os esquemas relacionais finais com suas respectivas Chaves Primárias ($\text{PK}$) e Estrangeiras ($\text{FK}$).

---

#### Questão 02 (1,0 pt) — Álgebra Relacional e Integridade Referencial
Explique tecnicamente:
a) **(0,50 pt)** A diferença conceitual e de resultado prático entre uma operação de junção **INNER JOIN** e um **LEFT OUTER JOIN** quando a tabela à direita não possui correspondência para uma chave estrangeira.  
b) **(0,50 pt)** O que acontece operacionalmente no banco de dados ao tentar excluir um registro pai cuja chave estrangeira associada na tabela filha foi configurada com a cláusula `ON DELETE RESTRICT` versus `ON DELETE CASCADE`.

---

### PARTE B: MODELAGEM CONCEITUAL E MAPEAMENTO LÓGICO (3,0 pontos)

#### Questão 03 (3,0 pts) — Estudo de Caso de Locadora de Equipamentos Industriais
Uma locadora de equipamentos para construção civil necessita de um sistema informatizado:
- Cada **Equipamento** possui código tombamento (único), descrição, categoria (ex.: betoneira, compactador, gerador), valor diário de locação e status (`'DISPONIVEL'`, `'LOCADO'`, `'MANUTENCAO'`).
- Cada **Cliente** possui CNPJ/CPF (único), razão social/nome, telefone e endereço.
- Um **Contrato de Locação** possui número do contrato (único), data de início, data prevista de devolução, status do contrato e o cliente contratante.
- Um contrato pode envolver **vários equipamentos**, e um mesmo equipamento pode ser locado em **diversos contratos ao longo do tempo** (em datas diferentes). Em cada locação de um equipamento específico dentro de um contrato, é necessário registrar a quantidade de dias locados e o valor unitário cobrado por dia.

**Pede-se:**
a) **(1,50 pt)** Desenhe o **Diagrama Entidade-Relacionamento (DER)** indicando todas as entidades, atributos identificadores e as cardinalidades mínimas e máximas.  
b) **(1,50 pt)** Mapeie o DER resultante para o **Modelo Lógico Relacional**, destacando claramente todas as Chaves Primárias ($\text{PK}$) e Chaves Estrangeiras ($\text{FK}$).

---

### PARTE C: IMPLEMENTAÇÃO FÍSICA EM SQL DDL (2,0 pontos)

#### Questão 04 (2,0 pts) — Criação de Tabelas com Restrições
Com base no modelo lógico gerado na Questão 03, escreva o script SQL padrão ANSI para criar:
1. A tabela `equipamentos`, garantindo que o valor diário de locação seja estritamente positivo (`CHECK > 0`) e o status aceite apenas os valores pré-definidos.
2. A tabela associativa de itens do contrato (`contratos_equipamentos`), definindo sua chave primária composta e as duas chaves estrangeiras com ação referencial `ON DELETE RESTRICT`.

---

### PARTE D: CONSULTAS ANALÍTICAS EM SQL DQL (3,0 pontos)

Considere a base de dados populada da locadora:

#### Questão 05 (1,0 pt) — Relatório de Equipamentos com LEFT JOIN
Escreva uma consulta SQL que liste a descrição e a categoria de **todos os equipamentos cadastrados**, juntamente com o número do contrato onde estão alocados atualmente (caso estejam locados). Equipamentos disponíveis no pátio devem obrigatoriamente aparecer no resultado, exibindo a mensagem `'NO PÁTIO / DISPONÍVEL'` no lugar do número do contrato.

#### Questão 06 (1,0 pt) — Faturamento Agrupado com HAVING
Escreva uma consulta que agrupe as locações por **categoria de equipamento**, exibindo:
- O nome da categoria;
- O total de locações já realizadas para aquela categoria;
- O faturamento total acumulado ($\sum \text{dias} \times \text{valor\_diaria}$).
- Exiba apenas as categorias cujo faturamento total supere **R$ 5.000,00**, ordenando do maior para o menor faturamento.

#### Questão 07 (1,0 pt) — Criação de Visão Analítica (VIEW)
Crie uma visão permanente denominada `vw_contratos_ativos` que projete: o número do contrato, o nome do cliente, a data de início da locação, a data prevista de devolução e o valor total acumulado do contrato (somatório de todos os equipamentos do contrato).

---

## 3. GABARITO OFICIAL COMENTADO E CRITÉRIOS DE CORREÇÃO

### Gabarito da Questão 01:
a) **Dependências Parciais (Violação da 2FN):**
   - $\text{CRM\_Medico} \to \text{Nome\_Medico}, \text{Especialidade}$ (depende apenas de parte da chave).
   - $\text{Cod\_Paciente} \to \text{Nome\_Paciente}, \text{Telefone\_Paciente}$ (depende apenas de parte da chave).
   - A relação viola a 2FN porque existem atributos não-chave que dependem funcionalmente de um subconjunto próprio da chave primária composta.
b) **Esquema Relacional Normalizado em 3FN:**
   - $\text{MEDICOS} (\underline{\text{crm\_medico}}, \text{nome\_medico}, \text{especialidade})$
   - $\text{PACIENTES} (\underline{\text{cod\_paciente}}, \text{nome\_paciente}, \text{telefone\_paciente})$
   - $\text{CONSULTAS} (\underline{\text{crm\_medico}}^*, \underline{\text{cod\_paciente}}^*, \underline{\text{data\_consulta}}, \text{diagnostico}, \text{valor\_consulta})$

### Gabarito da Questão 02:
a) O **INNER JOIN** retorna exclusivamente as tuplas que possuem correspondência mútua em ambas as tabelas (interseção lógica). O **LEFT JOIN** retorna todas as tuplas da tabela à esquerda; se não houver linha correspondente na tabela à direita, as colunas do lado direito são preenchidas com valores `NULL`.  
b) Sob `ON DELETE RESTRICT`, o SGBD aborta a transação e impede a exclusão da tupla-pai caso existam tuplas-filhas apontando para ela, preservando a integridade. Sob `ON DELETE CASCADE`, a exclusão da tupla-pai remove automaticamente e em cascata todas as tuplas-filhas associadas.

### Gabarito da Questão 03:
**Mapeamento Lógico Relacional (Item b):**
* $\text{EQUIPAMENTOS} (\underline{\text{id\_equipamento}}, \text{cod\_tombamento}, \text{descricao}, \text{categoria}, \text{valor\_diaria\_base}, \text{status})$
* $\text{CLIENTES} (\underline{\text{id\_cliente}}, \text{cpf\_cnpj}, \text{nome\_razao}, \text{telefone}, \text{endereco})$
* $\text{CONTRATOS} (\underline{\text{id\_contrato}}, \text{num\_contrato}, \text{id\_cliente}^*, \text{data\_inicio}, \text{data\_previsao\_devolucao}, \text{status})$
* $\text{ITENS\_CONTRATO} (\underline{\text{id\_contrato}}^*, \underline{\text{id\_equipamento}}^*, \text{dias\_locados}, \text{valor\_diaria\_cobrado})$

### Gabarito da Questão 04 (DDL):

```sql
CREATE TABLE equipamentos (
    id_equipamento SERIAL PRIMARY KEY,
    cod_tombamento VARCHAR(20) NOT NULL UNIQUE,
    descricao VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    valor_diaria_base NUMERIC(10, 2) NOT NULL CHECK (valor_diaria_base > 0),
    status VARCHAR(20) DEFAULT 'DISPONIVEL' 
        CHECK (status IN ('DISPONIVEL', 'LOCADO', 'MANUTENCAO'))
);

CREATE TABLE itens_contrato (
    id_contrato INT NOT NULL,
    id_equipamento INT NOT NULL,
    dias_locados INT NOT NULL CHECK (dias_locados > 0),
    valor_diaria_cobrado NUMERIC(10, 2) NOT NULL CHECK (valor_diaria_cobrado > 0),
    CONSTRAINT pk_itens_contrato PRIMARY KEY (id_contrato, id_equipamento),
    CONSTRAINT fk_itens_contrato FOREIGN KEY (id_contrato) 
        REFERENCES contratos(id_contrato) ON DELETE RESTRICT,
    CONSTRAINT fk_itens_equipamento FOREIGN KEY (id_equipamento) 
        REFERENCES equipamentos(id_equipamento) ON DELETE RESTRICT
);
```

### Gabarito das Questões 05, 06 e 07 (DQL e VIEW):

```sql
-- Questão 05: LEFT JOIN com tratamento de NULL
SELECT eq.descricao, 
       eq.categoria, 
       COALESCE(c.num_contrato, 'NO PÁTIO / DISPONÍVEL') AS situacao_locacao
FROM equipamentos eq
LEFT JOIN itens_contrato ic ON eq.id_equipamento = ic.id_equipamento
LEFT JOIN contratos c ON ic.id_contrato = c.id_contrato AND c.status = 'ATIVO';

-- Questão 06: Agrupamento com HAVING
SELECT eq.categoria,
       COUNT(ic.id_equipamento) AS total_locacoes,
       SUM(ic.dias_locados * ic.valor_diaria_cobrado) AS faturamento_total
FROM equipamentos eq
INNER JOIN itens_contrato ic ON eq.id_equipamento = ic.id_equipamento
GROUP BY eq.categoria
HAVING SUM(ic.dias_locados * ic.valor_diaria_cobrado) > 5000.00
ORDER BY faturamento_total DESC;

-- Questão 07: Criação da VIEW
CREATE VIEW vw_contratos_ativos AS
SELECT c.num_contrato,
       cli.nome_razao AS nome_cliente,
       c.data_inicio,
       c.data_previsao_devolucao,
       SUM(ic.dias_locados * ic.valor_diaria_cobrado) AS valor_total_contrato
FROM contratos c
INNER JOIN clientes cli ON c.id_cliente = cli.id_cliente
INNER JOIN itens_contrato ic ON c.id_contrato = ic.id_contrato
WHERE c.status = 'ATIVO'
GROUP BY c.num_contrato, cli.nome_razao, c.data_inicio, c.data_previsao_devolucao;
```

---

## 4. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - **Capítulo 3:** *Integridade Relacional, Restrições de Chave e Integridade Referencial* (p. 61–88).  
   - **Capítulo 6:** *Formas Normais I, II e III: Conceituação Matemática e Teorema de Fagin* (p. 153–194).
2. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 7:** *SQL Básico: Restrições de Tabela, Modificações de Esquema e Consultas Simples* (p. 165–204).  
   - **Capítulo 8:** *SQL Avançado: Consultas Complexas, Junções Externas, Agrupamentos e Criação de Visões (Views)* (p. 205–242).
3. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 2:** *Modelo Entidade-Relacionamento e Regras de Negócio* (p. 35–66).  
   - **Capítulo 5:** *Linguagem SQL Aplicada: Construção de Estruturas Físicas e Consultas de Gestão* (p. 131–168).
4. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - **Capítulo 4:** *Junções Avançadas e Tratamento de Nulos* (p. 77–108).  
   - **Capítulo 6:** *Subconsultas, Operações de Conjunto e Criação de Tabelas/Visões Virtuais* (p. 135–160).
5. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 4:** *SQL Intermediário: Junções Expressivas, Tipos de Integridade e Mecanismo de Visões* (p. 85–124).
