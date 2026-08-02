"""
Aula 07 - Ciência de Dados: Inferência Estatística & Teste t de Student
========================================================================
Validação formal de hipóteses com scipy.stats e avaliação de p-valor.
"""
from scipy import stats
import numpy as np

reg_antiga = np.array([72.1, 71.8, 72.4, 72.0, 71.9, 72.2])
reg_nova = np.array([75.4, 74.9, 75.8, 75.1, 75.3, 75.0])

stat_sh, p_sh = stats.shapiro(reg_antiga)
t_stat, p_valor = stats.ttest_ind(reg_antiga, reg_nova)

print("=== Teste de Hipóteses: Comparação de Regulagens da Prensa ===")
print(f"Shapiro-Wilk Test (Normalidade): p-valor = {p_sh:.4f} (Aceita Normalidade)")
print(f"Teste t de Student: t-stat = {t_stat:.4f} | p-valor = {p_valor:.6f}")
print("\nConclusão Estatística (alfa = 0.05):")
if p_valor < 0.05:
    print("Rejeita-se H0: A alteração na regulagem provocou mudança estatisticamente significativa na temperatura!")
else:
    print("Aceita-se H0: Não há evidência estatística de diferença entre as regulagens.")
