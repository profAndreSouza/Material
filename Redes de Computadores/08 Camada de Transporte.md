# Camada de Transporte

## 1. Introdução

A **Camada de Transporte** é a responsável por garantir que os dados cheguem corretamente à aplicação de destino. Ela atua como um “entregador confiável” entre a rede e as aplicações, cuidando da segmentação, ordenação, controle de erros e da identificação dos serviços por meio de **números de porta**.


## 2. Funções Principais da Camada de Transporte

### Multiplexação e Demultiplexação

Permite que várias aplicações usem a rede simultaneamente. Isso é feito pelas **portas**:

* Navegador Web → porta 80 (HTTP) ou 443 (HTTPS).
* Cliente de e-mail → portas 25 (SMTP), 110 (POP3).

### Segmentação e Reagrupamento

Mensagens grandes são divididas em **segmentos** menores. No destino, esses segmentos são remontados na ordem correta.

### Controle de Conexão

O TCP estabelece uma conexão antes da troca de dados (handshake). O UDP envia diretamente, sem conexão.

### Controle de Fluxo

Evita que o transmissor sobrecarregue o receptor.

### Detecção e Correção de Erros

* TCP verifica e retransmite segmentos perdidos.
* UDP apenas verifica, mas não corrige.

### Entrega Ordenada

* TCP garante ordem dos segmentos.
* UDP não garante (pode chegar fora de ordem).


## 3. Handshake de Três Vias (TCP)

1. Cliente envia **SYN** → pedindo conexão.
2. Servidor responde **SYN-ACK** → aceita e confirma.
3. Cliente envia **ACK** → conexão estabelecida.


## 4. Comparação TCP vs UDP

| Característica  | TCP                 | UDP                    |
| --------------- | ------------------- | ---------------------- |
| Conexão         | Orientado à conexão | Não orientado          |
| Confiabilidade  | Alta                | Baixa                  |
| Ordem dos dados | Garantida           | Não garantida          |
| Velocidade      | Mais lento          | Mais rápido            |
| Uso típico      | Web, e-mail, FTP    | Jogos, VoIP, streaming |


## 5. Estrutura dos Protocolos

### Segmento TCP

Contém: portas, número de sequência, ACK, flags, checksum e dados.

### Datagrama UDP

Mais simples: portas, comprimento, checksum e dados.


## 6. Exemplos de Aplicações

* **TCP:** HTTP, HTTPS, FTP, SMTP, IMAP.
* **UDP:** DNS, VoIP, jogos online, transmissões ao vivo.


## 7. Situações Práticas

### 7.1 Visualização no Packet Tracer

Ao configurar um servidor **HTTP** (TCP) e um servidor **DNS** (UDP) em uma rede simples, é possível usar o **Simulation Mode** para observar:

* No **HTTP**, os pacotes são acompanhados por ACKs de confirmação.
* No **DNS**, os pacotes são enviados sem confirmação de recebimento.

Essa diferença mostra como TCP busca **confiabilidade** e UDP busca **rapidez**.


### 7.2 Simulação em Excel – Controle de Fluxo

**Exemplo preenchido de tabela:**

| Segmento | Dados Enviados | ACK Recebido | Retransmissão   |
| -------- | -------------- | ------------ | --------------- |
| 1        | 100 bytes      | Sim          | Não             |
| 2        | 100 bytes      | Sim          | Não             |
| 3        | 100 bytes      | Não          | Sim (reenviado) |
| 4        | 100 bytes      | Sim          | Não             |
| 5        | 100 bytes      | Não          | Sim (reenviado) |

> Interpretação: O TCP retransmitiu os segmentos 3 e 5 porque não recebeu confirmação.
> Se fosse UDP, esses segmentos teriam simplesmente se perdido.


### 7.3 Tabela de Portas e Serviços

| Porta | Serviço | Protocolo |
| ----- | ------- | --------- |
| 20/21 | FTP     | TCP       |
| 25    | SMTP    | TCP       |
| 53    | DNS     | UDP/TCP   |
| 80    | HTTP    | TCP       |
| 443   | HTTPS   | TCP       |
| 110   | POP3    | TCP       |

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
