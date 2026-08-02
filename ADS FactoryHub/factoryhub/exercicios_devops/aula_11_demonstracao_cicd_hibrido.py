"""
Aula 11 - DevOps: Demonstração da Esteira Híbrida CI/CD
"""
status_esteira = {
    "frontend_vercel": "ONLINE (Production)",
    "backend_cloud_run": "SERVED (Scale-to-Zero)",
    "database_cloud_sql": "HEALTHY",
    "ci_cd_status": "ALL PIPELINES GREEN"
}

print("=== DEMONSTRAÇÃO DO CAPSTONE DEVOPS (Vercel + GCP) ===")
for k, v in status_esteira.items():
    print(f"[{k:20s}]: {v}")
