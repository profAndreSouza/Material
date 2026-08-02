"""
===================================================================
=== Encontro 04: Atuadores Pneumáticos & Inversores de Frequência ===
===================================================================
"""

def controle_velocidade_esteira(freq_hz: float):
    polos = 4
    n_sincrona = (120 * freq_hz) / polos
    n_real = n_sincrona * 0.96 # 4% escorregamento
    print(f"Comando de Frequência ao Inversor: {freq_hz:.1f} Hz -> Velocidade Motor: {n_real:.1f} RPM")

if __name__ == '__main__':
    print("--- CONTROLE V/f DE MOTORES TRIFÁSICOS ---")
    for f in [15.0, 30.0, 45.0, 60.0]:
        controle_velocidade_esteira(f)
