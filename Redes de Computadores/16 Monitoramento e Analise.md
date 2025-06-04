# Monitoramento e Análise de Redes

## 1. Conceito de Monitoramento de Redes

### Definição e Importância

O **monitoramento de redes** é o processo contínuo de observar e analisar o funcionamento de uma rede de computadores, com o objetivo de **garantir seu desempenho, disponibilidade e segurança**. Isso envolve a coleta de dados sobre tráfego, dispositivos, conexões, tempo de resposta, falhas e outros indicadores importantes.

Sem monitoramento, problemas podem passar despercebidos até causarem interrupções graves, como:

* Lentidão no acesso a sistemas internos.
* Queda de servidores.
* Vazamento de dados por falhas de segurança.

Exemplo:
Uma empresa percebe que seu sistema de vendas online está lento. Ao utilizar uma ferramenta de monitoramento, o administrador de rede identifica que um dos servidores está com 95% de uso de CPU devido a uma sobrecarga de tráfego gerada por um ataque DDoS. Com essa informação, é possível agir rapidamente para mitigar o problema e restaurar o funcionamento normal.


### Monitoramento Passivo x Ativo

| Tipo        | Descrição                                                                     | Exemplo prático                                                                       |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Passivo** | Observa o tráfego que já está circulando na rede sem gerar tráfego adicional. | Uso do **Wireshark** para capturar pacotes e identificar problemas de comunicação.    |
| **Ativo**   | Envia pacotes de teste ou realiza verificações para avaliar o estado da rede. | Uso do **Ping** para verificar se um servidor está online e qual o tempo de resposta. |

**Comparação com a vida real:**

* Monitoramento **passivo** é como observar o trânsito por câmeras de segurança.
* Monitoramento **ativo** é como enviar um carro da polícia para testar se uma estrada está livre.


### Casos de Uso

1. **Segurança**

   * Detectar acessos não autorizados, tentativas de invasão e tráfego suspeito.
   * Identificar **portas abertas** ou serviços indevidos sendo executados.
   * Verificar se há **transferência de grandes volumes de dados** fora do horário padrão.

   **Exemplo:** Um firewall com alertas ativos detecta um grande número de acessos vindo de um IP russo e bloqueia automaticamente esse tráfego.

2. **Desempenho**

   * Avaliar se a rede está respondendo de forma eficiente.
   * Identificar **gargalos**, como um switch sobrecarregado ou um link de internet saturado.

   **Exemplo:** A equipe de TI identifica que todos os acessos ficam lentos às 10h da manhã. O monitoramento mostra que o uso da banda de internet atinge 100% nesse horário, indicando necessidade de upgrade.

3. **Disponibilidade**

   * Monitorar se os dispositivos da rede estão **online** e acessíveis.
   * Gerar alertas em caso de queda de conexão ou falha de hardware.

   **Exemplo:** Um sistema envia um alerta para o celular do administrador informando que o servidor de e-mails está offline.

4. **Conformidade**

   * Verificar se a rede está em conformidade com políticas internas e normas como LGPD, ISO 27001 ou PCI-DSS.
   * Garantir que os logs de rede estejam armazenados e acessíveis para auditorias.

   **Exemplo:** Durante uma auditoria de segurança, o setor de TI apresenta relatórios de tráfego criptografado e autenticação segura em todos os acessos à rede.


## 2. Métricas de Desempenho em Redes

O desempenho de uma rede pode ser medido por diversas métricas que ajudam a identificar gargalos, falhas e oportunidades de melhoria. Essas métricas são fundamentais para manter a **eficiência**, a **qualidade de serviço (QoS)** e a **satisfação dos usuários**. Abaixo estão as principais:

### Largura de Banda (Throughput)

A largura de banda representa a quantidade de dados que pode ser transmitida por um link de rede em um determinado período, geralmente medida em Mbps (megabits por segundo) ou Gbps.

* **Diferença entre banda teórica e banda real:** Um link de 100 Mbps pode, na prática, entregar apenas 70 Mbps dependendo da rede.
* **Throughput real:** taxa efetiva de transferência após considerar perdas, latência, interferências, etc.

**Exemplo:** Um setor de design gráfico começa a reclamar da lentidão ao enviar arquivos grandes para o servidor. Ao medir o throughput, descobre-se que a rede está entregando apenas 30 Mbps de uma capacidade de 100 Mbps, devido a uso excessivo em outros setores.

### Latência e Jitter

* **Latência** é o tempo que um pacote leva para ir de um ponto a outro na rede.
* **Jitter** é a variação da latência entre os pacotes enviados consecutivamente.

Ambas são críticas em aplicações em tempo real, como chamadas VoIP ou jogos online.

