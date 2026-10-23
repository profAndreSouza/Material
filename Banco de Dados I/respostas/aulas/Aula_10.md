# Aula 10 — Subconsultas e visões

1. Se uma subconsulta usada em `NOT IN` contiver `NULL`, a comparação de um valor não encontrado pode tornar-se UNKNOWN; a cláusula WHERE não a aceita e o resultado pode ficar vazio. `NOT EXISTS` testa a existência de linha correlacionada e não é contaminado por NULL da coluna retornada.
2. Uma view comum armazena a definição da consulta, não uma cópia dos resultados; quando as tabelas-base mudam, a consulta da view passa a refletir os dados atuais. Views materializadas são exceção: guardam resultados e exigem atualização conforme o SGBD.
3. Comando:

```sql
CREATE VIEW vw_produtos_criticos AS
SELECT id_produto, nome_produto, estoque_atual
FROM produtos
WHERE estoque_atual <= 5;
```

O custo de fábrica fica fora da projeção. Ajuste nomes de coluna ao esquema efetivamente usado na disciplina.
