# Projeto Final: Banco de Dados Relacional


## Objetivo do Projeto

O projeto final tem como objetivo a implementação prática dos conceitos estudados ao longo da disciplina de Banco de Dados Relacional. O aluno deverá criar e documentar um sistema de banco de dados relacional, aplicando as técnicas de modelagem, normalização e manipulação de dados por meio de DDL, DML e DQL. Adicionalmente, será concedida bonificação para a utilização de comandos DCL e DTL no projeto.

Este projeto será realizado em grupos de 1 a 4 pessoas e deve ser entregue com a documentação conforme as normas da ABNT.

## Tópicos a Serem Implementados

1. **Modelagem de Dados**

   * **Entidades, Atributos e Relacionamentos**: O grupo deve escolher um tema e realizar a modelagem conceitual do banco de dados.
   * **Diagrama Entidade-Relacionamento (DER)**: A modelagem conceitual deve ser representada por meio de um diagrama ER. O DER deve incluir todas as entidades, atributos, e relacionamentos necessários para a implementação do banco de dados.

2. **Normalização**

   * O banco de dados deve ser normalizado até a **Terceira Forma Normal (3NF)**. O aluno deverá apresentar justificativas para a escolha das formas normais e como a normalização foi aplicada.

3. **Scripts de DDL, DML e DQL**

   * **DDL (Data Definition Language)**: O projeto deve incluir scripts para a criação de tabelas, definições de chaves primárias e estrangeiras, e quaisquer outras restrições necessárias.
   * **DML (Data Manipulation Language)**: O aluno deverá implementar scripts para inserção, atualização e deleção de dados nas tabelas criadas.
   * **DQL (Data Query Language)**: O projeto deverá conter consultas SQL para recuperar informações relevantes do banco de dados.

4. **Bonificação para DCL e DTL**

   * **DCL (Data Control Language)**: Será concedida uma bonificação extra para quem implementar controle de acesso, utilizando os comandos `GRANT` e `REVOKE` para gerenciar permissões de acesso.
   * **DTL (Data Transaction Language)**: A bonificação será concedida para quem implementar o controle de transações, utilizando os comandos `BEGIN`, `COMMIT`, `ROLLBACK` e `SAVEPOINT` para garantir a integridade dos dados durante as operações.

## Escolha da Temática

* O tema do banco de dados pode ser escolhido livremente pelo grupo, desde que seja viável para a implementação dos requisitos exigidos. Alguns exemplos de temas podem incluir:

  * Sistema de gerenciamento de vendas (e-commerce)
  * Sistema de gerenciamento de biblioteca
  * Sistema de gerenciamento de hospital
  * Sistema de gerenciamento de estoque
  * Sistema de reservas de hotéis
  * Outros temas relacionados a áreas de interesse do grupo

## Requisitos Técnicos

* O banco de dados deve ser implementado no PostgreSQL ou em outro sistema de banco de dados relacional de preferência do grupo.
* O código e scripts devem ser entregues em formato digital, organizados em um repositório GitHub, com um arquivo README detalhado contendo instruções sobre a execução do banco de dados.
* A entrega final deve ser feita dentro do prazo estipulado pela disciplina.

## Entrega

O projeto deve ser entregue com a seguinte documentação, conforme o formato ABNT:

### Estrutura do Documento

1. **Capa**

   * Título do projeto
   * Nome dos integrantes do grupo
   * Nome do professor
   * Nome da disciplina
   * Data de entrega

2. **Sumário**

   * Listagem dos capítulos e subseções

3. **Introdução**

   * Apresentação do tema escolhido
   * Objetivo do projeto
   * Descrição geral do banco de dados

4. **Modelagem Conceitual**

   * Descrição das entidades, atributos e relacionamentos
   * Diagrama Entidade-Relacionamento (DER)

5. **Modelagem Lógica**

   * Explicação sobre as transformações feitas no DER para chegar à estrutura do banco de dados (tabelas, chaves primárias, estrangeiras, etc.)
   * Discussão sobre a normalização e a justificativa para a escolha das formas normais

6. **Estrutura do Banco de Dados**

   * Apresentação dos scripts de DDL (criação das tabelas, definição de chaves, etc.)
   * Descrição de cada tabela e seus atributos
   * Relacionamento entre tabelas

7. **Manipulação de Dados**

   * Apresentação de scripts DML (inserção, atualização e deleção de dados)
   * Exemplos de consultas DQL

8. **Controle de Acesso (Bonificação DCL)**

   * Implementação de comandos DCL (GRANT, REVOKE)

9. **Controle de Transações (Bonificação DTL)**

   * Implementação de comandos DTL (BEGIN, COMMIT, ROLLBACK, SAVEPOINT)

10. **Conclusão**

    * Resumo do processo de desenvolvimento
    * Lições aprendidas
    * Possíveis melhorias no projeto

11. **Referências**

    * Referências bibliográficas utilizadas para embasar o projeto

12. **Apêndices** (se necessário)

    * Códigos completos, diagramas ou outros materiais adicionais

---

## Critérios de Avaliação

1. **Qualidade da Modelagem**: Clareza e adequação do diagrama ER e da modelagem lógica.
2. **Normalização**: Aplicação correta das formas normais até a 3NF.
3. **Execução dos Scripts**: Correção e eficiência dos scripts DDL, DML e DQL.
4. **Inovação no uso de DCL e DTL**: Implementação de controle de acesso e controle de transações (se aplicável).
5. **Documentação**: Qualidade e organização da documentação no formato ABNT.

## Prazo de Entrega

* O prazo de entrega é o dia 20 de junho. Certifique-se de que todos os arquivos estão organizados e disponíveis no repositório GitHub.
