# Normalização de Dados

## Resumo muito breve

A Primeira Forma Normal (1FN) elimina grupos repetidos e garante que todos os atributos sejam atômicos.
A Segunda Forma Normal (2FN) elimina dependências parciais, garantindo que atributos dependam da chave completa.
A Terceira Forma Normal (3FN) elimina dependências transitivas, ou seja, atributos não dependem de outros atributos não-chave.


# Formas Normais Avançadas

## BCNF (Forma Normal de Boyce-Codd)

A BCNF é uma versão mais rigorosa da 3FN. Ela exige que, para toda dependência funcional X → Y, o determinante X seja uma superchave. Em outras palavras, qualquer atributo que determine outro deve ser, necessariamente, uma chave candidata.

A diferença central em relação à 3FN é que esta ainda permite algumas dependências quando o atributo dependente faz parte de uma chave candidata. A BCNF elimina completamente essa tolerância, tornando o modelo mais consistente, porém potencialmente mais fragmentado.

### Cenário: Agendamento de salas

Considere uma tabela inicial de agendamento:

Agendamento(Sala, Horario, Professor, Disciplina)

Exemplo de instâncias:

(101, 08:00, João, Banco de Dados)
(101, 10:00, Maria, Inteligência Artificial)
(102, 08:00, João, Banco de Dados)

Agora considere as regras do domínio:

* Um professor pode ministrar várias disciplinas ao longo do semestre (relação N:N entre Professor e Disciplina).
* Em um horário e sala específicos pode haver mais de uma disciplina compartilhando o espaço (ex: laboratório com turmas integradas), o que gera um relacionamento N:N entre Agendamento e Disciplina.
* Cada professor, em um dado horário, só pode estar em uma disciplina.

A partir disso, podemos identificar dependências:

1. (Sala, Horario) → Professor
2. Professor, Disciplina → Horario (em um cenário de grade fixa)
3. Professor → Área (supondo que área não está na tabela, mas poderia estar)

Agora surge um problema importante: dependendo das regras adotadas, podemos ter situações onde:

Professor → Disciplina (quando o professor só ministra uma disciplina naquele período)

Se isso ocorrer, temos uma dependência onde o determinante (Professor) não é chave da tabela (a chave continua sendo Sala + Horario, ou eventualmente Sala + Horario + Disciplina, dependendo da modelagem).

Isso caracteriza uma violação da BCNF.

### Problema prático

Se um professor aparece várias vezes associado à mesma disciplina, há redundância.
Se a disciplina do professor mudar, várias linhas precisam ser atualizadas.
Se removemos todas as linhas de um professor, perdemos informação sobre sua disciplina.

### Decomposição para BCNF

Separando as dependências:

ProfessorDisciplina(Professor, Disciplina)

Agendamento(Sala, Horario, Professor)

Caso exista relação N:N entre disciplinas e horários:

AgendamentoDisciplina(Sala, Horario, Disciplina)

Agora cada tabela possui apenas dependências onde o determinante é chave.

### Intuição final

A BCNF força o seguinte raciocínio: sempre que um atributo “determina” outro, ele deve ser tratado como entidade própria ou chave. Isso frequentemente leva à criação de tabelas associativas, especialmente em cenários com relacionamentos N:N.


## 5FN (Quinta Forma Normal)

A 5FN trata de dependências de junção. Uma tabela está na 5FN quando toda decomposição em múltiplas tabelas pode ser reconstruída sem perda de informação e sem gerar tuplas espúrias, e essas decomposições são baseadas apenas nas chaves.

Ela aparece principalmente em cenários com relacionamentos ternários ou mais complexos.

### Cenário: Agendamento com múltiplas associações

Considere agora um cenário mais rico:

Uma disciplina pode ocorrer em várias salas.
Um professor pode participar de várias disciplinas.
Uma disciplina pode ter vários professores (co-docência).

Temos então um relacionamento ternário:

Alocacao(Professor, Disciplina, Sala)

Exemplo:

(João, Banco de Dados, 101)
(Maria, IA, 101)
(João, IA, 102)

Agora imagine que:

* Professores podem dar determinadas disciplinas
* Disciplinas podem ocorrer em determinadas salas
* Professores podem acessar determinadas salas

Se armazenarmos tudo em uma única tabela, podemos gerar combinações implícitas indevidas.

Por exemplo, ao decompor em:

