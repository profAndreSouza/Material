# ROTEIRO DE AULA EXPANDIDO — SEMANA 07
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** MS Excel IV — Buscas Modernas no Office 365: `=PROCX()` (*XLOOKUP*), `=PROCV()` e `=ÍNDICE(CORRESP())` em Catálogos Técnicos de Peças (IPC)  
**Ambiente:** Laboratório de Informática (Microsoft 365 Online / Excel)  
**Articulação com o PPC:** EAA-009 (Informação Técnica) e Gestão de Peças e Suprimentos  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Compreender os mecanismos computacionais de busca e indexação em bases de dados relacionais dentro do Excel.
- Dominar a função revolucionária moderna do Microsoft 365: **`=PROCX()` (*XLOOKUP*)**, eliminando todas as restrições históricas do `PROCV`.
- Compreender e aplicar o clássico `=PROCV()` com correspondência exata (`0`/`FALSO`) e aproximada (`1`/`VERDADEIRO`).
- Dominar a combinação bidirecional `=ÍNDICE(CORRESP())` para cruzamento de matrizes de dados.
- Construir um **Sistema Automatizado de Consulta a Catálogos de Peças (IPC - *Illustrated Parts Catalog*)** com retorno instantâneo de Part Number, descrição, estoque e preço.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 A Revolução da Função `=PROCX()` no Office 365
Historicamente, o `PROCV` possuía 3 grandes limitações: só buscava da esquerda para a direita, quebrava se novas colunas fossem inseridas e exigia o tratamento de erro com `SEERRO` externo.
- **A nova função `=PROCX()` (exclusiva do Excel moderno / 365)** resolve tudo isso em uma única sintaxe elegante:

$$=PROCX(\text{pesquisa\_valor}; \text{pesquisa\_matriz}; \text{matriz\_retorno}; [\text{se\_não\_encontrada}]; [\text{modo\_correspondência}])$$

```
COMPARAÇÃO DIRETA DE SINTAXES:
 1. COM PROCV CLÁSSICO:
    =SEERRO(PROCV(G2; A2:E100; 4; FALSO); "NÃO ENCONTRADO")

 2. COM O MODERNO PROCX (OFFICE 365):
    =PROCX(G2; A2:A100; D2:D100; "PEÇA NÃO CADASTRADA")
     │          │         │          │
     ├── O que  ├── Onde  ├── O que  └── Mensagem se o código não existir
     │   buscar │   está  │   trazer
```

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Construção do Catálogo de Peças (IPC)

1. Crie uma aba na pasta de trabalho chamada `Catalogo_IPC`:
   - `A1`: `Fornecedor Homologado` | `B1`: `Part Number (PN)` | `C1`: `Descrição do Componente` | `D1`: `Sistema ATA` | `E1`: `Estoque` | `F1`: `Preço Unitário (USD)`
2. Cadastre 5 itens técnicos:
   - Linha 2: `Lycoming Parts` | `B2`: `LW-14078` | `C2`: `Vela de Ignição REM38E` | `D2`: `74 - Ignition` | `E2`: `48` | `F2`: `38,50`
   - Linha 3: `Champion Aero`   | `B3`: `CH48110-1`| `C3`: `Filtro de Óleo Spin-on`  | `D3`: `79 - Oil`      | `E3`: `12` | `F3`: `29,00`
   - Linha 4: `Goodyear Av`     | `B4`: `GY-600-6`  | `C4`: `Pneu Principal 6.00-6`   | `D4`: `32 - Landing`  | `E4`: `8`  | `F4`: `185,00`
   - Linha 5: `Garmin Avionics` | `B5`: `011-0028` | `C5`: `Transponder GTX 327`     | `D5`: `34 - Nav`      | `E5`: `2`  | `F5`: `1890,00`
   - Linha 6: `Parker Strat`    | `B6`: `MS28775`  | `C6`: `O-Ring de Vedação`       | `D6`: `29 - Hydraulic`| `E6`: `150`| `F6`: `2,40`

---

### Atividade 2: Construção do Painel de Consulta Rápida com `=PROCX()`

1. Crie outra aba chamada `Consulta_Rapida` (ou monte ao lado na mesma folha):
   - `H2`: `Digite o Part Number (PN):` -> `LW-14078` (célula `I2`)
   - `H4`: `Descrição do Item:`
   - `H5`: `Sistema ATA:`
   - `H6`: `Preço Unitário (USD):`
   - `H7`: `Fornecedor Homologado:` *(Observe que o fornecedor está à ESQUERDA do PN!)*
2. Na célula `I4` (Descrição), use `=PROCX()`:
   `=PROCX(I2; Catalogo_IPC!B2:B6; Catalogo_IPC!C2:C6; "CÓDIGO INEXISTENTE")`
3. Na célula `I5` (Sistema ATA):
   `=PROCX(I2; Catalogo_IPC!B2:B6; Catalogo_IPC!D2:D6; "CÓDIGO INEXISTENTE")`
4. Na célula `I6` (Preço Unitário):
   `=PROCX(I2; Catalogo_IPC!B2:B6; Catalogo_IPC!F2:F6; 0)`
5. Na célula `I7` (Fornecedor Homologado - Busca para a Esquerda):
   `=PROCX(I2; Catalogo_IPC!B2:B6; Catalogo_IPC!A2:A6; "NÃO ENCONTRADO")`
6. *Teste da Automação:* Digite `CH48110-1` ou `011-0028` em `I2`. Todos os dados e até o fornecedor à esquerda aparecem instantaneamente!

---

### Atividade 3: A Técnica Tradicional com `=ÍNDICE(CORRESP())`

Para entender planilhas legadas de empresas que ainda utilizam versões antigas do Excel:
1. Em outra célula de teste, recupere o fornecedor usando a combinação:
   `=ÍNDICE(Catalogo_IPC!A2:A6; CORRESP(I2; Catalogo_IPC!B2:B6; 0))`

---

## 4. EXERCÍCIO DE FIXAÇÃO INTENSIVO

**Desafio de Almoxarifado:**
Crie uma área de requisição de peças para uma Ordem de Serviço:
- O mecânico digita o `Part Number` e a `Quantidade Desejada`.
- A planilha traz automaticamente a `Descrição` e o `Preço Unitário` via `=PROCX()`.
- A planilha calcula o `Custo Total do Pedido` (`Quantidade * Preço`).
- Alerta com `=SE()`: Se `Quantidade Desejada > Estoque_Disponível`, exibir em vermelho `"ESTOQUE INSUFICIENTE"`, senão `"REQUISIÇÃO APROVADA"`.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS NO EXCEL

| Atalho de Teclado | Função no MS Excel |
| :--- | :--- |
| `Ctrl + T` | Converte o intervalo de células em uma **Tabela Oficial do Excel** |
| `Shift + F3` | Abre a caixa "Inserir Função" para navegar pelos argumentos |
| `Alt + Baixo` (na célula de busca) | Abre a lista histórica de valores digitados anteriormente |
