# Detecção de Anomalias em Dados Reais de Rede com Inteligência Artificial


Uma empresa de tecnologia deseja desenvolver um sistema inteligente para identificar **comportamentos anômalos** em sua rede corporativa, como tráfego suspeito, acessos irregulares e possíveis falhas de segurança.
O desafio é **aplicar técnicas de Inteligência Artificial (IA)** para detectar automaticamente esses comportamentos fora do padrão, reduzindo riscos e tempo de resposta.


## Contexto

Em redes corporativas modernas, **bilhões de pacotes** trafegam diariamente. Detectar manualmente atividades suspeitas é inviável.
A detecção automatizada de anomalias é fundamental, pois permite:

  * **Prevenir ataques cibernéticos** (ex: DDoS, varredura de portas, login irregular)
  * **Evitar fraudes** em sistemas financeiros
  * **Identificar falhas** antes que causem interrupções
  * **Monitorar desempenho** de infraestrutura em tempo real

Esses sistemas são cruciais em **operações de segurança (SOC)** e no **monitoramento de redes IoT e corporativas**.


## Teoria

### O que é uma Anomalia?

Uma **anomalia** é um dado, evento ou comportamento que **se desvia significativamente do padrão normal esperado**. Em IA, chamamos esse processo de **Anomaly Detection** ou **Outlier Detection**.

> **Diferença entre Outlier e Anomalia:** Um **outlier** é uma observação estatística discrepante. Uma **anomalia** é um outlier *contextualizado* que **possui significado real** no sistema (falha, erro ou ataque). Toda anomalia é um outlier, mas nem todo outlier é uma anomalia.

#### Exemplos:

  * Um **pico repentino de acessos** a um mesmo IP de forma sequencial (pode ser varredura de porta).
  * Um **login fora do horário habitual** de um colaborador seguido de um download massivo de dados.

### Tipos de Abordagens

| Tipo | Descrição | Exemplo |
| :--- | :--- | :--- |
| **Estatística** | Baseia-se em médias, desvios padrão ou distribuições de probabilidade. | Dados acima de $3\sigma$ (três desvios padrão) da média são considerados outliers. |
| **Supervisionada** | Exige dados rotulados (*normal/anômalo*). Mais eficiente para ataques **conhecidos**. | Classificadores binários (Random Forest, Árvores de Decisão). |
| **Não Supervisionada** | Aprende padrões sem rótulos e identifica desvios. Ideal para **ataques desconhecidos**. | Isolation Forest, One-Class SVM, Autoencoder. |

### Técnicas de IA para Detecção de Anomalias

| Algoritmo | Tipo | Vantagens | Limitações |
| :--- | :--- | :--- | :--- |
| **Isolation Forest** | Não supervisionado | **Rápido**, escalável, bom em isolar anomalias em datasets grandes. | Menos eficaz em dados altamente correlacionados. |
| **One-Class SVM** | Não supervisionado | Detecta fronteiras de normalidade complexas em espaços de alta dimensão. | Mais **lento** em grandes datasets e sensível ao ajuste fino. |
| **Autoencoder** | Rede neural não supervisionada | Detecta anomalias sutis e complexas com base no **erro de reconstrução**. | Requer mais dados e tempo de treino; sensível à arquitetura. |


## Atividade Prática — Google Colab

### Objetivo

Aplicar três técnicas de detecção de anomalias em **dados reais de rede** (`KDDCup99`), avaliando diferenças de desempenho e eficiência.

### Passo 1 – Importar bibliotecas e carregar os dados

```python
from sklearn.datasets import fetch_kddcup99
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import IsolationForest
from sklearn.svm import OneClassSVM
from tensorflow.keras import layers, models
import numpy as np

# Carregar base KDDCup99 (10%)
data = fetch_kddcup99(as_frame=True, percent10=True)
df = data.frame.copy()
```

### Passo 2 – Pré-processamento

```python
# Converter atributos categóricos
for col in df.select_dtypes(include='object').columns:
    df[col] = LabelEncoder().fit_transform(df[col])

X = df.drop(columns=['label'])
y = df['label'] # Mantemos para a avaliação futura

# Normalização dos dados
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```

### Passo 3 – Aplicar algoritmos de detecção

#### **Isolation Forest**

O **Isolation Forest** (ou “Floresta de Isolamento”) é um algoritmo baseado na ideia de que **anomalias são mais fáceis de isolar** do que pontos normais.
Ele cria múltiplas **árvores de decisão aleatórias** (isolation trees) e mede o número médio de divisões necessárias para isolar um ponto.
Pontos anômalos são isolados rapidamente, com menos divisões — logo, têm **caminhos curtos** na floresta.

