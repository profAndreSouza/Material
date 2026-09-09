import pytest
from app import create_app
from app.services import TodoService
from app.routes import todo_service as global_todo_service

@pytest.fixture
def service():
    """Fixture que fornece uma instância limpa e isolada do TodoService."""
    return TodoService()

@pytest.fixture
def app():
    """Fixture que cria a aplicação Flask para testes."""
    app = create_app({"TESTING": True})
    
    # Limpa o repositório global antes de cada teste de integração
    global_todo_service.clear()
    
    yield app
    
    # Limpa o repositório global após o teste
    global_todo_service.clear()

@pytest.fixture
def client(app):
    """Fixture que fornece o cliente de teste HTTP do Flask."""
    return app.test_client()
