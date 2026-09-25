# ROTEIRO DE AULA EXPANDIDO — AULA 14
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 13/11/2026  
**Tema:** MS Excel X — Revisão Geral Prática & Simulado Integrado para a Avaliação Final  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** Integração com todas as disciplinas aplicadas do semestre  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula de revisão e simulado prático, você será capaz de:
- Integrar todos os conceitos de Excel trabalhados ao longo do semestre (Aulas 5 a 13).
- Resolver individualmente um **Simulado Prático Completo** com formato idêntico ao da Prova Final.
- Identificar e sanar dúvidas residuais com o apoio do professor em laboratório antes da avaliação oficial.
- Dominar a gestão de tempo no laboratório (download de arquivos, salvamento, fórmulas e formatação).

---

## 2. ESTRUTURA DO SIMULADO PRÁTICO INTEGRADO

O simulado simula a rotina real de um centro de manutenção aeronáutica e é composto por 4 abas integradas em uma única pasta de trabalho do Excel:

```
ESTRUTURA DA PASTA DE TRABALHO:
 [Simulado_Final_Excel.xlsx]
  ├── Aba 1: Conversoes_e_CG       (Trancamento $, conversão de unidades e cálculo de CG)
  ├── Aba 2: Controle_Inspecao     (Lógica condicional SE, E, OU e Formatação Condicional)
  ├── Aba 3: Catalogo_e_Requisicao (Busca de peças com PROCX ou PROCV e CONT.SE / SOMASE)
  └── Aba 4: Graficos_e_Resumo     (Gráfico de colunas/dispersão e Tabela Dinâmica com Slicers)
```

---

## 3. GUIA PASSO A PASSO DO SIMULADO EM LABORATÓRIO

### Bloco 1: Conversões e Peso e Balanceamento (Aba 1)
1. Crie uma tabela de parâmetros fixos: $1\text{ ft} = 0{,}3048\text{ m}$ e $1\text{ lb} = 0{,}453592\text{ kg}$.
2. Converta os dados de peso e altitude de 4 aeronaves usando referências absolutas (`$`).
3. Monte uma tabela de Peso e Balanceamento (Peso Básico Vazio, Pilotos, Passageiros, Bagagem, Combustível):
   - Calcule o Momento de cada estação ($M = P \times B$).
   - Calcule o Peso Total de Decolagem e o Momento Total com `=SOMA()`.
   - Calcule a posição do Centro de Gravidade ($CG = \frac{M_{\text{total}}}{P_{\text{total}}}$).

---

### Bloco 2: Lógica Condicional e Formatação Visual (Aba 2)
1. Dada uma lista de 6 aeronaves com as horas voadas desde a última inspeção de 100 horas:
   - Calcule as horas restantes (`=100 - Horas_Voadas`).
   - Use a função `=SE()` para retornar `"LIBERADO"` se horas voadas $\le 100$, ou `"INTERDITADO - RECOLHER"` se for maior.
   - Use um `=SE()` aninhado para classificar em: `"OK"` ($<85$ h), `"ALERTA"` ($85$ a $100$ h) e `"VENCIDO"` ($>100$ h).
2. Aplique **Formatação Condicional**:
   - Verde para "LIBERADO" e Vermelho para "INTERDITADO".

---

### Bloco 3: Catálogo, Buscas e Agregações (Aba 3)
1. Com uma tabela base de catálogo de peças (`PN`, `Descrição`, `Setor`, `Preço`):
   - Na tabela de requisição, use `=PROCX()` ou `=PROCV()` para preencher a Descrição e o Preço Unitário ao digitar o código PN.
   - Calcule o Subtotal (`Qtd * Preço`).
2. Calcule os indicadores gerenciais:
   - `=CONT.SE()` para contar quantas requisições foram feitas para o setor "Oficina Elétrica".
   - `=SOMASE()` para somar o valor financeiro total gasto com peças do setor "Motores".

---

### Bloco 4: Visualização e Tabelas Dinâmicas (Aba 4)
1. Insira um **Gráfico de Colunas** comparando os custos de manutenção por sistema aeronáutico com títulos claros nos eixos e rótulos de dados.
2. Crie uma **Tabela Dinâmica** agrupando os custos por prefixo de aeronave e adicione um **Segmentador de Dados (*Slicer*)** para filtrar por tipo de serviço.

---

## 4. FEEDBACK E PLANTÃO DE DÚVIDAS

Ao concluir o simulado:
- Compare seus resultados e fórmulas com o gabarito orientado pelo professor na lousa/projetor.
- Anote os pontos em que você teve maior dificuldade para revisar nos exercícios antes da Prova Final da próxima semana!

---

## 5. RECOMENDAÇÕES PARA A PROVA FINAL (27/NOV)

- Chegue pontualmente ao laboratório para inicialização e login na estação.
- Salve o arquivo frequentemente com o atalho `Ctrl + B` ou `Ctrl + S`.
- Leia atentamente os enunciados antes de digitar as fórmulas.
