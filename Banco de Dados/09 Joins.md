# JOINS EM POSTGRESQL – MATERIAL COMPLEMENTAR (CENÁRIO AVANÇADO)

Este material explora os principais tipos de JOIN no PostgreSQL a partir de um único cenário que combina autorelacionamento (funcionário e seu chefe) e relacionamento muitos-para-muitos (funcionários e projetos). A proposta é manter a mesma base de dados e variar apenas as junções, aproximando o conteúdo de situações reais como folha de pagamento e alocação de horas.

## Cenário base

```sql
CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome TEXT,
    salario NUMERIC,
    chefe_id INT,
    FOREIGN KEY (chefe_id) REFERENCES funcionarios(id)
);

CREATE TABLE projetos (
    id SERIAL PRIMARY KEY,
    nome TEXT
);

CREATE TABLE funcionario_projeto (
    funcionario_id INT,
    projeto_id INT,
    horas NUMERIC,
    PRIMARY KEY (funcionario_id, projeto_id),
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(id),
    FOREIGN KEY (projeto_id) REFERENCES projetos(id)
);
```

```sql
INSERT INTO funcionarios (id, nome, salario, chefe_id) VALUES
(1, 'Ana', 5000, NULL),
(2, 'Bruno', 4000, 1),
(3, 'Carlos', 3500, 1),
(4, 'Daniela', 3000, 2);

INSERT INTO projetos (id, nome) VALUES
(1, 'Sistema A'),
(2, 'Sistema B');

INSERT INTO funcionario_projeto VALUES
(1, 1, 20),
(2, 1, 30),
(2, 2, 10),
(3, 2, 25);
```

Neste cenário, a tabela de funcionários permite representar hierarquia organizacional, enquanto a tabela intermediária registra a alocação de horas em projetos, algo típico em controle de apontamento ou faturamento.

## Self Join (hierarquia)

```sql
SELECT f.nome AS funcionario, c.nome AS chefe
FROM funcionarios f
LEFT JOIN funcionarios c ON f.chefe_id = c.id;
```

A consulta relaciona cada funcionário ao seu respectivo chefe. Esse padrão é comum em relatórios organizacionais ou validação de estruturas hierárquicas.

Exercício: listar funcionários e seus chefes, incluindo aqueles que não possuem chefe.

## Inner Join (alocação de horas)

```sql
SELECT f.nome, p.nome, fp.horas
FROM funcionarios f
JOIN funcionario_projeto fp ON f.id = fp.funcionario_id
JOIN projetos p ON p.id = fp.projeto_id;
```

Aqui são retornados apenas funcionários que possuem alocação em projetos. Esse tipo de consulta é comum para relatórios de produtividade ou faturamento.

Exercício: listar funcionários com seus respectivos projetos e horas alocadas.

## Left Join (folha de pagamento com ou sem alocação)

```sql
SELECT f.nome, f.salario, p.nome, fp.horas
FROM funcionarios f
LEFT JOIN funcionario_projeto fp ON f.id = fp.funcionario_id
LEFT JOIN projetos p ON p.id = fp.projeto_id;
```

Nesse caso todos os funcionários aparecem, mesmo que não estejam alocados em projetos. Isso é típico em cenários de folha de pagamento onde todos os funcionários precisam ser considerados.

Exercício: listar todos os funcionários, incluindo aqueles sem alocação em projetos.

## Right Join (projetos e cobertura de equipe)

```sql
SELECT f.nome, p.nome, fp.horas
FROM funcionarios f
RIGHT JOIN funcionario_projeto fp ON f.id = fp.funcionario_id
RIGHT JOIN projetos p ON p.id = fp.projeto_id;
```

A consulta garante que todos os projetos sejam exibidos, mesmo que não tenham funcionários alocados. Isso pode ser utilizado para identificar projetos ociosos.

Exercício: listar todos os projetos, incluindo os que não possuem funcionários.

## Full Outer Join (visão completa)

```sql
SELECT f.nome, p.nome, fp.horas
FROM funcionarios f
FULL OUTER JOIN funcionario_projeto fp ON f.id = fp.funcionario_id
FULL OUTER JOIN projetos p ON p.id = fp.projeto_id;
```

Esse tipo de junção retorna todos os registros possíveis, sendo útil para auditorias ou validação de integridade dos dados.

Exercício: listar todos os dados possíveis, incluindo inconsistências.

## Anti Join (funcionários sem projeto)

```sql
SELECT f.nome
FROM funcionarios f
LEFT JOIN funcionario_projeto fp ON f.id = fp.funcionario_id
WHERE fp.funcionario_id IS NULL;
```

Permite identificar funcionários que não estão alocados em nenhum projeto, o que pode indicar ociosidade.

Exercício: listar funcionários sem participação em projetos.

## Not Exists (forma alternativa)

```sql
SELECT f.nome
FROM funcionarios f
WHERE NOT EXISTS (
    SELECT 1
    FROM funcionario_projeto fp
    WHERE fp.funcionario_id = f.id
);
```

Essa abordagem é frequentemente mais eficiente em cenários com grande volume de dados.

Exercício: reescrever a consulta anterior utilizando NOT EXISTS.

## Otimização

```sql
CREATE INDEX idx_fp_funcionario ON funcionario_projeto(funcionario_id);
CREATE INDEX idx_fp_projeto ON funcionario_projeto(projeto_id);
```

```sql
EXPLAIN ANALYZE
SELECT f.nome, p.nome
FROM funcionarios f
JOIN funcionario_projeto fp ON f.id = fp.funcionario_id
JOIN projetos p ON p.id = fp.projeto_id;
```

A criação de índices nas chaves de junção melhora significativamente o desempenho. O uso de EXPLAIN ANALYZE permite compreender o plano de execução e identificar gargalos.

## Consolidação de projetos por funcionário (visualização em uma linha)

```sql
SELECT 
    f.nome,
    STRING_AGG(p.nome, ', ' ORDER BY p.nome) AS projetos
FROM funcionarios f
LEFT JOIN funcionario_projeto fp ON f.id = fp.funcionario_id
LEFT JOIN projetos p ON p.id = fp.projeto_id
GROUP BY f.nome
ORDER BY f.nome;
```

Essa consulta apresenta todos os funcionários em uma única linha cada, concatenando os nomes dos projetos em que estão alocados. Esse tipo de visualização é comum em relatórios gerenciais, dashboards e exportações para planilhas, pois facilita a leitura consolidada das informações.

Uma variação bastante utilizada em APIs é o uso de JSON para estruturar os dados relacionados:

```sql
SELECT 
    f.id,
    f.nome,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'projeto', p.nome,
            'horas', fp.horas
        )
        ORDER BY p.nome
    ) AS projetos
FROM funcionarios f
LEFT JOIN funcionario_projeto fp ON f.id = fp.funcionario_id
LEFT JOIN projetos p ON p.id = fp.projeto_id
GROUP BY f.id, f.nome
ORDER BY f.nome;
```

Nesse formato, cada funcionário retorna com um array JSON contendo seus projetos e respectivas horas, o que é ideal para integração com aplicações web e APIs REST.

Exercício: ajustar a consulta para retornar apenas projetos não nulos no JSON e incluir o total de horas por funcionário.

## Proposta de prática integrada

Utilizando apenas variações de JOIN, responda:

1. Funcionários e seus chefes
2. Funcionários com horas alocadas
3. Funcionários sem alocação
4. Projetos sem equipe
5. Total de horas por projeto
6. Total de horas por funcionário

Esses exercícios simulam situações comuns em sistemas corporativos como controle de horas, faturamento e análise de produtividade.
