# ROTEIRO DE AULA EXPANDIDO — SEMANA 09
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Oficina de Exercícios Integrados & Simulado Prático Preparatório para a Prova Prática 1  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online)  
**Articulação com o PPC:** Integração com disciplinas do 1º Semestre (Desenho Técnico, Familiarização, Cálculo e Comunicação)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula de simulação, você será capaz de:
- Integrar com agilidade e autonomia as ferramentas do **MS Word Técnico** (Estilos, tabelas, seções e sumários automáticos) e do **MS Excel** (Fórmulas, referências absolutas, lógica `SE`/`E`/`OU`, buscas `PROCX`/`PROCV` e agregações `CONT.SE`/`SOMASE`).
- Diagnosticar e solucionar erros sob tempo controlado de laboratório.
- Autoavaliar o seu domínio prático antes da realização da Prova Prática 1.

---

## 2. REVISÃO GERAL DE SINTAXES ESSENCIAIS (COLA RÁPIDA)

```
+--------------------------------------------------------------------------------------+
|                     SINTAXES CENTRAIS DO EXCEL NO OFFICE 365                         |
+--------------------------------------------------------------------------------------+
| 1. SOMA:          =SOMA(B4:B20)                                                      |
| 2. MÉDIA:         =MÉDIA(B4:B20)                                                     |
| 3. ARRED:         =ARRED(valor; 2)                                                   |
| 4. SE CONDICIONAL:=SE(teste; valor_se_verdadeiro; valor_se_falso)                    |
| 5. SE ANINHADO:   =SE(A1>100; "CRÍTICO"; SE(A1>50; "ALERTA"; "NORMAL"))              |
| 6. SE + E:        =SE(E(Horas>=100; Meses>=24); "SUBSTITUIR"; "MANTER")             |
| 7. PROCX MODERNO: =PROCX(código; coluna_códigos; coluna_retorno; "NÃO ENCONTRADO")  |
| 8. PROCV CLÁSSICO:=PROCV(código; matriz_completa; número_coluna; FALSO)              |
| 9. CONT.SE:       =CONT.SE(coluna_status; "DISPONÍVEL")                              |
| 10. SOMASE:       =SOMASE(coluna_modelos; "Cessna 172"; coluna_custos)               |
+--------------------------------------------------------------------------------------+
```

---

## 3. ROTEIRO DO SIMULADO PRÁTICO (TEMPO: 80 MINUTOS)

### Desafio 1: MS Word Técnico (30 minutos)
1. Crie um documento formal com 3 páginas.
2. Na página 1: Capa formatada institucionalmente.
3. Na página 2: Sumário Automático gerado com a ferramenta do Word.
4. Na página 3: Seção 1 (`1. REGISTRO DE MANUTENÇÃO`), contendo tabela de 4 colunas formatada e texto justificado com recuo de 1,25 cm.
5. A numeração de página deve aparecer **somente a partir da página 3** (use Quebra de Seção e desvincule o cabeçalho).
6. Exporte o arquivo para `Simulado_Word_SeuNome.pdf`.

### Desafio 2: MS Excel — Modelagem Operacional (50 minutos)
1. Monte uma base com 8 peças aeronáuticas com as colunas: `Part_Number`, `Descrição`, `Estoque_Atual`, `Estoque_Mínimo`, `Preço_Unitario_USD`.
2. Adicione coluna de `Status_Estoque`: Se `Estoque_Atual <= Estoque_Mínimo`, exibir `"REPOR ESTOQUE"`, senão `"ESTOQUE REGULAR"`.
3. Aplique formatação condicional vermelha nos itens a repor.
4. Monte a área de consulta do mecânico: digitando o `Part_Number`, o Excel deve retornar a `Descrição` e o `Preço` usando `=PROCX()` ou `=PROCV()`.
5. Calcule no resumo:
   - Quantas peças estão com status `"REPOR ESTOQUE"`.
   - Valor financeiro total necessário para repor todas as peças com estoque baixo.

---

## 4. MATRIZ DE AUTOAVALIAÇÃO DO ALUNO

- [ ] Sei criar estilos de parágrafo no Word e gerar o sumário com 1 clique?
- [ ] Sei usar quebra de seção para ocultar o número de página na capa e sumário?
- [ ] Compreendo quando e por que devo usar o cifrão (`$`) para trancar células no Excel?
- [ ] Sei escrever a função `=SE()` e combiná-la com `=E()`?
- [ ] Sei aplicar `=PROCX()` para buscar dados em catálogos técnicos?
- [ ] Sei somar e contar condicionalmente com `=SOMASE()` e `=CONT.SE()`?
