# Guia de Estudos — Prova Teórico-Prática 2 (P2)
## Unidade Curricular: Governança de TI

---

## 1. Informações Gerais da Avaliação

- **Escopo indicado no plano:** Semanas 07 a 15. A Semana 16 consolida os conteúdos e o PDGTI para a avaliação.
- **Conteúdo prioritário:** gestão de desempenho e indicadores, gestão de riscos/compliance, frameworks de governança e serviços, qualidade e maturidade, implantação em ondas, fatores críticos de sucesso e gestão da mudança.
- **Revisão integradora:** governança versus gestão e alinhamento estratégico (P1) são bases para compreender a escolha dos frameworks e a continuidade do PDGTI.
- **Foco:** aplicação conceitual a cenários. Saiba justificar decisões, não apenas decorar siglas.

> **Encadeamento central do PDGTI:** diagnóstico e riscos → objetivos e métricas → políticas e processos → frameworks e melhoria → roadmap, investimento e benefícios → acompanhamento e revisão.

---

## 2. Mapa Conceitual dos Conteúdos

### Semana 07 — Desempenho de TI, métricas, indicadores e KPIs

A TI precisa demonstrar contribuição para resultados de negócio, não apenas listar atividade técnica. Medir transforma percepções em evidência e permite verificar se uma iniciativa melhorou o serviço.

#### Dado → métrica → indicador → KPI

- **Dado:** observação registrada, como log de início e fim de uma indisponibilidade.
- **Métrica:** medida calculada a partir dos dados, como minutos de indisponibilidade ou número de falhas.
- **Indicador:** medida interpretada num contexto de desempenho, como disponibilidade mensal do ERP.
- **KPI (Key Performance Indicator):** indicador prioritário ligado a objetivo relevante, com meta, responsável e periodicidade. Nem toda métrica é KPI.

Um painel com dezenas de números sem objetivo, referência ou ação não constitui gestão de desempenho. Cada KPI precisa explicar qual resultado acompanha e que decisão poderá apoiar.

#### KPIs de negócio e KPIs operacionais

| Categoria | O que acompanha | Exemplos |
| :--- | :--- | :--- |
| **Alinhamento ao negócio** | Contribuição da TI para resultado, usuário ou estratégia | ROI de projetos, satisfação de usuários, receita digital, tempo de lançamento |
| **Operação e serviço de TI** | Saúde, disponibilidade, suporte e confiabilidade técnica | disponibilidade, MTTR, MTBF, atendimento dentro do SLA, defeitos em produção |

Indicadores técnicos devem ser traduzidos para consequência de negócio. Por exemplo, CPU é evidência operacional; o impacto no tempo de liberação de caminhões é mais inteligível para a diretoria.

#### Baseline e meta SMART

- **Baseline (linha de base):** desempenho atual medido antes da intervenção. Sem baseline não há comparação confiável do antes e depois.
- **Meta SMART:** específica, mensurável, atingível, relevante e temporal. Deve indicar o que muda, quanto, para qual prazo e por que importa.
- Todo indicador precisa ter fonte de dados, responsável, método/frequência de coleta e critério de interpretação.
- Não invente metas de redução sem evidência. Meça a situação inicial, considere capacidade e risco, depois defina meta.

**MTTR** mede o tempo médio para restaurar/reparar após falhas; **MTBF** mede o tempo médio de operação entre falhas. MTTR menor geralmente significa recuperação mais rápida; MTBF maior geralmente indica intervalos maiores entre falhas. A definição exata do relógio de cada métrica deve ser consistente para permitir comparação.

### Semana 10 — Gestão de riscos em TI, compliance e segurança da informação

#### O que é risco de TI?

Risco expressa efeito da incerteza sobre objetivos. Em TI, uma ameaça pode explorar uma vulnerabilidade num ativo e produzir impacto operacional, financeiro, legal ou reputacional. A análise precisa relacionar cenário, ativo, causa e consequência; “risco de vírus” é vago até dizer o que pode ocorrer e como afeta o negócio.

Distinções úteis:

- **Ativo:** informação, serviço, sistema, infraestrutura, pessoa ou fornecedor que tem valor.
- **Ameaça:** evento ou agente capaz de causar dano, como ransomware, erro humano ou falha de fornecedor.
- **Vulnerabilidade:** fraqueza que permite ou agrava a ocorrência, como sistema sem correções ou ausência de backup testado.
- **Impacto:** consequência sobre os objetivos se o evento ocorrer.
- **Probabilidade:** estimativa da chance/possibilidade no contexto definido.
- **Risco residual:** risco que permanece após controles/resposta.

