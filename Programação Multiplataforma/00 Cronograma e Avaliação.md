# Programação Multiplataforma

> Este material está em desenvolvimento e pode sofrer atualizações contínuas conforme o conteúdo é aprimorado.


## PBL's (Aprendizagem Baseada em Projetos)

### **PBL1 — Sistema Inteligente de Monitoramento de Ambientes Educacionais**

#### Contexto do Problema

Após a pandemia e com o aumento da preocupação com qualidade do ar, conforto térmico e uso eficiente de espaços, instituições educacionais precisam monitorar salas em tempo real.

A instituição contratou a equipe para desenvolver um sistema capaz de:

* Monitorar condições ambientais em tempo real
* Armazenar dados históricos
* Gerar alertas automáticos
* Integrar sensores IoT
* Disponibilizar dashboard web
* Permitir versionamento colaborativo

#### Tecnologias

* IoT: Wokwi
* Broker MQTT: HiveMQ
* Backend: Node.js / Node-RED
* Banco de dados: InfluxDB
* Dashboard: Web (React / Grafana)
* Arquitetura: Publish/Subscribe

#### Arquitetura

1. Device / Edge
2. Messaging (MQTT)
3. Application / Service
4. Data
5. Presentation


### **PBL2 — Sistema de Gestão Inteligente de Consumo de Energia**

Sistema para análise contínua de consumo energético com:

* Processamento em streaming
* Detecção de padrões e anomalias
* Geração de alertas
* Arquitetura distribuída


### **PBL3 — Plataforma de Rastreamento e Monitoramento de Ativos**

Plataforma distribuída com:

* Rastreamento em tempo real
* Registro de eventos
* Integração entre múltiplos serviços
* APIs e mensageria


### **Progressão Pedagógica**

* **PBL1** → IoT + ingestão + mensageria
* **PBL2** → processamento contínuo + análise
* **PBL3** → sistemas distribuídos completos



## Programação Multiplataforma

> Este material está em desenvolvimento e pode sofrer atualizações contínuas conforme o conteúdo é aprimorado.


## PBL's (Aprendizagem Baseada em Projetos)

### **PBL1 — Sistema Inteligente de Monitoramento de Ambientes Educacionais**

Sistema IoT para monitoramento em tempo real com:

* Sensores (simulados ou reais)
* Comunicação via MQTT
* Backend para ingestão de dados
* Armazenamento em séries temporais
* Dashboard de visualização

**Foco:**
Fundamentos de IoT, mensageria e ingestão de dados.


### **PBL2 — Sistema de Gestão Inteligente de Consumo de Energia**

Sistema para análise contínua de dados com:

* Streaming de dados
* Processamento em tempo real
* Detecção de padrões e anomalias

**Foco:**
Processamento contínuo e análise de eventos.


### **PBL3 — Plataforma de Rastreamento e Monitoramento de Ativos**

Plataforma distribuída com:

* Integração entre múltiplos serviços
* APIs e mensageria
* Rastreamento em tempo real

**Foco:**
Sistemas distribuídos completos e interoperabilidade.


### **Progressão Pedagógica**

* **PBL1 →** IoT + MQTT + ingestão
* **PBL2 →** streaming + processamento
* **PBL3 →** integração distribuída


## Cronograma

### **1º Semestre (Aulas 01–20)**

