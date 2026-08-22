# ROTEIRO DE AULA EXPANDIDO — AULA 12
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 30/10/2026  
**Tema:** MS Excel VIII — Engenharia Gráfica e Visualização de Dados de Manutenção  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** EST-002 (Estatística Descritiva) e EAM-007 (Gerenciamento da Manutenção)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Escolher o tipo correto de gráfico conforme o objetivo da análise de dados:
  - **Gráfico de Colunas/Barras:** Para comparar quantidades discretas (ex: falhas por sistema, horas voadas por aeronave).
  - **Gráfico de Linhas:** Para acompanhar a evolução temporal de variáveis contínuas (ex: consumo de combustível mês a mês).
  - **Gráfico de Dispersão ($X, Y$):** Para analisar a correlação física entre duas grandezas (ex: Altitude vs. Temperatura ISA, Velocidade vs. Consumo).
- Inserir **Linhas de Tendência (Regressão Linear)** e exibir a equação no gráfico.
- Personalizar elementos gráficos técnicos: Título do gráfico, Título dos Eixos ($X$ e $Y$), Legendas, Rótulos de Dados e Cores padronizadas.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Critérios para Escolha de Gráficos em Engenharia

| Pergunta da Análise | Melhor Tipo de Gráfico | Exemplo Aeronáutico |
| :--- | :--- | :--- |
| *Qual sistema teve mais ocorrências de manutenção?* | **Colunas ou Barras** | Comparação de falhas entre Capítulos ATA (Motor, Aviônica, Freios). |
| *Como o custo de manutenção evoluiu ao longo do ano?* | **Linhas** | Custo total em R$ de Janeiro a Dezembro. |
| *Existe relação direta entre a altitude e o consumo?* | **Dispersão ($X, Y$)** | Gráfico com pontos medidos e linha de tendência linear/polinomial. |

```
BOAS PRÁTICAS VISUAIS NO EXCEL:
 1. Sempre inclua Títulos Claros nos Eixos (Ex: Eixo Vertical: "Consumo (Litros/Hora)", Eixo Horizontal: "Velocidade (kt)").
 2. Evite gráficos 3D ou elementos excessivamente poluídos que dificultem a leitura técnica.
 3. Use rótulos de dados somente quando o valor exato for indispensável para a tomada de decisão.
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Gráfico de Colunas — Falhas por Sistema Aeronáutico

1. Abra o Excel e crie uma aba chamada `Graficos_Manutencao`.
2. Monte a tabela de falhas registradas no último semestre:
   - `A3`: `Sistema Aeronáutico (ATA)` | `B3`: `Qtd de Falhas Registradas`
   - `A4`: `ATA 24 - Sistema Elétrico` | `B4`: `14`
   - `A5`: `ATA 28 - Combustível`      | `B5`: `8`
   - `A6`: `ATA 32 - Trem de Pouso`    | `B6`: `22`
   - `A7`: `ATA 34 - Navegação/Aviônicos` | `B7`: `18`
   - `A8`: `ATA 72 - Grupo Motopropulsor`| `B8`: `31`
3. Selecione o intervalo `A3:B8`.
4. Acesse a guia **Inserir** -> grupo *Gráficos* -> **Gráfico de Colunas 2D** (Coluna Agrupada).
5. **Personalização do Gráfico:**
   - Altere o Título para: `DISTRIBUIÇÃO DE OCORRÊNCIAS DE MANUTENÇÃO POR CAPÍTULO ATA`.
   - Clique no botão `+` (Elementos do Gráfico) -> marque **Títulos dos Eixos**.
   - No Eixo Vertical, digite: `Número de Ocorrências`.
   - No Eixo Horizontal, digite: `Sistemas da Aeronave`.
   - Adicione **Rótulos de Dados** no topo das barras.

---

### Atividade 2: Gráfico de Linhas — Evolução Mensal do Custo por Hora de Voo

1. Na mesma aba, monte uma tabela com 6 meses de histórico:
   - `A11`: `Mês` | `B11`: `Custo por Hora de Voo (R$/FH)`
   - `A12`: `Jul/26` | `B12`: `1420`
   - `A13`: `Ago/26` | `B13`: `1380`
   - `A14`: `Set/26` | `B14`: `1550`
   - `A15`: `Out/26` | `B15`: `1490`
   - `A16`: `Nov/26` | `B16`: `1620`
   - `A17`: `Dez/26` | `B17`: `1580`
2. Selecione `A11:B17` -> **Inserir** -> **Gráfico de Linhas com Marcadores**.
3. Formate a linha com cor azul escura e marcadores destacados nos pontos de medição.
4. Ajuste o Eixo Vertical para começar em `1200` (clicando com o botão direito no eixo -> *Formatar Eixo* -> Limite Mínimo: `1200`).

---

### Atividade 3: Gráfico de Dispersão $X, Y$ e Linha de Tendência

1. Monte uma tabela correlacionando a **Velocidade de Cruzeiro (kt)** com o **Consumo de Combustível (GPH)**:
   - `D11:E16`:
     - `110 kt` $\to$ `8,5 GPH`
     - `120 kt` $\to$ `9,2 GPH`
     - `130 kt` $\to$ `10,8 GPH`
     - `140 kt` $\to$ `12,5 GPH`
     - `150 kt` $\to$ `14,8 GPH`
2. Selecione os dados -> **Inserir** -> **Gráfico de Dispersão ($X, Y$)** (somente marcadores).
3. Clique em um ponto do gráfico com o botão direito -> **Adicionar Linha de Tendência...**
4. Escolha **Linear** e marque a caixa: **Exibir Equação no Gráfico**.
5. Observe a equação física que modela o aumento do consumo com a velocidade!

---

## 4. EXERCÍCIO DE FIXAÇÃO EM SALA

Crie um gráfico para demonstrar o perfil da **Atmosfera Padrão ISA**:
- Tabela com altitudes de 0 a 30.000 ft (de 5.000 em 5.000 ft) e suas respectivas temperaturas teóricas em ºC ($T = 15 - 0{,}00198 \times h$).
- Gere um gráfico de dispersão com linha suave demonstrando o decaimento térmico com a altitude.

---

## 5. DICAS DE FORMATAÇÃO VISUAL

- Para mover o gráfico para uma nova folha dedicada, clique com o botão direito sobre o gráfico -> **Mover Gráfico...** -> **Nova Planilha**.
- Mantenha a identidade visual limpa e profissional com fontes legíveis (Arial/Calibri) e bom contraste.
