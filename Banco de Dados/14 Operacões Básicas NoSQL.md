# Aula 14 – Operações Básicas em NoSQL com MongoDB

## Objetivos da Aula:

* Compreender a estrutura de dados do MongoDB baseada em documentos JSON.
* Executar operações CRUD básicas: inserção, consulta, atualização e exclusão.
* Aprender como realizar backup e restore de bancos MongoDB.


## 1. Estrutura de Documentos no MongoDB (JSON)

O MongoDB é um banco de dados NoSQL orientado a documentos. Ele utiliza documentos no formato **BSON (Binary JSON)** para armazenar e manipular dados. Embora BSON seja o formato interno, a representação mais comum para leitura e escrita é o **JSON (JavaScript Object Notation)**.

Cada documento no MongoDB equivale a uma **linha em uma tabela relacional**, mas com maior flexibilidade de estrutura.

### 1.1. Exemplo de Documento

```json
{
  "_id": ObjectId("60e6f7aef9a1b67890abcd12"),
  "nome": "João Silva",
  "idade": 30,
  "email": "joao.silva@email.com",
  "enderecos": [
    { "rua": "Rua A", "cidade": "São Paulo" },
    { "rua": "Rua B", "cidade": "Campinas" }
  ]
}
```

### 1.2. Explicação dos Campos

* **`_id`**: Identificador único do documento. O MongoDB gera automaticamente um `ObjectId` se não for especificado. Serve como chave primária da coleção.
* **`nome`**: Campo de texto (string) representando o nome da pessoa.
* **`idade`**: Campo numérico (inteiro) representando a idade.
* **`email`**: Campo de texto com o endereço de e-mail.
* **`enderecos`**: Um array de documentos embutidos. Cada documento contém:

  * **`rua`**: Nome da rua.
  * **`cidade`**: Nome da cidade.

### 1.3. Características da Estrutura

* **Esquema flexível**: Diferentes documentos na mesma coleção podem ter campos diferentes.
* **Suporte a dados aninhados**: Pode-se armazenar arrays e subdocumentos dentro de documentos.
* **Tipos de dados suportados**: strings, números (inteiros e decimais), datas, booleanos, arrays, objetos (subdocumentos), binários, entre outros.

### 1.4. Comparação com Tabelas Relacionais

| Conceito Relacional | Conceito MongoDB     |
| ------------------- | -------------------- |
| Tabela              | Coleção (Collection) |
| Linha (registro)    | Documento (Document) |
| Coluna              | Campo (Field/Key)    |
| Chave primária      | `_id`                |

### 1.5. Exemplo de Documento com Tipos Mistos

```json
{
  "_id": ObjectId("60e6f7aef9a1b67890abcd13"),
  "produto": "Notebook",
  "preco": 3500.99,
  "disponivel": true,
  "fabricante": {
    "nome": "TechBrand",
    "pais": "Brasil"
  },
  "tags": ["eletrônicos", "computador", "portátil"],
  "dataCadastro": ISODate("2024-01-15T12:00:00Z")
}
```

Nesse exemplo, o documento inclui:

* Campos numéricos (`preco`)
* Booleanos (`disponivel`)
* Subdocumentos (`fabricante`)
* Arrays (`tags`)
* Datas (`dataCadastro`)

### 1.6. Observações

* O MongoDB não exige definição de esquema prévia, mas é possível utilizar **validação de esquema** via `validator` no momento da criação da coleção, caso desejado.
* Por padrão, todos os documentos de uma coleção são armazenados no mesmo formato, mas com liberdade para conter campos diferentes entre si.



## 2. Comandos Básicos no MongoDB

O MongoDB utiliza comandos simples e diretos para realizar operações CRUD (Create, Read, Update, Delete). Abaixo estão os principais comandos básicos utilizados em coleções MongoDB.


### `insertOne`: Inserir um documento

Insere um único documento em uma coleção. Se a coleção não existir, ela será criada automaticamente.

```js
db.usuarios.insertOne({
  nome: "Maria Oliveira",
  idade: 25,
  email: "maria@email.com"
});
```

**Explicação:**

* `db.usuarios`: referência à coleção `usuarios`.
* `insertOne(...)`: insere um documento com os campos `nome`, `idade` e `email`.


### `find`: Buscar documentos

#### Buscar todos os documentos

```js
db.usuarios.find();
```

**Explicação:** retorna todos os documentos presentes na coleção `usuarios`.

#### Buscar com filtro

```js
db.usuarios.find({ idade: { $gte: 18 } });
```

**Explicação:**

* `{ idade: { $gte: 18 } }`: retorna apenas os documentos onde a idade é maior ou igual a 18.
* `$gte`: operador lógico "greater than or equal".

#### Buscar com projeção (exibir apenas alguns campos)

```js
db.usuarios.find(
  { idade: { $gte: 18 } },
  { nome: 1, email: 1, _id: 0 }
);
```

**Explicação:**

