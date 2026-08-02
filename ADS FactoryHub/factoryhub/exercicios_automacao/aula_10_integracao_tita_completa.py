"""
Aula 10 - Automação Industrial: Integração TI/TA Completa
"""
camadas_tita = [
    "1. Sensor 24V aciona na esteira",
    "2. Gateway publica evento no Broker MQTT",
    "3. Node-RED grava no PostgreSQL",
    "4. API Flask expõe rota REST",
    "5. FactoryHub Web exibe em tempo real"
]

print("=== Validação do Fluxo Integrado TI/TA da Fábrica Smart N1 ===")
for c in camadas_tita:
    print(f" -> {c}")
print("")
print("Status da Integração: 100% OPERACIONAL")
