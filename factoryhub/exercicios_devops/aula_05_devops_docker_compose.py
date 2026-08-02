"""
===================================================================
=== Encontro 05: Multi-Contêineres com Docker Compose ===
===================================================================
"""

def simular_docker_compose_up():
    print("--- AMBIENTE MULTI-CONTÊINER (DOCKER COMPOSE) ---")
    servicos = {
        "factoryhub_app": {"port": 5000, "status": "running"},
        "mosquitto_broker": {"port": 1883, "status": "running"},
        "db_postgres": {"port": 5432, "status": "running"}
    }
    for nome, info in servicos.items():
        print(f"Serviço: {nome:16s} | Porta: {info['port']} | Status: [UP] {info['status']}")

if __name__ == '__main__':
    simular_docker_compose_up()
