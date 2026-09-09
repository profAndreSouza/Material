import pytest
from app.services import TodoService

def test_service_criar_tarefa(service):
    """
    Testa a criação de uma nova tarefa através do TodoService.
    
    A implementar:
    - Chamar service.create(title="Aprender CI/CD", description="Configurar pipeline")
    - Validar que o ID foi gerado (ex: 1)
    - Validar que a tarefa está armazenada no serviço.
    """
    pass


def test_service_listar_todas_as_tarefas(service):
    """
    Testa se o serviço retorna todas as tarefas cadastradas.
    
    A implementar:
    - Criar 2 tarefas via service.create(...)
    - Chamar service.list_all()
    - Validar que o tamanho da lista retornada é 2.
    """
    pass


def test_service_buscar_tarefa_por_id_existente(service):
    """
    Testa a busca de uma tarefa por ID quando ela existe.
    
    A implementar:
    - Criar uma tarefa
    - Buscar pelo ID gerado via service.get_by_id(id)
    - Validar que o retorno não é None e possui o título correto.
    """
    pass


def test_service_buscar_tarefa_por_id_inexistente(service):
    """
    Testa a busca de uma tarefa por ID inexistente.
    
    A implementar:
    - Buscar por um ID inexistente (ex: 999) via service.get_by_id(999)
    - Validar que o retorno é None.
    """
    pass


def test_service_atualizar_tarefa_existente(service):
    """
    Testa a atualização parcial e total de uma tarefa.
    
    A implementar:
    - Criar uma tarefa
    - Chamar service.update(todo_id, title="Novo Titulo", completed=True)
    - Validar que as propriedades foram atualizadas.
    """
    pass


def test_service_remover_tarefa_existente(service):
    """
    Testa a remoção de uma tarefa existente.
    
    A implementar:
    - Criar uma tarefa
    - Chamar service.delete(todo_id)
    - Validar que o retorno é True e que a busca subsequente por ela retorna None.
    """
    pass


def test_service_remover_tarefa_inexistente(service):
    """
    Testa a remoção de uma tarefa com ID inexistente.
    
    A implementar:
    - Chamar service.delete(999)
    - Validar que o retorno é False.
    """
    pass
