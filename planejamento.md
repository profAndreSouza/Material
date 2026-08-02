# Ecossistema Integrado de Aprendizagem
# ADS + Indústria 4.0
## Documento Base para Planejamento das Disciplinas

**Versão:** 1.0

---

# 1. Visão Geral

Este documento define a estratégia pedagógica para integração das disciplinas:

- Automação Industrial
- Ciência de Dados
- DevOps & Computação em Nuvem

Ao invés de disciplinas independentes, o semestre será organizado em torno de um único ecossistema industrial conectado.

O objetivo é reproduzir um cenário próximo ao encontrado em empresas de transformação digital e Indústria 4.0, onde equipes de software trabalham continuamente sobre os dados produzidos por uma planta industrial.

---

# 2. Conceito Central

A Smart N1 será utilizada como fonte oficial de dados durante todo o semestre.

Ela não será utilizada para ensinar programação de CLPs.

Ela será utilizada como uma fonte de eventos industriais em tempo real.

Os alunos atuarão como desenvolvedores de software responsáveis por integrar esses dados aos sistemas corporativos.

---

# 3. Arquitetura Geral

```

┌──────────────────────┐
│      Smart N1        │
│ Sensores / Atuadores │
└──────────┬───────────┘
│
CLP
│
IO-Link / Profinet
│
Gateway Industrial
(Node-RED)
│
MQTT Broker
│
├──────────────┬──────────────┬───────────────┐
│ │ │
Python API Banco Cloud
│ │ │
PostgreSQL GCP
│ │ │
Grafana Ciência DevOps
Dados

```

---

# 4. Objetivo Pedagógico

Cada disciplina abordará uma camada diferente da arquitetura.

| Disciplina | Responsabilidade |
|------------|------------------|
| Automação | Aquisição e Integração dos Dados |
| Ciência de Dados | Transformação dos Dados em Informação |
| DevOps & Nuvem | Publicação, Automação e Operação da Solução |

---

# 5. Smart N1

A planta representa uma linha de produção inteligente composta por:

- sensores
- atuadores
- esteiras
- leitores RFID
- sensores de cor
- cilindros pneumáticos
- motor de perfuração
- CLP
- comunicação industrial

Os alunos observarão seu funcionamento e utilizarão apenas os dados produzidos pela planta.

---

# 6. Modelo de Dados

Toda informação produzida pela Smart N1 deverá ser transformada em eventos MQTT padronizados.

## Exemplo

```json
{
    "timestamp":"2026-09-15T20:31:52Z",
    "plant":"SmartN1",
    "station":"ColorSensor",
    "pieceId":"P000124",
    "event":"piece.detected",
    "status":"OK",
    "data":{
        "color":"Blue"
    }
}
```

---

Outro exemplo

```json
{
    "timestamp":"2026-09-15T20:32:15Z",
    "station":"RFID",
    "pieceId":"P000124",
    "event":"rfid.read",
    "data":{
        "uid":"8A23FF91"
    }
}
```

---

Outro exemplo

```json
{
    "timestamp":"2026-09-15T20:32:40Z",
    "station":"Sorter",
    "pieceId":"P000124",
    "event":"piece.sorted",
    "data":{
        "destination":"Box03"
    }
}
```

---

# 7. Estrutura MQTT

## Topics

```
smartn1/entry

smartn1/color

smartn1/rfid

smartn1/drill

smartn1/sorter

smartn1/storage

smartn1/conveyor

smartn1/pneumatic

smartn1/alarm

smartn1/status
```

---

Cada mensagem deverá possuir:

- timestamp
- estação
- identificador da peça
- tipo do evento
- payload específico

---

# 8. Projeto Integrador

O mesmo projeto será utilizado durante todo o semestre.

Cada disciplina desenvolverá apenas parte da solução.

---

# 9. Disciplina 1
# Automação Industrial

## Papel

A disciplina ensinará como os dados são produzidos dentro da fábrica.

Não será uma disciplina de programação de CLPs.

Será uma disciplina de integração TI/TA.

---

## Objetivos

Compreender

- sensores
- atuadores
- CLPs
- redes industriais
- protocolos
- gateways
- integração IoT

---

## Fluxo

```
Sensor

↓

CLP

↓

Gateway

↓

MQTT
```

---

## Tecnologias

- Node-RED
- MQTT
- Mosquitto
- MQTT Explorer
- OPC UA
- Modbus TCP
- Python
- PostgreSQL
- Grafana

