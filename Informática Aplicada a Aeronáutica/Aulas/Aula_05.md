# ROTEIRO DE AULA EXPANDIDO — AULA 05
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 04/09/2026  
**Tema:** MS Excel I — Primeiros Passos no Excel: Interface, Células, Tipos de Dados e Operadores Básicos  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** CAL-201 (Cálculo Aplicado), FQA-001 (Física Aplicada) e FMT-007 (Metrologia)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender a estrutura de uma planilha eletrônica: Linhas (1, 2, 3...), Colunas (A, B, C...) e Células (`A1`, `B4`).
- Distinguir e formatar tipos de dados: **Texto**, **Número**, **Moeda (`R$`)**, **Data** e **Porcentagem**.
- Inserir e calcular equações matemáticas usando operadores aritméticos básicos:
  - Adição (`+`), Subtração (`-`), Multiplicação (`*`), Divisão (`/`) e Exponenciação (`^`).
- Compreender a ordem de precedência matemática e o uso de parênteses `( )`.
- Aplicar formatação visual básica (bordas, alinhamento, preenchimento, autoajuste de largura de colunas).
- Construir sua primeira planilha de controle de custos operacionais de hangaragem e combustível.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O que é uma Célula e como o Excel interpreta fórmulas?
- **Toda fórmula no Excel DEVE começar obrigatoriamente com o sinal de igualdade (`=`)**.
  - Se você digitar `10 + 5`, o Excel tratará como um texto estático.
  - Se você digitar `=10 + 5`, o Excel executará o cálculo e exibirá `15`.
- **Endereçamento de Células:** Em vez de fazer contas com números fixos (ex: `=1500 * 0.10`), usamos as referências das células onde os valores estão armazenados (ex: `=B4 * C4`). Assim, quando você altera o valor de entrada, toda a planilha é recalculada instantaneamente!

```
ANATOMIA DE UMA PLANILHA NO EXCEL:
       Colunas (Letras)
        A            B             C                 D
     +------------+-------------+-----------------+---------------------------+
 1   | HANGAR     | DIÁRIAS     | VALOR DIÁRIA    | TOTAL A PAGAR             |
     +------------+-------------+-----------------+---------------------------+
 2   | Hangar 01  | 5           | R$ 250,00       | =B2*C2   (Resultado: R$ 1.250,00)
 3   | Hangar 02  | 12          | R$ 180,00       | =B3*C3   (Resultado: R$ 2.160,00)
     +------------+-------------+-----------------+---------------------------+
```

### 2.2 Ordem de Precedência Matemática & Casos Críticos dos Operadores `^` e `-`
O Excel segue rigorosamente uma hierarquia de execução matemática:
1. **Parênteses `( )`** — Prioridade Máxima (isolam blocos e garantem a ordem desejada).
2. **Exponenciação `^`** e **Sinal Unário de Negação `-`**
3. **Multiplicação `*` e Divisão `/`** (avaliadas da esquerda para a direita)
4. **Adição `+` e Subtração Binária `-`** (avaliadas da esquerda para a direita)

#### ⚠️ Armadilha Clássica do Excel com o Operador de Negação `-` e Potência `^`:
No Excel, o operador unário de negação (ex: `-5`) tem precedência sobre a exponenciação:
- Se você digitar no Excel: `=-5^2`, o Excel calculará `(-5)^2 = 25`.
- Na matemática padrão escrita: $-5^2 = -(5^2) = -25$.
- **Boas Práticas:** Use SEMPRE parênteses explícitos para eliminar ambiguidades: `=-(5^2)` para $-25$ ou `=(-5)^2` para $25$.

#### ✈️ Aplicações Aeronáuticas dos Operadores `^` e `-`:
1. **Pressão Dinâmica Aerodinâmica ($q$):**
   $$q = \frac{1}{2} \cdot \rho \cdot V^2$$
   - No Excel: `=0.5 * B2 * C2^2` (onde `B2` é a densidade $\rho$ e `C2` é a velocidade $V$). A potência $V^2$ é calculada antes da multiplicação por $0.5 \cdot \rho$.
