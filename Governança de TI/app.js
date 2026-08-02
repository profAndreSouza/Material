/**
 * Caderno Interativo - Governança de TI
 * Lógica do Aplicativo, Teoria Alinhada aos Frameworks e Banco de Dados dos Módulos
 */

// --- BANCO DE DADOS COMPLETO DO CRONOGRAMA ---
const scheduleData = [
  {
    week: 1,
    type: "Aula",
    typeLabel: "Aula Normal",
    badgeClass: "badge-aula",
    wednesdayDate: "05/Ago",
    fridayDate: "07/Ago",
    topicWed: "Apresentação da disciplina. Governança de TI x Gestão de TI. Valor para o negócio. Metodologia PBL e apresentação do PDGTI.",
    topicFri: "Formação dos grupos, escolha da empresa (real ou fictícia) e início do Capítulo 1 - Caracterização da Organização.",
    summary: "Compreender o papel da Governança de TI e iniciar o projeto que será desenvolvido durante todo o semestre.",
    pdgtiStep: "Capítulo 1 - Caracterização da Organização",
    references: [
      "Fernandes & Abreu - Cap.1",
      "ISO/IEC 38500 - Conceitos"
    ]
  },

  {
    week: 2,
    type: "Aula",
    typeLabel: "Aula Normal",
    badgeClass: "badge-aula",
    wednesdayDate: "12/Ago",
    fridayDate: "14/Ago",
    topicWed: "Governança Corporativa, Compliance, Ética e SOX. Relação entre Governança Corporativa e Governança de TI.",
    topicFri: "Desenvolvimento do Capítulo 2 - Diagnóstico da Situação Atual da TI (SWOT, problemas e oportunidades).",
    summary: "Entender os fatores que motivam a implantação da Governança de TI.",
    pdgtiStep: "Capítulo 2 - Diagnóstico",
    references: [
      "Bittencourt",
      "Martins",
      "SOX"
    ]
  },

  {
    week: 3,
    type: "Aula",
    typeLabel: "Aula Normal",
    badgeClass: "badge-aula",
    wednesdayDate: "19/Ago",
    fridayDate: "21/Ago",
    topicWed: "Alinhamento Estratégico, PETI e mecanismos de decisão.",
    topicFri: "Construção do Capítulo 3 - Objetivos Estratégicos, PETI e Mapa Estratégico.",
    summary: "Relacionar os objetivos do negócio aos objetivos de TI.",
    pdgtiStep: "Capítulo 3 - Estratégia",
    references: [
      "Fernandes & Abreu - Cap.2",
      "Kaplan & Norton"
    ]
  },

  {
    week: 4,
    type: "Aula",
    typeLabel: "Aula Normal",
    badgeClass: "badge-aula",
    wednesdayDate: "26/Ago",
    fridayDate: "28/Ago",
    topicWed: "Balanced Scorecard, Portfólio de TI, Estrutura de Governança e papéis.",
    topicFri: "Construção do Capítulo 4 - Comitês, RACI, Políticas e Estrutura de Governança.",
    summary: "Definir como a Governança funcionará na organização.",
    pdgtiStep: "Capítulo 4 - Estrutura de Governança",
    references: [
      "Fernandes & Abreu",
      "COBIT"
    ]
  },

  {
    week: 5,
    type: "Aula",
    typeLabel: "Entrega Parcial",
    badgeClass: "badge-entrega",
    wednesdayDate: "02/Set",
    fridayDate: "04/Set",
    topicWed: "Revisão dos conteúdos das semanas 1 a 4.",
    topicFri: "**ENTREGA PARCIAL 1** (Capítulos 1 a 4 do PDGTI). Feedback coletivo.",
    summary: "Consolidação da primeira fase do projeto.",
    pdgtiStep: "Entrega Parcial 1",
    references: [
      "Rubrica do PDGTI"
    ]
  },

  {
    week: 6,
    type: "PII",
    typeLabel: "Semana de PII",
    badgeClass: "badge-pii",
    wednesdayDate: "09/Set",
    fridayDate: "11/Set",
    topicWed: "Atividades do Projeto Integrador.",
    topicFri: "Orientação interdisciplinar e integração dos projetos.",
    summary: "Semana institucional.",
    pdgtiStep: "Aprimoramento do projeto",
    references: [
      "Diretrizes PII"
    ]
  },

  {
    week: 7,
    type: "Aula",
    typeLabel: "Aula Normal",
    badgeClass: "badge-aula",
    wednesdayDate: "16/Set",
    fridayDate: "18/Set",
    topicWed: "Gestão de Desempenho, Indicadores, KPIs e medição de resultados.",
    topicFri: "Construção do Capítulo 5 - Indicadores Estratégicos e Dashboard.",
    summary: "Definir indicadores para acompanhar a Governança.",
    pdgtiStep: "Capítulo 5 - KPIs",
    references: [
      "Fernandes & Abreu"
    ]
  },

  {
    week: 8,
    type: "Avaliacao",
    typeLabel: "Prova 1",
    badgeClass: "badge-prova",
    wednesdayDate: "23/Set",
    fridayDate: "25/Set",
    topicWed: "**PROVA 1** (Semanas 1 a 7).",
    topicFri: "Correção comentada e feedback da Entrega Parcial.",
    summary: "Avaliação individual dos conteúdos iniciais.",
    pdgtiStep: "Correções do projeto",
    references: [
      "Conteúdo das Semanas 1 a 7"
    ]
  },

  {
    week: 9,
    type: "PII",
    typeLabel: "Semana de PII",
    badgeClass: "badge-pii",
    wednesdayDate: "30/Set",
    fridayDate: "02/Out",
    topicWed: "Projeto Integrador.",
    topicFri: "Mentoria dos grupos.",
    summary: "Semana institucional.",
    pdgtiStep: "Refinamento do PDGTI",
    references: [
      "PII"
    ]
  },

  {
    week: 10,
    type: "Aula",
    typeLabel: "Aula Normal",
    badgeClass: "badge-aula",
    wednesdayDate: "07/Out",
    fridayDate: "09/Out",
    topicWed: "Gestão de Riscos, Compliance e Governança.",
    topicFri: "Construção do Capítulo 6 - Matriz de Riscos e Compliance.",
    summary: "Planejar controles e mitigação dos riscos.",
    pdgtiStep: "Capítulo 6 - Riscos",
    references: [
      "ISO 31000",
      "ISO 27005"
    ]
  },

  {
    week: 11,
    type: "SemanaTec",
    typeLabel: "Semana de Tecnologia",
    badgeClass: "badge-tec",
    wednesdayDate: "14/Out",
    fridayDate: "16/Out",
    topicWed: "Participação nas palestras e atividades da Semana de Tecnologia.",
    topicFri: "Registro das lições aprendidas e aplicação ao PDGTI.",
    summary: "Semana institucional.",
    pdgtiStep: "Atualização do PDGTI com boas práticas observadas",
    references: [
      "Programação da Semana Tech"
    ]
  },

  {
    week: 12,
    type: "Aula",
    typeLabel: "Aula Normal",
    badgeClass: "badge-aula",
    wednesdayDate: "21/Out",
    fridayDate: "23/Out",
    topicWed: "ISO/IEC 38500, COBIT, ITIL e ISO 20000.",
    topicFri: "Construção do Capítulo 7 - Seleção dos Frameworks de Governança.",
    summary: "Selecionar os frameworks adequados para a empresa.",
    pdgtiStep: "Capítulo 7 - Frameworks",
    references: [
      "COBIT 2019",
      "ITIL 4",
      "ISO 38500"
    ]
  },

  {
    week: 13,
    type: "Aula",
    typeLabel: "Aula Normal",
    badgeClass: "badge-aula",
    wednesdayDate: "28/Out",
    fridayDate: "30/Out",
    topicWed: "CMMI, MR-MPS, ISO/IEC 12207, ISO/IEC 25010 e implantação da Governança.",
    topicFri: "Construção dos Capítulos 8 e 9 - Melhoria Contínua e Roadmap de Implantação.",
    summary: "Finalizar toda a proposta de implantação da Governança.",
    pdgtiStep: "Capítulos 8 e 9",
    references: [
      "CMMI",
      "MPS.BR",
      "ISO 12207",
      "ISO 25010"
    ]
  },

  {
    week: 14,
    type: "PII",
    typeLabel: "Semana PII + Reposição",
    badgeClass: "badge-pii",
    wednesdayDate: "04/Nov",
    fridayDate: "06/Nov & 07/Nov (Sáb)",
    topicWed: "Mentoria do Projeto Integrador.",
    topicFri: "Revisão final do PDGTI e utilização da reposição para ajustes finais.",
    summary: "Semana institucional.",
    pdgtiStep: "Versão quase final",
    references: [
      "PII"
    ]
  },

  {
    week: 15,
    type: "Entrega",
    typeLabel: "Entrega Final",
    badgeClass: "badge-entrega",
    wednesdayDate: "11/Nov",
    fridayDate: "13/Nov",
    topicWed: "Implantação da Governança de TI, fatores críticos de sucesso e gestão da mudança.",
    topicFri: "**ENTREGA FINAL DO PDGTI**.",
    summary: "Conclusão do projeto desenvolvido durante o semestre.",
    pdgtiStep: "PDGTI Final",
    references: [
      "Fernandes & Abreu"
    ]
  },

  {
    week: 16,
    type: "Aula",
    typeLabel: "Encerramento",
    badgeClass: "badge-aula",
    wednesdayDate: "18/Nov",
    fridayDate: "20/Nov (Feriado)",
    topicWed: "Apresentação dos principais resultados dos grupos e revisão geral para a avaliação.",
    topicFri: "Feriado Nacional.",
    summary: "Consolidação da aprendizagem.",
    pdgtiStep: "Preparação para Prova 2",
    references: [
      "Revisão Geral"
    ]
  },

  {
    week: 17,
    type: "Avaliacao",
    typeLabel: "Prova 2",
    badgeClass: "badge-prova",
    wednesdayDate: "25/Nov",
    fridayDate: "27/Nov",
    topicWed: "**PROVA 2** (conteúdo após a Prova 1).",
    topicFri: "Fechamento das avaliações e devolutiva geral.",
    summary: "Avaliação final individual.",
    pdgtiStep: "Conclusão da disciplina",
    references: [
      "Conteúdo das Semanas 7 a 15"
    ]
  },

  {
    week: 18,
    type: "Encerramento",
    typeLabel: "Fechamento",
    badgeClass: "badge-entrega",
    wednesdayDate: "02/Dez",
    fridayDate: "04/Dez",
    topicWed: "Apresentação dos melhores projetos e encerramento da disciplina.",
    topicFri: "Divulgação das médias finais.",
    summary: "Fechamento do semestre.",
    pdgtiStep: "Disciplina encerrada",
    references: [
      "Rubrica Final"
    ]
  },

  {
    week: 19,
    type: "Recuperacao",
    typeLabel: "Semana de Recuperação",
    badgeClass: "badge-rec",
    wednesdayDate: "09/Dez",
    fridayDate: "11/Dez",
    topicWed: "Recuperação.",
    topicFri: "Divulgação dos resultados.",
    summary: "Avaliação de recuperação.",
    pdgtiStep: "Recuperação",
    references: [
      "Regulamento"
    ]
  },

  {
    week: 20,
    type: "Fechamento",
    typeLabel: "Semana de Fechamento",
    badgeClass: "badge-fechamento",
    wednesdayDate: "16/Dez",
    fridayDate: "18/Dez",
    topicWed: "Conselho de Classe.",
    topicFri: "Encerramento oficial do semestre.",
    summary: "Fechamento institucional.",
    pdgtiStep: "Diário encerrado",
    references: [
      "Calendário Acadêmico"
    ]
  }
];

// --- TEORIA DE GOVERNANÇA ALINHADA AOS FRAMEWORKS E BIBLIOGRAFIA ---


