# Dispositivos e Sensoriamento em IIoT

### 1. Introdução
A Internet das Coisas Industrial (IIoT) refere-se ao uso de tecnologias conectadas em aplicações industriais, criando um ecossistema complexo conhecido como "sistema de sistemas" baseado em conectividade e Inteligência Artificial (IA). Os dispositivos IIoT constituem a interface direta entre o mundo físico e o digital. Do ponto de vista topológico, são frequentemente chamados de dispositivos *edge* (borda), atuando como pontos de acesso que interligam as redes de Automação/Tecnologia Operacional (TO) com as redes de Tecnologia da Informação (TI). Sua função principal é capturar dados, pré-processá-los, reduzir o volume de informações irrelevantes e disponibilizá-los de forma estruturada para os sistemas centrais.

Diferente da IoT convencional, voltada para o consumidor final, a IIoT foca primordialmente na automação, na comunicação máquina a máquina (M2M) e no aumento da eficiência em plantas industriais. 



### 2. Características dos Dispositivos IIoT
Os dispositivos industriais operam sob rigorosas exigências que os diferenciam substancialmente dos dispositivos IoT comerciais:
* **Robustez Extrema:** Precisam operar de forma confiável em temperaturas extremamente altas ou baixas, sendo resistentes a choques mecânicos, vibrações e contaminantes químicos.
* **Operação Contínua e Manutenção Minimizada:** Muitas vezes alocados em locais de difícil acesso (como grandes plantas químicas ou tubulações), esses dispositivos exigem baterias de longa duração ou sistemas autônomos de energia para funcionar por longos períodos sem intervenção.
* **Ciclo de Vida Extenso:** Enquanto a tecnologia de consumo é trocada em poucos anos, equipamentos industriais podem operar por décadas, exigindo que os dispositivos IIoT suportem atualizações de firmware e sejam compatíveis com maquinários legados.
* **Processamento na Borda (*Edge Computing*):** Muitos dispositivos modernos contam com microcontroladores (MCU) e capacidades analíticas avançadas para realizar processamento, diagnósticos locais e aplicação de algoritmos de Machine Learning diretamente no sensor, reduzindo a latência e a sobrecarga de rede.



### 3. Sensoriamento e Coleta de Dados
O sensoriamento é a principal fonte de captura do *big data* industrial. O conceito moderno de "Sensor Inteligente" (*Smart Sensor*) engloba a integração de uma unidade de captação de dados a uma pequena memória, conversores analógico-digitais (ADC) robustos para condicionamento do sinal (como filtragem e amplificação) e processadores capazes de executar algoritmos complexos. 

#### 3.1 Tipos de Sensores
* **Mecânicos (Vibração):** Fundamentais para a manutenção preditiva de equipamentos rotativos, medindo deslocamento, velocidade e aceleração. Podem utilizar tecnologia **piezoelétrica** (cristais cerâmicos que geram carga sob estresse, excelentes para faixas de alta frequência dinâmicas, de até >20 kHz) ou **capacitiva MEMS** (tamanho reduzido, recuperação rápida após choques e ótima estabilidade térmica). Sensores biaxiais e triaxiais frequentemente utilizam a norma ISO 10816-1 para definir limites ideais, satisfatórios, insatisfatórios e inaceitáveis de vibração.
* **Térmicos (Temperatura):** Incluem termopares clássicos e sensores MEMS avançados (que medem a temperatura absoluta e oferecem precisão de ±0.8 ºC), além de câmeras de visão infravermelha para analisar fricção excessiva e pontos quentes elétricos sem necessidade de contato com a máquina.
* **Acústicos e Ultrassônicos:** Utilizam arranjos de microfones ou sensores MEMS ultrassônicos (frequências de 20 kHz a 100 kHz) para identificar problemas difíceis de captar apenas com aceleração, como vazamentos de ar comprimido, descargas elétricas e desgaste inicial de rolamentos girando em baixíssimas rotações (abaixo de 600 RPM).
* **Pressão e Fluido:** Sensores de pressão piezoresistivos integrados a Pontes de Wheatstone ajudam a detectar cavitação em bombas e bloqueios em válvulas. Já os sensores de qualidade de fluido monitoram contaminação e a presença de água em óleos hidráulicos por capacitância ou condutividade térmica, prevenindo degradação química precoce.

