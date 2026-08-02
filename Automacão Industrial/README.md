# Automação Industrial & Integração TI/TA
## Ecossistema Integrado de Aprendizagem (Smart N1)

[![Node-RED](https://img.shields.io/badge/node--red-3.1.0-red.svg)](https://nodered.org/)
[![MQTT](https://img.shields.io/badge/mqtt-3.1.1-blue.svg)](https://mqtt.org/)
[![Python](https://img.shields.io/badge/python-3.11+-yellow.svg)](https://www.python.org/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-15+-blue.svg)](https://www.postgresql.org/)
[![Grafana](https://img.shields.io/badge/grafana-10.0-orange.svg)](https://grafana.com/)

Este repositório contém o material prático e as orientações da disciplina de **Automação Industrial** (80 horas-aula de 50min / 66h40min relógio / 20 Semanas / 13 Encontros Técnicos / 2 Avaliações Regimentais).

No modelo do **Ecossistema Integrado de Aprendizagem**, a disciplina de Automação Industrial é responsável pela **Camada de Aquisição e Integração de Dados (OT/IT)**. A planta física/didática **Smart N1** atua como a fonte oficial de dados e eventos industriais para todas as disciplinas do semestre.

---

## Papel no Ecossistema Integrado

```text
┌──────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│   Automação Industrial   │ ---> │    Ciência de Dados    │ ---> │ DevOps & Cloud (Nuvem) │
│(Aquisição, Sensores & TA)│      │(EDA, Análise & Insights│      │  (Deploy & Operação)   │
└──────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

- **Automação Industrial (Esta Disciplina)**: Foca na **Integração TI/TA (Tecnologia da Informação / Tecnologia da Automação)**. Conecta os sensores da planta Smart N1 a gateways de comunicação (Node-RED) e publica tópicos MQTT estruturados.
- **Ciência de Dados**: Consome as mensagens MQTT e os bancos de dados preenchidos pela automação para realizar análises preditivas, estatística e KPIs de produção (OEE).
- **DevOps & Computação em Nuvem**: Empacota o ecossistema em contêineres Docker, constrói esteiras CI/CD e publica o banco de dados e os dashboards na nuvem (GCP).

---

## Ementa Oficial Completa (Unidade Curricular)

### Descrição
Ao final dessa unidade curricular o estudante será capaz de desenvolver sistemas de automação para coleta e processamento de dados em plantas industriais. Para tanto serão abordados os seguintes conteúdos: Dispositivos Industriais; Controladores Industriais.

### Objetivo General
Desenvolver capacidades técnicas e socioemocionais relacionadas à sistemas de automação para coleta e processamento de dados em plantas industriais.

### Capacidades Técnicas
- Analisar o funcionamento de sensores, atuadores e controladores de acordo com as aplicações industriais.
- Programar softwares de tecnologia de automação para integração de sistemas TI/TA.
- Coletar dados de controladores industriais para tomada de decisões.

### Capacidades Socioemocionais
- **Ética:** Apresentar comportamento ético na conduta profissional, vivenciando valores, respeitando princípios, praticando a inclusão e justiça social, respeitando diferenças individuais e valorizando o meio ambiente.
- **Pensamento crítico e inovação:** Expressar-se de modo crítico e com base em evidências claras, ponderando diferentes fatos, ideias, opiniões, visões e perspectivas aplicáveis às atividades sob a sua responsabilidade.
- **Resolução de problemas complexos:** Reconhecer demandas e apresentar possibilidades para resolução de problemas em contextos de sua atuação profissional, demonstrando postura proativa.

### Conteúdo Programático / Conhecimentos
1. **Dispositivos Industriais**
   - 1.1. Sensores (1.1.1. Eletromecânico, 1.1.2. Indutivo, 1.1.3. Capacitivo, 1.1.4. Magnético/Reed Switch, 1.1.5. Ultrassônicos, 1.1.6. Fotoelétrico)
   - 1.2. Atuadores (1.2.1. Pneumáticos, 1.2.2. Hidráulicos, 1.2.3. Motores e Inversor, 1.2.4. Servomotores e Servo Drivers)
   - 1.3. Robôs Industriais
2. **Controladores Industriais**
   - 2.1. Estrutura de hardware (2.1.1. Controladores Programáveis, 2.1.2. PC Industrial)
   - 2.2. Princípios de operação (2.2.1. Controladores Programáveis, 2.2.2. PC Industrial)
   - 2.3. Endereçamento
   - 2.4. Tipos de dados
   - 2.5. Linguagens de programação com Texto Estruturado (ST)
   - 2.6. Softwares de Desenvolvimento
3. **Integração com a Tecnologia da Informação**
   - 3.1. Comunicação entre o CLP e sistemas de TI (3.1.1. Protocolos industriais, 3.1.2. Implementação da comunicação)
   - 3.2. Banco de Dados
   - 3.3. Coletar dados (3.3.1. Para área de análise de dados, 3.3.2. Para planejamento e outros setores)
   - 3.4. Implementação de dashboards (3.4.1. Visualização de dados em tempo real, 3.4.2. Monitoramento, 3.4.3. Enviar e receber de sinais para o CLP)

### Ambientes Pedagógicos
- Sala de aula.
- Biblioteca.
- Laboratório de CLP.
- Laboratório de Redes.
- Planta industrial.

---

## Referências Bibliográficas Oficiais

### Referências Básicas
1. **AGUIRRE, Luis Antonio.** *Fundamentos de instrumentação*. São Paulo: Pearson Education do Brasil, 2013. E-book (354 p.).
2. **FRANCHI, Claiton Moro; CAMARGO, Valter Luís Arlindo de.** *Controladores lógicos programáveis: sistemas discretos*. 2. ed. São Paulo: Érica, 2009.
3. **LIRA, Valdemir Martins; ANDRADE, Alexandre Acácio de; CAPOVILLA, Carlos Eduardo.** *Tecnologias para automação: circuitos pneumáticos - óleo-hidráulicos - controladores lógicos programáveis (CLP) e microcontrolador*. São Paulo: Blucher, 2024. E-book (21 p.).
4. **TANENBAUM, Andrew S.; FEAMSTER, Nick; WETHERALL, D.** *Redes de computadores*. 6. ed. São Paulo: Pearson; Porto Alegre: Bookman, 2021. E-book (593 p.).

### Referências Complementares
1. **FIALHO, Arivelto Bustamante.** *Automação hidráulica: projetos, dimensionamento e análise de circuitos*. 6. ed. Rev. atual. São Paulo: Érica, 2011.
2. **GROOVER, M. P.** *Automação industrial e sistemas de manufatura*. 3. ed. São Paulo: Pearson, 2011. E-book (596 p.).
3. **MORAES, Cícero Couto de; CASTRUCCI, Plinio de Lauro.** *Engenharia de automação industrial*. 2. ed. rev. amp. São Paulo: LTC, 2007.
4. **PRUDENTE, Francesco.** *Automação industrial: PLC: programação e instalação*. Rio de Janeiro: LTC, c2010.
5. **PRUDENTE, Francesco.** *PLC S7-1200 teoria e aplicações: curso introdutório*. Rio de Janeiro: LTC, 2014.
6. **SERVIÇO NACIONAL DE APRENDIZAGEM INDUSTRIAL.** *Controlador lógico programável*. São Paulo: SENAI-SP Editora, 2016.
7. **SILVA, Edilson Alfredo da.** *Introdução às linguagens de programação para CLP*. São Paulo: Blucher, 2016. E-book (354 p.).

---

## Matriz de Mapeamento Bibliográfico por Encontro Prático

| Encontro | Tema Central | Conhecimentos da Ementa | Referências Básicas | Referências Complementares |
| :---: | :--- | :--- | :--- | :--- |
| **01** | Introdução à Automação Industrial e Arquitetura TI/TA (ISA-95) | 1.1 Sensores; 2.1 Hardware | Aguirre Cap. 1; Franchi & Camargo Cap. 1 | Groover Cap. 1, 2; Moraes & Castrucci Cap. 1 |
| **02** | Dispositivos Industriais I: Sensores Eletromecânicos, Indutivos, Capacitivos, Magnéticos | 1.1.1 a 1.1.4 Sensores | Aguirre Cap. 2; Lira et al. Cap. 1 | Groover Cap. 6; Prudente (2010) Cap. 2 |
| **03** | Dispositivos Industriais II: Sensores Ultrassônicos, Fotoelétricos e Leitores RFID | 1.1.5 e 1.1.6 Sensores | Aguirre Cap. 3, 4; Lira et al. Cap. 1 | Groover Cap. 6; Moraes & Castrucci Cap. 3 |
| **04** | Atuadores Industriais: Pneumáticos, Hidráulicos, Motores e Inversores de Frequência | 1.2 Atuadores (1.2.1 a 1.2.4) | Lira et al. Cap. 2, 3 | Fialho Cap. 1-3; Groover Cap. 3 |
| **05** | Robótica Industrial: Tipos de robôs, células de manipulação e segurança fabril | 1.3 Robôs Industriais | Aguirre Cap. 5 | Groover Cap. 7, 8; Moraes & Castrucci Cap. 9 |
| **06** | Controladores Industriais I: Arquitetura de Hardware de CLPs e PCs Industriais | 2.1 Estrutura de Hardware (CLP e PC Ind.) | Franchi & Camargo Cap. 1, 2 | Silva Cap. 1; SENAI-SP Cap. 1 |
| **07** | Controladores Industriais II: Ciclo de Scan, Endereçamento e Linguagem ST | 2.2 Princípios de Operação; 2.3 a 2.5 ST | Franchi & Camargo Cap. 3, 4 | Silva Cap. 2, 4; Prudente (2014) Cap. 3 |
| **08** | Protocolos de Comunicação Industrial (Modbus TCP, OPC UA, MQTT, EtherNet/IP) | 3.1.1 Protocolos Industriais | Tanenbaum et al. Cap. 1, 5 | Groover Cap. 9; Moraes & Castrucci Cap. 7 |
| **09** | Prática TI/TA I: Ingestão de Dados via Node-RED e Broker MQTT (Mosquitto) | 3.1.2 Implementação Comunicação; 3.3 Coletar Dados | Tanenbaum et al. Cap. 6; Franchi & Camargo Cap. 8 | Groover Cap. 9, 10 |
| **10** | Prática TI/TA II: Armazenamento de Telemetria Industrial em Banco de Dados (PostgreSQL) | 3.2 Banco de Dados; 3.3.1 Área de Análise | Franchi & Camargo Cap. 9; Tanenbaum et al. Cap. 7 | Moraes & Castrucci Cap. 10 |
| **11** | Prática TI/TA III: Construção de Dashboards Operacionais em Tempo Real (Grafana) | 3.4 Implementação de Dashboards (3.4.1 a 3.4.3) | Franchi & Camargo Cap. 9 | Groover Cap. 10; Moraes & Castrucci Cap. 11 |
| **12** | Apresentação das Soluções TI/TA e Demonstração do Fluxo de Dados | 1.1 a 3.4 Consolidação TI/TA | Todos os títulos básicos | Todos os títulos complementares |

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
