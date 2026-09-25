# ROTEIRO DE AULA EXPANDIDO — AULA 08
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 25/09/2026  
**Tema:** MS Excel IV — Tomada de Decisão com Lógica Condicional: Função `=SE()`  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** EAM-004 (Metodologias de Manutenção) e EAA-009 (Informação Técnica)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender o conceito de **Testes Lógicos** no Excel (Verdadeiro ou Falso).
- Dominar os operadores lógicos de comparação: `=`, `>`, `<`, `>=`, `<=`, `<>` (diferente).
- Utilizar a função condicional fundamental: `=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)`.
- Construir a função `=SE()` aninhada (um `SE` dentro de outro `SE`) para classificar múltiplos níveis de alerta.
- Aplicar a lógica condicional no controle de **Validade de Inspeções e Horas de Voo de Peças Aeronáuticas** (Status: *Liberado*, *Atenção / Próximo do Vencimento* e *Vencido / Parado*).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 A Estrutura da Função `=SE()`
A função `SE` permite que a planilha tome decisões automaticamente com base em uma condição:

```
SINTAXE:
  =SE( CONDIÇÃO ; O QUE FAZER SE FOR VERDADE ; O QUE FAZER SE FOR FALSO )

EXEMPLO 1 (Verificação de Peso de Decolagem):
  =SE( B10 <= 2550 ; "DENTRO DO LIMITE" ; "PESO EXCEDIDO - NÃO DECOLAR" )

EXEMPLO 2 (Horas de Voo de Peça - Limite de 500 horas):
  =SE( C4 >= 500 ; "TROCAR PEÇA" ; "LIBERADO" )
```

> [!IMPORTANT]
> **Atenção à Pontuação e Textos:**
> 1. Os argumentos da função são separados por **ponto e vírgula (`;`)** no Excel em português.
> 2. Todo texto que o Excel deve exibir como resultado deve estar entre **aspas duplas (`" "`)**. Números e fórmulas não levam aspas.

### 2.2 Função `SE` Aninhada (Múltiplas Categorias)
Quando temos mais de duas opções de resposta (exemplo: "Vencido", "Atenção" e "Normal"), colocamos um segundo `SE` no lugar do valor falso:
`=SE(A4 >= 100; "VENCIDO"; SE(A4 >= 80; "ATENÇÃO"; "NORMAL"))`

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Controle de Validade de Inspeção de 100 Horas

1. Abra o Excel e crie uma nova aba chamada `Controle_Inspecoes`.
2. Monte a tabela com os dados das aeronaves da oficina:
   - `A3`: `Prefixo`
   - `B3`: `Modelo`
   - `C3`: `Horas Voadas desde a Última Inspeção`
   - `D3`: `Limite de Horas da Inspeção` (preencha `100` em todas as linhas)
   - `E3`: `Horas Restantes`
   - `F3`: `Status de Liberação para Voo`

3. Preencha os dados nas linhas 4 a 8:
   - **Linha 4:** `PR-AAA` | `Cessna 172` | `98` | `100`
   - **Linha 5:** `PT-BBB` | `Seneca III`  | `45` | `100`
   - **Linha 6:** `PR-CCC` | `Baron G58`   | `102`| `100`
   - **Linha 7:** `PP-DDD` | `Caravan`     | `15` | `100`
   - **Linha 8:** `PR-EEE` | `Cirrus SR22` | `88` | `100`

---

### Atividade 2: Fórmulas de Horas Restantes e Função `SE` Simples

1. **Horas Restantes (`E4`):**
   - Digite: `=D4 - C4` e arraste até a linha 8.
2. **Status de Liberação com Função `SE` Simples (`F4`):**
   - Se as horas voadas forem menores ou iguais a 100, a aeronave está liberada; caso contrário, está parada para inspeção.
   - Digite na célula `F4`:
     `=SE(C4 <= D4; "LIBERADO PARA VOO"; "MANUTENÇÃO OBRIGATÓRIA")`
   - Pressione `Enter` e arraste a fórmula até a linha 8.
   - Observe que a aeronave `PR-CCC` (com 102 horas) é automaticamente identificada como `MANUTENÇÃO OBRIGATÓRIA`!

---

### Atividade 3: Classificação com Três Níveis de Alerta (`SE` Aninhado)

Vamos aprimorar o status para alertar quando a aeronave estiver com 90 horas ou mais voadas:
- **Regra 1:** Se `Horas >= 100` $\to$ `"VENCIDO - RECOLHER"`
- **Regra 2:** Se `Horas >= 90` $\to$ `"ALERTA - AGENDAR INSPEÇÃO"`
- **Regra 3:** Caso contrário $\to$ `"OPERACIONAL OK"`

1. Na coluna `G3`, crie o cabeçalho `Nível de Alerta`.
2. Na célula `G4`, digite a fórmula aninhada:
   `=SE(C4 >= 100; "VENCIDO - RECOLHER"; SE(C4 >= 90; "ALERTA - AGENDAR"; "OPERACIONAL OK"))`
3. Arraste até a linha 8 e confira a classificação automática de cada aeronave.

---

## 4. EXERCÍCIO DE FIXAÇÃO EM SALA

Crie uma tabela de **Controle de Pressão de Extintores de Incêndio da Oficina**:
- Colunas: `Código do Extintor`, `Pressão Medida (psi)`, `Status do Extintor`.
- **Regra:**
  - A faixa segura de operação é entre 180 psi e 220 psi.
  - Se a pressão medida for menor que 180 psi, o status deve exibir: `"PRESSÃO BAIXA - RECARREGAR"`.
  - Se a pressão for maior que 220 psi, deve exibir: `"SOBREPRESSÃO"`.
  - Caso contrário, deve exibir: `"CONFORME"`.

---

## 5. DICAS DE ATALHOS E BOAS PRÁTICAS

- Sempre verifique se fechou todos os parênteses abertos no final da fórmula (se abriu 2 `SE`, feche com `))`).
- Se o Excel mostrar um erro de sintaxe, verifique se não usou vírgula (`,`) no lugar de ponto e vírgula (`;`).
