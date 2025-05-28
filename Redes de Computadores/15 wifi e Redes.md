# Wi-Fi e Redes sem Fio - Padrões IEEE 802.11


## Introdução

**Wi-Fi** é uma tecnologia de comunicação **sem fio (wireless)** que permite a troca de dados entre dispositivos por meio de ondas de rádio, eliminando a necessidade de cabos de rede. Ela é baseada em uma família de padrões desenvolvidos pelo **IEEE (Institute of Electrical and Electronics Engineers)**, chamada de **IEEE 802.11**.

Esses padrões definem os aspectos técnicos que tornam a comunicação entre dispositivos possível, tais como:

- **Frequências de operação** (como 2.4 GHz e 5 GHz)
- **Taxas de transmissão** de dados (velocidade da rede)
- **Protocolos de segurança**, como WPA2 e WPA3
- **Compatibilidade** entre equipamentos de diferentes fabricantes

### Exemplo prático

Imagine a sua casa conectada à internet por um **roteador Wi-Fi**. Esse roteador está seguindo um padrão específico, como o **802.11ac**, permitindo que:

- Seu **notebook** assista a vídeos em alta definição;
- Seu **smartphone** use aplicativos de redes sociais;
- Uma **smart TV** transmita conteúdo via streaming;
- Dispositivos como **Alexa, câmeras IP e lâmpadas inteligentes** se comuniquem sem fios.

Tudo isso ocorre **sem conexão por cabos**, mas seguindo regras padronizadas que garantem velocidade, estabilidade e segurança.

### Aplicações do Wi-Fi

- **Ambientes domésticos**: acesso à internet para celulares, TVs, notebooks e dispositivos inteligentes.
- **Empresas**: redes corporativas para dezenas ou centenas de dispositivos simultâneos.
- **Espaços públicos**: cafés, aeroportos e universidades que oferecem Wi-Fi gratuito.
- **Indústria e IoT**: sensores e máquinas conectadas em tempo real.

O Wi-Fi tornou-se uma tecnologia essencial no dia a dia moderno, graças à **padronização dos protocolos IEEE 802.11**, que garantem **interoperabilidade** global entre dispositivos de diferentes marcas.


## O que é o IEEE 802.11?

O **IEEE 802.11** é um conjunto de normas desenvolvido pelo **Institute of Electrical and Electronics Engineers (IEEE)** para padronizar a comunicação em **redes locais sem fio (WLAN - Wireless Local Area Network)**. Essas normas garantem que diferentes dispositivos, mesmo de fabricantes distintos, possam se comunicar de forma eficiente e segura em uma rede Wi-Fi.

O padrão 802.11 especifica tanto os aspectos físicos quanto os aspectos lógicos da comunicação, abrangendo:

- **Camada Física (PHY)**: define como os dados são transmitidos pelo ar, como o tipo de modulação do sinal, frequências utilizadas e taxas de transmissão.
- **Camada de Enlace de Dados (MAC - Medium Access Control)**: estabelece como os dispositivos acessam o meio compartilhado (o ar), evitando colisões de dados e gerenciando o tráfego na rede.

### Principais elementos definidos pelo padrão:

- **Modulação do sinal**: Define a técnica usada para representar os dados digitalmente em forma de ondas de rádio. Por exemplo, o padrão 802.11b utiliza modulação DSSS (Direct Sequence Spread Spectrum), enquanto o 802.11ac usa OFDM (Orthogonal Frequency-Division Multiplexing), que é mais eficiente.

- **Protocolos de acesso ao meio**: Controlam como os dispositivos disputam o acesso ao canal de comunicação. O IEEE 802.11 utiliza o protocolo CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance), que tenta evitar colisões entre pacotes transmitidos.

- **Segurança e autenticação**: Define os métodos para proteger os dados transmitidos, como WEP (obsoleto), WPA, WPA2 e WPA3. Também estabelece como os dispositivos se autenticarão para entrar na rede.

- **Compatibilidade entre dispositivos**: Garante que um dispositivo com suporte a 802.11n, por exemplo, possa operar (ainda que com menor desempenho) em uma rede configurada com 802.11g, promovendo interoperabilidade.

### Exemplo prático

Suponha que você tenha um roteador Wi-Fi em casa configurado para operar no padrão 802.11ac. Quando seu notebook tenta se conectar a essa rede, ele precisa "falar a mesma linguagem", ou seja, seguir as especificações do 802.11ac. Se ele suportar apenas o padrão 802.11n, ele ainda poderá se conectar, mas com uma velocidade inferior, pois os padrões são compatíveis entre si até certo ponto.

