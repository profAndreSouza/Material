# ROTEIRO DE AULA EXPANDIDO — SEMANA 14
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel VIII — Importação de Dados (`.csv`/`.txt`), Validação de Dados, Automação por Gravação de Macros e Mini-PBL 3  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** EAA-009 (Informação Técnica) e Gestão de Almoxarifado MRO  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Importar e transformar arquivos de dados externos nos formatos `.csv` e `.txt` exportados de sistemas MRO/ERP da aviação.
- Configurar regras de **Validação de Dados** criando listas suspensas (dropdowns) em células para blindar a planilha contra erros de digitação humana.
- Compreender a diferença computacional entre automação de tarefas via **Gravação de Macros** e codificação direta.
- Gravar sequências de comandos operacionais (limpeza de formulários, formatação de relatórios, cópia de registros) com o **Gravador de Macros**.
- Inserir **Botões de Comando e Formas Interativas** na planilha para executar rotinas com 1 clique.
- Salvar a planilha no formato padronizado para execução de automações (`.xlsm`).
- Executar o **Mini-PBL 3** (Painel de Gestão de Estoque e Registro de Peças).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que usar Validação de Dados no Excel?
Se um usuário digitar `"Cessna172"`, outro digitar `"CESSNA 172"` e um terceiro digitar `"C-172"`, as funções `=SOMASE()`, `=CONT.SE()` e `=PROCX()` falharão.
- **Validação de Dados (Lista):** Restringe a célula para aceitar exclusivamente os valores de uma lista predeterminada.

### 2.2 Automação com Gravação de Macros
- **Macro:** É a gravação das ações do usuário no Excel (cliques, seleções, comandos) que permite repetir processos trabalhosos em frações de segundo.
- **Formato Obrigatório:** O arquivo DEVE ser salvo como **Pasta de Trabalho Habilitada para Macro do Excel (`.xlsm`)**.

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Importação de Dados Técnicos `.csv` de Sistema MRO

1. Acesse a guia **Dados** -> **Obter Dados** -> **De Arquivo** -> **De Texto/CSV**.
2. Selecione o arquivo `relatorio_estoque_mro.csv` fornecido.
3. Na janela de visualização, confirme se o delimitador é *Ponto e vírgula* e clique em **Carregar**.
4. Os dados serão dispostos em uma Tabela estruturada e limpa.

---

### Atividade 2: Configuração de Validação de Dados (Lista Suspensa)

1. Em uma folha nova de formulário, selecione a célula `B3` (`Tipo de Manutenção`).
2. Acesse a guia **Dados** -> **Validação de Dados**.
3. Na caixa *Permitir*, escolha **Lista**.
4. No campo *Fonte*, digite os termos separados por ponto e vírgula:
   `50 Horas; 100 Horas; Anual (IAM); Preventiva; Corretiva`
5. Clique em **OK**. Observe que a célula `B3` agora exibe uma setinha de menu suspenso!

---

### Atividade 3: Gravação de Macro para Limpeza de Formulário e Atribuição a um Botão

1. Acesse a guia **Desenvolvedor** -> clique em **Gravar Macro**:
   - Nome: `LimparEntradas` (sem espaços nem acentos!).
   - Clique em **OK**. (O Excel agora está gravando).
2. Selecione as células de digitação (ex: `B2:B5`).
3. Pressione a tecla `Delete` no teclado.
4. Selecione a célula `B2`.
5. Acesse a guia **Desenvolvedor** -> clique em **Parar Gravação**.
6. **Desenhar o Botão Interativo:**
   - Acesse **Inserir** -> **Ilustrações** -> **Formas** -> Desenhe um Retângulo com Cantos Arredondados.
   - Digite no botão: `LIMPAR FORMULÁRIO`.
   - Clique com o botão direito sobre o botão desenhado -> **Atribuir Macro...** -> Selecione `LimparEntradas` e clique em **OK**.
7. *Teste:* Digite valores no formulário e clique no botão para vê-lo limpar tudo automaticamente!

---

## 4. DESAFIO PRÁTICO (MINI-PBL 3)

**Enunciado do Mini-PBL 3 (Peso: ~7,5% da Média Final):**
Desenvolva um **Painel de Gestão de Estoque e Registro de Movimentação de Peças** no MS Excel:

1. **Aba de Cadastro:** Interface limpa com campos: `Part Number`, `Descrição`, `Quantidade Movimentada`, `Tipo de Movimentação (Entrada/Saída)` com **Validação de Dados**.
2. **Automação por Macro:** Botão para limpar o formulário e preparar a tela para o próximo registro.
3. **Aba de Estoque com Fórmulas:** Atualização automática de saldo de estoque cruzando entradas e saídas.
4. **Formato de Entrega:** Arquivo salvo obrigatoriamente no formato `.xlsm`.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + F8` | Abre a janela de visualização e execução de Macros |
| `Alt + D + L` | Abre a janela de **Validação de Dados** |
| `Ctrl + Shift + L` | Liga/Desliga Filtros na Tabela |
