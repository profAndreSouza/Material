# Aula 06 – VLANs e Segmentação

## Objetivos de Aprendizagem
* Compreender o conceito de **VLANs (Virtual LANs)**.
* Diferenciar segmentação física e segmentação lógica.
* Criar VLANs em um switch para isolar domínios de broadcast.
* Testar a comunicação entre dispositivos em VLANs diferentes.


## 1. Introdução

Nas redes locais tradicionais, **todos os dispositivos conectados a um switch pertencem ao mesmo domínio de broadcast**.  
Isso significa que uma mensagem enviada em broadcast (ex.: ARP Request) é recebida por **todos os hosts da rede**, o que pode causar:

- Tráfego desnecessário.
- Risco de segurança.
- Dificuldade de gerenciamento.

As **VLANs** resolvem esse problema ao permitir criar **redes lógicas independentes dentro de um mesmo switch físico**.


## 2. Conceito de VLAN

- **VLAN (Virtual Local Area Network):** uma rede lógica configurada em software dentro de um switch.
- Permite separar os dispositivos em **grupos distintos**, mesmo que estejam no **mesmo equipamento físico**.

### Benefícios:
- **Segurança:** tráfego de uma VLAN não é visível em outra.
- **Eficiência:** redução de broadcast.
- **Flexibilidade:** reorganização de grupos sem alterar cabos.
- **Gerenciamento:** facilita políticas de rede.


## 3. Exemplo Prático

Imagine uma empresa com dois departamentos:

- **Administração**
- **Suporte Técnico**

Ambos estão conectados ao **mesmo switch**.  
Sem VLANs → todos estão na mesma rede.  
Com VLANs → criamos **VLAN 10 (Administração)** e **VLAN 20 (Suporte Técnico)**.  

Assim, cada departamento só se comunica internamente.


## 4. Configuração de VLANs no Packet Tracer

### Cenário
- 1 switch.
- 4 PCs (2 Administração, 2 Suporte Técnico).

### Passo a Passo
1. Adicionar 1 switch e 4 PCs.
2. Conectar cada PC ao switch com cabo direto.
3. Configurar IPs:
   - Administração: `192.168.10.1` e `192.168.10.2`
   - Suporte: `192.168.20.1` e `192.168.20.2`
   - Máscara: `255.255.255.0` em todos.
4. Criar VLANs no switch:
```

Switch> enable
Switch# configure terminal
Switch(config)# vlan 10
Switch(config-vlan)# name ADMINISTRACAO
Switch(config)# vlan 20
Switch(config-vlan)# name SUPORTE

```
5. Atribuir portas às VLANs:
```

Switch(config)# interface fastEthernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
!
Switch(config)# interface fastEthernet 0/2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
!
Switch(config)# interface fastEthernet 0/3
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20
!
Switch(config)# interface fastEthernet 0/4
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20

```

6. Testar ping:
- PC1 ↔ PC2 (Administração) → **funciona** ✅
- PC3 ↔ PC4 (Suporte Técnico) → **funciona** ✅
- PC1 ↔ PC3 (entre VLANs) → **falha** ❌


## 5. Questões para Discussão
1. Por que os PCs de VLANs diferentes não conseguem se comunicar diretamente?  
2. Qual seria a solução para permitir comunicação entre VLANs (dica: **roteador ou switch camada 3**)?  
3. Em que cenários reais você aplicaria VLANs?


## 6. Critérios de Sucesso
- VLANs criadas corretamente no switch.
- PCs da mesma VLAN se comunicam.
- PCs de VLANs diferentes **não** se comunicam.
- Documentação com tabela de IPs e VLANs atribuídas.


## 7. Atividade Extra (opcional)
- Criar uma terceira VLAN chamada **Professores** (VLAN 30).
- Atribuir um PC a essa VLAN e verificar a comunicação.


## Referências
- TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. *Redes de Computadores*, 6ª ed.  
- KUROSE, J.; ROSS, K. *Redes de Computadores e a Internet: uma abordagem top-down*, 8ª ed.  
- CISCO Networking Academy – CCNA Switching, Routing, and Wireless Essentials.
