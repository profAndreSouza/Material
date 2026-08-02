"""
Encontro 05: Inferência Estatística & Intervalos de Confiança (SciPy)

Dataset 2: Predictive Maintenance (data/predictive_maintenance.csv)
Conceitos: Teorema do Limite Central (TLC), Erro Padrão da Média (SEM), Intervalos de Confiança (95% IC), Distribuição t de Student.

Referências Bibliográficas:
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 10 - Estimativa por Intervalo).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 4 - Inferência Estatística).
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 6 & 7 - Probabilidade e Inferência).

Formulação Matemática:
- Teorema do Limite Central (TLC): X̄ ~ N(μ, σ² / n), para n ≥ 30.
- Erro Padrão da Média (SEM): SEM = s / √n
- Margem de Erro (E): E = t_{α/2, n-1} * (s / √n)
- Intervalo de Confiança (95% IC): IC = x̄ ± E
- Dimensionamento Amostral Mínimo: n = ( (z_{α/2} * s) / E_alvo )²
"""

import sys
import os
import pandas as pd
import numpy as np
import plotly.graph_objects as go
from scipy import stats

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'predictive_maintenance.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula05(df: pd.DataFrame):
    """Gera gráfico dinâmico Plotly de Intervalos de Confiança (95% IC) de Temperatura por Equipamento."""
    stats_df = df.groupby('Machine_ID')['Temperature'].agg(['mean', 'sem', 'count']).reset_index()
    stats_df['ci95'] = stats_df['sem'] * stats.t.ppf((1 + 0.95) / 2., stats_df['count'] - 1)
    
    fig = go.Figure()
    fig.add_trace(go.Scatter(
        x=stats_df['Machine_ID'],
        y=stats_df['mean'],
        error_y=dict(type='data', array=stats_df['ci95'], visible=True, color='#9C5B3C', thickness=2.5, width=6),
        mode='markers+lines',
        marker=dict(size=12, color='#33513F'),
        line=dict(color='#5C8C6E', width=2),
        name='Média & IC (95%)'
    ))
    
    fig.update_layout(
        title='<b>Encontro 05: Estimativa de Temperatura Média com Intervalos de Confiança (95% IC)</b>',
        xaxis_title='Equipamento Industrial',
        yaxis_title='Temperatura Média (°C)',
        template='plotly_white',
        font_family='Inter, sans-serif',
        margin=dict(l=40, r=40, t=60, b=40)
    )
    
    plotly_html = fig.to_html(full_html=False, include_plotlyjs=False)
    print("<!-- PLOTLY_START -->")
    print(plotly_html)
    print("<!-- PLOTLY_END -->")

def exercicio_aluno_aula05(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 05] ---")
    vib = df['Vibration']
    n = len(vib)
    media_amostral = vib.mean()
    sem = stats.sem(vib)
    
    ic_95 = stats.norm.interval(0.95, loc=media_amostral, scale=sem)
    margem_erro = (ic_95[1] - ic_95[0]) / 2.0
    
    print(f"Média Amostral de Vibração RMS: {media_amostral:.4f}")
    print(f"Erro Padrão da Média (SEM): {sem:.4f}")
    print(f"Margem de Erro (95% Confiança): ±{margem_erro:.4f}")
    print(f"Intervalo de Confiança 95%: [{ic_95[0]:.4f}, {ic_95[1]:.4f}]")

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 05: Inferência Estatística & IC (Manutenção) ===")
    print("=========================================================\n")
    
    df_maint = carregar_dados()
    gerar_grafico_dinamico_aula05(df_maint)
    exercicio_aluno_aula05(df_maint)
    print("\n[OK] Execução da Encontro 05 concluída com sucesso.")
