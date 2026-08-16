# Plataforma Integrada FactoryHub (Smart N1)

A **FactoryHub** é a plataforma final integrada que centraliza a telemetria industrial, análise de dados e painéis operacionais da célula fabril **Smart N1**. Ela integra as quatro disciplinas da trilha de desenvolvimento de software industrial:

1. **Automação Industrial**: Ingestão de mensagens via protocolo MQTT.
2. **Ciência de Dados**: Análise exploratória de dados (EDA), exportação CSV e indicadores de produção.
3. **DevOps**: Containerização com Docker e orquestração de serviços.
4. **Computação em Nuvem**: Arquitetura pronta para implantação em nuvem.

---

## Estrutura da Aplicação

```text
FactoryHub/
├── app.py                      # Ponto de entrada do servidor Flask
├── config.py                   # Configurações do banco SQLite e Broker MQTT
├── requirements.txt            # Dependências Python (Flask, SQLAlchemy, Paho-MQTT, Pandas)
├── Dockerfile                  # Configuração da imagem Docker da aplicação
├── docker-compose.yml          # Orquestração (FactoryHub + Broker Mosquitto)
├── gerar_datasets.py           # Script para geração dos dados sintéticos industriais
├── database/                   # Modelos ORM SQLAlchemy (Telemetry, Piece, Alarm)
├── mqtt/                       # Módulo de subscrição MQTT e escuta de tópicos smartn1/#
├── analytics/                  # Motor de estatísticas e exportação em CSV
├── routes/                     # Rotas HTTP (Dashboard, Analytics, Ementas, API)
├── templates/                  # Interface Web (Jinja2 + Bootstrap 5)
├── static/                     # Arquivos estáticos (CSS, JS, imagens)
├── exercicios_automacao/       # Exercícios práticos de automação
├── exercicios_ciencia_dados/   # Exercícios práticos de ciência de dados
├── exercicios_devops/          # Exercícios práticos de DevOps
├── exercicios_nuvem/           # Exercícios práticos de nuvem
└── data/                       # Datasets sintéticos industriais (CSV e SQLite)
```

---

## Como Executar a Aplicação

### Opção 1: Via Docker Compose (Recomendado)

1. Certifique-se de ter o Docker e Docker Compose instalados.
2. No terminal, navegue até a pasta `FactoryHub`:
   ```bash
   cd FactoryHub
   ```
3. Execute o comando para subir o Broker MQTT e a Aplicação Flask:
   ```bash
   docker compose up --build -d
   ```
4. Acesse a aplicação no navegador: [http://localhost:5000](http://localhost:5000)

---

### Opção 2: Execução Local com Python

1. Abra o terminal na pasta `FactoryHub` e crie um ambiente virtual:
   ```bash
   python -m venv venv
   ```
2. Ative o ambiente virtual:
   - **Windows (PowerShell)**: `.\venv\Scripts\Activate.ps1`
   - **Linux/macOS**: `source venv/bin/activate`

3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

4. Gere os dados industriais sintéticos:
   ```bash
   python gerar_datasets.py
   ```

5. Inicie o servidor Flask:
   ```bash
   python app.py
   ```

6. Acesse no navegador em [http://localhost:5000](http://localhost:5000).

---

## Rotas Principais da Aplicação

- `/`: Dashboard principal em tempo real da célula Smart N1.
- `/analytics`: Painel analítico de produção, tendências e alarmes.
- `/ementas`: Visualização das ementas das 4 disciplinas integradas.
- `/api/telemetry`: Endpoint JSON com as últimas leituras de telemetria.
