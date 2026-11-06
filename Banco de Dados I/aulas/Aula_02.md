# Roteiro de Aula — Aula 02

**Componente curricular:** Banco de Dados I\
**Tema:** Modelagem conceitual: atributos, entidades fracas, cardinalidades e atributos em relacionamentos\
**Ferramenta:** brModelo (ou brModelo Web)\
**Modalidade indicada nos slides:** presencial, em sala e laboratório\
**Duração:** 3h20\
**Apresentação de referência:** [aula-02.js](../slides/aula-02.js) — 30 slides

## Objetivos de aprendizagem

Ao final, o estudante deverá interpretar atributos e cardinalidades em um DER, distinguir entidades fortes e fracas, associar atributos transacionais ao relacionamento que os determina e produzir um diagrama conceitual no brModelo.

## Organização do encontro

| Etapa | Slides | Duração | Atividade |
|---|---|---:|---|
| Correção e nivelamento | 1–6 | 30 min | Correção comentada da Biblioteca Saber, proposta na Aula 01 |
| Teoria do DER | 7–17 | 50 min | Tipos de atributos, entidades fracas, cardinalidades e atributos de relacionamento |
| Apresentação do brModelo | 18–21 | 30 min | Interface, ferramentas e configuração de cardinalidades |
| Prática guiada e oficina | 22–30 | 70 min | Controle Comercial Sorocaba e desafio autônomo da Oficina Mecânica |

Os tempos detalhados nos slides somam 3 horas; o roteiro da apresentação não discrimina os 20 minutos restantes do encontro de 3h20.

## 1. Correção da Biblioteca Saber

O sistema registra `LIVRO(cod_livro, titulo, ano_pub)` e `EDITORA(cod_editora, razao_social, cidade)`, ligados por `PUBLICA` (ou `PUBLICADO_POR`), conforme os nomes usados na correção dos slides. Os códigos são os identificadores.

- Cada livro é publicado por exatamente uma editora: `LIVRO (1,1)`.
- Uma editora pode estar cadastrada antes de publicar livros no acervo e pode publicar vários: `EDITORA (0,N)`.
- A cardinalidade máxima configura uma relação 1:N. O mínimo zero do lado EDITORA é significativo: não se exige que a editora já tenha livro associado para existir no cadastro.

## 2. Atributos e entidades

### Tipos de atributo

| Tipo | Critério | Exemplo |
|---|---|---|
| Simples | Não se decompõe em partes relevantes para o sistema | CPF |
| Composto | Possui componentes com significado próprio | Endereço: logradouro, número, bairro, CEP |
| Monovalorado | Um valor por instância | Data de nascimento |
| Multivalorado | Pode assumir vários valores por instância | Telefones de um cliente |
| Derivado | Pode ser calculado a partir de outros dados | Idade, derivada da data de nascimento |
| Identificador | Distingue uma instância de todas as demais | `id_cliente` |

Em Chen, atributo multivalorado é representado por elipse dupla e atributo derivado por elipse tracejada. Um atributo composto se ramifica em seus componentes. No mapeamento relacional, atributos multivalorados normalmente originam uma relação própria.

### Entidades fortes e fracas

Uma entidade forte possui identificador próprio no domínio. Uma entidade fraca depende de uma entidade proprietária e possui apenas um identificador parcial: sua identificação completa inclui a identificação da proprietária. Por exemplo, dependentes podem ser identificados pelo par `(id_funcionario, num_dependente)`, se o número for único somente dentro de cada funcionário. Em Chen, retângulo duplo representa a entidade fraca e losango duplo, o relacionamento identificador. A dependência de existência, sozinha, não basta para concluir que uma entidade não tenha identificador próprio.

No exemplo, cada dependente pertence a exatamente um funcionário; um funcionário pode ter zero ou muitos dependentes. A regra deve ser explicitada em texto junto ao diagrama.

## 3. Cardinalidades e relacionamentos

Cardinalidade mínima indica participação opcional (`0`) ou obrigatória (`1`); máxima indica limite de uma ocorrência (`1`) ou várias (`N`). Os pares são escritos `(mínimo, máximo)` e descrevem as regras do domínio.

| Par | Leitura |
|---|---|
| `(0,1)` | Participação opcional, no máximo uma associação |
| `(1,1)` | Participação obrigatória em exatamente uma associação |
| `(0,N)` | Participação opcional em várias associações |
| `(1,N)` | Participação obrigatória em uma ou várias associações |

**Convenção deste roteiro:** o par junto à entidade expressa a participação de uma ocorrência dela, como na leitura por papéis da Aula 03. Assim, `CLIENTE (0,N)` significa que um cliente pode participar de zero ou muitas associações com pedidos. A apresentação da Aula 02 alterna essa convenção com rótulos colocados na ponta oposta em alguns passos do laboratório. Para conferir o modelo, use as frases de negócio e mantenha uma única convenção em todo o desenho.

- 1:1: cada ocorrência associa-se a, no máximo, uma ocorrência do outro lado.
- 1:N: uma ocorrência de um lado pode associar-se a várias do outro, mas cada ocorrência do lado N aponta para no máximo uma do lado 1.
- N:N: ocorrências de ambos os lados podem associar-se a várias do outro lado.

