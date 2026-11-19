# Guia de Estudos — Prova Teórico-Prática 2 (P2)
## Computação em Nuvem + Integração e Entrega Contínua — DevOps

---

## 1. Como usar este guia

A P2 será uma prova única para as duas unidades curriculares. Este guia está dividido por disciplina, mas integra os conceitos com o Factory-Hub. O foco é **conceitual**: explicar responsabilidades, decisões arquiteturais, fluxos e consequências. As questões não pedem comandos, código ou configuração prática.

### Prioridade de estudo

1. **Computação em Nuvem:** VPC, sub-redes, rotas e filtros, EC2, EKS/Kubernetes, disponibilidade e serviços gerenciados.
2. **DevOps:** testes de integração/E2E, rastreabilidade Issue–PR–checks, quality gates, imagens Docker/Docker Hub, publicação, deploy, health check e rollback.
3. **Integração:** seguir uma mensagem ou alteração de software de ponta a ponta e explicar a responsabilidade de cada componente.
4. **Fundamentos cumulativos:** IAM, containers, Git, CI e pirâmide de testes ajudam a compreender os tópicos novos.

## 2. Visão integrada do Factory-Hub

O sistema conecta telemetria industrial, ingestão, armazenamento, APIs, predição e painel. Separadamente, o ciclo DevOps leva mudanças de código até uma versão implantada.

| Fluxo da aplicação | Fluxo de entrega |
| :--- | :--- |
| ESP32 → AWS IoT Core → IoT Rule → SQS → Lambda → dados → API → painel | Issue → branch/commit → PR → quality gates → build → imagem/tag → Docker Hub → deploy → health check |

- O **fluxo da aplicação** transporta/processa dados enquanto o sistema está em uso.
- O **fluxo de entrega** valida, empacota e atualiza uma versão do software.
- Uma imagem publicada no Docker Hub não atualiza automaticamente a EC2.
- O exemplo do projeto usa IoT Core, regra, SQS, Lambda, InfluxDB, RDS, APIs Java/Python, frontend, EC2 e Docker Compose. O plano de aulas também usa DynamoDB. InfluxDB, RDS e DynamoDB têm modelos e finalidades diferentes.

---

## 3. Conteúdos de Computação em Nuvem

### Semanas 10 e 12 — VPC, sub-redes e rotas

- **VPC:** rede logicamente isolada na nuvem; o bloco CIDR define seu espaço de endereçamento.
- **Sub-rede:** recorte de endereçamento dentro da VPC, associado a uma Zona de Disponibilidade. A segmentação organiza recursos e permite rotas distintas.
- **Sub-rede pública:** tem uma tabela de rotas com caminho para Internet Gateway. O nome da sub-rede ou um IP público, isoladamente, não garantem acesso.
- **Sub-rede privada:** não oferece caminho direto para conexões iniciadas pela Internet; pode ter saída via NAT ou acesso privado via endpoint.
- **Tabela de rotas:** escolhe o próximo salto para o destino. A rota local atende à VPC; uma rota padrão pode enviar outros destinos a um gateway. Se mais de uma rota corresponde, prevalece a mais específica.
- **Internet Gateway (IGW):** conecta a VPC à Internet, mas rota, endereço, filtros e serviço também precisam estar corretos.
- **NAT Gateway:** permite que recurso privado inicie conexão externa e receba resposta. Não cria caminho para usuários externos iniciarem conexão no backend.
- Rota escolhe caminho; firewall autoriza ou bloqueia o tráfego. Sub-rede separa endereços, não substitui firewall.

Uma arquitetura em camadas pode expor um frontend e manter backend e banco privados. O backend ainda pode iniciar conexões externas controladas sem receber conexões diretas de usuários da Internet.

### Semana 13 — Security Groups, NACLs e endpoints

| Controle | Escopo | Comportamento | Função |
| :--- | :--- | :--- | :--- |
| **Security Group** | Interface/recurso, como EC2 | Stateful: acompanha a conexão permitida e o retorno | Filtra origem, destino, protocolo e porta por recurso |
| **NACL** | Sub-rede | Stateless: entrada e saída avaliadas separadamente | Filtro adicional na fronteira da sub-rede |

Security Group não cria rota, não inicia processo e não publica porta de container. Os controles se complementam; uma permissão num deles não cancela um bloqueio no outro. Menor privilégio significa liberar somente a origem e o tráfego necessários.

