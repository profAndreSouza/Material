# Roteiro de Aula — Aula 06

**Componente curricular:** Banco de Dados I  
**Tema:** Funções nativas, agregações, funções armazenadas e views  
**Modalidade:** assíncrona, com leitura orientada e prática individual  
**SGBD:** Oracle Database, com sintaxe compatível com Oracle 11g  
**Ferramentas:** Oracle Live SQL, SQL Developer ou SQL*Plus  
**Duração sugerida:** 3h20  
**Apresentação:** [aula-06.js](../slides/aula-06.js) — 34 slides  
**Continuidade:** após normalização, vamos consultar os dados e criar objetos reutilizáveis no banco.

## Como estudar esta aula

Siga os blocos na ordem. Para cada exemplo, leia primeiro a pergunta respondida pela consulta; depois acompanhe as cláusulas e execute o SQL no Oracle. As atividades de fixação aparecem antes do gabarito, no fim do roteiro. Se ocorrer um erro, confira os nomes de tabelas e colunas e a posição de cada cláusula.

| Etapa | Tempo | O que fazer |
|---|---:|---|
| Preparação e retomada | 15 min | Abrir o ambiente Oracle e criar as tabelas de exemplo |
| Funções nativas | 35 min | Testar funções de texto, número, data e valores nulos |
| Prática guiada | 20 min | Escrever consultas por linha e conferir os resultados |
| Agregações e GROUP BY | 35 min | Resumir funcionários por departamento |
| WHERE e HAVING | 25 min | Comparar filtro de linhas com filtro de grupos |
| Pausa | 10 min | — |
| Função armazenada em PL/SQL | 25 min | Criar e chamar uma função própria |
| Views | 20 min | Criar e consultar uma visão de relatório |
| Desafio e autoavaliação | 15 min | Resolver a atividade integrada e conferir o gabarito |

## Objetivos de aprendizagem

Ao final do estudo, você deverá ser capaz de:

1. Aplicar funções nativas do Oracle para tratar texto, números, datas e valores nulos.
2. Diferenciar uma função escalar, com resultado por linha, de uma agregação, que resume várias linhas.
3. Combinar COUNT, SUM, AVG, MIN e MAX com GROUP BY.
4. Escolher entre WHERE e HAVING conforme o momento em que o filtro deve ocorrer.
5. Criar uma função armazenada simples em PL/SQL e chamá-la em um SELECT.
6. Criar uma view, consultar seus dados e explicar como ela se relaciona com as tabelas de origem.

## Pré-requisitos

Esta aula parte do uso básico de SELECT, WHERE, ORDER BY, INSERT, criação de tabelas e chaves. Os exemplos usam duas tabelas pequenas, criadas abaixo; não dependem da base de funcionários da apostila.

## 1. Preparação do ambiente e dos dados

Execute este bloco uma única vez em um esquema de estudo vazio. Ele cria três departamentos e oito funcionários. A coluna COMISSAO aceita NULL para observar como as funções lidam com um valor ausente.

~~~sql
CREATE TABLE departamento (
    id_departamento   NUMBER(4)
        CONSTRAINT pk_departamento PRIMARY KEY,
    nome_departamento VARCHAR2(40) NOT NULL
);

CREATE TABLE funcionario (
    id_funcionario   NUMBER(4)
        CONSTRAINT pk_funcionario PRIMARY KEY,
    nome             VARCHAR2(60) NOT NULL,
    cargo            VARCHAR2(40) NOT NULL,
    salario          NUMBER(10, 2) NOT NULL,
    comissao         NUMBER(10, 2),
    data_admissao    DATE NOT NULL,
    id_departamento  NUMBER(4) NOT NULL,
    CONSTRAINT fk_func_depto
        FOREIGN KEY (id_departamento)
        REFERENCES departamento (id_departamento),
    CONSTRAINT ck_func_salario CHECK (salario >= 0)
);

INSERT INTO departamento VALUES (10, 'Vendas');
INSERT INTO departamento VALUES (20, 'Tecnologia');
INSERT INTO departamento VALUES (30, 'Recursos Humanos');

