window.lessonTheoriesDevops = {
    1: [{
        biblio: "Sato (2014), Cap.1; Kaminski (2019), Cap.1",
        title: "1. Cultura DevOps, Filosofia CAMS e GitFlow",
        objetivos: [
            "Compreender os pilares da cultura DevOps (CAMS).",
            "Conhecer a estratégia de ramificação GitFlow.",
            "Estruturar o repositório para trabalho em equipe."
        ],
        contexto: "Para garantir agilidade nas entregas da fábrica sem comprometer a estabilidade do sistema de produção, adotamos o modelo de ramificação GitFlow.",
        theory: `Pilares DevOps (CAMS):
• Culture: Colaboração ativa entre Dev e Ops.
• Automation: Eliminação de tarefas manuais repetitivas.
• Measurement: Acompanhamento de métricas DORA.
• Sharing: Compartilhamento transparente de conhecimento.

O modelo GitFlow organiza as branches em: main (produção), develop (integração), feature/* (funcionalidades) e release/* (preparação de versão).`,
        code: `branches = ["main", "develop", "feature/mqtt-reconnect", "release/v1.0.0"]
print("Branches ativas no GitFlow:")
for b in branches:
    print(f" -> {b}")`,
        output: `Branches ativas no GitFlow:
 -> main
 -> develop
 -> feature/mqtt-reconnect
 -> release/v1.0.0`,
        interpretation: "As ramificações isolam novidades em desenvolvimento da versão estável em produção.",
        desafio: "Crie uma branch feature/minha-funcionalidade a partir de develop e efetue o primeiro commit.",
        dicas: "Nunca faça commits diretos na branch main. Utilize sempre Pull Requests a partir de feature branches.",
        projeto: "Define a estratégia de versionamento utilizada em todo o código do FactoryHub.",
        timeline: {
            antes: "Commits diretos no ramo principal provocando quebras.",
            durante: "Implementação das branches padrão do GitFlow.",
            depois: "Esteira protegida com revisões obrigatórias de código."
        },
        integracao: {
            cienciaDados: "Organiza o repositório de notebooks e scripts de análise.",
            automacao: "Versiona os arquivos de configuração do Node-RED e CLP.",
            nuvem: "Garante que apenas código testado seja publicado na nuvem."
        }
    }],

    2: [{
        biblio: "Vercel Docs (2024); Sato (2014), Cap.5",
        title: "2. Deploy Automatizado no Início da Jornada: Plataforma Vercel",
        objetivos: [
            "Conectar o repositório GitHub à plataforma Vercel.",
            "Compreender o conceito de Preview Deployments.",
            "Automatizar a entrega contínua do frontend."
        ],
        contexto: "Logo nas primeiras semanas, os estudantes publicam a interface web na Vercel para visualizar alterações instantaneamente a cada commit enviado ao GitHub.",
        theory: `Entrega Contínua com Vercel:
A Vercel oferece Zero-Config Continuous Deployment.
• A cada Push em branch secundária: Gera um Preview Deployment com URL única.
• A cada Merge na branch main: Realiza o Production Deployment automático.

Isso acelera o ciclo de feedback visual da aplicação.`,
        code: `def vercel_deploy(branch):
    if branch == "main":
        return "https://factoryhub.vercel.app (Production)"
    return f"https://factoryhub-git-{branch}.vercel.app (Preview)"

print(vercel_deploy("feature-ui"))
print(vercel_deploy("main"))`,
        output: `https://factoryhub-git-feature-ui.vercel.app (Preview)
https://factoryhub.vercel.app (Production)`,
        interpretation: "Cada commit gera um ambiente de validação em nuvem sem necessidade de configuração de servidores.",
        desafio: "Realize uma alteração visual na página inicial e verifique a geração da URL de Preview.",
        dicas: "Inspeccione os logs de compilação no painel da Vercel caso ocorra alguma falha no build.",
        projeto: "Hospeda o frontend e dashboards do FactoryHub acessíveis via Vercel.",
        timeline: {
            antes: "Hospedagem apenas local no computador do estudante.",
            durante: "Conexão do repositório GitHub com a plataforma Vercel.",
            depois: "Deploy contínuo e automático a cada alteração no código."
        },
        integracao: {
            cienciaDados: "Disponibiliza os painéis interativos em URLs públicas.",
            automacao: "Exibe o status do broker e dos sensores na web.",
            nuvem: "Atua como camada de borda (Edge) conectada às APIs GCP."
        }
    }],

    3: [{
        biblio: "Kaminski (2019), Cap.2; Sato (2014), Cap.2",
        title: "3. Estratégias Avançadas com GitFlow e Pull Requests (PRs)",
        objetivos: [
            "Abrir e revisar Pull Requests (PRs) no GitHub.",
            "Aplicar boas práticas de Code Review.",
            "Executar merge preservando o histórico de branches."
        ],
        contexto: "O trabalho colaborativo exige que o código escrito por um membro do time seja revisado e aprovado antes de integrar o sistema principal.",
        theory: `Fluxo de Aprovacão de Pull Requests:
1. Desenvolvedor conclui a funcionalidade na branch feature/*.
2. Abre um Pull Request com destino à branch develop.
3. Esteira de testes automatizados (CI) executa a validação.
4. Pares revisam o código e deixam comentários/sugestões.
5. Após aprovação, realiza-se o Merge (Merge Commit ou Squash).`,
        code: `pr_status = {"pr_id": 42, "author": "Aluno", "tests": "PASSED", "approvals": 2}
print(f"PR #{pr_status['pr_id']} -> Status: {pr_status['tests']} | Aprovadores: {pr_status['approvals']}")`,
        output: `PR #42 -> Status: PASSED | Aprovadores: 2`,
        interpretation: "O PR atinge todos os critérios de qualidade e pode ser mesclado à branch develop.",
        desafio: "Abra um PR no repositório da equipe e solicite a revisão de dois colegas de classe.",
        dicas: "Escreva títulos e descrições claras nos seus PRs indicando o que foi alterado e como testar.",
        projeto: "Garante o controle de qualidade do código-fonte do FactoryHub.",
        timeline: {
            antes: "Alterações mescladas sem revisão prévia.",
            durante: "Configuração de regras de proteção de branch e aprovações.",
            depois: "Código limpo, revisado e validado por testes de integração."
        },
        integracao: {
            cienciaDados: "Garante validação dos scripts Python de análise antes do merge.",
            automacao: "Evita que alterações incorretas afetem a ingestão MQTT.",
            nuvem: "Mantém a base estável para os deploys de produção."
        }
    }],

    4: [{
        biblio: "Romero (2015), Cap.2; Vitalino & Castro (2018), Cap.3",
        title: "4. Gerenciamento e Publicação de Imagens no Docker Hub",
        objetivos: [
            "Criar imagens de contêineres Docker padronizadas.",
            "Aplicar tags semânticas (SemVer) nas imagens.",
            "Publicar e baixar artefatos do Docker Hub."
        ],
        contexto: "O Docker Hub atua como o registrador oficial de artefatos OCI onde as imagens prontas da aplicação são disponibilizadas para qualquer ambiente.",
        theory: `Ciclo de Vida de Imagens Docker:
• Dockerfile: Receita de compilação da imagem.
• docker build: Gera a imagem imutável localmente.
• docker tag: Aplica identificadores (ex: usuario/factoryhub:v1.2.0).
• docker push: Envia o artefato compilado para o Docker Hub.
• docker pull: Baixa a imagem pronta no servidor de produção.`,
        code: `cmds = [
    "docker build -t factoryhub:latest .",
    "docker tag factoryhub:latest usuario/factoryhub:v1.0.0",
    "docker push usuario/factoryhub:v1.0.0"
]
for c in cmds:
    print(f"$ {c}")`,
        output: `$ docker build -t factoryhub:latest .
$ docker tag factoryhub:latest usuario/factoryhub:v1.0.0
$ docker push usuario/factoryhub:v1.0.0`,
        interpretation: "A imagem imutável v1.0.0 fica disponível globalmente para implantação em contêineres.",
        desafio: "Crie uma conta no Docker Hub e publique a imagem da aplicação FactoryHub com seu nome de usuário.",
        dicas: "Utilize imagens base leves (ex: python:3.11-slim ou alpine) para reduzir o tamanho dos downloads.",
        projeto: "Gera a imagem oficial do FactoryHub utilizada nos ambientes de execução.",
        timeline: {
            antes: "Necessidade de instalar dependências em cada máquina de desenvolvimento.",
            durante: "Empacotamento da aplicação em contêiner Docker OCI.",
            depois: "Publicação do artefato imutável no registrador Docker Hub."
        },
        integracao: {
            cienciaDados: "Garante ambiente Python idêntico com pandas, numpy e scipy.",
            automacao: "Empacota os serviços de coleta e telemetria.",
            nuvem: "Imagens do Docker Hub prontas para deploy no Cloud Run."
        }
    }],

    5: [{
        biblio: "Romero (2015), Cap.3 & 4; Vitalino & Castro (2018), Cap.4",
        title: "5. Orquestração Multi-Contêiner com Docker Compose",
        objetivos: [
            "Estruturar arquivos docker-compose.yml.",
            "Orquestrar a aplicação web e o banco de dados.",
            "Configurar redes virtuais e volumes persistentes."
        ],
        contexto: "O Docker Compose permite subir toda a infraestrutura local (aplicação web, banco de dados PostgreSQL) com um único comando declarativo.",
        theory: `Orquestração com Docker Compose:
Define serviços, redes e volumes em YAML:
• services: Aplicação Flask e banco PostgreSQL.
• ports: Mapeamento de portas (ex: 5000:5000).
• environment: Passagem de variáveis de ambiente.
• volumes: Persistência de dados do banco de dados relacional.`,
        code: `services = {"web": {"port": 5000}, "db": {"image": "postgres:15"}}
print("Serviços em Execução no Compose:")
for s, cfg in services.items():
    print(f" -> {s}: {cfg}")`,
        output: `Serviços em Execução no Compose:
 -> web: {'port': 5000}
 -> db: {'image': 'postgres:15'}`,
        interpretation: "A infraestrutura multi-contêiner sobe de forma coordenada e conectada.",
        desafio: "Suba o ambiente local com docker compose up -d e verifique o estado dos contêineres.",
        dicas: "Utilize docker compose logs -f para acompanhar as saídas registradas por todos os serviços simultaneamente.",
        projeto: "Ambiente de desenvolvimento oficial para testar o FactoryHub localmente.",
        timeline: {
            antes: "Inicialização manual de cada serviço em terminais separados.",
            durante: "Especificação declarativa no arquivo docker-compose.yml.",
            depois: "Inicialização completa com uma única instrução em terminal."
        },
        integracao: {
            cienciaDados: "Ambiente unificado para testes de consultas SQL e APIs.",
            automacao: "Conecta a aplicação ao banco de persistência.",
            nuvem: "Simula localmente a arquitetura utilizada no GCP."
        }
    }],

    6: [{
        biblio: "Sato (2014), Cap.3; Boaglio (2016), Cap.1",
        title: "6. Automação de Workflows com GitHub Actions",
        objetivos: [
            "Compreender a estrutura de arquivos YAML no .github/workflows/.",
            "Configurar gatilhos (triggers) de automação.",
            "Executar etapas automáticas de build e validação."
        ],
        contexto: "O GitHub Actions executa tarefas automatizadas a cada evento no repositório, garantindo que todo código enviado seja verificado automaticamente.",
        theory: `Anatomia de uma Workflow no GitHub Actions:
• Event (on): push, pull_request.
• Jobs: Tarefas que rodam em paralelo ou sequência em runners Linux.
• Steps: Passos individuais (checkout, setup-python, install, test).`,
        code: `yaml_summary = {"workflow": "CI Pipeline", "on": ["push", "pull_request"], "runner": "ubuntu-latest"}
print(yaml_summary)`,
        output: `{'workflow': 'CI Pipeline', 'on': ['push', 'pull_request'], 'runner': 'ubuntu-latest'}`,
        interpretation: "O workflow é disparado automaticamente a cada push ou PR no repositório.",
        desafio: "Adicione um passo no workflow para verificar a formatação do código Python com flake8.",
        dicas: "Utilize a aba Actions no repositório GitHub para visualizar a execução linha por linha dos logs de build.",
        projeto: "Esteira de verificação automatizada de código do FactoryHub.",
        timeline: {
            antes: "Testes e validações executados manualmente antes do commit.",
            durante: "Criação do arquivo .github/workflows/ci.yml.",
            depois: "Feedback imediato sobre o status do build em cada PR."
        },
        integracao: {
            cienciaDados: "Valida sintaxe de scripts de dados no pipeline.",
            automacao: "Testa rotas RESTful e modelos de telemetria.",
            nuvem: "Integra o repositório às ferramentas de publicação na nuvem."
        }
    }],

    7: [{
        biblio: "Sato (2014), Cap.3 & 4",
        title: "7. Integração Contínua (CI): Testes Automatizados e Qualidade",
        objetivos: [
            "Implementar testes unitários automatizados com pytest.",
            "Configurar execução de suítes de teste na esteira CI.",
            "Garantir critérios de aprovação de código."
        ],
        contexto: "A Integração Contínua (CI) garante que novos desenvolvimentos não quebrem funcionalidades existentes no FactoryHub.",
        theory: `Práticas de Integração Contínua (CI):
• Testes Unitários: Validam pequenas funções e regras de negócio isoladas.
• Testes de Integração: Testam a conexão entre rotas Flask e banco de dados.
• Code Coverage: Percentual do código testado pela suíte automatizada.`,
        code: `def run_ci(coverage, failures):
    approved = coverage >= 80 and failures == 0
    return f"Coverage: {coverage}% | Failures: {failures} -> Result: {'PASSED' if approved else 'FAILED'}"

print(run_ci(85, 0))`,
        output: `Coverage: 85% | Failures: 0 -> Result: PASSED`,
        interpretation: "Com 85% de cobertura e 0 falhas, a esteira de CI aprova a integração do código.",
        desafio: "Escreva um teste unitário para validar o retorno da rota /api/kpis.",
        dicas: "Mantenha a suíte de testes rápida para não desencorajar execuções frequentes no desenvolvimento.",
        projeto: "Garante alta confiabilidade nas atualizações do FactoryHub.",
        timeline: {
            antes: "Descoberta de bugs apenas pelo usuário em produção.",
            durante: "Escrita de testes unitários com pytest e execução na esteira.",
            depois: "Confiança total para realizar deploys frequentes."
        },
        integracao: {
            cienciaDados: "Valida precisão de cálculos estatísticos e agrupamentos.",
            automacao: "Testa rotas de comandos de atuadores sem necessidade de hardware físico.",
            nuvem: "Impede o deploy de contêineres com código defeituoso."
        }
    }],

    8: [{
        biblio: "Vercel Docs (2024); Sato (2014), Cap.5",
        title: "8. Entrega Contínua (CD) na Vercel e Ambientes Cloud",
        objetivos: [
            "Diferenciar Integração Contínua (CI) de Entrega Contínua (CD).",
            "Configurar deploys automáticos em ambiente de homologação e produção.",
            "Promover versões validadas."
        ],
        contexto: "Após a aprovação nos testes de CI, a entrega contínua (CD) realiza a publicação automática nos ambientes de hospedagem.",
        theory: `Diferença entre CI, CD (Delivery) e CD (Deployment):
• CI: Integração e testes automatizados.
• Continuous Delivery: Artefato pronto para deploy manual com 1 clique.
• Continuous Deployment: Publicação automática em produção sem intervenção humana.`,
        code: `def cd_pipeline(stage):
    envs = {"staging": "https://staging.factoryhub.app", "prod": "https://factoryhub.app"}
    return f"Deploy automático efetuado no ambiente [{stage}]: {envs[stage]}"

print(cd_pipeline("prod"))`,
        output: `Deploy automático efetuado no ambiente [prod]: https://factoryhub.app`,
        interpretation: "O deploy em produção é executado automaticamente pela esteira de CD.",
        desafio: "Configure um ambiente de Staging separado do ambiente de Produção na Vercel.",
        dicas: "Utilize flags de funcionalidade (Feature Flags) para lançar código novo desativado em produção.",
        projeto: "Automatiza a publicação das atualizações do FactoryHub.",
        timeline: {
            antes: "Processo de deploy manual por transferência FTP/SSH sucinto a falhas.",
            durante: "Configuração do gatilho de CD integrado ao GitHub.",
            depois: "Atualização automática do site em segundos após o merge."
        },
        integracao: {
            cienciaDados: "Publica relatórios atualizados automaticamente.",
            automacao: "Disponibiliza novas interfaces de supervisão imediatamente.",
            nuvem: "Hospeda o frontend conectado às APIs Serverless no GCP."
        }
    }],

    9: [{
        biblio: "Vitalino & Castro (2018), Cap.6; Sato (2014), Cap.7",
        title: "9. Observabilidade, Centralização de Logs e Métricas DORA",
        objetivos: [
            "Compreender os 3 pilares da observabilidade (Logs, Métricas, Traces).",
            "Acompanhar as 4 Métricas DORA de engenharia de software.",
            "Configurar alertas operacionais de indisponibilidade."
        ],
        contexto: "Monitorar o comportamento dos pipelines e da aplicação em produção é essencial para manter a estabilidade do ecossistema.",
        theory: `As 4 Métricas DORA de Desempenho:
1. Deployment Frequency: Frequência com que o código é implantado.
2. Lead Time for Changes: Tempo do commit até a produção.
3. Change Failure Rate: Percentual de deploys que causam falhas.
4. Time to Restore Service (MTTR): Tempo médio para restaurar o serviço após uma falha.`,
        code: `dora = {"freq": "Diário", "lead_time": "30 min", "failure_rate": "1%", "mttr": "10 min"}
print("Métricas DORA de Alto Desempenho:")
for k, v in dora.items():
    print(f" -> {k}: {v}")`,
        output: `Métricas DORA de Alto Desempenho:
 -> freq: Diário
 -> lead_time: 30 min
 -> failure_rate: 1%
 -> mttr: 10 min`,
        interpretation: "As métricas DORA demonstram alta maturidade e agilidade na esteira de DevOps da equipe.",
        desafio: "Calcule o tempo médio de recuperação (MTTR) de uma falha simulada no ambiente local.",
        dicas: "Estruture seus logs em formato JSON para facilitar a busca e indexação centralizada.",
        projeto: "Métricas utilizadas para avaliar o desempenho do time de engenharia do FactoryHub.",
        timeline: {
            antes: "Ausência de visibilidade sobre a saúde da esteira de entregas.",
            durante: "Coleta e exibição dos logs e métricas DORA.",
            depois: "Melhoria contínua dos tempos de deploy e resolução de incidentes."
        },
        integracao: {
            cienciaDados: "Métricas consumidas para análise de desempenho da equipe.",
            automacao: "Monitora paradas e desconexões dos serviços MQTT.",
            nuvem: "Integrado ao Google Cloud Monitoring e Logging."
        }
    }],

    10: [{
        biblio: "Google Cloud Skills Boost (2024); Veras (2015), Cap.6",
        title: "10. Pipeline Completo no GCP via Google Cloud Skills Boost",
        objetivos: [
            "Conectar GitHub Actions com Google Cloud Platform.",
            "Publicar imagens no Artifact Registry do GCP.",
            "Realizar deploy automático no GCP Cloud Run."
        ],
        contexto: "Na reta final da disciplina, os estudantes constroem a pipeline corporativa completa publicando serviços Serverless na nuvem GCP.",
        theory: `Pipeline Corporativo no GCP:
1. Push na branch main dispara o GitHub Actions.
2. Autenticação na GCP via Service Account segura (Workload Identity).
3. Compilação da imagem e envio ao Artifact Registry.
4. Deploy automático do contêiner atualizado no GCP Cloud Run.`,
        code: `gcp_cmds = [
    "gcloud auth configure-docker southamerica-east1-docker.pkg.dev",
    "gcloud builds submit --tag southamerica-east1-docker.pkg.dev/proj/apps/factoryhub:latest",
    "gcloud run deploy factoryhub --image southamerica-east1-docker.pkg.dev/proj/apps/factoryhub:latest"
]
for cmd in gcp_cmds:
    print(f"$ {cmd}")`,
        output: `$ gcloud auth configure-docker southamerica-east1-docker.pkg.dev
$ gcloud builds submit --tag southamerica-east1-docker.pkg.dev/proj/apps/factoryhub:latest
$ gcloud run deploy factoryhub --image southamerica-east1-docker.pkg.dev/proj/apps/factoryhub:latest`,
        interpretation: "O comando atualiza o serviço no Cloud Run sem downtime para os usuários.",
        desafio: "Execute o laboratório de CI/CD no GCP no Google Cloud Skills Boost e emita o certificado.",
        dicas: "Utilize credenciais temporárias ou Workload Identity Federation para autenticação entre GitHub e GCP.",
        projeto: "Pipeline de produção oficial para publicação do backend e APIs no Google Cloud.",
        timeline: {
            antes: "Deploy manual de contêineres na nuvem.",
            durante: "Construção do pipeline integrado GitHub Actions + GCP.",
            depois: "Esteira corporativa 100% automatizada em nuvem pública."
        },
        integracao: {
            cienciaDados: "Garante atualização contínua dos microsserviços de dados.",
            automacao: "Publica os gateways de integração TI/TA.",
            nuvem: "Opera toda a infraestrutura GCP de forma automatizada."
        }
    }],

    11: [{
        biblio: "Sato (2014), Cap.7; Vercel & GCP Docs (2024)",
        title: "11. Demonstração Integrada de CI/CD (Vercel + GCP)",
        objetivos: [
            "Demonstrar a esteira híbrida completa de CI/CD.",
            "Validar a publicação síncrona na Vercel e no GCP.",
            "Apresentar a arquitetura final de DevOps do FactoryHub."
        ],
        contexto: "Demonstração final do funcionamento de toda a esteira de entrega contínua integrando Vercel (Frontend) e GCP (Backend).",
        theory: `Arquitetura Híbrida de Entrega Contínua:
• Frontend / Dashboards: Vercel Edge Network (Deploy contínuo via repositório Git).
• APIs / Microsserviços: GCP Cloud Run (Imagens OCI via Artifact Registry).
• Banco de Dados: GCP Cloud SQL PostgreSQL.
• Esteira Unificada: GitHub Actions orquestrando testes e deploys.`,
        code: `architecture = {
    "frontend": "Vercel (Production)",
    "backend": "GCP Cloud Run (Active)",
    "pipeline": "GitHub Actions (Green)"
}
print("Status Final da Infraestrutura DevOps:")
for k, v in architecture.items():
    print(f" -> {k}: {v}")`,
        output: `Status Final da Infraestrutura DevOps:
 -> frontend: Vercel (Production)
 -> backend: GCP Cloud Run (Active)
 -> pipeline: GitHub Actions (Green)`,
        interpretation: "Toda a infraestrutura encontra-se funcional, automatizada e monitorada.",
        desafio: "Simule um commit de alteração e demonstre a atualização síncrona do Frontend e Backend.",
        dicas: "Documente todos os segredos e variáveis do repositório para facilitar a manutenção por futuras turmas.",
        projeto: "Encerramento e validação final da trilha de DevOps do FactoryHub.",
        timeline: {
            antes: "Processos manuais e sem padrão de entrega.",
            durante: "Construção passo a passo da cultura e esteiras DevOps.",
            depois: "Ecossistema totalmente automatizado, seguro e de alta disponibilidade."
        },
        integracao: {
            cienciaDados: "Suporta a publicação contínua dos modelos e gráficos.",
            automacao: "Mantém a conectividade e APIs industriais sempre ativas.",
            nuvem: "Gerencia todo o ciclo de vida da infraestrutura em nuvem."
        }
    }]
};
