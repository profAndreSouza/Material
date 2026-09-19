# Guia de Estudos — Prova Teórico-Prática 1 (P1)
## Unidade Curricular: Governança de TI

---

## 1. Informações Gerais da Avaliação

- **Data da Avaliação:** 23/Setembro (Quarta-feira — Semana 08)
- **Peso na Média Docente:** 35% (da nota correspondente aos 55% da UC)
- **Conteúdo Cobrado:** Semanas 01 a 07 (Aulas 01 a 05, Semana PII e Aula 07)
- **Formato da Prova:** Prova escrita individual composta por **12 questões** estritamente teóricas, conceituais e de análise estratégica/corporativa.
- **Tipologia das Questões:**
  - Questões de **Múltipla Escolha** (com cenários organizacionais, dilemas éticos, auditoria SOX e alinhamento estratégico);
  - Questões de **Correlação de Colunas** (associação entre perspectivas do BSC, papéis da Matriz RACI e categorias de investimento em portfólio de TI);
  - Questões **Discursivas Conceituais** (diferenciação estrutural entre Governança e Gestão no modelo COBIT, Teoria da Agência e encadeamento de causa e efeito no IT BSC).
- **Atenção:** **A prova não exige programação de códigos nem memorização de detalhes burocráticos de normas.** O foco total está na compreensão dos fundamentos de governança corporativa e de TI, mecanismos de decisão, prestação de contas, indicadores de desempenho e alinhamento estratégico da tecnologia com os objetivos do negócio.

---

## 2. Mapa Conceitual dos Conteúdos (Semanas 01 a 07)

### Semana 01 — Introdução à Governança de TI, Governança vs. Gestão e Agregação de Valor
- **Definição de Governança de TI (Weill & Ross, 2004):**
  - Especificação dos direitos de decisão e do repositório de responsabilidades para encorajar comportamentos desejáveis no uso da TI.
  - Estrutura de relacionamentos e processos para dirigir e controlar a organização a fim de atingir seus objetivos, agregando valor e equilibrando riscos (Fernandes & Abreu, 2014).
- **A Distinção Fundamental: Governança de TI vs. Gestão de TI (COBIT 2019):**
  - *Governança de TI (Domínio EDM - Evaluate, Direct, Monitor):*
    - Conduzida pelo Conselho de Administração, Alta Diretoria e Comitê Estratégico.
    - Atribuições: **Avaliar** necessidades e estratégias; **Dirigir** prioridades e políticas; **Monitorar** conformidade e desempenho.
    - Pergunta essencial: *"Estamos fazendo as coisas certas para o negócio?"* (Visão de médio e longo prazo).
  - *Gestão de TI (Domínios APO, BAI, DSS, MEA):*
    - Conduzida pelo CIO, Gerentes de TI, Coordenadores e Equipes Técnicas.
    - Atribuições: **Planejar** (APO), **Construir** (BAI), **Executar/Entregar** (DSS) e **Monitorar** (MEA) as atividades operacionais.
    - Pergunta essencial: *"Estamos fazendo as coisas da forma correta, eficiente e dentro do prazo?"* (Visão tática e operacional).
- **Pilares da Agregação de Valor em TI:**
  1. *Alinhamento Estratégico:* A TI viabiliza e alavanca os objetivos estratégicos corporativos.
  2. *Entrega de Valor:* Execução de projetos no prazo, escopo e orçamento gerando os benefícios previstos.
  3. *Gestão de Riscos:* Preservação dos ativos de informação, resiliência operacional e segurança cibernética.
  4. *Gestão de Recursos:* Otimização inteligente dos investimentos em pessoas, aplicações, infraestrutura e dados.
  5. *Medição de Desempenho:* Rastreamento auditável dos resultados da TI com impacto nos resultados do negócio.

### Semana 02 — Governança Corporativa, Sarbanes-Oxley (SOX), Compliance e Ética
- **Governança Corporativa e a Teoria da Agência:**
  - Sistema pelo qual as empresas são dirigidas, monitoradas e incentivadas.
  - *Conflito de Agência:* Separação entre os **Proprietários/Acionistas** (*Principais*, que buscam sustentabilidade de longo prazo) e os **Executivos Gestores** (*Agentes*, que podem priorizar metas e bônus pessoais de curto prazo).
  - A Governança atua como mecanismo formal de controle, incentivo e auditoria para garantir que o Agente atue no interesse do Principal.
- **Os 4 Princípios Universais do IBGC Aplicados à TI:**
  1. *Transparência (Transparency):* Comunicação clara do valor da TI, custos detalhados (FinOps) e relatórios de incidentes.
  2. *Equidade (Fairness):* Tratamento justo de todas as áreas de negócio na priorização de demandas de sistemas, sem preferências políticas.
  3. *Prestação de Contas (Accountability):* Atribuição clara de responsabilidades por sistemas e dados, matrizes RACI e registros auditáveis de log (*audit trail*).
  4. *Responsabilidade Corporativa:* Sustentabilidade financeira, conformidade legal rigorosa, ética, proteção à privacidade (LGPD) e descarte ecológico (*Green IT*).
