# Roteiro de Aula — Aula 01

**Componente curricular:** Banco de Dados I — Fatec Sorocaba\
**Curso:** Análise e Desenvolvimento de Sistemas, 1º semestre — Matriz R-11\
**Docente:** Prof. André Souza\
**Tema:** Fundamentos de persistência, níveis de abstração e modelagem conceitual\
**Modalidade:** remota síncrona pelo Teams\
**Recursos:** apresentação, papel e caneta; entregas pelo Teams\
**Duração:** 3h20\
**Apresentação de referência:** [aula-01.js](../slides/aula-01.js) — 30 slides

## Objetivos de aprendizagem

Ao final, o estudante deverá ser capaz de:

1. Distinguir dado, informação, conhecimento e metadado.
2. Reconhecer dados estruturados, semiestruturados e não estruturados.
3. Explicar o papel de um SGBD na persistência, integridade e acesso compartilhado aos dados.
4. Diferenciar os níveis externo, conceitual e interno da arquitetura ANSI/SPARC e as independências lógica e física.
5. Distinguir os modelos conceitual, lógico e físico de um projeto, assim como MER e DER.
6. Extrair entidades, atributos, relacionamentos e cardinalidades de um enunciado simples.

## Organização do encontro

| Etapa | Slides | Duração | Conteúdo e atividade |
|---|---|---:|---|
| Fundamentos | 1–17 | 60 min | Loja Conecta, apresentação da disciplina, dados, SGBD e ANSI/SPARC |
| Fixação 1 | 18 | 40 min | Quatro questões, individualmente ou em dupla, com entrega no Teams |
| Correção e modelagem | 19–28 | 60 min | Correção por 15 min; modelagem, MER/DER e PetCare nos 45 min seguintes |
| Fixação 2 e encerramento | 29–30 | 40 min | DER da Biblioteca Saber, com correção na Aula 02 |

Durante as atividades, permaneça na reunião, registre as respostas e use o chat para dúvidas. Identifique as entregas com nome e turma. A prática inicial é conceitual: não exige abrir um banco nem executar SQL.

## 1. Situação de abertura — Loja Conecta

A Loja Conecta começou com uma planilha. Com as vendas pela internet, cada setor passou a manter seus próprios registros: vendas cadastra clientes e pedidos, estoque controla produtos, financeiro copia pedidos para registrar pagamentos e atendimento consulta conversas separadas.

Agora o mesmo endereço aparece de formas diferentes, dois vendedores podem reservar a última unidade disponível, pagamentos ficam sem associação clara com pedidos e o relatório mensal exige reunir vários arquivos.

**Discussão:** qual problema parece mais grave? Que dados e regras precisam ser compartilhados entre os setores?

Use esse caso durante o bloco para relacionar os conceitos às necessidades da loja:

- **Persistência:** o pedido continua registrado depois que o aplicativo fecha.
- **Integridade:** pagamentos precisam apontar para pedidos válidos; as regras de estoque devem ser respeitadas.
- **Acesso e desempenho:** os setores precisam localizar e consultar os registros.
- **Concorrência:** operações simultâneas precisam de controle para evitar resultados inconsistentes.

## 2. Apresentação da disciplina

O percurso apresentado nos slides parte da análise de requisitos e chega à implementação e consulta de dados: fundamentos de bancos e SGBDs; modelagem ER; modelos conceitual, lógico e físico; normalização; integridade; SQL DDL, DML e DQL.

As competências trabalhadas são planejar modelos que representem regras de negócio e implementar estruturas e consultas em um SGBD. O foco da disciplina é o modelo relacional.

| Bloco previsto nos slides | Conteúdo |
|---|---|
| Aulas 1 a 3 | Fundamentos e modelagem conceitual |
| Aula 4 e oficinas | Mapeamento lógico relacional, PKs e FKs |
| Aula 5 | Normalização: 1FN, 2FN e 3FN |
| Aulas 6 a 10 | Implementação e consultas SQL |

Esse quadro descreve o percurso do semestre; os roteiros disponíveis nesta pasta correspondem às aulas 1, 2 e 3.

### Avaliação apresentada nos slides

`MF = (Média dos Exercícios × 0,5) + (Prova Prática Final × 0,5)`

- Atividades práticas contínuas: 50%.
- Prova prática final individual em laboratório: 50%, prevista para 27/11/2026.
- Recuperação: prevista para 04/12/2026.
- Aprovação: média final mínima de 6,0 e frequência mínima de 75%.

## 3. Dado, informação, conhecimento e metadado

