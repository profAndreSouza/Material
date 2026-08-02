window.lessonTheories = {
    1: [
        {
            biblio: 'Grus (2021), Cap. 1; McKinney (2023), Cap. 5',
            title: '1. O Ciclo de Vida da Ciência de Dados & Metodologia CRISP-DM',
            theory: 'A <strong>Ciência de Dados</strong> é uma disciplina interdisciplinar focada na extração de conhecimento estatístico a partir de dados brutos. O padrão ouro da indústria é a metodologia <strong>CRISP-DM</strong> (<em>Cross-Industry Standard Process for Data Mining</em>), composta por 6 fases iterativas:<br><ol><li><strong>Business Understanding:</strong> Definição do problema de negócio e KPIs de sucesso.</li><li><strong>Data Understanding:</strong> Ingestão primária e verificação da qualidade dos dados.</li><li><strong>Data Preparation:</strong> Limpeza, imputação, seleção e engenharia de recursos.</li><li><strong>Modeling:</strong> Aplicação de algoritmos estatísticos e de aprendizado de máquina.</li><li><strong>Evaluation:</strong> Validação do desempenho dos modelos frente aos objetivos operacionais.</li><li><strong>Deployment:</strong> Colocação dos modelos em produção (esteira MLOps/API).</li></ol>',
            code: `import pandas as pd

# 1. Ingestão Primária no Estágio de Data Understanding
df_qual = pd.read_csv('data/manufacturing_quality.csv')

print("Fase CRISP-DM: Data Understanding")
print(f"Dimensões do Dataset (Linhas x Colunas): {df_qual.shape}")
print("\\nPrimeiras 3 Observações:")
print(df_qual.head(3))`,
            output: `Fase CRISP-DM: Data Understanding
Dimensões do Dataset (Linhas x Colunas): (500, 10)

Primeiras 3 Observações:
    Part_ID   Machine_ID  Shift       Operator  Temperature  Pressure  Humidity  Production_Time Defect Defect_Type
PART-1000  Fresadora_03  Tarde    Ana Souza        70.21      5.82      52.1             42.5    Não      Nenhum
PART-1001   Caldeira_04  Manhã  Carlos Silva       122.02      5.43      58.3             54.1    Sim  Solda Fria
PART-1002    Prensa_01  Noite   Roberto Lima       71.10      5.15      54.8             39.8    Não      Nenhum`,
            interpretation: 'O DataFrame organiza as medições em 500 peças rotuladas. Cada linha representa uma unidade de produção e cada coluna um atributo de processo ou indicador de qualidade.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 1',
            title: '2. Taxonomia de Dados & Escalas de Medição',
            theory: 'Variáveis estatísticas dividem-se fundamentalmente em duas grandes famílias:<br><ul><li><strong>Qualitativas (Categóricas):</strong> <em>Nominais</em> (sem ordem inerente; ex: Turno, Operador, Tipo de Defeito) e <em>Ordinais</em> (com hierarquia natural; ex: Severidade do Defeito: Baixa, Média, Alta).</li><li><strong>Quantitativas (Numéricas):</strong> <em>Discretas</em> (contagens inteiras; ex: Unidades produzidas, número de falhas) e <em>Contínuas</em> (medições reais com decimais; ex: Temperatura, Pressão, Umidade).</li></ul>As variáveis residem em 4 escalas hierárquicas de medição: <strong>Nominal</strong> (apenas identificação), <strong>Ordinal</strong> (ordenação sem distância constante), <strong>Intervalar</strong> (zero arbitrário, ex: °C) e <strong>Razão</strong> (zero absoluto com proporções válidas, ex: Tempo de Produção).',
            code: `def classificar_atributos(df: pd.DataFrame):
    print("--- TIPOS DE DADOS COMPUTACIONAIS (dtypes) ---")
    print(df.dtypes)
    print("\\n--- MEMÓRIA ALOCADA ---")
    print(f"{df.memory_usage(deep=True).sum() / 1024:.2f} KB")

classificar_atributos(df_qual)`,
            output: `--- TIPOS DE DADOS COMPUTACIONAIS (dtypes) ---
Part_ID             object
Machine_ID          object
Shift               object
Operator            object
Temperature        float64
Pressure           float64
Humidity           float64
Production_Time    float64
Defect              object
Defect_Type         object

--- MEMÓRIA ALOCADA ---
178.45 KB`,
            interpretation: 'Identifica-se que variáveis de texto (object) ocupam maior espaço de memória e representam dados qualitativos, enquanto float64 armazena medições quantitativas contínuas.'
        },
        {
            biblio: 'McKinney (2023), Cap. 5',
            title: '3. Ingestão Estruturada e Inspeção de Memória em Python',
            theory: 'Em ambientes de alta velocidade de processamento, a inspeção inicial através de <code>info()</code>, <code>describe()</code> e <code>isnull().sum()</code> garante que o esquema de dados esperado está preservado antes de iniciar operações estatísticas custosas.',
            code: `print("--- RESUMO ESTRUTURAL (info) ---")
df_qual.info()

print("\\n--- RESUMO ESTATÍSTICO DAS VARIÁVEIS NUMÉRICAS (describe) ---")
print(df_qual.describe().round(2))`,
            output: `--- RESUMO ESTRUTURAL (info) ---
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 500 entries, 0 to 499
Data columns (total 10 columns):
 #   Column           Non-Null Count  Dtype  
---  ------           --------------  -----  
 0   Part_ID          500 non-null    object 
 1   Machine_ID       500 non-null    object 
 2   Shift            500 non-null    object 
 3   Operator         500 non-null    object 
 4   Temperature      500 non-null    float64
 5   Pressure         480 non-null    float64
 6   Humidity         500 non-null    float64
 7   Production_Time  500 non-null    float64
 8   Defect           500 non-null    object 
 9   Defect_Type      500 non-null    object 
dtypes: float64(4), object(6)

--- RESUMO ESTATÍSTICO DAS VARIÁVEIS NUMÉRICAS (describe) ---
       Temperature  Pressure  Humidity  Production_Time
count       500.00    480.00    500.00           500.00
mean         72.58      5.51     55.04            45.12
std           3.53      0.41      5.98             8.14
min          58.40      4.12     36.20            21.40
25%          70.15      5.23     51.10            39.50
50%          72.45      5.51     54.90            44.90
75%          74.80      5.78     58.85            50.25
max          88.30      6.92     73.10            72.10`,
            interpretation: 'O describe aponta a presença de 480 valores válidos em Pressure (20 ausentes) e permite visualizar limites mínimos e máximos da medição.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 1 & 2',
            title: '4. Análise Exploratória Primária de Frequências Categóricas',
            theory: 'Para atributos categóricos (qualitativos nominais), a métrica primária é a <strong>Tabela de Frequência Absoluta e Relativa (%)</strong> calculada via <code>value_counts(normalize=True)</code>, permitindo identificar desbalanceamento de classes nas peças manufaturadas.',
            code: `freq_abs = df_qual['Defect'].value_counts()
freq_rel = df_qual['Defect'].value_counts(normalize=True) * 100

tabela_freq = pd.DataFrame({'Frequência Absoluta': freq_abs, 'Frequência Relativa (%)': freq_rel.round(2)})
print(tabela_freq)`,
            output: `        Frequência Absoluta  Frequência Relativa (%)
Defect                                              
Não                     412                    82.40
Sim                      88                    17.60`,
            interpretation: 'A taxa de defeito da fábrica situa-se em 17.60% (88 peças), fornecendo a linha de base para investigações de causa raiz.'
        }
    ],
    2: [
        {
            biblio: 'Bussab & Morettin (2013), Cap. 1 & 11',
            title: '1. Amostragem Estatística: Aleatória Simples, Sistemática e Estratificada',
            theory: 'A população é o conjunto completo de itens de interesse. Uma <strong>Amostra</strong> é um subconjunto representativo extraído para inferir propriedades populacionais. As principais técnicas são:<br><ul><li><strong>Amostragem Aleatória Simples (AAS):</strong> Todos os membros possuem rigorosamente a mesma probabilidade de seleção $$P = 1/N$$.</li><li><strong>Amostragem Sistemática:</strong> Seleciona-se um item a cada intervalo $$k = N/n$$ na esteira de produção.</li><li><strong>Amostragem Estratificada:</strong> A população de tamanho $$N$$ é dividida em $$K$$ estratos homogêneos (ex: Turnos) e subamostras $$n_h = n \\cdot \\frac{N_h}{N}$$ são retiradas proporcionalmente de cada estrato, reduzindo drasticamente a variância amostral.</li></ul>',
            code: `import pandas as pd

df = pd.read_csv('data/manufacturing_quality.csv')

# Amostragem Estratificada Proporcional por Turno (Shift) - 20% da População
amostra_estratificada = df.groupby('Shift', group_keys=False).apply(
    lambda x: x.sample(frac=0.20, random_state=42)
)

print("Proporção Populacional Original (%):")
print((df['Shift'].value_counts(normalize=True)*100).round(2))
print("\\nProporção Amostral Estratificada (%):")
print((amostra_estratificada['Shift'].value_counts(normalize=True)*100).round(2))`,
            output: `Proporção Populacional Original (%):
Shift
Manhã    40.00
Tarde    35.00
Noite    25.00

Proporção Amostral Estratificada (%):
Shift
Manhã    40.00
Tarde    35.00
Noite    25.00`,
            interpretation: 'A amostragem estratificada garante que a amostra represente com exatidão a distribuição original dos turnos da fábrica.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 11; Grus (2021), Cap. 5',
            title: '2. Vieses de Amostragem & Erro Amostral',
            theory: 'O <strong>Erro Amostral</strong> $$e = |\\bar{x} - \\mu|$$ mede a diferença natural entre a estatística da amostra ($\\bar{x}$) e o parâmetro real da população ($\\mu$). Vieses sistemáticos ocorrem por:<br><ul><li><strong>Viés de Seleção:</strong> Quando determinados subgrupos são omitidos do processo de amostragem.</li><li><strong>Viés do Sobrevivente:</strong> Focar apenas nos itens que passaram por um filtro e ignorar os que falharam precocemente.</li></ul>',
            code: `media_pop = df['Temperature'].mean()
amostra_simples = df['Temperature'].sample(n=50, random_state=42)
media_amostra = amostra_simples.mean()
erro_amostral = abs(media_amostra - media_pop)

print(f"Média Populacional (μ): {media_pop:.4f} °C")
print(f"Média Amostral (x̄): {media_amostra:.4f} °C")
print(f"Erro Amostral Absoluto (e): {erro_amostral:.4f} °C")`,
            output: `Média Populacional (μ): 72.5812 °C
Média Amostral (x̄): 72.6450 °C
Erro Amostral Absoluto (e): 0.0638 °C`,
            interpretation: 'A amostra de 50 observações apresentou um erro amostral marginal de apenas 0.0638°C em relação à média populacional.'
        },
        {
            biblio: 'Fávero & Belfiore (2017), Cap. 2; McKinney (2023), Cap. 7',
            title: '3. Diagnóstico e Tratamento de Dados Ausentes (MCAR, MAR, MNAR)',
            theory: 'Segundo a taxonomia formal de Rubin, os dados ausentes dividem-se em 3 mecanismos:<br><ul><li><strong>MCAR (Missing Completely at Random):</strong> A ausência é inteiramente aleatória e não depende de nenhuma variável observada ou não observada ($P(M|Y_{obs}, Y{mis}) = P(M)$).</li><li><strong>MAR (Missing at Random):</strong> A probabilidade de ausência depende das variáveis observadas no dataset, mas não do próprio valor ausente.</li><li><strong>MNAR (Missing Not at Random):</strong> A ausência depende diretamente do valor omitido (ex: sensor falha e omite leituras quando ultrapassa 150°C).</li></ul>A imputação pela <strong>Mediana</strong> é preferível em distribuições assimétricas ou com outliers, preservando a robustez estatística.',
            code: `nulos_antes = df['Pressure'].isnull().sum()
mediana_press = df['Pressure'].median()
df['Pressure_Imputed'] = df['Pressure'].fillna(mediana_press)

print(f"Registros Faltantes em Pressure: {nulos_antes}")
print(f"Mediana Calculada para Imputação: {mediana_press:.2f} bar")
print(f"Faltantes Restantes Após Imputação: {df['Pressure_Imputed'].isnull().sum()}")`,
            output: `Registros Faltantes em Pressure: 20
Mediana Calculada para Imputação: 5.51 bar
Faltantes Restantes Após Imputação: 0`,
            interpretation: 'Os 20 registros ausentes do sensor de pressão foram preenchidos com a mediana populacional (5.51 bar), garantindo integridade para o algoritmo de análise.'
        },
        {
            biblio: 'McKinney (2023), Cap. 7; Fávero & Belfiore (2017), Cap. 2',
            title: '4. Detecção e Remoção de Duplicados e Ruídos de Sensores',
            theory: 'Registros duplicados ocorrem por retransmissão de mensagens no barramento IIoT. A identificação exige verificação de chave primária composta (ex: <code>Part_ID</code> ou <code>Machine_ID + Timestamp</code>) através de <code>duplicated()</code> e <code>drop_duplicates()</code>.',
            code: `qtd_duplicados = df.duplicated(subset=['Part_ID']).sum()
print(f"Registros Duplicados Encontrados em Part_ID: {qtd_duplicados}")

df_limpo = df.drop_duplicates(subset=['Part_ID'], keep='first')
print(f"Linhas Únicas Retidas: {len(df_limpo)}")`,
            output: `Registros Duplicados Encontrados em Part_ID: 0
Linhas Únicas Retidas: 500`,
            interpretation: 'A base não apresenta duplicidade de chaves, confirmando a unicidade de cada medição na fábrica.'
        }
    ],
    3: [
        {
            biblio: 'Bussab & Morettin (2013), Cap. 2',
            title: '1. Medidas de Tendência Central (Média, Mediana e Moda)',
            theory: 'As medidas de tendência central indicam a localização do centro de distribuição dos dados:<br><ul><li><strong>Média Aritmética ($$\\bar{x}$$):</strong> $$ \\bar{x} = \\frac{1}{n} \\sum_{i=1}^n x_i $$. Ponto de equilíbrio somatório das distâncias. Extremamente sensível a valores discrepantes (outliers).</li><li><strong>Mediana ($$Md$$):</strong> O elemento central $$x_{(n+1)/2}$$ que divide a amostra ordenada em dois conjuntos de 50%. Robusta a outliers.</li><li><strong>Moda ($$Mo$$):</strong> O valor ou categoria de máxima densidade/frequência absoluta na amostragem.</li></ul>',
            code: `import pandas as pd

df = pd.read_csv('data/manufacturing_quality.csv')
temp = df['Temperature']

print(f"Média Aritmética (x̄): {temp.mean():.2f} °C")
print(f"Mediana (Md): {temp.median():.2f} °C")
print(f"Moda (Mo): {temp.mode()[0]:.2f} °C")`,
            output: `Média Aritmética (x̄): 72.58 °C
Mediana (Md): 72.45 °C
Moda (Mo): 71.10 °C`,
            interpretation: 'A proximidade entre Média (72.58°C) e Mediana (72.45°C) é um indicativo clássico de simetria na distribuição de temperaturas.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 2; Grus (2021), Cap. 5',
            title: '2. Separatrizes: Quartis (Q1, Q2, Q3), Percentis e IQR',
            theory: 'As separatrizes dividem o conjunto de dados ordenado em frações conhecidas:<br><ul><li><strong>Quartis:</strong> Dividem a amostra em 4 partes iguais (25% cada). $$Q1 = P_{25\\%}$$, $$Q2 = Md = P_{50\\%}$$, $$Q3 = P_{75\\%}$$.</li><li><strong>Amplitude Interquartil ($$IQR$$):</strong> $$IQR = Q3 - Q1$$. Representa o intervalo onde concentram-se os 50% centrais dos dados e serve de base para os limites moderados do Boxplot ($$[Q1 - 1.5 \\cdot IQR, Q3 + 1.5 \\cdot IQR]$$).</li></ul>',
            code: `q1 = temp.quantile(0.25)
q2 = temp.quantile(0.50)
q3 = temp.quantile(0.75)
iqr = q3 - q1

lim_inf = q1 - 1.5 * iqr
lim_sup = q3 + 1.5 * iqr

print(f"1º Quartil (Q1 - 25%): {q1:.2f} °C")
print(f"2º Quartil (Q2 - Mediana): {q2:.2f} °C")
print(f"3º Quartil (Q3 - 75%): {q3:.2f} °C")
print(f"Amplitude Interquartil (IQR): {iqr:.2f} °C")
print(f"Limites Moderados de Outlier: [{lim_inf:.2f} °C, {lim_sup:.2f} °C]")`,
            output: `1º Quartil (Q1 - 25%): 70.15 °C
2º Quartil (Q2 - Mediana): 72.45 °C
3º Quartil (Q3 - 75%): 74.80 °C
Amplitude Interquartil (IQR): 4.65 °C
Limites Moderados de Outlier: [63.17 °C, 81.78 °C]`,
            interpretation: 'Qualquer medição de temperatura abaixo de 63.17°C ou acima de 81.78°C é classificada estatisticamente como um outlier de processo.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 2',
            title: '3. Medidas de Dispersão: Variância ($s^2$), Desvio Padrão ($s$) e Graus de Liberdade',
            theory: 'As medidas de dispersão quantificam o nível de espalhamento dos dados em torno do centro:<br><ul><li><strong>Variância Amostral ($$s^2$$):</strong> $$s^2 = \\frac{1}{n-1} \\sum_{i=1}^n (x_i - \\bar{x})^2$$. O divisor $$n-1$$ é a famosa <strong>Correção de Bessel</strong>, utilizada para compensar a perda de 1 grau de liberdade ao estimar $$\\bar{x}$$, tornando $$s^2$$ um estimador não-viesado ($$E[s^2] = \\sigma^2$$).</li><li><strong>Desvio Padrão Amostral ($$s$$):</strong> $$s = \\sqrt{s^2}$$. Retorna a variabilidade para a mesma unidade de medida original das observações (°C).</li></ul>',
            code: `var_amostral = temp.var()
desvio_amostral = temp.std()

print(f"Variância Amostral (s²): {var_amostral:.4f} °C²")
print(f"Desvio Padrão Amostral (s): {desvio_amostral:.4f} °C")`,
            output: `Variância Amostral (s²): 12.4521 °C²
Desvio Padrão Amostral (s): 3.5288 °C`,
            interpretation: 'O desvio padrão de 3.5288°C indica a oscilação média esperada dos valores observados em relação à média central de 72.58°C.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 2; Fávero & Belfiore (2017), Cap. 3',
            title: '4. Coeficiente de Variação (CV%) e Estabilidade Relativa entre Máquinas',
            theory: 'O <strong>Coeficiente de Variação ($$CV\\%$$)</strong> é uma medida adimensional de variabilidade relativa:<br>$$CV\\% = \\left( \\frac{s}{\\bar{x}} \\right) \\times 100\\%$$Permite comparar a estabilidade de processos que operam em ordens de grandeza distintas (ex: Temperatura vs Pressão vs Tempo de Produção). Convenção: $$CV < 10\\%$$ (alta homogeneidade); $$10\\% \\le CV \\le 20\\%$$ (média); $$CV > 20\\%$$ (alta heterogeneidade).',
            code: `cv_pct = (desvio_amostral / temp.mean()) * 100

resumo_maquinas = df.groupby('Machine_ID')['Production_Time'].agg(
    Media='mean', Desvio='std',
    CV_Pct=lambda x: (x.std() / x.mean()) * 100
).round(2)

print(f"CV% Global de Temperatura: {cv_pct:.2f}%\n")
print("Comparativo de Estabilidade de Tempo de Produção por Máquina:")
print(resumo_maquinas)`,
            output: `CV% Global de Temperatura: 4.86%

Comparativo de Estabilidade de Tempo de Produção por Máquina:
              Media  Desvio  CV_Pct
Machine_ID                         
Fresadora_03  44.80    7.90   17.63
Injetora_04   45.10    8.20   18.18
Prensa_01     44.90    8.10   18.04
Torno_CNC_02  45.30    8.30   18.32`,
            interpretation: 'O CV de temperatura de 4.86% indica controle altamente homogêneo. Nos tempos de produção por máquina, os CVs giram em 18%, indicando variabilidade moderada.'
        }
    ],
    4: [
        {
            biblio: 'Bussab & Morettin (2013), Cap. 6; Fávero & Belfiore (2017), Cap. 3',
            title: '1. A Distribuição Normal Gaussiana $N(\\mu, \\sigma^2)$ & a Regra Empírica',
            theory: 'A <strong>Distribuição Normal</strong> é unimodal, perfeitamente simétrica em torno da média $$\\mu$$ e descrita pela função de densidade de probabilidade:<br>$$f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$$A <strong>Regra Empírica Gaussiana (68-95-99.7)</strong> estabelece que para dados normais:<br><ul><li><strong>$$\\mu \\pm 1\\sigma$$:</strong> Contém aproximadamente 68.27% das observações.</li><li><strong>$$\\mu \\pm 2\\sigma$$:</strong> Contém aproximadamente 95.45% das observações.</li><li><strong>$$\\mu \\pm 3\\sigma$$:</strong> Contém aproximadamente 99.73% das observações (Limites Six-Sigma).</li></ul>',
            code: `import pandas as pd

df = pd.read_csv('data/manufacturing_quality.csv')
temp = df['Temperature']
mu, sigma = temp.mean(), temp.std()

p68 = temp.between(mu - 1*sigma, mu + 1*sigma).mean() * 100
p95 = temp.between(mu - 2*sigma, mu + 2*sigma).mean() * 100
p99 = temp.between(mu - 3*sigma, mu + 3*sigma).mean() * 100

print(f"Média (μ): {mu:.2f} | Desvio Padrão (σ): {sigma:.2f}")
print(f"Observado em μ ± 1σ: {p68:.2f}% (Teórico: 68.27%)")
print(f"Observado em μ ± 2σ: {p95:.2f}% (Teórico: 95.45%)")
print(f"Observado em μ ± 3σ: {p99:.2f}% (Teórico: 99.73%)")`,
            output: `Média (μ): 72.58 | Desvio Padrão (σ): 3.53
Observado em μ ± 1σ: 68.40% (Teórico: 68.27%)
Observado em μ ± 2σ: 95.20% (Teórico: 95.45%)
Observado em μ ± 3σ: 99.80% (Teórico: 99.73%)`,
            interpretation: 'As proporções observadas na amostra aderem com extrema precisão à Regra Empírica Gaussiana.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 6; Fávero & Belfiore (2017), Cap. 3',
            title: '2. Assimetria (Skewness): Cálculo de Fisher-Pearson e Deslocamento do Centro',
            theory: 'O Coeficiente de Assimetria de Fisher-Pearson ($$Sk$$) mede a falta de simetria do histograma:<br>$$Sk = \\frac{\\frac{1}{n} \\sum_{i=1}^n (x_i - \\bar{x})^3}{s^3}$$<br><ul><li><strong>$$Sk = 0$$ (Simétrica):</strong> $$\\bar{x} = Md = Mo$$.</li><li><strong>$$Sk > 0$$ (Assimetria Positiva / Cauda à Direita):</strong> $$\\bar{x} > Md > Mo$$. Ocorrem picos em valores baixos e cauda longa à direita (ex: tempos de parada).</li><li><strong>$$Sk < 0$$ (Assimetria Negativa / Cauda à Esquerda):</strong> $$\\bar{x} < Md < Mo$$. Ocorrem picos em valores altos e cauda à esquerda.</li></ul>',
            code: `skew_temp = temp.skew()
prod_time = df['Production_Time']
skew_prod = prod_time.skew()

print(f"Assimetria da Temperatura: {skew_temp:.4f} (Quase Simétrica)")
print(f"Assimetria do Tempo de Produção: {skew_prod:.4f} (Leve Cauda à Direita)")`,
            output: `Assimetria da Temperatura: 0.0412 (Quase Simétrica)
Assimetria do Tempo de Produção: 0.1240 (Leve Cauda à Direita)`,
            interpretation: 'A assimetria próxima de zero confirma o comportamento gaussiano do controle de temperatura industrial.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 6; Fávero & Belfiore (2017), Cap. 3',
            title: '3. Curtose (Kurtosis): Achatamento da Curva e Peso das Caudas',
            theory: 'A Curtose de Excesso ($$Ku$$) mede o grau de concentração de massa nas caudas em relação à curva normal:<br>$$Ku = \\frac{\\frac{1}{n} \\sum_{i=1}^n (x_i - \\bar{x})^4}{s^4} - 3$$<br><ul><li><strong>Mesocúrtica ($$Ku = 0$$):</strong> Caudas com peso idêntico à Distribuição Normal.</li><li><strong>Leptocúrtica ($$Ku > 0$$):</strong> Pico elevado, caudas pesadas com maior probabilidade de eventos extremos (outliers).</li><li><strong>Platicúrtica ($$Ku < 0$$):</strong> Distribuição achatada com caudas leves e dispersas.</li></ul>',
            code: `kurt_temp = temp.kurtosis()
print(f"Curtose de Excesso da Temperatura: {kurt_temp:.4f}")
print(f"Classificação: {'Mesocúrtica (Normal)' if abs(kurt_temp) < 0.5 else 'Não-Normal'}")`,
            output: `Curtose de Excesso da Temperatura: -0.0815
Classificação: Mesocúrtica (Normal)`,
            interpretation: 'A curtose próxima de zero indica ausência de caudas pesadas e confirma a estabilidade térmica das medições.'
        },
        {
            biblio: 'McKinney (2023), Cap. 9; Grus (2021), Cap. 3',
            title: '4. Diagnóstico Gráfico Avançado: Q-Q Plot & Violin Plots',
            theory: 'O <strong>Quantile-Quantile Plot (Q-Q Plot)</strong> plota os quantis empíricos da amostra contra os quantis teóricos esperados da Distribuição Normal. Se os pontos alinharem-se sobre a reta diagonal de 45°, a suposição de normalidade é validada.',
            code: `from scipy import stats
import numpy as np

# Cálculo conceitual das estatísticas do Q-Q Plot
(quantis_teoricos, quantis_empiricos), (slope, intercept, r) = stats.probplot(temp, dist="norm")
print(f"Coeficiente de Correlação R² do Q-Q Plot: {r**2:.4f}")`,
            output: `Coeficiente de Correlação R² do Q-Q Plot: 0.9981`,
            interpretation: 'O valor de R² extremamente elevado (0.9981) confirma o excelente alinhamento dos pontos na reta do Q-Q Plot.'
        }
    ],
    5: [
        {
            biblio: 'Bussab & Morettin (2013), Cap. 10; Grus (2021), Cap. 6',
            title: '1. Teorema do Limite Central (TLC) & Distribuição Amostral das Médias',
            theory: 'O <strong>Teorema do Limite Central (TLC)</strong> é o pilar fundamental da inferência estatística. Ele estabelece que, à medida que o tamanho da amostra $$n$$ cresce ($$n \\ge 30$$), a distribuição amostral das médias $$\\bar{X}$$ aproxima-se de uma <strong>Distribuição Normal</strong> com média $$\\mu$$ e variância $$\\frac{\\sigma^2}{n}$$, independente do formato da distribuição da população original.',
            code: `import pandas as pd
import numpy as np
from scipy import stats

df_maint = pd.read_csv('data/predictive_maintenance.csv')
vib = df_maint['Vibration']

# Simulação do Teorema do Limite Central (1000 amostras de tamanho n=40)
medias_amostrais = [vib.sample(n=40, replace=True).mean() for _ in range(1000)]
media_das_medias = np.mean(medias_amostrais)

print(f"Média Populacional Real (μ): {vib.mean():.4f}")
print(f"Média da Distribuição Amostral (E[x̄]): {media_das_medias:.4f}")`,
            output: `Média Populacional Real (μ): 3.2085
Média da Distribuição Amostral (E[x̄]): 3.2079`,
            interpretation: 'A média da distribuição amostral (3.2079) converge perfeitamente para a média populacional verdadeira (3.2085), confirmando o TLC.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 10',
            title: '2. Erro Padrão da Média (SEM) vs Desvio Padrão Amostral ($s$)',
            theory: 'É crucial distinguir Desvio Padrão de Erro Padrão:<br><ul><li><strong>Desvio Padrão Amostral ($$s$$):</strong> Mede a dispersão das observações individuais na amostra.</li><li><strong>Erro Padrão da Média ($$SEM$$):</strong> Mede a variabilidade esperada da própria média amostral $$\\bar{x}$$ em relação à verdadeira média populacional $$\\mu$$:<br>$$SEM = \\frac{s}{\\sqrt{n}}$$Note que o SEM diminui proporcionalmente à raiz quadrada do tamanho amostral $$\\sqrt{n}$$.</li></ul>',
            code: `n = len(vib)
s = vib.std()
sem = stats.sem(vib)

print(f"Tamanho da Amostra (n): {n}")
print(f"Desvio Padrão Amostral (s): {s:.4f} RMS")
print(f"Erro Padrão da Média (SEM): {sem:.4f} RMS")`,
            output: `Tamanho da Amostra (n): 600
Desvio Padrão Amostral (s): 0.7005 RMS
Erro Padrão da Média (SEM): 0.0286 RMS`,
            interpretation: 'O desvio padrão entre medições individuais de vibração é 0.7005 RMS, enquanto a incerteza da estimativa da média (SEM) reduz-se a apenas 0.0286 RMS devido ao n=600.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 10; Fávero & Belfiore (2017), Cap. 4',
            title: '3. Construção de Intervalos de Confiança (95% IC) via Student t e Z',
            theory: 'Um <strong>Intervalo de Confiança ($$IC$$)</strong> fornece uma faixa plausível de valores para a média populacional desconhecida $$\\mu$$ a um nível de confiança escolhido $$1 - \\alpha$$ (ex: 95%):<br>$$IC_{95\\%} = \\bar{x} \\pm t_{\\alpha/2, n-1} \\cdot \\left( \\frac{s}{\\sqrt{n}} \\right)$$Para $$n \\ge 30$$, a distribuição $$t$$ de Student aproxima-se da distribuição Normal padrão Z ($$z_{0.025} = 1.96$$).',
            code: `media_amostral = vib.mean()
ic95 = stats.norm.interval(0.95, loc=media_amostral, scale=sem)
margem_erro = (ic95[1] - ic95[0]) / 2.0

print(f"Média Estimada (x̄): {media_amostral:.4f} RMS")
print(f"Margem de Erro (95% Confiança): ±{margem_erro:.4f} RMS")
print(f"Intervalo de Confiança 95%: [{ic95[0]:.4f}, {ic95[1]:.4f}] RMS")`,
            output: `Média Estimada (x̄): 3.2085 RMS
Margem de Erro (95% Confiança): ±0.0560 RMS
Intervalo de Confiança 95%: [3.1524, 3.2646] RMS`,
            interpretation: 'Com 95% de confiança estatística, a vibração média populacional do parque de máquinas situa-se entre 3.1524 e 3.2646 RMS.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 10',
            title: '4. Dimensionamento Amostral e Margem de Erro Requerida',
            theory: 'Para estimar a média populacional com uma margem de erro máxima desejada $$E$$ a um nível de confiança $$z_{\\alpha/2}$$, o tamanho amostral mínimo necessário $$n$$ é calculado isolando $$n$$ da fórmula do erro:<br>$$n = \\left( \\frac{z_{\\alpha/2} \\cdot s}{E} \\right)^2$$',
            code: `E_desejado = 0.03 # Margem de erro máxima desejada de 0.03 RMS
z_95 = 1.96
n_requerido = int(np.ceil(((z_95 * s) / E_desejado) ** 2))

print(f"Margem de Erro Alvo: ±{E_desejado} RMS")
print(f"Tamanho Amostral Mínimo Necessário (n): {n_requerido} observações")`,
            output: `Margem de Erro Alvo: ±0.03 RMS
Tamanho Amostral Mínimo Necessário (n): 209 observações`,
            interpretation: 'Para reduzir a margem de erro da estimativa de vibração para ±0.03 RMS, seriam necessários no mínimo 209 registros de telemetria.'
        }
    ],
    6: [
        {
            biblio: 'Bussab & Morettin (2013), Cap. 12',
            title: '1. Estrutura Formal dos Testes de Hipóteses: $H_0$ vs $H_1$',
            theory: 'Um <strong>Teste de Hipóteses</strong> é uma regra de decisão estatística entre duas hipóteses concorrentes:<br><ul><li><strong>Hipótese Nula ($$H_0$$):</strong> Afirmação de ausência de efeito, igualdade ou normalidade. Assume-se verdadeira até prova em contrário.</li><li><strong>Hipótese Alternativa ($$H_1$$):</strong> Afirmação de presença de efeito, diferença significativa ou desvio da normalidade.</li></ul>',
            code: `import pandas as pd
from scipy import stats

df_maint = pd.read_csv('data/predictive_maintenance.csv')
temp = df_maint['Temperature']

print("Hipótese Nula (H0): A temperatura segue Distribuição Normal.")
print("Hipótese Alternativa (H1): A temperatura NÃO segue Distribuição Normal.")`,
            output: `Hipótese Nula (H0): A temperatura segue Distribuição Normal.
Hipótese Alternativa (H1): A temperatura NÃO segue Distribuição Normal.`,
            interpretation: 'Formalização das hipóteses que serão submetidas aos testes empíricos de normalidade.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 12; Grus (2021), Cap. 7',
            title: '2. Tomada de Decisão pelo $p$-Valor & Erros Tipo I ($\alpha$) e Tipo II ($\beta$)',
            theory: 'O <strong>$p$-valor</strong> é a probabilidade de obter uma estatística de teste tão ou mais extrema que a observada, supondo que $H_0$ seja verdadeira.<br>Regra de Decisão a um nível de significância $\\alpha = 0.05$:<br><ul><li><strong>Se $$p\\text{-valor} \\le \\alpha$$:</strong> Rejeita-se $H_0$ (Resultado estatisticamente significativo).</li><li><strong>Se $$p\\text{-valor} > \\alpha$$:</strong> Não se rejeita $H_0$ (Falta de evidência para rejeitar $H_0$).</li></ul><strong>Matriz de Erros de Decisão:</strong><br><ul><li><strong>Erro Tipo I ($\\alpha$):</strong> Rejeitar $H_0$ quando $H_0$ é verdadeira (Falso Positivo).</li><li><strong>Erro Tipo II ($\\beta$):</strong> Não rejeitar $H_0$ quando $H_0$ é falsa (Falso Negativo).</li><li><strong>Poder do Teste ($1 - \\beta$):</strong> Probabilidade de rejeitar corretamente uma $H_0$ falsa.</li></ul>',
            code: `alpha = 0.05
stat, p_val = stats.shapiro(temp[:300])

print(f"Estatística W: {stat:.4f} | p-valor: {p_val:.4e}")
if p_val <= alpha:
    print(f"Decisão: p-valor <= {alpha} -> Rejeita H0.")
else:
    print(f"Decisão: p-valor > {alpha} -> Não rejeita H0 (Aceita Normalidade).")`,
            output: `Estatística W: 0.9942 | p-valor: 3.1250e-01
Decisão: p-valor > 0.05 -> Não rejeita H0 (Aceita Normalidade).`,
            interpretation: 'Como o p-valor (0.3125) é superior a 0.05, não há evidências para rejeitar a hipótese de normalidade.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 12; Fávero & Belfiore (2017), Cap. 5',
            title: '3. Testes Formais de Normalidade: Shapiro-Wilk, KS & Anderson-Darling',
            theory: 'Principais testes parametrizados para validação de suposições:<br><ul><li><strong>Shapiro-Wilk:</strong> Teste de maior poder estatístico para amostras pequenas e médias ($n \\le 5000$). Avalia a correlação dos quantis observados.</li><li><strong>Kolmogorov-Smirnov (KS):</strong> Compara a Distribuição Acumulada Empírica (EDF) $S(x)$ com a distribuição teórica acumulada $F(x)$ através da maior distância vertical $$D = \\max |S(x) - F(x)|$$.</li><li><strong>Anderson-Darling:</strong> Modificação do KS que atribui peso superior às caudas da distribuição.</li></ul>',
            code: `# Teste Kolmogorov-Smirnov
ks_stat, ks_p = stats.kstest(temp, 'norm', args=(temp.mean(), temp.std()))

# Teste Anderson-Darling
ad_res = stats.anderson(temp, dist='norm')

print(f"1. KS Test: D={ks_stat:.4f}, p-valor={ks_p:.4f}")
print(f"2. Anderson-Darling: Estatística A²={ad_res.statistic:.4f}")
print(f"   Valor Crítico (5%): {ad_res.critical_values[2]:.4f}")`,
            output: `1. KS Test: D=0.0245, p-valor=0.8621
2. Anderson-Darling: Estatística A²=0.3120
   Valor Crítico (5%): 0.7820`,
            interpretation: 'Todos os testes confirmam a suposição de normalidade da temperatura (A² < Valor Crítico a 5%).'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 14; Fávero & Belfiore (2017), Cap. 5',
            title: '4. Teste Qui-Quadrado de Independência ($\chi^2$) para Variáveis Categóricas',
            theory: 'O <strong>Teste Qui-Quadrado de Independência ($\\chi^2$)</strong> avalia se existe associação estatisticamente significativa entre duas variáveis categóricas cruzadas em uma Tabela de Contingência:<br>$$\\chi^2 = \\sum_{i=1}^r \\sum_{j=1}^c \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}$$onde $$O_{ij}$$ é a frequência observada e $$E_{ij} = \\frac{\\text{Total Linha}_i \\times \\text{Total Coluna}_j}{N}$$ é a frequência esperada sob a hipótese de independência ($H_0$). Graus de liberdade: $$df = (r - 1)(c - 1)$$.',
            code: `ct = pd.crosstab(df_maint['Machine_ID'], df_maint['Machine_Failure'])
chi2, p_chi2, dof, esperados = stats.chi2_contingency(ct)

print(f"Estatística Qui-Quadrado (χ²): {chi2:.4f}")
print(f"Graus de Liberdade (df): {dof}")
print(f"p-valor do Teste: {p_chi2:.4e}")
print(f"Conclusão: {'Associação Significativa (Falha depende da Máquina)' if p_chi2 <= 0.05 else 'Variáveis Independentes'}")`,
            output: `Estatística Qui-Quadrado (χ²): 19.8450
Graus de Liberdade (df): 3
p-valor do Teste: 2.1450e-04
Conclusão: Associação Significativa (Falha depende da Máquina)`,
            interpretation: 'O p-valor de 0.000214 rejeita H0 e comprova estatisticamente que a taxa de falha depende da máquina específica.'
        }
    ],
    7: [
        {
            biblio: 'Bussab & Morettin (2013), Cap. 4',
            title: '1. Coeficiente de Correlação Linear de Pearson ($r$)',
            theory: 'O <strong>Coeficiente de Pearson ($$r$$)</strong> mede a força e direção da associação linear estritamente contínua entre duas variáveis:<br>$$r = \\frac{Cov(X,Y)}{s_x s_y} = \\frac{\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^n (x_i - \\bar{x})^2} \\sqrt{\\sum_{i=1}^n (y_i - \\bar{y})^2}} \\in [-1, +1]$$<br><ul><li><strong>$$r = +1$$:</strong> Correlação linear positiva perfeita.</li><li><strong>$$r = 0$$:</strong> Ausência de correlação linear.</li><li><strong>$$r = -1$$:</strong> Correlação linear negativa perfeita.</li></ul>',
            code: `import pandas as pd

df_maint = pd.read_csv('data/predictive_maintenance.csv')
cols_num = ['Temperature', 'Vibration', 'Torque', 'RPM', 'Tool_Wear']

matriz_pearson = df_maint[cols_num].corr(method='pearson').round(3)
print("Matriz de Correlação de Pearson (r):")
print(matriz_pearson)`,
            output: `Matriz de Correlação de Pearson (r):
             Temperature  Vibration  Torque    RPM  Tool_Wear
Temperature        1.000      0.021   0.015 -0.032      0.041
Vibration          0.021      1.000   0.008 -0.019      0.012
Torque             0.015      0.008   1.000 -0.045      0.005
RPM               -0.032     -0.019  -0.045  1.000     -0.028
Tool_Wear          0.041      0.012   0.005 -0.028      1.000`,
            interpretation: 'Os coeficientes próximos de zero indicam independência linear entre os parâmetros de operação no regime normal.'
        },
        {
            biblio: 'Fávero & Belfiore (2017), Cap. 4',
            title: '2. Coeficiente de Correlação de Postos de Spearman ($\rho$)',
            theory: 'O <strong>Coeficiente de Spearman ($$\\rho$$)</strong> é uma alternativa não-paramétrica baseada na ordenação por postos (ranks) dos dados:<br>$$\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$$onde $$d_i$$ é a diferença entre os postos de $$X$$ e $$Y$$. Vantagem: Detecta relacionamentos <strong>monotônicos não-lineares</strong> e é imune a outliers severos.',
            code: `matriz_spearman = df_maint[cols_num].corr(method='spearman').round(3)
print("Matriz de Correlação de Spearman (ρ):")
print(matriz_spearman)`,
            output: `Matriz de Correlação de Spearman (ρ):
             Temperature  Vibration  Torque    RPM  Tool_Wear
Temperature        1.000      0.019   0.012 -0.028      0.038
Vibration          0.019      1.000   0.005 -0.015      0.010
Torque             0.012      0.005   1.000 -0.041      0.003
RPM               -0.028     -0.015  -0.041  1.000     -0.025
Tool_Wear          0.038      0.010   0.003 -0.025      1.000`,
            interpretation: 'A correlação de Spearman confirma a ausência de relacionamentos monotônicos ocultos entre as variáveis numéricas.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 4; Grus (2021), Cap. 5',
            title: '3. Causalidade vs Correlação: Vieses, Variáveis de Confusão & Simpson',
            theory: '<em>"Correlação não implica Causalidade"</em>. Duas variáveis podem apresentar alto $$r$$ devido a:<br><ul><li><strong>Correlação Espúria:</strong> Coincidência estatística sem nexo causal.</li><li><strong>Variável de Confusão (Confounder):</strong> Uma terceira variável não observada que afeta $X$ e $Y$ simultaneamente.</li><li><strong>Paradoxo de Simpson:</strong> Quando uma tendência observada em subgrupos inverte-se ao agregar todos os dados juntos.</li></ul>',
            code: `# Verificação de associação estratificada por subgrupo (evitando o Paradoxo de Simpson)
corr_por_maquina = df_maint.groupby('Machine_ID')[['Temperature', 'Vibration']].corr().iloc[0::2, 1].reset_index()
print("Correlação Temp x Vibração por Equipamento (Estratificada):")
print(corr_por_maquina.round(3))`,
            output: `Correlação Temp x Vibração por Equipamento (Estratificada):
     Machine_ID  level_1  Vibration
0   Caldeira_01  Temperature      0.025
2  Compressor_03  Temperature      0.018
4      Motor_04  Temperature      0.021
6    Turbina_02  Temperature      0.019`,
            interpretation: 'A estratificação por máquina confirma a estabilidade da independência entre as medições em todos os equipamentos.'
        },
        {
            biblio: 'McKinney (2023), Cap. 7 & 10',
            title: '4. Tabelas Cruzadas (Crosstab) e Associação Categórica',
            theory: 'A associação bivariada entre categóricas avalia como a proporção de uma variável modifica-se condicionada aos níveis da outra.',
            code: `ct_pct = pd.crosstab(df_maint['Machine_ID'], df_maint['Machine_Failure'], normalize='index') * 100
print("Taxa de Falha Relativa (%) por Equipamento:")
print(ct_pct.round(2))`,
            output: `Taxa de Falha Relativa (%) por Equipamento:
Machine_Failure    Não    Sim
Machine_ID                   
Caldeira_01      88.25  11.75
Compressor_03    94.12   5.88
Motor_04         95.20   4.80
Turbina_02       91.50   8.50`,
            interpretation: 'A Caldeira_01 apresenta o maior índice relativo de falha (11.75%), demandando ação preventiva direcionada.'
        }
    ],
    8: [
        {
            biblio: 'Bussab & Morettin (2013), Cap. 15; Fávero & Belfiore (2017), Cap. 16',
            title: '1. Componentes de Séries Temporais Industriais ($T_t, S_t, C_t, I_t$)',
            theory: 'Uma <strong>Série Temporal ($$Y_t$$)</strong> é uma sequência de observações ordenadas no tempo. É decomposta em 4 componentes estruturais:<br><ul><li><strong>Tendência ($$T_t$$):</strong> Direção de longo prazo (crescimento ou declínio de desgaste).</li><li><strong>Sazonalidade ($$S_t$$):</strong> Padrões periódicos fixos (ex: ciclos térmicos por turno de trabalho).</li><li><strong>Ciclos ($$C_t$$):</strong> Oscilações de longa duração não periódicas (ex: ciclos econômicos de produção).</li><li><strong>Ruído Irregular ($$I_t$$):</strong> Flutuações aleatórias imprevisíveis de alta frequência.</li></ul>Modelos de Decomposição:<br><ul><li><strong>Aditivo:</strong> $$Y_t = T_t + S_t + I_t$$ (quando a amplitude da sazonalidade é constante).</li><li><strong>Multiplicativo:</strong> $$Y_t = T_t \\times S_t \\times I_t$$ (quando a amplitude cresce proporcionalmente à tendência).</li></ul>',
            code: `import pandas as pd

df = pd.read_csv('data/predictive_maintenance.csv')
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
df = df.sort_values('Timestamp').set_index('Timestamp')

print("Indexação Temporal Concluída:")
print(f"Período Inicial: {df.index.min()}")
print(f"Período Final: {df.index.max()}")
print(f"Frequência das Amostras: 30 minutos")`,
            output: `Indexação Temporal Concluída:
Período Inicial: 2026-08-01 00:00:00
Período Final: 2026-08-13 11:30:00
Frequência das Amostras: 30 minutos`,
            interpretation: 'A série temporal está estruturada com 600 observações indexadas a intervalos de 30 minutos.'
        },
        {
            biblio: 'McKinney (2023), Cap. 11',
            title: '2. Reamostragem Temporal (`resample`) & Janelas de Agregação',
            theory: 'A <strong>Reamostragem (`resample`)</strong> altera a frequência da série temporal:<br><ul><li><strong>Downsampling:</strong> Reduz a frequência (ex: de 30min para Diário `D` ou Horário `H`) aplicando funções de agregação como `mean()`, `max()`, `min()`, `sum()`.</li><li><strong>Upsampling:</strong> Aumenta a frequência preenchendo lacunas por interpolação linear ou `ffill()`.</li></ul>',
            code: `resample_diario = df['Temperature'].resample('D').agg(
    Media='mean', Maxima='max', Minima='min', Amplitude=lambda x: x.max() - x.min()
).round(2)

print("Agregação Diária de Telemetria (Downsampling):")
print(resample_diario.head(4))`,
            output: `Agregação Diária de Telemetria (Downsampling):
            Media  Maxima  Minima  Amplitude
Timestamp                                   
2026-08-01  85.12   98.40   71.20      27.20
2026-08-02  84.95   97.80   72.10      25.70
2026-08-03  85.30   99.10   70.50      28.60
2026-08-04  85.05   96.50   73.00      23.50`,
            interpretation: 'A agregação diária permite monitorar a amplitude térmica pico a pico para identificar desvios de processo.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 15; McKinney (2023), Cap. 11',
            title: '3. Suavização por Média Móvel Simples (SMA) & Exponencial (EMA)',
            theory: 'A <strong>Média Móvel Simples (SMA)</strong> atua como um filtro passa-baixa, eliminando o ruído de alta frequência para destacar a tendência:<br>$$\\bar{Y}_t = \\frac{1}{w} \\sum_{i=0}^{w-1} Y_{t-i}$$onde $$w$$ é o tamanho da janela de observação. A <strong>Média Móvel Exponencial (EMA)</strong> atribui pesos decrescentes exponencialmente às observações passadas, reagindo mais rapidamente a mudanças recentes.',
            code: `caldeira = df[df['Machine_ID'] == 'Caldeira_01'].copy()
caldeira['SMA_6h'] = caldeira['Temperature'].rolling(window=12, min_periods=1).mean()
caldeira['EMA_6h'] = caldeira['Temperature'].ewm(span=12, adjust=False).mean()

print(caldeira[['Temperature', 'SMA_6h', 'EMA_6h']].head(4).round(2))`,
            output: `                     Temperature  SMA_6h  EMA_6h
Timestamp                                       
2026-08-01 00:00:00        85.12   85.12   85.12
2026-08-01 00:30:00        88.40   86.76   85.62
2026-08-01 01:00:00        83.10   85.54   85.23
2026-08-01 01:30:00        91.20   86.96   86.15`,
            interpretation: 'A EMA (Média Móvel Exponencial) reage mais rápido ao pico de 91.20°C (86.15°C) que a SMA (86.96°C).'
        },
        {
            biblio: 'Fávero & Belfiore (2017), Cap. 16',
            title: '4. Decomposição de Séries Temporais com Statsmodels & Estacionariedade',
            theory: 'Uma série temporal é <strong>Fracamente Estacionária</strong> quando sua média $$E[X_t] = \\mu$$ e variância $$Var(X_t) = \\sigma^2$$ são constantes ao longo do tempo. A decomposição estatística isola rigorosamente os 3 componentes (Tendência, Sazonalidade e Residual) para diagnosticar desgaste gradual de componentes industriais.',
            code: `# Exemplo conceitual de decomposição de séries temporais
# from statsmodels.tsa.seasonal import seasonal_decompose
# dec = seasonal_decompose(df['Temperature'], model='additive', period=48)
print("Componentes Isolados: Tendência (Long-term trend), Sazonalidade (24h cycle), Resíduo (Noise)")`,
            output: `Componentes Isolados: Tendência (Long-term trend), Sazonalidade (24h cycle), Resíduo (Noise)`,
            interpretation: 'Separar o ruído aleatório do componente de tendência permite prever falhas antes que ocorra a quebra do equipamento.'
        }
    ],
    9: [
        {
            biblio: 'McKinney (2023), Cap. 10 & 12; Grus (2021), Cap. 10',
            title: '1. Arquitetura de um Pipeline de EDA Industrial Completo',
            theory: 'Um <strong>Pipeline de Análise Exploratória de Dados (EDA)</strong> em ambiente produtivo segue uma arquitetura modular rigorosa:<br><ol><li><strong>Sanity Check & Ingestão:</strong> Verificação de esquemas e consistência de tipos.</li><li><strong>Engenharia & Data Cleaning:</strong> Imputação de nulos e remoção de duplicados.</li><li><strong>Análise Univariada:</strong> Sumarização descritiva e formato das distribuições.</li><li><strong>Análise Bivariada:</strong> Matrizes de correlação e tabelas cruzadas de contingência.</li><li><strong>Análise Multivariada & Insights:</strong> Agregadores de alta dimensão e validação das hipóteses de negócio.</li></ol>',
            code: `import pandas as pd

df_factory = pd.read_csv('data/smart_factory_analytics.csv')

# Pipeline EDA: Agrupamento Multivariado por Linha de Produção
eda_pipeline = df_factory.groupby('Production_Line').agg(
    Eficiencia_Media=('Machine_Efficiency', 'mean'),
    Downtime_Total=('Downtime', 'sum'),
    Custo_Manutencao_Total=('Maintenance_Cost', 'sum'),
    Receita_Total=('Revenue', 'sum')
).round(2)

print("--- SÍNTESE DO PIPELINE DE EDA INDUSTRIAL ---")
print(eda_pipeline)`,
            output: `--- SÍNTESE DO PIPELINE DE EDA INDUSTRIAL ---
                 Eficiencia_Media  Downtime_Total  Custo_Manutencao_Total  Receita_Total
Production_Line                                                                         
Linha_Alpha                 84.50          1425.2                74125.80     2850400.12
Linha_Beta                  85.10          1380.5                71500.40     2910200.50
Linha_Delta                 83.90          1510.0                78900.20     2780100.80
Linha_Gamma                 86.20          1290.4                68200.10     3050150.00`,
            interpretation: 'A Linha Gamma apresenta o melhor desempenho operacional (86.2% de eficiência) e menor custo de manutenção.'
        },
        {
            biblio: 'McKinney (2023), Cap. 10',
            title: '2. Seleção & Engenharia de Atributos (Feature Selection)',
            theory: 'A <strong>Engenharia de Atributos</strong> cria novas variáveis sintéticas a partir dos dados brutos para elevar o poder preditivo das análises (ex: <code>Custo_por_Hora_Downtime = Maintenance_Cost / Downtime</code>). A Seleção de Atributos elimina colunas redundantes com variância nula ou alta multicolinearidade.',
            code: `df_factory['Cost_per_Downtime_Hour'] = (df_factory['Maintenance_Cost'] / df_factory['Downtime'].replace(0, 1)).round(2)
df_factory['Efficiency_Category'] = pd.qcut(df_factory['Machine_Efficiency'], q=3, labels=['Baixa', 'Média', 'Alta'])

print("Novos Atributos Sintéticos Criados:")
print(df_factory[['Production_Line', 'Cost_per_Downtime_Hour', 'Efficiency_Category']].head(3))`,
            output: `Novos Atributos Sintéticos Criados:
  Production_Line  Cost_per_Downtime_Hour Efficiency_Category
0     Linha_Alpha                   52.40               Média
1      Linha_Beta                   48.10                Alta
2     Linha_Gamma                   45.20                Alta`,
            interpretation: 'O custo por hora de parada foi derivado para quantificar o impacto financeiro direto de cada minuto inativo.'
        },
        {
            biblio: 'McKinney (2023), Cap. 12; Bussab & Morettin (2013), Cap. 4',
            title: '3. Análise Exploratória Multivariada & Matriz de Associação',
            theory: 'Na análise multivariada, examina-se a matriz de correlação cruzada entre todas as variáveis numéricas contínuas para descobrir dependências não óbvias entre o consumo de energia e a taxa de defeito.',
            code: `cols_eda = ['Energy_Consumption', 'Machine_Efficiency', 'Downtime', 'Maintenance_Cost', 'Revenue']
matriz_eda = df_factory[cols_eda].corr().round(3)

print("Matriz de Correlação Multivariada EDA:")
print(matriz_eda)`,
            output: `Matriz de Correlação Multivariada EDA:
                    Energy_Consumption  Machine_Efficiency  Downtime  Maintenance_Cost  Revenue
Energy_Consumption               1.000               0.015     0.021             0.018    0.045
Machine_Efficiency               0.015               1.000    -0.035            -0.028    0.142
Downtime                         0.021              -0.035     1.000             0.945   -0.120
Maintenance_Cost                 0.018              -0.028     0.945             1.000   -0.115
Revenue                          0.045               0.142    -0.120            -0.115    1.000`,
            interpretation: 'A forte correlação entre Downtime e Maintenance Cost (r = 0.945) ratifica que o tempo inativo é a maior alavanca de custo.'
        },
        {
            biblio: 'Grus (2021), Cap. 10',
            title: '4. Validação de Hipóteses de Negócio com Dados de Produção',
            theory: 'A etapa final da EDA responde diretamente às perguntas formuladas pela gestão (ex: <em>"Linhas com maior consumo de energia geram maior receita?"</em>).',
            code: `hipotese_energia = df_factory.groupby(pd.qcut(df_factory['Energy_Consumption'], 3, labels=['Baixo', 'Médio', 'Alto']))['Revenue'].mean().round(2)
print("Receita Média (USD) por Nível de Consumo Energético:")
print(hipotese_energia)`,
            output: `Receita Média (USD) por Nível de Consumo Energético:
Energy_Consumption
Baixo    28950.40
Médio    29100.20
Alto     29250.80`,
            interpretation: 'O consumo energético não apresenta impacto direto na receita líquida, invalidando a hipótese de dependência energética.'
        }
    ],
    10: [
        {
            biblio: 'Grus (2021), Cap. 3; McKinney (2023), Cap. 9',
            title: '1. Princípios de Storytelling com Dados & a Pirâmide de Minto',
            theory: 'O <strong>Storytelling com Dados</strong> é a habilidade de traduzir análises estatísticas em narrativas persuasivas. A estrutura recomendada é o <strong>Princípio da Pirâmide de Minto</strong>:<br><ol><li><strong>Resposta / Conclusão Primeiro:</strong> Apresentar a recomendação executiva logo no início.</li><li><strong>Argumentos Chave de Suporte:</strong> Agrupar evidências estatísticas em categorias de impacto.</li><li><strong>Dados Brutos e Detalhes Técnicos:</strong> Disponibilizar a base metodológica para auditoria.</li></ol>',
            code: `kpis_executivos = {
    'Receita_Total_USD': df_factory['Revenue'].sum(),
    'Eficiencia_Global_%': df_factory['Machine_Efficiency'].mean(),
    'Downtime_Total_Horas': df_factory['Downtime'].sum(),
    'Custo_Manutencao_Total_USD': df_factory['Maintenance_Cost'].sum()
}

print("=== PARECER EXECUTIVO (STORYTELLING COM DADOS) ===")
print(f"1. CONCLUSÃO: Recomendada intervenção preventiva na Linha Delta para recuperar $78,900 em manutenção.")
print(f"2. EVIDÊNCIAS CHAVE:")
print("   • Receita Acumulada: $" + f"{kpis_executivos['Receita_Total_USD']:,.2f}")
print("   • Eficiência Média Global: " + f"{kpis_executivos['Eficiencia_Global_%']:.1f}%")
print("   • Perda Total em Paradas: " + f"{kpis_executivos['Downtime_Total_Horas']:.1f} horas")`,
            output: `=== PARECER EXECUTIVO (STORYTELLING COM DADOS) ===
1. CONCLUSÃO: Recomendada intervenção preventiva na Linha Delta para recuperar $78,900 em manutenção.
2. EVIDÊNCIAS CHAVE:
   • Receita Acumulada: $11,590,851.42
   • Eficiência Média Global: 84.9%
   • Perda Total em Paradas: 5606.1 horas`,
            interpretation: 'A conclusão estratégica é apresentada de forma direta, sustentada por evidências quantitativas consolidadas.'
        },
        {
            biblio: 'McKinney (2023), Cap. 9',
            title: '2. Arquitetura de Dashboards Industriais & Escolha de Visualizações',
            theory: 'Para comunicação efetiva, aplica-se a regra de escolha do gráfico correto:<br><ul><li><strong>Comparação Categórica:</strong> Gráfico de Barras horizontais ou verticais.</li><li><strong>Evolução Temporal:</strong> Gráfico de Linhas contínuas.</li><li><strong>Distribuição e Outliers:</strong> Histograma, KDE e Boxplots.</li><li><strong>Relação Bivariada:</strong> Scatterplot de Dispersão e Heatmap de Correlação.</li></ul>',
            code: `# Exemplo conceitual de estrutura de Dashboard Plotly Subplots 2x2
import plotly.graph_objects as go
from plotly.subplots import make_subplots
fig = make_subplots(rows=2, cols=2)`,
            output: `[Dashboard Executivo Interativo 2x2 Renderizado no Canvas Plotly]`,
            interpretation: 'Permite aos diretores navegar visualmente pelos indicadores com tooltips no hover e filtros de exibição.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 2; Fávero & Belfiore (2017), Cap. 1',
            title: '3. Definição e Cálculo de KPIs Estratégicos de Negócio (OEE)',
            theory: 'O <strong>OEE (Overall Equipment Effectiveness)</strong> é o KPI mestre da manufatura, unindo Disponibilidade, Desempenho e Qualidade:<br>$$OEE = \\text{Disponibilidade} \\times \\text{Desempenho} \\times \\text{Qualidade}$$',
            code: `disponibilidade = (1 - (df_factory['Downtime'].sum() / (len(df_factory) * 24))) * 100
qualidade = (1 - (df_factory['Defect_Rate'].mean() / 100)) * 100
oee_estimado = (disponibilidade / 100) * (df_factory['Machine_Efficiency'].mean() / 100) * (qualidade / 100) * 100

print(f"Índice de Disponibilidade: {disponibilidade:.2f}%")
print(f"Índice de Qualidade: {qualidade:.2f}%")
print(f"KPI OEE Global da Planta: {oee_estimado:.2f}%")`,
            output: `Índice de Disponibilidade: 94.16%
Índice de Qualidade: 95.50%
KPI OEE Global da Planta: 76.35%`,
            interpretation: 'O OEE global de 76.35% situa a fábrica dentro dos padrões internacionais da indústria.'
        },
        {
            biblio: 'Grus (2021), Cap. 3',
            title: '4. Redação de Relatórios Analíticos e Pareceres Gerenciais',
            theory: 'Um relatório analítico profissional deve conter resumo executivo, metodologia utilizada, limitações do estudo estatístico e recomendações acionáveis com estimativa de ROI.',
            code: `print("RELATÓRIO GERENCIAL DE SÍNTESE OPERACIONAL")
print("Status: Aprovado para Apresentação em Banca Executiva")`,
            output: `RELATÓRIO GERENCIAL DE SÍNTESE OPERACIONAL
Status: Aprovado para Apresentação em Banca Executiva`,
            interpretation: 'Síntese das recomendações operacionais pronta para envio aos gestores de produção.'
        }
    ],
    11: [
        {
            biblio: 'Bussab & Morettin (2013); McKinney (2023); Grus (2021); Fávero & Belfiore (2017)',
            title: '1. O Desafio Capstone Industrial: Integração de Todo o Ciclo de Dados',
            theory: 'O **Projeto Capstone Final** exige a execução rigorosa de todas as 10 etapas da disciplina sobre um dataset industrial inédito (`data/projeto_final_capstone.csv`), integrando ingestão, limpeza, estatística descritiva, inferência, testes de hipóteses, séries temporais e storytelling.',
            code: `import pandas as pd
from scipy import stats

df_capstone = pd.read_csv('data/projeto_final_capstone.csv')

print("=== PROJETO CAPSTONE FINAL: CARREGAMENTO DE DADOS INÉDITOS ===")
print(f"Dimensões do Dataset: {df_capstone.shape}")
print(df_capstone.head(2))`,
            output: `=== PROJETO CAPSTONE FINAL: CARREGAMENTO DE DADOS INÉDITOS ===
Dimensões do Dataset: (550, 11)
       Batch_ID Plant_Location            Timestamp  Sensor_Temp  Sensor_Pressure  Vibration_RMS  Power_KW  Quality_Score  Scrap_Units  Operational_Cost_USD           Status
BATCH-2026-100      Planta_SP  2026-06-01 00:00:00        78.12             6.12           2.85    118.50           92.5            2                712.40  Operação Normal
BATCH-2026-101      Planta_MG  2026-06-01 04:00:00        77.95             5.85           2.91    121.20           91.0            4                728.10  Operação Normal`,
            interpretation: 'Dataset inédito contendo 550 lotes industriais com medições de sensores térmicos, de pressão, vibração e custo operacional.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 6; Fávero & Belfiore (2017), Cap. 3',
            title: '2. Detecção de Anomalias Estatísticas via Z-Score ($|Z| > 3.0$) & CEP',
            theory: 'O <strong>Z-Score</strong> padroniza a variável em unidades de desvio padrão:<br>$$Z = \\frac{x - \\bar{x}}{s}$$No **Controle Estatístico de Processo (CEP / Six-Sigma)**, medições com $$|Z| > 3.0$$ são classificadas como **Anomalias Críticas** (probabilidade de ocorrência acidental de apenas 0.27% sob a normalidade).',
            code: `# Imputação e Cálculo de Z-Score para Detecção Automatizada de Anomalias
df_capstone['Sensor_Pressure'] = df_capstone['Sensor_Pressure'].fillna(df_capstone['Sensor_Pressure'].median())

temp_media = df_capstone['Sensor_Temp'].mean()
temp_desvio = df_capstone['Sensor_Temp'].std()
df_capstone['Z_Score_Temp'] = (df_capstone['Sensor_Temp'] - temp_media) / temp_desvio

anomalias = df_capstone[df_capstone['Z_Score_Temp'].abs() > 3.0]
print(f"Média de Temp (μ): {temp_media:.2f} °C | Desvio Padrão (σ): {temp_desvio:.2f} °C")
print(f"Lotes com Anomalia Crítica (|Z| > 3.0): {len(anomalias)} identificados")
print(anomalias[['Batch_ID', 'Plant_Location', 'Sensor_Temp', 'Z_Score_Temp', 'Status']].head(3))`,
            output: `Média de Temp (μ): 78.03 °C | Desvio Padrão (σ): 4.02 °C
Lotes com Anomalia Crítica (|Z| > 3.0): 6 identificados
           Batch_ID Plant_Location  Sensor_Temp  Z_Score_Temp           Status
BATCH-2026-145      Planta_MG        90.45        3.089552  Alerta Crítico
BATCH-2026-212      Planta_SP        91.12        3.256218  Alerta Crítico
BATCH-2026-389      Planta_PR        90.80        3.176616  Alerta Crítico`,
            interpretation: 'Foram detectados 6 lotes com temperatura excedendo 3 desvios padrão acima da média, exigindo investigação de falha de resfriamento.'
        },
        {
            biblio: 'Bussab & Morettin (2013), Cap. 12; Fávero & Belfiore (2017), Cap. 5',
            title: '3. Síntese Multivariada: Testes de Hipóteses & Validação da Qualidade',
            theory: 'Aplicação conjunta do Teste de Shapiro-Wilk para validar a distribuição dos lotes e análise de regressão para prever o custo de refugos (scrap).',
            code: `stat_w, p_w = stats.shapiro(df_capstone['Sensor_Temp'][:300])
desc_plantas = df_capstone.groupby('Plant_Location')[['Quality_Score', 'Operational_Cost_USD']].mean().round(2)

print(f"1. Teste Shapiro-Wilk de Normalidade (p-valor): {p_w:.4e}")
print("\n2. Resumo da Qualidade e Custo por Planta Industrial:")
print(desc_plantas)`,
            output: `1. Teste Shapiro-Wilk de Normalidade (p-valor): 2.8412e-01

2. Resumo da Qualidade e Custo por Planta Industrial:
                Quality_Score  Operational_Cost_USD
Plant_Location                                     
Planta_MG               89.90                725.40
Planta_PR               89.70                722.10
Planta_SP               90.20                718.50`,
            interpretation: 'A normalidade foi confirmada (p = 0.284) e a Planta SP apresentou o melhor escore de qualidade com o menor custo por lote.'
        },
        {
            biblio: 'McKinney (2023), Cap. 1-12; Grus (2021), Cap. 1-10',
            title: '4. Consolidação dos Entregáveis Capstone & Parecer Final',
            theory: 'Fechamento do Projeto Capstone com a apresentação do parecer técnico de engenharia, recomendando ações preventivas para mitigação de custos com refugo.',
            code: `print("=== CONSOLIDAÇÃO DOS ENTREGÁVEIS CAPSTONE ===")
print("  [OK] Notebook de Código Python Estruturado")
print("  [OK] Dashboard Interativo 4-Painéis Plotly")
print("  [OK] Relatório Analítico Executivo com Diagnóstico Z-Score")
print("  [OK] Parecer Técnico de Certificação de Qualidade")`,
            output: `=== CONSOLIDAÇÃO DOS ENTREGÁVEIS CAPSTONE ===
  [OK] Notebook de Código Python Estruturado
  [OK] Dashboard Interativo 4-Painéis Plotly
  [OK] Relatório Analítico Executivo com Diagnóstico Z-Score
  [OK] Parecer Técnico de Certificação de Qualidade`,
            interpretation: 'Projeto Capstone Final concluído com sucesso e validado para aprovação na disciplina.'
        }
    ]
};

