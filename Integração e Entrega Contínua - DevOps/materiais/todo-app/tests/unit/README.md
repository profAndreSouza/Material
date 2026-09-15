# Guia de Implementação: Testes Unitários

Este documento contém o código completo de referência para a implementação dos **Testes Unitários** da aplicação To-Do.

Os testes unitários validam o comportamento isolado das classes de domínio (`Todo`) e da camada de serviço (`TodoService`), sem depender de requisições HTTP, banco de dados externo ou rede.

---

## 1. Testes do Modelo de Dados (`test_models.py`)

Arquivo: `tests/unit/test_models.py`

Valida as regras de negócio e instanciação da entidade `Todo`.

```python
import pytest
from app.models import Todo


def test_criar_tarefa_com_sucesso():
    """
    Testa se uma instância de Todo é criada corretamente com os atributos esperados
    e se o método to_dict() formata os dados adequadamente.
    """
    todo = Todo(id=1, title="Estudar Docker", description="Revisar Dockerfile")

    assert todo.id == 1
    assert todo.title == "Estudar Docker"
    assert todo.description == "Revisar Dockerfile"
    assert todo.completed is False

    dados_dict = todo.to_dict()
    assert dados_dict == {
        "id": 1,
        "title": "Estudar Docker",
        "description": "Revisar Dockerfile",
        "completed": False,
    }


def test_tarefa_deve_iniciar_como_nao_concluida_por_padrao():
    """
    Testa se o valor padrão do atributo 'completed' é False ao omitir o argumento.
    """
    todo = Todo(id=2, title="Estudar Testes")

    assert todo.completed is False


def test_tarefa_com_titulo_vazio_deve_lancar_erro():
    """
    Testa se a criação de Todo com título vazio ou composto apenas por espaços
    lança exceção ValueError.
    """
    with pytest.raises(ValueError, match="O título da tarefa não pode ser vazio."):
        Todo(id=3, title="")

    with pytest.raises(ValueError, match="O título da tarefa não pode ser vazio."):
        Todo(id=4, title="   ")
```

---

## 2. Testes da Camada de Serviço (`test_services.py`)

Arquivo: `tests/unit/test_services.py`

Valida as operações de CRUD da classe `TodoService` utilizando a fixture `service` injetada pelo Pytest.

```python
import pytest
from app.services import TodoService


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
```

---

## 3. Comandos de Execução dos Testes Unitários

### Via Docker Compose (Com a aplicação em execução)
```bash
docker compose exec app pytest -v tests/unit
```

### Via Docker Compose (Execução direta / contêiner descartável)
```bash
docker compose run --rm app pytest -v tests/unit
```

### Localmente (Ambiente Virtual Python ativo)
```bash
pytest -v tests/unit
```
