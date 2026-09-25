# ROTEIRO DE AULA EXPANDIDO — AULA 02
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 14/08/2026  
**Tema:** MS Word Técnico — Normas ABNT (Parte 1): Configuração de Página, Margens, Tipografia e Estilos de Texto  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Word)  
**Articulação com o PPC:** COE-001 (Comunicação Escrita), Projetos Integradores I a IV (TAM-001 a TAM-004) e Trabalho de Graduação (TG/TCC)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Operar a interface do **Microsoft Word** voltada para a redação técnica e acadêmica.
- Configurar o documento segundo os padrões da **ABNT (NBR 14724)**: Tamanho do Papel (A4) e Margens (Superior: 3,0 cm, Esquerda: 3,0 cm, Inferior: 2,0 cm, Direita: 2,0 cm).
- Padronizar parágrafos técnicos: Alinhamento Justificado, Espaçamento entre linhas de 1,5 linha, Recuo de primeira linha de 1,25 cm e espaçamento entre parágrafos.
- Compreender por que a formatação manual (parágrafo por parágrafo) é proibida em engenharia.
- Criar e gerenciar a hierarquia de **Estilos de Parágrafo**:
  - **Normal** (Corpo de Texto)
  - **Título 1** (Seções Principais)
  - **Título 2** (Subseções)
- Utilizar o **Painel de Navegação (`Ctrl + F` / Títulos)** para inspecionar a hierarquia do texto.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que o uso de Estilos é obrigatório em Engenharia?
Formatar relatórios de forma manual (selecionando cada parágrafo com o mouse para trocar a fonte ou colocar negrito) gera inconsistências visuais graves e impede a geração do Sumário Automático.
- **Estilos (Styles):** São regras computacionais globais associadas aos blocos de texto.
  - Se você alterar o estilo `Título 1`, TODOS os títulos principais de um relatório de 50 páginas são atualizados simultaneamente em 1 segundo.
  - O MS Word utiliza os Estilos para estruturar o **Painel de Navegação** e gerar o Sumário dinâmico.

```
HIERARQUIA DE ESTILOS NO WORD:
 ├── [Título 1] 1. INTRODUÇÃO E OBJETIVOS TÉCNICOS (Arial 14pt, Negrito, MAIÚSCULAS)
 │     ├── [Título 2] 1.1 Descrição da Célula e Sistemas (Arial 12pt, Negrito)
 │     │     └── [Normal / Corpo] Parágrafos com recuo de 1,25 cm, Justificado, 1,5 linha
 └── [Painel de Navegação] Permite clicar e navegar instantaneamente pelos capítulos
```

### 2.2 Padrão ABNT de Margens e Tipografia

| Parâmetro | Padrão ABNT (NBR 14724) | Configuração no Word |
| :--- | :--- | :--- |
| **Papel** | A4 ($21{,}0\text{ cm} \times 29{,}7\text{ cm}$) | Guia *Layout -> Tamanho -> A4* |
| **Margem Superior** | 3,0 cm | Guia *Layout -> Margens -> Personalizadas* |
| **Margem Esquerda** | 3,0 cm | Guia *Layout -> Margens -> Personalizadas* |
| **Margem Inferior** | 2,0 cm | Guia *Layout -> Margens -> Personalizadas* |
| **Margem Direita** | 2,0 cm | Guia *Layout -> Margens -> Personalizadas* |
| **Fonte Padrão** | Arial ou Calibri ou Times New Roman | Tamanho 12 pt no texto |
| **Espaçamento Entrelinhas**| 1,5 linha | *Formatar Parágrafo -> Espaçamento 1,5* |
| **Recuo de 1ª Linha** | 1,25 cm | *Formatar Parágrafo -> Especial: 1ª linha em 1,25 cm* |

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Configuração Inicial da Página e Margens

