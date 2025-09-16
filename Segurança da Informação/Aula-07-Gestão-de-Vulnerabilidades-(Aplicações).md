# Aula 07 — Gestão de Vulnerabilidades em Aplicações

## 1. Conceito de Vulnerabilidade

* **Vulnerabilidade**: falha ou fraqueza em software, sistema ou processo que pode ser explorada por um atacante.
* **Exploit**: código ou técnica usada para explorar uma vulnerabilidade.
* **Risco**: combinação da probabilidade de exploração e do impacto causado.

**Exemplo:**

* Vulnerabilidade: página web sem validação de entrada.
* Exploit: SQL Injection.
* Impacto: vazamento de credenciais e dados de clientes.


## 2. Ciclo de Gestão de Vulnerabilidades

1. **Descoberta:** identificar falhas (scans automáticos, pentests, relatórios de segurança).
2. **Análise:** avaliar criticidade e impacto para o negócio.
3. **Mitigação:** aplicar correções (patches, atualizações, mudanças de configuração).
4. **Monitoramento:** acompanhar novas falhas e revisar controles periodicamente.

> Este ciclo deve ser contínuo — vulnerabilidades surgem o tempo todo em softwares e bibliotecas.


## 3. OWASP Top 10

O **OWASP (Open Web Application Security Project)** mantém a lista das 10 falhas mais críticas em aplicações web.
Alguns exemplos atuais:

* **A01: Quebra de Controle de Acesso (Broken Access Control)**
* **A02: Falhas Criptográficas (Cryptographic Failures)**
* **A03: Injeção (Injection)**
* **A05: Configuração Incorreta de Segurança (Security Misconfiguration)**
* **A07: Falhas de Identificação e Autenticação**

Essas vulnerabilidades estão entre as mais exploradas em ataques reais.


## 4. Ferramentas de Análise de Aplicações

* **OWASP ZAP (Zed Attack Proxy):**
  Scanner gratuito para identificar vulnerabilidades em aplicações web.
* **Burp Suite:**
  Ferramenta popular para testes de segurança em aplicações (versão free e paga).
* **Syhunt Hybrid:**
  Focado em aplicações web, mobile e APIs.
* **Nikto:**
  Scanner simples para servidores web.


## 5. Práticas de Hardening em Aplicações

* **Validação de entradas** (nunca confiar em dados do usuário).
* **Uso de prepared statements** para evitar SQL Injection.
* **Configurações seguras em servidores** (ex.: desabilitar listagem de diretórios).
* **Gerenciamento de senhas e chaves** (armazenar com hash + salt, rotacionar chaves).
* **Autenticação multifator** para usuários e administradores.
* **Monitoramento e logs centralizados** para detectar tentativas de ataque.


## 6. Estudo de Caso — SQL Injection

### Cenário:

Uma aplicação web recebe parâmetros diretamente de um formulário de login e os utiliza em consultas SQL:

```sql
SELECT * FROM usuarios WHERE usuario = 'admin' AND senha = '1234';
```

Um atacante insere no campo usuário:

```
' OR '1'='1
```

Consulta resultante:

```sql
SELECT * FROM usuarios WHERE usuario = '' OR '1'='1' AND senha = '';
```

Resultado: acesso não autorizado a qualquer conta.

### Mitigação:

* Utilizar **prepared statements** ou **ORMs**.
* Não concatenar strings diretamente em consultas SQL.
* Utilizar **least privilege** (contas de banco com acesso limitado).


## 7. Atividade em Grupo

**Desafio:**
Aplique o ciclo de gestão de vulnerabilidades em um cenário de aplicação web fictícia:

* Sistema de e-commerce com falhas de autenticação e SQL Injection.

**Tarefas:**

1. Identificar vulnerabilidades possíveis (ao menos 3).
2. Avaliar impacto no negócio (ex.: roubo de dados de clientes, indisponibilidade).
3. Propor medidas de mitigação (patches, hardening, boas práticas).
4. Criar checklist de segurança mínima para a aplicação.


## 8. Checklist de Segurança em Aplicações

* [ ] Código revisado e testado contra OWASP Top 10.
* [ ] Entradas do usuário validadas e sanitizadas.
* [ ] Senhas armazenadas com hash seguro (bcrypt, Argon2).
* [ ] Patches aplicados regularmente (frameworks, bibliotecas).
* [ ] Logs de acesso e falhas monitorados.
* [ ] MFA habilitado para administradores.
* [ ] Configurações padrão de servidores alteradas.


## 9. Questões de Revisão

1. Explique a diferença entre vulnerabilidade, exploit e risco.
2. Quais são as etapas do ciclo de gestão de vulnerabilidades?
3. Cite três falhas comuns listadas no OWASP Top 10.
4. Por que prepared statements são importantes contra SQL Injection?
5. Qual a diferença entre uma vulnerabilidade de aplicação e uma de infraestrutura?


## 10. Leituras Recomendadas

* OWASP Top 10 ([https://owasp.org](https://owasp.org))
* Guia de Testes OWASP (OWASP Testing Guide)
* *The Web Application Hacker’s Handbook* – Dafydd Stuttard & Marcus Pinto
* Documentação oficial do Burp Suite e OWASP ZAP