**Exemplo:** Em uma videochamada, a fala de um participante chega atrasada ou cortada. A análise mostra que há jitter elevado, o que compromete a comunicação contínua.

### Perda de Pacotes (Packet Loss)

Representa a porcentagem de pacotes que foram enviados, mas não chegaram ao destino. Pode ocorrer por:

* Congestionamento na rede,
* Interferências em redes sem fio,
* Equipamentos defeituosos.

**Exemplo:** Durante a transmissão de dados de sensores em uma fábrica para um servidor central, parte das informações não chega. O monitoramento detecta uma perda de pacotes de 15%, indicando necessidade de reconfiguração da rede Wi-Fi industrial.

### Tempo de Resposta e Uptime

* **Tempo de resposta** é quanto tempo leva para um sistema ou serviço responder a uma solicitação.
* **Uptime** é a porcentagem de tempo que um dispositivo ou serviço permanece operacional e disponível.

Essas métricas são usadas para medir a confiabilidade da rede.

**Exemplo:** Um site corporativo tem tempo médio de resposta de 500ms e uptime de 95%. Isso indica lentidão e quedas frequentes, o que impacta negativamente a experiência do usuário final.

### Tabela de Roteamento como Fonte de Análise

A tabela de roteamento contém os caminhos que os pacotes seguem para alcançar diferentes redes. Analisar essa tabela permite:

* Verificar se há rotas incorretas ou ineficientes,
* Detectar loops de roteamento,
* Avaliar rotas preferenciais e métricas associadas (como custo, hops).

**Exemplo:** Um administrador nota que o tráfego interno entre dois departamentos está passando por um roteador externo, gerando lentidão. A inspeção da tabela de roteamento revela uma rota mal configurada que redireciona o tráfego de forma ineficiente.

## 3. Boas Práticas de Monitoramento

Um sistema de monitoramento eficiente vai além da simples coleta de dados. É preciso estabelecer práticas que ajudem a interpretar esses dados corretamente, identificar falhas antes que afetem os usuários e agir de forma proativa. As boas práticas listadas abaixo contribuem para a estabilidade, segurança e evolução da rede.

### Estabelecimento de **Baselines** para Detectar Anomalias

Um *baseline* (ou linha de base) é o padrão esperado de comportamento da rede em condições normais. Ele serve como referência para identificar comportamentos anômalos, como picos de tráfego, aumento de latência ou falhas de dispositivos.

* **Como construir:** coleta-se dados de desempenho por um período representativo (como uma semana) e define-se o valor médio e os limites aceitáveis.
* **Por que é útil:** sem um baseline, é difícil saber se um comportamento atual é normal ou sinal de problema.

**Exemplo:** Se normalmente o uso de banda é de 40 Mbps no horário comercial e, de repente, salta para 90 Mbps sem aumento no número de usuários, o sistema pode sinalizar isso como anomalia, indicando possível download indevido ou ataque.

### **Alertas e Notificações Automatizadas**

Configurar alertas automáticos permite que a equipe de TI seja avisada imediatamente quando algo sai do padrão. Esses alertas podem ser enviados por e-mail, SMS, ou aplicativos de monitoramento (como Zabbix, Grafana, PRTG).

* Os alertas devem ser **priorizados** (críticos, importantes, informativos).
* Evite excesso de alertas para não causar "fadiga de alarme".

**Exemplo:** Se um servidor atinge 95% de uso de CPU por mais de 5 minutos, um alerta é enviado ao administrador antes que o sistema trave, permitindo ação preventiva como reinício de serviços ou redistribuição de carga.

### Documentação e Histórico de Falhas para Melhoria Contínua

Manter registros organizados de falhas, tempos de resposta, intervenções e soluções aplicadas ajuda a:

* Identificar padrões de problemas recorrentes.
* Aumentar a eficiência da equipe ao tratar falhas semelhantes no futuro.
* Servir de base para auditorias, revisões e decisões estratégicas.

**Exemplo:** Após registrar várias quedas de conexão no setor financeiro, a análise do histórico mostra que sempre ocorrem após atualizações automáticas do switch. A equipe, então, decide programar essas atualizações fora do horário de expediente.

## Trabalhos

**Objetivo:**
Investigar e apresentar, de forma objetiva, conceitos e aplicações práticas relacionadas ao monitoramento e à segurança em redes de computadores.

**Formato da Atividade:**

* Trabalho em grupo.
* Entrega obrigatória de **apresentação em slides (.ppt ou .pdf)** com os resultados da pesquisa.
* **Não é necessário entregar relatório escrito.**

**Apresentação:**

