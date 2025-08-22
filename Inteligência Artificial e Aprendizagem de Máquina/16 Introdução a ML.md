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

```python


```



## Para Estudar em Casa

* Capítulo 1 do livro **“Inteligência Artificial: Uma Abordagem de Aprendizado de Máquina” (Faceli et al.)**.
* Vídeo introdutório recomendado: *“What is Machine Learning?”* (Google Developers).
