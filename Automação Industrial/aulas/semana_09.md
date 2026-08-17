# Aula 08: Machine Learning em Telemetria: Detecção de Anomalias em Sensores

## 1. Visão Geral & Objetivos Didáticos

Esta aula aplica algoritmos de **Aprendizado Não Supervisionado** para a detecção em tempo real de anomalias operacionais e desvios de comportamento em sensores e atuadores da planta **Smart N1**.

---

## 2. Escopo Sintético do Conteúdo Teórico

- Conceito de anomalias em séries temporais (anomalias pontuais, contextuais e de padrão).
- Algoritmos não supervisionados para identificação de outliers:
  - **Isolation Forest**: Isolamento de anomalias por particionamento aleatório de recursos.
  - **K-Means / DBSCAN**: Agrupamento espacial de estados operacionais normais vs anômalos.
- Avaliação de métricas analíticas e geração de alertas antecipados de falha.

---

## 3. Atividade / Prática IIoT & ML (A ser desenvolvida na respectiva semana)

- Treinamento de um modelo de Isolation Forest com Scikit-Learn utilizando telemetria histórica extraída do InfluxDB.
- Implantação de um script de inferência para classificar dados em tempo real vindos do MQTT.
