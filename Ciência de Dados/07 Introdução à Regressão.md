# Aula 7: Análise de Regressão e Séries Temporais

## Objetivos da Aula

* Compreender os fundamentos da análise de regressão linear simples.
* Identificar padrões em dados temporais e aplicar conceitos de séries temporais.
* Utilizar ferramentas estatísticas para prever valores futuros com base em tendências passadas.
* Explorar visualizações e medidas de ajuste de modelos estatísticos.

---

## Introdução

A regressão é uma técnica fundamental na ciência de dados, utilizada para **prever valores numéricos** com base em uma ou mais variáveis. Em TI, isso pode incluir:

* Previsão de tempo de resposta de aplicações
* Estimativa de uso de CPU/memória
* Análise de desempenho de redes

A seguir, exploramos três tipos principais: **regressão linear simples**, **múltipla** e **polinomial**.

---

## 1. Regressão Linear Simples

### Definição

Modela a relação entre **uma variável preditora $x$** e uma **variável resposta $y$** com uma equação linear:

$$
y = a + bx
$$

### Exemplo em TI

**Problema**: prever o tempo de resposta de um servidor com base no número de requisições por segundo.

```python
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

# Simulando dados
np.random.seed(0)
x = np.random.randint(10, 100, 50)
y = 0.5 * x + np.random.normal(0, 5, 50)
df = pd.DataFrame({'requests_per_sec': x, 'response_time_ms': y})

# Treinando modelo
model = LinearRegression()
model.fit(df[['requests_per_sec']], df['response_time_ms'])

# Visualização
sns.regplot(x='requests_per_sec', y='response_time_ms', data=df)
plt.title('Regressão Linear Simples: Requisições vs Tempo de Resposta')
plt.xlabel('Requisições por segundo')
plt.ylabel('Tempo de resposta (ms)')
plt.show()
```

---

## 2. Regressão Linear Múltipla

### Definição

Utiliza **duas ou mais variáveis preditoras** para modelar uma resposta:

$$
y = a + b_1x_1 + b_2x_2 + \dots + b_nx_n
$$

### Exemplo em TI

**Problema**: prever o consumo de CPU (%) com base no número de processos ativos e o uso de memória (MB).

```python
from sklearn.linear_model import LinearRegression
from sklearn.datasets import make_regression

# Simulando dados
np.random.seed(1)
X, y = make_regression(n_samples=100, n_features=2, noise=10)
df = pd.DataFrame(X, columns=['processes', 'memory_usage_MB'])
df['cpu_usage_percent'] = y

# Treinando modelo
model = LinearRegression()
model.fit(df[['processes', 'memory_usage_MB']], df['cpu_usage_percent'])

# Visualização em 2D com variável fixa (slices)
import matplotlib.pyplot as plt

slice_mem = df['memory_usage_MB'].mean()
df_slice = df.copy()
df_slice = df_slice[np.abs(df_slice['memory_usage_MB'] - slice_mem) < 5]

sns.lmplot(x='processes', y='cpu_usage_percent', data=df_slice)
plt.title('Regressão Linear Múltipla (slice da memória)')
plt.xlabel('Número de processos')
plt.ylabel('Consumo de CPU (%)')
plt.show()
```

---

## 3. Regressão Polinomial

### Definição

Modela uma relação **não linear** entre as variáveis por meio de potências de $x$:

$$
y = a + b_1x + b_2x^2 + \dots + b_nx^n
$$

### Exemplo em TI

**Problema**: prever o tempo de execução de um algoritmo com base no tamanho da entrada, onde o crescimento não é linear (por exemplo, $O(n^2)$).

```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Simulando dados com padrão quadrático
x = np.linspace(1, 100, 100)
y = 0.05 * x**2 + np.random.normal(0, 50, 100)
x = x.reshape(-1, 1)

# Ajustando modelo polinomial de grau 2
poly = PolynomialFeatures(degree=2)
x_poly = poly.fit_transform(x)
model = LinearRegression()
model.fit(x_poly, y)
y_pred = model.predict(x_poly)

# Visualização
plt.scatter(x, y, label='Dados reais', alpha=0.6)
plt.plot(x, y_pred, color='red', label='Modelo polinomial')
plt.title('Regressão Polinomial: Tamanho da entrada vs Tempo de execução')
plt.xlabel('Tamanho da entrada (n)')
plt.ylabel('Tempo de execução (ms)')
plt.legend()
plt.show()
```

---

## Comparação

| Tipo            | Ideal para                                                 | Exemplo em TI                           |
| --------------- | ---------------------------------------------------------- | --------------------------------------- |
| Linear Simples  | Uma variável preditora com relação linear                  | Requisições vs Tempo de resposta        |
| Linear Múltipla | Várias variáveis com impacto linear                        | Processos e memória vs Consumo de CPU   |
| Polinomial      | Relações não lineares (crescimento exponencial/quadrático) | Tamanho da entrada vs Tempo de execução |

---


## Projeto Prático

**Tema**: Previsão de vendas com regressão linear e identificação de padrões temporais.

### Parte 1 – Regressão Linear:

* Simular um conjunto de dados com uma variável `vendas` e `gastos com propaganda`.
* Calcular e visualizar a regressão linear.
* Avaliar o modelo com R² e valor-p.

### Parte 2 – Séries Temporais:

* Gerar dados de vendas mensais com tendência e sazonalidade.
* Aplicar médias móveis e identificar padrões.
* Construir gráficos com `matplotlib` e `seaborn` para interpretar visualmente os componentes da série.

---

## Exercícios

1. **Regressão Linear Simples**:
   Com um dataset simulado, modele a relação entre `horas de estudo` e `nota na prova`. Avalie o R² e interprete o coeficiente angular.

2. **Previsão com Séries Temporais**:
   Simule dados de produção mensal de uma fábrica. Utilize médias móveis para suavizar e identificar a tendência.

3. **Desafio**:
   Dado um conjunto de dados reais (ex: temperatura média mensal), aplique técnicas de séries temporais para prever os próximos 6 meses.

---

## Materiais de Estudo Complementares

* [Khan Academy – Regressão Linear](https://pt.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data)
* Capítulo sobre Regressão Linear no livro *Estatística Básica* – Wilton Bussab & Pedro Morettin.