# ROTEIRO DE AULA EXPANDIDO — AULA 05

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 04/09/2026 &nbsp;|&nbsp; **Data Programada:** 23/10/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Teoria da Normalização de Dados — 1ª, 2ª e 3ª Formas Normais (1FN, 2FN e 3FN) e Eliminação de Anomalias  
**Ambiente de Software:** Lousa Didática, Editor de Texto e SGBD Relacional (DBeaver)  
**Articulação com o PPC:** Competência 2 — Projetar estruturas de dados otimizadas, livres de anomalias operacionais e redundâncias espúrias  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula essencial de engenharia de dados, você será capaz de:
1. Compreender o propósito formal da **Normalização de Dados** como técnica de decomposição sem perda de informação (*Lossless Decomposition*).
2. Identificar e exemplificar as 3 anomalias clássicas de tabelas desnormalizadas:
   * **Anomalia de Inserção:** Impossibilidade de inserir um registro sem criar dados fictícios ou nulos indesejados;
   * **Anomalia de Exclusão:** Perda acidental de dados históricos importantes ao remover uma linha;
   * **Anomalia de Atualização:** Risco de inconsistência ao ter que alterar o mesmo dado em centenas de linhas.
3. Definir e testar **Dependências Funcionais (DF)**: dependência total, dependência parcial e dependência transitiva.
4. Aplicar o algoritmo formal da **Primeira Forma Normal (1FN)** garantindo a atomicidade estrita dos valores.
5. Aplicar o algoritmo da **Segunda Forma Normal (2FN)** eliminando dependências parciais sobre chaves compostas.
6. Aplicar o algoritmo da **Terceira Forma Normal (3FN)** eliminando dependências transitivas entre atributos não-chave.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 O que é uma Dependência Funcional ($X \to Y$)?

Diz-se que um atributo $Y$ é **funcionalmente dependente** de um atributo ou conjunto de atributos $X$ (denotado por $X \to Y$) se, e somente se, para cada valor válido de $X$, existe associado **exatamente um único valor** de $Y$.
* *Exemplo:* $\text{CPF} \to \text{Nome\_Pessoa}$, $\text{Placa\_Carro} \to \text{Modelo}$.

#### Tipos Críticos de Dependência Funcional:
1. **Dependência Funcional Total:** O atributo depende de **toda** a chave primária, e não de um subconjunto próprio dela.
2. **Dependência Funcional Parcial:** Ocorre **apenas em chaves compostas**, quando um atributo não-chave depende de apenas uma parte da chave primária.
3. **Dependência Funcional Transitiva:** Ocorre quando um atributo não-chave $Z$ depende de outro atributo não-chave $Y$, que por sua vez depende da chave primária $X$ ($X \to Y$ e $Y \to Z$).

---

### 2.2 As Três Formas Normais Clássicas

```
                        ┌──────────────────────────────────────┐
                        │      TABELA NÃO NORMALIZADA (0FN)    │
                        │    (Grupos repetitivos e compostos)  │
                        └──────────────────┬───────────────────┘
                                           │ Eliminar grupos repetitivos
                                           ▼ e garantir atomicidade
                        ┌──────────────────────────────────────┐
                        │       PRIMEIRA FORMA NORMAL (1FN)    │
                        │       (Todos os valores atômicos)    │
                        └──────────────────┬───────────────────┘
                                           │ Eliminar dependências
                                           ▼ funcionais parciais
                        ┌──────────────────────────────────────┐
                        │       SEGUNDA FORMA NORMAL (2FN)     │
                        │      (DF Total da Chave Primária)    │
                        └──────────────────┬───────────────────┘
                                           │ Eliminar dependências
                                           ▼ funcionais transitivas
                        ┌──────────────────────────────────────┐
                        │       TERCEIRA FORMA NORMAL (3FN)    │
                        │   (Sem dependências entre não-chaves)│
                        └──────────────────────────────────────┘
```

