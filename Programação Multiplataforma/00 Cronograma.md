# Programação Multiplataforma — Projeto: Corretora de Criptomoedas

## Descrição Geral

O projeto interdisciplinar tem como objetivo o desenvolvimento de uma aplicação multiplataforma para uma corretora de criptomoedas, inspirada em plataformas como a Binance. A proposta contempla o uso de microserviços no backend, interface web moderna no frontend e um aplicativo mobile, promovendo a integração entre diversas tecnologias ao longo de dois semestres.

A arquitetura segue os princípios de sistemas distribuídos com mensageria assíncrona via RabbitMQ, além da separação de responsabilidades entre serviços e interfaces.

**Stack utilizada:**

* **Backend (C# - .NET):**

  * `UserAPI`: Cadastro de usuários e autenticação.
  * `CurrencyAPI`: Gerenciamento de criptomoedas e histórico de preços.
  * `WalletAPI`: Controle de carteiras de usuários.
  * `ChatbotAPI`: Serviço inteligente em Flask (Python) para suporte automatizado.
  * `GatewayAPI`: Comunicação entre o frontend/mobile e os microserviços.

* **Frontend (Next.js com TypeScript e Tailwind CSS):** Interface web da aplicação.

* **Mobile (React Native com Expo):** Aplicativo para acesso rápido e leve às funcionalidades principais.

* **Mensageria:** RabbitMQ para garantir comunicação assíncrona eficiente.

* **Versionamento:** GitHub com fluxo de trabalho baseado no GitFlow (explicado nas primeiras aulas).


## Cronograma — Primeiro Semestre

| Aula | Data   | Conteúdo                                                                |
| ---- | ------ | ----------------------------------------------------------------------- |
| 1    | 14-Fev | Apresentação do projeto, tecnologias e visão geral do sistema           |
| 2    | 21-Fev | Metodologia SCRUM aplicada ao projeto (papéis, sprints, backlog)        |
| 3    | 28-Fev | Versionamento com GitHub e introdução ao GitFlow                        |
| 4    | 07-Mar | Estruturação do repositório com GitFlow + criação dos microserviços     |
| 5    | 14-Mar | Desenvolvimento da `UserAPI`: autenticação e CRUD de usuários           |
| 6    | 21-Mar | Integração da `UserAPI` com o Frontend (Next.js + Tailwind + TS)        |
| 7    | 28-Mar | Continuação da `UserAPI`: Autenticação e proteção de rotas              |
| 8    | 04-Abr | Integração da `UserAPI` com o Frontend                                  |
| 9    | 11-Abr | Sprint Review e Sprint Retrospective                                    |
| —    | 18-Abr | *Recesso / Feriado*                                                     |
| 10   | 25-Abr | Início da `CurrencyAPI`: criptomoedas e rotas principais                |
| —    | 02-Mai | *Recesso / Feriado*                                                     |
| 11   | 09-Mai | Integração da `CurrencyAPI` com o Frontend (gráficos e filtros)         |
| 12   | 16-Mai | Componentização e estilização com Tailwind + revisão geral do frontend  |
| 13   | 23-Mai | Componentização e estilização com Tailwind + revisão geral do frontend  |
| 14   | 30-Mai | Refatorações, testes de integração e validações cruzadas                |
| 15   | 06-Jun | Refatorações, testes de integração e validações cruzadas                |
| 16   | 13-Jun | Sprint Review e Sprint Retrospective                                    |
| 17   | 27-Jun | Início do desenvolvimento da `WalletAPI`                                |
| 18   | 04-Jul | Continuação da `WalletAPI`: vinculação com usuários e criptos           |
| 19   | 11-Jul | Integração da `WalletAPI` com frontend + testes                         |
| 20   | 18-Jul | Encerramento do 1º semestre — avaliação final das entregas              |
