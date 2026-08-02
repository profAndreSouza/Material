# Plataforma & Material de Ciência de Dados com Python
## Ecossistema Integrado de Aprendizagem (Smart N1)

[![Python Version](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/)
[![Docker](https://img.shields.io/badge/docker-compose-2496ED.svg)](https://www.docker.com/)
[![Flask](https://img.shields.io/badge/flask-3.0.3-green.svg)](https://flask.palletsprojects.com/)

Este repositório contém a plataforma interativa de ensino e os materiais práticos para a disciplina de **Ciência de Dados** (80 horas-aula de 50min / 66h40min relógio / 20 Semanas / 11 Aulas Práticas / 2 Avaliações Regimentais).

No modelo do **Ecossistema Integrado de Aprendizagem**, Ciência de Dados atua de forma conectada com as disciplinas de **Automação Industrial** e **DevOps & Computação em Nuvem**, utilizando como fonte oficial de dados os eventos e a telemetria em tempo real produzidos pela planta fabril **Smart N1**.

---

## Papel no Ecossistema Integrado

```text
┌──────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│ Automação Industrial │ ---> │   Ciência de Dados     │ ---> │ DevOps & Cloud (Nuvem) │
│ (Aquisição & Sensor) │      │ (EDA, Stats & Insights)│      │  (Deploy & Operação)   │
└──────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

- **Automação Industrial**: Captura os sinais de sensores, atuadores, leitores RFID e estados operacionais da Smart N1, publicando eventos em um broker MQTT.
- **Ciência de Dados (Esta Disciplina)**: Consome a telemetria e os datasets industriais gerados (`production.csv`, `telemetry.csv`, `alarms.csv`), realizando Análise Exploratória de Dados (EDA), tratamento de anomalias, inferência estatística, análise de séries temporais e geração de relatórios analíticos/dashboards.
- **DevOps & Computação em Nuvem**: Automatiza a infraestrutura de dados, containeriza o ambiente de análise e publica as APIs e dashboards na nuvem (GCP / Vercel).

---

## Ementa Oficial Completa (Unidade Curricular)

### Descrição
Ao final dessa unidade curricular o estudante será capaz de desenvolver sistemas para manipulação de dados para aplicação em ambientes de produção industrial. Para tanto serão abordados os seguintes conteúdos: Matemática e estatística descritiva; Data Science.

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas à sistemas de manipulação de dados para aplicação em ambientes de produção industrial.

### Capacidades Técnicas
- Transformar dados obtidos através de cálculos matemáticos em informações pertinentes ao processo.
- Extrair informações de dados obtidos para o gerenciamento de processos industriais através de análises estatísticas.
- Processar dados para a geração de relatórios analíticos tendo em vista a visualização da informação.

### Capacidades Socioemocionais
- **Aprendizagem ativa e estratégias de aprendizagem:** Demonstrar postura proativa e atitude inovadora, adaptando-se, com criatividade e flexibilidade, a novos contextos tecnológicos e organizacionais.
- **Ética:** Apresentar comportamento ético na conduta profissional, vivenciando valores, respeitando princípios, praticando a inclusão e justiça social, respeitando diferenças individuais e valorizando o meio ambiente.
- **Pensamento crítico e inovação:** Expressar-se de modo crítico e com base em evidências claras, ponderando diferentes fatos, ideias, opiniões, visões e perspectivas aplicáveis às atividades sob a sua responsabilidade.

### Conteúdo Programático / Conhecimentos
1. **Matemática e estatística descritiva**
   - 1.1. Princípios
   - 1.2. Amostragem (1.2.1. Aleatória, 1.2.2. Aleatória simples, 1.2.3. Sistemática, 1.2.4. Estratificada)
   - 1.3. Escalas de medição (1.3.1. Nominal, 1.3.2. Ordinal, 1.3.3. Intervalar, 1.3.4. Razão)
   - 1.4. Tendência central (1.4.1. Média, 1.4.2. Mediana, 1.4.3. Moda, 1.4.4. Percentil, 1.4.5. Quartil)
   - 1.5. Medidas de dispersão (1.5.1. Amplitude, 1.5.2. Variância, 1.5.3. Desvio padrão)
   - 1.6. Teste de hipóteses (1.6.1. Qui quadrado, 1.6.2. Kolmogorov-Smirnov, 1.6.3. Shapiro-Wilk, 1.6.4. Anderson Darling)
   - 1.7. Inferência (1.7.1. Estatística, 1.7.2. Clássica)
   - 1.8. Análise (1.8.1. De séries temporais, 1.8.2. De correlação e associação)
2. **Data Science**
   - 2.1. Dados categóricos (2.1.1. Visualizando, 2.1.2. Descrevendo)
   - 2.2. Dados Quantitativos (2.2.1. Visualizando, 2.2.2. Descrevendo)
   - 2.3. Associações e Correlações
   - 2.4. Amostragem (2.4.1. Distribuição, 2.4.2. Proporções)
   - 2.5. Geração de Gráficos (2.5.1. Gráfico de linhas, 2.5.2. Gráfico de dispersão, 2.5.3. Histograma, 2.5.4. Boxplot)

### Ambientes Pedagógicos
- Sala de aula.
- Biblioteca.
- Laboratório de Informática.

---

## Referências Bibliográficas Oficiais

### Referências Básicas
1. **BOULOS, Paulo.** *Introdução ao cálculo: cálculo integral*. 2. ed. rev. São Paulo: Blucher, 2019. v. 2. E-book (351 p.).
2. **MCKINNEY, Wes.** *Python para análise de dados: tratamento de dados com Pandas, Numpy e IPython*. 3. ed. São Paulo: Novatec, 2023.
3. **MORETTIN, Pedro Alberto; BUSSAB, Wilton de Oliveira.** *Estatística básica*. 8. ed. São Paulo: Saraiva, 2013.

### Referências Complementares
1. **BONORA JÚNIOR, Dorival.** *Estatística básica*. São Paulo: Ícone, 2019. E-book (98 p.).
2. **DEMANA, Franklin D.** *Pré-cálculo*. 2. ed. São Paulo: Pearson, 2013. E-book (476 p.).
3. **FÁVERO, Luis P.; BELFIORE, Patricia.** *Manual de análise de dados: estatística e modelagem multivariada com Excel, SPSS e Stata*. São Paulo: Elsevier, 2017.
4. **GUILHON, André et al. (org.).** *Jornada Python: uma jornada imersiva na aplicabilidade de uma das mais poderosas linguagens de programação do mundo*. Rio de Janeiro: Brasport, 2022. E-book (552 p.).
5. **GRUS, Joel.** *Data science do zero: noções fundamentais com Python*. 2. ed. Rio de Janeiro: Alta Books, 2021.
6. **MENEZES, Nilo Ney Coutinho.** *Introdução a Programação com Python*. São Paulo: Novatec, 2014.

---

## Matriz de Mapeamento Bibliográfico por Encontro Prático

| Encontro | Tema Central | Conhecimentos da Ementa | Referências Básicas | Referências Complementares |
| :---: | :--- | :--- | :--- | :--- |
| **01** | Introdução à Ciência de Dados, CRISP-DM e Exploração Inicial | 1.1 Princípios; 2.1 Dados Categóricos | McKinney Cap. 5; Morettin & Bussab Cap. 1 | Grus Cap. 1; Menezes Cap. 1-3 |
| **02** | Qualidade dos Dados e Amostragem (Limpeza e Imputação) | 1.2 Amostragem; 1.3 Escalas de Medição; 2.4 Amostragem | Morettin & Bussab Cap. 1, 11; McKinney Cap. 7 | Fávero & Belfiore Cap. 2; Bonora Jr Cap. 1 |
| **03** | Estatística Descritiva (Tendência Central e Dispersão em Telemetria) | 1.4 Tendência Central; 1.5 Medidas de Dispersão | Morettin & Bussab Cap. 2; McKinney Cap. 5 | Grus Cap. 4, 5; Fávero & Belfiore Cap. 3 |
| **04** | Distribuições Estatísticas e Visualização (Normal, Assimetria, Q-Q) | 2.1/2.2 Visualizando e Descrevendo; 2.5 Geração de Gráficos | Morettin & Bussab Cap. 6; McKinney Cap. 9 | Grus Cap. 3, 6; Fávero & Belfiore Cap. 3 |
| **05** | Inferência Estatística e Intervalos de Confiança (SciPy) | 1.7 Inferência Estatística e Clássica | Morettin & Bussab Cap. 10; McKinney Cap. 7 | Grus Cap. 6, 7; Fávero & Belfiore Cap. 4 |
| **06** | Testes de Hipóteses Formais (Shapiro-Wilk, KS, Qui-Quadrado) | 1.6 Teste de Hipóteses (Qui-Quadrado, KS, Shapiro-Wilk, Anderson-Darling) | Morettin & Bussab Cap. 12, 14; McKinney Cap. 7, 13 | Grus Cap. 7; Fávero & Belfiore Cap. 5 |
| **07** | Correlação e Associação entre Variáveis Industriais (Pearson / Spearman) | 1.8.2 Análise de Correlação e Associação; 2.3 Associações | Morettin & Bussab Cap. 4; McKinney Cap. 7, 10 | Grus Cap. 5; Fávero & Belfiore Cap. 4 |
| **08** | Séries Temporais (Tendência, Sazonalidade, Média Móvel de Produção) | 1.8.1 Análise de Séries Temporais | Morettin & Bussab Cap. 15; McKinney Cap. 11 | Fávero & Belfiore Cap. 16; Grus Cap. 10 |
| **09** | Análise Exploratória de Dados (EDA) Pipeline Completo | 2.1 a 2.5 Data Science Completo | McKinney Cap. 10, 12; Morettin & Bussab Cap. 2, 4 | Grus Cap. 10; Guilhon et al. Cap. 4 |
| **10** | Storytelling com Dados, KPIs Industriais (OEE) & Comunicação Executiva | 2.5 Geração de Gráficos e Visualizações | McKinney Cap. 9; Morettin & Bussab Cap. 2 | Grus Cap. 3; Guilhon et al. Cap. 5 |
| **11** | Projeto Capstone Final (Análise de Dataset Inédito da Planta) | 1.1 a 2.5 Integração de todos os Conhecimentos | Morettin & Bussab Cap. 1-15; McKinney Cap. 1-12 | Grus Cap. 1-10; Fávero & Belfiore Cap. 1-16 |

---

## Cronograma Unificado (20 Semanas)

> **Nota sobre os Sábados de Reposição:** Os alunos não possuem aulas presenciais aos sábados. As semanas/datas de reposição (22/Ago, 19/Set, 07/Nov, 05/Dez) indicadas na tabela referem-se a **Exercícios para Casa / Atividades Assíncronas (Estudo Dirigido)** disponibilizados no repositório.

| Sem. | Categoria | Conteúdo / Atividade Integrada | Turma Segunda (N2) | Turma Sexta (N2-S) | Atividade EAD / Casa (Sábados de Reposição) |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **01** | **Encontro 01** | Introdução à Ciência de Dados, CRISP-DM e Exploração Inicial (Smart N1) | 03/Ago | 07/Ago | — |
| **02** | **Encontro 02** | Qualidade dos Dados e Amostragem (Limpeza e Imputação) | 10/Ago | 14/Ago | — |
| **03** | **Encontro 03** | Estatística Descritiva (Tendência Central e Dispersão em Telemetria) | 17/Ago | 21/Ago | — |
| **04** | **Encontro 04** | Distribuições Estatísticas e Visualização (Normal, Assimetria, Q-Q) | 24/Ago | 28/Ago | Exercício para Casa 1 *(Ref. Sáb 22/Ago)* |
| **05** | **Encontro 05** | Inferência Estatística e Intervalos de Confiança (SciPy) | 31/Ago | 04/Set | — |
| **06** | **PII 1** | Semana de PII 1 — Acompanhamento da Arquitetura de Dados | 08/Set | 11/Set | — |
| **07** | **Encontro 06** | Testes de Hipóteses (Shapiro-Wilk, KS, Qui-Quadrado em Sensores) | 14/Set | 18/Set | Exercício para Casa 2 *(Ref. Sáb 19/Set)* |
| **08** | **Avaliação N1** | **Primeira Avaliação Regimental (N1) — Teórico-Prática** | **21/Set** | **25/Set** | — |
| **09** | **PII 2** | Semana de PII 2 — Avaliação da 2ª Etapa do PII (Modelagem) | 28/Set | 02/Out | — |
| **10** | **Encontro 07** | Correlação e Associação entre Variáveis Industriais (Pearson / Spearman) | 05/Out | 09/Out | — |
| **11** | **Evento** | Semana de Tecnologia (Palestras e Workshops) | 14–16/Out | 16/Out | — |
| **12** | **Encontro 08** | Séries Temporais (Tendência, Sazonalidade, Média Móvel de Produção) | 19/Out | 23/Out | — |
| **13** | **Encontro 09** | Análise Exploratória de Dados (EDA) Pipeline Completo | 26/Out | 30/Out | — |
| **14** | **PII 3** | Semana de PII 3 — Avaliação da 3ª Etapa do PII (Integração) | 03/Nov | 06/Nov | Exercício para Casa 3 *(Ref. Sáb 07/Nov)* |
| **15** | **Encontro 10** | Storytelling com Dados, KPIs Industriais (OEE) & Comunicação Executiva | 09/Nov | 13/Nov | — |
| **16** | **Encontro 11** | Projeto Capstone Final (Análise de Dataset Inédito da Planta) | 16/Nov | 20/Nov | — |
| **17** | **Avaliação N2** | **Segunda Avaliação Regimental (N2) — Teórico-Prática** | **23/Nov** | **27/Nov** | — |
| **18** | **PII 4** | Semana de PII 4 — Entrega Final e Banca do PII | 30/Nov | 04/Dez | Exercício para Casa 4 *(Ref. Sáb 05/Dez)* |
| **19** | **Recuperação**| Semana de Recuperação (Avaliações de Recuperação) | 07/Dez | 11/Dez | — |
| **20** | **Fechamento** | Fechamento do Semestre e Lançamento de Notas | 14/Dez | 18/Dez | — |

---

## Estrutura do Repositório

```text
├── app.py                     # Servidor Web Flask (Caderno de Bordo)
├── Dockerfile                 # Configuração do contêiner Docker da aplicação
├── docker-compose.yml         # Orquestrador de serviços Docker
├── requirements.txt           # Dependências Python (Pandas, NumPy, SciPy, Matplotlib, Seaborn)
├── gerar_datasets.py          # Script de geração dos dados sintéticos da Smart N1
├── templates/
│   └── index.html             # Layout responsivo do Caderno de Bordo
├── exercicios/                # Pasta com os 11 arquivos Python de exercícios (stubs)
│   ├── aula_01_introducao.py
│   ├── aula_02_amostragem_limpeza.py
│   ├── aula_03_estatistica_descritiva.py
│   ├── aula_04_distribuicoes_visualizacao.py
│   ├── aula_05_inferencia_estatistica.py
│   ├── aula_06_testes_hipoteses.py
│   ├── aula_07_correlacao_assoc.py
│   ├── aula_08_series_temporais.py
│   ├── aula_09_eda_completa.py
│   ├── aula_10_storytelling_dashboards.py
├── factoryhub/                # Aplicação principal (Flask, Exercícios, Scripts)
└── README.md                  # Documentação padrão do projeto
```

---

## Como Executar o Projeto (FactoryHub)

Toda a plataforma interativa e os scripts de exercícios estão integrados na aplicação autônoma **FactoryHub** (localizada na pasta `factoryhub/`).

### Opção 1: Via Docker Compose (Recomendado)

1. **Navegar para a pasta da aplicação e iniciar os contêineres:**
   ```bash
   cd factoryhub
   docker compose up --build -d
   ```

2. **Acessar a aplicação no navegador:**
   Navegue até [http://localhost:5000](http://localhost:5000)

3. **Para encerrar a aplicação:**
   ```bash
   docker compose down
   ```

---

### Opção 2: Execução Local com Python

1. **Navegar até a pasta factoryhub e ativar o ambiente virtual:**
   ```bash
   cd factoryhub
   python -m venv venv
   # No Windows (PowerShell):
   .\venv\Scripts\Activate.ps1
   # No Linux/macOS:
   source venv/bin/activate
   ```

2. **Instalar as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Gerar os datasets industriais da Smart N1:**
   ```bash
   python gerar_datasets.py
   ```

4. **Iniciar a aplicação Flask:**
   ```bash
   python app.py
   ```

5. Acessar em [http://localhost:5000](http://localhost:5000).

---

## Metodologia de Ensino com a Pasta `exercicios/`

Cada arquivo na pasta `exercicios/` contém a assinatura das funções, docstrings explicativas e a exceção `raise NotImplementedError("A ser implementado em aula com os alunos.")`.

**Workflow durante a aula:**
1. O professor abre a página da aula correspondente no **Caderno de Bordo** para contextualizar a ementa.
2. Abre o arquivo `.py` em seu ambiente de desenvolvimento (VS Code / Jupyter / IDE).
3. Desenvolve ao vivo com os alunos o código da função, explicando os conceitos teóricos de estatística e comandos das bibliotecas `pandas`, `numpy`, `scipy` ou `seaborn`.
4. Executa o bloco `if __name__ == '__main__':` para testar os resultados com os estudantes.

---

## Guia de Aprendizagem: Python, Bibliotecas & Arquitetura Flask

### 1. Sintaxe Básica de Python em Sala de Aula
- **Declaração de Funções e Type Hints:**
  ```python
  def calcular_media(amostra: list) -> float:
      """Calcula a média aritmética simples de uma lista de valores."""
      return sum(amostra) / len(amostra)
  ```
- **Stubs e `raise NotImplementedError`:**
  Sinaliza aos alunos que o método deve ser preenchido durante o encontro prático:
  ```python
  def tratar_dados(df):
      raise NotImplementedError("A ser implementado em aula com os alunos.")
  ```
- **Bloco de Testes `if __name__ == '__main__':`:**
  Garante que o arquivo possa ser testado de forma autônoma sem rodar código indesejado quando importado por outro script:
  ```python
  if __name__ == '__main__':
      print("Executando testes da aula...")
  ```

---

### 2. Ecossistema de Ciência de Dados em Python

- **NumPy (`import numpy as np`)**:
  - Manipulação de arrays multidimensionais e operações vetoriais rápidas.
  - Funções: `np.mean()`, `np.std()`, `np.var()`, `np.quantile()`.
- **Pandas (`import pandas as pd`)**:
  - Estruturas de dados **DataFrame** (tabelas) e **Series** (colunas).
  - Comandos fundamentais: `pd.read_csv()`, `df.describe()`, `df.groupby()`, `df.sample()`, `pd.crosstab()`.
- **Matplotlib & Seaborn (`import matplotlib.pyplot as plt`, `import seaborn as sns`)**:
  - Construção de gráficos analíticos para relatórios de engenharia/processos.
  - Gráficos: `sns.histplot()`, `sns.boxplot()`, `sns.scatterplot()`, `sns.heatmap()`.
- **SciPy (`from scipy import stats`)**:
  - Módulo estatístico para testes formais: `stats.chi2_contingency()`, `stats.shapiro()`, `stats.kstest()`.

---

### 3. Entendendo a Arquitetura Web com Flask (`app.py`)

A plataforma web do curso utiliza o **Flask** para servir o conteúdo estático e fornecer APIs REST para visualização dos exercícios:

- **O que é o Flask?**
  Um micro-framework web em Python que mapeia URLs (endereços) para funções Python.
- **Servidor Flask (`app.py`):**
  ```python
  from flask import Flask, render_template, jsonify

  app = Flask(__name__)

  @app.route('/')
  def home():
      return render_template('index.html')

  @app.route('/api/exercicio/<int:aula_num>')
  def get_exercicio(aula_num):
      return jsonify({'aula': aula_num, 'code': codigo_fonte})
  ```
