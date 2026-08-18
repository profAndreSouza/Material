# Semana 14: Atividade Integrada Parte 1 — Coleta de Dados Fabris e Ingestão na Nuvem

## 1. Visão Geral & Objetivos
Iniciar o desenvolvimento da Atividade Integrada Final da disciplina. Coletar dados reais ou simulados de telemetria da planta de automação industrial (vibração, temperatura, velocidade de ciclo) via Node-RED/MQTT e estruturar o pipeline de ingestão contínua para o Amazon S3 e Amazon DynamoDB.

---

## 2. Conteúdo Teórico

### 2.1 Arquitetura da Planta de Automação Industrial
- **Sensores e Atuadores:** Captura de grandezas físicas da linha de montagem Smart N1.
- **Protocolos da Planta:** Publicação de payloads JSON via MQTT para o broker de mensagens.

### 2.2 Estratégias de Armazenamento de Dados Fabris
- **Hot Storage (DynamoDB):** Para consultas rápidas de estado atual e alertas em tempo real.
- **Data Lake / Cold Storage (Amazon S3):** Para acúmulo histórico de datasets brutos que serão utilizados no treinamento do modelo de Machine Learning.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Atividade Integrada - Etapa 1)
1. Configurar o fluxo no Node-RED para gerar leituras de telemetria da planta fabril a cada 2 segundos.
2. Publicar as leituras no AWS IoT Core via tópico MQTT `smartn1/planta/telemetria`.
3. Criar uma regra no AWS IoT Core para gravar as leituras brontas em arquivos CSV no Amazon S3 (`s3://smartn1-telemetria-fabrica/ raw/`).
4. Validar se o acúmulo histórico de dados está ocorrendo corretamente no bucket S3 para compor o dataset de treinamento de Machine Learning.

---

## 4. Exercícios de Fixação
1. Qual a importância de separar os dados em camadas Hot Storage (DynamoDB) e Data Lake (S3) em arquiteturas industriais?
2. Descreva a estrutura do payload de telemetria gerado para a sua linha de produção.
