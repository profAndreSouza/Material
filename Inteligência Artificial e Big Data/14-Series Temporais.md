# Contextualização 4 — Como prever a demanda de produção em uma fábrica inteligente?

## 1. O Desafio: Antecipar o Futuro da Produção

Em uma fábrica inteligente, decisões operacionais são orientadas por dados.  
Saber antecipadamente quanto será produzido nas próximas semanas é uma decisão estratégica que impacta diversas áreas: compras, logística, manutenção e alocação de pessoal.

Prever demanda de produção significa entender **padrões históricos** e **variáveis contextuais** (como sazonalidade, eventos de mercado ou disponibilidade de matéria-prima) para agir de forma proativa.  
Essa previsão se apoia em **séries temporais** e em modelos de **aprendizado de máquina**, que permitem estimar o comportamento futuro da produção.


## 2. Séries Temporais e seus Componentes

Uma série temporal é uma sequência de valores registrados em intervalos regulares de tempo.  
No contexto industrial, exemplos incluem:

- Quantidade de produtos fabricados por dia  
- Energia consumida por hora  
- Taxa de defeitos por turno  
- Volume de pedidos semanais  

Essas séries escondem padrões que podem ser explorados matematicamente.

| Componente | Descrição | Exemplo industrial |
|-------------|------------|--------------------|
| Tendência | Movimento de longo prazo, crescente ou decrescente | Crescimento constante de produção ao longo do ano |
| Sazonalidade | Padrões que se repetem em intervalos regulares | Picos de demanda em meses de alta temporada |
| Ciclo | Oscilações de médio ou longo prazo, sem periodicidade fixa | Impactos de variações econômicas |
| Ruído | Variações aleatórias, sem padrão definido | Falhas pontuais de medição ou produção |


## 3. Explorando uma Série Temporal Simulada

A seguir, criaremos uma série temporal fictícia para representar a produção diária de uma fábrica, incorporando tendência, sazonalidade e ruído.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Gerando dados simulados
np.random.seed(42)
dias = pd.date_range(start='2023-01-01', periods=365)
tendencia = np.linspace(100, 300, 365)
sazonalidade = 40 * np.sin(2 * np.pi * dias.dayofyear / 30)
ruido = np.random.normal(0, 10, 365)

producao = tendencia + sazonalidade + ruido
serie = pd.Series(producao, index=dias)

# Visualização
plt.figure(figsize=(12,4))
plt.plot(serie)
plt.title("Simulação de Produção Diária com Tendência e Sazonalidade")
plt.xlabel("Data")
plt.ylabel("Unidades Produzidas")
plt.grid(True)
plt.show()
```

**Interpretação:**
O gráfico resultante mostra uma produção crescente ao longo do tempo, com oscilações cíclicas (sazonalidade) e pequenas variações aleatórias (ruído).
Esse é o tipo de comportamento comum em linhas de produção reais.


## 4. Análise Exploratória e Decomposição da Série

Antes de aplicar qualquer modelo, é importante entender como os componentes (tendência, sazonalidade e ruído) se manifestam nos dados.

```python
from statsmodels.tsa.seasonal import seasonal_decompose

decomposicao = seasonal_decompose(serie, model='additive', period=30)
decomposicao.plot()
plt.show()
```

A decomposição ajuda a visualizar o quanto de variação se deve à tendência de crescimento, à sazonalidade mensal e ao ruído aleatório.
Esse entendimento orienta a escolha do modelo preditivo mais adequado.


## 5. Modelagem Preditiva com ARIMA

O modelo **ARIMA (AutoRegressive Integrated Moving Average)** é uma das abordagens clássicas para prever séries temporais.
Ele combina três conceitos:

1. **AR (AutoRegressivo):** usa os próprios valores passados da série.
2. **I (Integrado):** remove tendências não estacionárias.
3. **MA (Média Móvel):** modela a correlação dos erros.

É um modelo estatístico eficiente para séries lineares e bem comportadas.

```python
from statsmodels.tsa.arima.model import ARIMA

# Criação e ajuste do modelo
modelo = ARIMA(serie, order=(2,1,2))
ajuste = modelo.fit()

# Previsão para os próximos 30 dias
previsao = ajuste.forecast(steps=30)

# Visualização
plt.figure(figsize=(12,4))
plt.plot(serie, label='Histórico')
plt.plot(previsao.index, previsao, label='Previsão', color='red')
plt.title("Previsão de Produção com ARIMA")
plt.xlabel("Data")
plt.ylabel("Unidades Produzidas")
plt.legend()
plt.grid(True)
plt.show()
```

**Análise conceitual:**
O ARIMA busca equilíbrio entre precisão e interpretabilidade. É apropriado quando os padrões de tendência e sazonalidade são estáveis, mas tem limitações em ambientes com múltiplas sazonalidades ou grande volume de dados variáveis.


## 6. Modelagem Preditiva com Prophet

O **Prophet**, desenvolvido pelo Facebook, foi criado para lidar facilmente com **sazonalidades múltiplas** e **efeitos de feriados**.
É amplamente utilizado em aplicações industriais, especialmente quando há períodos de parada de máquinas ou variações operacionais regulares.

```python
from prophet import Prophet

