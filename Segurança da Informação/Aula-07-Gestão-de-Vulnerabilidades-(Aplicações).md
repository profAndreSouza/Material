# Gestão de Vulnerabilidades em Aplicações

## 1. Conceito de Vulnerabilidade

Uma **vulnerabilidade** é qualquer falha, fraqueza ou configuração incorreta em software, sistema ou processo que possa ser explorada por um atacante para comprometer a confidencialidade, integridade ou disponibilidade das informações.

* **Vulnerabilidade:** condição de fragilidade.
* **Exploit:** técnica, script ou ferramenta usada para explorar a falha.
* **Risco:** resultado da combinação entre a probabilidade de exploração e o impacto potencial no negócio.

**Exemplo prático:**

* **Vulnerabilidade:** formulário web sem validação de entrada.
* **Exploit:** ataque de SQL Injection.
* **Impacto:** exposição de credenciais, roubo de dados de clientes e até controle do banco de dados.



## 2. Ciclo de Gestão de Vulnerabilidades

A gestão de vulnerabilidades é um processo contínuo que visa **identificar, avaliar, corrigir e monitorar falhas** em aplicações e sistemas.

1. **Descoberta:**

   * Uso de scanners automatizados (OWASP ZAP, Nessus, Nikto).
   * Relatórios de fornecedores.
   * Testes de penetração (pentests).
   * Bug bounty e disclosure por pesquisadores.

2. **Análise:**

   * Avaliar criticidade com base em **CVSS (Common Vulnerability Scoring System)**.
   * Considerar contexto do negócio: uma falha em login tem impacto diferente de uma falha em relatório.

3. **Mitigação:**

   * Aplicação de patches e hotfixes.
   * Ajustes de configuração.
   * Uso de compensações temporárias (firewalls, WAFs).

4. **Monitoramento:**

   * Revisar periodicamente sistemas e dependências.
   * Acompanhar novos CVEs (Common Vulnerabilities and Exposures).
   * Automatizar alertas de falhas em bibliotecas e frameworks.

**Nota:** Vulnerabilidades nunca “acabam”. Novas surgem todos os dias em softwares, sistemas operacionais e até em protocolos.



## 3. OWASP Top 10

O **OWASP (Open Web Application Security Project)** mantém a lista das falhas mais críticas em aplicações web.
Algumas das principais:

* **A01 — Quebra de Controle de Acesso:** usuários acessam funções/dados indevidos.
* **A02 — Falhas Criptográficas:** uso de algoritmos fracos ou má gestão de chaves.
* **A03 — Injeção:** SQL Injection, Command Injection, LDAP Injection.
* **A05 — Configuração Incorreta de Segurança:** servidores expostos com configurações padrão.
* **A07 — Falhas de Identificação e Autenticação:** senhas fracas, falta de MFA.

**Exemplo real:** Em 2019, falhas de autenticação permitiram que atacantes acessassem dados de clientes na Equifax.



## 4. Ferramentas de Análise de Aplicações

* **OWASP ZAP:**

  * Open source, ideal para aprendizado e automação em CI/CD.

* **Burp Suite:**

  * Muito usado em pentests profissionais.
  * Oferece interceptação de tráfego, fuzzing, força bruta e extensões.

* **Syhunt Hybrid:**

  * Avalia aplicações web, mobile e APIs.
  * Bom para times que precisam de cobertura ampla.

* **Nikto:**

  * Scanner focado em servidores web (detecção de arquivos sensíveis, headers inseguros).

**Boas práticas:** combinar ferramentas automatizadas com análise manual.



## 5. Práticas de Hardening em Aplicações

Hardening é o processo de reduzir a superfície de ataque da aplicação.
Algumas práticas:

* **Validação de entradas:** nunca confiar em dados do usuário (use whitelists).
* **Prepared statements:** proteção contra SQL Injection.
* **Configurações seguras em servidores:** desativar listagem de diretórios, ocultar versão de software.
* **Gestão de credenciais:** armazenamento seguro (bcrypt, Argon2).
* **MFA (Multi-Factor Authentication):** aumenta a proteção em logins.
* **Logs e monitoramento:** correlacionar eventos suspeitos e alertar administradores.
* **Least Privilege:** permissões mínimas para contas e serviços.



## 6. Estudo de Caso — SQL Injection

### Cenário

Um sistema de login vulnerável recebe dados do usuário diretamente:

```sql
SELECT * FROM usuarios WHERE usuario = 'admin' AND senha = '1234';
```

Um atacante insere no campo de usuário:

```
' OR '1'='1
```

Consulta final:

```sql
SELECT * FROM usuarios WHERE usuario = '' OR '1'='1' AND senha = '';
```

**Resultado:** acesso não autorizado.

### Mitigação

* **Prepared Statements:**

  ```sql
  SELECT * FROM usuarios WHERE usuario = ? AND senha = ?;
  ```
* **ORMs seguros:** abstraem consultas.
* **Least Privilege:** conta do banco com permissões restritas.
* **WAF (Web Application Firewall):** camada extra de defesa.



## 7. Atividade em Grupo

**Desafio:** aplicar o ciclo de gestão de vulnerabilidades em um **sistema de e-commerce** com falhas conhecidas.

### Tarefas:

1. Identificar vulnerabilidades possíveis (SQL Injection, sessão não expira, senhas em texto puro).
2. Avaliar impacto no negócio (roubo de dados, indisponibilidade, fraude).
3. Propor medidas de mitigação (uso de hashing, timeout de sessão, prepared statements).
4. Criar um **checklist mínimo de segurança** para aplicações web.



## 8. Checklist de Segurança em Aplicações

* [ ] Código revisado contra **OWASP Top 10**.
* [ ] Entradas do usuário sempre validadas.
* [ ] Senhas com hash seguro (**bcrypt**, **Argon2**).
* [ ] Frameworks e bibliotecas atualizadas.
* [ ] Logs e monitoramento ativos.
* [ ] MFA para administradores.
* [ ] Configurações padrão alteradas (ex.: “admin/admin”).
* [ ] Backup seguro e testado periodicamente.
* [ ] Sessões com expiração automática.



## 9. Leituras Recomendadas

* **OWASP Top 10:** [https://owasp.org](https://owasp.org)
* **OWASP Testing Guide:** boas práticas de testes de segurança.
* *The Web Application Hacker’s Handbook* – Dafydd Stuttard & Marcus Pinto.
* Documentação do **Burp Suite** e **OWASP ZAP**.
* **Mitre CVE Database:** [https://cve.mitre.org](https://cve.mitre.org)
