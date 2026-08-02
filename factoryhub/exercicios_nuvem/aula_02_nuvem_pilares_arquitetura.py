"""
===================================================================
=== Encontro 02: Os 5 Pilares da Arquitetura em Nuvem ===
===================================================================
"""

def inspecionar_pilares():
    print("--- 5 PILARES WELL-ARCHITECTED FRAMEWORK ---")
    pilares = [
        "1. Excelência Operacional (IaC)",
        "2. Segurança (Privilégio Mínimo & TLS)",
        "3. Confiabilidade (Multi-AZ Failover)",
        "4. Eficiência de Performance (Redis Caching)",
        "5. Otimização de Custos (Desligamento Noturno)"
    ]
    for p in pilares:
        print(f"[OK] {p}")

if __name__ == '__main__':
    inspecionar_pilares()
