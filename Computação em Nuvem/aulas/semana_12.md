# Semana 12: Computação Serverless e Banco de Dados NoSQL — API Gateway, Lambda e DynamoDB (Projeto 07)

## 1. Visão Geral & Objetivos
Desenvolver uma arquitetura web 100% Serverless (sem servidores para gerenciar) na AWS. Construir funções Serverless no **AWS Lambda**, expor endpoints REST com o **Amazon API Gateway** e salvar dados no banco NoSQL **Amazon DynamoDB**, utilizando a `LabRole` no AWS Learner Lab.

---

## 2. Conteúdo Teórico

### 2.1 Conceitos de Computação Serverless
- **O que é Serverless:** Execução orientada a eventos com cobrança por milissegundo de processamento e auto-scaling de zero a milhares de requisições.
- **AWS Lambda:** Execução de trechos de código (Python, Node.js, Java) acionados por gatilhos (HTTP, S3, DynamoDB Streams).
- **Amazon API Gateway:** Gerenciamento de rotas HTTP/REST, controle de versão e integração com funções Lambda.

### 2.2 Banco de Dados NoSQL Gerenciado (Amazon DynamoDB)
- **Modelagem NoSQL:** Tabelas, Chave de Partição (Partition Key) e Chave de Classificação (Sort Key).
- **Escalabilidade:** Capacidade sob demanda (On-Demand) e baixa latência.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Projeto 07)
1. Criar uma tabela no Amazon DynamoDB chamada `AlertasIndustriais` com a Partition Key `AlertaId` (String).
2. Criar uma função no AWS Lambda em Python para cadastrar alertas de falhas de equipamentos.
3. Vincular a IAM Role `LabRole` à função Lambda para permissão de leitura/escrita no DynamoDB.
4. Criar uma API REST no Amazon API Gateway com a rota `POST /alertas` integrada à função Lambda.
5. Testar o envio de dados via Postman/cURL e verificar a gravação no DynamoDB.

---

## 4. Exercícios de Fixação
1. Explique as diferenças operacionais e financeiras entre hospedar uma API em uma instância EC2 (IaaS) versus no AWS Lambda + API Gateway (Serverless).
2. Como a `LabRole` permite que o AWS Lambda acesse o Amazon DynamoDB de forma segura?
