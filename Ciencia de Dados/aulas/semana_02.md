# Semana 02: CRISP-DM Fase 2 — Entendimento dos Dados (Data Understanding)

## 1. Visão Geral & Contexto do Negócio
Nesta aula, colocaremos em prática a **Fase 2 do CRISP-DM (Data Understanding)** utilizando o dataset oficial de concessão de crédito de uma Fintech (`CRISP_DM_Random_Forest_Credito.ipynb`), localizado na pasta [`materiais/`](../materiais/CRISP_DM_Random_Forest_Credito.ipynb).

O objetivo do negócio é avaliar propostas de empréstimo pessoal online, identificando proponentes com risco de inadimplência (*calote*) antes da aprovação do crédito.

---

## 2. Anatomia do Dataset de Crédito

A base bruta extraída do banco de dados operacional (`df_raw`) contém **3.000 amostras (linhas)** e **15 atributos (colunas)**. Ela reflete a realidade dos sistemas de produção, contendo ruidos intencionais, valores ausentes, despadronização de texto e ruidos de digitação.

### Tabela de Dicionário de Dados

| Atributo | Tipo de Dado | Descrição / Significado no Negócio | Desafios Identificados |
| :--- | :---: | :--- | :--- |
| `proponente_id` | Texto (String) | Identificador único da proposta (ex: `PROP-10001`) | **Sem valor preditivo** (deve ser removido) |
| `idade` | Numérico (Float) | Idade do proponente em anos | Contém outliers espúrios (`-15.0` e `999.0`) |
| `tipo_vinculo` | Categórico (String) | Regime de trabalho (`CLT`, `Autonomo`, `PJ`, etc.) | Strings despadronizadas (`' CLT '`, `'clt'`, `'AUTONOMO'`) |
| `estado_civil` | Categórico (String) | Estado civil (`Solteiro`, `Casado`, `Divorciado`, `Viuvo`) | Dados bem formatados |
| `escolaridade` | Categórico (String) | Nível de instrução (`Medio`, `Superior`, `Pos_Graduacao`) | Dados bem formatados |
| `renda_mensal` | Numérico (Float) | Renda bruta mensal declarada em Reais | Contém **valores nulos (`NaN`)** e valores aberrantes (`999999.0`) |
| `valor_solicitado` | Numérico (Float) | Valor do empréstimo solicitado em Reais | Faixa contínua de R$ 2.000 a R$ 35.000 |
| `numero_parcelas` | Numérico (Int) | Prazo de pagamento em meses (12, 24, 36, 48, 60) | Variável discreta |
| `score_serasa` | Numérico (Float) | Pontuação de crédito (faixa 150 a 990) | Contém **valores nulos (`NaN`)** |
| `num_consultas_recentes` | Numérico (Int) | Consultas ao CPF nos últimos 90 dias | Indicador de urgência financeira |
| `atrasos_ultimos_12m` | Numérico (Int) | Histórico de atrasos no último ano | Forte preditor de risco |
| `ruido_estocastico` | Numérico (Float) | Flutuação aleatória gerada pelo sistema | **Ruído puro** (deve ser descartado pelo modelo) |
| `numero_da_sorte_app` | Numérico (Int) | Número promocional gerado pelo aplicativo | **Sem valor preditivo** |
| `ip_origem_hash` | Texto (String) | Hash do endereço IP do dispositivo | **Sem valor preditivo** |
| `inadimplente` | Binário (Int) | **Variável Alvo (Target)**: `0` = Adimplente (Bom), `1` = Inadimplente (Calote) | **Desbalanceada** (~20% caloteiros) |

---

## 3. Identificação de Ruidos e Glitches em Dados Reais

Na prática profissional de Ciência de Dados, dados brutos nunca vêm limpos. Na base de crédito, temos 5 categorias de ruidos típicos:

