# Automação Industrial & Integração TI/TA
## Ecossistema Integrado de Aprendizagem (Smart N1)

[![Node-RED](https://img.shields.io/badge/node--red-3.1.0-red.svg)](https://nodered.org/)
[![MQTT](https://img.shields.io/badge/mqtt-3.1.1-blue.svg)](https://mqtt.org/)
[![Python](https://img.shields.io/badge/python-3.11+-yellow.svg)](https://www.python.org/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-15+-blue.svg)](https://www.postgresql.org/)
[![Grafana](https://img.shields.io/badge/grafana-10.0-orange.svg)](https://grafana.com/)

Este repositório contém o material prático e as orientações da disciplina de **Automação Industrial** (80 horas / 20 Semanas / 13 Encontros Técnicos / 2 Avaliações Regimentais).

No modelo do **Ecossistema Integrado de Aprendizagem**, a disciplina de Automação Industrial é responsável pela **Camada de Aquisição e Integração de Dados (OT/IT)**. A planta física/didática **Smart N1** atua como a fonte oficial de dados e eventos industriais para todas as disciplinas do semestre.

---

## Papel no Ecossistema Integrado

```text
┌──────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│   Automação Industrial   │ ---> │    Ciência de Dados    │ ---> │ DevOps & Cloud (Nuvem) │
│(Aquisição, Sensores & TA)│      │(EDA, Análise & Insights│      │  (Deploy & Operação)   │
└──────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

- **Automação Industrial (Esta Disciplina)**: Não foca exclusivamente em programação isolada de CLPs, mas sim na **Integração TI/TA (Tecnologia da Informação / Tecnologia da Automação)**. Conecta os sensores da planta Smart N1 a gateways de comunicação (Node-RED) e publica tópicos MQTT estruturados.
- **Ciência de Dados**: Consome as mensagens MQTT e os bancos de dados preenchidos pela automação para realizar análises preditivas, estatística e KPIs de produção (OEE).
- **DevOps & Computação em Nuvem**: Empacota o ecossistema em contêineres Docker, constrói esteiras CI/CD e publica o banco de dados e os dashboards na nuvem (GCP).

---

## Arquitetura da Planta Smart N1 & Fluxo de Dados

```text
┌──────────────────────────────────────────────────────────┐
│                   Planta Smart N1                        │
│ Sensores (Eletromecânicos, Indutivos, Ópticos, RFID)     │
│ Atuadores (Pneumáticos, Esteira, Motor de Perfuração)    │
└────────────────────────────┬─────────────────────────────┘
                             │ IO-Link / Profinet
                             ▼
┌──────────────────────────────────────────────────────────┐
│              Controlador Programável (CLP)               │
└────────────────────────────┬─────────────────────────────┘
                             │ Modbus TCP / OPC UA
                             ▼
┌──────────────────────────────────────────────────────────┐
│               Gateway Node-RED (TI / TA)                 │
└────────────────────────────┬─────────────────────────────┘
                             │ MQTT Protocol
                             ▼
┌──────────────────────────────────────────────────────────┐
│             MQTT Broker (Eclipse Mosquitto)              │
└──────────────┬─────────────────────────────┬─────────────┘
               │                             │
               ▼                             ▼
   ┌──────────────────────┐      ┌──────────────────────┐
   │ Coletor / PostgreSQL │      │ Operational Dashboard│
   │  (Banco de Dados)    │      │      (Grafana)       │
   └──────────────────────┘      └──────────────────────┘
```

---

## Padronização de Tópicos e JSON MQTT

Toda a telemetria da célula Smart N1 é convertida para eventos padronizados no padrão JSON.

### Tópicos Disponíveis:
- `smartn1/entry`: Entrada de novas peças no processo.
- `smartn1/color`: Detecção de cor (sensores fotoelétricos/ópticos).
- `smartn1/rfid`: Leitura e gravação de tags RFID (rastreabilidade).
- `smartn1/drill`: Status do motor de perfuração e acionamento.
- `smartn1/sorter`: Atuação dos cilindros desvios/separadores.
- `smartn1/alarm`: Alarmes operacionais e falhas de processo.
- `smartn1/status`: Telemetria contínua de ciclo de esteira e energia.

### Exemplo de Payload de Telemetria (`smartn1/color`):
```json
{
  "timestamp": "2026-09-15T20:31:52Z",
  "plant": "SmartN1",
  "station": "ColorSensor",
  "pieceId": "P000124",
  "event": "piece.detected",
  "status": "OK",
  "data": {
    "color": "Blue"
  }
}
```

---

## Cronograma Unificado (20 Semanas)

> **Nota sobre os Sábados de Reposição:** Os alunos não possuem aulas presenciais aos sábados. As semanas/datas de reposição (22/Ago, 19/Set, 07/Nov, 05/Dez) indicadas na tabela referem-se a **Exercícios para Casa / Atividades Assíncronas (Estudo Dirigido)** disponibilizados no repositório.

| Sem. | Categoria | Conteúdo / Tópico Prático | Turma Terça (N2) | Turma Quarta (N2-S) | Atividade EAD / Casa (Sábados de Reposição) |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **01** | **Encontro 01** | Introdução à Automação Industrial e Arquitetura TI/TA (Pirâmide ISA-95) | 04/Ago | 05/Ago | — |
| **02** | **Encontro 02** | Dispositivos Industriais I: Sensores Eletromecânicos, Indutivos, Capacitivos e Magnéticos | 11/Ago | 12/Ago | — |
| **03** | **Encontro 03** | Dispositivos Industriais II: Sensores Ultrassônicos, Fotoelétricos e Leitores RFID | 18/Ago | 19/Ago | — |
| **04** | **Encontro 04** | Atuadores Industriais: Pneumáticos, Hidráulicos, Motores e Inversores de Frequência | 25/Ago | 26/Ago | Exercício para Casa 1 *(Ref. Sáb 22/Ago)* |
| **05** | **Encontro 05** | Robótica Industrial: Tipos de robôs, células de manipulação e segurança fabril | 01/Set | 02/Set | — |
| **06** | **PII 1** | Semana de PII 1 — Acompanhamento da Arquitetura do Projeto Integrador | 08/Set | 09/Set | — |
| **07** | **Encontro 06** | Controladores Industriais I: Arquitetura de Hardware de CLPs e PCs Industriais | 15/Set | 16/Set | Exercício para Casa 2 *(Ref. Sáb 19/Set)* |
| **08** | **Avaliação N1** | **Primeira Avaliação Regimental (N1) — Teórico-Prática** | **22/Set** | **23/Set** | — |
| **09** | **PII 2** | Semana de PII 2 — Avaliação da 2ª Etapa do PII (Protocolos TI/TA) | 29/Set | 30/Set | — |
| **10** | **Encontro 07** | Controladores Industriais II: Ciclo de Scan, Endereçamento e Linguagens (ST / Ladder) | 06/Out | 07/Out | — |
| **11** | **Evento** | Semana de Tecnologia (Palestras e Workshops) | 14–16/Out | 14/Out | — |
| **12** | **Encontro 08** | Protocolos de Comunicação Industrial (Modbus TCP, OPC UA, MQTT, EtherNet/IP) | 20/Out | 21/Out | — |
| **13** | **Encontro 09** | Prática TI/TA I: Ingestão de Dados via Node-RED e Broker MQTT (Mosquitto) | 27/Out | 28/Out | — |
| **14** | **PII 3** | Semana de PII 3 — Avaliação da 3ª Etapa do PII (Integração com BD) | 03/Nov | 04/Nov | Exercício para Casa 3 *(Ref. Sáb 07/Nov)* |
| **15** | **Encontro 10** | Prática TI/TA II: Armazenamento de Telemetria Industrial em Banco de Dados (PostgreSQL) | 10/Nov | 11/Nov | — |
| **16** | **Encontro 11** | Prática TI/TA III: Construção de Dashboards Operacionais em Tempo Real (Grafana) | 17/Nov | 18/Nov | — |
| **17** | **Avaliação N2** | **Segunda Avaliação Regimental (N2) — Demonstração das Soluções TI/TA** | **24/Nov** | **25/Nov** | — |
| **18** | **PII 4** | Semana de PII 4 — Entrega Final e Banca do PII | 01/Dez | 02/Dez | Exercício para Casa 4 *(Ref. Sáb 05/Dez)* |
| **19** | **Recuperação**| Semana de Recuperação (Avaliações de Recuperação) | 08/Dez | 09/Dez | — |
| **20** | **Fechamento** | Fechamento do Semestre e Lançamento de Notas | 15/Dez | 16/Dez | — |

---

## Produtos e Entregáveis da Disciplina

Ao longo da disciplina, as equipes desenvolverão:
1. **Gateway MQTT & Flow Node-RED**: Fluxos visuais configurados para receber dados via OPC UA/Modbus e publicar no Mosquitto.
2. **Pipelines de Persistência**: Scripts Python de ingestão (*data collector*) registrando a telemetria na tabela `telemetry` do PostgreSQL.
3. **Dashboard Operacional Grafana**: Painel de supervisão exibindo o tempo de ciclo, taxa de descarte, status de atuadores e histórico de leituras RFID.

---

## Referências Bibliográficas

1. **GROOVER, Mikell P.** *Automação Industrial e Sistemas de Manufatura*. 3. ed. São Paulo: Pearson Prentice Hall, 2011.
2. **FRANCHI, Claiton Moro.** *Controladores Lógicos Programáveis: Sistemas Discretos*. 2. ed. São Paulo: Érica, 2012.
3. **SILVEIRA, Paulo R. da; SANTOS, Winderson E. dos.** *Automação Fácil: Industriais, Prediais e Residenciais*. 4. ed. São Paulo: Érica, 2009.
4. **CAPELLI, Alexandre.** *Automação Industrial: Controle do Processo e Manufatura*. 2. ed. São Paulo: Érica, 2013.
