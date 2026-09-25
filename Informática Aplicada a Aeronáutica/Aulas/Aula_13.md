# ROTEIRO DE AULA EXPANDIDO — AULA 13
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 06/11/2026  
**Tema:** MS Excel IX — Análise e Resumo com Tabelas Dinâmicas (*Pivot Tables*) e Segmentadores de Dados (*Slicers*)  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** EAM-007 (Gerenciamento da Manutenção) e EST-002 (Estatística Descritiva)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender o conceito e o poder analítico das **Tabelas Dinâmicas (*Pivot Tables*)** no Excel.
- Transformar grandes listas e relatórios de manutenção em resumos executivos consolidados sem precisar digitar fórmulas complexas.
- Configurar os 4 quadrantes da Tabela Dinâmica: **Filtros**, **Colunas**, **Linhas** e **Valores** (Soma, Média, Contagem).
- Inserir **Segmentadores de Dados (*Slicers*)** para criar filtros visuais interativos e relatórios dinâmicos tipo *Dashboard*.
- Atualizar tabelas dinâmicas quando novos dados forem inseridos na planilha de origem.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O que é uma Tabela Dinâmica?
Em sistemas de manutenção de frotas (MRO), extraímos relatórios com centenas ou milhares de linhas. Analisar manualmente quem fez cada serviço, qual aeronave custou mais caro ou qual sistema quebrou com mais frequência levaria horas de fórmulas.
A **Tabela Dinâmica** reorganiza (dinamiza) esses dados instantaneamente por meio de arrastar e soltar campos:

```
OS 4 QUADRANTES DE UMA TABELA DINÂMICA:
 +---------------------------+---------------------------+
 | FILTROS                   | COLUNAS                   |
 | (Filtra toda a tabela por | (Cria colunas para cada   |
 |  ex: Ano ou Base)         |  tipo de manutenção)      |
 +---------------------------+---------------------------+
 | LINHAS                    | VALORES                   |
 | (Agrupa dados em linhas,  | (Aplica cálculo: Soma de  |
 |  ex: Prefixo da Aeronave) |  Custos ou Qtd de OSs)    |
 +---------------------------+---------------------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Preparando a Base de Dados de Manutenção

1. Abra o Excel e crie uma aba chamada `Base_Dados_MRO`.
2. Monte uma base com 10 a 15 linhas de registros com as seguintes colunas:
   - `Prefixo` (PR-AAA, PT-BBB, PR-CCC)
   - `Modelo` (C172, Seneca, Baron)
   - `Sistema ATA` (Motor, Aviônica, Estrutura, Trem de Pouso)
   - `Tipo de Serviço` (Preventiva, Corretiva, Modificação)
   - `Mecânico Responsável` (Carlos, Mariana, Roberto)
   - `Horas de Trabalho`
   - `Custo Total (R$)`

---

### Atividade 2: Criação da Primeira Tabela Dinâmica

1. Clique em qualquer célula dentro da sua tabela de dados.
2. Acesse a guia **Inserir** -> clique em **Tabela Dinâmica** -> selecione **Nova Planilha** -> clique em **OK**.
3. O Excel abrirá uma nova aba com o painel **Campos da Tabela Dinâmica** à direita.
4. **Montando o Resumo por Aeronave:**
   - Arraste o campo `Prefixo` para a área de **Linhas**.
   - Arraste o campo `Tipo de Serviço` para a área de **Colunas**.
   - Arraste o campo `Custo Total (R$)` para a área de **Valores**.
5. Observe como o Excel cruzou instantaneamente os custos de cada aeronave por tipo de serviço!
6. Formate os números da tabela como **Moeda (`R$`)**.

---

### Atividade 3: Mudando os Tipos de Cálculo (Soma vs. Contagem / Média)

1. Para descobrir quantas ordens de serviço cada mecânico realizou:
   - Crie uma nova Tabela Dinâmica.
   - Arraste `Mecânico Responsável` para **Linhas**.
   - Arraste `Prefixo` para **Valores** (como é texto, o Excel calcula automaticamente a *Contagem* de serviços).
2. Para descobrir a **Média de Horas de Trabalho**:
   - Arraste `Horas de Trabalho` para **Valores**.
   - Clique na setinha ao lado de *Soma de Horas de Trabalho* -> **Configurações do Campo de Valor...** -> selecione **Média** -> clique em **OK**.

---

### Atividade 4: Inserção de Segmentadores de Dados (*Slicers*)

1. Clique sobre a sua Tabela Dinâmica.
2. Acesse a guia superior **Análise de Tabela Dinâmica** (ou **Tabela Dinâmica**).
3. Clique em **Inserir Segmentação de Dados**.
4. Marque as caixas: `Sistema ATA` e `Modelo`.
5. O Excel criará botões flutuantes na tela:
   - Clique no botão `Motor` e veja a tabela inteira filtrar apenas os custos de motor!
   - Clique em `Seneca` para ver apenas os dados do bimotor Seneca!
   - Clique no ícone do funil com `X` no canto superior do segmentador para limpar o filtro.

---

## 4. EXERCÍCIO DE FIXAÇÃO EM SALA

Utilizando a base de dados de voos de uma escola de aviação:
1. Monte uma Tabela Dinâmica mostrando o **Total de Horas Voadas por cada Instrutor**.
2. Adicione um **Segmentador de Dados por Modelo de Aeronave**.
3. Adicione um segundo Segmentador por **Mês do Voo**.

---

## 5. DICAS IMPORTANTES SOBRE TABELAS DINÂMICAS

- **Atualização de Dados:** Se você alterar um número na base de dados original, a Tabela Dinâmica não muda na mesma hora. Você deve clicar com o botão direito sobre ela e selecionar **Atualizar** (ou pressionar `Alt + F5`).
- Nunca deixe linhas ou colunas totalmente em branco no meio da base de dados original para não quebrar a leitura da tabela dinâmica.
