"""
Aula 02 - DevOps: Entrega Contínua na Vercel (Preview Deployments)
"""
def obter_url_vercel(branch_name):
    if branch_name == "main":
        return "https://factoryhub.vercel.app (Production)"
    return f"https://factoryhub-git-{branch_name}.vercel.app (Preview Deployment)"

print("=== Simulação de Deploy Automático na Vercel ===")
print(obter_url_vercel("feature-ui"))
print(obter_url_vercel("main"))
