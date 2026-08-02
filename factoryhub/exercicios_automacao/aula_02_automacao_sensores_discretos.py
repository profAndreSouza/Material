"""
===================================================================
=== Encontro 02: Dispositivos Industriais I - Sensores Discretos ===
===================================================================
"""

def testar_sensores_proximidade():
    print("--- TESTE DE COMUTAÇÃO DE SENSORES PROXIMIDADE ---")
    alvos = ["Peça Alumínio", "Peça Aço", "Caixa Plástico", "Êmbolo Magnético"]
    
    for alvo in alvos:
        indutivos_ok = "Alumínio" in alvo or "Aço" in alvo
        capacitivo_ok = True
        magnetico_ok = "Magnético" in alvo
        
        print(f"Alvo: {alvo:18s} | Indutivo: {'[ON]' if indutivos_ok else '[OFF]'} | Capacitivo: {'[ON]' if capacitivo_ok else '[OFF]'} | Magnético: {'[ON]' if magnetico_ok else '[OFF]'}")

if __name__ == '__main__':
    testar_sensores_proximidade()
