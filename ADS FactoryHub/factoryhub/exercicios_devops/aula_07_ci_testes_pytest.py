"""
Aula 07 - DevOps: Automação de Testes Unitários com Pytest
==========================================================
Exercício Prático para Alunos:
1. Escreva uma função de teste 'test_calcular_kpi_qualidade()' usando a instrução assert do Python para validar o cálculo de qualidade.
"""

def calcular_kpi_qualidade(aprovadas, total):
    """Calcula a porcentagem de peças aprovadas."""
    if total == 0:
        return 0.0
    return (aprovadas / total) * 100

def test_calcular_kpi_qualidade():
    """Testa se 90 peças em 100 resultam em 90.0% de qualidade."""
    # TODO: Implemente a asserção (assert) para testar a função
    pass

# TODO: Execute o teste unitário e imprima o resultado PASSED/FAILED