**Principais características:**

* Baseado em particionamento aleatório (não requer labels).
* Extremamente eficiente em grandes volumes de dados.
* Adequado para datasets mistos (numéricos e categóricos transformados).

**Parâmetros utilizados:**

* `contamination=0.05`: define a fração esperada de anomalias (5%).
  Usamos esse valor por ser um bom ponto de partida para ambientes de rede, onde ataques representam uma pequena fração dos eventos.
  Esse parâmetro afeta o threshold interno que define o que é “anômalo”.
* `random_state=42`: garante reprodutibilidade das execuções (mesma sequência aleatória).

```python
# Isolation Forest - Detecta anomalias isolando amostras em árvores aleatórias
# contamination = 0.05 significa que estimamos 5% de anomalias

iso = IsolationForest(contamination=0.05, random_state=42)
pred_iso = iso.fit_predict(X_scaled)
```

> **Interpretação:**
> O método `fit_predict()` retorna `1` para valores normais e `-1` para anomalias.
> O modelo estima automaticamente o limiar de isolamento baseado na proporção `contamination`.


#### **One-Class SVM**

O **One-Class Support Vector Machine** (SVM) é uma variação do algoritmo SVM tradicional, adaptado para detectar **padrões de normalidade**.
Ele aprende a delimitar uma região no espaço de características que engloba a maior parte dos dados de treinamento (os considerados “normais”).
Tudo que cair fora dessa região é classificado como anômalo.

**Principais características:**

* Baseia-se em **kernel functions** (funções de transformação), o que permite detectar fronteiras **não lineares**.
* Mais sensível à escala das variáveis (por isso usamos `StandardScaler` no pré-processamento).
* Ideal para conjuntos com **poucos outliers** e **fronteiras complexas**.

**Parâmetros utilizados:**

* `kernel='rbf'`: o kernel RBF (Radial Basis Function) cria fronteiras suaves e não lineares — ideal para dados com múltiplas variáveis correlacionadas.
* `gamma=0.001`: controla a influência de cada ponto na formação da fronteira.

  * Valores baixos (como 0.001) geram fronteiras **mais suaves** e generalistas.
  * Valores altos geram fronteiras muito locais, que podem **overfitar** o treino.
* `nu=0.05`: controla a fração máxima de outliers esperada (semelhante a `contamination` do Isolation Forest).

```python
# One-Class SVM - Define uma fronteira de normalidade no espaço de características
# kernel='rbf' permite fronteiras não lineares
# gamma=0.001 controla a suavidade da fronteira (baixo = fronteira ampla)
# nu=0.05 define que até 5% dos dados podem ser considerados anômalos

svm = OneClassSVM(kernel='rbf', gamma=0.001, nu=0.05)
pred_svm = svm.fit_predict(X_scaled)
```

> **Interpretação:**
> O SVM retorna `1` para instâncias dentro da fronteira (normais) e `-1` para fora (anômalas).
> A escolha de `nu` e `gamma` influencia fortemente o equilíbrio entre falsos positivos e falsos negativos.



#### **Autoencoder**

O **Autoencoder** é uma **rede neural artificial** composta por duas partes:

1. **Encoder** — comprime os dados originais em uma representação reduzida (bottleneck).
2. **Decoder** — tenta reconstruir os dados originais a partir dessa representação comprimida.

A ideia é que, ao aprender apenas os padrões “normais”, a rede **falhará em reconstruir dados anômalos**, resultando em um **erro de reconstrução elevado**.

**Por que é útil?**

* Captura **relações complexas e não lineares** entre variáveis.
* Aprende automaticamente a estrutura subjacente dos dados.
* Indicado para detectar **anomalias sutis** que outros modelos podem não perceber.

**Arquitetura e parâmetros utilizados:**

* Camadas: `[32 → 8 → 32 → input_dim]`

  * Camadas de 32 neurônios para captura de padrões gerais.
  * Gargalo (bottleneck) de 8 neurônios para forçar compressão e aprendizado das estruturas principais.
* `activation='relu'`: função de ativação eficiente, evita saturação dos neurônios.
* `loss='mse'`: usa o **erro quadrático médio (Mean Squared Error)** entre entrada e saída para medir a qualidade da reconstrução.
* `epochs=10`: número de passagens completas sobre o dataset.
* `batch_size=64`: número de amostras processadas antes da atualização dos pesos.
* `threshold = mean + 2*std`: define como anomalia todo ponto cujo erro de reconstrução está **duas vezes acima do desvio padrão da média** — uma heurística comum para detectar desvios estatisticamente significativos.

