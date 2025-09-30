# Aula 08 — Gestão de Vulnerabilidades em Infraestrutura



## 1. Conceito de Vulnerabilidade em Infraestrutura

A **infraestrutura de TI** é composta por servidores, redes, sistemas operacionais, dispositivos de rede (switches, roteadores, firewalls), serviços básicos (DNS, DHCP, e-mail, etc.) e ambientes físicos de suporte.

Uma **vulnerabilidade em infraestrutura** é qualquer fraqueza — técnica ou de configuração — que pode ser explorada para:

* Obter acesso não autorizado.
* Interromper serviços (DoS/DDoS).
* Escalar privilégios em sistemas críticos.
* Roubar ou corromper informações.

**Exemplos:**

* Servidor SSH exposto com senha fraca. → Ataque de força bruta. → Acesso administrativo ao servidor.
* Switch configurado com senha padrão. → Invasor obtém acesso e altera VLANs. → Tráfego sensível exposto.



## 2. Ciclo de Gestão de Vulnerabilidades

1. **Identificação:** varredura de rede, inventário de ativos, descoberta de serviços.
2. **Avaliação:** análise de criticidade (quais sistemas são mais sensíveis ao negócio).
3. **Correção:** aplicação de patches, reconfiguração ou substituição de hardware vulnerável.
4. **Monitoramento:** scans periódicos, relatórios, auditorias e acompanhamento de CVEs.

Esse ciclo deve ser **contínuo**: a infraestrutura muda, e novas vulnerabilidades surgem a cada dia.



## 3. Ferramentas de Apoio

* **Nmap**
  Scanner de portas/serviços. Útil para mapear dispositivos ativos.
  *Exemplo:*

  ```
  nmap -sV 192.168.0.0/24
  ```

  → Lista serviços e versões em toda a sub-rede.

* **Nessus**
  Identifica falhas conhecidas e gera relatórios de risco (versão paga + community).

* **OpenVAS (Greenbone)**
  Alternativa open-source ao Nessus, também gera relatórios completos.

* **Wireshark**
  Captura/análise de pacotes, útil para identificar tráfego suspeito ou protocolos inseguros.

* **SIEM/IDS/IPS**
  Consolidação de logs e alertas para identificar anomalias em tempo real.



## 4. Tipos Comuns de Vulnerabilidades

* **Serviços desatualizados** (Windows Server sem patch, Apache antigo).
* **Portas desnecessárias abertas** (FTP, Telnet, RDP expostos).
* **Configurações fracas em firewalls ou roteadores.**
* **Senhas padrão não alteradas** em equipamentos de rede.
* **Protocolos inseguros** (Telnet, FTP, SNMPv1).
* **Falta de segmentação**: todos os dispositivos na mesma VLAN.
* **Backups não criptografados** armazenados sem proteção.



## 5. Práticas de Mitigação

* **Inventário de ativos** atualizado.
* **Patch Management** com cronograma definido.
* **Hardening de sistemas** (desabilitar serviços desnecessários, trocar protocolos inseguros).
* **Segmentação de rede (VLANs)** para separar usuários, servidores e convidados.
* **Monitoramento contínuo** com alertas centralizados (SIEM).
* **Backups regulares e testados**.
* **Políticas de controle físico** (sala de servidores, cofres de backup).



## 6. Estudo de Caso Técnico

### Cenário

Uma empresa percebe lentidão na rede. O administrador executa:

```
nmap -sV -O 192.168.10.0/24
```

### Descobertas

* Servidor com **FTP sem autenticação**.
* Servidor com **Windows Server 2012 sem patch**.

### Riscos

* FTP público → vazamento de arquivos internos.
* Windows desatualizado → vulnerável ao exploit **EternalBlue (WannaCry)**.

### Mitigações

* Desativar FTP e migrar para SFTP.
* Atualizar o Windows com patches recentes.
* Restringir acesso via firewall e segmentar a rede.



## 7. Casos Reais — Falhas Físicas

1. **Stuxnet (2010):** malware chegou via pen drives → sabotagem em usinas nucleares.
2. **Boston Children’s Hospital (2012):** laptop perdido sem criptografia → dados de pacientes expostos.
3. **Fitas de backup roubadas:** transporte sem segurança → vazamento massivo.
4. **Dispositivos governamentais perdidos (Reino Unido, 2025):** milhares de laptops/telefones sem proteção.
5. **USB-drop (engenharia social):** pendrives maliciosos deixados em áreas públicas.
6. **Multnomah County (2024):** ex-funcionário não devolveu laptop com dados de clientes.

**Lições:** criptografia obrigatória, gestão de ativos, controle de mídias removíveis, processos de desligamento bem definidos.



## 8. Casos Reais — Falhas Lógicas

1. **Equifax (2017):** falta de patch + WAF ineficaz → 147M registros vazados.
2. **SolarWinds (2020):** backdoor em atualização legítima → espionagem global.
3. **Target (2013):** antivírus alertou, mas ninguém respondeu → 40M cartões roubados.
4. **Colonial Pipeline (2021):** VPN sem MFA → ransomware paralisa abastecimento.
5. **Exchange Server (2021):** falhas ProxyLogon → e-mails corporativos comprometidos.
6. **Okta (2022-23):** provedor de identidade comprometido → risco a centenas de clientes.

**Lições:** não confiar apenas em firewalls/antivírus, aplicar Zero Trust, garantir resposta ativa a alertas, exigir MFA, monitorar cadeia de suprimentos.



## 9. Atividade em Grupo (Infraestrutura Simulada)

### Cenário

Rede fictícia com:

* 1 servidor de banco de dados.
* 1 servidor web.
* 10 estações de trabalho.
* Switch e roteador com configurações padrão.

### Tarefas

1. Identificar vulnerabilidades possíveis.
2. Classificar por criticidade (alta, média, baixa).
3. Propor medidas corretivas.
4. Criar checklist de manutenção preventiva.



## 10. Exercícios de Estudo de Casos

**Falhas Físicas**

1. No caso do **Stuxnet**, qual controle físico poderia ter impedido a entrada do malware?
2. O que faltou no caso do **laptop do hospital** para proteger os dados?
3. Como políticas de offboarding teriam evitado o problema em Multnomah County?

**Falhas Lógicas**
4. O que a Equifax confiou em excesso no caso de 2017?
5. Por que o antivírus não foi suficiente no caso do Target?
6. O que o incidente da SolarWinds ensina sobre riscos na cadeia de suprimentos?
7. Que controles lógicos simples poderiam ter evitado o ataque à Colonial Pipeline?
