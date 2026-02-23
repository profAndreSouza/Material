# Engenharia de Software a partir da experiência do usuário

A Engenharia de Software surge como uma resposta a um problema central da computação moderna: sistemas digitais tornaram-se indispensáveis para a vida social, econômica e organizacional, mas sua construção é complexa, arriscada e envolve múltiplos interesses humanos e técnicos. Desenvolver software deixou de ser apenas programar, passou a significar compreender problemas reais, estruturar soluções confiáveis e garantir que essas soluções permaneçam úteis ao longo do tempo.

O foco desta aula é compreender que **todo sistema de software existe para atender uma necessidade humana ou organizacional**, e que a qualidade de um sistema só pode ser entendida plenamente quando analisamos a experiência de quem o utiliza.



## 1. Sistemas de software como mediadores da vida cotidiana

Hoje, praticamente todas as atividades sociais são mediadas por sistemas digitais: movimentações financeiras, comunicação, transporte, educação, saúde e consumo. Esses sistemas não são apenas programas isolados, eles são **sistemas de informação**, isto é, estruturas organizadas para coletar, processar, armazenar e distribuir dados que apoiam decisões e ações humanas.

Quando uma pessoa consulta o saldo bancário pelo celular, por exemplo, não está apenas usando um aplicativo. Está interagindo com:

* bases de dados financeiras;
* regras de negócio do banco;
* mecanismos de segurança;
* redes de comunicação;
* serviços externos integrados;
* políticas regulatórias;
* interfaces de interação humano-computador.

Isso significa que o software é apenas a camada visível de um sistema muito mais amplo.



## 2. A centralidade do usuário na Engenharia de Software

Um erro comum é imaginar que o sucesso de um sistema depende apenas de sua funcionalidade técnica. No entanto, sistemas tecnicamente corretos podem fracassar se forem difíceis de usar, pouco claros ou incompatíveis com a rotina das pessoas.

Por isso, a Engenharia de Software contemporânea considera três dimensões inseparáveis:

1. **Funcionalidade** — o sistema faz o que deveria fazer?
2. **Qualidade técnica** — é confiável, seguro e eficiente?
3. **Experiência do usuário** — é compreensível, acessível e adequado ao contexto real de uso?

O usuário não interage com requisitos formais ou diagramas técnicos. Ele interage com respostas do sistema, tempos de espera, mensagens exibidas, facilidade de navegação e previsibilidade do comportamento do software.

Assim, problemas percebidos pelo usuário (lentidão, incerteza de resultados, excesso de etapas ou falta de transparência) são indicadores diretos da qualidade do sistema.



## 3. Sistemas de informação e seus tipos

Os sistemas de informação podem ser classificados conforme sua finalidade organizacional. Essa classificação ajuda a compreender o papel do software na estrutura de uma instituição.

Entre os tipos mais comuns:

**Sistemas operacionais ou transacionais**
Executam atividades rotineiras e repetitivas (pagamentos, registros, transferências).
Prioridade: rapidez, precisão e confiabilidade.

**Sistemas gerenciais**
Organizam dados para acompanhamento e controle (relatórios, indicadores, monitoramento).
Prioridade: síntese e interpretação da informação.

**Sistemas de apoio à decisão**
Auxiliam análises complexas, projeções e planejamento estratégico.
Prioridade: modelagem, simulação e análise de cenários.

**Sistemas estratégicos ou integrados**
Integram múltiplos processos organizacionais e impactam diretamente a competitividade da organização.
Prioridade: integração e coordenação global.

Um único software pode participar de mais de um desses níveis simultaneamente. Por exemplo, um aplicativo bancário executa transações operacionais, fornece relatórios ao usuário e integra-se a sistemas estratégicos da instituição financeira.



## 4. Problemas percebidos pelo usuário como fonte de requisitos

Na Engenharia de Software, requisitos não são apenas aquilo que o sistema deve fazer, mas também **como deve se comportar** durante o uso real.

Problemas vivenciados pelos usuários revelam requisitos não funcionais importantes, como:

* desempenho (tempo de resposta);
* confiabilidade (certeza de execução);
* usabilidade (facilidade de uso);
* disponibilidade (tempo de funcionamento);
* segurança (proteção de dados);
* transparência (clareza de estados do sistema).

Muitas falhas de software não decorrem de ausência de funcionalidade, mas de inadequação dessas características de qualidade.



## 5. Relação entre necessidades do usuário e modelos de desenvolvimento

Uma vez identificadas as necessidades e dificuldades do usuário, a equipe de desenvolvimento precisa decidir **como organizar o processo de construção do sistema**.

Essa decisão depende principalmente de:

* estabilidade ou instabilidade dos requisitos;
* grau de incerteza tecnológica;
* nível de risco do projeto;
* necessidade de validação frequente com o usuário;
* urgência de entrega de valor.

Diferentes formas de organizar o trabalho (conhecidas como modelos de processo de software) representam diferentes estratégias para lidar com esses fatores.

Alguns modelos pressupõem requisitos bem definidos desde o início. Outros partem da ideia de que o sistema precisa evoluir continuamente com base na experiência real de uso.

Portanto, a experiência do usuário não é apenas um resultado do software, ela influencia diretamente **como o software deve ser desenvolvido**.



## 6. Engenharia de Software como disciplina estruturada

