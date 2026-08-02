import os
from flask import Blueprint, render_template, send_file, redirect, url_for, current_app

try:
    from analytics.engine import AnalyticsEngine
except ImportError:
    from factoryhub.analytics.engine import AnalyticsEngine

analytics_bp = Blueprint('analytics', __name__)

@analytics_bp.route('/analytics')
def analytics():
    kpis = AnalyticsEngine.get_summary_kpis()
    return render_template('analytics.html', kpis=kpis)

@analytics_bp.route('/analytics/export/<data_type>')
def export_csv(data_type):
    data_dir = current_app.config.get('DATA_DIR', 'data')
    os.makedirs(data_dir, exist_ok=True)

    if data_type == 'telemetry':
        file_path = os.path.join(data_dir, 'telemetry_export.csv')
        AnalyticsEngine.export_telemetry_csv(file_path)
        return send_file(file_path, as_attachment=True, download_name='telemetry_smartn1.csv')
    elif data_type == 'pieces':
        file_path = os.path.join(data_dir, 'pieces_export.csv')
        AnalyticsEngine.export_pieces_csv(file_path)
        return send_file(file_path, as_attachment=True, download_name='pieces_smartn1.csv')
    else:
        return redirect(url_for('analytics.analytics'))
