# Computação em Nuvem

Este repositório contém o plano de ensino, ementa, cronograma semestral detalhado, referências bibliográficas e diretrizes das atividades práticas para a unidade curricular de **Computação em Nuvem**.

---

## Ementa da Unidade Curricular

**Carga Horária:** 60 aulas (50h00min relógio / 20 Semanas)

### Descrição
Ao final dessa unidade curricular o estudante será capaz de desenvolver aplicações de arquitetura de computação em nuvem, visando a aplicação em ambientes de produção industrial. Para tanto serão abordados os seguintes conteúdos: Computação em Nuvem; Modelos de Serviço (IaaS, PaaS, SaaS); Virtualização de Recursos; Segurança de Dados em Plataformas de Nuvem; Contratos e FinOps.

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas a aplicações de arquitetura de computação em nuvem, garantindo alta disponibilidade, escalabilidade, segurança e otimização de custos para a infraestrutura da fábrica **Smart N1**.

### Capacidades Técnicas
- Avaliar as plataformas de nuvem (GCP / AWS) para publicação e hospedagem em relação ao desempenho.
- Definir os requisitos de hospedagem de acordo com os serviços utilizados.
- Criar infraestrutura na nuvem para virtualização de computação, armazenamento e rede.
- Aplicar técnicas de segurança, controle de acesso (IAM) e criptografia em computação em nuvem.
- Utilizar serverless computing, microserviços e bancos de dados gerenciados na nuvem.
- Publicar aplicações garantindo alta disponibilidade, balanceamento de carga e resiliência.

### Capacidades Socioemocionais
- **Criatividade, originalidade e iniciativa:** Orientar o comportamento para atingir objetivos organizacionais de modo autônomo.
- **Ética:** Apresentar conduta ética na gestão de dados e conformidade regulatória.
- **Pensamento crítico e inovação:** Expressar-se de modo fundamentado para tomada de decisões arquiteturais em nuvem.

### Conteúdo Programático (Conhecimentos)
1. **Computação em Nuvem:**
   - Fundamentos (Elasticidade, Resiliência, Escalabilidade Horizontal/Vertical).
   - Arquiteturas de nuvem pública, privada e híbrida. Regiões, Zonas de Disponibilidade e Edge Locations.
2. **Modelos de Serviço:**
   - IaaS (Infraestrutura como Serviço), PaaS (Plataforma como Serviço) e SaaS (Software como Serviço).
3. **Virtualização de Recursos:**
   - Computação (Serverless, Microserviços, Instâncias On-Demand/Spot).
   - Armazenamento (Block, Object e File Storage), Redes Virtuais (VPC) e Banco de Dados Gerenciado.
   - Balanceamento de carga, Auto Scaling e Alta Disponibilidade.
4. **Segurança de Dados e Contratos em Nuvem:**
   - Modelo de responsabilidade compartilhada, controle de acessos (IAM, ACLs) e criptografia.
   - Monitoramento de logs, auditoria, economia de escala e FinOps.

---

## Referências Bibliográficas

### Básicas
1. **KOLBE JÚNIOR, Armando.** *Computação em nuvem*. São Paulo: Contentus, 2020. E-book (98 p.).
2. **ROSE, César A. F. de.** *O que é esta tal de nuvem e o que pode fazer por você?*. Porto Alegre: EdiPUCRS, 2022. E-book (96 p.).
3. **VERAS, Manoel.** *Computação em nuvem: nova arquitetura de TI*. Rio de Janeiro: Brasport, 2015. E-book (192 p.).

### Complementares
1. **MOLINARI, Leonardo.** *Cloud computing: a inteligência da nuvem e seu novo valor em TI*. São Paulo: Érica, 2018.
2. **MUNIZ, Antonio et al.** *Jornada cloud native: do zero ao avançado somando conceitos e práticas*. Rio de Janeiro: Brasport, 2023. E-book (280 p.).
3. **SACOMANO, José Benedito et al. (org.).** *Indústria 4.0: conceitos e fundamentos*. São Paulo: Blucher, 2018. E-book (183 p.).
4. **VERAS, Manoel.** *Arquitetura de nuvem: amazon web services (AWS)*. Rio de Janeiro: Brasport, 2013. E-book (416 p.).

---

## Critérios de Avaliação e Composição de Nota

A nota final da disciplina será composta por:
- **Prova Teórico-Prática 1 (P1):** Peso 30% (Semanas 01 a 05)
- **Prova Teórico-Prática 2 (P2):** Peso 30% (Semanas 06 a 10)
- **Projetos Práticos de Infraestrutura e Laboratório Cloud:** Peso 40%

---

## Cronograma Semestral e Calendário de Aulas

