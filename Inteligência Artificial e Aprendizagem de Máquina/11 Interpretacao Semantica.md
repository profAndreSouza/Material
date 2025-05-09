# Interpretação Semântica e Gramáticas com spaCy e NLTK

## 1 – Introdução à Semântica em PLN

### O que é Interpretação Semântica?

Em Processamento de Linguagem Natural (PLN), **interpretação semântica** é o processo de atribuir significado às palavras, frases e sentenças. Diferente da análise sintática (que foca na estrutura), a semântica se preocupa com o **conteúdo** — ou seja, o que realmente está sendo comunicado.

**Exemplo:**

Frase:

> "Maria viu João com binóculos."

A estrutura sintática pode ser a mesma, mas semanticamente, a frase pode ter **duplo sentido**:

1. Maria usou binóculos para ver João.
2. João estava com binóculos quando Maria o viu.

A semântica tenta resolver esse tipo de ambiguidade.

---

### Diferenças entre Sintaxe e Semântica

| Aspecto     | Sintaxe                                      | Semântica                                    |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| Foco        | Estrutura da frase (regras gramaticais)      | Significado da frase ou das palavras         |
| Exemplo     | Verbo no lugar certo, sujeito antes do verbo | Saber se a frase "faz sentido"               |
| Ferramentas | Parsers sintáticos (gramáticas)              | Análise semântica, embeddings, lógica formal |

**Exemplo Sintático:**

> "O cachorro correu para o parque." – Estrutura válida.

**Exemplo Semântico:**

> "O tempo leu o jornal." – Estrutura válida, mas sem sentido lógico.

---

### Aplicações Práticas

Interpretação semântica é essencial em várias aplicações de PLN, como:

* **Motores de busca inteligentes**: interpretam o significado da pergunta do usuário.
* **Chatbots**: entendem intenções além das palavras literais.
* **Sistemas de perguntas e respostas**: respondem com base no conteúdo e contexto.
* **Tradução automática**: preservam o sentido original da frase.

---

### Exemplo Prático com spaCy

```python
!python -m spacy download pt_core_news_sm
!python -m spacy download pt_core_news_md

import spacy

nlp = spacy.load("pt_core_news_sm")
doc = nlp("O gato subiu no telhado.")

for token in doc:
    print(f"{token.text:<12} | {token.dep_:<12} | {token.head.text}")
```

Saída esperada:

```
O            | det          | gato
gato         | nsubj        | subiu
subiu        | ROOT         | subiu
no           | case         | telhado
telhado      | obl          | subiu
.            | punct        | subiu
```

Com isso, podemos inferir que o **sujeito** da ação é “gato” e o **objeto indireto** é “telhado”.

---

### Exemplo Prático com NLTK

```python
import nltk
from nltk import CFG

grammar = CFG.fromstring("""
  S -> NP VP
  NP -> Det N
  VP -> V NP
  Det -> 'o'
  N -> 'menino' | 'livro'
  V -> 'leu'
""")

sentenca = ['o', 'menino', 'leu', 'o', 'livro']
parser = nltk.ChartParser(grammar)

for arvore in parser.parse(sentenca):
    arvore.pretty_print()
```

---

## 2 – Representações Semânticas

### O que são Representações Semânticas?

Representações semânticas são **formas estruturadas de modelar o significado** de palavras, frases ou textos para que computadores possam interpretar e operar sobre elas. O objetivo é criar uma **estrutura lógica, vetorial ou simbólica** que traduza o conteúdo de forma utilizável em aplicações reais.

---

### Tipos de Representações

#### 1. Representação Lógica (Semântica Formal)

A linguagem natural pode ser convertida em **lógica de predicados**, uma estrutura formal baseada em lógica matemática.

**Exemplo (frase em linguagem natural):**

> "João ama Maria."

**Representação em lógica de predicados:**

> ama(joão, maria)

Essa forma é útil em sistemas de inferência, como agentes inteligentes, onde queremos deduzir conclusões a partir de fatos.

