# Cronograma

**Aula 0: Apresentação do Curso**
*   Conteúdo da página 4: Boas-vindas, temas a serem abordados (Integração de Sistemas, Redes Industriais, Protocolos Industriais), objetivos de aprendizado.
**Aula 1: Introdução à Integração de Sistemas e Pirâmide da Automação**
*   **INTEGRAÇÃO DE SISTEMAS (Páginas 5-9, 33-34)**
    *   Introdução (Conectando-se, necessidade de integração TA e TI)
    *   Integração Horizontal
    *   Integração Vertical
    *   Pirâmide da Automação (Tradicional: Níveis Corporativo/Empresarial, Gerenciamento/Produção, Supervisão, Controle, Dispositivo/Campo)
    *   Nova Pirâmide da Automação (ISO/IEC 62264)
    *   Recapitulando esta seção
**Aula 2: Sistemas de Gerenciamento e Execução (ERP, MES)**
*   **INTEGRAÇÃO DE SISTEMAS (Páginas 10-15)**
    *   Planejamento dos Recursos da Empresa (ERP)
        *   Módulos: Custos, Compras, PCP (MRP I, MRP II), Faturamento, Financeiro, Módulos Verticais, Contabilidade
    *   Sistema de Execução da Manufatura (MES)
        *   Pilares: Produção, Qualidade, Gestão de Materiais, Manutenção
        *   Funções: Rastreabilidade, Gestão de recursos e processos, Análise de desempenho e qualidade, Gestão de logística, Atuação confiável e flexível.
    *   (Mencionar PLM – Product Lifecycle Management – da p.9 como complementar ao ERP)
**Aula 3: Sistemas de Supervisão e Controle (SCADA, Controladores)**
*   **INTEGRAÇÃO DE SISTEMAS (Páginas 16-25)**
    *   Controle Supervisório e Aquisição de Dados (SCADA)
        *   Estrutura, Apresentação gráfica, Gerenciador de alarmes, Registrador de tendência, Geração de relatórios
    *   Controlador Programável (CP, PC, PLC ou CLP)
        *   Estrutura, Interfaces (Entrada, Saída, Comunicação), CPU, Memória, Fonte, Terminal de programação
    *   PC Industrial
**Aula 4: Nível de Dispositivos e Conectividade Avançada (Sensores, Atuadores, IO-Link, IIoT)**
*   **INTEGRAÇÃO DE SISTEMAS (Páginas 25-32)**
    *   Sensores e Atuadores (Digitais, Analógicos, Indutivos, Capacitivos, Ópticos, Ultrassônicos, Térmicos, Mecânicos, Solenoides, Relés/Contatores)
    *   IO-Link (Componentes, Funcionamento, Vantagens - ADR)
    *   IIoT (Internet Industrial das Coisas) e a simplificação da pirâmide (Nuvem Local/Fog, Controle Distribuído)
**Aula 5: Redes Industriais - Parte I: Fundamentos e Modelo OSI/TCP-IP**
*   **REDES INDUSTRIAIS - PARTE I (Páginas 35-45)**
    *   Introdução (Sistemas de Controle Centralizado vs. SDCD)
    *   Redes Industriais (Evolução para CPs e SCADA)
    *   A Rede da Indústria 4.0 (Requisitos: Interconectividade, Escalabilidade, Interoperabilidade, Portabilidade)
    *   Modelo OSI (7 Camadas: Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace, Física)
    *   Protocolo TCP/IP (Comparação com OSI, 4 ou 5 camadas)
**Aula 6: Redes Industriais - Parte I (Continuação): Dispositivos de Rede**
*   **REDES INDUSTRIAIS - PARTE I (Páginas 46-57)**
    *   Dispositivos de Rede:
        *   Roteador (e Bridge/Ponte)
        *   Modem
        *   Firewall
        *   Switch (Layer 2, Layer 3, VLANs)
        *   Hub
        *   Access Point (Wi-Fi, faixas de operação, tipos de Wi-Fi)
    *   Recapitulando esta seção
