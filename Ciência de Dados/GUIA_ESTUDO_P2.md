# Guia de Estudos — Prova Teórico-Prática 2 (P2)
## Unidade Curricular: Ciência de Dados

---

## 1. Informações Gerais da Avaliação

- **Escopo indicado no plano:** Semanas 10 a 16. Aulas detalhadas disponíveis: Semanas 10, 12 e 13; Semanas 15 e 16 aplicam análise/modelo ao projeto ADS Factory Hub.
- **Conteúdo prioritário em relação à P1:** redes neurais, MLP para classificação e regressão, preparo de entradas para modelos neurais, avaliação e comparação, séries sequenciais, janelas temporais e escolha entre MLP, CNN 1D, LSTM e autoencoder.
- **Base cumulativa:** CRISP-DM, matriz de confusão, métricas, desbalanceamento, preparação de dados e análise temporal voltam a ser necessários. A P2 usa essas ideias para avaliar os modelos novos.
- **Formato:** este simulado segue a estrutura do guia P1 como exercício de revisão. A quantidade e a composição oficiais da P2 não estão especificadas nos materiais localizados.

> **Roteiro para responder questões de cenário:** (1) diga qual decisão se quer tomar; (2) defina unidade de análise, entradas e alvo; (3) escolha a partição correta; (4) explique o preparo e o modelo; (5) escolha métricas conforme o custo do erro; (6) interprete limites e uso operacional.

---

## 2. Mapa Conceitual dos Conteúdos

### Semana 10 — Da Random Forest à rede neural MLP

#### A MLP dentro do CRISP-DM

A MLP é uma alternativa de **modelagem**, não uma etapa nova do CRISP-DM. O ciclo continua sendo: compreender o negócio, compreender os dados, preparar, modelar, avaliar e implantar. A escolha de uma rede neural só faz sentido quando responde à necessidade do problema e supera um baseline com benefício suficiente para justificar sua complexidade.

A aula reaproveita o mesmo problema, dados e conjunto de teste usados na comparação com Random Forest. O foco novo fica na preparação que a MLP exige, no processo de treinamento e no diagnóstico de aprendizagem.

#### Neurônio, camadas e pesos

Um neurônio calcula uma combinação ponderada dos valores de entrada, soma um viés e aplica uma função de ativação:

\[ z = xW + b, \qquad a = f(z) \]

- **Entrada `x`:** atributos do registro, por exemplo temperatura, vibração, pressão e corrente.
- **Pesos `W`:** parâmetros que determinam como cada entrada contribui para a combinação.
- **Viés `b`:** deslocamento que permite ao neurônio ajustar seu ponto de ativação.
- **Ativação `f`:** transformação não linear; sem não linearidade, empilhar camadas densas não permitiria aprender fronteiras complexas além de uma transformação linear equivalente.
- **Camada:** conjunto de neurônios que transforma uma representação em outra. Camadas ocultas aprendem combinações internas; a camada de saída representa a previsão solicitada.

Na notação da aula, cada camada densa aplica \(z^{(l)}=a^{(l-1)}W^{(l)}+b^{(l)}\) e depois \(a^{(l)}=f(z^{(l)})\). As dimensões das matrizes precisam combinar: se há 4 entradas e 16 neurônios na primeira camada, a matriz de pesos dessa conexão tem forma 4 × 16.

#### Propagação direta, perda e backpropagation

1. **Forward pass (propagação direta):** os atributos atravessam as camadas e geram uma saída, como uma probabilidade de falha.
2. **Função de perda (`loss`):** resume numericamente a diferença entre a saída prevista e o alvo. Para classificação binária a aula usa entropia cruzada binária; para regressão usa-se uma perda para valores contínuos, como erro quadrático médio.
3. **Backpropagation:** aplica a regra da cadeia para estimar como cada peso contribuiu para o erro e calcular gradientes.
4. **Otimizador:** atualiza pesos e vieses para reduzir a perda. A aula usa Adam como otimizador.
5. O processo se repete em lotes durante várias épocas. Uma época corresponde a uma passagem pelo conjunto de treinamento; um batch é o subconjunto usado numa atualização.