| Conceito | Significado | Exemplo da Loja Conecta |
|---|---|---|
| Dado | Valor registrado, ainda sem contexto suficiente para interpretação | `450,00` |
| Informação | Dado associado a um contexto | O pedido PED-1024 de Ana totalizou R$ 450,00 e aguarda pagamento |
| Conhecimento | Interpretação de informações que orienta decisões | Identificar um padrão de cancelamento e ajustar a separação dos pedidos |
| Metadado | Descrição da estrutura, dos tipos e das restrições dos dados | `valor_total` é decimal, tem duas casas decimais e não admite valor negativo |

Os metadados descrevem os registros; não são uma etapa posterior ao conhecimento. No SGBD, o catálogo mantém informações sobre tabelas, colunas, tipos e restrições.

## 4. Tipos de dados e paradigmas de armazenamento

| Tipo | Característica | Exemplo |
|---|---|---|
| Estruturado | Campos e organização previamente definidos | Cadastro de clientes e pedidos em tabelas |
| Semiestruturado | Organização por marcadores, pares chave-valor ou hierarquias | Resposta JSON de um serviço de frete |
| Não estruturado | Conteúdo sem organização tabular direta para as consultas pretendidas | Foto de produto, áudio ou vídeo |

Nos **bancos relacionais**, os dados são representados em relações, usualmente apresentadas como tabelas com linhas e colunas. Chaves primárias identificam registros e chaves estrangeiras representam referências entre eles. Oracle, PostgreSQL e MySQL são exemplos citados na apresentação.

O termo **NoSQL** reúne diferentes modelos: documentos, chave-valor, famílias de colunas e grafos. Nos slides, aparecem como exemplos MongoDB, Redis, Cassandra e Neo4j. A escolha depende da estrutura dos dados, das consultas, das regras de consistência e da distribuição necessária; a classificação SQL ou NoSQL, isoladamente, não determina as garantias de uma solução.

No caso da loja, clientes, pedidos e pagamentos ajudam a discutir integridade relacional; um catálogo heterogêneo ilustra necessidades de estrutura mais flexível. Nesta disciplina, o aprofundamento será em modelagem relacional e SQL.

## 5. Arquivos isolados e SGBD

Um **banco de dados** é uma coleção organizada de dados relacionados. O **SGBD** é o software que permite definir, armazenar, consultar e controlar esses dados.

| Problema dos arquivos separados | Recurso do SGBD que ajuda a tratá-lo |
|---|---|
| Cópias divergentes do cadastro | Dados compartilhados e redundância controlada |
| Validações diferentes em cada aplicação | Restrições de integridade centralizadas |
| Alterações simultâneas conflitantes | Controle de concorrência e transações |
| Programas dependentes do formato físico do arquivo | Separação entre visões, esquema e armazenamento |
| Estrutura conhecida apenas pelo programa | Catálogo de metadados |

As propriedades **ACID** apresentadas no bloco são atomicidade (a transação é concluída integralmente ou desfeita), consistência (preservação das restrições), isolamento (controle da interferência entre transações) e durabilidade (persistência das alterações confirmadas). As regras de negócio precisam ser modeladas e implementadas para que o banco possa aplicá-las.

## 6. Arquitetura ANSI/SPARC e independência de dados

| Nível | Responsabilidade | Exemplo |
|---|---|---|
| Externo | Visões de usuários e aplicações | Atendimento consulta clientes e pedidos; financeiro consulta pagamentos |
| Conceitual | Esquema global dos dados e suas restrições | Estrutura integrada de clientes, pedidos e pagamentos |
| Interno | Organização física do armazenamento | Arquivos, blocos e índices |

**Independência lógica:** possibilidade de alterar o esquema conceitual preservando as visões externas e aplicações que não dependem da mudança. Exemplo: incluir uma estrutura de auditoria sem mudar a consulta usada pelo atendimento.

**Independência física:** possibilidade de modificar o armazenamento sem mudar o esquema conceitual e as consultas das aplicações. Exemplo: criar um índice ou reorganizar arquivos mantendo a interface de acesso aos dados.

## 7. Fixação 1 — fundamentos de bancos de dados

**Tempo:** 40 minutos. **Organização:** individual ou em dupla. **Entrega:** foto ou arquivo pelo canal indicado no Teams.

1. Use o valor `450,00` para criar um exemplo de dado e de informação. Cite dois metadados necessários para armazená-lo.
2. Classifique cadastro de pacientes, laudo em JSON e imagem de tomografia como estruturado, semiestruturado ou não estruturado.
3. Explique dois problemas de manter cadastros em planilhas separadas e como um SGBD ajuda a resolvê-los.
4. A troca do disco e a reorganização dos arquivos obrigam a alterar o sistema? Justifique com a arquitetura ANSI/SPARC.

Na abertura do segundo bloco, a correção retoma contexto, metadados, integridade centralizada e independência física. Cada resposta deve explicar a relação entre o conceito e o exemplo.

