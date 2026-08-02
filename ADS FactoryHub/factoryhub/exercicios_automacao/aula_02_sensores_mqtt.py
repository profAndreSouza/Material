"""
Aula 02 - Automação Industrial: Sensores e Cliente MQTT
"""
def calcular_histerese(s_on, s_off):
    h = abs(s_off - s_on)
    return h

s_on = 9.5  # mm
s_off = 10.3 # mm
histerese = calcular_histerese(s_on, s_off)

print("=== Sensor Indutivo - Cálculo de Histerese de Comutação ===")
print(f"Distância Acionamento (S_ON) : {s_on} mm")
print(f"Distância Desacionamento (S_OFF): {s_off} mm")
print(f"Histerese Calculada (H)      : {histerese:.2f} mm")
print("Status MQTT: Cliente configurado para publicar no tópico 'smartn1/estacao/sensor'")
