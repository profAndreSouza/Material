import os
import glob
import sys
import subprocess
from flask import Blueprint, jsonify, current_app

try:
    from database.models import Telemetry, Piece, Alarm
except ImportError:
    from factoryhub.database.models import Telemetry, Piece, Alarm

api_bp = Blueprint('api', __name__)

@api_bp.route('/api/kpis')
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

@api_bp.route('/api/exercicio/<int:aula_num>')
def get_exercicio(aula_num):
    exercicios_dir = current_app.config.get('EXERCICIOS_DIR')
    if not exercicios_dir or not os.path.exists(exercicios_dir):
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        exercicios_dir = os.path.join(base_dir, 'exercicios')

    prefix = f"aula_{aula_num:02d}_"
    files = glob.glob(os.path.join(exercicios_dir, f"{prefix}*.py"))
    if not files:
        return jsonify({'error': 'Arquivo de exercício não encontrado'}), 404
    
    file_path = files[0]
    filename = os.path.basename(file_path)
    
    try:
        res = subprocess.run(
            [sys.executable, file_path],
            capture_output=True,
            text=True,
            encoding='utf-8',
            errors='replace',
            timeout=15
        )
        raw_output = res.stdout if res.stdout else res.stderr
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
        'filename': filename,
        'output': output_text,
        'plotly_html': plotly_html
    })
