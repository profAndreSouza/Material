# Atividade de Pesquisa em Duplas: Arquitetura IoT na AWS (Mobile + MQTT + Node-RED)

**Contexto:**  
Vocês foram encarregados de desenhar a infraestrutura em nuvem na **AWS** para uma solução de monitoramento industrial. O sistema consiste em sensores/CLPs enviando dados via **MQTT**, um **Node-RED** para processamento/regras dos fluxos e um **aplicativo mobile** para operadores acompanharem os alertas em tempo real.


### O que a dupla deve pesquisar e responder (Texto de 1 a 2 páginas):

1. **Hospedagem do Node-RED (IaaS vs. Containers):**
   - Comparando o que vimos nas aulas (EC2 e Docker), como vocês sugerem hospedar o Node-RED na AWS?
   - Qual **tipo de instância EC2** e sistema operacional usariam? 
   - Como garantiriam que os fluxos do Node-RED não se percam caso o container reinicie (persistência de dados/volumes)?

2. **Broker MQTT na AWS:**
   - Pesquisem e comparem duas opções:
     - **Opção A (IaaS):** Subir um container com broker próprio (ex: *Eclipse Mosquitto*) em uma EC2.
     - **Opção B (PaaS / Gerenciado):** Usar o serviço nativo **AWS IoT Core**.
   - Qual das opções a dupla escolheria para conectar os dispositivos e o app mobile? Justifiquem pensando em custo, manutenção e responsabilidade compartilhada.

3. **Segurança e Rede (Firewall & Regiões):**
   - Em qual **Região AWS** vocês implantariam a solução (ex: São Paulo `sa-east-1` vs. N. Virgínia `us-east-1`)? Considerem latência e custo.
   - Quais portas precisariam ser liberadas nas regras de entrada (*Inbound Rules*) do **Security Group** para permitir o acesso do Node-RED (web) e a comunicação MQTT?

4. **Diagrama / Fluxo da Solução:**
   - Desenhem um diagrama simples em blocos mostrando o caminho da informação:  
     `Sensores/CLP` ➔ `Broker MQTT` ➔ `Node-RED` ➔ `App Mobile` (indicando onde entra a AWS).

### Entrega
- **Formato:** Documento curto (PDF ou Markdown) com os nomes da dupla.
- **Foco:** Justificativas técnicas com base nos conceitos das 4 primeiras aulas (IaaS/PaaS, EC2, Docker, Volumes e Regras de Rede).