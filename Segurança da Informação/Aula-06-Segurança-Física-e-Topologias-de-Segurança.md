# Aula 06 — Segurança Física e Topologias de Segurança

## 1. Conceito de Segurança Física

Segurança física envolve medidas para proteger ativos tangíveis (equipamentos, cabeamento, servidores, mídias) contra acessos não autorizados, desastres ambientais e falhas operacionais.
Ela complementa a segurança lógica, pois muitas invasões digitais começam com falhas físicas, como **tailgating** (entrada junto com funcionário autorizado), roubo de dispositivos ou instalação de keyloggers.

**Princípios básicos:**

* **Dissuadir (Deter):** barreiras, políticas e sinalização.
* **Detectar:** sensores, câmeras, alarmes.
* **Atrasar (Delay):** portas reforçadas, mantraps, racks trancados.
* **Responder:** equipe de segurança, monitoramento, plano de incidentes.


## 2. Áreas Seguras e Controles de Acesso

### Requisitos mínimos em ambientes corporativos:

* **Perímetro:** cercas, controle de entrada no prédio, recepção monitorada.
* **Portas de acesso:** cartões magnéticos, biometria, senha ou múltiplos fatores.
* **Mantraps:** duas portas em sequência, que evitam a entrada de intrusos acompanhando funcionários.
* **Zonas de segurança:** áreas públicas → restritas → críticas (sala de servidores).
* **CCTV:** câmeras cobrindo portas e corredores, com retenção de gravações.
* **Controle de visitantes:** registro, crachás temporários, acompanhamento obrigatório.


## 3. Proteção contra Falhas Ambientais

### Energia

* **UPS:** garante energia imediata em quedas ou oscilações.
* **Geradores:** mantêm serviços por longos períodos.
* **Redundância:** duas fontes de energia independentes, quando possível.

### Climatização (HVAC)

* Temperatura ideal: **18 a 27 °C**.
* Umidade relativa: **40% a 60%**.
* Monitoramento contínuo com alertas.

### Incêndio

* Detectores de fumaça e sensores aspirativos.
* Extinção com agentes limpos (FM-200, Novec) para não danificar equipamentos.
* Planos de evacuação e testes periódicos.


## 4. Topologias de Segurança em Redes

### Bastion Host

* Servidor especialmente protegido usado como **ponto de acesso seguro** a sistemas internos.
* Deve ter apenas serviços essenciais ativos.
* Exemplo de hardening no SSH:

  ```
  PermitRootLogin no
  PasswordAuthentication no
  AllowUsers admin
  ```
* Uso preferencial de autenticação por chaves e múltiplos fatores.

### Screened Network

* Arquitetura em que a **DMZ** é isolada entre dois firewalls.
* Fluxo típico: Internet → Firewall externo → DMZ → Firewall interno → Rede interna.
* Fornece camadas extras de proteção.

### DMZ (Zona Desmilitarizada)

* Rede intermediária para hospedar serviços acessíveis pela Internet (web, e-mail, DNS).
* Políticas de firewall típicas:

  * Internet → DMZ: apenas portas específicas (80, 443, 25).
  * DMZ → Interna: apenas acessos controlados (ex.: servidor web → banco de dados).
  * Interna → DMZ: administração por conexões seguras.
  * Internet → Interna: bloqueado por padrão.


## 5. Exemplos de Arquitetura Segura

### Empresa de pequeno porte

* **Perímetro:** firewall UTM com IDS/IPS.
* **DMZ:** servidor web e e-mail.
* **Rede interna:** separada em VLANs (usuários, servidores, administração).
* **Acesso remoto:** via VPN com MFA.
* **Administração:** feita somente por bastion host com logs centralizados.
* **Sala de servidores:** fechadura eletrônica, câmeras, UPS, backup externo.


## 6. Estudo de Caso — Ataque Físico vs Ataque Lógico

### Ataque Físico

* Invasor entra sem permissão (tailgating).
* Acesso à sala de servidores, instalação de dispositivo malicioso ou roubo de hardware.
* Mitigação: mantraps, vigilância por câmeras, racks trancados, alarmes.

### Ataque Lógico

* Invasor explora vulnerabilidade em site hospedado.
* Obtém acesso remoto ao banco de dados e extrai informações.
* Mitigação: atualizações frequentes, WAF, segregação de rede, monitoramento de logs.

**Lição:** segurança eficaz requer **controles físicos e lógicos trabalhando juntos**.


## 7. Atividade em Grupo

**Desafio:**
Desenhar a **topologia segura** para uma pequena empresa que possui:

* Website público
* Servidor de e-mail
* Banco de dados interno
* Funcionários que trabalham remotamente

**Tarefas:**

1. Criar o diagrama de rede com DMZ, bastion host, firewall(s) e VLANs.
2. Definir regras de acesso entre Internet, DMZ e rede interna.
3. Listar controles físicos mínimos para a sala de servidores.
4. Propor medidas de mitigação para um incidente (ex.: webserver comprometido).


## 8. Checklist de Segurança Física e Lógica

* Portas de salas críticas com acesso controlado.
* Racks trancados.
* UPS e gerador testados regularmente.
* Monitoramento de temperatura e umidade.
* Backups armazenados de forma segura (off-site e criptografados).
* DMZ implementada para serviços públicos.
* Bastion host configurado com hardening e logs centralizados.
* Políticas de firewall revisadas periodicamente.


## 9. Questões de Revisão

1. Qual a função de um bastion host?
2. Cite três controles de segurança física que reduzem o risco de roubo de servidores.
3. Explique a diferença entre DMZ e rede interna.
4. Por que é importante ter redundância de energia em um data center?
5. Qual a vantagem de usar uma rede “screened” com dois firewalls?

## 10. Leituras Recomendadas

* ISO/IEC 27001 — Anexo A.11: Segurança física e do ambiente.
* OWASP — práticas de segmentação de rede e segurança em DMZ.
* Manuais de boas práticas de data centers (ASHRAE e guias de fabricantes).