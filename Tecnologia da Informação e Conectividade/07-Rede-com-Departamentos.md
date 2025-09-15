# Aula 07 – Projeto 2: Rede com Departamentos

## Objetivos de Aprendizagem
* Reforçar o conceito de **VLANs** e aplicar em um cenário prático maior.
* Configurar **trunking** entre switches.
* Implementar **roteamento entre VLANs** usando um roteador (Router-on-a-Stick).
* Validar a comunicação entre dispositivos de diferentes departamentos.


## 1. Contexto do Projeto

Uma **escola** deseja separar a rede em dois departamentos:

- **Administração**  
- **Professores**

A meta é garantir maior **segurança e organização**, mas também permitir que, quando necessário, haja comunicação entre as VLANs.


## 2. Requisitos da Rede

- Criar **duas VLANs**:  
  - VLAN 10 – Administração  
  - VLAN 20 – Professores  
- Utilizar **2 switches** interligados por **trunk**.  
- Criar roteamento entre VLANs usando um **roteador com subinterfaces**.  
- Testar comunicação:  
  - Entre PCs da mesma VLAN → deve funcionar.  
  - Entre VLANs diferentes → deve passar pelo roteador.


## 3. Endereçamento IPv4

| VLAN / Setor      | IPs dos PCs               | Máscara          | Gateway         |
|------------------|--------------------------|-----------------|----------------|
| VLAN 10 – Admin  | 192.168.10.1 – 192.168.10.10 | 255.255.255.0 | 192.168.10.254 |
| VLAN 20 – Prof   | 192.168.20.1 – 192.168.20.10 | 255.255.255.0 | 192.168.20.254 |

## 4. Configuração no Packet Tracer

### Passo 1 – Montagem da Rede
- 2 Switches (Switch0 e Switch1).
- 1 Roteador (Router0).
- 4 PCs (2 para cada VLAN).
- Conectar PCs aos switches com cabos **diretos**.
- Conectar Switch0 ↔ Switch1 com **cabo direto**.
- Conectar Switch0 ↔ Router0 com **cabo direto** (porta Gigabit).


### Passo 2 – Configuração das VLANs
No **Switch0** e **Switch1**:

```bash
Switch> enable
Switch# configure terminal
Switch(config)# vlan 10
Switch(config-vlan)# name ADMIN
Switch(config)# vlan 20
Switch(config-vlan)# name PROF
````

Atribuir portas:

```bash
Switch(config)# interface fa0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
!
Switch(config)# interface fa0/2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20
```


### Passo 3 – Configuração do Trunk

Na porta que conecta **Switch0 ↔ Switch1**:

```bash
Switch(config)# interface fa0/24
Switch(config-if)# switchport mode trunk
```


### Passo 4 – Configuração do Roteador (Router-on-a-Stick)

No roteador:

```bash
Router> enable
Router# configure terminal
!
Router(config)# interface g0/0
Router(config-if)# no shutdown
!
Router(config)# interface g0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.254 255.255.255.0
!
Router(config)# interface g0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.254 255.255.255.0
```


### Passo 5 – Configuração dos PCs

* VLAN 10:

  * PC1 → 192.168.10.1 /24, Gateway 192.168.10.254
  * PC2 → 192.168.10.2 /24, Gateway 192.168.10.254
* VLAN 20:

  * PC3 → 192.168.20.1 /24, Gateway 192.168.20.254
  * PC4 → 192.168.20.2 /24, Gateway 192.168.20.254


### Passo 6 – Testes

* PC1 → PC2 (mesma VLAN) ✅
* PC3 → PC4 (mesma VLAN) ✅
* PC1 → PC3 (diferente VLAN) ✅ (via roteador)


## 5. Questões para Discussão

1. Por que o trunk é necessário entre os switches?
2. O que aconteceria se o roteador não tivesse subinterfaces configuradas?
3. Quais seriam as vantagens de usar um **Switch de Camada 3** no lugar do Router-on-a-Stick?


## 6. Critérios de Sucesso

* VLANs funcionando em cada switch.
* Comunicação dentro da VLAN ok.
* Comunicação entre VLANs passando pelo roteador.
* Documentação com **tabela de IPs** e **diagrama da topologia**.


## 7. Atividade Extra (opcional)

* Criar uma terceira VLAN (VLAN 30 – Alunos).
* Atribuir PCs a ela.
* Configurar subinterface no roteador.
* Testar comunicação com as demais VLANs.


## Referências

* TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. *Redes de Computadores*, 6ª ed.
* KUROSE, J.; ROSS, K. *Redes de Computadores e a Internet: uma abordagem top-down*, 8ª ed.
* CISCO Networking Academy – CCNA Switching and Routing Essentials.

```
