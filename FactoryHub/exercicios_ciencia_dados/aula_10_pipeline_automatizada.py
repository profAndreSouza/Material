"""
Aula 10 - Ciência de Dados: Pipeline Analítica Automatizada Completa
====================================================================
Exercício Prático para Alunos:
1. Complete a função 'processar_lote_industrial(payload_lote)' que recebe uma lista de dicionários,
   remove nulos, calcula total de peças, aprovadas (status == 'OK'), rejeitadas e taxa de qualidade (%).
"""
import pandas as pd

def processar_lote_industrial(payload_lote):
    """Executa a pipeline de ingestão, tratamento e cálculo de KPIs de qualidade."""
    # TODO: Implemente o processamento do lote e retorne o dicionário com os KPIs
    pass

lote_amostra = [
    {"id": 1, "status": "OK"},
    {"id": 2, "status": "OK"},
    {"id": 3, "status": "ALARM"},
    {"id": 4, "status": "OK"},
    {"id": 5, "status": "OK"}
]

# TODO: Chame a função e exiba o resultado
