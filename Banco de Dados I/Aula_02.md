# ROTEIRO DE AULA EXPANDIDO — AULA 02

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 14/08/2026 &nbsp;|&nbsp; **Data Programada:** 02/10/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Modelagem Conceitual de Dados I — Abordagem Entidade-Relacionamento (DER Básico) e Cardinalidades  
**Ambiente de Software:** brModelo 3.0 (ou brModelo Web / Draw.io)  
**Articulação com o PPC:** Competência 2 — Planejar e desenvolver modelos conceituais estruturados a partir de requisitos de negócio  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula prática em laboratório, você será capaz de:
1. Compreender o propósito da **Modelagem Conceitual** como etapa de abstração pura, independente de qualquer SGBD ou linguagem de programação específica.
2. Identificar e representar **Entidades Fortes** (regulares) e **Entidades Fracas** (dependentes de existência e identificação).
3. Classificar rigorosamente os **Atributos**: simples/atômicos, compostos, monovalorados, multivalorados, derivados e identificadores (chaves conceituais).
4. Determinar e documentar as **Cardinalidades Mínimas e Máximas** nos relacionamentos binários utilizando a notação clássica de Peter Chen e a notação pé-de-galinha (*Crow's Foot*).
5. Interpretar regras semânticas de negócio expressas em linguagem natural e traduzi-las graficamente em um **Diagrama Entidade-Relacionamento (DER)** no software brModelo.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 O Modelo Entidade-Relacionamento (MER / DER)

Proposto formalmente por **Peter Chen em 1976**, o Modelo Entidade-Relacionamento é o padrão industrial universal para a representação do esquema conceitual da organização:
* **Entidade:** Objeto do mundo real com existência autônoma sobre o qual se deseja armazenar dados (ex.: `CLIENTE`, `PRODUTO`, `PEDIDO`, `MAQUINA`).
* **Relacionamento:** Associação semântica entre duas ou mais entidades (ex.: "Cliente *realiza* Pedido", "Máquina *pertence a* Setor").

```
             ┌─────────────────────────┐
             │       NOTAS CHEN        │
             ├─────────────────────────┤
             │ [ Retângulo ] = Entidade│
             │ ( Elipse )    = Atributo│
             │ < Losango >   = Relac.  │
             └─────────────────────────┘

        (id_cliente)                        (id_pedido)
             │                                   │
      ┌──────┴──────┐      (1,N)   (1,1)   ┌─────┴───────┐
      │   CLIENTE   ├───────< REALIZA >────┤   PEDIDO    │
      └──────┬──────┘                      └─────┬───────┘
             │                                   │
        (nome_razao)                        (valor_total)
```

---

### 2.2 Tipologia Completa dos Atributos

| Tipo de Atributo | Definição Teórica | Notação / Exemplo Prático |
| :--- | :--- | :--- |
| **Simples (Atômico)** | Não pode ser dividido em partes menores significativas. | `preco_unitario`, `idade`, `cpf`. |
| **Composto** | Composto por múltiplos subatributos lógicos independentes. | `Endereco` $\to$ dividido em: `Rua`, `Numero`, `Bairro`, `CEP`. |
| **Monovalorado** | Armazena exatamente um valor para uma determinada ocorrência. | `data_nascimento`, `peso_kg`. |
| **Multivalorado** | Pode conter múltiplos valores simultâneos para a mesma entidade. | `Telefones` (um cliente possui 2 ou 3 números); no DER de Chen: elipse dupla `(( Telefones ))`. |
| **Derivado (Calculado)**| Não precisa ser armazenado fisicamente; seu valor é computado a partir de outros dados. | `idade` (calculada a partir da `data_nascimento`); no DER: elipse tracejada `(- idade -)`. |
| **Identificador (Chave)**| Identifica univocamente cada instância da entidade. | `id_cliente`, `numero_chassi`; no DER: elipse com círculo preenchido ou sublinhado `( • id_cliente )`. |

---

### 2.3 Entidades Fracas (*Weak Entities*)

* **Conceito:** Entidade cuja existência no banco depende da existência de outra entidade-proprietária (*entidade forte*), e cujos atributos próprios não são suficientes para formar uma chave primária exclusiva.
* **Exemplo Clássico:** `DEPENDENTE` em relação ao `FUNCIONARIO`.
  * Se o funcionário é demitido, seus dependentes deixam de ter razão de existir no plano de saúde da empresa.
  * O identificador do dependente é composto por: $(\text{id\_funcionario} + \text{numero\_ordem\_dependente})$.
  * **Notação Chen:** Retângulo duplo para a entidade fraca e losango duplo para o relacionamento de identificação.

---

### 2.4 Cardinalidades Mínimas e Máximas

A cardinalidade expressa as regras de restrição quantitativa da associação entre entidades:

$$\text{Notação: } (\text{Cardinalidade Mínima}, \text{Cardinalidade Máxima})$$

1. **Cardinalidade Mínima (Participação):**
   * $(0, \dots)$: Participação **Opcional**. Uma instância da entidade pode existir sem estar associada a nenhuma instância da outra entidade (ex.: um técnico recém-contratado que ainda não tem ordem de serviço associada: $(0, N)$).
   * $(1, \dots)$: Participação **Obrigatória / Total**. Toda instância precisa estar associada a pelo menos uma instância da outra entidade (ex.: todo pedido precisa ter um cliente: $(1, 1)$).
2. **Cardinalidade Máxima:**
   * **Um para Um ($1:1$):** Exemplo: Departamento chefiado por um Funcionário Gerente.
   * **Um para Muitos ($1:N$):** Exemplo: Um Setor possui muitas Máquinas; cada Máquina pertence a um único Setor.
   * **Muitos para Muitos ($N:N$):** Exemplo: Um Pedido possui muitos Produtos; um Produto pode constar em múltiplos Pedidos.

---

## 3. OFICINA PRÁTICA EM LABORATÓRIO (PASSO A PASSO NO BRMODELO)

### Estudo de Caso: "Controle de Vendas Comercial Sorocaba"

Construa no brModelo o diagrama conceitual completo atendendo às seguintes regras:
1. A empresa comercializa **Produtos**, caracterizados por código do produto (identificador), nome, preço de venda e quantidade em estoque.
2. Cada produto pertence obrigatoriamente a uma única **Categoria** (ex.: Eletrônicos, Ferramentas, Informática), e uma categoria pode ter nenhum ou vários produtos associados.
3. Os **Clientes** possuem código, nome completo, CPF, e-mail e podem ter **múltiplos telefones** para contato.
4. Um cliente pode realizar nenhum ou múltiplos **Pedidos**. Cada pedido possui número do pedido, data/hora e valor total. Um pedido deve pertencer obrigatoriamente a um único cliente.
5. Um pedido contém um ou vários **Produtos**, e um produto pode estar presente em vários pedidos. Em cada item vendido dentro do pedido, registra-se a **quantidade vendida** e o **preço praticado no momento da venda**.

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Explique por que um relacionamento $N:N$ exige que atributos contextuais da transação (como `quantidade_vendida` e `desconto_aplicado`) residam no **losango do relacionamento** no nível conceitual, e não nas entidades `PEDIDO` ou `PRODUTO`.
2. Diferencie um atributo **Composto** de um atributo **Multivalorado**. Dê um exemplo prático de cada um no contexto de um sistema acadêmico.
3. Em uma montadora de aeronaves, considere a relação: "Aeronave *possui* Motor". Sabendo que uma aeronave pode operar com 2 a 4 motores, e cada motor específico possui número de série único instalado em apenas uma aeronave por vez:
   - Escreva as cardinalidades mínimas e máximas de ambos os lados da associação.

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 3:** *Modelagem de Dados Usando o Modelo Entidade-Relacionamento (ER): Entidades, Atributos, Relacionamentos, Cardinalidades e Notações Diagramáticas* (p. 43–82).
2. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 2:** *Modelo Entidade-Relacionamento: Elementos Estruturais e Elaboração de Diagramas* (p. 35–66).
3. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 6:** *Projeto de Banco de Dados e o Modelo ER: Conjuntos de Entidades, Conjuntos de Relacionamentos e Restrições de Mapeamento* (p. 185–234).
