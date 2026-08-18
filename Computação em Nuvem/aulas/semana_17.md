# Semana 17: Atividade Integrada Parte 4 — Consolidação End-to-End da Arquitetura Industrial em Nuvem

## 1. Visão Geral & Objetivos
Consolidar a arquitetura completa da Atividade Integrada Final. Integrar a coleta de dados de automação fabril, a aplicação implantada via pipeline CI/CD (GitHub Actions + Docker Hub + AWS) e o modelo de Machine Learning (AWS SageMaker) em uma solução funcional única de Indústria 4.0.

---

## 2. Visão da Solução Integrada (End-to-End)

```
+------------------+     MQTT     +-----------------+     S3/DynamoDB     +--------------------+
|  Planta Fabril   | ----------> |  AWS IoT Core   | -----------------> |    Amazon S3 /     |
| (Node-RED/MQTT)  |              +-----------------+                    |  Amazon DynamoDB   |
+------------------+                                                    +--------------------+
         |                                                                        |
         |                                                                        v
         |               +------------------+       Deploy SSH          +--------------------+
         |               |  GitHub Actions  | ------------------------> |    AWS EC2 App     |
         |               | (Pipeline CI/CD) |                           |  (Docker Container)|
         |               +------------------+                           +--------------------+
         v                                                                        |
+------------------+                                                              v
|  AWS SageMaker   | <------------------------------------------------------------+
| (Modelo Preditivo| (Consultas de Predição em Tempo Real)
+------------------+
```

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Atividade Integrada - Validação Final)
1. Executar o fluxo completo de simulação de sensores na planta fabril.
2. Confirmar a ingestão contínua no Amazon S3 e no Amazon DynamoDB.
3. Disparar uma alteração no repositório de código e validar o deploy automático via GitHub Actions e Docker Hub para a EC2 na AWS.
4. Testar o consumo das predições do Endpoint do AWS SageMaker através da interface gráfica da aplicação web.
5. Elaborar o documento de arquitetura final e preparar a apresentação para a banca/avaliação P2.

---

## 4. Exercícios de Fixação
1. Apresente um diagrama da arquitetura completa desenvolvida pelo seu grupo ressaltando o papel de cada serviço AWS e da esteira CI/CD.
2. Quais os principais desafios encontrados durante a integração de sistemas de chão de fábrica com serviços de nuvem e aprendizado de máquina?
