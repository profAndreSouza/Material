# Guia de Estudos — Prova Teórico-Prática 1 (P1)
## Unidade Curricular: Integração e Entrega Contínua — DevOps

---

## 1. Informações Gerais da Avaliação

- **Data da Avaliação:** Semana 08
- **Peso na Avaliação Docente:** 50% (correspondente a 27,5% da Nota Final da UC — P1 + P2 = 55%)
- **Conteúdo Cobrado:** Semanas 01 a 07 (Aulas 01 a 05, PII e Aula 06 / Quality Gates)
- **Formato da Prova:** Prova escrita individual composta por **12 questões** estritamente teóricas e conceituais sobre cultura, práticas e esteiras de DevOps.
- **Tipologia das Questões:**
  - Questões de **Múltipla Escolha** (com foco em cenários de ciclo de vida de software, governança de branches e estratégias de entrega);
  - Questões de **Correlação de Colunas** (associação de pilares CALMS, tipos de testes da pirâmide e componentes de esteira);
  - Questões **Discursivas Conceituais** (diferenciação entre Continuous Delivery e Continuous Deployment, justificativa do princípio Shift-Left e análise de estratégias de branching).
- **Atenção:** **A prova não exige programação de scripts em Python, escrita de código Pytest nem sintaxe de arquivos YAML.** O foco total está na compreensão dos fundamentos do DevOps, nas estratégias de versionamento (GitFlow vs Trunk-Based), na pirâmide de testes e na governança de pipelines e Quality Gates.

---

## 2. Mapa Conceitual dos Conteúdos (Semanas 01 a 07)

### Semana 01 — Fundamentos de DevOps, Cultura CALMS e Fluxo de Valor
- **Origem e o "Muro da Confusão" (*Wall of Confusion*):**
  - Conflito histórico entre Desenvolvimento (*Dev* — pressionado para entregar funcionalidades e mudanças com rapidez) e Operações (*Ops* — avaliado pela estabilidade, disponibilidade e aversão a mudanças no ambiente de produção).
  - DevOps surge como um movimento cultural e profissional para alinhar objetivos, promover responsabilidade compartilhada pelo ciclo de vida completo do software e unificar entregas com estabilidade.
- **O Framework CALMS (Pilares Fundamentais de DevOps):**
  - **C (Culture):** Segurança psicológica, colaboração aberta, derrubada de silos organizacionais e abordagem de falhas com *post-mortem* sem culpados (*blameless post-mortem*).
  - **A (Automation):** Automação em toda a esteira (builds, testes de regressão, provisionamento de infraestrutura e deploys) para erradicar processos manuais lentos e propensos a falhas humanas.
  - **L (Lean):** Princípios da manufatura enxuta aplicados ao software: entrega em pequenos lotes (*small batch sizes*), redução de estoque em processo (*Work in Progress - WIP*) e eliminação de desperdícios no fluxo de valor.
  - **M (Measurement):** Mensuração baseada em dados e métricas de desempenho (Ex: Métricas DORA — *Lead Time for Changes*, *Deployment Frequency*, *Change Failure Rate* e *Time to Restore Service*).
  - **S (Sharing):** Disseminação do conhecimento, transparência de processos, compartilhamento de sucessos e aprendizado coletivo a partir de incidentes.
- **As Três Maneiras (*The Three Ways* do DevOps — Gene Kim / Projeto Fênix):**
  1. *Primeira Maneira (Fluxo Contínuo / Flow):* Otimizar o fluxo de trabalho da esquerda para a direita (do Desenvolvimento para a Produção), tornando os lotes menores e visíveis.
  2. *Segunda Maneira (Ciclos Rápidos de Feedback):* Criar ciclos constantes de retorno da direita para a esquerda (da Produção/Testes de volta ao Desenvolvimento), encurtando o tempo de resposta a problemas e impedindo que defeitos cheguem ao usuário final.
  3. *Terceira Maneira (Cultura de Experimentação e Aprendizado Contínuo):* Incentivar a experimentação, a tomada de riscos calculados e a melhoria diária através da prática e da repetição.

