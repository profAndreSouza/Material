# Aula 06 — DDL, tipos e restrições

1. `FLOAT` e `DOUBLE PRECISION` representam aproximações binárias; valores decimais como 0,10 podem não ser exatos, acumulando diferenças em cálculos financeiros. Use `NUMERIC(p,s)`/`DECIMAL(p,s)` com escala definida (por exemplo, `NUMERIC(12,2)`) para valores monetários.
2. `ON DELETE CASCADE` é adequado para registros dependentes sem sentido independente, como linhas de um pedido excluído em ambiente de teste ou rascunho. É arriscado em dados históricos/financeiros: apagar um cliente poderia apagar pedidos e notas relacionados. Prefira RESTRICT/NO ACTION ou exclusão lógica quando o histórico precisa ser preservado.
3. Comando:

```sql
ALTER TABLE pecas_aeronauticas
ADD CONSTRAINT chk_quantidade_estoque_limite
CHECK (quantidade_estoque <= 10000);
```
