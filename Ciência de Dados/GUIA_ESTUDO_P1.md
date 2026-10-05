# Guia de Estudos — Prova Teórico-Prática 1 (P1)
## Unidade Curricular: Ciência de Dados

---

## 1. Informações Gerais da Avaliação

- **Data da Avaliação:** Semana 08
- **Peso na Avaliação Docente:** 50% (correspondente a 27,5% da Nota Final da UC — P1 + P2 = 55%)
- **Conteúdo Cobrado:** Semanas 01 a 07 (Aulas 01 a 05, PII e Aula 06 / Séries Temporais)
- **Formato da Prova:** Prova escrita individual composta por **12 questões** de fundamentação teórica, análise conceitual e interpretação estatística.
- **Tipologia das Questões:**
  - Questões de **Múltipla Escolha** (com cenários industriais e tomada de decisão analítica);
  - Questões de **Correlação de Colunas** (associação de termos estatísticos, fases metodológicas e métricas);
  - Questões **Discursivas Conceituais** (interpretação de métricas de negócio, justificativas metodológicas e análise de fenômenos em séries temporais).
- **Atenção:** **A prova não exige programação em Python, sintaxe de bibliotecas (Pandas/Scikit-Learn) nem escrita/depuração de código.** O foco total é nos conceitos de Ciência de Dados, ciclo metodológico CRISP-DM, estatística descritiva, métricas de avaliação e fundamentos de séries temporais.

---

## 2. Mapa Conceitual dos Conteúdos (Semanas 01 a 07)

### Semana 01 — Metodologia CRISP-DM e Custos Assimétricos de Negócio
- **O Ciclo de Vida CRISP-DM (Cross-Industry Standard Process for Data Mining):**
  - Caráter cíclico e iterativo: aprendizados em fases posteriores frequentemente forçam o retorno a etapas anteriores.
  - As 6 Fases Fundamentais:
    1. *Entendimento do Negócio (Business Understanding):* Definição dos objetivos do projeto sob a perspectiva de negócio, conversão desses objetivos em metas analíticas de ciência de dados e planejamento do projeto.
    2. *Entendimento dos Dados (Data Understanding):* Coleta inicial, familiarização com as fontes, detecção de problemas de qualidade e formulação de primeiras hipóteses.
    3. *Preparação dos Dados (Data Preparation):* Seleção, limpeza, imputação de dados ausentes, construção de variáveis derivadas (feature engineering) e transformação de formatos.
    4. *Modelagem (Modeling):* Seleção de técnicas analíticas e algoritmos, calibração de hiperparâmetros e partição de dados (treino/validação/teste).
    5. *Avaliação (Evaluation):* Avaliação rigorosa para determinar se os modelos atendem aos critérios de sucesso do negócio antes de liberar para implantação.
    6. *Implantação (Deployment):* Integração do modelo nos processos operacionais, monitoramento de desempenho e governança do modelo em produção.
- **Custos Assimétricos de Decisão na Indústria:**
  - Em ambientes fabris, o impacto financeiro de um erro de falso alarme (Falso Positivo) raramente é igual ao de uma falha não detectada (Falso Negativo).
  - Exemplo prático: O custo de uma inspeção preventiva desnecessária (parada de 5 minutos de um operador) é infinitamente menor do que o custo de deixar uma prensa quebrar em operação (parada não planejada de 3 dias com perda de linha e risco humano).

### Semana 02 — Avaliação de Modelos de Classificação e Métricas
- **A Matriz de Confusão:**
  - *Verdadeiro Positivo (VP):* Condição real positiva prevista corretamente como positiva.
  - *Verdadeiro Negativo (VN):* Condição real negativa prevista corretamente como negativa.
  - *Falso Positivo (FP - Erro Tipo I):* Condição real negativa classificada erroneamente como positiva (falso alarme).
  - *Falso Negativo (FN - Erro Tipo II):* Condição real positiva classificada erroneamente como negativa (perda crítica de detecção).
