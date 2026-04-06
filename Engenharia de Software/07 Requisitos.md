# Requisitos de Sistema na Engenharia de Software

A definição de requisitos é uma das atividades mais críticas no desenvolvimento de software. Segundo Ian Sommerville, muitos problemas em projetos não estão relacionados à implementação, mas sim a **falhas na compreensão do que realmente deveria ser construído**. Dessa forma, os requisitos constituem a base para todas as demais etapas do ciclo de vida do software.

De maneira geral, requisitos são descrições dos serviços que um sistema deve oferecer, bem como das restrições sob as quais deve operar. Já Roger Pressman define requisitos como a ponte entre as necessidades do negócio e a solução tecnológica, enfatizando seu papel estratégico no sucesso do projeto.


##  Classificação dos Requisitos

A literatura apresenta diversas formas de classificar requisitos. Entre as mais consolidadas, destacam-se os requisitos funcionais, não funcionais e de domínio, além da distinção entre requisitos do usuário e do sistema.


##  Requisitos Funcionais

Os requisitos funcionais descrevem **o comportamento do sistema**, isto é, as funcionalidades que ele deve oferecer aos usuários ou a outros sistemas.

Esses requisitos estão diretamente ligados às atividades do negócio e representam aquilo que o sistema deve executar. Em geral, são expressos por meio de verbos de ação, como “cadastrar”, “processar”, “calcular” ou “emitir”.

Por exemplo, em um sistema de vendas, pode-se estabelecer que o sistema deve permitir o cadastro de clientes, registrar pedidos e calcular o valor total de uma compra. Cada uma dessas ações representa uma funcionalidade essencial ao funcionamento do sistema.

Uma característica importante dos requisitos funcionais é que eles são **mensuráveis e testáveis**, ou seja, é possível verificar objetivamente se foram implementados corretamente.

Entretanto, quando mal definidos, podem gerar ambiguidades. Um requisito como “o sistema deve ser fácil de usar”, por exemplo, não é funcional, mas muitas vezes é confundido com um — evidenciando a importância de uma classificação adequada.


##  Requisitos Não Funcionais

Enquanto os requisitos funcionais tratam do “o que” o sistema faz, os requisitos não funcionais abordam **“como” o sistema deve se comportar**.

Eles definem restrições, qualidades e atributos do sistema, sendo fundamentais para garantir sua aceitação e qualidade. Muitas vezes, são responsáveis pelo sucesso ou fracasso de uma solução, mesmo quando todas as funcionalidades estão implementadas.

A norma ISO/IEC 25010 organiza esses requisitos em características de qualidade, entre as quais se destacam:

### Desempenho

Refere-se à capacidade do sistema de responder dentro de limites de tempo e recursos aceitáveis. Um sistema pode estar funcionalmente correto, mas se levar muito tempo para responder, será considerado inadequado.

Por exemplo, exigir que uma consulta seja processada em até dois segundos é um requisito de desempenho.


### Segurança

Relaciona-se à proteção de dados e ao controle de acesso. Envolve autenticação, autorização e confidencialidade das informações.

Um requisito típico é a obrigatoriedade de login para acesso a determinadas funcionalidades ou a criptografia de dados sensíveis.


### Usabilidade

Diz respeito à facilidade de uso do sistema. Sistemas complexos ou pouco intuitivos tendem a ser rejeitados pelos usuários, independentemente de sua capacidade técnica.

Um requisito de usabilidade pode estabelecer que o sistema deve ser operável por usuários sem treinamento especializado.


### Confiabilidade

Refere-se à capacidade do sistema de operar sem falhas e de se recuperar de erros. Inclui aspectos como disponibilidade e tolerância a falhas.

Por exemplo, um sistema pode exigir disponibilidade mínima de 99,5%.


### Manutenibilidade

Relaciona-se à facilidade de modificar o sistema ao longo do tempo. Sistemas bem estruturados permitem adaptações com menor custo e esforço.


### Portabilidade

Refere-se à capacidade de execução em diferentes ambientes, como sistemas operacionais ou navegadores distintos.


Diferentemente dos requisitos funcionais, os não funcionais são frequentemente mais difíceis de medir e validar, o que exige maior cuidado em sua especificação.


##  Requisitos de Domínio

Os requisitos de domínio são derivados das características específicas do ambiente em que o sistema será utilizado. Eles refletem regras, normas e práticas próprias de um determinado setor.