Exemplos: `CLIENTE (0,N) — REALIZA — (1,1) PEDIDO`; `CATEGORIA (0,N) — CLASSIFICA — (1,1) PRODUTO`; `PEDIDO (1,N) — CONTÉM — (0,N) PRODUTO` quando cada pedido precisa conter ao menos um produto.

### Atributos de um relacionamento N:N

Se um pedido contém produtos, `quantidade` e `preco_praticado` descrevem cada ocorrência do produto naquele pedido. Não descrevem isoladamente o produto (que pode participar de pedidos diferentes com quantidades e preços distintos) nem o pedido (que pode conter várias linhas). No DER conceitual, esses atributos são ligados ao losango `CONTÉM`. No modelo lógico, a associação será representada por uma relação associativa, assunto retomado na Aula 03.

## 4. Construção no brModelo

Reconheça as três áreas apresentadas nos slides: barra de componentes (entidade, relacionamento, atributo e conector), canvas para organizar o diagrama e painel de propriedades para nomes, identificadores e cardinalidades.

1. Crie as entidades, com nomes no singular e em maiúsculas.
2. Adicione os atributos em minúsculas e marque os identificadores.
3. Crie os relacionamentos e conecte-os às entidades.
4. Ajuste as cardinalidades nas propriedades das conexões, conferindo a leitura de cada regra.
5. Conecte os atributos da associação diretamente ao losango correspondente.

Antes de salvar, confira os cinco pontos do checklist dos slides: nenhum atributo desconectado; toda entidade forte com identificador; pares na ordem mínimo/máximo; relacionamentos ligados a entidades; atributos de transação ligados ao relacionamento N:N.

## 5. Prática guiada — Controle Comercial Sorocaba

O caso completo contém **quatro entidades**: CATEGORIA, PRODUTO, CLIENTE e PEDIDO. Os telefones são representados como atributo multivalorado de CLIENTE; os dados dos itens ficam no relacionamento CONTEM.

Requisitos a representar no modelo conceitual:

1. `PRODUTO`: código, nome, preço de venda e quantidade em estoque. `CATEGORIA`: código e nome. Cada produto pertence a exatamente uma categoria; uma categoria pode ter zero ou muitos produtos.
2. `CLIENTE`: código, nome completo, CPF, e-mail e telefones. Telefones é atributo multivalorado.
3. Um cliente pode realizar zero ou muitos pedidos; cada pedido possui número, data/hora e valor total e pertence a exatamente um cliente.
4. Cada pedido contém um ou mais produtos; um produto pode não aparecer em pedidos ou aparecer em vários. `quantidade_vendida` e `preco_praticado` são atributos de `CONTÉM`.

O DER conceitual deve manter esses atributos no relacionamento; a tabela `ITENS_PEDIDO` pertence ao mapeamento lógico posterior, não deve ser confundida com a representação inicial em Chen indicada nos slides.

Use os nomes definidos nos passos da apresentação:

```text
CATEGORIA(id_categoria, nome_categoria)
PRODUTO(id_produto, nome, preco_tabela, qtd_estoque)
CLIENTE(id_cliente, nome, cpf, email, telefones [multivalorado])
PEDIDO(num_pedido, data_emissao, valor_total)

CATEGORIA (0,N) — PERTENCE_A — (1,1) PRODUTO
CLIENTE (0,N) — REALIZA — (1,1) PEDIDO
PEDIDO (1,N) — CONTEM — (0,N) PRODUTO
CONTEM: quantidade_vendida, preco_praticado
```

Marque os códigos e `num_pedido` como identificadores. Se `valor_total` for calculado pela soma dos itens, represente-o como derivado. Salve o modelo como `comercial_sorocaba.brM3`, conforme a apresentação, ou no formato equivalente da versão Web.

## 6. Desafio autônomo — Oficina Mecânica Sorocaba

**Tempo indicado no slide:** 40 minutos, dentro da etapa de prática e oficina. **Organização:** individual ou em duplas, com apoio do professor.

Modelar clientes (`código`, `nome`, `CPF`, telefones), veículos (`placa`, `marca`, `modelo`, `ano`), ordens de serviço (`número`, data de abertura, status, valor total) e serviços (`código`, descrição, preço da hora). Um cliente pode possuir vários veículos; cada veículo pertence a exatamente um cliente. Cada OS é aberta para um único veículo. Uma OS pode incluir diversos serviços; para cada serviço executado naquela OS, registrar quantidade de horas. Explicite as hipóteses adotadas para mínimos de participação que o enunciado não determina, como a possibilidade de uma OS recém-aberta ainda não ter serviços.

Entrega: arquivo do brModelo com identificadores e cardinalidades corretos, incluindo o N:N `ORDEM_SERVICO`–`SERVICO` com `horas_trabalhadas` como atributo do relacionamento.

## Próximos passos

Na Aula 03, serão retomados auto-relacionamentos, especializações, associações N:N com atributos e sua migração para o modelo lógico.
