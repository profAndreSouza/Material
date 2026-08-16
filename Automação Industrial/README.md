# Automação Industrial

Este repositório contém o plano de ensino, ementa, cronograma semestral detalhado, referências bibliográficas e diretrizes das atividades práticas para a unidade curricular de **Automação Industrial**.

---

## Ementa da Unidade Curricular

**Carga Horária:** 80 aulas (66h40min relógio / 20 Semanas)

### Descrição
Ao final dessa unidade curricular o estudante será capaz de desenvolver sistemas de automação para coleta e processamento de dados em plantas industriais. Para tanto serão abordados os seguintes conteúdos: Dispositivos Industriais; Controladores Industriais; Integração TI/TA (Tecnologia da Informação / Tecnologia da Automação).

### Objetivo Geral
Desenvolver capacidades técnicas e socioemocionais relacionadas a sistemas de automação para coleta e processamento de dados em plantas industriais, integrando o chão de fábrica (OT) com os sistemas de TI corporativos.

### Capacidades Técnicas
- Analisar o funcionamento de sensores, atuadores e controladores de acordo com as aplicações industriais.
- Programar softwares de tecnologia de automação para integração de sistemas TI/TA.
- Coletar dados de controladores industriais para tomada de decisões operacionais e estratégicas.

### Capacidades Socioemocionais
- **Ética:** Apresentar comportamento ético na conduta profissional, vivenciando valores, respeitando princípios e praticando a inclusão.
- **Pensamento crítico e inovação:** Expressar-se de modo crítico e com base em evidências claras, ponderando fatos, ideias e visões técnicas.
- **Resolução de problemas complexos:** Reconhecer demandas e apresentar soluções proativas para cenários industriais reais.

### Conteúdo Programático (Conhecimentos)
1. **Dispositivos Industriais:**
   - Sensores Eletromecânicos, Indutivos, Capacitivos, Magnéticos, Ultrassônicos, Fotoelétricos e Leitores RFID.
   - Atuadores Pneumáticos, Hidráulicos, Motores, Inversores de Frequência, Servomotores e Servo Drivers.
   - Robôs industriais e células de manipulação.
2. **Controladores Industriais:**
   - Arquitetura de Hardware (CLP, PC Industrial).
   - Princípios de operação, ciclo de scan, endereçamento e tipos de dados.
   - Linguagens de programação com Texto Estruturado (ST).
   - Softwares de desenvolvimento e simulação.
3. **Integração com a Tecnologia da Informação (TI/TA):**
   - Comunicação entre CLP e sistemas de TI (Modbus TCP, OPC UA, MQTT).
   - Banco de dados industriais e persistência de eventos.
   - Coleta de dados de telemetria para Ciência de Dados e gestão.
   - Dashboards em tempo real e monitoramento SCADA/HMI.

---

## Referências Bibliográficas

### Básicas
1. **AGUIRRE, Luis Antonio.** *Fundamentos de instrumentação*. São Paulo: Pearson Education do Brasil, 2013. E-book (354 p.).
2. **FRANCHI, Claiton Moro; CAMARGO, Valter Luís Arlindo de.** *Controladores lógicos programáveis: sistemas discretos*. 2. ed. São Paulo: Érica, 2009.
3. **LIRA, Valdemir Martins; ANDRADE, Alexandre Acácio de; CAPOVILLA, Carlos Eduardo.** *Tecnologias para automação: circuitos pneumáticos - óleo-hidráulicos - controladores lógicos programáveis (CLP) e microcontrolador*. São Paulo: Blucher, 2024. E-book (21 p.).
4. **TANENBAUM, Andrew S.; FEAMSTER, Nick; WETHERALL, D.** *Redes de computadores*. 6. ed. São Paulo: Pearson; Porto Alegre: Bookman, 2021. E-book (593 p.).

### Complementares
1. **FIALHO, Arivelto Bustamante.** *Automação hidráulica: projetos, dimensionamento e análise de circuitos*. 6. ed. Rev. atual. São Paulo: Érica, 2011.
2. **GROOVER, M. P.** *Automação industrial e sistemas de manufatura*. 3. ed. São Paulo: Pearson, 2011. E-book (596 p.).
3. **MORAES, Cícero Couto de; CASTRUCCI, Plinio de Lauro.** *Engenharia de automação industrial*. 2. ed. rev. amp. São Paulo: LTC, 2007.
4. **PRUDENTE, Francesco.** *Automação industrial: PLC: programação e instalação*. Rio de Janeiro: LTC, c2010.
5. **SILVA, Edilson Alfredo da.** *Introdução às linguagens de programação para CLP*. São Paulo: Blucher, 2016. E-book (354 p.).

---

## Critérios de Avaliação e Composição de Nota

A nota final da disciplina será composta por:
- **Prova Teórico-Prática 1 (P1):** Peso 30% (Semanas 01 a 05)
- **Prova Teórico-Prática 2 (P2):** Peso 30% (Semanas 06 a 10)
- **Atividades Práticas de Laboratório / Entregas Semanais:** Peso 40%

---

## Cronograma Semestral e Calendário de Aulas

