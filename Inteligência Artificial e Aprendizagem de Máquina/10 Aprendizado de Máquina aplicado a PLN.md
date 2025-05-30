# Aprendizado de Máquina Aplicado ao Processamento de Linguagem Natural

## Objetivos da Aula

- Compreender os fundamentos do aprendizado de máquina (ML) no contexto do PLN
- Explorar algoritmos e técnicas aplicadas a tarefas de linguagem natural
- Implementar exemplos práticos usando bibliotecas Python
- Discutir desafios, boas práticas e tendências


## 1. Introdução ao Aprendizado de Máquina em PLN

O aprendizado de máquina consiste em ensinar algoritmos a identificar padrões em dados, para que possam realizar previsões ou classificações. No PLN, ML é essencial para tarefas como:

- Classificação de texto (e.g., análise de sentimentos)
- Reconhecimento de entidades nomeadas
- Tradução automática
- Resumo automático
- Geração de texto

Os modelos aprendem a partir de grandes volumes de textos, extraindo características relevantes para a tarefa.

## 2. Principais Algoritmos Usados em PLN

O Processamento de Linguagem Natural (PLN) envolve uma variedade de algoritmos que evoluíram ao longo do tempo. Estes algoritmos podem ser divididos em três grandes categorias: modelos baseados em regras, aprendizado supervisionado tradicional e redes neurais profundas. Cada abordagem possui suas aplicações típicas, vantagens e limitações.


### 2.1. Modelos Baseados em Regras

São sistemas que utilizam **conjuntos explícitos de regras linguísticas** definidas manualmente para resolver tarefas específicas.

* **Funcionamento:** As regras geralmente consideram padrões gramaticais, léxicos ou sintáticos.
* **Exemplos de uso:**

  * **Tokenização com regras regulares:** separar palavras de pontuação com expressões regulares.
  * **Análise morfológica:** identificar radicais e sufixos com base em padrões linguísticos.
  * **Reconhecimento de entidades nomeadas (NER):** com dicionários e regras específicas.
* **Vantagens:** Fácil de entender e controlar, útil para domínios bem definidos.
* **Limitações:** Baixa escalabilidade, difícil de manter e adaptar a novos contextos ou idiomas.

> *Exemplo:* Em sistemas jurídicos, regras manuais podem identificar nomes de leis ou referências a artigos legais com base em expressões regulares.


### 2.2. Algoritmos de Aprendizado Supervisionado

Baseiam-se em **dados rotulados** para treinar modelos capazes de aprender padrões e realizar predições em novos textos.

#### • **Naive Bayes**

* Modelo probabilístico simples e eficiente para **classificação de texto**.
* Baseia-se no Teorema de Bayes assumindo independência entre as palavras.
* **Exemplo de uso:** Classificação de e-mails como *spam* ou *não spam*.

#### • **SVM (Support Vector Machine)**

* Algoritmo robusto que encontra um hiperplano ótimo para separação de classes.
* Funciona bem com dados de **alta dimensionalidade e texto esparso (como vetores TF-IDF)**.
* **Exemplo de uso:** Classificação de sentimentos (*positivo*, *negativo*, *neutro*) em avaliações de produtos.

#### • **Árvores de Decisão e Random Forest**

* Árvores de decisão são interpretáveis; Random Forests reduzem overfitting ao combinar várias árvores.
* Menos comuns em PLN puro, mas úteis em pipelines mistos ou tarefas estruturadas.
* **Exemplo de uso:** Classificar tipos de documentos (currículo, contrato, carta) com base em metadados e palavras-chave.

#### • **Redes Neurais (Simples)**

* Perceptrons multicamadas (MLP) podem ser aplicados em vetores de características extraídas do texto.
* Limitados na modelagem de sequência, mas ainda úteis em tarefas como classificação básica.
* **Exemplo de uso:** Detecção de linguagem de um texto com base em n-gramas vetorizados.

