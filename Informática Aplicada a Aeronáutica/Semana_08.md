# ROTEIRO DE AULA EXPANDIDO — SEMANA 08
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel V — Agregações Condicionais (`CONT.SE`, `CONT.SES`, `SOMASE`, `SOMASES`), Indicadores de Frota e Mini-PBL 2  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** EAM-004 (Metodologias de Manutenção), EAM-007 (Gerenciamento) e Gestão Financeira de Manutenção  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Dominar funções computacionais de contagem seletiva de registros: `=CONT.SE()` (1 critério) e `=CONT.SES()` (múltiplos critérios simultâneos).
- Dominar funções de soma seletiva de valores monetários e horas operacionais: `=SOMASE()` e `=SOMASES()`.
- Construir tabelas de indicadores executivos (*Key Performance Indicators - KPIs*) para análise de confiabilidade de frota.
- Calcular o indicador financeiro aeronáutico **Custo por Hora de Voo (Flight Hour Cost - R$/FH)**.
- Executar o **Mini-PBL 2** (Calculadora de Controle de Horas de Voo e Custo por FH da Frota).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Funções de Agregação Simples vs. Multicritério

$$\text{CONT.SE}(\text{intervalo}; \text{critério})$$

$$\text{CONT.SES}(\text{intervalo1}; \text{critério1}; \text{intervalo2}; \text{critério2}; ...)$$

$$\text{SOMASE}(\text{intervalo\_critério}; \text{critério}; [\text{intervalo\_soma}])$$

$$\text{SOMASES}(\text{intervalo\_soma}; \text{intervalo1}; \text{critério1}; \text{intervalo2}; \text{critério2}; ...)$$

> [!IMPORTANT]
> **Atenção à Ordem dos Argumentos no SOMASES:**
> No `SOMASE` simples, o intervalo a ser somado fica no **FINAL**.
> No `SOMASES` multicritério, o intervalo a ser somado fica obrigatoriamente no **INÍCIO** da função!

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção da Base Operacional de Voos da Frota

1. Crie uma planilha no Excel com as colunas:
   - `A1`: `Prefixo` | `B1`: `Modelo` | `C1`: `Base de Operação` | `D1`: `Horas no Mês` | `E1`: `Custo Fixo (R$)` | `F1`: `Custo Variável Manut (R$)` | `G1`: `Status Operacional`
2. Preencha os dados de 6 aeronaves:
   - `PR-AAA` | `Cessna 172`   | `Sorocaba (SOD)` | `45,0` | `12000` | `18500` | `DISPONÍVEL`
   - `PT-BBB` | `Piper Seneca` | `Jundiaí (QDV)`  | `62,0` | `25000` | `41000` | `DISPONÍVEL`
   - `PR-CCC` | `Cessna 172`   | `Sorocaba (SOD)` | `12,0` | `12000` | `32000` | `EM MANUTENÇÃO`
   - `PT-DDD` | `King Air C90` | `Congonhas (CGH)`| `78,0` | `45000` | `89000` | `DISPONÍVEL`
   - `PR-EEE` | `Cessna 172`   | `Sorocaba (SOD)` | `55,0` | `12000` | `14200` | `DISPONÍVEL`
   - `PT-FFF` | `Piper Seneca` | `Sorocaba (SOD)` | `0,0`  | `25000` | `55000` | `AOG / INSPEÇÃO`

---

### Atividade 2: Fórmulas de Linha e Cálculo de Custo por Hora de Voo (R$/FH)

1. Adicione a coluna `H1`: `Custo Total no Mês (R$)` e `I1`: `Custo por Hora de Voo (R$/FH)`.
2. Na célula `H2`, calcule o Custo Total:
   `=E2 + F2`
3. Na célula `I2`, calcule o Custo por FH tratando aeronaves que não voaram (evitar `#DIV/0!`):
   `=SEERRO(H2 / D2; "SEM VOOS NO MÊS")`
4. Arraste as fórmulas até a linha 7.

---

### Atividade 3: Construção do Painel de Indicadores com Agregações

Monte a tabela de indicadores ao lado a partir da coluna `K`:
1. **Total de Aeronaves Disponíveis:**
   `=CONT.SE(G2:G7; "DISPONÍVEL")`
2. **Cessna 172 Baseados em Sorocaba que estão Disponíveis (Multicritério):**
   `=CONT.SES(B2:B7; "Cessna 172"; C2:C7; "Sorocaba (SOD)"; G2:G7; "DISPONÍVEL")`
3. **Custo Total de Manutenção Gerado Apenas pela Frota de Piper Seneca:**
   `=SOMASE(B2:B7; "Piper Seneca"; H2:H7)`
4. **Custo Total de Manutenção de Aeronaves Disponíveis Baseadas em Sorocaba:**
   `=SOMASES(H2:H7; C2:C7; "Sorocaba (SOD)"; G2:G7; "DISPONÍVEL")`

---

## 4. DESAFIO PRÁTICO (MINI-PBL 2)

**Enunciado do Mini-PBL 2 (Peso: ~7,5% da Média Final):**
Desenvolva a **Calculadora de Gestão Operacional e Custos da Frota Aérea**:

1. **Base com no mínimo 8 aeronaves:** Contendo prefixos, modelos, horas voadas, custos fixos e custos de componentes de reposição.
2. **Cálculos individuais por aeronave:** Custo total e Custo por Hora de Voo (R$/FH) com proteção de erro para horas zeradas.
3. **Painel de Indicadores Gerenciais contendo obrigatoriamente:**
   - 2 cálculos com `=CONT.SE()` e 1 com `=CONT.SES()` multicritério.
   - 2 cálculos com `=SOMASE()` e 1 com `=SOMASES()` multicritério.
   - Cálculo da Média Geral de Custo por FH da empresa e identificação da aeronave com maior custo.
4. **Formatação Visual:** Formatação de moeda `R$`, cabeçalhos limpos e formatação condicional em cores para custos acima da média.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Ctrl + Shift + 4` (`$`) | Formata instantaneamente como **Moeda (R$)** |
| `Alt + =` | Soma a coluna inteira com 1 comando |
| `F2` | Entra no modo de edição direta da fórmula dentro da célula |
