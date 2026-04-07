# Aula 08 — Gestão de Vulnerabilidades em Infraestrutura

## 1. Conceito de Vulnerabilidade em Infraestrutura

A **infraestrutura de TI** é o conjunto de componentes que sustentam os sistemas de informação de uma organização, incluindo servidores, redes, sistemas operacionais, dispositivos de rede (switches, roteadores, firewalls), serviços essenciais (DNS, DHCP, e-mail) e até o ambiente físico.

Uma **vulnerabilidade em infraestrutura** corresponde a qualquer falha, fraqueza ou configuração inadequada que possa ser explorada por um agente malicioso para comprometer a segurança do ambiente.

Essas vulnerabilidades podem permitir:

* Acesso não autorizado a sistemas e dados
* Interrupção de serviços (DoS/DDoS)
* Escalonamento de privilégios
* Vazamento, alteração ou destruição de informações

**Exemplos práticos:**

* Servidor SSH exposto com senha fraca → suscetível a ataque de força bruta → invasor obtém acesso administrativo
* Equipamento de rede com senha padrão → invasor altera configurações → tráfego sensível pode ser interceptado


## 2. Ciclo de Gestão de Vulnerabilidades

A gestão de vulnerabilidades é um processo contínuo e estruturado, composto por quatro etapas principais:

1. **Identificação**
   Levantamento de ativos, varredura de rede e descoberta de serviços ativos.

2. **Avaliação**
   Análise da criticidade das vulnerabilidades com base no impacto para o negócio.

3. **Correção (Remediação)**
   Aplicação de patches, ajustes de configuração ou substituição de sistemas vulneráveis.

4. **Monitoramento**
   Execução de varreduras periódicas, auditorias e acompanhamento de novas vulnerabilidades (CVEs).

Esse ciclo deve ser contínuo, pois novos riscos surgem constantemente e a infraestrutura está em constante mudança.


## 3. Ferramentas de Apoio

Algumas ferramentas amplamente utilizadas na gestão de vulnerabilidades incluem:

* **Nmap**
  Scanner de rede utilizado para identificar hosts ativos, portas abertas e serviços em execução.
  Exemplo:

  ```
  nmap -sV 192.168.0.0/24
  ```

* **Nessus**
  Ferramenta comercial de análise de vulnerabilidades com relatórios detalhados de risco.

* **OpenVAS (Greenbone)**
  Alternativa open source ao Nessus, com recursos robustos de varredura e análise.

* **Wireshark**
  Ferramenta de captura e análise de pacotes, útil para identificar tráfego suspeito e protocolos inseguros.

* **SIEM / IDS / IPS**
  Soluções para centralização de logs, detecção de intrusões e resposta a incidentes em tempo real.


## 4. Tipos Comuns de Vulnerabilidades

Entre as falhas mais recorrentes em ambientes corporativos, destacam-se:

* Sistemas e serviços desatualizados
* Portas desnecessárias abertas
* Configurações inseguras em dispositivos de rede
* Uso de senhas padrão ou fracas
* Protocolos inseguros (Telnet, FTP, SNMPv1)
* Falta de segmentação de rede
* Backups sem criptografia ou proteção adequada


## 5. Práticas de Mitigação

Para reduzir riscos e fortalecer a segurança da infraestrutura, recomenda-se:

* Manter um **inventário atualizado de ativos**
* Implementar **gestão de patches (Patch Management)**
* Aplicar **hardening de sistemas**
* Utilizar **segmentação de rede (VLANs)**
* Adotar **monitoramento contínuo (SIEM)**
* Realizar **backups periódicos e testes de restauração**
* Garantir **controle de acesso físico** aos equipamentos


## 6. Estudo de Caso Técnico

### Cenário

Uma empresa detecta lentidão na rede e realiza a seguinte varredura:

```
nmap -sV -O 192.168.10.0/24
```

### Principais descobertas

* Servidor com **FTP sem autenticação**
* Servidor com **Windows Server 2012 sem atualizações**

### Riscos identificados

* FTP aberto → possível vazamento de dados
* Sistema desatualizado → vulnerável a exploits como o **EternalBlue (WannaCry)**

### Medidas corretivas

* Substituir FTP por **SFTP**
* Aplicar atualizações de segurança no sistema operacional
* Restringir acessos via firewall
* Implementar segmentação de rede


## 7. Exercício em Grupo — Falhas Físicas

Analise os casos reais abaixo e discuta em grupo:

1. **Stuxnet (2010)**
2. **Laptop perdido (Boston Children’s Hospital)**
3. **Roubo de fitas de backup**
4. **Dispositivos governamentais perdidos (Reino Unido, 2025)**
5. **Ataques com USB malicioso (USB-drop)**
6. **Multnomah County (2024)**

### Tarefas do grupo:

* Identificar a vulnerabilidade principal em cada caso
* Classificar o impacto (alto, médio ou baixo)
* Propor controles preventivos e corretivos
* Relacionar o caso com boas práticas de segurança física

**Dica:** Considere aspectos como criptografia, controle de acesso físico, políticas organizacionais e gestão de ativos.


## 8. Exercício em Grupo — Falhas Lógicas

Analise os incidentes abaixo:

1. **Equifax (2017)**
2. **SolarWinds (2020)**
3. **Target (2013)**
4. **Colonial Pipeline (2021)**
5. **Exchange Server (2021)**
6. **Okta (2022–2023)**

### Tarefas do grupo:

* Identificar a causa raiz de cada incidente
* Explicar por que os controles existentes falharam
* Sugerir melhorias baseadas em boas práticas (Zero Trust, MFA, monitoramento, etc.)
* Discutir como a detecção e resposta poderiam ter sido mais eficazes

**Objetivo:** Desenvolver pensamento crítico sobre falhas reais e fortalecer a capacidade de análise de riscos em ambientes corporativos.
