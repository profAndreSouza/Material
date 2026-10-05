window.SLIDE_DECKS["computacao-em-nuvem/semana-10"] = {
  "title": "Da EC2 Pública à Arquitetura de Rede",
  "slides": [
    {
      "category": "Semana 10",
      "title": "Da EC2 pública à arquitetura de rede",
      "subtitle": "Leitura da VPC existente e rastreamento do tráfego",
      "content": "<div class=\"hero-story\"><div class=\"hero-emoji\">🌐</div><div><h2>A instância participa de várias decisões de rede</h2><p>VPC, sub-rede, tabela de rotas, IP público, Security Group, SO e Docker precisam cooperar para uma requisição alcançar o serviço.</p></div></div>"
    },
    {
      "category": "Rastreamento",
      "title": "Jornada do Pacote (Packet Flow Tracker)",
      "subtitle": "Acesso público é uma cadeia encadeada de autorizações e rotas",
      "content": "<div class=\"sequence\"><span>1. Navegador</span><span>2. Internet Gateway</span><span>3. Route Table</span><span>4. Security Group</span><span>5. Kernel Linux</span><span>6. Docker Net</span><span>7. Contêiner</span></div><div class=\"exam-note\">Uma falha em qualquer um dos 7 elos impede o acesso. O diagnóstico eficiente descobre em qual nó o pacote foi bloqueado.</div>"
    },
    {
      "category": "Camadas",
      "title": "Perguntas por Camada de Infraestrutura",
      "subtitle": "Cada camada responde por uma causa distinta de falha",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>1. Endereçamento (CIDR)</strong><p>Qual é o IP da rede e do host? (Ex: 10.0.1.25/24 em VPC 10.0.0.0/16)</p></div><div class=\"concept-row\"><strong>2. Roteamento (Route Table)</strong><p>Para qual próximo salto (next hop) enviar? (0.0.0.0/0 → igw-xxxx)</p></div><div class=\"concept-row\"><strong>3. Autorização (Security Group)</strong><p>Esta origem/IP pode conectar neste protocolo/porta?</p></div><div class=\"concept-row\"><strong>4. Publicação (Docker Container)</strong><p>A porta interna foi mapeada para o host? (1880:1880)</p></div></div>"
    },
    {
      "category": "Endereçamento",
      "title": "CIDR e Reservas IPv4 na AWS",
      "subtitle": "A sub-rede segmenta o espaço de endereçamento da VPC",
      "content": "<div class=\"grid-2\"><div class=\"formula-box\">Sub-rede /24<br>2^(32-24) = 256 IPs totas<br><strong>251 IPs Utilizáveis</strong></div><div><div class=\"concept-list\"><div class=\"concept-row\"><strong>Endereços Reservados AWS</strong><p>A AWS reserva 5 IPs por sub-rede: .0 (Rede), .1 (Roteador), .2 (DNS), .3 (Futuro) e .255 (Broadcast).</p></div></div></div></div>"
    },
    {
      "category": "Roteamento",
      "title": "Tabela de Rotas e Maior Prefixo",
      "subtitle": "O roteador escolhe a rota mais específica",
      "content": "<table class=\"answer-table\"><thead><tr><th>Destino</th><th>Alvo (Target)</th><th>Propósito</th></tr></thead><tbody><tr><td><code>10.0.0.0/16</code></td><td><code>local</code></td><td>Tráfego interno entre instâncias da VPC</td></tr><tr><td><code>0.0.0.0/0</code></td><td><code>igw-0abc1234</code></td><td>Tráfego destinado à Internet externa</td></tr></tbody></table><div class=\"exam-note\">Para um destino interno (10.0.2.10), a rota <code>/16</code> é escolhida por ter prefixo mais longo que <code>/0</code>.</div>"
    },
    {
      "category": "Sub-rede Pública",
      "title": "6 Condições para Acesso Público",
      "subtitle": "Sub-rede pública não expõe a instância automaticamente",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>1. Gateway</strong><p>IGW anexado à VPC.</p></div><div class=\"concept-row\"><strong>2. Rota</strong><p>Subnet associada à tabela apontando 0.0.0.0/0 para o IGW.</p></div><div class=\"concept-row\"><strong>3. IP Público</strong><p>Interface da EC2 com IPv4 Público ou Elastic IP.</p></div><div class=\"concept-row\"><strong>4. Security Group</strong><p>Regras Inbound liberando a porta e IP de origem.</p></div><div class=\"concept-row\"><strong>5. Serviço no SO</strong><p>Processo escutando na porta (ex: Node-RED ou Docker).</p></div><div class=\"concept-row\"><strong>6. Mapeamento Docker</strong><p>Porta Docker devidamente publicada (ex: -p 1880:1880).</p></div></div>"
    },
    {
      "category": "Firewall",
      "title": "Security Groups: Estado e Regras",
      "subtitle": "Firewall stateful no nível da interface de rede (ENI)",
      "content": "<div class=\"concept-list\"><div class=\"concept-row\"><strong>Stateful</strong><p>Respostas a conexões de entrada autorizadas são permitidas automaticamente.</p></div><div class=\"concept-row\"><strong>Menor Privilégio</strong><p>Liberar SSH (22) apenas para o IP /32 do administrador; evitar 0.0.0.0/0 em portas sensíveis sem TLS.</p></div></div>"
    },
    {
      "category": "Diagnóstico",
      "title": "Tabela de Diagnóstico de Falhas",
      "subtitle": "Associe o sintoma observado à causa raiz",
      "content": "<table class=\"answer-table\"><thead><tr><th>Sintoma / Evidência</th><th>Causa Provável</th><th>Comando de Teste</th></tr></thead><tbody><tr><td><code>Connection timed out</code></td><td>Security Group ou Route Table</td><td><code>nc -zvw3 IP PORTA</code></td></tr><tr><td><code>Connection refused</code></td><td>Host alcançado, mas nada escuta</td><td><code>sudo ss -lntp</code></td></tr><tr><td>Porta oculta em <code>docker ps</code></td><td>Falta de binding no Docker Compose</td><td><code>docker ps</code></td></tr><tr><td>HTTP 404 Not Found</td><td>Aplicação no ar, mas rota ausente</td><td><code>curl -i http://IP/rota</code></td></tr></tbody></table>"
    },
    {
      "category": "Multicloud",
      "title": "Equivalentes em Provedores Cloud",
      "subtitle": "Conceitos universais de redes em nuvem",
      "content": "<table class=\"answer-table\"><thead><tr><th>Conceito</th><th>AWS</th><th>Azure</th><th>GCP</th><th>Oracle Cloud</th></tr></thead><tbody><tr><td>Rede Isolada</td><td>VPC</td><td>VNet</td><td>VPC Network</td><td>VCN</td></tr><tr><td>Firewall Recurso</td><td>Security Group</td><td>NSG</td><td>VPC Firewall</td><td>Security List / NSG</td></tr><tr><td>Tabela Rotas</td><td>Route Table</td><td>Route Table / UDR</td><td>Routes</td><td>Route Table</td></tr></tbody></table>"
    },
    {
      "category": "Quiz",
      "title": "Checagem de Entendimento",
      "subtitle": "Testando o diagnóstico de infraestrutura",
      "content": "<div class=\"hero-story\"><div class=\"hero-emoji\">❓</div><div><h2>Se o comando 'curl http://localhost:1880' funciona na EC2, mas acessos pelo IP Público dão Timeout, onde está a falha?</h2><p><strong>Resposta:</strong> A falha está na camada de rede externa (Security Group bloqueando a porta 1880, falta de rota para o IGW ou ausência de IP público), pois o serviço já comprovou estar ativo dentro do SO da instância!</p></div></div>"
    },
    {
      "category": "Prática",
      "title": "Atividade de Inventário & Diagnóstico",
      "subtitle": "Roteiro prático no notebook da aula",
      "content": "<div class=\"rubric-list\"><div class=\"rubric-item\"><span>1. Mapeie os CIDRs da VPC e Sub-rede</span><b>Passo 1</b></div><div class=\"rubric-item\"><span>2. Inspecione as regras do Security Group</span><b>Passo 2</b></div><div class=\"rubric-item\"><span>3. Execute os comandos de diagnóstico CLI no terminal</span><b>Passo 3</b></div><div class=\"rubric-item\"><span>4. Resolva o estudo de caso de falha simulada</span><b>Passo 4</b></div></div>"
    }
  ]
};