Por exemplo, em sistemas financeiros, podem existir regras específicas para cálculo de juros; em sistemas fiscais, exigências legais para emissão de documentos eletrônicos.

Esses requisitos são particularmente importantes porque, muitas vezes, não são evidentes para desenvolvedores que não possuem conhecimento profundo do domínio. Sua ausência pode levar a sistemas tecnicamente corretos, mas inadequados ao contexto de uso.


##  Requisitos do Usuário e do Sistema

Outra forma relevante de classificação distingue requisitos conforme o nível de detalhamento.

Os requisitos do usuário são descrições em linguagem natural, voltadas à compreensão por pessoas não técnicas. Eles apresentam uma visão geral das funcionalidades desejadas.

Por outro lado, os requisitos do sistema são mais detalhados e estruturados, servindo como base para o desenvolvimento. Eles incluem especificações técnicas, regras de validação e definições mais precisas do comportamento do sistema.

Essa distinção é importante porque permite alinhar expectativas entre diferentes públicos envolvidos no projeto.


##  Requisitos Implícitos

Além dos requisitos explicitamente definidos, existem aqueles que são considerados óbvios pelos usuários, mas não são formalmente documentados.

Esses requisitos implícitos incluem, por exemplo, a expectativa de que o sistema seja seguro, confiável e não perca dados.

A ausência de documentação desses requisitos pode gerar conflitos, já que diferentes partes podem ter interpretações distintas sobre o que é “óbvio”.


#  Especificação de Requisitos

Uma vez identificados, os requisitos devem ser organizados e documentados de forma estruturada. A especificação clara e padronizada contribui para reduzir ambiguidades e facilitar a comunicação entre as partes envolvidas.

Uma forma comum de organizar requisitos é por meio de tabelas, que permitem rastreabilidade e controle.


## Exemplo de Estrutura de Tabela de Requisitos

| ID    | Tipo       | Descrição                     | Prioridade | Origem  | Critério de Aceitação          |
| ----- | ---------- | ----------------------------- | ---------- | ------- | ------------------------------ |
| RF01  | Funcional  | Permitir cadastro de clientes | Alta       | Cliente | Cadastro realizado com sucesso |
| RF02  | Funcional  | Registrar vendas              | Alta       | Usuário | Venda armazenada corretamente  |
| RNF01 | Desempenho | Resposta em até 2 segundos    | Média      | Negócio | Teste de tempo                 |
| RNF02 | Segurança  | Exigir autenticação           | Alta       | TI      | Login obrigatório              |

Essa estrutura permite identificar cada requisito de forma única, além de registrar sua origem e os critérios que serão utilizados para validação.


#  Construção de Requisitos a partir de Entrevistas

Uma das principais técnicas de elicitação de requisitos é a entrevista com stakeholders. Durante esse processo, o analista busca compreender necessidades, expectativas e problemas existentes.

Considere a seguinte situação: um comerciante deseja informatizar sua loja. Ao ser questionado, ele informa a necessidade de controlar clientes, registrar vendas e acompanhar resultados diários. Além disso, destaca que o sistema deve ser rápido, seguro e confiável.

A partir dessa narrativa, é possível identificar requisitos funcionais, como o cadastro de clientes e o registro de vendas, bem como requisitos não funcionais, como desempenho e segurança.

Esse processo de transformação de informações informais em requisitos estruturados é conhecido como **análise de requisitos**.


##  Exemplo de Requisito Descrito

Um requisito pode ser detalhado de forma mais completa para eliminar ambiguidades.

**Identificador:** RF01
**Nome:** Cadastro de Cliente
**Descrição:** O sistema deve permitir o registro de novos clientes
**Entradas:** Nome, CPF, telefone
**Processamento:** Validação dos dados informados
**Saídas:** Armazenamento dos dados no sistema
**Prioridade:** Alta
**Critério de Aceitação:** O cliente deve ser salvo e exibido na listagem

# Requisitos Funcionais nos Modelos de Processo de Software

Os requisitos funcionais, por definirem o comportamento do sistema, estão presentes em todos os modelos de desenvolvimento de software. No entanto, a forma como são **levantados, documentados, validados e evoluem** varia significativamente de acordo com o modelo adotado.

Segundo Ian Sommerville, não existe um único processo ideal; cada modelo organiza as atividades de engenharia de requisitos de maneira distinta, influenciando diretamente a qualidade e a estabilidade dos requisitos funcionais ao longo do projeto.


