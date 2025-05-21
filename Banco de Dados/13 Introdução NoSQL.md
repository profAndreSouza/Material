# Aula 13 – Introdução aos Bancos NoSQL

## 1. O que é NoSQL?

### Significado

* **NoSQL** significa "*Not Only SQL*".
  Ou seja, não é que **não usa SQL**, mas sim que **vai além** do modelo relacional tradicional.

* Ao contrário dos bancos de dados relacionais, que armazenam informações em **tabelas estruturadas** com colunas e linhas, os bancos NoSQL oferecem **modelos mais flexíveis** para armazenamento de dados.

#### Exemplo prático:
> Imagine um aplicativo de redes sociais onde cada usuário pode ter um número variado de fotos, comentários, amigos, preferências e notificações.
> Em vez de usar várias tabelas relacionais com joins complexos, um banco NoSQL pode armazenar tudo isso em um único documento JSON com campos aninhados.


### Origem e motivação

Os bancos NoSQL surgiram por volta dos anos 2000, impulsionados por gigantes como Google, Amazon e Facebook que enfrentavam desafios que os bancos relacionais tradicionais não conseguiam resolver de forma eficiente.

#### Desafios que motivaram a criação:

* Volume de dados crescendo rapidamente (Big Data).
* Dados com formatos variados (texto, imagens, vídeos, JSON, logs, etc.).
* Exigência de resposta em tempo real.
* Altas taxas de leitura e escrita simultâneas.
* Necessidade de escalabilidade horizontal (crescimento distribuído).

#### Exemplo histórico:
> O Google criou o **Bigtable**, um sistema de armazenamento NoSQL, para lidar com grandes volumes de dados em seus serviços como Gmail e Google Maps.
> O Facebook adotou o **Cassandra**, outro banco NoSQL, para manter a performance de seu sistema de mensagens.


### Características principais

#### 1. Escalabilidade horizontal

* Capacidade de adicionar mais servidores (nós) à rede para suportar mais dados ou tráfego, sem precisar de máquinas mais potentes.
* Diferente dos bancos SQL, que normalmente escalam **verticalmente** (aumentando CPU, RAM do mesmo servidor).

> **Exemplo:**
> Um e-commerce em crescimento pode adicionar servidores ao cluster do MongoDB para manter o desempenho mesmo em períodos como a Black Friday.

#### 2. Alta performance

* Otimizado para operações de leitura e escrita rápidas, principalmente com dados não estruturados ou semiestruturados.
* Evita o uso de JOINs complexos, o que melhora a velocidade de acesso.

#### Exemplo:
> Um sistema de recomendação de vídeos pode usar Redis (chave-valor) para retornar sugestões em milissegundos.

#### 3. Flexibilidade de modelo de dados

* Não é necessário definir um esquema rígido (como em bancos SQL). Cada "registro" pode ter campos diferentes.
* Ideal para projetos em constante evolução, onde o formato dos dados pode mudar com o tempo.

#### Exemplo:
> Um app de cadastro de usuários pode começar com nome e e-mail, e depois adicionar telefone, endereço e foto de perfil — tudo sem alterar tabelas.

#### 4. Alta disponibilidade

* Muitos bancos NoSQL são projetados para funcionar mesmo se parte do sistema falhar (resiliência).
* Usam técnicas como **replicação** (cópias dos dados em diferentes servidores) e **sharding** (divisão de dados entre servidores).

#### Exemplo:
> Em um banco NoSQL como Cassandra, se um servidor cair, outro pode assumir automaticamente, garantindo que o sistema continue funcionando sem interrupções.

## 2. Modelos de Bancos NoSQL

Os bancos NoSQL se destacam por **não seguir o modelo relacional tradicional**. Cada modelo é otimizado para diferentes tipos de aplicações e formas de acesso aos dados.

### Visão Geral dos Modelos

| Modelo      | Ideal para...                         | Estrutura Principal  |
| ----------- | ------------------------------------- | -------------------- |
| Documento   | Dados semiestruturados e flexíveis    | Documentos JSON/BSON |
| Chave-valor | Acesso rápido por chave única         | Pares chave\:valor   |
| Grafo       | Relacionamentos complexos             | Nós e arestas        |
| Colunar     | Grandes volumes e análise por colunas | Colunas              |


