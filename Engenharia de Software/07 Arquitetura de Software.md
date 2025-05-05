# Arquitetura de Software

## Definição

**Arquitetura de software** é a estrutura fundamental de um sistema de software, composta por seus **componentes**, as **relações entre esses componentes** e os princípios que orientam seu **projeto e evolução**. A arquitetura não apenas descreve a **organização do sistema**, mas também determina **restrições técnicas**, **padrões de desenvolvimento** e a **divisão de responsabilidades** entre módulos.

**Referência às aulas:** Aulas 11 e 12.

---

## 1. Propósito da Arquitetura de Software

O principal objetivo da arquitetura é garantir que o sistema seja:

* **Escalável**: Capaz de crescer em funcionalidades e volume de uso.
* **Modular**: Dividido em partes coesas e com baixa dependência entre si.
* **Manutenível**: Fácil de modificar, testar, corrigir e expandir.
* **Reutilizável**: Componentes podem ser reutilizados em outros sistemas.
* **Segura**: Definições claras de acesso e camadas protegem dados e lógicas críticas.

---

## 2. Conceitos Fundamentais

### 2.1. **Camadas (Layers)**

O uso de camadas é um dos princípios mais comuns em arquitetura. Cada camada tem uma responsabilidade bem definida e se comunica com camadas vizinhas.

**Exemplo clássico – Arquitetura em 3 camadas:**

| Camada           | Responsabilidade                                                     | Exemplos práticos                    |
| ---------------- | -------------------------------------------------------------------- | ------------------------------------ |
| **Apresentação** | Interface com o usuário, entrada e saída de dados                    | React, Angular, Flutter, HTML/CSS/JS |
| **Negócio**      | Regras de negócio, lógica de aplicação                               | Java, C#, Python, Laravel, NestJS    |
| **Persistência** | Acesso a dados, armazenamento em banco de dados ou arquivos externos | PostgreSQL, MongoDB, MySQL, Firebase |

---

### 2.2. **Modularização**

A modularização separa responsabilidades em **módulos independentes**, cada um cuidando de uma parte específica do sistema. Isso facilita o desenvolvimento em equipe e a manutenção.

**Exemplo:**
Em um sistema de e-commerce, os módulos podem incluir:

* Módulo de usuários
* Módulo de produtos
* Módulo de pedidos
* Módulo de pagamentos

Cada um desses módulos pode ser desenvolvido e testado separadamente, respeitando interfaces comuns (APIs).

---

## 3. Esboço de Arquitetura de Sistemas (Visão de Alto Nível)

A visão de alto nível mostra como as partes do sistema se comunicam e interagem, sem entrar em detalhes de implementação.

## 3.1. Exemplo: Sistema de Totem de Autoatendimento (PWA com ASP.NET MVC)

```plaintext
+------------------------------------+
|      Interface Web (PWA)           | ← Apresentação: Views em Razor (HTML/CSS/JS)
| (Responsiva para totem e mobile)   |
+------------------------------------+
                  |
                  v
+------------------------------------+
|     Controladores MVC (C#)         | ← Controladores: Recebem requisições do usuário
|     Regras de negócio embutidas    |
+------------------------------------+
                  |
                  v
+------------------------------------+
|      Models e Serviços             | ← Camada de Negócio: Modelos e lógica de aplicação
| (Validações, regras, cálculos)     |
+------------------------------------+
                  |
                  v
+------------------------------------+
|  Acesso a Dados (EF Core / ORM)    | ← Persistência: Repositórios e Migrations
|  Banco: PostgreSQL                 |
+------------------------------------+
```

---

### Explicação por Camada

#### **1. Interface Web (PWA) – Apresentação**

* Implementada com **Razor Views** no ASP.NET Core.
* Usa **HTML5**, **CSS (Bootstrap/Tailwind)** e **JavaScript**.
* Funciona como um **PWA**, ou seja:

  * Pode ser instalada no totem como se fosse um app.
  * Suporta **modo offline limitado**, notificações, ícone na tela.
  * Layout responsivo adaptado a telas touch grandes.

**Exemplo prático:**
Página `/Cardapio/Index` exibe os produtos com botões de "Adicionar ao pedido".

---

#### **2. Controladores – Lógica de Controle**

* Localizados na pasta `Controllers/` (ex: `PedidoController.cs`).
* Recebem ações dos usuários (via POST/GET) e decidem o fluxo.
* Chamam os métodos da camada de negócio.

**Exemplo prático:**
`PedidoController.Finalizar(PedidoViewModel model)` recebe os itens selecionados e inicia o processo de validação e pagamento.

