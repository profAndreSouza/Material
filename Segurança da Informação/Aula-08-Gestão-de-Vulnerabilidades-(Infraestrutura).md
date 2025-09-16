# Aula 08 — Gestão de Vulnerabilidades em Infraestrutura

## 1. Conceito de Vulnerabilidade em Infraestrutura

* **Infraestrutura de TI** inclui servidores, redes, sistemas operacionais, dispositivos de rede (switches, roteadores, firewalls) e serviços básicos.
* Vulnerabilidades em infraestrutura podem ser exploradas para:

  * Ganhar acesso não autorizado.
  * Interromper serviços (DoS/DDoS).
  * Escalar privilégios em sistemas críticos.

**Exemplo:**

* Serviço de SSH exposto com senha fraca.
* Atacante realiza brute force.
* Resultado: acesso administrativo ao servidor.


## 2. Ciclo de Gestão de Vulnerabilidades em Infraestrutura

1. **Identificação:** varredura de rede e inventário de ativos.
2. **Avaliação:** análise de criticidade (quais sistemas são mais sensíveis).
3. **Correção:** aplicação de patches, reconfiguração ou substituição de hardware vulnerável.
4. **Monitoramento:** repetição periódica de scans, relatórios e auditorias.


## 3. Ferramentas de Análise em Infraestrutura

* **Nmap:**
  Scanner de portas e serviços, útil para mapear dispositivos ativos na rede.
  *Exemplo:*

  ```
  nmap -sV 192.168.0.0/24
  ```

  → Lista serviços e versões em toda a sub-rede.

* **Nessus:**
  Ferramenta de análise de vulnerabilidades (paga, com versão community).
  Identifica falhas conhecidas e gera relatórios de risco.

* **OpenVAS (Greenbone):**
  Alternativa open-source ao Nessus, também gera relatórios de vulnerabilidades.

* **Wireshark:**
  Analisador de pacotes para identificar tráfego suspeito ou protocolos inseguros.


## 4. Tipos Comuns de Vulnerabilidades em Infraestrutura

* **Serviços desatualizados:** sistemas sem patch de segurança (ex.: Windows Server sem update).
* **Portas desnecessárias abertas:** exposição de serviços que não deveriam estar disponíveis.
* **Configurações fracas em firewalls ou roteadores.**
* **Senhas padrão não alteradas** em equipamentos de rede.
* **Protocolos inseguros:** Telnet, FTP, SNMPv1.
* **Falta de segmentação de rede:** todos os dispositivos na mesma VLAN.


## 5. Práticas de Mitigação

* **Inventário de ativos:** saber exatamente quais dispositivos estão na rede.
* **Patch Management:** aplicar atualizações regulares em sistemas e firmwares.
* **Hardening de sistemas:** desabilitar serviços desnecessários, usar SSH em vez de Telnet, aplicar regras de firewall.
* **Segmentação de rede (VLANs):** separar servidores, usuários e convidados.
* **Monitoramento e alertas:** IDS/IPS, SIEM, logs centralizados.
* **Backups regulares:** garantir recuperação em caso de ataque ou falha.


## 6. Estudo de Caso — Scan em Rede Corporativa

### Cenário

Uma empresa percebe lentidão em sua rede. Um administrador executa:

```
nmap -sV -O 192.168.10.0/24
```

* Descobre um servidor rodando **FTP sem autenticação** e outro com **Windows Server 2012 sem patch**.

### Riscos

* FTP sem autenticação → acesso público a arquivos internos.
* Windows desatualizado → vulnerável a exploits como **EternalBlue (WannaCry)**.

### Mitigações

* Desabilitar FTP e substituí-lo por SFTP.
* Atualizar Windows com patches mais recentes.
* Restringir acesso via firewall e segmentação de rede.


## 7. Atividade em Grupo

**Desafio:**
Uma rede fictícia possui:

* 1 servidor de banco de dados.
* 1 servidor web.
* 10 estações de trabalho.
* Switch e roteador com configurações padrão.

**Tarefas:**

1. Listar possíveis vulnerabilidades nessa infraestrutura.
2. Classificar por criticidade (alta, média, baixa).
3. Propor medidas corretivas (patch, segmentação, hardening).
4. Criar checklist básico de manutenção preventiva.


## 8. Checklist de Segurança em Infraestrutura

* [ ] Todos os sistemas com patches aplicados.
* [ ] Senhas padrão alteradas em todos os dispositivos de rede.
* [ ] Serviços desnecessários desabilitados.
* [ ] Segmentação de rede implementada (usuários / servidores / convidados).
* [ ] Firewalls configurados e revisados.
* [ ] IDS/IPS ativos e monitorando tráfego.
* [ ] Backups testados periodicamente.
* [ ] Relatórios de vulnerabilidade revisados mensalmente.


## 9. Questões de Revisão

1. Qual a diferença entre vulnerabilidade em aplicação e em infraestrutura?
2. Cite duas ferramentas usadas para identificar vulnerabilidades em rede.
3. Por que é importante aplicar patches regularmente?
4. Quais são os riscos de deixar serviços desnecessários habilitados em servidores?
5. Como a segmentação de rede pode reduzir o impacto de um ataque?


## 10. Leituras Recomendadas

* Guia de Uso do **Nmap**: [https://nmap.org/book/](https://nmap.org/book/)
* Documentação oficial do **Nessus** e **OpenVAS**
* OWASP Testing Guide (capítulos de infraestrutura)
* Relatórios de vulnerabilidades (ex.: CVE, NVD — National Vulnerability Database)
