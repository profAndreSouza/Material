"""
Aula 07 - Automação Industrial: Gestão de Alarmes LSE / LSI
=============================================================
Exercício Prático para Alunos:
1. Complete a função 'verificar_limites(valor, lsi, lse)':
   - Se valor > lse: retorne "CRITICAL: Limite Superior de Especificação (LSE) Excedido!"
   - Se valor < lsi: retorne "WARNING: Limite Inferior de Especificação (LSI) Atingido!"
   - Caso contrário: retorne "OK: Operação Dentro dos Parâmetros"
"""

def verificar_limites(valor, lsi, lse):
    """Verifica se o valor informado violou os limites LSI (Limite Inferior) ou LSE (Limite Superior)."""
    # TODO: Implemente a verificação dos limites operacionais
    pass

lsi_pressao = 4.5
lse_pressao = 7.0

print("=== Monitoramento de Limites Operacionais de Pressão ===")
# TODO: Teste a função verificar_limites com diferentes valores de pressão