2. **Gradiente Térmico ISA (Atmosfera Padrão):**
   $$T = T_{0} - 0{,}0065 \cdot h$$
   - No Excel: `=15 - 0.0065 * A4` (onde `A4` é a altitude em metros). A multiplicação $0{,}0065 \cdot h$ ocorre antes da subtração dos $15^\circ\text{C}$ ao nível do mar.
3. **Saldo de Combustível em Voo (Fuel Remaining):**
   $$Combustivel_{final} = Combustivel_{inicial} - (Tempo \cdot Consumo)$$
   - No Excel: `=B4 - (C4 * D4)`. Os parênteses deixam o cálculo autodocumentado e seguro contra erros de interpretação.

---

### 2.3 Estatística Descritiva Aplicada: Média (`=MÉDIA`) vs. Mediana (`=MED`) na Manutenção
Ao analisar dados operacionais e de engenharia aeronáutica, escolher entre a **Média Aritmética** e a **Mediana** é crucial:

| Conceito | Função no Excel | O que calcula | Sensibilidade a Valores Extremos (Outliers) |
| :--- | :--- | :--- | :--- |
| **Média** | `=MÉDIA(intervalo)` | Soma de todos os valores dividida pelo número de observações. | **ALTA:** É fortemente distorcida por um único valor muito alto ou muito baixo. |
| **Mediana** | `=MED(intervalo)` | Valor central do conjunto de dados ordenado (50% dos dados estão abaixo e 50% acima). | **BAIXA (Robusta):** Não sofre influência de valores extremos isolados. |

#### ✈️ Estudo de Caso no Hangar: Custo de Ordens de Serviço (OS)
Imagine os custos de 6 manutenções realizadas no hangar na semana:
- OS 01 (Cessna 152 - Troca de Óleo): `R$ 1.200,00`
- OS 02 (Cessna 172 - Inspeção 50h): `R$ 1.500,00`
- OS 03 (Piper Cherokee - Revisão): `R$ 1.800,00`
- OS 04 (Cirrus SR22 - Manutenção Aviônica): `R$ 2.000,00`
- OS 05 (Beech Baron - Calibração): `R$ 2.500,00`
- OS 06 (King Air - *Overhaul* Completo de Turbina - **Outlier**): `R$ 120.000,00`

**Resultados no Excel:**
- **Média (`=MÉDIA(B2:B7)`):** `R$ 21.500,00` ❌ *(Distorce a realidade: nenhum serviço padrão custou 21 mil!)*
- **Mediana (`=MED(B2:B7)`):** `R$ 1.900,00` ✅ *(Representa com fidelidade o custo típico de uma manutenção comum no hangar).*

> **Regra de Decisão do Engenheiro/Técnico:**
> - Use **MÉDIA** quando precisar do **orçamento total** e fluxo financeiro global da oficina.
> - Use **MEDIANA** para definir **tempo padrão de atendimento**, prazos de entrega (*lead time*) e precificação de serviços rotineiros sem contaminação por eventos raros.

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Criando a Planilha de Custos Operacionais do Hangar

1. Abra o **Microsoft Excel** (no navegador pelo Microsoft 365 ou no Desktop).
2. Crie uma nova Pasta de Trabalho em branco.
3. Clique duas vezes na aba inferior chamada `Plan1` e renomeie para `Custos_Hangar`.
4. Digite o cabeçalho do relatório a partir da célula `A1`:
   - `A1`: `AEROCLUBE DE SOROCABA — CONTROLE DE HANGARAGEM E ABASTECIMENTO` (coloque em Negrito).
