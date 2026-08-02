# Plataforma & Material de Ciência de Dados com Python
## Ecossistema Integrado de Aprendizagem (Smart N1)

[![Python Version](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/)
[![Docker](https://img.shields.io/badge/docker-compose-2496ED.svg)](https://www.docker.com/)
[![Flask](https://img.shields.io/badge/flask-3.0.3-green.svg)](https://flask.palletsprojects.com/)

Este repositório contém a plataforma interativa de ensino e os materiais práticos para a disciplina de **Ciência de Dados** (80 horas / 20 Semanas / 11 Aulas Práticas / 2 Avaliações Regimentais).

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
│   └── aula_11_projeto_capstone.py
└── README.md                  # Documentação padrão do projeto
```

---

## Como Executar o Projeto

### Opção 1: Via Docker Compose (Recomendado)

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

1. **Construir e iniciar os contêineres:**
   ```bash
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

Se preferir rodar sem Docker:

1. **Criar e ativar um ambiente virtual:**
   ```bash
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

## Metodologia de Ensino com a Pasta `exercicios/`

Cada arquivo na pasta `exercicios/` contém a assinatura das funções, docstrings explicativas e a exceção `raise NotImplementedError("A ser implementado em aula com os alunos.")`.

**Workflow durante a aula:**
1. O professor abre a página da aula correspondente no **Caderno de Bordo** para contextualizar a ementa.
2. Abre o arquivo `.py` em seu ambiente de desenvolvimento (VS Code / Jupyter / IDE).
3. Desenvolve ao vivo com os alunos o código da função, explicando os conceitos teóricos de estatística e comandos das bibliotecas `pandas`, `numpy`, `scipy` ou `seaborn`.
4. Executa o bloco `if __name__ == '__main__':` para testar os resultados com os estudantes.

---

## Guia de Aprendizagem: Python, Bibliotecas & Arquitetura Flask

Como os estudantes aprenderão Python em paralelo com os conceitos de Ciência de Dados, este material fornece uma visão clara da sintaxe e dos componentes utilizados no projeto:

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

  # Rota 1: Serve a página HTML principal
  @app.route('/')
  def home():
      return render_template('index.html')

  # Rota 2: API REST que retorna o conteúdo do arquivo Python em JSON
  @app.route('/api/exercicio/<int:aula_num>')
  def get_exercicio(aula_num):
      # Lê o arquivo exercicios/aula_XX.py e retorna como JSON
      return jsonify({'aula': aula_num, 'code': codigo_fonte})
  ```

---

## Ementa da Disciplina

- **Objetivo:** Desenvolver capacidades técnicas e socioemocionais relacionadas a sistemas de manipulação de dados para aplicação em ambientes de produção industrial.
- **Conteúdos:** Matemática e estatística descritiva, amostragem, escalas de medição, medidas de tendência central e dispersão, análise exploratória de dados, visualização gráfica, séries temporais, inferência estatística, testes de hipótese e detecção de anomalias em sensores da fábrica.

---

## Referências Bibliográficas & Mapeamento por Encontro

### Obras de Referência Integradas (Ementa Oficial)

1. **BUSSAB, Wilton O.; MORETTIN, Pedro A.** *Estatística Básica*. 8. ed. São Paulo: Saraiva, 2013.
2. **MCKINNEY, Wes.** *Python para Análise de Dados: Tratamento de dados com Pandas, NumPy e IPython*. 3. ed. São Paulo: Novatec, 2023.
3. **GRUS, Joel.** *Data Science do Zero: Noções Fundamentais com Python*. 2. ed. Rio de Janeiro: Alta Books, 2021.
4. **FÁVERO, Luiz Paulo; BELFIORE, Patrícia.** *Manual de Análise de Dados: Estatística e Modelagem Multivariada com Excel, SPSS, SAS e R / Python*. Rio de Janeiro: Elsevier, 2017.

### Matriz de Mapeamento Bibliográfico por Encontro Prático

| Encontro | Tema Central | Bussab & Morettin | McKinney | Grus | Fávero & Belfiore |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **01** | Introdução à Ciência de Dados, CRISP-DM & Tipos de Dados | Cap. 1 | Cap. 5 | Cap. 1 | Cap. 1 |
| **02** | Qualidade dos Dados, Amostragem & Imputação (MCAR/MAR) | Cap. 1, 11 | Cap. 7 | Cap. 10 | Cap. 2 |
| **03** | Estatística Descritiva, Tendência, Dispersão & Correção de Bessel | Cap. 2 | Cap. 5 | Cap. 4, 5 | Cap. 3 |
| **04** | Distribuição Normal Gaussiana, Assimetria & Curtose | Cap. 6 | Cap. 9 | Cap. 3, 6 | Cap. 3 |
| **05** | Inferência Estatística, TLC & Intervalos de Confiança (SEM) | Cap. 10 | Cap. 7 | Cap. 6, 7 | Cap. 4 |
| **06** | Testes de Hipóteses Formais (Shapiro-Wilk, KS, Qui-Quadrado) | Cap. 12, 14 | Cap. 7, 13 | Cap. 7 | Cap. 5 |
| **07** | Correlação Linear (Pearson) vs Monotônica (Spearman) | Cap. 4 | Cap. 7, 10 | Cap. 5 | Cap. 4 |
| **08** | Análise de Séries Temporais, Decomposição & Média Móvel | Cap. 15 | Cap. 11 | Cap. 10 | Cap. 16 |
| **09** | Pipeline Metodológico de Análise Exploratória (EDA) | Cap. 2, 4 | Cap. 10, 12 | Cap. 10 | Cap. 2, 3 |
| **10** | Storytelling com Dados, KPIs (OEE) & Comunicação Executiva | Cap. 2 | Cap. 9 | Cap. 3 | Cap. 1 |
| **11** | Projeto Capstone Final (Resolução Integrada Industrial) | Cap. 1–15 | Cap. 1–12 | Cap. 1–10 | Cap. 1–16 |
