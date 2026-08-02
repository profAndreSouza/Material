"""
Aula 06 - DevOps: Automação de Workflows com GitHub Actions
"""
workflow_yml = {
    "name": "CI Pipeline",
    "on": ["push", "pull_request"],
    "jobs": {
        "build-and-test": {
            "runs-on": "ubuntu-latest",
            "steps": ["checkout", "setup-python", "install-deps", "pytest"]
        }
    }
}

print("=== Estrutura da Workflow YAML (.github/workflows/ci.yml) ===")
print(f"Gatilhos (Triggers): {workflow_yml['on']}")
print(f"Runner OS         : {workflow_yml['jobs']['build-and-test']['runs-on']}")
