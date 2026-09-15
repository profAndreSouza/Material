import pytest
from app.models import Todo

def test_criar_tarefa_com_sucesso():
    """
    Testa se uma instância de Todo é criada corretamente com os atributos esperados.
    
    A implementar:
    - Instanciar Todo(id=1, title="Estudar Docker", description="Revisar Dockerfile")
    - Validar que id == 1, title == "Estudar Docker", description == "Revisar Dockerfile"
    - Validar que to_dict() retorna o dicionário com os valores corretos.
    """
    task = Todo(1, "Estudar Docker", "Revisar Dockerfile")

    assert task.id == 1
    assert task.title == "Estudar Docker"
    assert task.description == "Revisar Dockerfile"
    assert task.completed is False

    assert task.to_dict() == {
        "id": 1,
        "title": "Estudar Docker",
        "description": "Revisar Dockerfile",
        "completed": False
    }


def test_tarefa_deve_iniciar_como_nao_concluida_por_padrao():
    """
    Testa se o valor padrão do atributo 'completed' é False.
    
    A implementar:
    - Instanciar Todo(id=1, title="Estudar Testes")
    - Validar que completed é False.
    """
    task = Todo(1, "Estudar Testes")

    assert task.completed is False


def test_tarefa_com_titulo_vazio_deve_lancar_erro():
    """
    Testa se a criação de Todo com título vazio ou espaços em branco lança ValueError.
    """
    with pytest.raises(ValueError, match="O título da tarefa não pode ser vazio."):
        Todo(id=1, title="")

    with pytest.raises(ValueError, match="O título da tarefa não pode ser vazio."):
        Todo(id=2, title="   ")

