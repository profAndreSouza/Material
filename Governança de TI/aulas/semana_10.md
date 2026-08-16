# Semana 10 - Gestão de Riscos em TI, Compliance Regulatório e Segurança da Informação

**Unidade Curricular:** Governança de TI  
**Carga Horária:** 2 aulas (100 min)  
**Datas de Referência:** 07/Out (Quarta) e 09/Out (Sexta)  
**Modalidade:** Exposição Dialogada & Desenvolvimento do Capítulo 6 + **Entrega Parcial 2**

---

## Objetivos de Aprendizagem

- Entender os princípios de **Gestão de Riscos em TI** alinhados às normas ISO 31000 e aos frameworks COBIT / ISO 27001.
- Dominar o processo de identificação, análise, avaliação e resposta aos riscos tecnológicos e regulatórios.
- Construir e interpretar uma **Matriz de Riscos (Probabilidade x Impacto)**.
- Compreender os requisitos de **Compliance Regulatório** aplicados à TI (LGPD, ISO/IEC 27001, PCI-DSS).
- Desenvolver o **Capítulo 6 do PDGTI** e consolidar a **Entrega Parcial 2**.

---

## Fundamentação Teórica

### 1. O que é Risco de TI?
Conforme a ISO 31000, risco é o "efeito da incerteza nos objetivos". No contexto da Tecnologia da Informação, o **Risco de TI** é a probabilidade de uma ameaça explorar uma vulnerabilidade em ativos de informação, causando danos ou perdas operacionais, financeiras ou reputacionais para a organização.

### 2. As 4 Etapas do Ciclo de Gestão de Riscos

```text
  1. IDENTIFICAÇÃO   ---> Levantamento de ameaças (ataques, vazamento, indisponibilidade).
        │
        ▼
  2. ANÁLISE         ---> Determinar a Probabilidade (1 a 5) e o Impacto (1 a 5).
        │
        ▼
  3. AVALIAÇÃO       ---> Cálculo da Severidade (Risco = Probabilidade x Impacto).
        │
        ▼
  4. RESPOSTA/TRATAMENTO -> Decidir a estratégia: Mitigar, Evitar, Transferir ou Aceitar.
```

### 3. As 4 Estratégias de Resposta aos Riscos
Para cada risco identificado e priorizado na matriz, a Governança de TI deve definir uma das quatro respostas formais:

1. **Mitigar (Reduzir):** Implementar controles de segurança ou processos para reduzir a probabilidade ou o impacto.
   - *Exemplo:* Installar autenticação em dois fatores (MFA) para mitigar o risco de sequestro de credenciais.
2. **Evitar (Eliminar):** Descontinuar a atividade ou tecnologia que gera o risco inaceitável.
   - *Exemplo:* Desligar um servidor obsoleto com sistema operacional sem suporte de segurança.
3. **Transferir (Compartilhar):** Repassar o impacto financeiro do risco a terceiros.
   - *Exemplo:* Contratar um seguro cibernético (Cyber Insurance) ou migrar a infraestrutura para um provedor de nuvem com SLA contratual.
4. **Aceitar (Risco Residual):** Decidir conscientemente conviver com o risco quando o custo do controle for maior do que o impacto da perda.
   - *Exemplo:* Aceitar a lentidão ocasional em um relatório secundário gerado de madrugada.

### 4. Compliance Regulatório & Segurança da Informação
A TI moderna atua sob rigoroso escrutínio legal. Os principais marcos regulatórios incluem:

- **LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018):** Regulamenta o tratamento de dados pessoais, prevendo multas de até 2% do faturamento (limitadas a R$ 50 milhões por infração). Exige governança de dados, consentimento, nomeação do DPO (*Data Protection Officer*) e relatórios de impacto (RIPD).
- **ISO/IEC 27001:** Norma internacional padrão para implementação de um Sistema de Gestão de Segurança da Informação (SGSI), focada na **Tríade CID** (Confidencialidade, Integridade e Disponibilidade).
- **PCI-DSS:** Padrão de segurança mandatório para organizações que processam, armazenam ou transmitem dados de cartões de crédito.

---

## Estudo de Caso / Exemplo Prático

### Ataque de Ransomware em uma Rede de Saúde
- **O Incidente:** Uma clínica hospitalar sofreu um ataque de *Ransomware* que criptografou todos os servidores de banco de dados e arquivos de exames dos pacientes. O atacante exigiu US$ 2 milhões em Bitcoins.
- **Vulnerabilidade Explorada:** Falha de aplicação de correções (*patches*) de segurança no sistema operacional e ausência de backup *offline* (imune a rede).
- **Tratamento no PDGTI:** Inclusão de controles de *Cyber Resilience*: backups diários automatizados e imutáveis com teste mensal de restauração (DRP) e isolamento de rede por microssegmentação.

---

## Oficina Prática / Aplicação no PDGTI

Nesta semana, os grupos concluirão o **Capítulo 6 do PDGTI** e realizarão a submissão da **Entrega Parcial 2**.

### Roteiro de Desenvolvimento do Capítulo 6:
- [ ] **6.1 Identificação e Inventário de Riscos:** Mapeamento de no mínimo 6 riscos críticos de TI (segurança, indisponibilidade, compliance, pessoas, fornecedores).
- [ ] **6.2 Matriz de Riscos (Probabilidade x Impacto):** Construção da Matriz 5x5 categorizando os riscos em Baixo, Médio, Alto e Crítico.
- [ ] **6.3 Plano de Ação e Mitigação:** Definição da estratégia de resposta (Mitigar, Evitar, Transferir, Aceitar) para cada risco, com ação prática, prazo e responsável.
- [ ] **6.4 Enquadramento em Requisitos de Compliance:** Diagnóstico de conformidade com a LGPD e ISO 27001.

---

## Instruções da ENTREGA PARCIAL 2 (Data Limite: 09/Out)

> [!IMPORTANT]
> A **Entrega Parcial 2** consiste no envio do documento contendo os **Capítulos 5 e 6 do PDGTI** (consolidados com as correções da Entrega Parcial 1):
> - **Capítulo 5:** Gestão de Desempenho e Indicadores (KPIs do Negócio e Operacionais de TI)
> - **Capítulo 6:** Gestão de Riscos, Matriz de Riscos, Planos de Mitigação e Compliance Regulatório
