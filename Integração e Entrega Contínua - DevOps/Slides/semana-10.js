window.SLIDE_DECKS["devops/semana-10"] = {
  "title": "Testes de Integração e E2E",
  "slides": [
    {
      "category": "Semana 10",
      "title": "Testes de Integração e E2E",
      "subtitle": "Do componente isolado ao comportamento observável no fluxo crítico",
      "content": "<div class=\"hero-story\"><div class=\"hero-emoji\">🧪</div><div><h2>Fronteiras reais revelam defeitos novos</h2><p>API, persistência e fluxo completo precisam concordar. A pergunta central é qual falha só aparece quando componentes reais trabalham juntos.</p></div></div>"
    },
    {
      "category": "Estratégia",
      "title": "Pirâmide vs Troféu de Testes",
      "subtitle": "A escolha da camada ideal de testes",
      "content": "<div class=\"grid-3\"><div class=\"card\"><h2>Unidade</h2><p>Valida funções/lógica isolada em milissegundos. Barato, porém não garante integração.</p></div><div class=\"card\"><h2>Integração</h2><p>Testa contrato HTTP + Banco de Dados. Excelente custo-benefício para apurar regressões de schema.</p></div><div class=\"card\"><h2>E2E (End-to-End)</h2><p>Protege a jornada crítica do usuário final de ponta a ponta. Mais lento e mais dispendioso.</p></div></div>"
    },
    {
      "category": "Fronteiras",
      "title": "A Fronteira Define o Tipo de Teste",
      "subtitle": "O nome do teste vem do que está sendo observado",
      "content": "<table class=\"answer-table\"><thead><tr><th>Tipo</th><th>Fronteira Observada</th><th>Componentes Reais</th><th>Falha Típica Detectada</th></tr></thead><tbody><tr><td><strong>Unidade</strong></td><td>Função / Classe isolada</td><td>Mocks / Stubs</td><td>Lógica local e casos de borda</td></tr><tr><td><strong>Integração</strong></td><td>API + Banco de Dados</td><td>DB SQLite em memória</td><td>Erros de schema, transação, SQL e tipos</td></tr><tr><td><strong>E2E</strong></td><td>Entrada HTTP → Resposta final</td><td>Sistema completo rodando</td><td>Falhas de configuração, env vars e rotas</td></tr></tbody></table>"
    },
    {
      "category": "Fixtures",
      "title": "Fixtures Pytest: Isolamento e Reuso",
      "subtitle": "Estado explícito, isolado e descartável por teste",
      "content": "<div class=\"code-block\">@pytest.fixture\ndef app_isolada():\n    # SETUP: Cria banco limpo em memória\n    conexao = sqlite3.connect(\":memory:\")\n    app = AplicacaoAlertas(conexao)\n    \n    yield app  # Entrega a instância ao teste\n    \n    # TEARDOWN: Destroi a conexão ao finalizar\n    conexao.close()</div>"
    },
    {
      "category": "Qualidade",
      "title": "Cenários Negativos e Falha Segura",
      "subtitle": "Rejeitar entradas inválidas sem corrupção de estado",
      "content": "<div class=\"grid-2\"><div class=\"formula-box\">Entrada Inválida<br><code>{\"temperatura\": \"alta\"}</code></div><div class=\"formula-box\">Resultado Esperado<br>HTTP 400 + Mensagem<br><strong>0 registros gravados no banco</strong></div></div><div class=\"exam-warning exam-note\">Testar a ausência de gravações parciais no banco é tão importante quanto testar o código de status HTTP!</div>"
    },
    {
      "category": "Jornada",
      "title": "E2E: Uma História Observável",
      "subtitle": "Proteja fluxos valiosos sob a perspectiva do consumidor",
      "content": "<div class=\"code-block\">Dado que o serviço inicia sem alertas\nQuando o cliente envia leitura de 84,2 °C para motor01\nEntão a API confirma a geração de alerta (201 Created)\nE a consulta GET /alertas exibe o alerta de motor01</div>"
    },
    {
      "category": "Anti-padrões",
      "title": "Como Testes se Tornam Frágeis (Flaky)",
      "subtitle": "Evite atalhos que comprometam o pipeline de CI/CD",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>1. Banco Compartilhado</strong><p>Testes que leem ou gravam no mesmo banco externo sofrem com dados residuais.</p></div><div class=\"concept-row\"><strong>2. Dependência de Ordem</strong><p>Um teste que só passa se executado após outro oculta um acoplamento de estado.</p></div><div class=\"concept-row\"><strong>3. Uso de sleep()</strong><p>Sincronização por tempo fixo gera intermitência. Use polling ou eventos.</p></div></div>"
    },
    {
      "category": "Organização",
      "title": "Estrutura Sugerida para a Suíte",
      "subtitle": "Preparando o projeto para os Quality Gates do GitHub Actions",
      "content": "<div class=\"code-block\">tests/\n├── conftest.py\n├── unit/\n│   └── test_regras.py\n├── integration/\n│   └── test_api_banco.py\n└── e2e/\n    └── test_jornada.py</div><div class=\"formula-box\">Comando: pytest tests/integration -v</div>"
    },
    {
      "category": "Quiz",
      "title": "Checagem de Entendimento",
      "subtitle": "Testando conceitos da pirâmide de testes",
      "content": "<div class=\"hero-story\"><div class=\"hero-emoji\">❓</div><div><h2>Por que um teste de integração não deve usar Mocks para o banco de dados?</h2><p><strong>Resposta:</strong> Porque o objetivo principal do teste de integração é comprovar se o código SQL, o schema da tabela e o mapeamento de tipos funcionam corretamente contra um motor de banco real (mesmo em memória)!</p></div></div>"
    },
    {
      "category": "Prática",
      "title": "Atividade Prática de Suíte de Testes",
      "subtitle": "Execução no notebook da aula",
      "content": "<div class=\"rubric-list\"><div class=\"rubric-item\"><span>1. Crie os arquivos conftest.py e testes via %%writefile</span><b>Passo 1</b></div><div class=\"rubric-item\"><span>2. Implemente o teste de integração positivo e negativo</span><b>Passo 2</b></div><div class=\"rubric-item\"><span>3. Monte a fixture isolada com sqlite3 em memória</span><b>Passo 3</b></div><div class=\"rubric-item\"><span>4. Execute !pytest tests/integration -v no notebook</span><b>Passo 4</b></div></div>"
    }
  ]
};
