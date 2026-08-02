"""
===================================================================
=== Encontro 11: Dashboards Operacionais & Indicador OEE ===
===================================================================
"""

def calcular_oee_linha():
    print("--- MONITORAMENTO EM TEMPO REAL DE OEE (SMART N1) ---")
    disponibilidade = 0.95  # 95% do tempo em operação
    desempenho = 0.92      # 92% da velocidade nominal
    qualidade = 0.98       # 98% de peças aprovadas
    
    oee = disponibilidade * desempenho * qualidade * 100
    print(f"Disponibilidade: {disponibilidade*100:.1f}%")
    print(f"Desempenho:      {desempenho*100:.1f}%")
    print(f"Qualidade:       {qualidade*100:.1f}%")
    print(f"-----------------------------------")
    print(f"OEE Global da Planta Smart N1: {oee:.2f}%")

if __name__ == '__main__':
    calcular_oee_linha()
