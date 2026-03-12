import time
import json
from datetime import datetime
import paho.mqtt.client as mqtt

# -----------------------------
# CONFIGURAÇÕES
# -----------------------------

BROKER = "mqtt"
PORT = 1883
TOPIC = "senai/pii_toy"

QTD_CARROS = 10

ETAPAS = [
    "MONTAGEM_ESTRUTURAL",
    "PINTURA",
    "INSTALACAO_MOTOR",
    "ACABAMENTO_INTERNO",
    "INSPECAO_FINAL",
    "LIBERACAO_TRANSPORTE"
]

TEMPOS_ETAPA = [3, 5, 4, 6, 3, 2]

TEMPO_ENTRE_ETAPA1_E_2 = 2


# -----------------------------
# MQTT
# -----------------------------

client = mqtt.Client()
client.connect(BROKER, PORT)


# -----------------------------
# FUNÇÕES
# -----------------------------

def timestamp():
    return datetime.now().strftime("%Y%m%d%H%M%S")


def gerar_chassi(n):
    return f"CHASSI_{str(n).zfill(5)}"


def publicar(chassi, etapa, status):

    payload = {
        "chassi": chassi,
        "etapa": etapa,
        "status": status,
        "timestamp": timestamp()
    }

    msg = json.dumps(payload)

    client.publish(TOPIC, msg)

    print(msg)


# -----------------------------
# SIMULAÇÃO
# -----------------------------

print("=== SIMULADOR DE LINHA ===")

linha = [None] * len(ETAPAS)     # carro em cada etapa
tempo_restante = [0] * len(ETAPAS)

carro_atual = 1
carros_finalizados = 0

while carros_finalizados < QTD_CARROS:

    # percorre etapas de trás para frente
    for i in reversed(range(len(ETAPAS))):

        if linha[i] is not None:

            tempo_restante[i] -= 1

            if tempo_restante[i] <= 0:

                chassi = linha[i]

                publicar(chassi, ETAPAS[i], "Finalizado")

                # última etapa
                if i == len(ETAPAS) - 1:
                    carros_finalizados += 1
                    linha[i] = None

                else:
                    # mover para próxima etapa se estiver livre
                    if linha[i + 1] is None:

                        linha[i + 1] = chassi
                        tempo_restante[i + 1] = TEMPOS_ETAPA[i + 1]

                        publicar(chassi, ETAPAS[i + 1], "Iniciado")

                        linha[i] = None

    # iniciar novo carro na etapa 1
    if carro_atual <= QTD_CARROS and linha[0] is None:

        chassi = gerar_chassi(carro_atual)

        linha[0] = chassi
        tempo_restante[0] = TEMPOS_ETAPA[0]

        publicar(chassi, ETAPAS[0], "Iniciado")

        carro_atual += 1

    time.sleep(1)

print("Simulação finalizada.")