- **Métricas Fundamentais e Seus Contextos de Aplicação:**
  - *Acurácia (Accuracy):* Razão global de acertos: $(VP + VN) / (VP + VN + FP + FN)$. É enganosa quando as classes são fortemente desbalanceadas (ex: 99% de peças boas e 1% de peças defeituosas).
  - *Precisão (Precision):* Proporção de verdadeiros positivos entre todos os classificados como positivos: $VP / (VP + FP)$. Foco: penalizar e minimizar os Falsos Positivos.
  - *Revocação / Sensibilidade (Recall):* Proporção de verdadeiros positivos capturados em relação a todos os casos reais positivos: $VP / (VP + FN)$. Foco: penalizar e minimizar os Falsos Negativos (essencial para manutenção preditiva de falhas graves).
  - *F1-Score:* Média harmônica entre Precisão e Recall: $2 \times (\text{Precision} \times \text{Recall}) / (\text{Precision} + \text{Recall})$. Equilibra os dois objetivos.
  - *Curva ROC e Métrica AUC (Area Under Curve):* Avalia a taxa de verdadeiros positivos versus a taxa de falsos positivos através de diferentes pontos de corte (thresholds). AUC = 1.0 indica separabilidade perfeita; AUC = 0.5 equivale a um classificador aleatório (cara ou coroa).

### Semana 03 — Estatística Descritiva, EDA e Limpeza de Dados
- **Classificação das Variáveis:**
  - *Qualitativas (Categóricas):*
    - Nominais: sem ordem intrínseca (ex: tipo de máquina, lote de fornecedor, cor).
    - Ordinais: com hierarquia ou ordenação natural (ex: nível de risco baixo/médio/alto, estágio de desgaste 1 a 5).
  - *Quantitativas (Numéricas):*
    - Discretas: contagens inteiras finitas (ex: número de paradas por turno, contagem de peças rejeitadas).
    - Contínuas: mensurações em escala contínua com infinitas frações (ex: temperatura, corrente em ampères, vibração RMS).
- **Medidas de Posição Central:**
  - *Média:* Ponto de equilíbrio numérico; muito sensível a valores discrepantes (*outliers*).
  - *Mediana:* Valor central que divide os dados ordenados em duas metades (50% abaixo, 50% acima); métrica robusta e resistente a extremos.
  - *Moda:* Valor que se repete com maior frequência.
- **Medidas de Dispersão e Variabilidade:**
  - *Amplitude:* Diferença entre o valor máximo e o valor mínimo.
  - *Variância ($s^2$):* Média dos desvios quadráticos em relação à média.
  - *Desvio Padrão ($s$):* Raiz quadrada da variância; expressa a variabilidade na mesma unidade da grandeza original.
  - *Coeficiente de Variação (CV):* Razão entre desvio padrão e média ($s / \bar{x}$), permitindo comparar a dispersão relativa entre variáveis com grandezas distintas.
- **Separatrizes, Quartis e Boxplot:**
  - Primeiro Quartil ($Q_1$ / percentil 25), Segundo Quartil ($Q_2$ / Mediana / percentil 50), Terceiro Quartil ($Q_3$ / percentil 75).
  - Intervalo Interquartil ($IQR = Q_3 - Q_1$): amplitude dos 50% centrais dos dados.
  - Critério de Outliers no Boxplot: Pontos que estão abaixo de $Q_1 - 1.5 \times IQR$ ou acima de $Q_3 + 1.5 \times IQR$.
- **Tratamento de Dados Ausentes (*Missing Values*):**
  - Remoção/Descarte: aplicável apenas quando a perda de amostras é pequena e aleatória (*MCAR*).
  - Imputação Estatística: preenchimento por Média (dados simétricos), Mediana (dados assimétricos/com outliers) ou Moda (variáveis categóricas).
  - Imputação em Séries Temporais: *Forward Fill* (repetição do último valor válido) ou interpolação linear temporal.
- **Codificação de Categóricos (*Encoding*):**
  - *One-Hot Encoding:* Criação de colunas binárias ($0/1$) para categorias nominais (evita criar uma falsa relação de ordem matemática).
  - *Ordinal / Label Encoding:* Atribuição de inteiros sequenciais para categorias com ordem lógica clara.

