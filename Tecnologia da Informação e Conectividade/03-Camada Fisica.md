# Aula 03 – Camada Física: Meios de Transmissão e Cabeamento

## Objetivos de Aprendizagem

* Compreender os principais **meios de transmissão** (guiados e não guiados).
* Identificar e aplicar os padrões de cabeamento utilizados em redes.
* Reconhecer a importância da escolha correta do meio físico para desempenho e confiabilidade da rede.
* Implementar no **Packet Tracer** um cenário simples de rede cabeada.


## Referências Teóricas (Tanenbaum, 6ª edição)

* **Cap. 2 – A Camada Física**

  * Seção 2.1: O papel da camada física (pp. 39–41).
  * Seção 2.2: Meios de transmissão guiados (par trançado, coaxial, fibra óptica) (pp. 42–50).
  * Seção 2.3: Meios de transmissão não guiados (ondas de rádio, micro-ondas, satélites) (pp. 50–56).
  * Seção 2.4: Comunicação sem fio (pp. 56–65).


## 1. Introdução

A **camada física** é a **primeira camada do Modelo OSI** e tem como principal função a **transmissão de bits brutos** através de um meio físico de comunicação. Diferente das camadas superiores, que lidam com protocolos e organização lógica dos dados, a camada física preocupa-se com aspectos **puramente elétricos, mecânicos e de transmissão**.

Segundo Tanenbaum, Feamster e Wetherall (2021, p. 39), *“a função da camada física é transportar um fluxo de bits de um computador para outro”*, assegurando que esses sinais cheguem corretamente ao destino. Isso significa que, sem uma infraestrutura física adequada, não importa quão avançados sejam os protocolos nas camadas superiores — a rede não funcionará de forma eficiente.

### Funções principais da camada física:

* Definir os **meios de transmissão** (cabos de cobre, fibra óptica, rádio, satélite).
* Especificar **padrões elétricos/ópticos** para representar bits (0 e 1).
* Determinar **direção da transmissão**: simplex, half-duplex ou full-duplex.
* Estabelecer **taxas de transmissão** (ex.: 100 Mbps, 1 Gbps, 10 Gbps).
* Garantir que o **sinal físico** seja interpretado de forma consistente na origem e no destino.


### Pergunta norteadora para discussão em sala:

 *"Como a escolha do meio de transmissão impacta a velocidade e a confiabilidade de uma rede?"*

Essa questão ajuda a conectar a teoria ao cotidiano. Por exemplo:

* **Cabo de par trançado (UTP Cat5e/Cat6)** é suficiente para a maioria das redes locais de até 1 Gbps, mas pode sofrer interferência eletromagnética.
* **Fibra óptica** é ideal para longas distâncias e altas taxas (10 Gbps ou mais), porém tem maior custo de implantação.
* **Wi-Fi** é conveniente e flexível, mas sujeito a ruídos e limitações de alcance.



## 2. Parte Teórica – Camada Física e Meios de Transmissão

A camada física trata da transmissão **real** dos bits entre os dispositivos. Para que isso seja possível, os bits precisam ser convertidos em **sinais elétricos, ópticos ou eletromagnéticos**, que percorrem algum **meio de transmissão** até o destino.

Segundo Tanenbaum, Feamster e Wetherall (2021, p. 42), os meios de transmissão podem ser classificados em:

* **Meios guiados**: onde os sinais seguem um caminho físico definido (cabos).
* **Meios não guiados**: onde os sinais se propagam livremente pelo ar ou espaço (ondas eletromagnéticas).


### 2.1 Meios de Transmissão Guiados (pp. 42–50)

Os **meios guiados** utilizam um **condutor físico** (fio metálico ou fibra óptica) para transportar o sinal. São a base da maioria das **redes locais (LANs)** e das interconexões de alta capacidade em **data centers** e **backbones de operadoras**.

