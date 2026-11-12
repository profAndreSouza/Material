# Guia de Estudos — Prova Teórico-Prática 2 (P2)
## Unidade Curricular: Automação Industrial

---

## 1. Informações Gerais da Avaliação

- **Conteúdo prioritário:** aulas posteriores à P1, com foco nas Semanas 10, 12 e 13 e nas aplicações de integração previstas para as Semanas 15 a 17.
- **Escopo informado no plano da disciplina:** Semanas 10 a 16. O cronograma apresenta atividades de PII e projeto integrado dentro desse intervalo.
- **Formato esperado:** use este guia para revisar conceitos, interpretar fluxos e justificar decisões. O formato específico e a quantidade de questões da P2 não estão confirmados nos materiais disponíveis.
- **Ênfase em relação à P1:** validação de telemetria, entrega e duplicidade, tratamento de falhas, processamento com estado e ciclo de vida dos alertas, arquitetura e persistência dos dados no projeto.
- **Revisão cumulativa:** MQTT e Node-RED reaparecem porque os conteúdos novos usam esses fundamentos. A prioridade é saber aplicá-los a confiabilidade e operação, não reaprender apenas definições da P1.

> **Nota sobre os materiais:** há notebooks detalhados das Semanas 10, 12 e 13. O README também lista bancos de séries temporais/InfluxDB, Flux, CRISP-DM e detecção de anomalias como conhecimentos programáticos, mas não há aulas/notebooks específicos desses tópicos no repositório. O cronograma atualizado do projeto, por sua vez, descreve AWS IoT Core e persistência NoSQL. Confirme com o docente qual trilha de persistência será cobrada; este guia identifica ambas sem tratá-las como equivalentes.

---

## 2. Mapa Conceitual dos Conteúdos

### Semana 10 — Construção guiada de fluxos Node-RED e contrato de dados

- **Mensagem `msg`:** objeto que percorre os fios do fluxo. `msg.topic` identifica a rota lógica; `msg.payload` contém o dado principal; metadados como `qos` e `retain` descrevem a entrega MQTT. O payload pode chegar como texto JSON e, após conversão, como objeto.
- **Contrato de telemetria:** define campos, tipos, obrigatoriedade e limites aceitos. O exemplo da aula exige `maquina_id`, `timestamp`, temperatura numérica entre -20 e 150 °C, vibração numérica não negativa e estado conhecido.
- **Nós e responsabilidades:** `mqtt in` recebe; `json` converte representação; `switch` encaminha por condição; `change` altera propriedades sem código; `function` executa validações e cálculos; `debug` torna estados observáveis.
- **Validação e rejeição:** mensagens inválidas devem ir a uma saída explícita com os erros identificados; não devem sumir nem prosseguir como confiáveis. A função de exemplo separa dados válidos e rejeitados e calcula temperatura em Kelvin.
- **Construção incremental:** validar cada trecho do fluxo com pontos de observação antes de adicionar o próximo nó. Testar estados esperados, estado desconhecido, tipo incorreto, campo ausente e JSON malformado.

### Semana 12 — QoS, falhas, duplicidade e observabilidade operacional

- **QoS aplicado:** QoS 0 pode perder mensagens; QoS 1 garante entrega ao menos uma vez e pode duplicar; QoS 2 oferece entrega exatamente uma vez no protocolo, com mais trocas. QoS não substitui validação e lógica correta da aplicação.
- **Idempotência e deduplicação:** uma mensagem repetida não deve causar duas ações ou contabilizações. Identifique eventos com chave/ID estável e registre o que já foi processado, considerando a janela de retenção dessa memória.
- **Classificação por tópico:** separar telemetria, alarmes, produção e status evita aplicar regras de uma categoria a outra. Inspecione `msg.topic`, `msg.payload`, `msg.qos` e `msg.retain`.
- **Tratamento de falhas:** `catch` captura erros de processamento; `status` permite observar mudanças de conexão dos nós. Erro de transformação, dado inválido e desconexão do broker são situações distintas e pedem respostas distintas.
- **Alertas úteis:** um alerta deve incluir máquina, variável, valor, horário, severidade e ação recomendada. Regras de limite precisam gerar uma saída clara e rastreável.
- **Retain e LWT:** retain entrega ao novo assinante o último estado retido, não o histórico. LWT é configurado previamente e publicado pelo broker quando a conexão cai inesperadamente; não é a mensagem de desligamento normal do cliente.
- **Visualização no Node-RED:** a aula demonstra guardar estado do fluxo e servi-lo por uma rota HTTP com entrada, template e resposta. A interface apresenta estado operacional; não substitui o processamento e a validação.

