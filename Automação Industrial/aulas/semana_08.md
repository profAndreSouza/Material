# Aula 07: Ciclo CRISP-DM Aplicado a Séries Temporais Industriais

## 1. Visão Geral & Objetivos Didáticos

Esta aula faz a ponte direta com a disciplina de **Ciência de Dados**, aplicando o ciclo metodológico **CRISP-DM** (*Cross-Industry Standard Process for Data Mining*) sobre os dados não relacionais de séries temporais armazenados no InfluxDB.

---

## 2. Escopo Sintético do Conteúdo Teórico

- Fases do ciclo CRISP-DM no contexto industrial:
  1. *Business Understanding*: Definição do problema operacional e custos de paradas não planejadas.
  2. *Data Understanding*: Extração de séries temporais do InfluxDB via Python (`influxdb-client`).
  3. *Data Preparation*: Resampling, alinhamento temporal, tratamento de lacunas (*missing data*) e engenharia de recursos com janelas deslizantes (*rolling features*).
- Formatação de conjuntos de dados para alimentar pipelines de Aprendizado de Máquina.

---

## 3. Atividade / Prática IIoT & Data Science (A ser desenvolvida na respectiva semana)

- Conexão de um Jupyter Notebook em Python ao InfluxDB da fábrica.
- Extração de dados brutos e pré-processamento de séries temporais usando a biblioteca Pandas.
