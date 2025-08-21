# **Aula 3 – Aprendizado Supervisionado**

## **1. Contextualização Inicial**

Na última aula, tratamos e preparamos o dataset da empresa de varejo. Agora chegamos ao momento de **modelar** os dados para prever o comportamento dos clientes.

**Pergunta central:**

> “Com base no histórico de interações e compras, qual a probabilidade de um cliente comprar nos próximos 30 dias?”

O objetivo é treinar **modelos supervisionados** para classificar clientes em dois grupos:
- **1 (vai comprar)**  
- **0 (não vai comprar)**  


## **2. Fundamentos do Aprendizado Supervisionado**

### 2.1 O que é aprendizado supervisionado?

O **aprendizado supervisionado** é uma das técnicas mais utilizadas em **Machine Learning**.
Segundo **Medeiros (2018)**, o princípio básico é oferecer ao algoritmo **exemplos rotulados**, ou seja, dados de entrada acompanhados da saída correta, para que ele aprenda uma relação matemática ou estatística entre eles.
Depois do treinamento, o modelo é capaz de **generalizar** e prever resultados para novos dados, mesmo que nunca os tenha visto antes.

* **Exemplo prático (varejo):**

  * **Entrada (X):** idade do cliente, frequência de compras, ticket médio, número de visitas ao site.
  * **Saída (y):** variável binária `vai_comprar_30d` (0 = não compra, 1 = compra).
  * O modelo aprende os padrões no histórico e tenta prever se um novo cliente, com base em seu perfil, comprará ou não.

Segundo **Valdati (2020)**, essa técnica é considerada “supervisionada” porque o processo de treinamento é acompanhado por um **supervisor** (o rótulo correto), que guia o aprendizado.


### 2.2 Diferença entre Regressão e Classificação

No aprendizado supervisionado existem duas tarefas principais: **regressão** e **classificação**.

* **Regressão (saída numérica contínua):**
  O objetivo é prever **valores quantitativos**.

  * Exemplo no varejo: prever **quanto um cliente irá gastar no próximo mês** com base em seu histórico.
  * Exemplo simples:

    * Cliente A comprou R\$ 500 nos últimos 12 meses → previsão = R\$ 60 no próximo mês.
    * Cliente B comprou R\$ 3.000 nos últimos 12 meses → previsão = R\$ 350 no próximo mês.

* **Classificação (saída categórica):**
  O objetivo é prever **categorias ou rótulos**.

  * Exemplo no varejo: prever se um cliente **vai comprar (1)** ou **não vai comprar (0)**.
  * Exemplo simples:

    * Cliente C: frequência de 12 compras/ano, ticket médio alto, usa cupons → modelo prevê classe = “vai comprar”.
    * Cliente D: poucas compras, ticket baixo, não abre e-mails → modelo prevê classe = “não vai comprar”.

**Resumo comparativo:**

| Tipo          | Saída             | Exemplo no Varejo               |
| ------------- | ----------------- | ------------------------------- |
| Regressão     | Numérica contínua | Valor previsto de compras (R\$) |
| Classificação | Categórica        | Vai comprar (Sim/Não)           |


### 2.3 Algoritmos principais para esta aula

Nesta aula vamos trabalhar com dois algoritmos básicos, mas que são a base para muitos projetos reais em ciência de dados.

#### **a) Regressão Logística**

* Apesar do nome, é usada em **classificação**.
* Gera como saída uma **probabilidade** (entre 0 e 1) de que o evento ocorra.
* No caso do varejo:

  * Cliente X → 0,82 → interpretamos como **82% de chance de comprar** nos próximos 30 dias.
  * Cliente Y → 0,15 → apenas **15% de chance de comprar**.
* Vantagem: permite identificar quais variáveis mais influenciam o resultado (ex.: “uso de cupom aumenta a probabilidade de compra”).

#### **b) Árvore de Decisão**

* Estrutura em formato de árvore, baseada em regras **“se... então...”**.
* Exemplo no varejo:

  * **Se** ticket\_médio > R\$ 200 **e** cliente usa cupons → prever “vai comprar”.
  * **Senão** → prever “não vai comprar”.
* Vantagem: fácil de interpretar e explicar para gestores, mostrando **regras de negócio** derivadas dos dados.
* Limitação: pode se tornar muito complexa (overfitting) se não for controlada (ex.: definindo profundidade máxima).

**Resumo prático para a empresa de varejo:**

* **Regressão Logística** → boa para interpretar o peso de cada variável (explicação mais estatística).
* **Árvore de Decisão** → boa para explicar de forma visual e gerar regras de negócio.



