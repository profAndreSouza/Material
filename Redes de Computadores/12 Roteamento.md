
# Protocolos de Roteamento – Estático e Dinâmico

## 1. Introdução ao Roteamento

### Conceito de Roteamento em Redes IP

O **roteamento** é o processo de encaminhar pacotes de dados entre redes diferentes por meio de dispositivos chamados **roteadores**. Quando um pacote precisa ir de uma rede de origem para uma rede de destino, o roteador analisa o **endereço IP de destino** e decide qual o melhor caminho para entregar o pacote.

> **Exemplo**:
> Um computador na rede `192.168.1.0/24` deseja acessar um servidor na rede `10.0.0.0/24`. O roteador decide como encaminhar esse pacote até o servidor com base em sua **tabela de roteamento**.

### Diferença entre Roteadores e Switches

| Característica         | Switch                                   | Roteador                                         |
| ---------------------- | ---------------------------------------- | ------------------------------------------------ |
| Camada OSI             | Camada 2 (Enlace de Dados)               | Camada 3 (Rede)                                  |
| Função principal       | Comutação de quadros dentro da mesma LAN | Encaminhamento de pacotes entre redes diferentes |
| Base de decisão        | Endereço MAC                             | Endereço IP                                      |
| Tabela utilizada       | Tabela MAC (CAM)                         | Tabela de Roteamento                             |
| Exemplo de dispositivo | `Switch Cisco Catalyst 2960`             | `Router Cisco ISR 4321`                          |

> **Resumo**:
>
> * **Switches** interligam dispositivos **dentro de uma mesma rede local**.
> * **Roteadores** conectam **redes diferentes** e decidem o melhor caminho para os dados.

### Caminho de um Pacote na Rede (Forwarding vs Routing)

#### Routing (Roteamento)

É o processo de **decisão lógica** que determina qual o próximo salto (next-hop) que o pacote deve seguir, com base no endereço IP de destino.

> Realizado uma vez, quando o pacote chega ao roteador.

#### Forwarding (Encaminhamento)

É a ação de **movimentar efetivamente o pacote** da interface de entrada para a interface de saída, com base na decisão de roteamento.

> O forwarding acontece para cada pacote, baseado na decisão já tomada.

---

#### Exemplo Prático: Roteamento e Encaminhamento

Considere a seguinte topologia:

```
PC1 ---- SW1 ---- R1 ---- R2 ---- SW2 ---- PC2
```

* PC1: 192.168.1.10
* PC2: 10.0.0.20
* R1: interfaces 192.168.1.1 / 172.16.0.1
* R2: interfaces 172.16.0.2 / 10.0.0.1

1. **Routing**:
   R1 recebe um pacote de PC1 destinado a 10.0.0.20. Ele consulta sua tabela de roteamento e decide que deve enviar esse pacote para R2 via `172.16.0.2`.

2. **Forwarding**:
   R1 pega o pacote e encaminha fisicamente pela interface que leva a R2. R2, por sua vez, faz o mesmo até chegar ao destino final (PC2).

---

## 2. Tipos de Roteamento

O roteamento pode ser classificado em diferentes tipos, com base na forma como as rotas são aprendidas e gerenciadas pelos roteadores. A seguir, são apresentados os principais tipos:

### 2.1 Roteamento Estático

O **roteamento estático** consiste em rotas que são configuradas manualmente pelo administrador da rede.

**Características:**

* Não muda automaticamente mesmo que a topologia da rede mude.
* Exige conhecimento prévio da estrutura da rede.
* Ideal para redes pequenas ou rotas específicas de controle.

**Vantagens:**

* Maior controle sobre os caminhos.
* Menor uso de recursos do roteador (CPU e memória).
* Mais seguro, pois não anuncia rotas na rede.

**Desvantagens:**

* Não se adapta a falhas automaticamente.
* Difícil de manter em redes grandes.

**Exemplo de configuração em Cisco IOS:**

```bash
R1(config)# ip route 10.0.0.0 255.255.255.0 192.168.1.2
```

Essa linha configura uma rota estática para a rede `10.0.0.0/24` usando o próximo salto `192.168.1.2`.

---

### 2.2 Roteamento Dinâmico

O **roteamento dinâmico** utiliza protocolos para que os roteadores descubram automaticamente rotas e se adaptem a mudanças na rede.

**Protocolos Comuns:**

* RIP (Routing Information Protocol)
* OSPF (Open Shortest Path First)
* EIGRP (Enhanced Interior Gateway Routing Protocol)

**Características:**

* Atualiza automaticamente as rotas com base em mudanças na topologia.
* Requer mais processamento e memória que o roteamento estático.

**Vantagens:**

* Alta escalabilidade.
* Convergência automática em caso de falhas.
* Fácil manutenção em redes de médio e grande porte.

**Desvantagens:**

* Pode introduzir instabilidade se mal configurado.
* Consome mais largura de banda e CPU.

---

### 2.3 Roteamento Padrão (Default Routing)

O **roteamento padrão** é um tipo de rota estática que define um "caminho genérico" para qualquer tráfego cujo destino não esteja na tabela de roteamento.

**Aplicação comum:**

* Redes pequenas que acessam a internet via um único roteador.

**Exemplo de configuração:**

```bash
R1(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.1
```

Essa rota diz: "envie todo o tráfego desconhecido para 192.168.1.1".

---

### 2.4 Roteamento Conectado Diretamente

O **roteamento conectado diretamente** ocorre quando uma interface do roteador está atribuída a uma rede IP. Essas rotas são inseridas automaticamente na tabela de roteamento.

**Exemplo:**

Se a interface `GigabitEthernet0/0` do roteador estiver configurada com o IP `192.168.10.1/24`, então a rota `192.168.10.0/24` será automaticamente adicionada à tabela de roteamento.

```bash
R1(config)# interface g0/0
R1(config-if)# ip address 192.168.10.1 255.255.255.0
R1(config-if)# no shutdown
```

**Vantagem:**

* Imediatamente disponível sem configuração adicional de rotas.

**Uso comum:**

* Conexões locais diretamente conectadas ao roteador.


---

## 3. Roteamento Estático

O roteamento estático é uma técnica na qual o administrador configura manualmente as rotas nos roteadores. Ele é simples, direto e útil em diversos contextos, especialmente em redes menores ou em rotas de controle específicas.

### 3.1 Conceito e Funcionamento

No roteamento estático, o administrador define rotas fixas no roteador para alcançar redes específicas. Essas rotas não mudam automaticamente e permanecem ativas enquanto a interface estiver operacional.

Quando um pacote chega ao roteador, a tabela de roteamento é consultada. Se houver uma rota estática correspondente ao destino, ela será usada para encaminhar o pacote.

### 3.2 Vantagens e Desvantagens

**Vantagens:**

* Simplicidade de configuração em redes pequenas.
* Maior controle sobre os caminhos de tráfego.
* Menor uso de CPU e memória do roteador.
* Não há propagação de rotas pela rede, aumentando a segurança.

**Desvantagens:**

