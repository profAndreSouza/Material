# Lista de exercícios 02 — Modelagem conceitual e lógica

## Orientações

Para cada situação-problema:

1. Identifique entidades, atributos, relacionamentos, cardinalidades e restrições relevantes.
2. Elabore o **Modelo Entidade-Relacionamento (MER)**, indicando chaves e os atributos compostos. Quando houver especialização, represente se ela é **total ou parcial** e **disjunta ou sobreposta (compartilhada)**.
3. A partir do MER, elabore o **diagrama lógico relacional**. Apresente as tabelas com atributos, chaves primárias (PKs), chaves estrangeiras (FKs) e restrições necessárias para preservar as regras do enunciado.
4. Registre as premissas adotadas quando o texto não definir uma regra. Use o brModelo ou outra ferramenta de modelagem e entregue os dois diagramas para cada exercício.

---

## 1. Centro de formação profissional

Um centro de formação cadastra pessoas que atuam como instrutoras ou como equipe administrativa. Toda pessoa cadastrada deve pertencer a pelo menos um desses grupos. Uma mesma pessoa não pode exercer as duas funções. Para cada pessoa, são registrados nome, documento e endereço, composto por logradouro, número, complemento, bairro, cidade, estado e CEP. Instrutores possuem uma área de especialidade e podem ministrar vários cursos; cada curso tem código, nome e carga horária e pode ser ministrado por mais de um instrutor. Para cada oferta de curso, o centro registra turma, período, data de início e limite de vagas. Cada turma corresponde a um curso e é conduzida por um instrutor.

Modele a especialização de **Pessoa** em **Instrutor** e **Administrativo**. Considere também o endereço composto e os relacionamentos entre instrutores, cursos e turmas.

---

## 2. Empresa de tecnologia

Uma empresa mantém o cadastro de seus colaboradores com nome, CPF, data de admissão e endereço, composto por logradouro, número, complemento, bairro, cidade, estado e CEP. Alguns colaboradores ocupam cargos de gestão, enquanto outros atuam em funções técnicas ou operacionais. Nem todo colaborador é gestor, e um colaborador não pode pertencer simultaneamente às categorias de gestor e não gestor. Gestores possuem um valor de gratificação; colaboradores não gestores possuem uma função. Um gestor pode supervisionar vários colaboradores, mas cada colaborador pode ter no máximo um supervisor direto. A empresa também registra projetos com código, nome, data de início e situação. Colaboradores podem participar de vários projetos, e cada projeto pode contar com vários colaboradores; em cada participação, registram-se as horas previstas.

Modele a especialização de **Colaborador** em **Gestor** e **Não Gestor** como parcial e disjunta. Represente também o autorrelacionamento de supervisão, informando os papéis e as cardinalidades, além do atributo composto endereço e da participação em projetos.

---

## 3. Universidade comunitária

Uma universidade cadastra pessoas com nome, documento e endereço, composto por logradouro, número, complemento, bairro, cidade, estado e CEP. Toda pessoa cadastrada é estudante, funcionária ou ambas as coisas. Estudantes possuem número de matrícula e curso; funcionários possuem registro funcional, data de admissão e setor de lotação. Um funcionário pode orientar vários estudantes, mas cada estudante tem no máximo um orientador, que deve ser funcionário. A universidade oferece disciplinas identificadas por código, nome e carga horária. Estudantes podem cursar várias disciplinas e cada disciplina pode ter vários estudantes; para cada matrícula em disciplina são guardados semestre, ano e nota final. Funcionários podem ministrar disciplinas, e uma disciplina pode ser ministrada por mais de um funcionário.

Modele **Pessoa** com especialização total e sobreposta (compartilhada) em **Estudante** e **Funcionário**. Considere que uma pessoa pode estar nas duas subentidades. Represente o autorrelacionamento de orientação com os papéis de orientador e orientado, o endereço composto e os relacionamentos acadêmicos.

---

## 4. Plataforma de conteúdo digital

Uma plataforma cadastra conteúdos digitais com identificador, título, data de publicação e classificação indicativa. Todo conteúdo é pelo menos um destes tipos: filme, série ou documentário. Um conteúdo pode pertencer a mais de um tipo. Filmes possuem duração; séries possuem quantidade de temporadas; documentários possuem tema e duração. Séries são organizadas em episódios, identificados por número dentro da série, com título e duração. Um episódio pertence a uma única série. Pessoas criadoras são cadastradas com nome e país de origem e podem participar de vários conteúdos; em cada participação, registra-se a função exercida, como direção, roteiro ou apresentação. A plataforma também registra usuários com identificador, nome e e-mail. Usuários podem avaliar conteúdos, no máximo uma vez cada conteúdo, registrando nota e data da avaliação.

Modele **Conteúdo** com especialização total e sobreposta em **Filme**, **Série** e **Documentário**. Um mesmo conteúdo pode ser, por exemplo, filme e documentário. Identifique os atributos próprios de cada subtipo, modele episódios e a participação de pessoas criadoras, e represente a avaliação dos usuários.

---

## 5. Clínica multiprofissional

Uma clínica cadastra pessoas com nome, documento, telefone e endereço, composto por logradouro, número, complemento, bairro, cidade, estado e CEP. Uma pessoa pode ser paciente, profissional de saúde ou ambos. Pacientes possuem data de nascimento e contato de emergência. Profissionais possuem registro profissional, especialidade e data de contratação. Todo profissional deve estar vinculado a pelo menos uma especialidade; uma especialidade pode estar vinculada a vários profissionais. Cada consulta é identificada por código e registra data, horário, situação e observações. Uma consulta é realizada por um único paciente e conduzida por um único profissional; pacientes e profissionais podem participar de várias consultas. A clínica registra salas com número, andar e capacidade, e cada consulta ocorre em uma sala.

Modele **Pessoa** com especialização total e sobreposta em **Paciente** e **Profissional**. Represente o endereço composto, o vínculo entre profissionais e especialidades e as cardinalidades dos relacionamentos com consulta e sala. Considere no modelo lógico as regras de identificação dos subtipos e as chaves necessárias.
