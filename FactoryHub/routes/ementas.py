from flask import Blueprint, render_template

ementas_bp = Blueprint('ementas', __name__)

@ementas_bp.route('/ementas')
def ementas():
    return render_template('ementas.html')
