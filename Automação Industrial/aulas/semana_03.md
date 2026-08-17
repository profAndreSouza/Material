# Aula 03: Teoria Geral dos Dispositivos Industriais (Sensores, Atuadores e Controladores)

## 1. Visão Geral & Objetivos Didáticos

Esta aula consolida a **fundamentação teórica rigorosa dos dispositivos físicos do chão de fábrica**, integrando sensores avançados (ópticos, acústicos e identificação por rádio frequência), atuadores de potência (pneumática, hidráulica e acionamentos elétricos) e a arquitetura interna dos controladores industriais (CLPs e IHMs).

### Objetivos de Aprendizagem:
- Compreender a física de operação de sensores ópticos (Fotoelétricos), acústicos (Ultrassônicos) e rastreabilidade por RFID.
- Analisar os princípios de atuação pneumática e acionamentos elétricos (Motores AC, Inversores de Frequência VFD e Servomotores).
- Dominar a arquitetura de hardware de um CLP, barramentos de E/S, isolamento óptico e o determinismo temporal do **Ciclo de SCAN**.

---

## 2. Sensores Avançados e Identificação Automática

### 2.1 Sensores Fotoelétricos (Ópticos)

Utilizam feixes de luz (visível ou infravermelha) emitidos por um LED ou laser e detectados por um fototransistor.

1. **Barreira Operacional (*Through-Beam*):**
   - Emissor e receptor ficam em invólucros separados alinhados frontalmente.
   - Detecção ocorre quando o objeto interrompe o feixe.
   - **Alcance:** Longo alcance (até dezenas de metros); imune a cores do objeto.
2. **Retroreflexivo (*Retro-reflective*):**
   - Emissor e receptor no mesmo invólucro; utilizam um espelho prismático para refletir o feixe.
   - **Filtro Polarizado:** Evita falsos disparos com objetos brilhantes ou metálicos.
3. **Difuso (*Diffuse-reflective*):**
   - O próprio objeto atua como refletor.
   - **Alcance:** Depende da cor, rugosidade e reflexividade da superfície do objeto.

### 2.2 Sensores Ultrassônicos

Detectam alvos transmitindo ondas sonoras de alta frequência (acima de $200\text{ kHz}$) e medindo o tempo de retorno do eco (*Time-of-Flight* - ToF).

$$\text{Distância } (d) = \frac{v_{\text{som}} \cdot t_{\text{eco}}}{2}$$

- **Zona Cega (*Blind Zone*):** Região imediatamente à frente da face sensora onde o sensor não consegue alternar a tempo entre o modo emissor e o modo receptor.
- **Aplicações:** Medição analógica contínua de nível de líquidos em tanques e medição de diâmetro de bobinas.

### 2.3 Rastreabilidade por Identificação por Rádio Frequência (RFID)

Substitui códigos de barras pela leitura de dados gravados em chips sem contato de visão direta.
- **Componentes:** Transponder (Tag/Etiqueta RFID), Antena e Leitor/Escritor RFID.
- **Frequências Industriais:** HF ($13,56\text{ MHz}$ - Norma ISO 15693 / ISO 14443) e UHF ($860 - 960\text{ MHz}$ - EPC Gen2).
- **Aplicações na Smart N1:** Rastreabilidade de *pallets* e caixas de produção gravando histórico de processos diretamente na tag RFID acoplada à peça.

---

## 3. Atuadores Industriais e Elementos Finais de Controle

### 3.1 Atuadores Pneumáticos e Válvulas Solenoide

- **Cilindros Pneumáticos:** Transformam a energia do ar comprimido (tipicamente $6\text{ bar}$) em movimento linear.
  - **Simples Ação:** Retorno por mola interna.
  - **Dupla Ação:** Pressão aplicada em ambas as câmaras para avanço e retorno.
- **Válvulas Direcionais Solenoide:** Controlam o fluxo de ar comprimido.
  - Exemplo: Válvula **5/2 vias duplo solenoide** (5 vias de conexão, 2 posições estáveis, comandada por impulsos elétricos de 24V DC).

### 3.2 Motores Elétricos, Inversores de Frequência (VFD) e Servomotores

