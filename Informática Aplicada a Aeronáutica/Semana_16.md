# ROTEIRO DE AULA EXPANDIDO — SEMANA 16
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Feriado Consciência Negra — Material de Apoio e Estudo Autônomo em Modelagem de Projetos no Excel  
**Ambiente:** Estudo Autônomo (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** Projetos Integradores I a IV (TAM-001 a TAM-004) e EAM-007 (Gerenciamento da Manutenção)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Nesta sessão de estudo autônomo, você consolidará:
- A vinculação de dependências lógicas (*Predecessoras*) entre tarefas no Excel.
- O cálculo das datas de início vinculadas ao término de tarefas anteriores via fórmulas:
  $$\text{Data\_Início}_{\text{Tarefa B}} = \text{Data\_Término}_{\text{Tarefa A}} + 1$$
- A preparação da lógica computacional para o cálculo do **Caminho Crítico (PERT/CPM)** da próxima aula.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Tipos de Vínculos Lógicos entre Tarefas no Excel
1. **Término para Início (TI):** A tarefa B só pode iniciar após o término da tarefa A.
   - Fórmula no Excel: `=E4 + 1` (onde `E4` é a data de término da tarefa A).
2. **Início para Início (II):** As tarefas A e B iniciam na mesma data.
   - Fórmula no Excel: `=C4` (onde `C4` é a data de início da tarefa A).
3. **Múltiplas Predecessoras:** Se a Tarefa C depende do término da Tarefa A **E** da Tarefa B:
   - Fórmula no Excel: `=MÁXIMO(E4; E5) + 1` (o início será no dia seguinte à tarefa mais tardia!).

---

## 3. EXERCÍCIO PRÁTICO DE TREINAMENTO AUTÔNOMO

1. Abra a planilha de cronograma criada na Semana 15.
2. Adicione uma coluna chamada `ID_Predecessora`.
3. Utilize a função `=SE()` e `=MÁXIMO()` para fazer com que a Data de Início de cada linha seja calculada automaticamente a partir da data de término da sua predecessora indicada.
4. *Teste:* Altere a duração da tarefa 1 de 2 dias para 6 dias. Veja todas as tarefas subsequentes e o Gráfico de Gantt se deslocarem automaticamente para a direita!

---

## 4. CHECKLIST DE AUTOAVALIAÇÃO

- [ ] Consigo construir um Gráfico de Gantt no Excel usando barras empilhadas e ocultando a série inicial?
- [ ] Sei criar um Gráfico de Gantt automatizado usando Formatação Condicional com a fórmula `=E(Data>=Inicio; Data<=Fim)`?
- [ ] Compreendo como a função `=MÁXIMO()` ajuda a definir a data de início quando uma tarefa possui múltiplas predecessoras?