### a) Modelo Documento

#### Exemplos: MongoDB, CouchDB, ArangoDB

#### Como funciona:

* Os dados são armazenados em **documentos** com estrutura semelhante a **JSON** (ou **BSON** no caso do MongoDB).
* Cada documento representa uma entidade (ex: um usuário, um pedido, um produto).
* Os campos dentro de um documento **podem variar** entre documentos da mesma coleção.

#### Analogia:

Pense em uma **coleção de arquivos JSON** num diretório, onde cada arquivo tem campos próprios — alguns com foto, outros com redes sociais, e assim por diante.

#### Exemplo de documento (MongoDB):

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "enderecos": [
    { "tipo": "residencial", "cidade": "São Paulo" },
    { "tipo": "trabalho", "cidade": "Campinas" }
  ],
  "preferencias": {
    "tema": "escuro",
    "notificacoes": true
  }
}
```

#### Vantagens:

* Flexibilidade para evoluir o modelo de dados.
* Suporte a dados aninhados e arrays.
* Boa performance para leitura e escrita de documentos inteiros.

#### Casos de uso:

* Sistemas de cadastro de usuários.
* Catálogos de produtos em e-commerce.
* Aplicações web com front-end em React/Vue.


### b) Modelo Chave-Valor

#### Exemplos: Redis, DynamoDB (modo key-value), Riak

#### Como funciona:

* Cada item é armazenado como um **par chave-valor**.
* A chave é **única** e usada para localizar diretamente o valor.
* O valor pode ser um número, string, JSON ou até binário.

#### Analogia:

Como um **dicionário** (ou objeto em JavaScript), onde você acessa o valor diretamente pela chave.

#### Exemplo:

```text
"usuario:12345" → "{ nome: 'Ana', idade: 28 }"
"sessao:token123" → "expira_em=2025-05-22"
```

#### Vantagens:

* Extremamente rápido para leitura e escrita.
* Simples e eficiente para operações diretas.

#### Casos de uso:

* Armazenar sessões de login.
* Caches de páginas ou resultados de busca.
* Contadores em tempo real (ex: curtidas, acessos).


### c) Modelo de Grafo

#### Exemplos: Neo4j, Amazon Neptune, ArangoDB (multi-modelo)

#### Como funciona:

* Os dados são representados como **nós** (entidades) e **arestas** (relacionamentos).
* Cada nó pode conter atributos (como nome, tipo, etc.).
* As arestas também podem conter propriedades (ex: data da conexão).

#### Analogia:

Como um **mapa de conexões** — pense em uma rede social, onde usuários estão conectados uns aos outros por relações como amizade, trabalho, interesses.

#### Exemplo (grafo social):

```
João —[amizade desde 2018]→ Maria
Maria —[segue]→ Pedro
Pedro —[trabalha com]→ João
```

#### Vantagens:

* Consultas de relacionamentos são muito rápidas e naturais.
* Ideal para redes com múltiplos tipos de conexão.

#### Casos de uso:

* Redes sociais (amizades, seguidores).
* Sistemas de recomendação ("quem comprou isso, também comprou...").
* Mapas de rotas, redes logísticas e genealogia.


### d) Modelo Colunar (Orientado a Colunas)

#### Exemplos: Apache Cassandra, HBase, ScyllaDB

#### Como funciona:

* Os dados são armazenados por **colunas**, e não por linhas.
* As colunas de um mesmo tipo são agrupadas fisicamente no disco.
* Facilita consultas analíticas que leem poucos campos de muitos registros.

#### Analogia:

Imagine uma planilha onde você lê apenas a **coluna “vendas”** de milhões de registros — esse modelo é otimizado para isso.

#### Exemplo simplificado:

```
Tabela: Vendas
ID | Cliente | Produto | Valor | Data
   (armazenado como colunas separadas)
