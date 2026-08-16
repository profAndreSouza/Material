# Semana 13 - Qualidade e Maturidade de Processos: CMMI, MR-MPS-SW, ISO 12207 e ISO 9126/25010

**Unidade Curricular:** Governança de TI  
**Carga Horária:** 2 aulas (100 min)  
**Datas de Referência:** 28/Out (Quarta) e 30/Out (Sexta)  
**Modalidade:** Exposição Dialogada & Desenvolvimento do Capítulo 8 + **Entrega Parcial 3**

---

## 🎯 Objetivos de Aprendizagem

- Entender os modelos de maturidade de processo de software **CMMI-DEV** e **MR-MPS-SW**.
- Compreender a norma **ISO/IEC 12207** para processos de ciclo de vida de software.
- Analisar os modelos de qualidade de produto de software **ISO/IEC 9126** e **ISO/IEC 25010 (SQuaRE)**.
- Estabelecer diretrizes de **Gestão de Mudanças** e **Garantia da Qualidade de Software (QA)**.
- Desenvolver o **Capítulo 8 do PDGTI** e consolidar a **Entrega Parcial 3**.

---

## 📖 Fundamentação Teórica

### 1. Modelos de Maturidade de Software: CMMI e MPS-SW

Quando uma organização desenvolve ou customiza softwares, a qualidade do produto final é diretamente dependente da **qualidade do processo** utilizado para construí-lo.

#### A. CMMI-DEV (Capability Maturity Model Integration for Development)
Mantido pelo CMMI Institute (ISACA), o modelo estrutura a maturidade organizacional em 5 níveis por etapas de representação por estágios:

```text
  NÍVEL 5: EM OTIMIZAÇÃO     ---> Foco na melhoria contínua e inovação dos processos.
  NÍVEL 4: GERENCIADO QUANT. ---> Processos medidos estatisticamente e controlados por métricas.
  NÍVEL 3: DEFINIDO          ---> Processos padronizados em toda a organização.
  NÍVEL 2: GERENCIADO        ---> Projetos planejados, medidos e controlados em nível de projeto.
  NÍVEL 1: INICIAL           ---> Processos ad-hoc, caóticos e dependentes de "heróis".
```

#### B. MR-MPS-SW (Modelo de Referência para Software - Softex)
Modelo brasileiro acessível para PMEs, compatível com o CMMI e a ISO/IEC 12207. Estrutura a maturidade em **7 Níveis** (de G até A):
- **Nível G (Parcialmente Gerenciado):** Gerenciamento de Requisitos e Projetos.
- **Nível F (Gerenciado) ... até Nível A (Em Otimização).**

---

### 2. ISO/IEC 12207 (Processos de Ciclo de Vida de Software)
A norma ISO/IEC 12207 estabelece uma estrutura comum para todos os processos de desenvolvimento, operação e manutenção de software. Divididos em 3 grupos principais:
1. **Processos Primários:** Aquisição, Fornecimento, Desenvolvimento, Operação e Manutenção.
2. **Processos de Apoio:** Garantia da Qualidade, Verificação, Validação, Revisão Conjunta, Auditoria e Gestão de Configuração.
3. **Processos Organizacionais:** Gerenciamento de Processos, Infraestrutura, Treinamento e Melhoria.

---

### 3. Qualidade de Produto de Software: ISO/IEC 25010 (SQuaRE)
Evolução da ISO/IEC 9126, a **ISO/IEC 25010** define as 8 características essenciais para avaliar a qualidade de um produto de software:

```text
               ISO/IEC 25010 - CARACTERÍSTICAS DE QUALIDADE
  ┌───────────────────────┬───────────────────────┬───────────────────────┐
  │ Adequação Funcional   │ Eficiência de Desemp. │ Compatibilidade       │
  ├───────────────────────┼───────────────────────┼───────────────────────┤
  │ Usabilidade           │ Confiabilidade        │ Segurança             │
  ├───────────────────────┴───────────────────────┼───────────────────────┤
  │ Manutenibilidade                              │ Portabilidade         │
  └───────────────────────────────────────────────┴───────────────────────┘
```

1. **Adequação Funcional:** O software faz o que o negócio precisa com precisão?
2. **Eficiência de Desempenho:** Responde rápido e consome recursos adequados de CPU/memória?
3. **Usabilidade:** É fácil de aprender, operar e acessível?
4. **Confiabilidade:** É tolerante a falhas e recuperável em caso de erro?
5. **Segurança:** Protege os dados e impede acessos não autorizados?
6. **Manutenibilidade:** O código é limpo, testável e fácil de modificar?
7. **Portabilidade:** Funciona em diferentes navegadores, SOs ou ambientes de nuvem?
8. **Compatibilidade:** Interopera bem com outros sistemas e ERPs?

---

## 🛠️ Oficina Prática / Aplicação no PDGTI

Nesta semana, os grupos concluirão o **Capítulo 8 do PDGTI** e realizarão a submissão da **Entrega Parcial 3**.

### Roteiro de Desenvolvimento do Capítulo 8:
- [ ] **8.1 Diagnóstico de Maturidade Atual:** Avaliação em qual nível do CMMI/MPS-SW a empresa-alvo se encontra atualmente (com justificativa fundamentada).
- [ ] **8.2 Plano de Melhoria de Processos:** Definição de no mínimo 3 práticas de maturidade a implementar (ex: controle de versão Git, testes automatizados, code review).
- [ ] **8.3 Métricas de Qualidade de Software:** Seleção de características da ISO 25010 prioritárias para os sistemas da empresa.
- [ ] **8.4 Procedimentos de Gestão de Mudanças:** Fluxo formal de controle de mudanças (ticket, aprovação do CAB, testes em homologação e deploy automatizado).

---

## 📦 Instruções da ENTREGA PARCIAL 3 (Data Limite: 30/Out)

> [!IMPORTANT]
> A **Entrega Parcial 3** consiste no envio do documento contendo os **Capítulos 7 e 8 do PDGTI** (consolidados com todas as correções anteriores dos Capítulos 1 a 6):
> - **Capítulo 7:** Seleção e Justificativa de Frameworks (ISO 38500, COBIT 2019, ITIL v4)
> - **Capítulo 8:** Melhoria de Processos, Qualidade de Software (CMMI, MPS-SW, ISO 25010) e Gestão de Mudanças
