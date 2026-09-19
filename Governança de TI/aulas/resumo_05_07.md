# Resumo Executivo e Guia Prático: Aulas 05 e 07
**Unidade Curricular:** Governança de Tecnologia da Informação  
**Foco:** Aplicação Prática no Plano Diretor de Governança de TI (PDGTI) — Capítulos 4 e 5  
**Documento de Apoio:** Entregas Parciais 1 e 2

---

## 1. Contextualização Geral no Ciclo do PDGTI

A governança corporativa de TI estabelece mecanismos de liderança, estruturas organizacionais e processos para assegurar que a TI sustente e expanda as estratégias do negócio. No desenvolvimento do PDGTI:

- **A Aula 05 (Capítulo 4 / Entrega Parcial 1)** estabelece a **Estrutura Decisória e Regulatória**: quem decide (Comitê), quem executa e responde (Matriz RACI), o modelo financeiro de alocação de recursos (CAPEX vs. OPEX) e os limites operacionais mandatórios (Políticas de Segurança, Uso Aceitável e Compras).
- **A Aula 07 (Capítulo 5 / Entrega Parcial 2)** estabelece a **Gestão de Desempenho e Medição**: como aferir se a estratégia traçada está sendo cumprida por meio de indicadores quantitativos (KPIs Estratégicos do Negócio e KPIs Técnicos Operacionais), definindo linhas de base, metas SMART e instrumentação de telemetria.

---

## 2. Aula 05 — Gestão de Serviços, Estrutura Decisória e Políticas (Capítulo 4 do PDGTI)

### 2.1. Conceito Técnico de Serviço de TI
Sob as melhores práticas (ITIL v4 e COBIT 2019), o negócio não contrata nem adquire ativos isolados (servidores, redes ou bancos de dados). O negócio consome **Serviços de TI**, conceituados como:
$$\text{Serviço de TI} = \text{Meio de co-criação e entrega de valor aos clientes, facilitando resultados esperados sem que estes assumam custos e riscos específicos.}$$

*Exemplo Prático de Aplicação:* O setor financeiro não gerencia o cluster de banco de dados ou a replicação de storage; consome o "Serviço de Processamento de Pagamentos e Faturamento", cujo SLA exige disponibilidade integral no fechamento contábil.

---

### 2.2. Comitê Estratégico de TI (*IT Steering Committee*)
Instância máxima de governança e alinhamento entre as estratégias de negócio e as iniciativas tecnológicas. Não possui viés operacional de suporte, mas colegiado e deliberativo.

#### Especificação para o Trabalho Prático (PDGTI - Seção 4.1):
1. **Composição Obrigatória:**
   - **Liderança Executiva:** Diretor Geral / CEO (Presidente do Comitê).
   - **Gestão Financeira:** CFO / Diretor Financeiro (Controle orçamentário e viabilidade).
   - **Operações / Negócio:** Diretores das Unidades de Negócio (ex.: Comercial, Operações, Logística).
   - **Liderança Tecnológica:** CIO / Gerente Executivo de TI (Apresentador técnico e executivo).
   - **Governança e Risco:** Encarregado de Proteção de Dados (DPO) / Auditor Interno.
2. **Rito e Frequência:** Reunião ordinária mensal (duração de 90 minutos) e extraordinária em caso de incidentes de risco severo (P1).
3. **Pauta Padrão:**
   - Status do Portfólio de Projetos Estratégicos (Avanço físico-financeiro).
   - Apuração dos KPIs de Negócio e SLAs Críticos do mês anterior.
   - Avaliação de Riscos Emergentes e Incidentes de Segurança.
   - Aprovação de Mudanças de Escopo e Realocação Orçamentária acima do limite gerencial.

---

### 2.3. Matriz de Responsabilidades (RACI)
A matriz RACI remove a ambiguidade operacional e define com precisão a cadeia de prestação de contas dos processos de TI.

- **R - Responsible (Executor):** Papel que realiza operacionalmente a atividade.
- **A - Accountable (Autoridade Única / Aprovador):** Indivíduo soberano que responde pelo resultado (sucesso ou falha) da atividade perante a diretoria.
- **C - Consulted (Consultado):** Especialista ou líder de área ouvido bilateralmente antes da tomada de decisão.
- **I - Informed (Informado):** Stakeholder notificado unidirecionalmente após a conclusão da tarefa.

> **Regra Mandatória de Conformidade:** Cada processo/atividade deve possuir **estritamente um único papel "A"**. Dois "A"s geram duplicidade e conflito de jurisdição; zero "A"s gera abandono de governança.

