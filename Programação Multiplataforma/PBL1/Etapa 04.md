# Implantação de Node-RED e MQTT em uma Instância EC2 na AWS

Este guia descreve o processo completo para criação de uma instância no Amazon EC2 e instalação do ambiente IoT utilizando Docker, Node-RED e Mosquitto MQTT.

# 1. Criação da Instância no Amazon EC2

Acesse o console da AWS e navegue até o serviço EC2.

Console AWS → EC2 → Instances → Launch Instance

## 1.1 Nome da Instância

Defina o nome da instância:

* Servidor IoT

## 1.2 Escolha da Imagem do Sistema Operacional (AMI)

Selecione:

* Ubuntu Server 24.04 LTS (HVM), SSD Volume Type

Características:

* Arquitetura: 64 bits (x86)  
* Virtualização: HVM  
* Tipo de armazenamento: EBS  
* Usuário padrão: ubuntu

## 1.3 Tipo de Instância

Selecione:

* t3.micro

Características:

* 2 vCPU  
* 1 GiB de memória  
* Elegível para o Free Tier

## 1.4 Par de Chaves (Key Pair)

Criar ou selecionar um par de chaves para acesso SSH.

Nome do par de chaves:

* servidoriot

Baixe o arquivo:

* servidoriot.pem

Este arquivo será utilizado para acesso remoto via SSH.

# 2. Configuração de Rede

Utilizar a VPC padrão criada automaticamente pela AWS.

Configuração:

* VPC: padrão  
* Sub-rede: padrão  
* Atribuir IP público automaticamente: habilitado

# 3. Configuração do Grupo de Segurança (Firewall)

Criar um novo grupo de segurança.

Nome:

* launch-wizard-1

Adicionar as seguintes regras de entrada.

## 3.1 Regras de Entrada

| Tipo | Protocolo | Porta | Origem | Descrição |
|-----|-----|-----|-----|-----|
| SSH | TCP | 22 | 0.0.0.0/0 | Acesso remoto |
| HTTP | TCP | 80 | 0.0.0.0/0 | Acesso web |
| HTTPS | TCP | 443 | 0.0.0.0/0 | Acesso web seguro |
| TCP personalizado | TCP | 1880 | 0.0.0.0/0 | Node-RED |
| TCP personalizado | TCP | 1883 | 0.0.0.0/0 | MQTT |

Portas utilizadas:

1880 → interface web do Node-RED  
1883 → broker MQTT

# 4. Configuração de Armazenamento

Manter o padrão:

* Volume raiz: 8 GB  
* Tipo: gp3

# 5. Execução da Instância

Revisar as configurações e clicar em:

* Launch Instance

Após alguns segundos a instância será iniciada.

# 6. Acessar a Instância

Acesse:

EC2 → Instances

Selecione a instância criada.

Copie o endereço:

Public IPv4 Address

Exemplo:

18.116.165.101

# 7. Conectar ao Servidor pelo Terminal da AWS

Selecionar a instância e clicar em:

> Connect

Escolher a opção:

> EC2 Instance Connect

Usuário:

> ubuntu

Clique em:

> Connect

O terminal Linux abrirá diretamente no navegador.

# 8. Atualizar o Sistema

No terminal execute:

sudo apt update
sudo apt upgrade -y

# 9. Instalar o Docker

Instalar o Docker:

sudo apt install docker.io -y

Ativar o serviço:

sudo systemctl enable docker
sudo systemctl start docker

Verificar instalação:

docker --version

# 10. Instalar o Broker MQTT

Utilizar o Mosquitto através de container Docker.

Executar:

docker run -d \
--name mqtt \
-p 1883:1883 \
eclipse-mosquitto

O broker MQTT ficará disponível na porta 1883.

# 11. Instalar o Node-RED

Executar o container:

docker run -d \
--name nodered \
-p 1880:1880 \
nodered/node-red

# 12. Acessar o Node-RED

Abrir o navegador e acessar:

http://SEU_IP_PUBLICO:1880

Exemplo:

http://18.116.165.101:1880

A interface de edição de fluxos do Node-RED será exibida.

# 13. Arquitetura da Solução

A infraestrutura criada permite a comunicação entre dispositivos IoT e a aplicação de fluxo de dados.

Arquitetura básica:

ESP32 / Simulação IoT  
        ↓  
MQTT Broker (Mosquitto)  
        ↓  
Node-RED  
        ↓  
Processamento de dados / APIs / Dashboards

# 14. Observações

O Node-RED pode ser utilizado para:

- integração de sensores IoT
- automação de fluxos de dados
- criação de dashboards
- integração com APIs
- processamento de eventos em tempo real

Este ambiente pode ser expandido futuramente com:

- InfluxDB
- Grafana
- Banco de dados PostgreSQL
- Serviços adicionais da AWS