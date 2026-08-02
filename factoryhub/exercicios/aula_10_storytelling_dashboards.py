"""
Encontro 10: Storytelling com Dados & Comunicação Executiva

Dataset 3: Smart Factory Analytics (data/smart_factory_analytics.csv)
Conceitos: Storytelling com Dados, Pirâmide de Minto, KPI OEE (Disponibilidade x Desempenho x Qualidade), Dashboards.

Referências Bibliográficas:
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 3 - Visualizando Dados & Storytelling).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 9 - Visualização de Dados).
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 2 - Comunicação de Resultados).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 1 - Apresentação Gerencial).

Formulação Matemática dos KPIs:
- Disponibilidade = [ 1 - (Downtime Total / Tempo Total Operacional) ] * 100%
- Qualidade = [ 1 - (Defect_Rate / 100) ] * 100%
- KPI OEE (Overall Equipment Effectiveness) = (Disponibilidade / 100) * (Machine_Efficiency / 100) * (Qualidade / 100) * 100%
"""

import sys
import os
import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'smart_factory_analytics.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula10(df: pd.DataFrame):
    """Gera Dashboard Executivo Interativo de 4 Painéis (2x2 Grid) usando Plotly Subplots."""
    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=('1. Eficiência por Linha (%)', '2. Consumo Energético vs Downtime',
                        '3. Taxa de Defeitos por Produto (%)', '4. Matriz Custo de Manutenção vs Receita')
    )
    
    # 1. Bar Chart Eficiência
    eff = df.groupby('Production_Line')['Machine_Efficiency'].mean().reset_index()
    fig.add_trace(go.Bar(x=eff['Production_Line'], y=eff['Machine_Efficiency'], marker_color='#33513F', name='Eficiência (%)'), row=1, col=1)
    
    # 2. Scatter Energy vs Downtime
    fig.add_trace(go.Scatter(x=df['Energy_Consumption'], y=df['Downtime'], mode='markers', marker=dict(color='#B3843C', opacity=0.7), name='Energy vs Downtime'), row=1, col=2)
    
    # 3. Bar Defect Rate
    def_rate = df.groupby('Product')['Defect_Rate'].mean().reset_index()
    fig.add_trace(go.Bar(x=def_rate['Product'], y=def_rate['Defect_Rate'], marker_color='#9C5B3C', name='Defeito (%)'), row=2, col=1)
    
    # 4. Scatter Cost vs Revenue
    fig.add_trace(go.Scatter(x=df['Maintenance_Cost'], y=df['Revenue'], mode='markers', marker=dict(color='#5C8C6E', opacity=0.7), name='Custo vs Receita'), row=2, col=2)
    
    fig.update_layout(
        title_text='<b>Encontro 10: Dashboard Executivo de Storytelling Industrial (Smart Factory)</b>',
        template='plotly_white',
        font_family='Inter, sans-serif',
        showlegend=False,
        margin=dict(l=40, r=40, t=60, b=40)
    )
    
    plotly_html = fig.to_html(full_html=False, include_plotlyjs=False)
    print("<!-- PLOTLY_START -->")
    print(plotly_html)
    print("<!-- PLOTLY_END -->")

def exercicio_aluno_aula10(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 10] ---")
    kpis = {
        'Receita Total (USD)': f"${df['Revenue'].sum():,.2f}",
        'Eficiência Média (%)': f"{df['Machine_Efficiency'].mean():.1f}%",
        'Tempo de Parada Total (Horas)': f"{df['Downtime'].sum():.1f}h",
        'Custo Total de Manutenção (USD)': f"${df['Maintenance_Cost'].sum():,.2f}"
    }
    print("Relatório de Comunicação Executiva — Principais KPIs da Fábrica Inteligente:")
    for k, v in kpis.items():
        print(f"  • {k}: {v}")

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 10: Storytelling & Dashboard (Smart Factory) ===")
    print("=========================================================\n")
    
    df_factory = carregar_dados()
    gerar_grafico_dinamico_aula10(df_factory)
    exercicio_aluno_aula10(df_factory)
    print("\n[OK] Execução da Encontro 10 concluída com sucesso.")