### Semanas 02 e 03 — Controle de Versão Avançado e Estratégias de Ramificação
- **Princípio dos Commits Atômicos:**
  - Um commit atômico contém uma alteração lógica única, indivisível, coerente e com testes que passam.
  - Padronização de mensagens de commit (*Conventional Commits*): prefixos semânticos claros (`feat` para novas funcionalidades, `fix` para correções de bugs, `refactor` para melhorias de estrutura sem alterar comportamento, `chore` para tarefas operacionais).
- **A Estratégia GitFlow (Vincent Driessen):**
  - *Branches de Longa Duração (Permanentes):*
    - `main` (ou `master`): reflete exclusivamente o código em produção, estável, taggeado com releases de versão oficial.
    - `develop`: branch de integração contínua das funcionalidades em desenvolvimento.
  - *Branches Temporárias de Suporte:*
    - `feature/*`: originam-se de `develop` para desenvolvimento de uma nova funcionalidade específica e retornam via merge para `develop`.
    - `release/*`: originam-se de `develop` quando as funcionalidades de uma versão estão prontas; serve para congelamento (*code freeze*), correções de última hora e documentação; seu encerramento faz merge tanto na `main` quanto na `develop`.
    - `hotfix/*`: criadas diretamente a partir da `main` para corrigir falhas críticas emergenciais em ambiente de produção; ao serem concluídas, são mescladas na `main` (com nova tag de patch) e propagadas de volta para `develop`.
- **Comparativo: GitFlow vs Trunk-Based Development:**
  - *GitFlow:* Excelente para ciclos formais de release, softwares empacotados, com múltiplas versões mantidas concorrentemente e processos que exigem rígido controle antes de produção. Risco: merges complexos com branches de vida longa.
  - *Trunk-Based Development:* Todos os desenvolvedores comitam diretamente na branch principal (`main`/`trunk`) com grande frequência (ao menos uma vez por dia), utilizando *Feature Flags* para ocultar funcionalidades inacabadas. É a base da Entrega Contínua de altíssima velocidade.
- **Code Review e Pull Requests (PR):**
  - Prática de inspeção coletiva de código por pares antes da mesclagem, atuando como primeiro filtro de qualidade, compartilhamento de conhecimento e conformidade de padrões arquiteturais.

### Semana 04 — Conceituação de CI/CD e Arquitetura de Pipelines
- **Integração Contínua (CI - Continuous Integration):**
  - Prática de desenvolvimento onde os membros de uma equipe integram seu código com frequência em um repositório compartilhado.
  - Cada integração dispara um processo automatizado de compilação (*build*) e execução de baterias de testes automatizados.
  - *Objetivo Central:* Detectar erros de integração e regressões o mais rápido possível (*Fail Fast*).
- **A Fronteira entre Continuous Delivery e Continuous Deployment:**
  - *Continuous Delivery (Entrega Contínua):* O código é automaticamente testado, empacotado e preparado para implantação. A qualquer momento o software está em estado "pronto para produção", mas o disparo do deploy final depende de uma **decisão humana ou aprovação manual de negócio**.
  - *Continuous Deployment (Implantação Contínua):* Qualquer alteração que passe com sucesso em todos os estágios automatizados da esteira de validação é **implantada diretamente em produção de forma 100% automática**, sem qualquer intervenção ou aprovação manual.
- **Anatomia de Pipelines de Automação (GitHub Actions):**
  - *Workflow:* Processo automatizado geral orquestrado por arquivos de manifesto.
  - *Events / Triggers:* Eventos que acionam a esteira (ex: evento de `push`, criação de `pull_request`, agendamentos cron temporizados).
  - *Jobs:* Conjuntos de etapas que executam no mesmo runner. Por padrão, múltiplos jobs executam em paralelo, a não ser que haja uma dependência explícita configurada.
  - *Steps:* Passos sequenciais de execução dentro de um job (execução de comandos ou chamadas a ações modulares).
  - *Runners:* Máquinas físicas, virtuais ou contêineres que executam as instruções dos jobs.
  - *Secrets:* Cofre seguro de variáveis criptografadas para impedir a exposição de chaves privadas e credenciais de nuvem nos repositórios de código.

