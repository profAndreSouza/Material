"""
===================================================================
=== Encontro 11: FinOps, Governança de Custos e Operações ===
===================================================================
"""

def simular_economia_finops():
    print("--- ANÁLISE DE FINOPS E INSTÂNCIAS SPOT ---")
    custo_ondemand = 450.00
    custo_spot = custo_ondemand * 0.30
    economia = custo_ondemand - custo_spot
    print(f"Custo On-Demand: ${custo_ondemand:.2f} USD")
    print(f"Custo Spot:      ${custo_spot:.2f} USD")
    print(f"Economia Gerada: ${economia:.2f} USD/mês (70% de desconto)")

if __name__ == '__main__':
    simular_economia_finops()
