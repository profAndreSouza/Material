# Rede Neural MLP com Dataset de Frutas

```python
import numpy as np
import random
import matplotlib.pyplot as plt
```

* Importa bibliotecas:

  * **numpy**: operações matemáticas/vetoriais.
  * **random**: geração de valores aleatórios.
  * **matplotlib.pyplot**: criação de gráficos.

---

## Funções para métricas manuais

```python
def accuracy_score_manual(y_true, y_pred):
    return np.sum(y_true == y_pred) / len(y_true)
```

* Calcula **acurácia**: porcentagem de acertos (quantos rótulos corretos sobre o total).

```python
def precision_recall_f1_manual(y_true, y_pred, num_classes):
    precision = []
    recall = []
    f1 = []
```

* Define listas para armazenar **precisão**, **recall** e **F1-score** para cada classe.

```python
    for c in range(num_classes):
        tp = np.sum((y_pred == c) & (y_true == c))   # verdadeiros positivos
        fp = np.sum((y_pred == c) & (y_true != c))   # falsos positivos
        fn = np.sum((y_pred != c) & (y_true == c))   # falsos negativos
```

* Conta **TP, FP, FN** para cada classe.

```python
        p = tp / (tp + fp + 1e-15)
        r = tp / (tp + fn + 1e-15)
        f = 2 * p * r / (p + r + 1e-15)
```

* Calcula **precisão (p)**, **recall (r)** e **F1-score (f)** com correção numérica (1e-15 evita divisão por zero).

```python
        precision.append(p)
        recall.append(r)
        f1.append(f)
    return np.mean(precision), np.mean(recall), np.mean(f1)
```

* Retorna as médias de **precisão, recall e F1-score** entre todas as classes.

---

## Classe da Rede Neural MLP

```python
class MLP:
    def __init__(self, input_size, hidden_size, output_size, learning_rate=0.01):
```

* Construtor da rede: inicializa pesos, bias e parâmetros.

```python
        self.W1 = np.random.randn(input_size, hidden_size) * 0.01
        self.b1 = np.zeros((1, hidden_size))
        self.W2 = np.random.randn(hidden_size, output_size) * 0.01
        self.b2 = np.zeros((1, output_size))
```

* Inicializa **pesos (W1, W2)** com valores aleatórios pequenos e **bias (b1, b2)** com zeros.

```python
        self.learning_rate = learning_rate
        self.loss_history = []
```

* Define taxa de aprendizado e histórico do **loss**.

---

### Funções de ativação

```python
    def sigmoid(self, z):
        return 1 / (1 + np.exp(-z))
```

* **Sigmoid**: mapeia valores para o intervalo (0,1).

```python
    def sigmoid_derivative(self, a):
        return a * (1 - a)
```

* Derivada da sigmoid (necessária no **backpropagation**).

```python
    def softmax(self, z):
        exp_z = np.exp(z - np.max(z, axis=1, keepdims=True))
        return exp_z / np.sum(exp_z, axis=1, keepdims=True)
```

* **Softmax**: transforma saídas em probabilidades (camada final).

---

### Forward propagation

```python
    def forward(self, X):
        self.z1 = np.dot(X, self.W1) + self.b1
        self.a1 = self.sigmoid(self.z1)
        self.z2 = np.dot(self.a1, self.W2) + self.b2
        self.a2 = self.softmax(self.z2)
        return self.a2
```

* Calcula ativações da camada oculta (**a1**) e da saída (**a2**).

---

### Função de custo

```python
    def compute_loss(self, y_true, y_pred):
        m = y_true.shape[0]
        log_likelihood = -np.log(y_pred[range(m), np.argmax(y_true, axis=1)] + 1e-15)
        return np.sum(log_likelihood) / m
```

* **Loss = cross-entropy** entre rótulos verdadeiros e predições.

---

### Backpropagation


```python
def backward(self, X, y_true, y_pred):
```

* Define uma **função chamada `backward`** que calcula os ajustes necessários nos pesos e vieses da rede neural.
* `X` → entradas do modelo (dados que você passou).
* `y_true` → valores reais esperados (rótulos corretos).
* `y_pred` → valores que a rede previu.
* "Backward" significa que estamos indo **do resultado de volta para os pesos**, corrigindo erros.

---

```python
m = X.shape[0]
```

* `m` é o **número de exemplos** no seu conjunto de dados.
* `X.shape[0]` pega a quantidade de linhas (cada linha é um exemplo).
* Precisamos de `m` para **tirar a média dos gradientes**, evitando que o tamanho do dataset influencie demais a atualização.

---

```python
dz2 = y_pred - y_true
```

* Calcula o **erro da saída** (camada final).
* `dz2` representa a diferença entre o que a rede previu (`y_pred`) e o que era esperado (`y_true`).
* É o primeiro passo para **saber em que direção corrigir a rede**.

