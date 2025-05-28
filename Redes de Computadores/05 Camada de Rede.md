# 5. Camada 3

A **Camada 3 do Modelo OSI**, também conhecida como **Camada de Rede**, é responsável pelo endereçamento lógico e pelo roteamento dos pacotes entre redes diferentes. Enquanto a Camada 2 (Enlace) trabalha com endereços MAC dentro de uma mesma rede local (LAN), a Camada 3 permite a comunicação entre dispositivos em redes distintas, utilizando protocolos como o **IP (Internet Protocol)**.

## 2. Principais Funções da Camada de Rede

A Camada 3 tem diversas funções essenciais para a comunicação entre redes:

- **Endereçamento Lógico:** Define endereços IP únicos para cada dispositivo na rede.
- **Encapsulamento de Dados:** Organiza os dados em pacotes para transmissão.
- **Roteamento:** Determina o melhor caminho para enviar pacotes entre redes.
- **Fragmentação e Reassembly:** Divide pacotes grandes em partes menores para transporte eficiente.
- **Controle de Congestionamento:** Gerencia o tráfego para evitar sobrecarga na rede.
- **Tradução de Endereços (NAT):** Permite a comunicação entre redes privadas e a Internet.

## 3. Endereçamento IP

O **Protocolo IP (Internet Protocol)** é o principal protocolo da Camada 3 e define como os pacotes são endereçados e roteados. Existem dois tipos principais de endereços IP:

- **IPv4 (Internet Protocol Version 4):** Utiliza endereços de 32 bits (exemplo: `192.168.1.1`).
- **IPv6 (Internet Protocol Version 6):** Utiliza endereços de 128 bits (exemplo: `2001:0db8:85a3::8a2e:0370:7334`).

### Estrutura do Endereço IPv4

Um endereço IPv4 é composto por quatro números de 0 a 255, separados por pontos (exemplo: `192.168.10.5`). Ele é dividido em **rede** e **host**, de acordo com a máscara de sub-rede.

### Máscara de Sub-rede

A máscara de sub-rede define qual parte do endereço representa a rede e qual representa os hosts dentro dessa rede. Exemplo:

- Endereço IP: `192.168.1.10`
- Máscara de sub-rede: `255.255.255.0`
- Rede: `192.168.1.0`
- Host: `10`

## 4. Roteamento

O **roteamento** é o processo de encaminhar pacotes de uma rede para outra. Os dispositivos responsáveis por isso são os **roteadores**.

### Tipos de Roteamento:

1. **Roteamento Estático:** As rotas são configuradas manualmente pelo administrador da rede.
2. **Roteamento Dinâmico:** O roteador aprende as rotas automaticamente usando protocolos como:
    - **RIP (Routing Information Protocol)** – Utiliza número de saltos para escolher a melhor rota.
    - **OSPF (Open Shortest Path First)** – Usa custo baseado na largura de banda do link.
    - **BGP (Border Gateway Protocol)** – Principal protocolo de roteamento da Internet.

## 5. Encapsulamento e Estrutura dos Pacotes IP

Os dados enviados na rede passam por um processo de **encapsulamento**, onde são adicionadas informações de controle. Um **pacote IP** contém:

1. **Cabeçalho IP:** Contém informações como endereço de origem, endereço de destino e tempo de vida (TTL).
2. **Dados:** Informação a ser transmitida.

Formato simplificado de um pacote IPv4:

```
| Cabeçalho IP | Dados |

```

Exemplo de cabeçalho IPv4:

```
Versão | Tamanho | TTL | Protocolo | Checksum | IP Origem | IP Destino

```

## 6. Protocolos Relacionados à Camada 3

Além do **IP**, existem outros protocolos importantes na Camada de Rede:

- **ICMP (Internet Control Message Protocol):** Usado para mensagens de erro e diagnósticos (exemplo: comando `ping`).
- **ARP (Address Resolution Protocol):** Converte endereços IP em endereços MAC.
- **NAT (Network Address Translation):** Permite que dispositivos em uma rede privada acessem a Internet usando um único IP público.

## 7. Exercício Prático no Packet Tracer

### **Objetivo:**

Criar uma rede no Cisco Packet Tracer para explorar o funcionamento da Camada 3.

### **Topologia da Rede:**

- 4 Computadores (PCs)
- 2 Switches
- 2 Roteadores
- Cabos Ethernet para conexões com fio

### **Passos:**

1. No Packet Tracer, adicione os dispositivos na área de trabalho conforme a topologia.
2. Conecte os PCs aos switches usando cabos Ethernet.
3. Conecte os switches a cada roteador.
4. Configure endereços IP nos PCs e nos roteadores.
5. Configure rotas estáticas ou um protocolo de roteamento dinâmico.
6. Use os comandos `ping` e `tracert` para testar a conectividade entre dispositivos.
7. Verifique a tabela de roteamento usando `show ip route`.

### **Perguntas para Reflexão:**

1. Como o roteador decide qual caminho seguir para enviar um pacote?
2. Qual a diferença entre roteamento estático e dinâmico?
3. O que acontece se um dispositivo estiver configurado com uma máscara de sub-rede incorreta?

## 8. Conclusão

A **Camada de Rede** é fundamental para a comunicação entre diferentes redes. Ela garante que os pacotes sejam endereçados corretamente e encaminhados ao destino final. O entendimento dessa camada é essencial para a construção e manutenção de redes eficientes e escaláveis.