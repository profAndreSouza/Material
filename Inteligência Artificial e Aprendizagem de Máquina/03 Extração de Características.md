# Extração de Características em Processamento de Linguagem Natural

## Objetivos da Aula

- Entender o conceito de características (features) em PLN
- Diferenciar tipos de características linguísticas e estatísticas
- Implementar técnicas de extração manual e automática de features
- Aplicar extração de n-gramas e características sintáticas e semânticas


## 1. O que são Características (Features)?

Em PLN, características são representações numéricas ou estruturadas extraídas dos textos para serem utilizadas em modelos de machine learning. Elas representam informações relevantes do texto e são fundamentais para algoritmos de classificação, agrupamento, tradução, geração de texto, entre outros.


## 2. Tipos de Características

### 2.1 Características Léxicas
- **Frequência de palavras**: número de vezes que uma palavra aparece.
- **Comprimento médio das palavras**
- **Presença de palavras específicas (e.g., termos positivos ou negativos)**

### 2.2 Características Sintáticas
- **Part-of-Speech (POS)**: frequência ou sequência de categorias gramaticais.
- **Padrões de estrutura frasal**
- **Árvores sintáticas (parsing)**

### 2.3 Características Semânticas
- **Entidades Nomeadas (NER)**
- **Sinonímia / Hiperonímia**
- **Vetores semânticos (word embeddings, Word2Vec, BERT)**

### 2.4 Características Estilísticas
- **Uso de pontuação**
- **Uso de maiúsculas**
- **Frequência de emoticons ou hashtags**


## 3. Extração Manual de Características

```python
def extrair_caracteristicas(texto):
    return {
        'num_palavras': len(texto.split()),
        'num_caracteres': len(texto),
        'tem_exclamacao': '!' in texto,
        'num_maiusculas': sum(1 for c in texto if c.isupper())
    }

exemplo = "A Inovação é FUNDAMENTAL para o sucesso!"
print(extrair_caracteristicas(exemplo))
```


## 4. Extração com N-gramas

**N-gramas** são sequências de *n* palavras consecutivas em um texto. São úteis para capturar contexto e padrões linguísticos.

```python
from sklearn.feature_extraction.text import CountVectorizer

corpus = [
    "o gato preto dorme",
    "o cachorro branco corre"
]

vetorizador = CountVectorizer(ngram_range=(1,2))  # unigramas e bigramas
X = vetorizador.fit_transform(corpus)

print(vetorizador.get_feature_names_out())
print(X.toarray())
```


## 5. Extração de Características Sintáticas com spaCy

```python
import spacy
nlp = spacy.load("pt_core_news_sm")

doc = nlp("Maria comprou um carro vermelho.")

caracteristicas = [(token.text, token.pos_, token.dep_) for token in doc]
for palavra, classe, dependencia in caracteristicas:
    print(f"{palavra:<10} | {classe:<10} | {dependencia}")
```


## 6. Extração de Entidades Nomeadas (NER)

```python
texto = "O presidente Lula visitou Brasília em janeiro."

doc = nlp(texto)
for ent in doc.ents:
    print(f"{ent.text} → {ent.label_}")
```


## 7. Características Avançadas com Word Embeddings

Embora técnicas como Bag of Words sejam simples, não capturam o significado das palavras. Para isso, utilizamos **vetores densos semânticos**, como Word2Vec, GloVe e BERT.

Exemplo com spaCy (embeddings pré-treinados):

```python
palavra1 = nlp("rei")[0]
palavra2 = nlp("rainha")[0]
print(palavra1.similarity(palavra2))
```


## 8. Aplicação: Conjunto de Características para Análise de Sentimentos

```python
def extrair_features_completas(texto):
    doc = nlp(texto)
    return {
        'num_palavras': len(doc),
        'num_substantivos': sum(1 for token in doc if token.pos_ == "NOUN"),
        'num_adjetivos': sum(1 for token in doc if token.pos_ == "ADJ"),
        'num_entidades': len(doc.ents),
        'media_similaridade': doc[0].similarity(doc[-1])
    }

texto = "A experiência foi maravilhosa, atendimento excelente e comida deliciosa!"
print(extrair_features_completas(texto))
```


## 9. Atividade Proposta

1. Escolha um conjunto de 5 frases de opiniões (positivas e negativas).
2. Aplique a extração manual de características léxicas.
3. Use n-gramas (unigramas e bigramas) para criar representações vetoriais.
4. Extraia entidades nomeadas e classes gramaticais.
5. Crie uma função que una todas essas características em um único vetor para uso em classificação.


## 10. Leitura Complementar

* Jurafsky, D., & Martin, J. H. *Speech and Language Processing* – Cap. 4 e 6
* Bird, S., Klein, E., & Loper, E. *Natural Language Processing with Python* – Cap. 5
* Camargo, J. L. (2012). "Extração de Características em Textos: Técnicas e Aplicações"
* Mikolov, T. et al. (2013). *Efficient Estimation of Word Representations in Vector Space*
* spaCy documentation: pipelines, `Token.pos_`, `Token.dep_`, `Doc.ents`


## 11. Conclusão

A extração de características é um passo fundamental para qualquer sistema de PLN baseado em aprendizado de máquina. O tipo de característica escolhida afeta diretamente o desempenho e a precisão do modelo. Características léxicas, sintáticas e semânticas devem ser combinadas com cuidado, dependendo da tarefa.