A rede aprende parâmetros a partir dos dados, mas não aprende automaticamente qual erro é mais caro para a empresa. Essa prioridade entra na definição do alvo, nas métricas, no limiar de decisão e na avaliação operacional.

#### Saída e tipo de tarefa

- **Classificação binária:** prevê uma classe, como falha / sem falha. Uma saída sigmoid pode ser interpretada como score ou probabilidade estimada da classe positiva; o limiar transforma essa pontuação em classe prevista.
- **Classificação multiclasse:** escolhe entre mais de duas categorias mutuamente exclusivas. A camada e a perda precisam corresponder às classes e à codificação do alvo.
- **Regressão:** prevê uma quantidade contínua, como vibração, temperatura ou consumo futuro. Não se converte o valor em classe se a pergunta de negócio pede uma estimativa numérica.

#### Escalonamento e codificação

Redes neurais treinadas por gradiente são sensíveis à escala. Se temperatura varia em dezenas e vibração em poucos décimos, as magnitudes diferentes podem tornar a otimização mal condicionada. O `StandardScaler` transforma cada variável numérica usando média e desvio padrão aprendidos no treino:

\[ z = \frac{x-\mu_{treino}}{\sigma_{treino}} \]

Categorias não têm necessariamente uma ordem numérica. Codificar `L`, `M`, `H` como 1, 2, 3 pode inventar distâncias e uma ordem que não representam o processo. `OneHotEncoder` representa as categorias em colunas indicadoras. O pré-processador e o modelo devem fazer parte de um pipeline reproduzível.

**Regra essencial contra vazamento:** primeiro separam-se treino, validação e teste; o `fit` do scaler e do encoder é feito somente no treino (ou dentro de um pipeline ajustado em cada partição de treino). Depois, as mesmas transformações aprendidas são aplicadas a validação e teste. Não se calcula média, desvio, imputação ou seleção de recursos usando o teste.

#### Treino, validação, teste e overfitting

- **Treino:** ajusta pesos e vieses.
- **Validação:** compara configurações, acompanha parada antecipada e escolhe limiar/hiperparâmetros sem tocar no teste final.
- **Teste:** estima o desempenho final uma única vez, depois das decisões de desenvolvimento.
- **Overfitting:** o modelo melhora no treino, mas não generaliza. Uma curva de perda de treino que cai não basta; acompanhe a validação.
- **Early stopping:** interrompe o treinamento quando o desempenho de validação deixa de melhorar por certo número de épocas. Evita continuar ajustando sem ganho, mas não substitui uma avaliação independente.
- **Regularização (`alpha`):** penaliza pesos grandes para reduzir ajuste excessivo. Regularizar demais pode causar underfitting; regularizar de menos pode deixar o modelo memorizar ruído.

A aula compara a MLP com Random Forest usando a mesma divisão estratificada e o mesmo conjunto de teste. A MLP recebe padronização; a floresta não depende dela. Comparação justa significa manter iguais os dados, o alvo, as partições e os critérios de avaliação, admitindo apenas as transformações exigidas por cada algoritmo.

### Semana 12 — MLP para classificação e regressão

#### Definir o problema antes do algoritmo

No estudo de manutenção preditiva, a classificação pergunta se houve falha (alvo discreto 0/1), enquanto a regressão estima vibração (alvo numérico contínuo). Podem usar sinais de entrada relacionados, mas são problemas diferentes: o alvo, a saída da rede, a função de perda e as métricas mudam.

Defina explicitamente:

- **Unidade de previsão:** uma linha, ciclo, janela ou equipamento em certo instante?
- **Alvo:** o que precisa ser previsto e em qual horizonte?
- **Momento da previsão:** quais dados já estarão disponíveis nesse instante?
- **Decisão apoiada:** inspecionar, priorizar ou planejar manutenção?
- **Custo dos erros:** o que ocorre se a falha passar despercebida (FN) ou se houver alarme sem falha (FP)?