#### Ciclo de gestão de riscos

1. **Identificação:** registrar cenário, ativo, ameaça, vulnerabilidade e consequência.
2. **Análise:** estimar probabilidade e impacto de forma consistente.
3. **Avaliação/priorização:** comparar severidade aos critérios de tolerância e decidir quais riscos tratar primeiro.
4. **Resposta/tratamento:** escolher e planejar uma resposta, atribuir responsável, prazo e controle; revisar o risco residual.

Na matriz 5 × 5 apresentada nas aulas, probabilidade e impacto recebem escalas de 1 a 5; o escore didático de severidade é Probabilidade × Impacto. Uma pontuação organiza a conversa, mas não é uma probabilidade estatística precisa nem substitui contexto. Defina o que cada nível significa e os limites de baixo, médio, alto e crítico.

#### Quatro respostas ao risco

| Resposta | O que significa | Exemplo conceitual |
| :--- | :--- | :--- |
| **Mitigar/reduzir** | Diminuir probabilidade ou impacto com controles | MFA, backup isolado e teste de restauração |
| **Evitar/eliminar** | Encerrar atividade que gera risco inaceitável | Descontinuar servidor obsoleto sem suporte |
| **Transferir/compartilhar** | Compartilhar parte do impacto, por exemplo por contrato/seguro | Seguro cibernético ou serviço com SLA contratual |
| **Aceitar** | Decidir conscientemente conviver com o risco residual | Aceitar lentidão eventual num relatório secundário |

Transferir não elimina necessariamente o risco operacional; por exemplo, um seguro não recupera automaticamente dados nem evita interrupção. Aceitar exige decisão explícita por autoridade adequada, justificativa e revisão.

#### Compliance, segurança e continuidade

- **Compliance:** atender obrigações legais, regulatórias, contratuais e políticas aplicáveis e manter evidências de conformidade.
- **LGPD:** no escopo da aula, relaciona-se à governança e proteção de dados pessoais; a empresa precisa identificar dados, responsabilidades, finalidade e controles de tratamento conforme orientação aplicável.
- **ISO/IEC 27001:** referência para um Sistema de Gestão de Segurança da Informação; conecta riscos, controles, responsabilidades e melhoria.
- **PCI-DSS:** padrão de segurança ligado a organizações que processam, armazenam ou transmitem dados de cartões.
- **Tríade CID:** confidencialidade (acesso somente autorizado), integridade (exatidão e proteção contra alteração indevida) e disponibilidade (acesso quando necessário).
- **Continuidade/resiliência:** preparar-se para manter ou restaurar operações críticas. Backups precisam ser protegidos e ter restauração testada; existir um arquivo de backup não prova capacidade de recuperação.

**Cenário ransomware:** uma ameaça criptografa banco e arquivos; vulnerabilidades podem incluir sistemas sem correções e backup conectado à mesma rede. Tratamentos podem combinar atualização, controle de acesso, segregação, backup imutável/offline e teste de restauração. A resposta deve estar ligada ao risco e ser acompanhada por responsável e evidência.


### Semana 12 — Referências de governança e gestão de serviços

As referências se complementam, mas não são sinônimas. Escolha e adapte práticas a partir do diagnóstico e da capacidade da organização; implementar tudo sem propósito pode criar burocracia que não se mantém.

#### ISO/IEC 38500 — orientar decisões da direção

É uma referência de princípios para dirigentes avaliarem e orientarem o uso da TI. Não é uma lista de tarefas operacionais.

- **EDM — Evaluate, Direct, Monitor:** avaliar necessidades, opções, risco e desempenho; dirigir prioridades, políticas e responsabilidades; monitorar se o uso da TI está produzindo os resultados esperados.
- Se indicadores mostram que um sistema crítico cai frequentemente, a direção avalia o problema, define direção e recursos e acompanha resultado e risco residual.

**Seis princípios estudados:** responsabilidade, estratégia, aquisição, desempenho, conformidade e comportamento humano. Eles ajudam a perguntar: quem responde? A TI apoia a estratégia? A aquisição tem justificativa? O desempenho gera valor? Há conformidade? Os efeitos sobre pessoas foram considerados?

#### COBIT — estruturar objetivos de governança e gestão

COBIT organiza objetivos e práticas para alinhar TI ao negócio, tratar riscos, controlar desempenho e definir responsabilidades. A organização seleciona objetivos prioritários conforme problemas e riscos; não precisa adotar o framework inteiro.

