# CORREÇÃO – Sistema IoT Smart Campus (PostgreSQL)

 
## 1 — Modelagem Conceitual (DER)

A modelagem conceitual representa os elementos do sistema e seus relacionamentos de forma abstrata, sem preocupação com tecnologia.

### Entidades e Atributos

#### Local

Representa os ambientes físicos do campus onde sensores estão instalados.

Atributos:

* id_local (chave primária)
* nome
* bloco
* tipo

Um local pode possuir vários sensores.

 
#### Responsável Técnico

Representa a pessoa responsável pelos sensores.

Atributos:

* id_responsavel (chave primária)
* nome
* cargo

Um responsável pode gerenciar vários sensores.

 
#### Sensor

Representa os dispositivos IoT instalados no campus.

Atributos:

* id_sensor (chave primária)
* identificador (único)
* tipo_medicao (ex: temperatura, umidade, luminosidade)
* status (ativo ou manutenção)
* id_local (chave estrangeira)
* id_responsavel (chave estrangeira)

Cada sensor:

* pertence a um único local
* possui um único responsável
* define o tipo de dado que será coletado

 
#### Leitura

Representa os dados coletados pelos sensores ao longo do tempo.

Atributos:

* id_leitura (chave primária)
* data_hora
* valor
* id_sensor (chave estrangeira)

O tipo do valor é interpretado com base no tipo do sensor.

 
### Relacionamentos

* Local 1:N Sensor
  Um local pode ter vários sensores.

* Responsável 1:N Sensor
  Um responsável pode gerenciar vários sensores.

* Sensor 1:N Leitura
  Um sensor pode gerar várias leituras ao longo do tempo.

 
## 2 — Modelo Lógico (Relacional)

A modelagem lógica traduz o DER para tabelas relacionais.

### Tabelas

* local
* responsavel
* sensor
* leitura

 
### Relacionamentos

* sensor.id_local → local.id_local
* sensor.id_responsavel → responsavel.id_responsavel
* leitura.id_sensor → sensor.id_sensor

Não há necessidade de tabela associativa, pois não existem mais relacionamentos N:N.

 
## 3 — Modelo Físico (PostgreSQL)

Definições adotadas:

* SERIAL para chaves primárias com auto incremento
* VARCHAR para dados textuais
* TIMESTAMP para data e hora
* NUMERIC para o valor das leituras (permite representar diferentes tipos de medição)
* CHECK para validar o status do sensor

 
## 4 — Implementação SQL

 
### 4.1 Criação das tabelas

```sql
CREATE TABLE local (
    id_local SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    bloco VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE responsavel (
    id_responsavel SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(100) NOT NULL
);

CREATE TABLE sensor (
    id_sensor SERIAL PRIMARY KEY,
    identificador VARCHAR(50) UNIQUE NOT NULL,
    tipo_medicao VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('ativo', 'manutencao')),
    id_local INT NOT NULL,
    id_responsavel INT NOT NULL,
    FOREIGN KEY (id_local) REFERENCES local(id_local),
    FOREIGN KEY (id_responsavel) REFERENCES responsavel(id_responsavel)
);

CREATE TABLE leitura (
    id_leitura SERIAL PRIMARY KEY,
    data_hora TIMESTAMP NOT NULL,
    valor NUMERIC(10,2) NOT NULL,
    id_sensor INT NOT NULL,
    FOREIGN KEY (id_sensor) REFERENCES sensor(id_sensor)
);
```

 
### 4.2 Alterações estruturais

```sql
ALTER TABLE local ADD COLUMN descricao TEXT;

ALTER TABLE sensor ALTER COLUMN status TYPE VARCHAR(30);
```

A primeira alteração adiciona um novo atributo descritivo.
A segunda amplia o tamanho do campo de status.

 
### 4.3 Inserção de dados

#### Locais

```sql
INSERT INTO local (nome, bloco, tipo) VALUES
('Laboratório IoT', 'A', 'Laboratório'),
('Sala 101', 'B', 'Sala'),
('Auditório', 'C', 'Administrativo'),
('Biblioteca', 'D', 'Estudo');
```

 
#### Responsáveis

