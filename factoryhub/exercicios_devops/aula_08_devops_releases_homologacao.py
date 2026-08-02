"""
===================================================================
=== Encontro 08: Automação de Releases & Versionamento Semântico ===
===================================================================
"""

def simular_release_semver(versao_atual: str, tipo_mudanca: str):
    print("--- AUTOMAÇÃO DE RELEASE SEMVER (GITHUB RELEASES) ---")
    major, minor, patch = map(int, versao_atual.replace('v', '').split('.'))
    if tipo_mudanca == 'MINOR':
        minor += 1
        patch = 0
    nova_versao = f"v{major}.{minor}.{patch}"
    print(f"Tag Git Atual: {versao_atual}")
    print(f"Tipo de Incremento: {tipo_mudanca}")
    print(f"Nova Tag de Release Publicada: {nova_versao}")

if __name__ == '__main__':
    simular_release_semver("v1.2.0", "MINOR")
