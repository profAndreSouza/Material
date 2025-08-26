# Tecnologia da Informação e Conectividade

Este repositório reúne conteúdos e materiais didáticos relacionados à disciplina.

| ⚠️ **Atenção**: Este material está em desenvolvimento e sofre atualizações constantes à medida que o conteúdo é construído e aprimorado.


## Competências Profissionais Desenvolvidas

- Projetar estruturas de comunicação e conectividade aplicadas a ambientes industriais.
- Analisar padrões e protocolos de redes para garantir a comunicação da infraestrutura local.
- Definir topologia de rede de comunicação visando a disponibilidade do serviço.
- Elaborar diagramas de arquitetura de redes conforme a topologia do projeto.
- Dimensionar e especificar componentes das redes conforme o projeto.
- Criar infraestrutura local conforme as especificações do projeto.
- Configurar equipamentos de redes conforme o projeto.
- Aplicar normas e legislação pertinentes à comunicação e conectividade.


## Objetivos de Aprendizagem

- Desenvolver capacidades técnicas e socioemocionais relacionadas a projetos de estruturas de comunicação e conectividade aplicadas a ambientes industriais.


## Ementa

### Redes de Computadores
- Modelo OSI
- Topologia de redes
- Transmissão de dados (síncrona, assíncrona)
- Codificação NRZ, Manchester
- Comunicação: série, paralela, simplex, half-duplex, full-duplex
- Verificação de dados: paridade, CRC
- Tipos de Redes: WAN, MAN, CAN, LAN, PAN

### Padrão IEEE 802.3 (Ethernet)
- Endereço MAC
- Controle de acesso ao meio físico
- Quadro Ethernet

### Internet
- Histórico e estrutura
- Governança e regulamentação no Brasil (CGI.br, NIC.br)
- RFCs e IETF
- Endereçamento IPv4 e IPv6
- NAT, DHCP, CIDR
- DNS e governança (ICANN, Registro.br)
- Protocolos IPv4 e IPv6: ICMP, NDP, IPSec, Mobile IPv6
- Protocolos de transporte: TCP, UDP, SCTP, DCCP
- Qualidade de Serviço (QoS, ToS, DSCP, ECN)
- Protocolos de aplicação: HTTP, SMTP, POP3, SSH, NTP, DNS

### Roteamento e Switching
- Switching, VLANs, Trunk, DTP, VTP, Etherchannel
- Spanning-Tree Protocol (STP, RSTP)
- Roteamento estático e dinâmico (IPv4 e IPv6)
- Protocolos: RIPv2, EIGRPv4, EIGRPv6, OSPFv2, OSPFv3

### Redes Sem Fio e Longa Distância
- Protocolos de encapsulamento (HDLC, PPP)
- Autenticação PPP (CHAP, PAP)
- Protocolos de Comunicação


## Capacidades Socioemocionais

- **Aprendizagem ativa:** Proatividade, criatividade e flexibilidade diante de novos contextos tecnológicos.
- **Ética:** Comportamento profissional ético, valorizando inclusão, justiça social e meio ambiente.
- **Pensamento crítico:** Capacidade de análise crítica baseada em evidências e diferentes perspectivas.


## Metodologia Proposta

- Aulas teóricas e simuladas com uso do Packet Tracer.
- Discussões em grupo.
- Estudos de caso.
- Atividades práticas em laboratório de redes.


## Instrumentos de Avaliação

**Avaliação Formativa:**
- Participação e engajamento.
- Atividades práticas.
- Trabalhos e projetos.

**Avaliação Somativa:**
- Provas ou avaliações escritas.
- Projeto integrador.
- Avaliação integradora.
- Autoavaliação.

### Composição da Nota:
- **35%** Avaliação  
- **35%** Projeto Integrador  
- **20%** Avaliação Integradora  
- **10%** Autoavaliação  

## Ambientes Pedagógicos

- Sala de aula.  
- Biblioteca.  
- Laboratório.  


## Bibliografia Básica

- TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. Redes de computadores. 6. ed. São Paulo: Grupo A, 2021.
- KUROSE, J. F.; ROSS, K. W. Redes de computadores e a internet: uma abordagem top-down. 8. ed. São Paulo: Grupo A, 2021.
- KUROSE, J. F.; ROSS, K. W. Redes de computadores e a internet: uma nova abordagem. São Paulo, SP: Pearson, 2002.


## Bibliografia Complementar

- SILVA, Cassiana Fagundes da. Arquitetura e práticas TCP/IP I e II. São Paulo: Contentus, 2021.
- BASSO, Douglas Eduardo. Administração de redes de computadores. São Paulo: Contentus, 2020.
- LIMA FILHO, Eduardo Corrêa (org.). Fundamentos de redes e cabeamento estruturado. São Paulo: Pearson, 2015.
- STALLINGS, William. Criptografia e segurança de redes: princípios e práticas. São Paulo: Pearson, 2015.
- LIMA, Janssen dos Reis. Monitoramento de redes com Zabbix. Rio de Janeiro: Brasport, 2014.

## Cronograma

| Aula   | Tema / Projeto                            | Teoria (breve)                                                    | Prática no Packet Tracer                                                                    |
| ------ | ----------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **01** | Introdução à disciplina                   | Plano de ensino, redes no dia a dia                               | —                                                                                           |
| **02** | Classificação e Modelo OSI                | LAN, MAN, WAN. Topologias. OSI                                    | Identificação de topologias em cenários simples                                             |
| **03** | Camada Física + Transmissão e Codificação | Meios de transmissão, cabeamento, NRZ, Manchester, simplex/duplex | Montagem de cenários, cabeamento, teste de conectividade e simulação de tráfego             |
| **04** | **Ethernet Básico**                       | Quadro Ethernet. Endereços MAC                                    | Montar rede simples com PCs + switch e analisar endereços MAC                               |
| **05** | **Projeto 1 – Escritório Simples**        | Revisão OSI + Ethernet                                            | Criar rede de 5 PCs e 1 switch. Testar ping e tráfego                                       |
| **06** | VLANs e Segmentação                       | Conceito de VLANs, isolamento lógico                              | Criar 2 VLANs em um switch. Verificar comunicação interna                                   |
| **07** | **Projeto 2 – Rede com Departamentos**    | VLANs, Trunking                                                   | Montar rede com 2 switches e 2 VLANs + roteador interligando                                |
| **08** | Endereçamento IPv4                        | Classes, máscaras, subnetting                                     | Configurar IPs em hosts e roteadores (cenário de um prédio)                                 |
| **09** | **Projeto 3 – Subredes em um Campus**     | Revisão IPv4                                                      | Criar rede com 3 subredes interligadas via roteador                                         |
| **10** | Roteamento Estático                       | Conceitos de rotas                                                | Configurar rotas estáticas em rede com 3 roteadores                                         |
| **11** | **Projeto 4 – Rede Intermunicipal**       | Revisão + roteamento estático                                     | Simular matriz e filial conectadas                                                          |
| **12** | Roteamento Dinâmico                       | RIP, OSPF (básico)                                                | Configurar RIP entre roteadores. Comparar com estático                                      |
| **13** | **Projeto 5 – Expansão de Rede**          | OSPF + VLANs                                                      | Rede de campus universitário (switching + roteamento dinâmico)                              |
| **14** | Protocolos de Aplicação                   | TCP x UDP. Protocolos HTTP, DNS, SMTP, SSH                        | Simular servidores Web, DNS e E-mail no Packet Tracer                                       |
| **15** | **Desafio Final – Rede Completa**         | Revisão geral                                                     | Montar rede com VLANs, roteamento dinâmico + serviços (DNS, Web, Email). Apresentação final |


## Projetos – Packet Tracer


### **Projeto 1 – Escritório Simples (Aula 05)**

**Contexto:**
Uma pequena empresa de contabilidade precisa conectar seus 5 computadores em rede para compartilhar arquivos e acessar a internet futuramente.