| Sem. | Tipo | Datas | Foco Teórico / Conteúdo | Atividade / Detalhes |
| :---: | :---: | :---: | :--- | :--- |
| **01** | Aula | **03/Ago a 07/Ago** | [Computação em Nuvem na Indústria 4.0 e Modelos de Serviço](aulas/semana_01.md) | Pilares da nuvem, elasticidade, resiliência, IaaS, PaaS e SaaS. |
| **02** | Aula | **10/Ago a 14/Ago** | [Infraestrutura de Rede e Virtualização (VPC, Subredes e Firewalls)](aulas/semana_02.md) | Redes Virtuais (VPC), subredes, tabelas de rotas e Firewall. |
| **03** | Aula | **17/Ago a 21/Ago** | [Máquinas Virtuais (IaaS) e Provisionamento no GCP/AWS](aulas/semana_03.md) | Tipos de instâncias Linux, discos persistentes e chaves SSH. |
| **04** | Exercício de Fixação | **22/Ago (Sáb)** | Atividade Prática / Exercício de Fixação I | Provisionamento de VPC e instâncias virtuais na nuvem. |
| **05** | Aula | **24/Ago a 28/Ago** | [Armazenamento na Nuvem: Block Storage e Cloud Object Storage](aulas/semana_04.md) | Storage de bloco vs. objeto (Cloud Storage/S3) e retenção. |
| **06** | Aula | **31/Ago a 04/Set** | [Bancos de Dados Gerenciados na Nuvem (Cloud SQL PostgreSQL)](aulas/semana_05.md) | Instâncias de banco gerenciadas, backups automáticos e réplicas. |
| **07** | Semana de PII | **08/Set a 11/Set** | Orientação e Acompanhamento do Projeto Integrador (PII) | Alinhamento da arquitetura de nuvem para sustentação do PII. |
| **08** | Aula | **14/Set a 18/Set** | [Computação Serverless e Microserviços (Cloud Run / Functions)](aulas/semana_07.md) | Serverless computing, gatilhos de eventos e conteinerização. |
| **09** | Exercício de Fixação | **19/Set (Sáb)** | Atividade Prática / Exercício de Fixação II | Deploy de funções serverless orientadas a eventos. |
| **10** | Avaliação | **21/Set a 25/Set** | **PROVA 1 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 01 a 05. |
| **11** | Semana de PII | **28/Set a 02/Out** | Consolidação do Projeto Integrador (PII) | Validação do banco gerenciado e armazenamento do PII. |
| **12** | Aula | **05/Out a 09/Out** | [Gestão de Identidade, Acesso e Segurança (IAM & Security)](aulas/semana_08.md) | Controle de acesso IAM, Service Accounts, roles e chaves. |
| **13** | Semana de Tecnologia | **14/Out a 16/Out** | Palestras e Workshops da Semana de Tecnologia | Atividades institucionais integradas da Semana Tec. |
| **14** | Aula | **19/Out a 23/Out** | [Balanceamento de Carga, Auto Scaling e Alta Disponibilidade](aulas/semana_09.md) | Load Balancers HTTP/TCP, Auto Scaling Groups e resiliência. |
| **15** | Exercício de Fixação | **24/Out (Sáb)** | Atividade Prática / Exercício de Fixação III | Configuração de Auto Scaling e Load Balancing. |
| **16** | Aula | **26/Out a 30/Out** | [Monitoramento de Infraestrutura, Observabilidade e FinOps](aulas/semana_10.md) | Cloud Monitoring, alertas de métricas e controle de custos. |
| **17** | Semana de PII | **03/Nov a 06/Nov** | Orientação e Acompanhamento do Projeto Integrador (PII) | Refinamento das políticas de segurança IAM do PII. |
| **18** | Exercício de Fixação | **07/Nov (Sáb)** | Atividade Prática / Exercício de Fixação IV | Criação de alertas de infraestrutura e orçamentos FinOps. |
| **19** | Aula | **09/Nov a 13/Nov** | [Implantação Final em Nuvem da Plataforma FactoryHub](aulas/semana_11.md) | Publicação final da aplicação na nuvem com apontamento DNS/HTTPS. |
| **20** | Aula | **16/Nov a 19/Nov** | Consolidação Técnica e Revisão de Arquitetura Cloud | Revisão de serverless, segurança e preparação para P2. |
| **21** | Avaliação | **23/Nov a 27/Nov** | **PROVA 2 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 07 a 11 & Entrega do Projeto. |
| **22** | Semana de PII | **30/Nov a 04/Dez** | Entrega Geral do PII & Fechamento | Devolutiva dos projetos integradores e fechamento de notas. |
| **23** | Congresso UniSENAI-SP | **05/Dez (Sáb)** | Congresso UniSENAI-SP | Apresentação dos melhores trabalhos no Congresso UniSENAI-SP. |
| **24** | Recuperação | **07/Dez a 11/Dez** | Exame de Recuperação Síncrono | Revisão e realização da avaliação de recuperação. |
| **25** | Fechamento | **14/Dez a 18/Dez** | Conselho de Classe & Fechamento | Divulgação final das médias e encerramento do semestre. |
