"""
Aula 05 - Computação em Nuvem: Variáveis de Ambiente para Deploy
"""
import os

db_url = os.getenv("DATABASE_URL", "postgresql://user:secret@cloudsql-host:5432/factoryhub")
mqtt_host = os.getenv("MQTT_BROKER_HOST", "broker.hivemq.com")

print("=== Configuração da Aplicação via Variáveis de Ambiente ===")
print(f"DATABASE_URL    : {db_url}")
print(f"MQTT_BROKER_HOST: {mqtt_host}")
