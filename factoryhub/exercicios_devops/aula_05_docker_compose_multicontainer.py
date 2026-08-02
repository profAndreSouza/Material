"""
Aula 05 - DevOps: Orquestração Declarativa com Docker Compose
"""
compose_summary = {
    "version": "3.8",
    "services": {
        "factoryhub": {"build": ".", "ports": ["5000:5000"]},
        "db": {"image": "postgres:15-alpine", "volumes": ["db_data:/var/lib/postgresql/data"]}
    }
}

print("=== Resumo do Arquivo docker-compose.yml ===")
print(f"Serviços Orquestrados: {list(compose_summary['services'].keys())}")
print("Comando de Execução : docker compose up -d")
