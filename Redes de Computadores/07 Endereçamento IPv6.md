# 8. Endereçamento IPv6

## 1. Introdução ao IPv6

IPv6 (Internet Protocol version 6) foi desenvolvido para substituir o IPv4 devido à escassez de endereços. Ele utiliza endereços de 128 bits, permitindo um número praticamente ilimitado de dispositivos conectados à internet. IPv6 também traz melhorias em segurança, roteamento e eficiência na transmissão de pacotes.

## 2. Estrutura do Endereçamento IPv6

Os endereços IPv6 são compostos por 128 bits, representados em oito grupos de quatro dígitos hexadecimais separados por dois-pontos, por exemplo: **2001:0db8:85a3:0000:0000:8a2e:0370:7334**.

### Tipos de Endereço IPv6

- **Unicast**: Identifica um único dispositivo em uma rede.
- **Multicast**: Pacotes são enviados para múltiplos destinos simultaneamente.
- **Anycast**: Pacotes são enviados para o nó mais próximo de um grupo específico.

### Formatos Especiais

- **Loopback**: `::1` (equivalente a 127.0.0.1 no IPv4).
- **Endereços Link-Local**: `FE80::/10` (usados para comunicação dentro da mesma rede local).
- **Endereços Unique Local**: `FC00::/7` (endereços privados equivalentes a IPv4 privados).
- **Endereços Globais**: `2000::/3` (endereços roteáveis pela internet).

## 3. Prefixos e Sub-redes no IPv6

O IPv6 utiliza prefixos para definir redes. Um prefixo comum é **/64**, onde os primeiros 64 bits representam a rede e os últimos 64 bits identificam os hosts.

Exemplo:

- Rede: `2001:db8:abcd:1234::/64`
- Primeiro endereço utilizável: `2001:db8:abcd:1234::1`
- Último endereço utilizável: `2001:db8:abcd:1234:ffff:ffff:ffff:ffff`

## 4. Configuração de Endereços IPv6

### Configuração Manual (Windows/Linux)

- Windows:
    - Exibir configuração de rede: `ipconfig /all`
    - Definir IP manualmente: `netsh interface ipv6 set address "Ethernet" 2001:db8::10/64`
- Linux:
    - Exibir configuração de rede: `ip addr show`
    - Configurar IP manualmente: `sudo ip addr add 2001:db8::10/64 dev eth0`

### SLAAC (Stateless Address Autoconfiguration)

O SLAAC permite que dispositivos configurem automaticamente seus endereços sem a necessidade de um servidor DHCP.

## 5. Exercícios

### Exercícios de Sub-rede

1. Qual a faixa de endereços disponíveis na rede `2001:db8:abcd::/64`?
2. Se uma rede possui o prefixo `/48`, quantas sub-redes /64 podem ser criadas?
3. Qual é o primeiro endereço utilizável na rede `2001:db8:abcd:1234::/64`?
4. Quantos endereços podem ser atribuídos em uma rede com prefixo `/56`?
5. Qual o endereço de loopback no IPv6?
6. Quais são os três tipos principais de endereços IPv6?

### Enunciados para Packet Tracer

1. **Configuração de Rede IPv6 com Sub-redes**: Configure uma rede IPv6 dividida em três sub-redes utilizando a faixa `2001:db8:abcd::/48`. Configure os PCs para se comunicarem corretamente e teste a conectividade usando `ping6`.
2. **Simulação de Rede com SLAAC e DHCPv6**: Configure uma rede IPv6 onde alguns dispositivos utilizam SLAAC e outros recebem endereços via DHCPv6. Teste se os dispositivos obtêm corretamente seus endereços e verificam a comunicação na rede.

## 6. Conclusão

IPv6 resolve os problemas do IPv4 com maior espaço de endereçamento e novas funcionalidades. A adoção do IPv6 está crescendo, e seu conhecimento é essencial para profissionais de redes.

## 7. Glossário

- **Address (Endereço)**: Identificação única de um dispositivo na rede.
- **Prefix (Prefixo)**: Parte do endereço IPv6 que define a rede.
- **Subnet (Sub-rede)**: Divisão de uma rede maior em redes menores.
- **Gateway**: Roteador que conecta diferentes redes.
- **Loopback**: Endereço usado para comunicação interna do próprio dispositivo (`::1`).
- **Unicast**: Endereço que identifica um único dispositivo.
- **Multicast**: Endereço usado para enviar pacotes para múltiplos dispositivos.
- **Anycast**: Endereço atribuído a múltiplos dispositivos, roteado para o mais próximo.
- **SLAAC (Stateless Address Autoconfiguration)**: Método de configuração automática de endereços IPv6.
- **DHCPv6**: Protocolo para atribuição dinâmica de endereços IPv6.