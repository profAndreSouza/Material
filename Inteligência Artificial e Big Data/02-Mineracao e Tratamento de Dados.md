# **Aula 2 – Contextualização**

## **1. Contextualização Inicial (5–10 min)**

### **Objetivo**

Revisar o problema do projeto e reforçar a importância da **qualidade dos dados** para o sucesso do modelo preditivo.

### **1.1 Revisão do problema da empresa de varejo**

A empresa quer **prever o comportamento de compra dos clientes**, utilizando dados históricos e variáveis de perfil e comportamento.

**Pergunta central:**

> “Quais clientes têm maior probabilidade de comprar nos próximos 30 dias?”

**Por que é relevante:**

- Permite ações de marketing mais direcionadas.
- Aumenta a conversão de campanhas.
- Reduz desperdício de recursos com contatos pouco eficientes.

### **1.2 Mostrando o dataset**

O dataset contém informações como:

- **Dados do cliente:** `cliente_id`, `idade`, `genero`, `UF`.
- **Histórico de compras:** `recencia_dias`, `frequencia_12m`, `valor_total_12m`, `ticket_medio_12m`.
- **Comportamento online:** `cliques_email_90d`, `visitas_site_90d`, `uso_cupom_12m`.
- **Variáveis categóricas:** `forma_pagamento`, `canal_predominante`.
- **Variável-alvo:** `vai_comprar_30d` (binária: 0 = não, 1 = sim).

**Observação:** alguns dados podem estar **incompletos, duplicados ou inconsistentes**.

### **1.3 Conexão com o CRISP-DM**

Estamos na **fase de Preparação de Dados**, que corresponde à **3ª etapa do CRISP-DM**:

1. Entendimento do negócio ✔️
2. Entendimento dos dados ✔️
3. **Preparação dos dados ⬅️ aqui**
4. Modelagem
5. Avaliação
6. Implantação

> **Importância:** dados limpos e bem tratados são essenciais para que o modelo funcione corretamente.

### **1.4 Ponto de atenção para discussão**

> “Se os dados estiverem incompletos, incoerentes ou mal organizados, mesmo o melhor modelo de IA dará resultados ruins. Como podemos garantir a qualidade?”

**Sugestões de reflexão:**

- Identificar e tratar valores nulos ou inconsistentes.
- Remover duplicatas ou registros inválidos.
- Padronizar variáveis categóricas e numéricas.
- Documentar todas as transformações feitas.

## **2. O que é Mineração de Dados**

### 2.1 Definição

A **Mineração de Dados** (_Data Mining_) é o processo de **explorar grandes conjuntos de dados** para identificar padrões, correlações e informações úteis que possam ser usadas para apoiar decisões.
Ela é uma das etapas centrais da **Ciência de Dados** e combina técnicas de **estatística**, **aprendizado de máquina** e **bancos de dados**.

> **Em outras palavras:** é como “garimpar” dentro de uma montanha de informações para encontrar “pepitas de ouro” — ou seja, conhecimentos valiosos.

### 2.2 Objetivo principal

O objetivo é **transformar dados brutos** (não tratados, não organizados) em **informações compreensíveis** e, a partir delas, gerar **conhecimento acionável** — algo que possa orientar decisões e estratégias.

**Fluxo simplificado:**

1. Coleta de dados.
2. Limpeza e organização.
3. Análise e identificação de padrões.
4. Interpretação e uso no negócio.

### 2.3 Por que é importante no varejo?

O setor de varejo gera diariamente grandes quantidades de dados: vendas, transações online, cadastros de clientes, programas de fidelidade, devoluções etc.
A mineração de dados ajuda a **tirar sentido** desse volume de informações.

**Principais aplicações:**

- **Previsão de vendas** – estimar demanda futura para otimizar estoque.
- **Segmentação de clientes** – agrupar clientes com perfis e hábitos semelhantes.
- **Recomendação de produtos** – sugerir produtos com base no histórico de compras.
- **Detecção de churn** – identificar clientes que estão prestes a deixar de comprar.

### 2.4 Exemplo prático simplificado

Imagine que uma loja tenha um banco de dados com **10 mil registros de compras** de clientes.
Ao analisar esses dados, o sistema identifica um padrão:

- **Mulheres entre 25 e 34 anos** compram **mais produtos da categoria X** durante o **inverno**.

Com essa informação, a empresa pode:

- Direcionar campanhas de marketing específicas para esse público.
- Garantir estoque suficiente da categoria X antes do inverno.
- Criar promoções e combos que aumentem o ticket médio.

