"""
Aula 03 - Computação em Nuvem: Cloud Storage & Buckets
"""
bucket_spec = {
    "bucket_uri": "gs://smartn1-telemetry-storage",
    "storage_class": "STANDARD",
    "location": "SOUTHAMERICA-EAST1",
    "lifecycle_rule": "Mover objetos com > 30 dias para NEARLINE"
}

print("=== Especificação do Bucket no Cloud Storage ===")
print(f"URI do Bucket: {bucket_spec['bucket_uri']}")
print(f"Classe      : {bucket_spec['storage_class']}")
print(f"Regra de Ciclo de Vida: {bucket_spec['lifecycle_rule']}")
