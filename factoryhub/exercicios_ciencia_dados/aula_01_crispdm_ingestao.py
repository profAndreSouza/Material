"""
Aula 01 - Ciência de Dados: Ciclo CRISP-DM e Ingestão Primária
=============================================================
Demonstração da fase Data Understanding com ingestão de telemetria.
"""
import pandas as pd

data = {
    "piece_id": [f"P-{1000+i}" for i in range(8)],
    "station": ["Entrada", "Usinagem", "Prensa", "Inspeção", "Entrada", "Usinagem", "Prensa", "Saida"],
    "temperature_c": [71.2, 74.5, 82.1, 70.8, 73.9, 85.0, 71.5, 70.5],
    "pressure_bar": [5.2, 5.5, 6.1, 5.1, 5.4, 6.3, 5.2, 5.0],
    "status": ["OK", "OK", "ALARM", "OK", "OK", "ALARM", "OK", "OK"]
}
df = pd.DataFrame(data)

print("=== CRISP-DM: Fase 2 - Data Understanding ===")
print(f"Total de Registros Ingeridos: {df.shape[0]} linhas x {df.shape[1]} colunas")
print("\nPrimeiros 5 registros da telemetria Smart N1:")
print(df.head(5))
print("\nTipos de Dados das Colunas:")
print(df.dtypes)