const theoreticalModulesData = [
  {
    id: "mod-01",
    title: "Módulo 1 — Introdução à Governança de TI",
    subtitle: "Compreendendo como a TI gera valor para o negócio",
    icon: "fa-solid fa-scale-balanced",
    estimatedReading: "35 a 45 min",
    difficulty: "Fundamental",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulo 1.",
      "ISO/IEC 38500:2015 (Introdução)",
      "COBIT 2019 Framework - Executive Overview"
    ],
    learningObjectives: [
      "Compreender o conceito de Governança de TI.",
      "Diferenciar Governança de TI e Gestão de TI.",
      "Entender porque as organizações investem em Governança.",
      "Relacionar Governança de TI com geração de valor para o negócio."
    ],
    relatedPDGTI: [
      "Definição da empresa",
      "Entendimento do contexto organizacional",
      "Visão estratégica da TI"
    ],
    examTopics: [
      "Diferença entre Governança e Gestão",
      "Fatores motivadores",
      "Componentes da Governança"
    ],
    sections: [
      {
        type: "intro",
        title: "Por que estudar Governança de TI?",
        content: `
Nos últimos anos a Tecnologia da Informação deixou de ser apenas um setor de apoio e passou a ocupar posição estratégica dentro das organizações.

Hoje praticamente todos os processos empresariais dependem de sistemas computacionais. Vendas, logística, produção, recursos humanos, financeiro e relacionamento com clientes são executados ou apoiados por soluções de TI.

Entretanto, investir em tecnologia não garante automaticamente melhores resultados.

Diversas organizações investem milhões em softwares, infraestrutura e serviços sem obter retorno esperado.

O principal motivo é que muitas vezes a TI trabalha desconectada dos objetivos estratégicos da empresa.

A Governança de TI surge justamente para resolver esse problema.

Seu principal objetivo é garantir que a Tecnologia da Informação gere valor para o negócio, minimize riscos e utilize adequadamente os recursos disponíveis.
`
      },
      {
        type: "callout",
        style: "info",
        icon: "fa-solid fa-lightbulb",
        title: "Ideia principal",
        content: `
Governança de TI não significa administrar computadores.

Governança significa garantir que todas as decisões relacionadas à tecnologia contribuam diretamente para o sucesso da organização.
`
      },
      {
        type: "heading",
        title: "O que é Governança de TI?"
      },
      {
        type: "paragraph",
        content: `
Segundo Fernandes e Abreu, Governança de TI consiste no conjunto de estruturas organizacionais, políticas, processos, responsabilidades e mecanismos utilizados para garantir que a tecnologia esteja alinhada aos objetivos estratégicos da organização.

A ISO/IEC 38500 complementa essa definição afirmando que a Governança é responsabilidade da Alta Administração, responsável por avaliar, direcionar e monitorar o uso da tecnologia.
`
      },
      {
        type: "quote",
        author: "ISO/IEC 38500",
        content: "A governança de TI é o sistema pelo qual o uso atual e futuro da tecnologia é dirigido e controlado."
      },
      {
        type: "table",
        title: "Elementos presentes na Governança",
        headers: [
          "Elemento",
          "Objetivo"
        ],
        rows: [

          [
            "Estratégia",
            "Alinhar TI aos objetivos do negócio"
          ],
          [
            "Políticas",
            "Padronizar decisões"
          ],
          [
            "Processos",
            "Organizar atividades"
          ],
          [
            "Papéis",
            "Definir responsabilidades"
          ],
          [
            "Indicadores",
            "Medir resultados"
          ],
          [
            "Gestão de riscos",
            "Reduzir impactos negativos"
          ]
        ]
      },
      {
        type: "heading",
        title: "Governança x Gestão"
      },
      {
        type: "paragraph",
        content: `
Um dos maiores erros cometidos por iniciantes é considerar Governança e Gestão como sinônimos.

Embora estejam relacionadas, representam responsabilidades completamente diferentes.
`
      },
      {
        type: "table",
        title: "Comparação",
        headers: [
          "Governança",
          "Gestão"
        ],
        rows: [

          [
            "Define direção",
            "Executa a direção"
          ],
          [
            "Longo prazo",
            "Curto e médio prazo"
          ],
          [
            "Alta administração",
            "Gerentes"
          ],
          [
            "Decide prioridades",
            "Executa projetos"
          ],
          [
            "Avalia resultados",
            "Produz resultados"
          ]
        ]
      },
      {
        type: "callout",
        style: "warning",
        icon: "fa-solid fa-triangle-exclamation",
        title: "Muito cobrado em provas",
        content: `
Governança decide.

Gestão executa.

Sempre que aparecer essa comparação em avaliações, lembre-se dessa frase.
`
      },
      {
        type: "heading",
        title: "Por que surgiu a Governança de TI?"
      },
      {
        type: "list",
        items: [

          "Crescimento da dependência dos sistemas de informação.",
          "Aumento dos investimentos em tecnologia.",
          "Necessidade de justificar o retorno financeiro da TI.",
          "Escândalos corporativos que demonstraram falhas de controle.",
          "Maior preocupação com segurança da informação.",
          "Necessidade de atender requisitos legais e regulatórios.",
          "Busca por maior competitividade."
        ]
      },
      {
        type: "case",
        title: "Exemplo prático",
        company: "Empresa fictícia Alpha",
        content: `
A empresa Alpha investiu R$ 3 milhões em um novo ERP.

Após dois anos descobriu que diversos módulos nunca foram utilizados pelos usuários.

O projeto foi entregue dentro do prazo, mas não gerou benefícios para o negócio.

A Gestão de TI executou corretamente o projeto.

A Governança falhou ao não validar se o investimento estava realmente alinhado às necessidades estratégicas da empresa.
`
      },
      {
        type: "heading",
        title: "Os cinco pilares clássicos da Governança de TI"
      },
      {
        type: "cards",
        cards: [

          {
            title: "Alinhamento Estratégico",
            icon: "fa-solid fa-bullseye",
            content: "Garantir que a TI apoie os objetivos do negócio."
          },
          {
            title: "Entrega de Valor",
            icon: "fa-solid fa-chart-line",
            content: "Transformar investimentos em benefícios."
          },
          {
            title: "Gestão de Riscos",
            icon: "fa-solid fa-shield-halved",
            content: "Reduzir riscos tecnológicos."
          },
          {
            title: "Gestão de Recursos",
            icon: "fa-solid fa-server",
            content: "Utilizar pessoas, orçamento e infraestrutura adequadamente."
          },
          {
            title: "Medição de Desempenho",
            icon: "fa-solid fa-chart-column",
            content: "Avaliar continuamente os resultados da TI."
          }

        ]
      },
      {
        type: "pdgti",
        title: "Ligação com o PDGTI",
        content: `
Nesta semana iniciaremos a definição da organização que será utilizada durante todo o semestre.

Antes de propor melhorias, é fundamental compreender:

• Quem é a empresa?

• Qual seu negócio?

• Como a TI participa desse negócio?

• Quais são seus principais desafios?

Essas respostas serão utilizadas na elaboração do Capítulo 1 do PDGTI.
`
      },
      {
        type: "reflection",
        title: "Perguntas para reflexão",
        questions: [

          "Uma empresa pode possuir excelente equipe de TI e mesmo assim não possuir Governança? Explique.",
          "Quem deve decidir os investimentos em TI?",
          "Toda decisão técnica precisa passar pela Governança?",
          "Qual o risco de a TI trabalhar sem alinhamento estratégico?"
        ]
      },
      {
        type: "summary",
        title: "Resumo da Aula",
        bullets: [

          "Governança e Gestão possuem responsabilidades diferentes.",
          "A Governança busca gerar valor para o negócio.",
          "A Alta Administração participa das decisões estratégicas.",
          "A TI deve estar alinhada aos objetivos organizacionais.",
          "O PDGTI nasce a partir do entendimento do negócio."
        ]
      },
      {
        type: "review",
        title: "Checklist de Aprendizagem",
        checklist: [

          "Consigo explicar o conceito de Governança de TI.",
          "Sei diferenciar Governança e Gestão.",
          "Entendo por que surgiu a Governança.",
          "Conheço os principais pilares da Governança.",
          "Compreendo como este conteúdo será utilizado no PDGTI."
        ]
      }

    ]
  },
  {
    id: "mod-02",
    title: "Módulo 2 — Governança Corporativa, Compliance e Ética",
    subtitle: "Como a Governança de TI apoia a transparência, a conformidade e a geração de confiança nas organizações",
    icon: "fa-solid fa-building-shield",
    estimatedReading: "45 a 60 min",
    difficulty: "Fundamental",
    bibliography: [
      "BITTENCOURT, Carlos Magno Andriolli. Governança Corporativa e Compliance. Capítulos 1 e 2.",
      "MARTINS, Camila Saldanha. Governança e Compliance.",
      "FERNANDES; ABREU. Implantando a Governança de TI. Capítulo 1.",
      "Sarbanes-Oxley Act (2002)."
    ],
    learningObjectives: [
      "Compreender a relação entre Governança Corporativa e Governança de TI.",
      "Entender o conceito de Compliance.",
      "Conhecer a Lei Sarbanes-Oxley.",
      "Relacionar ética, controles internos e tecnologia."
    ],
    relatedPDGTI: [
      "Caracterização da organização",
      "Levantamento da estrutura organizacional",
      "Identificação das áreas envolvidas",
      "Mapeamento dos stakeholders"
    ],
    examTopics: [
      "Governança Corporativa",
      "Compliance",
      "SOX",
      "Controles Internos",
      "Stakeholders"
    ],
    sections: [
      {
        type: "intro",
        title: "Antes de falar de TI... precisamos falar da empresa.",
        content: `

Uma organização não existe apenas para produzir bens ou prestar serviços.

Ela precisa tomar decisões continuamente, administrar riscos, atender leis, prestar contas aos investidores e manter sua reputação perante clientes, fornecedores e a sociedade.

A Governança Corporativa surgiu justamente para organizar esse processo decisório.

A Governança de TI nasce dentro desse contexto.

Ou seja, a TI não cria suas próprias regras.

Ela existe para apoiar a estratégia definida pela Governança Corporativa.

`
      },
      {
        type: "timeline",
        title: "Como chegamos até aqui?",
        events: [

          {
            year: "Década de 1980",
            title: "Crescimento da informatização",
            description: "A TI passa a controlar processos críticos das empresas."
          },
          {
            year: "Década de 1990",
            title: "Expansão da Internet",
            description: "A dependência tecnológica aumenta rapidamente."
          },
          {
            year: "2001",
            title: "Escândalo Enron",
            description: "Fraudes financeiras revelam graves falhas de controles corporativos."
          },
          {
            year: "2002",
            title: "Lei Sarbanes-Oxley",
            description: "Maior marco regulatório para controles internos."
          },
          {
            year: "Hoje",
            title: "Governança Digital",
            description: "Dados, IA, segurança, LGPD e transformação digital tornam a Governança ainda mais estratégica."
          }

        ]
      },
      {
        type: "heading",
        title: "O que é Governança Corporativa?"
      },
      {
        type: "paragraph",
        content: `

Governança Corporativa é o conjunto de mecanismos utilizados para dirigir, monitorar e controlar uma organização.

Ela busca equilibrar os interesses dos diversos participantes da empresa, garantindo transparência, responsabilidade e sustentabilidade.

Segundo o Instituto Brasileiro de Governança Corporativa (IBGC), uma boa governança reduz conflitos de interesse e aumenta a confiança dos investidores.

Enquanto a Governança Corporativa olha para toda a organização, a Governança de TI concentra-se especificamente no uso estratégico da tecnologia.

`
      },
      {
        type: "comparison",
        title: "Governança Corporativa x Governança de TI",
        leftTitle: "Governança Corporativa",
        rightTitle: "Governança de TI",
        left: [
          "Abrange toda a empresa",
          "Define objetivos estratégicos",
          "Relaciona-se ao Conselho",
          "Protege investidores",
          "Foca geração de valor"
        ],
        right: [
          "Foca tecnologia",
          "Alinha TI ao negócio",
          "Relaciona-se ao CIO",
          "Controla riscos tecnológicos",
          "Garante retorno dos investimentos em TI"
        ]
      },
      {
        type: "highlight",
        style: "primary",
        title: "Importante",
        content: `

Toda Governança de TI faz parte da Governança Corporativa.

Por outro lado, uma empresa pode possuir Governança Corporativa sem possuir uma Governança de TI estruturada.

`
      },
      {
        type: "heading",
        title: "Quem são os Stakeholders?"
      },
      {
        type: "paragraph",
        content: `

Stakeholders são todas as pessoas ou organizações que possuem interesse nos resultados da empresa.

Cada decisão tomada pela organização afeta, direta ou indiretamente, algum stakeholder.

A Governança existe justamente para equilibrar esses interesses.

`
      },
      {
        type: "table",
        title: "Exemplos de Stakeholders",
        headers: ["Stakeholder", "Interesse"],
        rows: [

          ["Acionistas", "Rentabilidade"],
          ["Clientes", "Qualidade e atendimento"],
          ["Funcionários", "Carreira e estabilidade"],
          ["Fornecedores", "Relacionamento comercial"],
          ["Governo", "Cumprimento das leis"],
          ["Sociedade", "Impactos sociais e ambientais"]

        ]
      },
      {
        type: "heading",
        title: "Compliance"
      },
      {
        type: "paragraph",
        content: `

A palavra Compliance deriva do verbo inglês "to comply", que significa cumprir.

Estar em Compliance significa atuar de acordo com leis, regulamentos, normas internas, contratos e princípios éticos.

Não basta apenas obedecer à legislação.

Uma organização madura desenvolve políticas internas, auditorias, treinamentos e controles para garantir que todos ajam corretamente.

`
      },
      {
        type: "cards",
        cards: [

          {

            title: "Leis",
            icon: "fa-solid fa-scale-balanced",
            content: "Cumprimento da legislação."

          },
          {

            title: "Normas",
            icon: "fa-solid fa-book",
            content: "ISO, COBIT, ITIL, políticas internas."

          },
          {

            title: "Ética",
            icon: "fa-solid fa-handshake",
            content: "Fazer o correto mesmo quando ninguém está olhando."

          },
          {

            title: "Auditoria",
            icon: "fa-solid fa-magnifying-glass",
            content: "Verificar continuamente a conformidade."

          }

        ]

      },
      {
        type: "heading",
        title: "Sarbanes-Oxley (SOX)"
      },
      {
        type: "paragraph",
        content: `

Após grandes escândalos corporativos, principalmente o caso Enron, o governo norte-americano criou em 2002 a Lei Sarbanes-Oxley.

Seu objetivo foi aumentar a confiabilidade das demonstrações financeiras.

Como praticamente todos os dados financeiros passam por sistemas informatizados, a TI tornou-se peça fundamental para atender essa legislação.

Por esse motivo a SOX é considerada um dos principais fatores que impulsionaram a evolução da Governança de TI.

`
      },
      {
        type: "table",
        title: "Principais requisitos da SOX",
        headers: ["Seção", "Objetivo"],
        rows: [

          ["302", "Responsabilidade dos executivos pelas informações financeiras."],
          ["404", "Avaliação dos controles internos."],
          ["802", "Preservação de documentos e registros."]

        ]
      },
      {
        type: "callout",
        style: "warning",
        title: "Cai bastante em concursos",
        icon: "fa-solid fa-triangle-exclamation",
        content: `

A Seção 404 da SOX exige que a empresa demonstre a eficácia dos seus controles internos.

Como esses controles normalmente dependem da TI, sistemas, acessos, logs e bancos de dados passam a ser auditados.

`
      },
      {
        type: "heading",
        title: "Ética na Governança de TI"
      },
      {
        type: "list",
        items: [

          "Respeito às leis.",
          "Proteção dos dados pessoais.",
          "Uso responsável das informações.",
          "Combate à fraude.",
          "Transparência.",
          "Responsabilidade social.",
          "Sustentabilidade."

        ]
      },
      {
        type: "case",
        title: "Caso para discussão",
        company: "Empresa Beta",
        content: `

Um gerente de TI possui privilégios para alterar dados financeiros do ERP.

Ao mesmo tempo, ele também é responsável por aprovar pagamentos.

Essa situação viola um importante princípio da Governança Corporativa conhecido como Segregação de Funções (Segregation of Duties - SoD).

Caso ocorra uma fraude, dificilmente será detectada.

Como você resolveria esse problema?

`

      },
      {
        type: "exercise",
        title: "Exercício",
        statement: `

Imagine que uma empresa está iniciando um programa de Governança de TI.

Liste pelo menos cinco controles internos que deveriam existir para garantir conformidade.

`

      },
      {
        type: "glossary",
        title: "Glossário",
        terms: [

          {

            term: "Stakeholder",
            definition: "Pessoa ou organização interessada nos resultados da empresa."

          },
          {

            term: "Compliance",
            definition: "Conformidade com leis, normas e regulamentos."

          },
          {

            term: "SOX",
            definition: "Lei americana criada em 2002 para fortalecer controles internos."

          },
          {

            term: "Controle Interno",
            definition: "Procedimento criado para reduzir riscos."

          }

        ]

      },
      {
        type: "faq",
        title: "Perguntas Frequentes",
        questions: [

          {

            question: "SOX vale apenas para empresas americanas?",
            answer: "Legalmente sim. Porém muitas empresas brasileiras listadas em bolsas americanas precisam cumprir seus requisitos. Além disso, seus princípios influenciaram boas práticas utilizadas mundialmente."

          },
          {

            question: "Compliance é responsabilidade apenas do setor jurídico?",
            answer: "Não. Todas as áreas da empresa participam do Compliance, inclusive a TI."

          },
          {

            question: "Uma empresa pequena precisa de Governança?",
            answer: "Sim. A complexidade será menor, mas os princípios permanecem os mesmos."

          }

        ]

      },
      {
        type: "pdgti",
        title: "Aplicando ao PDGTI",
        content: `

Nesta semana seu grupo deverá aprofundar o Capítulo 1 do PDGTI.

Procure responder:

• Quem toma as decisões estratégicas da empresa?

• Existe um CIO?

• Existe Comitê de TI?

• Como a área de TI responde à diretoria?

• Existem políticas formais?

• Quais stakeholders devem ser considerados?

Essas informações serão fundamentais para os próximos capítulos do documento.

`

      },
      {
        type: "summary",
        title: "Resumo da Aula",
        bullets: [

          "Governança de TI deriva da Governança Corporativa.",
          "Compliance significa agir conforme leis e normas.",
          "SOX fortaleceu os controles internos.",
          "A TI participa diretamente da confiabilidade das informações.",
          "Stakeholders influenciam as decisões organizacionais."

        ]

      },
      {
        type: "review",
        title: "Checklist",
        checklist: [

          "Consigo explicar Governança Corporativa.",
          "Entendo o conceito de Compliance.",
          "Sei explicar a importância da SOX.",
          "Consigo identificar stakeholders.",
          "Consegui relacionar esses conceitos ao PDGTI."

        ]

      }

    ]
  },
  {
    id: "mod-03",
    title: "Módulo 3 — Alinhamento Estratégico de TI e Planejamento Estratégico",
    subtitle: "Como garantir que a Tecnologia da Informação trabalhe em favor dos objetivos da organização",
    icon: "fa-solid fa-bullseye",
    estimatedReading: "55 a 70 min",
    difficulty: "Intermediário",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulo 2.",
      "KAPLAN, Robert; NORTON, David. Organização Orientada para Estratégia.",
      "COBIT 2019 - Governance and Management Objectives.",
      "ISO/IEC 38500."
    ],
    learningObjectives: [

      "Compreender o conceito de alinhamento estratégico.",
      "Relacionar objetivos de negócio com objetivos de TI.",
      "Entender a finalidade do PETI.",
      "Identificar mecanismos de decisão em TI.",
      "Aplicar os conceitos no diagnóstico do PDGTI."

    ],
    relatedPDGTI: [
      "Diagnóstico da situação atual",
      "Levantamento das necessidades do negócio",
      "Identificação dos objetivos estratégicos",
      "Mapeamento dos problemas atuais"
    ],
    examTopics: [

      "Alinhamento Estratégico",
      "PETI",
      "Objetivos Estratégicos",
      "Mecanismos de decisão",
      "Planejamento"

    ],
    sections: [
      {
        type: "intro",
        title: "Por que tantos projetos de TI fracassam?",
        content: `

Imagine uma empresa que decide investir milhões de reais em um novo sistema de gestão.

O projeto termina dentro do prazo.

O orçamento foi respeitado.

O software funciona perfeitamente.

Mesmo assim, alguns meses depois, a diretoria conclui que o investimento foi um fracasso.

Como isso é possível?

Porque um projeto pode ser tecnicamente perfeito e, ainda assim, não resolver nenhum problema importante do negócio.

É exatamente esse cenário que o Alinhamento Estratégico procura evitar.

A pergunta deixa de ser:

"Qual tecnologia devemos comprar?"

e passa a ser:

"Quais objetivos estratégicos queremos alcançar?"

A tecnologia passa a ser um meio, nunca um fim.

`

      },
      {
        type: "definition",
        title: "Definição",
        content: `

Alinhamento Estratégico é o processo de garantir que pessoas, processos, investimentos e tecnologias estejam direcionados para apoiar os objetivos estratégicos da organização.

Na Governança de TI, isso significa assegurar que toda decisão relacionada à tecnologia gere benefícios reais para o negócio.

`
      },
      {
        type: "callout",
        style: "primary",
        title: "Ideia-chave",
        icon: "fa-solid fa-lightbulb",
        content: `

A TI não deve criar estratégias.

Ela deve viabilizar a estratégia definida pela organização.

`

      },
      {
        type: "heading",
        title: "A estratégia da empresa"

      },
      {
        type: "paragraph",
        content: `

Toda organização possui um propósito.

Esse propósito normalmente é traduzido em documentos estratégicos como:

• Missão

• Visão

• Valores

• Objetivos Estratégicos

Esses elementos orientam todas as decisões organizacionais.

A Governança de TI garante que a tecnologia caminhe exatamente na mesma direção.

`

      },
      {
        type: "table",
        title: "Dos objetivos ao uso da TI",
        headers: ["Negócio", "Tecnologia"],
        rows: [

          [
            "Expandir vendas",
            "Implantar CRM e Business Intelligence"
          ],
          [
            "Reduzir custos",
            "Automatizar processos"
          ],
          [
            "Melhorar atendimento",
            "Portal do Cliente e Chatbots"
          ],
          [
            "Maior segurança",
            "Controles de acesso e SIEM"
          ],
          [
            "Expandir internacionalmente",
            "Infraestrutura em nuvem"
          ]

        ]

      },
      {
        type: "framework",
        title: "Planejamento Estratégico Empresarial",
        description: "Antes do planejamento de TI existe o planejamento da organização.",
        steps: [

          "Missão",
          "Visão",
          "Valores",
          "Objetivos Estratégicos",
          "Indicadores",
          "Projetos",
          "Resultados"

        ]

      },
      {
        type: "heading",
        title: "PETI - Plano Estratégico de Tecnologia da Informação"

      },
      {
        type: "paragraph",
        content: `

O PETI é o documento que traduz os objetivos estratégicos do negócio em iniciativas de Tecnologia da Informação.

Ele responde perguntas como:

• Quais tecnologias serão necessárias?

• Quais projetos deverão ser executados?

• Quais investimentos serão realizados?

• Quais competências deverão ser desenvolvidas?

O PETI normalmente possui horizonte entre três e cinco anos.

`

      },
      {
        type: "example",
        title: "Exemplo",
        content: `

Objetivo estratégico da empresa:

"Tornar-se líder regional em vendas online."

Desdobramento no PETI:

✔ Modernização do e-commerce

✔ Infraestrutura em nuvem

✔ Implantação de Analytics

✔ Plataforma CRM

✔ Segurança para pagamentos

Observe que a TI não criou o objetivo.

Ela criou iniciativas para alcançá-lo.

`

      },
      {
        type: "process",
        title: "Fluxo do Alinhamento Estratégico",
        steps: [

          "Planejamento Estratégico",
          "Objetivos do Negócio",
          "Objetivos da TI",
          "Projetos de TI",
          "Execução",
          "Indicadores",
          "Resultados"

        ]

      },
      {
        type: "heading",
        title: "Mecanismos de decisão em TI"

      },
      {
        type: "paragraph",
        content: `

Uma Governança eficiente define claramente quem possui autoridade para tomar decisões.

Quanto maior a organização, maior a necessidade de estruturas formais.

Entre os principais mecanismos destacam-se:

`

      },
      {
        type: "cards",
        cards: [

          {

            title: "Comitê de TI",
            icon: "fa-solid fa-users",
            content: "Prioriza investimentos e acompanha resultados."

          },
          {

            title: "CIO",
            icon: "fa-solid fa-user-tie",
            content: "Responsável pela liderança estratégica da TI."

          },
          {

            title: "Políticas",
            icon: "fa-solid fa-file-signature",
            content: "Definem regras institucionais."

          },
          {

            title: "Portfólio",
            icon: "fa-solid fa-briefcase",
            content: "Organiza todos os projetos de TI."

          }

        ]

      },
      {
        type: "didYouKnow",
        title: "Você sabia?",
        content: `

Segundo pesquisas do PMI, um dos principais motivos para o fracasso de projetos não é a tecnologia utilizada, mas a falta de alinhamento com os objetivos estratégicos da organização.

`

      },
      {
        type: "heading",
        title: "Problemas causados pelo desalinhamento"

      },
      {
        type: "list",
        items: [

          "Projetos sem retorno financeiro.",
          "Duplicidade de sistemas.",
          "Baixa satisfação dos usuários.",
          "Custos elevados.",
          "Baixa competitividade.",
          "Desperdício de recursos.",
          "Decisões baseadas em tecnologia e não em estratégia."

        ]

      },
      {
        type: "case",
        title: "Estudo de Caso",
        company: "Hospital Vida",
        content: `

A direção decidiu reduzir o tempo médio de atendimento aos pacientes.

Enquanto isso, o departamento de TI propôs investir em novos servidores para o datacenter.

Embora tecnicamente interessante, esse investimento não resolveria o principal problema do hospital.

Após reuniões entre diretoria e TI, o projeto foi alterado.

Em vez de infraestrutura, decidiu-se implantar um sistema de triagem eletrônica integrado ao prontuário.

Resultado:

• Atendimento mais rápido.

• Redução das filas.

• Melhor experiência dos pacientes.

A tecnologia passou a apoiar diretamente o objetivo estratégico.

`

      },
      {
        type: "commonMistakes",
        title: "Erros comuns",
        mistakes: [

          "Comprar tecnologia antes de identificar necessidades.",
          "Confundir inovação com estratégia.",
          "Executar projetos sem indicadores.",
          "Não envolver a diretoria.",
          "Ignorar prioridades do negócio."

        ]

      },
      {
        type: "exercise",
        title: "Aplicação",
        statement: `

Escolha uma organização (real ou fictícia).

Defina três objetivos estratégicos.

Para cada objetivo proponha duas iniciativas de TI que contribuam diretamente para seu alcance.

Explique por que essas iniciativas estão alinhadas ao negócio.

`

      },
      {
        type: "pdgti",
        title: "Aplicando ao PDGTI",
        content: `

Nesta semana seu grupo iniciará o Capítulo 2.

Antes de propor qualquer solução tecnológica responda:

• Quais são os objetivos estratégicos da organização?

• A TI atual contribui para esses objetivos?

• Existem investimentos que não geram valor?

• Quais problemas mais afetam o negócio?

• Quais oportunidades poderiam ser exploradas?

Esse diagnóstico será utilizado durante praticamente todo o restante do PDGTI.

`

      },
      {
        type: "takeaway",
        title: "O que você deve lembrar desta aula?",
        items: [

          "Estratégia vem antes da tecnologia.",
          "Toda iniciativa de TI deve apoiar objetivos organizacionais.",
          "O PETI traduz estratégia em projetos de TI.",
          "Alinhamento estratégico é um dos pilares da Governança.",
          "Projetos de TI só fazem sentido quando geram valor para o negócio."

        ]

      },
      {
        type: "review",
        title: "Checklist",
        checklist: [

          "Sei explicar o que é Alinhamento Estratégico.",
          "Entendo a finalidade do PETI.",
          "Consigo relacionar objetivos de negócio com iniciativas de TI.",
          "Conheço os principais mecanismos de decisão.",
          "Estou preparado para iniciar o diagnóstico estratégico do PDGTI."

        ]

      }

    ]

  },
  {
    id: "mod-04",
    title: "Módulo 4 — Balanced Scorecard, Portfólio de TI e Estrutura da Governança",
    icon: "fa-solid fa-chart-line",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulos 3 e 4.",
      "KAPLAN, Robert; NORTON, David. A Estratégia em Ação (Balanced Scorecard).",
      "COBIT 2019 – Governance and Management Objectives."
    ],
    learningObjectives: [
      "Compreender como transformar objetivos estratégicos em indicadores.",
      "Construir um Mapa Estratégico utilizando o Balanced Scorecard.",
      "Entender o conceito de Portfólio de TI.",
      "Conhecer mecanismos de decisão em Governança.",
      "Relacionar indicadores de negócio com indicadores de TI."
    ],
    sections: [
      {
        type: "text",
        title: "Por que medir a TI?",
        content: `
Após definir para onde a organização deseja ir, surge uma pergunta inevitável:

**Como saber se a TI realmente está ajudando a empresa?**

A resposta está na medição.

Uma organização somente consegue melhorar aquilo que consegue medir.

Governança de TI depende de indicadores que demonstrem se os investimentos realizados estão produzindo valor.

Sem indicadores, decisões passam a ser baseadas em opiniões.

Com indicadores, decisões passam a ser baseadas em evidências.
`
      },
      {
        type: "callout",
        style: "success",
        title: "Princípio da Governança",
        content: `
A Governança não controla pessoas.

A Governança controla resultados.

Por isso indicadores são tão importantes.
`
      },
      {
        type: "text",
        title: "Balanced Scorecard (BSC)",
        content: `
Criado por Robert Kaplan e David Norton, o Balanced Scorecard é uma metodologia para traduzir a estratégia em objetivos mensuráveis.

Em vez de analisar apenas resultados financeiros, o BSC observa quatro perspectivas diferentes.

Essas perspectivas se influenciam mutuamente.

Aprender → melhorar processos → satisfazer clientes → gerar resultados financeiros.
`
      },
      {
        type: "table",
        title: "As quatro perspectivas do BSC",
        headers: ["Perspectiva", "Pergunta Principal", "Exemplos em TI"],
        rows: [
          [
            "Financeira",
            "Como a TI gera valor financeiro?",
            "Redução de custos, ROI dos projetos, economia com cloud."
          ],
          [
            "Clientes",
            "Como os usuários enxergam a TI?",
            "Satisfação dos usuários, SLA, disponibilidade."
          ],
          [
            "Processos Internos",
            "Quais processos precisam melhorar?",
            "Tempo de atendimento, incidentes, mudanças."
          ],
          [
            "Aprendizado e Crescimento",
            "Como a TI continuará evoluindo?",
            "Treinamentos, inovação, certificações, cultura."
          ]
        ]
      },
      {
        type: "diagram",
        title: "Fluxo lógico do Balanced Scorecard",
        mermaid: `
flowchart LR

A[Aprendizado e Crescimento]

B[Melhoria dos Processos]

C[Satisfação dos Clientes]

D[Resultados Financeiros]

A --> B
B --> C
C --> D
`
      },
      {
        type: "example",
        title: "Exemplo prático",
        content: `
Uma empresa deseja aumentar suas vendas online.

Objetivo estratégico:

"Aumentar em 20% as vendas."

Como a TI contribui?

• Implantação de novo e-commerce
• Melhor desempenho do site
• Segurança nas transações
• Integração com ERP

Agora surgem indicadores.

Financeiro:
• ROI do projeto

Cliente:
• Tempo médio de carregamento
• Satisfação dos usuários

Processos:
• Tempo para corrigir falhas

Aprendizado:
• Equipe treinada em DevOps
`
      },
      {
        type: "text",
        title: "Mapa Estratégico",
        content: `
O Mapa Estratégico é uma representação visual das relações de causa e efeito entre objetivos.

Ele mostra como investimentos em pessoas e tecnologia impactam processos, clientes e resultados financeiros.

É uma ferramenta extremamente utilizada em Planejamento Estratégico de TI.
`
      },
      {
        type: "diagram",
        title: "Exemplo de mapa estratégico",
        mermaid: `
flowchart TD

A[Capacitar Equipe]

B[Melhorar Processos]

C[Melhorar Serviços]

D[Aumentar Satisfação]

E[Gerar Valor]

A --> B
B --> C
C --> D
D --> E
`
      },
      {
        type: "text",
        title: "Portfólio de TI",
        content: `
Nem todo projeto merece investimento.

Uma das funções da Governança é escolher onde investir.

Esse conjunto de projetos recebe o nome de Portfólio de TI.

O objetivo é priorizar aquilo que gera maior valor para a organização.
`
      },
      {
        type: "table",
        title: "Exemplo de Portfólio",
        headers: [
          "Projeto",
          "Valor para o negócio",
          "Complexidade",
          "Prioridade"
        ],
        rows: [
          ["Migração para Cloud", "Alta", "Alta", "Alta"],
          ["Novo ERP", "Muito Alta", "Muito Alta", "Muito Alta"],
          ["Troca de notebooks", "Baixa", "Baixa", "Baixa"],
          ["Implantação de BI", "Alta", "Média", "Alta"]
        ]
      },
      {
        type: "text",
        title: "Mecanismos de decisão",
        content: `
Uma organização madura define claramente quem decide o quê.

Isso evita conflitos.

Também evita desperdício de recursos.

Exemplos de decisões:

• Comprar servidores
• Contratar sistemas
• Priorizar projetos
• Aprovar orçamento
• Definir políticas
• Aceitar riscos
`
      },
      {
        type: "table",
        title: "Exemplo de responsabilidades",
        headers: [
          "Decisão",
          "Responsável"
        ],
        rows: [
          ["Estratégia de TI", "Conselho"],
          ["Orçamento", "Diretoria"],
          ["Projetos", "Comitê de TI"],
          ["Execução", "Gerência de TI"]
        ]
      },
      {
        type: "callout",
        style: "warning",
        title: "Erro comum",
        content: `
Muitas empresas escolhem projetos porque alguém "acha importante".

Na Governança isso não acontece.

Projetos são escolhidos por critérios previamente definidos.
`
      },
      {
        type: "framework",
        title: "Onde isso aparece no COBIT?",
        items: [
          "EDM02 — Garantir Entrega de Benefícios",
          "APO05 — Gerenciar Portfólio",
          "APO06 — Gerenciar Orçamento",
          "APO02 — Gerenciar Estratégia",
          "MEA01 — Monitorar Desempenho"
        ]
      },
      {
        type: "pdgti",
        title: "Aplicação no PDGTI",
        content: `
Nesta semana os grupos deverão produzir o Capítulo 3 do PDGTI.

O documento deverá conter:

• Objetivos estratégicos da organização

• Objetivos estratégicos da TI

• Mapa Estratégico

• Balanced Scorecard

• Portfólio de Projetos

• Critérios de priorização

• Relação entre objetivos do negócio e objetivos da TI
`
      },
      {
        type: "reflection",
        title: "Questões para reflexão",
        questions: [
          "Toda empresa precisa medir resultados da TI?",
          "É possível justificar investimentos sem indicadores?",
          "Como saber se um projeto realmente agregou valor?",
          "Quais indicadores você utilizaria para medir uma universidade?",
          "Quais indicadores mediriam uma startup?"
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana",
        items: [
          "Balanced Scorecard transforma estratégia em indicadores.",
          "Mapa Estratégico mostra relações de causa e efeito.",
          "Portfólio ajuda a escolher projetos prioritários.",
          "Governança decide onde investir.",
          "Indicadores permitem acompanhar geração de valor."
        ]
      }
    ]
  },
  {
    id: "mod-05",
    title: "Módulo 5 — Estrutura Organizacional da Governança de TI, Políticas Corporativas e Mecanismos de Decisão",
    icon: "fa-solid fa-sitemap",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulos 4 e 5.",
      "COBIT 2019 – Governance and Management Objectives.",
      "ISO/IEC 38500:2015."
    ],
    learningObjectives: [
      "Compreender como a Governança é estruturada dentro das organizações.",
      "Conhecer papéis e responsabilidades da Alta Administração, Comitês e TI.",
      "Entender a importância das políticas corporativas.",
      "Construir uma matriz RACI.",
      "Definir mecanismos formais para tomada de decisão."
    ],
    sections: [
      {
        type: "text",
        title: "Da estratégia para a organização",
        content: `
Nas semanas anteriores aprendemos como definir objetivos estratégicos e indicadores.

Agora surge uma pergunta igualmente importante:

Quem garante que tudo isso será realmente executado?

A resposta está na estrutura de Governança.

Governança não depende apenas de boas ideias.

Ela depende de pessoas, responsabilidades, processos e regras claramente definidos.

Quando todos sabem exatamente suas atribuições, as decisões tornam-se mais rápidas, transparentes e alinhadas aos objetivos organizacionais.
`
      },
      {
        type: "callout",
        style: "success",
        title: "Princípio da Governança",
        content: `
Governança eficiente não significa centralizar decisões.

Significa definir claramente QUEM decide, O QUE decide e ATÉ ONDE pode decidir.
`
      },
      {
        type: "text",
        title: "Estrutura Organizacional da Governança de TI",
        content: `
Embora cada organização possua características próprias, existe uma estrutura considerada referência.

As decisões estratégicas permanecem com a Alta Administração.

A Governança atua como elo entre o negócio e a área de Tecnologia.

Já a Gestão executa aquilo que foi definido estrategicamente.
`
      },
      {
        type: "diagram",
        title: "Estrutura simplificada de Governança",
        mermaid: `
flowchart TD

A[Conselho de Administração]

A --> B[Comitê Executivo]

B --> C[Comitê Estratégico de TI]

C --> D[CIO]

D --> E[Gerência de TI]

E --> F[Equipes Técnicas]
`
      },
      {
        type: "table",
        title: "Papéis da Governança",
        headers: [
          "Nível",
          "Responsabilidade Principal"
        ],
        rows: [
          [
            "Conselho",
            "Direcionar estrategicamente a organização."
          ],
          [
            "Diretoria",
            "Definir prioridades e investimentos."
          ],
          [
            "Comitê de TI",
            "Avaliar projetos, riscos e indicadores."
          ],
          [
            "CIO",
            "Transformar decisões estratégicas em ações."
          ],
          [
            "Gerentes",
            "Planejar e executar processos."
          ],
          [
            "Equipe Técnica",
            "Executar atividades operacionais."
          ]
        ]
      },
      {
        type: "text",
        title: "O Comitê Estratégico de TI",
        content: `
O Comitê Estratégico de TI é considerado um dos principais mecanismos de Governança.

Seu objetivo não é resolver problemas técnicos.

Seu objetivo é tomar decisões estratégicas relacionadas à tecnologia.

Normalmente participam:

• Diretor Executivo

• Diretor Financeiro

• Diretor de Operações

• CIO

• Gestores das áreas de negócio

As reuniões costumam ocorrer mensalmente ou trimestralmente.
`
      },
      {
        type: "table",
        title: "Exemplos de decisões do Comitê",
        headers: [
          "Decisão",
          "Exemplo"
        ],
        rows: [
          [
            "Investimentos",
            "Aprovar implantação de ERP."
          ],
          [
            "Prioridades",
            "Escolher quais projetos iniciar."
          ],
          [
            "Riscos",
            "Aceitar ou mitigar riscos críticos."
          ],
          [
            "Políticas",
            "Aprovar Política de Segurança."
          ],
          [
            "Indicadores",
            "Avaliar desempenho da TI."
          ]
        ]
      },
      {
        type: "text",
        title: "Políticas Corporativas",
        content: `
Uma política é um documento institucional que estabelece regras gerais para determinado assunto.

Ela orienta comportamentos, reduz ambiguidades e aumenta a padronização.

Na Governança, políticas são instrumentos fundamentais.

Elas garantem que todos atuem segundo os mesmos princípios.
`
      },
      {
        type: "table",
        title: "Principais políticas de TI",
        headers: [
          "Política",
          "Objetivo"
        ],
        rows: [
          [
            "Segurança da Informação",
            "Proteger ativos e dados."
          ],
          [
            "Uso Aceitável",
            "Definir regras de utilização dos recursos."
          ],
          [
            "Backup",
            "Garantir recuperação das informações."
          ],
          [
            "Controle de Acesso",
            "Regular permissões dos usuários."
          ],
          [
            "Aquisição de TI",
            "Padronizar compras de tecnologia."
          ],
          [
            "Gestão de Mudanças",
            "Controlar alterações em produção."
          ]
        ]
      },
      {
        type: "callout",
        style: "info",
        title: "Política não é procedimento",
        content: `
Uma Política responde:

"O que deve ser seguido."

Um Procedimento responde:

"Como isso será realizado."

Já uma Instrução de Trabalho detalha cada etapa operacional.
`
      },
      {
        type: "text",
        title: "Matriz RACI",
        content: `
Uma das ferramentas mais utilizadas para definir responsabilidades é a Matriz RACI.

Ela evita conflitos, sobreposição de funções e ausência de responsáveis.

Cada atividade possui quatro possíveis papéis.
`
      },
      {
        type: "table",
        title: "Modelo RACI",
        headers: [
          "Sigla",
          "Significado",
          "Função"
        ],
        rows: [
          [
            "R",
            "Responsible",
            "Executa a atividade."
          ],
          [
            "A",
            "Accountable",
            "Responsável final pela entrega."
          ],
          [
            "C",
            "Consulted",
            "É consultado antes da decisão."
          ],
          [
            "I",
            "Informed",
            "Recebe comunicação após a decisão."
          ]
        ]
      },
      {
        type: "example",
        title: "Exemplo simplificado de RACI",
        content: `
Atividade:
Implantar novo ERP.

Diretoria:
A

CIO:
R

Financeiro:
C

Usuários:
I
`
      },
      {
        type: "text",
        title: "Mecanismos de decisão",
        content: `
Uma boa Governança estabelece critérios objetivos para tomada de decisão.

Alguns exemplos:

• Valor para o negócio

• Risco

• Custo

• Retorno esperado

• Alinhamento estratégico

• Impacto regulatório

Esses critérios evitam decisões baseadas apenas em preferências pessoais.
`
      },
      {
        type: "framework",
        title: "Relacionamento com o COBIT",
        items: [
          "EDM01 — Garantir a Estrutura de Governança.",
          "APO01 — Gerenciar o Framework de Gestão.",
          "APO07 — Gerenciar Recursos Humanos.",
          "APO08 — Gerenciar Relacionamentos.",
          "APO13 — Gerenciar Segurança."
        ]
      },
      {
        type: "pdgti",
        title: "Aplicação no PDGTI",
        content: `
Ao final desta semana os grupos deverão concluir a Entrega Parcial 1.

O documento deverá conter:

• Caracterização da organização

• Diagnóstico da TI

• Objetivos estratégicos

• Balanced Scorecard

• Estrutura da Governança

• Organograma

• Comitê Estratégico

• Matriz RACI

• Políticas iniciais de TI

• Critérios de decisão
`
      },
      {
        type: "reflection",
        title: "Questões para discussão",
        questions: [
          "Quem deveria participar do Comitê de TI em uma pequena empresa?",
          "É possível existir Governança sem políticas formais?",
          "Toda decisão tecnológica deveria passar pelo Comitê?",
          "Quais riscos surgem quando não existe definição clara de responsabilidades?",
          "Como uma Matriz RACI pode reduzir conflitos entre áreas?"
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana",
        items: [
          "Governança depende de uma estrutura organizacional clara.",
          "O Comitê Estratégico de TI é um dos principais mecanismos de Governança.",
          "Políticas corporativas orientam comportamentos e decisões.",
          "A Matriz RACI define responsabilidades de forma objetiva.",
          "Critérios formais tornam a tomada de decisão mais transparente.",
          "Entrega Parcial 1 do PDGTI consolida os quatro primeiros capítulos do projeto."
        ]
      }

    ]
  },
  {
    id: "mod-06",
    title: "Módulo 6 — Geração de Valor, Gestão de Recursos e Relacionamento com Stakeholders",
    icon: "fa-solid fa-handshake",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulos 5 e 6.",
      "COBIT 2019 – Governance System and Components.",
      "ISO/IEC 38500:2015.",
      "VAL IT (ISACA)."
    ],
    learningObjectives: [
      "Compreender o conceito de geração de valor pela TI.",
      "Entender como ocorre a gestão de recursos de TI.",
      "Conhecer os principais stakeholders da Governança.",
      "Relacionar investimentos de TI aos benefícios esperados.",
      "Consolidar os conhecimentos para a primeira avaliação."
    ],
    sections: [
      {
        type: "text",
        title: "A finalidade da Governança",
        content: `
Após estudar estratégia, indicadores, políticas e estruturas organizacionais, surge uma pergunta fundamental:

**Por que existe Governança de TI?**

A resposta é simples:

Gerar valor para a organização.

Nenhuma empresa investe milhões em tecnologia para possuir servidores modernos ou softwares sofisticados.

Ela investe para aumentar receitas, reduzir custos, minimizar riscos e criar vantagens competitivas.

Tecnologia é um meio.

Valor é o objetivo.
`
      },
      {
        type: "callout",
        style: "success",
        title: "A principal missão da Governança",
        content: `
Toda decisão sobre TI deve responder uma pergunta:

"Como esta decisão gera valor para o negócio?"
`
      },
      {
        type: "text",
        title: "O conceito de Valor",
        content: `
Valor não significa apenas lucro financeiro.

Dependendo da organização, valor pode significar:

• aumento da satisfação dos clientes;

• maior segurança da informação;

• redução de riscos;

• conformidade legal;

• inovação;

• melhoria da imagem institucional;

• maior produtividade;

• continuidade do negócio.
`
      },
      {
        type: "table",
        title: "Exemplos de geração de valor",
        headers: [
          "Investimento em TI",
          "Valor esperado"
        ],
        rows: [
          [
            "Implantar ERP",
            "Integração dos processos e redução de retrabalho."
          ],
          [
            "Business Intelligence",
            "Melhores decisões gerenciais."
          ],
          [
            "Backup em nuvem",
            "Continuidade do negócio."
          ],
          [
            "Firewall",
            "Redução dos riscos de segurança."
          ],
          [
            "Portal do Cliente",
            "Melhoria da experiência do usuário."
          ]
        ]
      },
      {
        type: "text",
        title: "Os recursos da Governança de TI",
        content: `
A Governança administra muito mais do que computadores.

Ela coordena diversos recursos organizacionais.

Esses recursos precisam ser utilizados da forma mais eficiente possível.
`
      },
      {
        type: "table",
        title: "Recursos de TI",
        headers: [
          "Recurso",
          "Exemplos"
        ],
        rows: [
          [
            "Pessoas",
            "Analistas, desenvolvedores, gestores."
          ],
          [
            "Informação",
            "Bases de dados, documentos, conhecimento."
          ],
          [
            "Infraestrutura",
            "Servidores, redes, cloud."
          ],
          [
            "Aplicações",
            "ERP, CRM, sistemas internos."
          ],
          [
            "Investimentos",
            "Orçamento, contratos, licenças."
          ]
        ]
      },
      {
        type: "callout",
        style: "warning",
        title: "Erro comum",
        content: `
Muitas organizações acreditam que Governança de TI administra apenas infraestrutura.

Na realidade, ela administra recursos que geram valor para o negócio.
`
      },
      {
        type: "text",
        title: "Stakeholders",
        content: `
Outro conceito importante é o de Stakeholder.

Stakeholders são todas as partes interessadas que podem influenciar ou ser impactadas pelas decisões da organização.

Cada grupo possui expectativas diferentes em relação à TI.
`
      },
      {
        type: "table",
        title: "Principais stakeholders",
        headers: [
          "Stakeholder",
          "Interesse"
        ],
        rows: [
          [
            "Conselho",
            "Retorno dos investimentos."
          ],
          [
            "Diretoria",
            "Resultados estratégicos."
          ],
          [
            "Clientes",
            "Serviços confiáveis."
          ],
          [
            "Funcionários",
            "Ferramentas eficientes."
          ],
          [
            "Fornecedores",
            "Relacionamentos sustentáveis."
          ],
          [
            "Órgãos reguladores",
            "Conformidade."
          ]
        ]
      },
      {
        type: "text",
        title: "Relacionamento com clientes e usuários",
        content: `
A Governança busca aproximar a TI das áreas de negócio.

A TI deixa de atuar apenas como suporte técnico e passa a ser parceira estratégica.

Isso exige comunicação constante entre:

• usuários;

• gestores;

• equipes técnicas;

• diretoria.

Quanto melhor esse relacionamento, maior será o alinhamento estratégico.
`
      },
      {
        type: "text",
        title: "Relacionamento com fornecedores",
        content: `
Grande parte dos serviços de TI depende de fornecedores externos.

Cloud Computing.

ERP.

Internet.

Equipamentos.

Consultorias.

A Governança estabelece critérios para seleção, contratação, monitoramento e avaliação desses parceiros.

Não basta contratar.

É necessário acompanhar desempenho, qualidade e riscos.
`
      },
      {
        type: "framework",
        title: "Onde isso aparece no COBIT?",
        items: [
          "EDM02 — Garantir Entrega de Benefícios.",
          "EDM04 — Garantir Otimização dos Recursos.",
          "APO08 — Gerenciar Relacionamentos.",
          "APO10 — Gerenciar Fornecedores.",
          "APO09 — Gerenciar Acordos de Serviço."
        ]
      },
      {
        type: "example",
        title: "Caso para discussão",
        content: `
Uma universidade decide investir R$ 3 milhões em um novo sistema acadêmico.

Após um ano:

• o sistema funciona perfeitamente;

• nenhum professor utiliza os recursos;

• os alunos continuam reclamando;

• os processos continuam lentos.

Pergunta:

O projeto foi um sucesso tecnológico.

Mas foi um sucesso de Governança?

Justifique sua resposta.
`
      },
      {
        type: "text",
        title: "Preparação para a Prova 1",
        content: `
Até este momento da disciplina você já estudou:

• Governança de TI

• Governança Corporativa

• Compliance

• SOX

• Alinhamento Estratégico

• PETI

• Balanced Scorecard

• Portfólio

• Estrutura Organizacional

• Comitês

• Políticas

• Matriz RACI

• Valor

• Recursos

• Stakeholders

Todos esses conceitos estão diretamente relacionados e fazem parte do ciclo da Governança.
`
      },
      {
        type: "activity",
        title: "Atividade do Projeto Integrador",
        estimatedTime: "50 minutos",
        instructions: `
Durante a Semana do Projeto Integrador cada grupo deverá revisar criticamente os quatro primeiros capítulos do PDGTI.

Verifique especialmente:

• coerência entre objetivos estratégicos;

• alinhamento entre negócio e TI;

• indicadores do BSC;

• estrutura organizacional;

• papéis da Matriz RACI;

• políticas propostas.

Ao final, elabore uma lista das melhorias identificadas antes da Entrega Final.
`,
        deliverable: "Checklist de revisão do PDGTI."
      },
      {
        type: "reflection",
        title: "Questões para reflexão",
        questions: [
          "Toda tecnologia gera valor?",
          "Quem define o que é valor para uma organização?",
          "Como medir valor em uma universidade pública?",
          "Um projeto pode ser tecnicamente perfeito e fracassar para o negócio?",
          "Qual stakeholder costuma ser mais negligenciado pelas organizações?"
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana",
        items: [
          "A finalidade da Governança é gerar valor para o negócio.",
          "Valor não significa apenas retorno financeiro.",
          "A Governança administra pessoas, processos, informação, infraestrutura e investimentos.",
          "Stakeholders possuem interesses diferentes e precisam ser considerados nas decisões.",
          "O relacionamento entre TI, usuários e fornecedores influencia diretamente o sucesso da Governança.",
          "Esta semana consolida os principais conceitos antes da primeira avaliação."
        ]
      }

    ]
  },
  {
    id: "mod-07",
    title: "Módulo 7 — Governança Corporativa de TI — ISO/IEC 38500 e COBIT 2019",
    icon: "fa-solid fa-landmark",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulos 5 e 6.",
      "ISACA. COBIT 2019 Framework: Introduction and Methodology.",
      "ISO/IEC 38500:2015 - Governance of IT for the Organization."
    ],
    objective: `
Compreender como a alta administração governa a Tecnologia da Informação,
quais responsabilidades pertencem ao Conselho de Administração e quais pertencem
à gestão executiva de TI. Ao final da aula o estudante deverá ser capaz de
selecionar mecanismos de governança apropriados para sua organização e justificar
a utilização da ISO/IEC 38500 e do COBIT no PDGTI.
`,
    sections: [
      {
        title: "1. Por que existem Frameworks de Governança?",
        type: "content",
        html: `
<p>
Até este momento da disciplina construímos o diagnóstico da organização,
identificamos problemas, definimos objetivos estratégicos e criamos indicadores.
Agora surge uma pergunta natural:
</p>

<blockquote>
Como garantir que tudo isso continue funcionando daqui para frente?
</blockquote>

<p>
A resposta está na Governança.
Frameworks como a ISO/IEC 38500 e o COBIT não ensinam apenas processos.
Eles definem <strong>como as decisões devem ser tomadas</strong>,
quem possui autoridade para decidir e como verificar se a TI realmente gera valor
para o negócio.
</p>

<div class="callout callout-info">
<strong>Importante</strong><br>
Governança não significa controlar computadores.
Governança significa controlar decisões.
</div>
`
      },
      {
        title: "2. Governança x Gestão (revisão aprofundada)",
        type: "table",
        headers: ["Governança", "Gestão"],
        rows: [
          ["Define direção estratégica", "Executa a estratégia"],
          ["Avalia resultados", "Entrega resultados"],
          ["Decide investimentos", "Gerencia projetos"],
          ["Controla riscos", "Opera controles"],
          ["Alta administração", "Gerentes e equipes técnicas"],
          ["Longo prazo", "Curto e médio prazo"]
        ]
      },
      {
        title: "3. ISO/IEC 38500",
        type: "content",
        html: `
<p>
A ISO/IEC 38500 é uma norma internacional publicada para orientar a alta
administração sobre como utilizar a Tecnologia da Informação de maneira ética,
eficiente e alinhada aos objetivos da organização.
</p>

<p>
Ela não define processos detalhados.
Seu foco é orientar os dirigentes sobre o papel da Governança.
</p>
`
      },
      {
        title: "4. Os seis princípios da ISO/IEC 38500",
        type: "cards",
        cards: [

          {
            title: "Responsabilidade",
            text: "Todos devem compreender claramente suas responsabilidades relacionadas à TI."
          },
          {
            title: "Estratégia",
            text: "A TI deve apoiar diretamente os objetivos estratégicos da organização."
          },
          {
            title: "Aquisição",
            text: "Os investimentos em TI precisam gerar benefícios claramente identificáveis."
          },
          {
            title: "Desempenho",
            text: "Os serviços de TI devem entregar qualidade, disponibilidade e eficiência."
          },
          {
            title: "Conformidade",
            text: "A TI deve atender às leis, normas, contratos e políticas internas."
          },
          {
            title: "Comportamento Humano",
            text: "As decisões de TI devem considerar pessoas, cultura organizacional e gestão da mudança."
          }

        ]
      },
      {
        title: "5. O modelo EDM",
        type: "diagram",
        html: `
<div class="diagram">

Avaliar (Evaluate)
⬇

Dirigir (Direct)
⬇

Monitorar (Monitor)

</div>

<p>
Todo processo de Governança pode ser resumido nessas três atividades.
</p>

<ul>
<li><strong>Evaluate:</strong> analisar necessidades do negócio.</li>
<li><strong>Direct:</strong> estabelecer políticas e direcionamentos.</li>
<li><strong>Monitor:</strong> verificar se os resultados estão sendo alcançados.</li>
</ul>
`
      },
      {
        title: "6. COBIT 2019",
        type: "content",
        html: `
<p>
Enquanto a ISO/IEC 38500 responde <strong>"o que deve ser feito"</strong>,
o COBIT responde <strong>"como organizar essa Governança".</strong>
</p>

<p>
O COBIT é atualmente o framework mais utilizado para Governança e Gestão de TI.
Foi desenvolvido pela ISACA e organiza os objetivos de governança e gestão em
domínios claramente definidos.
</p>
`
      },
      {
        title: "7. Estrutura do COBIT",
        type: "table",
        headers: ["Domínio", "Objetivo"],
        rows: [
          ["EDM", "Avaliar, Dirigir e Monitorar"],
          ["APO", "Alinhar, Planejar e Organizar"],
          ["BAI", "Construir, Adquirir e Implementar"],
          ["DSS", "Entregar, Serviços e Suporte"],
          ["MEA", "Monitorar, Avaliar e Analisar"]
        ]
      },
      {
        title: "8. COBIT x ISO 38500",
        type: "comparison",
        leftTitle: "ISO/IEC 38500",
        rightTitle: "COBIT 2019",
        left: [
          "Norma internacional",
          "Voltada ao Conselho",
          "Princípios",
          "Poucos detalhes operacionais",
          "Foco em Governança"
        ],
        right: [
          "Framework ISACA",
          "Voltado à Governança e Gestão",
          "Objetivos e práticas",
          "Grande detalhamento",
          "Pode ser implementado"
        ]
      },
      {
        title: "9. Exemplo prático",
        type: "case",
        html: `
<h4>Caso: Hospital Vida+</h4>

<p>
O hospital pretende investir R$ 8 milhões em um novo prontuário eletrônico.
Quem decide?
</p>

<ul>
<li>A equipe de TI escolhe o fornecedor?</li>
<li>O diretor financeiro aprova sozinho?</li>
<li>Quem assume os riscos?</li>
</ul>

<p>
Pela ISO 38500, a Alta Administração deve avaliar o investimento,
definir diretrizes e acompanhar os resultados.
O COBIT fornece os mecanismos para transformar essa decisão em processos,
controles, indicadores e responsabilidades.
</p>
`
      },
      {
        title: "10. Aplicação no PDGTI",
        type: "activity",
        html: `
<h4>Capítulo 7 — Frameworks de Governança</h4>

<p>O grupo deverá justificar:</p>

<ul>

<li>Por que escolheu utilizar o COBIT?</li>

<li>Quais princípios da ISO/IEC 38500 serão adotados?</li>

<li>Quais domínios do COBIT serão mais importantes para a empresa estudada?</li>

<li>Como essas escolhas apoiam os objetivos estratégicos definidos anteriormente?</li>

</ul>
`
      },
      {
        title: "11. Resumo da Aula",
        type: "summary",
        items: [
          "Governança define direção.",
          "Gestão executa as decisões.",
          "ISO/IEC 38500 orienta a alta administração.",
          "COBIT organiza Governança e Gestão.",
          "EDM representa o núcleo da Governança.",
          "Frameworks devem ser escolhidos conforme o contexto organizacional."
        ]
      },
      {
        title: "12. Leituras Recomendadas",
        type: "reading",
        items: [
          "Fernandes & Abreu — Capítulos 5 e 6",
          "COBIT 2019 Framework Overview",
          "ISO/IEC 38500:2015",
          "ISACA — Governance versus Management"
        ]
      }

    ]
  },
  {
    id: "mod-08",
    title: "Módulo 8 — Gestão de Serviços de TI — ITIL 4 e ISO/IEC 20000",
    icon: "fa-solid fa-headset",
    bibliography: [
      "FREITAS, Marcos André dos Santos. Fundamentos do Gerenciamento de Serviços de TI. 2. ed.",
      "ITIL® 4 Foundation.",
      "ISO/IEC 20000-1:2018 - Information Technology - Service Management."
    ],
    objective: `
Compreender que o objetivo da TI não é apenas operar infraestrutura ou desenvolver
software, mas entregar serviços que gerem valor ao negócio. Ao final desta aula,
o estudante deverá compreender os princípios do ITIL 4, o conceito de Sistema de
Valor de Serviço (SVS), o papel das principais práticas de gerenciamento de serviços
e a relação entre ITIL e a norma ISO/IEC 20000.
`,
    sections: [
      {
        title: "1. O que é um Serviço de TI?",
        type: "content",
        html: `
<p>
Uma das maiores mudanças promovidas pelo ITIL foi alterar a forma como enxergamos a TI.
Em vez de pensar em servidores, computadores ou sistemas, devemos pensar em
<strong>serviços que entregam valor aos clientes</strong>.
</p>

<blockquote>
Um serviço é um meio de possibilitar a criação de valor para o cliente,
facilitando os resultados que ele deseja alcançar sem que precise gerenciar
custos e riscos específicos.
</blockquote>

<p>
Quando um colaborador acessa seu e-mail corporativo, abre um ERP ou solicita suporte
ao Service Desk, ele não está utilizando um computador: ele está consumindo um
<strong>serviço de TI</strong>.
</p>

<div class="callout callout-info">
<strong>Exemplo:</strong><br>
O usuário não quer um servidor funcionando.
Ele quer conseguir emitir uma nota fiscal.
</div>
`
      },
      {
        title: "2. Governança x Gestão de Serviços",
        type: "table",
        headers: ["Governança", "Gestão de Serviços"],
        rows: [
          ["Define objetivos estratégicos", "Entrega os serviços"],
          ["Decide investimentos", "Opera processos"],
          ["Controla riscos", "Executa atividades diárias"],
          ["Conselho e Diretoria", "Equipe de TI"],
          ["COBIT / ISO 38500", "ITIL / ISO 20000"]
        ]
      },
      {
        title: "3. O ITIL 4",
        type: "content",
        html: `
<p>
O ITIL (Information Technology Infrastructure Library) é o framework mais utilizado
no mundo para Gerenciamento de Serviços de TI (ITSM).
</p>

<p>
Sua principal mudança na versão 4 foi abandonar uma visão extremamente baseada em
processos para focar na <strong>co-criação de valor</strong> entre organização,
clientes, usuários e parceiros.
</p>

<div class="callout callout-success">
O foco deixou de ser "gerenciar infraestrutura" e passou a ser "entregar valor".
</div>
`
      },
      {
        title: "4. Os Sete Princípios do ITIL 4",
        type: "cards",
        cards: [

          {
            title: "Foque no Valor",
            text: "Toda atividade deve gerar valor para clientes e organização."
          },
          {
            title: "Comece Onde Está",
            text: "Antes de mudar processos, aproveite aquilo que já funciona."
          },
          {
            title: "Progrida Iterativamente",
            text: "Pequenas melhorias contínuas produzem melhores resultados."
          },
          {
            title: "Colabore e Promova Visibilidade",
            text: "A comunicação entre áreas reduz retrabalho."
          },
          {
            title: "Pense e Trabalhe Holisticamente",
            text: "Os serviços dependem da integração entre pessoas, processos e tecnologia."
          },
          {
            title: "Mantenha Simples",
            text: "Evite burocracias desnecessárias."
          },
          {
            title: "Otimize e Automatize",
            text: "Automatize atividades repetitivas sempre que possível."
          }

        ]
      },
      {
        title: "5. Sistema de Valor de Serviço (SVS)",
        type: "diagram",
        html: `
<div class="diagram">

Oportunidade / Demanda

↓

Governança

↓

Cadeia de Valor

↓

Práticas ITIL

↓

Melhoria Contínua

↓

Valor

</div>

<p>
Todo o ITIL gira em torno da geração de valor para clientes e organização.
</p>
`
      },
      {
        title: "6. As principais práticas do ITIL",
        type: "table",
        headers: ["Prática", "Objetivo"],
        rows: [
          ["Gerenciamento de Incidentes", "Restabelecer rapidamente o serviço."],
          ["Gerenciamento de Problemas", "Eliminar causas raiz dos incidentes."],
          ["Gerenciamento de Mudanças", "Controlar alterações em produção."],
          ["Gerenciamento de Requisições", "Atender solicitações rotineiras."],
          ["Gerenciamento de Configuração", "Controlar ativos e relacionamentos."],
          ["Gerenciamento de Nível de Serviço", "Garantir cumprimento dos SLAs."]
        ]
      },
      {
        title: "7. O que é SLA?",
        type: "content",
        html: `
<p>
O SLA (Service Level Agreement) representa o acordo entre o provedor do serviço e
o cliente sobre os níveis mínimos aceitáveis de qualidade.
</p>

<p>
Um SLA normalmente estabelece indicadores como:
</p>

<ul>

<li>Disponibilidade do serviço;</li>

<li>Tempo máximo de atendimento;</li>

<li>Tempo máximo de solução;</li>

<li>Tempo de resposta;</li>

<li>Percentual mínimo de disponibilidade.</li>

</ul>

<div class="callout callout-warning">
Sem indicadores não existe gestão de serviços.
</div>
`
      },
      {
        title: "8. ISO/IEC 20000",
        type: "content",
        html: `
<p>
Enquanto o ITIL apresenta boas práticas,
a ISO/IEC 20000 é uma norma certificável para Sistemas de Gestão de Serviços de TI.
</p>

<p>
Pode-se dizer que o ITIL mostra "como trabalhar" e a ISO 20000 define
os requisitos necessários para demonstrar maturidade e conformidade.
</p>
`
      },
      {
        title: "9. ITIL x ISO/IEC 20000",
        type: "comparison",
        leftTitle: "ITIL",
        rightTitle: "ISO/IEC 20000",
        left: [
          "Framework",
          "Boas práticas",
          "Não certifica organizações",
          "Flexível",
          "Base para implantação"
        ],
        right: [
          "Norma internacional",
          "Requisitos obrigatórios",
          "Permite certificação",
          "Auditável",
          "Comprova maturidade"
        ]
      },
      {
        title: "10. Estudo de Caso",
        type: "case",
        html: `
<h4>Empresa Alfa</h4>

<p>
A equipe de TI recebe dezenas de chamados por dia.
Cada técnico resolve os problemas de maneira diferente.
Não existe histórico, classificação dos incidentes nem definição de prioridade.
Os usuários reclamam da demora e a diretoria não consegue medir a qualidade do suporte.
</p>

<p>
Como o ITIL poderia melhorar essa situação?
</p>

<ul>

<li>Criar um catálogo de serviços.</li>

<li>Implantar um Service Desk.</li>

<li>Definir SLAs.</li>

<li>Padronizar o gerenciamento de incidentes.</li>

<li>Registrar indicadores de desempenho.</li>

</ul>
`
      },
      {
        title: "11. Aplicação no PDGTI",
        type: "activity",
        html: `
<h4>Capítulo 7 do PDGTI</h4>

<p>O grupo deverá definir:</p>

<ul>

<li>Quais serviços de TI serão considerados críticos.</li>

<li>Quais processos do ITIL serão adotados.</li>

<li>Quais SLAs serão estabelecidos.</li>

<li>Como será medido o desempenho dos serviços.</li>

<li>Como a ISO/IEC 20000 contribuirá para a organização.</li>

</ul>
`
      },
      {
        title: "12. Erros comuns",
        type: "tips",
        items: [
          "Confundir incidente com problema.",
          "Implantar ITIL inteiro de uma vez.",
          "Criar processos excessivamente burocráticos.",
          "Não definir SLAs mensuráveis.",
          "Medir apenas quantidade de chamados."
        ]
      },
      {
        title: "13. Resumo da Aula",
        type: "summary",
        items: [
          "TI entrega serviços, não tecnologia.",
          "Valor é o principal objetivo do ITIL.",
          "O SVS integra todas as atividades do ITIL.",
          "Incidentes restauram serviços; problemas eliminam causas.",
          "SLAs definem níveis de serviço.",
          "A ISO/IEC 20000 certifica Sistemas de Gestão de Serviços."
        ]
      },
      {
        title: "14. Leituras Recomendadas",
        type: "reading",
        items: [
          "Freitas - Fundamentos do Gerenciamento de Serviços de TI",
          "ITIL 4 Foundation",
          "ISO/IEC 20000-1",
          "AXELOS - ITIL Practices"
        ]
      }

    ]
  },
  {
    id: "mod-09",
    title: "Módulo 9 — Frameworks de Governança de TI: ISO/IEC 38500, COBIT 2019, ITIL 4 e ISO/IEC 20000",
    icon: "fa-solid fa-layer-group",
    learningObjectives: [
      "Compreender a finalidade dos principais frameworks e normas de Governança de TI.",
      "Diferenciar governança, gestão e gerenciamento de serviços.",
      "Selecionar frameworks adequados para diferentes contextos organizacionais.",
      "Justificar tecnicamente a adoção dos modelos no PDGTI."
    ],
    bibliography: {
      required: [
        "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulos 6 e 7.",
        "ISO/IEC 38500.",
        "COBIT 2019 Framework.",
        "ITIL 4 Foundation."
      ],
      complementary: [
        "ISO/IEC 20000.",
        "ISACA - COBIT Design Guide."
      ]
    },
    sections: [
      {
        type: "concept",
        title: "Por que existem tantos Frameworks?",
        content: `
        Um dos maiores erros em Governança de TI é acreditar que existe um único
        modelo capaz de resolver todos os problemas de uma organização.

        Cada framework foi criado para resolver um tipo específico de problema.

        Alguns focam em governança.

        Outros focam em gestão.

        Outros tratam exclusivamente da operação dos serviços.

        Outros definem requisitos para certificação.

        O papel do gestor de TI é combinar esses modelos de forma coerente.
      `
      },
      {
        type: "callout",
        style: "info",
        title: "Não existe concorrência entre eles",
        content: `
ISO 38500 → Governança

COBIT → Governança + Gestão

ITIL → Gestão de Serviços

ISO 20000 → Certificação dos Serviços

Todos podem coexistir na mesma organização.
      `
      },
      {
        type: "table",
        title: "Comparando os principais modelos",
        headers: [
          "Framework",
          "Objetivo",
          "Foco",
          "Público"
        ],
        rows: [
          [
            "ISO/IEC 38500",
            "Governança Corporativa de TI",
            "Estratégico",
            "Conselho e Diretoria"
          ],
          [
            "COBIT 2019",
            "Governança e Gestão",
            "Estratégico/Tático",
            "Executivos e Gestores"
          ],
          [
            "ITIL 4",
            "Gerenciamento de Serviços",
            "Operacional",
            "Equipe de TI"
          ],
          [
            "ISO 20000",
            "Sistema de Gestão de Serviços",
            "Certificação",
            "Organização"
          ]
        ]
      },
      {
        type: "concept",
        title: "ISO/IEC 38500",
        content: `
É a principal norma internacional de Governança Corporativa de TI.

Ela não descreve processos.

Não descreve fluxos.

Não define papéis detalhados.

Seu objetivo é orientar a alta administração sobre como utilizar a TI de forma responsável.

Ela estabelece seis princípios:

• Responsabilidade

• Estratégia

• Aquisição

• Desempenho

• Conformidade

• Comportamento Humano

Além disso apresenta o famoso ciclo:

Evaluate

Direct

Monitor

(EDM)

Toda governança deve seguir esse ciclo.
      `
      },
      {
        type: "diagram",
        title: "Ciclo da ISO 38500",
        content: `
Avaliar
     ↓
Dirigir
     ↓
Monitorar
     ↺
      `
      },
      {
        type: "concept",
        title: "COBIT 2019",
        content: `
O COBIT é atualmente o framework mais completo para Governança de TI.

Enquanto a ISO apenas orienta,

o COBIT mostra COMO implementar.

Ele organiza os processos em cinco domínios.
      `
      },
      {
        type: "table",
        title: "Domínios do COBIT 2019",
        headers: [
          "Domínio",
          "Significado"
        ],
        rows: [
          [
            "EDM",
            "Evaluate, Direct and Monitor (Governança)"
          ],
          [
            "APO",
            "Align, Plan and Organize"
          ],
          [
            "BAI",
            "Build, Acquire and Implement"
          ],
          [
            "DSS",
            "Deliver, Service and Support"
          ],
          [
            "MEA",
            "Monitor, Evaluate and Assess"
          ]
        ]
      },
      {
        type: "callout",
        style: "success",
        title: "Importante",
        content: `
O COBIT não substitui o ITIL.

Na prática:

COBIT define O QUE deve ser governado.

ITIL mostra COMO operar os serviços.
      `
      },
      {
        type: "concept",
        title: "ITIL 4",
        content: `
O ITIL é o framework mais utilizado no mundo para Gerenciamento de Serviços de TI.

Seu objetivo principal é gerar valor através dos serviços.

A versão 4 introduziu o conceito de Service Value System (SVS).

O foco deixou de ser processos isolados e passou para a criação contínua de valor.

Algumas práticas importantes:

• Gestão de Incidentes

• Gestão de Problemas

• Gestão de Mudanças

• Gestão de Catálogo de Serviços

• Gestão de Nível de Serviço (SLA)

• Central de Serviços (Service Desk)
      `
      },
      {
        type: "concept",
        title: "ISO/IEC 20000",
        content: `
Enquanto o ITIL representa boas práticas,

a ISO 20000 é uma norma certificável.

Ela estabelece requisitos para que uma organização possua um Sistema de Gestão de Serviços de TI.

Empresas que desejam demonstrar maturidade operacional podem buscar essa certificação.
      `
      },
      {
        type: "comparison",
        title: "Quando utilizar cada modelo?",
        items: [
          {
            framework: "ISO 38500",
            use: "Definir princípios de governança para a alta direção."
          },
          {
            framework: "COBIT",
            use: "Implantar governança e gestão integrada."
          },
          {
            framework: "ITIL",
            use: "Melhorar a operação e os serviços de TI."
          },
          {
            framework: "ISO 20000",
            use: "Certificar o gerenciamento dos serviços."
          }
        ]
      },
      {
        type: "case",
        title: "Estudo de Caso",
        scenario: `
Uma empresa possui:

• muitos chamados;

• baixa disponibilidade dos sistemas;

• projetos atrasados;

• diretoria sem indicadores;

• ausência de processos formais.

Quais frameworks seriam utilizados?
      `,
        reflection: [
          "Qual modelo apoiaria a diretoria?",
          "Qual modelo organizaria os serviços?",
          "Qual framework auxiliaria na gestão estratégica?",
          "Uma única solução seria suficiente?"
        ]
      },
      {
        type: "pdgti",
        title: "Aplicação no Projeto (PDGTI)",
        content: `
Nesta semana o grupo deverá elaborar o Capítulo 7 do PDGTI.

O documento deverá conter:

• justificativa dos frameworks escolhidos;

• motivos para não utilizar outros modelos;

• integração entre COBIT, ITIL e ISO 38500;

• benefícios esperados;

• aderência às necessidades da organização estudada.
      `
      },
      {
        type: "summary",
        title: "Resumo da Aula",
        bullets: [
          "Frameworks possuem objetivos diferentes.",
          "ISO 38500 orienta a Governança.",
          "COBIT implementa Governança e Gestão.",
          "ITIL gerencia os serviços.",
          "ISO 20000 permite certificação.",
          "Frameworks devem ser utilizados de forma complementar."
        ]
      },
      {
        type: "quiz",
        title: "Questões para Revisão",
        questions: [
          "Qual a principal diferença entre ISO 38500 e COBIT?",
          "Por que COBIT e ITIL não competem entre si?",
          "Quais são os cinco domínios do COBIT?",
          "Qual framework é voltado ao gerenciamento de serviços?",
          "Qual norma é certificável?"
        ]
      }
    ]
  },
  {
    id: "mod-10",
    title: "Módulo 10 — Gestão de Riscos de TI, Compliance e Controles de Governança",
    icon: "fa-solid fa-triangle-exclamation",
    learningObjectives: [
      "Compreender o papel da gestão de riscos dentro da Governança de TI.",
      "Identificar riscos tecnológicos, operacionais e regulatórios.",
      "Construir uma matriz de riscos de TI utilizando probabilidade e impacto.",
      "Relacionar riscos, controles e frameworks de governança.",
      "Aplicar conceitos de risco no Capítulo 6 do PDGTI."
    ],
    bibliography: {
      required: [
        "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulos sobre riscos e controles.",
        "MARTINS, Camila Saldanha. Governança e Compliance.",
        "COBIT 2019 Framework - APO12 Managed Risk.",
        "ISO/IEC 27005 - Gestão de Riscos de Segurança da Informação."
      ],
      complementary: [
        "ISO/IEC 38500 - Princípio da Conformidade.",
        "COSO Enterprise Risk Management."
      ]
    },
    sections: [
      {
        type: "concept",
        title: "O papel dos riscos na Governança de TI",
        content: `
        Toda organização depende da tecnologia para executar seus processos.

        Sistemas corporativos, bancos de dados, redes, aplicações e serviços
        digitais passaram a representar ativos estratégicos.

        Entretanto, quanto maior a dependência tecnológica, maior a exposição
        aos riscos.

        A Governança de TI busca garantir que:

        • riscos sejam conhecidos;

        • decisões sejam tomadas considerando impactos;

        • controles sejam estabelecidos;

        • resultados sejam monitorados.

        O objetivo não é eliminar todos os riscos, pois isso seria inviável.

        O objetivo é manter os riscos dentro de níveis aceitáveis pela organização.
      `
      },


      {
        type: "callout",
        style: "info",
        title: "Risco x Incidente",
        content: `
Risco:

É uma possibilidade futura de algo acontecer.

Exemplo:
"Existe possibilidade de indisponibilidade do ERP por falha no servidor."

Incidente:

É quando o risco realmente acontece.

Exemplo:
"O ERP ficou indisponível durante 4 horas."

A Governança atua principalmente antes do incidente ocorrer.
      `
      },


      {
        type: "concept",
        title: "Conceito de Risco",
        content: `
Risco pode ser definido como o efeito da incerteza sobre os objetivos.

Na Governança de TI, normalmente analisamos:

Probabilidade:
Qual a chance do evento ocorrer?

Impacto:
Qual o prejuízo caso aconteça?

A combinação desses fatores determina a criticidade do risco.
      `
      },


      {
        type: "formula",
        title: "Modelo básico de avaliação de risco",
        content: `
        Risco = Probabilidade × Impacto


        Exemplo:

        Probabilidade:
        Alta (5)


        Impacto:
        Alto (5)


        Risco:
        25 pontos → Risco Crítico
      `
      },


      {
        type: "table",
        title: "Categorias de Riscos de TI",
        headers: [
          "Categoria",
          "Exemplos"
        ],
        rows: [
          [
            "Segurança",
            "Ataques, vazamento de dados, ransomware, acessos indevidos"
          ],
          [
            "Operacional",
            "Falhas de servidores, indisponibilidade, erros humanos"
          ],
          [
            "Projetos",
            "Atrasos, custos acima do previsto, requisitos incorretos"
          ],
          [
            "Compliance",
            "Descumprimento de leis, normas ou contratos"
          ],
          [
            "Estratégico",
            "Tecnologia desalinhada aos objetivos do negócio"
          ]
        ]
      },


      {
        type: "concept",
        title: "Processo de Gestão de Riscos",
        content: `
A gestão de riscos normalmente segue um ciclo contínuo:

1. Identificar riscos

2. Analisar e classificar

3. Avaliar prioridade

4. Definir tratamento

5. Implementar controles

6. Monitorar resultados


Esse ciclo deve ser incorporado à rotina da Governança de TI.
      `
      },


      {
        type: "diagram",
        title: "Ciclo de Tratamento de Riscos",
        content: `
Identificar
     ↓
Analisar
     ↓
Avaliar
     ↓
Tratar
     ↓
Monitorar
     ↺
      `
      },


      {
        type: "concept",
        title: "Estratégias para tratamento de riscos",
        content: `
Após identificar um risco, a organização pode escolher quatro estratégias:

1. Evitar

Eliminar a causa do risco.

Exemplo:
Cancelar uma tecnologia insegura.


2. Mitigar

Reduzir probabilidade ou impacto.

Exemplo:
Criar backups e controles de acesso.


3. Transferir

Compartilhar o risco com terceiros.

Exemplo:
Contratação de seguro ou serviço especializado.


4. Aceitar

Assumir conscientemente o risco quando o custo do controle é maior que o benefício.
      `
      },


      {
        type: "concept",
        title: "Compliance e Governança de TI",
        content: `
Compliance significa garantir que a organização esteja em conformidade com:

• leis;

• regulamentações;

• contratos;

• políticas internas;

• normas técnicas.


Na área de TI envolve temas como:

• proteção de dados;

• segurança da informação;

• auditoria;

• controles internos;

• rastreabilidade.
      `
      },


      {
        type: "table",
        title: "Relação entre Compliance e Frameworks",
        headers: [
          "Modelo",
          "Contribuição"
        ],
        rows: [
          [
            "COBIT",
            "Define objetivos de controle e governança"
          ],
          [
            "ISO 38500",
            "Garante princípios de conformidade estratégica"
          ],
          [
            "ISO 27001/27005",
            "Gestão de segurança e riscos"
          ],
          [
            "ITIL",
            "Controle e qualidade dos serviços"
          ]
        ]
      },


      {
        type: "concept",
        title: "Controles de Governança de TI",
        content: `
Controles são mecanismos criados para reduzir riscos.

Podem ser:

Preventivos:

Atuam antes do problema.

Exemplo:
Autenticação multifator.


Detectivos:

Identificam problemas ocorridos.

Exemplo:
Monitoramento de logs.


Corretivos:

Tratam consequências.

Exemplo:
Plano de recuperação de desastre.
      `
      },


      {
        type: "case",
        title: "Estudo de Caso",
        scenario: `
Uma empresa possui um sistema financeiro crítico.

Problemas identificados:

• usuários compartilham senhas;

• não existe backup testado;

• servidores não possuem monitoramento;

• não há plano de continuidade.

Como a Governança de TI deve agir?
      `,
        reflection: [
          "Quais são os riscos existentes?",
          "Qual o impacto para o negócio?",
          "Quais controles devem ser implantados?",
          "Qual framework poderia apoiar?"
        ]
      },


      {
        type: "pdgti",
        title: "Aplicação no PDGTI — Capítulo 6",
        content: `
O grupo deverá elaborar a Gestão de Riscos da organização escolhida.

O capítulo deve conter:

• levantamento dos principais riscos;

• classificação por categoria;

• matriz Probabilidade x Impacto;

• definição dos riscos críticos;

• plano de tratamento;

• responsáveis pelos controles;

• indicadores de acompanhamento.
      `
      },


      {
        type: "example",
        title: "Exemplo de Matriz de Riscos",
        content: `
Risco:
Indisponibilidade do sistema ERP


Probabilidade:
Alta


Impacto:
Alto


Classificação:
Crítico


Tratamento:
Implantar redundância de servidores,
monitoramento e plano de contingência.
      `
      },


      {
        type: "summary",
        title: "Resumo da Aula",
        bullets: [
          "Governança administra riscos relacionados ao uso da TI.",
          "Risco deve ser avaliado por probabilidade e impacto.",
          "Compliance garante conformidade organizacional.",
          "Frameworks ajudam a estruturar controles.",
          "O PDGTI deve transformar riscos em planos de ação."
        ]
      },


      {
        type: "quiz",
        title: "Questões para Revisão",
        questions: [
          "Qual diferença entre risco e incidente?",
          "Como calcular a criticidade de um risco?",
          "Quais são as quatro estratégias de tratamento?",
          "Qual domínio do COBIT trata riscos?",
          "Por que compliance é importante na Governança de TI?"
        ]
      }

    ]
  },
  {
    id: "mod-11",
    title: "Módulo 11 — Implantando a Governança de TI: Roadmap, Mudança Organizacional e Geração de Valor",
    icon: "fa-solid fa-road",
    learningObjectives: [
      "Compreender as etapas para implantação de um programa de Governança de TI.",
      "Elaborar um roadmap de transformação organizacional.",
      "Identificar fatores críticos de sucesso em iniciativas de governança.",
      "Relacionar governança, pessoas, processos e tecnologia.",
      "Consolidar o PDGTI como instrumento estratégico da organização."
    ],
    bibliography: {
      required: [
        "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI: da Estratégia à Gestão de Processos e Serviços. Capítulos 8 e 9.",
        "COBIT 2019 Framework - Implementation Guide.",
        "ISO/IEC 38500 - Governança Corporativa de TI."
      ],
      complementary: [
        "KOTTER, John. Liderando Mudanças.",
        "ITIL 4 Foundation - Continual Improvement."
      ]
    },
    sections: [
      {
        type: "concept",
        title: "Governança de TI como transformação organizacional",
        content: `
        Implantar Governança de TI não significa simplesmente adquirir uma
        ferramenta ou criar novos documentos.

        Governança envolve mudança na forma como a organização:

        • toma decisões;

        • prioriza investimentos;

        • administra riscos;

        • mede resultados;

        • entrega valor através da tecnologia.


        Portanto, Governança é uma transformação envolvendo:

        Pessoas + Processos + Tecnologia + Cultura Organizacional.
      `
      },


      {
        type: "callout",
        style: "warning",
        title: "Erro comum nas organizações",
        content: `
Muitas empresas iniciam projetos de Governança de TI focando apenas em processos
e ferramentas.

Entretanto, os maiores desafios normalmente estão relacionados a:

• resistência das pessoas;

• falta de patrocínio executivo;

• ausência de comunicação;

• conflitos entre áreas.
      `
      },


      {
        type: "concept",
        title: "Modelo de implantação da Governança de TI",
        content: `
Uma implantação madura normalmente ocorre em etapas:

1. Diagnóstico

Compreender a situação atual da organização.


2. Definição do Modelo de Governança

Estabelecer papéis, responsabilidades e mecanismos de decisão.


3. Priorização de Processos

Escolher quais processos devem ser melhorados primeiro.


4. Implantação dos Controles

Aplicar políticas, indicadores e práticas.


5. Monitoramento e Melhoria Contínua

Avaliar resultados e evoluir continuamente.
      `
      },


      {
        type: "diagram",
        title: "Ciclo de Evolução da Governança",
        content: `
Diagnosticar
      ↓
Planejar
      ↓
Implementar
      ↓
Medir
      ↓
Melhorar
      ↺
      `
      },


      {
        type: "concept",
        title: "Roadmap de Governança de TI",
        content: `
O roadmap representa o caminho planejado para transformar a situação atual
da organização em uma situação futura desejada.

Ele deve considerar:

• prioridades estratégicas;

• capacidade de investimento;

• maturidade atual;

• riscos;

• disponibilidade das equipes.


Um bom roadmap evita tentar implantar tudo ao mesmo tempo.
      `
      },


      {
        type: "table",
        title: "Exemplo de Roadmap em Ondas",
        headers: [
          "Fase",
          "Objetivo",
          "Exemplos de Ações"
        ],
        rows: [
          [
            "Onda 1 - Fundamentos",
            "Criar estrutura básica",
            "Comitê de TI, políticas, papéis e responsabilidades"
          ],
          [
            "Onda 2 - Controle",
            "Melhorar gestão",
            "Indicadores, riscos, processos e serviços"
          ],
          [
            "Onda 3 - Otimização",
            "Buscar excelência",
            "Automação, melhoria contínua e inovação"
          ]
        ]
      },


      {
        type: "concept",
        title: "Fatores Críticos de Sucesso (FCS)",
        content: `
Segundo Fernandes & Abreu, alguns fatores são determinantes para o sucesso:

1. Patrocínio da alta administração

A liderança deve apoiar e participar das decisões.


2. Comunicação clara

Todos precisam entender os objetivos da mudança.


3. Envolvimento das áreas de negócio

TI não governa sozinha.


4. Priorização adequada

A organização deve começar pelos problemas mais relevantes.


5. Medição de resultados

O valor entregue precisa ser demonstrado.
      `
      },


      {
        type: "concept",
        title: "Gestão da Mudança Organizacional",
        content: `
A implantação da Governança modifica comportamentos.

Exemplos:

Antes:

"TI decide quais sistemas serão comprados."

Depois:

"Decisões de investimento seguem critérios estratégicos."


Antes:

"Problemas são resolvidos informalmente."

Depois:

"Existem processos, indicadores e responsabilidades definidas."


A mudança precisa ser conduzida com comunicação, treinamento e participação.
      `
      },


      {
        type: "table",
        title: "Modelo de Comunicação da Mudança",
        headers: [
          "Público",
          "Mensagem Principal"
        ],
        rows: [
          [
            "Diretoria",
            "Governança aumenta valor e reduz riscos"
          ],
          [
            "Gestores",
            "Novos processos melhoram decisões"
          ],
          [
            "Equipe Técnica",
            "Governança organiza responsabilidades"
          ],
          [
            "Usuários",
            "Serviços terão mais qualidade"
          ]
        ]
      },


      {
        type: "concept",
        title: "Medição dos benefícios da Governança",
        content: `
A Governança de TI deve demonstrar resultados.

Exemplos de benefícios:

Financeiros:

• redução de desperdícios;

• melhor priorização de investimentos.


Operacionais:

• maior disponibilidade;

• redução de incidentes.


Estratégicos:

• maior alinhamento entre TI e negócio.


Organizacionais:

• decisões mais transparentes.
      `
      },


      {
        type: "case",
        title: "Estudo de Caso Final",
        scenario: `
Uma empresa deseja implantar Governança de TI.

Situação atual:

• TI trabalha de forma reativa;

• projetos são escolhidos sem critérios;

• não existem indicadores;

• usuários reclamam dos serviços;

• diretoria não conhece os riscos tecnológicos.


Como seria o plano de implantação?
      `,
        reflection: [
          "Qual seria o diagnóstico inicial?",
          "Quais frameworks poderiam ser utilizados?",
          "Quais processos devem ser priorizados?",
          "Como convencer a diretoria?"
        ]
      },


      {
        type: "pdgti",
        title: "Aplicação no PDGTI — Capítulo 9",
        content: `
O grupo deverá finalizar o plano de implantação da Governança de TI.

O capítulo deve apresentar:

• situação atual;

• situação futura desejada;

• roadmap de implantação;

• fases e prioridades;

• recursos necessários;

• investimentos estimados;

• benefícios esperados;

• indicadores de sucesso.


O PDGTI deve funcionar como um documento executivo para tomada de decisão.
      `
      },


      {
        type: "integration",
        title: "Integração de todo o conteúdo da disciplina",
        content: `
O Plano Diretor de Governança de TI conecta todos os conceitos estudados:

Governança
↓
Estratégia
↓
Processos
↓
Frameworks
↓
Controles
↓
Indicadores
↓
Melhoria Contínua


O objetivo final não é apenas administrar tecnologia.

É garantir que a tecnologia gere valor para o negócio.
      `
      },


      {
        type: "summary",
        title: "Resumo da Aula",
        bullets: [
          "Governança de TI é uma mudança organizacional.",
          "A implantação deve ocorrer de forma gradual.",
          "Roadmaps orientam a evolução da maturidade.",
          "Patrocínio executivo é essencial.",
          "O PDGTI consolida estratégia, controles e geração de valor."
        ]
      },


      {
        type: "quiz",
        title: "Questões para Revisão",
        questions: [
          "Por que Governança de TI não é apenas tecnologia?",
          "Quais são as etapas de implantação?",
          "O que são fatores críticos de sucesso?",
          "Por que a gestão da mudança é importante?",
          "Qual o papel do PDGTI na organização?"
        ]
      }

    ]
  }
];

