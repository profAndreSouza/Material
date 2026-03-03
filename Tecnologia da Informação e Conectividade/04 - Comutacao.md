# Comutação de Redes

## Objetivos da Aula

* Compreender o funcionamento interno de um switch.
* Diferenciar domínio de colisão e domínio de broadcast.
* Entender os modos full-duplex e half-duplex.
* Analisar o comportamento do tráfego em uma rede comutada.

## 1. Funcionamento Interno do Switch

O switch é um dispositivo que opera predominantemente na **Camada 2 (Enlace de Dados)** do Modelo OSI. Sua função principal é encaminhar **quadros Ethernet** dentro de uma rede local com base nos **endereços MAC** (Media Access Control).

Diferentemente de um hub, que simplesmente replica sinais elétricos para todas as portas, o switch realiza decisões lógicas de encaminhamento, tornando a comunicação mais eficiente e reduzindo tráfego desnecessário.

Para compreender seu funcionamento, é necessário entender alguns conceitos fundamentais.


### Quadro (Frame)

Na camada 2, os dados são organizados em estruturas chamadas **quadros**. Um quadro Ethernet contém, entre outros campos:

* MAC de destino
* MAC de origem
* Tipo (EtherType)
* Dados (payload)
* FCS (Frame Check Sequence – verificação de erro)

O switch analisa principalmente os campos de MAC de origem e MAC de destino.


### Endereço MAC

O endereço MAC é um identificador físico de 48 bits (6 bytes), geralmente representado em hexadecimal, por exemplo:

```
00:1A:2B:3C:4D:5E
```

Ele é único para cada interface de rede (NIC). O switch utiliza esse endereço para decidir para qual porta encaminhar o quadro.


### Tabela MAC (CAM Table)

O switch mantém internamente uma tabela chamada **MAC Address Table**, também conhecida como **CAM Table** (Content Addressable Memory).

Essa tabela associa:

```
Endereço MAC  →  Porta do Switch
```

Exemplo conceitual:

| MAC Address       | Porta |
| ----------------- | ----- |
| 00:AA:11:BB:22:CC | Fa0/1 |
| 00:DD:33:EE:44:FF | Fa0/3 |

Essa tabela é dinâmica e possui temporização (aging time). Se um MAC não for visto por determinado tempo, ele é removido automaticamente.


### 1.1 Aprendizado de Endereços (MAC Learning)

O aprendizado de MAC é o primeiro processo fundamental do switch.

Sempre que um quadro chega a uma porta:

1. O switch lê o **MAC de origem**.
2. Verifica se esse MAC já existe na tabela.
3. Caso não exista, ele cria uma entrada associando:

   * MAC de origem
   * Porta física por onde o quadro entrou
4. Caso já exista, ele apenas atualiza o tempo de permanência (aging timer).

Esse processo ocorre independentemente do destino do quadro. Ou seja, todo tráfego recebido contribui para o aprendizado da rede.

#### Por que o aprendizado é importante?

Sem aprendizado, o switch teria que enviar todos os quadros para todas as portas o tempo todo (como um hub). A tabela MAC permite comunicação direcionada e eficiente.


### 1.2 Encaminhamento de Quadros

Após aprender o MAC de origem, o switch analisa o **MAC de destino** para decidir o que fazer com o quadro.

Existem três possibilidades principais:

#### 1. Unicast conhecido

Se o MAC de destino estiver presente na tabela:

* O quadro é enviado somente para a porta associada.
* As demais portas não recebem o tráfego.
* Isso reduz significativamente o uso da largura de banda.

Esse é o comportamento ideal em redes comutadas.


#### 2. Unicast desconhecido

Se o MAC de destino não estiver na tabela:

* O switch não sabe para qual porta enviar.
* Ele realiza flooding (envio para todas as portas, exceto a de origem).

Quando o dispositivo de destino responder, o switch aprenderá seu MAC, tornando as comunicações seguintes direcionadas.


#### 3. Broadcast

Se o MAC de destino for:

```
FF:FF:FF:FF:FF:FF
```

Trata-se de um quadro de broadcast.

Nesse caso:

* O quadro é enviado para todas as portas, exceto a de origem.
* Todos os dispositivos dentro do mesmo domínio de broadcast recebem o quadro.

Exemplo clássico: ARP (Address Resolution Protocol).


### 1.3 Flooding e Broadcast

#### Flooding

Flooding é o comportamento de envio de um quadro para todas as portas, exceto a porta de entrada.

Ocorre em dois cenários principais:

* Destino desconhecido (unicast desconhecido).
* Broadcast.

O flooding é um mecanismo necessário para permitir o aprendizado da rede, mas gera tráfego adicional.


#### Broadcast

Broadcast é um tipo específico de comunicação onde um dispositivo envia uma mensagem para todos os dispositivos da rede local.

Características:

* Usa MAC de destino FF:FF:FF:FF:FF:FF.
* Não é bloqueado pelo switch.
* Permanece restrito ao domínio de broadcast.

Exemplo prático:

Quando um host deseja descobrir o MAC correspondente a um IP da mesma rede, ele envia uma requisição ARP em broadcast. Todos recebem, mas apenas o dispositivo correto responde.


### 1.4 Temporização (Aging Time)

As entradas da tabela MAC não são permanentes (exceto quando configuradas como estáticas).

O switch utiliza um temporizador chamado **aging time**:

* Se um MAC não for visto por determinado período (por padrão, 300 segundos em muitos equipamentos Cisco), ele é removido da tabela.
* Isso permite adaptação a mudanças na topologia da rede.


### 1.5 Visualização da Tabela MAC

Em equipamentos Cisco (ou no ambiente simulado do Cisco Packet Tracer), a tabela pode ser consultada com:

```
enable
show mac address-table
```

A saída geralmente apresenta:

* VLAN associada
* MAC Address
* Tipo (dinâmico ou estático)
* Porta

Exemplo conceitual de saída:

```
Vlan    Mac Address       Type        Ports-    -----------       --------    -----
1       00aa.11bb.22cc    DYNAMIC     Fa0/1
1       00dd.33ee.44ff    DYNAMIC     Fa0/3
```

Isso indica que o switch aprendeu dinamicamente os dispositivos conectados às respectivas portas.

## 2. Domínio de Colisão e Domínio de Broadcast

### 2.1 Domínio de Colisão

Um domínio de colisão é o conjunto de dispositivos que compartilham o mesmo meio físico e podem transmitir simultaneamente, gerando colisões.

* Em hubs: toda a rede pertence a um único domínio de colisão.
* Em switches: cada porta constitui um domínio de colisão independente.

Em ambientes full-duplex, colisões deixam de existir.

### 2.2 Domínio de Broadcast

Um domínio de broadcast é o conjunto de dispositivos que recebem quadros enviados para o endereço MAC de broadcast (FF:FF:FF:FF:FF:FF).

Em uma rede com um único switch:

* Todos os dispositivos pertencem ao mesmo domínio de broadcast.
* O switch não segmenta broadcasts.

A segmentação de domínio de broadcast ocorre por meio de:

* Roteadores
* VLANs


## 3. Full-Duplex e Half-Duplex

### 3.1 Half-Duplex

No modo half-duplex:

* A comunicação ocorre em apenas um sentido por vez.
* Pode haver colisão.
* Era comum em redes com hubs.

### 3.2 Full-Duplex

No modo full-duplex:

* Transmissão e recepção ocorrem simultaneamente.
* Não há colisões.
* É o padrão atual em redes com switches modernos.

Problemas podem ocorrer quando há mismatch de duplex (um lado configurado como full e outro como half), causando perda de desempenho e erros.


## 4. Análise Prática de Tráfego

A análise de tráfego permite visualizar:

* Processos de ARP (broadcast).
* Comunicação ICMP (unicast).
* Comportamento de flooding.
* Aprendizado da tabela MAC.

No modo Simulation do Packet Tracer é possível observar o fluxo de quadros em cada porta.


## Exercícios Práticos no Packet Tracer

### Exercício 1 – Aprendizado da Tabela MAC

#### Objetivo

Observar o processo de aprendizado do switch.

#### Procedimento

1. Inserir:

   * 1 Switch 2960
   * 3 PCs

2. Conectar:

   * PC0 → Fa0/1
   * PC1 → Fa0/2
   * PC2 → Fa0/3

3. Configurar IPs:

   * PC0: 192.168.0.10 /24
   * PC1: 192.168.0.20 /24
   * PC2: 192.168.0.30 /24

4. Executar:

   ```
   ping 192.168.0.20
   ping 192.168.0.30
   ```

5. No switch:

   ```
   enable
   show mac address-table
   ```

6. Limpar tabela:

   ```
   clear mac address-table dynamic
   ```

Analisar o comportamento antes e depois do envio dos pings.


### Exercício 2 – Análise de Flooding

#### Objetivo

Visualizar o comportamento do switch quando o MAC de destino é desconhecido.

#### Procedimento

1. Limpar a tabela MAC.
2. Ativar modo Simulation.
3. Enviar um Simple PDU do PC0 para PC2.
4. Observar:

   * Envio de ARP (broadcast).
   * Flooding inicial.
   * Comunicação unicast subsequente.

Registrar as diferenças entre o primeiro e o segundo envio.


### Exercício 3 – Domínio de Colisão (Hub x Switch)

#### Cenário A – Com Hub

1. Inserir 3 PCs e 1 Hub.
2. Configurar IPs na mesma rede.
3. Gerar tráfego simultâneo.
4. Observar colisões no modo Simulation.

#### Cenário B – Com Switch

1. Substituir o hub por um switch.
2. Repetir os testes.
3. Comparar comportamento da rede.


### Exercício 4 – Full-Duplex e Half-Duplex

#### Procedimento

1. No switch:

   ```
   show interfaces fa0/1
   ```

2. Alterar para half-duplex:

   ```
   conf t
   interface fa0/1
   duplex half
   end
   ```

3. Testar conectividade.

4. Analisar possíveis impactos.
