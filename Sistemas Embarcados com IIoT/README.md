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
| Aula | Teoria                                        | Prática/Atividade (Wokwi/Tinkercad/Arduino físico)                    | Entregáveis                 |
| ---- | --------------------------------------------- | --------------------------------------------------------------------- | --------------------------- |
| 1    | GPIO (tipos de conexão, I2C)                  | Simulação no **Wokwi** de leitura de dispositivos I2C                 | Pesquisa sobre interrupções |
| 2    | Interrupções                                  | Botão físico ou em **Wokwi** acionando LED via interrupção            | Resumo em duplas            |
| 3    | Mapeamento de periféricos                     | Identificação de motores/sensores da empilhadeira (protótipo físico)  | Levantamento de componentes |
| 4    | Microprocessador, oscilador e memória         | Planejamento da pinagem no ESP32 (**tabela em planilha**)             | Tabela de pinagem           |
| 5    | Interfaceamento eletrônico                    | Teste de motores no **ESP32 físico** ou **Wokwi**                     | Registro em diário de bordo |
| 6    | **Projeto Integrador**                      |                     |                     |
| 7    | Conversores AD/DA, PWM, PCM                   | Controle de velocidade de motor DC via PWM (**Wokwi**)                | Código inicial              |
| 8    | Temporizadores e contadores                   | LED piscante e controle de motor usando **Timers no ESP32**           | Exercício prático           |
| 9    | **Projeto Integrador**                       |                     |                     |
| 10   | IIoT: definição e aplicações                  | Comunicação Serial/WiFi no **ESP32 (Wokwi + broker online)**          | Relatório parcial           |
| 11   | Protocolos de comunicação IIoT (MQTT/HTTP)    | Publicar dados em **broker MQTT público**                             | Teste em laboratório        |
| 12   | Interfaces Bluetooth/WiFi                     | Integração **ESP32 ↔ Telegram bot**                                   | Protótipo inicial           |
| 13   | **Projeto Integrador**                      |                     |                     |
| 14   | Plataforma de desenvolvimento e simulação     | Controle de motor via Telegram (**ESP32 + bot**)                      | Demonstração em aula        |
| 15   | Serviços em nuvem (ThingSpeak/Firebase)       | Envio de dados de sensor para dashboard na nuvem                      | Código revisado             |
| 16   | **Projeto Integrador**                       |                     |                     |
| 17   | Segurança em IIoT (autenticação/criptografia) | Autenticação em conexão MQTT (**broker com usuário/senha**)           | Exercício aplicado          |
| 18   | Protocolos industriais (Modbus/CoAP)          | Simulação de rede Modbus/CoAP (**Tinkercad/Wokwi**)                   | Exercício prático           |
| 19   | **Projeto Integrador**                      |                     |                     |
| 20   | Encerramento                                  | Apresentação dos protótipos (**demonstração prática**)                | Avaliação final             |