- **Lei Sarbanes-Oxley (SOX) & Controles Gerais de TI (ITGC):**
  - Promulgada em 2002 nos EUA após fraudes corporativas (Enron, WorldCom) para restaurar a integridade dos balanços contábeis.
  - *Seção 302:* O CEO e o CFO atestam pessoalmente a veracidade das demonstrações financeiras.
  - *Seção 404:* Exigência anual de auditoria e ateste sobre a eficácia dos Controles Internos sobre Relatórios Financeiros (ICFR).
  - *ITGC (IT General Controls):* Como os registros contábeis dependem de sistemas, a TI é o alvo primário da auditoria SOX em 4 pilares:
    1. *Gestão de Acessos Lógicos:* Controle estrito de permissões, segregação de funções (SoD), MFA e desativação imediata de contas desligadas.
    2. *Gestão de Mudanças (Change Management):* Segregação total de ambientes (Dev, Homologação, Produção); desenvolvedores não têm acesso de gravação direta em produção.
    3. *Operações de TI:* Monitoramento de jobs contábeis em batch, rotinas de backup testadas e Plano de Recuperação de Desastres (DRP).
    4. *Desenvolvimento e Aquisição de Sistemas:* Metodologia formal, documentação de requisitos e testes formais de aceitação (UAT).
- **Ética Profissional em TI:** Responsabilidade intransferível do profissional sobre o código e sistemas desenvolvidos (ex.: caso *Dieselgate* da Volkswagen — a alegação de "cumprir ordens" não isenta a cumplicidade em fraudes).

### Semana 03 — Alinhamento Estratégico de TI e Plano Estratégico de TI (PETI)
- **Modelo de Alinhamento Estratégico (SAM - Henderson & Venkatraman):**
  - Quatro quadrantes interdependentes:
    - *Externo / Negócio:* Estratégia de Negócio (escopo, competências e governança).
    - *Externo / TI:* Estratégia de TI (escopo tecnológico, competências sistêmicas).
    - *Interno / Negócio:* Infraestrutura e Processos Organizacionais.
    - *Interno / TI:* Infraestrutura e Processos de TI.
  - *Perspectivas de Alinhamento de Luftman:*
    - *Execução Estratégica:* Estratégia de Negócio direciona a Estratégia de TI, moldando os processos técnicos.
    - *Transformação Tecnológica:* Tecnologias emergentes viabilizam novas estratégias corporativas de mercado.
    - *Potencial Competitivo:* A TI cria diferenciais competitivos pioneiros.
    - *Nível de Serviço:* Foco na excelência operacional da entrega de TI para alavancar os processos internos.
- **Plano Estratégico de TI (PETI) vs. PDGTI:**
  - *PETI:* Foco no planejamento tático e estratégico das soluções de tecnologia (sistemas, arquitetura e infraestrutura) alinhadas ao planejamento empresarial.
  - *PDGTI:* Documento diretivo mais amplo que engloba a governança, políticas corporativas, comitês, alçadas de decisão, matriz de responsabilidade, gestão de riscos e roadmap de maturidade.
- **Matriz SWOT Aplicada à TI:**
  - *Forças (Interno/Positivo):* Equipe técnica qualificada, infraestrutura em nuvem resiliente, processos ágeis consolidados.
  - *Fraquezas (Interno/Negativo):* Ausência de documentação, dependência de pessoas-chave (*key-person risk*), sistemas legados obsoletos sem suporte.
  - *Oportunidades (Externo/Positivo):* Adoção de Inteligência Artificial para automação, consolidação em SaaS, expansão de canais digitais.
  - *Ameaças (Externo/Negativo):* Ataques de Ransomware, aumento do custo cambial de nuvem, exigências regulatórias punitivas da ANPD/LGPD.

### Semana 04 — Balanced Scorecard (BSC) na TI, Portfólio e Tomada de Decisão
- **O IT Balanced Scorecard (IT BSC):**
  - Adaptação da metodologia de Kaplan & Norton pelo ITGI para medir o desempenho da TI através de relações de **Causa e Efeito** em 4 perspectivas:
    1. *Aprendizado e Crescimento (Base):* Capacitação das equipes de TI, retenção de talentos, cultura de inovação e pesquisa.
    2. *Processos Internos (Meio):* Eficiência do ciclo de desenvolvimento, automação de testes, segurança e gerenciamento de incidentes.
    3. *Clientes / Usuários (Impacto):* Satisfação das áreas usuárias, SLAs de atendimento, disponibilidade dos canais digitais.
    4. *Financeira (Topo):* Retorno sobre o Investimento (ROI de TI), redução de custos operacionais (OPEX) e suporte ao crescimento do faturamento.
