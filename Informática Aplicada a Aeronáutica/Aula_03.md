# ROTEIRO DE AULA EXPANDIDO — AULA 03
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 21/08/2026  
**Tema:** MS Word Avançado: Modelagem de Ordens de Serviço (OS), Formulários Interativos, Colaboração em Nuvem e Mini-PBL 1  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Word)  
**Articulação com o PPC:** EAA-003 (Familiarização), EAM-005 (Práticas de Manutenção em Aeronaves) e EAM-003 (Manutenção de Aeronaves)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Desenvolver formulários interativos estruturados com campos padronizados (caixas de texto, listas suspensas, datas e caixas de seleção).
- Configurar modelos técnicos protegidos contra alterações indevidas de leiaute.
- Operar os recursos de **Colaboração em Tempo Real, Comentários e Controle de Alterações (*Track Changes*)** no Word Online (Microsoft 365).
- Planejar a estrutura lógica de uma **Ordem de Serviço (OS)** aeronáutica digital.
- Executar o **Mini-PBL 1** (Desenvolvimento de Modelo Padronizado de Ordem de Serviço).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Formulários Digitais vs. Documentos Livres
Em manutenção de aeronaves, ordens de serviço e fichas de inspeção não podem ser preenchidas como textos livres para evitar omissão de dados críticos. Conforme estabelecido no manual oficial [`docs/FAA-H-8083-31B - MANUAL DO TECNICO DE MANURENÇÃO DE AERONAVE.pdf`](docs/FAA-H-8083-31B%20-%20MANUAL%20DO%20TECNICO%20DE%20MANUREN%C3%87%C3%83O%20DE%20AERONAVE.pdf) e na diretriz de tomada de decisão [`docs/02-asas-do-conhecimento-tomada-de-decisao.pdf`](docs/02-asas-do-conhecimento-tomada-de-decisao.pdf), a rastreabilidade e a padronização são requisitos legais inegociáveis.
- **Campos de Controle:** Limitam o tipo de entrada (ex: obrigar a escolha de opções fixas de um menu dropdown, garantir que datas sigam o formato padrão e exigir marcação explícita de caixas de seleção).
- **Colaboração em Nuvem (Microsoft 365):** Vários técnicos e engenheiros podem editar o mesmo documento simultaneamente via navegador, com rastreabilidade de quem alterou cada parágrafo.

