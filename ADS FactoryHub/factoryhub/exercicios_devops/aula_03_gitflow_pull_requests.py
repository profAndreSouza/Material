"""
Aula 03 - DevOps: Pull Requests e Code Review
"""
pr_data = {
    "pr_number": 15,
    "title": "Adicionar reconexão dinâmica ao Broker MQTT Central",
    "author": "dev-aluno",
    "reviewers": ["prof-andre", "peer-reviewer"],
    "ci_status": "PASSED",
    "approvals": 2
}

print("=== Status do Pull Request no GitHub ===")
print(f"PR #{pr_data['pr_number']}: {pr_data['title']}")
print(f"CI Status: {pr_data['ci_status']} | Aprovações: {pr_data['approvals']}/2")
print("Ação: Pronto para Merge em 'develop'.")
