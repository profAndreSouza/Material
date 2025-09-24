# Criação de Clusters com K-Means

Nesta aula vamos aprofundar a técnica de **clusterização** utilizando o algoritmo **K-Means**, amplamente utilizado para identificar padrões e grupos em grandes bases de dados, sendo muito aplicado em marketing, análise de clientes, segmentação de produtos e detecção de anomalias.


## 1. Conceito Teórico

**Clusterização** é uma técnica de **aprendizado não supervisionado**, ou seja, **não precisamos de rótulos** para os dados. O objetivo é **agrupá-los em clusters**, de forma que os objetos dentro de um mesmo grupo sejam mais semelhantes entre si do que em relação aos objetos de outros grupos.

O **K-Means** é um algoritmo iterativo baseado em centroides que realiza:

1. Definição do número de clusters (`k`).
2. Seleção aleatória dos **centroides iniciais**.
3. Atribuição de cada ponto ao **cluster mais próximo**, geralmente medido pela **distância Euclidiana**.
4. Recalculo dos centroides com base nos pontos atribuídos.
5. Repetição do processo até que os clusters **se estabilizem** (centroides não mudam significativamente ou atingem um número máximo de iterações).

> **Exemplo simples:** Um supermercado deseja segmentar seus clientes com base em **idade e gasto mensal**. O K-Means poderá identificar grupos como “jovens com gasto baixo”, “adultos com gasto médio” e “clientes de alta renda com alto consumo”.

> **Exemplo adicional:** Em saúde, hospitais podem usar K-Means para agrupar pacientes com características semelhantes (idade, pressão arterial, peso, histórico de doenças), ajudando a definir protocolos de atendimento específicos.



### Centroides

Um **centroide** é o **ponto central de um cluster**, calculado como a **média de todos os pontos que pertencem a esse cluster**. Ele serve como referência para definir o “coração” do grupo.

* Em termos matemáticos, para um cluster com pontos $x_1, x_2, ..., x_n$ em um espaço com `m` variáveis, o centroide $C$ é:

$$
C = \left( \frac{\sum_{i=1}^{n} x_{i1}}{n}, \frac{\sum_{i=1}^{n} x_{i2}}{n}, ..., \frac{\sum_{i=1}^{n} x_{im}}{n} \right)
$$

Ou seja, **a média de cada dimensão**.


#### Função no K-Means

* O algoritmo começa escolhendo **centroides iniciais** aleatórios.
* Cada ponto é atribuído ao cluster cujo centroide está mais próximo.
* Depois, recalcula-se o centroide como a **média dos pontos do cluster**.
* Esse processo se repete até que os centroides **não mudem mais significativamente**, ou seja, os clusters se estabilizam.

> **Analogia simples:** imagine que você quer organizar pessoas em grupos de amigos com interesses parecidos. Cada grupo terá um “ponto central” que representa o perfil médio do grupo — esse é o **centroide**.


#### Exemplos

1. **Clientes de um supermercado**

   * Variáveis: idade e gasto mensal.
   * Um cluster de jovens com gasto baixo terá um centroide em torno de 22 anos e R\$150 de gasto.
   * Outro cluster de adultos com alto gasto terá um centroide em torno de 45 anos e R\$1.200 de gasto.

2. **Geolocalização**

   * Variáveis: latitude e longitude.
   * Um centroide representa o **ponto médio** de todas as localizações em um cluster, podendo ser usado, por exemplo, para posicionar um depósito mais próximo dos clientes.


## 2. Importância da Normalização

Quando trabalhamos com variáveis em **escalas diferentes**, a magnitude de uma variável pode dominar o cálculo de distância, distorcendo os clusters.

* **Exemplo:** Se `idade` varia entre 18–80 e `renda` entre 1.000–20.000, a renda terá muito mais peso que a idade.
* **Solução:** **normalização ou padronização**, que transforma os dados em uma mesma escala (média zero e desvio padrão 1).

```python
from sklearn.preprocessing import StandardScaler

variaveis = ["idade", "renda_mensal", "anos_cliente", "gasto_ult_12m"]
X = df[variaveis]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```

