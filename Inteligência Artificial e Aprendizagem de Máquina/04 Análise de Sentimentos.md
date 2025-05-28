# Análise de Sentimentos

## Objetivos da Aula

- Compreender o conceito de análise de sentimentos em textos
- Conhecer abordagens léxicas, estatísticas e com aprendizado de máquina
- Implementar classificadores básicos para análise de polaridade textual
- Avaliar o desempenho de modelos em sentimentos positivos e negativos

## 1. O que é Análise de Sentimentos?

A análise de sentimentos é o processo de identificar e classificar opiniões expressas em textos, especialmente para determinar se o sentimento é positivo, negativo ou neutro. É amplamente utilizada em aplicações como:

- Monitoramento de redes sociais
- Avaliação de produtos/serviços
- Feedback de clientes
- Opiniões políticas


## 2. Abordagens para Análise de Sentimentos

### 2.1 Baseada em Regras (Léxica)
Utiliza dicionários de palavras com polaridades atribuídas (positiva, negativa ou neutra).

### 2.2 Baseada em Machine Learning
Usa algoritmos supervisionados que aprendem padrões de sentimentos a partir de textos rotulados.

### 2.3 Baseada em Deep Learning
Utiliza redes neurais (como LSTM, Transformers) para identificar sentimentos em textos complexos.


## 3. Exemplo Prático – Abordagem Léxica

```python
lexico = {
    "ótimo": 1,
    "bom": 1,
    "excelente": 1,
    "ruim": -1,
    "horrível": -1,
    "péssimo": -1
}

def analisar_sentimento_simples(texto):
    tokens = texto.lower().split()
    score = sum(lexico.get(palavra, 0) for palavra in tokens)
    if score > 0:
        return "positivo"
    elif score < 0:
        return "negativo"
    return "neutro"

exemplo = "O produto é excelente, mas o atendimento foi ruim"
print(analisar_sentimento_simples(exemplo))
```


## 4. Abordagem com Machine Learning

### 4.1 Base de Dados de Exemplo

```python
corpus = [
    "O filme foi excelente e muito divertido",  # positivo
    "O atendimento foi péssimo",                # negativo
    "Gostei do serviço prestado",               # positivo
    "Não recomendo este lugar",                 # negativo
    "Foi bom, mas poderia ser melhor",          # neutro
]

rotulos = ["positivo", "negativo", "positivo", "negativo", "neutro"]
```

### 4.2 Treinamento com Naive Bayes

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

X_train, X_test, y_train, y_test = train_test_split(corpus, rotulos, test_size=0.4)

modelo = make_pipeline(CountVectorizer(), MultinomialNB())
modelo.fit(X_train, y_train)

y_pred = modelo.predict(X_test)
print(classification_report(y_test, y_pred))
```

## 5. Avaliação de Modelos

As métricas mais comuns utilizadas na avaliação de classificadores de sentimento incluem:

* **Acurácia**
* **Precisão**
* **Revocação**
* **F1-score**

A escolha da métrica depende do equilíbrio entre classes e dos objetivos do sistema.

## 6. Desafios Comuns

* Ambiguidade: “Este filme é tão ruim que chega a ser bom.”
* Ironia e sarcasmo: “Adorei esperar 3 horas na fila...”
* Gírias e expressões regionais
* Palavras fora do vocabulário do modelo (Out-of-Vocabulary)

## 7. Aplicação com Biblioteca TextBlob (opcional)

```python
from textblob import TextBlob
frase = TextBlob("O show foi incrível e emocionante.")
print(frase.sentiment)  # polarity e subjectivity
```

> Nota: `TextBlob` funciona melhor com textos em inglês. Para português, há bibliotecas como `VADER-PT` ou uso de modelos pré-treinados em português.


## 8. Atividade Proposta

1. Crie uma base com pelo menos 10 frases positivas, 10 negativas e 10 neutras.
2. Utilize `CountVectorizer` e `TfidfVectorizer` para representar os textos.
3. Aplique pelo menos dois algoritmos de classificação (ex: Naive Bayes, SVM).
4. Compare os resultados utilizando o `classification_report`.
5. Experimente diferentes n-gramas (unigramas e bigramas).


## 9. Leitura Complementar

* Pang, B., & Lee, L. (2008). *Opinion Mining and Sentiment Analysis*
* Liu, B. (2012). *Sentiment Analysis and Opinion Mining*
* Socher, R. et al. (2013). *Recursive Deep Models for Semantic Compositionality*
* Jurafsky & Martin. *Speech and Language Processing*, Capítulo 6
* Artigos e tutoriais do blog da MonkeyLearn sobre análise de sentimentos


## 10. Conclusão

A análise de sentimentos é uma das tarefas mais populares e desafiadoras do PLN. A escolha entre abordagens léxicas e supervisionadas depende dos dados disponíveis, do domínio e da necessidade de precisão. Em sistemas reais, é comum combinar múltiplas técnicas para aumentar a robustez.

```