"""
Aula 09 - DevOps: Observabilidade & Métricas DORA
"""
metricas_dora = {
    "deployment_frequency": "Diário (2 deploys/dia)",
    "lead_time_for_changes": "25 minutos",
    "change_failure_rate": "1.2%",
    "mean_time_to_restore_mttr": "12 minutos"
}

print("=== Desempenho da Equipe nas 4 Métricas DORA ===")
for k, v in metricas_dora.items():
    print(f" -> {k:28s}: {v}")