**VPC Endpoint** fornece caminho privado da VPC a serviços AWS compatíveis. Diferente do NAT, oferece acesso privado a serviços específicos, não saída geral a destinos externos.

A administração de recursos deve ser autenticada, autorizada e auditável. Uma instância privada pode receber comandos por serviço de gerenciamento remoto sem expor uma porta administrativa à Internet; ainda precisa de permissões e conectividade corretas.

#### Diagnóstico por camadas

1. Endereçamento: existe endereço/caminho até o destino?
2. Rota: qual tabela se aplica e qual é o próximo salto?
3. Filtros: Security Group e NACL permitem fluxo e retorno?
4. Instância/SO: a máquina está ativa e há processo escutando?
5. Container: a porta foi publicada no host/interface corretos?
6. Aplicação: endpoint/rota solicitado existe e responde?

Timeout, conexão recusada e HTTP 404 são sintomas diferentes. Um 404 geralmente indica que um servidor respondeu, mas não reconheceu aquela rota. Investigue a camada sem evidência de funcionamento antes de mudar regras.

### Semana 13 — EC2 e Amazon EKS/Kubernetes

A Semana 13 é uma aula prática comparando executar uma imagem Docker numa EC2 com executar uma aplicação em Amazon EKS. Kubernetes faz parte do conteúdo estudado.

- **Cluster EKS:** ambiente Kubernetes; o plano de controle gerenciado coordena o estado do cluster, mas não recebe diretamente as requisições HTTP da aplicação.
- **Node:** máquina de trabalho, no exercício uma EC2, com CPU, memória e rede para hospedar Pods.
- **Pod:** menor unidade de execução do Kubernetes, contendo um ou mais containers.
- **Deployment:** declara a quantidade desejada de Pods e tenta manter esse estado; se um Pod falha, o controlador pode criar outro.
- **Scheduler:** escolhe em qual Node um Pod pode rodar, considerando capacidade e regras.
- **Service:** nome e endereço estáveis para alcançar um conjunto de Pods.
- **Service tipo LoadBalancer:** solicita um balanceador externo que encaminha tráfego para a aplicação.
- **Managed Node Group:** conjunto de capacidade EC2 associado ao cluster.

Fluxo externo simplificado: navegador → Load Balancer → Service → Pod → container. O Load Balancer encaminha requisições; Deployment reconcilia réplicas; plano de controle coordena o cluster.

#### Réplicas, Nodes, AZs e CDN

- Réplicas são Pods equivalentes: ajudam capacidade e tolerância à falha de um Pod.
- Nodes são máquinas que hospedam Pods; um Node pode executar vários.
- AZs são domínios de infraestrutura isolados dentro de uma região. Distribuir Nodes e Pods entre zonas ajuda contra falhas locais.
- Quatro réplicas não garantem distribuição equilibrada entre Nodes ou AZs. É preciso capacidade e políticas de posicionamento.
- CDN aproxima conteúdo em cache, sobretudo arquivos estáticos; não substitui Pods, Nodes ou redundância entre AZs.

| Aspecto | EC2 com Docker | EKS/Kubernetes |
| :--- | :--- | :--- |
| Unidade | Container no host | Pod coordenado em cluster |
| Alocação | Equipe organiza execução na VM | Scheduler aloca Pods em Nodes |
| Recuperação | Política do container/host e operação | Controllers buscam estado desejado |
| Acesso externo | IP, rota, filtros e porta da EC2 | Service/Load Balancer e rede do cluster |
| Operação | Mais simples para poucos hosts | Mais abstrações, capacidade e custo operacional |

EKS não elimina os Nodes EC2 usados no exercício; os Pods ainda precisam de capacidade computacional. O Factory-Hub de integração usa Docker Compose na EC2. A aula de EKS é conteúdo real de Computação em Nuvem, mas não significa que o projeto inteiro esteja implantado em Kubernetes.

### Semanas 15 a 17 — IoT, filas e serviços gerenciados

1. **ESP32:** produz leitura e publica mensagem MQTT.
2. **AWS IoT Core:** recebe mensagens de dispositivos autenticados por identidade e política.
3. **IoT Rule:** seleciona mensagens por tópico/atributos e as encaminha.
4. **Amazon SQS:** buffer que desacopla publicação do processamento e absorve variação de ritmo.
5. **AWS Lambda:** executa processamento acionado por evento, como validar e persistir uma mensagem.
6. **Armazenamento/API:** dados alimentam histórico, cadastro, consolidação, predição e painel.

