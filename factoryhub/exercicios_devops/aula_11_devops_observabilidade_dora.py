"""
===================================================================
=== Encontro 11: Observabilidade de Sistemas & Métricas DORA ===
===================================================================
"""

def calcular_desempenho_dora():
    print("--- PAINEL DORA DE ENGENHARIA DE SOFTWARE ---")
    frequencia_deploy = "14 deploys / dia"
    lead_time_mudanca = "24 minutos"
     taxa_falha_mudanca = 0.025 # 2.5%
    tempo_restauracao = "8 minutos"
    
    print(f"Deployment Frequency:     {frequencia_deploy}")
    print(f"Lead Time for Changes:    {lead_time_mudanca}")
    print(f"Change Failure Rate:      {taxa_falha_mudanca*100:.1f}%")
    print(f"Time to Restore Service:  {tempo_restauracao}")
    print(f"---------------------------------------------")
    print(f"Classificação Geral DORA: ENGENHARIA ELITE")

if __name__ == '__main__':
    calcular_desempenho_dora()
