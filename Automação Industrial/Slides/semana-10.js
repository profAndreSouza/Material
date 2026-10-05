window.SLIDE_DECKS["automacao-industrial/semana-10"] = {
  "title": "Construção guiada do fluxo Node-RED",
  "slides": [
    {
      "category": "Semana 10",
      "title": "Construção guiada do fluxo Node-RED",
      "subtitle": "Da mensagem MQTT bruta ao dado industrial validado",
      "content": "<div class=\"hero-story\"><div class=\"hero-emoji\">🔀</div><div><h2>O fluxo deixa de ser uma caixa-preta</h2><p>Cada nó será inserido, configurado e validado separadamente. A pergunta central é o que acontece com a estrutura do objeto <code>msg</code> a cada ligação do fluxo.</p></div></div>"
    },
    {
      "category": "Objetivos",
      "title": "Resultados de aprendizagem",
      "subtitle": "Ao final da aula, o fluxo será compreensível, seguro e testável",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Contrato de Dados</strong><p>Explicar o contrato da mensagem entre nós vizinhos.</p></div><div class=\"concept-row\"><strong>Configuração MQTT</strong><p>Distinguir broker, tópico, payload, QoS e retain.</p></div><div class=\"concept-row\"><strong>Responsabilidade de Nós</strong><p>Usar json, switch, change e function adequadamente sem sobrecarregar com código desnecessário.</p></div><div class=\"concept-row\"><strong>Rotas de Erro</strong><p>Separar mensagens válidas de rejeições com saídas múltiplas.</p></div><div class=\"concept-row\"><strong>Versionamento</strong><p>Exportar o fluxo em JSON para versionamento no Git.</p></div></div>"
    },
    {
      "category": "Visão Geral",
      "title": "Arquitetura do Fluxo Nó a Nó",
      "subtitle": "Cada etapa reduz uma incerteza e enriquece o contexto da mensagem",
      "content": "<img class=\"diagram-img\" src=\"../Automação Industrial/aulas/img/semana_10_fluxo_node_red_no_a_no.png\" alt=\"Fluxo Node-RED\"><div class=\"sequence\"><span>mqtt in</span><span>json</span><span>switch</span><span>change</span><span>function</span></div>"
    },
    {
      "category": "Mensagens",
      "title": "O objeto msg é o fio condutor",
      "subtitle": "Fios transportam objetos JavaScript com dados e metadados",
      "content": "<div class=\"grid-2\"><div class=\"code-block\">{\n  topic: \"smartn1/linha1/motor01/telemetria\",\n  payload: \"{\\\"temperatura\\\": 78.4, \\\"vibracao\\\": 4.1}\",\n  qos: 1,\n  retain: false\n}</div><div><div class=\"concept-list\"><div class=\"concept-row\"><strong>Antes do nó JSON</strong><p><code>msg.payload</code> é uma <em>string</em> ou buffer bruto enviado pelo broker.</p></div><div class=\"concept-row\"><strong>Depois do nó JSON</strong><p><code>msg.payload</code> vira um <em>Object</em> JS (acessável via <code>msg.payload.temperatura</code>).</p></div><div class=\"concept-row\"><strong>Metadados</strong><p>Topic, qos e retain viajam no mesmo objeto sem perder a origem.</p></div></div></div></div>"
    },
    {
      "category": "Contrato",
      "title": "Contrato de dados do fluxo",
      "subtitle": "Especificação necessária para garantir a integridade da automação",
      "content": "<table class=\"answer-table\"><thead><tr><th>Campo</th><th>Tipo</th><th>Regra / Validação</th></tr></thead><tbody><tr><td><code>maquina_id</code></td><td>texto</td><td>obrigatório e não vazio</td></tr><tr><td><code>timestamp</code></td><td>ISO 8601</td><td>obrigatório</td></tr><tr><td><code>temperatura</code></td><td>número</td><td>intervalo físico de -20 a 150 °C</td></tr><tr><td><code>vibracao</code></td><td>número</td><td>valor não negativo</td></tr><tr><td><code>estado</code></td><td>texto</td><td><code>operando</code>, <code>parada</code> ou <code>falha</code></td></tr></tbody></table>"
    },
    {
      "category": "Fronteira",
      "title": "Nó 1 — mqtt in & Debug Bruto",
      "subtitle": "Primeiro observe a mensagem bruta, depois construa a lógica",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Configuration Node</strong><p>Centraliza o IP/host do broker Mosquitto, porta 1883 e credenciais.</p></div><div class=\"concept-row\"><strong>Tópico Curinga (+)</strong><p><code>smartn1/linha1/+/telemetria</code> captura motores 01, 02, etc.</p></div><div class=\"concept-row\"><strong>Nó Debug (Completo)</strong><p>Configurado para exibir o <em>msg completo</em> no painel lateral de eventos.</p></div></div>"
    },
    {
      "category": "Conversão",
      "title": "Nó 2 — json converte, não corrige",
      "subtitle": "Parse explícito para transformar representação textual em objeto JS",
      "content": "<div class=\"grid-2\"><div class=\"formula-box\">JSON Válido<br><code>{\"temperatura\":72.5}</code><br>→ Gera Objeto JS</div><div class=\"formula-box\">JSON Inválido<br><code>{temperatura:72.5}</code><br>→ Dispara Erro</div></div><div class=\"exam-warning exam-note\"><strong>Dica de Observabilidade:</strong> Mantenha um nó <em>debug</em> antes e outro depois do nó <em>json</em> durante o desenvolvimento.</div>"
    },
    {
      "category": "Roteamento",
      "title": "Nó 3 — switch: decisões declarativas",
      "subtitle": "Rotear não é transformar: separação visual de caminhos",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Saída 1 (Operando)</strong><p>Encaminha dados quando <code>msg.payload.estado == 'operando'</code>.</p></div><div class=\"concept-row\"><strong>Saída 2 (Parada)</strong><p>Redireciona máquinas paradas para log ou monitoramento.</p></div><div class=\"concept-row\"><strong>Saída 3 (Outros)</strong><p>Captura estados inesperados evitando descarte silencioso.</p></div></div>"
    },
    {
      "category": "Decisão de Design",
      "title": "change vs function",
      "subtitle": "Use a ferramenta mais simples que atenda a regra",
      "content": "<div class=\"grid-2\"><div><h2>Nó change (Declarativo)</h2><p>Ideal para mover/copiar propriedades (ex: <code>msg.payload.maquina_id</code> → <code>msg.maquina_id</code>) sem código JavaScript.</p></div><div><h2>Nó function (Imperativo)</h2><p>Ideal quando exige validação com múltiplos <code>if</code>, acumulo de erros e saídas separadas para válidos e rejeitados.</p></div></div>"
    },
    {
      "category": "Validação",
      "title": "Nó 5 — function com 2 Saídas",
      "subtitle": "Dado inválido deve ir para uma rota de rejeição explícita",
      "content": "<div class=\"code-block\">const p = msg.payload;\nconst erros = [];\n\nif (!p.maquina_id) erros.push(\"maquina_id ausente\");\nif (typeof p.temperatura !== \"number\") erros.push(\"temperatura inválida\");\n\nif (erros.length > 0) {\n    msg.erros = erros;\n    return [null, msg]; // Saída 2: Rejeição\n}\nmsg.payload.temperatura_k = Number((p.temperatura + 273.15).toFixed(2));\nreturn [msg, null]; // Saída 1: Válido</div>"
    },
    {
      "category": "Quiz",
      "title": "Checagem de Entendimento",
      "subtitle": "Testando a dinâmica dos fios e objetos",
      "content": "<div class=\"hero-story\"><div class=\"hero-emoji\">❓</div><div><h2>O que ocorre ao ligar um nó switch direto no mqtt in sem passar pelo nó json?</h2><p><strong>Resposta:</strong> A propriedade <code>msg.payload.estado</code> será <code>undefined</code> porque <code>msg.payload</code> ainda é uma string simples, fazendo com que o switch não encontre a propriedade e caia na rota padrão ou descarte a mensagem!</p></div></div>"
    },
    {
      "category": "Prática",
      "title": "Atividade Prática & Consolidação",
      "subtitle": "Construção manual e exportação em JSON",
      "content": "<div class=\"rubric-list\"><div class=\"rubric-item\"><span>1. Monte o fluxo nó a nó conforme o roteiro</span><b>Passo 1</b></div><div class=\"rubric-item\"><span>2. Nomeie cada nó pela sua responsabilidade</span><b>Passo 2</b></div><div class=\"rubric-item\"><span>3. Teste payloads válidos e malformados</span><b>Passo 3</b></div><div class=\"rubric-item\"><span>4. Exporte o fluxo JSON e salve no repositório</span><b>Passo 4</b></div></div>"
    }
  ]
};