// --- ESTRUTURA COMPLETA DOS 9 CAPÍTULOS DO PDGTI ---
const pdgtiChaptersData = [
  {
    id: "cap1",
    num: 1,
    title: "Caracterização da Organização",
    weekDue: 2,
    deliverable: "Entrega Parcial 1",
    description: "Descrição detalhada da empresa (porte, setor, produtos/serviços), estrutura organizacional, organograma corporativo e levantamento da infraestrutura/equipe atual de TI.",
    items: [
      "Visão Geral do Negócio (Missão, Visão, Valores)",
      "Estrutura Organizacional & Organograma Corporativo",
      "Inventário da Infraestrutura e Sistemas Atuais de TI",
      "Equipe de TI, Papéis Atuais e Orçamento Histórico"
    ]
  },
  {
    id: "cap2",
    num: 2,
    title: "Diagnóstico da Situação Atual de TI",
    weekDue: 3,
    deliverable: "Entrega Parcial 1",
    description: "Diagnóstico profundo identificando dores, gargalos, indisponibilidades, falhas de segurança e desalinhamento com os objetivos do negócio.",
    items: [
      "Matriz SWOT da TI (Forças, Oportunidades, Fraquezas, Ameaças)",
      "Mapeamento das Principais Dores e Incredientes de Falha",
      "Análise de Desalinhamento entre TI e Áreas de Negócio",
      "Avaliação Preliminar de Maturidade dos Processos"
    ]
  },
  {
    id: "cap3",
    num: 3,
    title: "Objetivos Estratégicos & Mapa Estratégico",
    weekDue: 4,
    deliverable: "Entrega Parcial 1",
    description: "Definição dos objetivos de Governança de TI conectados diretamente aos objetivos estratégicos do negócio. Criação do Mapa Estratégico de TI baseado no BSC.",
    items: [
      "Mapeamento dos Objetivos Estratégicos do Negócio",
      "Definição dos Objetivos de TI Alinhados",
      "Construção do Mapa Estratégico de TI (4 Perspectivas do BSC)",
      "Portfólio de Projetos e Serviços de TI Propostos"
    ]
  },
  {
    id: "cap4",
    num: 4,
    title: "Estrutura de Governança & Políticas",
    weekDue: 5,
    deliverable: "Entrega Parcial 1 (MARCO DE SEMANA 5)",
    description: "Proposição da nova estrutura de governança: Comitê Diretor de TI, papéis e responsabilidades (Matriz RACI), instâncias de decisão e políticas fundamentais.",
    items: [
      "Estrutura do Comitê Estratégico de TI (Composição e Rito)",
      "Matriz RACI dos Processos Críticos de TI",
      "Mecanismos e Alçadas para Tomada de Decisão",
      "Redação das Políticas Básicas (Segurança, Uso Aceitável, Aquisições)"
    ]
  },
  {
    id: "cap5",
    num: 5,
    title: "Indicadores e Gestão de Desempenho (KPIs)",
    weekDue: 7,
    deliverable: "Entrega Final",
    description: "Sistema de medição de desempenho da TI e do negócio. KPIs com metas claras, frequência de apuração e responsáveis.",
    items: [
      "KPIs de Alinhamento de Negócio (ex: ROI de Projetos, SLA de Serviços)",
      "KPIs de Desempenho Operacional de TI (ex: Uptime, MTTR, MTBF)",
      "Definição de Metas, Linha de Base e Frequência de Medição",
      "Painel / Dashboard Executive de Governança de TI"
    ]
  },
  {
    id: "cap6",
    num: 6,
    title: "Gestão de Riscos & Compliance",
    weekDue: 10,
    deliverable: "Entrega Final",
    description: "Mapeamento dos riscos operacionais, regulatórios e tecnológicos de TI. Definição da Matriz de Riscos (Probabilidade x Impacto) e planos de mitigação.",
    items: [
      "Levantamento e Identificação dos Riscos de TI",
      "Matriz de Riscos (Probabilidade x Impacto)",
      "Planos de Ação e Ações Mitigatórias para Riscos Críticos",
      "Requisitos de Compliance Regulatório (SOX, LGPD, ISO 27001)"
    ]
  },
  {
    id: "cap7",
    num: 7,
    title: "Seleção e Justificativa de Frameworks",
    weekDue: 12,
    deliverable: "Entrega Final",
    description: "Seleção fundamentada das melhores práticas e normas internacionais (ISO/IEC 38500, COBIT, ITIL, ISO 20000) adaptadas ao contexto da organização.",
    items: [
      "Justificativa de Adição do COBIT (Objetivos de Governança e Gestão)",
      "Aplicação das Práticas ITIL v4 na Gestão de Serviços",
      "Adoção dos Princípios da ISO/IEC 38500 (Avaliar, Dirigir, Monitorar)",
      "Matriz de Intersecção dos Frameworks Selecionados"
    ]
  },
  {
    id: "cap8",
    num: 8,
    title: "Melhoria de Processos & Qualidade",
    weekDue: 13,
    deliverable: "Entrega Final",
    description: "Diretrizes de maturidade e melhoria contínua para os processos de desenvolvimento de software, garantia de qualidade e serviços baseadas em CMMI / MPS-SW.",
    items: [
      "Diagnóstico de Maturidade do Processo de Software (CMMI / MPS-SW)",
      "Métricas de Qualidade de Código e Arquitetura (ISO 25010)",
      "Plano de Melhoria de Processo de Software (MPS)",
      "Procedimentos de Gestão de Mudanças e Configuração"
    ]
  },
  {
    id: "cap9",
    num: 9,
    title: "Roadmap de Implantação & Benefícios",
    weekDue: 15,
    deliverable: "Entrega Final (MARCO DE SEMANA 15/16)",
    description: "Plano de ação executivo com cronograma (Gantt), orçamentos estimados, roadmap em ondas de maturidade, Fatores Críticos de Sucesso (FCS) e Gestão da Mudança.",
    items: [
      "Roadmap de Implantação Dividido em Ondas (Curto, Médio e Longo Prazo)",
      "Estimativa de Investimentos, CAPEX e OPEX",
      "Fatores Críticos de Sucesso (FCS) e Mitigação de Resistências",
      "Matriz de Benefícios Esperados e Geração de Valor para o Negócio"
    ]
  }
];

