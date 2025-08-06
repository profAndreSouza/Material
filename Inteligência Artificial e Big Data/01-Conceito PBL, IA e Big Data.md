# 1. Introdução ao Problema

## Situação-problema

> “Uma empresa de varejo deseja antecipar o comportamento de compra dos seus clientes usando dados históricos, com o objetivo de melhorar a retenção e aumentar as vendas.”

Vocês atuarão como analistas de dados contratados para ajudar a empresa a entender melhor seus clientes por meio da análise dos dados transacionais. O desafio é organizar, tratar e interpretar esses dados para identificar padrões e sugerir estratégias que permitam personalizar ofertas, evitar cancelamentos e fidelizar clientes.



## Discussão orientada

Reflitam sobre a importância desse tema no mercado atual. Pensem em exemplos reais, como programas de fidelidade, promoções personalizadas e anúncios baseados no histórico de navegação. Várias empresas do varejo, como Amazon, Magazine Luiza e Americanas, utilizam inteligência artificial para isso.



## Questões norteadoras

Para guiar a reflexão, considerem as seguintes perguntas:

* Que tipos de dados uma empresa de varejo costuma armazenar?
* De que forma esses dados podem ajudar a compreender o comportamento dos clientes?
* Que decisões estratégicas a empresa pode tomar com base nesses dados?
* Quais fatores internos e externos influenciam a decisão de compra?
* Que padrões de comportamento podem ser descobertos a partir dos dados históricos?



## Brainstorming em grupos

Formem grupos para levantar perguntas que acreditam ser relevantes para a empresa responder e hipóteses que gostariam de investigar, por exemplo:

* Quem são os clientes mais fiéis?
* Quais produtos costumam ser comprados juntos?
* Em quais períodos as vendas são mais altas?
* Qual perfil de cliente tende a abandonar o carrinho?
* Como prever se um cliente voltará a comprar?

Algumas hipóteses que podem surgir:

* Clientes que gastam mais de R\$ 500 tendem a voltar em até 30 dias.
* Clientes que recebem cupons de desconto realizam compras mais rapidamente.
* Quem compra eletrodomésticos costuma comprar acessórios dentro de uma semana.

Cada grupo deve preparar um resumo para compartilhar com a turma, ajudando a construir uma visão inicial do problema.



## Produto esperado

* Uma lista de perguntas e hipóteses sobre o comportamento dos clientes.
* Engajamento com o problema e entendimento inicial das possíveis soluções.
* Base para a exploração dos dados nas próximas etapas.


# 2. Fundamentos Conceituais

## O que é Ciência de Dados?

Ciência de Dados é uma área multidisciplinar que transforma dados brutos em informações úteis e, por fim, em conhecimento valioso para tomadas de decisão.

* **Dados → Informação → Conhecimento**

  * **Dados**: são fatos ou registros simples e sem contexto, como números, textos ou sinais coletados em uma base. Por exemplo, o registro de uma venda: “Cliente A comprou 3 unidades do produto X às 14h do dia 01/08”.
  * **Informação**: quando esses dados são organizados e processados para responder perguntas específicas, como “Quantos produtos X foram vendidos na última semana?”.
  * **Conhecimento**: é o resultado da análise e interpretação da informação, que permite prever tendências ou tomar decisões, por exemplo, “As vendas do produto X aumentam 20% toda vez que há promoção em agosto, portanto devemos reforçar campanhas nessa época”.

* **Papéis na área:**

  * **Cientista de Dados:** utiliza estatística, programação e machine learning para extrair insights e construir modelos preditivos. Por exemplo, desenvolver um modelo que prevê a probabilidade de um cliente abandonar uma compra online.
  * **Engenheiro de Dados:** responsável por construir e manter pipelines que capturam, limpam e armazenam dados, garantindo que estejam acessíveis e com qualidade para análise. Por exemplo, montar uma estrutura que integra dados de vendas, redes sociais e atendimento ao cliente.
  * **Analista de Dados:** interpreta dados e gera relatórios para suportar decisões. Pode usar ferramentas de visualização para mostrar, por exemplo, quais regiões têm maior potencial de vendas.

## O que é Inteligência Artificial?

Inteligência Artificial é a área da computação que desenvolve sistemas capazes de executar tarefas que normalmente requerem inteligência humana.

