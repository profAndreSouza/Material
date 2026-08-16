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

## Cronograma Semestral e Calendário de Aulas

| Sem. | Tipo | Datas | Foco Teórico / Conteúdo | Atividade / Detalhes |
| :---: | :---: | :---: | :--- | :--- |
| **01** | Aula | **03/Ago a 07/Ago** | [Ciência de Dados na Indústria 4.0 e Ciclo CRISP-DM](aulas/semana_01.md) | Fases do CRISP-DM e introdução ao ecossistema Python Data Science. |
| **02** | Aula | **10/Ago a 14/Ago** | [Estatística Descritiva: Medidas de Tendência Central e Dispersão](aulas/semana_02.md) | Média, mediana, variância, desvio padrão e amplitude interquartil. |
| **03** | Aula | **17/Ago a 21/Ago** | [Análise Exploratória de Dados (EDA) com Matplotlib e Seaborn](aulas/semana_03.md) | Histogramas, Boxplots, Scatter plots e matriz de correlação. |
| **04** | Exercício de Fixação | **22/Ago (Sáb)** | Atividade Prática / Exercício de Fixação I | Notebooks de EDA e exploração gráfica em dados fabris. |
| **05** | Aula | **24/Ago a 28/Ago** | [Tratamento de Dados: Imputação, Sanitização e Outliers](aulas/semana_04.md) | Limpeza de nulos, Z-Score, regra do IQR e normalização MinMax/Standard. |
| **06** | Aula | **31/Ago a 04/Set** | [Distribuições de Probabilidade e Testes de Hipóteses](aulas/semana_05.md) | Normal, Poisson, teste Shapiro-Wilk e Qui-Quadrado. |
| **07** | Semana de PII | **08/Set a 11/Set** | Orientação e Acompanhamento do Projeto Integrador (PII) | Alinhamento do tratamento e análise estatística dos dados do PII. |
| **08** | Aula | **14/Set a 18/Set** | [Análise de Séries Temporais Industriais (Time Series)](aulas/semana_07.md) | Tendência, sazonalidade, decomposição e médias móveis (EWMA). |
| **09** | Exercício de Fixação | **19/Set (Sáb)** | Atividade Prática / Exercício de Fixação II | Decomposição de séries temporais de sensores. |
| **10** | Avaliação | **21/Set a 25/Set** | **PROVA 1 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 01 a 05. |
| **11** | Semana de PII | **28/Set a 02/Out** | Consolidação do Projeto Integrador (PII) | Validação do pipeline de tratamento de dados do PII. |
| **12** | Aula | **05/Out a 09/Out** | [Engenharia de Recursos (Feature Engineering) para Manufatura](aulas/semana_08.md) | Janelas deslizantes, agregados temporais e encodificação. |
| **13** | Semana de Tecnologia | **14/Out a 16/Out** | Palestras e Workshops da Semana de Tecnologia | Atividades institucionais integradas da Semana Tec. |
| **14** | Aula | **19/Out a 23/Out** | [Aprendizado de Máquina Supervisionado: Classificação e Regressão](aulas/semana_09.md) | Árvores de Decisão, Random Forest e métricas ROC-AUC/F1-Score. |
| **15** | Exercício de Fixação | **24/Out (Sáb)** | Atividade Prática / Exercício de Fixação III | Treinamento e validação de modelos preditivos no Jupyter. |
| **16** | Aula | **26/Out a 30/Out** | [Aprendizado Não Supervisionado e Detecção de Anomalias](aulas/semana_10.md) | K-Means, DBSCAN e Isolation Forest para telemetria. |
| **17** | Semana de PII | **03/Nov a 06/Nov** | Orientação e Acompanhamento do Projeto Integrador (PII) | Refinamento dos modelos analíticos do PII. |
| **18** | Exercício de Fixação | **07/Nov (Sáb)** | Atividade Prática / Exercício de Fixação IV | Detecção de anomalias em sensores de campo. |
| **19** | Aula | **09/Nov a 13/Nov** | [Dashboards Analíticos Integrados e Indicadores de OEE](aulas/semana_11.md) | Cálculo de OEE e gráficos interativos com Plotly/Dash. |
| **20** | Aula | **16/Nov a 19/Nov** | Consolidação Técnica e Revisão Analítica | Revisão de aprendizado de máquina e preparação para P2. |
| **21** | Avaliação | **23/Nov a 27/Nov** | **PROVA 2 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 07 a 11 & Entrega do Projeto. |
| **22** | Semana de PII | **30/Nov a 04/Dez** | Entrega Geral do PII & Fechamento | Devolutiva dos projetos integradores e fechamento de notas. |
| **23** | Congresso UniSENAI-SP | **05/Dez (Sáb)** | Congresso UniSENAI-SP | Apresentação dos melhores trabalhos no Congresso UniSENAI-SP. |
| **24** | Recuperação | **07/Dez a 11/Dez** | Exame de Recuperação Síncrono | Revisão e realização da avaliação de recuperação. |
| **25** | Fechamento | **14/Dez a 18/Dez** | Conselho de Classe & Fechamento | Divulgação final das médias e encerramento do semestre. |