### 2.5 Ligação com o projeto da disciplina

No nosso caso prático, estamos usando mineração de dados para **prever o comportamento de compra** de clientes.
A ideia é extrair padrões do histórico de compras e traduzi-los em **regras ou modelos preditivos** que ajudem a empresa a agir antes do cliente tomar a decisão.

## **3. Etapas do CRISP-DM e posição atual**

### 3.1 O que é o CRISP-DM

O **CRISP-DM** (_Cross Industry Standard Process for Data Mining_) é o **processo padrão** mais usado no mundo para conduzir projetos de mineração de dados.
Ele foi criado para servir como um **guia estruturado**, independente da área de aplicação, ajudando a organizar o trabalho de forma lógica e repetível.

### 3.2 As 6 etapas do CRISP-DM

1. **Entendimento do Negócio**

   - Compreender o objetivo do projeto do ponto de vista da empresa.
   - Perguntas típicas:

     - Qual problema estamos tentando resolver?
     - Quais decisões queremos apoiar com os dados?

   - _Exemplo no varejo:_ definir que queremos prever quais clientes têm maior chance de comprar um produto específico.

2. **Entendimento dos Dados**

   - Explorar os dados disponíveis, verificar sua qualidade, identificar lacunas.
   - Perguntas típicas:

     - De onde vêm os dados?
     - Estão completos ou há valores ausentes?
     - Existe algum viés ou inconsistência?

   - _Exemplo no varejo:_ descobrir que temos dados de vendas dos últimos 3 anos, mas que há falhas de registro nos meses de dezembro.

3. **Preparação dos Dados** **(onde estamos agora)**

   - Limpar, transformar e formatar os dados para análise.
   - Inclui:

     - Tratamento de valores ausentes.
     - Remoção de duplicatas.
     - Conversão de variáveis categóricas em numéricas (Label Encoding, One-Hot Encoding).

   - _Importância:_ essa etapa pode consumir **60% a 80% do tempo total** de um projeto, pois dados sujos ou mal organizados comprometem toda a análise.

4. **Modelagem**

   - Escolher e aplicar algoritmos de aprendizado de máquina adequados.
   - Ajustar parâmetros para melhorar o desempenho.
   - _Exemplo:_ treinar uma **árvore de decisão** ou **regressão logística** para prever compras.

5. **Avaliação**

   - Testar o modelo criado para verificar se ele realmente responde ao problema de negócio.
   - Analisar métricas como acurácia, precisão, recall e F1-score.
   - _Exemplo:_ verificar se o modelo consegue identificar corretamente 90% dos clientes que realmente compraram.

6. **Implantação**

   - Colocar o modelo em produção para uso real.
   - Pode ser integrado a sistemas da empresa ou gerar relatórios periódicos.
   - _Exemplo:_ criar um painel no sistema de vendas que indique quais clientes têm maior probabilidade de compra no próximo mês.

### 3.3 Posição atual no nosso projeto

No **caso prático da disciplina**, já realizamos:

- Entendimento do negócio.
- Entendimento dos dados.

Agora estamos na **preparação dos dados**, que envolve **limpar e organizar** o conjunto para garantir que a modelagem seja eficaz e confiável.

## **4. Limpeza e Tratamento de Dados**

A limpeza e o tratamento de dados são passos essenciais na mineração de dados e no aprendizado de máquina. Dados incorretos, ausentes ou inconsistentes podem gerar **modelos enviesados**, previsões imprecisas e decisões equivocadas. Nesta etapa, aprendemos a **identificar problemas, avaliar seu impacto e aplicar soluções adequadas**.

### **4.1 Valores Nulos**

**Definição:**
Valores ausentes ou não preenchidos em campos do dataset. Podem aparecer como `NaN`, `null` ou campos vazios (`""`).

**Causas comuns:**

- Falha na coleta de dados.
- Dados que o usuário não preencheu.
- Problemas de integração entre sistemas.

**Consequências:**

- Algoritmos podem falhar ao processar dados nulos.
- Estatísticas (média, desvio, contagem) podem ser distorcidas.
- Modelos preditivos podem gerar resultados enviesados.

**Estratégias de tratamento:**

1. **Remover registros**

   - Indicado quando o número de nulos é pequeno e a coluna não é crítica.
   - Ex.: 5 registros nulos em 10.000 clientes.

