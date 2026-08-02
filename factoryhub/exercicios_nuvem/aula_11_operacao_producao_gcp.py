"""
Aula 11 - Computação em Nuvem: Status do Ambiente em Produção GCP
"""
status_prod = {
    "domain": "https://smartn1.factoryhub.com",
    "tls_certificate": "Managed Active",
    "cloud_run_status": "SERVED (100% Traffic)",
    "database_ha": "Healthy (Primary + Standby)"
}

print("=== Status Oficial do Ambiente em Produção (Google Cloud) ===")
for k, v in status_prod.items():
    print(f"[{k:20s}]: {v}")
