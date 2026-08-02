"""
Aula 01 - DevOps: Cultura CAMS e Modelo GitFlow
"""
branches_gitflow = ["main (prod)", "develop (homolog)", "feature/mqtt-api", "release/v1.0.0"]

print("=== Estrutura de Branches do Modelo GitFlow ===")
for b in branches_gitflow:
    print(f" -> Branch: {b}")
print("")
print("Filosofia CAMS: Culture, Automation, Measurement, Sharing")