### Semana 04 — Modelagem, Avaliação de ROI e Feature Importance
- **Trade-off de Complexidade:** Modelos altamente interpretáveis (Regressão Linear, Árvores de Decisão) vs Modelos de "caixa-preta" com maior capacidade preditiva (Florestas Aleatórias, Redes Neurais).
- **Conceito de Feature Importance:** Identificação estatística de quais sensores ou variáveis exercem maior influência nas predições do processo industrial.
- **Métricas Técnicas vs Retorno sobre Investimento (ROI):** A validação final de um modelo em Ciência de Dados Industrial não é apenas ter alto F1-Score, mas gerar redução mensurável de desperdício (*scrap*), aumento de disponibilidade e economia financeira comprovada na Fase 5 do CRISP-DM.

### Semana 05 — Distribuições de Probabilidade e Testes de Hipóteses
- **Distribuição Normal (Gaussiana):**
  - Curva em formato de sino simétrica ($\text{Média} = \text{Mediana} = \text{Moda}$).
  - *Regra Empírica (68-95-99.7):* $\approx 68.3\%$ dos dados estão a $\pm 1\sigma$ da média; $\approx 95.4\%$ a $\pm 2\sigma$; $\approx 99.7\%$ a $\pm 3\sigma$ (base dos limites de controle estatístico de processo 6-Sigma).
- **Distribuição de Poisson:**
  - Modela a contagem de eventos raros e independentes que ocorrem em um intervalo fixo de tempo ou espaço (ex: quantidade de quebras de broca por semana, defeitos por metro quadrado de chapa).
- **Inferência Estatística e Testes de Hipóteses:**
  - *Hipótese Nula ($H_0$):* Afirmação de normalidade, igualdade ou ausência de efeito/associação (o status quo).
  - *Hipótese Alternativa ($H_1$):* Afirmação de diferença, efeito significativo ou anomalia.
  - *Nível de Significância ($\alpha$):* Probabilidade máxima aceitável de rejeitar $H_0$ quando ela é verdadeira (usualmente fixado em $\alpha = 0.05$ ou $5\%$).
  - *O p-valor (p-value):* Probabilidade de obter um resultado igual ou mais extremo que o observado, assumindo $H_0$ verdadeira.
    - **Regra de Decisão:** Se $\text{p-valor} < \alpha$, **rejeita-se $H_0$** (a evidência é estatisticamente significativa). Se $\text{p-valor} \ge \alpha$, **não se rejeita $H_0$**.
  - *Teste de Shapiro-Wilk:* Avalia se uma amostra provém de uma população normalmente distribuída.
  - *Teste do Qui-Quadrado ($\chi^2$):* Avalia a dependência ou associação entre duas variáveis categóricas qualitativas.

### Semana 06 e 07 — Análise de Séries Temporais Industriais (Time Series)
- **Definição de Série Temporal:** Conjunto de dados ordenados cronologicamente, com intervalos regulares, onde observações sucessivas exibem dependência temporal intrínseca.
- **Componentes Fundamentais de uma Série Temporal:**
  - *Tendência ($T_t$):* Direção de longo prazo da série (crescimento, declínio ou estabilidade).
  - *Sazonalidade ($S_t$):* Padrão flutuante regular que se repete em intervalos calendários fixos e conhecidos (ex: pico de consumo elétrico diário às 14h, sazonalidade semanal).
  - *Ciclo ($C_t$):* Flutuações periódicas sem intervalo de tempo fixo (geralmente ligadas a ciclos econômicos de mercado).
  - *Ruído / Resíduo ($R_t$):* Variações aleatórias residuais imprevisíveis que sobram após retirar tendência e sazonalidade.
- **Modelos de Decomposição Temporal:**
  - *Modelo Aditivo:* $Y_t = T_t + S_t + R_t$ (utilizado quando a amplitude da sazonalidade permanece constante mesmo quando o nível médio/tendência da série aumenta).
  - *Modelo Multiplicativo:* $Y_t = T_t \times S_t \times R_t$ (utilizado quando a amplitude das variações sazonais cresce proporcionalmente ao nível da tendência).
