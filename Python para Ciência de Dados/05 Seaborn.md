# Parte 5 – Visualização com Seaborn

## 23. O que é o Seaborn e por que usá-lo

O **Seaborn** é uma biblioteca de visualização de dados construída sobre o Matplotlib.
Sua principal vantagem é que, com poucas linhas de código, é possível gerar gráficos **estatísticos** com design moderno, sem precisar configurar muitos detalhes manualmente.

Diferenciais em relação ao Matplotlib:

* Gráficos com estética aprimorada por padrão.
* Suporte direto a **DataFrames do Pandas**.
* Funções prontas para gráficos estatísticos como boxplot, violinplot e heatmap.

Instalação:

```bash
pip install seaborn
```

Importação:

```python
import seaborn as sns
import matplotlib.pyplot as plt
```

---

## 24. Gráficos Básicos com Seaborn

Assim como no Matplotlib, é possível criar gráficos simples, mas de forma mais rápida e estilizada.

### Gráfico de dispersão (scatter plot)

```python
import pandas as pd

dados = pd.DataFrame({
    "idade": [18, 22, 25, 30, 35, 40, 45, 50],
    "salario": [1200, 1500, 1800, 2500, 3000, 3500, 4000, 4500]
})

sns.scatterplot(x="idade", y="salario", data=dados)
plt.title("Idade x Salário")
plt.show()
```

### Gráfico de linhas

```python
meses = ["Jan", "Fev", "Mar", "Abr", "Mai"]
vendas = [100, 120, 90, 140, 160]
dados = pd.DataFrame({"mes": meses, "vendas": vendas})

sns.lineplot(x="mes", y="vendas", data=dados, marker="o")
plt.title("Evolução das vendas")
plt.show()
```

---

## 25. Gráficos Estatísticos

Uma das maiores forças do Seaborn é a capacidade de gerar gráficos que **resumem distribuições estatísticas**.

### Boxplot

Mostra a distribuição dos dados, destacando medianas e outliers.

```python
notas = pd.DataFrame({
    "turma": ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    "nota": [7.5, 8.0, 6.5, 6.0, 6.5, 7.0, 8.2, 8.5, 9.0]
})

sns.boxplot(x="turma", y="nota", data=notas)
plt.title("Distribuição de notas por turma")
plt.show()
```

### Violinplot

Combina boxplot com a densidade da distribuição.

```python
sns.violinplot(x="turma", y="nota", data=notas)
plt.title("Distribuição detalhada de notas por turma")
plt.show()
```

### Histograma e distribuição

```python
sns.histplot(notas["nota"], bins=5, kde=True)
plt.title("Distribuição de notas")
plt.show()
```

---

## 26. Gráficos de Correlação e Heatmaps

O Seaborn facilita a visualização de correlações entre variáveis numéricas.

```python
dados = pd.DataFrame({
    "idade": [18, 22, 25, 30, 35, 40, 45, 50],
    "salario": [1200, 1500, 1800, 2500, 3000, 3500, 4000, 4500],
    "gastos": [1000, 1200, 1400, 1800, 2200, 2500, 2800, 3200]
})

correlacao = dados.corr()
sns.heatmap(correlacao, annot=True, cmap="Blues")
plt.title("Matriz de correlação")
plt.show()
```

---

## 27. Exemplos Práticos em Ciência de Dados

### Exemplo 1: Comparando distribuições de vendas

```python
vendas = pd.DataFrame({
    "produto": ["A", "A", "A", "B", "B", "B", "C", "C", "C"],
    "valor": [100, 120, 90, 140, 150, 160, 200, 180, 170]
})

sns.boxplot(x="produto", y="valor", data=vendas)
plt.title("Distribuição de valores por produto")
plt.show()
```

### Exemplo 2: Relação entre duas variáveis

```python
sns.scatterplot(x="idade", y="gastos", data=dados, hue="salario", size="salario")
plt.title("Idade x Gastos com variação de salário")
plt.show()
```
