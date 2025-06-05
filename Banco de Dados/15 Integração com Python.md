# Aula 15 – Integração com Aplicações

Nesta aula, abordamos como aplicações em linguagens de programação (como Python e Node.js) se conectam ao MongoDB para executar operações de CRUD. Além disso, introduziremos conceitos básicos de segurança no acesso a dados.



## 1. Conexão com MongoDB via Código (Python)

### 1.1. Instalação do driver `pymongo`

```bash
!pip install pymongo
```

### 1.2. Conectando ao MongoDB Atlas

```python
from pymongo import MongoClient

# Substitua <user>, <password> e <cluster> pelos seus dados
uri = "mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority&appName=ClusterADS"

client = MongoClient(uri)
db = client.todo_db
collection = db.todos

print("Conectado ao banco de dados!")
```



## 2. CRUD Modularizado com Queries Parametrizadas

Utilizamos funções para encapsular as operações de criação, leitura, atualização e exclusão (CRUD), usando o módulo `bson` para trabalhar com IDs do MongoDB.

```python
from bson.objectid import ObjectId
```

### 2.1. CREATE – Inserir uma nova tarefa

```python
def create_task(title, description):
    task = {
        "title": title,
        "description": description,
        "done": False
    }
    result = collection.insert_one(task)
    return str(result.inserted_id)
```

### 2.2. READ – Listar tarefas

```python
def get_tasks():
    tasks = list(collection.find())
    for task in tasks:
        task['_id'] = str(task['_id'])  # Converte ObjectId para string
    return tasks
```

### 2.3. UPDATE – Atualizar uma tarefa

```python
def update_task(task_id, new_data):
    result = collection.update_one(
        {"_id": ObjectId(task_id)},
        {"$set": new_data}
    )
    return result.modified_count
```

### 2.4. DELETE – Remover uma tarefa

```python
def delete_task(task_id):
    result = collection.delete_one({"_id": ObjectId(task_id)})
    return result.deleted_count
```



## 3. Execução de Exemplo

```python
# Criando uma nova tarefa
task_id = create_task("Estudar MongoDB", "Revisar comandos básicos e estrutura")
print("ID da tarefa criada:", task_id)

# Listando tarefas
print("Tarefas:")
print(get_tasks())

# Atualizando a tarefa
update_task(task_id, {"done": True})
print("Tarefa atualizada:")
print(get_tasks())

# Deletando a tarefa
delete_task(task_id)
print("Tarefa deletada. Lista atualizada:")
print(get_tasks())
```

## 4. Queries Parametrizadas

### O que são queries parametrizadas?

Queries parametrizadas são aquelas em que os **valores inseridos pelo usuário são tratados separadamente da estrutura da consulta**, o que **evita vulnerabilidades como injeção de código**. No `pymongo`, isso é feito de forma natural, pois as consultas são expressas como dicionários Python.



### Exemplo Seguro (recomendado):

```python
input_email = "maria@email.com"
collection.find_one({ "email": input_email })
```

Neste caso:

* A chave do dicionário é `"email"` (campo no banco).
* O valor é passado diretamente como dado (`input_email`).
* O MongoDB interpreta o valor apenas como string, sem executar comandos maliciosos.



### Exemplo Inseguro (NÃO FAZER):

```python
input_email = "maria@email.com"
query = "{ email: '%s' }" % input_email
collection.find_one(query)
```

**Por que é inseguro?**

* Se o usuário inserir algo como:
  `"maria@email.com' }, $where: 'this.admin == true'"`,
  isso pode manipular o comportamento da consulta e acessar dados indevidos, **caso o driver não impeça execução arbitrária**.



### Outras boas práticas com consultas:

* Sempre valide e sanitize os dados de entrada.
* Use tipos de dados corretos (ex: `ObjectId`, `int`, `bool`).
* Evite consultas dinâmicas geradas por concatenação de strings.



## 5. Introdução à Segurança no Acesso a Dados

Ao integrar aplicações com o MongoDB (local ou Atlas), é fundamental seguir práticas de segurança que protejam tanto os dados quanto o acesso ao sistema. Abaixo estão as principais recomendações:


### 5.1. Evite **hardcode** de senhas

**Problema:**

```python
uri = "mongodb+srv://admin:senha123@cluster0.mongodb.net/"
```

**Solução recomendada:**

Armazene as credenciais em variáveis de ambiente ou arquivos `.env`.

```env
# .env
MONGO_URI=mongodb+srv://admin:${PASSWORD}@cluster.mongodb.net/
```

E carregue no Python com `os.environ`:

```python
import os
from dotenv import load_dotenv
load_dotenv()

uri = os.environ.get("MONGO_URI")
client = MongoClient(uri)
```


### 5.2. Use **roles e permissões restritas**

Ao criar usuários no MongoDB Atlas:

* Prefira **perfis com permissões específicas**.
* Exemplo: um usuário só pode fazer leitura (`read`) e não tem permissão de escrita ou administração (`readWrite`, `dbAdmin`).

Isso limita os danos caso a aplicação seja comprometida.


### 5.3. Use **conexão segura com TLS/SSL**

A URI com prefixo `mongodb+srv` já usa TLS por padrão. Isso **criptografa o tráfego entre a aplicação e o banco**, protegendo credenciais e dados sensíveis em trânsito.


### 5.4. Faça **validação de dados no backend**

Antes de inserir ou atualizar dados no banco:

* Verifique tipo, tamanho, formato e presença obrigatória de campos.
* Use bibliotecas como `pydantic`, `cerberus` ou `marshmallow`.

**Exemplo:**

```python
def validate_task(data):
    return "title" in data and isinstance(data["title"], str)
```


### 5.5. Implemente **rate limiting e autenticação**

Evite que usuários abusem da API com requisições excessivas:

* Use bibliotecas como `flask-limiter` ou `express-rate-limit`.
* Exija autenticação com tokens (ex: JWT).
* Associe os dados gravados ao usuário autenticado.