- **Suavização e Médias Móveis:**
  - *Média Móvel Simples (SMA):* Média aritmética das últimas $k$ observações; suaviza ruídos, mas atribui o mesmo peso para um dado antigo e um recente.
  - *Média Móvel Exponencialmente Ponderada (EWMA):* Atribui pesos exponencialmente decrescentes aos dados mais antigos através do fator de suavização $\alpha$ ($0 < \alpha \le 1$). Permite reagir muito mais rapidamente a alterações repentinas no processo fabril.
- **Conceito de Estacionariedade:** Série temporal cujas propriedades estatísticas (média, variância e autocorrelação) não mudam ao longo do tempo. Séries não estacionárias frequentemente possuem tendência ou variância volátil.

---

## 3. Glossário de Termos Essenciais

| Termo | Definição Teórica Concisa |
| :--- | :--- |
| **CRISP-DM** | Metodologia padrão para mineração de dados e ciência de dados composta por 6 fases cíclicas, centradas no objetivo de negócio. |
| **Matriz de Confusão** | Tabela $2 \times 2$ que cruza valores reais e previstos para calcular VP, VN, FP e FN em tarefas de classificação supervisionada. |
| **Precisão** | Métrica que mede a confiabilidade dos alarmes positivos gerados pelo modelo ($VP / (VP + FP)$). |
| **Recall (Revocação)** | Métrica que mede a sensibilidade do modelo em encontrar todos os casos reais positivos ($VP / (VP + FN)$). |
| **Outlier** | Valor discrepante extremo que destoa do comportamento do restante da amostra, identificado pelo critério de $1.5 \times IQR$. |
| **IQR** | Intervalo Interquartil ($Q_3 - Q_1$), medida de dispersão resistente a outliers que delimita os 50% centrais dos dados. |
| **MCAR** | *Missing Completely at Random*: condição em que a ausência do dado não tem relação com nenhuma variável observada ou oculta. |
| **One-Hot Encoding** | Técnica que transforma variáveis categóricas nominais em vetores binários independentes para evitar falsa ordenação. |
| **p-valor** | Probabilidade de se observar uma estatística tão ou mais extrema sob a hipótese nula; se $p < \alpha$, rejeita-se $H_0$. |
| **Poisson** | Distribuição de probabilidade discreta para contagem de eventos raros e independentes em um intervalo contínuo fixo. |
| **Sazonalidade** | Componente de uma série temporal que reproduz flutuações regulares e repetitivas em períodos de tempo fixos e conhecidos. |
| **EWMA** | Técnica de média móvel que dá maior peso às observações mais recentes, permitindo detecção rápida de desvios industriais. |

---

## 4. Simulado Completo da Prova P1 (12 Questões no Padrão Oficial)

### Questão 01 (Múltipla Escolha — Ciclo de Vida CRISP-DM)
Em um projeto de Indústria 4.0, a equipe de engenharia concluiu o treinamento de um modelo de aprendizado de máquina para prever a rugosidade superficial de peças usinadas. Antes de disponibilizar o modelo no chão de fábrica para guiar os operadores, o time reuniu-se com os gerentes de produção para verificar se a redução estimada no índice de retrabalho atende às metas financeiras estabelecidas no início do projeto.  
De acordo com a metodologia CRISP-DM, em qual fase o projeto se encontra nesse momento?  
A) Fase 3 — Preparação dos Dados (*Data Preparation*).  
B) Fase 4 — Modelagem (*Modeling*).  
C) Fase 5 — Avaliação (*Evaluation*).  
D) Fase 6 — Implantação (*Deployment*).  

---

### Questão 02 (Múltipla Escolha — Custos Assimétricos de Negócio)
Uma montadora implementou um sistema de visão computacional com classificação supervisionada para inspecionar falhas estruturais em componentes de freio automotivo antes da montagem final.  
Considerando a gravidade dos impactos humanos, jurídicos e financeiros, qual das seguintes diretrizes de engenharia deve orientar a calibração do classificador?  
A) Maximizar exclusivamente a acurácia global do modelo, independentemente da taxa de falsos positivos ou falsos negativos.  
B) Priorizar a métrica de Recall (Sensibilidade), reduzindo a zero os Falsos Negativos (deixar passar uma peça trincada), mesmo que isso gere um pequeno aumento em Falsos Positivos (peças boas retidas para rechecagem manual).  
C) Priorizar a Precisão, aceitando que algumas peças com defeito sejam liberadas para evitar que os operadores façam rechecagens manuais.  
D) Utilizar a média aritmética simples entre acurácia e especificidade, pois o custo do Falso Positivo é matematicamente idêntico ao do Falso Negativo.  

