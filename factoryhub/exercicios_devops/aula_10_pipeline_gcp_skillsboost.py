"""
Aula 10 - DevOps: Pipeline Corporativa GitHub Actions -> GCP
"""
steps_pipeline_gcp = [
    "1. Checkout do Repositório",
    "2. Autenticação na GCP via Workload Identity",
    "3. Build da Imagem Docker OCI",
    "4. Push para o GCP Artifact Registry",
    "5. Deploy automático no GCP Cloud Run"
]

print("=== Passos do Pipeline de Produção (GitHub Actions + GCP) ===")
for step in steps_pipeline_gcp:
    print(f" -> {step}")