### Semana 13 — Processamento stateful e ciclo de vida dos alertas

- **Validação antes da regra:** confirme existência, tipo e faixa dos dados antes de compará-los com limites. Campos ausentes ou texto onde se espera número precisam seguir para tratamento de inválidos.
- **Estado entre mensagens:** regras stateful usam informação anterior, como leituras consecutivas, horário de início e condição atual do alerta. Isso difere de avaliar cada mensagem isoladamente.
- **Persistência temporal:** exigir que a condição se mantenha por certo período ou quantidade de amostras reduz alarmes por picos breves. Janelas resumem uma sequência de leituras; a escolha da janela afeta rapidez e sensibilidade.
- **Histerese:** usa limites diferentes para ativar e normalizar um alerta. Exemplo: ativa acima de 80 °C e só normaliza abaixo de 75 °C. A faixa evita alternância repetitiva quando o valor oscila perto do limite.
- **Ciclo de vida:** condição normal → alerta ativo → reconhecimento pelo operador → normalização. Reconhecer significa registrar que o operador tomou ciência; não significa que a causa desapareceu.
- **Severidade e supressão:** classifique a importância do evento; limite notificações repetidas enquanto o mesmo alerta continua ativo, mas preserve a atualização do estado e a trilha do evento.
- **Deduplicação de eventos:** combine identidade do evento e estado atual para que mensagens repetidas não abram múltiplos alertas nem incrementem contadores várias vezes.

### Semanas 14 a 16 — PII e projeto integrado: arquitetura, segurança e persistência

- **Semana 14:** orientação do PII; consolidar a comunicação e a lógica do projeto.
- **Semanas 15 e 16 (cronograma):** arquitetura de ponta a ponta, tópicos MQTT e contrato de telemetria; integração do simulador/Node-RED ao AWS IoT Core; fluxo de telemetria, alertas e painel; persistência e consulta de eventos em banco NoSQL gerenciado.
- **Responsabilidades:** sensor/simulador produz dado; Node-RED valida, transforma e roteia; broker recebe/publica mensagens; persistência mantém eventos consultáveis; painel apresenta condição operacional. Controle crítico continua local no controlador.
- **Segurança e contrato:** documente tópicos, campos, tipos, timestamps, regras de acesso e quais componentes podem publicar ou assinar. Consistência no nome dos tópicos e no formato do payload permite integrar produtores e consumidores.
- **Evidências de ponta a ponta:** demonstre evento normal, alerta e normalização, com publicação, processamento, persistência, consulta e logs coerentes.

### Conteúdo do plano de ensino sem aula detalhada disponível

O README inclui **bancos de séries temporais (InfluxDB: bucket, measurement, tag, field e consulta Flux)**, metodologia **CRISP-DM**, **detecção de anomalias** (Isolation Forest/K-Means), manutenção preditiva e OEE. Revise esses termos se o docente confirmou que fazem parte da P2. O arquivo de plano também menciona InfluxDB, enquanto o cronograma mais recente do projeto especifica banco NoSQL gerenciado; são soluções e modelos de dados diferentes.

---

## 3. Glossário de Termos Essenciais

| Termo | Definição teórica concisa |
| :--- | :--- |
| **Contrato de dados** | Regras de campos, tipos, obrigatoriedade e limites que uma mensagem precisa satisfazer. |
| **`msg.payload`** | Propriedade do objeto Node-RED que normalmente carrega o conteúdo da mensagem. |
| **Idempotência** | Propriedade pela qual repetir o mesmo evento não repete o efeito operacional. |
| **Deduplicação** | Identificação e descarte/controle de cópias do mesmo evento. |
| **QoS 1** | Entrega ao menos uma vez; pode duplicar, portanto pede tratamento idempotente. |
| **QoS 2** | Entrega exatamente uma vez no protocolo MQTT, com handshake e custo de comunicação maiores. |
| **Retain** | Armazenamento pelo broker da última mensagem retida de um tópico para novos assinantes; não é histórico. |
| **LWT** | Mensagem que o broker publica quando detecta queda inesperada de um cliente. |
| **Catch** | Nó Node-RED que captura erros emitidos durante o processamento de outros nós. |
| **Status** | Nó Node-RED que observa mudanças de estado/conexão de outros nós. |
| **Processamento stateful** | Regra cujo resultado depende também de estado ou histórico recente, não só da mensagem atual. |
| **Janela** | Conjunto de amostras ou intervalo temporal usado para avaliar uma sequência de leituras. |
| **Histerese** | Diferença entre limites de ativação e normalização para reduzir oscilações do estado. |
| **Reconhecimento** | Registro de que um operador tomou ciência do alerta; não equivale a normalização. |
| **Supressão** | Controle de notificações repetidas do mesmo alerta ainda ativo. |
| **InfluxDB** | Banco de séries temporais citado no plano; organiza dados em buckets, measurements, tags e fields e pode consultar com Flux. |
| **CRISP-DM** | Processo de mineração de dados que organiza o trabalho da compreensão do problema até implantação e avaliação. |

