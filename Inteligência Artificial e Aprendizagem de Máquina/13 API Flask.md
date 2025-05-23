# Chatbot NLP API com Flask + spaCy + Transformers

API para análise de texto com:

* Processamento de Linguagem Natural (NLP)
* Extração de Características (TF-IDF)
* Análise Sintática
* Análise de Sentimentos
* Interpretação Semântica
* Descoberta de Conhecimento em Texto
* Interface Web para interação com chatbot

## Estrutura do Projeto

```
chatbot_nlp_api/
│
├── app.py
├── requirements.txt
│
├── controllers/
│   └── analysis_controller.py
│
├── services/
│   └── nlp_service.py
│
├── core/
│   └── models.py
│
├── templates/
│   └── index.html
│
└── static/
    └── style.css
```


## Requisitos

```bash
pip install -r requirements.txt
python -m spacy download en_core_web_sm
```


## `requirements.txt`

```txt
flask
spacy
scikit-learn
transformers
torch
```

## Execução

```bash
python app.py
```

Acesse [http://localhost:5000](http://localhost:5000)

## `app.py`

```python
from flask import Flask, render_template
from controllers.analysis_controller import bp_analysis

def create_app():
    app = Flask(__name__)
    app.register_blueprint(bp_analysis)
    
    @app.route("/")
    def home():
        return render_template("index.html")
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
```

## `core/models.py`

```python
import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from transformers import pipeline

nlp = spacy.load("en_core_web_sm")
sentiment_pipeline = pipeline("sentiment-analysis")
tfidf_vectorizer = TfidfVectorizer()
```

## `services/nlp_service.py`

```python
from core.models import nlp, sentiment_pipeline, tfidf_vectorizer

def analyze_text(text: str):
    doc = nlp(text)

    tokens = [token.text for token in doc]
    lemmas = [token.lemma_ for token in doc]
    pos_tags = [(token.text, token.pos_) for token in doc]
    dependencies = [(token.text, token.dep_, token.head.text) for token in doc]

    entities = [(ent.text, ent.label_) for ent in doc.ents]
    noun_chunks = [chunk.text for chunk in doc.noun_chunks]

    tfidf_vectorizer.fit([text])
    tfidf_features = tfidf_vectorizer.transform([text]).toarray().tolist()

    sentiment = sentiment_pipeline(text)[0]

    return {
        "tokens": tokens,
        "lemmas": lemmas,
        "pos_tags": pos_tags,
        "dependencies": dependencies,
        "tfidf_features": tfidf_features,
        "sentiment": sentiment,
        "syntax_analysis": {
            "entities": entities,
            "noun_chunks": noun_chunks
        },
        "knowledge_discovery": {
            "named_entities": entities,
            "noun_chunks": noun_chunks
        }
    }
```

## `controllers/analysis_controller.py`

```python
from flask import Blueprint, request, jsonify
from services.nlp_service import analyze_text

bp_analysis = Blueprint("analysis", __name__)

@bp_analysis.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    text = data.get("text")

    if not text:
        return jsonify({"error": "Texto não fornecido"}), 400

    result = analyze_text(text)
    return jsonify(result)
```

## `templates/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NLP Chatbot Analyzer</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container py-5">
    <div class="card shadow-lg">
      <div class="card-body">
        <h1 class="card-title text-center mb-4">🔍 NLP Chatbot Analyzer</h1>
        
        <form id="analyzeForm">
          <div class="mb-3">
            <label for="textInput" class="form-label">Texto para Análise</label>
            <textarea id="textInput" class="form-control" rows="5" placeholder="Digite um texto..."></textarea>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Analisar</button>
          </div>
        </form>

        <div class="mt-4">
          <h5>Resultado:</h5>
          <pre id="output" class="bg-light border p-3 rounded small text-break"></pre>
        </div>
      </div>
    </div>
  </div>

  <script src="/static/script.js"></script>
</body>
</html>
```

---

## `static/style.css`

```css
pre {
  max-height: 400px;
  overflow-y: auto;
}
```

## `static/script.js`

```js
const form = document.getElementById('analyzeForm');
const output = document.getElementById('output');

form.onsubmit = async (e) => {
  e.preventDefault();
  const text = document.getElementById('textInput').value;

  try {
    const response = await fetch('/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      throw new Error("Erro ao processar a solicitação.");
    }

    const result = await response.json();
    output.textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    output.textContent = `Erro: ${error.message}`;
  }
};
```

## Funcionalidades Incluídas

| Funcionalidade                       | Tecnologias Usadas           |
| ------------------------------------ | ---------------------------- |
| Tokenização, lematização, POS        | `spaCy`                      |
| Análise sintática                    | `spaCy`                      |
| Análise de sentimentos               | `transformers` (HuggingFace) |
| TF-IDF (extração de características) | `scikit-learn`               |
| Extração semântica (entidades)       | `spaCy`                      |
| Interface web                        | `Flask + HTML + JS`          |
