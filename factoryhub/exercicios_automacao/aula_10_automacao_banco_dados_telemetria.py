"""
===================================================================
=== Encontro 10: Persistência de Telemetria Industrial em Banco ===
===================================================================
"""
import sqlite3
from datetime import datetime

def testar_collector_banco():
    print("--- DATA COLLECTOR: GRAVAÇÃO AUTOMATIZADA EM BANCO DE DADOS ---")
    conn = sqlite3.connect(':memory:')
    cursor = conn.cursor()
    
    cursor.execute('''CREATE TABLE telemetry (id INTEGER PRIMARY KEY, station TEXT, event TEXT, timestamp DATETIME)''')
    cursor.execute("INSERT INTO telemetry (station, event, timestamp) VALUES (?, ?, ?)", ("DrillStation", "drill.completed", datetime.utcnow()))
    conn.commit()
    
    cursor.execute("SELECT * FROM telemetry")
    row = cursor.fetchone()
    print(f"Registro retido na tabela 'telemetry': ID={row[0]} | Estação={row[1]} | Evento={row[2]} | Horário={row[3]}")

if __name__ == '__main__':
    testar_collector_banco()
