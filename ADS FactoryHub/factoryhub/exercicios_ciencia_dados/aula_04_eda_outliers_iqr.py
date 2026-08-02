"""
Aula 04 - Ciência de Dados: Análise Exploratória & Detecção de Outliers (IQR)
=============================================================================
Identificação de anomalias estatísticas pelo método do Intervalo Interquartil.
"""
import numpy as np
import pandas as pd

np.random.seed(42)
dados_normais = np.random.normal(loc=72.0, scale=2.0, size=50)
outliers = np.array([88.5, 92.0, 55.0])
todos_dados = np.concatenate([dados_normais, outliers])

q1 = np.percentile(todos_dados, 25)
q3 = np.percentile(todos_dados, 75)
iqr = q3 - q1
limite_inf = q1 - 1.5 * iqr
limite_sup = q3 + 1.5 * iqr

outliers_detectados = todos_dados[(todos_dados < limite_inf) | (todos_dados > limite_sup)]

print("=== Detecção de Outliers via Método IQR ===")
print(f"Q1 (25%): {q1:.2f} | Q3 (75%): {q3:.2f} | IQR: {iqr:.2f}")
print(f"Limite Inferior: {limite_inf:.2f} | Limite Superior: {limite_sup:.2f}")
print(f"\nTotal de Outliers Identificados: {len(outliers_detectados)}")
print(f"Valores dos Outliers: {outliers_detectados.round(2)}")
