window.lessonTheoriesAutomacao = {
    1: [
        {
            biblio: 'Aguirre (2013), Cap. 1; Franchi & Camargo (2009), Cap. 1',
            title: '1. Pirâmide de Automação Industrial (ISA-95) & Integração TI/TA',
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
        },
        {
            biblio: 'Groover (2011), Cap. 1',
            title: '2. Arquitetura de Comunicação da Planta Smart N1',
            theory: 'Na célula fabril <strong>Smart N1</strong>, os sinais discretos e analógicos das estações de Entrada, Teste de Cor, Perfuração e Separação são centralizados no CLP e disponibilizados para a rede Ethernet industrial através de tópicos MQTT padronizados (`smartn1/entry`, `smartn1/color`, `smartn1/drill`, `smartn1/sorter`).',
            code: `topicos_smartn1 = [
    "smartn1/entry/status",
    "smartn1/color/result",
    "smartn1/drill/speed",
    "smartn1/sorter/actuator"
]
for t in topicos_smartn1:
    print(f"Inscrito no canal de telemetria: {t}")`,
            output: `Inscrito no canal de telemetria: smartn1/entry/status
Inscrito no canal de telemetria: smartn1/color/result
Inscrito no canal de telemetria: smartn1/drill/speed
Inscrito no canal de telemetria: smartn1/sorter/actuator`,
            interpretation: 'A padronização dos tópicos garante desacoplamento entre os equipamentos da fábrica e as aplicações de software em Python e Grafana.'
        }
    ],
    2: [
        {
            biblio: 'Aguirre (2013), Cap. 2; Lira et al. (2024), Cap. 1',
            title: '1. Sensores Discretos de Presença: Indutivos, Capacitivos e Magnéticos',
            theory: 'Sensores de proximidade discretos alteram seu estado chaveado (ON/OFF - 0V/24V) mediante aproximação de alvos:<br><ul><li><strong>Sensor Indutivo:</strong> Detecta exclusivamente materiais metálicos (condutores) gerando um campo eletromagnético de alta frequência. Possui Distância Nominal de Comutação $$S_n$$ e fator de redução conforme o metal (Aço=1.0, Alumínio=0.4).</li><li><strong>Sensor Capacitivo:</strong> Detecta metais e não-metais (plásticos, líquidos, madeira) alterando a capacitância do campo eletrostático.</li><li><strong>Sensor Magnético (Reed Switch):</strong> Acionado pelo campo magnético de um ímã permanente instalado no êmbolo de cilindros pneumáticos.</li></ul>',
            code: `def verificar_compatibilidade_sensor(material_alvo: str, tipo_sensor: str) -> bool:
    if tipo_sensor == "Indutivo":
        return material_alvo in ["Aco", "Aluminio", "Cobre", "Inox"]
    elif tipo_sensor == "Capacitivo":
        return True # Detecta qualquer material
    elif tipo_sensor == "Magnetico":
        return material_alvo == "Iman"
    return False

testes = [("Aco", "Indutivo"), ("Plastico", "Indutivo"), ("Plastico", "Capacitivo")]
for mat, sens in testes:
    res = verificar_compatibilidade_sensor(mat, sens)
    print(f"Material: {mat:8s} | Sensor: {sens:10s} -> Detectado: {res}")`,
            output: `Material: Aco      | Sensor: Indutivo   -> Detectado: True
Material: Plastico | Sensor: Indutivo   -> Detectado: False
Material: Plastico | Sensor: Capacitivo -> Detectado: True`,
            interpretation: 'O sensor indutivo falha ao tentar detectar peças de plástico na esteira, exigindo a substituição por sensor capacitivo ou óptico.'
        },
        {
            biblio: 'Franchi & Camargo (2009), Cap. 2',
            title: '2. Histerese e Distância Nominal de Comutação ($S_n$)',
            theory: 'A <strong>Histerese ($H$)</strong> é a diferença percentual entre o ponto de acionamento ($S_{on}$) na aproximação e o ponto de desacionamento ($S_{off}$) no afastamento do alvo:<br>$$H = \\frac{S_{off} - S_{on}}{S_n} \\times 100\\%$$Evita trepidações e comutações falsas do relé interno quando a peça oscila próximo ao limite de detecção.',
            code: `sn = 8.0  # Distância nominal (mm)
son = 7.8 # Distância de ligar (mm)
soff = 8.4 # Distância de desligar (mm)
histerese = ((soff - son) / sn) * 100
print(f"Distância Nominal (Sn): {sn} mm")
print(f"Ponto de Acionamento (Son): {son} mm | Desacionamento (Soff): {soff} mm")
print(f"Histerese Percentual do Sensor: {histerese:.2f}%")`,
            output: `Distância Nominal (Sn): 8.0 mm
Ponto de Acionamento (Son): 7.8 mm | Desacionamento (Soff): 8.4 mm
Histerese Percentual do Sensor: 7.50%`,
            interpretation: 'A histerese de 7.5% estabiliza o sinal de entrada do CLP mesmo com vibrações mecânicas na esteira.'
        }
    ],
    3: [
        {
            biblio: 'Aguirre (2013), Cap. 3 & 4',
            title: '1. Sensores Fotoelétricos (Difuso, Retroreflexivo e Barreira)',
            theory: 'Sensores fotoelétricos utilizam emissores de luz (LED/Laser) e receptores fototransistores:<br><ul><li><strong>Sistema Barreira (Thru-beam):</strong> Emissor e receptor em corpos separados. Maior alcance e alta confiabilidade.</li><li><strong>Sistema Retroreflexivo:</strong> Emissor e receptor no mesmo corpo com espelho prismático refletor.</li><li><strong>Sistema Difuso:</strong> O próprio objeto reflete a luz de volta ao receptor. Alcance depende da cor e rugosidade.</li></ul>',
            code: `sensores_opticos = {
    "Barreira": {"alcance_m": 15.0, "alinhamento_critico": True},
    "Retroreflexivo": {"alcance_m": 5.0, "alinhamento_critico": False},
    "Difuso": {"alcance_m": 1.2, "alinhamento_critico": False}
}
for nome, specs in sensores_opticos.items():
    print(f"Sensor {nome:14s}: Alcance max = {specs['alcance_m']}m")`,
            output: `Sensor Barreira      : Alcance max = 15.0m
Sensor Retroreflexivo: Alcance max = 5.0m
Sensor Difuso        : Alcance max = 1.2m`,
            interpretation: 'Na estação de teste de cor da Smart N1, utiliza-se o sensor difuso devido à curta distância de inspeção (50mm).'
        },
        {
            biblio: 'Moraes & Castrucci (2007), Cap. 3',
            title: '2. Identificação por Radiofrequência (RFID) na Rastreabilidade Industrial',
            theory: 'O sistema <strong>RFID (Radio Frequency Identification)</strong> possibilita a rastreabilidade total do produto (Gen2 EPC) gravando e lendo a memória da Tag afixada na peça contendo número de série, histórico de processos e status de qualidade.',
            code: `tag_rfid_data = {
    "epc_uid": "E200001B94120234",
    "piece_id": "P000458",
    "color": "Azul",
    "passed_drill": True
}
print(f"Tag RFID lida no leitor da Esteira:")
print(f"UID: {tag_rfid_data['epc_uid']} | Peça: {tag_rfid_data['piece_id']} | Cor: {tag_rfid_data['color']}")`,
            output: `Tag RFID lida no leitor da Esteira:
UID: E200001B94120234 | Peça: P000458 | Cor: Azul`,
            interpretation: 'A leitura RFID permite direcionar a peça na esteira sem necessidade de consulta síncrona ao banco central.'
        }
    ],
    4: [
        {
            biblio: 'Lira et al. (2024), Cap. 2; Fialho (2011), Cap. 1-3',
            title: '1. Atuadores Pneumáticos & Válvulas Direcionais',
            theory: 'Atuadores pneumáticos convertem energia de ar comprimido em movimento mecânico linear ou rotativo. Válvulas solenoide direcionais (ex: 5/2 vias duplos solenoide) controlam o avanço e retorno de cilindros de dupla ação.',
            code: `class CilindroPneumatico:
    def __init__(self, tag):
        self.tag = tag
        self.avancado = False

    def acionar_solenoide_y1(self):
        self.avancado = True
        return f"[{self.tag}] Solenoide Y1 energizada -> Cilindro AVANÇADO"

    def acionar_solenoide_y2(self):
        self.avancado = False
        return f"[{self.tag}] Solenoide Y2 energizada -> Cilindro RECUADO"

cil = CilindroPneumatico("1A1_Separador")
print(cil.acionar_solenoide_y1())
print(cil.acionar_solenoide_y2())`,
            output: `[1A1_Separador] Solenoide Y1 energizada -> Cilindro AVANÇADO
[1A1_Separador] Solenoide Y2 energizada -> Cilindro RECUADO`,
            interpretation: 'O acionamento das solenoides envia pulsos de 24VCC que deslocam o carretel da válvula pneumática.'
        },
        {
            biblio: 'Groover (2011), Cap. 3',
            title: '2. Inversores de Frequência & Controle de Velocidade V/f',
            theory: 'O <strong>Inversor de Frequência</strong> controla a velocidade rotacional de motores trifásicos de indução alterando a frequência da tensão aplicada ($$n = \\frac{120 \\cdot f}{P}$$), mantendo a razão Volts/Hertz ($$V/f$$) constante para preservar o torque nominal.',
            code: `def calcular_rpm_motor(freq_hz: float, polos: int = 4, escorregamento: float = 0.04) -> float:
    n_sincrona = (120 * freq_hz) / polos
    n_real = n_sincrona * (1 - escorregamento)
    return n_real

for f in [15.0, 30.0, 60.0]:
    rpm = calcular_rpm_motor(f)
    print(f"Frequência do Inversor: {f:4.1f} Hz -> Velocidade da Esteira: {rpm:6.1f} RPM")`,
            output: `Frequência do Inversor: 15.0 Hz -> Velocidade da Esteira:  432.0 RPM
Frequência do Inversor: 30.0 Hz -> Velocidade da Esteira:  864.0 RPM
Frequência do Inversor: 60.0 Hz -> Velocidade da Esteira: 1728.0 RPM`,
            interpretation: 'Alterando a frequência de 15Hz para 60Hz através de comando modbus/analógico, o motor varia sua velocidade de 432 a 1728 RPM.'
        }
    ],
    5: [
        {
            biblio: 'Aguirre (2013), Cap. 5; Groover (2011), Cap. 7',
            title: '1. Robótica Industrial: Cinemática & Células de Manipulação',
            theory: 'Robôs industriais (articulados, SCARA, Cartesianos) executam tarefas repetitivas de alta precisão (Pick-and-Place, Solda, Paletização). A cinemática direta calcula a posição final da garra $(X,Y,Z)$ a partir dos ângulos das juntas $(\\theta_1, \\theta_2, \\dots)$.',
            code: `import math

def cinematica_direta_scara(l1: float, l2: float, theta1_deg: float, theta2_deg: float):
    t1 = math.radians(theta1_deg)
    t2 = math.radians(theta2_deg)
    x = l1 * math.cos(t1) + l2 * math.cos(t1 + t2)
    y = l1 * math.sin(t1) + l2 * math.sin(t1 + t2)
    return round(x, 2), round(y, 2)

pos_x, pos_y = cinematica_direta_scara(300, 250, 30, 45)
print(f"Coordenadas do Efetuador Robotizado: X = {pos_x} mm, Y = {pos_y} mm")`,
            output: `Coordenadas do Efetuador Robotizado: X = 324.52 mm, Y = 391.51 mm`,
            interpretation: 'Com os ângulos de junta em 30° e 45°, o robô SCARA posiciona a garra nas coordenadas exatas para coleta da peça.'
        },
        {
            biblio: 'Moraes & Castrucci (2007), Cap. 9',
            title: '2. Segurança em Células Robotizadas (Norma NR-12)',
            theory: 'A norma <strong>NR-12</strong> exige a implementação de relés de segurança de duplo canal, barreiras ópticas de luz e botões de emergência monitorados com parada de categoria 0 ou 1.',
            code: `status_seguranca = {
    "cortina_luz_ok": True,
    "emergencia_pressionado": False,
    "porta_celula_fechada": True
}
celula_pronta = all([status_seguranca['cortina_luz_ok'], not status_seguranca['emergencia_pressionado'], status_seguranca['porta_celula_fechada']])
print(f"Permissivo de Operação da Célula Robotizada: {'HABILITADO' if celula_pronta else 'INTERROMPIDO (FALHA DE SEGURANÇA)'}")`,
            output: `Permissivo de Operação da Célula Robotizada: HABILITADO`,
            interpretation: 'Todos os canais de segurança reportam estado seguro (24V), liberando a execução do programa do robô.'
        }
    ],
    6: [
        {
            biblio: 'Franchi & Camargo (2009), Cap. 1; SENAI-SP (2016), Cap. 1',
            title: '1. Arquitetura Interna de Hardware do CLP & PC Industrial',
            theory: 'O <strong>CLP (Controlador Lógico Programável)</strong> é composto por:<br><ul><li><strong>CPU (Unidade Central de Processamento):</strong> Microprocessador industrial executando o programa de aplicação.</li><li><strong>Módulos de Entradas (DI/AI):</strong> Optoacopladores para isolamento elétrico de sinais de sensores.</li><li><strong>Módulos de Saídas (DO/AO):</strong> Transistores/Relés para acionamento de atuadores e solenoides.</li><li><strong>Memória de Processo:</strong> Imagem de Entradas (PII) e Imagem de Saídas (PIQ).</li></ul>',
            code: `hardware_clp = {
    "cpu": "Cortex-M4 Industrial 160MHz",
    "entradas_digitais": 16,
    "saidas_digitais": 14,
    "entradas_analogicas": 4,
    "comunicacao": ["PROFINET", "Modbus-TCP", "EtherNet/IP"]
}
print(f"CPU: {hardware_clp['cpu']}")
print(f"Capacidade de I/O Discreto: {hardware_clp['entradas_digitais']} DI / {hardware_clp['saidas_digitais']} DO")`,
            output: `CPU: Cortex-M4 Industrial 160MHz
Capacidade de I/O Discreto: 16 DI / 14 DO`,
            interpretation: 'O controlador possui capacidade suficiente para gerenciar as 4 estações de trabalho da Smart N1.'
        }
    ],
    7: [
        {
            biblio: 'Franchi & Camargo (2009), Cap. 3; Silva (2016), Cap. 2',
            title: '1. Ciclo de Varredura (Scan Cycle) do CLP',
            theory: 'O CLP opera em um ciclo contínuo e determinístico de 3 etapas:<br><ol><li><strong>Leitura das Entradas:</strong> Copia o estado físico dos bornes para a Imagem de Entradas (PII).</li><li><strong>Execução do Programa:</strong> Processa a lógica de controle linha por linha.</li><li><strong>Atualização das Saídas:</strong> Copia a Imagem de Saídas (PIQ) para os bornes atuadores.</li></ol>',
            code: `import time

def ciclo_scan(entradas_fisicas: dict, logica_fn) -> dict:
    pii = entradas_fisicas.copy() # 1. Leitura
    piq = logica_fn(pii)          # 2. Execução
    saidas_fisicas = piq.copy()   # 3. Atualização
    return saidas_fisicas

# Lógica em Texto Estruturado (ST): IF SENS_ENTRADA THEN ESTEIRA := TRUE;
logica_smartn1 = lambda pii: {"ESTEIRA_LIGADA": pii.get("S1_ENTRADA", False)}

resultado = ciclo_scan({"S1_ENTRADA": True}, logica_smartn1)
print(f"Resultado da Atualização de Saídas no Scan: {resultado}")`,
            output: `Resultado da Atualização de Saídas no Scan: {'ESTEIRA_LIGADA': True}`,
            interpretation: 'Ao detectar S1_ENTRADA em nível alto, a CPU atualiza a imagem de saída acionando a esteira no mesmo scan.'
        },
        {
            biblio: 'Silva (2016), Cap. 4; Prudente (2014), Cap. 3',
            title: '2. Programação em Texto Estruturado (ST / IEC 61131-3)',
            theory: 'O **Texto Estruturado (ST)** é uma linguagem de alto nível baseada em Pascal/C normatizada pela **IEC 61131-3**, ideal para cálculos matemáticos, manipulação de strings e lógicas complexas de malha fechada.',
            code: `codigo_st_simulado = """
IF (sensor_cor_azul AND NOT esteira_cheia) THEN
    cilindro_desvio := TRUE;
    contador_pecas_azuis := contador_pecas_azuis + 1;
ELSE
    cilindro_desvio := FALSE;
END_IF;
"""
print("Código de Controle em Texto Estruturado (ST):")
print(codigo_st_simulado.strip())`,
            output: `Código de Controle em Texto Estruturado (ST):
IF (sensor_cor_azul AND NOT esteira_cheia) THEN
    cilindro_desvio := TRUE;
    contador_pecas_azuis := contador_pecas_azuis + 1;
ELSE
    cilindro_desvio := FALSE;
END_IF;`,
            interpretation: 'A estrutura condicional IF-THEN-ELSE em ST facilita a leitura e manutenção de algoritmos de triagem.'
        }
    ],
    8: [
        {
            biblio: 'Tanenbaum et al. (2021), Cap. 1 & 5',
            title: '1. Protocolos Modbus TCP e MQTT na Automação Industrial',
            theory: 'Comparativo dos protocolos fundamentais de integração TI/TA:<br><ul><li><strong>Modbus TCP:</strong> Protocolo Mestre-Escravo determinístico sob porta 502. Consulta registradores discretos (Coils/Inputs) e analógicos de 16-bits (Holding/Input Registers).</li><li><strong>MQTT:</strong> Protocolo leve de publicação/assinatura (Pub/Sub) sob TCP/IP (porta 1883) ideal para mensagens assíncronas JSON entre a fábrica e a nuvem.</li></ul>',
            code: `# Simulação de leitura de Holding Register Modbus TCP (Endereço 40001 - Frequência do Inversor)
holding_register_40001 = 6000 # 60.00 Hz (fator de escala x100)
freq_hz = holding_register_40001 / 100.0
print(f"Modbus TCP Holding Register 40001: {holding_register_40001} -> Valor Real: {freq_hz:.2f} Hz")`,
            output: `Modbus TCP Holding Register 40001: 6000 -> Valor Real: 60.00 Hz`,
            interpretation: 'O valor lido via Modbus no registrador 40001 é convertido para 60.00Hz e publicado posteriormente no broker MQTT.'
        }
    ],
    9: [
        {
            biblio: 'Tanenbaum et al. (2021), Cap. 6; Franchi & Camargo (2009), Cap. 8',
            title: '1. Fluxos de Ingestão e Processamento no Node-RED',
            theory: 'O **Node-RED** é uma ferramenta de programação visual para conexão de nós industriais (MQTT In, Modbus Read, Function JS, Database Out), atuando como o Gateway de Ingestão TI/TA oficial da Smart N1.',
            code: `import json
# Simulação de nó 'Function' em JS convertendo payload bruto do CLP para evento MQTT
payload_bruto_clp = {"inputs": 5, "temp_raw": 724}
event_mqtt = {
    "station": "DrillStation",
    "status": "OK" if payload_bruto_clp["inputs"] & 1 else "STOPPED",
    "temperature": payload_bruto_clp["temp_raw"] / 10.0
}
print("Payload Transmitido pelo Node-RED ao Mosquitto:")
print(json.dumps(event_mqtt, indent=2))`,
            output: `Payload Transmitido pelo Node-RED ao Mosquitto:
{
  "station": "DrillStation",
  "status": "OK",
  "temperature": 72.4
}`,
            interpretation: 'O Node-RED filtra e normaliza o dado bruto de registradores antes de disparar o evento para a rede.'
        }
    ],
    10: [
        {
            biblio: 'Franchi & Camargo (2009), Cap. 9; Moraes & Castrucci (2007), Cap. 10',
            title: '1. Persistência de Telemetria Industrial em Banco de Dados',
            theory: 'O serviço de coleta (*Data Collector*) escuta continuamente o broker MQTT Mosquitto e insere as mensagens na tabela `telemetry` do banco de dados relacional para preservação de histórico e posterior análise por Ciência de Dados.',
            code: `import sqlite3
from datetime import datetime

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()
cursor.execute('''CREATE TABLE telemetry (id INTEGER PRIMARY KEY, station TEXT, status TEXT, timestamp DATETIME)''')
cursor.execute("INSERT INTO telemetry (station, status, timestamp) VALUES (?, ?, ?)", ("SorterStation", "OK", datetime.utcnow()))
conn.commit()

cursor.execute("SELECT * FROM telemetry")
print("Registro Persistido no Banco de Dados:")
print(cursor.fetchall())`,
            output: `Registro Persistido no Banco de Dados:
[(1, 'SorterStation', 'OK', '2026-08-02 00:00:00')]`,
            interpretation: 'A telemetria da estação de triagem foi gravada com sucesso com timestamp UTC para rastreabilidade.'
        }
    ],
    11: [
        {
            biblio: 'Groover (2011), Cap. 10; Moraes & Castrucci (2007), Cap. 11',
            title: '1. Supervisionamento Operacional em Tempo Real no Grafana',
            theory: 'O **Grafana** conecta-se à base de dados para exibir dashboards operacionais em tempo real com indicadores de tempo de ciclo, taxa de descarte, contagem de alarmes e status dos atuadores da fábrica.',
            code: `kpis_grafana = {
    "oee_disponibilidade": 94.5,
    "oee_desempenho": 91.2,
    "oee_qualidade": 98.1,
    "oee_global": round(0.945 * 0.912 * 0.981 * 100, 2)
}
print(f"KPI OEE de Eficiência Global da Smart N1:")
print(f"Disponibilidade: {kpis_grafana['oee_disponibilidade']}%")
print(f"Desempenho: {kpis_grafana['oee_desempenho']}%")
print(f"Qualidade: {kpis_grafana['oee_qualidade']}%")
print(f"OEE Geral da Fábrica: {kpis_grafana['oee_global']}%")`,
            output: `KPI OEE de Eficiência Global da Smart N1:
Disponibilidade: 94.5%
Desempenho: 91.2%
Qualidade: 98.1%
OEE Geral da Fábrica: 84.55%`,
            interpretation: 'O indicador OEE de 84.55% demonstra que a linha operou dentro das metas de eficiência da Indústria 4.0.'
        }
    ]
};
