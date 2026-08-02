"""
Encontro 03: Estatística Descritiva (Tendência Central e Dispersão)

Dataset 1: Manufacturing Quality Inspection (data/manufacturing_quality.csv)
Conceitos: Média, Mediana, Moda, Quartis, Variância com Correção de Bessel (n-1), Desvio Padrão, CV%.

Referências Bibliográficas:
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 2 - Resumo de Dados).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 5 - Summary Statistics).
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 4 & 5 - Estatística e Álgebra).

Formulação Matemática:
- Média Aritmética: x̄ = (1/n) * Σ x_i
- Variância Amostral (Correção de Bessel): s² = (1 / (n - 1)) * Σ (x_i - x̄)²
- Desvio Padrão Amostral: s = √(s²)
- Coeficiente de Variação Relativa: CV% = (s / x̄) * 100%
- Amplitude Interquartil: IQR = Q3 - Q1
"""

import sys
import os
import pandas as pd
import numpy as np
import plotly.graph_objects as go

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'manufacturing_quality.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula03(df: pd.DataFrame):
    """Gera gráfico dinâmico de Histograma com Média, Mediana e Quartis usando Plotly Graph Objects."""
    temp = df['Temperature']
    media = temp.mean()
    mediana = temp.median()
    q1 = temp.quantile(0.25)
    q3 = temp.quantile(0.75)
    
    fig = go.Figure()
    fig.add_trace(go.Histogram(
        x=temp,
        name='Temperatura (°C)',
        nbinsx=30,
        marker_color='#33513F',
        opacity=0.65
    ))
    
    fig.add_vline(x=media, line_dash='dash', line_color='#9C5B3C', line_width=3, annotation_text=f'Média ({media:.2f}°C)')
    fig.add_vline(x=mediana, line_dash='solid', line_color='#B3843C', line_width=3, annotation_text=f'Mediana ({mediana:.2f}°C)')
    fig.add_vline(x=q1, line_dash='dot', line_color='#5C8C6E', line_width=2, annotation_text=f'Q1 ({q1:.2f}°C)')
    fig.add_vline(x=q3, line_dash='dot', line_color='#5C8C6E', line_width=2, annotation_text=f'Q3 ({q3:.2f}°C)')
    
    fig.update_layout(
        title='<b>Encontro 03: Histograma Interativo & Medidas de Tendência/Dispersão</b>',
        xaxis_title='Temperatura (°C)',
        yaxis_title='Frequência de Observações',
        template='plotly_white',
        font_family='Inter, sans-serif',
        margin=dict(l=40, r=40, t=60, b=40)
    )
    
    plotly_html = fig.to_html(full_html=False, include_plotlyjs=False)
    print("<!-- PLOTLY_START -->")
    print(plotly_html)
    print("<!-- PLOTLY_END -->")

def exercicio_aluno_aula03(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 03] ---")
    resumo_maquina = df.groupby('Machine_ID')['Production_Time'].agg(
        Média='mean', Mediana='median', Desvio_Padrão='std',
        CV_Pct=lambda x: (x.std() / x.mean()) * 100
    ).round(2)
    print("Relatório Estatístico de Tempo de Produção por Máquina:")
    print(resumo_maquina.to_string())

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 03: Estatística Descritiva (Fábrica) ===")
    print("=========================================================\n")
    
    df_quality = carregar_dados()
    gerar_grafico_dinamico_aula03(df_quality)
    exercicio_aluno_aula03(df_quality)
    print("\n[OK] Execução da Encontro 03 concluída com sucesso.")