---

```python
dW2 = np.dot(self.a1.T, dz2) / m
```

* `dW2` são os **gradientes do peso da segunda camada** (saída).
* `np.dot(self.a1.T, dz2)` faz uma multiplicação de matrizes entre as ativações da camada escondida (`a1`) e o erro da camada de saída (`dz2`).
* Dividindo por `m`, tiramos a **média do gradiente** para todos os exemplos.
* **Por que multiplicar?** Para ver como cada peso contribuiu para o erro.

---

```python
db2 = np.sum(dz2, axis=0, keepdims=True) / m
```

* `db2` é o **gradiente do viés da camada de saída**.
* `np.sum(dz2, axis=0)` soma os erros para todos os exemplos.
* `keepdims=True` mantém a forma da matriz correta para subtração depois.
* Dividindo por `m`, tiramos a média.
* **Viés** é um número que ajuda a rede a se ajustar mesmo quando todos os inputs são zero.

---

```python
dz1 = np.dot(dz2, self.W2.T) * self.sigmoid_derivative(self.a1)
```

* Calcula o **erro da camada escondida** (`dz1`).
* `np.dot(dz2, self.W2.T)` propaga o erro da saída de volta para a camada escondida.
* `* self.sigmoid_derivative(self.a1)` aplica a **derivada da função de ativação sigmoide**, ajustando o quanto cada neurônio da camada escondida contribuiu para o erro.
* **Por que a derivada?** Porque ela mede a sensibilidade da saída em relação aos pesos — quanto mudar o peso muda o erro.

---

```python
dW1 = np.dot(X.T, dz1) / m
```

* `dW1` são os **gradientes dos pesos da primeira camada** (entrada → escondida).
* Multiplicamos as entradas (`X.T`) pelo erro da camada escondida (`dz1`).
* Dividindo por `m`, tiramos a média do gradiente para todos os exemplos.
* Indica **quanto cada peso da primeira camada precisa mudar**.

---

```python
db1 = np.sum(dz1, axis=0, keepdims=True) / m
```

* `db1` é o **gradiente do viés da camada escondida**.
* Soma todos os erros da camada escondida e divide por `m`.
* Ajusta o viés para **corrigir o erro médio** da camada escondida.

---

```python
self.W1 -= self.learning_rate * dW1
self.b1 -= self.learning_rate * db1
self.W2 -= self.learning_rate * dW2
self.b2 -= self.learning_rate * db2
```

* Aqui é onde **os pesos e vieses são atualizados**.
* `self.learning_rate` é a **taxa de aprendizado** (quanto queremos ajustar de cada vez).
* Subtrair `learning_rate * gradiente` move os pesos na direção **que reduz o erro**.
* Esse passo é chamado de **descida do gradiente**.


---

### Treinamento

```python
    def train(self, X, y, epochs=500):
        for i in range(epochs):
            y_pred = self.forward(X)
            loss = self.compute_loss(y, y_pred)
            self.loss_history.append(loss)
            self.backward(X, y, y_pred)
```

* Executa várias épocas de treinamento.

```python
            if i % 100 == 0:
                print(f"Época {i}, Loss: {loss:.4f}")
```

* Exibe o **loss** a cada 100 épocas.

---

### Predição

```python
    def predict(self, X):
        y_pred = self.forward(X)
        return np.argmax(y_pred, axis=1)
```

* Retorna a **classe prevista** (índice do maior valor).

---

## Dataset de frutas

```python
classes = ["Maçã", "Banana", "Laranja"]
```

* Define as **classes**.

```python
def gerar_amostra(fruta):
```

* Função para gerar amostras categóricas de cada fruta (peso, diâmetro, cor, textura).

```python
X_data = []
y_data = []
for fruta in range(3):
    for _ in range(20):
        x, y = gerar_amostra(fruta)
        X_data.append(x)
        y_data.append(y)
```

* Gera **60 amostras (20 por classe)**.

---

## Normalização e One-hot

```python
X = np.array(X_data, dtype=float)
y_raw = np.array(y_data)
```

* Converte listas em arrays numpy.

```python
X_min = X.min(axis=0)
X_max = X.max(axis=0)
X_scaled = (X - X_min) / (X_max - X_min + 1e-15)
```

* **Normalização min-max** dos atributos.

```python
y = np.zeros((y_raw.size, 3))
y[np.arange(y_raw.size), y_raw] = 1
```

* Converte rótulos para **one-hot encoding**.

---

## Treinamento do modelo

```python
mlp = MLP(input_size=4, hidden_size=3, output_size=3, learning_rate=0.5)
mlp.train(X_scaled, y, epochs=500)
```

* Cria a rede MLP com:

  * 4 entradas (características das frutas).
  * 3 neurônios ocultos.
  * 3 saídas (classes).

