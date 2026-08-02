window.lessonTheoriesCienciaDados = window.lessonTheories = {
    1: [{
        biblio: "Grus (2021), Cap.1; McKinney (2023), Cap.5",
        title: "1. O Ciclo de Vida da Ciência de Dados & CRISP-DM Industrial",
        objetivos: [
            "Compreender as 6 fases da metodologia CRISP-DM.",
            "Realizar a ingestão primária de dados industriais em DataFrames Pandas.",
            "Identificar atrito de dados e falhas de qualidade no chão de fábrica."
        ],
        contexto: "Na indústria 4.0, dados brutos oriundos de sensores fabris precisam ser estruturados seguindo o padrão CRISP-DM antes de alimentarem dashboards de tomada de decisão.",
        theory: `A Ciência de Dados aplica métodos científicos para extrair valor de dados industriais. O padrão global CRISP-DM compreende 6 etapas iterativas:
1. Business Understanding: Definição do problema de produção e metas de OEE.
2. Data Understanding: Ingestão primária e inspeção das colunas de telemetria.
3. Data Preparation: Limpeza, engenharia de atributos e tratamento de nulos.
4. Modeling: Algoritmos de regressão, classificação ou agrupamento.
5. Evaluation: Validação estatística frente às metas operacionais.
6. Deployment: Publicação do modelo preditivo em esteiras MLOps.`,
        code: `import pandas as pd
df = pd.DataFrame({
    "Part_ID": ["P100", "P101", "P102"],
    "Temp": [70.2, 85.4, 71.1],
    "Defect": ["Não", "Sim", "Não"]
})
print("Fase Data Understanding - Dimensões:", df.shape)
print(df.head(2))`,
        output: `Fase Data Understanding - Dimensões: (3, 3)
  Part_ID  Temp Defect
0    P100  70.2    Não
1    P101  85.4    Sim`,
        interpretation: "O DataFrame organiza 3 observações de peças com temperatura e presença de defeito, iniciando o ciclo CRISP-DM.",
        desafio: "Carregue o dataset manufacturing_quality.csv e identifique o número de colunas numéricas vs categóricas.",
        dicas: "Utilize df.info() e df.describe() como primeiro passo obrigatório ao abrir qualquer dataset de manufatura.",
        projeto: "Fornece a base de dados de qualidade utilizada nos relatórios analíticos do FactoryHub.",
        timeline: {
            antes: "Coleta manual de dados em planilhas dispersas.",
            durante: "Implementação da metodologia CRISP-DM e ingestão via Pandas.",
            depois: "Pipeline estruturado de Ciência de Dados pronto para análise."
        },
        integracao: {
            automacao: "Consome registros persistidos a partir da telemetria MQTT.",
            nuvem: "Lê arquivos armazenados nos buckets do Cloud Storage.",
            devops: "Executa validações automatizadas de código em testes de CI."
        }
    }],

    2: [{
        biblio: "Bussab & Morettin (2013), Cap.1; McKinney (2023), Cap.7",
        title: "2. Taxonomia de Dados, Amostragem e Qualidade",
        objetivos: [
            "Classificar dados industriais em categóricos (nominais/ordinais) e numéricos (discretos/contínuos).",
            "Aplicar métodos de amostragem estatística.",
            "Detectar e imputar valores ausentes (NaN)."
        ],
        contexto: "Em linhas de produção de alta velocidade, a amostragem adequada e o tratamento de medições ausentes garantem análises estatísticas sem viés.",
        theory: `Taxonomia de Dados Industriais:
• Categóricos Nominais: Turno (Manhã, Tarde, Noite), Cor da Peça (Azul, Vermelho).
• Categóricos Ordinais: Severidade do Defeito (Baixa, Média, Alta).
• Numéricos Discretos: Contagem de peças defeituosas (0, 1, 2...).
• Numéricos Contínuos: Temperatura (ºC), Pressão (bar), Ciclo (segundos).

Amostragem Aleatória Simples e Estratificada garantem representatividade dos turnos de trabalho.`,
        code: `import pandas as pd
data = {"Sensor": ["T1", "T2", "T3", "T4"], "Valor": [72.1, None, 74.5, 73.0]}
df = pd.DataFrame(data)
print("Valores Ausentes por Coluna:")
print(df.isnull().sum())
df["Valor_Imputado"] = df["Valor"].fillna(df["Valor"].mean())
print("\nDataFrame com Imputação da Média:")
print(df)`,
        output: `Valores Ausentes por Coluna:
Sensor    0
Valor     1
dtype: int64

DataFrame com Imputação da Média:
  Sensor  Valor  Valor_Imputado
0     T1   72.1       72.100000
1     T2    NaN       73.200000
2     T3   74.5       74.500000
3     T4   73.0       73.000000`,
        interpretation: "A imputação pela média preencheu a falha de medição no sensor T2 sem alterar o centro da distribuição.",
        desafio: "Compare o impacto da imputação pela média vs imputação pela mediana em uma coluna com outliers extremos.",
        dicas: "Nunca elimine linhas com valores nulos sem antes analisar a proporção de perda em relação ao total de registros.",
        projeto: "Trata dados brutos de amostragem na central de análise CSV do FactoryHub.",
        timeline: {
            antes: "Relatórios incorretos devidos a dados ausentes não tratados.",
            durante: "Classificação das variáveis e imputação de valores ausentes.",
            depois: "Dataset limpo e pronto para cálculos de tendência central."
        },
        integracao: {
            automacao: "Identifica falhas de comunicação em sensores específicos.",
            nuvem: "Otimiza a memória dos DataFrames hospedados em nuvem.",
            devops: "Garante pipelines robustas contra entradas nulas."
        }
    }],

    3: [{
        biblio: "Bussab & Morettin (2013), Cap.2; McKinney (2023), Cap.5",
        title: "3. Limpeza, Preparação e Estatística Descritiva",
        objetivos: [
            "Calcular medidas de tendência central (Média, Mediana, Moda).",
            "Calcular medidas de dispersão (Variância, Desvio Padrão, Amplitude).",
            "Identificar assimetria em distribuições de variáveis físicas."
        ],
        contexto: "As estatísticas descritivas resumem milhares de medições de sensores em números-chave que indicam a estabilidade do processo produtivo.",
        theory: `Medidas Estatísticas Fundamentais:
• Média: Centro de gravidade dos dados (sensível a outliers).
• Mediana: Valor central que divide 50% dos dados (robusta a outliers).
• Desvio Padrão (sigma): Medida da variabilidade em relação à média.
• Coeficiente de Variação (CV%): (Desvio Padrão / Média) × 100%, permitindo comparar variáveis com unidades distintas.`,
        code: `import numpy as np
temps = [71.2, 72.0, 71.8, 85.0, 71.5] # 85.0 é um outlier
print(f"Média: {np.mean(temps):.2f} ºC")
print(f"Mediana: {np.median(temps):.2f} ºC")
print(f"Desvio Padrão: {np.std(temps):.2f} ºC")`,
        output: `Média: 74.30 ºC
Mediana: 71.80 ºC
Desvio Padrão: 5.37 ºC`,
        interpretation: "A diferença entre média (74.3) e mediana (71.8) indica assimetria positiva provocada pelo outlier de 85ºC.",
        desafio: "Calcule o intervalo interquartil (IQR = Q3 - Q1) das temperaturas da prensa.",
        dicas: "Se a média e a mediana forem muito distantes, utilize a mediana como medida de centro representativa.",
        projeto: "Alimenta os cartões estatísticos de tendência central no FactoryHub.",
        timeline: {
            antes: "Análise restrita à observação de valores brutos.",
            durante: "Cálculo de média, mediana e desvio padrão das variáveis.",
            depois: "Visão sintética e precisa da estabilidade da linha."
        },
        integracao: {
            automacao: "Define faixas nominais de operação para alarme.",
            nuvem: "Gera resumos descritivos enviados via API REST.",
            devops: "Automatiza a geração de relatórios estáticos em CI."
        }
    }],

    4: [{
        biblio: "Bussab & Morettin (2013), Cap.6; McKinney (2023), Cap.9",
        title: "4. Análise Exploratória de Dados (EDA) & Distribuições",
        objetivos: [
            "Conhecer a Distribuição Normal (Gaussiana) e a Regra Empírica 68-95-99.7.",
            "Detectar outliers utilizando o método Boxplot (IQR).",
            "Avaliar a normalidade dos dados através de gráficos Q-Q Plot."
        ],
        contexto: "Na fabricação mecânica, peças sob controle estatístico de processo (CEP) devem seguir uma distribuição normal centrada no valor nominal de projeto.",
        theory: `Distribuição Normal e Outliers:
• Distribuição Normal: Curva simétrica em forma de sino definida por Média e Desvio Padrão.
• Outliers via IQR: Valores abaixo de Q1 - 1.5×IQR ou acima de Q3 + 1.5×IQR.
• Regra 68-95-99.7: 68% dos dados estão dentro de ±1 sigma, 95% em ±2 sigmas e 99.7% em ±3 sigmas.`,
        code: `import numpy as np
q1, q3 = 70.0, 75.0
iqr = q3 - q1
limite_sup = q3 + 1.5 * iqr
print(f"IQR: {iqr} | Limite Superior para Outliers: {limite_sup}")`,
        output: `IQR: 5.0 | Limite Superior para Outliers: 82.5`,
        interpretation: "Qualquer temperatura registrada acima de 82.5ºC é considerada estatisticamente um outlier de processo.",
        desafio: "Gere 1000 amostras de uma distribuição normal com média=72 e desvio=3 e verifique o percentual entre 69 e 75.",
        dicas: "Sempre plote um histograma ou densidade antes de aplicar testes paramétricos.",
        projeto: "Utilizado nos gráficos de distribuição e detecção de anomalias no FactoryHub.",
        timeline: {
            antes: "Desconhecimento da forma da distribuição das medições.",
            durante: "Aplicação da EDA e regra empírica da curva normal.",
            depois: "Identificação precisa de desvios e limites de tolerância."
        },
        integracao: {
            automacao: "Ajusta limites de corte de alarmes com base na variabilidade.",
            nuvem: "Plota gráficos de distribuição serverless.",
            devops: "Integra scripts de auditoria em rotinas automatizadas."
        }
    }],

    5: [{
        biblio: "Bussab & Morettin (2013), Cap.10; McKinney (2023), Cap.7",
        title: "5. Visualização de Dados Industriais em Python",
        objetivos: [
            "Construir gráficos de linha, dispersão, histogramas e boxplots com Matplotlib/Seaborn.",
            "Personalizar eixos, legendas, títulos e paletas de cores industriais.",
            "Exportar gráficos interativos Plotly para a web."
        ],
        contexto: "Gráficos bem projetados traduzem tabelas extensas em insights visuais imediatos para engenheiros e gestores.",
        theory: `Gramática das Visualizações Visuais:
• Histogramas: Mostram a forma da distribuição de frequência de uma variável contínua.
• Boxplots: Exibem mediana, quartis e outliers de forma compacta.
• Gráficos de Dispersão (Scatter Plot): Revelam a relação entre duas variáveis contínuas (ex: Pressão vs Temperatura).
• Gráficos de Linha: Exibem a evolução de variáveis ao longo do tempo.`,
        code: `import matplotlib.pyplot as plt
temps = [71.0, 72.5, 73.1, 71.8, 74.0]
plt.figure(figsize=(5,2))
plt.plot(temps, marker='o', color='green')
plt.title("Temperatura da Prensa (ºC)")
plt.close() # Simulado sem janela gráfica
print("Gráfico de linha gerado com sucesso!")`,
        output: `Gráfico de linha gerado com sucesso!`,
        interpretation: "O gráfico de linha permite acompanhar a tendência de aquecimento da máquina ciclo a ciclo.",
        desafio: "Crie um Boxplot comparando a distribuição de temperatura entre os 3 turnos de trabalho.",
        dicas: "Evite poluição visual (chartjunk). Escolha cores contrastantes e legíveis para daltonistas.",
        projeto: "Gera a renderização gráfica no painel da Central de Análise CSV do FactoryHub.",
        timeline: {
            antes: "Visualização limitada a tabelas de texto plano.",
            durante: "Construção de gráficos em Matplotlib, Seaborn e Plotly.",
            depois: "Dashboards visuais interativos embarcados na aplicação web."
        },
        integracao: {
            automacao: "Visualização direta dos dados de sensores coletados.",
            nuvem: "Gera arquivos HTML/JSON de gráficos Plotly servidos na nuvem.",
            devops: "Automatiza a publicação de relatórios visuais estáticos."
        }
    }],

    6: [{
        biblio: "Bussab & Morettin (2013), Cap.12; McKinney (2023), Cap.13",
        title: "6. KPIs Industriais & Cálculo de Taxas de Qualidade",
        objetivos: [
            "Agregar dados de produção por grupos (GroupBy Pandas).",
            "Calcular indicadores de desempenho (KPIs) e taxa de defeito.",
            "Construir matrizes de confusão para peças aprovadas/rejeitadas."
        ],
        contexto: "O agrupamento de dados por máquina, operador ou turno permite identificar unidades de produção com menor eficiência ou maior descarte.",
        theory: `Agregação e KPIs Fabris:
A operação groupby em DataFrames divide o dataset em grupos, aplica funções de agregação (soma, média, contagem) e combina os resultados:
• Taxa de Defeito (%) = (Peças com Defeito / Total Produzido) × 100
• Tempo Médio entre Falhas (MTBF): Tempo total produtivo / Número de paradas.`,
        code: `import pandas as pd
df = pd.DataFrame({
    "Maquina": ["M1", "M1", "M2", "M2"],
    "Defeito": [0, 1, 0, 0]
})
print(df.groupby("Maquina")["Defeito"].agg(["count", "sum"]))`,
        output: `         count  sum
Maquina            
M1           2    1
M2           2    0`,
        interpretation: "A máquina M1 apresenta 1 defeito em 2 peças (50% de descarte), indicando necessidade de calibração.",
        desafio: "Calcule a média de tempo de produção agrupada por tipo de operador.",
        dicas: "Combine groupby com .agg() para aplicar múltiplas funções estatísticas simultaneamente (ex: mean e std).",
        projeto: "Alimenta os cartões de KPIs principais na página inicial do FactoryHub.",
        timeline: {
            antes: "Métricas globais sem detalhamento por equipamento.",
            durante: "Implementação de agregações dinâmicas com Pandas.",
            depois: "Indicadores chave de desempenho detalhados por categoria."
        },
        integracao: {
            automacao: "Consome os contadores das estações da Smart N1.",
            nuvem: "Fornece dados estruturados para a API de KPIs no Cloud Run.",
            devops: "Testes automatizados garantem a precisão das agregações."
        }
    }],

    7: [{
        biblio: "Bussab & Morettin (2013), Cap.4; McKinney (2023), Cap.10",
        title: "7. Estatística Inferencial & Testes de Hipóteses Formais",
        objetivos: [
            "Formular Hipótese Nula (H0) e Hipótese Alternativa (H1).",
            "Interpretar o p-valor em testes estatísticos (alfa = 0.05).",
            "Aplicar testes de normalidade (Shapiro-Wilk) e correlação (Pearson/Spearman)."
        ],
        contexto: "A estatística inferencial permite comprovar cientificamente se a mudança em uma regulagem de máquina alterou significativamente a qualidade da peça.",
        theory: `Testes de Hipóteses Formais:
• H0 (Hipótese Nula): Não há diferença significativa entre os grupos.
• H1 (Hipótese Alternativa): Existe diferença significativa.
• p-valor < 0.05: Rejeita-se H0 com 95% de confiança estatística.
• Teste Shapiro-Wilk: Avalia se uma amostra provém de uma população normal.`,
        code: `from scipy import stats
dados = [71.2, 72.0, 71.8, 72.3, 71.9]
stat, p_valor = stats.shapiro(dados)
print(f"Shapiro-Wilk Stat: {stat:.4f} | p-valor: {p_valor:.4f}")
print("Conclusão:", "Normal" if p_valor > 0.05 else "Não Normal")`,
        output: `Shapiro-Wilk Stat: 0.9754 | p-valor: 0.9097
Conclusão: Normal`,
        interpretation: "Com p-valor de 0.9097 (> 0.05), aceita-se H0: as medições de temperatura seguem distribuição normal.",
        desafio: "Execute um teste t de Student para comparar a temperatura média entre o Turno 1 e o Turno 2.",
        dicas: "Nunca tome decisões fabris baseadas apenas em médias amostrais sem verificar o p-valor e a variabilidade.",
        projeto: "Utilizado nas análises avançadas da central de estatística do FactoryHub.",
        timeline: {
            antes: "Conclusões empíricas baseadas em achismos operacionais.",
            durante: "Aplicação de testes de hipóteses formais com SciPy.",
            depois: "Tomada de decisão comprovada estatisticamente."
        },
        integracao: {
            automacao: "Valida se novos sensores reduziram a variabilidade de processo.",
            nuvem: "Processamento de inferência estatística em Python na nuvem.",
            devops: "Valida modelos de inferência em rotinas de teste CI."
        }
    }],

    8: [{
        biblio: "Bussab & Morettin (2013), Cap.15; McKinney (2023), Cap.11",
        title: "8. Análise de Séries Temporais & Decomposição",
        objetivos: [
            "Trabalhar com índices de data/hora (DatetimeIndex) em Pandas.",
            "Decompor séries temporais em Tendência, Sazonalidade e Ruído.",
            "Calcular Médias Móveis para suavização de ruídos de sensores."
        ],
        contexto: "A telemetria industrial é uma série temporal contínua. Identificar tendências de desgaste de ferramentas evita falhas inesperadas.",
        theory: `Componentes de Séries Temporais:
• Tendência (T): Direção de longo prazo da variável (subida, queda ou estabilidade).
• Sazonalidade (S): Padrões repetitivos em intervalos fixos (ex: ciclos por turno/hora).
• Ruído (R): Oscilações aleatórias residuais.
• Média Móvel: Suaviza flutuações de alta frequência revelando a tendência subjacente.`,
        code: `import pandas as pd
datas = pd.date_range(start="2026-08-02", periods=5, freq="H")
valores = [70, 72, 71, 75, 78]
ts = pd.Series(valores, index=datas)
print("Série Temporal Suavizada (Média Móvel N=2):")
print(ts.rolling(window=2).mean())`,
        output: `Série Temporal Suavizada (Média Móvel N=2):
2026-08-02 00:00:00     NaN
2026-08-02 01:00:00    71.0
2026-08-02 02:00:00    71.5
2026-08-02 03:00:00    73.0
2026-08-02 04:00:00    76.5
dtype: float64`,
        interpretation: "A média móvel evidencia a tendência clara de elevação da temperatura a partir de 01:00h.",
        desafio: "Ressemplifique (resample) uma série de minutos para intervalos de 1 hora calculando a média e o máximo.",
        dicas: "Certifique-se de que a coluna de tempo seja convertida para datetime64 antes de definir o índice.",
        projeto: "Alimenta os gráficos de evolução temporal do FactoryHub.",
        timeline: {
            antes: "Visualização de medições isoladas sem contexto temporal.",
            durante: "Conversão para DatetimeIndex e cálculo de médias móveis.",
            depois: "Detecção precoce de tendências de degradação da máquina."
        },
        integracao: {
            automacao: "Monitora deriva de calibração em sensores industriais.",
            nuvem: "Processa grandes volumes de logs ordenados por tempo.",
            devops: "Monitora latência de deploys em séries temporais DORA."
        }
    }],

    9: [{
        biblio: "McKinney (2023), Cap.10, 12; Bussab & Morettin (2013), Cap.2",
        title: "9. Storytelling com Dados & Apresentação Analítica",
        objetivos: [
            "Estruturar narrativas analíticas focadas no problema de negócio.",
            "Utilizar o princípio da pirâmide (Conclusão -> Evidências -> Detalhes).",
            "Construir dashboards com hierarquia visual clara."
        ],
        contexto: "Análises técnicas avançadas só geram impacto quando comunicadas com clareza para tomadores de decisão operacionais e executivos.",
        theory: `Pilares do Storytelling com Dados Industriais:
1. Contexto: Qual era o problema operacional na fábrica?
2. Evidência: Dados estatísticos e gráficos que comprovam a causa raiz.
3. Ação: Qual recomendação prática deve ser tomada (ex: trocar fornecedor, recalibrar prensa).
4. Impacto: Estimativa de ganho financeiro ou aumento percentual de OEE.`,
        code: `relatorio = {
    "problema": "Alta taxa de descarte no Turno Noite",
    "causa_raiz": "Temperatura da caldeira cai 5ºC durante a madrugada",
    "recomendacao": "Instalar isolamento térmico adicional",
    "ganho_estimado_oee": "+4.2%"
}
for k, v in relatorio.items():
    print(f"{k.upper()}: {v}")`,
        output: `PROBLEMA: Alta taxa de descarte no Turno Noite
CAUSA_RAIZ: Temperatura da caldeira cai 5ºC durante a madrugada
RECOMENDACAO: Instalar isolamento térmico adicional
GANHO_ESTIMADO_OEE: +4.2%`,
        interpretation: "A síntese analítica conecta a evidência estatística à ação de engenharia e ganho financeiro.",
        desafio: "Elabore um sumário executivo em 3 frases explicando o principal ofensor de paradas do turno.",
        dicas: "Destaque a informação mais importante usando contraste visual e evite excesso de dados irrelevantes na tela.",
        projeto: "Base para a geração de relatórios exportáveis na Central de Análise do FactoryHub.",
        timeline: {
            antes: "Apresentação de tabelas brutas sem direcionamento prático.",
            durante: "Estruturação da narrativa de Storytelling com Dados.",
            depois: "Comunicação clara de causa raiz e ações recomendadas."
        },
        integracao: {
            automacao: "Traduz eventos de automação em linguagem de negócios.",
            nuvem: "Gera relatórios executivos hospedados na web.",
            devops: "Facilita a apresentação de métricas de engenharia DORA."
        }
    }],

    10: [{
        biblio: "McKinney (2023), Cap.9; Bussab & Morettin (2013), Cap.2",
        title: "10. Pipeline de Relatório Analítico Completo",
        objetivos: [
            "Integrar ingestão, limpeza, EDA, estatística e visualização em uma pipeline.",
            "Gerar relatórios de qualidade em formatos exportáveis (CSV/JSON/HTML).",
            "Automatizar o processamento de novos datasets industriais."
        ],
        contexto: "A consolidação do conhecimento em uma pipeline reutilizável permite analisar novos lotes de produção com um único comando.",
        theory: `Estrutura de uma Pipeline Analítica:
1. Ingestão: Leitura de dados brutos da fábrica.
2. Tratamento: Imputação de nulos e remoção de duplicatas.
3. Processamento: Cálculo de médias, desvios e KPIs.
4. Exportação: Geração do relatório sintético e gráficos Plotly.`,
        code: `def pipeline_analitica(dados):
    df = pd.DataFrame(dados)
    limpo = df.dropna()
    resumo = limpo.groupby("Shift")["Temp"].mean().to_dict()
    return {"status": "SUCCESS", "resumo": resumo}

dados_brutos = [{"Shift": "M", "Temp": 71.5}, {"Shift": "M", "Temp": 72.0}, {"Shift": "N", "Temp": 68.0}]
print(pipeline_analitica(dados_brutos))`,
        output: `{'status': 'SUCCESS', 'resumo': {'M': 71.75, 'N': 68.0}}`,
        interpretation: "A pipeline processou os dados brutos e gerou o resumo de temperatura por turno automaticamente.",
        desafio: "Adicione uma etapa de validação na pipeline que emita um aviso caso o dataset contenha menos de 100 linhas.",
        dicas: "Transforme scripts sequenciais em funções modularizadas para facilitar reuso e testes unitários.",
        projeto: "Motor de processamento da Central de Análise CSV do FactoryHub.",
        timeline: {
            antes: "Análises isoladas executadas manualmente passo a passo.",
            durante: "Modularização do código em funções de pipeline.",
            depois: "Automação total da geração de relatórios de produção."
        },
        integracao: {
            automacao: "Processa datasets exportados da fábrica Smart N1.",
            nuvem: "Executa pipelines Serverless em nuvem.",
            devops: "Testado automaticamente em pipelines CI no GitHub Actions."
        }
    }],

    11: [{
        biblio: "Bussab & Morettin (2013), Cap.1-15; McKinney (2023), Cap.1-12",
        title: "11. Apresentação de Insights & Projeto Capstone Final",
        objetivos: [
            "Apresentar as conclusões finais do Projeto Capstone Integrador.",
            "Demonstrar os ganhos de OEE e redução de descarte alcançados.",
            "Consolidar a sinergia entre as 4 disciplinas do ecossistema."
        ],
        contexto: "Sessão de encerramento do semestre apresentando as análises estatísticas e insights obtidos no ecossistema Smart N1.",
        theory: `Consolidação de Insights do Capstone:
Os estudantes apresentam a jornada completa de dados:
• Coleta física na planta Smart N1 (Automação).
• Análise exploratória e modelagem em Python (Ciência de Dados).
• Disponibilização na infraestrutura GCP (Computação em Nuvem).
• Automação de pipelines de deploy e testes (DevOps).`,
        code: `capstone = {
    "dataset": "Smart N1 Quality Data (5000 medições)",
    "insights_principais": [
        "Identificado pico de temperatura como causa raiz de 88% das soldas frias",
        "Ajuste na prensa elevou o OEE de 78% para 85.5%"
    ],
    "status": "PROJETO CONCLUÍDO COM SUCESSO"
}
print("Capstone Final:")
print(f"Status: {capstone['status']}")
for i in capstone['insights_principais']:
    print(f" -> Insight: {i}")`,
        output: `Capstone Final:
Status: PROJETO CONCLUÍDO COM SUCESSO
 -> Insight: Identificado pico de temperatura como causa raiz de 88% das soldas frias
 -> Insight: Ajuste na prensa elevou o OEE de 78% para 85.5%`,
        interpretation: "Os insights analíticos geraram impacto real de engenharia comprovado no OEE final.",
        desafio: "Apresente os 3 principais gráficos Plotly que sustentam as conclusões finais do seu grupo.",
        dicas: "Celebre o aprendizado prático integrando hardware, dados, nuvem e devops na sua formação profissional.",
        projeto: "Entrega final do ecossistema de aprendizado integrado no FactoryHub.",
        timeline: {
            antes: "Conceitos teóricos estudados de forma isolada.",
            durante: "Execução do Projeto Capstone com dados reais da fábrica.",
            depois: "Domínio prático de Ciência de Dados aplicada à Indústria 4.0."
        },
        integracao: {
            automacao: "Comprova os resultados obtidos na célula Smart N1.",
            nuvem: "Hospedado em ambiente de produção oficial.",
            devops: "Entregue através de esteiras de CI/CD em nuvem."
        }
    }]
};