* Falta de escalabilidade.
* Não se adapta automaticamente a falhas na rede.
* Requer manutenção manual em topologias mais complexas.

---

### 3.3 Configuração de Rotas Estáticas no Cisco IOS

A sintaxe básica para configurar uma rota estática em roteadores Cisco é:

```bash
ip route <destino> <máscara> <next-hop ou interface de saída>
```

**Exemplo:**

```bash
R1(config)# ip route 10.1.1.0 255.255.255.0 192.168.1.2
```

Este comando informa ao roteador que, para alcançar a rede `10.1.1.0/24`, ele deve encaminhar os pacotes ao próximo salto `192.168.1.2`.

---

### 3.4 Rotas Estáticas com Next-Hop e Interface de Saída

Existem três formas de configurar rotas estáticas:

1. **Com endereço de next-hop:**

```bash
ip route 10.1.1.0 255.255.255.0 192.168.1.2
```

2. **Com interface de saída:**

```bash
ip route 10.1.1.0 255.255.255.0 GigabitEthernet0/0
```

3. **Com next-hop e interface de saída (forma recomendada):**

```bash
ip route 10.1.1.0 255.255.255.0 192.168.1.2 GigabitEthernet0/0
```

**Nota:**
A configuração com ambos os parâmetros (next-hop e interface) pode aumentar a eficiência e reduzir o processamento ARP.

---

### 3.5 Rotas Estáticas Flutuantes (Floating Static Routes)

Rotas estáticas flutuantes são usadas como **rotas de backup**, com uma **distância administrativa (AD)** maior do que a de um protocolo de roteamento dinâmico.

**Exemplo:**

```bash
ip route 10.1.1.0 255.255.255.0 192.168.1.2 200
```

* O valor `200` define a distância administrativa.
* Essa rota só será usada se as rotas dinâmicas (com AD menor) falharem.

---

### 3.6 Aplicações Típicas em Redes Pequenas e Rotas de Backup

**Redes Pequenas:**

* Ideal para redes com poucos dispositivos e rotas fixas.
* Evita a complexidade de protocolos dinâmicos.

**Rotas de Backup:**

* Utilizadas para fornecer redundância.
* Combinadas com rotas dinâmicas para garantir disponibilidade.

**Exemplo de cenário de uso:**

* Roteador com duas conexões WAN (principal e secundária).
* Rota dinâmica ativa pela principal.
* Rota estática flutuante configurada pela secundária.

---

## 4. Roteamento Dinâmico

O **roteamento dinâmico** é um método de roteamento no qual os roteadores trocam informações sobre as redes com outros roteadores, ajustando-se automaticamente às mudanças na topologia da rede. Isso permite que a rede se adapte a falhas ou alterações de maneira eficiente, sem a intervenção manual constante.

### 4.1 Conceito e Funcionamento

No roteamento dinâmico, os protocolos de roteamento trocam informações sobre rotas entre os roteadores, permitindo que eles atualizem suas tabelas de roteamento automaticamente. Os roteadores usam essas informações para determinar o melhor caminho para enviar os pacotes.

**Como funciona:**

1. **Troca de informações**: Os roteadores trocam informações sobre as redes que conhecem.
2. **Atualização das tabelas**: As tabelas de roteamento são atualizadas periodicamente, com base nas informações recebidas.
3. **Escolha do melhor caminho**: O protocolo de roteamento utiliza métricas para selecionar o melhor caminho disponível.

A principal vantagem do roteamento dinâmico é que ele **adapta-se automaticamente a falhas ou mudanças na rede**, como a adição ou remoção de redes.

---

### 4.2 Benefícios sobre Rotas Estáticas

**Vantagens do Roteamento Dinâmico sobre o Estático:**

* **Adaptação automática a falhas**: Quando uma rota falha, o protocolo dinâmico rapidamente encontra uma nova rota.
* **Escalabilidade**: Ideal para redes grandes ou que estão em crescimento, já que não exige configuração manual das rotas.
* **Manutenção simplificada**: Em redes dinâmicas, a manutenção das rotas é feita automaticamente, sem necessidade de atualização manual.
* **Menos erros humanos**: Em redes grandes, pode ser fácil cometer erros ao configurar rotas estáticas.

**Desvantagens:**

* Maior uso de recursos (memória, CPU e largura de banda).
* Requer configuração e monitoramento adequados para evitar loops e problemas de convergência.

---

### 4.3 Tipos de Protocolos de Roteamento Dinâmico

Existem três tipos principais de protocolos de roteamento dinâmico, cada um com suas características e formas de operação:

#### 4.3.1 **Distance Vector (Vetores de Distância)**

Os protocolos de roteamento **distance vector** determinam o melhor caminho com base na **distância** e na direção (vetor) para cada rede.

**Características:**

* Utilizam métricas simples, como número de saltos, para determinar o caminho.
* Enviam informações de toda a tabela de roteamento para seus vizinhos periodicamente.

**Exemplo:**

* **RIP (Routing Information Protocol)**: Um dos protocolos mais antigos, usa o número de saltos (hop count) como métrica. A máxima distância é de 15 saltos, tornando-o inadequado para redes grandes.

**Funcionamento:**

* Cada roteador compartilha suas informações de roteamento com seus vizinhos.
* A cada atualização, a tabela de roteamento é recalculada com base nos dados recebidos.

**Exemplo de configuração de RIP:**

```bash
R1(config)# router rip
R1(config-router)# network 192.168.1.0
R1(config-router)# version 2
```

#### 4.3.2 **Link State (Estado de Link)**

Os protocolos **link state** mantêm uma visão completa da topologia da rede, permitindo que cada roteador calcule o melhor caminho de forma independente.

**Características:**

* Cada roteador mantém um banco de dados de estado de link que descreve toda a topologia de rede.
* Envia informações apenas quando há mudanças na topologia, ao invés de enviar tabelas completas periodicamente.

**Exemplo:**

* **OSPF (Open Shortest Path First)**: Um protocolo de roteamento baseado em link state que usa o **algoritmo Dijkstra** para calcular o melhor caminho.

**Funcionamento:**

* Os roteadores compartilham informações de link (estado de suas interfaces e conexões com outros roteadores).
* Cada roteador calcula sua própria tabela de roteamento usando o algoritmo de caminho mais curto.

**Exemplo de configuração de OSPF:**

```bash
R1(config)# router ospf 1
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
```

#### 4.3.3 **Hybrid (Híbrido)**

Os protocolos **híbridos** combinam características dos protocolos **distance vector** e **link state**, tentando aproveitar o melhor dos dois mundos: simplicidade de configuração e convergência eficiente.

**Características:**

* Mantêm tabelas de roteamento semelhantes aos protocolos distance vector, mas com atualizações mais rápidas e de forma mais eficiente.
* Menor uso de largura de banda e recursos computacionais do que os protocolos link state.

**Exemplo:**

* **EIGRP (Enhanced Interior Gateway Routing Protocol)**: Um protocolo híbrido desenvolvido pela Cisco, que utiliza métricas mais complexas, como largura de banda, atraso, confiabilidade e carga.

