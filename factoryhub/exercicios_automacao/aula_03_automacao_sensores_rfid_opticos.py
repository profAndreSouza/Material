"""
===================================================================
=== Encontro 03: Sensores Fotoelétricos e Leitura de Tag RFID ===
===================================================================
"""

def leitor_rfid_esteira():
    print("--- RASTREABILIDADE DE PRODUTO VIA RFID NA ESTEIRA ---")
    tags_lidas = [
        {"epc": "E200001B9412", "cor": "Vermelho", "qualidade": "OK"},
        {"epc": "E200001B9413", "cor": "Azul", "qualidade": "OK"},
        {"epc": "E200001B9414", "cor": "Verde", "qualidade": "DEFEITO"}
    ]
    
    for tag in tags_lidas:
        print(f"Tag RFID EPC: {tag['epc']} | Cor: {tag['cor']:8s} | Status: {tag['qualidade']}")

if __name__ == '__main__':
    leitor_rfid_esteira()