## Requisitos Funcionais no Modelo Cascata

O modelo cascata é um dos mais tradicionais da Engenharia de Software, caracterizado por uma sequência linear de etapas.

Nesse modelo, os requisitos funcionais são definidos logo no início do projeto, durante a fase de levantamento e análise de requisitos. Após essa etapa, espera-se que os requisitos estejam **completos, claros e estáveis**, pois mudanças posteriores são difíceis e custosas.

**Exemplo:**

Durante a fase inicial de um sistema de vendas:

* O sistema deve permitir cadastro de clientes
* O sistema deve registrar vendas
* O sistema deve emitir relatórios

Esses requisitos são documentados de forma detalhada antes de qualquer implementação.

Uma vez aprovados, passam a orientar todas as fases seguintes, como projeto, implementação e testes. Isso significa que qualquer falha na definição inicial pode impactar todo o sistema.

Esse modelo é mais adequado quando os requisitos são bem conhecidos e pouco sujeitos a mudanças.


## Requisitos Funcionais no Modelo de Prototipação

O modelo de prototipação surge como uma alternativa quando os requisitos não estão totalmente claros no início do projeto.

Nesse contexto, os requisitos funcionais são descobertos e refinados por meio da construção de protótipos — versões simplificadas do sistema que permitem ao usuário visualizar e interagir com a solução.

**Exemplo:**

Inicialmente, o cliente afirma:

* “Preciso de um sistema para registrar vendas”

A partir disso, um protótipo de tela é desenvolvido. Ao utilizá-lo, o cliente percebe novas necessidades:

* Inclusão de desconto na venda
* Seleção de forma de pagamento
* Visualização de histórico

Esses novos elementos passam a compor os requisitos funcionais.

Nesse modelo, os requisitos não são totalmente definidos no início, mas evoluem iterativamente conforme o usuário interage com o sistema.


## Requisitos Funcionais no Modelo Espiral

O modelo espiral combina características do modelo cascata com abordagens iterativas, incorporando análise de riscos em cada ciclo.

Nesse modelo, os requisitos funcionais são tratados de forma incremental. A cada volta da espiral, novos requisitos podem ser identificados, refinados e validados.

**Exemplo:**

**Primeira iteração:**

* Cadastro de clientes

**Segunda iteração:**

* Registro de vendas

**Terceira iteração:**

* Relatórios e análises

A cada ciclo, há validação com o cliente, permitindo ajustes antes de avançar.

Uma característica importante é que os requisitos funcionais são avaliados também sob a perspectiva de risco, o que ajuda a priorizar funcionalidades críticas.


## Requisitos Funcionais no Modelo Ágil (Scrum)

Nos modelos ágeis, como o Scrum, os requisitos funcionais são tratados de forma dinâmica e incremental.

Em vez de um documento extenso no início do projeto, os requisitos são organizados em forma de **histórias de usuário**, que representam funcionalidades sob a perspectiva do usuário final.

**Exemplo:**

* “Como vendedor, quero cadastrar clientes para manter controle dos meus contatos”
* “Como gerente, quero visualizar o total de vendas do dia para acompanhar o desempenho”

Essas histórias são priorizadas em um backlog e implementadas em ciclos curtos chamados sprints.

Diferentemente do modelo cascata, os requisitos podem mudar ao longo do projeto, sendo continuamente refinados com base no feedback do cliente.


## Comparação entre os Modelos

A forma como os requisitos funcionais são tratados varia principalmente em relação à flexibilidade e ao momento de definição.

* No modelo cascata, os requisitos são definidos de forma completa no início e tendem a ser estáveis.
* No modelo de prototipação, os requisitos emergem a partir da interação com protótipos.
* No modelo espiral, os requisitos evoluem em ciclos controlados com análise de risco.
* No modelo ágil, os requisitos são continuamente refinados e priorizados ao longo do desenvolvimento.


## Considerações Finais

Independentemente do modelo adotado, os requisitos funcionais continuam sendo o elemento central que orienta o desenvolvimento do sistema. O que muda é a forma como eles são tratados: rígida e antecipada em modelos tradicionais, ou adaptativa e evolutiva em modelos modernos.

A escolha do modelo de processo deve considerar o nível de clareza dos requisitos, a necessidade de flexibilidade e o grau de envolvimento do cliente ao longo do projeto.
