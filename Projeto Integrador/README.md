# Projeto Integrador - 1º semestre

O Projeto Integrador Interdisciplinar I constitui um eixo central do processo formativo, no qual os estudantes, organizados em grupos, desenvolvem soluções a partir de problemas reais previamente selecionados e validados na plataforma SAGA do SENAI. Nesta etapa, os projetos já definidos passam a ser aprofundados sob a perspectiva das diferentes disciplinas do semestre, promovendo a aplicação prática e integrada dos conhecimentos adquiridos.

Cada componente curricular contribui com critérios específicos de avaliação e desenvolvimento, alinhados às suas competências e habilidades, garantindo que o projeto evolua de forma consistente, interdisciplinar e orientada à resolução efetiva do problema proposto. Dessa forma, o Projeto Integrador fortalece a articulação entre teoria e prática, estimula o pensamento crítico, o trabalho colaborativo e a construção de soluções tecnológicas relevantes para contextos reais.


A seguir, serão apresentados os critérios de avaliação organizados por disciplina, os quais orientarão o desenvolvimento e a análise dos projetos ao longo do semestre

## Banco de Dados - Prof André

Na disciplina de Banco de Dados, os critérios de avaliação são organizados em diferentes contextos, de acordo com a abordagem tecnológica adotada pelo grupo no desenvolvimento do projeto. Considerando a natureza do problema e as decisões de arquitetura, os estudantes poderão utilizar banco de dados relacional, não relacional (NoSQL) ou uma solução híbrida que combine ambos. Dessa forma, cada contexto apresenta critérios específicos que visam avaliar não apenas a implementação técnica, mas também a coerência da escolha, a qualidade da modelagem e a adequação da solução ao cenário proposto.

### Cenário Relacional

O projeto deve utilizar um banco de dados relacional para estruturar informações com forte consistência e integridade. Espera-se que o estudante desenvolva desde a modelagem conceitual até a implementação física, aplicando normalização e boas práticas de SQL.

| Critério                        | Descrição                                                                                                                            | Peso |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---- |
| *1. Levantamento de Requisitos* | Identificação clara e coerente das informações necessárias, incluindo entidades, atributos e relacionamentos relevantes ao problema. | 10%  |
| *2. Modelagem Conceitual (DER)* | Construção de um DER completo, consistente e sem redundâncias, representando corretamente o domínio do problema.                     | 15%  |
| *3. Chaves e Integridade*       | Definição adequada de chaves primárias e estrangeiras, garantindo unicidade e integridade referencial.                               | 10%  |
| *4. Cardinalidade e Restrições* | Representação correta das relações (1:1, 1:N, N:N) e aplicação coerente de restrições.                                               | 10%  |
| *5. Modelo Lógico (MLD)*        | Conversão correta do DER para o modelo lógico relacional, com tabelas bem estruturadas.                                              | 10%  |
| *6. Normalização*               | Aplicação da normalização (até 3FN), com redução de redundâncias e justificativa das decisões.                                       | 15%  |
| *7. Implementação Física (DDL)* | Criação adequada do banco com tipos de dados, constraints e organização consistente.                                                 | 10%  |
| *8. Manipulação de Dados (SQL)* | Uso correto de comandos DML e DQL (CRUD), com consultas funcionais e coerentes.                                                      | 10%  |
| *9. Recursos Avançados*         | Uso de views, procedures ou functions que agreguem valor ao sistema.                                                                 | 5%   |
| *10. Documentação Técnica*      | Documentação clara com DER, modelo lógico, scripts e dicionário de dados.                                                            | 5%   |


**Total: 100 pontos**



### Cenário Não Relacional (NoSQL)

O projeto deve utilizar um banco de dados não relacional, priorizando flexibilidade, escalabilidade ou armazenamento de dados semi-estruturados. O estudante deve justificar tecnicamente essa escolha e demonstrar domínio das operações básicas.

