# Diagramas de Atividades

## Definição

Os **Diagramas de Atividades** fazem parte da linguagem de modelagem UML (Unified Modeling Language) e são utilizados para representar graficamente **fluxos de trabalho**, **processos de negócio** ou **lógicas de execução** de funcionalidades de um sistema. Eles são especialmente úteis durante a fase de **levantamento e especificação de requisitos**, pois ajudam a entender e validar o comportamento esperado do sistema, incluindo **decisões**, **paralelismos** e **exceções**.

**Referência às aulas:** Aula 10.

---

## 1. Elementos Fundamentais do Diagrama

Um diagrama de atividade é composto por elementos visuais que representam ações, decisões e o fluxo entre elas:

| Elemento             | Descrição                                                                           |
| -------------------- | ----------------------------------------------------------------------------------- |
| **Início**           | Representado por um círculo preenchido. Marca o início do processo.                 |
| **Atividade (ação)** | Representada por um retângulo com cantos arredondados. Mostra uma tarefa executada. |
| **Decisão**          | Representada por um losango. Permite caminhos diferentes conforme a condição.       |
| **Fluxo (seta)**     | Indica a transição entre atividades ou decisões.                                    |
| **Paralelismo**      | Representado por barras (horizontal/vertical) que indicam execução simultânea.      |
| **Finalização**      | Representado por um círculo com outro círculo ao redor. Indica o fim do processo.   |

---

## 2. Aplicações do Diagrama de Atividade

* Representar **processos de negócio** e **requisitos funcionais**.
* Descrever **lógicas de uso de sistemas** de forma compreensível para analistas e stakeholders.
* Validar cenários complexos envolvendo **fluxos alternativos**, **regras de decisão**, ou **ações paralelas**.
* Modelar **casos de uso detalhados**, servindo como complemento à descrição textual.

---

## 3. Exemplo: Processo de Realização de Pedido

Abaixo, descrevemos o fluxo da atividade de realizar um pedido em um totem digital:

### Fluxo de Atividades

1. **Início**
2. O cliente visualiza o cardápio.
3. O cliente escolhe os itens desejados.
4. O cliente personaliza o pedido (opcional).
5. O cliente confirma o pedido.
6. O cliente escolhe o método de pagamento.
7. **Decisão: Pagamento realizado com sucesso?**
     • **Sim:** O pedido é confirmado.
     • **Não:** Uma mensagem de erro é exibida e o cliente pode tentar novamente.
8. O pedido é enviado para a cozinha.
9. **Fim**

Esse fluxo pode ser representado visualmente em um diagrama UML, utilizando todos os elementos descritos acima.

---

## 4. Boas Práticas de Modelagem

* Evite diagramas excessivamente complexos; prefira a clareza visual.
* Nomeie claramente cada atividade e decisão.
* Use paralelismo apenas quando necessário (ex: pedidos e pagamentos simultâneos).
* Combine com **diagramas de casos de uso** e **diagramas de sequência** para documentação mais completa.

---

## 5. Comparativo com Outros Diagramas UML

| Diagrama     | Finalidade Principal                                    |
| ------------ | ------------------------------------------------------- |
| Casos de Uso | Identificar funcionalidades do sistema.                 |
| Sequência    | Representar interação entre objetos no tempo.           |
| Atividade    | Mostrar fluxo interno de um processo ou funcionalidade. |

---

## 6. Referências Bibliográficas

* PRESSMAN, Roger S. *Engenharia de Software*. 8. ed. São Paulo: McGraw-Hill, 2016.
* SOMMERVILLE, Ian. *Engenharia de Software*. 10. ed. São Paulo: Pearson, 2019.
* BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. *UML – Guia do Usuário*. 2. ed. Rio de Janeiro: Elsevier, 2006.
* LARMAN, Craig. *Utilizando UML e Padrões*. 3. ed. Porto Alegre: Bookman, 2007.
* FOWLER, Martin. *UML Essencial: Um Breve Guia para a Linguagem Padrão de Modelagem de Objetos*. Rio de Janeiro: Alta Books, 2005.
