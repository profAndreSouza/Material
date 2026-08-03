# ROTEIRO DE AULA EXPANDIDO — SEMANA 13
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel VI — Tabelas Dinâmicas (*Pivot Tables*), Segmentadores (*Slicers*) e Dashboards Interativos  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Compreender o funcionamento do mecanismo de **Tabela Dinâmica (Pivot Table)** para síntese e agregação de grandes volumes de dados.
- Configurar os 4 campos da Tabela Dinâmica: **Filtros, Colunas, Linhas e Valores**.
- Alterar as configurações dos campos de valor (Soma, Média, Contagem, Percentual do Total).
- Inserir **Segmentadores de Dados (*Slicers*)** e **Linhas do Tempo** para filtragem interativa por botões.
- Conectar múltiplos gráficos dinâmicos a segmentadores comuns para construir um **Dashboard Executivo Interativo**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 A Arquitetura de uma Tabela Dinâmica
Quando trabalhamos com tabelas contendo milhares de linhas de registros (ex: relatório exportado de ordens de serviço), fazer somas manuais com fórmulas é trabalhoso e propenso a falhas.
- **Tabela Dinâmica:** É um mecanismo OLAP (*Online Analytical Processing*) interno do Excel que reorganiza, agrupa e resume dados instantaneamente sem escrever uma única fórmula!

```
ESTRUTURA DO PAINEL DA TABELA DINÂMICA:
 +---------------------------+---------------------------+
 | FILTROS (Filtra a tabela) | COLUNAS (Categorias Horiz)|
 | Ex: Ano do Serviço        | Ex: Tipo de Manutenção    |
 +---------------------------+---------------------------+
 | LINHAS (Categorias Vert)  | VALORES (Métricas Numér.) |
 | Ex: Prefixo da Aeronave   | Ex: SOMA do Custo Total   |
 +---------------------------+---------------------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Criando a Primeira Tabela Dinâmica

1. Baixe a base de dados de ordens de serviço contendo as colunas: `ID_OS`, `Data`, `Prefixo`, `Sistema`, `Custo_Pecas`, `Custo_MaoObra`.
2. Clique em qualquer célula dentro da base de dados.
3. Acesse a guia **Inserir** -> **Tabela Dinâmica** -> **Da Tabela/Intervalo**.
4. Na janela, marque **Nova Planilha** e clique em **OK**.
5. No painel de campos à direita da tela:
   - Arraste o campo `Prefixo` para a área **Linhas**.
   - Arraste o campo `Sistema` para a área **Colunas**.
   - Arraste o campo `Custo_Pecas` para a área **Valores**.
6. Observe a tabela resumo sendo gerada automaticamente cruzando aeronaves nas linhas e sistemas nas colunas!

---

### Atividade 2: Inserção de Segmentadores de Dados (*Slicers*) e Dashboards

1. Clique dentro da Tabela Dinâmica criada.
2. Acesse a guia **Análise de Tabela Dinâmica** -> grupo **Filtrar** -> **Inserir Segmentação de Dados**.
3. Marque a caixinha **Sistema** e **Prefixo**. Clique em **OK**.
4. Botões flutuantes interativos aparecerão na tela.
5. *Teste da Interatividade:* Clique no botão de um sistema (ex: `Hidráulico`). Observe que toda a tabela dinâmica e os gráficos dinâmicos conectados são filtrados instantaneamente!

---

### Atividade 3: Conectando Múltiplas Tabelas Dinâmicas ao mesmo Segmentador

1. Crie uma segunda Tabela Dinâmica na mesma folha.
2. Clique com o botão direito sobre a caixa do **Segmentador de Dados** -> **Conexões de Relatório...**.
3. Marque as caixinhas de todas as Tabelas Dinâmicas da planilha.
4. Agora, clicar em um botão do segmentador atualizará **TODOS** os gráficos do seu Dashboard ao mesmo tempo.

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Desafio em Laboratório:**
Construa a tela de um **Dashboard Executivo de Manutenção**:
1. Crie 2 Tabelas Dinâmicas simples.
2. Gere 2 **Gráficos Dinâmicos** (um de Colunas e um de Pizza/Rosca).
3. Insira 2 **Segmentadores de Dados** estilizados com cores ajustadas.
4. Oculte as linhas de grade da planilha (Guia **Exibir** -> Desmarcar **Linhas de Grade**) para criar um visual limpo de painel de controle.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + N + V` | Atalho de teclado para inserir uma Tabela Dinâmica |
| `Alt + F5` | Atualiza os dados da Tabela Dinâmica selecionada |
| `Ctrl + Alt + F5` | Atualiza TODAS as Tabelas Dinâmicas e consultas do arquivo |
