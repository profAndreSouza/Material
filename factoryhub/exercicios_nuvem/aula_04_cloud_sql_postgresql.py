"""
Aula 04 - Computação em Nuvem: Cloud SQL PostgreSQL
"""
cloud_sql = {
    "instance": "smartn1-postgres-instance",
    "engine": "PostgreSQL 15",
    "tier": "db-custom-2-7680",
    "high_availability": True,
    "failover_replica": "southamerica-east1-b"
}

print("=== Instância Gerenciada Cloud SQL (GCP) ===")
print(f"Engine : {cloud_sql['engine']} (Tier: {cloud_sql['tier']})")
print(f"Status HA Multi-AZ: {'ATIVO' if cloud_sql['high_availability'] else 'DESATIVADO'}")
print(f"Zona de Failover  : {cloud_sql['failover_replica']}")
