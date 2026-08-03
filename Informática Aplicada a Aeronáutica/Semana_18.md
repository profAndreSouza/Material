# ROTEIRO DE AULA EXPANDIDO — SEMANA 18
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Prova Prática 2 — Roteiro de Apoio e Orientações da Avaliação Somativa 2  
**Ambiente:** Laboratório de Informática (Avaliação Individual)  

---

## 1. OBJETIVOS DE INFORMATICA
Nesta sessão de avaliação somativa 2, você demonstrará domínio individual em:
- **MS Excel Avançado:** Construção de Tabelas Dinâmicas, Segmentadores de Dados (*Slicers*) e Dashboards Interativos.
- **Automação Prática:** Gravação e Execução de Macros, salvamento no formato `.xlsm`, criação de botões de comando e Controles de Formulário.
- **Gestão de Projetos no MS Project:** Estruturação de EAPs, definição de durações, vinculação de predecessoras, identificação visual do Caminho Crítico e alocação de recursos.

---

## 2. INSTRUÇÕES GERAIS DE EXECUÇÃO EM LABORATÓRIO

> [!IMPORTANT]
> **Normas de Aplicação da Prova Prática 2:**
> 1. A prova é estritamente **individual** e sem consulta externa.
> 2. O tempo total de execução no computador é de **90 minutos**.
> 3. Todos os arquivos deverão ser salvos na pasta criada por você em `C:\Prova_Pratica_2_SeuNome\`.
> 4. O arquivo do Excel **DEVE** ser salvo na extensão `.xlsm` para preservar as macros gravadas!

---

## 3. ESTRUTURA DO DESAFIO PRÁTICO DA PROVA 2

```
[PASTA DA PROVA: C:\Prova_Pratica_2_SeuNome\]
 ├── Parte1_Dashboard_e_Macros.xlsm  (MS Excel: Tabela Dinâmica, Slicers, Dashboard e Botão com Macro)
 └── Parte2_Cronograma_Projeto.mpp   (MS Project: EAP, Predecessoras, Caminho Crítico e Recursos)
```

### Escopo das Tarefas Esperadas:

#### PARTE A: MS EXCEL AVANÇADO E MACROS (Peso na Prova: 60%)
1. Importar a base de dados de ordens de serviço.
2. Criar 2 Tabelas Dinâmicas resumindo custos por aeronave e por sistema.
3. Inserir 2 Segmentadores de Dados interativos (*Slicers*).
4. Gravar uma **Macro de Limpeza/Atualização** e atribuir a um Botão de Comando desenhado na planilha.
5. Salvar como Pasta de Trabalho Habilitada para Macro (`.xlsm`).

#### PARTE B: MS PROJECT (Peso na Prova: 40%)
1. Criar a EAP contendo 1 Tarefa Resumo, 5 Subtarefas e 1 Marco de Encerramento (`0d`).
2. Configurar o modo de agendamento **Automático**.
3. Vincular as tarefas pela coluna Predecessoras.
4. Destacar visualmente o **Caminho Crítico** em vermelho no Gráfico de Gantt.
5. Cadastrar 1 recurso humano de trabalho e atribuir às subtarefas.

---

## 4. CRITÉRIOS COMPUTACIONAIS DE AVALIAÇÃO

| Requisito Avaliado | Critério de Correção do Professor |
| :--- | :--- |
| **Execução da Macro** | O botão executa a rotina gravada sem travar ou emitir mensagens de erro no Excel. |
| **Formato de Arquivo** | Arquivo salvo como `.xlsm`. (Salvar como `.xlsx` acarreta perda da nota de macros). |
| **Interatividade do Dashboard** | Clicar nos segmentadores de dados atualiza todos os gráficos dinâmicos conectados. |
| **Caminho Crítico no MS Project** | As barras vermelhas e setas de vinculação estão visíveis e corretas no Gantt. |
