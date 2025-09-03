# 5. Camada 3

A **Camada 3 do Modelo OSI**, também conhecida como **Camada de Rede**, é responsável pelo endereçamento lógico e pelo roteamento dos pacotes entre redes diferentes. Enquanto a Camada 2 (Enlace) trabalha com endereços MAC dentro de uma mesma rede local (LAN), a Camada 3 permite a comunicação entre dispositivos em redes distintas, utilizando protocolos como o **IP (Internet Protocol)**.

## 1. Principais Funções da Camada de Rede

A Camada 3 tem diversas funções essenciais para a comunicação entre redes:

- **Endereçamento Lógico:** Define endereços IP únicos para cada dispositivo na rede.
- **Encapsulamento de Dados:** Organiza os dados em pacotes para transmissão.
- **Roteamento:** Determina o melhor caminho para enviar pacotes entre redes.
- **Fragmentação e Reassembly:** Divide pacotes grandes em partes menores para transporte eficiente.
- **Controle de Congestionamento:** Gerencia o tráfego para evitar sobrecarga na rede.
- **Tradução de Endereços (NAT):** Permite a comunicação entre redes privadas e a Internet.

## 2. Endereçamento IP

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

## 3. Roteamento

O **roteamento** é o processo de encaminhar pacotes de uma rede para outra. Os dispositivos responsáveis por isso são os **roteadores**.

### Tipos de Roteamento:

1. **Roteamento Estático:** As rotas são configuradas manualmente pelo administrador da rede.
2. **Roteamento Dinâmico:** O roteador aprende as rotas automaticamente usando protocolos como:
    - **RIP (Routing Information Protocol)** – Utiliza número de saltos para escolher a melhor rota.
    - **OSPF (Open Shortest Path First)** – Usa custo baseado na largura de banda do link.
    - **BGP (Border Gateway Protocol)** – Principal protocolo de roteamento da Internet.

## 4. Encapsulamento e Estrutura dos Pacotes IP

Os dados enviados na rede passam por um processo de **encapsulamento**, onde são adicionadas informações de controle. Um **pacote IP** contém:

1. **Cabeçalho IP:** Contém informações como endereço de origem, endereço de destino e tempo de vida (TTL).
2. **Dados:** Informação a ser transmitida.

Boa! Vamos detalhar os **campos de cabeçalho do IPv4 e do IPv6** comparando os dois.

### Cabeçalho IPv4

O cabeçalho do **IPv4** tem **tamanho variável (20 a 60 bytes)** por causa do campo *Options*.

#### Campos principais:

1. **Version (4 bits)**

   * Indica a versão do IP (sempre `4` para IPv4).

2. **IHL – Internet Header Length (4 bits)**

   * Tamanho do cabeçalho em palavras de 32 bits (mínimo 5 = 20 bytes).

3. **Type of Service (TOS) / DSCP + ECN (8 bits)**

   * Define prioridade e qualidade do tráfego. Hoje é dividido em:

     * **DSCP (6 bits)** → Qualidade de serviço.
     * **ECN (2 bits)** → Notificação de congestionamento.

4. **Total Length (16 bits)**

   * Tamanho total do pacote (cabeçalho + dados), até **65.535 bytes**.

5. **Identification (16 bits)**

   * Identifica fragmentos pertencentes ao mesmo datagrama.

6. **Flags (3 bits)**

   * Controle de fragmentação:

     * `DF` (Don’t Fragment) → Não fragmentar.
     * `MF` (More Fragments) → Indica que há mais fragmentos.

7. **Fragment Offset (13 bits)**

   * Posição do fragmento dentro do datagrama original.

8. **Time To Live (TTL, 8 bits)**

   * Número de saltos permitido antes de descartar o pacote. Evita loops infinitos.

9. **Protocol (8 bits)**

   * Informa qual protocolo de transporte está encapsulado (ex: `6`=TCP, `17`=UDP, `1`=ICMP).

10. **Header Checksum (16 bits)**

* Verificação de integridade apenas do cabeçalho.

11. **Source Address (32 bits)**

* Endereço IP de origem.

12. **Destination Address (32 bits)**

* Endereço IP de destino.

13. **Options (0 a 40 bytes)**

* Usado para recursos opcionais (ex: segurança, timestamp).

14. **Padding**

* Bits extras para alinhar o cabeçalho a múltiplos de 32 bits.


### Cabeçalho IPv6

O cabeçalho do **IPv6** foi projetado para ser **fixo de 40 bytes**, mais simples e eficiente.

#### Campos principais:

1. **Version (4 bits)**

   * Indica a versão do IP (sempre `6` para IPv6).

2. **Traffic Class (8 bits)**

   * Similar ao TOS/DSCP do IPv4, define prioridade e qualidade.

3. **Flow Label (20 bits)**

   * Identifica fluxos de pacotes para QoS (ex: streaming, VoIP).

4. **Payload Length (16 bits)**

   * Tamanho da carga útil (dados + cabeçalhos de extensão).
   * Máx: 65.535 bytes (maiores usam *Jumbo Payload Option*).

5. **Next Header (8 bits)**

   * Indica o próximo cabeçalho: pode ser de transporte (TCP, UDP) ou cabeçalhos de extensão do IPv6 (ex: Routing, Fragment).

6. **Hop Limit (8 bits)**

   * Equivalente ao TTL do IPv4.

7. **Source Address (128 bits)**

   * Endereço IPv6 de origem.

8. **Destination Address (128 bits)**

   * Endereço IPv6 de destino.


### Comparação IPv4 x IPv6

| Campo                    | IPv4                            | IPv6                             |
| ------------------------ | ------------------------------- | -------------------------------- |
| **Tamanho do cabeçalho** | 20–60 bytes (variável)          | 40 bytes (fixo)                  |
| **Endereço**             | 32 bits (4,3 bilhões endereços) | 128 bits (3,4×10³⁸ endereços)    |
| **Fragmentação**         | Feita por roteadores e origem   | Apenas origem fragmenta          |
| **Checksum**             | Sim, no cabeçalho               | Não existe (reduz processamento) |
| **QoS**                  | DSCP/ECN                        | Traffic Class + Flow Label       |
| **Opções extras**        | Campo Options                   | Cabeçalhos de extensão           |


## 5. Protocolos Relacionados à Camada 3

Além do **IP**, existem outros protocolos importantes na Camada de Rede:

- **ICMP (Internet Control Message Protocol):** Usado para mensagens de erro e diagnósticos (exemplo: comando `ping`).
- **ARP (Address Resolution Protocol):** Converte endereços IP em endereços MAC.
- **NAT (Network Address Translation):** Permite que dispositivos em uma rede privada acessem a Internet usando um único IP público.

## 6. Exercício Prático no Packet Tracer

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

## 7. Conclusão

A **Camada de Rede** é fundamental para a comunicação entre diferentes redes. Ela garante que os pacotes sejam endereçados corretamente e encaminhados ao destino final. O entendimento dessa camada é essencial para a construção e manutenção de redes eficientes e escaláveis.