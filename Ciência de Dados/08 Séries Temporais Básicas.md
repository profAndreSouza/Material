# Aula 8: Séries Temporais Básicas

## Objetivos da Aula

* Compreender os conceitos fundamentais de séries temporais.
* Identificar padrões como tendência e sazonalidade em dados temporais.
* Aplicar técnicas básicas de análise visual e estatística sobre dados temporais reais.
* Preparar o aluno para análises preditivas e uso de modelos mais complexos.

---

## O que são Séries Temporais?

Uma **série temporal** é uma coleção de observações **ordenadas no tempo**. O tempo é a principal dimensão que diferencia este tipo de dado dos dados tabulares tradicionais. As análises temporais são amplamente usadas em meteorologia, finanças, economia, saúde, entre outros.

**Objetivos principais ao trabalhar com séries temporais:**

* **Entender padrões e estruturas** nos dados.
* **Modelar e prever valores futuros** com base no histórico.
* **Detectar anomalias ou mudanças de comportamento** ao longo do tempo.

---

## Componentes de uma Série Temporal

### 1. Tendência (Trend)

A **tendência** representa o **movimento de longo prazo** na série. Pode indicar crescimento, declínio ou estabilidade.

> Exemplo: A temperatura média anual de uma cidade pode mostrar uma tendência de aumento ao longo de décadas devido ao aquecimento global.

**Exemplo prático (Colab): Detectando tendência com média móvel**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Criando uma série temporal com tendência crescente
np.random.seed(0)
dias = pd.date_range(start='2022-01-01', periods=100)
tendencia = np.linspace(20, 30, 100)
ruido = np.random.normal(0, 1, 100)
serie = tendencia + ruido

df = pd.DataFrame({'Data': dias, 'Temperatura': serie})
df.set_index('Data', inplace=True)

# Média móvel para suavizar a tendência
df['MediaMovel_7'] = df['Temperatura'].rolling(window=7).mean()

# Plotando
plt.figure(figsize=(10,5))
plt.plot(df['Temperatura'], label='Temperatura Diária', alpha=0.5)
plt.plot(df['MediaMovel_7'], label='Média Móvel (7 dias)', color='red')
plt.title('Tendência com Média Móvel')
plt.legend()
plt.show()
```

---

### 2. Sazonalidade (Seasonality)

A **sazonalidade** é um dos componentes fundamentais de uma série temporal e representa **padrões que se repetem em intervalos regulares e previsíveis**, como dias, meses ou anos. Esses padrões estão geralmente associados a **fatores externos recorrentes**, como clima, calendário, comportamento de consumo ou eventos periódicos.

#### Características principais:

* **Periodicidade fixa**: A sazonalidade ocorre em ciclos regulares, como:

  * **Diária**: variação de temperatura ao longo do dia.
  * **Semanal**: fluxo de clientes maior aos finais de semana.
  * **Mensal ou trimestral**: aumento de vendas em determinados meses.
  * **Anual**: mudanças de temperatura conforme estações do ano.

* **Previsível**: Ao contrário do ruído aleatório, a sazonalidade pode ser **antecipada e modelada**, pois segue padrões históricos.

* **Amplitude**: A intensidade da variação sazonal pode ser constante (sazonalidade aditiva) ou proporcional ao valor da série (sazonalidade multiplicativa).

---

#### Exemplos práticos de sazonalidade:

| Situação                                | Comportamento sazonal esperado                               |
| --------------------------------------- | ------------------------------------------------------------ |
| Vendas de sorvete                       | Aumentam no verão                                            |
| Contas de energia elétrica              | Aumentam no inverno (aquecimento) ou verão (ar-condicionado) |
| Frequência escolar                      | Diminui durante férias escolares                             |
| Tráfego em sites de comércio eletrônico | Aumenta em datas como Black Friday e Natal                   |

---

#### Identificando sazonalidade:

A sazonalidade pode ser identificada por meio de:

* **Gráficos de linha** ao longo do tempo.
* **Decomposição de séries temporais**, que separa tendência, sazonalidade e ruído.
* **Autocorrelação (ACF)**, que revela repetição de padrões em intervalos regulares.


> Exemplo: O aumento das vendas de ventiladores durante o verão.

**Exemplo prático (Colab): Simulação de sazonalidade anual**

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Simulando dados
dias = pd.date_range(start='2022-01-01', periods=365)

# Série com sazonalidade
sazonalidade = 10 + 5 * np.sin(2 * np.pi * dias.dayofyear / 365)
ruido_com = np.random.normal(0, 0.8, 365)
serie_com_sazonalidade = sazonalidade + ruido_com

# Série sem sazonalidade (apenas tendência linear + ruído)
tendencia = np.linspace(10, 15, 365)
ruido_sem = np.random.normal(0, 0.8, 365)
serie_sem_sazonalidade = tendencia + ruido_sem

# Criando DataFrame
df = pd.DataFrame({
    'Data': dias,
    'Com Sazonalidade': serie_com_sazonalidade,
    'Sem Sazonalidade': serie_sem_sazonalidade
}).set_index('Data')

# Plotando as séries separadas lado a lado
fig, axes = plt.subplots(1, 2, figsize=(14, 6))

# Série com sazonalidade
axes[0].plot(df['Com Sazonalidade'], color='blue')
axes[0].set_title('Série com Sazonalidade')
axes[0].set_xlabel('Data')
axes[0].set_ylabel('Valor')
axes[0].grid(True)

# Série sem sazonalidade
axes[1].plot(df['Sem Sazonalidade'], color='orange')
axes[1].set_title('Série sem Sazonalidade')
axes[1].set_xlabel('Data')
axes[1].set_ylabel('Valor')
axes[1].grid(True)

plt.tight_layout()
plt.show()
```

