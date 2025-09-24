Com certeza! Aqui está um resumo em tópicos dos conteúdos abordados nos arquivos, ideal para os alunos se prepararem para a prova:

# Resumo Aulas 01 a 08

## 1. Camada Física (Camada 1 do Modelo OSI)

*   **Introdução:** Meio de transmissão de dados, padrões elétricos, ópticos, mecânicos e funcionais.
*   **Funções Principais:** Transmissão de bits, definição de meios físicos, codificação de dados, modulação e multiplexação.
*   **Meios de Transmissão:**
    *   **Guiados:** Par trançado (UTP/STP - Cat5e, Cat6, Cat7), Fibra Óptica (Monomodo, Multimodo), Cabo Coaxial.
    *   **Não Guiados:** Radiofrequência (Wi-Fi, Bluetooth, LTE, 5G), Infravermelho, Micro-ondas.
*   **Modulação:** AM, FM, PM (alteração de características da onda portadora).
*   **Multiplexação:** FDM, TDM, WDM, CDM (transmissão de múltiplos sinais em um único meio).
*   **Codificação de Dados:** NRZ, Manchester Encoding, 4B/5B, 8B/10B (representação dos bits no meio físico).

## 2. Meios de Transmissão, Cabeamento Estruturado e Dispositivos de Rede

*   **Meios Guiados:** Detalhes e usos do Par Trançado, Fibra Óptica, Cabo Coaxial.
*   **Meios Não Guiados:** Detalhes e usos do Wi-Fi (padrões 802.11, 2.4/5GHz), Bluetooth, Rádio/Satélite.
*   **Cabeamento Estruturado:**
    *   **Componentes:** Sala de telecomunicações (TR), Backbone, Pontos de Rede (TO), Patch Panel.
    *   **Padrões de Cabeamento RJ-45:** T568A e T568B.
    *   **Tipos de Cabo:** Direto (PC-Switch) e Crossover (PC-PC, Switch-Switch).
*   **Dispositivos de Rede:**
    *   **Switches:** Camada 2, endereços MAC, interliga dispositivos na LAN.
    *   **Roteadores:** Camada 3, endereços IP, conecta redes diferentes.
    *   **Access Points (APs):** Conecta dispositivos sem fio à rede cabeada (Camada 2).
    *   **Firewalls:** Segurança, monitora e filtra tráfego.

## 3. Topologias de Rede: Física e Lógica

*   **Topologia Física (Disposição real):**
    *   **Barramento:** Cabo principal único, vantagens/desvantagens.
    *   **Estrela:** Ponto central (switch/hub), vantagens/desvantagens.
    *   **Anel:** Conexão sequencial, token, vantagens/desvantagens.
    *   **Malha:** Conexão redundante (parcial/total), vantagens/desvantagens.
    *   **Híbrida:** Combinação de topologias, vantagens/desvantagens.
*   **Topologia Lógica (Fluxo de dados):**
    *   **Ethernet:** Barramento lógico, CSMA/CD.
    *   **Token Ring:** Anel lógico, token.
    *   **Redes Comutadas:** Estrela lógica, comutação.
    *   **SDN (Redes Definidas por Software):** Separação controle/dados, flexibilidade.

## 4. Camada de Enlace (Camada 2 do Modelo OSI)

*   **Introdução:** Transmissão confiável entre dispositivos no mesmo meio físico, organiza bits em quadros (frames).
*   **Funções Principais:** Endereçamento físico (MAC), Controle de Acesso ao Meio, Detecção e Correção de Erros, Controle de Fluxo, Encapsulamento de Dados.
*   **Subcamadas:**
    *   **LLC (Logical Link Control):** Controle de conexão, fluxo, interoperabilidade (IPv4/IPv6).
    *   **MAC (Media Access Control):** Acesso ao meio, endereços MAC, CSMA/CD, CSMA/CA.
*   **Endereçamento MAC:** 48 bits, exclusivo, identificação na LAN (ex: `00:1A:2B:3C:4D:5E`).
*   **Controle de Acesso ao Meio:**
    *   **CSMA/CD:** Ethernet com fio, detecção e retransmissão de colisões.
    *   **CSMA/CA:** Redes sem fio (Wi-Fi), evita colisões.
*   **Detecção e Correção de Erros:** CRC, Checksum, Códigos de Hamming.
*   **Formato de um Quadro (Frame):** Preâmbulo, Endereço Destino/Origem (MAC), Tipo/Comprimento, Dados, CRC.

## 5. Camada de Rede (Camada 3 do Modelo OSI)

*   **Introdução:** Endereçamento lógico e roteamento entre redes diferentes (IP).
*   **Funções Principais:** Endereçamento Lógico (IP), Encapsulamento, Roteamento, Fragmentação e Reassembly, Controle de Congestionamento, NAT.
*   **Endereçamento IP:**
    *   **IPv4:** 32 bits (ex: `192.168.1.1`).
    *   **IPv6:** 128 bits (ex: `2001:0db8:85a3::8a2e:0370:7334`).
    *   **Estrutura IPv4:** Rede e Host, Máscara de Sub-rede.
*   **Roteamento:**
    *   **Estático:** Configuração manual.
    *   **Dinâmico:** RIP, OSPF, BGP.