### Semana 05 — Estratégias de Testes e o Princípio Shift-Left
- **O Princípio "Shift-Left Testing":**
  - Movimento de deslocar os testes e as validações de qualidade para as fases mais iniciais possíveis do ciclo de desenvolvimento ("para a esquerda" na linha do tempo).
  - *Justificativa Econômica:* O custo de corrigir um bug detectado no ambiente local do desenvolvedor durante um teste unitário é dezenas de vezes menor do que corrigir o mesmo bug após ele atingir o ambiente de produção.
- **A Pirâmide de Testes (Mike Cohn):**
  - **Base — Testes Unitários:**
    - *Características:* Maior quantidade na esteira, execução extremamente rápida (milissegundos), baixo custo de implementação e manutenção.
    - *Escopo:* Testam funções, métodos e regras de negócio isoladas sem dependências externas reais.
  - **Camada Intermediária — Testes de Integração:**
    - *Características:* Quantidade moderada, velocidade intermediária.
    - *Escopo:* Testam a comunicação entre múltiplos componentes integrados (ex: uma rota de API conversando com um banco de dados de teste ou com um serviço externo).
  - **Topo — Testes de Ponta a Ponta (E2E / End-to-End) e Interface (UI):**
    - *Características:* Menor quantidade, execução lenta, custo financeiro elevado, alta fragilidade (*flaky tests*).
    - *Escopo:* Simulam a jornada completa do usuário final através de todo o sistema montado.
- **Conceito de Mocks e Stubs:**
  - Componentes simulados que substituem dependências externas pesadas ou instáveis (bancos de dados de produção, gateways de pagamento, APIs de terceiros) para manter os testes unitários rápidos, determinísticos e isolados.

### Semanas 06 e 07 — Quality Gates e Políticas de Proteção de Branches
- **Quality Gates (Portões de Qualidade):**
  - Conjunto de critérios objetivos e inegociáveis que uma versão de código deve satisfazer na esteira de CI antes de ser autorizada a avançar para os estágios seguintes.
  - Exemplos práticos:
    - 100% dos testes automatizados devem passar com sucesso;
    - A cobertura mínima de código (*Code Coverage*) de testes unitários deve atingir um patamar mínimo (ex: $\ge 80\%$);
    - Ausência total de vulnerabilidades de segurança de nível crítico identificadas em varreduras de código (*SAST*).
- **Políticas de Proteção de Branches (*Branch Protection Rules*):**
  - Regras mandatórias configuradas no repositório (especialmente na branch `main`):
    1. Bloqueio de *push* direto e de *force push* na branch principal;
    2. Exigência obrigatória de abertura de Pull Request;
    3. Exigência de aprovação formal por um ou mais revisores humanos (*Code Review*);
    4. Exigência de que todas as esteiras de verificação automática (*Status Checks* do CI) terminem com sucesso (verde) antes de liberar a opção de mesclagem (*Merge*).

---

## 3. Glossário de Termos Essenciais

| Termo | Definição Teórica Concisa |
| :--- | :--- |
| **CALMS** | Modelo conceitual dos 5 pilares do DevOps: Cultura, Automação, Lean, Mensuração e Compartilhamento. |
| **Shift-Left** | Filosofia de antecipar testes e validações de segurança para o início do desenvolvimento para baratear correções. |
| **CI** | Prática de integrar alterações de código frequentemente, validando cada merge com build e testes automatizados. |
| **Continuous Delivery**| Capacidade de manter o código pronto para produção a qualquer instante, exigindo aprovação manual para o deploy final. |
| **Continuous Deployment**| Fluxo onde o código validado pela esteira é implantado em produção de forma 100% automática, sem intervenção humana. |
| **GitFlow** | Modelo de branching com branches permanentes (`main`, `develop`) e temporárias (`feature`, `release`, `hotfix`). |
| **Trunk-Based** | Prática onde todos comitam com alta frequência na branch principal (`main`), viabilizada por Feature Flags. |
| **Pirâmide de Testes** | Modelo que prega uma base massiva de testes unitários rápidos e pouquíssimos testes E2E lentos no topo. |
| **Mock** | Objeto fictício que simula o comportamento de uma dependência externa real para isolar o teste unitário. |
| **Quality Gate** | Condição formal que bloqueia a progressão de um software na esteira caso parâmetros de qualidade não sejam atingidos. |
| **Branch Protection** | Travas de governança no Git que impedem alterações não autorizadas ou sem aprovação na branch principal. |
| **Code Coverage** | Métrica percentual que quantifica quantas linhas ou ramificações do código foram executadas pela suíte de testes. |

