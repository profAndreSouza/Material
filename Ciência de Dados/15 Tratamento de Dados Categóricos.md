# Aula 14 – Tratamento de Dados Categóricos

## Objetivos da Aula

* Entender o que são dados categóricos e suas características.
* Aprender a descrever dados categóricos por meio de frequências absolutas e relativas.
* Construir gráficos de barras e gráficos de setores para visualização das categorias.
* Aplicar esses conceitos usando Python (Pandas, Matplotlib/Seaborn) no Google Colab.
* Desenvolver um projeto prático para análise de categorias de produtos vendidos.


## 1. O que são Dados Categóricos?

* Representam qualidades ou classificações, e não valores numéricos.
* Exemplo: gênero, categoria de produto, estado civil, tipo de produto.
* Classificação:

  * Nominais: sem ordem (ex: cor, nome).
  * Ordinais: com ordem (ex: avaliação de satisfação: baixa, média, alta).

## 2. Visualização de Dados Categóricos

* Gráficos de Barras: comparar frequência de cada categoria.
* Gráficos de Setores (Pizza): mostrar proporção relativa de categorias.
* Ferramentas usadas: `value_counts()`, `plot(kind='bar')`, `plot.pie()`, Seaborn.

## 3. Descrição Estatística de Dados Categóricos

* Frequência absoluta e relativa.
* Tabelas de contingência (`pd.crosstab()`).
* Medidas aplicáveis como moda.


## Exemplo

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Dataset fictício de vendas
dados = pd.DataFrame({
    'Produto': ['Notebook', 'Celular', 'Tablet', 'Notebook', 'Celular', 'Notebook', 'Tablet', 'Celular'],
    'Categoria': ['Informática', 'Telefonia', 'Informática', 'Informática', 'Telefonia', 'Informática', 'Informática', 'Telefonia']
})

# Frequência de categorias
frequencia = dados['Categoria'].value_counts()
print(frequencia)

# Gráfico de barras
frequencia.plot(kind='bar', color='skyblue', title='Vendas por Categoria')
plt.xlabel('Categoria')
plt.ylabel('Quantidade')
plt.grid(True)
plt.show()

# Gráfico de pizza
frequencia.plot.pie(autopct='%1.1f%%', figsize=(6, 6), title='Distribuição de Categorias')
plt.ylabel('')
plt.show()
```

## Projeto Prático: Visualização de Categorias de Produtos Vendidos

Descrição:
Analisar um dataset de vendas de e-commerce com colunas como Produto, Categoria, Valor e Data.

Tarefas:

* Gerar tabela de frequência por categoria.
* Criar gráfico de barras com número de vendas por categoria.
* Criar gráfico de pizza com participação percentual por categoria.
* Interpretar os resultados (qual categoria mais vende, qual menos aparece, equilíbrio entre categorias).

Sugestão de extensão:
Agrupar por períodos (ex: meses) e gerar gráficos empilhados para visualizar evolução temporal das categorias.


## Referências Bibliográficas

1. PEREIRA, André L. V. et al. *Estatística Aplicada à Administração e Economia*. 2. ed. São Paulo: Cengage Learning, 2017.

2. MCKINNEY, Wes. *Python para Análise de Dados*. 2. ed. Rio de Janeiro: Alta Books, 2018.

3. GUEDES, Jussara Marques. *Estatística: uma abordagem intuitiva*. 1. ed. São Paulo: Saraiva Educação, 2020.

4. DASGUPTA, Anurag. *Machine Learning com Python para Leigos*. 1. ed. Porto Alegre: Bookman, 2021.
