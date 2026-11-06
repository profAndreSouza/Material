# Roteiro de Aula — Aula 03

**Componente curricular:** Banco de Dados I\
**Tema:** Modelagem conceitual: estruturas especiais\
**Modalidade:** remota\
**Ferramentas:** brModelo Web ou papel\
**Oracle:** não utilizado nesta aula\
**Duração:** 3h20\
**Apresentação de referência:** [aula-03.js](../slides/aula-03.js) — 26 slides

## Objetivos de aprendizagem

Ao final do encontro, o estudante deverá identificar papéis em auto-relacionamentos, classificar especializações segundo completude e disjunção, localizar atributos que pertencem a relacionamentos N:N e migrar uma associação N:N para uma entidade associativa e seu esquema relacional.

## Organização do encontro

Os slides organizam a aula em duas metades: conceitos e exercício de auto-relacionamento/especialização; em seguida, atributos em relacionamentos N:N, entidade associativa, mapeamento para o modelo lógico e exercício de aplicação em brModelo. O estudante pode enviar respostas e dúvidas pelo chat; o rascunho em papel é alternativa ao brModelo Web.

| Etapa | Slides | Atividade |
|---|---|---|
| Abertura e retomada | 1–3 | Entidade, relacionamento e cardinalidade |
| Auto-relacionamento | 4–7 | Professor orienta professor; exercício de supervisão |
| Especialização | 8–11 | Conta bancária e classificação de colaboradores |
| Exercício 1 e discussão | 12–13 | Projetos e pré-requisitos |
| Atributos e entidade associativa | 14–20 | Matrícula, venda de produtos e contratos |
| Mapeamento lógico | 21–23 | Relação própria para N:N; escolha de PKs e FKs |
| Exercício 2 e encerramento | 24–26 | Participação em projetos, correção e síntese |

A apresentação informa 3h20 para o encontro, sem fixar a duração individual de cada etapa.

## 1. Retomada: entidade, relacionamento e cardinalidade

Entidade representa uma classe de objetos sobre os quais o sistema registra dados. Relacionamento associa ocorrências de entidades. Cardinalidades mínimas e máximas expressam a participação prevista pelas regras do domínio. As estruturas desta aula ampliam o DER sem substituir esses conceitos básicos.

## 2. Auto-relacionamento

Ocorre quando instâncias da mesma entidade se relacionam entre si. Como a entidade aparece nos dois lados da relação, é necessário nomear os papéis para evitar ambiguidade.

**Exemplo dos slides:** `PROFESSOR` orienta `PROFESSOR`. Um orientador pode orientar zero ou vários professores (`0..N`); um professor orientado pode ter zero ou um orientador (`0..1`). Regra adicional: ninguém pode orientar a si próprio.

```text
PROFESSOR [orientador] (0,N) — ORIENTA — (0,1) PROFESSOR [orientado]
```

Os dois nomes representam papéis da mesma entidade, não dois cadastros diferentes. Nesta notação, o par junto ao papel descreve quantas associações uma ocorrência pode ter naquele papel.

No exercício da hierarquia organizacional, use `FUNCIONARIO` nos papéis `supervisor` e `supervisionado`. Um funcionário pode supervisionar zero ou vários funcionários. Cada funcionário, exceto o diretor-geral, responde a um supervisor. No relacionamento genérico, a participação do supervisionado pode ser representada como `(0,1)`; a regra “todos exceto o diretor-geral” explicita que para os demais o mínimo é 1. A exceção do diretor-geral é uma restrição de negócio adicional.

## 3. Especialização

Na especialização, uma entidade geral (superclasse) é dividida em subtipos. A superclasse conserva os atributos comuns; cada subtipo contém os atributos específicos e herda a identificação da superclasse.

Dois eixos de restrição:

- **Completude:** total quando toda ocorrência da superclasse pertence a pelo menos um subtipo; parcial quando pode não pertencer a nenhum.
- **Disjunção:** disjunta quando uma ocorrência pode pertencer a no máximo um subtipo; sobreposta quando pode pertencer a vários simultaneamente.

Nos exemplos apresentados, `CONTA` especializa-se em `CONTA_CORRENTE` e `CONTA_POUPANCA`: especialização total e disjunta (t,d). `COLABORADOR` pode ser instrutor, brigadista, ambos ou nenhum: parcial e sobreposta (p,o).

```text
CONTA(numero, data_abertura)
  ├── CONTA_CORRENTE(limite_cheque_especial)
  └── CONTA_POUPANCA(dia_aniversario)
```

`numero` e `data_abertura` são herdados pelos subtipos. **Fixação:** justifique a classificação de cada caso com as ocorrências permitidas: toda conta deve ter um dos dois tipos e não pode ter ambos; um colaborador pode acumular os dois papéis ou não ter nenhum.

## 4. Exercício da primeira metade — projetos e pré-requisitos

O enunciado descreve `PROJETO(código, nome, data_prevista)`. Um projeto pode depender de zero ou vários outros projetos e pode ser pré-requisito de zero ou vários projetos. O diagrama deve representar `DEPENDE_DE` como auto-relacionamento, identificar os papéis `projeto_dependente` e `pré-requisito` e registrar a regra de que um projeto não pode depender de si próprio.

**Entrega:** DER conceitual e justificativa das cardinalidades e restrições, individualmente ou em dupla. Na socialização, explique os papéis. A correção dos slides apresenta `(0,N)` em ambos: depender de projetos e ser pré-requisito são participações opcionais e múltiplas.

