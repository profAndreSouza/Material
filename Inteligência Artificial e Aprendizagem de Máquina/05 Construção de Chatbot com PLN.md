
# Construção de Chatbot com PLN

## Objetivos da Aula

- Entender os componentes básicos de um chatbot com PLN
- Diferenciar entre chatbots baseados em regras e em aprendizado de máquina
- Criar um chatbot simples com reconhecimento de intenções
- Implementar um protótipo com Python usando dados estruturados


## 1. O que é um Chatbot?

Um **chatbot** é um programa de computador que simula uma conversa com usuários humanos, utilizando linguagem natural. Os chatbots podem ser usados para atendimento ao cliente, suporte técnico, assistentes virtuais, entre outros.


## 2. Tipos de Chatbots

### 2.1 Baseados em Regras
- Utilizam padrões fixos de perguntas e respostas
- Baixa flexibilidade e dependência de regras pré-definidas

### 2.2 Baseados em Intenções
- Detectam **intenções** e **entidades** no texto do usuário
- Usam PLN para interpretar o significado das frases

### 2.3 Baseados em IA Generativa
- Utilizam grandes modelos de linguagem (LLMs)
- Capazes de gerar respostas mais flexíveis e contextuais

> Nesta aula, focaremos nos **chatbots baseados em intenções**, úteis para construção de protótipos funcionais.


## 3. Arquitetura de um Chatbot com PLN

```text
Usuário → Processamento de Texto → Classificação de Intenção → Execução de Resposta → Resposta ao Usuário
```

### Componentes:

* **Pré-processamento**: normalização, tokenização, remoção de stopwords
* **Classificador de Intenções**: modelo treinado para reconhecer o objetivo do usuário
* **Resposta**: baseada na intenção detectada, podendo ser fixa ou gerar uma ação


## 4. Exemplo de Intenções

```json
{
  "intencoes": [
    {
      "tag": "saudacao",
      "padroes": ["oi", "olá", "bom dia", "boa tarde"],
      "respostas": ["Olá, como posso ajudar?", "Oi! Em que posso ajudar hoje?"]
    },
    {
      "tag": "despedida",
      "padroes": ["tchau", "até logo", "adeus"],
      "respostas": ["Até logo!", "Tchau, tenha um bom dia!"]
    },
    {
      "tag": "pedido_cardapio",
      "padroes": ["quero ver o cardápio", "tem algo para comer?", "o que vocês servem?"],
      "respostas": ["Temos hambúrgueres, batatas fritas e refrigerantes."]
    }
  ]
}
```


## 5. Implementação com Scikit-learn

### 5.1 Pré-processamento e dados

```python
intencoes = {
    "saudacao": ["oi", "olá", "bom dia", "boa tarde"],
    "despedida": ["tchau", "até logo", "adeus"],
    "pedido_cardapio": ["quero ver o cardápio", "tem algo para comer?", "o que vocês servem?"]
}

frases = []
tags = []

for tag, padroes in intencoes.items():
    for frase in padroes:
        frases.append(frase)
        tags.append(tag)
```

### 5.2 Treinamento do Classificador

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

vetor = CountVectorizer()
X = vetor.fit_transform(frases)

modelo = MultinomialNB()
modelo.fit(X, tags)
```

### 5.3 Função de resposta

```python
def responder(frase):
    X_input = vetor.transform([frase])
    tag_prevista = modelo.predict(X_input)[0]

    respostas = {
        "saudacao": ["Olá! Como posso ajudar?", "Oi! Tudo bem?"],
        "despedida": ["Tchau!", "Volte sempre!"],
        "pedido_cardapio": ["Temos hambúrgueres, refrigerantes e sobremesas."]
    }

    return respostas.get(tag_prevista, ["Desculpe, não entendi."])[0]

# Teste
print(responder("oi"))
print(responder("tem algo para comer?"))
```


## 6. Limitações e Melhorias

* Melhorar reconhecimento com **sinônimos e similaridade semântica**
* Implementar um **modelo com embeddings** (Word2Vec, BERT)
* Adicionar **contexto conversacional** (histórico de diálogo)
* Integrar com interface gráfica ou APIs de mensagens


## 7. Atividade Proposta

1. Amplie o conjunto de intenções com pelo menos 2 novas categorias (ex: horário de funcionamento, localização).
2. Treine o classificador com as novas frases.
3. Teste o chatbot com entradas variadas.
4. (Opcional) Crie uma interface simples com `Flask` ou `Gradio` para interação.


## 8. Leitura Complementar

* Jurafsky, D. & Martin, J. H. *Speech and Language Processing*, Capítulo 27 – Dialogue Systems
* Luger, G. F. *Artificial Intelligence: Structures and Strategies for Complex Problem Solving*, Cap. 11
* Rasa Open Source – Ferramenta moderna para desenvolvimento de chatbots
* Artigos da Hugging Face sobre uso de Transformers para diálogo
* Guia da IBM: Como construir assistentes virtuais com Watson Assistant

## 9. Conclusão

Construir um chatbot com PLN é uma excelente forma de integrar várias técnicas de IA. A abordagem baseada em intenções é ideal para sistemas simples e pode ser aprimorada progressivamente com embeddings, contexto e integração com APIs modernas.