1. **Outliers Espúrios (Erros de Entrada de Dados)**: Idades com valor `-15.0` (impossível) ou `999.0` (digitação incorreta).
2. **Outliers Financeiros Aberrantes**: Rendas mensais de `R$ 999.999,00` em propostas de baixo valor.
3. **Valores Ausentes (Missing Values / NaNs)**: Aproximadamente 6% das rendas e 5% dos scores Serasa não foram informados pelo usuário no aplicativo.
4. **Strings Categóricas Sujas**: O mesmo vínculo empregatício aparece cadastrado de formas diferentes devido à falta de validação no formulário web (ex: `'CLT'`, `' CLT '` com espaços, `'clt'` em caixa baixa).
5. **Variáveis Irrelevantes (Ruído Estocástico / Identificadores)**: Atributos como `numero_da_sorte_app` e `ip_origem_hash` que não possuem qualquer relação de causa com o comportamento financeiro do cliente.

---

## 4. Inspeção Prática de Dados com Python e Pandas

Para realizar o **Entendimento dos Dados** no Python, utilizamos 5 comandos essenciais da biblioteca Pandas.

### 4.1 Carregando a Base e Visualizando as Primeiras Linhas
O método `.head(n)` exibe as primeiras `n` linhas do DataFrame para podermos inspecionar a aparência inicial dos dados.

```python
import pandas as pd
import numpy as np

# Exibindo as 5 primeiras linhas do dataset bruto
print(df_raw.head())
```

### 4.2 Verificando os Tipos de Dados e Preenchimento com `.info()`
O método `.info()` apresenta o número total de linhas, o nome de cada coluna, a quantidade de valores não-nulos e o tipo de dado de cada atributo (`float64`, `int64` ou `object`).

```python
# Verificando a estrutura geral e contagem de nao-nulos
df_raw.info()
```

### 4.3 Diagnosticando Valores Ausentes (NaNs) com `.isnull().sum()`
Para saber exatamente quantos dados estão faltando em cada coluna, combinamos `.isnull()` com `.sum()`.

```python
# Contagem exata de valores nulos por coluna
nulos_por_coluna = df_raw.isnull().sum()
print("Valores Ausentes por Coluna:")
print(nulos_por_coluna[nulos_por_coluna > 0])
```

### 4.4 Resumo Estatístico das Variáveis Numéricas com `.describe()`
O método `.describe()` gera estatísticas descritivas (média, desvio padrão, mínimo, quartis e máximo) para identificar rapidamente valores discrepantes (*outliers*).

```python
# Estatisticas descritivas das colunas numericas
print(df_raw[['idade', 'renda_mensal', 'score_serasa', 'valor_solicitado']].describe())
```
> **Atenção ao Mínimo e Máximo**: Note se a idade mínima é negativa (`-15.0`) ou se a máxima é irreal (`999.0`). Isso confirma visualmente a presença de ruidos na base!

### 4.5 Analisando o Desbalanceamento da Variável Alvo (`inadimplente`)
O método `.value_counts(normalize=True)` exibe a proporção percentual de cada classe na variável dependente.

```python
# Proporcao de Adimplentes (0) vs Inadimplentes (1)
proporcao_alvo = df_raw['inadimplente'].value_counts(normalize=True) * 100
print("Proporcao da Variável Alvo:")
print(proporcao_alvo)
```

---

## 5. Exercícios de Fixação & Estudo Dirigido

1. **Qual é o impacto de não identificar idades negativas ou iguais a 999 em uma análise estatística inicial? Como isso afeta o cálculo da média?**
2. **Por que atributos como `proponente_id` e `ip_origem_hash` devem ser removidos do dataset antes do treinamento de modelos preditivos?**
3. **Execute os comandos `.info()` e `.describe()` no notebook da disciplina e responda: quantos valores nulos existem na coluna `renda_mensal` e qual é o valor máximo encontrado na coluna `idade`?**
4. **Explique a diferença entre uma variável categórica nominal (ex: `estado_civil`) e uma variável categórica ordinal (ex: `escolaridade`).**
