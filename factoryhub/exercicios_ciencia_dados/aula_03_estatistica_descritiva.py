"""
Aula 03 - Ciência de Dados: Estatística Descritiva & Medidas de Dispersão
=========================================================================
Cálculo de Média, Mediana, Desvio Padrão e Coeficiente de Variação (CV%).
"""
import numpy as np
import pandas as pd

temperaturas = [71.2, 72.0, 71.8, 84.5, 71.5, 72.2, 71.9, 72.1]
arr = np.array(temperaturas)

media = np.mean(arr)
mediana = np.median(arr)
desvio = np.std(arr, ddof=1)
cv = (desvio / media) * 100

print("=== Resumo Estatístico dos Sensores da Esteira ===")
print(f"Média Aritmética : {media:.2f} ºC")
print(f"Mediana          : {mediana:.2f} ºC")
print(f"Desvio Padrão    : {desvio:.2f} ºC")
print(f"Coeficiente Var. : {cv:.2f}%")
print("\nInterpretação: A diferença entre média e mediana indica assimetria positiva devido ao pico isolado de 84.5ºC.")