INSERT INTO funcionario VALUES
    (1, 'Ana Lima', 'Vendedora', 4200, 500, DATE '2022-01-10', 10);
INSERT INTO funcionario VALUES
    (2, 'Bruno Reis', 'Vendedor', 3800, NULL, DATE '2023-06-12', 10);
INSERT INTO funcionario VALUES
    (3, 'Fabio Costa', 'Gerente', 7800, 1500, DATE '2021-03-05', 10);
INSERT INTO funcionario VALUES
    (4, 'Carla Souza', 'Analista', 5600, NULL, DATE '2020-08-17', 20);
INSERT INTO funcionario VALUES
    (5, 'Diego Melo', 'Desenvolvedor', 6500, 800, DATE '2022-11-02', 20);
INSERT INTO funcionario VALUES
    (6, 'Gabi Alves', 'Analista', 5900, NULL, DATE '2024-02-19', 20);
INSERT INTO funcionario VALUES
    (7, 'Elisa Nunes', 'Assistente', 3200, NULL, DATE '2023-04-03', 30);
INSERT INTO funcionario VALUES
    (8, 'Hugo Lima', 'Assistente', 3400, 250, DATE '2025-01-08', 30);

COMMIT;
~~~

Confirme a carga:

~~~sql
SELECT id_funcionario, nome, salario, comissao, id_departamento
FROM funcionario
ORDER BY id_funcionario;
~~~

O resultado deve conter oito linhas. Os departamentos 10, 20 e 30 têm, respectivamente, três, três e dois funcionários.

## 2. Funções nativas: transformar valores de cada linha

Uma função nativa já foi implementada pelo Oracle. Ela recebe argumentos, executa uma operação e devolve um valor. Funções escalares operam sobre um valor por vez: usadas em uma coluna, produzem um resultado para cada linha selecionada.

### 2.1 Texto

UPPER converte letras para maiúsculas; LOWER para minúsculas; INITCAP deixa a primeira letra de cada palavra em maiúscula; LENGTH devolve o tamanho do texto; SUBSTR extrai parte de uma string. No Oracle, a primeira posição de SUBSTR é 1.

~~~sql
SELECT nome,
       UPPER(nome) AS nome_maiusculo,
       SUBSTR(nome, 1, 3) AS tres_primeiras_letras,
       LENGTH(nome) AS quantidade_caracteres
FROM funcionario
ORDER BY id_funcionario;
~~~

Na linha de Ana Lima, UPPER devolve ANA LIMA, SUBSTR(nome, 1, 3) devolve Ana e LENGTH devolve o comprimento do valor armazenado. As funções mudam o valor apresentado pela consulta, mas não alteram a coluna NOME.

### 2.2 Números

ROUND(valor, casas) arredonda para a quantidade de casas indicada. TRUNC(valor, casas) corta as casas restantes sem arredondar.

~~~sql
SELECT salario,
       ROUND(salario / 1000, 1) AS salario_em_milhares,
       ROUND(1234.567, 2) AS exemplo_arredondado,
       TRUNC(1234.567, 2) AS exemplo_truncado
FROM funcionario
WHERE id_funcionario = 1;
~~~

Para o número de exemplo, ROUND produz 1234.57; TRUNC produz 1234.56. As duas expressões mantêm um valor numérico, que pode ser usado em cálculos.

### 2.3 Datas e conversões

Em Oracle, DATE pode guardar data e horário. SYSDATE consulta a data e hora atuais do servidor. TO_CHAR transforma um valor em texto; para uma data, o modelo de formato define como ela será exibida.

~~~sql
SELECT nome,
       TO_CHAR(data_admissao, 'DD/MM/YYYY') AS admissao_formatada,
       TO_CHAR(SYSDATE, 'DD/MM/YYYY HH24:MI') AS agora_no_servidor
FROM funcionario
ORDER BY id_funcionario;
~~~

TO_CHAR é útil para apresentação. O resultado é texto; portanto, não use esse texto como substituto da data em comparações ou ordenações cronológicas. Compare datas como valores DATE. O literal DATE '2022-01-01' evita depender do formato regional da sessão:

~~~sql
SELECT nome, data_admissao
FROM funcionario
WHERE data_admissao >= DATE '2022-01-01'
ORDER BY data_admissao;
~~~

TO_DATE(texto, formato) converte texto em uma data. Informe o formato que corresponde ao texto recebido:

~~~sql
SELECT TO_DATE('10/01/2022', 'DD/MM/YYYY') AS data_convertida
FROM dual;
~~~

DUAL é uma tabela especial de uma linha usada aqui para executar uma expressão sem consultar a tabela de funcionários.

### 2.4 Valores nulos e NVL

NULL representa um valor ausente ou desconhecido. Ele não é o mesmo que zero. NVL(expressao, substituto) devolve o substituto quando a expressão é nula; caso contrário, devolve a expressão.

~~~sql
SELECT nome,
       comissao,
       NVL(comissao, 0) AS comissao_para_calculo
FROM funcionario
ORDER BY id_funcionario;
~~~

Na consulta, COMISSAO permanece nula na tabela. Só a coluna calculada mostra 0 no lugar. Use essa substituição apenas quando zero tiver o significado desejado. Uma comissão desconhecida não deve ser tratada automaticamente como comissão igual a zero.

### 2.5 Combinar funções

Funções podem ser aninhadas. Neste exemplo, calculamos um acréscimo de 5%, arredondamos o resultado e, então, TO_CHAR formata o número para exibição:

~~~sql
SELECT nome,
       salario,
       TO_CHAR(ROUND(salario * 1.05, 2), '9999990.00')
           AS salario_com_acrescimo_formatado
FROM funcionario
ORDER BY id_funcionario;
~~~

Como TO_CHAR devolve texto, mantenha o resultado de ROUND sem formatação se a operação seguinte ainda for matemática.

### Prática guiada 1

Sem alterar os dados, escreva consultas que:

1. Mostrem o nome em letras maiúsculas e o cargo com INITCAP.
2. Mostrem salário e comissão; para a comissão nula, exibam 0 em uma coluna calculada.
3. Listem nome e data de admissão apenas para quem foi admitido a partir de 2023.
4. Calculem o salário acrescido de 8%, arredondado para duas casas.

Confira se cada consulta contém uma linha para cada funcionário selecionado. Compare esse comportamento com as funções de agregação.

## 3. Funções de agregação: resumir várias linhas

Uma função de agregação recebe valores de várias linhas e produz um resultado de resumo. Sem GROUP BY, o Oracle aplica a função ao conjunto todo e a consulta devolve uma linha de resumo.

| Função | O que resume |
|---|---|
| COUNT(*) | Quantidade de linhas |
| COUNT(expressao) | Quantidade de valores não nulos da expressão |
| SUM(expressao) | Soma dos valores não nulos |
| AVG(expressao) | Média dos valores não nulos |
| MIN(expressao) | Menor valor |
| MAX(expressao) | Maior valor |

~~~sql
SELECT COUNT(*) AS total_funcionarios,
       COUNT(comissao) AS funcionarios_com_comissao,
       SUM(salario) AS folha_total,
       ROUND(AVG(salario), 2) AS salario_medio,
       MIN(salario) AS menor_salario,
       MAX(salario) AS maior_salario
FROM funcionario;
~~~

COUNT(*) conta as oito linhas. COUNT(comissao) conta apenas os valores não nulos de COMISSAO; neste conjunto são quatro. As demais agregações também ignoram valores nulos de seu argumento. Por isso, valores de comissão ausentes não são somados como zero.

### 3.1 GROUP BY: um resumo para cada grupo

GROUP BY separa as linhas que têm o mesmo valor de agrupamento. A consulta calcula quantidade, média e folha salarial de cada departamento:

~~~sql
SELECT d.id_departamento,
       d.nome_departamento,
       COUNT(f.id_funcionario) AS quantidade_funcionarios,
       ROUND(AVG(f.salario), 2) AS salario_medio,
       SUM(f.salario) AS folha_mensal
