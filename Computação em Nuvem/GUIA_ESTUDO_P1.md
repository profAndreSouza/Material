# Guia de Estudos — Prova Teórico-Prática 1 (P1)
## Unidade Curricular: Computação em Nuvem

---

## 1. Informações Gerais da Avaliação

- **Data da Avaliação:** Semana 08
- **Peso na Avaliação Docente:** 50% (correspondente a 27,5% da Nota Final da UC — P1 + P2 = 55%)
- **Conteúdo Cobrado:** Semanas 01 a 07 (Aulas 01 a 06 e PII)
- **Formato da Prova:** Prova escrita individual composta por **12 questões** estritamente teóricas, conceituais e de arquitetura de nuvem na AWS.
- **Tipologia das Questões:**
  - Questões de **Múltipla Escolha** (com cenários de infraestrutura, segurança e governança);
  - Questões de **Correlação de Colunas** (associação entre serviços de nuvem, modelos de responsabilidade e tipos de armazenamento);
  - Questões **Discursivas Conceituais** (justificativas arquiteturais, modelo de responsabilidade compartilhada, comparação entre virtualização e contêineres, e políticas de segurança IAM).
- **Atenção:** **A prova não exige digitação de comandos no terminal bash, comandos AWS CLI nem sintaxe de Dockerfile/Compose.** O foco total está na compreensão dos modelos de serviço, infraestrutura global da AWS, mecanismos de segurança, tipos de instâncias, storage e governança em nuvem.

---

## 2. Mapa Conceitual dos Conteúdos (Semanas 01 a 07)

### Semana 01 — Computação em Nuvem na Indústria 4.0 e Modelos de Serviço
- **Definição de Nuvem (NIST - National Institute of Standards and Technology):**
  - Modelo que permite acesso ubíquo, conveniente e sob demanda a um conjunto compartilhado de recursos computacionais configuráveis (redes, servidores, armazenamento, aplicações e serviços) que podem ser provisionados e liberados com mínimo esforço de gestão.
- **As 5 Características Essenciais da Nuvem:**
  1. *Autosserviço sob demanda (On-demand self-service):* O usuário provisiona recursos unilateralmente sem intervenção humana do provedor.
  2. *Amplo acesso à rede (Broad network access):* Recursos disponíveis via rede e acessados por plataformas heterogêneas (estações, celulares, dispositivos de campo).
  3. *Pool de recursos compartilhados (Resource pooling):* Recursos físicos agrupados para atender a múltiplos clientes (*multitenancy*) de forma dinâmica.
  4. *Elasticidade rápida (Rapid elasticity):* Capacidade de escalar verticalmente ou horizontalmente para cima ou para baixo conforme a demanda.
  5. *Serviço mensurado (Measured service / Pay-as-you-go):* Uso medido e tarifado com base no consumo efetivo de recursos.
- **Modelos de Serviço em Nuvem (Camadas de Responsabilidade):**
  - *IaaS (Infrastructure as a Service):* O provedor entrega recursos brutos (servidores virtuais, rede e armazenamento). O cliente gerencia o Sistema Operacional, atualizações, middlewares, banco de dados e aplicações (Ex: Amazon EC2, Amazon EBS).
  - *PaaS (Platform as a Service):* O provedor entrega o ambiente pronto de execução e desenvolvimento (SO, banco e runtime já gerenciados). O cliente foca exclusivamente no código da aplicação e nos dados (Ex: AWS Elastic Beanstalk, Heroku).
  - *SaaS (Software as a Service):* O provedor gerencia toda a pilha de tecnologia. O usuário consome a aplicação pronta via web/API (Ex: Microsoft 365, Google Workspace, ERPs SaaS).
- **Modelos de Implantação:** Nuvem Pública (provedor comercial compartilhado), Nuvem Privada (uso exclusivo de uma única organização), Nuvem Híbrida (combinações integradas entre data center local *on-premises* e nuvem pública) e Multicloud.
- **Impacto Financeiro:** Transição de despesas de capital (**CAPEX** — compra antecipada de servidores físicos caros que depreciam) para despesas operacionais variáveis (**OPEX** — pagamento sob demanda estritamente pelo que é consumido).