A consolidação da Engenharia de Software como área científica ocorreu justamente porque projetos reais demonstraram que desenvolvimento improvisado produz sistemas caros, instáveis e difíceis de manter.

A literatura clássica da área organiza esse conhecimento em métodos, modelos e técnicas sistemáticas. Entre as referências fundamentais que estruturam essa visão estão:

* Engenharia de Software — abordagem abrangente sobre processos, qualidade e gestão de software.
* Engenharia de Software — ênfase na integração entre requisitos, arquitetura e evolução de sistemas.
* Princípios de Análise e Projeto de Sistemas com UML — foco na modelagem e representação estruturada de sistemas.

Essas obras mostram que o desenvolvimento de software deve ser tratado como atividade de engenharia: sistemática, documentada, verificável e orientada a objetivos claros.



## 7. Síntese conceitual

Podemos compreender a Engenharia de Software como uma cadeia lógica:

necessidade humana → sistema de informação → solução tecnológica → processo de desenvolvimento → experiência do usuário

Cada elemento influencia o outro. Quando a experiência do usuário revela problemas, todo o processo precisa ser reavaliado, desde requisitos até a forma como o sistema foi desenvolvido.



# Atividade em Grupo - Análise de um Sistema do Ponto de Vista do Usuário



## Contexto do Usuário

Carlos é estudante universitário e trabalha meio período.
Para organizar sua rotina financeira, ele depende diariamente de um **aplicativo bancário no celular**.

Ele utiliza o aplicativo para:

* verificar saldo e extrato;
* pagar contas e boletos;
* realizar transferências;
* usar PIX;
* controlar os gastos do mês;
* receber notificações de movimentações.

Carlos acessa o aplicativo várias vezes por dia, principalmente em situações rápidas, como:

* pagar algo em uma fila;
* transferir dinheiro para alguém que está esperando;
* conferir se um pagamento foi realizado;
* resolver pendências financeiras urgentes.



## Experiência do Usuário (relato realista)

Apesar de utilizar o aplicativo com frequência, Carlos enfrenta alguns problemas:

* o aplicativo demora para abrir em horários de pico;
* às vezes ele não sabe se uma transferência foi concluída;
* o histórico de transações é difícil de filtrar;
* operações simples exigem muitos passos;
* algumas notificações chegam atrasadas;
* em certos momentos o sistema fica indisponível sem explicação clara;
* ele tem receio sobre segurança, mas não entende como o sistema protege seus dados.

Mesmo assim, Carlos depende totalmente do sistema, ele não possui alternativa prática.



## Situação

Vocês são engenheiros de software responsáveis por compreender melhor esse sistema para planejar melhorias futuras.

Antes de propor soluções técnicas, é necessário entender:

* como o sistema funciona do ponto de vista do usuário;
* o que o sistema precisa fazer;
* quais riscos existem;
* onde estão os principais problemas estruturais.



## Tarefa do Grupo

A partir do relato apresentado, realizem uma análise estruturada do sistema.

Respondam de forma **técnica, objetiva e baseada no funcionamento real do software**.



### Etapas da Análise

#### 1️ Objetivo do sistema

Identifiquem qual problema real o sistema resolve na vida do usuário.
Expliquem a finalidade principal do sistema e por que ele é necessário.



#### 2️ Tipos de usuários envolvidos

Identifiquem quem interage com o sistema direta ou indiretamente.

Considerem, por exemplo:

* usuários finais;
* operadores internos;
* administradores;
* outros perfis relevantes.



#### 3️ Entradas do sistema

Descrevam quais dados, comandos ou ações são fornecidos ao sistema pelos usuários ou por outros sistemas.



#### 4️ Processamentos principais

Expliquem o que o sistema realiza internamente para funcionar.

Considerem:

* regras de negócio;
* validações;
* cálculos;
* comunicação entre serviços;
* armazenamento e recuperação de dados.



#### 5️ Saídas do sistema

Identifiquem o que o sistema entrega como resultado do processamento.

Incluam:

* informações exibidas ao usuário;
* confirmações de operação;
* notificações;
* ações executadas automaticamente.



#### 6️ Componentes tecnológicos prováveis

Indiquem quais tipos de software, infraestrutura e recursos tecnológicos devem existir para que o sistema funcione adequadamente.



#### 7️ Principais riscos técnicos

Apontem os principais desafios ou fragilidades de engenharia do sistema.

Considerem aspectos como:

* desempenho;
* disponibilidade;
* segurança;
* integridade de dados;
* escalabilidade;
* usabilidade.



#### 8️ Problema mais crítico para o usuário

Entre todos os problemas relatados, escolham aquele que deve ser tratado como prioridade máxima.

Justifiquem tecnicamente a escolha considerando:

* impacto no uso;
* risco operacional;
* experiência do usuário.



## Produto Esperado

Organizem os resultados em um **quadro ou diagrama estruturado** contendo:

* objetivo do sistema;
* usuários;
* entradas;
* processamentos;
* saídas;
* componentes tecnológicos;
* riscos técnicos;
* prioridade de melhoria.

O formato pode ser visual, desde que a organização do sistema seja claramente compreensível.



## Observação Importante

A análise deve ser feita do ponto de vista da **Engenharia de Software**.

Vocês não estão apenas descrevendo problemas percebidos pelo usuário.
Vocês estão **modelando o funcionamento do sistema**, com o objetivo de compreender sua estrutura e orientar melhorias futuras.
