# ROTEIRO DE OFICINA PRÁTICA — OFICINA 02

**Componente Curricular:** Banco de Dados I  
**Data:** 30/10/2026  
**Modalidade:** Presencial em Laboratório de Informática (Atendimento Assistido)  
**Tema:** Consultas Multitabelas e Relatórios Analíticos — Junções (`INNER`, `LEFT`, `RIGHT JOIN`), Agregações e Agrupamentos (`GROUP BY`, `HAVING`)  
**Ambiente de Software:** SGBD Relacional (PostgreSQL / MySQL) & Cliente SQL (DBeaver / pgAdmin)  
**Articulação com a Ementa:** Consultas avançadas em SQL, junção de relações, funções de agregação, agrupamentos e integridade referencial  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta oficina em laboratório, você será capaz de:
1. Compreender o mecanismo conceitual e prático das junções relacionais com base na álgebra relacional ($\bowtie$).
2. Diferenciar de forma clara o comportamento do **Produto Cartesiano**, **INNER JOIN**, **LEFT (OUTER) JOIN** e **RIGHT (OUTER) JOIN**, especialmente diante de registros nulos (`NULL`) em chaves estrangeiras.
3. Projetar e executar consultas que interliguem 3 ou mais tabelas através de suas chaves primárias e estrangeiras.
4. Aplicar funções de agregação numérica e estatística (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) em relatórios sumarizados.
5. Estruturar agrupamentos categóricos via `GROUP BY` e aplicar filtros condicionais pós-agregação utilizando a cláusula `HAVING` (distinguindo o momento de execução entre `WHERE` e `HAVING`).
6. Diagnosticar e corrigir erros comuns de agrupamento (ex.: colunas não agregadas omitidas no `GROUP BY`).

---

## 2. DIAGRAMA RELACIONAL E ESTRUTURA DO BANCO (MINIMUNDO INDUSTRIAL)

O ambiente simula o sistema de telemetria e manutenção preditiva de uma planta de manufatura metalmecânica denominada **SmartFactory Sorocaba**.

```
┌────────────────────┐          ┌────────────────────┐
│      SETORES       │          │      TECNICOS      │
├────────────────────┤          ├────────────────────┤
│ id_setor        PK │          │ id_tecnico      PK │
│ nome_setor         │          │ nome_tecnico       │
│ responsavel        │          │ especialidade      │
└─────────┬──────────┘          │ valor_hora         │
          │                     └─────────┬──────────┘
         1:N                              │
          │                              1:N
┌─────────▼──────────┐                    │
│      MAQUINAS      │                    │
├────────────────────┤                    │
│ id_maquina      PK │                    │
│ tag_patrimonio     │                    │
│ modelo             │                    │
│ data_aquisicao     │                    │
│ id_setor        FK │                    │
└─────────┬──────────┘                    │
          │                               │
         1:N                              │
          │                               │
┌─────────▼───────────────────────────────▼──────────┐
│                 ORDENS_SERVICO                     │
├────────────────────────────────────────────────────┤
│ id_ordem        PK                                 │
│ id_maquina      FK                                 │
│ id_tecnico      FK                                 │
│ tipo_manutencao    (PREVENTIVA, CORRETIVA, PREDITIVA)│
│ horas_trabalho                                     │
│ custo_pecas                                        │
│ status_ordem       (CONCLUIDA, EM_ANDAMENTO, ABERTA)│
│ data_abertura                                      │
└────────────────────────────────────────────────────┘
```

---

## 3. SCRIPT DDL E DML DE PREPARAÇÃO DO LABORATÓRIO

Execute o script abaixo no seu cliente SQL (DBeaver / pgAdmin ou DB-Fiddle):

