# Análise Sintática

## Objetivos da Aula

- Compreender o conceito de análise sintática no contexto do Processamento de Linguagem Natural (PLN)
- Diferenciar estruturas gramaticais e formas de representação sintática
- Explorar métodos baseados em regras e em aprendizado estatístico
- Utilizar bibliotecas de PLN para análise sintática de sentenças


## 1. O que é Análise Sintática?

A **análise sintática** é o processo de identificar a estrutura gramatical de uma sentença, determinando como as palavras se agrupam em frases e qual é a relação entre elas.

É uma etapa fundamental em PLN, pois permite a compreensão de “quem fez o quê”, além de facilitar outras tarefas como tradução automática, resposta a perguntas e análise semântica.


## 2. Tipos de Representação Sintática

### 2.1 Árvores de Constituinte (Constituency Parsing)

Representam como uma frase é composta por constituintes (sintagmas nominais, verbais, etc.).

Exemplo:
```

(S
(NP João)
(VP
(V gosta)
(NP de sorvete)))

```

### 2.2 Árvores de Dependência (Dependency Parsing)

Focam nas relações gramaticais diretas entre palavras (sujeito, objeto, modificador).

Exemplo:
```

gosta → João (sujeito)
gosta → de (complemento)
de → sorvete (objeto da preposição)

```

## 3. Abordagens para Análise Sintática

### 3.1 Baseada em Regras
- Utiliza gramáticas formais (ex: CFG - Context-Free Grammar)
- Adequado para domínios restritos

### 3.2 Baseada em Estatísticas
- Utiliza corpus anotado para aprender padrões (ex: Treebank)
- Mais robusto para linguagem natural ampla


## 4. Exemplo com spaCy (Árvore de Dependência)

```python
import spacy
from spacy import displacy

# Carrega modelo para português
nlp = spacy.load("pt_core_news_sm")

frase = nlp("João gosta de sorvete")

for token in frase:
    print(f"{token.text} → {token.head.text} ({token.dep_})")
```

### Visualização da árvore

```python
displacy.render(frase, style='dep', jupyter=True)
```

## 5. Exemplo com NLTK (Constituency Parsing)

```python
import nltk
from nltk import CFG

gramatica = CFG.fromstring("""
S -> NP VP
NP -> 'João'
VP -> V NP | V PP
V -> 'gosta'
PP -> P NP
P -> 'de'
NP -> 'sorvete'
""")

parser = nltk.ChartParser(gramatica)

for tree in parser.parse(['João', 'gosta', 'de', 'sorvete']):
    tree.pretty_print()
```

> Nota: o NLTK exige definições explícitas de gramáticas e sentenças, sendo mais indicado para fins didáticos.


## 6. Tarefas Associadas à Análise Sintática

* **Identificação de sujeito, objeto e predicado**
* **Extração de relações entre entidades**
* **Desambiguação estrutural (ex: "vi o homem com o telescópio")**
* **Entrada para análise semântica e interpretação de intenção**


## 7. Atividade Proposta

1. Escolha 5 frases em português com estruturas variadas (afirmativas, negativas, interrogativas).
2. Use o `spaCy` para gerar a análise de dependência de cada frase.
3. Identifique e anote o sujeito, verbo e objeto de cada sentença.
4. Tente definir uma pequena gramática no `nltk` para representar uma ou duas frases.


## 8. Leitura Complementar

* Jurafsky & Martin. *Speech and Language Processing*, Capítulo 12 (Constituency Parsing) e Capítulo 13 (Dependency Parsing)
* Chomsky, N. (1956). *Three models for the description of language*
* Manning et al. (2014). *The Stanford CoreNLP toolkit*
* Universal Dependencies Project ([https://universaldependencies.org](https://universaldependencies.org))
* Blog da spaCy: artigos sobre análise sintática e parsing


## 9. Conclusão

A análise sintática é essencial para compreender a estrutura e o significado de frases em PLN. As representações por árvore de constituintes e de dependência oferecem diferentes formas de análise, sendo ambas complementares. Ferramentas como `spaCy` e `nltk` facilitam a implementação e visualização dessas estruturas, servindo como base para aplicações mais avançadas em linguagem natural.