* Primeiro argumento: filtro de busca (`idade >= 18`).
* Segundo argumento: projeção de campos — inclui `nome` e `email`, exclui `_id`.


### `updateOne`: Atualizar um campo

Atualiza o **primeiro documento** que corresponder ao filtro.

```js
db.usuarios.updateOne(
  { nome: "Maria Oliveira" },
  { $set: { idade: 26 } }
);
```

**Explicação:**

* Filtro: `{ nome: "Maria Oliveira" }`.
* Atualização: `{ $set: { idade: 26 } }` modifica apenas o campo `idade` do documento.


#### Outros modificadores úteis

##### `$inc`: Incrementa um valor numérico

```js
db.usuarios.updateOne(
  { nome: "Maria Oliveira" },
  { $inc: { idade: 1 } }
);
```

**Resultado:** aumenta o valor da idade em 1.


##### `$unset`: Remove um campo do documento

```js
db.usuarios.updateOne(
  { nome: "Maria Oliveira" },
  { $unset: { email: "" } }
);
```

**Resultado:** remove o campo `email` do documento correspondente.



##### `$push`: Adiciona um item a um array

```js
db.usuarios.updateOne(
  { nome: "Maria Oliveira" },
  { $push: { interesses: "Node.js" } }
);
```

**Resultado:** se o campo `interesses` for um array, adiciona "Node.js" ao final dele. Se não existir, cria o campo com um array contendo o valor.



### `deleteOne`: Remover um documento

Remove o **primeiro documento** que corresponder ao filtro.

```js
db.usuarios.deleteOne({ nome: "Maria Oliveira" });
```

**Explicação:**

* Remove o documento onde o campo `nome` é exatamente `"Maria Oliveira"`.




## 3. Backup e Restore no MongoDB

O MongoDB fornece ferramentas de linha de comando para realizar o **backup (exportação)** e o **restore (importação)** de bancos de dados. Essas ferramentas são úteis para fins de segurança, migração ou replicação de dados.



### 3.1. `mongodump` – Criar um backup do banco

O comando `mongodump` exporta o conteúdo de um banco de dados MongoDB para arquivos BSON, armazenando-os em um diretório local.

```bash
mongodump --db nomeDoBanco --out ./backup/
```

#### Parâmetros:

* `--db nomeDoBanco`: especifica o nome do banco de dados a ser exportado.
* `--out ./backup/`: define o diretório de destino onde os arquivos de backup serão salvos.

#### Exemplo prático:

```bash
mongodump --db empresa --out ./backup/empresa
```

Este comando exporta todos os dados do banco `empresa` e cria os arquivos no diretório `./backup/empresa`, incluindo:

* `metadata.json`: metadados da coleção
* `nomedacolecao.bson`: dados binários da coleção

#### Observação:

Se desejar exportar **todas** as bases de dados, basta omitir o parâmetro `--db`.

```bash
mongodump --out ./backup/tudo
```



### 3.2. `mongorestore` – Restaurar um backup

O comando `mongorestore` importa arquivos BSON de volta para o MongoDB, recriando o banco de dados com os dados anteriormente exportados.

```bash
mongorestore --db nomeDoBanco ./backup/nomeDoBanco/
```

#### Parâmetros:

* `--db nomeDoBanco`: nome do banco onde os dados serão restaurados.
* `./backup/nomeDoBanco/`: caminho para o diretório com os arquivos `.bson` e `.json` gerados pelo `mongodump`.

#### Exemplo prático:

```bash
mongorestore --db empresa ./backup/empresa
```

Esse comando restaura o conteúdo do diretório `./backup/empresa` para um banco chamado `empresa` no MongoDB ativo.



### 3.3. Considerações Técnicas

* Os comandos `mongodump` e `mongorestore` funcionam com instâncias locais e remotas de MongoDB. Para conexões remotas, adicione os parâmetros `--host`, `--port` e `--username`.

  Exemplo com autenticação:

  ```bash
  mongodump --host localhost --port 27017 --username admin --password senha123 --db empresa --out ./backup
  ```

* Por padrão, o `mongorestore` sobrescreve os dados existentes na coleção com os dados do backup. Para evitar isso, utilize a flag `--drop`:

  ```bash
  mongorestore --drop --db empresa ./backup/empresa
  ```

  Isso exclui os dados antigos antes de importar os novos.



### 3.4. Requisitos

Para utilizar `mongodump` e `mongorestore`, é necessário instalar o pacote **MongoDB Database Tools**, que pode ser baixado separadamente do servidor MongoDB a partir do site oficial:

* [https://www.mongodb.com/try/download/database-tools](https://www.mongodb.com/try/download/database-tools)



## Exercício Sugerido

Crie uma base de dados chamada `biblioteca`, com uma coleção `livros`. Insira três livros com os campos: `titulo`, `autor`, `ano`, e `categorias`. Depois:

1. Liste todos os livros.
2. Atualize o ano de um livro.
3. Delete um livro por título.
4. Faça o backup da base.
5. Restaure o backup.
