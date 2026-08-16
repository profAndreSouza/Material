"""
Aula 07 - Ciência de Dados: Inferência Estatística & Teste t de Student
========================================================================
Exercício Prático para Alunos:
1. Execute o Teste t de Student para duas amostras independentes (scipy.stats.ttest_ind)
   e verifique se a diferença entre as médias das regulagens é estatisticamente significativa (p-valor < 0.05).
"""
from scipy import stats
import numpy as np

def testar_diferenca_regulagens(amostra_a, amostra_b):
    """Aplica o Teste t de Student e indica se rejeita ou aceita a hipótese nula H0."""
    # TODO: Calcule t_stat e p_valor via stats.ttest_ind
    pass

reg_antiga = np.array([72.1, 71.8, 72.4, 72.0, 71.9, 72.2])
reg_nova = np.array([75.4, 74.9, 75.8, 75.1, 75.3, 75.0])

# TODO: Execute o teste de hipóteses e exiba a conclusão
