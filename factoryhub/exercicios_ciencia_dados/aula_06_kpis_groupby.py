"""
Aula 06 - Ciência de Dados: KPIs Industriais & Agrupamento Multidimensional
=============================================================================
Cálculo de taxa de descarte e agregação via df.groupby().
"""
import pandas as pd

data = {
    "turno": ["Manhã", "Manhã", "Tarde", "Tarde", "Noite", "Noite"],
    "maquina": ["M1", "M2", "M1", "M2", "M1", "M2"],
    "produzidas": [500, 480, 510, 490, 450, 420],
    "defeito": [10, 5, 12, 8, 25, 30]
}
df = pd.DataFrame(data)
df["taxa_defeito_pct"] = (df["defeito"] / df["produzidas"]) * 100

print("=== Agregação de KPIs por Turno de Trabalho ===")
resumo = df.groupby("turno")[["produzidas", "defeito"]].sum()
resumo["taxa_defeito_turno_%"] = (resumo["defeito"] / resumo["produzidas"]) * 100
print(resumo.round(2))

print("\nMáquina com maior taxa de descarte no turno da Noite:")
noite_df = df[df["turno"] == "Noite"].sort_values(by="taxa_defeito_pct", ascending=False)
print(noite_df[["maquina", "produzidas", "defeito", "taxa_defeito_pct"]].to_string(index=False))
