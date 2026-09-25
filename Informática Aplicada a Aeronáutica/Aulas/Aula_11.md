# ROTEIRO DE AULA EXPANDIDO — AULA 11
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 23/10/2026  
**Tema:** MS Excel VII — Pesquisa e Busca de Dados no Catálogo de Peças (IPC): Funções `=PROCX()` e `=PROCV()`  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** EAA-009 (Informação Técnica) e EAM-005 (Práticas de Manutenção)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender a importância de funções de pesquisa na automação de ordens de serviço e requisição de componentes de manutenção.
- Operar a função moderna `=PROCX()` do Microsoft 365.
- Operar a função clássica `=PROCV()` compreendendo sua sintaxe e regras de indexação de colunas.
- Integrar a busca de peças por código **Part Number (PN)** para preenchimento automático de Descrição, Preço Unitário e Localização no Almoxarifado.
- Prevenir erros de busca utilizando correspondência exata (`0` ou `FALSO`).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que funções de busca são vitais na aviação?
Em uma oficina de manutenção aeronáutica, o almoxarifado gerencia milhares de componentes com códigos alfanuméricos complexos (*Part Numbers* - PN). Digitar manualmente o nome e o preço de cada peça na Ordem de Serviço causa erros graves de estoque e faturamento.
Com as funções `PROCX` ou `PROCV`, o mecânico digita apenas o código da peça (ex: `PN-1045`) e a planilha preenche instantaneamente o nome, o fabricante e o valor unitário.

```
COMO FUNCIONA A BUSCA NO EXCEL:
  +----------------------+--------------------+---------------------------------------------+
  | Célula de Busca (PN) | Fórmula            | Tabela do Catálogo Geral de Peças (IPC)     |
  +----------------------+--------------------+---------------------------------------------+
  | [ 10-0123 ]          | =PROCX( ... ) ---->| PN         | DESCRIÇÃO          | PREÇO (R$) |
  |                      |                    | 10-0120    | Vela de Ignição    | R$ 280,00  |
  |                      | [Vela de Ignição]  | 10-0123    | Filtro de Óleo     | R$ 450,00  |
  +----------------------+--------------------+---------------------------------------------+
```

### 2.2 Comparação de Sintaxe

#### 1. Função Moderna: `=PROCX()` (Recomendada no Office 365)
`=PROCX( valor_pesquisado ; coluna_onde_pesquisar ; coluna_onde_está_o_resultado ; [se_não_encontrado] )`
- *Vantagem:* Simples, não depende da posição da coluna e permite mensagem personalizada se a peça não for encontrada.

#### 2. Função Clássica: `=PROCV()` (Compatibilidade universal)
`=PROCV( valor_pesquisado ; tabela_completa ; número_do_índice_da_coluna ; 0 )`
- *Atenção:* O valor pesquisado deve estar obrigatoriamente na primeira coluna da tabela selecionada, e o último argumento deve ser `0` (busca exata).

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção do Catálogo de Peças (IPC)

1. Abra o Excel e crie uma aba chamada `Catalogo_Pecas_IPC`.
2. Monte a base de dados do almoxarifado nas colunas `A` até `D`:
   - `A3`: `Part Number (PN)`
   - `B3`: `Descrição da Peça`
   - `C3`: `Prateleira / Almoxarifado`
   - `D3`: `Preço Unitário (R$)`

3. Preencha os itens do catálogo (Linhas 4 a 8):
   - `PN-101` | `Filtro de Óleo Motor Lycoming` | `Prat-A1` | `480,00`
   - `PN-102` | `Vela de Ignição Champion`     | `Prat-A2` | `290,00`
   - `PN-103` | `Pastilha de Freio Cleveland`  | `Prat-B1` | `750,00`
   - `PN-104` | `Pneu Trem Principal 6.00-6`   | `Prat-C3` | `1450,00`
   - `PN-105` | `Bateria Selada 24V Concorde`  | `Prat-D1` | `5200,00`

---

### Atividade 2: Construção da Ficha de Requisição de Peças na OS

1. Em uma segunda aba chamada `Requisicao_OS`:
2. Monte a tabela de requisição:
   - `A3`: `Item`
   - `B3`: `Part Number Solicitado (PN)`
   - `C3`: `Descrição (Automática)`
   - `D3`: `Localização (Automática)`
   - `E3`: `Preço Unitário (Automático)`
   - `F3`: `Qtd Solicitada`
   - `G3`: `Subtotal (R$)`

3. Na linha 4, digite o código de teste `PN-102` na célula `B4` e a quantidade `4` na célula `F4`.

---

### Atividade 3: Implementando a Busca com `=PROCX()`

1. **Descrição da Peça (`C4`):**
   `=PROCX(B4; Catalogo_Pecas_IPC!A4:A8; Catalogo_Pecas_IPC!B4:B8; "Peça Inexistente")`
2. **Localização no Almoxarifado (`D4`):**
   `=PROCX(B4; Catalogo_Pecas_IPC!A4:A8; Catalogo_Pecas_IPC!C4:C8; "-")`
3. **Preço Unitário (`E4`):**
   `=PROCX(B4; Catalogo_Pecas_IPC!A4:A8; Catalogo_Pecas_IPC!D4:D8; 0)`
4. **Subtotal (`G4`):**
   `=E4 * F4`

---

### Atividade 4: Implementando a Busca com `=PROCV()`

Em uma nova linha, teste a busca clássica com `PROCV`:
- Na célula `C5`:
  `=PROCV(B5; Catalogo_Pecas_IPC!A4:D8; 2; 0)` (retorna a 2ª coluna - Descrição).
- Na célula `E5`:
  `=PROCV(B5; Catalogo_Pecas_IPC!A4:D8; 4; 0)` (retorna a 4ª coluna - Preço).

---

## 4. EXERCÍCIO DE FIXAÇÃO EM SALA

Construa uma planilha de **Consulta Rápida de Aeronaves por Prefixo**:
- Crie uma tabela com 5 prefixos, modelos, ano de fabricação e número de série (MSN).
- Na área de consulta, o usuário digita o prefixo (ex: `PR-XYZ`) e duas células com `PROCX` retornam instantaneamente o modelo e o número de série da aeronave.

---

## 5. DICAS DE PRODUTIVIDADE NO EXCEL

- Ao selecionar intervalos em outra aba, não mude de aba até terminar de digitar os parênteses da fórmula.
- Se o `PROCV` retornar `#N/D`, verifique se o código pesquisado existe exatamente igual na primeira coluna da tabela.
