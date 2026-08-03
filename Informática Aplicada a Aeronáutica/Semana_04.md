# ROTEIRO DE AULA EXPANDIDO — SEMANA 04
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Word II — Formulários Interativos, Proteção de Documentos, Controle de Alterações e Mini-PBL 1  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Habilitar e utilizar a guia **Desenvolvedor** no Microsoft Word.
- Inserir **Controles de Conteúdo** para criação de formulários padronizados (Caixas de texto simples/formatado, caixas de combinação/dropdown, seletores de data e caixas de seleção/checkbox).
- Configurar **Restrições de Edição** para proteger modelos de documentos contra alterações não autorizadas na estrutura.
- Ativar e gerenciar a ferramenta **Controlar Alterações** (*Track Changes*) e comentários para revisão colaborativa de documentos.
- Exportar documentos no formato padrão de arquivamento digital **PDF/A**.
- Executar o **Mini-PBL 1** (Desenvolvimento de Modelo de Ordem de Serviço).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O que são Controles de Conteúdo e Formulários Preenchíveis?
Em ambientes de escritório e oficinas, formulários de papel geram erros de digitação e perda de dados.
- **Controles de Conteúdo no Word:** São elementos de interface colocados dentro do documento que limitam o tipo de dado que o usuário pode inserir em cada campo (ex: só aceitar datas, escolher uma opção fixa de uma lista suspensa ou marcar uma caixinha de verificação).

```
[MODELO DE FORMULÁRIO PROTEGIDO]
 ├── Campo Texto Simples: [ Digite o Prefixo da Aeronave... ]
 ├── Caixa de Combinação (Dropdown): [ Selecione o Tipo de Inspeção v ]
 │     ├── 50 Horas
 │     ├── 100 Horas
 │     └── Anual / IAM
 ├── Seletor de Data: [ 15/08/2026 v ]
 └── Checkbox: [X] Componente Aprovado   [ ] Componente Reprovado
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Habilitar a Guia Desenvolvedor no MS Word

1. Abra o MS Word.
2. Clique no menu **Arquivo** -> **Opções**.
3. Na janela de opções, clique em **Personalizar Faixa de Opções**.
4. Na coluna da direita (*Guias Principais*), marque a caixinha **Desenvolvedor**.
5. Clique em **OK**. A guia Desenvolvedor aparecerá no topo do Word.

---

### Atividade 2: Inserção de Campos Interativos no Formulário

1. Crie uma tabela no Word com 2 colunas e 4 linhas.
2. Na coluna da esquerda, digite os rótulos: `Responsável Técnico:`, `Tipo de Serviço:`, `Data do Serviço:`, `Status:`.
3. Na coluna da direita, insira os controles da guia **Desenvolvedor** -> painel **Controles**:
   - **Para Responsável Técnico:** Clique no ícone **Controle de Conteúdo de Texto Simples** `Aa`.
   - **Para Tipo de Serviço:** Clique no ícone **Controle de Conteúdo de Caixa de Combinação** (Dropdown).
     - Com o controle selecionado, clique em **Propriedades** na guia Desenvolvedor.
     - Clique em **Adicionar** e insira as opções: `Preventiva`, `Corretiva`, `Inspeção de Rotina`. Clique em **OK**.
   - **Para Data do Serviço:** Clique no ícone **Controle de Conteúdo de Seletor de Data** (Calendário).
   - **Para Status:** Clique no ícone **Controle de Conteúdo de Caixa de Seleção** (Checkbox).

---

### Atividade 3: Proteger o Formulário para Preenchimento

1. Acesse a guia **Desenvolvedor** -> **Restringir Edição** (ou na guia **Revisão**).
2. No painel que se abre à direita:
   - Marque o item **2. Restrições de edição: Permitir apenas este tipo de edição no documento**.
   - No menu suspenso, escolha **Preenchendo formulários**.
3. Clique no botão **Sim, aplicar proteção**.
4. (Opcional) Digite uma senha ou deixe em branco e clique em OK.
5. *Teste:* Tente apagar os rótulos da tabela. Note que o Word impede a digitação no texto fixo e permite apenas preencher os campos do formulário!

---

### Atividade 4: Exportação em PDF/A

1. Clique em **Arquivo** -> **Salvar Como** (ou **Exportar**).
2. Escolha o local e em *Tipo*, selecione **PDF (*.pdf)**.
3. Clique no botão **Opções...**.
4. Marque a caixinha **Compatível com ISO 19005-1 (PDF/A)**.
5. Clique em **OK** e depois em **Salvar**.

---

## 4. DESAFIO PRÁTICO (MINI-PBL 1)

**Enunciado do Mini-PBL 1:**
Você deve criar um **Modelo Padronizado de Ordem de Serviço (OS)** em editor de texto contendo obrigatoriamente os seguintes requisitos computacionais:

1. Cabecalho padronizado com tabela e logotipo/imagem ajustada.
2. Tabela de Identificação com **Controles de Conteúdo Interativos** (Texto Simples, Dropdown para tipo de manutenção, Seletor de Data e Checkboxes de status).
3. Tabela de Registro de Peças com colunas para `Item`, `Part Number`, `Quantidade` e `Descrição`.
4. Proteção de Documento ativada para permitir apenas o preenchimento de formulário.
5. Exportação do modelo final em formato `.docx` (editável protegido) e `.pdf` (documento estático).

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Word |
| :--- | :--- |
| `Ctrl + Shift + E` | Ativa ou desativa o **Controle de Alterações** (*Track Changes*) |
| `Alt + Shift + D` | Insere o campo de Data Atual automaticamente |
| `Alt + Shift + T` | Insere o campo de Hora Atual automaticamente |
| `F12` | Abre diretamente a caixa de diálogo "Salvar Como" |