SQS permite que mensagens aguardem quando consumidor fica lento ou indisponível. Retentativas ajudam com falhas transitórias, mas podem repetir a entrega; o consumidor deve ser idempotente para não duplicar efeitos. Uma **DLQ** recebe mensagens que excedem tentativas e facilita análise. Com batches, é importante lidar corretamente com falhas parciais.

- **Lambda:** executa em resposta a evento/solicitação sem gestão direta do servidor; ainda possui limites de duração, memória, concorrência e dependências.
- **API Gateway:** recebe requisições HTTP e encaminha ao serviço configurado; não é, por si só, banco ou lógica de negócio.
- **Serverless** não significa “sem servidor”: provedor gerencia capacidade, equipe continua responsável por código, permissões, erros, observabilidade e custo.
- Fila + consumidor é assíncrono; API síncrona espera resposta na mesma interação.

#### Armazenamento conforme tipo de dado e consulta

| Serviço | Modelo | Uso característico |
| :--- | :--- | :--- |
| **S3** | Objetos em buckets | Arquivos, logs, artefatos e frontend estático |
| **RDS** | Relacional/SQL | Dados com relações e integridade |
| **DynamoDB** | NoSQL chave-valor/documento | Itens consultados por padrões de acesso baseados em chaves |
| **InfluxDB** | Séries temporais | Medições associadas a timestamp |
| **EBS** | Bloco | Disco persistente ligado a instância |
| **EFS** | Arquivo compartilhado | Diretórios acessados por múltiplos recursos |

DynamoDB é desenhado em torno de chave de partição, chave de ordenação e consultas previstas. RDS favorece relações e SQL; S3 armazena objetos; InfluxDB organiza séries temporais. A escolha depende do acesso esperado, não só do nome “banco”.

#### Identidade, acesso e responsabilidade

Autenticação confirma a identidade; autorização limita suas ações. Políticas IAM descrevem ações, recursos e condições. Roles permitem que serviços assumam identidades temporárias em vez de guardar credenciais permanentes no código. Menor privilégio reduz o impacto de erros. Na responsabilidade compartilhada, o provedor protege a infraestrutura da nuvem e o cliente protege identidades, dados, configurações e componentes sob sua gestão; a fronteira varia por serviço.

---

## 4. Conteúdos de Integração e Entrega Contínua — DevOps

### Ciclo de DevOps e feedback contínuo

**Planejar → Codificar → Construir → Testar → Publicar → Implantar → Operar → Monitorar → feedback para planejar novamente.**

- Planejar define problema, prioridade e critérios de aceite.
- Codificar realiza mudanças pequenas e versionadas.
- Construir transforma código/dependências em artefato executável.
- Testar verifica comportamento e qualidade.
- Publicar armazena uma versão identificável.
- Implantar faz o ambiente executar a versão escolhida.
- Operar e monitorar observam saúde, logs e comportamento para orientar o próximo ciclo.

DevOps combina colaboração, automação, fluxo pequeno e aprendizagem. Não é apenas uma ferramenta nem apenas automatizar deploy.

### Semanas 10 e 12 — Integração, E2E, Issues, PRs e quality gates

| Tipo de teste | Fronteira avaliada | Característica |
| :--- | :--- | :--- |
| **Unitário** | Regra/unidade isolada | Muitos, rápidos, falha localizada |
| **Integração** | Comunicação entre componentes e contratos | Verifica colaboração entre partes |
| **E2E** | Jornada observável do sistema integrado | Poucos, mais lentos e sensíveis ao ambiente |

A pirâmide costuma ter muitos unitários, menos testes de integração e poucos E2E críticos. E2E demais atrasam feedback e dificultam diagnóstico; apenas testes unitários não provam integração real.

- **Fixture:** estado/dados previsíveis para teste, com isolamento e limpeza.
- **Mock/stub:** substituto controlado de dependência externa. Ajuda a testar uma parte, mas não comprova que serviço real está corretamente configurado.
- Teste confiável é repetível e independente de ordem ou estado residual.
- Cobertura informa código executado, não que o comportamento foi verificado corretamente.

#### Rastreabilidade do trabalho

