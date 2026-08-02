"""
Aula 10 - Computação em Nuvem: GCP Artifact Registry
"""
artifact_spec = {
    "repository": "southamerica-east1-docker.pkg.dev/smartn1-prod/apps",
    "image_name": "factoryhub",
    "tag": "v1.0.0"
}

full_image_uri = f"{artifact_spec['repository']}/{artifact_spec['image_name']}:{artifact_spec['tag']}"

print("=== Repositório de Imagens OCI no Artifact Registry ===")
print(f"URI Completa da Imagem: {full_image_uri}")
