# VLANs e Segmentação

## Objetivos de Aprendizagem

* Entender o que são **VLANs (Virtual Local Area Networks)** e por que elas são usadas.
* Diferenciar **segmentação física** e **segmentação lógica**.
* Saber como criar VLANs em switches para **separar grupos de computadores**.
* Entender por que é necessário **roteamento entre VLANs** para comunicação entre redes distintas.
* Relacionar VLANs com exemplos reais em empresas, escolas e provedores de internet.

## 1. Introdução: Por que usar VLANs?

Imagine uma escola onde todos os professores, alunos e setor administrativo estão conectados ao mesmo switch.

* Sem VLANs: quando um aluno manda uma mensagem de rede, ela chega também nos computadores da administração e dos professores.
* Isso gera:

  * Tráfego desnecessário (rede sobrecarregada)
  * Menos segurança (qualquer máquina pode ver pacotes que não deveria)
  * Dificuldade de gestão (tudo misturado em uma mesma rede)

Solução: usar VLANs, que permitem separar logicamente os setores dentro do mesmo switch físico.

## 2. O que é VLAN?

Uma **VLAN (Virtual Local Area Network)** é uma rede virtual criada dentro de um mesmo switch físico.
Cada VLAN funciona como se fosse uma rede separada.

Exemplo: pense em um prédio.

* Sem VLANs: todos os andares compartilham um único alto-falante, então qualquer anúncio é ouvido por todos.
* Com VLANs: cada andar tem o seu próprio alto-falante e só ouve as mensagens relevantes.

Benefícios principais:

1. Segurança – setores ficam isolados
2. Eficiência – menos tráfego inútil
3. Flexibilidade – reorganização sem recabeamento
4. Escalabilidade – rede cresce de forma mais controlada

## 3. Segmentação Física x Segmentação Lógica

* Segmentação Física: cada setor teria seu próprio switch.

  * Vantagem: isolamento real.
  * Desvantagem: mais custo e pouca flexibilidade.

* Segmentação Lógica (com VLANs): um único switch é dividido em várias redes virtuais.

  * Vantagem: menor custo, maior flexibilidade.
  * Desvantagem: exige configuração correta.

## 4. Exemplo Real

Uma empresa possui três setores:

* Administração → VLAN 10
* Suporte Técnico → VLAN 20
* Professores → VLAN 30

Sem VLANs: todos recebem o tráfego de todos os setores.
Com VLANs: cada setor tem sua rede isolada.
Para comunicação entre setores, é necessário um roteador ou um switch de camada 3.

## 5. Configuração de VLANs no Switch

```bash
! Entrar no modo EXEC
> enable

! Entrar no modo privilegiado
# show vlan

! Entrar no modo de configuração global
# configure terminal

! Criar a VLAN 10 com nome "Administracao"
(config) # vlan 10
(config-vlan) # name Administracao
(config-vlan) # exit

! Criar a VLAN 20 com nome "Suporte_Tecnico"
(config) # vlan 20
(config-vlan) # name Suporte_Tecnico
(config-vlan) # exit

! Criar a VLAN 30 com nome "Professores"
(config) # vlan 30
(config-vlan) # name Professores
(config-vlan) # exit

! Exibir as VLANs criadas
(config) # do show vlan

! Associar as portas Fa0/1 a Fa0/6 à VLAN 10
(config) # interface range Fa0/1-6
(config-if-range)# switchport mode access
(config-if-range)# switchport access vlan 10
(config-if-range)# exit

! Associar as portas Fa0/7 a Fa0/12 à VLAN 20
(config) # interface range Fa0/7-12
(config-if-range)# switchport mode access
(config-if-range)# switchport access vlan 20
(config-if-range)# exit

! Associar as portas Fa0/13 a Fa0/24 à VLAN 30
(config) # interface range Fa0/13-24
(config-if-range)# switchport mode access
(config-if-range)# switchport access vlan 30
(config-if-range)# exit

! Configurar as portas Gig0/1 e Gig0/2 como trunk e permitir VLANs 10,20,30
(config) # interface range Gig0/1-2
(config-if-range)# switchport mode trunk
(config-if-range)# switchport trunk allowed vlan 10,20,30
(config-if-range)# exit

! Sair do modo de configuração
(config)# exit

! Salvar a configuração no switch
# wr
```