- **Gestão de Portfólio de TI (Modelo de Weill & Aral):**
  - Categorização dos investimentos de TI em 4 tipos de ativos:
    - *Infraestrutura:* Fundação compartilhada de serviços e tecnologia (redes, nuvem, data center). Baixo risco, retorno indireto na sustentação do negócio.
    - *Transacional:* Automação e processamento em massa de transações repetitivas (ERP, faturamento, folha). Retorno focado em corte e contenção de custos operacionais.
    - *Informacional:* Geração de inteligência, análise e relatórios para suporte à tomada de decisão (Data Warehouses, BI, CRM). Risco moderado, retorno em agilidade e precisão decisória.
    - *Estratégico:* Desenvolvimento de novos produtos, canais digitais e vantagens competitivas exclusivas. Alto risco, alto potencial de diferenciação mercadológica.
- **Mecanismos e Alçadas de Decisão em TI (Weill & Ross):**
  - As 5 decisões críticas de TI que não podem ficar sem definição de direitos decisórios:
    1. *Princípios de TI:* Papel estratégico da tecnologia na corporação.
    2. *Arquitetura de TI:* Padrões tecnológicos e políticas de integração de dados/sistemas.
    3. *Infraestrutura de TI:* Serviços tecnológicos compartilhados centralmente.
    4. *Necessidades de Aplicações de Negócio:* Requisitos e especificação dos softwares necessários.
    5. *Investimento e Priorização:* Alocação de recursos financeiros e ordem de aprovação dos projetos.

### Semana 05 — Gestão de Serviços de TI, Matriz RACI, CAPEX/OPEX e Políticas
- **Conceito de Serviço de TI (ITIL / COBIT):**
  - Meio de co-criação e entrega de valor aos clientes, facilitando resultados esperados sem que estes assumam a propriedade de custos e riscos técnicos específicos.
- **Comitê Estratégico de TI (*IT Steering Committee*):**
  - Colegiado deliberativo de alta liderança (CEO, CFO, Diretores de Negócio e CIO).
  - Reuniões periódicas para aprovar o PDGTI, deliberar prioridades de investimento no portfólio, revisar riscos críticos e resolver impasses entre áreas.
- **A Matriz RACI:**
  - *R - Responsible (Executor):* Quem realiza o trabalho prático.
  - *A - Accountable (Aprovador / Prestador de Contas):* A autoridade única que responde formalmente pelo sucesso ou fracasso perante a organização.
  - *C - Consulted (Consultado):* Especialista ou líder envolvido ouvido antes da ação/decisão.
  - *I - Informed (Informado):* Parte interessada comunicada após a conclusão.
  - **Regra de Ouro do RACI:** Cada processo deve ter **estritamente um único 'A'**. Ter dois 'A's causa disputa de jurisdição e duplicidade; ter zero 'A's resulta em abandono de governança.
- **Modelo Financeiro de Alocação de Recursos:**
  - *CAPEX (Capital Expenditure):* Aquisições de bens de capital imobilizados (servidores físicos, switches, infraestrutura física). Depreciação contábil lenta e alto desembolso financeiro inicial.
  - *OPEX (Operational Expenditure):* Despesas operacionais correntes sob demanda (nuvem IaaS/SaaS, assinaturas, links de dados, suporte gerenciado). Flexibilidade contábil, previsibilidade de fluxo de caixa e agilidade para escalar ou retrair.
- **Políticas Fundamentais de TI:**
  - *Política de Segurança da Informação (PSI):* Autenticação multifator (MFA), senhas fortes, princípio do menor privilégio (*Least Privilege*), classificação de dados.
  - *Política de Uso Aceitável (AUP / BYOD):* Regras de uso de e-mail institucional, internet, teletrabalho e gestão de dispositivos móveis pessoais via MDM com *remote wipe*.
  - *Política de Aquisições e Terceirização:* Homologação prévia obrigatória pela TI para eliminar o *Shadow IT* (contratações ocultas por departamentos de negócio), exigências contratuais de conformidade à LGPD e cláusulas de saída (*exit strategy*).

### Semana 07 — Gestão de Desempenho em TI, KPIs e Métricas do Negócio
- **Fundamento da Medição (Peter Drucker):**
  - *"O que não é medido não pode ser gerido. O que não é gerido é degradado."*
  - A governança transforma impressões emocionais em evidências auditáveis de desempenho.
- **Hierarquia da Informação:**
  - *Dado / Métrica:* Registro bruto do evento (ex.: servidor indisponível por 18 minutos no dia 05).
  - *Indicador:* Agregação de métricas em um contexto (ex.: indisponibilidade total acumulada de 32 minutos no mês).
  - *KPI (Key Performance Indicator):* Indicador-chave conectado diretamente a uma meta estratégica (ex.: Disponibilidade do ERP de 99,93% contra uma meta contratual de 99,90%).
