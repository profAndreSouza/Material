# Guia de Estudos — Prova Teórico-Prática 1 (P1)
## Unidade Curricular: Automação Industrial

---

## 1. Informações Gerais da Avaliação

- **Data da Avaliação:** Semana 08
- **Peso na Média Final:** 35%
- **Conteúdo Cobrado:** Semanas 01 a 07 (Aulas 01 a 06 e PII)
- **Formato da Prova:** Prova escrita individual composta por **12 questões** estritamente teóricas e conceituais.
- **Tipologia das Questões:**
  - Questões de **Múltipla Escolha** (contextualizadas com foco em tomadas de decisão de engenharia);
  - Questões de **Correlação de Colunas** (associação de termos técnicos, normas, camadas e dispositivos);
  - Questões **Discursivas Conceituais** (explicação de fenômenos físicos, princípios de controle, funcionamento de protocolos e justificativas arquiteturais).
- **Atenção:** **A prova não contém análise de código, lógica de programação nem depuração de algoritmos.** O foco é na fundamentação teórica, nas normas industriais, na taxonomia dos sinais, nas tecnologias de sensores/atuadores/controladores e nos protocolos de comunicação industrial.

---

## 2. Mapa Conceitual dos Conteúdos (Semanas 01 a 07)

### Semana 01 — Arquitetura TI/TA, Pirâmide ISA-95 e Sinais Industriais
- **Convergência TI/TA:** Diferença entre Tecnologia da Informação (foco em integridade, confidencialidade e dados corporativos) e Tecnologia da Automação (foco em disponibilidade contínua, determinismo temporal e segurança de pessoas/máquinas).
- **Norma ANSI/ISA-95 (IEC 62264):**
  - *Nível 0 (Processo Físico):* Máquinas, instrumentos, sensores e atuadores no chão de fábrica. Resposta contínua em tempo real (milissegundos/microssegundos).
  - *Nível 1 (Controle Básico):* Controladores Lógicos Programáveis (CLP), PACs e inversores. Execução determinística de malhas de controle e intertravamentos.
  - *Nível 2 (Supervisão):* Sistemas SCADA e Interface Homem-Máquina (IHM). Monitoramento visual de linhas, telas de processo e alarmes.
  - *Nível 3 (Gestão das Operações de Manufatura - MOM/MES):* Sequenciamento fino de produção, rastreabilidade de lotes de fabricação, controle de qualidade e cálculo do índice OEE.
  - *Nível 4 (Gestão Empresarial - ERP):* Planejamento de recursos empresariais (compras, vendas, finanças, faturamento e cadeia de suprimentos).
- **Taxonomia de Sinais Industriais:**
  - *Sinal Discreto (Digital):* Dois estados lógicos definidos (0V/24V DC, Aberto/Fechado, Verdadeiro/Falso).
  - *Sinal Contínuo (Analógico):* Grandezas físicas contínuas convertidas em padrões normalizados de tensão ($0\text{ a }10\text{V}$) ou corrente ($4\text{ a }20\text{mA}$). Vantagens do padrão $4\text{ a }20\text{mA}$ (imunidade a ruídos eletromagnéticos em longas distâncias e detecção de fio rompido quando $0\text{mA}$).
  - *Sinal PWM (Modulação por Largura de Pulso):* Onda digital quadrada com frequência fixa e variação da largura do pulso ativo ($t_{on}$). Conceito de *Duty Cycle* e tensão média equivalente. Aplicações em controle de potência de atuadores e emulação de saídas analógicas sem necessidade de conversor DAC.