### Semana 02 — Infraestrutura Global da AWS e Ambientes de Laboratório
- **Regiões AWS (AWS Regions):**
  - Áreas geográficas isoladas no mundo (ex: `us-east-1` N. Virgínia, `sa-east-1` São Paulo).
  - Cada Região é completamente autônoma e isolada de falhas que ocorram em outras regiões.
  - *Critérios de Escolha de uma Região:* Conformidade legal e governança de dados (ex: LGPD/GDPR), latência de rede para os usuários/fábricas finais, custo dos serviços na localidade e catálogo de serviços disponibilizados.
- **Zonas de Disponibilidade (AZs - Availability Zones):**
  - Cada Região AWS é composta por **múltiplas Zonas de Disponibilidade** (mínimo de 3).
  - Uma AZ é formada por um ou mais data centers físicos discretos, com infraestrutura redundante de fornecimento de energia, refrigeração e conectividade física por fibra apagada de baixíssima latência.
  - Projetadas para garantir alta disponibilidade: se uma AZ sofrer uma inundação física ou corte elétrico, as demais continuam operando normalmente.
- **Edge Locations (Pontos de Presença):**
  - Centenas de data centers de borda distribuídos globalmente para cache de conteúdo estático e aceleração de tráfego (Amazon CloudFront e Route 53).
- **AWS Academy Learner Lab Sandbox:**
  - Ambiente educacional com orçamento pré-alocado, restrições orçamentárias e delegação de autoridade restrita à role institucional `LabRole`.

### Semana 03 — Computação com Máquinas Virtuais (EC2) e Conteinerização
- **Amazon EC2 (Elastic Compute Cloud):**
  - Servidores virtuais redimensionáveis na nuvem.
  - Famílias de instâncias: Uso Geral (Família T, M), Otimizadas para Computação (Família C), Otimizadas para Memória (Família R).
- **Mecanismos de Acesso e Segurança:**
  - *Par de Chaves SSH (.pem):* Criptografia assimétrica para autenticação sem senha no Linux. A chave pública fica instalada na instância EC2 (`authorized_keys`) e a chave privada permanece em posse do usuário.
  - *Security Groups (Firewalls Virtuais de Instância):*
    - Atuam diretamente no nível da interface de rede virtual da instância EC2.
    - São **Stateful (com estado):** se uma requisição de entrada (*Inbound*) é permitida, a resposta de saída (*Outbound*) correspondente é autorizada automaticamente, independentemente das regras de saída.
    - Regra padrão: *Deny-all* de entrada (todo tráfego é bloqueado até que uma regra explícita de autorização seja adicionada por porta, protocolo e faixa de IP/CIDR).
- **Máquinas Virtuais (VMs) vs Contêineres:**
  - *Máquinas Virtuais:* Requerem um *Hypervisor* (Type 1 bare-metal ou Type 2 hospedado). Cada VM emula o hardware completo e carrega seu próprio Sistema Operacional convidado (*Guest OS*), consumindo gigabytes de memória e demorando minutos para inicializar.
  - *Contêineres:* Compartilham o mesmo *Kernel* do Sistema Operacional do hospedeiro (*Host OS*). Isolam os processos em nível de software, consumindo apenas megabytes, iniciando em frações de segundo e garantindo paridade entre desenvolvimento e produção.

### Semana 04 — Arquitetura de Contêineres (Docker)
- **Conceitos Fundamentais:**
  - *Imagem Docker:* Pacote estático, somente leitura (*read-only*), composto por camadas empilhadas contendo o código, bibliotecas, runtime e configurações.
  - *Contêiner Docker:* Instância dinâmica e executável de uma imagem. Adiciona uma fina camada superior de leitura e escrita (*read/write*).
