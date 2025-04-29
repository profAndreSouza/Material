# Aula 1 — Introdução à Estatística para Ciência de Dados

---

## Objetivos da Aula
- Compreender o conceito de estatística e sua importância para ciência de dados.
- Diferenciar estatística descritiva e inferencial.
- Identificar e aplicar técnicas básicas de amostragem.
- Simular processos de amostragem para fixar o conhecimento.

---

## Introdução: O que é Estatística?

### Conceito Geral
- **Estatística** é a ciência que coleta, organiza, resume, analisa e interpreta dados para apoiar a tomada de decisão.
- Usada em diversas áreas: negócios, engenharia, saúde, tecnologia e ciências sociais.

### Tipos de Estatística
- **Descritiva**: resume os dados de maneira simples, utilizando tabelas, gráficos e medidas (ex: média, mediana, moda).
- **Inferencial**: usa amostras para fazer generalizações sobre a população inteira, envolvendo margem de erro, teste de hipóteses, intervalos de confiança.

> **Exemplo rápido:**  
> Estudar 500 clientes para inferir a opinião de 50.000 clientes de uma empresa.

---

## Tipos de Amostragem

Amostragem é o processo de selecionar uma parte da população para análise.

### 1. Amostragem Aleatória
- Cada elemento tem **probabilidade igual** de ser escolhido.
- **Exemplo**: Sorteio aleatório de nomes para uma pesquisa.

### 2. Amostragem Aleatória Simples
- Um subconjunto é retirado diretamente da população sem agrupamentos ou estratificações.
- Técnicas:
  - Sorteio físico (papelzinhos, roleta).
  - Sorteio computacional (ex: `random.sample` em Python).

### 3. Amostragem Sistemática
- Selecione um ponto de partida aleatório e depois escolha cada `n`-ésimo elemento.
- Útil para listas ordenadas.
- **Exemplo**: Num cadastro de clientes, selecionar um cliente a cada 10 registros.

### 4. Amostragem Estratificada
- A população é dividida em **estratos** homogêneos (ex: faixa etária, sexo, região) e então é feita uma amostra aleatória dentro de cada grupo.
- Garante melhor representatividade da diversidade.

---

## Pensamento Estatístico

**Processo de raciocínio**:
1. **Coleta de dados** (Quem? O quê? Quando? Onde? Como?).
2. **Organização dos dados** (Tabelas, gráficos, categorias).
3. **Análise** (estatísticas descritivas e inferência).
4. **Interpretação** (Conclusões práticas).

---

## Projeto Prático: Simulador de Amostragem

**Objetivo**:  
Entender de forma prática os conceitos de amostragem aplicados em ciência de dados.

**Descrição**:  
- Criar uma base fictícia com **100 clientes** nomeados como "Cliente 1", "Cliente 2", ..., "Cliente 100".
- Realizar:
  - **Amostragem Aleatória Simples**: Sorteio de 10 clientes.
  - **Amostragem Sistemática**: Escolher 1 a cada 10 clientes, iniciando em posição aleatória.
  - **Amostragem Estratificada**: Dividir em dois grupos (por exemplo, "Clientes pares" e "Clientes ímpares") e sortear proporcionalmente.

**Ferramentas**:
- Python 3.x
- Biblioteca: `random`

**Código Exemplo (Rascunho básico para Amostragem Aleatória Simples)**:
```python
import random

clientes = [f"Cliente {i}" for i in range(1, 101)]
amostra_simples = random.sample(clientes, 10)

print("Amostra Aleatória Simples:", amostra_simples)
```

---

## Exercícios Extras

**Conceituais:**
1. Defina estatística descritiva e inferencial com exemplos práticos do dia a dia.
2. Explique a diferença entre amostragem aleatória simples e amostragem estratificada.
3. Cite duas situações reais onde seria preferível usar amostragem sistemática.

**Práticos:**
4. Simule, em papel, uma amostragem aleatória simples de 5 elementos de uma população de 20 pessoas.
5. Escreva um pequeno código Python que:
   - Crie uma lista de 50 elementos.
   - Realize uma amostragem sistemática para escolher 5 elementos.
6. Imagine uma pesquisa de opinião em uma cidade sobre novos aplicativos de transporte. 
   - Como você faria uma amostragem estratificada por idade?

**Reflexivos:**
7. Por que é importante garantir que a amostra seja representativa da população?
8. Quais os riscos de utilizar uma amostra mal selecionada na tomada de decisão?

---

# Materiais de Estudo Complementares:
- **BARBETTA, Pedro Alberto et al.** Estatística: para cursos de engenharia e informática.
- **BONAFINI, Fernanda César (org.)** Estatística.
- **SILVA, Rodolfo dos Santos** Estatística aplicada.

---

# Conclusão da Aula
- Estatística é uma ferramenta fundamental na análise de dados.
- A qualidade de uma análise depende de como os dados foram coletados e organizados.
- Amostragem correta é essencial para gerar resultados confiáveis em ciência de dados.

