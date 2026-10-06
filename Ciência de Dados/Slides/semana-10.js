window.SLIDE_DECKS["ciencia-de-dados/semana-10"] = {
  "title": "Redes neurais para classificação tabular",
  "slides": [
    {
      "category": "Semana 10",
      "title": "Redes neurais para classificação tabular",
      "subtitle": "Fundamentos, preparação, treinamento e comparação com Random Forest",
      "content": "<div class=\"formula-box\"><strong>Problema</strong><br>Classificar condição normal ou falha a partir de temperatura, vibração, corrente e pressão.</div><table class=\"answer-table\"><tbody><tr><td>Baseline</td><td>Random Forest</td></tr><tr><td>Modelo candidato</td><td>MLPClassifier</td></tr><tr><td>Critério</td><td>Desempenho no teste, estabilidade e custo operacional</td></tr></tbody></table>"
    },
    {
      "category": "Contexto",
      "title": "Por que comparar uma MLP com o baseline",
      "subtitle": "Complexidade adicional precisa produzir benefício mensurável",
      "content": "<table class=\"answer-table\"><thead><tr><th>Questão</th><th>Implicação experimental</th></tr></thead><tbody><tr><td>A relação entre sensores é não linear?</td><td>MLP pode aprender combinações contínuas entre atributos.</td></tr><tr><td>Há poucos dados tabulares?</td><td>Random Forest pode permanecer mais eficiente e robusta.</td></tr><tr><td>O custo de erro é assimétrico?</td><td>Recall, precisão e limiar importam mais que acurácia.</td></tr><tr><td>O modelo será mantido?</td><td>Tempo de treino, estabilidade e explicabilidade entram na decisão.</td></tr></tbody></table>"
    },
    {
      "category": "CRISP-DM",
      "title": "A rede neural ocupa a etapa de modelagem",
      "subtitle": "O processo de ciência de dados permanece o mesmo",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Business Understanding</strong><p>Definir falha, horizonte de decisão e custo dos erros.</p></div><div class=\"concept-row\"><strong>Data Preparation</strong><p>Separar treino/teste, tratar ausentes e padronizar sem leakage.</p></div><div class=\"concept-row\"><strong>Modeling</strong><p>Treinar baseline e MLP sob a mesma divisão.</p></div><div class=\"concept-row\"><strong>Evaluation</strong><p>Comparar métricas, matriz de confusão e custo.</p></div></div>"
    },
    {
      "category": "Modelo",
      "title": "Um neurônio executa uma transformação parametrizada",
      "subtitle": "Pesos e viés são ajustados durante o treinamento",
      "content": "<div class=\"formula-box\">z = wᵀx + b<br><br>a = f(z)</div><table class=\"answer-table\"><tbody><tr><td><strong>x</strong></td><td>vetor de entradas</td></tr><tr><td><strong>w</strong></td><td>pesos aprendidos</td></tr><tr><td><strong>b</strong></td><td>viés aprendido</td></tr><tr><td><strong>f</strong></td><td>função de ativação</td></tr></tbody></table>"
    },
    {
      "category": "Arquitetura",
      "title": "MLP = composição de camadas densas",
      "subtitle": "Cada camada produz a entrada da camada seguinte",
      "content": "<div class=\"code-block\">x ∈ ℝ⁴<br>↓ Dense(16) + ReLU<br>h₁ ∈ ℝ¹⁶<br>↓ Dense(8) + ReLU<br>h₂ ∈ ℝ⁸<br>↓ Dense(1) + Sigmoid<br>p(falha) ∈ [0,1]</div><div class=\"formula-box\">ŷ = σ(W₃ · ReLU(W₂ · ReLU(W₁x+b₁)+b₂)+b₃)</div>"
    },
    {
      "category": "Treinamento",
      "title": "Forward pass, perda e backpropagation",
      "subtitle": "O treinamento repete cálculo, gradiente e atualização",
      "content": "<div class=\"rubric-list\"><div class=\"rubric-item\"><span>Calcular ativações da entrada até a saída</span><b>Forward</b></div><div class=\"rubric-item\"><span>Comparar probabilidade e rótulo</span><b>Loss</b></div><div class=\"rubric-item\"><span>Calcular derivadas pela regra da cadeia</span><b>Backprop</b></div><div class=\"rubric-item\"><span>Atualizar pesos com o otimizador Adam</span><b>Update</b></div></div><div class=\"formula-box\">Binary cross-entropy: −[y log(p) + (1−y) log(1−p)]</div>"
    },
    {
      "category": "Ativações",
      "title": "ReLU nas camadas ocultas e sigmoid na saída",
      "subtitle": "As funções cumprem papéis diferentes",
      "content": "<div class=\"grid-2\"><div class=\"card\"><h2>ReLU</h2><div class=\"formula-box\">f(z) = max(0,z)</div><p>Introduz não linearidade e mantém gradientes simples para valores positivos.</p></div><div class=\"card\"><h2>Sigmoid</h2><div class=\"formula-box\">σ(z) = 1/(1+e⁻ᶻ)</div><p>Mapeia o logit para uma probabilidade em classificação binária.</p></div></div>"
    },
    {
      "category": "Preparação",
      "title": "Escala altera a geometria da otimização",
      "subtitle": "Atributos em ordens distintas produzem gradientes desequilibrados",
      "content": "<div class=\"formula-box\">z = (x − μ<sub>treino</sub>) / σ<sub>treino</sub></div><table class=\"answer-table\"><thead><tr><th>Atributo</th><th>Ordem típica</th><th>Após StandardScaler</th></tr></thead><tbody><tr><td>Temperatura</td><td>dezenas</td><td>média ≈ 0</td></tr><tr><td>Vibração</td><td>unidades</td><td>desvio ≈ 1</td></tr><tr><td>Corrente</td><td>dezenas</td><td>comparável aos demais</td></tr></tbody></table>"
    },
    {
      "category": "Validação",
      "title": "Pipeline evita vazamento de dados",
      "subtitle": "O scaler aprende parâmetros somente no treino",
      "content": "<div class=\"code-block\">Pipeline([<br>&nbsp;&nbsp;(\"escala\", StandardScaler()),<br>&nbsp;&nbsp;(\"modelo\", MLPClassifier(...))<br>])</div><div class=\"grid-2\"><div class=\"card\"><h2>Treino</h2><p>O pipeline ajusta média, desvio e pesos.</p></div><div class=\"card\"><h2>Teste</h2><p>O pipeline reutiliza os parâmetros aprendidos. Não executa novo fit.</p></div></div><div class=\"exam-warning\">Executar fit_transform antes do split transfere informação do teste para o treinamento.</div>"
    },
    {
      "category": "Experimento",
      "title": "Comparação exige protocolo controlado",
      "subtitle": "Os modelos usam a mesma amostra de teste",
      "content": "<table class=\"answer-table\"><thead><tr><th>Decisão</th><th>Configuração</th></tr></thead><tbody><tr><td>Divisão</td><td>75% treino, 25% teste, estratificada</td></tr><tr><td>Reprodutibilidade</td><td>random_state = 42</td></tr><tr><td>MLP</td><td>(16,8), ReLU, Adam, early stopping</td></tr><tr><td>Random Forest</td><td>250 árvores, class_weight balanced</td></tr><tr><td>Avaliação</td><td>ROC-AUC, precisão, recall, F1 e matriz de confusão</td></tr></tbody></table>"
    },
    {
      "category": "Implementação",
      "title": "Configuração da MLP no scikit-learn",
      "subtitle": "Arquitetura e parada são parâmetros explícitos",
      "content": "<div class=\"code-block\">MLPClassifier(<br>&nbsp;&nbsp;hidden_layer_sizes=(16, 8),<br>&nbsp;&nbsp;activation=\"relu\",<br>&nbsp;&nbsp;solver=\"adam\",<br>&nbsp;&nbsp;early_stopping=True,<br>&nbsp;&nbsp;validation_fraction=0.2,<br>&nbsp;&nbsp;n_iter_no_change=20,<br>&nbsp;&nbsp;max_iter=500,<br>&nbsp;&nbsp;random_state=42<br>)</div>"
    },
    {
      "category": "Inspeção",
      "title": "As matrizes de pesos definem a rede treinada",
      "subtitle": "As dimensões confirmam as conexões entre camadas",
      "content": "<table class=\"answer-table\"><thead><tr><th>Matriz</th><th>Forma</th><th>Conexões</th></tr></thead><tbody><tr><td>W₁</td><td>4 × 16</td><td>entradas → camada oculta 1</td></tr><tr><td>W₂</td><td>16 × 8</td><td>camada oculta 1 → camada oculta 2</td></tr><tr><td>W₃</td><td>8 × 1</td><td>camada oculta 2 → saída</td></tr></tbody></table><div class=\"formula-box\">Parâmetros treináveis = pesos + vieses de todas as camadas</div>"
    },
    {
      "category": "Forward pass",
      "title": "Uma observação atravessa todas as camadas",
      "subtitle": "O notebook reproduz manualmente o predict_proba",
      "content": "<div class=\"code-block\">x_original<br>↓ StandardScaler.transform<br>x_padronizado<br>↓ xW₁+b₁ → ReLU<br>h₁<br>↓ h₁W₂+b₂ → ReLU<br>h₂<br>↓ h₂W₃+b₃ → Sigmoid<br>p(falha)</div><div class=\"formula-box\">A probabilidade manual deve coincidir com <code>mlp.predict_proba()</code>.</div>"
    },
    {
      "category": "Diagnóstico",
      "title": "Curvas de treino mostram convergência",
      "subtitle": "Early stopping monitora validação interna, não o teste",
      "content": "<table class=\"answer-table\"><thead><tr><th>Sinal</th><th>Interpretação possível</th></tr></thead><tbody><tr><td>Loss cai e estabiliza</td><td>Convergência provável</td></tr><tr><td>Loss oscila</td><td>Escala ou taxa de aprendizado inadequada</td></tr><tr><td>Treino melhora e validação piora</td><td>Overfitting</td></tr><tr><td>Parada muito precoce</td><td>Tolerância ou patience restritiva</td></tr></tbody></table>"
    },
    {
      "category": "Avaliação",
      "title": "Matriz de confusão preserva o tipo de erro",
      "subtitle": "Acurácia agrega custos que podem ser diferentes",
      "content": "<table class=\"answer-table\"><thead><tr><th></th><th>Prevê normal</th><th>Prevê falha</th></tr></thead><tbody><tr><td><strong>Real normal</strong></td><td>TN</td><td>FP: inspeção desnecessária</td></tr><tr><td><strong>Real falha</strong></td><td>FN: falha não detectada</td><td>TP</td></tr></tbody></table><div class=\"formula-box\">Recall = TP/(TP+FN) &nbsp;&nbsp; Precisão = TP/(TP+FP)</div>"
    },
    {
      "category": "Decisão",
      "title": "O limiar converte probabilidade em classe",
      "subtitle": "A escolha deve minimizar custo esperado",
      "content": "<div class=\"formula-box\">Custo(limiar) = FN × R$ 5.000 + FP × R$ 500</div><div class=\"grid-2\"><div class=\"card\"><h2>Limiar menor</h2><p>Aumenta alertas e tende a reduzir falsos negativos.</p></div><div class=\"card\"><h2>Limiar maior</h2><p>Reduz alertas e pode aumentar falhas não detectadas.</p></div></div><div class=\"exam-warning exam-note\">Os valores são premissas didáticas. Em projeto real, devem vir do processo de negócio.</div>"
    },
    {
      "category": "Comparação",
      "title": "Random Forest e MLP têm pressupostos distintos",
      "subtitle": "O melhor modelo depende dos dados e do requisito operacional",
      "content": "<table class=\"answer-table\"><thead><tr><th>Critério</th><th>Random Forest</th><th>MLP</th></tr></thead><tbody><tr><td>Escala</td><td>Pouco sensível</td><td>Sensível</td></tr><tr><td>Dados tabulares pequenos</td><td>Baseline forte</td><td>Pode não superar árvores</td></tr><tr><td>Treinamento</td><td>Menos sensível</td><td>Depende de arquitetura e otimização</td></tr><tr><td>Interpretação</td><td>Importâncias e métodos locais</td><td>Exige técnicas adicionais</td></tr></tbody></table>"
    },
    {
      "category": "Prática",
      "title": "Evidências produzidas no notebook",
      "subtitle": "A conclusão deve ser apoiada por resultados",
      "content": "<div class=\"rubric-list\"><div class=\"rubric-item\"><span>Dados sintéticos industriais e distribuição da classe</span><b>1</b></div><div class=\"rubric-item\"><span>Baseline Random Forest e MLP no mesmo split</span><b>2</b></div><div class=\"rubric-item\"><span>Curvas de loss e validação</span><b>3</b></div><div class=\"rubric-item\"><span>Pesos e forward pass de uma observação</span><b>4</b></div><div class=\"rubric-item\"><span>Matrizes de confusão e métricas</span><b>5</b></div><div class=\"rubric-item\"><span>Custo por limiar e recomendação</span><b>6</b></div></div>"
    },
    {
      "category": "Conclusão",
      "title": "Critérios técnicos para selecionar o modelo",
      "subtitle": "Complexidade só se justifica com ganho verificável",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Validade</strong><p>Pipeline sem leakage e teste mantido fora do treinamento.</p></div><div class=\"concept-row\"><strong>Desempenho</strong><p>Métricas coerentes com a classe de falha.</p></div><div class=\"concept-row\"><strong>Custo</strong><p>Limiar escolhido pela consequência de FP e FN.</p></div><div class=\"concept-row\"><strong>Operação</strong><p>Treinamento reproduzível e comportamento monitorável.</p></div></div>"
    }
  ]
};