### 2.3. Modelos Baseados em Redes Neurais Profundas

A partir da última década, modelos de **aprendizado profundo (deep learning)** revolucionaram o PLN, permitindo lidar com ambiguidade, contexto e relações linguísticas complexas.

#### • **RNNs (Redes Neurais Recorrentes)**

* Capturam dependências sequenciais em textos.
* Utilizadas inicialmente para **geração de texto, análise de sentimentos**, e **modelagem de linguagem**.
* **Limitações:** dificuldade em lidar com **dependências de longo prazo**.

> *Exemplo:* Previsão da próxima palavra em frases curtas.

#### • **LSTM (Long Short-Term Memory) e GRU (Gated Recurrent Unit)**

* Melhoram as RNNs, controlando o fluxo de informação com "portas".
* Lidam melhor com dependências de longo prazo.
* **Exemplo de uso:** Tradução automática, geração de legenda para imagens.

#### • **Transformers**

* Abandonam a recorrência e utilizam **atenção (self-attention)** para capturar relações entre palavras em qualquer posição do texto.
* Representam o **estado da arte em quase todas as tarefas de PLN**.
* **Modelos populares:** BERT, RoBERTa, GPT, T5, XLNet.
* **Exemplo de uso:**

  * **BERT:** Preenchimento de lacunas, classificação de texto, NER.
  * **GPT:** Geração de texto, resumo automático, criação de chatbots.

> *Exemplo real:* O ChatGPT é baseado na arquitetura Transformer (GPT).

### Resumo Visual (Opcional para slides ou material didático):

| Categoria                  | Algoritmo            | Tarefa Típica             | Exemplo de Uso                                   |
| -------------------------- | -------------------- | ------------------------- | ------------------------------------------------ |
| Baseado em Regras          | Expressões Regulares | Tokenização, NER simples  | Reconhecer nomes de leis em textos jurídicos     |
| Aprendizado Supervisionado | Naive Bayes          | Classificação             | Spam vs. Ham                                     |
|                            | SVM                  | Sentiment Analysis        | Opinião de produtos                              |
|                            | Random Forest        | Classificação estruturada | Classificação de documentos                      |
| Baseado em Deep Learning   | RNN, LSTM, GRU       | Modelagem de sequência    | Tradução automática                              |
|                            | Transformers         | Tarefas gerais em PLN     | Chatbots, resumo, QA, análise semântica profunda |


## 3. Pipeline Típico de Aprendizado de Máquina em PLN

O pipeline de PLN com aprendizado de máquina segue uma sequência estruturada de etapas para transformar texto bruto em modelos preditivos eficazes. Cada etapa é crucial para garantir bons resultados.


### 1. **Coleta de Dados**

Consiste em obter textos que representem o problema a ser resolvido. Os dados podem ser:

* **Anotados manualmente** (ex: sentimentos, entidades, categorias)
* **Coletados de fontes públicas** como corpora linguísticos ou bancos de dados online.

**Exemplos:**

* Tweets rotulados com sentimentos positivos/negativos (usados em análise de sentimentos).
* Dataset *20 Newsgroups* (conjunto de textos classificados em 20 categorias).
* Comentários de produtos com avaliações (de 1 a 5 estrelas).

> *Ferramentas úteis:* `NLTK`, `Hugging Face Datasets`, scraping com `BeautifulSoup` ou APIs como `Twitter API`.


### 2. **Pré-processamento**

Transforma o texto bruto em um formato mais limpo e estruturado.

#### Etapas comuns:

* **Limpeza:** remoção de números, HTML, emojis, símbolos irrelevantes.
* **Tokenização:** separação de palavras/frases (tokens).
* **Remoção de *stopwords*:** palavras comuns (como “o”, “de”, “e”) que não carregam significado relevante.
* **Stemming:** redução das palavras ao seu radical (ex: "correndo" → "corr").
* **Lematização:** redução à forma canônica (ex: "correndo" → "correr").

