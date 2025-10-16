# Pipeline Hadoop + Spark – Análise do KDDCup99 (10%)

Este projeto demonstra o uso de Hadoop e Spark para análise de dados de rede do dataset KDDCup99 (10%), simulando um fluxo contínuo de análise usando Spark Streaming.


## 1. Baixar o Dataset

Acesse o dataset 10% do KDDCup99:

[https://kdd.ics.uci.edu/databases/kddcup99/kddcup.data_10_percent.gz](https://kdd.ics.uci.edu/databases/kddcup99/kddcup.data_10_percent.gz)

Salve o arquivo em uma pasta local, por exemplo:

```
C:\hadoop-spark-pipeline\data\kddcup.data_10_percent.gz
```


## 2. Descompactar no Windows

Opção 1 — Usando 7-Zip:

1. Baixe e instale o 7-Zip: [https://www.7-zip.org/](https://www.7-zip.org/).
2. Clique com o botão direito sobre `kddcup.data_10_percent.gz`.
3. Selecione **7-Zip → Extrair aqui**.

O arquivo descompactado será:

```
kddcup.data_10_percent_corrected
```

para compatibilidade com o script Spark.


## 3. Subir o Cluster Hadoop + Spark

Na raiz do projeto (`hadoop-spark-pipeline`), execute:

```powershell
docker compose up -d
```

Isso irá:

* Subir containers Hadoop (NameNode e DataNode).
* Subir Spark Master e Spark Worker.
* Permitir a integração com HDFS.


## 4. Rodar o Pipeline Spark

O script `stream_job.py` realiza as seguintes etapas:

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, split
import time

# Inicializa sessão Spark
spark = SparkSession.builder.appName("KDDCup99Stream").getOrCreate()

# Caminho do HDFS
data_path = "hdfs://namenode:9000/user/root/input/kddcup.data_10_percent_corrected"

# Leitura inicial do dataset
df = spark.read.csv(data_path, header=False)

# Renomeia colunas relevantes
df = df.withColumnRenamed("_c0", "duration") \
       .withColumnRenamed("_c1", "protocol_type") \
       .withColumnRenamed("_c2", "service") \
       .withColumnRenamed("_c41", "label")

# Contagem de tipos de ataque
summary = df.groupBy("label").count()
summary.show()

# Fluxo contínuo: atualiza análise a cada 10 segundos
while True:
    df = spark.read.csv(data_path, header=False)
    df = df.withColumnRenamed("_c0", "duration").withColumnRenamed("_c41", "label")
    summary = df.groupBy("label").count()
    summary.show()
    time.sleep(10)
```

### Explicação do código

1. **SparkSession:** cria o contexto Spark para processamento distribuído.
2. **Leitura do HDFS:** lê o arquivo descompactado do HDFS (`hdfs://namenode:9000/...`).
3. **Renomeação de colunas:** facilita o acesso a campos como `duration`, `protocol_type`, `service` e `label`.
4. **Contagem de ataques:** agrupa os dados pelo tipo de ataque e exibe a quantidade de ocorrências.
5. **Simulação de streaming:** o mesmo arquivo é relido a cada 10 segundos, simulando fluxo contínuo de dados.


## 5. Visualização da análise

Ao executar o pipeline, o terminal exibirá algo como:

```
+----------------+------+
|           label| count|
+----------------+------+
|          smurf.|280790|
|        neptune.|107201|
|         normal.| 97278|
|        ipsweep.|  1247|
|         satan.|  1589|
...
+----------------+------+
```

* **label:** tipo de conexão/ataque.
* **count:** número de ocorrências no dataset.
* A cada 10 segundos, a análise é atualizada automaticamente.


## 6. Possíveis análises adicionais

Com o mesmo pipeline, é possível:

1. **Distribuição por protocolo:** agrupar por `protocol_type` (`tcp`, `udp`, `icmp`) para identificar protocolos mais atacados.
2. **Distribuição por serviço:** agrupar por `service` (`http`, `ftp`, `smtp`, etc.) para verificar portas mais exploradas.
3. **Percentual de ataques x normal:** calcular a proporção de conexões normais versus ataques.
4. **Filtragem por tipo de ataque específico:** analisar padrões de ataques DoS (`smurf.`, `neptune.`) ou varreduras (`ipsweep.`, `portsweep.`).
5. **Visualização gráfica:** usar bibliotecas como `matplotlib` ou `seaborn` em Spark Pandas para gerar gráficos de barras ou linhas.
6. **Detecção de tendências temporais:** se os dados fossem simulados como fluxo real, seria possível identificar picos de ataque em intervalos de tempo.


## 7. Observações finais

* Este projeto é apenas para fins de estudo e demonstração.
* O Spark está configurado para ler o mesmo arquivo repetidamente, simulando um **streaming contínuo**.
* É possível expandir o pipeline para processar **dados reais de rede em tempo real**, adicionando novos arquivos no HDFS ou conectando a fontes de dados externas.