- **Categorias de KPIs:**
  - *KPIs de Alinhamento de Negócio (Foco Executivo):*
    - ROI de TI, Participação na Receita Digital, CSAT/NPS de TI, Time-to-Market de novos recursos.
  - *KPIs Operacionais e Técnicos de TI (Foco em Serviços):*
    - **Disponibilidade / Uptime (%):** Percentual de tempo em que os sistemas permaneceram em operação.
    - **MTTR (Mean Time to Repair):** Tempo médio gasto para recuperar um sistema e restaurar o serviço após uma falha. Quanto menor, melhor.
    - **MTBF (Mean Time Between Failures):** Tempo médio transcorrido entre a recuperação de uma falha e a ocorrência da falha seguinte. Quanto maior, mais estável e confiável é o sistema.
    - **SLA de Resolução (%):** Percentual de chamados do Service Desk resolvidos dentro do prazo acordado.
    - **Densidade de Bugs em Produção:** Número de defeitos por volume de entregas.
- **Metas SMART e Linha de Base (Baseline):**
  - Todo KPI deve ter uma **Linha de Base** (o valor histórico atual antes da intervenção).
  - Metas devem ser **SMART**: Específicas (*Specific*), Mensuráveis (*Measurable*), Atingíveis (*Achievable*), Relevantes (*Relevant*) e Temporais (*Time-bound*).

---

## 3. Glossário de Termos Essenciais

| Termo | Definição Teórica e Prática |
| :--- | :--- |
| **Governança de TI** | Sistema de liderança, estruturas e processos que asseguram que a TI sustente e expanda as estratégias e objetivos da organização (Weill & Ross / COBIT). |
| **Gestão de TI** | Planejamento, construção, execução e monitoramento operacional diário dos sistemas e infraestrutura para alcançar as diretrizes da governança. |
| **Domínio EDM (COBIT)** | *Evaluate, Direct, Monitor*: Domínio de governança responsável por avaliar opções, direcionar prioridades e monitorar a conformidade e os resultados. |
| **Teoria da Agência** | Relação onde os donos do capital (Principais) contratam gestores (Agentes), exigindo governança para mitigar o conflito de interesses entre ambos. |
| **Princípios do IBGC** | Quatro pilares da boa governança corporativa: Transparência, Equidade, Prestação de Contas (*Accountability*) e Responsabilidade Corporativa. |
| **Lei SOX (Sarbanes-Oxley)** | Lei norte-americana que visa coibir fraudes financeiras, exigindo comprovação de controles internos de TI (ITGC) que sustentam relatórios contábeis. |
| **ITGC** | *IT General Controls*: Controles gerais de TI auditados na SOX cobrindo Acessos Lógicos, Gestão de Mudanças, Operações e Desenvolvimento. |
| **SAM** | *Strategic Alignment Model* (Henderson & Venkatraman): Modelo que integra estratégias de negócio e TI com suas respectivas infraestruturas internas. |
| **PETI** | Plano Estratégico de TI: documento formal que define a visão tecnológica, sistemas e projetos necessários para suportar o plano de negócios da empresa. |
| **IT BSC** | Balanced Scorecard de TI: metodologia de medição equilibrada nas 4 perspectivas (Financeira, Clientes, Processos Internos e Aprendizado/Crescimento). |
| **Portfólio de Weill & Aral** | Classificação estratégica dos investimentos em TI em 4 classes de ativos: Infraestrutura, Transacional, Informacional e Estratégico. |
| **Comitê de TI (*Steering Committee*)** | Colegiado executivo sênior que define as diretrizes, aprova orçamentos, prioriza demandas e supervisiona o alinhamento da TI com o negócio. |
| **Matriz RACI** | Ferramenta de mapeamento de responsabilidades que define para cada processo quem é o Executor (R), Aprovador Único (A), Consultado (C) e Informado (I). |
| **CAPEX vs. OPEX** | CAPEX é investimento em bens patrimoniais imobilizados (depreciação); OPEX é despesa corrente operacional contínua sob demanda (nuvem/SaaS). |
| **Shadow IT** | Uso de softwares, serviços em nuvem ou dispositivos nas áreas de negócio sem o conhecimento, homologação ou controle da equipe de TI. |
| **MTTR / MTBF** | MTTR é o tempo médio para reparar uma pane; MTBF é o tempo médio que o sistema funciona sem falhar entre dois incidentes sucessivos. |
| **Baseline (Linha de Base)** | Ponto de partida quantitativo de um indicador antes da implementação de novas melhorias, sem o qual não se afere a eficácia de uma meta. |

---

## 4. Simulado Completo da Prova P1 (12 Questões no Padrão Oficial)

### Questão 01 (Múltipla Escolha — Governança vs. Gestão de TI no COBIT)
Em uma reunião de diretoria de uma corporação financeira, o Diretor de Tecnologia (CIO) apresentou o cronograma de instalação dos novos servidores do data center e a escala de plantão da equipe de suporte aos finais de semana. Em resposta, o Diretor Geral (CEO) interveio apontando que tais tópicos eram de competência da gestão operacional e que o colegiado precisava focar na avaliação de novos investimentos e na aprovação das diretrizes de segurança da informação.  
Considerando a distinção formal entre Governança e Gestão preconizada pelo COBIT 2019, qual alternativa expressa a atribuição precípua e exclusiva da **Governança de TI**?  
A) Implementar pipelines automatizados de Continuous Integration e supervisionar chamados de suporte Nível 1.  
B) Configurar regras de firewall em instâncias de servidores e aplicar correções de patches no sistema operacional.  
C) Avaliar as necessidades das partes interessadas, direcionar as prioridades estratégicas através de políticas e monitorar o desempenho e conformidade (domínio EDM).  
D) Executar rotinas diárias de backup de banco de dados e gerenciar o catálogo de ativos físicos de rede (domínio DSS).  