De acordo com Tanenbaum, Feamster e Wetherall (2021, p. 42), a escolha do meio físico impacta diretamente a **velocidade, alcance, custo e confiabilidade** da comunicação.


#### a) Par Trançado (Twisted Pair)

O **par trançado** é formado por pares de fios de cobre entrelaçados, de forma a reduzir interferências eletromagnéticas externas e a diafonia (crosstalk) entre pares. É o meio físico mais usado em **redes Ethernet modernas**.

**Tipos principais:**

* **UTP (Unshielded Twisted Pair):** não possui blindagem adicional. É leve, barato e flexível, mas mais suscetível a interferências externas.
* **STP (Shielded Twisted Pair):** envolve cada par ou o conjunto de pares em uma blindagem metálica, oferecendo maior proteção contra ruídos, indicado em ambientes industriais.

**Categorias de cabos (TIA/EIA-568):**

* **Cat5e:** até 100 MHz, suporta 100/1000 Mbps (1 Gbps).
* **Cat6:** até 250 MHz, suporta até 10 Gbps em até 55 metros.
* **Cat6a:** até 500 MHz, suporta 10 Gbps até 100 metros.
* **Cat7 / Cat7a:** até 600/1000 MHz, blindagem completa, suportando até 40 Gbps (em ambientes controlados).
* **Cat8 (novo padrão):** até 2000 MHz, projetado para data centers, suporta 25/40 Gbps em até 30 metros.

**Vantagens:**

* Custo baixo e fácil instalação.
* Flexibilidade (pode ser usado em patch panels, switches e roteadores).
* Suporte a altas velocidades (até 10 Gbps em redes comuns).

**Limitações:**

* Suscetível a interferências eletromagnéticas, principalmente em UTP.
* Distância máxima: geralmente 100 metros sem repetição de sinal.

💡 *Exemplo prático:* A maior parte das redes corporativas utiliza cabos **UTP Cat6** para conexões entre computadores e switches.


#### b) Cabo Coaxial

O **cabo coaxial** é formado por:

1. Um condutor de cobre central.
2. Camada isolante.
3. Blindagem metálica (malha condutora).
4. Revestimento externo protetor.

Essa estrutura oferece **boa imunidade a interferências externas** e permite transmissões a longas distâncias com atenuação relativamente baixa.

**Usos históricos:**

* Muito popular nas primeiras redes Ethernet (**10BASE2** – fino, até 185 m; **10BASE5** – grosso, até 500 m).
* Permitia conexões em barramento, mas dificultava expansão e manutenção.

**Uso atual:**

* Sistemas de **TV a cabo**.
* Redes de **internet a cabo (DOCSIS)**.
* Enlaces de rádio e algumas redes metropolitanas.

**Vantagens:**

* Alta resistência a interferências externas.
* Maior alcance em comparação ao par trançado.

**Limitações:**

* Menos flexível, mais difícil de instalar.
* Hoje substituído por fibra óptica em redes modernas.

💡 *Exemplo prático:* A conexão de **TV por assinatura** e **internet a cabo** ainda utiliza coaxial em muitas residências.

#### c) Fibra Óptica

A **fibra óptica** transmite sinais por meio de **pulsos de luz**, usando lasers ou LEDs. É composta por:

* **Núcleo** (core): vidro ou plástico muito fino por onde a luz se propaga.
* **Revestimento (cladding):** material que mantém a luz confinada no núcleo por reflexão interna.
* **Camada de proteção** contra danos físicos.

**Tipos de fibra:**

* **Monomodo (SMF – Single Mode Fiber):**

  * Núcleo pequeno (\~9 µm).
  * A luz percorre apenas um caminho.
  * Ideal para longas distâncias (> 100 km).
  * Usada em telecomunicações e backbones.
* **Multimodo (MMF – Multi Mode Fiber):**

  * Núcleo maior (50 ou 62,5 µm).
  * Permite múltiplos caminhos de luz.
  * Adequada para curtas distâncias (até alguns km).
  * Comum em data centers e redes empresariais de alto desempenho.

