"""
Aula 09 - Ciência de Dados: Storytelling com Dados Industriais
===============================================================
Síntese executiva com estrutura piramidal para tomada de decisão.
"""
relatorio = {
    "PROBLEMA": "Elevado descarte de peças no Turno da Noite na Estação 3",
    "EVIDENCIA_ESTATISTICA": "Média de temperatura subiu 8.4ºC com p-valor < 0.001 no Teste t",
    "CAUSA_RAIZ": "Falha na circulação do fluido de refrigeração da prensa",
    "ACAO_RECOMENDADA": "Substituir válvula solenóide SOL-02 e recalibrar termopar T3",
    "IMPACTO_ESTIMADO": "Redução do descarte de 6.2% para < 1.0% e ganho de OEE de +4.5%"
}

print("=== RELATÓRIO SINTÉTICO DE STORYTELLING COM DADOS ===")
for chave, val in relatorio.items():
    print(f"[{chave:22s}]: {val}")