## 8. Modelos conceitual, lógico e físico

Esses modelos são etapas do projeto de banco de dados. Essa sequência tem uma finalidade diferente dos três níveis da arquitetura ANSI/SPARC.

| Modelo | Questão principal | Elementos | Resultado |
|---|---|---|---|
| Conceitual | Quais dados e regras representam o negócio? | Entidades, atributos, relacionamentos e restrições | DER |
| Lógico relacional | Como representar o modelo em relações? | Tabelas, atributos, PKs e FKs | Esquema relacional |
| Físico | Como implementar no SGBD escolhido? | Tipos concretos, comandos DDL, índices e armazenamento | Scripts e estruturas implementadas |

O modelo conceitual independe do SGBD; o lógico adota um modelo de dados, como o relacional; o físico depende da tecnologia escolhida. Os trechos de SQL dos slides ilustram essa última etapa e não são uma atividade de execução nesta aula.

## 9. MER, DER e método de cinco etapas

O **MER (Modelo Entidade-Relacionamento)** descreve entidades, atributos, relacionamentos e restrições do domínio. O **DER (Diagrama Entidade-Relacionamento)** é sua representação gráfica.

Na notação Chen, retângulos representam entidades, losangos representam relacionamentos e elipses representam atributos. Identificadores distinguem as ocorrências de uma entidade. Cardinalidades indicam quantas participações são permitidas ou exigidas.

Siga o método usado na apresentação:

1. Ler o texto narrativo dos requisitos.
2. Identificar entidades, atributos e identificadores.
3. Extrair regras de negócio e cardinalidades mínimas e máximas.
4. Organizar o modelo conceitual.
5. Desenhar e revisar o DER.

Substantivos sugerem entidades ou atributos; verbos sugerem relacionamentos; expressões como “exatamente um” e “um ou vários” ajudam a determinar cardinalidades. Essa análise produz candidatos que devem ser confirmados pelas regras do domínio.

Neste roteiro, o par `(mínimo, máximo)` junto à entidade descreve quantas vezes uma ocorrência dela participa do relacionamento. Por exemplo, `CLIENTE (1,N)` em `POSSUI` significa que cada cliente participa de uma ou várias associações com pets.

## 10. Exemplo guiado — Clínica Veterinária PetCare

A clínica cadastra clientes com código, nome completo e telefone. Cada cliente possui um ou vários pets. Cada pet tem código de registro, nome e espécie e deve estar associado a exatamente um cliente.

| Elemento | Definição |
|---|---|
| CLIENTE | `id_cliente` (identificador), `nome`, `telefone` |
| PET | `id_pet` (identificador), `nome`, `especie` |
| POSSUI | Relacionamento entre CLIENTE e PET |
| Participação de CLIENTE | `(1,N)`: pelo menos um pet, conforme a regra adotada nos slides |
| Participação de PET | `(1,1)`: exatamente um cliente |

```text
CLIENTE (1,N) — POSSUI — (1,1) PET
```

Desenhe as entidades, conecte os atributos e marque os identificadores. Acrescente `POSSUI` e os pares de cardinalidade. Leia o diagrama em voz alta e confronte cada regra com o enunciado. A associação tem cardinalidade máxima 1:N.

O professor conduz a construção por compartilhamento de tela, conforme o exemplo da apresentação. A prática concentra-se no DER; chaves estrangeiras serão tratadas no mapeamento lógico.

## 11. Fixação 2 — Biblioteca Saber

**Tempo:** 40 minutos. **Organização:** individual, com início no encontro remoto e correção na Aula 02 presencial.

A Biblioteca Municipal Saber deseja informatizar o catálogo. Cada livro tem código identificador, título e ano de publicação. Cada livro é publicado por exatamente uma editora. Para a editora, registram-se código, razão social e cidade sede. Uma editora pode publicar múltiplos livros do acervo.

**Entrega:** DER na notação Chen, com entidades, atributos identificadores e descritivos, relacionamento e cardinalidades mínimas e máximas. Aplique o método de cinco etapas e registre a hipótese usada para a participação mínima da editora: ela pode ser cadastrada antes de possuir livros no acervo?

A correção da Aula 02 retoma essa decisão e sua consequência no diagrama.

## Encerramento e referências

Na próxima aula, serão retomados a Biblioteca Saber, os tipos de atributos, as entidades fortes e fracas e a construção de modelos no brModelo.

Referências apresentadas nos slides: **Elmasri e Navathe, Sistemas de Banco de Dados**; **Silberschatz e colaboradores, Sistema de Banco de Dados**; **Martelli e colaboradores, Modelagem e Banco de Dados**.
