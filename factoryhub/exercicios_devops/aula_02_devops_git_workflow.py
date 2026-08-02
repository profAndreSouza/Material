"""
===================================================================
=== Encontro 02: Controle de Versão com Git & Branching ===
===================================================================
"""

def simular_pull_request():
    print("--- VALIDAÇÃO DE PULL REQUEST EM REPOSITÓRIO GIT ---")
    pr_data = {
        "title": "feat(analytics): adiciona exportacao CSV de telemetria",
        "author": "devops_student",
        "branch_origem": "feature/export-csv",
        "branch_destino": "main",
        "ci_status": "PASSED"
    }
    
    pode_mesclar = pr_data["ci_status"] == "PASSED"
    print(f"PR #{101}: {pr_data['title']}")
    print(f"Origem: {pr_data['branch_origem']} -> Destino: {pr_data['branch_destino']}")
    print(f"Status da Esteira CI: {pr_data['ci_status']}")
    print(f"Permissivo de Merge: {'APROVADO E LIBERADO' if pode_mesclar else 'BLOQUEADO'}")

if __name__ == '__main__':
    simular_pull_request()