```

#### Vantagens:

* Excelente desempenho para leituras analíticas e agregações.
* Escala horizontal de forma eficiente.

#### Casos de uso:

* Sistemas de Business Intelligence (BI).
* Análise de logs e eventos.
* Monitoramento de métricas em tempo real (ex: sensores IoT).


## 3. Diferenças entre NoSQL e Bancos Relacionais

Bancos NoSQL e bancos relacionais (SQL) atendem a **necessidades diferentes**, e a escolha entre eles depende do tipo de aplicação, do volume de dados, da estrutura e da forma como os dados serão acessados e escalados.

| Característica               | **Bancos Relacionais (SQL)**                   | **Bancos NoSQL**                                                       |
| ---------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------- |
| **Modelo de dados**          | Tabelas com colunas e linhas, com esquema fixo | Vários modelos: documento, chave-valor, grafo, colunar                 |
| **Linguagem de consulta**    | SQL (padrão)                                   | Linguagens específicas por tipo (ex: MongoDB usa BSON/JSON)            |
| **Escalabilidade**           | Vertical (aumentar capacidade do servidor)     | Horizontal (adicionar mais servidores ao cluster)                      |
| **Relacionamentos**          | JOINs bem definidos entre tabelas              | Relacionamentos são limitados ou evitados                              |
| **Consistência dos dados**   | Consistência forte com transações (ACID)       | Eventual ou configurável (BASE)                                        |
| **Flexibilidade estrutural** | Esquema rígido (estrutura pré-definida)        | Alta flexibilidade; campos podem variar                                |
| **Casos de uso típicos**     | ERPs, bancos, sistemas de controle financeiro  | Aplicações web, redes sociais, sistemas de recomendação, IoT, Big Data |


### Detalhamento dos principais pontos:

### Modelo de Dados

* **Relacional (SQL):**

  * Os dados são organizados em tabelas com colunas fixas.

  * Cada linha deve seguir o mesmo formato (mesmo número e tipo de colunas).

  #### Exemplo: Uma tabela `clientes` com colunas `id`, `nome`, `email`, `telefone`.

* **NoSQL:**

  * Dados podem ser armazenados de forma mais flexível, por exemplo em documentos com campos diferentes.

  > *Exemplo (MongoDB):* Um cliente pode ter só nome e e-mail, outro pode ter endereço e redes sociais.


### Linguagem de Consulta

* **SQL:** Usa comandos padronizados como `SELECT`, `JOIN`, `INSERT`, `UPDATE`, `DELETE`.

* **NoSQL:** Cada banco tem sua própria API ou sintaxe (ex: consultas em JSON no MongoDB, comandos simples no Redis).

  #### Exemplo:
  > MongoDB usa:
  >
  > ```json
  > db.usuarios.find({ idade: { $gt: 25 } })
  > ```


### Escalabilidade

* **SQL:** Escala verticalmente (melhorar o hardware do mesmo servidor).
* **NoSQL:** Escala horizontalmente (adiciona novos servidores à rede/distribuição).

#### Exemplo: O Cassandra consegue armazenar petabytes de dados distribuindo as informações automaticamente entre vários nós.


### Relacionamentos

* **SQL:** Suporte robusto a relacionamentos com `JOINs` e integridade referencial.

* **NoSQL:** Em muitos casos, os dados relacionados são **incorporados** no mesmo documento (embutidos), para evitar `JOINs`.

  #### Exemplo:
  > Em vez de ter uma tabela separada de endereços, o MongoDB armazena os endereços **dentro** do documento do cliente.


### Consistência dos Dados

* **SQL:** Segue o modelo **ACID** (Atomicidade, Consistência, Isolamento, Durabilidade).
* **NoSQL:** Segue geralmente o modelo **BASE** (Basicamente Disponível, Estado Flexível, Consistência Eventual), favorecendo escalabilidade e desempenho.

> *ACID:* é ideal para bancos e sistemas financeiros.
> *BASE:* é aceitável para redes sociais ou sistemas com alta tolerância a atraso na atualização.


### Flexibilidade de Estrutura

* **SQL:** É necessário definir a estrutura dos dados (schema) antes de usá-los.
* **NoSQL:** Permite inserir registros com campos diferentes na mesma coleção.

#### Exemplo:
> Em MongoDB, documentos diferentes na coleção `produtos` podem ter atributos distintos como `cor`, `tamanho`, ou `material`, sem causar erro.


### Casos de Uso Típicos

| Tipo de Sistema                 | Melhor com...        | Por quê?                                           |
| ------------------------------- | -------------------- | -------------------------------------------------- |
| Sistema bancário, ERP, estoque  | **Relacional (SQL)** | Precisa de transações confiáveis e relacionamentos |
| Aplicativo de rede social, chat | **NoSQL**            | Dados variados, escalabilidade e alta performance  |
| Análise de dados (Big Data)     | **NoSQL**            | Volume grande e flexível, sem schema fixo          |
| Sistema de cadastro simples     | Ambos (depende)      | SQL para estrutura fixa, NoSQL para flexibilidade  |


## Projeto Prático – Cadastro de Produtos e Clientes em uma Loja Virtual

### Enunciado:

Você foi contratado para desenvolver o backend de um sistema de **loja virtual** que armazena informações sobre **clientes**, **produtos** e **pedidos**. A empresa deseja utilizar o **MongoDB** por conta da sua flexibilidade e facilidade de escalabilidade.

O sistema deverá armazenar:

* Informações de **clientes** (nome, email, endereço, telefone, preferências).
* Informações de **produtos** (nome, categoria, preço, estoque, descrição).
* Informações de **pedidos** (cliente, produtos comprados, data, total, status).

Você irá:

* Criar as coleções.
* Inserir dados.
* Fazer consultas com filtros e projeções.
* Atualizar e excluir registros.
* Fazer agregações simples.


## Passo a Passo do Projeto

### Pré-requisitos:

* MongoDB instalado ou uso de MongoDB Atlas (nuvem).
* Um cliente para acessar o MongoDB, como o [MongoDB Compass](https://www.mongodb.com/try/download/compass) ou via terminal/Node.js.


### 1. Criar o banco de dados e coleções

```js
use loja_virtual;

