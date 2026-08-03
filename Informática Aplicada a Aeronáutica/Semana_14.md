# ROTEIRO DE AULA EXPANDIDO — SEMANA 14
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel VII — Importação de Dados (`.csv`/`.txt`), Gravação e Execução de Macros, Controles de Formulário e Mini-PBL 3  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Importar e tratar arquivos brutos de dados em formatos `.csv` e `.txt` exportados de sistemas MRO/ERP.
- Habilitar a guia **Desenvolvedor** e compreender a diferença entre automação por código e por **Gravação de Macros**.
- Gravar tarefas computacionais repetitivas (formatação de tabelas, limpeza de células, geração de relatórios) com o **Gravador de Macros**.
- Salvar a pasta de trabalho no formato habilitado para macros (`.xlsm`).
- Inserir **Controles de Formulário** (Botões de Comando, Caixas de Seleção, Botões de Opção) e atribuir macros executáveis a eles.
- Executar o **Mini-PBL 3** (Sistema de Estoque com Macros e Formulários).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Importação de Arquivos `.csv` e `.txt`
Sistemas computacionais empresariais (MRO/ERP) exportam dados em texto plano separado por vírgulas ou ponto e vírgula (`.csv`).
- **Assistente de Importação / Obter Dados:** Recursos do Excel que leem o arquivo de texto e distribuem automaticamente as informações em colunas e linhas organizadas.

### 2.2 O que é o Gravador de Macros?
- **Macro:** Uma sequência gravada de comandos, cliques de mouse e digitações de teclado que pode ser salva e reexecutada instantaneamente com 1 clique ou atalho.
- **Não requer programação:** O Gravador de Macros observa o que você faz na tela e traduz suas ações em automação no Excel.

```
FLUXO DA GRAVAÇÃO DE MACRO:
 [ 1. Iniciar Gravação ] ──> [ 2. Executar Ações no Excel ] ──> [ 3. Parar Gravação ] ──> [ 4. Atribuir a um Botão ]
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Importação de Arquivo `.csv`

1. Acesse a guia **Dados** -> grupo **Obter e Transformar Dados** -> **De Texto/CSV**.
2. Selecione um arquivo `.csv` no seu computador e clique em **Importar**.
3. Na janela de pré-visualização, verifique se o **Delimitador** está correto (ex: *Ponto e vírgula* ou *Vírgula*).
4. Clique em **Carregar**. Os dados serão inseridos na planilha formatados como Tabela.

---

### Atividade 2: Gravando a Primeira Macro (Limpeza de Dados)

1. Acesse a guia **Desenvolvedor** -> clique em **Gravar Macro**.
2. Na janela que abre:
   - Nome da Macro: `LimparFormulario` (Não use espaços nem acentos!).
   - Tecla de atalho: `Ctrl + Shift + L`.
   - Clique em **OK**. A partir deste momento, o Excel está gravando todas as suas ações!
3. Selecione o intervalo de células de digitação (ex: `B2:B6`).
4. Pressione a tecla `Delete` no teclado para apagar o conteúdo.
5. Selecione a célula `B2`.
6. Acesse a guia **Desenvolvedor** -> clique em **Parar Gravação**.
7. Prontinho! A rotina de limpeza foi gravada.

---

### Atividade 3: Inserindo um Botão e Atribuindo a Macro

1. Acesse a guia **Desenvolvedor** -> **Inserir** -> no painel **Controles de Formulário**, clique no ícone **Botão (Controle de Formulário)**.
2. Desenhe um retângulo na planilha com o mouse.
3. Assim que soltar o mouse, o Excel abrirá a janela *Atribuir Macro*.
4. Selecione a macro `LimparFormulario` e clique em **OK**.
5. Clique com o botão direito no texto do botão e renomeie para: `LIMPAR CAMPOS`.
6. *Teste:* Digite valores nas células `B2:B6` e clique no botão `LIMPAR CAMPOS` para ver o Excel apagar tudo automaticamente!

---

### Atividade 4: Salvando como Pasta de Trabalho Habilitada para Macro (`.xlsm`)

> [!CAUTION]
> **Formato de Arquivo Obrigatório:**
> Se você salvar um arquivo contendo Macros no formato tradicional `.xlsx`, o Excel **APAGARÁ** todas as macros gravadas!
> Sempre acesse **Arquivo** -> **Salvar Como** -> Escolha em *Tipo*: **Pasta de Trabalho Habilitada para Macro do Excel (*.xlsm)**.

---

## 4. DESAFIO PRÁTICO (MINI-PBL 3)

**Enunciado do Mini-PBL 3:**
Desenvolva um **Sistema Automatizado com Gravação de Macros e Formulários** para Registro de Peças no Estoque:

1. **Aba de Cadastro:** Uma interface visual com campos para `Código da Peça`, `Descrição`, `Quantidade` e `Localização na Oficina`.
2. **Botão 1 (Gravar Registro):** Macro gravada que copia os dados digitados na aba de cadastro e cola como uma nova linha na aba de histórico de estoque.
3. **Botão 2 (Limpar Tela):** Macro gravada que limpa os campos digitados preparando a tela para o próximo registro.
4. Salve o projeto no formato `.xlsm`.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + F8` | Abre a janela de visualização e execução de Macros salvas |
| `Alt + F11` | Abre o ambiente de visualização de automações (VBE) |