**Funcionamento:**

* Usa a **métrica composta** para calcular o melhor caminho.
* O EIGRP converte dados de forma eficiente para evitar tráfego excessivo de informações.

**Exemplo de configuração de EIGRP:**

```bash
R1(config)# router eigrp 100
R1(config-router)# network 192.168.1.0
R1(config-router)# no auto-summary
```

---

## 5. Comparação entre Protocolos de Roteamento

Na escolha do protocolo de roteamento ideal, é importante considerar várias características de cada protocolo. Aqui, comparamos os principais protocolos de roteamento dinâmico: **RIP**, **OSPF** e **EIGRP**, levando em conta métricas, velocidade de convergência, escalabilidade e consumo de recursos.

### 5.1 Métricas Usadas por Cada Protocolo

As **métricas** são critérios usados pelos protocolos para determinar o melhor caminho para alcançar uma rede de destino. Cada protocolo utiliza uma métrica diferente para essa avaliação.

#### **RIP (Routing Information Protocol)**

* **Métrica**: Número de saltos (Hop Count).
* **Máximo de saltos**: 15 saltos. Se o destino estiver a mais de 15 saltos de distância, ele é considerado inatingível.

#### **OSPF (Open Shortest Path First)**

* **Métrica**: Custo (Cost), baseado na largura de banda da interface. O custo de uma rota é a soma dos custos de todas as interfaces ao longo do caminho.
* **Fórmula de Custo**: Custo = 100,000,000 / largura de banda da interface.

#### **EIGRP (Enhanced Interior Gateway Routing Protocol)**

* **Métrica**: Composta por vários fatores:

  * Largura de banda mínima no caminho.
  * Atraso do caminho.
  * Confiabilidade.
  * Carga.

  A métrica é calculada com uma fórmula complexa, levando em consideração a largura de banda e o atraso como os principais fatores.

---

### 5.2 Velocidade de Convergência

A **convergência** refere-se ao tempo que um protocolo de roteamento leva para se ajustar após uma mudança na topologia da rede, como a falha de um link.

#### **RIP**

* **Velocidade de convergência**: Relativamente lenta. Pode levar de 30 segundos a 1 minuto para detectar mudanças, já que a troca de informações ocorre de forma periódica.
* **Desvantagem**: Pode levar a loops de roteamento temporários durante a convergência.

#### **OSPF**

* **Velocidade de convergência**: Rápida. O OSPF usa o algoritmo SPF (Shortest Path First) e pode se ajustar rapidamente após uma mudança de topologia.
* **Desvantagem**: Embora rápido, a convergência do OSPF pode ser um pouco mais lenta em redes muito grandes devido ao número de atualizações necessárias.

#### **EIGRP**

* **Velocidade de convergência**: Muito rápida. O EIGRP utiliza o algoritmo DUAL (Diffusing Update Algorithm), que permite convergência quase instantânea em redes pequenas e médias.
* **Desvantagem**: Embora rápido, o EIGRP pode consumir mais largura de banda ao enviar atualizações de roteamento.

---

### 5.3 Escalabilidade

A **escalabilidade** refere-se à capacidade do protocolo de suportar redes grandes e complexas.

#### **RIP**

* **Escalabilidade**: Baixa. O RIP é adequado apenas para redes pequenas ou médias devido ao seu limite de 15 saltos e à sua falta de capacidade para gerenciar redes grandes de forma eficiente.

#### **OSPF**

* **Escalabilidade**: Alta. O OSPF é projetado para grandes redes, podendo ser dividido em áreas para reduzir a complexidade e melhorar a eficiência na troca de informações de roteamento.
* **Topologia hierárquica**: Utiliza áreas OSPF, onde cada área tem uma tabela de roteamento separada.

#### **EIGRP**

* **Escalabilidade**: Alta. O EIGRP é eficaz em redes grandes e médias, e pode se adaptar rapidamente a mudanças na rede.
* **Suporte a grandes redes**: Embora o EIGRP seja escalável, ele pode ser mais eficiente em redes médias devido à complexidade das métricas.

---

### 5.4 Consumo de Recursos

O **consumo de recursos** se refere à quantidade de **CPU**, **memória** e **largura de banda** que um protocolo utiliza.

#### **RIP**

* **Consumo de recursos**: Baixo. Como o RIP é simples, ele consome pouca CPU e memória, sendo ideal para redes pequenas.
* **Largura de banda**: Relativamente baixo uso de largura de banda, mas o RIP envia atualizações periodicamente, o que pode ser um problema em redes maiores.

#### **OSPF**

* **Consumo de recursos**: Moderado. O OSPF exige mais CPU e memória devido ao seu processo de cálculo de caminho mais complexo.
* **Largura de banda**: Utiliza mais largura de banda do que o RIP, mas é mais eficiente em redes grandes.

#### **EIGRP**

* **Consumo de recursos**: Moderado. O EIGRP usa mais recursos do que o RIP, mas menos do que o OSPF. Ele calcula rotas complexas e pode exigir maior uso de memória e CPU.
* **Largura de banda**: O EIGRP envia atualizações somente quando há mudanças na rede, o que o torna mais eficiente em termos de largura de banda do que o RIP.

---

### Resumo Comparativo

| Protocolo | Métrica                                  | Velocidade de Convergência | Escalabilidade | Consumo de Recursos |
| --------- | ---------------------------------------- | -------------------------- | -------------- | ------------------- |
| **RIP**   | Número de Saltos (Hop Count)             | Lenta                      | Baixa          | Baixo               |
| **OSPF**  | Custo (Cost)                             | Rápida                     | Alta           | Moderado            |
| **EIGRP** | Largura de Banda, Atraso, Confiabilidade | Muito Rápida               | Alta           | Moderado            |

---

## 6. Configuração de Protocolos Dinâmicos no Cisco IOS

A configuração de protocolos de roteamento dinâmico no **Cisco IOS** é realizada por meio da interface de linha de comando (CLI). Abaixo, veremos como configurar **RIP**, **OSPF** e **EIGRP**, além de comandos úteis para verificação.

### 6.1 Configuração Básica do RIP

O **RIP** (Routing Information Protocol) é um dos protocolos de roteamento dinâmico mais simples. A configuração do RIP no Cisco IOS é feita da seguinte maneira:

#### Passos para Configuração do RIP:

1. **Entrar no modo de configuração global**:

   ```bash
   R1> enable
   R1# configure terminal
   ```

2. **Ativar o protocolo RIP e definir a versão**:

   ```bash
   R1(config)# router rip
   R1(config-router)# version 2
   ```

3. **Configurar a rede que será propagada pelo RIP**:

   ```bash
   R1(config-router)# network 192.168.1.0
   ```

4. **Desabilitar o resumo automático de sub-redes (opcional, mas recomendado)**:

   ```bash
   R1(config-router)# no auto-summary
   ```

5. **Salvar as configurações**:

   ```bash
   R1# write memory
   ```

#### Comando de Verificação para RIP:

Para verificar as rotas propagadas pelo RIP, use o comando:

```bash
R1# show ip route rip
```