**Vantagens:**

* Altíssima capacidade (10, 40, 100 Gbps e além).
* Baixa atenuação, ideal para longas distâncias.
* Imune a interferências eletromagnéticas.
* Segurança: difícil de interceptar o sinal sem ser detectado.

**Limitações:**

* Custo de instalação e manutenção mais alto.
* Requer equipamentos específicos (transceptores ópticos, conectores de precisão).
* Fibra é mais frágil que cabos metálicos.

💡 *Exemplo prático:* A tecnologia **FTTH (Fiber to the Home)** leva fibra óptica diretamente à residência, permitindo conexões de **300 Mbps até 1 Gbps** ou mais.





### 2.2 Meios de Transmissão Não Guiados (pp. 50–56)

Diferente dos meios guiados, que utilizam um condutor físico, os **meios de transmissão não guiados** propagam sinais através do **ar ou espaço**, utilizando ondas eletromagnéticas.

De acordo com Tanenbaum, Feamster e Wetherall (2021, p. 50), esse tipo de transmissão é essencial em cenários onde o cabeamento é inviável, como em **redes móveis, comunicação via satélite e Wi-Fi**.

Esses meios podem operar em diferentes **faixas de frequência**, variando de **kHz a GHz**, o que define o alcance, a taxa de transmissão e a suscetibilidade a interferências.


#### a) Ondas de Rádio

* Utilizadas em uma ampla gama de aplicações, de transmissões de rádio AM/FM até redes sem fio locais.
* Podem atravessar paredes e obstáculos, tornando-se adequadas para **comunicação em ambientes urbanos**.
* A largura de banda disponível depende da frequência utilizada.

**Exemplos de aplicações:**

* Rádio FM (88–108 MHz).
* Wi-Fi 2,4 GHz (IEEE 802.11b/g/n) – maior alcance, mas mais sujeito a interferências.
* Wi-Fi 5 GHz (IEEE 802.11ac) – maior velocidade, menor alcance.
* Bluetooth (2,4 GHz).

**Vantagens:**

* Bom alcance.
* Não requer visada direta (line of sight).
* Equipamentos baratos e difundidos.

**Limitações:**

* Suscetíveis a **interferências** (outros dispositivos, micro-ondas, paredes).
* Segurança: sinais podem ser interceptados sem contato físico.

💡 *Exemplo prático:* redes Wi-Fi domésticas utilizam ondas de rádio para conectar notebooks e celulares ao roteador sem cabos.



#### b) Micro-ondas Terrestres

* Operam em frequências de **1 GHz a 10 GHz**.
* Necessitam de **linha de visada (line of sight)**: antenas precisam estar alinhadas, sem obstáculos.
* Muito utilizadas em **enlaces ponto a ponto** entre torres de telecomunicações.

**Exemplos de uso:**

* Conexões entre antenas de operadoras de celular.
* Redes de backbone em regiões onde não há cabeamento de fibra.

**Vantagens:**

* Altas taxas de transmissão em enlaces dedicados.
* Alcance de dezenas de quilômetros entre antenas.

**Limitações:**

* Requer torres altas e alinhamento preciso.
* A transmissão pode ser afetada por condições atmosféricas (chuva forte, neblina).

💡 *Exemplo prático:* operadoras de telefonia usam micro-ondas para conectar torres de celular em áreas onde a fibra ainda não chegou.



#### c) Satélites

* Operam em diferentes faixas: **UHF, SHF e EHF**, geralmente acima de 1 GHz.
* Possibilitam comunicações a nível **global**.
* Dividem-se em:

  * **Geoestacionários (GEO):** órbita a \~36.000 km, permanecem fixos em relação à Terra. Boa cobertura, mas latência alta (600 ms ou mais).
  * **Órbitas médias (MEO):** entre 2.000 km e 35.000 km. Latência intermediária.
  * **Baixa órbita (LEO):** entre 200 km e 2.000 km. Latência baixa, mas exige constelação com muitos satélites (ex.: Starlink).