ProfessorDisciplina(Professor, Disciplina)
DisciplinaSala(Disciplina, Sala)
ProfessorSala(Professor, Sala)

Ao fazer junção dessas três tabelas, podemos gerar combinações que não existiam originalmente (tuplas espúrias).

A 5FN garante que a decomposição só seja feita quando essa recomposição for segura.

### Intuição

A 5FN resolve problemas onde a redundância não está em atributos individuais, mas na combinação entre várias entidades.

Ela é rara na prática, mas aparece em sistemas acadêmicos, logísticos e industriais mais complexos.


## 6FN (Sexta Forma Normal)

A 6FN é ainda mais extrema e raramente usada em bancos tradicionais. Ela exige que as tabelas sejam decompostas ao ponto em que contenham apenas fatos elementares, geralmente relacionados a intervalos temporais.

Ela é muito utilizada em bancos temporais e data warehouses.

### Cenário: Agendamento com histórico

Considere que o sistema precisa armazenar mudanças ao longo do tempo:

* Um professor muda de disciplina
* Uma disciplina muda de sala
* Horários são alterados ao longo do semestre

Tabela inicial:

Agendamento(Sala, Horario, Professor, Disciplina, DataInicio, DataFim)

Na 6FN, isso seria decomposto em múltiplas tabelas extremamente granulares:

ProfessorDisciplina(Professor, Disciplina, DataInicio, DataFim)
DisciplinaSala(Disciplina, Sala, DataInicio, DataFim)
ProfessorHorario(Professor, Horario, DataInicio, DataFim)

Cada tabela representa um único fato ao longo do tempo.

### Intuição

A 6FN separa completamente os fatos para permitir:

* versionamento
* auditoria
* análise temporal precisa

O custo é um número muito alto de tabelas e necessidade intensa de junções.

# Exercício PBL

Contexto:

Uma universidade está enfrentando problemas com seu sistema de agendamento:

* Professores alocados em salas erradas
* Disciplinas duplicadas
* Conflitos de horário
* Dificuldade em manter histórico de mudanças

Os dados estão armazenados em uma única tabela:

SistemaAtual(Professor, Disciplina, Sala, Horario, Periodo)

Desafio:

Os alunos devem propor um novo modelo de dados que:

* Elimine redundâncias
* Suporte relacionamentos N:N
* Evite inconsistências
* Permita expansão futura (ex: histórico)

Etapas esperadas:

1. Levantamento de dependências
2. Identificação de problemas de normalização
3. Aplicação progressiva até BCNF
4. Avaliação de necessidade de 5FN
5. Proposta de estrutura próxima à 6FN para histórico

Entregáveis:

* Modelo conceitual
* Modelo lógico normalizado
* Justificativa das decomposições
* Discussão de trade-offs (desempenho vs consistência)


## Exemplo de Dados

