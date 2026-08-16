# Ciência de Dados

Este repositório contém o plano de ensino, ementa, cronograma semestral detalhado, referências bibliográficas e diretrizes das atividades práticas para a unidade curricular de **Ciência de Dados**.

---

## Ementa da Unidade Curricular

**Carga Horária:** 80 aulas (66h40min relógio / 20 Semanas)

### Descrição
Ao final dessa unidade curricular o estudante será capaz de desenvolver sistemas para manipulação e análise de dados aplicados a ambientes de produção industrial. Para tanto serão abordados os seguintes conteúdos: Matemática e Estatística Descritiva; Data Science; Análise de Séries Temporais; Aprendizado de Máquina e Dashboards Analíticos.

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas a sistemas de manipulação de dados para aplicação em ambientes de produção industrial, transformando dados brutos da telemetria da planta **Smart N1** em informações estratégicas e tomada de decisão.

### Capacidades Técnicas
- Transformar dados obtidos através de cálculos matemáticos e estatísticos em informações pertinentes ao processo produtivo.
- Extrair informações de dados obtidos para o gerenciamento de processos industriais através de análises estatísticas e aprendizado de máquina.
- Processar dados para a geração de relatórios analíticos tendo em vista a visualização da informação e cálculo do OEE (Overall Equipment Effectiveness).

### Capacidades Socioemocionais
- **Aprendizagem ativa e estratégias de aprendizagem:** Demonstrar postura proativa e atitude inovadora, adaptando-se a novos contextos tecnológicos e organizacionais.
- **Ética:** Apresentar comportamento ético na conduta profissional, praticando a inclusão e o respeito.
- **Pensamento crítico e inovação:** Expressar-se de modo crítico e com base em evidências estatísticas claras.

### Conteúdo Programático (Conhecimentos)
1. **Matemática e Estatística Descritiva:**
   - Amostragem (Aleatória, Simples, Sistemática, Estratificada).
   - Escalas de medição (Nominal, Ordinal, Intervalar, Razão).
   - Medidas de Tendência Central (Média, Mediana, Moda, Percentil, Quartil) e Dispersão (Amplitude, Variância, Desvio Padrão).
   - Teste de hipóteses (Qui-Quadrado, Kolmogorov-Smirnov, Shapiro-Wilk, Anderson-Darling) e Inferência Estatística.
2. **Data Science & Aprendizado de Máquina:**
   - Tratamento de dados categóricos e quantitativos.
   - Análise Exploratória de Dados (EDA) e geração de gráficos (Histograma, Boxplot, Dispersão, Séries Temporais).
   - Engenharia de Recursos (Feature Engineering) e imputação de dados.
   - Modelos de Aprendizado Supervisionado (Regressão, Classificação) e Não Supervisionado (Clustering, Detecção de Anomalias).
   - Dashboards analíticos e cálculo do OEE.

---

## Referências Bibliográficas

### Básicas
1. **BOULOS, Paulo.** *Introdução ao cálculo: cálculo integral*. 2. ed. rev. São Paulo: Blucher, 2019. v. 2. E-book (351 p.).
2. **MCKINNEY, Wes.** *Python para análise de dados: tratamento de dados com Pandas, Numpy e IPython*. 3. ed. São Paulo: Novatec, 2023.
3. **MORETTIN, Pedro Alberto; BUSSAB, Wilton de Oliveira.** *Estatística básica*. 8. ed. São Paulo: Saraiva, 2013.

### Complementares
1. **BONORA JÚNIOR, Dorival.** *Estatística básica*. São Paulo: Ícone, 2019. E-book (98 p.).
2. **DEMANA, Franklin D.** *Pré-cálculo*. 2. ed. São Paulo: Pearson, 2013. E-book (476 p.).

---

## Critérios de Avaliação e Composição de Nota

A nota final da disciplina será composta por:
- **Prova Teórico-Prática 1 (P1):** Peso 30% (Semanas 01 a 05)
- **Prova Teórico-Prática 2 (P2):** Peso 30% (Semanas 06 a 10)
- **Relatórios Analíticos e Notebooks Práticos:** Peso 40%

---

## Cronograma Semestral e Calendário de Aulas (20 Semanas)

