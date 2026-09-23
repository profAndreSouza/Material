# ROTEIRO DE AULA EXPANDIDO — AULA 10

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 16/10/2026 &nbsp;|&nbsp; **Data Programada:** 13/11/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Subconsultas (*Subqueries*), Visões Virtuais (`VIEWS`) e Revisão Integrada de Banco de Dados I  
**Ambiente de Software:** SGBD Relacional (PostgreSQL / MySQL) e DBeaver Community  
**Articulação com o PPC:** Competência 1 e 2 — Construir visões analíticas de alto nível, aplicar abstração externa e consolidar a engenharia completa de banco de dados relacional  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula de consolidação técnica, você será capaz de:
1. Compreender o mecanismo e o escopo de execução de **Subconsultas (*Subqueries*)**.
2. Construir **Subconsultas Escalares** para filtros dinâmicos baseados em agregações globais (ex.: clientes acima da média de compras).
3. Utilizar **Subconsultas de Conjunto** com operadores relacionais especiais: **`IN`**, **`NOT IN`**, **`ANY`** e **`ALL`**.
4. Escrever e otimizar **Subconsultas Correlacionadas** utilizando os operadores de existência **`EXISTS`** e **`NOT EXISTS`**.
5. Criar e gerenciar **Visões Virtuais (`CREATE VIEW`)**, aplicando-as na prática para simplificação de relatórios e garantia de segurança da informação (mascaramento de dados confidenciais).
6. Consolidar a esteira completa de engenharia de software de banco de dados: **Requisitos $\to$ DER $\to$ Lógico $\to$ 3FN $\to$ DDL $\to$ DML $\to$ DQL Avançado**, preparando-se para a Avaliação Final.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 Tipologia das Subconsultas (*Subqueries*)

Uma subconsulta é uma instrução `SELECT` aninhada dentro de outra instrução SQL (`SELECT`, `INSERT`, `UPDATE` ou `DELETE`):

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TIPOS DE SUBCONSULTAS                           │
├──────────────────┬─────────────────────────────────────────────────────┤
│ 1. Escalar       │ Retorna exatamente 1 linha e 1 coluna (um valor só).│
│ 2. De Conjunto   │ Retorna 1 coluna com múltiplas linhas (usada com IN)│
│ 3. De Tabela     │ Retorna múltiplas linhas e colunas (usada no FROM). │
│ 4. Correlacionada│ A consulta interna depende de valores da externa.   │
└──────────────────┴─────────────────────────────────────────────────────┘
```

#### A. Subconsulta Escalar no `WHERE`:
Encontra registros cujo valor supera uma métrica calculada dinamicamente:
```sql
-- Produtos com preço estritamente acima do preço médio de todo o catálogo:
SELECT nome_produto, preco_unitario
FROM produtos
WHERE preco_unitario > (SELECT AVG(preco_unitario) FROM produtos);
```

#### B. Subconsulta Correlacionada com `EXISTS` / `NOT EXISTS`:
O operador `EXISTS` avalia se a subconsulta retorna pelo menos uma tupla. O motor do SGBD interrompe a busca na subconsulta assim que encontra o primeiro casamento (*Short-Circuit Evaluation*), tornando-o muito performático:
```sql
-- Encontrar clientes que NUNCA realizaram nenhum pedido:
SELECT c.id_cliente, c.nome_razao
FROM clientes c
WHERE NOT EXISTS (
    SELECT 1 
    FROM pedidos_itens p 
    WHERE p.id_cliente = c.id_cliente
);
```

---

### 2.2 Visões Virtuais (`VIEWS`)

Uma **View** é uma tabela virtual que não armazena dados físicos próprios no disco (com exceção das visões materializadas). Ela armazena no catálogo de metadados uma instrução `SELECT` compilada. Toda vez que a View é consultada, o SGBD executa sua consulta-base de forma transparente.

```
┌────────────────────────────────────────────────────────┐
│              USUÁRIOS / RELATÓRIOS DO POWER BI         │
│             SELECT * FROM vw_resumo_vendas;            │
└───────────────────────────┬────────────────────────────┘
                            │ Consulta a Visão Virtual
┌───────────────────────────▼────────────────────────────┐
│                    VIEW COMPILADA                      │
│      Encapsula 4 JOINs complexos, cálculos e GROUP BY  │
└───────────────────────────┬────────────────────────────┘
                            │ Busca dados nas tabelas-base
