# ROTEIRO DE AULA EXPANDIDO — AULA 07
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Curso:** Curso Superior de Tecnologia em Manutenção de Aeronaves (Fatec Sorocaba)  
**Data:** 18/09/2026  
**Tema:** MS Excel III — Modelagem de Dados em Manutenção Aeronáutica: Relatório de Pesagem em Hangar, Modificação de Aviônicos (STC) & Referências Absolutas (`$`)  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** EAA-015 (Peso e Balanceamento), MAN-102 (Regulamentação e Manutenção RBAC 43/145) e CAL-201 (Cálculo Aplicado)  

**Arquivos de Apoio e Planilhas da Aula:**
- 📥 **Planilha do Aluno (Prática de Laboratório):** [`Aula_07_Excel_Modelagem_Peso_Balanceamento.xlsx`](../Exercicios/Aula_07_Excel_Modelagem_Peso_Balanceamento.xlsx)
- 🔑 **Planilha Resolvida (Gabarito do Professor):** [`Aula_07_Excel_Modelagem_Peso_Balanceamento_Resolvido.xlsx`](../Exercicios/Aula_07_Excel_Modelagem_Peso_Balanceamento_Resolvido.xlsx)
- 🐍 **Script Gerador das Planilhas:** [`gerar_planilha_aula07.py`](../Exercicios/gerar_planilha_aula07.py)
- 📖 **Manual de Referência Técnica (FAA):** [`FAA-H-8083-1B - PESO E BALANCEAMENTO.pdf`](../docs/FAA-H-8083-1B%20-%20PESO%20E%20BALANCEAMENTO.pdf)

---

## 1. OBJETIVOS DE APRENDIZAGEM (MANUTENÇÃO AERONÁUTICA)
Ao final desta aula, o futuro tecnólogo em manutenção de aeronaves será capaz de:
1. Modelar planilhas oficiais de **Pesagem e Balanceamento em Hangar** conforme exigido pelo **RBAC 43**, **RBAC 145** e manual **FAA-H-8083-1B**.
2. Dominar a aplicação prática de **Referências Relativas** e **Referências Absolutas (`$`)** com a tecla de atalho **`F4`**, compreendendo por que parâmetros de certificação devem ser travados.
3. Descontar **taras calibradas de calços e macacos** sobre balanças eletrônicas fixando a célula de tara com `$`.
4. Calcular o **Peso Básico Vazio (BEW - Basic Empty Weight)** e o **Centro de Gravidade Vazio (EWCG - Empty Weight Center of Gravity)**.
5. Calcular a alteração de peso e balanceamento pós-modificação de grande porte (**Major Alteration / STC / Form 337**), computando itens removidos ($-P, -M$) e instalados ($+P, +M$).
6. Determinar a **Carga Útil Disponível (Useful Load)** a partir do **MTOW** homologado no Certificado de Tipo (**TCDS**) e emitir o **Parecer de Retorno ao Serviço (RTS - Return to Service)**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA DE MANUTENÇÃO & COMPUTAÇÃO

### 2.1 A Pesagem Periódica de Manutenção em Hangar
Conforme os regulamentos aeronáuticos da ANAC (RBAC 43 / RBAC 121 / RBAC 135) e da FAA:
- As aeronaves devem ser pesadas periodicamente em oficina homologada (ou após grandes reparos, repintura ou alterações estruturais).
- A pesagem é realizada com a aeronave nivelada em seus eixos longitudinal e transversal (usando nível de bolha ou prumo nos parafusos de nivelamento de fábrica) sobre **três células de carga calibradas** (Balança Esquerda [LMLG], Balança Direita [RMLG] e Balança de Nariz [NLG]).
- O combustível deve ser completamente drenado até o nível de **Combustível Inutilizável (Unusable Fuel)**, e os reservatórios de óleo e fluidos devem estar nos níveis padrão de pesagem.

$$\text{Peso Líquido da Balança} = \text{Leitura Bruta} - \text{Tara Calibrada dos Calços / Macacos}$$
$$\text{Momento } (M) = \text{Peso Líquido } (P) \times \text{Braço da Estação da Balança } (B)$$
$$\text{Posição do } EWCG = \frac{\sum \text{Momentos Líquidos}}{\sum \text{Pesos Líquidos}} = \frac{M_{\text{vazio}}}{P_{\text{vazio}}}$$
$$\text{Carga Útil (Useful Load)} = \text{MTOW Homologado (TCDS)} - \text{Peso Básico Vazio (BEW)}$$

---

### 2.2 O Uso do Cifrão (`$`) em Cálculos de Manutenção
No Excel, as fórmulas padrão se adaptam ao serem copiadas (**Referências Relativas**). Entretanto, formulários de manutenção técnica dependem de **valores normativos e calibrações de laboratório** que devem permanecer rigorosamente estáticos:

| Referência | Exemplo | Papel na Oficina / Hangar |
| :--- | :---: | :--- |
| **Relativa** | `C13` | Multiplicação de peso líquido por braço: `=C13*D13` (muda para C14*D14 ao descer a linha). |
| **Absoluta Total** | `$C$7` | **Desconto de Tara**: `=B13-$C$7`. A célula $C$7 (tara dos calços) permanece travada para todos os pontos de pesagem. |
| **Absoluta Total** | `$C$5` | **Carga Útil Homologada**: `=$C$5-C17`. O MTOW nunca muda e deve ser fixado com `$`. |
| **Absoluta Total** | `$C$8` | **Fator de Conversão SI**: `=C21*$C$8`. Multiplicação pelo fator oficial $1\text{ lb} = 0{,}453592\text{ kg}$. |

> [!TIP]
> **Atalho no Teclado do Mecânico/Projetista:** Ao clicar sobre uma célula na barra de fórmulas, pressione **`F4`** para alternar instantaneamente entre referências relativas e absolutas (`C7` $\to$ `$C$7`).

---

## 3. ESTRUTURA DAS PLANILHAS DA AULA (PASTA DE TRABALHO)

A pasta de trabalho [`Aula_07_Excel_Modelagem_Peso_Balanceamento.xlsx`](../Exercicios/Aula_07_Excel_Modelagem_Peso_Balanceamento.xlsx) contém 4 abas estruturadas:

```
PASTA DE TRABALHO (OFICINA DE MANUTENÇÃO AERONÁUTICA):
├── 00_Guia_Manutencao_e_Ref_Abs   (Manual de normas RBAC/FAA, tabela de sintaxe do $ e atalhos F4)
├── Ativ1_Pesagem_Hangar_EWCG     [PLANILHA GUIADA 1 - Fazer junto com o professor]
├── Ativ2_Modificacao_Avionicos    [PLANILHA GUIADA 2 - Fazer junto com o professor]
└── Ativ3_Exercicio_Revisao_Geral  [EXERCÍCIO DE FIXAÇÃO - Resolução individual ou em duplas]
```

---

### 3.1 Planilha Guiada 1: `Ativ1_Pesagem_Hangar_EWCG` (Fazer Junto)
*Determinação do Peso Vazio (BEW) e CG Vazio (EWCG) de um Cessna 172 Skyhawk no hangar de manutenção.*

1. **Quadro de Parâmetros de Manutenção (Linhas 4 a 9):**
   - MTOW no TCDS: `$C$5` ($2.550\text{ lb}$)
   - Limite Dianteiro de EWCG: `$C$6` ($82{,}0\text{ pol}$)
   - Tara Calibrada dos Calços/Macacos da Balança: `$C$7` ($12{,}0\text{ lb}$) — *Parâmetro a ser travado com $*$!
   - Limite Traseiro de EWCG: `$C$8` ($86{,}5\text{ pol}$)
2. **Leituras das Balanças e Fórmulas (Linhas 12 a 17):**
   - Trem Principal Esquerdo (LMLG): Leitura Bruta $685{,}0\text{ lb}$ $\to$ Peso Líquido `=B13-$C$7` $\to$ Braço $90{,}5\text{ pol}$.
   - Trem Principal Direito (RMLG): Leitura Bruta $692{,}0\text{ lb}$ $\to$ Peso Líquido `=B14-$C$7` $\to$ Braço $90{,}5\text{ pol}$.
   - Trem de Nariz (NLG): Leitura Bruta $311{,}0\text{ lb}$ $\to$ Peso Líquido `=B15-$C$7` $\to$ Braço $42{,}0\text{ pol}$.
   - Dedução do Combustível Inutilizável Drenado: $-18{,}0\text{ lb}$ $\to$ Braço $95{,}0\text{ pol}$.
   - Totais de Hangar: `=SOMA(C13:C16)` ($1.642{,}0\text{ lb}$) e `=SOMA(E13:E16)` ($135.034{,}0\text{ lb.pol}$).
3. **Painel de Liberação Técnica (Linhas 20 a 24):**
   - $EWCG$: `=E17/C17` ($82{,}24\text{ pol}$ — dentro da faixa do TCDS de $82{,}0$ a $86{,}5\text{ pol}$).
   - Nova Carga Útil Disponível: `=$C$5-C17` ($908{,}0\text{ lb}$ disponíveis com referência absoluta `$C$5`).
   - Parecer de Retorno ao Serviço: Status `LIBERADO RTS` (Aprovado).

---

### 3.2 Planilha Guiada 2: `Ativ2_Modificacao_Avionicos` (Fazer Junto)
*Alteração de Peso e Balanceamento pós-Instalação de Glass Cockpit e Bateria Leve (Oficina RBAC 145).*