| Domínio | Foco resumido | Pergunta de apoio |
| :--- | :--- | :--- |
| **EDM** | Governar: avaliar, dirigir e monitorar | As decisões, benefícios e riscos estão sendo acompanhados? |
| **APO** | Alinhar, planejar e organizar | Temos estratégia, prioridades, arquitetura e recursos coerentes? |
| **BAI** | Construir, adquirir e implementar | Como mudanças/projetos são preparados e colocados em uso? |
| **DSS** | Entregar, servir e suportar | Como os serviços são operados e apoiados? |
| **MEA** | Monitorar, avaliar e analisar | Como desempenho, controles e conformidade são avaliados? |

Nos materiais, um problema de atraso e estouro de orçamento pede investigar causas e escolher objetivos relacionados a projetos, recursos ou acompanhamento, em vez de citar COBIT sem ligação com a necessidade.

#### ITIL — melhorar serviços de TI

ITIL oferece orientação para criar, entregar, apoiar e melhorar serviços que ajudam usuários a obter resultados. Um serviço não é apenas uma aplicação: envolve pessoas, processos, tecnologia, suporte e acordos.

- **Sistema de Valor de Serviço (SVS):** visão de como princípios, governança, práticas e melhoria contínua trabalham em conjunto para gerar valor.
- **Cadeia de valor:** atividades conectam demanda/oportunidade à criação e entrega de valor, com interação e melhoria contínuas.
- **Gestão de incidentes:** restaura o serviço e reduz o impacto de uma interrupção.
- **Gestão de mudanças:** avalia e controla mudanças para equilibrar benefício e risco.
- **Gestão de níveis de serviço:** combina expectativas de serviço, medidas e acompanhamento.

Incidente e causa-raiz não são a mesma pergunta: restaurar o serviço rapidamente trata o incidente; investigar por que falha repetidamente orienta prevenção/melhoria. Para um sistema de vendas que cai, ITIL pode orientar atendimento e níveis de serviço, enquanto COBIT estrutura objetivos/controles e ISO/IEC 38500 orienta decisões da direção.

#### Como selecionar e combinar

| Necessidade diagnosticada | Referência/prática que pode ajudar | Resultado esperado |
| :--- | :--- | :--- |
| Direção não define prioridades nem acompanha valor da TI | Princípios ISO/IEC 38500 e ciclo EDM | Responsabilidade e decisões acompanhadas |
| Projetos têm pouca governança, riscos ou controle | Objetivos COBIT escolhidos segundo o problema | Processos/controles ligados a objetivos organizacionais |
| Incidentes são recorrentes e suporte é inconsistente | Práticas ITIL de incidente, mudança e nível de serviço | Serviço mais previsível e melhora mensurável |

A seleção precisa explicar **problema → referência/prática → ação → responsável → evidência/indicador**. A mesma iniciativa pode combinar referências; não se deve sugerir que um framework substitui os outros.

### Semana 13 — Maturidade, ciclo de vida e qualidade de software

#### Qualidade do processo versus qualidade do produto

- **Processo:** atividades repetíveis, papéis, controles e evidências usados para criar/manter software. Evidências incluem requisitos rastreáveis, mudanças registradas, revisões e testes.
- **Produto:** software entregue e sua capacidade de atender a necessidades e restrições. Evidências incluem critérios de aceite, resultados de teste, indicadores e feedback dos usuários.
- Processo previsível ajuda a reduzir erros recorrentes, mas não garante que o produto seja adequado. Um sistema pode cumprir um processo e ainda não atender à necessidade real.
- Controle formal demais também pode atrasar o trabalho. O rigor de mudança deve ser proporcional ao risco, impacto, criticidade e contexto.

#### CMMI e MR-MPS-SW

Modelos de maturidade ajudam a avaliar capacidades e organizar evolução. Não certificam que um produto específico esteja sem defeitos e não dispensam evidência.

**CMMI, representação por estágios, níveis 1 a 5:**

| Nível | Leitura didática | Evidência típica |
| :--- | :--- | :--- |
| **1 — Inicial** | Resultados variam e dependem de esforço individual | publicação depende de uma pessoa; trabalho pouco planejado |
| **2 — Gerenciado** | Projetos são planejados e acompanhados | responsáveis, prazos, requisitos e mudanças registrados |
| **3 — Definido** | Processos comuns estão descritos e adaptados | equipes usam práticas organizacionais consistentes |
| **4 — Gerenciado quantitativamente** | Desempenho é controlado com medidas quantitativas | limites de falhas/tempo e tendências monitorados |
| **5 — Em otimização** | Dados orientam melhoria contínua | causas recorrentes eliminadas e resultados reavaliados |

