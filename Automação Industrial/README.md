# Automação Industrial

Este repositório contém o plano de ensino, ementa, cronograma detalhado, referências bibliográficas e diretrizes das atividades práticas para a unidade curricular de **Automação Industrial**.

---

## Ementa da Unidade Curricular

**Carga Horária:** 80 aulas (66h40min relógio)

### Descrição
Ao final dessa unidade curricular o estudante será capaz de desenvolver sistemas de automação para coleta e processamento de dados em plantas industriais. Para tanto serão abordados os seguintes conteúdos: Dispositivos Industriais; Controladores Industriais; Integração TI/TA (Tecnologia da Informação / Tecnologia da Automação).

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas a sistemas de automação para coleta e processamento de dados em plantas industriais, integrando o chão de fábrica (OT) com os sistemas de TI corporativos.

### Capacidades Técnicas
- Analisar o funcionamento de sensores, atuadores e controladores de acordo com as aplicações industriais.
- Programar softwares de tecnologia de automação para integração de sistemas TI/TA.
- Coletar dados de controladores industriais para tomada de decisões operacionais e estratégicas.

### Capacidades Socioemocionais
- **Ética:** Apresentar comportamento ético na conduta profissional, vivenciando valores, respeitando princípios e praticando a inclusão.
- **Pensamento crítico e inovação:** Expressar-se de modo crítico e com base em evidências claras, ponderando fatos, ideias e visões técnicas.
- **Resolução de problemas complexos:** Reconhecer demandas e apresentar soluções proativas para cenários industriais reais.

### Conteúdo Programático (Conhecimentos)
1. **Dispositivos e Controladores Industriais:**
   - Sensores Eletromecânicos, Indutivos, Capacitivos, Magnéticos, Ultrassônicos, Fotoelétricos e Identificação RFID.
   - Atuadores Pneumáticos, Válvulas Solenoide, Motores Elétricos, Inversores de Frequência (VFD) e Servomotores.
   - Arquitetura de Hardware de Controladores (CLP, PC Industrial), cartões E/S, ciclo de SCAN e IHMs.
2. **Arquitetura IIoT e Comunicação de Dados:**
   - Protocolo MQTT, Broker Mosquitto/HiveMQ, arquitetura Publisher/Subscriber e payloads JSON.
   - Flow-Based Programming com Node-RED para ingestão, tratamento e roteamento de telemetria.
3. **Persistência de Telemetria de Séries Temporais:**
   - Bancos de Dados de Séries Temporais (Time-Series DB) com InfluxDB.
   - Estruturação de Buckets, Measurements, Tags, Fields e consultas via Flux.
4. **Análise Avançada e Aprendizado de Máquina (CRISP-DM + ML):**
   - Aplicação da metodologia CRISP-DM em dados armazenados no InfluxDB.
   - Detecção de Anomalias em telemetria de sensores (Isolation Forest / K-Means).
   - Manutenção Preditiva e cálculo automatizado de OEE em sinergia com Ciência de Dados.

---

## Referências Bibliográficas

### Básicas
1. **AGUIRRE, Luis Antonio.** *Fundamentos de instrumentação*. São Paulo: Pearson Education do Brasil, 2013. E-book (354 p.).
2. **FRANCHI, Claiton Moro; CAMARGO, Valter Luís Arlindo de.** *Controladores lógicos programáveis: sistemas discretos*. 2. ed. São Paulo: Érica, 2009.
3. **LIRA, Valdemir Martins; ANDRADE, Alexandre Acácio de; CAPOVILLA, Carlos Eduardo.** *Tecnologias para automação: circuitos pneumáticos - óleo-hidráulicos - controladores lógicos programáveis (CLP) e microcontrolador*. São Paulo: Blucher, 2024. E-book (21 p.).
4. **TANENBAUM, Andrew S.; FEAMSTER, Nick; WETHERALL, D.** *Redes de computadores*. 6. ed. São Paulo: Pearson; Porto Alegre: Bookman, 2021. E-book (593 p.).

### Complementares
1. **FIALHO, Arivelto Bustamante.** *Automação hidráulica: projetos, dimensionamento e análise de circuitos*. 6. ed. Rev. atual. São Paulo: Érica, 2011.
2. **GROOVER, M. P.** *Automação industrial e sistemas de manufatura*. 3. ed. São Paulo: Pearson, 2011. E-book (596 p.).
3. **MORAES, Cícero Couto de; CASTRUCCI, Plinio de Lauro.** *Engenharia de automação industrial*. 2. ed. rev. amp. São Paulo: LTC, 2007.
4. **PRUDENTE, Francesco.** *Automação industrial: PLC: programação e instalação*. Rio de Janeiro: LTC, c2010.
5. **SILVA, Edilson Alfredo da.** *Introdução às linguagens de programação para CLP*. São Paulo: Blucher, 2016. E-book (354 p.).

---

## Critérios de Avaliação e Composição de Nota

A nota final da disciplina será composta por:
- **Avaliações Teórico-Práticas (P1 e P2):** Peso 60%
- **Atividades Práticas de Laboratório / Entregas Semanais:** Peso 40%

---

## Cronograma de Aulas da Disciplina (11 Aulas Práticas)

| Aula | Foco Teórico / Conteúdo | Atividade / Detalhes |
| :---: | :--- | :--- |
| **01** | [Arquitetura TI/TA e Pirâmide ISA-95](aulas/semana_01.ipynb) | Conceitos de integração OT/IT e modelo de eventos fabris. |
| **02** | [Prática de Laboratório: Reconhecimento Físico de Componentes](aulas/semana_02.ipynb) | Reconhecimento prático de sensores discretos, CLPs, IHMs e atuadores. |
| **03** | [Teoria Geral dos Dispositivos Industriais (Sensores, Atuadores e Controladores)](aulas/semana_03.ipynb) | Fundamentação teórica de sensores, atuadores e arquitetura CLP/IHM. |
| **04** | [Protocolos de Comunicação Industrial & Broker MQTT](aulas/semana_04.md) | Arquitetura Pub/Sub, Broker MQTT Mosquitto e payloads JSON para IIoT. |
| **05** | [Orquestração de Dados e Fluxos IIoT com Node-RED](aulas/semana_05.md) | Flow-based programming em Node-RED, tratamento de mensagens e integração. |
| **06** | [Persistência de Telemetria em Banco de Dados Temporal (InfluxDB)](aulas/semana_07.md) | Armazenamento de séries temporais, InfluxDB, Flux queries e retenção. |
| **07** | [Ciclo CRISP-DM Aplicado a Séries Temporais Industriais](aulas/semana_08.md) | Entendimento do negócio/dados não relacionais no InfluxDB e eng. de recursos. |
| **08** | [Machine Learning em Telemetria: Detecção de Anomalias em Sensores](aulas/semana_09.md) | Aplicação de Isolation Forest / K-Means em dados de campo em tempo real. |
| **09** | [Machine Learning em Telemetria: Manutenção Preditiva & OEE](aulas/semana_10.md) | Predição de falhas e cálculo de OEE em sinergia com Ciência de Dados. |
| **10** | [Ingestão Integrada de Dados & Dashboards de Monitoramento](aulas/semana_11.md) | Painéis analíticos e monitoramento de planta em tempo real. |
| **11** | [Consolidação Técnica e Revisão Integrada](aulas/semana_11.md) | Revisão prática da pilha IIoT/ML e preparação para encerramento. |