#### 2. Representações Distribuídas (Vetoriais)

Palavras e frases podem ser representadas por **vetores de números** que capturam seu significado com base no **contexto** de uso. Isso permite medir similaridades semânticas entre palavras.

**Exemplo com spaCy:**

```python
import spacy

nlp = spacy.load("pt_core_news_md")  # usa vetores de palavra
doc1 = nlp("rei")
doc2 = nlp("rainha")

similaridade = doc1.similarity(doc2)
print(f"Similaridade semântica: {similaridade:.2f}")
```

A saída mostra quão semanticamente próximas são essas palavras. Modelos maiores (`md`, `lg`) têm embeddings treinados para capturar semântica contextual.

#### 3. Ontologias e Grafos Semânticos

Ontologias organizam o conhecimento em hierarquias de conceitos e relações. Por exemplo:

* "Cão" é um tipo de "mamífero"
* "Mamífero" é um tipo de "animal"

Essas relações podem ser representadas em **grafos semânticos**, que conectam conceitos por suas propriedades.

**Ferramentas comuns:**

* WordNet (disponível via NLTK)
* spaCy (para extração de relações)

**Exemplo com WordNet (em inglês):**

```python
from nltk.corpus import wordnet as wn

nltk.download('wordnet')

cachorro = wn.synsets('dog')[0]
print(cachorro.definition())
print(cachorro.hypernyms())  # Conceitos mais gerais
```

---

### Comparação entre Formas de Representação

| Tipo                 | Vantagens                                  | Limitações                              |
| -------------------- | ------------------------------------------ | --------------------------------------- |
| Lógica de predicados | Alta precisão, usada em inferência lógica  | Difícil de aplicar em linguagem ambígua |
| Vetores (embeddings) | Escalável, aplicável em ML e deep learning | Menos interpretável                     |
| Ontologias/Grafos    | Organiza conhecimento de forma estruturada | Requer curadoria manual ou boa extração |

---

### Aplicações Práticas

* **Busca semântica**: encontrar documentos com base em significado, não só palavras exatas
* **Classificação de texto**: usando embeddings como entrada para modelos de aprendizado
* **Resposta automática a perguntas**: usar relações lógicas ou embeddings para entender e responder
* **Sistemas de recomendação**: baseados em similaridade semântica

---

## 3 – Gramáticas em PLN

### Definição de Gramática Formal

Uma **gramática formal** é um conjunto de regras que define como strings (sentenças) válidas podem ser construídas a partir de um alfabeto. Em PLN (Processamento de Linguagem Natural), usamos gramáticas para representar estruturas sintáticas da linguagem humana, facilitando a análise e interpretação automática.

Essas gramáticas são amplamente usadas em tarefas como:

* **Análise sintática (parsing)**
* **Extração de relações**
* **Desambiguação gramatical**

---

### Tipos de Gramáticas

#### 1. **Gramáticas Regulares (Regular Grammar)**

Usadas em expressões regulares e autômatos finitos. Têm baixo poder expressivo, mas são rápidas e eficientes.

**Exemplo típico:** reconhecer padrões como datas, e-mails, números.

#### 2. **Gramáticas Livres de Contexto (CFG – Context-Free Grammar)**

Capazes de modelar a estrutura hierárquica de sentenças. Muito usadas em análises sintáticas e compiladores.

**Exemplo de regras CFG:**

```
S -> NP VP
NP -> Det N
VP -> V NP
Det -> 'o' | 'a'
N -> 'gato' | 'menina'
V -> 'viu'
```

Com essas regras, podemos gerar sentenças como:

> "a menina viu o gato"

#### 3. **Gramáticas de Dependência (Dependency Grammar)**

Modelam as relações entre palavras com base em **dependência sintática**, não em estrutura hierárquica. São a base dos analisadores modernos como o spaCy.

---

### Construção e Uso de Gramáticas com NLTK

O **NLTK** permite criar e utilizar gramáticas CFG com facilidade. Veja um exemplo prático:

#### Exemplo: Definindo uma gramática e realizando parsing

