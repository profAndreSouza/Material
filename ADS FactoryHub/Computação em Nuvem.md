# Computação em Nuvem
## Ecossistema Integrado de Aprendizagem (Smart N1)

[![GCP](https://img.shields.io/badge/gcp-google_cloud-4285F4.svg)](https://cloud.google.com/)
[![Vercel](https://img.shields.io/badge/vercel-deploy-000000.svg)](https://vercel.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-cloud_sql-336791.svg)](https://cloud.google.com/sql)

Este repositório contém os materiais de estudo e orientações práticas para a unidade curricular de **Computação em Nuvem** (60 horas-aula de 50min / 50h00min relógio / 20 Semanas / 2 Avaliações Regimentais).

No modelo do **Ecossistema Integrado de Aprendizagem**, Computação em Nuvem atua em sinergia com **Automação Industrial**, **Ciência de Dados** e **DevOps**, sendo responsável pela **arquitetura de infraestrutura na nuvem, virtualização de recursos, segurança e alta disponibilidade** do ecossistema fabril **Smart N1**.

---

## Papel no Ecossistema Integrado

```text
┌──────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│   Automação Industrial   │ ---> │    Ciência de Dados    │ ---> │        DevOps          │ ---> │  Computação em Nuvem   │
│(Aquisição & Telemetria) │      │(EDA, Análise & Insights│      │ (CI/CD & Container)    │      │ (Infra, Cloud & Deploy)│
└──────────────────────────┘      └────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

- **Automação Industrial**: Captura eventos e sinais dos sensores da planta Smart N1.
- **Ciência de Dados**: Analisa os datasets industriais e gera modelos preditivos.
- **DevOps**: Constrói esteiras de integração contínua e containerização de serviços.
- **Computação em Nuvem (Esta Disciplina)**: Projeta e opera a infraestrutura na nuvem pública (GCP). Provisiona bancos de dados gerenciados (Cloud SQL PostgreSQL), publica serviços serverless (Cloud Run), configura redes privadas (VPCs), garante segurança (IAM/ACLs) e gerencia custos e alta disponibilidade.

---

## Ementa Oficial Completa (Unidade Curricular)

### Descrição
Ao final dessa unidade curricular o estudante será capaz de desenvolver aplicações de arquitetura de computação em nuvem, visando a aplicação em ambientes de produção industrial. Para tanto serão abordados os seguintes conteúdos: Computação em Nuvem; Modelos de Serviço; Virtualização de recursos; Segurança de dados em plataforma de Nuvem; Contratos de serviços na nuvem.

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas à aplicações de arquitetura de computação em nuvem, visando a aplicação em ambientes de produção industrial.

### Capacidades Técnicas
- Avaliar as plataformas para publicação/hospedagem em relação ao seu desempenho.
- Definir os requisitos da hospedagem de acordo com os serviços utilizados.
- Criar infraestrutura na nuvem para virtualização de recursos.
- Utilizar técnicas de segurança em computação na nuvem.
- Utilizar serverless computing e microserviços na nuvem.
- Publicar/hospedar as aplicações tendo em vista a alta disponibilidade e escalabilidade do serviço.
- Publicar as aplicações de banco de dados tendo em vista o desempenho do sistema.

### Capacidades Socioemocionais
- **Criatividade, originalidade e iniciativa:** Orientar seu comportamento para a consecução de objetivos individuais e coletivos, de modo organizado e esforçado, fazendo escolhas em relação à vida profissional e estimulando a liberdade e a autonomia.
- **Ética:** Apresentar comportamento ético na conduta profissional, vivenciando valores, respeitando princípios, praticando a inclusão e justiça social, respeitando diferenças individuais e valorizando o meio ambiente.
- **Pensamento crítico e inovação:** Expressar-se de modo crítico e com base em evidências claras, ponderando diferentes fatos, ideias, opiniões, visões e perspectivas aplicáveis às atividades sob a sua responsabilidade.

### Conteúdo Programático / Conhecimentos
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
   - 3.1. Computação (3.1.1. Serverless computing, 3.1.2. Microserviços, 3.1.3. Instâncias On-Demand, Reservadas, Spot, Hosts dedicados)
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

### Referências Básicas
1. **KOLBE JÚNIOR, Armando.** *Computação em nuvem*. São Paulo: Contentus, 2020. E-book (98 p.).
2. **ROSE, César A. F. de.** *O que é esta tal de nuvem e o que pode fazer por você?*. Porto Alegre: EdiPUCRS, 2022. E-book (96 p.).
3. **VERAS, Manoel.** *Computação em nuvem: nova arquitetura de TI*. Rio de Janeiro: Brasport, 2015. E-book (192 p.).

### Referências Complementares
1. **MOLINARI, Leonardo.** *Cloud computing: a inteligência da nuvem e seu novo valor em TI*. São Paulo: Érica, 2018.
2. **MUNIZ, Antonio et al.** *Jornada cloud native: do zero ao avançado somando conceitos e práticas*. Rio de Janeiro: Brasport, 2023. E-book (280 p.).
3. **SACOMANO, José Benedito et al. (org.).** *Indústria 4.0: conceitos e fundamentos*. São Paulo: Blucher, 2018. E-book (183 p.).
4. **TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J.** *Redes de computadores*. 6. ed. São Paulo: Grupo A, 2021. E-book (593 p.).
5. **VERAS, Manoel.** *Arquitetura de nuvem: amazon web services (AWS)*. Rio de Janeiro: Brasport, 2013. E-book (416 p.).

---

## Matriz de Mapeamento Bibliográfico por Encontro Prático

| Encontro | Tema Central | Conhecimentos da Ementa | Referências Básicas | Referências Complementares |
| :---: | :--- | :--- | :--- | :--- |
| **01** | Histórico, Conceitos & Fundamentos de Nuvem (Elasticidade e Resiliência) | 1.1 a 1.3 | Veras (2015) Cap. 1; Rose Cap. 1 | Molinari Cap. 1; Sacomano et al. Cap. 1 |
| **02** | Arquitetura Cloud & Os 5 Pilares da Computação em Nuvem | 1.4 | Kolbe Jr Cap. 2; Rose Cap. 2 | Veras (2013) Cap. 1 |
| **03** | Nuvens Públicas, Privadas e Híbridas (Regiões, Zonas de Disponibilidade e Edge) | 1.5, 1.6 | Veras (2015) Cap. 2, 3 | Tanenbaum et al. Cap. 1 |
| **04** | Modelos de Serviço em Nuvem: IaaS, PaaS e SaaS | 2.1 a 2.3 | Kolbe Jr Cap. 3; Rose Cap. 3 | Molinari Cap. 2; Muniz et al. Cap. 1 |
| **05** | Virtualização de Recursos de Computação (Serverless e Microserviços) | 3.1 | Rose Cap. 3; Veras (2015) Cap. 4 | Muniz et al. Cap. 2 |
| **06** | Redes em Nuvem (VPCs, Subredes, Firewalls, Gateways e Rotas) | 3.3 | Kolbe Jr Cap. 4; Veras (2015) Cap. 4 | Tanenbaum et al. Cap. 4, 5 |
| **07** | Armazenamento na Nuvem (Cloud Storage, Buckets e Clusters) | 3.2 | Veras (2015) Cap. 4 | Molinari Cap. 3 |
| **08** | Bancos de Dados Gerenciados na Nuvem (Cloud SQL PostgreSQL) | 3.4 | Rose Cap. 4; Veras (2015) Cap. 5 | Muniz et al. Cap. 4; Veras (2013) Cap. 4 |
| **09** | Alta Disponibilidade, Escalonamento Horizontal/Vertical & Balanceadores de Carga | 3.6, 3.7 | Kolbe Jr Cap. 4; Rose Cap. 4 | Muniz et al. Cap. 4 |
| **10** | Segurança de Dados em Nuvem (IAM, Roles, ACLs de Rede e Criptografia) | 4.1 a 4.6 | Kolbe Jr Cap. 5; Veras (2015) Cap. 6 | Muniz et al. Cap. 5; Veras (2013) Cap. 5 |
| **11** | Aspectos Econômicos, Contratos de Serviços na Nuvem e Cloud Operations | 5.1 a 5.3; 3.5 | Veras (2015) Cap. 7 | Molinari Cap. 5 |

---

## Certificações Práticas: Google Cloud Skills Boost

Como parte integrante do aprendizado de Computação em Nuvem, os alunos realizarão laboratórios práticos com emissão de *Skill Badges* oficiais no **Google Cloud Skills Boost**:

1. **GCP Essentials**: Criação de instâncias Compute Engine, redes VPC e Buckets.
2. **Set Up and Configure a Cloud Environment in Google Cloud**: Gerenciamento de IAM, redes e cotas.
3. **Deploy to Cloud Run / Serverless**: Implantação e publicação Serverless na infraestrutura GCP.
