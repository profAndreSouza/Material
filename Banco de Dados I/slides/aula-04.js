window.SLIDE_DECKS["banco-de-dados/aula-04"] = {
  title: "Do DER ao modelo lógico e físico no Oracle",
  slides: [
`<section class="slide slide-cover active">
  <div class="section-tag">Banco de Dados I • Aula 04</div>
  <h1 class="cover-title">Do DER ao banco de dados</h1>
  <p class="slide-subtitle" style="max-width:820px">Conversão para o modelo lógico, implementação física no Oracle e operações básicas de dados.</p>
  <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:16px 0 24px">
    <span class="badge badge-red">Presencial</span><span class="badge badge-blue">Modelo lógico e físico</span><span class="badge badge-green">Segunda metade no laboratório</span>
  </div>
  <div class="callout" style="max-width:760px;text-align:left"><strong>Continuidade da Aula 03:</strong> vamos transformar a associação ALUNO–DISCIPLINA e a participação em projetos em tabelas, chaves e comandos SQL executáveis.</div>
</section>`,
    {
      category: "Organização do encontro",
      title: "Da regra de negócio ao exercício no Oracle",
      subtitle: "A aula começa com a conversão do DER e termina com a criação e manipulação de tabelas no laboratório.",
      content: `
        <div class="stepper"><div class="step-item"><div class="step-circle">1</div><div class="step-title">DER → lógico</div><div class="step-desc">Entidades, relações e chaves</div></div><div class="step-item"><div class="step-circle">2</div><div class="step-title">Lógico → físico</div><div class="step-desc">Tipos e restrições Oracle</div></div><div class="step-item"><div class="step-circle">3</div><div class="step-title">Demonstração</div><div class="step-desc">DDL e CRUD</div></div><div class="step-item"><div class="step-circle">4</div><div class="step-title">Laboratório</div><div class="step-desc">Exercício e entrega</div></div></div>
        <div class="grid-2"><div class="card card-red"><div class="card-title">Primeiros 100 minutos</div><p class="card-desc">Retomada da Aula 03, regras de mapeamento, decisões de chave, tipos e restrições Oracle, CREATE TABLE, ALTER TABLE e demonstração de CRUD.</p></div><div class="card card-blue"><div class="card-title">Segunda metade: laboratório</div><p class="card-desc">Converter o caso de equipe e projetos, implementar o esquema no Oracle XE e exercitar INSERT, SELECT, UPDATE e DELETE.</p></div></div>`
    },
    {
      category: "Retomada • Aula 03",
      title: "A associação já tem dados e identidade",
      subtitle: "Na aula anterior, vimos que nota, horas e papel descrevem vínculos específicos entre ocorrências.",
      content: `
        <div class="grid-2"><div class="card card-blue"><div class="card-title">Matrícula</div><div class="code-box">ALUNO — cursa — DISCIPLINA<br>semestre, data, nota_final, frequencia</div><p class="card-desc" style="margin-top:10px">A nota pertence à matrícula daquele aluno naquela disciplina e período.</p></div><div class="card card-green"><div class="card-title">Participação em projeto</div><div class="code-box">COLABORADOR — participa — PROJETO<br>papel, horas_semanais, data_inicio</div><p class="card-desc" style="margin-top:10px">Os atributos mudam de acordo com a participação específica.</p></div></div>
        <div class="callout callout-blue"><strong>Pergunta de partida:</strong> em qual tabela cabem os dados de cada vínculo sem perder o relacionamento entre as entidades?</div>`
    },
    {
      category: "Três etapas do projeto",
      title: "Cada modelo responde a uma pergunta diferente",
      subtitle: "A sequência preserva as regras do domínio e acrescenta decisões em cada etapa.",
      content: `
        <div class="table-container"><table class="modern-table"><thead><tr><th>Etapa</th><th>O que descreve</th><th>Exemplo de artefato</th></tr></thead><tbody><tr><td><strong>Conceitual</strong></td><td>Entidades, associações e regras do negócio</td><td>DER: ALUNO cursa DISCIPLINA</td></tr><tr><td><strong>Lógica relacional</strong></td><td>Tabelas, colunas, PKs e FKs</td><td>MATRICULA(id_aluno, id_disciplina, semestre, ...)</td></tr><tr><td><strong>Física</strong></td><td>Tipos, constraints e detalhes do Oracle</td><td>CREATE TABLE com NUMBER, DATE e VARCHAR2</td></tr></tbody></table></div>
        <div class="callout"><strong>Regra:</strong> o modelo físico deve implementar o esquema lógico sem enfraquecer as regras expressas no DER.</div>`
    },
    {
      category: "Método de conversão",
      title: "Antes de escrever SQL, faça cinco verificações",
      subtitle: "A conversão fica mais clara quando as decisões são tomadas na ordem certa.",
      content: `
        <div class="grid-3"><div class="card card-red"><div class="card-title">1. Entidades</div><p class="card-desc">Cada entidade forte vira uma tabela. Liste atributos simples e marque o identificador.</p></div><div class="card card-blue"><div class="card-title">2. Relações</div><p class="card-desc">Leia as cardinalidades mínimas e máximas para decidir onde ficam as FKs.</p></div><div class="card card-green"><div class="card-title">3. Associativas</div><p class="card-desc">Crie tabela para N:N ou para associação com atributos e identidade própria.</p></div><div class="card"><div class="card-title">4. Atributos</div><p class="card-desc">Separe multivalorados; decomponha compostos; avalie os derivados.</p></div><div class="card card-amber"><div class="card-title">5. Regras</div><p class="card-desc">Registre PK, FK, NOT NULL, UNIQUE e outras restrições necessárias.</p></div><div class="card"><div class="card-title">Depois</div><p class="card-desc">Escolha tipos do Oracle e implemente o esquema físico.</p></div></div>`
    },
    {
      category: "Regra 1 • Entidades",
      title: "Uma entidade forte vira uma tabela",
      subtitle: "O identificador do DER passa a ser a chave primária da tabela.",
      content: `
        <div class="grid-2"><div class="card"><div class="card-title">No modelo conceitual</div><div class="code-box">COLABORADOR<br>id_colaborador • nome</div><p class="card-desc" style="margin-top:10px">O identificador distingue cada colaborador.</p></div><div class="card card-green"><div class="card-title">No esquema lógico</div><div class="code-box">COLABORADOR(<u>id_colaborador</u>, nome)</div><p class="card-desc" style="margin-top:10px">A coluna sublinhada é a PK. Cada linha representa um colaborador.</p></div></div>
        <div class="callout callout-blue">A chave escolhida precisa ser única, estável e obrigatória para cada ocorrência.</div>`
    },
    {
      category: "Regra 2 • Relacionamento 1:N",
      title: "A chave do lado 1 vai para o lado N",
      subtitle: "A tabela do lado N guarda uma FK para a tabela do lado 1.",
      content: `
        <div class="diagram-container"><svg class="diagram-svg" viewBox="0 0 900 245" role="img" aria-label="Um projeto possui muitas tarefas e cada tarefa pertence a um projeto"><rect x="80" y="65" width="260" height="100" rx="10" fill="#fff1f2" stroke="#b20000" stroke-width="3"/><text x="210" y="107" text-anchor="middle" font-size="22" font-weight="700" fill="#1e293b">PROJETO</text><text x="210" y="137" text-anchor="middle" font-size="16" fill="#475569">id_projeto (PK)</text><line x1="340" y1="115" x2="560" y2="115" stroke="#475569" stroke-width="3"/><text x="425" y="98" text-anchor="middle" font-size="16" font-weight="700" fill="#b20000">1</text><text x="490" y="98" text-anchor="middle" font-size="16" font-weight="700" fill="#0284c7">N</text><rect x="560" y="65" width="270" height="100" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="3"/><text x="695" y="107" text-anchor="middle" font-size="22" font-weight="700" fill="#1e293b">TAREFA</text><text x="695" y="137" text-anchor="middle" font-size="16" fill="#475569">id_projeto (FK)</text><text x="450" y="215" text-anchor="middle" font-size="16" fill="#475569">A FK fica em TAREFA, no lado N.</text></svg></div>
        <div class="code-box">PROJETO(id_projeto PK, nome)<br>TAREFA(id_tarefa PK, descricao, id_projeto FK)</div>`
    },
    {
      category: "1:N • Obrigatoriedade",
      title: "NOT NULL representa uma referência obrigatória",
      subtitle: "Use a regra do domínio para decidir se a FK pode ficar vazia.",
      content: `
        <div class="grid-2"><div class="card card-green"><div class="card-title">Todo pedido pertence a um cliente</div><div class="code-box">PEDIDO(id_pedido PK,<br>  id_cliente FK NOT NULL)</div><p class="card-desc" style="margin-top:10px">Cada pedido precisa apontar para um cliente existente.</p></div><div class="card card-amber"><div class="card-title">Pedido pode não ter cliente</div><div class="code-box">PEDIDO(id_pedido PK,<br>  id_cliente FK NULL)</div><p class="card-desc" style="margin-top:10px">A referência é opcional, se o negócio permitir esse estado.</p></div></div>
        <div class="callout callout-blue"><strong>Limite:</strong> NOT NULL na FK da tabela N obriga cada linha N a apontar para o lado 1. Isso não garante que cada linha do lado 1 tenha ao menos um filho.</div>`
    },
    {
      category: "Regra 3 • Relacionamento 1:1",
      title: "A FK e UNIQUE preservam a cardinalidade 1:1",
      subtitle: "Escolha a tabela que recebe a FK de acordo com obrigatoriedade e ciclo de vida.",
      content: `
        <div class="grid-2"><div class="card"><div class="card-title">Exemplo: funcionário e crachá</div><div class="code-box">FUNCIONARIO(id_funcionario PK, nome)<br>CRACHA(id_cracha PK,<br>  id_funcionario FK UNIQUE NOT NULL)</div></div><div class="card card-blue"><div class="card-title">O que cada regra garante</div><ul style="color:var(--cps-gray-medium);line-height:1.7;padding-left:20px"><li>FK: funcionário referenciado existe.</li><li>UNIQUE: o mesmo funcionário não aparece em vários crachás.</li><li>NOT NULL: todo crachá deve estar atribuído.</li></ul></div></div>
        <div class="callout callout-amber">A participação mínima do funcionário no relacionamento pode exigir uma regra adicional: a FK em CRACHA não garante que todo funcionário tenha crachá.</div>`
    },
    {
      category: "Regra 4 • Relacionamento N:N",
      title: "Uma associação N:N precisa de uma tabela própria",
      subtitle: "A tabela associativa liga as entidades e recebe os dados específicos do vínculo.",
      content: `
        <div class="grid-3"><div class="card card-red"><div class="card-title">PEDIDO</div><p class="card-desc">Uma compra identificada por número e data.</p></div><div class="card card-blue"><div class="card-title">ITEM_PEDIDO</div><p class="card-desc">Guarda quais produtos aparecem em cada pedido, quantidade e preço praticado.</p></div><div class="card card-green"><div class="card-title">PRODUTO</div><p class="card-desc">Um mesmo produto pode aparecer em muitos pedidos.</p></div></div>
        <div class="code-box" style="margin-top:14px">ITEM_PEDIDO(id_pedido FK, id_produto FK, quantidade, preco_praticado)</div>
        <div class="callout callout-blue">Sem a tabela associativa, não há um lugar correto para guardar uma quantidade e um preço diferentes em cada ocorrência do produto no pedido.</div>`
    },
    {
      category: "PK na tabela associativa",
      title: "Chave composta ou identificador próprio?",
      subtitle: "A PK deve representar a regra de unicidade e o histórico permitido pelo domínio.",
      content: `
        <div class="grid-2"><div class="card card-blue"><div class="card-title">Chave composta</div><div class="code-box">MATRICULA(<u>id_aluno</u> FK,<br>  <u>id_disciplina</u> FK,<br>  <u>semestre</u>, nota_final)</div><p class="card-desc" style="margin-top:10px">Uma matrícula por aluno, disciplina e semestre.</p></div><div class="card card-green"><div class="card-title">Identificador próprio</div><div class="code-box">PARTICIPACAO(<u>id_participacao</u> PK,<br>  id_colaborador FK,<br>  id_projeto FK, data_inicio)</div><p class="card-desc" style="margin-top:10px">Permite múltiplos vínculos e retornos ao mesmo projeto.</p></div></div>
        <div class="callout"><strong>Não escolha a PK só por conveniência:</strong> escreva a regra de unicidade que ela precisa garantir.</div>`
    },
    {
      category: "Atributos multivalorados",
      title: "Uma lista de valores vira outra relação",
      subtitle: "O modelo relacional guarda um valor por célula; cada telefone pode ocupar uma linha própria.",
      content: `
        <div class="grid-2"><div class="card card-amber"><div class="card-title">No DER</div><div class="code-box">CLIENTE — telefones<br>telefone é multivalorado</div><p class="card-desc" style="margin-top:10px">Um cliente pode informar celular, telefone comercial e recado.</p></div><div class="card card-green"><div class="card-title">No modelo lógico</div><div class="code-box">CLIENTE(id_cliente PK, nome)<br>TELEFONE_CLIENTE(<br>  id_cliente PK/FK,<br>  telefone PK)</div><p class="card-desc" style="margin-top:10px">Cada linha registra um telefone de um cliente.</p></div></div>
        <div class="callout callout-blue">A PK composta permite números diferentes para o mesmo cliente e impede repetir o mesmo número na mesma pessoa.</div>`
    },
    {
      category: "Atributos compostos e derivados",
      title: "Separe componentes e recalcule o que deriva de outros dados",
      subtitle: "O mapeamento transforma a estrutura do DER de acordo com a forma de uso dos atributos.",
      content: `
        <div class="grid-2"><div class="card"><div class="card-title">Composto: endereço</div><div class="code-box">ENDERECO → rua, numero,<br>complemento, cidade, CEP</div><p class="card-desc" style="margin-top:10px">Crie uma coluna para cada componente que precise ser consultado ou validado separadamente.</p></div><div class="card card-blue"><div class="card-title">Derivado: total do pedido</div><div class="code-box">total = soma(quantidade ×<br>preco_praticado)</div><p class="card-desc" style="margin-top:10px">Em geral, calcule em consulta para evitar divergências com os itens.</p></div></div>
        <div class="callout callout-amber">Guardar um valor calculado pode ser uma decisão de desempenho ou histórico, mas exige regra para mantê-lo consistente.</div>`
    },
    {
      category: "Exemplo lógico • Matrícula",
      title: "A matrícula vira uma relação com três partes da PK",
      subtitle: "O semestre entra na chave porque o vínculo pode se repetir em períodos diferentes.",
      content: `
        <div class="code-box" style="font-size:.92rem;line-height:1.8">ALUNO(id_aluno PK, nome)<br>DISCIPLINA(id_disciplina PK, nome)<br>MATRICULA(id_aluno PK/FK, id_disciplina PK/FK,<br>          semestre PK, data_matricula, nota_final, frequencia)</div>
        <div class="grid-3" style="margin-top:14px"><div class="card card-red"><div class="card-title">PK de ALUNO</div><p class="card-desc">Identifica o aluno.</p></div><div class="card card-blue"><div class="card-title">FKs de MATRÍCULA</div><p class="card-desc">Apontam para ALUNO e DISCIPLINA.</p></div><div class="card card-green"><div class="card-title">PK composta</div><p class="card-desc">Aluno + disciplina + semestre identifica o vínculo.</p></div></div>`
    },
    {
      category: "Exemplo lógico • Equipe e projetos",
      title: "A participação preserva atributos e histórico",
      subtitle: "Este caso será retomado como atividade prática no laboratório.",
      content: `
        <div class="code-box" style="font-size:.92rem;line-height:1.8">COLABORADOR(id_colaborador PK, nome)<br>PROJETO(id_projeto PK, nome)<br>PARTICIPACAO(id_participacao PK,<br>             id_colaborador FK, id_projeto FK,<br>             papel, horas_semanais, data_inicio)</div>
        <div class="callout callout-blue">A PK própria permite que o mesmo colaborador retorne ao mesmo projeto. As FKs identificam as pontas do vínculo; papel, horas e início descrevem essa participação.</div>`
    },
    {
      category: "Validação do modelo lógico",
      title: "Confira o esquema antes de abrir o Oracle",
      subtitle: "Uma tabela associativa mal desenhada leva o problema para o modelo físico.",
      content: `
        <div class="grid-2"><div class="card card-green"><div class="card-title">Revisão de chaves</div><ul style="color:var(--cps-gray-medium);line-height:1.65;padding-left:20px"><li>Toda entidade tem PK?</li><li>As FKs apontam para as PKs certas?</li><li>A PK representa a regra de unicidade?</li></ul></div><div class="card card-blue"><div class="card-title">Revisão de atributos</div><ul style="color:var(--cps-gray-medium);line-height:1.65;padding-left:20px"><li>Dados do vínculo estão na associativa?</li><li>Listas viraram tabelas próprias?</li><li>Tipos e nulabilidade são coerentes?</li></ul></div></div>
        <div class="callout callout-amber">Se o mesmo fato aparece em lugares diferentes, reveja o modelo antes de criar tabelas.</div>`
    },
    {
      category: "Transição para o físico",
      title: "O Oracle acrescenta tipos e restrições concretos",
      subtitle: "O modelo lógico não depende do fornecedor; o modelo físico usa a sintaxe específica do SGBD.",
      content: `
        <div class="grid-3"><div class="card"><div class="card-title">Modelo lógico</div><p class="card-desc">nome, data_inicio, chave estrangeira</p></div><div class="card card-blue"><div class="card-title">Modelo físico</div><p class="card-desc">VARCHAR2(100), DATE, NUMBER(10), FOREIGN KEY</p></div><div class="card card-green"><div class="card-title">Implementação</div><p class="card-desc">Comandos DDL executados no schema BD001 do Oracle XE.</p></div></div>
        <div class="callout callout-blue">O tipo precisa comportar os valores previstos e as constraints precisam traduzir as regras do esquema lógico.</div>`
    },
    {
      category: "Banco, usuário e esquema",
      title: "Nesta aula, o banco XE já está criado",
      subtitle: "Conectamos ao banco existente e criamos os objetos da turma no esquema BD001.",
      content: `
        <div class="diagram-container"><svg class="diagram-svg" viewBox="0 0 900 270" role="img" aria-label="Banco Oracle XE contém o esquema BD001, onde o aluno cria tabelas"><rect x="90" y="35" width="720" height="195" rx="14" fill="#f8fafc" stroke="#64748b" stroke-width="3"/><text x="450" y="75" text-anchor="middle" font-size="23" font-weight="700" fill="#1e293b">BANCO ORACLE XE</text><rect x="230" y="100" width="440" height="95" rx="10" fill="#fff1f2" stroke="#b20000" stroke-width="3"/><text x="450" y="140" text-anchor="middle" font-size="21" font-weight="700" fill="#1e293b">ESQUEMA DO USUÁRIO BD001</text><text x="450" y="172" text-anchor="middle" font-size="16" fill="#475569">COLABORADORES • PROJETOS • PARTICIPACAO</text></svg></div>
        <div class="callout callout-blue">Os alunos criam tabelas e dados no próprio esquema. O banco XE é inicializado pelo ambiente Docker; não criamos um segundo banco durante o exercício.</div>`
    },
    {
      category: "CREATE DATABASE",
      title: "Criar um banco Oracle é uma tarefa administrativa",
      subtitle: "Não confunda a criação do banco com a criação de tabelas no esquema do aluno.",
      content: `
        <div class="grid-2"><div class="card card-amber"><div class="card-title">Em alguns SGBDs</div><div class="code-box">CREATE DATABASE nome;</div><p class="card-desc" style="margin-top:10px">Um comando semelhante pode criar uma base lógica, com sintaxe e privilégios próprios de cada produto.</p></div><div class="card card-red"><div class="card-title">No Oracle XE da aula</div><p class="card-desc">A criação e configuração do banco exigem privilégios administrativos de SYSDBA, instância e arquivos. O XE já está pronto e recebe conexões pelo SID XE.</p></div></div>
        <div class="callout callout-blue"><strong>Atividade dos alunos:</strong> conectar como BD001 e executar CREATE TABLE no próprio esquema. Não executar CREATE DATABASE no SQL*Plus da turma.</div>`
    },
    {
      category: "Tipos Oracle",
      title: "Escolha o tipo conforme o dado que será guardado",
      subtitle: "Tipos do Oracle usados no exercício de hoje.",
      content: `
        <div class="table-container"><table class="modern-table"><thead><tr><th>Dado</th><th>Tipo Oracle</th><th>Exemplo</th><th>Observação</th></tr></thead><tbody><tr><td>Identificador</td><td><code>NUMBER(10)</code></td><td>id_projeto</td><td>Número inteiro com precisão definida</td></tr><tr><td>Texto</td><td><code>VARCHAR2(100)</code></td><td>nome</td><td>Texto variável até o limite declarado</td></tr><tr><td>Data</td><td><code>DATE</code></td><td>data_inicio</td><td>Guarda data e componente de hora</td></tr><tr><td>Decimal</td><td><code>NUMBER(5,2)</code></td><td>horas_semanais</td><td>Precisão e escala explícitas</td></tr></tbody></table></div>
        <div class="callout callout-amber">Oracle 11g não usa o tipo <code>BOOLEAN</code> em colunas SQL. Para este exercício, selecione tipos compatíveis com a versão XE 11g.</div>`
    },
    {
      category: "Constraints",
      title: "As regras do modelo viram restrições da tabela",
      subtitle: "Uma constraint faz o banco rejeitar linhas que violem uma regra declarada.",
      content: `
        <div class="grid-3"><div class="card card-red"><div class="card-title">PRIMARY KEY</div><p class="card-desc">Identifica uma linha; não aceita NULL nem duplicidade.</p></div><div class="card card-blue"><div class="card-title">FOREIGN KEY</div><p class="card-desc">Exige que o valor referenciado exista na tabela pai.</p></div><div class="card card-green"><div class="card-title">NOT NULL</div><p class="card-desc">Exige um valor para a coluna.</p></div><div class="card"><div class="card-title">UNIQUE</div><p class="card-desc">Impede repetir valores onde a regra exigir unicidade.</p></div><div class="card card-amber"><div class="card-title">CHECK</div><p class="card-desc">Limita os valores por uma condição, como horas &gt; 0.</p></div><div class="card"><div class="card-title">Nomeie as regras</div><p class="card-desc">Nomes claros ajudam a interpretar mensagens de erro.</p></div></div>`
    },
    {
      category: "DDL • CREATE TABLE",
      title: "A tabela declara colunas, tipos e constraints",
      subtitle: "Crie primeiro as tabelas referenciadas; depois, as tabelas que guardam suas FKs.",
      content: `
        <div class="code-box" style="font-size:.84rem;line-height:1.6;white-space:pre-wrap">CREATE TABLE colaboradores (<br>  id_colaborador NUMBER(10),<br>  nome VARCHAR2(100) NOT NULL,<br>  CONSTRAINT pk_colaboradores<br>    PRIMARY KEY (id_colaborador)<br>);</div>
        <div class="grid-2" style="margin-top:12px"><div class="card card-blue"><div class="card-title">CREATE TABLE</div><p class="card-desc">Cria uma tabela vazia no esquema conectado.</p></div><div class="card card-green"><div class="card-title">Atenção à ordem</div><p class="card-desc">Uma FK só pode apontar para uma tabela e chave existentes. Crie COLABORADORES e PROJETOS antes de PARTICIPACAO.</p></div></div>`
    },
    {
      category: "DDL • Tabelas-pai",
      title: "Crie as tabelas de entidades primeiro",
      subtitle: "Cada uma recebe sua PK antes de qualquer tabela associativa.",
      content: `
        <div class="grid-2"><div class="card card-red"><div class="card-title">COLABORADORES</div><div class="code-box" style="white-space:pre-wrap">CREATE TABLE colaboradores (<br>  id_colaborador NUMBER(10),<br>  nome VARCHAR2(100) NOT NULL,<br>  CONSTRAINT pk_colaboradores<br>    PRIMARY KEY (id_colaborador)<br>);</div></div><div class="card card-blue"><div class="card-title">PROJETOS</div><div class="code-box" style="white-space:pre-wrap">CREATE TABLE projetos (<br>  id_projeto NUMBER(10),<br>  nome VARCHAR2(100) NOT NULL,<br>  CONSTRAINT pk_projetos<br>    PRIMARY KEY (id_projeto)<br>);</div></div></div>
        <div class="callout callout-blue">Neste exemplo, o aluno informa os identificadores no INSERT. O exercício não depende de geração automática de IDs.</div>`
    },
    {
      category: "DDL • Tabela associativa",
      title: "PARTICIPACAO implementa o vínculo N:N",
      subtitle: "As FKs ligam o vínculo às entidades; as demais colunas registram os dados próprios da participação.",
      content: `
        <div class="code-box" style="font-size:.8rem;line-height:1.55;white-space:pre-wrap">CREATE TABLE participacao (<br>  id_participacao NUMBER(10),<br>  id_colaborador NUMBER(10) NOT NULL,<br>  id_projeto NUMBER(10) NOT NULL,<br>  papel VARCHAR2(40) NOT NULL,<br>  horas_semanais NUMBER(5,2) NOT NULL,<br>  data_inicio DATE NOT NULL,<br>  CONSTRAINT pk_participacao PRIMARY KEY (id_participacao),<br>  CONSTRAINT fk_part_colab FOREIGN KEY (id_colaborador)<br>    REFERENCES colaboradores (id_colaborador),<br>  CONSTRAINT fk_part_projeto FOREIGN KEY (id_projeto)<br>    REFERENCES projetos (id_projeto),<br>  CONSTRAINT ck_part_horas CHECK (horas_semanais &gt; 0)<br>);</div>
        <div class="callout callout-green">Primeiro existem COLABORADORES e PROJETOS; depois, PARTICIPACAO pode referenciá-los.</div>`
    },
    {
      category: "Leitura das constraints",
      title: "O que o Oracle passa a proteger?",
      subtitle: "Leia cada constraint em linguagem de negócio.",
      content: `
        <div class="table-container"><table class="modern-table"><thead><tr><th>Regra SQL</th><th>Consequência</th><th>Exemplo de violação</th></tr></thead><tbody><tr><td><code>pk_participacao</code></td><td>Id da participação é único e obrigatório</td><td>Duas linhas com id 100</td></tr><tr><td><code>fk_part_colab</code></td><td>Colaborador precisa existir</td><td>Participação com id_colaborador inexistente</td></tr><tr><td><code>NOT NULL</code></td><td>Campos obrigatórios precisam de valor</td><td>Participação sem papel</td></tr><tr><td><code>ck_part_horas</code></td><td>Horas precisam ser maiores que zero</td><td>Valor 0 ou negativo</td></tr></tbody></table></div>
        <div class="callout callout-amber">A constraint expressa uma regra declarada. Regras como “um projeto deve ter ao menos uma participação” exigem tratamento além da FK.</div>`
    },
    {
      category: "DDL • ALTER TABLE",
      title: "ALTER TABLE muda a estrutura existente",
      subtitle: "Use ADD para incluir uma coluna no esquema.",
      content: `
        <div class="grid-2"><div class="card card-blue"><div class="card-title">Antes</div><div class="code-box">PROJETOS<br>id_projeto, nome</div></div><div class="card card-green"><div class="card-title">Comando</div><div class="code-box">ALTER TABLE projetos<br>  ADD (area VARCHAR2(60));</div></div></div>
        <div class="callout callout-blue">Depois do comando, AREA faz parte da tabela. Linhas antigas passam a ter NULL nessa coluna até receberem um valor ou um padrão definido.</div>
        <p class="card-desc"><strong>Leitura:</strong> ALTER TABLE [tabela] ADD ([coluna] [tipo]);</p>`
    },
    {
      category: "DDL • MODIFY e constraints",
      title: "Altere uma definição com atenção aos dados existentes",
      subtitle: "O Oracle rejeita alterações incompatíveis com os valores já armazenados.",
      content: `
        <div class="grid-2"><div class="card"><div class="card-title">Aumentar o limite do nome</div><div class="code-box">ALTER TABLE projetos<br>  MODIFY (nome VARCHAR2(150));</div><p class="card-desc" style="margin-top:10px">O novo tamanho precisa acomodar os valores atuais.</p></div><div class="card card-amber"><div class="card-title">Adicionar uma regra</div><div class="code-box">ALTER TABLE projetos<br>  ADD CONSTRAINT uq_proj_nome<br>  UNIQUE (nome);</div><p class="card-desc" style="margin-top:10px">A alteração falha se já houver nomes duplicados.</p></div></div>
        <div class="callout callout-blue">Também é possível adicionar colunas, constraints ou mudar definições; confirme o efeito antes de aplicar a alteração.</div>`
    },
    {
      category: "CRUD",
      title: "Quatro operações básicas sobre os dados",
      subtitle: "CRUD descreve o ciclo de criar, ler, atualizar e remover registros.",
      content: `
        <div class="grid-4"><div class="card card-green"><div class="card-title">C • Create</div><p class="card-desc"><code>INSERT</code><br>Insere uma linha.</p></div><div class="card card-blue"><div class="card-title">R • Read</div><p class="card-desc"><code>SELECT</code><br>Consulta linhas.</p></div><div class="card card-amber"><div class="card-title">U • Update</div><p class="card-desc"><code>UPDATE</code><br>Altera linhas.</p></div><div class="card card-red"><div class="card-title">D • Delete</div><p class="card-desc"><code>DELETE</code><br>Remove linhas.</p></div></div>
        <div class="callout callout-blue">Em SQL, INSERT, UPDATE e DELETE são DML. SELECT é a consulta (DQL). Todas operam sobre o esquema criado com DDL.</div>`
    },
    {
      category: "CRUD • INSERT",
      title: "Insira primeiro as linhas referenciadas",
      subtitle: "Respeite as PKs, os campos obrigatórios e a ordem das FKs.",
      content: `
        <div class="code-box" style="font-size:.9rem;line-height:1.65;white-space:pre-wrap">INSERT INTO colaboradores (id_colaborador, nome)<br>VALUES (1, 'Ana Lima');<br><br>INSERT INTO projetos (id_projeto, nome, area)<br>VALUES (10, 'Sistema de Biblioteca', 'Sistemas');<br><br>INSERT INTO participacao<br>  (id_participacao, id_colaborador, id_projeto,<br>   papel, horas_semanais, data_inicio)<br>VALUES<br>  (100, 1, 10, 'Analista', 12.5, DATE '2026-11-05');</div>
        <div class="callout callout-amber">A linha da participação depende de um colaborador 1 e de um projeto 10 já existentes. Se uma FK não encontrar a linha, o Oracle rejeita o INSERT.</div>`
    },
    {
      category: "CRUD • SELECT",
      title: "SELECT lê dados; WHERE restringe o resultado",
      subtitle: "Comece escolhendo as colunas necessárias e escreva a condição de seleção.",
      content: `
        <div class="grid-2"><div class="card card-blue"><div class="card-title">Consulta das participações</div><div class="code-box" style="white-space:pre-wrap">SELECT id_participacao,<br>       papel,<br>       horas_semanais,<br>       data_inicio<br>FROM participacao<br>WHERE id_projeto = 10;</div></div><div class="card"><div class="card-title">Leia cláusula por cláusula</div><ul style="color:var(--cps-gray-medium);line-height:1.7;padding-left:20px"><li>SELECT: colunas que serão exibidas.</li><li>FROM: tabela consultada.</li><li>WHERE: linhas que atendem à condição.</li></ul></div></div>
        <div class="callout callout-green">A condição não altera os dados; ela filtra apenas o conjunto de linhas retornado.</div>`
    },
    {
      category: "CRUD • UPDATE",
      title: "UPDATE modifica as linhas selecionadas",
      subtitle: "Confirme a condição antes de executar a alteração.",
      content: `
        <div class="code-box" style="font-size:1rem;line-height:1.8">UPDATE participacao<br>SET horas_semanais = 15<br>WHERE id_participacao = 100;</div>
        <div class="grid-2" style="margin-top:14px"><div class="card card-green"><div class="card-title">Com WHERE</div><p class="card-desc">Altera a participação identificada pelo id 100.</p></div><div class="card card-red"><div class="card-title">Sem WHERE</div><p class="card-desc">Altera a carga horária de todas as linhas de PARTICIPACAO.</p></div></div>
        <div class="callout callout-amber">Uma prática segura é consultar primeiro as linhas que a condição seleciona e depois revisar o UPDATE.</div>`
    },
    {
      category: "CRUD • DELETE",
      title: "DELETE remove linhas; a FK protege as referências",
      subtitle: "Remova o vínculo antes das entidades que ele referencia.",
      content: `
        <div class="code-box" style="font-size:.98rem;line-height:1.8">DELETE FROM participacao<br>WHERE id_participacao = 100;</div>
        <div class="diagram-container" style="margin-top:14px"><svg class="diagram-svg" viewBox="0 0 900 150" role="img" aria-label="A tabela associativa é removida antes das tabelas pai"><rect x="40" y="35" width="245" height="75" rx="9" fill="#fff1f2" stroke="#b20000" stroke-width="2"/><text x="162" y="80" text-anchor="middle" font-size="19" font-weight="700" fill="#1e293b">COLABORADORES</text><line x1="290" y1="72" x2="385" y2="72" stroke="#475569" stroke-width="3" marker-end="url(#delArrow)"/><rect x="390" y="35" width="220" height="75" rx="9" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/><text x="500" y="80" text-anchor="middle" font-size="19" font-weight="700" fill="#1e293b">PARTICIPACAO</text><line x1="615" y1="72" x2="710" y2="72" stroke="#475569" stroke-width="3" marker-end="url(#delArrow)"/><rect x="715" y="35" width="150" height="75" rx="9" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/><text x="790" y="80" text-anchor="middle" font-size="19" font-weight="700" fill="#1e293b">PROJETOS</text><defs><marker id="delArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#475569"/></marker></defs></svg></div>
        <div class="callout callout-amber">Sem WHERE, DELETE remove todas as linhas da tabela. Uma FK pode impedir a exclusão de pai ainda referenciado.</div>`
    },
    {
      category: "Transações Oracle",
      title: "COMMIT confirma DML; ROLLBACK desfaz o que ainda não foi confirmado",
      subtitle: "O estado da transação importa ao conferir os exercícios.",
      content: `
        <div class="grid-2"><div class="card card-green"><div class="card-title">Confirmar alterações</div><div class="code-box">COMMIT;</div><p class="card-desc" style="margin-top:10px">Grava definitivamente as operações DML da transação.</p></div><div class="card card-amber"><div class="card-title">Desfazer antes da confirmação</div><div class="code-box">ROLLBACK;</div><p class="card-desc" style="margin-top:10px">Desfaz as alterações DML que continuam pendentes.</p></div></div>
        <div class="callout callout-red"><strong>DDL no Oracle:</strong> CREATE TABLE e ALTER TABLE fazem commit implícito. ROLLBACK não desfaz a criação ou a alteração estrutural da tabela.</div>`
    },
    {
      category: "Conexão • Oracle XE",
      title: "Use a conexão da turma no seu cliente SQL",
      subtitle: "A atividade cria objetos no esquema BD001 do banco XE.",
      content: `
        <div class="table-container"><table class="modern-table"><thead><tr><th>Campo</th><th>Valor</th></tr></thead><tbody><tr><td>Host</td><td><code>localhost</code></td></tr><tr><td>Porta</td><td><code>1521</code></td></tr><tr><td>Tipo de identificação</td><td>SID</td></tr><tr><td>SID</td><td><code>xe</code></td></tr><tr><td>Usuário / senha</td><td><code>BD001 / BD001</code></td></tr></tbody></table></div>
        <div class="callout callout-blue">O guia completo de inicialização e conexão está em Banco de Dados I/docker/README.md. Aguarde o container ficar healthy antes de iniciar.</div>`
    },
    {
      category: "Laboratório • Atividade A",
      title: "Converta o DER de colaboradores e projetos",
      subtitle: "Trabalhe a partir das regras usadas na Aula 03.",
      content: `
        <div class="card card-red"><div class="card-title">Regras do cenário</div><ul style="color:var(--cps-gray-medium);font-size:1rem;line-height:1.7;padding-left:22px"><li>Colaborador tem código e nome; projeto tem código e nome.</li><li>Colaboradores e projetos se relacionam em N:N.</li><li>Cada vínculo guarda papel, horas semanais e data de início.</li><li>Um colaborador pode deixar o projeto e retornar em outra data.</li></ul></div>
        <div class="callout callout-blue"><strong>Entregável lógico:</strong> escreva COLABORADOR, PROJETO e PARTICIPACAO com PKs e FKs marcadas. Justifique a chave que permite preservar os retornos.</div>`
    },
    {
      category: "Laboratório • Atividade B",
      title: "Implemente as tabelas e pratique CRUD",
      subtitle: "Tempo sugerido: 80 minutos, individualmente ou em dupla.",
      content: `
        <div class="grid-2"><div class="card card-blue"><div class="card-title">Modelo físico</div><ol style="color:var(--cps-gray-medium);line-height:1.65;padding-left:22px"><li>Crie COLABORADORES e PROJETOS.</li><li>Crie PARTICIPACAO com as duas FKs.</li><li>Inclua PK, NOT NULL e CHECK.</li><li>Acrescente AREA em PROJETOS com ALTER TABLE.</li></ol></div><div class="card card-green"><div class="card-title">Dados e consulta</div><ol style="color:var(--cps-gray-medium);line-height:1.65;padding-left:22px"><li>Insira colaborador e projeto.</li><li>Insira a participação.</li><li>Consulte com SELECT e WHERE.</li><li>Atualize horas e confira o resultado.</li><li>Remova a participação com DELETE.</li></ol></div></div>
        <div class="callout callout-amber">Não execute CREATE DATABASE. Conecte como BD001, confira o WHERE antes de UPDATE ou DELETE e respeite a ordem das FKs.</div>`
    },
    {
      category: "Laboratório • Roteiro SQL",
      title: "Sequência de comandos para orientar a prática",
      subtitle: "Consulte as instruções e adapte os comandos ao seu esquema.",
      content: `
        <div class="code-box" style="font-size:.82rem;line-height:1.5;white-space:pre-wrap">-- 1. Criar as tabelas (use o DDL dos slides anteriores)<br>-- 2. Inserir primeiro COLABORADORES e PROJETOS<br>INSERT INTO colaboradores (id_colaborador, nome)<br>VALUES (1, 'Ana Lima');<br>INSERT INTO projetos (id_projeto, nome)<br>VALUES (10, 'Sistema de Biblioteca');<br>-- 3. Registrar o vínculo depois das linhas pai<br>INSERT INTO participacao<br> (id_participacao, id_colaborador, id_projeto, papel,<br>  horas_semanais, data_inicio)<br>VALUES (100, 1, 10, 'Analista', 12.5, DATE '2026-11-05');<br>-- 4. Consultar, atualizar e remover o vínculo<br>SELECT * FROM participacao WHERE id_projeto = 10;<br>UPDATE participacao SET horas_semanais = 15<br> WHERE id_participacao = 100;<br>DELETE FROM participacao WHERE id_participacao = 100;</div>
        <div class="callout callout-blue">O roteiro SQL do slide demonstra a ordem do DML. Para entregar, inclua também o seu DDL completo.</div>`
    },
    {
      category: "Entrega e revisão",
      title: "O que precisa estar pronto ao final do laboratório",
      subtitle: "A entrega demonstra que o DER foi convertido e implementado preservando as regras.",
      content: `
        <div class="grid-3"><div class="card card-red"><div class="card-title">Modelo lógico</div><p class="card-desc">Tabelas, PKs e FKs identificadas, com justificativa para PARTICIPACAO.</p></div><div class="card card-blue"><div class="card-title">Script físico</div><p class="card-desc">CREATE TABLE, ALTER TABLE e constraints Oracle usados no esquema.</p></div><div class="card card-green"><div class="card-title">CRUD</div><p class="card-desc">INSERT, SELECT, UPDATE e DELETE demonstrados no caso.</p></div></div>
        <div class="callout callout-amber">Inclua nome e turma. Registre uma consulta executada e a justificativa das chaves e restrições.</div>`
    },
    {
      category: "Checagem de aprendizagem",
      title: "Explique as decisões antes de encerrar",
      subtitle: "Responda em voz alta ou no caderno.",
      content: `
        <div class="grid-2"><div class="card"><div class="card-title">Modelo lógico</div><ol style="color:var(--cps-gray-medium);line-height:1.65;padding-left:22px"><li>Por que PARTICIPACAO tem duas FKs?</li><li>Por que papel e horas não pertencem apenas ao colaborador?</li><li>Que regra a PK própria permite representar?</li></ol></div><div class="card card-blue"><div class="card-title">Oracle e SQL</div><ol style="color:var(--cps-gray-medium);line-height:1.65;padding-left:22px"><li>Qual o papel de NOT NULL e CHECK?</li><li>O que acontece ao omitir WHERE?</li><li>Por que BD001 cria tabelas, mas não outro banco XE?</li></ol></div></div>`
    },
    {
      category: "Síntese",
      title: "Três etapas, as mesmas regras",
      subtitle: "A implementação está correta quando conserva os vínculos e restrições do domínio.",
      content: `
        <div class="stepper"><div class="step-item"><div class="step-circle">1</div><div class="step-title">DER</div><div class="step-desc">Entidades e regras</div></div><div class="step-item"><div class="step-circle">2</div><div class="step-title">Modelo lógico</div><div class="step-desc">Relações, PKs e FKs</div></div><div class="step-item"><div class="step-circle">3</div><div class="step-title">Modelo físico</div><div class="step-desc">Tipos e constraints</div></div><div class="step-item"><div class="step-circle">4</div><div class="step-title">CRUD</div><div class="step-desc">Dados consultados e mantidos</div></div></div>
        <div class="callout callout-blue"><strong>Próxima etapa:</strong> analisar redundâncias no esquema relacional e estudar as formas normais.</div>`
    }
  ]
};
