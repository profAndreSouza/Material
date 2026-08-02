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
    weekRef: "Semana 1",
    title: "Módulo 1 — Introdução à Governança de TI vs Gestão de TI",
    subtitle: "Conceitos fundamentais, diferenças de papéis e agregação de valor para o negócio",
    icon: "fa-solid fa-scale-balanced",
    estimatedReading: "35 a 45 min",
    difficulty: "Fundamental",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI: da estratégia à gestão de processos e serviços. 4. ed. Rio de Janeiro: Brasport, 2014. Capítulo 1.",
      "ISO/IEC 38500:2015 - Governance of IT for the Organization.",
      "ISACA. COBIT 2019 Framework: Governance and Management Objectives."
    ],
    learningObjectives: [
      "Compreender o conceito de Governança de TI e sua origem no alinhamento estratégico.",
      "Diferenciar com clareza as responsabilidades de Governança de TI (EDM) e Gestão de TI (PBRM).",
      "Entender os fatores motivadores que levam as organizações a investirem em Governança.",
      "Relacionar os 5 pilares clássicos da Governança de TI com a geração de valor sustentável para o negócio."
    ],
    relatedPDGTI: [
      "Capítulo 1 - Caracterização da Organização e Visão Estratégica da TI",
      "Definição do escopo, setor de atuação e papel desempenhado pela tecnologia no modelo de negócios."
    ],
    examTopics: [
      "Diferença entre Governança (EDM) e Gestão (PBRM)",
      "5 Pilares da Governança de TI (Alinhamento, Valor, Riscos, Recursos, Desempenho)",
      "Fatores motivadores organizacionais e regulatórios"
    ],
    sections: [
      {
        type: "intro",
        title: "Por que estudar Governança de TI?",
        content: `A Tecnologia da Informação deixou de ser apenas uma área operacional encarregada de consertar computadores para se transformar no verdadeiro motor estratégico das empresas modernas.

Atualmente, processos vitais de vendas, produção, logística, finanças e atendimento ao cliente são 100% dependentes de sistemas de informação.

Entretanto, investir milhões em tecnologia não garante automaticamente sucesso financeiro ou operacional. Muitas empresas falham porque a área de TI trabalha isolada dos objetivos estratégicos corporativos.

A Governança de TI surge exatamente para resolver essa desconexão, garantindo que o uso da tecnologia seja avaliado, direcionado e monitorado para agregar valor real ao negócio.`
      },
      {
        type: "callout",
        style: "info",
        icon: "fa-solid fa-lightbulb",
        title: "Conceito Chave de Prova",
        content: "Governança DECIDE o direcionamento estratégico, estabelece limites e avalia resultados. Gestão EXECUTA as atividades operacionais diárias para entregar os serviços dentro dos limites estabelecidos."
      },
      {
        type: "comparison",
        title: "Governança de TI x Gestão de TI",
        leftTitle: "Governança de TI (EDM)",
        rightTitle: "Gestão de TI (PBRM)",
        left: [
          "Definição de diretrizes, prioridades e limites organizacionais.",
          "Foco em longo prazo e sustentabilidade do negócio.",
          "Responsabilidade indelegável do Corpo Diretivo / Conselho / Alta Administração.",
          "Modelo EDM: Avaliar (Evaluate), Dirigir (Direct) e Monitorar (Monitor).",
          "Mede a entrega de valor global e conformidade."
        ],
        right: [
          "Planejamento, construção, execução e operação diária dos serviços.",
          "Foco em curto e médio prazo (prazos, projetos e SLAs).",
          "Responsabilidade dos Gerentes de TI, Coordenadores e Equipe Técnica.",
          "Modelo PBRM: Planejar (Plan), Construir (Build), Executar (Run) e Monitorar (Monitor).",
          "Mede eficiência operacional e metas técnicas."
        ]
      },
      {
        type: "heading",
        title: "Os 5 Pilares Clássicos da Governança de TI"
      },
      {
        type: "cards",
        cards: [
          {
            title: "1. Alinhamento Estratégico",
            icon: "fa-solid fa-bullseye",
            content: "Garantir a convergência entre o planejamento do negócio e os planos de TI."
          },
          {
            title: "2. Entrega de Valor",
            icon: "fa-solid fa-chart-line",
            content: "Assegurar que os investimentos tecnológicos entreguem os benefícios prometidos dentro do orçamento."
          },
          {
            title: "3. Gestão de Riscos",
            icon: "fa-solid fa-shield-halved",
            content: "Preservar os ativos da empresa identificando, avaliando e mitigando ameaças tecnológicas."
          },
          {
            title: "4. Gestão de Recursos",
            icon: "fa-solid fa-server",
            content: "Otimizar o uso de investimentos, infraestrutura, aplicações, dados e capital humano."
          },
          {
            title: "5. Medição de Desempenho",
            icon: "fa-solid fa-chart-column",
            content: "Acompanhar a execução dos projetos e serviços através de indicadores quantitativos (KPIs)."
          }
        ]
      },
      {
        type: "case",
        title: "Estudo de Caso Prático",
        company: "Varejista Alfa",
        content: `A empresa Alfa investiu R$ 4 milhões na contratação de um ERP de última geração. O projeto técnico foi concluído dentro do prazo e do orçamento pela equipe de TI.

Contudo, após 1 ano, a diretoria comercial descobriu que 60% dos módulos do sistema não eram utilizados e a equipe de vendas continuava usando planilhas paralelas.

Diagnóstico: A Gestão de TI cumpriu seu papel operacional (entregou o sistema), mas a Governança de TI falhou ao não validar se a solução realmente atendia às necessidades do negócio e se os usuários haviam sido capacitados.`
      },
      {
        type: "pdgti",
        title: "Ligação com o PDGTI (Capítulo 1)",
        content: "No Capítulo 1 do PDGTI, a dupla ou estudante caracteriza a empresa escolhida, mapeia seu porte, setor econômico e define o papel que a TI desempenha (se a TI é um mero suporte operacional ou um vetor estratégico de inovação)."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 1",
        terms: [
          { term: "EDM", definition: "Sigla para Evaluate, Direct e Monitor — as 3 tarefas de Governança na ISO 38500 e COBIT." },
          { term: "PBRM", definition: "Sigla para Plan, Build, Run e Monitor — o ciclo fundamental de atividades de Gestão de TI." },
          { term: "Agregação de Valor", definition: "Relação positiva entre os benefícios gerados pela tecnologia e os custos/riscos incorridos." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 1",
        bullets: [
          "Governança define 'O QUE' deve ser feito e 'QUEM' decide; Gestão executa 'COMO' fazer.",
          "Investimentos em TI só fazem sentido quando alinhados às metas estratégicas da organização.",
          "Os 5 pilares sustentam a maturidade da governança corporativa de tecnologia."
        ]
      }
    ]
  },

  {
    id: "mod-02",
    weekRef: "Semana 2",
    title: "Módulo 2 — Governança Corporativa, SOX Act, Compliance e Ética",
    subtitle: "Controles internos, SOX Seção 404, transparência e mitigação de riscos regulatórios",
    icon: "fa-solid fa-building-shield",
    estimatedReading: "40 a 55 min",
    difficulty: "Fundamental",
    bibliography: [
      "BITTENCOURT, Carlos Magno Andriolli. Governança corporativa e compliance: planejamento e gestão estratégica. Curitiba: Contentus, 2020. Capítulos 1 e 2.",
      "Sarbanes-Oxley Act (SOX Act de 2002 - Seções 302, 404 e 802).",
      "Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)."
    ],
    learningObjectives: [
      "Compreender a relação de subordinação e alinhamento entre a Governança Corporativa e a Governança de TI.",
      "Analisar o impacto histórico e prático da Lei Sarbanes-Oxley (SOX) sobre a área de tecnologia.",
      "Entender os conceitos de Compliance, Ética Corporativa e Controles Gerais de TI (ITGC).",
      "Aplicar o princípio da Segregação de Funções (SoD) para prevenção de fraudes em sistemas."
    ],
    relatedPDGTI: [
      "Capítulo 1 - Estrutura Organizacional e Mapeamento de Stakeholders",
      "Capítulo 2 - Diagnóstico da Situação Atual de TI (Identificação de Falhas de Controle)"
    ],
    examTopics: [
      "Sarbanes-Oxley Act (Seção 404 - Avaliação de Controles Internos)",
      "Controles Gerais de TI (ITGC - IT General Controls)",
      "Segregação de Funções (SoD - Segregation of Duties)",
      "Compliance Regulatório (LGPD, SOX, Bacen)"
    ],
    sections: [
      {
        type: "intro",
        title: "A TI sob a Ótica da Governança Corporativa",
        content: `A Governança Corporativa é o sistema pelo qual as organizações são dirigidas, monitoradas e incentivadas, envolvendo os relacionamentos entre sócios, conselho de administração, diretoria e órgãos de fiscalização.

Após grandes escândalos financeiros no início dos anos 2000 (como os casos Enron e WorldCom nos EUA), constatou-se que demonstrações financeiras fraudulentas eram geradas ou manipuladas dentro de sistemas de informação sem rastreabilidade.

Isso forçou a criação de regulamentações estritas como a Lei Sarbanes-Oxley (SOX), tornando a TI parte direta das auditorias de governança corporativa.`
      },
      {
        type: "callout",
        style: "warning",
        icon: "fa-solid fa-gavel",
        title: "Lei Sarbanes-Oxley (SOX - 2002)",
        content: "A Seção 404 da SOX exige que executivos e auditores independentes atestem anualmente a eficácia dos Controles Internos sobre os relatórios financeiros. Como a contabilidade roda em ERPs, os Controles de TI (ITGC) tornaram-se obrigatórios por lei."
      },
      {
        type: "table",
        title: "Os 4 Pilares dos Controles Gerais de TI (ITGC para SOX)",
        headers: ["Domínio de Controle", "Objetivo de Auditoria", "Exemplo Prático"],
        rows: [
          ["Gestão de Acessos", "Garantir que apenas pessoas autorizadas acessem dados financeiros.", "Uso de autenticação forte e revisão periódica de privilégios de usuários."],
          ["Gestão de Mudanças", "Garantir que alterações em sistemas sejam testadas e aprovadas antes da produção.", "Proibição de desenvolvedores publicarem código diretamente em produção."],
          ["Operações de TI", "Garantir o processamento correto de rotinas diárias e backups.", "Monitoramento automatizado de rotinas batch e testes de restauração."],
          ["Desenvolvimento de Sistemas", "Garantir que novas aplicações sigam requisitos de segurança e negócio.", "Validação formal de requisitos e testes de aceitação pelo usuário (UAT)."]
        ]
      },
      {
        type: "heading",
        title: "Segregação de Funções (SoD - Segregation of Duties)"
      },
      {
        type: "paragraph",
        content: "A Segregação de Funções é um princípio fundamental de controle interno que proíbe que uma única pessoa possua privilégios suficientes no sistema para executar e ocultar fraudes ou erros. Na TI, exige-se a separação estrita entre quem desenvolve o código, quem aprova a mudança e quem opera a produção."
      },
      {
        type: "pdgti",
        title: "Aplicação Prática no PDGTI (Capítulo 2)",
        content: "No Capítulo 2, o grupo diagnostica a situação atual de conformidade da empresa, avaliando se existem políticas formais de segurança da informação, controle de acessos ou fragilidades de Segregação de Funções nos sistemas legados."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 2",
        terms: [
          { term: "Compliance", definition: "Estar em conformidade com leis, normas externas, regulamentos e políticas internas." },
          { term: "ITGC", definition: "Controles Gerais de TI que garantem a integridade dos sistemas e dados da organização." },
          { term: "SoD", definition: "Segregação de Funções; divisão de tarefas para evitar conflitos de interesse e fraudes." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 2",
        bullets: [
          "A Governança de TI viabiliza a transparência e conformidade exigidas pela Governança Corporativa.",
          "A SOX 404 transformou a auditoria de TI em requisito obrigatório em empresas de capital aberto.",
          "Controles de acesso, gestão de mudanças e segregação de funções são pilares de compliance."
        ]
      }
    ]
  },

  {
    id: "mod-03",
    weekRef: "Semana 3",
    title: "Módulo 3 — Alinhamento Estratégico de TI e PETI",
    subtitle: "Conectando a TI à estratégia do negócio, diagnósticos e instrumentos de planejamento",
    icon: "fa-solid fa-bullseye",
    estimatedReading: "45 a 55 min",
    difficulty: "Intermediário",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulo 2.",
      "LUFTMAN, Jerry. Assessing Business-IT Alignment Maturity.",
      "REZENDE, Denis Alcides. Planejamento Estratégico de Informação e Tecnologia da Informação. Atlas."
    ],
    learningObjectives: [
      "Compreender o Modelo de Alinhamento Estratégico de Luftman (SAM).",
      "Elaborar a estrutura de um Plano Estratégico de Tecnologia da Informação (PETI).",
      "Realizar a Análise SWOT aplicada à gestão de TI no contexto do negócio.",
      "Mapear mecanismos formais para priorização e tomada de decisão tecnológica."
    ],
    relatedPDGTI: [
      "Capítulo 2 - Diagnóstico da Situação Atual de TI (Matriz SWOT da TI)",
      "Capítulo 3 - Objetivos Estratégicos e Alinhamento com o Negócio"
    ],
    examTopics: [
      "PETI (Plano Estratégico de Tecnologia da Informação)",
      "Análise SWOT da TI (Forças, Oportunidades, Fraquezas, Ameaças)",
      "Alinhamento Estratégico (Luftman - 6 Domínios de Maturidade)"
    ],
    sections: [
      {
        type: "intro",
        title: "O Desafio do Alinhamento Estratégico",
        content: `O Alinhamento Estratégico é a integração contínua entre a estratégia de negócios da organização e a estratégia de TI.

Historicamente, a TI funcionava como uma 'caixa preta' reativa, atendendo solicitações operacionais sem compreender para onde a empresa desejava crescer.

O alinhamento exige que toda decisão tecnológica — desde a migração para a nuvem até a compra de um software — possua justificativa clara conectada às metas de vendas, expansão, rentabilidade ou atendimento aos clientes.`
      },
      {
        type: "heading",
        title: "O PETI — Plano Estratégico de Tecnologia da Informação"
      },
      {
        type: "paragraph",
        content: "O PETI é o instrumento formal de planejamento que estabelece o direcionamento tecnológico para um horizonte de 3 a 5 anos. Ele define o estado atual da TI, a visão de futuro desejada, a arquitetura de sistemas e o plano de transição."
      },
      {
        type: "table",
        title: "Matriz SWOT Aplicada à TI Corporativa",
        headers: ["Ambiente", "Fatores Positivos", "Fatores Negativos"],
        rows: [
          ["Ambiente Interno (Sob controle da TI)", "FORÇAS (Strengths): Equipe técnica altamente qualificada, infraestrutura em nuvem moderna, alta estabilidade do ERP.", "FRAQUEZAS (Weaknesses): Documentação desatualizada, processos manuais de deploy, dependência de fornecedor único."],
          ["Ambiente Externo (Fora do controle)", "OPORTUNIDADES (Opportunities): Adoção de Inteligência Artificial para atendimento automatizado, expansão de e-commerce.", "AMEAÇAS (Threats): Novas regulamentações de segurança, ataques de ransomware, escassez de talentos no mercado."]
        ]
      },
      {
        type: "pdgti",
        title: "Aplicação Prática no PDGTI (Capítulos 2 e 3)",
        content: "No Capítulo 2 do PDGTI, os grupos elaboram a Matriz SWOT completa da TI da empresa estudada. No Capítulo 3, desdobram os Objetivos Estratégicos que guiarão os investimentos em tecnologia."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 3",
        terms: [
          { term: "PETI", definition: "Plano Estratégico de TI; documento executivo de planejamento tecnológico de médio/longo prazo." },
          { term: "Análise SWOT", definition: "Ferramenta estratégica para avaliação de Forças, Fraquezas, Oportunidades e Ameaças." },
          { term: "Visão de Futuro da TI", definition: "Declaração da arquitetura de TI ideal desejada pela empresa para os próximos anos." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 3",
        bullets: [
          "O alinhamento estratégico garante que a TI trabalhe ativamente para atingir as metas do negócio.",
          "O PETI estabelece o roadmap de evolução da arquitetura e dos sistemas corporativos.",
          "A análise SWOT direciona os esforços de correção das fraquezas e aproveitamento de oportunidades."
        ]
      }
    ]
  },

  {
    id: "mod-04",
    weekRef: "Semana 4",
    title: "Módulo 4 — Balanced Scorecard (BSC) de TI, Portfólio e Estruturas",
    subtitle: "As 4 perspectivas do BSC, gestão do portfólio de projetos e comitês de governança",
    icon: "fa-solid fa-chart-pie",
    estimatedReading: "50 a 60 min",
    difficulty: "Intermediário",
    bibliography: [
      "KAPLAN, Robert S.; NORTON, David P. A estratégia em ação: Balanced Scorecard. Rio de Janeiro: Elsevier.",
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulo 3."
    ],
    learningObjectives: [
      "Desenvolver o Balanced Scorecard (BSC) aplicado à área de TI nas 4 perspectivas clássicas.",
      "Construir o Mapa Estratégico de TI estabelecendo relações de causa e efeito.",
      "Compreender a Gestão de Portfólio de Projetos de TI (Run, Grow, Transform).",
      "Estruturar o Comitê Estratégico de TI e aplicar a Matriz RACI."
    ],
    relatedPDGTI: [
      "Capítulo 3 - Mapa Estratégico de TI e Perspectivas do BSC",
      "Capítulo 4 - Estrutura de Governança de TI e Matriz RACI"
    ],
    examTopics: [
      "4 Perspectivas do BSC de TI (Financeira, Clientes/Usuários, Processos Internos, Aprendizado & Crescimento)",
      "Gestão de Portfólio de TI (Run, Grow, Transform)",
      "Matriz RACI (Responsible, Accountable, Consulted, Informed)",
      "Comitê Estratégico de TI (Papéis e Atribuições)"
    ],
    sections: [
      {
        type: "intro",
        title: "Medição Estratégica com o BSC de TI",
        content: `O Balanced Scorecard (BSC), criado por Robert Kaplan e David Norton, revolucionou a gestão ao demonstrar que medir apenas indicadores financeiros é insuficiente para avaliar o sucesso de uma organização.

Aplicado à TI, o BSC desdobra a visão estratégica em quatro perspectivas equilibradas, mostrando como o aprendizado da equipe melhora os processos internos, o que satisfaz os usuários e resulta em valor financeiro.`
      },
      {
        type: "cards",
        cards: [
          {
            title: "1. Perspectiva Financeira",
            icon: "fa-solid fa-dollar-sign",
            content: "Retorno sobre o Investimento (ROI de TI), otimização do orçamento, redução de custos operacionais e valor gerado."
          },
          {
            title: "2. Perspectiva dos Clientes/Usuários",
            icon: "fa-solid fa-users",
            content: "Satisfação dos usuários internos, cumprimento de SLAs, facilidade de uso dos sistemas e parceria de negócios."
          },
          {
            title: "3. Perspectiva dos Processos Internos",
            icon: "fa-solid fa-gears",
            content: "Qualidade na entrega de software, tempo de atendimento (MTTR), segurança da informação e estabilidade operacional."
          },
          {
            title: "4. Perspectiva do Aprendizado e Crescimento",
            icon: "fa-solid fa-graduation-cap",
            content: "Capacitação técnica da equipe, clima organizacional, retenção de talentos e adoção de novas tecnologias."
          }
        ]
      },
      {
        type: "heading",
        title: "A Matriz RACI de Responsabilidades"
      },
      {
        type: "paragraph",
        content: "A Matriz RACI elimina a ambiguidade atribuindo papéis claros para cada decisão ou processo de TI. Regra estrita: Deve haver exatamente UM único aprovador ('Accountable') por atividade!"
      },
      {
        type: "table",
        title: "Estrutura da Matriz RACI",
        headers: ["Sigla", "Papel na Atividade", "Definição Operacional"],
        rows: [
          ["R", "Responsible (Executor)", "Quem coloca a mão na massa e executa a tarefa."],
          ["A", "Accountable (Aprovador)", "Quem possui a autoridade final e responde pelo resultado (apenas 1 por tarefa)."],
          ["C", "Consulted (Consultado)", "Especialista ou área consultada antes de tomar a decisão."],
          ["I", "Informed (Informado)", "Pessoa ou equipe notificada sobre o andamento e conclusão."]
        ]
      },
      {
        type: "pdgti",
        title: "Aplicação Prática no PDGTI (Capítulos 3 e 4)",
        content: "No Capítulo 3, os grupos desenham o Mapa Estratégico de TI. No Capítulo 4, definem a composição do Comitê Estratégico de TI e montam a Matriz RACI para os principais processos da empresa."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 4",
        terms: [
          { term: "Mapa Estratégico", definition: "Diagrama visual que conecta os objetivos das 4 perspectivas do BSC por relações de causa e efeito." },
          { term: "Comitê Estratégico de TI", definition: "Órgão colegiado composto por lideranças de negócio e TI para deliberar sobre prioridades e orçamentos." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 4",
        bullets: [
          "O BSC de TI traduz a estratégia em indicadores distribuídos nas 4 perspectivas.",
          "A Matriz RACI garante que cada processo de TI tenha um responsável direto e um aprovador único.",
          "Comitês formais de TI evitam que decisões tecnológicas sejam tomadas de forma isolada."
        ]
      }
    ]
  },

  {
    id: "mod-05",
    weekRef: "Semana 5",
    title: "Módulo 5 — Gestão de Serviços, Relacionamento e Alocação de Recursos",
    subtitle: "Modelos operacionais de atendimento, sourcing, orçamento e Entrega Parcial 1",
    icon: "fa-solid fa-hand-holding-hand",
    estimatedReading: "40 a 50 min",
    difficulty: "Intermediário",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulo 4.",
      "AXELOS. ITIL 4 Foundation: IT Service Management."
    ],
    learningObjectives: [
      "Compreender a gestão financeira de TI distinguindo despesas de capital (Capex) e operacionais (Opex).",
      "Avaliar estratégias de sourcing tecnológico (In-house, Outsourcing, Cloud Computing).",
      "Consolidar a estrutura dos Capítulos 1 a 4 para a Entrega Parcial 1 do PDGTI."
    ],
    relatedPDGTI: [
      "ENTREGA PARCIAL 1 DO PDGTI (Consolidação dos Capítulos 1, 2, 3 e 4)"
    ],
    examTopics: [
      "Capex (Capital Expenditure) vs Opex (Operational Expenditure)",
      "Modelos de Sourcing (Outsourcing, Insourcing, Shared Services)",
      "Consolidação e Revisão da Entrega Parcial 1"
    ],
    sections: [
      {
        type: "intro",
        title: "Gestão Financeira e Modelos de Recursos em TI",
        content: `A alocação eficiente de recursos é um dos pilares centrais da Governança de TI. A TI precisa gerenciar seu orçamento com disciplina financeira, compreendendo o modelo de custos da organização.`
      },
      {
        type: "comparison",
        title: "Capex x Opex em TI Corporativa",
        leftTitle: "Capex (Capital Expenditure)",
        rightTitle: "Opex (Operational Expenditure)",
        left: [
          "Investimento em bens físicos/tangíveis (ativos da empresa).",
          "Exemplo: Compra de servidores próprios, data center, licenças perpétuas.",
          "Depreciação contabilizada ao longo de vários anos.",
          "Exige alto desembolso inicial de caixa (Upfront cost)."
        ],
        right: [
          "Despesas operacionais recorrentes de consumo de serviços.",
          "Exemplo: Assinatura de software SaaS, nuvem (AWS/Azure), terceirização.",
          "Abatido integralmente como despesa no exercício corrente.",
          "Proporciona flexibilidade e escalabilidade conforme a demanda."
        ]
      },
      {
        type: "pdgti",
        title: "Marco do PDGTI — Entrega Parcial 1",
        content: "Nesta semana, os grupos submetem a Entrega Parcial 1 contendo o refinamento dos Capítulos 1 (Caracterização da Empresa), 2 (Diagnóstico SWOT da TI), 3 (Objetivos Estratégicos e BSC) e 4 (Estrutura de Governança, Comitê e Matriz RACI)."
      },
      {
        type: "summary",
        title: "Resumo da Semana 5",
        bullets: [
          "A migração para a nuvem transforma investimentos Capex em despesas previsíveis Opex.",
          "A Entrega Parcial 1 consolida a base conceitual e diagnóstica do PDGTI."
        ]
      }
    ]
  },

  {
    id: "mod-06",
    weekRef: "Semana 7",
    title: "Módulo 6 — Gestão de Desempenho em TI, Métricas e Indicadores (KPIs)",
    subtitle: "Desenvolvimento de KPIs do negócio, linhas de base, metas e dashboards executivos",
    icon: "fa-solid fa-chart-line",
    estimatedReading: "45 a 55 min",
    difficulty: "Intermediário",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulo 5.",
      "ITIL v4 - Continual Improvement & Service Financial Management."
    ],
    learningObjectives: [
      "Diferenciar métricas operacionais genéricas de Indicadores Chave de Desempenho (KPIs).",
      "Definir linhas de base, metas SMART e frequência de apuração de indicadores de TI.",
      "Compreender as métricas operacionais de serviços (SLA, MTTR, MTBF, FCR).",
      "Projetar Dashboards Executivos para apresentação de resultados à diretoria."
    ],
    relatedPDGTI: [
      "Capítulo 5 - Indicadores de Desempenho e Acordos de Nível de Serviço (SLAs)"
    ],
    examTopics: [
      "Diferença entre Métrica Operacional e KPI",
      "Métricas de Serviços: SLA (Service Level Agreement), MTTR, MTBF, FCR",
      "Estabelecimento de Linha de Base (Baseline) e Metas SMART"
    ],
    sections: [
      {
        type: "intro",
        title: "O que não se mede, não se gerencia",
        content: `A Gestão de Desempenho em TI permite comprovar numericamente se os serviços e projetos estão atingindo os resultados esperados.

Contudo, muitas organizações cometem o erro de criar centenas de métricas irrelevantes. A governança exige o foco em KPIs (Key Performance Indicators) alinhados diretamente aos objetivos estratégicos do negócio.`
      },
      {
        type: "table",
        title: "Principais Métricas Operacionais de Serviços de TI",
        headers: ["Métrica", "Nome por Extenso", "Conceito e Significado"],
        rows: [
          ["SLA", "Service Level Agreement (Acordo de Nível de Serviço)", "Compromisso formal negociado entre a TI e o cliente sobre a qualidade do serviço."],
          ["MTTR", "Mean Time To Repair (Tempo Médio de Reparo)", "Tempo médio necessário para resolver um incidente e restabelecer o serviço."],
          ["MTBF", "Mean Time Between Failures (Tempo Médio entre Falhas)", "Indicador de confiabilidade que mede o tempo operacional entre duas paralisações."],
          ["FCR", "First Contact Resolution (Resolução no Primeiro Contato)", "Percentual de chamados resolvidos logo no primeiro atendimento do Service Desk."]
        ]
      },
      {
        type: "callout",
        style: "info",
        icon: "fa-solid fa-bullseye",
        title: "Metas SMART para KPIs",
        content: "Toda meta de KPI deve ser SMART: Específica (Specific), Mensurável (Measurable), Atingível (Achievable), Relevante (Relevant) e Temporalmente definida (Time-bound)."
      },
      {
        type: "pdgti",
        title: "Aplicação Prática no PDGTI (Capítulo 5)",
        content: "No Capítulo 5 do PDGTI, os alunos definem a tabela de KPIs da empresa estudada, informando o nome do indicador, fórmula de cálculo, linha de base atual, meta desejada e o responsável RACI."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 6",
        terms: [
          { term: "Linha de Base (Baseline)", definition: "Valor histórico atual do indicador antes da implementação de melhorias." },
          { term: "Dashboard Executivo", definition: "Painel visual sintético com gráficos dos principais KPIs para decisão do C-Level." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 7",
        bullets: [
          "Métricas medem volumes; KPIs medem o alcance de objetivos estratégicos.",
          "SLA, MTTR e MTBF são métricas essenciais para gestão de acordos de serviço.",
          "Dashboards devem apresentar dados claros para orientação rápida de decisões."
        ]
      }
    ]
  },

  {
    id: "mod-07",
    weekRef: "Semana 10",
    title: "Módulo 7 — Gestão de Riscos em TI, Compliance e Segurança da Informação",
    subtitle: "Matriz de Riscos (Probabilidade x Impacto), mitigações e a norma ISO/IEC 27001",
    icon: "fa-solid fa-shield-cat",
    estimatedReading: "50 a 60 min",
    difficulty: "Avançado",
    bibliography: [
      "ISO/IEC 27005:2018 - Information security risk management.",
      "ISO 31000:2018 - Risk management — Guidelines.",
      "ISO/IEC 27001:2022 - Information security, cybersecurity and privacy protection."
    ],
    learningObjectives: [
      "Compreender a definição de risco tecnológico como o efeito da incerteza nos objetivos.",
      "Mapear e calcular os riscos na Matriz 5x5 de Probabilidade x Impacto.",
      "Aplicar as 4 estratégias de tratamento de riscos (Evitar, Mitigar, Transferir, Aceitar).",
      "Entender a Triada CID da Segurança da Informação (Confidencialidade, Integridade, Disponibilidade)."
    ],
    relatedPDGTI: [
      "Capítulo 6 - Gestão de Riscos, Segurança da Informação e Plano de Contingência"
    ],
    examTopics: [
      "Cálculo de Risco (Risco = Probabilidade x Impacto)",
      "4 Estratégias de Tratamento de Risco (Evitar, Mitigar, Transferir, Aceitar)",
      "Tríade da Segurança da Informação (CID - Confidencialidade, Integridade, Disponibilidade)",
      "RPO (Recovery Point Objective) e RTO (Recovery Time Objective)"
    ],
    sections: [
      {
        type: "intro",
        title: "Gestão de Riscos Tecnológicos Corporativos",
        content: `Toda organização exposta à tecnologia enfrenta riscos diários: ataques de ransomware, vazamento de dados de clientes (LGPD), falhas de hardware, desastres naturais ou indisponibilidade de links.

A Gestão de Riscos de TI não busca eliminar todos os riscos (o que seria financeiramente inviável), mas sim identificar, analisar e manter os riscos dentro de níveis aceitáveis pela diretoria (Apetite ao Risco).`
      },
      {
        type: "callout",
        style: "warning",
        icon: "fa-solid fa-triangle-exclamation",
        title: "Fórmula Fundamental do Risco",
        content: "Nível de Risco = Probabilidade de Ocorrência × Impacto no Negócio. Riscos classificados no quadrante crítico exigem plano de ação imediato."
      },
      {
        type: "cards",
        cards: [
          {
            title: "1. Evitar (Avoid)",
            icon: "fa-solid fa-ban",
            content: "Eliminar a atividade de risco (ex: cancelar um projeto inseguro ou descontinuar um sistema obsoleto)."
          },
          {
            title: "2. Mitigar (Mitigate)",
            icon: "fa-solid fa-wrench",
            content: "Implementar controles para reduzir a probabilidade ou impacto (ex: instalar firewall, realizar backups, treinar equipe)."
          },
          {
            title: "3. Transferir (Transfer)",
            icon: "fa-solid fa-file-signature",
            content: "Compartilhar o risco com terceiros (ex: contratar seguro cibernético ou terceirizar data center com SLA garantido)."
          },
          {
            title: "4. Aceitar (Accept)",
            icon: "fa-solid fa-check-double",
            content: "Aceitar passivamente ou ativamente o risco residual quando o custo do controle for maior que o dano."
          }
        ]
      },
      {
        type: "heading",
        title: "A Tríade CID e Continuidades de Negócio"
      },
      {
        type: "table",
        title: "Métricas de Continuidade (BCP / DRP)",
        headers: ["Métrica", "Nome por Extenso", "Conceito"],
        rows: [
          ["RPO", "Recovery Point Objective (Objetivo de Ponto de Recuperação)", "Mede a quantidade máxima aceitável de DADOS PERDIDOS em tempo (ex: backup de até 1 hora atrás)."],
          ["RTO", "Recovery Time Objective (Objetivo de Tempo de Recuperação)", "Mede o tempo máximo aceitável que o SISTEMA PODE FICAR FORA DO AR até a restauração completa."]
        ]
      },
      {
        type: "pdgti",
        title: "Aplicação Prática no PDGTI (Capítulo 6)",
        content: "No Capítulo 6 do PDGTI, os grupos elaboram a Matriz de Riscos de TI com pelo menos 5 riscos reais da empresa, indicando probabilidade, impacto, estratégia de mitigação, RPO e RTO."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 7",
        terms: [
          { term: "Apetite ao Risco", definition: "Nível de risco que a diretoria da empresa está disposta a aceitar na busca de seus objetivos." },
          { term: "Tríade CID", definition: "Os 3 pilares da segurança: Confidencialidade (acesso restrito), Integridade (dado não alterado) e Disponibilidade (sistema acessível)." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 10",
        bullets: [
          "Risco avalia a probabilidade e o impacto de eventos incertos nos objetivos organizacionais.",
          "Existem 4 formas de tratar riscos: Evitar, Mitigar, Transferir ou Aceitar.",
          "RPO mede perda de dados tolerável; RTO mede tempo de indisponibilidade tolerável."
        ]
      }
    ]
  },

  {
    id: "mod-08",
    weekRef: "Semana 12",
    title: "Módulo 8 — Frameworks Globais: ISO/IEC 38500, COBIT 2019 e ITIL v4",
    subtitle: "Análise comparativa das normas internacionais e harmonização dos modelos",
    icon: "fa-solid fa-cubes",
    estimatedReading: "55 a 70 min",
    difficulty: "Avançado",
    bibliography: [
      "ISO/IEC 38500:2015 - Governance of IT for the Organization.",
      "ISACA. COBIT 2019 Framework: Governance and Management Objectives.",
      "AXELOS. ITIL 4 Foundation: IT Service Management. 2019."
    ],
    learningObjectives: [
      "Dominar os 6 princípios da norma ISO/IEC 38500 e o modelo EDM.",
      "Compreender a estrutura dos 5 domínios e 40 objetivos do COBIT 2019.",
      "Entender o Sistema de Valor de Serviço (SVS) e as 4 Dimensões da ITIL v4.",
      "Harmonizar a adoção conjunta de ISO 38500, COBIT e ITIL em um plano de governança."
    ],
    relatedPDGTI: [
      "Capítulo 7 - Seleção, Adequação e Justificativa dos Frameworks de Governança"
    ],
    examTopics: [
      "ISO 38500: 6 Princípios (Responsabilidade, Estratégia, Aquisição, Desempenho, Conformidade, Comportamento Humano)",
      "COBIT 2019: 5 Domínios (EDM, APO, BAI, DSS, MEA) e 40 Objetivos",
      "ITIL v4: 4 Dimensões e Práticas (Incidentes, Problemas, Mudanças, SLA, Service Desk)",
      "Harmonização de Frameworks (ISO = O Que Exigir; COBIT = O Que Gerenciar; ITIL = Como Operar)"
    ],
    sections: [
      {
        type: "intro",
        title: "Harmonização dos Frameworks Internacionais",
        content: `Nenhum modelo isolado atende todas as necessidades de uma organização. A governança de alta maturidade utiliza a combinação harmônica das normas internacionais: a ISO 38500 estabelece as diretrizes do conselho; o COBIT estruturas os objetivos de gestão/governança; e a ITIL orienta a operação de serviços.`
      },
      {
        type: "heading",
        title: "1. Norma ISO/IEC 38500 — Os 6 Princípios Fundamentais"
      },
      {
        type: "cards",
        cards: [
          { title: "1. Responsabilidade", icon: "fa-solid fa-user-check", content: "Todos entendem e aceitam suas responsabilidades no uso e oferta de TI." },
          { title: "2. Estratégia", icon: "fa-solid fa-compass", content: "Os planos de TI alinham-se continuamente às necessidades do negócio." },
          { title: "3. Aquisição", icon: "fa-solid fa-cart-shopping", content: "Investimentos são feitos com análises claras de viabilidade e risco." },
          { title: "4. Desempenho", icon: "fa-solid fa-gauge-high", content: "A TI entrega os serviços com a qualidade e prazos exigidos." },
          { title: "5. Conformidade", icon: "fa-solid fa-scale-balanced", content: "A TI atende rigorosamente a leis, regulamentos e contratos." },
          { title: "6. Comportamento Humano", icon: "fa-solid fa-people-group", content: "Políticas de TI respeitam as necessidades e a cultura das pessoas." }
        ]
      },
      {
        type: "heading",
        title: "2. Framework COBIT 2019 (ISACA) — Os 5 Domínios"
      },
      {
        type: "table",
        title: "Mapeamento dos 5 Domínios do COBIT 2019",
        headers: ["Domínio", "Escopo e Foco", "Qtd. Objetivos"],
        rows: [
          ["EDM (Avaliar, Dirigir e Monitorar)", "Governança Corporativa de TI (Conselho / Alta Administração)", "5 Objetivos (EDM01 a EDM05)"],
          ["APO (Alinhar, Planejar e Organizar)", "Gestão Estratégica, Arquitetura, Riscos e Custos", "14 Objetivos (APO01 a APO14)"],
          ["BAI (Construir, Adquirir e Implementar)", "Gestão de Projetos, Mudanças e Desenvolvimento", "11 Objetivos (BAI01 a BAI11)"],
          ["DSS (Entregar, Serviço e Suporte)", "Operações Diárias, Suporte, Incidentes e Segurança", "6 Objetivos (DSS01 a DSS06)"],
          ["MEA (Monitorar, Avaliar e Analisar)", "Qualidade, Controles Internos e Conformidade", "4 Objetivos (MEA01 a MEA04)"]
        ]
      },
      {
        type: "heading",
        title: "3. ITIL v4 (AXELOS) — As 4 Dimensões da Gestão de Serviços"
      },
      {
        type: "cards",
        cards: [
          { title: "1. Organizações e Pessoas", icon: "fa-solid fa-users", content: "Cultura, papéis, competências e liderança." },
          { title: "2. Informação e Tecnologia", icon: "fa-solid fa-database", content: "Sistemas, dados, bases de conhecimento e ferramentas." },
          { title: "3. Parceiros e Fornecedores", icon: "fa-solid fa-handshake", content: "Contratos de terceiros, fornecedores em nuvem e integradores." },
          { title: "4. Fluxos de Valor e Processos", icon: "fa-solid fa-route", content: "Sequências de atividades que transformam demandas em valor." }
        ]
      },
      {
        type: "comparison",
        title: "Práticas Essenciais da ITIL v4",
        leftTitle: "Gerenciamento de Incidentes x Problemas",
        rightTitle: "Habilitação de Mudança x SLA",
        left: [
          "Incidente: Restabelecer a operação normal o mais rápido possível.",
          "Problema: Investigar e eliminar as causas raízes dos incidentes repetitivos."
        ],
        right: [
          "Mudança: Avaliar e autorizar alterações nos sistemas com mínimo risco.",
          "SLA: Negociar e monitorar as metas formais de serviço com os usuários."
        ]
      },
      {
        type: "pdgti",
        title: "Aplicação Prática no PDGTI (Capítulo 7)",
        content: "No Capítulo 7 do PDGTI, os grupos escolhem quais objetivos do COBIT 2019 e quais práticas da ITIL v4 serão adotados na empresa, justificando como a combinação responde às dores levantadas no diagnóstico."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 8",
        terms: [
          { term: "COBIT 2019", definition: "Framework global da ISACA para governança e gestão de TI corporativa." },
          { term: "ITIL v4", definition: "Conjunto de melhores práticas da AXELOS focado na gestão e entrega de serviços de TI." },
          { term: "SVS", definition: "Sistema de Valor de Serviço da ITIL v4 que descreve como os componentes trabalham juntos para co-criar valor." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 12",
        bullets: [
          "A ISO 38500 orienta o Conselho; o COBIT estrutura a gestão; a ITIL orienta os serviços.",
          "O COBIT 2019 possui 40 objetivos divididos em 5 domínios (EDM, APO, BAI, DSS, MEA).",
          "ITIL v4 foca nas 4 dimensões e na co-criação de valor sustentável."
        ]
      }
    ]
  },

  {
    id: "mod-09",
    weekRef: "Semana 13",
    title: "Módulo 9 — Qualidade e Maturidade de Software: CMMI, MR-MPS-SW, ISO 12207 e ISO 25010",
    subtitle: "Modelos de maturidade, ciclo de vida e a norma ISO/IEC 25010 (sucessora da ISO 9126)",
    icon: "fa-solid fa-code-branch",
    estimatedReading: "50 a 65 min",
    difficulty: "Avançado",
    bibliography: [
      "CMMI Institute. CMMI V2.0 Model Overview.",
      "SOFTTEX. Guia Geral MPS.BR - Modelo de Referência MR-MPS-SW.",
      "ISO/IEC 25010:2011 Standard - Systems and software Quality Requirements and Evaluation (SQuaRE) [Sucessora da ISO 9126]."
    ],
    learningObjectives: [
      "Diferenciar Maturidade de Processo (CMMI/MPS.BR) de Qualidade de Produto (ISO 25010).",
      "Compreender os 5 Níveis de Maturidade do CMMI V2.0 e os 7 Níveis do MR-MPS-SW.",
      "Dominar as TODAS as 8 Características de Qualidade de Software da ISO/IEC 25010.",
      "Entender os processos do ciclo de vida de software da norma ISO/IEC 12207."
    ],
    relatedPDGTI: [
      "Capítulo 8 - Plano de Melhoria de Processos e Qualidade de Software"
    ],
    examTopics: [
      "Níveis de Maturidade CMMI V2.0 (1 a 5) e MR-MPS-SW (G a A)",
      "ISO/IEC 25010 (8 Características de Qualidade de Produto de Software)",
      "Atualização Normativa: ISO 25010 como sucessora oficial da antiga ISO 9126"
    ],
    sections: [
      {
        type: "intro",
        title: "Maturidade de Processos x Qualidade de Software",
        content: `Para garantir entregas de sistemas estáveis e funcionais, a governança atua em duas frentes: na maturidade dos processos de desenvolvimento (CMMI e MPS.BR) e na medição da qualidade do produto de software final (ISO 25010).`
      },
      {
        type: "table",
        title: "Comparativo de Níveis de Maturidade: CMMI V2.0 x MR-MPS-SW",
        headers: ["Nível CMMI V2.0", "Nível MR-MPS-SW (Softex)", "Descrição do Estágio da Organização"],
        rows: [
          ["Nível 1 - Inicial", "Nível G - Em Realização", "Processos imprevisíveis, caóticos e dependentes do esforço individual de 'heróis'."],
          ["Nível 2 - Gerenciado", "Nível F/E - Gerenciado / Parcialmente Definido", "Projetos possuem planejamento básico, controle de requisitos e estimativas."],
          ["Nível 3 - Definido", "Nível D/C - Definido / Largo Alcance", "Processos de engenharia de software são padronizados em toda a empresa."],
          ["Nível 4 - Gerenciado Quantitativamente", "Nível B - Gerenciado Quantitativamente", "Processos são medidos e controlados por métricas estatísticas."],
          ["Nível 5 - Em Otimização", "Nível A - Em Otimização", "Foco contínuo na melhoria dos processos, inovação e prevenção de defeitos."]
        ]
      },
      {
        type: "callout",
        style: "warning",
        icon: "fa-solid fa-triangle-exclamation",
        title: "Atualização Normativa Obrigatória de Prova",
        content: "A antiga norma ISO/IEC 9126 foi descontinuada e substituída pela família ISO/IEC 25010 (SQuaRE). A ISO 25010 estabelece 8 características de qualidade para produtos de software."
      },
      {
        type: "heading",
        title: "As 8 Características de Qualidade da ISO/IEC 25010"
      },
      {
        type: "cards",
        cards: [
          { title: "1. Adequação Funcional", icon: "fa-solid fa-check-double", content: "Completude funcional, correção funcional e apropriabilidade funcional." },
          { title: "2. Eficiência de Desempenho", icon: "fa-solid fa-gauge", content: "Comportamento em relação ao tempo de resposta, uso de recursos e capacidade." },
          { title: "3. Compatibilidade", icon: "fa-solid fa-network-wired", content: "Coexistência em ambientes compartilhados e interoperabilidade com outros sistemas." },
          { title: "4. Usabilidade", icon: "fa-solid fa-display", content: "Interface intuitiva, operabilidade, proteção contra erros do usuário e acessibilidade." },
          { title: "5. Confiabilidade", icon: "fa-solid fa-shield", content: "Maturidade do código, disponibilidade, tolerância a falhas e capacidade de recuperação." },
          { title: "6. Segurança", icon: "fa-solid fa-lock", content: "Confidencialidade dos dados, integridade, não-repúdio, rastreabilidade e autenticidade." },
          { title: "7. Manutenibilidade", icon: "fa-solid fa-code", content: "Modularidade, reusabilidade, facilidade de análise, modificabilidade e testabilidade." },
          { title: "8. Portabilidade", icon: "fa-solid fa-mobile-screen", content: "Facilidade de adaptação a novos ambientes, instalabilidade e substituibilidade." }
        ]
      },
      {
        type: "pdgti",
        title: "Aplicação Prática no PDGTI (Capítulo 8)",
        content: "No Capítulo 8 do PDGTI, os grupos avaliam o nível de maturidade atual da equipe de desenvolvimento da empresa e especificam quais características da ISO 25010 serão priorizadas nos testes de qualidade."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 9",
        terms: [
          { term: "CMMI", definition: "Capability Maturity Model Integration; modelo global de referência para maturidade de desenvolvimento." },
          { term: "ISO/IEC 25010", definition: "Norma internacional vigente que define as 8 características de qualidade de software." },
          { term: "MR-MPS-SW", definition: "Modelo de Referência para Software brasileiro mantido pela Softex, alinhado à ISO 12207 e CMMI." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 13",
        bullets: [
          "CMMI e MPS.BR medem a maturidade dos processos de desenvolvimento de software.",
          "A ISO 25010 substituiu a ISO 9126 e define 8 características de qualidade do produto.",
          "Processos maduros reduzem retrabalho e aumentam a previsibilidade das entregas."
        ]
      }
    ]
  },

  {
    id: "mod-10",
    weekRef: "Semana 15",
    title: "Módulo 10 — Implantando a Governança de TI, FCS e Gestão da Mudança",
    subtitle: "Roteiro em 6 fases, Fatores Críticos de Sucesso (FCS), Kotter e Entrega Final",
    icon: "fa-solid fa-rocket",
    estimatedReading: "45 a 55 min",
    difficulty: "Intermediário",
    bibliography: [
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulos 8 e 9.",
      "KOTTER, John P. Liderando Mudanças (Leading Change). Harvard Business Review Press."
    ],
    learningObjectives: [
      "Mapear o roteiro prático de implantação da Governança de TI em 6 Fases.",
      "Identificar os Fatores Críticos de Sucesso (FCS) e garantir o patrocínio executivo (Sponsorship).",
      "Dominar TODOS OS 8 PASSOS de John Kotter para a Gestão da Mudança Organizacional.",
      "Consolidar a estrutura executiva da Entrega Final do PDGTI."
    ],
    relatedPDGTI: [
      "Capítulo 9 - Roadmap de Implantação, Cronograma em Ondas e Matriz de Benefícios",
      "ENTREGA FINAL DO PLANO DIRETOR DE GOVERNANÇA DE TI (PDGTI)"
    ],
    examTopics: [
      "Roteiro de Implantação em 6 Fases (Sensibilização, Diagnóstico, Desenho, Plano, Piloto, Monitoramento)",
      "Fatores Críticos de Sucesso (FCS - Critical Success Factors)",
      "Os 8 Passos Completos de Kotter para Gestão da Mudança",
      "Vitórias Rápidas (Quick Wins)"
    ],
    sections: [
      {
        type: "intro",
        title: "O Desafio da Implantação Prática",
        content: `Elaborar um excelente plano conceitual não garante resultados se a organização não conseguir executá-lo. A implantação da Governança de TI é, acima de tudo, um projeto de transformação cultural e organizacional.

Superar a resistência dos colaboradores, manter o engajamento dos executivos e demonstrar resultados rápidos (Quick Wins) são os fatores decisivos para a longevidade da governança.`
      },
      {
        type: "timeline",
        title: "Roteiro de Implantação em 6 Fases (Fernandes & Abreu)",
        events: [
          { year: "Fase 1", title: "Sensibilização e Alinhamento", description: "Conscientizar o Conselho e a Diretoria Executiva sobre a necessidade e retornos da governança." },
          { year: "Fase 2", title: "Diagnóstico Situacional", description: "Avaliar o estado atual da TI, riscos, processos e lacunas de maturidade (Gap Analysis)." },
          { year: "Fase 3", title: "Desenho do Modelo", description: "Definir a estrutura do Comitê de TI, políticas corporativas, matriz RACI e frameworks." },
          { year: "Fase 4", title: "Planejamento e Roadmap", description: "Priorizar projetos em ondas de execução, orçamentos e cronogramas executivos." },
          { year: "Fase 5", title: "Execução dos Projetos Piloto", description: "Implementar projetos-piloto de alto impacto e vitórias rápidas (Quick Wins)." },
          { year: "Fase 6", title: "Monitoramento e Institucionalização", description: "Acompanhar os KPIs do BSC e consolidar a melhoria contínua na cultura corporativa." }
        ]
      },
      {
        type: "heading",
        title: "Os 8 Passos Completos de Kotter para Gestão da Mudança"
      },
      {
        type: "list",
        items: [
          "1. Criar um Senso de Urgência: Demonstrar com dados reais os riscos de manter a TI desalinhada e as oportunidades perdidas.",
          "2. Formar uma Coalizão Orientadora Forte: Reunir líderes influentes do negócio e da TI para guiar a mudança.",
          "3. Desenvolver uma Visão Estratégica e Iniciativas: Criar uma visão clara de futuro inspiradora materializada no PDGTI.",
          "4. Comunicar a Visão da Mudança de Forma Ampla: Utilizar múltiplos canais para divulgar os objetivos da governança a todos os colaboradores.",
          "5. Empoderar Colaboradores e Remover Barreiras: Eliminar burocracias, sistemas obsoletos e estruturas que impeçam a inovação.",
          "6. Gerar Vitórias de Curto Prazo (Quick Wins): Alcançar metas visíveis de alto impacto nos primeiros meses para comprovar o valor do projeto.",
          "7. Consolidar os Ganhos e Produzir Mais Mudanças: Usar a credibilidade das vitórias iniciais para reformar processos mais complexos.",
          "8. Ancorar as Novas Abordagens na Cultura Organizacional: Incorporar a governança nas rotinas diárias e integração de novos funcionários."
        ]
      },
      {
        type: "pdgti",
        title: "Marco do PDGTI — Entrega Final Completa",
        content: "No Capítulo 9, o grupo apresenta o Roadmap final em ondas, a estimativa de investimentos, os Fatores Críticos de Sucesso e submete a versão executiva completa do PDGTI."
      },
      {
        type: "glossary",
        title: "Glossário do Módulo 10",
        terms: [
          { term: "Quick Wins", definition: "Vitórias rápidas; melhorias de baixo custo e implementação ágil que comprovam o valor da governança nos primeiros meses." },
          { term: "Sponsorship", definition: "Patrocínio executivo ativo fornecido pela diretoria para respaldar as mudanças organizacionais." },
          { term: "Kotter 8 Steps", definition: "Modelo clássico de liderança de transformação organizacional desenvolvido por John Kotter." }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 15",
        bullets: [
          "A implantação da governança ocorre em 6 fases graduais para reduzir o impacto organizacional.",
          "Os 8 passos de Kotter orientam a liderança da mudança cultural das pessoas.",
          "A Entrega Final consolida todo o documento do PDGTI para decisão da diretoria."
        ]
      }
    ]
  },

  {
    id: "mod-11",
    weekRef: "Semana 16",
    title: "Módulo 11 — Consolidação da Governança, Auditoria e Lições Aprendidas",
    subtitle: "Auditoria de TI (ITGC), revisão de controles, encerramento do ciclo e melhoria contínua",
    icon: "fa-solid fa-award",
    estimatedReading: "35 a 45 min",
    difficulty: "Intermediário",
    bibliography: [
      "ISACA. IT Standards, Guidelines, and Tools for Infrastructure Professionals.",
      "FERNANDES, Aguinaldo Aragon; ABREU, Vladimir Ferraz. Implantando a Governança de TI. Capítulo 10."
    ],
    learningObjectives: [
      "Compreender o papel da Auditoria de TI (Interna e Externa) na validação dos controles de governança.",
      "Avaliar a conformidade dos Controles Gerais de TI (ITGC) e testes substantivos.",
      "Consolidar as Lições Aprendidas do projeto prático de consultoria em PDGTI.",
      "Estabelecer o ciclo de melhoria contínua (PDCA) para atualização anual do PDGTI."
    ],
    relatedPDGTI: [
      "Consolidação Final do PDGTI e Checklist de Qualidade Executiva"
    ],
    examTopics: [
      "Auditoria de TI (Testes de Conformidade vs Testes Substantivos)",
      "Melhoria Contínua da Governança (Ciclo PDCA)",
      "Consolidação e Lições Aprendidas do PBL"
    ],
    sections: [
      {
        type: "intro",
        title: "Auditoria de TI e Encerramento do Ciclo de Aprendizagem",
        content: `A Auditoria de TI é a avaliação independente e objetiva que verifica se os controles desenhados no plano de governança estão operando com eficácia e conformidade.

O encerramento da Unidade Curricular consolida a jornada dos estudantes como consultores de Governança de TI, capacitando-os para aplicar os modelos em organizações reais.`
      },
      {
        type: "cards",
        cards: [
          {
            title: "Auditoria de TI (ITGC)",
            icon: "fa-solid fa-magnifying-glass",
            content: "Verificação da eficácia dos controles de acessos, mudanças, infraestrutura e operações."
          },
          {
            title: "Melhoria Contínua (PDCA)",
            icon: "fa-solid fa-rotate",
            content: "Planejar, Executar, Checar e Agir continuamente para manter o PDGTI alinhado às mudanças do mercado."
          }
        ]
      },
      {
        type: "summary",
        title: "Resumo da Semana 16",
        bullets: [
          "A Governança de TI é um processo vivo e dinâmico que exige revisões anuais.",
          "A auditoria garante a credibilidade e a sustentabilidade dos controles estabelecidos.",
          "O aprendizado em PBL prepara os estudantes para liderar a governança digital nas corporações."
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
          <button class="btn-link-pdgti" data-pdgti-step="${item.pdgtiStep}">
            <span>${item.pdgtiStep}</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
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

  // Listeners dos atalhos diretos para o PDGTI Tracker
  document.querySelectorAll(".btn-link-pdgti").forEach(btn => {
    btn.addEventListener("click", () => {
      const pdgtiTabBtn = document.querySelector('[data-tab="tab-pdgti"]');
      if (pdgtiTabBtn) {
        pdgtiTabBtn.click();
      }
    });
  });
}

// --- HELPER DE RENDERIZAÇÃO DE SEÇÕES DE TEORIA ---
function renderModuleSection(sec) {
  if (!sec) return '';

  const formatText = (text) => {
    if (!text) return '';
    return text.trim()
      .split('\n\n')
      .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
      .join('');
  };

  switch (sec.type) {
    case 'intro':
      return `
        <div class="sec-intro">
          ${sec.title ? `<h4><i class="fa-solid fa-book-open"></i> ${sec.title}</h4>` : ''}
          <div class="sec-text">${formatText(sec.content)}</div>
        </div>
      `;

    case 'callout':
    case 'highlight':
      const calloutStyle = sec.style || 'info';
      const iconClass = sec.icon || (calloutStyle === 'warning' ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-lightbulb');
      return `
        <div class="theory-callout style-${calloutStyle}">
          ${sec.title ? `<strong><i class="${iconClass}"></i> ${sec.title}</strong>` : ''}
          <div>${formatText(sec.content)}</div>
        </div>
      `;

    case 'heading':
      return `<h3 class="sec-heading">${sec.title}</h3>`;

    case 'paragraph':
      return `<div class="sec-paragraph">${formatText(sec.content)}</div>`;

    case 'quote':
      return `
        <blockquote class="theory-quote">
          <p>"${sec.content ? sec.content.trim() : ''}"</p>
          ${sec.author ? `<cite>— ${sec.author}</cite>` : ''}
        </blockquote>
      `;

    case 'table':
      const headersHtml = (sec.headers || []).map(h => `<th>${h}</th>`).join('');
      const rowsHtml = (sec.rows || []).map(row => 
        `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
      ).join('');
      return `
        <div class="theory-table-wrap">
          ${sec.title ? `<h4>${sec.title}</h4>` : ''}
          <table class="theory-table">
            <thead><tr>${headersHtml}</tr></thead>
            <tbody>${rowsHtml}</tbody>
          </table>
        </div>
      `;

    case 'comparison':
      const leftItems = (sec.left || []).map(item => `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join('');
      const rightItems = (sec.right || []).map(item => `<li><i class="fa-solid fa-chevron-right"></i> ${item}</li>`).join('');
      return `
        <div class="comparison-block">
          ${sec.title ? `<h4>${sec.title}</h4>` : ''}
          <div class="comparison-grid">
            <div class="comp-col left">
              <div class="comp-header">${sec.leftTitle || 'Governança'}</div>
              <ul>${leftItems}</ul>
            </div>
            <div class="comp-col right">
              <div class="comp-header">${sec.rightTitle || 'Gestão'}</div>
              <ul>${rightItems}</ul>
            </div>
          </div>
        </div>
      `;

    case 'cards':
      const cardsHtml = (sec.cards || []).map(c => `
        <div class="mini-card">
          <div class="mini-card-icon"><i class="${c.icon || 'fa-solid fa-cubes'}"></i></div>
          <div class="mini-card-body">
            <strong>${c.title}</strong>
            <p>${c.content}</p>
          </div>
        </div>
      `).join('');
      return `
        <div class="mini-cards-grid">
          ${cardsHtml}
        </div>
      `;

    case 'timeline':
      const eventsHtml = (sec.events || []).map(e => `
        <div class="timeline-item">
          <div class="timeline-year">${e.year}</div>
          <div class="timeline-content">
            <strong>${e.title}</strong>
            <p>${e.description}</p>
          </div>
        </div>
      `).join('');
      return `
        <div class="timeline-block">
          ${sec.title ? `<h4><i class="fa-solid fa-timeline"></i> ${sec.title}</h4>` : ''}
          <div class="timeline-list">
            ${eventsHtml}
          </div>
        </div>
      `;

    case 'case':
      return `
        <div class="case-study-box">
          <div class="case-header">
            <span class="case-badge"><i class="fa-solid fa-building"></i> Estudo de Caso</span>
            <strong>${sec.title || 'Estudo de Caso Prático'} ${sec.company ? `(${sec.company})` : ''}</strong>
          </div>
          <div class="case-body">${formatText(sec.content)}</div>
        </div>
      `;

    case 'exercise':
      return `
        <div class="exercise-box">
          <div class="exercise-header"><i class="fa-solid fa-pen-clip"></i> ${sec.title || 'Exercício Prático'}</div>
          <p>${sec.statement}</p>
        </div>
      `;

    case 'glossary':
      const termsHtml = (sec.terms || []).map(t => `
        <div class="glossary-item">
          <dt>${t.term}</dt>
          <dd>${t.definition}</dd>
        </div>
      `).join('');
      return `
        <div class="glossary-box">
          <h4><i class="fa-solid fa-spell-check"></i> ${sec.title || 'Glossário'}</h4>
          <dl class="glossary-list">${termsHtml}</dl>
        </div>
      `;

    case 'faq':
      const faqHtml = (sec.questions || []).map(q => `
        <div class="faq-item">
          <strong><i class="fa-solid fa-circle-question"></i> ${q.question}</strong>
          <p>${q.answer}</p>
        </div>
      `).join('');
      return `
        <div class="faq-box">
          <h4><i class="fa-solid fa-comments"></i> ${sec.title || 'Perguntas Frequentes'}</h4>
          <div class="faq-list">${faqHtml}</div>
        </div>
      `;

    case 'pdgti':
      return `
        <div class="pdgti-connection-box">
          <h4><i class="fa-solid fa-diagram-project"></i> ${sec.title || 'Ligação com o PDGTI'}</h4>
          <div>${formatText(sec.content)}</div>
        </div>
      `;

    case 'reflection':
      const reflHtml = (sec.questions || []).map(q => `<li>${q}</li>`).join('');
      return `
        <div class="reflection-box">
          <h4><i class="fa-solid fa-brain"></i> ${sec.title || 'Perguntas para Reflexão'}</h4>
          <ul>${reflHtml}</ul>
        </div>
      `;

    case 'summary':
      const bulletsHtml = (sec.bullets || []).map(b => `<li><i class="fa-solid fa-check-double"></i> ${b}</li>`).join('');
      return `
        <div class="module-summary-box">
          <h4><i class="fa-solid fa-list-check"></i> ${sec.title || 'Resumo do Módulo'}</h4>
          <ul>${bulletsHtml}</ul>
        </div>
      `;

    case 'review':
      const chkHtml = (sec.checklist || []).map(c => `<li><i class="fa-regular fa-square-check"></i> ${c}</li>`).join('');
      return `
        <div class="module-review-box">
          <h4><i class="fa-solid fa-clipboard-check"></i> ${sec.title || 'Checklist de Aprendizagem'}</h4>
          <ul>${chkHtml}</ul>
        </div>
      `;

    case 'list':
      const listHtml = (sec.items || []).map(item => `<li>${item}</li>`).join('');
      return `<ul class="sec-list">${listHtml}</ul>`;

    default:
      if (sec.content) return `<div>${formatText(sec.content)}</div>`;
      return '';
  }
}

// --- POPULAR O SELECT DE MÓDULOS DE TEORIA ---
function populateTheoryModuleSelect() {
  const selectElem = document.getElementById("theory-module-select");
  if (!selectElem) return;

  selectElem.innerHTML = '<option value="all">📚 Ver Todos os 11 Módulos Teóricos</option>';

  theoreticalModulesData.forEach((mod, idx) => {
    const opt = document.createElement("option");
    opt.value = mod.id || `mod-${idx + 1}`;
    opt.textContent = `${mod.weekRef ? `[${mod.weekRef}] ` : ''}${mod.title} ${mod.subtitle ? `— ${mod.subtitle}` : ''}`;
    selectElem.appendChild(opt);
  });
}

// --- RENDERIZAÇÃO DA TEORIA ALINHADA AOS FRAMEWORKS COM FILTRO E BUSCA ---
function renderTheoryModules(selectedModId = "all", searchText = "") {
  const container = document.getElementById("theory-modules-container");
  if (!container) return;

  container.innerHTML = "";

  const filtered = theoreticalModulesData.filter(mod => {
    const matchesFilter = (selectedModId === "all") || (mod.id === selectedModId);
    
    // Busca por palavra-chave
    const modContentString = JSON.stringify(mod).toLowerCase();
    const matchesSearch = searchText === "" || modContentString.includes(searchText.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-book-open"></i>
        <p>Nenhum módulo teórico encontrado para os termos buscados.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((mod, index) => {
    const card = document.createElement("div");
    card.className = "theory-card";

    const biblioItems = (Array.isArray(mod.bibliography) ? mod.bibliography : [mod.bibliography || ''])
      .filter(Boolean)
      .map(b => `<li><i class="fa-solid fa-book"></i> ${b}</li>`).join('');

    const objItems = (mod.learningObjectives || []).map(o => `<li>${o}</li>`).join('');
    const pdgtiItems = (mod.relatedPDGTI || []).map(p => `<li>${p}</li>`).join('');
    const examItems = (mod.examTopics || []).map(t => `<span class="exam-tag">${t}</span>`).join('');

    const sectionsHtml = (mod.sections || []).map(sec => renderModuleSection(sec)).join('');

    // Navegação entre módulos (Anterior e Próximo)
    const currentGlobalIdx = theoreticalModulesData.findIndex(m => m.id === mod.id);
    const prevMod = theoreticalModulesData[currentGlobalIdx - 1];
    const nextMod = theoreticalModulesData[currentGlobalIdx + 1];

    const navButtonsHtml = `
      <div class="theory-nav-footer">
        ${prevMod ? `
          <button class="btn btn-secondary nav-mod-btn" data-target-mod="${prevMod.id}">
            <i class="fa-solid fa-chevron-left"></i> Módulo Anterior (${prevMod.title.split('—')[0].trim()})
          </button>
        ` : '<div></div>'}
        
        ${nextMod ? `
          <button class="btn btn-primary nav-mod-btn" data-target-mod="${nextMod.id}">
            Próximo Módulo (${nextMod.title.split('—')[0].trim()}) <i class="fa-solid fa-chevron-right"></i>
          </button>
        ` : '<div></div>'}
      </div>
    `;

    card.innerHTML = `
      <div class="theory-card-header">
        <div class="theory-title-wrap">
          <i class="${mod.icon || 'fa-solid fa-book'} theory-icon"></i>
          <div>
            <h3>${mod.title}</h3>
            ${mod.subtitle ? `<p class="theory-subtitle">${mod.subtitle}</p>` : ''}
          </div>
        </div>
        <div class="theory-meta-badges">
          ${mod.weekRef ? `<span class="meta-pill week-pill" style="background: rgba(79, 70, 229, 0.12); color: var(--accent-primary); font-weight: 700; border: 1px solid rgba(79, 70, 229, 0.3);"><i class="fa-regular fa-calendar-check"></i> ${mod.weekRef}</span>` : ''}
          ${mod.estimatedReading ? `<span class="meta-pill"><i class="fa-regular fa-clock"></i> ${mod.estimatedReading}</span>` : ''}
          ${mod.difficulty ? `<span class="meta-pill difficulty"><i class="fa-solid fa-layer-group"></i> ${mod.difficulty}</span>` : ''}
        </div>
      </div>

      <div class="theory-overview-grid">
        ${objItems ? `
          <div class="meta-block">
            <strong><i class="fa-solid fa-bullseye"></i> Objetivos de Aprendizagem:</strong>
            <ul>${objItems}</ul>
          </div>
        ` : ''}

        ${pdgtiItems ? `
          <div class="meta-block">
            <strong><i class="fa-solid fa-file-contract"></i> Conexão com o PDGTI:</strong>
            <ul>${pdgtiItems}</ul>
          </div>
        ` : ''}
      </div>

      ${examItems ? `
        <div class="exam-topics-row">
          <strong><i class="fa-solid fa-graduation-cap"></i> Tópicos Frequentes em Avaliações:</strong>
          <div class="exam-tags-list">${examItems}</div>
        </div>
      ` : ''}

      <div class="theory-card-body">
        ${sectionsHtml}
      </div>

      ${biblioItems ? `
        <div class="theory-card-footer">
          <strong><i class="fa-solid fa-book-bookmark"></i> Referências Bibliográficas do Módulo:</strong>
          <ul class="mod-biblio-list">${biblioItems}</ul>
        </div>
      ` : ''}

      ${navButtonsHtml}
    `;

    container.appendChild(card);
  });

  // Listeners para os botões de navegação Anterior/Próximo Módulo
  document.querySelectorAll(".nav-mod-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetId = e.currentTarget.getAttribute("data-target-mod");
      const selectElem = document.getElementById("theory-module-select");
      if (selectElem) {
        selectElem.value = targetId;
      }
      renderTheoryModules(targetId);
      const container = document.getElementById("theory-modules-container");
      if (container) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function initTheoryFilters() {
  const selectElem = document.getElementById("theory-module-select");
  const searchInput = document.getElementById("theory-search-input");

  if (selectElem) {
    selectElem.addEventListener("change", (e) => {
      renderTheoryModules(e.target.value, searchInput ? searchInput.value : "");
      const container = document.getElementById("theory-modules-container");
      if (container) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderTheoryModules(selectElem ? selectElem.value : "all", e.target.value);
    });
  }
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
        feedbackElem.classList.remove("hidden", "correct", "wrong");
        feedbackElem.classList.add("wrong");
        feedbackElem.innerHTML = `
          <strong><i class="fa-solid fa-triangle-exclamation"></i> Atenção!</strong>
          <p>Por favor, selecione uma das opções acima antes de verificar a resposta.</p>
        `;
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

// --- MODO LEITURA / EXPANDIR TELA (ZEN MODE) ---
function initZenModeToggle() {
  const toggleBtn = document.getElementById("toggle-sidebar-btn");
  const container = document.querySelector(".app-container");
  if (!toggleBtn || !container) return;

  toggleBtn.addEventListener("click", () => {
    container.classList.toggle("sidebar-collapsed");
    const isCollapsed = container.classList.contains("sidebar-collapsed");
    toggleBtn.innerHTML = isCollapsed 
      ? `<i class="fa-solid fa-compress"></i> <span>Sair do Modo Leitura</span>`
      : `<i class="fa-solid fa-expand"></i> <span>Modo Leitura</span>`;
  });
}

// --- INICIALIZAÇÃO GERAL ---
document.addEventListener("DOMContentLoaded", () => {
  loadPdgtiState();
  initThemeToggle();
  initZenModeToggle();
  initTabNavigation();
  renderSchedule();
  populateTheoryModuleSelect();
  renderTheoryModules();
  initTheoryFilters();
  renderPdgtiTracker();
  updateDashboardProgress();
  renderQuiz();
  initScheduleFilters();

  const exportBtn = document.getElementById("export-pdgti-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportPdgtiMarkdown);
  }
});
