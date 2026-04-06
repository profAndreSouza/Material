# Processos de Desenvolvimento: Limitações, Evolução e Abordagens Ágeis

O desenvolvimento de software ocorre em contextos marcados por variabilidade, incerteza e constante transformação. Embora modelos tradicionais tenham contribuído significativamente para a organização da Engenharia de Software, a prática ao longo do tempo evidenciou limitações importantes, especialmente quando aplicados a sistemas complexos e dinâmicos.

A compreensão dessas limitações é fundamental para entender o surgimento de novos modelos e abordagens, como o modelo espiral e as metodologias ágeis.


## Limitações dos Modelos Tradicionais

Modelos tradicionais de desenvolvimento, como o modelo cascata, partem de um pressuposto fundamental: é possível compreender o problema de forma completa antes de iniciar a construção do sistema.

Esse pressuposto implica que o projeto possui:

* requisitos estáveis
* escopo bem definido
* baixo nível de incerteza

No entanto, essa condição raramente é encontrada em projetos reais.

Na prática, sistemas de software estão inseridos em ambientes dinâmicos, nos quais fatores externos influenciam continuamente o desenvolvimento. Entre esses fatores, destacam-se:

* mudanças frequentes nas necessidades dos usuários
* evolução tecnológica constante
* pressão por entregas rápidas
* competição de mercado
* descobertas ao longo do próprio desenvolvimento

Esses elementos tornam o processo de desenvolvimento menos previsível e mais adaptativo do que os modelos tradicionais pressupõem.

Um exemplo representativo pode ser observado em aplicações digitais amplamente utilizadas, como sistemas de delivery. Nesse tipo de sistema, funcionalidades e comportamentos são constantemente ajustados com base em:

* análise de comportamento dos usuários
* estratégias da concorrência
* campanhas promocionais
* integração com novos serviços

Nesse cenário, um modelo rígido e sequencial tende a apresentar dificuldades, pois não consegue incorporar mudanças de forma eficiente sem gerar retrabalho significativo.

Assim, as limitações dos modelos tradicionais não estão necessariamente em sua estrutura, mas na sua **adequação a contextos específicos**. Eles funcionam bem em ambientes estáveis, mas se mostram menos eficazes em cenários dinâmicos.


## Modelo Espiral: Introdução ao Conceito de Risco

Diante das limitações dos modelos lineares, surgem abordagens que procuram lidar de forma mais explícita com a incerteza. O modelo espiral representa uma dessas evoluções ao introduzir um elemento central no processo de desenvolvimento: **a gestão de riscos**.

Diferentemente do modelo cascata, que organiza o desenvolvimento em etapas sequenciais, o modelo espiral propõe uma estrutura cíclica. O sistema é desenvolvido por meio de ciclos sucessivos, nos quais cada iteração busca reduzir incertezas e validar decisões.

Cada ciclo da espiral envolve quatro atividades principais:

* definição de objetivos
* análise e identificação de riscos
* desenvolvimento e validação de soluções
* planejamento do próximo ciclo

A principal contribuição desse modelo é deslocar o foco do processo para a **antecipação de problemas**. Em vez de assumir que tudo está bem definido, o modelo parte do princípio de que existem riscos que precisam ser identificados e tratados progressivamente.

Essa abordagem é especialmente relevante em sistemas que envolvem alta complexidade técnica.

Um exemplo pode ser observado em sistemas bancários. Nesses sistemas, alguns riscos são críticos desde o início:

* segurança da informação
* integridade de transações
* integração com sistemas legados

Antes de desenvolver o sistema completo, a equipe pode optar por validar aspectos específicos, como:

* mecanismos de autenticação
* comunicação com APIs externas
* desempenho de transações

Dessa forma, o desenvolvimento ocorre de maneira mais segura, reduzindo a probabilidade de falhas graves em fases avançadas do projeto.

