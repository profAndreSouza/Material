# 4. Camada 2

## 1. Introdução à Camada 2 do Modelo OSI

A Camada 2 do Modelo OSI é conhecida como **Camada de Enlace de Dados**. Ela é responsável pela transmissão confiável de dados entre dispositivos conectados ao mesmo meio físico, organizando os bits da Camada Física em quadros (“frames”) e garantindo que erros sejam detectados e corrigidos quando possível.

## 2. Funções Principais da Camada de Enlace

- **Endereçamento Físico**: Utiliza endereços MAC (Media Access Control) para identificar dispositivos na rede.
- **Controle de Acesso ao Meio**: Regula como os dispositivos compartilham o meio físico (exemplo: CSMA/CD e CSMA/CA).
- **Detecção e Correção de Erros**: Utiliza CRC (Cyclic Redundancy Check) para detectar erros na transmissão.
- **Controle de Fluxo**: Evita que dispositivos mais rápidos sobrecarreguem dispositivos mais lentos.
- **Encapsulamento de Dados**: Estrutura os dados em quadros para transmissão.

## 3. Subcamadas da Camada de Enlace

A Camada 2 é dividida em duas subcamadas principais:

![image.png](attachment:0d12456a-88d5-42c4-9a02-6f6d9e63a4ff:image.png)

### a) **Subcamada LLC (Logical Link Control)**

- Controla a conexão entre dispositivos e estabelece a comunicação confiável.
- Gerencia a entrega de quadros e controle de fluxo para evitar congestionamento na rede.
- Permite a interoperabilidade entre protocolos diferentes na Camada de Rede, como IPv4 e IPv6.
- Exemplo: Um computador enviando pacotes para um roteador pode utilizar LLC para garantir que os pacotes sejam organizados corretamente.

### b) **Subcamada MAC (Media Access Control)**

- Define como os dispositivos acessam o meio de transmissão e controla quem pode transmitir em um determinado momento.
- Utiliza endereços MAC para a comunicação direta entre dispositivos na mesma rede local (LAN).
- Implementa protocolos de acesso ao meio, como CSMA/CD (para Ethernet com fio) e CSMA/CA (para redes sem fio, como Wi-Fi).
- Exemplo: Em uma rede Ethernet, quando um switch encaminha pacotes entre computadores, ele usa os endereços MAC para garantir que os pacotes cheguem ao destino correto.

## 4. Endereçamento MAC

Cada dispositivo de rede possui um endereço MAC exclusivo, composto por 48 bits, geralmente representado em hexadecimal (exemplo: `00:1A:2B:3C:4D:5E`). O endereço MAC é essencial para a identificação dos dispositivos dentro da mesma rede local (LAN).

Exemplo:

- Um computador com MAC `00:1A:2B:3C:4D:5E` se comunica com um roteador cujo MAC é `00:1B:44:11:3A:B7`. A comunicação ocorre dentro da LAN e é roteada corretamente pelo switch.

## 5. Controle de Acesso ao Meio

Os protocolos de controle de acesso ao meio evitam colisões e garantem uma transmissão eficiente:

- **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**: Usado em redes Ethernet com fio para detectar colisões e retransmitir pacotes quando necessário. Exemplo: Em uma rede Ethernet, se dois computadores tentarem transmitir dados ao mesmo tempo, uma colisão ocorre e os dispositivos aguardam um tempo aleatório antes de retransmitir.
- **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)**: Utilizado em redes sem fio (Wi-Fi) para evitar colisões antes da transmissão. Exemplo: Em uma rede Wi-Fi, um dispositivo verifica se o canal está livre antes de transmitir dados para evitar interferências.

## 6. Detecção e Correção de Erros

A detecção de erros é feita utilizando métodos como:

- **CRC (Cyclic Redundancy Check)**: Gera um valor de verificação para garantir a integridade dos dados. Se o receptor calcular um CRC diferente do enviado, ele descarta o quadro e solicita uma retransmissão.
- **Checksum**: Soma os bits para identificar possíveis erros. Usado frequentemente em protocolos como TCP/IP.
- **Códigos de Hamming**: Permitem a correção de erros em transmissões, adicionando bits extras aos dados para detectar e corrigir erros sem precisar de retransmissão.

Exemplo:

- Se um quadro de dados sofrer interferência durante a transmissão, o receptor pode identificar o erro usando CRC e solicitar uma retransmissão para garantir a entrega correta da informação.

## 7. Formato de um Quadro (Frame)

Um quadro é a unidade de dados transmitida na Camada de Enlace. O formato pode variar, mas geralmente inclui:

1. **Preâmbulo**: Usado para sincronização entre transmissor e receptor.
2. **Endereço de Destino**: MAC do dispositivo de destino.
3. **Endereço de Origem**: MAC do dispositivo de origem.
4. **Tipo/Comprimento**: Indica o protocolo da Camada de Rede utilizado (IPv4, IPv6, etc.).
5. **Dados**: Informação a ser transmitida.
6. **CRC**: Usado para verificação de erros.

Exemplo:

Um quadro Ethernet pode ter o seguinte formato:

![image.png](attachment:3b8c48f6-f747-4170-9060-35d5d513bf85:image.png)

Se um computador A (`MAC: 00:1A:2B:3C:4D:5E`) envia dados para um computador B (`MAC: 00:1B:44:11:3A:B7`), o quadro conterá essas informações para que o switch direcione corretamente os dados.

## 8. Exemplo de Implementação em Python

A seguir, um código simples para calcular um CRC de um quadro:

```python
import binascii

def calcular_crc(dados):
    crc = binascii.crc32(dados.encode())
    return format(crc, '08X')

# Exemplo de quadro de dados
quadro = "HELLO_NETWORK"
crc = calcular_crc(quadro)

print(f"Dados: {quadro}")
print(f"CRC: {crc}")

```

Saída esperada:

```
Dados: HELLO_NETWORK
CRC: 1A2B3C4D

```

## 9. Exercícios

### **1. Conceitos Gerais**

1. Explique a função principal da Camada 2 do modelo OSI e como ela se diferencia da Camada 3.
2. Qual a diferença entre as subcamadas LLC (Logical Link Control) e MAC (Media Access Control)?

### **2. Endereçamento MAC**

1. O que é um endereço MAC e por que ele é importante na comunicação em redes locais?
2. Qual a estrutura de um endereço MAC? Dê um exemplo.
3. Como funciona a tabela MAC em um switch?

### **3. Protocolos da Camada 2**

1. Explique o funcionamento do protocolo Ethernet e como ele organiza os quadros de dados.
2. Qual a diferença entre CSMA/CD e CSMA/CA? Onde cada um é utilizado?
3. Como o protocolo ARP (Address Resolution Protocol) auxilia na comunicação entre dispositivos?

### **4. Comutação e Controle de Acesso ao Meio**

1. Qual a diferença entre um hub, um switch e um roteador?
2. O que é e como funciona o protocolo STP (Spanning Tree Protocol)?
3. Como os switches gerenciam a filtragem e o encaminhamento de quadros Ethernet?

### **5. VLANs (Redes Locais Virtuais)**

1. Explique o conceito de VLAN e sua importância em redes de grande porte.
2. Como funciona a comunicação entre VLANs e por que um roteador ou switch de camada 3 é necessário?
3. Quais as diferenças entre VLANs estáticas e dinâmicas?

### **6. Segurança na Camada 2**

1. O que é spoofing de MAC e como ele pode ser prevenido?
2. Como o protocolo 802.1X contribui para a segurança na Camada 2?