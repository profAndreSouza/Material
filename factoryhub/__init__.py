import os
import sys

PACKAGE_DIR = os.path.dirname(os.path.abspath(__file__))
if PACKAGE_DIR not in sys.path:
    sys.path.insert(0, PACKAGE_DIR)

from flask import Flask
from config import Config
from database.models import db
from mqtt.client import mqtt_service
from routes import main_bp, ementas_bp, analytics_bp, api_bp

def create_app(config_class=Config):
    app = Flask(
        __name__,
        template_folder=os.path.join(PACKAGE_DIR, 'templates'),
        static_folder=os.path.join(PACKAGE_DIR, 'static')
    )
    app.config.from_object(config_class)

    # Garantir que a pasta de dados exista
    os.makedirs(app.config['DATA_DIR'], exist_ok=True)

    # Inicializar Banco de Dados
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # Inicializar Cliente MQTT
    mqtt_service.init_app(app)

    # Registrar Blueprints
    app.register_blueprint(main_bp)
    app.register_blueprint(ementas_bp)
    app.register_blueprint(analytics_bp)
    app.register_blueprint(api_bp)

    return app
