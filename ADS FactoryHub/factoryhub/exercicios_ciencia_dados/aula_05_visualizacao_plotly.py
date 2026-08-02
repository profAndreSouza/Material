"""
Aula 05 - Ciência de Dados: Visualização em Python & Gráficos Plotly
=====================================================================
Geração de gráficos interativos com marcação Plotly para a aplicação web.
"""
import plotly.graph_objects as go

estacoes = ["Entrada", "Usinagem", "Prensa", "Inspeção", "Embalagem"]
pecas_ok = [450, 430, 410, 400, 395]
pecas_nok = [10, 20, 20, 10, 5]

fig = go.Figure(data=[
    go.Bar(name='Conformes (OK)', x=estacoes, y=pecas_ok, marker_color='#198754'),
    go.Bar(name='Refugos (NOK)', x=estacoes, y=pecas_nok, marker_color='#dc3545')
])
fig.update_layout(
    title='Rendimento por Estação da Planta Smart N1',
    barmode='stack',
    height=350,
    margin=dict(l=20, r=20, t=40, b=20)
)

plotly_html = fig.to_html(full_html=False, include_plotlyjs='cdn')

print("Gráfico de Barras Empilhadas de Produção por Estação compilado.")
print("<!-- PLOTLY_START -->")
print(plotly_html)
print("<!-- PLOTLY_END -->")
