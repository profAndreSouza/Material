# Roteiro de Aula — Aula 04

**Componente curricular:** Banco de Dados I\
**Tema:** Do DER aos modelos lógico e físico; DDL e operações básicas de dados em Oracle 11g XE\
**Modalidade:** presencial, com atividade no laboratório na segunda metade\
**SGBD:** Oracle Database 11g Express Edition 11.2.0.2.0 — banco `XE`, esquema `BD001`\
**Ferramentas:** brModelo, DBeaver ou SQL*Plus\
**Duração:** 3h20\
**Apresentação:** [aula-04.js](../slides/aula-04.js) — 24 slides\
**Continuidade:** Aula 03, que introduziu associações com atributos, entidades associativas e chaves compostas ou próprias.

## Objetivos de aprendizagem

Ao final da aula, o estudante deverá ser capaz de:

1. Converter entidades, relacionamentos e atributos do DER em um esquema relacional com PKs e FKs.
2. Justificar como o tipo de relacionamento determina a posição das FKs e quando criar uma tabela associativa.
3. Distinguir modelo lógico de modelo físico e escolher tipos e restrições básicos para Oracle.
4. Usar `CREATE TABLE` e `ALTER TABLE` para criar e modificar tabelas.
5. Executar as operações básicas de CRUD: `INSERT`, `SELECT`, `UPDATE` e `DELETE`.
6. Distinguir a criação de um banco Oracle da criação das tabelas do esquema de um aluno.

## Organização do encontro — 3h20

| Bloco | Duração | Atividade |
|---|---:|---|
| 1. Retomada e conversão para o lógico | 35 min | Retomar matrícula e participação da Aula 03; aplicar as regras de mapeamento |
| 2. Do lógico ao físico em Oracle | 35 min | Tipos, PK/FK, restrições, `CREATE DATABASE`, `CREATE TABLE` e `ALTER TABLE` |
| 3. Demonstração de DDL e CRUD | 30 min | Executar um exemplo curto e discutir ordem e efeitos dos comandos |
| Intervalo e preparação | 10 min | Abrir o cliente e verificar a conexão |
| 4. Laboratório | 80 min | Converter um DER, criar tabelas Oracle e praticar CRUD |
| Fechamento e entrega | 10 min | Revisar e enviar diagrama, esquema e script |

Os 100 primeiros minutos introduzem o mapeamento e a implementação. Na segunda metade, a turma trabalha no laboratório com exercícios nos modelos lógico e físico usando Oracle.

## 1. Retomada da Aula 03

Na Aula 03, uma matrícula foi representada como vínculo entre ALUNO e DISCIPLINA, com semestre, data, nota e frequência. O diagrama pode mostrar o vínculo como relacionamento N:N com atributos ou como entidade associativa `MATRICULA`.

Antes de escrever SQL, responda:

- Qual regra identifica uma matrícula: `(id_aluno, id_disciplina)` ou `(id_aluno, id_disciplina, semestre)`?
- Cada matrícula pode pertencer a vários alunos? A vários componentes curriculares?
- `nota_final` descreve o aluno, a disciplina ou a matrícula naquele semestre?
- Se ALUNO ou DISCIPLINA forem removidos, o que deve acontecer aos vínculos?

As respostas definem a estrutura lógica e as restrições que depois implementaremos no Oracle.

## 2. Do DER ao modelo lógico relacional

O **DER** descreve entidades, propriedades, associações e regras do domínio. O **modelo lógico relacional** organiza essas informações em relações (tabelas), colunas e chaves, sem ainda escolher todos os detalhes próprios do Oracle.

### Regras de mapeamento

| Componente do DER | Representação no modelo relacional |
|---|---|
| Entidade | Uma tabela, com colunas para os atributos simples |
| Identificador da entidade | Chave primária (PK) |
| Atributo composto | Colunas para os componentes relevantes |
| Atributo multivalorado | Outra tabela, com FK para a entidade proprietária |
| Relacionamento 1:N | FK no lado N, apontando para a PK do lado 1 |
| Relacionamento 1:1 | FK em um dos lados; restrição `UNIQUE` preserva o máximo 1 |
| Relacionamento N:N | Tabela associativa com FKs para as entidades e colunas para atributos da associação |
| Atributo derivado | Em geral, calculado em consulta; só armazenar se houver uma regra de negócio que justifique |
| Entidade associativa | Tabela própria; chave composta ou identificador próprio conforme a regra de unicidade |

Cada par de cardinalidade continua importante. No lado N de uma relação 1:N, uma FK com `NOT NULL` exige que cada linha filha aponte para um pai; uma FK nullable deixa essa referência opcional. Isso não garante que cada pai tenha pelo menos uma linha filha: essa participação mínima do lado 1 exige outra regra ou controle. Uma FK `UNIQUE` em um relacionamento 1:1 impede que o mesmo pai seja associado a várias linhas filhas. Confira sempre quais regras as constraints representam e quais ainda dependem de lógica adicional.

### Exemplo 1 — associação de matrícula

