# ROTEIRO DE AULA EXPANDIDO — AULA 13
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 13/11/2026  
**Tema:** Gestão de Projetos no MS Excel II — Modelagem de Redes PERT/CPM, Cálculo de Folgas, Caminho Crítico e Mini-PBL 4  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** EAM-007 (Gerenciamento da Manutenção / Planejamento e Controle da Manutenção - PCM) e Projetos Integradores  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender a modelagem matemática e lógica do **Método do Caminho Crítico (CPM - Critical Path Method)** e das **Redes PERT**.
- Implementar o algoritmo CPM completo dentro de uma planilha do Microsoft Excel:
  1. **Passo para Frente (*Forward Pass*):** Cálculo do Início Mais Cedo ($IC$) e Término Mais Cedo ($TC$).
  2. **Passo para Trás (*Backward Pass*):** Cálculo do Início Mais Tarde ($IT$) e Término Mais Tarde ($TT$).
  3. **Cálculo da Folga Total ($FT = TT - TC = IT - IC$).**
- Identificar automaticamente as **Tarefas Críticas ($FT = 0$)** utilizando fórmulas `=SE()` e regras de Formatação Condicional com destaque em vermelho.
- Planejar a alocação de recursos de mão de obra técnica e ferramentas.
- Executar o **Mini-PBL 4** (Planejamento e Otimização do Cronograma de Manutenção Tipo C de Aeronaves no Excel).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O que é o Caminho Crítico (CPM)?
- **Caminho Crítico:** É a sequência mais longa de tarefas dependentes do projeto.
- **Propriedade Matemática:** As tarefas críticas possuem **FOLGA TOTAL ZERO ($FT = 0$)**. Qualquer atraso em uma tarefa crítica atrasa imediatamente a entrega final da aeronave!
- **Tarefas com Folga ($FT > 0$):** Possuem margem de manobra para atraso sem comprometer a data de entrega final.

