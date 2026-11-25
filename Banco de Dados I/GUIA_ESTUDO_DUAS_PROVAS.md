# Guia de estudo — Duas provas de Banco de Dados I

Cada prova terá **cinco exercícios**: uma avaliação conceitual no papel e outra prática no Oracle. Este guia organiza a revisão nessas duas frentes, com cinco propostas de treino para cada uma. O conteúdo foi limitado às aulas e apresentações das Aulas 01 a 05.

> **Como usar:** percorra os blocos de estudo em ordem e faça os exercícios de memória, sem consultar o roteiro durante a primeira tentativa. Depois, confira as lacunas na aula correspondente. As datas e a duração das provas não foram informadas; distribua os blocos no tempo disponível.

## 1. Prova conceitual — papel

Prepare-se para **definir, comparar, interpretar enunciados, desenhar DER e justificar decisões de modelagem**. Treine respostas com exemplos e cardinalidades, não apenas a memorização de nomes.

### Aula 01 — Fundamentos e modelos

- Dado, informação, conhecimento e metadado.
- Dados estruturados, semiestruturados e não estruturados.
- Arquivos isolados e SGBD: persistência, integridade e acesso compartilhado.
- Arquitetura ANSI/SPARC: níveis externo, conceitual e interno; independência lógica e física.
- Diferenças entre modelos conceitual, lógico e físico.
- Diferença entre MER (modelo) e DER (diagrama).
- Método de cinco etapas para sair de um enunciado e chegar ao modelo conceitual.
- Identificação de entidades, atributos, relacionamentos e cardinalidades em casos simples.

**Treino no papel:** explique por que uma planilha isolada causa inconsistências e converta um pequeno enunciado, como Biblioteca Saber ou PetCare, em entidades, atributos e relacionamentos.

### Aula 02 — Atributos, entidades e cardinalidades

- Atributos simples, compostos, monovalorados, multivalorados, derivados e identificadores.
- Entidades fortes e fracas; identificador parcial e entidade proprietária.
- Cardinalidade mínima (participação opcional ou obrigatória) e máxima (uma ou várias).
- Pares (0,1), (1,1), (0,N) e (1,N).
- Relacionamentos 1:1, 1:N e N:N.
- Atributos que descrevem a associação: por exemplo, quantidade e preço efetivo em um item de pedido.

**Treino no papel:** desenhe uma entidade fraca com sua relação identificadora; leia uma frase de negócio e determine as cardinalidades dos dois lados; justifique a que entidade ou relacionamento pertence cada atributo.

### Aula 03 — Relações especiais e entidade associativa

- Auto-relacionamento: mesma entidade em ambos os lados, papéis distintos e cardinalidades. Exemplos: orientador/orientado, supervisor/supervisionado, projeto dependente/pré-requisito.
- Restrições do domínio em auto-relacionamentos, como impedir que um projeto dependa de si próprio.
- Especialização: superclasse e subtipos; atributos comuns e específicos.
- Completude: total ou parcial.
- Disjunção: disjunta ou sobreposta.
- Relacionamento N:N com atributos próprios.
- Entidade associativa: quando a associação ganha identidade ou ciclo de vida próprio; transformação do N:N em duas relações 1:N.
- Chave composta ou identificador próprio, de acordo com as regras de unicidade e histórico.

**Treino no papel:** classifique especializações como total/parcial e disjunta/sobreposta, justificando pelas ocorrências permitidas. Modele matrícula, venda ou participação em projeto e indique a chave da associação.

### Aula 04 — Do DER ao modelo relacional e físico

- Regras de conversão: entidade vira tabela; identificador vira PK; atributo composto vira componentes relevantes; atributo multivalorado normalmente gera outra tabela.
- Relacionamento 1:N: FK no lado N.
- Relacionamento 1:1: FK em um lado; UNIQUE pode preservar o máximo de uma associação.
- Relacionamento N:N: tabela associativa com FKs e atributos da associação.
- Entidade associativa e regra para escolher chave composta ou identificador próprio.
- Diferença entre modelo lógico e modelo físico.
- O que PK, FK, NOT NULL, UNIQUE e CHECK garantem; limites das constraints para regras entre várias tabelas.
- Ordem de criação: tabelas referenciadas antes das tabelas que contêm suas FKs.

