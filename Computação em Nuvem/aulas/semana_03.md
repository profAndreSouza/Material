# Semana 03: Máquinas Virtuais (AWS EC2) e Conteinerização com Docker (Projetos 01 & 04)

## 1. Visão Geral & Objetivos
Provisionar capacidade computacional na nuvem utilizando o Amazon EC2 (Elastic Compute Cloud). Configurar pares de chaves SSH, regras de firewall com Security Groups e executar aplicações conteinerizadas com Docker no ambiente AWS.

---

## 2. Conteúdo Teórico

### 2.1 Amazon EC2 e Virtualização IaaS
- **Tipos de Instâncias:** Famílias t3/t2 (burstable/geral) e escolha de dimensionamento para o Learner Lab.
- **AMIs (Amazon Machine Images):** Imagens pré-configuradas de sistemas operacionais (Ubuntu Server Linux, Amazon Linux).
- **Security Groups:** Firewalls virtuais de nível de instância (regras de Inbound/Outbound para portas 22, 80 e 443).
- **Autenticação por Chaves SSH:** Par de chaves pública/privada (.pem) para acesso seguro via terminal.

### 2.2 Conteinerização com Docker na Nuvem
- **Conceito de Containers vs. VMs:** Isolamento de processos, portabilidade e eficiência de recursos.
- **Docker Engine:** Instalação e execução de daemons no ambiente Linux da EC2.
- **Imagens e Containers:** Execução de serviços web isolados em portas mapeadas no host.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Projeto 01 & 04)
1. Criar um Security Group permitindo conexões SSH (porta 22) e HTTP (porta 80).
2. Launch de uma instância EC2 Ubuntu Server no AWS Learner Lab utilizando o par de chaves gerado.
3. Acessar a instância via SSH e realizar a instalação do Docker Engine.
4. Executar um contêiner web contendo uma página "Hello Web - Smart N1" apontando para a porta 80.
5. Acessar a aplicação no navegador através do IP público da EC2.

---

## 4. Exercícios de Fixação
1. Qual a função do Security Group no contexto de segurança da AWS EC2?
2. Por que a conteinerização com Docker facilita a implantação de aplicações em instâncias de nuvem em relação à instalação direta no sistema operacional host?
