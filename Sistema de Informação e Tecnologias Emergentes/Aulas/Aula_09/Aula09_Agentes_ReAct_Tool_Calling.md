# Aula 09 — Agentes Autônomos, ReAct e Invocação de Ferramentas

**Disciplina:** Sistemas de Informação e Tecnologias Emergentes (ISI022)  
**Duração:** 1h40min  
**Módulo:** 5 — IA Generativa e Agentes  
**Material de leitura:** [Notebook conceitual da aula](Aula09_Agentes_ReAct_Tool_Calling.ipynb)

## Objetivos de aprendizagem

Ao final da aula, o estudante deverá ser capaz de:

- distinguir chatbot, workflow e agente;
- descrever o ciclo ReAct por meio de ações e observações verificáveis;
- explicar a relação entre modelo, aplicação de orquestração e ferramenta;
- identificar limites de autonomia, permissões e aprovações necessárias;
- analisar falhas, riscos de segurança e critérios de avaliação de um agente.

## Roteiro de 100 minutos

| Tempo | Etapa |
|---|---|
| 0–8 min | Situação-problema: atender um pedido sem inventar disponibilidade, preço ou prazo. |
| 8–20 min | Chatbot, workflow e agente: diferenças, usos e compromissos de previsibilidade. |
| 20–35 min | ReAct: objetivo, ação, execução, observação e decisão seguinte. |
| 35–48 min | Tool calling: responsabilidades do modelo, aplicação e serviço integrado. |
| 48–58 min | Autonomia, permissões, aprovação humana, erros e segurança. |
| 58–63 min | Apresentar o caso da loja fictícia e organizar os grupos. |
| 63–85 min | Atividade conceitual: montar e justificar roteiro ReAct, sem programação. |
| 85–95 min | Discussão cruzada: falhas, instruções maliciosas, aprovações e alternativa de workflow. |
| 95–100 min | Síntese, entrega e autoavaliação. |

## Condução da aula

### 1. Abertura: apresentar o problema

Apresente a solicitação fictícia de uma cliente que deseja duas unidades de `SKU-100` para entrega em Campinas. Pergunte à turma quais informações faltam, quais sistemas poderiam fornecer os dados e quais ações gerariam consequências comerciais. Use as respostas para introduzir o agente como um componente de um Sistema de Informação, não como um ator que tem acesso irrestrito por conta própria.

### 2. Conceitos principais

Explique que um chatbot responde, um workflow segue passos predefinidos e um agente seleciona entre ações autorizadas. Compare previsibilidade, flexibilidade e necessidade de controle.

Apresente ReAct como um ciclo de ação e observação. Foque em evidências operacionais: ação solicitada, dados enviados, resultado recebido e próxima decisão. Não solicite uma transcrição extensa do raciocínio privado do modelo. Para auditoria, registre o que aconteceu e a regra ou evidência que justificou a ação.

Explique o fluxo de tool calling em três partes: o modelo propõe uma chamada; a aplicação confere ferramenta, argumentos, permissões e regras; o serviço executa ou rejeita e retorna um resultado. O modelo pode interpretar o resultado, mas a aplicação permanece responsável pelos controles e pela integração.

### 3. Caso da loja fictícia

Use os dados do notebook como narrativa: o catálogo identifica produto e preço; o estoque responde que há unidades; o CEP está ausente, então o agente deve perguntar antes de cotar. A cotação retornada não deve ser inventada. Um rascunho de pedido pode ser separado de reserva, cobrança e emissão fiscal. Discuta quais etapas são leitura, preparação reversível e ação de impacto.

### 4. Atividade conceitual em grupos

Em grupos de duas ou três pessoas, os estudantes escolhem um cenário e montam de quatro a oito etapas em tabela. Cada etapa deve indicar objetivo, evidência disponível, ação ou pergunta, validação e permissão, observação e próxima decisão. Os grupos devem incluir pelo menos um dado ausente ou erro e uma tentativa de instrução maliciosa.

**Cenários sugeridos:**

- falta o CEP para consultar frete;
- a ferramenta de estoque está indisponível;
- a quantidade solicitada supera o saldo retornado;
- o produto não existe no catálogo;
- duas fontes retornam preços diferentes;
- o cliente tenta acessar o histórico de outra pessoa;
- a resposta de uma criação de rascunho se perde e não se sabe se a operação ocorreu.

### 5. Discussão e fechamento

Peça a cada grupo que explique uma decisão difícil. Questione se um workflow fixo seria mais adequado, quais ferramentas são realmente necessárias, qual ação precisa de aprovação e como evitar repetição de ações. Conclua retomando a responsabilidade da aplicação em autorização, validação, auditoria, tratamento de falhas e proteção de dados.

## Entregável

Roteiro ReAct de quatro a oito etapas, análise de dois riscos com seus controles e uma regra de aprovação humana. Os exemplos devem ser fictícios; não incluir dados pessoais, credenciais ou conteúdo interno sem autorização.

## Rubrica formativa (0–2 por critério)

| Critério | 0 | 1 | 2 |
|---|---|---|---|
| Sequência de decisões | Etapas ausentes ou sem relação | Sequência parcial | Ações decorrem das observações e do objetivo |
| Uso de evidências | Inventa ou mistura hipótese e fato | Reconhece parte das evidências | Distingue claramente fatos, ausência e falha |
| Ferramentas e integração | Confunde modelo e sistema externo | Reconhece papéis parcialmente | Explica proposta, validação e execução |
| Segurança e autonomia | Ignora permissões ou efeitos | Identifica risco sem controle concreto | Propõe limites, aprovação e resposta a falha |

## Referências

- Yao, S. et al. [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629). ICLR, 2023.
- OpenAI, [Function calling](https://developers.openai.com/api/docs/guides/function-calling) e [Tools](https://developers.openai.com/api/docs/guides/tools).
- OWASP GenAI Security Project, [LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) e [LLM01:2026 Prompt Injection](https://genai.owasp.org/llm2026/llm012026-prompt-injection/).
