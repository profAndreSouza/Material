# Aula — Arquiteturas de Redes Neurais e Parâmetros de Configuração

## Objetivo

* Conhecer os principais **tipos de redes neurais** aplicadas em diferentes domínios.
* Entender os **parâmetros de arquitetura e treino** (hiperparâmetros).
* Aplicar exemplos práticos em Colab, modificando parâmetros e observando impactos.

---

## 1 — Principais tipos de redes neurais

### 1.1 MLP (Multilayer Perceptron)

* Usada em dados **tabulares** ou problemas mais simples.
* Estrutura: camadas densas (fully connected).
* Hiperparâmetros principais:

  * Número de camadas ocultas.
  * Neurônios por camada.
  * Função de ativação (ReLU, sigmoid, tanh).
  * Regularização (Dropout, L2).
  * Learning rate, batch size, epochs.

---

### 1.2 CNN (Convolutional Neural Network)

* Focada em **imagens e visão computacional**.
* Estrutura: convoluções + pooling + camadas densas finais.
* Parâmetros chave:

  * Filtros (kernels) — quantidade e tamanho (ex.: 32 filtros de 3x3).
  * Stride e padding.
  * Camadas de pooling (MaxPooling, AvgPooling).
  * Dropout.
  * Data augmentation (rotação, flip, zoom).



### 1.3 RNN (Recurrent Neural Network)

* Usada em **sequências temporais** (séries, texto).
* Variantes: LSTM, GRU.
* Parâmetros:

  * Número de unidades recorrentes (neurônios por célula).
  * Quantidade de camadas empilhadas.
  * Sequência máxima de entrada.
  * Dropout interno (recurrent dropout).
  * Bidirecionalidade.



### 1.4 Redes baseadas em atenção / Transformers

* Estado da arte em **NLP e visão**.
* Ex.: BERT, GPT, Vision Transformer.
* Parâmetros principais:

  * Número de camadas (layers).
  * Número de cabeças de atenção.
  * Dimensão do embedding.
  * Dimensão do feed-forward interno.
  * Dropout.
  * Tamanho do contexto (janela de tokens).



## 2 — Parâmetros gerais de treino

### Hiperparâmetros comuns a qualquer rede:

* **Learning rate** — passo do otimizador (muito alto → diverge; muito baixo → lento).
* **Batch size** — exemplos por atualização.
* **Epochs** — número de passagens sobre o dataset.
* **Otimizadores** — SGD, Adam, RMSProp.
* **Loss function** — depende do problema:

  * Classificação binária → binary crossentropy.
  * Multiclasse → categorical crossentropy.
  * Regressão → MSE/MAE.
* **Regularização** — dropout, weight decay, early stopping.



## 3 — Colab de prática

```python
# Imports básicos
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.metrics import classification_report

print("TensorFlow:", tf.__version__)
```

### Exemplo 1 — MLP (tabular — Iris)

```python
iris = load_iris()
X, y = iris.data, iris.target.reshape(-1,1)

# Pré-processamento
scaler = StandardScaler()
X = scaler.fit_transform(X)
ohe = OneHotEncoder(sparse=False)
y = ohe.fit_transform(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Modelo MLP parametrizável
def build_mlp(units=[32,16], activation="relu", dropout=0.0, lr=0.001):
    model = keras.Sequential()
    model.add(layers.Input(shape=(X_train.shape[1],)))
    for u in units:
        model.add(layers.Dense(u, activation=activation))
        if dropout > 0:
            model.add(layers.Dropout(dropout))
    model.add(layers.Dense(y_train.shape[1], activation="softmax"))
    model.compile(optimizer=keras.optimizers.Adam(lr), 
                  loss="categorical_crossentropy", metrics=["accuracy"])
    return model

mlp = build_mlp(units=[64,32], activation="relu", dropout=0.2, lr=0.005)
history = mlp.fit(X_train, y_train, validation_split=0.2, epochs=50, batch_size=8, verbose=0)

loss, acc = mlp.evaluate(X_test, y_test, verbose=0)
print(f"Test accuracy: {acc:.4f}")
```


### Exemplo 2 — CNN (imagens — MNIST)

```python
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
x_train, x_test = x_train/255.0, x_test/255.0
x_train = np.expand_dims(x_train, -1)
x_test = np.expand_dims(x_test, -1)

y_train = keras.utils.to_categorical(y_train, 10)
y_test  = keras.utils.to_categorical(y_test, 10)

def build_cnn(filters=[32,64], kernel_size=(3,3), dense_units=128, dropout=0.5):
    model = keras.Sequential([
        layers.Conv2D(filters[0], kernel_size, activation="relu", input_shape=x_train.shape[1:]),
        layers.MaxPooling2D((2,2)),
        layers.Conv2D(filters[1], kernel_size, activation="relu"),
        layers.MaxPooling2D((2,2)),
        layers.Flatten(),
        layers.Dense(dense_units, activation="relu"),
        layers.Dropout(dropout),
        layers.Dense(10, activation="softmax")
    ])
    model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])
    return model

cnn = build_cnn(filters=[32,64], kernel_size=(3,3), dense_units=128, dropout=0.3)
cnn.fit(x_train, y_train, epochs=3, batch_size=128, validation_split=0.1)
```


## 4 — Exercícios práticos

1. **MLP (Iris)**: altere número de camadas (1 → 3) e compare acurácia.
2. **CNN (MNIST)**: modifique número de filtros (de 32/64 para 64/128). Compare tempo e acurácia.
3. Experimente dropout = 0, 0.3 e 0.5. O que acontece?
4. Teste otimizadores diferentes (`SGD` vs `Adam`).