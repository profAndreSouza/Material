# Semana 05: Orquestração de Dados e Fluxos IIoT com Node-RED

Bem-vindo ao laboratório prático da **Semana 05** da disciplina de **Automação Industrial**!

Nesta aula prática, toda a infraestrutura roda **100% conteinerizada via Docker** (3 contêineres independentes), sem necessidade de instalar pacotes ou dependências no computador do aluno:
1. **Eclipse Mosquitto (MQTT Broker):** Responsável pelo roteamento de mensagens na porta `1883`.
2. **Node-RED:** Ambiente de programação visual baseada em fluxos na porta `1880`.
3. **Simulador Flask (Fábrica Virtual):** Aplicação monolítica Python com motor de simulação de sensores industriais e painel SCADA web na porta `5000`.

---

## 🏗️ Arquitetura dos 3 Contêineres Docker

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      REDE DOCKER (rede_automacao)                       │
│                                                                         │
│  ┌───────────────────────┐             ┌─────────────────────────────┐  │
│  │   SIMULADOR FLASK     │             │   ECLIPSE MOSQUITTO         │  │
│  │  (flask_simulator_app)│ ──────────► │   (mosquitto_broker)        │  │
│  │   http://localhost    │ MQTT :1883  │   Porta TCP: 1883           │  │
│  │        :5000          │             │   Porta WS:  9001           │  │
│  └───────────────────────┘             └──────────────┬──────────────┘  │
│                                                       │                 │
│                                                       │ Subscrição      │
│                                                       │ fabrica/#       │
│                                                       ▼                 │
│                                        ┌─────────────────────────────┐  │
│                                        │          NODE-RED           │  │
│                                        │        (nodered_app)        │  │
│                                        │   http://localhost:1880     │  │
│                                        │  [PAINEL LATERAL DEBUG 🪲]  │  │
│                                        └─────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Como Executar em 1 Único Passo

Tudo o que você precisa está contido nesta pasta `aulas/semana_05`.

Abra o terminal nesta pasta e execute:

```bash
cd aulas/semana_05
docker compose up --build -d
```

Verifique se os 3 contêineres estão em execução:
```bash
docker compose ps
```

Você verá:
- `mosquitto_broker` (Up - portas 1883, 9001)
- `nodered_app` (Up - porta 1880)
- `flask_simulator_app` (Up - porta 5000)

---

## 🌐 Acessos e Roteiro de Aula

### 1. Acessar a Fábrica Virtual (Simulador SCADA)
👉 Abra no navegador: **[http://localhost:5000](http://localhost:5000)**
- Acompanhe a telemetria em tempo real (Temperatura, Vibração, Pressão, Corrente).
- Observe as contagens de produção e taxa de qualidade.
- Use os botões de ação rápida para simular falhas e eventos (Superaquecimento, Vibração Excessiva, Parada de Emergência E-STOP, etc.).

### 2. Acessar o Node-RED e Importar o Fluxo
👉 Abra no navegador: **[http://localhost:1880](http://localhost:1880)**
1. Pressione `Ctrl + I` (ou Menu hambúrguer `☰` > **Import**).
2. Copie o conteúdo do arquivo [`flows_semana05.json`](file:///c:/projetos/Material/Automação%20Industrial/aulas/semana_05/flows_semana05.json) e cole na caixa de texto.
3. Clique em **Import** e em seguida no botão vermelho **Deploy** (canto superior direito).
4. Abra o **Painel lateral Debug** (ícone do inseto `🪲` ou atalho `Ctrl + G` seguido de `D`).

### 3. Observação dos Eventos e Depuração
- Com a aba Debug aberta no Node-RED, volte à tela do simulador Flask ([http://localhost:5000](http://localhost:5000)) e dispare os eventos.
- Observe a classificação de criticidade e os tratamentos nos nós:
  - 🟢 `[DEBUG] Telemetria Formatada`
  - 🔴 `[DEBUG] Alarme Crítico / Emergência`
  - 📦 `[DEBUG] Produção & Qualidade`
  - 🔍 `[DEBUG] Todas Msg Brutas`

---

## 🛑 Como Parar os Contêineres

Para encerrar a execução dos serviços ao final da aula:
```bash
docker compose down
```

---

## 📁 Arquivos da Semana 05

- `docker-compose.yml`: Orquestração dos 3 contêineres.
- `Dockerfile`: Build da imagem Python para a aplicação Flask.
- `mosquitto/config/mosquitto.conf`: Configuração do broker Mosquitto.
- `app.py`: Backend Flask monolítico com simulação e cliente MQTT.
- `templates/index.html` & `static/css/style.css`: Frontend web industrial dark-mode.
- `flows_semana05.json`: Fluxo Node-RED pronto para importação.
- `requirements.txt`: Dependências Python (`flask`, `paho-mqtt`).
