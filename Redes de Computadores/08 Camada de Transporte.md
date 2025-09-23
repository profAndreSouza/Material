# Camada de Transporte

## 1. A Camada de Transporte no Modelo OSI

A **Camada de Transporte** ocupa a posição **4 do modelo OSI**. Sua função é **garantir que os dados enviados pela aplicação de origem cheguem corretamente à aplicação de destino**, mesmo em redes complexas com múltiplos saltos.

Enquanto a **Camada de Rede (3)** é responsável por entregar pacotes de um dispositivo a outro, a Camada de Transporte se preocupa com a **confiabilidade e organização** da entrega desses pacotes, servindo como ponte entre a rede e as aplicações (Camada 5 – Sessão).


## 2. Funções da Camada de Transporte

### 2.1 Multiplexação e Demultiplexação

* A multiplexação permite que várias aplicações diferentes utilizem a rede simultaneamente.
* Isso é feito por meio do **uso de portas** (números que identificam cada serviço).
* Por exemplo:

  * Navegador Web → porta 80 ou 443 (HTTP/HTTPS).
  * Cliente de e-mail → porta 25 (SMTP) ou 110 (POP3).

Quando os dados chegam ao destino, a Camada de Transporte **lê a porta de destino** e encaminha para a aplicação correta.


### 2.2 Segmentação e Reagrupamento

* Uma aplicação pode gerar mensagens muito grandes.
* A Camada de Transporte **divide essas mensagens em segmentos menores**.
* No destino, esses segmentos são **reagrupados na ordem correta** antes de serem entregues à aplicação.

Exemplo: um vídeo sendo transferido por FTP é segmentado em várias partes; caso contrário, seria impossível transmitir um único arquivo gigante de forma eficiente.


### 2.3 Controle de Conexão

* O **TCP (Transmission Control Protocol)** pode estabelecer uma conexão lógica entre emissor e receptor antes de transferir dados.
* Esse processo garante que **ambos os lados estejam sincronizados**.
* Já o **UDP (User Datagram Protocol)** envia os dados diretamente, sem essa etapa.


### 2.4 Controle de Fluxo

* Evita que o transmissor envie dados mais rapidamente do que o receptor consegue processar.
* Funciona como um "freio de segurança".
* Exemplo: se um servidor envia pacotes muito rápido para um computador doméstico, o controle de fluxo ajusta a taxa de envio.


### 2.5 Detecção e Correção de Erros

* Cada segmento enviado possui um **checksum** que permite verificar se houve erro na transmissão.
* Se um erro for detectado, o TCP solicita a **retransmissão** do segmento.
* O UDP não possui esse mecanismo avançado (apenas uma verificação básica).


### 2.6 Entrega Ordenada

* O TCP garante que os segmentos cheguem na mesma ordem em que foram enviados.
* O UDP não possui essa garantia.
* Exemplo:

  * TCP é usado em **e-mails** (não faz sentido receber as frases fora de ordem).
  * UDP é usado em **videoconferências** (pacotes fora de ordem são descartados, pois o mais importante é a continuidade em tempo real).


## 3. O Handshake de Três Vias (TCP)

O **Three-Way Handshake** é o processo utilizado pelo TCP para iniciar uma conexão.

Etapas:

1. **SYN** → o cliente solicita conexão ao servidor.
2. **SYN-ACK** → o servidor responde confirmando.
3. **ACK** → o cliente confirma a resposta e a comunicação é estabelecida.

Esse processo assegura que **ambos os lados estão prontos** para trocar dados.


## 4. Comparação entre TCP e UDP

| Característica  | TCP                      | UDP                           |
| --------------- | ------------------------ | ----------------------------- |
| Conexão         | Orientado à conexão      | Não orientado                 |
| Confiabilidade  | Alta (com retransmissão) | Baixa                         |
| Ordem dos dados | Garantida                | Não garantida                 |
| Velocidade      | Mais lento               | Mais rápido                   |
| Uso típico      | Web, e-mail, FTP         | Jogos online, VoIP, streaming |


