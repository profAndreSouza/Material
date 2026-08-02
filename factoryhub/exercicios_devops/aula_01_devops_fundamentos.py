"""
===================================================================
=== Encontro 01: Fundamentos de DevOps & Cultura Dev/Ops ===
===================================================================
"""

def calcular_lead_time():
    print("--- CÁLCULO DE METRICAS DE ENTREGA DE SOFTWARE ---")
    tempo_commit_ate_deploy_minutos = [15, 30, 22, 18, 40]
    lead_time_medio = sum(tempo_commit_ate_deploy_minutos) / len(tempo_commit_ate_deploy_minutos)
    print(f"Histórico de Entregas (min): {tempo_commit_ate_deploy_minutos}")
    print(f"Lead Time Médio de Mudança: {lead_time_medio:.1f} minutos")

if __name__ == '__main__':
    calcular_lead_time()