### Semanas 02 e 03 — Dispositivos de Campo (Sensores, Atuadores e Controladores)
- **Sensores Discretos e Analógicos:**
  - *Indutivo:* Detecta exclusivamente materiais metálicos condutores através do amortecimento de um campo eletromagnético de alta frequência.
  - *Capacitivo:* Detecta materiais metálicos e não metálicos (plásticos, pós, vidros, líquidos condutores e isolantes) medindo a variação da constante dielétrica no campo eletrostático.
  - *Fotoelétrico:* Utiliza feixes de luz (infravermelha ou visível). Três configurações: Feixe Oposto (Barreira), Retrorreflexivo (com espelho prismático polarizado) e Difuso (reflexão direta no próprio objeto alvo).
  - *Ultrassônico:* Utiliza ondas mecânicas sonoras inaudíveis. Imune a variações de cor, transparência ou brilho superficial do objeto; sensível à turbulência do ar ou pós densos em suspensão.
  - *Eletromecânico (Fim de Curso):* Contato elétrico acionado por esforço físico direto; possui desgaste mecânico e repique de contatos (bouncing).
  - *RFID (Identificação por Radiofrequência):* Identificação e rastreabilidade automatizada de peças via ondas de rádio (tags passivas vs ativas).
- **Atuadores Industriais:**
  - *Pneumáticos:* Cilindros pneumáticos de simples e dupla ação; válvulas solenoide direcionais ($3/2$, $5/2$ vias). Força fluídica limpa, alta velocidade, parada não elástica.
  - *Motores Elétricos Trifásicos:* Motores assíncronos (gaiola de esquilo).
  - *Inversores de Frequência (VFD):* Controle de velocidade, torque e partida suave através da variação da frequência e tensão da rede elétrica ($V/f$ constante).
  - *Servomotores:* Motores de alto desempenho dinâmico que operam em malha fechada permanente com transdutor de posição (*encoder* ou *resolver*), garantindo posicionamento angular micrométrico e controle de torque.
- **Arquitetura de Controladores (CLP / PLC):**
  - Componentes de hardware: CPU, Memória de Programa e de Dados, Módulos de Entrada/Saída (E/S) isolados galvanicamente (optacopladores), Barramento interno e Fonte de alimentação.
  - **O Ciclo de SCAN (Varredura do CLP):**
    1. *Leitura das Entradas:* A CPU lê os estados físicos nos cartões de entrada e atualiza a Memória Imagem das Entradas (PII).
    2. *Execução da Lógica de Controle:* A CPU executa o programa do usuário linha a linha, atualizando a Memória Imagem das Saídas (PIO).
    3. *Atualização das Saídas:* A CPU transfere os estados calculados para os circuitos físicos dos atuadores.
    - *Determinismo:* Capacidade do sistema em garantir que o ciclo de varredura ocorra dentro de um limite temporal rigoroso e previsível, diferenciando um CLP de um computador de uso geral (PC comum).

### Semana 04 — Protocolos de Comunicação Industrial e Arquitetura MQTT
- **Comunicação no Chão de Fábrica vs TI:**
  - Redes de controle local (Fieldbuses e Ethernet Industrial: Modbus, Profinet, EtherNet/IP) vs Protocolos IIoT orientados à nuvem.
- **Protocolo MQTT (Message Queuing Telemetry Transport - ISO/IEC 20922):**
  - Modelo de arquitetura: **Publish/Subscribe** centralizado em um intermediário (*Broker*).
  - Vantagens do Desacoplamento: Desacoplamento espacial (publicador e assinante não conhecem o IP um do outro), temporal (não precisam estar conectados ao mesmo tempo caso haja retenção) e de sincronização (envio assíncrono que não bloqueia o transmissor).
  - Estrutura de Tópicos Hierárquicos: Uso de barras separadoras (`planta/linha1/sensor/temperatura`).
  - Caracteres Curinga (*Wildcards*):
    - Sinal `+` (Single-Level Wildcard): substitui exatamente um nível na árvore do tópico.
    - Sinal `#` (Multi-Level Wildcard): substitui todos os subníveis a partir daquela posição (deve ser posicionado no final).
  - Níveis de Qualidade de Serviço (**QoS**):
    - *QoS 0 (At most once):* Entrega no máximo uma vez, sem confirmação (melhor esforço). Menor tráfego de rede, risco de perda de pacotes.
    - *QoS 1 (At least once):* Entrega pelo menos uma vez, garantida por confirmação de recebimento (`PUBACK`). Pode gerar mensagens duplicadas se a confirmação for perdida.
    - *QoS 2 (Exactly once):* Entrega exatamente uma vez, garantida por um handshake de quatro etapas (`PUBLISH`, `PUBREC`, `PUBREL`, `PUBCOMP`). Elimina duplicações; maior consumo de rede.
  - Recursos Avançados:
    - *Retain Flag (Mensagem Retida):* O Broker armazena a última mensagem publicada no tópico e a entrega imediatamente a qualquer novo assinante.
    - *LWT (Last Will and Testament):* Mensagem pré-registrada no Broker que é publicada automaticamente caso o cliente perca a conexão de forma inesperada (queda de link/energia).
  - Cargas Úteis (*Payloads*): Uso do formato padronizado JSON para interoperabilidade entre chão de fábrica e sistemas de nuvem/TI.

