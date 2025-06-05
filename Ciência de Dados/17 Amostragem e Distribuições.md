# Aula 16 – Amostragem e Distribuições

## Objetivos da Aula

* Compreender os conceitos básicos de amostragem e sua importância em estatística.
* Entender o que são distribuições de proporções e como elas se comportam.
* Aprender a simular amostragens repetidas para construir distribuições amostrais.
* Aplicar esses conceitos utilizando Python no Google Colab para visualização prática.



## 1. Conceitos de Amostragem

* Amostra: subconjunto representativo da população.
* Tipos de amostragem: aleatória simples, estratificada, sistemática, por conglomerados.
* Importância da amostragem para inferência estatística e redução de custos.

## 2. Distribuições de Proporções

* Proporção: razão entre o número de casos favoráveis e o total da amostra.
* Distribuição amostral da proporção: comportamento da proporção estimada em amostras repetidas.
* Teorema do limite central aplicado a proporções.

## 3. Simulação de Amostragens

* Realizar amostragens sucessivas de uma população fictícia.
* Construir histograma da distribuição amostral das proporções.
* Observar convergência para a média populacional.


## Exemplo

```python
import numpy as np
import matplotlib.pyplot as plt

# População fictícia: 1000 indivíduos, 40% possuem a característica A
populacao = np.random.choice([0,1], size=1000, p=[0.6, 0.4])

# Parâmetros
n_amostras = 1000  # número de amostras
tamanho_amostra = 50  # tamanho de cada amostra

proporcoes = []

for _ in range(n_amostras):
    amostra = np.random.choice(populacao, size=tamanho_amostra, replace=False)
    prop = np.mean(amostra)  # proporção de "1"s na amostra
    proporcoes.append(prop)

# Plotar distribuição amostral das proporções
plt.hist(proporcoes, bins=20, color='skyblue', edgecolor='black')
plt.title('Distribuição Amostral das Proporções (n=50)')
plt.xlabel('Proporção')
plt.ylabel('Frequência')
plt.grid(True)
plt.show()

print(f'Média da distribuição amostral: {np.mean(proporcoes):.3f}')
print(f'Desvio padrão da distribuição amostral: {np.std(proporcoes):.3f}')
```



## Projeto Prático: Simular Amostragens Sucessivas e Construir Distribuição Amostral

Descrição:
Simular diversas amostragens de uma população fictícia para observar o comportamento da distribuição amostral das proporções.

Tarefas:

* Criar uma população com uma proporção conhecida de uma característica.
* Repetir a amostragem aleatória simples várias vezes.
* Calcular a proporção em cada amostra.
* Plotar o histograma da distribuição amostral das proporções.
* Calcular e interpretar a média e desvio padrão da distribuição amostral.

Sugestão de extensão:
Comparar distribuições amostrais para diferentes tamanhos de amostra e discutir o efeito do tamanho na variabilidade.


## Referências Bibliográficas

1. PEREIRA, André L. V. et al. *Estatística Aplicada à Administração e Economia*. 2. ed. São Paulo: Cengage Learning, 2017.

2. MONTGOMERY, Douglas C.; RUNGER, George C. *Estatística Aplicada e Probabilidade para Engenheiros*. 6. ed. Rio de Janeiro: LTC, 2014.

3. MCKINNEY, Wes. *Python para Análise de Dados*. 2. ed. Rio de Janeiro: Alta Books, 2018.

4. HASTIE, Trevor; TIBSHIRANI, Robert; FRIEDMAN, Jerome. *The Elements of Statistical Learning*. 2. ed. New York: Springer, 2009.