---

### Questão 03 (Múltipla Escolha — Métricas de Avaliação em Classes Desbalanceadas)
Em uma fábrica de semicondutores, são produzidas 100.000 placas por semana, das quais apenas 100 apresentam queima interna (defeito crítico raro). Um cientista de dados novato treinou um modelo ingênuo que simplesmente prevê que **todas as placas estão perfeitas** (nunca aponta defeito).  
Qual é a Acurácia desse modelo ingênuo e qual métrica expõe categoricamente o seu fracasso?  
A) Acurácia de 50%; a curva ROC é a única métrica capaz de detectar o problema.  
B) Acurácia de 99,9%; o fracasso é evidenciado pelo Recall (Revocação) de 0% para a classe defeituosa.  
C) Acurácia de 0%; evidenciada pela Precisão de 100%.  
D) Acurácia de 99,9%; o fracasso é evidenciado pelo fato de a Média superar a Mediana.  

---

### Questão 04 (Múltipla Escolha — Tipos de Variáveis na Manufatura)
Um conjunto de dados coletado de uma célula de soldagem robótica contém quatro atributos:  
1. Identificador do robô (`Robo_A`, `Robo_B`, `Robo_C`).  
2. Severidade do desgaste da tocha (`Leve`, `Moderado`, `Severo`).  
3. Contagem de interrupções por falta de gás no turno.  
4. Temperatura de poça de fusão em graus Celsius ($1450.5^\circ\text{C}$).  
A classificação estatística correta dessas quatro variáveis, na ordem apresentada, é:  
A) Qualitativa Nominal, Qualitativa Ordinal, Quantitativa Discreta e Quantitativa Contínua.  
B) Qualitativa Ordinal, Qualitativa Nominal, Quantitativa Contínua e Quantitativa Discreta.  
C) Qualitativa Nominal, Qualitativa Nominal, Quantitativa Contínua e Quantitativa Contínua.  
D) Quantitativa Discreta, Qualitativa Ordinal, Quantitativa Discreta e Quantitativa Contínua.  

---

### Questão 05 (Múltipla Escolha — Medidas de Tendência Central e Assimetria)
Durante a análise do tempo de ciclo (em segundos) de uma estação de embalagem, constatou-se que a maioria das operações ocorre em torno de 45 segundos, mas, em alguns momentos esporádicos do dia, panes de alimentação provocam tempos de ciclo superiores a 600 segundos.  
Nesse conjunto de dados com forte assimetria à direita causada por valores extremos, qual medida de tendência central melhor representa o tempo de ciclo operacional típico?  
A) A Média aritmética simples, pois ela considera obrigatoriamente a soma ponderada de todos os valores observados.  
B) A Variância amostral, pois ela neutraliza a dispersão através da elevação ao quadrado.  
C) A Mediana, por ser uma medida de posição separatriz resistente e imune a distorções causadas por outliers.  
D) A Média harmônica das amplitudes interquartis.  

---

### Questão 06 (Múltipla Escolha — Detecção de Outliers via Boxplot)
Um analista calculou as estatísticas descritivas da temperatura de operação de uma prensa hidráulica:  
- Primeiro Quartil ($Q_1$): $40^\circ\text{C}$  
- Terceiro Quartil ($Q_3$): $60^\circ\text{C}$  
Utilizando o critério padrão do Boxplot proposto por John Tukey, qual é o Intervalo Interquartil ($IQR$) e qual é a temperatura limite superior a partir da qual uma medição passa a ser classificada tecnicamente como *Outlier*?  
A) $IQR = 20^\circ\text{C}$ e Limite Superior $= 90^\circ\text{C}$.  
B) $IQR = 10^\circ\text{C}$ e Limite Superior $= 75^\circ\text{C}$.  
C) $IQR = 20^\circ\text{C}$ e Limite Superior $= 80^\circ\text{C}$.  
D) $IQR = 50^\circ\text{C}$ e Limite Superior $= 100^\circ\text{C}$.  

