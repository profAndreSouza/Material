# Semana 05: Armazenamento de Objetos (Amazon S3) e Controle de Acesso IAM (Projeto 03)

## 1. Visão Geral & Objetivos
Compreender a arquitetura do Amazon S3 (Simple Storage Service) para armazenamento de arquivos e telemetria. Configurar o controle de acesso e autorização entre instâncias EC2 e buckets S3 utilizando IAM Roles (`LabRole` no AWS Learner Lab), eliminando credenciais hardcoded.

---

## 2. Conteúdo Teórico

### 2.1 Amazon S3 (Simple Storage Service)
- **Estrutura de Armazenamento:** Buckets, objetos, chaves e metadados.
- **Nomes Globais Unicos:** Regras de nomeação de buckets no ecossistema AWS.
- **Classes de Armazenamento:** S3 Standard, S3 Intelligent-Tiering, S3 Glacier para arquivamento histórico de logs industriais.

### 2.2 Gestão de Identidades e Permissões (AWS IAM)
- **Princípio do Menor Privilégio:** Concessão apenas das permissões estritamente necessárias.
- **IAM Roles vs. Access Keys:** Por que NUNCA salvar chaves de acesso (`AWS_SECRET_ACCESS_KEY`) em scripts dentro de instâncias EC2.
- **Uso da `LabRole` no Learner Lab:** Utilização do perfil de instância pré-configurado no ambiente educacional.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Projeto 03)
1. Criar um bucket no Amazon S3 nomeado `smartn1-telemetria-<seu-nome>`.
2. Associar a IAM Role `LabRole` (ou `LabInstanceProfile`) à instância EC2 existente no AWS Learner Lab.
3. Conectar à EC2 via SSH e testar a comunicação com o S3 via AWS CLI (`aws s3 ls`).
4. Criar um script Python na EC2 que gera um relatório de produção fabril e o envia diretamente ao bucket S3 sem utilizar nenhuma chave hardcoded.

---

## 4. Exercícios de Fixação
1. Qual o risco de segurança ao salvar chaves de acesso IAM estáticas diretamente nos scripts de uma aplicação hospedada na EC2? Como as IAM Roles resolvem esse problema?
2. Compare as características de armazenamento de bloco (Amazon EBS) com armazenamento de objetos (Amazon S3).
