"""
===================================================================
=== Encontro 03: Regiões GCP & Zonas de Disponibilidade ===
===================================================================
"""

def listar_topologia_gcp():
    print("--- TOPOLOGIA DE REGIONALIZAÇÃO GCP ---")
    regiao = "southamerica-east1 (São Paulo)"
    zonas = ["southamerica-east1-a", "southamerica-east1-b", "southamerica-east1-c"]
    print(f"Região Oficial: {regiao}")
    for z in zonas:
        print(f"-> Zona de Disponibilidade Ativa: {z}")

if __name__ == '__main__':
    listar_topologia_gcp()