---

## Produto Final

Ao final da disciplina deverá existir:

- broker MQTT
- eventos industriais
- persistência
- dashboard operacional

---

# 10. Disciplina 2
# Ciência de Dados

## Papel

Transformar dados industriais em informação.

Toda análise utilizará dados produzidos pela Smart N1.

---

## Fluxo

```
MQTT

↓

CSV

↓

Pandas

↓

Estatística

↓

Visualização

↓

Insights
```

---

## Objetivos

Aprender

- EDA
- estatística
- visualização
- correlação
- séries temporais
- dashboards
- storytelling

---

## Dataset

Os datasets serão gerados automaticamente durante o semestre.

Exemplos

```
production.csv

telemetry.csv

events.csv

alarms.csv

quality.csv
```

---

## Produto Final

Relatório analítico contendo

- KPIs
- gráficos
- inferência
- recomendações

---

# 11. Disciplina 3
# DevOps & Computação em Nuvem

## Papel

Transformar a solução desenvolvida em um serviço disponível na nuvem.

---

## Fluxo

```
Git

↓

GitHub

↓

GitFlow

↓

GitHub Actions

↓

Docker

↓

Docker Hub

↓

Cloud Run

↓

Cloud SQL

↓

Grafana

↓

Vercel
```

---

## Tecnologias

Versionamento

- Git
- GitHub

CI/CD

- GitHub Actions

Containers

- Docker
- Docker Hub

Cloud

- Google Cloud Platform

Banco

- Cloud SQL

Deploy

- Cloud Run
- Vercel

Monitoramento

- Cloud Logging
- Cloud Monitoring

---

## Produto Final

Uma esteira CI/CD completa.

---

# 12. Evolução do Projeto

## Semana 1

Conhecer a planta.

---

## Semana 2

Receber dados MQTT.

---

## Semana 3

Persistir dados.

---

## Semana 4

Criar API.

---

## Semana 5

Consumir API.

---

## Semana 6

Gerar dashboards.

---

## Semana 7

Analisar dados.

---

## Semana 8

Criar pipelines.

---

## Semana 9

Containerizar.

---

## Semana 10

Publicar na GCP.

---

## Semana 11

Apresentação Final.

---

# 13. Produtos Esperados

## Automação

- Gateway MQTT
- Integração TI/TA
- Dashboard operacional

---

## Ciência de Dados

- Notebook
- Relatório
- Dashboard analítico

---

## DevOps

- Repositório GitHub
- Pipeline CI/CD
- Docker
- Cloud Run
- Cloud SQL
- Deploy automatizado

---

# 14. Competências Desenvolvidas

Ao final do semestre o aluno deverá ser capaz de:

- compreender arquiteturas industriais modernas;
- integrar equipamentos industriais com aplicações de software;
- consumir dados industriais em tempo real;
- desenvolver APIs para integração;
- persistir dados industriais;
- construir dashboards operacionais;
- aplicar técnicas de Ciência de Dados sobre dados reais;
- implantar aplicações em nuvem;
- automatizar builds e deploys;
- monitorar aplicações em produção.

---

# 15. Arquitetura Final do Ecossistema

```
                    SMART N1
         Sensores • RFID • Motores
                    │
                    ▼
                  CLP
                    │
         Profinet / IO-Link
                    │
                    ▼
              Node-RED Gateway
                    │
              MQTT Broker
                    │
        ┌───────────┼────────────┐
        │           │            │
        ▼           ▼            ▼
    PostgreSQL    FastAPI     Grafana
        │           │            │
        └──────┬────┴────────────┘
               ▼
         Google Cloud Platform
               │
      Cloud Run • Cloud SQL
               │
               ▼
     GitHub Actions + Docker Hub
               │
               ▼
            Aplicação Web
              (Vercel)
```

---

# 16. Filosofia da Proposta

O foco do semestre não é ensinar tecnologias isoladas.

O foco é mostrar ao estudante como um software moderno se integra ao ambiente industrial.

A Smart N1 deixa de ser apenas um equipamento didático e passa a representar um ambiente produtivo real, gerando dados continuamente para todas as disciplinas.

Dessa forma, o aluno percorre todo o ciclo de vida dos dados:

1. **Aquisição** (Automação Industrial)
2. **Armazenamento e Integração** (Automação + DevOps)
3. **Análise** (Ciência de Dados)
4. **Disponibilização** (APIs e Dashboards)
5. **Implantação** (DevOps & Computação em Nuvem)
6. **Operação e Monitoramento** (DevOps)

