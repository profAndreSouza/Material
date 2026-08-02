"""
Aula 07 - Automação Industrial: Gestão de Alarmes LSE / LSI
"""
def verificar_limites(valor, lsi, lse):
    if valor > lse:
        return "CRITICAL: Limite Superior de Especificação (LSE) Excedido!"
    elif valor < lsi:
        return "WARNING: Limite Inferior de Especificação (LSI) Atingido!"
    return "OK: Operação Dentro dos Parâmetros"

lsi_pressao = 4.5
lse_pressao = 7.0

print("=== Monitoramento de Limites Operacionais de Pressão ===")
print(f"Pressão 5.8 bar -> {verificar_limites(5.8, lsi_pressao, lse_pressao)}")
print(f"Pressão 7.4 bar -> {verificar_limites(7.4, lsi_pressao, lse_pressao)}")
