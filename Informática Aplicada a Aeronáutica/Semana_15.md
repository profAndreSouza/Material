# ROTEIRO DE AULA EXPANDIDO — SEMANA 15
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Gestão de Projetos no MS Excel I — Estrutura Analítica do Projeto (EAP / WBS) e Construção de Gráficos de Gantt Dinâmicos  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** Projetos Integradores I a IV (TAM-001 a TAM-004) e EAM-007 (Gerenciamento da Manutenção)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender os fundamentos computacionais de **Gestão de Projetos (PMBOK)** aplicados à manutenção de aeronaves e projetos acadêmicos integradores.
- Construir a **Estrutura Analítica do Projeto (EAP / WBS - Work Breakdown Structure)** hierarquizando tarefas resumo, pacotes de trabalho e marcos (*milestones*).
- Implementar **Gráficos de Gantt Dinâmicos no Microsoft Excel** utilizando duas técnicas computacionais profissionais:
  1. **Método dos Gráficos de Barras Empilhadas** com série de início invisível.
  2. **Método da Formatação Condicional Automatizada por Datas de Calendário**.
- Vincular datas de início, durações em dias e datas de término calculadas automaticamente por fórmulas (`=Data_Início + Duração`).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Por que gerenciar cronogramas no Excel?
Embora existam softwares dedicados (como MS Project ou Primavera), a esmagadora maioria das oficinas de manutenção, hangares e equipes de engenharia utiliza o **Microsoft Excel** pela portabilidade e facilidade de compartilhamento na nuvem (Office 365).

### 2.2 Estrutura da EAP e o Gráfico de Gantt
- **EAP / WBS:** Decomposição hierárquica das entregas do projeto.
- **Gráfico de Gantt:** Representação visual bidimensional onde as tarefas ficam no eixo vertical e o tempo (dias/semanas) no eixo horizontal, com barras horizontais cujo comprimento representa a duração da atividade.

```
ESTRUTURA DA TABELA DE PROJETO NO EXCEL:
 +------+-------------------------------+------------+---------+------------+
 | ID   | TAREFA / PACOTE DE TRABALHO   | INÍCIO     | DURAÇÃO | TÉRMINO    |
 +------+-------------------------------+------------+---------+------------+
 | 1.0  | REVISÃO DO TREM DE POUSO      | 01/11/2026 | 15 dias | 15/11/2026 |
 | 1.1  | Desmontagem e Lavagem         | 01/11/2026 | 3 dias  | 03/11/2026 |
 | 1.2  | Inspeção NDT por Líq. Penetr. | 04/11/2026 | 4 dias  | 07/11/2026 |
 | 1.3  | Troca de Vedações e Pneus     | 08/11/2026 | 5 dias  | 12/11/2026 |
 | 1.4  | Teste de Retração e Extensão  | 13/11/2026 | 2 dias  | 14/11/2026 |
 | 1.5  | Liberação / Marco             | 15/11/2026 | 0 dias  | 15/11/2026 |
 +------+-------------------------------+------------+---------+------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Modelagem da Tabela de Tarefas e Datas Automáticas

1. Abra uma nova planilha no Excel e nomeie como `Cronograma_Gantt`.
2. Monte a estrutura de colunas:
   - `A3`: `ID` | `B3`: `Nome da Tarefa` | `C3`: `Data de Início` | `D3`: `Duração (Dias)` | `E3`: `Data de Término`
3. Preencha 5 tarefas da Inspeção de 100 Horas da aeronave:
   - `A4`: `1.1` | `B4`: `Posicionamento e Drenagem`    | `C4`: `01/11/2026` | `D4`: `2`
   - `A5`: `1.2` | `B5`: `Inspeção do Grupo Propulsor`  | `C5`: `03/11/2026` | `D5`: `4`
   - `A6`: `1.3` | `B6`: `Revisão do Sistema Elétrico`  | `C6`: `07/11/2026` | `D6`: `3`
   - `A7`: `1.4` | `B7`: `Testes de Aviônica e Bússola` | `C7`: `10/11/2026` | `D7`: `2`
   - `A8`: `1.5` | `B8`: `Voo de Checagem e Liberação`  | `C8`: `12/11/2026` | `D8`: `1`
4. Na célula `E4` (Término), digite a fórmula:
   `=C4 + D4`
5. Arraste a fórmula de `E4` até `E8`.

---

### Atividade 2: Construção do Gráfico de Gantt Dinâmico via Barras Empilhadas

1. Selecione as colunas de **Nome da Tarefa (`B3:B8`)** e **Data de Início (`C3:C8`)**.
2. Acesse a guia **Inserir** -> grupo **Gráficos** -> **Barras 2D** -> **Barras Empilhadas**.
3. Clique com o botão direito no gráfico -> **Selecionar Dados...**:
   - Clique em **Adicionar** nova série:
     - Nome da Série: clique na célula `D3` (`Duração (Dias)`).
     - Valores da Série: selecione o intervalo `D4:D8`.
   - Clique em **OK**.
4. **Transformar a Série de Início em "Invisível":**
   - Clique com o botão direito nas primeiras barras (as que representam a Data de Início).
   - Escolha **Formatar Série de Dados** -> **Preenchimento: Sem Preenchimento** e **Linha: Sem Linha**.
   - *Mágica Computacional:* As barras de duração agora flutuam no ar exatamente sobre o período em que a tarefa acontece!
5. **Inverter a Ordem das Tarefas (de cima para baixo):**
   - Dê um duplo clique no eixo vertical (onde estão os nomes das tarefas).
   - No painel lateral de formatação do eixo, marque a opção **Categorias em ordem inversa**.

---

### Atividade 3: Método Alternativo — Gantt via Formatação Condicional

1. A partir da coluna `G3`, monte o calendário diário com as datas: `01/11`, `02/11`, `03/11`, ..., `15/11`.
2. Selecione a grade de células sob as datas correspondentes às tarefas (`G4:U8`).
3. Acesse **Página Inicial** -> **Formatação Condicional** -> **Nova Regra** -> **Usar uma fórmula para determinar quais células devem ser formatadas**.
4. Digite a fórmula lógica:
   `=E(G$3>=$C4; G$3<=$E4)`
5. Clique em **Formatar** e escolha um preenchimento Azul Marinho.
6. Clique em **OK**. Todas as células que estão dentro do período de cada tarefa serão coloridas automaticamente como barras de Gantt perfeitas!

---

## 4. EXERCÍCIO DE FIXAÇÃO INTENSIVO

**Desafio de Planejamento de Projeto Integrador:**
Monte o cronograma no Excel para o seu **Projeto Integrador I (TAM-001)** contendo:
- 8 Pacotes de Trabalho (Pesquisa Inicial, Modelagem CAD, Cálculos Estruturais, Montagem do Protótipo, Testes, Relatório Escrito e Apresentação Final).
- Durações estimadas e datas calculadas por fórmulas.
- Gráfico de Gantt formatado profissionalmente no Excel.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Ctrl + ;` | Insere a **Data Atual** do sistema estática na célula |
| `Ctrl + Shift + 3` | Formata o número da célula como **Data (DD/MM/AAAA)** |
| `Alt + F1` | Gera o gráfico instantâneo da seleção |
