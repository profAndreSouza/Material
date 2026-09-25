# ROTEIRO DE AULA EXPANDIDO — AULA 10
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 16/10/2026  
**Tema:** MS Excel VI — Agregações Condicionais: Funções `=CONT.SE()` e `=SOMASE()`  
**Ambiente:** Laboratório de Informática (Microsoft 365 / Excel)  
**Articulação com o PPC:** EAM-007 (Gerenciamento da Manutenção) e EST-002 (Estatística Descritiva)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender a diferença entre funções simples de agregação (`SOMA`, `CONT.NÚM`) e funções condicionais (`SOMASE`, `CONT.SE`).
- Utilizar a função `=CONT.SE(intervalo; critério)` para contar ocorrências específicas (ex: quantas OSs estão abertas, quantas manutenções são do tipo preventiva).
- Utilizar a função `=SOMASE(intervalo_critério; critério; intervalo_soma)` para somar valores monetários ou horas com base em filtros (ex: total gasto apenas com a aeronave PR-AAA ou com motores).
- Construir um quadro de resumo gerencial de ordens de serviço da oficina mecânica.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Sintaxe e Funcionamento das Funções Condicionais

```
1. CONT.SE (Conta quantas células atendem a uma condição):
   =CONT.SE( INTERVALO_DE_BUSCA ; CRITÉRIO )

   Exemplo: Contar quantas ordens de serviço estão com status "CONCLUÍDA":
   =CONT.SE( E4:E20 ; "CONCLUÍDA" )

2. SOMASE (Soma os valores de uma coluna apenas se a condição for atendida em outra):
   =SOMASE( INTERVALO_CRITÉRIO ; CRITÉRIO ; INTERVALO_QUE_SERÁ_SOMADO )

   Exemplo: Somar o custo total de peças aplicadas apenas na aeronave "PR-ABC":
   =SOMASE( A4:A20 ; "PR-ABC" ; F4:F20 )
```

> [!NOTE]
> - O **critério** pode ser um texto fixo entre aspas (ex: `"ABERTA"`), um número (ex: `100`), um operador lógico (ex: `">50"`) ou a referência de uma célula onde o texto está digitado (ex: `H4`).

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construindo a Base de Dados de Ordens de Serviço (OS)

1. Abra o Excel e crie a aba `Relatorio_Ordens_Servico`.
2. A partir da linha 3, monte a tabela de registros de manutenção:
   - `A3`: `Nº OS`
   - `B3`: `Prefixo`
   - `C3`: `Tipo de Manutenção` (Preventiva / Corretiva)
   - `D3`: `Sistema / Capítulo ATA` (28-Combustível, 32-Trem de Pouso, 34-Navegação, 72-Motor)
   - `E3`: `Status` (Concluída / Em Andamento / Aguardando Peça)
   - `F3`: `Custo Mão de Obra (R$)`
   - `G3`: `Custo Peças (R$)`
   - `H3`: `Custo Total (R$)`

3. Preencha 8 linhas com dados de exemplo (linhas 4 a 11) e calcule o `Custo Total = F4 + G4`.

---

### Atividade 2: Construção do Painel Gerencial de Contagens (`CONT.SE`)

Ao lado da tabela principal (a partir da coluna `J3`), construa uma tabela de indicadores:
1. **Contagem por Status:**
   - `J4`: `OS Concluídas` $\to$ `=CONT.SE(E4:E11; "Concluída")`
   - `J5`: `OS Em Andamento` $\to$ `=CONT.SE(E4:E11; "Em Andamento")`
   - `J6`: `OS Aguardando Peça` $\to$ `=CONT.SE(E4:E11; "Aguardando Peça")`
   - `J7`: `Total Geral de OS` $\to$ `=CONT.VALORES(A4:A11)`

2. **Contagem por Tipo:**
   - `J9`: `Manutenções Preventivas` $\to$ `=CONT.SE(C4:C11; "Preventiva")`
   - `J10`: `Manutenções Corretivas` $\to$ `=CONT.SE(C4:C11; "Corretiva")`

---

### Atividade 3: Construção do Painel de Custos Financeiros (`SOMASE`)

1. **Gasto Total por Aeronave:**
   - `J13`: `Gasto Total Aeronave PR-AAA` $\to$ `=SOMASE(B4:B11; "PR-AAA"; H4:H11)`
   - `J14`: `Gasto Total Aeronave PT-BBB` $\to$ `=SOMASE(B4:B11; "PT-BBB"; H4:H11)`
2. **Gasto por Sistema Aeronáutico:**
   - `J16`: `Custo Total em Motores (ATA 72)` $\to$ `=SOMASE(D4:D11; "*Motor*"; H4:H11)`
   - `J17`: `Custo Total em Trem de Pouso (ATA 32)` $\to$ `=SOMASE(D4:D11; "*Trem*"; H4:H11)`

3. Formate todas as células de custo com formato de **Moeda (`R$`)**.

---

## 4. EXERCÍCIO DE FIXAÇÃO EM SALA

Crie uma tabela de **Registro de Voos de Alunos da Escola de Aviação**:
- Colunas: `Data`, `Instrutor`, `Aluno`, `Horas Voadas`, `Valor Pago`.
- **Perguntas a serem respondidas com fórmulas:**
  1. Quantos voos foram ministrados pelo instrutor "Cmte. Santos"? (`CONT.SE`)
  2. Quantas horas de voo no total o aluno "Lucas" acumulou? (`SOMASE`)
  3. Qual foi a receita financeira total gerada pelos voos do instrutor "Cmte. Silva"? (`SOMASE`)

---

## 5. DICAS E ATALHOS

| Dica | Explicação |
| :--- | :--- |
| Uso do Asterisco (`*`) no Critério | O asterisco funciona como coringa: `"*Motor*"` encontra qualquer texto que contenha a palavra motor. |
| Referência de Célula no Critério | Em vez de escrever `"Concluída"`, você pode apontar para a célula `=CONT.SE(E4:E11; K4)`. |
