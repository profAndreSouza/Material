# ROTEIRO DE AULA EXPANDIDO — SEMANA 13
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel VII — Tabelas Dinâmicas (*Pivot Tables*), Segmentadores de Dados (*Slicers*) e Dashboards Interativos no Office 365  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** EAM-007 (Gerenciamento da Manutenção) e Gestão da Confiabilidade de Frota  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Operar o mecanismo de **Tabela Dinâmica (Pivot Table)** no Excel Online e Desktop para sintetizar bases com milhares de registros de manutenção.
- Configurar os 4 quadrantes operacionais: **Filtros, Colunas, Linhas e Valores**.
- Customizar os resumos de valores (Soma de Custo, Contagem de Falhas, Média de Horas e Percentual do Total da Coluna).
- Inserir **Segmentadores de Dados (*Slicers*)** interativos para filtragem por botões visuais.
- Integrar múltiplos gráficos dinâmicos a segmentadores comuns, construindo um **Dashboard Executivo de Manutenção Interativo**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O que é o Processamento OLAP / Tabela Dinâmica?
Bases de dados de ordens de serviço e diários de bordo contêm milhares de linhas. Resumi-las por fórmulas manuais consome tempo e memória computacional.
- **Tabela Dinâmica:** Realiza agregações instantâneas em memória sem exigir que o usuário digite fórmulas. Permite reorganizar visualmente as variáveis com um simples arrastar de mouse (*drag and drop*).

```
ARQUITETURA DO PAINEL DA TABELA DINÂMICA:
 +---------------------------+-----------------------------------+
 | 1. FILTROS (Filtra Tudo)  | 2. COLUNAS (Categorias Horizont.) |
 | Ex: Ano / Base de Voo     | Ex: Sistema ATA (Hidráulica, etc.)|
 +---------------------------+-----------------------------------+
 | 3. LINHAS (Categorias Vert| 4. VALORES (Métricas Numéricas)   |
 | Ex: Prefixo da Aeronave   | Ex: SOMA(Custo), CONTAGEM(OS)     |
 +---------------------------+-----------------------------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Criando a Tabela Dinâmica a partir de Ordens de Serviço

1. Abra a base com 50 ordens de serviço contendo: `ID_OS`, `Data`, `Prefixo`, `Modelo`, `Sistema_ATA`, `Custo_Pecas_R$`, `Horas_Homem`.
2. Clique em qualquer célula da base. Acesse a guia **Inserir** -> **Tabela Dinâmica**.
3. Escolha **Nova Planilha** e clique em **OK**.
4. No painel lateral:
   - Arraste `Prefixo` para **Linhas**.
   - Arraste `Sistema_ATA` para **Colunas**.
   - Arraste `Custo_Pecas_R$` para **Valores**.
5. Clique com o botão direito nos números gerados -> **Formato do Número** -> Escolha **Moeda (R$)**.

---

### Atividade 2: Inserção de Gráficos Dinâmicos e Segmentadores de Dados (*Slicers*)

1. Com o cursor dentro da Tabela Dinâmica, acesse a guia **Inserir** -> **Gráfico Dinâmico** -> Escolha **Colunas Empilhadas**.
2. Acesse a guia **Análise de Tabela Dinâmica** -> **Inserir Segmentação de Dados**:
   - Marque as caixinhas: `Modelo` e `Sistema_ATA`.
   - Clique em **OK**.
3. Posicione as caixas de botões ao lado do gráfico.
4. *Teste da Interatividade:* Clique no botão do modelo `King Air`. Veja todo o relatório e o gráfico se ajustarem instantaneamente!

---

### Atividade 3: Conexão de Relatório para Painel Único (Dashboard)

1. Crie uma segunda Tabela Dinâmica na mesma folha mostrando o `Total de Horas-Homem por Sistema ATA`.
2. Gere um Gráfico de Barras a partir dessa segunda tabela.
3. Clique com o botão direito na caixa do **Segmentador de Dados** -> **Conexões de Relatório...**.
4. Marque as caixinhas de **TODAS** as Tabelas Dinâmicas da página.
5. Na guia **Exibir**, desmarque a opção **Linhas de Grade**.
6. Agora você possui um **Dashboard Executivo Profissional** com filtros sincronizados!

---

## 4. EXERCÍCIO DE FIXAÇÃO INTENSIVO

**Desafio em Laboratório:**
Construa uma tela de Dashboard Executivo de Manutenção contendo:
- 1 Gráfico de Colunas Dinâmico (Custo de Manutenção por Aeronave).
- 1 Gráfico de Rosca Dinâmico (Proporção de Falhas por Sistema ATA).
- 2 Segmentadores de Dados estilizados com cores coordenadas.
- 1 Cartão de Indicador com o Custo Total Geral da Frota.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + N + V` | Insere Tabela Dinâmica |
| `Alt + F5` | Atualiza a Tabela Dinâmica selecionada |
| `Ctrl + Alt + F5` | Atualiza TODAS as fontes de dados do arquivo |
