# Aula 02: Prática de Laboratório & Guia Teórico de Reconhecimento Físico de Componentes

## 1. Visão Geral & Objetivos Didáticos

Esta aula foi dedicada ao **reconhecimento físico presencial no laboratório**, permitindo a identificação tátil e visual dos componentes de automação no chão de fábrica da planta **Smart N1**. Este guia serve como fonte permanente de consulta teórica sobre os sensores discretos de proximidade e chaveamento.

### Objetivos de Aprendizagem:
- Identificar fisicamente e classificar sensores de proximidade discretos (Eletromecânicos, Indutivos e Capacitivos).
- Compreender o princípio físico de operação e as limitações de cada tecnologia de sensoriamento.
- Dominar a polarização elétrica de saídas digitais (**PNP vs NPN**) e contatos (**NA / NO vs NF / NC**).
- Realizar diagnósticos elétricos e testes práticos em bancadas industriais.

---

## 2. Conteúdo Teórico de Referência

### 2.1 Sensores Discretos Eletromecânicos (Chaves Fim de Curso / Microswitches)

As **chaves fim de curso** (*limit switches*) utilizam contato mecânico direto com o objeto acionador.

- **Princípios de Operação:** O impacto físico desloca um atuador mecânico (rolete, pino, alavanca) que comuta mecanicamente um conjunto de contatos elétricos.
- **Tipos de Contatos:**
  - **NA / NO (*Normally Open* / Normal Aberto):** O circuito permanece aberto até que haja o acionamento mecânico.
  - **NF / NC (*Normally Closed* / Normal Fechado):** O circuito permanece fechado e se abre ao ser acionado (usado por segurança em circuitos de emergência).
- **Vantagens:** Imunidade total a ruídos eletromagnéticos, imunidade a cor de material ou constantes dielétricas, alta capacidade de condução de corrente.
- **Desvantagens:** Desgaste mecânico por atrito, ricochete de contato (*contact bounce*), menor frequência de resposta e necessidade de contato físico.

### 2.2 Sensores de Proximidade Indutivos

Os sensores indutivos são projetados exclusivamente para a detecção de **materiais metálicos** (condutores elétricos) sem contato físico.

- **Princípio Físico de Funcionamento:**
  1. Um circuito oscilador interno (composto por uma bobina e um capacitor) gera um campo magnético de alta frequência na face sensora do sensor.
  2. Quando um objeto metálico adentra esse campo magnético, são induzidas **correntes de Foucault** (*Edged currents*) na superfície do metal.
  3. Essas correntes absorvem energia do campo magnético, reduzindo a amplitude da oscilação do circuito.
  4. Um circuito disparador (*Schmitt Trigger*) detecta essa atenuação da amplitude e comuta o estágio de saída digital do sensor.
- **Fator de Redução por Tipo de Metal ($K_r$):**
  - A distância nominal de detecção ($S_n$) é especificada para **Aço Carbono Fe 360** ($K_r = 1,0$).
  - Para outros metais, multiplica-se $S_n$ pelo fator:
    - **Aço Inoxidável:** $0,60 - 0,80$
    - **Latão:** $0,40 - 0,50$
    - **Alumínio:** $0,30 - 0,40$
    - **Cobre:** $0,25 - 0,35$

### 2.3 Sensores de Proximidade Capacitivos

Os sensores capacitivos detectam a presença de **qualquer objeto** (metais, plásticos, vidro, madeira, líquidos, grãos) com base em sua constante dielétrica ($\epsilon_r$).

- **Princípio Físico de Funcionamento:**
  1. A face sensora consiste em duas placas metálicas concêntricas que formam um capacitor aberto.
  2. O ar atua como dielétrico inicial com constante $\epsilon_r \approx 1$.
  3. Quando qualquer alvo aproxima-se da face sensora, ele altera a permissividade dielétrica do meio, alterando a capacitância do conjunto ($C = \frac{\epsilon \cdot A}{d}$).
  4. O aumento da capacitância faz iniciar a oscilação de um circuito RC interno, comutando o circuito de saída.
- **Aplicações Típicas:** Detecção de nível de líquidos em reservatórios através de paredes não metálicas (ex: tubos acrílicos), presença de garrafas PET e caixas de papelão.

---

## 3. Esquemas Elétricos e Polarização (NPN vs PNP)

Nos sensores de 3 fios em corrente contínua (24V DC):

```
Conexão Padrão de Cores (IEC 60947-5-2):
  - Marrom (BN): V+ (+24V DC)
  - Azul (BU):   GND (0V DC)
  - Preto (BK):  Sinal de Saída (OUT)
```

| Tipo de Saída | Comportamento do Transistor de Saída | Carga Conectada Entre | Aplicação Principal |
| :---: | :--- | :--- | :--- |
| **PNP (Sourcing)** | Chaveia o polo **positivo (+24V)** para a linha de sinal (BK). | Sinal (BK) e **GND (0V)**. | Padrão dominante na Europa e no Brasil (CLPs Siemens, Rockwell). |
| **NPN (Sinking)** | Chaveia o polo **negativo (0V)** para a linha de sinal (BK). | Sinal (BK) e **+24V**. | Padrão comum na Ásia (CLPs Omron, Mitsubishi). |

---

## 4. Diagnóstico de Laboratório e Questões de Fixação

### Roteiro de Verificação Rápida em Bancada:
1. Alimente o sensor com 24V DC (Marrom = +24V, Azul = 0V).
2. Meça com o multímetro a tensão entre o fio Preto (Sinal) e o Azul (GND):
   - Se for sensor **PNP NA**: sem objeto = 0V; com objeto = +24V.
   - Se for sensor **NPN NA**: sem objeto = +24V (em aberto/pull-up); com objeto = 0V.
3. Avalie o LED indicador de estado no corpo do sensor.

### Exercícios de Fixação:
1. Um sensor indutivo com distância nominal $S_n = 10\text{ mm}$ precisa detectar uma peça de alumínio ($K_r = 0,35$). Qual a distância máxima efetiva de atuação desse sensor?
2. Em um painel de automação onde o cartão de entrada do CLP é do tipo *Sink* (espera receber +24V na entrada digital), qual tipo de sensor de 3 fios deve ser instalado: **PNP** ou **NPN**? Justifique.
3. Qual a principal vantagem do sensor capacitivo sobre o indutivo na triagem de embalagens industriais?