---

### 3. Ciclos (Cycles)

Ciclos são **flutuações de longo prazo**, que **não têm periodicidade fixa** como a sazonalidade. Podem ser causados por fatores econômicos, políticos ou sociais.

> Exemplo: Ciclos de expansão e recessão na economia.

**Exemplo prático (Colab): Adicionando ciclos à série**

```python
# Simulando ciclos com função senoidal de baixa frequência
ciclo = 3 * np.sin(2 * np.pi * dias[:100].dayofyear / 365 * 0.25)  
serie_ciclo = tendencia + ciclo + ruido[:100]

df = pd.DataFrame({'Data': dias[:100], 'Valor': serie_ciclo})
df.set_index('Data', inplace=True)

# Plotando
plt.figure(figsize=(10,4))
plt.plot(df['Valor'], label='Série com Ciclo')
plt.title('Série com Ciclo de Longo Prazo Simulado')
plt.legend()
plt.show()
```

---

### 4. Aleatoriedade (Ruído)

O **ruído** representa variações imprevisíveis, que **não estão associadas a nenhum padrão sistemático**. São os resíduos ou erros aleatórios da série.

> Exemplo: Uma queda inesperada de temperatura devido a um fenômeno climático atípico.

**Exemplo prático (Colab): Ruído puro**

```python
# Série com apenas ruído
ruido = np.random.normal(0, 1, 100)
dias = pd.date_range(start='2022-01-01', periods=100)
df = pd.DataFrame({'Data': dias, 'Ruido': ruido})
df.set_index('Data', inplace=True)

plt.figure(figsize=(10,3))
plt.plot(df['Ruido'], label='Ruído Aleatório')
plt.title('Série com Ruído Aleatório')
plt.legend()
plt.show()
```

---

## Visualização e Análise Exploratória

Analisar séries temporais **visualmente** é o primeiro passo para entender o comportamento da variável ao longo do tempo. Técnicas gráficas ajudam a detectar **tendências**, **sazonalidades**, **anomalias** e **mudanças de padrão**.

---

### 1. Gráficos de Linha (Line Plots)

São o tipo mais comum e útil para séries temporais. Mostram claramente a variação dos dados ao longo do tempo.

> Exemplo: Visualizar a série de temperatura diária de uma cidade.

**Exemplo prático (Colab): Gráfico de linha**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Simulação de série temporal
np.random.seed(0)
dias = pd.date_range(start='2023-01-01', periods=180)
serie = 25 + 5 * np.sin(2 * np.pi * dias.dayofyear / 365 * 4) + np.random.normal(0, 1, 180)

df = pd.DataFrame({'Data': dias, 'Temperatura': serie})
df.set_index('Data', inplace=True)

# Gráfico de linha
plt.figure(figsize=(12,4))
plt.plot(df['Temperatura'], label='Temperatura')
plt.title('Gráfico de Linha - Série Temporal')
plt.xlabel('Data')
plt.ylabel('Valor')
plt.grid(True)
plt.legend()
plt.show()
```

---

### 2. Médias Móveis (Moving Averages)

As **médias móveis** suavizam a série, permitindo identificar tendências de forma mais clara, removendo oscilações de curto prazo.

> Exemplo: Usar uma média móvel de 7 dias para observar a tendência semanal.

**Exemplo prático (Colab): Aplicando média móvel**

```python
# Adicionando uma média móvel de 7 dias
df['MM_7'] = df['Temperatura'].rolling(window=7).mean()

# Plotando série original e média móvel
plt.figure(figsize=(12,4))
plt.plot(df['Temperatura'], alpha=0.5, label='Original')
plt.plot(df['MM_7'], color='red', label='Média Móvel 7 dias')
plt.title('Série com Média Móvel')
plt.xlabel('Data')
plt.ylabel('Valor')
plt.legend()
plt.grid(True)
plt.show()
```

---

### 3. Decomposição da Série Temporal

A decomposição permite separar a série em três componentes:

* **Tendência (Trend)**
* **Sazonalidade (Seasonality)**
* **Resíduo (Residual)**

> Isso facilita a compreensão de como cada fator contribui para a variação total da série.

**Exemplo prático (Colab): Decomposição com statsmodels**

```python
from statsmodels.tsa.seasonal import seasonal_decompose

