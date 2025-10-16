# ===============================================
#  Script: run_pipeline.ps1
#  Descrição: Executa o pipeline Hadoop + Spark
# ===============================================

Write-Host "Iniciando pipeline Hadoop/Spark..." -ForegroundColor Cyan

# 1. Puxar imagens necessárias
Write-Host "Baixando imagens Docker necessárias..." -ForegroundColor Yellow
docker pull bde2020/hadoop-namenode:latest
docker pull bde2020/hadoop-datanode:latest
docker pull bde2020/spark-master:latest
docker pull bde2020/spark-worker:latest

# 2. Subir containers (docker-compose.yml na raiz do projeto)
Write-Host "Subindo containers do cluster..." -ForegroundColor Yellow
docker compose up -d

Start-Sleep -Seconds 15

# 3. Copiar dataset para o container namenode
Write-Host "Copiando dataset para o container namenode..." -ForegroundColor Yellow
docker cp ".\data\kddcup.data_10_percent_corrected" namenode:/tmp/

# 4. Criar diretório no HDFS e enviar arquivo
Write-Host "Criando diretorio e enviando arquivo para o HDFS..." -ForegroundColor Yellow
docker exec namenode hdfs dfs -mkdir -p /user/root/input/
docker exec namenode hdfs dfs -put -f /tmp/kddcup.data_10_percent_corrected /user/root/input/

# 5. Verificar se o arquivo está no HDFS
Write-Host "Verificando arquivo no HDFS..." -ForegroundColor Yellow
docker exec namenode hdfs dfs -ls /user/root/input/

# 6. Executar o job Spark
Write-Host "Executando job Spark..." -ForegroundColor Green
docker exec -it spark-master /spark/bin/spark-submit --master spark://spark-master:7077 /opt/spark/app/stream_job.py