Aplicando a decisão da Aula 03 de permitir uma matrícula por aluno, disciplina e semestre:

```text
ALUNO(id_aluno PK, nome)
DISCIPLINA(id_disciplina PK, nome)
MATRICULA(
  id_aluno PK/FK → ALUNO,
  id_disciplina PK/FK → DISCIPLINA,
  semestre PK,
  data_matricula,
  nota_final,
  frequencia
)
```

A PK composta impede repetir o mesmo aluno, disciplina e semestre. As FKs impedem matrículas para alunos ou disciplinas inexistentes. Se o domínio permitir mais de uma matrícula do mesmo aluno na mesma disciplina e semestre, a chave precisa refletir essa regra, por exemplo, com `id_matricula` próprio.

### Exemplo 2 — participação em projeto

A Aula 03 também propôs que cada participação guardasse função, carga semanal e data de início. Como uma pessoa pode voltar ao mesmo projeto, o exemplo usa identificador próprio.

```text
COLABORADOR(id_colaborador PK, nome)
PROJETO(id_projeto PK, nome)
PARTICIPACAO(
  id_participacao PK,
  id_colaborador FK → COLABORADOR,
  id_projeto FK → PROJETO,
  papel,
  horas_semanais,
  data_inicio
)
```

As colunas `papel`, `horas_semanais` e `data_inicio` pertencem a PARTICIPACAO porque descrevem a relação específica entre um colaborador e um projeto. Uma associação N:N sem tabela própria não consegue guardar essas informações por par.

## 3. Do modelo lógico ao modelo físico Oracle

O **modelo físico** especifica como o esquema será implementado em um SGBD. No Oracle, escolhemos tipos como `NUMBER`, `VARCHAR2` e `DATE`, nomeamos restrições e traduzimos PKs e FKs em comandos DDL.

### `CREATE DATABASE` e o ambiente desta disciplina

`CREATE DATABASE` cria e configura um banco de dados. No Oracle, essa operação é administrativa: exige uma instância, arquivos, parâmetros e privilégios de `SYSDBA`. Não faz parte da atividade da conta de aluno `BD001`.

O Oracle XE do Compose já inicializa o banco **`XE`**. Os alunos se conectam a esse banco e trabalham no próprio esquema de usuário **`BD001`**. Assim, na prática desta aula, criamos tabelas e objetos dentro do esquema; não criamos outro banco Oracle.

Em outros SGBDs, o comando `CREATE DATABASE nome;` pode ser utilizado por uma conta administrativa para criar uma base lógica. A sintaxe, os privilégios e o significado variam por produto; essa forma geral não deve ser enviada ao SQL*Plus Oracle como se fosse a operação de um usuário comum.

### Tipos e restrições usados no exercício

| Dado | Tipo Oracle | Exemplo |
|---|---|---|
| Identificador inteiro | `NUMBER(10)` | `id_aluno NUMBER(10)` |
| Texto de tamanho limitado | `VARCHAR2(n)` | `nome VARCHAR2(100)` |
| Data e hora | `DATE` | `data_matricula DATE` |
| Nota com duas casas decimais | `NUMBER(5,2)` | `nota_final NUMBER(5,2)` |

`PRIMARY KEY` identifica a linha e não aceita valores nulos nem duplicados. `FOREIGN KEY` exige que a referência exista na tabela apontada. `NOT NULL` exige um valor, `UNIQUE` impede repetição e `CHECK` limita os valores conforme uma condição.

### `CREATE TABLE`

O esquema lógico de projeto pode ser implementado em Oracle com tabelas que respeitam a ordem das dependências. Criamos primeiro as tabelas referenciadas e depois a associativa:

```sql
CREATE TABLE colaboradores (
    id_colaborador NUMBER(10),
    nome            VARCHAR2(100) NOT NULL,
    CONSTRAINT pk_colaboradores PRIMARY KEY (id_colaborador)
);

CREATE TABLE projetos (
    id_projeto NUMBER(10),
    nome       VARCHAR2(100) NOT NULL,
    CONSTRAINT pk_projetos PRIMARY KEY (id_projeto)
);

CREATE TABLE participacao (
    id_participacao  NUMBER(10),
    id_colaborador   NUMBER(10) NOT NULL,
    id_projeto       NUMBER(10) NOT NULL,
    papel            VARCHAR2(40) NOT NULL,
    horas_semanais   NUMBER(5,2) NOT NULL,
    data_inicio      DATE NOT NULL,
    CONSTRAINT pk_participacao PRIMARY KEY (id_participacao),
    CONSTRAINT fk_part_colaborador FOREIGN KEY (id_colaborador)
        REFERENCES colaboradores (id_colaborador),
    CONSTRAINT fk_part_projeto FOREIGN KEY (id_projeto)
        REFERENCES projetos (id_projeto),
    CONSTRAINT ck_part_horas CHECK (horas_semanais > 0)
);
```

Os nomes das constraints ajudam a identificar a regra caso o Oracle rejeite uma operação. As FKs são criadas depois das PKs referenciadas. Neste exemplo, `horas_semanais` deve ser maior que zero e as colunas obrigatórias usam `NOT NULL`.