## 5. Relacionamento N:N com atributos

Quando o valor depende do par de instâncias associado, o atributo pertence ao relacionamento. `nota_final`, `frequência` e `semestre`, por exemplo, caracterizam um aluno cursando uma disciplina, não o aluno ou a disciplina isoladamente. O mesmo princípio vale para `quantidade` e `preço efetivamente cobrado` entre `PEDIDO` e `PRODUTO`.

No modelo conceitual Chen, esses atributos são ligados ao losango do relacionamento. Quando a associação tem identidade ou precisa participar de outras relações, ela pode ser representada como entidade associativa.

### Exemplo com dados — matrícula

| Aluno | Disciplina | Semestre | Nota final |
|---|---|---|---:|
| Ana | Banco de Dados | 2026/2 | 8,5 |
| Ana | Redes | 2026/2 | 7,0 |
| Bruno | Banco de Dados | 2026/2 | 9,0 |

Ana tem resultados diferentes em cada disciplina e a mesma disciplina tem notas diferentes para Ana e Bruno. A nota descreve a matrícula de um aluno em uma disciplina e semestre.

### Fixação — venda de produtos

Um pedido contém produtos e um produto pode aparecer em vários pedidos. Posicione `nome` em PRODUTO, `data_emissao` em PEDIDO e justifique por que `quantidade` e `preco_efetivo` ficam na associação N:N. Entregue um diagrama ou esquema textual com os atributos ligados aos elementos que descrevem.

## 6. Entidade associativa

O vínculo aluno–disciplina pode ser representado por `MATRICULA`, com semestre, data da matrícula, nota final e frequência. Cada matrícula pertence a exatamente um aluno e uma disciplina; cada aluno e disciplina podem ter zero ou várias matrículas.

```text
ALUNO (0,N) — POSSUI — (1,1) MATRICULA
DISCIPLINA (0,N) — REFERE_SE_A — (1,1) MATRICULA
```

No brModelo, identifique ALUNO e DISCIPLINA, represente a associação e seus atributos e confira as duas relações 1:N. Registre a regra de identificação da matrícula, incluindo o semestre se o vínculo puder se repetir a cada período.

### Fixação — contrato entre consultor e cliente

O enunciado propõe relação N:N entre CONSULTOR e CLIENTE, com data de início, encerramento e valor mensal. Deve-se criar a entidade associativa CONTRATO, ligada a cada entidade por 1:N. Para preservar contratos sucessivos do mesmo par, uma solução é `id_contrato` próprio; outra é usar uma chave composta que inclua a data de início, desde que a regra garanta unicidade.

**Entrega e discussão:** proponha os atributos e o identificador de CONTRATO, represente as duas relações e explique como o modelo preserva o histórico das contratações.

## 7. Migração para o modelo lógico

Uma associação N:N com atributos é convertida em uma relação própria, que recebe as chaves das entidades participantes como FKs e os atributos do vínculo como colunas. A chave pode ser composta quando a regra de unicidade do domínio permitir; pode incluir um período (por exemplo, semestre) quando o vínculo se repete por período. Um identificador próprio é adequado quando há ciclo de vida ou repetição que não se resolve bem com uma chave composta simples.

Exemplo dos slides — matrícula:

```text
ALUNO(id_aluno PK, nome)
DISCIPLINA(id_disciplina PK, nome)
MATRICULA(id_aluno PK/FK, id_disciplina PK/FK, semestre PK,
          data_matricula, nota_final, frequencia)
```

A chave `(id_aluno, id_disciplina, semestre)` traduz a regra de uma matrícula por aluno, disciplina e semestre. Se o negócio admitir duas matrículas no mesmo semestre, a chave deve ser revista. O diagrama conceitual pode mostrar `MATRICULA` como entidade associativa, ligada por duas relações 1:N.

## 8. Exercício da segunda metade — equipe em projetos

Modelar `COLABORADOR(id_colaborador, nome)` e `PROJETO(id_projeto, nome)` com participação N:N. Cada ocorrência da participação registra `papel`, `horas_semanais` e `data_inicio`. Entrega: DER conceitual e esquema relacional, com justificativa para a localização dos atributos, PKs e FKs.

### Correção orientada dos slides

Cada participação pertence a exatamente um colaborador e um projeto. Cada colaborador e cada projeto podem ter zero ou várias participações.

```text
COLABORADOR(id_colaborador PK, nome)
PROJETO(id_projeto PK, nome)
PARTICIPACAO(id_participacao PK, id_colaborador FK, id_projeto FK,
             papel, horas_semanais, data_inicio)
```

`id_colaborador` referencia COLABORADOR e `id_projeto` referencia PROJETO. O identificador próprio da participação permite registrar reingressos no mesmo projeto em datas diferentes. `papel` e `horas_semanais` descrevem o vínculo, pois a mesma pessoa pode desempenhar papéis e dedicar tempos diferentes em cada projeto.

A escolha da PK deve acompanhar a regra de unicidade. Se houver outras restrições, como impedir duas participações com a mesma data de início para o mesmo par, registre-as na justificativa. Nesta aula, a entrega é o esquema relacional escrito; não é necessário executar comandos no Oracle.

## Encerramento

Revisar a diferença entre auto-relacionamento, especialização e entidade associativa. O modelo final deve tornar claros os papéis, as regras de participação e a identidade dos vínculos.
