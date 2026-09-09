FROM python:3.11-slim

WORKDIR /app

# Instala dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia código fonte e testes
COPY . .

# Expõe a porta padrão da aplicação Flask
EXPOSE 5000

# Variáveis de ambiente para Flask e Python
ENV FLASK_APP=run.py
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app

# Comando padrão: inicia a aplicação Flask
CMD ["python", "run.py"]