```python
import nltk
from nltk import CFG

# Definindo a gramática
gramatica = CFG.fromstring("""
  S -> NP VP
  NP -> Det N
  VP -> V NP
  Det -> 'o' | 'a'
  N -> 'gato' | 'menina'
  V -> 'viu'
""")

# Criando o parser
parser = nltk.ChartParser(gramatica)

# Frase a ser analisada
frase = ['a', 'menina', 'viu', 'o', 'gato']

# Gerando árvores de análise
for arvore in parser.parse(frase):
    arvore.pretty_print()
```

#### Saída (árvore sintática simplificada):

```
            S
         ___|_____
        NP       VP
     ___|__    ___|___
    Det   N   V      NP
     |    |   |     __|__
     a  menina viu Det   N
                    |    |
                    o  gato
```

Isso mostra a estrutura gramatical da frase de forma visual. A partir dessa árvore, podemos extrair:

* Sujeito (NP)
* Predicado (VP)
* Relações hierárquicas

---

### Comparativo entre Abordagens

| Gramática             | Uso típico                        | Limitações                        |
| --------------------- | --------------------------------- | --------------------------------- |
| Regulares             | Reconhecimento de padrões simples | Não reconhece estrutura sintática |
| Livre de Contexto     | Parsing sintático completo        | Não lida bem com ambiguidade      |
| Dependência Sintática | Análise moderna em larga escala   | Exige modelos treinados           |

---

## 4 – Interpretação Semântica com NLTK

A **interpretação semântica** busca atribuir significados formais às sentenças, geralmente representando-os por meio de **lógica de predicados** ou outras estruturas formais. No NLTK, podemos combinar o parsing sintático com uma camada semântica para entender o conteúdo de uma frase além de sua estrutura.

---

### Parsing e Análise Sintática

Antes de interpretar uma frase semanticamente, é necessário analisá-la sintaticamente (parsing). O parsing define como as palavras se agrupam, ou seja, a **estrutura da frase**.

Por exemplo, em:

> "o gato viu a menina"

A estrutura é:

```
S → NP VP
NP → Det N
VP → V NP
```

---

### Árvores de Derivação (Parse Trees)

As árvores de derivação mostram **como uma sentença pode ser gerada por uma gramática**. Elas são a base para mapear a estrutura sintática para uma estrutura semântica.

Exemplo de árvore de derivação:

```
        S
      /   \
    NP     VP
   / \     / \
Det  N    V  NP
 |   |    |  / \
 o  gato viu Det N
              |  |
              a menina
```

---

### Análise Semântica Simbólica com Lógica de Predicados

No NLTK, é possível atribuir significados às regras gramaticais com **lambda expressions** e **lógica de predicados**. A ideia é representar frases como:

> "o gato viu a menina"

Como:

```
ver(gato, menina)
```

Ou formalmente:

```logic
∃x∃y(gato(x) ∧ menina(y) ∧ ver(x, y))
```

---

### Exemplo Prático: Construção de Gramática e Parser com `nltk.grammar` e `nltk.parse`

```python
import nltk
from nltk.sem import Valuation, Model, Assignment
from nltk import CFG, FeatureChartParser
nltk.download('book_grammars')

# Definindo uma gramática com semântica simbólica
grammar = nltk.load('grammars/book_grammars/simple-sem.fcfg')

# Frase de entrada
sentence = 'Angus sees a dog'.split()

# Parser com suporte a semântica
parser = FeatureChartParser(grammar)

# Parsing + semântica
for tree in parser.parse(sentence):
    print(tree.label()['SEM'])  # Expressão semântica
```

> A gramática `simple-sem.fcfg` vem com o NLTK e define regras como:

```
S[SEM=<?subj(?vp)>] -> NP[SEM=?subj] VP[SEM=?vp]
VP[SEM=<?v(?obj)>] -> V[SEM=?v] NP[SEM=?obj]
NP[SEM=<angus>] -> 'Angus'
NP[SEM=<dog>] -> 'a' 'dog'
V[SEM=<see>] -> 'sees'
```

