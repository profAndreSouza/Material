window.lessonTheoriesAutomacao = {
    1: [
        {
            biblio: 'Aguirre (2013), Cap. 1; Franchi & Camargo (2009), Cap. 1',
            title: '1. Pirâmide de Automação Industrial (ISA-95) & Arquitetura TI/TA',
            theory: 'A norma <strong>ISA-95</strong> descreve a hierarquia funcional de sistemas industriais em 5 níveis:<br><ol><li><strong>Nível 0 (Processo Físico):</strong> Sensores, atuadores e dispositivos de campo da Smart N1.</li><li><strong>Nível 1 (Controle Descontínuo/Contínuo):</strong> Controladores Lógicos Programáveis (CLPs), SDCDs e PCs Industriais.</li><li><strong>Nível 2 (Supervisão & Operação):</strong> Sistemas SCADA e IHM de controle em tempo real.</li><li><strong>Nível 3 (Gerenciamento da Produção):</strong> Sistemas MES (Manufacturing Execution System), OEE e controle de lote.</li><li><strong>Nível 4 (Planejamento Corporativo):</strong> Sistemas ERP (Enterprise Resource Planning).</li></ol>A convergência <strong>TI/TA</strong> conecta o Nível 0/1 diretamente às camadas analíticas de nuvem via protocolos leves como MQTT e OPC UA.',
            code: `import json
# Simulação da Arquitetura ISA-95: Gateway TI/TA lendo sinal do Nível 0 e empacotando para Nível 3
sinal_nivel0 = {"sensor_id": "SENS_IND_01", "estado_fisico": True, "tensao_volts": 24.0}
payload_ti_ta = {
    "plant": "SmartN1",
    "station": "Estacao_Entrada",
    "event": "peca_detectada",
    "data": sinal_nivel0
}
print(json.dumps(payload_ti_ta, indent=2))`,
            output: `{
  "plant": "SmartN1",
  "station": "Estacao_Entrada",
  "event": "peca_detectada",
  "data": {
    "sensor_id": "SENS_IND_01",
    "estado_fisico": true,
    "tensao_volts": 24.0
  }
}`,
            interpretation: 'O evento físico discreto (24V) capturado no Nível 0/1 é estruturado em formato JSON pelo gateway TI/TA para consumo em sistemas de supervisão e análise de dados.'
        }
    ],
    2: [
        {
            biblio: 'Aguirre (2013), Cap. 2; Lira et al. (2024), Cap. 1',
            title: '1. Sensores industriais (Indutivos, Capacitivos, Ópticos) e Transmissão MQTT',
            theory: 'Sensores de proximidade discretos alteram seu estado chaveado (ON/OFF - 0V/24V) mediante aproximação de alvos na esteira fabril. O envio em tempo real é feito via protocolo **MQTT** (Message Queuing Telemetry Transport), ideal para conexões leves e assíncronas em rede fabril.',
            code: `def simular_sensor_mqtt(sensor_type: str, peca_presente: bool):
    topic = f"smartn1/sensores/{sensor_type.lower()}"
    state = 1 if peca_presente else 0
    return {"topic": topic, "payload": {"status": state, "voltage": 24.0 if state else 0.0}}

print(simular_sensor_mqtt("Indutivo", True))
print(simular_sensor_mqtt("Capacitivo", False))`,
            output: `{'topic': 'smartn1/sensores/indutivo', 'payload': {'status': 1, 'voltage': 24.0}}
{'topic': 'smartn1/sensores/capacitivo', 'payload': {'status': 0, 'voltage': 0.0}}`,
            interpretation: 'Quando a peça metálica passa pelo sensor indutivo, o sinal 24V comuta para nível lógico 1 e é transmitido via tópico MQTT dedicado.'
        }
    ],
    3: [
        {
            biblio: 'Tanenbaum et al. (2021), Cap. 6; Franchi & Camargo (2009), Cap. 8',
            title: '1. Ingestão de Eventos com Node-RED e Broker MQTT Mosquitto',
            theory: 'O **Broker MQTT (Mosquitto)** centraliza as mensagens publicadas pelos sensores da esteira. O **Node-RED** atua como motor de fluxos visuais, escutando os tópicos MQTT, aplicando regras de transformação e roteando eventos de parada ou defeito.',
            code: `import json

def nodered_function_node(mqtt_msg: dict):
    payload = mqtt_msg.get("payload", {})
    if payload.get("temp", 0) > 85.0:
        return {"topic": "smartn1/alarmes/critico", "payload": {"erro": "Superaquecimento", "temp": payload["temp"]}}
    return {"topic": "smartn1/telemetria/normal", "payload": payload}

print("Node-RED Function Node Processando Sinal:")
print(json.dumps(nodered_function_node({"payload": {"temp": 89.4}}), indent=2))`,
            output: `Node-RED Function Node Processando Sinal:
{
  "topic": "smartn1/alarmes/critico",
  "payload": {
    "erro": "Superaquecimento",
    "temp": 89.4
  }
}`,
            interpretation: 'O Node-RED detecta a anomalia na telemetria de temperatura e redireciona a mensagem imediatamente para o canal de alarmes críticos.'
        }
    ],
    4: [
        {
            biblio: 'Franchi & Camargo (2009), Cap. 9; Moraes & Castrucci (2007), Cap. 10',
            title: '1. Persistência de Dados Industriais no Banco da Planta',
            theory: 'Os dados de telemetria e eventos coletados do Broker MQTT são gravados em banco de dados relacional (PostgreSQL / SQLite). A modelagem prevê tabelas de `telemetry`, `pieces` e `alarms` indexadas por timestamp para histórico e rastreabilidade.',
            code: `import sqlite3
from datetime import datetime

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()
cursor.execute('''CREATE TABLE telemetry (id INTEGER PRIMARY KEY, sensor TEXT, valor REAL, timestamp DATETIME)''')
cursor.execute("INSERT INTO telemetry (sensor, valor, timestamp) VALUES (?, ?, ?)", ("TEMP_FRESADORA", 74.2, datetime.utcnow()))
conn.commit()

cursor.execute("SELECT * FROM telemetry")
print("Registro no Banco da Planta:")
print(cursor.fetchall())`,
            output: `Registro no Banco da Planta:
[(1, 'TEMP_FRESADORA', 74.2, '2026-08-02 00:00:00')]`,
            interpretation: 'A medição do sensor é gravada de forma persistente garantindo auditoria de processo e suporte ao cálculo de KPIs.'
        }
    ],
    5: [
        {
            biblio: 'Groover (2011), Cap. 10; Moraes & Castrucci (2007), Cap. 11',
            title: '1. Dashboards Operacionais em Tempo Real com Grafana',
            theory: 'O **Grafana** conecta-se à base de dados da fábrica para apresentar painéis gráficos em tempo real com estado dos atuadores, taxa de peças aprovadas/rejeitadas e contadores de produção.',
            code: `metrics = {
    "pecas_produzidas": 1250,
    "pecas_conformes": 1205,
    "pecas_defeito": 45,
    "taxa_qualidade_pct": round((1205 / 1250) * 100, 2)
}
print("Métricas Exibidas no Dashboard Operacional:")
for k, v in metrics.items():
    print(f"-> {k:20s}: {v}")`,
            output: `Métricas Exibidas no Dashboard Operacional:
-> pecas_produzidas    : 1250
-> pecas_conformes     : 1205
-> pecas_defeito       : 45
-> taxa_qualidade_pct  : 96.4`,
            interpretation: 'O painel operacional exibe a taxa de qualidade de 96.4%, sinalizando produção estável para a equipe de turno.'
        }
    ],
    6: [
        {
            biblio: 'Tanenbaum et al. (2021), Cap. 5; Franchi & Camargo (2009), Cap. 8',
            title: '1. Consumo de Dados via APIs REST para Integração Fabril',
            theory: 'As aplicações web e sistemas corporativos consomem os dados de produção através de endpoints RESTful em formato JSON, permitindo consultas por faixa de data, estado do equipamento ou lote.',
            code: `def get_api_kpis_simulated():
    return {
        "status": "success",
        "data": {
            "total_telemetry": 8500,
            "total_pieces": 1250,
            "active_alarms": 2
        }
    }

print("Resposta da API REST (/api/kpis):")
print(get_api_kpis_simulated())`,
            output: `Resposta da API REST (/api/kpis):
{'status': 'success', 'data': {'total_telemetry': 8500, 'total_pieces': 1250, 'active_alarms': 2}}`,
            interpretation: 'A API disponibiliza contadores agregados em milissegundos para consumo no FactoryHub.'
        }
    ],
    7: [
        {
            biblio: 'Aguirre (2013), Cap. 4; Moraes & Castrucci (2007), Cap. 6',
            title: '1. Sistema de Alarmes, Telemetria & Monitoramento de Limites Criticos',
            theory: 'Sistemas de telemetria analisam continuamente se variáveis físicas (Pressão, Temperatura, Vibração) ultrapassam a faixa nominal definida em carta de controle (LSE e LSI). Violacões geram interrupção de segurança e registros de alarme.',
            code: `def verificar_limites_pressao(pressao_bar: float, lsi: float = 4.5, lse: float = 6.5):
    if pressao_bar < lsi or pressao_bar > lse:
        return f"ALARM: Pressão fora da faixa ({pressao_bar} bar)! Limites: [{lsi} - {lse}] bar"
    return f"NORMAL: Pressão em {pressao_bar} bar"

print(verificar_limites_pressao(5.8))
print(verificar_limites_pressao(7.1))`,
            output: `NORMAL: Pressão em 5.8 bar
ALARM: Pressão fora da faixa (7.1 bar)! Limites: [4.5 - 6.5] bar`,
            interpretation: 'Ao atingir 7.1 bar, a função dispara o alarme de sobrepressão para acionar a válvula de alívio.'
        }
    ],
    8: [
        {
            biblio: 'Groover (2011), Cap. 1 & 10',
            title: '1. Indicadores Industriais (OEE: Disponibilidade, Desempenho e Qualidade)',
            theory: 'O **OEE (Overall Equipment Effectiveness)** é o principal KPI da Indústria 4.0, calculado pela multiplicação de 3 fatores:<br>$$\\text{OEE} = \\text{Disponibilidade} \\times \\text{Desempenho} \\times \\text{Qualidade}$$',
            code: `disp = 0.95  # 95% Disponibilidade
desemp = 0.92 # 92% Desempenho
qual = 0.98   # 98% Qualidade
oee = disp * desemp * qual * 100

print(f"Disponibilidade: {disp*100}% | Desempenho: {desemp*100}% | Qualidade: {qual*100}%")
print(f"OEE Global da Linha Smart N1: {oee:.2f}%")`,
            output: `Disponibilidade: 95.0% | Desempenho: 92.0% | Qualidade: 98.0%
OEE Global da Linha Smart N1: 85.65%`,
            interpretation: 'Um OEE de 85.65% é considerado nível de excelência mundial em produção manufatureira.'
        }
    ],
    9: [
        {
            biblio: 'Groover (2011), Cap. 2; Moraes & Castrucci (2007), Cap. 1',
            title: '1. Casos Reais de Manufatura e Diagnóstico de Causa Raiz',
            theory: 'Estudos de caso industriais analisam dados de paralisação e gargalos de produção. A aplicação de diagramas de causa e efeito (Ishikawa) e 5 Porquês combinados com dados de telemetria reduz paradas não planejadas.',
            code: `paradas = [
    {"causa": "Falta de Material", "minutos": 120},
    {"causa": "Falha Mecânica Inversor", "minutos": 45},
    {"causa": "Ajuste de Setup", "minutos": 30}
]
total_parada = sum(p["minutos"] for p in paradas)
print(f"Total de Indisponibilidade Registrado no Turno: {total_parada} minutos")
print(f"Principal Ofensor: {max(paradas, key=lambda x: x['minutos'])['causa']}")`,
            output: `Total de Indisponibilidade Registrado no Turno: 195 minutos
Principal Ofensor: Falta de Material`,
            interpretation: 'A análise quantitativa revela que o suprimento de matéria-prima é o gargalo dominante, orientando a ação corretiva.'
        }
    ],
    10: [
        {
            biblio: 'Franchi & Camargo (2009), Cap. 8 & 9',
            title: '1. Integração Completa TI/TA na Planta Smart N1',
            theory: 'A integração **TI/TA** une o acionamento físico dos CLPs aos bancos de dados de nuvem e dashboards analíticos via gateways Node-RED e brokers MQTT securitizados.',
            code: `pipeline_tita = ["Sinais Físicos 24V (Nível 0)", "CLP / I/O (Nível 1)", "Broker MQTT (Nível 2)", "Banco de Dados & API (Nível 3)", "Cloud Run & Dashboards (Nível 4)"]
print("Fluxo de Dados Ponta a Ponta TI/TA:")
for i, step in enumerate(pipeline_tita, 1):
    print(f"Camada {i}: {step}")`,
            output: `Fluxo de Dados Ponta a Ponta TI/TA:
Camada 1: Sinais Físicos 24V (Nível 0)
Camada 2: CLP / I/O (Nível 1)
Camada 3: Broker MQTT (Nível 2)
Camada 4: Banco de Dados & API (Nível 3)
Camada 5: Cloud Run & Dashboards (Nível 4)`,
            interpretation: 'Demonstra a rastreabilidade total do sinal desde o contato elétrico no sensor até o gráfico no navegador.'
        }
    ],
    11: [
        {
            biblio: 'Franchi & Camargo (2009), Cap. 9; Groover (2011), Cap. 11',
            title: '1. Demonstração da Integração de Automação no Projeto Capstone',
            theory: 'Na apresentação final do ecossistema, os alunos operam a esteira física/didática Smart N1 injetando peças de diferentes cores e falhas simuladas, comprovando a ingestão, armazenamento e monitoramento em tempo real.',
            code: `def demonstracao_capstone(peca_id: str, cor: str, aprovada: bool):
    status = "APROVADA E EMBALADA" if aprovada else "REJEITADA E DESVIADA"
    return f"Peça [{peca_id}] | Cor: {cor} -> Decisão Automação: {status}"

print(demonstracao_capstone("P-9901", "Azul", True))
print(demonstracao_capstone("P-9902", "Vermelho", False))`,
            output: `Peça [P-9901] | Cor: Azul -> Decisão Automação: APROVADA E EMBALADA
Peça [P-9902] | Cor: Vermelho -> Decisão Automação: REJEITADA E DESVIADA`,
            interpretation: 'A esteira executa o desvio pneumático da peça defeituosa em tempo real e atualiza os contadores no sistema.'
        }
    ]
};
