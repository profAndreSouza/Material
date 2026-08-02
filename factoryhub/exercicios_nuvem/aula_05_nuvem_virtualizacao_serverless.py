"""
===================================================================
=== Encontro 05: Virtualização de Recursos & Serverless ===
===================================================================
"""

def calcular_custo_serverless(reqs: int = 500000):
    print("--- ESTIMATIVA DE CUSTOS SERVERLESS (CLOUD RUN) ---")
    custo_usd = reqs * 0.0000007 # USD por requisição combinada
    print(f"Volume de Requisições: {reqs:,}")
    print(f"Custo Estimado no Cloud Run: ${custo_usd:.4f} USD")

if __name__ == '__main__':
    calcular_custo_serverless()
