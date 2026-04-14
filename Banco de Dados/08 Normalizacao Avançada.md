# Normalização de Dados – Formas Normais Avançadas

## Cenário Base: Sistema Acadêmico de Alocação

Uma universidade mantém um sistema para controle de aulas com as seguintes características:

* Professores podem ministrar várias disciplinas
* Disciplinas podem ter mais de um professor
* Disciplinas podem ocorrer em múltiplas salas
* Professores podem ter acesso a várias salas
* Um mesmo horário pode conter múltiplas alocações
* O sistema precisa evoluir para suportar histórico

Os dados atualmente estão armazenados em uma única estrutura:

```sql
CREATE TABLE alocacao_geral (
    professor   TEXT,
    disciplina  TEXT,
    sala        TEXT,
    horario     TEXT,
    periodo     TEXT
);
```

Esse modelo concentra múltiplas entidades e relações em uma única tabela, o que gera redundância, inconsistência semântica e dificuldade de manutenção.


## BCNF (Forma Normal de Boyce-Codd)

A BCNF estabelece que, para toda dependência funcional X → Y, o determinante X deve ser uma superchave da relação.

No cenário acadêmico, uma dependência comum é:

Professor → Disciplina

Essa dependência pode surgir quando, em determinado período, um professor está associado a apenas uma disciplina. No entanto, Professor não é chave da tabela original, o que viola a BCNF.

Na prática, isso significa que a disciplina depende de um atributo que não identifica unicamente o registro, gerando redundância e anomalias de atualização.

Para resolver o problema, a relação é decomposta separando entidades e associações:

```sql
CREATE TABLE professor (
    id SERIAL PRIMARY KEY,
    nome TEXT UNIQUE
);

CREATE TABLE disciplina (
    id SERIAL PRIMARY KEY,
    nome TEXT UNIQUE
);

CREATE TABLE professor_disciplina (
    professor_id INT REFERENCES professor(id),
    disciplina_id INT REFERENCES disciplina(id),
    PRIMARY KEY (professor_id, disciplina_id)
);

CREATE TABLE alocacao (
    sala TEXT,
    horario TEXT,
    periodo TEXT,
    professor_id INT REFERENCES professor(id),
    PRIMARY KEY (sala, horario, periodo)
);
```

A partir dessa decomposição, toda dependência funcional passa a estar associada a uma chave válida.

### Carga de dados

```sql
INSERT INTO professor (nome) VALUES
('João Silva'),
('Maria Souza'),
('Carlos Lima'),
('Ana Paula');

INSERT INTO disciplina (nome) VALUES
('Banco de Dados'),
('Algoritmos'),
('Engenharia de Software'),
('Inteligência Artificial'),
('Big Data'),
('Redes de Computadores'),
('Machine Learning');

INSERT INTO professor_disciplina VALUES
(1,1), (1,5),
(2,2),
(3,3), (3,6),
(4,4), (4,7);

INSERT INTO alocacao VALUES
('Sala 101','Seg 19h','2024-1',1),
('Sala 102','Seg 19h','2024-1',1),
('Sala 201','Ter 19h','2024-1',2),
('Sala 301','Qua 19h','2024-1',3),
('Sala 401','Qui 19h','2024-1',4);
```


## 4FN (Quarta Forma Normal)

A 4FN trata de dependências multivaloradas. Essas dependências ocorrem quando um mesmo determinante possui múltiplos conjuntos de valores independentes associados a ele.

No cenário:

Professor →→ Disciplina
Professor →→ Sala

Isso indica que:

* um professor pode estar associado a várias disciplinas
* um professor pode estar associado a várias salas
* essas relações não dependem uma da outra

Quando esses dois conjuntos independentes são armazenados na mesma tabela, o banco gera combinações artificiais, ou seja, registros que não representam fatos reais.

Para eliminar esse problema, as relações devem ser separadas:

```sql
CREATE TABLE professor_disciplina_4fn (
    professor_id INT REFERENCES professor(id),
    disciplina_id INT REFERENCES disciplina(id),
    PRIMARY KEY (professor_id, disciplina_id)
);

CREATE TABLE professor_sala (
    professor_id INT REFERENCES professor(id),
    sala TEXT,
    PRIMARY KEY (professor_id, sala)
);
```

Essa decomposição garante que cada conjunto multivalorado seja tratado de forma independente, evitando explosão combinatória.

### Carga de dados

```sql
INSERT INTO professor_sala VALUES
(1,'Sala 101'),
(1,'Sala 102'),
(2,'Sala 201'),
(3,'Sala 301'),
(4,'Sala 401'),
(4,'Sala 402');
```


## 5FN (Quinta Forma Normal)

A 5FN trata de dependências de junção. Ela é necessária quando uma relação envolve três ou mais entidades e pode ser decomposta em várias relações menores, mas essa decomposição pode gerar combinações inválidas ao recompor os dados.

Considere a relação:

```sql
CREATE TABLE alocacao_ternaria (
    professor_id INT,
    disciplina_id INT,
    sala TEXT,
    PRIMARY KEY (professor_id, disciplina_id, sala)
);
```

Essa tabela representa uma associação simultânea entre professor, disciplina e sala. Dependendo das regras do domínio, nem toda combinação dessas três entidades é válida.

Ao decompor em relações binárias:

```sql
CREATE TABLE professor_disciplina_5fn (
    professor_id INT REFERENCES professor(id),
    disciplina_id INT REFERENCES disciplina(id),
    PRIMARY KEY (professor_id, disciplina_id)
);

CREATE TABLE disciplina_sala (
    disciplina_id INT REFERENCES disciplina(id),
    sala TEXT,
    PRIMARY KEY (disciplina_id, sala)
);

CREATE TABLE professor_sala_5fn (
    professor_id INT REFERENCES professor(id),
    sala TEXT,
    PRIMARY KEY (professor_id, sala)
);
```

A recomposição via JOIN pode gerar registros que nunca existiram no mundo real.

```sql
SELECT *
FROM professor_disciplina_5fn pd
JOIN disciplina_sala ds USING (disciplina_id)
JOIN professor_sala_5fn ps USING (professor_id, sala);
```

A 5FN exige que essa decomposição só seja aplicada quando for possível garantir que a recomposição não introduza dados inválidos, seja por regras do domínio ou restrições adicionais.

### Carga de dados

```sql
INSERT INTO disciplina_sala VALUES
(1,'Sala 101'),
(1,'Sala 102'),
(2,'Sala 201'),
(3,'Sala 301'),
(4,'Sala 401'),
(7,'Sala 402');
```


## 6FN (Sexta Forma Normal)

A 6FN leva a normalização ao nível máximo, decompondo os dados em fatos elementares, geralmente associados a intervalos de tempo.

No cenário acadêmico, é necessário registrar mudanças ao longo do tempo:

* um professor pode mudar de disciplina
* uma disciplina pode mudar de sala
* horários podem ser alterados

Uma estrutura não normalizada para isso seria:

```sql
CREATE TABLE alocacao_temporal (
    professor_id INT,
    disciplina_id INT,
    sala TEXT,
    horario TEXT,
    data_inicio DATE,
    data_fim DATE
);
```

Esse modelo mistura múltiplos fatos em uma única linha.

Na 6FN, cada fato é isolado:

```sql
CREATE TABLE professor_disciplina_hist (
    professor_id INT,
    disciplina_id INT,
    data_inicio DATE,
    data_fim DATE,
    PRIMARY KEY (professor_id, disciplina_id, data_inicio)
);

CREATE TABLE disciplina_sala_hist (
    disciplina_id INT,
    sala TEXT,
    data_inicio DATE,
    data_fim DATE,
    PRIMARY KEY (disciplina_id, sala, data_inicio)
);

CREATE TABLE professor_horario_hist (
    professor_id INT,
    horario TEXT,
    data_inicio DATE,
    data_fim DATE,
    PRIMARY KEY (professor_id, horario, data_inicio)
);
```

