# ROTEIRO DE AULA EXPANDIDO — SEMANA 09
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Revisão Prática Geral de Excel Essencial & Simulado Preparatório para a Prova Prática 1  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Consolidar a integração de todas as funções do bloco essencial do Excel (`SOMA`, `MÉDIA`, `SE`, `SEERRO`, `PROCV`, `CONT.SE`, `SOMASE`).
- Diagnosticar e corrigir erros comuns de fórmulas (`#DIV/0!`, `#N/A`, `#NOME?`, `#REF!`).
- Auditar fórmulas e rastrear dependências de células no Excel.
- Executar um simulado prático individual sob tempo controlado em ambiente de laboratório.

---

## 2. REVISÃO SINTÁTICA DE FUNÇÕES (GUIA DE CONSULTA RÁPIDA)

```
+------------------------------------------------------------------------------------+
|                               SINTAXES ESSENCIAIS                                  |
+------------------------------------------------------------------------------------+
| 1. SOMA:        =SOMA(A1:A10)                                                      |
| 2. MÉDIA:       =MÉDIA(A1:A10)                                                     |
| 3. SE:          =SE(A1>=100; "APROVADO"; "REPROVADO")                              |
| 4. SEERRO:      =SEERRO(PROCV(...); "VALOR INVÁLIDO")                              |
| 5. PROCV:       =PROCV(código_procurado; tabela_matriz; coluna_retorno; FALSO)     |
| 6. CONT.SE:     =CONT.SE(intervalo_busca; "CRITÉRIO")                              |
| 7. SOMASE:      =SOMASE(intervalo_filtro; "CRITÉRIO"; intervalo_soma)              |
+------------------------------------------------------------------------------------+
```

---

## 3. ROTEIRO DO SIMULADO PRÁTICO (PASSO A PASSO)

### Parte 1: Importação e Limpeza da Tabela
1. Baixe ou monte a tabela contendo 8 registros de peças com as colunas: `Código`, `Descrição`, `Estoque_Atual`, `Estoque_Mínimo`, `Preço_Unitario`.
2. Formate os valores de preço como **Moeda (R$)**.

### Parte 2: Fórmulas Condicionais
1. Crie a coluna `Status_Estoque`.
2. Insira a fórmula: Se `Estoque_Atual < Estoque_Mínimo`, exibir `"COMPRAR"`, caso contrário exibir `"OK"`.
3. Aplique Formatação Condicional vermelha para a palavra `"COMPRAR"`.

### Parte 3: Consulta Automatizada (`PROCV` + `SEERRO`)
1. Monte uma área de busca onde o usuário digite o `Código` da peça.
2. Traga a `Descrição` e o `Preço_Unitario` usando `PROCV`.
3. Envolva as fórmulas com `SEERRO` para exibir `"CÓDIGO NÃO ENCONTRADO"` caso o código seja inválido.

### Parte 4: Resumo Estatístico (`CONT.SE` e `SOMASE`)
1. Calcule quantas peças estão com status `"COMPRAR"`.
2. Calcule o custo total financeiro estimado para repor todas as peças com status `"COMPRAR"`.

---

## 4. CHECKLIST DE AUDITORIA DE ERROS NO EXCEL

| Código de Erro | Causa Computacional | Como Resolver |
| :--- | :--- | :--- |
| `#DIV/0!` | A fórmula tentou dividir um número por zero ou célula vazia. | Use `=SEERRO(fórmula; 0)` ou teste se a célula divisor é `>0`. |
| `#N/A` | A função `PROCV` não encontrou o valor exato procurado. | Verifique se o código digitado existe na 1ª coluna da tabela. |
| `#NOME?` | Erro de digitação no nome da função (ex: digitou `=SUMA` em vez de `=SOMA`). | Corrija a ortografia do nome da função. |
| `#REF!` | A célula referenciada na fórmula foi apagada/excluída da planilha. | Desfaça (`Ctrl + Z`) ou corrija o endereço da célula. |
| `#####` | A coluna está estreita demais para exibir o número formatado. | Clique duas vezes na divisória da coluna para autoajustar a largura. |

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função de Auditoria no MS Excel |
| :--- | :--- |
| `Ctrl + ` ` ` (Acento Grave) | Alterna a exibição das planilhas para mostrar TODAS as Fórmulas digitadas |
| `Alt + M + P` | Rastreia Precedentes (mostra setas apontando de onde vêm os dados da fórmula) |
| `Alt + M + D` | Rastreia Dependentes (mostra setas apontando para quais fórmulas usam esta célula) |
| `Alt + M + A` | Remove todas as setas de rastreamento de auditoria da tela |
