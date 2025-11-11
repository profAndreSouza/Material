# **Aula 14 – Restrições de Redes e Telecomunicações**

## **1. Conceito de Limitações Técnicas: Banda, Latência, Jitter e Protocolos**

Na segurança da informação, compreender as **restrições técnicas das redes** é essencial para avaliar vulnerabilidades, riscos e pontos de falha. Limitações de desempenho e protocolos mal implementados podem ser exploradas para ataques de negação de serviço, interceptação de tráfego e comprometimento da confidencialidade.

### **1.1 Largura de Banda**

A **largura de banda** é a capacidade máxima de transmissão de dados de uma rede. Quando saturada, a rede torna-se **vulnerável à indisponibilidade** — seja por falhas acidentais ou ataques intencionais.
Ataques DDoS (Distributed Denial of Service) exploram exatamente essa limitação, inundando links de comunicação até o ponto de exaustão.
A falta de **gerenciamento de QoS (Quality of Service)** também pode afetar a disponibilidade de serviços críticos, violando o princípio de **disponibilidade** da tríade CIA (Confidencialidade, Integridade e Disponibilidade).

### **1.2 Latência**

A **latência** representa o tempo de resposta entre o envio e a recepção de um pacote.
Ataques de interceptação, como *man-in-the-middle*, podem aumentar a latência de forma imperceptível, mascarando atividades maliciosas.
Em sistemas de detecção de intrusão, altas latências prejudicam a **resposta em tempo real**, permitindo que invasões ocorram antes da reação dos mecanismos de defesa.

### **1.3 Jitter**

O **jitter** (variação no atraso dos pacotes) impacta comunicações em tempo real, como VoIP e streaming.
Além de afetar a qualidade, pode indicar **anomalias de tráfego** típicas de ataques de injeção de pacotes, interceptação de chamadas VoIP ou exploração de vulnerabilidades em protocolos de transporte.

### **1.4 Protocolos de Comunicação**

Protocolos definem como os dados são transmitidos. Quando obsoletos ou mal configurados, tornam-se **alvos diretos de ataques**.
Protocolos inseguros como **Telnet**, **FTP** e **SNMPv1** transmitem dados sem criptografia, permitindo a interceptação de credenciais e informações sensíveis.
Por outro lado, protocolos seguros (como HTTPS, SFTP, SNMPv3) mitigam riscos, mas exigem **gestão correta de chaves e certificados digitais**.


## **2. Impactos da Infraestrutura de Telecomunicações na Segurança**

A infraestrutura de telecomunicações é o **espinhaço da segurança da informação corporativa**.
Mesmo políticas e sistemas de segurança robustos tornam-se ineficazes se a camada física ou lógica de comunicação for vulnerável.

### **Principais riscos:**

* **Pontos únicos de falha (Single Points of Failure):** interrupções em links ou roteadores sem redundância podem derrubar serviços críticos, exploráveis em ataques de DoS direcionados.
* **Equipamentos legados:** roteadores e switches antigos frequentemente operam com firmware desatualizado, vulnerável a exploração remota (ex: CVE-2018-0171 – vulnerabilidade em roteadores Cisco).
* **Dependência de provedores externos:** falhas ou ataques contra infraestruturas de backbone podem impactar milhares de empresas.
* **Configurações inseguras:** uso de senhas padrão, serviços administrativos expostos e falta de segmentação de rede são vetores de invasão comuns.

A segurança de telecomunicações depende da combinação entre **redundância, segmentação e gestão contínua** de ativos.


## **3. Restrições em Redes Sem Fio e Móveis**

Redes sem fio e móveis aumentam a produtividade e conectividade, mas trazem vulnerabilidades específicas. O tráfego aéreo, compartilhado e dinâmico, é especialmente suscetível à interceptação e manipulação.

### **Riscos e limitações comuns:**

* **Interferência e perda de sinal:** podem mascarar *sniffers* ou ataques de *deauthentication*, usados para capturar credenciais.
* **Criptografia fraca (WEP/WPA):** facilmente quebrada por ferramentas públicas como Aircrack-ng.
* **Redes abertas:** permitem ataques *evil twin*, nos quais um invasor cria um ponto de acesso falso para interceptar o tráfego.
* **Mobilidade e redes 5G:** embora rápidas, aumentam a superfície de ataque devido à descentralização de antenas e roteamento dinâmico.

### **Caso real – Rede Wi-Fi corporativa comprometida**