// --- BANCO DE QUESTÕES PARA SIMULADO (10 QUESTÕES - 5 PROVA 1 E 5 PROVA 2) ---
const quizQuestionsData = [
  // --- PROVA 1 (QUESTÕES 1 A 5 - SEMANAS 1 A 5) ---
  {
    id: 1,
    exam: "Prova 1",
    question: "Qual é a principal diferença conceitual entre Governança de TI e Gestão de TI segundo a ISO/IEC 38500 e o COBIT 2019?",
    options: [
      "A Governança cuida do desenvolvimento de software e a Gestão cuida da manutenção de hardware.",
      "A Governança (EDM) avalia, direciona e monitora as diretrizes estratégicas; a Gestão (PBRM) planeja, constrói, executa e monitora as operações para atingir tais diretrizes.",
      "A Governança é de responsabilidade exclusiva dos técnicos de TI e a Gestão é exclusiva da equipe de RH.",
      "Ambos os termos possuem o mesmo significado técnico e referem-se à liderança do departamento de suporte."
    ],
    answer: 1,
    explanation: "Conforme a ISO/IEC 38500 e o COBIT 2019, a Governança cabe ao conselho diretivo (Modelo EDM: Evaluate, Direct, Monitor), enquanto a Gestão cabe à diretoria executiva de TI (planejar, construir, executar e monitorar)."
  },
  {
    id: 2,
    exam: "Prova 1",
    question: "A Lei Sarbanes-Oxley (SOX Act de 2002) afeta diretamente a Governança de TI principalmente devido à sua Seção 404. O que essa seção exige?",
    options: [
      "A migração obrigatória de todos os bancos de dados para a nuvem pública.",
      "A contratação obrigatória de auditoria externa diária nos sistemas de chamados.",
      "A avaliação rigorosa e comprovação da eficácia dos Controles Internos sobre os sistemas de TI que geram demonstrações financeiras.",
      "A proibição do uso de softwares open-source em instituições financeiras."
    ],
    answer: 2,
    explanation: "A Seção 404 da SOX exige que as empresas comprovem a integridade e confiabilidade dos relatórios financeiros. Como esses relatórios dependem de sistemas de TI (ERPs), os Controles Gerais de TI (ITGC) passam a ser auditados com rigor."
  },
  {
    id: 3,
    exam: "Prova 1",
    question: "O Plano Estratégico de Tecnologia da Informação (PETI) tem como objetivo primordial:",
    options: [
      "Garantir que as decisões, projetos e investimentos em TI estejam alinhados aos objetivos estratégicos de longo prazo da organização.",
      "Mapear a quantidade exata de memória RAM de todos os computadores da empresa.",
      "Substituir o Planejamento Estratégico de Negócios da corporação.",
      "Definir a escala semanal de trabalho dos técnicos de atendimento."
    ],
    answer: 0,
    explanation: "O PETI é a ferramenta de planejamento que traduz os objetivos de negócio em diretrizes tecnológicas, garantindo o alinhamento estratégico."
  },
  {
    id: 4,
    exam: "Prova 1",
    question: "O Balanced Scorecard (BSC) aplicado à TI traduz a visão e estratégia em objetivos divididos em 4 perspectivas equilibradas. Quais são elas?",
    options: [
      "Hardware, Software, Redes e Banco de Dados.",
      "Financeira, Clientes/Usuários, Processos Internos e Aprendizado & Crescimento.",
      "Entrada, Processamento, Saída e Armazenamento.",
      "Desenvolvimento, Testes, Homologação e Produção."
    ],
    answer: 1,
    explanation: "O BSC organiza a medição estratégica em 4 perspectivas complementares: Financeira, Clientes/Usuários, Processos Internos e Aprendizado/Crescimento."
  },
  {
    id: 5,
    exam: "Prova 1",
    question: "Em uma estrutura formal de Governança de TI, qual é o papel principal do Comitê Estratégico de TI (ou Comitê Diretor de TI)?",
    options: [
      "Programar módulos de software e corrigir bugs de produção.",
      "Prestar atendimento telefônico de primeiro nível aos usuários.",
      "Priorizar investimentos em TI, aprovar políticas institucionais e supervisionar o alinhamento tecnológico com o negócio.",
      "Realizar a troca de toners de impressoras e cabeamento de rede."
    ],
    answer: 2,
    explanation: "O Comitê Estratégico de TI é a instância de governança composta por lideranças de negócio e de TI para deliberar sobre investimentos, riscos, políticas e prioridades estratégicas."
  },

  // --- PROVA 2 (QUESTÕES 6 A 10 - SEMANAS 7 A 15) ---
  {
    id: 6,
    exam: "Prova 2",
    question: "Na gestão de desempenho de TI, qual a diferença entre um Indicador Chave de Desempenho (KPI) e uma métrica operacional genérica?",
    options: [
      "O KPI mede exclusivamente o consumo de energia elétrica dos servidores.",
      "Uma métrica mede qualquer dado quantitativo, enquanto o KPI mede o progresso de um objetivo estratégico crítico diretamente associado ao sucesso do negócio.",
      "O KPI é calculado apenas por softwares pagos de inteligência artificial.",
      "Não há diferença; ambos representam simples contagens numéricas sem valor estratégico."
    ],
    answer: 1,
    explanation: "Métricas acompanham volumes operacionais, enquanto KPIs (Key Performance Indicators) medem diretamente a eficácia no alcance de objetivos estratégicos e geração de valor."
  },
  {
    id: 7,
    exam: "Prova 2",
    question: "Ao elaborar a Matriz de Riscos de TI (Probabilidade x Impacto), qual deve ser a prioridade para os riscos classificados na zona de Alta Probabilidade e Alto Impacto?",
    options: [
      "Ignorar o risco e aguardar que o incidente aconteça.",
      "Aceitar o risco passivamente sem implementar controles compensatórios.",
      "Implementar controles preventivos e planos de mitigação urgentes para reduzir a probabilidade de ocorrência ou amortecer o impacto.",
      "Cancelar o contrato de todos os clientes da empresa."
    ],
    answer: 2,
    explanation: "Riscos no quadrante crítico (Alta Probabilidade x Alto Impacto) exigem ação imediata da governança e gestão para implementar controles mitigações ativas (evitar, mitigar ou transferir)."
  },
  {
    id: 8,
    exam: "Prova 2",
    question: "A norma ISO/IEC 38500 estabelece que o corpo diretivo deve exercer a governança por meio de três tarefas principais conhecidas pelo modelo EDM. Quais são elas?",
    options: [
      "Executar, Desenvolver e Manter.",
      "Avaliar (Evaluate), Dirigir (Direct) e Monitorar (Monitor).",
      "Enviar, Deletar e Mover.",
      "Escolher, Comprar e Instalar."
    ],
    answer: 1,
    explanation: "O modelo EDM (Evaluate, Direct, Monitor) é o núcleo funcional da norma ISO/IEC 38500 para orientar a governança corporativa da tecnologia."
  },
  {
    id: 9,
    exam: "Prova 2",
    question: "Modelos de referência como o CMMI e o MR-MPS-SW avaliam a maturidade dos processos de software. Qual a principal vantagem de atingir níveis mais altos de maturidade?",
    options: [
      "Garantir maior previsibilidade de custos e prazos, redução de defeitos e melhoria contínua da qualidade.",
      "Eliminar a necessidade de realizar testes de qualidade antes de publicar o código.",
      "Garantir a isenção de impostos corporativos junto ao governo.",
      "Desobrigar a equipe de documentar os requisitos do sistema."
    ],
    answer: 0,
    explanation: "Níveis elevados de maturidade (CMMI/MPS-SW) trazem padronização, medição quantitativa e melhoria contínua, reduzindo o retrabalho e garantindo previsibilidade de entregas."
  },
  {
    id: 10,
    exam: "Prova 2",
    question: "Qual é considerado um dos maiores Fatores Críticos de Sucesso (FCS) no processo de implantação da Governança de TI em uma organização?",
    options: [
      "Impor a mudança de forma autoritária sem comunicar os motivos aos colaboradores.",
      "Obter o patrocínio ostensivo da Alta Administração (CEO/Conselho) e realizar a Gestão da Mudança organizacional com as pessoas.",
      "Comprar as ferramentas de software mais dispendiosas do mercado antes de desenhar os processos.",
      "Delegar a responsabilidade da governança exclusivamente à equipe de suporte do helpdesk."
    ],
    answer: 1,
    explanation: "Sem o patrocínio executivo (Sponsorship) do topo da organização e sem o engajamento cultural e gestão da mudança com os colaboradores, as iniciativas de governança tendem ao fracasso."
  }
];

