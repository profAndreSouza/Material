"""
Aula 02 - Ciência de Dados: Taxonomia, Amostragem e Imputação de Nulos
=======================================================================
Exercício Prático para Alunos:
1. Verifique a quantidade de valores nulos no DataFrame utilizando df.isnull().sum().
2. Calcule a média da coluna 'temp_c' e faça a imputação dos valores ausentes usando fillna().
"""
import pandas as pd
import numpy as np

data = {
    "sensor_id": ["S1", "S2", "S3", "S4", "S5", "S6"],
    "shift": ["Manhã", "Manhã", "Tarde", "Tarde", "Noite", "Noite"],
    "temp_c": [72.1, np.nan, 74.5, 73.0, np.nan, 71.8]
}
df = pd.DataFrame(data)

def imputar_temperatura_media(df_in):
    """Calcula a média de temp_c e preenche valores nulos em nova coluna temp_imputada."""
    # TODO: Implementar a imputação de nulos pela média
    pass

# TODO: Execute a função e exiba os resultados