- **Mecanismos de Isolamento no Kernel Linux:**
  - *Namespaces:* Provê isolamento de visibilidade (PID para processos, NET para interfaces de rede, MNT para sistemas de arquivos).
  - *Control Groups (Cgroups):* Provê medição e imposição de limites de recursos de hardware (máximo de CPU, limite de memória RAM).
- **Persistência de Dados e Efemeridade:**
  - Por padrão, os dados gravados na camada do contêiner são efêmeros (destruídos quando o contêiner é apagado).
  - *Volumes Docker:* Mecanismo nativo e gerenciado para persistir dados industriais fora do ciclo de vida do contêiner.
  - *Bind Mounts:* Mapeamento direto de um diretório específico do host para dentro do contêiner.
- **Redes em Contêineres:**
  - Rede padrão *Bridge* (criação de uma sub-rede virtual isolada).
  - Mapeamento de Portas (`-p 8080:80`): expõe a porta interna do serviço na interface física do host.

### Semana 05 — Serviços de Armazenamento na AWS e Governança IAM
- **Comparativo Teórico de Armazenamento na AWS:**
  - *Amazon EBS (Elastic Block Store):* Armazenamento em bloco de alto desempenho montado como disco rígido virtual em uma instância EC2 específica dentro da mesma Zona de Disponibilidade (AZ). Ideal para o SO e bancos de dados transacionais.
  - *Amazon EFS (Elastic File System):* Sistema de arquivos compartilhado (NFS) gerenciado, elástico e multi-AZ, que pode ser montado concorrentemente por centenas de instâncias EC2 simultâneas.
  - *Amazon S3 (Simple Storage Service):* Armazenamento de objetos não estruturados (arquivos, datasets, backups). Altíssima durabilidade (99,999999999% — "11 noves"), escalabilidade infinita, estruturado em *Buckets* e *Objects*, acessível globalmente via protocolo HTTP/HTTPS de qualquer lugar da Internet.
- **AWS IAM (Identity and Access Management):**
  - Serviço global centralizado de autenticação e autorização na AWS.
  - **Princípio do Menor Privilégio (*Least Privilege*):** Conceder ao usuário ou serviço estritamente o conjunto mínimo de permissões necessárias para cumprir sua tarefa.
  - *Entidades do IAM:*
    - Usuários (Users): identidades para pessoas.
    - Grupos (Groups): coleções lógicas de usuários para atribuição em lote de permissões.
    - Funções / Papéis (Roles): identidades sem senha permanente, assumidas temporariamente por serviços AWS (ex: uma instância EC2 assumindo uma Role para gravar arquivos no S3 sem gravar credenciais no código-fonte).
  - *Políticas IAM (Policies):* Documentos em formato JSON que definem:
    - `Effect`: `Allow` ou `Deny`.
    - `Action`: ações permitidas (ex: `s3:GetObject`).
    - `Resource`: identificador do recurso (ARN — Amazon Resource Name).
    - **Regra de Ouro do IAM:** Um `Deny` explícito em qualquer política sempre sobrepõe qualquer `Allow`.
- **Modelo de Responsabilidade Compartilhada da AWS:**
  - *Segurança DA Nuvem (Responsabilidade da AWS):* Proteção da infraestrutura física global (data centers, segurança predial, hardware dos servidores, refrigeração, cabos e camadas de software dos hipervisores).
  - *Segurança NA Nuvem (Responsabilidade do Cliente):* Proteção e configuração de tudo o que o cliente coloca na nuvem (gerenciamento de senhas e acessos no IAM, aplicação de patches no Sistema Operacional das EC2s, configuração de Security Groups/firewalls, criptografia de dados em trânsito e em repouso).

### Semanas 06 e 07 — Arquitetura de Nuvem para Aplicações Industriais
- **Orquestração Multi-Contêiner com Docker Compose:**
  - Definição declarativa da arquitetura em um arquivo central para subir serviços interdependentes (Broker MQTT, Node-RED, Backend Web e Bancos de Dados).
  - Resolução automática de nomes via DNS interno da rede bridge privada (os contêineres comunicam-se entre si usando os nomes de serviço definidos, dispensando o uso de IPs fixos).
  - Exposição de portas controlada: apenas serviços de borda expõem portas externas para a Internet através do Security Group da EC2.