**MR-MPS-SW** tem sete níveis, de G a A: G (Parcialmente Gerenciado), F (Gerenciado), E (Parcialmente Definido), D (Largamente Definido), C (Definido), B (Gerenciado Quantitativamente), A (Em Otimização). A progressão pode apoiar melhoria gradual conforme o contexto.

Não faça equivalência direta entre um nível CMMI e um nível MR-MPS-SW. Escopo, requisitos e métodos de avaliação diferem. Também não declare nível formal com base num exemplo curto: delimite equipe/sistema/processo, reúna evidências e descreva limitações. Plano interno de melhoria não é avaliação ou certificação formal.

#### ISO/IEC 12207 e ciclo de vida

A ISO/IEC 12207 organiza processos de ciclo de vida de software, desde aquisição/requisitos e desenvolvimento até transição, operação, manutenção e retirada. Ela é uma referência para organizar atividades, não receita única nem ferramenta específica. Atividades de apoio, como qualidade, configuração, verificação, validação, revisão e auditoria, podem atravessar várias etapas.

**Verificação:** o produto foi construído de acordo com a especificação?  
**Validação:** o produto resolve a necessidade real de quem vai usá-lo?

Exemplo: testar se o cálculo do total corresponde à regra especificada é verificação; confirmar com usuários que o fluxo de compra atende ao trabalho real é validação. Um sistema pode passar na verificação e ainda ser inadequado ao uso.

#### ISO/IEC 25010: qualidade do produto

A aula distingue a referência histórica ISO/IEC 9126/edições anteriores da ISO/IEC 25010:2023 estudada. O modelo mais recente apresenta nove características. A equipe escolhe as pertinentes ao produto e transforma termos vagos em critérios observáveis.

| Característica | Pergunta prática | Exemplo de evidência |
| :--- | :--- | :--- |
| **Adequação funcional** | Faz as funções necessárias corretamente? | testes de regras críticas |
| **Eficiência de desempenho** | Responde e usa recursos adequadamente? | tempo de resposta sob carga |
| **Compatibilidade** | Coexiste e troca dados com outros sistemas? | testes de integração/interoperabilidade |
| **Capacidade de interação** | É compreensível e utilizável? | conclusão de tarefas, erros de uso, acessibilidade |
| **Confiabilidade** | Mantém desempenho e recuperação previstos? | disponibilidade, recuperação após falha |
| **Segurança da informação** | Protege dados e acesso contra ameaças? | testes de perfil/permissão e auditoria |
| **Manutenibilidade** | Pode ser analisado, alterado e testado com segurança? | esforço de correção, testes de regressão |
| **Flexibilidade** | Adapta-se a contextos e mudanças? | esforço de configuração ou migração |
| **Segurança operacional (safety)** | Evita risco inaceitável à vida, saúde ou propriedade? | análise de perigos e controles, quando aplicável |

*Security* protege informação; *safety* trata danos à vida, saúde ou propriedade. “O sistema deve ser rápido/seguro” é vago até explicitar contexto, método e limite acordado. Exemplo de requisito mensurável: “95% das consultas abaixo de 2 s com 200 usuários simultâneos”, medido por teste de carga definido. Valores devem vir do negócio e de baseline, não ser copiados como universais.


#### Controle de mudanças e garantia da qualidade

Mudança pode afetar software, infraestrutura, configuração, dados, segurança, integração, custos e continuidade. O controle registra a decisão e reduz alteração não rastreável.

Fluxo conceitual proporcional ao risco:

1. Registrar motivo, escopo, solicitante e urgência.
2. Avaliar impacto em usuários, serviço, dados, segurança, custo e continuidade.
3. Classificar a mudança (padrão, normal ou emergencial conforme regra local).
4. Obter aprovação da autoridade adequada ao risco.
5. Testar em ambiente apropriado e registrar evidência/aceite.
6. Implantar com responsável e comunicação definidos.
7. Definir previamente critério e plano de retorno.
8. Revisar resultado, incidentes e lições aprendidas.

Nem toda alteração precisa de aprovação executiva ou comitê. Mudanças rotineiras e pré-aprovadas podem seguir fluxo leve; mudanças de alto impacto pedem controles maiores. **QA (garantia da qualidade)** é mais amplo que teste final: pode incluir revisão de requisitos, padrões, pares, testes automatizados, auditoria de registros e análise de defeitos.

### Semana 15 — Implantar governança, FCS, mudança organizacional e benefícios

#### Roadmap em ondas

Implantar todos os frameworks e políticas simultaneamente pode sobrecarregar a organização. Roadmap em ondas liga ações prioritárias à capacidade e maturidade:

| Horizonte didático | Foco possível | Exemplo |
| :--- | :--- | :--- |
| **Curto prazo (0–6 meses)** | Conter riscos urgentes e obter quick wins | inventário, controle de acesso, comitê de TI |
| **Médio prazo (6–18 meses)** | Estruturar processos e responsabilidades | formalizar PETI, práticas COBIT/ITIL selecionadas, monitoramento |
| **Longo prazo (18–36 meses)** | Otimizar e inovar | maturidade avançada, automação e análise preditiva |

Os prazos são referência da aula, não promessa universal. Duração e ordem devem refletir diagnóstico, dependências, orçamento, riscos e capacidade da equipe. Cada onda precisa de entregáveis e critérios para decidir se a organização está pronta para avançar.

#### Fatores Críticos de Sucesso (FCS)

FCS são condições essenciais para a iniciativa produzir resultado. A aula destaca patrocínio executivo, foco no negócio, quick wins e comunicação transparente. Também são necessários responsável, recursos e acompanhamento para sustentar as ações.

Não basta listar FCS: explique qual risco de implantação cada fator evita e que evidência mostraria que está presente.


#### Gestão da mudança organizacional — ADKAR

| Etapa | Significado | Pergunta |
| :--- | :--- | :--- |
| **A — Awareness** | Consciência da necessidade | A pessoa entende por que mudar? |
| **D — Desire** | Desejo de apoiar/participar | Ela quer participar da mudança? |
| **K — Knowledge** | Conhecimento de como mudar | Sabe o que fazer? |
| **A — Ability** | Habilidade para executar | Consegue aplicar o novo comportamento no trabalho? |
| **R — Reinforcement** | Reforço para sustentar | O que mantém o novo comportamento? |

Treinamento ajuda em Knowledge, mas não cria automaticamente Awareness ou Desire. Sem entender a razão ou querer participar, a pessoa pode não aplicar o que aprendeu. Identifique a barreira e responda com comunicação, participação, capacitação, apoio prático e reforço conforme a etapa necessária.

#### CAPEX, OPEX e geração de valor

- **CAPEX:** investimento em bens de capital, como servidores ou infraestrutura própria; é tratado como ativo conforme regras contábeis da organização.
- **OPEX:** despesa operacional recorrente, como assinatura de serviço, suporte ou consumo em nuvem.
- A escolha tem efeito financeiro e operacional. Serviço recorrente pode mudar perfil de custo e flexibilidade, mas não é automaticamente mais barato.
- Relacione investimento a benefício: reduzir indisponibilidade, tempo de atendimento, perda de dados, retrabalho ou risco; ou aumentar satisfação, capacidade e receita.
- Benefício precisa de baseline, indicador, responsável e prazo. “Melhorar segurança” sem evidência ou critério não demonstra valor.

### Semana 16 — PDGTI coeso e governança contínua

PDGTI não é uma coleção de capítulos. O diagnóstico fundamenta objetivos; objetivos orientam estrutura e indicadores; riscos e frameworks orientam controles/melhoria; o roadmap define sequência, custo, responsáveis e benefícios.

**Caracterização → Diagnóstico/SWOT → Estratégia/BSC → Estrutura/RACI → KPIs → Riscos/Compliance → Frameworks → Maturidade/Qualidade → Roadmap/Benefícios → Monitoramento e revisão**

#### PDCA aplicado à governança

- **Plan (Planejar):** revisar objetivos, KPIs, riscos, prioridades e plano.
- **Do (Executar):** aplicar políticas, processos, controles e ondas do roadmap.
- **Check (Checar):** comparar resultados com baseline/metas, revisar indicadores e evidências.
- **Act (Agir):** corrigir desvios, atualizar riscos, ajustar ações/orçamento e realimentar o ciclo seguinte.

O PDGTI é instrumento vivo. Mudança no negócio, risco ou desempenho pode exigir revisão. Governança contínua não significa mudar tudo constantemente, mas verificar e ajustar com evidências.

#### Checklist de coerência do PDGTI

- SWOT e problemas identificados sustentam os objetivos estratégicos.
- Objetivos de TI se ligam aos objetivos do negócio e às perspectivas do BSC.
- Estrutura define papéis; cada linha RACI tem exatamente um **A (Accountable)** pelo resultado.
- KPIs têm baseline, meta SMART, fonte, responsável e periodicidade.
- Riscos têm cenário, probabilidade, impacto, prioridade, resposta, dono e risco residual.
- Frameworks respondem às dores diagnosticadas e têm justificativa de adaptação.
- Ações de maturidade/qualidade têm escopo, evidência e melhoria mensurável.
- Roadmap tem ondas, dependências, prazos realistas, recursos, CAPEX/OPEX e benefícios acompanháveis.