# Usando decomposição aditiva (ideal para dados com somas de componentes)
resultado = seasonal_decompose(df['Temperatura'], model='additive', period=30)

# Plotando os componentes
resultado.plot()
plt.suptitle("Decomposição da Série Temporal", fontsize=14)
plt.tight_layout()
plt.show()
```

---

## Técnicas Básicas

As técnicas básicas de séries temporais são ferramentas simples, porém poderosas, para **compreender e visualizar padrões ocultos** nos dados. Elas são frequentemente aplicadas na etapa exploratória para ajudar a formular modelos de previsão mais sofisticados.

---

### 1. Médias Móveis (Moving Averages)

A **média móvel** calcula a média de um número fixo de observações passadas para cada ponto da série. Ela é usada para:

* **Reduzir o ruído aleatório**
* **Evidenciar a tendência de longo prazo**
* **Detectar mudanças no comportamento da série**

#### Fórmula (média móvel simples):

$$
MA_t = \frac{1}{k} \sum_{i=0}^{k-1} y_{t-i}
$$

onde $k$ é a janela (número de períodos) e $y_t$ é o valor observado no tempo $t$.

> Exemplo: média móvel de 7 dias em uma série de temperaturas.

**Exemplo prático (Colab): Aplicando Média Móvel**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Série simulada
np.random.seed(42)
datas = pd.date_range(start='2023-01-01', periods=90)
valores = 20 + 3 * np.sin(2 * np.pi * datas.dayofyear / 365 * 4) + np.random.normal(0, 1, 90)
serie = pd.DataFrame({'Data': datas, 'Temperatura': valores})
serie.set_index('Data', inplace=True)

# Média móvel de 7 dias
serie['MM_7'] = serie['Temperatura'].rolling(window=7).mean()

# Gráfico
plt.figure(figsize=(12,4))
plt.plot(serie['Temperatura'], label='Original', alpha=0.6)
plt.plot(serie['MM_7'], label='Média Móvel (7 dias)', color='orange')
plt.title('Aplicação da Média Móvel')
plt.xlabel('Data')
plt.ylabel('Temperatura')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()
```

---

### 2. Decomposição de Séries Temporais

A **decomposição** permite quebrar uma série temporal em três componentes:

* **Tendência (Trend)**: direção geral da série (ex: crescimento ou queda)
* **Sazonalidade (Seasonality)**: padrões recorrentes em intervalos regulares
* **Ruído (Residual)**: flutuações não explicadas por tendência ou sazonalidade

Existem dois tipos comuns de decomposição:

* **Aditiva**: quando a variação sazonal é constante ao longo do tempo.
* **Multiplicativa**: quando a variação sazonal cresce com o nível da série.

> A decomposição facilita a análise individual dos componentes.

**Exemplo prático (Colab): Decomposição Aditiva com `statsmodels`**

```python
from statsmodels.tsa.seasonal import seasonal_decompose

# Decomposição aditiva (assumindo ciclo mensal)
resultado = seasonal_decompose(serie['Temperatura'], model='additive', period=30)

# Plotando os componentes
resultado.plot()
plt.suptitle("Decomposição da Série Temporal", fontsize=14)
plt.tight_layout()
plt.show()
```

---

## Projeto Prático

### Tema: Análise Histórica da Temperatura de uma Cidade

### Descrição:

Neste projeto, o aluno realizará uma análise exploratória de uma **série temporal real** utilizando dados de **temperatura diária**. A finalidade é aplicar os conceitos aprendidos sobre séries temporais em dados do mundo real, como variações térmicas, tendências e padrões sazonais.

### Etapas:

1. **Importar os dados e tratá-los**: carregar o arquivo CSV contendo as temperaturas, filtrar colunas úteis e converter datas.
2. **Plotar a série temporal bruta**: gerar um gráfico de linha para visualizar a variação de temperatura ao longo do tempo.
3. **Aplicar uma média móvel (ex: 30 dias)**: suavizar a curva para evidenciar padrões.
4. **Identificar tendências visuais**: reconhecer se a temperatura tem aumentado/diminuído ao longo do tempo.
5. **(Opcional) Decomposição da série**: separar os componentes de tendência, sazonalidade e ruído.

### Ferramentas:

Python, com bibliotecas:

* `pandas` (manipulação de dados)
* `matplotlib`, `seaborn` (visualização)
* `statsmodels` (decomposição)

---

