"""
Aula 04 - Ciência de Dados: Análise Exploratória & Outliers (Método IQR)
========================================================================
Exercício Prático para Alunos:
1. Complete a função 'detectar_outliers_iqr(dados)' que calcula Q1 (25%), Q3 (75%), IQR = Q3 - Q1,
   e identifica os valores que estão fora do intervalo [Q1 - 1.5*IQR, Q3 + 1.5*IQR].
"""
import pandas as pd

def detectar_outliers_iqr(dados):
    """Identifica outliers em uma série numérica usando a regra do Intervalo Interquartil (IQR)."""
    # TODO: Implemente o cálculo de Q1, Q3, IQR, limite inferior e limite superior
    pass

temperaturas = pd.Series([65.2, 64.8, 66.1, 65.5, 64.9, 999.0, 65.8, 66.0])
# TODO: Execute a detecção de outliers e exiba os limites calculados