Ao final do semestre, o estudante terá desenvolvido uma solução completa de Indústria 4.0, compreendendo desde a origem dos dados em uma linha de produção até sua disponibilização em aplicações modernas hospedadas na nuvem, reproduzindo um cenário muito próximo ao encontrado em projetos reais de transformação digital industrial.


# 17. Padronização da Arquitetura de Software

Este capítulo define uma arquitetura comum para todas as disciplinas do ecossistema integrado.

O objetivo é que todos os componentes desenvolvidos durante o semestre utilizem os mesmos padrões de organização, comunicação e nomenclatura, simulando um ambiente profissional de desenvolvimento.

---

# 17.1 Arquitetura Geral

```
                    Smart N1
                        │
                Sensores / Atuadores
                        │
                      CLP
                        │
               IO-Link / Profinet
                        │
                  Gateway Node-RED
                        │
                    MQTT Broker
                        │
      ┌─────────────────┴─────────────────┐
      │                                   │
      ▼                                   ▼
  Data Collector                     Dashboard
    (Python)                         (Grafana)
      │
      ▼
 PostgreSQL / Cloud SQL
      │
      ▼
 REST API (FastAPI)
      │
      ▼
 Aplicações Web
 (React / Next.js)
      │
      ▼
 Google Cloud Platform
```

---

# 17.2 Organização dos Repositórios

Cada equipe deverá trabalhar com uma estrutura semelhante à utilizada em projetos profissionais.

```
smartfactory-project/

├── api/
├── collector/
├── dashboard/
├── database/
├── docs/
├── notebooks/
├── frontend/
├── docker/
├── scripts/
├── .github/
│   └── workflows/
├── docker-compose.yml
├── README.md
└── LICENSE
```

---

## api/

Responsável pela API REST.

Tecnologias

- Python
- FastAPI

---

## collector/

Aplicação responsável por consumir os tópicos MQTT.

Funções

- conexão MQTT
- validação
- transformação
- persistência

---

## frontend/

Aplicação Web.

Pode utilizar

- React
- Next.js

---

## dashboard/

Arquivos do Grafana.

---

## notebooks/

Utilizados pela disciplina de Ciência de Dados.

Exemplo

```
01_exploracao.ipynb

02_limpeza.ipynb

03_estatistica.ipynb

04_dashboard.ipynb
```

---

## docs/

Documentação.

---

# 17.3 Organização do Banco de Dados

Tabela principal

## telemetry

| Campo | Tipo |
|---------|------|
| id | bigint |
| timestamp | timestamp |
| station | varchar |
| piece_id | varchar |
| event | varchar |
| payload | jsonb |

---

Tabela

## pieces

| Campo | Tipo |
|---------|------|
| piece_id | varchar |
| color | varchar |
| rfid | varchar |
| status | varchar |
| created_at | timestamp |

---

Tabela

## alarms

| Campo | Tipo |
|---------|------|
| id | bigint |
| timestamp | timestamp |
| station | varchar |
| severity | varchar |
| message | text |

---

# 17.4 Convenção MQTT

Todos os tópicos utilizarão a mesma estrutura.

```
smartn1/{estacao}/{evento}
```

Exemplos

```
smartn1/color/read

smartn1/rfid/read

smartn1/storage/store

smartn1/drill/start

smartn1/drill/end

smartn1/alarm

smartn1/system/status
```

---

# 17.5 Estrutura das Mensagens

Todas as mensagens deverão seguir o mesmo padrão.

```json
{
    "timestamp": "...",
    "plant": "SmartN1",
    "station": "...",
    "pieceId": "...",
    "event": "...",
    "status": "...",
    "data": {}
}
```

---

Campos obrigatórios

- timestamp
- station
- pieceId
- event
- status

---

Campos opcionais

- data
- metadata

---

# 17.6 Convenção REST

Padrão

```
/api/v1/
```

Endpoints

```
GET /pieces

GET /pieces/{id}

GET /telemetry

GET /stations

GET /alarms

GET /statistics

POST /simulation

GET /health
```

---

# 17.7 Organização dos Notebooks

Todos os notebooks seguirão a mesma estrutura.

```
1. Objetivo

2. Importação

3. Leitura

4. Limpeza

5. Estatística

6. Visualização

7. Conclusões
```

---

# 17.8 Convenção Git

Fluxo

