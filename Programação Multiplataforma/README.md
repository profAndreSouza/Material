# Programação Multiplataforma

> Este material está em desenvolvimento e pode sofrer atualizações contínuas conforme o conteúdo é aprimorado.


## Competências Profissionais Desenvolvidas

* Aplicar linguagens de programação back-end, front-end e raciocínio lógico adequados para resolução de situações-problema e/ou desenvolvimento de projetos diversos.
* Utilizar linguagens de programação orientada a objetos e raciocínio lógico adequados para resolução de situações-problema e/ou desenvolvimento de projetos diversos.
* Identificar linguagens de programação back-end e front-end para diversos tipos de desenvolvimento (desktop, web ou mobile), compreendendo a escolha de cada uma delas para adequação em projetos de diversas áreas.
* Desenvolver objetos inteligentes com capacidade de interação entre diversas tecnologias, compondo o cenário de Internet das Coisas (IoT).


## Objetivos de Aprendizagem

* Implementar um software aplicando conhecimentos de engenharia de software, programação e gerenciamento de projetos.
* Utilizar desenvolvimento front-end e back-end integrando aplicações desktop, web e mobile em projetos que atendam aos requisitos de transparência das aplicações.
* Utilizar sensores IoT para captura de dados que serão tratados nas aplicações desenvolvidas.


## Ementa

Desenvolvimento de software multiplataforma implementando recursos em sistemas Mobile, Web e Desktop, empregando:

* Técnicas de Sistemas Distribuídos (Concorrência, Openness, Escalabilidade)
* Protocolos de mensageria para intercomunicação de sistemas
* Técnicas para construção e uso de brokers de recepção de dados
* Técnicas para armazenamento de dados em grande escala
* Técnicas de mineração de dados em tempo real (data streaming)
* Utilização de APIs
* Desenvolvimento Dirigido a Testes (TDD)
* Integração com dispositivos IoT
* Controle de versionamento


## Metodologia Proposta

* Aulas expositivas
* Aprendizagem baseada em projetos e problemas (PBL)
* Gamificação
* Coding Dojo


## Instrumentos de Avaliação

Avaliação Formativa
Exercícios práticos, análise e resolução de problemas acompanhados de rubrica de avaliação.

Avaliação Somativa
Provas, projetos, avaliação em pares, desafios de programação e trabalhos interdisciplinares.


## Forma de Avaliação

Avaliações conceituais – 4 pontos
- P1 – Avaliação teórica 1º semestre: 2 pontos
- P2 – Avaliação teórica 2º semestre: 2 pontos

Projetos (PBLs) – 6 pontos
- PBL1 – 2 pontos
- PBL2 – 2 pontos
- PBL3 – 2 pontos

Bonificações por participação efetiva
- Interfatec: + 0,5 ponto
- Semana de Tecnologia: + 0,5 ponto

Cálculo da Nota Final
- NF = P1 + P2 + PBL1 + PBL2 + PBL3 + Bonificações
- Se NF > 10 → NF = 10
- Se NF < 6 e REAVA ≥ 6 → NF = 6


## Bibliografia Básica

* DUCKETT, J. HTML e CSS: Projete e Construa Websites. Rio de Janeiro: Alta Books, 2016.
* SOUZA, N. Bootstrap 4: Conheça a biblioteca front-end mais utilizada no mundo. São Paulo: Casa do Código, 2018.
* SOUZA, N. Cordova Avançado e PhoneGap: Um guia detalhado do zero à publicação. São Paulo: Casa do Código, 2018.
* FURGERI, S. Programação Orientada a Objetos: Conceitos e técnicas. São Paulo: Erica, 2015.
* GAMMA, E. et al. Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos. Porto Alegre: Bookman, 2015.
* KENT, B. TDD - Desenvolvimento Guiado Por Testes. Porto Alegre: Bookman, 2010.


## Bibliografia Complementar

* BHARGAVA, A. Y. Entendendo Algoritmos: Um guia ilustrado para programadores e outros curiosos. São Paulo: Novatec, 2019.
* MARTIN, R. C. Código Limpo: Habilidades Práticas do Agile Software. Rio de Janeiro: Alta Books, 2012.
* SCHILDT, H. Java para Iniciantes: Crie, Compile e Execute Programas Java Rapidamente. Porto Alegre: Bookman, 2015.
* SILVERMAN, R. E. Git: Guia Prático. São Paulo: Novatec, 2019.
* FREEMAN, E.; FREEMAN, E. Use a Cabeça! Padrões de Projetos. Rio de Janeiro: Alta Books, 2007.
* SANDERS, W. Aprendendo Padrões de Projeto em PHP. São Paulo: Novatec, 2013.
* SMITH, B. JSON Básico: Conheça o formato de dados preferido da web. São Paulo: Novatec, 2020.


