from pyspark.sql import SparkSession
from pyspark.sql.functions import col, split

# Inicializa sessão Spark
spark = SparkSession.builder \
    .appName("KDDCup99Stream") \
    .getOrCreate()

# Caminho do HDFS
data_path = "hdfs://namenode:9000/user/root/input/kddcup.data_10_percent_corrected"

# Leitura inicial
df = spark.read.csv(data_path, header=False)

# Exemplo de tratamento simples
df = df.withColumnRenamed("_c0", "duration") \
       .withColumnRenamed("_c1", "protocol_type") \
       .withColumnRenamed("_c2", "service") \
       .withColumnRenamed("_c41", "label")

# Contagem de tipos de ataque
summary = df.groupBy("label").count()

summary.show()

# Simulação de fluxo contínuo (lendo o mesmo arquivo repetidamente)
import time
while True:
    df = spark.read.csv(data_path, header=False)
    df = df.withColumnRenamed("_c0", "duration").withColumnRenamed("_c41", "label")
    summary = df.groupBy("label").count()
    summary.show()
    time.sleep(10)