Essa estrutura resulta na semântica:

```python
see(angus, dog)
```

---

## 5. Análise Semântica com spaCy

O spaCy é uma biblioteca poderosa de NLP voltada à produção, que oferece ferramentas rápidas e eficientes para análise sintática e semântica de textos. Sua arquitetura baseada em pipelines permite realizar diversas tarefas com poucos comandos.

---

### Pipeline de spaCy: Tokens, POS, Entidades e Dependências

Quando um texto é processado com spaCy, ele passa por um **pipeline** com etapas como:

1. **Tokenização** – divisão do texto em palavras e símbolos.
2. **POS Tagging (Part-of-Speech)** – identificação de classes gramaticais.
3. **Dependency Parsing** – análise de relações entre palavras.
4. **NER (Named Entity Recognition)** – identificação de entidades nomeadas (pessoas, lugares, datas etc.).

Exemplo:

```python
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("The cat chased the mouse.")

for token in doc:
    print(f"{token.text:<10} {token.dep_:<10} {token.head.text:<10} {token.pos_}")
```

Saída:

```
The        det        cat        DET
cat        nsubj      chased     NOUN
chased     ROOT       chased     VERB
the        det        mouse      DET
mouse      dobj       chased     NOUN
.          punct      chased     PUNCT
```

---

### Extração de Significado por Análise de Dependência Gramatical

O **parser de dependência** do spaCy mostra como as palavras se relacionam. As relações mais comuns são:

* `nsubj` – sujeito nominal
* `dobj` – objeto direto
* `ROOT` – verbo principal da sentença

Essas dependências podem ser usadas para montar **estruturas semânticas**, como:

> "The cat chased the mouse" → `chase(cat, mouse)`

---

### Uso de `Doc`, `Token` e `Span` para Inferência Semântica

* `Doc`: objeto que representa o texto completo.
* `Token`: cada palavra ou símbolo pontuacional.
* `Span`: sequência de tokens (por exemplo, uma entidade).

```python
subject = [tok for tok in doc if tok.dep_ == "nsubj"][0]
verb = doc[0].root
obj = [tok for tok in doc if tok.dep_ == "dobj"][0]

print(f"Ação: {verb.lemma_}({subject.text}, {obj.text})")
```

Resultado:

```
Ação: chase(cat, mouse)
```

---

### Exemplo Prático: Identificar Sujeito, Verbo e Objeto

```python
def analisar_sentenca(texto):
    doc = nlp(texto)
    sujeito = next((tok for tok in doc if tok.dep_ == "nsubj"), None)
    verbo = doc[:].root
    objeto = next((tok for tok in doc if tok.dep_ == "dobj"), None)

    if sujeito and verbo and objeto:
        print(f"{verbo.lemma_}({sujeito.text}, {objeto.text})")
    else:
        print("Não foi possível identificar todos os elementos.")

analisar_sentenca("Maria comprou um livro.")
```

Saída esperada:

```
comprar(Maria, livro)
```

---

## 6. Casos de Uso e Aplicações Reais

A interpretação semântica abre caminho para diversas aplicações que envolvem o entendimento real da linguagem humana. Abaixo, destacam-se três casos de uso recorrentes em projetos com NLP.

---

### 6.1. Extração de Relações entre Entidades (Relation Extraction)

**Objetivo**: Identificar relações semânticas entre entidades mencionadas em um texto.

**Exemplo**:
Frase: *"Marie Curie discovered radium in Paris."*

Com spaCy:

```python
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("Marie Curie discovered radium in Paris.")

for ent in doc.ents:
    print(ent.text, ent.label_)

for token in doc:
    if token.dep_ == "nsubj":
        subject = token.text
    if token.dep_ == "dobj":
        obj = token.text
    if token.dep_ == "ROOT":
        action = token.lemma_

print(f"Relação: {action}({subject}, {obj})")
```

Saída esperada:

```
Relação: discover(Marie Curie, radium)
```

