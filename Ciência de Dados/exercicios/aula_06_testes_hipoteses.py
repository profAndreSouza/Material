"""
Encontro 06: Testes de Hipóteses Formais (Shapiro-Wilk, KS, Qui-Quadrado)

Dataset 2: Predictive Maintenance (data/predictive_maintenance.csv)
Conceitos: Hipóteses H0 vs H1, p-valor, Erros Tipo I (α) e Tipo II (β), Shapiro-Wilk, Kolmogorov-Smirnov, Qui-Quadrado (χ²).

Referências Bibliográficas:
- BUSSAB, Wilton O.; MORETTIN, Pedro A. Estatística Básica. 8. ed. Saraiva, 2013 (Cap. 12 - Testes de Hipóteses & Cap. 14 - Qui-Quadrado).
- FÁVERO, Luiz Paulo; BELFIORE, Patrícia. Manual de Análise de Dados. Elsevier, 2017 (Cap. 5 - Testes de Hipóteses).
- MCKINNEY, Wes. Python para Análise de Dados. 3. ed. Novatec, 2023 (Cap. 13 - Introduction to Modeling Libraries).
- GRUS, Joel. Data Science do Zero. 2. ed. Alta Books, 2021 (Cap. 7 - Hipóteses e Inferência).

Formulação Matemática:
- Regra de Decisão pelo p-valor: Rejeita H0 se p-valor ≤ α (onde α = 0.05).
- Teste Kolmogorov-Smirnov: D = max |S(x) - F(x)|, maior distância vertical entre a acumulada empírica S(x) e a teórica F(x).
- Teste Qui-Quadrado de Independência: χ² = Σ [ (O_ij - E_ij)² / E_ij ], com graus de liberdade df = (r - 1) * (c - 1).
"""

import sys
import os
import pandas as pd
import plotly.express as px
from scipy import stats

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'predictive_maintenance.csv')

def carregar_dados(caminho_csv: str = DATA_PATH) -> pd.DataFrame:
    return pd.read_csv(caminho_csv)

def gerar_grafico_dinamico_aula06(df: pd.DataFrame):
    """Gera gráfico dinâmico Plotly de Falhas de Máquina por Equipamento para o Teste Qui-Quadrado."""
    ct = pd.crosstab(df['Machine_ID'], df['Machine_Failure']).reset_index()
    df_melt = pd.melt(ct, id_vars=['Machine_ID'], value_vars=['Não', 'Sim'], var_name='Falha', value_name='Contagem')
    
    fig = px.bar(
        df_melt,
        x='Machine_ID',
        y='Contagem',
        color='Falha',
        barmode='group',
        title='<b>Encontro 06: Teste Qui-Quadrado de Independência (Falhas por Equipamento)</b>',
        labels={'Machine_ID': 'Equipamento', 'Contagem': 'Frequência de Registros', 'Falha': 'Ocorreu Falha?'},
        color_discrete_map={'Não': '#33513F', 'Sim': '#9C5B3C'},
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

def exercicio_aluno_aula06(df: pd.DataFrame):
    print("\n--- [EXERCÍCIO PRÁTICO DO ALUNO - AULA 06] ---")
    temp = df['Temperature']
    
    # 1. Teste de Normalidade de Shapiro-Wilk
    sw_stat, sw_p = stats.shapiro(temp[:300])
    print(f"1. Teste Shapiro-Wilk (Temperatura): W={sw_stat:.4f}, p-valor={sw_p:.4e}")
    print(f"   Decisão (α=5%): {'Normal (Não rejeita H0)' if sw_p > 0.05 else 'Não Normal (Rejeita H0)'}")
    
    # 2. Teste Kolmogorov-Smirnov
    ks_stat, ks_p = stats.kstest(temp, stats.norm(temp.mean(), temp.std()).cdf)
    print(f"\n2. Teste Kolmogorov-Smirnov: D={ks_stat:.4f}, p-valor={ks_p:.4e}")
    
    # 3. Teste Qui-Quadrado
    ct_table = pd.crosstab(df['Machine_ID'], df['Machine_Failure'])
    chi2, chi2_p, dof, _ = stats.chi2_contingency(ct_table)
    print(f"\n3. Teste Qui-Quadrado de Independência: Chi2={chi2:.4f}, p-valor={chi2_p:.4e}, Graus de Liberdade={dof}")

if __name__ == '__main__':
    print("=========================================================")
    print("=== Encontro 06: Testes de Hipóteses (Manutenção) ===")
    print("=========================================================\n")
    
    df_maint = carregar_dados()
    gerar_grafico_dinamico_aula06(df_maint)
    exercicio_aluno_aula06(df_maint)
    print("\n[OK] Execução da Encontro 06 concluída com sucesso.")
