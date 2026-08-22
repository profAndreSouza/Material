# GUIA DE AVALIAÇÃO — PROVA PRÁTICA FINAL DE EXCEL
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data de Aplicação:** 27/11/2026 (Sexta-feira)  
**Tema:** PROVA PRÁTICA FINAL DE EXCEL — Avaliação Individual em Laboratório (Aulas 5 a 14)  
**Ambiente:** Laboratório de Informática  
**Duração:** 90 minutos  
**Peso na Média Final:** **50% da Média Final (5,0 Pontos)**  

---

## 1. ESCOPO DO CONTEÚDO AVALIADO

A Prova Prática Final de Excel é uma avaliação individual que consolida todo o aprendizado de planilhas eletrônicas aplicadas à manutenção e engenharia aeronáutica:

1. **Fórmulas Básicas & Referências Absolutas (Aulas 5 e 6):**
   - Entrada e formatação de dados (número, moeda, data).
   - Uso obrigatório do trancamento com cifrão (`$`) em constantes e taxas de conversão de unidades.
2. **Modelagem de Dados & Peso e Balanceamento (Aula 7):**
   - Cálculo de momento ($M = P \times B$), somatórias de peso/momento e Centro de Gravidade ($CG$).
3. **Tomada de Decisão com Lógica Condicional & Formatação Visual (Aulas 8 e 9):**
   - Função `=SE()` simples e aninhada para controle de status e validade de componentes.
   - Combinações com `=E()`, `=OU()` e prevenção de erros com `=SEERRO()`.
   - Regras de Formatação Condicional com realce por cores.
4. **Agregações & Funções de Busca (Aulas 10 e 11):**
   - Contagens e somas com critérios: `=CONT.SE()` e `=SOMASE()`.
   - Consulta em catálogos de peças (*Illustrated Parts Catalog - IPC*) com `=PROCX()` ou `=PROCV()`.
5. **Engenharia Gráfica & Tabelas Dinâmicas (Aulas 12 e 13):**
   - Gráfico de colunas/linhas com títulos de eixos e rótulos de dados.
   - Construção de Tabela Dinâmica com Segmentação de Dados (*Slicers*).

---

## 2. INSTRUÇÕES GERAIS DE EXECUÇÃO

> [!IMPORTANT]
> **Regras de Aplicação da Prova Final:**
> 1. A avaliação é estritamente **individual** e sem consulta externa (exceto à ajuda integrada do Excel).
> 2. Crie uma pasta na Área de Trabalho com a nomenclatura: `C:\ProvaFinal_SeuNome_RA\`.
> 3. Salve periodicamente sua pasta de trabalho (`Ctrl + B` ou `Ctrl + S`).
> 4. Todas as respostas numéricas devem ser geradas por **fórmulas e funções** do Excel. Resultados digitados manualmente como texto ou valores estáticos serão zerados.

---

## 3. ESTRUTURA DO ARQUIVO DE ENTREGA

```
[PASTA DE ENTREGA: C:\ProvaFinal_SeuNome_RA\]
 └── Prova_Final_Excel_SeuNome.xlsx
      ├── Aba 1: Conversoes_e_CG
      ├── Aba 2: Lógica_e_Alertas
      ├── Aba 3: Catalogo_e_Requisicao
      └── Aba 4: Graficos_e_Dashboard
```

---

## 4. CRITÉRIOS DE CORREÇÃO COMPUTACIONAL (TOTAL: 10,0 PONTOS)

| Questão / Bloco Avaliado | Pontos | O que será verificado pelo professor |
| :--- | :---: | :--- |
| **Bloco 1: Conversões e $CG$** | 2,0 pts | Uso correto de referências `$`, fórmulas de momento e cálculo correto da posição do $CG$. |
| **Bloco 2: Lógica Condicional (`SE`/`E`/`OU`)** | 2,5 pts | Sintaxe correta dos testes lógicos, respostas automáticas e regras de formatação condicional de cores. |
| **Bloco 3: Buscas e Agregações (`PROCX`/`SOMASE`)** | 2,5 pts | Busca automática de descrição/preço no catálogo e contagens/somas condicionais corretas. |
| **Bloco 4: Gráficos de Engenharia** | 1,5 pts | Gráfico com títulos nos eixos, escala correta e leitura visual clara. |
| **Bloco 5: Tabela Dinâmica & Slicers** | 1,5 pts | Tabela dinâmica cruzando dados corretamente e filtro visual por segmentador funcionando. |
| **TOTAL GERAL DA PROVA FINAL** | **10,0 pts** | *(Comporá 50% da Média Final semestral)* |

---

## 5. FÓRMULA DE CÁLCULO DA MÉDIA FINAL (MF)

$$\text{MF} = (\text{Média dos Exercícios} \times 0{,}5) + (\text{Nota da Prova Final} \times 0{,}5)$$

- Se $\text{MF} \ge 6{,}0$ e Frequência $\ge 75\% \to$ **Aprovado Direto!**
- Se $2{,}0 \le \text{MF} < 6{,}0 \to$ **Habilitado para a Reavaliação (04/12/2026)**.
