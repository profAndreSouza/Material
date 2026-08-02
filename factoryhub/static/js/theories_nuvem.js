window.lessonTheoriesNuvem = {
    1: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 1; Rose (2022), Cap. 1; Veras (2015), Cap. 1',
            title: '1. Fundamentos da Computação em Nuvem & Escalabilidade',
            theory: 'A <strong>Computação em Nuvem</strong> é a entrega de recursos de computação (servidores, armazenamento, bancos de dados, redes e software) sob demanda via internet, com tarifação baseada no uso (<em>Pay-as-you-go</em>). Os fundamentos essenciais incluem:<br><ul><li><strong>Elasticidade:</strong> Capacidade de expandir ou contrair recursos automaticamente em resposta à variação de carga.</li><li><strong>Escalabilidade Horizontal (Scale-Out):</strong> Adição de novos nós/instâncias em paralelo.</li><li><strong>Escalabilidade Vertical (Scale-Up):</strong> Aumento de CPU/RAM de uma instância existente.</li><li><strong>Resiliência:</strong> Capacidade do sistema de tolerar falhas de hardware sem interrupção dos serviços.</li></ul>',
            code: `def calcular_capacidade_nuvem(instancias: int, vcpus_por_instancia: int, ram_gb_por_instancia: int):
    total_vcpu = instancias * vcpus_por_instancia
    total_ram = instancias * ram_gb_por_instancia
    return total_vcpu, total_ram

vcpus, ram = calcular_capacidade_nuvem(instancias=4, vcpus_por_instancia=2, ram_gb_por_instancia=8)
print(f"Cluster Cloud (Scale-Out: 4 Instâncias e2-standard-2):")
print(f"Total de vCPUs alocadas: {vcpus} vCPUs | Total de Memória RAM: {ram} GB")`,
            output: `Cluster Cloud (Scale-Out: 4 Instâncias e2-standard-2):
Total de vCPUs alocadas: 8 vCPUs | Total de Memória RAM: 32 GB`,
            interpretation: 'A escalabilidade horizontal permite dobrar a capacidade computacional da fábrica ajustando a contagem de instâncias de 4 para 8.'
        }
    ],
    2: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 2; Rose (2022), Cap. 2; Veras (2013), Cap. 1',
            title: '1. Os 5 Pilares da Arquitetura em Nuvem (Well-Architected Framework)',
            theory: 'O framework de arquitetura recomendada (*Well-Architected Framework*) orienta o projeto de infraestruturas seguras e eficientes fundamentadas em 5 pilares:<br><ol><li><strong>Excelência Operacional:</strong> Executar e monitorar sistemas agregando valor continuo.</li><li><strong>Segurança:</strong> Proteger dados e ativos com criptografia e controle de acesso mínimo.</li><li><strong>Confiabilidade:</strong> Recuperação automatizada de falhas e testes de carga.</li><li><strong>Eficiência de Performance:</strong> Utilização otimizada de recursos de computação.</li><li><strong>Otimização de Custos:</strong> Eliminação de desperdícios de capacidade ociosa.</li></ol>',
            code: `pilares_nuvem = {
    "Excelência Operacional": "Automação de IaC via Terraform",
    "Segurança": "Políticas IAM de privilégio mínimo e TLS 1.3",
    "Confiabilidade": "Deploy Multi-AZ com réplicas de leitura",
    "Eficiência de Performance": "Caching com Redis e CDN Edge",
    "Otimização de Custos": "Desligamento automático de staging à noite"
}
print("Os 5 Pilares Aplicados na Nuvem da Smart N1:")
for pilar, estrategia in pilares_nuvem.items():
    print(f"-> {pilar:25s}: {estrategia}")`,
            output: `Os 5 Pilares Aplicados na Nuvem da Smart N1:
-> Excelência Operacional     : Automação de IaC via Terraform
-> Segurança                 : Políticas IAM de privilégio mínimo e TLS 1.3
-> Confiabilidade             : Deploy Multi-AZ com réplicas de leitura
-> Eficiência de Performance  : Caching com Redis e CDN Edge
-> Otimização de Custos       : Desligamento automático de staging à noite`,
            interpretation: 'A aplicação integrada dos 5 pilares assegura disponibilidade contínua com custos previsíveis.'
        }
    ],
    3: [
        {
            biblio: 'Veras (2015), Cap. 2 & 3; Tanenbaum et al. (2021), Cap. 1',
            title: '1. Nuvens Públicas, Privadas, Híbridas & Estrutura Global GCP',
            theory: 'As nuvens classificam-se conforme o modelo de implantação:<br><ul><li><strong>Nuvem Pública (GCP, AWS, Azure):</strong> Infraestrutura compartilhada de alta escala mantida por provedores globais.</li><li><strong>Nuvem Privada (On-Premise):</strong> Infraestrutura dedicada de uso exclusivo da empresa.</li><li><strong>Nuvem Híbrida:</strong> Integração segura conectando servidores locais à nuvem pública.</li></ul>A infraestrutura global divide-se em <strong>Regiões</strong> (locações geográficas como `southamerica-east1` em São Paulo) contendo múltiplas <strong>Zonas de Disponibilidade (AZs)</strong> isoladas contra falhas físicas.',
            code: `infra_gcp = {
    "regiao": "southamerica-east1 (São Paulo)",
    "zonas": ["southamerica-east1-a", "southamerica-east1-b", "southamerica-east1-c"],
    "edge_locations": ["Rio de Janeiro", "São Paulo", "Buenos Aires"]
}
print(f"Provedor Público: GCP | Região Oficial: {infra_gcp['regiao']}")
print(f"Zonas de Disponibilidade Ativas: {', '.join(infra_gcp['zonas'])}")`,
            output: `Provedor Público: GCP | Região Oficial: southamerica-east1 (São Paulo)
Zonas de Disponibilidade Ativas: southamerica-east1-a, southamerica-east1-b, southamerica-east1-c`,
            interpretation: 'Distribuir a aplicação entre as zonas `a` e `b` garante alta disponibilidade mesmo se um data center físico sofrer blecaute.'
        }
    ],
    4: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 3; Rose (2022), Cap. 3; Molinari (2018), Cap. 2',
            title: '1. Modelos de Serviço: IaaS, PaaS e SaaS',
            theory: 'Os modelos de serviço definem a matriz de responsabilidade compartilhada entre o cliente e o provedor:<br><ul><li><strong>IaaS (Infraestrutura como Serviço):</strong> O provedor fornece VMs e rede; o cliente gerencia o SO e a aplicação (ex: Compute Engine).</li><li><strong>PaaS (Plataforma como Serviço):</strong> O provedor gerencia o SO e o ambiente de execução; o cliente foca apenas no código (ex: App Engine, Vercel).</li><li><strong>SaaS (Software como Serviço):</strong> Aplicação completa pronta para consumo final via web (ex: Google Workspace, Grafana Cloud).</li></ul>',
            code: `modelos_servico = [
    ("IaaS", "GCP Compute Engine", "Gerencia VM, SO, Pacotes e Aplicação"),
    ("PaaS", "GCP Cloud Run / Vercel", "Gerencia apenas o Código e Imagem Docker"),
    ("SaaS", "Grafana Cloud / Google Docs", "Consome a Aplicação Pronta")
]
print("Matriz de Modelos de Serviço em Nuvem:")
for mod, exe, resp in modelos_servico:
    print(f"Modelo: {mod:6s} | Exemplo: {exe:24s} | Foco: {resp}")`,
            output: `Matriz de Modelos de Serviço em Nuvem:
Modelo: IaaS   | Exemplo: GCP Compute Engine       | Foco: Gerencia VM, SO, Pacotes e Aplicação
Modelo: PaaS   | Exemplo: GCP Cloud Run / Vercel   | Foco: Gerencia apenas o Código e Imagem Docker
Modelo: SaaS   | Exemplo: Grafana Cloud / Google Docs | Foco: Consome a Aplicação Pronta`,
            interpretation: 'A adoção de PaaS (Cloud Run) elimina o trabalho braçal de atualizar o sistema operacional das instâncias.'
        }
    ],
    5: [
        {
            biblio: 'Rose (2022), Cap. 3; Veras (2015), Cap. 4; Muniz et al. (2023), Cap. 2',
            title: '1. Virtualização de Recursos de Computação & Serverless',
            theory: 'A <strong>Virtualização</strong> permite subdividir um servidor físico em múltiplas Máquinas Virtuais (VMs) isoladas por um <em>Hypervisor</em>. O paradigma <strong>Serverless (Computação Sem Servidor)</strong> abstrai totalmente a infraestrutura subjacente, executando código de forma efêmera com auto-escalonamento de zero a milhares de instâncias.',
            code: `def calcular_custo_serverless(requisicoes: int, tempo_execucao_ms: float) -> float:
    preco_por_req = 0.0000004 # USD
    preco_por_gb_seg = 0.0000025 # USD
    custo_req = requisicoes * preco_por_req
    custo_comp = requisicoes * (tempo_execucao_ms / 1000.0) * preco_por_gb_seg
    return custo_req + custo_comp

custo_total = calcular_custo_serverless(requisicoes=500000, tempo_execucao_ms=120.0)
print(f"Custo de 500.000 Requisições no Cloud Run (Serverless): ${custo_total:.4f} USD")`,
            output: `Custo de 500.000 Requisições no Cloud Run (Serverless): $0.3500 USD`,
            interpretation: 'A arquitetura Serverless resulta em custo de apenas $0.35 para meio milhão de chamadas à API da fábrica.'
        }
    ],
    6: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 4; Veras (2015), Cap. 4; Tanenbaum et al. (2021), Cap. 4 & 5',
            title: '1. Redes Privadas Virtuais em Nuvem (VPC, Subredes e Firewalls)',
            theory: 'A **VPC (Virtual Private Cloud)** é uma rede virtual isolada e global dedicada a um projeto em nuvem. É dividida em **Subredes Regionais** com faixas de IP CIDR e protegida por **Regras de Firewall** de entrada (*Ingress*) e saída (*Egress*).',
            code: `regras_firewall = [
    {"prioridade": 1000, "acao": "ALLOW", "direcao": "INGRESS", "protocolo": "TCP", "porta": 5000, "origem": "0.0.0.0/0", "alvo": "factoryhub-app"},
    {"prioridade": 1000, "acao": "ALLOW", "direcao": "INGRESS", "protocolo": "TCP", "porta": 1883, "origem": "10.0.1.0/24", "alvo": "mosquitto-broker"},
    {"prioridade": 65535, "acao": "DENY", "direcao": "INGRESS", "protocolo": "ALL", "porta": "ALL", "origem": "0.0.0.0/0", "alvo": "ALL"}
]
print("Tabela de Regras de Firewall da VPC da Smart N1:")
for r in regras_firewall:
    print(f"Prio: {r['prioridade']} | Ação: {r['acao']:5s} | Porta: {str(r['porta']):5s} | Origem: {r['origem']:11s} -> Target: {r['alvo']}")`,
            output: `Tabela de Regras de Firewall da VPC da Smart N1:
Prio: 1000 | Ação: ALLOW | Porta: 5000  | Origem: 0.0.0.0/0   -> Target: factoryhub-app
Prio: 1000 | Ação: ALLOW | Porta: 1883  | Origem: 10.0.1.0/24  -> Target: mosquitto-broker
Prio: 65535 | Ação: DENY  | Porta: ALL   | Origem: 0.0.0.0/0   -> Target: ALL`,
            interpretation: 'A porta do Mosquitto (1883) é restrita exclusivamente à faixa de IPs internos da fábrica (`10.0.1.0/24`), bloqueando acessos externos diretos.'
        }
    ],
    7: [
        {
            biblio: 'Veras (2015), Cap. 4; Molinari (2018), Cap. 3',
            title: '1. Armazenamento de Objetos na Nuvem (Cloud Storage Buckets)',
            theory: 'O **Cloud Storage** armazena objetos binários não estruturados (imagens, vídeos, CSVs de telemetria e backups) acessíveis via HTTP REST em Buckets globais. As classes de armazenamento adaptam-se ao ciclo de vida:<br><ul><li><strong>Standard:</strong> Acesso frequente de alta performance.</li><li><strong>Nearline:</strong> Acesso menor que 1x ao mês.</li><li><strong>Coldline / Archive:</strong> Arquivamento de longo prazo com menor custo de armazenamento.</li></ul>',
            code: `bucket_config = {
    "name": "smartn1-telemetry-backups",
    "location": "SOUTHAMERICA-EAST1",
    "storage_class": "STANDARD",
    "lifecycle_rule": "Mover para NEARLINE após 30 dias de criação"
}
print(f"Bucket de Telemetria: {bucket_config['name']}")
print(f"Classe Atual: {bucket_config['storage_class']} | Regra de Ciclo de Vida: {bucket_config['lifecycle_rule']}")`,
            output: `Bucket de Telemetria: smartn1-telemetry-backups
Classe Atual: STANDARD | Regra de Ciclo de Vida: Mover para NEARLINE após 30 dias de criação`,
            interpretation: 'A regra de lifecycle move automaticamente os logs antigos para a classe Nearline reduzindo custos em até 50%.'
        }
    ],
    8: [
        {
            biblio: 'Rose (2022), Cap. 4; Veras (2015), Cap. 5; Muniz et al. (2023), Cap. 4',
            title: '1. Bancos de Dados Gerenciados na Nuvem (Cloud SQL PostgreSQL)',
            theory: 'Serviços de banco de dados gerenciados (**Cloud SQL**) assumem a responsabilidade automatizada por backups diários, aplicação de patches de segurança, alta disponibilidade com failover regional síncrono e réplicas de leitura para alívio de carga.',
            code: `cloud_sql_specs = {
    "engine": "PostgreSQL 15",
    "tier": "db-custom-2-7680 (2 vCPU, 7.5GB RAM)",
    "storage": "100GB SSD Auto-resizable",
    "high_availability": True,
    "primary_zone": "southamerica-east1-a",
    "standby_zone": "southamerica-east1-b"
}
print("Instância Cloud SQL Gerenciada para a Fábrica Smart N1:")
print(f"Engine: {cloud_sql_specs['engine']} | HA Habilitado: {cloud_sql_specs['high_availability']}")
print(f"Primário: {cloud_sql_specs['primary_zone']} <--> Standby: {cloud_sql_specs['standby_zone']}")`,
            output: `Instância Cloud SQL Gerenciada para a Fábrica Smart N1:
Engine: PostgreSQL 15 | HA Habilitado: True
Primário: southamerica-east1-a <--> Standby: southamerica-east1-b`,
            interpretation: 'Se a zona `a` falhar, a instância Cloud SQL promove automaticamente a réplica standby na zona `b` em menos de 60 segundos.'
        }
    ],
    9: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 4; Rose (2022), Cap. 4; Muniz et al. (2023), Cap. 4',
            title: '1. Alta Disponibilidade, Escalonamento Automático & Load Balancers',
            theory: 'O **Cloud Load Balancing** distribui o tráfego HTTP/HTTPS entre múltiplos grupos de instâncias (Auto-scaling Groups). O algoritmo de autoscaling monitora a taxa de uso da CPU (ex: 70%) aumentando ou reduzindo o número de servidores dinamicamente.',
            code: `def simulador_autoscaling(cpu_utilization_pct: float, min_instancias: int = 2, max_instancias: int = 10) -> int:
    if cpu_utilization_pct > 70.0:
        return min(max_instancias, int(min_instancias * 2))
    elif cpu_utilization_pct < 20.0:
        return min_instancias
    return min_instancias

for cpu in [45.0, 85.0, 15.0]:
    inst = simulador_autoscaling(cpu)
    print(f"Carga da CPU: {cpu:4.1f}% -> Auto-scaling ajusta para {inst} instâncias ativas")`,
            output: `Carga da CPU: 45.0% -> Auto-scaling ajusta para 2 instâncias ativas
Carga da CPU: 85.0% -> Auto-scaling ajusta para 4 instâncias ativas
Carga da CPU: 15.0% -> Auto-scaling ajusta para 2 instâncias ativas`,
            interpretation: 'Ao identificar pico de uso da CPU em 85%, o autoscaling escala a frota de 2 para 4 instâncias preservando a performance.'
        }
    ],
    10: [
        {
            biblio: 'Kolbe Jr (2020), Cap. 5; Veras (2015), Cap. 6; Muniz et al. (2023), Cap. 5',
            title: '1. Segurança de Dados em Nuvem: IAM, Roles & Service Accounts',
            theory: 'O **IAM (Identity and Access Management)** controla **QUEM** (Usuários, Grupos, Service Accounts) tem acesso a **QUAL** recurso e com **QUAIS** permissões (Roles). O princípio do menor privilégio garante que cada componente da fábrica possua estritamente o nível de acesso necessário.',
            code: `politica_iam = {
    "identity": "service-account-collector@smartn1.iam.gserviceaccount.com",
    "roles": [
        "roles/cloudsql.client",
        "roles/pubsub.publisher"
    ],
    "status": "Princípio do Privilégio Mínimo Aplicado"
}
print(f"Service Account: {politica_iam['identity']}")
print(f"Roles Concedidas: {', '.join(politica_iam['roles'])}")`,
            output: `Service Account: service-account-collector@smartn1.iam.gserviceaccount.com
Roles Concedidas: roles/cloudsql.client, roles/pubsub.publisher`,
            interpretation: 'A Service Account do Collector tem autorização estrita para inserir telemetria e publicar tópicos sem direitos administrativos.'
        }
    ],
    11: [
        {
            biblio: 'Veras (2015), Cap. 7; Molinari (2018), Cap. 5',
            title: '1. Aspectos Econômicos em Nuvem (FinOps & Operações)',
            theory: 'A cultura **FinOps (Financial Operations)** unifica as áreas de engenharia e finanças para governança de custos em nuvem. Utiliza-se calculadoras de TCO (*Total Cost of Ownership*), alertas de orçamento e instâncias Spot (descontos de até 80%) para otimização contínua de despesas.',
            code: `def calcular_economia_spot(custo_ondemand: float, desconto_spot_pct: float = 70.0) -> float:
    return custo_ondemand * (1 - desconto_spot_pct / 100.0)

custo_mes_ondemand = 450.00 # USD
custo_mes_spot = calcular_economia_spot(custo_mes_ondemand)
economia = custo_mes_ondemand - custo_mes_spot
print(f"Custo Mensal On-Demand: ${custo_mes_ondemand:.2f} USD")
print(f"Custo Mensal com Instâncias Spot: ${custo_mes_spot:.2f} USD")
print(f"Economia Gerada para o Projeto: ${economia:.2f} USD/mês ({70.0}% de desconto)")`,
            output: `Custo Mensal On-Demand: $450.00 USD
Custo Mensal com Instâncias Spot: $135.00 USD
Economia Gerada para o Projeto: $315.00 USD/mês (70.0% de desconto)`,
            interpretation: 'O uso de instâncias Spot em ambientes de desenvolvimento reduz os custos de infraestrutura de $450 para apenas $135 mensais.'
        }
    ]
};
