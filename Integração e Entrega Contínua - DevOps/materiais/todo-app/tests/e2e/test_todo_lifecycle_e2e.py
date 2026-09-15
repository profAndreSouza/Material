def test_jornada_completa_usuario_crud_e2e(client):
    """
    Simula uma jornada completa de um usuário final consumindo a API To-Do:
    1. Verifica integridade do serviço (health check).
    2. Garante estado inicial limpo.
    3. Cadastra múltiplos itens de trabalho.
    4. Consulta listagem completa e valida consistência dos dados.
    5. Atualiza status de conclusão e valida alterações.
    6. Remove item e valida atualização da lista e persistência final.
    """
    # 1. Health check
    res_health = client.get("/health")
    assert res_health.status_code == 200
    assert res_health.get_json()["status"] == "ok"

    # 2. Lista inicial vazia
    res_inicial = client.get("/api/todos")
    assert res_inicial.status_code == 200
    assert res_inicial.get_json() == []

    # 3. Criação de tarefas sequenciais
    tarefas_para_criar = [
        {"title": "Configurar GitFlow", "description": "Criar branches main e develop"},
        {"title": "Implementar Testes de Integração", "description": "Validar rotas da API"},
        {"title": "Configurar Pipeline GitHub Actions", "description": "Automatizar CI com Quality Gates"}
    ]

    ids_criados = []
    for tarefa in tarefas_para_criar:
        res = client.post("/api/todos", json=tarefa)
        assert res.status_code == 201
        corpo = res.get_json()
        assert corpo["title"] == tarefa["title"]
        assert corpo["completed"] is False
        ids_criados.append(corpo["id"])

    assert len(ids_criados) == 3

    # 4. Listagem e validação do volume cadastrado
    res_lista = client.get("/api/todos")
    assert res_lista.status_code == 200
    todos = res_lista.get_json()
    assert len(todos) == 3
    titulos = [t["title"] for t in todos]
    assert "Configurar GitFlow" in titulos
    assert "Implementar Testes de Integração" in titulos
    assert "Configurar Pipeline GitHub Actions" in titulos

    # 5. Atualização: Marcar primeira tarefa como concluída
    id_tarefa_1 = ids_criados[0]
    res_put_1 = client.put(f"/api/todos/{id_tarefa_1}", json={"completed": True})
    assert res_put_1.status_code == 200
    assert res_put_1.get_json()["completed"] is True

    # Validar que a tarefa 2 permanece pendente
    id_tarefa_2 = ids_criados[1]
    res_get_2 = client.get(f"/api/todos/{id_tarefa_2}")
    assert res_get_2.status_code == 200
    assert res_get_2.get_json()["completed"] is False

    # 6. Remoção de uma tarefa
    res_delete = client.delete(f"/api/todos/{id_tarefa_1}")
    assert res_delete.status_code == 200

    # 7. Validação do estado final
    res_get_del = client.get(f"/api/todos/{id_tarefa_1}")
    assert res_get_del.status_code == 404

    res_lista_final = client.get("/api/todos")
    assert res_lista_final.status_code == 200
    todos_finais = res_lista_final.get_json()
    assert len(todos_finais) == 2
    assert id_tarefa_1 not in [t["id"] for t in todos_finais]


def test_resiliencia_e_recuperacao_de_erros_e2e(client):
    """
    Testa a resiliência do sistema perante fluxos de erro consecutivos:
    1. Tenta criar recurso inválido (Bad Request 400).
    2. Corrige e cria com sucesso (201 Created).
    3. Tenta operações em recursos inexistentes (404 Not Found).
    4. Valida que o estado interno do repositório permanece íntegro.
    """
    # 1. Falha intencional: payload sem título
    res_erro = client.post("/api/todos", json={"description": "Sem título"})
    assert res_erro.status_code == 400
    assert "error" in res_erro.get_json()

    # 2. Falha intencional: título composto apenas por espaços
    res_erro_espacos = client.post("/api/todos", json={"title": "   "})
    assert res_erro_espacos.status_code == 400

    # 3. Recuperação com payload válido
    res_valido = client.post("/api/todos", json={"title": "Tarefa Resiliente"})
    assert res_valido.status_code == 201
    id_valido = res_valido.get_json()["id"]

    # 4. Requisições a endpoints inexistentes não afetam o serviço
    assert client.get("/api/todos/9999").status_code == 404
    assert client.put("/api/todos/9999", json={"title": "Fantasma"}).status_code == 404
    assert client.delete("/api/todos/9999").status_code == 404

    # 5. O registro válido continua íntegro
    res_consulta = client.get(f"/api/todos/{id_valido}")
    assert res_consulta.status_code == 200
    assert res_consulta.get_json()["title"] == "Tarefa Resiliente"
