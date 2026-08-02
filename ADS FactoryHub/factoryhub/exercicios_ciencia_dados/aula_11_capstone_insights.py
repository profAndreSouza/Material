"""
Aula 11 - Ciência de Dados: Projeto Capstone & Insights Globais
================================================================
Consolidação dos resultados analíticos do ecossistema Smart N1.
"""
import plotly.graph_objects as go
import pandas as pd

metricas = {
    "Metrica": ["CRISP-DM Ingestão", "Tratamento de Nulos", "EDA & Outliers", "Testes Inferenciais", "Ganho de OEE Final"],
    "Status": ["100% Concluído", "Imputação Validada", "Filtro IQR Ativo", "p-valor < 0.05", "85.5% OEE Alcançado"]
}
df_capstone = pd.DataFrame(metricas)

print("=== PROJETO CAPSTONE: CONSOLIDAÇÃO DOS INSIGHTS DE DADOS ===")
print(df_capstone.to_string(index=False))

fig = go.Figure(go.Indicator(
    mode = "gauge+number+delta",
    value = 85.5,
    domain = {'x': [0, 1], 'y': [0, 1]},
    title = {'text': "OEE Global Alcançado (%)"},
    delta = {'reference': 78.0, 'increasing': {'color': "green"}},
    gauge = {
        'axis': {'range': [None, 100]},
        'bar': {'color': "#198754"},
        'steps': [
            {'range': [0, 65], 'color': "#ffc107"},
            {'range': [65, 85], 'color': "#0dcaf0"},
            {'range': [85, 100], 'color': "#d1e7dd"}
        ]
    }
))

fig.update_layout(height=300, margin=dict(l=20, r=20, t=50, b=20))
plotly_html = fig.to_html(full_html=False, include_plotlyjs='cdn')

print("<!-- PLOTLY_START -->")
print(plotly_html)
print("<!-- PLOTLY_END -->")