---

## Gráfico do Loss

```python
plt.figure(figsize=(8,5))
plt.plot(mlp.loss_history, label="Loss")
plt.xlabel("Épocas")
plt.ylabel("Loss")
plt.title("Evolução do Loss durante o Treinamento")
plt.legend()
plt.grid(True)
plt.show()
```

* Plota gráfico da evolução do **erro** durante o treinamento.

---

## Avaliação manual

```python
y_pred_labels = mlp.predict(X_scaled)

accuracy = accuracy_score_manual(y_raw, y_pred_labels)
precision, recall, f1 = precision_recall_f1_manual(y_raw, y_pred_labels, num_classes=3)
```

* Faz predição no dataset de treino.
* Calcula **acurácia, precisão, recall e F1-score**.

```python
print(f"Acurácia: {accuracy:.4f}")
print(f"Precisão: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print(f"F1-score: {f1:.4f}")
```

* Exibe os resultados.

---

## Testando novas amostras

```python
test_samples = np.array([
    [1,1,2,0],  # Maçã
    [0,1,1,0],  # Banana
    [1,2,0,1],  # Laranja
])
```

* Define amostras novas para teste.

```python
test_scaled = (test_samples - X_min) / (X_max - X_min + 1e-15)
pred = mlp.predict(test_scaled)
```

* Normaliza e faz predição.

```python
print("\nPredições:")
for i, p in enumerate(pred):
    print(f"Amostra {i+1}: {classes[p]}")
```

* Exibe a **classe prevista** para cada nova amostra.

---






# Arquitetura da rede (neurônios por camada)

| Camada  | Dimensão de entrada → saída | Ativação    | Nº de neurônios |                Nº de parâmetros |
| ------- | --------------------------- | ----------- | --------------: | ------------------------------: |
| Entrada | 4 características → 4       | —           |               4 |                               — |
| Oculta  | 4 → 3                       | **sigmoid** |               3 | W1 (4×3 = 12) + b1 (3) = **15** |
| Saída   | 3 → 3                       | **softmax** |               3 |  W2 (3×3 = 9) + b2 (3) = **12** |

**Topologia (tamanho) = 4–3–3**, com **27 parâmetros treináveis** no total (15 + 12).

---

# Conceitos, passo a passo

## 1) Dataset e codificação dos atributos

* Você gera amostras de **três classes**: `Maçã`, `Banana`, `Laranja`.
* Cada amostra possui **4 atributos categóricos** (representados como inteiros):

  1. `peso` (0/1, etc.)
  2. `diâmetro`
  3. `cor`
  4. `textura`
* Esses valores inteiros são uma **codificação ordinal simples** dos níveis das categorias (ex.: 0, 1, 2).
  *Observação*: para atributos puramente categóricos, uma alternativa comum seria **one-hot por atributo**, mas aqui foi adotada a codificação inteira seguida de **normalização**, o que é suficiente para fins didáticos.

## 2) Normalização min–max (features)

* Você calcula, por coluna (atributo):

  $$
  X_{\text{scaled}} = \frac{X - X_{\min}}{X_{\max} - X_{\min} + \varepsilon}
  $$
* Objetivo: levar cada atributo para a faixa **\[0, 1]**, evitando que atributos com escalas diferentes dominem o gradiente.
* O $\varepsilon = 1\text{e-}15$ evita **divisão por zero** quando $X_{\max}=X_{\min}$.

## 3) One-hot encoding (rótulos)

* Os rótulos `0,1,2` são convertidos para vetores **one-hot** de dimensão 3:

  * Maçã → `[1,0,0]`
  * Banana → `[0,1,0]`
  * Laranja → `[0,0,1]`
* Isso permite usar **softmax + entropia cruzada** na saída multiclasses.

## 4) Inicialização dos pesos e vieses

* Pesos $W_1, W_2$ \~ **N(0,1)** escalados por `0.01`:

  * Mantém ativações iniciais **pequenas**, evita saturar a sigmoide logo no início.
* Vieses $b_1, b_2$ começam em **zero**.
* A aleatoriedade **quebra a simetria** entre neurônios, permitindo aprender valores diferentes.

## 5) Ativações

### Sigmoid (camada oculta)

$$
\sigma(z) = \frac{1}{1 + e^{-z}}, \qquad \sigma'(a) = a(1-a)
$$

* Mapeia para (0,1).
* Simples e estável neste exemplo de baixa dimensão.

### Softmax (camada de saída)

$$
\text{softmax}(z)_k = \frac{e^{z_k - \max(z)}}{\sum_j e^{z_j - \max(z)}}
$$

* Converte **logits** em **probabilidades** que somam 1.
* O termo $-\max(z)$ melhora a **estabilidade numérica**.