## 5. Estrutura dos Protocolos

### Segmento TCP

Inclui:

* Porta de origem
* Porta de destino
* Número de sequência
* Número de confirmação (ACK)
* Flags de controle (SYN, FIN, RST, ACK)
* Janela de recepção
* Checksum
* Dados

### Datagramas UDP

Incluem apenas:

* Porta de origem
* Porta de destino
* Comprimento
* Checksum
* Dados


## 6. Exemplos Práticos de Aplicações

* **TCP:** HTTP, HTTPS, FTP, SMTP, IMAP.
* **UDP:** DNS, VoIP, jogos online, transmissões ao vivo.


## 7. Situações Práticas e Exercícios

### 7.1 Observando TCP e UDP em Simulação (Packet Tracer)

Ao configurar um servidor web (TCP) e um servidor DNS (UDP) em rede simulada, é possível **visualizar no modo de simulação** como os pacotes TCP passam pelo processo de confirmação (ACK), enquanto os pacotes UDP são enviados sem garantias de recebimento.


### 7.2 Controle de Fluxo em Planilha (Excel)

O funcionamento do **controle de fluxo** pode ser ilustrado em uma tabela:

| Segmento | Dados Enviados | ACK Recebido | Retransmissão?  |
| -------- | -------------- | ------------ | --------------- |
| 1        | 100 bytes      | Sim          | Não             |
| 2        | 100 bytes      | Sim          | Não             |
| 3        | 100 bytes      | Não          | Sim (reenviado) |
| 4        | 100 bytes      | Sim          | Não             |

Essa simulação mostra que o TCP repete a transmissão quando não recebe confirmação, enquanto o UDP simplesmente ignora a perda.


### 7.3 Portas e Serviços

Uma tabela ajuda a relacionar **portas conhecidas** com serviços:

| Porta | Serviço | Protocolo |
| ----- | ------- | --------- |
| 80    | HTTP    | TCP       |
| 443   | HTTPS   | TCP       |
| 25    | SMTP    | TCP       |
| 53    | DNS     | UDP/TCP   |
| 20/21 | FTP     | TCP       |

> Essa tabela ajuda a relacionar **números de porta** com **serviços de rede**.


## 8. Trabalho de Pesquisa – Protocolos da Camada de Transporte

Além do TCP e do UDP, a Camada de Transporte possui outros protocolos que, embora menos conhecidos, são importantes em contextos específicos.

**Atividade de Pesquisa:**
Cada aluno (ou grupo) deverá escolher **um protocolo da Camada de Transporte** além do TCP/UDP, realizar pesquisa e elaborar um resumo (1 página) com:

* Nome do protocolo.
* Ano ou contexto em que foi criado.
* Principais características.
* Diferenças em relação ao TCP e UDP.
* Exemplos de uso.

**Sugestões de protocolos para pesquisa:**

* **SCTP (Stream Control Transmission Protocol)** – usado em telefonia IP e transmissão multimídia.
* **DCCP (Datagram Congestion Control Protocol)** – combina a baixa latência do UDP com controle de congestionamento.
* **RUDP (Reliable User Datagram Protocol)** – versão confiável do UDP.
* **QUIC (Quick UDP Internet Connections)** – protocolo do Google usado em navegadores modernos, combina UDP com mecanismos de confiabilidade.

> Essa atividade permite conhecer que a Camada de Transporte é mais rica do que apenas TCP e UDP, e como novas soluções surgem para atender a demandas de performance, segurança e confiabilidade.

## 9. Conclusão

A Camada de Transporte garante que as aplicações se comuniquem de forma organizada, segura e eficiente.

* O **TCP** prioriza confiabilidade.
* O **UDP** prioriza velocidade.
* Outros protocolos (SCTP, QUIC, DCCP etc.) surgem para equilibrar essas necessidades em novos cenários.
