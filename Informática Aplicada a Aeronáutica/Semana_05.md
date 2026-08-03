# ROTEIRO DE AULA EXPANDIDO — SEMANA 05
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel I — Interface, Pastas de Trabalho, Células, Formatação e Funções Básicas  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Navegar com desenvoltura pela interface gráfica do Microsoft Excel.
- Compreender o conceito computacional de **Planilha, Linha, Coluna e Célula**.
- Entender a diferença entre **Valores Numéricos, Textos e Datas** armazenados nas células.
- Construir e aplicar operadores aritméticos manuais (`+`, `-`, `*`, `/`, `^`).
- Utilizar referências relativas de células e a **Alça de Preenchimento automático**.
- Aplicar as funções fundamentais: `SOMA`, `MÉDIA`, `MÁXIMO`, `MÍNIMO` e `CONT.VALORES`.
- Formatar tabelas numéricas (Formato de Número, Moeda, Porcentagem e Bordas).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Estrutura da Planilha Eletrônica
- **Célula:** A interseção entre uma Coluna (letras `A`, `B`, `C`...) e uma Linha (números `1`, `2`, `3`...).
- **Endereço da Célula:** A identificação única da célula (ex: `B4` é a coluna B na linha 4).
- **Toda Fórmula ou Função no Excel DEVE OBRIGATORIAMENTE começar com o sinal de IGUAL (`=`).** Se você digitar `10+20`, o Excel tratará como texto. Se digitar `=10+20`, o Excel calculará `30`.

### 2.2 Operadores Aritméticos e Sintaxe de Funções

```
SINTAXE DE UMA FUNÇÃO NO EXCEL:
 =NOME_DA_FUNÇÃO(intervalo_de_células)
  │             │
  │             └── Exemplo: (A1:A10) significa da célula A1 ATÉ a célula A10
  └── Exemplo: SOMA, MÉDIA, MÁXIMO
```

| Operador | Operação Computacional | Exemplo |
| :--- | :--- | :--- |
| `+` | Adição | `=A1 + B1` |
| `-` | Subtração | `=A1 - B1` |
| `*` | Multiplicação | `=A1 * B1` |
| `/` | Divisão | `=A1 / B1` |
| `:` | Intervalo ("ATÉ") | `SOMA(A1:A10)` -> Soma de A1 até A10 |
| `;` | Separador de Argumentos ("E") | `SOMA(A1; B1; C5)` -> Soma apenas A1, B1 e C5 |

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção de uma Planilha de Controle Numérico

1. Abra o MS Excel e crie uma nova Pasta de Trabalho em Branco.
2. Monte a estrutura de cabeçalhos na linha 1:
   - `A1`: `Prefixo`
   - `B1`: `Consumo Litros AQUI`
   - `C1`: `Horas Voadas`
   - `D1`: `Consumo Médio (L/h)`
3. Insira os dados numéricos nas linhas 2 a 5:
   - `A2`: `PR-AAA` | `B2`: `450` | `C2`: `3,0`
   - `A3`: `PR-BBB` | `B3`: `600` | `C3`: `4,2`
   - `A4`: `PT-CCC` | `B4`: `320` | `C4`: `2,1`
   - `A5`: `PT-DDD` | `B5`: `890` | `C5`: `5,5`

---

### Atividade 2: Inserção de Fórmulas e Uso da Alça de Preenchimento

1. Na célula `D2`, digite a fórmula de divisão do consumo pelas horas:
   `=B2/C2`
2. Pressione `Enter`. O valor calculado aparecerá na célula.
3. Clique na célula `D2`. Observe o pequeno quadrado verde no canto inferior direito da célula (a **Alça de Preenchimento**).
4. Clique duas vezes na Alça de Preenchimento ou arraste-a para baixo até a célula `D5`.
5. Observe como o Excel ajustou automaticamente as referências para `=B3/C3`, `=B4/C4` e `=B5/C5` (**Referências Relativas**).

---

### Atividade 3: Aplicação das Funções Básicas

Abaixo da tabela, na linha 7, insira os rótulos e as funções nas células ao lado:

1. Na célula `C7`, digite `TOTAL DE CONSUMO:` e na célula `D7` insira a função:
   `=SOMA(B2:B5)`
2. Na célula `C8`, digite `MÉDIA DE HORAS:` e na célula `D8` insira a função:
   `=MÉDIA(C2:C5)`
3. Na célula `C9`, digite `MAIOR CONSUMO:` e na célula `D9` insira a função:
   `=MÁXIMO(B2:B5)`
4. Na célula `C10`, digite `MENOR CONSUMO:` e na célula `D10` insira a função:
   `=MÍNIMO(B2:B5)`

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Exercício Prático no Excel:**
Crie uma planilha de cálculo de custos operacionais com as colunas:
- `Componente` | `Quantidade` | `Custo Unitário (R$)` | `Custo Total (R$)`
- Aplique o formato de número **Moeda (R$)** nas colunas de custo.
- Calcule o `Custo Total` da linha multiplicando `Quantidade * Custo Unitário`.
- No rodapé, use `=SOMA()` para obter o Custo Geral e `=MÉDIA()` para o Custo Médio Unitário.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + =` | Insere a função `=SOMA()` automaticamente nas células selecionadas |
| `Ctrl + Shift + 4` (`$`) | Formata o número da célula instantaneamente como Moeda (`R$`) |
| `Ctrl + Shift + 1` (`!`) | Formata o número como Número com 2 casas decimais e separador de milhar |
| `F4` | Repete a última ação realizada ou alterna trancamento de célula |
| `Ctrl + Setas do Teclado` | Navega instantaneamente para a última célula preenchida da tabela |
