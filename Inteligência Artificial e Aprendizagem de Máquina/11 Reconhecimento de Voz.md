# Reconhecimento de Voz

## Objetivos da Aula

- Compreender os fundamentos do Reconhecimento Automático de Fala (ASR – Automatic Speech Recognition)
- Explorar os componentes e desafios do pipeline de reconhecimento de voz
- Implementar soluções práticas usando bibliotecas Python
- Integrar entrada de voz em sistemas de Processamento de Linguagem Natural


## 1. Introdução ao Reconhecimento de Voz

O **Reconhecimento de Voz** consiste na conversão da fala humana em texto por meio de algoritmos computacionais. É um campo multidisciplinar, que envolve:

- Processamento de sinais de áudio
- Modelagem estatística e redes neurais
- Linguística computacional
- PLN (Processamento de Linguagem Natural)

O ASR é amplamente utilizado em assistentes virtuais (como Alexa, Siri), legendagem automática, sistemas embarcados, transcrição de reuniões, entre outros.


## 2. Etapas do Processo de Reconhecimento

1. **Captação de Áudio**
   - Uso de microfones, arquivos `.wav`, `.mp3`, streaming
2. **Pré-processamento**
   - Remoção de ruídos
   - Normalização de volume
   - Conversão de taxa de amostragem
3. **Extração de Características**
   - MFCC (Mel-frequency cepstral coefficients)
   - Spectrogramas
4. **Modelagem Acústica**
   - Mapeia características acústicas → fonemas
   - Uso de HMM, RNNs, CNNs, Transformers
5. **Modelagem de Linguagem**
   - Estima a probabilidade de sequências de palavras
   - Importante para corrigir ambiguidade
6. **Decodificação**
   - Combina os modelos para prever a sequência textual mais provável


## 3. Bibliotecas e APIs para Reconhecimento de Voz

### Bibliotecas em Python

- `speech_recognition`: interface simples para diversos motores (Google, Sphinx)
- `vosk`: reconhecimento offline com modelos leves
- `transformers` (Hugging Face): modelos como Wav2Vec2
- `pydub` ou `librosa`: manipulação de áudio


## 4. Exemplo 1 – Reconhecimento com speech_recognition

```python
import speech_recognition as sr

# Inicializa o reconhecedor
r = sr.Recognizer()

# Usa um arquivo de áudio WAV (mono, 16kHz)
with sr.AudioFile("exemplo.wav") as source:
    audio = r.record(source)

# Reconhecimento usando a API do Google
texto = r.recognize_google(audio, language="pt-BR")
print("Texto reconhecido:", texto)
```

> Observação: a API do Google requer conexão com a internet.


## 5. Exemplo 2 – Reconhecimento Offline com VOSK

```python
!pip install vosk

from vosk import Model, KaldiRecognizer
import wave
import json

# Carregar modelo para português (baixe de https://alphacephei.com/vosk/models)
modelo = Model("model_pt")
wf = wave.open("exemplo.wav", "rb")
rec = KaldiRecognizer(modelo, wf.getframerate())

texto_final = ""
while True:
    dados = wf.readframes(4000)
    if len(dados) == 0:
        break
    if rec.AcceptWaveform(dados):
        resultado = json.loads(rec.Result())
        texto_final += resultado.get("text", "") + " "

print("Texto reconhecido:", texto_final.strip())
```


## 6. Exemplo 3 – Reconhecimento com Hugging Face (Wav2Vec2)

```python
from transformers import pipeline

# Pipeline de reconhecimento automático de fala
asr = pipeline("automatic-speech-recognition", model="facebook/wav2vec2-large-xlsr-53-portuguese")

# Caminho para o arquivo de áudio
asr("exemplo.wav")['text']
```

> Requer arquivos WAV com taxa de amostragem adequada (16kHz, mono).


## 7. Desafios do Reconhecimento de Voz

* **Ambientes ruidosos**
* **Variedade de sotaques e entonações**
* **Palavras homônimas e ambiguidades**
* **Limitações em tempo real (latência e memória)**


## 8. Atividades Propostas

1. Grave sua própria voz utilizando o microfone do Colab ou outro dispositivo
2. Aplique as bibliotecas `speech_recognition` e `vosk` para transcrever o áudio
3. Realize uma análise de sentimentos sobre o texto transcrito
4. Experimente erros propositais de pronúncia e verifique o impacto
5. Integre o reconhecimento de voz com um chatbot simples


## 9. Leitura e Recursos Complementares

* Jurafsky & Martin. *Speech and Language Processing* (Cap. 9: Speech Recognition)
* Vosk API: [https://alphacephei.com/vosk/](https://alphacephei.com/vosk/)
* Hugging Face: [https://huggingface.co/models?pipeline\_tag=automatic-speech-recognition](https://huggingface.co/models?pipeline_tag=automatic-speech-recognition)
* Google Speech API (usada em `speech_recognition`)
* Dataset: Common Voice ([https://commonvoice.mozilla.org/pt](https://commonvoice.mozilla.org/pt))
---

## 10. Conclusão

O reconhecimento de voz aproxima máquinas da linguagem humana de forma natural. Apesar dos avanços com modelos baseados em aprendizado profundo, ainda há muitos desafios relacionados à variabilidade da fala, ao ruído e à compreensão contextual. Com o domínio das ferramentas apresentadas, é possível integrar a fala ao pipeline de PLN de forma eficaz e interativa.
