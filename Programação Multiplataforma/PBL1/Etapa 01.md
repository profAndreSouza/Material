# PBL1 — Etapa 1

# Documentação da Etapa de Compreensão do Problema e Definição de Requisitos

A Etapa 1 estabelece o entendimento formal do domínio do problema e define os fundamentos conceituais do sistema de monitoramento ambiental. Nesta fase são descritos o contexto operacional, os objetivos do sistema, as variáveis monitoradas, os requisitos funcionais e não funcionais, bem como o modelo conceitual dos dados que serão coletados e armazenados.

Esta etapa não envolve implementação técnica. Seu foco é estruturar o conhecimento necessário para orientar todas as decisões arquiteturais e tecnológicas das etapas seguintes.


## 1. Contexto do Problema

Instituições educacionais passaram a demandar maior controle sobre condições ambientais internas, especialmente após a intensificação das preocupações com qualidade do ar, conforto térmico e uso eficiente de espaços físicos.

O monitoramento tradicional desses ambientes costuma ser:

* manual e pontual
* sem registro histórico estruturado
* sem monitoramento contínuo
* sem análise automatizada
* sem suporte a decisões baseadas em dados

Esse modelo impede a identificação de padrões, dificulta ações preventivas e limita a gestão eficiente da infraestrutura.

O sistema proposto responde a essa necessidade por meio da coleta contínua de dados ambientais, processamento automatizado e disponibilização de informações em tempo real e históricas.


## 2. Contexto Operacional do Sistema

O sistema será aplicado a ambientes físicos internos de instituições educacionais, incluindo:

* salas de aula
* laboratórios
* bibliotecas
* auditórios

Cada ambiente monitorado possui sensores responsáveis por coletar medições ambientais periodicamente. Essas medições são transmitidas para uma infraestrutura de software distribuída responsável por processar, armazenar e disponibilizar os dados.

O sistema permite acompanhar as condições atuais do ambiente e analisar seu comportamento ao longo do tempo.


## 3. Variáveis Ambientais Monitoradas

O monitoramento considera múltiplas dimensões ambientais relevantes para conforto, segurança e uso eficiente do espaço.

As variáveis monitoradas são:

* temperatura do ambiente
* umidade relativa do ar
* presença de pessoas no ambiente
* intensidade luminosa
* qualidade do ar

Essas variáveis permitem avaliar condições ambientais em tempo real e também identificar tendências, padrões sazonais e situações anormais.


## 4. Origem dos Dados (Dispositivos IoT)

As medições são geradas por sensores conectados a dispositivos IoT. Durante o desenvolvimento do projeto, os dados serão simulados por meio de um ambiente de simulação de hardware embarcado.

Os sensores simulados representam dispositivos físicos reais e incluem:

* sensor de temperatura e umidade
* sensor de presença (movimento)
* sensor de luminosidade
* sensor de gases para avaliação da qualidade do ar

O dispositivo realiza leituras periódicas e produz um fluxo contínuo de dados ambientais.


## 5. Objetivos do Sistema

O sistema tem como finalidade principal permitir o monitoramento inteligente de ambientes educacionais por meio de dados coletados continuamente.

Entre seus objetivos estão:

* registrar medições ambientais de forma contínua
* disponibilizar visualização em tempo real
* manter histórico estruturado de medições
* permitir análise temporal das condições ambientais
* identificar automaticamente situações críticas
* apoiar decisões de gestão de infraestrutura


## 6. Requisitos Funcionais

O sistema é definido funcionalmente pelas seguintes capacidades:

* recepção de dados provenientes de sensores IoT
* registro temporal de cada medição
* armazenamento histórico das medições ambientais
* consulta de dados em tempo real
* visualização gráfica das medições
* identificação automática de valores fora de limites definidos
* geração de alertas baseados em condições ambientais
* suporte ao monitoramento de múltiplos ambientes


## 7. Requisitos Não Funcionais

O comportamento do sistema deve atender a características estruturais e operacionais específicas.

### Desempenho

Processamento contínuo de medições e atualização rápida da visualização em tempo real.

### Escalabilidade

Capacidade de lidar com aumento do número de sensores e crescimento do volume de dados históricos.

### Disponibilidade

Operação contínua do monitoramento, com tolerância a falhas de comunicação entre dispositivos e serviços.

### Modularidade

Arquitetura organizada em camadas independentes, permitindo evolução do sistema sem impacto global.

### Interoperabilidade

Comunicação padronizada entre dispositivos e serviços por meio de mensageria e APIs.


## 8. Limites do Sistema

O escopo do sistema inclui:

* recepção de dados ambientais
* processamento e armazenamento das medições
* disponibilização de visualização e consulta

O sistema não contempla:

* controle automático de equipamentos do ambiente
* gerenciamento predial completo
* manutenção física de sensores


## 9. Modelo Conceitual dos Dados

O sistema trabalha com dados ambientais organizados como séries temporais. Cada medição representa um valor observado em um instante específico no tempo.

Cada registro de medição contém:

* identificação do ambiente monitorado
* tipo de sensor
* valor medido
* unidade de medida
* instante da medição

Esse modelo permite análise temporal, comparação entre períodos e identificação de tendências.


## 10. Armazenamento de Dados

As medições ambientais serão armazenadas em um banco de dados orientado a séries temporais.

O sistema utiliza o InfluxDB como mecanismo de persistência de dados.

Essa escolha é adequada porque o domínio do problema envolve:

* dados indexados por tempo
* alto volume de medições contínuas
* necessidade de consultas por intervalo temporal
* agregações e análises temporais
* retenção histórica configurável

O armazenamento é estruturado como fluxo contínuo de medições organizadas por timestamp.


## 11. Casos de Uso Principais

O comportamento do sistema pode ser compreendido a partir de seus principais cenários de uso.

Monitoramento em tempo real
Permite observar o estado atual do ambiente monitorado.

Consulta histórica
Permite analisar medições registradas em períodos anteriores.

Detecção de condição anormal
Permite identificar automaticamente valores fora de limites esperados.

Geração de alerta
Permite sinalizar eventos ambientais críticos.


## 12. Riscos Técnicos Identificados

O domínio do sistema apresenta desafios técnicos que influenciam decisões arquiteturais.

* perda de conectividade entre sensores e sistema
* inconsistência ou falha em leituras de sensores
* crescimento contínuo do volume de dados
* necessidade de tratamento de dados inválidos
* latência na transmissão de eventos

Esses fatores reforçam a necessidade de uma arquitetura distribuída e orientada a eventos.


## 13. Direcionamento Arquitetural Resultante

A análise do problema conduz a um modelo arquitetural com as seguintes características:

* ingestão contínua de dados ambientais
* comunicação assíncrona por mensageria
* processamento desacoplado de dispositivos
* armazenamento especializado em séries temporais
* visualização em tempo real baseada em consultas

Essas características estruturam a arquitetura distribuída adotada nas etapas seguintes do projeto.


## 14. Síntese da Etapa

A Etapa 1 formaliza o entendimento do problema, delimita o escopo do sistema e define o modelo conceitual dos dados ambientais que serão coletados e analisados.

Com isso, estabelece-se a base necessária para:

* definição da arquitetura do sistema
* seleção das tecnologias
* implementação da comunicação entre dispositivos e serviços
* modelagem do armazenamento temporal
* desenvolvimento das interfaces de visualização

Toda a construção técnica subsequente deriva diretamente das definições estabelecidas nesta etapa.

