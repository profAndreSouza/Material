"""
===================================================================
=== Encontro 07: Armazenamento em Nuvem (Cloud Storage Buckets) ===
===================================================================
"""

def inspecionar_bucket():
    print("--- GERENCIAMENTO DE BUCKETS CLOUD STORAGE ---")
    bucket = "gs://smartn1-telemetry-backups"
    lifecycle = "Standard -> Nearline após 30 dias"
    print(f"Bucket URI: {bucket}")
    print(f"Política de Ciclo de Vida: {lifecycle}")

if __name__ == '__main__':
    inspecionar_bucket()
