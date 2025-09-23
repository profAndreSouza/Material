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


## 5. Configuração de VLANs no Switch  

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

## 6. Roteamento entre VLANs (Inter-VLAN Routing)

* VLANs criam redes independentes.
* Para que máquinas em VLANs diferentes se comuniquem, é necessário um **dispositivo de camada 3**.

### Opções:

1. **Router-on-a-Stick (Roteador com subinterfaces)**

   * Cada VLAN é associada a uma **subinterface** do roteador.
   * A porta do roteador conecta-se ao **switch trunk** que transporta várias VLANs.
   * Cada subinterface recebe um **IP da respectiva VLAN**, permitindo roteamento entre elas.


   * **Observações importantes:**

     * `GigabitEthernet0/0` é a interface física do roteador.
     * `.10`, `.20` e `.30` são **subinterfaces** correspondentes às VLANs 10, 20 e 30.
     * O comando `encapsulation dot1Q <VLAN>` define a VLAN associada à subinterface.

2. **Switch Layer 3**

   * Switch gerenciável que suporta **SVIs (Switch Virtual Interfaces)**.
   * Permite roteamento interno entre VLANs sem precisar de roteador externo.



### Configuração do Roteador

```bash

! Entrar no modo privilegiado
> enable
! Entrar no modo de configuração global
# configure terminal

! Define o nome do dispositivo como R0
(config)# hostname R0

! Acessa a interface física gig0/0/0
(config)# interface gig0/0/0
! Ativa a interface (tira do estado administrativamente desligado)
(config-if)# no shutdown
! Sai do modo de configuração da interface física
(config-if)# exit

! Cria a subinterface para a VLAN 10
(config)# interface gig0/0/0.10
! Define encapsulamento 802.1Q para VLAN 10
(config-subif)# encapsulation dot1Q 10
! Configura o endereço IP da subinterface VLAN 10
(config-subif)# ip address 192.168.10.1 255.255.255.0
! Sai do modo de configuração da subinterface
(config-subif)# exit

! Cria a subinterface para a VLAN 20
(config)# interface gig0/0/0.20
! Define encapsulamento 802.1Q para VLAN 20
(config-subif)# encapsulation dot1Q 20
! Configura o endereço IP da subinterface VLAN 20
(config-subif)# ip address 192.168.20.1 255.255.255.0
! Sai do modo de configuração da subinterface
(config-subif)# exit

! Cria a subinterface para a VLAN 30
(config)# interface gig0/0/0.30
! Define encapsulamento 802.1Q para VLAN 30
(config-subif)# encapsulation dot1Q 30
! Configura o endereço IP da subinterface VLAN 30
(config-subif)# ip address 192.168.30.1 255.255.255.0
! Sai do modo de configuração da subinterface
(config-subif)# exit

! Cria o pool DHCP para a VLAN 10 (Administração)
(config)# ip dhcp pool ADM
! Define a rede atendida pelo pool ADM
(dhcp-config)# network 192.168.10.0 255.255.255.0
! Define o gateway padrão para os clientes DHCP da VLAN 10
(dhcp-config)# default-router 192.168.10.1
! Define o servidor DNS para os clientes DHCP da VLAN 10
(dhcp-config)# dns-server 8.8.8.8
! Sai do modo de configuração do pool
(dhcp-config)# exit

! Cria o pool DHCP para a VLAN 20 (Suporte Técnico)
(config)# ip dhcp pool ST
! Define a rede atendida pelo pool ST
(dhcp-config)# network 192.168.20.0 255.255.255.0
! Define o gateway padrão para os clientes DHCP da VLAN 20
(dhcp-config)# default-router 192.168.20.1
! Define o servidor DNS para os clientes DHCP da VLAN 20
(dhcp-config)# dns-server 8.8.8.8
! Sai do modo de configuração do pool
(dhcp-config)# exit

! Cria o pool DHCP para a VLAN 30 (Professores)
(config)# ip dhcp pool PROF
! Define a rede atendida pelo pool PROF
(dhcp-config)# network 192.168.30.0 255.255.255.0
! Define o gateway padrão para os clientes DHCP da VLAN 30
(dhcp-config)# default-router 192.168.30.1
! Define o servidor DNS para os clientes DHCP da VLAN 30
(dhcp-config)# dns-server 8.8.8.8
! Sai do modo de configuração do pool
(dhcp-config)# exit

! Sai do modo de configuração global
(config)# exit

! Salva a configuração no dispositivo
# write

```

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


Perfeito! 🚀 Então vamos deixar o exercício ainda mais desafiador: em vez de já entregar os endereços prontos, os alunos terão que **calcular as sub-redes** a partir de uma única rede Classe C, subdividida em sub-redes menores.

Aqui está a versão refeita:


## 8. Atividade Extra (Desafio Nível Iniciante)

Você foi contratado para organizar a rede de uma **escola de tecnologia**. A instituição possui quatro setores principais e um requisito de segmentação lógica:

* **Administração – VLAN 10**
* **Suporte Técnico – VLAN 20**
* **Professores – VLAN 30**
* **Laboratório de Inovação – VLAN 40**

### Condições:

* Toda a rede deverá ser planejada a partir de **uma única faixa de endereços Classe C** fornecida pelo professor.
* Essa faixa deverá ser **subdividida em sub-redes** (VLSM), atribuindo uma sub-rede para cada VLAN.
* Cada sub-rede deverá contemplar, no mínimo, **30 hosts válidos**.

### Tarefas:

1. **Planejamento do Endereçamento**

   * Calcular as **sub-redes necessárias** a partir da faixa Classe C dada.
   * Elaborar uma tabela contendo:

     * Nome da VLAN
     * Número da VLAN
     * Faixa de IP (calculada pelo aluno)
     * Máscara de sub-rede
     * Gateway (primeiro IP válido da rede)

2. **Configuração do Switch**

   * Criar as VLANs 10, 20, 30 e 40.
   * Associar portas específicas para cada setor.
   * Configurar trunk entre switch e roteador.

3. **Configuração do Roteador (Router-on-a-Stick)**

   * Criar **subinterfaces** para cada VLAN com o IP de gateway calculado.
   * Ativar as subinterfaces com encapsulamento 802.1Q.

4. **Configuração do DHCP**

   * Criar um pool DHCP para cada VLAN, entregando IPs válidos da respectiva faixa.
   * Definir o **gateway** e o **servidor DNS (8.8.8.8)**.

5. **Controle de Acesso com ACL - Opcional**

   * Implementar uma política de segurança:

     * A VLAN 40 (Laboratório) deve acessar somente a internet e a VLAN 30 (Professores).
     * O tráfego da VLAN 40 para a VLAN 10 (Administração) deve ser **bloqueado**.

6. **Validação e Testes**

   * Testar ping entre máquinas das diferentes VLANs.
   * Validar se as restrições de ACL estão funcionando corretamente.
   * Entregar um relatório curto (1 página) descrevendo:

     * Resultado dos testes de ping.
     * Evidência do bloqueio configurado.


Dessa forma, o exercício exige:

* **Cálculo de sub-redes (VLSM)** a partir de uma única rede Classe C.
* **Configuração prática de VLANs, trunk, roteador e DHCP**.
* **Implementação de ACLs** para controle de acesso.
* **Documentação final**, simulando a entrega de um trabalho profissional (não esqueça a tabela de enderaçamento).


## Referências

* TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. *Redes de Computadores*, 6ª ed.
* KUROSE, J.; ROSS, K. *Redes de Computadores e a Internet: uma abordagem top-down*, 8ª ed.
* CISCO Networking Academy – CCNA Switching, Routing, and Wireless Essentials.