| Aula | Data   | Tema                           | Conteúdo                         | Atividade prática            | Artefato produzido   |
| ---- | ------ | ------------------------------ | -------------------------------- | ---------------------------- | -------------------- |
| 01   | 13/fev | Boas-vindas e visão geral      | Introdução à disciplina e ao PBL | Discussão de problemas reais | Ideias iniciais      |
| 02   | 20/fev | PBL1 - Arquitetura e Simulação | Arquitetura IoT + Wokwi          | Modelagem da solução         | Arquitetura inicial  |
| 03   | 27/fev | PBL1 - IoT e MQTT              | Dispositivos + protocolo MQTT    | Configuração de sensores     | Fluxo IoT            |
| 04   | 06/mar | PBL1 - Cloud e Node-RED        | EC2 + Node-RED                   | Deploy em nuvem              | Ambiente configurado |
| 05   | 13/mar | PBL1 - Node-RED + InfluxDB     | Pipeline de dados                | Integração                   | Pipeline             |
| 06   | 20/mar | PBL1 - Revisão                 | Consolidação                     | Ajustes                      | Versão refinada      |
| 07   | 27/mar | PBL1 - Backend                 | APIs REST                        | Implementação                | API                  |
| 08   | 03/abr | PBL1 - Dashboard               | Visualização                     | Dashboard                    | Interface            |
| 09   | 13/abr | **Entrega PBL1 + P1**          | Integração final                 | Apresentação                 | Sistema completo     |
| 10   | 20/abr | Introdução ao PBL2             | Streaming de dados               | Planejamento                 | Escopo PBL2          |
| 11   | 27/abr | Pipeline de dados              | Ingestão contínua                | Implementação                | Pipeline             |
| 12   | 04/mai | Processamento de eventos       | Regras e análise                 | Implementação                | Processador          |
| 13   | 11/mai | Armazenamento                  | Persistência                     | Integração                   | Base de dados        |
| 14   | 18/mai | Alertas                        | Detecção de anomalias            | Implementação                | Sistema de alertas   |
| 15   | 25/mai | Integração PBL2                | Integração geral                 | Ajustes                      | Sistema integrado    |
| 16   | 01/jun | Testes e validação             | Introdução a TDD                 | Testes                       | Casos de teste       |
| 17   | 08/jun | Refinamento PBL2               | Melhorias                        | Ajustes                      | Versão final         |
| 18   | 13/jun | Revisão geral                  | Preparação                       | Revisão                      | Ajustes finais       |
| 19   | 15/jun | **Entrega PBL2 + P2**          | Apresentação                     | Entrega                      | Sistema funcional    |
| 20   | 22/jun | Encerramento                   | Retrospectiva                    | Debate                       | Lições aprendidas    |


### **2º Semestre (Aulas 21–40)**

| Aula | Tema                     | Conteúdo                   | Atividade prática | Artefato produzido      |
| ---- | ------------------------ | -------------------------- | ----------------- | ----------------------- |
| 21   | Introdução ao PBL3       | Sistemas distribuídos      | Planejamento      | Escopo                  |
| 22   | Arquitetura distribuída  | Serviços e integração      | Modelagem         | Arquitetura             |
| 23   | APIs                     | Comunicação entre serviços | Implementação     | APIs                    |
| 24   | Mensageria               | Eventos distribuídos       | Implementação     | Sistema de eventos      |
| 25   | Rastreamento             | Monitoramento contínuo     | Implementação     | Sistema de rastreamento |
| 26   | Armazenamento            | Persistência distribuída   | Integração        | Banco                   |
| 27   | Integração geral         | Consolidação               | Ajustes           | Sistema integrado       |
| 28   | **Semana de Tecnologia** | Atividades institucionais  | Participação      | Relatório               |
| 29   | Escalabilidade           | Otimização                 | Melhorias         | Sistema otimizado       |
| 30   | Testes                   | TDD e validação            | Testes            | Casos de teste          |
| 31   | Versionamento avançado   | Branches e colaboração     | Simulação         | Estrutura Git           |
| 32   | Code Review              | Revisão de código          | Pull requests     | PR                      |
| 33   | Monitoramento            | Observabilidade            | Implementação     | Logs/métricas           |
| 34   | Refinamento              | Melhorias                  | Ajustes           | Versão refinada         |
| 35   | Finalização              | Integração final           | Ajustes           | Sistema completo        |
| 36   | **Entrega PBL3**         | Apresentação               | Entrega           | Plataforma final        |
| 37   | Avaliação Final          | Conteúdo geral             | Prova             | Avaliação               |
| 38   | **REAVA**                | Reavaliação                | Prova             | Recuperação             |
| 39   | Encerramento             | Apresentações finais       | Apresentação      | Projeto                 |
| 40   | Revisão de notas         | Fechamento                 | Conferência       | Registro final          |


## Avaliação

### **Composição da Nota**

#### Avaliações (4 pontos)

* **P1** – 2,0 (junto ao PBL1)
* **P2** – 2,0 (junto ao PBL2)


#### Projetos PBL (6 pontos)

* **PBL1** – 2,0
* **PBL2** – 2,0
* **PBL3** – 2,0



### **Cálculo da Nota Final**

[
NF = P1 + P2 + PBL1 + PBL2 + PBL3
]

* Se **NF > 10 → NF = 10**
* Se **NF < 6 e REAVA ≥ 6 → NF = 6**

