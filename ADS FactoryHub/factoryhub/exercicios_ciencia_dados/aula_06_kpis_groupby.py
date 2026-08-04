"""
Aula 06 - Ciência de Dados: KPIs Industriais & Agrupamento Multidimensional
=============================================================================
Exercício Prático para Alunos:
1. Utilize df.groupby() para agrupar a produção e os defeitos por turno de trabalho.
2. Calcule a taxa de descarte (%) por turno.
"""
import pandas as pd

data = {
    "turno": ["Manhã", "Manhã", "Tarde", "Tarde", "Noite", "Noite"],
    "maquina": ["M1", "M2", "M1", "M2", "M1", "M2"],
    "produzidas": [500, 480, 510, 490, 450, 420],
    "defeito": [10, 5, 12, 8, 25, 30]
}
df = pd.DataFrame(data)

def calcular_kpis_por_turno(df_in):
    """Agrupa por 'turno', soma produzidas e defeitos, e calcula a taxa de defeito em %."""
    # TODO: Implementar o agrupamento groupby e cálculo da taxa
    pass

# TODO: Execute a função e imprima a tabela agrupada