---

### 6.2 Configuração Básica do OSPF

O **OSPF** (Open Shortest Path First) é um protocolo de roteamento baseado em link state. Ele é mais complexo que o RIP, mas oferece melhor escalabilidade e convergência.

#### Passos para Configuração do OSPF:

1. **Entrar no modo de configuração global**:

   ```bash
   R1> enable
   R1# configure terminal
   ```

2. **Ativar o protocolo OSPF e definir o ID do processo OSPF**:

   ```bash
   R1(config)# router ospf 1
   ```

3. **Configurar a rede a ser incluída no OSPF e atribuir a área OSPF**:

   ```bash
   R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
   ```

4. **Salvar as configurações**:

   ```bash
   R1# write memory
   ```

#### Comando de Verificação para OSPF:

Para verificar as rotas OSPF, use:

```bash
R1# show ip ospf neighbor
R1# show ip route ospf
```

---

### 6.3 Configuração Básica do EIGRP

O **EIGRP** (Enhanced Interior Gateway Routing Protocol) é um protocolo híbrido que oferece uma boa combinação de características dos protocolos **distance vector** e **link state**.

#### Passos para Configuração do EIGRP:

1. **Entrar no modo de configuração global**:

   ```bash
   R1> enable
   R1# configure terminal
   ```

2. **Ativar o protocolo EIGRP e definir o número do Autonomous System (AS)**:

   ```bash
   R1(config)# router eigrp 100
   ```

3. **Configurar a rede a ser anunciada pelo EIGRP**:

   ```bash
   R1(config-router)# network 192.168.1.0
   ```

4. **Desabilitar o resumo automático de sub-redes (opcional)**:

   ```bash
   R1(config-router)# no auto-summary
   ```

5. **Salvar as configurações**:

   ```bash
   R1# write memory
   ```

#### Comando de Verificação para EIGRP:

Para verificar as rotas EIGRP, use:

```bash
R1# show ip eigrp neighbors
R1# show ip route eigrp
```

---

### 6.4 Verificação com Comandos

Após configurar qualquer um dos protocolos de roteamento dinâmico, você pode usar os seguintes comandos de verificação para monitorar o funcionamento e a propagação das rotas:

#### Comando `show ip route`

Este comando mostra a tabela de roteamento do roteador, incluindo rotas dinâmicas.

```bash
R1# show ip route
```

Exemplo de saída:

```
R 192.168.1.0/24 [120/1] via 192.168.0.2, 00:05:35, Ethernet0
O 192.168.2.0/24 [110/2] via 192.168.0.3, 00:10:12, Serial0
D 192.168.3.0/24 [90/3] via 192.168.0.4, 00:15:30, Serial1
```

#### Comando `show ip protocols`

Este comando fornece informações detalhadas sobre os protocolos de roteamento configurados, incluindo o estado de cada protocolo e as redes que estão sendo anunciadas.

```bash
R1# show ip protocols
```

Exemplo de saída:

```
Routing Protocol is "rip"
  Sending updates every 30 seconds, next update due in 00:00:20
  Routing for Networks:
    192.168.1.0
  Passive Interfaces:
    Ethernet0
  Default version to send is 2 (RIPv2)
```

#### Comando `debug`

Os comandos `debug` podem ser usados para monitorar o tráfego de roteamento em tempo real. Use com cautela, especialmente em redes em produção, pois eles podem gerar muita saída.

Exemplo para depurar RIP:

```bash
R1# debug ip rip
```

Exemplo para depurar OSPF:

```bash
R1# debug ip ospf events
```

Exemplo para depurar EIGRP:

```bash
R1# debug eigrp packets
```

---

## 7. Tabela de Roteamento

A **tabela de roteamento** é a estrutura onde os roteadores armazenam informações sobre as rotas que podem ser usadas para alcançar redes específicas. Essas informações são essenciais para que o roteador tome decisões sobre o melhor caminho a seguir ao encaminhar pacotes.

### 7.1 Interpretação da Tabela de Roteamento

A tabela de roteamento é composta por entradas que descrevem os caminhos possíveis para diferentes destinos. Cada entrada contém informações sobre a **rede de destino**, a **máscara de sub-rede**, o **próximo salto** (next-hop), a **interface de saída** e a **métrica** associada.

#### Exemplo de uma Tabela de Roteamento:

```bash
R1# show ip route
```

Exemplo de saída:

```
C    192.168.1.0/24 is directly connected, Ethernet0
S    192.168.2.0/24 [1/0] via 192.168.0.2, 00:05:23, Ethernet1
O    192.168.3.0/24 [110/2] via 192.168.0.3, 00:10:12, Serial0
D    192.168.4.0/24 [90/3] via 192.168.0.4, 00:15:30, Serial1
```

#### Explicação dos Campos:

* **C**: A rota está conectada diretamente ao roteador (Connected).
* **S**: A rota é estática (Static).
* **O**: A rota foi aprendida através do OSPF (Open Shortest Path First).
* **D**: A rota foi aprendida através do EIGRP (Enhanced Interior Gateway Routing Protocol).
* **192.168.1.0/24**: A rede de destino.
* **\[1/0]**: A métrica da rota (o número à esquerda do `/` é a distância administrativa, e o número à direita é a métrica do protocolo).
* **via 192.168.0.2**: O próximo salto (next-hop).
* **00:05:23**: O tempo desde que a última atualização de roteamento foi recebida.
* **Ethernet0**: A interface de saída pela qual o pacote será enviado.

---

### 7.2 Códigos de Rotas

Cada entrada na tabela de roteamento possui um código que indica a origem da rota. Esses códigos ajudam a identificar como a rota foi aprendida ou configurada no roteador.

#### Códigos Comuns:

* **C** - **Conectado**: A rota foi configurada localmente, ou seja, a rede de destino está diretamente conectada a uma das interfaces do roteador.
* **S** - **Estático**: A rota foi configurada manualmente como uma rota estática pelo administrador de rede.
* **O** - **OSPF**: A rota foi aprendida através do protocolo de roteamento OSPF.
* **D** - **EIGRP**: A rota foi aprendida através do protocolo de roteamento EIGRP.
* **R** - **RIP**: A rota foi aprendida através do protocolo de roteamento RIP.
* **B** - **BGP**: A rota foi aprendida através do protocolo de roteamento BGP (Border Gateway Protocol).
* **L** - **Local**: A rota representa uma interface local do roteador.
* **A** - **Ativa**: A rota está ativa e em uso.
* \*\*\* (asterisco)\*\* - **Rota de Default**: Indica uma rota padrão que é usada quando não há outra rota mais específica para o destino.

#### Exemplo de Códigos:

```bash
C    192.168.1.0/24 is directly connected, Ethernet0
S    192.168.2.0/24 [1/0] via 192.168.0.2, 00:05:23, Ethernet1
O    192.168.3.0/24 [110/2] via 192.168.0.3, 00:10:12, Serial0
D    192.168.4.0/24 [90/3] via 192.168.0.4, 00:15:30, Serial1
```

No exemplo acima:

* **C** indica que a rede 192.168.1.0/24 está diretamente conectada à interface Ethernet0.
* **S** indica que a rota 192.168.2.0/24 foi configurada como uma rota estática.
* **O** indica que a rota 192.168.3.0/24 foi aprendida através do OSPF.
* **D** indica que a rota 192.168.4.0/24 foi aprendida através do EIGRP.

---

### 7.3 Processo de Seleção de Rotas

Quando há múltiplas rotas para o mesmo destino, o roteador utiliza um processo de **seleção de rotas** para escolher a melhor opção. Esse processo é baseado em vários fatores, como a **distância administrativa**, a **métrica** da rota e a **origem** da rota.

#### Passos do Processo de Seleção:

1. **Distância Administrativa (AD)**: A distância administrativa é uma medida de confiança atribuída a cada protocolo de roteamento. Protocolos com uma distância administrativa mais baixa são preferidos. Por exemplo:

   * **Conectado** (C): 0
   * **Estático** (S): 1
   * **EIGRP** (D): 90
   * **OSPF** (O): 110
   * **RIP** (R): 120

2. **Métrica**: Se houver múltiplas rotas com a mesma distância administrativa, o roteador escolherá a rota com a melhor métrica, ou seja, a menor métrica.

#### Exemplo de Seleção de Rota:

Suponha que um roteador tenha as seguintes rotas para o destino 192.168.1.0/24:

```bash
C    192.168.1.0/24 is directly connected, Ethernet0
O    192.168.1.0/24 [110/2] via 192.168.0.3, 00:05:23, Ethernet1
```

Neste caso, o roteador preferirá a rota **C** (Conectado), pois tem uma distância administrativa de 0, enquanto a rota OSPF tem uma distância administrativa de 110. Portanto, a rota conectada será escolhida.

---

## 8. Convergência de Rede

A **convergência de rede** é o processo pelo qual todos os roteadores de uma rede chegam a um acordo sobre a topologia de rede e as rotas disponíveis após uma mudança na rede, como falhas ou alterações de rotas. A convergência é essencial para garantir que os pacotes sejam entregues corretamente e que a rede funcione de forma eficiente e sem interrupções.

### 8.1 Definição e Importância

**Convergência** é o estado em que todos os roteadores em uma rede possuem informações consistentes sobre a topologia da rede e têm uma visão atualizada das rotas. Quando a rede sofre uma mudança, como uma falha em um link ou a adição de um novo roteador, os protocolos de roteamento devem ser capazes de se adaptar e atualizar as tabelas de roteamento de todos os dispositivos da rede.

#### Importância da Convergência:

* **Eficiência de Roteamento**: A convergência rápida assegura que os pacotes sejam entregues através do caminho mais eficiente.
* **Estabilidade da Rede**: Uma rede que converge rapidamente é mais estável e resiliente a falhas.
* **Redução de Perda de Pacotes**: Durante a convergência, as rotas podem mudar. Se a convergência for lenta, pacotes podem ser perdidos enquanto os roteadores ainda não têm informações atualizadas.

---

### 8.2 Fatores que Influenciam a Convergência

A convergência de uma rede pode ser afetada por diversos fatores:

1. **Tipo de Protocolo de Roteamento**:

   * Protocolos como **OSPF** e **EIGRP** convergem mais rapidamente em comparação com o **RIP**, que tende a ser mais lento devido ao seu processo de troca de informações.
   * **BGP** (Border Gateway Protocol), usado em ambientes de grande escala como provedores de internet, também possui uma convergência mais lenta, mas é necessário para a troca de informações entre diferentes sistemas autônomos.

2. **Tamanho e Complexidade da Rede**:

   * Redes maiores com mais roteadores e links terão uma convergência mais lenta, pois as informações de roteamento precisam ser propagadas para um número maior de dispositivos.
   * Redes hierárquicas, como as que utilizam OSPF, podem ser mais rápidas em termos de convergência, pois as mudanças são limitadas a áreas específicas.

3. **Largura de Banda e Latência**:

   * A largura de banda disponível entre os roteadores pode afetar a rapidez com que as informações de roteamento são propagadas.
   * A latência de rede, especialmente em redes grandes ou geograficamente distribuídas, pode retardar a convergência.

4. **Falhas de Link e Redes Dinâmicas**:

   * A capacidade do protocolo de detectar falhas e recalcular rotas rapidamente influencia a velocidade de convergência. Protocólos que oferecem **detecção rápida de falhas**, como **EIGRP** e **OSPF**, convergem mais rapidamente.
   * **Timers de Convergência**: Alguns protocolos, como o **RIP**, possuem tempos de espera mais longos, o que pode retardar a convergência.

5. **Tamanho das Tabelas de Roteamento**:

   * Roteadores com tabelas de roteamento maiores exigem mais tempo para recalcular as rotas após uma mudança, afetando a convergência.

---

### 8.3 Comparação entre Protocolos quanto à Convergência

A convergência de rede varia bastante de acordo com o protocolo de roteamento utilizado. Vamos comparar alguns protocolos populares em termos de convergência:

#### **RIP (Routing Information Protocol)**

* **Convergência**: Lenta. O RIP usa **contagem de saltos** como métrica, e devido aos seus intervalos de atualização regulares (30 segundos), ele pode levar bastante tempo para convergir após uma mudança.
* **Fatores que afetam a convergência**:

  * Atualizações periódicas a cada 30 segundos.
  * Sensível a mudanças de topologia, com uma detecção de falha mais lenta.

#### **OSPF (Open Shortest Path First)**

* **Convergência**: Rápida. O OSPF é um protocolo de **estado de link** que utiliza o algoritmo **Dijkstra** para calcular as rotas. Ele propaga alterações de forma mais eficiente e é capaz de convergir rapidamente após mudanças de topologia.
* **Fatores que afetam a convergência**:

  * **LSA (Link-State Advertisements)** são enviados para todos os roteadores, o que acelera a troca de informações.
  * O **OSPF** usa **áreas** para reduzir o impacto de mudanças em grandes redes.

#### **EIGRP (Enhanced Interior Gateway Routing Protocol)**

* **Convergência**: Muito rápida. O EIGRP é um protocolo híbrido, combinando elementos de **distance vector** e **link state**. Ele utiliza o algoritmo **DUAL (Diffusing Update Algorithm)**, que permite uma convergência mais eficiente e rápida.
* **Fatores que afetam a convergência**:

  * **Detecção de falhas rápida**: O EIGRP pode detectar falhas em segundos e recalcular rotas de forma quase instantânea.
  * A convergência é mais eficiente em redes menores e médias, mas pode ser afetada em redes muito grandes.

#### **BGP (Border Gateway Protocol)**

* **Convergência**: Lenta. O BGP é utilizado em redes de larga escala, como na interconexão entre provedores de serviços de internet (ISPs), e sua convergência é tipicamente mais lenta devido à complexidade e ao uso de múltiplos critérios para determinar a melhor rota.
* **Fatores que afetam a convergência**:

  * **Políticas de roteamento**: O BGP baseia-se em múltiplos critérios de políticas, o que pode tornar a convergência mais lenta.
  * A **tabela de rotas** do BGP pode ser extremamente grande, o que também contribui para a lentidão na convergência.