---

### Questão 07 (Múltipla Escolha — Testes de Hipóteses e Regra do p-valor)
Um engenheiro de qualidade conduziu um teste de hipóteses de Shapiro-Wilk para testar a aderência das espessuras de chapas de aço à Distribuição Normal. O nível de significância foi pré-fixado em $\alpha = 0.05$ ($5\%$).  
- $H_0$ (Hipótese Nula): Os dados seguem uma distribuição normal.  
- $H_1$ (Hipótese Alternativa): Os dados não seguem uma distribuição normal.  
Após o cálculo estatístico, o teste retornou um $\text{p-valor} = 0.018$.  
Qual é a decisão estatística formal e sua respectiva interpretação técnica?  
A) Como $\text{p-valor} < \alpha$, rejeita-se $H_0$; há evidências estatísticas suficientes para afirmar que a distribuição dos dados difere da normal.  
B) Como $\text{p-valor} < \alpha$, aceita-se $H_0$; os dados seguem perfeitamente a distribuição normal.  
C) Como $\text{p-valor} > 0$, conclui-se que o teste foi inconclusivo e deve-se adotar o teste de Poisson.  
D) Como $\text{p-valor} < 0.50$, rejeita-se $H_1$ e assume-se a ausência de outliers.  

---

### Questão 08 (Múltipla Escolha — Componentes de Séries Temporais)
Ao analisar o consumo de energia elétrica de um torno CNC ao longo de 6 meses de produção ininterrupta, um analista observou três fenômenos:  
1. Um aumento gradual e contínuo no consumo médio mensal devido ao desgaste progressivo do rolamento principal;  
2. Uma elevação diária sistemática e previsível nos horários de pico operacional (às 10h e às 14h);  
3. Oscilações instantâneas imprevisíveis decorrentes de flutuações espúrias na rede da concessionária.  
Esses três comportamentos correspondem, respectivamente, a quais componentes da série temporal?  
A) Ruído, Tendência e Ciclo.  
B) Tendência, Sazonalidade e Ruído.  
C) Ciclo, Sazonalidade e Tendência.  
D) Sazonalidade, Tendência e Média Móvel.  

---

### Questão 09 (Correlação de Colunas — Fases do CRISP-DM)
Relacione as fases da metodologia CRISP-DM na **Coluna A** com as respectivas atividades desempenhadas na **Coluna B**:

| Coluna A (Fase CRISP-DM) | Coluna B (Atividade Típica) |
| :--- | :--- |
| ( 1 ) Business Understanding | ( &nbsp; ) Seleção da técnica preditiva, definição de variáveis de entrada e treinamento do modelo. |
| ( 2 ) Data Preparation | ( &nbsp; ) Imputação de registros nulos, One-Hot Encoding e criação de atributos derivados. |
| ( 3 ) Modeling | ( &nbsp; ) Tradução de metas industriais em problemas de mineração de dados e critérios de sucesso. |
| ( 4 ) Evaluation | ( &nbsp; ) Verificação formal se os resultados atingem o retorno financeiro e metas estratégicas de negócio. |

Assinale a alternativa que apresenta a sequência correta de preenchimento (de cima para baixo):  
A) 3 - 2 - 1 - 4  
B) 2 - 3 - 1 - 4  
C) 3 - 1 - 2 - 4  
D) 4 - 2 - 3 - 1  

---

### Questão 10 (Correlação de Colunas — Métricas e Conceitos Estatísticos)
Relacione os conceitos da **Coluna A** às suas respectivas características essenciais na **Coluna B**:

| Coluna A (Conceito) | Coluna B (Característica / Definição) |
| :--- | :--- |
| ( 1 ) F1-Score | ( &nbsp; ) Modelo para dados de contagem discreta de eventos raros e independentes em um intervalo contínuo. |
| ( 2 ) Distribuição Normal | ( &nbsp; ) Curva simétrica em sino onde cerca de 95,4% dos dados encontram-se no intervalo de $\pm 2$ desvios padrões da média. |
| ( 3 ) Distribuição de Poisson | ( &nbsp; ) Média harmônica entre Precisão e Revocação, útil no balanceamento de erros de classificação. |
| ( 4 ) EWMA | ( &nbsp; ) Média móvel com ponderação exponencial que confere maior relevância às observações temporais mais recentes. |

Assinale a alternativa que apresenta a sequência correta:  
A) 3 - 2 - 1 - 4  
B) 2 - 3 - 4 - 1  
C) 3 - 1 - 2 - 4  
D) 4 - 2 - 1 - 3  

---

### Questão 11 (Discursiva Teórica — Métricas de Classificação e Matriz de Confusão)
Considere um sistema preditivo implantado em uma linha de usinagem com o objetivo de detectar falhas iminentes em fresadoras CNC. O modelo gera duas saídas possíveis: "Classe 1: Falha Iminente" ou "Classe 0: Operação Normal".  
**Com base nos conceitos teóricos de avaliação:**  
a) Defina conceitualmente o que representam um **Falso Positivo (FP)** e um **Falso Negativo (FN)** no contexto estrito dessa linha de fabricação.  
b) Explique qual dessas duas métricas — **Precisão** ou **Recall (Sensibilidade)** — deve ser prioritariamente maximizada pela equipe de manutenção da fábrica e justifique tecnicamente sua escolha com base no custo de erro.  

---

### Questão 12 (Discursiva Teórica — Modelos de Decomposição de Séries Temporais)
Na análise de séries temporais aplicadas ao consumo de utilidades industriais (ar comprimido, vapor, eletricidade), a decomposição clássica separa o sinal em três partes: Tendência ($T_t$), Sazonalidade ($S_t$) e Resíduo/Ruído ($R_t$).  
**Responda aos itens a seguir:**  
a) Diferencie conceitualmente o **Modelo Aditivo** ($Y_t = T_t + S_t + R_t$) do **Modelo Multiplicativo** ($Y_t = T_t \times S_t \times R_t$), explicando como se comporta a amplitude da oscilação sazonal em cada um desses modelos quando a tendência média de consumo cresce ao longo dos anos.  
b) Por que a média móvel exponencialmente ponderada (EWMA) é tecnicamente superior à média móvel simples (SMA) quando o objetivo é identificar de forma ágil uma mudança súbita de patamar em uma variável crítica de processo fabril?  

---

## 5. Gabarito Comentado e Padrão de Resposta

- **Questão 01 — Alternativa C.**  
  *Comentário:* A Fase 5 (Evaluation) avalia formalmente o modelo sob a perspectiva de negócios antes de sua implantação (Deployment). A conferência de metas financeiras de redução de retrabalho é a essência dessa etapa.
- **Questão 02 — Alternativa B.**  
  *Comentário:* Em peças de segurança crítica (como freios automotivos), um Falso Negativo (liberar peça defeituosa) causa desastre potencial e recall milionário. Logo, deve-se maximizar o Recall para capturar 100% das peças defeituosas, assumindo o custo menor de reinspecionar falsos positivos.
- **Questão 03 — Alternativa B.**  
  *Comentário:* Como 99.900 placas são boas em 100.000, o modelo ingênuo acerta 99.900 vezes (Acurácia = 99,9%). No entanto, de 100 defeitos reais, ele detectou exatamente zero ($VP = 0$), resultando em um Recall de 0%, provando sua total inutilidade operacional.
- **Questão 04 — Alternativa A.**  
  *Comentário:* Identificador de robô é categoria sem ordem (Nominal); severidade possui hierarquia (Ordinal); contagem de paradas é número inteiro (Discreta); temperatura assume valores fracionários contínuos (Contínua).
- **Questão 05 — Alternativa C.**  
  *Comentário:* A média é altamente distorcida por caudas pesadas ou valores discrepantes (600s). A mediana localiza a posição central de 50% dos dados, sendo a medida robusta recomendada para distribuições assimétricas.
