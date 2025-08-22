# Introdução à Aprendizagem de Máquina

## Objetivos da Aula

* Entender o que é Aprendizado de Máquina (Machine Learning – ML).
* Diferenciar tipos de aprendizado: supervisionado, não supervisionado e por reforço.
* Reconhecer aplicações reais de ML no dia a dia.


## O que é Aprendizado de Máquina?

Aprendizado de Máquina (ML) é um ramo da Inteligência Artificial que estuda métodos computacionais capazes de **extrair conhecimento a partir de dados**.

Segundo **Faceli et al. (2011)**, o objetivo do ML é desenvolver algoritmos que:

* **Recebem dados de entrada** (experiência passada);
* **Constroem modelos** que representam padrões ou relações escondidas nesses dados;
* **Melhoram seu desempenho** em uma tarefa conforme recebem mais exemplos.

Ou seja, em vez de programarmos **regras fixas**, deixamos o sistema **aprender regras e padrões automaticamente** a partir da experiência.

### Exemplo prático 1 — Classificação de e-mails

* **Problema:** identificar se um e-mail é **spam** ou **não spam**.
* **Abordagem tradicional:** programador escreve várias regras: “se tiver ‘ganhe dinheiro rápido’ → spam”.
* **Abordagem com ML:** o sistema analisa milhares de e-mails rotulados e **aprende padrões estatísticos** (ex.: frequência de certas palavras, presença de links suspeitos).

Resultado: o modelo consegue classificar novos e-mails, mesmo que contenham expressões que nunca foram vistas antes, porque **generalizou** a partir dos dados.

### Exemplo prático 2 — Previsão de preços de imóveis

* **Entrada (dados):** tamanho da casa, localização, número de quartos.
* **Saída esperada:** preço do imóvel.
* **Aprendizado supervisionado:** treinamos um modelo com exemplos de casas já vendidas e seus preços.
* **Aplicação:** prever o valor de uma casa nova com base em suas características.

### Exemplo prático 3 — Reconhecimento de voz

* **Entrada:** sinal de áudio da fala de uma pessoa.
* **Saída esperada:** texto transcrito (“bom dia”, “quero ouvir música”).
* **Aprendizado:** o sistema é treinado com milhares de pares **(áudio, transcrição)**.
* **Aplicação:** assistentes como **Siri, Google Assistant, Alexa** que convertem fala em comandos de ação.

### Características Importantes do ML

1. **Generalização:** capacidade de aplicar o que foi aprendido a **novos exemplos nunca vistos**.

   * Exemplo: reconhecer a imagem de um gato, mesmo que a foto tenha um fundo diferente das usadas no treino.
2. **Dependência dos dados:** quanto mais dados de qualidade, melhor tende a ser o aprendizado.

   * Exemplo: prever melhor notas dos alunos se tivermos histórico de muitos anos, não apenas de uma turma pequena.
3. **Melhoria com a experiência:** o modelo pode ser atualizado conforme novos dados chegam.

   * Exemplo: sistema de recomendação da Netflix melhora à medida que o usuário assiste mais filmes.


> Enquanto a programação tradicional depende de **regras explícitas criadas por humanos**, o Aprendizado de Máquina cria **modelos matemáticos** a partir de dados, permitindo que o computador **descubra padrões e tome decisões** de forma autônoma.


## Tipos de Aprendizado

O Aprendizado de Máquina pode ser dividido em diferentes **paradigmas**, de acordo com a forma como os dados são apresentados ao algoritmo e como o conhecimento é adquirido.


### 1. **Aprendizado Supervisionado**

* O modelo é treinado com **dados rotulados** (ou seja, cada entrada já possui uma saída esperada).
* O objetivo é aprender uma **função que mapeie entradas em saídas**, de modo que consiga generalizar para novos exemplos.

**Exemplos práticos:**

* **Previsão de preços de imóveis:**

  * Entrada: tamanho, localização, número de quartos.
  * Saída: preço do imóvel.
* **Diagnóstico médico assistido:**

  * Entrada: sintomas e exames.
  * Saída: diagnóstico (positivo/negativo).
* **Reconhecimento de imagens:**

  * Entrada: foto de um animal.
  * Saída: “gato” ou “cachorro”.

Esse tipo de aprendizado é o mais utilizado na prática (regressão, classificação, etc.).


### 2. **Aprendizado Não Supervisionado**

* Os dados **não possuem rótulos** (apenas entradas).
* O objetivo é descobrir **estruturas ocultas** nos dados, como agrupamentos ou padrões.

**Exemplos práticos:**