## 6) Forward pass (inferência)

* Camada oculta:

  $$
  Z_1 = X W_1 + b_1,\quad A_1 = \sigma(Z_1)
  $$
* Camada de saída:

  $$
  Z_2 = A_1 W_2 + b_2,\quad A_2 = \text{softmax}(Z_2)
  $$
* **Saída $A_2$**: probabilidade de cada classe.

## 7) Função de perda (entropia cruzada categórica)

$$
\mathcal{L} = -\frac{1}{m}\sum_{i=1}^{m} \sum_{k=1}^{3} y_{ik}\,\log \big( \hat{y}_{ik} + \varepsilon \big)
$$

* Como $y$ é one-hot, a soma escolhe apenas o log da probabilidade da classe correta.
* Minimizar $\mathcal{L}$ ≡ **maximizar a probabilidade** da classe verdadeira.

## 8) Backpropagation (gradientes)

* Para **softmax + entropia cruzada**:

  $$
  dZ_2 = \hat{Y} - Y
  $$
* Gradientes:

  $$
  dW_2 = \frac{A_1^\top dZ_2}{m},\quad db_2 = \frac{\sum dZ_2}{m}
  $$

  $$
  dZ_1 = (dZ_2 W_2^\top)\odot \sigma'(A_1)
  $$

  $$
  dW_1 = \frac{X^\top dZ_1}{m},\quad db_1 = \frac{\sum dZ_1}{m}
  $$
* **Atualização (descida do gradiente)**:

  $$
  \theta \leftarrow \theta - \eta \cdot d\theta
  $$

  onde $\eta$ é a **learning rate**.

## 9) Taxa de aprendizado e épocas

* **Learning rate = 0.5** (alta para exemplos simples; acelera porém pode oscilar em problemas maiores).
* **Épocas**: 500 — número de passadas completas pelo conjunto de treino.

## 10) Métricas de avaliação

* **Acurácia**:

  $$
  \text{acc}=\frac{\#\text{acertos}}{\#\text{amostras}}
  $$
* **Precisão**, **Recall** e **F1** por classe $c$:

  $$
  \text{prec}_c=\frac{TP_c}{TP_c+FP_c},\quad
  \text{rec}_c=\frac{TP_c}{TP_c+FN_c},\quad
  F1_c=\frac{2\,\text{prec}_c\,\text{rec}_c}{\text{prec}_c+\text{rec}_c}
  $$
* Você retorna as **médias macro** (média simples entre classes), útil quando as classes têm tamanhos semelhantes (como aqui).

## 11) Predição

* Dado $X$ (normalizado), calcula $A_2$ e retorna:

  $$
  \arg\max_k A_{2,k}
  $$
* Para novas amostras, você **reaplica o min–max** usando $X_{\min}, X_{\max}$ do treino (**importantíssimo**).

## 12) Gráfico do loss

* O vetor `loss_history` mostra a **convergência** (ou não) ao longo das épocas.
* Idealmente, o loss **cai** de maneira estável; oscilações grandes sugerem taxa de aprendizado alta ou dados ruidosos.

---

# Observações práticas (boas práticas)

* **Conjunto de validação**: aqui, você mede no treino; para avaliar generalização, separe validação/teste.
* **Reprodutibilidade**: fixe sementes de `numpy` e `random` (ex.: `np.random.seed(42); random.seed(42)`).
* **Atributos categóricos**: para dados reais, considere **one-hot por atributo** ou **embeddings**; evita supor uma ordem entre categorias.
* **Ativações**: em redes mais profundas, **ReLU** costuma acelerar e evitar saturação da sigmoide.
* **Escala/learning rate**: se o loss “explode” ou oscila, reduza $\eta$; se estagna, aumente um pouco.


# Demais Conceitos

## Gradiente

Um **gradiente** é basicamente **uma medida de inclinação ou direção de mudança**. Pense assim:

* Imagine que você está em uma **montanha** e quer descer até o **vale mais baixo**.
* O gradiente é como **a direção da ladeira** em que você deve caminhar para descer mais rápido.
* Em termos matemáticos, ele mostra **quanto e em que direção mudar cada variável** para reduzir uma função (no caso da rede neural, a função de erro ou loss).

---

No contexto de redes neurais:

* Cada **peso e viés** da rede é uma variável.
* A função de erro (loss) nos diz **quanto a rede errou**.
* O **gradiente do peso** nos diz: “Se você mudar esse peso um pouquinho nessa direção, o erro vai diminuir”.
* Por isso, usamos o gradiente para **atualizar os pesos** e melhorar as previsões.

---

Um truque mental:

* **Gradiente alto** → erro muda muito se eu mexer nesse peso → ajustar com cuidado.
* **Gradiente baixo** → erro quase não muda → peso menos importante.

