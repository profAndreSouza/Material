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

### 2.1. Modelos Baseados em Regras

- Conjunto de regras linguísticas para tarefas específicas
- Limitados em escalabilidade e flexibilidade

### 2.2. Algoritmos de Aprendizado Supervisionado

- **Naive Bayes:** modelo probabilístico simples, eficiente para classificação de texto
- **SVM (Support Vector Machine):** bom desempenho para texto esparso
- **Árvores de Decisão e Random Forest:** interpretáveis, porém menos comuns em PLN puro
- **Redes Neurais:** desde perceptrons simples a arquiteturas profundas

### 2.3. Modelos Baseados em Redes Neurais Profundas

- **RNNs (Redes Recorrentes):** para sequências, mas com limitações em dependências longas
- **LSTM e GRU:** variantes que lidam melhor com dependências temporais
- **Transformers:** arquiteturas atuais que dominam o PLN (ex: BERT, GPT)


## 3. Pipeline Típico de Aprendizado de Máquina em PLN

1. **Coleta de Dados:** textos anotados ou corpora públicos
2. **Pré-processamento:** limpeza, tokenização, remoção de stopwords, stemming/lemmatização
3. **Extração de Características:** 
   - Bag of Words (BoW)
   - TF-IDF (Term Frequency - Inverse Document Frequency)
   - Word embeddings (Word2Vec, GloVe, FastText)
4. **Treinamento do Modelo:** divisão treino/teste, ajuste de hiperparâmetros
5. **Avaliação:** métricas como acurácia, precisão, recall, F1-score
6. **Implantação e Ajustes**


## 4. Exemplo Prático – Classificação de Sentimentos com TF-IDF + SVM

```python
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Dados de exemplo
data = {
    "texto": [
        "Adorei o filme, muito bom!",
        "Péssimo atendimento, não recomendo.",
        "Excelente experiência, voltarei!",
        "O produto chegou com defeito.",
        "Muito satisfeito com a compra."
    ],
    "sentimento": ["positivo", "negativo", "positivo", "negativo", "positivo"]
}

df = pd.DataFrame(data)

# Pré-processamento e vetorização
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df['texto'])
y = df['sentimento']

# Divisão treino/teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Treinamento do modelo
model = LinearSVC()
model.fit(X_train, y_train)

# Previsões e avaliação
y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))
```


## 5. Uso de Embeddings Pré-treinados com Transformers

```python
from transformers import BertTokenizer, BertForSequenceClassification
from transformers import Trainer, TrainingArguments
import torch

# Exemplo simples para carregar tokenizer e modelo BERT
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

# Tokenização de exemplo
texts = ["I love this movie!", "This is terrible."]
inputs = tokenizer(texts, padding=True, truncation=True, return_tensors="pt")

# Forward pass
outputs = model(**inputs)
logits = outputs.logits
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


## 9. Conclusão

O aprendizado de máquina é fundamental para o avanço do PLN, permitindo que sistemas aprendam diretamente dos dados de linguagem natural. O uso combinado de técnicas tradicionais e modernas abre possibilidades robustas para solucionar problemas reais em diversas áreas.
