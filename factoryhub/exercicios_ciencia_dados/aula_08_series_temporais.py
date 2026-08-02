"""
Aula 08 - Ciência de Dados: Análise de Séries Temporais & Média Móvel
======================================================================
Ressemplagem de dados temporais e extração de curva de tendência.
"""
import pandas as pd

datas = pd.date_range(start="2026-08-02 08:00", periods=10, freq="15min")
temps = [70.5, 71.0, 70.8, 72.5, 74.0, 75.2, 77.8, 79.1, 81.0, 83.5]
df = pd.DataFrame({"temperatura": temps}, index=datas)

df["media_movel_3p"] = df["temperatura"].rolling(window=3).mean()

print("=== Séries Temporais de Telemetria (Resolução 15 min) ===")
print(df.round(2))
print("\nTendência de Longo Prazo:")
print(f"Variação Total no Período: {df['temperatura'].iloc[-1] - df['temperatura'].iloc[0]:.1f} ºC")
print("Alerta: Identificada tendência contínua de aquecimento na estação!")
