window.lessonTheoriesDevops = {
    1: [
        {
            biblio: 'Sato (2014), Cap. 1; Kaminski (2019), Cap. 1',
            title: '1. Cultura DevOps, Integração Contínua & Métricas de Entrega',
            theory: '<strong>DevOps</strong> é um movimento cultural e técnico que integra as equipes de Desenvolvimento (Dev) e Operações (Ops) para acelerar o tempo de entrega de software com alta qualidade e estabilidade. Os pilares essenciais incluem:<br><ul><li><strong>Cultura de Colaboração:</strong> Quebra de silos entre equipes.</li><li><strong>Automação de Pipelines:</strong> Eliminação de deploys manuais sucintos a falhas humanas.</li><li><strong>Métricas de Desempenho (DORA):</strong> Avaliação contínua da frequência de deploys e tempo de recuperação.</li></ul>',
            code: `def calcular_mttr(tempos_indisponibilidade_minutos: list) -> float:
    return sum(tempos_indisponibilidade_minutos) / len(tempos_indisponibilidade_minutos)

falhas_min = [12.0, 45.0, 18.0, 5.0]
mttr = calcular_mttr(falhas_min)
print(f"Histórico de Falhas em Produção (min): {falhas_min}")
print(f"Tempo Médio de Recuperação (MTTR): {mttr:.1f} minutos")`,
            output: `Histórico de Falhas em Produção (min): [12.0, 45.0, 18.0, 5.0]
Tempo Médio de Recuperação (MTTR): 20.0 minutos`,
            interpretation: 'A automação da esteira CI/CD reduz o MTTR de horas para minutos ao permitir rollbacks automáticos.'
        }
    ],
    2: [
        {
            biblio: 'Sato (2014), Cap. 2; Kaminski (2019), Cap. 2',
            title: '1. Controle de Versão com Git: Branches, Commits e Pull Requests',
            theory: 'O <strong>Git</strong> é um sistema de controle de versão distribuído que garante a rastreabilidade e integridade do código fonte. As boas práticas de ramificação (<em>Branching Strategies</em>) baseiam-se em:<br><ul><li><code>main</code> / <code>master</code>: Código estável de produção.</li><li><code>feature/nome-da-funcionalidade</code>: Desenvolvimento isolado de novas capacidades.</li><li><strong>Pull Request (PR):</strong> Processo de revisão por pares e execução obrigatória de testes automatizados antes do merge.</li></ul>',
            code: `git_commands = [
    "git checkout -b feature/telemetria-mqtt",
    "git add factoryhub/mqtt/",
    "git commit -m 'feat(mqtt): adiciona suporte a reconexao automatica'",
    "git push origin feature/telemetria-mqtt"
]
print("Fluxo de Trabalho Git (Feature Branch):")
for cmd in git_commands:
    print(f"$ {cmd}")`,
            output: `Fluxo de Trabalho Git (Feature Branch):
$ git checkout -b feature/telemetria-mqtt
$ git add factoryhub/mqtt/
$ git commit -m 'feat(mqtt): adiciona suporte a reconexao automatica'
$ git push origin feature/telemetria-mqtt`,
            interpretation: 'O envio da feature branch aciona a esteira CI no GitHub Actions para validação prévia ao Pull Request.'
        }
    ],
    3: [
        {
            biblio: 'Sato (2014), Cap. 3; Boaglio (2016), Cap. 1 & 2',
            title: '1. Automação de Builds e Integração Contínua (CI) com GitHub Actions',
            theory: 'A <strong>Integração Contínua (CI)</strong> é a prática de mesclar alterações de código frequentemente em um repositório centralizado onde são executados automaticamente builds e testes unitários. No GitHub Actions, os fluxos são descritos em arquivos YAML sob `.github/workflows/`.',
            code: `yaml_ci_sample = """
name: CI Pipeline (FactoryHub)
on: [push, pull_request]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Install dependencies
        run: pip install -r factoryhub/requirements.txt
      - name: Run pytest
        run: pytest
"""
print("Configuração da Workflow de CI (.github/workflows/ci.yml):")
print(yaml_ci_sample.strip())`,
            output: `Configuração da Workflow de CI (.github/workflows/ci.yml):
name: CI Pipeline (FactoryHub)
on: [push, pull_request]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Install dependencies
        run: pip install -r factoryhub/requirements.txt
      - name: Run pytest
        run: pytest`,
            interpretation: 'A esteira de CI garante que nenhum código com testes quebrados seja integrado ao ramo principal.'
        }
    ],
    4: [
        {
            biblio: 'Romero (2015), Cap. 1 & 2; Vitalino & Castro (2018), Cap. 1 & 2',
            title: '1. Containerização com Docker: Dockerfile & Imagens OCI',
            theory: 'O **Docker** isola aplicações e suas dependências em **Contêineres** leves e portáveis baseados nos namespaces e cgroups do Kernel Linux. O arquivo `Dockerfile` define o processo de construção da imagem por camadas imutáveis.',
            code: `dockerfile_sample = """
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
"""
print("Dockerfile Otimizado para o FactoryHub:")
print(dockerfile_sample.strip())`,
            output: `Dockerfile Otimizado para o FactoryHub:
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]`,
            interpretation: 'A separação da cópia do `requirements.txt` permite reaproveitar a camada de cache do Docker quando o código muda.'
        }
    ],
    5: [
        {
            biblio: 'Romero (2015), Cap. 3 & 4; Vitalino & Castro (2018), Cap. 3 & 4',
            title: '1. Multi-Contêineres com Docker Compose',
            theory: 'O **Docker Compose** orquestra múltiplos contêineres conectando a aplicação web, o broker MQTT Mosquitto e a base de dados através de redes virtuais isoladas e volumes persistentes.',
            code: `compose_sample = """
version: '3.8'
services:
  factoryhub:
    build: .
    ports:
      - "5000:5000"
    environment:
      - MQTT_BROKER_HOST=mosquitto
  mosquitto:
    image: eclipse-mosquitto:latest
    ports:
      - "1883:1883"
"""
print("Especificação docker-compose.yml:")
print(compose_sample.strip())`,
            output: `Especificação docker-compose.yml:
version: '3.8'
services:
  factoryhub:
    build: .
    ports:
      - "5000:5000"
    environment:
      - MQTT_BROKER_HOST=mosquitto
  mosquitto:
    image: eclipse-mosquitto:latest
    ports:
      - "1883:1883"`,
            interpretation: 'Com uma única instrução `docker compose up`, todo o ecossistema fabril entra em execução localmente.'
        }
    ],
    6: [
        {
            biblio: 'Santos (2019), Cap. 1 & 2; Vitalino & Castro (2018), Cap. 5',
            title: '1. Orquestração de Containers (Kubernetes vs Serverless Cloud Run)',
            theory: 'Em ambientes de alta escala, orquestradores como **Kubernetes** gerenciam a auto-recuperação (*self-healing*), balanceamento de carga e auto-escalonamento de Pods. Para baixa complexidade, serviços Serverless (como GCP Cloud Run) sobem contêineres sob demanda zerando custos inativos.',
            code: `class ClusterOrchestrator:
    def __init__(self, replicas_desejadas: int):
        self.replicas = replicas_desejadas

    def verificar_health_check(self, pods_ativos: int):
        if pods_ativos < self.replicas:
            diferenca = self.replicas - pods_ativos
            return f"Self-Healing: Criando {diferenca} novo(s) Pod(s) para restaurar a meta de {self.replicas} réplicas."
        return "Cluster Saudável: Todas as réplicas em execução."

k8s = ClusterOrchestrator(replicas_desejadas=3)
print(k8s.verificar_health_check(pods_ativos=2))`,
            output: `Self-Healing: Criando 1 novo(s) Pod(s) para restaurar a meta de 3 réplicas.`,
            interpretation: 'Caso um contêiner sofra falha, o orquestrador detecta a queda e instancia uma nova réplica automaticamente.'
        }
    ],
    7: [
        {
            biblio: 'Sato (2014), Cap. 4; Boaglio (2016), Cap. 3',
            title: '1. Esteiras Avançadas de CI/CD (Artifacts & Caching)',
            theory: 'Pipelines avançadas de CI/CD utilizam estratégias de **Caching** de dependências para acelerar a execução do build e geram **Artefatos de Compilação** (como arquivos `.tar.gz` ou Imagens Docker publicadas em Registries) para garantir imutabilidade do artefato implantado.',
            code: `def calcular_tempo_build(com_cache: bool) -> float:
    tempo_base = 120.0 # segundos
    if com_cache:
        return tempo_base * 0.25 # 75% mais rápido
    return tempo_base

print(f"Tempo de Build Sem Cache: {calcular_tempo_build(False):.0f}s")
print(f"Tempo de Build Com Cache: {calcular_tempo_build(True):.0f}s")`,
            output: `Tempo de Build Sem Cache: 120s
Tempo de Build Com Cache: 30s`,
            interpretation: 'O uso de cache de dependências reduz o tempo de feedback da esteira de 2 minutos para 30 segundos.'
        }
    ],
    8: [
        {
            biblio: 'Sato (2014), Cap. 5; Boaglio (2016), Cap. 4',
            title: '1. Gerenciamento de Releases & Versionamento Semântico (SemVer)',
            theory: 'O **Versionamento Semântico (SemVer)** adota o formato `MAJOR.MINOR.PATCH` (ex: `v1.2.4`):<br><ul><li><strong>MAJOR:</strong> Alterações incompatíveis com versões anteriores (Breaking Changes).</li><li><strong>MINOR:</strong> Adição de novas funcionalidades mantendo compatibilidade.</li><li><strong>PATCH:</strong> Correção de bugs retrocompatíveis.</li></ul>',
            code: `def incrementar_semver(atual: str, tipo: str) -> str:
    major, minor, patch = map(int, atual.replace('v', '').split('.'))
    if tipo == 'MAJOR':
        major += 1; minor = 0; patch = 0
    elif tipo == 'MINOR':
        minor += 1; patch = 0
    elif tipo == 'PATCH':
        patch += 1
    return f"v{major}.{minor}.{patch}"

versao = "v1.0.0"
print(f"Versão Atual: {versao}")
print(f"Nova Feature -> {incrementar_semver(versao, 'MINOR')}")
print(f"Bugfix -> {incrementar_semver(versao, 'PATCH')}")`,
            output: `Versão Atual: v1.0.0
Nova Feature -> v1.1.0
Bugfix -> v1.0.1`,
            interpretation: 'O padrão SemVer orienta a equipe e os clientes sobre a criticidade e o impacto das atualizações.'
        }
    ],
    9: [
        {
            biblio: 'Sato (2014), Cap. 6; Santos (2019), Cap. 4',
            title: '1. Estratégias de Implantação: Blue-Green & Rollback',
            theory: 'No **Blue-Green Deployment**, mantêm-se dois ambientes idênticos em produção:<br><ul><li><strong>Blue (Ambiente Ativo):</strong> Atende 100% do tráfego real.</li><li><strong>Green (Ambiente Novo):</strong> Recebe a nova versão para testes de homologação.</li></ul>O roteador de tráfego alterna instantaneamente do Blue para o Green. Caso ocorram anomalias, o **Rollback** é realizado reavaliando a rota para o ambiente Blue.',
            code: `class RouterDeploy:
    def __init__(self):
        self.ambiente_ativo = "BLUE (v1.0.0)"
        self.ambiente_homologacao = "GREEN (v1.1.0)"

    def switch_traffic(self):
        self.ambiente_ativo, self.ambiente_homologacao = self.ambiente_homologacao, self.ambiente_ativo
        return f"Tráfego Alternado! Novo Ambiente Ativo: {self.ambiente_ativo}"

router = RouterDeploy()
print(f"Estado Inicial: {router.ambiente_ativo}")
print(router.switch_traffic())`,
            output: `Estado Inicial: BLUE (v1.0.0)
Tráfego Alternado! Novo Ambiente Ativo: GREEN (v1.1.0)`,
            interpretation: 'A virada de chave no roteador do Blue-Green elimina o tempo de indisponibilidade (Downtime Zero).'
        }
    ],
    10: [
        {
            biblio: 'Vitalino & Castro (2018), Cap. 6; Boaglio (2016), Cap. 5',
            title: '1. Monitoramento de Logs, Métricas e Alertas',
            theory: 'A gestão operacional centraliza **Logs** estruturados em formato JSON para busca rápida e agrega **Métricas** de infraestrutura (Uso de CPU, Memória, I/O) para disparo automático de alertas em canais de comunicação.',
            code: `def analisar_log_producao(log_line: dict):
    if log_line.get("level") == "ERROR":
        return f"ALERTA DISPARADO: {log_line['message']} na estação {log_line.get('station', 'Geral')}"
    return "Log Processado OK"

log = {"level": "ERROR", "station": "DrillStation", "message": "Conexão perdida com o inversor", "timestamp": "2026-08-02T01:00:00Z"}
print(analisar_log_producao(log))`,
            output: `ALERTA DISPARADO: Conexão perdida com o inversor na estação DrillStation`,
            interpretation: 'Logs com nível ERROR acionam Webhooks automáticos informando a equipe de plantão.'
        }
    ],
    11: [
        {
            biblio: 'Sato (2014), Cap. 7; Boaglio (2016), Cap. 6',
            title: '1. Observabilidade & Métricas DORA de Desempenho de Engenharia',
            theory: 'A **Observabilidade** assenta-se em 3 pilares (Logs, Métricas e Traces de Execução). O desempenho da esteira DevOps é medido pelas 4 **Métricas DORA**:<br>1. *Deployment Frequency* (Frequência de Deploy)<br>2. *Lead Time for Changes* (Tempo de Mudança)<br>3. *Change Failure Rate* (Taxa de Falha em Mudanças)<br>4. *Time to Restore Service* (Tempo de Restauração)',
            code: `metricas_dora = {
    "deployment_frequency": "Várias vezes ao dia (Elite)",
    "lead_time_changes": "< 1 hora (Elite)",
    "change_failure_rate": "3.2% (Alto Desempenho)",
    "time_to_restore": "< 15 minutos (Elite)"
}
print("Métricas DORA de Engenharia de Software:")
for k, v in metricas_dora.items():
    print(f"-> {k:22s}: {v}")`,
            output: `Métricas DORA de Engenharia de Software:
-> deployment_frequency  : Várias vezes ao dia (Elite)
-> lead_time_changes     : < 1 hora (Elite)
-> change_failure_rate   : 3.2% (Alto Desempenho)
-> time_to_restore       : < 15 minutos (Elite)`,
            interpretation: 'A organização atingiu o nível Elite em métricas DORA graças à maturidade da esteira de CI/CD.'
        }
    ]
};
