"""
Aula 10 - Ciência de Dados: Pipeline Analítica Automatizada Completa
====================================================================
Função modularizada para ingestão, tratamento e exportação de KPIs.
"""
import pandas as pd
import json

def processar_lote_industrial(payload_lote):
    df = pd.DataFrame(payload_lote)
    df_limpo = df.dropna().copy()
    
    total = len(df_limpo)
    aprovadas = len(df_limpo[df_limpo["status"] == "OK"])
    rejeitadas = len(df_limpo[df_limpo["status"] != "OK"])
    taxa_qualidade = (aprovadas / total) * 100 if total > 0 else 0
    
    return {
        "status_pipeline": "SUCCESS",
        "total_processado": total,
        "pecas_ok": aprovadas,
        "pecas_nok": rejeitadas,
        "taxa_qualidade_pct": round(taxa_qualidade, 2)
    }

lote_amostra = [
    {"id": 1, "status": "OK"},
    {"id": 2, "status": "OK"},
    {"id": 3, "status": "ALARM"},
    {"id": 4, "status": "OK"},
    {"id": 5, "status": "OK"}
]

res = processar_lote_industrial(lote_amostra)
print("=== Execução da Pipeline Analítica Automatizada ===")
print(json.dumps(res, indent=2))
