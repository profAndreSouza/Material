# Aula 7: Análise de Regressão e Séries Temporais

## Objetivos da Aula

* Compreender os fundamentos da análise de regressão linear simples.
* Identificar padrões em dados temporais e aplicar conceitos de séries temporais.
* Utilizar ferramentas estatísticas para prever valores futuros com base em tendências passadas.
* Explorar visualizações e medidas de ajuste de modelos estatísticos.

---

## Regressão Linear

A **regressão linear** é uma das técnicas estatísticas mais utilizadas para modelar e prever a relação entre duas variáveis quantitativas. Ela permite estimar o valor esperado de uma **variável dependente** (também chamada de resposta ou **Y**) com base em uma ou mais **variáveis independentes** (também chamadas de explicativas ou **X**).

Neste contexto, a forma mais simples é a **regressão linear simples**, que envolve apenas uma variável independente:

$$
Y = \beta_0 + \beta_1 X + \varepsilon
$$

* **$\beta_0$** (intercepto): representa o valor esperado de $Y$ quando $X = 0$.
* **$\beta_1$** (coeficiente angular ou inclinação): indica o quanto $Y$ varia, em média, a cada unidade de aumento em $X$.
* **$\varepsilon$** (erro aleatório): representa as variações não explicadas pelo modelo, assumidas como normalmente distribuídas com média zero.

> A regressão linear busca encontrar os valores de $\beta_0$ e $\beta_1$ que **minimizam a soma dos quadrados dos resíduos**, ou seja, as diferenças entre os valores observados e os valores previstos pelo modelo.

---

### Pressupostos da Regressão Linear

Para que os resultados da regressão sejam confiáveis, é importante que os seguintes pressupostos sejam atendidos:

1. **Linearidade**: a relação entre X e Y deve ser aproximadamente linear.
2. **Independência dos erros**: os resíduos (erros) devem ser independentes entre si.
3. **Homoscedasticidade**: os erros devem ter variância constante ao longo dos valores de X.
4. **Normalidade dos erros**: os resíduos devem seguir uma distribuição normal.

---

### Etapas para Aplicar a Regressão Linear

1. **Exploração dos Dados**

   * Construir gráficos de dispersão para visualizar a relação entre as variáveis.
   * Calcular a **correlação de Pearson** para quantificar a força da associação linear entre X e Y.

2. **Ajuste do Modelo**

   * Utilizar métodos como **mínimos quadrados ordinários (OLS)** para estimar $\beta_0$ e $\beta_1$.
   * Ferramentas como `scipy`, `statsmodels` ou `sklearn` em Python podem ser utilizadas para esse ajuste.

3. **Avaliação do Modelo**

   * **R² (coeficiente de determinação)**: indica a proporção da variância em Y que é explicada por X. Varia entre 0 e 1.
   * **Erro padrão dos coeficientes**: mede a precisão das estimativas dos parâmetros.
   * **Valor-p (p-value)**: usado para testar a significância estatística de $\beta_1$. Um valor-p pequeno (geralmente < 0,05) indica que a variável X tem efeito significativo sobre Y.
   * **Gráficos de resíduos**: ajudam a verificar a adequação do modelo e os pressupostos.

4. **Interpretação dos Coeficientes**

   * **$\beta_1$**: “para cada aumento de 1 unidade em X, espera-se um aumento de $\beta_1$ unidades em Y, em média”.
   * **$\beta_0$**: valor estimado de Y quando X é zero (nem sempre tem interpretação prática).

---

### Exemplo Ilustrativo

Imagine uma empresa que deseja prever o faturamento mensal (Y) com base no valor investido em propaganda (X). Após coletar dados dos últimos meses, aplica-se a regressão linear e obtém-se:

$$
\hat{Y} = 2000 + 3.5X
$$

Nesse caso:

* O intercepto $\beta_0 = 2000$ indica que, mesmo sem investimento em propaganda, o faturamento médio é R\$2000.
* O coeficiente $\beta_1 = 3.5$ indica que, para cada R\$1 investido em propaganda, o faturamento esperado aumenta em R\$3,50.

---


## Projeto Prático

**Tema**: Previsão de vendas com regressão linear e identificação de padrões temporais.

### Parte 1 – Regressão Linear:

* Simular um conjunto de dados com uma variável `vendas` e `gastos com propaganda`.
* Calcular e visualizar a regressão linear.
* Avaliar o modelo com R² e valor-p.

### Parte 2 – Séries Temporais:

* Gerar dados de vendas mensais com tendência e sazonalidade.
* Aplicar médias móveis e identificar padrões.
* Construir gráficos com `matplotlib` e `seaborn` para interpretar visualmente os componentes da série.

---

## Exercícios

1. **Regressão Linear Simples**:
   Com um dataset simulado, modele a relação entre `horas de estudo` e `nota na prova`. Avalie o R² e interprete o coeficiente angular.

2. **Previsão com Séries Temporais**:
   Simule dados de produção mensal de uma fábrica. Utilize médias móveis para suavizar e identificar a tendência.

3. **Desafio**:
   Dado um conjunto de dados reais (ex: temperatura média mensal), aplique técnicas de séries temporais para prever os próximos 6 meses.

---

## Materiais de Estudo Complementares

* [Khan Academy – Regressão Linear](https://pt.khanacademy.org/math/statistics-probability/describing-relationships-quantitative-data)
* Capítulo sobre Regressão Linear no livro *Estatística Básica* – Wilton Bussab & Pedro Morettin.