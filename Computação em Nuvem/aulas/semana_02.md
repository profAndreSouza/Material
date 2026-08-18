# Semana 02: Infraestrutura Global AWS e Ambiente de Laboratório (AWS Learner Lab)

## 1. Visão Geral & Objetivos
Explorar a infraestrutura física e lógica da Amazon Web Services (AWS), compreendendo os conceitos de Regiões, Zonas de Disponibilidade (AZs) e Pontos de Presença (Edge Locations). Apresentar o ambiente de desenvolvimento **AWS Academy Learner Lab Sandbox** que será utilizado ao longo de todo o semestre.

---

## 2. Conteúdo Teórico

### 2.1 Infraestrutura Global da AWS
- **Regiões AWS:** Localizações geográficas isoladas contendo múltiplas Zonas de Disponibilidade (ex: `us-east-1` N. Virginia, `sa-east-1` São Paulo).
- **Zonas de Disponibilidade (AZs):** Data centers fisicamente separados dentro de uma mesma região, com energia, refrigeração e conectividade redundantes.
- **Conceitos de Latência e Compliance:** Escolha da região ideal com base na proximidade da fábrica e regulações de proteção de dados.

### 2.2 Funcionamento do AWS Academy Learner Lab Sandbox
- **Acesso ao Console AWS:** Funcionamento do botão Start Lab, tempo de sessão e orçamento disponível.
- **Gerenciamento de Credenciais:** AWS Access Key ID, Secret Access Key e Session Token para uso via linha de comando (AWS CLI).
- **Persistência de Recursos:** Entendimento do desligamento automático de instâncias EC2 ao final da sessão e manutenção de discos EBS, buckets S3 e configurações de rede.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório
1. Acessar a plataforma AWS Academy e inicializar o Learner Lab Sandbox.
2. Navegar pelo Console de Gerenciamento da AWS e alterar a região para `us-east-1`.
3. Consultar as credenciais de CLI no painel do lab e testar a conexão utilizando o CloudShell da AWS.

---

## 4. Exercícios de Fixação
1. Qual a diferença conceitual entre uma Região AWS e uma Zona de Disponibilidade (AZ)? Por que aplicações críticas industriais devem ser implantadas em múltiplas AZs?
2. Como funciona a persistência de dados no AWS Learner Lab quando uma sessão de laboratório é encerrada?