* **Definição:** sistemas que aprendem e tomam decisões com base em dados, podendo adaptar-se sem intervenção humana constante.
* **Breve histórico:**

  * Década de 1950: primeiros programas baseados em regras lógicas.
  * Década de 1980: avanços em redes neurais artificiais.
  * Anos 2000 em diante: surgimento do aprendizado profundo (deep learning) e grande avanço graças ao aumento da capacidade computacional.
* **Exemplos cotidianos:**

  * Assistentes virtuais como Alexa e Siri, que entendem comandos de voz e respondem perguntas.
  * Sistemas de recomendação da Netflix, que sugerem filmes baseados no histórico de visualização.
  * Carros autônomos que interpretam o ambiente para dirigir sozinhos.
  * Ferramentas de reconhecimento facial usadas para desbloquear smartphones.

## O que é Big Data?

Big Data trata do processamento de grandes volumes de dados, que são gerados rapidamente e em diferentes formatos, tornando inviável seu tratamento com métodos tradicionais.

* **Os 5Vs do Big Data:**

  * **Volume:** a quantidade imensa de dados produzidos diariamente. Por exemplo, o Facebook processa mais de 4 petabytes (4 milhões de gigabytes) de dados por dia, vindos de posts, fotos, vídeos e interações.
  * **Variedade:** diferentes tipos e fontes de dados, incluindo textos, imagens, vídeos, dados de sensores, logs de sistemas e mídias sociais. Por exemplo, dados estruturados de vendas junto com textos de avaliações de clientes e vídeos de segurança.
  * **Velocidade:** a rapidez com que os dados são gerados e precisam ser processados para manter sua relevância. Por exemplo, no mercado financeiro, dados de transações são analisados em milissegundos para detectar fraudes.
  * **Veracidade:** a qualidade e confiabilidade dos dados, que podem conter erros, dados incompletos ou inconsistentes. Um desafio é filtrar dados falsos ou ruídos, como comentários falsos em redes sociais.
  * **Valor:** o benefício real que pode ser extraído da análise dos dados. Dados em si não valem nada se não geram conhecimento útil para melhorar processos ou decisões, como identificar um novo perfil de cliente.

* **Diferença entre dados tradicionais e Big Data:**
  Dados tradicionais são geralmente pequenos e estruturados, armazenados em bancos relacionais, como uma planilha de Excel com vendas mensais. Já o Big Data envolve dados em grande escala, muitas vezes não estruturados, que exigem ferramentas como Hadoop, Spark ou bases NoSQL para armazenamento e análise.



# 3. Leitura e exploração inicial do dataset

## Apresentação do dataset

Para essa primeira atividade prática, vocês terão acesso a um conjunto de dados realista relacionado a varejo, que pode conter informações sobre vendas, clientes, produtos, datas, preços, entre outros. A ideia é se familiarizar com os dados antes de iniciar análises mais profundas.


## Objetivos da atividade

* Conhecer as características gerais do dataset.
* Identificar possíveis problemas, como dados faltantes ou inconsistentes.
* Começar a pensar nas variáveis que podem ser importantes para responder ao problema da empresa de varejo.
* Usar ferramentas práticas como Google Colab, Jupyter Notebook (Python) ou mesmo Excel para exploração inicial.


## Perguntas para guiar a exploração

* Quais são as colunas ou variáveis do dataset? (Ex.: ID do cliente, categoria do produto, quantidade vendida, preço, data da venda)
* Existem dados faltantes? Em quais colunas? Como eles podem afetar a análise?
* Quais variáveis parecem ter maior impacto para prever o comportamento de compra? (Ex.: frequência de compra, valor gasto, categorias preferidas)
* Existem colunas com dados categóricos que precisem ser convertidos para análise (ex.: sexo, região, método de pagamento)?
* Quais tipos de variáveis temos? Numéricas, categóricas, temporais?

## Sugestões de datasets

