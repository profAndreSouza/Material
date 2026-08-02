"""
Encontro 02: Qualidade dos Dados, Amostragem e Imputação

Dataset 1: Manufacturing Quality Inspection (data/manufacturing_quality.csv)
Conceitos: Técnicas de Amostragem (AAS, Sistemática, Estratificada), Mecanismos de Ausentes (MCAR, MAR, MNAR).

Referências Bibliográficas:
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 1 & 11 - Amostragem).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 2 - Limpeza & Imputação).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 7 - Data Cleaning & Preparation).

Formulação Matemática:
- Amostragem Estratificada Proporcional: n_h = n * (N_h / N), garantindo representatividade do estrato h.
- Erro Amostral Absoluto: e = |x̄ - μ|, onde x̄ é a média amostral e μ a média populacional.
- Imputação Robusta por Mediana: Md = Q2 = P50, minimizando o impacto de observações atípicas (outliers).
"""

import sys
import os
import pandas as pd
import plotly.express as px

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'manufacturing_quality.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula02(df: pd.DataFrame):
    """Gera Boxplot dinâmico Plotly para detecção interativa de outliers em Temperatura por Máquina."""
    fig = px.box(
        df,
        x='Machine_ID',
        y='Temperature',
        color='Shift',
        points='all',
        title='<b>Encontro 02: Diagnóstico Dinâmico de Outliers (Temperatura por Máquina)</b>',
        labels={'Machine_ID': 'Máquina', 'Temperature': 'Temperatura (°C)', 'Shift': 'Turno'},
        color_discrete_sequence=['#33513F', '#B3843C', '#9C5B3C'],
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

def exercicio_aluno_aula02(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 02] ---")
    nulos_antes = df['Pressure'].isnull().sum()
    mediana_press = df['Pressure'].median()
    df['Pressure_Imputed'] = df['Pressure'].fillna(mediana_press)
    nulos_depois = df['Pressure_Imputed'].isnull().sum()
    
    print(f"Valores Ausentes em 'Pressure' Antes: {nulos_antes}")
    print(f"Mediana Aplicada na Imputação: {mediana_press:.2f} bar")
    print(f"Valores Ausentes Após Imputação: {nulos_depois}")
    
    amostra_20pct = df.sample(frac=0.20, random_state=42)
    print(f"Tamanho da Amostra Aleatória (20%): {len(amostra_20pct)} peças")

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 02: Qualidade de Dados & Amostragem (Fábrica) ===")
    print("=========================================================\n")
    
    df_quality = carregar_dados()
    gerar_grafico_dinamico_aula02(df_quality)
    exercicio_aluno_aula02(df_quality)
    print("\n[OK] Execução da Encontro 02 concluída com sucesso.")