---

## 4. Simulado de Revisão P2 (12 Questões)

### Questão 01 (Múltipla Escolha — Contrato e validação)
Uma mensagem chega com `temperatura: "82.4"` (texto) e o fluxo compara esse campo diretamente com o limite de 80 °C. Qual é a conduta mais confiável?

A) Comparar o texto com o limite e aceitar o resultado do nó `switch`.
B) Validar o tipo, converter apenas se a regra de entrada permitir conversão segura e encaminhar inválidos para uma rota de rejeição.
C) Remover o campo e tratar a máquina como normal.
D) Publicar a mensagem com QoS 2, pois isso corrige o tipo.

### Questão 02 (Múltipla Escolha — Responsabilidade dos nós)
Qual associação entre nó e função está correta?

A) `switch` transforma tipos; `change` recebe MQTT; `debug` valida JSON.
B) `json` converte texto JSON em objeto; `switch` roteia; `change` altera propriedades.
C) `catch` converte JSON; `status` deduplica; `mqtt in` reconhece alertas.
D) `function` serve somente para exibir mensagens no painel.

### Questão 03 (Múltipla Escolha — QoS e duplicidade)
Um evento importante não deve se perder. A aplicação consegue reconhecer o mesmo `event_id` e ignorar seu reprocessamento. Qual decisão é coerente?

A) QoS 0, porque nunca perde mensagens.
B) QoS 1 com deduplicação/idempotência na aplicação.
C) QoS 1 sem deduplicação, pois duplicatas não ocorrem.
D) QoS 2 elimina a necessidade de validar o evento ou de persistir seu estado.

### Questão 04 (Múltipla Escolha — Retain e histórico)
Um painel recém-conectado precisa mostrar imediatamente o último estado conhecido de cada máquina. Qual recurso ajuda diretamente?

A) Retain no tópico de estado.
B) Nó `catch`.
C) QoS 0 sem publicação.
D) Histerese.

### Questão 05 (Múltipla Escolha — Diagnóstico)
O nó `mqtt in` aparece desconectado. O fluxo também pode gerar erros de conversão JSON. Qual abordagem distingue melhor os casos?

A) Usar apenas `catch`, que detecta qualquer falha da rede externa.
B) Usar `status` para observar a conexão e `catch` para erros do processamento, além de validar o payload.
C) Aumentar o limite de temperatura.
D) Usar retain para corrigir o broker.

### Questão 06 (Múltipla Escolha — Histerese)
Um alarme ativa acima de 80 °C e normaliza abaixo de 75 °C. Qual é a finalidade dos dois limites?

A) Fazer a máquina alternar mais rapidamente entre alerta e normal.
B) Evitar que pequenas oscilações próximas a 80 °C liguem e desliguem o alerta repetidamente.
C) Impedir que o valor seja armazenado.
D) Garantir entrega MQTT exatamente uma vez.

### Questão 07 (Múltipla Escolha — Persistência temporal)
Uma leitura ultrapassa o limite por um instante, mas leituras seguintes voltam ao normal. A regra exige que a condição persista por um período antes de alertar. Qual conceito descreve essa regra?

A) Persistência/temporização da condição.
B) Retain.
C) Wildcard `#`.
D) Reconhecimento do operador.

### Questão 08 (Múltipla Escolha — Ciclo do alerta)
O operador reconhece um alerta de vibração, mas a vibração continua alta. O estado correto é:

A) Normalizado, pois reconhecimento encerra a causa.
B) Ativo e reconhecido, até que a condição de normalização seja satisfeita.
C) Excluído, pois eventos reconhecidos não precisam de histórico.
D) Duplicado, obrigatoriamente.

### Questão 09 (Correlação — Recursos e finalidade)
Associe o item à finalidade:

| Coluna A | Coluna B |
| :--- | :--- |
| (1) `catch` | ( ) Armazenar estado atual para novo assinante |
| (2) Retain | ( ) Capturar erro de processamento |
| (3) `status` | ( ) Observar conexão/estado de nó |
| (4) Histerese | ( ) Evitar alternância perto do limite |

Indique a sequência de cima para baixo.

A) 2 - 1 - 3 - 4
B) 1 - 2 - 4 - 3
C) 3 - 4 - 1 - 2
D) 4 - 3 - 2 - 1

