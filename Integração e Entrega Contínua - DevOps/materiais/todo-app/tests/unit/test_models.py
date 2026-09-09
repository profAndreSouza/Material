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
    pass


def test_tarefa_deve_iniciar_como_nao_concluida_por_padrao():
    """
    Testa se o valor padrão do atributo 'completed' é False.
    
    A implementar:
    - Instanciar Todo(id=1, title="Estudar Testes")
    - Validar que completed é False.
    """
    pass


def test_tarefa_com_titulo_vazio_deve_lancar_erro():
    """
    Testa se a criação de Todo com título vazio ou espaços em branco lança ValueError.
    
    A implementar:
    - Usar pytest.raises(ValueError)
    - Tentar instanciar Todo(id=1, title="") e Todo(id=2, title="   ")
    """
    pass