#### Exemplo Prático Aplicado ao Trabalho (PDGTI - Seção 4.2):
Mapeamento dos 6 processos críticos obrigatórios:

| ID | Processo Crítico de TI | Comitê de TI | CIO / Gerente TI | Analista Dev / Infra | DPO / Auditoria | Gestor da Área Usuária |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|
| **PR-01** | Aprovação do Orçamento e PDGTI | **A** | **R** | I | C | C |
| **PR-02** | Gestão de Mudanças em Produção (CAB) | I | **A** | **R** | C | C |
| **PR-03** | Concessão e Revogação de Acessos Críticos | I | C | **R** | C | **A** |
| **PR-04** | Resposta a Incidentes de Segurança / Vazamentos | I | **A** | **R** | C | I |
| **PR-05** | Homologação de Fornecedores de Software/Nuvem | C | **A** | C | C | I |
| **PR-06** | Teste de Restauração de Backup e DRP | I | **A** | **R** | C | I |

---

### 2.4. Alocação de Recursos Financeiros: CAPEX vs. OPEX
O dimensionamento orçamentário do PDGTI deve classificar os dispêndios conforme a natureza contábil:

- **CAPEX (Capital Expenditure):** Investimento em bens de capital e infraestrutura própria imobilizada (aquisição física de servidores, switches, licenças perpétuas, obras de data center). Depreciação contábil ao longo dos anos.
- **OPEX (Operational Expenditure):** Despesas operacionais correntes recorrentes (IaaS em AWS/Azure, SaaS Microsoft 365/Salesforce, contratos de suporte 24x7, links de dados redundantes). Lançamento direto como despesa no exercício fiscal, conferindo maior flexibilidade tributária e escalabilidade sob demanda.

*Decisão recomendada para o PDGTI:* Justificar o modelo híbrido ou "Cloud-First", reduzindo CAPEX inicial e alocando recursos em OPEX para maior previsibilidade de fluxo de caixa e agilidade.

---

### 2.5. Políticas Fundamentais de TI (PDGTI - Seção 4.4)
Minutas técnicas normativas essenciais:

1. **Política de Segurança da Informação (PSI):**
   - Obrigatoriedade de Autenticação Multifator (MFA) em todos os acessos corporativos e remotos.
   - Padrão mínimo de senhas: 14 caracteres, complexidade alfanumérica com símbolos, validade de 90 dias e bloqueio após 5 tentativas consecutivas.
   - Princípio do Menor Privilégio (*Least Privilege*): concessão de acesso estritamente restrita à função contratual.
2. **Política de Uso Aceitável de Ativos (AUP / BYOD):**
   - Vedação expressa do uso de e-mails institucionais para cadastros de natureza pessoal.
   - Termo de adesão para uso de dispositivos móveis pessoais (BYOD) condicionado à instalação de agente MDM (*Mobile Device Management*) com partição corporativa criptografada e capacidade de *remote wipe*.
3. **Política de Aquisição e Terceirização de TI:**
   - Exigência de homologação técnica prévia pela equipe de TI antes de qualquer contratação de software pelas áreas de negócio (combate ao *Shadow IT*).
   - Todo contrato com fornecedor de computação em nuvem deve prever cláusula mandatória de conformidade à LGPD (Lei nº 13.709/2018), SLA mínimo de 99,5% e plano de migração reversa (*exit strategy*).

---

## 3. Aula 07 — Gestão de Desempenho em TI, KPIs e Métricas (Capítulo 5 do PDGTI)

### 3.1. Fundamentação e Hierarquia da Informação
A governança de TI substitui percepções subjetivas por evidências auditáveis baseadas na máxima de Drucker: *"O que não é medido não pode ser gerido"*.

A pirâmide de informação opera em quatro níveis:
1. **Dado Bruto / Telemetria:** Log bruto de sistema (`2026-09-18 14:02:11 [CRITICAL] DB Connection Timeout`).
2. **Métrica Operacional:** Quantificação direta (`Downtime acumulado no mês = 26 minutos`).
3. **Indicador de Processo:** Métrica calculada e comparada a limites operacionais (`Disponibilidade apurada = 99,94%`).
4. **Key Performance Indicator (KPI):** Medida crítica conectada aos objetivos estratégicos do negócio, orientando intervenções do Comitê de TI.

---

### 3.2. Fórmulas Técnicas dos KPIs Essenciais de TI

#### A. Disponibilidade de Serviços Críticos ($A$):
$$A = \left( \frac{\text{Tempo Total Programado} - \text{Tempo de Parada Não Planejada}}{\text{Tempo Total Programado}} \right) \times 100$$
*Referência Técnica:* Em regime 24x7 mensal (720 horas ou 43.200 minutos), um SLA de 99,9% ("três noves") admite no máximo 43,2 minutos de indisponibilidade no mês.