## **3. Preparação para a Modelagem**

Antes de treinar modelos de aprendizado supervisionado, é essencial preparar a forma como os dados serão usados.
Segundo **Medeiros (2018)**, um dos maiores erros em projetos de IA é **avaliar o modelo nos mesmos dados usados para treiná-lo**, pois isso cria uma falsa sensação de desempenho.
Já **Valdati (2020)** reforça que a qualidade da avaliação depende diretamente de boas práticas de separação de dados e validação.


### **3.1 Divisão treino e teste**

* A base de dados deve ser dividida em dois subconjuntos principais:

  * **Treino (70–80%)**: usado para **ensinar o modelo**, isto é, ajustar os parâmetros com base nos exemplos.
  * **Teste (20–30%)**: usado para **avaliar o modelo em dados inéditos**, verificando se ele generaliza além dos casos já vistos.

**Exemplo no varejo:**

* Dataset de 10.000 clientes.

  * 7.000 → treino
  * 3.000 → teste
* Se um cliente do teste nunca foi visto pelo modelo, mas ele consegue prever corretamente seu comportamento, significa que **o modelo está aprendendo padrões reais**.

**Analogia:**
É como estudar para uma prova.

* O **conjunto de treino** são os exercícios resolvidos no estudo.
* O **conjunto de teste** é a prova real, com questões diferentes.
  Se o aluno só souber repetir exatamente os exercícios vistos, mas não resolver novas questões, significa que ele **não aprendeu de verdade** – apenas decorou.


### **3.2 Validação cruzada**

A validação cruzada é uma técnica para **aumentar a confiabilidade da avaliação**.

* Em vez de usar apenas uma divisão treino/teste, o dataset é dividido em **várias partes (k-folds)**.
* O modelo é treinado em algumas partes e testado nas restantes, até que todas sejam usadas como teste uma vez.
* O desempenho final é a média dos resultados.

**Exemplo prático:**

* Dataset de 1.000 clientes dividido em **5 partes iguais** (k=5).

  * 1ª rodada → Treino: 800, Teste: 200
  * 2ª rodada → Treino: 800, Teste: 200
  * … (até cada parte ser usada como teste uma vez).

Resultado: se o modelo tiver uma acurácia média de **82%**, podemos confiar que ele tem um desempenho consistente, e não apenas sorte em uma divisão específica.


### **Por que isso é importante para o projeto?**

* Garante que o modelo não esteja apenas **decorando** os dados (overfitting).
* Permite comparar diferentes algoritmos de forma justa.
* Ajuda a empresa de varejo a confiar mais nos insights antes de aplicá-los em campanhas reais.


### **4. Atividade Prática Orientada**

