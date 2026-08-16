# Semana 01: A Metodologia CRISP-DM em Ciência de Dados

> **Formato de Aula Prática**: Esta aula possui uma versão interativa em Jupyter Notebook disponível em [`semana_01.ipynb`](semana_01.ipynb).

## 1. Visão Geral & Objetivos de Aprendizagem
Nesta aula, estudaremos o **CRISP-DM** (*Cross-Industry Standard Process for Data Mining*), a metodologia padrão globalmente adotada para o desenvolvimento de projetos de Ciência de Dados e Aprendizado de Máquina.

Ao final deste material, você será capaz de:
- Compreender a necessidade de um processo estruturado em projetos de dados.
- Identificar e descrever as 6 fases do ciclo CRISP-DM.
- Compreender o caráter cíclico, iterativo e não-linear da metodologia.
- Avaliar a importância da definição de metas de negócio e custos assimétricos de erro.

---

## 2. O que é o CRISP-DM?

O **CRISP-DM** foi criado no final dos anos 1990 por um consórcio de grandes empresas para resolver a falta de padronização, o alto índice de falhas e a desconexão entre modelos estatísticos e os objetivos reais das empresas.

Diferente do desenvolvimento tradicional de software, o desenvolvimento de modelos preditivos é **experimental, estatístico e orientado a hipóteses**. O CRISP-DM organiza essa incerteza em um mapa claro de 6 fases encadeadas:

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
A primeira fase é a mais crítica de todo o projeto. Nela, o Cientista de Dados deve mapear os problemas reais da empresa, os objetivos de negócio e os critérios de sucesso.

#### Mapeamento de Custos Assimétricos
Em problemas de classificação (por exemplo, aprovação de crédito ou detecção de fraudes), os erros não possuem o mesmo impacto financeiro:
- **Falso Negativo (FN)**: O modelo aprova um cliente de alto risco que acaba dando calote. *Custo: Perda total do capital emprestado (ex: R$ 10.000,00).*
- **Falso Positivo (FP)**: O modelo recusa um bom cliente. *Custo: Perda da margem de lucro de juros (ex: R$ 600,00).*

Como o custo do FN é muito maior que o do FP, a meta do projeto deve priorizar a métrica de **Recall** da classe de risco, e não a acurácia global.

### Fase 2: Data Understanding (Entendimento dos Dados)
Coleta inicial de dados, estatística descritiva, exploração inicial e diagnóstico da qualidade de dados (nulos, ruidos, outliers).

### Fase 3: Data Preparation (Preparação dos Dados)
Consome geralmente de 70% a 80% do tempo do projeto: seleção de colunas, sanitização de outliers espúrios, imputação pela mediana, engenharia de atributos (feature engineering) e One-Hot Encoding.

### Fase 4: Modeling (Modelagem Preditiva)
Treinamento de algoritmos (como Random Forest ou XGBoost), ajuste de hiperparâmetros, divisão treino/teste e tratamento do desbalanceamento de classe.

### Fase 5: Evaluation (Avaliação)
Validação das métricas técnicas (Recall, Precision, F1-Score, ROC-AUC) e validação do ROI / retorno financeiro gerado para a empresa.

### Fase 6: Deployment (Implantação e Operação)
Disponibilização do modelo em produção através de APIs REST e monitoramento contínuo contra perda de desempenho (data drift).

---

## 4. Exercícios de Fixação & Estudo Dirigido

1. Por que o CRISP-DM é representado como um ciclo contínuo e não como uma linha reta?
2. Em um sistema de detecção de fraudes em cartões de crédito, qual erro traz maior prejuízo financeiro: Falso Positivo ou Falso Negativo? Justifique.
3. Quais são as principais atividades realizadas na Fase 3 (Data Preparation)?
