# Aula Prática: Roteamento Estático e Inter-VLAN (Packet Tracer)

## Objetivos

* Configurar VLANs em switches
* Implementar roteamento Inter-VLAN (Router-on-a-Stick)
* Configurar rotas estáticas
* Testar conectividade entre redes

---

## Topologia

Dispositivos:

* 1 Roteador (R1)
* 2 Switches (S1 e S2)
* 4 PCs

Estrutura:

* VLAN 10 → Administrativo
* VLAN 20 → Financeiro

---

## Endereçamento IP

| Dispositivo | Interface     | IP              |
| ----------- | ------------- | --------------- |
| R1          | Gig0/0/0.10   | 192.168.10.1/24 |
| R1          | Gig0/0/0.20   | 192.168.20.1/24 |
| PC1         | -             | 192.168.10.10   |
| PC2         | -             | 192.168.10.20   |
| PC3         | -             | 192.168.20.10   |
| PC4         | -             | 192.168.20.20   |

Gateway:

* VLAN 10 → 192.168.10.1
* VLAN 20 → 192.168.20.1

---

## Parte 1: Configuração das VLANs nos Switch S1 e S2

```bash
enable
configure terminal

vlan 10
name ADMINISTRATIVO

vlan 20
name FINANCEIRO

interface range fa0/1 - 12
switchport mode access
switchport access vlan 10

interface range fa0/13 - 24
switchport mode access
switchport access vlan 20

interface range gig0/1-2
switchport mode trunk

end
write
```

## Parte 2: Configuração do Roteador (Router-on-a-Stick)

```bash
enable
configure terminal

interface g0/0/0
no shutdown

interface g0/0/0.10
encapsulation dot1Q 10
ip address 192.168.10.1 255.255.255.0

interface g0/0/0.20
encapsulation dot1Q 20
ip address 192.168.20.1 255.255.255.0

end
write
```

---

## Parte 3: Roteamento Estático (Cenário com segundo roteador)

Adicionar um segundo roteador (R2) com a rede 192.168.30.0/24.

Configuração no R2:

```bash
interface g0/0
ip address 192.168.30.1 255.255.255.0
no shutdown
```

Ligação entre R1 e R2:

* Rede 10.0.0.0/30

Configuração no R1:

```bash
interface g0/1
ip address 10.0.0.1 255.255.255.252
no shutdown

ip route 192.168.30.0 255.255.255.0 10.0.0.2
```

Configuração no R2:

```bash
interface g0/1
ip address 10.0.0.2 255.255.255.252
no shutdown

ip route 192.168.10.0 255.255.255.0 10.0.0.1
ip route 192.168.20.0 255.255.255.0 10.0.0.1
```

---

## Parte 4: Testes

Nos PCs:

```bash
ping 192.168.10.1
ping 192.168.20.10
ping 192.168.30.1
```

---

## Possíveis erros para análise

* VLAN não criada
* Porta não configurada como trunk
* Falta de encapsulamento dot1Q
* Gateway incorreto nos PCs
* Interfaces desligadas
* Rotas estáticas ausentes

---

## Desafio

1. Criar a VLAN 30 (TI)
2. Adicionar novos PCs
3. Permitir comunicação entre todas as VLANs
4. Restringir comunicação entre VLAN 10 e VLAN 20
