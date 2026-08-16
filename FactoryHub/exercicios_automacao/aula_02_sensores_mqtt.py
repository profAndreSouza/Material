"""
Aula 02 - Automação Industrial: Sensores e Cliente MQTT
=======================================================
Exercício Prático para Alunos:
1. Complete a função 'calcular_histerese(s_on, s_off)' para retornar a diferença absoluta entre s_off e s_on.
2. Atribua valores para s_on e s_off e teste a execução.
"""

def calcular_histerese(s_on, s_off):
    """Calcula a histerese de comutação do sensor (diferença absoluta entre acionamento e desacionamento)."""
    # TODO: Implementar o cálculo de histerese
    pass

# TODO: Defina os valores de acionamento (S_ON) e desacionamento (S_OFF) em mm (ex: 9.5 e 10.3)
s_on = None
s_off = None

if s_on is not None and s_off is not None:
    histerese = calcular_histerese(s_on, s_off)
    print("=== Sensor Indutivo - Cálculo de Histerese de Comutação ===")
    print(f"Distância Acionamento (S_ON) : {s_on} mm")
    print(f"Distância Desacionamento (S_OFF): {s_off} mm")
    print(f"Histerese Calculada (H)      : {histerese} mm")
    print("Status MQTT: Cliente configurado para publicar no tópico 'smartn1/estacao/sensor'")
else:
    print("=== Exercício: Defina s_on e s_off para executar o cálculo ===")
