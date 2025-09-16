# Aula 12 — Operações e Comunicações Seguras

## 1. Conceito de Operações Seguras

* Operações seguras garantem a **continuidade dos serviços**, a **confidencialidade dos dados** e a **integridade das transações**.
* Envolvem rotinas de **backup**, **manutenção de sistemas**, **monitoramento** e proteção na **troca de informações**.
* São fundamentais para reduzir riscos de indisponibilidade, falhas humanas e ataques cibernéticos.


## 2. Backup e Recuperação de Desastres

* **Backup:** cópia de segurança de dados que pode ser restaurada em caso de falhas.
* Tipos de backup:

  * **Completo:** cópia integral dos dados.
  * **Incremental:** copia apenas dados alterados desde o último backup.
  * **Diferencial:** copia dados alterados desde o último backup completo.
* **Regra 3-2-1:**

  * 3 cópias de dados,
  * 2 mídias diferentes,
  * 1 cópia off-site (fora do local principal).
* **Recuperação de desastres (DRP):** plano para restaurar operações após incidentes graves (incêndio, ataque ransomware, falha elétrica).


## 3. Segurança de Redes Corporativas

* **Firewalls:** controlam tráfego entre redes internas e externas.
* **IDS/IPS (Intrusion Detection/Prevention Systems):** monitoram e bloqueiam tráfego suspeito.
* **VPN (Virtual Private Network):** protege conexões remotas por meio de criptografia.
* **Segmentação de rede (VLANs):** separa áreas críticas (ex.: servidores, usuários, visitantes).
* **Wi-Fi seguro:** uso de WPA3 e senhas fortes; redes separadas para visitantes.


## 4. Segurança de Mídias e Armazenamento

* **Mídias removíveis (USBs, HDs externos):**

  * Criptografar dados sensíveis.
  * Bloquear uso de dispositivos não autorizados.
* **Armazenamento em nuvem:**

  * Usar provedores confiáveis com criptografia de ponta a ponta.
  * Gerenciar acessos com MFA.
* **Proteção de logs e registros:** garantir integridade e confidencialidade dos registros de auditoria.


## 5. Troca Segura de Informações

* **E-mails corporativos:** usar criptografia (TLS, PGP, S/MIME).
* **Mensageria:** adotar aplicativos com criptografia ponta a ponta.
* **E-commerce:** usar certificados digitais e protocolos HTTPS/TLS.
* **Políticas de classificação da informação:** definir quais dados podem ser públicos, internos, confidenciais ou restritos.

## 6. Monitoramento e Auditoria de Operações

* **Logs centralizados:** registros de eventos de sistemas, acessos e tentativas de intrusão.
* **SIEM (Security Information and Event Management):** correlaciona eventos e gera alertas.
* **Auditorias periódicas:** verificam se políticas de segurança estão sendo aplicadas.
* **Resposta rápida a alertas:** procedimentos definidos para incidentes críticos.

## 7. Estudo de Caso — Falha em Backup

### Cenário:

Uma empresa sofreu ataque de ransomware e todos os servidores foram criptografados.

* Descobriu-se que os backups estavam **armazenados no mesmo servidor comprometido**.
* Resultado: todos os backups foram perdidos.

### Impacto:

* Perda total de dados financeiros e registros de clientes.
* Paralisação das operações por semanas.

### Lições aprendidas:

* Manter cópia **off-site** ou em nuvem.
* Testar periodicamente a restauração dos backups.
* Segmentar os sistemas de backup em rede separada.


## 8. Atividade em Grupo

**Desafio:**
Uma pequena empresa possui:

* Rede corporativa com 30 usuários.
* Um servidor de banco de dados.
* Funcionários que acessam remotamente via notebook e celular.

**Tarefas:**

1. Propor uma política de backup segura para os dados críticos.
2. Definir medidas de proteção para Wi-Fi, VPN e acesso remoto.
3. Estabelecer recomendações para troca segura de informações (e-mail, arquivos, mensageria).
4. Montar checklist mínimo de monitoramento de rede e servidores.


## 9. Checklist de Operações e Comunicações Seguras

* [ ] Backups realizados regularmente e testados.
* [ ] Cópia off-site ou em nuvem implementada.
* [ ] Firewall configurado e atualizado.
* [ ] IDS/IPS em funcionamento.
* [ ] VPN utilizada para acessos remotos.
* [ ] Redes Wi-Fi separadas (corporativa e visitantes).
* [ ] Dispositivos móveis protegidos por senha/biometria e criptografia.
* [ ] E-mails sensíveis enviados com criptografia.
* [ ] Logs centralizados e revisados periodicamente.


## 10. Questões de Revisão

1. Qual a diferença entre backup incremental e diferencial?
2. O que significa a regra 3-2-1 de backup?
3. Cite três medidas para proteger redes corporativas contra intrusões.
4. Como garantir segurança na troca de e-mails sensíveis?
5. Por que é importante testar periodicamente a restauração dos backups?


## 11. Leituras Recomendadas

* ISO/IEC 27001 – Anexo A.12: Operações e Comunicações Seguras.
* STALLINGS, W. *Criptografia e Segurança de Redes*. Pearson, 2008.
* OWASP Secure Communications Guidelines.
* NIST SP 800-34: *Contingency Planning Guide for Federal Information Systems*.