FROM departamento d
JOIN funcionario f
  ON f.id_departamento = d.id_departamento
GROUP BY d.id_departamento, d.nome_departamento
ORDER BY d.id_departamento;
~~~

Resultado esperado:

| Departamento | Funcionários | Salário médio | Folha mensal |
|---|---:|---:|---:|
| Vendas (10) | 3 | 5.266,67 | 15.800 |
| Tecnologia (20) | 3 | 6.000 | 18.000 |
| Recursos Humanos (30) | 2 | 3.300 | 6.600 |

Como há três grupos, a consulta devolve três linhas. O identificador e o nome do departamento aparecem junto das agregações; por isso, ambos estão no GROUP BY. Em uma consulta agrupada, cada item do SELECT precisa ser uma agregação, uma expressão de agrupamento ou uma expressão formada a partir delas.

### 3.2 O papel de WHERE

WHERE escolhe quais linhas participarão do agrupamento. A consulta calcula a média salarial somente para funcionários com salário de pelo menos 4.000:

~~~sql
SELECT id_departamento,
       COUNT(*) AS quantidade,
       ROUND(AVG(salario), 2) AS salario_medio
FROM funcionario
WHERE salario >= 4000
GROUP BY id_departamento;
~~~

Funcionários que não passam pelo WHERE são retirados antes da contagem e da média. O filtro ainda se refere a valores de cada linha.

## 4. HAVING: filtrar grupos depois da agregação

HAVING seleciona grupos com base no resumo calculado. A pergunta “quais departamentos têm média salarial maior que 5.000?” depende de AVG(salario), que só faz sentido depois de agrupar:

~~~sql
SELECT id_departamento,
       COUNT(*) AS quantidade,
       ROUND(AVG(salario), 2) AS salario_medio
FROM funcionario
GROUP BY id_departamento
HAVING AVG(salario) > 5000
ORDER BY salario_medio DESC;
~~~

Vendas e Tecnologia atendem à condição; Recursos Humanos não. HAVING não apaga funcionários da tabela: apenas remove do resultado os grupos que não atendem à condição.

### 4.1 Comparando WHERE e HAVING

| Cláusula | Filtra | Momento conceitual | Exemplo |
|---|---|---|---|
| WHERE | Linhas individuais | Antes de formar grupos | salario >= 4000 |
| HAVING | Grupos já resumidos | Depois de GROUP BY | AVG(salario) > 5000 |

Uma ordem conceitual para entender a consulta é:

~~~text
FROM / JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
~~~

Essa sequência ajuda a decidir onde cada condição pertence; ela não descreve necessariamente as etapas físicas que o otimizador executa.

### 4.2 Usar os dois filtros na mesma consulta

Queremos departamentos com pelo menos três funcionários, considerando apenas salários de 3.500 ou mais:

~~~sql
SELECT id_departamento,
       COUNT(*) AS quantidade,
       ROUND(AVG(salario), 2) AS salario_medio
FROM funcionario
WHERE salario >= 3500
GROUP BY id_departamento
HAVING COUNT(*) >= 3
ORDER BY id_departamento;
~~~

Primeiro, WHERE elimina linhas com salário abaixo de 3.500. Depois, GROUP BY separa os funcionários restantes. Finalmente, HAVING mantém apenas grupos que ainda tenham três ou mais linhas. Com a carga inicial, Vendas e Tecnologia aparecem.

### 4.3 Erros comuns

- Colocar uma agregação no WHERE: WHERE COUNT(*) >= 3 não funciona, pois WHERE ocorre antes da contagem dos grupos. Use HAVING COUNT(*) >= 3.
- Selecionar uma coluna comum sem agrupá-la: se nome_departamento aparece no SELECT junto de SUM(salario), inclua também o nome no GROUP BY.
- Confundir ausência com zero: SUM e AVG ignoram nulos. Decida explicitamente se deve substituí-los com NVL.
- Usar HAVING para um filtro de linha: condições como salario >= 4000 devem ir para WHERE, antes do agrupamento.