5. A partir da linha 3, preencha os cabeçalhos das colunas:
   - `A3`: `Prefixo`
   - `B3`: `Modelo da Aeronave`
   - `C3`: `Diárias Hangar`
   - `D3`: `Valor da Diária (R$)`
   - `E3`: `Litros Abastecidos (L)`
   - `F3`: `Preço por Litro (R$)`
   - `G3`: `Subtotal Hangar (R$)`
   - `H3`: `Subtotal Combustível (R$)`
   - `I3`: `Custo Total (R$)`

---

### Atividade 2: Inserção dos Dados de Teste

Preencha as linhas 4 a 8 com as informações abaixo:
- **Linha 4:** `PR-ABC` | `Cessna 172` | `4` | `150` | `120` | `11,50`
- **Linha 5:** `PT-KRT` | `Piper Seneca` | `10` | `280` | `350` | `11,50`
- **Linha 6:** `PR-FTE` | `Beech Baron` | `7` | `320` | `280` | `11,50`
- **Linha 7:** `PP-ZUL` | `Cirrus SR22` | `3` | `220` | `160` | `11,50`
- **Linha 8:** `PR-MNT` | `Cessna 152` | `15` | `120` | `90` | `11,50`

---

### Atividade 3: Construção das Fórmulas Aritméticas

1. **Subtotal Hangar (`G4`):** Multiplique a quantidade de diárias pelo valor da diária.
   - Digite na célula `G4`: `=C4*D4` e pressione `Enter`.
2. **Subtotal Combustível (`H4`):** Multiplique os litros pelo preço do litro.
   - Digite na célula `H4`: `=E4*F4` e pressione `Enter`.
3. **Custo Total (`I4`):** Some o subtotal do hangar com o subtotal do combustível.
   - Digite na célula `I4`: `=G4+H4` e pressione `Enter`.
4. **Arrastando com a Alça de Preenchimento:**
   - Selecione as três células calculadas (`G4`, `H4` e `I4`).
   - Posicione o cursor do mouse no quadradinho verde no canto inferior direito da seleção.
   - Dê um duplo clique ou arraste para baixo até a linha 8.

---

### Atividade 4: Formatação Profissional e Totais

1. **Formatação de Moeda (`R$`):**
   - Selecione as colunas de valores em dinheiro (colunas `D`, `F`, `G`, `H`, `I`).
   - Na guia **Página Inicial**, no grupo *Número*, clique no ícone de **Formato de Moeda** (`$`) ou selecione **Português (Brasil)**.
2. **Bordas e Alinhamentos:**
   - Selecione toda a tabela de `A3:I8`.
   - Clique no botão **Todas as Bordas**.
   - Centralize as colunas de Prefixo, Diárias e Litros.
3. **Linha de Totais:**
   - Na célula `A9`, digite: `TOTAL GERAL`.
   - Na célula `G9`, digite: `=SOMA(G4:G8)`.
   - Na célula `H9`, digite: `=SOMA(H4:H8)`.
   - Na célula `I9`, digite: `=SOMA(I4:I8)`.
   - Coloque a linha 9 em **Negrito**.

---

## 4. EXERCÍCIO DE FIXAÇÃO

Crie uma segunda aba na planilha chamada `Consumo_Treinamento`:
- Crie colunas para: `Piloto Aluno`, `Horas de Voo`, `Consumo por Hora (L/h)`, `Consumo Total de Combustível (L)`.
- Fórmulas:
  - `Consumo Total = Horas de Voo * Consumo por Hora`.
  - No final, calcule a média de consumo dos alunos com a fórmula `=MÉDIA(intervalo)`.

---

## 5. DICAS E ATALHOS RÁPIDOS NO EXCEL

| Atalho | O que faz |
| :--- | :--- |
| `Ctrl + Z` | Desfazer a última ação |
| `Ctrl + Y` | Refazer a última ação |
| `Alt + =` | Insere a função de Soma automática na célula |
| `Ctrl + Shift + $` | Formata o número selecionado como moeda (`R$`) |
| Duplo clique na divisão entre colunas | Ajusta automaticamente a largura da coluna ao maior texto |
