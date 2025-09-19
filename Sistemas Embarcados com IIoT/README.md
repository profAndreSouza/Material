# Sistemas Microprocessados e IIoT

Este repositório reúne conteúdos e materiais didáticos relacionados à disciplina de Sistemas Microprocessados e IIoT.

> ⚠️ **Atenção**: Este material está em desenvolvimento e sofre atualizações constantes à medida que o conteúdo é construído e aprimorado.

## Competências Profissionais Desenvolvidas

* Compreender a arquitetura e os elementos fundamentais de sistemas microprocessados.
* Desenvolver aplicações embarcadas utilizando microcontroladores e plataformas de prototipagem.
* Projetar interfaces de comunicação entre sistemas microprocessados e periféricos.
* Aplicar conceitos de IIoT na integração de dispositivos embarcados com serviços em nuvem.
* Demonstrar postura ética, pensamento crítico e atitude inovadora na atuação profissional.


## Objetivos de Aprendizagem

* Identificar os principais componentes de um sistema microprocessado (CPU, memória, GPIO, temporizadores, interrupções).
* Implementar soluções práticas de interfaceamento e controle de periféricos.
* Programar e depurar aplicações em microcontroladores.
* Integrar dispositivos embarcados a serviços em nuvem e plataformas IIoT.
* Desenvolver projetos práticos que unam teoria e prática em aplicações reais.


## Ementa

### 1. Arquitetura de Sistemas Microprocessados

* Tipos
* Microprocessador
* Oscilador
* Memória
* GPIO

### 2. Registradores

### 3. Mapeamento de Periféricos Externos e Internos

### 4. Interfaceamento

* Transistorizada
* Optoacopladas
* Multiplexada
* Motor de passo
* Conversores AD/DA
* PWM e PCM

### 5. Temporizador e Contador

### 6. Interrupções

* Interna
* Externa

### 7. IIoT

* Definição
* Tipos
* Aplicações
* Protocolos de comunicação

### 8. Interfaces de Comunicação

* Bluetooth
* WiFi

### 9. Plataforma de Desenvolvimento e de Simulação

* Edição
* Compilação
* Depuração
* Gravação (Deployment)

### 10. Serviços em Nuvem

* Definição
* Tipos
* Segurança
* Configuração


## Metodologia Proposta

* Aulas expositivas dialogadas (teoria)
* Atividades práticas em laboratório (eletrônica e informática)
* Desenvolvimento de projeto prático em duplas
* Estudo de casos reais relacionados a IIoT
* Aprendizagem baseada em problemas (PBL)


## Instrumentos de Avaliação

**Avaliação Formativa:**

* Participação nas aulas e atividades em duplas
* Entregas parciais do projeto prático
* Exercícios e simulações

**Avaliação Somativa:**

* Prova teórica e prática
* Desenvolvimento e apresentação do projeto prático (empilhadeira com ESP32 e bot do Telegram)


## Bibliografia Básica

* MIYADAIRA, Alberto Noburu. *Microcontroladores PIC18: aprenda e programe em linguagem C*. 4. ed. São Paulo: Érica, 2013.
* OLIVEIRA, Cláudio; ZANETTI, Humberto Augusto Piovesana; NABARRO, Cristina Becker Matos. *Raspberry Pi descomplicado*. São Paulo: Érica/Saraiva, 2018.
* PEREIRA, Fábio. *Microcontrolador PIC18 detalhado: hardware e software*. São Paulo: Érica, 2010.

## Bibliografia Complementar

* MEDEIROS JUNIOR, José Sérgio; LUCHIARI, Mario Henrique. *Microcontrolador PIC18 com linguagem c: conceitos, exemplos e simulação*. São Paulo: SENAI-SP Editora, 2017.
* PEREIRA, Fábio. *Microcontroladores PIC: técnicas avançadas*. 1. ed. São Paulo: Érica, 2002.
* UPTON, Eben; HALFACREE, Gareth. *Raspberry Pi: guia do usuário*. 4. ed. São Paulo: Novatec, 2017.
* ZANCO, Wagner da Silva. *Microcontroladores PIC: técnicas de software e hardware para projetos de circuitos eletrônicos com base no PIC 16F877A*. São Paulo: Érica, 2006.
* PEREIRA, Fábio. *Microcontrolador PIC18 detalhado: hardware e software*. 1. ed. São Paulo: Érica, 2010.


## Cronograma 


| Aula | Tema Principal                                         | Prática/Atividade                                            | Entregável                   |
| ---- | ------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------- |
| 1    | GPIO e protocolos básicos (I2C, SPI, UART)             | Escaneamento de dispositivos I2C no ESP32                    | Exercícios de fixação        |
| 2    | Interrupções (internas e externas)                     | Botão com interrupção + acionamento de LED                   | Resumo em duplas             |
| 3    | Mapeamento de periféricos + ADC/DAC                    | Levantamento dos periféricos da empilhadeira 3D              | Tabela inicial de mapeamento |
| 4    | Interfaceamento eletrônico (LEDs, servo, botão)        | Semáforo inteligente com botão de pedestre (Wokwi)           | Registro em diário de bordo  |
| 5    | **Projeto Integrador**     | -            | -        |
| 6    | PWM e temporizadores                                   | Controle de motor DC com PWM                                 | Código inicial               |
| 7    | Comunicação Serial e UART                              | Envio de dados entre ESP32 e PC                              | Exercício prático            |
| 8    | Protocolos IIoT – MQTT (conceito e prática)            | Publicação/assinatura em broker público                      | Teste em laboratório         |
| 5    | **Projeto Integrador**     | -            | -        |
protótipo                | Relatório parcial            |
| 10   | Comunicação sem fio – Wi-Fi                            | ESP32 conectado ao Wi-Fi e envio de dados a um servidor      | Demonstração em aula         |
| 11   | Comunicação sem fio – Bluetooth                        | Troca de mensagens entre ESP32 e celular                     | Exercício prático            |
| 12   | Protocolos IIoT – HTTP e REST API                      | Enviar dados para API simples (GET/POST)                     | Código validado              |
| 13    | **Projeto Integrador**     | -            | -        |
Bluetooth                        | Relatório parcial            |
| 14   | Integração com serviços em nuvem (ThingSpeak/Firebase) | Registro de dados em dashboard na nuvem                      | Código revisado              |
| 15   | Segurança em IoT (autenticação e criptografia)         | Implementação de chave de autenticação no MQTT               | Exercício aplicado           |
| 16   | Protocolos industriais – Modbus/CoAP                   | Exemplo de comunicação Modbus TCP ou CoAP                    | Exercício prático            |
| 17    | **Projeto Integrador**     | -            | -        |
nuvem                         | Relatório parcial            |
| 18   | Integração com bots e dashboards (Telegram/Node-RED)   | ESP32 enviando dados para bot do Telegram ou painel Node-RED | Protótipo funcional          |
| 19   | Revisão geral + validação final do projeto             | Testes finais no protótipo físico                            | Projeto concluído            |
| 20   | **Encerramento**: Prova + Semana de Tecnologia         | Apresentação dos protótipos e fechamento do curso            | Avaliação final              |
