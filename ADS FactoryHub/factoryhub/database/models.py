from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Telemetry(db.Model):
    __tablename__ = 'telemetry'

    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, nullable=False, index=True)
    plant = db.Column(db.String(50), default='SmartN1', nullable=False)
    station = db.Column(db.String(50), nullable=False, index=True)
    piece_id = db.Column(db.String(50), index=True)
    event = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(20), default='OK')
    payload = db.Column(db.Text)  # JSON Stringified payload

    def to_dict(self):
        return {
            'id': self.id,
            'timestamp': self.timestamp.isoformat() if self.timestamp else None,
            'plant': self.plant,
            'station': self.station,
            'piece_id': self.piece_id,
            'event': self.event,
            'status': self.status,
            'payload': self.payload
        }

class Piece(db.Model):
    __tablename__ = 'pieces'

    piece_id = db.Column(db.String(50), primary_key=True)
    color = db.Column(db.String(30))
    rfid_uid = db.Column(db.String(50))
    status = db.Column(db.String(30), default='Processed')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            'piece_id': self.piece_id,
            'color': self.color,
            'rfid_uid': self.rfid_uid,
            'status': self.status,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }

class Alarm(db.Model):
    __tablename__ = 'alarms'

    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    station = db.Column(db.String(50), nullable=False)
    severity = db.Column(db.String(20), default='WARNING')  # INFO, WARNING, CRITICAL
    message = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'timestamp': self.timestamp.isoformat() if self.timestamp else None,
            'station': self.station,
            'severity': self.severity,
            'message': self.message
        }