### Prática guiada 2

1. Calcule quantidade e salário máximo em cada departamento.
2. Liste somente departamentos cujo total de salários seja maior que 10.000.
3. Calcule média por departamento apenas para quem recebe pelo menos 3.500.
4. Na questão anterior, mantenha grupos com pelo menos duas pessoas após o primeiro filtro.

Antes de executar cada consulta, marque as condições: “linha” ou “grupo”. Uma condição pode aparecer no HAVING sem mencionar uma agregação, mas nesta aula use HAVING principalmente para critérios sobre o resultado do agrupamento.

## 5. Functions: criar uma função armazenada em PL/SQL

O Oracle oferece funções nativas como ROUND e NVL. Também podemos criar uma função armazenada para centralizar uma regra própria. Ela fica salva no esquema e devolve um valor por meio de RETURN.

Este exemplo calcula o valor após um acréscimo percentual:

~~~sql
CREATE OR REPLACE FUNCTION fn_valor_com_acrescimo (
    p_valor      IN NUMBER,
    p_percentual IN NUMBER
)
RETURN NUMBER
IS
BEGIN
    RETURN ROUND(p_valor * (1 + p_percentual / 100), 2);
END;
/
~~~

Leia cada parte:

1. CREATE OR REPLACE FUNCTION cria a função ou substitui a versão existente.
2. p_valor e p_percentual são parâmetros de entrada (IN).
3. RETURN NUMBER declara o tipo do valor devolvido.
4. BEGIN inicia as instruções executáveis.
5. RETURN devolve o resultado e encerra a chamada.
6. A barra /, em ferramentas compatíveis com SQL*Plus, envia o bloco PL/SQL completo para compilação.

Teste um cálculo isolado:

~~~sql
SELECT fn_valor_com_acrescimo(100, 10) AS valor_calculado
FROM dual;
~~~

O resultado é 110. A mesma função pode ser chamada para cada funcionário:

~~~sql
SELECT nome,
       salario,
       fn_valor_com_acrescimo(salario, 8) AS salario_com_acrescimo
FROM funcionario
ORDER BY id_funcionario;
~~~

Uma função armazenada não cria uma nova coluna e não altera salários. Ela executa a regra solicitada e devolve valores na consulta. Se a função não compilar, verifique os erros do seu esquema:

~~~sql
SELECT name, line, position, text
FROM user_errors
WHERE name = 'FN_VALOR_COM_ACRESCIMO'
  AND type = 'FUNCTION'
ORDER BY sequence;
~~~

Em algumas ferramentas, também é possível usar SHOW ERRORS FUNCTION fn_valor_com_acrescimo. Para criar uma função no próprio esquema, o Oracle requer o privilégio CREATE PROCEDURE; em um ambiente compartilhado, a conta pode não ter essa permissão.

Use funções armazenadas quando uma regra de cálculo será reutilizada e merece um nome. Para uma operação simples usada uma única vez, uma expressão SQL direta costuma ser mais fácil de ler. Em consultas, prefira funções que apenas calculam e devolvem um valor.

## 6. Views: salvar uma consulta com nome

Uma view (visão) é uma tabela lógica definida por um SELECT. A view comum não guarda uma cópia dos resultados: quando consultada, ela apresenta dados obtidos das tabelas que formam sua definição.

Vamos criar um resumo salarial por departamento:

~~~sql
CREATE OR REPLACE VIEW vw_resumo_departamento AS
SELECT d.id_departamento,
       d.nome_departamento,
       COUNT(f.id_funcionario) AS quantidade_funcionarios,
       ROUND(AVG(f.salario), 2) AS salario_medio,
       SUM(f.salario) AS folha_mensal
FROM departamento d
JOIN funcionario f
  ON f.id_departamento = d.id_departamento
GROUP BY d.id_departamento, d.nome_departamento;
~~~

Os aliases dão nomes claros às expressões calculadas e se tornam nomes das colunas da view. CREATE OR REPLACE permite atualizar a definição sem excluir a view primeiro.

Agora o relatório pode ser consultado como se fosse uma tabela:

~~~sql
SELECT nome_departamento,
       quantidade_funcionarios,
       salario_medio,
       folha_mensal
FROM vw_resumo_departamento
WHERE folha_mensal > 10000
ORDER BY folha_mensal DESC;
~~~

O WHERE acima filtra as linhas que a view devolve. O SELECT armazenado na view continua responsável por calcular os grupos. Se um salário da tabela de origem mudar, uma consulta posterior à view usa os dados atuais.

### Limites e usos

- Uma view pode simplificar uma consulta longa ao dar um nome reutilizável ao SELECT.
- Uma view comum não é uma tabela de resumo armazenada. Uma view materializada é outro objeto e armazena resultados; atualização e sincronização estão fora do escopo desta aula.
- Views simples podem permitir algumas operações de INSERT, UPDATE e DELETE. Views com junções e agregações, como a nossa, têm restrições para escrita; trate esta como uma view de relatório.
- Uma view pode ajudar a apresentar apenas linhas ou colunas necessárias. O controle de acesso depende de privilégios concedidos.
- Para criar uma view no próprio esquema, a conta precisa do privilégio CREATE VIEW.

## 7. Desafio integrado

Use as tabelas e a função criadas nesta aula. Salve as consultas em um arquivo SQL, na ordem em que devem ser executadas. Antes de cada consulta, escreva em um comentário o que ela pretende responder.

1. Liste nome, cargo e data de admissão formatada como DD/MM/YYYY para cada funcionário admitido a partir de 2022.
2. Mostre, por departamento, quantidade de funcionários, menor e maior salário e folha salarial. Ordene pela folha, da maior para a menor.
3. Repita a consulta anterior, mas apresente somente departamentos com pelo menos três funcionários e folha acima de 15.000.
4. Use NVL para exibir a comissão nula como 0. Acrescente uma coluna calculada com fn_valor_com_acrescimo, usando 5%.
5. Consulte vw_resumo_departamento e mostre somente departamentos com salário médio acima de 4.000.
6. Em duas ou três frases, explique por que cada filtro dos itens 2, 3 e 5 foi colocado em WHERE ou HAVING.

### O que revisar antes de entregar

- O script executa sem erro na ordem apresentada.
- Agregações aparecem com os grupos correspondentes no GROUP BY.
- Critérios sobre salário individual estão em WHERE.
- Critérios sobre quantidade, média ou soma do grupo estão em HAVING.
- Colunas calculadas têm aliases legíveis.
- NULL só foi substituído quando a regra indicava essa interpretação.
- A função armazenada compila e devolve um valor.
- A view apresenta o resumo pedido sem copiar os dados para outra tabela.

## 8. Autoavaliação

Tente responder sem voltar às seções:

1. Qual é a diferença entre COUNT(*) e COUNT(comissao)?
2. Por que HAVING AVG(salario) > 5000 é válido, mas WHERE AVG(salario) > 5000 não é?
3. Se uma consulta precisa excluir funcionários com salário inferior a 3.500 antes de calcular a média do grupo, onde fica essa condição?
4. O que RETURN faz em uma função PL/SQL?
5. Uma view comum armazena os valores que aparecem na tela?
6. O que muda entre ROUND e TO_CHAR quando aplicados a um número?

## 9. Gabarito para conferência

### Prática guiada 1

~~~sql
-- 1. Texto
SELECT UPPER(nome) AS nome_maiusculo,
       INITCAP(cargo) AS cargo_formatado
FROM funcionario;

-- 2. Nulos
SELECT nome, comissao, NVL(comissao, 0) AS comissao_exibida
FROM funcionario;

-- 3. Data: compare valores DATE, sem convertê-los para texto
SELECT nome, data_admissao
FROM funcionario
WHERE data_admissao >= DATE '2023-01-01';

-- 4. Acréscimo calculado em SQL
SELECT nome, ROUND(salario * 1.08, 2) AS salario_com_acrescimo
FROM funcionario;
~~~

### Prática guiada 2