Sem essas definições, uma métrica alta pode representar uma previsão inútil ou feita com informação que só aparece depois do evento.

#### Avaliar classificação

A matriz de confusão conta previsões comparadas com o estado real:

|  | Previsto positivo | Previsto negativo |
| :--- | :---: | :---: |
| **Real positivo** | Verdadeiro positivo (VP) | Falso negativo (FN) |
| **Real negativo** | Falso positivo (FP) | Verdadeiro negativo (VN) |

\[ Precisão = \frac{VP}{VP+FP} \qquad Recall = \frac{VP}{VP+FN} \]

\[ F1 = 2\,\frac{Precisão\cdot Recall}{Precisão+Recall} \qquad Acurácia = \frac{VP+VN}{VP+VN+FP+FN} \]

- **Precisão:** entre os alertas emitidos, que fração correspondeu a falhas? Baixa precisão gera inspeções desnecessárias.
- **Recall:** entre as falhas reais, que fração foi detectada? Baixo recall significa falhas não sinalizadas.
- **F1:** média harmônica de precisão e recall; equilibra os dois, mas não inclui explicitamente o custo financeiro de cada erro.
- **Acurácia:** fração total de acertos. Pode enganar quando a falha é rara: prever sempre “normal” em uma base com 0,1% de falhas gera 99,9% de acurácia e recall de falha igual a zero.
- **Average precision / PR-AUC:** resume a curva precisão-recall; costuma ser informativa para a classe positiva rara. Compare modelos na mesma partição e prevalência.
- **Balanced accuracy:** média do recall das classes; reduz a dominância da classe maioritária.

Nenhuma métrica decide sozinha. Escolha a métrica primária com base na consequência do erro e reporte outras métricas necessárias para revelar o custo operacional.

#### Limiar de decisão

Uma rede binária pode retornar um score \(p\). Com limiar 0,5, classifica como positiva quando \(p\geq0,5\), mas esse valor não é universal. Diminuir o limiar costuma aumentar o recall e também os falsos alarmes; aumentá-lo tende a reduzir alarmes e pode deixar mais falhas sem detectar.

Escolha o limiar na validação, usando a capacidade da equipe e o custo de FP/FN. Por exemplo, priorizar recall ou F2 pode ser razoável quando FN é muito caro, mas a decisão precisa considerar quantos alertas serão gerados. Depois de fixar a escolha, avalie no teste. Não escolha o limiar examinando o teste.

#### Avaliar regressão

Para estimar valor contínuo, use métricas de erro no valor previsto, como:

- **MAE:** média do valor absoluto dos erros; conserva a unidade original e é menos sensível a extremos que o MSE.
- **MSE:** média dos erros ao quadrado; penaliza mais os erros grandes, mas está em unidade ao quadrado.
- **RMSE:** raiz do MSE; volta à unidade original e continua penalizando mais os erros grandes.
- **R²:** compara o erro residual com a variação em torno da média; é relativo ao conjunto usado e pode ser negativo em teste se o modelo for pior que a referência pela média.

Inspecione resíduos (real − previsto), viés sistemático, erros por faixa/regime de operação e extremos. Um RMSE pequeno em média não garante precisão suficiente em temperaturas ou vibrações críticas.

#### Baseline e comparação

Um baseline simples dá contexto ao resultado: prever sempre a classe mais comum; prever uma média/mediana na regressão; ou usar Random Forest já estudada. Se a MLP não melhora a decisão ou o custo total, a complexidade extra pode não valer a pena.

A comparação só é válida quando modelos resolvem a mesma tarefa, usam o mesmo alvo e partições e são avaliados com métricas coerentes. Ajustes de hiperparâmetros devem ocorrer na validação; o conjunto de teste não pode orientar a escolha repetidamente.

