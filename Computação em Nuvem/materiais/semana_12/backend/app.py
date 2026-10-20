import os
import socket
from datetime import datetime, timezone

from flask import Flask, jsonify


app = Flask(__name__)
VERSION = os.getenv("APP_VERSION", "1.0.0")


@app.get("/")
def index():
    return jsonify(
        service="smartn1-backend",
        version=VERSION,
        endpoints=["/health", "/status", "/telemetria"],
    )


@app.get("/health")
def health():
    return jsonify(status="healthy"), 200


@app.get("/status")
def status():
    return jsonify(
        service="smartn1-backend",
        version=VERSION,
        hostname=socket.gethostname(),
        layer="private-subnet",
        message="Resposta produzida pelo backend privado da Smart N1.",
        timestamp=datetime.now(timezone.utc).isoformat(),
    )


@app.get("/telemetria")
def telemetria():
    return jsonify(
        machine_id="motor-01",
        temperature_c=72.4,
        vibration_mm_s=2.7,
        operating=True,
        timestamp=datetime.now(timezone.utc).isoformat(),
    )
