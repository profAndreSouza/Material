# Mini-projeto Integrador: Analisando Notas de Alunos

## Contexto

Você foi contratado para analisar o desempenho de alunos em uma disciplina de Ciência de Dados.
O objetivo é identificar:

* Como está a distribuição das notas.
* Qual a taxa de aprovação.
* Comparar o desempenho entre diferentes turmas.
* Produzir gráficos para comunicar os resultados.

Os dados estão em um arquivo CSV com as seguintes colunas:

`aluno, turma, nota`

Exemplo:

```csv
aluno,turma,nota
Maria,A,8.5
João,A,6.0
Ana,B,7.5
Pedro,B,5.5
Lucas,C,9.0
Clara,C,8.0
```

---

## Etapas do Projeto

### 1. Carregando e Explorando os Dados (Pandas)

* Ler o arquivo CSV.
* Exibir as primeiras linhas com `head()`.
* Verificar informações do dataset com `info()`.
* Identificar se existem valores nulos.

---

### 2. Estatísticas Básicas (NumPy e Pandas)

* Calcular média, mediana, nota máxima e mínima.
* Verificar a média por turma usando `groupby()`.
* Usar NumPy para calcular o **desvio padrão** das notas.

---

### 3. Tratamento de Dados (Pandas)

* Substituir valores nulos de notas pela média da turma.
* Criar uma nova coluna chamada **situação**, com “Aprovado” (nota ≥ 7) ou “Reprovado”.
* Calcular a taxa de aprovação geral e por turma.

---

### 4. Visualizações (Matplotlib)

* Criar um **gráfico de barras** mostrando a média das notas por turma.
* Criar um **histograma** mostrando a distribuição geral das notas.
* Criar um **gráfico de pizza** com a taxa de aprovados vs reprovados.

---

### 5. Visualizações Avançadas (Seaborn)

* Criar um **boxplot** comparando a distribuição das notas por turma.
* Criar um **violinplot** para ver a dispersão das notas em cada turma.
* Criar um **heatmap de correlação** (mesmo que só com notas, pode ser útil se adicionarmos novas variáveis, como presença).

---

## Desafio Extra

* Criar uma função em Python que receba o DataFrame de alunos e retorne um **relatório com**:

  * Quantidade total de alunos.
  * Média geral da turma.
  * Melhor aluno e pior aluno.
  * Turma com melhor desempenho.

---

## Objetivo Final

Ao final do projeto, você terá um **relatório visual e estatístico completo** mostrando o desempenho dos alunos e comparando turmas, usando **Python, NumPy, Pandas, Matplotlib e Seaborn** em conjunto.