---

### Questão 02 (Múltipla Escolha — Governança Corporativa e Teoria da Agência)
A Teoria da Agência constitui um dos pilares teóricos mais relevantes para compreender a gênese da Governança Corporativa e sua extensão para a Governança de TI nas organizações contemporâneas.  
Sobre o conflito de agência no ambiente de Tecnologia da Informação, assinale a afirmação correta:  
A) O conflito ocorre porque os fornecedores terceirizados de software (Principais) impõem contratos abusivos aos diretores de TI (Agentes).  
B) O conflito manifesta-se quando gestores executivos de TI (Agentes) priorizam projetos tecnologicamente atrativos ou de interesse particular de curto prazo, em detrimento do retorno sustentável e dos objetivos estratégicos dos acionistas (Principais).  
C) A Teoria da Agência estipula que acionistas e diretores de TI possuem exatamente os mesmos incentivos financeiros, tornando desnecessária a criação de comitês deliberativos.  
D) O conflito de agência restringe-se a empresas estatais, inexistindo em companhias privadas com capital aberto em bolsa de valores.  

---

### Questão 03 (Múltipla Escolha — Lei Sarbanes-Oxley e Controles Gerais de TI - ITGC)
Durante uma auditoria externa de conformidade com a Lei Sarbanes-Oxley (SOX), auditores identificaram que os analistas seniores de desenvolvimento de software de uma grande empresa de varejo possuíam credenciais com permissão de escrita e alteração direta nas tabelas do banco de dados do sistema ERP em ambiente de Produção.  
Qual domínio fundamental dos Controles Gerais de TI (ITGC) foi violado nesse cenário e por qual motivo técnico?  
A) Gestão de Operações de TI, porque a velocidade de processamento dos relatórios batch foi degradada.  
B) Gestão de Mudanças e Segregação de Funções (SoD), porque a ausência de separação rígida entre desenvolvimento e produção abre brechas para fraudes e distorções contábeis indetectáveis.  
C) Política de Green IT, porque manter múltiplos ambientes de software consome energia elétrica excessiva no data center.  
D) Gestão de Contratos de Fornecedores, porque o ERP deveria ter sido desenvolvido integralmente por consultores externos sem vínculo empregatício.  

---

### Questão 04 (Múltipla Escolha — Princípios Universais do IBGC na Prática de TI)
O Instituto Brasileiro de Governança Corporativa (IBGC) estabelece quatro princípios norteadores da governança: Transparência, Equidade, Prestação de Contas (*Accountability*) e Responsabilidade Corporativa.  
Associe a prática operacional ao respectivo princípio do IBGC:  
*"A equipe de TI implementou uma matriz formal de critérios objetivos e auditáveis para ranquear os projetos de sistemas solicitados pelos departamentos, assegurando que o setor de Recursos Humanos e a Diretoria Comercial tenham suas demandas avaliadas sem privilégios ou preferências pessoais."*  
A prática descrita materializa de forma direta o princípio da:  
A) Equidade (*Fairness*).  
B) Responsabilidade Corporativa Socioambiental.  
C) Criptografia Assimétrica de Dados.  
D) Segregação Física de Servidores.  

---

### Questão 05 (Múltipla Escolha — Modelo de Alinhamento Estratégico - SAM)
O Modelo de Alinhamento Estratégico (SAM), formulado por Henderson & Venkatraman, demonstra que o alinhamento da TI com a organização exige a harmonização contínua entre quatro domínios conceituais.  
Nesse contexto, quando a alta administração de uma operadora de telecomunicações decide lançar uma carteira de pagamentos digitais porque identificou que a computação em nuvem e a Inteligência Artificial possibilitam um novo modelo de negócio anteriormente inviável, a organização está vivenciando a perspectiva de:  
A) Nível de Serviço Interno.  
B) Transformação Tecnológica / Potencial Competitivo.  
C) Execução Estratégica Conservadora.  
D) Redução Passiva de Custos Operacionais.  

---

### Questão 06 (Múltipla Escolha — Gestão de Portfólio de TI de Weill & Aral)
De acordo com o modelo de gestão de portfólio de Weill & Aral, os investimentos em tecnologia devem ser categorizados em quatro classes de ativos para equilibrar risco e retorno.  
Considere os três investimentos realizados por uma indústria química:  
1. Implementação de um módulo financeiro e contábil de ERP para automatizar a emissão padronizada de notas fiscais e folha de pagamento.  
2. Implantação de um data lake corporativo acoplado a ferramentas de Business Intelligence (BI) para subsidiar as decisões de preços da diretoria.  
3. Desenvolvimento de um aplicativo proprietário com algoritmos de recomendação customizados para capturar clientes dos concorrentes no mercado B2B.  
As três iniciativas classificam-se, respectivamente, como investimentos:  
A) Transacional, Informacional e Estratégico.  
B) Estratégico, Infraestrutura e Transacional.  
C) Informacional, Transacional e Infraestrutura.  
D) Infraestrutura, Estratégico e Transacional.  

