# Roteiro de Aula — Aula 05

**Componente curricular:** Banco de Dados I\
**Tema:** Teoria relacional, normalização e desnormalização\
**Modalidade:** síncrona, com exercícios orientados\
**Ferramentas:** quadro, editor de texto ou brModelo; Oracle opcional para consultas\
**Duração sugerida:** 3h20\
**Apresentação:** [aula-05.js](../slides/aula-05.js) — 19 slides\
**Continuidade:** Aula 04, que converteu o DER para relações e implementou tabelas no Oracle.

## Panorama das formas normais

Este quadro situa as formas normais mais conhecidas. A aula detalha somente 1FN, 2FN, 3FN e desnormalização; as formas posteriores aparecem aqui como referência.

| Forma normal | Ideia central |
|---|---|
| **1FN** | Valores atômicos no contexto do domínio e sem grupos repetidos em colunas. |
| **2FN** | Em 1FN, cada atributo não-chave depende da chave candidata inteira; elimina dependências parciais. |
| **3FN** | Em 2FN, atributos não-chave não dependem transitivamente de uma chave por meio de outro atributo não-chave. |
| **BCNF** | Para toda dependência funcional não trivial, o determinante é uma superchave. É mais restritiva que 3FN. |
| **4FN** | Elimina dependências multivaloradas independentes cujo determinante não seja superchave. |
| **5FN (PJNF)** | Trata dependências de junção: decomposições adicionais sem perda são implicadas pelas chaves candidatas. |
| **6FN** | Não admite decomposição sem perda não trivial adicional; aparece sobretudo em modelos temporais e casos especializados. |
| **DKNF** | As restrições da relação decorrem apenas de domínios e chaves; é uma forma idealizada e rara na prática. |

