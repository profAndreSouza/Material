"""
Aula 02 - Computação em Nuvem: Projetos GCP e Regiões
"""
gcp_project = {
    "project_name": "Smart N1 FactoryHub",
    "project_id": "smartn1-factoryhub-prod",
    "region": "southamerica-east1 (São Paulo)",
    "primary_zone": "southamerica-east1-a",
    "billing_account": "ACTIVE-019283-BILLING"
}

print("=== Especificação do Projeto no Google Cloud Platform ===")
for k, v in gcp_project.items():
    print(f"[{k:18s}]: {v}")
