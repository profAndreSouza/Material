"""
Encontro 01: Introdução à Ciência de Dados e Exploração Inicial dos Dados

Dataset 1: Manufacturing Quality Inspection (data/manufacturing_quality.csv)
Conceitos: CRISP-DM (Business/Data Understanding), Taxonomia de Variáveis (Qualitativas vs Quantitativas).

Referências Bibliográficas:
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 1 - Introdução).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 5 - Estruturas de Dados Pandas).
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 1 - Classificação de Variáveis).

Formulação Matemática & Taxonomia:
- Frequência Relativa Percentual: P = (f / n) * 100%, onde f é a frequência absoluta e n o tamanho da amostra.
- Escalas de Medição: Categórica Nominal (Turno, Operador), Quantitativa Contínua (Temperatura, Pressão).
"""

import sys
import os
import pandas as pd
import plotly.express as px

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'manufacturing_quality.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    """Carrega o dataset de inspeção de qualidade industrial."""
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula01(df: pd.DataFrame):
    """Gera gráfico dinâmico Plotly de Frequência de Tipos de Defeito por Turno."""
    fig = px.histogram(
        df,
        x='Defect_Type',
        color='Shift',
        barmode='group',
        title='<b>Encontro 01: Distribuição Dinâmica de Defeitos por Turno Operacional</b>',
        labels={'Defect_Type': 'Tipo de Defeito', 'count': 'Contagem de Peças', 'Shift': 'Turno'},
        color_discrete_sequence=['#33513F', '#B3843C', '#9C5B3C'],
        template='plotly_white'
    )
    fig.update_layout(
        font_family='Inter, sans-serif',
        title_font_size=16,
        hovermode='closest',
        margin=dict(l=40, r=40, t=60, b=40)
    )
    
    # Exporta o HTML do gráfico Plotly para renderização no front-end Flask
    plotly_html = fig.to_html(full_html=False, include_plotlyjs=False)
    print("<!-- PLOTLY_START -->")
    print(plotly_html)
    print("<!-- PLOTLY_END -->")

def exercicio_aluno_aula01(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 01] ---")
    print(f"Dimensões do Dataset (Linhas, Colunas): {df.shape}")
    print("\nTipos de Dados por Coluna:")
    print(df.dtypes.to_string())
    print("\nFrequência da Variável Categórica 'Defect':")
    print(df['Defect'].value_counts().to_string())

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 01: Introdução & CRISP-DM (Qualidade Fábrica) ===")
    print("=========================================================\n")
    
    df_quality = carregar_dados()
    print("Primeiras 3 linhas do Dataset:")
    print(df_quality.head(3).to_string())
    
    print("\nResumo Estatístico Inicial (describe):")
    print(df_quality.describe().round(2).to_string())
    
    gerar_grafico_dinamico_aula01(df_quality)
    exercicio_aluno_aula01(df_quality)
    print("\n[OK] Execução da Encontro 01 concluída com sucesso.")