```
ESTRUTURA DE UMA ORDEM DE SERVIÇO DIGITAL:
 +------------------------------------------------------------------------------------+
 | [CABEÇALHO] Logotipo da Empresa | Código da OS: OS-2026-0899 | Data: [ 21/08/2026]  |
 +------------------------------------------------------------------------------------+
 | [IDENTIFICAÇÃO] Prefixo: [PR-XYZ] | Modelo: [Cessna 172] | Horas Totais: [1.450 h] |
 | Tipo de Serviço: [v Inspeção de 100 Horas / Preventiva                           ] |
 +------------------------------------------------------------------------------------+
 | [CHECKLIST DE ITENS]                                                              |
 |  [X] Drenagem de Combustível        [X] Troca de Filtro de Óleo                   |
 |  [ ] Inspeção do Trem de Pouso     [X] Teste dos Aviônicos                       |
 +------------------------------------------------------------------------------------+
 | [ASSINATURA DIGITAL / LIBERAÇÃO] Mecânico Responsável: [Eng. Silva - CHT 998877]   |
 +------------------------------------------------------------------------------------+
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção do Cabeçalho e Tabela de Identificação da OS

1. Crie um novo documento no Word.
2. Na guia **Layout**, defina margens estreitas (1,5 cm em todos os lados) para aproveitar a área útil da folha A4.
3. Insira uma Tabela de 3 colunas x 1 linha para o Cabeçalho:
   - Coluna 1: Imagem/Logotipo institucional da oficina.
   - Coluna 2: Texto Centralizado em negrito: `ORDEM DE SERVIÇO DE MANUTENÇÃO AERONÁUTICA (OS)`.
   - Coluna 3: `Nº da OS:` e `Data de Emissão:`.
4. Abaixo, insira uma Tabela de Identificação Técnica de 4 colunas x 3 linhas:
   - Linha 1: `Aeronave / Prefixo:` | `Modelo:` | `Fabricante:` | `Nº de Série (MSN):`
   - Linha 2: `Horas Totais (TSN):` | `Pousos Totais (CSN):` | `Base de Operação:` | `Proprietário:`
   - Linha 3: `Tipo de Manutenção:` (Ocupando 2 colunas) | `Prazo Estimado:` (Ocupando 2 colunas).

---

### Atividade 2: Inserção de Controles de Formulário e Dropdown

1. Acesse a guia **Desenvolvedor** (se não estiver ativa: *Arquivo -> Opções -> Personalizar Faixa de Opções -> Marcar "Desenvolvedor"*):
   - No campo `Tipo de Manutenção`: Insira o **Controle de Conteúdo de Caixa de Combinação** (Dropdown).
   - Clique em **Propriedades**: Adicione as opções: `Inspeção de 50 Horas`, `Inspeção de 100 Horas`, `Inspeção Anual (IAM)`, `Diretriz de Aeronavegabilidade (DA)`, `Manutenção Corretiva`.
   - No campo `Data`: Insira o **Controle de Conteúdo de Seletor de Data**.
   - No campo `Checklist`: Insira caixas de texto e **Controles de Conteúdo de Caixa de Seleção** `[ ]`.

---

### Atividade 3: Compartilhamento e Revisão Colaborativa no Office 365

1. Clique no botão **Compartilhar** no canto superior direito do Word.
2. Insira o e-mail institucional do colega de dupla.
3. Com o documento aberto nos dois computadores simultaneamente:
   - Ative a ferramenta **Controlar Alterações** (*Track Changes*) na guia **Revisão**.
   - O colega fará alterações no texto (adicionar uma linha de serviço).
   - Observe as alterações marcadas em vermelho/balões laterais.
   - Clique em **Aceitar Todas as Alterações** para consolidar o documento final.

---

## 4. DESAFIO PRÁTICO (MINI-PBL 1)

**Enunciado do Mini-PBL 1 (Peso: ~7,5% da Média Final):**
Em duplas no laboratório, desenvolva um **Modelo Completo de Ordem de Serviço (OS) e Ficha de Inspeção Pré-Voo/Preventiva** baseado nos padrões do manual [`docs/FAA-H-8083-31B`](docs/FAA-H-8083-31B%20-%20MANUAL%20DO%20TECNICO%20DE%20MANUREN%C3%87%C3%83O%20DE%20AERONAVE.pdf) e com checklist de tomada de decisão conforme [`docs/02-asas-do-conhecimento-tomada-de-decisao.pdf`](docs/02-asas-do-conhecimento-tomada-de-decisao.pdf), contendo:

1. **Cabeçalho Profissional:** Com tabela formatada, logotipo e código único de documento.
2. **Campos Interativos:** Dropdown com tipos de manutenção, seletor de data, campos de texto formatados para prefixo/modelo/horas.
3. **Tabela de Itens Inspecionados:** Com no mínimo 6 itens técnicos contendo caixas de seleção `[X]` para *Conforme*, *Não Conforme* e *Não Aplicável*.
4. **Tabela de Registro de Peças Aplicadas:** Colunas para `Item`, `Part Number (PN)`, `Descrição`, `Quantidade` e `Lote/Certificado`.
5. **Campo de Liberação / Retorno ao Serviço:** Com espaço para assinatura digital/identificação do responsável técnico e declaração de aprovação para voo.
6. **Entrega:** Envio do arquivo `.docx` modelo e do arquivo final gerado em formato `.pdf`.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO MS WORD

| Atalho de Teclado | Função no MS Word |
| :--- | :--- |
| `Ctrl + Shift + E` | Ativa/Desativa o **Controlar Alterações** (*Track Changes*) |
| `Alt + Shift + D` | Insere o campo de **Data Atual** dinâmico |
| `Ctrl + F2` | Exibe a Pré-visualização de Impressão |
| `F12` | Abre a caixa "Salvar Como" instantaneamente |
