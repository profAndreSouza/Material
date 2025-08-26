# Aula 4 – Ethernet Básico

## Quadro Ethernet e Endereços MAC


## 1. Introdução

Nesta aula, vamos estudar os fundamentos da tecnologia **Ethernet**, que é a base da maior parte das redes locais (LANs) atuais. Também entenderemos o que são os **endereços MAC** e como os switches utilizam essas informações para encaminhar quadros dentro de uma rede.

Ao final, você será capaz de:

* Explicar o que é Ethernet e sua função em redes locais.
* Identificar a estrutura de um quadro Ethernet.
* Diferenciar um endereço MAC de um endereço IP.
* Montar uma rede simples no Packet Tracer e observar como os switches aprendem os endereços dos dispositivos conectados.


## 2. O que é Ethernet

Ethernet é um conjunto de padrões definidos pelo **IEEE 802.3** que descrevem como os dispositivos em uma rede local (LAN) se comunicam.

Principais características:

* Atua na **Camada de Enlace (2)** do modelo OSI.
* Define como os dados são encapsulados em **quadros** para transmissão.
* Utiliza **endereços MAC** para identificar os dispositivos conectados.
* É a tecnologia dominante em redes cabeadas no mundo.


## 3. Estrutura do Quadro Ethernet

Quando um computador envia dados pela rede, esses dados são encapsulados em **quadros Ethernet**. Cada quadro contém informações de controle e endereçamento.

Um quadro Ethernet é formado por:

1. **Préâmbulo**: sequência inicial usada para sincronizar a comunicação.
2. **Endereço MAC de Destino (6 bytes)**: identifica o dispositivo que deve receber o quadro.
3. **Endereço MAC de Origem (6 bytes)**: identifica o dispositivo que enviou o quadro.
4. **Tipo/Comprimento**: informa o tipo de protocolo transportado (por exemplo, IPv4 ou IPv6).
5. **Dados (Payload)**: o conteúdo útil que está sendo transmitido.
6. **CRC (Frame Check Sequence)**: campo de verificação de erros.


## 4. O que é Endereço MAC

O endereço MAC (Media Access Control) é um identificador único gravado na placa de rede de cada dispositivo.

Características:

* Possui **48 bits** (6 bytes).
* Normalmente representado em hexadecimal, por exemplo: `00:1A:2B:3C:4D:5E`.
* Cada placa de rede fabricada no mundo possui um MAC exclusivo.
* Usado apenas para comunicação dentro da **rede local** (não é roteado na internet).

Diferença entre **MAC** e **IP**:

* **MAC:** endereço físico, fixo, gravado na placa.
* **IP:** endereço lógico, configurável e alterável conforme a rede.

Exemplo prático:

* Se você trocar o endereço IP de um computador, o dispositivo continuará sendo reconhecido pelo seu MAC.
* Se você trocar a placa de rede, o endereço MAC mudará, pois ele pertence ao hardware.


## 5. Prática no Packet Tracer

### Objetivo da prática

Construir uma rede simples com três computadores e um switch, configurá-los e observar como o switch armazena os endereços MAC dos dispositivos.

### Passo a passo

1. **Montagem da rede**

   * Insira um switch.
   * Conecte três PCs ao switch usando **cabos diretos**.

2. **Configuração de endereços IP**

   * No PC1: `192.168.1.1 /24`
   * No PC2: `192.168.1.2 /24`
   * No PC3: `192.168.1.3 /24`

3. **Teste de conectividade**

   * Abra o terminal de cada PC e utilize o comando `ping` para verificar a comunicação entre os dispositivos.

4. **Visualização dos endereços MAC**

   * Em cada PC, abra o prompt de comando e digite `ipconfig /all`.
   * Anote o endereço MAC de cada máquina.

5. **Verificação da tabela MAC do switch**

   * Clique no switch.
   * Vá até a aba **CLI**.
   * Digite o comando:

     ```
     show mac-address-table
     ```
   * Observe como o switch aprendeu os endereços MAC e em quais portas eles estão conectados.


## 6. Atividade Proposta

**Situação:**
Uma pequena empresa precisa conectar 3 computadores para troca de arquivos internos. Você é o responsável por configurar a rede.

**Tarefas:**

* Montar a rede com 1 switch e 3 PCs.
* Configurar IPs em todos os PCs para que estejam na mesma sub-rede.
* Verificar conectividade entre os PCs com o comando `ping`.
* Descobrir o endereço MAC de cada PC.
* Consultar a tabela MAC do switch e registrar o que foi aprendido.

**Critérios de sucesso:**

* Todos os PCs se comunicam entre si.
* Endereços IP e MAC identificados corretamente.
* Tabela MAC do switch apresenta os dispositivos conectados.


## 7. Questões

* O endereço **MAC** é essencial para identificar dispositivos na rede local.
* O **switch** aprende automaticamente os endereços MAC dos dispositivos e os armazena em sua tabela interna.
* A comunicação entre computadores em uma LAN só ocorre porque cada quadro Ethernet contém os endereços de origem e destino.
* O **endereço IP** é necessário apenas quando há roteamento entre redes diferentes.

**Pergunta para debate:**
Se os computadores já têm um endereço MAC único, por que precisamos também de endereços IP?
