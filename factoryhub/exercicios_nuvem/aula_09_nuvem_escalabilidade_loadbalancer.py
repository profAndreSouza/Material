"""
===================================================================
=== Encontro 09: Escalabilidade & Cloud Load Balancer ===
===================================================================
"""

def simular_autoscaling(cpu_pct: float):
    min_inst, max_inst = 2, 10
    inst_atuais = max_inst if cpu_pct > 70.0 else min_inst
    print(f"Carga Global da CPU: {cpu_pct:.1f}% -> Auto-scaling dimensiona a frota para {inst_atuais} instâncias")

if __name__ == '__main__':
    print("--- TESTE DE AUTOSCALING E LOAD BALANCER ---")
    simular_autoscaling(45.0)
    simular_autoscaling(88.0)