---

## 9. Segurança e Controle no Roteamento

A segurança no roteamento é crucial para proteger a rede contra ataques, como injeção de rotas falsas, e para garantir que apenas rotas válidas sejam propagadas entre os roteadores. Além disso, o controle de rotas é necessário para gerenciar e limitar o tráfego de roteamento, ajudando a otimizar a rede e a evitar loops de roteamento.

### 9.1 Filtros de Rota e Políticas

**Filtros de rota** e **políticas de roteamento** são ferramentas importantes para controlar quais rotas são propagadas, aceitas ou rejeitadas em uma rede. Eles são usados para limitar a distribuição de rotas indesejadas e podem ser aplicados tanto em protocolos de roteamento dinâmico quanto em rotas estáticas.

#### Filtros de Rota

Os **filtros de rota** permitem que você controle as rotas que um roteador aceita ou anuncia para outros roteadores. Eles são usados para evitar que rotas inválidas ou indesejadas sejam propagadas pela rede, ajudando a aumentar a segurança e a eficiência do roteamento.

**Exemplo de uso de filtros de rota no Cisco IOS**:

* **Filtrando rotas no EIGRP**:

  ```bash
  R1(config)# router eigrp 100
  R1(config-router)# distribute-list prefix-list 10 out Ethernet0
  ```

  Neste exemplo, o comando `distribute-list` aplica um filtro de prefixo, permitindo apenas rotas específicas da lista `prefix-list 10` a serem anunciadas na interface **Ethernet0**.

* **Filtrando rotas no OSPF**:

  ```bash
  R1(config)# router ospf 1
  R1(config-router)# distribute-list 1 in
  ```

  Aqui, a rota será filtrada com a lista de acesso `1` no sentido de entrada para o protocolo **OSPF**.

#### Políticas de Roteamento

As **políticas de roteamento** permitem aplicar critérios mais avançados para o controle de rotas. Elas podem ser baseadas em características como a origem da rota, a métrica da rota ou outras propriedades associadas à rota.

* **Exemplo de política no BGP**:

  ```bash
  R1(config)# ip prefix-list allow-network seq 5 permit 192.168.1.0/24
  R1(config)# router bgp 100
  R1(config-router)# neighbor 10.1.1.2 prefix-list allow-network in
  ```

  No exemplo acima, uma **prefix-list** é configurada para permitir apenas a rota 192.168.1.0/24 ser aceita do vizinho **10.1.1.2**.

---

### 9.2 Autenticação entre Roteadores Dinâmicos

A **autenticação** entre roteadores dinâmicos é uma medida importante para garantir que apenas dispositivos confiáveis participem no processo de roteamento. Sem autenticação, um atacante pode se infiltrar na rede e injetar rotas falsas, levando a ataques como o **BGP Hijacking** ou a **inundação de rotas falsas**.

Existem diferentes formas de autenticar a comunicação entre roteadores, dependendo do protocolo de roteamento utilizado.

#### Autenticação no RIP

No **RIP**, a autenticação pode ser configurada para garantir que apenas roteadores com uma chave correta possam trocar informações de roteamento.

* **Exemplo de autenticação RIP**:

  ```bash
  R1(config)# router rip
  R1(config-router)# network 192.168.1.0
  R1(config-router)# authentication mode md5
  R1(config-router)# authentication key-chain RIP-KEYS
  ```

  Aqui, o roteador **R1** usa **MD5** como o método de autenticação e a chave **RIP-KEYS** para autenticar as mensagens RIP enviadas para outros roteadores.

#### Autenticação no OSPF

No **OSPF**, a autenticação pode ser configurada por **senha simples** ou **MD5**. A autenticação OSPF é aplicada em interfaces, garantindo que apenas roteadores com a chave correta possam formar adjacências OSPF.

* **Exemplo de autenticação OSPF**:

  ```bash
  R1(config)# interface Ethernet0
  R1(config-if)# ip ospf authentication message-digest
  R1(config-if)# ip ospf message-digest-key 1 md5 OSPFKEY
  ```

  Este exemplo configura a autenticação OSPF usando **MD5** com a chave **OSPFKEY** na interface **Ethernet0**.

#### Autenticação no EIGRP

O **EIGRP** usa autenticação semelhante ao OSPF. A autenticação pode ser configurada usando **MD5** para garantir que os roteadores que trocam informações EIGRP sejam legítimos.

* **Exemplo de autenticação EIGRP**:

  ```bash
  R1(config)# interface Ethernet0
  R1(config-if)# ip authentication mode eigrp 100 md5
  R1(config-if)# ip authentication key-chain eigrp 100 EIGRP-KEYS
  ```

  Neste exemplo, a autenticação **MD5** é configurada para a interface **Ethernet0** usando a chave **EIGRP-KEYS** para o protocolo **EIGRP**.

#### Autenticação no BGP

No **BGP**, a autenticação de sessões pode ser realizada usando **MD5** para proteger as trocas de informações entre os vizinhos BGP. Isso impede que um invasor interfira nas trocas de rotas.

* **Exemplo de autenticação BGP**:

  ```bash
  R1(config)# router bgp 100
  R1(config-router)# neighbor 10.1.1.2 password BGPSECURE
  ```

  Aqui, a autenticação **MD5** é configurada para a sessão BGP com o vizinho **10.1.1.2** usando a senha **BGPSECURE**.

---

## 10. Estudo de Caso e Simulações

No estudo de caso a seguir, veremos um exemplo prático de uma rede que utiliza tanto **rotas estáticas** quanto **dinâmicas**, e discutiremos como escolher o protocolo de roteamento apropriado para diferentes cenários. Além disso, vamos aprender sobre a resolução de problemas (troubleshooting) com os comandos Cisco.

### 10.1 Exemplo de Rede com Rotas Estáticas e Dinâmicas

Imaginemos a seguinte topologia de rede:

* **Roteador 1 (R1)** conecta duas redes locais: **192.168.1.0/24** e **192.168.2.0/24**.
* **Roteador 2 (R2)** conecta a rede **192.168.3.0/24** e está diretamente conectado ao **Roteador 1**.
* A rede **192.168.4.0/24** está conectada a **Roteador 3 (R3)**.
* **Roteador 3** está conectado ao **Roteador 2** via uma conexão serial.

**Objetivos**:

1. Utilizar **rotas estáticas** para as rotas locais entre os roteadores.
2. Implementar **roteamento dinâmico** para facilitar a comunicação entre as redes sem a necessidade de configuração manual de rotas.

#### Configuração de Rotas Estáticas

No **Roteador 1**, as rotas estáticas são configuradas para permitir a comunicação com as redes **192.168.3.0/24** e **192.168.4.0/24**, já que essas redes estão fora da rede local do Roteador 1.

* **Configuração no Roteador 1**:

  ```bash
  R1(config)# ip route 192.168.3.0 255.255.255.0 192.168.2.2
  R1(config)# ip route 192.168.4.0 255.255.255.0 192.168.2.3
  ```

