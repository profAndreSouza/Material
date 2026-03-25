# Atividade em Grupo – Camada de Enlace de Dados - RESUMO

## Tema 1 – CSMA/CD e Detecção de Colisões em Redes Ethernet

O CSMA/CD (Carrier Sense Multiple Access with Collision Detection) é um protocolo de controle de acesso ao meio utilizado em redes Ethernet tradicionais baseadas em meio compartilhado (como hubs). Nesse modelo, todos os dispositivos utilizam o mesmo canal físico para transmissão.

O funcionamento baseia-se em três etapas principais:

* **Carrier Sense (escuta do meio):** o dispositivo verifica se o meio está livre antes de transmitir.
* **Multiple Access:** múltiplos dispositivos compartilham o mesmo meio.
* **Collision Detection:** durante a transmissão, o dispositivo monitora o meio para detectar colisões.

Quando ocorre uma colisão (dois dispositivos transmitem simultaneamente), os dispositivos interrompem a transmissão, enviam um sinal de reforço de colisão (jam signal) e aguardam um tempo aleatório (algoritmo de backoff exponencial) antes de tentar novamente.

Esse mecanismo foi essencial nas primeiras redes locais, mas tornou-se obsoleto com a introdução de switches, que segmentam a rede e eliminam colisões ao criar domínios de colisão isolados (ou até comunicação full-duplex, onde colisões não ocorrem).

**Perguntas:**

* O que caracteriza um meio compartilhado em redes Ethernet antigas?
* Como o dispositivo sabe que o meio está livre antes de transmitir?
* O que acontece exatamente no momento de uma colisão?
* O que é o algoritmo de backoff exponencial e por que ele é necessário?
* Por que redes com switches não utilizam mais CSMA/CD?



## Tema 2 – CSMA/CA e Controle de Acesso em Redes Wi-Fi

O CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) é utilizado em redes sem fio (Wi-Fi) e tem como objetivo evitar colisões, em vez de detectá-las.

Em redes sem fio, um dispositivo não consegue ouvir o meio enquanto transmite (problema de half-duplex) e também pode não detectar transmissões de outros dispositivos fora de seu alcance (problema do nó oculto). Por isso, a estratégia é preventiva.

O funcionamento envolve:

* Escuta do canal antes da transmissão.
* Uso de um tempo de espera aleatório (backoff) mesmo quando o canal está livre.
* Possível uso de mecanismos adicionais como RTS/CTS (Request to Send / Clear to Send) para reduzir colisões.

Esse modelo reduz a probabilidade de colisões, mas não as elimina completamente.

**Perguntas:**

* Por que redes sem fio não conseguem detectar colisões como as redes cabeadas?
* O que é o problema do nó oculto?
* Como o tempo de espera aleatório ajuda a evitar colisões?
* Qual a função do mecanismo RTS/CTS?
* Qual a principal diferença conceitual entre CSMA/CD e CSMA/CA?



## Tema 3 – Protocolos de Controle de Fluxo em Camada de Enlace

O controle de fluxo tem como objetivo garantir que o transmissor não envie dados em uma velocidade superior à capacidade de processamento do receptor, evitando perda de dados e sobrecarga.

Dois mecanismos clássicos são:

**Stop-and-Wait:**
O transmissor envia um quadro e aguarda a confirmação (ACK) antes de enviar o próximo. É simples, porém pouco eficiente, pois o canal fica ocioso durante a espera.

**Sliding Window (Janela Deslizante):**
Permite o envio de múltiplos quadros antes de receber confirmações, aumentando a eficiência. O receptor informa quantos quadros pode receber, e o transmissor ajusta o envio conforme essa janela.

Esses mecanismos contribuem diretamente para a confiabilidade e eficiência da comunicação.

**Perguntas:**

* Qual problema o controle de fluxo resolve?
* Como funciona o mecanismo Stop-and-Wait?
* Por que o Stop-and-Wait é considerado ineficiente?
* O que é a janela deslizante e como ela melhora o desempenho?
* O que pode acontecer se não houver controle de fluxo?



## Tema 4 – Protocolos de Detecção e Correção de Erros

Esses protocolos garantem a integridade dos dados transmitidos, identificando e, em alguns casos, corrigindo erros causados por ruído ou interferência no meio físico.

Principais técnicas:

**Parity Check:**
Adiciona um bit de paridade para indicar se o número de bits 1 é par ou ímpar. Detecta erros simples, mas não é robusto.

**Checksum:**
Calcula um valor com base nos dados transmitidos. O receptor recalcula e compara para verificar integridade. Mais confiável que paridade simples.

**Forward Error Correction (FEC):**
Adiciona redundância suficiente para que o receptor consiga corrigir erros sem necessidade de retransmissão. Muito utilizado em comunicações onde retransmissão é cara ou inviável (ex: satélite).

Cada técnica envolve um trade-off entre custo, complexidade e eficiência.

**Perguntas:**

* Qual a diferença entre detectar e corrigir erros?
* Como funciona o bit de paridade?
* Em que situação o Parity Check pode falhar?
* O que é checksum e como ele melhora a detecção de erros?
* Em quais cenários o uso de FEC é mais indicado?



## Tema 5 – Protocolos de Enlace em Redes WAN

Redes WAN (Wide Area Network) cobrem grandes distâncias e utilizam protocolos específicos para comunicação entre pontos distantes.

**PPP (Point-to-Point Protocol):**
Protocolo simples e amplamente utilizado em conexões ponto a ponto. Suporta autenticação (PAP, CHAP), encapsulamento de diferentes protocolos de rede e detecção de erros.

**HDLC (High-Level Data Link Control):**
Protocolo mais genérico e eficiente, utilizado em enlaces dedicados. Trabalha com enquadramento de dados e controle de erro, mas possui menos recursos de autenticação comparado ao PPP.

Esses protocolos diferem da Ethernet, que é voltada para redes locais (LAN), com características como broadcast e acesso múltiplo ao meio.

**Perguntas:**

* O que caracteriza uma rede WAN?
* O que significa uma conexão ponto a ponto?
* Quais são as principais funcionalidades do PPP?
* Qual a principal diferença entre PPP e HDLC?
* Por que protocolos de WAN são diferentes dos utilizados em LAN?
