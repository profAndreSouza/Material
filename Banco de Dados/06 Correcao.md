# CORREÇÃO – Sistema IoT Smart Campus (PostgreSQL)

## 1 — Modelagem Conceitual (DER)

A modelagem conceitual tem como objetivo representar o problema do mundo real de forma abstrata, identificando os principais elementos e como eles se relacionam.

### Entidades identificadas

#### Local

Representa os ambientes físicos do campus onde sensores podem ser instalados.

Atributos:

* id_local (chave primária)
* nome
* bloco
* tipo

Cada local é único e pode conter vários sensores.

#### Sensor

Representa os dispositivos IoT instalados nos locais.

Atributos:

* id_sensor (chave primária)
* identificador (único)
* status (ativo ou manutenção)
* id_local (chave estrangeira)

Cada sensor está vinculado a um único local, mas um local pode possuir vários sensores.

#### Responsável Técnico

Representa as pessoas responsáveis pelos sensores.

Atributos:

* id_responsavel (chave primária)
* nome
* email

Um responsável pode gerenciar vários sensores, e um sensor pode ter mais de um responsável.

#### Leitura

Representa os dados coletados pelos sensores ao longo do tempo.

Atributos:

* id_leitura (chave primária)
* data_hora
* temperatura
* umidade
* luminosidade
* id_sensor (chave estrangeira)

Cada leitura pertence a um único sensor, mas um sensor pode gerar várias leituras.

### Relacionamentos

* Local 1:N Sensor
  Um local pode ter vários sensores, mas um sensor pertence a apenas um local.

* Sensor 1:N Leitura
  Um sensor pode gerar várias leituras ao longo do tempo.

* Sensor N:N Responsável
  Um sensor pode ter vários responsáveis e um responsável pode cuidar de vários sensores.

Esse relacionamento N:N exige uma tabela intermediária na modelagem lógica.

## 2 — Modelo Lógico (Relacional)

A modelagem lógica transforma o DER em tabelas relacionais.

### Tabelas definidas

* local
* sensor
* responsavel
* leitura
* sensor_responsavel (tabela associativa)

### Estrutura dos relacionamentos

* sensor possui uma chave estrangeira id_local referenciando local
* leitura possui uma chave estrangeira id_sensor referenciando sensor
* sensor_responsavel resolve o relacionamento N:N, contendo:

  * id_sensor
  * id_responsavel
    Ambas formando uma chave primária composta

## 3 — Modelo Físico (PostgreSQL)

No modelo físico são definidos tipos de dados, restrições e detalhes de implementação.

Principais decisões:

* Uso de SERIAL para geração automática de chaves primárias
* Uso de VARCHAR para textos
* Uso de TIMESTAMP para registros de tempo
* Uso de NUMERIC para valores medidos (garante precisão)
* Uso de CHECK para validar valores de status

## 4 — Implementação SQL

### 4.1 Criação das tabelas

```sql
CREATE TABLE local (
    id_local SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    bloco VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE sensor (
    id_sensor SERIAL PRIMARY KEY,
    identificador VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('ativo', 'manutencao')),
    id_local INT NOT NULL,
    FOREIGN KEY (id_local) REFERENCES local(id_local)
);

CREATE TABLE responsavel (
    id_responsavel SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE sensor_responsavel (
    id_sensor INT,
    id_responsavel INT,
    PRIMARY KEY (id_sensor, id_responsavel),
    FOREIGN KEY (id_sensor) REFERENCES sensor(id_sensor),
    FOREIGN KEY (id_responsavel) REFERENCES responsavel(id_responsavel)
);

CREATE TABLE leitura (
    id_leitura SERIAL PRIMARY KEY,
    data_hora TIMESTAMP NOT NULL,
    temperatura NUMERIC(5,2),
    umidade NUMERIC(5,2),
    luminosidade NUMERIC(8,2),
    id_sensor INT NOT NULL,
    FOREIGN KEY (id_sensor) REFERENCES sensor(id_sensor)
);
```

### 4.2 Alterações estruturais

As alterações estruturais permitem modificar tabelas já existentes.

```sql
ALTER TABLE local ADD COLUMN descricao TEXT;

ALTER TABLE sensor ALTER COLUMN status TYPE VARCHAR(30);
```

A primeira adiciona um novo atributo.
A segunda altera o tamanho do campo, demonstrando flexibilidade na evolução do banco.

### 4.3 Inserção de dados

Exemplo de inserção coerente com o cenário.

