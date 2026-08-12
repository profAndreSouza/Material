# ROTEIRO DE AULA EXPANDIDO — SEMANA 02
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Word Técnico no Office 365: Estruturação de Relatórios Formais de Engenharia, Estilos ABNT, Tabelas e Sumários Automáticos  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Word)  
**Articulação com o PPC:** COE-001 (Comunicação Escrita), Projetos Integradores I a IV (TAM-001 a TAM-004) e Trabalho de Graduação (TG/TCC)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Operar o **Microsoft Word (Office 365)** com foco em documentos técnicos e de engenharia.
- Criar e gerenciar uma hierarquia rigorosa de **Estilos de Parágrafo** (Título 1, Título 2, Título 3 e Corpo de Texto) compatíveis com as normas ABNT.
- Inserir **Quebras de Seção (Próxima Página)** para desvincular cabeçalhos, rodapés e numeração de páginas entre elementos pré-textuais (Capa/Sumário) e o corpo do relatório.
- Inserir e formatar **Tabelas Técnicas de Dados** com alinhamento preciso e repetição de cabeçalho.
- Inserir figuras técnicas com **Legendas Automáticas** e referências cruzadas no texto.
- Gerar e atualizar com 1 clique o **Sumário Automático (Índice)**.
- Exportar o documento final no padrão oficial de arquivamento **PDF/A**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que o uso de Estilos é obrigatório em Engenharia?
Formatar textos manualmente (alterando tamanho e fonte parágrafo por parágrafo) gera documentos despadronizados, lentos e incompatíveis com a geração de sumários.
- **Estilos (Styles):** São regras globais aplicadas aos elementos do documento. Alterar a configuração do estilo `Título 1` atualiza instantaneamente todos os títulos principais do projeto.
- **Painel de Navegação (`Ctrl + F` / Navegação):** O Word utiliza a hierarquia de Estilos para permitir navegação rápida em relatórios extensos (30 a 100 páginas de TCC).

```
HIERARQUIA DE ESTILOS NO WORD:
 ├── [Título 1] 1. INTRODUÇÃO E OBJETIVOS TÉCNICOS (Arial 14pt, Negrito, Caixa Alta)
 │     ├── [Título 2] 1.1 Descrição da Célula e Sistemas (Arial 12pt, Negrito)
 │     │     ├── [Título 3] 1.1.1 Sistema Hidráulico Principal (Arial 12pt, Itálico)
 │     │     └── [Corpo de Texto] Parágrafos com recuo de 1,25 cm, Justificado, 1,5 linha
 └── [Sumário Automático] Varrido automaticamente pelo Word com número de páginas dinâmico
```

### 2.2 Quebras de Seção vs. Quebras de Página
- **Quebra de Página (`Ctrl + Enter`):** Simplesmente joga o texto para a página seguinte, mas mantém os mesmos cabeçalhos e números de página.
- **Quebra de Seção (Layout -> Quebras -> Próxima Página):** Cria uma "fronteira computacional" independente. Permite que a Capa e o Sumário não tenham número de página, e a numeração comece apenas na Introdução (iniciando na página 3, por exemplo).

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Criação e Padronização dos Estilos de Texto no Word

1. Abra o Microsoft Word (no Office 365 ou Desktop).
2. Configure as Margens do documento (guia **Layout** -> **Margens** -> **Personalizadas**):
   - *Superior:* 3,0 cm | *Esquerda:* 3,0 cm | *Inferior:* 2,0 cm | *Direita:* 2,0 cm.
3. Na guia **Página Inicial**, localize o painel de **Estilos**:
   - Clique com o botão direito sobre o estilo **Normal** -> **Modificar**:
     - Fonte: *Arial* ou *Calibri*, Tamanho: *12 pt*.
     - Alinhamento: **Justificado** (`Ctrl + J`).
     - Clique no botão **Formatar** -> **Parágrafo**:
       - Recuo Especial: **Primeira linha** em **1,25 cm**.
       - Espaçamento: *Antes:* 0 pt | *Depois:* 6 pt.
       - Espaçamento entre linhas: **1,5 linha**.
       - Clique em **OK**.
4. Configure o estilo **Título 1**:
   - Fonte: *Arial*, Tamanho: *14 pt*, **Negrito**, Cor: Preto / Automático.
   - Espaçamento *Antes:* 12 pt | *Depois:* 6 pt.
