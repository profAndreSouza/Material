# Aula 01: Arquitetura TI/TA e Pirâmide ISA-95

## 1. Visão Geral & Objetivos Didáticos

Esta aula estabelece a fundação conceitual da disciplina de **Automação Industrial**, abordando a evolução dos sistemas de controle, a tradicional **Pirâmide ISA-95** (ANSI/ISA-95) e o paradigma atual da **Convergência TI/TA (IT/OT Convergence)** no contexto da Indústria 4.0.

### Objetivos de Aprendizagem:
- Compreender a separação histórica e a convergência moderna entre a Tecnologia da Automação (TA / OT - *Operational Technology*) e a Tecnologia da Informação (TI / IT - *Information Technology*).
- Dominar a hierarquia funcional de 5 níveis descrita pela norma **ISA-95**.
- Compreender a arquitetura de eventos fabris e o papel da telemetria de campo no ecossistema da célula fabril **Smart N1**.

---

## 2. Conteúdo Teórico de Referência

### 2.1 A Norma ISA-95 e a Hierarquia da Manufatura

A norma **ANSI/ISA-95** (globalmente adotada como IEC 62264) define a interface entre os sistemas corporativos de gestão e os sistemas de controle de produção. Ela é organizada em 5 níveis hierárquicos:

| Nível ISA-95 | Denominação | Função Principal | Equipamentos / Sistemas Típicos | Latência / Escala Temporal |
| :---: | :--- | :--- | :--- | :---: |
| **Nível 4** | Planejamento & Logística | Gestão de recursos corporativos, compras, finanças e vendas. | ERP (*Enterprise Resource Planning*), SCM. | Dias, Semanas, Meses |
| **Nível 3** | Gestão de Operações de Manufatura | Gerenciamento da produção, sequenciamento de ordens, rastreabilidade e OEE. | MES (*Manufacturing Execution System*), MOM. | Horas, Turnos, Dias |
| **Nível 2** | Controle de Processos / Supervisão | Monitoramento em tempo real, controle supervisory e operação de linha. | SCADA, IHM (*Human-Machine Interface*). | Segundos, Minutos |
| **Nível 1** | Controle Discreto / Contínuo | Execução do ciclo de controle determinístico e lógica sequencial. | CLP (*PLC*), PAC, SDCD, Controladores de Malha. | Milissegundos (ms) |
| **Nível 0** | Processo Físico / Chão de Fábrica | Sensoriamento direto da planta e atuação nos mecanismos físicos. | Sensores (Indutivos, Ópticos), Atuadores, Motores. | Tempo Real / Microsegundos |

### 2.2 Convergência TI / TA (IT / OT Convergence)

Historicamente, o ambiente **TA (OT)** focava em disponibilidade, determinismo temporal, segurança física e ciclos de vida longos (10 a 20 anos), utilizando protocolos proprietários e redes fechadas. O ambiente **TI (IT)** focava em confidencialidade, volume de dados, flexibilidade e atualizações frequentes.

Na **Manufatura Avançada (Indústria 4.0)**, a barreira entre TI e TA é rompida pela **IIoT (Internet das Coisas Industrial)**:
- **Dados do Nível 0/1** (telemetria de corrente de motores, temperatura, chaveamento de sensores) alimentam diretamente algoritmos de **Ciência de Dados e Machine Learning** no Nível 3/4 ou na Nuvem.
- **Interoperabilidade:** O uso de protocolos leves e abertos (como **MQTT** e **OPC UA**) permite a extração de dados de controladores industriais sem comprometer o determinismo do ciclo de varredura (*scan*) do CLP.

### 2.3 Modelo de Eventos Fabris no Ecossistema Smart N1

Na célula **Smart N1**, cada transição de estado no chão de fábrica é tratada como um **Evento Fabril** estruturado. Em vez de registrar apenas estados estáticos, os sensores e controladores geram dados de telemetria contendo:
1. **Identificador da Origem (`source_id`):** Estação, CLP ou Sensor específico.
2. **Carimbo de Data/Hora (`timestamp`):** Precisão em milissegundos para ordenamento temporal.
3. **Tipo de Evento (`event_type`):** Ex.: Peça Detectada, Falha de Alimentação, Ciclo Concluído.
4. **Métricas / Payloads (`payload`):** Valores analógicos (pressão, temperatura) ou status discretos.

---

## 3. Aplicação no Ecossistema Smart N1

Durante a disciplina, utilizaremos a planta **Smart N1** como estudo de caso prático para integração vertical:
- **Camada Física (Níveis 0 e 1):** Sensores indutivos, fotoelétricos, atuadores pneumáticos e CLP da bancada.
- **Camada de Conectividade (Níveis 1 a 3):** Comunicação via **MQTT** e orquestração com **Node-RED**.
- **Camada de Persistência & Analytics (Nível 3 a 4):** Persistência no **InfluxDB** e modelagem analítica com **CRISP-DM + ML** em linguagem Python.

---

## 4. Questões de Fixação e Autoavaliação

1. **(Conceitual)** Diferencie os focos prioritários da Tecnologia da Informação (TI) e da Tecnologia da Automação (TA) no tocante a determinismo temporal e ciclo de vida dos equipamentos.
2. **(Hierarquia ISA-95)** Em qual nível da norma ISA-95 se enquadra um Supervisory Control and Data Acquisition (SCADA) e qual o seu papel no diálogo entre o CLP (Nível 1) e o MES (Nível 3)?
3. **(Arquitetura de Dados)** Por que a abordagem tradicional da Pirâmide ISA-95 puramente hierárquica está evoluindo para redes de dados em malha (*Industrial Data Mesh / IIoT*)? Qual a vantagem de publicar telemetria de campo via MQTT direto para um banco de dados de séries temporais?
