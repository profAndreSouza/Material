# ROTEIRO DE AULA EXPANDIDO — AULA 05
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 04/09/2026  
**Tema:** MS Excel II — Modelagem e Cálculos de Engenharia: Planilha Completa de Peso e Balanceamento de Aeronaves  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** EAA-015 (Sistemas de Combustíveis, Lubrificação e Peso e Balanceamento) e CAL-201 (Cálculo Aplicado)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Modelar planilhas complexas de engenharia no Microsoft Excel com múltiplos blocos de cálculo interdependentes.
- Implementar as equações da física aeronáutica de **Momento Estático ($M = P \times B$)** e **Centro de Gravidade ($CG = \frac{\sum M}{\sum P}$)**.
- Construir tabelas de carregamento dinâmico (Pilotos, Passageiros, Bagagem, Combustível e Peso Vazio).
- Simular o deslocamento do Centro de Gravidade ($CG$) durante o voo decorrente da queima progressiva de combustível.
- Criar verificadores lógicos preliminares para checar se o peso total e a posição do CG estão dentro dos limites operacionais de decolagem e pouso.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL & MATEMÁTICA

### 2.1 A Física do Peso e Balanceamento (Weight & Balance)
Uma aeronave só pode voar com segurança se seu peso total não exceder o **Peso Máximo de Decolagem (MTOW)** e se a posição do seu **Centro de Gravidade ($CG$)** estiver dentro da faixa de estabilidade (*envelope de CG*), segundo os padrões regulatórios oficiais estipulados no manual [`docs/FAA-H-8083-1B - PESO E BALANCEAMENTO.pdf`](docs/FAA-H-8083-1B%20-%20PESO%20E%20BALANCEAMENTO.pdf).

$$\text{Momento } (M) = \text{Peso } (P) \times \text{Braço } (B)$$

$$\text{Posição do } CG = \frac{\text{Somatória de Todos os Momentos } (\sum M)}{\text{Somatória de Todos os Pesos } (\sum P)} = \frac{M_{\text{total}}}{P_{\text{total}}}$$

```
ESTRUTURA COMPUTACIONAL DA PLANILHA NO EXCEL:
 +------------------------------------------------------------------------------------+
 | ESTAÇÃO / ITEM        | PESO (lb ou kg) | BRAÇO (polegadas/m) | MOMENTO (Peso x Braço) |
 +-----------------------+-----------------+---------------------+------------------------+
 | Peso Básico Vazio     |      1.500      |        85,0         |        127.500         |
 | Piloto e Copiloto     |        340      |        85,5         |         29.070         |
 | Passageiros Traseiros |        300      |       118,0         |         35.400         |
 | Bagageiro 1           |         80      |       142,8         |         11.424         |
 | Combustível Decolagem |        318      |        95,0         |         30.210         |
 +-----------------------+-----------------+---------------------+------------------------+
 | TOTAIS NA DECOLAGEM:  | SOMA(Pesos)     |                     | SOMA(Momentos)         |
 |                       |   = 2.538 lb    |                     |   = 233.604 lb.in      |
 +-----------------------+-----------------+---------------------+------------------------+
 | POSIÇÃO DO CG (Dec.): | = Momento_Total / Peso_Total = 233.604 / 2.538 = 92,04 pol     |
 +-----------------------+----------------------------------------------------------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Estruturação da Planilha de Carregamento

1. Abra uma nova planilha no Excel e nomeie a aba como `Peso_e_Balanceamento`.
2. Digite os títulos e cabeçalhos a partir da linha 3:
   - `A3`: `Estação / Item`
   - `B3`: `Peso (lb)`
   - `C3`: `Braço (in)`
   - `D3`: `Momento (lb.in)`
3. Insira os dados técnicos da aeronave (Cessna 172 Skyhawk):
   - `A4`: `Peso Vazio Básico (BEW)` | `B4`: `1642` | `C4`: `82,2`
   - `A5`: `Assentos Dianteiros (Piloto + Copiloto)` | `B5`: `340` | `C5`: `85,0`
   - `A6`: `Assentos Traseiros (Passageiros)` | `B6`: `280` | `C6`: `118,1`
   - `A7`: `Bagageiro Principal` | `B7`: `65` | `C7`: `142,8`
   - `A8`: `Combustível de Decolagem (53 gal)` | `B8`: `318` | `C8`: `95,0`
4. Na célula `D4`, digite a fórmula do Momento:
   `=B4 * C4`
5. Arraste a fórmula de `D4` até `D8`.

---

### Atividade 2: Cálculo dos Totais e Posição do CG de Decolagem

1. Na linha 10, crie o bloco de resultados da decolagem:
   - `A10`: `CONDIÇÃO DE DECOLAGEM (RAMP/TAKEOFF)`
   - `B10`: `=SOMA(B4:B8)` *(Peso Total na Decolagem)*
   - `D10`: `=SOMA(D4:D8)` *(Momento Total na Decolagem)*
2. Na linha 11:
   - `A11`: `POSIÇÃO DO CENTRO DE GRAVIDADE (CG DECOLAGEM):`
   - `B11`: `=D10 / B10` *(Calcula a posição do CG em polegadas)*
3. Formate a célula `B11` com **2 casas decimais** (`Ctrl + Shift + 1`).

---

### Atividade 3: Simulação de Queima de Combustível e CG de Pouso

Durante 3 horas de voo, a aeronave queima 24 galões de combustível ($24\text{ gal} \times 6\text{ lb/gal} = 144\text{ lb}$).
1. Na linha 14:
   - `A14`: `Combustível Consumido na Rota (Queima):`
   - `B14`: `-144` *(Valor negativo)*
   - `C14`: `95,0` *(Braço do tanque)*
   - `D14`: `=B14 * C14` *(Momento negativo: -13.680 lb.in)*
2. Na linha 16, crie o bloco de pouso:
   - `A16`: `CONDIÇÃO DE POUSO (LANDING WEIGHT):`
   - `B16`: `=B10 + B14` *(Peso Total no Pouso)*
   - `D16`: `=D10 + D14` *(Momento Total no Pouso)*
3. Na linha 17:
   - `A17`: `POSIÇÃO DO CG NO POUSO:`
   - `B17`: `=D16 / B16`
4. *Análise do Estudante:* Observe como o CG se deslocou para a frente após o combustível ser consumido!

---

## 4. EXERCÍCIOS DE FIXAÇÃO INTENSIVOS

### Exercício Prático:
Adicione à sua planilha um painel de conferência dos limites estruturais:
1. Parâmetros Limiares do Manual:
   - `Peso Máximo de Decolagem (MTOW):` `2550 lb`
   - `Limite Dianteiro de CG:` `82,0 in`
   - `Limite Traseiro de CG:` `95,0 in`
2. Calcule com fórmulas simples:
   - Margem de Peso Disponível (`MTOW - Peso_Decolagem`).
   - Diferença entre o CG calculated e o limite dianteiro/traseiro.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + =` | Insere a função `=SOMA()` na coluna instantaneamente |
| `Ctrl + B` (ou `Ctrl + G` no 365) | Aplica Negrito às células selecionadas |
| `Ctrl + 1` | Abre a caixa completa de Formatação de Células |
