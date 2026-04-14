## Cenário Base

Sistema de **gestão acadêmica** com controle de notas, auditoria e regras de acesso. Agora vamos evoluir para:

* **Triggers** (automação e integridade)
* **Segurança** (roles, permissões, isolamento de dados)


## Estrutura Base

```sql id="adv01"
CREATE TABLE aluno (
    id_aluno SERIAL PRIMARY KEY,
    nome TEXT NOT NULL
);

CREATE TABLE disciplina (
    id_disciplina SERIAL PRIMARY KEY,
    nome TEXT NOT NULL
);

CREATE TABLE aluno_disciplina (
    id_aluno INT REFERENCES aluno(id_aluno),
    id_disciplina INT REFERENCES disciplina(id_disciplina),
    nota NUMERIC,
    PRIMARY KEY (id_aluno, id_disciplina)
);

INSERT INTO aluno (nome) VALUES ('Ana'), ('Bruno');
INSERT INTO disciplina (nome) VALUES ('Banco de Dados'), ('Algoritmos');

INSERT INTO aluno_disciplina VALUES
(1, 1, 8.0),
(1, 2, 7.0),
(2, 1, 9.0);
```


# 1. TRIGGERS

Triggers executam automaticamente ações no banco em eventos como INSERT, UPDATE ou DELETE.


## 1.1 Auditoria de alterações de nota

### Tabela de auditoria

```sql id="trg01"
CREATE TABLE auditoria_notas (
    id SERIAL PRIMARY KEY,
    id_aluno INT,
    id_disciplina INT,
    nota_antiga NUMERIC,
    nota_nova NUMERIC,
    data_alteracao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```


### Function da trigger

```sql id="trg02"
CREATE OR REPLACE FUNCTION fn_auditoria_notas()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.nota <> OLD.nota THEN
        INSERT INTO auditoria_notas (
            id_aluno,
            id_disciplina,
            nota_antiga,
            nota_nova
        )
        VALUES (
            OLD.id_aluno,
            OLD.id_disciplina,
            OLD.nota,
            NEW.nota
        );
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```


### Trigger

```sql id="trg03"
CREATE TRIGGER trg_auditoria_notas
AFTER UPDATE ON aluno_disciplina
FOR EACH ROW
EXECUTE FUNCTION fn_auditoria_notas();
```


### Teste

```sql id="trg04"
UPDATE aluno_disciplina
SET nota = 9.5
WHERE id_aluno = 1 AND id_disciplina = 1;
```


### Consulta

```sql id="trg05"
SELECT * FROM auditoria_notas;
```

### Resultado esperado

| id | id_aluno | id_disciplina | nota_antiga | nota_nova | data_alteracao |
| -- | -------- | ------------- | ----------- | --------- | -------------- |
| 1  | 1        | 1             | 8.0         | 9.5       | (timestamp)    |


## 1.2 Regra de negócio com trigger (validação)

Impedir nota maior que 10

```sql id="trg06"
CREATE OR REPLACE FUNCTION fn_validar_nota()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.nota > 10 THEN
        RAISE EXCEPTION 'Nota não pode ser maior que 10';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```


### Trigger BEFORE

```sql id="trg07"
CREATE TRIGGER trg_validar_nota
BEFORE INSERT OR UPDATE ON aluno_disciplina
FOR EACH ROW
EXECUTE FUNCTION fn_validar_nota();
```


### Teste

```sql id="trg08"
UPDATE aluno_disciplina
SET nota = 11
WHERE id_aluno = 1 AND id_disciplina = 2;
```

### Resultado esperado

```
ERROR: Nota não pode ser maior que 10
```


## 1.3 Trigger de derivação automática

Atualizar média do aluno automaticamente

### Tabela auxiliar

```sql id="trg09"
CREATE TABLE media_aluno (
    id_aluno INT PRIMARY KEY,
    media NUMERIC
);
```


### Function

```sql id="trg10"
CREATE OR REPLACE FUNCTION fn_atualizar_media()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO media_aluno (id_aluno, media)
    SELECT id_aluno, AVG(nota)
    FROM aluno_disciplina
    WHERE id_aluno = NEW.id_aluno
    GROUP BY id_aluno
    ON CONFLICT (id_aluno)
    DO UPDATE SET media = EXCLUDED.media;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```