```
ALGORITMO CPM IMPLEMENTADO NO EXCEL:
 +------------------------------------------------------------------------------------+
 | 1. Término Mais Cedo (TC):   = Início Mais Cedo (IC) + Duração                     |
 | 2. Início Mais Cedo (IC):    = MÁXIMO(TC de todas as predecessoras)                |
 | 3. Início Mais Tarde (IT):   = Término Mais Tarde (TT) - Duração                   |
 | 4. Término Mais Tarde (TT):  = MÍNIMO(IT de todas as sucessoras)                   |
 | 5. Folga Total (FT):         = TT - TC   (Se FT = 0 -> TAREFA CRÍTICA!)           |
 +------------------------------------------------------------------------------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Estruturação da Tabela de Cálculo CPM no Excel

1. Monte a grade de colunas no Excel:
   - `A3`: `ID` | `B3`: `Tarefa` | `C3`: `Duração (d)` | `D3`: `Predecessora` | `E3`: `IC` | `F3`: `TC` | `G3`: `IT` | `H3`: `TT` | `I3`: `Folga Total` | `J3`: `Status Crítico`
2. Cadastre 6 atividades de uma revisão geral:
   - Linha 4: `A` | `B4`: `Inspeção Inicial e Desmontagem` | `C4`: `3` | `D4`: `-`
   - Linha 5: `B` | `B5`: `Inspeção Estrutural da Célula`  | `C5`: `5` | `D5`: `A`
   - Linha 6: `C` | `B6`: `Revisão do Motor (Overhaul)`   | `C6`: `8` | `D6`: `A` (Caminho mais longo!)
   - Linha 7: `D` | `B7`: `Troca de Aviônicos`            | `C7`: `2` | `D7`: `B`
   - Linha 8: `E` | `B8`: `Remontagem e Testes no Solo`   | `C8`: `4` | `D8`: `C; D`
   - Linha 9: `F` | `B9`: `Voo de Experiência e Liberação`| `C9`: `1` | `D9`: `E`

---

### Atividade 2: Fórmulas do Passo para Frente e Passo para Trás

1. **Passo para Frente (Cedo):**
   - Na linha 4 (Tarefa A): `E4` (IC) = `0` | `F4` (TC) = `=E4 + C4` (`3 dias`).
   - Na linha 5 (Tarefa B): `E5` (IC) = `=F4` | `F5` (TC) = `=E5 + C5` (`8 dias`).
   - Na linha 6 (Tarefa C): `E6` (IC) = `=F4` | `F6` (TC) = `=E6 + C6` (`11 dias`).
   - Na linha 7 (Tarefa D): `E7` (IC) = `=F5` | `F7` (TC) = `=E7 + C7` (`10 dias`).
   - Na linha 8 (Tarefa E - depende de C e D): `E8` (IC) = `=MÁXIMO(F6; F7)` (`11 dias`) | `F8` (TC) = `=E8 + C8` (`15 dias`).
   - Na linha 9 (Tarefa F): `E9` (IC) = `=F8` | `F9` (TC) = `=E9 + C9` (`16 dias`).
2. **Passo para Trás (Tarde - Inicia no final do projeto em 16 dias):**
   - Na linha 9 (Tarefa F): `H9` (TT) = `16` | `G9` (IT) = `=H9 - C9` (`15`).
   - Na linha 8 (Tarefa E): `H8` (TT) = `=G9` (`15`) | `G8` (IT) = `=H8 - C8` (`11`).
   - Na linha 6 (Tarefa C): `H6` (TT) = `=G8` (`11`) | `G6` (IT) = `=H6 - C6` (`3`).
   - Na linha 7 (Tarefa D): `H7` (TT) = `=G8` (`11`) | `G7` (IT) = `=H7 - C7` (`9`).
   - Na linha 5 (Tarefa B): `H5` (TT) = `=G7` (`9`)  | `G5` (IT) = `=H5 - C5` (`4`).
   - Na linha 4 (Tarefa A): `H4` (TT) = `=MÍNIMO(G5; G6)` (`3`) | `G4` (IT) = `=H4 - C4` (`0`).

---

### Atividade 3: Cálculo da Folga e Destaque Visual do Caminho Crítico

1. Na coluna `I4` (Folga Total):
   `=H4 - F4`
   *(Observe os resultados: Tarefa A = 0; Tarefa B = 1 dia de folga; Tarefa C = 0; Tarefa D = 1 dia de folga; Tarefas E e F = 0).*
2. Na coluna `J4` (Status Crítico):
   `=SE(I4 = 0; "CAMINHO CRÍTICO"; "NÃO CRÍTICA")`
3. Aplique **Formatação Condicional**:
   - Destaque em **Vermelho Escuro com Texto Branco** as linhas com status `"CAMINHO CRÍTICO"`.
   - As tarefas críticas do projeto são: **A -> C -> E -> F (Duração Total = 16 dias)**!

---

## 4. DESAFIO PRÁTICO (MINI-PBL 4)

**Enunciado do Mini-PBL 4 (Peso: ~7,5% da Média Final):**
Em duplas, desenvolva o **Planejamento de Cronograma e Otimização de Manutenção Tipo C de Aeronave Comercial** no MS Excel, utilizando a sequência técnica de tarefas de manutenção pesada extraída do manual oficial [`docs/FAA-H-8083-31B - MANUAL DO TECNICO DE MANURENÇÃO DE AERONAVE.pdf`](docs/FAA-H-8083-31B%20-%20MANUAL%20DO%20TECNICO%20DE%20MANUREN%C3%87%C3%83O%20DE%20AERONAVE.pdf):

1. **Tabela de Atividades:** Com no mínimo 8 atividades detalhadas com durações em dias e lista de predecessoras.
2. **Cálculo Matemático Completo do CPM:** Colunas para $IC, TC, IT, TT$ e $FT$ totalmente calculadas por fórmulas.
3. **Destaque do Caminho Crítico:** Regra de formatação condicional vermelha para as tarefas críticas.
4. **Gráfico de Gantt Integrado:** Gráfico de Gantt gerado ao lado exibindo visualmente a duração das tarefas e a data final estimada de retorno ao serviço.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `MÁXIMO(...)` | Encontra o maior tempo de término entre predecessoras |
| `MÍNIMO(...)` | Encontra o menor tempo de início entre sucessoras no cálculo regressivo |
| `Alt + =` | Insere soma rápida para conferência de durações |