- **Issue:** registra necessidade, contexto e critérios de aceite observáveis.
- **Board:** visualiza estado do trabalho e fluxo; não é histórico do código.
- **Branch:** isola uma linha de mudança.
- **Pull Request (PR):** proposta de integração com diff, discussão, revisão e checks.
- **Rastreabilidade:** requisito → issue → branch/commits → PR → checks → merge → versão. Ajuda a saber por que a mudança existe, que evidência a aprovou e qual artefato a contém.
- PR pequena facilita revisão e reduz conflito; revisão humana e teste automatizado são controles diferentes e complementares.

#### GitHub Actions e quality gate

- **Workflow:** automação acionada por evento, como PR, push ou execução manual.
- **Runner:** ambiente que executa automações.
- **Job:** conjunto de tarefas que pode depender de outro job ou executar em paralelo.
- **Step:** ação dentro de job, como obter código ou executar lint/testes.
- **Secret:** valor sensível fornecido à automação sem ser gravado no código ou exposto em logs; deve ter permissões mínimas.

Um **quality gate** é política que bloqueia o avanço se os checks obrigatórios falham. Workflow gera resultado; para bloquear merge, os checks precisam ser exigidos nas regras de proteção da branch. Workflow executado não garante, sozinho, bloqueio de merge. No Factory-Hub, os gates das aulas incluem lint, testes por componente, build do frontend, E2E e builds de imagem. Gate reduz risco conforme critérios definidos, mas não prova que todo defeito foi eliminado.

### Semana 13 — Docker, tags e Docker Hub

| Conceito | Papel |
| :--- | :--- |
| **Dockerfile** | Receita para construir imagem |
| **Imagem** | Artefato empacotado com aplicação e dependências |
| **Container** | Processo em execução criado de uma imagem |
| **Registry / Docker Hub** | Serviço que armazena e distribui imagens |
| **Docker Compose** | Descreve serviços, redes, volumes e configurações de uma aplicação composta |

Build local constrói imagem; push publica; deploy coloca uma versão para executar. Não são a mesma etapa. A imagem não deve conter segredos ou configuração que varia por ambiente.

- **SemVer:** MAJOR para mudança incompatível, MINOR para funcionalidade compatível, PATCH para correção compatível.
- **Tag ligada a commit:** relaciona artefato à origem do código.
- **latest:** rótulo móvel, não basta para reprodução confiável.
- **Digest:** identifica conteúdo específico da imagem. Combinar commit, versão/digest e ambiente melhora rastreabilidade.
- **Multi-stage:** separa ferramentas de build do runtime final.
- **.dockerignore:** exclui arquivos irrelevantes ou sensíveis do contexto de build.
- Tokens do Docker Hub devem ficar no armazenamento seguro de secrets, nunca no repositório, imagem ou log.
- Construir uma vez e promover o mesmo artefato reduz divergência entre homologação e produção.

### Semanas 15 a 17 — Publicação, implantação e recuperação

| Etapa | Pergunta respondida | Exemplo |
| :--- | :--- | :--- |
| **CI/validação** | Alteração passa nos critérios? | GitHub Actions executa lint/testes/build |
| **Build** | Qual artefato foi produzido? | Imagem Java/Python ou build React |
| **Publish** | Onde obter o artefato? | Docker Hub para imagens; S3 para arquivos estáticos |
| **Deploy** | Qual versão está rodando no ambiente? | EC2 baixa e executa a imagem selecionada |
| **Health/observabilidade** | Serviço está pronto e saudável? | Health check, logs e versão |

- **Continuous Delivery:** mudança validada fica pronta para produção, mas pode esperar aprovação.
- **Continuous Deployment:** alteração aprovada pelos controles é liberada automaticamente em produção.
- Uma imagem publicada não muda containers existentes; é necessário deploy.
- Deploy direto entrega aplicação/build ao servidor; deploy por imagem padroniza aplicação e dependências. Ambos requerem configuração de runtime e validação.
- No exemplo, frontend estático pode ser publicado no S3/CloudFront; backend executa como container na EC2.
- A automação pode pedir operação remota à EC2 por serviço de gerenciamento, sem SSH de entrada. Isso ainda exige identidade/permissões, agente ativo e conectividade de saída; a instância precisa alcançar o registry.
- **Health check** verifica prontidão/saúde; processo ativo não garante dependências funcionando. **Logs** ajudam diagnóstico, sem registrar segredos.
- **Rollback** retorna a versão conhecida como saudável. Deve considerar compatibilidade de banco/dados. Estratégias rolling ou blue/green coordenam substituição progressiva, com requisitos de capacidade e compatibilidade.

