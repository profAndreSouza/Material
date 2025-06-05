# Aula 15 – Análise de Dados Quantitativos

## Objetivos da Aula

* Compreender o que são dados quantitativos e suas características.
* Aprender a descrever dados quantitativos com medidas estatísticas básicas (média, mediana, variância, desvio padrão).
* Construir visualizações adequadas para dados quantitativos, como histogramas e boxplots.
* Aplicar esses conceitos usando Python (Pandas, Matplotlib/Seaborn) no Google Colab.
* Desenvolver um projeto prático para análise de tempos de resposta de um call center.



## 1. O que são Dados Quantitativos?

* Representam valores numéricos que podem ser medidos ou contados.
* Dividem-se em:

  * **Discretos**: valores inteiros (ex: número de chamadas atendidas).
  * **Contínuos**: valores em um intervalo contínuo (ex: tempo de resposta em segundos).

## 2. Visualização de Dados Quantitativos

* **Histogramas**: mostram a distribuição de frequência dos dados em classes (bins).
* **Boxplots**: evidenciam mediana, quartis e possíveis outliers.
* Ferramentas: `hist()`, `boxplot()`, `seaborn.histplot()`, `seaborn.boxplot()`.

## 3. Descrição Estatística

* Medidas de tendência central: média, mediana.
* Medidas de dispersão: variância, desvio padrão, amplitude interquartil.
* Identificação de outliers.



## Exemplo

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Dados fictícios: tempos de resposta (em segundos)
tempos_resposta = np.array([12, 15, 14, 10, 13, 20, 30, 25, 18, 14, 15, 12, 40, 11, 10, 13, 14])

# Estatísticas descritivas
print("Média:", np.mean(tempos_resposta))
print("Mediana:", np.median(tempos_resposta))
print("Desvio padrão:", np.std(tempos_resposta))

# Histograma
plt.figure(figsize=(10,4))
plt.subplot(1,2,1)
plt.hist(tempos_resposta, bins=6, color='skyblue', edgecolor='black')
plt.title('Histograma de Tempos de Resposta')
plt.xlabel('Tempo (segundos)')
plt.ylabel('Frequência')

# Boxplot
plt.subplot(1,2,2)
sns.boxplot(x=tempos_resposta, color='lightgreen')
plt.title('Boxplot de Tempos de Resposta')
plt.xlabel('Tempo (segundos)')

plt.tight_layout()
plt.show()
```



## Projeto Prático: Análise de Tempos de Resposta do Call Center

Descrição:
Analisar um dataset com registros de tempo de resposta das chamadas atendidas por um call center.

Tarefas:

* Calcular estatísticas básicas (média, mediana, desvio padrão).
* Construir histogramas para visualizar a distribuição dos tempos.
* Criar boxplots para identificar outliers e variabilidade.
* Interpretar os resultados para sugerir melhorias no atendimento.

Sugestão de extensão:
Comparar tempos de resposta entre diferentes turnos ou equipes, usando gráficos de violino (`violinplot`) para comparar distribuições.



## Referências Bibliográficas

1. PEREIRA, André L. V. et al. *Estatística Aplicada à Administração e Economia*. 2. ed. São Paulo: Cengage Learning, 2017.

2. MCKINNEY, Wes. *Python para Análise de Dados*. 2. ed. Rio de Janeiro: Alta Books, 2018.

3. GUEDES, Jussara Marques. *Estatística: uma abordagem intuitiva*. 1. ed. São Paulo: Saraiva Educação, 2020.

4. HASTIE, Trevor; TIBSHIRANI, Robert; FRIEDMAN, Jerome. *The Elements of Statistical Learning*. 2. ed. New York: Springer, 2009.