---

## 4. Simulado Completo da Prova P1 (12 Questões no Padrão Oficial)

### Questão 01 (Múltipla Escolha — Pilares do Modelo CALMS)
Uma fábrica enfrentava constantes problemas de lentidão na entrega de software. A nova gerência de TI proibiu grandes entregas trimestrais monolíticas, exigindo que os desenvolvedores quebrassem suas demandas em entregas semanais muito menores, eliminando estoques de tarefas acumuladas no meio do caminho.  
Qual pilar do framework CALMS orienta diretamente essa decisão de reduzir o tamanho dos lotes de trabalho (*small batch sizes*)?  
A) C — Culture.  
B) A — Automation.  
C) L — Lean.  
D) S — Sharing.  

---

### Questão 02 (Múltipla Escolha — As Três Maneiras do DevOps)
No contexto do livro *O Projeto Fênix* e dos princípios de DevOps, a **Segunda Maneira** foca na criação de amplos e rápidos ciclos de feedback da direita para a esquerda (das fases posteriores para as fases anteriores do fluxo).  
Qual dos seguintes procedimentos técnicos é uma aplicação pura da Segunda Maneira?  
A) Enviar o código para produção apenas uma vez a cada seis meses durante a madrugada.  
B) Configurar a esteira de CI para notificar imediatamente o desenvolvedor em caso de quebra de qualquer teste unitário segundos após ele efetuar o push.  
C) Terceirizar a escrita de documentação para uma equipe externa que não participa do projeto.  
D) Eliminar os testes de integração para acelerar o fluxo em direção à produção.  

---

### Questão 03 (Múltipla Escolha — Diferença Fundamental entre CD e CD)
Frequentemente, os conceitos de **Continuous Delivery (Entrega Contínua)** e **Continuous Deployment (Implantação Contínua)** são confundidos no vocabulário corporativo.  
Assinale a alternativa que descreve a distinção técnica exata entre eles:  
A) Continuous Delivery aplica-se apenas a bancos de dados, enquanto Continuous Deployment aplica-se a aplicações web.  
B) No Continuous Delivery, o software é automaticamente validado e empacotado, estando pronto para produção, mas o deploy final para os clientes depende de uma aprovação humana consciente; no Continuous Deployment, qualquer alteração aprovada nos testes vai direto para produção sem qualquer intervenção manual.  
C) Continuous Delivery exige o uso obrigatório do Docker, enquanto Continuous Deployment exige Máquinas Virtuais no AWS EC2.  
D) Continuous Delivery realiza testes manuais em planilhas, enquanto Continuous Deployment dispensa totalmente os testes de software.  

---

### Questão 04 (Múltipla Escolha — Estratégia GitFlow: O Papel da Branch Hotfix)
Em uma fábrica operando sob a estratégia GitFlow, os clientes relataram um bug crítico em ambiente de produção na versão `v2.1.0` que impede a emissão de ordens de fabricação. A branch `develop` já contém dezenas de novas funcionalidades inacabadas previstas apenas para a versão `v3.0.0`.  
De acordo com o fluxo oficial do GitFlow, como a equipe deve corrigir essa falha de forma limpa e segura?  
A) Efetuar commits diretamente na branch `main` e forçar o push com a flag `--force`.  
B) Criar uma branch de `hotfix` bifurcando diretamente a partir da `main`, corrigir o problema e, ao finalizar, mesclar essa correção de volta tanto na `main` quanto na `develop`.  
C) Mesclar a branch `develop` incompleta na `main` imediatamente para corrigir o bug de produção.  
D) Apagar o repositório central e restaurar um backup manual da semana anterior.  

