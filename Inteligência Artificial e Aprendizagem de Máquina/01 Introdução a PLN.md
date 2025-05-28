# Introdução ao Processamento de Linguagem Natural

## Objetivos da Aula

- Compreender o que é o Processamento de Linguagem Natural (PLN)
- Conhecer as principais tarefas e aplicações do PLN
- Explorar ferramentas básicas de PLN com Python
- Executar exemplos práticos com NLTK e spaCy


## 1. O que é Processamento de Linguagem Natural?

O Processamento de Linguagem Natural (PLN), ou NLP (Natural Language Processing) em inglês, é uma área da Inteligência Artificial que estuda as interações entre computadores e a linguagem humana natural. O objetivo do PLN é permitir que máquinas compreendam, interpretem, manipulem e gerem linguagem humana de maneira útil.

PLN é uma área multidisciplinar que reúne conhecimentos de linguística computacional, estatística, aprendizado de máquina e ciência da computação.


## 2. Aplicações Reais de PLN

- **Assistentes Virtuais**: Siri, Alexa, Google Assistant
- **Tradução Automática**: Google Translate, DeepL
- **Análise de Sentimentos**: Análise de opiniões em redes sociais ou avaliações
- **Classificação de E-mails**: Identificação de spam
- **Sistemas de Busca e Recuperação de Informação**
- **Chatbots e Sistemas de Atendimento Automático**
- **Corretores Ortográficos e de Gramática**


## 3. Principais Tarefas em PLN

### Tokenização
Consiste em dividir o texto em unidades básicas chamadas de tokens. Esses tokens podem ser palavras, sentenças ou até mesmo caracteres. Essa etapa é fundamental para qualquer outro processamento subsequente.

### Remoção de Stopwords
Stopwords são palavras muito comuns em um idioma (como “o”, “de”, “e”) que geralmente não carregam significado semântico relevante e são removidas para melhorar a eficiência do modelo.

### Stemming
É a técnica de reduzir uma palavra ao seu radical ou raiz. Exemplo: "amando", "amar", "amou" → "am".

### Lemmatização
Semelhante ao stemming, porém mais sofisticada. A lematização transforma uma palavra em sua forma canônica (lema), respeitando sua classe gramatical.

### Etiquetagem Gramatical (POS Tagging)
Consiste em atribuir a cada palavra de um texto a sua classe gramatical: substantivo, verbo, adjetivo, etc.

### Reconhecimento de Entidades Nomeadas (NER)
Identifica e classifica automaticamente entidades mencionadas em um texto, como nomes de pessoas, locais, datas, organizações, etc.

### Parsing
É a análise da estrutura sintática de uma sentença, identificando suas dependências e estrutura hierárquica.


## 4. Demonstrações com Python

### Tokenização e Remoção de Stopwords

```python
import nltk
nltk.download('punkt')
nltk.download('stopwords')
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

texto = "O Processamento de Linguagem Natural permite que computadores entendam a linguagem humana."
tokens = word_tokenize(texto, language='portuguese')
stop_words = set(stopwords.words('portuguese'))

tokens_filtrados = [palavra for palavra in tokens if palavra.lower() not in stop_words]

print("Tokens:", tokens)
print("Tokens sem stopwords:", tokens_filtrados)
```


### Stemming

```python
from nltk.stem import RSLPStemmer
nltk.download('rslp')
stemmer = RSLPStemmer()

palavras = ['correndo', 'correu', 'corre', 'corrida']
for p in palavras:
    print(f"{p} → {stemmer.stem(p)}")
```


### Etiquetagem Gramatical (POS Tagging)

```python
nltk.download('mac_morpho')
from nltk.corpus import mac_morpho
from nltk import UnigramTagger

train_sents = mac_morpho.tagged_sents()[:1000]
tagger = UnigramTagger(train_sents)

print(tagger.tag(['Maria', 'comprou', 'um', 'carro', 'novo']))
```


### Reconhecimento de Entidades Nomeadas (NER) com spaCy

```python
!pip install -U spacy
!python -m spacy download pt_core_news_sm

import spacy
nlp = spacy.load("pt_core_news_sm")

doc = nlp("A IBM foi fundada em 1911 e está sediada em Nova Iorque.")
for ent in doc.ents:
    print(ent.text, ent.label_)
```


## 5. Atividade Proposta

Utilizando o Google Colab, realize as seguintes etapas:

1. Escolha um parágrafo de uma notícia recente.
2. Realize a tokenização e a remoção de stopwords.
3. Aplique stemming nas palavras filtradas.
4. Use o spaCy para identificar entidades nomeadas no texto.


## 6. Leitura Complementar

* Jurafsky, D., & Martin, J. H. *Speech and Language Processing* (3rd ed.)
* Bird, S., Klein, E., & Loper, E. *Natural Language Processing with Python*
* Manning, C. D., & Schütze, H. *Foundations of Statistical Natural Language Processing*
* Camargo, J. L., & Cavalcanti, G. D. C. "Processamento de Linguagem Natural: conceitos, ferramentas e aplicações", Revista de Informática Teórica e Aplicada, 2012.
* Ruder, S. "A Survey of the State of the Art in NLP", 2018.


## 7. Conclusão

O PLN é uma área fundamental para aplicações modernas de IA, especialmente aquelas que envolvem interação com usuários humanos por meio de texto ou voz. Nesta aula, foram introduzidos conceitos, tarefas e ferramentas básicas que serão aprofundadas nas próximas aulas.

