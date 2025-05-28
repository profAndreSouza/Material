# 6. Endereçamento IPv4

## 1. Introdução ao IPv4

IPv4 (Internet Protocol version 4) é a quarta versão do protocolo de internet e a primeira amplamente implementada para conexão de dispositivos em redes. Ele opera na camada de rede do modelo OSI e usa endereços de 32 bits para identificação de dispositivos. Foi introduzido na década de 1980 e continua sendo amplamente utilizado, apesar da escassez de endereços levar à transição para IPv6.

## 2. Estrutura do Endereçamento IPv4

Os endereços IPv4 são compostos por 32 bits, divididos em quatro octetos (bytes) e representados no formato decimal pontuado, por exemplo: **192.168.1.1**.

Cada endereço possui duas partes:

- **Parte de rede**: Identifica a rede a que o dispositivo pertence.
- **Parte de host**: Identifica o dispositivo dentro da rede.

### Classes de Endereço IPv4

Os endereços IPv4 são divididos em cinco classes:

| Classe | Intervalo de Endereço | Máscara Padrão | Uso |
| --- | --- | --- | --- |
| A | 1.0.0.0 a 126.255.255.255 | 255.0.0.0 | Grandes redes |
| B | 128.0.0.0 a 191.255.255.255 | 255.255.0.0 | Redes médias |
| C | 192.0.0.0 a 223.255.255.255 | 255.255.255.0 | Pequenas redes |
| D | 224.0.0.0 a 239.255.255.255 | Não aplicável | Multicast |
| E | 240.0.0.0 a 255.255.255.255 | Não aplicável | Uso experimental |

## 3. Endereços Especiais

- **Endereço de loopback**: 127.0.0.1 (utilizado para testes locais e comunicação interna do próprio dispositivo).
- **Endereços privados**: Usados dentro de redes locais sem roteamento para a internet:
    - Classe A: 10.0.0.0/8 (10.0.0.1 a 10.255.255.254)
    - Classe B: 172.16.0.0/12 (172.16.0.1 a 172.31.255.254)
    - Classe C: 192.168.0.0/16 (192.168.0.1 a 192.168.255.254)
- **Endereço de broadcast**: Termina com todos os bits do host em "1" (ex: 192.168.1.255). Usado para enviar pacotes a todos os dispositivos de uma rede.
- **Endereço de rede**: Primeiro endereço de uma sub-rede (ex: 192.168.1.0 em uma rede /24).

## 4. Sub-rede e Máscara de Sub-rede

A **máscara de sub-rede** define a parte de rede e a parte de host do endereço. Ela é representada em formato decimal pontuado (ex: 255.255.255.0) ou em notação CIDR (ex: /24).

### Exemplo de Sub-rede

Rede: 192.168.1.0/24

Máscara: 255.255.255.0

Endereços disponíveis: 192.168.1.1 a 192.168.1.254 (192.168.1.0 é a rede e 192.168.1.255 é o broadcast).

## 5. CIDR (Classless Inter-Domain Routing)

CIDR permite a alocação eficiente de endereços sem seguir rigidamente as classes A, B e C.

Exemplo: **192.168.1.0/27** (Máscara: 255.255.255.224)

- Total de endereços: 32 (30 utilizáveis, 1 para rede e 1 para broadcast).
- Primeiro IP utilizável: 192.168.1.1
- Último IP utilizável: 192.168.1.30
- Endereço de broadcast: 192.168.1.31

## 6. Configuração de Endereços IPv4

### Configuração Manual (Windows/Linux)

- Windows:
    - Exibir configuração de rede: `ipconfig /all`
    - Definir IP manualmente: `netsh interface ip set address name="Ethernet" static 192.168.1.10 255.255.255.0 192.168.1.1`
- Linux:
    - Exibir configuração de rede: `ifconfig` ou `ip addr show`
    - Configurar IP manualmente: `sudo ifconfig eth0 192.168.1.10 netmask 255.255.255.0`

### DHCP (Dynamic Host Configuration Protocol)

O DHCP permite a configuração automática de endereços IP em redes, atribuindo dinamicamente endereços conforme disponibilidade.

## 7. Exercícios

### Exercícios de Sub-rede

1. Qual a faixa de endereços utilizáveis na rede 192.168.5.0/28?
2. Quantas sub-redes podem ser criadas a partir da rede 172.16.0.0/16 dividida em /22?
3. Qual é a máscara de sub-rede que permite até 1000 hosts em uma rede?
4. Se você tem uma rede 10.0.0.0/29, quantos hosts podem ser atribuídos?
5. Qual é o endereço de broadcast da rede 192.168.10.0/26?
6. Qual o primeiro e o último endereço utilizável da rede 172.31.128.0/19?

### Enunciados para Packet Tracer

1. **Configuração de Rede IPv4 com Sub-redes**: Configure uma rede com três sub-redes diferentes utilizando endereços da faixa 192.168.10.0/24. Cada sub-rede deve ter pelo menos 3 hosts. Configure os PCs para se comunicarem corretamente e teste a conectividade usando o comando `ping`.
2. **Simulação de Rede com DHCP**: Configure um servidor DHCP para distribuir endereços IP dinamicamente para pelo menos 5 dispositivos em uma rede. Utilize a faixa de endereços 10.1.1.0/24 e configure o roteador como gateway padrão. Verifique se os dispositivos recebem os IPs corretamente ao solicitar endereços DHCP.

Correções

[Correções.xlsx](attachment:e17df4be-a817-4bbe-9991-e2dd0847e96c:Correes.xlsx)

## 8. Conclusão

IPv4 é a base das redes de computadores modernas, mas seu espaço de endereços é limitado, levando à adoção do IPv6. O entendimento de sub-redes e máscaras é essencial para administração de redes.

## 9. Glossário

- **Address (Endereço)**: Identificação única de um dispositivo em uma rede.
- **Subnet Mask (Máscara de Sub-rede)**: Define a parte de rede e host em um endereço IP.
- **Gateway**: Roteador que conecta redes diferentes.
- **Broadcast**: Comunicação para todos os dispositivos de uma rede.
- **CIDR (Classless Inter-Domain Routing)**: Método para alocar endereços IP de forma eficiente.
- **Loopback**: Endereço usado para comunicação interna do próprio dispositivo (127.0.0.1).
- **Private IP (IP Privado)**: Endereços reservados para redes locais.
- **Public IP (IP Público)**: Endereço IP acessível via internet.
- **DHCP (Dynamic Host Configuration Protocol)**: Protocolo para atribuição dinâmica de IPs.
- **Static IP (IP Estático)**: Endereço IP configurado manualmente e fixo em um dispositivo.