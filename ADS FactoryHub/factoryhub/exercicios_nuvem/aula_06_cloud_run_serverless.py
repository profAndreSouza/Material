"""
Aula 06 - Computação em Nuvem: Cloud Run Serverless (Scale-to-Zero)
===================================================================
Exercício Prático para Alunos:
1. Complete a função 'simular_cloud_run_scale(requisicoes_simultaneas, req_por_instancia=80)':
   - Se requisicoes_simultaneas == 0: retorne 0 (Scale-to-Zero).
   - Caso contrário: retorne a quantidade de instâncias necessárias (divisão inteira + 1).
"""

def simular_cloud_run_scale(requisicoes_simultaneas, req_por_instancia=80):
    """Calcula a quantidade de contêineres ativados pelo mecanismo de autoscaling."""
    # TODO: Implemente a regra de dimensionamento do Cloud Run
    pass

# TODO: Teste a função para 0 requisições e 250 requisições simultâneas