**Exemplos de uso:**

* TV via satélite (Sky, Claro TV).
* Internet via satélite (HughesNet, Starlink).
* Telefonia global (Iridium).

**Vantagens:**

* Cobertura ampla, incluindo regiões remotas.
* Permite conectividade onde não há cabos.

**Limitações:**

* Maior latência (principalmente em GEO).
* Custo alto de lançamento e manutenção.
* Dependência de condições climáticas (chuva intensa pode degradar o sinal).

💡 *Exemplo prático:* a internet via **Starlink** usa satélites em órbita baixa para oferecer conexões rápidas em regiões rurais, com latência comparável à da fibra óptica.



#### Comparação entre os meios não guiados

| Meio           | Alcance                | Taxa de Transmissão | Vantagens                                   | Limitações                                 |
| -------------- | ---------------------- | ------------------- | ------------------------------------------- | ------------------------------------------ |
| Ondas de rádio | Curto a médio (até km) | Baixa a média       | Bom alcance, baixo custo, atravessa paredes | Interferências, baixa segurança            |
| Micro-ondas    | Médio (dezenas de km)  | Alta                | Altas taxas, ideal para enlaces fixos       | Requer visada direta, clima interfere      |
| Satélites      | Global                 | Alta, mas variável  | Cobertura mundial, ideal para áreas remotas | Latência, custo elevado, clima afeta sinal |




### 2.3 Comunicação Sem Fio (pp. 56–65)

A comunicação sem fio é uma aplicação prática dos **meios de transmissão não guiados**, permitindo a mobilidade dos usuários e a interconexão de dispositivos sem cabos.

Segundo Tanenbaum, Feamster e Wetherall (2021, p. 56), a principal característica da comunicação sem fio é a **variabilidade do meio de transmissão**: sinais podem sofrer interferências, atenuação e multipercurso (reflexões que chegam em tempos diferentes ao receptor).

Essa tecnologia é a base de redes modernas, desde conexões **Wi-Fi domésticas** até a **internet móvel 5G** e a **Internet das Coisas (IoT)**.



#### a) Wi-Fi (IEEE 802.11)

* Padrão mais difundido para **redes locais sem fio (WLANs)**.
* Opera principalmente em **2,4 GHz e 5 GHz**, e mais recentemente em **6 GHz (Wi-Fi 6E)**.
* Taxas de transmissão variam:

  * 802.11n → até 600 Mbps.
  * 802.11ac → até vários Gbps (com múltiplas antenas – MIMO).
  * 802.11ax (Wi-Fi 6) → maior eficiência, suporta muitos dispositivos conectados.

**Vantagens:**

* Alta velocidade.
* Flexibilidade de instalação.
* Amplamente suportado em notebooks, smartphones, IoT.

**Limitações:**

* Interferência (outros roteadores, micro-ondas).
* Alcance limitado (\~30 m em ambientes internos).
* Segurança depende de protocolos (WPA2, WPA3).

💡 *Exemplo prático:* redes domésticas e empresariais usam Wi-Fi como substituto ao cabeamento, permitindo conectar diversos dispositivos móveis.



#### b) Bluetooth

* Padrão voltado para **redes pessoais sem fio (WPANs)**.
* Opera na faixa **2,4 GHz**, com baixa potência e curto alcance (até 10 m em versões clássicas; até 100 m em Bluetooth 5).
* Consumo de energia reduzido, ideal para dispositivos portáteis.

**Aplicações típicas:**

* Fones de ouvido, teclados, mouses.
* Conexão entre celular e carro.
* IoT e dispositivos vestíveis (smartwatches, pulseiras fitness).

**Vantagens:**

* Baixo consumo de energia.
* Conexão direta entre dispositivos sem infraestrutura adicional.

