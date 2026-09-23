# ROTEIRO DE AULA EXPANDIDO — AULA 01

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 07/08/2026 &nbsp;|&nbsp; **Data Programada:** 25/09/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Introdução aos Sistemas de Bancos de Dados, Arquitetura ANSI/SPARC e Configuração do Ambiente de Laboratório  
**Ambiente de Software:** SGBD Relacional (PostgreSQL v15 / MySQL v8.0), DBeaver Community e brModelo  
**Articulação com o PPC:** Competência 1 e 2 — Compreender os fundamentos de armazenamento estruturado, independência de dados e operação de SGBDs  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula inaugural, você será capaz de:
1. Diferenciar conceitualmente **Dado**, **Informação**, **Metadado** e **Conhecimento**.
2. Compreender a evolução histórica do armazenamento: de arquivos convencionais (*File-System*) aos Sistemas Gerenciadores de Bancos de Dados (**SGBD**).
3. Identificar os papéis fundamentais de um SGBD: atomicidade, controle de concorrência, recuperação de falhas, segurança e catálogo do sistema (*Data Dictionary*).
4. Explicar a **Arquitetura ANSI/SPARC em 3 Níveis** e demonstrar a relevância da **Independência Lógica e Física de Dados**.
5. Comparar os paradigmas de modelos de dados: Hierárquico, em Redes, **Relacional** e o panorama de transição para o modelo **Não Relacional (NoSQL)**.
6. Instalar, configurar e testar a conexão com o SGBD através do cliente gráfico **DBeaver** e inicializar a ferramenta de modelagem **brModelo**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 Dado vs. Informação vs. Metadado

Em engenharia de software e análise de sistemas, a distinção formal entre esses termos é a base para o projeto de qualquer solução de persistência:

* **Dado (*Data*):** Elemento atômico bruto, isolado e sem contexto semântico intrínseco.
  * *Exemplo:* `250.00` ou `'2026-09-25'`.
* **Informação (*Information*):** O dado estruturado, processado e contextualizado, dotado de significado para o usuário ou aplicação.
  * *Exemplo:* "A peça de código A-12 sofreu um custo de manutenção de R$ 250,00 no dia 25/09/2026".
* **Metadado (*Metadata*):** Dados sobre dados. Descrevem a estrutura, o tipo, o tamanho, as restrições e o significado dos elementos armazenados no banco.
  * *Exemplo:* No catálogo do SGBD, o campo `valor_peca` é do tipo `NUMERIC(10,2)`, obrigatório (`NOT NULL`) e possui valor padrão `0.00`.

```
┌──────────────┐      Processamento /      ┌──────────────────┐      Tomada de      ┌──────────────────┐
│ DADOS BRUTOS │ ────────────────────────> │   INFORMAÇÃO     │ ──────────────────> │   CONHECIMENTO   │
│  (Números,   │        Contexto           │ (Relatórios, KPIs│       Decisão       │ (Ações e Metas   │
│   Strings)   │                           │  e Dashboards)   │                     │   Estratégicas)  │
└──────────────┘                           └──────────────────┘                     └──────────────────┘
       ▲
       │ Catálogo de Tipos e Restrições
┌──────┴───────┐
│  METADADOS   │
└──────────────┘
```

---

### 2.2 Problemas da Abordagem Tradicional de Arquivos (*File-System*)

Antes do advento dos SGBDs nas décadas de 1960 e 1970, cada programa gerenciava seus próprios arquivos físicos no disco (arquivos `.txt`, `.dat`, `.csv`). Essa abordagem gerava graves limitações industriais:
1. **Redundância e Inconsistência de Dados:** O mesmo cliente cadastrado em arquivos diferentes com endereços conflitantes.
2. **Dificuldade de Acesso:** Cada nova consulta gerencial exigia escrever um novo programa compilado para varrer arquivos sequenciais.
3. **Isolamento de Dados:** Dados dispersos em múltiplos formatos incompatíveis.
4. **Problemas de Integridade:** Dificuldade em impor regras corporativas (ex.: saldo não pode ser negativo).
5. **Problemas de Atomicidade e Concorrência:** Se a energia acabava no meio da gravação de um lote, o arquivo ficava corrompido, e acessos simultâneos causavam perda de atualizações (*Lost Updates*).

