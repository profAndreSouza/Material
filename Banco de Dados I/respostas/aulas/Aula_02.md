# Aula 02 — Gabarito

## Correção da Biblioteca Saber

`EDITORA(id_editora PK, razao_social, cidade)` e `LIVRO(id_livro PK, titulo, ano_publicacao)` são ligados por `PUBLICA`. Cada livro está associado a exatamente uma editora (`LIVRO 1..1`). Uma editora pode ser cadastrada antes de haver livro no acervo e pode publicar vários (`EDITORA 0..N`). O relacionamento tem cardinalidade máxima 1:N.

## Oficina guiada — Controle Comercial Sorocaba

### Entidades e atributos

- `CATEGORIA(id_categoria, nome_categoria)`
- `PRODUTO(id_produto, nome, preco_tabela, qtd_estoque)`
- `CLIENTE(id_cliente, nome, cpf, email, telefones)` — `telefones` é multivalorado.
- `PEDIDO(num_pedido, data_hora, valor_total)`

### Relacionamentos e cardinalidades

- Categoria classifica produtos: categoria `(0,N)`, produto `(1,1)`.
- Cliente realiza pedidos: cliente `(0,N)`, pedido `(1,1)`.
- Pedido contém produtos: pedido `(1,N)`, produto `(0,N)`.
- `quantidade` e `preco_praticado` (preço efetivamente cobrado) são atributos do relacionamento N:N `CONTEM`, pois descrevem cada produto dentro de cada pedido.

O MER/DER conceitual mantém `CONTEM` como relacionamento com atributos. No modelo lógico futuro, essa relação N:N origina `ITENS_PEDIDO(num_pedido FK, id_produto FK, quantidade, preco_praticado)`. Telefones multivalorados também precisarão de tabela própria no modelo relacional.

## Desafio — Oficina Mecânica Sorocaba

Uma solução coerente é:

- `CLIENTE 1:N VEICULO`: assumindo que se possa cadastrar cliente antes de registrar veículo, cliente `(0,N)`; veículo `(1,1)`. Se a oficina só cadastrar proprietários de veículos, o mínimo de CLIENTE será 1.
- `VEICULO 1:N ORDEM_SERVICO`: veículo `(0,N)` ao longo do histórico; cada OS `(1,1)` veículo.
- `ORDEM_SERVICO N:N SERVICO`: a OS contém serviços e o mesmo serviço pode ser executado em diferentes OS. `horas_trabalhadas` é atributo desse relacionamento, pois depende da combinação da OS com o serviço.

Atributos identificadores: código do cliente, placa do veículo, número da OS e código do serviço. A oficina também registra nome, CPF e telefones do cliente; marca, modelo e ano do veículo; data de abertura, status e valor total da OS; descrição e preço/hora do serviço.

No diagrama conceitual, não antecipe uma entidade/tabela `ITEM_OS` se a tarefa pede atributos no losango. Essa estrutura associativa será útil no modelo lógico, a partir do N:N.

## Observações conceituais

- Identificador deve ser único para cada ocorrência da entidade.
- Mínimo `0` expressa participação opcional; mínimo `1`, obrigatória.
- Um atributo pertence à entidade quando a descreve por si só; pertence ao relacionamento quando seu valor depende das ocorrências associadas.
- `valor_total` da OS pode ser derivado da soma dos serviços (horas × preço/hora), embora o requisito peça seu registro. A decisão de armazenar o total deve ser explícita; no modelo conceitual inicial, mantenha o atributo conforme o enunciado.
