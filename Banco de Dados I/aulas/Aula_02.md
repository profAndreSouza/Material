# Roteiro de Aula — Aula 02

**Componente curricular:** Banco de Dados I  
**Data:** 16/10/2026 (Letivo 3)  
**Modalidade:** Presencial, com atividades em sala e laboratório  
**Tema:** Modelagem conceitual de dados: modelo Entidade-Relacionamento e cardinalidades  
**Ferramentas:** brModelo 3.0, brModelo Web ou Draw.io  
**Articulação com o PPC:** Competência 2 — Planejar e desenvolver modelos conceituais com base em requisitos de negócio.

---

## 1. Objetivos de aprendizagem

Ao final da aula, você deverá ser capaz de:

1. Explicar a finalidade do modelo conceitual e sua independência de um SGBD específico.
2. Distinguir entidades fortes de entidades fracas e identificar a dependência de existência e de identificação.
3. Classificar atributos como simples, compostos, monovalorados, multivalorados, derivados ou identificadores.
4. Definir cardinalidades mínimas e máximas em relacionamentos binários e representá-las nas notações Chen e pé-de-galinha (*Crow's Foot*).
5. Interpretar requisitos escritos em linguagem natural e representá-los em um Diagrama Entidade-Relacionamento (DER) usando o brModelo.

## 2. Fundamentação teórica

### 2.1 Modelo e diagrama Entidade-Relacionamento

Peter Chen apresentou o modelo Entidade-Relacionamento (MER) em 1976. O MER descreve os dados de interesse de um domínio, suas propriedades, associações e restrições. Ele é usado na etapa conceitual do projeto e não depende de um SGBD específico.

O Diagrama Entidade-Relacionamento (DER) é uma forma gráfica de representar o MER. Na notação Chen, retângulos representam entidades, elipses representam atributos e losangos representam relacionamentos.

* **Entidade:** classe de objetos sobre os quais o sistema precisa manter dados, como `CLIENTE`, `PRODUTO` ou `PEDIDO`.
* **Relacionamento:** associação entre ocorrências de entidades, como um cliente que realiza um pedido ou uma máquina que pertence a um setor.

```text
       (id_cliente)                         (id_pedido)
            |                                    |
     +-------------+       REALIZA       +-------------+
     |   CLIENTE   |---------------------|    PEDIDO   |
     +-------------+                     +-------------+
            |                                    |
         (nome)                           (data_emissao)

    Notação Chen: retângulo = entidade; elipse = atributo;
                  losango = relacionamento.
```

### 2.2 Tipos de atributos

| Tipo | Definição | Exemplo |
| :--- | :--- | :--- |
| **Simples (atômico)** | Não é subdividido em partes relevantes para o sistema. | `preco_unitario`, `cpf`. |
| **Composto** | Pode ser decomposto em componentes com significado próprio. | `endereco`: rua, número, bairro e CEP. |
| **Monovalorado** | Tem um valor por ocorrência da entidade. | `data_nascimento`. |
| **Multivalorado** | Pode ter vários valores para a mesma ocorrência. | Telefones de um cliente. Em Chen, usa-se elipse dupla. |
| **Derivado** | Pode ser calculado com base em outros dados. | `idade`, calculada a partir de `data_nascimento`. Em Chen, usa-se elipse tracejada. |
| **Identificador** | Distingue cada ocorrência da entidade das demais. | `id_cliente` ou `numero_chassi`; costuma ser sublinhado em Chen. |

Um atributo derivado pode ser armazenado por decisão de implementação ou desempenho. No modelo conceitual, a classificação indica que seu valor pode ser obtido a partir de outros atributos.

### 2.3 Entidades fracas

Uma entidade fraca depende de outra entidade para existir ou para ser identificada. Seus atributos próprios não formam, por si só, um identificador suficiente no domínio modelado.

**Exemplo:** um `DEPENDENTE` pode ser identificado dentro do cadastro de um `FUNCIONARIO` pelo par `(id_funcionario, numero_ordem_dependente)`. O número de ordem só é único entre os dependentes daquele funcionário. Na notação Chen, a entidade fraca é representada por retângulo duplo e o relacionamento identificador por losango duplo.

### 2.4 Cardinalidades mínimas e máximas

A cardinalidade informa quantas ocorrências de uma entidade podem ou devem participar de um relacionamento. Neste roteiro, cada lado é descrito pelo par `(mínimo, máximo)`.

* **Mínimo 0:** participação opcional. A ocorrência pode existir sem participar do relacionamento.
* **Mínimo 1:** participação obrigatória. A ocorrência deve participar de pelo menos um relacionamento.
* **Máximo 1:** pode participar de, no máximo, uma ocorrência do outro lado.
* **Máximo N:** pode participar de várias ocorrências do outro lado.

Exemplos de leitura:

* `CLIENTE (0, N) — REALIZA — PEDIDO (1, 1)`: um cliente pode não ter pedidos ou ter vários; cada pedido pertence a exatamente um cliente.
* `CATEGORIA (0, N) — CLASSIFICA — PRODUTO (1, 1)`: uma categoria pode classificar vários produtos ou nenhum; cada produto pertence a exatamente uma categoria.
* `PEDIDO (1, N) — CONTÉM — PRODUTO (0, N)`: segundo a regra adotada, cada pedido contém um ou mais produtos, e um produto pode ainda não aparecer em pedidos ou aparecer em vários.

Os exemplos mostram as regras do domínio, não uma propriedade automática do modelo. As cardinalidades devem ser confirmadas com os requisitos do sistema.

## 3. Oficina prática no brModelo

### Estudo de caso: Controle de Vendas Comercial Sorocaba

Modele as regras a seguir em um DER conceitual:

1. A empresa cadastra produtos com código identificador, nome, preço de venda e quantidade em estoque.
2. Cada produto pertence a exatamente uma categoria. Uma categoria pode ter nenhum produto ou vários produtos.
3. Cada cliente tem código identificador, nome completo, CPF e e-mail. Um cliente pode ter vários telefones de contato.
4. Um cliente pode realizar nenhum pedido ou vários pedidos. Cada pedido tem número identificador, data e hora de emissão e valor total, e pertence a exatamente um cliente.
5. Cada pedido contém um ou mais produtos. Um produto pode aparecer em nenhum pedido ou em vários pedidos. Para cada produto em cada pedido, registre a quantidade vendida e o preço praticado naquela venda.

Os atributos `quantidade_vendida` e `preco_praticado` descrevem a ocorrência do relacionamento entre `PEDIDO` e `PRODUTO`: seus valores podem variar de um pedido para outro. Por isso, no modelo conceitual Chen, eles são atributos do relacionamento `CONTEM`, não atributos isolados de `PEDIDO` ou `PRODUTO`.

## 4. Exercícios de fixação

1. Explique por que `quantidade_vendida` e `desconto_aplicado` dependem da associação entre um pedido e um produto. Represente em que elemento do DER esses atributos devem aparecer.
2. Diferencie atributo composto de atributo multivalorado. Dê um exemplo de cada em um sistema acadêmico.
3. Uma aeronave opera com no mínimo dois e no máximo quatro motores. Cada motor identificado pelo número de série está instalado em, no máximo, uma aeronave por vez. Considere que todo motor cadastrado está instalado em uma aeronave. Informe o par `(mínimo, máximo)` para cada lado do relacionamento `POSSUI`.

## 5. Referências

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019. Capítulo 3, p. 43–82.
2. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018. Capítulo 2, p. 35–66.
3. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020. Capítulo 6, p. 185–234.