```
main

↓

develop

↓

feature/*

↓

release/*

↓

hotfix/*
```

Pull Requests obrigatórios.

---

# 17.9 Docker

Cada projeto deverá possuir

```
Dockerfile

docker-compose.yml

.env

.gitignore
```

---

# 17.10 Pipeline CI/CD

Fluxo esperado

```
Commit

↓

GitHub

↓

GitHub Actions

↓

Testes

↓

Build Docker

↓

Docker Hub

↓

Deploy

↓

Cloud Run

↓

Aplicação disponível
```

---

# 17.11 Convenção para Dashboards

Todos os dashboards deverão apresentar pelo menos os seguintes indicadores.

Operacionais

- Produção por hora
- Produção por turno
- Peças aprovadas
- Peças rejeitadas
- Alarmes ativos

Qualidade

- Taxa de defeitos
- Distribuição por cor
- Tempo médio de processamento

Infraestrutura

- Disponibilidade da aplicação
- Status da API
- Consumo de recursos

---

# 17.12 Padrões de Documentação

Todos os projetos deverão possuir

README contendo

- descrição
- arquitetura
- tecnologias
- instalação
- execução
- estrutura
- autores

---

# 17.13 Integração entre as Disciplinas

## Automação Industrial

Produz

- eventos MQTT
- telemetria
- banco operacional

Consumido por

- Ciência de Dados
- DevOps

---

## Ciência de Dados

Consome

- PostgreSQL
- CSV
- API

Produz

- notebooks
- dashboards analíticos
- indicadores

---

## DevOps & Computação em Nuvem

Consome

- API
- banco
- frontend

Produz

- pipeline
- containers
- deploy
- observabilidade

---

# 17.14 Arquitetura Final do Projeto

```
                 Smart N1
                     │
             Sensores / Atuadores
                     │
                    CLP
                     │
          IO-Link / Profinet
                     │
               Node-RED Gateway
                     │
                MQTT Broker
                     │
         ┌───────────┴───────────┐
         │                       │
         ▼                       ▼
 Collector Python           Grafana
         │
         ▼
 PostgreSQL / Cloud SQL
         │
         ▼
      FastAPI
         │
         ▼
 React / Next.js
         │
         ▼
     Docker
         │
         ▼
   GitHub Actions
         │
         ▼
     Cloud Run
         │
         ▼
   Usuários Finais
```

---

## Objetivo da Padronização

A utilização de padrões comuns entre as três disciplinas busca reproduzir um ambiente profissional de desenvolvimento de software para Indústria 4.0.

Ao compartilhar arquitetura, nomenclatura, estrutura de projetos e modelos de integração, os alunos deixam de desenvolver exercícios isolados e passam a evoluir continuamente uma única solução tecnológica ao longo do semestre, fortalecendo a interdisciplinaridade, a reutilização de código e a compreensão do ciclo completo de desenvolvimento de sistemas industriais modernos.


# 18. Roadmap de Evolução do Projeto Integrador

## Visão Geral

Ao longo do semestre, todas as disciplinas contribuirão para a construção de uma plataforma de monitoramento industrial baseada na planta Smart N1.

Cada etapa representa uma evolução incremental do sistema, permitindo que os estudantes acompanhem o ciclo completo de desenvolvimento de uma solução para Indústria 4.0.

---

# Sprint 0 — Preparação

## Objetivos

- Conhecer a Smart N1
- Conhecer a arquitetura da solução
- Configurar ambiente de desenvolvimento

### Automação

- Apresentação da planta
- Sensores
- Atuadores
- CLP

### Ciência de Dados

- Introdução aos dados industriais
- Estrutura dos datasets

### DevOps & Cloud

- Git
- GitHub
- Organização do projeto

---

Entregáveis

- Organização dos grupos
- Repositório GitHub
- Estrutura inicial do projeto

---

# Sprint 1 — Conectividade Industrial

Objetivo

A Smart N1 passa a publicar eventos.

### Automação

- MQTT
- Node-RED
- Broker

### Ciência de Dados

- Entender estrutura dos eventos

### DevOps

- Primeiro workflow GitHub

---

Entregáveis

✔ Broker MQTT

✔ Primeiro tópico MQTT

✔ Eventos publicados

Exemplo

```
smartn1/color/read
```

---

# Sprint 2 — Persistência

Objetivo

Os eventos passam a ser armazenados.

### Automação

- Collector MQTT

### Ciência de Dados