```sql
INSERT INTO local (nome, bloco, tipo) VALUES
('Laboratório IoT', 'A', 'Laboratório'),
('Sala 101', 'B', 'Sala'),
('Auditório', 'C', 'Administrativo'),
('Biblioteca', 'D', 'Estudo');
```

```sql
INSERT INTO responsavel (nome, email) VALUES
('Carlos Silva', 'carlos@email.com'),
('Ana Souza', 'ana@email.com'),
('Pedro Lima', 'pedro@email.com');
```

```sql
INSERT INTO sensor (identificador, status, id_local) VALUES
('SEN-001', 'ativo', 1),
('SEN-002', 'ativo', 1),
('SEN-003', 'manutencao', 2),
('SEN-004', 'ativo', 2),
('SEN-005', 'ativo', 3),
('SEN-006', 'ativo', 4);
```

```sql
INSERT INTO sensor_responsavel VALUES
(1,1),(2,1),(3,2),(4,2),(5,3),(6,3);
```

```sql
INSERT INTO leitura (data_hora, temperatura, umidade, luminosidade, id_sensor) VALUES
(NOW(), 25.5, 60, 300, 1),
(NOW(), 26.0, 58, 320, 1),
(NOW(), 24.0, 65, 280, 2),
(NOW(), 23.5, 70, 200, 2),
(NOW(), 27.0, 55, 400, 3),
(NOW(), 28.5, 50, 450, 3),
(NOW(), 22.0, 75, 150, 4),
(NOW(), 21.5, 80, 100, 4),
(NOW(), 29.0, 45, 500, 5),
(NOW(), 30.0, 40, 550, 5),
(NOW(), 20.0, 85, 90, 6),
(NOW(), 19.5, 88, 80, 6),
(NOW(), 26.5, 57, 330, 1),
(NOW(), 24.5, 63, 290, 2),
(NOW(), 27.5, 52, 420, 3),
(NOW(), 22.5, 78, 180, 4),
(NOW(), 29.5, 43, 520, 5),
(NOW(), 20.5, 82, 95, 6),
(NOW(), 25.0, 60, 310, 1),
(NOW(), 23.0, 68, 210, 2);
```

### 4.4 Atualização de dados

```sql
UPDATE sensor
SET status = 'manutencao'
WHERE id_sensor = 2;

UPDATE local
SET nome = 'Laboratório Avançado IoT'
WHERE id_local = 1;
```

Esses comandos simulam mudanças reais no sistema.

### 4.5 Remoção de dados

```sql
DELETE FROM leitura
WHERE id_leitura = 1;
```

Simula a exclusão de dados incorretos ou inválidos.

## 5 — Consultas com Funções de Agregação

### Quantidade de leituras por sensor

```sql
SELECT id_sensor, COUNT(*) AS total_leituras
FROM leitura
GROUP BY id_sensor;
```

Agrupa os dados por sensor e conta quantas leituras cada um possui.

### Temperatura média por local

```sql
SELECT l.nome, AVG(le.temperatura) AS media_temp
FROM leitura le
JOIN sensor s ON le.id_sensor = s.id_sensor
JOIN local l ON s.id_local = l.id_local
GROUP BY l.nome;
```

Relaciona três tabelas para calcular a média de temperatura por local.

### Sensor com maior temperatura registrada

```sql
SELECT id_sensor, MAX(temperatura) AS maior_temp
FROM leitura
GROUP BY id_sensor
ORDER BY maior_temp DESC
LIMIT 1;
```

Identifica o sensor que registrou o maior valor.

### Quantidade de sensores por local

```sql
SELECT l.nome, COUNT(s.id_sensor) AS total_sensores
FROM local l
LEFT JOIN sensor s ON l.id_local = s.id_local
GROUP BY l.nome;
```

Utiliza LEFT JOIN para garantir que locais sem sensores também apareçam.

## 6 — Desafio Extra

```sql
SELECT 
    l.nome,
    COUNT(DISTINCT s.id_sensor) AS qtd_sensores,
    AVG(le.temperatura) AS media_temperatura
FROM local l
LEFT JOIN sensor s ON l.id_local = s.id_local
LEFT JOIN leitura le ON s.id_sensor = le.id_sensor
GROUP BY l.nome
ORDER BY media_temperatura DESC;
```

Essa consulta combina múltiplos conceitos:

* junções entre tabelas
* uso de agregações
* eliminação de duplicidades com DISTINCT
* ordenação por média de temperatura