Em 2022, a rede sem fio de um hospital em Londres foi explorada por atacantes que configuraram um *rogue access point* (ponto de acesso falso).
O tráfego de autenticação foi interceptado e reutilizado para acessar o sistema interno, resultando na exposição de registros médicos.
A investigação apontou ausência de autenticação mútua (802.1X) e falta de segmentação entre a rede de visitantes e a corporativa.


## **4. Problemas de Compatibilidade e Interoperabilidade**

Soluções de segurança e redes de múltiplos fabricantes exigem integração cuidadosa. Falhas de interoperabilidade podem gerar brechas, tornando defesas ineficazes.

### **Exemplos de vulnerabilidades decorrentes:**

* Falhas entre **firewalls de diferentes fornecedores**, permitindo passagem indevida de pacotes.
* **VPNs incompatíveis** que forçam o uso de protocolos antigos (ex: PPTP), comprometendo a confidencialidade.
* Sistemas IoT que utilizam **protocolos proprietários não criptografados**, expondo dados de controle industrial.
* Conflitos entre sistemas de monitoramento e IDS/IPS, gerando *falsos negativos*.

A ausência de interoperabilidade segura é um problema crescente com a expansão da **computação em nuvem híbrida**, onde integrações entre múltiplos ambientes ampliam as possibilidades de erro.


## **5. Vulnerabilidades que Exploram Limitações de Rede**

Diversos tipos de ataques se aproveitam das restrições técnicas para comprometer sistemas ou degradar serviços.

### **Ataques comuns:**

* **DNS Amplification:** usa servidores DNS abertos para multiplicar o volume de tráfego em ataques DDoS.
* **Slowloris Attack:** envia requisições HTTP incompletas, explorando limitações de threads do servidor.
* **Ping Flood e ICMP Storm:** saturam a largura de banda da rede.
* **VoIP Injection:** explora jitter e latência para injetar ruído ou pacotes falsos em chamadas.
* **Protocol Spoofing:** falsificação de cabeçalhos TCP/IP para desviar tráfego.

### **Caso real – Ataque ao GitHub (2018)**

O **GitHub** sofreu o maior ataque DDoS da época, com **1,35 Tbps** de tráfego, causado por uma vulnerabilidade de **amplificação do protocolo Memcached**.
A infraestrutura do GitHub foi sobrecarregada em segundos, forçando o redirecionamento do tráfego para serviços de mitigação da Akamai.
Esse caso destacou como **protocolos mal configurados** podem ser transformados em armas digitais, explorando limitações de banda e processamento.


## **6. Estudo de Caso: Ataque de Negação de Serviço (DoS/DDoS)**

Ataques de **negação de serviço** visam saturar recursos de rede ou processamento, impossibilitando o uso legítimo de um serviço.
Em ataques **DDoS**, milhares de dispositivos (geralmente IoT) são controlados remotamente por *botnets*.

### **Impactos de segurança:**

* **Indisponibilidade de sistemas críticos.**
* **Perda de confiança e reputação institucional.**
* **Risco de exploração paralela:** enquanto a equipe responde ao DDoS, outros invasores podem atacar sistemas internos.
* **Custos elevados com mitigação e provedores de contenção.**

### **Caso real – Ataque à Dyn (2016)**

O provedor de DNS **Dyn** foi atacado por uma botnet composta por câmeras e roteadores domésticos infectados pelo malware **Mirai**.
O ataque derrubou temporariamente sites como **Twitter, Netflix, Amazon e Spotify** nos Estados Unidos.
A falha explorada foi a **ausência de autenticação segura em dispositivos IoT**, demonstrando o elo entre telecomunicações, rede e segurança.


## **7. Atividade em Grupo – Mitigação de Riscos de Rede**

### **Contexto:**

Sua turma de **Desenvolvimento de Sistemas** está assessorando uma empresa que possui:

* Matriz e filiais conectadas por VPN;
* Rede Wi-Fi corporativa e rede de visitantes;
* Acesso remoto por dispositivos móveis.

Nos últimos dias, a empresa relatou lentidão e alertas de segurança em sua rede.


### **Desafio:**

Seu grupo deverá propor **um plano resumido de mitigação de riscos de rede**, considerando **segurança da informação** nos seguintes pontos:

1. Prevenção de ataques DDoS.
2. Proteção de roteadores e Wi-Fi corporativo.
3. Segmentação entre redes internas e de visitantes.
4. Uso de VPN segura e autenticação robusta.

Em seguida, escolham **um caso real breve** de falha ou ataque em redes (por exemplo, DDoS contra um provedor ou falha em Wi-Fi corporativo) e indiquem:

* A causa principal;
* O impacto;
* Uma medida preventiva aplicável ao caso da empresa.