| Sem. | Tipo | Data N2 | Data N2-S | Foco Teórico / Conteúdo | Atividade / Detalhes |
| :---: | :---: | :---: | :---: | :--- | :--- |
| **01** | Aula | **03/Ago** | **07/Ago** | [Ciência de Dados e Ciclo CRISP-DM](aulas/semana_01.ipynb) | Fases do CRISP-DM e custos assimétricos de negócio. |
| **02** | Aula | **10/Ago** | **14/Ago** | [CRISP-DM Fase 2: Métricas de Avaliação & Distribuições](aulas/semana_02.ipynb) | Acurácia, Precisão, Recall, F1, ROC-AUC, Normal e Poisson. |
| **03** | Aula | **17/Ago** | **21/Ago** | [EDA Avançada (Fase 2) & Data Preparation (Fase 3)](aulas/semana_03.ipynb) | Matplotlib, Seaborn, tendência central, imputação e encoding. |
| **04** | Aula | **24/Ago** | **28/Ago** | [CRISP-DM Fases 4 e 5: Modelagem e Avaliação de ROI](aulas/semana_04.ipynb) | Treinamento com Random Forest, Feature Importance e ROI financeiro. |
| **05** | Aula | **31/Ago** | **04/Set** | [Distribuições de Probabilidade e Testes de Hipóteses](aulas/semana_05.md) | Normal, Poisson, teste Shapiro-Wilk e Qui-Quadrado. |
| **06** | Semana de PII | **22/Ago (Sáb)** | **11/Set** | Orientação e Acompanhamento do Projeto Integrador (PII) | Alinhamento do tratamento e análise estatística dos dados do PII. |
| **07** | Aula | **14/Set** | **18/Set** | [Análise de Séries Temporais Industriais (Time Series)](aulas/semana_07.md) | Tendência, sazonalidade, decomposição e médias móveis (EWMA). |
| **08** | Avaliação | **21/Set** | **25/Set** | **PROVA 1 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 01 a 05. |
| **09** | Semana de PII | **28/Set** | **02/Out** | Consolidação do Projeto Integrador (PII) | Validação do pipeline de tratamento de dados do PII. |
| **10** | Aula | **05/Out** | **09/Out** | [Engenharia de Recursos (Feature Engineering) para Manufatura](aulas/semana_08.md) | Janelas deslizantes, agregados temporais e encodificação. |
| **11** | Semana Tec. | **24/Out (Sáb)** | **16/Out** | Palestras e Workshops da Semana de Tecnologia | Atividades institucionais integradas da Semana Tec. |
| **12** | Aula | **19/Out** | **23/Out** | [Aprendizado de Máquina Supervisionado: Classificação e Regressão](aulas/semana_09.md) | Árvores de Decisão, Random Forest e métricas ROC-AUC/F1-Score. |
| **13** | Aula | **26/Out** | **30/Out** | [Aprendizado Não Supervisionado e Detecção de Anomalias em Sensores](aulas/semana_10.md) | K-Means, DBSCAN e Isolation Forest para telemetria. |
| **14** | Semana de PII | **05/Dez (Sáb)** | **06/Nov** | Orientação e Acompanhamento do Projeto Integrador (PII) | Refinamento dos modelos analíticos do PII. |
| **15** | Aula | **09/Nov** | **13/Nov** | [Dashboards Analíticos Integrados e Indicadores de OEE](aulas/semana_11.md) | Cálculo de OEE e gráficos interativos com Plotly/Dash. |
| **16** | Aula / Revisão | **16/Nov** | **07/Nov (Sáb)** | Consolidação Técnica e Revisão Analítica | Revisão de aprendizado de máquina e preparação para P2. |
| **17** | Avaliação | **23/Nov** | **27/Nov** | **PROVA 2 INDIVIDUAL** & Entrega do Projeto Final | Avaliação individual cobrindo as Semanas 07 a 11 & Entrega do Projeto. |
| **18** | Semana de PII | **30/Nov** | **04/Dez** | Entrega Geral do PII & Fechamento | Devolutiva dos projetos integradores e fechamento de notas. |
| **19** | Recuperação | **07/Dez** | **11/Dez** | Exame de Recuperação Síncrono | Revisão e realização da avaliação de recuperação. |
| **20** | Fechamento | **14/Dez** | **18/Dez** | Conselho de Classe & Fechamento | Divulgação final das médias e encerramento do semestre. |