---

## 3. Glossário de Termos Essenciais

| Termo | Definição Teórica Concisa |
| :--- | :--- |
| **IaaS** | Modelo de nuvem onde o provedor entrega infraestrutura bruta (servidores, redes, storage) e o cliente gerencia o SO e as aplicações. |
| **PaaS** | Modelo onde o provedor entrega a plataforma e o runtime gerenciados, restando ao cliente gerenciar apenas seu código e dados. |
| **Região AWS** | Área geográfica física no mundo contendo no mínimo três Zonas de Disponibilidade independentes e isoladas de desastres. |
| **Zona de Disp. (AZ)** | Um ou mais data centers físicos com instalações redundantes de energia e rede, projetados para isolar falhas dentro de uma Região. |
| **EC2** | Serviço de computação elástica que fornece instâncias virtuais sob demanda com configurações variadas de CPU e RAM. |
| **Security Group** | Firewall virtual com estado (*stateful*) no nível de instância que controla tráfego de entrada e saída por portas e IPs. |
| **Amazon S3** | Serviço de armazenamento de objetos altamente durável (11 noves) acessível globalmente via requisições HTTP/REST. |
| **Amazon EBS** | Armazenamento de bloco de alto desempenho montado diretamente como disco em uma única instância EC2 na mesma AZ. |
| **IAM Role** | Identidade do IAM concedida temporariamente a serviços (como EC2) para acessar outros recursos sem armazenar credenciais fixas. |
| **Least Privilege** | Prática de segurança que prescreve conceder apenas os acessos estritamente necessários para a execução da tarefa. |
| **Resp. Compartilhada** | Divisão de segurança onde a AWS protege a infraestrutura física (DA nuvem) e o cliente protege seus dados e configurações (NA nuvem). |
| **Stateful Firewall** | Firewall que rastreia conexões abertas e autoriza automaticamente a resposta de saída correspondente a uma entrada permitida. |

---

## 4. Simulado Completo da Prova P1 (12 Questões no Padrão Oficial)

### Questão 01 (Múltipla Escolha — Modelos de Serviço em Nuvem)
Uma fábrica contratou uma solução em nuvem onde a equipe de desenvolvimento da empresa precisa apenas implantar o código da API em NodeJS, sem se preocupar em atualizar o Sistema Operacional Linux, instalar pacotes de segurança ou configurar o runtime de execução dos servidores.  
De acordo com as definições do NIST, qual modelo de serviço de computação em nuvem está sendo contratado?  
A) IaaS (Infrastructure as a Service).  
B) PaaS (Platform as a Service).  
C) SaaS (Software as a Service).  
D) DaaS (Database as a Service puro on-premises).  

---

### Questão 02 (Múltipla Escolha — Infraestrutura Global da AWS)
Ao planejar a arquitetura de alta disponibilidade de um sistema supervisório crítico em nuvem, um arquiteto de soluções configurou instâncias EC2 distribuídas em duas Zonas de Disponibilidade (AZs) distintas da Região de São Paulo (`sa-east-1a` e `sa-east-1b`).  
Qual é a principal justificativa técnica para essa distribuição arquitetural?  
A) Reduzir o custo de tráfego de dados para a nuvem da Europa.  
B) Garantir a continuidade da operação mesmo se ocorrer uma falha catastrófica física (como corte total de energia ou inundação) em um dos data centers.  
C) Evitar a obrigatoriedade de configuração de regras de Security Groups no nível de instâncias.  
D) Eliminar a necessidade de atribuição de endereços IP públicos nas instâncias de produção.  

---