* Tempo máximo de **15 minutos por grupo**.
* Todos os integrantes devem participar da apresentação.
* É recomendável o uso de exemplos, imagens e esquemas para facilitar a compreensão.


### **Grupo 1 – Segurança e Privacidade no Monitoramento de Redes**

**Tema:**
Riscos técnicos e legais relacionados à segurança e privacidade no monitoramento de redes.

**Objetivo:**
Analisar os principais riscos de segurança, ataques e implicações legais (como a LGPD) no uso de ferramentas de monitoramento de tráfego.

**Sugestão de tópicos:**

* Ataques de *man-in-the-middle* e sniffing de pacotes.
* Vazamento de dados sensíveis em redes não criptografadas.
* O que a LGPD permite ou restringe em redes corporativas.
* Boas práticas de privacidade e proteção de dados monitorados.
* Casos reais de falhas de segurança por uso indevido de ferramentas.



### **Grupo 2 – Controle de Acesso e Gestão Segura no Monitoramento**

**Tema:**
Mecanismos de autenticação, autorização e controle de acesso no uso de ferramentas de monitoramento.

**Objetivo:**
Estudar como proteger o acesso às informações de rede, garantindo que apenas usuários autorizados utilizem ferramentas de monitoramento.

**Sugestão de tópicos:**

* Autenticação em dois fatores (2FA) e autenticação robusta.
* Gerenciamento de usuários, senhas e perfis de acesso.
* Integração com políticas institucionais de segurança da informação.
* Registro de acessos e auditoria de uso das ferramentas.



### **Grupo 3 – Ferramentas Práticas de Análise de Rede**

**Tema:**
Utilização de ferramentas técnicas como Wireshark, ping, traceroute e netstat para análise de redes.

**Objetivo:**
Demonstrar o uso prático de ferramentas de análise e diagnóstico de redes, interpretando seus resultados e compreendendo suas limitações.

**Sugestão de tópicos:**

* Captura e análise de pacotes com Wireshark.
* Protocolos comuns identificados nas análises.
* Diagnóstico com comandos ping, traceroute e netstat.
* Diferença entre ICMP, TCP e UDP nas análises.
* Limitações técnicas e legais das ferramentas.



### **Grupo 4 – Monitoramento Corporativo com Plataformas Profissionais**

**Tema:**
Análise e comparação de ferramentas corporativas de monitoramento contínuo, como Nagios, Zabbix e PRTG.

**Objetivo:**
Explorar recursos, arquitetura e aplicações práticas de plataformas de monitoramento usadas em ambientes profissionais.

**Sugestão de tópicos:**

* Instalação e configuração básica de uma plataforma (mínimo viável).
* Diferença entre agentes e coleta passiva.
* Alertas, relatórios e dashboards.
* Exemplos de aplicação em empresas ou instituições de ensino.
* Comparativo entre as ferramentas estudadas.


## Referências

**LIVROS**

TANENBAUM, Andrew S.; WETHERALL, David J. *Redes de computadores*. 5. ed. Rio de Janeiro: Pearson, 2011.

KUROSE, James F.; ROSS, Keith W. *Redes de computadores e a internet: uma abordagem top-down*. 6. ed. São Paulo: Pearson, 2017.

FOROUZAN, Behrouz A. *Data communications and networking*. 5th ed. New York: McGraw-Hill, 2012.

MACHADO, Fernando; MAIA, Luiz Paulo. *Segurança de redes*. São Paulo: Novatec, 2014.


**LEIS E NORMAS**

BRASIL. *Lei nº 13.709, de 14 de agosto de 2018*. Lei Geral de Proteção de Dados Pessoais (LGPD). Disponível em: [https://www.gov.br/lgpd](https://www.gov.br/lgpd). Acesso em: 4 jun. 2025.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. *ABNT NBR ISO/IEC 27002:2022 — Tecnologia da informação — Técnicas de segurança — Código de prática para controles de segurança da informação*. Rio de Janeiro, 2022.


**DOCUMENTAÇÃO DE FERRAMENTAS**

WIRESHARK. *Documentation*. Disponível em: [https://www.wireshark.org/docs/](https://www.wireshark.org/docs/). Acesso em: 4 jun. 2025.

NAGIOS. *Nagios documentation*. Disponível em: [https://www.nagios.org/documentation/](https://www.nagios.org/documentation/). Acesso em: 4 jun. 2025.

ZABBIX. *Zabbix documentation*. Disponível em: [https://www.zabbix.com/documentation/](https://www.zabbix.com/documentation/). Acesso em: 4 jun. 2025.

PAESSLER. *PRTG network monitor documentation*. Disponível em: [https://www.paessler.com/support](https://www.paessler.com/support). Acesso em: 4 jun. 2025.

