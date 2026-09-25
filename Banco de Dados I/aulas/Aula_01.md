# ROTEIRO DE AULA EXPANDIDO — AULA 01

**Instituição:** Faculdade de Tecnologia de Sorocaba — Fatec Sorocaba  
**Curso:** Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) &nbsp;|&nbsp; **Matriz Curricular:** 1º Semestre (R-11)  
**Componente Curricular:** Banco de Dados I &nbsp;|&nbsp; **Carga Horária:** 80 Aulas (20 Semanas)  
**Docente Responsável:** Prof. André Souza  
**Data Calendário:** 07/08/2026 &nbsp;|&nbsp; **Data Programada:** 25/09/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Apresentação da Disciplina, Fundamentos da Persistência Estruturada, Níveis de Abstração (ANSI/SPARC), Ciclo de Modelagem e Abordagem MER vs. DER  
**Ambiente de Software:** Introdução Conceitual ao Ecossistema de SGBDs e Ferramenta brModelo (v3.0 / Web) — *Prática inicial desplugada (papel e caneta)*  
**Articulação com o PPC:** Competência 1 e 2 — Compreender os fundamentos de armazenamento estruturado, independência de dados e operação de SGBDs  

---

## 1. DIRETRIZES DO COMPONENTE CURRICULAR E APRESENTAÇÃO DO PLANO DE ENSINO

Conforme apresentado nos slides iniciais da disciplina, o componente curricular **Banco de Dados I** estrutura-se nas diretrizes regimentais do Projeto Pedagógico de Curso (PPC):

### 1.1 Ementa Regimental
> *"Conceitos de Banco de Dados. Modelos conceituais de informações. Modelos de Dados: Relacional, Redes e Hierárquicos. Modelagem de dados — projeto de banco de dados: conceitual, lógico/relacional e físico. Normalização. Restrições de integridade e de segurança em Banco de Dados Relacional. Sistemas Gerenciadores de Banco de Dados: tecnologias, implementação e aplicações. Linguagem SQL: aplicações e programação."* (Fatec Sorocaba, Matriz R-11).

### 1.2 Competências Profissionais Desenvolvidas
1. **Planejamento e Modelagem de Dados:** Capacidade de analisar cenários organizacionais complexos em linguagem natural e conceber esquemas conceituais e lógicos normalizados que atendam com fidelidade às regras de negócio corporativas.
2. **Implementação e Operação com SGBD:** Capacidade de projetar, criar e manter bases de dados relacionais por meio de scripts SQL robustos (DDL, DML, DQL), garantindo integridade referencial, segurança e eficiência no processamento de consultas.