| Critério                            | Descrição                                                                                  | Peso |
| ----------------------------------- | ------------------------------------------------------------------------------------------ | ---- |
| *1. Justificativa do Uso de NoSQL*  | Explicação clara e consistente da escolha do modelo não relacional em relação ao problema. | 10%  |
| *2. Escolha do Tipo de Banco*       | Adequação do tipo de NoSQL (documento, chave-valor, etc.) ao contexto do sistema.          | 10%  |
| *3. Modelagem dos Dados*            | Organização coerente das coleções/documentos, facilitando entendimento e manutenção.       | 15%  |
| *4. Estrutura e Representação*      | Estrutura dos dados consistente, sem redundâncias excessivas ou inconsistências.           | 10%  |
| *5. Operações CRUD*                 | Implementação correta das operações de criação, leitura, atualização e exclusão.           | 10%  |
| *6. Eficiência de Acesso*           | Consultas e estrutura pensadas para desempenho e uso adequado do modelo NoSQL.             | 10%  |
| *7. Escalabilidade e Flexibilidade* | Demonstração de como o modelo suporta crescimento e mudanças.                              | 10%  |
| *8. Integração com Aplicação*       | Uso efetivo do banco em conjunto com aplicação (backend, API, etc.).                       | 10%  |
| *9. Análise Comparativa*            | Comparação crítica entre NoSQL e modelo relacional no contexto do projeto.                 | 10%  |
| *10. Documentação Técnica*          | Documentação clara da estrutura, exemplos de dados e decisões de modelagem.                | 5%   |


**Total: 100 pontos**


### Cenário Integrado (Relacional + Não Relacional)

O projeto deve combinar banco de dados relacional e não relacional, utilizando cada abordagem de forma complementar. Espera-se que o estudante saiba decidir qual tipo de banco usar em cada parte do sistema.

| Critério                             | Descrição                                                                                         | Peso |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- | ---- |
| *1. Definição de Arquitetura*        | Clareza na divisão de responsabilidades entre banco relacional e não relacional.                  | 10%  |
| *2. Modelagem Relacional (DER)*      | DER completo e consistente para a parte relacional do sistema.                                    | 10%  |
| *3. Normalização Relacional*         | Aplicação adequada da normalização (mínimo 3FN) com justificativas.                               | 10%  |
| *4. Modelagem NoSQL*                 | Estrutura não relacional organizada e adequada ao tipo de dado.                                   | 10%  |
| *5. Coerência entre Modelos*         | Consistência entre os dados armazenados nos dois bancos, sem conflitos ou duplicidades indevidas. | 10%  |
| *6. Integração entre Bancos*         | Demonstração clara de como os dados são utilizados entre os dois modelos (fluxo ou comunicação).  | 15%  |
| *7. Operações CRUD*                  | Implementação funcional de operações nos dois bancos dentro do sistema.                           | 10%  |
| *8. Uso Adequado das Tecnologias*    | Aplicação correta de cada banco conforme suas características (relacional vs flexível).           | 10%  |
| *9. Análise da Solução*              | Avaliação crítica da arquitetura adotada, com pontos fortes e limitações.                         | 10%  |
| *10. Documentação Técnica Integrada* | Documentação completa contemplando os dois bancos e a arquitetura geral.                          | 5%   |


**Total: 100 pontos**


## Desenvolvimento Web Front-end - Prof Gabriel

Na disciplina de Desenvolvimento Web Front-end, os critérios de avaliação são organizados de forma a considerar o nível de complexidade e as escolhas técnicas adotadas pelo grupo na construção da interface do projeto. Espera-se que a solução desenvolvida contemple desde a estruturação adequada das páginas até a implementação de interações reais com o usuário, podendo variar desde aplicações mais simples até interfaces integradas com APIs ou outros serviços. Dessa forma, os critérios a seguir avaliam não apenas os aspectos técnicos, mas também a usabilidade, organização e a coerência da interface com o problema proposto.


| Critério                            | Descrição                                                                                                                                                                               | Peso |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| *1. Estruturação HTML*              | O projeto apresenta páginas bem organizadas, utilizando HTML semântico de forma adequada, com hierarquia clara e estrutura coerente com a proposta da aplicação.                        | 15%  |
| *2. Estilização com CSS*            | A interface possui estilização consistente, com uso adequado de cores, tipografia e espaçamento, garantindo boa legibilidade e organização visual.                                      | 15%  |
| *3. Interatividade com JavaScript*  | O sistema implementa interações reais com o usuário, utilizando JavaScript de forma funcional (eventos, manipulação de elementos), evitando elementos meramente estáticos ou simulados. | 15%  |
| *4. Lógica de programação aplicada* | O código demonstra uso correto de estruturas lógicas, como condições, loops e manipulação do DOM.                                                                                       | 15%  |
| *5. Responsividade*                 | A aplicação apresenta adaptação mínima para diferentes dispositivos, funcionando adequadamente em desktop e mobile.                                                                     | 10%  |
| *6. Funcionamento geral do sistema* | O projeto executa sem erros críticos, permitindo navegação e uso das funcionalidades principais de forma estável.                                                                       | 10%  |
| *7. Clareza na apresentação*        | Todos os integrantes do grupo conseguem explicar o funcionamento da interface e suas decisões de implementação.                                                                         | 10%  |
| *8. Evolução além do mínimo*        | O projeto apresenta funcionalidades adicionais relevantes, como formulários funcionais ou integração com APIs.                                                                          | 10%  |

