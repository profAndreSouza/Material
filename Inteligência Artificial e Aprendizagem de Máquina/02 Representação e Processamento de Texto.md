# Representação e Processamento de Texto

## Objetivos da Aula

- Compreender as formas de representar textos em PLN
- Explorar os principais modelos de representação vetorial
- Implementar técnicas de pré-processamento textual
- Utilizar vetorização com Bag of Words e TF-IDF


## 1. O que é Representação de Texto?

Para que computadores possam "entender" linguagem natural, é necessário transformar o texto em uma representação numérica (vetorial) que possa ser processada por algoritmos de aprendizado de máquina.

Essa transformação é conhecida como **representação vetorial** ou **vetorização de texto**.

## 2. Pré-processamento Textual

Antes de representar um texto, é importante realizar uma série de etapas para padronizar e reduzir a complexidade dos dados:

### Etapas Comuns

1. **Tokenização** – Separar o texto em palavras (tokens)
2. **Lowercasing** – Converter para minúsculas
3. **Remoção de pontuação**
4. **Remoção de stopwords** – Palavras muito comuns e pouco informativas
5. **Stemming ou Lemmatização** – Redução das palavras à raiz ou forma base

Essas etapas ajudam a reduzir a dimensionalidade do texto e a melhorar o desempenho dos modelos.

## 3. Modelos de Representação de Texto

### 3.1 One-hot Encoding

Representa cada palavra por um vetor binário. Exemplo:  
Vocabulário: `[gato, cachorro, rato]`  
"gato" → `[1, 0, 0]`

**Limitações**:  
- Vetores esparsos e de alta dimensão  
- Não capta semelhança semântica entre palavras


### 3.2 Bag of Words (BoW)

Conta a frequência das palavras em um texto.

**Exemplo**:  
Texto 1: "gato preto"  
Texto 2: "gato branco"  
Vocabulário: `[gato, preto, branco]`  
Texto 1 → `[1, 1, 0]`  
Texto 2 → `[1, 0, 1]`

**Limitações**:
- Desconsidera a ordem das palavras
- Não leva em conta o contexto


### 3.3 TF-IDF (Term Frequency - Inverse Document Frequency)

Pondera a frequência das palavras em um documento, considerando sua importância nos demais documentos.  
Palavras comuns em todos os textos (ex: "o", "de") recebem menor peso.

**Fórmula**:
- `TF(t,d)` = frequência da palavra t no documento d
- `IDF(t)` = log(N / df(t)), onde:
  - N = número total de documentos
  - df(t) = número de documentos contendo o termo t

TF-IDF = TF * IDF

## 4. Exemplos Práticos em Python

### Pré-processamento com NLTK

```python
import nltk
import string
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download('punkt')
nltk.download('stopwords')

def preprocessar_texto(texto):
    tokens = word_tokenize(texto.lower())
    stop_words = set(stopwords.words('portuguese'))
    tokens_filtrados = [
        palavra for palavra in tokens 
        if palavra not in stop_words and palavra not in string.punctuation
    ]
    return tokens_filtrados

texto = "Este é um exemplo simples de pré-processamento de texto em PLN."
print(preprocessar_texto(texto))
```


### Vetorização com Bag of Words

```python
from sklearn.feature_extraction.text import CountVectorizer

corpus = [
    "O gato preto dorme no sofá",
    "O cachorro branco corre no parque"
]

vetorizador = CountVectorizer()
X = vetorizador.fit_transform(corpus)

print(vetorizador.get_feature_names_out())
print(X.toarray())
```


### Vetorização com TF-IDF

```python
from sklearn.feature_extraction.text import TfidfVectorizer

vetorizador_tfidf = TfidfVectorizer()
X_tfidf = vetorizador_tfidf.fit_transform(corpus)

print(vetorizador_tfidf.get_feature_names_out())
print(X_tfidf.toarray())
```

## 5. Comparação dos Modelos

| Modelo       | Prós                                   | Contras                              |
| ------------ | -------------------------------------- | ------------------------------------ |
| One-hot      | Simples                                | Muito esparso, não captura semântica |
| Bag of Words | Intuitivo, rápido                      | Ignora contexto e ordem              |
| TF-IDF       | Reduz impacto de palavras irrelevantes | Ainda ignora a ordem e contexto      |


## 6. Atividade Proposta

1. Escolha 3 textos curtos (podem ser manchetes de notícias, parágrafos de livros ou postagens).
2. Aplique o pré-processamento completo: tokenização, remoção de pontuação, stopwords e letras minúsculas.
3. Gere uma matriz Bag of Words e uma matriz TF-IDF.
4. Compare os resultados vetoriais. O que muda?


## 7. Leitura Complementar

* Jurafsky, D., & Martin, J. H. *Speech and Language Processing* – Cap. 6 (Vector Semantics)
* Bird, S., Klein, E., & Loper, E. *Natural Language Processing with Python* – Cap. 3 e 4
* Scikit-learn documentation – `CountVectorizer` e `TfidfVectorizer`
* Ramos, J. (2003). *Using TF-IDF to determine word relevance in document queries*


## 8. Conclusão

A representação de textos é um passo fundamental no PLN, pois define como o texto será processado por modelos de aprendizado de máquina. Técnicas como BoW e TF-IDF são simples e eficazes para tarefas de classificação e análise inicial. Nas próximas aulas, abordaremos como essas representações são utilizadas em aplicações reais como a análise de sentimentos.
