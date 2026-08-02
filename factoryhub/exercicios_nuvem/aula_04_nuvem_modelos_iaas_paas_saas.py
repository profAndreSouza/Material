"""
===================================================================
=== Encontro 04: Modelos de Serviço (IaaS, PaaS, SaaS) ===
===================================================================
"""

def comparar_modelos():
    print("--- COMPARATIVO DE MODELOS DE SERVIÇO EM NUVEM ---")
    modelos = [
        ("IaaS", "Compute Engine", "Responsável pela VM e SO"),
        ("PaaS", "Cloud Run / Vercel", "Responsável apenas pelo Código"),
        ("SaaS", "Grafana Cloud", "Consome Aplicação Pronta")
    ]
    for mod, srv, resp in modelos:
        print(f"Modelo: {mod:6s} | Serviço: {srv:20s} | Escopo: {resp}")

if __name__ == '__main__':
    comparar_modelos()
