# Semana 13: Infraestrutura como Código (IaC) para Serverless — AWS CLI e AWS SAM (Projeto 09)

## 1. Visão Geral & Objetivos
Automatizar o provisionamento de recursos de nuvem utilizando Infraestrutura como Código (IaC). Utilizar o **AWS SAM (Serverless Application Model)** e a **AWS CLI** para declarar, empacotar e implantar aplicações serverless através de templates declarativos em YAML.

---

## 2. Conteúdo Teórico

### 2.1 Conceitos de Infraestrutura como Código (IaC)
- **Vantagens de IaC:** Repetibilidade, versionamento em Git, redução de erros manuais no console e automação de deploys.
- **AWS CloudFormation:** Serviço básico de orquestração de recursos da AWS via templates JSON/YAML.

### 2.2 AWS SAM (Serverless Application Model)
- **Estrutura do Template SAM (`template.yaml`):** Especificação simplificada de recursos Serverless (funções Lambda, tabelas DynamoDB e rotas de API).
- **Comandos SAM CLI:** `sam init`, `sam build`, `sam local invoke` e `sam deploy`.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Projeto 09)
1. Configurar as credenciais do AWS Learner Lab no ambiente local ou CloudShell via `aws configure`.
2. Inicializar um projeto SAM com o comando `sam init`.
3. Editar o arquivo `template.yaml` declarando uma função Lambda e uma tabela DynamoDB associadas à `LabRole`.
4. Compilar o projeto com `sam build`.
5. Executar o deploy automatizado para a AWS utilizando `sam deploy --guided`.
6. Validar a criação automática da stack de recursos no console AWS.

---

## 4. Exercícios de Fixação
1. Qual a diferença entre provisionar recursos manualmente pelo Console de Gerenciamento da AWS e utilizar um arquivo de modelo declarativo com AWS SAM?
2. Por que o uso de IaC é fundamental em pipelines de integração e entrega contínuas (CI/CD)?
