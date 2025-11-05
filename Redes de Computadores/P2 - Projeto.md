# Projeto de Rede Corporativa com Análise de Desempenho

### **Disciplina:** Redes de Computadores

### **Formato:** Relatório técnico (ABNT resumido) + Implementação em Cisco Packet Tracer

### **Número de integrantes:** 1 a 5 alunos

### **Entrega:** Arquivo `.pdf` (relatório) + arquivo `.pkt` (simulação)

### **Data de Entrega:** 03/12/2025


## **1. Estrutura do Trabalho (formato ABNT resumido)**

O relatório deverá seguir o formato acadêmico simplificado conforme a **ABNT NBR 14724**, contendo as seções obrigatórias a seguir:


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

* Apresente o **tema geral**: redes de computadores aplicadas a um contexto real.
* Descreva o **cenário escolhido** — pode ser uma **empresa, indústria, escritório, campus educacional ou organização pública**.
* Explique a **necessidade de conectividade** e como a rede projetada contribuirá para o desempenho, segurança e comunicação interna.
* Indique o **objetivo geral** (ex: projetar e analisar uma rede local funcional) e **objetivos específicos** (ex: definir topologia, configurar protocolos, avaliar desempenho).


### **4. Revisão Bibliográfica**

Aborde os conceitos teóricos que fundamentam o projeto:

* Comunicação de dados e tipos de redes (LAN, MAN, WAN);
* Topologias físicas e lógicas;
* Protocolos de comunicação e modelo OSI;
* Padrões de cabeamento e dispositivos de rede;
* Endereçamento IPv4 e IPv6;
* Protocolos de roteamento e switching (RIP, OSPF, VLAN, STP);
* Parâmetros de **desempenho de rede** (latência, throughput, disponibilidade).

Inclua **no mínimo três fontes bibliográficas** (livros, artigos ou normas técnicas).
As citações e referências devem seguir o formato **ABNT NBR 6023**.


### **5. Desenvolvimento**

* Descreva as **etapas do projeto**:

  * Levantamento de requisitos do ambiente (quantidade de setores, usuários, serviços necessários).
  * Definição da **topologia física e lógica** da rede.
  * Escolha dos **dispositivos e meios de transmissão** (cabos, switches, roteadores, servidores).
  * Planejamento do **endereçamento IP** e das **VLANs**, quando aplicável.
  * Configurações implementadas no **Cisco Packet Tracer**.
* Inclua diagramas da rede, tabelas de endereçamento, VLANs e descrição das funções dos dispositivos.
* Explique as decisões técnicas e de configuração.


### **6. Resultados**

* Apresente **testes práticos** realizados na simulação:

  * Comunicação entre hosts (ping, traceroute);
  * Testes de desempenho (velocidade, perda de pacotes, resposta a falhas);
  * Tabelas de roteamento e VLANs;
  * Testes de DHCP, NAT e ACLs (se houver).
* Analise os resultados e identifique gargalos ou melhorias possíveis.


### **7. Conclusão**

* Resuma os principais aprendizados e resultados obtidos.
* Relacione o projeto com o funcionamento real de redes corporativas.
* Aponte melhorias possíveis e perspectivas de expansão da rede.


### **8. Referências**

As referências bibliográficas devem seguir a norma **NBR 6023:2023**, incluindo todas as obras utilizadas na revisão e no embasamento do projeto.


## **2. Implementação no Cisco Packet Tracer**

O grupo deverá desenvolver uma **simulação de rede corporativa** no Cisco Packet Tracer que represente o contexto proposto (empresa, escola, indústria, etc.).

O projeto deve conter:

* Dispositivos interconectados (PCs, switches, roteadores);
* Endereçamento IP adequado (IPv4 ou IPv6);
* Roteamento estático ou dinâmico;
* Comunicação funcional entre os setores;
* Testes de conectividade documentados no relatório.

O arquivo `.pkt` deve ser entregue juntamente com o relatório.


## **3. Escalonamento de Dificuldade (por número de integrantes)**

| Nº de Integrantes | Escopo e Requisitos Técnicos                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1 integrante**  | Rede simples de escritório com 1 roteador, 1 switch e até 4 hosts. Endereçamento IPv4 e teste de conectividade.                                                           |
| **2 integrantes** | Rede com dois setores (ex: Administração e Financeiro). Roteamento estático entre sub-redes e DHCP.                                                                       |
| **3 integrantes** | Rede com três setores e VLANs configuradas. Roteamento dinâmico (RIPv2 ou OSPFv2) e NAT.                                                                                  |
| **4 integrantes** | Rede de médio porte com VLANs, roteamento dinâmico (EIGRP), DHCP centralizado, ACLs básicas e STP ativo.                                                                  |
| **5 integrantes** | Rede de grande porte com múltiplos roteadores, VLANs com trunking, redundância de switches (STP), NAT/PAT, ACLs, DHCP e DNS simulados. Análise de desempenho obrigatória. |


## **4. Orientações Finais**

* O contexto (empresa, indústria, campus, etc.) é **de livre escolha**, mas deve ser **coerente** com os objetivos da rede projetada.
* Todos os **endereços IP, VLANs e protocolos** devem ser claramente documentados.
* O trabalho deve ser **autoral e fundamentado teoricamente**.
* Entrega: **relatório em PDF** + **arquivo `.pkt` nomeado conforme o grupo**.
* Trabalhos sem contextualização ou sem simulação funcional serão desconsiderados.