# Preparação dos dados
df = pd.DataFrame({'ds': serie.index, 'y': serie.values})

# Criação e treino do modelo
modelo_prophet = Prophet()
modelo_prophet.fit(df)

# Previsão para os próximos 30 dias
futuro = modelo_prophet.make_future_dataframe(periods=30)
previsao = modelo_prophet.predict(futuro)

# Visualização
modelo_prophet.plot(previsao)
plt.title("Previsão de Produção com Prophet")
plt.show()
```

**Discussão conceitual:**
O Prophet automatiza muitas etapas do processo e permite incorporar eventos específicos (como manutenções ou campanhas de vendas).
É ideal para ambientes industriais com dados parcialmente estruturados e influência de fatores externos.


## 7. Modelagem com Redes Neurais LSTM

Para séries com padrões complexos e múltiplas influências, é possível recorrer a modelos de **redes neurais recorrentes (RNN)**, como a **LSTM (Long Short-Term Memory)**.
As LSTMs são capazes de aprender relações de longo prazo e variações não lineares nos dados — um comportamento típico em processos industriais.

```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.preprocessing import MinMaxScaler

# Escalonamento dos dados
scaler = MinMaxScaler()
dados = scaler.fit_transform(serie.values.reshape(-1, 1))

# Preparação das janelas de tempo
X, y = [], []
for i in range(30, len(dados)):
    X.append(dados[i-30:i])
    y.append(dados[i])

X, y = np.array(X), np.array(y)

# Construção do modelo
modelo_lstm = Sequential([
    LSTM(50, activation='relu', input_shape=(30, 1)),
    Dense(1)
])

modelo_lstm.compile(optimizer='adam', loss='mse')
modelo_lstm.fit(X, y, epochs=20, verbose=0)
```

**Interpretação conceitual:**
O modelo LSTM aprende sequências temporais por meio de células de memória interna.
Embora mais complexo e custoso computacionalmente, é adequado para ambientes com dados em tempo real (IoT/IIoT) e com variações dinâmicas na produção.


## 8. Conexão com a Indústria 4.0

Na Indústria 4.0, os sistemas de produção estão cada vez mais integrados e conectados.
A coleta de dados ocorre em tempo real por meio de sensores (IoT e IIoT), sistemas MES (Manufacturing Execution System) e bancos de dados industriais.

A previsão de demanda torna-se uma peça central dessa engrenagem digital:

* Sensores e dispositivos coletam dados de produção e consumo.
* Sistemas de dados armazenam e consolidam as informações.
* Modelos de IA analisam os dados e geram previsões.
* As previsões orientam decisões automáticas ou assistidas.

Essa integração permite reduzir desperdícios, evitar sobrecarga de máquinas e otimizar a utilização de recursos.


## 9. Interpretação e Avaliação dos Resultados

A precisão numérica de uma previsão é importante, mas deve ser acompanhada de **interpretação crítica**:

* O modelo prevê aumento de demanda: isso requer ajustes na linha de produção?
* Há fatores externos (clima, eventos, economia) que possam invalidar a previsão?
* Qual o custo de errar para mais ou para menos?

Essas perguntas guiam a tomada de decisão baseada em dados, aproximando a engenharia de produção da inteligência artificial aplicada.


## 10. Fechamento

Na etapa final, os grupos devem refletir sobre:

1. Como os dados foram estruturados e compreendidos;
2. Quais modelos foram testados e por que;
3. Que tipo de insight a previsão proporcionou;
4. Como o uso de IA contribui para a eficiência operacional.

Mais importante que atingir a previsão perfeita é **entender o processo analítico e a relação entre dados, modelo e contexto**.


## 11. Resumo Conceitual

| Conceito                 | Aplicação na indústria                                       |
| ------------------------ | ------------------------------------------------------------ |
| Série Temporal           | Análise do comportamento da produção ao longo do tempo       |
| Tendência e Sazonalidade | Identificação de padrões cíclicos e de longo prazo           |
| ARIMA                    | Modelo estatístico para séries lineares e estacionárias      |
| Prophet                  | Modelo automatizado para sazonalidades e eventos específicos |
| LSTM                     | Rede neural para padrões não lineares e dados complexos      |
| IoT / IIoT               | Coleta contínua de dados industriais                         |
| Big Data Industrial      | Base de dados de alta frequência usada na IA                 |
| IA na Produção           | Apoio à decisão e otimização de recursos                     |
