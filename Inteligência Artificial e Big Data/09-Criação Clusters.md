# Criando Clusters Personalizados

Nesta aula, vamos aplicar o **K-Means**, um dos algoritmos mais usados para clusterização.


## 1. Como funciona o K-Means?

1. O algoritmo escolhe **k centros (centroids)** iniciais.  
2. Cada cliente é atribuído ao centro mais próximo.  
3. Os centros são ajustados até estabilizar.  

É importante **normalizar** os dados: variáveis em escalas diferentes (ex: renda em milhares vs. idade em anos) podem distorcer o agrupamento.


## 2. Selecionando variáveis e normalizando

```python
from sklearn.preprocessing import StandardScaler

# Selecionar variáveis para testar
variaveis = ["idade", "renda_mensal", "anos_cliente", "gasto_ult_12m"]

X = df[variaveis]

# Normalização
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
````


## 3. Executando o K-Means

```python
from sklearn.cluster import KMeans

# Definir número de clusters
k = 4

kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
df["novo_cluster"] = kmeans.fit_predict(X_scaled)

df[variaveis + ["novo_cluster"]].head()
```


## 4. Visualização dos grupos

```python
# Gráfico 2D de Idade x Renda
sns.scatterplot(data=df, x="idade", y="renda_mensal", hue="novo_cluster", palette="Set2")
plt.title("Clusters de Clientes (Idade x Renda)")
plt.show()

# Distribuição dos gastos por cluster
sns.boxplot(data=df, x="novo_cluster", y="gasto_ult_12m")
plt.title("Gasto Anual por Cluster")
plt.show()
```


## Tarefa prática

* Teste diferentes valores de `k` (3, 4, 5...).
* Alterne as variáveis escolhidas (ex: remover renda, incluir km\_rodados).
* Compare como os grupos mudam em cada cenário.
