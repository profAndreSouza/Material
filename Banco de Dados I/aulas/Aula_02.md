# Roteiro de Aula — Aula 02

**Componente curricular:** Banco de Dados I  
**Tema:** Modelagem conceitual: atributos, entidades fracas, cardinalidades e atributos em relacionamentos  
**Ferramenta:** brModelo (ou brModelo Web)  
**Modalidade indicada nos slides:** presencial, em sala e laboratório  
**Duração:** 3h20

## Objetivos de aprendizagem

Ao final, o estudante deverá interpretar atributos e cardinalidades em um DER, distinguir entidades fortes e fracas, associar atributos transacionais ao relacionamento que os determina e produzir um diagrama conceitual no brModelo.

## Organização do encontro

| Etapa | Duração | Atividade |
|---|---:|---|
| Correção e nivelamento | 30 min | Correção comentada da Biblioteca Saber, proposta na Aula 01 |
| Teoria do DER | 50 min | Tipos de atributos, entidades fracas, cardinalidades e atributos de relacionamento |
| Apresentação do brModelo | 30 min | Interface, ferramentas e configuração de cardinalidades |
| Prática guiada e oficina | 70 min | Controle Comercial Sorocaba e desafio autônomo da Oficina Mecânica |

Os tempos detalhados nos slides somam 3 horas; o roteiro da apresentação não discrimina os 20 minutos restantes do encontro de 3h20.

## 1. Correção da Biblioteca Saber

O sistema registra `LIVRO(id_livro, titulo, ano_publicacao)` e `EDITORA(id_editora, razao_social, cidade)`, ligados por `PUBLICA`.

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

Uma entidade forte possui identificador próprio no domínio. Uma entidade fraca depende de outra entidade para sua identificação ou existência. Por exemplo, dependentes podem ser identificados pelo par `(id_funcionario, numero_dependente)`, se o número for único somente dentro de cada funcionário. Em Chen, retângulo duplo representa a entidade fraca e losango duplo, o relacionamento identificador.

## 3. Cardinalidades e relacionamentos

Cardinalidade mínima indica participação opcional (`0`) ou obrigatória (`1`); máxima indica limite de uma ocorrência (`1`) ou várias (`N`). Os pares são escritos `(mínimo, máximo)` e descrevem as regras do domínio.

- 1:1: cada ocorrência associa-se a, no máximo, uma ocorrência do outro lado.
- 1:N: uma ocorrência de um lado pode associar-se a várias do outro, mas cada ocorrência do lado N aponta para no máximo uma do lado 1.
- N:N: ocorrências de ambos os lados podem associar-se a várias do outro lado.

Exemplos: `CLIENTE (0,N) — REALIZA — (1,1) PEDIDO`; `CATEGORIA (0,N) — CLASSIFICA — (1,1) PRODUTO`; `PEDIDO (1,N) — CONTÉM — (0,N) PRODUTO` quando cada pedido precisa conter ao menos um produto.

### Atributos de um relacionamento N:N

Se um pedido contém produtos, `quantidade` e `preco_praticado` descrevem cada ocorrência do produto naquele pedido. Não descrevem isoladamente o produto (que pode participar de pedidos diferentes com quantidades e preços distintos) nem o pedido (que pode conter várias linhas). No DER conceitual, esses atributos são ligados ao losango `CONTÉM`. No modelo lógico, a associação será representada por uma relação associativa, assunto retomado na Aula 03.

## 4. Construção no brModelo

Criar entidades, seus atributos e identificadores; adicionar relacionamentos e ligá-los às entidades; definir cada par mínimo/máximo junto à entidade correspondente; e conectar atributos de associação diretamente ao losango. Revisar se não há atributos desconectados, entidades sem identificador ou cardinalidades invertidas. Na interface apresentada nos slides, o par é ajustado nas propriedades da conexão.

## 5. Prática guiada — Controle Comercial Sorocaba

Requisitos a representar no modelo conceitual:

1. `PRODUTO`: código, nome, preço de venda e quantidade em estoque. `CATEGORIA`: código e nome. Cada produto pertence a exatamente uma categoria; uma categoria pode ter zero ou muitos produtos.
2. `CLIENTE`: código, nome completo, CPF, e-mail e telefones. Telefones é atributo multivalorado.
3. Um cliente pode realizar zero ou muitos pedidos; cada pedido possui número, data/hora e valor total e pertence a exatamente um cliente.
4. Cada pedido contém um ou mais produtos; um produto pode não aparecer em pedidos ou aparecer em vários. `quantidade_vendida` e `preco_praticado` são atributos de `CONTÉM`.

O DER conceitual deve manter esses atributos no relacionamento; a tabela `ITENS_PEDIDO` pertence ao mapeamento lógico posterior, não deve ser confundida com a representação inicial em Chen indicada nos slides.

## 6. Desafio autônomo — Oficina Mecânica Sorocaba

Modelar clientes (`código`, `nome`, `CPF`, telefones), veículos (`placa`, `marca`, `modelo`, `ano`), ordens de serviço (`número`, data de abertura, status, valor total) e serviços (`código`, descrição, preço da hora). Um cliente pode possuir vários veículos; cada veículo pertence a exatamente um cliente. Cada OS é aberta para um único veículo. Uma OS pode incluir diversos serviços; para cada serviço executado naquela OS, registrar quantidade de horas.

Entrega: arquivo do brModelo com identificadores e cardinalidades corretos, incluindo o N:N `ORDEM_SERVICO`–`SERVICO` com `horas_trabalhadas` como atributo do relacionamento.

## Próximos passos

Na Aula 03, serão retomados auto-relacionamentos, especializações, associações N:N com atributos e sua migração para o modelo lógico.