> **Dica prática:** Sempre aplique normalização quando as variáveis tiverem **unidades ou escalas diferentes**, especialmente quando incluem valores monetários e contagens.



## 3. Definição do Número de Clusters (k)

Escolher `k` corretamente é **crucial** para que os clusters sejam significativos. Algumas abordagens:

1. **Método do Cotovelo (Elbow Method):**

   * Plota a **inércia** (soma das distâncias dos pontos aos centroides) para diferentes valores de `k`.
   * Procura o ponto onde a redução da inércia **começa a diminuir de forma menos acentuada** (o “cotovelo”).

2. **Coeficiente de Silhueta:**

   * Mede **coesão e separação** dos clusters.
   * Valores próximos de 1 indicam clusters bem separados e compactos.

```python
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

inercia = []
for k in range(2, 10):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inercia.append(kmeans.inertia_)

plt.plot(range(2, 10), inercia, marker='o')
plt.title("Método do Cotovelo")
plt.xlabel("Número de Clusters (k)")
plt.ylabel("Inércia")
plt.show()
```

> **Exemplo:** Em análise de clientes, o cotovelo pode indicar que **4 grupos** representam melhor os perfis de consumo, evitando clusters redundantes ou muito pequenos.



## 4. Executando o K-Means

Após definir `k`, podemos aplicar o algoritmo e **atribuir cada registro a um cluster**:

```python
k = 4  # Exemplo escolhido
kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
df["novo_cluster"] = kmeans.fit_predict(X_scaled)

df[variaveis + ["novo_cluster"]].head()
```

> **Exemplo:** Agora cada cliente tem um rótulo de cluster (0 a 3), permitindo análise de perfis como “jovem com baixo gasto” ou “adulto com alto consumo”.



## 5. Visualizando os Grupos

A visualização é essencial para **interpretar e validar** os clusters:

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Gráfico 2D: Idade x Renda
sns.scatterplot(data=df, x="idade", y="renda_mensal", hue="novo_cluster", palette="Set2")
plt.title("Clusters de Clientes (Idade x Renda)")
plt.show()

# Gasto anual por cluster
sns.boxplot(data=df, x="novo_cluster", y="gasto_ult_12m")
plt.title("Distribuição de Gastos por Cluster")
plt.show()
```

> **Exemplo prático:** Podemos observar se há grupos como:
>
> * Jovens com baixa renda e baixo gasto
> * Adultos com renda média e consumo médio
> * Clientes de alta renda com alto gasto

> **Exemplo adicional:** Para campanhas de marketing, podemos criar promoções específicas para cada grupo, como descontos para clientes de baixa renda ou ofertas premium para clientes de alta renda.



## 6. Testes e Exploração

Experimentar diferentes cenários ajuda a **refinar os clusters**:

* Variar o número de clusters (`k=3,4,5...`).
* Alterar variáveis de entrada (ex.: incluir **tipo de veículo**, **localização geográfica** ou **forma de pagamento**).
* Avaliar **estabilidade**: se pequenas alterações nos dados mudam muito os clusters, talvez seja necessário revisar as variáveis.

> **Exemplo prático:** Ao incluir a variável `tempo de fidelidade`, podemos perceber que clientes com tempo longo de relacionamento se agrupam separadamente, revelando insights sobre retenção.



## 7. Limitações e Cuidados

* **Sensibilidade a outliers:** Pontos muito diferentes podem distorcer centroides.
* **Definição de `k`:** Não há regra fixa; exige análise do negócio.
* **Interpretabilidade:** Os clusters não têm significado automático, precisam ser analisados com contexto.

> **Exemplo crítico:** Dois clientes com mesma renda podem ter hábitos de consumo completamente diferentes. Incluir mais variáveis, como tipo de produto comprado, pode melhorar a clusterização.



## 8. Tarefa Prática

1. Teste diferentes valores de `k` e observe como os clusters mudam.
2. Compare cenários variando as variáveis utilizadas.
3. Analise os **perfils emergentes** e proponha estratégias ou ações para cada grupo.
4. Reflita sobre como **outliers** e **escalas diferentes** afetam os resultados.
