"""
Encontro 07: Correlação e Associação entre Variáveis (Pearson & Spearman)

Dataset 2: Predictive Maintenance (data/predictive_maintenance.csv)
Conceitos: Coeficiente de Pearson (r), Correlação de Postos de Spearman (ρ), Causalidade vs Correlação, Crosstab.

Referências Bibliográficas:
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 4 - Associação entre Variáveis).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 4 - Correlação e Associação).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 7 & 10 - Data Wrangling & Crosstab).
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 5 - Correlação).

Formulação Matemática:
- Coeficiente Linear de Pearson: r = Cov(X,Y) / (s_x * s_y) = Σ (x_i - x̄)(y_i - ȳ) / [ √(Σ (x_i - x̄)²) * √(Σ (y_i - ȳ)²) ]
- Coeficiente de Postos de Spearman: ρ = 1 - [ (6 * Σ d_i²) / (n * (n² - 1)) ], onde d_i é a diferença de postos.
- Estatística t de Significância da Correlação: t = r * √( (n - 2) / (1 - r²) ) ~ t_{n-2}
"""

import sys
import os
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'predictive_maintenance.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula07(df: pd.DataFrame):
    """Gera Heatmap dinâmico Plotly da Matriz de Correlação de Pearson."""
    cols_num = ['Temperature', 'Vibration', 'Torque', 'RPM', 'Tool_Wear']
    matriz_corr = df[cols_num].corr(method='pearson').round(3)
    
    fig = px.imshow(
        matriz_corr,
        text_auto=True,
        aspect='auto',
        color_continuous_scale='Blues',
        title='<b>Encontro 07: Matriz de Correlação Interativa de Pearson (Variáveis de Telemetria)</b>',
        labels=dict(color="Coeficiente r")
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

def exercicio_aluno_aula07(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 07] ---")
    cols_num = ['Temperature', 'Vibration', 'Torque', 'RPM', 'Tool_Wear']
    print("Matriz de Correlação por Postos de Spearman (ρ):")
    print(df[cols_num].corr(method='spearman').round(3).to_string())

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 07: Correlação & Associação (Manutenção) ===")
    print("=========================================================\n")
    
    df_maint = carregar_dados()
    gerar_grafico_dinamico_aula07(df_maint)
    exercicio_aluno_aula07(df_maint)
    print("\n[OK] Execução da Encontro 07 concluída com sucesso.")