**Limitações:**

* Baixa taxa de transmissão (até 2 Mbps no Bluetooth clássico, 50 Mbps no 5.0).
* Alcance reduzido.

💡 *Exemplo prático:* conectar fones sem fio ao celular para chamadas ou música.



#### c) 4G e 5G (Redes Celulares)

* As redes celulares evoluíram de 2G (voz digital) até 5G (altíssima velocidade e baixa latência).

**4G (LTE):**

* Taxas de até **100 Mbps (móvel)** e 1 Gbps (fixo).
* Base de muitas aplicações móveis atuais (streaming, redes sociais, videochamadas).

**5G:**

* Velocidades de até **10 Gbps** em cenários ideais.
* Latência extremamente baixa (\~1 ms), permitindo aplicações em **tempo real**.
* Suporta **massiva densidade de dispositivos**, fundamental para IoT.

**Vantagens:**

* Cobertura ampla.
* Mobilidade total.
* Suporte a aplicações críticas (carros autônomos, realidade aumentada).

**Limitações:**

* Dependência da infraestrutura das operadoras.
* Frequências mais altas (mmWave) têm alcance menor e exigem mais antenas.

💡 *Exemplo prático:* o 5G já permite **jogos em nuvem (cloud gaming)** sem lag perceptível, além de viabilizar **carros conectados**.



#### d) NFC (Near Field Communication)

* Tecnologia de **curto alcance** (até 10 cm).
* Opera em **13,56 MHz**.
* Voltada para comunicação simples e rápida entre dois dispositivos próximos.

**Aplicações:**

* Pagamentos por aproximação (cartões, celulares, smartwatches).
* Bilhetagem eletrônica (transporte público).
* Emparelhamento rápido de dispositivos.

**Vantagens:**

* Simplicidade e rapidez.
* Boa segurança por exigir proximidade física.

**Limitações:**

* Alcance extremamente limitado.
* Taxas de transmissão muito baixas.

💡 *Exemplo prático:* pagar compras aproximando o cartão ou celular da maquininha.



#### Comparação entre tecnologias sem fio

| Tecnologia | Alcance                 | Taxa de Transmissão | Consumo de Energia | Aplicações                            |
| ---------- | ----------------------- | ------------------- | ------------------ | ------------------------------------- |
| Wi-Fi      | \~30 m                  | Até vários Gbps     | Médio              | Redes locais, internet doméstica      |
| Bluetooth  | 10–100 m                | 2–50 Mbps           | Muito baixo        | Fones, IoT, wearables                 |
| 4G         | km (macro-células)      | Até 100 Mbps        | Médio              | Internet móvel, streaming             |
| 5G         | km (macro) / m (mmWave) | Até 10 Gbps         | Médio/alto         | IoT massivo, AR/VR, carros conectados |
| NFC        | < 10 cm                 | < 1 Mbps            | Muito baixo        | Pagamentos, bilhetagem                |




### 2.4 Comparação entre Meios Guiados e Não Guiados (pp. 65–67)

Os **meios de transmissão** podem ser divididos em **guiados** (cabos físicos) e **não guiados** (transmissão pelo ar, via ondas eletromagnéticas). Cada um possui **características próprias**, com vantagens, desvantagens e contextos de aplicação específicos.

Segundo Tanenbaum, Feamster e Wetherall (2021, p. 65), a escolha do meio de transmissão deve considerar **custo, alcance, velocidade, segurança e ambiente de instalação**.



#### a) Meios Guiados

* Exigem **infraestrutura física** (cabos de cobre ou fibra óptica).
* Proporcionam **maior estabilidade**, já que o sinal segue um caminho definido.
* Menos suscetíveis a interferências externas, especialmente no caso da fibra óptica.

**Vantagens:**

* Maior confiabilidade e estabilidade.
* Menor interferência eletromagnética.
* Altas velocidades e grande capacidade (especialmente fibra óptica).
* Mais seguros fisicamente (acesso ao cabo pode ser controlado).

