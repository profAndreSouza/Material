# Lista de exercícios 04 — Titanic: do CSV ao relatório Oracle

**Componente curricular:** Banco de Dados I  
**Conteúdos:** normalização, DDL, DML, funções nativas, agregações, HAVING, functions e views  
**Modalidade:** atividade prática individual ou em dupla  
**SGBD:** Oracle Database  
**Tempo sugerido:** 3h20  
**Aula relacionada:** [Aula 06 — Funções, agregações e views](../aulas/Aula_06.md)

## Objetivo

Transformar o arquivo de passageiros do Titanic em um esquema relacional, criar e carregar as tabelas no Oracle e produzir consultas de análise usando os conceitos da Aula 06.

## Dados

Use o arquivo de treino **train.csv** da competição [Titanic — Machine Learning from Disaster, no Kaggle](https://www.kaggle.com/competitions/titanic/data). O arquivo contém o atributo **Survived**, que indica o resultado conhecido no conjunto de treino. Não use **test.csv** para as consultas de sobrevivência: esse arquivo não traz o rótulo observado.

A página do Kaggle contém o dicionário das colunas e está sujeita às regras da competição. Baixe o arquivo conforme essas regras. Se o arquivo tiver sido fornecido pela disciplina, use essa cópia e mantenha o cabeçalho original.

O CSV traz estas colunas:

| Coluna | Significado para a atividade |
|---|---|
| PassengerId | Identificador do registro de passageiro no arquivo |
| Survived | 0 = não sobreviveu; 1 = sobreviveu |
| Pclass | Classe da passagem: 1, 2 ou 3 |
| Name | Nome registrado |
| Sex | Valor categórico, como male ou female |
| Age | Idade em anos; pode estar ausente e pode ter fração |
| SibSp | Contagem de irmãos e cônjuges a bordo |
| Parch | Contagem de pais e filhos a bordo |
| Ticket | Identificador textual da passagem |
| Fare | Tarifa registrada para o passageiro |
| Cabin | Cabine registrada; pode estar ausente e alguns valores contêm mais de um código |
| Embarked | Código do porto: C, Q ou S; pode estar ausente |

Os códigos de Pclass e Embarked têm significados descritos no dicionário do Kaggle. Registre as correspondências utilizadas no seu modelo. PassengerId identifica uma linha deste arquivo; não o trate como identificador universal de uma pessoa fora do conjunto.

## Orientações gerais

1. Preserve o arquivo CSV original. Faça a importação em uma tabela de estágio, sem corrigir ou preencher valores nessa primeira cópia.
2. Antes de criar o modelo final, registre as premissas sobre chaves, valores nulos, nomes, bilhetes e cabines.
3. Use Oracle SQL. Identificadores de bilhete devem ser armazenados como texto, mesmo quando contêm apenas algarismos.
4. Não substitua idade ausente por zero: isso faria um valor desconhecido parecer uma idade real.
5. Não deduza relações familiares individuais a partir de SibSp e Parch. Esses campos são contagens, não identificam quais passageiros são parentes.
6. Entregue os comandos em um script SQL, na ordem de execução, e um breve relatório com o esquema e as justificativas.

## Parte 1 — Inspeção do arquivo e tabela de estágio

### 1. Explore o conjunto bruto

Abra o CSV em uma ferramenta que preserve as colunas. Anote:

a. Quantas linhas de passageiros e quantas colunas há no arquivo?  
b. PassengerId é único? Há linhas duplicadas?  
c. Quantos valores estão ausentes em Age, Cabin e Embarked?  
d. Quais valores aparecem em Survived, Pclass, Sex e Embarked?  
e. Há valores de Cabin com mais de um código? Registre dois exemplos, se existirem.  
f. Por que Ticket deve ser tratado como texto, e não como número?

Não substitua os valores ausentes nem remova registros nesta etapa. Registre apenas o que observou.

### 2. Planeje e crie TITANIC_BRUTO

Crie uma tabela Oracle de estágio chamada TITANIC_BRUTO. Ela deve comportar os doze campos originais, ter PassengerId como chave primária e manter os tipos compatíveis com os dados.

Use esta referência de tipos como ponto de partida; justifique qualquer ajuste:

| Campo | Tipo Oracle sugerido | Observação |
|---|---|---|
| PassengerId | NUMBER(4) | Identificador |
| Survived | NUMBER(1) | Aceita somente 0 ou 1 |
| Pclass | NUMBER(1) | Aceita 1, 2 ou 3 |
| Name | VARCHAR2(120) | Texto |
| Sex | VARCHAR2(6) | Male ou female |
| Age | NUMBER(5,2) | Permite NULL e fração |
| SibSp | NUMBER(2) | Contagem inteira |
| Parch | NUMBER(2) | Contagem inteira |
| Ticket | VARCHAR2(40) | Texto, não número |
| Fare | NUMBER(10,4) | Valor decimal |
| Cabin | VARCHAR2(60) | Texto opcional |
| Embarked | CHAR(1) | Código opcional |

Inclua constraints adequadas para a chave e para os domínios simples que puder validar, como Survived e Pclass. Age, Cabin e Embarked podem conter NULL. Não use aspas duplas nos nomes dos identificadores.

### 3. Importe e confira

Importe train.csv para TITANIC_BRUTO pelo recurso de importação de CSV do seu cliente Oracle. Associe as colunas pelo cabeçalho e confira se campos vazios chegaram como NULL.

Use um importador que respeite campos entre aspas: nomes como “Braund, Mr. Owen Harris” contêm vírgula. Preserve o ponto decimal em Fare e não separe os campos manualmente pelo caractere de vírgula.

Depois da importação, escreva consultas que:

a. Contem os passageiros carregados.  
b. Contem quantas idades estão preenchidas e quantas estão ausentes.  
c. Verifiquem se PassengerId tem a mesma quantidade de valores distintos que de linhas.  
d. Contem registros por Survived, Pclass e Embarked.

Se os resultados indicarem perda de linhas ou conversão incorreta de números, corrija o processo de importação antes de prosseguir.

## Parte 2 — Dependências e normalização

Considere a tabela de estágio como uma representação direta do CSV:

~~~text
TITANIC_BRUTO(
  PassengerId, Survived, Pclass, Name, Sex, Age,
  SibSp, Parch, Ticket, Fare, Cabin, Embarked
)
~~~

### 4. Chave e dependências funcionais

Registre a chave candidata adotada e avalie estas dependências:

~~~text
PassengerId → Survived, Pclass, Name, Sex, Age,
              SibSp, Parch, Ticket, Fare, Cabin, Embarked
Pclass → descrição da classe
Embarked → nome do porto
~~~

a. Quais dependências já são expressas no arquivo e quais usam descrições acrescentadas do dicionário?  
b. O fato de um valor de Ticket aparecer em mais de uma linha prova que Ticket determina Fare ou os dados de um passageiro? Explique.  
c. Por que valores repetidos de Sex, por si só, não obrigam a criar uma tabela SEXO?  
d. Que anomalia pode ocorrer se descrições de classe ou de porto forem repetidas em todas as linhas?

### 5. Avalie 1FN, 2FN e 3FN

a. A tabela de estágio está na 1FN para o uso pretendido? Analise Name como texto completo e Cabin como campo que pode conter vários códigos.  
b. Se o sistema precisar pesquisar cada cabine separadamente, proponha PASSAGEIRO_CABINE com chave primária composta e chaves estrangeiras. Se o sistema só precisar exibir o texto original, declare essa premissa e explique a decisão.  
c. Como PassengerId é uma chave de uma coluna, há dependências parciais nessa tabela? Justifique se a verificação da 2FN é necessária neste caso.  
d. Explique as dependências transitivas que surgem quando descrições de classe e nomes de porto são acrescentados diretamente a cada passageiro.  
e. Apresente uma decomposição até a 3FN, com PKs e FKs. No mínimo, avalie as relações CLASSE_PASSAGEM, PORTO_EMBARQUE e PASSAGEIRO.  
f. Decida onde ficarão Ticket, Fare, SibSp e Parch. Não crie uma relação familiar sem informação que identifique as pessoas relacionadas.  
g. Explique como as junções pelas PKs e FKs permitem reconstruir o relatório de passageiro com classe e porto.

Use as seguintes correspondências do dicionário para preencher as tabelas de referência:

- Pclass: 1, 2 e 3 representam primeira, segunda e terceira classe.
- Embarked: C representa Cherbourg, Q representa Queenstown e S representa Southampton.

Os códigos ausentes de Embarked devem continuar ausentes. Não invente um porto para esses passageiros.

## Parte 3 — DDL e migração com DML

### 6. Crie o esquema final

Escreva DDL para as tabelas CLASSE_PASSAGEM, PORTO_EMBARQUE e PASSAGEIRO. Inclua:

- chave primária para cada tabela;
- chaves estrangeiras para classe e porto;
- NOT NULL onde a regra e os dados permitem;
- CHECK para Survived, Pclass, Sex e contagens não negativas;
- campos opcionais para dados ausentes;
- tipos numéricos com escala adequada para Age e Fare.

Se escolheu decompor Cabin, crie também CABINE e PASSAGEIRO_CABINE e marque a chave composta. Declare se a tabela PASSAGEIRO guarda o texto original ou se esse valor permanece somente em TITANIC_BRUTO.

Se decompor Cabin, mantenha o texto original no estágio e descreva como cada código individual será copiado para PASSAGEIRO_CABINE. Não descarte um valor composto sem registrar a transformação.

### 7. Carregue e valide os dados

Use DML para:

a. Inserir as três classes e os três portos nas tabelas de referência.  
b. Transferir os passageiros de TITANIC_BRUTO para o esquema final com INSERT INTO ... SELECT.  
c. Preservar NULL em idade, cabine ou porto quando o valor estiver ausente.  
d. Comparar a quantidade de passageiros na tabela de estágio com a quantidade no esquema final.  
e. Conferir que toda classe e todo porto não nulo apontam para uma linha válida.

Apresente as consultas usadas para demonstrar que a migração não perdeu passageiros.

### 8. Pratique UPDATE, DELETE e ROLLBACK

Em sua própria cópia do esquema:

a. Crie um SAVEPOINT antes de um teste.  
b. Altere temporariamente o nome de um passageiro com UPDATE e mostre a linha alterada.  
c. Insira e depois remova uma linha de teste com INSERT e DELETE. Use um PassengerId que não exista no conjunto.  
d. Execute ROLLBACK TO SAVEPOINT e confirme que a alteração de teste foi desfeita.  
e. Só então faça COMMIT das cargas que devem ser preservadas.

Faça os testes em dados de laboratório. Não execute UPDATE ou DELETE sem uma condição WHERE que identifique claramente as linhas desejadas.

## Parte 4 — Funções nativas e agregações

### 9. Funções nativas

Use as funções da Aula 06 em consultas sobre TITANIC_BRUTO ou sobre o esquema normalizado:

a. Mostre PassengerId, Sex em maiúsculas e os primeiros 25 caracteres de Name usando UPPER e SUBSTR.  
b. Mostre Fare arredondado para duas casas com ROUND. Compare com TO_CHAR para formatar o valor como texto.  
c. Exiba Cabin substituindo NULL por uma indicação como SEM REGISTRO com NVL.  
d. Mostre Age original e responda: seria correto usar NVL(Age, 0) como se idade ausente fosse zero? Justifique.  
e. Use uma função nativa diferente das listadas e explique a transformação realizada.

Na consulta de idade, conte também quantos valores de Age estão preenchidos. Não interprete a média das idades como se todos os 891 registros tivessem idade conhecida.

### 10. Agregações e GROUP BY

Escreva consultas para responder:

a. Quantos passageiros há por classe?  
b. Quantos sobreviveram por classe e sexo? Compare SUM(Survived) e COUNT(*).  
c. Qual é a tarifa média por classe e qual é a idade média por classe? Inclua COUNT(Age) para mostrar a quantidade de idades que entrou no cálculo.  
d. Qual é a menor e a maior tarifa por classe?  
e. Quais grupos de classe e sexo têm pelo menos 20 passageiros? Use HAVING COUNT(*) >= 20.

Em cada consulta agrupada, confira se todo campo selecionado que não está dentro de uma agregação aparece no GROUP BY.

### 11. Diferencie WHERE e HAVING

Escreva uma consulta que calcule, por classe e sexo, a quantidade de passageiros e a taxa média de sobrevivência entre adultos, considerando adultos como idade igual ou superior a 18 anos.

- Filtre as linhas de idade com WHERE antes de calcular os grupos.
- Use HAVING para manter apenas grupos com pelo menos 20 passageiros adultos.
- Arredonde a taxa percentual para duas casas.
- Ordene a saída pela taxa de sobrevivência, da maior para a menor.

Explique por que idade fica em WHERE e a contagem mínima fica em HAVING. Registre que os passageiros sem idade conhecida não entram neste cálculo específico.

## Parte 5 — Function armazenada e view

### 12. Crie uma função de domínio

Crie uma função armazenada chamada FN_TAXA_SOBREVIVENCIA que receba:

- a quantidade de sobreviventes;
- a quantidade total de passageiros do grupo;
- e devolva a taxa percentual arredondada para duas casas.

Declare parâmetros IN, retorno NUMBER e use RETURN no bloco PL/SQL. Decida como a função se comporta quando o total recebido é zero e registre essa regra.

Teste com valores conhecidos, por exemplo, 25 sobreviventes em um grupo de 100 passageiros. Depois, use a função em uma consulta agrupada por classe e sexo. Compare seu resultado com ROUND(AVG(Survived) * 100, 2).

### 13. Crie uma view de análise

Crie a view VW_RESUMO_TITANIC para reunir, por classe e sexo:

- total de passageiros;
- total de sobreviventes;
- quantidade de idades conhecidas;
- tarifa média;
- taxa de sobrevivência calculada pela FN_TAXA_SOBREVIVENCIA.

Depois:

a. Consulte a view como fonte de linhas.  
b. Filtre grupos com pelo menos 20 passageiros usando WHERE na consulta externa.  
c. Ordene pela taxa de sobrevivência.  
d. Explique por que a view comum não armazena uma cópia dos resultados.  
e. Altere temporariamente Survived ou Fare de um passageiro, consulte a view novamente e observe a agregação afetada; desfaça o teste com ROLLBACK.

Se sua view tiver junções, inclua as chaves necessárias na definição e nomes claros para as expressões calculadas.

## Entrega

Envie um único PDF ou documento com:

1. Nome do(a) estudante ou da dupla.
2. Observações da inspeção do CSV e das ausências.
3. Dependências, premissas e esquema final com PKs e FKs.
4. Script SQL completo, organizado em DDL, carga DML, consultas, function e view.
5. Resultados das consultas principais ou capturas legíveis do Oracle.
6. Explicação curta da diferença entre WHERE e HAVING e de como a view usa as tabelas de origem.

### Conferência antes de enviar

- [ ] O arquivo original foi preservado e a tabela de estágio contém as linhas importadas.
- [ ] Valores ausentes permaneceram NULL quando não havia informação.
- [ ] As regras de 1FN, 2FN e 3FN foram justificadas com dependências e premissas.
- [ ] As tabelas finais têm PKs, FKs e constraints coerentes.
- [ ] A carga de DML preserva a quantidade de passageiros.
- [ ] Há consultas com funções nativas, agregações, GROUP BY e HAVING.
- [ ] A function retorna a taxa esperada nos valores de teste.
- [ ] A view foi consultada e o comportamento de atualização foi explicado.
- [ ] UPDATE, DELETE, SAVEPOINT e ROLLBACK foram demonstrados em dados de teste.


## Fontes dos dados

- [Competição oficial Titanic — página de dados e dicionário do Kaggle](https://www.kaggle.com/competitions/titanic/data).
- Para a sintaxe Oracle, consulte as referências de [funções nativas](https://docs.oracle.com/cd/E11882_01/server.112/e41084/functions001.htm), [agregações](https://docs.oracle.com/cd/E11882_01/server.112/e41084/functions003.htm), [CREATE FUNCTION](https://docs.oracle.com/cd/E11882_01/appdev.112/e25519/create_function.htm) e [CREATE VIEW](https://docs.oracle.com/cd/E11882_01/server.112/e41084/statements_8004.htm).
