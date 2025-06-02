# 9. Documentação de Software

## 9.1 Objetivo e Importância da Documentação

A **documentação de software** é essencial para garantir a comunicação eficaz entre todos os envolvidos no projeto: desenvolvedores, clientes, usuários e futuros mantenedores do sistema. Ela permite que qualquer pessoa compreenda o **funcionamento, estrutura, decisões técnicas e requisitos** do sistema, mesmo após sua entrega.

**Principais objetivos:**

- Registrar as decisões tomadas ao longo do desenvolvimento;
- Facilitar a manutenção e evolução futura do sistema;
- Apoiar o entendimento do sistema por novos membros da equipe;
- Aumentar a confiabilidade e organização do projeto.

> Um bom software sem documentação é como um carro sem volante — pode até funcionar, mas ninguém sabe como conduzir.

## 9.2 Modelos Simples de Documentação Técnica

Existem diferentes níveis e tipos de documentação, mas em projetos didáticos ou de pequeno porte, recomenda-se um modelo **simples, direto e funcional**, dividido em partes principais:

| Tipo de Documento          | Conteúdo Principal                                               |
|---------------------------|------------------------------------------------------------------|
| Documento de Requisitos   | Requisitos funcionais, não funcionais e histórias de usuário     |
| Casos de Uso              | Atores, fluxos de eventos, pré e pós-condições                   |
| Diagrama de Atividades    | Passos da interação do usuário com o sistema                     |
| Arquitetura do Sistema    | Componentes principais, camadas e tecnologias envolvidas         |
| Protótipos e Interfaces   | Telas, wireframes e navegação básica                             |
| Sumário Técnico Final     | Visão geral do projeto e lições aprendidas                       |


## 9.3 Estrutura Básica do Documento Final de Projeto

Abaixo está uma **estrutura sugerida** para o documento final do projeto do Totem "ADS Burguer":


### Autores

- Nome 1 (RA)
- Nome 2 (RA)
- Nome 3 (RA)
- Disciplina: Engenharia de Software – 1º Semestre 2025  
- Professor: *[Seu Nome]*


### 1. Introdução

#### 1.1 Objetivo do Documento
Este documento tem como objetivo registrar as decisões, requisitos, artefatos e modelos utilizados no desenvolvimento do sistema ADS Burguer – um totem de autoatendimento interativo para pedidos em uma lanchonete fictícia.

#### 1.2 Escopo
O sistema será um totem touchscreen com interface intuitiva, pagamentos integrados, integração com estoque e acessibilidade. Uma versão simulador mobile será utilizada para testes responsivos.

#### 1.3 Definições e Abreviações

| Sigla | Descrição                     |
|-------|-------------------------------|
| NFC   | Comunicação por aproximação   |
| CRUD  | Create, Read, Update, Delete  |
| UI    | Interface do Usuário          |
| UX    | Experiência do Usuário        |


### 2. Modelo de Processo de Software

O desenvolvimento seguirá um modelo **iterativo e incremental com prototipação**, permitindo feedbacks frequentes com o cliente fictício e validação contínua.


### 3. Levantamento de Requisitos