┌───────────────────────────▼────────────────────────────┐
│               TABELAS FÍSICAS REAIS NO DISCO           │
│        clientes, pedidos, itens_pedido, produtos       │
└────────────────────────────────────────────────────────┘
```

#### Vantagens Estratégicas do Uso de Views:
1. **Segurança de Acesso e Privacidade:** Permite expor para o departamento financeiro apenas nome e valor de vendas, omitindo colunas confidenciais como margem de lucro líquida ou dados pessoais (LGPD).
2. **Simplicidade para Aplicações:** Desenvolvedores front-end ou ferramentas de BI não precisam escrever consultas com múltiplos `JOINs`; basta consultar a View como se fosse uma tabela comum.
3. **Independência Lógica de Dados (Nível Externo ANSI/SPARC):** Se a estrutura das tabelas físicas mudar, altera-se apenas a definição da View, sem quebrar os relatórios dos clientes.

---

## 3. PRÁTICA EM LABORATÓRIO (VIEWS E SUBCONSULTAS)

Execute no DBeaver o bloco de código a seguir:

```sql
-- 1. Criação de Visão Gerencial com JOINs e Cálculos
CREATE OR REPLACE VIEW vw_faturamento_por_setor AS
SELECT s.nome_setor,
       s.responsavel,
       COUNT(os.id_ordem) AS total_ordens,
       SUM(os.custo_pecas) AS gasto_pecas_total,
       ROUND(AVG(os.horas_trabalho), 2) AS media_horas
FROM setores s
INNER JOIN maquinas m ON s.id_setor = m.id_setor
INNER JOIN ordens_servico os ON m.id_maquina = os.id_maquina
WHERE os.status_ordem = 'CONCLUIDA'
GROUP BY s.nome_setor, s.responsavel;

-- 2. Consumindo a View como se fosse uma tabela simples
SELECT * 
FROM vw_faturamento_por_setor
WHERE gasto_pecas_total > 500.00
ORDER BY gasto_pecas_total DESC;

-- 3. Subconsulta no FROM (Tabela Derivada / Inline View)
-- Identificar máquinas cujo custo total de manutenção supera R$ 1.000,00
SELECT sub.tag_patrimonio, sub.modelo, sub.custo_acumulado
FROM (
    SELECT m.tag_patrimonio, m.modelo, SUM(os.custo_pecas) AS custo_acumulado
    FROM maquinas m
    INNER JOIN ordens_servico os ON m.id_maquina = os.id_maquina
    GROUP BY m.tag_patrimonio, m.modelo
) AS sub
WHERE sub.custo_acumulado > 1000.00;
```

---

## 4. REVISÃO GERAL INTEGRADA — O CICLO DE ENGENHARIA DE DADOS

Para a Prova Prática Final, certifique-se de dominar o fluxo completo:

```
[ Requisitos de Negócio ] 
          │
          ▼
[ Modelagem Conceitual ]  ===> Entidades, Atributos e DER no brModelo
          │
          ▼
[ Mapeamento Lógico ]     ===> Regras 1:1, 1:N, N:N, Definição de PKs e FKs
          │
          ▼
[ Normalização (3FN) ]    ===> 1FN (Atomicidade), 2FN (DF Total), 3FN (Sem Transitivas)
          │
          ▼
[ Implementação Física ]  ===> DDL: CREATE TABLE com NOT NULL, UNIQUE, CHECK, FK
          │
          ▼
[ Carga e Manipulação ]   ===> DML: INSERT, UPDATE, DELETE com Transações ACID
          │
          ▼
[ Inteligência de Dados ] ===> DQL: SELECT, WHERE, JOINs, GROUP BY, HAVING e VIEWs
```

---

## 5. EXERCÍCIOS DE FIXAÇÃO

1. Explique por que o operador `NOT IN` pode retornar um conjunto completamente vazio quando a subconsulta contém pelo menos um registro com valor `NULL`. Por que o operador `NOT EXISTS` é mais seguro e recomendado nessa situação?
2. Uma View consome espaço em disco para armazenar os dados resultantes da consulta? O que acontece com os dados exibidos por uma View quando as tabelas-base subjacentes são atualizadas via `UPDATE`?
3. Crie o comando SQL para uma View chamada `vw_produtos_criticos` que selecione todos os produtos com estoque menor ou igual a 5 unidades, ocultando a coluna de custo de fábrica.

---

## 6. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 8:** *SQL Avançado: Subconsultas Aninhadas e Correlacionadas, Operadores EXISTS/NOT EXISTS e Criação/Atualização de Visões (Views)* (p. 215–242).
2. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 3:** *Subconsultas no WHERE, Operações de Conjunto e Funções Escalares* (p. 68–84).  
   - **Capítulo 4:** *Visões (Views): Definição de Visões, Visões Atualizáveis e Segurança de Acesso* (p. 95–108).
3. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - **Capítulo 6:** *Subconsultas e Tabelas Virtuais: Subqueries Escalares, Correlacionadas e Visões* (p. 135–160).
4. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - **Capítulo 4:** *Visões e Teoria da Atualizabilidade de Relações Virtuais* (p. 105–118).
