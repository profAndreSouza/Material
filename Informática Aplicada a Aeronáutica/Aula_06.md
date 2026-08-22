# ROTEIRO DE AULA EXPANDIDO — AULA 06
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 11/09/2026  
**Tema:** MS Excel II — Funções Básicas e Referências Absolutas (`$`): Conversão de Unidades Aeronáuticas  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** CAL-201 (Cálculo Aplicado), FMT-007 (Metrologia) e EAA-003 (Familiarização Aeronáutica)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Dominar as funções fundamentais do Excel: `=SOMA()`, `=MÉDIA()`, `=MÍNIMO()`, `=MÁXIMO()`, `=CONT.VALORES()` e `=ARRED()`.
- Compreender e aplicar o conceito de **Referência Relativa** vs. **Referência Absoluta (Trancamento com Cifrão `$`)**.
- Utilizar o atalho `F4` para fixar células com parâmetros e constantes de cálculo.
- Construir uma planilha de **Conversão de Unidades Aeronáuticas** (Pés para Metros, Nós para km/h, Libras para kg, Galões para Litros e PSI para Bar).
- Controlar casas decimais e formatação de números técnicos.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que o Trancamento com Cifrão (`$`) é Fundamental?
Ao arrastar uma fórmula com a Alça de Preenchimento, o Excel automaticamente desloca as referências:
- Linha 4 vira Linha 5, depois Linha 6... (Referência Relativa).
- **Problema:** Se você tem um fator de conversão fixo na célula `B1` (ex: `0,3048` para converter pés em metros) e arrastar uma fórmula `=A4*B1`, na linha seguinte o Excel tentará calcular `=A5*B2`, gerando erro!
- **Solução:** Trancar a célula constante adicionando o cifrão (`$`): `=$B$1`.
  - Pressionando a tecla `F4` no teclado com o cursor sobre o endereço da célula, o Excel coloca automaticamente `$B$1`.

```
COMO O EXCEL PROCESSA O ARRASTO COMPUTACIONAL:
  Sem Trancamento:                Com Trancamento ($):
  Linha 4: =A4 * B1               Linha 4: =A4 * $B$1
  Linha 5: =A5 * B2 (ERRO!)       Linha 5: =A5 * $B$1 (CORRETO!)
  Linha 6: =A6 * B3 (ERRO!)       Linha 6: =A6 * $B$1 (CORRETO!)
```

### 2.2 Tabela de Conversões Oficiais da Aviação

| Grandeza | Unidade Anglo-Americana | Unidade SI (Métrica) | Fator de Multiplicação |
| :--- | :--- | :--- | :--- |
| **Altitude / Distância** | Pés (*feet* - `ft`) | Metros (`m`) | $\times 0{,}3048$ |
| **Velocidade** | Nós (*knots* - `kt`) | km/h | $\times 1{,}852$ |
| **Massa / Peso** | Libras (*pounds* - `lb`) | Quilogramas (`kg`) | $\times 0{,}453592$ |
| **Combustível (Volume)** | Galões Americanos (`US Gal`) | Litros (`L`) | $\times 3{,}78541$ |
| **Pressão de Pneus/Tubulações** | `psi` ($\text{lb/in}^2$) | Bar (`bar`) | $\times 0{,}0689476$ |

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Estruturando os Parâmetros Fixos e Tabela de Voo

1. Abra o Microsoft Excel e crie uma nova pasta de trabalho chamada `Conversoes_Aeronauticas`.
2. Nas linhas 1 e 2, crie uma **Tabela de Parâmetros Fixos**:
   - `A1`: `PARÂMETROS DE CONVERSÃO TÉCNICA` (em negrito)
   - `A2`: `ft -> m:` | `B2`: `0,3048`
   - `C2`: `kt -> km/h:` | `D2`: `1,852`
   - `E2`: `lb -> kg:` | `F2`: `0,453592`
   - `G2`: `gal -> L:` | `H2`: `3,78541`
3. A partir da linha 5, monte a tabela de dados das aeronaves em rota:
   - `A5`: `Aeronave`
   - `B5`: `Altitude (ft)`
   - `C5`: `Altitude (m)`
   - `D5`: `Velocidade (kt)`
   - `E5`: `Velocidade (km/h)`
   - `F5`: `Peso Total (lb)`
   - `G5`: `Peso Total (kg)`
   - `H5`: `Combustível (gal)`
   - `I5`: `Combustível (L)`

4. Insira os dados de voo das 4 aeronaves nas linhas 6 a 9:
   - **PR-AAA:** `10000` ft | `120` kt | `2550` lb | `40` gal
   - **PT-BBB:** `24000` ft | `210` kt | `5800` lb | `120` gal
   - **PR-CCC:** `8500` ft  | `110` kt | `1600` lb | `25` gal
   - **PT-DDD:** `35000` ft | `420` kt | `75000` lb| `2800` gal

---

### Atividade 2: Inserção das Fórmulas com Trancamento e Arredondamento

1. **Altitude em Metros (`C6`):**
   - Digite: `=ARRED(B6 * $B$2; 1)` e aperte `Enter`.
2. **Velocidade em km/h (`E6`):**
   - Digite: `=ARRED(D6 * $D$2; 1)` e aperte `Enter`.
3. **Peso em kg (`G6`):**
   - Digite: `=ARRED(F6 * $F$2; 1)` e aperte `Enter`.
4. **Combustível em Litros (`I6`):**
   - Digite: `=ARRED(H6 * $H$2; 1)` e aperte `Enter`.
5. Selecione as células `C6`, `E6`, `G6` e `I6` e arraste até a linha 9.
6. Verifique que todos os cálculos foram efetuados perfeitamente mantendo as referências fixas aos parâmetros da linha 2!

---

### Atividade 3: Funções Estatísticas Fundamentais

Na linha 11 em diante, monte um painel de resumo da frota:
- `A11`: `Média de Altitude (m)` -> `=MÉDIA(C6:C9)`
- `A12`: `Maior Velocidade (km/h)` -> `=MÁXIMO(E6:E9)`
- `A13`: `Menor Peso (kg)` -> `=MÍNIMO(G6:G9)`
- `A14`: `Combustível Total a Bordo (L)` -> `=SOMA(I6:I9)`
- `A15`: `Total de Aeronaves Monitoradas` -> `=CONT.VALORES(A6:A9)`

---

## 4. EXERCÍCIO DE FIXAÇÃO EM SALA

Em uma nova aba `Calibracao_Pneus`:
1. Monte uma tabela com 6 tipos de aeronaves e suas pressões recomendadas para os pneus do trem de pouso principal em `psi` (ex: 45 psi, 60 psi, 85 psi, 120 psi, 200 psi).
2. Crie uma célula de parâmetro fixo para o fator de conversão de `psi` para `bar` ($1\text{ psi} = 0{,}0689476\text{ bar}$).
3. Calcule com trancamento (`$`) e arredondamento para 2 casas decimais a pressão equivalente em `bar`.
4. Calcule a média e a maior pressão observada na frota.

---

## 5. DICAS DE ATALHOS NO EXCEL

| Atalho | Ação |
| :--- | :--- |
| `F4` (ao editar fórmula) | Alterna trancamento: `A1` $\to$ `$A$1` $\to$ `A$1` $\to$ `$A1` $\to$ `A1` |
| `Alt + =` | Insere a função `=SOMA()` na célula |
| `Ctrl + Shift + !` | Formata número com 2 casas decimais e separador de milhar |
| `Ctrl + Setas` | Navega para as extremidades da tabela preenchida |
