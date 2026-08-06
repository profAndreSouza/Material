import os
import glob
import io
import runpy
import contextlib
from functools import wraps
from flask import Blueprint, jsonify, request, current_app

try:
    from database.models import Telemetry, Piece, Alarm
    from mqtt.client import mqtt_service
except ImportError:
    from factoryhub.database.models import Telemetry, Piece, Alarm
    from factoryhub.mqtt.client import mqtt_service

api_bp = Blueprint('api', __name__)

def require_api_key(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('X-API-Key') or request.args.get('api_key')
        expected = current_app.config.get('SECRET_KEY')
        if not token or token != expected:
            return jsonify({'error': 'Unauthorized'}), 401
        return f(*args, **kwargs)
    return decorated

@api_bp.route('/api/kpis')
@require_api_key
def get_kpis():
    total_telemetry = Telemetry.query.count()
    total_pieces = Piece.query.count()
    total_alarms = Alarm.query.count()

    pieces = Piece.query.all()
    colors = {}
    for p in pieces:
        c = p.color or 'Indefinida'
        colors[c] = colors.get(c, 0) + 1

    return jsonify({
        'total_telemetry': total_telemetry,
        'total_pieces': total_pieces,
        'total_alarms': total_alarms,
        'colors': colors
    })

@api_bp.route('/api/mqtt/status', methods=['GET'])
@require_api_key
def get_mqtt_status():
    return jsonify({
        'connected': mqtt_service.connected,
        'host': mqtt_service.host,
        'port': mqtt_service.port,
        'topic': mqtt_service.topic,
        'username': mqtt_service.username,
        'message_count': mqtt_service.message_count,
        'last_error': mqtt_service.last_error
    })

@api_bp.route('/api/mqtt/connect', methods=['POST'])
@require_api_key
def connect_mqtt():
    data = request.get_json() or {}
    host = data.get('host', 'localhost')
    port = data.get('port', 1883)
    topic = data.get('topic', 'smartn1/#')
    username = data.get('username', '')
    password = data.get('password', '')

    success, message = mqtt_service.reconnect(host, port, topic, username, password)
    return jsonify({
        'success': success,
        'message': message,
        'connected': mqtt_service.connected,
        'host': mqtt_service.host,
        'port': mqtt_service.port,
        'topic': mqtt_service.topic
    })

@api_bp.route('/api/mqtt/disconnect', methods=['POST'])
@require_api_key
def disconnect_mqtt():
    success, message = mqtt_service.disconnect_broker()
    return jsonify({
        'success': success,
        'message': message,
        'connected': False
    })

@api_bp.route('/api/exercicio/<int:aula_num>')
@require_api_key
def get_exercicio(aula_num):
    disc = request.args.get('disc', 'dados')
    base_dir = current_app.config.get('BASE_DIR', os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    disc_folder_map = {
        'dados': 'exercicios_ciencia_dados',
        'automacao': 'exercicios_automacao',
        'devops': 'exercicios_devops',
        'nuvem': 'exercicios_nuvem'
    }
    
    target_folder = disc_folder_map.get(disc, 'exercicios_ciencia_dados')
    exercicios_dir = os.path.join(base_dir, target_folder)

    if not os.path.exists(exercicios_dir):
        exercicios_dir = os.path.join(base_dir, 'exercicios_ciencia_dados')

    prefix = f"aula_{aula_num:02d}_"
    files = glob.glob(os.path.join(exercicios_dir, f"{prefix}*.py"))
    if not files:
        files = glob.glob(os.path.join(base_dir, 'exercicios_ciencia_dados', f"{prefix}*.py"))

    if not files:
        return jsonify({'error': f'Arquivo de exercício da Aula {aula_num:02d} ({disc}) não encontrado'}), 404
    
    file_path = files[0]
    real_file = os.path.realpath(file_path)
    real_base = os.path.realpath(base_dir)
    if not real_file.startswith(real_base + os.sep):
        return jsonify({'error': 'Access denied'}), 403
    filename = os.path.basename(real_file)

    try:
        buf = io.StringIO()
        with contextlib.redirect_stdout(buf), contextlib.redirect_stderr(buf):
            runpy.run_path(real_file, run_name='__main__')
        raw_output = buf.getvalue()
    except Exception as e:
        raw_output = f"Erro ao executar o script: {str(e)}"
        
    plotly_html = ""
    output_text = raw_output
    if "<!-- PLOTLY_START -->" in raw_output and "<!-- PLOTLY_END -->" in raw_output:
        parts = raw_output.split("<!-- PLOTLY_START -->")
        clean_out = parts[0]
        sub = parts[1].split("<!-- PLOTLY_END -->")
        plotly_html = sub[0].strip()
        if len(sub) > 1:
            clean_out += sub[1]
        output_text = clean_out.strip()
        
    return jsonify({
        'aula': aula_num,
        'discipline': disc,
        'filename': filename,
        'output': output_text,
        'plotly_html': plotly_html
    })
