# Computação em Nuvem

Este repositório contém o plano de ensino, ementa, cronograma semestral detalhado, referências bibliográficas e diretrizes das atividades práticas para a unidade curricular de **Computação em Nuvem**, focada integralmente na plataforma **Amazon Web Services (AWS)** utilizando o **AWS Academy Learner Lab**.

---

## Ementa da Unidade Curricular

**Carga Horária:** 60 aulas (50h00min relógio / 20 Semanas)

### Descrição
Ao final desta unidade curricular, o estudante será capaz de arquitetar, provisionar e gerenciar infraestruturas e aplicações em nuvem na AWS, com foco em ambientes de automação industrial (Indústria 4.0). Os tópicos abordam virtualização (EC2, Docker), redes isoladas (VPC), armazenamento (S3), controle de acesso (IAM), arquitetura serverless (Lambda, API Gateway, DynamoDB), observabilidade/IoT, pipelines de CI/CD (GitHub Actions, Docker Hub) e Inteligência Artificial na nuvem (AWS SageMaker).

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas a arquiteturas de nuvem na AWS, garantindo alta disponibilidade, escalabilidade, segurança e integração contínua para sustentação da infraestrutura fabril da **Smart N1**.

### Capacidades Técnicas
- Avaliar e utilizar a plataforma AWS (AWS Academy Learner Lab) para hospedagem de soluções industriais.
- Criar e gerenciar máquinas virtuais (EC2) e conteinerização (Docker) na nuvem.
- Estruturar redes virtuais privadas (VPC), subredes, tabelas de roteamento e regras de segurança (Security Groups).
- Configurar armazenamentos de objetos (Amazon S3) com controle de acesso granular via IAM Roles (`LabRole`).
- Implementar arquiteturas serverless com AWS Lambda, API Gateway e bancos de dados NoSQL (Amazon DynamoDB).
- Desenvolver pipelines automatizadas de integração e entrega contínuas (CI/CD) integrando GitHub Actions, Docker Hub e AWS.
- Treinar e implantar modelos de Machine Learning (AWS SageMaker) baseados em dados de sensores industriais.

### Capacidades Socioemocionais
- **Criatividade, originalidade e iniciativa:** Orientar o comportamento para atingir objetivos organizacionais de modo autônomo.
- **Ética:** Apresentar conduta ética na gestão de dados e conformidade regulatória.
- **Pensamento crítico e inovação:** Expressar-se de modo fundamentado para tomada de decisões arquiteturais em nuvem.

### Conteúdo Programático (Conhecimentos)
1. **Fundamentos de Nuvem na AWS:**
   - Conceitos de elasticidade, resiliência e alta disponibilidade.
   - Infraestrutura global AWS (Regiões e Zonas de Disponibilidade).
   - Uso do AWS Academy Learner Lab Sandbox e gestão de credenciais.
2. **Virtualização e Armazenamento (IaaS & Storage):**
   - Instâncias Amazon EC2 Linux, pares de chaves SSH e Security Groups.
   - Conteinerização com Docker e hospedagem de aplicações industriais (Node-RED, aplicações Web).
   - Armazenamento de Objetos (Amazon S3) e integração com IAM Roles (`LabRole`).
3. **Redes Virtuais (VPC) e Segurança (IAM):**
   - Redes virtuais isoladas (Amazon VPC), subredes públicas/privadas, Internet Gateway e Route Tables.
   - Modelo de responsabilidade compartilhada e controle de acesso com AWS IAM.
4. **Telemetria IoT, Serverless e Bancos de Dados Gerenciados:**
   - Ingestão de dados de automação com AWS IoT Core, InfluxDB e dashboards Grafana.
   - Serverless Computing com AWS Lambda e API Gateway.
   - Banco de dados NoSQL gerenciado (Amazon DynamoDB).
   - Infraestrutura como Código (IaC) com AWS CLI e AWS SAM (Serverless Application Model).
5. **DevOps, Pipelines e Machine Learning na Nuvem:**
   - Esteira de CI/CD automatizada com GitHub Actions e publicação no Docker Hub.
   - Deploy automatizado de aplicações na AWS.
   - Aprendizado de máquina na nuvem com AWS SageMaker (manutenção preditiva e detecção de anomalias fabris).

---

## Referências Bibliográficas

### Básicas
1. **KOLBE JÚNIOR, Armando.** *Computação em nuvem*. São Paulo: Contentus, 2020. E-book (98 p.).
2. **ROSE, César A. F. de.** *O que é esta tal de nuvem e o que pode fazer por você?*. Porto Alegre: EdiPUCRS, 2022. E-book (96 p.).
3. **VERAS, Manoel.** *Arquitetura de nuvem: amazon web services (AWS)*. Rio de Janeiro: Brasport, 2013. E-book (416 p.).

### Complementares
1. **MOLINARI, Leonardo.** *Cloud computing: a inteligência da nuvem e seu novo valor em TI*. São Paulo: Érica, 2018.
2. **MUNIZ, Antonio et al.** *Jornada cloud native: do zero ao avançado somando conceitos e práticas*. Rio de Janeiro: Brasport, 2023. E-book (280 p.).
3. **SACOMANO, José Benedito et al. (org.).** *Indústria 4.0: conceitos e fundamentos*. São Paulo: Blucher, 2018. E-book (183 p.).
4. **VERAS, Manoel.** *Computação em nuvem: nova arquitetura de TI*. Rio de Janeiro: Brasport, 2015. E-book (192 p.).