### Questão 03 (Múltipla Escolha — Mecanismos do Security Group)
Um desenvolvedor criou uma nova instância EC2 Linux e adicionou uma regra de entrada (*Inbound Rule*) no Security Group autorizando conexões na porta TCP 1883 (protocolo MQTT) originadas de qualquer IP (`0.0.0.0/0`). Ele não adicionou nenhuma regra específica na tabela de saída (*Outbound Rules*), mantendo a configuração padrão que libera saída para a Internet.  
Quando um sensor industrial conecta-se na porta 1883, a instância envia um pacote de resposta (`CONNACK`) de volta ao sensor.  
Por que esse pacote de resposta trafega com sucesso mesmo que não haja regra de saída configurada para a porta do cliente?  
A) Porque o protocolo MQTT ignora as regras de firewall de rede da nuvem.  
B) Porque os Security Groups são *Stateful* (com estado), autorizando automaticamente o tráfego de retorno de conexões de entrada previamente aprovadas.  
C) Porque as instâncias EC2 utilizam NAT gateway interno obrigatório para conexões IoT.  
D) Porque as portas superiores a 1024 são desprotegidas por convenção no Linux.  

---

### Questão 04 (Múltipla Escolha — Virtualização por Hypervisor vs Contêineres)
Em uma reunião de modernização de infraestrutura, debateu-se a substituição de uma arquitetura baseada em Máquinas Virtuais (VMs) tradicionais por uma baseada em Contêineres Docker para hospedar microsserviços de telemetria fabril.  
Qual afirmação resume corretamente a diferença técnica arquitetural entre essas abordagens?  
A) Máquinas Virtuais compartilham o mesmo Kernel do sistema operacional do host, enquanto os contêineres carregam sistemas operacionais completos emulados via hypervisor.  
B) Contêineres exigem hardware dedicado sem sistema operacional (*bare-metal*), enquanto as VMs rodam exclusivamente sobre o Windows Server.  
C) Máquinas Virtuais emulam o hardware e executam um Sistema Operacional convidado completo sobre um hypervisor; contêineres compartilham o mesmo Kernel do Host e isolam processos via namespaces e cgroups, tornando-se muito mais leves e rápidos.  
D) Contêineres não suportam persistência de dados em disco nem mapeamento de portas de rede.  

---

### Questão 05 (Múltipla Escolha — Serviços de Armazenamento na AWS)
Um projeto de engenharia precisa armazenar 20 Terabytes de arquivos históricos de telemetria fabril, registros em formato JSON e backups de bases de dados. Esses arquivos precisam de altíssima durabilidade contra perda física, devem ser acessíveis via chamadas seguras HTTP REST de qualquer filial da empresa e não exigem que um disco seja montado no Sistema Operacional de um servidor específico.  
Qual serviço da AWS é o mais indicado arquiteturalmente para essa demanda?  
A) Amazon EBS (Elastic Block Store).  
B) Amazon S3 (Simple Storage Service).  
C) AWS Storage Gateway Tape Virtual.  
D) Amazon EC2 Instance Store (armazenamento efêmero).  

---

### Questão 06 (Múltipla Escolha — Governança e Boas Práticas no AWS IAM)
Uma equipe precisa que uma aplicação Node-RED instalada em uma máquina virtual Amazon EC2 grave relatórios automaticamente em um *bucket* do Amazon S3.  
De acordo com o princípio de segurança do Menor Privilégio e as melhores práticas de governança do AWS IAM, qual é o procedimento técnico correto a ser adotado?  
A) Criar um usuário IAM com privilégios de administrador geral (`AdministratorAccess`), gerar uma chave de acesso estática (`Access Key` / `Secret Key`) e salvar o arquivo de credenciais dentro do código da aplicação na EC2.  
B) Criar uma IAM Role com permissões estritas para escrita no bucket S3 específico (`s3:PutObject`) e associar essa Role diretamente à instância EC2, eliminando credenciais estáticas no código.  
C) Tornar o bucket do S3 público para leitura e escrita na Internet, desativando todas as travas de bloqueio público (*Block Public Access*).  
D) Compartilhar as credenciais da conta raiz (*root account*) da AWS entre os desenvolvedores para autenticação manual no terminal.  

