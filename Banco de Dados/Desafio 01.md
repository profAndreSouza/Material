# **Projeto de Banco de Dados: Sistema de Gestão Logística Integrada – TransGlobal S.A.**

**Contexto:**

A TransGlobal S.A. é uma empresa de logística que opera transporte de cargas em diferentes modais (terrestre e aéreo), atuando em todo o território nacional e em rotas internacionais.

Com o crescimento das operações, a empresa identificou inconsistências em seus controles e decidiu desenvolver um novo sistema de banco de dados que permita representar fielmente suas operações ao longo do tempo, garantindo rastreabilidade, integridade e suporte à tomada de decisão.



## **Requisitos Gerais do Sistema**

A base de dados deve ser capaz de representar os seguintes aspectos da operação:



## **1. Pessoas e Estrutura Organizacional**

A empresa mantém cadastro de todos os seus colaboradores, contendo informações pessoais e profissionais.

Entretanto, diferentes colaboradores possuem responsabilidades e atributos específicos dependendo da função exercida. Um mesmo colaborador pode, ao longo do tempo, assumir diferentes papéis dentro da organização.

Além disso, determinadas funções exigem registros adicionais obrigatórios e possuem regras próprias de atuação.



## **2. Ativos Operacionais**

A empresa possui uma frota diversificada utilizada no transporte de cargas.

Cada ativo possui características gerais, porém determinados tipos apresentam atributos técnicos específicos e restrições operacionais distintas.

Os ativos podem ser ativados, desativados ou substituídos ao longo do tempo, sendo necessário manter o histórico completo de sua utilização e condições operacionais.



## **3. Gestão Temporal e Histórico**

O sistema deve garantir que nenhuma informação relevante seja sobrescrita sem manutenção de histórico.

Entre os aspectos que exigem controle temporal, destacam-se:

* Alterações em dados contratuais ou financeiros de colaboradores
* Mudanças no estado ou condição de ativos
* Associação entre colaboradores e ativos ao longo do tempo
* Registro de eventos operacionais com validade temporal definida

As consultas devem permitir reconstruir o estado do sistema em qualquer instante passado.



## **4. Operações Logísticas**

A empresa realiza operações de transporte compostas por uma ou mais etapas.

Cada operação envolve:

* origem e destino
* cargas com características próprias
* prazos e valores associados
* execução por diferentes ativos em momentos distintos

As etapas podem ocorrer de forma sequencial ou depender de condições específicas para prosseguimento.



## **5. Regras Operacionais**

O sistema deve ser capaz de representar e garantir regras como:

* restrições de alocação de recursos ao longo do tempo
* compatibilidade entre tipo de operação e recurso utilizado
* impossibilidade de sobreposição de determinadas atividades
* consistência entre eventos planejados e realizados



## **6. Informações Derivadas e Consolidadas**

A empresa necessita obter, a partir dos dados armazenados:

* histórico consolidado de operações
* indicadores operacionais
* informações agregadas por período, recurso ou tipo de operação

Essas informações não devem comprometer a integridade do modelo nem introduzir redundâncias indevidas.



## **Desafio**

Com base no contexto apresentado:

1. Elabore o **Modelo Conceitual (DER)** completo, contemplando todas as entidades, relacionamentos e restrições necessárias para representar o domínio descrito.

2. Realize o **Mapeamento para o Modelo Lógico**, garantindo:

   * integridade referencial
   * eliminação de redundâncias
   * aderência às formas normais estudadas

3. Desenvolva o **Script DDL** para criação do banco de dados, incluindo:

   * definição de tabelas
   * chaves primárias e estrangeiras
   * restrições de domínio e integridade



## **Restrições do Projeto**

* Não utilizar mecanismos automatizados do SGBD nesta etapa
* O modelo deve, por si só, ser capaz de sustentar todas as regras descritas
* Todas as decisões de modelagem devem ser refletidas exclusivamente na estrutura de dados
