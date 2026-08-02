"""
===================================================================
=== Encontro 08: Bancos de Dados Gerenciados (Cloud SQL) ===
===================================================================
"""

def simular_failover_cloud_sql():
    print("--- ALTA DISPONIBILIDADE E FAILOVER CLOUD SQL ---")
    status = {
        "primary": "southamerica-east1-a [ONLINE]",
        "standby": "southamerica-east1-b [STANDBY SYNCHRONIZED]",
        "ha_status": "ENABLED"
    }
    print(f"Status Primário: {status['primary']}")
    print(f"Status Standby:  {status['standby']}")
    print(f"Alta Disponibilidade: {status['ha_status']}")

if __name__ == '__main__':
    simular_failover_cloud_sql()
