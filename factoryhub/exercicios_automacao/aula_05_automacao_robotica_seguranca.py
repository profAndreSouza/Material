"""
===================================================================
=== Encontro 05: Robótica Industrial & Segurança Célula NR-12 ===
===================================================================
"""

def checar_permissivos_seguranca():
    print("--- MONITORAMENTO DE SEGURANÇA NR-12 (CÉLULA ROBOTIZADA) ---")
    sensores_seguranca = {
        "Canal 1 - Emergência": True,
        "Canal 2 - Emergência": True,
        "Cortina de Luz Integridade": True,
        "Trava da Porta": True
    }
    
    seguro = all(sensores_seguranca.values())
    print(f"Status do Relé de Segurança Duplo Canal: {'PERMISSIVO HABILITADO' if seguro else 'EMERGÊNCIA ATIVADA'}")

if __name__ == '__main__':
    checar_permissivos_seguranca()
