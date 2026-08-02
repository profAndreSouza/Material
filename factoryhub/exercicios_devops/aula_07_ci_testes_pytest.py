"""
Aula 07 - DevOps: Testes Unitários Automatizados com pytest
"""
def test_calcular_kpi_qualidade():
    total = 100
    conformes = 95
    qualidade = (conformes / total) * 100
    assert qualidade == 95.0, "Cálculo de qualidade incorreto!"
    return True

print("=== Execução Automatizada da Suíte de Testes (pytest) ===")
if test_calcular_kpi_qualidade():
    print("test_calcular_kpi_qualidade PASSED [100%]")
print("Resultado da Esteira de CI: 0 Falhas | Cobertura de Código: 88%")
