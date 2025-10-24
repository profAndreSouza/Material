# Monitoramento e Visualização em Tempo Real com Power BI

## Enunciado

Após desenvolver modelos de detecção e simular pipelines de streaming, a empresa precisa **monitorar em tempo real o comportamento da rede e seus indicadores de desempenho**.
O desafio consiste em **construir um dashboard interativo** no Power BI capaz de exibir métricas, tendências e alertas automáticos, facilitando a tomada de decisão pelos analistas.


## Contexto

Em ambientes corporativos modernos, o **monitoramento contínuo de dados** é essencial para garantir a **disponibilidade, segurança e eficiência operacional**.
Dashboards de monitoramento — especialmente em áreas como segurança da informação, saúde ou infraestrutura — permitem detectar **anormalidades, picos de tráfego, falhas e ameaças** antes que causem impactos significativos.

Ferramentas como o **Power BI**, o **Streamlit** e o **Grafana** possibilitam a **visualização dinâmica de dados** e a **integração com fluxos de streaming**, tornando possível acompanhar indicadores em tempo real e gerar **alertas proativos**.


## Teoria

### Principais Métricas de Rede

* **Volume de tráfego (bytes/s):** indica a carga de dados transmitida.
* **Latência média (ms):** mede o tempo de resposta da rede.
* **Taxa de erros (%):** reflete a qualidade e estabilidade da comunicação.
* **Eventos anômalos:** sinalizam comportamentos fora do padrão esperado.

Essas métricas, quando monitoradas em conjunto, formam a base para **identificação precoce de falhas ou incidentes**.


### Boas Práticas de Dashboards Operacionais

* **Clareza visual:** priorize indicadores críticos e minimize ruído visual.
* **Hierarquia informacional:** organize painéis por prioridade (visão executiva, técnica, etc.).
* **Atualização periódica:** configure *refresh* automático ou conexão direta com fontes em tempo real.
* **Alertas condicionais:** destaque métricas fora de parâmetros esperados.
* **KPIs visuais:** utilize cores, ícones e cartões para sintetizar o estado atual do sistema.


### Ferramentas e Aplicações

| Ferramenta    | Aplicação Principal                            | Nível de Código |
| ------------- | ---------------------------------------------- | --------------- |
| **Power BI**  | Visualização e análise de dados empresariais   | Baixo           |
| **Streamlit** | Criação de dashboards customizados em Python   | Médio           |
| **Grafana**   | Monitoramento técnico de sistemas e servidores | Avançado        |


## Atividade Prática — Power BI

### Tema

**Análise de Indicadores de Saúde e Risco Cardíaco**

### Objetivo

Aplicar o processo de **ETL (Extração, Transformação e Carga)** e desenvolver **relatórios interativos no Power BI**, utilizando o dataset *Heart Disease UCI*, como exemplo de monitoramento e visualização de métricas críticas em tempo quase real.


### Dataset

* **Nome:** *Heart Disease UCI*
* **Fonte:** [Kaggle - Heart Disease UCI](https://www.kaggle.com/datasets/ronitf/heart-disease-uci)
* **Descrição:** Contém informações clínicas de pacientes (idade, sexo, colesterol, pressão arterial, frequência cardíaca, entre outros) e um atributo de saída indicando a presença ou ausência de doença cardíaca. Ideal para explorar padrões de risco e correlações entre variáveis de saúde.


### Tarefas

1. **Extração**

   * Baixe o dataset e carregue-o no Power BI Desktop.
   * Analise a estrutura e o tipo de dados de cada coluna.

2. **Transformação (Power Query)**

   * Remova valores nulos e registros duplicados.
   * Padronize nomes de colunas (ex: “chol” → “Colesterol”).
   * Ajuste tipos de dados conforme necessário (ex: idade → número inteiro).
   * Crie colunas derivadas, como:

     * *Faixa Etária* (Jovem, Adulto, Idoso)
     * *Nível de Colesterol* (Baixo, Normal, Alto)
   * Filtre outliers e valores inconsistentes.

3. **Carga**

   * Carregue os dados tratados no modelo do Power BI.
   * Configure relacionamentos, se houver tabelas auxiliares.

4. **Visualizações Recomendadas**

   * **Gráfico de barras:** frequência de doença por faixa etária.
   * **Gráfico de colunas empilhadas:** distribuição de doença por gênero.
   * **Mapa de calor ou matriz:** correlação entre variáveis numéricas.
   * **Cards (indicadores):** média de idade, colesterol e percentual de risco.
   * **Gráfico de dispersão:** relação entre idade e frequência cardíaca máxima.
   * **Segmentadores (slicers):** gênero, faixa etária e status de doença.

5. **Entrega**

   * Arquivo `.pbix` contendo:

     * Processo de ETL documentado (etapas visíveis no Power Query).
     * Painel com **mínimo de 4 visuais interativos e 2 indicadores principais**.
   * Captura de tela do painel e resumo das conclusões (máx. 1 página).