---

### Questão 07 (Múltipla Escolha — Matriz RACI na Governança de Processos)
Na estruturação da governança dos processos de TI de uma empresa de logística, o comitê deliberou sobre a aplicação da Matriz RACI para o processo de "Aprovação de Mudanças Críticas em Ambiente de Produção".  
Segundo a regra mandatória de conformidade da metodologia RACI:  
A) Cada processo pode ter múltiplos "A"s (*Accountable*), de forma que todos os gerentes dividam igualmente a responsabilidade jurídica pelas falhas.  
B) Para cada processo deve haver estritamente um único papel com o atributo "A" (*Accountable*), garantindo clareza inequívoca sobre quem responde pelo resultado perante a alta administração.  
C) O atributo "R" (*Responsible*) deve ser atribuído exclusivamente ao Diretor Executivo (CEO).  
D) O atributo "I" (*Informed*) deve ser restrito aos desenvolvedores de software, que não precisam saber sobre as mudanças concluídas.  

---

### Questão 08 (Múltipla Escolha — Gestão de Desempenho e Indicadores Operacionais)
Um sistema supervisório de despacho logístico operou durante um mês de 30 dias (720 horas teóricas). Ao longo desse período, o sistema sofreu 3 paradas não planejadas devido a falhas de software. A primeira parada durou 30 minutos; a segunda, 45 minutos; e a terceira, 15 minutos. Após cada interrupção, a equipe técnica restabeleceu o sistema com sucesso.  
Com base nesses dados, qual foi o Tempo Médio de Reparo (**MTTR - Mean Time to Repair**) desse sistema no mês avaliado?  
A) 90 minutos.  
B) 45 minutos.  
C) 30 minutos.  
D) 15 minutos.  

---

### Questão 09 (Correlação de Colunas — Perspectivas do IT Balanced Scorecard)
Relacione as 4 perspectivas do **IT Balanced Scorecard (IT BSC)** listadas na **Coluna A** com seus respectivos objetivos estratégicos e métricas representativas na **Coluna B**:

| Coluna A (Perspectiva do IT BSC) | Coluna B (Objetivo Estratégico e Métrica) |
| :--- | :--- |
| ( 1 ) Perspectiva Financeira | ( &nbsp; ) Reduzir o tempo médio de ciclo de desenvolvimento de software (*Time-to-Market*) e a densidade de defeitos em homologação. |
| ( 2 ) Perspectiva do Cliente / Negócio | ( &nbsp; ) Capacitar 90% dos analistas em arquiteturas modernas e reter talentos técnicos estratégicos na organização. |
| ( 3 ) Perspectiva dos Processos Internos | ( &nbsp; ) Maximizar o Retorno sobre o Investimento (ROI de TI) e controlar os gastos correntes com serviços de nuvem (OPEX). |
| ( 4 ) Perspectiva de Aprendizado e Crescimento | ( &nbsp; ) Aumentar a disponibilidade dos serviços de vendas e elevar o índice de satisfação dos usuários internos (CSAT/NPS de TI). |

Assinale a alternativa que apresenta a sequência correta de preenchimento da Coluna B (de cima para baixo):  
A) 3 - 4 - 1 - 2  
B) 2 - 1 - 4 - 3  
C) 3 - 1 - 2 - 4  
D) 4 - 3 - 1 - 2  

---

### Questão 10 (Correlação de Colunas — Alocação de Recursos, Políticas e Conceitos de Governança)
Relacione os conceitos de governança de TI na **Coluna A** com as suas respectivas descrições operacionais na **Coluna B**:

| Coluna A (Conceito) | Coluna B (Aplicação Prática) |
| :--- | :--- |
| ( 1 ) OPEX (*Operational Expenditure*) | ( &nbsp; ) Uso de aplicações, serviços em nuvem ou dispositivos nas áreas de negócio sem o conhecimento ou aprovação formal da TI. |
| ( 2 ) CAPEX (*Capital Expenditure*) | ( &nbsp; ) Aquisição e imobilização de servidores físicos próprios e switches, cuja contabilização sofre depreciação ao longo do tempo. |
| ( 3 ) *Shadow IT* | ( &nbsp; ) Ponto de partida quantitativo histórico utilizado para comparar o resultado alcançado após a execução de melhorias. |
| ( 4 ) *Baseline* (Linha de Base) | ( &nbsp; ) Despesas recorrentes operacionais sob demanda contratadas como serviço (ex.: instâncias de nuvem elástica, SaaS e links de internet). |

Assinale a alternativa que apresenta a sequência correta de preenchimento da Coluna B (de cima para baixo):  
A) 3 - 2 - 4 - 1  
B) 1 - 2 - 3 - 4  
C) 3 - 4 - 2 - 1  
D) 2 - 3 - 1 - 4  

