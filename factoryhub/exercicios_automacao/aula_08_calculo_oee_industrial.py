"""
Aula 08 - Automação Industrial: Cálculo Automatizado de OEE
"""
disponibilidade = 0.94 # 94%
desempenho = 0.91      # 91%
qualidade = 0.98       # 98%

oee = disponibilidade * desempenho * qualidade * 100

print("=== Cálculo dos Pilares de Eficiência Global (OEE) ===")
print(f"Disponibilidade : {disponibilidade*100:.1f}%")
print(f"Desempenho      : {desempenho*100:.1f}%")
print(f"Qualidade       : {qualidade*100:.1f}%")
print(f"OEE Global      : {oee:.2f}%")
