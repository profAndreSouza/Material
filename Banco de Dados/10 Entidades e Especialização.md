## Cenário Base

Considere um sistema de **gestão acadêmica** para uma instituição de ensino. Esse sistema controla:

* Alunos
* Professores
* Cursos
* Disciplinas
* Turmas
* Matrículas
* Avaliações

Ao longo do material, cada conceito será explicado e imediatamente aplicado nesse cenário, com exemplos de **consultas SQL e seus respectivos resultados esperados**.


# 1. Entidades e Tipos de Entidades

## 1.1 Entidade Forte

Entidade forte possui existência própria e chave primária independente.

### Exemplo: Aluno

```sql
CREATE TABLE aluno (
    id_aluno SERIAL PRIMARY KEY,
    nome TEXT NOT NULL
);

INSERT INTO aluno (nome) VALUES
('Ana'),
('Bruno'),
('Carlos');
```

### Consulta

```sql
SELECT * FROM aluno;
```

### Resultado esperado

| id_aluno | nome   |
| -------- | ------ |
| 1        | Ana    |
| 2        | Bruno  |
| 3        | Carlos |


## 1.2 Entidade Fraca

Depende de outra entidade e possui chave composta.

### Exemplo: Item de Avaliação depende de Avaliação

```sql
CREATE TABLE avaliacao (
    id_avaliacao SERIAL PRIMARY KEY,
    descricao TEXT
);

CREATE TABLE item_avaliacao (
    id_item INT,
    id_avaliacao INT,
    descricao TEXT,
    PRIMARY KEY (id_item, id_avaliacao),
    FOREIGN KEY (id_avaliacao) REFERENCES avaliacao(id_avaliacao)
);

INSERT INTO avaliacao (descricao) VALUES
('Prova 1');

INSERT INTO item_avaliacao VALUES
(1, 1, 'Questão 1'),
(2, 1, 'Questão 2');
```

### Consulta

```sql
SELECT * FROM item_avaliacao;
```

### Resultado esperado

| id_item | id_avaliacao | descricao |
| ------- | ------------ | --------- |
| 1       | 1            | Questão 1 |
| 2       | 1            | Questão 2 |


## 1.3 Entidade Associativa

Representa relacionamento N:N com atributos próprios.

### Exemplo: Matrícula (Aluno ↔ Turma)

```sql
CREATE TABLE turma (
    id_turma SERIAL PRIMARY KEY,
    nome TEXT
);

CREATE TABLE matricula (
    id_aluno INT,
    id_turma INT,
    data_matricula DATE,
    PRIMARY KEY (id_aluno, id_turma),
    FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno),
    FOREIGN KEY (id_turma) REFERENCES turma(id_turma)
);

INSERT INTO turma (nome) VALUES
('Turma A'),
('Turma B');

INSERT INTO matricula VALUES
(1, 1, '2026-01-10'),
(1, 2, '2026-01-10'),
(2, 1, '2026-01-11');
```

### Consulta

```sql
SELECT a.nome, t.nome AS turma
FROM matricula m
JOIN aluno a ON a.id_aluno = m.id_aluno
JOIN turma t ON t.id_turma = m.id_turma;
```

### Resultado esperado

| nome  | turma   |
| ----- | ------- |
| Ana   | Turma A |
| Ana   | Turma B |
| Bruno | Turma A |


# 2. Relacionamentos e Verbos

Relacionamentos devem representar ações (verbos).

### Exemplo: Professor ministra Disciplina

```sql
CREATE TABLE professor (
    id_professor SERIAL PRIMARY KEY,
    nome TEXT
);

CREATE TABLE disciplina (
    id_disciplina SERIAL PRIMARY KEY,
    nome TEXT,
    id_professor INT,
    FOREIGN KEY (id_professor) REFERENCES professor(id_professor)
);

INSERT INTO professor (nome) VALUES
('João'),
('Maria');

INSERT INTO disciplina (nome, id_professor) VALUES
('Banco de Dados', 1),
('Algoritmos', 2);
```

### Consulta

```sql
SELECT p.nome AS professor, d.nome AS disciplina
FROM professor p
JOIN disciplina d ON d.id_professor = p.id_professor;
```

### Resultado esperado

| professor | disciplina     |
| --------- | -------------- |
| João      | Banco de Dados |
| Maria     | Algoritmos     |


# 3. Cardinalidade (Mínima e Máxima)

Define quantas ocorrências participam do relacionamento.

## Exemplo: Aluno (0,N) ↔ Turma (1,N)

Um aluno pode estar em várias turmas, e uma turma possui vários alunos.

### Consulta com agregação