---

### 2.3 A Arquitetura ANSI/SPARC em 3 Níveis

Para desacoplar as aplicações de software da estrutura física gravada no disco, o comitê ANSI/SPARC definiu a arquitetura tripartite:

```
┌────────────────────────────────────────────────────────┐
│              NÍVEL EXTERNO (Visões de Usuários)        │
│    Visão Vendas          Visão Financeiro       Visão RH  │
└───────────────────────────┬────────────────────────────┘
                            │ Independência Lógica
┌───────────────────────────▼────────────────────────────┐
│              NÍVEL CONCEITUAL (Esquema Global)         │
│  Entidades, Atributos, Relacionamentos e Restrições    │
│  (Independe de como é gravado no disco físico)         │
└───────────────────────────┬────────────────────────────┘
                            │ Independência Física
┌───────────────────────────▼────────────────────────────┐
│              NÍVEL INTERNO / FÍSICO (Armazenamento)    │
│  Alocação de blocos, índices B-Tree, hash, compressão  │
└────────────────────────────────────────────────────────┘
```

* **Independência Física de Dados:** Capacidade de alterar a estrutura física (adicionar um índice, trocar de SSD, alterar a ordenação em disco) sem precisar modificar o esquema conceitual nem os programas de aplicação.
* **Independência Lógica de Dados:** Capacidade de alterar o esquema conceitual (adicionar uma nova coluna ou tabela) sem quebrar as visões externas existentes ou os relatórios que não utilizam aquele novo dado.

---

## 3. AMBIENTE DE LABORATÓRIO E PRÁTICA GUIADA

### 3.1 Instalação e Teste das Ferramentas
No laboratório de informática da Fatec Sorocaba, utilizaremos:
1. **SGBD Relacional:** PostgreSQL 15 / MySQL 8.0 rodando localmente ou em servidor institucional.
2. **DBeaver Community:** Cliente SQL universal aberto baseado em Java, com suporte a realce de sintaxe, visualização em grade e geração automática de diagramas relacionais.
3. **brModelo 3.0:** Ferramenta gráfica nacional acadêmica para modelagem conceitual (DER de Peter Chen) e lógica relacional.

### 3.2 Primeiro Teste de Comunicação via SQL (DDL e DQL Básico)
Abra o DBeaver, conecte-se à instância do laboratório e execute o script de validação de ambiente:

```sql
-- 1. Criação do esquema de teste do aluno
CREATE SCHEMA IF NOT EXISTS aula01_teste;

-- 2. Criação de tabela simples de verificação
CREATE TABLE aula01_teste.aluno_status (
    id_registro SERIAL PRIMARY KEY,
    nome_aluno VARCHAR(100) NOT NULL,
    ra_aluno VARCHAR(15) NOT NULL UNIQUE,
    data_acesso TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Inserção de registro de validação
INSERT INTO aula01_teste.aluno_status (nome_aluno, ra_aluno)
VALUES ('Estudante Teste', '202610001');

-- 4. Consulta do catálogo de metadados do PostgreSQL
SELECT table_name, column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema = 'aula01_teste';
```

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Explique por que a redundância não controlada de dados conduz fatalmente à **inconsistência de dados** em sistemas empresariais.
2. Defina com suas próprias palavras o conceito de **Independência Lógica de Dados** e descreva um cenário fabril onde ela se mostre fundamental.
3. No DBeaver, acesse a tabela `information_schema.tables` e explique o que representam as informações exibidas. Por que elas são consideradas **metadados**?
4. Diferencie brevemente o modelo relacional de dados (baseado em tabelas, linhas e chaves) dos modelos anteriores (hierárquico e redes).

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 1:** *Bancos de Dados e Usuários de Bancos de Dados* (p. 3–28).  
   - **Capítulo 2:** *Conceitos e Arquitetura do Sistema de Banco de Dados: Modelos, Esquemas e a Arquitetura ANSI/SPARC de Três Esquemas* (p. 29–42).
2. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 1:** *Introdução: Visão Geral dos Sistemas de Banco de Dados, Abstração de Dados e Motores de Armazenamento* (p. 1–32).
3. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 1:** *Conceitos Fundamentais de Banco de Dados e Ciclo de Vida da Informação* (p. 15–34).