Esse padrão pode alimentar bases de conhecimento ou sistemas de resposta a perguntas.

---

### 6.2. Geração Automática de Respostas

**Objetivo**: Criar respostas com base no conteúdo semântico da entrada do usuário.

**Cenário**: Um assistente virtual recebe a pergunta:

> "Onde nasceu Albert Einstein?"

A partir do conhecimento extraído, pode-se gerar a resposta:

> "Albert Einstein nasceu em Ulm, na Alemanha."

Para isso, usa-se:

* Extração de entidades (`Albert Einstein`, `lugar de nascimento`)
* Consulta a uma base de dados (Wikidata, por exemplo)
* Montagem da resposta com base na estrutura da pergunta

---

### 6.3. Interpretação de Comandos em Linguagem Natural

**Objetivo**: Traduzir instruções verbais em ações computacionais.

**Exemplo**:
Comando: *"Ligue as luzes da cozinha."*

Aplicação:

* Identifica-se o **verbo** principal: "ligar"
* Identifica-se o **objeto** ou destino da ação: "luzes da cozinha"
* Traduz-se para uma chamada de API:

  ```json
  {
    "acao": "ligar",
    "dispositivo": "luz",
    "local": "cozinha"
  }
  ```

**Implementação base com spaCy**:

```python
doc = nlp("Ligue as luzes da cozinha")

for token in doc:
    print(token.text, token.dep_, token.head.text)

# Interpretação possível:
# ligar(luzes, cozinha)
```

---

## 7. Exercícios Práticos

### 7.1. Construção de Gramática Simples no NLTK

Neste exercício, vamos construir uma gramática simples usando o **NLTK** para análise sintática de frases.

#### Passos:

1. Criar uma gramática baseada em regras.
2. Analisar uma frase com o parser do NLTK.

#### Script no Colab:

```python
# Importando bibliotecas
import nltk
from nltk import CFG

# Definindo uma gramática simples
grammar = CFG.fromstring("""
  S -> NP VP
  VP -> V NP
  NP -> Det N
  Det -> 'o' | 'a'
  N -> 'homem' | 'mulher'
  V -> 'viu'
""")

# Criação do parser
parser = nltk.ChartParser(grammar)

# Frase para analisar
sentence = ['o', 'homem', 'viu', 'a', 'mulher']

# Analisando a frase
for tree in parser.parse(sentence):
    tree.pretty_print()
```

Esse código cria uma gramática simples onde uma sentença `S` é formada por um sujeito (`NP`) e um predicado (`VP`). O `VP` é formado por um verbo (`V`) e um objeto (`NP`).

---

### 7.2. Extração de Relações e Estrutura Frasal com spaCy

Neste exercício, vamos usar **spaCy** para identificar relações e dependências entre palavras em uma frase.

#### Passos:

1. Instalar o spaCy e carregar o modelo de linguagem.
2. Analisar uma frase e extrair dependências gramaticais.

#### Script no Colab:

```python
# Importando spaCy
import spacy

# Carregando o modelo de linguagem
nlp = spacy.load("pt_core_news_sm")

# Frase para analisar
doc = nlp("Maria comprou um livro na livraria.")

# Mostrando as dependências e palavras
for token in doc:
    print(f"Palavra: {token.text} | Dependência: {token.dep_} | Cabeça: {token.head.text}")
```

Esse script usa o **spaCy** para identificar relações de dependência entre as palavras da frase "Maria comprou um livro na livraria". Ele imprime as palavras, suas dependências e as palavras principais (head) com as quais elas se conectam.

---

### 7.3. Mini-Projeto: Interpretar Perguntas e Extrair Respostas Simples

Neste exercício, vamos criar um mini-projeto para interpretar perguntas em linguagem natural e extrair uma resposta simples baseada em palavras-chave.

#### Passos:

1. Criar um modelo simples de interpretação semântica.
2. Extrair a resposta com base em palavras-chave e uma base de dados fictícia.

#### Script no Colab:

```python

```