1. **Online Retail Dataset (UCI Machine Learning Repository)**

   * URL: [https://archive.ics.uci.edu/ml/datasets/online+retail](https://archive.ics.uci.edu/ml/datasets/online+retail)
   * Descrição: Dados de uma loja varejista de comércio eletrônico do Reino Unido, contendo detalhes sobre produtos, clientes e vendas entre 2010 e 2011.
   * Atenção: Os dados estão em inglês, mas são muito completos para prática de análise de varejo.

2. **E-Commerce Data (Kaggle)**

   * URL: [https://www.kaggle.com/datasets/mkechinov/ecommerce-behavior-data-from-multi-category-store](https://www.kaggle.com/datasets/mkechinov/ecommerce-behavior-data-from-multi-category-store)
   * Descrição: Dados comportamentais e de vendas em um e-commerce, ideal para explorar diferentes perfis de clientes.
   * Também em inglês.


## Datasets em português e contexto brasileiro

Encontrar datasets públicos em português e com foco no varejo brasileiro é mais difícil, mas algumas fontes oferecem dados úteis:

* **IBGE - Pesquisa de Orçamentos Familiares (POF)**

  * URL: [https://www.ibge.gov.br/estatisticas/economicas/condicoes-de-vida/9162-pesquisa-de-orcamentos-familiares.html](https://www.ibge.gov.br/estatisticas/economicas/condicoes-de-vida/9162-pesquisa-de-orcamentos-familiares.html)
  * Descrição: Dados detalhados sobre consumo das famílias brasileiras, podendo ser usados para entender padrões de compra.
  * Exige trabalho para adaptar e limpar.

* **Kaggle Brasil – Base de dados de vendas de supermercado**

  * Exemplo: [https://www.kaggle.com/datasets/victorsoeiro/supermarket-sales](https://www.kaggle.com/datasets/victorsoeiro/supermarket-sales)
  * Contém dados de vendas em supermercados no Brasil, com colunas como gênero, faixa etária, produto, quantidade, total da compra e mais.

* **Dados abertos do Governo Brasileiro (dados.gov.br)**

  * URL: [https://dados.gov.br/dataset](https://dados.gov.br/dataset)
  * Possui vários conjuntos de dados que podem incluir dados de comércio, como microdados da Nota Fiscal Eletrônica, que requerem processamento para uso.


## Dicas para a exploração inicial

* No Google Colab ou Jupyter Notebook, use bibliotecas como `pandas` para carregar e visualizar dados. Exemplo básico:

  ```python
  import pandas as pd

  df = pd.read_csv('caminho_do_arquivo.csv')
  print(df.head())
  print(df.info())
  print(df.isnull().sum())
  ```

* No Excel, carregue o arquivo CSV, explore as colunas e use filtros para identificar valores ausentes.

* Identifique colunas com muitos dados faltantes que podem ser descartadas ou que precisem ser tratadas.

* Pense em quais colunas podem ser usadas como variáveis independentes (entrada) e qual a variável que desejam prever (saída), por exemplo, se o objetivo é prever o comportamento de compra, a saída pode ser a quantidade comprada ou frequência.

# 4. Brainstorming em grupo

Nesta atividade, vocês irão trabalhar em grupos para levantar hipóteses iniciais sobre o comportamento dos clientes a partir do problema apresentado e dos dados explorados.

## Objetivos

* Identificar padrões de comportamento que podem existir nos dados.
* Formular perguntas e hipóteses que orientem a análise.
* Estimular o pensamento crítico e o trabalho colaborativo.


## Passos para a atividade

1. **Formação dos grupos**
   Organizem-se em grupos de 3 a 5 pessoas para facilitar o diálogo e a troca de ideias.

2. **Levantamento de hipóteses**
   Considerando o problema e o dataset, discutam e anotem hipóteses relacionadas a possíveis padrões de comportamento, como por exemplo:

   * Quem são os clientes que mais compram e com que frequência?
   * Quais produtos costumam ser adquiridos juntos, formando combinações frequentes?
   * Existe sazonalidade nas vendas, ou seja, períodos com aumento ou queda nas compras?
   * Quais características dos clientes (idade, localização, histórico) podem influenciar o padrão de compra?
   * Como campanhas promocionais podem impactar o comportamento de compra?

3. **Registro das hipóteses**
   Anotem as ideias em cadernos ou utilizem murais digitais colaborativos como Padlet, Jamboard ou Miro para facilitar a visualização e discussão entre os grupos.

4. **Compartilhamento e debate**
   Cada grupo deve apresentar suas hipóteses para a turma, promovendo um debate que ajude a ampliar a compreensão do problema e guiar as próximas etapas da análise.


## Produto esperado

* Lista estruturada de hipóteses sobre o comportamento dos clientes.
* Maior engajamento com o problema.
* Base para definir quais análises e modelos aplicar posteriormente.
