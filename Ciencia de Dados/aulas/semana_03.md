# Semana 03: Análise Exploratória de Dados (EDA) & Preparação dos Dados (Data Preparation)

## 1. Visão Geral & Objetivos de Aprendizagem
Nesta aula, aprofundaremos a análise do **Dataset de Concessão de Crédito** (`CRISP_DM_Random_Forest_Credito.ipynb`), disponibilizado na pasta [`materiais/`](../materiais/CRISP_DM_Random_Forest_Credito.ipynb).

Trabalharemos duas fases cruciais do CRISP-DM:
1. **Conclusão da Fase 2 (Data Understanding)**: Análise Exploratória de Dados (**EDA**) utilizando estatística descritiva (medidas de tendência central e dispersão) e visualização gráfica avançada com Seaborn e Matplotlib.
2. **Início da Fase 3 (Data Preparation)**: Execução do pipeline de limpeza, sanitização de outliers, imputação de valores ausentes, engenharia de atributos e codificação de variáveis.

---

## 2. Parte I: Análise Exploratória de Dados (EDA)

A **EDA** (*Exploratory Data Analysis*) é o processo de investigar os dados para descobrir padrões, detectar anomalias e testar hipóteses com o auxílio de estatística descritiva e representações gráficas.

### 2.1 Medidas Estatísticas de Tendência Central

As medidas de tendência central indicam o ponto em torno do qual os dados se concentram:
- **Média ($\bar{x}$)**: Soma de todos os valores dividida pelo número total de observações. *Sensível a outliers.*
- **Mediana ($\tilde{x}$)**: Valor central que divide o dataset ordenado em duas partes iguais (50% acima, 50% abaixo). *Robusta contra outliers.*
- **Moda**: Valor ou categoria de maior frequência em uma distribuição.

$$\text{Média: } \bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$$

> **Dica Prática de Ciência de Dados**: Em distribuições assimétricas ou com presença de outliers (como salários e rendas), a **Mediana** é uma medida muito mais confiável que a Média!

### 2.2 Medidas Estatísticas de Dispersão

As medidas de dispersão indicam o grau de variabilidade ou espalhamento dos dados em torno do centro:
- **Amplitude**: Diferença entre o valor máximo e o valor mínimo ($Max - Min$).
- **Variância ($s^2$)**: Média dos quadrados dos desvios em relação à média.
- **Desvio Padrão ($s$)**: Raiz quadrada da variância, expressa na mesma unidade dos dados originais.
- **Intervalo Interquartil (IQR)**: Diferença entre o 3º Quartil (75%) e o 1º Quartil (25%), representando os 50% centrais da distribuição.

$$IQR = Q_3 - Q_1$$

---

### 2.3 Visualização Gráfica com Seaborn & Matplotlib

Visualizar os dados é a forma mais eficiente de comunicar estatísticas e identificar comportamentos anômalos.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Configuração do estilo gráfico
sns.set_theme(style="whitegrid")
plt.rcParams['figure.figsize'] = (10, 6)
```

#### A) Gráfico de Contagem e Desbalanceamento (`sns.countplot`)
Visualiza a distribuição de frequências da variável alvo `inadimplente`.

```python
# Grafico de contagem da classe alvo
plt.figure(figsize=(6, 4))
ax = sns.countplot(data=df_raw, x='inadimplente', palette='Blues_d')
plt.title('Distribuição da Variável Alvo (Inadimplente)')
plt.xlabel('Status (0 = Adimplente, 1 = Inadimplente)')
plt.ylabel('Quantidade de Proponentes')
plt.show()
```

#### B) Identificação Gráfica de Outliers com Boxplot (`sns.boxplot`)
O Boxplot exibe a mediana, os quartis $Q_1$ e $Q_3$ e os pontos fora dos limites ($1.5 \times IQR$), evidenciando ruidos como idades de 999 anos ou negativas.

```python
# Boxplot para identificacao de outliers espurios na coluna 'idade'
plt.figure(figsize=(8, 4))
sns.boxplot(x=df_raw['idade'], color='salmon')
plt.title('Boxplot de Idade — Detecção de Outliers Espúrios (-15 e 999)')
plt.xlabel('Idade (anos)')
plt.show()
```

#### C) Histograma e Curva de Densidade (`sns.histplot` / `kde`)
Examina a forma da distribuição contínua da renda mensal dos proponentes.

```python
# Histograma com curva de densidade (KDE) da renda mensal
plt.figure(figsize=(8, 4))
sns.histplot(df_raw['renda_mensal'].dropna(), kde=True, bins=30, color='teal')
plt.title('Distribuição da Renda Mensal dos Proponentes')
plt.xlabel('Renda Mensal (R$)')
plt.ylabel('Frequência')
plt.show()
```

---

## 3. Parte II: CRISP-DM Fase 3 — Preparação dos Dados (Data Preparation)

Após compreender o dataset e mapear suas falhas na Fase 2, executamos a **Fase 3 (Data Preparation)** para transformar a base em um conjunto limpo, numérico e pronto para os algoritmos de Machine Learning.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                    PIPELINE DE DATA PREPARATION                        │
│                                                                        │
│   1. Padronização     ──>  2. Sanitização de   ──>  3. Engenharia de   │
│      de Strings               Outliers Espúrios       Features         │
│                                                                        │
│   4. Imputação de     ──>  5. Remoção de       ──>  6. Codificação     │
│      Nulos (Mediana)          Ruídos/IDs              (get_dummies)    │
└────────────────────────────────────────────────────────────────────────┘
```

