# Introdução aos Modelos de Referência em Redes

Para que dispositivos diferentes consigam se comunicar em rede — independentemente de fabricante, sistema operacional ou tecnologia — é necessário que existam **padrões**. Esses padrões organizam a comunicação em **camadas**, cada uma com responsabilidades bem definidas.

Os dois principais modelos de referência estudados em redes de computadores são:

* **Modelo OSI (Open Systems Interconnection)**
* **Modelo TCP/IP (Transmission Control Protocol / Internet Protocol)**

O modelo OSI é conceitual e didático. Já o modelo TCP/IP é prático e utilizado na Internet.


## Modelo OSI

O modelo OSI foi desenvolvido pela International Organization for Standardization (ISO) e divide a comunicação em **7 camadas**. Cada camada executa funções específicas e se comunica apenas com a camada imediatamente superior e inferior.

As camadas são numeradas de baixo para cima:

1. Física
2. Enlace de Dados
3. Rede
4. Transporte
5. Sessão
6. Apresentação
7. Aplicação


### 1. Camada Física (Layer 1)

Responsável pela **transmissão bruta de bits** no meio físico.

Ela define:

* Tipo de cabo (par trançado, fibra óptica)
* Níveis elétricos
* Conectores
* Sinalização

Exemplo prático:
Quando um computador envia um dado pela rede, essa camada converte os bits (0 e 1) em sinais elétricos ou ópticos.

Dispositivos que atuam nessa camada:

* Hub
* Repetidor
* Cabos de rede


### 2. Camada de Enlace de Dados (Layer 2)

Responsável por organizar os bits em **quadros (frames)** e controlar o acesso ao meio.

Funções principais:

* Endereçamento físico (MAC Address)
* Detecção de erros
* Controle de acesso ao meio

Exemplo:
Um switch analisa o **endereço MAC** de destino para decidir para qual porta encaminhar o quadro.

Dispositivo típico:

* Switch

Protocolo associado:

* Ethernet (IEEE 802.3)


### 3. Camada de Rede (Layer 3)

Responsável pelo **endereçamento lógico e roteamento** entre redes diferentes.

Aqui entram os endereços IP.

Exemplo:
Quando você acessa um site hospedado em outro país, o roteador analisa o endereço IP de destino e decide qual caminho o pacote deve seguir.

Dispositivo:

* Roteador

Protocolo principal:

* IP (Internet Protocol)


### 4. Camada de Transporte (Layer 4)

Responsável por garantir a comunicação fim a fim entre aplicações.

Funções:

* Controle de fluxo
* Controle de erro
* Controle de congestionamento
* Segmentação dos dados

Protocolos principais:

* TCP (orientado à conexão, confiável)
* UDP (não orientado à conexão, mais rápido)

Exemplo comparativo:

Se você está assistindo um vídeo no YouTube, pequenos atrasos são aceitáveis → uso de UDP.
Se você está realizando uma transferência bancária → necessidade de confiabilidade → uso de TCP.


### 5. Camada de Sessão (Layer 5)

Responsável por:

* Estabelecer
* Manter
* Encerrar sessões de comunicação

Exemplo:
Em uma videoconferência, essa camada controla a abertura e o encerramento da sessão entre os participantes.


### 6. Camada de Apresentação (Layer 6)

Responsável pela **formatação e conversão dos dados**.

Funções:

* Criptografia
* Compressão
* Conversão de formatos

Exemplo:
Quando um site utiliza HTTPS, os dados são criptografados antes de serem transmitidos.


### 7. Camada de Aplicação (Layer 7)

É a camada mais próxima do usuário.

Fornece serviços de rede para aplicações como:

* Navegadores
* Clientes de e-mail
* Sistemas corporativos

Protocolos comuns:

* HTTP
* FTP
* SMTP
* DNS

Exemplo:
Quando você digita um endereço no navegador, o protocolo HTTP atua nesta camada.


## Funcionamento Encadeado (Exemplo Completo)

Imagine que um usuário acessa um site:

1. A aplicação gera uma requisição HTTP (Camada 7).
2. Os dados podem ser criptografados (Camada 6).
3. Uma sessão é estabelecida (Camada 5).
4. O TCP segmenta os dados (Camada 4).
5. O IP adiciona o endereço lógico (Camada 3).
6. O quadro Ethernet adiciona o endereço MAC (Camada 2).
7. Os bits são transmitidos pelo cabo (Camada 1).

No destino, o processo ocorre de forma inversa (desencapsulamento).


## Modelo TCP/IP

O modelo TCP/IP é o modelo utilizado na Internet e foi desenvolvido dentro dos projetos da DARPA.

Ele possui **4 camadas**:

1. Acesso à Rede
2. Internet
3. Transporte
4. Aplicação

Diferentemente do OSI, ele não separa Sessão e Apresentação.


### 1. Camada de Acesso à Rede

Equivale às camadas:

* Física (OSI)
* Enlace (OSI)

Responsável pela transmissão no meio físico e controle de acesso.

Exemplo:
Ethernet e Wi-Fi atuam aqui.


### 2. Camada Internet

Equivale à Camada de Rede do OSI.

Responsável pelo roteamento e endereçamento lógico.

Protocolo principal:

* IP


### 3. Camada de Transporte

Equivale à Camada 4 do OSI.

Protocolos:

* TCP
* UDP

Responsável por garantir (ou não) a entrega correta dos dados.


### 4. Camada de Aplicação

Equivale às camadas:

* Aplicação
* Apresentação
* Sessão (OSI)

Protocolos como HTTP, FTP e SMTP operam aqui.


## Comparação Conceitual OSI vs TCP/IP

O modelo OSI:

* É mais detalhado (7 camadas).
* Separa claramente funções.
* É amplamente utilizado para ensino e diagnóstico.

O modelo TCP/IP:

* É mais simples (4 camadas).
* É o modelo realmente implementado na Internet.
* Agrupa funções do OSI em menos camadas.

Enquanto o OSI é uma **referência teórica estruturada**, o TCP/IP é uma **arquitetura prática operacional**.


## Encapsulamento de Dados

Tanto no OSI quanto no TCP/IP, ocorre o processo de encapsulamento:

Aplicação → Segmento → Pacote → Quadro → Bits

Cada camada adiciona seu próprio cabeçalho com informações de controle.

Exemplo prático:

Um sistema de gestão envia um pedido para o servidor:

* A aplicação gera os dados.
* O TCP adiciona número de porta.
* O IP adiciona endereço de origem e destino.
* O Ethernet adiciona MAC.
* A camada física transmite os sinais.
