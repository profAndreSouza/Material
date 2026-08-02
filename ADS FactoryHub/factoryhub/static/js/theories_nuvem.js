window.lessonTheoriesNuvem = {

    1: [{
        biblio: "Kolbe Jr (2020), Cap.1; Rose (2022), Cap.1; Veras (2015), Cap.1",

        title: "Fundamentos da Computação em Nuvem",

        objetivos: [
            "Compreender o conceito de Computação em Nuvem.",
            "Identificar elasticidade, escalabilidade e resiliência.",
            "Relacionar Cloud Computing com a Indústria 4.0."
        ],

        contexto:
            "A FactoryHub será utilizada durante todo o semestre. Nesta aula os estudantes entendem onde essa aplicação ficará hospedada e por que utilizar infraestrutura em nuvem.",

        theory:
            `A Computação em Nuvem consiste na disponibilização sob demanda de recursos computacionais através da Internet.
        Em vez de comprar servidores físicos, uma empresa pode utilizar recursos conforme sua necessidade.

        Conceitos fundamentais:

        • Elasticidade
        • Escalabilidade Horizontal
        • Escalabilidade Vertical
        • Alta Disponibilidade
        • Resiliência`,

        code:
            `def calcular_cluster(instancias,vcpu,ram):
    return {
        "vCPU":instancias*vcpu,
        "RAM":instancias*ram
    }

print(calcular_cluster(4,2,8))
`,

        output:
            `{'vCPU':8,'RAM':32}`,

        interpretation:
            "Adicionar servidores aumenta a capacidade do sistema sem alterar o código da aplicação.",

        desafio:
            "Calcule quantos recursos seriam necessários para atender uma fábrica com o dobro de usuários.",

        skillsboost: {
            titulo: "Introdução ao Google Cloud",
            observacao: "Realizar o primeiro acesso ao console, explorar regiões e serviços principais."
        },

        projeto:
            "A infraestrutura criada hoje será utilizada posteriormente para publicar o FactoryHub."
    }],

    //////////////////////////////////////////////////////////////////

    2: [{

        biblio: "Veras (2015), Cap.2",

        title: "Organização de Projetos no Google Cloud",

        objetivos: [
            "Criar um Projeto.",
            "Entender Billing.",
            "Conhecer regiões e zonas."
        ],

        contexto:
            "Toda empresa organiza seus recursos dentro de Projetos. O FactoryHub possuirá um projeto próprio durante toda a disciplina.",

        theory:
            `O Projeto é a unidade administrativa do Google Cloud.
Todos os recursos pertencem obrigatoriamente a um projeto.

Nele são definidos:

• faturamento
• permissões
• APIs
• cotas
• regiões`,

        code:
            `project={
"name":"FactoryHub",
"region":"southamerica-east1"
}

print(project)
`,

        output:
            `{'name':'FactoryHub','region':'southamerica-east1'}`,

        interpretation:
            "Um projeto centraliza toda a infraestrutura da aplicação.",

        desafio:
            "Explique por que não é recomendável utilizar um único projeto para sistemas de desenvolvimento e produção.",

        skillsboost: {
            titulo: "Criando um Projeto no Google Cloud",
            observacao: "Criar projeto e explorar Cloud Console."
        },

        projeto:
            "O projeto criado será utilizado em todas as próximas aulas."
    }],

    //////////////////////////////////////////////////////////////////

    3: [{

        biblio: "Veras (2015), Cap.4",

        title: "Cloud Storage",

        objetivos: [
            "Compreender armazenamento de objetos.",
            "Criar Buckets.",
            "Entender Lifecycle."
        ],

        contexto:
            "Os arquivos enviados pelo FactoryHub serão armazenados no Cloud Storage.",

        theory:
            `Cloud Storage é um serviço para armazenamento de objetos.

Cada Bucket possui:

• localização
• classe
• políticas
• permissões
• versionamento`,

        code:
            `bucket={
"name":"factoryhub-storage",
"class":"STANDARD"
}

print(bucket)
`,

        output:
            `{'name':'factoryhub-storage','class':'STANDARD'}`,

        interpretation:
            "Buckets armazenam imagens, documentos, backups e arquivos produzidos pela aplicação.",

        desafio:
            "Pesquise quando utilizar Standard, Nearline e Coldline.",

        skillsboost: {
            titulo: "Cloud Storage",
            observacao: "Criar Bucket e enviar arquivos."
        },

        projeto:
            "Os uploads do FactoryHub serão gravados neste Bucket."
    }],

    //////////////////////////////////////////////////////////////////

    4: [{

        biblio: "Rose (2022), Cap.4",

        title: "Cloud SQL",

        objetivos: [
            "Conhecer bancos gerenciados.",
            "Criar instância PostgreSQL.",
            "Relacionar aplicação e banco."
        ],

        contexto:
            "A aplicação Flask utilizará PostgreSQL hospedado no Cloud SQL.",

        theory:
            `Cloud SQL fornece PostgreSQL totalmente gerenciado.

Possui:

• backups automáticos
• failover
• atualizações
• monitoramento`,

        code:
            `database={
"engine":"PostgreSQL",
"ha":True
}

print(database)
`,

        output:
            `{'engine':'PostgreSQL','ha':True}`,

        interpretation:
            "O banco deixa de ser administrado manualmente pela equipe.",

        desafio:
            "Explique as vantagens de utilizar Cloud SQL em vez de instalar PostgreSQL em uma VM.",

        skillsboost: {
            titulo: "Cloud SQL",
            observacao: "Criar uma instância PostgreSQL."
        },

        projeto:
            "Este banco armazenará os dados do FactoryHub."
    }],

    //////////////////////////////////////////////////////////////////

    5: [{

        biblio: "Kolbe Jr (2020), Cap.3",

        title: "Preparando a Aplicação para Deploy",

        objetivos: [
            "Compreender variáveis de ambiente.",
            "Entender configuração da aplicação.",
            "Preparar Flask para produção."
        ],

        contexto:
            "Antes do deploy é necessário separar configurações do código da aplicação.",

        theory:
            `Uma aplicação preparada para Cloud utiliza:

• variáveis de ambiente
• configurações externas
• portas configuráveis
• logs padronizados`,

        code:
            `import os

DATABASE=os.getenv("DATABASE_URL")

print(DATABASE)
`,

        output:
            `postgres://usuario:senha@host/database`,

        interpretation:
            "As credenciais deixam de ficar escritas diretamente no código.",

        desafio:
            "Modificar a aplicação Flask para utilizar variáveis de ambiente.",

        skillsboost: {
            titulo: "Cloud Shell",
            observacao: "Executar a aplicação Flask utilizando variáveis de ambiente."
        },

        projeto:
            "O FactoryHub ficará pronto para publicação."
    }],

    //////////////////////////////////////////////////////////////////

    6: [{

        biblio: "Rose (2022), Cap.3",

        title: "Publicando Aplicações com Cloud Run",

        objetivos: [
            "Entender containers.",
            "Conhecer Cloud Run.",
            "Publicar a aplicação."
        ],

        contexto:
            "Chegou o momento de disponibilizar o FactoryHub na Internet.",

        theory:
            `Cloud Run executa containers de forma totalmente gerenciada.

Características:

• Serverless

• Scale to Zero

• HTTPS automático

• Auto Scaling

• Pagamento por utilização`,

        code:
            `def scale(req):
    if req==0:
        return 0
    return (req//80)+1

print(scale(250))
`,

        output:
            `4`,

        interpretation:
            "O Cloud Run aumenta automaticamente o número de instâncias conforme a demanda.",

        desafio:
            "Explique por que o Scale-to-Zero reduz significativamente os custos de aplicações acadêmicas.",

        skillsboost: {
            titulo: "Deploy de uma aplicação no Cloud Run",
            observacao: "Publicar a primeira versão do FactoryHub."
        },

        projeto:
            "Ao final desta aula o FactoryHub estará acessível através de uma URL pública do Google Cloud."
    }],
    //////////////////////////////////////////////////////////////////

    7: [{

        biblio: "Kolbe Jr (2020), Cap.5; Veras (2015), Cap.6",

        title: "Segurança, IAM e Controle de Acesso",

        objetivos: [
            "Compreender o modelo de responsabilidade compartilhada.",
            "Conhecer IAM.",
            "Aplicar o princípio do menor privilégio."
        ],

        contexto:
            "Agora que o FactoryHub está publicado, é necessário controlar quem pode acessar e administrar cada recurso do projeto.",

        theory:
            `O IAM (Identity and Access Management) controla o acesso aos recursos do Google Cloud.

Conceitos principais:

• Usuários

• Service Accounts

• Roles

• Permissions

• Principle of Least Privilege

Cada serviço deve possuir apenas as permissões estritamente necessárias.`,

        code:
            `service_account={
"name":"factoryhub-api",
"roles":[
"Cloud Run Invoker",
"Cloud SQL Client",
"Storage Object Viewer"
]
}

print(service_account)
`,

        output:
            `{
'name':'factoryhub-api',
'roles':['Cloud Run Invoker','Cloud SQL Client','Storage Object Viewer']
}`,

        interpretation:
            "Uma Service Account representa a identidade da aplicação e não de uma pessoa.",

        desafio:
            "Liste quais permissões a aplicação realmente necessita para funcionar e quais permissões NÃO deveriam ser concedidas.",

        skillsboost: {
            titulo: "IAM Fundamentals",
            observacao: "Criar usuários, Service Accounts e atribuir papéis mínimos."
        },

        projeto:
            "A aplicação FactoryHub passa a acessar o banco e o Storage utilizando credenciais seguras.",

        timeline: {
            antes: "Projeto publicado no Cloud Run.",
            durante: "Configurar IAM e Service Accounts.",
            depois: "Revisar todas as permissões do projeto."
        },

        integracao: {
            cienciaDados: "A API continuará acessando os dados utilizando a Service Account.",
            automacao: "Os dispositivos industriais utilizarão autenticação segura.",
            devops: "As pipelines utilizarão credenciais automáticas."
        }

    }],

    //////////////////////////////////////////////////////////////////

    8: [{

        biblio: "Kolbe Jr (2020), Cap.4; Rose (2022), Cap.4",

        title: "Monitoramento da Aplicação",

        objetivos: [
            "Conhecer Cloud Monitoring.",
            "Interpretar métricas.",
            "Criar alertas."
        ],

        contexto:
            "Uma aplicação publicada precisa ser monitorada continuamente para identificar falhas antes dos usuários.",

        theory:
            `O Cloud Monitoring coleta automaticamente métricas dos serviços.

Principais indicadores:

• CPU

• Memória

• Latência

• Número de requisições

• Erros HTTP

Essas informações permitem acompanhar a saúde da aplicação.`,

        code:
            `metricas={
"cpu":37,
"latencia_ms":118,
"erros":0
}

print(metricas)
`,

        output:
            `{'cpu':37,'latencia_ms':118,'erros':0}`,

        interpretation:
            "Mesmo aplicações simples devem possuir métricas para facilitar diagnósticos.",

        desafio:
            "Defina três métricas importantes para acompanhar o FactoryHub em produção.",

        skillsboost: {
            titulo: "Cloud Monitoring",
            observacao: "Visualizar métricas e criar uma política de alerta."
        },

        projeto:
            "O FactoryHub passa a possuir monitoramento básico de disponibilidade.",

        timeline: {
            antes: "Aplicação publicada.",
            durante: "Explorar métricas e dashboards.",
            depois: "Configurar um alerta."
        },

        integracao: {
            cienciaDados: "Os dados de utilização poderão ser analisados posteriormente.",
            automacao: "Monitorar disponibilidade dos serviços industriais.",
            devops: "As métricas serão utilizadas para validar os deploys."
        }

    }],

    //////////////////////////////////////////////////////////////////

    9: [{

        biblio: "Veras (2015), Cap.7; Molinari (2018), Cap.5",

        title: "Custos, FinOps e Boas Práticas",

        objetivos: [
            "Entender cobrança na nuvem.",
            "Criar orçamentos.",
            "Evitar desperdícios."
        ],

        contexto:
            "Uma aplicação funcional também precisa ser economicamente sustentável.",

        theory:
            `FinOps aproxima tecnologia e gestão financeira.

Boas práticas:

• Budgets

• Alertas

• Scale-to-Zero

• Recursos ociosos

• Desligamento automático

• Dimensionamento correto`,

        code:
            `orcamento=100
gasto=46

saldo=orcamento-gasto

print(saldo)
`,

        output:
            `54`,

        interpretation:
            "Monitorar custos continuamente evita desperdícios e facilita a gestão da infraestrutura.",

        desafio:
            "Pesquise quais recursos do projeto geram cobrança mesmo sem utilização.",

        skillsboost: {
            titulo: "Cloud Billing",
            observacao: "Criar Budget e Alertas Financeiros."
        },

        projeto:
            "O FactoryHub passa a possuir controle financeiro básico.",

        timeline: {
            antes: "Aplicação em produção.",
            durante: "Criar orçamento.",
            depois: "Monitorar gastos semanalmente."
        },

        integracao: {
            cienciaDados: "Analisar histórico de custos.",
            automacao: "Avaliar impacto financeiro da coleta contínua.",
            devops: "Escolher estratégias de deploy de menor custo."
        }

    }],

    //////////////////////////////////////////////////////////////////

    10: [{

        biblio: "Veras (2015), Cap.6; Rose (2022), Cap.5",

        title: "Publicação de Imagens no Artifact Registry",

        objetivos: [
            "Compreender registradores de imagens.",
            "Conhecer o Artifact Registry.",
            "Preparar o projeto para CI/CD."
        ],

        contexto:
            "Antes da automação dos deploys, é necessário armazenar as imagens Docker em um repositório confiável.",

        theory:
            `O Artifact Registry armazena imagens Docker utilizadas pelos serviços do Google Cloud.

Benefícios:

• Versionamento

• Segurança

• Integração com Cloud Run

• Integração com CI/CD

• Controle de acesso`,

        code:
            `imagem={
"nome":"factoryhub",
"versao":"v1.0.0"
}

print(imagem)
`,

        output:
            `{'nome':'factoryhub','versao':'v1.0.0'}`,

        interpretation:
            "Cada versão da aplicação fica armazenada antes do deploy.",

        desafio:
            "Explique por que não é recomendado publicar diretamente uma imagem criada localmente.",

        skillsboost: {
            titulo: "Artifact Registry",
            observacao: "Criar um repositório Docker e enviar a primeira imagem."
        },

        projeto:
            "A imagem oficial do FactoryHub passa a ser armazenada no Artifact Registry.",

        timeline: {
            antes: "Aplicação containerizada.",
            durante: "Criar Registry.",
            depois: "Enviar primeira imagem."
        },

        integracao: {
            cienciaDados: "Sem impacto direto.",
            automacao: "Os serviços utilizarão imagens padronizadas.",
            devops: "Esta aula prepara a pipeline automática."
        }

    }],

    //////////////////////////////////////////////////////////////////

    11: [{

        biblio: "Rose (2022), Cap.5; Kolbe Jr (2020), Cap.5",

        title: "Operação do FactoryHub em Produção",

        objetivos: [
            "Revisar toda a infraestrutura.",
            "Validar funcionamento da aplicação.",
            "Documentar o ambiente."
        ],

        contexto:
            "Nesta aula o ambiente completo desenvolvido durante o semestre será apresentado funcionando em produção.",

        theory:
            `Uma aplicação em produção deve possuir:

• Deploy automatizado

• Banco gerenciado

• Monitoramento

• Segurança

• Backup

• Documentação

• Custos controlados

Todos esses componentes foram construídos ao longo da disciplina.`,

        code:
            `ambiente={
"frontend":"online",
"backend":"online",
"database":"healthy",
"storage":"ok",
"monitoring":"active"
}

print(ambiente)
`,

        output:
            `{
'frontend':'online',
'backend':'online',
'database':'healthy',
'storage':'ok',
'monitoring':'active'
}`,

        interpretation:
            "O FactoryHub encontra-se completamente operacional na infraestrutura do Google Cloud.",

        desafio:
            "Produzir a documentação técnica final do ambiente e registrar oportunidades de melhoria.",

        skillsboost: {
            titulo: "Lab Livre de Revisão",
            observacao: "Revisar os principais serviços utilizados durante a disciplina."
        },

        projeto:
            "Entrega final da infraestrutura do FactoryHub pronta para ser utilizada pelas disciplinas de DevOps e Ciência de Dados.",

        timeline: {
            antes: "Todas as funcionalidades implementadas.",
            durante: "Apresentação e validação do ambiente.",
            depois: "Preparação para automação completa no semestre seguinte."
        },

        integracao: {
            cienciaDados: "A aplicação disponibiliza os dados para análise.",
            automacao: "Os dados dos dispositivos podem ser enviados para a nuvem.",
            devops: "O ambiente está pronto para receber pipelines completas de CI/CD."
        }

    }]

};