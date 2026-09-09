import pytest

def test_api_health_check(client):
    """
    Testa o endpoint de health check /health.
    
    A implementar:
    - Fazer GET em '/health'
    - Validar status_code == 200
    - Validar response.json == {"status": "ok"}
    """
    pass


def test_api_listar_tarefas_inicialmente_vazia(client):
    """
    Testa a listagem de tarefas quando não há tarefas cadastradas.
    
    A implementar:
    - Fazer GET em '/api/todos'
    - Validar status_code == 200
    - Validar response.json == []
    """
    pass


def test_api_criar_tarefa_com_sucesso(client):
    """
    Testa o endpoint POST /api/todos com payload válido.
    
    A implementar:
    - Fazer POST em '/api/todos' com json={"title": "Comprar café", "description": "100% Arábica"}
    - Validar status_code == 201
    - Validar que response.json possui "id", "title" == "Comprar café" e "completed" == False
    """
    pass


def test_api_criar_tarefa_sem_titulo_deve_retornar_400(client):
    """
    Testa a validação de erro ao criar tarefa sem o campo obrigatório 'title'.
    
    A implementar:
    - Fazer POST em '/api/todos' com json={"description": "Sem título"}
    - Validar status_code == 400
    - Validar presença da chave 'error' no json
    """
    pass


def test_api_obter_tarefa_por_id_existente(client):
    """
    Testa o endpoint GET /api/todos/<id> para tarefa existente.
    
    A implementar:
    - Criar uma tarefa via POST /api/todos
    - Fazer GET em '/api/todos/<id_criado>'
    - Validar status_code == 200
    - Validar que os dados retornados coincidem com a tarefa criada
    """
    pass


def test_api_obter_tarefa_inexistente_deve_retornar_404(client):
    """
    Testa o endpoint GET /api/todos/<id> para tarefa que não existe.
    
    A implementar:
    - Fazer GET em '/api/todos/9999'
    - Validar status_code == 404
    - Validar mensagem de erro no json
    """
    pass


def test_api_atualizar_tarefa_com_sucesso(client):
    """
    Testa o endpoint PUT /api/todos/<id> para atualizar status e informações.
    
    A implementar:
    - Criar uma tarefa via POST /api/todos
    - Fazer PUT em '/api/todos/<id>' com json={"completed": True, "title": "Café comprado"}
    - Validar status_code == 200
    - Validar que 'completed' é True
    """
    pass


def test_api_deletar_tarefa_com_sucesso(client):
    """
    Testa o endpoint DELETE /api/todos/<id>.
    
    A implementar:
    - Criar uma tarefa via POST /api/todos
    - Fazer DELETE em '/api/todos/<id>'
    - Validar status_code == 200
    - Fazer GET no mesmo ID e validar que retorna 404
    """
    pass
