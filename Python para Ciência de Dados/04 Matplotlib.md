# Parte 4 – Visualização com Matplotlib

## 18. O Papel da Visualização em Ciência de Dados

A visualização é uma das etapas mais importantes da análise de dados, pois transforma tabelas e números em **gráficos compreensíveis**.
Com gráficos, é possível identificar padrões, tendências, comparações e anomalias de forma muito mais intuitiva.

O **Matplotlib** é a biblioteca mais tradicional de visualização em Python. Apesar de outras bibliotecas existirem (como Seaborn e Plotly), o Matplotlib é a base sobre a qual muitas delas foram construídas.

Para começar:

```python
import matplotlib.pyplot as plt
```

---

## 19. Gráficos Básicos

O Matplotlib permite criar diferentes tipos de gráficos com poucos comandos.

### Gráfico de linha

Usado para mostrar evolução ao longo do tempo.

```python
meses = ["Jan", "Fev", "Mar", "Abr", "Mai"]
vendas = [100, 120, 90, 140, 160]

plt.plot(meses, vendas)
plt.title("Vendas ao longo dos meses")
plt.xlabel("Meses")
plt.ylabel("Vendas")
plt.show()
```

### Gráfico de barras

Bom para comparar categorias.

```python
produtos = ["Produto A", "Produto B", "Produto C"]
quantidades = [50, 70, 30]

plt.bar(produtos, quantidades)
plt.title("Quantidade vendida por produto")
plt.xlabel("Produto")
plt.ylabel("Quantidade")
plt.show()
```

### Gráfico de pizza

Mostra proporções.

```python
categorias = ["Eletrônicos", "Roupas", "Alimentos"]
participacao = [40, 35, 25]

plt.pie(participacao, labels=categorias, autopct="%1.1f%%")
plt.title("Participação nas vendas")
plt.show()
```

### Histograma

Mostra a distribuição dos dados.

```python
idades = [18, 20, 22, 22, 23, 25, 30, 30, 30, 35, 40, 45, 50]

plt.hist(idades, bins=5, edgecolor="black")
plt.title("Distribuição de idades")
plt.xlabel("Faixa etária")
plt.ylabel("Frequência")
plt.show()
```

---

## 20. Customização de Gráficos

O Matplotlib permite ajustar diversos elementos: cores, estilos de linha, rótulos e legendas.

```python
anos = [2020, 2021, 2022, 2023]
lucros = [2000, 2500, 2200, 3000]

plt.plot(anos, lucros, color="green", marker="o", linestyle="--")
plt.title("Lucro anual")
plt.xlabel("Ano")
plt.ylabel("Lucro")
plt.grid(True)
plt.legend(["Lucro"])
plt.show()
```

---

## 21. Plotando Dados Diretamente do Pandas

O Pandas possui integração nativa com o Matplotlib, o que facilita a criação de gráficos a partir de DataFrames.

```python
import pandas as pd

dados = pd.DataFrame({
    "ano": [2020, 2021, 2022, 2023],
    "lucro": [2000, 2500, 2200, 3000]
})

dados.plot(x="ano", y="lucro", kind="line", marker="o", title="Lucro por ano")
plt.show()
```

---

## 22. Exemplos Práticos em Ciência de Dados

### Exemplo 1: Evolução das vendas ao longo do tempo

```python
meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"]
vendas = [100, 120, 90, 140, 160, 180]

plt.plot(meses, vendas, marker="o")
plt.title("Evolução das vendas")
plt.xlabel("Meses")
plt.ylabel("Vendas")
plt.show()
```

### Exemplo 2: Comparação de notas por turma

```python
turmas = ["Turma A", "Turma B", "Turma C"]
medias = [7.5, 6.8, 8.2]

plt.bar(turmas, medias, color=["blue", "orange", "green"])
plt.title("Média de notas por turma")
plt.xlabel("Turma")
plt.ylabel("Média")
plt.show()
```

### Exemplo 3: Distribuição de idades em um dataset

```python
idades = [18, 19, 20, 22, 22, 23, 25, 28, 30, 30, 30, 35, 40, 45, 50]

plt.hist(idades, bins=6, edgecolor="black", color="purple")
plt.title("Distribuição de idades dos alunos")
plt.xlabel("Idade")
plt.ylabel("Frequência")
plt.show()
```
