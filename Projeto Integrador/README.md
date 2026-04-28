# Projeto Integrador - 1º semestre

O Projeto Integrador Interdisciplinar I constitui um eixo central do processo formativo, no qual os estudantes, organizados em grupos, desenvolvem soluções a partir de problemas reais previamente selecionados e validados na plataforma SAGA do SENAI. Nesta etapa, os projetos já definidos passam a ser aprofundados sob a perspectiva das diferentes disciplinas do semestre, promovendo a aplicação prática e integrada dos conhecimentos adquiridos.

Cada componente curricular contribui com critérios específicos de avaliação e desenvolvimento, alinhados às suas competências e habilidades, garantindo que o projeto evolua de forma consistente, interdisciplinar e orientada à resolução efetiva do problema proposto. Dessa forma, o Projeto Integrador fortalece a articulação entre teoria e prática, estimula o pensamento crítico, o trabalho colaborativo e a construção de soluções tecnológicas relevantes para contextos reais.


A seguir, serão apresentados os critérios de avaliação organizados por disciplina, os quais orientarão o desenvolvimento e a análise dos projetos ao longo do semestre

## Banco de Dados Relacional

Na disciplina de Banco de Dados, os critérios de avaliação são organizados em diferentes contextos, de acordo com a abordagem tecnológica adotada pelo grupo no desenvolvimento do projeto. Considerando a natureza do problema e as decisões de arquitetura, os estudantes poderão utilizar banco de dados relacional, não relacional (NoSQL) ou uma solução híbrida que combine ambos. Dessa forma, cada contexto apresenta critérios específicos que visam avaliar não apenas a implementação técnica, mas também a coerência da escolha, a qualidade da modelagem e a adequação da solução ao cenário proposto.

### Cenário Relacional

O projeto deve utilizar um banco de dados relacional para estruturar informações com forte consistência e integridade. Espera-se que o estudante desenvolva desde a modelagem conceitual até a implementação física, aplicando normalização e boas práticas de SQL.

#### Critérios de Avaliação

1. **Levantamento e análise de requisitos**
   O grupo identifica corretamente quais informações precisam ser armazenadas, descrevendo entidades, atributos e relações de forma clara e coerente com o problema proposto.

2. **Modelagem conceitual (DER)**
   O Diagrama Entidade-Relacionamento apresenta todas as entidades relevantes, com relacionamentos bem definidos, sem redundâncias ou inconsistências.

3. **Definição de chaves e integridade**
   As chaves primárias e estrangeiras são corretamente definidas, garantindo unicidade e integridade referencial entre as tabelas.

4. **Cardinalidade e restrições**
   As relações (1:1, 1:N, N:N) estão corretamente representadas e coerentes com o contexto do sistema.

5. **Transformação para modelo lógico (MLD)**
   O DER é convertido adequadamente para tabelas relacionais, respeitando boas práticas de modelagem.

6. **Aplicação de normalização**
   O banco é normalizado até pelo menos a 3FN, com explicação das decisões tomadas e eliminação de redundâncias e dependências indevidas.

7. **Implementação física (DDL)**
   O script de criação do banco apresenta tipos de dados adequados, restrições bem definidas e organização consistente.

8. **Manipulação de dados (DML e DQL)**
   O projeto demonstra uso correto de SQL para inserção, atualização, exclusão e consulta de dados, com queries coerentes e funcionais.

9. **Uso de recursos avançados**
   Inclusão de views, procedures ou functions que agreguem valor ao sistema, demonstrando domínio além do básico.

10. **Documentação técnica**
    O projeto inclui documentação clara com DER, modelo lógico, scripts SQL e dicionário de dados, permitindo entendimento e manutenção por terceiros.


### Cenário Não Relacional (NoSQL)

O projeto deve utilizar um banco de dados não relacional, priorizando flexibilidade, escalabilidade ou armazenamento de dados semi-estruturados. O estudante deve justificar tecnicamente essa escolha e demonstrar domínio das operações básicas.

### Critérios de Avaliação

1. **Justificativa da escolha do NoSQL**
   O grupo explica claramente por que um banco não relacional é mais adequado que um relacional para o problema proposto.

2. **Escolha do tipo de banco**
   A seleção (documento, chave-valor, coluna, grafo) é coerente com a natureza dos dados e do sistema.

3. **Modelagem dos dados**
   A estrutura dos dados (documentos, coleções, etc.) é bem organizada, facilitando leitura e manutenção.

4. **Representação dos dados**
   Os dados são armazenados de forma consistente, evitando duplicações desnecessárias ou estruturas confusas.

5. **Operações CRUD**
   O sistema realiza corretamente operações de criação, leitura, atualização e remoção de dados.

6. **Eficiência de acesso aos dados**
   As consultas são pensadas para o modelo NoSQL, explorando suas vantagens (ex: leitura rápida, estrutura embutida).

7. **Escalabilidade e flexibilidade**
   O projeto demonstra entendimento de como o modelo pode crescer ou se adaptar a mudanças.

8. **Integração com aplicação**
   O banco é utilizado por uma aplicação (backend, API, simulador, etc.), mostrando uso real.

9. **Comparação com modelo relacional**
   O grupo apresenta uma análise crítica destacando vantagens e limitações do NoSQL no contexto escolhido.

10. **Documentação técnica**
    A estrutura dos dados, exemplos de documentos e decisões de modelagem estão bem documentadas.


### Cenário Integrado (Relacional + Não Relacional)

O projeto deve combinar banco de dados relacional e não relacional, utilizando cada abordagem de forma complementar. Espera-se que o estudante saiba decidir qual tipo de banco usar em cada parte do sistema.

#### Critérios de Avaliação

1. **Definição clara de responsabilidades dos bancos**
   O projeto explicita quais dados são armazenados no banco relacional e quais no não relacional, com justificativa técnica.

2. **Modelagem relacional completa (DER)**
   O banco relacional possui DER bem estruturado, com entidades, relacionamentos e integridade corretamente definidos.

3. **Normalização do modelo relacional**
   Aplicação adequada de normalização (mínimo 3FN), com explicação das decisões.

4. **Modelagem do banco NoSQL**
   Estrutura não relacional organizada, adequada ao tipo de dado (ex: logs, eventos, dados dinâmicos).

5. **Coerência entre os dois modelos**
   Não há inconsistências ou conflitos entre os dados armazenados nos dois bancos.

6. **Integração entre os bancos**
   O sistema demonstra como os dados transitam ou se relacionam entre os dois modelos (mesmo que de forma indireta).

7. **Implementação de operações CRUD**
   Ambos os bancos são efetivamente utilizados para operações reais dentro do sistema.

8. **Uso adequado de cada tecnologia**
   O relacional é usado para dados estruturados e críticos; o NoSQL para dados flexíveis ou volumosos.

9. **Análise crítica da arquitetura adotada**
   O grupo avalia vantagens, limitações e possíveis melhorias da solução híbrida.

10. **Documentação técnica integrada**
    O projeto apresenta documentação completa dos dois bancos, incluindo DER, estrutura NoSQL e explicação da arquitetura geral.
