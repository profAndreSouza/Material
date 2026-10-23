# Aula 08 — Consultas e filtros

1. Comparações com `NULL` resultam em UNKNOWN, não TRUE; por isso `lote = NULL` não seleciona linhas. Use `WHERE lote IS NULL` (ou `IS NOT NULL` para o caso oposto).
2. `LIKE 'A%'` seleciona nomes iniciados por A seguidos de zero ou mais caracteres: `A`, `Ana`, `Arthur`. `LIKE 'A_'` exige exatamente dois caracteres: `Ab`, `A7`; `_` representa um único caractere e `%` qualquer sequência, inclusive vazia.
3. Exemplo: deseja-se clientes de SP ou RJ com limite acima de 15 mil. `uf='SP' OR uf='RJ' AND limite>=15000` é interpretado como `SP OR (RJ AND limite...)`, por precedência de AND; clientes de SP entram mesmo sem limite suficiente. Correto: `WHERE (uf='SP' OR uf='RJ') AND limite_credito >= 15000`.