---

## 3. Glossário de Termos Essenciais

| Termo | Definição concisa |
| :--- | :--- |
| **Baseline** | Desempenho atual medido antes da intervenção, usado como referência para comparar resultados. |
| **KPI** | Indicador-chave ligado a objetivo e acompanhado com meta, responsável e periodicidade. |
| **MTTR / MTBF** | Tempo médio de restauração após falha / intervalo médio de operação entre falhas. |
| **Risco de TI** | Efeito da incerteza sobre objetivos por eventos que podem explorar vulnerabilidades. |
| **Risco residual** | Risco que permanece depois dos controles e tratamentos adotados. |
| **Compliance** | Atendimento demonstrável a obrigações legais, regulatórias, contratuais e internas. |
| **CID** | Confidencialidade, integridade e disponibilidade da informação. |
| **ISO/IEC 38500** | Referência de princípios para dirigentes governarem o uso da TI. |
| **EDM** | Evaluate, Direct, Monitor: avaliar, dirigir e monitorar a TI. |
| **COBIT** | Framework de objetivos e práticas para governança/gestão de informação e tecnologia. |
| **ITIL** | Orientação para criar, entregar, apoiar e melhorar serviços de TI. |
| **Maturidade** | Capacidade de executar processos com grau crescente de gestão, definição e melhoria. |
| **Verificação / validação** | Conferir conformidade com especificação / confirmar atendimento à necessidade real. |
| **FCS** | Fator Crítico de Sucesso: condição essencial para uma iniciativa atingir seu objetivo. |
| **ADKAR** | Awareness, Desire, Knowledge, Ability, Reinforcement: etapas humanas da mudança. |
| **PDCA** | Plan, Do, Check, Act: ciclo de planejar, executar, checar e agir para melhorar. |
| **CAPEX / OPEX** | Investimento em bens de capital / despesa operacional recorrente. |

---

## 4. Simulado Conceitual da P2 (12 questões)

### Questão 01 (Múltipla Escolha — KPI e baseline)
Uma equipe quer reduzir o tempo de restauração de um sistema crítico. Atualmente, a média é 4 horas. Qual proposta permite acompanhar uma melhoria de modo mais consistente?

A) Informar que o suporte “parece mais rápido” após uma mudança.  
B) Definir KPI de MTTR com baseline de 4 horas, meta e prazo, responsável e método/período de apuração.  
C) Medir somente CPU dos servidores sem relacionar ao serviço.  
D) Contar todos os chamados fechados, sem considerar criticidade ou tempo.

### Questão 02 (Múltipla Escolha — Análise de risco)
Uma clínica tem sistemas sem correções de segurança e backups ligados à mesma rede. A equipe descreve “risco de vírus”. Qual abordagem está mais alinhada ao ciclo de riscos?

A) Registrar cenário, ativo, ameaça/vulnerabilidade e consequência; estimar probabilidade/impacto, priorizar e definir resposta/dono.  
B) Comprar seguro sem avaliar o risco.  
C) Declarar risco zero após criar uma política.  
D) Calcular somente quantas máquinas existem.

### Questão 03 (Múltipla Escolha — Tratamento de risco)
Uma organização descontinua um servidor antigo, pois não é possível reduzir a exposição de uma tecnologia sem suporte a nível aceitável. Qual estratégia de risco predomina?

A) Aceitar.  
B) Transferir.  
C) Evitar.  
D) Mitigar.

### Questão 04 (Múltipla Escolha — ISO/IEC 38500, COBIT e ITIL)
Qual associação representa melhor o foco primário das referências na aula?

A) ISO/IEC 38500 orienta decisões da direção; COBIT estrutura objetivos/controles; ITIL orienta práticas de serviço.  
B) ISO/IEC 38500 executa suporte diário; COBIT é sistema operacional; ITIL é auditoria financeira.  
C) São nomes diferentes para a mesma norma e devem substituir uns aos outros.  
D) ITIL define o roadmap estratégico da empresa e COBIT apenas registra chamados.

### Questão 05 (Múltipla Escolha — Resposta a incidentes)
O ERP ficou indisponível e usuários não conseguem trabalhar. Qual ação corresponde diretamente à gestão de incidentes do ITIL?

A) Restaurar o serviço e reduzir o impacto rapidamente, registrando o incidente.  
B) Esperar a análise de causa-raiz terminar antes de tentar recuperar o serviço.  
C) Comprar uma nova ferramenta de maturidade.  
D) Revisar o balanço CAPEX sem atender usuários.

