# Aula 07 — Modelos de Fundação, Transformers e Engenharia de Prompts

**Disciplina:** ISI022 — Sistemas de Informação e Tecnologias Emergentes  
**Duração:** 1h40min  
**Módulo:** IA Generativa e Agentes  
**Continuidade:** após a infraestrutura IoT, Edge, Cloud e Gêmeos Digitais, a aula discute como uma organização pode interagir com modelos generativos. A Aula 08 adicionará recuperação de conhecimento (RAG); a Aula 09, agentes e ferramentas.

## Objetivos de aprendizagem

Ao final, o estudante deverá ser capaz de:

1. Explicar, em nível conceitual, como um modelo de linguagem transforma texto em tokens e prevê a continuação de uma sequência.
2. Distinguir modelo de fundação, modelo de linguagem, Transformer, treinamento e inferência.
3. Elaborar prompts que especifiquem tarefa, contexto, formato e critérios de qualidade.
4. Avaliar respostas considerando evidência, incerteza, vieses, privacidade e necessidade de revisão humana.

## Preparação e materiais

- Slides da aula no [catálogo central](../../../Slides/index.html?disciplina=sistemas-emergentes&aula=aula-07).
- Acesso a um assistente de IA generativa autorizado pela instituição; a atividade também pode ser feita comparando respostas preparadas pelo docente.
- Não inserir dados pessoais, confidenciais ou identificáveis nos serviços públicos.
- Referências: Vaswani et al., [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762); OpenAI, [Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering).

## Roteiro (100 minutos)

| Tempo | Etapa | Estratégia |
|---|---|---|
| 0–10 min | Abertura e sondagem | Pergunta: “Um chatbot consulta uma base de dados ou prevê texto?” Levantar hipóteses sem tratar previsões como fatos. |
| 10–25 min | IA generativa e modelos de fundação | Diferenciar IA, aprendizado de máquina, redes neurais, modelos de fundação e aplicações. Exemplificar adaptação a tarefas por instruções e contexto. |
| 25–45 min | Tokens, embeddings e Transformer | Percorrer texto → tokens → representações vetoriais → atenção contextual → distribuição de próximo token → geração iterativa. Explicar que a atenção pondera relações entre posições; não é compreensão humana. |
| 45–60 min | Treinamento e inferência | Distinguir pré-treinamento, ajuste/alinhamento e inferência. Discutir janela de contexto, custo, latência, temperatura como parâmetro de amostragem e limites de conhecimento. |
| 60–70 min | Demonstração dialogada | Comparar um prompt vago com uma instrução estruturada. Pedir à turma que identifique pressupostos, omissões e risco de resposta inventada. |
| 70–95 min | Oficina em duplas | Executar o desafio “Assistente de chamados de TI” descrito abaixo; registrar três versões do prompt e comparar saídas. |
| 95–100 min | Fechamento | Entrega rápida: uma regra para reduzir risco e uma pergunta que a próxima aula (RAG) deverá responder. |

## Conceitos essenciais

### Modelo de fundação e LLM

Um modelo de fundação é treinado em dados amplos e pode ser adaptado ou instruído para diferentes tarefas. Um LLM (modelo de linguagem de grande porte) é uma categoria de modelo que trabalha com sequências de linguagem. O termo “fundação” não garante que o modelo conheça os dados internos da organização, esteja atualizado ou seja confiável em cada resposta.

### Visão simplificada do Transformer

1. **Tokenização:** o texto é dividido em unidades (tokens), que podem ser palavras, partes de palavras ou sinais. Tokens não equivalem necessariamente a palavras.
2. **Representação:** cada token recebe uma representação numérica; informação de posição permite distinguir a ordem.
3. **Atenção:** as camadas calculam relações contextuais entre tokens. Em modelos autoregressivos, uma máscara impede olhar para tokens futuros durante a previsão.
4. **Predição:** o modelo calcula probabilidades para o próximo token e seleciona um segundo regras de geração.
5. **Iteração:** o token escolhido é acrescentado ao contexto e o ciclo se repete até um limite ou condição de parada.