---

## 5. Comparações importantes

| Não confunda | Diferença |
| :--- | :--- |
| VPC × sub-rede | Rede isolada × segmento do endereçamento |
| Rota × firewall | Próximo salto × autorização de tráfego |
| IGW × NAT | Conexão VPC–Internet × saída iniciada pelo recurso privado |
| Security Group × NACL | Stateful por recurso × stateless por sub-rede |
| EC2 × container | Máquina virtual × processo isolado sobre host |
| EC2/Docker × EKS | Containers num host × orquestração de Pods num cluster |
| Node × Pod | Máquina com capacidade × unidade de execução |
| Deployment × Service | Mantém estado/réplicas × fornece acesso estável aos Pods |
| Réplica × AZ × CDN | Cópia de aplicação × domínio de infraestrutura × cache de conteúdo |
| SQS × Lambda | Fila/buffer × função consumidora |
| Imagem × container | Artefato × processo em execução |
| GitHub × Docker Hub | Código/PR/automação × registry de imagens |
| CI × publish × deploy | Valida × armazena artefato × atualiza ambiente |
| Delivery × Deployment | Pronto para liberação possivelmente aprovada × liberação automatizada |
| Teste × quality gate | Evidência × política de passagem |
| Tag × digest | Rótulo × identidade do conteúdo |
| RDS × DynamoDB × S3 | Relacional × chaveado/documento × objetos/arquivos |

---

## 6. Glossário

| Termo | Definição |
| :--- | :--- |
| **VPC / CIDR** | Rede isolada / notação do bloco de endereços |
| **IGW / NAT** | Gateway da VPC à Internet / saída iniciada por recursos privados |
| **Security Group / NACL** | Filtro stateful no recurso / filtro stateless na sub-rede |
| **EKS** | Serviço AWS gerenciado de Kubernetes |
| **Cluster / plano de controle** | Ambiente Kubernetes / componente que coordena o estado do cluster |
| **Node / Pod** | Máquina de trabalho / unidade que executa containers |
| **Deployment / Service** | Controller que mantém réplicas / ponto estável de acesso a Pods |
| **SQS / DLQ** | Fila de mensagens / destino de mensagens que excederam retentativas |
| **Lambda** | Computação acionada por eventos/solicitações |
| **Issue / PR** | Registro de trabalho / proposta revisável de integração |
| **Workflow / runner** | Definição da automação / ambiente que a executa |
| **Quality gate** | Critério obrigatório para liberar a etapa seguinte |
| **Docker Hub** | Registry de imagens Docker |
| **Tag / digest** | Rótulo de imagem / identificador de conteúdo específico |
| **Health check / rollback** | Verificação de saúde / retorno à versão anterior conhecida |

---

## 7. Simulado conceitual da P2 (16 questões)

### Questão 01 — Sub-rede pública
Uma equipe chama a rede de “public-web”, atribui IP público à EC2 e libera HTTP no Security Group, mas não consegue alcançá-la. O que define se a sub-rede tem caminho para a Internet?

A) O nome da sub-rede.  
B) A tabela de rotas associada com rota para Internet Gateway.  
C) A imagem Docker em execução.  
D) O banco de dados selecionado.

### Questão 02 — Backend privado
Um backend precisa baixar atualizações, mas não deve receber conexões iniciadas por usuários externos. Qual desenho atende melhor?

A) Abrir todas as portas do backend à Internet.  
B) Permitir saída controlada via NAT e manter o backend sem rota direta de entrada pública.  
C) Remover tabelas de rotas.  
D) Dar ao backend nome DNS público.

### Questão 03 — Rota e permissão
Há rota entre frontend e backend, mas a conexão é bloqueada. Qual interpretação é correta?

A) Rota concede autorização automaticamente.  
B) Rota escolhe caminho; SG/NACL também precisam permitir o fluxo.  
C) CIDR substitui firewall.  
D) Docker Hub controla a conexão entre sub-redes.

### Questão 04 — Security Group e NACL
Qual comparação está correta?

A) SG é stateful e associado ao recurso; NACL é stateless e aplicada na sub-rede.  
B) Ambos são tabelas de rotas.  
C) NACL é associada a cada container.  
D) SG inicia o processo da aplicação.

### Questão 05 — EC2 e EKS
Qual afirmação resume a diferença discutida na aula 13?