### Questão 06 (Múltipla Escolha — Maturidade)
Uma equipe conclui projetos conforme esforço individual; planejamento e mudanças raramente são registrados. Qual conclusão é mais responsável?

A) É possível declarar formalmente CMMI nível 1 com base nessa frase isolada.  
B) Há indícios de baixa previsibilidade; é preciso delimitar escopo e reunir evidências antes de avaliar maturidade formalmente.  
C) A equipe está em otimização porque consegue lançar software.  
D) O processo é maduro se o produto não apresentar bugs visíveis.

### Questão 07 (Múltipla Escolha — Verificação e validação)
Qual alternativa distingue corretamente os conceitos?

A) Verificação pergunta se atende à necessidade do usuário; validação pergunta se cumpre a especificação.  
B) Verificação confere o produto contra especificações; validação confirma que atende à necessidade real.  
C) São sinônimos de teste unitário.  
D) Validação ocorre somente após retirar o sistema de uso.

### Questão 08 (Múltipla Escolha — ADKAR)
Uma empresa oferece treinamento sobre nova política de acesso, mas os colaboradores não entendem por que a política mudou e resistem à adoção. Qual etapa precisa ser tratada antes de esperar aplicação consistente?

A) Awareness e Desire.  
B) Apenas Ability.  
C) Apenas Reinforcement.  
D) Nenhuma: Knowledge sempre garante adoção.

### Questão 09 (Correlação — Domínios COBIT)
Associe o domínio à descrição:

| Coluna A | Coluna B |
| :--- | :--- |
| (1) EDM | ( ) Construir, adquirir e implementar |
| (2) APO | ( ) Entregar, servir e suportar |
| (3) BAI | ( ) Avaliar, dirigir e monitorar |
| (4) DSS | ( ) Alinhar, planejar e organizar |

Indique a sequência de cima para baixo.

A) 3 - 4 - 1 - 2  
B) 1 - 2 - 3 - 4  
C) 4 - 3 - 2 - 1  
D) 2 - 1 - 4 - 3

### Questão 10 (Correlação — PDCA)
Associe cada etapa à pergunta/ação:

| Coluna A | Coluna B |
| :--- | :--- |
| (1) Plan | ( ) Comparar resultados com metas e evidências |
| (2) Do | ( ) Corrigir desvios e atualizar plano/controles |
| (3) Check | ( ) Definir objetivos, prioridades e indicadores |
| (4) Act | ( ) Executar políticas, ações e roadmap |

A) 3 - 4 - 1 - 2  
B) 1 - 2 - 3 - 4  
C) 4 - 3 - 2 - 1  
D) 2 - 1 - 4 - 3

### Questão 11 (Discursiva — Priorização do PDGTI)
Uma empresa tem publicações sem teste, falhas recorrentes e pouco orçamento. Explique como relacionaria diagnóstico, risco, framework/prática, ação, KPI e roadmap em ondas. Inclua como provar que houve melhoria e por que não é adequado adotar todos os frameworks de uma vez.

### Questão 12 (Discursiva — Maturidade e qualidade)
Um sistema de vendas é liberado com frequência, mas causa falhas em pagamento e lentidão durante promoções. Explique a diferença entre qualidade do processo e do produto; proponha evidências e critérios de qualidade; descreva o papel de um fluxo de mudança e de CMMI ou MR-MPS-SW sem declarar nível formal sem avaliação.

---

## 5. Gabarito Comentado e Padrão de Resposta


**01. B.** KPI precisa acompanhar objetivo relevante. Baseline de 4 horas descreve a situação inicial; meta, prazo, responsável, fonte e frequência tornam possível comparar e agir.

**02. A.** A descrição deve ser um cenário de risco, não apenas um rótulo. Identifique ativo, ameaça, vulnerabilidade, consequência; então estime, priorize e decida resposta com responsável.

**03. C.** Descontinuar a atividade/tecnologia que gera o risco corresponde a evitar. Mitigar reduziria probabilidade/impacto; aceitar conviveria com risco residual; transferir compartilharia parte do impacto.

**04. A.** A aula diferencia a orientação decisória da ISO/IEC 38500, os objetivos/controles COBIT e as práticas de serviço ITIL. Podem se complementar.

**05. A.** Gestão de incidentes prioriza restaurar o serviço e reduzir impacto. Análise de causa pode ocorrer para prevenir repetição, mas é questão relacionada, não pré-condição para recuperação.

**06. B.** Um relato sugere hipótese de capacidade baixa, mas avaliação formal exige escopo, critérios do modelo e evidências. Maturidade não se deduz de uma observação única nem de ausência de reclamação.

