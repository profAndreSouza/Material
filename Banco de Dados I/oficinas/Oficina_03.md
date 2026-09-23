# ROTEIRO DE OFICINA PRÁTICA — OFICINA 03

**Componente Curricular:** Banco de Dados I  
**Data:** 06/11/2026  
**Modalidade:** Online (Estudo de Caso Prático Integrado / Projeto Assíncrono)  
**Tema:** Projeto de Banco de Dados de Ponta a Ponta — Da Análise de Requisitos ao DER, Normalização até a 3FN e Implementação Física em SQL  
**Ambiente de Software:** brModelo (ou Draw.io) e SGBD Relacional (PostgreSQL / MySQL / DB-Fiddle)  
**Articulação com a Ementa:** Projeto conceitual, lógico e físico de banco de dados, formas normais (1FN, 2FN, 3FN), integridade referencial e consultas SQL  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao concluir este estudo de caso integrado, você será capaz de:
1. Analisar um minimundo de negócios do setor de logística e extrair entidades, atributos e regras de cardinalidade ($1:1$, $1:N$, $N:N$).
2. Desenvolver o **Diagrama Entidade-Relacionamento (DER Conceitual)** utilizando notação padronizada (Peter Chen ou Crow's Foot).
3. Efetuar o **Mapeamento Conceitual para o Modelo Lógico Relacional**, especificando chaves primárias (PK), chaves estrangeiras (FK) e integridade de domínio.
4. Conduzir o processo formal de **Normalização de Dados**, transformando uma planilha comercial anômala em tabelas estritamente aderentes à **1ª, 2ª e 3ª Formas Normais (1FN, 2FN, 3FN)**.
5. Escrever o script **SQL DDL** completo e executável para criação do banco físico.
6. Construir consultas **SQL DQL** analíticas para validação dos requisitos do negócio.

---

## 2. MINIMUNDO DO ESTUDO DE CASO: "LOGISTICSTRANS SOROCABA"

A transportadora e operadora logística **LogisticsTrans Sorocaba** realiza entregas de cargas fracionadas para empresas em todo o interior paulista. Atualmente, o controle operacional é precário, baseado em planilhas eletrônicas dispersas que sofrem com graves inconsistências e redundâncias.

### Requisitos de Negócio Coletados na Entrevista:
1. **Veículos da Frota:** Cada veículo possui placa (única), chassi (único), modelo, capacidade de carga em toneladas e status operacional (`'DISPONIVEL'`, `'EM_VIAGEM'`, `'MANUTENCAO'`).
2. **Motoristas:** A empresa contrata motoristas identificados por CPF (único), número da CNH, nome completo, telefone de contato e categoria da CNH (`'C'`, `'D'`, `'E'`).
3. **Rotas e Viagens:** Cada viagem realizada possui um código identificador, data e hora de saída, data e hora prevista de chegada, cidade de origem e cidade de destino.
4. **Alocação de Recursos na Viagem:** Uma viagem é realizada obrigatoriamente por **um único veículo** e conduzida por **um único motorista titular**. Um mesmo veículo ou motorista pode participar de diversas viagens ao longo do ano, mas apenas uma por vez.
5. **Clientes Remetentes e Destinatários:** A empresa atende clientes identificados por CNPJ, razão social, endereço completo e telefone.
6. **Conhecimentos de Transporte (Cargas/Entregas):** Cada viagem transporta uma ou mais cargas (entregas). Para cada entrega registrada, há um número de Conhecimento de Transporte Eletrônico (CT-e único), a indicação do cliente remetente, do cliente destinatário, a descrição da mercadoria, peso em kg, valor declarado da carga e valor do frete cobrado.

---

## 3. ETAPAS DE DESENVOLVIMENTO DO ESTUDO DE CASO

O estudante deverá desenvolver e entregar as 4 fases a seguir:

### Fase 1: Modelagem Conceitual (DER)
- Identificar as entidades: `VEICULO`, `MOTORISTA`, `VIAGEM`, `CLIENTE` e `ENTREGA_CTE`.
- Determinar os atributos de cada entidade, sublinhando os atributos identificadores (*chaves primárias conceituais*).
- Estabelecer os relacionamentos e suas cardinalidades mínimas e máximas.
- Elaborar o diagrama conceitual no **brModelo** ou ferramenta equivalente.

### Fase 2: Normalização Passo a Passo a partir de Planilha Não Normalizada
Considere a seguinte estrutura não normalizada que a empresa utilizava para registrar as entregas:

$$\text{PLANILHA\_BRUTA} = (\underline{\text{Num\_CTe}}, \text{Data\_Emissao}, \text{Placa\_Veiculo}, \text{Modelo\_Veiculo}, \text{Capacidade\_Ton}, \text{CPF\_Motorista},$$
$$\text{Nome\_Motorista}, \text{CNPJ\_Destinatario}, \text{Razao\_Destinatario}, \text{Cidade\_Destino}, \text{Cod\_Item}, \text{Descricao\_Item}, \text{Qtd\_Volumes}, \text{Valor\_Item})$$

Demonstre o processo formal de decomposição:
- **Passo para 1FN:** Eliminar atributos multivalorados e grupos repetitivos (no caso, a lista de itens dentro do mesmo CT-e). Definir a chave primária composta da 1FN.
- **Passo para 2FN:** Eliminar **dependências funcionais parciais** (atributos que dependem de apenas uma parte da chave primária composta).
- **Passo para 3FN:** Eliminar **dependências funcionais transitivas** (atributos não-chave que dependem de outros atributos não-chave, como `Razao_Destinatario` que depende de `CNPJ_Destinatario`, ou `Modelo_Veiculo` que depende de `Placa_Veiculo`).

### Fase 3: Mapeamento Lógico Relacional
Apresente o esquema lógico relacional final em notação de texto estruturado:
- $\text{NOME\_TABELA} (\underline{\text{pk}}, \text{coluna1}, \text{coluna2}, \text{fk\_coluna*})$
- Indique claramente todas as Chaves Primárias ($\text{PK}$) e Chaves Estrangeiras ($\text{FK}$).

### Fase 4: Implementação Física SQL (DDL e DQL)
- Escrever o script DDL com criação das tabelas, tipos de dados, chaves primárias, estrangeiras e constraints `CHECK` (ex.: capacidade $> 0$, valor do frete $\ge 0$).
- Escrever consultas DQL para responder às seguintes demandas da gerência:
  1. Relatório geral de viagens: data de saída, modelo e placa do veículo, nome do motorista, origem e destino.
  2. Faturamento de frete por veículo: placa do veículo, total de entregas transportadas e soma total do valor dos fretes das entregas concluídas.
  3. Identificação de motoristas ociosos: motoristas cadastrados que atualmente não estão alocados em nenhuma viagem em andamento (`status = 'EM_VIAGEM'`).

---

## 4. SOLUÇÃO MODELO E PADRÃO DE RESPOSTA

### 4.1. Esquema Lógico Relacional Resultante da 3FN:

* $\text{VEICULOS} (\underline{\text{id\_veiculo}}, \text{placa}, \text{chassi}, \text{modelo}, \text{capacidade\_ton}, \text{status\_veiculo})$
* $\text{MOTORISTAS} (\underline{\text{id\_motorista}}, \text{cpf}, \text{num\_cnh}, \text{nome\_motorista}, \text{telefone}, \text{categoria\_cnh})$
* $\text{VIAGENS} (\underline{\text{id\_viagem}}, \text{id\_veiculo}^*, \text{id\_motorista}^*, \text{data\_hora\_saida}, \text{data\_hora\_chegada\_prevista}, \text{cidade\_origem}, \text{cidade\_destino}, \text{status\_viagem})$
* $\text{CLIENTES} (\underline{\text{id\_cliente}}, \text{cnpj}, \text{razao\_social}, \text{cidade}, \text{uf}, \text{telefone})$
* $\text{ENTREGAS\_CTE} (\underline{\text{id\_entrega}}, \text{num\_cte}, \text{id\_viagem}^*, \text{id\_remetente}^*, \text{id\_destinatario}^*, \text{descricao\_carga}, \text{peso\_kg}, \text{valor\_mercadoria}, \text{valor\_frete}, \text{status\_entrega})$

### 4.2. Script DDL Físico (PostgreSQL / MySQL):

```sql
-- DDL LOGISTICSTRANS SOROCABA
CREATE TABLE veiculos (
    id_veiculo SERIAL PRIMARY KEY,
    placa VARCHAR(10) NOT NULL UNIQUE,
    chassi VARCHAR(30) NOT NULL UNIQUE,
    modelo VARCHAR(50) NOT NULL,
    capacidade_ton NUMERIC(6, 2) NOT NULL CHECK (capacidade_ton > 0),
    status_veiculo VARCHAR(20) DEFAULT 'DISPONIVEL' 
        CHECK (status_veiculo IN ('DISPONIVEL', 'EM_VIAGEM', 'MANUTENCAO'))
);

CREATE TABLE motoristas (
    id_motorista SERIAL PRIMARY KEY,
    cpf CHAR(11) NOT NULL UNIQUE,
    num_cnh VARCHAR(20) NOT NULL UNIQUE,
    nome_motorista VARCHAR(80) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    categoria_cnh CHAR(1) NOT NULL CHECK (categoria_cnh IN ('C', 'D', 'E'))
);

CREATE TABLE viagens (
    id_viagem SERIAL PRIMARY KEY,
    id_veiculo INT NOT NULL,
    id_motorista INT NOT NULL,
    data_hora_saida TIMESTAMP NOT NULL,
    data_hora_chegada_prevista TIMESTAMP NOT NULL,
    cidade_origem VARCHAR(60) NOT NULL,
    cidade_destino VARCHAR(60) NOT NULL,
    status_viagem VARCHAR(20) DEFAULT 'EM_VIAGEM' 
        CHECK (status_viagem IN ('PLANEJADA', 'EM_VIAGEM', 'CONCLUIDA', 'CANCELADA')),
    CONSTRAINT fk_viagens_veiculos FOREIGN KEY (id_veiculo) REFERENCES veiculos(id_veiculo),
    CONSTRAINT fk_viagens_motoristas FOREIGN KEY (id_motorista) REFERENCES motoristas(id_motorista)
);

CREATE TABLE clientes (
    id_cliente SERIAL PRIMARY KEY,
    cnpj CHAR(14) NOT NULL UNIQUE,
    razao_social VARCHAR(100) NOT NULL,
    cidade VARCHAR(60) NOT NULL,
    uf CHAR(2) NOT NULL,
    telefone VARCHAR(20)
);

CREATE TABLE entregas_cte (
    id_entrega SERIAL PRIMARY KEY,
    num_cte VARCHAR(30) NOT NULL UNIQUE,
    id_viagem INT NOT NULL,
    id_remetente INT NOT NULL,
    id_destinatario INT NOT NULL,
    descricao_carga VARCHAR(120) NOT NULL,
    peso_kg NUMERIC(10, 2) NOT NULL CHECK (peso_kg > 0),
    valor_mercadoria NUMERIC(12, 2) NOT NULL CHECK (valor_mercadoria >= 0),
    valor_frete NUMERIC(10, 2) NOT NULL CHECK (valor_frete >= 0),
    status_entrega VARCHAR(20) DEFAULT 'EM_TRANSITO'
        CHECK (status_entrega IN ('EM_TRANSITO', 'ENTREGUE', 'DEVOLVIDA')),
    CONSTRAINT fk_entregas_viagens FOREIGN KEY (id_viagem) REFERENCES viagens(id_viagem),
    CONSTRAINT fk_entregas_remetente FOREIGN KEY (id_remetente) REFERENCES clientes(id_cliente),
    CONSTRAINT fk_entregas_destinatario FOREIGN KEY (id_destinatario) REFERENCES clientes(id_cliente)
);
```

### 4.3. Consultas Analíticas Solicitadas:

```sql
-- Demanda 1: Relatório de Viagens com Veículo e Motorista
SELECT v.id_viagem, 
       v.data_hora_saida, 
       vec.modelo AS modelo_veiculo, 
       vec.placa, 
       m.nome_motorista, 
       v.cidade_origem, 
       v.cidade_destino,
       v.status_viagem
FROM viagens v
INNER JOIN veiculos vec ON v.id_veiculo = vec.id_veiculo
INNER JOIN motoristas m ON v.id_motorista = m.id_motorista
ORDER BY v.data_hora_saida DESC;

-- Demanda 2: Faturamento Total de Frete por Veículo
SELECT vec.placa, 
       vec.modelo, 
       COUNT(e.id_entrega) AS total_entregas, 
       SUM(e.valor_frete) AS faturamento_frete_total
FROM veiculos vec
INNER JOIN viagens v ON vec.id_veiculo = v.id_veiculo
INNER JOIN entregas_cte e ON v.id_viagem = e.id_viagem
GROUP BY vec.placa, vec.modelo
ORDER BY faturamento_frete_total DESC;

-- Demanda 3: Motoristas que não estão em nenhuma viagem ativa
SELECT m.id_motorista, m.nome_motorista, m.categoria_cnh, m.telefone
FROM motoristas m
WHERE m.id_motorista NOT IN (
    SELECT v.id_motorista 
    FROM viagens v 
    WHERE v.status_viagem = 'EM_VIAGEM'
);
```

---

## 5. CRITÉRIOS DE AVALIAÇÃO DO ESTUDO DE CASO

| Critério Avaliado | Peso | O que será considerado |
| :--- | :---: | :--- |
| **Modelagem Conceitual (DER)** | 2,5 pts | Identificação correta de entidades, atributos-chave e precisão das cardinalidades mínimas/máximas. |
| **Normalização Rigorosa (1FN, 2FN, 3FN)** | 3,0 pts | Demonstração clara da eliminação de dependências parciais e transitivas a partir da planilha inicial. |
| **Mapeamento Lógico e Integridade** | 2,0 pts | Definição precisa de PKs, FKs e restrições de integridade referencial sem redundâncias. |
| **Implementação SQL (DDL e DQL)** | 2,5 pts | Sintaxe impecável do script de criação das tabelas e exatidão das consultas com JOINs e Subquery. |
| **TOTAL DO ESTUDO DE CASO** | **10,0 pts** | *(Comporá a média contínua de 50% de exercícios práticos)* |

---

## 6. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - **Capítulo 5:** *Dependências Funcionais e o Teorema da Decomposição sem Perdas* (p. 119–152).  
   - **Capítulo 6:** *Primeira, Segunda e Terceira Formas Normais: Fundamentos e Eliminação de Anomalias* (p. 153–194).
2. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 3:** *Modelagem de Dados Usando o Modelo Entidade-Relacionamento (ER)* (p. 43–82).  
   - **Capítulo 14:** *Conceitos Básicos de Normalização: 1FN, 2FN, 3FN e Forma Normal de Boyce-Codd (BCNF)* (p. 395–432).
3. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 3:** *Mapeamento do Modelo Conceitual para o Modelo Lógico Relacional: Regras e Aplicações Práticas* (p. 67–102).  
   - **Capítulo 4:** *Normalização na Prática Comercial: Estudo de Casos Empresariais* (p. 103–130).
4. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 7:** *Projeto de Banco de Dados Relacional e Algoritmos de Decomposição* (p. 235–278).