~~~sql
-- 1. Quantidade e maior salário por departamento
SELECT id_departamento, COUNT(*) AS quantidade,
       MAX(salario) AS maior_salario
FROM funcionario
GROUP BY id_departamento;

-- 2. Filtrar grupos pela soma
SELECT id_departamento, SUM(salario) AS folha
FROM funcionario
GROUP BY id_departamento
HAVING SUM(salario) > 10000;

-- 3 e 4. Primeiro filtrar as linhas; depois os grupos
SELECT id_departamento, COUNT(*) AS quantidade,
       ROUND(AVG(salario), 2) AS salario_medio
FROM funcionario
WHERE salario >= 3500
GROUP BY id_departamento
HAVING COUNT(*) >= 2;
~~~

### Desafio integrado — consultas possíveis

~~~sql
-- 1. Formatar a data para apresentação
SELECT nome, cargo,
       TO_CHAR(data_admissao, 'DD/MM/YYYY') AS data_formatada
FROM funcionario
WHERE data_admissao >= DATE '2022-01-01'
ORDER BY data_admissao;

-- 2. Resumo de todos os departamentos com funcionários
SELECT d.id_departamento, d.nome_departamento,
       COUNT(f.id_funcionario) AS quantidade,
       MIN(f.salario) AS menor_salario,
       MAX(f.salario) AS maior_salario,
       SUM(f.salario) AS folha
FROM departamento d
JOIN funcionario f ON f.id_departamento = d.id_departamento
GROUP BY d.id_departamento, d.nome_departamento
ORDER BY folha DESC;

-- 3. Filtrar grupos por contagem e soma
SELECT d.id_departamento, d.nome_departamento,
       COUNT(f.id_funcionario) AS quantidade,
       SUM(f.salario) AS folha
FROM departamento d
JOIN funcionario f ON f.id_departamento = d.id_departamento
GROUP BY d.id_departamento, d.nome_departamento
HAVING COUNT(f.id_funcionario) >= 3
   AND SUM(f.salario) > 15000
ORDER BY folha DESC;

-- 4. Exibir comissão substituída e calcular com a função armazenada
SELECT nome, NVL(comissao, 0) AS comissao_exibida,
       fn_valor_com_acrescimo(salario, 5) AS salario_com_acrescimo
FROM funcionario;

-- 5. Consultar a view por uma condição sobre a média resumida
SELECT nome_departamento, salario_medio
FROM vw_resumo_departamento
WHERE salario_medio > 4000
ORDER BY salario_medio DESC;
~~~

Os filtros 2 e 3 determinam quais grupos resumidos aparecem, então pertencem a HAVING. No item 5, a consulta externa já recebe linhas resumidas da view e filtra a coluna SALARIO_MEDIO com WHERE.

### Autoavaliação — respostas

1. COUNT(*) conta linhas; COUNT(comissao) conta apenas linhas em que COMISSAO não é nula.
2. WHERE filtra linhas antes de formar grupos; AVG só existe depois da agregação. O critério da média deve ser aplicado com HAVING.
3. Em WHERE, pois salário é um valor de cada linha que deve ser filtrado antes da média.
4. Devolve o resultado da chamada para quem invocou a função.
5. Não. A view comum guarda a definição do SELECT; os dados vêm das tabelas de origem quando a view é consultada.
6. ROUND devolve número arredondado; TO_CHAR converte um valor para texto conforme uma máscara de formato.

## Referências de consulta

- Oracle Database 11g Release 2, [funções SQL nativas](https://docs.oracle.com/cd/E11882_01/server.112/e41084/functions001.htm).
- Oracle Database 11g Release 2, [funções de agregação](https://docs.oracle.com/cd/E11882_01/server.112/e41084/functions003.htm).
- Oracle Database 11g Release 2, [CREATE FUNCTION — PL/SQL Language Reference](https://docs.oracle.com/cd/E11882_01/appdev.112/e25519/create_function.htm).
- Oracle Database 11g Release 2, [CREATE VIEW](https://docs.oracle.com/cd/E11882_01/server.112/e41084/statements_8004.htm).
