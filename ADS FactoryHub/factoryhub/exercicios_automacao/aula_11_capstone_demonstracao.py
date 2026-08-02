"""
Aula 11 - Automação Industrial: Demonstração Capstone Fabril
"""
def simular_triagem(piece_id, cor, peso_g):
    aprovada = (cor in ["Azul", "Verde"]) and (140 <= peso_g <= 160)
    desvio = "ESTEIRA PRINCIPAL" if aprovada else "PISTA DE DESVIO PNEUMÁTICO"
    return f"Peça {piece_id} [{cor}, {peso_g}g] -> Roteada para: {desvio}"

print("=== DEMONSTRAÇÃO DO CAPSTONE FABRIL SMART N1 ===")
print(simular_triagem("P-201", "Azul", 152))
print(simular_triagem("P-202", "Vermelho", 135))
