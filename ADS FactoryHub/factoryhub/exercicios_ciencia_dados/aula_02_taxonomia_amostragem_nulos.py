"""
Aula 02 - Ciência de Dados: Taxonomia, Amostragem e Imputação de Nulos
=======================================================================
Tratamento de medições ausentes (NaN) e amostragem estatística.
"""
import pandas as pd
import numpy as np

data = {
    "sensor_id": ["S1", "S2", "S3", "S4", "S5", "S6"],
    "shift": ["Manhã", "Manhã", "Tarde", "Tarde", "Noite", "Noite"],
    "temp_c": [72.1, np.nan, 74.5, 73.0, np.nan, 71.8]
}
df = pd.DataFrame(data)

print("=== Taxonomia e Tratamento de Dados Ausentes ===")
print("Contagem de nulos por coluna:")
print(df.isnull().sum())

media_temp = df["temp_c"].mean()
df["temp_imputada"] = df["temp_c"].fillna(media_temp)

print(f"\nMédia calculada (excluindo NaN): {media_temp:.2f} ºC")
print("\nDataset após imputação pela média:")
print(df[["sensor_id", "shift", "temp_c", "temp_imputada"]])