```sql
-- ====================================================================
-- BANCO DE DADOS I - OFICINA 02: SMARTFACTORY SOROCABA
-- ====================================================================

DROP TABLE IF EXISTS ordens_servico CASCADE;
DROP TABLE IF EXISTS maquinas CASCADE;
DROP TABLE IF EXISTS tecnicos CASCADE;
DROP TABLE IF EXISTS setores CASCADE;

-- 1. Criação das Tabelas
CREATE TABLE setores (
    id_setor SERIAL PRIMARY KEY,
    nome_setor VARCHAR(50) NOT NULL UNIQUE,
    responsavel VARCHAR(80) NOT NULL
);

CREATE TABLE maquinas (
    id_maquina SERIAL PRIMARY KEY,
    tag_patrimonio VARCHAR(20) NOT NULL UNIQUE,
    modelo VARCHAR(60) NOT NULL,
    data_aquisicao DATE NOT NULL,
    id_setor INT,
    CONSTRAINT fk_maquinas_setores FOREIGN KEY (id_setor) 
        REFERENCES setores(id_setor) ON DELETE SET NULL
);

CREATE TABLE tecnicos (
    id_tecnico SERIAL PRIMARY KEY,
    nome_tecnico VARCHAR(80) NOT NULL,
    especialidade VARCHAR(50) NOT NULL,
    valor_hora NUMERIC(8, 2) NOT NULL CHECK (valor_hora > 0)
);

CREATE TABLE ordens_servico (
    id_ordem SERIAL PRIMARY KEY,
    id_maquina INT NOT NULL,
    id_tecnico INT,
    tipo_manutencao VARCHAR(20) NOT NULL CHECK (tipo_manutencao IN ('PREVENTIVA', 'CORRETIVA', 'PREDITIVA')),
    horas_trabalho NUMERIC(6, 2) DEFAULT 0.0 CHECK (horas_trabalho >= 0),
    custo_pecas NUMERIC(10, 2) DEFAULT 0.0 CHECK (custo_pecas >= 0),
    status_ordem VARCHAR(20) NOT NULL CHECK (status_ordem IN ('CONCLUIDA', 'EM_ANDAMENTO', 'ABERTA')),
    data_abertura DATE NOT NULL,
    CONSTRAINT fk_os_maquinas FOREIGN KEY (id_maquina) 
        REFERENCES maquinas(id_maquina) ON DELETE RESTRICT,
    CONSTRAINT fk_os_tecnicos FOREIGN KEY (id_tecnico) 
        REFERENCES tecnicos(id_tecnico) ON DELETE SET NULL
);

-- 2. Povoamento com Casos Especiais (Máquinas sem setor, técnicos sem OS, etc.)
INSERT INTO setores (nome_setor, responsavel) VALUES
('Usinagem Pesada', 'Eng. Roberto Lima'),
('Estamparia e Solda', 'Eng. Patrícia Alencar'),
('Pintura Eletrostática', 'Sup. Marcos Vinicius'),
('Montagem Final', 'Eng. Juliana Torres'),
('Controle de Qualidade', 'Dra. Vanessa Bueno');

INSERT INTO maquinas (tag_patrimonio, modelo, data_aquisicao, id_setor) VALUES
('CNC-01', 'Torno CNC Romi GL 240', '2021-03-15', 1),
('CNC-02', 'Centro de Usinagem Haas VF-2', '2022-07-20', 1),
('PRE-01', 'Prensa Hidráulica 200T', '2019-11-10', 2),
('ROB-01', 'Robô de Solda Kuka KR-16', '2023-01-25', 2),
('CAB-01', 'Cabina de Pintura Automatizada', '2020-05-18', 3),
('STE-01', 'Esteira Transportadora Modular', '2024-02-12', 4),
('BNC-01', 'Bancada de Testes de Tracionamento', '2023-08-30', NULL); -- Máquina sem setor associado

INSERT INTO tecnicos (nome_tecnico, especialidade, valor_hora) VALUES
('Lucas Nogueira', 'Mecatrônica', 85.00),
('Carla Dias', 'Eletromecânica', 90.00),
('Fernando Toledo', 'Automação Industrial', 110.00),
('Beatriz Ramos', 'Hidráulica e Pneumática', 95.00),
('Rodrigo Fogaça', 'Instrumentação Óptica', 120.00); -- Técnico sem nenhuma OS no histórico

INSERT INTO ordens_servico (id_maquina, id_tecnico, tipo_manutencao, horas_trabalho, custo_pecas, status_ordem, data_abertura) VALUES
(1, 1, 'CORRETIVA', 4.5, 450.00, 'CONCLUIDA', '2026-08-05'),
(1, 3, 'PREDITIVA', 2.0, 0.00, 'CONCLUIDA', '2026-08-18'),
(2, 3, 'CORRETIVA', 8.0, 1850.00, 'CONCLUIDA', '2026-08-22'),
(3, 4, 'PREVENTIVA', 5.0, 620.00, 'CONCLUIDA', '2026-09-01'),
(4, 1, 'CORRETIVA', 3.5, 310.00, 'CONCLUIDA', '2026-09-04'),
(1, 1, 'PREVENTIVA', 3.0, 150.00, 'CONCLUIDA', '2026-09-10'),
(5, 2, 'EM_ANDAMENTO', 6.0, 800.00, 'EM_ANDAMENTO', '2026-09-15'),
(6, NULL, 'PREVENTIVA', 0.0, 0.00, 'ABERTA', '2026-09-20'), -- OS aberta sem técnico atribuído
(2, 3, 'PREDITIVA', 1.5, 0.00, 'CONCLUIDA', '2026-09-22');
```

