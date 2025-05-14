# Aula 2 – Modelagem de Dados

## Entidades, Atributos e Relacionamentos

A modelagem de dados é uma etapa fundamental na criação de um banco de dados eficiente e bem estruturado. Ela visa representar, de forma abstrata, os dados e suas interações no sistema.

### Entidade

* Representa um objeto real ou conceito do mundo que possui existência independente no domínio do sistema.
* Exemplo: `Cliente`, `Produto`, `Pedido`.

### Atributo

* Característica ou propriedade de uma entidade.
* Tipos comuns de atributos:

  * **Simples**: Não divisíveis (ex: `idade`).
  * **Compostos**: Divisíveis em subcomponentes (ex: `endereço` → `rua`, `cidade`, `estado`).
  * **Derivados**: Calculados a partir de outros (ex: `idade` derivada da `data de nascimento`).
  * **Multivalorados**: Podem ter mais de um valor (ex: `telefones`).

### Relacionamento

* Representa a associação entre duas ou mais entidades.
* Exemplo: `Cliente` faz um `Pedido`, `Professor` ministra uma `Disciplina`.

#### Grau do Relacionamento:

* **Binário** (mais comum): entre duas entidades.
* **Ternário**: entre três entidades.

#### Cardinalidade:

* Define quantas ocorrências de uma entidade estão associadas a outra.

  * **1:1** – Um para um
  * **1\:N** – Um para muitos
  * **N\:N** – Muitos para muitos

---

## Diagrama Entidade-Relacionamento (DER)

O **Diagrama Entidade-Relacionamento (DER)** é uma representação gráfica da modelagem conceitual, criado por **Peter Chen** na década de 1970.

### Componentes do DER:

* **Retângulo**: Representa uma entidade.
* **Elipse**: Representa um atributo.
* **Losango**: Representa um relacionamento.
* **Linha**: Conecta atributos a entidades ou relacionamentos.

### Exemplo visual (texto):

```
[Cliente] ───(faz)─── [Pedido]
    |
 [nome]
```

### Regras e boas práticas:

* Nomear entidades no singular.
* Não repetir nomes de atributos em diferentes entidades, a menos que sejam chaves estrangeiras.
* Utilizar chaves primárias para garantir unicidade dos registros.

---

## Ferramentas de Modelagem

Diversas ferramentas estão disponíveis para facilitar a criação de diagramas ER de forma gráfica e intuitiva:

### 1. [dbdiagram.io](https://dbdiagram.io)

* Interface amigável com suporte para código de definição.
* Geração de DER a partir de scripts SQL.
* Exportação para PNG, PDF, SQL.

### 2. [Draw.io (diagrams.net)](https://draw.io)

* Ferramenta genérica de diagramas com suporte offline e online.
* Pode ser usada para construir DER manualmente.
* Integração com Google Drive e GitHub.

### 3. [Lucidchart](https://lucidchart.com)

* Plataforma colaborativa com suporte a diagramas de ER.
* Versão gratuita com recursos limitados.

### 4. MySQL Workbench / pgModeler / DBeaver

* Softwares específicos de SGBDs com recursos de engenharia reversa e modelagem visual.

---

## Referências

* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* CHEN, Peter. *The Entity-Relationship Model: Toward a Unified View of Data*. ACM Transactions on Database Systems, 1976.
* dbdiagram.io: [https://dbdiagram.io](https://dbdiagram.io)
* diagrams.net: [https://draw.io](https://draw.io)
