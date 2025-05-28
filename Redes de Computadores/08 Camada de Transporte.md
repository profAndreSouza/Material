# 9. Camada 4

A **Camada de Transporte** é a quarta camada do **Modelo OSI**. Seu principal objetivo é fornecer uma **transferência de dados confiável** e eficiente entre dispositivos de origem e de destino em uma rede. Ela atua como ponte entre a **camada de rede (Camada 3)**, que entrega os pacotes, e a **camada de sessão (Camada 5)**, que organiza e gerencia os diálogos entre aplicações.

![image.png](attachment:b8b43739-32d3-428e-9f10-f665443ef02a:image.png)

## Funções Principais da Camada de Transporte

1. **Multiplexação e Demultiplexação**
    - Permite que múltiplas aplicações compartilhem simultaneamente a rede por meio do uso de **números de porta**.
    - Quando os dados chegam ao host de destino, a camada de transporte usa o número de porta para entregar os dados à aplicação correta.
2. **Controle de Conexão**
    - Pode estabelecer uma **conexão lógica entre os dispositivos** antes da transferência dos dados (como no TCP).
    - Essa conexão é usada para garantir a integridade e ordem dos dados transmitidos.
3. **Segmentação e Reagrupamento de Dados**
    - Divide os dados da camada superior em **segmentos menores** para transmissão.
    - No destino, os segmentos são **reagrupados na ordem correta**.
4. **Controle de Fluxo**
    - Impede que o emissor envie dados mais rápido do que o receptor pode processar.
    - Garante que os dispositivos se comuniquem em uma taxa adequada para ambos.
5. **Detecção e Correção de Erros**
    - Os segmentos incluem **checksums** para verificar a integridade dos dados.
    - Em caso de erro, pode haver **retransmissão automática** do segmento perdido ou corrompido.
6. **Entrega Ordenada dos Dados**
    - Garante que os segmentos sejam entregues na ordem correta (propriedade exclusiva do TCP).

## O Handshake de Três Vias (Three-Way Handshake) – TCP

O **handshake de três vias** é um processo realizado pelo **TCP (Transmission Control Protocol)** para estabelecer uma conexão confiável entre dois dispositivos antes da transferência de dados.

![image.png](attachment:fe902fe7-3eed-430f-be3f-661b7b8abb18:image.png)

### Etapas:

1. **SYN (Synchronize)**
    - O cliente envia um segmento TCP com o **bit SYN** ativado para o servidor.
    - Isso informa que o cliente deseja iniciar uma conexão.
2. **SYN-ACK (Synchronize-Acknowledge)**
    - O servidor responde com um segmento que possui os bits **SYN e ACK** ativados.
    - Isso indica que o servidor reconheceu o pedido e também deseja estabelecer a conexão.
3. **ACK (Acknowledge)**
    - O cliente envia um segmento com o bit **ACK** ativado.
    - A conexão está agora estabelecida e pronta para troca de dados.

Este processo garante que ambos os lados estejam sincronizados e preparados para a comunicação.

## Principais Protocolos da Camada de Transporte

### TCP (Transmission Control Protocol)

- **Orientado à conexão**: estabelece uma conexão lógica entre origem e destino antes da troca de dados.
- **Confiável**: usa mecanismos como verificação de erro, retransmissão e controle de fluxo.
- **Entrega garantida e ordenada** dos segmentos.
- Utiliza o **three-way handshake** para iniciar a comunicação.
- Indicado para aplicações onde a **precisão** e **integridade dos dados** são mais importantes que a velocidade.
- Exemplo de aplicações: HTTP, HTTPS, FTP, SMTP, IMAP, POP3.

### UDP (User Datagram Protocol)

- **Não orientado à conexão**: não há handshake, nem garantia de entrega.
- **Sem verificação de ordem ou correção de erros** (apenas um checksum básico).
- **Mais rápido e eficiente** que o TCP, ideal para aplicações em tempo real.
- Dados são enviados como **datagramas independentes**.
- Indicado para aplicações onde a **velocidade** é mais crítica que a confiabilidade.
- Exemplo de aplicações: DNS, VoIP, videoconferência, jogos online, streaming de vídeo ao vivo.

## Comparação entre TCP e UDP

| Característica | TCP | UDP |
| --- | --- | --- |
| Tipo de conexão | Orientado à conexão | Não orientado à conexão |
| Estabelecimento de conexão | Requer handshake de três vias | Não requer handshake |
| Confiabilidade | Alta: entrega garantida | Baixa: não há garantia de entrega |
| Ordem dos dados | Garante entrega na ordem correta | Não garante ordem |
| Retransmissão de pacotes | Sim, em caso de perda ou erro | Não |
| Controle de fluxo e congestionamento | Sim | Não |
| Velocidade | Mais lento devido ao controle | Mais rápido |
| Tamanho do cabeçalho | 20 bytes (mínimo) | 8 bytes |
| Verificação de integridade | Checksum + confirmação e retransmissão | Checksum simples |
| Uso típico | Web, e-mail, FTP | Streaming, VoIP, jogos em tempo real |

## Estrutura dos Segmentos TCP e Datagramas UDP

### Segmento TCP

![image.png](attachment:8d2116a5-4bc9-4b4e-b8cf-c2e4b5bf5b93:image.png)

- Porta de origem
- Porta de destino
- Número de sequência
- Número de confirmação (ACK)
- Flags (SYN, ACK, FIN, RST, etc.)
- Janela de recepção
- Checksum
- Dados

### Datagramas UDP

![image.png](attachment:84f5fd08-7460-48a4-93e6-2b5d7a7637a6:image.png)

- Porta de origem
- Porta de destino
- Comprimento
- Checksum
- Dados

## Aplicações Típicas da Camada de Transporte

| Aplicação | Protocolo | Observação |
| --- | --- | --- |
| Navegação Web (HTTP) | TCP | Confiabilidade é essencial |
| Vídeo em tempo real | UDP | Baixa latência é mais importante |
| Transferência de arquivos | TCP | Integridade total dos dados é necessária |
| DNS | UDP | Respostas rápidas; TCP usado em casos raros |
| Jogos online | UDP | Prioridade à velocidade e resposta |