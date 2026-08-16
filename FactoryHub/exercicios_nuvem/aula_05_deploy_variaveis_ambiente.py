"""
Aula 05 - Computação em Nuvem: Variáveis de Ambiente para Deploy
================================================================
Exercício Prático para Alunos:
1. Utilize os.getenv() para carregar as variáveis de ambiente 'DATABASE_URL' e 'MQTT_BROKER_HOST' com valores padrão (fallbacks).
"""
import os

# TODO: Obtenha as variáveis de ambiente usando os.getenv()
db_url = None
mqtt_host = None

print("=== Configuração da Aplicação via Variáveis de Ambiente ===")
# TODO: Exiba os valores obtidos
