window.SLIDE_DECKS["devops/reforco-01-07-gitflow"] = {
  "title": "Fundamentos técnicos de DevOps e GitFlow",
  "slides": [
    {
      "category": "Reforço técnico",
      "title": "DevOps, CI/CD e GitFlow",
      "subtitle": "Fundamentos das semanas 1 a 7 e laboratório distribuído",
      "content": "<div class=\"formula-box\"><strong>Escopo</strong><br>Cultura e fluxo de valor · Git distribuído · Estratégias de branches · Integração contínua · Testes automatizados · Quality Gates</div><table class=\"answer-table\"><tbody><tr><td><strong>Parte 1</strong></td><td>Modelo conceitual e arquitetura</td></tr><tr><td><strong>Parte 2</strong></td><td>Políticas de integração e qualidade</td></tr><tr><td><strong>Parte 3</strong></td><td>Remoto com dois clones executado no notebook</td></tr></tbody></table>"
    },
    {
      "category": "Contexto",
      "title": "Problema operacional que DevOps aborda",
      "subtitle": "Otimizações locais geram filas, retrabalho e risco",
      "content": "<table class=\"answer-table\"><thead><tr><th>Sintoma</th><th>Causa sistêmica</th><th>Prática</th></tr></thead><tbody><tr><td>Integração tardia</td><td>Branches longas e mudanças grandes</td><td>CI e lotes pequenos</td></tr><tr><td>Deploy inconsistente</td><td>Procedimento manual</td><td>Pipeline versionado</td></tr><tr><td>Falha em produção</td><td>Feedback tardio</td><td>Shift-left e testes</td></tr><tr><td>Recuperação lenta</td><td>Baixa observabilidade</td><td>Métricas e rollback</td></tr></tbody></table>"
    },
    {
      "category": "Fundamentos",
      "title": "CALMS como modelo de capacidades",
      "subtitle": "Cada pilar descreve uma propriedade do sistema de entrega",
      "content": "<div class=\"grid-3\"><div class=\"card\"><h2>Culture</h2><p>Responsabilidade compartilhada, revisão e aprendizado sem culpabilização.</p></div><div class=\"card\"><h2>Automation</h2><p>Build, teste e deploy reproduzíveis.</p></div><div class=\"card\"><h2>Lean</h2><p>Lotes pequenos, limite de WIP e redução de espera.</p></div><div class=\"card\"><h2>Measurement</h2><p>Métricas do fluxo e da confiabilidade.</p></div><div class=\"card\"><h2>Sharing</h2><p>Padrões e conhecimento acessíveis à equipe.</p></div></div>"
    },
    {
      "category": "Fluxo",
      "title": "Lead time inclui trabalho e espera",
      "subtitle": "Filas normalmente consomem mais tempo que a execução",
      "content": "<div class=\"code-block\">Lead time = análise + espera + implementação + espera + revisão + espera + deploy</div><div class=\"grid-2\"><div class=\"card\"><h2>Processamento</h2><p>Período em que alguém ou uma automação atua sobre a mudança.</p></div><div class=\"card\"><h2>Espera</h2><p>Fila para ambiente, revisão, teste, aprovação ou implantação.</p></div></div><div class=\"formula-box\">Eficiência do fluxo = tempo de processamento ÷ lead time total</div>"
    },
    {
      "category": "Medição",
      "title": "Métricas DORA cobrem throughput e estabilidade",
      "subtitle": "Nenhuma métrica isolada descreve o desempenho",
      "content": "<table class=\"answer-table\"><thead><tr><th>Métrica</th><th>Definição</th><th>Direção</th></tr></thead><tbody><tr><td>Deployment Frequency</td><td>Frequência de implantações</td><td>Maior</td></tr><tr><td>Lead Time for Changes</td><td>Tempo entre commit e produção</td><td>Menor</td></tr><tr><td>Change Failure Rate</td><td>Mudanças que exigem correção</td><td>Menor</td></tr><tr><td>Time to Restore Service</td><td>Tempo para restaurar o serviço</td><td>Menor</td></tr></tbody></table>"
    },
    {
      "category": "Git",
      "title": "Git é um sistema distribuído de objetos",
      "subtitle": "Cada clone possui histórico e referências locais",
      "content": "<table class=\"answer-table\"><thead><tr><th>Objeto</th><th>Conteúdo</th></tr></thead><tbody><tr><td>blob</td><td>Conteúdo de arquivo</td></tr><tr><td>tree</td><td>Diretório, nomes e objetos filhos</td></tr><tr><td>commit</td><td>Tree raiz, autor, mensagem e pais</td></tr><tr><td>tag anotada</td><td>Versão, mensagem e objeto-alvo</td></tr></tbody></table><div class=\"formula-box\">Branch = referência móvel. origin/develop = estado remoto conhecido no último fetch.</div>"
    },
    {
      "category": "Git",
      "title": "Working tree, index e repositório",
      "subtitle": "Os comandos movem conteúdo entre estados",
      "content": "<div class=\"code-block\">Working tree ── git add ──► Index ── git commit ──► Repositório local</div><table class=\"answer-table\"><tbody><tr><td><code>git diff</code></td><td>Working tree comparada ao index</td></tr><tr><td><code>git diff --staged</code></td><td>Index comparado ao último commit</td></tr><tr><td><code>git status</code></td><td>Resumo dos estados e da branch</td></tr></tbody></table>"
    },
    {
      "category": "Rede Git",
      "title": "Clone, fetch, pull e push",
      "subtitle": "Cada comando altera estados diferentes",
      "content": "<table class=\"answer-table\"><thead><tr><th>Comando</th><th>Efeito local</th><th>Efeito remoto</th></tr></thead><tbody><tr><td>clone</td><td>Cria repositório, working tree e origin/*</td><td>Leitura</td></tr><tr><td>fetch</td><td>Atualiza origin/*; não altera arquivos</td><td>Leitura</td></tr><tr><td>pull</td><td>Fetch seguido de merge ou rebase</td><td>Leitura</td></tr><tr><td>push</td><td>Envia objetos e atualiza referência</td><td>Escrita</td></tr></tbody></table>"
    },
    {
      "category": "GitFlow",
      "title": "Contrato de branches",
      "subtitle": "Origem, destino e condição de encerramento",
      "content": "<table class=\"answer-table\"><thead><tr><th>Branch</th><th>Origem</th><th>Destino</th><th>Condição</th></tr></thead><tbody><tr><td>feature/*</td><td>develop</td><td>develop</td><td>Feature validada</td></tr><tr><td>release/*</td><td>develop</td><td>main + develop</td><td>Versão estabilizada e tag</td></tr><tr><td>hotfix/*</td><td>main</td><td>main + develop</td><td>Correção de produção</td></tr></tbody></table>"
    },
    {
      "category": "Integração",
      "title": "Merge e rebase têm efeitos diferentes",
      "subtitle": "A escolha depende de compartilhamento e auditabilidade",
      "content": "<div class=\"grid-2\"><div class=\"card\"><h2>merge --no-ff</h2><p>Cria commit de merge e preserva o agrupamento lógico da branch.</p><div class=\"code-block\">git switch develop<br>git merge --no-ff feature/filtro</div></div><div class=\"card\"><h2>rebase</h2><p>Reaplica commits sobre nova base e gera novos hashes. Não reescreva commits públicos.</p><div class=\"code-block\">git switch feature/filtro<br>git rebase develop</div></div></div>"
    },
    {
      "category": "CI/CD",
      "title": "Pipeline é um grafo de execução",
      "subtitle": "Eventos disparam jobs e dependências controlam a ordem",
      "content": "<div class=\"code-block\">pull_request<br>├── lint<br>├── unit-tests<br>└── integration-tests<br>&nbsp;&nbsp;&nbsp;&nbsp;└── quality-gate<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── package</div><table class=\"answer-table\"><tbody><tr><td>Workflow</td><td>Definição versionada do processo</td></tr><tr><td>Job</td><td>Steps executados por um runner</td></tr><tr><td>Artifact</td><td>Saída imutável do pipeline</td></tr></tbody></table>"
    },
    {
      "category": "CI/CD",
      "title": "Delivery e Deployment diferem no controle final",
      "subtitle": "Os estágios anteriores podem ser idênticos",
      "content": "<table class=\"answer-table\"><thead><tr><th>Estratégia</th><th>Após os gates</th><th>Produção</th></tr></thead><tbody><tr><td>Continuous Delivery</td><td>Artefato validado e pronto</td><td>Aprovação explícita</td></tr><tr><td>Continuous Deployment</td><td>Artefato validado</td><td>Promoção automática</td></tr></tbody></table><div class=\"formula-box\">CI valida a integração. CD controla a promoção do mesmo artefato entre ambientes.</div>"
    },
    {
      "category": "Testes",
      "title": "A fronteira observada define o tipo de teste",
      "subtitle": "A classificação depende do que é real e do que está isolado",
      "content": "<table class=\"answer-table\"><thead><tr><th>Tipo</th><th>Fronteira</th><th>Dependências</th><th>Falhas</th></tr></thead><tbody><tr><td>Unitário</td><td>Função ou classe</td><td>Substituídas</td><td>Regra e borda</td></tr><tr><td>Integração</td><td>Componentes</td><td>Reais e controladas</td><td>Contrato e schema</td></tr><tr><td>E2E</td><td>Fluxo externo</td><td>Sistema implantado</td><td>Ambiente e jornada</td></tr></tbody></table>"
    },
    {
      "category": "Testes",
      "title": "Cobertura não mede qualidade das asserções",
      "subtitle": "O gate combina sinais complementares",
      "content": "<div class=\"grid-3\"><div class=\"card\"><h2>Lint</h2><p>Erros estáticos e padrões.</p></div><div class=\"card\"><h2>Testes</h2><p>Comportamentos e contratos.</p></div><div class=\"card\"><h2>Cobertura</h2><p>Trechos executados.</p></div></div><div class=\"formula-box\"><code>pytest --cov=app --cov-fail-under=80</code></div><div class=\"exam-warning exam-note\">80% não prova correção. O limiar apenas bloqueia regressão de cobertura.</div>"
    },
    {
      "category": "Quality Gate",
      "title": "Branch protection torna o gate efetivo",
      "subtitle": "Falha de check impede a atualização da branch",
      "content": "<table class=\"answer-table\"><thead><tr><th>Controle</th><th>Resultado</th></tr></thead><tbody><tr><td>Require status checks</td><td>Bloqueia merge se CI falhar</td></tr><tr><td>Require PR reviews</td><td>Exige revisão por outra pessoa</td></tr><tr><td>Dismiss stale approvals</td><td>Invalida aprovação após novo código</td></tr><tr><td>Restrict direct pushes</td><td>Impede desvio do fluxo</td></tr></tbody></table>"
    },
    {
      "category": "Laboratório",
      "title": "Topologia da simulação distribuída",
      "subtitle": "Um remoto bare conecta dois clones independentes",
      "content": "<div class=\"code-block\">clone_dev_a ◄──── push / fetch ────► origin.git (bare)<br><br>clone_dev_b ◄──── push / fetch ────► origin.git (bare)</div><div class=\"formula-box\">O notebook executa o Git real via subprocess. Não há emulação dos comandos nem dependência de internet.</div>"
    },
    {
      "category": "Laboratório",
      "title": "Sequência prática",
      "subtitle": "Sincronização, divergência e resolução",
      "content": "<div class=\"rubric-list\"><div class=\"rubric-item\"><span>Criar origin.git bare</span><b>1</b></div><div class=\"rubric-item\"><span>Clonar como dev_a e publicar main/develop</span><b>2</b></div><div class=\"rubric-item\"><span>Clonar como dev_b e executar fetch</span><b>3</b></div><div class=\"rubric-item\"><span>Publicar feature e integrar em develop</span><b>4</b></div><div class=\"rubric-item\"><span>Gerar commits concorrentes e non-fast-forward</span><b>5</b></div><div class=\"rubric-item\"><span>Resolver o conflito e inspecionar o grafo</span><b>6</b></div></div>"
    },
    {
      "category": "Diagnóstico",
      "title": "Comandos de inspeção",
      "subtitle": "Cada comando responde a uma pergunta operacional",
      "content": "<table class=\"answer-table\"><tbody><tr><td><code>git remote -v</code></td><td>Quais remotos estão configurados?</td></tr><tr><td><code>git branch -vv</code></td><td>Qual upstream cada branch acompanha?</td></tr><tr><td><code>git log --graph --all</code></td><td>Como os históricos se relacionam?</td></tr><tr><td><code>git ls-remote origin</code></td><td>Quais referências existem no remoto?</td></tr><tr><td><code>git status</code></td><td>Há divergência ou conflito?</td></tr></tbody></table>"
    },
    {
      "category": "Síntese",
      "title": "Critérios técnicos de conclusão",
      "subtitle": "Resultados observáveis",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Modelo</strong><p>Explicar objetos, referências e sincronização distribuída.</p></div><div class=\"concept-row\"><strong>Fluxo</strong><p>Selecionar a branch e justificar origem e destino.</p></div><div class=\"concept-row\"><strong>Automação</strong><p>Distinguir CI, Delivery e Deployment.</p></div><div class=\"concept-row\"><strong>Qualidade</strong><p>Definir testes e gates que bloqueiam falhas.</p></div><div class=\"concept-row\"><strong>Execução</strong><p>Demonstrar push, fetch, divergência e resolução entre clones.</p></div></div>"
    }
  ]
};
