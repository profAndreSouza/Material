# ☁️ 🚀 DevOps & Computação em Nuvem
## Ecossistema Integrado de Aprendizagem (Smart N1)

[![Git](https://img.shields.io/badge/git-2.40+-F05032.svg)](https://git-scm.com/)
[![GitHub Actions](https://img.shields.io/badge/github_actions-ci--cd-2088FF.svg)](https://github.com/features/actions)
[![Docker](https://img.shields.io/badge/docker-container-2496ED.svg)](https://www.docker.com/)
[![GCP](https://img.shields.io/badge/gcp-google_cloud-4285F4.svg)](https://cloud.google.com/)
[![Vercel](https://img.shields.io/badge/vercel-deploy-000000.svg)](https://vercel.com/)

Este repositório contém os materiais de estudo, projetos práticos e esteiras de automação para a disciplina unificada de **DevOps & Computação em Nuvem** (80 horas / 20 Semanas / 2 Avaliações Regimentais).

No modelo do **Ecossistema Integrado de Aprendizagem**, as matérias curriculares de DevOps e Computação em Nuvem são tratadas como uma **única disciplina integrada**, responsável pela **Camada de Publicação, Automação, Infraestrutura e Operação** de todo o ecossistema fabril **Smart N1**.

---

## 🏭 Papel no Ecossistema Integrado

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

## 📐 Arquitetura de Implantação na Nuvem (GCP + GitHub + Vercel)

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

## 📁 Arquitetura Monorepo Padrão do Projeto

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

## 📅 Cronograma Unificado (20 Semanas)

A carga horária semanal é dividida harmonicamente entre conceitos de **DevOps (2h)** e **Computação em Nuvem (3h)**:
- **Turma Quinta (N2)**: Bloco único integrando as 5 aulas na Quinta-feira (18h45 às 22h55).
- **Turma N2-S**: Computação em Nuvem na Terça-feira (3h) e DevOps na Quarta-feira (2h).

> ⚠️ **Nota sobre os Sábados de Reposição:** Os alunos não possuem aulas presenciais aos sábados. As semanas/datas de reposição (**22/Ago**, **19/Set**, **07/Nov**, **05/Dez**) indicadas na tabela referem-se a **Exercícios para Casa / Atividades Assíncronas (Estudo Dirigido)** disponibilizados no repositório.

| Sem. | Categoria | Tópico DevOps (2h) | Tópico Computação em Nuvem (3h) | Turma Quinta (N2) | Turma N2-S (Ter/Qua) | Atividade EAD / Casa (Sábados de Reposição) |
| :---: | :--- | :--- | :--- | :---: | :---: | :--- |
| **01** | **Encontro 01** | Fundamentos de DevOps & Cultura Dev/Ops | Histórico, Conceitos & Fundamentos de Nuvem | 06/Ago | 04/Set e 05/Set | — |
| **02** | **Encontro 02** | Controle de Versão Avançado com Git (GitFlow) | Os 5 Pilares da Computação em Nuvem | 13/Ago | 11/Set e 12/Set | — |
| **03** | **Encontro 03** | Integração Contínua (CI) & GitHub Actions | Modelos de Implantação, Regiões & Zonas GCP | 20/Ago | 18/Set e 19/Set | — |
| **04** | **Encontro 04** | Containerização com Docker I (Dockerfile & Images) | Modelos de Serviço em Nuvem: IaaS, PaaS e SaaS | 27/Ago | 25/Set e 26/Set | 🏠 **Exercício para Casa 1** *(Ref. Sáb 22/Ago)* |
| **05** | **Encontro 05** | Containerização com Docker II (Docker Compose & Registry) | Virtualização de Computação & Serverless | 03/Set | 01/Set e 02/Set | — |
| **06** | **PII 1** | Semana de PII 1 — Acompanhamento do Repositório | Semana de PII 1 — Arquitetura Cloud | 10/Set | 08/Set e 09/Set | — |
| **07** | **Encontro 06** | Introdução à Orquestração de Containers (GKE / Cloud Run) | Redes em Nuvem (VPCs, Subredes, Firewalls & Rotas) | 17/Set | 15/Set e 16/Set | 🏠 **Exercício para Casa 2** *(Ref. Sáb 19/Set)* |
| **08** | **Avaliação N1** | **Primeira Avaliação Regimental (N1) — Teórico-Prática** | **Primeira Avaliação Regimental (N1)** | **24/Set** | **22/Set e 23/Set** | — |
| **09** | **PII 2** | Semana de PII 2 — Avaliação de Esteiras CI | Semana de PII 2 — Provisionamento de BD | 01/Out | 29/Set e 30/Set | — |
| **10** | **Encontro 07** | Workflows Práticos de CI em `.github/workflows/` | Armazenamento na Nuvem (Cloud Storage Buckets) | 08/Out | 06/Out e 07/Out | — |
| **11** | **Evento** | Semana de Tecnologia (Palestras e Workshops) | Semana de Tecnologia | 15/Out | 14/Out | — |
| **12** | **Encontro 08** | Deploy Contínuo no Vercel via GitHub Actions | Bancos de Dados Gerenciados (Cloud SQL PostgreSQL) | 22/Out | 20/Out e 21/Out | — |
| **13** | **Encontro 09** | Deploy de Docker no GCP Cloud Run via CI/CD | Alta Disponibilidade, Escalonamento & Load Balancer | 29/Out | 27/Out e 28/Out | — |
| **14** | **PII 3** | Semana de PII 3 — Avaliação de Deploy Automatizado | Semana de PII 3 — Testes de Carga | 05/Nov | 03/Nov e 04/Nov | 🏠 **Exercício para Casa 3** *(Ref. Sáb 07/Nov)* |
| **15** | **Encontro 10** | Estratégias de Deploy (Blue-Green / Canary Deploy) | Segurança em Nuvem (IAM, Roles & Service Accounts) | 12/Nov | 10/Nov e 11/Nov | — |
| **16** | **Encontro 11** | Observabilidade de Sistemas (Logs, Traces & Metrics) | Monitoramento e Auditoria (GCP Cloud Operations) | 19/Nov | 17/Nov e 18/Nov | — |
| **17** | **Avaliação N2** | **Segunda Avaliação Regimental (N2) — Apresentação da Esteira CI/CD Completa** | **Segunda Avaliação Regimental (N2)** | **26/Nov** | **24/Nov e 25/Nov** | — |
| **18** | **PII 4** | Semana de PII 4 — Entrega Final e Banca do PII | Semana de PII 4 — Apresentação da Solução Cloud | 03/Dez | 01/Dez e 02/Dez | 🏠 **Exercício para Casa 4** *(Ref. Sáb 05/Dez)* |
| **19** | **Recuperação**| Semana de Recuperação (Avaliações de Recuperação) | Semana de Recuperação | 10/Dez | 08/Dez e 09/Dez | — |
| **20** | **Fechamento** | Fechamento do Semestre e Lançamento de Notas | Fechamento do Semestre | 17/Dez | 15/Dez e 16/Dez | — |

---

## 🏅 Certificações Práticas: Google Cloud Skills Boost

Como parte integrante do aprendizado de Computação em Nuvem, os alunos realizarão laboratórios práticos com emissão de *Skill Badges* oficiais no **Google Cloud Skills Boost**:

1. **GCP Essentials**: Criação de instâncias Compute Engine, redes VPC e Buckets.
2. **Set Up and Configure a Cloud Environment in Google Cloud**: Gerenciamento de IAM, redes e cotas.
3. **Deploy to Kubernetes in Google Cloud / Cloud Run**: Containerização e publicação Serverless.

---

## 📦 Entregáveis Finais de DevOps & Cloud

Ao término do semestre, as equipes entregarão:
1. **Repositório GitHub Configurado**: Branches protegidas com política de Pull Requests e suporte a GitFlow.
2. **Esteira CI/CD Automatizada**: Actions que realizam linting, testes, build da imagem Docker, push para registry e deploy no Cloud Run e Vercel sem intervenção manual.
3. **Ambiente GCP Operacional**: Instância Cloud SQL (PostgreSQL), Cloud Run ativo e monitoramento com alertas configurados.

---

## 📚 Referências Bibliográficas

1. **HUMBLE, Jez; FARLEY, David.** *Entrega Contínua: Como Automatizar o Build, os Testes e a Implantação de Software*. 1. ed. Porto Alegre: Bookman, 2014.
2. **KIM, Gene et al.** *Manual de DevOps: Como Obter Agilidade, Segurança e Confiabilidade em Nível Mundial*. 1. ed. São Paulo: Alta Books, 2018.
3. **MONTGOMERY, Douglas C.** *Cloud Computing: Concepts, Technology & Architecture*. 2nd ed. Pearson, 2023.
4. **TANENBAUM, Andrew S.; WETHERALL, David.** *Redes de Computadores*. 5. ed. São Paulo: Pearson, 2011.
