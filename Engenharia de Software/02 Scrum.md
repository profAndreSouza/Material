# SCRUM

## O que é o SCRUM?

SCRUM é um **framework ágil** para a **gestão e execução de projetos complexos**, muito utilizado em desenvolvimento de software, mas também aplicável a outras áreas como marketing, educação, design e gestão de produtos.

O SCRUM se baseia na ideia de **iteratividade, entrega contínua de valor e adaptação constante**. Ele promove a colaboração entre equipes multidisciplinares, foco em objetivos claros e ciclos curtos de entrega.


## Fundamentos do SCRUM

### Princípios principais

1. **Transparência**: Todos os envolvidos têm acesso claro ao que está sendo feito.
2. **Inspeção**: O trabalho é inspecionado regularmente para detectar problemas.
3. **Adaptação**: Ajustes são feitos com base no que foi aprendido.

### Origem

SCRUM é baseado no **Manifesto Ágil (2001)**, que trouxe uma nova forma de pensar desenvolvimento de software, priorizando:

- Indivíduos e interações acima de processos e ferramentas
- Software em funcionamento acima de documentação extensa
- Colaboração com o cliente acima de negociação de contratos
- Responder a mudanças acima de seguir um plano



## Papéis do SCRUM

SCRUM define três papéis fundamentais. Não há chefes nem hierarquia formal dentro do time Scrum — ele é **auto-organizável e multifuncional**.

### 1. Product Owner (PO)

- Responsável por **maximizar o valor** do produto.
- **Gerencia e prioriza** o **Product Backlog**.
- Define claramente os itens do backlog e garante que o time compreenda bem o que é esperado.
- Atua como **ponte entre o cliente e o time** de desenvolvimento.

### 2. Scrum Master

- **Facilitador** do processo Scrum.
- Garante que o time compreenda e siga o SCRUM.
- **Remove impedimentos** que bloqueiem o progresso do time.
- **Protege o time** de interferências externas.
- Facilita reuniões, promove melhoria contínua e ajuda o PO.

### 3. Development Team (Time de Desenvolvimento)

- **Time multifuncional**: possui todas as habilidades para entregar o produto.
- **Autogerenciado**: decide como realizar o trabalho.
- Composto por 3 a 9 membros, geralmente.
- Responsável por transformar itens do backlog em incrementos de produto.



## Ciclo SCRUM

Abaixo está o fluxo do SCRUM. Cada Sprint passa por este ciclo completo.

```
                        ┌────────────────────┐
                        │   Product Backlog  │
                        │ (lista de itens)   │
                        └────────┬───────────┘
                                 │
                                 ▼
                   ┌─────────────────────────┐
                   │  Sprint Planning         │
                   │  (Planejamento da Sprint)│
                   └────────┬────────────────┘
                            │
                            ▼
                 ┌────────────────────────┐
                 │    Sprint (1-4 semanas) │
                 │  Trabalho é executado   │
                 └────────┬───────────────┘
                          │
             ┌────────────┴────────────┐
             ▼                         ▼
   ┌────────────────┐        ┌───────────────────────┐
   │   Daily Scrum   │        │    Desenvolvimento     │
   │ (reunião diária)│        │    contínuo de valor   │
   └────────────────┘        └───────────────────────┘
                          │
                          ▼
              ┌────────────────────────┐
              │     Sprint Review      │
              │ (Apresentação do trabalho) │
              └────────┬───────────────┘
                       │
                       ▼
            ┌────────────────────────────┐
            │  Sprint Retrospective      │
            │ (Análise e melhoria do time)│
            └────────┬───────────────────┘
                     │
                     ▼
             ┌─────────────────────┐
             │ Início de nova Sprint │
             └─────────────────────┘
```

Esse ciclo se repete **até que o produto esteja pronto ou o projeto finalizado**.



## Eventos do SCRUM (Cerimônias)

1. **Sprint**
   - Duração fixa (time-boxed), entre 1 e 4 semanas.
   - Durante esse período, o time entrega um **Incremento funcional do produto**.
   - O escopo da Sprint pode ser renegociado com o PO, mas o **objetivo da Sprint não muda**.

2. **Sprint Planning**
   - Define o que será feito durante a Sprint.
   - O time seleciona itens do Product Backlog e planeja como irá realizá-los.
   - Define-se o **Sprint Goal** (objetivo da Sprint).

3. **Daily Scrum (Reunião diária)**
   - Duração máxima: 15 minutos.
   - Realizada todos os dias da Sprint.
   - Foco na **sincronização do time**.
   - Três perguntas básicas:
     - O que eu fiz ontem?
     - O que vou fazer hoje?
     - Há algum impedimento?

4. **Sprint Review**
   - Realizada ao final da Sprint.
   - O time apresenta o **Incremento** produzido aos stakeholders.
   - Coleta-se feedback para ajustar o Product Backlog.

5. **Sprint Retrospective**
   - Última cerimônia da Sprint.
   - Time analisa o que funcionou, o que não funcionou e propõe melhorias.
   - Foco na **melhoria contínua** da equipe e do processo.



## Artefatos do SCRUM

1. **Product Backlog**
   - Lista priorizada de tudo o que precisa ser feito no produto.
   - É **dinâmico e evolutivo**: muda com o tempo.
   - Gerenciado pelo Product Owner.

2. **Sprint Backlog**
   - Subconjunto do Product Backlog selecionado para a Sprint.
   - Inclui também o plano para entregar o trabalho.
   - É **controlado pelo time de desenvolvimento**.

3. **Incremento**
   - Soma de todos os itens do Product Backlog completados durante a Sprint.
   - Deve ser **funcional, testado e pronto para entrega**.
   - Pode ser entregue ao cliente ou mantido para liberação futura.



## Termos importantes

- **Definition of Done (DoD)**: critério que define quando um item está completo.
- **Velocity**: quantidade de trabalho que o time consegue entregar por Sprint.
- **Burndown Chart**: gráfico que mostra o progresso da Sprint.
- **Time-boxing**: cada evento tem tempo limite definido.
- **Impedimentos**: obstáculos que impedem o time de avançar.



## Exemplo Prático

Imagine uma equipe Scrum desenvolvendo um app de lista de tarefas:

- O Product Owner cria o **Product Backlog**:
  - Criar tarefa
  - Editar tarefa
  - Deletar tarefa
  - Sincronizar com nuvem
  - Notificações

- O time planeja a Sprint e escolhe:
  - Criar tarefa
  - Editar tarefa

- Durante duas semanas (Sprint), desenvolvem essas funcionalidades.
- Fazem reuniões diárias de 15 minutos (Daily Scrum).
- No final, apresentam o progresso na Sprint Review.
- O time reflete sobre o que funcionou na Retrospective.
- Começa a próxima Sprint com novos itens.



## Ferramentas para usar SCRUM

- Jira (Atlassian)
- Trello (com plugins para Scrum)
- Azure DevOps
- ClickUp
- Monday.com
- Asana (com templates ágeis)



## Conclusão

SCRUM é um framework leve, simples de entender, mas difícil de dominar. Seus benefícios vêm da aplicação **disciplinada** e da **colaboração constante entre todos os envolvidos**.

Ele ajuda as equipes a se manterem organizadas, motivadas e produtivas, entregando valor contínuo ao cliente com mais rapidez e flexibilidade.
