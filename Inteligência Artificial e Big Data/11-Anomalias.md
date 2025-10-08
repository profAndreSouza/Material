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

#### Isolation Forest

```python
# contamination = 0.05 significa que estimamos 5% de anomalias
iso = IsolationForest(contamination=0.05, random_state=42)
pred_iso = iso.fit_predict(X_scaled)
```

#### One-Class SVM

```python
svm = OneClassSVM(kernel='rbf', gamma=0.001, nu=0.05) # nu = 0.05 é a proporção de anomalias
pred_svm = svm.fit_predict(X_scaled)
```

#### Autoencoder

```python
input_dim = X_scaled.shape[1]

# Modelo com gargalo de 8 neurônios
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
pred_ae = np.where(reconstruction_error > threshold, -1, 1) # -1 é anomalia
```

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

---

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

