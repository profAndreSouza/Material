# Edge Computing: fundamentos teóricos, contexto e aplicações

Edge computing é um paradigma de computação distribuída no qual o processamento de dados ocorre próximo à sua origem — isto é, nos próprios dispositivos ou em nós intermediários da rede (gateways, micro data centers locais) — em vez de depender exclusivamente de infraestruturas centralizadas como grandes data centers ou nuvens públicas. Essa mudança de localização do processamento altera profundamente aspectos como latência, consumo de banda, confiabilidade e até mesmo o desenho das aplicações.

## 1. Evolução do modelo computacional

Historicamente, a computação passou por três grandes fases:

* **Centralização (mainframes)**: processamento concentrado, terminais burros.
* **Distribuição cliente-servidor e cloud computing**: maior elasticidade e escalabilidade, mas ainda com forte centralização lógica.
* **Edge computing**: descentralização acentuada, com processamento espalhado ao longo da rede.

O modelo de cloud computing consolidou-se por sua eficiência no compartilhamento de recursos e pela capacidade de escalar sob demanda. No entanto, a explosão de dispositivos conectados — especialmente no contexto de Internet das Coisas (IoT) — passou a gerar volumes massivos de dados em locais distribuídos, frequentemente exigindo processamento imediato. Esse cenário expôs limitações do modelo centralizado.

## 2. Problemas do modelo centrado na nuvem

Quando todos os dados são enviados para a nuvem para processamento, surgem alguns problemas estruturais:

* **Latência**: o tempo necessário para enviar dados até a nuvem e receber uma resposta pode ser incompatível com aplicações críticas (por exemplo, veículos autônomos ou controle industrial).
* **Largura de banda**: transmitir continuamente grandes volumes de dados (como vídeo ou dados sensoriais em alta frequência) pode saturar redes.
* **Custo operacional**: armazenamento e transferência massiva de dados aumentam custos.
* **Dependência de conectividade**: sistemas tornam-se vulneráveis a falhas de rede.

Edge computing surge como resposta a esses problemas ao deslocar parte do processamento para mais perto da origem dos dados.

## 3. Funcionamento da edge computing

Na edge computing, os dados são processados em diferentes camadas da arquitetura:

1. **Dispositivo (edge device)**: sensores, câmeras, máquinas industriais, smartphones.
2. **Nó de edge (edge node)**: gateways, servidores locais, mini data centers.
3. **Nuvem**: processamento global, armazenamento de longo prazo, treinamento de modelos.

Essa estrutura forma uma arquitetura hierárquica e distribuída. Em vez de enviar todos os dados brutos para a nuvem, o sistema pode:

* Filtrar dados irrelevantes
* Executar inferência de modelos de machine learning localmente
* Agregar ou resumir informações
* Enviar apenas eventos relevantes ou dados consolidados

Essa abordagem reduz o volume de dados transmitidos e permite respostas em tempo quase real.

## 4. Relação com IoT e sistemas ciberfísicos

A Internet das Coisas (IoT) é um dos principais motores da edge computing. Dispositivos IoT são responsáveis por gerar dados continuamente, mas, isoladamente, possuem capacidade limitada de análise.

A edge computing adiciona inteligência a esse ecossistema ao permitir:

* Processamento local de dados sensoriais
* Tomada de decisão autônoma
* Execução de algoritmos de machine learning próximos à fonte de dados

Em ambientes industriais, esse conceito evolui para o chamado **IIoT (Industrial Internet of Things)**, onde máquinas, sensores e sistemas de controle operam de forma integrada, com suporte da edge para garantir baixa latência e alta confiabilidade.

## 5. Papel das redes 5G

As redes 5G ampliam o potencial da edge computing ao oferecer:

* Alta taxa de transmissão de dados
* Latência extremamente baixa
* Suporte a grande densidade de dispositivos

A combinação de 5G com edge computing permite novos tipos de aplicações, como realidade aumentada em tempo real, cirurgias remotas e sistemas autônomos distribuídos. Em muitos casos, a própria infraestrutura de telecomunicações incorpora nós de edge (conceito de MEC — Multi-access Edge Computing).

## 6. Benefícios estruturais