// --- ESTADO DO APLICATIVO E ARMAZENAMENTO LOCAL ---
let pdgtiState = {};

// Carregar progresso salvo no LocalStorage
function loadPdgtiState() {
  const saved = localStorage.getItem("pdgti_progress_state_v1");
  if (saved) {
    try {
      pdgtiState = JSON.parse(saved);
    } catch (e) {
      pdgtiState = {};
    }
  } else {
    pdgtiState = {};
  }
}

// Salvar progresso
function savePdgtiState() {
  localStorage.setItem("pdgti_progress_state_v1", JSON.stringify(pdgtiState));
  updateDashboardProgress();
}

// --- NAVEGAÇÃO ENTRE ABAS ---
function initTabNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");

      navBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const targetTab = document.getElementById(tabId);
      if (targetTab) {
        targetTab.classList.add("active");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// --- RENDERIZAÇÃO DO CRONOGRAMA ---
function renderSchedule(filterType = "all", searchText = "") {
  const container = document.getElementById("schedule-cards-container");
  if (!container) return;

  container.innerHTML = "";

  const filtered = scheduleData.filter(item => {
    const matchesFilter = (filterType === "all") || (item.type === filterType);
    const textSearch = (item.topicWed + " " + item.topicFri + " " + item.summary + " " + item.pdgtiStep).toLowerCase();
    const matchesSearch = searchText === "" || textSearch.includes(searchText.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-calendar-xmark"></i>
        <p>Nenhum encontro encontrado para os filtros selecionados.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "schedule-card";

    card.innerHTML = `
      <div class="schedule-card-header">
        <div class="week-title">
          <span class="week-number">Semana ${item.week.toString().padStart(2, '0')}</span>
          <span class="badge ${item.badgeClass}">${item.typeLabel}</span>
        </div>
        <div class="week-dates">
          <span><i class="fa-regular fa-calendar"></i> Quarta: <strong>${item.wednesdayDate}</strong></span>
          <span><i class="fa-regular fa-calendar"></i> Sexta / Sáb: <strong>${item.fridayDate}</strong></span>
        </div>
      </div>
      
      <div class="schedule-card-body">
        <div class="session-block wednesday">
          <div class="session-label"><i class="fa-solid fa-chalkboard-user"></i> Quarta-feira (Encontro Teórico / Estudo de Caso)</div>
          <p>${item.topicWed}</p>
        </div>

        <div class="session-block friday">
          <div class="session-label"><i class="fa-solid fa-laptop-code"></i> Sexta-feira / Sábado (Oficina Prática PDGTI / Atividade)</div>
          <p>${item.topicFri}</p>
        </div>

        <div class="summary-block">
          <strong><i class="fa-solid fa-lightbulb"></i> Resumo & Objetivos:</strong>
          <p>${item.summary}</p>
        </div>

        <div class="pdgti-milestone">
          <strong><i class="fa-solid fa-flag-checkered"></i> Entregável PDGTI:</strong>
          <span>${item.pdgtiStep}</span>
        </div>
      </div>

      <div class="schedule-card-footer">
        <span class="ref-title"><i class="fa-solid fa-book-open"></i> Referências:</span>
        <div class="ref-tags">
          ${item.references.map(r => `<span class="ref-tag">${r}</span>`).join('')}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// --- RENDERIZAÇÃO DA TEORIA ALINHADA AOS FRAMEWORKS ---
function renderTheoryModules() {
  const container = document.getElementById("theory-modules-container");
  if (!container) return;

  container.innerHTML = "";

  theoreticalModulesData.forEach(mod => {
    const card = document.createElement("div");
    card.className = "theory-card";

    card.innerHTML = `
      <div class="theory-card-header">
        <div class="theory-title-wrap">
          <i class="${mod.icon} theory-icon"></i>
          <h3>${mod.title}</h3>
        </div>
        <div class="theory-biblio"><i class="fa-solid fa-book-bookmark"></i> ${mod.bibliography}</div>
      </div>

      <div class="theory-card-body">
        ${mod.content}
      </div>

      <div class="theory-card-footer">
        <strong>Frameworks & Normas Conectadas:</strong>
        <div class="fw-pills">
          ${mod.frameworks.map(f => `<span class="fw-pill">${f}</span>`).join('')}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// --- RENDERIZAÇÃO DO TRACKER DO PDGTI ---
function renderPdgtiTracker() {
  const container = document.getElementById("pdgti-chapters-container");
  if (!container) return;

  container.innerHTML = "";

  pdgtiChaptersData.forEach(chap => {
    const isCompleted = pdgtiState[chap.id] === true;

    const card = document.createElement("div");
    card.className = `pdgti-chapter-card ${isCompleted ? 'completed' : ''}`;
    card.id = `card-${chap.id}`;

    let itemsList = chap.items.map((item, idx) => {
      const key = `${chap.id}_item_${idx}`;
      const checked = pdgtiState[key] === true ? 'checked' : '';
      return `
        <li>
          <label class="checkbox-label">
            <input type="checkbox" data-key="${key}" data-chap="${chap.id}" ${checked} class="pdgti-item-checkbox">
            <span>${item}</span>
          </label>
        </li>
      `;
    }).join('');

    card.innerHTML = `
      <div class="pdgti-card-header">
        <div class="chap-badge">Capítulo ${chap.num}</div>
        <div class="chap-title-wrap">
          <h3>${chap.title}</h3>
          <span class="due-tag"><i class="fa-regular fa-clock"></i> Previsto para a Semana ${chap.weekDue}</span>
        </div>
        <div class="chap-toggle-check">
          <label class="switch-label">
            <input type="checkbox" id="check-chap-${chap.id}" data-chap-master="${chap.id}" ${isCompleted ? 'checked' : ''}>
            <span class="switch-slider"></span>
            <span class="switch-text">${isCompleted ? 'Concluído' : 'Pendente'}</span>
          </label>
        </div>
      </div>

      <p class="chap-description">${chap.description}</p>

      <div class="chap-checklist">
        <h4><i class="fa-solid fa-list-check"></i> Checklist dos Requisitos Obrigatórios:</h4>
        <ul>
          ${itemsList}
        </ul>
      </div>
    `;

    container.appendChild(card);
  });

  // Listeners de check das sub-tarefas
  document.querySelectorAll(".pdgti-item-checkbox").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const key = e.target.getAttribute("data-key");
      const chapId = e.target.getAttribute("data-chap");
      pdgtiState[key] = e.target.checked;

      const chapObj = pdgtiChaptersData.find(c => c.id === chapId);
      if (chapObj) {
        const allChecked = chapObj.items.every((_, idx) => pdgtiState[`${chapId}_item_${idx}`] === true);
        pdgtiState[chapId] = allChecked;
        const masterSwitch = document.getElementById(`check-chap-${chapId}`);
        if (masterSwitch) {
          masterSwitch.checked = allChecked;
          masterSwitch.nextElementSibling.nextElementSibling.textContent = allChecked ? 'Concluído' : 'Pendente';
        }
        const cardElem = document.getElementById(`card-${chapId}`);
        if (cardElem) {
          cardElem.classList.toggle('completed', allChecked);
        }
      }

      savePdgtiState();
    });
  });

  // Listeners dos botões master
  document.querySelectorAll("[data-chap-master]").forEach(sw => {
    sw.addEventListener("change", (e) => {
      const chapId = e.target.getAttribute("data-chap-master");
      const isChecked = e.target.checked;
      pdgtiState[chapId] = isChecked;

      const chapObj = pdgtiChaptersData.find(c => c.id === chapId);
      if (chapObj) {
        chapObj.items.forEach((_, idx) => {
          pdgtiState[`${chapId}_item_${idx}`] = isChecked;
        });
      }

      savePdgtiState();
      renderPdgtiTracker();
    });
  });
}

// --- ATUALIZAR BARRA DE PROGRESSO NO DASHBOARD ---
function updateDashboardProgress() {
  const totalCaps = pdgtiChaptersData.length;
  let completedCount = 0;

  pdgtiChaptersData.forEach(c => {
    if (pdgtiState[c.id] === true) completedCount++;
  });

  const percent = Math.round((completedCount / totalCaps) * 100);

  const fillElem = document.getElementById("progress-bar-fill");
  const percentElem = document.getElementById("progress-percent-text");
  const countElem = document.getElementById("completed-caps-count");

  if (fillElem) fillElem.style.width = `${percent}%`;
  if (percentElem) percentElem.textContent = `${percent}%`;
  if (countElem) countElem.textContent = `${completedCount} de ${totalCaps} Capítulos Concluídos`;
}

// --- RENDERIZAR QUIZ / SIMULADOS ---
function renderQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  container.innerHTML = "";

  quizQuestionsData.forEach((q, qIndex) => {
    const qCard = document.createElement("div");
    qCard.className = "quiz-card";
    qCard.id = `quiz-q-${q.id}`;

    let optionsHtml = q.options.map((opt, optIndex) => `
      <label class="quiz-option">
        <input type="radio" name="question_${q.id}" value="${optIndex}">
        <span>${opt}</span>
      </label>
    `).join('');

    qCard.innerHTML = `
      <div class="quiz-header">
        <span class="quiz-tag ${q.exam === 'Prova 1' ? 'badge-prova' : 'badge-pii'}">${q.exam}</span>
        <h3>Questão ${qIndex + 1}</h3>
      </div>
      <p class="quiz-text">${q.question}</p>
      <div class="quiz-options">
        ${optionsHtml}
      </div>
      <button class="btn btn-secondary check-answer-btn" data-qid="${q.id}">Verificar Resposta</button>
      <div class="quiz-feedback hidden" id="feedback-${q.id}"></div>
    `;

    container.appendChild(qCard);
  });

  document.querySelectorAll(".check-answer-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const qid = parseInt(e.target.getAttribute("data-qid"));
      const questionObj = quizQuestionsData.find(q => q.id === qid);
      const selected = document.querySelector(`input[name="question_${qid}"]:checked`);
      const feedbackElem = document.getElementById(`feedback-${qid}`);

      if (!selected) {
        alert("Por favor, selecione uma das opções antes de verificar.");
        return;
      }

      const userAns = parseInt(selected.value);
      feedbackElem.classList.remove("hidden", "correct", "wrong");

      if (userAns === questionObj.answer) {
        feedbackElem.classList.add("correct");
        feedbackElem.innerHTML = `
          <strong><i class="fa-solid fa-circle-check"></i> Correto!</strong>
          <p>${questionObj.explanation}</p>
        `;
      } else {
        feedbackElem.classList.add("wrong");
        feedbackElem.innerHTML = `
          <strong><i class="fa-solid fa-circle-xmark"></i> Incorreto!</strong>
          <p>${questionObj.explanation}</p>
        `;
      }
    });
  });
}

