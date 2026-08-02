FROM python:3.11-slim

WORKDIR /app

# Copiar dependências e instalar
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar a aplicação e a pasta de exercícios
COPY . .

EXPOSE 5000

ENV PORT=5000
ENV FLASK_ENV=development

CMD ["python", "app.py"]
