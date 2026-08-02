import os
import glob
import sys
import subprocess
from flask import Flask, render_template, jsonify

app = Flask(__name__, template_folder='templates', static_folder='static')

EXERCICIOS_DIR = os.path.join(os.path.dirname(__file__), 'exercicios')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/exercicio/<int:aula_num>')
def get_exercicio(aula_num):
    prefix = f"aula_{aula_num:02d}_"
    files = glob.glob(os.path.join(EXERCICIOS_DIR, f"{prefix}*.py"))
    if not files:
        return jsonify({'error': 'Arquivo não encontrado'}), 404
    
    file_path = files[0]
    filename = os.path.basename(file_path)
    
    # Executa o script Python e captura a saída do terminal (stdout)
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

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