---

#### **3. Models e Serviços – Lógica de Negócio**

* Classes em `Models/` e `Services/` implementam a lógica do sistema:

  * Validação de pedidos.
  * Cálculo de totais.
  * Personalização de lanches.
  * Processamento de pagamento (via API externa).

**Exemplo prático:**
`PedidoService.CalcularTotal(pedido)` aplica regras como desconto, adicionais, taxas.

---

#### **4. Acesso a Dados – Persistência**

* Utiliza **Entity Framework Core (EF Core)**.
* Conecta-se ao **PostgreSQL** para armazenar pedidos, produtos, clientes, etc.
* Repositórios implementam acesso organizado com CRUD e mapeamento ORM.

**Exemplo prático:**
`PedidoRepository.Salvar(pedido)` grava o pedido finalizado no banco com status inicial "Em preparo".

---

### Ciclo de Funcionamento

1. O cliente acessa o totem (PWA no navegador do dispositivo).
2. Seleciona produtos → `GET /Cardapio/Index`
3. Monta o pedido → `POST /Pedido/Adicionar`
4. Personaliza lanches → `POST /Pedido/Personalizar`
5. Confirma e paga → `POST /Pedido/Finalizar`
6. Pedido gravado no banco → `Pedido.Status = "Recebido"`

---

### Considerações Técnicas

* **Tecnologia base:** ASP.NET Core MVC 8.0+
* **Banco de dados:** SQL Server
* **Padrão arquitetural:** MVC tradicional
* **PWA suportada via:** `manifest.json`, `service-worker.js`
* **Autenticação:** JWT para área administrativa

---

## 4. Boas Práticas de Arquitetura

### 4.1. Separação de Responsabilidades

Cada módulo ou camada deve ter uma **única responsabilidade**, o que facilita testes, manutenção e escalabilidade.

### 4.2. Baixo Acoplamento e Alta Coesão

* **Baixo acoplamento**: os módulos não devem depender fortemente uns dos outros.
* **Alta coesão**: os componentes de um módulo devem estar diretamente relacionados entre si.

### 4.3. Uso de Interfaces e Abstrações

Abstrações ajudam a ocultar detalhes de implementação e a tornar o sistema mais flexível. Por exemplo, você pode mudar de banco de dados sem precisar alterar a lógica de negócio, desde que haja uma abstração bem definida.

### 4.4. Documentação

A arquitetura deve ser **documentada**, com diagramas e explicações claras para que todos os envolvidos no projeto compreendam a estrutura do sistema.

---

## 5. Padrões Arquiteturais Comuns

| Padrão                          | Aplicação típica                                                                              |
| ------------------------------- | --------------------------------------------------------------------------------------------- |
| **MVC (Model-View-Controller)** | Separação entre visualização, lógica e dados. Ideal para aplicações web.                      |
| **Microservices**               | Arquitetura distribuída em pequenos serviços independentes. Utilizada em sistemas escaláveis. |
| **Monolítica**                  | Toda a aplicação é construída em um único projeto. Simples para projetos pequenos.            |
| **Event-Driven**                | Componentes reagem a eventos assíncronos. Ideal para sistemas desacoplados.                   |

---

## 6. Exemplos práticos

### Exemplo 1 – Arquitetura MVC em uma aplicação web:

* **Model**: Regras de negócio e acesso a dados (ex: `Pedido`, `Produto`)
* **View**: Interface HTML/CSS (ex: página do cardápio)
* **Controller**: Conecta a View ao Model (ex: recebe o pedido do cliente e envia para o banco)

### Exemplo 2 – Arquitetura com Microserviços:

* Serviço de Pedidos (Node.js)
* Serviço de Pagamentos (Python)
* Serviço de Estoque (Go)
* Comunicação via HTTP ou Mensageria (Kafka, RabbitMQ)

Cada serviço tem banco próprio e pode ser escalado separadamente.

---

## 7. Referências Bibliográficas

* BASS, Len; CLEMENTS, Paul; KAZMAN, Rick. *Software Architecture in Practice*. 3rd ed. Addison-Wesley, 2012.
* PRESSMAN, Roger S. *Engenharia de Software*. 8. ed. São Paulo: McGraw-Hill, 2016.
* SOMMERVILLE, Ian. *Engenharia de Software*. 10. ed. São Paulo: Pearson, 2019.
* SHAW, Mary; GARLAN, David. *Software Architecture: Perspectives on an Emerging Discipline*. Prentice Hall, 1996.
* FOWLER, Martin. *Patterns of Enterprise Application Architecture*. Addison-Wesley, 2002.