Graças à padronização do IEEE 802.11, fabricantes podem desenvolver roteadores, smartphones, notebooks e outros dispositivos sem fio que funcionam juntos de forma confiável, mesmo com tecnologias e versões diferentes.


## Principais Padrões IEEE 802.11

| Padrão       | Ano de Lançamento | Frequência     | Largura de Banda | Velocidade Máxima | Observações                              |
|--------------|------------------|----------------|------------------|-------------------|------------------------------------------|
| 802.11       | 1997             | 2.4 GHz        | 20 MHz           | 2 Mbps            | Primeira versão, obsoleta                |
| 802.11b      | 1999             | 2.4 GHz        | 20 MHz           | 11 Mbps           | Compatível com 802.11                    |
| 802.11a      | 1999             | 5 GHz          | 20 MHz           | 54 Mbps           | Menos interferência, mas menor alcance   |
| 802.11g      | 2003             | 2.4 GHz        | 20 MHz           | 54 Mbps           | Compatível com 802.11b                   |
| 802.11n      | 2009             | 2.4/5 GHz      | 20/40 MHz        | 600 Mbps          | MIMO (múltiplas antenas)                 |
| 802.11ac     | 2013             | 5 GHz          | 20/40/80/160 MHz | 1.3 Gbps+         | MU-MIMO e maior largura de banda         |
| 802.11ax (Wi-Fi 6) | 2019      | 2.4/5 GHz       | 20 a 160 MHz     | 10 Gbps (teórico)  | Mais eficiente em ambientes densos       |

## Avanços Tecnológicos

Com a evolução dos padrões IEEE 802.11, diversas tecnologias foram introduzidas para melhorar a eficiência, a velocidade e a capacidade das redes Wi-Fi. Abaixo estão alguns dos principais avanços:

### MIMO (Multiple Input, Multiple Output)

O MIMO permite o uso de múltiplas antenas tanto no transmissor quanto no receptor para **enviar e receber vários fluxos de dados simultaneamente**. Isso aumenta a **capacidade da rede** e a **velocidade de transmissão**, mesmo sem aumentar a largura de banda.

**Exemplo:**  
Um roteador com 4 antenas (4x4 MIMO) pode enviar 4 fluxos de dados diferentes ao mesmo tempo para um dispositivo compatível, como um notebook com suporte a MIMO, aumentando significativamente a taxa de transferência.

---

### MU-MIMO (Multi-User MIMO)

O MU-MIMO é uma evolução do MIMO tradicional. Ele permite que o roteador **atenda vários dispositivos simultaneamente**, em vez de transmitir os dados sequencialmente para cada um.

**Exemplo:**  
Em uma casa com vários usuários assistindo a vídeos, jogando online ou participando de videoconferências, o roteador com MU-MIMO consegue distribuir os dados de forma eficiente para cada um, mantendo a qualidade da conexão para todos os dispositivos ao mesmo tempo.

---

### OFDMA (Orthogonal Frequency Division Multiple Access)

Introduzido no padrão **802.11ax (Wi-Fi 6)**, o OFDMA permite que um único canal seja dividido em **vários subcanais menores**, que podem ser atribuídos a diferentes dispositivos de forma simultânea.

Isso melhora significativamente a **eficiência da rede em ambientes congestionados**, como escritórios, escolas, estádios ou residências com muitos dispositivos conectados.

**Exemplo:**  
Em uma sala de aula com 30 alunos usando notebooks conectados ao mesmo ponto de acesso Wi-Fi 6, o roteador pode dividir o canal em subcanais e atender vários alunos ao mesmo tempo, reduzindo a latência e aumentando a eficiência da rede.

---

Essas tecnologias, quando combinadas, proporcionam redes sem fio muito mais rápidas, estáveis e adequadas para o crescente número de dispositivos conectados no dia a dia.


## Segurança nas Redes 802.11

A segurança é um aspecto fundamental das redes Wi-Fi. Ao longo dos anos, os padrões IEEE 802.11 evoluíram para incluir protocolos de criptografia e autenticação cada vez mais robustos. Abaixo estão os principais protocolos utilizados:

| Protocolo | Ano de Introdução | Descrição                                                                                                                                     |
|-----------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **WEP**   | 1997              | O **Wired Equivalent Privacy** foi o primeiro protocolo de segurança para redes Wi-Fi. Usa criptografia RC4, mas possui falhas graves. Pode ser quebrado em poucos minutos com ferramentas simples. Está obsoleto e não deve ser utilizado. |
| **WPA**   | 2003              | O **Wi-Fi Protected Access** surgiu como uma solução temporária após a descoberta das falhas no WEP. Introduziu o uso do TKIP (Temporal Key Integrity Protocol), mais seguro que o RC4, mas ainda vulnerável a certos tipos de ataque. |
| **WPA2**  | 2004              | Tornou-se o padrão predominante por muitos anos. Usa criptografia AES (Advanced Encryption Standard) com o protocolo CCMP, oferecendo segurança muito superior ao WPA. É ainda amplamente utilizado. |
| **WPA3**  | 2018              | Versão mais recente, com melhorias significativas, como a criptografia individualizada em redes públicas (SAE - Simultaneous Authentication of Equals), proteção contra ataques de força bruta e melhor segurança para dispositivos IoT. |

### Recomendação atual

- **Evite usar redes WEP ou WPA.**  
- **Prefira WPA3 sempre que disponível.**
- Caso o roteador não suporte WPA3, o uso de **WPA2 com senha forte** ainda é considerado seguro.

### Exemplo prático

Se você configurar uma rede Wi-Fi doméstica e o roteador oferecer suporte a WPA3, ative essa opção nas configurações de segurança. Caso contrário, selecione WPA2-AES, nunca WEP. Em redes públicas, o WPA3 pode oferecer criptografia individual, mesmo sem senha visível, o que aumenta a proteção dos dados.



## Wi-Fi x Outros Tipos de Redes sem Fio

Embora o Wi-Fi (baseado nos padrões IEEE 802.11) seja a tecnologia sem fio mais comum para acesso à internet em redes locais, existem outras tecnologias sem fio desenvolvidas para diferentes aplicações, cada uma com suas características específicas.

### Comparativo de Tecnologias

| Tecnologia     | Uso Principal                          | Alcance        | Velocidade        |
|----------------|----------------------------------------|----------------|-------------------|
| **Wi-Fi (802.11)** | Acesso à internet em residências, empresas e locais públicos | Médio a alto (até centenas de metros com repetidores) | Alta (até vários Gbps com Wi-Fi 6/6E/7) |
| **Bluetooth**  | Comunicação entre dispositivos próximos (fones, relógios, teclados) | Curto (até 10 metros em média) | Baixa a média (até 2 Mbps no Bluetooth 5.0) |
| **ZigBee**     | Redes de sensores e automação residencial (IoT, lâmpadas, tomadas) | Curto (10 a 100 metros) | Baixa (até 250 Kbps) |
| **LTE/5G**     | Conexão móvel em redes celulares (smartphones, modems 4G/5G) | Longo (vários quilômetros) | Alta (até 10 Gbps no 5G mmWave) |

### Considerações

- **Wi-Fi** é ideal para ambientes internos, onde há uma infraestrutura de rede local. Ele oferece altas taxas de transferência e permite múltiplas conexões simultâneas.
- **Bluetooth** consome pouca energia e é excelente para conexões diretas e de curto alcance entre dispositivos pessoais.
- **ZigBee** é muito usado em aplicações de **Internet das Coisas (IoT)**, como casas inteligentes. Sua vantagem está no baixo consumo de energia e suporte a topologias em malha.
- **LTE/5G** é utilizado em áreas amplas, especialmente em redes móveis. São essenciais para comunicação fora do alcance de redes locais, como em trânsito ou zonas rurais.

### Exemplo prático

Um smartphone pode usar:
- **Wi-Fi** em casa ou no trabalho para acessar a internet;
- **Bluetooth** para se conectar a fones de ouvido;
- **ZigBee** para controlar dispositivos da casa inteligente, como lâmpadas;
- **5G** para navegar na internet quando está fora de uma rede Wi-Fi.

Cada tecnologia atende a uma necessidade específica, e muitas vezes elas coexistem no mesmo dispositivo para oferecer flexibilidade de conectividade.


## Referências

- [IEEE 802.11 Working Group](https://standards.ieee.org/ieee/802.11/6210/)
- [Wi-Fi Alliance](https://www.wi-fi.org/)
- Tanenbaum, A. S. *Redes de Computadores*, 5ª Edição.