- Estrutura do banco

### DevOps

- Docker Compose

---

Entregáveis

```
MQTT

↓

Collector

↓

PostgreSQL
```

---

# Sprint 3 — APIs

Objetivo

Os dados passam a ser disponibilizados.

### Automação

- Integração

### Ciência de Dados

- Consultas

### DevOps

- FastAPI

---

Endpoints

```
GET /pieces

GET /telemetry

GET /alarms
```

---

# Sprint 4 — Dashboards

Objetivo

Visualizar produção.

### Automação

KPIs operacionais.

### Ciência de Dados

Visualizações.

### DevOps

Grafana.

---

Entregáveis

Dashboard operacional.

---

# Sprint 5 — Análise dos Dados

Objetivo

Transformar dados em informação.

### Ciência de Dados

Notebook 1

- limpeza

Notebook 2

- estatística

Notebook 3

- correlação

Notebook 4

- dashboards

---

Entregáveis

Primeiro relatório analítico.

---

# Sprint 6 — Containerização

Objetivo

Preparar para deploy.

### DevOps

Docker.

Docker Hub.

Compose.

---

Entregáveis

```
docker build

docker compose

docker push
```

---

# Sprint 7 — Cloud

Objetivo

Publicar aplicação.

### DevOps

Cloud Run

Cloud SQL

Cloud Storage

---

Entregáveis

Aplicação disponível na GCP.

---

# Sprint 8 — CI/CD

Objetivo

Automatizar todo o processo.

Pipeline

```
Commit

↓

GitHub

↓

Actions

↓

Testes

↓

Docker

↓

Deploy
```

---

Entregáveis

Deploy automático.

---

# Sprint 9 — Observabilidade

Objetivo

Monitorar o sistema.

### DevOps

Cloud Logging

Cloud Monitoring

Alertas

---

Entregáveis

Dashboard operacional da infraestrutura.

---

# Sprint 10 — Projeto Final

Cada grupo deverá entregar uma solução completa.

---

Arquitetura

```
Smart N1

↓

MQTT

↓

Collector

↓

Banco

↓

API

↓

Dashboard

↓

Cloud
```

---

# Entregáveis Obrigatórios

## Automação

- Broker MQTT funcionando
- Integração da Smart N1
- Eventos publicados

---

## Ciência de Dados

- Notebook completo
- Relatório analítico
- Dashboard
- KPIs

---

## DevOps

- Repositório GitHub
- GitFlow
- GitHub Actions
- Docker
- Deploy GCP
- Vercel
- Cloud SQL
- Observabilidade

---

# Evolução do Sistema

```
Semana 1

Conhecer a Smart N1

        │

Semana 2

Receber eventos MQTT

        │

Semana 3

Persistir dados

        │

Semana 4

Criar APIs

        │

Semana 5

Visualizar dashboards

        │

Semana 6

Analisar dados

        │

Semana 7

Containerizar

        │

Semana 8

Publicar na nuvem

        │

Semana 9

Automatizar CI/CD

        │

Semana 10

Monitorar

        │

Semana 11

Apresentação Final
```

---

# Mapa de Responsabilidades

| Sprint | Automação Industrial | Ciência de Dados | DevOps & Cloud |
|---------|----------------------|------------------|----------------|
| 0 | Conhecer a Smart N1 | Conhecer os dados | Configurar Git e GitHub |
| 1 | Publicar eventos MQTT | Entender o modelo dos eventos | Configurar repositório e workflow inicial |
| 2 | Integrar Node-RED ao banco | Modelar dados e validar qualidade | Containerizar banco e collector |
| 3 | Expor dados para consumo | Explorar consultas | Desenvolver API FastAPI |
| 4 | Definir KPIs operacionais | Criar gráficos e indicadores | Implantar Grafana |
| 5 | Validar telemetria | EDA, estatística e séries temporais | Disponibilizar API para consumo |
| 6 | Executar testes integrados | Consumir ambiente containerizado | Docker e Docker Hub |
| 7 | Integrar com serviços em nuvem | Consumir banco na GCP | Cloud Run, Cloud SQL e Storage |
| 8 | Validar integração fim a fim | Automatizar atualização dos notebooks | Pipeline CI/CD completo |
| 9 | Monitorar eventos da planta | Gerar relatório executivo | Logging, Monitoring e alertas |
| 10 | Demonstrar integração TI/TA | Apresentar insights de negócio | Demonstrar esteira DevOps completa |