---

### Questão 07 (Múltipla Escolha — Modelo de Responsabilidade Compartilhada)
Uma indústria que hospeda seu banco de dados MySQL em uma máquina virtual Amazon EC2 Linux foi vítima de um ataque cibernético do tipo *ransomware*, pois o administrador da fábrica utilizou uma senha fraca de SSH e não instalou as atualizações de segurança do sistema operacional por mais de um ano.  
Com base no **Modelo de Responsabilidade Compartilhada da AWS**, a responsabilidade por essa falha de segurança recai sobre:  
A) A AWS, pois o provedor de nuvem tem a obrigação contratual de forçar senhas seguras e atualizar automaticamente os pacotes internos de todas as máquinas EC2.  
B) O Cliente, pois a segurança **NA** nuvem (incluindo senhas de usuários, atualizações do SO convidado e regras de firewall) é de responsabilidade integral do cliente.  
C) Exclusivamente a operadora de telecomunicações que fornece o link de fibra óptica da fábrica.  
D) Ambas de forma indistinta, cabendo à AWS indenizar os prejuízos operacionais da fábrica.  

---

### Questão 08 (Múltipla Escolha — Políticas de Avaliação no IAM)
Um engenheiro júnior possui duas políticas IAM anexadas ao seu usuário:  
- *Política A:* Concede permissão explícita (`Allow`) para a ação de listar instâncias (`ec2:Describe*`) em qualquer recurso.  
- *Política B:* Contém uma cláusula explícita de negação (`Deny`) para qualquer ação do serviço EC2 (`ec2:*`) caso a requisição não provenha da faixa de IP da rede corporativa da empresa.  
O engenheiro tenta listar as instâncias EC2 a partir de sua residência, fora do IP da empresa.  
Qual será o resultado da avaliação de acesso pelo AWS IAM e por quê?  
A) O acesso será permitido, pois um `Allow` explícito na Política A tem prioridade cronológica sobre políticas posteriores.  
B) O acesso será negado, pois no modelo de autorização do AWS IAM, uma negação explícita (`Deny`) sempre prevalece sobre qualquer permissão (`Allow`).  
C) O acesso será submetido a uma aprovação manual por e-mail enviada ao administrador da conta.  
D) A requisição entrará em loop de timeout e será cancelada pelo hypervisor da AWS.  

---

### Questão 09 (Correlação de Colunas — Comparativo de Armazenamento na AWS)
Relacione os serviços de armazenamento da AWS na **Coluna A** com as suas características operacionais na **Coluna B**:

| Coluna A (Serviço) | Coluna B (Característica / Arquitetura) |
| :--- | :--- |
| ( 1 ) Amazon EBS | ( &nbsp; ) Armazenamento em bloco dedicado, montado diretamente como volume de disco rígido em uma única EC2 na mesma AZ. |
| ( 2 ) Amazon S3 | ( &nbsp; ) Sistema de arquivos compartilhado em rede (NFS) multi-AZ, acessível concorrentemente por centenas de instâncias EC2. |
| ( 3 ) Amazon EFS | ( &nbsp; ) Armazenamento de objetos não estruturados via web com durabilidade de 11 noves, organizado em buckets e chaves. |

Assinale a alternativa que apresenta a sequência correta de preenchimento (de cima para baixo):  
A) 1 - 3 - 2  
B) 2 - 1 - 3  
C) 3 - 1 - 2  
D) 1 - 2 - 3  

---

### Questão 10 (Correlação de Colunas — Componentes e Entidades do AWS IAM)
Relacione as entidades do AWS IAM listadas na **Coluna A** com as suas respectivas funções na **Coluna B**:

