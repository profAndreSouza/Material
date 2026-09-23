# ROTEIRO DE AULA EXPANDIDO — AULA 04

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 28/08/2026 &nbsp;|&nbsp; **Data Programada:** 16/10/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Mapeamento do Modelo Conceitual (DER) para o Modelo Lógico Relacional (Esquema Tabular)  
**Ambiente de Software:** brModelo 3.0 e DBeaver  
**Articulação com o PPC:** Competência 2 — Traduzir modelos semânticos abstratos em esquemas lógicos relacionais normalizados com integridade referencial estrita  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula prática em laboratório, você será capaz de:
1. Compreender a formalização do **Modelo Relacional** estabelecida por Edgar F. Codd (1970) e sua correspondência matemática com a teoria dos conjuntos.
2. Definir e identificar **Relação (Tabela)**, **Tupla (Linha/Registro)**, **Atributo (Coluna)**, **Domínio** e **Grau da Relação**.
3. Dominar a taxonomia de chaves: **Superchave**, **Chave Candidata**, **Chave Primária (PK)**, **Chave Alternativa** e **Chave Estrangeira (FK)**.
4. Aplicar sistematicamente as **7 Regras Algorítmicas de Mapeamento DER $\to$ Relacional** (tratamento de entidades fortes, fracas, cardinalidades $1:1$, $1:N$, $N:N$, atributos multivalorados e herança).
5. Garantir as três regras fundamentais de integridade relacional:
   * **Integridade de Entidade:** A chave primária jamais pode assumir valor nulo (`NULL`);
   * **Integridade Referencial:** Todo valor de chave estrangeira deve corresponder exatamente a uma chave primária existente na tabela referenciada ou ser explicitamente nulo;
   * **Integridade de Domínio:** Os valores atribuídos a uma coluna devem obedecer estritamente ao tipo, tamanho e restrições pré-definidas.

---

## 2. FUNDAMENTAÇÃO TEÓRICA: AS 7 REGRAS DE MAPEAMENTO

A conversão do DER conceitual para o modelo lógico relacional não é intuitiva ou arbitrária; segue um **algoritmo determinístico padronizado**:

