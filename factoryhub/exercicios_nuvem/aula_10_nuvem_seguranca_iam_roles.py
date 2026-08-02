"""
===================================================================
=== Encontro 10: Segurança IAM, Roles & Service Accounts ===
===================================================================
"""

def inspecionar_iam():
    print("--- GOVERNANÇA DE IDENTIDADE E ACESSO (IAM) ---")
    sa = "collector-sa@smartn1.iam.gserviceaccount.com"
    roles = ["roles/cloudsql.client", "roles/pubsub.publisher"]
    print(f"Service Account: {sa}")
    print(f"Permissões atribuídas: {', '.join(roles)}")

if __name__ == '__main__':
    inspecionar_iam()