Nesta atividade, vamos aplicar os conceitos de aprendizado supervisionado usando o **[Online Retail Dataset (UCI Machine Learning Repository)](https://archive.ics.uci.edu/ml/datasets/online+retail)**.

Esse dataset contém transações de uma loja de e-commerce no Reino Unido entre 2010 e 2011. Ele traz informações como:

* **InvoiceNo:** número da fatura.
* **StockCode / Description:** código e descrição do produto.
* **Quantity:** quantidade comprada.
* **InvoiceDate:** data da transação.
* **UnitPrice:** preço unitário.
* **CustomerID:** identificação do cliente.
* **Country:** país do cliente.

Para esta aula, vamos focar em criar uma variável-alvo simplificada: **se o cliente voltará a comprar em até 30 dias (1) ou não (0)**, baseada no histórico de transações.


#### **Bloco 1 – Importação de bibliotecas**

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.metrics import accuracy_score, confusion_matrix, roc_curve, auc
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
```

**O que faz:**

* Importa bibliotecas essenciais:

  * `pandas` → manipulação de dados;
  * `sklearn` → modelagem e avaliação;
  * `seaborn` e `matplotlib` → gráficos;
  * `numpy` → operações numéricas.


#### **Bloco 2 – Carregar o dataset**

```python
df = pd.read_excel("Online Retail.xlsx")
```

**O que faz:**

* Lê o arquivo Excel do dataset **Online Retail** e cria um DataFrame `df`.


#### **Bloco 3 – Pré-processamento**

```python
df = df.dropna(subset=["CustomerID"])
df["InvoiceDate"] = pd.to_datetime(df["InvoiceDate"])
recencia = df.groupby("CustomerID")["InvoiceDate"].max().reset_index()
recencia["dias_desde_ultima_compra"] = (df["InvoiceDate"].max() - recencia["InvoiceDate"]).dt.days
recencia["vai_comprar_30d"] = recencia["dias_desde_ultima_compra"].apply(lambda x: 1 if x <= 30 else 0)
```

**O que faz:**

1. Remove registros sem `CustomerID`.
2. Converte a coluna de datas para o formato datetime.
3. Calcula a **recência**: número de dias desde a última compra de cada cliente.
4. Cria a **variável alvo (`vai_comprar_30d`)**:

   * `1` → cliente comprou nos últimos 30 dias
   * `0` → cliente não comprou


#### **Bloco 4 – Separar variáveis de entrada e saída**

```python
X = recencia[["dias_desde_ultima_compra"]]
y = recencia["vai_comprar_30d"]
```

**O que faz:**

* Define `X` como variável independente (dias desde a última compra).
* Define `y` como variável dependente (probabilidade de recompra em 30 dias).

#### **Bloco 5 – Divisão treino/teste**

```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
```

**O que faz:**

* Divide os dados em **70% treino** e **30% teste** para avaliar modelos.


#### **Bloco 6 – Treinar modelos**

```python
log_model = LogisticRegression(max_iter=1000)
log_model.fit(X_train, y_train)

tree_model = DecisionTreeClassifier(max_depth=4, random_state=42)
tree_model.fit(X_train, y_train)
```

**O que faz:**

* Cria e treina:

  * **Regressão Logística** → modelo probabilístico;
  * **Árvore de Decisão** → modelo baseado em regras (máx profundidade=4).


#### **Bloco 7 – Avaliar acurácia**

```python
print("Acurácia Regressão Logística:", accuracy_score(y_test, log_model.predict(X_test)))
print("Acurácia Árvore de Decisão:", accuracy_score(y_test, tree_model.predict(X_test)))
```

**O que faz:**

* Mede **taxa de acerto** dos modelos no conjunto de teste.


#### **Bloco 8 – Análises gráficas**

1. **Matriz de Confusão**

```python
y_pred_tree = tree_model.predict(X_test)
cm = confusion_matrix(y_test, y_pred_tree)
sns.heatmap(cm, ...)
```

* Mostra acertos e erros do modelo de árvore de decisão.

2. **Curva ROC**

```python
y_prob_log = log_model.predict_proba(X_test)[:,1]
fpr, tpr, thresholds = roc_curve(y_test, y_prob_log)
roc_auc = auc(fpr, tpr)
```

* Avalia desempenho da regressão logística em termos de **sensibilidade vs. especificidade**.

3. **Probabilidades previstas**

```python
plt.scatter(X_test, y_prob_log, alpha=0.6, c=y_test, cmap="coolwarm", edgecolor="k")
```

* Visualiza a **probabilidade prevista de recompra** de cada cliente.

4. **Visualização da árvore de decisão**

```python
plot_tree(tree_model, feature_names=["dias_desde_ultima_compra"], ...)
```

* Mostra graficamente as **regras do modelo**.


#### **Bloco 9 – Exemplos interpretativos**

```python
y_probs = log_model.predict_proba(X_test)[:,1]
resultados = pd.DataFrame({...})
```

* Cria tabela com:

  * `CustomerID`
  * `Dias desde a última compra`
  * `Probabilidade prevista de recompra`
  * `Previsto` x `Real`

```python
for i, row in resultados.iterrows():
    ...
```

* Gera **interpretação em linguagem de negócio**: quem provavelmente vai ou não voltar a comprar.



**Resumo da lógica do fluxo:**

1. Carregar e limpar dados
2. Criar variável-alvo e features
3. Dividir treino/teste
4. Treinar **modelos de classificação**
5. Avaliar desempenho e gerar gráficos
6. Interpretar resultados para insights de negócio


### Reflexão prática

* A regressão logística nos dirá a **probabilidade de recompra** em função da recência.
* A árvore de decisão pode mostrar **regras simples**, como:

  * Se o cliente não compra há mais de 45 dias → baixa chance de recompra.
  * Se comprou nos últimos 10 dias → alta chance de recompra.


## **5. Discussão em Grupo**

* Quais variáveis parecem mais relevantes nos modelos?
* A árvore de decisão gerou regras compreensíveis?
* O que significa “probabilidade” na regressão logística?


## **6. Produto Esperado**

* Dois modelos treinados: **Regressão Logística** e **Árvore de Decisão**.
* Análise inicial das diferenças entre eles.
* Dataset dividido em treino e teste, pronto para avaliação com métricas na próxima aula.