---

## 4. ATIVIDADES PRÁTICAS DO LABORATÓRIO (PASSO A PASSO)

Resolva as seguintes questões analíticas construindo as instruções SQL correspondentes:

### Bloco A: Junções Relacionais (`INNER`, `LEFT`, `RIGHT JOIN`)
1. **Relatório de Máquinas e Setores (INNER JOIN):** Liste a `tag_patrimonio`, o `modelo` da máquina e o `nome_setor` onde ela opera. Observe se a máquina `'BNC-01'` aparece no retorno e explique tecnicamente o motivo.
2. **Auditoria Geral de Parque de Máquinas (LEFT JOIN):** Construa uma consulta que liste **todas as máquinas do parque**, independentemente de estarem vinculadas a um setor ou não. Caso não tenham setor, deve exibir `NULL`.
3. **Setores sem Equipamentos (LEFT JOIN com filtro NULL):** Identifique se há algum setor cadastrado na empresa que atualmente **não possua nenhuma máquina vinculada**.
4. **Relatório Completo de Ordens de Serviço (Junção de 4 Tabelas):** Projete o número da ordem de serviço (`id_ordem`), a `tag_patrimonio` da máquina, o `nome_setor`, o `nome_tecnico` responsável e o `tipo_manutencao`. Devem constar inclusive ordens que ainda não possuem técnico associado.

### Bloco B: Funções Agregadas, `GROUP BY` e `HAVING`
5. **Custo Médio e Total por Tipo de Manutenção:** Apresente para cada `tipo_manutencao`:
   - A quantidade total de ordens de serviço (`COUNT(*)`);
   - O custo total acumulado de peças (`SUM(custo_pecas)`);
   - O tempo médio de intervenção em horas (`AVG(horas_trabalho)` formatado com 2 casas decimais).
6. **Faturamento de Mão de Obra por Técnico:** Calcule o total faturado por cada técnico nas ordens de serviço com status `'CONCLUIDA'`. O cálculo deve ser: $\sum (\text{horas\_trabalho} \times \text{valor\_hora})$. Projete o `nome_tecnico` e a coluna calculada `total_mao_obra`.
7. **Filtragem de Máquinas de Alta Criticidade (HAVING):** Liste a `tag_patrimonio` das máquinas que acumulam **mais de 1 ordem de serviço corretiva** (`tipo_manutencao = 'CORRETIVA'`).
8. **Setores com Custo Acumulado Relevante:** Apresente o `nome_setor` e o somatório dos custos de peças em manutenção apenas para os setores cujo custo total acumulado seja **estritamente superior a R$ 1.000,00**, ordenando do mais oneroso para o menor.

---

## 5. GABARITO COMENTADO E PADRÃO DE RESPOSTA

