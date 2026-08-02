"""
===================================================================
=== Encontro 01: Introdução à Automação Industrial & Pirâmide ISA-95 ===
===================================================================
"""
import json

def simular_integracao_isa95():
    print("--- INTEGRAÇÃO TI/TA: DA PLANTA SMART N1 AO SOFTWARE ---")
    sinal_campo = {
        "sensor_id": "S1_ENTRADA",
        "nivel_isa95": "Nível 0 - Processo Físico",
        "tensao_leitura_volts": 24.0,
        "estado": True
    }
    
    pacote_ti = {
        "planta": "SmartN1",
        "estacao": "Entrada_Pecas",
        "evento": "peca.chegada",
        "detalhes": sinal_campo
    }
    
    print("Payload Gerado para o Broker MQTT:")
    print(json.dumps(pacote_ti, indent=2))

if __name__ == '__main__':
    simular_integracao_isa95()
