"""
Aula 03 - Automação Industrial: Roteamento de Mensagens com Node-RED
"""
def node_red_rule_engine(topic, payload):
    if "alarme" in topic or payload.get("temperature", 0) > 80.0:
        return {"output_node": "MQTT Out Alarm", "target": "smartn1/alarmes/critico"}
    return {"output_node": "Database Insert", "target": "smartn1/telemetria/normal"}

msg_simulada = {"station": "Prensa", "temperature": 84.2}
res = node_red_rule_engine("smartn1/prensa/telemetria", msg_simulada)

print("=== Simulação do Fluxo Roteador Node-RED ===")
print(f"Mensagem de Entrada: {msg_simulada}")
print(f"Ação do Nó Visual  : Roteado para {res['target']} via {res['output_node']}")