A) EC2 é registry e EKS é banco de dados.  
B) EC2 com Docker executa containers num host; EKS coordena Pods em cluster e controllers mantêm o estado desejado.  
C) EKS elimina Nodes de computação.  
D) Pod equivale a AZ.

### Questão 06 — Réplicas e zonas
Uma aplicação possui quatro réplicas configuradas. O que não é possível concluir apenas desse número?

A) Que o Deployment solicita quatro Pods.  
B) Que estão distribuídas equilibradamente entre Nodes e AZs.  
C) Que o scheduler participa do posicionamento.  
D) Que podem ser alcançadas por Service.

### Questão 07 — CDN
Qual problema uma CDN atende principalmente?

A) Criar Pods e Nodes adicionais.  
B) Aproximar conteúdo em cache dos usuários.  
C) Substituir o plano de controle.  
D) Alterar regras de firewall.

### Questão 08 — Fila
Durante um pico, mensagens IoT chegam mais rápido que o processamento. Qual é o papel da SQS?

A) Executar o processamento de cada mensagem.  
B) Bufferizar mensagens e desacoplar produtor do consumidor.  
C) Substituir autenticação do dispositivo.  
D) Renderizar o painel.

### Questão 09 — Reentrega
Uma mensagem pode ser entregue mais de uma vez após falha. O que ajuda a evitar efeitos duplicados?

A) Idempotência apoiada em identificação estável do evento.  
B) Mais réplicas sem controle de evento.  
C) Nome mais longo para a fila.  
D) Tag latest.

### Questão 10 — Armazenamento
Qual associação é coerente?

A) S3 para objetos/arquivos; RDS para relações/SQL; DynamoDB para dados acessados por chaves; InfluxDB para séries temporais.  
B) Todos possuem o mesmo modelo e são intercambiáveis.  
C) DynamoDB é o sistema de arquivos dos Nodes.  
D) RDS é um registry de imagens.

### Questão 11 — Publish e deploy
A imagem nova está no Docker Hub, mas EC2 ainda executa a antiga. Qual explicação é correta?

A) Publicar imagem não implanta; ainda é preciso selecionar e executar a versão no ambiente.  
B) O Hub sempre substitui containers automaticamente.  
C) CI é o sistema operacional da instância.  
D) A tag muda processos em execução sozinha.

### Questão 12 — Quality gate
Uma PR com testes falhos ainda pode ser mesclada. O que verificar?

A) Número de réplicas Kubernetes.  
B) Se o check está exigido pelas regras de proteção da branch.  
C) Se existe CDN.  
D) Se o banco tem chave de ordenação.

### Questão 13 — Tag e digest
Por que preferir uma versão ligada ao commit ou digest em vez de depender apenas de latest?

A) Ajuda a identificar o artefato testado/implantado e facilita rastreabilidade e rollback.  
B) Criptografa segredos automaticamente.  
C) Executa testes no ambiente de produção.  
D) Garante imutabilidade da tag em qualquer registry.

### Questão 14 — Estratégia de testes
Uma mudança afeta uma regra e sua integração com persistência. Qual conjunto de evidências é mais apropriado?

A) Somente E2E em produção.  
B) Teste unitário da regra e teste de integração da fronteira de persistência; E2E pequeno para jornada crítica, se necessário.  
C) Somente cobertura percentual.  
D) Nenhum teste se a imagem construiu.

### Questão 15 — Continuous Delivery
Qual cenário representa Continuous Delivery?

A) Qualquer mudança vai automaticamente à produção.  
B) Versões validadas ficam prontas para liberação, que pode aguardar aprovação explícita.  
C) Deploy manual sem teste.  
D) Apenas salvar código no Git.

### Questão 16 — Falha após deploy
Uma nova versão está implantada, mas health check falha. Qual investigação é mais sólida?

A) Abrir todas as portas e reiniciar tudo.  
B) Conferir versão/digest, resultado do deploy, container, logs, configuração, dependências e rede; considerar rollback se não recuperar saúde com segurança.  
C) Mudar o nome do cluster.  
D) Desabilitar o health check.

---

## 8. Gabarito comentado

**01. B.** A rota para IGW define o caminho público da sub-rede; endereço, filtros e processo também precisam estar corretos.

**02. B.** NAT permite saída iniciada de dentro e resposta dessa conexão; não dá entrada pública direta ao backend.

**03. B.** Roteamento e autorização são camadas distintas; ambas precisam permitir o fluxo.

