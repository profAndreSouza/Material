"""
===================================================================
=== Encontro 09: Ingestão de Dados via Node-RED & Broker Mosquitto ===
===================================================================
"""
import json

def fluxo_nodered_simulado():
    print("--- FLUXO DE INGESTÃO NODE-RED -> MOSQUITTO ---")
    nodo_input_opcua = {"node_id": "opcua_in_1", "raw_value": 1, "station": "ColorTest"}
    
    # Processamento do nó 'Function' em JS
    nodo_function_output = {
        "plant": "SmartN1",
        "station": nodo_input_opcua["station"],
        "event": "color.processed",
        "color": "Azul" if nodo_input_opcua["raw_value"] == 1 else "Vermelho"
    }
    
    print("Nó 'MQTT Out' transmitindo o resultado para smartn1/color:")
    print(json.dumps(nodo_function_output, indent=2))

if __name__ == '__main__':
    fluxo_nodered_simulado()
