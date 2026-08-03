# ROTEIRO DE AULA EXPANDIDO — SEMANA 06
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel II — Funções Lógicas Condicionais (`SE`, `E`, `OU`, `SEERRO`) e Formatação Condicional Visual  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Compreender a estrutura computacional de tomada de decisão lógica (*IF-THEN-ELSE*).
- Dominar a sintaxe da função `=SE()` simples e aninhada.
- Combinar os operadores lógicos `=E()` e `=OU()` para testar múltiplas condições simultâneas.
- Tratar erros de fórmula (`#DIV/0!`, `#N/A`, `#VALOR!`) utilizando a função `=SEERRO()`.
- Construir regras automatizadas de **Formatação Condicional** para destacar dados visualmente com cores e ícones com base em valores limiares.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 A Função Lógica `=SE()`
A função `=SE()` avalia um teste lógico e retorna um resultado se a condição for VERDADEIRA e outro resultado se for FALSA.

```
SINTAXE DA FUNÇÃO SE:
 =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)
  │                 │                    │
  ├── Exemplo: B2>=1000  ├── Exemplo: "REVISÃO"   └── Exemplo: "NORMAL"
```

### 2.2 Combinadores Lógicos `=E()` e `=OU()`
- **`E(condição1; condição2)`:** Retorna VERDADEIRO apenas se **TODAS** as condições forem atendidas.
- **`OU(condição1; condição2)`:** Retorna VERDADEIRO se **PELO MENOS UMA** das condições for atendida.

### 2.3 Tratamento de Erros com `=SEERRO()`
Quando uma fórmula tenta dividir por zero ou buscar um dado inexistente, o Excel exibe erros como `#DIV/0!`. A função `=SEERRO(fórmula; valor_se_erro)` mascara o erro exibindo uma mensagem amigável (ex: `"Pendente"` ou `0`).

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construindo a Função `=SE()` Simples e Aninhada

1. Monte a planilha com os dados abaixo:
   - `A1`: `Componente` | `B1`: `Horas Uso` | `C1`: `Status do Componente`
   - `A2`: `Filtro de Óleo` | `B2`: `110`
   - `A3`: `Vela de Ignição` | `B3`: `85`
   - `A4`: `Bomba de Combustível` | `B4`: `490`
2. Na célula `C2`, insira a fórmula condicional:
   `=SE(B2>=100; "SUBSTITUIR"; "OK")`
3. Arraste a fórmula até a célula `C4`.
4. Observe que o componente com 110h e 490h exibirá `"SUBSTITUIR"`, enquanto o de 85h exibirá `"OK"`.

---

### Atividade 2: Regra com Múltiplas Condições `=SE(E(...))`

1. Adicione a coluna `D1`: `Anos de Uso` (`D2`: `6`, `D3`: `2`, `D4`: `4`).
2. Adicione a coluna `E1`: `Ação Recomendada`.
3. Se a peça tiver mais de 100 horas **E** mais de 5 anos de uso, deve ser descartada:
   `=SE(E(B2>=100; D2>=5); "DESCARTE"; "INSPEÇÃO")`

---

### Atividade 3: Aplicando Formatação Condicional Visual

1. Selecione a coluna `C2:C4` (que contém os textos `"SUBSTITUIR"` e `"OK"`).
2. Na guia **Página Inicial**, clique em **Formatação Condicional** -> **Regras de Realce das Células** -> **Texto que Contém...**.
3. Digite `SUBSTITUIR` e escolha o preenchimento **Vermelho Claro e Texto Vermelho Escuro**. Clique em **OK**.
4. Repita o processo: clique em **Formatação Condicional** -> **Texto que Contém...** -> Digite `OK` e escolha **Preenchimento Verde Claro e Texto Verde Escuro**.
5. *Teste:* Altere o valor da célula `B3` de 85 para 150. Veja a célula mudar de cor automaticamente!

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Desafio no Excel:**
Crie uma planilha de monitoramento de status com 5 itens:
- Colunas: `Item` | `Horas Restantes` | `Alerta Lógico`
- Na coluna `Alerta Lógico`, use a função `=SE()` para:
  - Se `Horas Restantes <= 10`, exibir `"CRÍTICO"`.
  - Se `Horas Restantes > 10` e `<= 50`, exibir `"ATENÇÃO"`.
  - Caso contrário, exibir `"REGULAR"`.
- Aplique Formatação Condicional com **Conjunto de Ícones (Farol Vermelho, Amarelo e Verde)** na coluna de Horas Restantes.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + C + L` | Atalho de menu para abrir a Formatação Condicional |
| `F9` | Recalcula todas as fórmulas da planilha imediatamente |
| `Ctrl + Shift + L` | Ativa ou desativa os **Filtros Automáticos** no cabeçalho da tabela |
