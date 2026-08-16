# Semana 01: A Metodologia CRISP-DM em Ciência de Dados

## 1. Visão Geral & Objetivos de Aprendizagem
Nesta aula, estudaremos o **CRISP-DM** (*Cross-Industry Standard Process for Data Mining*), a metodologia padrão globalmente adotada para o desenvolvimento de projetos de Ciência de Dados e Aprendizado de Máquina.

Ao final deste material, você será capaz de:
- Compreender a necessidade de um processo estruturado em projetos de dados.
- Identificar e descrever as 6 fases do ciclo CRISP-DM.
- Compreender o caráter cíclico, iterativo e não-linear da metodologia.
- Avaliar a importância da definição de metas de negócio e custos assimétricos de erro.

---

## 2. O que é o CRISP-DM?

O **CRISP-DM** foi criado no final dos anos 1990 por um consórcio de grandes empresas (incluindo Daimler-Benz, SPSS e NCR) para resolver um problema recorrente: a falta de padronização, o alto índice de falhas e a desconexão entre modelos estatísticos e os objetivos reais das empresas.

Diferente do desenvolvimento tradicional de software (como o modelo Waterfall), o desenvolvimento de modelos preditivos é **experimental, estatístico e orientado a hipóteses**. O CRISP-DM organiza essa incerteza em um mapa claro de 6 fases encadeadas.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        CICLO DE VIDA CRISP-DM                          │
│                                                                        │
│   ┌────────────────────────┐         ┌────────────────────────┐        │
│   │ 1. Business            │ <-----> │ 2. Data                │        │
│   │    Understanding       │         │    Understanding       │        │
│   └───────────┬────────────┘         └───────────┬────────────┘        │
│               │                                  │                     │
│               ▼                                  ▼                     │
│   ┌────────────────────────┐         ┌────────────────────────┐        │
│   │ 6. Deployment          │         │ 3. Data                │        │
│   │    (Implantação)       │         │    Preparation         │        │
│   └───────────▲────────────┘         └───────────┬────────────┘        │
│               │                                  │                     │
│               │                      ┌───────────▼────────────┐        │
│   ┌───────────┴────────────┐         │ 4. Modeling            │        │
│   │ 5. Evaluation          │ <-----> │    (Modelagem)         │        │
│   │    (Avaliação)         │         │ └──────────────────────┘        │
│   └────────────────────────┘                                           │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. As 6 Fases do CRISP-DM em Detalhes

### Fase 1: Business Understanding (Entendimento do Negócio)
A primeira fase é a mais crítica de todo o projeto. Nela, o Cientista de Dados deve responder às seguintes perguntas:
- *Qual problema real a organização está tentando resolver?*
- *Como a solução será usada no dia a dia da operação?*
- *Quais são os critérios de sucesso do negócio (ROI, redução de custos, retenção de clientes)?*

#### Mapeamento de Custos Assimétricos
Em problemas de classificação (por exemplo, aprovação de crédito ou detecção de fraudes), os erros não possuem o mesmo impacto financeiro:
- **Falso Negativo (FN)**: O modelo aprova um cliente de alto risco que acaba dando calote. *Custo: Perda total do capital emprestado (ex: R$ 10.000,00).*
- **Falso Positivo (FP)**: O modelo recusa um bom cliente. *Custo: Perda da margem de lucro de juros (ex: R$ 600,00).*

Como o custo do FN é muito maior que o do FP, a meta do projeto deve priorizar a métrica de **Recall** da classe de risco, e não a acurácia global.

---

### Fase 2: Data Understanding (Entendimento dos Dados)
Após definir as metas de negócio, coletamos os dados brutos e realizamos a exploração inicial.
- **Coleta inicial**: Extração de bancos de dados relacionais (SQL), APIs, arquivos CSV ou filas de eventos.
- **Exploração e Estatística Descritiva**: Inspeção de tipos de dados, médias, medianas, amplitudes e distribuições.
- **Avaliação da Qualidade dos Dados**: Identificação de dados faltantes (*missing values*), ruidos de digitação, valores discrepantes (*outliers*) e desbalanceamento entre classes.

---

### Fase 3: Data Preparation (Preparação dos Dados)
A fase de preparação consome geralmente de **70% a 80% do tempo total** de um projeto de dados. Consiste em transformar os dados brutos no formato exato exigido pelos algoritmos de aprendizado de máquina.
- **Seleção de Atributos**: Descarte de identificadores sem poder preditivo (ex: IDs, hashes, números aleatórios).
- **Limpeza de Dados**: Imputação de valores nulos e tratamento de outliers espúrios.
- **Engenharia de Recursos (Feature Engineering)**: Criação de novas variáveis derivadas que facilitam o aprendizado dos modelos.
- **Codificação**: Conversão de variáveis categóricas (texto) em representações numéricas (`pd.get_dummies` ou `OneHotEncoder`).

---

### Fase 4: Modeling (Modelagem Preditiva)
Nesta fase, selecionamos e treinamos algoritmos de Aprendizado de Máquina (como Regressão Logística, Árvores de Decisão, Random Forest ou XGBoost).
- **Divisão do Dataset**: Separação rigorosa entre conjuntos de **Treino** (75%) e **Teste** (25%) para evitar sobreajuste (*overfitting*).
- **Ajuste de Hiperparâmetros**: Configuração das opções de funcionamento do algoritmo.
- **Tratamento do Desbalanceamento**: Ajuste dos pesos das classes (`class_weight='balanced'`) para compensar dados desproporcionais.

---

### Fase 5: Evaluation (Avaliação do Modelo)
Antes de colocar o modelo em produção, devemos avaliar se ele atende aos critérios técnicos e, principalmente, aos objetivos financeiros definidos na Fase 1.
- **Métricas Técnicas**: Avaliação da Matriz de Confusão, Precision, Recall, F1-Score e ROC-AUC.
- **Avaliação Financeira / ROI**: Cálculo do valor monetário gerado pelo modelo em relação ao processo manual anterior.
- **Importância das Variáveis (Feature Importance)**: Verificação se o modelo está tomando decisões com base em variáveis de negócio legítimas ou se está aprendendo ruidos do dataset.

---

### Fase 6: Deployment (Implantação e Operação)
O modelo treinado e validado é empacotado e disponibilizado para consumo em tempo real pelos sistemas da empresa.
- **Disponibilização**: Criação de uma API REST (ex: Flask ou FastAPI) ou função de predição em lote.
- **Monitoramento Contínuo**: Acompanhamento do desempenho do modelo em produção para detectar degradação estatística dos dados (*Data Drift* / *Concept Drift*).

---

## 4. Exercícios de Fixação & Estudo Dirigido

1. **Por que o CRISP-DM é representado como um ciclo contínuo e não como uma linha reta?**
2. **Em um sistema de detecção de fraudes em cartões de crédito, qual erro traz maior prejuízo financeiro: Falso Positivo ou Falso Negativo? Justifique com base no conceito de custos assimétricos.**
3. **Quais são as principais atividades realizadas na Fase 3 (Data Preparation) e por que ela consome a maior parte do tempo de um projeto de dados?**
4. **O que pode acontecer se uma equipe pular a Fase 1 (Business Understanding) e ir direto para a Fase 4 (Modeling)?**
