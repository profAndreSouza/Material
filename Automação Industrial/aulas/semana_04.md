# Aula 04: Protocolos de Comunicação Industrial & Broker MQTT

## 1. Visão Geral & Objetivos Didáticos

Esta aula apresenta os protocolos de comunicação para integração TI/TA na IIoT, com foco principal na arquitetura do protocolo **MQTT (Message Queuing Telemetry Transport)** e na configuração do **Broker MQTT Mosquitto/HiveMQ**.

---

## 2. Escopo Sintético do Conteúdo Teórico

- Arquitetura de Comunicação Cliente/Servidor vs **Publisher/Subscriber (Pub/Sub)**.
- Componentes do Protocolo MQTT: Tópicos (*Topics*), Payloads JSON, Qualidade de Serviço (**QoS 0, 1, 2**), Mensagens Retidas (*Retained Messages*) e *Last Will and Testament (LWT)*.
- Estruturação de Tópicos industriais para a planta Smart N1 (ex.: `smartn1/estacao1/sensores/temperatura`).
- Comparativo com protocolos tradicionais de chão de fábrica (Modbus TCP, OPC UA).

---

## 3. Atividade / Prática IIoT (A ser desenvolvida na respectiva semana)

- Instalação e execução do Broker **Mosquitto**.
- Testes de publicação e subscrição de telemetria simulada via terminal e cliente MQTT (MQTTX / Python `paho-mqtt`).
