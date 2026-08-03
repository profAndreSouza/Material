# ROTEIRO DE AULA EXPANDIDO — SEMANA 08
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel IV — Funções Estatísticas/Matemáticas Aplicadas (`CONT.SE`, `SOMASE`) e Mini-PBL 2  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Dominar a contagem condicional computacional de dados utilizando `=CONT.SE()` e `=CONT.SES()`.
- Dominar a soma condicional de dados utilizando `=SOMASE()` e `=SOMASES()`.
- Aplicar arredondamentos numéricos precisos (`ARRED`, `ARREDPARA.CIMA`, `ARREDPARA.BAIXO`).
- Desenvolver a **Calculadora de Controle de Horas de Voo de Frota e Custos Operacionais**.
- Executar o **Mini-PBL 2** (Controle de Horas e Estimativa do Custo por Hora de Voo - FH).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Funções de Contagem e Soma Condicional

```
SINTAXE DO CONT.SE:
 =CONT.SE(intervalo_de_busca; critérios)
  │                          │
  ├── Exemplo: C2:C50        └── Exemplo: "CRÍTICO" ou ">=100"

SINTAXE DO SOMASE:
 =SOMASE(intervalo_critério; critério; [intervalo_soma])
  │                         │          │
  ├── Onde testar o filtro   ├── O que  └── Onde estão os números
  └── Ex: Coluna C (Modelos) └── Ex:"C172"  └── Ex: Coluna D (Custos)
```

- **`CONT.SE(intervalo; critério)`:** Conta quantas células dentro de um intervalo atendem a um critério especificado (ex: quantas peças estão com status "VENCIDO").
- **`SOMASE(intervalo_critério; critério; intervalo_soma)`:** Soma os valores numéricos de um intervalo apenas para as linhas correspondentes que satisfazem o critério especificativo.

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Aplicação da Função `=CONT.SE()`

1. Monte a base de dados de voos na planilha:
   - `A1`: `Prefixo` | `B1`: `Modelo` | `C1`: `Horas Voadas` | `D1`: `Status Operacional`
   - `A2`: `PR-ABC` | `B2`: `Cessna 172` | `C2`: `4,5` | `D2`: `DISPONÍVEL`
   - `A3`: `PR-DEF` | `B3`: `Piper Seneca` | `C3`: `2,0` | `D3`: `EM MANUTENÇÃO`
   - `A4`: `PT-GHI` | `B4`: `Cessna 172` | `C4`: `6,1` | `D4`: `DISPONÍVEL`
   - `A5`: `PT-JKL` | `B5`: `Cessna 172` | `C5`: `1,5` | `D5`: `DISPONÍVEL`

2. Monte a tabela resumo de indicadores ao lado:
   - Na célula `F2`: `Aeronaves Disponíveis:`
   - Na célula `F3`: `Aeronaves em Manutenção:`

3. Na célula `G2`, insira a contagem condicional de disponíveis:
   `=CONT.SE(D2:D5; "DISPONÍVEL")`

4. Na célula `G3`, insira a contagem condicional de aeronaves em manutenção:
   `=CONT.SE(D2:D5; "EM MANUTENÇÃO")`

---

### Atividade 2: Aplicação da Função `=SOMASE()`

1. Na tabela resumo, crie o indicador:
   - Na célula `F5`: `Total Horas do Modelo Cessna 172:`
2. Na célula `G5`, insira a soma condicional das horas voadas apenas pelo modelo "Cessna 172":
   `=SOMASE(B2:B5; "Cessna 172"; C2:C5)`
3. O Excel varrerá a coluna B e somará os valores correspondentes da coluna C (`4,5 + 6,1 + 1,5 = 12,1`).

---

## 4. DESAFIO PRÁTICO (MINI-PBL 2)

**Enunciado do Mini-PBL 2:**
Você deve construir uma **Calculadora de Controle de Horas de Voo de Frota e Custo por Hora de Voo (FH - Flight Hour)** no MS Excel contendo:

1. Base de dados com no mínimo 6 aeronaves, contendo: `Prefixo`, `Modelo`, `Horas Voadas no Mês`, `Custo Fixo Mensal (R$)` e `Custo Variável de Manutenção (R$)`.
2. Fórmulas para calcular:
   - `Custo Total (R$)` = `Custo Fixo + Custo Variável`.
   - `Custo por Hora de Voo (R$/FH)` = `Custo Total / Horas Voadas no Mês`.
3. Tabela de Resumo Executivo utilizando obrigatoriamente:
   - `=CONT.SE()` para contar quantas aeronaves voaram mais de 50 horas no mês.
   - `=SOMASE()` para somar o custo total gerado por um modelo específico de aeronave.
   - `=MÉDIA()` e `=MÁXIMO()` para identificar a média de custo por hora da frota e o custo máximo.
4. Formatação profissional com moeda `R$`, separadores de milhares e bordas limpas.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Ctrl + Shift + 5` (`%`) | Formata o número da célula como Porcentagem (`%`) |
| `Alt + F1` | Insere um gráfico de colunas padrão instantaneamente na planilha atual |
| `Ctrl + T` | Seleciona toda a tabela contígua onde o cursor está posicionado |