- **Questão 06 — Alternativa A.**  
  *Comentário:* $IQR = Q_3 - Q_1 = 60 - 40 = 20^\circ\text{C}$. O limite superior de Tukey é calculado por $Q_3 + 1.5 \times IQR = 60 + (1.5 \times 20) = 60 + 30 = 90^\circ\text{C}$.
- **Questão 07 — Alternativa A.**  
  *Comentário:* Pela regra de decisão dos testes de hipóteses: se $\text{p-valor} < \alpha$ ($0.018 < 0.05$), rejeita-se a hipótese nula $H_0$. Portanto, rejeita-se a suposição de normalidade.
- **Questão 08 — Alternativa B.**  
  *Comentário:* Desgaste progressivo contínuo representa a Tendência; o ciclo diário nos mesmos horários é a Sazonalidade; as flutuações aleatórias residuais constituem o Ruído.
- **Questão 09 — Alternativa A (3 - 2 - 1 - 4).**  
  *Comentário:* Modeling (3) treina modelos; Data Preparation (2) imputa nulos e faz encoding; Business Understanding (1) traduz metas de negócio; Evaluation (4) valida retorno financeiro e objetivos estratégicos.
- **Questão 10 — Alternativa A (3 - 2 - 1 - 4).**  
  *Comentário:* Poisson (3) modela contagens raras em intervalos fixos; Normal (2) tem 95,4% a $\pm 2\sigma$; F1-Score (1) equilibra precisão e revocação; EWMA (4) aplica pesos exponenciais decrescentes.
- **Questão 11 (Padrão de Resposta Esperado):**  
  *a)* O **Falso Positivo (FP)** ocorre quando o modelo prevê que a fresadora vai falhar, mas a máquina estava operando normalmente (falso alarme, gerando uma parada preventiva para inspeção desnecessária). O **Falso Negativo (FN)** ocorre quando o modelo prevê que a máquina está operando normalmente, mas ela quebra em plena operação (falha não detectada).  
  *b)* Deve-se priorizar o **Recall (Sensibilidade)**. Em cenários industriais de usinagem, o custo financeiro e operacional de um Falso Negativo (quebra catastrófica da ferramenta em alta rotação, perda de peças usinadas e parada de linha não programada) é enormemente superior ao custo de um Falso Positivo (inspeção breve da ferramenta pela equipe de manutenção).
- **Questão 12 (Padrão de Resposta Esperado):**  
  *a)* No **Modelo Aditivo**, a amplitude da sazonalidade mantém-se constante ao longo do tempo, independentemente de a tendência subir ou descer. No **Modelo Multiplicativo**, a amplitude da oscilação sazonal varia proporcionalmente ao nível da tendência (se a média de consumo triplica ao longo dos anos, as oscilações sazonais de pico e vale também triplicam de amplitude).  
  *b)* A EWMA é superior à SMA porque atribui pesos exponencialmente maiores às observações mais recentes por meio do fator $\alpha$. Enquanto a SMA aplica o mesmo peso ($1/k$) a dados antigos de dias anteriores (demorando vários ciclos para refletir uma quebra de regime), a EWMA detecta e sinaliza desvios e alterações de patamar quase instantaneamente.

---

## 6. Dicas Estratégicas para o Dia da Prova

1. **Atenção ao Dilema Acurácia vs Recall:** Lembre-se sempre de que acurácia alta em base desbalanceada não significa modelo bom. Em manutenção preditiva e defeitos fabris raros, o foco da resposta é sempre o Recall.
2. **Cálculo Rápido de Boxplot:** Memorize as fórmulas de Tukey: $IQR = Q_3 - Q_1$, $\text{Limite Inferior} = Q_1 - 1.5 \times IQR$ e $\text{Limite Superior} = Q_3 + 1.5 \times IQR$.
3. **Regra de Decisão do p-valor:** Tenha segurança total na regra universal: *"Se o p-valor for menor que $\alpha$, rejeita-se a Hipótese Nula ($H_0$)"*.
4. **Respostas Discursivas Claras:** Relacione os termos estatísticos com o impacto econômico no chão de fábrica (disponibilidade, refugo, custos de parada).
