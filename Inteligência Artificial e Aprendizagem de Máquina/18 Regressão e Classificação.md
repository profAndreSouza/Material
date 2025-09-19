# Regressão Linear, Regressão Logística e Classificação em Redes Neurais

## 1. Regressão Linear

A regressão linear é usada para **estimar valores numéricos contínuos** com base em uma ou mais variáveis independentes. A ideia central é ajustar uma linha (ou hiperplano em dimensões maiores) que melhor representa a relação entre as variáveis.

**Exemplo:** prever o preço de uma casa com base em sua área, localização e número de quartos.

### Fórmula Geral

$$
y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + ... + \beta_n x_n + \epsilon
$$

* $y$: valor a ser previsto (variável dependente)
* $x_i$: variáveis independentes (features)
* $\beta_i$: coeficientes (impacto de cada variável)
* $\epsilon$: erro (diferença entre previsão e valor real)

### Interpretação

* Se o coeficiente $\beta_1 = 2000$, isso significa que **cada unidade a mais em $x_1$** aumenta o valor previsto de $y$ em **2000 unidades monetárias**.

### Visualização

Com apenas uma variável, temos uma **reta** ajustada aos dados. Com mais variáveis, temos planos ou hiperplanos.



### Script em Colab — Regressão Linear

```python
# Regressão Linear com Scikit-Learn
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Criando dados artificiais (área da casa x preço)
np.random.seed(42)
X = 2 * np.random.rand(100, 1)  # área
y = 4 + 3 * X + np.random.randn(100, 1)  # preço

# Treinando o modelo
model = LinearRegression()
model.fit(X, y)

# Fazendo previsões
X_new = np.array([[0], [2]])
y_pred = model.predict(X_new)

# Visualização
plt.scatter(X, y, color="blue", label="Dados reais")
plt.plot(X_new, y_pred, color="red", linewidth=2, label="Reta ajustada")
plt.xlabel("Área da casa (100m²)")
plt.ylabel("Preço (R$100 mil)")
plt.legend()
plt.title("Regressão Linear - Preço de Casas")
plt.show()
```

## 2. Regressão Logística

A regressão logística é usada quando a variável alvo é **categórica** (ex.: sim/não, 0/1). Apesar do nome, ela é uma **técnica de classificação**, não de regressão.

**Exemplo:** prever se um cliente vai cancelar um serviço (churn: sim ou não).

### Como funciona?

1. Calcula-se uma combinação linear das variáveis.
2. Aplica-se a **função sigmoide**, que comprime o resultado para o intervalo \[0,1]:

$$
\sigma(z) = \frac{1}{1 + e^{-z}}
$$

### Decisão

* Se $\sigma(z) \geq 0.5$ → classe 1 (ex.: “sim”)
* Se $\sigma(z) < 0.5$ → classe 0 (ex.: “não”)

### Visualização

Enquanto a regressão linear ajusta uma reta, a logística gera uma **curva em S (sigmoide)**.



### Script em Colab — Regressão Logística

```python
# Regressão Logística com Scikit-Learn
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt

# Carregando dataset
data = load_breast_cancer()
X = data.data
y = data.target

# Separando treino/teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Treinando modelo
log_reg = LogisticRegression(max_iter=5000)
log_reg.fit(X_train, y_train)

# Avaliando
y_pred = log_reg.predict(X_test)

print("Relatório de Classificação:")
print(classification_report(y_test, y_pred, target_names=data.target_names))

# Matriz de confusão
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues", xticklabels=data.target_names, yticklabels=data.target_names)
plt.title("Matriz de Confusão - Regressão Logística")
plt.xlabel("Previsto")
plt.ylabel("Real")
plt.show()
```



## 3. Classificação em Redes Neurais


Redes neurais são modelos inspirados no cérebro humano, compostos por **neurônios artificiais** organizados em camadas:

* **Camada de entrada**: recebe os dados.
* **Camadas ocultas**: processam as informações.
* **Camada de saída**: fornece a previsão.

### Funcionamento

1. Cada neurônio soma os valores de entrada com pesos (combinação linear).
2. O resultado passa por uma **função de ativação** (ReLU, sigmoide, softmax).
3. A camada de saída retorna probabilidades.

### Funções de ativação

* **Sigmoide** → saída binária.
* **Softmax** → saída multiclasse.
* **ReLU** → usada nas camadas ocultas para acelerar aprendizado.

### Exemplo prático

Reconhecimento de dígitos manuscritos (0–9) no dataset **MNIST**.



### Script em Colab — Redes Neurais (Keras/TensorFlow)

```python
# Classificação com Redes Neurais (Keras/TensorFlow)
import tensorflow as tf
from tensorflow.keras.datasets import mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten
from tensorflow.keras.utils import to_categorical
import matplotlib.pyplot as plt
import numpy as np

# Carregando dataset MNIST
(X_train, y_train), (X_test, y_test) = mnist.load_data()

# Normalização (0 a 1)
X_train, X_test = X_train / 255.0, X_test / 255.0

# One-hot encoding
y_train = to_categorical(y_train, 10)
y_test = to_categorical(y_test, 10)

# Criando modelo
model = Sequential([
    Flatten(input_shape=(28,28)),     # camada de entrada (imagens 28x28)
    Dense(128, activation="relu"),    # camada oculta
    Dense(10, activation="softmax")   # saída (10 classes)
])

# Compilando
model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])

# Treinando
history = model.fit(X_train, y_train, epochs=5, batch_size=128, validation_split=0.1, verbose=1)

# Avaliação
test_loss, test_acc = model.evaluate(X_test, y_test, verbose=0)
print(f"Acurácia no teste: {test_acc:.4f}")

# Exemplo de previsão
index = np.random.randint(0, X_test.shape[0])
plt.imshow(X_test[index], cmap="gray")
plt.title("Imagem de Teste")
plt.show()

pred = model.predict(X_test[index].reshape(1,28,28))
print("Classe prevista:", np.argmax(pred))
```



## 4. Comparação Resumida

| Método                  | Tipo de Saída              | Exemplo de Uso                                     |
| ----------------------- | -------------------------- | -------------------------------------------------- |
| **Regressão Linear**    | Valor contínuo (número)    | Preço de imóveis, previsão de vendas               |
| **Regressão Logística** | Classe binária (0/1)       | Fraude em transações, churn de clientes            |
| **Redes Neurais**       | Classe binária ou múltipla | Reconhecimento de imagens, classificação de textos |



## 5. Exercícios

### Exercício 1 — Regressão Linear

* Modifique o código para prever o **salário em função dos anos de experiência**.
* Gere um gráfico mostrando os pontos e a reta ajustada.

### Exercício 2 — Regressão Logística

* Use o dataset de câncer de mama, mas altere o `test_size` para **0.3**.
* Compare os resultados de acurácia com o valor obtido em **0.2**.

### Exercício 3 — Redes Neurais

* Aumente o número de épocas para **10** e observe o impacto na acurácia.
* Adicione mais uma camada oculta (ex.: `Dense(64, activation="relu")`).
* Verifique se houve melhora no desempenho.
