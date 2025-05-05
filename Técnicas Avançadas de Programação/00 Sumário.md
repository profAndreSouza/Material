# Sumário Geral do Material de Apoio

## **01 Fundamentos da Programação Orientada a Objetos**

### **01.1 Introdução à Programação Orientada a Objetos**
* O que é POO? Comparação com programação procedural
* Vantagens e aplicações da POO
* Principais conceitos: objeto, classe, instância
* Exemplo simples em C# para ilustrar os conceitos

### **01.2 Atributos, Métodos e Encapsulamento**
* Definição de atributos e métodos
* Métodos com retorno e parâmetros
* Encapsulamento: `public`, `private`, `protected`
* Getters e Setters em C#
* Propriedades automáticas

### **01.3 Construtores e Sobrecarga**
* Construtores padrão e parametrizados
* Regras dos construtores em C#
* Sobrecarga de métodos e construtores

### **01.4 Herança**
* Conceito de herança: especialização
* Sintaxe de herança em C#
* Palavra-chave `base`
* Boas práticas com herança

### **01.5 Polimorfismo**
* Polimorfismo de sobrecarga vs sobrescrita
* Uso de `virtual`, `override`, `abstract`
* Interfaces como forma de polimorfismo
* Vantagens do polimorfismo no design de software

### **01.6 Classes Abstratas e Interfaces**
* Diferenças entre classes abstratas e interfaces
* Quando usar cada uma
* Exemplos práticos em C#
* Relação com o princípio da responsabilidade única (SOLID)

### **01.7 Tratamento de Exceções**
* Exceções em C#: `try`, `catch`, `finally`
* Tipos de exceções
* Criação de exceções personalizadas
* Boas práticas: tratamento vs propagação

## **02 Estruturação de Projetos com .NET MVC e PWA**
* Introdução ao padrão MVC (.NET)
* Estrutura básica de um projeto MVC
* Criação e organização de Views, Models e Controllers
* Propriedades do PWA (Progressive Web App)
  * Cache offline
  * Responsividade
  * Instalação local
* Criação e uso de protótipos no Figma
  * Wireframes
  * Protótipos de alta fidelidade

## **03 Banco de Dados e Persistência**
* Modelagem de Dados: DER (Diagrama Entidade-Relacionamento)
* Criação de Models com base no DER
* Introdução ao Entity Framework (.NET)
* Persistência de dados em aplicações com MVC
* CRUD completo em ambiente MVC

## **04 Padrões de Projeto Orientados a Objetos (GoF)**
* Introdução aos Padrões de Projeto
* Padrões de Criação:
  * Factory
  * Singleton
* Padrões Estruturais:
  * Adapter
  * Decorator (opcional)
* Padrões Comportamentais:
  * Strategy
  * Observer (opcional)
* Aplicação prática no projeto E-commerce

## **05 Arquiteturas de Software**
* Arquitetura em Camadas
* Padrões Arquiteturais:
  * MVC (Model-View-Controller)
  * MVP (Model-View-Presenter)
  * MVVM (Model-View-ViewModel)
* Separação de responsabilidades
* Vantagens e desvantagens

## **06 Testes Automatizados e Qualidade**
* Fundamentos de Testes de Software
* Desenvolvimento Orientado a Testes (TDD)
* Introdução ao xUnit no .NET
* Criação de testes unitários para serviços e controllers
* Boas práticas de codificação e qualidade de código (ex: Clean Code)

## **07 Ferramentas de Desenvolvimento**
* Git e controle de versionamento
  * Branches
  * GitFlow básico
  * Commits semânticos
* Visual Studio: boas práticas no uso do ambiente
* Uso do terminal integrado
* Debugging no Visual Studio

## **08 Frontend com Integração e Admin Area**
* Criação de Interfaces Gráficas com HTML, CSS e Razor
* Integração com Controllers (.NET MVC)
* Criação de Admin Area:
  * Controle de Pedidos
  * Cadastro de Produtos
* PWA avançado: Service Workers e caching offline

## **09 Integrações Externas e Simulação de APIs**
* Conceito de serviços externos e APIs REST
* Simulação de API de pagamento
* Boas práticas de integração com APIs

## **10 Avaliações, Feedbacks e Encerramento**
* Avaliação Conceitual
* Avaliação de Projeto
* Feedbacks e Reavaliações
* Apresentação final dos projetos
* Sugestões de melhoria e encerramento

---

# Sugestão de Estrutura de Pastas

├── 01.1-introducao-poo.md
├── 01.2-atributos-metodos-encapsulamento.md
├── 01.3-construtores-sobrecarga.md
├── 01.4-heranca.md
├── 01.5-polimorfismo.md
├── 01.6-classes-abstratas-interfaces.md
└── 01.7-tratamento-excecoes.md
├── 02-mvc-pwa.md
├── 03-persistencia.md
├── 04-padroes.md
├── 05-arquiteturas.md
├── 06-testes.md
├── 07-ferramentas.md
├── 08-frontend.md
├── 09-integracoes.md
└── 10-avaliacoes.md
