"""
Aula 01 - Computação em Nuvem: Fundamentos & Elasticidade
"""
def calcular_cluster_cloud(instancias, vcpu_por_inst, ram_gb_por_inst):
    return {
        "instancias_ativas": instancias,
        "total_vcpu": instancias * vcpu_por_inst,
        "total_ram_gb": instancias * ram_gb_por_inst
    }

res = calcular_cluster_cloud(instancias=4, vcpu_por_inst=2, ram_gb_por_inst=8)

print("=== Cálculo de Capacidade Computacional Cloud (Scale-Out) ===")
print(f"Instâncias e2-standard-2 : {res['instancias_ativas']}")
print(f"Total vCPUs Disponíveis  : {res['total_vcpu']} vCPUs")
print(f"Total Memória RAM        : {res['total_ram_gb']} GB RAM")