#### B. MTTR (Mean Time to Repair / Tempo Médio de Reparo):
Mede a eficiência e agilidade da equipe na restauração de um serviço interrompido:
$$\text{MTTR} = \frac{\sum \text{Tempo Total Gasto em Reparos}}{\text{Número Total de Incidentes no Período}}$$

#### C. MTBF (Mean Time Between Failures / Tempo Médio Entre Falhas):
Mede a confiabilidade, resiliência e estabilidade da infraestrutura/software:
$$\text{MTBF} = \frac{\text{Tempo Total de Operação}}{\text{Número de Falhas Ocorridas no Período}}$$

#### D. Densidade de Defeitos em Produção ($DD$):
$$\text{DD} = \frac{\text{Quantidade de Bugs Críticos Identificados em Produção}}{\text{Tamanho do Release (KLOC ou Pontos de Função)}}$$

#### E. Retorno Sobre o Investimento em TI (ROI):
$$\text{ROI} = \left( \frac{\text{Ganho Financeiro / Redução de Custos Obtida} - \text{Custo do Projeto de TI}}{\text{Custo do Projeto de TI}} \right) \times 100$$

---

### 3.3. Configuração de Metas SMART e Linha de Base (Baseline)
Todo indicador proposto no PDGTI deve possuir:
- **Linha de Base (Baseline):** Medição atual histórica antes da implantação da melhoria (ex.: MTTR histórico de 180 minutos).
- **Meta SMART:**
  - **S (Específica):** Reduzir o tempo de indisponibilidade em incidentes graves do ERP.
  - **M (Mensurável):** De 180 minutos para 30 minutos.
  - **A (Atingível):** Viabilizada pela automação de failover de banco e contratação de suporte N3.
  - **R (Relevante):** Evita perdas estimadas em R$ 15.000 por hora de faturamento retido.
  - **T (Temporal):** Atingir a marca no encerramento do 2º trimestre de implantação do PDGTI.

---

### 3.4. Exemplo Prático Aplicado ao Trabalho: Tabelas Parametrizadas (Capítulo 5)

#### Tabela 5.1 — KPIs Estratégicos de Alinhamento com o Negócio
| Código | Nome do KPI | Objetivo de Negócio / Alinhamento BSC | Fórmula / Unidade | Baseline | Meta SMART | Periodicidade | Dono (Accountable) |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---:|
| **KPI-EST-01** | Participação da Receita Digital | Alavancar vendas por canais automatizados | $\frac{\text{Vendas E-commerce}}{\text{Vendas Totais}} \times 100$ (%) | 22% | 45% até Dez/2027 | Mensal | Diretor Comercial & CIO |
| **KPI-EST-02** | CSAT de Tecnologia da Informação | Aumentar a satisfação dos colaboradores | Média ponderada da pesquisa de satisfação (1 a 5) | 3,1 | $\ge 4,5$ contínuo | Trimestral | Gestor de Service Desk |
| **KPI-EST-03** | Time-to-Market de Novos Produtos | Acelerar entrega de valor ao mercado | Dias corridos da aprovação do requisito ao deploy | 95 dias | $\le 21$ dias (Metodologia Ágil) | Semestral | Head de Engenharia de Software |
| **KPI-EST-04** | Aderência Orçamentária de TI | Controle de OPEX/CAPEX corporativo | $\left( \frac{|\text{Realizado} - \text{Orçado}|}{\text{Orçado}} \right) \times 100$ (%) | 18% | $\le 5\%$ de desvio | Mensal | CIO / Diretor Financeiro |

#### Tabela 5.2 — KPIs Operacionais e Técnicos de TI
| Código | Nome do KPI | Processo / Domínio | Fórmula / Unidade | Baseline | Meta SMART | Periodicidade | Ferramenta de Coleta |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---:|
| **KPI-OP-01** | Uptime do ERP e Banco de Produção | Infraestrutura / Disponibilidade | % de operação em regime 24x7 | 98,2% | $\ge 99,9\%$ | Mensal | Zabbix / Datadog |
| **KPI-OP-02** | MTTR de Incidentes Críticos (P1) | Suporte e Operações | Média de horas para resolução | 4,2 horas | $\le 45$ minutos | Mensal | Jira Service Management |
| **KPI-OP-03** | MTBF da Infraestrutura Core | Confiabilidade de Sistemas | Horas operacionais entre quedas | 120 horas | $\ge 720$ horas | Mensal | Prometheus / Grafana |
| **KPI-OP-04** | Cumprimento de SLA do Service Desk | Atendimento ao Usuário | % chamados atendidos no prazo | 74% | $\ge 95\%$ | Mensal | ServiceNow / Jira SM |
| **KPI-OP-05** | Taxa de Sucesso em Testes de Restore | Continuidade e DRP | $\frac{\text{Restores Bem-Sucedidos}}{\text{Testes Realizados}} \times 100$ | 80% | 100% de integridade | Trimestral | Script automatizado Veeam/AWS |

