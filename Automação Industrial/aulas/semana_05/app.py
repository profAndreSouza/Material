#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
===============================================================================
Fábrica Virtual IIoT — Simulador Monolítico Flask & Gateway MQTT
Semana 05: Orquestração de Dados e Fluxos IIoT com Node-RED
Disciplina: Automação Industrial
===============================================================================
"""

import os
import time
import json
import random
import threading
from datetime import datetime
from flask import Flask, render_template, request, jsonify
import paho.mqtt.client as mqtt

# -----------------------------------------------------------------------------
# Configurações do Broker MQTT e Aplicação
# -----------------------------------------------------------------------------
BROKER_HOST = os.getenv("MQTT_BROKER_HOST", "mosquitto")
BROKER_PORT = int(os.getenv("MQTT_BROKER_PORT", 1883))
BROKER_KEEPALIVE = 60
CLIENT_ID = f"flask_simulator_{random.randint(1000, 9999)}"

app = Flask(__name__)

# -----------------------------------------------------------------------------
# Estado Global da Planta Virtual e Simulação
# -----------------------------------------------------------------------------
state_lock = threading.Lock()

plant_state = {
    "broker_connected": False,
    "broker_host": BROKER_HOST,
    "broker_port": BROKER_PORT,
    "simulation_running": True,
    "publish_interval": 2.0,  # segundos
    "total_messages_sent": 0,
    "machine_state": {
        "maquina": "PRENSA_CNC_01",
        "temperatura": 48.0,
        "vibracao": 2.10,
        "pressao": 5.8,
        "corrente": 14.5,
        "status": "RUNNING"
    },
    "production_state": {
        "linha": "LINHA_01",
        "total_produzido": 120,
        "pecas_boas": 117,
        "refugo": 3
    },
    "recent_logs": []
}

def log_event(topic, payload):
    with state_lock:
        now_str = datetime.now().strftime("%H:%M:%S")
        entry = {
            "time": now_str,
            "topic": topic,
            "payload": payload
        }
        plant_state["recent_logs"].append(entry)
        if len(plant_state["recent_logs"]) > 40:
            plant_state["recent_logs"].pop(0)
        plant_state["total_messages_sent"] += 1

# -----------------------------------------------------------------------------
# Cliente MQTT (Paho-MQTT com compatibilidade v1 e v2)
# -----------------------------------------------------------------------------
try:
    # Paho MQTT v2.0+
    mqtt_client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2, client_id=CLIENT_ID)
except AttributeError:
    # Paho MQTT v1.x fallback
    mqtt_client = mqtt.Client(client_id=CLIENT_ID)

def on_connect(client, userdata, flags, reason_code, properties=None):
    rc = reason_code if isinstance(reason_code, int) else getattr(reason_code, "value", 0)
    with state_lock:
        if rc == 0:
            plant_state["broker_connected"] = True
            print(f"✅ [MQTT] Conectado com sucesso ao broker em {BROKER_HOST}:{BROKER_PORT}")
        else:
            plant_state["broker_connected"] = False
            print(f"❌ [MQTT] Falha na conexão com o broker. Código de retorno: {rc}")

def on_disconnect(client, userdata, flags, reason_code=None, properties=None):
    with state_lock:
        plant_state["broker_connected"] = False
    print("⚠️ [MQTT] Desconectado do broker.")

mqtt_client.on_connect = on_connect
mqtt_client.on_disconnect = on_disconnect

def init_mqtt():
    def _connect_worker():
        connected = False
        while not connected:
            try:
                print(f"🔄 Conectando ao Broker MQTT ({BROKER_HOST}:{BROKER_PORT})...")
                mqtt_client.connect(BROKER_HOST, BROKER_PORT, BROKER_KEEPALIVE)
                mqtt_client.loop_start()
                connected = True
                print("🚀 Loop MQTT iniciado!")
            except Exception as e:
                print(f"⚠️ Broker ainda indisponível ({e}). Tentando novamente em 2s...")
                time.sleep(2)

    t = threading.Thread(target=_connect_worker, daemon=True)
    t.start()

# -----------------------------------------------------------------------------
# Motor de Simulação em Background (Thread)
# -----------------------------------------------------------------------------
def simulation_loop():
    counter = 0
    while True:
        with state_lock:
            running = plant_state["simulation_running"]
            interval = plant_state["publish_interval"]
            m = plant_state["machine_state"]
            p = plant_state["production_state"]
            connected = plant_state["broker_connected"]

        if running and connected:
            # Evolução dinâmica dos sensores da máquina
            if m["status"] == "RUNNING":
                # Ruído gaussiano com retorno à média operacional
                m["temperatura"] += random.uniform(-0.4, 0.4)
                m["temperatura"] = max(35.0, min(m["temperatura"], 62.0))

                m["vibracao"] += random.uniform(-0.15, 0.15)
                m["vibracao"] = max(1.2, min(m["vibracao"], 3.8))

                m["pressao"] = 5.8 + random.uniform(-0.1, 0.1)
                m["corrente"] = 14.5 + random.uniform(-0.5, 0.5)

            elif m["status"] == "HIGH_TEMP":
                m["temperatura"] = min(92.0, m["temperatura"] + random.uniform(0.5, 1.2))
            elif m["status"] == "HIGH_VIB":
                m["vibracao"] = min(12.0, m["vibracao"] + random.uniform(0.3, 0.8))
            elif m["status"] == "EMERGENCY_STOP":
                m["temperatura"] = max(28.0, m["temperatura"] - 0.5)
                m["vibracao"] = 0.05
                m["pressao"] = 0.0
                m["corrente"] = 0.2

            # 1. Publicar Telemetria Periódica
            telemetry_topic = f"fabrica/linha1/{m['maquina'].lower()}/telemetria"
            telemetry_payload = {
                "maquina": m["maquina"],
                "temperatura": round(m["temperatura"], 2),
                "vibracao": round(m["vibracao"], 2),
                "pressao": round(m["pressao"], 2),
                "corrente": round(m["corrente"], 2),
                "status": m["status"],
                "timestamp": datetime.now().isoformat()
            }
            try:
                mqtt_client.publish(telemetry_topic, json.dumps(telemetry_payload), qos=0)
                log_event(telemetry_topic, telemetry_payload)
            except Exception as e:
                print(f"Erro ao publicar telemetria: {e}")

            # 2. A cada ~5 ciclos, simular produção e publicar contadores
            counter += 1
            if counter >= 4 and m["status"] == "RUNNING":
                counter = 0
                p["total_produzido"] += 1
                if random.random() < 0.96:
                    p["pecas_boas"] += 1
                else:
                    p["refugo"] += 1

                prod_topic = f"fabrica/{p['linha'].lower()}/producao"
                prod_payload = {
                    "linha": p["linha"],
                    "total_produzido": p["total_produzido"],
                    "pecas_boas": p["pecas_boas"],
                    "refugo": p["refugo"],
                    "timestamp": datetime.now().isoformat()
                }
                try:
                    mqtt_client.publish(prod_topic, json.dumps(prod_payload), qos=0)
                    log_event(prod_topic, prod_payload)
                except Exception as e:
                    print(f"Erro ao publicar producao: {e}")

        time.sleep(interval)

# -----------------------------------------------------------------------------
# Rotas e Endpoints REST (Flask)
# -----------------------------------------------------------------------------
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/status", methods=["GET"])
def get_status():
    with state_lock:
        return jsonify({
            "broker_connected": plant_state["broker_connected"],
            "broker_host": plant_state["broker_host"],
            "broker_port": plant_state["broker_port"],
            "simulation_running": plant_state["simulation_running"],
            "publish_interval": plant_state["publish_interval"],
            "total_messages_sent": plant_state["total_messages_sent"],
            "machine_state": plant_state["machine_state"],
            "production_state": plant_state["production_state"],
            "recent_logs": plant_state["recent_logs"]
        })

@app.route("/api/simulator/toggle", methods=["POST"])
def toggle_simulation():
    with state_lock:
        plant_state["simulation_running"] = not plant_state["simulation_running"]
        return jsonify({"simulation_running": plant_state["simulation_running"]})

@app.route("/api/simulator/config", methods=["POST"])
def config_simulation():
    data = request.get_json() or {}
    interval = float(data.get("interval", 2.0))
    with state_lock:
        plant_state["publish_interval"] = max(0.5, min(interval, 10.0))
        return jsonify({"success": True, "interval": plant_state["publish_interval"]})

@app.route("/api/simulator/event", methods=["POST"])
def trigger_event():
    data = request.get_json() or {}
    scenario = data.get("scenario", "")

    with state_lock:
        m = plant_state["machine_state"]
        p = plant_state["production_state"]

        if scenario == "high_temp":
            m["temperatura"] = 88.5
            m["status"] = "HIGH_TEMP"
            # Publicar alarme imediato
            topic = "fabrica/alarmes/temperatura"
            payload = {
                "tipo": "ALARME_SUPERAQUECIMENTO",
                "origem": m["maquina"],
                "mensagem": "Temperatura crítica detectada acima de 85°C!",
                "temperatura": m["temperatura"],
                "acao": "Parada imediata do fuso e refrigeração",
                "timestamp": datetime.now().isoformat()
            }
            mqtt_client.publish(topic, json.dumps(payload), qos=1)
            log_event(topic, payload)

        elif scenario == "high_vib":
            m["vibracao"] = 9.45
            m["status"] = "HIGH_VIB"
            topic = "fabrica/alarmes/vibracao"
            payload = {
                "tipo": "ALARME_VIBRACAO_EXCESSIVA",
                "origem": m["maquina"],
                "mensagem": "Vibração radial atingiu 9.45 mm/s (limite ISO 10816)",
                "vibracao": m["vibracao"],
                "acao": "Inspecionar fixação de ferramenta e rolamento",
                "timestamp": datetime.now().isoformat()
            }
            mqtt_client.publish(topic, json.dumps(payload), qos=1)
            log_event(topic, payload)

        elif scenario == "emergency_stop":
            m["status"] = "EMERGENCY_STOP"
            m["pressao"] = 0.0
            m["corrente"] = 0.2
            topic = "fabrica/alarmes/emergencia"
            payload = {
                "tipo": "PARADA_DE_EMERGENCIA",
                "origem": m["maquina"],
                "mensagem": "BOTAO E-STOP FISICO ACIONADO PELO OPERADOR",
                "acao": "Interrupcao eletropneumatica total",
                "timestamp": datetime.now().isoformat()
            }
            mqtt_client.publish(topic, json.dumps(payload), qos=2)
            log_event(topic, payload)

        elif scenario == "produce_good":
            p["total_produzido"] += 1
            p["pecas_boas"] += 1
            topic = "fabrica/linha1/producao"
            payload = {
                "linha": p["linha"],
                "total_produzido": p["total_produzido"],
                "pecas_boas": p["pecas_boas"],
                "refugo": p["refugo"],
                "evento": "PECA_APROVADA",
                "timestamp": datetime.now().isoformat()
            }
            mqtt_client.publish(topic, json.dumps(payload), qos=0)
            log_event(topic, payload)

        elif scenario == "produce_bad":
            p["total_produzido"] += 1
            p["refugo"] += 1
            topic = "fabrica/linha1/producao"
            payload = {
                "linha": p["linha"],
                "total_produzido": p["total_produzido"],
                "pecas_boas": p["pecas_boas"],
                "refugo": p["refugo"],
                "evento": "PECA_REJEITADA",
                "motivo": "Desvio dimensional tolerância ISO",
                "timestamp": datetime.now().isoformat()
            }
            mqtt_client.publish(topic, json.dumps(payload), qos=0)
            log_event(topic, payload)

        elif scenario == "reset_normal":
            m["temperatura"] = 48.0
            m["vibracao"] = 2.10
            m["pressao"] = 5.8
            m["corrente"] = 14.5
            m["status"] = "RUNNING"
            topic = "fabrica/linha1/status"
            payload = {
                "maquina": m["maquina"],
                "mensagem": "Linha restabelecida e operando em regime normal",
                "status": "RUNNING",
                "timestamp": datetime.now().isoformat()
            }
            mqtt_client.publish(topic, json.dumps(payload), qos=0)
            log_event(topic, payload)

    return jsonify({"success": True, "scenario": scenario})

@app.route("/api/publish/custom", methods=["POST"])
def publish_custom():
    data = request.get_json() or {}
    topic = data.get("topic", "fabrica/geral/teste")
    payload = data.get("payload", {})
    qos = int(data.get("qos", 0))
    retain = bool(data.get("retain", False))

    try:
        payload_str = json.dumps(payload) if isinstance(payload, (dict, list)) else str(payload)
        mqtt_client.publish(topic, payload_str, qos=qos, retain=retain)
        log_event(topic, payload)
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

# -----------------------------------------------------------------------------
# Ponto de Entrada Principal
# -----------------------------------------------------------------------------
if __name__ == "__main__":
    init_mqtt()
    # Iniciar thread do motor de simulação
    sim_thread = threading.Thread(target=simulation_loop, daemon=True)
    sim_thread.start()

    print("=" * 70)
    print("🏭 APLICAÇÃO MONOLÍTICA FLASK - FÁBRICA VIRTUAL IIoT")
    print(f"📡 Broker MQTT configurado: {BROKER_HOST}:{BROKER_PORT}")
    print("🚀 Servidor Web iniciado em http://localhost:5000")
    print("🌐 Interface do Node-RED: http://localhost:1880")
    print("=" * 70)

    app.run(host="0.0.0.0", port=5000, debug=False)