---

## Critérios de Avaliação e Composição de Nota

A nota final da disciplina será composta por:
- **Prova Teórico-Prática 1 (P1):** Peso 30% (Semanas 01 a 07)
- **Prova Teórico-Prática 2 (P2) & Defesa da Atividade Integrada:** Peso 30% (Semanas 12 a 17)
- **Projetos Práticos de Laboratório no AWS Learner Lab:** Peso 40%

---

## Cronograma Semestral e Calendário de Aulas (20 Semanas)

| Sem. | Tipo | Data N2 | Data N2-S | Foco Teórico / Conteúdo | Atividade / Projeto Prático AWS |
| :---: | :---: | :---: | :---: | :--- | :--- |
| **01** | Aula | **06/Ago** | **04/Ago** | [Computação em Nuvem na Indústria 4.0 e Modelos de Serviço](aulas/semana_01.md) | Pilares da nuvem, elasticidade, IaaS, PaaS, SaaS e visão das Big Techs. |
| **02** | Aula | **13/Ago** | **11/Ago** | [Infraestrutura AWS e Ambientes de Laboratório](aulas/semana_02.md) | Regiões, Zonas de Disponibilidade e introdução ao AWS Learner Lab Sandbox. |
| **03** | Aula | **20/Ago** | **18/Ago** | [Máquinas Virtuais (EC2) e Conteinerização com Docker](aulas/semana_03.md) | **Projetos 01 & 04:** EC2 Linux, SSH, Security Groups e Hello Web em Docker. |
| **04** | Aula | **27/Ago** | **25/Ago** | [Conteinerização de Aplicações de Automação Industrial](aulas/semana_04.md) | **Projeto 02:** Deploy de servidor Node-RED em Docker na instâncias EC2. |
| **05** | Aula | **03/Set** | **01/Set** | [Armazenamento de Objetos (S3) e Controle de Acesso IAM](aulas/semana_05.md) | **Projeto 03:** Amazon S3, permissões IAM e uso da `LabRole` na EC2. |
| **06** | PII | **10/Set** | **08/Set** | Orientação e Acompanhamento do Projeto Integrador (PII) | Alinhamento da arquitetura de nuvem para sustentação do PII. |
| **07** | Aula | **17/Set** | **15/Set** | [Redes Virtuais Privadas (Amazon VPC) e Roteamento](aulas/semana_07.md) | **Projeto 05:** VPC Only (Subredes públicas/privadas, IGW e Route Tables). |
| **08** | Eval | **24/Set** | **22/Set** | **PROVA 1 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 01 a 07. |
| **09** | PII | **01/Out** | **29/Set** | Consolidação do Projeto Integrador (PII) | Validação da arquitetura de rede e armazenamento do PII. |
| **10** | Aula | **08/Out** | **06/Out** | [Telemetria IoT Industrial e Dashboards de Observabilidade](aulas/semana_10.md) | **Projeto 06:** AWS IoT Core, InfluxDB e dashboards em tempo real no Grafana. |
| **11** | Tec | **15/Out** | **19/Set (Sáb)** | Palestras e Workshops da Semana de Tecnologia | Atividades institucionais integradas da Semana Tec. |
| **12** | Aula | **22/Out** | **20/Out** | [Computação Serverless e Banco de Dados NoSQL](aulas/semana_12.md) | **Projeto 07:** API Gateway, AWS Lambda e Amazon DynamoDB via `LabRole`. |
| **13** | Aula | **29/Out** | **27/Out** | [Infraestrutura como Código (IaC) para Serverless](aulas/semana_13.md) | **Projeto 09:** Automação com AWS CLI e AWS SAM (Serverless Application Model). |
| **14** | Aula | **05/Nov** | **03/Nov** | [Atividade Integrada 1: Coleta de Dados Fabris e Ingestão Cloud](aulas/semana_14.md) | Captura de telemetria da planta (Node-RED / MQTT) e escrita no S3/DynamoDB. |
| **15** | Aula | **12/Nov** | **10/Nov** | [Atividade Integrada 2: Pipelines CI/CD, Docker Hub e Deploy Nuvem](aulas/semana_15.md) | Esteira automatizada (GitHub Actions + Docker Hub + Deploy na AWS EC2/ALB). |
| **16** | Aula | **19/Nov** | **17/Nov** | [Atividade Integrada 3: Machine Learning na Nuvem (AWS SageMaker)](aulas/semana_16.md) | **Projeto 10:** Treinamento de ML no SageMaker para manutenção preditiva fabril. |
| **17** | Aula | **26/Nov** | **24/Nov** | [Atividade Integrada 4: Consolidação End-to-End da Planta Nuvem](aulas/semana_17.md) | Integração final da esteira CI/CD + Ingestão IoT + Modelo ML operando na AWS. |
| **18** | Eval | **03/Dez** | **01/Dez** | **PROVA 2 INDIVIDUAL** & Defesa do Projeto Final | Avaliação individual e apresentação da Atividade Integrada da disciplina. |
| **19** | Rec | **10/Dez** | **08/Dez** | Exame de Recuperação Síncrono | Revisão e realização da avaliação de recuperação. |
| **20** | Fim | **17/Dez** | **15/Dez** | Conselho de Classe & Fechamento | Divulgação final das médias e encerramento do semestre. |