// --- GERADOR DE TEMPLATE MARKDOWN DO PDGTI ---
function exportPdgtiMarkdown() {
  let mdContent = `# PLANO DIRETOR DE GOVERNANÇA DE TI (PDGTI)

**Organização / Empresa:** [Nome da Empresa Alvo]  
**Grupo de Consultoria de TI:** [Integrantes do Grupo]  
**Disciplina:** Governança de TI  
**Data de Emissão:** ${new Date().toLocaleDateString('pt-BR')}  

---

## SUMÁRIO EXECUTIVO

Este documento apresenta o Plano Diretor de Governança de TI (PDGTI) elaborado para alinhar a tecnologia da informação aos objetivos estratégicos do negócio, garantindo a geração de valor, o gerenciamento de riscos e o uso otimizado dos recursos de TI.

---

`;

  pdgtiChaptersData.forEach(chap => {
    mdContent += `### CAPÍTULO ${chap.num}: ${chap.title.toUpperCase()}\n\n`;
    mdContent += `*Descrição:* ${chap.description}\n\n`;
    mdContent += `#### Requisitos Obrigatórios:\n`;
    chap.items.forEach(item => {
      mdContent += `- [ ] ${item}\n`;
    });
    mdContent += `\n*Desenvolvimento do Capítulo:*\n[Insira aqui o conteúdo detalhado do capítulo ${chap.num}]\n\n---\n\n`;
  });

  const blob = new Blob([mdContent], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Template_PDGTI_Governanca_TI.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- LISTENERS DE FILTRO E BUSCA DO CRONOGRAMA ---
function initScheduleFilters() {
  const filterSelect = document.getElementById("schedule-filter-type");
  const searchInput = document.getElementById("schedule-search-input");

  if (filterSelect) {
    filterSelect.addEventListener("change", () => {
      renderSchedule(filterSelect.value, searchInput ? searchInput.value : "");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderSchedule(filterSelect ? filterSelect.value : "all", searchInput.value);
    });
  }
}

// --- TOGGLE DE TEMA DARK / LIGHT (PADRÃO TEMA CLARO) ---
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("theme_mode") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme_mode", theme);
    updateThemeIcon(theme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;
  if (theme === "dark") {
    toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i> <span>Modo Claro</span>`;
  } else {
    toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i> <span>Modo Escuro</span>`;
  }
}

// --- INICIALIZAÇÃO GERAL ---
document.addEventListener("DOMContentLoaded", () => {
  loadPdgtiState();
  initThemeToggle();
  initTabNavigation();
  renderSchedule();
  renderTheoryModules();
  renderPdgtiTracker();
  updateDashboardProgress();
  renderQuiz();
  initScheduleFilters();

  const exportBtn = document.getElementById("export-pdgti-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportPdgtiMarkdown);
  }
});