**Desvantagens:**

* Custo elevado em longas distâncias (fibra óptica, infraestrutura de cabos).
* Menor flexibilidade (requer cabeamento fixo).
* Instalação e manutenção podem ser complexas.

💡 *Exemplo prático:* interconexão de servidores em **data centers** utiliza predominantemente **fibra óptica** para garantir alta velocidade e baixa latência.



#### b) Meios Não Guiados

* Não necessitam de cabos, utilizam **ondas de rádio, micro-ondas ou luz infravermelha**.
* São a base de tecnologias móveis e redes sem fio.
* Oferecem **flexibilidade e mobilidade**, mas podem ser instáveis.

**Vantagens:**

* Facilidade de instalação (sem necessidade de cabeamento).
* Mobilidade: suporte a usuários e dispositivos em movimento.
* Cobertura ampla (redes celulares podem abranger cidades inteiras).

**Desvantagens:**

* Mais suscetíveis a interferências (barreiras físicas, ruídos, condições climáticas).
* Menor segurança (sinais podem ser interceptados no ar).
* Alcance limitado em alguns padrões (Wi-Fi, Bluetooth, NFC).
* Qualidade variável: dependente de obstáculos, distância e congestionamento do espectro.

💡 *Exemplo prático:* o **Wi-Fi** permite rápida instalação em residências e empresas, mas sofre interferência de paredes e de outros roteadores próximos.



#### c) Síntese Comparativa

| Critério               | Meios Guiados (Cabos)                                  | Meios Não Guiados (Sem Fio)                  |
| ---------------------- | ------------------------------------------------------ | -------------------------------------------- |
| **Infraestrutura**     | Requer cabeamento físico                               | Não necessita de cabos                       |
| **Velocidade**         | Muito alta (fibra óptica: até centenas de Gbps)        | Alta, mas geralmente menor que fibra         |
| **Estabilidade**       | Estável e previsível                                   | Pode variar (interferências, obstáculos)     |
| **Mobilidade**         | Limitada (dispositivo precisa estar cabeado)           | Alta (usuários e dispositivos móveis)        |
| **Custo**              | Elevado em longas distâncias                           | Mais baixo para redes locais                 |
| **Segurança**          | Mais fácil de controlar fisicamente                    | Exige criptografia forte (WPA3, LTE, etc.)   |
| **Aplicações típicas** | Data centers, redes corporativas, backbone de internet | Redes domésticas, celulares, IoT, mobilidade |






## 3. Parte Prática – Packet Tracer

### Atividade 1: Montagem de Rede Simples

* Conectar **dois PCs e um switch** utilizando cabos diferentes (direto, cruzado).
* Verificar conectividade com `ping`.

### Atividade 2: Teste de Comunicação

* Substituir cabos por conexões incorretas e observar falha de comunicação.
* Verificar como o meio físico influencia a confiabilidade.

### Atividade 3 (avançada, se tempo permitir):

* Simular **fibra óptica** e comparar latência em topologia maior.

## 4. Encerramento e Discussão

* Revisão dos tipos de meios de transmissão.
* Debate em grupo: *“Qual seria o meio físico mais adequado para redes industriais, residenciais e de longa distância?”*



📖 **Leitura complementar recomendada:**

* TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. *Redes de Computadores*. 6. ed. São Paulo: Grupo A, 2021.
  * O papel da camada física (pp. 39–41).
  * Par trançado: pp. 42–45.
  * Cabo coaxial: pp. 45–47.
  * Fibra óptica: pp. 47–50.
  * Ondas de rádio: pp. 50–52.
  * Micro-ondas e satélites: pp. 52–56.
  * Wi-Fi e Bluetooth: pp. 56–61.
  * Redes celulares (4G/5G): pp. 61–65.
  * NFC: pp. 65.
  * Comparação entre meios: pp. 65–67.

