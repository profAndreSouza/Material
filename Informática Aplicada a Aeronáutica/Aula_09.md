# ROTEIRO DE AULA EXPANDIDO — AULA 09
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 16/10/2026  
**Tema:** MS Excel VI — Engenharia Gráfica, Gráficos de Dispersão ($X, Y$), Linhas de Tendência/Regressão e Gráficos Combinados  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** EST-002 (Estatística Descritiva), Resistência dos Materiais e Análise de Fratura, e EAA-014 (Aerodinâmica)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Escolher a representação gráfica computacional adequada para diferentes tipos de variáveis de engenharia (discretas, temporais e contínuas).
- Construir **Gráficos de Dispersão ($X, Y$)** para plotar dados de ensaios laboratoriais (Tensão vs. Deformação, Sustentação vs. Ângulo de Ataque).
- Adicionar **Linhas de Tendência (*Trendlines*)** e exibir a **Equação da Reta de Regressão e o Coeficiente de Determinação ($R^2$)** no Excel.
- Construir **Gráficos Combinados** (Colunas + Linhas) utilizando **Eixo Secundário** para comparar variáveis em escalas distintas (ex: Horas de Voo vs. Custo Total de Falhas).
- Personalizar leiautes visuais profissionais com rótulos, eixos formatados e temas institucionais.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Gráfico de Linhas vs. Gráfico de Dispersão ($X, Y$)
- **Gráfico de Linhas:** Trata o eixo X como categorias com espaçamento uniforme (ex: meses Jan, Fev, Mar). **NÃO deve ser usado para equações físicas!**
- **Gráfico de Dispersão ($X, Y$ - Scatter Plot):** Trata tanto o eixo X quanto o eixo Y como números contínuos. É o único gráfico correto para plotar ensaios de tração, curvas de calibração e aerodinâmica.

```
+------------------------------------------------------------------------------------+
|                         GUIA DE ESCOLHA DE GRÁFICOS                                |
+------------------------------------------------------------------------------------+
| TIPO DE GRÁFICO      | APLICAÇÃO NA ENGENHARIA AERONÁUTICA                         |
| -------------------- | ----------------------------------------------------------- |
| Colunas / Barras     | Comparação de falhas entre sistemas ou modelos de avião.    |
| Linhas               | Evolução temporal de consumo de óleo ao longo dos meses.    |
| Dispersão (X, Y)     | Curvas de Tensão x Deformação; Arrasto x Velocidade; $Cl/Cd$.|
| Combinado (Eixo 2)   | Horas Voadas (eixo esquerdo) vs. Taxa de Falhas (eixo dir). |
+------------------------------------------------------------------------------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Gráfico de Dispersão e Linha de Regressão (Ensaio de Resistência dos Materiais)

Com base nos dados de ligas de alumínio e materiais compostos extraídos da cartilha [`docs/03-asas-do-conhecimento-construcao-de-aeronaves.pdf`](docs/03-asas-do-conhecimento-construcao-de-aeronaves.pdf):
1. Monte os dados de um ensaio de tração de uma liga de alumínio aeronáutico (Al 2024-T3):
   - `A1`: `Deformação Específica (mm/mm)` | `B1`: `Tensão Aplicada (MPa)`
   - `A2`: `0,001` | `B2`: `72`
   - `A3`: `0,002` | `B3`: `145`
   - `A4`: `0,003` | `B4`: `215`
   - `A5`: `0,004` | `B5`: `290`
   - `A6`: `0,005` | `B6`: `360`
   - `A7`: `0,006` | `B7`: `410` (Início da não-linearidade)
2. Selecione o intervalo `A1:B7`.
3. Acesse a guia **Inserir** -> grupo **Gráficos** -> **Dispersão (X, Y) com Marcadores e Linhas Suaves**.
4. **Adicionar Linha de Tendência e Equação:**
   - Clique com o botão direito sobre a linha do gráfico -> **Adicionar Linha de Tendência...**.
   - Tipo: **Linear**.
   - Marque as opções: **Exibir Equação no gráfico** e **Exibir valor de R-quadrado no gráfico**.
5. Observe que o coeficiente angular da reta ($y = mx + b$) representa o **Módulo de Elasticidade (Módulo de Young)** do material!

---

### Atividade 2: Construção do Gráfico Combinado com Eixo Secundário

1. Monte a tabela de acompanhamento mensal da frota:
   - `A1`: `Mês` | `B1`: `Horas Voadas na Frota` | `C1`: `Nº de Falhas Técnicas Reportadas`
   - `A2`: `Jan` | `B2`: `320` | `C2`: `4`
   - `A3`: `Fev` | `B3`: `410` | `C2`: `5`
   - `A4`: `Mar` | `B4`: `280` | `C2`: `2`
   - `A5`: `Abr` | `B5`: `510` | `C2`: `8`
   - `A6`: `Mai` | `B6`: `480` | `C2`: `6`
2. Selecione `A1:C6`.
3. Acesse **Inserir** -> **Gráfico Combinado** -> **Criar Gráfico Combinado Personalizado**:
   - `Horas Voadas`: **Colunas Agrupadas** (Eixo Principal - Esquerdo).
   - `Nº de Falhas`: **Linha com Marcadores**, marcando a caixinha **Eixo Secundário** (Eixo Direito).
4. Clique em **OK**. Observe que ambas as variáveis agora podem ser visualizadas claramente na mesma tela sem distorção de escala!

---

## 4. EXERCÍCIO DE FIXAÇÃO INTENSIVO

**Desafio de Aerodinâmica no Excel:**
Com base nos dados de coeficientes de sustentação e polares de arraste extraídos da cartilha [`docs/05-cartilha-asas-do-conhecimento-aerodinamica-do-voo.pdf`](docs/05-cartilha-asas-do-conhecimento-aerodinamica-do-voo.pdf):
- Crie uma tabela relacionando o `Ângulo de Ataque (graus)` (de 0° a 16°) e o `Coeficiente de Sustentação (Cl)` de um perfil de asa (NACA 0012).
- Plote o gráfico em **Dispersão ($X, Y$)**.
- Adicione uma **Linha de Tendência Polinomial de Grau 2 ou 3**.
- Identifique graficamente o ponto de estol (máximo sustentador antes da queda da curva).

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + F1` | Cria o gráfico padrão na folha atual com 1 comando |
| `Ctrl + 1` | Abre a barra lateral de formatação do elemento gráfico selecionado |
| `F11` | Cria o gráfico em uma aba de planilha dedicada em tela cheia |