---

### Questão 05 (Múltipla Escolha — A Pirâmide de Testes de Software)
A respeito da Pirâmide de Testes concebida por Mike Cohn para orientar esteiras de entrega contínua eficazes, assinale a opção correta:  
A) A maior parte da suíte de testes deve ser composta por testes ponta a ponta (E2E) com navegadores reais, pois eles garantem 100% de estabilidade e rodam em poucos milissegundos.  
B) Os testes unitários devem constituir a base ampla da pirâmide, pois são rápidos de executar, possuem baixo custo de manutenção e apontam o ponto exato da falha no código.  
C) Os testes de integração devem substituir completamente os testes unitários em arquiteturas orientadas a microsserviços.  
D) A pirâmide recomenda que softwares modernos não tenham mais do que 5% de cobertura de código por testes unitários.  

---

### Questão 06 (Múltipla Escolha — O Princípio Shift-Left)
A prática de *Shift-Left* na engenharia de software prescreve mover as atividades de testes, validações de qualidade e varreduras de segurança para a esquerda na linha do tempo do projeto.  
Qual é o objetivo primordial dessa prática?  
A) Postergar os testes para o momento em que o software já estiver implantado nos servidores dos clientes.  
B) Detectar defeitos e vulnerabilidades o mais cedo possível no ciclo de vida do software, onde o custo e a complexidade de correção são ordens de magnitude menores.  
C) Eliminar a necessidade de revisão de código por pares (*Code Review*).  
D) Permitir que apenas analistas de segurança externos executem verificações no código-fonte compilado.  

---

### Questão 07 (Múltipla Escolha — Quality Gates na Esteira de CI/CD)
Uma equipe de desenvolvimento configurou um *Quality Gate* automatizado no pipeline de CI de sua aplicação de chão de fábrica.  
Qual das seguintes situações exemplifica uma atuação clássica de um Quality Gate bloqueando a esteira?  
A) O pipeline cancela o deploy para homologação porque a cobertura de testes da alteração foi de 65%, ficando abaixo do limite mínimo contratual de 80%.  
B) O desenvolvedor decide manualmente se quer ou não enviar seu código para a branch de produção na sexta-feira.  
C) O servidor de banco de dados atinge 100% de ocupação física de disco por falta de espaço contratado na nuvem.  
D) O cliente solicita uma nova funcionalidade durante a reunião de fechamento do sprint.  

---

### Questão 08 (Múltipla Escolha — Políticas de Proteção de Branches)
Em um repositório corporativo com boas práticas de governança, foram ativadas as regras de proteção de branch (*Branch Protection Rules*) na branch `main`.  
Qual das seguintes restrições é assegurada por essa configuração?  
A) Impede que qualquer pessoa acesse o repositório via interface web do GitHub.  
B) Obriga que todas as alterações passem por um Pull Request, proíbe o envio direto de commits (*push*) na branch principal e condiciona o merge ao sucesso de todas as checagens automatizadas do CI.  
C) Exige que o código-fonte seja escrito exclusivamente na linguagem Python sem dependências externas.  
D) Bloqueia a execução de contêineres Docker nos servidores de produção da empresa.  

---

### Questão 09 (Correlação de Colunas — Pilares do Modelo CALMS)
Relacione os pilares do framework CALMS na **Coluna A** com as suas respectivas manifestações práticas na **Coluna B**:

| Coluna A (Pilar CALMS) | Coluna B (Aplicação Prática) |
| :--- | :--- |
| ( 1 ) Culture | ( &nbsp; ) Implementação de esteiras de build, testes e deploy automáticos para erradicar tarefas repetitivas manuais. |
| ( 2 ) Automation | ( &nbsp; ) Redução do lote de entrega (*batch size*) e eliminação de gargalos intermediários no fluxo de valor. |
| ( 3 ) Lean | ( &nbsp; ) Criação de ambiente de segurança psicológica e condução de reuniões de análise de falhas sem julgamento de culpa (*blameless*). |
| ( 4 ) Measurement | ( &nbsp; ) Coleta de métricas contínuas de entrega (como tempo de espera para mudanças e frequência de deploy). |