2. **Imputar valores**

   - **Média / Mediana:** substitui valores nulos de colunas numéricas.

     - Mediana é preferida quando há outliers.

   - **Moda:** substitui valores nulos em colunas categóricas (valor mais frequente).
   - **Interpolação:** útil em séries temporais para preencher dados ausentes com base em vizinhos.

**Exemplo prático:**

| Cliente | Idade | Gênero | Valor Compra |
| ------- | ----- | ------ | ------------ |
| 101     | 34    | F      | 200,50       |
| 102     | NaN   | M      | 150,00       |
| 103     | 28    | null   | 450,00       |

**Após imputação:**

- `Idade` do Cliente 102 → média da coluna (ex.: 34 anos)
- `Gênero` do Cliente 103 → moda da coluna (ex.: F)

### **4.2 Duplicatas**

**Definição:**
Registros idênticos ou que representam a mesma entidade mais de uma vez.

**Impacto:**

- Inflam métricas como contagem de clientes ou volume de compras.
- Criam peso artificial em padrões inexistentes, enviesando o modelo.

**Como tratar:**

- Identificar usando **IDs únicos**, como `cliente_id`.
- Remover registros repetidos, mantendo apenas a primeira ocorrência.

**Exemplo:**

| Cliente | Idade | Valor Compra |             |
| ------- | ----- | ------------ | ----------- |
| 103     | 28    | 450,00       |             |
| 103     | 28    | 450,00       | ← duplicado |

**Após remoção:**

- Mantém apenas uma linha para o Cliente 103.

### **4.3 Outliers**

**Definição:**
Valores que estão **muito distantes** da maioria dos dados.

**Exemplos comuns no varejo:**

- Compra de R\$ 50.000 em um dataset onde o ticket médio é R\$ 200.
- Idade registrada como 150 anos.

**Identificação:**

- **Boxplot**: valores fora dos “bigodes” do gráfico.
- **Desvio padrão**: valores acima de 3 desvios da média podem ser considerados outliers.

**Decisão sobre tratamento:**

- **Erro de registro:** corrigir ou remover.
- **Evento raro legítimo:** pode ser mantido, mas o modelo deve ser robusto a esses casos.

**Exemplo prático:**

| Cliente | Valor Compra |           |
| ------- | ------------ | --------- |
| 101     | 200,50       |           |
| 102     | 150,00       |           |
| 103     | 450,00       |           |
| 104     | 50.000,00    | ← outlier |

**Soluções possíveis:**

- Transformação logarítmica da coluna `Valor Compra`.
- Remoção do registro se for erro confirmado.

### **Boas práticas gerais**

1. Sempre manter **backup do dataset original**.
2. Documentar cada transformação realizada.
3. Validar os dados após cada limpeza.
4. Automatizar procedimentos repetitivos quando possível.

## **5. Codificação de Variáveis Categóricas**

### 5.1 Por que codificar variáveis categóricas?

Alguns algoritmos de **machine learning** (como regressão logística, redes neurais e árvores de decisão) **não conseguem trabalhar diretamente com textos ou categorias**.
Por isso, é necessário transformar informações categóricas (nomes, tipos, classificações) em **valores numéricos** que o modelo possa processar.

> **Exemplo:** “Forma de Pagamento” com valores `cartão`, `boleto` e `pix` precisa virar números para que o modelo interprete.

### 5.2 Principais técnicas de codificação

#### **1) Label Encoding**

- **Como funciona:** cada categoria recebe um número inteiro.

  - Ex.: `A = 0`, `B = 1`, `C = 2`

- **Vantagens:**

  - Simples de aplicar.
  - Ocupa pouco espaço em memória.

- **Desvantagens:**

  - Pode **introduzir uma ordem artificial** (ex.: 0 < 1 < 2), mesmo que não exista relação de magnitude entre as categorias.

**Exemplo prático:**

| Forma de Pagamento | Label Encoding |
| ------------------ | -------------- |
| cartão             | 0              |
| boleto             | 1              |
| pix                | 2              |

> **Observação:** para algoritmos baseados em distância (como KNN ou regressão linear), essa ordem pode gerar resultados incorretos.

#### **2) One-Hot Encoding**

- **Como funciona:** cria uma coluna binária para cada categoria.

  - Cada linha recebe `1` na coluna correspondente à sua categoria e `0` nas demais.

- **Vantagens:**

  - Evita ordens artificiais.
  - Adequado para algoritmos que não aceitam valores categóricos.

- **Desvantagens:**

  - Aumenta **muito a dimensionalidade** do dataset se houver muitas categorias.
  - Pode gerar datasets esparsos, aumentando o custo computacional.