---

### Questão 11 (Discursiva Teórica — Governança vs. Gestão no COBIT e Teoria da Agência)
Uma das transformações mais críticas na gestão corporativa é o reconhecimento de que **Governança de TI** e **Gestão de TI** ocupam esferas organizacionais complementares, porém rigorosamente distintas.  
**Com base nos fundamentos teóricos do COBIT 2019 e da Teoria da Agência:**  
a) Diferencie as atribuições fundamentais da **Governança de TI** das responsabilidades da **Gestão de TI**, indicando os domínios do COBIT pertinentes a cada uma delas e quais instâncias executivas as exercem.  
b) Explique como a atuação independente de um **Comitê Estratégico de TI (*IT Steering Committee*)** auxilia a organização a mitigar o conflito de interesses descrito pela **Teoria da Agência**.  

---

### Questão 12 (Discursiva Teórica — Cadeia de Causa e Efeito no IT BSC e a Regra do RACI)
Para estruturar o Plano Diretor de Governança de TI (PDGTI), uma organização definiu seus objetivos corporativos e desenhou seu modelo de governança e controle de mudanças.  
**Responda fundamentadamente aos itens a seguir:**  
a) Explique a lógica da **cadeia de causa e efeito** que conecta as quatro perspectivas do **IT Balanced Scorecard (IT BSC)**, demonstrando como investimentos na base (*Aprendizado e Crescimento*) culminam em resultados mensuráveis no topo (*Perspectiva Financeira*).  
b) No desenho da **Matriz RACI**, justifique tecnicamente por que cada processo de TI deve possuir **exatamente um único papel atribuído como *Accountable* (A)** e cite um risco concreto decorrente da existência de dois indivíduos designados como aprovadores soberanos para uma mesma atividade.  

---

## 5. Gabarito Comentado e Padrão de Resposta

- **Questão 01 — Alternativa C.**  
  *Comentário Pedagógico:* Segundo o COBIT 2019, a Governança é exercida pelo Conselho e Alta Diretoria sob o domínio EDM (*Evaluate, Direct, Monitor* — Avaliar, Dirigir e Monitorar). As demais alternativas descrevem atividades de Gestão operacional e técnica (domínios APO, BAI e DSS), como suporte técnico, firewalls e backups.

- **Questão 02 — Alternativa B.**  
  *Comentário Pedagógico:* A Teoria da Agência descreve a separação entre a propriedade (Principal/acionistas) e a gestão (Agente/executivos). No contexto de TI, o conflito ocorre quando o gestor busca ganhos de curto prazo ou projetos de prestígio tecnológico que não trazem retorno efetivo aos acionistas, tornando imprescindíveis mecanismos de controle e governança.

- **Questão 03 — Alternativa B.**  
  *Comentário Pedagógico:* Um dos princípios mais severos da auditoria SOX (Controles Gerais de TI / ITGC) é a Segregação de Funções (*Segregation of Duties* - SoD) na Gestão de Mudanças. Desenvolvedores não podem ter acesso de gravação direta ao ambiente de Produção, pois poderiam adulterar lançamentos contábeis ou inserir funcionalidades maliciosas sem rastreamento independente.

- **Questão 04 — Alternativa A.**  
  *Comentário Pedagógico:* O princípio da Equidade (*Fairness*) do IBGC exige tratamento isonômico e imparcial de todas as partes interessadas. Na TI, isso se traduz na adoção de critérios objetivos e transparentes para ranquear projetos do portfólio, sem favorecer departamentos por influência política de seus diretores.

- **Questão 05 — Alternativa B.**  
  *Comentário Pedagógico:* No modelo SAM de Henderson & Venkatraman (e perspectivas de Luftman), quando novas tecnologias disruptivas de mercado (nuvem, IA) são o gatilho para a criação e reformulação do modelo de negócio corporativo, temos a perspectiva de "Transformação Tecnológica / Potencial Competitivo".

- **Questão 06 — Alternativa A.**  
  *Comentário Pedagógico:* No portfólio de Weill & Aral: 1) Automatizar tarefas repetitivas e emissão fiscal através de ERP é investimento **Transacional** (foco em corte de custos); 2) Subsidiar decisões com BI e data lakes é investimento **Informacional**; 3) Criar vantagem mercadológica diferenciada para atrair clientes é investimento **Estratégico**.

- **Questão 07 — Alternativa B.**  
  *Comentário Pedagógico:* A regra central da Matriz RACI estabelece que deve haver rigorosamente apenas um "A" (*Accountable*) por linha de processo. Quem é *Accountable* responde individualmente pelo resultado perante a corporação. Múltiplos aprovadores diluem a responsabilidade, enquanto a ausência de "A" deixa o processo sem dono.