### Semana 13 — Redes neurais para dados industriais e temporais

#### Selecionar o modelo pelo formato e pela pergunta

| Dados/pergunta | Candidato inicial | O que comparar |
| :--- | :--- | :--- |
| Atributos tabulares de um registro ou ciclo | MLP | baseline, Random Forest |
| Padrões locais em sequência multissensor | CNN 1D | baseline temporal e atributos agregados |
| Dependências de sequência mais longa que tenham justificativa | LSTM | CNN 1D e baseline temporal |
| Muitas observações normais e poucos rótulos de falha | Autoencoder para score exploratório | limites estatísticos e validação com eventos |

O modelo mais complexo não é automaticamente o melhor. A escolha depende da estrutura dos dados, quantidade e qualidade dos rótulos, latência necessária, recursos de implantação e custo de manutenção do modelo.

#### MLP (Multilayer Perceptron)

Recebe um vetor de atributos por registro ou por janela resumida. Camadas densas combinam os atributos. É apropriada como rede para dados tabulares, mas pode ignorar a ordem temporal se as leituras forem simplesmente achatadas ou resumidas sem um desenho adequado.

#### CNN 1D

Convoluções percorrem pontos vizinhos numa sequência e aprendem padrões locais, como uma subida curta de pressão ou uma oscilação em sensores. A entrada normalmente tem forma amostras temporais × canais/sensores. A rede não conhece sozinha o significado físico; janela, escala e rótulos precisam ser definidos corretamente.

#### LSTM

Processa uma sequência em ordem e mantém um estado interno que resume parte do histórico. Pode representar dependências temporais mais longas, mas costuma ter treinamento e operação mais custosos. Usá-la só se justifica quando a ordem e a história realmente contêm informação que o baseline/CNN não captura com desempenho suficiente.

#### Autoencoder e detecção de anomalias

Um autoencoder aprende a codificar e reconstruir exemplos considerados representativos do comportamento normal. O erro de reconstrução (diferença entre entrada e reconstrução) pode servir como **score de anomalia**. Um limiar alto sinaliza padrões incomuns para investigação.

Esse score não prova defeito, não identifica causa e pode subir por mudança de carga, sensor, manutenção ou regime de operação legítimo. O limiar deve ser avaliado com eventos e contexto operacional. Sem rótulos por instante, cuidado ao declarar precisão/recall supervisionados.

#### Séries temporais: ordem, corte e janelas

1. Ordene registros pelo timestamp e examine intervalo de amostragem, lacunas, duplicatas e mudanças de regime.
2. Defina o que se prevê e o horizonte. Para prever o próximo valor, as entradas devem terminar antes do alvo.
3. Faça corte cronológico: períodos passados no treino, período posterior no teste. Em muitos casos, separar por máquina também testa generalização a equipamentos não vistos.
4. Ajuste imputação/escalonamento só no trecho de treino e aplique parâmetros ao futuro.
5. Gere janelas sem atravessar a fronteira entre treino e teste. Uma janela de 60 instantes × 5 sensores para prever o próximo TP2 contém somente os 60 passos anteriores na entrada; o alvo é o valor seguinte.

Em divisão aleatória, pontos quase idênticos ou janelas sobrepostas podem cair nos dois conjuntos, tornando o teste artificialmente fácil. Em dados de sequência, preserve a ordem temporal e evite que informação do futuro apareça nas entradas.

#### AI4I e MetroPT-3: tarefas e limites

- **AI4I 2020:** conjunto didático sintético usado para classificação tabular de falha, baseline e MLP. `UID`, `Product ID` são identificadores; modos de falha derivados do mesmo evento podem revelar o alvo e causar vazamento se usados como entrada. As linhas não constituem uma série temporal confiável por máquina.
- **MetroPT-3:** telemetria sequencial de compressor. Os dados não trazem necessariamente um rótulo binário de falha em cada linha; relatórios de evento precisam ser alinhados com timestamps e regras de rotulagem explícitas. O exercício de prever próximo TP2 ensina previsão/janelamento, não prova que o modelo detecta falha.
- **Não comparar métricas diretamente** entre tarefas/datasets diferentes sem esclarecer alvo, prevalência, horizonte e protocolo de validação.

