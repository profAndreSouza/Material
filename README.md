# Repositório de Materiais Complementares & Plataforma FactoryHub
## Ecossistema Integrado de Aprendizagem (Smart N1)

Este repositório contém os **materiais complementares** e a plataforma integradora **FactoryHub** para as disciplinas do semestre:

- **Automação Industrial**
- **Ciência de Dados**
- **DevOps & Computação em Nuvem**

No modelo do **Ecossistema Integrado de Aprendizagem**, as disciplinas atuam de forma conectada utilizando a célula fabril **Smart N1** como fonte oficial de dados e telemetria industrial em tempo real.

---

## Estrutura do Repositório

```text
├── factoryhub/                     # Plataforma única integradora (Flask, MQTT, SQLite/PostgreSQL, Chart.js)
│   ├── app.py                      # Ponto de entrada do servidor Flask
│   ├── config.py                   # Configurações da aplicação (MQTT, DB)
│   ├── requirements.txt            # Dependências Python
│   ├── Dockerfile                  # Configuração do contêiner Docker
│   ├── docker-compose.yml          # Orquestração local (FactoryHub + Mosquitto Broker)
│   ├── gerar_datasets.py           # Script de geração dos dados sintéticos
│   ├── database/                   # Modelos SQLAlchemy (Telemetry, Piece, Alarm)
│   ├── mqtt/                       # Ingestão de mensagens MQTT (smartn1/#)
│   ├── analytics/                  # Motor de estatísticas e exportação CSV
│   ├── routes/                     # Rotas da web (Dashboard, Ementas, Analytics, API)
│   ├── templates/                  # Templates HTML Jinja2 + Bootstrap 5
│   ├── static/                     # CSS e scripts JS
│   ├── exercicios/                 # Scripts Python stubs para aulas práticas
│   └── data/                       # Datasets industriais sintéticos e exportações CSV
├── Ciência de Dados.md             # Ementa oficial completa e matriz bibliográfica
├── Automacão Industrial.md         # Ementa oficial completa e matriz bibliográfica
└── Devops e Computação em Nuvem.md # Ementa oficial completa e matriz bibliográfica
```

---

## Como Executar a Plataforma FactoryHub

### Opção 1: Via Docker Compose (Recomendado)

1. Navegue até a pasta da plataforma:
   ```bash
   cd factoryhub
   ```

2. Inicie os contêineres:
   ```bash
   docker compose up --build -d
   ```

3. Acesse a aplicação no navegador:
   [http://localhost:5000](http://localhost:5000)

4. Para encerrar os serviços:
   ```bash
   docker compose down
   ```

---

### Opção 2: Execução Local com Python

1. Navegue até a pasta da plataforma e crie um ambiente virtual:
   ```bash
   cd factoryhub
   python -m venv venv
   
   # No Windows (PowerShell):
   .\venv\Scripts\Activate.ps1
   # No Linux/macOS:
   source venv/bin/activate
   ```

2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

3. Gerar os datasets industriais da Smart N1:
   ```bash
   python gerar_datasets.py
   ```

4. Iniciar o servidor Flask:
   ```bash
   python app.py
   ```

5. Acesse em [http://localhost:5000](http://localhost:5000).

---

## Objetivo Pedagógico

Oferecer aos estudantes acesso facilitado aos materiais discutidos em aula e uma plataforma unificada de baixa complexidade arquitetural para vivenciar todo o ciclo de vida dos dados industriais:

**Aquisição (Automação) → Armazenamento & Análise (Ciência de Dados) → Automação & Deploy em Nuvem (DevOps)**
