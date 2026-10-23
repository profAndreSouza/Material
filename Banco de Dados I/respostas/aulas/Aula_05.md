# Aula 05 — Normalização

## Exercício da nota fiscal

Partindo do grupo repetitivo de itens, a relação em 1FN usa uma linha por item e chave `(Num_NF, Cod_Item)`. Em 2FN, dados da nota dependentes só de `Num_NF` vão para `NOTAS_FISCAIS`; descrição do produto e preço de catálogo dependentes só de `Cod_Item` vão para `ITENS`; quantidade depende do par e fica em `NOTAS_ITENS`. Em 3FN, dados do cliente saem de NOTAS_FISCAIS para CLIENTES, pois `CNPJ_Cliente -> Nome_Cliente, Cidade_Cliente`.

```text
CLIENTES(CNPJ_Cliente PK, Nome_Cliente, Cidade_Cliente)
NOTAS_FISCAIS(Num_NF PK, Data_Emissao, CNPJ_Cliente FK)
ITENS(Cod_Item PK, Descricao_Item, Preco_Unitario)
NOTAS_ITENS(Num_NF PK/FK, Cod_Item PK/FK, Qtd_Vendida)
```

`Valor_Total_NF` é derivável pela soma de quantidade × preço aplicado. Se o preço for histórico, guarde `Preco_Unitario_Venda` em NOTAS_ITENS. O exercício apresenta preço unitário sem indicar se é catálogo ou histórico; a decisão deve acompanhar a regra comercial.

## Fixação

1. Considerando `id_produto` como a chave candidata simples relevante, não há dependência parcial dessa chave; com valores atômicos, a relação está em 2FN. (A existência de outras chaves candidatas compostas exigiria análise própria.) Pode violar 3FN: `id_produto -> id_fabricante` e `id_fabricante -> nome_fabricante`, logo o nome do fabricante depende transitivamente da chave do produto. Separar `FABRICANTES(id_fabricante PK,nome_fabricante)` e manter a FK em PRODUTO.
2. Se a única matrícula de um aluno numa disciplina for excluída e os dados do curso/docente estiverem repetidos nessa linha, perdem-se também as únicas informações sobre a disciplina ou docente. Separar ALUNO, DISCIPLINA e MATRICULA evita esse acoplamento.
3. Desnormalização pode ser adotada após medir gargalo de leitura e demonstrar que consultas/junções são custosas para a carga real. Deve haver justificativa, controle de consistência (por exemplo, atualização transacional ou valor derivado/recalculável) e monitoramento; é decisão de desempenho, não etapa automática do projeto.