### Semanas 15 e 16 — Projeto ADS Factory Hub: aplicação responsável

- Defina sinais, população de operação, alvo ou score, janela temporal e critério do que contará como anomalia/alerta.
- Construa pipeline reproduzível de preparo e modelo; registre versão dos dados, atributos, partições, hiperparâmetros, limiar e métricas.
- Exponha ao serviço/painel uma saída interpretável operacionalmente: identificador do equipamento, timestamp, classe ou score, limiar aplicado, versão do modelo e contexto relevante.
- Valide cenários normais, anômalos e mudanças de regime; registre limitações e evidências de integração.
- Apresente o modelo como apoio à priorização/inspeção. Um classificador não demonstra causalidade; score de anomalia não é diagnóstico nem autorização automática para ação de segurança.
- Monitore qualidade dos sensores, prevalência, falsos alarmes, falhas não detectadas e mudança de distribuição. Se o processo mudar, reavalie o desempenho antes de confiar no modelo.

---

## 3. Glossário de Termos Essenciais

| Termo | Definição |
| :--- | :--- |
| **MLP** | Rede neural de camadas densas que transforma um vetor de atributos por combinações ponderadas e ativações. |
| **Neurônio** | Unidade que calcula soma ponderada, viés e função de ativação. |
| **Peso / viés** | Parâmetros aprendidos; peso controla contribuição das entradas, viés desloca a ativação. |
| **Ativação** | Função aplicada ao resultado do neurônio, como ReLU ou sigmoid. |
| **Forward pass** | Cálculo da saída do modelo a partir das entradas e dos parâmetros atuais. |
| **Loss** | Quantidade otimizada durante o treinamento para representar erro segundo uma função definida. |
| **Backpropagation** | Cálculo de gradientes da perda em relação aos parâmetros, pela regra da cadeia. |
| **Época / batch** | Uma passagem pelos dados de treino / subconjunto usado numa atualização dos parâmetros. |
| **Overfitting** | Ajuste excessivo ao treino que não se traduz em generalização para dados novos. |
| **Early stopping** | Interrupção quando a validação deixa de melhorar, para limitar treinamento sem ganho. |
| **StandardScaler** | Padroniza variável usando média e desvio padrão aprendidos na partição de treino. |
| **Vazamento de dados** | Uso indevido, no preparo/treino, de informação que não estaria disponível na previsão ou que pertence à avaliação. |
| **Baseline** | Método simples de referência que ajuda a julgar se o modelo sofisticado acrescenta valor. |
| **Limiar** | Corte aplicado a score/probabilidade para converter classificação em decisão. |
| **MAE / RMSE** | Erros de regressão; MAE usa erro absoluto, RMSE penaliza mais erros grandes e está na unidade alvo. |
| **Janela temporal** | Bloco ordenado de observações passadas usado para formar entrada de um modelo sequencial. |
| **CNN 1D** | Rede convolucional que aprende padrões locais ao percorrer sequência unidimensional. |
| **LSTM** | Rede recorrente com estado interno voltada a sequências com dependências temporais. |
| **Autoencoder** | Modelo que aprende reconstruir a entrada; erro de reconstrução pode ser usado como score de anomalia. |
| **Score de anomalia** | Medida de estranheza/incompatibilidade com padrão aprendido; não confirma causa ou falha. |
| **Deriva (drift)** | Mudança na distribuição dos dados ou na relação entre entradas e alvo ao longo do tempo. |

---

## 4. Simulado de Revisão P2 (12 Questões)

