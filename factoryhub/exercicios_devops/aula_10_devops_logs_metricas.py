"""
===================================================================
=== Encontro 10: Centralização de Logs & Regras de Alertas ===
===================================================================
"""
import json
from datetime import datetime

def simular_centralizacao_logs():
    print("--- CENTRALIZAÇÃO E INGESTÃO DE LOGS ESTRUTURADOS ---")
    log_record = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "service": "factoryhub-backend",
        "level": "INFO",
        "message": "Solicitação de telemetria processada",
        "status_code": 200
    }
    print(json.dumps(log_record, indent=2))

if __name__ == '__main__':
    simular_centralizacao_logs()
