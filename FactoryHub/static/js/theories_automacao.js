window.lessonTheoriesAutomacao = {
    1: [{
        biblio: "Aguirre (2013), Cap.1; Franchi & Camargo (2009), Cap.1",
        title: "1. Pirâmide de Automação Industrial (ISA-95) & Arquitetura TI/TA",
        objetivos: [
            "Compreender os 5 níveis hierárquicos da Pirâmide ISA-95.",
            "Identificar a convergência entre TI (Tecnologia da Informação) e TA (Tecnologia da Automação).",
            "Mapear os sensores da planta Smart N1 aos gateways industriais."
        ],
        contexto: "Na fábrica digital Smart N1, os sinais elétricos discretos (0V/24V) dos sensores de presença precisam transitar com segurança até os sistemas MES, ERP e dashboards na nuvem.",
        theory: `A norma ISA-95 estabelece a estrutura de integração fabril:
• Nível 0 (Processo Físico): Sensores e atuadores de campo.
• Nível 1 (Controle): CLPs, SDCDs e PCs Industriais.
• Nível 2 (Supervisão): SCADA e IHMs operacionais.
• Nível 3 (Gerenciamento): Sistemas MES e cálculo de OEE.
• Nível 4 (Corporativo): ERP e planejamento de recursos.

A integração TI/TA desacopla a produção física utilizando protocolos leves como MQTT e OPC UA.`,
        code: `import json
payload_ti_ta = {
    "plant": "SmartN1",
    "station": "Entrada",
    "sensor_id": "SENS_IND_01",
    "state_24v": True
}
print(json.dumps(payload_ti_ta, indent=2))`,
        output: `{
  "plant": "SmartN1",
  "station": "Entrada",
  "sensor_id": "SENS_IND_01",
  "state_24v": true
}`,
        interpretation: "O evento do sensor indutivo é convertido para formato JSON padronizado para consumo síncrono pelos sistemas supervisórios.",
        desafio: "Identifique em qual nível da ISA-95 reside o broker MQTT central da fábrica.",
        dicas: "Utilize nomes de tópicos padronizados padronizando minúsculas e barras como separadores de hierarquia (ex: smartn1/estacao/sensor).",
        projeto: "Inicia a captura de dados dos sensores físicos da esteira Smart N1 para transmissão aos cadernos de dados.",
        timeline: {
            antes: "Sinais elétricos isolados em painéis de comando.",
            durante: "Mapeamento dos níveis ISA-95 e empacotamento JSON.",
            depois: "Transmissão da telemetria via MQTT para a nuvem."
        },
        integracao: {
            cienciaDados: "Fornece a estrutura primária dos eventos de produção.",
            nuvem: "Conecta os gateways locais às instâncias e banco na GCP.",
            devops: "Garante versionamento dos scripts de integração de hardware."
        }
    }],

    2: [{
        biblio: "Aguirre (2013), Cap.2; Lira et al. (2024), Cap.1",
        title: "2. Sensores Industriais (Indutivos, Capacitivos, Ópticos) e MQTT",
        objetivos: [
            "Diferenciar o princípio físico dos sensores indutivos, capacitivos e magnéticos.",
            "Compreender o cálculo de Histerese de comutação.",
            "Publicar eventos de sensores via cliente MQTT."
        ],
        contexto: "Na esteira da Smart N1, a triagem de peças metálicas e plásticas exige a seleção correta da tecnologia de sensoriamento sem contato mecânico.",
        theory: `Tipos de Sensores de Proximidade:
• Indutivos: Detectam exclusivamente materiais condutores (metais) alterando o campo eletromagnético.
• Capacitivos: Detectam metais e não-metais (plásticos, vidros, líquidos) pela variação de capacitância.
• Magnéticos (Reed Switch): Acionados pelo campo magnético de ímãs em cilindros pneumáticos.
• Histerese (H%): Evita trepidação na saída do relé quando o alvo oscila na distância limite Sn.`,
        code: `def verificar_sensor(material, tipo_sensor):
    if tipo_sensor == "Indutivo":
        return material in ["Aco", "Aluminio", "Cobre"]
    elif tipo_sensor == "Capacitivo":
        return True
    return False

print("Aço em Indutivo:", verificar_sensor("Aco", "Indutivo"))
print("Plástico em Indutivo:", verificar_sensor("Plastico", "Indutivo"))`,
        output: `Aço em Indutivo: True
Plástico em Indutivo: False`,
        interpretation: "Sensores indutivos ignoram peças de plástico na esteira, exigindo sensores capacitivos ou difusos para detecção genérica.",
        desafio: "Calcule a histerese de um sensor indutivo com Sn=10mm, Son=9.5mm e Soff=10.3mm.",
        dicas: "Sensores indutivos possuem fator de redução para metais não-ferrosos (Alumínio ~0.4, Cobre ~0.3). Ajuste a distância física no suporte.",
        projeto: "Determina quais sensores acionam a contagem de peças no FactoryHub.",
        timeline: {
            antes: "Detecção mecânica propensa a desgaste físico.",
            durante: "Especificação de sensores de proximidade e histerese.",
            depois: "Envio do sinal comutado 24V direto ao Broker MQTT."
        },
        integracao: {
            cienciaDados: "Cria rótulos categóricos de tipo de peça e defeitos.",
            nuvem: "Transmite leituras discretas para a nuvem.",
            devops: "Automatiza testes de scripts de aquisição de sinal."
        }
    }],

    3: [{
        biblio: "Tanenbaum et al. (2021), Cap.6; Franchi & Camargo (2009), Cap.8",
        title: "3. Ingestão de Eventos com Node-RED e Broker MQTT Mosquitto",
        objetivos: [
            "Configurar o Broker MQTT Mosquitto central.",
            "Construir fluxos visuais no Node-RED.",
            "Implementar roteamento e filtragem de mensagens de alarme."
        ],
        contexto: "O Node-RED é a ferramenta oficial de middleware da planta, conectando os tópicos MQTT da fábrica e encaminhando para o banco de dados.",
        theory: `Arquitetura Pub/Sub no MQTT:
• Broker: Servidor central que gerencia tópicos e assinaturas.
• Publisher: Dispositivo/Sensor que envia mensagens sob um tópico.
• Subscriber: Aplicação (Node-RED/FactoryHub) que consome o tópico.

O Node-RED utiliza nós visuais (MQTT In, Function, Debug) para tratar telemetria em tempo real sem latência.`,
        code: `def nodered_router(mqtt_msg):
    temp = mqtt_msg.get("temperature", 0)
    if temp > 80.0:
        return {"topic": "smartn1/alarme", "level": "CRITICAL"}
    return {"topic": "smartn1/telemetria", "level": "OK"}

print(nodered_router({"temperature": 84.5}))`,
        output: `{'topic': 'smartn1/alarme', 'level': 'CRITICAL'}`,
        interpretation: "O motor de regras filtra a leitura e redireciona para o tópico crítico de alarme instantaneamente.",
        desafio: "Crie uma regra no Node-RED para rejeitar mensagens MQTT cujo payload seja nulo ou inválido.",
        dicas: "Utilize wildcard '+' para um único nível de tópico e '#' para múltiplos níveis hierárquicos (ex: smartn1/+/status).",
        projeto: "Centraliza o recebimento de eventos da Smart N1 para alimentarem a aplicação web.",
        timeline: {
            antes: "Mensagens trafegando sem tratamento nem roteamento.",
            durante: "Construção de fluxos visuais de transformação de payload.",
            depois: "Envio de mensagens limpas para o banco PostgreSQL/SQLite."
        },
        integracao: {
            cienciaDados: "Trata dados brutos eliminando ruídos de comunicação.",
            nuvem: "Encaminha telemetria para os endpoints em Cloud Run.",
            devops: "Facilita o deploy de contêineres de mensageria."
        }
    }],

    4: [{
        biblio: "Franchi & Camargo (2009), Cap.9; Moraes & Castrucci (2007), Cap.10",
        title: "4. Persistência de Dados da Planta no Banco de Dados",
        objetivos: [
            "Modelar tabelas relacionais para dados fabris.",
            "Inserir dados de telemetria em tempo real.",
            "Garantir integridade referencial entre peças e alarmes."
        ],
        contexto: "Para histórico de produção, auditoria e cálculo de KPIs, as mensagens recebidas do Broker MQTT são gravadas no banco de dados relacional.",
        theory: `Estrutura de Armazenamento da Planta:
• Tabela telemetry: Armazena o registro cronológico de todas as medições dos sensores.
• Tabela pieces: Registra o ciclo de vida de cada peça produzida (ID, cor, RFID, status).
• Tabela alarms: Armazena registros de falhas e paradas de emergência.`,
        code: `import sqlite3
conn = sqlite3.connect(':memory:')
c = conn.cursor()
c.execute('CREATE TABLE telemetry (id INT, sensor TEXT, val REAL)')
c.execute('INSERT INTO telemetry VALUES (1, "PRESSAO_01", 5.8)')
c.execute('SELECT * FROM telemetry')
print(c.fetchall())`,
        output: `[(1, 'PRESSAO_01', 5.8)]`,
        interpretation: "A gravação no banco assegura que a informação não seja perdida quando o contêiner for reiniciado.",
        desafio: "Crie um índice na coluna timestamp para acelerar consultas por intervalos de turno de trabalho.",
        dicas: "Sempre utilize transações com commit e rollback para evitar corrupção da base de dados sob alta taxa de gravação.",
        projeto: "Alimenta a base SQLite/PostgreSQL utilizada no dashboard principal do FactoryHub.",
        timeline: {
            antes: "Telemetria efêmera que desaparecia após o consumo.",
            durante: "Modelagem das tabelas de persistência com ORM SQLAlchemy.",
            depois: "Histórico completo disponível para consultas analíticas."
        },
        integracao: {
            cienciaDados: "Disponibiliza tabelas históricas para algoritmos de machine learning.",
            nuvem: "Estrutura compatível com Cloud SQL PostgreSQL na GCP.",
            devops: "Automatiza a criação de esquemas de banco via migrações."
        }
    }],

    5: [{
        biblio: "Groover (2011), Cap.10; Moraes & Castrucci (2007), Cap.11",
        title: "5. Dashboards Operacionais em Tempo Real com Grafana",
        objetivos: [
            "Conectar fontes de dados ao Grafana.",
            "Criar painéis operacionais com gauges e séries temporais.",
            "Monitorar status de atuadores e contagem de peças."
        ],
        contexto: "Os operadores de fábrica necessitam de telas intuitivas para monitorar o ritmo da linha de produção e identificar paralisações instantaneamente.",
        theory: `Supervisão Industrial com Grafana:
O Grafana consulta o banco de dados da planta a cada poucos segundos exibindo:
• Contadores de Peças Produzidas.
• Medidores de Pressão e Temperatura (Gauges).
• Histórico de Alarmes e Erros Ativos.
• Taxa Instantânea de Conformidade (Qualidade %).`,
        code: `prod = 500
ok = 480
qualidade = (ok / prod) * 100
print(f"Total: {prod} | Conformes: {ok} | Qualidade: {qualidade:.1f}%")`,
        output: `Total: 500 | Conformes: 480 | Qualidade: 96.0%`,
        interpretation: "A taxa de conformidade de 96% indica que a linha opera dentro dos parâmetros de qualidade aceitáveis.",
        desafio: "Configure um alerta visual no Grafana caso a taxa de defeito ultrapasse 5% em 10 minutos.",
        dicas: "Evite utilizar taxas de atualização inferiores a 1 segundo para não sobrecarregar o banco de dados relacional.",
        projeto: "Integrado ao dashboard operacional do FactoryHub para acompanhamento de produção.",
        timeline: {
            antes: "Acompanhamento manual com planilhas em papel.",
            durante: "Configuração de painéis em tempo real no Grafana.",
            depois: "Supervisão remota acessível por navegadores e dispositivos móveis."
        },
        integracao: {
            cienciaDados: "Consome métricas calculadas pelas pipelines estatísticas.",
            nuvem: "Hospedado via PaaS/SaaS ou contêineres na nuvem.",
            devops: "Empacotado via Docker Compose."
        }
    }],

    6: [{
        biblio: "Tanenbaum et al. (2021), Cap.5; Franchi & Camargo (2009), Cap.8",
        title: "6. Consumo de Dados e Integração via APIs RESTful",
        objetivos: [
            "Compreender endpoints HTTP REST em automação.",
            "Consumir JSON de APIs operacionais.",
            "Integração entre sistemas de supervisão e aplicações web."
        ],
        contexto: "Para que o FactoryHub comunique-se com os controladores fabris, utiliza-se chamadas HTTP REST para leitura de status e disparo de comandos.",
        theory: `Arquitetura RESTful Fabril:
• GET /api/kpis: Retorna contadores agregados da fábrica.
• GET /api/telemetry: Retorna últimos registros dos sensores.
• POST /api/control: Envia comandos de liga/desliga para os atuadores pneumáticos.`,
        code: `kpis_api = {"total_telemetry": 12000, "total_pieces": 1500, "active_alarms": 1}
print("Response HTTP 200 OK:", kpis_api)`,
        output: `Response HTTP 200 OK: {'total_telemetry': 12000, 'total_pieces': 1500, 'active_alarms': 1}`,
        interpretation: "A API expõe o estado atual da fábrica em formato padrão JSON para consumo assíncrono.",
        desafio: "Implemente uma rota REST para alterar a velocidade do inversor de frequência.",
        dicas: "Utilize códigos de status HTTP corretos (200 OK, 400 Bad Request, 500 Internal Error) nas suas APIs.",
        projeto: "Utilizado por todas as rotas do FactoryHub para atualizar cartões de estatísticas sem recarregar a página.",
        timeline: {
            antes: "Sistemas fechados e sem interoperabilidade.",
            durante: "Criação de rotas RESTful em Flask/Python.",
            depois: "Consumo de dados universal por qualquer cliente HTTP."
        },
        integracao: {
            cienciaDados: "Alimenta os gráficos interativos Plotly via chamadas AJAX.",
            nuvem: "Publicado em servidores web Serverless no GCP Cloud Run.",
            devops: "Validado por testes de integração de API automatizados."
        }
    }],

    7: [{
        biblio: "Aguirre (2013), Cap.4; Moraes & Castrucci (2007), Cap.6",
        title: "7. Gestão de Alarmes, Telemetria e Segurança Operacional",
        objetivos: [
            "Configurar limites de alarme LSE e LSI.",
            "Tratar interrupções de emergência no processo.",
            "Gravar históricos de alarmes para auditoria."
        ],
        contexto: "Quando um valor físico (temperatura, pressão) ultrapassa a faixa operacional segura, o sistema deve acionar dispositivos de proteção e registrar o alarme.",
        theory: `Monitoramento de Limites Críticos:
• LSE (Limite Superior de Especificação): Valor máximo tolerável.
• LSI (Limite Inferior de Especificação): Valor mínimo tolerável.
• Severidade: INFO, WARNING, CRITICAL.

O registro imediato do alarme interrompe a esteira antes que ocorra dano físico ao equipamento.`,
        code: `def avaliar_pressao(p):
    if p > 7.0:
        return "ALARM CRITICAL: Sobrepressão!"
    return "STATUS OK"

print(avaliar_pressao(7.4))`,
        output: `ALARM CRITICAL: Sobrepressão!`,
        interpretation: "O alarme de severidade CRITICAL dispara o travamento da solenoide e notifica o supervisor.",
        desafio: "Desenvolva uma lógica que exija rearme manual do operador após um alarme crítico.",
        dicas: "Nunca ignore alarmes intermitentes. Analise o histórico para prevenir falhas catastróficas.",
        projeto: "Alimenta o painel de alarmes recentes do FactoryHub.",
        timeline: {
            antes: "Paradas abruptas sem identificação do motivo.",
            durante: "Implementação de verificações automáticas de limites LSE/LSI.",
            depois: "Painel de alarmes em tempo real com categorização de risco."
        },
        integracao: {
            cienciaDados: "Permite correlacionar variáveis de processo com ocorrência de defeitos.",
            nuvem: "Dispara notificações instantâneas por e-mail/webhook.",
            devops: "Centraliza registros em sistemas de logs estruturados."
        }
    }],

    8: [{
        biblio: "Groover (2011), Cap.1 & 10",
        title: "8. Indicadores Industriais e Cálculo de OEE",
        objetivos: [
            "Compreender o indicador OEE (Overall Equipment Effectiveness).",
            "Calcular Disponibilidade, Desempenho e Qualidade.",
            "Avaliar a eficiência global da planta Smart N1."
        ],
        contexto: "O OEE mede o percentual do tempo de fabricação planejado que é verdadeiramente produtivo.",
        theory: `Fórmula Geral do OEE:
OEE = Disponibilidade × Desempenho × Qualidade

Onde:
• Disponibilidade = Tempo Operacional / Tempo Planejado
• Desempenho = Produção Real / Produção Teórica
• Qualidade = Peças Boas / Total de Peças Produzidas`,
        code: `disp = 0.94
desemp = 0.90
qual = 0.98
oee = disp * desemp * qual * 100
print(f"OEE Global: {oee:.2f}%")`,
        output: `OEE Global: 82.91%`,
        interpretation: "Um OEE de 82.91% reflete uma operação eficiente próxima do padrão mundial de 85%.",
        desafio: "Identifique qual dos 3 fatores causou a maior perda de eficiência com base nos dados do turno.",
        dicas: "Melhorias focadas no fator de menor desempenho geram maior retorno sobre o investimento (ROI).",
        projeto: "Calculado dinamicamente para os relatórios executivos do FactoryHub.",
        timeline: {
            antes: "Sem métrica unificada de desempenho fabril.",
            durante: "Implementação do cálculo automatizado de OEE.",
            depois: "Visualização diária da eficiência global por turno e estação."
        },
        integracao: {
            cienciaDados: "Serve como variável target para modelos preditivos.",
            nuvem: "Exibido nos dashboards executivos consolidados.",
            devops: "Validado em esteiras de teste de regressão de KPIs."
        }
    }],

    9: [{
        biblio: "Groover (2011), Cap.2; Moraes & Castrucci (2007), Cap.1",
        title: "9. Casos Reais de Manufatura e Diagnóstico de Paradas",
        objetivos: [
            "Analisar causas de paradas de máquina.",
            "Aplicar metodologia de 5 Porquês e Ishikawa.",
            "Propor ações corretivas baseadas em telemetria."
        ],
        contexto: "Na rotina fabril, pequenos tempos de parada acumulados resultam em perdas financeiras expressivas.",
        theory: `Diagnóstico de Causa Raiz:
Utiliza-se telemetria de parada para categorizar:
• Paradas Planejadas: Setup, manutenção preventiva, limpeza.
• Paradas Não Planejadas: Quebra mecânica, falta de insumo, falha de comunicação.`,
        code: `paradas = [("Setup", 30), ("Quebra Inversor", 45), ("Falta Insumo", 90)]
total = sum(p[1] for p in paradas)
print(f"Total Paradas: {total} min | Maior Ofensor: {max(paradas, key=lambda x:x[1])[0]}")`,
        output: `Total Paradas: 165 min | Maior Ofensor: Falta Insumo`,
        interpretation: "A falta de insumos é responsável por mais da metade da indisponibilidade no turno.",
        desafio: "Proponha uma automação baseada em sensor de nível para evitar a parada por falta de insumo.",
        dicas: "Elimine primeiro as paradas com maior impacto em minutos antes de otimizar setups rápidos.",
        projeto: "Subsidia as análises de causa raiz apresentadas na central de relatórios.",
        timeline: {
            antes: "Apontamento genérico de paradas sem causa raiz.",
            durante: "Categorização dos eventos de indisponibilidade via telemetria.",
            depois: "Plano de ação preventivo contra os maiores ofensores."
        },
        integracao: {
            cienciaDados: "Utilizado em algoritmos de regressão e clustering.",
            nuvem: "Armazena históricos de longo prazo no Cloud Storage.",
            devops: "Garante ambiente confiável para simulação de cenários."
        }
    }],

    10: [{
        biblio: "Franchi & Camargo (2009), Cap.8 & 9",
        title: "10. Integração TI/TA Completa da Célula Fabril",
        objetivos: [
            "Conectar todos os componentes da Pirâmide ISA-95.",
            "Validar comunicação síncrona e assíncrona.",
            "Garantir rastreabilidade de ponta a ponta."
        ],
        contexto: "Unificação dos sensores de campo, broker MQTT, banco de dados, API REST e interface web em um ecossistema único.",
        theory: `Arquitetura Integrada TI/TA:
1. Sensor aciona sinal 24V na peça.
2. Gateway publica mensagem em broker MQTT.
3. Node-RED / Python persiste o registro no PostgreSQL.
4. API Flask expõe os dados via REST.
5. Interface Web exibe o evento em tempo real.`,
        code: `pipeline = ["Sensor", "MQTT", "Database", "API", "WebUI"]
print(" -> ".join(pipeline))`,
        output: `Sensor -> MQTT -> Database -> API -> WebUI`,
        interpretation: "Demonstra o fluxo contínuo do dado desde o contato elétrico no sensor até a tela do usuário.",
        desafio: "Simule uma perda de conexão com o broker e verifique a resiliência do armazenamento local.",
        dicas: "Utilize buffers locais (store-and-forward) para evitar perda de telemetria durante falhas de rede.",
        projeto: "Consolidação da infraestrutura da Smart N1 para o projeto final.",
        timeline: {
            antes: "Componentes isolados e não comunicantes.",
            durante: "Conexão de todas as camadas do ecossistema fabril.",
            depois: "Fluxo automatizado e integrado de ponta a ponta."
        },
        integracao: {
            cienciaDados: "Alimenta os relatórios analíticos finais.",
            nuvem: "Hospeda o ecossistema em nuvem pública GCP.",
            devops: "Automação completa via pipelines CI/CD."
        }
    }],

    11: [{
        biblio: "Franchi & Camargo (2009), Cap.9; Groover (2011), Cap.11",
        title: "11. Demonstração Prática da Integração (Capstone)",
        objetivos: [
            "Operar a planta Smart N1 em cenário real.",
            "Demonstrar a ingestão e tratamento de eventos.",
            "Apresentar resultados integrados às 4 disciplinas."
        ],
        contexto: "Sessão de encerramento prático operando a célula com simulação de peças, alarmes e acompanhamento no FactoryHub.",
        theory: `Demonstração do Capstone:
Os estudantes executam a operação completa:
• Injeção de peças de cores variadas.
• Leitura de RFID e triagem pneumática.
• Visualização dos KPIs e OEE no dashboard.
• Auditoria de dados no banco relacional.`,
        code: `def status_capstone(peca, cor, aprovada):
    decisao = "APROVADA" if aprovada else "DESVIADA"
    return f"Peça {peca} ({cor}) -> {decisao}"

print(status_capstone("P-101", "Azul", True))`,
        output: `Peça P-101 (Azul) -> APROVADA`,
        interpretation: "A esteira executa o desvio correto e atualiza os contadores no FactoryHub instantaneamente.",
        desafio: "Apresente o relatório consolidado com o total de peças processadas no evento final.",
        dicas: "Prepare um checklist prévio de todos os serviços antes de iniciar a demonstração ao vivo.",
        projeto: "Entrega final do projeto integrador da disciplina de Automação Industrial.",
        timeline: {
            antes: "Módulos desenvolvidos individualmente nas aulas anteriores.",
            durante: "Demonstração ao vivo da operação da esteira Smart N1.",
            depois: "Apresentação de conclusões e encerramento do semestre."
        },
        integracao: {
            cienciaDados: "Apresenta os insights e gráficos finais gerados em Python.",
            nuvem: "Operação hospedada em ambiente de produção na nuvem.",
            devops: "Esteiras de deploy validadas e em execução contínua."
        }
    }]
};
