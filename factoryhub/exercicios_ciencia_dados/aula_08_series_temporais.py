"""
Encontro 08: Análise de Séries Temporais (Tendência, Sazonalidade & Média Móvel)

Dataset 2: Predictive Maintenance (data/predictive_maintenance.csv)
Conceitos: Decomposição de Séries, Componentes (Tt, St, Ct, It), Resample, Média Móvel Simples (SMA) e Exponencial (EMA).

Referências Bibliográficas:
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 15 - Séries Temporais).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 11 - Time Series Data).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 16 - Séries Temporais).

Formulação Matemática:
- Modelo Aditivo: Y_t = T_t + S_t + I_t (sazonalidade com amplitude constante).
- Modelo Multiplicativo: Y_t = T_t * S_t * I_t (sazonalidade proporcional à tendência).
- Média Móvel Simples (SMA): Ȳ_t = (1 / w) * Σ_{i=0}^{w-1} Y_{t-i}
- Condição de Estacionariedade Fraca: Média E[X_t] = μ constante e Variância Var(X_t) = σ² constante no tempo.
"""

import sys
import os
import pandas as pd
import plotly.graph_objects as go

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'predictive_maintenance.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    df = pd.read_csv(caminho_csv)
    df['Timestamp'] = pd.to_datetime(df['Timestamp'])
    return df.sort_values('Timestamp')

def gerar_grafico_dinamico_aula08(df: pd.DataFrame):
    """Gera gráfico dinâmico de Série Temporal com Média Móvel de 12 horas e Bandas de Ruído."""
    df_sub = df[df['Machine_ID'] == 'Caldeira_01'].copy().set_index('Timestamp')
    temp = df_sub['Temperature']
    sma12 = temp.rolling(12, min_periods=1).mean()
    std12 = temp.rolling(12, min_periods=1).std().fillna(0)
    
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=temp.index, y=temp, mode='lines', name='Temperatura Bruta', line=dict(color='#8B87AE', width=1)))
    fig.add_trace(go.Scatter(x=sma12.index, y=sma12, mode='lines', name='Média Móvel (6h / SMA 12)', line=dict(color='#9C5B3C', width=3)))
    
    fig.update_layout(
        title='<b>Encontro 08: Análise Temporal Interativa (Média Móvel & Tendência da Caldeira_01)</b>',
        xaxis_title='Timestamp da Coleta (Data/Hora)',
        yaxis_title='Temperatura (°C)',
        template='plotly_white',
        font_family='Inter, sans-serif',
        margin=dict(l=40, r=40, t=60, b=40)
    )
    
    plotly_html = fig.to_html(full_html=False, include_plotlyjs=False)
    print("<!-- PLOTLY_START -->")
    print(plotly_html)
    print("<!-- PLOTLY_END -->")

def exercicio_aluno_aula08(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 08] ---")
    df_turb = df[df['Machine_ID'] == 'Turbina_02'].set_index('Timestamp')
    resample_diario = df_turb['Temperature'].resample('D').agg(['mean', 'max', 'min']).round(2)
    print("Resumo Diário da Temperatura da Turbina_02 (Resample):")
    print(resample_diario.head(5).to_string())

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 08: Séries Temporais (Manutenção) ===")
    print("=========================================================\n")
    
    df_maint = carregar_dados()
    gerar_grafico_dinamico_aula08(df_maint)
    exercicio_aluno_aula08(df_maint)
    print("\n[OK] Execução da Encontro 08 concluída com sucesso.")