```python
input_dim = X_scaled.shape[1]

# Autoencoder - Rede neural de reconstrução
# O gargalo (camada de 8 neurônios) força o modelo a aprender apenas padrões principais (dados normais)
# Dados anômalos geram erros de reconstrução maiores

autoencoder = models.Sequential([
    layers.Dense(32, activation='relu', input_shape=(input_dim,)),
    layers.Dense(8, activation='relu'),
    layers.Dense(32, activation='relu'),
    layers.Dense(input_dim, activation='linear')
])

autoencoder.compile(optimizer='adam', loss='mse')

print("Treinando Autoencoder...")
autoencoder.fit(X_scaled, X_scaled, epochs=10, batch_size=64, shuffle=True, verbose=0)

# Calcular erro de reconstrução
recon = autoencoder.predict(X_scaled)
reconstruction_error = ((X_scaled - recon) ** 2).mean(axis=1)

# Determinar anomalias: erro acima da Média + 2 * Desvio Padrão
threshold = reconstruction_error.mean() + 2 * reconstruction_error.std()
pred_ae = np.where(reconstruction_error > threshold, -1, 1)  # -1 é anomalia
```

> **Interpretação:**
>
> * Se o erro de reconstrução for alto, o ponto é considerado **anômalo**.
> * O threshold pode ser ajustado manualmente ou com base em percentis (ex.: 95º).
> * Para reduzir falsos positivos, é possível usar **threshold dinâmico** ou **ensemble de modelos** (votação entre iForest, SVM e Autoencoder).


### Passo 4 – Avaliar resultados e Análise

```python
# Contar anomalias
print("\n--- Contagem de Anomalias Detectadas (Onde -1 = Anomalia) ---")
print("Isolation Forest:", np.sum(pred_iso == -1))
print("One-Class SVM:", np.sum(pred_svm == -1))
print(f"Autoencoder (Threshold > {threshold:.4f}):", np.sum(pred_ae == -1))
```

**Análise dos Resultados:**

1.  **Isolation Forest e One-Class SVM:** Ambos tendem a detectar um número de anomalias **próximo ao `contamination`/`nu`** definido (5%), pois estes parâmetros funcionam como a *estimativa* da taxa de anomalia. Eles são consistentes.
2.  **Autoencoder:** A detecção é baseada no **erro de reconstrução**. Se a rede neural não conseguiu reconstruir um dado fielmente (erro alto), ele é considerado anômalo. A contagem final dependerá da distribuição desse erro em relação ao `threshold` (Média + $2\sigma$).


## Discussão em Grupo e Soluções Robustas

### Questões para Análise:

1.  **Variáveis Chave:** Quais variáveis de rede (duração, número de pacotes, protocolos, portas) parecem mais úteis para identificar anomalias?
2.  **Redução de Falsos Alertas:** Como podemos reduzir Falsos Positivos em um ambiente real?
3.  **Abordagem Supervisionada:** Em que casos (ataques *conhecidos*, alta taxa de amostragem) um método supervisionado é preferível?

### Soluções para Redução de Falsos Alertas:

Para evitar que o sistema sobrecarregue a equipe de segurança, é vital implementar estratégias robustas:

  * **Ensemble de Modelos (Votação):** Só gere um alerta de segurança de **nível alto** se **múltiplos modelos** (Isolation Forest E Autoencoder) classificarem o evento como anômalo.
  * **Threshold Dinâmico:** O limite de alerta deve ser ajustado com base no **horário** ou no **risco** do usuário/dispositivo.
  * **Aprendizado Contínuo com Feedback Humano (Active Learning):** Use o *feedback* da equipe de segurança (rotulando alertas como "Verdadeiro Ataque" ou "Falso Positivo") para **retreinar o modelo** e ensiná-lo a reconhecer a nova normalidade.

## Exercícios de Fixação

### **Parte 1 – Teórica**

1.  Explique, com suas palavras, a diferença entre **outlier** e **anomalia**.
    > **Resposta:** Um outlier é uma discrepância estatística. Uma anomalia é um outlier com **significado real** no contexto da segurança ou da operação.
2.  Cite dois exemplos de anomalias em um ambiente de rede corporativa.
    > **Resposta:** Tentativa de **força bruta** (múltiplos logins com senhas diferentes) e **exfiltração de dados** (grande download para IP externo na madrugada).
3.  Compare brevemente as principais diferenças entre **Isolation Forest** e **One-Class SVM**.
    > **Resposta:** Isolation Forest **isola** anomalias rapidamente com árvores (escalável). One-Class SVM **traça uma fronteira** envolvente complexa (robusto para fronteiras não lineares, mas mais lento).
