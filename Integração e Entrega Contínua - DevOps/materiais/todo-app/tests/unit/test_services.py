def test_service_criar_tarefa(service):
    """
    Testa a criação de uma nova tarefa através do TodoService.
    """
    todo = service.create(title="Aprender CI/CD", description="Configurar pipeline")

    assert todo.id == 1
    assert todo.title == "Aprender CI/CD"
    assert todo.description == "Configurar pipeline"
    assert todo.completed is False
    assert len(service.list_all()) == 1


def test_service_listar_todas_as_tarefas(service):
    """
    Testa se o serviço lista corretamente todas as tarefas cadastradas.
    """
    assert service.list_all() == []

    service.create(title="Tarefa 1", description="Desc 1")
    service.create(title="Tarefa 2", description="Desc 2")

    todos = service.list_all()
    assert len(todos) == 2
    assert todos[0].title == "Tarefa 1"
    assert todos[1].title == "Tarefa 2"


def test_service_buscar_tarefa_por_id_existente(service):
    """
    Testa a busca de uma tarefa por ID quando ela existe no repositório.
    """
    criada = service.create(title="Estudar Pytest")
    encontrada = service.get_by_id(criada.id)

    assert encontrada is not None
    assert encontrada.id == criada.id
    assert encontrada.title == "Estudar Pytest"


def test_service_buscar_tarefa_por_id_inexistente(service):
    """
    Testa a busca de uma tarefa por ID inexistente, esperando retorno None.
    """
    resultado = service.get_by_id(999)

    assert resultado is None


def test_service_atualizar_tarefa_existente(service):
    """
    Testa a atualização de título, descrição e status de conclusão de uma tarefa.
    """
    todo = service.create(title="Titulo Original", description="Desc Original")

    atualizada = service.update(
        todo_id=todo.id,
        title="Titulo Alterado",
        description="Desc Alterada",
        completed=True,
    )

    assert atualizada is not None
    assert atualizada.title == "Titulo Alterado"
    assert atualizada.description == "Desc Alterada"
    assert atualizada.completed is True


def test_service_remover_tarefa_existente(service):
    """
    Testa a remoção de uma tarefa existente e verifica se ela deixa de existir.
    """
    todo = service.create(title="Tarefa Temporária")

    removido = service.delete(todo.id)
    assert removido is True
    assert service.get_by_id(todo.id) is None


def test_service_remover_tarefa_inexistente(service):
    """
    Testa a tentativa de remoção de ID inexistente, esperando retorno False.
    """
    removido = service.delete(999)

    assert removido is False