**Treino no papel:** transforme o DER de participação em projetos em tabelas. Marque PKs e FKs e explique onde ficam papel, horas_semanais e data_inicio.

### Aula 05 — Teoria relacional e normalização

- Relações, chaves e dependências funcionais (X → Y como regra do domínio).
- Chave candidata e dependência completa, parcial e transitiva.
- Anomalias de inserção, atualização e exclusão associadas à redundância.
- 1FN: valores atômicos no contexto do sistema; sem listas ou grupos repetidos em colunas.
- 2FN: relação em 1FN; atributos não-chave dependem da chave candidata inteira; atenção a chaves compostas.
- 3FN: relação em 2FN; atributos não-chave não dependem transitivamente de uma chave por outro atributo não-chave.
- Decomposição, preservação dos fatos e junções sem perda de associações.
- Desnormalização como decisão deliberada com custos de consistência.

**Treino no papel:** normalize os exemplos de pedido, localização e matrícula da aula. Escreva as dependências antes de propor tabelas e marque PKs/FKs em cada etapa. A aula aprofunda 1FN, 2FN e 3FN; BCNF e formas posteriores aparecem apenas como panorama.

## 2. Prova prática — Oracle

Treine o fluxo da Aula 04 em um script limpo: **criar tabelas, inserir dados relacionados, consultar, atualizar, excluir e controlar a transação**.

### Ambiente e conceitos específicos do roteiro

- Conectar ao banco Oracle XE já inicializado e trabalhar no esquema do aluno BD001.
- A conta de aluno cria tabelas no esquema; não cria outro banco com CREATE DATABASE.
- Criar primeiro as tabelas-pai e depois as tabelas-filhas que apontam para elas.
- Acompanhar cada FK até sua PK referenciada e não inserir uma linha filha antes das linhas-pai correspondentes.

### Tipos e comandos trabalhados na aula

| Para revisar | Conteúdo do roteiro |
|---|---|
| Tipos Oracle | NUMBER(10), VARCHAR2(n), DATE, NUMBER(5,2) |
| DDL | CREATE TABLE, ALTER TABLE ... ADD, ALTER TABLE ... MODIFY |
| Restrições | PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK |
| Inserir | INSERT INTO ... VALUES (...) |
| Consultar | SELECT ... FROM ... WHERE ...; SELECT com JOIN ... ON ... |
| Atualizar | UPDATE ... SET ... WHERE ... |
| Excluir | DELETE FROM ... WHERE ... |
| Transação | COMMIT confirma DML; ROLLBACK desfaz DML ainda não confirmado |

No roteiro Oracle, comandos DDL como CREATE TABLE e ALTER TABLE têm comportamento de commit implícito; ROLLBACK não desfaz a criação ou alteração estrutural.

### Roteiro de prática sugerido

Use o caso de COLABORADORES, PROJETOS e PARTICIPACAO da Aula 04:

1. Escreva o esquema lógico com PKs e FKs antes do SQL.
2. Crie COLABORADORES e PROJETOS.
3. Crie PARTICIPACAO com suas referências, colunas obrigatórias e regra CHECK para horas positivas.
4. Use ALTER TABLE para acrescentar AREA a PROJETOS; pratique também a alteração do tamanho de NOME.
5. Insira um colaborador e um projeto antes de inserir a participação. Para data, revise o literal Oracle DATE 'AAAA-MM-DD'.
6. Consulte a participação com SELECT e WHERE.
7. Altere as horas com UPDATE; consulte de novo para conferir.
8. Exclua a participação com DELETE. Releia a condição WHERE antes de executar.
9. Teste uma transação DML: faça uma alteração, confira o resultado e decida entre COMMIT e ROLLBACK.

**SELECT com JOIN — exemplo da Aula 05:** pratique a consulta que recompõe o endereço pelas chaves relacionadas:

```sql
SELECT p.nome, c.nome_cidade,
       e.nome_estado, pa.nome_pais
FROM pessoa p
JOIN cidade c ON c.cidade_id = p.cidade_id
JOIN estado e ON e.estado_id = c.estado_id
JOIN pais pa ON pa.pais_id = e.pais_id;
```

No SELECT, confira cada `JOIN ... ON`: a condição liga a PK de uma tabela à FK correspondente da tabela relacionada.

**Meta de treino:** conseguir reconstruir o exercício a partir do enunciado e explicar por que cada coluna, tipo, PK, FK e restrição está ali.

