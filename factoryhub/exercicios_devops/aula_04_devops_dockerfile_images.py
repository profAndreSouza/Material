"""
===================================================================
=== Encontro 04: Containerização de Aplicações com Docker ===
===================================================================
"""

def inspecionar_camadas_docker():
    print("--- CONSTRUÇÃO DE IMAGEM DOCKER (CAMADAS OCI) ---")
    layers = [
        ("Layer 1 (Base)", "python:3.11-slim", "125 MB"),
        ("Layer 2 (Workdir)", "WORKDIR /app", "0 KB"),
        ("Layer 3 (Deps)", "pip install -r requirements.txt", "45 MB"),
        ("Layer 4 (App Code)", "COPY . .", "1.2 MB")
    ]
    for id_l, cmd, tamanho in layers:
        print(f"{id_l:18s} | {cmd:38s} | Tamanho: {tamanho}")

if __name__ == '__main__':
    inspecionar_camadas_docker()
