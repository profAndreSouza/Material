window.SLIDE_DECKS["ciencia-de-dados/semana-10"] = {
  "title": "Da Random Forest às Redes Neurais",
  "slides": [
    {
      "category": "Semana 10",
      "title": "Da Random Forest às Redes Neurais",
      "subtitle": "Fundamentos e preparação específica para dados industriais",
      "content": "<div class=\"hero-story\"><div class=\"hero-emoji\">🧠</div><div><h2>Uma nova candidata dentro do CRISP-DM</h2><p>A MLP (Multilayer Perceptron) será comparada ao baseline Random Forest sem abandonar o problema de negócio, a divisão estratificada dos dados ou a matriz de custo real.</p></div></div>"
    },
    {
      "category": "CRISP-DM",
      "title": "Continuidade do Processo",
      "subtitle": "A mudança ocorre em Data Preparation e Modeling",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Separação Estratificada</strong><p>O conjunto de teste permanece intocado até a avaliação final.</p></div><div class=\"concept-row\"><strong>Ausentes e Categorias</strong><p>Redes neurais não toleram NaNs e exigem vetorização numérica.</p></div><div class=\"concept-row\"><strong>Escala (StandardScaler)</strong><p>Normalização é mandatória para convergência de gradientes.</p></div><div class=\"concept-row\"><strong>Baseline Justificado</strong><p>Complexidade adicional só vale a pena se trouxer ganho financeiro ou operacional real.</p></div></div>"
    },
    {
      "category": "Comparativo",
      "title": "Random Forest vs MLP",
      "subtitle": "Regras discretas de decisão versus transformações numéricas contínuas",
      "content": "<div class=\"grid-2\"><div><h2>Random Forest</h2><p>Particiona o espaço de atributos por hiperplanos ortogonais. Robusta a dados não escalados e interpretável via Feature Importance.</p></div><div><h2>MLP (Rede Neural)</h2><p>Aprende combinações não lineares suaves por camadas de neurônios: <code>a = f(W·x + b)</code>. Exige padronização rigorosa dos dados.</p></div></div>"
    },
    {
      "category": "Vazamento de Dados",
      "title": "Evitando Data Leakage na Escala",
      "subtitle": "O StandardScaler aprende média e desvio somente no treino",
      "content": "<div class=\"formula-box\">z = (x - μ_treino) / σ_treino</div><div class=\"exam-warning exam-note\"><strong>Erro Clássico:</strong> Aplicar <code>fit_transform()</code> em todo o dataset antes da divisão do <code>train_test_split()</code> transfere informação do teste para o treino, gerando métricas ilusórias!</div>"
    },
    {
      "category": "Experimento",
      "title": "Pipeline Comparável e Reproduzível",
      "subtitle": "Experimentos controlados em Scikit-Learn",
      "content": "<div class=\"code-block\">mlp = Pipeline([\n    (\"escala\", StandardScaler()),\n    (\"modelo\", MLPClassifier(\n        hidden_layer_sizes=(16, 8),\n        activation=\"relu\",\n        max_iter=300,\n        early_stopping=True,\n        validation_fraction=0.2,\n        random_state=42\n    ))\n])</div>"
    },
    {
      "category": "Diagnóstico",
      "title": "Lendo a Curva de Aprendizado",
      "subtitle": "Diagnóstico visual de treinamento via loss_curve_",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Queda Consistente</strong><p>O otimizador (Adam/SGD) está encontrando um mínimo na função de perda.</p></div><div class=\"concept-row\"><strong>Early Stopping</strong><p>Reserva 20% do treino para validação interna e interrompe o treino ao detectar platô, evitando overfitting.</p></div></div>"
    },
    {
      "category": "Negócio",
      "title": "Ajuste de Limiar pelo Custo Real",
      "subtitle": "Acurácia não reflete o custo financeiro de um falso negativo",
      "content": "<div class=\"grid-2\"><div class=\"formula-box\">Falso Negativo (FN)<br>Falha não detectada<br><strong>Custo: R$ 5.000</strong></div><div class=\"formula-box\">Falso Positivo (FP)<br>Inspeção desnecessária<br><strong>Custo: R$ 500</strong></div></div><div class=\"exam-note\">Reduzir o limiar de decisão de 0.50 para 0.30 eleva o Recall da classe de falha, minimizando o custo total da operação.</div>"
    },
    {
      "category": "Quiz",
      "title": "Checagem de Entendimento",
      "subtitle": "Testando conceitos de otimização",
      "content": "<div class=\"hero-story\"><div class=\"hero-emoji\">❓</div><div><h2>O que acontece ao treinar uma MLP sem aplicar o StandardScaler?</h2><p><strong>Resposta:</strong> Atributos com grandezas numéricas muito elevadas (ex: corrente em ampères) dominam o cálculo dos gradientes, fazendo com que o otimizador oscile ou divirja, resultando em convergência lenta e métricas pobres.</p></div></div>"
    },
    {
      "category": "Prática",
      "title": "Atividade de Investigação",
      "subtitle": "Exercícios práticos no notebook da aula",
      "content": "<div class=\"rubric-list\"><div class=\"rubric-item\"><span>1. Altere a arquitetura para (8,), (32,16) e (32,16,8)</span><b>Passo 1</b></div><div class=\"rubric-item\"><span>2. Retire o scaler e observe a instabilidade</span><b>Passo 2</b></div><div class=\"rubric-item\"><span>3. Compare ativadores relu vs tanh</span><b>Passo 3</b></div><div class=\"rubric-item\"><span>4. Encontre o limiar de decisão financeiramente ótimo</span><b>Passo 4</b></div></div>"
    }
  ]
};
