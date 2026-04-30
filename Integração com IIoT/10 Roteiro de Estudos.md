### Roteiro de Estudos: Fundamentos de IIoT

#### 1. Fundamentos e Conceitos Básicos de IoT e IIoT
*   **Diferenças entre IoT e IIoT:** Entenda que a IoT foca no consumidor (ubiquidade, comodidade), enquanto a IIoT foca em ambientes produtivos de missão crítica, exigindo **alta precisão, extrema robustez, segurança cibernética e alta disponibilidade**.
*   **Pilares da Estrutura:** Estude a divisão entre Hardware (sensores e atuadores), Conectividade (redes) e Inteligência/Processamento (Cloud, Edge e On-device).
*   **Indústria 4.0:** Compreenda conceitos-chave como **Gêmeos Digitais (Digital Twins)**, que simulam processos reais, e a **Manutenção Preditiva**, que utiliza dados contínuos de sensores para prever falhas antes que ocorram.
*   **Convergência TI/TO:** Atente-se à diferença de prioridades de segurança (TI foca em Confidencialidade e TO foca em Disponibilidade).

#### 2. Hardware, Dispositivos e Sensores
*   **Robustez e Operação:** Dispositivos IIoT ("edge devices") precisam suportar condições hostis (vibrações, temperaturas extremas) e operar continuamente com pouca manutenção, muitas vezes utilizando *Energy Harvesting* (coleta de energia do ambiente).
*   **Tipos de Sensores:** Revise os sensores mecânicos/vibração (MEMS e piezoelétricos), térmicos, acústicos (identificam vazamentos) e de pressão/fluido. 
*   **Arquitetura Física:** Gateways industriais atuam como conversores de protocolos e executores de *Edge Computing*, ligando o chão de fábrica (legado) à nuvem.
*   **Segurança em Hardware:** É essencial entender o conceito de **Raiz de Confiança (Root of Trust)**. O uso de senhas padrão ou gravadas diretamente no código (*hard-coded*) tornou-se inaceitável na indústria.

#### 3. Computação de Borda (Edge Computing)
*   **Problemas da Nuvem Centralizada:** Entenda por que não enviar tudo para a nuvem: alta latência, consumo de banda excessivo, altos custos e dependência total de conectividade.
*   **O Papel do Edge Computing:** Processar dados onde nascem. Isso permite redução drástica da latência (ações em milissegundos), filtragem de ruídos, operação autônoma (resiliência) e maior privacidade.
*   **Fog Computing e Cloud:** A nuvem (Cloud) continua vital para processamento estratégico de longo prazo, armazenamento histórico de *Big Data* e treinamento de IA pesada. A borda (*Edge*) realiza as ações táticas instantâneas baseadas nesses modelos treinados.

#### 4. Protocolos de Comunicação IIoT
*   **MQTT:** Protocolo extremamente leve e desacoplado baseado no modelo *publish/subscribe*. Usa um *broker* central e é ideal para envio de telemetria de sensores em redes limitadas.
*   **XMPP:** Orientado a mensagens em XML, ideal quando é vital saber a **identidade, presença (online/offline) e estado** do dispositivo, permitindo comandos diretos.
*   **DDS:** Arquitetura *peer-to-peer* (sem *broker* central). Foco no dado e no **tempo real crítico** com zero latência. Ideal para robótica e defesa.
*   **AMQP:** Orientado a filas com alta garantia de entrega e roteamento robusto via *exchanges*. Foco na integração corporativa.
*   **Integração Semântica (OPC UA):** Arquitetura cliente-servidor nativa da automação, focada em fornecer semântica rica de dados e excelente para redes locais e interação com CLP/SCADA.

#### 5. Conectividade e Simulação de Redes
*   **Redes LPWAN:** (LoRaWAN, SigFox, NB-IoT) Projetadas para longo alcance geográfico e baixíssimo consumo de bateria, porém com baixas taxas de transmissão e alta latência.
*   **Redes Cabeadas e TSN:** Ethernet industrial (PROFINET, EtherCAT) suportada pelo padrão TSN (*Time-Sensitive Networking*) é indispensável quando há exigência de determinismo absoluto em controle de malha fechada.
*   **5G na Indústria:** Destaca-se pelo URLLC (comunicação ultraconfiável e de baixa latência), possibilitando substituir cabos em robótica e AGVs.
*   **Retrofit:** Estratégia de modernizar máquinas antigas ("legadas") acoplando sensores externos (ex: vibração) e módulos de baixo custo.
*   **Simuladores de Rede:** Revise ferramentas como Cooja (focado em Contiki OS), NS-3 (focado em matemática e altíssima escala) e TOSSIM (TinyOS) para validar infraestruturas sem gastos físicos.

#### 6. Plataformas IIoT e Stack MING
*   **Arquiteturas e Orquestração:** Compreenda modelos de referência como o RAMI 4.0 e o papel do **Node-RED** como uma interface de programação *low-code* (baseada em fluxos) que captura, transforma e orquestra lógicas.
*   **Stack MING:** Decorar os componentes fundamentais para laboratórios IIoT abertos:
    *   **M (Mosquitto):** *Broker* MQTT que gerencia e recebe a entrada contínua de telemetria dos sensores.
    *   **I (InfluxDB):** Banco de dados especializado em séries temporais (dados atrelados ao tempo), crucial para armazenamento rápido e *Big Data* de máquinas.
    *   **N (Node-RED):** O motor de integração que liga o MQTT ao banco de dados.
    *   **G (Grafana):** A plataforma de painéis (dashboards) que consulta os dados do InfluxDB para apresentar métricas interativas e gerar predições/alertas para o operador.