### `ALTER TABLE`

`ALTER TABLE` muda uma tabela já criada. Se o caso passar a exigir a área do projeto:

```sql
ALTER TABLE projetos
    ADD (area VARCHAR2(60));
```

Para alterar o tamanho de uma coluna:

```sql
ALTER TABLE projetos
    MODIFY (nome VARCHAR2(150));
```

As alterações devem respeitar os dados existentes. Por exemplo, tornar uma coluna `NOT NULL` requer que as linhas já existentes satisfaçam a regra.

## 4. Operações básicas de CRUD

CRUD designa criar, consultar, atualizar e remover dados. Em SQL, as operações são `INSERT`, `SELECT`, `UPDATE` e `DELETE`.

```sql
-- C: criar linhas (Create)
INSERT INTO colaboradores (id_colaborador, nome)
VALUES (1, 'Ana Lima');

INSERT INTO projetos (id_projeto, nome, area)
VALUES (10, 'Sistema de Biblioteca', 'Sistemas');

INSERT INTO participacao
    (id_participacao, id_colaborador, id_projeto, papel,
     horas_semanais, data_inicio)
VALUES
    (100, 1, 10, 'Analista', 12.5, DATE '2026-11-05');

-- R: consultar linhas (Read)
SELECT id_participacao, papel, horas_semanais, data_inicio
FROM participacao
WHERE id_projeto = 10;

-- U: alterar uma linha (Update)
UPDATE participacao
SET horas_semanais = 15
WHERE id_participacao = 100;

-- D: remover uma linha (Delete)
DELETE FROM participacao
WHERE id_participacao = 100;
```

Confira a condição do `WHERE` antes de executar `UPDATE` ou `DELETE`: sem ela, todas as linhas da tabela podem ser afetadas. As linhas-pai só podem ser removidas se nenhuma FK impedir a exclusão. Em Oracle, `INSERT`, `UPDATE` e `DELETE` são DML; `SELECT` é a consulta (DQL).

### Transações e DDL no Oracle

Depois de validar as alterações DML, `COMMIT` confirma a transação e `ROLLBACK` desfaz alterações ainda não confirmadas. DDL, como `CREATE TABLE` e `ALTER TABLE`, tem comportamento de commit implícito no Oracle; `ROLLBACK` não desfaz a criação da tabela. Use a ordem de operações e teste com cuidado.

## 5. Laboratório — transformar, criar e consultar

**Tempo:** 80 minutos. **Organização:** individual ou em dupla. **Conexão:** Oracle XE, host `localhost`, porta `1521`, SID `xe`, usuário `BD001`, senha `BD001`. O roteiro de conexão e de inicialização está em [`../docker/README.md`](../docker/README.md).

### Atividade A — DER de equipe e projetos para modelo lógico

Parta do caso da Aula 03:

- Cada colaborador tem código e nome.
- Cada projeto tem código e nome.
- Um colaborador pode participar de vários projetos; cada projeto pode ter vários colaboradores.
- Cada participação registra papel, horas semanais e data de início.
- Uma pessoa pode sair de um projeto e voltar mais tarde.

**Entregáveis:** diagrama anotado; esquema relacional com PK e FK indicadas; justificativa da tabela associativa e do identificador escolhido. Verifique que os três atributos da participação não foram colocados apenas em COLABORADOR ou PROJETO.

### Atividade B — criar o modelo físico no Oracle

1. Conecte-se ao schema `BD001` no SQL Developer, DBeaver ou SQL*Plus.
2. Crie `COLABORADORES`, `PROJETOS` e `PARTICIPACAO` com os tipos e as restrições necessários.
3. Acrescente a coluna `AREA` a PROJETOS usando `ALTER TABLE`.
4. Crie um colaborador e um projeto; depois registre sua participação.
5. Consulte os dados com `SELECT` e `WHERE`.
6. Atualize as horas semanais com `UPDATE`; consulte novamente para confirmar.
7. Remova a participação com `DELETE`. Observe que as tabelas-pai permanecem.

**Entrega:** script SQL executado, resultado de uma consulta e breve justificativa das PKs, FKs e demais restrições. Se trabalhar em dupla, identifique os integrantes.

### Questões para conferência

1. Por que PARTICIPACAO precisa de duas FKs?
2. Por que `papel` e `horas_semanais` pertencem a PARTICIPACAO?
3. O que uma FK impede? Qual erro ocorre se o projeto informado não existir?
4. O que pode acontecer se você omitir o `WHERE` em um `UPDATE` ou `DELETE`?
5. Por que a conta `BD001` cria tabelas, mas não executa `CREATE DATABASE`?

## Fechamento

A passagem entre as três etapas deve preservar as mesmas regras: o DER descreve o domínio, o modelo lógico define relações e chaves, e o modelo físico implementa esse esquema com os recursos do Oracle. Na próxima etapa do curso, o esquema relacional será analisado quanto a redundâncias e formas normais.