### Semanas 05, 06 e 07 — Orquestração de Dados IIoT e Arquitetura Edge
- **Conceitos de Flow-Based Programming (FBP) e Orquestração:**
  - Tratamento de mensagens como fluxos contínuos de eventos assíncronos.
  - Roteamento condicional de dados industriais por tópicos, limites de tolerância e filtragem de ruído.
  - Papel do *Edge Computing* (Computação de Borda): ingestão local de dados, redução de latência, pré-processamento de leituras e alívio do tráfego para servidores corporativos e nuvem.

---

## 3. Glossário de Termos Essenciais

| Termo | Definição Teórica Concisa |
| :--- | :--- |
| **ISA-95** | Norma internacional de referência para integração dos sistemas fabris de chão de fábrica (TA) com a gestão corporativa (TI). |
| **CLP / PLC** | Computador de controle industrial determinístico e robustecido contra ruídos e vibrações, dedicado à execução de lógicas em tempo real. |
| **Ciclo de SCAN** | Rotina cíclica e determinística do CLP composta por: 1) Leitura das Entradas, 2) Execução da Lógica, e 3) Atualização das Saídas. |
| **Sensor Indutivo** | Sensor de proximidade sem contato baseado em campo eletromagnético, que detecta exclusivamente materiais metálicos condutores. |
| **Sensor Capacitivo**| Sensor de proximidade baseado na alteração da constante dielétrica de um campo eletrostático, capaz de detectar metais e não metais. |
| **Loop 4-20mA** | Padrão analógico de corrente onde 4mA representa o zero da escala e 20mA o fundo de escala; permite detectar fio rompido (0mA). |
| **PWM** | Técnica de controle onde a largura do pulso digital varia com período constante, regulando a tensão média e a potência entregue à carga. |
| **Inversor (VFD)** | Equipamento eletrônico de potência para controle dinâmico da velocidade e conjugado de motores elétricos por variação de frequência/tensão. |
| **Servomotor** | Atuador eletromecânico rotativo ou linear que opera com realimentação de posição em malha fechada (*closed loop*) para extrema precisão. |
| **MQTT Broker** | Servidor central na arquitetura Publish/Subscribe que recebe mensagens de publicadores e as distribui aos clientes assinantes. |
| **QoS (MQTT)** | Níveis contratuais de garantia de entrega de mensagens no MQTT: QoS 0 (máximo uma vez), QoS 1 (ao menos uma vez) e QoS 2 (exatamente uma vez). |
| **LWT (Last Will)** | Mensagem configurada no Broker para ser publicada em um tópico de alerta quando um dispositivo cliente cai inesperadamente. |

---

## 4. Simulado Completo da Prova P1 (12 Questões no Padrão Oficial)

### Questão 01 (Múltipla Escolha — Pirâmide ISA-95)
Na arquitetura da norma ANSI/ISA-95, a integração entre o chão de fábrica e a gestão empresarial é estratificada em 5 níveis funcionais. Um engenheiro precisa implantar um sistema responsável pela genealogia de lotes de fabricação, controle de ordens de produção em tempo de execução e cálculo automatizado do indicador de eficiência global (OEE).  
Em qual nível da pirâmide ISA-95 esse sistema atua?  
A) Nível 0 — Processo Físico.  
B) Nível 1 — Controle Básico e Intertravamento.  
C) Nível 2 — Supervisão e Aquisição de Dados (SCADA).  
D) Nível 3 — Gestão das Operações de Manufatura (MOM / MES).  

