"""
===================================================================
=== Encontro 01: Fundamentos de Nuvem & Escalabilidade ===
===================================================================
"""

def simular_elasticidade():
    print("--- CÁLCULO DE CAPACIDADE ELASTICA EM NUVEM ---")
    instancias = 4
    vcpus_por_instancia = 2
    ram_gb_por_instancia = 8
    
    total_vcpu = instancias * vcpus_por_instancia
    total_ram = instancias * ram_gb_por_instancia
    
    print(f"Cluster Cloud (Scale-Out: {instancias} Instâncias e2-standard-2):")
    print(f"vCPUs Totais: {total_vcpu} | RAM Total: {total_ram} GB")

if __name__ == '__main__':
    simular_elasticidade()
