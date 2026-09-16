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

## Materiais de Apoio e Tutoriais Práticos

Disponibilizamos tutoriais fundamentais na pasta [materiais/](materiais/):

1. [Padronização de Commits (Conventional Commits)](materiais/padrao_de_commits.md): Guia sobre a convenção de mensagens de commit (`feat`, `fix`, `refactor`, `chore`, Breaking Changes).
2. [Versionamento Semântico (SemVer)](materiais/versionamento_semantico.md): Explicação completa sobre `MAJOR.MINOR.PATCH`, qualificadores pre-release (`alpha`, `beta`, `rc`) e automação.
3. [Guia Passo a Passo Git & GitFlow](materiais/guia_passo_a_passo_gitflow.md): Manual prático de comandos CLI para criar branches de feature, fazer commits, rebase, resolver conflitos de merge, publicar releases e criar tags de versão.
4. [To-Do API: Testes Automatizados e GitHub Actions](materiais/todo-app/README.md): Projeto prático completo com Pytest (testes unitários, de integração e E2E), Quality Gates e workflow de CI no GitHub Actions.

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
- **Prova Teórico-Prática 1 (P1):** Peso 35% (Semanas 01 a 07)
- **Prova Teórico-Prática 2 (P2):** Peso 35% (Semanas 10 a 16)
- **Construção e Execução de Esteira CI/CD Prática:** Peso 30%

---

## Cronograma Semestral e Calendário de Aulas (20 Semanas)

| Sem. | Tipo | Data N2 | Data N2-S | Foco Teórico / Conteúdo | Atividade / Detalhes |
| :---: | :---: | :---: | :---: | :--- | :--- |
| **01** | Aula | **06/Ago** | **05/Ago** | [Fundamentos de DevOps, Cultura CALMS e Fluxo de Valor](aulas/semana_01.ipynb) | Princípios CALMS, fluxo de entrega e eliminação de silos. |
| **02** | Aula | **13/Ago** | **12/Ago** | [Controle de Versão Avançado & Intensivo GitFlow (Parte 1)](aulas/semana_02.ipynb) | Commits atômicos, estratégia GitFlow e gestão de branches. |
| **03** | Aula | **20/Ago** | **19/Ago** | [Reforço do GitFlow & Deploy Automatizado no Vercel](aulas/semana_03.ipynb) | CD inicial com Vercel, Preview Deployments e branches GitFlow. |
| **04** | Aula | **27/Ago** | **26/Ago** | [Automação de Pipelines com GitHub Actions](aulas/semana_04.ipynb) | Workflows YAML, triggers do GitFlow, jobs, runners e secrets. |
| **05** | Aula | **03/Set** | **02/Set** | [Testes Unitários e Pirâmide de Testes](aulas/semana_05.ipynb) | Pirâmide de testes, introdução ao Pytest e testes unitários no Todo App. |
| **06** | Semana de PII | **10/Set** | **09/Set** | Orientação e Acompanhamento do Projeto Integrador (PII) | Alinhamento da esteira de CI e automação para o PII. |
| **07** | Aula | **17/Set** | **16/Set** | [Testes de Integração, E2E e Quality Gates no GitHub Actions](aulas/semana_07.ipynb) | Rotas HTTP, fluxos E2E, Quality Gates no CI e publicação no GitHub Actions. |
| **08** | Avaliação | **24/Set** | **23/Set** | **PROVA 1 INDIVIDUAL** | Avaliação individual cobrindo os conteúdos da Semana 01 até a Semana 07 (Git, CI, Testes e Quality Gates). |
| **09** | Semana de PII | **01/Out** | **30/Set** | Consolidação do Projeto Integrador (PII) | Validação da esteira de CI com testes e Quality Gates no PII. |
| **10** | Aula | **08/Out** | **07/Out** | Containerização de Aplicações com Docker & Multi-Stage | VM vs Containers, Dockerfile otimizado e Multi-Stage builds. |
| **11** | Semana Tec. | **15/Out** | **14/Out** | Palestras e Workshops da Semana de Tecnologia | Atividades institucionais integradas da Semana Tec. |
| **12** | Aula | **22/Out** | **21/Out** | Publicação de Imagens: Docker Hub & GitHub Actions | Build automatizado de imagem, secrets e push no Docker Hub. |
| **13** | Aula | **29/Out** | **28/Out** | Deploy Automatizado na AWS EC2 + Validação e Rollback | Deployment via SSH em EC2, healthcheck probe e auto-rollback. |
| **14** | Semana de PII | **05/Nov** | **04/Nov** | Orientação e Acompanhamento do Projeto Integrador (PII) | Refinamento da infraestrutura IaC e deploy na AWS. |
| **15** | Aula | **12/Nov** | **11/Nov** | Infraestrutura como Código (IaC) com Terraform | Linguagem HCL, estado (tfstate) e provisionamento EC2 na AWS. |
| **16** | Aula / Revisão | **19/Nov** | **18/Nov** | Monitoramento de Aplicações, Logs e Pipeline DevSecOps | Métricas RED, Prometheus, Grafana e esteira DevSecOps integrada. |
| **17** | Avaliação | **26/Nov** | **25/Nov** | **PROVA 2 INDIVIDUAL** & Entrega do Pipeline Final | Avaliação individual cobrindo os conteúdos das Semanas 10 a 16 & Entrega do Projeto. |
| **18** | Semana de PII | **03/Dez** | **02/Dez** | Entrega Geral do PII & Fechamento | Devolutiva dos projetos integradores e fechamento de notas. |
| **19** | Recuperação | **10/Dez** | **09/Dez** | Exame de Recuperação Síncrono | Revisão e realização da avaliação de recuperação. |
| **20** | Fechamento | **17/Dez** | **16/Dez** | Conselho de Classe & Fechamento | Divulgação final das médias e encerramento do semestre. |