Esse modelo permite representar mudanças de forma independente e precisa.

### Carga de dados

```sql
INSERT INTO professor_disciplina_hist VALUES
(1,1,'2024-01-01','2024-06-30'),
(1,5,'2024-07-01','2024-12-31'),
(4,4,'2024-01-01','2024-12-31');

INSERT INTO disciplina_sala_hist VALUES
(1,'Sala 101','2024-01-01','2024-06-30'),
(1,'Sala 102','2024-07-01','2024-12-31'),
(4,'Sala 401','2024-01-01','2024-12-31');

INSERT INTO professor_horario_hist VALUES
(1,'Seg 19h','2024-01-01','2024-12-31'),
(4,'Qui 19h','2024-01-01','2024-12-31');
```

A reconstrução dos dados exige junções entre essas tabelas:

```sql
SELECT 
    p.nome,
    d.nome,
    ds.sala,
    ph.horario
FROM professor p
JOIN professor_disciplina_hist pdh ON p.id = pdh.professor_id
JOIN disciplina d ON d.id = pdh.disciplina_id
JOIN disciplina_sala_hist ds ON ds.disciplina_id = d.id
JOIN professor_horario_hist ph ON ph.professor_id = p.id
WHERE CURRENT_DATE BETWEEN pdh.data_inicio AND pdh.data_fim;
```


## Consultas para consumo (relatórios e API)

A normalização melhora a consistência dos dados, mas exige agregações para consumo em relatórios e APIs.

### STRING_AGG

```sql
SELECT 
    p.nome,
    STRING_AGG(d.nome, ', ' ORDER BY d.nome) AS disciplinas
FROM professor p
JOIN professor_disciplina pd ON p.id = pd.professor_id
JOIN disciplina d ON d.id = pd.disciplina_id
GROUP BY p.nome;
```

```sql
SELECT 
    p.nome,
    STRING_AGG(ps.sala, ', ' ORDER BY ps.sala) AS salas
FROM professor p
JOIN professor_sala ps ON p.id = ps.professor_id
GROUP BY p.nome;
```


### JSON_AGG

```sql
SELECT 
    p.nome,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'disciplina', d.nome
        )
    ) AS disciplinas
FROM professor p
JOIN professor_disciplina pd ON p.id = pd.professor_id
JOIN disciplina d ON d.id = pd.disciplina_id
GROUP BY p.nome;
```

Consulta com estrutura mais rica:

```sql
SELECT 
    p.nome,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'disciplina', d.nome,
            'salas', (
                SELECT JSON_AGG(ps.sala)
                FROM professor_sala ps
                WHERE ps.professor_id = p.id
            )
        )
    ) AS dados
FROM professor p
JOIN professor_disciplina pd ON p.id = pd.professor_id
JOIN disciplina d ON d.id = pd.disciplina_id
GROUP BY p.nome;
```

Consulta temporal:

```sql
SELECT 
    p.nome,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'disciplina', d.nome,
            'inicio', pdh.data_inicio,
            'fim', pdh.data_fim
        )
    ) AS historico
FROM professor p
JOIN professor_disciplina_hist pdh ON p.id = pdh.professor_id
JOIN disciplina d ON d.id = pdh.disciplina_id
GROUP BY p.nome;
```


## Exercício PBL

O sistema atual é definido por:

```sql
CREATE TABLE sistema_atual (
    professor TEXT,
    disciplina TEXT,
    sala TEXT,
    horario TEXT,
    periodo TEXT
);
```

Os alunos devem propor uma solução que:

* elimine redundâncias
* trate corretamente dependências funcionais e multivaloradas
* evite combinações inválidas
* permita evolução para histórico

Etapas:

1. Identificar dependências
2. Aplicar BCNF
3. Evoluir para 4FN
4. Avaliar necessidade de 5FN
5. Propor modelo temporal (6FN)

Entregáveis:

* modelo conceitual
* modelo lógico
* justificativas técnicas
* análise de trade-offs entre consistência e desempenho
