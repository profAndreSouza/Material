"""
===================================================================
=== Encontro 09: Estratégias de Deploy Blue-Green & Rollback ===
===================================================================
"""

def simular_blue_green():
    print("--- SIMULAÇÃO DE DEPLOY BLUE-GREEN ---")
    ambientes = {
        "BLUE": {"version": "v1.0.0", "traffic": 0},
        "GREEN": {"version": "v1.1.0", "traffic": 100}
    }
    print("Alternância de Tráfego Concluída com Sucesso:")
    for env, spec in ambientes.items():
        print(f"Ambiente {env:5s} | Versão: {spec['version']} | Carga de Tráfego: {spec['traffic']}%")

if __name__ == '__main__':
    simular_blue_green()