### 1.3 Objetivos de Aprendizagem do Semestre
* **Abstrair:** Traduzir requisitos de negócio em modelos conceituais padronizados (DER na notação de Peter Chen e Crow's Foot).
* **Estruturar:** Mapear modelos conceituais para esquemas relacionais tabulares, determinando chaves primárias (PK) e estrangeiras (FK).
* **Normalizar:** Aplicar rigorosamente a teoria das dependências funcionais e as Formas Normais (1FN, 2FN e 3FN) para eliminar redundâncias e prevenir anomalias de atualização e deleção.
* **Implementar:** Construir estruturas físicas via SQL DDL (`CREATE`, `ALTER`, `DROP`, constraints) e manipular dados via DML (`INSERT`, `UPDATE`, `DELETE`).
* **Consultar:** Extrair relatórios gerenciais e analíticos por meio de consultas SQL DQL avançadas com junções multi-tabelas (`INNER/LEFT/RIGHT JOIN`), filtros, agrupamentos (`GROUP BY`, `HAVING`) e visões (`VIEWS`).

### 1.4 Sistema de Avaliação Regimental
A avaliação é contínua e formativa, com foco na consolidação progressiva das competências práticas:

$$\text{Média Final (MF)} = (\text{Média dos Exercícios} \times 0{,}5) + (\text{Prova Prática Final} \times 0{,}5)$$

* **50% — Atividades Práticas Contínuas:** Conjunto de exercícios individuais e em duplas desenvolvidos em sala de aula, oficinas assíncronas de nivelamento e modelagens entregues ao longo do semestre.
* **50% — Prova Prática Individual:** Avaliação individual em laboratório cobrindo modelagem relacional, normalização até a 3FN e codificação SQL completa.
* **Datas Críticas:**
  * **Prova Prática Final:** **27/11/2026**
  * **Prova de Recuperação:** **04/12/2026**
  * **Critérios de Aprovação:** $\text{MF} \ge 6{,}0$ e Frequência Regimental $\ge 75\%$.

### 1.5 Cronograma Estruturado em 4 Blocos
| Bloco Temático | Aulas Referenciais | Conteúdo Principal |
| :--- | :---: | :--- |
| **Bloco 1: Fundamentos & Modelagem Conceitual** | Aulas 01 a 03 | Fundamentos, ANSI/SPARC, ciclo de vida, MER vs. DER, entidades fortes e fracas, atributos e cardinalidades. |
| **Bloco 2: Mapeamento Lógico Relacional** | Aula 04 + Oficinas | Regras formais de conversão de DER para tabelas relacionais, chaves PK/FK e integridade referencial. |
| **Bloco 3: Teoria da Normalização** | Aula 05 | Dependências funcionais, decomposição sem perda de junção e Formas Normais (1FN, 2FN e 3FN). |
| **Bloco 4: Implementação Física & SQL** | Aulas 06 a 10 | SQL DDL completo, constraints, DML com transações ACID e consultas avançadas DQL com JOINs. |

---

## 2. FUNDAMENTAÇÃO TEÓRICA APROFUNDADA

### 2.1 A Pirâmide da Informação: Dado, Informação, Conhecimento e a Base dos Metadados

Segundo **Elmasri & Navathe (2019, p. 4)** e **Silberschatz et al. (2020, p. 2)**, a razão fundamental de existir de qualquer sistema computacional corporativo reside na necessidade de coletar dados brutos e transformá-los sistematicamente em ativos de decisão.

```
                  ┌───────────────────────────────┐
                  │         CONHECIMENTO          │
                  │  (Decisões, Regras, Previsões)│
                  └───────────────▲───────────────┘
                                  │ Interpretação e Aplicação
                  ┌───────────────┴───────────────┐
                  │          INFORMAÇÃO           │
                  │ (Contexto, Relatórios, KPIs)  │
                  └───────────────▲───────────────┘
                                  │ Estruturação e Processamento
                  ┌───────────────┴───────────────┐
                  │         DADOS BRUTOS          │
                  │(Valores Atômicos Desprovidos) │
                  └───────────────┬───────────────┘
                                  │ Catálogo de Tipos e Regras
┌─────────────────────────────────▼─────────────────────────────────┐
│        METADADOS (Catálogo e Dicionário de Dados do SGBD)         │
│  Definição de tipos, domínios, restrições de integridade e índices │
└───────────────────────────────────────────────────────────────────┘
```

#### Definições Formais:
1. **Dado (*Data*):** Elemento atômico bruto, mensurável, isolado e desprovido de contexto semântico intrínseco.
   * *Exemplos:* `450.00`, `'2026-09-25'`, `'P'`.
2. **Informação (*Information*):** O dado estruturado, processado e contextualizado, dotado de significado para os atores de um processo de negócio.
   * *Exemplo:* "A peça de código A-12 sofreu manutenção corretiva no valor de R$ 450,00 em 25/09/2026 com status 'P' (Pendente de homologação)."
3. **Conhecimento (*Knowledge*):** Padrões, tendências e correlações identificados a partir do histórico acumulado de informações, permitindo predições e decisões estratégicas.
   * *Exemplo:* "Peças do lote A-12 apresentam índice de falha 30% superior no período de garantia, indicando necessidade técnica de substituição do fornecedor de matéria-prima."
4. **Metadado (*Metadata*):** A base sustentadora de todo o ecossistema. Consiste em "dados que descrevem outros dados". No contexto dos bancos de dados relacionais, os metadados formam o **Catálogo do Sistema** (*Data Dictionary*), contendo:
   * Nome de cada tabela e coluna;
   * Tipos primitivos de dados e precisão numérica (ex.: `NUMERIC(10,2)`);
   * Restrições de obrigatoriedade (`NOT NULL`), unicidade (`UNIQUE`) e valores padrão (`DEFAULT`);
   * Definições de integridade referencial (relações de chave primária e estrangeira);
   * Estruturas físicas auxiliares de acesso rápido (índices B-Tree e Hash).

> **Citação Conceitual:** *"Uma característica fundamental da abordagem de banco de dados é que o sistema não apenas contém o banco de dados em si, mas também uma definição completa da estrutura do banco de dados e de suas restrições. Essa definição é armazenada no catálogo do SGBD, que contém informações como a estrutura de cada arquivo, o tipo e o formato de armazenamento de cada item de dado, e várias restrições sobre os dados. A informação armazenada no catálogo é chamada de metadados."* (ELMASRI & NAVATHE, 2019, p. 5).

---

### 2.2 Tipologia dos Dados: Estruturados, Semiestruturados e Não Estruturados

Segundo **Elmasri & Navathe (2019, Cap. 1 e 24)** e **Silberschatz et al. (2020, Cap. 1)**, antes de selecionar qualquer tecnologia de banco de dados, é imperativo compreender a natureza intrínseca dos dados que serão gerados, manipulados e persistidos pela organização. Os dados podem ser categorizados em três grandes tipologias:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        TIPOLOGIA DOS DADOS CORPORATIVOS                         │
├─────────────────────────┬─────────────────────────┬─────────────────────────────┤
│   DADOS ESTRUTURADOS    │  DADOS SEMIESTRUTURADOS │    DADOS NÃO ESTRUTURADOS   │
├─────────────────────────┼─────────────────────────┼─────────────────────────────┤
│ • Esquema rígido e fixo │ • Esquema flexível      │ • Sem esquema prévio        │
│   (Schema-on-Write)     │   (Schema-on-Read)      │   (Sem formato tabular)     │
│ • Linhas e colunas      │ • Pares chave-valor,    │ • Mídia bruta, texto livre, │
│   estritas              │   tags e hierarquias    │   streams binários          │
│ • Alta previsibilidade  │ • Mutabilidade dinâmica │ • Maior volume global (>80%)│
│ • Consulta: SQL puro    │ • Consulta: Parsers/JSON│ • Processamento: IA/NLP     │
│ • Ex.: Tabelas RDBMS    │ • Ex.: JSON, XML, YAML  │ • Ex.: Áudio, vídeo, PDFs   │
└─────────────────────────┴─────────────────────────┴─────────────────────────────┘
```

#### 1. Dados Estruturados (*Structured Data*)
* **Definição:** Dados que aderem compulsoriamente a um modelo de dados formal e rígido, com tipos primitivos estritos (`INTEGER`, `NUMERIC`, `VARCHAR`, `DATE`) e restrições semânticas pré-estabelecidas antes do ato da gravação (*Schema-on-Write*).
* **Organização Canônica:** Estrutura bidimensional tabular (tabelas compostas por linhas/tuplas e colunas/atributos).
* **Mecanismo de Recuperação:** Linguagens declarativas universais padronizadas, notadamente o SQL (*Structured Query Language*), permitindo operações relacionais matemáticas precisas (projeção, seleção, junção).
* **Casos Típicos:** Cadastros de clientes, transações contábeis, controle de contas bancárias, inventário de estoque, folha de pagamento corporativa.

#### 2. Dados Semiestruturados (*Semi-Structured Data*)
* **Definição:** Dados que não se submetem a uma estrutura relacional rígida prévia, mas contêm marcadores, rótulos, tags ou separadores semânticos internos que isolam e tipificam elementos de informação (*Schema-on-Read* ou esquemas flexíveis).
* **Organização Canônica:** Hierarquias em árvore, matrizes aninhadas e pares de chave-valor (*key-value*). Diferentes instâncias do mesmo tipo de registro podem conter atributos heterogêneos.
* **Mecanismo de Recuperação:** Analisadores sintáticos (*parsers*), linguagens de consulta baseadas em caminhos (ex.: XPath, JSONPath) ou dialetos de bancos NoSQL de documentos.
* **Formatos Canônicos:** Arquivos JSON (*JavaScript Object Notation*), XML (*eXtensible Markup Language*), YAML, feeds RSS e documentos BSON.
* **Casos Típicos:** Catálogos dinâmicos de e-commerce (onde uma camiseta tem os atributos `tamanho` e `cor`, mas um notebook tem `processador`, `memória_ram` e `voltagem`), payloads de APIs REST, logs de servidores web.

#### 3. Dados Não Estruturados (*Unstructured Data*)
* **Definição:** Dados que não possuem qualquer modelo conceitual de dados identificável, índices semânticos inerentes ou organização tabular que permita consultas relacionais convencionais.
* **Relevância em Volume:** De acordo com estudos de mercado consolidados (IDC e Gartner), dados não estruturados representam entre **80% e 90% de todo o volume de dados corporativos** gerados na era do *Big Data*.
* **Mecanismo de Recuperação:** Técnicas avançadas de Processamento de Linguagem Natural (NLP), visão computacional, redes neurais, reconhecimento óptico de caracteres (OCR) ou indexadores textuais invertidos (como Elasticsearch).
* **Formatos Canônicos:** Arquivos de imagem (`.png`, `.jpeg`), vídeos (`.mp4`), áudios, contratos digitalizados em PDF, mensagens de e-mail, gravações de voz em call centers e publicações em redes sociais.

---

### 2.3 Paradigmas de Armazenamento: Bancos Relacionais (RDBMS) vs. Não Relacionais (NoSQL)

A diversidade das tipologias de dados impulsionou a coexistência de dois grandes paradigmas no desenvolvimento de software (**Silberschatz et al., 2020, Cap. 1 e 19**; **Sadalage & Fowler, 2013**):

```
┌───────────────────────────────────────────────┐     ┌───────────────────────────────────────────────┐
│        BANCOS RELACIONAIS (RDBMS / SQL)       │     │     BANCOS NÃO RELACIONAIS (NoSQL)            │
├───────────────────────────────────────────────┤     ├───────────────────────────────────────────────┤
│ • Teoria Relacional de Edgar F. Codd (1970)   │     │ • Not Only SQL (Web 2.0 / Big Data)           │
│ • Tabelas, Linhas, Colunas, Chaves PK e FK    │     │ • Modelos Especializados e Esquemas Flexíveis │
│ • Garantias Rígidas ACID (Foco na Consistência)│    │ • Teorema CAP e Modelo BASE (Disponibilidade) │
│ • Linguagem Padrão Declarativa: SQL           │     │ • APIs de Consulta Específicas / Polyglot     │
│ • Escalabilidade Vertical (Scale-Up)          │     │ • Escalabilidade Horizontal Nativa (Scale-Out)│
│ • Ex.: PostgreSQL, MySQL, Oracle, SQL Server  │     │ • Ex.: MongoDB, Redis, Cassandra, Neo4j       │
└───────────────────────────────────────────────┘     └───────────────────────────────────────────────┘
```

#### 1. Bancos de Dados Relacionais (RDBMS / SQL)
Concebidos em 1970 por **Edgar F. Codd** em seu histórico artigo *"A Relational Model of Data for Large Shared Data Banks"*, os bancos relacionais apoiam-se na teoria matemática de conjuntos e na lógica de predicados de primeira ordem.
* **Pilares Centrais:**
  * **Relações e Tuplas:** Dados organizados em tabelas finitas com esquema unificado.
  * **Integridade Referencial:** Mecanismos canônicos de Chave Primária (*Primary Key — PK*) e Chave Estrangeira (*Foreign Key — FK*) impedem registros órfãos e inconsistências.
  * **Transações ACID:**
    * **A (Atomicidade):** A transação executa por completo ("tudo ou nada").
    * **C (Consistência):** Garante a transição de um estado válido a outro, respeitando todas as regras e constraints.
    * **I (Isolamento):** Transações simultâneas não interferem mutuamente.
    * **D (Durabilidade):** Uma vez confirmada (*commit*), a alteração resiste a falhas físicas ou reinicializações.

#### 2. Bancos de Dados Não Relacionais (NoSQL — *Not Only SQL*)
Surgidos com força a partir do final dos anos 2000 para responder aos desafios de escalabilidade horizontal massiva (*scale-out*) das gigantes da Web (Google, Amazon, Meta), os bancos NoSQL abrem mão de certas garantias relacionais em prol de velocidade e particionamento distribuído.
* **As Quatro Grandes Famílias NoSQL:**
  1. **Orientados a Documentos (*Document Stores*):** Armazenam registros como documentos autocontidos e semiestruturados (JSON/BSON). Ideais para dados hierárquicos e catálogos dinâmicos. *Exemplos:* MongoDB, Apache CouchDB.
  2. **Chave-Valor (*Key-Value Stores*):** Armazenam dados como um par simples chave-valor, priorizando velocidade máxima de leitura e escrita em memória RAM. *Exemplos:* Redis, Memcached, Amazon DynamoDB.
  3. **Família de Colunas (*Wide-Column Stores*):** Otimizados para consultas analíticas sobre grandes volumes distribuídos e séries temporais, organizando dados em famílias de colunas dinâmicas. *Exemplos:* Apache Cassandra, ScyllaDB, HBase.
  4. **Orientados a Grafos (*Graph Databases*):** Representam os dados em nós (*nodes*), propriedades (*properties*) e relacionamentos explícitos (*edges*). Projetados para percorrer redes altamente conectadas com altíssima performance. *Exemplos:* Neo4j, Amazon Neptune.
* **O Teorema CAP e o Modelo BASE:** Formalizado por Eric Brewer, o teorema postula que um sistema distribuído pode garantir simultaneamente apenas duas das três propriedades: **C**onsistência (*Consistency*), **A**lta Disponibilidade (*Availability*) e Tolerância a **P**artição (*Partition Tolerance*). Enquanto os RDBMS priorizam Consistência (ACID), muitos sistemas NoSQL adotam o modelo **BASE** (*Basically Available, Soft-state, Eventual consistency*).

---

### 2.4 Matriz de Decisão: Quando Usar Relacional vs. Não Relacional & A Relevância de BD I

Na engenharia de software contemporânea, a escolha da ferramenta de persistência não é ideológica, mas guiada por critérios arquiteturais objetivos:

| Dimensão de Análise | Banco de Dados Relacional (SQL) | Banco de Dados Não Relacional (NoSQL) |
| :--- | :--- | :--- |
| **Garantia Transacional** | **Mandatória (ACID estrito):** Sem tolerância a dados inconsistentes. | **Eventual (BASE):** Tolerância a inconsistências temporárias em prol de vazão. |
| **Natureza dos Dados** | Estruturados, normalizados e tabulares. | Semiestruturados ou heterogêneos. |
| **Relacionamentos** | Densos e complexos, com necessidade frequente de cruzamentos (`JOINs`). | Desnormalizados (dados autocontidos no próprio documento ou nó). |
| **Estabilidade do Esquema** | Esquema previsível com governança formal (*Schema-on-Write*). | Esquema em evolução rápida e contínua (*Schema-on-Read*). |
| **Padrão de Escalabilidade** | Predominantemente vertical (*Scale-Up* — CPU, RAM, SSD mais veloz). | Predominantemente horizontal (*Scale-Out* — múltiplos servidores comuns). |
| **Cenários Ideais** | • Sistemas Bancários e Financeiros<br>• ERPs Corporativos (SAP, Totvs)<br>• Faturamento e Folha de Pagamento<br>• Sistemas Hospitalares e Prontuários | • Feeds de Redes Sociais e Notificações<br>• Sessões de Usuários e Cache em Memória<br>• Telemetria e Logs de Sensores IoT<br>• Catálogos de E-commerce com Milhares de Categorias |

#### Por que o Componente Curricular "Banco de Dados I" Foca no Modelo Relacional?
1. **Padrão Absoluto da Indústria:** O modelo relacional sustenta mais de 70% das bases de dados transacionais corporativas ativas no mundo empresarial e governamental.
2. **Formação Conceitual Estruturante:** A teoria de modelagem relacional ensina a essência do raciocínio analítico: abstração, identificação de entidades, cardinalidades, integridade referencial e normalização.
3. **Pré-requisito Universal:** Nenhum engenheiro de software domina com eficácia arquiteturas híbridas (*polyglot persistence*) ou ferramentas NoSQL sem antes compreender como os dados se relacionam logicamente e como anomalias de redundância afetam a confiabilidade dos sistemas.

---

### 2.5 Da Abordagem Tradicional de Arquivos (*File-System*) aos SGBDs

Nas décadas de 1960 e 1970, os sistemas de processamento de dados apoiavam-se em **sistemas de processamento de arquivos convencionais**, nos quais cada aplicação proprietária mantinha seus próprios arquivos físicos gravados no disco magnético (arquivos sequenciais ou indexados `.dat`, `.csv`, `.txt`).

```
┌─────────────────────────────────┐         ┌─────────────────────────────────┐
│     Aplicação de Vendas         │         │     Aplicação de Cobrança       │
└────────────────┬────────────────┘         └────────────────┬────────────────┘
                 │ Lê e Grava                                │ Lê e Grava
┌────────────────▼────────────────┐         ┌────────────────▼────────────────┐
│       clientes_vendas.dat       │         │      clientes_cobranca.dat      │
│  (Cod, Nome, Endereco, Limite)  │         │  (Cod, Nome, Endereco, Saldo)   │
└─────────────────────────────────┘         └─────────────────────────────────┘
                 ▲                                           ▲
                 └────────── Inconsistência e Redundância ───┘
```

#### Problemas Críticos da Abordagem de Arquivos (SILBERSCHATZ et al., 2020, p. 3–4):
1. **Redundância e Inconsistência de Dados:** Como aplicações diferentes gerenciavam arquivos distintos, as mesmas informações (ex.: endereço do cliente) eram cadastradas em duplicidade. A atualização de endereço efetuada pelo departamento de Vendas não refletia no arquivo do departamento de Cobrança.
2. **Dificuldade no Acesso aos Dados (Falta de Consultas Ad-Hoc):** O sistema tradicional não dispunha de uma linguagem declarativa universal. Qualquer consulta inédita solicitada pela diretoria exigia que um desenvolvedor escrevesse, compilasse e executasse um novo programa específico (em COBOL ou C) para varrer arquivos sequenciais linha por linha.
3. **Isolamento de Dados:** Dados dispersos em múltiplos arquivos estruturados em formatos incompatíveis dificultavam o cruzamento de relatórios gerenciais.
4. **Problemas de Integridade Dispersa:** As restrições de consistência (ex.: `saldo_conta >= 0`) precisavam ser codificadas diretamente nas regras de cada programa aplicativo. Se um programador criasse uma rotina alternativa e esquecesse a validação, dados inválidos corrompiam o arquivo.
5. **Problemas de Atomicidade:** Se o fornecimento de energia elétrica falhasse no meio da gravação de um lote de 500 registros, o arquivo de dados ficava corrompido em estado inconsistente parcial.
6. **Anomalias de Acesso Concorrente:** A ausência de um mecanismo centralizado de controle de concorrência e transações permitia que duas operações simultâneas sobrescrevessem dados uma da outra (*Lost Update Problem*).
7. **Problemas de Segurança:** Era tecnicamente inviável limitar o acesso a colunas específicas para determinados perfis de usuários; o controle de permissão do sistema operacional restringia-se ao nível do arquivo inteiro.

#### A Definição de SGBD (Sistema Gerenciador de Banco de Dados):
Para solucionar esses gargalos, concebeu-se o **SGBD** (*Database Management System — DBMS*): um conjunto integrado de softwares dedicado à definição, criação, manutenção, proteção e controle de acesso a múltiplos bancos de dados, assegurando as propriedades **ACID** (Atomicidade, Consistência, Isolamento e Durabilidade).

---

### 2.6 A Arquitetura ANSI/SPARC em Três Níveis e a Independência de Dados

Em 1975, o comitê ANSI/X3/SPARC (*American National Standards Institute, Standards Planning and Requirements Committee*) formalizou a **Arquitetura em Três Níveis**, cujo objetivo primordial é separar fisicamente as aplicações dos dados gravados no disco, garantindo a **independência de dados**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   NÍVEL EXTERNO (Visões dos Usuários)                  │
│       Visão Vendas              Visão Finanças           Visão RH      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Independência Lógica de Dados
┌───────────────────────────────────▼────────────────────────────────────┐
│                   NÍVEL CONCEITUAL (Esquema Global)                    │
│    Todas as Entidades, Atributos, Relacionamentos e Restrições         │
│    (Visão formal do negócio — Totalmente independente de SGBD)         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Independência Física de Dados
┌───────────────────────────────────▼────────────────────────────────────┐
│                   NÍVEL INTERNO (Armazenamento Físico)                 │
│    Alocação de blocos, índices B-Tree, hash, compressão e tablespaces   │
└────────────────────────────────────────────────────────────────────────┘
```

#### Os Três Níveis de Abstração:
1. **Nível Externo (Visões de Usuários):** Descreve a fração do banco de dados relevante para um grupo particular de usuários ou aplicações, ocultando os detalhes de tabelas e colunas alheias à sua função de negócio (implementado em SQL por meio do comando `CREATE VIEW`).
2. **Nível Conceitual (Esquema Conceitual Global):** Descreve a estrutura completa do banco de dados para toda a organização. Especifica todas as entidades, seus atributos, seus relacionamentos e as restrições de integridade, sem qualquer menção a como essas informações serão dispostas em blocos de memória secundária.
3. **Nível Interno / Físico (Esquema Interno):** Descreve a estrutura física completa de armazenamento: organização sequencial ou espalhada (*hash*), caminhos de acesso, índices em árvore B-Tree, algoritmos de compressão e parâmetros de fragmentação no sistema operacional.

#### As Duas Dimensões da Independência de Dados (ELMASRI & NAVATHE, 2019, p. 33–34):
* **Independência Lógica de Dados:** Capacidade de modificar o esquema conceitual (ex.: adicionar um novo atributo `telefone_comercial` ou criar uma nova tabela de `auditoria`) sem a necessidade de reescrever os programas de aplicação ou as visões externas existentes que não utilizam os elementos novos.
* **Independência Física de Dados:** Capacidade de reorganizar o esquema interno de armazenamento (ex.: migrar os dados de HDDs magnéticos para SSDs NVMe, particionar uma tabela volumosa em múltiplos volumes de disco ou criar novos índices secundários para ganho de performance) sem a necessidade de alterar o esquema conceitual nem reescrever as consultas SQL dos sistemas.

---

### 2.7 As Fases do Projeto de Banco de Dados: Modelo Conceitual, Lógico e Físico

O desenvolvimento de um projeto de persistência estruturada segue uma metodologia formal em cascata de refinamento semântico e técnico (**Martelli et al., 2018, p. 25–40**):

```
                     [ Requisitos do Mundo Real ]
               (Entrevistas e Regras de Negócio em Linguagem Natural)
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        1. MODELO CONCEITUAL                            │
│  Foco: "O QUE" armazenar. Abstração semântica de mais alto nível.      │
│  Independe completamente de tecnologia, tipo de banco e de SGBD.       │
│  Artefato: Diagrama Entidade-Relacionamento (DER).                     │
└─────────────────────────────────┬──────────────────────────────────────┘
                                  │ Mapeamento Lógico Relacional
                                  ▼
┌────────────────────────────────────────────────────────────────────────┐
│                          2. MODELO LÓGICO                              │
│  Foco: "COMO" estruturar. Aderente ao paradigma relacional (Codd).     │
│  Depende do tipo de modelo (Relacional), mas independe da marca do SGBD│
│  Artefato: Tabelas, Colunas, Chaves Primárias (PK) e Estrangeiras (FK).│
└─────────────────────────────────┬──────────────────────────────────────┘
                                  │ Engenharia Física / Implementação
                                  ▼
┌────────────────────────────────────────────────────────────────────────┐
│                          3. MODELO FÍSICO                              │
│  Foco: "ONDE E COM QUE TIPOS" gravar. Nível de mais baixo nível.       │
│  Específico e dependente do SGBD adotado (PostgreSQL, MySQL, Oracle).  │
│  Artefato: Scripts DDL (CREATE TABLE), tipos primitivos e índices.     │
└────────────────────────────────────────────────────────────────────────┘
```

#### Quadro Comparativo Rigoroso dos Três Níveis de Modelagem:
| Dimensão de Comparação | Modelo Conceitual | Modelo Lógico | Modelo Físico |
| :--- | :--- | :--- | :--- |
| **Nível de Abstração** | Mais Alto (Visão de Negócio) | Intermediário (Visão Estrutural) | Mais Baixo (Visão Tecnológica) |
| **Público-Alvo** | Analistas de negócio, clientes e usuários finais | Projetistas de dados, analistas de sistemas e programadores | Administradores de Banco de Dados (DBA) e engenheiros de dados |
| **Dependência Tecnológica** | **Totalmente Independente** (de tecnologia e de paradigma) | **Dependente do Paradigma** (Relacional), mas independente da marca do SGBD | **Totalmente Dependente** da versão e dialeto do SGBD específico |
| **Componentes Centrais** | **Entidades**, **Atributos** e **Relacionamentos** | **Tabelas (Relações)**, **Colunas (Campos)**, **Chaves PK e FK** | Tipos de dados primitivos (`SERIAL`, `VARCHAR`), índices, tablespaces e triggers |
| **Representação Canônica** | Diagrama Entidade-Relacionamento (DER) | Esquema Relacional / Notação Tabular | Scripts SQL DDL (`CREATE TABLE ...`) |
| **Exemplo Prático** | "Cliente realiza Pedido (1,N)" | `CLIENTE(id_cliente PK, nome)`<br>`PEDIDO(id_ped PK, id_cliente FK)` | `CREATE TABLE pedido (id_ped INT PRIMARY KEY, id_cliente INT REFERENCES cliente(id_cliente)...);` |

---

### 2.8 A Diferença Formal entre MER e DER

Um dos equívocos mais recorrentes na prática profissional de Engenharia de Software consiste em tratar as siglas **MER** e **DER** como termos intercambiáveis:

```
┌────────────────────────────────────────────────────────────────────────┐
│                 MER (Modelo Entidade-Relacionamento)                   │
│                          [CONCEITO TEÓRICO]                            │
│                                                                        │
│ • Abordagem conceitual formal concebida por Peter Chen em 1976.        │
│ • Conjunto teórico de abstrações matemáticas e semânticas:             │
│   Conjuntos de Entidades, Conjuntos de Relacionamentos, Atributos,    │
│   Domínios de Valores e Razões de Cardinalidade.                      │
│ • É o "modelo mental estruturado" do negócio.                         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ É expresso e visualizado por meio de
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                DER (Diagrama Entidade-Relacionamento)                  │
│                     [REPRESENTAÇÃO GRÁFICA / DESENHO]                  │
│                                                                        │
│ • O esquema visual padronizado resultante da modelagem.                │
│ • Notação Clássica de Peter Chen (1976): Retângulos, Losangos,         │
│   Elipses e Linhas de Conexão.                                         │
│ • Notação de Engenharia da Informação (Crow's Foot / Pé-de-Galinha).   │
│ • É o artefato gráfico concreto (a "planta baixa").                    │
└────────────────────────────────────────────────────────────────────────┘
```

#### Analogias Didáticas:
1. **Engenharia Civil:** O planejamento dos ambientes, ventilação e dimensionamento estrutural é o modelo conceitual (**MER**); a folha impressa de planta baixa em AutoCAD com paredes e cotas é o diagrama (**DER**).
2. **Música:** A concepção melódica e harmônica que existe na mente do compositor é o modelo abstrato (**MER**); os símbolos grafados na partitura são a notação visual (**DER**).

> **Atenção:** Pode-se formular um **MER** completo por escrito, através de listas de regras e dicionário de dados formal, sem traçar uma única linha na tela. A partir do momento em que se desenha essa estrutura com símbolos gráficos padronizados, obteve-se o **DER**.

---

## 3. METODOLOGIA PRÁTICA DESPLUGADA E ENGENHARIA DE REQUISITOS

### 3.1 Justificativa Pedagógica do Trabalho Desplugado (Papel e Caneta)
Conforme discutido em aula, o maior obstáculo do aluno iniciante em banco de dados reside na tentação de abrir imediatamente o software gerenciador (DBeaver, pgAdmin) e digitar comandos `CREATE TABLE` antes de estruturar as regras de negócio.

Ao trabalhar desplugado (em papel e caneta):
1. **Elimina-se a sobrecarga cognitiva de sintaxe:** O cérebro não se divide entre pensar na regra do cliente e se preocupar com vírgulas, ponto-e-vírgula ou se deve usar `VARCHAR` ou `TEXT`.
2. **Prioriza-se a Semântica Pura:** Foco exclusivo nas entidades fundamentais, seus atributos descritivos e nas cardinalidades mínimas e máximas.
3. **Economia de Retrabalho:** Modificar uma linha de relacionamento no papel leva 5 segundos; refazer um banco de dados relacional com tabelas criadas erroneamente via SQL pode exigir horas de recriação de constraints e scripts de migração.

---

### 3.2 O Método Estruturado em 5 Etapas
Para transformar qualquer solicitação corporativa expressa em linguagem natural em um esquema conceitual sem erros, aplica-se o seguinte fluxo metódico:

$$\boxed{\text{1. Texto Narrativo}} \longrightarrow \boxed{\text{2. Identificação}} \longrightarrow \boxed{\text{3. Regras de Negócio}} \longrightarrow \boxed{\text{4. Modelo Conceitual (MER)}} \longrightarrow \boxed{\text{5. DER Gráfico}}$$

---

### 3.3 Análise Gramatical de Requisitos em Linguagem Natural
O analista de banco de dados deve utilizar as classes gramaticais da língua portuguesa como pistas diretas para dissecar o texto narrativo:

| Classe Gramatical | Pista Conceitual | Exemplo no Texto | Elemento Resultante no Modelo |
| :--- | :--- | :--- | :--- |
| **Substantivos Concretos / Abstratos** | Coisas do mundo real com existência autônoma que demandam cadastro | "Cliente", "Livro", "Editora", "Pet", "Médico" | **Entidade** (Representada por Retângulo) |
| **Substantivos Descritivos** | Características, propriedades e medidas de uma entidade | "nome", "telefone", "data_nascimento", "código" | **Atributo** (Representado por Elipse) |
| **Substantivos com valor unívoco** | Campo que diferencia infalivelmente uma instância de outra | "CPF", "código identificador", "matrícula", "chassi" | **Atributo Identificador** (Elipse preenchida/sublinhada) |
| **Verbos de Ação ou Ligação** | Associação semântica e vínculo funcional entre duas entidades | "possui", "publica", "ministra", "realiza", "aloca" | **Relacionamento** (Representado por Losango) |
| **Expressões Quantificadoras** | Limites mínimos e máximos da associação entre as instâncias | "exatamente um", "um ou vários", "no mínimo um", "opcional" | **Cardinalidade** (Parênteses $(min, max)$ nas pontas) |

---

## 4. LABORATÓRIO PRÁTICO DE MODELAGEM DESPLUGADA

### 4.1 Exercício 1 — Prática Guiada pelo Docente (Clínica Veterinária "PetCare")

#### Etapa 1: Leitura do Texto Narrativo
> *"A clínica veterinária **PetCare** necessita informatizar seus atendimentos. O sistema deve cadastrar os **clientes**, armazenando o **código identificador**, o **nome completo** e o **telefone** de contato. Cada cliente pode possuir um ou vários **pets** (animais). De cada pet, devem ser registrados o **código de registro**, o **nome** e a **espécie** (cão, gato, etc.). Regra obrigatória da clínica: todo pet cadastrado deve pertencer obrigatoriamente a exatamente um cliente."*

#### Etapa 2: Identificação Analítica dos Componentes
* **Entidades:** `CLIENTE` e `PET`.
* **Atributos de CLIENTE:** `id_cliente` (Identificador / Chave), `nome`, `telefone`.
* **Atributos de PET:** `id_pet` (Identificador / Chave), `nome`, `especie`.
* **Relacionamento:** `POSSUI`.

#### Etapa 3: Regras de Negócio e Cardinalidades Formais
1. **CLIENTE $\to$ PET:** Um cliente cadastrado na clínica possui no mínimo 1 pet e pode possuir muitos pets $\implies$ **(1, N)**.
2. **PET $\to$ CLIENTE:** Um pet pertence obrigatoriamente a no mínimo 1 cliente e não pode pertencer a mais de 1 cliente simultâneo $\implies$ **(1, 1)**.
3. **Classificação Estrutural:** Trata-se de um relacionamento binário com cardinalidade máxima **1 para N (1:N)**.

#### Etapa 4 e 5: Modelo Conceitual Estruturado e Construção do DER (Notação Peter Chen)

```
      (telefone)                                (especie)
          │                                         │
   (• id_cliente)                              (• id_pet)
          │                                         │
   ┌──────┴──────┐       (1,N)     (1,1)     ┌──────┴──────┐
   │   CLIENTE   ├────────< POSSUI >─────────┤     PET     │
   └──────┬──────┘                           └──────┬──────┘
          │                                         │
        (nome)                                   (nome)
```

> **Correspondência nos Slides:** Consulte a imagem oficial da modelagem em [`slides/img/der_pet.png`](file:///c:/projetos/Material/Banco%20de%20Dados%20I/slides/img/der_pet.png), apresentada no **Slide 24**.

---

### 4.2 Exercício 2 — Prática Individual / Duplas em Sala (Biblioteca Municipal "Saber")

#### Etapa 1: Texto Narrativo do Estudo de Caso
> *"A Biblioteca Municipal **Saber** deseja informatizar o controle de seu acervo de obras. Cada **livro** possui um **código identificador**, o **título** da obra e o **ano de publicação**. Cada livro é publicado por exatamente uma **editora**. De cada editora, deseja-se registrar o **código de identificação**, a **razão social** e a **cidade** sede. Sabe-se que uma editora cadastrada pode ter publicado múltiplos livros disponíveis na biblioteca."*

#### Etapa 2: Identificação Analítica dos Elementos
* **Entidades:** `EDITORA` e `LIVRO`.
* **Atributos de EDITORA:** `id_editora` (Identificador / Chave), `razao_social`, `cidade`.
* **Atributos de LIVRO:** `id_livro` (Identificador / Chave), `titulo`, `ano_publicacao`.
* **Relacionamento:** `PUBLICA`.

#### Etapa 3: Análise Rigorosa das Cardinalidades
1. **EDITORA $\to$ LIVRO:** Uma editora cadastrada no sistema publica no mínimo 1 livro e pode publicar muitos livros para o acervo $\implies$ **(1, N)**.
2. **LIVRO $\to$ EDITORA:** Cada exemplar de livro catalogado foi publicado por no mínimo 1 e no máximo 1 editora $\implies$ **(1, 1)**.
3. **Classificação Estrutural:** Relacionamento binário de cardinalidade máxima **1 para N (1:N)**.

#### Etapa 4 e 5: DER Canônico Resultante (Notação Peter Chen)

```
      (cidade)                                (ano_publicacao)
          │                                         │
   (• id_editora)                              (• id_livro)
          │                                         │
   ┌──────┴──────┐       (1,N)     (1,1)     ┌──────┴──────┐
   │   EDITORA   ├───────< PUBLICA >─────────┤    LIVRO    │
   └──────┬──────┘                           └──────┬──────┘
          │                                         │
    (razao_social)                               (titulo)
```

> **Correspondência nos Slides:** Consulte a imagem de gabarito em [`slides/img/der_editora.png`](file:///c:/projetos/Material/Banco%20de%20Dados%20I/slides/img/der_editora.png), apresentada no **Slide 26**.

#### Conexão Pedagógica com a Fase Lógica Futura:
Observe que, ao resolvermos o modelo conceitual com a cardinalidade $(1,N)$, antecipamos uma regra matemática fundamental do Modelo Relacional que estudaremos na Aula 04: **a chave primária do lado (1) migrará compulsoriamente como Chave Estrangeira (FK) para a tabela do lado (N)**.  
Portanto, a tabela `LIVRO` receberá a coluna `id_editora (FK)`.

---

## 5. ATIVIDADES DE FIXAÇÃO E AVALIAÇÃO FORMATIVA

1. **Análise Comparativa de Níveis de Abstração:**  
   Correlacione os itens abaixo ao seu nível de projeto correspondente (**[C]** Conceitual, **[L]** Lógico ou **[F]** Físico):
   * ( ) Criação de um índice do tipo `B-TREE` na coluna `cpf` para acelerar buscas binárias.
   * ( ) Definição da cardinalidade binária `(1,N)` entre as entidades `DEPARTAMENTO` e `FUNCIONARIO`.
   * ( ) Estruturação da tabela relacional `TB_ALUNO` com chave primária simples `ra_aluno` do tipo numérico.
   * ( ) Identificação com os diretores de uma fábrica de que toda ordem de serviço deve conter ao menos uma peça aplicada.

2. **Diferenciação Crítica MER vs. DER:**  
   Explique a uma equipe de programadores por que afirmar que *"O banco de dados PostgreSQL executa o MER"* é um erro conceitual duplo.

3. **Tipologia de Dados e Seleção Arquitetural:**  
   Um hospital necessita armazenar: (a) o cadastro cadastral e financeiro de internações dos pacientes; (b) os arquivos de exames de tomografia computadorizada e ressonância magnética (imagens DICOM); e (c) as anotações livres de evolução médica diária dos enfermeiros. Classifique cada um desses três itens quanto à tipologia dos dados (Estruturado, Semiestruturado ou Não Estruturado) e justifique por que um SGBD relacional convencional é inadequado para armazenar diretamente as imagens de alta resolução nos registros tabulares.

4. **Arquitetura ANSI/SPARC e Manutenção Industrial:**  
   A diretoria de tecnologia de uma instituição bancária optou por alterar a criptografia dos discos de armazenamento e reorganizar a ordenação física dos arquivos em blocos de 64 KB. Os sistemas de home banking e caixas eletrônicos precisarão ter seus códigos-fonte alterados? Qual conceito da arquitetura tripartite assegura essa resposta?

5. **Exercício Prático Desplugado Complementar:**  
   Aplique o método das 5 etapas para o seguinte cenário e elabore o respectivo DER de Chen no caderno:  
   > *"Uma oficina mecânica mantém o cadastro de seus Mecânicos (código, nome, especialidade) e das Ferramentas especiais (código, descrição, fabricante). Cada ferramenta fica sob responsabilidade de exatamente um mecânico por turno, mas um mecânico pode ter sob sua responsabilidade múltiplas ferramentas."*

---

## 6. REFERÊNCIAS BIBLIOGRÁFICAS DETALHADAS E COMENTADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   * **Capítulo 1: Bancos de Dados e Usuários de Bancos de Dados (p. 3–28):** Conceituação formal de banco de dados, SGBD, catálogo autodescritivo, dependência programa-dados e controle de concorrência.
   * **Capítulo 2: Conceitos e Arquitetura do Sistema de Banco de Dados (p. 29–42):** Definição da Arquitetura ANSI/SPARC de três esquemas, mapeamento entre níveis e fundamentos teóricos da Independência Lógica e Física de Dados.
   * **Capítulo 3: Modelagem de Dados Usando o Modelo Entidade-Relacionamento (p. 43–76):** Definição canônica de entidades, atributos (simples, compostos, multivalorados, derivados e identificadores), relacionamentos e razões de cardinalidade.
   * **Capítulo 24: Bancos de Dados NoSQL e Tecnologias de Big Data (p. 685–715):** Classificação formal de dados estruturados, semiestruturados e não estruturados, sistemas de arquivos distribuídos, Teorema CAP e os quatro modelos NoSQL (documentos, chave-valor, colunares e grafos).
2. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   * **Capítulo 1: Introdução aos Sistemas de Banco de Dados (p. 1–32):** Análise comparativa detalhada entre os sistemas de arquivos legados e os SGBDs modernos, integridade, atomicidade e visões.
   * **Capítulo 2: Introdução ao Modelo Relacional (p. 33–68):** Fundamentos matemáticos do modelo relacional formulado por Edgar F. Codd.
   * **Capítulo 19: Bancos de Dados Alternativos e NoSQL (p. 640–675):** Paradigmas de armazenamento não relacional, modelo BASE, tolerância a falhas distribuídas e critérios arquiteturais de seleção.
3. **CHEN, Peter Pin-Shan.** *The Entity-Relationship Model—Toward a Unified View of Data.* ACM Transactions on Database Systems (TODS), v. 1, n. 1, p. 9–36, Março de 1976.  
   * *Artigo seminal clássico que introduziu formalmente o Modelo Entidade-Relacionamento e a notação diagramática (DER) na história da computação.*
4. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* São Paulo: Novatec Editora, 2015.  
   * *Fundamentação sobre o Princípio da Informação e o rigor na modelagem dos dados sem redundâncias estruturais.*
5. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   * **Capítulos 1 e 2 (p. 15–58):** Ciclo de vida do projeto de banco de dados (Conceitual, Lógico e Físico), elicitação de requisitos e modelagem orientada a ferramentas visuais.
6. **SADALAGE, Pramod J.; FOWLER, Martin.** *NoSQL Essencial: Um Guia Conciso para o Mundo Pragmático do Armazenamento de Dados Poliglota.* São Paulo: Novatec, 2013.  
   * *Análise da persistência poliglota na arquitetura de sistemas corporativos modernos e a matriz de decisão técnica entre tecnologias relacionais e não relacionais.*