* **Segmentação de clientes (clustering):** dividir clientes em grupos com base em comportamento de compra.
* **Análise de cestas de mercado:** identificar produtos frequentemente comprados juntos (ex.: pão + manteiga).
* **Compressão de imagens (PCA):** reduzir dimensionalidade mantendo informações relevantes.

É útil em situações de **exploração e descoberta de conhecimento**, quando não há saídas esperadas previamente.


### 3. **Aprendizado por Reforço**

* O agente aprende **interagindo com um ambiente**, recebendo **recompensas (feedback positivo)** ou **punições (feedback negativo)**.
* O objetivo é encontrar uma **política ótima de ações** que maximize as recompensas ao longo do tempo.

**Exemplos práticos:**

* **Jogos (xadrez, Go, Atari):** algoritmos aprendem a jogar sozinhos, melhorando a cada partida.
* **Robótica:** um robô que aprende a andar ou manipular objetos tentando várias estratégias.
* **Sistemas de recomendação adaptativos:** que ajustam sugestões de conteúdo com base nas escolhas do usuário.

É bastante usado em **controle, robótica e games**, onde o ambiente é dinâmico.

**Resumo comparativo:**

| Tipo               | Dados de Treino         | Objetivo Principal                        | Exemplo                             |
| ------------------ | ----------------------- | ----------------------------------------- | ----------------------------------- |
| Supervisionado     | Dados **rotulados**     | Prever saídas a partir de entradas        | Preço de casas, diagnóstico médico  |
| Não Supervisionado | Dados **não rotulados** | Descobrir padrões ou agrupamentos ocultos | Segmentação de clientes, PCA        |
| Reforço            | Interação com ambiente  | Maximizar recompensas ao longo do tempo   | Robôs, jogos, controle de processos |


## Aplicações Reais

* Recomendação de filmes e músicas (Netflix, Spotify).
* Diagnóstico médico assistido por IA.
* Detecção de fraudes em transações bancárias.
* Carros autônomos.
* Reconhecimento de voz (assistentes virtuais).

## Prática no Colab (Python)