---

### Questão 02 (Múltipla Escolha — Sinais Industriais)
Em uma instalação industrial, optou-se pela utilização do padrão analógico de $4\text{ a }20\text{mA}$ em substituição ao padrão de tensão de $0\text{ a }10\text{V}$ para o monitoramento de pressão de uma caldeira situada a 120 metros do painel de controle.  
Assinale a alternativa que apresenta a justificativa técnica correta para essa escolha:  
A) Sinais em tensão não podem ser lidos por conversores Analógico-Digitais (ADC) de microcontroladores modernos.  
B) O loop de corrente de $4\text{ a }20\text{mA}$ é imune a quedas de tensão ao longo do comprimento da fiação e permite a detecção imediata de rompimento físico do cabo (quando a corrente cai a $0\text{mA}$).  
C) O sinal de tensão $0\text{ a }10\text{V}$ consome potência excessiva da fonte, inviabilizando o uso de relés auxiliares.  
D) Sinais em corrente dispensam isolamento galvânico entre os circuitos de campo e a CPU do CLP.  

---

### Questão 03 (Múltipla Escolha — Seleção de Sensores)
Deseja-se detectar a passagem de garrafas plásticas transparentes cheias de água mineral em uma esteira transportadora de alta velocidade, sem contato mecânico. O ambiente apresenta variação de iluminação ambiente e eventual respingo de água limpa.  
Qual dos seguintes sensores é o mais indicado tecnicamente para essa aplicação?  
A) Sensor Indutivo blindado.  
B) Sensor Ultrassônico ou Sensor Fotoelétrico Retrorreflexivo com filtro polarizador para materiais transparentes.  
C) Chave fim de curso eletromecânica com haste flexível.  
D) Sensor Magnético tipo Reed Switch.  

---

### Questão 04 (Múltipla Escolha — Ciclo de SCAN do CLP)
Diferente de um computador corporativo com sistema operacional multitarefa convencional, o Controlador Lógico Programável (CLP) possui comportamento determinístico baseado em um ciclo de varredura (*SCAN cycle*).  
Qual é a ordem cronológica e obrigatória das etapas que compõem o ciclo de SCAN do CLP?  
A) Atualização das saídas físicas $\rightarrow$ Execução do programa $\rightarrow$ Leitura das entradas físicas.  
B) Leitura das entradas físicas $\rightarrow$ Execução da lógica do programa $\rightarrow$ Atualização das saídas físicas.  
C) Execução da lógica do programa $\rightarrow$ Interrupção de hardware $\rightarrow$ Reset dos registradores de memória.  
D) Envio de mensagens MQTT $\rightarrow$ Amostragem analógica $\rightarrow$ Disparo de alarmes no SCADA.  

---

### Questão 05 (Múltipla Escolha — Arquitetura do Protocolo MQTT)
O protocolo MQTT (Message Queuing Telemetry Transport) foi amplamente adotado na Internet das Coisas Industrial (IIoT). Sobre as características arquiteturais do MQTT, assinale a afirmação correta:  
A) O modelo é baseado na arquitetura Cliente/Servidor síncrona com requisição e resposta direta entre os dispositivos finais.  
B) O Broker atua exclusivamente como roteador estático e exige que os publicadores conheçam previamente o endereço IP de todos os assinantes.  
C) O padrão baseia-se em Publish/Subscribe mediado por um Broker, garantindo o desacoplamento espacial, temporal e de sincronização entre os dispositivos.  
D) As mensagens trafegam obrigatoriamente criptografadas no formato XML e exigem confirmação mútua em três vias em qualquer nível de QoS.  

---

### Questão 06 (Múltipla Escolha — Tópicos e Wildcards no MQTT)
Um sistema de supervisão em nuvem precisa monitorar todas as leituras de temperatura de todas as máquinas pertencentes ao setor fabril `setor_usinagem`. A estrutura dos tópicos de telemetria é definida por:  
`fabrica/setor_usinagem/<nome_da_maquina>/sensores/temperatura`  
Qual tópico de assinatura com wildcard deve ser configurado no sistema para receber essas informações sem incluir outros sensores (como pressão ou vibração)?  
A) `fabrica/setor_usinagem/#`  
B) `fabrica/setor_usinagem/+/sensores/temperatura`  
C) `fabrica/setor_usinagem/+/sensores/+`  
D) `fabrica/setor_usinagem/sensores/temperatura/#`  

