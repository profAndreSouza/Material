# Lista de exercícios 03 — Normalização (1FN, 2FN e 3FN)

**Componente curricular:** Banco de Dados I  
**Tema:** Dependências funcionais e normalização até a 3FN

## Orientações

Resolva os exercícios individualmente. Em cada caso:

1. Identifique a chave candidata indicada (e outras, se existirem) e registre as dependências funcionais fornecidas.
2. Aponte grupos repetidos/valores não atômicos, dependências parciais e dependências transitivas, conforme o caso.
3. Mostre a decomposição passo a passo até a forma normal solicitada. Não basta apresentar apenas o esquema final.
4. Para cada relação proposta, indique a chave primária (PK) e as chaves estrangeiras (FKs). Explique brevemente por que cada relação atende à forma normal pedida.
5. Verifique se a decomposição preserva os fatos do enunciado e permite reconstruir as informações por junções. Registre as premissas adotadas.

Use a notação `R(atributos)` e escreva as dependências funcionais como `X → Y`. Não é necessário criar diagramas MER nem executar SQL. A atomicidade deve ser avaliada considerando as consultas e regras descritas em cada exercício.

---

## Exercício 1 — Pedido com itens repetidos (1FN)

Uma loja registra pedidos em uma ficha com os campos abaixo. Cada pedido pode conter de um a cinco produtos.

```text
PEDIDO_FICHA(
  id_pedido, data_pedido, id_cliente, nome_cliente,
  id_produto_1, nome_produto_1, quantidade_1,
  id_produto_2, nome_produto_2, quantidade_2,
  ...,
  id_produto_5, nome_produto_5, quantidade_5
)
```

Um campo de produto pode ficar vazio quando o pedido tiver menos itens. Para este exercício, cada produto aparece no máximo uma vez em cada pedido. Considere as regras:

```text
id_pedido → data_pedido, id_cliente
id_cliente → nome_cliente
id_produto → nome_produto
(id_pedido, id_produto) → quantidade
```

**Tarefas**

a. Explique quais aspectos do registro violam a 1FN e por que colunas numeradas não são uma solução escalável para os itens.  
b. Reestruture o registro em relações na 1FN, eliminando os grupos repetidos. Marque PKs e FKs.  
c. Indique onde ficam `nome_cliente` e `nome_produto` nesta etapa e registre as dependências que podem exigir novas decomposições nas formas normais seguintes.

---

## Exercício 2 — Itens de pedido (2FN)

Depois de organizar os itens em linhas, a loja mantém a seguinte relação:

```text
ITEM_PEDIDO(
  id_pedido, id_produto, data_pedido,
  id_cliente, nome_cliente,
  nome_produto, quantidade, preco_unitario_venda
)
PK: (id_pedido, id_produto)
```

Regras do domínio:

```text
id_pedido → data_pedido, id_cliente
id_cliente → nome_cliente
id_produto → nome_produto
(id_pedido, id_produto) → quantidade, preco_unitario_venda
```

O preço registrado é o preço efetivamente praticado para aquele produto naquele pedido. Ele pode diferir do preço atual de catálogo.

**Tarefas**

a. Confirme a chave candidata indicada e identifique quais atributos não-chave dependem de apenas parte da chave composta.  
b. Decomponha a relação até a 2FN. Escreva as relações resultantes com PKs e FKs.  
c. Justifique por que `quantidade` e `preco_unitario_venda` permanecem associados ao item do pedido.  
d. Indique se ainda há alguma dependência transitiva e em qual etapa ela será resolvida.

---

## Exercício 3 — Matrícula em disciplinas (3FN)

Uma instituição inicialmente armazena cada matrícula em disciplina em uma única relação:

```text
MATRICULA_DISCIPLINA(
  id_aluno, nome_aluno,
  id_disciplina, nome_disciplina,
  id_departamento, nome_departamento,
  semestre, ano, nota_final
)
PK: (id_aluno, id_disciplina, semestre, ano)
```

Adote as seguintes regras de negócio:

```text
id_aluno → nome_aluno
id_disciplina → nome_disciplina, id_departamento
id_departamento → nome_departamento
(id_aluno, id_disciplina, semestre, ano) → nota_final
```

Um aluno pode cursar várias disciplinas no mesmo semestre. Uma disciplina pertence a um único departamento. A nota final pertence à ocorrência de matrícula daquele aluno, disciplina e período.

**Tarefas**

a. Identifique os atributos que dependem parcialmente da chave composta e proponha a decomposição necessária para chegar à 2FN.  
b. Na decomposição obtida, identifique a dependência transitiva relacionada ao departamento.  
c. Decomponha até a 3FN, indicando PKs e FKs.  
d. Explique por que `nota_final` permanece na relação de matrícula e descreva uma anomalia de atualização ou exclusão que a decomposição ajuda a evitar.  
e. Mostre quais junções permitem reconstruir as informações de uma matrícula, incluindo os nomes do aluno, da disciplina e do departamento.

---

## Exercício 4 — Cadastro de entregas (1FN, 2FN e 3FN)

Uma empresa registra os produtos enviados em cada entrega. A planilha atual possui uma linha por produto e os seguintes campos:

```text
ENTREGA_ITEM(
  id_entrega, data_entrega, id_cliente, nome_cliente,
  cidade_id, nome_cidade, estado_id, nome_estado,
  id_produto, nome_produto, quantidade
)
PK: (id_entrega, id_produto)
```

Para este exercício, cada produto aparece no máximo uma vez em cada entrega. Os dados já estão dispostos em uma linha por item, mas a equipe precisa avaliar as três formas normais. Adote:

```text
id_entrega → data_entrega, id_cliente
id_cliente → nome_cliente, cidade_id
cidade_id → nome_cidade, estado_id
estado_id → nome_estado
id_produto → nome_produto
(id_entrega, id_produto) → quantidade
```

**Tarefas**

a. Avalie a relação quanto à 1FN, considerando que cada célula contém um único valor e que não existem listas em colunas. Explique sua conclusão.  
b. Identifique as dependências parciais e decomponha até a 2FN.  
c. Identifique as dependências transitivas restantes e proponha uma decomposição até a 3FN.  
d. Apresente o esquema final com PKs e FKs.  
e. Escolha uma informação (por exemplo, nome da cidade ou do produto) e explique uma anomalia de inserção, atualização ou exclusão que pode ocorrer na relação original e como o novo esquema reduz esse problema.

---

## Conferência antes da entrega

- [ ] As dependências funcionais e as chaves foram registradas.
- [ ] A passagem entre as formas normais está explicada, não apenas o resultado final.
- [ ] Todas as relações têm PK indicada e as FKs relevantes foram identificadas.
- [ ] Atributos com significado histórico, como preço efetivamente vendido, foram mantidos no lugar adequado.
- [ ] A proposta permite reconstruir os fatos originais sem associações indevidas.
- [ ] O arquivo está legível e contém identificação do(a) estudante.
