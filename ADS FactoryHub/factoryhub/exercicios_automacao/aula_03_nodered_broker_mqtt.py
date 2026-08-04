"""
Aula 03 - Automação Industrial: Roteamento de Mensagens com Node-RED
====================================================================
Exercício Prático para Alunos:
1. Complete a função 'node_red_rule_engine(topic, payload)':
   - Se "alarme" estiver no tópico OU a temperatura do payload for > 80.0:
     retorne o dicionário {"output_node": "MQTT Out Alarm", "target": "smartn1/alarmes/critico"}
   - Caso contrário:
     retorne o dicionário {"output_node": "Database Insert", "target": "smartn1/telemetria/normal"}
"""

def node_red_rule_engine(topic, payload):
    """Motor de regras simulando um fluxo de roteamento do Node-RED."""
    # TODO: Implemente a regra de roteamento
    pass

# Teste da função
msg_simulada = {"station": "Prensa", "temperature": 84.2}
res = node_red_rule_engine("smartn1/prensa/telemetria", msg_simulada)

print("=== Simulação do Fluxo Roteador Node-RED ===")
print(f"Mensagem de Entrada: {msg_simulada}")
print(f"Ação do Nó Visual  : {res}")
