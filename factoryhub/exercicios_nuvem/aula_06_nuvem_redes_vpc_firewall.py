"""
===================================================================
=== Encontro 06: Redes Privadas Virtuais em Nuvem (VPC) ===
===================================================================
"""

def testar_regra_firewall():
    print("--- SIMULAÇÃO DE REGRAS DE FIREWALL DA VPC ---")
    regras = [
        ("ALLOW", "TCP:5000", "0.0.0.0/0", "FactoryHub Web UI"),
        ("ALLOW", "TCP:1883", "10.0.1.0/24", "Mosquitto Broker (Interno)"),
        ("DENY", "ALL", "0.0.0.0/0", "Regra de Bloqueio Padrão")
    ]
    for acao, porta, orig, desc in regras:
        print(f"Ação: {acao:6s} | Porta: {porta:10s} | Origem: {orig:12s} | Desc: {desc}")

if __name__ == '__main__':
    testar_regra_firewall()
