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

Os requisitos funcionais não existem de forma isolada dentro de um projeto. Eles são **identificados, documentados, refinados e implementados ao longo de um processo de desenvolvimento**, que pode variar conforme o modelo adotado.

Segundo Ian Sommerville, diferentes modelos de processo organizam as atividades de engenharia de software de maneiras distintas, influenciando diretamente **como e quando os requisitos são tratados**.

Da mesma forma, Roger Pressman destaca que a escolha do modelo impacta a forma como os requisitos evoluem ao longo do projeto, especialmente em cenários de mudança.

A seguir, são apresentados três modelos clássicos — cascata, espiral e ágil — com foco no tratamento dos requisitos funcionais.


##  Requisitos Funcionais no Modelo Cascata

O modelo cascata é um dos mais tradicionais da Engenharia de Software. Ele organiza o desenvolvimento em etapas sequenciais, nas quais cada fase deve ser concluída antes da próxima.

Nesse modelo, os requisitos funcionais são tratados de forma **extensiva e antecipada**, logo no início do projeto, na fase de levantamento e análise de requisitos.

Isso significa que há uma forte ênfase na **documentação completa e detalhada** antes de qualquer implementação.

 **Exemplo:**

Em um sistema de vendas, ainda na fase inicial, seriam definidos requisitos como:

* O sistema deve permitir cadastro de clientes
* O sistema deve registrar vendas
* O sistema deve emitir relatórios de vendas

Esses requisitos seriam documentados formalmente e aprovados antes do início do desenvolvimento.


### Características no Cascata

* Requisitos são definidos no início do projeto
* Baixa flexibilidade para mudanças
* Forte documentação
* Validação ocorre apenas em fases posteriores

Esse modelo é mais adequado quando os requisitos são bem compreendidos e estáveis. No entanto, pode apresentar dificuldades quando há mudanças frequentes nas necessidades do cliente.


##  Requisitos Funcionais no Modelo Espiral

O modelo espiral, proposto por Barry Boehm, combina características do modelo cascata com abordagens iterativas, incorporando a análise de riscos como elemento central.

Nesse modelo, os requisitos funcionais não são definidos de forma completa logo no início. Em vez disso, eles são **refinados progressivamente ao longo de ciclos (espirais)**.

Cada ciclo envolve:

* Identificação de objetivos
* Análise de riscos
* Desenvolvimento e validação
* Planejamento da próxima iteração

 **Exemplo:**

No primeiro ciclo, pode-se definir apenas:

* O sistema deve registrar vendas

Em ciclos posteriores, esse requisito pode ser refinado:

* O sistema deve registrar vendas com múltiplos itens
* O sistema deve aplicar descontos
* O sistema deve integrar formas de pagamento


### Características no Espiral

* Requisitos evoluem ao longo do projeto
* Forte foco em análise de riscos
* Iterações permitem refinamento contínuo
* Validação ocorre em cada ciclo

Esse modelo é especialmente útil em projetos complexos ou inovadores, nos quais os requisitos não são totalmente conhecidos desde o início.


##  Requisitos Funcionais no Modelo Ágil (Scrum)

Nos métodos ágeis, como o Scrum, os requisitos funcionais são tratados de forma incremental e adaptativa.

Ao invés de serem documentados completamente no início, os requisitos são organizados em uma lista chamada **Product Backlog**, geralmente representados como **histórias de usuário**.

Essas histórias são continuamente refinadas ao longo do projeto, com base no feedback dos stakeholders.

 **Exemplo:**

Uma história de usuário pode ser descrita como:

* “Como vendedor, quero registrar uma venda para controlar meu faturamento”

Esse requisito funcional é então detalhado e implementado em uma Sprint.


### Características no Scrum

* Requisitos são incrementais e evolutivos
* Uso de histórias de usuário
* Alta flexibilidade para mudanças
* Validação contínua com o cliente

A cada Sprint, um conjunto de requisitos funcionais é implementado, testado e validado, permitindo ajustes rápidos e alinhamento constante com as necessidades do cliente.



##  Considerações Finais

A forma de tratar requisitos funcionais depende diretamente do modelo de desenvolvimento adotado. Modelos mais tradicionais, como o cascata, priorizam a previsibilidade e a documentação, enquanto modelos iterativos e ágeis favorecem a adaptação e o aprendizado contínuo.

Não existe um modelo único ideal para todos os contextos. A escolha deve considerar fatores como a estabilidade dos requisitos, o nível de incerteza do projeto e a necessidade de interação com o cliente.

Compreender essa relação entre requisitos e processo é essencial para desenvolver sistemas mais alinhados às necessidades reais dos usuários e do negócio.