**Aula 7: Redes Industriais - Parte II: Camada Física e Meios de Transmissão**
*   **REDES INDUSTRIAIS PARTE II (Páginas 58-78)**
    *   Introdução e Modelo IEC/ISA-SP50 (Física, Enlace, Aplicação)
    *   Camada Física:
        *   Parâmetros: Meio físico, Taxa de comunicação, Número de equipamentos, Máxima distância, Topologias (Barramento, Estrela, Anel, Árvore, Linha, Malha/Mesh), Alimentação, Redundância.
        *   Meio Físico: Par de Fios (Balanceado, Blindagens - U/UTP, F/UTP, etc.)
        *   Resistência e Impedância
        *   Categorias de Cabos (CAT1 a CAT8.x) e Padrões de Montagem (T568A, T568B, Crossover)
        *   Padrões de Comunicação Serial (RS-232, RS-422, RS-485, Conectores DB9/DB25, Conversores USB)
        *   Fibra Óptica (Monomodo, Multimodo, Fusão)
**Aula 8: Redes Industriais - Parte II (Continuação): Redes PON e Tecnologias Wireless**
*   **REDES INDUSTRIAIS PARTE II (Páginas 79-86)**
    *   Redes PON (Passive Optical Network)
        *   Componentes (Splitters, ONT/ONU, OLT)
        *   Funcionamento (Downstream, Upstream, Multiplexação TDM, WDM, FDM)
        *   Tipos de PON (EPON, GPON, 10G-EPON, XG-PON, NG-PON2)
    *   Tecnologias Wireless (NFC, RFID, IrDA, Bluetooth, Wi-Fi, ZigBee, Celular 2G/3G/4G/5G)
    *   Recapitulando esta seção
**Aula 9: Redes Industriais - Parte III: Camadas de Enlace e Aplicação (Fieldbus)**
*   **REDES INDUSTRIAIS PARTE III (Páginas 87-98)**
    *   Camada de Enlace:
        *   Frames
        *   Modelo de Comunicação: Origem/Destino (Mestre/Escravo, Multimestre, Passagem de Ficha/Token, Cliente/Servidor, Ponto a Ponto/P2P)
        *   Modelo de Comunicação: Produtor/Consumidor (Multicast, Broadcast)
        *   Método de Atualização de Dados (Polling, Cíclico, Mudança de Estado/COS com Heartbeat)
        *   Referência de Tempo (Tempo de Varredura)
        *   Endereçamento dos Dispositivos
    *   Camada de Aplicação (Foco em Fieldbus: FMS, FAS, CIP)
    *   Recapitulando esta seção
**Aula 10: Protocolos Industriais Ethernet**
*   **PROTOCOLOS INDUSTRIAIS (Páginas 99-111)**
    *   Comunicação M2M no meio Ethernet
    *   Modbus TCP
    *   EtherNet/IP
    *   EtherCAT
    *   Profinet (CBA, IO - RT, IRT)
    *   Comparando Protocolos (Conformidade com Ethernet vs. Profundidade de Aplicação)
**Aula 11: Protocolos de Interoperabilidade e Arquiteturas de Referência**
*   **PROTOCOLOS INDUSTRIAIS (Páginas 112-122)**
    *   OPC (OLE for Process Control)
        *   OLE e DCOM como base
        *   OPC Classic (DA, A&E, HDA)
        *   OPC UA (Unified Architecture) - Modelo unificado, multiplataforma, segurança.
    *   Modelo RAMI 4.0 (Reference Architectural Model for Industry 4.0)
        *   Eixos: Camadas (Ativo, Integração, Comunicação, Informação, Função, Negócio), Ciclo de Vida e Fluxo do Valor (Tipo, Instância), Níveis Hierárquicos (IEC 62264, IEC 61512)
    *   Recapitulando esta seção
**Aula Final: Encerramento e Próximos Passos**
*   Conteúdo da página 123.

**Anexos (Não são aulas, mas conteúdo do PDF):**
*   Referências (Páginas 124-130)
*   Créditos (Página 131)