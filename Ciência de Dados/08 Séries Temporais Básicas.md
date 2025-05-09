# Aula 8: Séries Temporais Básicas

## Objetivos da Aula

* Compreender os conceitos fundamentais de séries temporais.
* Identificar padrões como tendência e sazonalidade em dados temporais.
* Aplicar técnicas básicas de análise visual e estatística sobre dados temporais reais.
* Preparar o aluno para análises preditivas e uso de modelos mais complexos.

---

## O que são Séries Temporais?

Uma **série temporal** é uma sequência de observações de uma variável registradas ao longo do tempo, geralmente em intervalos regulares (diários, mensais, anuais, etc). Ao analisar séries temporais, o objetivo é **compreender o comportamento da variável ao longo do tempo** e, muitas vezes, realizar previsões futuras.

---

### Componentes de uma Série Temporal

1. **Tendência (Trend)**

   * Variação de longo prazo que mostra uma **direção geral** (crescente ou decrescente) nos dados.

2. **Sazonalidade (Seasonality)**

   * Flutuações **periódicas e previsíveis** que ocorrem em ciclos regulares, como variações mensais ou sazonais (ex: temperaturas mais altas no verão).

3. **Ciclos (Cycles)**

   * Padrões recorrentes de longo prazo que não têm periodicidade fixa (ex: ciclos econômicos).

4. **Aleatoriedade (Ruído)**

   * Variações imprevisíveis causadas por fatores não sistemáticos.

---

### Visualização e Análise Exploratória

A análise de séries temporais inicia-se com a **visualização gráfica**, geralmente com:

* Gráficos de linha (line plots)
* Médias móveis (moving average) para suavização
* Decomposição da série (trend + seasonality + residual)

---

### Técnicas Básicas

* **Médias Móveis (Moving Averages)**
  Utilizadas para **suavizar ruídos** e destacar tendências. Exemplo: média dos últimos 7 dias.

* **Decomposição de Séries Temporais**
  Separar a série em seus componentes: tendência, sazonalidade e ruído.

---

## Projeto Prático

**Tema:** Análise Histórica da Temperatura de uma Cidade

**Descrição:**
Utilizar uma base de dados reais de temperatura diária (por exemplo, de uma capital brasileira ou do [NOAA](https://www.ncei.noaa.gov/)) para realizar uma análise exploratória da série temporal.

**Etapas:**

1. Importar os dados e tratá-los.
2. Plotar a série temporal bruta (linha do tempo).
3. Aplicar uma média móvel (ex: 30 dias).
4. Identificar tendências visuais.
5. (Opcional) Realizar decomposição da série.

Ferramentas: Python (Pandas, Matplotlib, Seaborn, Statsmodels)

---

## Exercícios

1. Baixe uma base de dados de temperatura (diária ou mensal) de uma cidade brasileira.
2. Plote a série temporal completa com matplotlib/seaborn.
3. Calcule e plote uma média móvel de 7 dias.
4. Decomponha a série usando `seasonal_decompose` do `statsmodels`.
5. Responda:

   * Existe tendência? De que tipo?
   * Há evidência de sazonalidade?
   * Qual a principal variação aleatória observada?

---

## Materiais de Estudo Complementares

* 📘 **Livro:** *Análise de Séries Temporais* – Cryer & Chan (Capítulos 1 e 2)
* 📘 *Forecasting: Principles and Practice* – Hyndman & Athanasopoulos (disponível online)
* 📹 [Curso Básico de Séries Temporais com Python (YouTube)](https://www.youtube.com/watch?v=AScWzFevG5Q)
* 📄 Documentação: [`pandas.Series.rolling`](https://pandas.pydata.org/docs/reference/api/pandas.Series.rolling.html)
* 📄 Documentação: [`statsmodels.tsa.seasonal.seasonal_decompose`](https://www.statsmodels.org/stable/generated/statsmodels.tsa.seasonal.seasonal_decompose.html)