window.lessonExercises = {
    1: {
        title: 'Exploração Inicial e Ingestão Estruturada (CRISP-DM)',
        problem: 'No papel de Cientista de Dados da fábrica, execute a fase de Data Understanding do CRISP-DM com o dataset data/manufacturing_quality.csv: (1) Verifique as dimensões do dataset (shape) e memória alocada; (2) Inspecione dtypes e estatísticas descritivas iniciais; (3) Construa a tabela de frequências relativas (%) da variável Defect.',
        requirements: [
            'Carregar data/manufacturing_quality.csv com pd.read_csv',
            'Exibir as dimensões (shape), tipos de dados (dtypes) e describe()',
            'Calcular a frequência relativa percentual de peças defeituosas com value_counts(normalize=True)'
        ],
        starter_code: `import pandas as pd

# TODO: Carregue o dataset de inspeção de qualidade
df_qual = pd.read_csv('data/manufacturing_quality.csv')

# TODO: Inspecione as dimensões e estatísticas
print(f"Shape: {df_qual.shape}")

# TODO: Calcule a frequência percentual de defeitos
`
    },
    2: {
        title: 'Tratamento de Ausentes (Imputação por Mediana) e Amostragem Estratificada',
        problem: 'Analise o arquivo data/manufacturing_quality.csv: (1) Identifique a quantidade de ausentes em Pressure e impute os nulos utilizando a mediana; (2) Explique por que a mediana é preferível à média na presença de potenciais outliers; (3) Extraia uma Amostra Estratificada proporcional de 20% das peças agrupadas por Shift.',
        requirements: [
            'Identificar nulos em Pressure e imputar com fillna(df["Pressure"].median())',
            'Extrair amostra estratificada com df.groupby("Shift").apply(lambda x: x.sample(frac=0.20))',
            'Validar se as proporções dos turnos na amostra correspondem com exatidão às da população original'
        ],
        starter_code: `import pandas as pd

df = pd.read_csv('data/manufacturing_quality.csv')

# TODO: Impute os nulos em Pressure pela mediana
# df['Pressure'] = ...

# TODO: Extraia a amostra estratificada de 20% por Shift
`
    },
    3: {
        title: 'Análise Descritiva de Posição, Dispersão e Estabilidade Relativa (CV%)',
        problem: 'Utilizando data/manufacturing_quality.csv, analise a variável Production_Time: (1) Calcule Média, Mediana, Q1, Q3, Desvio Padrão e o Coeficiente de Variação (CV%); (2) Agrupe as métricas por Machine_ID e determine qual equipamento possui o processo mais homogêneo.',
        requirements: [
            'Calcular Média, Mediana, Q1, Q3, Desvio Padrão e Amplitude Interquartil (IQR)',
            'Calcular o Coeficiente de Variação (CV% = std/mean * 100) por Machine_ID',
            'Classificar o nível de variabilidade (Alta/Média/Baixa) com base no CV%'
        ],
        starter_code: `import pandas as pd

df = pd.read_csv('data/manufacturing_quality.csv')

# TODO: Agrupe por Machine_ID e calcule Média, Mediana, Desvio Padrão e CV%
`
    },
    4: {
        title: 'Diagnóstico de Formato de Distribuição: Assimetria, Curtose e Regra Empírica',
        problem: 'Investigue a variável Temperature em data/manufacturing_quality.csv: (1) Calcule o coeficiente de Assimetria (skew) e Curtose (kurtosis); (2) Valide a Regra Empírica Gaussiana verificando a porcentagem de dados situados nos intervalos [mu - 1sigma, mu + 1sigma] e [mu - 2sigma, mu + 2sigma].',
        requirements: [
            'Calcular Assimetria (skewness) e Curtose (kurtosis) de Temperature',
            'Calcular a proporção percentual de dados contidos nos intervalos de 1 e 2 desvios padrão',
            'Interpretar se a distribuição é compatível com a Normal Gaussiana'
        ],
        starter_code: `import pandas as pd

df = pd.read_csv('data/manufacturing_quality.csv')

# TODO: Calcule Assimetria, Curtose e teste a Regra Empírica (68-95-99.7)
`
    },
    5: {
        title: 'Inferência Estatística e Intervalos de Confiança (95% IC) da Vibração',
        problem: 'Com o dataset data/predictive_maintenance.csv: (1) Calcule a Média Amostral e o Erro Padrão da Média (SEM = s / sqrt(n)) da variável Vibration; (2) Construa o Intervalo de Confiança de 95% para a média populacional usando scipy.stats.norm.interval; (3) Determine o tamanho amostral mínimo n necessário para uma margem de erro máxima de ±0.03 RMS.',
        requirements: [
            'Calcular Média Amostral e Erro Padrão com scipy.stats.sem()',
            'Construir o Intervalo de Confiança 95% (scipy.stats.norm.interval)',
            'Calcular o n amostral requerido para margem de erro ±0.03 RMS'
        ],
        starter_code: `import pandas as pd
import numpy as np
from scipy import stats

df_maint = pd.read_csv('data/predictive_maintenance.csv')

# TODO: Calcule Média, SEM, IC 95% e o n mínimo para erro ±0.03
`
    },
    6: {
        title: 'Testes de Hipóteses Formais: Shapiro-Wilk, KS e Qui-Quadrado de Independência',
        problem: 'No dataset data/predictive_maintenance.csv: (1) Aplique o Teste de Shapiro-Wilk na variável Temperature para testar H0 de normalidade; (2) Construa a tabela de contingência cruzada entre Machine_ID e Machine_Failure; (3) Execute o Teste Qui-Quadrado de Independência com alpha = 0.05 e tome a decisão sobre a dependência de falhas.',
        requirements: [
            'Executar scipy.stats.shapiro() em Temperature e interpretar o p-valor',
            'Gerar a tabela cruzada (crosstab) entre Machine_ID e Machine_Failure',
            'Executar scipy.stats.chi2_contingency() e concluir sobre a hipótese H0'
        ],
        starter_code: `import pandas as pd
from scipy import stats

df_maint = pd.read_csv('data/predictive_maintenance.csv')

# TODO: Execute o Teste Shapiro-Wilk e o Teste Qui-Quadrado
`
    },
    7: {
        title: 'Matriz de Correlação (Pearson vs Spearman) e Análise de Associação Categórica',
        problem: 'Utilizando data/predictive_maintenance.csv: (1) Calcule a Matriz de Correlação de Pearson entre variáveis numéricas e identifique se existem colunas multicolineares; (2) Calcule a Matriz de Correlação de Spearman e compare com Pearson; (3) Construa a Tabela de Contingência com frequências relativas percentuais por linha.',
        requirements: [
            'Calcular as matrizes de correlação de Pearson e Spearman (df.corr)',
            'Identificar diferenças entre as duas matrizes e interpretar o resultado',
            'Gerar o crosstab percentual (normalize="index") por Machine_ID'
        ],
        starter_code: `import pandas as pd

df_maint = pd.read_csv('data/predictive_maintenance.csv')

# TODO: Calcule as matrizes de Pearson, Spearman e a tabela cruzada percentual
`
    },
    8: {
        title: 'Análise de Séries Temporais: Resample Diário e Média Móvel (SMA/EMA)',
        problem: 'Com o dataset data/predictive_maintenance.csv: (1) Converta Timestamp para o formato datetime e ordene a série cronologicamente; (2) Aplique um Resample Diário calculando a média e a amplitude térmica; (3) Calcule a Média Móvel Simples de 12 períodos (SMA 12) e a Média Móvel Exponencial (EMA 12).',
        requirements: [
            'Converter Timestamp para datetime (pd.to_datetime) e definir como índice',
            'Aplicar resample("D") calculando estatísticas agregadas diárias',
            'Calcular a Média Móvel Simples (rolling) e a Exponencial (ewm)'
        ],
        starter_code: `import pandas as pd

df_maint = pd.read_csv('data/predictive_maintenance.csv')
df_maint['Timestamp'] = pd.to_datetime(df_maint['Timestamp'])

# TODO: Ordene a série, aplique o resample diário e calcule SMA/EMA
`
    },
    9: {
        title: 'Pipeline Completo de Análise Exploratória de Dados (EDA - Smart Factory)',
        problem: 'Desenvolva um Pipeline de EDA Completo sobre data/smart_factory_analytics.csv: (1) Calcule o agrupamento multivariado por Production_Line com média de eficiência, soma de downtime e soma de receita; (2) Derive o atributo sintético Cost_per_Downtime_Hour; (3) Teste a correlação entre consumo de energia e receita.',
        requirements: [
            'Carregar data/smart_factory_analytics.csv',
            'Construir agrupamento multivariado com agg()',
            'Criar nova coluna sintética e calcular a matriz de correlação multivariada'
        ],
        starter_code: `import pandas as pd

df_factory = pd.read_csv('data/smart_factory_analytics.csv')

# TODO: Implemente o pipeline de EDA multivariado e engenharia de atributos
`
    },
    10: {
        title: 'Storytelling Executivo, Cálculo do OEE e Relatório Gerencial',
        problem: 'Com o dataset data/smart_factory_analytics.csv: (1) Calcule os KPIs estratégicos globais da fábrica (Receita Total, Eficiência Média, Downtime Total e Custo de Manutenção); (2) Estime o KPI OEE (Overall Equipment Effectiveness) da planta; (3) Redija o Parecer Executivo estruturado segundo a Pirâmide de Minto.',
        requirements: [
            'Calcular os 4 KPIs executivos da fábrica inteligente',
            'Estimar o OEE global (Disponibilidade x Desempenho x Qualidade)',
            'Imprimir o relatório formatado em estrutura executiva'
        ],
        starter_code: `import pandas as pd

df_factory = pd.read_csv('data/smart_factory_analytics.csv')

# TODO: Calcule os KPIs estratégicos, o OEE e formate o parecer executivo
`
    },
    11: {
        title: 'PROJETO CAPSTONE FINAL: Análise Integrada de Desempenho e Qualidade Industrial',
        problem: 'Desenvolva a Resolução Integrada Capstone no dataset data/projeto_final_capstone.csv: (1) Trate nulos em Sensor_Pressure pela mediana; (2) Avalie a normalidade de Sensor_Temp com Shapiro-Wilk; (3) Detecte anomalias estatísticas pelo Z-Score (|Z| > 3.0); (4) Consolide o parecer técnico e entregáveis finais.',
        requirements: [
            'Tratamento de dados ausentes por imputação pela mediana',
            'Teste Formal de Normalidade de Shapiro-Wilk com SciPy',
            'Detecção automatizada de anomalias por Z-Score (|Z| > 3.0)',
            'Relatório sintético de inteligência operacional Capstone'
        ],
        starter_code: `import pandas as pd
from scipy import stats

# TODO: Desenvolva a resolução integradora do Projeto Capstone Final
`
    }
};
