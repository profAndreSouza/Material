# Escalabilidade e Arquitetura Big Data para Detecção em Tempo Real

## Enunciado
Após treinar modelos de detecção de anomalias, a empresa deseja processar grandes volumes de dados de rede em tempo real.  
O desafio é compreender e simular uma arquitetura Big Data que suporte análise contínua com desempenho e escalabilidade.


## Contexto
Sistemas modernos de cibersegurança precisam processar milhões de eventos por segundo.  
Arquiteturas distribuídas, como **Apache Hadoop**, **Spark** e **Kafka**, são amplamente usadas para ingestão, processamento e análise de dados em fluxo (streaming).


## Teoria

### Desafios do Big Data
- Volume: grandes quantidades de dados
- Velocidade: geração contínua
- Variedade: múltiplas fontes e formatos

### Componentes de uma Arquitetura Big Data
| Camada | Função | Exemplos |
|--------|---------|-----------|
| Ingestão | Coleta e transporte | Kafka, Flume, MQTT |
| Processamento | Análise em tempo real | Spark Streaming, Flink |
| Armazenamento | Persistência | HDFS, Cassandra |
| Visualização | Monitoramento | Power BI, Grafana |

### Processamento em Lote vs Streaming
- **Batch:** dados processados periodicamente.
- **Streaming:** análise contínua, quase instantânea.


## Atividade Prática - Google Colab

### Objetivo
Simular um pipeline de análise contínua usando **PySpark** e um dataset real.

### Dataset sugerido
- **UNSW-NB15 Dataset (Kaggle)**  
  Dados reais de tráfego de rede com ataques rotulados.  
  Link: https://www.kaggle.com/datasets/mrwellsdavid/unsw-nb15


### Passos

#### 1. Configurar PySpark
```python
!pip install pyspark
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("AnomaliasStreaming").getOrCreate()
````

#### 2. Importar dataset

```python
import pandas as pd

df = pd.read_csv('UNSW_NB15_training-set.csv')
sdf = spark.createDataFrame(df)
sdf.printSchema()
```

#### 3. Simular fluxo contínuo de dados

```python
from pyspark.sql.functions import rand, col

stream = sdf.select(col("srcip"), col("dstip"), col("bytes"), col("attack_cat"))
stream.writeStream.format("console").outputMode("append").start()
```

#### 4. Criar lógica simples de detecção

```python
from pyspark.sql.functions import when

alertas = sdf.withColumn("alerta",
    when(col("bytes") > 50000, "Anomalia").otherwise("Normal")
)
alertas.show(5)
```

#### 5. Desafio

Adaptar o código para ler dados continuamente e registrar alertas de ataques por minuto.


## Discussão

* Quais limitações existem em processar streaming em notebooks?
* Como o Spark pode ser integrado a ferramentas de monitoramento (ex: Kafka + Power BI)?


## Reflexão

Quais cuidados de infraestrutura são necessários para manter um sistema de detecção de anomalias 24/7?

