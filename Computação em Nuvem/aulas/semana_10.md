# Semana 10: Telemetria IoT Industrial e Dashboards de Observabilidade (Projeto 06)

## 1. Visão Geral & Objetivos
Construir uma solução de ingestão e visualização de telemetria industrial em tempo real. Utilizar o **AWS IoT Core** para recepção de mensagens MQTT, banco de dados temporal **InfluxDB** para armazenamento e **Grafana** para construção de painéis de observabilidade fabril.

---

## 2. Conteúdo Teórico

### 2.1 AWS IoT Core e Protocolo MQTT
- **Visão Geral do AWS IoT Core:** Message Broker gerenciado com suporte a MQTT/HTTP.
- **Protocolo MQTT:** Arquitetura Publish/Subscribe, tópicos e qualidade de serviço (QoS).
- **Regras do AWS IoT (IoT Rules):** Roteamento automático de mensagens MQTT para outros serviços da AWS ou servidores externos.

### 2.2 Observabilidade e Bancos de Séries Temporais (Time-Series)
- **InfluxDB:** Banco de dados otimizado para gravação e consulta de séries temporais de alta frequência (métricas de sensores).
- **Grafana:** Plataforma aberta para monitoramento analítico e construção de dashboards dinâmicos.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Projeto 06)
1. Executar contêineres do InfluxDB e Grafana em uma instância EC2 via Docker Compose.
2. Criar um "Thing" (Dispositivo) no AWS IoT Core simulando um sensor vibracional de motor industrial.
3. Configurar uma regra no AWS IoT Core para repassar os dados MQTT para o endpoint do InfluxDB.
4. Conectar o Grafana ao InfluxDB como Data Source.
5. Construir um dashboard em tempo real exibindo curvas de temperatura, pressão e vibração dos equipamentos da fábrica Smart N1.

---

## 4. Exercícios de Fixação
1. Por que o protocolo MQTT é amplamente preferido ao HTTP REST para transmissão de telemetria de sensores industriais em larga escala?
2. Qual a vantagem de utilizar um banco de dados de séries temporais (como InfluxDB) em relação a um banco relacional tradicional para métricas de IoT?
