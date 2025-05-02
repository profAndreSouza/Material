# Aula 7: Análise de Regressão e Séries Temporais

## Objetivos da Aula

* Compreender os fundamentos da análise de regressão linear simples.
* Identificar padrões em dados temporais e aplicar conceitos de séries temporais.
* Utilizar ferramentas estatísticas para prever valores futuros com base em tendências passadas.
* Explorar visualizações e medidas de ajuste de modelos estatísticos.

---
Aqui está a fusão dos dois conteúdos — a explicação teórica e os exemplos práticos de código — em um único material coeso e organizado:

---

## Regressão Linear

A **regressão linear** é uma das técnicas estatísticas e de aprendizado de máquina mais utilizadas para prever **valores contínuos**, modelando a relação entre uma **variável dependente (Y)** e **uma ou mais variáveis independentes (X)**.

---

## Tipos de Regressão

### Regressão Linear Simples

Modela a relação entre **uma variável independente (X)** e **uma variável dependente (Y)** assumindo uma relação linear:

$$
Y = \beta_0 + \beta_1 X + \varepsilon
$$

* **\$\beta\_0\$**: intercepto (valor de Y quando X = 0)
* **\$\beta\_1\$**: coeficiente angular (quanto Y varia a cada unidade de X)
* **\$\varepsilon\$**: erro aleatório

> O objetivo é minimizar a **soma dos quadrados dos resíduos** (erros entre os valores reais e previstos).

---

### Etapas da Regressão Linear

#### 1. **Exploração dos Dados**

* Visualização com gráficos de dispersão
* Cálculo da correlação (Pearson)

```python
sns.scatterplot(x="Metragem", y="Preço", data=df)
plt.title("Relação entre Metragem e Preço")
```

---

#### 2. **Ajuste do Modelo**

Usa-se o método dos mínimos quadrados (`LinearRegression`):

```python
from sklearn.linear_model import LinearRegression

x = df[['Metragem']]
y = df['Preço']
modelo = LinearRegression()
modelo.fit(x, y)
```

---

#### 3. **Avaliação do Modelo**

* **R²**: mede a proporção da variação de Y explicada por X
* **MAE, MSE, RMSE**: métricas de erro
* **Gráficos de resíduos**: verificam os pressupostos

```python
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

r2 = r2_score(y, df["Predito"])
mae = mean_absolute_error(y, df["Predito"])
rmse = mean_squared_error(y, df["Predito"]) ** 0.5
```

---

### Exemplo 1: Previsão de Preço de Casa com Base na Metragem

```python
np.random.seed(42)
metragem = np.random.normal(100, 20, 100)
preco = metragem * 3000 + np.random.normal(0, 20000, 100)
df = pd.DataFrame({'Metragem': metragem, 'Preço': preco})
```

A regressão retorna uma reta do tipo:

```
Preço = 3000 * Metragem + erro
```

Visualização da reta ajustada:

```python
df["Predito"] = modelo.predict(x)
sns.lineplot(x="Metragem", y="Predito", data=df, color="red", label="Regressão")
```

---

### Exemplo 2: Previsão de Altura com Base na Idade

```python
df = pd.DataFrame({'Idade': [5, 6, 7.5, 8, 9, 11, 10.5, 12], 'Altura': [105, 110, 115, 120, 125, 130, 135, 140]})
modelo.fit(df[['Idade']], df['Altura'])
```

Saída:

```
Altura = 4.31 * Idade + 83.22
```

---

### Pressupostos da Regressão Linear

1. **Linearidade** entre X e Y
2. **Independência dos erros**
3. **Homoscedasticidade** (variância constante)
4. **Normalidade dos resíduos**

---

## Regressão Linear Múltipla

Usa **duas ou mais variáveis independentes**:

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_n X_n + \varepsilon
$$

> Exemplo: prever preço de carro com base em **ano**, **potência**, e **quilometragem**.

### Exemplo com dados fictícios:

```python
dados = {
    'Quilometragem': [15000, 30000, 45000, 60000, 75000, 90000, 105000, 120000],
    'Ano': [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
    'Potencia': [110, 120, 130, 120, 125, 115, 110, 100],
    'Preco': [95000, 87000, 79000, 72000, 65000, 58000, 51000, 44000]
}
df = pd.DataFrame(dados)
```

---

#### Multicolinearidade

* Quando variáveis independentes estão **altamente correlacionadas entre si**
* Pode prejudicar a interpretação e a estabilidade do modelo

**Dica**: use `df.corr()` para verificar correlações antes de treinar o modelo.

---

## Regressão Polinomial

Extensão da linear que permite curvas:

$$
Y = \beta_0 + \beta_1 X + \beta_2 X^2 + \dots + \varepsilon
$$

* Ideal para padrões **não lineares**
* Tome cuidado com **overfitting** (modelo muito complexo)

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