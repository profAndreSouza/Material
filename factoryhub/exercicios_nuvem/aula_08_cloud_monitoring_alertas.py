"""
Aula 08 - Computação em Nuvem: Cloud Monitoring e Alertas
"""
metricas_gcp = {
    "cpu_utilization_pct": 38.2,
    "http_latency_p95_ms": 112.5,
    "active_container_instances": 3
}

print("=== Métricas Operacionais do Cloud Monitoring ===")
for k, v in metricas_gcp.items():
    print(f" -> {k:28s}: {v}")
print("")
print("Política de Alerta: OK (Latência < 200ms)")
