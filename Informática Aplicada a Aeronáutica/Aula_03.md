# ROTEIRO DE AULA EXPANDIDO — AULA 03
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 21/08/2026  
**Tema:** MS Word Técnico — Normas ABNT (Parte 2): Quebras de Seção, Numeração ABNT, Figuras/Tabelas e Sumário Automático *(Continuação da Aula 02)*  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Word)  
**Articulação com o PPC:** COE-001 (Comunicação Escrita), Projetos Integradores I a IV (TAM-001 a TAM-004) e Trabalho de Graduação (TG/TCC)  

---

## 1. CONTEXTO PEDAGÓGICO & OBJETIVOS
Na Aula 02, iniciamos a padronização do documento no Word configurando o tamanho A4, as margens ABNT (3-3-2-2), a tipografia e os **Estilos de Parágrafo (Normal, Título 1, Título 2)**.

Nesta Aula 03 (**continuação direta da Aula 02**), finalizaremos todos os elementos estruturais do relatório técnico:
- Criação da **Capa formal ABNT**.
- Inserção de **Quebras de Seção (Próxima Página)** para dividir o relatório em: Capa, Elementos Pré-Textuais (Sumário) e Elementos Textuais (Introdução em diante).
- Desvinculação de cabeçalhos e rodapés entre seções (**"Vincular ao Anterior"**).
- Configuração da **Numeração de Páginas no Padrão ABNT** (contar todas as folhas a partir da capa, mas exibir o número apenas a partir da Introdução, no canto superior direito).
- Inserção de **Tabelas e Figuras Técnicas com Legendas Padronizadas** e indicação de fonte.
- Geração e atualização com 1 clique do **Sumário Automático** (que lê os Estilos criados na Aula 02!).
- Exportação do arquivo final em formato **PDF/A**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que Seções são Necessárias na ABNT?
No Microsoft Word, um documento padrão possui cabeçalhos, rodapés e numeração contínuos. Para atender às normas da ABNT (NBR 14724) para trabalhos acadêmicos e relatórios técnicos da aviação:
1. **Capa e Sumário:** São contados, mas **NÃO exibem** o número da página.
2. **Introdução (Primeira página de texto):** É a primeira página onde o número aparece impresso (exemplo: Página 3).

Para fazer isso sem criar arquivos separados, o Word utiliza **Quebras de Seção**:
- Cada seção funciona como um "subdocumento" com formatações de página independentes.
- Ao desativar o botão **"Vincular ao Anterior"** no cabeçalho da Seção 2, podemos colocar números de página nela sem que apareçam na Seção 1 (Capa/Sumário).