*   **Encapsulamento e Pacotes IP:** Cabeçalho IP (origem, destino, TTL) + Dados.
*   **Cabeçalhos IPv4 e IPv6:** (Comparação é chave!)
    *   **IPv4:** 20-60 bytes, Version, IHL, TOS/DSCP+ECN, Total Length, Identification, Flags, Fragment Offset, TTL, Protocol, Header Checksum, Source/Destination Address, Options, Padding.
    *   **IPv6:** 40 bytes fixo, Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit, Source/Destination Address.
    *   **Diferenças Chave:** Tamanho do cabeçalho, fragmentação, checksum, QoS, opções extras.
*   **Protocolos Relacionados:** ICMP (ping), ARP (IP para MAC), NAT.

## 6. Endereçamento IPv4

*   **Introdução:** 32 bits, decimal pontuado (ex: `192.168.1.1`).
*   **Classes de Endereço:** A, B, C (intervalos, máscaras padrão e uso). D (Multicast), E (Experimental).
*   **Endereços Especiais:** Loopback (`127.0.0.1`), Privados (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), Broadcast, Endereço de Rede.
*   **Sub-rede e Máscara de Sub-rede:** Define partes de rede/host, formato decimal pontuado e CIDR.
*   **CIDR (Classless Inter-Domain Routing):** Alocação eficiente de endereços, exemplos de cálculo.
*   **Configuração:** Manual (Windows/Linux), DHCP.
*   **Exercícios:** Cálculo de faixas, hosts, sub-redes, broadcast, primeiro/último IP. Cenários Packet Tracer.

## 7. Endereçamento IPv6

*   **Introdução:** Resolve escassez do IPv4, 128 bits, sem broadcast, SLAAC, NDP, IPsec nativo.
*   **Representação e Compressão:** 8 grupos hexadecimais, regras de `0` à esquerda e `::` (uma vez).
*   **Estrutura Lógica:** Global Routing Prefix, Subnet ID, Interface ID (normalmente `/64` para LANs).
*   **Tipos de Endereços:** Unicast, Multicast, Anycast.
*   **Endereços Especiais:** Unspecified (`::`), Loopback (`::1`), Link-Local (`fe80::/10`), Unique Local (ULA - `fc00::/7`), Global Unicast (`2000::/3`), Multicast (`ff00::/8`), Solicited-node multicast (`ff02::1:ffXX:XXXX`).
*   **Prefixos e Cálculos de Sub-rede:** Cálculos de `/64` em `/48`, número de endereços em `/64`.
*   **Autoconfiguração:**
    *   **SLAAC:** Router Advertisements (RA), ICMPv6.
    *   **EUI-64:** Formação do Interface ID a partir do MAC.
    *   **Privacy Extensions:** Identificadores temporários aleatórios.
*   **DHCPv6 vs SLAAC:** Stateful vs Stateless, flags M e O nos RAs.
*   **NDP (Neighbor Discovery Protocol) e ICMPv6:** Substitui ARP, Router Solicitation/Advertisement, Redirects, Solicited-node multicast.
*   **Cabeçalho IPv6:** (Revisar comparação com IPv4), extensões de cabeçalho.
*   **Transição e Interoperabilidade:** Dual stack, Tunneling (6to4, ISATAP, Teredo), NAT64/DNS64.
*   **Comandos Práticos:** `ipconfig /all`, `ip -6 addr show`, `ping -6`, configuração em Cisco IOS.
*   **Planejamento de Endereçamento:** Recomendações de `/64`, `/56`, `/48`, uso de ULA.
*   **Segurança e Boas Práticas:** RA-guard, ND inspection, ACLs IPv6, endereços temporários.

## 8. Camada de Transporte (Camada 4 do Modelo OSI)

*   **Introdução:** Garantir entrega correta de dados entre aplicações. Ponte entre rede e aplicações.
*   **Funções:**
    *   **Multiplexação e Demultiplexação:** Uso de portas para identificar serviços (80, 443, 25, 110).
    *   **Segmentação e Reagrupamento:** Dividir mensagens em segmentos e reagrupá-los.
    *   **Controle de Conexão:** (TCP) Handshake de 3 vias.
    *   **Controle de Fluxo:** Evita sobrecarga do receptor.
    *   **Detecção e Correção de Erros:** Checksum, retransmissão (TCP).
    *   **Entrega Ordenada:** (TCP) Garante ordem dos segmentos.
*   **Handshake de Três Vias (TCP):** SYN, SYN-ACK, ACK.
*   **Comparação TCP vs UDP:** Conexão, Confiabilidade, Ordem dos dados, Velocidade, Uso Típico.
    *   **TCP:** Confiável, ordenado, mais lento (Web, e-mail, FTP).
    *   **UDP:** Não confiável, não ordenado, mais rápido (jogos online, VoIP, streaming).
*   **Estrutura dos Protocolos:**
    *   **Segmento TCP:** Portas, Sequência/ACK, Flags, Checksum, Dados.
    *   **Datagrama UDP:** Portas, Comprimento, Checksum, Dados.
*   **Aplicações Práticas:** HTTP/HTTPS, FTP, SMTP (TCP); DNS, VoIP, jogos online (UDP).
*   **Outros Protocolos:** SCTP, DCCP, RUDP, QUIC.