Assinale a alternativa que apresenta a sequência correta de preenchimento (de cima para baixo):  
A) 2 - 3 - 1 - 4  
B) 1 - 2 - 4 - 3  
C) 2 - 1 - 3 - 4  
D) 3 - 2 - 1 - 4  

---

### Questão 10 (Correlação de Colunas — Níveis da Pirâmide de Testes)
Relacione os níveis da Pirâmide de Testes listados na **Coluna A** com as suas definições conceituais na **Coluna B**:

| Coluna A (Nível de Teste) | Coluna B (Características Teóricas) |
| :--- | :--- |
| ( 1 ) Testes Unitários | ( &nbsp; ) Testes que avaliam a jornada completa do usuário final simulando a interface real; lentos e caros. |
| ( 2 ) Testes de Integração | ( &nbsp; ) Testes da base da pirâmide que validam funções e métodos isolados em milissegundos com mocks. |
| ( 3 ) Testes de Ponta a Ponta (E2E) | ( &nbsp; ) Testes que validam a interoperabilidade correta entre múltiplos módulos, rotas de API e banco de dados. |

Assinale a alternativa que apresenta a sequência correta:  
A) 3 - 1 - 2  
B) 2 - 1 - 3  
C) 3 - 2 - 1  
D) 1 - 3 - 2  

---

### Questão 11 (Discursiva Teórica — Comparativo de Branching: GitFlow vs Trunk-Based Development)
Equipes de engenharia de software debatem continuamente sobre a escolha da estratégia de ramificação no Git mais adequada para cada perfil de projeto.  
**Com base nos conceitos teóricos de controle de versão:**  
a) Explique as características fundamentais da estratégia **GitFlow**, destacando por que a existência de branches de vida longa (como `develop` e `release/*`) pode gerar o fenômeno conhecido como "inferno de mesclagem" (*Merge Hell*).  
b) Defina o que é a estratégia **Trunk-Based Development** e explique qual é o papel do mecanismo de **Feature Flags (Feature Toggles)** para viabilizar que códigos de funcionalidades ainda não concluídas sejam integrados diariamente na branch principal sem impactar os usuários finais.  

---

### Questão 12 (Discursiva Teórica — Continuous Delivery vs Continuous Deployment e o Papel dos Mocks)
No contexto das esteiras modernas de CI/CD, tanto a previsibilidade quanto a velocidade de validação são requisitos inegociáveis.  
**Responda aos itens a seguir:**  
a) Estabeleça a diferença técnica precisa entre **Continuous Delivery** e **Continuous Deployment**, apontando claramente onde reside a decisão de envio para produção em cada um desses modelos.  
b) No escopo da Pirâmide de Testes, explique conceitualmente o que são **Mocks / Stubs** e justifique por que o seu uso é mandatório para garantir que a base de testes unitários execute de forma rápida e estritamente determinística.  

---

## 5. Gabarito Comentado e Padrão de Resposta

- **Questão 01 — Alternativa C.**  
  *Comentário:* O pilar Lean do modelo CALMS foca diretamente na eliminação de desperdícios, redução do trabalho em progresso (WIP) e divisão de entregas em lotes pequenos (*small batches*).
- **Questão 02 — Alternativa B.**  
  *Comentário:* A Segunda Maneira do DevOps trata de feedback rápido e contínuo. Notificar o desenvolvedor segundos após o commit sobre uma quebra de teste impede que o erro se propague no fluxo de valor.
- **Questão 03 — Alternativa B.**  
  *Comentário:* A fronteira exata é a aprovação humana: Continuous Delivery deixa o software pronto para produção, mas o deploy exige um clique/aprovação manual de negócio; Continuous Deployment elimina essa etapa humana, fazendo deploy imediato e 100% automatizado.
- **Questão 04 — Alternativa B.**  
  *Comentário:* No GitFlow, correções urgentes de produção utilizam branches `hotfix/*` que nascem da `main` e retornam tanto para a `main` quanto para a `develop`, garantindo que a correção não se perca no futuro.