A sequência e a profundidade de cobertura variam entre materiais didáticos. BCNF e as formas de 4FN em diante usam conceitos mais avançados, como dependências multivaloradas e de junção; não serão desenvolvidos neste encontro. Este panorama segue a síntese de formas normais em [notas de projeto de banco de dados da Cal Poly](https://users.csc.calpoly.edu/~dekhtyar/366-Winter2026/lectures/lec08.366.pdf).

## Objetivos de aprendizagem

Ao final da aula, a turma deverá ser capaz de:

1. Identificar chaves e dependências funcionais em um esquema relacional.
2. Reconhecer anomalias de inserção, atualização e exclusão causadas por redundância.
3. Aplicar 1FN, 2FN e 3FN, justificando cada decomposição.
4. Analisar se a decomposição preserva os dados e permite reconstruir os fatos originais.
5. Explicar desnormalização como decisão deliberada, com benefícios, custos e controle de consistência.

## Organização do encontro — 3h20

| Bloco | Duração | Atividade |
|---|---:|---|
| Abertura e diagnóstico | 15 min | Rever tabela, linha, chave e redundância com um cadastro de endereços |
| Dependências e anomalias | 30 min | Ler dependências funcionais e demonstrar anomalias |
| Primeira forma normal | 25 min | Eliminar grupos repetidos sem perder a relação entre itens |
| Segunda forma normal | 30 min | Decompor atributos que dependem apenas de parte da chave composta |
| Intervalo | 10 min | — |
| Terceira forma normal | 35 min | Decompor dependências transitivas com cidade, estado e país |
| Exercício em grupos | 40 min | Normalizar um registro de matrícula e comparar propostas |
| Desnormalização e fechamento | 15 min | Avaliar uma cópia de dados para leitura e revisar critérios |

## 1. Relações, chaves e dependências funcionais

Uma relação é representada como tabela, com linhas e atributos. A chave candidata identifica uma linha de forma única; uma delas é escolhida como chave primária. Uma **dependência funcional** `X → Y` afirma que, em qualquer estado válido do banco, o valor de `X` determina um único valor de `Y`. Isso é uma regra do domínio, não apenas uma coincidência nos dados atuais.

Exemplos:

- `id_pessoa → nome, cidade_id`: um identificador de pessoa determina seus dados cadastrais.
- `cidade_id → nome_cidade, estado_id`: o identificador da cidade determina o nome e seu estado.
- `(pedido_id, produto_id) → quantidade`: a quantidade é registrada para cada produto de cada pedido.

Uma dependência pode ser **completa** em uma chave composta, **parcial** (depende de apenas parte dela) ou **transitiva** (a chave determina um atributo não-chave por meio de outro atributo não-chave).

## 2. Por que normalizar?

Considere uma tabela que repete informações de cidade, estado e país para cada pessoa:

| id_pessoa | nome | cidade_id | cidade | estado | país |
|---:|---|---:|---|---|---|
| 10 | Lia | 3552205 | Sorocaba | São Paulo | Brasil |
| 11 | Rui | 3552205 | Sorocaba | São Paulo | Brasil |
| 12 | Ana | 3304557 | Rio de Janeiro | Rio de Janeiro | Brasil |

Esse desenho cria anomalias:

- **Atualização:** se o nome do estado mudar, várias linhas precisam ser corrigidas. Uma linha esquecida deixa valores conflitantes.
- **Inserção:** não é possível cadastrar uma cidade ainda sem pessoa vinculada, se toda linha também exigir `id_pessoa`.
- **Exclusão:** remover a última pessoa de uma cidade pode apagar também a única cópia dos dados dessa cidade.

Normalizar organiza os fatos em relações cuja estrutura acompanha suas dependências. O objetivo é reduzir redundância evitável e anomalias sem perder os fatos nem as regras importantes.

## 3. Primeira forma normal — 1FN

Uma relação está na **1FN** quando cada célula contém um valor atômico no contexto do sistema, não há listas ou grupos repetidos em uma coluna e as linhas podem ser distinguidas por uma chave.

### Antes: grupos repetidos

```text
PEDIDO(id_pedido, data_pedido,
       produto_1, qtd_1, produto_2, qtd_2, produto_3, qtd_3)
```

O número de colunas depende do máximo de produtos; consultas precisam conhecer posições específicas e pedidos com quantidades diferentes deixam colunas vazias.

### Depois: um item por linha

```text
PEDIDO(id_pedido PK, data_pedido)
ITEM_PEDIDO(id_pedido PK/FK, numero_item PK,
            id_produto FK, quantidade)
```

Cada linha de `ITEM_PEDIDO` representa um item do pedido. A chave `(id_pedido, numero_item)` distingue as linhas, inclusive se um produto aparecer mais de uma vez no pedido.

**Atenção:** atomicidade depende do uso. Se o sistema pesquisa por cidade, guardar `Sorocaba, SP` numa coluna dificulta filtrar e validar cada parte. `nome_completo`, por outro lado, pode ser suficiente se o domínio não precisar separar nome e sobrenome.

## 4. Segunda forma normal — 2FN

Uma relação está na **2FN** quando está na 1FN e cada atributo não-chave depende da chave candidata inteira, e não de apenas uma parte. A questão aparece quando uma chave é composta. Se todas as chaves candidatas têm uma só coluna, a relação já atende à 2FN depois da 1FN.

Considere:

```text
ITEM_PEDIDO(
  id_pedido, id_produto, data_pedido,
  nome_produto, quantidade, preco_venda
)
PK: (id_pedido, id_produto)
```

Dependências adotadas neste exemplo:

```text
id_pedido                → data_pedido
id_produto               → nome_produto
(id_pedido, id_produto)  → quantidade, preco_venda
```

`data_pedido` depende só de `id_pedido`; `nome_produto` depende só de `id_produto`. São dependências parciais da chave composta. Decompondo:

```text
PEDIDO(id_pedido PK, data_pedido)
PRODUTO(id_produto PK, nome_produto)
ITEM_PEDIDO(id_pedido PK/FK, id_produto PK/FK,
            quantidade, preco_venda)
```

`preco_venda` fica no item porque registra o preço daquela venda; ele pode ser diferente do preço atual do produto. A decisão é semântica: o preço de catálogo teria outra dependência e outro lugar.

## 5. Terceira forma normal — 3FN

Uma relação está na **3FN** quando está na 2FN e atributos não-chave não dependem transitivamente da chave por meio de outro atributo não-chave. Em termos práticos para esta aula: dados de outra entidade não devem depender de um atributo comum da linha quando poderiam ser determinados por uma chave própria.

### Localização da pessoa

Na tabela original, assumimos estas regras:

```text
id_pessoa → nome, logradouro, cidade_id
cidade_id → nome_cidade, estado_id
estado_id → nome_estado, pais_id
pais_id → nome_pais
```

Logo, `id_pessoa → cidade_id → estado_id → pais_id`. Repetir os nomes da cidade, do estado e do país em cada pessoa gera dependências transitivas e redundância.

Uma decomposição em 3FN:

```text
PAIS(pais_id PK, nome_pais)
ESTADO(estado_id PK, nome_estado, pais_id FK → PAIS)
CIDADE(cidade_id PK, nome_cidade, estado_id FK → ESTADO)
PESSOA(id_pessoa PK, nome, logradouro, cidade_id FK → CIDADE)
```

As chaves estrangeiras mantêm o caminho entre as tabelas. Para saber o país de uma pessoa, seguimos `PESSOA → CIDADE → ESTADO → PAIS`. Cada fato (nome do país, estado e cidade) é mantido em um único lugar.

**Premissas do exemplo:** cada cidade pertence a um estado e cada estado pertence a um país. Os identificadores evitam ambiguidades como cidades homônimas. Em outro domínio, a regra pode ser diferente e o modelo deve mudar junto com ela.

### Por que a decomposição preserva os fatos?

O identificador estrangeiro liga cada parte ao seu determinante. Ao juntar as relações pelos IDs, recuperamos os dados associados sem criar combinações artificiais. Uma decomposição correta deve ser **sem perda**: o `JOIN` das partes reproduz as associações válidas do original. As FKs e a unicidade das chaves dão suporte a essa garantia.

## 6. Comparando as formas normais

| Forma | Verificação central | Problema típico corrigido |
|---|---|---|
| 1FN | Uma ocorrência por célula e sem grupos repetidos | listas em coluna, `produto_1`/`produto_2` |
| 2FN | Atributo não-chave depende da chave composta inteira | dados do pedido ou do produto repetidos em cada item |
| 3FN | Atributo não-chave não depende de outro atributo não-chave | cidade repetindo estado e país em cada pessoa |

As formas são cumulativas: para chegar à 3FN, a relação deve satisfazer 1FN e 2FN antes.

## 7. Exercício orientado — matrícula

Considere o registro abaixo, com uma disciplina por linha:

```text
MATRICULA(
  id_aluno, nome_aluno, id_disciplina, nome_disciplina,
  id_departamento, nome_departamento, semestre, ano, nota
)
PK: (id_aluno, id_disciplina, semestre, ano)
```

Regras do domínio:

- `id_aluno → nome_aluno`
- `id_disciplina → nome_disciplina, id_departamento`
- `id_departamento → nome_departamento`
- `(id_aluno, id_disciplina, semestre, ano) → nota`

Em dupla ou individualmente:

1. Identifique dependências parciais e transitivas.
2. Proponha as relações que atendem à 1FN, 2FN e 3FN.
3. Marque PKs e FKs e explique onde fica `nota`.
4. Dê um exemplo de anomalia evitada pela proposta.
5. Confirme que os dados originais podem ser reconstruídos com junções.

### Uma decomposição possível

```text
ALUNO(id_aluno PK, nome_aluno)
DEPARTAMENTO(id_departamento PK, nome_departamento)
DISCIPLINA(id_disciplina PK, nome_disciplina,
           id_departamento FK → DEPARTAMENTO)
MATRICULA(id_aluno PK/FK → ALUNO,
          id_disciplina PK/FK → DISCIPLINA,
          semestre PK, ano PK, nota)
```

`nota` depende da chave inteira da matrícula; nome do aluno, nome da disciplina e nome do departamento têm suas próprias relações.

## 8. Desnormalização

**Desnormalizar** é introduzir deliberadamente redundância ou armazenar um resultado derivável para atender a uma necessidade observada, geralmente reduzir o custo de leituras. Não é uma forma normal e não corrige um modelo por si só.

Possíveis estratégias:

- Guardar `nome_pais` também em uma tabela de relatórios, embora ele possa ser obtido por junções.
- Manter uma tabela resumo atualizada periodicamente para um painel de consulta.
- Registrar um endereço textual de entrega na venda como fotografia do que foi informado naquele momento. Isso preserva o histórico da transação; não é necessariamente erro de modelagem, pois o valor descreve um fato histórico diferente do endereço cadastral atual.

Antes de desnormalizar, identifique a consulta lenta e meça seu custo. Considere índices, consultas bem escritas, views ou views materializadas. Se ainda houver motivo para duplicar dados, defina qual cópia é a fonte oficial, como a atualização será propagada, com que atraso é aceitável e como divergências serão detectadas.

**Custos:** mais espaço, escrita mais complexa, risco de cópias divergentes, atualizações adicionais e verificações de consistência. Em Oracle, uma view comum calcula os dados na consulta; uma view materializada armazena resultados e exige estratégia de atualização.

## 9. Síntese e perguntas de saída

- Qual coluna ou grupo repetido você eliminaria primeiro para obter 1FN?
- Qual atributo do exemplo de pedido dependia só de uma parte da chave?
- Que cadeia de dependências levou à decomposição `PESSOA → CIDADE → ESTADO → PAIS`?
- O que precisa ser verdade para que uma decomposição seja sem perda?
- Que evidência justificaria copiar um valor derivável de volta para uma tabela?

Uma boa normalização começa nas regras de dependência do domínio. A desnormalização só é justificável quando uma necessidade real de leitura compensa o custo extra de manter cópias corretas.
