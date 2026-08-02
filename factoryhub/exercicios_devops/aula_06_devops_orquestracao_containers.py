"""
===================================================================
=== Encontro 06: Introdução à Orquestração de Containers ===
===================================================================
"""

def simular_orquestrador_pods():
    print("--- MONITORAMENTO DE PODS (ORQUESTRAÇÃO KUBERNETES / CLOUD RUN) ---")
    pods = [
        {"name": "factoryhub-api-pod-7d4f9", "status": "Running", "restarts": 0},
        {"name": "factoryhub-api-pod-88fa2", "status": "Running", "restarts": 0},
        {"name": "factoryhub-api-pod-11cb4", "status": "Running", "restarts": 1}
    ]
    for p in pods:
        print(f"Pod: {p['name']} | Status: {p['status']} | Restarts: {p['restarts']}")

if __name__ == '__main__':
    simular_orquestrador_pods()
