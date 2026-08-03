# ROTEIRO DE AULA EXPANDIDO — SEMANA 12
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel V — Visualização de Dados, Design de Gráficos Avançados e Gráficos Combinados  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Escolher o tipo de gráfico adequado para representar diferentes tipos de dados computacionais.
- Criar e formatar **Gráficos de Colunas, Barras, Linhas e Pizza/Rosca**.
- Construir **Gráficos Combinados** (ex: Colunas + Linhas) utilizando eixo secundário.
- Personalizar elementos de um gráfico (Títulos, Legendas, Rótulos de Dados, Eixos e Linhas de Grade).
- Adicionar **Linhas de Tendência** (*Trendlines*) para análise preditiva visual.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Escolha do Tipo Certo de Gráfico

```
+--------------------------------------------------------------------------------+
|                         GUIA DE ESCOLHA DE GRÁFICOS                            |
+--------------------------------------------------------------------------------+
| TIPO DE GRÁFICO    | QUANDO UTILIZAR NO EXCEL                                  |
| ------------------ | --------------------------------------------------------- |
| Colunas / Barras   | Comparar valores entre categorias discretas.              |
| Linhas             | Mostrar evolução contínua ao longo do TEMPO (Tendência).  |
| Pizza / Rosca      | Mostrar a PROPORÇÃO/PERCENTUAL das partes em um TODO (100%)|
| Combinado          | Comparar duas métricas com escalas diferentes no mesmo chart|
+--------------------------------------------------------------------------------+
```

### 2.2 O que é um Gráfico Combinado com Eixo Secundário?
Imagine comparar o **Custo Total de Manutenção (R$ 500.000)** com o **Número de Falhas Ocorridas (3 falhas)**.
- Se colocados no mesmo eixo vertical (Y), a linha das falhas parecerá colada no zero (pois 3 é insignificante perto de 500.000).
- **Solução Computacional:** Atribuir a série "Número de Falhas" ao **Eixo Secundário** no lado direito do gráfico.

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção de um Gráfico Combinado (Colunas + Linha com Eixo Secundário)

1. Monte a base de dados abaixo no MS Excel:
   - `A1`: `Mês` | `B1`: `Horas de Voo` | `C1`: `Custo Manutenção (R$)`
   - `A2`: `Jan` | `B2`: `120` | `C2`: `45000`
   - `A3`: `Fev` | `B3`: `150` | `C3`: `52000`
   - `A4`: `Mar` | `B4`: `90`  | `C4`: `88000` (Inspeção pesada)
   - `A5`: `Abr` | `B5`: `210` | `C5`: `31000`

2. Selecione todo o intervalo `A1:C5`.
3. Acesse a guia **Inserir** -> grupo **Gráficos** -> clique no ícone **Inserir Gráfico Combinado** -> **Criar Gráfico Combinado Personalizado...**.
4. Na janela de configuração:
   - Para a série `Horas de Voo`: Tipo de Gráfico -> **Linha com Marcadores**. Marque a caixinha **Eixo Secundário**.
   - Para a série `Custo Manutenção (R$)`: Tipo de Gráfico -> **Colunas Agrupadas**.
5. Clique em **OK**. Observe que o custo (em R$) ficará no eixo Y esquerdo e as Horas de Voo no eixo Y direito!

---

### Atividade 2: Personalização e Estilização do Gráfico

1. Clique no título do gráfico e edite para: `Evolução de Horas de Voo vs. Custos Operacionais`.
2. Clique no sinal de mais **`+`** verde ao lado do gráfico (Elementos do Gráfico):
   - Marque **Rótulos de Dados** para exibir os números em cima das colunas.
   - Marque **Tabela de Dados** se desejar exibir a planilha anexada ao gráfico.
3. Para adicionar uma linha de tendência:
   - Clique com o botão direito sobre a linha do gráfico -> **Adicionar Linha de Tendência...**.
   - Escolha **Linear**.

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Exercício no Excel:**
Crie uma planilha de acompanhamento de falhas de componentes:
- Colunas: `Sistema Aeronáutico` (`Aviônicos`, `Hidráulico`, `Motor`, `Célula`) | `Qtd de Falhas no Ano`.
- Gere um **Gráfico de Rosca (Donut Chart)** mostrando a porcentagem de falhas pertencente a cada sistema.
- Formate os rótulos de dados para exibir o **Nome da Categoria e a Porcentagem (%)**.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + F1` | Insere um gráfico padrão na folha de planilha atual com 1 clique |
| `F11` | Cria instantaneamente um gráfico em uma **Nova Aba de Planilha** dedicada |
| `Ctrl + 1` | Abre o painel lateral de **Formatador do Elemento do Gráfico** selecionado |
