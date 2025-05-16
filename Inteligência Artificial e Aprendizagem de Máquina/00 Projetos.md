# Resumo dos Conteúdos Estudados

1. **Introdução ao Processamento de Linguagem Natural (PLN)**

   * Conceitos fundamentais de PLN
   * Aplicações em áreas como tradução, análise de sentimentos e assistentes virtuais

2. **Representação e Processamento de Texto**

   * Técnicas de limpeza e tokenização
   * Stopwords, stemming, lematização

3. **Extração de Características**

   * Vetorização com Bag-of-Words, TF-IDF
   * Embeddings (Word2Vec, GloVe)

4. **Análise de Sentimentos**

   * Identificação de polaridade (positivo, negativo, neutro)
   * Aplicação com modelos estatísticos e transformers

5. **Construção de Chatbot com PLN**

   * Uso de pipelines para entrada e resposta
   * Técnicas de recuperação de informação e geração de resposta

6. **Exercícios de Fixação**

   * Projetos práticos com classificação, análise de sentimentos e chatbot simples

7. **Análise Sintática**

   * Parsing, árvores sintáticas, dependências gramaticais

8. **Interpretação Semântica e Gramáticas**

   * Reconhecimento de significados, ontologias, e resolução de ambiguidade

9. **Descoberta de Conhecimento em Textos (KDT)**

   * Técnicas para extrair informações relevantes de grandes volumes de texto
   * Extração de entidades e relações

---

# Projeto: Chatbot com Respostas Inteligentes via Flask

## **Nome Sugerido:** `SmartChat4Text`

---

## **Objetivo Geral**

Construir uma aplicação web com Flask que atue como um **chatbot inteligente**, capaz de responder a perguntas do usuário com base em diferentes fontes de dados e técnicas de PLN.

---

# **Módulos e Funcionalidades**

## 1. **Entrada via Prompt (Usuário)**

* Campo de texto para entrada de enunciado.
* Identificação do tipo de pergunta: consulta, resumo, sentimento etc.

---

## 2. **Módulo de Interpretação do Enunciado**

* **Análise Sintática e Semântica:** usa parsing e reconhecimento de entidades para compreender o enunciado.
* **Classificador de Intenção (opcional):** modelo para identificar o tipo de resposta esperada (SQL, JSON, resumo, etc.)

---

## 3. **Respostas com Base em Consulta SQL**

* Banco de dados (ex: SQLite ou PostgreSQL)
* Conversão do enunciado em uma consulta SQL válida (usando LangChain ou técnica própria)
* Exemplo: *"Quantos produtos temos em estoque?"* → `SELECT COUNT(*) FROM produtos WHERE estoque > 0`

---

## 4. **Respostas com Base em Arquivo JSON (formato wiki)**

* Arquivo JSON estruturado com verbetes e descrições
* Busca por similaridade semântica ou por chave exata
* Exemplo: *"Quem foi Alan Turing?"* → busca no JSON e retorna a seção relevante

---

## 5. **Sumarização de Texto**

* Dado um texto longo enviado pelo usuário ou presente em um contexto:

  * Aplica sumarizador via transformers (`BART`, `T5`, ou `GPT`)
* Exemplo: *"Resuma este artigo sobre redes neurais..."*

---

## 6. **Análise de Sentimentos (Extra)**

* Detectar polaridade do texto informado
* Aplicável em frases como: *"O atendimento foi ótimo."* → Resposta: *"Sentimento positivo"*

---

## 7. **Descoberta de Conhecimento em Texto (KDT)**

* Identificação de entidades e relações
* Geração de gráficos de conhecimento simplificados (opcional com NetworkX)
* Exemplo: extração de *pessoas, datas, locais* de um texto noticioso

---

## 8. **Outras Funcionalidades Necessárias**

* Interface web com Flask + HTML/CSS (Bootstrap ou Tailwind)
* Log de conversas
* Armazenamento de histórico (opcional)
* Uso de LangChain ou spaCy + Transformers
* Modularização dos métodos de resposta

---

# **Arquitetura Proposta**

```
Usuário ⇄ Interface Flask (Web)
             ↓
      Classificador de Intenção
        ↓         ↓          ↓
     Consulta SQL | JSON Wiki | Summarizer
        ↓         ↓          ↓
      Banco     Arquivo     Modelo
      de Dados    JSON      Transformer
```

---

# **Tecnologias e Bibliotecas**

* **Flask** (Backend Web)
* **Jinja2** (Templates HTML)
* **spaCy** (PLN)
* **Transformers (Hugging Face)**: T5/BART
* **LangChain (opcional)**: Parsing, SQL Query Generator
* **Pandas / SQLite / PostgreSQL**
* **Bootstrap / Tailwind (Frontend)**

---

# Etapas Prováveis

| Etapa | Tarefa                                |
| ------ | ------------------------------------- |
| 1      | Setup do Flask e interface básica     |
| 2      | Implementar classificador de intenção |
| 3      | Integração com banco SQL              |
| 4      | Integração com JSON Wiki              |
| 5      | Módulo de sumarização                 |
| 6      | Módulo de análise de sentimentos      |
| 7      | Testes e refinamento das respostas    |
| 8      | Entrega e apresentação do projeto     |
