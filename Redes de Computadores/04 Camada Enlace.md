# 4. Camada 2 – Camada de Enlace de Dados

## 1. Introdução à Camada de Enlace de Dados

A Camada 2 do Modelo OSI é denominada Camada de Enlace de Dados. Essa camada é responsável por estabelecer uma comunicação confiável entre dispositivos conectados ao mesmo meio físico de transmissão.

Enquanto a Camada Física se preocupa apenas com a transmissão de bits através de sinais elétricos, ópticos ou eletromagnéticos, a Camada de Enlace organiza esses bits em estruturas chamadas quadros. Esses quadros permitem identificar corretamente a origem e o destino dos dados dentro da rede local.

A Camada de Enlace funciona como uma ponte entre a transmissão física de sinais e a comunicação lógica entre dispositivos. Ela implementa mecanismos que garantem que os dados transmitidos sejam entregues corretamente dentro do mesmo segmento de rede.

Essa camada é fundamental para o funcionamento de tecnologias de rede como Ethernet, Wi-Fi e diversas outras tecnologias de comunicação local.


## 2. Funções da Camada de Enlace

A Camada de Enlace desempenha diversas funções essenciais para o funcionamento das redes de computadores.

### Encapsulamento de dados

Os dados recebidos da Camada de Rede são encapsulados em quadros antes de serem transmitidos. O processo de encapsulamento consiste em adicionar informações de controle ao início e ao final dos dados transmitidos.

Essas informações permitem identificar o dispositivo de origem, o dispositivo de destino, o tipo de protocolo transportado e mecanismos de verificação de integridade.


### Endereçamento físico

A identificação dos dispositivos dentro da rede local é realizada através do endereço MAC. Esse endereço é único para cada interface de rede e permite que switches encaminhem corretamente os quadros entre os dispositivos.

Diferentemente do endereço IP, que pode mudar conforme a rede em que o dispositivo está conectado, o endereço MAC geralmente permanece fixo no hardware da interface de rede.


### Controle de acesso ao meio

Em redes onde múltiplos dispositivos compartilham o mesmo canal de comunicação, é necessário estabelecer regras para determinar quando cada dispositivo pode transmitir dados.

Esse controle evita colisões e garante que todos os dispositivos tenham acesso justo ao meio de transmissão.


### Detecção de erros

Durante a transmissão de dados podem ocorrer erros causados por interferências eletromagnéticas, ruídos ou falhas físicas no meio de transmissão. Para garantir a integridade dos dados, a Camada de Enlace utiliza mecanismos de detecção de erros.

Quando um erro é identificado, o quadro pode ser descartado e retransmitido pelas camadas superiores.


### Controle de fluxo

O controle de fluxo garante que um dispositivo transmissor não envie dados em uma velocidade maior do que o receptor consegue processar.

Esse mecanismo evita congestionamentos e perda de dados durante a comunicação.


## 3. Subcamadas da Camada de Enlace

A Camada de Enlace é dividida em duas subcamadas definidas pelo padrão IEEE 802.

Subcamada LLC – Logical Link Control
Subcamada MAC – Media Access Control

Essa divisão permite separar responsabilidades relacionadas ao controle lógico da comunicação e ao acesso físico ao meio de transmissão.


### Subcamada LLC

A subcamada LLC fornece uma interface padronizada entre a Camada de Rede e a infraestrutura de enlace.

Suas funções incluem identificação do protocolo da camada superior, gerenciamento de conexões lógicas e controle de fluxo entre dispositivos.

Ela permite que diferentes protocolos de rede utilizem a mesma infraestrutura física de maneira transparente.


### Subcamada MAC

A subcamada MAC é responsável pelo controle direto do acesso ao meio físico e pela identificação dos dispositivos na rede.

Ela define o formato dos quadros, implementa mecanismos de controle de acesso ao meio e utiliza endereços MAC para identificar os dispositivos que participam da comunicação.


## 4. Endereçamento MAC

O endereço MAC é um identificador único atribuído às interfaces de rede dos dispositivos.

Ele possui 48 bits de comprimento e normalmente é representado em formato hexadecimal. Esse endereço é dividido em duas partes principais.

A primeira parte identifica o fabricante da interface de rede e é conhecida como OUI, que significa Organizationally Unique Identifier.

A segunda parte identifica individualmente o dispositivo produzido por esse fabricante.

O endereço MAC é utilizado pelos switches para construir tabelas de encaminhamento que permitem enviar quadros apenas para a porta onde o dispositivo de destino está conectado.


## 5. Ethernet

Ethernet é a tecnologia de rede local mais utilizada no mundo. Ela foi originalmente desenvolvida na década de 1970 e posteriormente padronizada pelo IEEE através da família de normas IEEE 802.3.

A Ethernet define tanto aspectos da Camada Física quanto da Camada de Enlace, incluindo formato de quadros, métodos de acesso ao meio e velocidades de transmissão.

Entre as principais características da Ethernet estão:

utilização de quadros para transmissão de dados
uso de endereços MAC para identificação dos dispositivos
suporte a diferentes velocidades de transmissão

Ao longo do tempo, diversas versões da Ethernet foram desenvolvidas, permitindo velocidades cada vez maiores.


## 6. Comutação em Redes Ethernet

Em redes modernas, os dispositivos são conectados através de switches.

Os switches operam principalmente na Camada de Enlace e são responsáveis por encaminhar quadros entre os dispositivos conectados à rede.

Eles mantêm uma estrutura chamada tabela MAC, onde armazenam os endereços MAC aprendidos em cada porta do equipamento.

Quando um quadro chega ao switch, ele verifica o endereço MAC de destino e encaminha o quadro apenas para a porta correspondente ao dispositivo de destino.

