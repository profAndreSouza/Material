# Laboratório Prático: To-Do API em Flask (Testes Automatizados & GitHub Actions)

Guia prático para desenvolvimento, teste e automação de integração contínua (CI) de uma API REST desenvolvida em Flask, cobrindo toda a **Pirâmide de Testes (Unitários, Integração e E2E)** e a configuração de **Quality Gates no GitHub Actions**.

---

## Objetivos da Atividade

1. Executar a aplicação To-Do localmente em ambiente virtual Python.
2. Implementar e executar testes automatizados em três níveis:
   - **Testes Unitários:** Regras de negócio isoladas (`models.py` e `services.py`).
   - **Testes de Integração:** Validação de rotas HTTP, contratos e códigos de status (`routes.py`).
   - **Testes End-to-End (E2E):** Jornadas completas simulando fluxos de ponta a ponta do usuário.
3. Mensurar a cobertura de código com `pytest-cov` e estabelecer um **Quality Gate** de 80%.
4. Criar um novo repositório no GitHub, versionar a aplicação com Git e disparar a esteira de CI no **GitHub Actions** (`.github/workflows/ci.yml`).

---

## Estrutura do Projeto

```text
todo-app/
├── .github/                   # Criado durante a aula (Passo 4)
│   └── workflows/
│       └── ci.yml             # Workflow de CI do GitHub Actions (Lint, Testes, Quality Gate)
├── app/
│   ├── __init__.py            # Inicialização da aplicação Flask (Application Factory)
│   ├── models.py              # Definição da entidade Todo
│   ├── services.py            # Lógica de negócio e persistência em memória
│   └── routes.py              # Endpoints da API REST (/api/todos e /health)
├── tests/
│   ├── conftest.py            # Fixtures do Pytest (client de teste e app isolado)
│   ├── unit/                  # Camada 1: Testes Unitários
│   │   ├── README.md          # Guia e código de referência dos testes unitários
│   │   ├── test_models.py
│   │   └── test_services.py
│   ├── integration/           # Camada 2: Testes de Integração
│   │   ├── README.md          # Guia e código de referência dos testes de integração
│   │   └── test_routes.py
│   └── e2e/                   # Camada 3: Testes End-to-End
│       ├── README.md          # Guia e código de referência dos testes E2E
│       └── test_todo_lifecycle_e2e.py
├── .gitignore                 # Arquivos ignorados pelo Git
├── requirements.txt           # Dependências (Flask, Pytest, Pytest-Cov, Flake8)
├── run.py                     # Ponto de entrada da aplicação
└── README.md                  # Documentação e instruções da prática
```

---

## Passo 1: Configuração do Ambiente Local (Python Virtualenv)

No terminal, acesse a pasta do projeto:

```bash
cd materiais/todo-app
```

Crie e ative o ambiente virtual:

```bash
# Criar o ambiente virtual
python -m venv venv

# Ativar no Windows (PowerShell):
venv\Scripts\Activate.ps1

# Ativar no Windows (Prompt de Comando / Git Bash):
venv\Scripts\activate

# Ativar no Linux / macOS:
source venv/bin/activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Para rodar o servidor localmente:

```bash
python run.py
```
A API ficará disponível em `http://127.0.0.1:5000`.

---

## Passo 2: Executar as Camadas de Testes

### 1. Testes Unitários (Base da Pirâmide)
Testam classes e métodos isolados em memória:
```bash
pytest -v tests/unit
```

### 2. Testes de Integração (Meio da Pirâmide)
Testam a comunicação entre as rotas HTTP e o serviço com o `client` do Flask:
```bash
pytest -v tests/integration
```

### 3. Testes End-to-End / E2E (Topo da Pirâmide)
Testam o ciclo de vida completo e a persistência ao longo de múltiplas requisições em sequência:
```bash
pytest -v tests/e2e
```

### 4. Execução Completa com Quality Gate de Cobertura
Executa toda a suíte de testes e valida se a cobertura de código é de no mínimo **80%**:
```bash
pytest --cov=app --cov-report=term-missing --cov-fail-under=80 tests/
```
> Se a cobertura for inferior a 80%, o comando retorna código de erro 1 (falha do Quality Gate).

