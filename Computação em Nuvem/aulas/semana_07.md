# Semana 07: Redes Virtuais Privadas (Amazon VPC) e Isolamento de Segurança (Projeto 05)

## 1. Visão Geral & Objetivos
Projetar e construir do zero uma infraestrutura de rede virtual isolada no Amazon VPC (Virtual Private Cloud). Configurar subredes públicas e privadas, Internet Gateways, Tabelas de Roteamento e regras de firewall para proteção de ativos industriais.

---

## 2. Conteúdo Teórico

### 2.1 Componentes Fundamentais da Amazon VPC
- **CIDR Blocks (Classless Inter-Domain Routing):** Endereçamento IPv4 privado (ex: `10.0.0.0/16`).
- **Subredes Públicas vs. Subredes Privadas:**
  - **Subrede Pública:** Possui rota direta para o Internet Gateway (IGW) para servidores acessíveis externamente (web/APIs).
  - **Subrede Privada:** Isolada da internet pública, destinada a bancos de dados e controladores fabris.
- **Internet Gateway (IGW):** Componente que permite comunicação entre instâncias na VPC e a internet.
- **Tabelas de Roteamento (Route Tables):** Regras de tráfego que direcionam os pacotes de rede entre subredes e gateways.

### 2.2 Segurança de Rede em Camadas
- **Network Access Control Lists (NACLs):** Firewall stateless em nível de subrede.
- **Security Groups:** Firewall stateful em nível de instância.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Projeto 05 - VPC Only)
1. Criar uma VPC personalizada com o bloco CIDR `10.0.0.0/16` nomeada `vpc-smartn1`.
2. Criar uma Subrede Pública (`10.0.1.0/24`) e uma Subrede Privada (`10.0.2.0/24`).
3. Criar e anexar um Internet Gateway (IGW) à VPC.
4. Criar uma Tabela de Roteamento Pública associando a rota `0.0.0.0/0` ao IGW e vinculá-la à Subrede Pública.
5. Provisionar uma instância EC2 na Subrede Pública e validar o acesso e conectividade com a internet.

---

## 4. Exercícios de Fixação
1. Qual a diferença entre uma Subrede Pública e uma Subrede Privada no Amazon VPC?
2. Por que os bancos de dados e sistemas de controle industrial (SCADA/CLPs) devem obrigatoriamente residir em subredes privadas?