## 6. Roteamento entre VLANs (Inter-VLAN Routing)

As VLANs criam redes independentes. Se a Administração precisar conversar com o Suporte, será necessário um dispositivo de camada 3.

Opções:

1. Router-on-a-Stick – roteador com subinterfaces, conectado ao switch por um link trunk.
2. Switch Layer 3 – o próprio switch faz o roteamento entre VLANs.

## 6.1 Configuração do Roteador

```bash
! Entrar no modo EXEC privilegiado
> enable

! Entrar no modo de configuração global
# configure terminal

! Ativar a interface física Gig0/0/0
(config)# interface gig0/0/0
(config-if)# no shutdown
(config-if)# exit

! Criar subinterface para VLAN 10 e configurar IP
(config)# interface gig0/0/0.10
(config-subif)# encapsulation dot1Q 10
(config-subif)# ip address 192.168.10.1 255.255.255.0
(config-subif)# exit

! Criar subinterface para VLAN 20 e configurar IP
(config)# interface gig0/0/0.20
(config-subif)# encapsulation dot1Q 20
(config-subif)# ip address 192.168.20.1 255.255.255.0
(config-subif)# exit

! Criar subinterface para VLAN 30 e configurar IP
(config)# interface gig0/0/0.30
(config-subif)# encapsulation dot1Q 30
(config-subif)# ip address 192.168.30.1 255.255.255.0
(config-subif)# exit

! Criar pool DHCP para VLAN 10 (Administracao)
(config)# ip dhcp pool adm
(dhcp-config)# network 192.168.10.0 255.255.255.0
(dhcp-config)# default-router 192.168.10.1
(dhcp-config)# dns-server 8.8.8.8
(dhcp-config)# exit

! Criar pool DHCP para VLAN 20 (Suporte Tecnico)
(config)# ip dhcp pool st
(dhcp-config)# network 192.168.20.0 255.255.255.0
(dhcp-config)# default-router 192.168.20.1
(dhcp-config)# dns-server 8.8.8.8
(dhcp-config)# exit

! Criar pool DHCP para VLAN 30 (Professores)
(config)# ip dhcp pool prof
(dhcp-config)# network 192.168.30.0 255.255.255.0
(dhcp-config)# default-router 192.168.30.1
(dhcp-config)# dns-server 8.8.8.8
(dhcp-config)# exit

! Sair do modo de configuração global
(config)# exit

! Salvar as configurações no roteador
# wr

! Mostrar a configuração em execução
# show run

```

## 7. Diferença entre Interface Física e Subinterface

| Tipo             | Função                          | Exemplo de uso |
| ---------------- | ------------------------------- | -------------- |
| Interface Física | Porta real do roteador/switch   | Gig0/0/0       |
| Subinterface     | VLAN dentro da interface física | Gig0/0/0.10    |

## 8. Cenários Reais

* Escolas: separar rede de alunos, professores e secretaria
* Hospitais: separar médicos, enfermagem e administração
* Empresas: cada departamento na sua própria VLAN
* Provedores: entregar conexões isoladas para clientes diferentes

## 9. Atividade Extra (Desafio)

Uma escola de tecnologia precisa separar sua rede:

* Administração → VLAN 10
* Suporte Técnico → VLAN 20
* Professores → VLAN 30
* Laboratório de Inovação → VLAN 40

Tarefas:

1. Planejar o endereçamento IP (usar apenas uma rede Classe C e aplicar VLSM).
2. Criar VLANs no switch e associar portas.
3. Configurar o roteador com subinterfaces.
4. Criar pools DHCP para cada VLAN.
5. Implementar ACL (opcional): Laboratório só pode acessar Internet e Professores.
6. Testar comunicação entre setores e validar ACLs.
7. Entregar um relatório curto com a tabela de endereçamento e resultados dos testes.

## Referências

* TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. *Redes de Computadores*, 6ª ed.
* KUROSE, J.; ROSS, K. *Redes de Computadores e a Internet: uma abordagem top-down*, 8ª ed.
* CISCO Networking Academy – CCNA Switching, Routing, and Wireless Essentials.
