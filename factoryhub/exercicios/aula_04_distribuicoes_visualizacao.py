"""
Encontro 04: Distribuições Estatísticas & Visualização (Normal, Assimetria e Curtose)

Dataset 1: Manufacturing Quality Inspection (data/manufacturing_quality.csv)
Conceitos: Distribuição Normal Gaussiana, Assimetria (Skewness), Curtose (Kurtosis), Regra Empírica, Q-Q Plot.

Referências Bibliográficas:
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 6 - Distribuição Normal).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 3 - Distribuições de Probabilidade).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 9 - Plotting and Visualization).
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 3 & 6 - Visualização e Probabilidade).

Formulação Matemática:
- Função de Densidade Gaussiana: f(x) = (1 / (σ * √(2π))) * exp(-0.5 * ((x - μ) / σ)²)
- Coeficiente de Assimetria de Fisher-Pearson: Sk = ( (1/n) * Σ (x_i - x̄)³ ) / s³
- Coeficiente de Curtose de Excesso: Ku = [ (1/n) * Σ (x_i - x̄)⁴ / s⁴ ] - 3
- Regra Empírica Gaussiana: μ ± 1σ (68.27%), μ ± 2σ (95.45%), μ ± 3σ (99.73%).
"""

import sys
import os
import pandas as pd
import numpy as np
import plotly.express as px
from scipy import stats

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'manufacturing_quality.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula04(df: pd.DataFrame):
    """Gera Violin Plot dinâmico Plotly para avaliação da forma da distribuição de Temperatura."""
    fig = px.violin(
        df,
        y='Temperature',
        x='Defect',
        color='Defect',
        box=True,
        points='all',
        title='<b>Encontro 04: Violin Plot Interativo de Temperatura vs Presença de Defeito</b>',
        labels={'Temperature': 'Temperatura (°C)', 'Defect': 'Peça Defeituosa'},
        color_discrete_map={'Sim': '#9C5B3C', 'Não': '#33513F'},
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

def exercicio_aluno_aula04(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 04] ---")
    temp = df['Temperature']
    skewness = temp.skew()
    kurtosis = temp.kurtosis()
    
    print(f"Média: {temp.mean():.2f} °C | Desvio Padrão: {temp.std():.2f} °C")
    print(f"Assimetria (Skewness): {skewness:.4f} ({'Simétrica' if abs(skewness) < 0.5 else 'Assimétrica'})")
    print(f"Curtose (Kurtosis): {kurtosis:.4f} ({'Mesocúrtica (Normal)' if abs(kurtosis) < 0.5 else 'Não-Normal'})")

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 04: Distribuições & Visualização (Fábrica) ===")
    print("=========================================================\n")
    
    df_quality = carregar_dados()
    gerar_grafico_dinamico_aula04(df_quality)
    exercicio_aluno_aula04(df_quality)
    print("\n[OK] Execução da Encontro 04 concluída com sucesso.")