5. Configure o estilo **Título 2**:
   - Fonte: *Arial*, Tamanho: *12 pt*, **Negrito**, Cor: Preto.

---

### Atividade 2: Inserção de Tabelas Técnicas e Formatação Profissional

1. Acesse a guia **Inserir** -> **Tabela** -> Insira uma grade de **4 Colunas x 6 Linhas**.
2. Digite os cabeçalhos na 1ª linha:
   - `Item` | `Componente / Sistema` | `Part Number (PN)` | `Periodicidade (Horas/Pousos)`
3. Selecione a linha do cabeçalho:
   - Na guia **Design da Tabela**, escolha um sombreamento cinza escuro ou azul técnico com texto em branco/negrito.
4. Na guia **Layout da Tabela**:
   - Selecione todas as células e defina o alinhamento como **Centralizar à Esquerda Verticalmente**.
   - Na coluna `Item`, centralize horizontal e verticalmente.

---

### Atividade 3: Quebras de Seção e Numeração Diferenciada de Páginas

1. Na Página 1, monte a Capa (Título do Relatório, Nome do Aluno, Fatec Sorocaba, 2026).
2. No final da Página 1, clique em **Layout** -> **Quebras** -> **Quebras de Seção: Próxima Página**.
3. Na Página 2, insira o título `SUMÁRIO` e adicione outra **Quebra de Seção: Próxima Página**.
4. Na Página 3 (onde começa a Introdução):
   - Dê um duplo clique na área do Cabeçalho/Rodapé da página 3.
   - Na guia de Cabeçalho e Rodapé, **DESMARQUE** a opção **Vincular ao Anterior** (isso desconecta a página 3 da página 2).
   - Insira o Número da Página no canto superior ou inferior direito.
   - Clique em **Formatar Número de Página** e defina: *Iniciar em:* **3**.
   - Observe que a Capa e o Sumário ficaram sem numeração visível!

---

### Atividade 4: Inserção de Figuras Técnicas e Geração do Sumário Automático

1. Posicione o cursor na página 3. Insira uma imagem técnica (diagrama de aeronave ou componente).
2. Com a imagem selecionada, acesse a guia **Referências** -> **Inserir Legenda**:
   - Rótulo: *Figura*.
   - Digite: `: Diagrama Esquemático do Grupo Motopropulsor`.
   - Posição: *Abaixo do item selecionado*. Clique em **OK**.
3. Vá para a Página 2 (abaixo da palavra Sumário).
4. Acesse a guia **Referências** -> **Sumário** -> Escolha **Sumário Automático 1**.
5. O Word irá gerar a lista hierárquica com títulos e números de página dinâmicos!

---

## 4. EXERCÍCIOS INTENSIVOS DE FIXAÇÃO

### Exercício 1: Relatório Técnico de Inspeção Estrutural
Monte um documento completo no Word contendo:
1. Capa formatada institucionalmente.
2. Sumário Automático funcional na página 2.
3. Seção 1: `1. IDENTIFICAÇÃO DA AERONAVE E HISTÓRICO OPERACIONAL` (com tabela técnica contendo Modelo, Prefixo, Número de Série e Horas Totais).
4. Seção 2: `2. PROCEDIMENTOS DE INSPEÇÃO NÃO DESTRUTIVA (NDT)` (com 2 subtítulos de Título 2 e 1 imagem técnica com legenda automática).
5. Seção 3: `3. CONSIDERAÇÕES FINAIS E LIBERAÇÃO` (com texto justificado).
6. Exportação final em arquivo `.pdf`.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO MS WORD

| Atalho de Teclado | Função no MS Word |
| :--- | :--- |
| `Ctrl + Alt + 1` | Aplica o estilo **Título 1** ao parágrafo atual |
| `Ctrl + Alt + 2` | Aplica o estilo **Título 2** ao parágrafo atual |
| `Ctrl + J` | Justifica o parágrafo selecionado |
| `Ctrl + Shift + N` | Aplica o estilo **Normal** (limpa formatações de título) |
| `F9` (no Sumário) | Atualiza o sumário inteiro recalculando páginas |
| `Ctrl + K` | Insere um link clicável para outra seção ou arquivo |