**07. B.** Verificação compara com especificação; validação pergunta se o produto resolve a necessidade real.

**08. A.** Awareness (entender a necessidade) e Desire (querer participar) não são substituídos por treinamento. Knowledge é apenas uma etapa do ADKAR.

**09. A.** BAI, DSS, EDM, APO: sequência 3-4-1-2. BAI constrói/implementa; DSS entrega/suporta; EDM avalia/dirige/monitora; APO alinha/planeja/organiza.

**10. A.** Check compara resultado; Act corrige; Plan define objetivo; Do executa: 3-4-1-2.

**11. Padrão de resposta:** ligue evidências do diagnóstico (publicações sem teste e falhas) a cenário de risco (mudança não controlada pode interromper serviço/perda de venda), estime impacto/probabilidade e priorize. Selecione controles/práticas proporcionais, por exemplo gestão de mudanças/incidentes do ITIL e objetivos de mudança/risco pertinentes no COBIT, com direção e acompanhamento pela governança. Defina ação, responsável, prazo, ambiente de teste e plano de retorno. Levante baseline de falhas relacionadas a mudanças/indisponibilidade e escolha meta, frequência e dono do KPI. Roadmap em ondas começa por riscos urgentes e quick wins, depois estrutura processos e então otimiza. Evite aplicar tudo de uma vez porque a equipe pode não ter capacidade; escolha o que responde às dores e revise resultados antes de expandir.

**12. Padrão de resposta:** processo é como o trabalho é repetido, atribuído e controlado; produto é o sistema e sua qualidade no uso. Investigue requisitos, registros de mudança, aprovações, homologação, testes, defeitos e feedback. Defina critérios verificáveis de adequação funcional (pagamento correto), confiabilidade (recuperação), desempenho (tempo de resposta em carga combinada) e segurança, conforme relevância. Controle de mudança registra, avalia impacto, testa, aprova proporcionalmente, implanta e prevê retorno. CMMI ou MR-MPS-SW pode orientar capacidades e melhoria; sem escopo/evidências e avaliação conforme o modelo, não se deve afirmar nível formal nem equivalência entre modelos.

---

## 6. Dicas Estratégicas para a Prova

1. **Use a cadeia cenário → risco/objetivo → decisão → responsável → indicador → revisão.** Isso mostra raciocínio de governança.
2. **Não confunda métrica, indicador e KPI.** KPI é prioritário, contextualizado e ligado a meta/decisão.
3. **Em risco, descreva causa e consequência.** Depois classifique probabilidade/impacto e justifique resposta.
4. **Distinga as referências:** ISO/IEC 38500 orienta a direção; COBIT organiza objetivos e controles; ITIL orienta gestão/melhoria de serviços.
5. **Não confunda processo com produto:** qualidade do processo ajuda previsibilidade; qualidade do produto precisa de critérios e evidências de uso.
6. **Diferencie verificação de validação:** especificação versus necessidade real.
7. **Maturidade não é ausência de defeitos.** Exige escopo, prática repetível e evidência; CMMI e MPS-SW não têm equivalência automática.
8. **ADKAR descreve mudança das pessoas:** treinamento sozinho não gera desejo, habilidade ou sustentação.
9. **Justifique as ondas do roadmap:** urgência e quick wins primeiro; processos e otimização depois, conforme capacidade.
10. **Use PDCA como ciclo:** planejar, executar, checar dados, agir sobre desvios e reiniciar.
11. **Amarre os capítulos do PDGTI:** diagnóstico precisa justificar objetivos, controles, indicadores e roadmap.
12. **Evite afirmações absolutas:** framework não resolve problema sozinho; meta precisa de baseline; seguro não elimina risco; conformidade exige evidência.

---

## 7. Materiais de Estudo

- [Semana 07 — Gestão de Desempenho em TI e KPIs](aulas/semana_07.md)
- [Semana 10 — Gestão de Riscos, Compliance e Segurança](aulas/semana_10.md)
- [Semana 12 — ISO/IEC 38500, COBIT e ITIL](aulas/semana_12.ipynb)
- [Semana 13 — CMMI, MR-MPS-SW, ISO/IEC 12207 e ISO/IEC 25010](aulas/semana_13.ipynb)
- [Semana 15 — Roadmap, FCS, ADKAR e CAPEX/OPEX](aulas/semana_15.ipynb)
- [Semana 16 — PDGTI integrado e PDCA](aulas/semana_16.md)
- [Plano e escopo da disciplina](README.md)
- [Guia P1 — fundamentos cumulativos de governança e alinhamento](GUIA_ESTUDO_P1.md)

