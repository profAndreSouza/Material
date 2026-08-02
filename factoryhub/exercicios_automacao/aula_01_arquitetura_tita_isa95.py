"""
Aula 01 - Automação Industrial: Pirâmide ISA-95 e Arquitetura TI/TA
"""
import json

payload_evento = {
    "plant": "SmartN1",
    "station": "Entrada",
    "level_isa95": "Nivel 1 - Controle",
    "sensor_id": "SENS_IND_01",
    "signal_24v": True,
    "event": "piece.detected"
}

print("=== Arquitetura TI/TA - Mapeamento Nível 1 ISA-95 ===")
print(json.dumps(payload_evento, indent=2))
