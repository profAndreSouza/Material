# Parte 3 – Análise de Dados com Pandas

## 12. Introdução ao Pandas: Series e DataFrames

O **Pandas** é a biblioteca mais usada em ciência de dados para **manipulação e análise de dados estruturados**.
Enquanto o NumPy trabalha bem com números em arrays, o Pandas foi criado para lidar com **tabelas** (semelhantes a planilhas do Excel).

Principais estruturas:

* **Series**: vetor unidimensional com rótulos (índices).
* **DataFrame**: tabela bidimensional com linhas e colunas, onde cada coluna é uma Series.

Importando o Pandas:

```python
import pandas as pd
```

Exemplo de Series e DataFrame:

```python
# Criando uma Series
notas = pd.Series([8.5, 7.0, 9.0, 6.5], name="nota")

# Criando um DataFrame
dados = pd.DataFrame({
    "nome": ["Maria", "João", "Ana", "Pedro"],
    "nota": [8.5, 7.0, 9.0, 6.5]
})
```

---

## 13. Importando e Explorando Dados

Uma das principais utilidades do Pandas é importar dados de arquivos como CSV e Excel.

```python
# Lendo um arquivo CSV
dados = pd.read_csv("notas.csv")

# Visualizando as primeiras linhas
print(dados.head())
```

Exploração inicial:

```python
print(dados.info())   # informações sobre colunas e tipos
print(dados.shape)    # número de linhas e colunas
print(dados.columns)  # nomes das colunas
```

---

## 14. Seleção, Filtragem e Ordenação

Podemos selecionar colunas, filtrar linhas com base em condições e ordenar dados.

```python
# Selecionar uma coluna
print(dados["nota"])

# Selecionar múltiplas colunas
print(dados[["nome", "nota"]])

# Filtrar alunos com nota >= 7
aprovados = dados[dados["nota"] >= 7]

# Ordenar por nota
ordenados = dados.sort_values("nota", ascending=False)
```

---

## 15. Estatísticas Descritivas Rápidas

O Pandas fornece métodos prontos para calcular estatísticas básicas.

```python
print(dados["nota"].mean())     # média
print(dados["nota"].max())      # valor máximo
print(dados["nota"].min())      # valor mínimo
print(dados["nota"].describe()) # resumo estatístico
```

---

## 16. Manipulação de Dados

O Pandas facilita o tratamento de dados, que muitas vezes vêm incompletos ou desorganizados.

### Tratamento de valores nulos

```python
# Identificar valores nulos
print(dados.isnull().sum())

# Preencher valores nulos
dados["nota"].fillna(dados["nota"].mean(), inplace=True)
```

### Criação de novas colunas

```python
# Criar coluna de situação (aprovado/reprovado)
dados["situacao"] = dados["nota"].apply(lambda x: "Aprovado" if x >= 7 else "Reprovado")
```

### Remover colunas ou linhas

```python
# Remover coluna
dados = dados.drop(columns=["situacao"])

# Remover linhas com nota nula
dados = dados.dropna(subset=["nota"])
```

---

## 17. Exemplos Práticos em Ciência de Dados

### Exemplo 1: Analisando tabela de vendas

```python
vendas = pd.DataFrame({
    "produto": ["A", "B", "C", "A", "B", "C"],
    "quantidade": [10, 5, 8, 7, 3, 4],
    "preco": [100, 200, 150, 100, 200, 150]
})

# Receita total por produto
vendas["receita"] = vendas["quantidade"] * vendas["preco"]
print(vendas.groupby("produto")["receita"].sum())
```

### Exemplo 2: Filtrando dados de alunos

```python
alunos = pd.DataFrame({
    "nome": ["Maria", "João", "Ana", "Pedro"],
    "nota": [8.5, 6.0, 9.0, 5.5]
})

# Selecionar apenas aprovados
aprovados = alunos[alunos["nota"] >= 7]
print(aprovados)
```