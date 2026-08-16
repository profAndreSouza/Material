# Semana 03: EDA Avançada (Fase 2) & Preparação dos Dados (Fase 3)

> **Formato de Aula Prática**: Esta aula possui uma versão interativa em Jupyter Notebook disponível em [`semana_03.ipynb`](semana_03.ipynb).

## 1. Visão Geral & Objetivos de Aprendizagem
Nesta aula, concluiremos a **Fase 2 (Data Understanding)** com a Análise Exploratória de Dados (EDA) avançada utilizando medidas de tendência central, dispersão e gráficos Seaborn, e executaremos a **Fase 3 (Data Preparation)** no mesmo dataset de risco de crédito (`CRISP_DM_Random_Forest_Credito.ipynb`).

---

## 2. Parte I: Análise Exploratória de Dados (EDA)

### Medidas Estatísticas de Tendência Central vs. Dispersão
- **Média vs. Mediana**: Em variáveis assimétricas como `renda_mensal`, a média é distorcida por altos salários. A mediana fornece o centro real.
- **Intervalo Interquartil (IQR)**: Diferença entre o percentil 75% ($Q_3$) e o percentil 25% ($Q_1$). Define a caixa do Boxplot.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Configuração gráfica
sns.set_theme(style="whitegrid")
```

---

## 3. Parte II: CRISP-DM Fase 3 — Pipeline de Data Preparation

O pipeline de tratamento transforma dados brutos e ruidosos em um conjunto de matrizes limpas ($X, y$):

1. **Padronização de Strings**: `.str.strip().str.upper()`
2. **Sanitização de Outliers Espúrios**: Substituição de idades inválidas (`< 18` ou `> 100`) e rendas absurdamente altas por `np.nan`.
3. **Engenharia de Atributos (Feature Engineering)**:
   - `valor_parcela = valor_solicitado / numero_parcelas`
   - `comprometimento_renda = valor_parcela / (renda_mensal + 1e-5)`
4. **Imputação de Valores Nulos**: Preenchimento pela Mediana em colunas numéricas (`.fillna()`).
5. **Descarte de Ruídos e Identificadores**: `.drop(columns=['proponente_id', 'ip_origem_hash', ...])`.
6. **Codificação One-Hot Encoding**: `pd.get_dummies(..., drop_first=True)`.
7. **Divisão Treino/Teste**: `train_test_split(..., test_size=0.25, stratify=y)`.

---

## 4. Exercícios de Fixação & Estudo Dirigido

1. Por que a imputação de valores nulos utilizando a **Mediana** é preferível à **Média** em variáveis financeiras como renda mensal?
2. Qual a utilidade da função `pd.get_dummies()` com a opção `drop_first=True`?
3. O que acontece com os dados quando definimos `stratify=y` na função `train_test_split`?