Isso descreve um mecanismo estatístico, não uma busca automática em uma base oficial nem uma garantia de verdade. O comportamento depende dos dados, arquitetura, treinamento, instruções e configurações do sistema.

### Prompt como especificação de tarefa

Um prompt útil explicita:

- **Papel e tarefa:** o que deve ser feito e para quem.
- **Contexto:** informações relevantes e limites do domínio.
- **Entrada:** texto ou dados que podem ser usados.
- **Formato:** estrutura, extensão, idioma ou esquema esperado.
- **Critérios e limites:** o que conta como resposta adequada e o que fazer quando faltar evidência.

Exemplo de estrutura: “Analise o chamado abaixo para a equipe de suporte. Use somente os dados fornecidos. Retorne: categoria, prioridade proposta, evidência textual e pergunta de esclarecimento. Se não houver evidência para classificar, escreva ‘insuficiente’. Não solicite senhas.”

## Oficina: triagem responsável de chamados de TI (25 min)

**Cenário fictício:** “Desde hoje cedo, não consigo acessar o sistema de pedidos. A página fica carregando e depois aparece erro 503. Outros colegas também relataram. Tenho uma apresentação às 14h.” Não há nomes, clientes ou credenciais reais.

### Etapas

1. **Tentativa inicial (5 min):** escreva um prompt curto e peça uma classificação e orientação inicial.
2. **Estruture (8 min):** revise para pedir categoria, prioridade proposta com justificativa, fatos observados, informação ausente e próximo passo seguro. Restrinja a resposta ao caso fictício e proíba inventar causa ou prometer prazo.
3. **Teste de robustez (7 min):** retire o código 503 ou acrescente uma informação contraditória. Verifique se o modelo sinaliza a lacuna/contradição em vez de preencher por conta própria.
4. **Revisão (5 min):** marque afirmações sem evidência, riscos de segurança e decisões que exigem validação humana.

### Entregável por dupla

Uma página ou registro curto contendo: prompt inicial e revisado; dois trechos de saída; tabela “afirmação / evidência no caso / ação”; uma limitação identificada; e uma política de revisão humana. Não é necessário compartilhar dados de conta ou histórico pessoal.

### Critérios de avaliação formativa (0–2 cada)

| Critério | 0 | 1 | 2 |
|---|---|---|---|
| Especificação do prompt | Tarefa ambígua | Parte dos requisitos | Tarefa, contexto e formato claros |
| Uso de evidências | Aceita inferências como fatos | Identifica algumas | Separa fatos, hipóteses e lacunas |
| Teste de robustez | Não testa | Uma variação simples | Testa ausência/contradição e registra resultado |
| Responsabilidade | Ignora riscos | Menciona risco genérico | Define limites, privacidade e revisão humana |

## Perguntas para discussão

- Por que uma resposta fluente pode estar errada?
- O que muda entre gerar uma resposta e consultá-la em fonte institucional validada?
- Que parte da decisão de prioridade pode ser automatizada e qual precisa de uma pessoa responsável?
- Quais dados do chamado poderiam identificar uma pessoa ou expor a organização?

## Para a próxima aula

Traga um exemplo de pergunta institucional cuja resposta deveria citar uma fonte interna. Na Aula 08, vamos estudar como recuperar trechos de documentos e fornecer contexto ao modelo (RAG), além dos limites dessa abordagem.

## Referências

- VASWANI, A. et al. [Attention Is All You Need](https://arxiv.org/abs/1706.03762). NeurIPS, 2017.
- OPENAI. [Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering). Documentação oficial.
- STAIR, R. M.; REYNOLDS, G. W. *Princípios de Sistemas de Informação*. Thomson Pioneira, 2013.
