window.lessonTheoriesDevops = {
    1: [
        {
            biblio: 'Sato (2014), Cap. 1; Kaminski (2019), Cap. 1',
            title: '1. Cultura DevOps, Filosofia CAMS & Introdução ao GitFlow',
            theory: '<strong>DevOps</strong> é uma cultura e conjunto de práticas baseada nos quatro pilares do acrônimo <strong>CAMS</strong> (<em>Culture, Automation, Measurement, Sharing</em>). A cultura busca integrar times de desenvolvimento e operações para acelerar entregas com resiliência. Para organizar o trabalho em equipe sem conflitos, adota-se o modelo <strong>GitFlow</strong>, estabelecendo ramificações estruturadas para desenvolvimento e produção.',
            code: `class GitFlowModel:
    def __init__(self):
        self.branches = {
            "main": "Código estável em produção (v1.0.0)",
            "develop": "Integração contínua de novas funcionalidades",
            "feature/telemetria": "Desenvolvimento isolado do módulo de telemetria MQTT",
            "release/v1.1.0": "Preparação para homologação e congelamento de código"
        }

    def listar_estrutura(self):
        return [f"Branch [{name}]: {desc}" for name, desc in self.branches.items()]

flow = GitFlowModel()
for item in flow.listar_estrutura():
    print(item)`,
            output: `Branch [main]: Código estável em produção (v1.0.0)
Branch [develop]: Integração contínua de novas funcionalidades
Branch [feature/telemetria]: Desenvolvimento isolado do módulo de telemetria MQTT
Branch [release/v1.1.0]: Preparação para homologação e congelamento de código`,
            interpretation: 'O GitFlow cria isolamento perfeito: a branch main reflete o estado seguro da fábrica em produção, enquanto as features evoluem paralelamente em develop.'
        }
    ],
    2: [
        {
            biblio: 'Vercel Docs (2024); Sato (2014), Cap. 5',
            title: '1. Deploy Automatizado no Início da Jornada: Plataforma Vercel',
            theory: 'A <strong>Vercel</strong> proporciona a experiência de <em>Zero-Config Continuous Deployment</em> para aplicações web e APIs serverless. Ao conectar o repositório Git, cada commit dispara uma esteira de compilação com geração instantânea de URLs de <strong>Preview Deployment</strong> para testes em ambiente idêntico ao de produção.',
            code: `def simular_vercel_deployment(commit_hash: str, branch: str):
    is_main = branch == "main"
    environment = "Production" if is_main else "Preview"
    deploy_url = f"https://factoryhub-smartn1{'' if is_main else '-git-' + branch}.vercel.app"
    return {
        "commit": commit_hash[:7],
        "environment": environment,
        "status": "READY",
        "url": deploy_url
    }

print("Deploy de Feature Branch na Vercel:")
print(simular_vercel_deployment("a8f3b2c190", "feature-dashboard"))
print("\\nDeploy em Produção na Vercel (após Merge):")
print(simular_vercel_deployment("e9d2a4f881", "main"))`,
            output: `Deploy de Feature Branch na Vercel:
{'commit': 'a8f3b2c', 'environment': 'Preview', 'status': 'READY', 'url': 'https://factoryhub-smartn1-git-feature-dashboard.vercel.app'}

Deploy em Produção na Vercel (após Merge):
{'commit': 'e9d2a4f', 'environment': 'Production', 'status': 'READY', 'url': 'https://factoryhub-smartn1.vercel.app'}`,
            interpretation: 'A pipeline da Vercel permite que a equipe homologue a interface visual e relatórios analíticos em URLs de Preview antes da publicação final.'
        }
    ],
    3: [
        {
            biblio: 'Kaminski (2019), Cap. 2; Sato (2014), Cap. 2',
            title: '1. Estratégias Avançadas com GitFlow e Pull Requests (PRs)',
            theory: 'No fluxo **GitFlow**, todo o desenvolvimento de novas capacidades deve ocorrer em ramificações `feature/*`. A mesclagem com a branch `develop` ocorre exclusivamente via **Pull Request (PR)**, exigindo revisão por pares (*Peer Review*) e aprovação dos testes de integração da esteira.',
            code: `git_flow_sequence = [
    "git checkout develop",
    "git pull origin develop",
    "git checkout -b feature/sensor-alarmes",
    "git commit -m 'feat(automacao): implementa limite critico de temperatura'",
    "git push origin feature/sensor-alarmes",
    "# Abertura de Pull Request: feature/sensor-alarmes -> develop",
    "git checkout develop && git merge --no-ff feature/sensor-alarmes"
]
print("Passos Executados no GitFlow:")
for step in git_flow_sequence:
    print(f"$ {step}")`,
            output: `Passos Executados no GitFlow:
$ git checkout develop
$ git pull origin develop
$ git checkout -b feature/sensor-alarmes
$ git commit -m 'feat(automacao): implementa limite critico de temperatura'
$ git push origin feature/sensor-alarmes
# Abertura de Pull Request: feature/sensor-alarmes -> develop
$ git checkout develop && git merge --no-ff feature/sensor-alarmes`,
            interpretation: 'O uso da opção `--no-ff` (no-fast-forward) preserva o histórico de mesclagem, permitindo auditorias e rollbacks limpos.'
        }
    ],
    4: [
        {
            biblio: 'Romero (2015), Cap. 2; Vitalino & Castro (2018), Cap. 3',
            title: '1. Gerenciamento e Publicação de Imagens OCI no Docker Hub',
            theory: 'O **Docker Hub** é o registrador central de imagens de contêineres OCI (Open Container Initiative). Após a compilação local da imagem da aplicação, adiciona-se uma tag com a versão semântica e realiza-se a publicação (`docker push`), disponibilizando o artefato para qualquer servidor de nuvem.',
            code: `commands_docker_hub = [
    "docker build -t factoryhub-app:latest .",
    "docker tag factoryhub-app:latest usuario/factoryhub-app:v1.2.0",
    "docker login -u usuario -p **********",
    "docker push usuario/factoryhub-app:v1.2.0"
]
print("Comandos para Publicação de Artefato no Docker Hub:")
for cmd in commands_docker_hub:
    print(f"$ {cmd}")`,
            output: `Comandos para Publicação de Artefato no Docker Hub:
$ docker build -t factoryhub-app:latest .
$ docker tag factoryhub-app:latest usuario/factoryhub-app:v1.2.0
$ docker login -u usuario -p **********
$ docker push usuario/factoryhub-app:v1.2.0`,
            interpretation: 'A imagem imutável `v1.2.0` publicada no Docker Hub garante que o mesmo código testado em desenvolvimento seja implantado em produção.'
        }
    ],
    5: [
        {
            biblio: 'Romero (2015), Cap. 3 & 4; Vitalino & Castro (2018), Cap. 4',
            title: '1. Orquestração Multi-Contêiner com Docker Compose',
            theory: 'O **Docker Compose** permite definir e rodar pilhas complexas de microsserviços declarativamente em arquivos YAML. Na Smart N1, o Compose conecta a aplicação web em Python, o broker MQTT Mosquitto e a base de dados PostgreSQL em uma rede privada compartilhada.',
            code: `docker_compose_yaml = """
version: '3.8'
services:
  web:
    image: usuario/factoryhub-app:v1.2.0
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://admin:secret@db:5432/factory_db
      - MQTT_HOST=broker
    depends_on:
      - db
      - broker
  broker:
    image: eclipse-mosquitto:latest
    ports:
      - "1883:1883"
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=secret
"""
print("Arquivo docker-compose.yml do Ecossistema:")
print(docker_compose_yaml.strip())`,
            output: `Arquivo docker-compose.yml do Ecossistema:
version: '3.8'
services:
  web:
    image: usuario/factoryhub-app:v1.2.0
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://admin:secret@db:5432/factory_db
      - MQTT_HOST=broker
    depends_on:
      - db
      - broker
  broker:
    image: eclipse-mosquitto:latest
    ports:
      - "1883:1883"
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=secret`,
            interpretation: 'Com a diretiva `depends_on`, os serviços sobem na ordem estrita de dependência tecnológica.'
        }
    ],
    6: [
        {
            biblio: 'Sato (2014), Cap. 3; Boaglio (2016), Cap. 1',
            title: '1. Automação de Esteiras com GitHub Actions Workflows',
            theory: 'O **GitHub Actions** automatiza o ciclo de vida do desenvolvimento de software executando Workflows declarativos acionados por eventos como `push` ou `pull_request`. Os agentes de execução (*Runners*) rodam os passos configurados em contêineres isolados.',
            code: `yaml_workflow = """
name: Workflows de Automação FactoryHub
on:
  push:
    branches: [ develop, main ]
jobs:
  lint-and-validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Syntax Check
        run: python -m py_compile factoryhub/app.py
"""
print("Fluxo GitHub Actions (.github/workflows/main.yml):")
print(yaml_workflow.strip())`,
            output: `Fluxo GitHub Actions (.github/workflows/main.yml):
name: Workflows de Automação FactoryHub
on:
  push:
    branches: [ develop, main ]
jobs:
  lint-and-validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - name: Syntax Check
        run: python -m py_compile factoryhub/app.py`,
            interpretation: 'O acionamento automático do pipeline no push garante a validação contínua de sintaxe e dependências.'
        }
    ],
    7: [
        {
            biblio: 'Sato (2014), Cap. 3 & 4',
            title: '1. Integração Contínua (CI): Testes Automatizados e Cobertura de Código',
            theory: 'A **Integração Contínua (CI)** exige que todo código enviado passe por testes unitários e de integração antes de ser aceito no repositório principal. Ferramentas de análise estática e relatórios de cobertura (*Code Coverage*) verificam se o percentual de testes atende às métricas de qualidade.',
            code: `def executar_bateria_testes(cobertura_pct: float, falhas_encontradas: int):
    status = "APROVADO" if cobertura_pct >= 80.0 and falhas_encontradas == 0 else "REPROVADO"
    return {
        "coverage": f"{cobertura_pct}%",
        "failures": falhas_encontradas,
        "ci_result": status
    }

print("Resultado do Job de CI no GitHub Actions:")
print(executar_bateria_testes(cobertura_pct=88.5, falhas_encontradas=0))`,
            output: `Resultado do Job de CI no GitHub Actions:
{'coverage': '88.5%', 'failures': 0, 'ci_result': 'APROVADO'}`,
            interpretation: 'Com 88.5% de cobertura de código e 0 falhas, o pipeline de CI autoriza a aprovação do Pull Request.'
        }
    ],
    8: [
        {
            biblio: 'Vercel Docs (2024); Sato (2014), Cap. 5',
            title: '1. Entrega Contínua (CD) Automatizada via Vercel e Webhooks',
            theory: 'A **Entrega Contínua (CD)** automatiza o processo de publicação. Quando o PR é aceito e mesclado na branch `main`, a integração com a Vercel realiza o *Promotion Deploy* automático para o ambiente oficial de produção sem interrupção de serviço.',
            code: `def pipeline_cd_status(branch_destino: str):
    if branch_destino == "main":
        return "Vercel CD Trigger: Production Deployment Ativo -> https://factoryhub.vercel.app [HTTP 200 OK]"
    return "Vercel CD Trigger: Preview Deployment Ativo -> Entregue em ambiente Staging"

print(pipeline_cd_status("main"))`,
            output: `Vercel CD Trigger: Production Deployment Ativo -> https://factoryhub.vercel.app [HTTP 200 OK]`,
            interpretation: 'A automação CD elimina intervenções manuais via SSH, garantindo implantação ágil e confiável.'
        }
    ],
    9: [
        {
            biblio: 'Vitalino & Castro (2018), Cap. 6; Sato (2014), Cap. 7',
            title: '1. Observabilidade, Centralização de Logs e Métricas DORA',
            theory: 'A **Observabilidade** monitora a saúde das esteiras e dos serviços através dos três pilares: Logs, Métricas e Traces. O desempenho da engenharia é acompanhado pelas 4 **Métricas DORA** (Deployment Frequency, Lead Time, Change Failure Rate, Time to Restore).',
            code: `dora_kpis = {
    "Deployment Frequency": "14 deploys / semana (Elite)",
    "Lead Time for Changes": "42 minutos (Elite)",
    "Change Failure Rate": "2.1% (Elite)",
    "Mean Time to Recovery (MTTR)": "11 minutos (Elite)"
}
print("Métricas DORA da Equipe de Engenharia DevOps:")
for k, v in dora_kpis.items():
    print(f"-> {k:30s}: {v}")`,
            output: `Métricas DORA da Equipe de Engenharia DevOps:
-> Deployment Frequency          : 14 deploys / semana (Elite)
-> Lead Time for Changes         : 42 minutos (Elite)
-> Change Failure Rate           : 2.1% (Elite)
-> Mean Time to Recovery (MTTR)  : 11 minutos (Elite)`,
            interpretation: 'O alto desempenho em métricas DORA evidencia uma infraestrutura automatizada e com baixo risco de regressão.'
        }
    ],
    10: [
        {
            biblio: 'Google Cloud Skills Boost (2024); Veras (2015), Cap. 6',
            title: '1. Esteira Completa de Produção no GCP (Google Cloud Skills Boost)',
            theory: 'Na etapa avançada, os estudantes constroem a pipeline corporativa completa no **Google Cloud Platform (GCP)** via **Google Cloud Skills Boost**. O fluxo inclui a publicação da imagem no **Artifact Registry**, provisionamento do **Cloud SQL PostgreSQL** e deploy Serverless no **Cloud Run** com conexão segura via IAM.',
            code: `gcp_pipeline_steps = [
    "gcloud builds submit --tag southamerica-east1-docker.pkg.dev/smartn1/apps/factoryhub:v1.0",
    "gcloud sql instances create smartn1-db --database-version=POSTGRES_15 --cpu=2 --memory=7680MB --region=southamerica-east1",
    "gcloud run deploy factoryhub-prod --image southamerica-east1-docker.pkg.dev/smartn1/apps/factoryhub:v1.0 --add-cloudsql-instances smartn1-db --allow-unauthenticated"
]
print("Pipeline Completo no GCP (Cloud Skills Boost):")
for idx, cmd in enumerate(gcp_pipeline_steps, 1):
    print(f"Etapa {idx}: {cmd}")`,
            output: `Pipeline Completo no GCP (Cloud Skills Boost):
Etapa 1: gcloud builds submit --tag southamerica-east1-docker.pkg.dev/smartn1/apps/factoryhub:v1.0
Etapa 2: gcloud sql instances create smartn1-db --database-version=POSTGRES_15 --cpu=2 --memory=7680MB --region=southamerica-east1
Etapa 3: gcloud run deploy factoryhub-prod --image southamerica-east1-docker.pkg.dev/smartn1/apps/factoryhub:v1.0 --add-cloudsql-instances smartn1-db --allow-unauthenticated`,
            interpretation: 'O Cloud Run escala automaticamente de zero a dezenas de instâncias conectadas com o banco Cloud SQL gerenciado.'
        }
    ],
    11: [
        {
            biblio: 'Sato (2014), Cap. 7; Vercel & GCP Docs (2024)',
            title: '1. Demonstração Integrada de CI/CD (Esteiras Vercel + GCP)',
            theory: 'No encerramento do módulo, demonstra-se a arquitetura híbrida de entrega contínua: o frontend web e dashboards analíticos são implantados continuamente na **Vercel**, enquanto a API de telemetria e o banco relacional rodam na infraestrutura autogerenciada do **GCP (Cloud Run / Cloud SQL)**.',
            code: `arquitetura_entrega = {
    "Frontend & Dashboards": "Vercel Edge Network (Deploy Automático via GitHub Integration)",
    "Backend Microservices": "GCP Cloud Run (Container Serverless em Docker OCI)",
    "Database": "GCP Cloud SQL PostgreSQL (Alta Disponibilidade Multi-AZ)",
    "CI/CD Orchestrator": "GitHub Actions + Google Cloud Artifact Registry"
}
print("Arquitetura Final de Entrega Contínua (Vercel + GCP):")
for comp, desc in arquitetura_entrega.items():
    print(f"[{comp:22s}]: {desc}")`,
            output: `Arquitetura Final de Entrega Contínua (Vercel + GCP):
[Frontend & Dashboards ]: Vercel Edge Network (Deploy Automático via GitHub Integration)
[Backend Microservices]: GCP Cloud Run (Container Serverless em Docker OCI)
[Database              ]: GCP Cloud SQL PostgreSQL (Alta Disponibilidade Multi-AZ)
[CI/CD Orchestrator    ]: GitHub Actions + Google Cloud Artifact Registry`,
            interpretation: 'A combinação Vercel + GCP oferece o melhor dos dois mundos: extrema agilidade no frontend e robustez corporativa no backend industrial.'
        }
    ]
};
