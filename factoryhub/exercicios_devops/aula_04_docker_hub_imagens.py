"""
Aula 04 - DevOps: Compilação de Imagens e Docker Hub
"""
cmds_docker = [
    "docker build -t factoryhub:latest .",
    "docker tag factoryhub:latest usuario/factoryhub:v1.0.0",
    "docker push usuario/factoryhub:v1.0.0"
]

print("=== Sequência de Comandos para Publicação no Docker Hub ===")
for c in cmds_docker:
    print(f"$ {c}")