```
ESTRUTURA DE SEÇÕES NO DOCUMENTO ABNT:
 +---------------------------+   +---------------------------+   +---------------------------+
 |         SEÇÃO 1           |   |         SEÇÃO 1           |   |         SEÇÃO 2           |
 |          CAPA             |   |         SUMÁRIO           |   |      1. INTRODUÇÃO        |
 |                           |   |                           |   |                           |
 |  (Conta como pág. 1)      |   |  (Conta como pág. 2)      |   |  (Página 3 no topo dir.)  |
 |  [Sem número visível]     |   |  [Sem número visível]     |   |  [Número visível: 3]      |
 +---------------------------+   +---------------------------+   +---------------------------+
               |                               |                               |
               +--- [Quebra de Página] --------+--- [Quebra de Seção: Próxima Página] ---+
                                                                               |
                                                            [Desvincular Cabeçalho!]
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Abrindo o Arquivo da Aula 02 e Montando a Capa

1. Abra o arquivo `Relatorio_ABNT_Aula02.docx` salvo na aula anterior (onde os estilos e margens já estão configurados).
2. Na primeira página, centralize os dados da Capa:
   - Topo: `FATEC SOROCABA — CST EM MANUTENÇÃO DE AERONAVES`
   - Centro: `RELATÓRIO TÉCNICO: INTRODUÇÃO À AVIAÇÃO CIVIL E REGULAMENTAÇÃO`
   - Abaixo: Seu Nome Completo e RA
   - Rodapé: `Sorocaba — SP / 2026`
3. Posicione o cursor no final da Capa e insira uma quebra de página simples (`Ctrl + Enter`) para criar a Página 2 (reservada para a palavra `SUMÁRIO`).

---

### Atividade 2: Inserção de Quebra de Seção e Divisão do Documento

1. Na página do **Sumário** (Página 2), posicione o cursor no final da página.
2. Acesse a guia **Layout** -> clique em **Quebras** -> selecione **Quebras de Seção: Próxima Página**.
   - *Dica:* Ative o botão **Mostrar Tudo (`¶`)** na guia *Página Inicial* para visualizar onde a quebra de seção está inserida.

---

### Atividade 3: Desvinculação de Cabeçalho e Inserção da Numeração ABNT

1. Vá até a primeira página de conteúdo textual (**Introdução**, agora na Seção 2).
2. Dê um duplo clique na área do **Cabeçalho** da página da Introdução.
3. Na guia superior **Cabeçalho e Rodapé**, observe que o botão **"Vincular ao Anterior"** está ativado (sombreado).
4. **Clique em "Vincular ao Anterior" para DESATIVÁ-LO!** (Isso impede que o número apareça na capa e no sumário).
5. Ainda na guia *Cabeçalho e Rodapé*:
   - Clique em **Número de Página** -> **Formatar Números de Página...**
   - Em *Numeração das páginas*, marque: **Iniciar em: 3** (ou o número correspondente à contagem real das folhas).
   - Clique em **OK**.
   - Clique novamente em **Número de Página** -> **Início da Página** -> **Número Sem Formatação 3** (alinhado à direita).
6. Dê duplo clique no meio da folha para fechar o cabeçalho.
7. **Verificação:** Role a tela até a Capa e Sumário e confirme que elas **não** possuem número impresso!

---

### Atividade 4: Inserção de Figuras e Tabelas com Legendas Padronizadas

1. **Inserindo uma Figura Técnica:**
   - Acesse **Inserir** -> **Imagens** e insira a imagem de uma aeronave ou componente.
   - Centralize a imagem (`Ctrl + E`).
   - Clique com o botão direito sobre a imagem -> **Inserir Legenda...**
   - Rótulo: selecione **Figura**.
   - Digite o título: `: Diagrama estrutural da fuselagem e empenagem`.
   - Abaixo da imagem, insira em fonte 10 pt: `Fonte: ANAC (2026)`.

2. **Inserindo uma Tabela Técnica:**
   - Acesse **Inserir** -> **Tabela** (ex: 4 colunas x 5 linhas).
   - Preencha com dados de especificações técnicas (Modelo, Peso Máximo, Envergadura, Motor).
   - Formate o cabeçalho em negrito e com sombreamento suave.
   - Clique com o botão direito na tabela -> **Inserir Legenda...** -> Rótulo: **Tabela** -> `: Especificações técnicas da frota`.
   - Abaixo da tabela, insira em fonte 10 pt: `Fonte: Manual de Operações (2026)`.

---

### Atividade 5: Inserção e Atualização do Sumário Automático

1. Posicione o cursor na página reservada para o **Sumário** (Página 2).
2. Acesse a guia **Referências** -> clique em **Sumário** -> escolha **Sumário Automático 1**.
3. O Word irá ler todos os textos que formatamos com os estilos `Título 1` e `Título 2` na Aula 02 e montará a lista com os respectivos números de página.
4. **Como atualizar após alterações:** Caso altere títulos ou adicione novas páginas, clique com o botão direito sobre o Sumário e selecione **Atualizar Campo** -> **Atualizar o índice inteiro** (ou aperte `F9`).

---

### Atividade 6: Exportação em PDF/A

1. Acesse **Arquivo** -> **Salvar Como** (ou **Exportar**).
2. Selecione o tipo **PDF (*.pdf)**.
3. Clique em **Mais opções...** (ou **Opções**) e marque a caixa **Compatível com ISO 19005-1 (PDF/A)**.
4. Clique em **Salvar**.

---

## 4. CONCLUSÃO & PREPARAÇÃO PARA A AULA 04

- Parabéns! O documento base está 100% formatado e completo no padrão ABNT.
- **Na Aula 04:** Realizaremos a **Oficina Prática de Avaliação (Exercício Avaliativo 1)**, onde cada aluno aplicará sozinho todo o fluxo (Aulas 02 + 03) em um arquivo bruto para envio avaliativo.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO MS WORD

| Atalho de Teclado | Função no MS Word |
| :--- | :--- |
| `Ctrl + Shift + 8` (`Ctrl + *`) | Exibe/Oculta os caracteres não imprimíveis (`¶`) e quebras de seção |
| `Alt + Shift + P` | Insere o campo de **Número de Página** |
| `F9` | Atualiza campos selecionados (como o Sumário Automático) |
| `Ctrl + Enter` | Insere uma Quebra de Página simples |
| `F12` | Abre a janela de Salvar Como instantaneamente |
