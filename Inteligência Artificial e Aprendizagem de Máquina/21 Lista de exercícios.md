# Lista de Exercícios – Fundamentos e Modelos de Aprendizado de Máquina


## **Parte 1 – Conceitos Fundamentais (Questões 1–10)**

**1. (Múltipla escolha)**
O que representa o **peso sináptico** em um neurônio artificial?

* a) O valor de ativação da camada de saída
* b) O grau de importância de uma entrada para o neurônio
* c) O valor de bias aplicado ao modelo
* d) A função de ativação utilizada


**2. (Múltipla escolha)**
O **bias** em uma rede neural serve para:

* a) Ajustar o tamanho do conjunto de dados
* b) Reduzir o overfitting
* c) Deslocar a função de ativação, aumentando a flexibilidade do modelo
* d) Corrigir erros da retropropagação


**3. (Dissertativa curta)**
Explique o que significa **forward propagation** em uma rede neural.


**4. (Dissertativa curta)**
Explique como ocorre a **retropropagação (backpropagation)** e sua importância no treinamento de redes neurais.


**5. (Correlação)**
Associe cada **função de ativação** à sua **característica principal**:

| Função      | Característica                                |
| :---------- | :-------------------------------------------- |
| (A) Sigmoid | (1) Mantém valores entre -1 e 1               |
| (B) Tanh    | (2) Produz valores entre 0 e 1                |
| (C) ReLU    | (3) Zera valores negativos e mantém positivos |


**6. (Múltipla escolha)**
Qual função de ativação é **mais comum em camadas ocultas de redes profundas** (DNN)?

* a) Sigmoid
* b) ReLU
* c) Softmax
* d) Linear


**7. (Dissertativa)**
Descreva o impacto da **taxa de aprendizado (learning rate)** no processo de treinamento de uma rede neural.


**8. (Múltipla escolha)**
Em uma rede neural, **overfitting** ocorre quando:

* a) O modelo se ajusta excessivamente aos dados de treino e perde generalização
* b) O modelo é simples demais para capturar padrões
* c) Há dados de treinamento insuficientes
* d) A taxa de aprendizado é muito alta


**9. (Dissertativa curta)**
Explique a diferença entre **gradiente descendente batch**, **stochastic** e **mini-batch**.


**10. (Múltipla escolha)**
A principal diferença entre **regressão, classificação e clusterização** é:

* a) O tipo de função de ativação
* b) O tipo de variável de saída (numérica, categórica, ou inexistente)
* c) O número de camadas ocultas
* d) O algoritmo de otimização


## **Parte 2 – Modelos Supervisionados e Não Supervisionados (Questões 11–20)**

**11. (Dissertativa)**
Defina o que é **regressão** e cite dois exemplos de aplicação.


**12. (Dissertativa)**
Defina o que é **classificação** e cite dois exemplos de aplicação.


**13. (Dissertativa)**
Defina o que é **clusterização** e explique como ela difere dos modelos supervisionados.


**14. (Múltipla escolha)**
O algoritmo **SVM (Máquinas de Vetores de Suporte)** busca:

* a) Maximizar a distância entre classes (margem)
* b) Minimizar a soma dos erros quadráticos
* c) Aumentar o número de clusters
* d) Reduzir o número de neurônios ocultos


**15. (Análise de Código)**
Dado o trecho abaixo:

```python
from sklearn.svm import SVC
model = SVC(kernel='linear')
model.fit(X_train, y_train)
```

Explique o que significa o parâmetro `kernel='linear'`.


**16. (Correlação)**
Associe cada **tarefa de ML** ao **modelo mais adequado**:

| Tarefa                      | Modelo               |
| :-------------------------- | :------------------- |
| (A) Previsão de temperatura | (1) Regressão Linear |
| (B) Reconhecimento facial   | (2) CNN              |
| (C) Detecção de fraudes     | (3) DNN              |
| (D) Tradução automática     | (4) RNN              |


**17. (Múltipla escolha)**
A principal diferença entre **MLP e DNN** é:

* a) DNN possui mais de uma camada oculta (profunda)
* b) MLP não usa funções de ativação
* c) DNN é usada apenas em regressão
* d) MLP é uma rede não supervisionada


**18. (Análise de Código)**
Analise o código:

```python
from sklearn.neural_network import MLPClassifier
model = MLPClassifier(hidden_layer_sizes=(10, 10), activation='relu', max_iter=1000)
```

Explique o significado dos parâmetros `hidden_layer_sizes` e `activation`.


**19. (Dissertativa)**
Explique o funcionamento básico de uma **CNN (Convolutional Neural Network)** e cite um exemplo de uso prático.


**20. (Dissertativa)**
Explique o funcionamento básico de uma **RNN (Recurrent Neural Network)** e cite um exemplo de uso prático.


## **Parte 3 – Análise de Código e Aplicações (Questões 21–30)**

**21. (Análise de Código)**
Dado o código:

```python
import numpy as np
x = np.array([0.5, 0.3])
w = np.array([0.4, 0.7])
b = 0.2
z = np.dot(x, w) + b
```

Calcule o valor de `z`.


**22. (Análise de Código)**
Complete o código para aplicar a função **ReLU** ao resultado anterior:

```python
def relu(x):
    # escreva a linha que falta
```


**23. (Dissertativa)**
Compare as vantagens e desvantagens entre **ReLU** e **Sigmoid** em redes profundas.


**24. (Múltipla escolha)**
O modelo mais indicado para **reconhecimento de voz** é:

* a) CNN
* b) RNN
* c) SVM
* d) Regressão Linear


**25. (Análise de Código)**
Observe:

```python
model = Sequential([
    Dense(64, activation='relu'),
    Dense(32, activation='relu'),
    Dense(10, activation='softmax')
])
```

Quantas camadas ocultas existem e qual é a função de ativação da camada de saída?


**26. (Múltipla escolha)**
A função **Softmax** é mais usada em:

* a) Problemas de regressão
* b) Problemas de classificação multiclasse
* c) Clusterização
* d) Aprendizado não supervisionado


**27. (Correlação)**
Associe cada tipo de dado à arquitetura mais apropriada:

| Tipo de Dado         | Arquitetura           |
| :------------------- | :-------------------- |
| (A) Imagens          | (1) CNN               |
| (B) Séries Temporais | (2) RNN               |
| (C) Texto            | (3) RNN / Transformer |
| (D) Dados tabulares  | (4) DNN               |


**28. (Dissertativa)**
Descreva a importância da **normalização e padronização dos dados** antes do treinamento.


**29. (Análise de Código)**
Dado:

```python
from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3)
kmeans.fit(X)
```

Explique o que ocorre internamente durante a execução de `fit()`.


**30. (Dissertativa final)**
Cite **duas limitações** das redes neurais profundas e **duas vantagens** do uso de SVM em comparação.
