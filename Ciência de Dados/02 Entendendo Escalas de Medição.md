# Aula 2: Entendendo Escalas de Medição

## Objetivos da Aula  
- Compreender os diferentes tipos de escalas de medição utilizadas em estatística.
- Saber identificar o tipo de escala adequada para cada variável.
- Aplicar os conceitos em situações reais por meio da construção de um questionário.

---

## **Conceito Geral**

Em estatística, as **escalas de medição** são fundamentais para definir como os dados podem ser manipulados e interpretados. Elas determinam quais operações matemáticas são permitidas com os dados e quais análises são apropriadas. A escolha correta da escala influencia diretamente na validade das análises estatísticas aplicadas.

---

## **1. Escala Nominal**

- Classifica os dados em categorias **sem ordem ou hierarquia**.
- As categorias são **mutuamente exclusivas**.
- **Operações possíveis:** Contagem e moda.
- **Exemplos:** Gênero, estado civil, tipo sanguíneo.

### **Exemplo Prático (Questionário)**
- Qual é o seu estado civil?  
  - ( ) Solteiro(a)  
  - ( ) Casado(a)  
  - ( ) Divorciado(a)  
  - ( ) Viúvo(a)

- Qual é sua cor favorita?  
  - ( ) Azul  
  - ( ) Vermelho  
  - ( ) Verde  
  - ( ) Outra

---

## **2. Escala Ordinal**

- Agrupa os dados em categorias **ordenadas**, mas **sem garantir que os intervalos entre as categorias sejam iguais**.
- **Operações possíveis:** Mediana, percentis, análise ordinal.
- **Exemplos:** Nível de escolaridade, dor (leve/média/intensa), ranking de satisfação.

### **Exemplo Prático (Questionário)**
- Como você classificaria sua dor de cabeça agora?  
  - ( ) Leve  
  - ( ) Moderada  
  - ( ) Intensa

- Qual o seu nível de satisfação com a aula de hoje?  
  - ( ) Muito insatisfeito  
  - ( ) Insatisfeito  
  - ( ) Neutro  
  - ( ) Satisfeito  
  - ( ) Muito satisfeito

---

## **3. Escala Intervalar**

- Possui **ordem**, **intervalos iguais entre os valores**, mas **não possui zero absoluto**.
- **Operações possíveis:** Somar e subtrair, calcular médias.
- **Exemplos:** Temperatura em °C, datas no calendário.

### **Exemplo Prático (Questionário)**
- Em que ano você começou a faculdade?  
  - [____]

- Qual foi a temperatura média hoje na sua cidade? (°C)  
  - [____]

---

## **4. Escala de Razão**

- Possui **ordem, intervalos iguais e zero absoluto**.
- Permite **todas as operações matemáticas**, inclusive proporções e razões.
- **Exemplos:** Altura, idade, peso, tempo decorrido.

### **Exemplo Prático (Questionário)**
- Quantos minutos você estudou hoje?  
  - [____] minutos

- Qual é a sua altura em centímetros?  
  - [____] cm

---

## **5. Exemplo Escalas**


<img src="img/2-escala.png">

```python

# ESCALAS DE MEDIÇÃO EM ESTATÍSTICA
# Script demonstrativo no Google Colab com grid 2x2 de gráficos

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Simulando um pequeno conjunto de respostas a um questionário
data = {
    'Estado Civil (Nominal)': ['Solteiro', 'Casado', 'Solteiro', 'Divorciado', 'Viúvo', 'Casado'],
    'Satisfação (Ordinal)': ['Satisfeito', 'Muito satisfeito', 'Neutro', 'Insatisfeito', 'Muito satisfeito', 'Satisfeito'],
    'Ano Ingresso (Intervalar)': [2018, 2019, 2020, 2018, 2021, 2019],
    'Tempo de Estudo (Razão - minutos)': [120, 90, 150, 30, 60, 45],
}

df = pd.DataFrame(data)

# Ordenar valores ordinais
ordem = ['Muito insatisfeito', 'Insatisfeito', 'Neutro', 'Satisfeito', 'Muito satisfeito']
df['Satisfação (Ordinal)'] = pd.Categorical(df['Satisfação (Ordinal)'], categories=ordem, ordered=True)

# Criar figura e eixos 2x2
fig, axs = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle('Visualização de Escalas de Medição', fontsize=16)

# Escala Nominal
sns.countplot(x='Estado Civil (Nominal)', data=df, ax=axs[0, 0])
axs[0, 0].set_title('Escala Nominal: Estado Civil')
axs[0, 0].set_xlabel('Estado Civil')
axs[0, 0].set_ylabel('Contagem')

# Escala Ordinal
sns.countplot(x='Satisfação (Ordinal)', data=df, order=ordem, ax=axs[0, 1])
axs[0, 1].set_title('Escala Ordinal: Satisfação')
axs[0, 1].set_xlabel('Nível de Satisfação')
axs[0, 1].set_ylabel('Contagem')
axs[0, 1].tick_params(axis='x', rotation=30)

# Escala Intervalar
sns.histplot(df['Ano Ingresso (Intervalar)'], bins=4, kde=True, ax=axs[1, 0])
axs[1, 0].set_title('Escala Intervalar: Ano de Ingresso')
axs[1, 0].set_xlabel('Ano')
axs[1, 0].set_ylabel('Frequência')

# Escala de Razão
sns.barplot(x=df.index, y='Tempo de Estudo (Razão - minutos)', data=df, ax=axs[1, 1])
axs[1, 1].set_title('Escala de Razão: Tempo de Estudo')
axs[1, 1].set_xlabel('Aluno')
axs[1, 1].set_ylabel('Minutos')

plt.tight_layout(rect=[0, 0, 1, 0.96])
plt.show()

# Exibir a tabela
print("=== TABELA DE RESPOSTAS ===")
display(df)

```

