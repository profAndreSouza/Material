# ROTEIRO DE AULA EXPANDIDO — AULA 07
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 18/09/2026  
**Tema:** MS Excel III — Modelagem de Dados: Planilha de Peso e Balanceamento de Aeronaves ($CG$)  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** EAA-015 (Peso e Balanceamento) e CAL-201 (Cálculo Aplicado)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Modelar uma planilha completa e estruturada de cálculo de engenharia aeronáutica.
- Implementar as equações fundamentais de **Momento ($M = P \times B$)** e **Centro de Gravidade ($CG = \frac{\sum M}{\sum P}$)**.
- Organizar estações de carregamento (Peso Vazio, Pilotos, Passageiros, Bagagem e Combustível).
- Calcular o Peso Total de Decolagem e verificar se está dentro do limite máximo permitido (**MTOW**).
- Calcular a posição final do $CG$ em polegadas ou metros e interpretar a estabilidade da aeronave.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL & FÍSICA

### 2.1 A Física do Peso e Balanceamento (Weight & Balance)
Conforme as normas regulamentares e o manual oficial da FAA ([`docs/FAA-H-8083-1B - PESO E BALANCEAMENTO.pdf`](docs/FAA-H-8083-1B%20-%20PESO%20E%20BALANCEAMENTO.pdf)), uma aeronave só pode decolar se:
1. O peso total não exceder o **Peso Máximo de Decolagem (MTOW)**.
2. A posição do **Centro de Gravidade ($CG$)** estiver dentro da faixa segura (nem excessivamente à frente, o que deixaria o nariz pesado, nem muito atrás, o que tornaria a aeronave instável e incontrolável).

As fórmulas matemáticas no Excel são:
$$\text{Momento } (M) = \text{Peso } (P) \times \text{Braço } (B)$$
$$\text{Posição do } CG = \frac{\text{Somatória dos Momentos } (\sum M)}{\text{Somatória dos Pesos } (\sum P)} = \frac{M_{\text{total}}}{P_{\text{total}}}$$

```
ESTRUTURA DE CÁLCULO NO EXCEL:
 +------------------------+-----------------+---------------------+------------------------+
 | ESTAÇÃO / COMPONENTE   | PESO (lb) [P]   | BRAÇO (pol) [B]     | MOMENTO (lb.pol) [M]   |
 +------------------------+-----------------+---------------------+------------------------+
 | Peso Básico Vazio      |      1.642      |        82,2         | = B4 * C4 (134.972,4)  |
 | Piloto e Copiloto      |        340      |        85,5         | = B5 * C5 ( 29.070,0)  |
 | Passageiros Traseiros  |        300      |       118,0         | = B6 * C6 ( 35.400,0)  |
 | Bagagem (Compart. 1)   |         80      |       142,8         | = B7 * C7 ( 11.424,0)  |
 | Combustível (50 gal)   |        300      |        95,0         | = B8 * C8 ( 28.500,0)  |
 +------------------------+-----------------+---------------------+------------------------+
 | TOTAIS:                | = SOMA(B4:B8)   |                     | = SOMA(D4:D8)          |
 |                        |   (2.662 lb)    |                     |   (239.366,4 lb.pol)   |
 +------------------------+-----------------+---------------------+------------------------+
 | POSIÇÃO FINAL DO CG:   | = D9 / B9 = 239.366,4 / 2.662 = 89,92 polegadas                |
 +------------------------+----------------------------------------------------------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construindo o Leiaute da Planilha de Carregamento

1. Abra o Excel e renomeie a aba para `Peso_e_Balanceamento_C172`.
2. Insira o título institucional nas linhas 1 e 2:
   - `A1`: `CÁLCULO DE PESO E BALANCEAMENTO — CESSNA 172 SKYHAWK`
   - `A2`: `LIMITES DO FABRICANTE: MTOW = 2.550 lb | Faixa Segura de CG: 82,0 pol a 95,0 pol`
3. A partir da linha 4, monte os cabeçalhos das colunas:
   - `A4`: `Estação / Item de Carregamento`
   - `B4`: `Peso (lb)`
   - `C4`: `Braço - Arm (pol)`
   - `D4`: `Momento (lb.pol)`

4. Preencha os dados das estações (Linhas 5 a 9):
   - **Linha 5:** `Peso Básico Vazio (BEW)` | `1642` | `82,2`
   - **Linha 6:** `Piloto e Passageiro Dianteiro` | `340` | `85,5`
   - **Linha 7:** `Passageiros Traseiros` | `280` | `118,0`
   - **Linha 8:** `Bagagem` | `60` | `142,8`
   - **Linha 9:** `Combustível de Decolagem (40 gal)` | `240` | `95,0`

---

### Atividade 2: Fórmulas de Momento, Somatórias e Posição do CG

1. **Cálculo do Momento:**
   - Na célula `D5`, digite: `=B5*C5`.
   - Arraste a fórmula com a alça de preenchimento até a célula `D9`.
2. **Cálculo dos Totais (Linha 10):**
   - Em `A10`, digite: `PESO TOTAL E MOMENTO TOTAL`.
   - Em `B10` (Peso Total de Decolagem): Digite `=SOMA(B5:B9)`.
   - Em `D10` (Momento Total): Digite `=SOMA(D5:D9)`.
3. **Cálculo da Posição do Centro de Gravidade ($CG$):**
   - Na célula `A12`, digite: `POSIÇÃO FINAL DO CG (polegadas):`.
   - Na célula `B12`, digite a divisão do momento total pelo peso total: `=D10/B10`.
   - Formate a célula `B12` com **2 casas decimais**.

---

### Atividade 3: Simulação de Queima de Combustível em Voo

1. Copie o bloco da tabela e cole ao lado para criar o **Cálculo para o Pouso (Após queima de combustível)**.
2. Na nova tabela de pouso, altere o combustível para `60 lb` (restante após 2 horas de voo).
3. Observe como o peso total diminui e como a posição do $CG$ se desloca para a frente!

---

## 4. EXERCÍCIO DE FIXAÇÃO EM SALA

Monte uma planilha de Peso e Balanceamento para uma aeronave bimotor com as seguintes estações:
- Peso Vazio: $3.200\text{ lb}$ (Braço: $88{,}0\text{ pol}$)
- Pilotos: $360\text{ lb}$ (Braço: $85{,}0\text{ pol}$)
- Passageiros Cabine: $650\text{ lb}$ (Braço: $125{,}0\text{ pol}$)
- Bagagem Dianteira: $100\text{ lb}$ (Braço: $42{,}0\text{ pol}$)
- Bagagem Traseira: $120\text{ lb}$ (Braço: $160{,}0\text{ pol}$)
- Combustível: $600\text{ lb}$ (Braço: $95{,}0\text{ pol}$)
- **Tarefas:**
  1. Calcule o Momento de cada estação.
  2. Calcule o Peso Total e o Momento Total.
  3. Calcule o $CG$ final.

---

## 5. DICAS DE FORMATAÇÃO E ATALHOS

| Ação | Atalho |
| :--- | :--- |
| Destacar totais | `Ctrl + N` (Negrito) |
| Formatar com 2 casas decimais | `Ctrl + Shift + 1` |
| Somar rapidamente a coluna | `Alt + =` |