| Sem. | Tipo | Datas | Foco Teórico / Conteúdo | Atividade / Detalhes |
| :---: | :---: | :---: | :--- | :--- |
| **01** | Aula | **03/Ago a 07/Ago** | [Arquitetura TI/TA e Pirâmide ISA-95](aulas/semana_01.md) | Conceitos de integração OT/IT e modelo de eventos fabris. |
| **02** | Aula | **10/Ago a 14/Ago** | [Sensores Industriais Discretos: Eletromecânicos, Indutivos e Capacitivos](aulas/semana_02.md) | Princípios de sensoriamento de proximidade e chaveamento. |
| **03** | Aula | **17/Ago a 21/Ago** | [Sensores Avançados: Ultrassônicos, Fotoelétricos e Identificação RFID](aulas/semana_03.md) | Sensoriamento óptico, medição de distância e rastreabilidade RFID. |
| **04** | Exercício de Fixação | **22/Ago (Sáb)** | Atividade Prática / Exercício de Fixação I | Mapeamento e testes de sensores em bancada (Sábado Letivo). |
| **05** | Aula | **24/Ago a 28/Ago** | [Atuadores Industriais: Pneumática, Hidráulica e Inversores](aulas/semana_04.md) | Cilindros pneumáticos, motores trifásicos e inversores VFD. |
| **06** | Aula | **31/Ago a 04/Set** | [Robótica Industrial e Células Flexíveis de Manufatura](aulas/semana_05.md) | Cinemática robótica, garras manipuladoras e segurança (NR-12). |
| **07** | Semana de PII | **08/Set a 11/Set** | Orientação e Acompanhamento do Projeto Integrador (PII) | Alinhamento da infraestrutura de automação para o PII. |
| **08** | Aula | **14/Set a 18/Set** | [Controladores Industriais (CLP) e Arquitetura de PC Industrial](aulas/semana_07.md) | Hardware de CLP, módulos E/S e PCs industriais. |
| **09** | Exercício de Fixação | **19/Set (Sáb)** | Atividade Prática / Exercício de Fixação II | Simulação de lógica de controle discreto (Sábado Letivo). |
| **10** | Avaliação | **21/Set a 25/Set** | **PROVA 1 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 01 a 05. |
| **11** | Semana de PII | **28/Set a 02/Out** | Consolidação do Projeto Integrador (PII) | Integração de controladores e sensores no projeto. |
| **12** | Aula | **05/Out a 09/Out** | [Princípios de Operação do CLP, Ciclo de SCAN e Endereçamento](aulas/semana_08.md) | Fases do SCAN, memória de imagem e determinismo temporal. |
| **13** | Semana de Tecnologia | **14/Out a 16/Out** | Palestras e Workshops da Semana de Tecnologia | Atividades institucionais integradas da Semana Tec. |
| **14** | Aula | **19/Out a 23/Out** | [Programação em Texto Estruturado (ST)](aulas/semana_09.md) | Sintaxe ST (IEC 61131-3), estruturas condicionais e blocos funcionais. |
| **15** | Exercício de Fixação | **24/Out (Sáb)** | Atividade Prática / Exercício de Fixação III | Desenvolvimento de lógicas de controle em Texto Estruturado. |
| **16** | Aula | **26/Out a 30/Out** | [Protocolos de Comunicação Industrial (Modbus TCP, OPC UA, MQTT)](aulas/semana_10.md) | Redes industriais, arquitetura OPC UA e protocolo MQTT. |
| **17** | Semana de PII | **03/Nov a 06/Nov** | Orientação e Acompanhamento do Projeto Integrador (PII) | Ajustes na comunicação de dados do PII. |
| **18** | Exercício de Fixação | **07/Nov (Sáb)** | Atividade Prática / Exercício de Fixação IV | Conectividade MQTT e publicação de dados industriais. |
| **19** | Aula | **09/Nov a 13/Nov** | [Integração TI/TA: Ingestão de Telemetria e Dashboards SCADA](aulas/semana_11.md) | Gateways IoT e painéis SCADA em tempo real. |
| **20** | Aula | **16/Nov a 19/Nov** | Consolidação Técnica e Revisão Integrada | Revisão prática dos protocolos industriais e preparação para P2. |
| **21** | Avaliação | **23/Nov a 27/Nov** | **PROVA 2 INDIVIDUAL** | Avaliação individual cobrindo as Semanas 07 a 11 & Entrega do Projeto. |
| **22** | Semana de PII | **30/Nov a 04/Dez** | Entrega Geral do PII & Fechamento | Devolutiva dos projetos integradores e fechamento de notas. |
| **23** | Congresso UniSENAI-SP | **05/Dez (Sáb)** | Congresso UniSENAI-SP | Apresentação dos melhores trabalhos no Congresso UniSENAI-SP. |
| **24** | Recuperação | **07/Dez a 11/Dez** | Exame de Recuperação Síncrono | Revisão e realização da avaliação de recuperação. |
| **25** | Fechamento | **14/Dez a 18/Dez** | Conselho de Classe & Fechamento | Divulgação final das médias e encerramento do semestre. |
