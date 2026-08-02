import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'factoryhub-secret-key-2026')
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL',
        f"sqlite:///{os.path.join(BASE_DIR, 'data', 'factoryhub.db')}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Configurações MQTT (Smart N1 Broker)
    MQTT_BROKER_HOST = os.environ.get('MQTT_BROKER_HOST', 'localhost')
    MQTT_BROKER_PORT = int(os.environ.get('MQTT_BROKER_PORT', 1883))
    MQTT_KEEPALIVE = 60
    MQTT_TOPICS = [('smartn1/#', 0)]
    
    # Diretórios de Datasets e Exercícios por Disciplina
    DATA_DIR = os.path.join(BASE_DIR, 'data')
    EXERCICIOS_DIR = os.path.join(BASE_DIR, 'exercicios_ciencia_dados')
    EXERCICIOS_CIENCIA_DADOS_DIR = os.path.join(BASE_DIR, 'exercicios_ciencia_dados')
    EXERCICIOS_AUTOMACAO_DIR = os.path.join(BASE_DIR, 'exercicios_automacao')
    EXERCICIOS_DEVOPS_DIR = os.path.join(BASE_DIR, 'exercicios_devops')
    EXERCICIOS_NUVEM_DIR = os.path.join(BASE_DIR, 'exercicios_nuvem')