- **Questão 05 — Alternativa B.**  
  *Comentário:* A base da pirâmide de testes deve ser composta predominantemente por testes unitários porque eles executam em frações de segundo, são fáceis de manter e isolam a raiz exata do problema.
- **Questão 06 — Alternativa B.**  
  *Comentário:* O conceito de *Shift-Left* visa adiantar testes e verificações para as etapas iniciais do desenvolvimento, onde a correção de bugs é barata e simples, evitando que falhas graves cheguem a ambientes produtivos.
- **Questão 07 — Alternativa A.**  
  *Comentário:* Um Quality Gate atua como uma barreira objetiva e automatizada que reprova a progressão do software quando métricas acordadas (como cobertura de testes abaixo de 80%) são violadas.
- **Questão 08 — Alternativa B.**  
  *Comentário:* Regras de proteção de branch na `main` asseguram governança obrigando o uso de Pull Requests, revisões por pares e aprovação prévia em todos os status checks automatizados de CI antes de qualquer merge.
- **Questão 09 — Alternativa A (2 - 3 - 1 - 4).**  
  *Comentário:* Automation (2) automatiza tarefas repetitivas; Lean (3) reduz tamanho de lotes; Culture (1) promove segurança psicológica e postura *blameless*; Measurement (4) monitora métricas de entrega contínua.
- **Questão 10 — Alternativa A (3 - 1 - 2).**  
  *Comentário:* E2E (3) simula a jornada completa do usuário final; Unitários (1) testam funções e métodos isolados com mocks; Integração (2) valida a interface entre serviços e bancos.
- **Questão 11 (Padrão de Resposta Esperado):**  
  *a)* O **GitFlow** utiliza branches permanentes (`main` e `develop`) e ramificações temporárias (`feature`, `release`, `hotfix`). Quando branches de feature duram semanas ou meses sem integração diária, o código diverge significativamente da base comum. No momento do merge, surgem dezenas de conflitos de código incompatíveis entre si, gerando o "inferno de mesclagem" (*Merge Hell*), que consome horas de depuração manual.  
  *b)* O **Trunk-Based Development** prescreve que todos os engenheiros integrem suas alterações diretamente na branch principal (`main`) pelo menos uma vez ao dia em commits pequenos. As **Feature Flags** viabilizam essa prática criando chaves condicionais lógicas no código: a funcionalidade nova é mesclada em produção com a flag desativada (`False`), ficando invisível para os usuários finais até que esteja madura e testada, momento em que a flag é ativada sem necessidade de novo deploy de código.
- **Questão 12 (Padrão de Resposta Esperado):**  
  *a)* No **Continuous Delivery**, o código aprovado nos testes é empacotado e preparado para deploy, ficando pronto para entrar em produção a qualquer instante, porém o disparo do deploy depende de um **gatilho ou decisão humana consciente**. No **Continuous Deployment**, não existe portão manual: cada commit aprovado em toda a esteira automatizada é **implantado diretamente no ambiente de produção de forma 100% automática**.  
  *b)* **Mocks e Stubs** são simuladores controlados de dependências externas reais (como bancos de dados, conexões de rede ou APIs terceiras). Seu uso é mandatório em testes unitários para garantir que o teste execute em milissegundos e seja puramente **determinístico**: o teste deve falhar apenas se houver um erro lógico no algoritmo sob teste, e nunca porque uma rede caiu ou um banco externo demorou para responder.

---

## 6. Dicas Estratégicas para o Dia da Prova

1. **A Linha Divisória de CD vs CD:** Guarde de forma indelével: aprovação manual = *Continuous Delivery*; 100% automatizado direto em produção = *Continuous Deployment*.
2. **Pirâmide de Testes:** Base larga = Unitários (rápidos, baratos, específicos); Meio = Integração (módulos conversando); Topo estreito = E2E/UI (lentos, caros, frágeis).
3. **Hotfix no GitFlow:** Lembre-se que um hotfix de produção nasce da `main` e, obrigatoriamente, faz merge tanto na `main` quanto na `develop`.
4. **Respostas Discursivas:** Demonstre domínio do vocabulário da cultura DevOps (CALMS, Shift-Left, Fail Fast, Quality Gates, Lead Time).