```sql
-- Questão 01: INNER JOIN
-- A máquina BNC-01 não aparece porque seu campo id_setor é NULL, violando a condição de igualdade m.id_setor = s.id_setor.
SELECT m.tag_patrimonio, m.modelo, s.nome_setor
FROM maquinas m
INNER JOIN setores s ON m.id_setor = s.id_setor;

-- Questão 02: LEFT JOIN
SELECT m.tag_patrimonio, m.modelo, COALESCE(s.nome_setor, 'SEM SETOR ATRIBUÍDO') AS setor
FROM maquinas m
LEFT JOIN setores s ON m.id_setor = s.id_setor;

-- Questão 03: Setores sem máquinas
SELECT s.nome_setor, s.responsavel
FROM setores s
LEFT JOIN maquinas m ON s.id_setor = m.id_setor
WHERE m.id_maquina IS NULL;

-- Questão 04: Junção de 4 Tabelas (Garantindo exibição mesmo sem técnico ou sem setor)
SELECT os.id_ordem, 
       m.tag_patrimonio, 
       COALESCE(s.nome_setor, 'N/D') AS nome_setor,
       COALESCE(t.nome_tecnico, 'A AGUARDAR ATRIBUIÇÃO') AS tecnico_responsavel,
       os.tipo_manutencao,
       os.status_ordem
FROM ordens_servico os
INNER JOIN maquinas m ON os.id_maquina = m.id_maquina
LEFT JOIN setores s ON m.id_setor = s.id_setor
LEFT JOIN tecnicos t ON os.id_tecnico = t.id_tecnico
ORDER BY os.id_ordem;

-- Questão 05: Agrupamento por Tipo de Manutenção
SELECT tipo_manutencao,
       COUNT(*) AS total_os,
       SUM(custo_pecas) AS custo_total_pecas,
       ROUND(AVG(horas_trabalho), 2) AS media_horas
FROM ordens_servico
GROUP BY tipo_manutencao;

-- Questão 06: Mão de Obra por Técnico
SELECT t.nome_tecnico,
       SUM(os.horas_trabalho * t.valor_hora) AS total_mao_obra
FROM ordens_servico os
INNER JOIN tecnicos t ON os.id_tecnico = t.id_tecnico
WHERE os.status_ordem = 'CONCLUIDA'
GROUP BY t.nome_tecnico
ORDER BY total_mao_obra DESC;

-- Questão 07: Filtro Agregado com HAVING
SELECT m.tag_patrimonio, COUNT(os.id_ordem) AS total_corretivas
FROM ordens_servico os
INNER JOIN maquinas m ON os.id_maquina = m.id_maquina
WHERE os.tipo_manutencao = 'CORRETIVA'
GROUP BY m.tag_patrimonio
HAVING COUNT(os.id_ordem) > 1;

-- Questão 08: Relatório Financeiro de Setores com HAVING
SELECT s.nome_setor, SUM(os.custo_pecas) AS gasto_total_pecas
FROM ordens_servico os
INNER JOIN maquinas m ON os.id_maquina = m.id_maquina
INNER JOIN setores s ON m.id_setor = s.id_setor
GROUP BY s.nome_setor
HAVING SUM(os.custo_pecas) > 1000.00
ORDER BY gasto_total_pecas DESC;
```

---

## 6. CRITÉRIOS DE AVALIAÇÃO DA ATIVIDADE

| Critério Avaliado | Peso | Evidência de Desempenho |
| :--- | :---: | :--- |
| **Domínio de Junções (`INNER`, `LEFT`, `RIGHT`)** | 3,5 pts | Escolha correta do tipo de junção conforme a cardinalidade e tolerância a registros órfãos/nulos. |
| **Junções Múltiplas com 3 ou 4 Tabelas** | 2,5 pts | Interligação consistente de chaves sem geração de produto cartesiano espúrio. |
| **Funções Agregadas e Cláusula `GROUP BY`** | 2,0 pts | Aplicação de `COUNT`, `SUM`, `AVG` e coerência de todas as colunas projetadas no agrupamento. |
| **Cláusula `HAVING` vs `WHERE`** | 2,0 pts | Compreensão clara de que condições sobre valores agregados devem ser processadas no `HAVING`. |
| **TOTAL DO LABORATÓRIO** | **10,0 pts** | *(Comporá a média contínua de 50% de exercícios práticos)* |

---

## 7. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 8:** *SQL Avançado: Consultas Complexas, Junções Externas (OUTER JOINs) e Funções Agregadas* (p. 205–242).  
   - **Capítulo 9:** *Teoria dos Conjuntos e Operações de Junção da Álgebra Relacional* (p. 243–270).
2. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - **Capítulo 4:** *A Operação de Junção (Natural, Theta e Externa) e o Problema da Informação Nula* (p. 89–118).
3. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 6:** *Consultas Integradas entre Tabelas e Construção de Relatórios Gerenciais* (p. 145–182).
4. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - **Capítulo 4:** *Combinando Tabelas com INNER JOIN, LEFT JOIN e CROSS JOIN* (p. 77–108).  
   - **Capítulo 5:** *Agregação de Dados, Funções de Grupo e a Cláusula HAVING* (p. 109–134).