---

### 3.5. Arquitetura de Coleta e Layout do Dashboard Executivo (PDGTI - Seções 5.3 e 5.4)

#### Arquitetura de Coleta Automatizada:
Para evitar dispêndio de esforço braçal e falsificação de dados, a coleta baseia-se em três pilares integrados via API:
1. **Telemetria de Infraestrutura & APM:** Coletores Zabbix e Datadog reportam tempos de resposta e paradas diretamente a um banco de métricas (Prometheus).
2. **ITSM & Service Desk:** Jira Service Management / GLPI gera métricas automáticas de MTTR, MTTA (tempo de primeiro atendimento) e estouro de SLA.
3. **Consolidação em BI:** Pipeline automatizado extrai as métricas via REST API e alimenta painéis no Metabase / Power BI.

#### Layout Textual do Dashboard Executivo (Painel Mensal do Comitê de TI):
```text
+==================================================================================================+
|                       PAINEL EXECUTIVO DE GOVERNANÇA DE TI - MÊS DE REFERÊNCIA                   |
+==================================================================================================+
| [ INDICADORES ESTRATÉGICOS DE NEGÓCIO ]                                                          |
| 1. Receita Digital: 43,2% (Meta: 45,0%)               --> [AMARELO]  Desvio: -1,8 p.p.           |
| 2. CSAT Usuários Internos: 4,7 / 5,0 (Meta: >= 4,5)   --> [VERDE]    Superou em +0,2             |
| 3. Aderência Orçamentária: 3,4% (Meta: <= 5,0%)       --> [VERDE]    Dentro do limite            |
+--------------------------------------------------------------------------------------------------+
| [ SAÚDE OPERACIONAL E DISPONIBILIDADE ]                                                          |
| 1. Uptime ERP & Checkout: 99,94% (Meta: 99,90%)       --> [VERDE]    Indisponibilidade: 26 min   |
| 2. MTTR Incidentes P1: 38 min (Meta: <= 45 min)       --> [VERDE]    Eficiência de contenção     |
| 3. SLA Resolução Geral: 89,1% (Meta: >= 95,0%)        --> [VERMELHO] Gargalo na fila N2          |
+--------------------------------------------------------------------------------------------------+
| [ GESTÃO DE RISCO, DRP & CONFORMIDADE ]                                                          |
| 1. Testes de Backup / Restore executados: 100% OK     --> [VERDE]    RPO: 15 min / RTO: 1 hora   |
| 2. Incidentes de Segurança / Violações: 0             --> [VERDE]    100% acessos com MFA        |
+==================================================================================================+
| [ PLANO DE AÇÃO IMEDIATO - DESVIOS APONTADOS ]                                                   |
| - Gargalo no SLA (Vermelho): Realocação de 2 analistas de sustentação para a fila N2 e revisão  |
|   dos artigos da Base de Conhecimento para elevar resolução em Primeiro Nível (FCR).            |
+==================================================================================================+
```

---

## 4. Roteiro Passo a Passo de Aplicação no Trabalho Prático

Para consolidar as entregas do PDGTI com nota máxima, siga a seguinte estrutura de montagem:

1. **No Capítulo 4 (Estrutura de Governança, Matriz RACI e Políticas):**
   - Adaptar a composição do Comitê de TI à realidade da empresa escolhida pelo grupo.
   - Montar a Matriz RACI com os 6 processos obrigatórios, garantindo rigorosamente **apenas uma letra 'A' por linha**.
   - Redigir as cláusulas essenciais da PSI (senhas, acessos e incidentes) e da Política de Compras de TI.
2. **No Capítulo 5 (Gestão de Desempenho e Indicadores):**
   - Transcrever as Tabelas 5.1 e 5.2 preenchendo a linha de base e metas alinhadas ao contexto da organização.
   - Definir os responsáveis técnicos e executivos para cada indicador.
   - Descrever as ferramentas que farão a apuração dos dados (ITSM e Monitoramento).
   - Incluir o diagrama ou wireframe do Dashboard Executivo com os limiares de tolerância (Semáforo Verde, Amarelo e Vermelho).
