# ROTEIRO DE AULA EXPANDIDO — AULA 06
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 11/09/2026  
**Tema:** MS Excel III — Lógica Condicional (`SE`, `E`, `OU`, `SEERRO`) e Formatação Condicional Visual com Alertas de Inspeção  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** EAA-009 (Informação Técnica e Legislação), EAM-003 (Manutenção de Aeronaves) e EAM-005 (Práticas de Manutenção)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender a lógica booleana computacional (*TRUE/FALSE*) e a estrutura de tomada de decisão (*IF-THEN-ELSE*) aplicadas aos checklists de decisão aeronáutica ([`docs/02-asas-do-conhecimento-tomada-de-decisao.pdf`](docs/02-asas-do-conhecimento-tomada-de-decisao.pdf)) e aos mínimos meteorológicos para voo ([`docs/FAA-H-8083-28A - CLIMA.pdf`](docs/FAA-H-8083-28A%20-%20CLIMA.pdf)).
- Dominar a sintaxe da função `=SE()` simples e aninhada para classificação automática de status.
- Combinar os conectivos lógicos `=E()` e `=OU()` para avaliar múltiplos critérios técnicos simultâneos.
- Aplicar a função de contingência `=SEERRO()` para proteger planilhas contra erros de divisão por zero (`#DIV/0!`) ou dados ausentes.
- Construir regras de **Formatação Condicional** dinâmicas (cores, escalas de cores e conjuntos de ícones) para sinalizar componentes próximos do vencimento e cumprimento de Diretrizes de Aeronavegabilidade (DA/AD).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 A Função Lógica `=SE()`
A função `=SE()` avalia uma condição lógica e bifurca o comportamento do cálculo:

$$=SE(\text{teste\_lógico}; \text{valor\_se\_verdadeiro}; \text{valor\_se\_falso})$$

```
EXEMPLO COMPUTACIONAL:
  =SE(B2 >= 100; "SUBSTITUIR IMEDIATAMENTE"; "COMPONENTE EM SERVIÇO")
```

### 2.2 Conectivos Lógicos: `=E()` vs. `=OU()`
- **`=E(condição1; condição2; ...)`:** Retorna VERDADEIRO somente se **TODAS** as condições forem atendidas ao mesmo tempo.
  - *Exemplo:* Se Horas Totais $\ge 500$ **E** Anos de Instalação $\ge 5$, a peça deve ir para revisão geral (*Overhaul*).
- **`=OU(condição1; condição2; ...)`:** Retorna VERDADEIRO se **PELO MENOS UMA** das condições for satisfeita.
  - *Exemplo:* Se Horas Restantes $\le 10$ **OU** Dias Restantes $\le 30$, emitir alerta amarelo de agendamento.

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção do Painel de Status com `=SE()` e `=SE(E(...))`

1. Crie uma planilha com as colunas:
   - `A1`: `Item / Componente` | `B1`: `Horas Limite (TBO)` | `C1`: `Horas Atuais` | `D1`: `Horas Restantes` | `E1`: `Meses em Uso` | `F1`: `Status Lógico`
2. Insira 4 componentes:
   - `A2`: `Magneto Esquerdo` | `B2`: `500` | `C2`: `485` | `E2`: `36`
   - `A3`: `Vela de Ignição` | `B3`: `100` | `C3`: `60` | `E3`: `12`
   - `A4`: `Bomba de Vácuo` | `B4`: `400` | `C4`: `405` (Vencida!) | `E4`: `48`
   - `A5`: `Filtro Hidráulico` | `B5`: `200` | `C5`: `195` | `E5`: `62`
3. Na célula `D2`, calcule as Horas Restantes:
   `=B2 - C2`
4. Na célula `F2`, insira a regra de classificação:
   `=SE(D2 <= 0; "VENCIDO"; SE(D2 <= 20; "ALERTA - PRÓXIMO"; "OK"))`
5. Arraste as fórmulas para todas as linhas.

---

### Atividade 2: Avaliação de Duplo Critério com `=SE(E(...))`

Adicione a coluna `G1`: `Ação Recomendada`.
- Se as Horas Restantes forem $\le 20$ **E** o componente estiver em uso há mais de 40 meses, deve ser solicitada a compra de peça nova:
  `=SE(E(D2 <= 20; E2 >= 40); "COMPRAR PEÇA NOVA"; "MONITORAR EM OFICINA")`

---

### Atividade 3: Aplicação de Formatação Condicional Visual no 365

1. Selecione as células da coluna `F2:F5` (que contêm os textos `"VENCIDO"`, `"ALERTA - PRÓXIMO"` e `"OK"`).
2. Na guia **Página Inicial**, clique em **Formatação Condicional** -> **Regras de Realce das Células** -> **Texto que Contém...**:
   - Digite `VENCIDO` -> Formatar com **Preenchimento Vermelho Claro e Texto Vermelho Escuro**.
   - Repita a regra: digite `ALERTA` -> Formatar com **Preenchimento Amarelo Claro e Texto Amarelo Escuro**.
   - Repita a regra: digite `OK` -> Formatar com **Preenchimento Verde Claro e Texto Verde Escuro**.
3. Selecione a coluna de Horas Restantes (`D2:D5`):
   - Acesse **Formatação Condicional** -> **Conjuntos de Ícones** -> Escolha os **3 Símbolos (Círculos Coloridos - Farol de Trânsito)**.
4. *Teste da Reatividade:* Altere o valor de Horas Atuais da Vela de Ignição (`C3`) de 60 para 95. Veja o status mudar instantaneamente para "ALERTA" e a cor mudar para amarelo!

---

## 4. EXERCÍCIO DE FIXAÇÃO INTENSIVO

**Desafio de Lógica Aeronáutica:**
Você é responsável por monitorar o cumprimento de 6 **Diretrizes de Aeronavegabilidade (DA)** emitidas pela ANAC:
- Colunas: `Nº da DA` | `Sistema` | `Horas de Voo Limite` | `Horas Atuais da Aeronave` | `Data Limite Calendárica` | `Status de Cumprimento`
- Regra de Auditoria com `=SE(OU(...))`:
  - Se `Horas Atuais >= Horas Limite` **OU** `Data Limite < HOJE()`, exibir `"AERONAVE IMPEDIDA DE VOAR (AOG)"`.
  - Caso contrário, exibir `"AERONAVEGABILIDADE CONFORME"`.
- Aplique formatação condicional vermelha e em negrito para os casos impeditivos.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Alt + C + L` | Abre o menu de **Formatação Condicional** |
| `HOJE()` | Função que retorna a data atual do sistema automaticamente |
| `Ctrl + Shift + L` | Ativa a linha de **Filtros Automáticos** no cabeçalho |
