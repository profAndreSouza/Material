# README de Exemplo - Modelo de Banco de Dados

Este documento apresenta um exemplo de diagrama entidade-relacionamento (DER) em duas sintaxes diferentes: PlantUML e Mermaid.

## Visão geral

O sistema de exemplo modela um cadastro de clientes, pedidos e produtos, incluindo itens de pedido e relacionamento entre entidades.

## DER em PlantUML

```plantuml
@startuml
entity Cliente {
  * id_cliente: INT <<PK>>
  --
  nome: VARCHAR(100)
  email: VARCHAR(100)
  telefone: VARCHAR(20)
}

entity Pedido {
  * id_pedido: INT <<PK>>
  --
  data_pedido: DATE
  status: VARCHAR(30)
  total: DECIMAL(10,2)
  cliente_id: INT <<FK>>
}

entity Produto {
  * id_produto: INT <<PK>>
  --
  nome: VARCHAR(100)
  descricao: TEXT
  preco: DECIMAL(10,2)
}

entity ItemPedido {
  * id_item: INT <<PK>>
  --
  quantidade: INT
  valor_unitario: DECIMAL(10,2)
  pedido_id: INT <<FK>>
  produto_id: INT <<FK>>
}

Cliente ||--o{ Pedido
Pedido ||--o{ ItemPedido
Produto ||--o{ ItemPedido
@enduml
```

## DER em Mermaid

```mermaid
erDiagram
    CLIENTE {
        int id_cliente PK
        varchar nome
        varchar email
        varchar telefone
    }

    PEDIDO {
        int id_pedido PK
        date data_pedido
        varchar status
        decimal total
        int cliente_id FK
    }

    PRODUTO {
        int id_produto PK
        varchar nome
        text descricao
        decimal preco
    }

    ITEM_PEDIDO {
        int id_item PK
        int quantidade
        decimal valor_unitario
        int pedido_id FK
        int produto_id FK
    }

    CLIENTE ||--o{ PEDIDO : realiza
    PEDIDO ||--o{ ITEM_PEDIDO : contem
    PRODUTO ||--o{ ITEM_PEDIDO : inclui
```

## Regras de negócio

- Um cliente pode fazer vários pedidos.
- Um pedido pode conter vários itens.
- Cada item do pedido refere-se a um único produto.
- O total do pedido pode ser calculado a partir dos itens.

## Observações

Esses diagramas servem como base para a modelagem conceitual e lógica do banco de dados, facilitando a comunicação entre analistas, desenvolvedores e stakeholders.
