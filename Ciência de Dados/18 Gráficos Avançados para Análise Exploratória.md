# Aula 18 – Gráficos Avançados para Análise Exploratória

## Objetivos da Aula

* Compreender o uso de gráficos avançados como **boxplot** e **histograma** para investigar padrões, outliers e distribuições.
* Aprender a comparar distribuições entre grupos usando **boxplots por categoria**.
* Visualizar a frequência e dispersão de dados quantitativos com histogramas.
* Implementar esses gráficos utilizando bibliotecas do Python (Matplotlib, Seaborn) no Google Colab.
* Aplicar a análise exploratória para problemas reais em sistemas, como comparação de salários por setor.



## 1. Boxplot

* Representa a **distribuição de dados** com cinco números: mínimo, 1º quartil (Q1), mediana (Q2), 3º quartil (Q3) e máximo.
* Detecta **outliers** como pontos fora dos limites Q1 - 1.5×IQR e Q3 + 1.5×IQR.
* Útil para **comparar grupos**.

## 2. Histograma

* Divide os dados em **intervalos (bins)** e mostra a frequência em cada intervalo.
* Ideal para **visualizar a forma da distribuição** (simétrica, enviesada, multimodal).
* Permite perceber concentração e dispersão.



## Exemplo: Salários por Departamento

```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Dados simulados
np.random.seed(42)
departamentos = ['TI', 'RH', 'Vendas', 'Financeiro']
dados = {
    'departamento': np.random.choice(departamentos, 200),
    'salario': np.concatenate([
        np.random.normal(5000, 800, 50),     # TI
        np.random.normal(3500, 500, 50),     # RH
        np.random.normal(4000, 600, 50),     # Vendas
        np.random.normal(6000, 900, 50)      # Financeiro
    ])
}
df = pd.DataFrame(dados)

# Boxplot por departamento
plt.figure(figsize=(10, 6))
sns.boxplot(x='departamento', y='salario', data=df, palette='Set2')
plt.title('Boxplot de Salários por Departamento')
plt.xlabel('Departamento')
plt.ylabel('Salário (R$)')
plt.grid(True)
plt.show()

# Histograma geral
plt.figure(figsize=(8, 5))
sns.histplot(df['salario'], bins=20, kde=True, color='steelblue')
plt.title('Histograma Geral de Salários')
plt.xlabel('Salário (R$)')
plt.ylabel('Frequência')
plt.grid(True)
plt.show()
```



## Projeto Prático: Comparar Salários entre Departamentos

Descrição:
Usar dados de salários categorizados por departamentos de uma empresa fictícia para realizar análise exploratória.

Tarefas:

* Criar um dataset realista com salários e categorias (departamentos).
* Gerar **boxplots por categoria** para comparar a distribuição dos salários.
* Gerar **histograma geral** para observar a distribuição global.
* Interpretar os resultados: média, dispersão, presença de outliers, desigualdade salarial, etc.

Sugestão de extensão:
Adicionar gênero ou nível de cargo para expandir a análise de desigualdade (ex.: `boxplot(x="departamento", y="salario", hue="gênero")`).



## Referências Bibliográficas

1. MCKINNEY, Wes. *Python para Análise de Dados*. 2. ed. Rio de Janeiro: Alta Books, 2018.
2. PEREIRA, André L. V. et al. *Estatística Aplicada à Administração e Economia*. Cengage Learning, 2017.
3. GARCIA, M. L. R. *Análise Exploratória de Dados com Python*. São Paulo: Novatec, 2020.
4. HASTIE, Trevor; TIBSHIRANI, Robert; FRIEDMAN, Jerome. *The Elements of Statistical Learning*. Springer, 2009.