**04. A.** SG acompanha estado no recurso; NACL avalia stateless na sub-rede.

**05. B.** EKS acrescenta orquestração de Pods e reconciliação de estado desejado; EC2 com Docker organiza execução no host.

**06. B.** Quantidade de réplicas não determina sua distribuição por Node ou AZ; são necessárias capacidade e regras de posicionamento.

**07. B.** CDN aproxima conteúdo em cache do cliente; não substitui computação e redundância do cluster.

**08. B.** SQS funciona como buffer; Lambda executa o processamento.

**09. A.** Retentativas podem repetir entrega. Idempotência evita repetir o efeito de negócio.

**10. A.** Cada serviço atende a um modelo e padrão de consulta distinto.

**11. A.** Publish disponibiliza o artefato; deploy atualiza o ambiente.

**12. B.** Workflow gera status; proteção da branch o torna requisito de merge.

**13. A.** Commit/tag/digest tornam identificável qual conteúdo foi testado e implantado; latest é móvel.

**14. B.** Unitário localiza erro na regra, integração verifica fronteira e E2E cobre poucas jornadas completas.

**15. B.** Delivery mantém release validada pronta, com possível aprovação humana; Deployment automatiza também a liberação.

**16. B.** Digest identifica imagem, não prova saúde do serviço. Siga evidências até container, configuração e dependências; reverta se necessário.

---

## 9. Respostas discursivas-modelo

### A. Como uma instância privada acessa serviço externo sem ser acessível da Internet?

A tabela de rotas privada pode encaminhar tráfego iniciado pela instância para um NAT localizado numa sub-rede pública. O NAT permite receber as respostas dessa conexão, mas não oferece caminho para que usuários da Internet iniciem uma conexão no backend. Security Groups e NACLs continuam filtrando os fluxos.

### B. Explique EC2 com Docker, EKS e o caminho Kubernetes.

Em EC2 com Docker, a equipe administra a VM e inicia containers no host. Em EKS, o plano de controle coordena o cluster, Nodes fornecem capacidade, o scheduler posiciona Pods, Deployment mantém réplicas e Service dá acesso estável. O Load Balancer recebe tráfego externo e o encaminha por Service até Pods saudáveis. EKS não elimina Nodes, permissões, rede ou operação da aplicação.

### C. Diferencie CI, publicação e deploy.

CI verifica a alteração por lint, testes e build. Publicação armazena um artefato rastreável no registry. Deploy seleciona esse artefato e atualiza o ambiente em execução. Separar etapas permite bloquear publicação após falhas e saber qual commit chegou ao ambiente.

### D. Como responder a uma implantação que falhou?

Identifique commit, tag/digest e ambiente; consulte resultado do deploy, health check e logs; verifique configuração, conectividade e dependências; compare com a última versão saudável. Se a causa não puder ser corrigida na janela disponível, retorne à versão conhecida e valide a saúde. Registre causa e ação para o próximo ciclo.

---

## 10. Estratégia de revisão

1. Desenhe VPC, sub-redes, tabelas de rotas, IGW, NAT e filtros; explique um fluxo para dentro, entre camadas e para fora.
2. Desenhe Cluster → Node → Pod → Deployment/Service → Load Balancer e explique qual papel cada elemento assume.
3. Percorra ESP32 → IoT Core → regra → SQS → Lambda → armazenamento/API.
4. Percorra Issue → branch/commit → PR → gates → build → tag/digest → Docker Hub → deploy → health check/rollback.
5. Revise as comparações da seção 5 e justifique cada diferença com uma consequência arquitetural.
6. Resolva o simulado explicando o raciocínio e os limites, sem depender apenas da alternativa.

---

## 11. Materiais das aulas

- **Computação em Nuvem:** Aulas/semana_10.ipynb, semana_12.ipynb e semana_13.ipynb. A Semana 13 cobre EC2 e Amazon EKS/Kubernetes: plano de controle, grupo de Nodes, Pods, Deployment, Service/LoadBalancer, réplicas e zonas.
- **DevOps:** Aulas/semana_10.ipynb, semana_12.ipynb e semana_13.ipynb. Cobrem integração/E2E, rastreabilidade Issue/PR, quality gates, imagens versionadas e Docker Hub.
- **Factory-Hub:** README.md e tutorial/aula-07-dockerhub-github-actions.md para arquitetura e entrega; tutorial/aula-08-integracao-final.md para integração e diagnóstico por evidências.