```sql
INSERT INTO responsavel (nome, cargo) VALUES
('Carlos Silva', 'Técnico de Laboratório'),
('Ana Souza', 'Engenheira de Automação'),
('Pedro Lima', 'Analista de IoT');
```

 
#### Sensores

```sql
INSERT INTO sensor (identificador, tipo_medicao, status, id_local, id_responsavel) VALUES
('SEN-001', 'temperatura', 'ativo', 1, 1),
('SEN-002', 'umidade', 'ativo', 1, 1),
('SEN-003', 'luminosidade', 'manutencao', 2, 2),
('SEN-004', 'temperatura', 'ativo', 2, 2),
('SEN-005', 'umidade', 'ativo', 3, 3),
('SEN-006', 'temperatura', 'ativo', 4, 3);
```

 
#### Leituras

```sql
INSERT INTO leitura (data_hora, valor, id_sensor) VALUES
(NOW(), 25.5, 1),
(NOW(), 26.0, 1),
(NOW(), 60.0, 2),
(NOW(), 58.0, 2),
(NOW(), 300.0, 3),
(NOW(), 320.0, 3),
(NOW(), 24.0, 4),
(NOW(), 23.5, 4),
(NOW(), 55.0, 5),
(NOW(), 57.0, 5),
(NOW(), 28.0, 6),
(NOW(), 29.0, 6),
(NOW(), 25.0, 1),
(NOW(), 59.0, 2),
(NOW(), 310.0, 3),
(NOW(), 22.0, 4),
(NOW(), 56.0, 5),
(NOW(), 30.0, 6),
(NOW(), 26.5, 1),
(NOW(), 61.0, 2);
```

 
### 4.4 Atualização de dados

```sql
UPDATE sensor
SET status = 'manutencao'
WHERE id_sensor = 2;

UPDATE responsavel
SET cargo = 'Coordenador de IoT'
WHERE id_responsavel = 1;
```

 
### 4.5 Remoção de dados

```sql
DELETE FROM leitura
WHERE id_leitura = 1;
```

 
## 5 — Consultas com Funções de Agregação

### Quantidade de leituras por sensor

```sql
SELECT id_sensor, COUNT(*) AS total_leituras
FROM leitura
GROUP BY id_sensor;
```

 
### Média de valores por local

```sql
SELECT l.nome, AVG(le.valor) AS media_valor
FROM leitura le
JOIN sensor s ON le.id_sensor = s.id_sensor
JOIN local l ON s.id_local = l.id_local
GROUP BY l.nome;
```

 
### Sensor com maior valor registrado

```sql
SELECT id_sensor, MAX(valor) AS maior_valor
FROM leitura
GROUP BY id_sensor
ORDER BY maior_valor DESC
LIMIT 1;
```

 
### Quantidade de sensores por local

```sql
SELECT l.nome, COUNT(s.id_sensor) AS total_sensores
FROM local l
LEFT JOIN sensor s ON l.id_local = s.id_local
GROUP BY l.nome;
```

 
## 6 — Desafio Extra

```sql
SELECT 
    l.nome,
    COUNT(DISTINCT s.id_sensor) AS qtd_sensores,
    AVG(le.valor) AS media_valor
FROM local l
LEFT JOIN sensor s ON l.id_local = s.id_local
LEFT JOIN leitura le ON s.id_sensor = le.id_sensor
GROUP BY l.nome
ORDER BY media_valor DESC;
```

 
## Encadeamento conceitual do modelo

Neste modelo, o tipo de dado coletado não está armazenado na leitura, mas sim no sensor. Isso permite:

* reutilizar a estrutura de leitura para qualquer tipo de sensor
* evitar redundância de dados
* manter flexibilidade para expansão do sistema

Cada leitura armazena apenas um valor numérico, e a interpretação desse valor depende do tipo de medição definido no sensor.

Esse padrão é bastante comum em sistemas IoT reais, onde diferentes sensores compartilham a mesma estrutura de armazenamento de dados.
