# Semana 02 - Governança Corporativa, Sarbanes-Oxley (SOX), Compliance e Ética na TI

**Unidade Curricular:** Governança de TI  
**Carga Horária:** 2 aulas (100 min)  
**Datas de Referência:** 12/Ago (Quarta) e 14/Ago (Sexta)  
**Modalidade:** Exposição Dialogada & Desenvolvimento do Capítulo 1 do PDGTI

---

## 🎯 Objetivos de Aprendizagem

- Compreender a relação intrínseca entre **Governança Corporativa** e **Governança de TI**.
- Estudar os **4 Princípios Universais do IBGC** (Transparência, Equidade, Prestação de Contas e Responsabilidade Corporativa) e sua aplicação prática no ambiente de tecnologia.
- Analisar os impactos da **Lei Sarbanes-Oxley (SOX)** e os **Controles Gerais de TI (ITGC - IT General Controls)** nas rotinas corporativas.
- Debater a importância do **Compliance**, **Integridade** e **Ética Profissional** na tomada de decisões técnicas.
- Desenvolver o **Capítulo 1 do PDGTI (Caracterização da Organização)**.

---

## 📖 Fundamentação Teórica

### 1. Governança Corporativa & Teoria da Agência
A Governança Corporativa é o sistema pelo qual as empresas são dirigidas, monitoradas e incentivadas, envolvendo os relacionamentos entre sócios, Conselho de Administração, Diretoria Executiva, órgãos de fiscalização e demais partes interessadas.

#### A Teoria da Agência (Conflito de Agência)
Com o crescimento das organizações, ocorre a separação entre a **propriedade** (acionistas/donos) e a **gestão** (executivos contratados).
- **Principal:** Acionista que busca o crescimento sustentável e perenidade do capital no longo prazo.
- **Agente:** Executivo contratado para gerir o negócio diário, que pode ser tentado a tomar decisões de curto prazo focadas em bônus pessoais.
- **Papel da Governança:** Criar mecanismos de controle, auditoria e incentivos para alinhar os objetivos dos Agentes aos dos Principais.

### 2. Os 4 Princípios do IBGC na TI
O Instituto Brasileiro de Governança Corporativa (IBGC) estabelece quatro princípios universais que direcionam as práticas de TI:

1. **Transparência (Transparency):** Desejo de disponibilizar informações relevantes para as partes interessadas.
   - *Na TI:* Dashboards de SLA, transparência de custos de infraestrutura/nuvem (FinOps) e relatórios claros de incidentes.
2. **Equidade (Fairness):** Tratamento justo e isonômico de todos os sócios e áreas de negócio.
   - *Na TI:* Critérios objetivos para priorização de demandas no portfólio de sistemas, sem favorecimento de diretores.
3. **Prestação de Contas (Accountability):** Os agentes devem prestar contas da sua gestão e assumir integralmente as consequências de seus atos e omissões.
   - *Na TI:* Definição clara de Donos de Processos/Sistemas (Data Owners), matrizes de responsabilidade (RACI) e registros imutáveis de audit trail.
4. **Responsabilidade Corporativa:** Zelar pela sustentabilidade financeira, social e ambiental da organização.
   - *Na TI:* TI Verde (Green IT), descarte ecológico de e-waste, proteção rigorosa de dados pessoais e privacidade do consumidor.

### 3. Lei Sarbanes-Oxley (SOX) & ITGC
Promulgada em 2002 nos EUA após grandes escândalos financeiros (Enron, WorldCom), a **SOX** visa restaurar a confiança no mercado financeiro exigindo demonstrações contábeis auditáveis e controles internos rígidos.

#### As Seções Críticas da SOX:
- **Seção 302:** Exige que o CEO e o CFO atestem pessoalmente a precisão dos relatórios financeiros e a eficácia dos controles internos.
- **Seção 404:** Exige que as empresas documentem, testem e atestem anualmente a eficácia dos Controles Internos sobre Relatórios Financeiros (ICFR).

#### O Impacto Direto na TI: ITGC (IT General Controls)
Como 100% dos dados financeiros trafegam por sistemas de TI (ERPs, bancos de dados, integrações), se os controles de TI falharem, o balanço contábil é considerado não-confiável. Os auditores SOX testam 4 grandes domínios do ITGC:
1. **Gestão de Acessos Lógicos:** Controle de credenciais, MFA, menor privilégio e revogação imediata no desligamento.
2. **Gestão de Mudanças (Change Management):** Segregação de ambientes (Dev, Teste, Prod); nenhum desenvolvedor altera código direto em produção.
3. **Operações de TI:** Monitoramento de rotinas batch contábeis, backups diários e testes periódicos de Disaster Recovery (DRP).
4. **Desenvolvimento e Aquisição de Sistemas:** Versionamento de código, testes formais de aceitação e documentação de requisitos.

---

## 💥 Estudos de Caso Emblemáticos

### Caso 1: O Escândalo da Enron (2001)
A Enron utilizava centenas de empresas de fachada para ocultar dívidas bilionárias e inflar lucros nos balanços. A auditoria Arthur Andersen omitiu as fraudes e destruiu evidências. **Lição:** Demonstrou que sem governança e controles independentes de TI/auditoria, a fraude pode destruir corporações globais.

### Caso 2: Escândalo "Dieselgate" da Volkswagen (2015)
Engenheiros de software programaram a unidade de controle do motor (ECU) para detectar quando o veículo estava sendo testado em laboratório de emissões, ativando filtros temporários. Nas ruas, o veículo desativava os controles e poluía 40 vezes mais. **Lição Ética:** Desenvolvedores e profissionais de TI têm responsabilidade ética e criminal sobre o código que escrevem. Não se pode alegar *"estava apenas cumprindo ordens de superiores"*.

---

## 🛠️ Oficina Prática / Aplicação no PDGTI

Nesta semana, os grupos darão início ao **Capítulo 1 do PDGTI (Caracterização da Organização)**.

### Roteiro de Desenvolvimento do Capítulo 1:
- [ ] **1.1 Visão Geral do Negócio:** Razão social, setor de atuação, porte, missão, visão e valores organizacionais.
- [ ] **1.2 Estrutura Organizacional:** Organograma corporativo exibindo o posicionamento da diretoria executiva e conselhos.
- [ ] **1.3 Levantamento da Estrutura Atual de TI:** Organograma da TI, dimensionamento da equipe, papel do gestor de TI.
- [ ] **1.4 Inventário Simplificado de Recursos:** Principais sistemas (ERP, CRM), infraestrutura (On-premise / Nuvem) e orçamento histórico de TI.

---

## ❓ Questões para Fixação e Discussão

1. O que é a Teoria da Agência e como os mecanismos de Governança de TI ajudam a alinhar os interesses dos acionistas e da diretoria de TI?
2. Por que os auditores de conformidade SOX passam a maior parte do tempo testando processos da equipe de TI (ITGC)?
3. Qual é a diferença fundamental entre Compliance Regulatório (cumprir leis) e Cultura de Integridade Ética nas organizações?