- **Questão 08 — Alternativa C.**  
  *Comentário Pedagógico:* O MTTR (*Mean Time to Repair*) calcula o tempo médio de reparo:  
  $$\text{Tempo Total de Reparo} = 30 + 45 + 15 = 90\text{ minutos}$$  
  $$\text{MTTR} = \frac{\text{Tempo Total de Reparo}}{\text{Número de Falhas}} = \frac{90\text{ minutos}}{3} = 30\text{ minutos}.$$  

- **Questão 09 — Alternativa A (3 - 4 - 1 - 2).**  
  *Comentário Pedagógico:*  
  - Processos Internos (3): time-to-market e densidade de defeitos.  
  - Aprendizado e Crescimento (4): capacitação e retenção de pessoas.  
  - Financeira (1): ROI de TI e controle de custos de nuvem.  
  - Cliente / Negócio (2): satisfação dos usuários e disponibilidade de serviços.

- **Questão 10 — Alternativa A (3 - 2 - 4 - 1).**  
  *Comentário Pedagógico:*  
  - ( 3 ) *Shadow IT:* softwares/serviços contratados pelas áreas sem aval da TI.  
  - ( 2 ) CAPEX: compra imobilizada de hardware que sofre depreciação.  
  - ( 4 ) *Baseline:* ponto de partida histórico para mensuração de metas.  
  - ( 1 ) OPEX: gastos recorrentes sob demanda consumidos como serviço.

- **Questão 11 (Padrão de Resposta Esperado):**  
  *a)* A **Governança de TI** tem como foco garantir que as decisões de TI estejam alinhadas às estratégias do negócio e aos interesses dos acionistas, atuando no horizonte de médio e longo prazo sob a responsabilidade do Conselho de Administração, Alta Diretoria e Comitê de TI; no COBIT, é representada pelo domínio **EDM (Evaluate, Direct, Monitor)**. Já a **Gestão de TI** é responsável por planejar, construir, executar e monitorar as atividades operacionais e técnicas cotidianas (curto e médio prazo), sendo conduzida pelo CIO, gerentes e coordenadores técnicos através dos domínios **APO, BAI, DSS e MEA**.  
  *b)* O **Comitê Estratégico de TI** reúne a alta administração (CEO, CFO, diretores de negócio e CIO) de forma colegiada e independente. Ele mitiga o conflito de agência ao estabelecer prioridades de investimento baseadas em critérios técnicos e de retorno financeiro corporativo, impedindo que executivos individuais (Agentes) aprovem projetos particulares ou aloquem verbas em ferramentas supérfluas que não maximizem o valor sustentável para a corporação e seus acionistas (Principais).

- **Questão 12 (Padrão de Resposta Esperado):**  
  *a)* A cadeia de causa e efeito do IT BSC estabelece que o aprimoramento da base (**Aprendizado e Crescimento**, através da capacitação da equipe e novas tecnologias) capacita os profissionais a otimizarem os fluxos operacionais de desenvolvimento e sustentação (**Processos Internos**); processos bem estruturados resultam em sistemas mais estáveis, menor índice de falhas e melhor atendimento às áreas usuárias (**Clientes / Negócio**); e essa excelência de serviço impulsiona diretamente o faturamento digital, reduz perdas operacionais e otimiza o ROI (**Perspectiva Financeira**).  
  *b)* Deve existir **exatamente um único "A" (*Accountable*)** para assegurar a prestação de contas soberana (*accountability*): se um processo falhar, há clareza de quem responde institucionalmente pelo resultado. Caso haja dois "A"s designados para a mesma atividade (como a aprovação de uma mudança em produção), ocorrem riscos graves como **paralisia decisória** (quando os gestores divergem em opiniões técnicas), **disputas políticas de jurisdição** ou o chamado **efeito de dispersão de responsabilidade** (onde nenhum dos dois assume a culpa em caso de incidente grave, alegando que a decisão cabia ao outro).

---

## 6. Dicas Estratégicas para o Dia da Prova

1. **Governança $\neq$ Gestão:** Se a questão falar em avaliar, direcionar, criar políticas, aprovar orçamento e prestar contas aos acionistas $\rightarrow$ **Governança (EDM)**. Se falar em configurar, instalar, codificar, manter, criar chamados e monitorar servidores $\rightarrow$ **Gestão (APO / BAI / DSS / MEA)**.
2. **A regra de ouro da Matriz RACI:** Na prova, lembre-se sempre de que cada processo deve conter **apenas um único 'A'**. É a pegadinha clássica em provas de governança.
3. **Auditoria SOX & ITGC:** Lembre-se dos pilares: nenhum desenvolvedor mexe em produção (Gestão de Mudanças e Segregação de Funções - SoD); acessos revogados imediatamente no desligamento (Gestão de Acessos).
4. **Cálculo de MTTR e MTBF:** O MTTR mede o tempo em que o sistema esteve *sendo reparado* dividido pelo número de falhas. O MTBF mede o tempo médio que o sistema permaneceu *operacional e saudável* entre os incidentes.
5. **Portfólio de Weill & Aral:** ERP/Folha = *Transacional*; BI/Analytics = *Informacional*; App inovador/Novo modelo de mercado = *Estratégico*; Redes/Data Center = *Infraestrutura*.