---

## Projeto Prático: Mini Questionário de Escalas de Medição

### Objetivo

Criar um questionário com perguntas que representem cada tipo de escala estatística (nominal, ordinal, intervalar e razão). Em seguida, simular a coleta de dados, organizar os resultados em uma tabela e gerar visualizações para análise.

---

### Questionário Proposto

| Nº | Pergunta | Tipo de Escala | Justificativa |
|----|----------|----------------|---------------|
| 1  | Qual seu estado civil? | **Nominal** | Não possui ordem ou hierarquia, apenas classificação. |
| 2  | Como você classificaria seu nível de estresse hoje? (Baixo, Médio, Alto) | **Ordinal** | Há ordem entre as categorias, mas a distância entre elas não é mensurável. |
| 3  | Em que ano você começou a faculdade? | **Intervalar** | Possui ordem e intervalos iguais, mas não há zero absoluto significativo. |
| 4  | Quantas horas você dormiu na última noite? | **Razão** | Possui zero absoluto e permite todas as operações matemáticas. |
| 5  | Qual a sua cor favorita? | **Nominal** | Classificação sem hierarquia. |
| 6  | Quantas vezes você se exercitou na última semana? | **Razão** | Há ordem, intervalos iguais e zero significa "nenhuma vez". |

---

### Simulação de Respostas

```python
import pandas as pd

# Criando o DataFrame com respostas simuladas de 6 participantes
respostas = {
    'Estado Civil (Nominal)': ['Solteiro', 'Casado', 'Divorciado', 'Solteiro', 'Casado', 'Viúvo'],
    'Estresse (Ordinal)': ['Baixo', 'Médio', 'Alto', 'Médio', 'Baixo', 'Alto'],
    'Ano de Ingresso (Intervalar)': [2019, 2020, 2018, 2021, 2020, 2019],
    'Horas de Sono (Razão)': [6, 7.5, 5, 8, 4.5, 7],
    'Cor Favorita (Nominal)': ['Azul', 'Vermelho', 'Verde', 'Azul', 'Preto', 'Roxo'],
    'Exercícios/Semana (Razão)': [2, 3, 0, 1, 4, 2]
}

df = pd.DataFrame(respostas)
df
```

---

### Visualização Gráfica das Escalas

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Ordenação da escala ordinal
ordem_estresse = ['Baixo', 'Médio', 'Alto']
df['Estresse (Ordinal)'] = pd.Categorical(df['Estresse (Ordinal)'], categories=ordem_estresse, ordered=True)

# Gráficos em grid 2x2
fig, axs = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle("Visualização de Escalas de Medição", fontsize=16)

# Escala Nominal - Estado Civil
sns.countplot(x='Estado Civil (Nominal)', data=df, ax=axs[0, 0])
axs[0, 0].set_title('Estado Civil (Nominal)')

# Escala Ordinal - Estresse
sns.countplot(x='Estresse (Ordinal)', data=df, order=ordem_estresse, ax=axs[0, 1])
axs[0, 1].set_title('Nível de Estresse (Ordinal)')

# Escala Intervalar - Ano de Ingresso
sns.histplot(df['Ano de Ingresso (Intervalar)'], bins=4, kde=True, ax=axs[1, 0])
axs[1, 0].set_title('Ano de Ingresso (Intervalar)')

# Escala de Razão - Horas de Sono
sns.barplot(x=df.index, y='Horas de Sono (Razão)', data=df, ax=axs[1, 1])
axs[1, 1].set_title('Horas de Sono (Razão)')

plt.tight_layout(rect=[0, 0, 1, 0.96])
plt.show()
```

---

### Análise e Discussão

- As escalas **nominais** foram representadas por categorias sem hierarquia (estado civil e cor favorita).
- A **escala ordinal** apresentou uma ordenação clara de níveis de estresse.
- A **escala intervalar** mostrou o ano de ingresso, permitindo observar a distribuição ao longo do tempo.
- As **escalas de razão** possibilitaram operações matemáticas completas, como média e total.

---

### Atividade Opcional

- Aplique esse questionário com colegas.
- Insira os dados no DataFrame e repita as análises e gráficos.


## Exercícios

1. Classifique como nominal, ordinal, intervalar ou razão:
   - (a) Tipo de combustível de veículos  
   - (b) Temperatura medida em Fahrenheit  
   - (c) Idade dos entrevistados  
   - (d) Nível de escolaridade  

2. Dê um exemplo real para cada tipo de escala de medição.

3. Por que tempo de estudo (em horas) não pode ser classificado como escala intervalar?

4. Reescreva uma pergunta ordinal como se fosse intervalar. O que muda na análise?

5. É possível usar média em variáveis ordinais? Justifique com base nos conceitos estudados.

---

## Materiais de Estudo Complementares

- **Livro:** BARBETTA, Pedro Alberto; REIS, Marcelo Menezes; BORNIA, Antonio Cezar. *Estatística: para cursos de engenharia e informática*. 2. ed. São Paulo: Atlas, 2008.  
- **Livro:** BONAFINI, Fernanda César (org.). *Estatística*. 2. ed. São Paulo: Pearson, 2019.  
- **Artigo complementar:** "Tipos de variáveis e escalas de medição em estatística" – disponível em sites acadêmicos ou blogs de Data Science.  
- **Atividade interativa online:** [Khan Academy - Classificação de variáveis](https://pt.khanacademy.org/math/statistics-probability)