| Código | Docente       | Disciplina               | Sala      | Data     | Semestre |
| ------ | ------------- | ------------------------ | --------- | -------- | -------- |
| 1      |   João Silva  |  Banco de Dados          |  Sala 101 |  Seg 19h |  2024-1  |
| 2      |   João Silva  |  Banco de Dados          |  Sala 102 |  Seg 19h |  2024-1  |
| 3      |   João Silva  |  BD                      |  Sala 101 |  Seg 19h |  2024-1  |
| 4      |   Maria Souza |  Algoritmos              |  Sala 201 |  Ter 19h |  2024-1  |
| 5      |   Maria Souza |  Algoritmos              |  Sala 201 |  Ter 21h |  2024-1  |
| 6      |   Maria Souza |  Algoritmo               |  Sala 202 |  Ter 19h |  2024-1  |
| 7      |   Carlos Lima |  Engenharia Software     |  Sala 301 |  Qua 19h |  2024-1  |
| 8      |   Carlos Lima |  Eng. Software           |  Sala 301 |  Qua 19h |  2024-1  |
| 9      |   Carlos Lima |  Engenharia Software     |  Sala 302 |  Qua 19h |  2024-1  |
| 10     |  Ana Paula    |  IA                      |  Sala 401 |  Qui 19h |  2024-1  |
| 11     |  Ana Paula    |  Inteligência Artificial |  Sala 401 |  Qui 19h |  2024-1  |
| 12     |  Ana Paula    |  IA                      |  Sala 402 |  Qui 19h |  2024-1  |
| 13     |  João Silva   |  Big Data                |  Sala 101 |  Sex 19h |  2024-1  |
| 14     |  João Silva   |  Big Data                |  Sala 101 |  Sex 21h |  2024-1  |
| 15     |  João Silva   |  BigData                 |  Sala 102 |  Sex 19h |  2024-1  |
| 16     |  Maria Souza  |  Estrutura Dados         |  Sala 201 |  Seg 19h |  2024-2  |
| 17     |  Maria Souza  |  Estrutura de Dados      |  Sala 201 |  Seg 19h |  2024-2  |
| 18     |  Maria Souza  |  Estrutura Dados         |  Sala 202 |  Seg 19h |  2024-2  |
| 19     |  Carlos Lima  |  Redes                   |  Sala 301 |  Ter 19h |  2024-2  |
| 20     |  Carlos Lima  |  Redes de Computadores   |  Sala 301 |  Ter 19h |  2024-2  |
| 21     |  Carlos Lima  |  Redes                   |  Sala 302 |  Ter 19h |  2024-2  |
| 22     |  Ana Paula    |  Machine Learning        |  Sala 401 |  Qua 19h |  2024-2  |
| 23     |  Ana Paula    |  ML                      |  Sala 401 |  Qua 19h |  2024-2  |
| 24     |  Ana Paula    |  Machine Learning        |  Sala 402 |  Qua 19h |  2024-2  |
| 25     |  João Silva   |  Banco de Dados          |  Sala 101 |  Qui 19h |  2024-2  |
| 26     |  João Silva   |  Banco de Dados          |  Sala 101 |  Qui 21h |  2024-2  |
| 27     |  João Silva   |  BD                      |  Sala 102 |  Qui 19h |  2024-2  |
| 28     |  Maria Souza  |  Algoritmos              |  Sala 201 |  Sex 19h |  2024-2  |
| 29     |  Maria Souza  |  Algoritmos              |  Sala 202 |  Sex 19h |  2024-2  |
| 30     |  Maria Souza  |  Algoritmo               |  Sala 201 |  Sex 21h |  2024-2  |
| 31     |  Carlos Lima  |  Engenharia Software     |  Sala 301 |  Seg 19h |  2025-1  |
| 32     |  Carlos Lima  |  Eng Software            |  Sala 301 |  Seg 19h |  2025-1  |
| 33     |  Carlos Lima  |  Engenharia Software     |  Sala 302 |  Seg 19h |  2025-1  |
| 34     |  Ana Paula    |  IA                      |  Sala 401 |  Ter 19h |  2025-1  |
| 35     |  Ana Paula    |  Inteligência Artificial |  Sala 401 |  Ter 19h |  2025-1  |
| 36     |  Ana Paula    |  IA                      |  Sala 402 |  Ter 19h |  2025-1  |
| 37     |  João Silva   |  Big Data                |  Sala 101 |  Qua 19h |  2025-1  |
| 38     |  João Silva   |  Big Data                |  Sala 101 |  Qua 21h |  2025-1  |
| 39     |  João Silva   |  BigData                 |  Sala 102 |  Qua 19h |  2025-1  |
| 40     |  Maria Souza  |  Estrutura Dados         |  Sala 201 |  Qui 19h |  2025-1  |
| 41     |  Maria Souza  |  Estrutura de Dados      |  Sala 201 |  Qui 19h |  2025-1  |
| 42     |  Maria Souza  |  Estrutura Dados         |  Sala 202 |  Qui 19h |  2025-1  |
| 43     |  Carlos Lima  |  Redes                   |  Sala 301 |  Sex 19h |  2025-1  |
| 44     |  Carlos Lima  |  Redes de Computadores   |  Sala 301 |  Sex 19h |  2025-1  |
| 45     |  Carlos Lima  |  Redes                   |  Sala 302 |  Sex 19h |  2025-1  |
| 46     |  Ana Paula    |  Machine Learning        |  Sala 401 |  Seg 19h |  2025-1  |
| 47     |  Ana Paula    |  ML                      |  Sala 401 |  Seg 19h |  2025-1  |
| 48     |  Ana Paula    |  Machine Learning        |  Sala 402 |  Seg 19h |  2025-1  |
| 49     |  João Silva   |  Banco de Dados          |  Sala 101 |  Ter 19h |  2025-1  |
| 50     |  João Silva   |  BD                      |  Sala 102 |  Ter 19h |  2025-1  |