# **Aula 3 – Aprendizado Supervisionado**

## **1. Contextualização Inicial (5–10 min)**

Na última aula, tratamos e preparamos o dataset da empresa de varejo. Agora chegamos ao momento de **modelar** os dados para prever o comportamento dos clientes.

**Pergunta central:**

> “Com base no histórico de interações e compras, qual a probabilidade de um cliente comprar nos próximos 30 dias?”

O objetivo é treinar **modelos supervisionados** para classificar clientes em dois grupos:
- **1 (vai comprar)**  
- **0 (não vai comprar)**  


## **2. Fundamentos do Aprendizado Supervisionado**

### 2.1 O que é aprendizado supervisionado?
- Técnica de **Machine Learning** em que o modelo aprende a partir de **exemplos rotulados** (inputs → outputs conhecidos).
- O algoritmo tenta encontrar **padrões** que relacionam as variáveis de entrada (ex.: idade, ticket médio, uso de cupom) com a variável de saída (vai comprar ou não).

### 2.2 Diferença entre regressão e classificação
- **Regressão:** prever valores numéricos contínuos.  
  Ex.: prever quanto um cliente vai gastar.
- **Classificação:** prever categorias ou rótulos.  
  Ex.: prever se o cliente vai comprar (sim/não).

### 2.3 Algoritmos principais para esta aula
- **Regressão Logística**
  - Calcula a probabilidade de um cliente comprar.
  - Bom para interpretar pesos das variáveis.
- **Árvore de Decisão**
  - Constrói regras simples (se/então).
  - Fácil de interpretar e visualizar.


## **3. Preparação para a Modelagem**

### 3.1 Divisão treino e teste
- Dividir o dataset em dois conjuntos:
  - **Treino (70–80%)**: usado para treinar o modelo.
  - **Teste (20–30%)**: usado para avaliar se o modelo generaliza bem.

### 3.2 Validação cruzada
- Técnica para avaliar o desempenho em múltiplas divisões dos dados.
- Evita conclusões baseadas em um único “corte”.


## **4. Atividade Prática Orientada**

### Passos no Google Colab/Jupyter:
```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# 1. Carregar o dataset tratado da aula anterior
df = pd.read_csv("clientes_varejo_tratado.csv")

# 2. Definir variáveis de entrada (X) e saída (y)
X = df.drop("vai_comprar_30d", axis=1)
y = df["vai_comprar_30d"]

# 3. Dividir em treino e teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 4. Treinar regressão logística
log_model = LogisticRegression(max_iter=1000)
log_model.fit(X_train, y_train)

# 5. Treinar árvore de decisão
tree_model = DecisionTreeClassifier(max_depth=4, random_state=42)
tree_model.fit(X_train, y_train)

# 6. Avaliar acurácia inicial
print("Acurácia Regressão Logística:", accuracy_score(y_test, log_model.predict(X_test)))
print("Acurácia Árvore de Decisão:", accuracy_score(y_test, tree_model.predict(X_test)))
```


## **5. Discussão em Grupo**

* Quais variáveis parecem mais relevantes nos modelos?
* A árvore de decisão gerou regras compreensíveis?
* O que significa “probabilidade” na regressão logística?

## **6. Produto Esperado**

* Dois modelos treinados: **Regressão Logística** e **Árvore de Decisão**.
* Análise inicial das diferenças entre eles.
* Dataset dividido em treino e teste, pronto para avaliação com métricas na próxima aula.
