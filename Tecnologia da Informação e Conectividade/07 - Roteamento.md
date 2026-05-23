# VLAN, DHCP, Roteamento Estático e NAT no Packet Tracer

## Objetivo

Configurar uma infraestrutura de rede utilizando:

* VLANs;
* DHCP no roteador;
* Roteamento estático;
* NAT;
* Expansão de redes.

O exercício será dividido em duas etapas:

* **Etapa 1:** configuração inicial realizada junto com o professor;
* **Etapa 2:** expansão da topologia pelo aluno.

---

# Etapa 1 – Configuração Inicial

## Cenário

Uma empresa possui dois setores separados por VLANs:

* Administrativo;
* TI.

Os dispositivos deverão receber IP automaticamente via DHCP configurado no roteador.

A empresa também possui uma rede externa utilizando IPs públicos.
A comunicação entre as redes será realizada através de roteamento estático.

Além disso:

* Apenas a rede privada deverá utilizar NAT;
* A rede pública NÃO deverá utilizar NAT.

---

# Topologia Proposta

## VLANs Internas

| VLAN | Nome           | Rede              |
| ---- | -------------- | ----------------- |
| 10   | Administrativo | `192.168.10.0/24` |
| 20   | TI             | `192.168.20.0/24` |

---

## Rede Pública Externa

* `200.10.10.0/24`

---

# Equipamentos

* 2 roteadores;
* 2 switches;
* 4 computadores;
* Cabos adequados.

---

# Configurações

## Parte 1 – VLANs

No switch principal:

1. Criar as VLANs:

   * VLAN 10;
   * VLAN 20.

2. Associar as portas corretamente aos setores.

3. Configurar o link entre switch e roteador como trunk.

```
enable
conf terminal

vlan 10
name Adm
vlan 20
name TI

int range fa0/1-12
switchport mode access
switchport access vlan 10

int range fa0/13-24
switchport mode access
switchport access vlan 20

int range gig0/1-2
switchport mode trunk

end
write
```

---

## Parte 2 – Router-on-a-Stick

No roteador da rede interna:

1. Criar subinterfaces para as VLANs;
2. Configurar encapsulamento 802.1Q;
3. Definir os gateways:

   * `192.168.10.1`
   * `192.168.20.1`

```
enable
conf terminal

int gig0/0/0
no shutdown

int gig0/0/0.10
encapsulation dot1q 10
ip address 192.168.10.1 255.255.255.0

int gig0/0/0.20
encapsulation dot1q 20
ip address 192.168.20.1 255.255.255.0

end
write
```
---

## Parte 3 – DHCP no Roteador

Configurar DHCP no roteador para:

* VLAN 10;
* VLAN 20.

Os computadores deverão receber automaticamente:

* IP;
* Máscara;
* Gateway padrão.

```
enable
conf terminal

ip dhcp excluded-address 192.168.10.1
ip dhcp excluded-address 192.168.20.1

ip dhcp pool VLAN10
network 192.168.10.0 255.255.255.0
default-router 192.168.10.1

ip dhcp pool VLAN20
network 192.168.20.0 255.255.255.0
default-router 192.168.20.1

end
write
```
---

## Parte 4 - Configurar o link entre os roteadores

### Roteador 1
```
enable
conf terminal

int gig0/0/1
no shutdown
ip address 200.10.10.1 255.255.255.0

end
write
```

### Roteador 2
```
enable
conf terminal

int gig0/0/1
no shutdown
ip address 200.10.10.2 255.255.255.0

end
write
```

## Parte 5 - Configurar a rede interna do Roteador 2

```
enable
conf terminal

int gig0/0/0
no shutdown
ip address 10.0.0.1 255.255.255.0

end
write
```

## Parte 6 - Configurar o IP Estático do Servidor WEB da rede interna do Roteador 2

   * IP `10.0.0.2`
   * Mascara `255.255.255.0`
   * Gateway `10.0.0.1`

## Parte 7 – Roteamento Estático

Configurar rotas estáticas para permitir comunicação entre:

* Redes internas;
* Rede pública externa.

---

## Parte 5 – NAT

Configurar NAT/PAT apenas para as redes privadas:

* VLAN 10;
* VLAN 20.

As redes deverão acessar a rede externa utilizando o IP da interface WAN do roteador.

A rede pública não deverá sofrer tradução NAT.

---

# Testes Esperados

Ao final da etapa:

* PCs das VLANs devem receber IP automaticamente;
* PCs de VLANs diferentes devem se comunicar;
* As redes internas devem acessar a rede externa;
* O NAT deve funcionar corretamente;
* As rotas devem aparecer corretamente na tabela de roteamento.

---

# Etapa 2 – Expansão da Rede

## Novo Cenário

Uma nova filial foi adicionada à infraestrutura da empresa.

O aluno deverá integrar essa nova rede ao ambiente existente.

---

# Nova Rede

## Rede C

* `172.16.30.0/24`

---

# Requisitos da Etapa 2

O aluno deverá:

1. Adicionar um novo roteador;
2. Configurar a nova rede;
3. Implementar o roteamento estático necessário;
4. Garantir comunicação entre:

   * VLAN 10;
   * VLAN 20;
   * Rede pública;
   * Nova rede da filial.
5. Ajustar as rotas e NAT caso necessário.

---

# Comandos Úteis

## VLANs

```bash
show vlan brief
```

## Interfaces trunk

```bash
show interfaces trunk
```

## DHCP

```bash
show ip dhcp binding
```

## Roteamento

```bash
show ip route
```

## NAT

```bash
show ip nat translations
show ip nat statistics
```

## Testes

```bash
ping
tracert
```