**Total: 100 pontos**




## Engenharia de Software - Prof Glauco

Na disciplina de Engenharia de Software, os critérios de avaliação são organizados de forma a considerar a capacidade do grupo em planejar, documentar e gerenciar o desenvolvimento do projeto de forma estruturada e profissional. Espera-se que os estudantes apliquem boas práticas de engenharia, contemplando desde a definição de requisitos até o acompanhamento das atividades e versionamento do código. Dessa forma, os critérios a seguir avaliam não apenas os artefatos produzidos, mas também a organização do processo de desenvolvimento, a colaboração da equipe e a clareza na comunicação das decisões do projeto.

- Diagramas UMLs
- Prototipação
- Git com padrões de commit, branches e pull request
- Repositório com README.md profissional
- Repositório com Wiki
- GitHub Project atualizado e com tarefas comentadas seguindo o padrão apresentado
- PRD - (Product Requirements Document)



## Linguagem de Programação - Prof Cainã

Na disciplina de Linguagem de Programação, os critérios de avaliação são organizados de forma a considerar a capacidade do grupo em desenvolver soluções lógicas e estruturadas para o problema proposto no projeto integrador. Espera-se que os estudantes demonstrem domínio dos fundamentos de programação, desde a construção de algoritmos até a implementação de código funcional, utilizando boas práticas de organização, clareza e eficiência. Dessa forma, os critérios a seguir avaliam não apenas o funcionamento do sistema, mas também a qualidade da lógica desenvolvida e a estrutura do código produzido.

| Critério | Descrição | Peso |
| --- | --- | --- |
| *1. Lógica de Programação* | Correta estruturação da lógica do sistema, com uso adequado de algoritmos, condições e repetições. | 20% |
| *2. Representação Algorítmica (Fluxograma)* | Apresentação clara da lógica por meio de fluxograma, coerente com o código implementado. | 15% |
| *3. Uso de Estruturas de Dados* | Aplicação correta de variáveis, tipos de dados, vetores e matrizes (quando necessário). | 15% |
| *4. Estruturas de Controle* | Uso adequado de estruturas condicionais e de repetição, sem redundâncias ou erros lógicos. | 15% |
| *5. Modularização do Código* | Uso de funções/métodos, com correta divisão do problema e passagem de parâmetros. | 15% |
| *6. Qualidade do Código* | Código organizado, legível, com indentação adequada e nomes significativos de variáveis e funções. | 10% |
| *7. Funcionamento do Programa* | Execução correta do sistema, atendendo aos requisitos definidos no projeto integrador. | 10% |

*Total: 100 pontos*

> **Importante:** Não é necessário desenvolver código em Java para esta disciplina. A avaliação dos critérios será realizada com base na lógica e na estrutura do código em JavaScript desenvolvido no contexto de Desenvolvimento Web Front-end.


## Tecnologias da Informação e Conectividade - Profs André e Cainã

Na disciplina de Tecnologias da Informação e Conectividade, os critérios de avaliação têm caráter complementar ao projeto integrador, com foco em pesquisa e compreensão dos conceitos de redes aplicados ao sistema desenvolvido. Não é esperado o desenvolvimento prático de infraestrutura, mas sim a capacidade do grupo de analisar e explicar como sua solução funcionaria em termos de comunicação, conectividade e ambiente de rede.

Dessa forma, os estudantes deverão apresentar uma visão conceitual de como o projeto se insere em um contexto real de redes, utilizando os conhecimentos estudados na disciplina.