### Questão 01 (Múltipla Escolha — Formulação do problema)
Uma equipe quer estimar o valor de vibração que será medido no ciclo seguinte, para planejar inspeções. Qual formulação corresponde à tarefa?

A) Classificação binária, pois todo valor pode ser alto ou baixo.
B) Regressão, com alvo contínuo no ciclo seguinte e entradas disponíveis no instante da previsão.
C) Agrupamento, sem definir alvo, obrigatoriamente.
D) Classificação supervisionada com identificador do produto como alvo.

### Questão 02 (Múltipla Escolha — Escalonamento e vazamento)
Para treinar uma MLP, a equipe pretende padronizar variáveis numéricas e separar dados em treino, validação e teste. Qual procedimento evita vazamento?

A) Ajustar o scaler no conjunto completo antes de qualquer divisão.
B) Ajustar o scaler somente no treino e aplicar os parâmetros aprendidos à validação e ao teste.
C) Padronizar cada observação de teste usando sua própria média e desvio, refazendo o modelo.
D) Usar o teste para selecionar as variáveis mais importantes.

### Questão 03 (Múltipla Escolha — Mecanismo de aprendizagem)
Qual descrição do treinamento de uma MLP está correta?

A) Backpropagation calcula métricas no teste e não altera os pesos.
B) Forward pass calcula saídas; a perda quantifica erro; backpropagation calcula gradientes e o otimizador atualiza os parâmetros.
C) O otimizador define o alvo e substitui a função de perda.
D) Cada época usa somente os dados de teste.

### Questão 04 (Múltipla Escolha — Overfitting)
A perda de treino continua diminuindo, enquanto a perda de validação deixa de diminuir e começa a subir. Qual interpretação é mais adequada?

A) O modelo necessariamente melhorou para novos dados.
B) Há sinal de overfitting; pode-se interromper/regularizar e rever generalização sem consultar repetidamente o teste.
C) A validação deve ser misturada ao teste.
D) Basta adicionar mais camadas para corrigir.

### Questão 05 (Múltipla Escolha — Classes desbalanceadas)
Em 10.000 ciclos, houve 20 falhas. Um modelo prevê todos como normais. Qual conclusão está correta?

A) A acurácia de 99,8% comprova que o modelo é excelente.
B) Recall das falhas é zero apesar da acurácia alta; é preciso considerar métricas da classe positiva e custo de erros.
C) Precisão é 100%, porque não emitiu falso alarme.
D) F1 é sempre igual à acurácia.

### Questão 06 (Múltipla Escolha — Limiar de decisão)
O custo de uma falha não detectada é elevado. A equipe reduz o limiar de classificação de 0,5 para 0,3. Qual tendência é esperada, em geral?

A) Mais observações serão marcadas como positivas; recall tende a subir e falsos positivos podem aumentar.
B) Recall cai necessariamente a zero e precisão sempre aumenta.
C) O modelo altera seus pesos automaticamente com a mudança do limiar.
D) O limiar corrige vazamento ocorrido no treino.

### Questão 07 (Múltipla Escolha — Classificação versus regressão)
Qual par tarefa–saída é coerente?

A) Prever falha/sem falha → regressão contínua; prever vibração → classificação binária.
B) Prever falha/sem falha → classificação; estimar vibração em mm/s → regressão.
C) Ambas são agrupamento, pois usam sensores.
D) A escolha depende apenas da arquitetura, não do alvo.

### Questão 08 (Múltipla Escolha — Vazamento industrial)
O alvo é `Machine failure`. Uma coluna de entrada descreve o modo de falha preenchido depois que a falha foi confirmada. O que fazer?

A) Manter a coluna porque aumenta a acurácia.
B) Excluí-la das entradas de previsão, pois ela revela informação posterior ao evento/alvo.
C) Usá-la só no teste.
D) Convertê-la para escala padrão.

### Questão 09 (Associação — Arquitetura e forma do dado)
Associe o modelo à descrição mais apropriada:

| Coluna A | Coluna B |
| :--- | :--- |
| (1) MLP | ( ) Aprende reconstrução de exemplos considerados normais; erro pode ser score exploratório |
| (2) CNN 1D | ( ) Camadas densas para vetor de atributos tabulares |
| (3) LSTM | ( ) Filtros aprendem padrões locais em observações vizinhas da sequência |
| (4) Autoencoder | ( ) Processamento ordenado com estado interno para histórico sequencial |

A) 4 - 1 - 2 - 3
B) 1 - 2 - 3 - 4
C) 2 - 4 - 1 - 3
D) 3 - 1 - 4 - 2

### Questão 10 (Associação — Métrica e uso)
Relacione a métrica com a interpretação:

| Coluna A | Coluna B |
| :--- | :--- |
| (1) Recall | ( ) Penaliza mais fortemente erros grandes e permanece na unidade do alvo |
| (2) Precisão | ( ) Fração de falhas reais detectadas |
| (3) RMSE | ( ) Proporção de alertas emitidos que eram positivos reais |
| (4) Acurácia | ( ) Fração total de previsões corretas; pode ocultar falha rara |

A) 3 - 1 - 2 - 4
B) 1 - 2 - 3 - 4
C) 4 - 3 - 2 - 1
D) 2 - 1 - 4 - 3

### Questão 11 (Discursiva — Comparação de MLP e Random Forest)
Descreva um protocolo justo para comparar uma MLP com Random Forest em classificação de falhas raras. Inclua partições, preparo, baseline, métricas, limiar e como evitar que o conjunto de teste influencie a escolha.

### Questão 12 (Discursiva — Séries temporais e arquitetura)
Uma equipe tem cinco sinais de sensores ordenados no tempo e deseja prever o próximo valor de pressão e, em outro estudo, sinalizar comportamento anômalo. Explique como formar e dividir janelas sem vazamento; compare MLP, CNN 1D, LSTM e autoencoder; indique o que seria necessário para afirmar que o score detecta falha.

---

## 5. Gabarito Comentado e Padrão de Resposta

**01. B** — estimar vibração numérica futura é regressão. As entradas devem estar disponíveis no momento em que a previsão será feita.

**02. B** — scaler aprende média/desvio no treino; aplica os mesmos parâmetros às outras partições. Ajustá-lo no conjunto todo incorpora informação de validação/teste.

**03. B** — a propagação direta gera saída, a perda quantifica erro, backpropagation obtém gradientes e o otimizador atualiza parâmetros no treino.

**04. B** — divergência entre treino e validação sinaliza que continuar aprendendo pode memorizar o treino. Early stopping e regularização são opções, verificadas sem usar o teste para decisões repetidas.

**05. B** — 9.980/10.000 = 99,8% de acurácia, mas nenhuma das 20 falhas foi detectada; recall da classe falha = 0/20 = 0%.

**06. A** — baixar o limiar amplia o conjunto previsto positivo. Em geral, detecta mais positivos, mas aumenta falsos alarmes. A tendência precisa ser medida na validação.

**07. B** — classe discreta é classificação; valor numérico contínuo é regressão.

**08. B** — um modo de falha determinado depois do evento não estaria disponível antes da previsão e pode codificar diretamente o alvo: vazamento.

**09. A** — autoencoder (4), MLP (1), CNN 1D (2), LSTM (3): sequência 4-1-2-3.

**10. A** — RMSE (3), recall (1), precisão (2), acurácia (4): sequência 3-1-2-4.

**11. Padrão de resposta:** defina mesma unidade, alvo e momento de previsão; faça uma divisão estratificada adequada (ou temporal/por máquina se o contexto exigir); mantenha treino, validação e teste separados. Construa pipeline de imputação/codificação/escalonamento ajustado apenas no treino; a MLP precisa de escala, Random Forest normalmente não. Compare também com baseline simples. Escolha hiperparâmetros e limiar na validação, priorizando métricas coerentes com custo de FN/FP (por exemplo recall, precisão, F1/F2, PR-AUC e matriz de confusão). Congele as decisões e avalie no teste uma única vez. Reporte custo/capacidade operacional, não só acurácia.

