import json
import logging
from datetime import datetime
import paho.mqtt.client as mqtt

try:
    from database.models import db, Telemetry, Piece, Alarm
except ImportError:
    from factoryhub.database.models import db, Telemetry, Piece, Alarm

logger = logging.getLogger(__name__)

class MQTTService:
    def __init__(self, app=None):
        self.app = app
        self.client = None
        self.connected = False
        self.message_count = 0
        if app is not None:
            self.init_app(app)

    def init_app(self, app):
        self.app = app
        host = app.config.get('MQTT_BROKER_HOST', 'localhost')
        port = app.config.get('MQTT_BROKER_PORT', 1883)

        self.client = mqtt.Client(client_id="FactoryHub_Flask_Service")
        self.client.on_connect = self._on_connect
        self.client.on_disconnect = self._on_disconnect
        self.client.on_message = self._on_message

        try:
            self.client.connect_async(host, port, keepalive=60)
            self.client.loop_start()
        except Exception as e:
            logger.warning(f"MQTT Broker connection deferred/failed: {e}")

    def _on_connect(self, client, userdata, flags, rc):
        if rc == 0:
            self.connected = True
            logger.info("MQTT Client successfully connected to Mosquitto Broker.")
            client.subscribe("smartn1/#")
        else:
            self.connected = False
            logger.warning(f"MQTT Connection failed with return code {rc}")

    def _on_disconnect(self, client, userdata, rc):
        self.connected = False
        logger.info("MQTT Client disconnected.")

    def _on_message(self, client, userdata, msg):
        self.message_count += 1
        topic = msg.topic
        payload_raw = msg.payload.decode('utf-8', errors='ignore')

        if not self.app:
            return

        with self.app.app_context():
            try:
                data = json.loads(payload_raw)
                station = data.get('station', topic.replace('smartn1/', ''))
                piece_id = data.get('pieceId')
                event = data.get('event', 'telemetry.received')
                status = data.get('status', 'OK')

                # Insere registro de telemetria
                telemetry = Telemetry(
                    plant=data.get('plant', 'SmartN1'),
                    station=station,
                    piece_id=piece_id,
                    event=event,
                    status=status,
                    payload=payload_raw
                )
                db.session.add(telemetry)

                # Se houver identificador de peça, atualiza ou insere na tabela Piece
                if piece_id:
                    piece = Piece.query.get(piece_id)
                    if not piece:
                        piece = Piece(piece_id=piece_id)
                        db.session.add(piece)
                    
                    payload_data = data.get('data', {})
                    if 'color' in payload_data:
                        piece.color = payload_data['color']
                    if 'uid' in payload_data:
                        piece.rfid_uid = payload_data['uid']
                    piece.status = status

                # Se for tópico de alarme, salva na tabela Alarm
                if 'alarm' in topic or status == 'ALARM':
                    alarm = Alarm(
                        station=station,
                        severity=data.get('severity', 'WARNING'),
                        message=data.get('message', f"Alarme detectado no tópico {topic}")
                    )
                    db.session.add(alarm)

                db.session.commit()

            except Exception as e:
                db.session.rollback()
                logger.error(f"Erro ao processar mensagem MQTT no tópico {topic}: {e}")

mqtt_service = MQTTService()
