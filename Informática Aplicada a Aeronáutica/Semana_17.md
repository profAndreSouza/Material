# ROTEIRO DE AULA EXPANDIDO — SEMANA 17
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Project II — Redes PERT/CPM, Gráfico de Gantt, Alocação de Recursos, Caminho Crítico e Mini-PBL 4  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Identificar e destacar visualmente o **Caminho Crítico (*Critical Path*)** no Microsoft Project.
- Compreender o conceito computacional de **Margem de Folga Total** de uma tarefa.
- Cadastrar Recursos na planilha de recursos (**Mão de Obra / Trabalho, Material e Custo**).
- Atribuir recursos técnicos e equipamentos às tarefas do projeto.
- Detectar e resolver **Superalocação de Recursos** (quando um mesmo técnico é escalado para trabalhar 16 horas no mesmo dia).
- Executar o **Mini-PBL 4** (Planejamento e Otimização do Cronograma de Inspeção Tipo C/D com Caminho Crítico no MS Project).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O Método do Caminho Crítico (CPM - Critical Path Method)
- **Caminho Crítico:** É a sequência de tarefas encadeadas que determina a **DURAÇÃO TOTAL MÍNIMA** do projeto.
- **Característica Computacional:** As tarefas que pertencem ao Caminho Crítico possuem **FOLGA ZERO**. Se qualquer tarefa crítica atrasar 1 dia, o projeto inteiro atrasará 1 dia!
- **No MS Project:** O software calcula a rede PERT/CPM automaticamente e exibe as barras críticas em **COR VERMELHA** no Gráfico de Gantt.

```
                  [ Tarefa B: Inspeção (3d) ] ─── Folga = 2 dias (Barra Azul)
                 /                           \
[ Tarefa A (2d) ]                             [ Tarefa D: Entrega (1d) ]
                 \                           /
                  [ Tarefa C: Reparo (6d)   ] ─── CAMINHO CRÍTICO (Barra Vermelha)
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Destacando o Caminho Crítico no MS Project

1. Abra o seu projeto no MS Project contendo tarefas encadeadas com predecessoras.
2. Acesse a guia **Formato do Gráfico de Gantt** (ou **Formato**).
3. No grupo *Estilos de Baramento*, marque a caixinha **Tarefas Críticas**.
4. Observe que as tarefas que definem o prazo final do projeto mudarão instantaneamente da cor **Azul** para a cor **VERMELHA**!

---

### Atividade 2: Cadastro e Alocação de Recursos

1. No canto inferior direito da janela, clique no ícone **Planilha de Recursos** (ou acesse a guia **Exibir** -> **Planilha de Recursos**).
2. Cadastre os recursos na tabela:
   - `Nome do Recurso`: `Mecânico Especialista` | `Tipo`: `Trabalho` | `Taxa Padrão`: `R$ 80,00/h`
   - `Nome do Recurso`: `Filtro de Óleo PN-101` | `Tipo`: `Material` | `Rótulo`: `Unidade` | `Taxa`: `R$ 150,00`
3. Volte para a visualização do **Gráfico de Gantt**.
4. Na coluna *Nomes dos Recursos* da tabela de tarefas:
   - Selecione a subtarefa `Desmontagem do Motor` e escolha `Mecânico Especialista`.
   - Selecione a subtarefa `Substituição` e escolha `Mecânico Especialista; Filtro de Óleo PN-101`.

---

### Atividade 3: Nivelamento e Resolução de Superalocação

Se você atribuir o `Mecânico Especialista` a duas tarefas simultâneas que acontecem no mesmo horário, o MS Project exibirá um **ícone de dois bonequinhos vermelhos** alertando para a **Superalocação**.
1. Acesse a guia **Recurso** -> grupo *Nivelar* -> clique em **Nivelar Tudo**.
2. O MS Project adiará automaticamente a tarefa secundária para resolver o conflito de agenda do profissional!

---

## 4. DESAFIO PRÁTICO (MINI-PBL 4)

**Enunciado do Mini-PBL 4:**
Desenvolva o **Planejamento de Cronograma de uma Inspeção Aeronáutica Tipo C/D** no MS Project contendo:

1. EAP estruturada com no mínimo 2 Tarefas Resumo, 8 Subtarefas e 2 Marcos de Controle.
2. Vínculos lógicos de dependência (Predecessoras) configurados em todas as subtarefas.
3. Exibição do **Caminho Crítico** destacado em vermelho no Gráfico de Gantt.
4. Cadastramento e atribuição de no mínimo 2 recursos de Mão de Obra e 1 recurso de Material.
5. Ajuste de superalocação garantindo que nenhum recurso trabalhe acima de 100% da sua capacidade.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Project |
| :--- | :--- |
| `Ctrl + F5` | Ir para a tarefa no gráfico de Gantt |
| `F9` | Recalcular todo o cronograma do projeto |
| `Alt + F10` | Abre a janela de atribuição de recursos |
