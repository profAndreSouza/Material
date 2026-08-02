# DevOps & Computação em Nuvem
## Ecossistema Integrado de Aprendizagem (Smart N1)

[![Git](https://img.shields.io/badge/git-2.40+-F05032.svg)](https://git-scm.com/)
[![GitHub Actions](https://img.shields.io/badge/github_actions-ci--cd-2088FF.svg)](https://github.com/features/actions)
[![Docker](https://img.shields.io/badge/docker-container-2496ED.svg)](https://www.docker.com/)
[![GCP](https://img.shields.io/badge/gcp-google_cloud-4285F4.svg)](https://cloud.google.com/)
[![Vercel](https://img.shields.io/badge/vercel-deploy-000000.svg)](https://vercel.com/)

Este repositório contém os materiais de estudo, projetos práticos e esteiras de automação para a disciplina unificada de **DevOps & Computação em Nuvem** (100 horas-aula de 50min / 83h20min relógio / 20 Semanas / 2 Avaliações Regimentais).

No modelo do **Ecossistema Integrado de Aprendizagem**, as unidades curriculares oficiais de **Integração e Entrega Contínua - DevOps** (40h-aula) e **Computação em Nuvem** (60h-aula) são tratadas como uma **única disciplina integrada**, responsável pela **Camada de Publicação, Automação, Infraestrutura e Operação** de todo o ecossistema fabril **Smart N1**.

---

## Papel no Ecossistema Integrado

```text
┌──────────────────────────┐      ┌────────────────────────┐      ┌───────────────────────────┐
│   Automação Industrial   │ ---> │    Ciência de Dados    │ ---> │ DevOps & Cloud (Unificada)│
│(Aquisição & Telemetria) │      │(EDA, Análise & Insights│      │ (Infra, CI/CD & Deploy)   │
└──────────────────────────┘      └────────────────────────┘      └───────────────────────────┘
```

- **Automação Industrial**: Produz telemetria em tempo real a partir da planta física Smart N1 (MQTT / Node-RED).
- **Ciência de Dados**: Desenvolve modelos, análises de qualidade de produção e dashboards analíticos sobre os dados da fábrica.
- **DevOps & Computação em Nuvem (Esta Disciplina)**: Transforma a solução desenvolvida pelas demais disciplinas em um produto de software resiliente e disponível na nuvem. Gerencia os repositórios Git, containeriza microserviços (Docker), orquestra o banco de dados gerenciado (Cloud SQL), publica a API (Cloud Run), configura a interface web (Vercel) e estabelece monitoramento (Cloud Operations / Grafana) via pipelines automáticas (GitHub Actions).

---

## Ementas Oficiais Completas (Unidades Curriculares Integradas)

---

### MÓDULO 1: INTEGRAÇÃO E ENTREGA CONTÍNUA - DEVOPS (40h-aula / 33h20min)

#### Descrição
Ao final dessa unidade curricular, o estudante será capaz de aplicar práticas de integração e entrega contínua (CI/CD) no desenvolvimento de software, utilizando ferramentas de automação, versionamento e monitoramento para garantir qualidade e agilidade nos ciclos de entrega. Para isso, serão abordados conteúdos como pipelines de CI/CD, automação de testes, integração com containers e orquestradores, além de boas práticas de DevOps para colaboração entre equipes de desenvolvimento e operações.

#### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas à implementação de práticas de Integração e Entrega Contínua (CI/CD), promovendo a automação de processos de desenvolvimento, testes e deploy, a colaboração entre equipes de desenvolvimento e operações, e a melhoria contínua na qualidade e confiabilidade do software.

#### Capacidades Técnicas
- Aplicar conceitos de Integração Contínua (CI) e Entrega Contínua (CD) em projetos de software.
- Utilizar sistemas de controle de versão para colaboração e rastreabilidade de código.
- Configurar pipelines de automação para build, teste e deploy de aplicações.
- Empregar ferramentas de contêineres e orquestração em processos de entrega contínua.
- Implementar automação de testes para validação de software em diferentes etapas do ciclo de vida.
- Integrar práticas de monitoramento e feedback contínuo para melhorar a qualidade e disponibilidade de sistemas.

#### Capacidades Socioemocionais
- Trabalhar em equipe multidisciplinar para entender requisitos de negócio.
- Comunicar insights de forma clara e visualmente atrativa.
- Demonstrar pensamento analítico e foco em resultados.

#### Conteúdo Programático / Conhecimentos
1. **Fundamentos de DevOps**
   - 1.1. Conceitos e princípios de DevOps
   - 1.2. Cultura colaborativa entre desenvolvimento e operações
   - 1.3. Benefícios e desafios da adoção de DevOps
2. **Integração Contínua (CI)**
   - 2.1. Controle de versão com Git
   - 2.2. Repositórios e branching strategies
   - 2.3. Automação de builds
   - 2.4. Testes automatizados (unitários, integração, regressão)
3. **Entrega Contínua (CD)**
   - 3.1. Pipelines de deploy
   - 3.2. Automação de releases
   - 3.3. Deploy em ambientes de homologação e produção
   - 3.4. Rollback e estratégias de entrega (blue-green, canary, etc.)
4. **Ferramentas de Automação e Orquestração**
   - 4.1. Jenkins, GitLab CI, GitHub Actions (ou equivalente)
   - 4.2. Docker: criação e gerenciamento de containers
   - 4.3. Kubernetes: fundamentos de orquestração de containers
   - 4.4. Integração de pipelines com containers e orquestradores
5. **Monitoramento e Feedback Contínuo**
   - 5.1. Logs e métricas
   - 5.2. Observabilidade (Prometheus, Grafana, etc.)
   - 5.3. Alertas e notificações
   - 5.4. Melhoria contínua a partir de métricas de entrega

---

### MÓDULO 2: COMPUTAÇÃO EM NUVEM (60h-aula / 50h00min)

#### Descrição
Ao final dessa unidade curricular o estudante será capaz de desenvolver aplicações de arquitetura de computação em nuvem, visando a aplicação em ambientes de produção industrial. Para tanto serão abordados os seguintes conteúdos: Computação em Nuvem; Modelos de Serviço; Virtualização de recursos; Segurança de dados em plataforma de Nuvem; Contratos de serviços na nuvem.

#### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas à aplicações de arquitetura de computação em nuvem, visando a aplicação em ambientes de produção industrial.

#### Capacidades Técnicas
- Avaliar as plataformas para publicação/hospedagem em relação ao seu desempenho.
- Definir os requisitos da hospedagem de acordo com os serviços utilizados.
- Criar infraestrutura na nuvem para virtualização de recursos.
- Utilizar técnicas de segurança em computação na nuvem.
- Utilizar serverless computing e micros serviços na nuvem.
- Publicar/hospedar as aplicações tendo em vista a alta disponibilidade e escalabilidade do serviço.
- Publicar as aplicações de banco de dados tendo em vista o desempenho do sistema.

#### Capacidades Socioemocionais
- **Criatividade, originalidade e iniciativa:** Orientar seu comportamento para a consecução de objetivos individuais e coletivos, de modo organizado e esforçado, fazendo escolhas em relação à vida profissional e estimulando a liberdade e a autonomia.
- **Ética:** Apresentar comportamento ético na conduta profissional, vivenciando valores, respeitando princípios, praticando a inclusão e justiça social, respeitando diferenças individuais e valorizando o meio ambiente.
- **Pensamento crítico e inovação:** Expressar-se de modo crítico e com base em evidências claras, ponderando diferentes fatos, ideias, opiniões, visões e perspectivas aplicáveis às atividades sob a sua responsabilidade.

#### Conteúdo Programático / Conhecimentos
1. **Computação em Nuvem**
   - 1.1. Histórico
   - 1.2. Fundamentos (1.2.1. Elasticidade, 1.2.2. Resiliência, 1.2.3. Escalabilidade horizontal, 1.2.4. Escalabilidade vertical)
   - 1.3. Arquitetura da Computação em Nuvem
   - 1.4. Pilares da computação em nuvem (1.4.1. Excelência operacional, 1.4.2. Segurança, 1.4.3. Confiabilidade, 1.4.4. Eficiência de performance, 1.4.5. Otimização de recursos)
   - 1.5. Nuvens (1.5.1. Públicas, 1.5.2. Privadas on-premise, 1.5.3. Híbridas)
   - 1.6. Abrangência das nuvens públicas (1.6.1. Regiões, 1.6.2. Zonas de disponibilidade, 1.6.3. Pontos de presença edge locations)
2. **Modelos de Serviço**
   - 2.1. Infraestrutura como um Serviço (IaaS)
   - 2.2. Plataforma como um Serviço (PaaS)
   - 2.3. Software como um Serviço (SaaS)
3. **Virtualização de recursos**
   - 3.1. Computação (3.1.1. Serverless computing, 3.1.2. Micros serviços, 3.1.3. Instâncias On-Demand, Reservadas, Spot, Hosts dedicados)
   - 3.2. Armazenamento (Clusters)
   - 3.3. Redes
   - 3.4. Banco de dados
   - 3.5. Monitoramento de recursos
   - 3.6. Balanceamento de carga
   - 3.7. Alta disponibilidade e escalabilidade
4. **Segurança de dados em plataforma de Nuvem**
   - 4.1. Benefícios
   - 4.2. Responsabilidades
   - 4.3. Controle de Usuários
   - 4.4. Controle de acesso à rede (ACLs)
   - 4.5. Criptografia utilizada na nuvem
   - 4.6. Monitoramento de log
5. **Contratos de serviços na nuvem**
   - 5.1. Aspectos econômicos
   - 5.2. Economia de Escala
   - 5.3. Estruturas de contratos

---

## Referências Bibliográficas Oficiais

### Referências Básicas (DevOps & Cloud)
1. **SATO, Danilo.** *Devops na prática: entrega de software confiável e automatizada*. São Paulo: Casa do Código, 2014. E-book.
2. **ROMERO, Daniel.** *Containers com docker: do desenvolvimento à produção*. São Paulo: Casa do Código, 2015. E-book.
3. **VITALINO, Jeferson Fernando Noronha; CASTRO, Marcus André Nunes.** *Descomplicando o Docker*. 2. ed. Rio de Janeiro: Brasport, 2018. E-book.
4. **KOLBE JÚNIOR, Armando.** *Computação em nuvem*. São Paulo: Contentus, 2020. E-book (98 p.).
5. **ROSE, César A. F. de.** *O que é esta tal de nuvem e o que pode fazer por você?*. Porto Alegre: EdiPUCRS, 2022. E-book (96 p.).
6. **VERAS, Manoel.** *Computação em nuvem: nova arquitetura de TI*. Rio de Janeiro: Brasport, 2015. E-book (192 p.).

### Referências Complementares (DevOps & Cloud)
1. **SANTOS, Lucas.** *Kubernetes: tudo sobre orquestração de contêineres*. São Paulo: Casa do Código, 2019. E-book.
2. **BOAGLIO, Fernando.** *Jenkins: automatize tudo sem complicações*. São Paulo: Casa do Código, 2016. E-book.
3. **KAMINSKI, Patrick.** *Redmine: gerenciamento flexível de projetos*. São Paulo: Casa do Código, 2019. E-book.
4. **MOLINARI, Leonardo.** *Cloud computing: a inteligência da nuvem e seu novo valor em TI*. São Paulo: Érica, 2018.
5. **MUNIZ, Antonio et al.** *Jornada cloud native: do zero ao avançado somando conceitos e práticas*. Rio de Janeiro: Brasport, 2023. E-book (280 p.).
6. **SACOMANO, José Benedito et al. (org.).** *Indústria 4.0: conceitos e fundamentos*. São Paulo: Blucher, 2018. E-book (183 p.).
7. **TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J.** *Redes de computadores*. 6. ed. São Paulo: Grupo A, 2021. E-book (593 p.).
8. **VERAS, Manoel.** *Arquitetura de nuvem: amazon web services (AWS)*. Rio de Janeiro: Brasport, 2013. E-book (416 p.).

---

## Matriz de Mapeamento Bibliográfico por Encontro Prático

| Encontro | Tema Central (DevOps + Nuvem) | Conhecimentos da Ementa | Referências Básicas | Referências Complementares |
| :---: | :--- | :--- | :--- | :--- |
| **01** | Fundamentos de DevOps, Cultura Dev/Ops & Histórico e Conceitos de Nuvem | DevOps 1.1 a 1.3; Nuvem 1.1 a 1.3 | Sato Cap. 1; Veras (2015) Cap. 1; Rose Cap. 1 | Sacomano et al. Cap. 1; Molinari Cap. 1 |
| **02** | Controle de Versão Avançado com Git (GitFlow) & Os 5 Pilares da Computação em Nuvem | DevOps 2.1, 2.2; Nuvem 1.4 (Pilares) | Sato Cap. 2; Kolbe Jr Cap. 2; Rose Cap. 2 | Kaminski Cap. 1; Veras (2013) Cap. 1 |
| **03** | Integração Contínua (CI) com GitHub Actions & Modelos de Implantação e Zonas GCP | DevOps 2.3, 2.4; Nuvem 1.5, 1.6 (Regiões) | Sato Cap. 3; Veras (2015) Cap. 2, 3 | Boaglio Cap. 1, 2; Tanenbaum et al. Cap. 1 |
| **04** | Containerização com Docker I (Dockerfile & Images) & Modelos de Serviço (IaaS, PaaS, SaaS) | DevOps 4.2; Nuvem 2.1 a 2.3 (Modelos) | Romero Cap. 1, 2; Vitalino & Castro Cap. 1, 2; Kolbe Jr Cap. 3 | Muniz et al. Cap. 1; Molinari Cap. 2 |
| **05** | Containerização com Docker II (Compose & Registry) & Virtualização e Serverless | DevOps 4.2; Nuvem 3.1 (Serverless e Microserviços) | Romero Cap. 3, 4; Vitalino & Castro Cap. 3, 4; Rose Cap. 3 | Muniz et al. Cap. 2; Santos Cap. 1 |
| **06** | Orquestração de Containers (Cloud Run / GKE) & Redes em Nuvem (VPCs e Subredes) | DevOps 4.3, 4.4; Nuvem 3.3 (Redes) | Vitalino & Castro Cap. 5; Kolbe Jr Cap. 4; Veras (2015) Cap. 4 | Santos Cap. 1, 2; Tanenbaum et al. Cap. 4, 5 |
| **07** | Workflows Práticos de CI em GitHub Actions & Armazenamento na Nuvem (Cloud Storage) | DevOps 3.1, 3.2; Nuvem 3.2 (Armazenamento) | Sato Cap. 4; Veras (2015) Cap. 4 | Boaglio Cap. 3; Molinari Cap. 3 |
| **08** | Deploy Contínuo no Vercel & Bancos de Dados Gerenciados (Cloud SQL PostgreSQL) | DevOps 3.3; Nuvem 3.4 (Banco de Dados) | Sato Cap. 5; Rose Cap. 4; Veras (2015) Cap. 5 | Muniz et al. Cap. 4; Veras (2013) Cap. 4 |
| **09** | Deploy de Docker na GCP via CI/CD & Alta Disponibilidade, Escalonamento e Load Balancer | DevOps 3.4; Nuvem 3.6, 3.7 (Escalabilidade) | Romero Cap. 5; Kolbe Jr Cap. 4 | Santos Cap. 3; Rose Cap. 4 |
| **10** | Estratégias de Deploy (Blue-Green / Canary) & Segurança em Nuvem (IAM, Roles & ACLs) | DevOps 3.4; Nuvem 4.1 a 4.6 (Segurança) | Sato Cap. 6; Veras (2015) Cap. 6; Kolbe Jr Cap. 5 | Muniz et al. Cap. 5; Veras (2013) Cap. 5 |
| **11** | Observabilidade de Sistemas (Logs, Prometheus, Grafana) & Monitoramento e Auditoria GCP | DevOps 5.1 a 5.4; Nuvem 3.5, 4.6 (Monitoramento) | Sato Cap. 7; Vitalino & Castro Cap. 6 | Boaglio Cap. 4; Molinari Cap. 5 |

---

## Arquitetura de Implantação na Nuvem (GCP + GitHub + Vercel)

```text
                      [ Desenvolvedor / Equipe ]
                                  │
                                  ▼ Git Push (GitFlow)
                      [ Repositório GitHub ]
                                  │
                                  ▼ Dispara Workflow
                     ┌──────────────────────────┐
                     │     GitHub Actions       │
                     │  (Pipeline de CI/CD)     │
                     └────────────┬─────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         │ Build & Push Image                              │ Deploy Frontend
         ▼                                                 ▼
  [ Docker Hub / GAR ]                                [ Vercel Deployment ]
         │                                                 │
         ▼ Deploy Container                                ▼
  [ GCP Cloud Run ] <============================> [ Aplicação Web / UI ]
  (FastAPI REST / Collector)
         │
         ▼ Conexão Segura (VPC Connector)
  [ GCP Cloud SQL ] (PostgreSQL Gerenciado)
         │
         ▼ Observabilidade
  [ GCP Cloud Operations / Grafana ]
```

---

## Arquitetura Monorepo Padrão do Projeto

Todas as equipes organizam seus componentes seguindo a estrutura padronizada de diretórios:

```text
smartfactory-project/
├── .github/
│   └── workflows/             # Esteiras CI/CD (build.yml, deploy.yml)
├── api/                       # REST API (FastAPI / Python)
├── collector/                 # Serviço de consumo MQTT & gravação no banco
├── database/                  # Scripts SQL (migrations, schemas `telemetry`, `pieces`, `alarms`)
├── dashboard/                 # Configurações e exportações de painéis Grafana
├── docs/                      # Documentação de arquitetura e diagramas
├── notebooks/                 # Cadernos Jupyter de Ciência de Dados
├── frontend/                  # Aplicação Web de Monitoramento (React / Next.js / HTML5)
├── docker/                    # Dockerfiles específicos por serviço
├── docker-compose.yml         # Orquestrador local para ambiente de desenvolvimento
└── README.md                  # Documentação principal da equipe
```

---

## Cronograma Unificado (20 Semanas)

A carga horária semanal é dividida harmonicamente entre conceitos de **DevOps (2h)** e **Computação em Nuvem (3h)**:
- **Turma Quinta (N2)**: Bloco único integrando as 5 aulas na Quinta-feira (18h45 às 22h55).
- **Turma N2-S**: Computação em Nuvem na Terça-feira (3h) e DevOps na Quarta-feira (2h).

> **Nota sobre os Sábados de Reposição:** Os alunos não possuem aulas presenciais aos sábados. As semanas/datas de reposição (22/Ago, 19/Set, 07/Nov, 05/Dez) indicadas na tabela referem-se a **Exercícios para Casa / Atividades Assíncronas (Estudo Dirigido)** disponibilizados no repositório.

| Sem. | Categoria | Tópico DevOps (2h) | Tópico Computação em Nuvem (3h) | Turma Quinta (N2) | Turma N2-S (Ter/Qua) | Atividade EAD / Casa (Sábados de Reposição) |
| :---: | :--- | :--- | :--- | :---: | :---: | :--- |
| **01** | **Encontro 01** | Fundamentos de DevOps & Cultura Dev/Ops | Histórico, Conceitos & Fundamentos de Nuvem | 06/Ago | 04/Set e 05/Set | — |
| **02** | **Encontro 02** | Controle de Versão Avançado com Git (GitFlow) | Os 5 Pilares da Computação em Nuvem | 13/Ago | 11/Set e 12/Set | — |
| **03** | **Encontro 03** | Integração Contínua (CI) & GitHub Actions | Modelos de Implantação, Regiões & Zonas GCP | 20/Ago | 18/Set e 19/Set | — |
| **04** | **Encontro 04** | Containerização com Docker I (Dockerfile & Images) | Modelos de Serviço em Nuvem: IaaS, PaaS e SaaS | 27/Ago | 25/Set e 26/Set | Exercício para Casa 1 *(Ref. Sáb 22/Ago)* |
| **05** | **Encontro 05** | Containerização com Docker II (Docker Compose & Registry) | Virtualização de Computação & Serverless | 03/Set | 01/Set e 02/Set | — |
| **06** | **PII 1** | Semana de PII 1 — Acompanhamento do Repositório | Semana de PII 1 — Arquitetura Cloud | 10/Set | 08/Set e 09/Set | — |
| **07** | **Encontro 06** | Introdução à Orquestração de Containers (GKE / Cloud Run) | Redes em Nuvem (VPCs, Subredes, Firewalls & Rotas) | 17/Set | 15/Set e 16/Set | Exercício para Casa 2 *(Ref. Sáb 19/Set)* |
| **08** | **Avaliação N1** | **Primeira Avaliação Regimental (N1) — Teórico-Prática** | **Primeira Avaliação Regimental (N1)** | **24/Set** | **22/Set e 23/Set** | — |
| **09** | **PII 2** | Semana de PII 2 — Avaliação de Esteiras CI | Semana de PII 2 — Provisionamento de BD | 01/Out | 29/Set e 30/Set | — |
| **10** | **Encontro 07** | Workflows Práticos de CI em `.github/workflows/` | Armazenamento na Nuvem (Cloud Storage Buckets) | 08/Out | 06/Out e 07/Out | — |
| **11** | **Evento** | Semana de Tecnologia (Palestras e Workshops) | Semana de Tecnologia | 15/Out | 14/Out | — |
| **12** | **Encontro 08** | Deploy Contínuo no Vercel via GitHub Actions | Bancos de Dados Gerenciados (Cloud SQL PostgreSQL) | 22/Out | 20/Out e 21/Out | — |
| **13** | **Encontro 09** | Deploy de Docker no GCP Cloud Run via CI/CD | Alta Disponibilidade, Escalonamento & Load Balancer | 29/Out | 27/Out e 28/Out | — |
| **14** | **PII 3** | Semana de PII 3 — Avaliação de Deploy Automatizado | Semana de PII 3 — Testes de Carga | 05/Nov | 03/Nov e 04/Nov | Exercício para Casa 3 *(Ref. Sáb 07/Nov)* |
| **15** | **Encontro 10** | Estratégias de Deploy (Blue-Green / Canary Deploy) | Segurança em Nuvem (IAM, Roles & Service Accounts) | 12/Nov | 10/Nov e 11/Nov | — |
| **16** | **Encontro 11** | Observabilidade de Sistemas (Logs, Traces & Metrics) | Monitoramento e Auditoria (GCP Cloud Operations) | 19/Nov | 17/Nov e 18/Nov | — |
| **17** | **Avaliação N2** | **Segunda Avaliação Regimental (N2) — Apresentação da Esteira CI/CD Completa** | **Segunda Avaliação Regimental (N2)** | **26/Nov** | **24/Nov e 25/Nov** | — |
| **18** | **PII 4** | Semana de PII 4 — Entrega Final e Banca do PII | Semana de PII 4 — Apresentação da Solução Cloud | 03/Dez | 01/Dez e 02/Dez | Exercício para Casa 4 *(Ref. Sáb 05/Dez)* |
| **19** | **Recuperação**| Semana de Recuperação (Avaliações de Recuperação) | Semana de Recuperação | 10/Dez | 08/Dez e 09/Dez | — |
| **20** | **Fechamento** | Fechamento do Semestre e Lançamento de Notas | Fechamento do Semestre | 17/Dez | 15/Dez e 16/Dez | — |

---

## Certificações Práticas: Google Cloud Skills Boost

Como parte integrante do aprendizado de Computação em Nuvem, os alunos realizarão laboratórios práticos com emissão de *Skill Badges* oficiais no **Google Cloud Skills Boost**:

1. **GCP Essentials**: Criação de instâncias Compute Engine, redes VPC e Buckets.
2. **Set Up and Configure a Cloud Environment in Google Cloud**: Gerenciamento de IAM, redes e cotas.
3. **Deploy to Kubernetes in Google Cloud / Cloud Run**: Containerização e publicação Serverless.

---

## Entregáveis Finais de DevOps & Cloud

Ao término do semestre, as equipes entregarão:
1. **Repositório GitHub Configurado**: Branches protegidas com política de Pull Requests e suporte a GitFlow.
2. **Esteira CI/CD Automatizada**: Actions que realizam linting, testes, build da imagem Docker, push para registry e deploy no Cloud Run e Vercel sem intervenção manual.
3. **Ambiente GCP Operacional**: Instância Cloud SQL (PostgreSQL), Cloud Run ativo e monitoramento com alertas configurados.