A adoção da edge computing traz benefícios importantes:

* **Redução de latência**: essencial para aplicações em tempo real.
* **Eficiência no uso de rede**: menor tráfego de dados.
* **Resiliência**: sistemas continuam operando mesmo com conectividade limitada.
* **Privacidade e conformidade**: dados sensíveis podem ser processados localmente.
* **Escalabilidade distribuída**: processamento distribuído evita gargalos centrais.

## 7. Desafios e limitações

Apesar das vantagens, a edge computing introduz novas complexidades:

* **Gerenciamento distribuído**: milhares de dispositivos precisam ser monitorados e atualizados.
* **Segurança**: a superfície de ataque aumenta com a descentralização.
* **Heterogeneidade**: diferentes dispositivos e arquiteturas coexistem.
* **Orquestração de workloads**: decidir onde executar cada processamento (edge vs cloud) não é trivial.

Soluções modernas utilizam tecnologias como containers e orquestração (por exemplo, Kubernetes) adaptadas para ambientes distribuídos.

## 8. Edge computing como complemento à cloud

É importante compreender que edge computing não substitui a computação em nuvem. Em vez disso, os dois modelos se complementam:

* A **edge** é responsável por processamento local, decisões rápidas e filtragem de dados.
* A **cloud** é responsável por processamento intensivo, análise histórica e treinamento de modelos de machine learning.

Essa integração forma o que muitas vezes é chamado de **arquitetura híbrida distribuída**.


## Referências

* IBM. *What is Edge Computing?* Disponível em: [https://www.ibm.com/cloud/what-is-edge-computing](https://www.ibm.com/cloud/what-is-edge-computing)
* Red Hat. *Introdução à Edge Computing*. Disponível em: [https://www.redhat.com](https://www.redhat.com)
* Satyanarayanan, M. (2017). *The Emergence of Edge Computing*. Computer, IEEE
* Shi, W. et al. (2016). *Edge Computing: Vision and Challenges*. IEEE Internet of Things Journal
* McKinsey & Company. *The Internet of Things: Mapping the Value Beyond the Hype*


# Atividade prática: Simulação de arquitetura edge com IoT


## **Atividade Prática – Comparação entre Edge e Sem Edge Computing**

### **Objetivo**

Implementar e analisar o envio de dados de um dispositivo IoT em dois cenários:

* **Sem Edge Computing**: envio de dados brutos diretamente ao servidor
* **Com Edge Computing**: envio de dados previamente processados (consolidados)

O objetivo é comparar **volume de dados transmitidos** e **latência** entre os dois modelos.


### **Descrição da Atividade**

Os dados gerados por um dispositivo simulado deverão ser enviados para um broker MQTT na nuvem, utilizando o serviço AWS IoT Core ou uma instância EC2.

O processamento e armazenamento seguirão o fluxo abaixo:

* Um serviço equivalente ao Node-RED será responsável por consumir os dados do MQTT
* Os dados serão armazenados em um banco de séries temporais como o InfluxDB
* Um dashboard será construído no Grafana para visualização dos resultados


### **Resultados Esperados**

O dashboard deverá apresentar, em formato de **cards comparativos**:

* Volume de dados trafegados (Edge vs Sem Edge)
* Latência de envio/processamento
* (Opcional) Taxa de mensagens por segundo


### **Etapas do Desenvolvimento**

1. **Simulação do Dispositivo IoT**

   * Utilizar Wokwi ou Google Colab
   * Gerar dados em dois modos:

     * Dados brutos (sem processamento)
     * Dados consolidados (com Edge Computing)

2. **Comunicação MQTT**

   * Configurar envio para o AWS IoT Core ou broker MQTT em EC2

3. **Processamento dos Dados**

   * Configurar o Node-RED em uma instância EC2
   * Consumir os tópicos MQTT e preparar os dados para armazenamento

4. **Armazenamento**

   * Persistir os dados no InfluxDB (EC2 ou serviço gerenciado)

5. **Visualização**

   * Criar dashboards no Grafana
   * Exibir métricas comparativas entre os dois cenários


### **Entrega Esperada**

* Arquitetura implementada
* Dashboard funcional com comparação
* Breve análise dos resultados obtidos