Esse mecanismo reduz o tráfego desnecessário na rede e melhora significativamente o desempenho da comunicação.


## 7. Métodos de Comutação

Os switches podem utilizar diferentes métodos para encaminhar quadros.

### Store and Forward

Nesse método, o switch recebe todo o quadro antes de encaminhá-lo para o destino. Isso permite verificar a integridade dos dados utilizando o campo de verificação de erro.

Esse é o método mais utilizado em switches modernos.


### Cut Through

Nesse método, o switch começa a encaminhar o quadro assim que identifica o endereço MAC de destino, sem esperar a recepção completa do quadro.

Esse método reduz a latência, mas não permite verificar erros antes do encaminhamento.


## 8. Protocolo ARP

O protocolo ARP é responsável por mapear endereços IP para endereços MAC dentro de uma rede local.

Quando um dispositivo precisa enviar dados para outro dispositivo da mesma rede, ele precisa descobrir qual é o endereço MAC associado ao endereço IP de destino.

Para isso, o dispositivo envia uma mensagem de broadcast perguntando qual dispositivo possui aquele endereço IP. O dispositivo correspondente responde informando seu endereço MAC.

Após essa descoberta, o dispositivo armazena essa informação em uma tabela ARP para futuras comunicações.


## 9. Broadcast, Unicast e Multicast

A Camada de Enlace suporta diferentes tipos de comunicação.

Unicast ocorre quando um quadro é enviado de um dispositivo para outro dispositivo específico.

Broadcast ocorre quando um quadro é enviado para todos os dispositivos da rede.

Multicast ocorre quando um quadro é enviado para um grupo específico de dispositivos.

Esses diferentes modos de transmissão permitem que redes implementem diversos tipos de comunicação e serviços.


## 10. VLANs – Redes Locais Virtuais

Uma VLAN permite dividir logicamente uma rede física em várias redes independentes.

Essa técnica é amplamente utilizada para segmentar redes em ambientes corporativos, permitindo separar diferentes departamentos ou áreas da organização dentro da mesma infraestrutura física.

Cada VLAN funciona como uma rede isolada, com seu próprio domínio de broadcast.

Dispositivos em VLANs diferentes não podem se comunicar diretamente sem a utilização de um dispositivo de camada superior, como um roteador ou um switch de camada 3.


## 11. VLAN Trunking

Quando múltiplos switches precisam transportar quadros pertencentes a diferentes VLANs entre si, utiliza-se um mecanismo chamado trunk.

Um trunk permite que várias VLANs compartilhem o mesmo link físico entre switches.

Para identificar a qual VLAN cada quadro pertence, é utilizado um campo adicional chamado tag VLAN.


## 12. Padrão IEEE 802.1Q

O padrão IEEE 802.1Q define o método mais utilizado para implementar VLANs em redes Ethernet.

Esse padrão adiciona um campo extra dentro do quadro Ethernet chamado VLAN tag. Esse campo identifica a VLAN à qual o quadro pertence.

Dessa forma, switches conseguem transportar quadros de múltiplas VLANs através de um único link físico.


## 13. Loops de Rede

Em redes com múltiplos switches, é comum existir mais de um caminho físico entre dispositivos.

Embora isso aumente a redundância da rede, também pode gerar loops de rede, onde quadros circulam indefinidamente entre os switches.

Esses loops podem causar tempestades de broadcast, congestionamento da rede e falhas generalizadas de comunicação.

Para evitar esse problema, utiliza-se um protocolo chamado Spanning Tree Protocol.


## 14. Spanning Tree Protocol

O Spanning Tree Protocol, definido pelo padrão IEEE 802.1D, é utilizado para evitar loops em redes com múltiplos caminhos redundantes.

Esse protocolo analisa a topologia da rede e desativa temporariamente alguns links redundantes, criando uma estrutura lógica em forma de árvore.

Caso um link ativo falhe, o protocolo pode reativar automaticamente um dos links redundantes, garantindo continuidade da comunicação.

Esse mecanismo permite alta disponibilidade sem causar loops de rede.


## 15. Link Aggregation

Link Aggregation é uma técnica utilizada para combinar múltiplos links físicos em um único link lógico.

Isso permite aumentar a largura de banda disponível entre dois dispositivos e também fornece redundância caso um dos links falhe.

O padrão mais comum utilizado para essa técnica é o IEEE 802.3ad, também conhecido como LACP – Link Aggregation Control Protocol.

Essa técnica é muito utilizada em conexões entre switches e em links de backbone de rede.


## 16. Segurança na Camada de Enlace

Embora muitas soluções de segurança operem nas camadas superiores da rede, a Camada de Enlace também possui mecanismos importantes de proteção.

Entre as principais técnicas de segurança estão:

controle de acesso baseado em endereço MAC
segmentação da rede utilizando VLANs
autenticação de dispositivos utilizando o padrão IEEE 802.1X
limitação de endereços MAC por porta em switches

Essas medidas ajudam a impedir que dispositivos não autorizados se conectem à rede e reduzem riscos de ataques internos.


## Conclusão

A Camada de Enlace desempenha um papel fundamental na comunicação em redes de computadores. Ela é responsável por organizar a transmissão de dados entre dispositivos conectados ao mesmo meio físico, garantindo que os quadros sejam entregues corretamente e com integridade.

Através de mecanismos como endereçamento MAC, controle de acesso ao meio, detecção de erros e comutação de quadros, essa camada permite a construção de redes locais eficientes e confiáveis.

Além disso, tecnologias modernas como VLANs, Spanning Tree Protocol e Link Aggregation ampliam as capacidades da Camada de Enlace, permitindo redes mais escaláveis, seguras e resilientes.

O entendimento desses conceitos é essencial para o projeto, implementação e administração de redes locais modernas.