---

### Questão 07 (Múltipla Escolha — Qualidade de Serviço MQTT)
Em um projeto de monitoramento de vibração de mancais industriais críticos, uma mensagem com alerta de parada de emergência não pode, sob nenhuma hipótese, ser perdida na rede, tampouco pode ser entregue ou processada em duplicidade, pois dispararia contagens incorretas de interrupções.  
Qual nível de Qualidade de Serviço (QoS) do MQTT deve ser configurado para atender rigorosamente a esse requisito?  
A) QoS 0 (At most once).  
B) QoS 1 (At least once).  
C) QoS 2 (Exactly once).  
D) QoS 3 (Transactional commit).  

---

### Questão 08 (Múltipla Escolha — Recursos Especiais do MQTT)
Um sensor de esteira baseado em microcontrolador publica seu estado de conexão via MQTT. A equipe de automação configurou o recurso de *Last Will and Testament* (LWT) e uma mensagem com o parâmetro *Retain* ativado.  
A respeito desses recursos, analise as afirmações:  
I. O *Retain* faz com que o Broker guarde a última mensagem publicada em um tópico e a envie imediatamente a qualquer novo cliente que assinar aquele tópico.  
II. O *LWT* é emitido pelo próprio dispositivo quando ele envia uma mensagem informando que vai reiniciar de forma programada pelo operador.  
III. O *LWT* é uma mensagem pré-armazenada no Broker e publicada por ele em favor do cliente apenas se o Broker detectar a queda inesperada da conexão do dispositivo.  
Está correto o que se afirma em:  
A) Apenas I.  
B) Apenas I e II.  
C) Apenas I e III.  
D) I, II e III.  

---

### Questão 09 (Correlação de Colunas — Princípios de Detecção de Sensores)
Relacione os sensores industriais listados na **Coluna A** ao seu respectivo princípio físico de detecção na **Coluna B**:

| Coluna A (Sensores) | Coluna B (Princípio de Operação) |
| :--- | :--- |
| ( 1 ) Sensor Indutivo | ( &nbsp; ) Emissão de pulsos acústicos mecânicos inaudíveis com medição do tempo de eco (Time-of-Flight). |
| ( 2 ) Sensor Capacitivo | ( &nbsp; ) Geração de campo eletromagnético de alta frequência; atenuado por perdas por correntes parasitas (*Foucault*) em materiais condutores. |
| ( 3 ) Sensor Ultrassônico | ( &nbsp; ) Emissão e recepção de feixe de luz que pode ser interrompido ou refletido pela peça. |
| ( 4 ) Sensor Fotoelétrico | ( &nbsp; ) Modificação da capacitância dielétrica de um campo eletrostático na face sensora, detectando metais e não metais. |

Assinale a alternativa que apresenta a sequência numérica correta de preenchimento (de cima para baixo):  
A) 3 - 1 - 4 - 2  
B) 2 - 1 - 4 - 3  
C) 3 - 4 - 1 - 2  
D) 1 - 3 - 2 - 4  

---

### Questão 10 (Correlação de Colunas — Atuadores e Dispositivos de Acionamento)
Relacione os componentes de acionamento da **Coluna A** à sua função técnica primordial na **Coluna B**:

| Coluna A (Dispositivo) | Coluna B (Aplicação / Função Técnica) |
| :--- | :--- |
| ( 1 ) Servomotor | ( &nbsp; ) Equipamento eletrônico de potência para controle suave de velocidade e conjugado de motores de indução trifásicos por variação de frequência. |
| ( 2 ) Cilindro Pneumático | ( &nbsp; ) Dispositivo eletromecânico que opera em malha fechada (*closed loop*) com encoder para controle milimétrico de posição e velocidade. |
| ( 3 ) Válvula Solenoide Direcional | ( &nbsp; ) Atuador fluídico linear que converte a energia potencial do ar comprimido em movimento mecânico de translação. |
| ( 4 ) Inversor de Frequência (VFD) | ( &nbsp; ) Válvula acionada eletricamente que comuta ou direciona o fluxo de fluido para as câmaras de um atuador. |