Arquivo (Colab)[https://colab.research.google.com/drive/15YVb9Wxfy40IIRlHPDER9lFbuET2X1QG]

```python


import math
import random
import numpy as np
import matplotlib.pyplot as plt

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

def sigmoid_deriv(x):
    return x * (1 - x)

def normalizar_idade(idade):
    return (idade - 18) / (80 - 18)

idades = [i for i in range(18, 81)]
seguros = [(i - 50)**2 + 200 + random.uniform(-50, 50) for i in idades]

plt.scatter(idades, seguros, color="blue")
plt.title("Valor do Seguro por Idade")
plt.show()

# Normalizar a entrada e a saída
X = [[normalizar_idade(i)] for i in idades]
y = [[(s - min(seguros)) / (max(seguros) - min(seguros))] for s in seguros]

# Inicialização da rede

input_neurons = 1     # idade
hidden_neurons = 5    # 5 neurônios na camada oculta
output_neurons = 1    # valor previsto

# Pesos e bias aleatórios
w_input_hidden = [[random.uniform(-1, 1) for _ in range(hidden_neurons)] for _ in range(input_neurons)]
w_hidden_output = [[random.uniform(-1, 1)] for _ in range(hidden_neurons)]

bias_hidden = [random.uniform(-1, 1) for _ in range(hidden_neurons)]
bias_output = [random.uniform(-1, 1) for _ in range(output_neurons)]

## PRÓXIMA AULA CONTINUAMOS DAQUI

# Taxa de aprendizado
lr = 0.1
epoch = 5000

# Treinamento

for epoch in range(epoch):  # número de épocas
    total_error = 0
    for i in range(len(X)):
        # Forward pass ----------------
        entrada = X[i]

        # Camada oculta
        hidden_input = [0] * hidden_neurons
        hidden_output = [0] * hidden_neurons
        for j in range(hidden_neurons):
            hidden_input[j] = sum(entrada[k] * w_input_hidden[k][j] for k in range(input_neurons)) + bias_hidden[j]
            hidden_output[j] = sigmoid(hidden_input[j])

        # Camada de saída
        final_input = [0] * output_neurons
        final_output = [0] * output_neurons
        for j in range(output_neurons):
            final_input[j] = sum(hidden_output[k] * w_hidden_output[k][j] for k in range(hidden_neurons)) + bias_output[j]
            final_output[j] = sigmoid(final_input[j])

        # Calcular erro ----------------
        erro = [y[i][j] - final_output[j] for j in range(output_neurons)]
        total_error += sum(e**2 for e in erro)

        # Backpropagation --------------
        # Saída -> oculto
        d_output = [erro[j] * sigmoid_deriv(final_output[j]) for j in range(output_neurons)]

        # Oculto -> entrada
        d_hidden = [0] * hidden_neurons
        for j in range(hidden_neurons):
            d_hidden[j] = sum(d_output[k] * w_hidden_output[j][k] for k in range(output_neurons)) * sigmoid_deriv(hidden_output[j])

        # Atualizar pesos saída -> oculto
        for j in range(hidden_neurons):
            for k in range(output_neurons):
                w_hidden_output[j][k] += lr * d_output[k] * hidden_output[j]

        for j in range(output_neurons):
            bias_output[j] += lr * d_output[j]

        # Atualizar pesos entrada -> oculto
        for j in range(input_neurons):
            for k in range(hidden_neurons):
                w_input_hidden[j][k] += lr * d_hidden[k] * entrada[j]

        for j in range(hidden_neurons):
            bias_hidden[j] += lr * d_hidden[j]

    # Mostrar erro a cada 500 épocas
    if epoch % 500 == 0:
        print(f"Época {epoch}, Erro Total: {total_error:.4f}")

# Teste da rede

def prever(idade):
    entrada = [normalizar_idade(idade)]

    # Camada oculta
    hidden_output = [0] * hidden_neurons
    for j in range(hidden_neurons):
        soma = sum(entrada[k] * w_input_hidden[k][j] for k in range(input_neurons)) + bias_hidden[j]
        hidden_output[j] = sigmoid(soma)

    # Camada saída
    final_output = [0] * output_neurons
    for j in range(output_neurons):
        soma = sum(hidden_output[k] * w_hidden_output[k][j] for k in range(hidden_neurons)) + bias_output[j]
        final_output[j] = sigmoid(soma)

    # Desnormalizar saída
    return final_output[0] * (max(seguros) - min(seguros)) + min(seguros)

# Testando previsões
for idade in [18, 30, 50, 70, 80]:
    print(f"Idade: {idade}, Seguro Previsto: {prever(idade):.2f}")

# Dataset ideal (sem ruído)
seguros_ideal = [(i - 50)**2 + 200 for i in idades]

# Idades para previsão (menos pontos)
idades_prev = list(range(18, 81, 5))
seguros_previstos = [prever(i) for i in idades_prev]

# Curva suave da rede neural
idades_suave = np.linspace(18, 80, 300)
seguros_suave = [prever(i) for i in idades_suave]

# Criar figura e subplots 2x2
fig, axs = plt.subplots(2, 2, figsize=(12, 10))

# Gráfico 1: apenas pontos azuis do dataset original
axs[0, 0].scatter(idades, seguros, color='blue')
axs[0, 0].set_title("Dataset Original (com ruído)")
axs[0, 0].set_xlabel("Idade")
axs[0, 0].set_ylabel("Valor do Seguro")
axs[0, 0].grid(True)

# Gráfico 2: dataset ideal e curva vermelha sobreposta
axs[0, 1].scatter(idades, seguros_ideal, color='orange', label='Dataset Ideal')
axs[0, 1].plot(idades_suave, seguros_suave, color='red', linewidth=2, label='Curva Rede Neural')
axs[0, 1].set_title("Dataset Ideal + Curva Rede Neural")
axs[0, 1].set_xlabel("Idade")
axs[0, 1].set_ylabel("Valor do Seguro")
axs[0, 1].legend()
axs[0, 1].grid(True)

# Gráfico 3: curva vermelha e dados previstos (poucas idades)
axs[1, 0].plot(idades_suave, seguros_suave, color='red', linewidth=2, label='Curva Rede Neural')
axs[1, 0].scatter(idades_prev, seguros_previstos, color='green', label='Valores Previsto')
axs[1, 0].set_title("Curva Rede Neural + Previsões")
axs[1, 0].set_xlabel("Idade")
axs[1, 0].set_ylabel("Valor do Seguro")
axs[1, 0].legend()
axs[1, 0].grid(True)

# Gráfico 4: dataset original e pontos previstos
axs[1, 1].scatter(idades, seguros, color='blue', label='Dataset Original')
axs[1, 1].scatter(idades_prev, seguros_previstos, color='green', label='Valores Previsto')
axs[1, 1].set_title("Dataset Original + Previsões")
axs[1, 1].set_xlabel("Idade")
axs[1, 1].set_ylabel("Valor do Seguro")
axs[1, 1].legend()
axs[1, 1].grid(True)

plt.tight_layout()
plt.show()

```



## Para Estudar em Casa

* Capítulo 1 do livro **“Inteligência Artificial: Uma Abordagem de Aprendizado de Máquina” (Faceli et al.)**.
* Vídeo introdutório recomendado: *“What is Machine Learning?”* (Google Developers).