---

#### A. Primeira Forma Normal (1FN) — Atomicidade Estrita
* **Regra:** Uma tabela está na 1FN se, e somente se, todos os seus atributos contiverem apenas **valores atômicos (indivisíveis)** e **não existirem grupos repetitivos** (múltiplos valores na mesma célula ou colunas numeradas como `tel1`, `tel2`, `tel3`).
* **Como normalizar:**
  1. Cria-se uma nova linha para cada valor do grupo repetitivo (ou desmembra-se em tabela separada);
  2. Define-se a nova chave primária que identifica univocamente cada linha.

---

#### B. Segunda Forma Normal (2FN) — Eliminação de Dependências Parciais
* **Regra:** Uma tabela está na 2FN se:
  1. Já estiver na 1FN;
  2. **Todos os atributos não-chave dependerem funcionalmente da TOTALIDADE da chave primária.**
* **Teorema Fundamental da 2FN:** *Se uma tabela já está na 1FN e sua Chave Primária for SIMPLES (formada por apenas uma coluna), ela já está AUTOMATICAMENTE na 2FN!* A 2FN só é violada em tabelas com **Chave Primária Composta**.
* **Como normalizar:** Os atributos que dependem apenas de parte da chave são destacados para uma nova tabela própria, cuja chave primária será a respectiva parte da chave de onde dependiam.

---

#### C. Terceira Forma Normal (3FN) — Eliminação de Dependências Transitivas
* **Regra:** Uma tabela está na 3FN se:
  1. Já estiver na 2FN;
  2. **Nenhum atributo não-chave depender transitivamente de outro atributo não-chave.** Em outras palavras: todo atributo não-chave deve depender *diretamente* da chave primária, de *toda* a chave primária e de *nada mais* além da chave primária.
* **Exemplo de Violação:**
  $$\text{FUNCIONARIOS} (\underline{\text{id\_func}}, \text{nome}, \text{id\_depto}, \text{nome\_depto}, \text{local\_depto})$$
  * A Chave Primária é simples ($\text{id\_func}$), logo está na 2FN.
  * Porém: $\text{id\_func} \to \text{id\_depto}$, e $\text{id\_depto} \to \text{nome\_depto}, \text{local\_depto}$.
  * Logo, $\text{nome\_depto}$ e $\text{local\_depto}$ dependem transitivamente de $\text{id\_func}$ através de $\text{id\_depto}$.
* **Como normalizar:** Move-se $\text{id\_depto}$, $\text{nome\_depto}$ e $\text{local\_depto}$ para uma nova tabela $\text{DEPARTAMENTOS} (\underline{\text{id\_depto}}, \text{nome\_depto}, \text{local\_depto})$, mantendo apenas $\text{id\_depto}^*$ como $\text{FK}$ na tabela de funcionários.

---

## 3. OFICINA PRÁTICA EM LABORATÓRIO (PASSO A PASSO NA LOUSA)

### Exercício de Desconstrução de uma Nota Fiscal de Vendas:

Considere o documento comercial real a seguir:

$$\text{NOTA\_FISCAL\_BRUTA} = (\underline{\text{Num\_NF}}, \text{Data\_Emissao}, \text{CNPJ\_Cliente}, \text{Nome\_Cliente}, \text{Cidade\_Cliente},$$
$$\{\text{Cod\_Item}, \text{Descricao\_Item}, \text{Qtd\_Vendida}, \text{Preco\_Unitario}\}, \text{Valor\_Total\_NF})$$

#### Passo 1: Aplicação da 1FN
Elimina-se o grupo repetitivo de itens (chaves $\{$ $\}$), criando uma tupla para cada item vendido. A chave primária da relação torna-se composta:
$$\text{TABELA\_1FN} (\underline{\text{Num\_NF}}, \underline{\text{Cod\_Item}}, \text{Data\_Emissao}, \text{CNPJ\_Cliente}, \text{Nome\_Cliente}, \text{Cidade\_Cliente}, \text{Descricao\_Item}, \text{Qtd\_Vendida}, \text{Preco\_Unitario})$$

