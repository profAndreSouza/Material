# ROTEIRO DE AULA EXPANDIDO — SEMANA 11
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Prova Prática 1 — Roteiro de Apoio, Orientações e Instruções da Avaliação Somativa  
**Ambiente:** Laboratório de Informática (Avaliação Individual)  

---

## 1. OBJETIVOS DE INFORMATICA
Nesta sessão de avaliação somativa, você demonstrará domínio individual em:
- Operação e configuração do ambiente Windows 11 (gestão de diretórios e arquivos).
- Formatação de documentos técnicos formais no MS Word (Estilos, Tabelas, Imagens, Sumário Automático).
- Construção de planilhas de gestão no MS Excel utilizando operadores aritméticos, formatação profissional, funções essenciais (`SOMA`, `MÉDIA`), funções lógicas (`SE`), buscas (`PROCV`) e contagens/somas condicionais (`CONT.SE`, `SOMASE`).

---

## 2. INSTRUÇÕES GERAIS DE EXECUÇÃO EM LABORATÓRIO

> [!IMPORTANT]
> **Normas de Aplicação da Prova Prática:**
> 1. A prova é estritamente **individual** e sem consulta a colegas ou internet externa.
> 2. O tempo total de execução no computador é de **90 minutos**.
> 3. Todos os arquivos criados deverão ser salvos na pasta criada por você em `C:\Prova_Pratica_1_SeuNome\`.
> 4. Certifique-se de salvar constantemente o trabalho (`Ctrl + S`) no Word e Excel para evitar perda de dados por oscilação de energia.

---

## 3. ESTRUTURA DO DESAFIO PRÁTICO DA PROVA

```
[PASTA DA PROVA: C:\Prova_Pratica_1_SeuNome\]
 ├── Parte1_Relatorio_Tecnico.docx (MS Word: Estilos, Tabela, Sumário)
 └── Parte2_Planilha_Gestao.xlsx   (MS Excel: Fórmulas, SE, PROCV, CONT.SE)
```

### Escopo das Tarefas Esperadas:

#### PARTE A: MS WORD (Peso na Prova: 35%)
1. Criar a estrutura de um relatório técnico com Capa, Sumário Automático e 3 seções.
2. Aplicar estilos padronizados (Título 1 em Arial 14pt Negrito, Corpo de Texto em Arial 11pt Justificado com espaçamento 1,5 linha).
3. Inserir uma tabela formatada de equipamentos com cabeçalho sombreado.
4. Exportar a versão final do relatório no formato **PDF/A**.

#### PARTE B: MS EXCEL (Peso na Prova: 65%)
1. **Modelagem:** Montar a tabela de peças/voos com colunas de código, valores e status.
2. **Cálculos:** Calcular totais e médias utilizando `=SOMA()` e `=MÉDIA()`.
3. **Lógica Condicional:** Criar coluna de alerta utilizando `=SE()` para destacar componentes com horas acima do limite e aplicar Formatação Condicional vermelha.
4. **Busca Automática:** Criar área de consulta onde o código da peça retorne a Descrição e o Preço usando `=PROCV()` envelopado por `=SEERRO()`.
5. **Resumo:** Criar indicadores utilizando `=CONT.SE()` e `=SOMASE()`.

---

## 4. CRITÉRIOS COMPUTACIONAIS DE AVALIAÇÃO

| Requisito Avaliado | Critério de Correção do Professor |
| :--- | :--- |
| **Sintaxe de Fórmulas** | Uso correto dos nomes das funções e separadores de argumentos (`;` e `:`). |
| **Alocação de Referências** | Uso correto de referências relativas e trancamento de células (`$`) quando necessário. |
| **Formatação Profissional** | Uso de moeda (`R$`), números decimais ajustados e visualização limpa. |
| **Integridade de Estilos** | Documento Word com Sumário Automático funcional (não digitado manualmente). |
