"""
===================================================================
=== Encontro 08: Protocolos de Comunicação Modbus TCP e MQTT ===
===================================================================
"""

def simular_modbus_e_mqtt():
    print("--- LEITURA MODBUS TCP & PUBLICAÇÃO MQTT ---")
    holding_registers = {
        40001: 6000, # Frequência em Hz x100
        40002: 724,  # Temperatura em °C x10
        40003: 55    # Pressão em bar x10
    }
    
    freq = holding_registers[40001] / 100.0
    temp = holding_registers[40002] / 10.0
    press = holding_registers[40003] / 10.0
    
    print(f"Modbus 40001 -> Frequência: {freq:.2f} Hz")
    print(f"Modbus 40002 -> Temperatura: {temp:.1f} °C")
    print(f"Modbus 40003 -> Pressão: {press:.1f} bar")
    
    mqtt_payload = {
        "topic": "smartn1/telemetry",
        "data": {"freq_hz": freq, "temp_c": temp, "press_bar": press}
    }
    print(f"Mensagem MQTT Publicada: {mqtt_payload}")

if __name__ == '__main__':
    simular_modbus_e_mqtt()
