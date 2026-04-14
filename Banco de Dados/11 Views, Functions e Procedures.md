## Cenário Base

Considere o mesmo sistema de **gestão acadêmica**, agora com foco em operações mais avançadas no banco de dados. Teremos as seguintes tabelas principais:

* aluno
* professor
* disciplina
* turma
* matricula
* aluno_disciplina (com nota)


## Estrutura base para os exemplos

```sql id="base01"
CREATE TABLE aluno (
    id_aluno SERIAL PRIMARY KEY,
    nome TEXT
);

CREATE TABLE professor (
    id_professor SERIAL PRIMARY KEY,
    nome TEXT
);

CREATE TABLE disciplina (
    id_disciplina SERIAL PRIMARY KEY,
    nome TEXT,
    id_professor INT REFERENCES professor(id_professor)
);

CREATE TABLE turma (
    id_turma SERIAL PRIMARY KEY,
    nome TEXT
);

CREATE TABLE matricula (
    id_aluno INT REFERENCES aluno(id_aluno),
    id_turma INT REFERENCES turma(id_turma),
    PRIMARY KEY (id_aluno, id_turma)
);

CREATE TABLE aluno_disciplina (
    id_aluno INT REFERENCES aluno(id_aluno),
    id_disciplina INT REFERENCES disciplina(id_disciplina),
    nota NUMERIC,
    PRIMARY KEY (id_aluno, id_disciplina)
);

INSERT INTO aluno (nome) VALUES ('Ana'), ('Bruno');
INSERT INTO professor (nome) VALUES ('João'), ('Maria');
INSERT INTO disciplina (nome, id_professor) VALUES 
('Banco de Dados', 1),
('Algoritmos', 2);

INSERT INTO aluno_disciplina VALUES
(1, 1, 8.5),
(1, 2, 7.0),
(2, 1, 9.0);
```


# 1. VIEWS

Views são **consultas salvas** que se comportam como tabelas virtuais.

## 1.1 Criando uma View

### Exemplo: notas dos alunos com disciplinas

```sql id="view01"
CREATE VIEW vw_notas_alunos AS
SELECT a.nome AS aluno,
       d.nome AS disciplina,
       ad.nota
FROM aluno_disciplina ad
JOIN aluno a ON a.id_aluno = ad.id_aluno
JOIN disciplina d ON d.id_disciplina = ad.id_disciplina;
```


## Consulta na View

```sql id="view02"
SELECT * FROM vw_notas_alunos;
```

### Resultado esperado

| aluno | disciplina     | nota |
| ----- | -------------- | ---- |
| Ana   | Banco de Dados | 8.5  |
| Ana   | Algoritmos     | 7.0  |
| Bruno | Banco de Dados | 9.0  |


## 1.2 View com agregação

```sql id="view03"
CREATE VIEW vw_media_aluno AS
SELECT a.nome,
       AVG(ad.nota) AS media
FROM aluno a
JOIN aluno_disciplina ad ON ad.id_aluno = a.id_aluno
GROUP BY a.nome;
```

### Consulta

```sql id="view04"
SELECT * FROM vw_media_aluno;
```

### Resultado esperado

| nome  | media |
| ----- | ----- |
| Ana   | 7.75  |
| Bruno | 9.0   |


# 2. FUNCTIONS

Functions retornam valores e podem ser usadas em consultas.

## 2.1 Function escalar

### Exemplo: calcular média de um aluno

```sql id="fn01"
CREATE OR REPLACE FUNCTION fn_media_aluno(p_id_aluno INT)
RETURNS NUMERIC AS $$
DECLARE
    v_media NUMERIC;
BEGIN
    SELECT AVG(nota)
    INTO v_media
    FROM aluno_disciplina
    WHERE id_aluno = p_id_aluno;

    RETURN v_media;
END;
$$ LANGUAGE plpgsql;
```


## Uso da Function

```sql id="fn02"
SELECT nome,
       fn_media_aluno(id_aluno) AS media
FROM aluno;
```

### Resultado esperado

| nome  | media |
| ----- | ----- |
| Ana   | 7.75  |
| Bruno | 9.0   |


## 2.2 Function retornando tabela

```sql id="fn03"
CREATE OR REPLACE FUNCTION fn_notas_aluno(p_id_aluno INT)
RETURNS TABLE (
    disciplina TEXT,
    nota NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT d.nome, ad.nota
    FROM aluno_disciplina ad
    JOIN disciplina d ON d.id_disciplina = ad.id_disciplina
    WHERE ad.id_aluno = p_id_aluno;
END;
$$ LANGUAGE plpgsql;
```


## Uso

```sql id="fn04"
SELECT * FROM fn_notas_aluno(1);
```

### Resultado esperado

| disciplina     | nota |
| -------------- | ---- |
| Banco de Dados | 8.5  |
| Algoritmos     | 7.0  |


# 3. PROCEDURES

Procedures executam ações (não retornam valor diretamente como SELECT).

## 3.1 Criando Procedure

### Exemplo: atualizar nota

```sql id="proc01"
CREATE OR REPLACE PROCEDURE pr_atualizar_nota(
    p_id_aluno INT,
    p_id_disciplina INT,
    p_nota NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE aluno_disciplina
    SET nota = p_nota
    WHERE id_aluno = p_id_aluno
      AND id_disciplina = p_id_disciplina;
END;
$$;
```


## Execução da Procedure

```sql id="proc02"
CALL pr_atualizar_nota(1, 1, 9.5);
```


## Verificando resultado

```sql id="proc03"
SELECT * FROM aluno_disciplina
WHERE id_aluno = 1 AND id_disciplina = 1;
```

### Resultado esperado

| id_aluno | id_disciplina | nota |
| -------- | ------------- | ---- |
| 1        | 1             | 9.5  |


# 4. Diferença prática entre VIEW, FUNCTION e PROCEDURE

## View

* Foco em consulta
* Não recebe parâmetros diretamente
* Simplifica SELECT complexos

```sql id="cmp01"
SELECT * FROM vw_media_aluno;
```


## Function

* Retorna valor ou tabela
* Pode ser usada dentro de SELECT

```sql id="cmp02"
SELECT fn_media_aluno(1);
```


## Procedure

* Executa ação (UPDATE, INSERT, DELETE)
* Chamada com `CALL`

```sql id="cmp03"
CALL pr_atualizar_nota(1, 2, 8.0);
```


# 5. Exemplo Integrado (uso conjunto)

```sql id="full01"
-- Atualiza nota
CALL pr_atualizar_nota(1, 2, 8.0);

-- Consulta via function
SELECT fn_media_aluno(1);

-- Consulta via view
SELECT * FROM vw_notas_alunos;
```


### Resultado esperado combinado

| aluno | disciplina     | nota |
| ----- | -------------- | ---- |
| Ana   | Banco de Dados | 9.5  |
| Ana   | Algoritmos     | 8.0  |

Média atualizada:

| media |
| ----- |
| 8.75  |

