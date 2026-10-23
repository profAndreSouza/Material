# Aula 04 — Mapeamento do DER para o modelo lógico

## Caso da concessionária

```text
FABRICANTES(id_fabricante PK, nome_marca, pais_origem)
AUTOMOVEIS(chassi PK, modelo, ano_fab, cor, preco_tabela,
           id_fabricante FK -> FABRICANTES)
CLIENTES(id_cliente PK, nome_cliente, cpf UNIQUE, cidade)
VENDAS(id_venda PK, chassi FK -> AUTOMOVEIS,
       id_cliente FK -> CLIENTES, data_venda, valor_negociado, forma_pagto)
```

O fabricante está no lado 1 e automóvel no lado N; por isso a FK fica em AUTOMOVEIS. Venda possui atributos e representa cada ocorrência comercial; a chave `id_venda` permite histórico, inclusive se o domínio admitir revenda do mesmo veículo.

## Fixação

1. A FK no lado 1 obrigaria a guardar vários identificadores do lado N numa coluna (violação de atomicidade), repetir linhas do lado 1, ou limitar artificialmente a quantidade de filhos. Ex.: fabricante com muitos automóveis não cabe em um único `id_automovel` em FABRICANTES. A FK deve ficar no lado N.
2. Chave primária composta usa duas ou mais colunas em conjunto para identificar uma linha. Em tabela de junção, `(id_pedido,id_produto)` impede duplicar o mesmo produto no mesmo pedido e ambas as partes referenciam as tabelas de origem. Se o domínio permitir o mesmo produto em várias linhas do pedido, inclua `numero_item` na PK.
3. **Integridade de entidade:** PK não pode ser nula e deve ser única; violação: dois clientes com o mesmo `id_cliente`. **Integridade referencial:** FK deve apontar para linha existente (ou ser nula quando permitido); violação: venda apontando para cliente inexistente.
