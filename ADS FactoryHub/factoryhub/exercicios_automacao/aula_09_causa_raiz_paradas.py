"""
Aula 09 - Automação Industrial: Diagnóstico de Causa Raiz de Paradas
"""
paradas = [
    {"causa": "Setup de Ferramental", "minutos": 25},
    {"causa": "Falta de Insumo (Matéria Prima)", "minutos": 60},
    {"causa": "Aguardando Manutenção Pneumática", "minutos": 45}
]

total_min = sum(p["minutos"] for p in paradas)
maior_ofensor = max(paradas, key=lambda x: x["minutos"])

print("=== Matriz de Diagnóstico de Paradas Não Planejadas ===")
print(f"Tempo Total de Inatividade: {total_min} minutos")
print(f"Maior Ofensor Identificado: {maior_ofensor['causa']} ({maior_ofensor['minutos']} min)")
