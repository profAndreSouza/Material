# **Projeto E-Shop**

## **1. Contexto**

A **E-Shop** é uma loja virtual que comercializa artigos de moda, acessórios e itens para casa.
O objetivo é desenvolver um **sistema de e-commerce completo**, com área pública para clientes e **painel administrativo** para gestão de produtos, vendas, clientes, promoções e relatórios.
O projeto será executado utilizando **metodologia SCRUM**, com o aluno desempenhando o papel de **Product Owner**.


## **2. Stakeholders**

* **Cliente (E-Shop)** – dono do negócio, define necessidades e prioridades.
* **Equipe Administrativa** – gerencia produtos, estoque, pedidos, clientes e promoções.
* **Clientes** – compram e acompanham pedidos.
* **Equipe Financeira** – processa pagamentos.
* **Equipe de Suporte/Logística** – acompanha envios.
* **P.O. (estudante)** – representa o cliente, prioriza backlog e comunica com o time.


## **3. Objetivos do Sistema**

1. Vender produtos online com catálogo, carrinho e checkout.
2. Fornecer painel administrativo para controle total da operação.
3. Gerar relatórios e insights para apoio à decisão.
4. Oferecer experiência de compra segura, responsiva e intuitiva.
5. Integrar diferentes meios de pagamento.
6. Garantir escalabilidade, organização e facilidade de manutenção.


## **4. Escopo Mínimo (MVP)**

* **Área pública:** catálogo, busca, filtros, página de produto, carrinho e checkout.
* **Cadastro/login** de clientes.
* **Painel administrativo** com:

  * CRUD de produtos (imagens, categorias, estoque).
  * Gestão de clientes (visualizar, editar, bloquear).
  * Gestão de pedidos (status, histórico).
  * Gestão de promoções/cupons.
  * Relatórios básicos (vendas, produtos mais vendidos).
* **Integração** com meio de pagamento simulado.
* **Controle de estoque**, cálculo de frete simplificado e regras de cupons.
* **Responsividade** para desktop e mobile.


## **5. Requisitos Não Funcionais**

* **Segurança:** HTTPS, hash de senhas, proteção contra XSS/CSRF/SQL Injection.
* **Performance:** catálogo carrega em ≤ 2s.
* **Disponibilidade:** suportar ≥ 50 usuários simultâneos no teste.
* **Escalabilidade:** arquitetura modular (frontend/backend separados).
* **Manutenibilidade:** código padronizado e testado.
* **Portabilidade:** compatível com Linux, preferencialmente via Docker.
* **Acessibilidade:** contraste adequado e navegação por teclado (mínimo AA).
* **Compatibilidade:** navegadores modernos e mobile.
* **Privacidade:** política de privacidade e boas práticas de dados.
* **Internacionalização:** suporte a pt-BR e possibilidade de multilínguas (opcional).


## **6. Regras de Negócio**

* Estoque reservado no checkout (ou após pagamento, decisão a documentar).
* Cupons podem ou não ser acumuláveis.
* Pedido muda para “Enviado” apenas com atualização manual.
* Pagamento recusado → estoque liberado.
* Descontos não podem gerar valores negativos.


## **7. Integrações**

* **Obrigatória:** gateway de pagamento simulado.
* **Opcionais:** cálculo de frete por API, envio de e-mails automáticos, exportação/importação CSV.


## **8. Entregáveis**

* **Product Backlog** com épicos e histórias priorizadas.
* **Protótipos/Wireframes** das telas principais.
* **Modelagem completa** (casos de uso, diagrama ER, classes, componentes).
* **Especificação de API** (Swagger/OpenAPI ou similar).
* **MVP funcional** (frontend + backend).
* **Testes** (automatizados e manuais).
* **Documento de deploy** (Docker ou scripts).
* **Relatório final** e **apresentação**.


## **9. Critérios de Avaliação**

* Atendimento ao MVP.
* Qualidade de UX e design.
* Clareza e completude da modelagem.
* Qualidade e organização do código.
* Testes e documentação.
* Criatividade e diferenciais.
* Robustez e segurança.
* Apresentação final.


## **10. Desafios Extras (Opcional)**

* Programa de fidelidade.
* Recomendação de produtos.
* Login social.
* Painel analítico avançado.


## **Observações para o P.O.**

* Escrever backlog com histórias pequenas e testáveis.
* Criar critérios de aceitação claros.
* Usar mockups antes de codificar.
* Decidir tecnologias, desde que documente o deploy.
* Registrar decisões de arquitetura e segurança.
