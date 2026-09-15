# Guia de Implementação: Testes de Integração

Este documento contém o código completo de referência para a implementação dos **Testes de Integração** da aplicação To-Do API em Flask.

Diferente dos testes unitários (que validam métodos e classes isoladas em memória), os testes de integração avaliam o comportamento coordenado entre a camada de rotas HTTP, controladores, validação de payloads JSON, status codes HTTP e persistência do serviço.

---

## 1. O Papel das Fixtures (`tests/conftest.py`)

Para que os testes de integração funcionem sem dependências externas e com total reprodutibilidade, utilizamos o `client` de teste fornecido pelo Flask via Pytest fixture:

```python
@pytest.fixture
def app():
    app = create_app({"TESTING": True})
    global_todo_service.clear()
    yield app
    global_todo_service.clear()

@pytest.fixture
def client(app):
    return app.test_client()
```

O `client` atua como um navegador ou cliente HTTP virtual, enviando requisições (`client.get()`, `client.post()`, `client.put()`, `client.delete()`) diretamente para a aplicação Flask em memória, sem precisar abrir uma porta de rede real na máquina.

---

## 2. Testes de Rotas e Contratos HTTP (`test_routes.py`)

Arquivo: `tests/integration/test_routes.py`

```python
import pytest


def test_api_health_check(client):
    """Testa o endpoint de health check /health."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.get_json() == {"status": "ok"}


def test_api_listar_tarefas_inicialmente_vazia(client):
    """Testa a listagem quando o repositório está limpo."""
    response = client.get("/api/todos")
    assert response.status_code == 200
    assert response.get_json() == []


def test_api_criar_tarefa_com_sucesso(client):
    """Testa a criação com status HTTP 201 Created."""
    payload = {"title": "Comprar café", "description": "100% Arábica"}
    response = client.post("/api/todos", json=payload)

    assert response.status_code == 201
    data = response.get_json()
    assert "id" in data
    assert data["title"] == "Comprar café"
    assert data["description"] == "100% Arábica"
    assert data["completed"] is False


def test_api_criar_tarefa_sem_titulo_deve_retornar_400(client):
    """Valida retorno HTTP 400 Bad Request se faltar o campo obrigatório."""
    payload = {"description": "Sem título"}
    response = client.post("/api/todos", json=payload)

    assert response.status_code == 400
    assert "error" in response.get_json()


def test_api_obter_tarefa_por_id_existente(client):
    """Valida busca por ID existente retornando HTTP 200 OK."""
    res_criacao = client.post("/api/todos", json={"title": "Estudar Testes de Integração"})
    id_criado = res_criacao.get_json()["id"]

    response = client.get(f"/api/todos/{id_criado}")
    assert response.status_code == 200
    data = response.get_json()
    assert data["id"] == id_criado
    assert data["title"] == "Estudar Testes de Integração"


def test_api_obter_tarefa_inexistente_deve_retornar_404(client):
    """Valida busca por ID não cadastrado retornando HTTP 404 Not Found."""
    response = client.get("/api/todos/9999")
    assert response.status_code == 404
    assert "error" in response.get_json()


def test_api_atualizar_tarefa_com_sucesso(client):
    """Valida alteração de status via PUT /api/todos/<id>."""
    res_criacao = client.post("/api/todos", json={"title": "Tarefa Pendente"})
    id_criado = res_criacao.get_json()["id"]

    res_update = client.put(
        f"/api/todos/{id_criado}",
        json={"completed": True, "title": "Tarefa Concluída"}
    )
    assert res_update.status_code == 200
    data = res_update.get_json()
    assert data["id"] == id_criado
    assert data["title"] == "Tarefa Concluída"
    assert data["completed"] is True


def test_api_deletar_tarefa_com_sucesso(client):
    """Valida deleção via DELETE e confirmação de remoção com subsequente 404."""
    res_criacao = client.post("/api/todos", json={"title": "Tarefa a Deletar"})
    id_criado = res_criacao.get_json()["id"]

    res_delete = client.delete(f"/api/todos/{id_criado}")
    assert res_delete.status_code == 200
    assert "message" in res_delete.get_json()

    res_busca = client.get(f"/api/todos/{id_criado}")
    assert res_busca.status_code == 404
```

---

## 3. Como Executar os Testes de Integração

```bash
# Executar apenas a suíte de integração
pytest -v tests/integration

# Executar com relatório de cobertura das rotas
pytest -v --cov=app/routes.py tests/integration
```
