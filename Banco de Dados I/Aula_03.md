# ROTEIRO DE AULA EXPANDIDO — AULA 03

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 21/08/2026 &nbsp;|&nbsp; **Data Programada:** — (Atividade Online Assíncrona com Tutoria Virtual)  
**Modalidade:** Online  
**Tema:** Modelagem Conceitual de Dados II — Recursos Avançados: Auto-relacionamentos, Especialização/Generalização e Entidades Associativas  
**Ambiente de Software:** brModelo 3.0 ou [brModelo Web](https://brmodeloweb.com/)  
**Articulação com o PPC:** Competência 2 — Estruturar regras de negócio complexas através de herança de atributos, polimorfismo conceitual e associações recursivas  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula de aprofundamento conceitual, você será capaz de:
1. Compreender e modelar **Auto-relacionamentos (Relacionamentos Unários / Recursivos)** definindo os papéis de cada participação (ex.: gerência hierárquica, pré-requisitos de disciplinas, estrutura de componentes *Bill of Materials*).
2. Analisar o grau de relacionamentos e modelar **Relacionamentos Ternários** quando a semântica da associação envolve 3 entidades simultaneamente.
3. Aplicar os conceitos de **Especialização e Generalização** (Superclasse / Subclasses) com herança de atributos e relacionamentos.
4. Classificar e justificar as restrições de especialização:
   * **Completude:** Total ($\text{t}$) vs. Parcial ($\text{p}$);
   * **Disjunção:** Disjunta ($\text{d}$) vs. Sobreposta ($\text{o}$).
5. Transformar relacionamentos em **Entidades Associativas** quando a própria associação precisa se relacionar com uma terceira entidade.
6. Identificar e evitar armadilhas clássicas de modelagem (*Connection Traps*: *Fan Trap* e *Chasm Trap*).

---

## 2. FUNDAMENTAÇÃO TEÓRICA AVANÇADA

### 2.1 Auto-relacionamento (Relacionamento Recursivo)

Ocorre quando instâncias da **mesma entidade** associam-se entre si desempenhando **papéis (*roles*)** distintos.

```
                  ┌────────────────────────┐
                  │                        │ (1,1) [é chefiado por]
                  ▼                        │
          ┌───────────────┐          ┌─────┴──────┐
          │  FUNCIONARIO  ├──────────┤ SUPERVISAO │
          └───────────────┘ (0,N)    └────────────┘
                            [supervisiona]
```

* **Exemplo 1 (Hierarquia de Gestão):** Um funcionário pode ser supervisionado por outro funcionário (supervisor). Um supervisor pode chefiar vários colaboradores ($1:N$).
* **Exemplo 2 (Lista de Materiais / BOM - Bill of Materials):** Uma peça industrial pode ser composta por várias outras peças, e uma peça pode fazer parte de vários conjuntos complexos ($N:N$).

---

### 2.2 Especialização e Generalização (EER - Enhanced ER)

Permite representar relações do tipo **"É UM" (*IS-A*)**, onde uma entidade genérica (**Superclasse**) compartilha seus atributos universais com entidades especializadas (**Subclasses**), que por sua vez possuem atributos e comportamentos exclusivos.

```
                         ┌─────────────────────────┐
                         │         PESSOA          │
                         │ (• id_pessoa, nome, doc)│
                         └────────────┬────────────┘
                                      │
                                      ▼  (d, t)
                                     / \
                                    /   \
                                   ───────
                                    │   │
                  ┌─────────────────┘   └─────────────────┐
                  ▼                                       ▼
       ┌─────────────────────┐                 ┌─────────────────────┐
       │   PESSOA FISICA     │                 │   PESSOA JURIDICA   │
       │ (cpf, data_nasc)    │                 │ (cnpj, insc_est)    │
       └─────────────────────┘                 └─────────────────────┘
```

#### Restrições Formais de Especialização:
1. **Restrição de Disjunção:**
   * **Disjunta ($\text{d}$):** Uma ocorrência da superclasse pode pertencer a **no máximo uma** subclasse (ex.: uma pessoa ou é Pessoa Física ou é Pessoa Jurídica; não pode ser ambos simultaneamente).
   * **Sobreposta ($\text{o}$):** Uma ocorrência da superclasse pode pertencer a **duas ou mais subclasses** ao mesmo tempo (ex.: em uma fábrica, um colaborador pode ser simultaneamente `OPERADOR` e `BRIGADISTA_DE_INCENDIO`).
2. **Restrição de Completude:**
   * **Total ($\text{t}$):** Toda ocorrência da superclasse **obrigatoriamente deve** pertencer a alguma subclasse (representada no DER por linha dupla ligando a superclasse ao triângulo).
   * **Parcial ($\text{p}$):** Uma ocorrência da superclasse pode existir isoladamente sem pertencer a nenhuma subclasse (linha simples).

---

### 2.3 Entidades Associativas

Quando duas entidades possuem um relacionamento $N:N$, e essa associação precisa, ela própria, relacionar-se com uma terceira entidade, a abordagem de Chen promove o relacionamento a uma **Entidade Associativa** (representada graficamente por um retângulo envolvendo o losango).

* **Exemplo Prático:**
  * O relacionamento entre `MEDICO` e `PACIENTE` gera a `CONSULTA` ($N:N$).
  * Se a `CONSULTA` precisa gerar uma ou mais `RECEITAS_MEDICAS` ou envolver um `CONVENIO`, a `CONSULTA` é promovida a entidade associativa.

---

## 3. ESTUDO DE CASO PRÁTICO (ONLINE ASSÍNCRONO)

### Cenário: "Sistema Hospitalar Santa Cruz de Sorocaba"

Modele no brModelo o sistema com as seguintes regras de negócio:
1. **Pessoas e Especializações:** O hospital cadastra `PESSOAS` (identificador, nome, data de nascimento, endereço e telefones). Uma pessoa especializa-se em `PACIENTE` (com número do prontuário e tipo sanguíneo) ou `PROFISSIONAL_SAUDE` (com número do registro no conselho regional CRM/COREN e carga horária semanal). A especialização é disjunta e parcial.
2. `PROFISSIONAL_SAUDE` especializa-se em `MEDICO` (com especialidade cirúrgica) ou `ENFERMEIRO` (com setor de atuação).
3. **Internações:** Um paciente pode passar por várias `INTERNACOES`. Cada internação possui data de entrada, data de alta e leito ocupado.
4. **Plantões e Equipes:** Um médico chefia outros médicos residentes através de um auto-relacionamento de mentoria.
5. **Procedimentos Cirúrgicos (Relacionamento Ternário):** Uma cirurgia envolve simultaneamente: um `PACIENTE`, um `MEDICO_CIRURGIAO` titular e uma `SALA_CIRURGICA`, com registro da data, duração em minutos e laudo pós-operatório.

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Explique a diferença teórica entre uma especialização **Total Disjunta $(t, d)$** e uma especialização **Parcial Sobreposta $(p, o)$**, apresentando um exemplo prático de cada uma.
2. O que é uma armadilha de leque (*Fan Trap*) em modelagem conceitual? Como a correta análise de cardinalidades mínimas e a reestruturação dos relacionamentos evitam esse erro semântico?
3. Em uma empresa de telecomunicações, deseja-se representar que determinados projetos de fibra óptica possuem outros projetos como pré-requisitos para poderem iniciar. Modele graficamente essa regra usando um auto-relacionamento e indique suas cardinalidades.

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 4:** *Modelagem de Dados Conceitual Avançada: O Modelo Entidade-Relacionamento Estendido (EER), Especialização, Generalização, Uniões e Herança de Atributos* (p. 83–120).
2. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 2:** *Tipos Especiais de Relacionamentos: Unários, Ternários e Estruturas de Generalização/Especialização* (p. 50–66).
3. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 6:** *Características Estendidas do Modelo ER: Especialização, Generalização, Agregação e Conjuntos de Entidades de Alto Nível* (p. 210–234).