```
┌────────────────────────────────────────────────────────────────────────┐
│               ALGORITMO DE MAPEAMENTO DER -> RELACIONAL                │
│                                                                        │
│ 1. Entidades Fortes          ===> Cria tabela com PK própria           │
│ 2. Entidades Fracas          ===> Cria tabela com PK Composta (FK + Id)│
│ 3. Relacionamentos 1:1       ===> FK em um dos lados com UNIQUE        │
│ 4. Relacionamentos 1:N       ===> FK migra para o lado N               │
│ 5. Relacionamentos N:N       ===> Nova tabela de junção com PK Composta│
│ 6. Atributos Multivalorados  ===> Nova tabela com FK da entidade-mãe   │
│ 7. Especializações           ===> Tabela por classe com mesma PK/FK    │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Regra 1: Mapeamento de Entidades Fortes (Regulares)
Para cada entidade forte no DER, cria-se uma tabela relacional. Todos os atributos simples tornam-se colunas. Se houver um atributo composto, ele é desmembrado em seus componentes simples. Escolhe-se uma das chaves candidatas para ser a **Chave Primária ($\text{PK}$)**.
* *Notação:* $\text{CLIENTES} (\underline{\text{id\_cliente}}, \text{nome}, \text{cpf}, \text{rua}, \text{numero}, \text{cidade}, \text{cep})$

### Regra 2: Mapeamento de Entidades Fracas
Cria-se uma tabela para a entidade fraca. Sua Chave Primária será obrigatoriamente **composta**: a $\text{PK}$ da entidade forte proprietária (como $\text{FK}$) somada ao identificador parcial (*discriminador*) da entidade fraca.
* *Notação:* $\text{DEPENDENTES} (\underline{\text{id\_funcionario}}^*, \underline{\text{num\_sequencial}}, \text{nome\_dependente}, \text{grau\_parentesco})$

### Regra 3: Mapeamento de Relacionamentos $1:1$
Escolhe-se uma das tabelas (preferencialmente a que tem participação obrigatória/total) e insere-se nela a Chave Primária da outra tabela como **Chave Estrangeira ($\text{FK}$)**. Para garantir a cardinalidade máxima $1$, a coluna da $\text{FK}$ deve receber uma restrição de unicidade (**`UNIQUE`**).
* *Notação:* $\text{DEPARTAMENTOS} (\underline{\text{id\_depto}}, \text{nome\_depto}, \text{id\_gerente\_fk}^* \text{ [UNIQUE]})$

### Regra 4: Mapeamento de Relacionamentos $1:N$
**Regra de Ouro:** A Chave Primária do lado **1** migra como Chave Estrangeira ($\text{FK}$) para o lado **N** (Muitos). Quaisquer atributos próprios do relacionamento também migram para a tabela do lado $N$.
* *Exemplo (Setor $1:N$ Máquinas):* A tabela $\text{MAQUINAS}$ recebe a coluna $\text{id\_setor}^*$ como $\text{FK}$.

### Regra 5: Mapeamento de Relacionamentos $N:N$
Cria-se obrigatoriamente uma **nova tabela relacional (Tabela de Junção / Tabela Associativa)**.
* A Chave Primária da nova tabela é formada pela combinação das Chaves Primárias das entidades participantes ($\text{PK Composta}$);
* Cada uma dessas colunas atua individualmente como uma $\text{FK}$;
* Os atributos que residiam no losango do relacionamento migram como colunas comuns dessa nova tabela.
* *Notação:* $\text{ITENS\_PEDIDO} (\underline{\text{id\_pedido}}^*, \underline{\text{id\_produto}}^*, \text{quantidade}, \text{preco\_unitario\_venda})$

### Regra 6: Mapeamento de Atributos Multivalorados
O modelo relacional clássico proíbe repetições ou coleções dentro de uma mesma célula (princípio da atomicidade). Logo, cada atributo multivalorado gera uma **nova tabela**:
* A nova tabela conterá o atributo em si e a Chave Primária da entidade-proprietária (atuando como $\text{FK}$).
* Sua $\text{PK}$ será a combinação da $\text{FK}$ com o próprio valor do atributo.
* *Notação:* $\text{TELEFONES\_CLIENTES} (\underline{\text{id\_cliente}}^*, \underline{\text{num\_telefone}})$

### Regra 7: Mapeamento de Especialização / Generalização
Existem 3 abordagens industriais clássicas:
1. **Tabelas para Superclasse e Subclasses (Padrão Recomendado):** Cria-se uma tabela para a superclasse com atributos comuns e uma tabela para cada subclasse contendo atributos específicos. As subclasses utilizam como $\text{PK}$ a mesma $\text{PK}$ da superclasse (que atua simultaneamente como $\text{PK}$ e $\text{FK}$).
2. **Apenas Tabelas para Subclasses (Adequado para Especialização Total Disjunta):** Elimina a tabela superclasse e replica os atributos comuns nas tabelas filhas.
3. **Tabela Única Consolidada (*Single Table Inheritance*):** Junta tudo em uma única tabela com uma coluna indicadora de tipo (`tipo_pessoa = 'F'/'J'`) e atributos específicos aceitando `NULL`.

---

## 3. PRÁTICA EM LABORATÓRIO (DER -> LÓGICO)

Execute a transposição formal do modelo conceitual de uma concessionária de automóveis para o modelo relacional:

```
    ┌──────────────┐         (1,1)          (0,N) ┌──────────────┐
    │  AUTOMOVEL   ├──────────────────────────────┤  FABRICANTE  │
    └──────┬───────┘          [FABRICADO POR]     └──────────────┘
           │ (1,N)
           │
           │ [VENDA] (N:N com data e valor)
           │
           │ (0,N)
    ┌──────┴───────┐
    │   CLIENTE    │
    └──────────────┘
```

**Resultado Esperado do Esquema Lógico:**
1. $\text{FABRICANTES} (\underline{\text{id\_fabricante}}, \text{nome\_marca}, \text{pais\_origem})$
2. $\text{AUTOMOVEIS} (\underline{\text{chassi}}, \text{modelo}, \text{ano\_fab}, \text{cor}, \text{preco\_tabela}, \text{id\_fabricante}^*)$
3. $\text{CLIENTES} (\underline{\text{id\_cliente}}, \text{nome\_cliente}, \text{cpf}, \text{cidade})$
4. $\text{VENDAS} (\underline{\text{id\_venda}}, \text{chassi}^*, \text{id\_cliente}^*, \text{data\_venda}, \text{valor\_negociado}, \text{forma\_pagto})$

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Por que não é recomendado colocar a Chave Estrangeira no lado "1" em um relacionamento $1:N$? Demonstre o que aconteceria com os dados na prática.
2. Defina o que é uma **Chave Primária Composta** e explique como ela garante a integridade em relacionamentos $N:N$.
3. Explique a diferença entre **Integridade de Entidade** e **Integridade Referencial**. Dê um exemplo de violação para cada uma no SGBD.

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 9:** *Mapeamento de Modelos de Dados Relacionais: Mapeamento de Esquema ER e EER em Esquema Relacional* (p. 271–296).
2. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - **Capítulo 1:** *Relações vs. Tabelas: Fundamentação Matemática do Modelo Relacional* (p. 15–38).  
   - **Capítulo 2:** *Chaves e Integridade Referencial: Chaves Candidatas, Primárias e Estrangeiras* (p. 39–60).
3. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 3:** *Mapeamento do Modelo Conceitual para o Modelo Lógico Relacional* (p. 67–102).
4. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 2:** *Introdução ao Modelo Relacional: Estrutura dos Bancos de Dados Relacionais e Operações Fundamentais* (p. 33–54).