### Passo 1: Padronização de Strings
Remove espaços em branco nas extremidades e padroniza todo o texto em caixa alta.

```python
df_clean = df_raw.copy()

# Padronizando a coluna categórica 'tipo_vinculo'
df_clean['tipo_vinculo'] = df_clean['tipo_vinculo'].astype(str).str.strip().str.upper()
print("Valores únicos padronizados:", df_clean['tipo_vinculo'].unique())
```

### Passo 2: Sanitização de Outliers Espúrios
Convertemos valores fisicamente impossíveis ou irreais em `np.nan` para que possam ser tratados na etapa de imputação.

```python
# Convertendo idades invalidas (< 18 ou > 100) em NaN
df_clean.loc[(df_clean['idade'] < 18) | (df_clean['idade'] > 100), 'idade'] = np.nan

# Convertendo rendas aberrantes (> R$ 200.000) em NaN
df_clean.loc[df_clean['renda_mensal'] > 200000.0, 'renda_mensal'] = np.nan
```

### Passo 3: Engenharia de Recursos (Feature Engineering)
Criamos variáveis derivadas que possuem maior poder explicativo de negócio sobre a capacidade financeira do cliente.

```python
# 1. Valor estimado da parcela mensal
df_clean['valor_parcela'] = df_clean['valor_solicitado'] / df_clean['numero_parcelas']

# 2. Comprometimento da renda mensal pela parcela (com constante 1e-5 para evitar divisao por zero)
df_clean['comprometimento_renda'] = df_clean['valor_parcela'] / (df_clean['renda_mensal'] + 1e-5)
```

### Passo 4: Imputação de Valores Ausentes (NaNs)
Preenchemos os valores nulos das variáveis numéricas pela **Mediana** do atributo, preservando a robustez estatística.

```python
# Lista de colunas numericas com nulos
cols_numericas = ['idade', 'renda_mensal', 'score_serasa', 'comprometimento_renda']

# Imputacao pela mediana
for col in cols_numericas:
    mediana_val = df_clean[col].median()
    df_clean[col] = df_clean[col].fillna(mediana_val)

print("Verificação de nulos após imputação:", df_clean[cols_numericas].isnull().sum().to_dict())
```

### Passo 5: Remoção de Atributos Irrelevantes e Ruído
Descartamos identificadores únicos e variáveis sem valor preditivo.

```python
# Removendo IDs e colunas de ruido puro
colunas_para_remover = ['proponente_id', 'ip_origem_hash', 'ruido_estocastico', 'numero_da_sorte_app']
df_clean = df_clean.drop(columns=colunas_para_remover)
```

### Passo 6: Codificação Categórica (One-Hot Encoding)
Convertemos variáveis de texto em colunas binárias numéricas com `pd.get_dummies()`, utilizando `drop_first=True` para evitar multicolinearidade.

```python
# Codificacao One-Hot Encoding
df_encoded = pd.get_dummies(df_clean, columns=['tipo_vinculo', 'estado_civil', 'escolaridade'], drop_first=True)
print(f"Formato final da base tratada: {df_encoded.shape[0]} linhas e {df_encoded.shape[1]} colunas.")
```

### Passo 7: Divisão em Conjuntos de Treino e Teste
Dividimos o dataset em 75% para treinamento do modelo e 25% para teste futuro, mantendo a proporção de inadimplentes com `stratify=y`.

```python
from sklearn.model_selection import train_test_split

# Separação entre preditores (X) e alvo (y)
X = df_encoded.drop(columns=['inadimplente'])
y = df_encoded['inadimplente']

# Divisao estratificada
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

print(f"Conjunto de Treino: {X_train.shape[0]} amostras")
print(f"Conjunto de Teste:  {X_test.shape[0]} amostras")
```

---

## 4. Exercícios de Fixação & Estudo Dirigido

1. **Por que a Mediana é preferível à Média para preencher valores nulos em variáveis de renda e patrimônio?**
2. **Explique a função da opção `drop_first=True` na função `pd.get_dummies()`. O que é a armadilha das variáveis dummy (*Dummy Variable Trap*)?**
3. **Qual é o objetivo do parâmetro `stratify=y` na função `train_test_split` e por que ele é indispensável em conjuntos de dados desbalanceados?**
4. **Crie uma nova feature no dataset chamada `razao_credito_renda` dividindo `valor_solicitado` por `renda_mensal` e interprete o seu significado financeiro.**