1. Abra o Microsoft Word e inicie um documento em branco.
2. Acesse a guia **Layout** -> clique em **Tamanho** -> selecione **A4**.
3. Na mesma guia, clique em **Margens** -> **Margens Personalizadas...**:
   - *Superior:* `3,0 cm`
   - *Esquerda:* `3,0 cm`
   - *Inferior:* `2,0 cm`
   - *Direita:* `2,0 cm`
4. Clique em **OK**.

---

### Atividade 2: Configuração e Padronização dos Estilos de Texto

1. Na guia **Página Inicial**, localize a galeria de **Estilos**:
2. **Configurando o Estilo Normal (Corpo de Texto):**
   - Clique com o botão direito sobre o botão **Normal** -> selecione **Modificar...**
   - Fonte: *Arial* ou *Calibri* | Tamanho: *12 pt* | Cor: *Automático (Preto)*.
   - Alinhamento: **Justificado** (botão com todas as linhas do mesmo tamanho).
   - Clique no botão inferior esquerdo **Formatar** -> **Parágrafo...**:
     - *Recuo Especial:* escolha **Primeira linha** em **1,25 cm**.
     - *Espaçamento Antes:* `0 pt` | *Depois:* `6 pt`.
     - *Espaçamento entre linhas:* **1,5 linha**.
     - Clique em **OK** duas vezes para salvar.

3. **Configurando o Estilo Título 1:**
   - Clique com o botão direito sobre **Título 1** -> **Modificar...**
   - Fonte: *Arial* | Tamanho: *14 pt* | **Negrito** | Cor: *Automático (Preto)*.
   - Clique em **Formatar** -> **Parágrafo...**:
     - *Espaçamento Antes:* `12 pt` | *Depois:* `6 pt`.
     - *Espaçamento entre linhas:* **1,5 linha** | *Recuo Especial:* **Nenhum**.
   - Clique em **OK** duas vezes.

4. **Configurando o Estilo Título 2:**
   - Clique com o botão direito sobre **Título 2** -> **Modificar...**
   - Fonte: *Arial* | Tamanho: *12 pt* | **Negrito** | Cor: *Automático (Preto)*.
   - *Espaçamento Antes:* `6 pt` | *Depois:* `6 pt` | *Recuo Especial:* **Nenhum**.
   - Clique em **OK**.

---

### Atividade 3: Aplicação dos Estilos no Texto Técnico

1. Copie e cole os textos das primeiras seções do relatório técnico de introdução à aviação.
2. Selecione os títulos principais (ex: `1. INTRODUÇÃO E HISTÓRIA`, `2. REGULAMENTAÇÃO AERONÁUTICA`) e clique no botão **Título 1** (ou atalho `Ctrl + Alt + 1`).
3. Selecione as subseções (ex: `1.1 O Pioneirismo de Santos Dumont`) e clique no botão **Título 2** (ou atalho `Ctrl + Alt + 2`).
4. Selecione os parágrafos explicativos e clique no estilo **Normal** (ou atalho `Ctrl + Shift + N`).
5. Abra o **Painel de Navegação** (`Ctrl + F` -> aba *Títulos*) e confira o mapa hierárquico do documento!

---

## 4. ATIVIDADE DE FIXAÇÃO EM SALA

- Salve o arquivo na sua pasta com o nome `Relatorio_ABNT_Aula02.docx`.
- Deixe o documento formatado e salvo na nuvem/OneDrive institucional, pois **ele será continuado na Aula 03** com a criação da Capa, Quebras de Seção, Numeração ABNT e Sumário Automático!

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO WORD

| Atalho | Ação |
| :--- | :--- |
| `Ctrl + Alt + 1` | Aplica o estilo **Título 1** ao parágrafo atual |
| `Ctrl + Alt + 2` | Aplica o estilo **Título 2** ao parágrafo atual |
| `Ctrl + Shift + N` | Aplica o estilo **Normal** |
| `Ctrl + J` | Alinha o texto como **Justificado** |
| `Ctrl + F` | Abre o Painel de Navegação e Busca |
| `Ctrl + B` ou `Ctrl + S` | Salva o documento |