#### Passo 2: Aplicação da 2FN (Identificação das Dependências Parciais)
* $\text{Num\_NF} \to \text{Data\_Emissao}, \text{CNPJ\_Cliente}, \text{Nome\_Cliente}, \text{Cidade\_Cliente}$ (depende apenas de parte da PK!).
* $\text{Cod\_Item} \to \text{Descricao\_Item}, \text{Preco\_Unitario}$ (depende apenas de parte da PK!).
* $(\text{Num\_NF}, \text{Cod\_Item}) \to \text{Qtd\_Vendida}$ (depende da totalidade da chave composta $\implies$ Dependência Total).

**Tabelas Resultantes da 2FN:**
1. $\text{NOTAS\_FISCAIS} (\underline{\text{Num\_NF}}, \text{Data\_Emissao}, \text{CNPJ\_Cliente}, \text{Nome\_Cliente}, \text{Cidade\_Cliente})$
2. $\text{ITENS} (\underline{\text{Cod\_Item}}, \text{Descricao\_Item}, \text{Preco\_Unitario})$
3. $\text{NOTAS\_ITENS} (\underline{\text{Num\_NF}}^*, \underline{\text{Cod\_Item}}^*, \text{Qtd\_Vendida})$

#### Passo 3: Aplicação da 3FN (Identificação das Dependências Transitivas)
Na tabela $\text{NOTAS\_FISCAIS}$, temos:
$$\text{Num\_NF} \to \text{CNPJ\_Cliente} \quad \text{e} \quad \text{CNPJ\_Cliente} \to \text{Nome\_Cliente}, \text{Cidade\_Cliente}$$
Há dependência transitiva entre atributos não-chave.

**Tabelas Finais Perfeitamente Normalizadas em 3FN:**
1. $\text{CLIENTES} (\underline{\text{CNPJ\_Cliente}}, \text{Nome\_Cliente}, \text{Cidade\_Cliente})$
2. $\text{NOTAS\_FISCAIS} (\underline{\text{Num\_NF}}, \text{Data\_Emissao}, \text{CNPJ\_Cliente}^*)$
3. $\text{ITENS} (\underline{\text{Cod\_Item}}, \text{Descricao\_Item}, \text{Preco\_Unitario})$
4. $\text{NOTAS\_ITENS} (\underline{\text{Num\_NF}}^*, \underline{\text{Cod\_Item}}^*, \text{Qtd\_Vendida})$

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Uma relação com chave primária simples $(\underline{\text{id\_produto}}, \text{nome}, \text{preco}, \text{id\_fabricante}, \text{nome\_fabricante})$ pode violar a 2FN? Ela viola a 3FN? Justifique detalhadamente.
2. Explique com um exemplo prático a **anomalia de exclusão** em uma tabela de matrículas escolares não normalizada.
3. Sob quais circunstâncias um engenheiro de dados experiente opta intencionalmente pela **Desnormalização** controlada de uma tabela em ambientes de produção?

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - **Capítulo 5:** *Dependências Funcionais e o Princípio da Reconstrução sem Perdas* (p. 119–152).  
   - **Capítulo 6:** *Formas Normais I, II e III: Conceituação Matemática e Teorema de Fagin* (p. 153–194).
2. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 14:** *Fundamentos da Normalização de Bancos de Dados: Diretrizes Informais de Projeto, Dependências Funcionais, 1FN, 2FN e 3FN* (p. 395–432).
3. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 4:** *Normalização de Dados: Conceito, Formas Normais e Aplicação em Casos Reais* (p. 103–130).
4. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 7:** *Projeto de Banco de Dados Relacional: Teoria das Dependências Funcionais e Algoritmos de Decomposição Normalizada* (p. 235–278).
