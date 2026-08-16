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

| Sem. | Tipo | Datas | Foco Teórico / Conteúdo | Atividade / Detalhes |
| :---: | :---: | :---: | :--- | :--- |
| **01** | Aula | **03/Ago a 07/Ago** | [Fundamentos de DevOps e Cultura de Colaboração Dev/Ops](aulas/semana_01.md) | Princípios CALMS, fluxo de entrega e eliminação de silos. |
| **02** | Aula | **10/Ago a 14/Ago** | [Controle de Versão Avançado com Git (GitFlow e Pull Requests)](aulas/semana_02.md) | Commits atômicos, estratégia GitFlow e gestão de branches. |
| **03** | Aula | **17/Ago a 21/Ago** | [Automação de Builds e Integração Contínua (CI) com GitHub Actions](aulas/semana_03.md) | Sintaxe YAML de workflows, jobs, runners e cache de dependências. |
| **04** | Exercício de Fixação | **22/Ago (Sáb)** | Atividade Prática / Exercício de Fixação I | Criação de pipelines de CI no GitHub Actions. |
| **05** | Aula | **24/Ago a 28/Ago** | [Containerização de Aplicações com Docker (Dockerfile Multi-Stage)](aulas/semana_04.md) | Sintaxe de Dockerfile, imagens otimizadas e multi-stage builds. |
| **06** | Aula | **31/Ago a 04/Set** | [Orquestração Local de Microserviços com Docker Compose](aulas/semana_05.md) | Arquivo docker-compose.yml, volumes, redes e dependências. |
| **07** | Semana de PII | **08/Set a 11/Set** | Orientação e Acompanhamento do Projeto Integrador (PII) | Alinhamento dos arquivos Docker e CI/CD para o PII. |
| **08** | Aula | **14/Set a 18/Set** | [Automação de Testes no Pipeline de CI (Pytest & Cobertura)](aulas/semana_07.md) | Suítes de testes unitários/integrados e relatórios de cobertura. |
| **09** | Exercício de Fixação | **19/Set (Sáb)** | Atividade Prática / Exercício de Fixação II | Execução de testes unitários automatizados no pipeline CI. |
| **10** | Avaliação | **21/Set a 25/Set** | **PROVA 1 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 01 a 05. |
| **11** | Semana de PII | **28/Set a 02/Out** | Consolidação do Projeto Integrador (PII) | Validação dos arquivos de orquestração Docker Compose. |
| **12** | Aula | **05/Out a 09/Out** | [Estratégias de Entrega Contínua (CD) e Deploy Automatizado](aulas/semana_08.md) | Pipelines de CD, estratégias Blue-Green/Canary e rollback. |
| **13** | Semana de Tecnologia | **14/Out a 16/Out** | Palestras e Workshops da Semana de Tecnologia | Atividades institucionais integradas da Semana Tec. |
| **14** | Aula | **19/Out a 23/Out** | [Infraestrutura como Código (IaC) com Terraform](aulas/semana_09.md) | Linguagem HCL, estado (tfstate) e provisionamento declarativo. |
| **15** | Exercício de Fixação | **24/Out (Sáb)** | Atividade Prática / Exercício de Fixação III | Escrita de arquivos Terraform para infraestrutura. |
| **16** | Aula | **26/Out a 30/Out** | [Monitoramento de Aplicações, Logs e Observabilidade](aulas/semana_10.md) | Métricas RED, Prometheus, Grafana e centralização de logs. |
| **17** | Semana de PII | **03/Nov a 06/Nov** | Orientação e Acompanhamento do Projeto Integrador (PII) | Refinamento da esteira de CD e deploy do PII. |
| **18** | Exercício de Fixação | **07/Nov (Sáb)** | Atividade Prática / Exercício de Fixação IV | Instrumentação de métricas da aplicação com Prometheus. |
| **19** | Aula | **09/Nov a 13/Nov** | [Pipeline de CI/CD Completo, Segurança (SAST) e Deploy Final](aulas/semana_11.md) | Análise de código estática, scan de vulnerabilidades e deploy. |
| **20** | Aula | **16/Nov a 19/Nov** | Consolidação Técnica e Revisão de Pipelines CI/CD | Revisão de automação, containerização e preparação para P2. |
| **21** | Avaliação | **23/Nov a 27/Nov** | **PROVA 2 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 07 a 11 & Entrega do Projeto. |
| **22** | Semana de PII | **30/Nov a 04/Dez** | Entrega Geral do PII & Fechamento | Devolutiva dos projetos integradores e fechamento de notas. |
| **23** | Congresso UniSENAI-SP | **05/Dez (Sáb)** | Congresso UniSENAI-SP | Apresentação dos melhores trabalhos no Congresso UniSENAI-SP. |
| **24** | Recuperação | **07/Dez a 11/Dez** | Exame de Recuperação Síncrono | Revisão e realização da avaliação de recuperação. |
| **25** | Fechamento | **14/Dez a 18/Dez** | Conselho de Classe & Fechamento | Divulgação final das médias e encerramento do semestre. |