db.createCollection("clientes");
db.createCollection("produtos");
db.createCollection("pedidos");
```


### 2. Inserir documentos nas coleções

#### Inserir clientes

```js
db.clientes.insertMany([
  {
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "11999999999",
    endereco: {
      rua: "Rua A",
      cidade: "São Paulo",
      estado: "SP"
    },
    preferencias: ["eletrônicos", "livros"]
  },
  {
    nome: "Ana Costa",
    email: "ana@email.com",
    telefone: "21988888888",
    endereco: {
      rua: "Rua B",
      cidade: "Rio de Janeiro",
      estado: "RJ"
    },
    preferencias: ["moda", "beleza"]
  }
]);
```

#### Inserir produtos

```js
db.produtos.insertMany([
  { nome: "Notebook Dell", categoria: "eletrônicos", preco: 4500, estoque: 10 },
  { nome: "Tênis Nike", categoria: "moda", preco: 300, estoque: 25 },
  { nome: "Livro MongoDB", categoria: "livros", preco: 80, estoque: 100 }
]);
```

#### Inserir pedido

```js
db.pedidos.insertOne({
  cliente_email: "joao@email.com",
  produtos: [
    { nome: "Notebook Dell", preco: 4500, quantidade: 1 },
    { nome: "Livro MongoDB", preco: 80, quantidade: 2 }
  ],
  data: new Date(),
  total: 4660,
  status: "confirmado"
});
```


### 3. Consultas

#### Buscar todos os clientes

```js
db.clientes.find();
```

#### Buscar apenas nomes e emails

```js
db.clientes.find({}, { nome: 1, email: 1, _id: 0 });
```

#### Buscar produtos da categoria "moda"

```js
db.produtos.find({ categoria: "moda" });
```

#### Buscar pedidos do cliente "João Silva"

```js
db.pedidos.find({ cliente_email: "joao@email.com" });
```


### 4. Atualizações

#### Atualizar estoque do produto "Livro MongoDB"

```js
db.produtos.updateOne(
  { nome: "Livro MongoDB" },
  { $inc: { estoque: -2 } }
);
```


### 5. Remoções

#### Remover produto fora de linha

```js
db.produtos.deleteOne({ nome: "Tênis Nike" });
```


### 6. Agregações simples

#### Total de pedidos por status

```js
db.pedidos.aggregate([
  { $group: { _id: "$status", total: { $sum: 1 } } }
]);
```


## Exercícios

1. Adicionar campo de avaliação dos produtos.
2. Criar pedidos com múltiplos clientes (testar mais de um).
3. Calcular o valor total do pedido com base nos preços reais dos produtos (via `$lookup`).
4. Criar um relatório com os 3 produtos mais vendidos.