| Critério                                 | Descrição                                                                                                       | Peso |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ---- |
| *1. Descrição da Comunicação do Sistema* | Explica, de forma simples, como os componentes do projeto se comunicam (ex: frontend, backend, banco de dados). | 20%  |
| *2. Topologia de Rede*                   | Apresenta uma sugestão de topologia (ex: estrela, etc.) coerente com o projeto.                                 | 15%  |
| *3. Protocolos Utilizados*               | Identifica e explica protocolos básicos envolvidos (ex: HTTP, TCP/IP, DNS).                                     | 15%  |
| *4. Conceitos de Endereçamento*          | Explica de forma básica como ocorre a comunicação na rede (IP, requisições, cliente-servidor).                  | 15%  |
| *5. Segurança Básica*                    | Apresenta ao menos algumas práticas simples de segurança (ex: HTTPS, autenticação).                             | 10%  |
| *6. Escalabilidade (Visão Geral)*        | Descreve, de forma conceitual, como o sistema poderia crescer ou atender mais usuários.                         | 10%  |
| *7. Diagrama de Rede (Simples)*          | Apresenta um diagrama básico (packet tracer) representando a comunicação do sistema.                                            | 10%  |
| *8. Clareza da Pesquisa*                 | Organização, clareza e coerência da explicação apresentada pelo grupo.                                          | 5%   |

**Total: 100 pontos**


## Metodologia Científica Aplicada

Na disciplina de Metodologia Científica Aplicada, os critérios de avaliação são organizados com foco na elaboração de um **banner acadêmico**, que represente o projeto integrador como um todo. Espera-se que os estudantes sejam capazes de sintetizar e comunicar sua solução de forma clara, estruturada e com base em conceitos científicos, utilizando linguagem adequada e organização coerente.

O banner deverá apresentar de forma objetiva os principais elementos do projeto, como problema, objetivos, fundamentação teórica, metodologia, resultados e conclusões, podendo incluir também artefatos produzidos ao longo das demais disciplinas, como modelagem de banco de dados, diagramas UML, fluxogramas, protótipos de interface e diagramas de rede.

Dessa forma, a disciplina tem como objetivo desenvolver a capacidade de pesquisa, síntese de informações e comunicação técnica em formato visual e acadêmico.


| Critério                         | Descrição                                                                                   | Peso |
| -------------------------------- | ------------------------------------------------------------------------------------------- | ---- |
| *1. Estrutura do Banner*         | Organização adequada das seções (problema, objetivos, metodologia, resultados, conclusões). | 20%  |
| *2. Fundamentação Teórica*       | Apresentação de conceitos relevantes que sustentam o projeto.                               | 15%  |
| *3. Metodologia do Projeto*      | Clareza na descrição de como o projeto foi desenvolvido.                                    | 15%  |
| *4. Apresentação dos Resultados* | Clareza e qualidade na apresentação da solução desenvolvida.                                | 20%  |
| *5. Organização Visual*          | Layout, legibilidade, uso adequado de elementos gráficos e equilíbrio visual.               | 15%  |
| *6. Clareza e Síntese*           | Capacidade de resumir o projeto de forma objetiva e compreensível.                          | 15%  |

**Total: 100 pontos**

## Entrega e Apresentação

A entrega final do Projeto Integrador ocorrerá na semana de **08 a 12 de junho**, no formato de **exposição (feira)**, aberta a familiares e demais convidados. Os convidados deverão ser cadastrados previamente para liberação na portaria como visitantes e deverão seguir as normas institucionais (não é permitido o uso de chinelo, sandália, shorts, bonés, entre outros).

A apresentação dos projetos será realizada por meio de **banner**, sendo obrigatória para todos os grupos. Além disso, tanto o banner quanto o artigo científico deverão estar disponíveis no repositório do projeto no GitHub, conforme as orientações das disciplinas.

Para a elaboração do banner e da apresentação oral, deverão ser utilizados obrigatoriamente os **templates disponibilizados neste repositório**, garantindo padronização visual e organização das informações.

Haverá também a possibilidade de **apresentação oral**, com número limitado de vagas, mediante inscrição e validação do docente responsável pelo Projeto Integrador. A apresentação oral não terá impacto na nota final, sendo uma oportunidade adicional para os alunos darem maior visibilidade ao trabalho desenvolvido ao longo do semestre para colegas, familiares e visitantes.

