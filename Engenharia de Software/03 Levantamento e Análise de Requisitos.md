# Levantamento e Análise de Requisitos

O levantamento e a análise de requisitos são etapas fundamentais no processo de desenvolvimento de software. Essas atividades têm como objetivo identificar, compreender e documentar as necessidades dos usuários e demais partes interessadas (stakeholders), servindo de base para o projeto do sistema.

**Referência às aulas:** Aulas 3, 4, 5 e 7.

---

## 1. Técnicas de Levantamento de Requisitos

As técnicas de levantamento são métodos utilizados para coletar informações sobre o sistema a ser desenvolvido. Elas visam entender o contexto do negócio, os fluxos de trabalho, as dores dos usuários e as expectativas em relação ao software.

### 1.1 Entrevistas

As entrevistas são uma técnica qualitativa e direta de coleta de dados, em que o analista de requisitos dialoga com stakeholders para extrair informações relevantes. Elas podem ser estruturadas, semiestruturadas ou não estruturadas.

**Exemplo de aplicação prática:**

Durante a entrevista com os atendentes de um restaurante, foram feitas as seguintes perguntas:

* **Pergunta 1:** Quais são os principais desafios no atendimento ao cliente?

  **Resposta:** Há um grande fluxo de clientes nos horários de pico, o que gera longas filas no caixa.

* **Pergunta 2:** Como funciona atualmente o processo de pedidos?

  **Resposta:** O atendente anota o pedido manualmente ou o cliente escolhe no balcão. Em seguida, o pedido é inserido no sistema.

**Requisitos identificados:**

* O sistema deve permitir que o cliente realize o pedido sem a necessidade de um atendente.
* O sistema deve oferecer integração com formas de pagamento eletrônico.

### 1.2 Brainstorming

O brainstorming é uma técnica de geração de ideias que envolve vários participantes, incentivando a proposição livre de sugestões sem julgamentos imediatos. É útil para explorar funcionalidades inovadoras e compreender as expectativas dos usuários.

**Exemplo de ideias levantadas:**

* O sistema deve permitir personalização do pedido (ex: sem cebola, adicionar bacon).
* O pagamento pode ser realizado por Pix ou cartão.
* O sistema deve exibir o tempo estimado de preparo.
* O cliente deve poder escolher entre retirada e consumo no local.

**Requisitos derivados:**

* O sistema deve permitir personalização de ingredientes.
* O sistema deve apresentar opções de retirada ou consumo local.
* O sistema deve informar o tempo estimado de preparo antes da finalização do pedido.

---

## 2. Classificação de Requisitos

Após a coleta inicial, os requisitos devem ser classificados de forma a organizar e facilitar seu gerenciamento. A categorização mais comum é entre requisitos funcionais e não funcionais.

### 2.1 Requisitos Funcionais

Requisitos funcionais descrevem as funcionalidades específicas que o sistema deve executar. Eles representam as ações que o sistema deve ser capaz de realizar.

**Tabela de Requisitos Funcionais:**

| ID    | Descrição                                                                           |
| ----- | ----------------------------------------------------------------------------------- |
| RF-01 | O sistema deve permitir que os clientes visualizem o cardápio no totem.             |
| RF-02 | O sistema deve permitir que os clientes adicionem itens ao carrinho.                |
| RF-03 | O sistema deve permitir pagamentos via Pix e cartão de crédito/débito.              |
| RF-04 | O sistema deve exibir o tempo estimado de preparo antes da finalização do pedido.   |
| RF-05 | O sistema deve enviar automaticamente os pedidos para a cozinha.                    |
| RF-06 | O administrador deve ser capaz de cadastrar, editar e excluir produtos no cardápio. |

### 2.2 Requisitos Não Funcionais

Requisitos não funcionais estabelecem restrições e qualidades do sistema, como desempenho, segurança, disponibilidade, usabilidade e escalabilidade. Eles não descrevem funcionalidades diretas, mas sim como o sistema deve se comportar.

**Tabela de Requisitos Não Funcionais:**

| ID     | Descrição                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------- |
| RNF-01 | O sistema deve ter tempo de resposta inferior a 2 segundos para qualquer ação do usuário.      |
| RNF-02 | O sistema deve estar disponível ininterruptamente (24 horas por dia, 7 dias por semana).       |
| RNF-03 | Os dados de pagamento devem ser criptografados para garantir segurança e confidencialidade.    |
| RNF-04 | O sistema deve ser responsivo, adaptando-se a diferentes tamanhos e resoluções de tela.        |
| RNF-05 | O sistema deve ser capaz de processar até 100 pedidos simultaneamente sem perda de desempenho. |

---

## 3. Validação e Refinamento de Requisitos

A validação de requisitos visa garantir que os requisitos documentados sejam coerentes, completos, corretos e compreensíveis por todos os envolvidos. Já o refinamento busca detalhar melhor os requisitos, dividindo-os em partes menores e mais específicas quando necessário.

### Técnicas Comuns de Validação e Refinamento

* **Prototipagem:** Criação de versões iniciais da interface ou do sistema para validação com os usuários.
* **Revisões com stakeholders:** Reuniões formais para discutir os requisitos levantados e revisar a documentação.
* **Casos de uso:** Modelagem de interações entre usuários e o sistema para validar fluxos e cenários.
* **Modelagem de processos:** Diagramação de processos de negócio para compreender o contexto e identificar requisitos adicionais.

A validação deve ser feita de forma contínua ao longo do projeto, com especial atenção antes das fases de projeto e desenvolvimento, a fim de evitar retrabalho e falhas de interpretação.

---

## Referências Bibliográficas

* PRESSMAN, Roger S. *Engenharia de Software*. 8. ed. São Paulo: McGraw Hill, 2016.
* SOMMERVILLE, Ian. *Engenharia de Software*. 10. ed. São Paulo: Pearson, 2019.
* LARMAN, Craig. *Utilizando UML e Padrões: uma introdução à análise e ao projeto orientado a objetos e ao processo unificado*. 3. ed. Porto Alegre: Bookman, 2007.
* KENDALL, Kenneth E.; KENDALL, Julie E. *Análise e Projeto de Sistemas*. 9. ed. São Paulo: Pearson, 2016.
* IEEE. *Recommended Practice for Software Requirements Specifications (IEEE 830-1998)*.
