# Semana 16: Atividade Integrada Parte 3 — Machine Learning na Nuvem com AWS SageMaker (Projeto 10)

## 1. Visão Geral & Objetivos
Introduzir a Inteligência Artificial e o Aprendizado de Máquina (Machine Learning) na nuvem. Utilizar o **AWS SageMaker** para consumir o histórico de dados de sensores coletados no Amazon S3, treinar um modelo preditivo (detecção de falhas/anomalias industriais) e disponibilizar um endpoint de predição.

---

## 2. Conteúdo Teórico

### 2.1 Machine Learning na Nuvem (AWS SageMaker)
- **Visão Geral do AWS SageMaker:** Plataforma totalmente gerenciada para todo o ciclo de vida de ML (preparação de dados, treinamento, ajuste de hiperparâmetros e implantação).
- **SageMaker Notebook Instances:** Ambientes Jupyter Notebook integrados ao ecossistema AWS.
- **Tipos de Algoritmos na Manufatura:**
  - **Classificação / Detecção de Anomalias:** Identificação de padrões anômalos em dados vibracionais e térmicos.
  - **Regressão:** Estimativa do Tempo Restante de Vida Útil (RUL - Remaining Useful Life) de componentes mecânicos.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Atividade Integrada - Etapa 3 / Projeto 10)
1. Criar uma instância de notebook no AWS SageMaker utilizando a `LabRole`.
2. Abrir o ambiente JupyterLab e carregar o dataset em formato CSV armazenado no Amazon S3 (gerado na Semana 14).
3. Executar o pré-processamento dos dados (limpeza, normalização e separação em treino/teste).
4. Treinar um modelo de classificação (ex: Random Forest ou XGBoost) para identificar falhas iminentes nos motores da fábrica Smart N1.
5. Implantar o modelo treinado em um Endpoint Serverless no SageMaker e testar requisições de predição com dados em tempo real enviados pela aplicação.

---

## 4. Exercícios de Fixação
1. Qual o benefício de utilizar um serviço gerenciado como o AWS SageMaker em comparação ao treinamento local de modelos de Machine Learning?
2. Como a integração entre S3, SageMaker e a aplicação de monitoramento permite implementar estratégias de manutenção preditiva em plantas industriais?
