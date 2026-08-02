"""
Encontro 11: PROJETO CAPSTONE FINAL (Resolução Completa de Ponta a Ponta)

Dataset 4: Projeto Capstone Final (data/projeto_final_capstone.csv)
Conceitos: Síntese de todo o ciclo de Ciência de Dados, Detecção de Anomalias via Z-Score (|Z| > 3.0), CEP, Relatório de Qualidade.

Referências Bibliográficas Integradas:
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 1 a 15 - Síntese Teórica).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 1 a 12 - Pandas & Wrangling).
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 1 a 10 - Data Science Fundamentals).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 1 a 16 - Estatística Aplicada).

Formulação Matemática:
- Padronização Z-Score: Z = (x - x̄) / s
- Regra Six-Sigma de Detecção de Anomalias: |Z| > 3.0 (limites críticos de tolerância industrial).
"""

import sys
import os
import pandas as pd
import numpy as np
import plotly.graph_objects as go
from plotly.subplots import make_subplots
from scipy import stats

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'projeto_final_capstone.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    df = pd.read_csv(caminho_csv)
    df['Timestamp'] = pd.to_datetime(df['Timestamp'])
    return df

def gerar_grafico_dinamico_aula11(df: pd.DataFrame):
    """Gera Dashboard Integrador Capstone Interativo com 4 Painéis Analíticos."""
    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=('1. Distribuição de Temperatura por Planta (Boxplot)',
                        '2. Série Temporal de Vibração RMS (Telemetria)',
                        '3. Matriz de Qualidade vs Custo Operacional (Scatter)',
                        '4. Percentual de Lotes com Status de Alerta (Bar Chart)')
    )
    
    # 1. Boxplot Temp por Planta
    for loc in df['Plant_Location'].unique():
        sub = df[df['Plant_Location'] == loc]
        fig.add_trace(go.Box(y=sub['Sensor_Temp'], name=loc), row=1, col=1)
        
    # 2. Scatter Temporal Vibração
    fig.add_trace(go.Scatter(x=df['Timestamp'], y=df['Vibration_RMS'], mode='lines', name='Vibração RMS', line=dict(color='#9C5B3C', width=1.5)), row=1, col=2)
    
    # 3. Scatter Score vs Custo
    fig.add_trace(go.Scatter(x=df['Quality_Score'], y=df['Operational_Cost_USD'], mode='markers', name='Qualidade vs Custo', marker=dict(color='#33513F', opacity=0.6)), row=2, col=1)
    
    # 4. Bar Status
    st_cnt = df.groupby(['Plant_Location', 'Status']).size().unstack(fill_value=0).reset_index()
    fig.add_trace(go.Bar(x=st_cnt['Plant_Location'], y=st_cnt['Operação Normal'], name='Normal', marker_color='#33513F'), row=2, col=2)
    if 'Alerta Crítico' in st_cnt.columns:
        fig.add_trace(go.Bar(x=st_cnt['Plant_Location'], y=st_cnt['Alerta Crítico'], name='Alerta', marker_color='#9C5B3C'), row=2, col=2)
        
    fig.update_layout(
        title_text='<b>Encontro 11: PROJETO CAPSTONE FINAL — Dashboard Integrador de Ciência de Dados</b>',
        template='plotly_white',
        font_family='Inter, sans-serif',
        margin=dict(l=40, r=40, t=60, b=40)
    )
    
    plotly_html = fig.to_html(full_html=False, include_plotlyjs=False)
    print("<!-- PLOTLY_START -->")
    print(plotly_html)
    print("<!-- PLOTLY_END -->")

def exercicio_aluno_aula11(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 11 CAPSTONE FINAL] ---")
    
    # 1. Tratamento de Nulos
    nulos = df['Sensor_Pressure'].isnull().sum()
    df['Sensor_Pressure'] = df['Sensor_Pressure'].fillna(df['Sensor_Pressure'].median())
    
    # 2. Estatística Descritiva por Planta
    desc = df.groupby('Plant_Location')[['Sensor_Temp', 'Quality_Score', 'Operational_Cost_USD']].mean().round(2)
    
    # 3. Teste de Normalidade
    stat_w, p_w = stats.shapiro(df['Sensor_Temp'][:300])
    
    # 4. Z-Score de Anomalias
    z_temp = (df['Sensor_Temp'] - df['Sensor_Temp'].mean()) / df['Sensor_Temp'].std()
    anom = df[z_temp.abs() > 3.0]
    
    print(f"1. Nulos de Pressão Tratados: {nulos} registros preenchidos pela mediana.")
    print("\n2. Média das Variáveis Operacionais por Planta Industrial:")
    print(desc.to_string())
    print(f"\n3. Teste Shapiro-Wilk (Temperatura): W={stat_w:.4f}, p-valor={p_w:.4e}")
    print(f"4. Detecção de Anomalias (Z-Score > 3.0): {len(anom)} lotes em situação crítica identificados.")
    print("\n5. Parecer Executivo Capstone: Processo industrial operacional aprovado com recomendação de manutenção na Planta com maior índice de vibração.")

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 11: PROJETO CAPSTONE FINAL (Dados Inéditos) ===")
    print("=========================================================\n")
    
    df_capstone = carregar_dados()
    gerar_grafico_dinamico_aula11(df_capstone)
    exercicio_aluno_aula11(df_capstone)
    print("\n[OK] Execução da Encontro 11 (Projeto Capstone Final) concluída com sucesso.")