4.  O que é o **erro de reconstrução** em um autoencoder, e como ele ajuda a detectar anomalias?
    > **Resposta:** É a diferença entre o dado de entrada e o dado de saída. Dados anômalos (não vistos no treino) não podem ser reconstruídos corretamente, gerando um **erro de reconstrução alto**, que serve como score de anomalia.

### **Parte 2 – Prática (Colab)**

1.  Ajuste o parâmetro `contamination` do **Isolation Forest** para `0.1` e observe as mudanças.
2.  Experimente mudar o `gamma` do One-Class SVM para `0.0005` e discuta o impacto.
3.  No Autoencoder, aumente o número de *neurônios* da camada intermediária para `16` (de 8). Discuta se isso melhora ou piora a detecção.
4.  Gere um **gráfico de dispersão** dos dados (usando PCA para 2D) mostrando os pontos anômalos detectados pelo Isolation Forest em vermelho.


```python
# Exemplo de código para o exercício 4 (Visualização)
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

# Aplicar PCA para 2 dimensões
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
df_plot = pd.DataFrame(X_pca, columns=['PC1', 'PC2'])
df_plot['Anomaly'] = pred_iso

plt.figure(figsize=(10, 6))
# Normal (azul)
plt.scatter(df_plot.loc[df_plot['Anomaly'] == 1, 'PC1'], 
            df_plot.loc[df_plot['Anomaly'] == 1, 'PC2'], 
            c='blue', label='Normal', s=5, alpha=0.6)
# Anomalia (vermelho)
plt.scatter(df_plot.loc[df_plot['Anomaly'] == -1, 'PC1'], 
            df_plot.loc[df_plot['Anomaly'] == -1, 'PC2'], 
            c='red', label='Anomalia', s=10)

plt.title('Detecção de Anomalias (Isolation Forest) - PCA 2D')
plt.legend()
plt.show()
```


## Glossário Técnico

### Redução de Dimensionalidade para Visualização (PCA)

| Termo | Conceito |
| :--- | :--- |
| **PCA** | **Análise de Componentes Principais (Principal Component Analysis).** É uma técnica estatística fundamental para **reduzir a dimensionalidade** de um conjunto de dados, preservando a maior parte da **variância** (informação). Em poucas palavras, o PCA transforma um dataset com muitas *features* (colunas) em um novo conjunto com poucas *features* (componentes principais), mantendo a essência dos dados. |
| **`n_components`** | Parâmetro usado ao inicializar o PCA (ex: `n_components=2`). Define o número de novas dimensões desejadas. Usamos `2` para que os dados possam ser facilmente plotados em um gráfico 2D. |


### Parâmetros Técnicos dos Algoritmos de Detecção de Anomalias

| Algoritmo | Parâmetro | Descrição Técnica |
| :--- | :--- | :--- |
| **Isolation Forest** | `contamination` | A **estimativa** da proporção de *outliers* no dataset (um valor entre 0 e 0.5). O modelo tentará classificar pelo menos essa proporção de amostras como anômalas. No Colab, usamos `0.05` (5%). |
| | `random_state` | Define a semente para a geração de números aleatórios, garantindo que os resultados (a forma como as árvores são construídas) sejam **reproduzíveis** em execuções diferentes. |
| **One-Class SVM** | `nu` ($\nu$) | Um limite superior para a fração de vetores de suporte (pontos de treino que definem a fronteira) e um limite inferior para a fração de amostras de treinamento consideradas *outliers*. No contexto de anomalias, ele funciona de forma semelhante ao `contamination`. Usamos `0.05`. |
| | `kernel` | Especifica o tipo de kernel a ser usado na função de decisão. O `rbf` (Radial Basis Function) permite que o modelo encontre fronteiras de decisão **não lineares** e complexas. |
| | `gamma` | Define o quão longe a influência de uma única amostra de treino se estende, afetando a suavidade da fronteira de decisão. Um `gamma` baixo (`0.001`) significa fronteiras **suaves** e mais globais. |
| **Autoencoder** | `loss='mse'` | **Erro Quadrático Médio (Mean Squared Error).** É a métrica de custo que o modelo tenta minimizar. Ele mede a diferença quadrática média entre os dados de entrada e a reconstrução de saída. |
| | `epochs` | O número de vezes que o algoritmo de treinamento passará por **todo** o dataset. `epochs=10` significa 10 ciclos completos de aprendizado. |
| | `batch_size` | O número de amostras de treino processadas antes que os parâmetros internos do modelo sejam atualizados (o número de amostras usadas para calcular o gradiente). Usamos `64`. |
| | **Erro de Reconstrução** | A métrica real de detecção. Calculamos a diferença entre o input ($X_{scaled}$) e a saída do Autoencoder ($recon$). Anomalias terão um erro significativamente mais alto. |


