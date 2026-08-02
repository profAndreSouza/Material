"""
Aula 08 - DevOps: Entrega Contínua (CD) em Produção
"""
def trigger_cd_deploy(branch):
    if branch == "main":
        return "DEPLOY REALIZADO EM PRODUÇÃO (https://factoryhub.vercel.app)"
    return "DEPLOY REALIZADO EM STAGING (https://staging.factoryhub.vercel.app)"

print("=== Gatilho de Entrega Contínua (CD) ===")
print(trigger_cd_deploy("main"))
