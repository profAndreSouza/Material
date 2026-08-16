# Semana 07 - Gestão de Desempenho em TI, KPIs e Métricas do Negócio

**Unidade Curricular:** Governança de TI  
**Carga Horária:** 2 aulas (100 min)  
**Datas de Referência:** 16/Set (Quarta) e 18/Set (Sexta)  
**Modalidade:** Exposição Dialogada & Desenvolvimento do Capítulo 5 do PDGTI

---

## 🎯 Objetivos de Aprendizagem

- Entender o papel da **Gestão de Desempenho (Performance Management)** no ciclo de vida da Governança de TI.
- Diferenciar com precisão os conceitos de **Métricas**, **Indicadores** e **Key Performance Indicators (KPIs)**.
- Estabelecer **KPIs de Alinhamento do Negócio** (impacto estratégico) e **KPIs Operacionais de TI** (eficiência técnica).
- Definir **Linha de Base (Baseline)**, **Metas SMART**, frequência de apuração e donos de indicadores.
- Desenvolver o **Capítulo 5 do PDGTI (Gestão de Desempenho e Indicadores)**.

---

## 📖 Fundamentação Teórica

### 1. Por que Medir o Desempenho da TI?
A famosa frase de Peter Drucker resume a necessidade da medição de desempenho:
> *"O que não é medido não pode ser gerido. O que não é gerido é degradado."*

Sem um sistema formal de medição, a percepção do valor da TI pela diretoria executiva torna-se puramente subjetiva. Quando um sistema cai por 10 minutos, a sensação pode ser de "a TI nunca funciona", a menos que haja métricas comprovando um *uptime* de 99,9% no semestre.

### 2. Hierarquia da Medição: Dado vs. Métrica vs. KPI

```text
  KPI (Key Performance Indicator)   ---> "Disponibilidade do ERP de Vendas no Mês: 99,95%" (Meta: 99,90%)
        ▲
        │ (contexto e meta)
  INDICADOR                         ---> "Tempo total de indisponibilidade no mês: 22 minutos"
        ▲
        │ (agregação e cálculo)
  MÉTRICA / DADO                    ---> "Log: Servidor caiu às 14:02:10 e retornou às 14:24:10"
```

### 3. Categorias de KPIs na Governança de TI

#### A. KPIs de Alinhamento de Negócio (Perspectiva Executiva)
Mede a contribuição direta da tecnologia nos resultados financeiros e operacionais do negócio:
- **ROI de TI (Return on Investment):** Retorno financeiro obtido pelos projetos de tecnologia sobre o capital investido.
- **Participação da TI na Receita Digital:** Porcentagem das vendas totais realizadas via canais digitais mantidos pela TI.
- **Satisfação dos Usuários Internos (CSAT / NPS de TI):** Nível de aprovação dos colaboradores com o suporte técnico e sistemas.
- **Time-to-Market de Novos Produtos:** Tempo transcorrido desde a concepção de uma ideia de negócio até seu lançamento em produção pela TI.

#### B. KPIs Operacionais e de Serviços de TI (Perspectiva Técnica)
Mede a saúde técnica, disponibilidade e velocidade da infraestrutura e equipes de desenvolvimento:
- **Disponibilidade / Uptime (%):** Porcentagem de tempo em que os sistemas críticos permaneceram operacionais no período.
- **MTTR (Mean Time to Repair):** Tempo médio necessário para resolver um incidente após sua ocorrência.
- **MTBF (Mean Time Between Failures):** Tempo médio de operação entre duas falhas consecutivas em um sistema.
- **SLA de Atendimento (%):** Porcentagem de chamados do Service Desk resolvidos dentro do prazo acordado.
- **Densidade de Bugs em Produção:** Número de defeitos críticos encontrados por cada 1.000 linhas de código implantadas.

### 4. Metas SMART e Linha de Base (Baseline)
Todo KPI deve ser configurado de forma estruturada:
- **Linha de Base (Baseline):** A situação atual medida antes da melhoria (ex: MTTR atual de 4 horas).
- **Meta SMART:** Específica (*Specific*), Mensurável (*Measurable*), Atingível (*Achievable*), Relevante (*Relevant*) e Temporal (*Time-bound*).
  - *Exemplo de Meta SMART:* "Reduzir o MTTR de incidentes críticos de 4 horas para 45 minutos até o final do 4º trimestre."

---

## 🏢 Estudo de Caso / Exemplo Prático

### Dashboard Executivo em uma Empresa de Logística
- **Indicador Operacional:** A equipe de suporte mede a taxa de chamados fechados por dia (métrica interna útil).
- **KPI Executivo:** A diretoria acompanha o **Tempo Médio de Liberação de Caminhões no Portão (GATE)**, que depende do sistema de leitura de placas de TI.
- **Alinhamento:** A TI ajustou o SLA do sistema do GATE para criticidade máxima (MTTR < 15 min), pois cada minuto de parada travava a fila de caminhões na rodovia, gerando multas contratuais.

---

## 🛠️ Oficina Prática / Aplicação no PDGTI

Nesta semana, os grupos desenvolverão o **Capítulo 5 do PDGTI (Gestão de Desempenho e Indicadores)**.

### Roteiro de Desenvolvimento do Capítulo 5:
- [ ] **5.1 Tabela de KPIs do Negócio:** Definir no mínimo 3 KPIs de impacto corporativo com baseline, meta, responsável e periodicidade.
- [ ] **5.2 Tabela de KPIs Operacionais de TI:** Definir no mínimo 4 KPIs técnicos (disponibilidade, MTTR, SLA, backup) devidamente parametrizados.
- [ ] **5.3 Mecanismo de Coleta e Apuração:** Descrever como os dados serão coletados sem sobrecarregar a equipe (ex: ferramentas de monitoramento Zabbix, Datadog, Jira Service Management).
- [ ] **5.4 Layout do Dashboard Executivo:** Rascunho ou mock-up visual do painel de controle a ser apresentado mensalmente ao Comitê de TI.

---

## ❓ Questões para Fixação e Discussão

1. Por que apresentar apenas métricas operacionais técnicas (como utilização de CPU de servidores) para o CEO pode gerar a impressão de que a TI não entende o negócio?
2. Explique a diferença matemática e prática entre o MTTR (Tempo Médio de Reparo) e o MTBF (Tempo Médio Entre Falhas).
3. O que é uma Linha de Base (Baseline) e por que é impossível avaliar o sucesso de uma meta sem ela?
