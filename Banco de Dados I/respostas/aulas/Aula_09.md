# Aula 09 — Agregação e junções

1. `WHERE` filtra linhas antes da agregação; `MAX(salario)` só existe após agrupamento, então o critério agregado deve ficar em `HAVING`. Consulta corrigida:

```sql
SELECT departamento, MAX(salario) AS maior_salario
FROM funcionarios
GROUP BY departamento
HAVING MAX(salario) > 10000;
```

2. `LEFT JOIN` partindo de CLIENTES preserva todos os clientes e completa com `NULL` os dados da compra quando não há correspondência. Um `INNER JOIN` eliminaria clientes sem compras.
3. `COUNT(*)` conta todas as linhas. `COUNT(categoria_id)` conta apenas valores não nulos dessa coluna. Se existem 5 produtos com categoria NULL, o segundo total será cinco menor que o primeiro (assumindo todos os demais com categoria preenchida).
