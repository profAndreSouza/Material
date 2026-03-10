# Exercício de Revisão – Modelagem e Manipulação de Banco de Dados para Sistema IoT

Uma universidade está desenvolvendo um projeto de **Smart Campus**, no qual sensores são instalados em laboratórios e salas para monitorar condições ambientais como temperatura, umidade e luminosidade.

Esses sensores enviam leituras periódicas para um sistema central que armazena as informações em um banco de dados para monitoramento e análise.

A equipe de desenvolvimento precisa projetar o banco de dados que permitirá:

* cadastrar locais do campus
* cadastrar dispositivos sensores
* registrar leituras enviadas pelos sensores
* identificar responsáveis técnicos pelos dispositivos

Seu papel é **modelar e implementar o banco de dados que dará suporte a esse sistema**.


# Parte 1 — Modelagem Conceitual (DER)

Com base no cenário apresentado, identifique as entidades necessárias e construa o **DER (Diagrama Entidade-Relacionamento)** contendo:

* entidades
* atributos
* chaves primárias
* relacionamentos
* cardinalidades

### Informações do sistema

O sistema deve contemplar os seguintes dados.

### Local

Representa um ambiente do campus onde sensores podem ser instalados.

Cada local pertence a um bloco ou setor do campus e pode representar diferentes tipos de ambientes, como salas de aula, laboratórios ou áreas administrativas.


### Sensor

Representa um dispositivo IoT instalado em um local do campus.

Cada sensor possui uma identificação única e pode estar em diferentes estados de funcionamento ao longo do tempo, como ativo ou em manutenção.

Um sensor está instalado em apenas um local, mas um local pode possuir vários sensores.


### Responsável Técnico

Representa a pessoa responsável pela manutenção, acompanhamento ou configuração dos sensores.

Um responsável pode cuidar de vários sensores ao mesmo tempo.


### Leitura de Sensor

Representa os dados coletados pelos sensores em determinados momentos.

Cada leitura é associada a um sensor e registra os valores coletados no ambiente monitorado.

Um sensor pode gerar diversas leituras ao longo do tempo.


# Parte 2 — Modelo Lógico

A partir do DER desenvolvido:

* transforme o modelo conceitual em **modelo lógico relacional**
* identifique:

  * tabelas
  * chaves primárias
  * chaves estrangeiras
  * relacionamentos entre as tabelas


# Parte 3 — Modelo Físico

Defina o **modelo físico do banco de dados**, especificando:

* tipos de dados adequados para cada campo
* restrições de integridade
* chaves primárias
* chaves estrangeiras
* campos obrigatórios (`NOT NULL`), quando necessário


# Parte 4 — Implementação SQL

Implemente o banco de dados utilizando **SQL**.

O script deve conter os seguintes comandos.


## 1 — Criação das tabelas

Utilize o comando:

`CREATE TABLE`

para criar todas as tabelas definidas no modelo físico.


## 2 — Alteração da estrutura

Após criar as tabelas, utilize pelo menos **duas alterações estruturais** utilizando:

`ALTER TABLE`

Essas alterações devem modificar a estrutura de alguma tabela existente.


## 3 — Inserção de dados

Insira **dados fictícios no banco** utilizando:

`INSERT`

Quantidade mínima de registros:

* 4 locais
* 6 sensores
* 3 responsáveis técnicos
* pelo menos 20 leituras de sensores


## 4 — Atualização de dados

Utilize o comando:

`UPDATE`

para simular alterações no sistema.

Por exemplo, podem ocorrer alterações em informações de sensores, responsáveis ou locais cadastrados.


## 5 — Remoção de dados

Utilize o comando:

`DELETE`

para remover registros do banco de dados, simulando situações como exclusão de registros incorretos ou dados de teste.


# Desafio Avançado

Crie consultas SQL utilizando **funções de agregação** para gerar indicadores do sistema.

O banco de dados deve ser capaz de responder perguntas como:

* Quantas leituras cada sensor gerou.
* Qual é a temperatura média registrada por local.
* Qual sensor registrou a maior temperatura.
* Quantos sensores existem em cada local.

Utilize funções como:

* `COUNT()`
* `AVG()`
* `MAX()`
* `MIN()`
* `SUM()`
* `GROUP BY`


# Desafio Extra

Crie uma consulta que apresente:

* o nome do local
* a quantidade de sensores instalados
* a temperatura média registrada nesse local

Os resultados devem ser apresentados **ordenados do local com maior temperatura média para o menor**.


# Entrega Esperada

1. DER
2. Modelo lógico
3. Modelo físico
4. Script SQL contendo:

   * `CREATE TABLE`
   * `ALTER TABLE`
   * `INSERT`
   * `UPDATE`
   * `DELETE`
   * consultas com **funções de agregação**.