### Questão 10 (Correlação — InfluxDB, conforme escopo do plano)
Associe o conceito à descrição:

| Coluna A | Coluna B |
| :--- | :--- |
| (1) Bucket | ( ) Medida/categoria observada, como temperatura |
| (2) Measurement | ( ) Valor medido, normalmente numérico |
| (3) Tag | ( ) Contêiner/organização de dados e retenção |
| (4) Field | ( ) Metadado de identificação usado para filtrar/agrupar |

A) 2 - 4 - 1 - 3
B) 1 - 2 - 3 - 4
C) 4 - 3 - 2 - 1
D) 3 - 1 - 4 - 2

### Questão 11 (Discursiva — QoS, idempotência e alerta)
Explique por que QoS 1 pode ser adequado para um alerta importante e descreva como evitar que uma mensagem duplicada gere duas notificações ou duas contabilizações. Inclua o papel de um identificador de evento.

### Questão 12 (Discursiva — Ciclo de vida e arquitetura)
Descreva o ciclo normal → alerta ativo → reconhecido → normalizado e explique como validar, temporizar e aplicar histerese a uma condição de temperatura. Indique onde processaria a regra crítica e como o evento pode chegar ao painel e à persistência.

---

## 5. Gabarito Comentado e Padrão de Resposta

**01. B** — valide tipos e faixas antes de aplicar regras; não transforme silenciosamente mensagens inválidas em normais.

**02. B** — `json` converte representação, `switch` roteia e `change` altera propriedades sem exigir código.

**03. B** — QoS 1 reduz risco de perda, mas permite duplicatas. `event_id` estável e registro de eventos já processados tornam o efeito idempotente.

**04. A** — retain fornece o valor atual retido a quem acabou de assinar; não fornece série histórica.

**05. B** — `status` observa conexão/estado; `catch` captura erros de nós. Dado inválido deve ser tratado por validação própria.

**06. B** — limites separados reduzem o chaveamento repetitivo quando o valor oscila na vizinhança do limiar.

**07. A** — persistência temporal exige que a condição se mantenha; filtra picos passageiros, com possível atraso intencional do alerta.

**08. B** — reconhecimento é ciência do operador. O alerta segue ativo enquanto a condição não normalizar.

**09. A** — ordem: retain (2), catch (1), status (3), histerese (4).

**10. A** — bucket (1), measurement (2), tag (3), field (4); a sequência descrita é 2-4-1-3.

**11. Padrão de resposta:** QoS 1 confirma entrega pelo menos uma vez e pode retransmitir, gerando duplicata. Cada evento deve trazer identificador estável, como `event_id`; antes de criar notificação ou incrementar contador, o fluxo verifica se esse ID já foi processado e registra o resultado. A deduplicação precisa manter os IDs pelo período relevante e sobreviver a reinícios se a garantia operacional exigir isso.

**12. Padrão de resposta:** validar presença, tipo e faixa da temperatura; iniciar alerta apenas se a leitura acima do limite persistir pela janela/tempo definidos; ativá-lo uma vez, com severidade e contexto; registrar reconhecimento sem encerrar o alerta; normalizar apenas quando a leitura cruzar o limite inferior de histerese. O Node-RED pode validar, manter estado e publicar evento para broker, painel e persistência. Intertravamentos de segurança e controle com prazo rígido ficam no CLP local; nuvem e painel recebem informação, sem entrar no caminho crítico.

---

## 6. Dicas Estratégicas para o Dia da Prova

1. **Leia o contrato antes de aplicar a regra:** identifique campos obrigatórios, tipos e limites; saiba o destino de mensagens inválidas.
2. **Explique o que acontece com a duplicata:** QoS 1 não significa uma única entrega. Conecte QoS a `event_id`, idempotência e deduplicação.
3. **Separe falha de dado de falha de conexão:** JSON inválido, erro de nó e broker desconectado são diagnósticos diferentes.
4. **Diferencie retain de histórico e LWT de desligamento normal:** retain comunica o último valor; LWT informa queda inesperada.
5. **Desenhe o estado do alerta:** condição, ativação, persistência, reconhecimento e normalização têm significados próprios.
6. **Justifique janela e histerese:** janela reduz alarmes por picos; histerese reduz oscilações perto do limite. Ambos afetam a rapidez da resposta.
7. **Apresente a arquitetura de ponta a ponta:** origem → validação/processamento → broker → persistência → painel, com responsabilidade clara para cada componente.
8. **Trate InfluxDB/Flux e AWS IoT Core/NoSQL como tópicos distintos:** o README e o cronograma do projeto descrevem trilhas diferentes. Estude a orientação mais recente do docente.
