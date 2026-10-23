# Aula 01 — Fundamentos e modelagem conceitual

## Caso condutor — Loja Conecta

O problema central é a fragmentação de uma mesma informação em planilhas por setor: isso causa duplicidade, divergência e dificuldade de manter vínculos entre pedidos e pagamentos. Um SGBD fornece repositório compartilhado com regras de integridade, transações e permissões. Dados transacionais e relacionais favorecem o modelo relacional; respostas flexíveis de frete podem ser semiestruturadas (JSON), e imagens são arquivos não estruturados. Índices e reorganização de armazenamento são mudanças internas que devem preservar as visões das aplicações.

## Exemplo guiado — PetCare

`CLIENTE(id_cliente, nome, telefone)` e `PET(id_pet, nome, especie)`. Conforme a regra adotada na aula, cada cliente possui de um a muitos pets e cada pet pertence a exatamente um cliente (`CLIENTE 1..N — PET 1..1`). Se a clínica admitir cadastrar cliente antes do primeiro animal, o mínimo do lado CLIENTE deve ser zero; essa regra deve ser confirmada.

## Fixação 1

1. **Dado, informação e metadado.** `450,00` isolado é um dado sem contexto. “O pedido 812 totalizou R$ 450,00 em 23/10/2026” é informação contextualizada. Metadados possíveis: tipo/precisão (`NUMERIC(10,2)`) e moeda (`BRL`); também seriam relevantes a unidade de negócio e a regra de arredondamento.
2. **Tipologia.** Cadastro de pacientes em colunas e tipos definidos: estruturado. Laudo JSON: semiestruturado, pois possui marcações e campos, mas admite estrutura flexível. Imagem de tomografia: não estruturado do ponto de vista relacional, embora o arquivo tenha metadados técnicos.
3. **Arquivos versus SGBD.** Cópias separadas causam redundância e divergência (endereço diferente para o mesmo cliente), além de dificuldade de acesso concorrente/controle de permissões. O SGBD centraliza dados, aplica restrições e transações, controla concorrência e oferece visões/perfis de acesso.
4. **Independência física.** Em regra, trocar disco ou reorganizar arquivos altera o esquema interno e seus mapeamentos, não o esquema externo usado pelos clientes. A aplicação não precisa mudar se o SGBD preservar o mapeamento entre níveis.

## Fixação 2 — Biblioteca Saber

Entidades: `EDITORA(id_editora, razao_social, cidade)` e `LIVRO(id_livro, titulo, ano_publicacao)`. Relacionamento `PUBLICA`: uma editora pode ser cadastrada sem livro associado e pode publicar vários livros (`EDITORA 0..N`); cada livro é publicado por exatamente uma editora (`LIVRO 1..1`). É 1:N. No modelo lógico, `id_editora` migra como FK obrigatória para `LIVRO`.