No **Roteador 2**, as rotas estáticas também são configuradas para a comunicação com a rede do **Roteador 1** e do **Roteador 3**.

* **Configuração no Roteador 2**:

  ```bash
  R2(config)# ip route 192.168.1.0 255.255.255.0 192.168.2.1
  R2(config)# ip route 192.168.4.0 255.255.255.0 192.168.3.3
  ```

#### Implementação de Roteamento Dinâmico (RIP)

Agora, para as rotas que podem mudar frequentemente ou para facilitar a expansão da rede no futuro, podemos usar um protocolo de roteamento dinâmico, como o **RIP**.

No **Roteador 1** e **Roteador 2**, configuramos o **RIP** para compartilhar informações de roteamento dinamicamente entre eles:

* **Configuração do RIP no Roteador 1**:

  ```bash
  R1(config)# router rip
  R1(config-router)# version 2
  R1(config-router)# network 192.168.0.0
  ```

* **Configuração do RIP no Roteador 2**:

  ```bash
  R2(config)# router rip
  R2(config-router)# version 2
  R2(config-router)# network 192.168.0.0
  ```

Com isso, o Roteador 1 e o Roteador 2 poderão compartilhar as rotas automaticamente, eliminando a necessidade de configurar manualmente as rotas entre as redes.

### 10.2 Escolha Apropriada do Protocolo

A escolha do protocolo de roteamento depende de diversos fatores, como o tamanho da rede, a necessidade de escalabilidade e a frequência de alterações na topologia da rede. A seguir, mostramos quando é apropriado usar **roteamento estático** ou **dinâmico**.

#### Roteamento Estático

O **roteamento estático** é ideal quando:

* A rede é pequena e a topologia não muda frequentemente.
* O administrador da rede quer ter total controle sobre as rotas.
* O tráfego de rede é previsível e não há muitas mudanças no caminho dos pacotes.

**Exemplo de Aplicação**:

* Redes de pequenas empresas com poucos roteadores e pouca necessidade de adaptação a mudanças.
* Redes que exigem rotas de backup com **rotas estáticas flutuantes**.

#### Roteamento Dinâmico

O **roteamento dinâmico** é ideal quando:

* A rede é grande ou complexa, com múltiplos roteadores.
* A topologia da rede muda com frequência (novos roteadores ou falhas de link).
* O administrador deseja que o protocolo de roteamento ajuste automaticamente as rotas conforme necessário.

**Exemplo de Aplicação**:

* Redes de médio e grande porte, como as de empresas que precisam de escalabilidade e manutenção simples.

**Escolha do Protocolo**:

* **RIP**: Melhor para redes pequenas ou simples.
* **OSPF**: Melhor para redes grandes e hierárquicas.
* **EIGRP**: Ideal para redes Cisco com necessidades de convergência rápida e alta disponibilidade.

---

### 10.3 Troubleshooting com Comandos Cisco

Durante a operação de uma rede, pode ocorrer a necessidade de solucionar problemas de roteamento. Aqui estão alguns comandos úteis no **Cisco IOS** para ajudar na identificação de problemas:

#### Comando `show ip route`

O comando `show ip route` exibe a tabela de roteamento, mostrando como os pacotes serão encaminhados com base nas rotas configuradas.

* **Exemplo**:

  ```bash
  R1# show ip route
  ```

  Isso exibirá todas as rotas, incluindo rotas estáticas e dinâmicas, com informações sobre a origem da rota e o caminho do pacote.

#### Comando `show ip protocols`

Esse comando exibe informações sobre os protocolos de roteamento configurados no roteador, como RIP, OSPF ou EIGRP, incluindo suas versões e parâmetros de configuração.

* **Exemplo**:

  ```bash
  R1# show ip protocols
  ```

  O resultado incluirá detalhes sobre o protocolo de roteamento ativo, interfaces, timers e outras configurações.

#### Comando `debug ip routing`

O comando `debug ip routing` permite monitorar em tempo real as alterações na tabela de roteamento, como a adição de novas rotas ou a remoção de rotas antigas.

* **Exemplo**:

  ```bash
  R1# debug ip routing
  ```

  Isso exibirá informações sobre como o roteador está processando alterações nas rotas, o que é útil para diagnosticar problemas de convergência.

#### Comando `ping` e `traceroute`

Os comandos **ping** e **traceroute** são úteis para testar conectividade e verificar o caminho percorrido pelos pacotes através da rede.

* **Exemplo de ping**:

  ```bash
  R1# ping 192.168.3.1
  ```

* **Exemplo de traceroute**:

  ```bash
  R1# traceroute 192.168.3.1
  ```

O **ping** verifica a conectividade básica, enquanto o **traceroute** mostra os saltos intermediários até o destino, o que pode ajudar a identificar onde ocorre a falha no roteamento.

---


## Exercícios

### Exercício 1: Configuração de Roteamento Estático

#### **Contexto do Exercício**

Você é o administrador de rede da "TechCorp", uma empresa com três filiais em diferentes localizações. A tarefa é configurar **rotas estáticas** para permitir a comunicação entre essas filiais, que possuem redes diferentes.

A rede está dividida da seguinte forma:

* **Filial A (Roteador R1)**:

  * Rede: **192.168.1.0/24**
  * Endereço IP do Roteador: **192.168.1.1**

* **Filial B (Roteador R2)**:

  * Rede: **192.168.2.0/24**
  * Endereço IP do Roteador: **192.168.2.1**

* **Filial C (Roteador R3)**:

  * Rede: **192.168.3.0/24**
  * Endereço IP do Roteador: **192.168.3.1**

**Objetivo:**

1. **Configurar rotas estáticas** nos roteadores para garantir que eles possam se comunicar entre si.

#### **Passos do Exercício**

1. **Configuração das Interfaces dos Roteadores**

   * No **Roteador R1**, configure a interface que conecta à **Filial A**:

     ```bash
     R1(config)# interface g0/0
     R1(config-if)# ip address 192.168.1.1 255.255.255.0
     R1(config-if)# no shutdown
     ```

   * No **Roteador R2**, configure a interface que conecta à **Filial B**:

     ```bash
     R2(config)# interface g0/0
     R2(config-if)# ip address 192.168.2.1 255.255.255.0
     R2(config-if)# no shutdown
     ```

   * No **Roteador R3**, configure a interface que conecta à **Filial C**:

     ```bash
     R3(config)# interface g0/0
     R3(config-if)# ip address 192.168.3.1 255.255.255.0
     R3(config-if)# no shutdown
     ```

