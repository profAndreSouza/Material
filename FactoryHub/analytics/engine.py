import os
import pandas as pd
from datetime import datetime

try:
    from database.models import db, Telemetry, Piece, Alarm
except ImportError:
    from factoryhub.database.models import db, Telemetry, Piece, Alarm

class AnalyticsEngine:
    @staticmethod
    def get_summary_kpis():
        total_telemetry = Telemetry.query.count()
        total_pieces = Piece.query.count()
        total_alarms = Alarm.query.count()
        
        recent_pieces = Piece.query.order_by(Piece.created_at.desc()).limit(5).all()
        recent_alarms = Alarm.query.order_by(Alarm.timestamp.desc()).limit(5).all()

        return {
            'total_telemetry': total_telemetry,
            'total_pieces': total_pieces,
            'total_alarms': total_alarms,
            'recent_pieces': [p.to_dict() for p in recent_pieces],
            'recent_alarms': [a.to_dict() for a in recent_alarms]
        }

    @staticmethod
    def export_telemetry_csv(output_path):
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        telemetries = Telemetry.query.order_by(Telemetry.timestamp.asc()).all()
        data = [t.to_dict() for t in telemetries]
        df = pd.DataFrame(data)
        if df.empty:
            df = pd.DataFrame(columns=['id', 'timestamp', 'plant', 'station', 'piece_id', 'event', 'status', 'payload'])
        df.to_csv(output_path, index=False)
        return output_path

    @staticmethod
    def export_pieces_csv(output_path):
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        pieces = Piece.query.order_by(Piece.created_at.asc()).all()
        data = [p.to_dict() for p in pieces]
        df = pd.DataFrame(data)
        if df.empty:
            df = pd.DataFrame(columns=['piece_id', 'color', 'rfid_uid', 'status', 'created_at'])
        df.to_csv(output_path, index=False)
        return output_path