# PBLs (Planos de Aula Baseados em Problemas)

## PBL1 — Sistema Inteligente de Monitoramento de Ambientes Educacionais

### Contexto do Problema

Após a pandemia e com o aumento da preocupação com qualidade do ar, conforto térmico e uso eficiente de espaços, instituições educacionais precisam monitorar salas em tempo real. Atualmente esse controle é manual, impreciso e não gera dados históricos para tomada de decisão.

A instituição contratou a equipe de desenvolvimento para criar um sistema que:

* Monitore condições ambientais em tempo real
* Armazene dados históricos
* Gere alertas automáticos
* Utilize sensores IoT reais ou simulados
* Disponibilize visualização em dashboard web
* Permita trabalho colaborativo com versionamento

### Tecnologias

* IoT: Wokwi
* Broker MQTT: HiveMQ
* Backend API: Node.js
* Dashboard Web: React
* Banco de dados: InfluxDB ou MongoDB
* Arquitetura publish/subscribe
* Banco de dados orientado a séries temporais ou NoSQL
* Versionamento colaborativo

### Arquitetura do Sistema

Camadas:

1. Device / Edge
   Dispositivos IoT publicam dados ambientais

2. Messaging / Event
   Broker MQTT recebe e distribui eventos

3. Application / Service
   API Gateway e serviços de processamento

4. Data
   Banco NoSQL ou séries temporais

5. Presentation
   Dashboard web em tempo real

### Competências Técnicas Trabalhadas

* Integração IoT
* Sistemas distribuídos orientados a eventos
* Mensageria publish/subscribe
* Ingestão e armazenamento de dados em tempo real
* APIs REST
* Visualização de dados em tempo real
* Versionamento colaborativo

Observação: este PBL não contempla TDD nem desenvolvimento mobile.


## PBL2 — Sistema de Gestão Inteligente de Consumo de Energia

Processamento contínuo de dados de consumo energético para identificar padrões, detectar anomalias e gerar alertas automáticos.

Envolve:

* Ingestão de dados em streaming
* Armazenamento histórico
* Processamento de eventos
* Análise em tempo real
* Arquitetura distribuída


## PBL3 — Plataforma de Rastreamento e Monitoramento de Ativos em Tempo Real

Desenvolvimento de uma plataforma distribuída para rastrear ativos continuamente, registrar eventos de movimentação e disponibilizar visualização e controle em tempo real por meio de APIs, mensageria e integração entre múltiplos serviços.


# Relação dos PBLs com a Ementa

| Elementos da Ementa            | PBL1                                                 | PBL2                                           | PBL3                                          |
| ------------------------------ | ---------------------------------------------------- | ---------------------------------------------- | --------------------------------------------- |
| Sistemas distribuídos          | Arquitetura orientada a eventos com IoT e mensageria | Processamento distribuído de dados energéticos | Integração de múltiplos serviços distribuídos |
| Protocolos de mensageria       | MQTT publish/subscribe                               | Streaming contínuo de dados                    | Comunicação entre serviços e dispositivos     |
| Brokers de dados               | Broker MQTT para ingestão IoT                        | Pipeline de ingestão em tempo real             | Intermediação de eventos de rastreamento      |
| Armazenamento em grande escala | Banco NoSQL / séries temporais ambientais            | Armazenamento histórico de consumo             | Persistência de eventos e localização         |
| Data streaming                 | Monitoramento ambiental em tempo real                | Processamento contínuo e análise de eventos    | Atualização contínua de status                |
| APIs                           | Backend para ingestão e consulta de dados            | Integração com sistemas de análise e alerta    | APIs de rastreamento e controle               |
| TDD                            | Não aplicado                                         | Aplicado em serviços analíticos                | Aplicado em serviços distribuídos             |
| Integração com IoT             | Sensores ambientais                                  | Medidores inteligentes                         | Dispositivos de rastreamento                  |
| Versionamento                  | Controle colaborativo do sistema                     | Controle de pipelines e modelos                | Controle da plataforma distribuída            |


## Progressão Pedagógica

PBL1 — Fundamentos de IoT, mensageria e ingestão de dados em tempo real
PBL2 — Processamento contínuo e análise de eventos
PBL3 — Integração de serviços distribuídos e interoperabilidade de sistemas
