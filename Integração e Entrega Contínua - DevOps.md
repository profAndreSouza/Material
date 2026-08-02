# Integração e Entrega Contínua — DevOps
## Ecossistema Integrado de Aprendizagem (Smart N1)

[![Git](https://img.shields.io/badge/git-2.40+-F05032.svg)](https://git-scm.com/)
[![GitHub Actions](https://img.shields.io/badge/github_actions-ci--cd-2088FF.svg)](https://github.com/features/actions)
[![Docker](https://img.shields.io/badge/docker-container-2496ED.svg)](https://www.docker.com/)

Este repositório contém os materiais de estudo e orientações práticas para a unidade curricular de **Integração e Entrega Contínua - DevOps** (40 horas-aula de 50min / 33h20min relógio / 20 Semanas / 2 Avaliações Regimentais).

No modelo do **Ecossistema Integrado de Aprendizagem**, DevOps atua em sinergia com **Automação Industrial**, **Ciência de Dados** e **Computação em Nuvem**, sendo responsável pela **automação de esteiras CI/CD, testes, containerização e qualidade de software** da planta **Smart N1**.

---

## Papel no Ecossistema Integrado

```text
┌──────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│   Automação Industrial   │ ---> │    Ciência de Dados    │ ---> │        DevOps          │ ---> │  Computação em Nuvem   │
│(Aquisição & Telemetria) │      │(EDA, Análise & Insights│      │ (CI/CD & Container)    │      │  (Deploy & Operação)   │
└──────────────────────────┘      └────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

- **Automação Industrial**: Produz telemetria em tempo real a partir da planta física Smart N1 (MQTT / Node-RED).
- **Ciência de Dados**: Desenvolve modelos, análises de qualidade de produção e dashboards analíticos.
- **DevOps (Esta Disciplina)**: Automa o ciclo de desenvolvimento e integração de software. Versiona o código em repositórios Git, containeriza microserviços com Docker e constrói esteiras automatizadas de integração e entrega contínua com GitHub Actions.
- **Computação em Nuvem**: Hospeda a infraestrutura virtualizada, bancos de dados gerenciados e serviços serverless em ambiente de nuvem pública (GCP).

---

## Ementa Oficial Completa (Unidade Curricular)

### Descrição
Ao final dessa unidade curricular, o estudante será capaz de aplicar práticas de integração e entrega contínua (CI/CD) no desenvolvimento de software, utilizando ferramentas de automação, versionamento e monitoramento para garantir qualidade e agilidade nos ciclos de entrega. Para isso, serão abordados conteúdos como pipelines de CI/CD, automação de testes, integração com containers e orquestradores, além de boas práticas de DevOps para colaboração entre equipes de desenvolvimento e operações.

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas à implementação de práticas de Integração e Entrega Contínua (CI/CD), promovendo a automação de processos de desenvolvimento, testes e deploy, a colaboração entre equipes de desenvolvimento e operações, e a melhoria contínua na qualidade e confiabilidade do software.

### Capacidades Técnicas
- Aplicar conceitos de Integração Contínua (CI) e Entrega Contínua (CD) em projetos de software.
- Utilizar sistemas de controle de versão para colaboração e rastreabilidade de código.
- Configurar pipelines de automação para build, teste e deploy de aplicações.
- Empregar ferramentas de contêineres e orquestração em processos de entrega contínua.
- Implementar automação de testes para validação de software em diferentes etapas do ciclo de vida.
- Integrar práticas de monitoramento e feedback contínuo para melhorar a qualidade e disponibilidade de sistemas.

### Capacidades Socioemocionais
- Trabalhar em equipe multidisciplinar para entender requisitos de negócio.
- Comunicar insights de forma clara e visualmente atrativa.
- Demonstrar pensamento analítico e foco em resultados.

### Conteúdo Programático / Conhecimentos
1. **Fundamentos de DevOps**
   - 1.1. Conceitos e princípios de DevOps
   - 1.2. Cultura colaborativa entre desenvolvimento e operações
   - 1.3. Benefícios e desafios da adoção de DevOps
2. **Integração Contínua (CI)**
   - 2.1. Controle de versão com Git
   - 2.2. Repositórios e estratégias de ramificação (branching)
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

## Referências Bibliográficas Oficiais

### Referências Básicas
1. **SATO, Danilo.** *Devops na prática: entrega de software confiável e automatizada*. São Paulo: Casa do Código, 2014. E-book.
2. **ROMERO, Daniel.** *Containers com docker: do desenvolvimento à produção*. São Paulo: Casa do Código, 2015. E-book.
3. **VITALINO, Jeferson Fernando Noronha; CASTRO, Marcus André Nunes.** *Descomplicando o Docker*. 2. ed. Rio de Janeiro: Brasport, 2018. E-book.

### Referências Complementares
1. **SANTOS, Lucas.** *Kubernetes: tudo sobre orquestração de contêineres*. São Paulo: Casa do Código, 2019. E-book.
2. **BOAGLIO, Fernando.** *Jenkins: automatize tudo sem complicações*. São Paulo: Casa do Código, 2016. E-book.
3. **KAMINSKI, Patrick.** *Redmine: gerenciamento flexível de projetos*. São Paulo: Casa do Código, 2019. E-book.

---

## Matriz de Mapeamento Bibliográfico por Encontro Prático

| Encontro | Tema Central | Conhecimentos da Ementa | Referências Básicas | Referências Complementares |
| :---: | :--- | :--- | :--- | :--- |
| **01** | Fundamentos de DevOps & Cultura de Colaboração Dev/Ops | 1.1 a 1.3 | Sato Cap. 1 | Kaminski Cap. 1 |
| **02** | Controle de Versão com Git (Commits, Branches e Pull Requests) | 2.1, 2.2 | Sato Cap. 2 | Kaminski Cap. 2 |
| **03** | Automação de Builds & Integração Contínua (CI) com GitHub Actions | 2.3, 2.4 | Sato Cap. 3 | Boaglio Cap. 1, 2 |
| **04** | Containerização de Aplicações I (Dockerfile & Construção de Imagens) | 4.2 | Romero Cap. 1, 2; Vitalino & Castro Cap. 1, 2 | Santos Cap. 1 |
| **05** | Containerização de Aplicações II (Docker Compose & Registries) | 4.2 | Romero Cap. 3, 4; Vitalino & Castro Cap. 3, 4 | Santos Cap. 2 |
| **06** | Introdução à Orquestração de Containers (Kubernetes / Cloud Run) | 4.3, 4.4 | Vitalino & Castro Cap. 5 | Santos Cap. 3 |
| **07** | Construção de Pipelines CI/CD com GitHub Actions (`.github/workflows/`) | 3.1, 3.2 | Sato Cap. 4 | Boaglio Cap. 3 |
| **08** | Automação de Releases & Deploy em Ambientes de Homologação | 3.3 | Sato Cap. 5 | Boaglio Cap. 4 |
| **09** | Estratégias de Deploy Avançadas (Blue-Green & Rollback Automatizado) | 3.4 | Sato Cap. 6; Romero Cap. 5 | Santos Cap. 4 |
| **10** | Monitoramento de Logs, Métricas e Alerta Contínuo | 5.1, 5.3 | Vitalino & Castro Cap. 6 | Boaglio Cap. 5 |
| **11** | Observabilidade e Feedback Contínuo (Prometheus, Grafana & DORA Metrics) | 5.2, 5.4 | Sato Cap. 7 | Boaglio Cap. 6 |
