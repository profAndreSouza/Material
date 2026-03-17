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

 
### 4.1 Criação do banco e das tabelas

```sql
CREATE DATABASE smartcampus;

CREATE TABLE local (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    bloco VARCHAR(100),
    descricao VARCHAR(500)
);

CREATE TABLE responsavel (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(100) NOT NULL
);


CREATE TABLE sensor (
    codigo SERIAL PRIMARY KEY,
    cod_local INTEGER,
    cod_responsavel INTEGER,
    nome VARCHAR(100) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    estado INTEGER NOT NULL,
    FOREIGN KEY(cod_local) REFERENCES local(codigo)
);

ALTER TABLE sensor ADD FOREIGN KEY (cod_responsavel) 
                       REFERENCES responsavel(codigo);

ALTER TABLE sensor ALTER COLUMN estado TYPE INTEGER USING estado::integer;


CREATE TABLE leitura (
    codigo SERIAL PRIMARY KEY,
    cod_sensor INTEGER,
    valor DECIMAL(10,2) NOT NULL,
    horario TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(cod_sensor) REFERENCES sensor(codigo)
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
INSERT INTO local (nome, tipo, bloco, descricao) VALUES
	('Laboratório IoT', 'Laboratório', 'A', 'Espaço para experimentos'),
	('Laboratório Redes', 'Laboratório', 'A', 'Computadores e Industriais'),
	('Sala 01', 'Sala de Aula', 'B', 'Sala de aula geral'),
	('Sala 02', 'Sala de Aula', 'B', 'Sala de aula geral'),
	('Biblioteca', 'Estudo', 'C', 'Espaço para leitura e pesquisa');

```

 
#### Responsáveis

```sql

INSERT INTO responsavel (nome, cargo) VALUES
	('Ronaldo de Assis', 'Técnico de Redes'),
	('Fábio Júnior', 'Mecânico Geral'),
	('Guilherme Arantes', 'Mecânico Geral'),
	('Leandro Guimarães', 'Técnico Eletrônica'),
	('Edilaine Pires', 'Técnico IoT');
```

 
#### Sensores

```sql
INSERT INTO sensor 
	(nome, modelo, estado, cod_local, cod_responsavel)
VALUES

-- Genérico
('Sensor Capacitivo', 'XT132B1FAL2', 1,
 (SELECT codigo FROM local WHERE nome = 'Laboratório IoT'),
 (SELECT codigo FROM responsavel WHERE nome = 'Fábio Júnior')),

-- Temperatura
('Sensor Temperatura Lab IoT', 'DHT22', 1,
 (SELECT codigo FROM local WHERE nome = 'Laboratório IoT'),
 (SELECT codigo FROM responsavel WHERE nome = 'Edilaine Pires')),

('Sensor Temperatura Sala 01', 'DHT11', 1,
 (SELECT codigo FROM local WHERE nome = 'Sala 01'),
 (SELECT codigo FROM responsavel WHERE nome = 'Leandro Guimarães')),

-- Umidade
('Sensor Umidade Lab Redes', 'DHT22', 1,
 (SELECT codigo FROM local WHERE nome = 'Laboratório Redes'),
 (SELECT codigo FROM responsavel WHERE nome = 'Ronaldo de Assis')),

('Sensor Umidade Biblioteca', 'DHT11', 1,
 (SELECT codigo FROM local WHERE nome = 'Biblioteca'),
 (SELECT codigo FROM responsavel WHERE nome = 'Edilaine Pires')),

-- Luminosidade
('Sensor Luminosidade Sala 02', 'LDR', 1,
 (SELECT codigo FROM local WHERE nome = 'Sala 02'),
 (SELECT codigo FROM responsavel WHERE nome = 'Leandro Guimarães')),

('Sensor Luminosidade Biblioteca', 'LDR', 1,
 (SELECT codigo FROM local WHERE nome = 'Biblioteca'),
 (SELECT codigo FROM responsavel WHERE nome = 'Guilherme Arantes')),

-- Mistos
('Sensor Temperatura Lab Redes', 'DHT22', 1,
 (SELECT codigo FROM local WHERE nome = 'Laboratório Redes'),
 (SELECT codigo FROM responsavel WHERE nome = 'Fábio Júnior')),

('Sensor Umidade Sala 01', 'DHT11', 1,
 (SELECT codigo FROM local WHERE nome = 'Sala 01'),
 (SELECT codigo FROM responsavel WHERE nome = 'Guilherme Arantes'));

```

 
#### Leituras

```sql

```

 
### 4.4 Atualização de dados

```sql

```

 
### 4.5 Remoção de dados

```sql

```

 
## 5 — Consultas com Funções de Agregação

### Quantidade de leituras por sensor

```sql

```

 
### Média de valores por local

```sql

```

 
### Sensor com maior valor registrado

```sql

```

 
### Quantidade de sensores por local

```sql

```

 
## 6 — Desafio Extra

```sql

```
