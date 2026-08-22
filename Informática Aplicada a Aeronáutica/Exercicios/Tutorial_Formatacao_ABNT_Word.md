# GUIA PRÁTICO ILUSTRADO: FORMATAÇÃO ABNT NO MICROSOFT WORD
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Instituição:** Fatec Sorocaba — CST em Manutenção de Aeronaves  
**Professor:** André Souza  
**Arquivo Base de Exemplo:** [`Exercicios/Texto_Exercicio_Historia_da_Aviacao.txt`](Texto_Exercicio_Historia_da_Aviacao.txt)  
**Versão em PDF Diagramada:** [`Exercicios/Tutorial_Formatacao_ABNT_Word.pdf`](Tutorial_Formatacao_ABNT_Word.pdf)  

---

## Sumário do Tutorial

1. [Configuração da Página e Margens ABNT (3-3-2-2)](#1-configuração-da-página-e-margens-abnt-3-3-2-2)
2. [Padronização do Estilo "Normal" (Corpo de Texto)](#2-padronização-do-estilo-normal-corpo-de-texto)
3. [Hierarquia de Estilos de Título e Painel de Navegação](#3-hierarquia-de-estilos-de-título-e-painel-de-navegação)
4. [Criação da Capa e Inserção de Quebras de Seção](#4-criação-da-capa-e-inserção-de-quebras-de-seção)
5. [Desvinculação de Cabeçalhos e Numeração ABNT (Iniciar em 3)](#5-desvinculação-de-cabeçalhos-e-numeração-abnt-iniciar-em-3)
6. [Formatação de Tabelas Técnicas e Legendas de Figuras](#6-formatação-de-tabelas-técnicas-e-legendas-de-figuras)
7. [Geração do Sumário Automático e a Tecla F9](#7-geração-do-sumário-automático-e-a-tecla-f9)
8. [Exportação Oficial no Padrão PDF/A (ISO 19005)](#8-exportação-oficial-no-padrão-pdfa-iso-19005)
9. [Checklist Final de Autoavaliação](#9-checklist-final-de-autoavaliação)

---

## 1. Configuração da Página e Margens ABNT (3-3-2-2)

A norma **ABNT NBR 14724** exige margens assimétricas para acomodar a encadernação e furação à esquerda sem encavalar o texto:

![Configuração de Margens no Word](tutorial_images/step1_margens.png)

### Passo a Passo:
1. Abra o Word e acesse a guia superior **Layout**.
2. No grupo *Configurar Página*, clique em **Tamanho** e confirme **A4 (21 x 29,7 cm)**.
3. Clique no botão **Margens** -> **Margens Personalizadas...** (no rodapé do menu).
4. Na caixa de diálogo, defina:
   - **Superior:** `3,0 cm`
   - **Esquerda:** `3,0 cm` *(espaço reservado para encadernação)*
   - **Inferior:** `2,0 cm`
   - **Direita:** `2,0 cm`
5. Clique em **OK**.

---

## 2. Padronização do Estilo "Normal" (Corpo de Texto)

> [!IMPORTANT]
> **Regra de Ouro:** Nunca selecione parágrafos com o mouse para trocar a fonte manualmente. Modifique o estilo **Normal** para que todo o texto do relatório assuma a norma instantaneamente!

![Modificação do Estilo Normal no Word](tutorial_images/step2_estilo_normal.png)

### Passo a Passo:
1. Na guia **Página Inicial**, localize o grupo **Estilos**.
2. Clique com o **BOTÃO DIREITO** sobre o botão **Normal** -> selecione **Modificar...**
3. Na seção *Formatação*:
   - Fonte: **Arial** ou **Calibri** | Tamanho: **12 pt** | Cor: **Automático (Preto)**.
   - Clique no ícone de alinhamento **Justificado** (`Ctrl + J`).
4. No canto inferior esquerdo da janela, clique em **Formatar** -> **Parágrafo...**:
   - **Alinhamento:** Justificado.
   - **Especial:** Selecione **Primeira linha** em **1,25 cm** *(o recuo padrão de parágrafo)*.
   - **Espaçamento Antes:** `0 pt` | **Depois:** `6 pt`.
   - **Espaçamento entre linhas:** **1,5 linha**.
5. Clique em **OK** duas vezes.

---

## 3. Hierarquia de Estilos de Título e Painel de Navegação

Os títulos das seções do texto (`Texto_Exercicio_Historia_da_Aviacao.txt`) devem ser vinculados aos estilos nativos:

![Hierarquia de Títulos e Painel de Navegação](tutorial_images/step3_estilo_titulos.png)

### Parâmetros dos Títulos:
- **Título 1 (Capítulos Principais):** Arial 14 pt, **Negrito**, **MAIÚSCULAS**, Espaçamento Antes: 12 pt / Depois: 6 pt (Atalho: `Ctrl + Alt + 1`).
  - *Exemplo:* `1. HISTÓRIA E EVOLUÇÃO DA AVIAÇÃO`, `2. HISTÓRIA DA ANAC...`
- **Título 2 (Subseções):** Arial 12 pt, **Negrito**, Caixa Mista, Espaçamento Antes: 6 pt / Depois: 6 pt (Atalho: `Ctrl + Alt + 2`).
  - *Exemplo:* `1.1 Santos Dumont e o Voo do 14-Bis`.
- **Painel de Navegação:** Pressione `Ctrl + F` e clique na aba **Títulos** para visualizar a árvore de tópicos e navegar instantaneamente.

---

## 4. Criação da Capa e Inserção de Quebras de Seção

> [!CAUTION]
> Para que a Capa e o Sumário fiquem sem número de página impresso, o documento precisa ser dividido em **SEÇÕES INDEPENDENTES**.

![Quebras de Seção no Word](tutorial_images/step4_capa_quebra_secao.png)

### Passo a Passo:
1. **Página 1 (Capa):** Centralize os dados institucionais (Fatec Sorocaba, INF-117, título, seu nome, local e ano).
2. No final da Capa, acesse a guia **Layout** -> clique em **Quebras** -> selecione **Quebras de Seção: Próxima Página**.
3. **Página 2 (Sumário):** Digite a palavra `SUMÁRIO` centralizada.
4. No final da página do Sumário, insira OUTRA **Quebras de Seção: Próxima Página**.
5. **Página 3 em diante (Corpo Textual):** Agora o texto principal está isolado na **Seção 2**!

---

## 5. Desvinculação de Cabeçalhos e Numeração ABNT (Iniciar em 3)

![Desvinculação de Cabeçalho e Numeração ABNT](tutorial_images/step5_desvincular_numeracao.png)

### O Passo Mais Crítico:
1. Vá até a **Página 3** (onde começa a Introdução) e dê um **DUPLO CLIQUE** na área do Cabeçalho.
2. Na guia superior **Cabeçalho e Rodapé**, localize o botão **"Vincular ao Anterior"**.
3. **CLIQUE NO BOTÃO "VINCULAR AO ANTERIOR" PARA DESATIVÁ-LO!** (Isso corta a herança com a Capa e Sumário).
4. Ainda na barra superior de Cabeçalho:
   - Clique em **Número de Página** -> **Formatar Números de Página...**
   - Marque a opção **Iniciar em:** e digite o número **3** -> clique em **OK**.
   - Clique novamente em **Número de Página** -> **Início da Página** -> **Número Sem Formatação 3** (canto superior direito).
5. Dê duplo clique no meio da folha para sair do cabeçalho.
6. **Verificação:** Role para cima e confirme que a Capa e o Sumário continuam limpos, sem numeração!

---

## 6. Formatação de Tabelas Técnicas e Legendas de Figuras

![Formatação de Tabelas e Legendas ABNT](tutorial_images/step6_tabela_figura_legendas.png)

### Passo a Passo:
1. **Tabela de Aeronaves (Seção 4):**
   - Insira a grade de 7 colunas x 8 linhas.
   - Aplique sombreamento escuro e texto branco em negrito no cabeçalho.
   - Clique com o botão direito na tabela -> *Propriedades da Tabela -> Linha -> Marcar "Repetir como linha de cabeçalho no topo de cada página"*.
   - Botão direito na tabela -> **Inserir Legenda...** -> Rótulo: **Tabela** -> `: Comparativo de especificações de aeronaves`.
   - Abaixo da tabela, digite em 10 pt: `Fonte: Cartilha ANAC e Manuais Operacionais (2026).`
2. **Figuras Técnicas:**
   - Centralize a imagem da aeronave.
   - Botão direito na foto -> **Inserir Legenda...** -> Rótulo: **Figura** -> `: Aeronave Embraer E195-E2`.
   - Abaixo da foto, digite em 10 pt: `Fonte: Embraer Media Center (2026).`

---

## 7. Geração do Sumário Automático e a Tecla F9

![Geração do Sumário Automático no Word](tutorial_images/step7_sumario_automatico.png)

### Passo a Passo:
1. Posicione o cursor na **Página 2** (abaixo da palavra SUMÁRIO).
2. Acesse a guia **Referências** -> **Sumário** -> **Sumário Automático 1**.
3. O Word varre todos os estilos `Título 1` e `Título 2` e indexa as páginas corretas.
4. **Atualização Dinâmica (`F9`):** Após editar ou incluir páginas, clique no sumário e aperte a tecla **F9** -> selecione *Atualizar o índice inteiro* -> OK!

---

## 8. Exportação Oficial no Padrão PDF/A (ISO 19005)

![Exportação no padrão PDF/A](tutorial_images/step8_salvar_pdfa.png)

### Passo a Passo:
1. Acesse **Arquivo -> Salvar Como** (ou tecla `F12`).
2. Digite o nome: `Relatorio_ABNT_SeuNome_RA.pdf`.
3. Em *Tipo*, escolha **PDF (*.pdf)**.
4. Clique no botão **Mais opções...** (ou **Opções**).
5. **Marque a caixa: "Compatível com ISO 19005-1 (PDF/A)"**.
6. Clique em **Salvar**.

---

## 9. Checklist Final de Autoavaliação

- [ ] Margens configuradas em Superior: 3 cm, Esquerda: 3 cm, Inferior: 2 cm, Direita: 2 cm (Papel A4).
- [ ] Estilo Normal em Arial 12 pt, Justificado, 1,5 linha, recuo de 1ª linha em 1,25 cm, depois 6 pt.
- [ ] Estilos Título 1 e Título 2 aplicados em todas as 7 seções.
- [ ] Quebra de Seção (Próxima Página) inserida após a Capa e após o Sumário.
- [ ] Botão "Vincular ao Anterior" desativado na Seção 2.
- [ ] Numeração ABNT visível apenas a partir da página 3 (Introdução), no canto superior direito.
- [ ] Tabela e Figuras com legendas oficiais e indicação de fonte consultada em 10 pt.
- [ ] Sumário Automático gerado na Página 2 e atualizado com F9.
- [ ] Arquivo editável (`.docx`) e arquivo inviolável (`.pdf` em PDF/A) gerados e enviados.
