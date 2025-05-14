# Aula 3 – Normalização de Dados

## Objetivos da Normalização

A **normalização** é um processo utilizado no projeto de bancos de dados relacionais com o objetivo de **eliminar redundâncias** e **garantir a integridade dos dados**. Esse processo segue uma série de **formas normais** (normal forms), cada uma com critérios específicos que devem ser atendidos.

### Benefícios da normalização:

* Redução da **redundância** de dados.
* Evita **anomalias** de inserção, atualização e exclusão.
* Melhora a **consistência** e a **manutenibilidade** do banco.
* Facilita a **compreensão** e o **crescimento** do modelo de dados.

---

## Primeira, Segunda e Terceira Formas Normais

### 1ª Forma Normal (1FN)

Uma tabela está na **Primeira Forma Normal** se:

* Todos os atributos contêm **valores atômicos** (não divisíveis).
* Não há grupos repetitivos (multivalorados).

#### Exemplo (violando a 1FN):

| ClienteID | Nome      | Telefones                      |
| --------- | --------- | ------------------------------ |
| 1         | Ana Silva | (11)99999-0000, (11)98888-1111 |

#### Após normalização (1FN):

| ClienteID | Nome      | Telefone       |
| --------- | --------- | -------------- |
| 1         | Ana Silva | (11)99999-0000 |
| 1         | Ana Silva | (11)98888-1111 |

---

### 2ª Forma Normal (2FN)

Uma tabela está na **Segunda Forma Normal** se:

* Está na **1FN**.
* Todos os atributos **não-chave** dependem **totalmente da chave primária** (sem dependência parcial).

Aplica-se especialmente em tabelas com **chave composta**.

#### Exemplo (violando a 2FN):

| MatriculaID | DisciplinaID | NomeDisciplina | Nota |
| ----------- | ------------ | -------------- | ---- |
| 1001        | BD01         | Banco de Dados | 8.0  |

→ `NomeDisciplina` depende apenas de `DisciplinaID`, não da chave composta completa.

#### Após normalização (2FN):

**Tabela Matriculas:**

| MatriculaID | DisciplinaID | Nota |
| ----------- | ------------ | ---- |
| 1001        | BD01         | 8.0  |

**Tabela Disciplinas:**

| DisciplinaID | NomeDisciplina |
| ------------ | -------------- |
| BD01         | Banco de Dados |

---

### 3ª Forma Normal (3FN)

Uma tabela está na **Terceira Forma Normal** se:

* Está na **2FN**.
* **Não existem dependências transitivas** (um atributo não-chave depende de outro atributo não-chave).

#### Exemplo (violando a 3FN):

| ClienteID | Nome      | CEP       | Cidade    |
| --------- | --------- | --------- | --------- |
| 1         | Ana Silva | 12345-000 | São Paulo |

→ `Cidade` depende de `CEP`, que depende de `ClienteID`.

#### Após normalização (3FN):

**Tabela Clientes:**

| ClienteID | Nome      | CEP       |
| --------- | --------- | --------- |
| 1         | Ana Silva | 12345-000 |

**Tabela CEPs:**

| CEP       | Cidade    |
| --------- | --------- |
| 12345-000 | São Paulo |

---

## Desnormalização e Casos de Uso

A **desnormalização** é o processo oposto à normalização. Ela envolve **reintroduzir redundância** propositalmente em determinadas situações para **melhorar o desempenho** de consultas ou simplificar o acesso aos dados.

### Quando usar:

* Em sistemas com **grande volume de leitura** e baixa atualização.
* Para **reduzir a complexidade** de `JOINs` muito frequentes.
* Em **data warehouses** ou **modelos dimensionais**.

### Riscos da desnormalização:

* Redundância de dados.
* Possibilidade de inconsistências.
* Maior complexidade para manter integridade.

---

## Referências

* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
* DATE, C. J. *Introdução a Sistemas de Banco de Dados*. Campus.
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* W3Schools SQL Normalization Tutorial: [https://www.w3schools.com/sql/sql\_normalization.asp](https://www.w3schools.com/sql/sql_normalization.asp)
* IBM Documentation on Normalization: [https://www.ibm.com/docs/en/db2](https://www.ibm.com/docs/en/db2)
