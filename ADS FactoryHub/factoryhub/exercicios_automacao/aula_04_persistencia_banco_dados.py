"""
Aula 04 - Automação Industrial: Persistência de Dados em Banco Relacional
"""
import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE telemetry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    station TEXT,
    event TEXT,
    val REAL
)
""")

cursor.execute("INSERT INTO telemetry (station, event, val) VALUES ('Entrada', 'piece.detected', 24.0)")
cursor.execute("INSERT INTO telemetry (station, event, val) VALUES ('Prensa', 'press.cycle', 5.8)")
conn.commit()

cursor.execute("SELECT * FROM telemetry")
rows = cursor.fetchall()

print("=== Persistência de Dados Fabris no Banco de Dados ===")
for r in rows:
    print(f"Registro #{r[0]} | Estação: {r[1]} | Evento: {r[2]} | Valor: {r[3]}")
