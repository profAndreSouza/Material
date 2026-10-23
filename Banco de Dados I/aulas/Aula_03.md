# Roteiro de Aula — Aula 03

**Tema:** Modelagem conceitual: estruturas especiais  
**Modalidade:** remota  
**Ferramentas:** brModelo Web ou papel  
**Oracle:** não utilizado nesta aula  
**Duração:** 3h20

## Objetivos de aprendizagem

Ao final do encontro, o estudante deverá identificar papéis em auto-relacionamentos, classificar especializações segundo completude e disjunção, localizar atributos que pertencem a relacionamentos N:N e migrar uma associação N:N para uma entidade associativa e seu esquema relacional.

## Organização do encontro

Os slides organizam a aula em duas metades: conceitos e exercício de auto-relacionamento/especialização; em seguida, atributos em relacionamentos N:N, entidade associativa, mapeamento para o modelo lógico e exercício de aplicação em brModelo. O estudante pode enviar respostas e dúvidas pelo chat; o rascunho em papel é alternativa ao brModelo Web.

## 1. Retomada: entidade, relacionamento e cardinalidade

Entidade representa uma classe de objetos sobre os quais o sistema registra dados. Relacionamento associa ocorrências de entidades. Cardinalidades mínimas e máximas expressam a participação prevista pelas regras do domínio. As estruturas desta aula ampliam o DER sem substituir esses conceitos básicos.

## 2. Auto-relacionamento

Ocorre quando instâncias da mesma entidade se relacionam entre si. Como a entidade aparece nos dois lados da relação, é necessário nomear os papéis para evitar ambiguidade.

**Exemplo dos slides:** `PROFESSOR` orienta `PROFESSOR`. Um orientador pode orientar zero ou vários professores (`0..N`); um professor orientado pode ter zero ou um orientador (`0..1`). Regra adicional: ninguém pode orientar a si próprio.

No exercício da hierarquia organizacional, use `FUNCIONARIO` nos papéis `supervisor` e `supervisionado`. Um funcionário pode supervisionar zero ou vários funcionários. Cada funcionário, exceto o diretor-geral, responde a um supervisor. No relacionamento genérico, a participação do supervisionado pode ser representada como `(0,1)`; a regra “todos exceto o diretor-geral” explicita que para os demais o mínimo é 1. A exceção do diretor-geral é uma restrição de negócio adicional.

## 3. Especialização

Na especialização, uma entidade geral (superclasse) é dividida em subtipos. A superclasse conserva os atributos comuns; cada subtipo contém os atributos específicos e herda a identificação da superclasse.

Dois eixos de restrição:

- **Completude:** total quando toda ocorrência da superclasse pertence a pelo menos um subtipo; parcial quando pode não pertencer a nenhum.
- **Disjunção:** disjunta quando uma ocorrência pode pertencer a no máximo um subtipo; sobreposta quando pode pertencer a vários simultaneamente.

Nos exemplos apresentados, `CONTA` especializa-se em `CONTA_CORRENTE` e `CONTA_POUPANCA`: especialização total e disjunta (t,d). `COLABORADOR` pode ser instrutor, brigadista, ambos ou nenhum: parcial e sobreposta (p,o).

## 4. Exercício da primeira metade — projetos e pré-requisitos

O enunciado descreve `PROJETO(código, nome, data_prevista)`. Um projeto pode depender de zero ou vários outros projetos e pode ser pré-requisito de zero ou vários projetos. O diagrama deve representar `DEPENDE_DE` como auto-relacionamento, identificar os papéis `projeto_dependente` e `pré-requisito` e registrar a regra de que um projeto não pode depender de si próprio.

## 5. Relacionamento N:N com atributos

Quando o valor depende do par de instâncias associado, o atributo pertence ao relacionamento. `nota_final`, `frequência` e `semestre`, por exemplo, caracterizam um aluno cursando uma disciplina, não o aluno ou a disciplina isoladamente. O mesmo princípio vale para `quantidade` e `preço efetivamente cobrado` entre `PEDIDO` e `PRODUTO`.

No modelo conceitual Chen, esses atributos são ligados ao losango do relacionamento. Quando a associação tem identidade ou precisa participar de outras relações, ela pode ser representada como entidade associativa.

## 6. Entidade associativa e migração para o modelo lógico

Uma associação N:N com atributos é convertida em uma relação própria, que recebe as chaves das entidades participantes como FKs e os atributos do vínculo como colunas. A chave pode ser composta quando a regra de unicidade do domínio permitir; pode incluir um período (por exemplo, semestre) quando o vínculo se repete por período. Um identificador próprio é adequado quando há ciclo de vida ou repetição que não se resolve bem com uma chave composta simples.

Exemplo dos slides — matrícula:

```text
ALUNO(id_aluno PK, nome)
DISCIPLINA(id_disciplina PK, nome)
MATRICULA(id_aluno PK/FK, id_disciplina PK/FK, semestre PK,
          data_matricula, nota_final, frequencia)
```

A chave `(id_aluno, id_disciplina, semestre)` traduz a regra de uma matrícula por aluno, disciplina e semestre. Se o negócio admitir duas matrículas no mesmo semestre, a chave deve ser revista. O diagrama conceitual pode mostrar `MATRICULA` como entidade associativa, ligada por duas relações 1:N.

## 7. Exercício intermediário — contrato consultor-cliente

O enunciado propõe relação N:N entre `CONSULTOR` e `CLIENTE`, com data de início, encerramento e valor mensal. Deve-se criar entidade associativa `CONTRATO`, ligada a cada entidade por 1:N. Para preservar contratos sucessivos do mesmo par, uma solução é `id_contrato` próprio; outra é usar chave composta que inclua uma data de início, desde que a regra garanta unicidade.

## 8. Exercício da segunda metade — equipe em projetos

Modelar `COLABORADOR(id_colaborador, nome)` e `PROJETO(id_projeto, nome)` com participação N:N. Cada ocorrência da participação registra `papel`, `horas_semanais` e `data_inicio`. Entrega: DER conceitual e esquema relacional, com justificativa para a localização dos atributos, PKs e FKs.

## Encerramento

Revisar a diferença entre auto-relacionamento, especialização e entidade associativa. O modelo final deve tornar claros os papéis, as regras de participação e a identidade dos vínculos.