**Requisitos:**

* Montar a rede com **1 switch** e **5 PCs**.
* Usar cabeamento correto.
* Configurar endereços IPv4 em todos os PCs (mesma sub-rede).
* Testar conectividade com `ping`.

**Critérios de Sucesso:**
* Todos os PCs se comunicam entre si.
* Endereços IP corretamente configurados.
* Cabeamento apropriado (direto PC–Switch).



### **Projeto 2 – Rede com Departamentos (Aula 07)**

**Contexto:**
Uma escola precisa separar a rede do **Departamento Administrativo** da rede dos **Professores** para aumentar a segurança.

**Requisitos:**

* Criar **duas VLANs** (Administração e Professores).
* Configurar 2 switches interligados por um **trunk**.
* Usar um roteador para permitir comunicação entre as VLANs.
* Testar conectividade entre PCs da mesma VLAN e entre VLANs diferentes (via roteador).

**Critérios de Sucesso:**
* Comunicação **dentro de cada VLAN**.
* Comunicação **entre VLANs via roteador**.
* Trunk configurado corretamente entre switches.



### **Projeto 3 – Subredes em um Campus (Aula 09)**

**Contexto:**
Um campus universitário precisa organizar suas redes por prédios: **Biblioteca**, **Laboratórios** e **Secretaria**. Cada prédio terá sua própria sub-rede.

**Requisitos:**

* Definir endereçamento IPv4 com **3 sub-redes**.
* Configurar roteador central ligando as sub-redes.
* Configurar IPs nos hosts de cada prédio.
* Testar conectividade entre prédios.

**Critérios de Sucesso:**
* Sub-redes bem definidas (sem sobreposição de IP).
* Hosts se comunicam dentro da sub-rede.
* Roteador garante comunicação entre as 3 sub-redes.



### **Projeto 4 – Rede Intermunicipal (Aula 11)**

**Contexto:**
Uma empresa tem **matriz** em uma cidade e **filial** em outra. Precisa interligar as duas redes usando **roteamento estático**.

**Requisitos:**

* Criar duas redes locais (Matriz e Filial).
* Interligar com **dois roteadores**.
* Configurar rotas estáticas para comunicação entre os sites.
* Testar conectividade entre PCs da Matriz e da Filial.

**Critérios de Sucesso:**
* Cada rede local funcionando.
* Rotas estáticas corretamente configuradas.
* Comunicação fim-a-fim entre matriz e filial.



### **Projeto 5 – Expansão de Rede (Aula 13)**

**Contexto:**
Um **campus universitário** está expandindo sua rede. Agora, precisa suportar vários departamentos com VLANs e garantir **roteamento dinâmico (OSPF)**.

**Requisitos:**

* Criar pelo menos **3 VLANs** (Ex: TI, Alunos, Professores).
* Configurar switches com VLANs e trunking.
* Configurar roteadores com OSPF para anunciar as redes.
* Garantir que todos os departamentos se comuniquem.

**Critérios de Sucesso:**
* VLANs funcionando corretamente.
* OSPF anunciando as rotas de forma dinâmica.
* Comunicação fim-a-fim entre todos os departamentos.



### **Projeto Final – Rede Completa (Aula 15)**

**Contexto:**
Uma **universidade fictícia** precisa de uma rede que integre **departamentos, serviços e comunicação entre campi**. Esse será o projeto final do semestre.

**Requisitos:**

* Criar pelo menos **4 VLANs** (Administração, Professores, Alunos, Biblioteca).
* Configurar switches com VLANs e trunking.
* Configurar **roteamento dinâmico (OSPF)**.
* Incluir pelo menos **2 serviços de aplicação** (ex: DNS, Web, E-mail).
* Garantir comunicação entre todas as áreas.

**Critérios de Sucesso:**
* VLANs + roteamento dinâmico funcionando.
* Serviços de aplicação configurados e acessíveis (DNS resolve, Web abre página, E-mail simulado).
* Documentação simples: diagrama + tabela de IPs.

