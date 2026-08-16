from flask import Blueprint, render_template, current_app

try:
    from database.models import Telemetry, Piece, Alarm
    from mqtt.client import mqtt_service
except ImportError:
    from factoryhub.database.models import Telemetry, Piece, Alarm
    from factoryhub.mqtt.client import mqtt_service

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def dashboard():
    total_telemetry = Telemetry.query.count()
    total_pieces = Piece.query.count()
    total_alarms = Alarm.query.count()
    
    recent_telemetries = Telemetry.query.order_by(Telemetry.timestamp.desc()).limit(8).all()
    recent_pieces = Piece.query.order_by(Piece.created_at.desc()).limit(5).all()
    recent_alarms = Alarm.query.order_by(Alarm.timestamp.desc()).limit(5).all()

    return render_template(
        'index.html',
        total_telemetry=total_telemetry,
        total_pieces=total_pieces,
        total_alarms=total_alarms,
        recent_telemetries=recent_telemetries,
        recent_pieces=recent_pieces,
        recent_alarms=recent_alarms,
        mqtt_status='Conectado' if mqtt_service.connected else 'Aguardando Broker'
    )

@main_bp.route('/status')
def status():
    total_telemetry = Telemetry.query.count()
    total_pieces = Piece.query.count()
    total_alarms = Alarm.query.count()

    db_uri = current_app.config.get('SQLALCHEMY_DATABASE_URI', '')
    db_type = 'SQLite' if 'sqlite' in db_uri else 'PostgreSQL'

    return render_template(
        'status.html',
        mqtt_connected=mqtt_service.connected,
        mqtt_messages=mqtt_service.message_count,
        broker_host=current_app.config.get('MQTT_BROKER_HOST', 'localhost'),
        broker_port=current_app.config.get('MQTT_BROKER_PORT', 1883),
        db_type=db_type,
        total_telemetry=total_telemetry,
        total_pieces=total_pieces,
        total_alarms=total_alarms
    )
