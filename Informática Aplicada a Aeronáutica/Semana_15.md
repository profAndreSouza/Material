# ROTEIRO DE AULA EXPANDIDO — SEMANA 15
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Project I — Interface, EAP (WBS), Cadastro de Tarefas, Marcos (*Milestones*) e Durações  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Operar a interface do software de gerenciamento de projetos **Microsoft Project**.
- Configurar as opções iniciais do projeto (Data de Início, Calendário de Trabalho e Modo de Agendamento).
- Construir a **Estrutura Analítica do Projeto (EAP / WBS - Work Breakdown Structure)** hierarquizando tarefas principais e subtarefas.
- Inserir **Marcos (*Milestones*)** para sinalizar eventos críticos com duração zero.
- Inserir durações estimadas para cada pacote de trabalho.
- Entender a diferença entre **Agendamento Manual** e **Agendamento Automático**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 A Estrutura Analítica do Projeto (EAP / WBS)
O MS Project organiza um projeto decomponendo entregas grandes em tarefas menores agrupadas por níveis hierárquicos:

```
[PROJETO: INSPEÇÃO DE 100 HORAS DA AERONAVE]  <-- Tarefa Resumo do Projeto (Nível 0)
 │
 ├── 1. FASE DE PREPARAÇÃO E REBOCAGEM         <-- Tarefa Resumo (Nível 1)
 │    ├── 1.1 Posicionamento no Hangar          <-- Subtarefa (Nível 2)
 │    ├── 1.2 Drenagem do Sistema de Combustível <-- Subtarefa (Nível 2)
 │    └── 1.3 Abertura das Carenagens           <-- Subtarefa (Nível 2)
 │
 └── 2. MARCO DE LIBERAÇÃO DE INSPEÇÃO          <-- Marco / Milestone (Duração = 0d)
```

### 2.2 Modo de Agendamento (Manual vs. Automático)
- **Agendamento Manual (ícone de alfinete):** O usuário precisa digitar datas manualmente. Não calcula o cronograma automaticamente ao alterar durações.
- **Agendamento Automático (ícone de calendário azul):** O MS Project calcula automaticamente todas as datas de início e término com base nas durações e dependências entre tarefas. **(Modo recomendado!)**.

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Configuração Inicial do Projeto no MS Project

1. Abra o Microsoft Project e clique em **Projeto em Branco**.
2. Acesse a guia **Projeto** -> **Informações do Projeto**.
3. Na caixa *Data de Início*, defina a data de início do projeto (ex: próxima segunda-feira).
4. No rodapé da tela (Barra de Status), mude o modo padrão de novos agendamentos para **Agendado Automaticamente**.

---

### Atividade 2: Inserção da EAP e Identação de Tarefas

1. Na tabela de tarefas (lado esquerdo do MS Project), digite na coluna *Nome da Tarefa*:
   - Linha 1: `Revisão Geral do Grupo Motopropulsor`
   - Linha 2: `Desmontagem do Motor`
   - Linha 3: `Inspeção NDT dos Cilindros`
   - Linha 4: `Substituição das Bronzinas`
   - Linha 5: `Montagem e Teste no Banco`
   - Linha 6: `Aprovação para Retorno ao Serviço`

2. **Criar a Hierarquia (Identar):**
   - Selecione as linhas 2 a 5.
   - Acesse a guia **Tarefa** -> clique no ícone **Recuar Tarefa à Direita** (Seta verde para a direita ou `Alt + Shift + Seta Direita`).
   - Observe que a Linha 1 virou uma **Tarefa Resumo** em negrito!

---

### Atividade 3: Definindo Durações e Criando Marcos (*Milestones*)

1. Na coluna *Duração*:
   - Para `Desmontagem do Motor`, digite `2d` (2 dias).
   - Para `Inspeção NDT dos Cilindros`, digite `3d`.
   - Para `Substituição das Bronzinas`, digite `1d`.
   - Para `Montagem e Teste no Banco`, digite `2d`.
2. Para a linha 6 (`Aprovação para Retorno ao Serviço`), digite `0d`.
   - O MS Project converterá esta linha automaticamente em um **Marco (*Milestone*)**, exibido como um símbolo de **losango preto** no Gráfico de Gantt!

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Exercício no MS Project:**
Crie o cronograma inicial de uma Inspeção Pré-Voo contendo:
- 1 Tarefa Resumo Principal.
- 4 Subtarefas com durações especificadas em horas (`2h`, `4h`, `1h`, `3h`). *(Dica: no MS Project, digite `h` para horas e `d` para dias).*
- 1 Marco de encerramento com duração `0d`.
- Garanta que todas as tarefas estejam configuradas como **Agendado Automaticamente**.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Project |
| :--- | :--- |
| `Alt + Shift + Seta Direita` | Recua a tarefa selecionada (transforma em subtarefa) |
| `Alt + Shift + Seta Esquerda` | Promove a tarefa selecionada (transforma em tarefa resumo) |
| `Ctrl + F2` | Exibe a visualização de impressão do cronograma |
| `Ctrl + Shift + F5` | Ir para a tarefa selecionada no Gráfico de Gantt |
