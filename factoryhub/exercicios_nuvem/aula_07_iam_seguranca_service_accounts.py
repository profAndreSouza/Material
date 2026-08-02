"""
Aula 07 - Computação em Nuvem: Segurança IAM e Service Accounts
"""
sa_config = {
    "service_account": "sa-factoryhub-api@smartn1-prod.iam.gserviceaccount.com",
    "roles": [
        "roles/cloudsql.client",
        "roles/storage.objectViewer",
        "roles/logging.logWriter"
    ]
}

print("=== Configuração de IAM & Menor Privilégio ===")
print(f"Service Account: {sa_config['service_account']}")
print("Papeis (Roles) Atribuídos:")
for r in sa_config['roles']:
    print(f" -> {r}")