| Coluna A (Entidade IAM) | Coluna B (Definição / Papel no IAM) |
| :--- | :--- |
| ( 1 ) IAM User | ( &nbsp; ) Documento em formato JSON que especifica formalmente ações permitidas (`Allow`) ou negadas (`Deny`) sobre recursos. |
| ( 2 ) IAM Role | ( &nbsp; ) Identidade individual permanente atribuída a uma pessoa específica para autenticação no console ou CLI. |
| ( 3 ) IAM Policy | ( &nbsp; ) Identidade temporária assumida por serviços ou aplicações para obter permissões de curto prazo sem senhas gravadas. |

Assinale a alternativa que apresenta a sequência correta:  
A) 3 - 1 - 2  
B) 2 - 1 - 3  
C) 3 - 2 - 1  
D) 1 - 3 - 2  

---

### Questão 11 (Discursiva Teórica — Modelo de Responsabilidade Compartilhada da AWS)
A migração de cargas de trabalho industriais para a nuvem da AWS não elimina a responsabilidade das equipes internas de TI/TA sobre a segurança dos sistemas. O modelo que rege essa relação é denominado **Modelo de Responsabilidade Compartilhada**.  
**Com base nesse modelo:**  
a) Diferencie claramente a **"Segurança DA Nuvem"** da **"Segurança NA Nuvem"**, apontando qual entidade (AWS ou Cliente) é responsável por cada uma delas.  
b) Em um cenário onde uma fábrica provisiona uma máquina virtual Amazon EC2 hospedando um Broker MQTT e um banco de dados de telemetria, cite duas responsabilidades concretas que permanecem exclusivamente sob custódia do **Cliente**.  

---

### Questão 12 (Discursiva Teórica — Segurança em Máquinas Virtuais e Princípio do Menor Privilégio)
Para disponibilizar um painel de monitoramento industrial hospedado em uma instância EC2, a equipe de automação precisa configurar as regras de firewall virtual e as permissões de acesso ao sistema de armazenamento.  
**Responda aos itens abaixo:**  
a) Explique tecnicamente o que significa dizer que um **Security Group é *Stateful* (com estado)** e compare esse comportamento com uma tabela de firewall sem estado (*Stateless*).  
b) Defina o **Princípio do Menor Privilégio (*Principle of Least Privilege*)** no contexto do AWS IAM e explique por que a utilização de **IAM Roles** associadas à instância EC2 é tecnicamente superior ao armazenamento manual de chaves de acesso estáticas (`AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY`) em arquivos de texto dentro do servidor.  

---

## 5. Gabarito Comentado e Padrão de Resposta

- **Questão 01 — Alternativa B.**  
  *Comentário:* O modelo PaaS (Platform as a Service) fornece a infraestrutura física, o sistema operacional e o runtime de linguagens pré-configurados, permitindo ao cliente gerenciar apenas a aplicação e os dados.
- **Questão 02 — Alternativa B.**  
  *Comentário:* As Zonas de Disponibilidade (AZs) são data centers fisicamente isolados entre si. Distribuir a arquitetura entre múltiplas AZs garante resiliência e alta disponibilidade contra desastres físicos localizados.
- **Questão 03 — Alternativa B.**  
  *Comentário:* Os Security Groups da AWS são *Stateful*. Isso significa que, se uma porta de entrada é liberada para uma requisição de conexão externa, o tráfego de resposta originado internamente é automaticamente aprovado na saída.
- **Questão 04 — Alternativa C.**  
  *Comentário:* VMs utilizam hypervisors para emular hardware e executam um SO convidado completo em cada instância. Contêineres compartilham o mesmo Kernel do sistema host e utilizam recursos nativos do Linux (namespaces e cgroups) para isolamento, resultando em menor sobrecarga e inicialização rápida.
- **Questão 05 — Alternativa B.**  
  *Comentário:* O Amazon S3 é o serviço de armazenamento de objetos ideal para grandes volumes de dados não estruturados, datasets e backups, com durabilidade de 11 noves e acesso direto via HTTP REST. O EBS requer montagem em uma EC2 na mesma AZ.