O modelo espiral não elimina a estrutura do desenvolvimento, mas a reorganiza em ciclos que permitem aprendizado contínuo e tomada de decisão progressiva.


## Surgimento das Metodologias Ágeis

Com o avanço da indústria de software e a crescente complexidade dos sistemas, tornou-se evidente que não apenas os modelos, mas também a forma de pensar o desenvolvimento precisava evoluir.

As metodologias ágeis surgem como uma resposta a problemas recorrentes observados em projetos tradicionais, tais como:

* excesso de documentação que não gera valor direto
* demora na entrega de funcionalidades utilizáveis
* dificuldade de adaptação a mudanças
* distanciamento entre equipe técnica e usuários

Em resposta a esse cenário, foi proposto o **Manifesto Ágil**, que estabelece um conjunto de valores orientadores para o desenvolvimento de software.

Esses valores não eliminam os elementos tradicionais, mas redefinem sua importância relativa. Entre os principais princípios, destacam-se:

* valorização de indivíduos e interações em relação a processos rígidos
* priorização de software funcionando em relação à documentação extensa
* colaboração com o cliente em vez de negociações contratuais rígidas
* adaptação a mudanças em vez de seguir planos inflexíveis

Essa mudança representa uma transformação significativa na forma de conduzir projetos. O desenvolvimento deixa de ser centrado exclusivamente em planejamento antecipado e passa a incorporar **aprendizado contínuo e adaptação constante**.


## Pensamento Ágil Aplicado ao Desenvolvimento

A adoção de metodologias ágeis não significa ausência de organização ou planejamento. Pelo contrário, trata-se de uma reorganização do processo com foco em **entrega incremental de valor**.

Nesse contexto, o sistema não é desenvolvido como um todo único, mas como um conjunto de partes menores que evoluem ao longo do tempo.

Essa abordagem baseia-se em três ideias fundamentais:

* dividir o problema em partes menores e gerenciáveis
* entregar valor de forma contínua
* validar frequentemente com o usuário

A divisão do sistema em partes permite reduzir complexidade e facilitar o acompanhamento do progresso. Cada parte desenvolvida representa uma funcionalidade que pode ser testada, avaliada e ajustada.

A entrega contínua de valor implica que o usuário não precisa esperar o sistema completo para começar a utilizá-lo. Mesmo versões iniciais já devem oferecer utilidade real.

A validação frequente permite identificar problemas mais cedo, reduzindo o risco de desenvolver funcionalidades que não atendem às necessidades reais.

Um exemplo pode ser observado no desenvolvimento de um sistema financeiro. Em vez de implementar todas as funcionalidades de uma só vez, a equipe pode organizar o desenvolvimento da seguinte forma:

* inicialmente, permitir consulta de saldo
* posteriormente, implementar transferências
* em seguida, adicionar relatórios e análises

Cada etapa representa uma evolução do sistema, permitindo aprendizado e ajustes contínuos.


## Histórias de Usuário como Forma de Representar Requisitos

No contexto ágil, a forma de representar requisitos também se transforma. Em vez de documentos extensos e altamente detalhados, utiliza-se uma abordagem mais simples e orientada ao valor: as **histórias de usuário**.

As histórias de usuário descrevem funcionalidades a partir da perspectiva de quem utiliza o sistema, estabelecendo uma conexão direta entre ação e benefício.

A estrutura mais comum é:

Como [tipo de usuário], eu quero [ação], para [benefício].

Essa estrutura apresenta três elementos essenciais:

* o usuário ou papel envolvido
* a funcionalidade desejada
* o valor ou objetivo da ação

Por exemplo:

Como estudante, eu quero visualizar meu histórico financeiro para controlar meus gastos.

Nesse exemplo, é possível identificar claramente:

* quem utiliza o sistema (estudante)
* o que ele deseja fazer (visualizar histórico)
* por que isso é importante (controle financeiro)

Esse formato contribui para:

* maior clareza na definição de requisitos
* melhor comunicação entre equipe e usuários
* foco no valor entregue
* facilidade de priorização

Além disso, histórias de usuário permitem que o sistema seja construído de forma incremental, já que cada história representa uma unidade de funcionalidade que pode ser desenvolvida e validada de maneira independente.


## Integração dos Conceitos

A evolução dos modelos de desenvolvimento de software evidencia uma mudança progressiva de foco:

* dos processos rígidos para a adaptação
* da previsibilidade absoluta para a gestão de incertezas
* da documentação extensiva para a entrega de valor
* do sistema completo para a construção incremental

Os modelos tradicionais continuam sendo importantes para compreender a estrutura do desenvolvimento. O modelo espiral introduz a preocupação com riscos. As metodologias ágeis consolidam a ideia de adaptação contínua e foco no usuário.

Essas abordagens não são excludentes, mas complementares. Compreender suas características permite selecionar estratégias mais adequadas para cada tipo de projeto, considerando contexto, objetivos e restrições.

Assim, o desenvolvimento de software deixa de ser apenas uma atividade técnica e passa a ser um processo de **tomada de decisão contínua em ambientes incertos**, no qual a capacidade de adaptação é tão importante quanto o domínio tecnológico.


## Problema (Contexto + Storytelling)

A empresa fictícia **Comercial Nova Era** é um pequeno negócio familiar que atua na venda de produtos de consumo diário. Localizada em uma região com grande circulação de pessoas, a empresa cresceu rapidamente nos últimos anos, ampliando seu portfólio de produtos e aumentando o volume de vendas.

Apesar desse crescimento, a gestão interna não acompanhou a evolução do negócio.

Atualmente:

* o controle de estoque é feito manualmente ou por planilhas simples
* as vendas são registradas sem integração com o estoque
* não há visibilidade clara sobre quais produtos vendem mais
* frequentemente ocorrem erros de contagem e divergências
* decisões são tomadas com base em percepção, e não em dados

Em momentos de maior movimento, é comum:

* vender produtos que já estão em falta no estoque
* deixar de vender por não saber que há itens disponíveis
* perder tempo conferindo mercadorias manualmente

O proprietário deseja resolver esses problemas por meio de um sistema digital. No entanto, ele não possui clareza total sobre os requisitos. Ele consegue descrever algumas necessidades, mas muitas decisões dependerão da equipe de desenvolvimento.

Esse cenário representa um problema real: **desenvolver um sistema em um ambiente de incerteza, com necessidade de adaptação e foco no valor entregue ao usuário**.


## Desafio do Grupo

O grupo assume o papel de equipe de desenvolvimento responsável por estruturar a solução.

O desafio não é apenas “pensar em um sistema”, mas sim:

* lidar com informações incompletas
* identificar riscos antes da implementação
* tomar decisões progressivas
* focar no que realmente gera valor para o usuário

A proposta deve refletir uma abordagem ágil, considerando que o sistema evoluirá ao longo do tempo.


## Contexto do Sistema

### Tipo de Sistema

Sistema de Gestão de Estoque e Vendas para Pequenos Negócios

### Objetivo Geral

Apoiar o controle operacional da empresa, reduzindo erros, aumentando a eficiência e melhorando a tomada de decisão.


### Objetivos Específicos

O sistema deve permitir:

* controle de entrada e saída de produtos
* registro de vendas em tempo real
* atualização automática do estoque
* consulta rápida de produtos disponíveis
* geração de informações básicas para análise (ex: produtos mais vendidos)


### Perfis de Usuário

**Vendedor/Atendente**

* registra vendas
* consulta produtos
* interage diretamente com o cliente

**Estoquista**

* registra entrada de mercadorias
* organiza o estoque
* confere quantidades

**Gerente/Administrador**

* acompanha relatórios
* toma decisões de compra
* monitora o desempenho do negócio


### Restrições e Premissas (Importante para o PBL)

Considere que:

* o sistema deve ser simples e fácil de usar
* os usuários podem ter baixo conhecimento técnico
* o ambiente pode ter limitações (ex: poucos computadores)
* mudanças de requisito são esperadas
* nem todas as funcionalidades precisam ser desenvolvidas de início


## Etapas da Atividade

### 1. Diagnóstico do Sistema

O grupo deve analisar o problema antes de propor soluções.

Reflita de forma crítica:

* O que ainda não está claro no sistema?
* Quais informações estão faltando?
* Onde existem suposições sendo feitas?
* Quais partes podem gerar maior dificuldade técnica?
* O que pode mudar com o tempo (regras, funcionalidades, necessidades)?
* Existe necessidade de validar ideias com usuários reais?

**Dica:**
Evite tentar “resolver tudo”. O foco é **identificar incertezas**, não eliminá-las.

**Registro esperado:**

* lista estruturada de incertezas
* lista de riscos técnicos
* pontos de possível mudança


### 2. Identificação de Funcionalidades

Liste as principais funcionalidades do sistema.

Pense em termos de:

* ações realizadas pelo usuário
* problemas que precisam ser resolvidos
* valor entregue em cada funcionalidade

**Evite:**

* pensar em interface (telas, botões)
* definir tecnologias
* detalhar implementação

**Perguntas orientadoras:**

* O que o usuário precisa conseguir fazer?
* O que é essencial para o sistema funcionar?
* O que pode ficar para depois?


### 3. Criação de Histórias de Usuário

Transforme as funcionalidades em histórias de usuário.

**Estrutura obrigatória:**

> Como [tipo de usuário], eu quero [ação], para [benefício].

**Boas práticas:**

* uma história deve representar uma única necessidade
* deve ser compreensível por qualquer pessoa
* deve focar no valor, não na solução

**Exemplos:**

> Como estoquista, eu quero registrar a entrada de produtos, para manter o estoque atualizado.

> Como gerente, eu quero visualizar os produtos mais vendidos, para tomar decisões de compra.


### 4. Priorização do Backlog

Organize as histórias em ordem de importância.

**Critérios sugeridos:**

* valor para o usuário
* urgência
* frequência de uso
* impacto no funcionamento do sistema
* facilidade ou dificuldade de implementação

**Importante:**

* priorizar não é apenas ordenar — é **tomar decisões estratégicas**
* o grupo deve ser capaz de justificar cada escolha


### 5. Definição de Critérios de Aceitação

Escolha algumas histórias prioritárias e defina critérios de aceitação.

Esses critérios representam condições mínimas para considerar a funcionalidade pronta.

**Boas práticas:**

* devem ser objetivos
* devem ser testáveis
* devem evitar ambiguidades

**Exemplo detalhado:**

História: registrar venda

Critérios de aceitação:

* permitir selecionar um ou mais produtos
* calcular automaticamente o valor total
* atualizar o estoque após a venda
* impedir venda de produtos sem estoque
* exibir confirmação da operação


### 6. Apresentação dos Resultados

O grupo deve apresentar de forma estruturada:

* principais histórias de usuário
* backlog priorizado
* riscos identificados
* decisões tomadas e justificativas

A apresentação deve demonstrar:

* clareza de raciocínio
* coerência nas escolhas
* entendimento do problema


## Entregáveis

O grupo deve produzir:

* lista de incertezas, riscos e mudanças
* conjunto estruturado de histórias de usuário
* backlog priorizado
* critérios de aceitação para histórias selecionadas


## Referência Conceitual

Durante o desenvolvimento da atividade, considere diferentes formas de abordar o problema:

* **Cascata**

  * exige definição completa antecipada
  * menor flexibilidade para mudanças

* **Espiral**

  * foco na identificação e mitigação de riscos
  * desenvolvimento iterativo orientado a análise

* **Ágil**

  * aceita incertezas como parte do processo
  * prioriza valor para o usuário
  * trabalha com evolução contínua
