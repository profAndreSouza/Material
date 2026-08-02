"""
Aula 06 - Computação em Nuvem: Cloud Run Serverless (Scale-to-Zero)
"""
def simular_cloud_run_scale(requisicoes_simultaneas, req_por_instancia=80):
    if requisicoes_simultaneas == 0:
        return 0 # Scale to Zero
    instancias = (requisicoes_simultaneas // req_por_instancia) + 1
    return instancias

print("=== Comportamento de Autoscaling do GCP Cloud Run ===")
print(f"  0 Req Simultâneas -> {simular_cloud_run_scale(0)} Instâncias (Custo $0)")
print(f"250 Req Simultâneas -> {simular_cloud_run_scale(250)} Instâncias ativas")
