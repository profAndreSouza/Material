# Integração e Entrega Contínua - DevOps

Este repositório contém o plano de ensino, ementa, cronograma semestral detalhado, referências bibliográficas e diretrizes das atividades práticas para a unidade curricular de **Integração e Entrega Contínua - DevOps**.

---

## Ementa da Unidade Curricular

**Carga Horária:** 40 aulas (33h20min relógio / 20 Semanas)

### Descrição
Ao final dessa unidade curricular, o estudante será capaz de aplicar práticas de integração e entrega contínua (CI/CD) no desenvolvimento de software, utilizando ferramentas de automação, versionamento, containerização e monitoramento para garantir qualidade, segurança e agilidade nos ciclos de entrega da plataforma **FactoryHub**.

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas à implementação de práticas de Integração e Entrega Contínua (CI/CD), promovendo a automação de processos de desenvolvimento, testes e deploy, a colaboração Dev/Ops e a melhoria contínua na qualidade do software.

### Capacidades Técnicas
- Aplicar conceitos de Integração Contínua (CI) e Entrega Contínua (CD) em projetos de software.
- Utilizar sistemas de controle de versão (Git/GitHub) para colaboração e rastreabilidade.
- Configurar pipelines de automação para build, teste e deploy com GitHub Actions.
- Empregar ferramentas de contêineres (Docker) e orquestração em processos de entrega contínua.
- Implementar automação de testes unitários e de integração para validação de software.
- Integrar práticas de monitoramento, logs e observabilidade para alta disponibilidade.

### Capacidades Socioemocionais
- Trabalhar em equipe multidisciplinar para entender requisitos de negócio e operação.
- Comunicar insights técnicos de forma clara e visualmente atrativa.
- Demonstrar pensamento analítico, atitude proativa e foco em resultados confiáveis.

### Conteúdo Programático (Conhecimentos)
1. **Fundamentos de DevOps:**
   - Princípios CALMS, cultura de colaboração Dev/Ops e gestão do fluxo de valor.
2. **Integração Contínua (CI):**
   - Controle de versão com Git, ramificação (GitFlow, Trunk-Based) e Pull Requests.
   - Automação de builds e execução de suítes de testes unitários/integrados.
3. **Entrega Contínua (CD):**
   - Pipelines de deploy automatizados e estratégias de entrega (Blue-Green, Canary, Rolling).
4. **Automação e Orquestração:**
   - Pipelines CI/CD com GitHub Actions.
   - Containerização com Docker (Dockerfile multi-stage) e Docker Compose.
   - Infraestrutura como Código (IaC) com Terraform.
5. **Monitoramento e Observabilidade:**
   - Métricas de aplicação, observabilidade (Prometheus/Grafana) e análise de segurança de código (SAST/Trivy).

---

## Referências Bibliográficas

### Básicas
1. **SATO, Danilo.** *Devops na prática: entrega de software confiável e automatizada*. São Paulo: Casa do Código, 2014. E-book.
2. **ROMERO, Daniel.** *Containers com docker: do desenvolvimento à produção*. São Paulo: Casa do Código, 2015. E-book.
3. **VITALINO, Jeferson Fernando Noronha; CASTRO, Marcus André Nunes.** *Descomplicando o Docker*. 2. ed. Rio de Janeiro: Brasport, 2018. E-book.

### Complementares
1. **SANTOS, Lucas.** *Kubernetes: tudo sobre orquestração de contêineres*. São Paulo: Casa do Código, 2019. E-book.
2. **BOAGLIO, Fernando.** *Jenkins: automatize tudo sem complicações*. São Paulo: Casa do Código, 2016. E-book.
3. **KAMINSKI, Patrick.** *Redmine: gerenciamento flexível de projetos*. São Paulo: Casa do Código, 2019. E-book.

---

## Critérios de Avaliação e Composição de Nota

A nota final da disciplina será composta por:
- **Prova Teórico-Prática 1 (P1):** Peso 30% (Semanas 01 a 05)
- **Prova Teórico-Prática 2 (P2):** Peso 30% (Semanas 06 a 10)
- **Construção e Execução de Esteira CI/CD Prática:** Peso 40%

---

## Cronograma Semestral e Calendário de Aulas

| Sem. | Tipo | Foco Teórico & Prático | Arquivo da Aula |
| :---: | :---: | :--- | :--- |
| **01** | Aula | Fundamentos de DevOps e Cultura de Colaboração Dev/Ops | [semana_01.md](aulas/semana_01.md) |
| **02** | Aula | Controle de Versão Avançado com Git (GitFlow e Pull Requests) | [semana_02.md](aulas/semana_02.md) |
| **03** | Aula | Automação de Builds e Integração Contínua (CI) com GitHub Actions | [semana_03.md](aulas/semana_03.md) |
| **04** | Aula | Containerização de Aplicações com Docker (Dockerfile Multi-Stage) | [semana_04.md](aulas/semana_04.md) |
| **05** | Aula | Orquestração Local de Microserviços com Docker Compose | [semana_05.md](aulas/semana_05.md) |
| **06** | Avaliação | **PROVA 1 INDIVIDUAL** & Entrega das Esteiras CI 1 a 5 | - |
| **07** | Aula | Automação de Testes no Pipeline de CI (Pytest & Cobertura) | [semana_07.md](aulas/semana_07.md) |
| **08** | Aula | Estratégias de Entrega Contínua (CD) e Deploy Automatizado | [semana_08.md](aulas/semana_08.md) |
| **09** | Aula | Infraestrutura como Código (IaC) com Terraform | [semana_09.md](aulas/semana_09.md) |
| **10** | Aula | Monitoramento de Aplicações, Logs e Observabilidade | [semana_10.md](aulas/semana_10.md) |
| **11** | Aula | Pipeline de CI/CD Completo, Segurança (SAST) e Deploy Final | [semana_11.md](aulas/semana_11.md) |
| **12** | Avaliação | **PROVA 2 INDIVIDUAL** & Apresentação do Pipeline DevOps Final | - |
