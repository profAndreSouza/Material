"""
===================================================================
=== Encontro 03: Integração Contínua (CI) com GitHub Actions ===
===================================================================
"""

def simular_runner_ci():
    print("--- RUNNER DE CI GITHUB ACTIONS (BUILD & TEST) ---")
    etapas = [
        ("Checkout Code", 0.8),
        ("Setup Python 3.11", 1.2),
        ("Install Requirements", 4.5),
        ("Run Pytest Suite", 2.1)
    ]
    
    tempo_total = 0.0
    for nome, t in etapas:
        tempo_total += t
        print(f"[STEP OK] {nome:25s} ({t:.1f}s)")
    print(f"Workflow Finalizado com Sucesso em {tempo_total:.1f}s!")

if __name__ == '__main__':
    simular_runner_ci()
