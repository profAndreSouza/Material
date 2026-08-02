"""
===================================================================
=== Encontro 07: Pipelines Avançadas de CI/CD & Caching ===
===================================================================
"""

def simular_caching_esteira():
    print("--- OTIMIZAÇÃO DE ESTEIRA COM PIPELINE CACHING ---")
    tempo_sem_cache = 150.0
    tempo_com_cache = 35.0
    ganho_desempenho = ((tempo_sem_cache - tempo_com_cache) / tempo_sem_cache) * 100
    
    print(f"Tempo Total sem Cache: {tempo_sem_cache:.1f}s")
    print(f"Tempo Total com Cache: {tempo_com_cache:.1f}s")
    print(f"Redução no Tempo de Feedback da Esteira: {ganho_desempenho:.1f}%")

if __name__ == '__main__':
    simular_caching_esteira()