Assinale a alternativa que apresenta a sequência numérica correta:  
A) 4 - 1 - 2 - 3  
B) 1 - 4 - 3 - 2  
C) 4 - 2 - 1 - 3  
D) 3 - 1 - 2 - 4  

---

### Questão 11 (Discursiva Teórica — Controle via Modulação por Largura de Pulso - PWM)
A modulação por largura de pulso (PWM) é amplamente utilizada tanto no controle de potência de atuadores elétricos quanto na emulação de sinais analógicos de saída em controladores industriais e microcontroladores.  
**Com base nos conceitos teóricos de sinais:**  
a) Explique o que é o parâmetro *Duty Cycle* (Ciclo de Trabalho) de uma onda PWM e como ele se relaciona matematicamente com o tempo ativo ($t_{on}$) e o período total ($T$).  
b) Por que a técnica de PWM é energeticamente muito mais eficiente para o controle de velocidade de um motor elétrico do que a utilização de resistores variáveis (reostatos) em série com a carga?  

---

### Questão 12 (Discursiva Teórica — Convergência TI/TA e Arquiteturas Publish/Subscribe)
A integração entre sistemas industriais legados e a nuvem impõe desafios severos de conectividade. Arquiteturas tradicionais de automação utilizavam comunicação síncrona baseada em varredura mestre-escravo contínua (*polling*), enquanto as arquiteturas modernas de IIoT adotam o padrão orientado a eventos Publish/Subscribe via MQTT.  
**Responda aos itens a seguir:**  
a) Cite e explique dois problemas técnicos críticos causados pelo uso de comunicação por varredura contínua (*polling*) quando centenas de dispositivos de campo precisam enviar dados para um servidor central corporativo.  
b) Explique como a arquitetura do MQTT mitiga esses problemas e defina de que maneira o desacoplamento temporal e o desacoplamento espacial beneficiam a escalabilidade da planta industrial.  

---

## 5. Gabarito Comentado e Padrão de Resposta

- **Questão 01 — Alternativa D.**  
  *Comentário:* O Nível 3 da norma ISA-95 (MOM/MES) é especificamente encarregado da gestão da produção, incluindo ordens de fabricação, rastreabilidade de lotes e cálculo do OEE. O Nível 2 restringe-se à supervisão visual em tempo real (SCADA), e o Nível 4 cuida do planejamento corporativo de longo prazo (ERP).
- **Questão 02 — Alternativa B.**  
  *Comentário:* O loop de corrente $4\text{ a }20\text{mA}$ mantém a mesma corrente em qualquer ponto da malha independentemente da resistência do cabo e da distância. Além disso, o zero vivo ($4\text{mA}$) permite distinguir a leitura de valor zero de um cabo partido ou desarmado ($0\text{mA}$).
- **Questão 03 — Alternativa B.**  
  *Comentário:* Materiais transparentes como plástico e água deixam passar feixes de luz ópticos comuns. O sensor ultrassônico não depende de propriedades ópticas, e os sensores fotoelétricos retrorreflexivos especiais utilizam polarização e limiares calibrados para objetos translúcidos. Sensores indutivos só detectam metais.
- **Questão 04 — Alternativa B.**  
  *Comentário:* O ciclo de SCAN do CLP segue rigorosamente as três etapas síncronas: 1. Amostragem e leitura física das entradas; 2. Processamento da lógica do programa do usuário; 3. Atualização das saídas físicas para os atuadores.
- **Questão 05 — Alternativa C.**  
  *Comentário:* O MQTT é fundamentado no modelo Pub/Sub com Broker central, desacoplando os nós em espaço (não se conhecem), tempo (podem comunicar-se assincronamente) e sincronização (não há bloqueio de envio).