**12. Padrão de resposta:** ordene por tempo, verifique lacunas e regimes, faça corte cronológico e ajuste transformações só no treino; crie entradas com passado e alvo posterior, sem janelas cruzando a fronteira. MLP usa vetor tabular ou atributos da janela; CNN 1D aprende padrões locais; LSTM mantém estado para dependências sequenciais; autoencoder pode gerar erro de reconstrução como score quando há exemplos normais. Para dizer que o score detecta falha, é preciso alinhar eventos/rótulos ao tempo, definir antecedência e unidade de avaliação, validar limiar em dados separados e medir resultados contra baseline e custos. Score alto sozinho não prova defeito nem causa.

---

## 6. Dicas Estratégicas para o Dia da Prova

1. **Comece pela pergunta de negócio:** identifique alvo, unidade, horizonte e momento da previsão antes de escolher arquitetura.
2. **Distinga classificação e regressão pelo alvo:** classe discreta pede métricas de classe; valor contínuo pede MAE/RMSE e inspeção de resíduos.
3. **Explique o treinamento com sequência causal:** forward pass → perda → gradiente/backpropagation → atualização dos pesos.
4. **Não confunda acurácia com detecção de falha:** conte VP, FN, FP e VN; explique o custo de cada erro.
5. **Justifique o limiar:** probabilidades não são decisões até um corte ser escolhido. Escolha na validação conforme capacidade/custo.
6. **Proteja o teste:** não use teste para scaler, imputação, seleção de atributos, ajuste de hiperparâmetros ou limiar.
7. **Para séries, preserve o tempo:** corte cronologicamente, evite embaralhar janelas vizinhas e nunca deixe o futuro nas entradas.
8. **Compare ao baseline:** explique o ganho obtido e se compensa a complexidade, custo de execução e manutenção da MLP.
9. **Escolha arquitetura conforme os dados:** MLP para tabela; CNN 1D para padrões locais; LSTM para dependência sequencial justificável; autoencoder para score exploratório com normalidade de referência.
10. **Use linguagem responsável:** probabilidade ou score é evidência para priorização, não certeza causal ou diagnóstico automático.

---

## Materiais para Estudo Dirigido

1. [Semana 10 — Fundamentos e treinamento da MLP](Aulas/semana_10.ipynb): neurônio, camadas, perda, backpropagation, padronização e comparação com Random Forest.
2. [Semana 12 — MLP para classificação e regressão](Aulas/semana_12.ipynb): definição dos problemas, avaliação, baseline, implantação e monitoramento.
3. [Semana 13 — Escolha de redes neurais para dados industriais](Aulas/semana_13.ipynb): AI4I, MetroPT-3, preparação sem vazamento, janelas e arquiteturas sequenciais.
4. [Exercícios de séries temporais](Materiais/Laboratorio_Series_Temporais_Exercicios.ipynb): prática complementar com séries e métodos temporais.
5. [Plano e cronograma da unidade](README.md): escopo de P2 e etapas do ADS Factory Hub.
6. [Guia de estudo P1](GUIA_ESTUDO_P1.md): revise métricas, estatística e CRISP-DM quando precisar recuperar fundamentos.

### Ordem de revisão sugerida

- **Primeiro:** leia as Semanas 10 e 12 e consiga explicar à mão o fluxo forward pass → perda → gradiente → atualização.
- **Depois:** refaça a interpretação de matriz de confusão, curvas precisão-recall, limiar e métricas de regressão com os cenários do simulado.
- **Em seguida:** estude a Semana 13 e desenhe um exemplo de janela temporal, seu alvo futuro e uma divisão cronológica correta.
- **Por fim:** responda às discursivas sem consultar o gabarito e justifique as decisões pelo uso industrial e custo de erros.