**Exemplo em Python:**

```python
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize

texto = "Os jogadores estavam jogando intensamente no estádio."
tokens = word_tokenize(texto.lower())
palavras_filtradas = [w for w in tokens if w not in stopwords.words('portuguese')]
stemmer = PorterStemmer()
palavras_processadas = [stemmer.stem(p) for p in palavras_filtradas]
```

> *Bibliotecas:* `NLTK`, `spaCy`, `TextBlob`


### 3. **Extração de Características**

Transforma o texto em **vetores numéricos** que podem ser processados por algoritmos de aprendizado de máquina.

#### Técnicas comuns:

* **Bag of Words (BoW):** conta a frequência das palavras.
* **TF-IDF:** pondera as palavras pela sua importância no documento.
* **Word Embeddings:**

  * Representam palavras em **vetores densos** que capturam semântica.
  * Modelos: **Word2Vec**, **GloVe**, **FastText**.

**Exemplo com TF-IDF em Python:**

```python
from sklearn.feature_extraction.text import TfidfVectorizer

corpus = ["gosto de maçã", "não gosto de banana"]
vetorizar = TfidfVectorizer()
X = vetorizar.fit_transform(corpus)
print(X.toarray())
print(vetorizar.get_feature_names_out())
```

> *Resultado:* vetores que representam cada documento por seus termos importantes.


### 4. **Treinamento do Modelo**

Nesta fase, o modelo é treinado com os dados vetorizados.

#### Etapas:

* Divisão dos dados em **treino e teste** (geralmente 80/20 ou 70/30).
* Seleção do algoritmo: Naive Bayes, SVM, Random Forest, etc.
* Ajuste de **hiperparâmetros** com técnicas como *grid search*.

**Exemplo:**

```python
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)
modelo = MultinomialNB()
modelo.fit(X_train, y_train)
```

> *Bibliotecas:* `scikit-learn`, `XGBoost`, `PyTorch`, `TensorFlow`


### 5. **Avaliação**

Mede o desempenho do modelo com métricas apropriadas:

* **Acurácia:** proporção de acertos.
* **Precisão:** acertos sobre os classificados como positivos.
* **Recall:** cobertura dos positivos reais.
* **F1-score:** média harmônica entre precisão e recall.

**Exemplo em Python:**

```python
from sklearn.metrics import classification_report

y_pred = modelo.predict(X_test)
print(classification_report(y_test, y_pred))
```

> *Interpretação:* Métricas balanceadas são importantes, especialmente em classes desbalanceadas.


### 6. **Implantação e Ajustes**

Depois de validado, o modelo é implantado em um ambiente de produção e monitorado.

#### Etapas:

* Exportação com `joblib`, `pickle` ou `ONNX`.
* Integração com uma API (`Flask`, `FastAPI`, `Django`).
* Reavaliação periódica para ajustar **drift** (mudança nos dados).
* Implementação de **monitoramento e feedback** para aprendizado contínuo.

**Exemplo:** Um chatbot de atendimento que usa o modelo para classificar intenções e adaptar respostas automaticamente.

> *Ferramentas:* `Docker`, `CI/CD`, `MLflow`, `Streamlit`, `Gradio` para protótipos.


### Pipeline Resumido:

```
Texto Bruto → Pré-processamento → Vetorização → Treinamento → Avaliação → Deploy
```



## 4. Exemplo Prático – Classificação de Sentimentos com TF-IDF + SVM

