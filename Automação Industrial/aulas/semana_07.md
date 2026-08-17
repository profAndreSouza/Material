# Aula 06: Persistência de Telemetria em Banco de Dados Temporal (InfluxDB)

## 1. Visão Geral & Objetivos Didáticos

Esta aula aborda o armazenamento eficiente de dados de telemetria de sensores industriais utilizando o **InfluxDB**, um banco de dados especializado em Séries Temporais (*Time-Series Database* - TSDB).

---

## 2. Escopo Sintético do Conteúdo Teórico

- Diferenças entre Bancos de Dados Relacionais (SQL), NoSQL Documentais e Bancos de Séries Temporais (TSDB).
- Estrutura de dados do InfluxDB: **Buckets, Measurements, Tags** (indexados), **Fields** (valores de telemetria) e **Timestamps**.
- Políticas de retenção de dados (*Retention Policies*) e agregação temporal.
- Linguagem de consulta **Flux** e Line Protocol para escrita de alta performance.

---

## 3. Atividade / Prática IIoT (A ser desenvolvida na respectiva semana)

- Configuração de um bucket no InfluxDB.
- Integração do Node-RED para gravar automaticamente a telemetria recebida do MQTT no InfluxDB.
- Execução de consultas temporais via interface web e Flux Query Language.