---

## Passo 3: Subir a Aplicação em um Novo Repositório no GitHub

Para ativar o pipeline de CI do GitHub Actions na nuvem:

### 1. Inicializar o Repositório Git Local
Dentro da pasta `todo-app` (certifique-se de que não está dentro de outro repositório Git):
```bash
git init
git branch -M main
```

### 2. Realizar o Commit Inicial
```bash
git add .
git commit -m "feat: estrutura inicial da To-Do API com testes e workflow de CI"
```

### 3. Criar o Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Crie um novo repositório chamado `todo-app-ci` (ou nome de sua preferência).
3. Deixe-o **público** e **sem** adicionar README, .gitignore ou licença (já criados localmente).

### 4. Conectar e Enviar para o GitHub
```bash
git remote add origin https://github.com/SEU_USUARIO/todo-app-ci.git
git push -u origin main
```

### 5. Criar a Branch `develop` (GitFlow)
```bash
git checkout -b develop
git push -u origin develop
```

---

## Passo 4: Criar o Workflow do GitHub Actions (`.github/workflows/ci.yml`)

1. Crie o diretório de workflows:
   ```bash
   # Windows PowerShell:
   New-Item -ItemType Directory -Force .github/workflows

   # Linux / macOS / Git Bash:
   mkdir -p .github/workflows
   ```

2. Crie o arquivo `.github/workflows/ci.yml` com a especificação da esteira (consulte o código completo na aula da **Semana 07**):
   ```yaml
   name: CI Pipeline - To-Do API

   on:
     push:
       branches: [main, develop]
     pull_request:
       branches: [main, develop]

   jobs:
     testes-e-quality-gate:
       name: Testes Automatizados e Quality Gate
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-python@v5
           with:
             python-version: "3.11"
             cache: "pip"
         - run: pip install -r requirements.txt
         - run: flake8 app tests --count --select=E9,F63,F7,F82 --show-source --statistics
         - run: pytest -v tests/unit
         - run: pytest -v tests/integration
         - run: pytest -v tests/e2e
         - run: pytest --cov=app --cov-report=term-missing --cov-fail-under=80 tests/
   ```

3. Commit e envio do workflow:
   ```bash
   git add .github/workflows/ci.yml
   git commit -m "ci: adicionar esteira do GitHub Actions com testes e quality gate"
   git push origin main
   ```

---

## Passo 5: Acompanhar o Pipeline no GitHub Actions

1. Abra seu repositório no GitHub pelo navegador.
2. Clique na aba **Actions**.
3. Você verá o workflow **CI Pipeline - To-Do API** em execução.
4. Clique no job para inspecionar os logs de cada step.

---

## Passo 6: Testar o Bloqueio do Quality Gate (Simulação de Falha)

Para comprovar o papel do Quality Gate protegendo a integridade da aplicação:

1. Crie uma branch de feature:
   ```bash
   git checkout -b feature/teste-quality-gate
   ```
2. Abra `app/routes.py` e altere um status code propositalmente (ex: mudar o status do healthcheck de `200` para `500`).
3. Faça commit e push:
   ```bash
   git commit -am "test: forçando quebra do pipeline de CI"
   git push -u origin feature/teste-quality-gate
   ```
4. Abra um **Pull Request** no GitHub apontando para `develop`.
5. Observe o GitHub Actions executar os testes, identificar a falha, reprovar o status check e **bloquear o merge**!

---

## Referência Rápida de Comandos

| Finalidade | Comando |
| :--- | :--- |
| Iniciar servidor local | `python run.py` |
| Rodar lint estático | `flake8 app tests --statistics` |
| Rodar testes unitários | `pytest -v tests/unit` |
| Rodar testes de integração | `pytest -v tests/integration` |
| Rodar testes E2E | `pytest -v tests/e2e` |
| Rodar todos os testes | `pytest -v tests/` |
| Quality Gate (meta >= 80%) | `pytest --cov=app --cov-report=term-missing --cov-fail-under=80 tests/` |
