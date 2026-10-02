# 🕵️‍♂️ Guia de Laboratório Forense: Dissecação de Transações no Etherscan

* **Disciplina:** ISI022 — Sistemas de Informação e Tecnologias Emergentes  
* **Módulo 3:** Livros-Razão Distribuídos (DLT), Blockchain e Máquinas Virtuais Turing-Completas  
* **Aula 02:** Mecanismos de Consenso Distribuído, a Rede Ethereum e a EVM  
* **Docente:** Prof. Me. André Cassulino Araújo Souza  
* **Instituição:** Centro Estadual de Educação Tecnológica Paula Souza (CEETEPS)  
* **Duração Recomendada:** 40 minutos (Laboratório Prático Dirigido)

---

## 🎯 Objetivos de Aprendizagem
1. **Auditar e dissecar transações reais** em exploradores de bloco públicos ([Sepolia Etherscan](https://sepolia.etherscan.io/) ou [Ethereum Mainnet](https://etherscan.io/)).
2. **Diferenciar na prática** contas de usuários humanos (**EOA**) e contas de código imutável (**Smart Contracts**).
3. **Compreender a mecânica do Gas:** Relação entre *Gas Limit*, *Gas Used*, estorno de sobras e a queima de ETH pela **EIP-1559**.
4. **Decodificar dados de entrada (*Calldata / MethodID*)** e eventos emitidos em disco (*Logs*).
5. **Comprovar o Rollback Atômico da EVM** diante de falhas de execução ou *Out of Gas*.

---

## 🧭 Etapa 0: Acesso e Ambientação no Explorador

1. Abra o navegador e acesse um dos exploradores oficiais:
   * **Ambiente de Testes (Recomendado):** [https://sepolia.etherscan.io/](https://sepolia.etherscan.io/)
   * **Ambiente de Produção (Mainnet):** [https://etherscan.io/](https://etherscan.io/)
2. Na página inicial, localize os blocos de **"Latest Transactions"** (Últimas Transações) ou acesse o menu superior em **Blockchain $\to$ View Txns**.
3. Escolha transações com base nos três cenários de auditoria detalhados a seguir.

---

## 📍 Caso 1: Auditoria de Transferência Simples (EOA $\to$ EOA)

> **Conceito Teórico a Validar:** Transferências nativas de saldo (Ether) entre carteiras de pessoas físicas não executam código na EVM; consomem exatamente um montante fixo estipulado no protocolo de **21.000 unidades de Gas**.

### Passo a Passo de Execução:
1. **Localizar a Transação:**
   - Na lista de transações recentes, identifique uma linha onde a coluna **Method** esteja em branco ou marcada como `Transfer`.
   - Clique sobre o **Txn Hash** (identificador hexadecimal de 66 caracteres iniciado por `0x...`).
2. **Verificar os Tipos de Conta:**
   - Inspecione os campos **From** (Remetente) e **To** (Destinatário).
   - Constatar que **nenhum** dos dois endereços possui ícone de contrato ou papel; ambos são contas externas controladas por chave privada (*EOA*).
3. **Auditar o Consumo Estrito de Gas:**
   - Clique em **"Click to show more"** (ou role a página até a seção de detalhes de Gas).
   - Localize o campo **Gas Limit & Usage by Txn**:
     - Constatar que **Gas Limit = 21,000** e **Gas Used = 21,000 (100% de ocupação)**.
4. **Analisar a Dinâmica EIP-1559:**
   - Localize os campos de taxas:
     - **Base Fee:** Taxa mínima do bloco (em Gwei).
     - **Priority Fee:** Gorjeta paga ao validador (em Gwei).
     - **Burnt Fees:** O valor em ETH correspondente a $21.000 \times \text{Base Fee}$, que foi **destruído permanentemente** da oferta monetária global.

---

## 📍 Caso 2: Chamada a Smart Contract (Token ERC-20, Swap ou NFT)

> **Conceito Teórico a Validar:** Interações com contratos inteligentes executam instruções (*opcodes*) dentro da EVM. O usuário estipula um teto de segurança (*Gas Limit*), a EVM consome apenas o necessário para executar a lógica (*Gas Used*), o troco é devolvido e a operação emite registros em disco (*Logs de Eventos*).

### Passo a Passo de Execução:
1. **Localizar a Transação:**
   - Na listagem de transações, selecione uma linha com método explícito (ex: `Transfer`, `SwapExactTokensForTokens`, `Mint`, `Approve`).
2. **Identificar o Contrato Inteligente:**
   - Inspecione o campo **To**:
     - Observe o ícone de folha de documento com o selo `Contract [0x...]`.
3. **Auditar o Troco de Gas (Refund):**
   - Abra a seção **Show more**:
     - Observe que o **Gas Limit** foi definido com margem preventiva (ex: `150.000 Gas`).
     - O **Gas Used by Txn** foi sensivelmente menor (ex: `64.210 Gas` ou ~42%).
     - **Constatação de SI:** O protocolo debitou antecipadamente o limite, processou a lógica e estornou automaticamente os `85.790 Gas` não utilizados de volta para o saldo da carteira do remetente.
4. **Decodificar a Calldata (Input Data):**
   - Role até o campo **Input Data**:
     - Clique no seletor **"View Input As" $\to$ "Default View"**.
     - Identifique o **MethodID** (os 4 primeiros bytes / 8 caracteres hexadecimais após `0x`, correspondentes ao hash Keccak-256 da assinatura da função Solidity).
     - Identifique os parâmetros de entrada passados (endereço de destino `_to`, quantidade em Wei `_value`, etc.).
5. **Auditar Logs de Eventos (Integração com Sistemas Externos):**
   - No topo da transação, clique na aba **"Logs"**.
   - Analise os eventos emitidos (ex: evento `Transfer(from, to, value)`):
     - **Constatação de SI:** Esses eventos gravados na árvore de recibos (*Receipts Root*) são consumidos em tempo real por Webhooks, APIs e sistemas ERP tradicionais para atualização automática de estoques e saldos.

---

## 📍 Caso 3: Auditoria de Falha de Execução (Rollback Atômico e Out of Gas)

> **Conceito Teórico a Validar:** A EVM atua como uma máquina de estados transacional atômica ($\sigma_{t+1} = \Upsilon(\sigma_t, T)$). Se uma instrução falha ou o Gas acaba (*Halting Problem*), a EVM reverte todas as alterações de variáveis ($\sigma_{t+1} = \sigma_t$), protegendo os fundos principais, mas cobrando as taxas computacionais despendidas pelos nós.

### Passo a Passo de Execução:
1. **Localizar uma Transação com Erro:**
   - Na listagem ou em blocos recentes, procure uma transação com ícone de alerta vermelho: `Fail` ou `Warning`.
   - *(Dica didática: transações em exchanges descentralizadas como Uniswap frequentemente revertem por alteração abrupta de cotação / Slippage ou falta de saldo).*
2. **Identificar o Motivo do Erro:**
   - No topo, no campo **Status**, analise a mensagem de diagnóstico:
     - `Fail with error 'Execution Reverted'` (reversão provocada por cláusula `require()` ou `revert()` no código Solidity); **OU**
     - `Fail with error 'Out of Gas'` (o combustível acabou antes do fim da execução do algoritmo).
3. **Comprovar o Rollback Atômico (Proteção de Fundos):**
   - Inspecione o campo **Value** (quantidade de ETH transferida):
     - Constatar que o valor **não foi transferido**; o saldo permaneceu na carteira do remetente porque o estado da rede retrocedeu ao instante pré-transação.
4. **Comprovar a Cobrança Punitiva de Gas:**
   - Inspecione o campo **Transaction Fee**:
     - Em falhas por *Out of Gas*, **100% do Gas Limit foi cobrado e retido pelo validador**.
     - **Constatação de SI:** Se a rede não cobrasse o gas gasto em loops infinitos ou códigos maliciosos, invasores poderiam paralisar a infraestrutura mundial gratuitamente através de ataques de Negação de Serviço (DoS).

---

## 📋 Ficha Técnica de Auditoria Forense (Entregável da Atividade)

Preencha a ficha técnica abaixo com os dados reais de uma das transações dissecadas:

| Item Auditado | Campo Correspondente no Etherscan | Valor Coletado na Transação |
| :--- | :--- | :--- |
| **1. Identificador Global** | Transaction Hash | `0x...` |
| **2. Status da Transação** | Status | `Success` ou `Fail` |
| **3. Altura do Bloco** | Block Height | `Block #...` |
| **4. Endereço Remetente** | From (Tipo de Conta: EOA) | `0x...` |
| **5. Endereço Destino** | To (Tipo: EOA ou Contrato) | `0x...` |
| **6. Valor Principal** | Value | `... ETH` |
| **7. Teto de Segurança** | Gas Limit | `...` |
| **8. Consumo Real** | Gas Used by Transaction | `...` (ex: `... %`) |
| **9. Taxa Básica do Bloco**| Base Fee (Gas Fees) | `... Gwei` |
| **10. Gorjeta do Validador**| Priority Fee (Max Priority) | `... Gwei` |
| **11. Moeda Destruída** | Burnt Fees (EIP-1559) | `... ETH` |
| **12. Assinatura da Função** | MethodID (Input Data) | `0x...` (primeiros 4 bytes) |

---

## 💡 Perguntas para Discussão e Raciocínio Crítico em SI

1. **Por que o *Gas Used* de uma transferência simples de ETH é sempre exatamente 21.000 unidades, independentemente do valor transferido ser 0,01 ETH ou 1.000 ETH?**
2. **Se um usuário submeter um Smart Contract contendo um loop infinito (`while (true) {}`), o que o explorador de blocos mostrará em *Status*, *Gas Used* e *Transaction Fee*?**
3. **Como a queima da *Base Fee* introduzida pela EIP-1559 altera o modelo econômico da rede Ethereum em períodos de alto congestionamento?**
4. **Por que os ERPs corporativos dependem mais da leitura da aba *Logs* do que da leitura direta do campo *Value* da transação?**
