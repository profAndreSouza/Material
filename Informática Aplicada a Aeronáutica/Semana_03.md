# ROTEIRO DE AULA EXPANDIDO — SEMANA 03
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Word I — Formatação Técnica Avançada, Estilos, Estruturação de Tabelas e Sumário Automático  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Dominar a formatação avançada de documentos técnicos no Microsoft Word.
- Criar e aplicar **Estilos de Parágrafo** (Título 1, Título 2, Corpo de Texto) para padronizar documentos.
- Inserir, formatar e alinhar **Tabelas Técnicas de Dados**.
- Inserir imagens com formatação de quebra de texto, alinhamento e legenda.
- Gerar e atualizar um **Sumário Automático (Índice)** baseado na hierarquia de estilos.
- Configurar margens, cabeçalhos, rodapés e numeração de páginas com quebras de seção.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que usar Estilos no MS Word?
Muitos usuários formatam documentos manualmente selecionando o texto e alterando a fonte, tamanho e cor repetidamente. Isso é ineficiente e gera documentos desalinhados.
- **Estilos (Styles):** São conjuntos predefinidos de regras de formatação (fonte, tamanho, espaçamento entre linhas, recuo, cor).
- **Vantagens computacionais dos Estilos:**
  1. **Padronização Instantânea:** Modificar um estilo atualiza automaticamente todas as partes do documento que o utilizam.
  2. **Navegação:** O Word usa os Estilos de Título para montar o Painel de Navegação lateral (`Ctrl + F`).
  3. **Automação:** Permite criar o **Sumário Automático** com 1 clique.

```
[DOCUMENTO DE TEXTO]
 ├── Título 1 (Estilo: Arial 14pt, Negrito, Espaçamento Antes 12pt)
 │    ├── Título 2 (Estilo: Arial 12pt, Negrito, Espaçamento Antes 6pt)
 │    │    └── Corpo de Texto (Estilo: Arial 11pt, Justificado, Entre-linhas 1.5)
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Configuração das Margens e Estilos de Texto

1. **Configurar Margens do Documento:**
   - Acesse a guia **Layout** -> **Margens** -> **Margens Personalizadas**.
   - Defina: *Superior:* 3,0 cm | *Esquerda:* 3,0 cm | *Inferior:* 2,0 cm | *Direita:* 2,0 cm.
2. **Criar / Modificar o Estilo "Corpo de Texto":**
   - Na guia **Página Inicial**, no painel **Estilos**, clique com o botão direito sobre o estilo **Normal** -> **Modificar**.
   - Fonte: *Arial* ou *Calibri*, Tamanho: *11 pt*.
   - Alinhamento: **Justificado** (`Ctrl + J`).
   - Espaçamento entre linhas: **1,5 linha**.
   - Clique em **Formatar** (canto inferior esquerdo da janela) -> **Parágrafo** -> Espaçamento *Depois:* **6 pt**. Clique em **OK**.

---

### Atividade 2: Inserção de Tabelas Técnicas

1. Acesse a guia **Inserir** -> **Tabela** -> Escolha **4 Colunas x 5 Linhas**.
2. Digite os cabeçalhos na primeira linha:
   - `Item` | `Descrição do Componente` | `Part Number (PN)` | `Status de Inspeção`
3. Selecione a linha do cabeçalho:
   - Na guia **Design da Tabela**, escolha um sombreamento cinza escuro e texto em negrito.
4. Na guia **Layout da Tabela**, defina o alinhamento vertical como **Centralizar Verticalmente**.

---

### Atividade 3: Geração do Sumário Automático

1. Aplique os estilos de título nos títulos do seu documento:
   - Selecione o título principal e clique em **Título 1** na guia Página Inicial.
   - Selecione os subtítulos e clique em **Título 2**.
2. Posicione o cursor no início do documento (antes do primeiro título).
3. Insira uma página em branco (`Ctrl + Enter`).
4. Acesse a guia **Referências** -> **Sumário** -> Escolha **Sumário Automático 1**.
5. O Word irá varrer o documento e gerar a lista de títulos com suas respectivas páginas.
6. *Como atualizar:* Sempre que adicionar texto, clique com o botão direito no Sumário -> **Atualizar Campo** -> **Atualizar o índice inteiro**.

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Exercício Prático no Word:**
Elabore a estrutura de um **Relatório Técnico de Inspeção** contendo:
1. Capa com Título Centralizado, Nome do Autor e Data.
2. Quebra de Seção / Quebra de Página.
3. Sumário Automático na página 2.
4. 2 Títulos principais (**Título 1**) e 4 Subtítulos (**Título 2**).
5. Uma Tabela formatada com 4 colunas e 3 linhas de dados de equipamentos.
6. Uma imagem técnica inserida com Legenda automática (Guia **Referências** -> **Inserir Legenda** -> *Figura 1: Diagrama do Componente*).

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Word |
| :--- | :--- |
| `Ctrl + J` | Alinha o texto como Justificado |
| `Ctrl + Enter` | Insere uma Quebra de Página manualmente |
| `Ctrl + Shift + C` / `Ctrl + Shift + V` | Copia e cola apenas a formatação do texto selecionado |
| `Ctrl + Alt + 1` | Aplica instantaneamente o estilo **Título 1** ao parágrafo |
| `Ctrl + Alt + 2` | Aplica instantaneamente o estilo **Título 2** ao parágrafo |
| `F7` | Inicia a verificação ortográfica e gramatical |
