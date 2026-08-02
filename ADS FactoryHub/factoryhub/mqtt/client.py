import json
import logging
import uuid
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
        self.host = 'localhost'
        self.port = 1883
        self.topic = 'smartn1/#'
        self.username = ''
        self.password = ''
        self.last_message_at = None
        self.last_error = None
        if app is not None:
            self.init_app(app)

    def init_app(self, app):
        self.app = app
        self.host = app.config.get('MQTT_BROKER_HOST', 'localhost')
        self.port = int(app.config.get('MQTT_BROKER_PORT', 1883))
        self.reconnect(self.host, self.port)

    def reconnect(self, host, port=1883, topic="smartn1/#", username=None, password=None):
        if self.client:
            try:
                self.client.loop_stop()
                self.client.disconnect()
            except Exception:
                pass

        self.host = host.strip() if host else 'localhost'
        self.port = int(port) if port else 1883
        self.topic = topic.strip() if topic else 'smartn1/#'
        self.username = username or ''
        self.password = password or ''
        self.connected = False
        self.last_error = None

        client_id = f"FactoryHub_App_{uuid.uuid4().hex[:6]}"
        self.client = mqtt.Client(client_id=client_id)

        if self.username:
            self.client.username_pw_set(self.username, self.password)

        self.client.on_connect = self._on_connect
        self.client.on_disconnect = self._on_disconnect
        self.client.on_message = self._on_message

        try:
            self.client.connect_async(self.host, self.port, keepalive=60)
            self.client.loop_start()
            logger.info(f"Conectando ao broker MQTT em {self.host}:{self.port} (Tópico: {self.topic})...")
            return True, f"Conectando ao broker central {self.host}:{self.port}..."
        except Exception as e:
            self.last_error = str(e)
            logger.error(f"Erro ao conectar ao broker MQTT {self.host}:{self.port}: {e}")
            return False, f"Falha ao conectar: {str(e)}"

    def disconnect_broker(self):
        if self.client:
            try:
                self.client.loop_stop()
                self.client.disconnect()
            except Exception as e:
                logger.warning(f"Erro ao desconectar MQTT: {e}")
        self.connected = False
        return True, "Desconectado do Broker MQTT."

    def _on_connect(self, client, userdata, flags, rc):
        if rc == 0:
            self.connected = True
            self.last_error = None
            logger.info(f"MQTT Client conectado com sucesso ao Broker Central [{self.host}:{self.port}].")
            client.subscribe(self.topic if self.topic else "smartn1/#")
        else:
            self.connected = False
            self.last_error = f"Código de retorno MQTT {rc}"
            logger.warning(f"MQTT Conexão falhou com código de retorno {rc}")

    def _on_disconnect(self, client, userdata, rc):
        self.connected = False
        logger.info("MQTT Client desconectado.")

    def _on_message(self, client, userdata, msg):
        self.message_count += 1
        self.last_message_at = datetime.utcnow()
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
