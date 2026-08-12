# ROTEIRO DE AULA EXPANDIDO — SEMANA 04
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel I — Fundamentos, Fórmulas Matemáticas, Referências Absolutas (`$`) e Conversões de Unidades Técnicas  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** CAL-201 (Cálculo Aplicado), FQA-001 (Física e Química) e FMT-007 (Metrologia e Ferramentas)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Operar a interface moderna do **Microsoft Excel Online (Office 365)**.
- Compreender a tipologia de dados no Excel: **Valores Numéricos, Textos, Datas e Fórmulas**.
- Dominar a diferença computacional entre **Referências Relativas (`A1`)** e **Referências Absolutas / Trancamento (`$A$1`, `A$1`, `$A1`)**.
- Construir equações matemáticas personalizadas utilizando parênteses e operadores (`+`, `-`, `*`, `/`, `^`).
- Construir planilhas automáticas de **Conversão de Unidades Técnicas Aeronáuticas** (pés para metros, libras para quilogramas, nós para km/h, psi para bar, galões para litros).
- Aplicar as funções fundamentais: `=SOMA()`, `=MÉDIA()`, `=MÁXIMO()`, `=MÍNIMO()`, `=ARRED()` e `=CONVERTER()`.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que o Trancamento com Cifrão (`$`) é Fundamental?
Ao arrastar uma fórmula no Excel com a **Alça de Preenchimento**, o software desloca automaticamente as linhas e colunas (Referência Relativa).
- **Quando você precisa fixar uma célula constante** (como uma taxa de conversão ou o preço de um galão de combustível), deve-se usar a **Referência Absoluta (`$`)**.
- Pressionar a tecla `F4` sobre o endereço da célula insere automaticamente os cifrões:
  - `$B$1`: Linha e coluna 100% fixas (não mudam ao arrastar nem para os lados nem para baixo).
  - `B$1`: Linha fixa, coluna livre.
  - `$B1`: Coluna fixa, linha livre.

```
EXEMPLO COMPUTACIONAL:
  Célula B1 = 0,3048 (Fator de Conversão: 1 pé = 0,3048 m)

  Fórmula em C4 (Sem trancar):  =B4 * B1   (Ao arrastar para C5, vira =B5 * B2 -> ERRO!)
  Fórmula em C4 (Com trancamento): =B4 * $B$1 (Ao arrastar para C5, vira =B5 * $B$1 -> CORRETO!)
```

### 2.2 Fatores de Conversão Aeronáutica Comuns
Na aviação internacional, manuais utilizam o sistema imperial (EUA/UK) enquanto a engenharia no Brasil utiliza o Sistema Internacional (SI):

| Grandeza | Unidade Aeronáutica | Unidade SI (Métrico) | Fator de Multiplicação |
| :--- | :--- | :--- | :--- |
| **Altitude / Distância** | Pés (*feet* - `ft`) | Metros (`m`) | $\text{metros} = \text{ft} \times 0,3048$ |
| **Velocidade** | Nós (*knots* - `kt`) | Quilômetros por hora (`km/h`) | $\text{km/h} = \text{kt} \times 1,852$ |
| **Massa / Peso** | Libras (*pounds* - `lb`) | Quilogramas (`kg`) | $\text{kg} = \text{lb} \times 0,453592$ |
| **Volume de Combustível** | Galões US (*gallons* - `gal`) | Litros (`L`) | $\text{litros} = \text{gal} \times 3,78541$ |
| **Pressão de Pneus/Sistemas** | Libras por polegada² (`psi`) | Bar (`bar`) | $\text{bar} = \text{psi} \times 0,0689476$ |

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção da Calculadora de Conversão com Referências Absolutas

1. Abra o Excel Online ou Desktop.
2. Na linha 1 e 2, crie a área de parâmetros fixos:
   - `A1`: `PARÂMETROS FIXOS`
   - `A2`: `Fator ft -> m:` | `B2`: `0,3048`
   - `C2`: `Fator kt -> km/h:` | `D2`: `1,852`
   - `E2`: `Fator lb -> kg:` | `F2`: `0,453592`
3. Na linha 5, monte a tabela de dados de voo:
   - `A5`: `Aeronave` | `B5`: `Altitude (ft)` | `C5`: `Altitude (m)` | `D5`: `Velocidade (kt)` | `E5`: `Velocidade (km/h)` | `F5`: `Peso Combustível (lb)` | `G5`: `Peso Combustível (kg)`
4. Insira os dados para 4 aeronaves:
   - Linha 6: `PR-AAA` | `B6`: `8500` | `D6`: `140` | `F6`: `1200`
   - Linha 7: `PT-BBB` | `B7`: `12000` | `D7`: `185` | `F7`: `2400`
   - Linha 8: `PR-CCC` | `B8`: `4500` | `D8`: `110` | `F8`: `800`
   - Linha 9: `PT-DDD` | `B9`: `25000` | `D9`: `280` | `F9`: `5600`

---

### Atividade 2: Inserção de Fórmulas com Trancamento e Arredondamento

1. Na célula `C6` (Altitude em metros), digite a fórmula trancando a célula `B2`:
   `=ARRED(B6 * $B$2; 1)`
2. Na célula `E6` (Velocidade em km/h), digite a fórmula trancando a célula `D2`:
   `=ARRED(D6 * $D$2; 1)`
3. Na célula `G6` (Combustível em kg), digite a fórmula trancando a célula `F2`:
   `=ARRED(F6 * $F$2; 2)`
4. Selecione as células `C6`, `E6` e `G6` e use a **Alça de Preenchimento** (duplo clique ou arrastar) até a linha 9.
5. Observe que todas as linhas foram calculadas perfeitamente mantendo a referência fixa aos parâmetros da linha 2!

---

### Atividade 3: Uso da Função Nativa `=CONVERTER()`

O Excel possui uma função avançada chamada `=CONVERTER(número; de_unidade; para_unidade)`:
1. Em uma célula vazia, teste:
   - `=CONVERTER(8500; "ft"; "m")` -> Converte pés para metros nativamente.
   - `=CONVERTER(140; "kn"; "km/h")` -> Converte nós para km/h.
   - `=CONVERTER(1200; "lbm"; "kg")` -> Converte libras-massa para quilogramas.

---

## 4. EXERCÍCIO DE FIXAÇÃO INTENSIVO

**Desafio em Laboratório:**
Você recebeu um relatório técnico com 6 tanques de combustível de diferentes aeronaves:
- Colunas: `Prefixo` | `Capacidade (Galões)` | `Consumo Médio (Galões/Hora)` | `Autonomia Máxima (Horas)` | `Capacidade em Litros`
- **Cálculos:**
  - `Autonomia (Horas)` = `Capacidade / Consumo Médio`
  - `Capacidade em Litros` = `Capacidade em Galões * $Fator_Litros` (use $1\text{ gal} = 3,78541\text{ L}$).
- No rodapé, calcule com fórmulas a **Capacidade Total da Frota em Litros** (`SOMA`), a **Média de Autonomia** (`MÉDIA`) e a **Maior Autonomia** (`MÁXIMO`).

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `F4` (na fórmula) | Alterna automaticamente o trancamento com cifrões (`A1` -> `$A$1` -> `A$1` -> `$A1`) |
| `Ctrl + Shift + 1` | Aplica formato de número com 2 casas decimais e separador de milhar |
| `Ctrl + Setas` | Pula instantaneamente para a primeira ou última célula preenchida da tabela |
| `Ctrl + D` | Copia a fórmula da célula de cima para a célula atual |
