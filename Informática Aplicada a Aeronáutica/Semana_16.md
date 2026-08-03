# ROTEIRO DE AULA EXPANDIDO — SEMANA 16
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Feriado Consciência Negra — Material de Apoio e Estudo Autônomo em MS Project  
**Ambiente:** Estudo Autônomo  

---

## 1. OBJETIVOS DE INFORMATICA
Nesta sessão de estudo autônomo, você consolidará individualmente:
- A definição das dependências lógicas (*Predecessoras*) entre tarefas no MS Project.
- O conceito dos 4 tipos de vínculos computacionais entre tarefas:
  - **Término para Início (TI / FS):** A tarefa B só começa quando a tarefa A terminar.
  - **Início para Início (II / SS):** As tarefas A e B começam juntas.
  - **Término para Término (TT / FF):** As tarefas A e B terminam juntas.
  - **Início para Término (IT / SF):** A tarefa B só termina quando a tarefa A começar.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Tipos de Dependências entre Tarefas

```
1. TÉRMINO PARA INÍCIO (TI / FS) - Mais comum (90% dos casos):
   [ Tarefa A: Desmontagem ] ───> [ Tarefa B: Limpeza ]

2. INÍCIO PARA INÍCIO (II / SS) - Execução paralela:
   [ Tarefa A: Inspeção Visual ] ──┐
   [ Tarefa B: Teste Elétrico   ] ──┴──> Ambas iniciam no mesmo instante

3. TEMPO DE DECALAGEM (LAG / LEAD):
   - Tempo de Espera (Lag): "+2d" (Ex: aguardar secagem de tinta por 2 dias após pintar).
   - Antecipação (Lead): "-1d" (Ex: iniciar preparação 1 dia antes do término da tarefa anterior).
```

---

## 3. EXERCÍCIO DE FIXAÇÃO PRÁTICA AUTÔNOMA

### Roteiro de Treinamento no MS Project:

1. Abra o arquivo do MS Project criado na Semana 15 (ou crie um novo arquivo).
2. Na coluna **Predecessoras**:
   - Para a linha 3 (`Inspeção NDT`), digite `2` (significa que depende do término da linha 2).
   - Para a linha 4 (`Substituição das Bronzinas`), digite `3`.
   - Para a linha 5 (`Montagem e Teste`), digite `4`.
   - Para a linha 6 (`Aprovação / Milestone`), digite `5`.
3. Observe o **Gráfico de Gantt** no lado direito da tela:
   - Veja como o MS Project desenha automaticamente as **setas de vinculação** conectando as barras azuis!
   - Observe como a Data de Término do Projeto é recalculada dinamicamente pelo software.

---

## 4. CHECKLIST DE AUTOAVALIAÇÃO EM MS PROJECT

- [ ] Consigo criar uma Estrutura Analítica do Projeto (EAP) com tarefas resumo e subtarefas?
- [ ] Sei alterar o modo de agendamento de Manual para Automático?
- [ ] Compreendo por que um Marco (*Milestone*) deve ter duração `0d`?
- [ ] Sei vincular tarefas utilizando o número da linha na coluna Predecessoras?