2. **Configuração de Rotas Estáticas**

   Configure as rotas estáticas para que os roteadores saibam como alcançar as redes das outras filiais.

   * No **Roteador R1**, configure rotas estáticas para alcançar **Filial B** e **Filial C**:

     ```bash
     R1(config)# ip route 192.168.2.0 255.255.255.0 192.168.1.2
     R1(config)# ip route 192.168.3.0 255.255.255.0 192.168.1.2
     ```

   * No **Roteador R2**, configure rotas estáticas para alcançar **Filial A** e **Filial C**:

     ```bash
     R2(config)# ip route 192.168.1.0 255.255.255.0 192.168.2.2
     R2(config)# ip route 192.168.3.0 255.255.255.0 192.168.2.2
     ```

   * No **Roteador R3**, configure rotas estáticas para alcançar **Filial A** e **Filial B**:

     ```bash
     R3(config)# ip route 192.168.1.0 255.255.255.0 192.168.3.2
     R3(config)# ip route 192.168.2.0 255.255.255.0 192.168.3.2
     ```

3. **Testar a Conectividade**

   * No **Roteador R1**, teste a conectividade com a **Filial B** e **Filial C**:

     ```bash
     R1# ping 192.168.2.1
     R1# ping 192.168.3.1
     ```

   * No **Roteador R2**, teste a conectividade com a **Filial A** e **Filial C**:

     ```bash
     R2# ping 192.168.1.1
     R2# ping 192.168.3.1
     ```

   * No **Roteador R3**, teste a conectividade com a **Filial A** e **Filial B**:

     ```bash
     R3# ping 192.168.1.1
     R3# ping 192.168.2.1
     ```

---

### Exercício 2: Configuração de Roteamento Dinâmico (RIP)

#### **Contexto do Exercício**

Você é o administrador de rede da "TechCorp", e agora a empresa decidiu usar **roteamento dinâmico** para facilitar a propagação de rotas automaticamente entre os roteadores. Você deve configurar o **RIP** (Routing Information Protocol) nos roteadores para propagar as rotas de forma dinâmica.

A rede e as configurações dos roteadores permanecem as mesmas do exercício anterior:

* **Filial A (Roteador R1)**:

  * Rede: **192.168.1.0/24**
  * Endereço IP do Roteador: **192.168.1.1**

* **Filial B (Roteador R2)**:

  * Rede: **192.168.2.0/24**
  * Endereço IP do Roteador: **192.168.2.1**

* **Filial C (Roteador R3)**:

  * Rede: **192.168.3.0/24**
  * Endereço IP do Roteador: **192.168.3.1**

**Objetivo:**

1. **Configurar o RIP** para permitir a troca de rotas entre os roteadores de forma dinâmica.

#### **Passos do Exercício**

1. **Configuração das Interfaces dos Roteadores**

   * No **Roteador R1**, configure a interface que conecta à **Filial A**:

     ```bash
     R1(config)# interface g0/0
     R1(config-if)# ip address 192.168.1.1 255.255.255.0
     R1(config-if)# no shutdown
     ```

   * No **Roteador R2**, configure a interface que conecta à **Filial B**:

     ```bash
     R2(config)# interface g0/0
     R2(config-if)# ip address 192.168.2.1 255.255.255.0
     R2(config-if)# no shutdown
     ```

   * No **Roteador R3**, configure a interface que conecta à **Filial C**:

     ```bash
     R3(config)# interface g0/0
     R3(config-if)# ip address 192.168.3.1 255.255.255.0
     R3(config-if)# no shutdown
     ```

2. **Configuração do RIP**

   Agora, você deve configurar o **RIP** nos três roteadores para propagação automática das rotas.

   * No **Roteador R1**, configure o RIP:

     ```bash
     R1(config)# router rip
     R1(config-router)# version 2
     R1(config-router)# network 192.168.0.0
     ```

   * No **Roteador R2**, configure o RIP:

     ```bash
     R2(config)# router rip
     R2(config-router)# version 2
     R2(config-router)# network 192.168.0.0
     ```

   * No **Roteador R3**, configure o RIP:

     ```bash
     R3(config)# router rip
     R3(config-router)# version 2
     R3(config-router)# network 192.168.0.0
     ```

3. **Verificação das Tabelas de Roteamento**

   Após configurar o RIP, verifique se as rotas estão sendo propagadas corretamente.

   * No **Roteador R1**, verifique a tabela de roteamento:

     ```bash
     R1# show ip route
     ```

   * No **Roteador R2**, verifique a tabela de roteamento:

     ```bash
     R2# show ip route
     ```

   * No **Roteador R3**, verifique a tabela de roteamento:

     ```bash
     R3# show ip route
     ```

4. **Testar a Conectividade**

   * No **Roteador R1**, teste a conectividade com a **Filial B** e **Filial C**:

     ```bash
     R1# ping 192.168.2.1
     R1# ping 192.168.3.1
     ```

   * No **Roteador R2**, teste a conectividade com a **Filial A** e **Filial C**:

     ```bash
     R2# ping 192.168.1.1
     R2# ping 192.168.3.1
     ```

   * No **Roteador R3**, teste a conectividade com a **Filial A** e **Filial B**:

     ```bash
     R3# ping 192.168.1.1
     R3# ping 192.168.2.1
     ```

---


## Referências Bibliográficas

1. **Cisco Networking Academy**. (2020). *CCNA Routing and Switching: Introduction to Networks (Version 7)*. Cisco Press.

   * Este livro oferece uma introdução completa ao roteamento e comutação, cobrindo protocolos como RIP, OSPF e EIGRP, além de redes estáticas e dinâmicas.

2. **Cisco Networking Academy**. (2020). *CCNA v7: Routing and Switching Essentials*. Cisco Press.

   * Curso oficial da Cisco que oferece uma abordagem prática e teórica para a configuração de roteadores, switches, e protocolos de roteamento. Este curso cobre a implementação de redes de forma detalhada e fornece uma base sólida para quem está buscando a certificação CCNA.

3. **Odom, W.** (2019). *CCNA 200-125 Official Cert Guide Library*. Cisco Press.

   * Um guia oficial para certificação CCNA que abrange tópicos fundamentais, como roteamento, configuração de redes e troubleshooting.

4. **Comer, D. E.** (2014). *Internetworking with TCP/IP, Volume 1: Principles, Protocols, and Architecture*. Pearson.

   * Livro fundamental para entender os protocolos de roteamento, como TCP/IP e outros, em redes de grande escala.

5. **Tanenbaum, A. S. & Wetherall, D. J.** (2011). *Computer Networks* (5th ed.). Pearson Education.

   * Um livro abrangente sobre redes de computadores, incluindo tópicos como protocolos de roteamento e a arquitetura de redes de computadores.

6. **Lammle, T.** (2020). *CCNA 200-301 Official Cert Guide*. Cisco Press.

   * Este é um guia oficial para a certificação CCNA que aborda todos os aspectos dos protocolos de roteamento dinâmico, bem como a configuração e troubleshooting.

7. **Cisco Systems**. (2020). *Cisco IOS Software Configuration Guide*.

   * Documentação oficial da Cisco que fornece detalhes sobre a configuração de roteadores e switches, incluindo os protocolos de roteamento estático e dinâmico no Cisco IOS.

8. **Lab, N.** (2020). *Routing and Switching Essentials Companion Guide*. Cisco Press.

   * Um guia complementar que detalha como implementar e manter soluções de roteamento e comutação em redes de empresas de pequeno e médio porte.

