# Semana 04: Aplicação Industrial em IaaS — Node-RED em Docker na AWS EC2 (Projeto 02)

## 1. Visão Geral & Objetivos
Implantar uma ferramenta de integração de automação industrial (Node-RED) em um contêiner Docker dentro de uma instância Amazon EC2. Configurar portas de comunicação industrial e persistência de dados do contêiner utilizando volumes Docker.

---

## 2. Conteúdo Teórico

### 2.1 Node-RED no Contexto da Indústria 4.0
- **Visão Geral do Node-RED:** Programação baseada em fluxos para conexão de dispositivos IoT, CLPs e APIs industriais.
- **Protocolos de Automação:** Modbus TCP, OPC UA, MQTT e requisições HTTP REST.

### 2.2 Gerenciamento Avançado de Docker na EC2
- **Mapeamento de Portas:** Liberação e vinculação da porta `1880` do Node-RED para a rede externa.
- **Persistência de Dados (Docker Volumes):** Mapeamento de diretórios do host para o contêiner (`/nodered_data`), garantindo que os fluxos construídos não sejam perdidos caso o contêiner seja reiniciado.
- **Ajustes no Security Group:** Liberação da porta `1880` no firewall do Amazon EC2.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Projeto 02)
1. Conectar à instância EC2 provisionada na Semana 03.
2. Atualizar as regras do Security Group liberando a porta `1880`.
3. Criar um volume Docker para armazenar os dados do Node-RED.
4. Subir o contêiner oficial do Node-RED com comando de reinicialização automática (`--restart always`).
5. Acessar a interface gráfica do Node-RED via IP público (`http://<IP-EC2>:1880`).
6. Construir um fluxo simples de simulação de sensores de temperatura da célula fabril Smart N1 enviando payloads JSON a cada 5 segundos.

---

## 4. Exercícios de Fixação
1. Qual a importância da utilização de Docker Volumes ao executar aplicações como o Node-RED em instâncias de nuvem?
2. Explique como o Node-RED atua como camada de integração entre o chão de fábrica e a computação em nuvem.
