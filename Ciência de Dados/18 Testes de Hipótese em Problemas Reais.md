# Aula 17 – Testes de Hipótese em Problemas Reais

## Objetivos da Aula

* Compreender o conceito de teste de hipótese e sua importância em análises estatísticas.
* Conhecer as etapas fundamentais de um teste de hipótese: formulação, teste estatístico, decisão e conclusão.
* Aplicar testes de hipóteses para avaliar o impacto de ações em problemas reais.
* Desenvolver habilidades práticas com Python para realizar testes estatísticos no Google Colab.



## 1. Introdução ao Teste de Hipótese

* Definição: procedimento para verificar se uma suposição (hipótese) sobre uma população é compatível com os dados observados.
* Hipótese nula (H0) e hipótese alternativa (H1).
* Erros tipo I (falso positivo) e tipo II (falso negativo).
* Nível de significância (α), geralmente 5%.

## 2. Testes Estatísticos Comuns

* Teste Z para médias (quando desvio padrão populacional conhecido).
* Teste t de Student para médias (desvio padrão desconhecido).
* Teste qui-quadrado para independência de categorias.
* Teste para proporções.

## 3. Aplicação prática: Avaliar se uma nova campanha publicitária aumentou a taxa de conversão

* Definir H0: a taxa de conversão da campanha nova é igual à anterior.
* Definir H1: a taxa de conversão da campanha nova é maior que a anterior.
* Escolher o teste adequado para proporção.

## Exemplo

```python
import numpy as np
from statsmodels.stats.proportion import proportions_ztest

# Dados fictícios
# Campanha antiga: 2000 visitantes, 300 conversões
# Campanha nova: 2200 visitantes, 380 conversões

conversoes = np.array([300, 380])
visitantes = np.array([2000, 2200])

# Teste Z para proporções independentes (one-sided)
stat, p_value = proportions_ztest(conversoes, visitantes, alternative='larger')

print(f'Estatística do teste Z: {stat:.4f}')
print(f'Valor-p: {p_value:.4f}')

if p_value < 0.05:
    print("Rejeitamos H0: a nova campanha aumentou a taxa de conversão.")
else:
    print("Não rejeitamos H0: não há evidências suficientes para afirmar aumento.")
```



## Projeto Prático: Testar o Impacto de uma Campanha Publicitária na Taxa de Conversão

Descrição:
Usando dados de visitantes e conversões antes e depois da campanha, testar estatisticamente se houve aumento significativo na taxa de conversão.

Tarefas:

* Coletar ou simular dados de visitantes e conversões das duas campanhas.
* Formular as hipóteses nula e alternativa.
* Aplicar o teste estatístico adequado para proporções.
* Interpretar os resultados e elaborar conclusões baseadas no teste.

Sugestão de extensão:
Realizar análise de poder do teste (power analysis) para verificar a sensibilidade do teste à detecção de diferenças reais.



## Referências Bibliográficas

1. PEREIRA, André L. V. et al. *Estatística Aplicada à Administração e Economia*. 2. ed. São Paulo: Cengage Learning, 2017.

2. MONTGOMERY, Douglas C.; RUNGER, George C. *Estatística Aplicada e Probabilidade para Engenheiros*. 6. ed. Rio de Janeiro: LTC, 2014.

3. R CORE TEAM. *An Introduction to Statistical Learning: with Applications in R*. Springer, 2013.

4. HASTIE, Trevor; TIBSHIRANI, Robert; FRIEDMAN, Jerome. *The Elements of Statistical Learning*. 2. ed. New York: Springer, 2009.
