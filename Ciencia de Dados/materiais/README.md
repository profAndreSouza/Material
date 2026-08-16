# Guia de Conjuntos de Dados para Laboratórios Práticos de Ciência de Dados

Este repositório contém **10 conjuntos de dados (datasets)** em formato CSV, desenvolvidos e disponibilizados para apoiar os exercícios práticos, estudos de caso e projetos da disciplina de Ciência de Dados, cobrindo o ciclo completo da metodologia **CRISP-DM** (*Cross-Industry Standard Process for Data Mining*).

---

## Sumário dos Datasets

| # | Arquivo CSV | Origem / Tipo | Problema de ML | Domínio de Aplicação |
|---|---|---|---|---|
| 1 | `CRISP_DM_Random_Forest_Credito.csv` | Sintético | Classificação Binária | Finanças & Análise de Crédito |
| 2 | `CRISP_DM_Random_Forest_Telecom_Churn.csv` | Sintético | Classificação Binária | Telecomunicações & Retenção |
| 3 | `CRISP_DM_Random_Forest_Fraude_Ecommerce.csv` | Sintético | Classificação Binária | E-Commerce & Segurança |
| 4 | `CRISP_DM_Random_Forest_Saude_Reinternacao.csv` | Sintético | Classificação Binária | Saúde & Gestão Hospitalar |
| 5 | `CRISP_DM_Random_Forest_Manutencao_Preditiva.csv` | Sintético | Classificação Binária | Indústria 4.0 & Internet das Coisas (IIoT) |
| 6 | `CRISP_DM_Random_Forest_Usinagem_Qualidade.csv` | Sintético | Classificação Binária | Manufatura Metalmecânica & Usinagem CNC |
| 7 | `Dataset_Cancer_Mama_Wisconsin.csv` | Baixado (UCI ML) | Classificação Binária | Diagnóstico Médico & Biotecnologia |
| 8 | `Dataset_Diabetes_Progressao.csv` | Baixado (Scikit-Learn) | Regressão | Saúde & Análise Epidemiológica |
| 9 | `Dataset_Vinhos_Classificacao.csv` | Baixado (UCI ML) | Classificação Multiclasse | Agroindústria & Enologia |
| 10 | `Dataset_Iris_Flores.csv` | Baixado (UCI ML) | Classificação Multiclasse | Botânica & Benchmark de ML |

---

## Datasets Sintéticos para Exercícios CRISP-DM

Os conjuntos de dados a seguir foram construídos com simulações realistas de processos operacionais e de negócio. Eles foram projetados para que o estudante vivencie todas as fases do CRISP-DM, desde o **Business Understanding** até a **Implantação**, exigindo uma fase dedicada de **Data Understanding** e **Data Preparation** (limpeza, engenharia de atributos e tratamento antes do treinamento de modelos).

### 1. Análise de Risco de Crédito em Fintech
* **Arquivo**: [`CRISP_DM_Random_Forest_Credito.csv`](CRISP_DM_Random_Forest_Credito.csv)
* **Origem**: Gerado de Forma Sintética (Simulação Financeira)
* **Contexto de Negócio**: Uma fintech de crédito pessoal online deseja automatizar a análise de propostas de empréstimo. O objetivo é identificar o perfil do proponente para prever o risco de inadimplência (`inadimplente`), permitindo maximizar a aprovação de bons pagadores e reduzir perdas financeiras por calote.

### 2. Retenção de Clientes (Churn Telecom & Streaming)
* **Arquivo**: [`CRISP_DM_Random_Forest_Telecom_Churn.csv`](CRISP_DM_Random_Forest_Telecom_Churn.csv)
* **Origem**: Gerado de Forma Sintética (Simulação Telecom)
* **Contexto de Negócio**: Uma operadora de telecomunicações e serviços digitais busca reduzir a taxa de cancelamento de assinaturas (*Churn*). Com base no histórico de uso de dados, tipo de contrato, chamadas ao suporte e cobranças, o modelo deve prever a decisão de cancelamento do plano (`cancelou_plano`) para direcionar campanhas preventivas de retenção.

### 3. Detecção de Fraudes em E-Commerce
* **Arquivo**: [`CRISP_DM_Random_Forest_Fraude_Ecommerce.csv`](CRISP_DM_Random_Forest_Fraude_Ecommerce.csv)
* **Origem**: Gerado de Forma Sintética (Simulação E-Commerce)
* **Contexto de Negócio**: Uma plataforma de varejo online precisa identificar transações fraudulentas em tempo real antes de aprovar os pagamentos. Utilizando variáveis comportamentais da sessão, valores solicitados e dados cadastrais, o desafio é prever transações suspeitas (`transacao_fraudulenta`) sem impactar a experiência de compra dos clientes legítimos.

### 4. Risco de Reinternação Hospitalar em 30 Dias
* **Arquivo**: [`CRISP_DM_Random_Forest_Saude_Reinternacao.csv`](CRISP_DM_Random_Forest_Saude_Reinternacao.csv)
* **Origem**: Gerado de Forma Sintética (Simulação Hospitalar)
* **Contexto de Negócio**: Um hospital de alta complexidade deseja acompanhar pacientes que receberam alta para prevenir complicações e retornos não planejados. A meta é analisar indicadores clínicos e tempo de internação prévia para prever a necessidade de reinternação dentro de 30 dias (`reinternado_30d`), permitindo planejar o acompanhamento pós-alta.