Realizado a partir de entrevistas simuladas com o cliente e comparação com sistemas existentes (McDonald's, Burger King). Utilizou-se a técnica de brainstorming e observação de concorrentes.


### 4. Requisitos do Sistema

#### 4.1 Requisitos Funcionais

| ID    | Descrição                                                                 |
|-------|---------------------------------------------------------------------------|
| RF01  | Exibir categorias de produtos com imagem, nome, descrição e preço.       |
| RF02  | Permitir personalização de pedidos (remover/adicionar ingredientes).     |
| RF03  | Processar pagamento via cartão, Pix ou NFC.                              |
| RF04  | Imprimir nota fiscal após conclusão do pedido.                           |
| RF05  | Atualizar o estoque automaticamente após cada venda.                     |
| RF06  | Aplicar cupons e promoções durante o pedido.                             |

#### 4.2 Requisitos Não Funcionais

| ID     | Descrição                                                                 |
|--------|--------------------------------------------------------------------------|
| RNF01  | Interface otimizada para resolução de 800x1280.                          |
| RNF02  | Suporte a daltônicos com opção de alto contraste.                        |
| RNF03  | Tempo de resposta inferior a 2 segundos para qualquer ação do usuário.   |
| RNF04  | Simulação responsiva para ambiente mobile.                               |

### 5. Histórias de Usuário

> Formato: _"Como [tipo de usuário], quero [ação] para [benefício]."_

- Como cliente, quero visualizar os combos disponíveis para escolher rapidamente.
- Como cliente, quero personalizar os lanches removendo ou adicionando ingredientes.
- Como cliente, quero pagar no próprio totem para não enfrentar filas.
- Como cliente, quero usar cupons de desconto para economizar no pedido.


### 6. Casos de Uso

#### 6.1 Diagrama de Casos de Uso

> *(Inserir imagem ou link para diagrama UML se houver)*

#### 6.2 Especificação - Caso de Uso: **Realizar Pedido**

- **Ator Principal**: Cliente
- **Pré-condição**: O sistema está ligado e disponível.
- **Fluxo Principal**:
    1. Cliente inicia o pedido na tela inicial.
    2. Navega pelas categorias e escolhe um produto.
    3. Personaliza o item (se desejar).
    4. Adiciona o item ao carrinho.
    5. Repete o processo para mais itens.
    6. Finaliza o pedido e escolhe a forma de pagamento.
    7. Realiza o pagamento.
    8. Recebe a nota fiscal impressa.

### 7. Diagrama de Atividades

> *(Descrever ou inserir link/imagem)*


### 8. Arquitetura do Sistema

#### 8.1 Visão Geral

- **Frontend**: Interface Web com HTML, CSS, JS/React.
- **Backend**: API REST em Node.js ou Flask (simulado).
- **Banco de Dados**: PostgreSQL para controle de pedidos, produtos e estoque.
- **Integrações**: Impressora térmica, gateway de pagamento, estoque em tempo real.

#### 8.2 Diagrama de Componentes

> *(Inserir esquema visual ou descrição simples dos módulos: UI, API, BD, Impressora)*


### 9. Interface do Usuário

#### 9.1 Wireframes

> *(Descrever ou anexar imagens/links para protótipos, ex: Figma)*

- Tela Inicial com categorias.
- Tela de produto com botão de personalização.
- Tela de carrinho com resumo do pedido.
- Tela de pagamento com opções: Cartão, NFC, Pix.
- Tela de cupom promocional.

#### 9.2 Paleta de Cores

| Elemento       | Cor Hex     |
|----------------|-------------|
| Primária       | `#990000`   |
| Secundária     | `#FF5B00`   |
| Destaque       | `#D4D925`   |
| Fundo claro    | `#FFEE63`   |

#### 9.3 Acessibilidade

- Modo para daltônicos com alto contraste.
- Uso de ícones + texto.
- Fonte legível e botões grandes para toque.

### 10. Nomenclatura dos Produtos

- **Lanches**: C# Burguer, Python Stack, PHP Buguer, Java Sandwich
- **Combos**: Combo Full Stack, Dev Meal, Refatoração Total
- **Molhos**: Barbecue++, Chipotle.js, MayoAI, KetchAPI
- **Sobremesas**: MilkShake SQL, Petit Gateau da Nuvem, Casquinha Bootstrap
- **Bebidas**: ColaScript, JavaJuice, React Refresco

### 11. Anexos

- [ ] Diagrama de Casos de Uso (UML)
- [ ] Diagrama de Atividades
- [ ] Protótipos (Figma ou imagens)
- [ ] Lista completa de requisitos (PDF/planilha)
- [ ] Apresentação do projeto 