## **Exercício Prático – Detecção de Anomalias em Transações Financeiras (Credit Card Fraud Detection)**

Uma fintech deseja desenvolver um sistema de monitoramento em tempo real capaz de detectar **transações financeiras potencialmente fraudulentas**.
O conjunto de dados fornecido contém **transações de cartão de crédito reais**, sendo a grande maioria legítima e uma pequena fração classificadas como fraudes.

Seu objetivo é utilizar **técnicas de detecção de anomalias** para identificar automaticamente as transações suspeitas.

O desafio é lidar com um **forte desbalanceamento de classes** — apenas cerca de **0,17% das transações** são fraudes — o que torna inviável o uso direto de modelos supervisionados convencionais.


### **Contexto do Dataset**

* Nome: **Credit Card Fraud Detection Dataset (Kaggle)**
* Fonte: [https://www.kaggle.com/mlg-ulb/creditcardfraud](https://www.kaggle.com/mlg-ulb/creditcardfraud)
* Características:

  * 284.807 transações registradas em 2 dias.
  * 492 fraudes (0,172%).
  * Variáveis de entrada resultam de uma transformação por **PCA**, mantendo o sigilo dos dados originais.
  * Coluna **`Class`**:

    * `0` = Transação normal
    * `1` = Fraude

### **Objetivos de Aprendizado**

1. Aplicar técnicas de detecção de anomalias em um contexto financeiro.
2. Entender os desafios de datasets **extremamente desbalanceados**.
3. Comparar o comportamento dos modelos em relação ao caso de rede corporativa (KDDCup99).
4. Analisar as implicações práticas da escolha de thresholds e métricas.


### **Questões**

#### **Parte 1 — Análise Exploratória**

1. Quantas transações existem no dataset? Quantas são fraudes?
2. Qual é o percentual de transações fraudulentas no total?
3. Quais variáveis parecem mais relevantes para diferenciar uma fraude de uma transação normal?
4. Há correlação entre as variáveis PCA e a variável alvo `Class`?

#### **Parte 2 — Modelagem**

5. Qual modelo você escolheria inicialmente para este problema: **Isolation Forest**, **One-Class SVM** ou **Autoencoder**?
   Justifique sua escolha com base no tipo e na distribuição dos dados.
6. Após treinar o modelo, quantas anomalias foram detectadas?
7. O modelo conseguiu detectar todas as fraudes (alta taxa de recall)?
8. Houve falsos positivos em excesso? Como isso afetaria a operação de uma empresa real?

#### **Parte 3 — Avaliação**

9. Quais métricas melhor representam o sucesso do modelo neste caso (Accuracy, Precision, Recall, F1-Score, AUC)?
10. Quais ajustes poderiam ser feitos nos parâmetros para melhorar a detecção sem aumentar falsos positivos?


### **Código Inicial (Importação e Preparação de Dados)**

```python
# Exercício: Detecção de Anomalias em Transações Financeiras

# Passo 1 - Importar bibliotecas
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
import seaborn as sns

# Passo 2 - Carregar o dataset (após download no Kaggle)
# Certifique-se de enviar o arquivo 'creditcard.csv' ao ambiente do Colab
df = pd.read_csv("creditcard.csv")

# Passo 3 - Visualização inicial
print("Dimensões do dataset:", df.shape)
print(df.head())

# Passo 4 - Separar variáveis e alvo
X = df.drop(columns=['Class'])
y = df['Class']

# Normalizar os dados (a maioria das colunas já está em escala PCA)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Passo 5 - Análise exploratória básica
print("Distribuição da variável alvo:")
print(y.value_counts(normalize=True))

sns.countplot(x=y)
plt.title("Distribuição de Classes (0 = Normal, 1 = Fraude)")
plt.show()
```


### **Desafio Extra (para alunos avançados)**

* Crie um **gráfico de dispersão PCA 2D** colorindo fraudes e transações normais para visualizar separabilidade.
* Compare o desempenho de pelo menos **dois modelos de detecção de anomalias** (por exemplo, Isolation Forest e Autoencoder).
* Elabore um **gráfico Precision-Recall Curve** e discuta qual limiar (threshold) seria mais adequado em um sistema real, considerando que falsos negativos (fraudes não detectadas) têm custo muito maior.