```python
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

data = {
    "texto": [
        # Positivas
        "Adorei o atendimento, muito rápido e eficiente.",
        "Produto excelente, superou minhas expectativas!",
        "Fiquei muito satisfeito com a qualidade.",
        "O serviço foi impecável, parabéns à equipe!",
        "Compra fácil e entrega antes do prazo.",
        "Tudo certo com a encomenda, recomendo a loja.",
        "A embalagem estava perfeita e bem protegida.",
        "O suporte ao cliente foi muito prestativo.",
        "Gostei muito do produto, funciona direitinho.",
        "Muito bom, voltarei a comprar com certeza.",
        "Excelente custo-benefício.",
        "A experiência de compra foi ótima!",
        "Entrega rápida e produto de qualidade.",
        "Estou muito feliz com minha compra.",
        "Loja confiável e produtos originais.",

        # Negativas
        "Péssimo atendimento, não volto mais.",
        "Produto chegou quebrado, decepção total.",
        "Demoraram muito para entregar.",
        "A qualidade é horrível, não recomendo.",
        "Fui mal atendido e sem solução para o problema.",
        "Não funcionou como esperado, dinheiro perdido.",
        "Tive dor de cabeça com essa compra.",
        "Veio errado e ainda tive que pagar a devolução.",
        "Propaganda enganosa, produto diferente do anunciado.",
        "Sistema de entrega desorganizado.",
        "A embalagem estava rasgada e suja.",
        "O suporte não resolveu nada.",
        "Muito ruim, nunca mais compro aqui.",
        "Não cumpriram o prazo de entrega.",
        "Experiência frustrante do começo ao fim.",
    ],
    "sentimento": ["positivo"] * 15 + ["negativo"] * 15
}

df = pd.DataFrame(data)

# Vetorização
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df['texto'])
y = df['sentimento']

# Divisão com estratificação
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# Modelo
model = LinearSVC()
model.fit(X_train, y_train)

# Avaliação
y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))
```


## 5. Uso de Embeddings Pré-treinados com Transformers

```python
from transformers import BertTokenizer, BertForSequenceClassification, Trainer, TrainingArguments
import torch
from torch.utils.data import Dataset

# Dados simples
texts = ["I love this movie!", "This is terrible.", "Great acting!", "Worst film ever."]
labels = [1, 0, 1, 0]  # 1 = positivo, 0 = negativo

# Dataset personalizado
class SentimentDataset(Dataset):
    def __init__(self, texts, labels, tokenizer):
        self.encodings = tokenizer(texts, padding=True, truncation=True, return_tensors="pt")
        self.labels = labels

    def __getitem__(self, idx):
        item = {key: val[idx] for key, val in self.encodings.items()}
        item['labels'] = torch.tensor(self.labels[idx])
        return item

    def __len__(self):
        return len(self.labels)

# Tokenização
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
dataset = SentimentDataset(texts, labels, tokenizer)

# Modelo
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

# Argumentos de treinamento
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=2,
    logging_dir='./logs',
    logging_steps=10,
)

# Treinador
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset
)

# Treinar
trainer.train()

# 4bafdaa1ba5b77b72540121a017b0b71f153908d

test_text = ["I hated this."]
inputs = tokenizer(test_text, padding=True, truncation=True, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
pred = torch.argmax(logits, dim=1)
print("Classe prevista:", pred.item())  # 0 ou 1
```


## 6. Desafios e Considerações

* **Qualidade e quantidade dos dados**: dados ruidosos podem prejudicar o desempenho
* **Overfitting e generalização**
* **Interpretação dos modelos**
* **Custos computacionais de modelos profundos**
* **Viés e ética**

## 7. Recursos e Leituras Complementares

* Jurafsky & Martin, *Speech and Language Processing* (Capítulos sobre ML em PLN)
* Curso de Machine Learning com Python (Scikit-learn)
* Documentação Hugging Face Transformers
* Artigos recentes em conferências ACL, EMNLP e NAACL


## 8. Exercícios Sugeridos

* Implementar um classificador de sentimentos usando Naive Bayes
* Experimentar diferentes vetorizadores (CountVectorizer, TF-IDF)
* Testar embeddings pré-treinados para melhorar a classificação
* Avaliar diferentes métricas para analisar desempenho do modelo
