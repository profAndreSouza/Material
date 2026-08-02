window.lessonTheoriesNuvem = {
    1: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 1; Rose (2022), Cap. 1; Veras (2015), Cap. 1',
            title: '1. O Que É Computação em Nuvem & Fundamentos de Infraestrutura',
            theory: 'A <strong>Computação em Nuvem</strong> é a entrega sob demanda de recursos de TI (computação, armazenamento, redes e bancos de dados) via internet com tarifação baseada em uso. Os conceitos fundamentais incluem:<br><ul><li><strong>Elasticidade:</strong> Ajuste dinâmico da capacidade computacional em resposta a oscilações de demanda.</li><li><strong>Escalabilidade Horizontal (Scale-Out):</strong> Adição de novos servidores em paralelo.</li><li><strong>Resiliência:</strong> Tolerância a falhas sem indisponibilidade do serviço.</li></ul>',
            code: `def calcular_capacidade_nuvem(instancias: int, vcpus: int, ram_gb: int):
    return {"total_vcpu": instancias * vcpus, "total_ram_gb": instancias * ram_gb}

print("Cluster Cloud Scale-Out (4 Instâncias e2-standard-2):")
print(calcular_capacidade_nuvem(instancias=4, vcpus=2, ram_gb=8))`,
            output: `Cluster Cloud Scale-Out (4 Instâncias e2-standard-2):
{'total_vcpu': 8, 'total_ram_gb': 32}`,
            interpretation: 'A escalabilidade horizontal permite expandir o cluster fabril ajustando a contagem de instâncias de forma simples e rápida.'
        }
    ],
    2: [
        {
            biblio: 'Veras (2015), Cap. 2; Rose (2022), Cap. 2',
            title: '1. Criação e Configuração de Projetos no Google Cloud Platform (GCP)',
            theory: 'Um **Projeto no GCP** é o contêiner raiz de organização para todos os recursos (VMs, Buckets, Bancos, Regras de Rede e Permissões IAM). Cada projeto possui um ID único global, conta de faturamento associada e cotas operacionais.',
            code: `project_info = {
    "project_name": "Smart N1 Industry",
    "project_id": "smartn1-factoryhub-prod",
    "region": "southamerica-east1 (São Paulo)",
    "billing_status": "Active"
}
print(f"Projeto GCP Configurado: {project_info['project_name']} [{project_info['project_id']}]")
print(f"Região Oficial: {project_info['region']}")`,
            output: `Projeto GCP Configurado: Smart N1 Industry [smartn1-factoryhub-prod]
Região Oficial: southamerica-east1 (São Paulo)`,
            interpretation: 'A definição da região `southamerica-east1` em São Paulo minimiza a latência de rede com a planta fabril.'
        }
    ],
    3: [
        {
            biblio: 'Veras (2015), Cap. 4; Molinari (2018), Cap. 3',
            title: '1. Armazenamento de Dados Não Estruturados com Cloud Storage',
            theory: 'O **Cloud Storage** armazena objetos binários (imagens, CSVs de telemetria, logs de sensores e backups) em **Buckets** organizados mundialmente. Suporta classes de armazenamento como Standard, Nearline e Coldline para otimização de custos de ciclo de vida.',
            code: `bucket_config = {
    "name": "smartn1-telemetry-storage",
    "storage_class": "STANDARD",
    "lifecycle_rule": "Mover para NEARLINE após 30 dias de inatividade"
}
print(f"Bucket GCP: gs://{bucket_config['name']}")
print(f"Política de Lifecycle: {bucket_config['lifecycle_rule']}")`,
            output: `Bucket GCP: gs://smartn1-telemetry-storage
Política de Lifecycle: Mover para NEARLINE após 30 dias de inatividade`,
            interpretation: 'Arquivos antigos de telemetria migram automaticamente para classes de menor custo reduzindo despesas operacionais.'
        }
    ],
    4: [
        {
            biblio: 'Rose (2022), Cap. 4; Veras (2015), Cap. 5',
            title: '1. Banco de Dados Gerenciado Cloud SQL (PostgreSQL)',
            theory: 'O **Cloud SQL** é o serviço totalmente gerenciado para PostgreSQL e MySQL no GCP, oferecendo backups automáticos, réplicas de leitura e failover com Alta Disponibilidade (HA) entre zonas distintas.',
            code: `cloud_sql_spec = {
    "instance": "smartn1-db-instance",
    "database": "PostgreSQL 15",
    "tier": "db-custom-2-7680",
    "high_availability": True,
    "primary_zone": "southamerica-east1-a",
    "standby_zone": "southamerica-east1-b"
}
print("Especificação da Instância Cloud SQL:")
print(f"Engine: {cloud_sql_spec['database']} | HA Multi-AZ: {cloud_sql_spec['high_availability']}")
print(f"Primário: {cloud_sql_spec['primary_zone']} <--> Failover: {cloud_sql_spec['standby_zone']}")`,
            output: `Especificação da Instância Cloud SQL:
Engine: PostgreSQL 15 | HA Multi-AZ: True
Primário: southamerica-east1-a <--> Failover: southamerica-east1-b`,
            interpretation: 'Em caso de pane no data center da zona `a`, o Cloud SQL promove o servidor da zona `b` em segundos sem perda de dados.'
        }
    ],
    5: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 3; Rose (2022), Cap. 3',
            title: '1. Estratégias de Deploy da Aplicação na Infraestrutura Cloud',
            theory: 'O deploy de aplicações na nuvem envolve a definição de variáveis de ambiente, portas de escuta, limites de CPU/RAM e integração segura com serviços de persistência e segredos de produção.',
            code: `deploy_spec = {
    "app_name": "factoryhub",
    "container_port": 5000,
    "memory_mb": 512,
    "cpu_cores": 1,
    "env_vars": ["DATABASE_URL", "MQTT_BROKER_HOST"]
}
print(f"Especificação de Implantação: {deploy_spec['app_name']}")
print(f"Recursos Computacionais: {deploy_spec['cpu_cores']} vCPU / {deploy_spec['memory_mb']} MB RAM")`,
            output: `Especificação de Implantação: factoryhub
Recursos Computacionais: 1 vCPU / 512 MB RAM`,
            interpretation: 'A alocação enxuta de recursos garante rápida inicialização e baixo consumo financeiro.'
        }
    ],
    6: [
        {
            biblio: 'Rose (2022), Cap. 3; Muniz et al. (2023), Cap. 2',
            title: '1. Computação Serverless com GCP Cloud Run',
            theory: 'O **Cloud Run** é uma plataforma serverless gerenciada que executa contêineres OCI diretamente em infraestrutura autogerenciada. Apresenta o modelo *Scale-to-Zero* (redução para zero instâncias quando inativo) e auto-escalonamento instantâneo sob demanda.',
            code: `def cloud_run_autoscaling(requisições_ativas: int, req_por_instancia: int = 80):
    if requisições_ativas == 0:
        return 0 # Scale to Zero
    instancias = (requisições_ativas // req_por_instancia) + 1
    return instancias

print("Comportamento do Cloud Run under load:")
print(f"0 Requisições -> {cloud_run_autoscaling(0)} Instâncias ativas (Custo $0)")
print(f"250 Requisições Simultâneas -> {cloud_run_autoscaling(250)} Instâncias ativas")`,
            output: `Comportamento do Cloud Run under load:
0 Requisições -> 0 Instâncias ativas (Custo $0)
250 Requisições Simultâneas -> 4 Instâncias ativas`,
            interpretation: 'O Cloud Run reduz custos nos períodos noturnos zerando instâncias e escala automaticamente quando a fábrica opera.'
        }
    ],
    7: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 5; Veras (2015), Cap. 6',
            title: '1. Gestão de Identidade, Segurança & Permissões IAM',
            theory: 'O **IAM (Identity and Access Management)** define permissões de acesso com base no princípio do menor privilégio. Associa **Service Accounts** a **Roles** específicas como `roles/cloudsql.client` e `roles/storage.objectViewer`.',
            code: `iam_binding = {
    "service_account": "sa-factoryhub@smartn1-factoryhub-prod.iam.gserviceaccount.com",
    "roles": ["roles/cloudsql.client", "roles/logging.logWriter"]
}
print(f"Service Account: {iam_binding['service_account']}")
print(f"Roles Atribuídas: {', '.join(iam_binding['roles'])}")`,
            output: `Service Account: sa-factoryhub@smartn1-factoryhub-prod.iam.gserviceaccount.com
Roles Atribuídas: roles/cloudsql.client, roles/logging.logWriter`,
            interpretation: 'A aplicação possui direitos estritos para acessar o banco Cloud SQL e escrever logs, sem acesso administrativo global.'
        }
    ],
    8: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 4; Rose (2022), Cap. 4',
            title: '1. Monitoramento, Métricas e Alertas na GCP (Cloud Monitoring)',
            theory: 'O **Cloud Monitoring** coleta métricas de CPU, latência HTTP, uso de memória e saúde de contêineres do Cloud Run, permitindo o agendamento de **Alerting Policies** com envio de notificações.',
            code: `monitoring_metrics = {
    "cpu_utilization_avg": 42.5,
    "http_latency_p95_ms": 120.4,
    "http_5xx_errors": 0
}
print("Métricas do Cloud Monitoring:")
for metric, val in monitoring_metrics.items():
    print(f"-> {metric:22s}: {val}")`,
            output: `Métricas do Cloud Monitoring:
-> cpu_utilization_avg   : 42.5
-> http_latency_p95_ms   : 120.4
-> http_5xx_errors       : 0`,
            interpretation: 'A latência de 120ms no percentil 95 indica excelente tempo de resposta para os clientes da fábrica.'
        }
    ],
    9: [
        {
            biblio: 'Veras (2015), Cap. 7; Molinari (2018), Cap. 5',
            title: '1. Gestão Econômica, FinOps & Escalabilidade Financeira',
            theory: 'O conceito de **FinOps** combina engenharia e finanças para monitorar despesas em nuvem. Utiliza orçamentos (*Budgets*), limites de gastos, alertas por e-mail e recomendadores de otimização de instâncias.',
            code: `budget_alert = {
    "monthly_budget_usd": 100.0,
    "current_spend_usd": 45.2,
    "forecast_end_of_month": 88.0,
    "status": "DENTRO DO ORÇAMENTO"
}
print(f"Orçamento Mensal GCP: ${budget_alert['monthly_budget_usd']:.2f}")
print(f"Gasto Atual: ${budget_alert['current_spend_usd']:.2f} | Status: {budget_alert['status']}")`,
            output: `Orçamento Mensal GCP: $100.00
Gasto Atual: $45.20 | Status: DENTRO DO ORÇAMENTO`,
            interpretation: 'A projeção de $88 garante que os custos do projeto permanecerão abaixo do teto orçamentário estipulado.'
        }
    ],
    10: [
        {
            biblio: 'Veras (2015), Cap. 6; Rose (2022), Cap. 5',
            title: '1. Publicação Final e Registradores de Imagens (Artifact Registry)',
            theory: 'O **Artifact Registry** é o repositório seguro e privado do GCP para armazenar imagens de contêineres Docker, pacotes de linguagem e artefatos de build integrados à esteira de produção.',
            code: `artifact_repo = {
    "location": "southamerica-east1",
    "repository_name": "apps",
    "image_path": "southamerica-east1-docker.pkg.dev/smartn1-factoryhub-prod/apps/factoryhub:v1.0.0"
}
print(f"Caminho do Artefato GCP Artifact Registry:")
print(artifact_repo['image_path'])`,
            output: `Caminho do Artefato GCP Artifact Registry:
southamerica-east1-docker.pkg.dev/smartn1-factoryhub-prod/apps/factoryhub:v1.0.0`,
            interpretation: 'A imagem validada é armazenada no Artifact Registry regional antes do deploy no Cloud Run.'
        }
    ],
    11: [
        {
            biblio: 'Rose (2022), Cap. 5; Kolbe Jr (2020), Cap. 5',
            title: '1. Operação do Ambiente em Produção com Alta Disponibilidade',
            theory: 'No ambiente em produção oficial, a infraestrutura opera em regime de alta disponibilidade, com certificados TLS geridos automaticamente pelo Google Cloud, balanceamento global de carga e monitoramento 24/7.',
            code: `prod_status = {
    "domain": "https://smartn1.factoryhub.com",
    "tls_certificate": "Managed Active",
    "cloud_run_status": "SERVED (100% Traffic)",
    "database_ha": "Healthy (Primary + Standby)"
}
print("Status do Ambiente em Produção (GCP):")
for k, v in prod_status.items():
    print(f"[{k:20s}]: {v}")`,
            output: `Status do Ambiente em Produção (GCP):
[domain              ]: https://smartn1.factoryhub.com
[tls_certificate     ]: Managed Active
[cloud_run_status    ]: SERVED (100% Traffic)
[database_ha         ]: Healthy (Primary + Standby)`,
            interpretation: 'O ambiente em produção atende a todos os requisitos de segurança, escalabilidade e resiliência exigidos pela fábrica digital.'
        }
    ]
};