```sql
SELECT a.nome,
       STRING_AGG(t.nome, ', ') AS turmas
FROM matricula m
JOIN aluno a ON a.id_aluno = m.id_aluno
JOIN turma t ON t.id_turma = m.id_turma
GROUP BY a.nome;
```

### Resultado esperado

| nome  | turmas           |
| ----- | ---------------- |
| Ana   | Turma A, Turma B |
| Bruno | Turma A          |


# 4. Participação (Total e Parcial)

## Exemplo

Disciplina tem participação total (precisa de professor)

Professor tem participação parcial (pode não ministrar)

```sql
INSERT INTO professor (nome) VALUES
('Carlos'); -- professor sem disciplina
```

### Consulta

```sql
SELECT p.nome, d.nome AS disciplina
FROM professor p
LEFT JOIN disciplina d ON d.id_professor = p.id_professor;
```

### Resultado esperado

| nome   | disciplina     |
| ------ | -------------- |
| João   | Banco de Dados |
| Maria  | Algoritmos     |
| Carlos | NULL           |


# 5. Especialização

## Exemplo: Pessoa → Aluno e Professor

```sql
CREATE TABLE pessoa (
    id_pessoa SERIAL PRIMARY KEY,
    nome TEXT
);

CREATE TABLE aluno_espec (
    id_pessoa INT PRIMARY KEY,
    matricula TEXT,
    FOREIGN KEY (id_pessoa) REFERENCES pessoa(id_pessoa)
);

CREATE TABLE professor_espec (
    id_pessoa INT PRIMARY KEY,
    salario NUMERIC,
    FOREIGN KEY (id_pessoa) REFERENCES pessoa(id_pessoa)
);

INSERT INTO pessoa (nome) VALUES
('Ana'),
('Bruno'),
('Carlos');

INSERT INTO aluno_espec VALUES
(1, 'A001');

INSERT INTO professor_espec VALUES
(2, 5000);
```

### Consulta

```sql
SELECT p.nome,
       a.matricula,
       pr.salario
FROM pessoa p
LEFT JOIN aluno_espec a ON a.id_pessoa = p.id_pessoa
LEFT JOIN professor_espec pr ON pr.id_pessoa = p.id_pessoa;
```

### Resultado esperado

| nome   | matricula | salario |
| ------ | --------- | ------- |
| Ana    | A001      | NULL    |
| Bruno  | NULL      | 5000    |
| Carlos | NULL      | NULL    |


# 6. Especialização Total vs Parcial

No exemplo acima:

* Carlos representa especialização parcial (não pertence a nenhuma subclasse)

Para especialização total, todas as pessoas deveriam estar em uma das tabelas filhas.

### Consulta para identificar violação

```sql
SELECT p.nome
FROM pessoa p
LEFT JOIN aluno_espec a ON a.id_pessoa = p.id_pessoa
LEFT JOIN professor_espec pr ON pr.id_pessoa = p.id_pessoa
WHERE a.id_pessoa IS NULL
  AND pr.id_pessoa IS NULL;
```

### Resultado esperado

| nome   |
| ------ |
| Carlos |


# 7. Atributos e Derivação

Exemplo de atributo derivado (idade)

```sql
CREATE TABLE aluno_idade (
    id_aluno SERIAL PRIMARY KEY,
    nome TEXT,
    data_nascimento DATE
);

INSERT INTO aluno_idade VALUES
(1, 'Ana', '2000-01-01');
```

### Consulta

```sql
SELECT nome,
       DATE_PART('year', AGE(data_nascimento)) AS idade
FROM aluno_idade;
```

### Resultado esperado

| nome | idade |
| ---- | ----- |
| Ana  | 26    |


# 8. Relacionamento N:N com Atributos

Aluno ↔ Disciplina com nota

```sql
CREATE TABLE aluno_disciplina (
    id_aluno INT,
    id_disciplina INT,
    nota NUMERIC,
    PRIMARY KEY (id_aluno, id_disciplina)
);

INSERT INTO aluno_disciplina VALUES
(1, 1, 8.5),
(1, 2, 7.0),
(2, 1, 9.0);
```

### Consulta

```sql
SELECT a.nome,
       d.nome,
       ad.nota
FROM aluno_disciplina ad
JOIN aluno a ON a.id_aluno = ad.id_aluno
JOIN disciplina d ON d.id_disciplina = ad.id_disciplina;
```

### Resultado esperado

| nome  | disciplina     | nota |
| ----- | -------------- | ---- |
| Ana   | Banco de Dados | 8.5  |
| Ana   | Algoritmos     | 7.0  |
| Bruno | Banco de Dados | 9.0  |
