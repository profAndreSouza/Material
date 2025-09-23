# Aula 06 – VLANs e Segmentação

## Objetivos de Aprendizagem

* Compreender o conceito de **VLANs (Virtual Local Area Networks)** e sua função em redes locais.
* Diferenciar **segmentação física** e **segmentação lógica**.
* Configurar VLANs em switches para criar **domínios de broadcast isolados**.
* Compreender a necessidade do **roteamento entre VLANs** para comunicação entre redes distintas.
* Relacionar VLANs com **cenários reais de empresas, escolas e provedores de internet**.


## 1. Introdução: Por que usar VLANs?

Em uma rede local tradicional:

* Todos os dispositivos conectados a um switch estão no **mesmo domínio de broadcast**.
* Isso significa que mensagens como **ARP Request** ou **DHCP Discover** são replicadas para **todos os hosts da rede**, mesmo os que não precisam da informação.

### Problemas causados:

1. **Tráfego excessivo** – a rede fica sobrecarregada com mensagens desnecessárias.
2. **Risco de segurança** – qualquer máquina pode capturar pacotes que não lhe dizem respeito.
3. **Gestão difícil** – todos os setores da empresa compartilham o mesmo ambiente, dificultando a aplicação de regras específicas.

As VLANs surgem como uma solução, permitindo que um único switch físico seja **dividido logicamente em vários switches virtuais**.


## 2. Conceito de VLAN

* **VLAN (Virtual Local Area Network):** tecnologia que cria redes lógicas dentro de um mesmo dispositivo físico.
* Uma VLAN funciona como se fosse uma rede independente.

### Analogia:

Imagine um prédio comercial com vários andares.

* **Sem VLANs:** todos os andares estão conectados a um único alto-falante. Uma mensagem enviada é ouvida por todos.
* **Com VLANs:** cada andar tem o seu próprio sistema de som. Mensagens enviadas no 3º andar não são ouvidas no 5º andar.

### Benefícios das VLANs:

1. **Segurança** – tráfego fica isolado por grupo/setor.
2. **Eficiência** – redução de broadcast e melhor uso da banda.
3. **Flexibilidade** – reorganização dos grupos sem recabeamento físico.
4. **Escalabilidade** – facilita a expansão da rede e o gerenciamento centralizado.


## 3. Segmentação Física x Segmentação Lógica

* **Segmentação Física:** cada grupo de usuários teria um switch separado fisicamente.

  * Vantagem: isolamento real.
  * Desvantagem: mais equipamentos, mais custos e menos flexibilidade.

* **Segmentação Lógica (com VLANs):** um único switch pode abrigar vários grupos de usuários isolados.

  * Vantagem: reduz custo e aumenta flexibilidade.
  * Desvantagem: exige switches gerenciáveis e configuração correta.


## 4. Exemplo Real: Empresa com 3 Departamentos

* **Administração** – VLAN 10
* **Suporte Técnico** – VLAN 20
* **Professores** – VLAN 30

Todos os computadores estão conectados ao **mesmo switch físico**, mas logicamente separados em três redes diferentes.

### Situação sem VLANs:

* Todo tráfego circula para todos os setores.

### Situação com VLANs:

* Administração só enxerga seu próprio tráfego.
* Suporte só enxerga seu tráfego.
* Professores só enxerga seu tráfego.
* Para comunicação entre setores → precisa de um **roteador ou switch de camada 3**.


## 5. Configuração de VLANs no Switch e SubInterfaces no Router 

### Configuração do Switch:

```bash
! Entrar no modo privilegiado
> enable
! Entrar no modo de configuração global
# configure terminal

! Define o nome do dispositivo como S0
(config)# hostname S0

! Cria a VLAN 10 e nomeia como ADMINISTRACAO
(config)# vlan 10
(config-vlan)# name ADMINISTRACAO
! Sai do modo de configuração da VLAN 10
(config-vlan)# exit

! Cria a VLAN 20 e nomeia como SUPORTE
(config)# vlan 20
(config-vlan)# name SUPORTE
! Sai do modo de configuração da VLAN 20
(config-vlan)# exit

! Cria a VLAN 30 e nomeia como PROFESSORES
(config)# vlan 30
(config-vlan)# name PROFESSORES
! Sai do modo de configuração da VLAN 30
(config-vlan)# exit

! Define as portas fa0/1 a fa0/8 como portas de acesso
(config)# interface range fa0/1-8
! Associa as portas fa0/1 a fa0/8 à VLAN 10 (ADMINISTRACAO)
(config-if-range)# switchport mode access
(config-if-range)# switchport access vlan 10
! Sai do modo de configuração das portas fa0/1-8
(config-if-range)# exit

! Define as portas fa0/9 a fa0/16 como portas de acesso
(config)# interface range fa0/9-16
! Associa as portas fa0/9 a fa0/16 à VLAN 20 (SUPORTE)
(config-if-range)# switchport mode access
(config-if-range)# switchport access vlan 20
! Sai do modo de configuração das portas fa0/9-16
(config-if-range)# exit

! Define as portas fa0/17 a fa0/24 como portas de acesso
(config)# interface range fa0/17-24
! Associa as portas fa0/17 a fa0/24 à VLAN 30 (PROFESSORES)
(config-if-range)# switchport mode access
(config-if-range)# switchport access vlan 30
! Sai do modo de configuração das portas fa0/17-24
(config-if-range)# exit

! Define as portas gig0/1 e gig0/2 como trunks
(config)# interface range gig0/1-2
! Permite que as VLANs 10, 20 e 30 passem pelos trunks
(config-if-range)# switchport mode trunk
(config-if-range)# switchport trunk allowed vlan 10,20,30
! Sai do modo de configuração das portas gig0/1-2
(config-if-range)# exit

! Sai do modo de configuração global
(config)# exit
! Salva a configuração no dispositivo
# write

```

### Configuração do Roteador

```bash

> enable
# configure terminal

(config)# hostname R0

(config)# interface gig0/0/0
(config-if)# no shutdown
(config-if)# exit

(config)# interface gig0/0/0.10
(config-subif)# encapsulation dot1Q 10
(config-subif)# ip address 192.168.10.1 255.255.255.0
(config-subif)# exit

(config)# interface gig0/0/0.20
(config-subif)# encapsulation dot1Q 20
(config-subif)# ip address 192.168.20.1 255.255.255.0
(config-subif)# exit

(config)# interface gig0/0/0.30
(config-subif)# encapsulation dot1Q 30
(config-subif)# ip address 192.168.30.1 255.255.255.0
(config-subif)# exit


```


## 6. Roteamento entre VLANs (Inter-VLAN Routing)

* VLANs criam redes independentes.
* Para que máquinas em VLANs diferentes se comuniquem, é necessário um **dispositivo de camada 3**.

### Opções:

1. **Router-on-a-Stick (Roteador com subinterfaces)**

   * Cada VLAN é associada a uma **subinterface** do roteador.
   * A porta do roteador conecta-se ao **switch trunk** que transporta várias VLANs.
   * Cada subinterface recebe um **IP da respectiva VLAN**, permitindo roteamento entre elas.

   **Exemplo de configuração:**

   ```bash

   
   ```

   * **Observações importantes:**

     * `GigabitEthernet0/0` é a interface física do roteador.
     * `.10`, `.20` e `.30` são **subinterfaces** correspondentes às VLANs 10, 20 e 30.
     * O comando `encapsulation dot1Q <VLAN>` define a VLAN associada à subinterface.

2. **Switch Layer 3**

   * Switch gerenciável que suporta **SVIs (Switch Virtual Interfaces)**.
   * Permite roteamento interno entre VLANs sem precisar de roteador externo.


## 6.1 Diferença entre Interface Física e Subinterface

| Tipo de Interface | Função                                         | Observações                                                                     |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| Interface Física  | Conecta roteador a switch                      | Uma porta física, pode ter apenas 1 IP nativo ou ser trunk para múltiplas VLANs |
| Subinterface      | Representa uma VLAN dentro da interface física | Permite múltiplos IPs e roteamento entre VLANs na mesma porta física            |


## 7. Cenários Reais de Aplicação

* **Escolas e universidades:** separar rede de alunos, professores e administração.
* **Hospitais:** separar rede de médicos, enfermagem e setores administrativos.
* **Empresas:** separar tráfego de diferentes departamentos para segurança e desempenho.
* **Provedores de internet:** usar VLANs para entregar conexões separadas a diferentes clientes.


## 8. Atividade Extra

1. Criar uma terceira VLAN chamada **Professores (30)**.
2. Associar pelo menos 1 PC a essa VLAN.
3. Configurar **subinterfaces no roteador** para permitir comunicação entre VLAN 10, 20 e 30.
4. Testar o ping entre todos os dispositivos para verificar conectividade inter-VLAN.


## Referências

* TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. *Redes de Computadores*, 6ª ed.
* KUROSE, J.; ROSS, K. *Redes de Computadores e a Internet: uma abordagem top-down*, 8ª ed.
* CISCO Networking Academy – CCNA Switching, Routing, and Wireless Essentials.