- **Questão 06 — Alternativa B.**  
  *Comentário:* A boa prática de segurança consiste em anexar uma IAM Role à instância EC2 com permissões mínimas necessárias (`s3:PutObject` no bucket desejado), eliminando credenciais estáticas salvas no código-fonte.
- **Questão 07 — Alternativa B.**  
  *Comentário:* No modelo de responsabilidade compartilhada, o cliente é responsável pela segurança **NA** nuvem (configurações do SO, senhas, chaves de acesso, atualizações de pacotes e firewalls de instância).
- **Questão 08 — Alternativa B.**  
  *Comentário:* A regra universal do AWS IAM estipula que uma negação explícita (`Deny`) sempre anula e sobrepõe qualquer permissão (`Allow`). Como o IP estava fora da faixa autorizada, a solicitação é sumariamente rejeitada.
- **Questão 09 — Alternativa A (1 - 3 - 2).**  
  *Comentário:* EBS (1) é bloco dedicado para uma EC2; EFS (3) é sistema de arquivos de rede compartilhado por muitas EC2s; S3 (2) é armazenamento de objetos escalável via web.
- **Questão 10 — Alternativa A (3 - 1 - 2).**  
  *Comentário:* Policy (3) é o documento JSON de regras; User (1) é a pessoa com credenciais fixas; Role (2) é a identidade temporária delegada a serviços/recursos.
- **Questão 11 (Padrão de Resposta Esperado):**  
  *a)* A **"Segurança DA Nuvem"** é de responsabilidade exclusiva da **AWS** e engloba a infraestrutura física global (proteção física de data centers, hardware de servidores, redes físicas e hypervisors). A **"Segurança NA Nuvem"** é de responsabilidade exclusiva do **Cliente** e refere-se a tudo o que o cliente implanta e configura (dados, controle de acesso IAM, criptografia, sistemas operacionais e regras de rede).  
  *b)* São de responsabilidade exclusiva do Cliente: 1) Instalação de patches, atualizações de segurança e gestão do Sistema Operacional Linux da EC2; 2) Configuração estrita das regras de firewall do Security Group (fechando portas desnecessárias e restringindo IPs); 3) Gerenciamento de credenciais e senhas do banco de dados e do broker MQTT.
- **Questão 12 (Padrão de Resposta Esperado):**  
  *a)* Um firewall **Stateful (com estado)** rastreia a tabela de estados das conexões ativas. Quando um pacote de entrada é aceito por uma regra, o tráfego de retorno correspondente tem saída permitida automaticamente. Já um firewall **Stateless (sem estado)** avalia cada pacote de forma isolada, exigindo que o administrador crie manualmente regras explícitas tanto na tabela de entrada quanto na de saída para permitir a resposta.  
  *b)* O **Princípio do Menor Privilégio** dita que um usuário, sistema ou processo deve ter acesso estritamente aos recursos e ações mínimos necessários para desempenhar sua função, sem permissões excessivas. O uso de **IAM Roles** associadas à EC2 é muito superior a chaves estáticas porque as credenciais são geradas dinamicamente pela AWS com rotação automática de curto prazo, impedindo o vazamento permanente de senhas corporativas caso o disco ou o repositório da aplicação sejam comprometidos.

---

## 6. Dicas Estratégicas para o Dia da Prova

1. **Fixe os Modelos de Serviço:** IaaS = o cliente gerencia SO e app; PaaS = cliente gerencia só a app/dados; SaaS = o cliente apenas consome o software pronto.
2. **Memorize a Hierarquia da AWS:** Região (geográfica) $\rightarrow$ composta por Múltiplas Zonas de Disponibilidade (AZs) independentes $\rightarrow$ compostas por data centers discretos.
3. **EBS vs EFS vs S3:** EBS é o disco de uma máquina; EFS é a pasta de rede compartilhada entre muitas máquinas; S3 é o repositório global de objetos via HTTP.
4. **Regra de Ouro do IAM:** Em qualquer questão de políticas IAM, lembre-se: `Deny` explícito sempre vence `Allow` explícito.
