# Aula 09: Machine Learning em Telemetria: Manutenção Preditiva & OEE

## 1. Visão Geral & Objetivos Didáticos

Esta aula foca na aplicação de algoritmos de **Aprendizado Supervisionado** para predição de vida útil restante (**RUL - Remaining Useful Life**) e cálculo automatizado em tempo real do indicador **OEE (Overall Equipment Effectiveness)**.

---

## 2. Escopo Sintético do Conteúdo Teórico

- Estratégias de Manutenção: Corretiva, Preventiva vs **Preditiva (PdM)**.
- Algoritmos supervisionados para classificação/regressão de falhas (Random Forest, XGBoost).
- Cálculo dos três pilares do **OEE**:
  - **Disponibilidade (Availability):** Tempo rodando / Tempo planejado.
  - **Desempenho (Performance):** Velocidade real / Velocidade nominal.
  - **Qualidade (Quality):** Peças boas / Total de peças produzidas.
- Integração dos resultados com os conceitos de Ciência de Dados e retorno sobre investimento (ROI).

---

## 3. Atividade / Prática IIoT & ML (A ser desenvolvida na respectiva semana)

- Criação de um pipeline de cálculo de OEE a partir dos eventos de sensores de passagem e tempo de ciclo.
- Treinamento e teste de modelo de classificação para identificação da causa raiz de paradas da máquina.