### Trigger

```sql id="trg11"
CREATE TRIGGER trg_media_aluno
AFTER INSERT OR UPDATE ON aluno_disciplina
FOR EACH ROW
EXECUTE FUNCTION fn_atualizar_media();
```


### Teste

```sql id="trg12"
UPDATE aluno_disciplina
SET nota = 10
WHERE id_aluno = 1 AND id_disciplina = 2;
```


### Consulta

```sql id="trg13"
SELECT * FROM media_aluno;
```

### Resultado esperado

| id_aluno | media |
| -------- | ----- |
| 1        | 9.75  |
| 2        | 9.0   |


# 2. SEGURANÇA (ROLES E PERMISSÕES)


## 2.1 Criação de usuários (roles)

```sql id="sec01"
CREATE ROLE professor LOGIN PASSWORD '123';
CREATE ROLE coordenador LOGIN PASSWORD '123';
```


## 2.2 Controle de acesso

### Professor pode apenas consultar e atualizar notas

```sql id="sec02"
GRANT SELECT, UPDATE ON aluno_disciplina TO professor;
GRANT SELECT ON aluno TO professor;
```


### Coordenador tem acesso total

```sql id="sec03"
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO coordenador;
```


## 2.3 Revogação de acesso

```sql id="sec04"
REVOKE DELETE ON aluno_disciplina FROM professor;
```


## 2.4 Uso de VIEW para segurança

Criar uma visão limitada (sem expor IDs)

```sql id="sec05"
CREATE VIEW vw_notas_publicas AS
SELECT a.nome AS aluno,
       d.nome AS disciplina,
       ad.nota
FROM aluno_disciplina ad
JOIN aluno a ON a.id_aluno = ad.id_aluno
JOIN disciplina d ON d.id_disciplina = ad.id_disciplina;
```


### Permissão na view

```sql id="sec06"
GRANT SELECT ON vw_notas_publicas TO professor;
```


### Consulta

```sql id="sec07"
SELECT * FROM vw_notas_publicas;
```

### Resultado esperado

| aluno | disciplina     | nota |
| ----- | -------------- | ---- |
| Ana   | Banco de Dados | 9.5  |
| Ana   | Algoritmos     | 10   |
| Bruno | Banco de Dados | 9.0  |


## 2.5 Segurança com Function

Permitir acesso controlado via função

```sql id="sec08"
CREATE OR REPLACE FUNCTION fn_notas_professor()
RETURNS TABLE (
    aluno TEXT,
    disciplina TEXT,
    nota NUMERIC
)
AS $$
BEGIN
    RETURN QUERY
    SELECT a.nome, d.nome, ad.nota
    FROM aluno_disciplina ad
    JOIN aluno a ON a.id_aluno = ad.id_aluno
    JOIN disciplina d ON d.id_disciplina = ad.id_disciplina;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```


### Permissão

```sql id="sec09"
GRANT EXECUTE ON FUNCTION fn_notas_professor() TO professor;
```


### Uso

```sql id="sec10"
SELECT * FROM fn_notas_professor();
```

### Resultado esperado

| aluno | disciplina     | nota |
| ----- | -------------- | ---- |
| Ana   | Banco de Dados | 9.5  |
| Ana   | Algoritmos     | 10   |
| Bruno | Banco de Dados | 9.0  |


# 3. Integração Completa

```sql id="full_adv01"
-- tentativa inválida
UPDATE aluno_disciplina SET nota = 15 WHERE id_aluno = 1 AND id_disciplina = 1;

-- atualização válida
UPDATE aluno_disciplina SET nota = 9 WHERE id_aluno = 2 AND id_disciplina = 1;

-- verificar auditoria
SELECT * FROM auditoria_notas;

-- verificar média automática
SELECT * FROM media_aluno;

-- acesso via view segura
SELECT * FROM vw_notas_publicas;

-- acesso via function controlada
SELECT * FROM fn_notas_professor();
```


### Resultado esperado consolidado

* Erro ao inserir nota inválida
* Auditoria registrada
* Média recalculada automaticamente
* Dados acessíveis conforme permissões

