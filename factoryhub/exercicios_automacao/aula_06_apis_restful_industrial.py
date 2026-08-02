"""
Aula 06 - Automação Industrial: APIs RESTful Industriais
"""
import json

api_kpis_response = {
    "status": 200,
    "data": {
        "total_telemetry": 14200,
        "total_pieces": 1850,
        "total_alarms": 2,
        "plant_status": "OPERATIONAL"
    }
}

print("=== Simulação de Endpoint REST HTTP GET /api/kpis ===")
print(json.dumps(api_kpis_response, indent=2))