- **Questão 06 — Alternativa B.**  
  *Comentário:* O wildcard `+` substitui um único nível hierárquico. Assim, `fabrica/setor_usinagem/+/sensores/temperatura` captura qualquer máquina naquele nível específico sem capturar variáveis além de `temperatura`. O `#` capturaria todos os níveis subsequentes indistintamente.
- **Questão 07 — Alternativa C.**  
  *Comentário:* O QoS 2 (Exactly once) realiza o handshake completo de quatro vias (`PUBREC`, `PUBREL`, `PUBCOMP`), garantindo que a mensagem seja entregue exatamente uma única vez, sem perdas e sem duplicações.
- **Questão 08 — Alternativa C.**  
  *Comentário:* A afirmação II é incorreta pois o LWT é disparado pelo *Broker* quando o cliente perde a conexão de forma anômala (sem enviar o pacote `DISCONNECT` regular). As afirmações I e III são verdadeiras.
- **Questão 09 — Alternativa A (3 - 1 - 4 - 2).**  
  *Comentário:* Ultrassônico (3) mede tempo de eco acústico; Indutivo (1) baseia-se em perdas eletromagnéticas em metais; Fotoelétrico (4) opera com feixe luminoso; Capacitivo (2) mede variação de constante dielétrica eletrostática.
- **Questão 10 — Alternativa A (4 - 1 - 2 - 3).**  
  *Comentário:* Inversor (4) varia frequência para motores CA; Servomotor (1) atua em malha fechada com encoder para alta precisão; Cilindro pneumático (2) converte ar comprimido em movimento linear; Válvula solenoide (3) comuta eletricamente o fluxo de fluido.
- **Questão 11 (Padrão de Resposta Esperado):**  
  *a)* O *Duty Cycle* ($D$) é a razão percentual entre o tempo em que o sinal permanece em nível lógico alto ($t_{on}$) e o período completo do ciclo ($T = t_{on} + t_{off}$), expresso por $D = (t_{on} / T) \times 100\%$.  
  *b)* O controle por PWM é muito mais eficiente energeticamente porque os semicondutores de comutação operam em corte (corrente zero, potência dissipada nula) ou saturação (tensão quase nula sobre o transistor, perda mínima por calor), enquanto os resistores em série dissipam energia continuamente por Efeito Joule ($P = R \cdot I^2$) para reduzir a tensão sobre o motor.
- **Questão 12 (Padrão de Resposta Esperado):**  
  *a)* A varredura contínua (*polling*) gera: 1) Congestionamento severo de banda de rede devido a requisições redundantes de valores inalterados; 2) Latência elevada e sobrecarga de CPU no servidor central, que precisa gerenciar conexões síncronas bloqueantes com centenas de escravos.  
  *b)* O MQTT mitiga esses problemas enviando dados apenas sob demanda/evento (*push* por publicação). O **desacoplamento espacial** significa que os publicadores de chão de fábrica não precisam saber endereços de destino; o **desacoplamento temporal** permite que dispositivos enviem ou recebam mensagens sem que ambos estejam simultaneamente conectados no instante da postagem (com auxílio do Broker), permitindo escalar centenas de nós sem colapso de infraestrutura.

---

## 6. Dicas Estratégicas para o Dia da Prova

1. **Domine os Níveis da ISA-95:** Tenha clareza sobre qual sistema pertence a qual camada (onde fica o CLP, onde fica o SCADA, onde fica o MES e onde atua o ERP).
2. **Entenda o Porquê de Cada Sensor:** Nunca decore apenas o nome; lembre-se do material-alvo (Ex: Indutivo só vê metal; capacitivo vê plástico e água; ultrassônico não liga para cor nem transparência).
3. **QoS do MQTT:** Lembre-se da regra mnemônica: QoS 0 = *Máximo uma vez* (perde pacote, não duplica); QoS 1 = *Pelo menos uma vez* (não perde pacote, pode duplicar); QoS 2 = *Exatamente uma vez* (nem perde, nem duplica).
4. **Respostas Discursivas:** Responda de forma direta e técnica, utilizando o vocabulário de engenharia apresentado neste guia.