**Exemplo prático:**

| Forma de Pagamento | cartão | boleto | pix |
| ------------------ | ------ | ------ | --- |
| cartão             | 1      | 0      | 0   |
| boleto             | 0      | 1      | 0   |
| pix                | 0      | 0      | 1   |

> **Observação:** em datasets com muitas categorias (ex.: cidades, produtos), é preciso avaliar se o One-Hot Encoding é viável ou se técnicas como **Target Encoding** podem ser melhores.

### 5.3 Dicas práticas para o varejo

- Sempre **padronize os nomes das categorias** antes de codificar (`Cartão` → `cartao`, `Boleto` → `boleto`).
- Avalie a **frequência de cada categoria**: categorias muito raras podem ser agrupadas como `outros`.
- Documente a codificação para manter **reprodutibilidade**.

### 5.4 Ligação com o projeto

No nosso projeto de varejo:

- A coluna `Forma de Pagamento` será codificada para treinar os modelos preditivos de comportamento de compra.
- Dependendo do algoritmo escolhido na Aula 3, aplicaremos **Label Encoding** (para árvores de decisão) ou **One-Hot Encoding** (para regressão logística ou redes neurais).

## **6. Normalização e Padronização**

### 6.1 Por que normalizar ou padronizar?

Alguns algoritmos de machine learning **são sensíveis à escala dos dados**, ou seja, valores grandes podem dominar o cálculo de distância ou pesos, prejudicando o desempenho do modelo.

- **Exemplo:** se uma variável `valor_total` varia entre 10 e 50.000 e outra `frequencia_compras` varia entre 1 e 10, a primeira pode “sobrepujar” a segunda em algoritmos baseados em distância (KNN, K-Means) ou gradientes (redes neurais).

Por isso, transformamos os dados para que tenham **escala comparável**, sem alterar a informação relativa.

### 6.2 Normalização (Min-Max Scaling)

- **Objetivo:** reduzir os valores para uma faixa fixa, geralmente **0 a 1**.
- **Fórmula:**

$$
x' = \frac{x - x_{min}}{x_{max} - x_{min}}
$$

- **Quando usar:**

  - Redes neurais (evita saturação de funções de ativação).
  - KNN ou algoritmos baseados em distância.

**Exemplo prático:**

| Valor Original | Normalizado (0–1) |
| -------------- | ----------------- |
| 100            | 0,01              |
| 500            | 0,05              |
| 1000           | 0,10              |

> **Observação:** mantém a proporção entre os valores, mas limita o intervalo.

### 6.3 Padronização (Z-score)

- **Objetivo:** transformar os dados para que tenham **média 0** e **desvio padrão 1**.
- **Fórmula:**

$$
z = \frac{x - \mu}{\sigma}
$$

onde:

- $\mu$ = média da coluna

- $\sigma$ = desvio padrão da coluna

- **Quando usar:**

  - Modelos baseados em distância (KNN, SVM).
  - Regressões lineares ou logísticas.
  - Cenários onde outliers existem e queremos reduzir seu impacto relativo.

**Exemplo prático:**

| Valor Original | Média | Desvio Padrão | Padronizado (Z-score) |
| -------------- | ----- | ------------- | --------------------- |
| 100            | 550   | 450           | -1,0                  |
| 500            | 550   | 450           | -0,11                 |
| 1000           | 550   | 450           | 1,0                   |

> **Observação:** após padronização, os dados podem ter valores negativos e positivos, centrados em zero.

### 6.4 Dicas práticas para o varejo

- Escolha a técnica de acordo com o **algoritmo que será usado** na modelagem:

  - **Redes neurais, KNN:** normalização.
  - **Regressões, SVM:** padronização.

- Sempre **ajuste os parâmetros (min, max, média, desvio)** apenas no **conjunto de treino** e aplique ao conjunto de teste para evitar vazamento de dados.
- Documente a transformação para que seja possível **reproduzir e interpretar** os resultados.

## **7. Atividade Prática Orientada**

**Passos no dataset real do problema:**

1. Carregar o dataset (ex.: `clientes_varejo.csv`).
2. Inspecionar dados (`.info()`, `.describe()`).
3. Tratar valores nulos: escolher estratégia de imputação.
4. Remover duplicatas.
5. Detectar outliers (opcional nesta aula).
6. Aplicar Label Encoding e One Hot Encoding conforme necessário.
7. Normalizar ou padronizar dados numéricos.
8. Salvar dataset tratado para a próxima aula.
