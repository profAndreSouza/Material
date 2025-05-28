# Exercícios de Fixação: Pré-processamento, Análise Semântica, Sintática e Sentimentos

## Objetivos da Aula

- Reforçar os conceitos teóricos com atividades práticas aplicadas
- Utilizar bibliotecas de PLN para resolver tarefas reais
- Relacionar etapas do pipeline de PLN: de texto bruto até interpretação


## Instruções Gerais

1. Utilize **Python** no ambiente **Google Colab**
2. Utilize as bibliotecas `spaCy`, `NLTK`, `scikit-learn`, `pandas`, `matplotlib` e `textblob`
3. Salve suas respostas com comentários explicativos
4. Experimente variações nos exemplos para compreender o funcionamento

## Parte 1 – Pré-processamento de Texto

### Exercício 1

Dada a lista de frases:

```python
frases = [
    "A inteligência artificial é fascinante!",
    "Gosto de estudar linguagem natural.",
    "O modelo errou a classificação.",
    "Estamos desenvolvendo um chatbot.",
    "O tempo hoje está ótimo!"
]
```

Implemente as seguintes etapas de pré-processamento:

* Conversão para minúsculas
* Remoção de pontuação
* Tokenização
* Remoção de stopwords
* Lemmatização

> Use `spaCy` com modelo para português (`pt_core_news_sm`)


## Parte 2 – Análise de Sentimentos

### Exercício 2

Utilize a biblioteca `TextBlob` ou `transformers` para aplicar **análise de sentimentos** nas frases abaixo:

```python
frases_sentimentos = [
    "Estou muito feliz com os resultados.",
    "O sistema não está funcionando direito.",
    "Esse curso é excelente!",
    "Achei a experiência ruim.",
    "Vamos melhorar ainda mais."
]
```

* Classifique como **positivo**, **negativo** ou **neutro**
* Exiba o valor de polaridade
* Plote um gráfico de barras com os resultados


## Parte 3 – Análise Sintática

### Exercício 3

Utilize `spaCy` para analisar a **estrutura sintática** das frases abaixo:

```python
texto = "Maria comprou um livro novo na livraria do centro."
```

* Liste cada token com: texto, lemma, POS (part-of-speech), dependência e cabeça
* Visualize a árvore de dependência com `displacy`
* Identifique: sujeito, verbo principal, objeto direto


## Parte 4 – Análise Semântica (Intenções e Entidades)

### Exercício 4

Dado o trecho de uma conversa com um chatbot:

```python
conversas = [
    "Olá, gostaria de saber o horário de funcionamento.",
    "Vocês têm opções vegetarianas?",
    "Quero fazer um pedido para retirada.",
    "Onde fica a unidade mais próxima?",
    "Obrigado, até logo!"
]
```

Realize:

* Identificação de **intenções** (ex: saudação, consulta, pedido, localização, despedida)
* Extração de **entidades nomeadas** (NER): datas, locais, produtos, etc.
* Classifique manualmente as intenções ou use um classificador com `scikit-learn`

> (Opcional) Modele as intenções em um dicionário JSON e simule um mini-chatbot.


## Desafio Integrado (Opcional)

Desenvolva uma função chamada `analisar_texto(texto)` que:

1. Realiza o pré-processamento
2. Detecta a intenção e entidades
3. Classifica o sentimento
4. Retorna um dicionário com:

```python
{
    "intencao": "pedido",
    "entidades": ["pedido", "retirada"],
    "sentimento": "neutro",
    "polaridade": -0.05
}
```

## Leitura e Recursos de Apoio

* Jurafsky & Martin – *Speech and Language Processing* (Cap. 4, 6, 12, 13)
* spaCy Docs: [https://spacy.io/usage](https://spacy.io/usage)
* TextBlob: [https://textblob.readthedocs.io](https://textblob.readthedocs.io)
* NLTK Book: [https://www.nltk.org/book/](https://www.nltk.org/book/)
* scikit-learn: [https://scikit-learn.org](https://scikit-learn.org)
* Datasets para PLN: [https://huggingface.co/datasets](https://huggingface.co/datasets)


## Conclusão

Esses exercícios consolidam a base do pipeline de PLN e preparam você para construir aplicações mais complexas, como sistemas de diálogo, análise textual automatizada e interpretação semântica. Experimente modificar os exemplos para observar como o comportamento dos modelos muda.
