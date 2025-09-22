# UML aplicada a um Sistema de E-commerce

## 1. Levantamento de Requisitos

### 1.1 Requisitos Funcionais

Definem **o que o sistema deve fazer**.
São as funcionalidades principais que entregam valor ao usuário.

Exemplos em um e-commerce:

* Cadastrar e gerenciar produtos no catálogo.
* Permitir login, cadastro e recuperação de senha de clientes.
* Adicionar produtos ao carrinho de compras.
* Calcular valor total e aplicar cupons de desconto.
* Finalizar compra com diferentes métodos de pagamento (cartão, PIX, boleto).
* Gerar relatórios de vendas para o administrador.
* Rastrear pedidos em andamento.

### 1.2 Requisitos Não Funcionais

Definem **qualidades, restrições ou critérios de desempenho**.

Exemplos em um e-commerce:

* O sistema deve responder em **menos de 2 segundos** em operações simples.
* O pagamento deve seguir protocolos de segurança (**SSL, PCI-DSS**).
* O sistema deve estar disponível **24/7**, com tolerância a falhas.
* Interface responsiva e acessível em dispositivos **desktop e mobile**.
* Banco de dados deve suportar até **100 mil usuários ativos simultâneos**.



## 2. Modelagem de Requisitos

### 2.1 Histórias do Usuário

Formato: **Como \[ator], quero \[funcionalidade] para \[benefício].**

Exemplos:

* “Como **cliente**, quero adicionar produtos ao carrinho para concluir uma compra.”
* “Como **administrador**, quero cadastrar novos produtos para manter o catálogo atualizado.”
* “Como **cliente**, quero rastrear meu pedido para acompanhar a entrega.”

### 2.2 Diagrama de Casos de Uso

Representa **atores externos** e as principais funcionalidades.

```bash
usecaseDiagram
  actor Cliente
  actor Administrador
  actor "Sistema de Pagamento" as Pagamento

  Cliente --> (Pesquisar Produto)
  Cliente --> (Adicionar ao Carrinho)
  Cliente --> (Finalizar Pedido)
  Cliente --> (Rastrear Pedido)

  Administrador --> (Cadastrar Produto)
  Administrador --> (Gerar Relatório)

  (Finalizar Pedido) --> Pagamento
```



## 3. Modelagem de Processos

### 3.1 Diagrama de Atividades – Fluxo de Compra

Mostra **como o processo ocorre passo a passo**.

```mermaid
flowchart TD
    A[Início] --> B[Login do Cliente]
    B --> C[Selecionar Produtos]
    C --> D[Adicionar ao Carrinho]
    D --> E[Confirmar Endereço]
    E --> F[Escolher Forma de Pagamento]
    F --> G{Pagamento aprovado?}
    G -- Sim --> H[Confirmar Pedido]
    G -- Não --> I[Notificar Erro de Pagamento]
    H --> J[Enviar E-mail de Confirmação]
    I --> A
    J --> K[Fim]
```



## 4. Modelagem Estrutural

### 4.1 Diagrama de Classes

Mostra a **estrutura estática** (entidades, atributos e relacionamentos).

```mermaid
classDiagram
  class Cliente {
    +id: int
    +nome: string
    +email: string
    +senha: string
  }

  class Produto {
    +id: int
    +nome: string
    +descricao: string
    +preco: double
    +estoque: int
  }

  class Pedido {
    +id: int
    +data: Date
    +status: string
    +valorTotal: double
  }

  class ItemPedido {
    +quantidade: int
    +subtotal: double
  }

  class Pagamento {
    +id: int
    +tipo: string
    +status: string
    +data: Date
  }

  Cliente "1" --> "*" Pedido
  Pedido "1" --> "*" ItemPedido
  Produto "1" --> "*" ItemPedido
  Pedido "1" --> "1" Pagamento
```



### 4.2 Modelo de Dados (DER e Lógico)

Embora não faça parte da UML, é **essencial** para o projeto de banco de dados.

#### DER Conceitual

Entidades:

* **Cliente(id, nome, email, senha)**
* **Produto(id, nome, descricao, preco, estoque)**
* **Pedido(id, data, status, valorTotal, clienteId)**
* **ItemPedido(id, quantidade, subtotal, pedidoId, produtoId)**
* **Pagamento(id, tipo, status, data, pedidoId)**

Relacionamentos:

* Cliente faz → Pedido
* Pedido contém → ItemPedido
* ItemPedido refere-se → Produto
* Pedido gera → Pagamento

#### Modelo Lógico (tabelas simplificadas)

```sql
CREATE TABLE Clientes (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  senha VARCHAR(200)
);

CREATE TABLE Produtos (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  descricao TEXT,
  preco DECIMAL(10,2),
  estoque INT
);

CREATE TABLE Pedidos (
  id INT PRIMARY KEY,
  data TIMESTAMP,
  status VARCHAR(50),
  valorTotal DECIMAL(10,2),
  clienteId INT,
  FOREIGN KEY (clienteId) REFERENCES Clientes(id)
);

CREATE TABLE ItensPedido (
  id INT PRIMARY KEY,
  quantidade INT,
  subtotal DECIMAL(10,2),
  pedidoId INT,
  produtoId INT,
  FOREIGN KEY (pedidoId) REFERENCES Pedidos(id),
  FOREIGN KEY (produtoId) REFERENCES Produtos(id)
);

CREATE TABLE Pagamentos (
  id INT PRIMARY KEY,
  tipo VARCHAR(50),
  status VARCHAR(50),
  data TIMESTAMP,
  pedidoId INT,
  FOREIGN KEY (pedidoId) REFERENCES Pedidos(id)
);
```



## 5. Modelagem Comportamental

### 5.1 Diagrama de Sequência – Checkout

```mermaid
sequenceDiagram
  participant Cliente
  participant Sistema
  participant Carrinho
  participant Pagamento

  Cliente->>Sistema: Finalizar Pedido
  Sistema->>Carrinho: Calcular valor total
  Sistema->>Pagamento: Processar pagamento
  Pagamento-->>Sistema: Confirmação de pagamento
  Sistema->>Pedido: Criar pedido confirmado
  Sistema->>Cliente: Enviar e-mail de confirmação
```



## 6. Modelagem Arquitetural

### 6.1 Diagrama de Componentes

```mermaid
graph TD
  A[Frontend Web/Mobile] --> B[Backend API]
  B --> C[Catálogo de Produtos]
  B --> D[Carrinho e Pedidos]
  B --> E[Autenticação]
  B --> F[Pagamentos]
  B --> G[Relatórios]
  B --> H[(Banco de Dados)]
  F --> I[Gateway Externo de Pagamentos]
```



### 6.2 Diagrama de Implantação (Deployment)

```mermaid
graph TD
  User[Cliente] --> Browser[Navegador / App Mobile]
  Browser --> WebServer[Servidor Web/API]
  WebServer --> DB[(Banco de Dados)]
  WebServer --> PayAPI[API de Pagamento Externa]
```


## Resumo

* **Levantamento de Requisitos** → descreve o que o sistema deve ter.
* **Casos de Uso / Histórias** → mostram quem usa e para quê.
* **Atividades** → descrevem os fluxos principais.
* **Classes / DER / Lógico** → organizam dados e estrutura.
* **Sequência** → detalha interações dinâmicas.
* **Componentes / Implantação** → explicam arquitetura lógica e física.
