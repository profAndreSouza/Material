"""
===================================================================
=== Encontro 07: Ciclo de Scan e Programação em Texto Estruturado ===
===================================================================
"""

def simulador_scan_st(s1_entrada: bool, s2_cor_azul: bool):
    print("--- EXECUÇÃO DA LÓGICA ST NO CICLO DE SCAN DO CLP ---")
    esteira = False
    cilindro_desvio = False
    
    # Trecho equivalente ao Texto Estruturado (ST):
    # IF s1_entrada THEN esteira := TRUE; END_IF;
    # IF s2_cor_azul THEN cilindro_desvio := TRUE; END_IF;
    if s1_entrada:
        esteira = True
    if s2_cor_azul:
        cilindro_desvio = True
        
    print(f"Entradas lidas na PII: S1_Entrada={s1_entrada}, S2_Cor_Azul={s2_cor_azul}")
    print(f"Saídas atualizadas na PIQ: Esteira={esteira}, Cilindro_Desvio={cilindro_desvio}")

if __name__ == '__main__':
    simulador_scan_st(True, True)
