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

Demonstrar, de forma prática, como o processamento no próprio dispositivo (edge puro) reduz:

* latência percebida
* volume de dados transmitidos
* dependência da nuvem


## Ideia central da prática

Comparar dois comportamentos do mesmo dispositivo:

1. **Modo tradicional (sem edge)**
   O dispositivo envia todos os dados brutos

2. **Modo edge (no dispositivo)**
   O dispositivo processa localmente e envia apenas eventos relevantes

## Arquitetura (única, mudando apenas o comportamento do ESP32)

```text
ESP32 (Wokwi) → MQTT → Cloud (AWS ou broker + banco)
```

A diferença está **dentro do ESP32**, não na arquitetura.


## Tecnologias

* Wokwi (simulação do ESP32)
* MQTT (broker local ou na Amazon Web Services)
* Backend simples ou armazenamento (opcional)
* Google Colab (opcional para análise)


## Parte 1 — Modo sem edge (baseline)

### Comportamento do ESP32

* Gera temperatura aleatória (ex: 20°C a 100°C)
* Envia dados a cada 1 segundo
* Não toma nenhuma decisão

### Exemplo de mensagem

```json
{
  "temp": 72,
  "timestamp": 1710000000
}
```

### Resultado esperado

* Alto volume de mensagens
* Todos os dados chegam na nuvem


## Parte 2 — Edge no dispositivo (versão principal)

Agora o ESP32 passa a **pensar antes de enviar**.

### Regra simples (obrigatória)

Enviar dados **apenas se temperatura > 50°C**


### Possíveis variações (cada grupo pode escolher uma)

#### 1. Filtro por evento

* Só envia quando condição é atendida

#### 2. Redução de frequência

* Envia 1 a cada 10 leituras

#### 3. Agregação

* Calcula média de 10 leituras e envia

#### 4. Detecção simples

* Envia apenas quando houver mudança brusca (ex: +10°C)


## Parte 3 — Medição de latência

### Estratégia simples (funciona bem em aula)

1. Inserir timestamp no ESP32:

```json
{
  "temp": 72,
  "ts_device": 1710000000
}
```

2. No receptor (backend ou script):

* Capturar tempo de chegada (`ts_cloud`)
* Calcular:

```text
latência = ts_cloud - ts_device
```

## Parte 4 — Medição de volume de dados

Cada grupo deve coletar:

* Total de mensagens enviadas (sem edge)
* Total de mensagens enviadas (com edge)

Calcular:

```text
redução (%) = (1 - (mensagens_edge / mensagens_total)) * 100
```


## Parte 5 — Experimento de rede

Simular:

* atraso na rede
* perda de conexão

Observar:

* Sem edge: dados se acumulam ou perdem valor
* Com edge: apenas eventos importantes são enviados


## Entregáveis

Cada grupo deve apresentar:

1. Código do ESP32 (Wokwi)
2. Lógica de edge implementada
3. Métricas:

   * Latência média
   * Quantidade de mensagens
4. Comparação entre:

   * Sem edge
   * Com edge
5. Conclusão:

   * Quando vale a pena usar edge no dispositivo?


## Resultado esperado

Ao final, deve perceber que:

* O dispositivo deixa de ser apenas sensor e vira **agente inteligente**
* Nem todo dado precisa ir para a nuvem
* Edge reduz drasticamente o volume de dados
* Há um trade-off:

  * Mais eficiência
  * Mais complexidade no dispositivo

## Insight final da atividade

> Edge computing no dispositivo não é só otimização — é mudança de paradigma: o sistema passa a decidir localmente o que é relevante.
