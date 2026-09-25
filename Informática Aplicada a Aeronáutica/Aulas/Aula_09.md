# ROTEIRO DE AULA EXPANDIDO — AULA 09
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 02/10/2026  
**Tema:** MS Excel V — Formatação Condicional Visual e Funções Lógicas Combinadas (`E`, `OU`, `SEERRO`)  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** EAM-004 (Metodologias de Manutenção) e EAM-007 (Gerenciamento da Manutenção)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Aplicar regras de **Formatação Condicional** para destacar automaticamente células com cores (Verde, Amarelo, Vermelho) e ícones visuais.
- Combinar testes lógicos múltiplos com a função `=E()` (todas as condições verdadeiras) e `=OU()` (pelo menos uma condição verdadeira).
- Prevenir erros visuais nas planilhas (`#DIV/0!`, `#N/D`, `#VALOR!`) utilizando a função protetora `=SEERRO()`.
- Construir um painel de monitoramento de status da frota com alertas visuais automatizados.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Funções Lógicas Auxiliares: `=E()` e `=OU()`
- **Função `=E(condição1; condição2; ...)`:** Retorna VERDADEIRO somente se **TODAS** as condições forem atendidas ao mesmo tempo.
  - *Exemplo:* Uma aeronave só pode voar se a manutenção estiver em dia **E** o piloto estiver com exame médico válido.
  - `=SE( E(A4="OK"; B4="OK") ; "DECOLAGEM AUTORIZADA" ; "VOO PROIBIDO" )`
- **Função `=OU(condição1; condição2; ...)`:** Retorna VERDADEIRO se **PELO MENOS UMA** das condições for atendida.
  - *Exemplo:* Alerta se o combustível estiver abaixo do mínimo **OU** a temperatura do óleo estiver alta.
  - `=SE( OU(C4 < 50; D4 > 110) ; "ALERTA CRÍTICO" ; "SISTEMAS NORMAIS" )`

### 2.2 Tratamento de Erros com `=SEERRO()`
Quando uma fórmula tenta dividir por zero ou busca um dado inexistente, o Excel exibe mensagens de erro feias como `#DIV/0!`.
- A função `=SEERRO(cálculo; "mensagem alternativa")` captura o erro e exibe uma mensagem amigável:
  `=SEERRO( Custo / Horas_Voadas ; 0 )` ou `=SEERRO( Custo / Horas_Voadas ; "Não Voou" )`.

### 2.3 Formatação Condicional
A formatação condicional altera a cor de fundo, cor do texto ou bordas da célula automaticamente conforme o valor contido nela.
- *Texto igual a "VENCIDO":* Fundo Vermelho claro com texto Vermelho escuro.
- *Texto igual a "LIBERADO":* Fundo Verde claro com texto Verde escuro.

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construindo o Painel de Alerta de Manutenção e Tripulação

1. Abra o Excel e crie uma nova aba chamada `Painel_Alertas_Frota`.
2. Monte os cabeçalhos a partir da linha 3:
   - `A3`: `Prefixo`
   - `B3`: `Inspeção Célula (Horas)`
   - `C3`: `Inspeção Motor (Horas)`
   - `D3`: `Status Manutenção` (Função `E`)
   - `E3`: `Alerta de Sistema` (Função `OU`)
   - `F3`: `Custo por Hora Voadas` (Função `SEERRO`)

3. Preencha os dados nas linhas 4 a 8:
   - **Linha 4:** `PR-AAA` | `85` | `90` | *(fórmulas)*
   - **Linha 5:** `PT-BBB` | `105`| `60` | *(fórmulas)*
   - **Linha 6:** `PR-CCC` | `95` | `110`| *(fórmulas)*
   - **Linha 7:** `PP-DDD` | `40` | `30` | *(fórmulas)*
   - **Linha 8:** `PR-EEE` | `100`| `100`| *(fórmulas)*

---

### Atividade 2: Fórmulas Lógicas e SEERRO

1. **Status de Manutenção com `=E()` na célula `D4`:**
   - A aeronave só está "LIBERADA" se as horas da Célula $\le 100$ **E** as horas do Motor $\le 100$:
   - Digite: `=SE(E(B4<=100; C4<=100); "LIBERADA"; "INTERDITADA")`
   - Arraste até a linha 8.

2. **Alerta de Sistema com `=OU()` na célula `E4`:**
   - Se a Célula $\ge 95$ **OU** o Motor $\ge 95$, exibir "ALERTA PRÓXIMO DO LIMITE", senão "OK":
   - Digite: `=SE(OU(B4>=95; C4>=95); "ALERTA"; "NORMAL")`
   - Arraste até a linha 8.

3. **Custo por Hora com Proteção `=SEERRO()`:**
   - Suponha custo total em `G4` e horas em `H4`.
   - Digite: `=SEERRO(G4 / H4; 0)` para garantir que se as horas forem zero, a célula exiba `0` em vez de `#DIV/0!`.

---

### Atividade 3: Aplicação de Formatação Condicional Visual

1. Selecione a coluna de Status de Manutenção (`D4:D8`).
2. Acesse a guia **Página Inicial** -> **Formatação Condicional** -> **Regras de Realce das Células** -> **Texto que Contém...**
3. Digite: `LIBERADA` e escolha o formato **Preenchimento Verde com Texto Verde Escuro**. Clique em OK.
4. Com as células ainda selecionadas, clique novamente em **Formatação Condicional** -> **Texto que Contém...**
5. Digite: `INTERDITADA` e escolha o formato **Preenchimento Vermelho Claro com Texto Vermelho Escuro**. Clique em OK.
6. **Teste:** Altere as horas do motor da aeronave `PP-DDD` para 120 e veja a cor da célula mudar instantaneamente para vermelho!

---

## 4. EXERCÍCIO DE FIXAÇÃO EM SALA

Monte um sistema de controle de calibração de torquímetros e ferramentas de precisão:
- Colunas: `Código da Ferramenta`, `Dias desde a última calibração`, `Uso Diário (Sim/Não)`.
- Regra: Se os dias forem $\ge 180$ **OU** uso diário for "Sim" e dias $\ge 90$, a ferramenta deve ir para calibração.
- Aplique formatação condicional com cores vermelha e verde.

---

## 5. DICAS DE ATALHOS NO EXCEL

| Atalho | Ação |
| :--- | :--- |
| `Alt + C + R` | Atalho de teclado para abrir o menu de Formatação Condicional |
| `F2` | Entra no modo de edição da célula ativa |
| `Esc` | Cancela a edição da fórmula sem salvar alterações |
