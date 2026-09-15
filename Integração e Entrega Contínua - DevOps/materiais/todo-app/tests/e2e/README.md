# Guia de Implementação: Testes End-to-End (E2E)

Este documento apresenta os conceitos e o código de referência para a suíte de **Testes End-to-End (Ponta a Ponta)** da To-Do API.

---

## 1. O que são Testes E2E em APIs REST?

Na pirâmide de testes, a camada **End-to-End (E2E)** representa o topo da pirâmide (~10% da suíte total).

Enquanto os testes unitários testam funções isoladas e os testes de integração testam rotas ou métodos específicos, os testes E2E validam **jornadas completas de ponta a ponta**:
- Múltiplas etapas encadeadas que um cliente real executa (Health Check -> Criar -> Listar -> Atualizar -> Deletar -> Verificar 404).
- Resiliência do estado da aplicação frente a requisições com dados incorretos e subsequente recuperação.
- Consistência de longo prazo dos dados durante o ciclo de vida completo da sessão.

---

## 2. Estrutura dos Testes E2E (`test_todo_lifecycle_e2e.py`)

Arquivo: `tests/e2e/test_todo_lifecycle_e2e.py`

### 1. `test_jornada_completa_usuario_crud_e2e`
Valida o ciclo de vida completo de um cliente criando três tarefas sequenciais, listando-as, concluindo uma, removendo outra e confirmando que o estado persistido está consistente.

### 2. `test_resiliencia_e_recuperacao_de_erros_e2e`
Valida que erros sucessivos de cliente (400 Bad Request com payload vazio e 404 Not Found com ID inexistente) não corrompem o estado da aplicação e que o serviço segue respondendo normalmente a requisições válidas subsequentes.

---

## 3. Como Executar

```bash
# Executar apenas a suíte E2E
pytest -v tests/e2e

# Executar todas as camadas de testes (Unitários, Integração e E2E)
pytest -v tests/
```
