# Interpretação, Estratégias e Ética

Nesta etapa vamos:

1. Analisar estatísticas e gráficos dos clusters.
2. Criar personas a partir dos dados.
3. Relacionar padrões com estratégias comerciais.
4. Refletir sobre limitações e ética.


## 1. Estatísticas por cluster

```python
# Médias por cluster (somente variáveis numéricas)
df.groupby("novo_cluster").mean(numeric_only=True)
```

Esse resumo permite observar diferenças entre os clusters em termos de idade, renda e gastos.

## 2. Visualizações Isoladas

### 2.1 Distribuição da idade

```python
sns.histplot(data=df, x="idade", bins=20, hue="novo_cluster", multiple="stack")
plt.title("Distribuição da Idade por Cluster")
plt.show()
```

**Justificativa:** histogramas mostram a **faixa etária predominante** em cada cluster, evidenciando concentrações (jovens, adultos, idosos).


### 2.2 Boxplot da renda mensal

```python
sns.boxplot(data=df, x="novo_cluster", y="renda_mensal")
plt.title("Distribuição da Renda Mensal por Cluster")
plt.show()
```

**Justificativa:** boxplots permitem comparar **distribuições e outliers** entre clusters, mostrando claramente diferenças de poder aquisitivo.


### 2.3 Gasto anual em serviços

```python
sns.violinplot(data=df, x="novo_cluster", y="gasto_ult_12m", inner="quartile")
plt.title("Distribuição dos Gastos no Último Ano por Cluster")
plt.show()
```

**Justificativa:** violin plots combinam boxplot + densidade, permitindo visualizar **quanto cada grupo gasta e a variabilidade interna**.


## 3. Visualizações Combinadas

### 3.1 Idade x Renda

```python
sns.scatterplot(data=df, x="idade", y="renda_mensal", hue="novo_cluster", alpha=0.7, palette="Set2")
plt.title("Idade x Renda por Cluster")
plt.show()
```

**Justificativa:** scatterplots revelam **relações entre variáveis**. Aqui, ajuda a identificar perfis de clientes com alta renda em diferentes idades.


### 3.2 Tempo como cliente x Gasto anual

```python
sns.scatterplot(data=df, x="anos_cliente", y="gasto_ult_12m", hue="novo_cluster", alpha=0.7)
plt.title("Tempo de Relacionamento x Gasto Anual por Cluster")
plt.show()
```

**Justificativa:** mostra se clientes mais antigos realmente gastam mais, ou se a fidelidade não se traduz em receita.


### 3.3 Renda x Gasto anual

```python
sns.scatterplot(data=df, x="renda_mensal", y="gasto_ult_12m", hue="novo_cluster", alpha=0.7)
plt.title("Renda Mensal x Gasto Anual por Cluster")
plt.show()
```

**Justificativa:** avalia se existe **relação direta entre renda e gasto** — fundamental para pensar em estratégias de venda.


## 4. Visualizações Categóricas

### 4.1 Tipo de veículo por cluster

```python
sns.countplot(data=df, x="novo_cluster", hue="tipo_veiculo")
plt.title("Distribuição de Tipos de Veículo por Cluster")
plt.show()
```

**Justificativa:** gráficos de barras permitem comparar preferências de veículos dentro de cada grupo.


### 4.2 Forma de pagamento por cluster

```python
sns.countplot(data=df, x="novo_cluster", hue="forma_pagamento")
plt.title("Forma de Pagamento por Cluster")
plt.show()
```

**Justificativa:** mostra se determinados grupos preferem financiamento, leasing ou pagamento à vista — dado estratégico para campanhas.


 Com esses gráficos:

* **Variáveis isoladas** → mostram como cada característica varia dentro dos grupos.
* **Variáveis combinadas** → revelam correlações e ajudam a interpretar perfis.
* **Variáveis categóricas** → traduzem preferências de consumo e formas de pagamento.
