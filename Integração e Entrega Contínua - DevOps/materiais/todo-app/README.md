# Laboratório Prático: To-Do API em Flask (Docker e Testes Automatizados)

Guia prático para execução e teste de uma API REST desenvolvida em Flask, utilizando Docker para padronização de ambiente e Pytest para validação de testes unitários e de integração.

---

## Objetivos da Atividade

1. Executar uma aplicação conteinerizada utilizando Docker Compose.
2. Realizar operações básicas na API REST (CRUD de tarefas).
3. Executar e compreender a diferença entre Testes Unitários e Testes de Integração.
4. Analisar o relatório de cobertura de código (Coverage).

---

## Estrutura do Projeto

```text
todo-app/
├── app/
│   ├── __init__.py          # Inicialização da aplicação Flask (Application Factory)
│   ├── models.py            # Definição do modelo de dados (Todo)
│   ├── services.py          # Lógica de negócio e persistência em memória
│   └── routes.py            # Endpoints da API REST (/api/todos)
├── tests/
│   ├── conftest.py          # Fixtures do Pytest
│   ├── unit/                # Testes Unitários
│   │   ├── test_models.py
│   │   └── test_services.py
│   └── integration/         # Testes de Integração
│       └── test_routes.py
├── Dockerfile               # Configuração da imagem da aplicação
├── docker-compose.yml       # Orquestração do serviço da aplicação
├── requirements.txt         # Dependências do projeto (Flask, Pytest, Pytest-Cov)
├── run.py                   # Ponto de entrada da aplicação
└── README.md                # Documentação e instruções de execução
```

---

## Passo 1: Executar a Aplicação com Docker

Acesse o diretório do projeto no terminal:

```bash
cd materiais/todo-app
```

Inicie o contêiner da aplicação:

```bash
docker compose up --build
```

O contêiner `todo_app` será iniciado e ficará ouvindo na porta **5000**.

---

## Passo 2: Testar os Endpoints da API

Com a aplicação em execução, você pode interagir com os endpoints via navegador, Postman ou cURL.

### 1. Health Check
Verifica se a API está online e respondendo:
* **Método:** `GET`
* **URL:** `http://localhost:5000/health`
* **Resposta esperada (HTTP 200):**
  ```json
  {"status": "ok"}
  ```

### 2. Listar Tarefas
Retorna a lista de tarefas cadastradas:
* **Método:** `GET`
* **URL:** `http://localhost:5000/api/todos`
* **Resposta esperada (HTTP 200):**
  ```json
  []
  ```

### 3. Criar uma Nova Tarefa
Cadastra uma nova tarefa na lista:
* **Método:** `POST`
* **URL:** `http://localhost:5000/api/todos`
* **Exemplo de comando via cURL (Windows PowerShell / CMD):**
  ```bash
  curl -X POST http://localhost:5000/api/todos -H "Content-Type: application/json" -d "{\"title\": \"Estudar DevOps\", \"description\": \"Praticar testes automatizados\"}"
  ```
* **Resposta esperada (HTTP 201):**
  ```json
  {
    "id": 1,
    "title": "Estudar DevOps",
    "description": "Praticar testes automatizados",
    "completed": false
  }
  ```

### 4. Consultar Tarefa por ID
* **Método:** `GET`
* **URL:** `http://localhost:5000/api/todos/1`
* **Resposta esperada (HTTP 200):**
  ```json
  {
    "id": 1,
    "title": "Estudar DevOps",
    "description": "Praticar testes automatizados",
    "completed": false
  }
  ```

### 5. Atualizar Tarefa
Altera os dados ou o status de conclusão de uma tarefa:
* **Método:** `PUT`
* **URL:** `http://localhost:5000/api/todos/1`
* **Exemplo de comando:**
  ```bash
  curl -X PUT http://localhost:5000/api/todos/1 -H "Content-Type: application/json" -d "{\"completed\": true}"
  ```
* **Resposta esperada (HTTP 200):** Dados atualizados da tarefa.

### 6. Remover Tarefa
* **Método:** `DELETE`
* **URL:** `http://localhost:5000/api/todos/1`
* **Resposta esperada (HTTP 200):**
  ```json
  {"message": "Tarefa removida com sucesso."}
  ```

---

## Passo 3: Executar os Testes Automatizados

Em um segundo terminal (mantendo a aplicação rodando no primeiro), utilize os comandos abaixo para executar os testes dentro do contêiner.

### Testes Unitários
Testam partes isoladas do código (regras de negócio em `models.py` e `services.py`), sem necessidade de requisições de rede ou servidor HTTP ativo.

```bash
docker compose exec app pytest -v tests/unit
```

### Testes de Integração
Testam a integração entre múltiplos componentes (rotas em `routes.py`, códigos de status HTTP, serialização de respostas e validação de requisições).

```bash
docker compose exec app pytest -v tests/integration
```

### Todos os Testes
Executa a suíte de testes completa do projeto:

```bash
docker compose exec app pytest -v
```

### Relatório de Cobertura de Código
Mede a porcentagem de linhas do código-fonte que foram executadas pelos testes:

```bash
docker compose exec app pytest --cov=app --cov-report=term-missing tests/
```

---

## Referência de Comandos

| Finalidade | Comando |
| :--- | :--- |
| Subir aplicação | `docker compose up --build` |
| Parar aplicação | `docker compose down` |
| Rodar testes unitários | `docker compose exec app pytest -v tests/unit` |
| Rodar testes de integração | `docker compose exec app pytest -v tests/integration` |
| Rodar todos os testes | `docker compose exec app pytest -v` |
| Relatório de cobertura | `docker compose exec app pytest --cov=app --cov-report=term-missing tests/` |

---

## Execução Local sem Docker (Opcional)

Para executar o projeto diretamente no ambiente Python local:

```bash
# 1. Criar e ativar o ambiente virtual
python -m venv venv

# Windows:
venv\Scripts\activate

# Linux/macOS:
source venv/bin/activate

# 2. Instalar dependências
pip install -r requirements.txt

# 3. Executar os testes
pytest -v

# 4. Iniciar o servidor local
python run.py
```
