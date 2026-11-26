# Atividade — Projetando e avaliando um pipeline RAG

**Disciplina:** Sistemas de Informação e Tecnologias Emergentes (ISI022)  
**Aula:** 08 — Engenharia de RAG e Bancos Vetoriais  
**Modalidade:** individual ou em dupla  
**Entrega:** enviar um único notebook pelo Microsoft Teams até o prazo informado pelo docente.

## Objetivo

Construir e analisar uma demonstração pequena de Retrieval-Augmented Generation (RAG). A atividade acompanha o ciclo desde a preparação de documentos até a recuperação de evidências, a formulação de uma resposta fundamentada e a avaliação do resultado.

Use o notebook-base da [Aula 08](Aula08_Engenharia_RAG_Bancos_Vetoriais.ipynb) como referência. A coleção e as respostas serão fictícias. Não é necessário usar um LLM, contratar serviços ou conectar a uma API externa.

## Situação-problema

Uma empresa fictícia quer oferecer um assistente interno para dúvidas sobre procedimentos. As respostas precisam respeitar as permissões das áreas, indicar a fonte consultada e admitir quando a coleção não oferece evidência suficiente.

Crie uma pequena base com **pelo menos seis trechos** de procedimentos fictícios. Inclua conteúdos de pelo menos duas áreas, por exemplo TI, Financeiro, Compras ou RH. Para cada trecho, mantenha metadados que permitam identificar:

- identificador e título do documento;
- seção ou número do trecho;
- versão e situação (vigente ou obsoleta);
- área responsável;
- perfil ou grupo autorizado a consultar o conteúdo.

Inclua uma regra com condição ou exceção, uma versão antiga que conflite com a versão vigente e uma frase de instrução maliciosa inserida como conteúdo de um documento. Não use documentos internos reais.

## Tarefas

### 1. Prepare a coleção

Registre os seis ou mais trechos e seus metadados. Explique brevemente como dividiu os documentos e por que suas unidades de texto preservam regras, condições e exceções relevantes.

A coleção deve permitir que outra pessoa identifique a origem de cada trecho recuperado. Não misture documentos de áreas diferentes em uma unidade sem preservar a origem e as permissões de cada parte.

### 2. Prepare perguntas e resultados esperados

Crie **pelo menos cinco consultas**:

- duas perguntas respondíveis pela coleção;
- uma paráfrase de uma regra, sem repetir as palavras exatas do trecho;
- uma pergunta que dependa de um código, nome ou termo específico;
- uma pergunta sem resposta suficiente na coleção.

Antes de executar as buscas, anote quais trechos são relevantes para cada pergunta. Esses rótulos serão usados para avaliar a recuperação.

### 3. Compare estratégias de recuperação

No notebook-base, use as estratégias demonstradas na aula para comparar resultados. Inclua busca lexical e uma estratégia vetorial ou híbrida disponível no material. Se trabalhar com vetorização TF-IDF, identifique-a como uma representação lexical de referência: ela não é, por si só, um modelo moderno de embeddings semânticos.

Para cada consulta, registre os principais resultados recuperados e indique se a evidência necessária apareceu entre os primeiros resultados. Explique ao menos um falso positivo ou falso negativo observado e o que poderia tê-lo causado.

### 4. Aplique permissões e versões

Simule **dois perfis** de acesso. A consulta deve considerar a autorização e a validade dos documentos antes de montar o contexto enviado ao gerador.

Demonstre que:

- um perfil não recebe um trecho restrito a outra área;
- uma versão obsoleta não substitui silenciosamente a regra vigente;
- um registro sem classificação não é tratado automaticamente como público;
- conteúdo recuperado não concede novas permissões ao sistema.

### 5. Elabore respostas com evidências

Para pelo menos duas perguntas respondíveis, escreva uma resposta curta usando somente as evidências recuperadas. Cite o identificador e a versão do trecho que sustenta cada afirmação.

Para a pergunta sem resposta suficiente, mostre uma resposta de abstenção: informe que a coleção não contém base suficiente e indique qual informação ou fonte seria necessária. Se houver conflito entre versões, explicite o conflito em vez de combinar regras incompatíveis.

### 6. Analise segurança e qualidade

Explique como o sistema deve tratar a frase maliciosa encontrada no documento. Ela é conteúdo a ser analisado, não uma nova instrução para o assistente.

Calcule, com os rótulos que preparou, **Precision@3 e Recall@3 para pelo menos três consultas**. Apresente uma tabela com os resultados e explique uma limitação dessas métricas: uma boa recuperação não garante que a resposta esteja correta, citada ou autorizada.

Conclua indicando uma falha que poderia ocorrer no pipeline, a etapa em que ela surgiria e um controle para reduzi-la.

## O que entregar

Envie **um único arquivo `.ipynb` executado**, preparado a partir do notebook-base da Aula 08. O arquivo deve conter:

1. os documentos fictícios e seus metadados;
2. as consultas e os rótulos de relevância;
3. os resultados da comparação de busca;
4. a demonstração de filtros de acesso e tratamento de versões;
5. as respostas com citações e a resposta de abstenção;
6. as métricas solicitadas e uma análise final escrita em células Markdown.

Nomeie o arquivo `Aula08_NomeSobrenome.ipynb` ou, em dupla, `Aula08_Nome1_Nome2.ipynb`. Informe nome completo de todos os participantes, turma e disciplina na primeira célula Markdown. Em dupla, os integrantes entregam um único arquivo com o trabalho discutido em conjunto. A atividade individual tem os mesmos requisitos.

Use documentos e identidades fictícios. Não inclua dados pessoais, credenciais, políticas internas ou documentos protegidos. Integrações com modelos ou bancos vetoriais reais são opcionais e não são necessárias para esta entrega.

## Critérios de avaliação — 10 pontos

| Critério | Pontos | O que será considerado |
|---|---:|---|
| Coleção, chunking e metadados | 1,5 | Trechos legíveis, origem, versão, situação e permissão identificáveis. |
| Consultas e recuperação | 2,0 | Consultas variadas, rótulos prévios e comparação interpretada. |
| Controle de acesso e versões | 2,0 | Filtros aplicados antes da composição do contexto e tratamento correto de conflitos. |
| Respostas, citações e abstenção | 2,0 | Afirmações apoiadas em fontes rastreáveis; lacunas reconhecidas. |
| Avaliação e análise crítica | 2,5 | Métricas corretas, limitações explicadas e falha com controle proposto. |

## Orientação final

RAG pode fornecer contexto documental útil a um modelo, mas não certifica que uma fonte esteja correta, atual ou autorizada. A qualidade da solução depende das fontes, da preparação dos trechos, da recuperação, dos filtros, da resposta e da avaliação de ponta a ponta.