1. **Parâmetros da Modificação (Linhas 4 a 8):**
   - MTOW da Célula: `$C$5` ($2.550\text{ lb}$)
   - Limites de EWCG: `$C$6` ($82{,}0\text{ pol}$) e `$C$7` ($86{,}5\text{ pol}$)
   - Fator lb $\to$ kg: `$C$8` ($0{,}453592$) e Fator pol $\to$ mm: `$C$9` ($25{,}4000$)
2. **Registro de Remoções (Sinal Negativo) e Instalações (Sinal Positivo):**
   - Base Inicial (Caderneta): $+1.642{,}0\text{ lb}$ @ $82{,}24\text{ pol}$.
   - **Remoções:** Rádio VHF analógico ($-15{,}0\text{ lb}$ @ $56{,}0\text{ pol}$), ADF com antena ($-18{,}0\text{ lb}$ @ $62{,}0\text{ pol}$), Sistema pneumático de vácuo ($-12{,}5\text{ lb}$ @ $45{,}0\text{ pol}$) e Bateria pesada de chumbo ($-28{,}0\text{ lb}$ @ $32{,}0\text{ pol}$).
   - **Instalações:** Display eletrônico digital GI-275 ($+4{,}5\text{ lb}$ @ $55{,}0\text{ pol}$), GPS IFR GTN-650Xi ($+7{,}8\text{ lb}$ @ $56{,}5\text{ pol}$) e Bateria leve de Lítio TB17 ($+14{,}2\text{ lb}$ @ $32{,}0\text{ pol}$).
3. **Resultados e Benefícios de Engenharia:**
   - Novo Peso Vazio (Novo BEW): `=SOMA(C13:C20)` ($1.595{,}0\text{ lb}$ — **economia de 47 lb de peso morto!**).
   - Novo EWCG: `=E21/C21` ($83{,}37\text{ pol}$).
   - Nova Carga Útil Disponível com `$`: `=$C$5-C21` ($955{,}0\text{ lb}$ — ganho de $47\text{ lb}$ de carga útil útil para os pilotos e combustível!).
   - Novo Peso em Quilogramas: `=C21*$C$8` ($723{,}48\text{ kg}$).

---

### 3.3 Planilha de Exercício: `Ativ3_Exercicio_Revisao_Geral` (Fixação)
*Revisão Geral (Overhaul) e Repintura Completa de um bimotor Beechcraft Baron 58.*

1. **Cenário de Manutenção:**
   Após a revisão geral dos dois motores Continental IO-520, repintura poliuretano de alta densidade e instalação de radar meteorológico de nariz, o aluno deve atuar como Inspetor de Manutenção e elaborar o relatório de pesagem oficial.
2. **Dados de Entrada e Aplicação do `$:`**
   - MTOW Bimotor: `$C$5` ($5.400\text{ lb}$)
   - Limites TCDS: `$C$6` ($84{,}0\text{ pol}$) e `$C$7` ($88{,}5\text{ pol}$)
   - Tara dos Macacos de Pesagem: `$C$8` ($15{,}0\text{ lb}$) — *Obrigatório descontar com $*!
   - Fator lb $\to$ kg: `$C$9` ($0{,}453592$) e pol $\to$ m: `$C$10` ($0{,}0254$)
3. **Tarefas do Aluno:**
   - Descontar a tara das balanças LMLG, RMLG e NLG usando referência absoluta `-$C$8`.
   - Somar os pesos para achar o novo BEW ($3.557{,}0\text{ lb}$) e momentos ($310.865{,}0\text{ lb.pol}$).
   - Calcular o novo EWCG ($87{,}39\text{ pol}$) e a nova Carga Útil (`=$C$5-C20` $= 1.843{,}0\text{ lb}$).
   - Converter para unidades métricas (kg e m) com `$C$9` e `$C$10`.
   - **Diagnóstico:** O EWCG ($87{,}39\text{ pol}$) cumpre a envoltória do manual ($84{,}0$ a $88{,}5\text{ pol}$). A Ordem de Serviço é **APROVADA PARA RETORNO AO SERVIÇO (RTS)**!

---

## 4. GUIA RÁPIDO DE TECLAS E ATALHOS NO LABORATÓRIO

| Ação | Atalho do Teclado | Função / Resultado |
| :--- | :---: | :--- |
| **Alternar Referência ($)** | `F4` | Alterna entre `C7`, `$C$7`, `C$7`, `$C7` |
| **Somar Rapidamente** | `Alt + =` | Insere a função `=SOMA()` na coluna |
| **Formatar com 2 Decimais** | `Ctrl + Shift + 1` | Aplica formato numérico padrão de manutenção |
| **Formatar como Porcentagem** | `Ctrl + Shift + 5` | Aplica o formato `0.0%` |
| **Destacar Totais em Negrito** | `Ctrl + N` | Destaca laudos e totais |
| **Preencher Intervalo** | `Ctrl + Enter` | Replica a fórmula nas células selecionadas |