### 5. Manutenção Preditiva em Equipamentos Industriais (IIoT)
* **Arquivo**: [`CRISP_DM_Random_Forest_Manutencao_Preditiva.csv`](CRISP_DM_Random_Forest_Manutencao_Preditiva.csv)
* **Origem**: Gerado de Forma Sintética (Simulação Industrial IIoT)
* **Contexto de Negócio**: Uma planta industrial equipada com sensores IoT monitora o funcionamento de suas máquinas em tempo real. A equipe de engenharia precisa antecipar a ocorrência de falhas graves (`falha_maquina`) a partir de dados de vibração, temperatura, pressão e histórico operacional, evitando paradas não programadas na linha de produção.

### 6. Controle de Qualidade em Usinagem Mecânica (CNCs, Robôs e CLPs)
* **Arquivo**: [`CRISP_DM_Random_Forest_Usinagem_Qualidade.csv`](CRISP_DM_Random_Forest_Usinagem_Qualidade.csv)
* **Origem**: Gerado de Forma Sintética (Simulação Usinagem Metalmecânica)
* **Contexto de Negócio**: Uma fábrica de peças usinadas opera células flexíveis com tornos CNC, fresadoras, robôs articulados e CLPs de automação. Para reduzir o refugo e garantir a conformidade dimensional das peças, o objetivo é analisar parâmetros de usinagem (como avanço, rotação e desgaste de ferramenta) e identificar a ocorrência de peças fora da especificação (`peca_defeituosa`).

---

## Datasets Públicos de Referência (Benchmarks)

Os conjuntos de dados abaixo são referências clássicas na literatura científica de Machine Learning e Ciência de Dados. Eles foram baixados e convertidos para CSV de fácil acesso.

### 7. Diagnóstico de Câncer de Mama (Wisconsin Diagnostic Breast Cancer)
* **Arquivo**: [`Dataset_Cancer_Mama_Wisconsin.csv`](Dataset_Cancer_Mama_Wisconsin.csv)
* **Origem**: Baixado (UCI Machine Learning Repository / Scikit-Learn)
* **Contexto de Negócio / Científico**: Amostras obtidas a partir de aspirados por agulha fina de massas mamárias. As características medem propriedades numéricas dos núcleos celulares presentes em imagens digitalizadas (raio, textura, perímetro, área, suavidade, etc.). O objetivo é classificar se o tumor é benigno ou maligno.
* **Créditos**: *Dr. William H. Wolberg, W. Nick Street e Olvi L. Mangasarian (University of Wisconsin, 1995)*.

### 8. Progressão do Diabetes
* **Arquivo**: [`Dataset_Diabetes_Progressao.csv`](Dataset_Diabetes_Progressao.csv)
* **Origem**: Baixado (Scikit-Learn / Stanford University)
* **Contexto de Negócio / Científico**: Dataset composto por dados de 442 pacientes diabéticos. Contém variáveis fisiológicas e exames de sangue padronizados. O objetivo é construir um modelo de regressão para prever a medida quantitativa da progressão da doença um ano após o exame baseline.
* **Créditos**: *Bradley Efron, Trevor Hastie, Iain Johnstone e Robert Tibshirani (2004) - "Least Angle Regression", Annals of Statistics*.

### 9. Reconhecimento de Cultivares de Vinho (Wine Dataset)
* **Arquivo**: [`Dataset_Vinhos_Classificacao.csv`](Dataset_Vinhos_Classificacao.csv)
* **Origem**: Baixado (UCI Machine Learning Repository)
* **Contexto de Negócio / Científico**: Análise química de vinhos produzidos na mesma região da Itália, mas provenientes de três cultivares diferentes. A análise determina o teor de 13 constituintes (álcool, ácido málico, cinzas, alcalinidade, flavonoides, proantocianinas, intensidade de cor, etc.), servindo para a classificação multiclasse do vinho.
* **Créditos**: *Stefan Aeberhard, M. Forina et al. - Institute of Pharmaceutical and Food Analysis and Technologies, Genoa, Italy (1991)*.

### 10. Classificação de Flores Íris (Fisher's Iris Benchmark)
* **Arquivo**: [`Dataset_Iris_Flores.csv`](Dataset_Iris_Flores.csv)
* **Origem**: Baixado (UCI Machine Learning Repository / Edgar Anderson)
* **Contexto de Negócio / Científico**: O conjunto de dados botânico mais famoso da história da estatística e Machine Learning. Contém medições em centímetros do comprimento e largura das sépalas e pétalas de 50 flores de 3 espécies de íris (*Iris setosa*, *Iris virginica* e *Iris versicolor*).
* **Créditos**: *Ronald A. Fisher (1936) - "The use of multiple measurements in taxonomic problems" / Edgar Anderson*.

---

> **Nota para os Estudantes**: Durante as aulas e laboratórios, cabe a você aplicar o método científico e as técnicas de exploração estatística (EDA) para inspecionar a qualidade de cada dataset, identificar eventuais inconsistências ou desafios operacionais, realizar a limpeza adequada dos dados e avaliar a performance dos seus modelos preditivos. Boa análise!
