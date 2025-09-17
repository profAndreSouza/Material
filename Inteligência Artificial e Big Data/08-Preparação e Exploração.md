# Preparação e Exploração dos Dados

Nesta primeira parte, vamos:
1. Relembrar o objetivo da clusterização.
2. Carregar e explorar o dataset de clientes.
3. Entender as variáveis disponíveis.
4. Preparar os dados para aplicar algoritmos de agrupamento.


## 1. O que é clusterização?

Clusterização é uma técnica de **aprendizado de máquina não supervisionado**, usada para **agrupar elementos semelhantes** em subconjuntos (chamados de clusters).  
Na prática, queremos identificar **perfis de clientes** que tenham comportamentos próximos — como faixa de renda, idade, gastos e tipo de veículo preferido.


## 2. Importando bibliotecas e dataset

```python
# Bibliotecas
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Carregar dataset
df = pd.read_excel("clientes_segmentados.xlsx")

# Remover coluna 'cluster' já existente (vamos criar os nossos depois)
if "cluster" in df.columns:
    df = df.drop(columns=["cluster"])

# Primeiras linhas
df.head()
```


## 3. Estrutura e estatísticas básicas

```python
# Informações gerais
df.info()

# Estatísticas descritivas (numéricas)
df.describe()
```

* **idade**: faixa etária dos clientes.
* **renda\_mensal**: capacidade de compra.
* **anos\_cliente**: tempo de relacionamento com a concessionária.
* **km\_rodados**: uso do veículo.
* **gasto\_ult\_12m**: quanto gastou em serviços ou compras no último ano.
* **tipo\_veiculo / forma\_pagamento / possui\_seguro**: variáveis categóricas.

## 4. Visualizações iniciais

```python
# Distribuição da renda mensal
df['renda_mensal'].hist(bins=20)
plt.title("Distribuição da Renda Mensal")
plt.show()

# Relação entre idade e renda
sns.scatterplot(data=df, x="idade", y="renda_mensal")
plt.title("Idade x Renda")
plt.show()
```


## Discussão

* Quais variáveis parecem mais úteis para diferenciar clientes?
* Existe diferença clara entre clientes de alta e baixa renda?
* Algum dado indica fidelização (ex: anos\_cliente)?
