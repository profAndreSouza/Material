# Exercícios — VLAN, IPv4 e IPv6

## Contexto geral

A rede de uma empresa está sendo implantada com segmentação por VLAN e suporte a IPv4 e IPv6. Parte da atribuição de endereços será automática, utilizando diferentes abordagens.

Todos os cenários devem ser implementados e testados no Packet Tracer até que a comunicação esteja funcionando corretamente.

# Parte 1 — IPv6 com Stateless (SLAAC)

## Exercício 1

Construir uma rede com:

* 1 roteador
* 1 switch
* 3 computadores

Todos os dispositivos devem estar na mesma rede local.

O roteador deve anunciar o prefixo IPv6:
2001:db8:acad:1::/64

Os computadores devem obter automaticamente seus endereços IPv6 utilizando SLAAC.

Todos os dispositivos devem se comunicar utilizando IPv6.

## Exercício 2

Utilizar a mesma topologia do exercício anterior.

Modificar a configuração do roteador para interromper o processo de autoconfiguração automática dos hosts.

Reconectar um novo computador à rede e observar o comportamento de endereçamento.

# Parte 2 — IPv6 com Stateful (DHCPv6 no roteador)

## Exercício 3

Construir uma rede com:

* 1 roteador
* 1 switch
* 3 computadores

Utilizar o prefixo IPv6:
2001:db8:acad:2::/64

O roteador deve atuar como servidor DHCPv6 no modo stateful.

Os computadores devem receber automaticamente seus endereços IPv6 a partir do roteador, sem utilizar autoconfiguração SLAAC completa.

Todos os dispositivos devem se comunicar utilizando IPv6.

## Exercício 4

Manter a mesma topologia.

Adicionar um novo computador à rede e garantir que ele receba endereço IPv6 automaticamente via DHCPv6.

# Parte 3 — VLAN com DHCP em Servidor (IPv4)

## Exercício 5

Construir uma rede com:

* 1 switch
* 1 roteador
* 1 servidor DHCP
* 4 computadores

Configurar duas VLANs:

VLAN 10 — rede 192.168.10.0/24
VLAN 20 — rede 192.168.20.0/24

Distribuir os computadores:

* 2 computadores na VLAN 10
* 2 computadores na VLAN 20

O servidor deve fornecer DHCP para ambas as redes, com pools separados.

O roteador deve permitir comunicação entre as VLANs.

Os computadores devem obter automaticamente:

* Endereço IP
* Máscara
* Gateway

## Exercício 6

Utilizar a mesma topologia.

Desconectar ou desativar o servidor DHCP.

Adicionar um novo computador em uma das VLANs.

# Parte 4 — VLAN com DHCP no Roteador (IPv4)

## Exercício 7

Construir uma rede com:

* 1 roteador
* 1 switch
* 4 computadores

Configurar:

VLAN 10 — rede 192.168.10.0/24
VLAN 20 — rede 192.168.20.0/24

O roteador deve:

* Realizar roteamento inter-VLAN
* Atuar como servidor DHCP para ambas as VLANs

Os computadores devem receber automaticamente seus endereços IPv4.

## Exercício 8

Utilizar a mesma topologia.

Adicionar uma nova rede:

VLAN 30 — rede 192.168.30.0/24

Adicionar novos computadores a essa VLAN.

Configurar o roteador para fornecer DHCP para a nova rede.

Garantir comunicação entre todas as VLANs.

# Parte 5 — Integração IPv4 e IPv6

## Exercício 9

Construir uma rede com:

* 1 roteador
* 1 switch
* 4 computadores

Configurar duas VLANs:

VLAN 10

* IPv4 via DHCP no roteador (192.168.10.0/24)
* IPv6 via SLAAC (2001:db8:10::/64)

VLAN 20

* IPv4 via DHCP no roteador (192.168.20.0/24)
* IPv6 via DHCPv6 stateful (2001:db8:20::/64)

Todos os dispositivos devem operar com dual stack (IPv4 e IPv6).

Garantir comunicação entre dispositivos utilizando:

* IPv4
* IPv6

## Exercício 10

Expandir a rede anterior adicionando:

* mais um switch
* enlace entre switches

Manter a segmentação por VLANs.

Garantir que:

* o tráfego entre switches preserve as VLANs
* os serviços de DHCP e IPv6 continuem funcionando corretamente