| Atuador Elétrico | Princípio de Operação | Tipo de Controle | Aplicação Principal |
| :---: | :--- | :--- | :--- |
| **Motor Assíncrono Trifásico** | Campo magnético girante no estator induz corrente no rotor de gaiola. | On/Off via Contatores elétricos. | Bombas, ventiladores e esteiras fixas. |
| **Inversor de Frequência (VFD)** | Modula a frequência ($f$) e tensão do motor ($V/f = \text{constante}$). | Ajuste de velocidade contínuo e rampas de aceleração. | Esteiras com velocidade variável e economia de energia. |
| **Servomotor & Servo Driver** | Motor síncrono com encoder de malha fechada (*feedback* de posição). | Controle preciso de torque, velocidade e posição angular. | Robótica industrial, mesas CNC e dosadores. |

---

## 4. Arquitetura de Controladores Industriais (CLP) e IHM

### 4.1 Arquitetura Interna do CLP (Controlador Lógico Programável)

Um CLP é um computador robustecido projetado para operar em ambientes fabris hostis (ruídos elétricos, vibração, poeira e variação de temperatura).

```
   ┌─────────────────────────────────────────────────────────────┐
   │                         FONTE DE ALIMENTAÇÃO (24V DC)        │
   └──────────────────────────────┬──────────────────────────────┘
                                  │
┌─────────────────────────┐  ┌────▼────────────────────┐  ┌─────────────────────────┐
│ ENTREDAS DIGITAIS/ANALÓG.│  │   UNIDADE CENTRAL DE   │  │  SAÍDAS DIGITAIS/ANALÓG.│
│  - Isolamento Óptico    ├──►│    PROCESSAMENTO (CPU) │──►│   - Relés / Transistores│
│  - Filtros de Ruído     │  │  - Memória de Imagem   │  │   - Triacs / D/A        │
└─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘
```

### 4.2 O Ciclo de SCAN (Varredura Determinística)

A CPU do CLP executa repetidamente um ciclo determinístico de 4 etapas:

```
  ┌─────────────────────────────────────────────────────────────┐
  │ 1. Leitura das Entradas Físicas -> Atualiza Memória de Imagem │
  └──────────────────────────────┬──────────────────────────────┘
                                 │
  ┌──────────────────────────────▼──────────────────────────────┐
  │ 2. Execução do Programa do Usuário (Lógica ST, Ladder, etc.) │
  └──────────────────────────────┬──────────────────────────────┘
                                 │
  ┌──────────────────────────────▼──────────────────────────────┐
  │ 3. Atualização da Memória de Imagem de Saída -> Saídas Físicas│
  └──────────────────────────────┬──────────────────────────────┘
                                 │
  ┌──────────────────────────────▼──────────────────────────────┐
  │ 4. Diagnóstico de Hardware & Comunicação de Rede            │
  └─────────────────────────────────────────────────────────────┘
```

- **Tempo de SCAN ($T_{\text{scan}}$):** O tempo total para completar o ciclo (tipicamente entre $1\text{ ms}$ e $10\text{ ms}$). Garante o **determinismo temporal** exigido em processos fabris.

### 4.3 Interface Homem-Máquina (IHM / HMI)

Telas touch-screen industriais conectadas ao CLP via redes como Ethernet/IP, Modbus TCP ou Profinet. Permitem ao operador visualizar sinóticos da planta, ajustar *setpoints*, visualizar alarmes e monitorar grandezas em tempo real.

---

## 5. Questões de Fixação e Avaliação

1. **(Sensores Ópticos)** Por que os sensores fotoelétricos retroreflexivos modernos utilizam filtros polarizados e refletores prismáticos?
2. **(Ciclo de SCAN)** O que é a "Memória de Imagem de Entradas" no CLP e qual a vantagem de ler todas as entradas no início do ciclo em vez de lê-las dinamicamente durante a execução da lógica?
3. **(Acionamento Elétrico)** Qual a relação entre a frequência da tensão aplicada por um Inversor de Frequência (VFD) e a velocidade síncrona de um motor elétrico trifásico? Formulação: $N_s = \frac{120 \cdot f}{P}$.
