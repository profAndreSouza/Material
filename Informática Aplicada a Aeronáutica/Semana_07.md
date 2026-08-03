# ROTEIRO DE AULA EXPANDIDO — SEMANA 07
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel III — Funções de Busca e Referência (`PROCV`, `PROCH`, `ÍNDICE`, `CORRESP`)  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Compreender o conceito de **Busca Computacional de Dados** em matrizes de dados no Excel.
- Dominar a sintaxe da função `=PROCV()` (Pesquisa Vertical) para correspondência exata (`0`/`FALSO`) e aproximada (`1`/`VERDADEIRO`).
- Entender a limitação da função `PROCV` (busca apenas da esquerda para a direita).
- Dominar a combinação avançada `=ÍNDICE(CORRESP())` para buscas dinâmicas em qualquer direção da matriz.
- Tratar buscas de dados inexistentes combinando `SEERRO` com `PROCV`.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 A Função `=PROCV()` (Procura Vertical)
O `PROCV` varre a **primeira coluna** de uma tabela à procura de um código específico e retorna o valor de uma coluna à direita na mesma linha.

```
SINTAXE DO PROCV:
 =PROCV(valor_procurado; matriz_tabela; número_índice_coluna; [procurar_intervalo])
  │                      │              │                     │
  ├── O que você busca    ├── Onde buscar├── Qual coluna trazer├── 0 (FALSO) = Busca Exata
  └── Ex: "PN-9901"      └── Ex: A2:D100└── Ex: Coluna 3      └── 1 (VERDADEIRO) = Aproximada
```

### 2.2 A Combinação Dinâmica `=ÍNDICE()` + `=CORRESP()`
- **`CORRESP(valor; vetor; 0)`:** Procura um valor em uma linha/coluna e retorna a **posição numérica** (ex: linha 5).
- **`ÍNDICE(matriz; número_linha; número_coluna)`:** Retorna o valor contido no cruzamento da linha e coluna especificadas.
- **`=ÍNDICE(coluna_retorno; CORRESP(código; coluna_código; 0))`:** Permite buscar dados mesmo se a coluna de retorno estiver à **esquerda** da coluna de código!

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção do Catálogo de Peças e Busca com `=PROCV()`

1. Crie uma aba na planilha chamada `Catálogo` com a tabela de dados:
   - `A1`: `Part Number` | `B1`: `Descrição da Peça` | `C1`: `Estoque` | `D1`: `Preço Unitário (R$)`
   - `A2`: `PN-101` | `B2`: `Filtro de Ar` | `C2`: `15` | `D2`: `120,00`
   - `A3`: `PN-102` | `B3`: `Vela de Ignição` | `C3`: `40` | `D3`: `85,00`
   - `A4`: `PN-103` | `B4`: `Junta de Cobre` | `C4`: `100` | `D4`: `15,00`

2. Crie outra aba chamada `Consulta` (ou monte ao lado):
   - `F2`: `Digite o PN desejado:` -> `PN-102` (célula `G2`)
   - `F3`: `Descrição Encontrada:`
   - `F4`: `Preço Unitário:`

3. Na célula `G3`, insira a fórmula de busca da Descrição (coluna 2 da matriz `A2:D4`):
   `=PROCV(G2; Catálogo!A2:D4; 2; FALSO)`

4. Na célula `G4`, insira a fórmula de busca do Preço Unitário (coluna 4 da matriz `A2:D4`):
   `=PROCV(G2; Catálogo!A2:D4; 4; FALSO)`

5. *Teste:* Troque o texto da célula `G2` de `PN-102` para `PN-101` ou `PN-103` e veja a descrição e preço atualizarem instantaneamente!

---

### Atividade 2: Protegendo contra Código Inexistente com `=SEERRO()`

Se o usuário digitar `PN-999` (inexistente), o Excel exibirá o erro `#N/A`.
1. Modifique a fórmula na célula `G3` para:
   `=SEERRO(PROCV(G2; Catálogo!A2:D4; 2; FALSO); "CÓDIGO NÃO CADASTRADO")`
2. Teste digitando `PN-999` na busca.

---

### Atividade 3: Busca para a Esquerda com `=ÍNDICE(CORRESP())`

Imagine que a coluna `Part Number` está na Coluna B e o `Nome do Fornecedor` está na Coluna A. O `PROCV` não consegue buscar da coluna B para a coluna A.
1. Use a fórmula combinada:
   `=ÍNDICE(Catálogo!A2:A4; CORRESP(G2; Catálogo!B2:B4; 0))`

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Exercício no Excel:**
Crie um formulário de consulta de preços em que o usuário digite o código de um item e a planilha retorne automaticamente:
- Descrição da Peça
- Valor Unitário
- Alerta de Estoque: Se o Estoque for menor que 20, exibir `"REPOR ESTOQUE"`, senão `"ESTOQUE OK"` (combine `PROCV` dentro da função `SE`).

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `F4` | Tranca a matriz de busca adicionando cifrões (`$A$2:$D$4`) para não desformatar ao arrastar |
| `Shift + F3` | Abre a caixa de diálogo "Inserir Função" com assistente passo a passo |
| `Ctrl + A` (dentro da função) | Exibe a janela de argumentos da função atual |