#### 3.2 Qualidade de Medição
Aspectos indispensáveis na medição incluem: precisão, resolução, e **calibração contínua**. Sensores industriais de alto grau usam circuitos integrados que promovem recalibrações automatizadas removendo o erro de resposta ao longo de sua vida útil.



### 4. Atuadores e Controle
Atuadores convertem os sinais de dados em ações físicas ou reações imediatas dentro de sistemas automatizados. 
Historicamente, sistemas como os *Controladores Lógicos Programáveis (PLCs)* compõem a espinha dorsal de controle e atuação, interagindo em tempo real com processos físicos por meio de seus módulos de entrada/saída (I/O). Além disso:
* **Automação Híbrida Avançada:** Atuadores modernos combinam benefícios de múltiplas tecnologias. Atuadores **eletro-hidrostáticos** combinam controle descentralizado com a alta capacidade de força e eficiência energética, enquanto os **eletro-pneumáticos** oferecem resolução altíssima com controle preciso de vazão, agregados a excelentes diagnósticos internos.



### 5. Dispositivos de Identificação e Rastreamento
A rastreabilidade dentro da manufatura inteligente e das cadeias de suprimentos resilientes baseia-se fortemente em identificação.
* **RFID e Tecnologias de Conectividade:** Chips RFID integrados à leitura automatizada possibilitam o rastreamento logístico sem linha de visada, evitando furtos, fundindo cargas de transporte com eficiência, e oferecendo aos gerentes visualização da sua frota e ativos espalhados geograficamente em tempo real por meio da associação com GPS.



### 6. Integração com Sistemas IIoT
Para viabilizar a "Fábrica Inteligente", os dados captados devem ascender as camadas da Pirâmide da Automação (ou em arquiteturas descentralizadas modernas) de modo rápido e estruturado.
* **Protocolos de Comunicação Base:** Utilizam-se extensamente protocolos determinísticos como o **Modbus-RTU** e o **IO-Link** nos níveis de chão de fábrica para trazer legibilidade e dados padronizados. 
* **Integração de Alto Nível:** Na integração entre infraestruturas TO e TI, destacam-se duas forças dominantes:
    * **OPC UA:** Usa arquitetura Cliente/Servidor, fornece formatação padronizada e comunicação em tempo real orientada a serviços (SOA), sendo ideal para redes locais integradas (LAN), como em controle via sistemas SCADA.
    * **MQTT:** Baseia-se no modelo Publish-Subscribe, demandando larguras de banda mínimas. É a escolha primária para ambientes onde redes podem ser instáveis ou na transmissão massiva de telemetria diretamente para a computação em Nuvem.
* **Gateways e Conectividade Sem Fio:** Com o custo em declínio, conexões sem fio como o Wi-Fi 6, LoRaWAN (amplo alcance e baixo consumo) e 5G proporcionam flexibilidade na implantação de dispositivos autônomos sem necessidade de cabeamento oneroso.



### 7. Desafios e Próximos Passos
O aprofundamento das tecnologias IIoT encontra certas barreiras práticas:
* **Cibersegurança e Convergência IT/OT:** Equipamentos industriais conectam as "janelas" dos sistemas operacionais à rede corporativa. É preciso transpor as barreiras culturais de segurança (a TI foca em Confidencialidade, Integridade, Disponibilidade; a TO prioriza Disponibilidade, Integridade, Confidencialidade) com infraestruturas baseadas em *Defesa em Profundidade*, uso de zonas desmilitarizadas industriais (IDMZ) e firewalls robustos alinhados às normas IEC-62443.
* **Consumo Energético (*Energy Harvesting*):** Com sensores se espalhando vastamente, a dependência em baterias torna-se inviável. Sistemas modernos utilizam a captação de energia solar ou cinética do próprio ambiente vibracional da máquina para criar sensores perpetuamente operantes e sem manutenção.
* **Sobrecarga de Dados e Fadiga de Alarmes:** Muitos sensores geram dados demais que resultam em *dashboards* inativos ("o cemitério de dados"). O uso de ferramentas que processam a Inteligência Artificial localmente e acionam ordens de serviço apenas com anomalias preditivas contextualizadas evita os alarmes falsos, que descredibilizam o monitoramento.
