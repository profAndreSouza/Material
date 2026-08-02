"""
Aula 05 - Automação Industrial: Dashboards Operacionais Grafana
"""
query_grafana = """
SELECT 
    time_bucket('1 min', timestamp) AS time,
    station,
    COUNT(*) AS total_pecas,
    SUM(CASE WHEN status = 'OK' THEN 1 ELSE 0 END) AS conformes
FROM telemetry
WHERE timestamp >= NOW() - INTERVAL '1 hour'
GROUP BY time, station
ORDER BY time DESC;
"""

print("=== Consulta SQL de Agregação para Painel Grafana ===")
print(query_grafana.strip())
print("")
print("Métrica de Produção Instantânea: 480 Peças OK / 500 Total (96% Qualidade)")
