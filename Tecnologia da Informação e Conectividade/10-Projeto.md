# Projeto de Infraestrutura de Rede Local em Ambiente Empresarial

### **Disciplina:** Tecnologia da Informação e Conectividade

### **Formato:** Relatório técnico (ABNT resumido) + Implementação em Cisco Packet Tracer

### **Número de integrantes:** 1 a 5 alunos

### **Entrega:** Arquivo `.pdf` (relatório) + arquivo `.pkt` (simulação)


## **1. Estrutura do Trabalho (formato ABNT resumido)**

O relatório deve seguir o formato acadêmico simplificado da **ABNT NBR 14724**, contendo obrigatoriamente as seções abaixo:


### **1. Capa**

* Nome da instituição;
* Curso;
* Disciplina;
* Título do projeto;
* Nome dos integrantes;
* Nome do professor;
* Local e data.


### **2. Sumário**

Listagem das seções e subseções com numeração e páginas.


### **3. Introdução**

* Apresente o **tema geral** do trabalho (infraestrutura de redes).
* Descreva o **contexto da empresa, escritório, indústria ou organização escolhida** — tipo de negócio, número de setores, porte, principais atividades, etc.
* Justifique a **necessidade do projeto de rede**, relacionando-o à importância da conectividade para o funcionamento da organização.
* Defina o **objetivo geral** e os **objetivos específicos** do trabalho.


### **4. Revisão Bibliográfica**

* Conceitue brevemente os principais tópicos relacionados ao projeto:

  * Modelo OSI e protocolos TCP/IP;
  * Topologias de rede;
  * Endereçamento IPv4 e IPv6;
  * Protocolos de roteamento (RIP, OSPF, EIGRP);
  * VLANs, trunk e STP;
  * NAT, DHCP, DNS;
  * ACLs e segurança de rede.
* Utilize **no mínimo três fontes bibliográficas** (livros, artigos ou normas técnicas).
* Formate as citações e referências conforme a **NBR 6023**.


### **5. Desenvolvimento**

* Descreva detalhadamente as **etapas do projeto**:

  * Levantamento de requisitos da empresa;
  * Planejamento da topologia e da segmentação lógica (sub-redes, VLANs, endereçamento);
  * Escolha dos equipamentos (roteadores, switches, servidores, PCs);
  * Configurações e protocolos implementados no Cisco Packet Tracer.
* Inclua **diagramas de rede**, **tabelas de endereçamento IP**, **descrição de VLANs** e **funções dos dispositivos**.
* Justifique cada decisão técnica.


### **6. Resultados**

* Apresente testes e evidências do funcionamento:

  * Print de conectividade (ping, traceroute, DHCP, DNS, NAT, ACLs, etc.);
  * Tabelas de roteamento e VLANs ativas;
  * Comunicação entre sub-redes e entre setores da empresa.
* Avalie a eficiência, desempenho e segurança obtidos.


### **7. Conclusão**

* Faça uma síntese do aprendizado técnico e do trabalho em grupo.
* Avalie a aplicabilidade do projeto ao contexto empresarial proposto.
* Destaque desafios enfrentados e possíveis melhorias futuras.


### **8. Referências**

* Liste todas as fontes utilizadas, em conformidade com a **NBR 6023:2023**.
* Exemplos:

  * TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. *Redes de Computadores*. 6. ed. São Paulo: Pearson, 2021.
  * KUROSE, J. F.; ROSS, K. W. *Redes de Computadores e a Internet*. 8. ed. São Paulo: Pearson, 2021.


## **2. Implementação no Cisco Packet Tracer**

* Simular o **ambiente real da empresa escolhida**, com equipamentos, setores e comunicação funcional.
* O arquivo `.pkt` deve representar fielmente o projeto descrito no relatório.
* Todas as **configurações** (endereços IP, VLANs, roteamento, NAT, ACLs, etc.) devem estar **documentadas no relatório**.


## **3. Escalonamento de Dificuldade (por número de integrantes)**

| Nº de Integrantes | Escopo e Requisitos Técnicos                                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1 integrante**  | Empresa pequena com um único setor e até 5 hosts. Topologia simples (1 roteador, 1 switch, 3 PCs). Endereçamento IPv4, VLANs e DHCP. NAT opcional.                                                      |
| **2 integrantes** | Pequena empresa com dois setores (Administração e Produção). Duas sub-redes, roteamento estático, NAT obrigatório e DHCP/DNS simulados.                                                                 |
| **3 integrantes** | Empresa de médio porte com três setores (Produção, TI e Escritório). VLANs, roteamento dinâmico (RIPv2 ou OSPFv2) e ACL básica.                                                                         |
| **4 integrantes** | Empresa com quatro setores (Produção, TI, Escritório e Convidados). Roteamento dinâmico (EIGRP), DHCP centralizado, NAT/PAT, ACLs e redundância de switches (STP).                                      |
| **5 integrantes** | Indústria de grande porte com cinco ou mais setores. Roteamento dinâmico (OSPFv2 ou EIGRP), VLANs com trunk, STP ativo, NAT/PAT, ACLs, DHCP e DNS simulados. Incluir link redundante e firewall básico. |


## **4. Orientações Finais**

* O contexto da **empresa, indústria ou escritório** deve ser **original e coerente** com os objetivos do projeto.
* Trabalhos **sem contextualização** ou **sem o arquivo Packet Tracer funcional** serão **desconsiderados**.
* Citações e imagens devem respeitar direitos autorais.
* Entrega final: **arquivo PDF + arquivo `.pkt` nomeados conforme o grupo.**
