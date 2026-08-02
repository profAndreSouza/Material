"""
Encontro 09: Análise Exploratória de Dados (EDA) Pipeline Completo

Dataset 3: Smart Factory Analytics (data/smart_factory_analytics.csv)
Conceitos: Pipeline de EDA Industrial, Engenharia de Atributos, Agregadores Multivariados, Seleção de Features.

Referências Bibliográficas:
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 10 - Data Wrangling & Cap. 12 - Advanced Pandas).
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 10 - Explorando Dados).
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 2 & 4 - Métodos Exploratórios).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 2 & 3 - Análise Multivariada).

Formulação Matemática:
- Atributo Sintético Derivado: Cost_per_Downtime = Maintenance_Cost / Downtime
- Agregação Multivariada: Ȳ_g = (1 / n_g) * Σ_{i ∈ g} Y_i, para cada grupo g (Linha de Produção).
"""

import sys
import os
import pandas as pd
import plotly.express as px

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'smart_factory_analytics.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula09(df: pd.DataFrame):
    """Gera gráfico dinâmico de dispersão 3D/Bubble Chart de Custo vs Eficiência vs Receita."""
    fig = px.scatter(
        df,
        x='Energy_Consumption',
        y='Revenue',
        size='Downtime',
        color='Production_Line',
        hover_data=['Product', 'Machine_Efficiency', 'Defect_Rate'],
        title='<b>Encontro 09: Pipeline EDA Interativo (Consumo Energético vs Receita vs Downtime)</b>',
        labels={'Energy_Consumption': 'Consumo Energético (kWh)', 'Revenue': 'Receita Líquida (USD)', 'Production_Line': 'Linha de Produção'},
        template='plotly_white'
    )
    fig.update_layout(
        font_family='Inter, sans-serif',
        title_font_size=16,
        margin=dict(l=40, r=40, t=60, b=40)
    )
    
    plotly_html = fig.to_html(full_html=False, include_plotlyjs=False)
    print("<!-- PLOTLY_START -->")
    print(plotly_html)
    print("<!-- PLOTLY_END -->")

def exercicio_aluno_aula09(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 09] ---")
    resumo_linha = df.groupby('Production_Line')[['Energy_Consumption', 'Machine_Efficiency', 'Maintenance_Cost', 'Revenue']].mean().round(2)
    print("Síntese Exploratória Completa por Linha de Produção (EDA):")
    print(resumo_linha.to_string())

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 09: Pipeline Completo de EDA (Smart Factory) ===")
    print("=========================================================\n")
    
    df_factory = carregar_dados()
    gerar_grafico_dinamico_aula09(df_factory)
    exercicio_aluno_aula09(df_factory)
    print("\n[OK] Execução da Encontro 09 concluída com sucesso.")