## Script para Carregamento do Dataset (NOAA ou CSV local)

### Exemplo 1: Carregando CSV local (base comum para cidade brasileira)

```python
import pandas as pd

# Caminho do arquivo (você pode usar upload no Colab ou apontar para seu Drive)
caminho_csv = 'temperatura_sp_diario.csv'

# Carregando o dataset
df = pd.read_csv(caminho_csv)

# Exibindo as primeiras linhas
df.head()
```

### Exemplo 2: Dataset NOAA formatado (GHCN-Daily)

```python
import pandas as pd

# Dataset: Exemplo formatado do NOAA (pré-processado com temperaturas mínimas/máximas/medias)
# Link alternativo do Kaggle ou CSV próprio já limpo
df = pd.read_csv('https://raw.githubusercontent.com/datasets/global-temp/master/data/monthly.csv')

# Pré-visualização
df.head()
```

### Pré-tratamento sugerido

```python
# Converter a coluna de data
df['Data'] = pd.to_datetime(df['Date'])

# Filtrar apenas o período recente, se necessário
df = df[df['Data'] >= '2000-01-01']

# Renomear para facilitar
df.rename(columns={'Mean': 'Temperatura'}, inplace=True)

# Resetar índice e verificar
df = df[['Data', 'Temperatura']]
df.head()
```

---

## Exercícios

1. **Baixe uma base de dados de temperatura** (diária ou mensal) de uma cidade brasileira.
   Você pode usar:

   * Um **CSV local** com colunas `Data` e `Temperatura`.
   * Um dataset público (exemplo: [NOAA GHCN](https://www.ncei.noaa.gov/) ou o repositório [datasets/global-temp](https://github.com/datasets/global-temp)).

---

### Dataset global (temperatura média mensal)

```python
import pandas as pd

# Dataset global com temperatura média mensal (°C)
url = 'https://raw.githubusercontent.com/datasets/global-temp/master/data/monthly.csv'
df = pd.read_csv(url)

# Visualizar as primeiras linhas
df.head()

# Converter a coluna de data para datetime
df['Data'] = pd.to_datetime(df['Date'] if 'Date' in df.columns else df['Data'])

# Renomear coluna de temperatura (se necessário)
if 'Mean' in df.columns:
    df.rename(columns={'Mean': 'Temperatura'}, inplace=True)

# Manter apenas as colunas principais
df = df[['Data', 'Temperatura']]

# Ordenar cronologicamente
df = df.sort_values('Data')

# Exibir os dados tratados
df.head()
```

---

### 2. **Plote a série temporal completa com matplotlib/seaborn**

```python
import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(12, 5))
sns.lineplot(data=df, x='Data', y='Temperatura')
plt.title('Série Temporal de Temperatura')
plt.xlabel('Data')
plt.ylabel('Temperatura (°C)')
plt.grid(True)
plt.tight_layout()
plt.show()
```

---

### 3. **Calcule e plote uma média móvel de 7 dias (ou 3 meses)**

```python
df['Media_Movel'] = df['Temperatura'].rolling(window=7).mean()

plt.figure(figsize=(12, 5))
sns.lineplot(data=df, x='Data', y='Temperatura', label='Original')
sns.lineplot(data=df, x='Data', y='Media_Movel', label='Média Móvel (7)')
plt.title('Temperatura com Média Móvel')
plt.xlabel('Data')
plt.ylabel('Temperatura (°C)')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()
```

---

### 4. **Decomponha a série com `seasonal_decompose`**

```python
from statsmodels.tsa.seasonal import seasonal_decompose

# A série precisa de índice datetime e frequência definida
df.set_index('Data', inplace=True)
df = df.asfreq('D' if df.index.inferred_freq is None else df.index.inferred_freq)

# Decomposição (aditiva ou multiplicativa)
decomposicao = seasonal_decompose(df['Temperatura'], model='additive', period=30)
decomposicao.plot()
plt.suptitle('Decomposição da Série Temporal', fontsize=16)
plt.tight_layout()
plt.show()
```

---

### 5. **Responda:**

* Existe **tendência**? De que tipo (crescente ou decrescente)?
* Há **evidência de sazonalidade** (ciclos regulares)?
* Qual a principal **variação aleatória** (ruído)? Há outliers ou eventos extremos?


---

## Materiais de Estudo Complementares

* **Livro:** *Análise de Séries Temporais* – Cryer & Chan (Capítulos 1 e 2)
* *Forecasting: Principles and Practice* – Hyndman & Athanasopoulos (disponível online)
* Documentação: [`pandas.Series.rolling`](https://pandas.pydata.org/docs/reference/api/pandas.Series.rolling.html)
* Documentação: [`statsmodels.tsa.seasonal.seasonal_decompose`](https://www.statsmodels.org/stable/generated/statsmodels.tsa.seasonal.seasonal_decompose.html)
