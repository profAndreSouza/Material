# 1. Camada Física

## 1. Introdução à Camada 1 do Modelo OSI

A Camada 1 do Modelo OSI é conhecida como **Camada Física**. Essa camada define os meios de transmissão de dados em uma rede, estabelecendo os padrões elétricos, ópticos, mecânicos e funcionais necessários para a comunicação entre dispositivos.

## 2. Funções Principais da Camada Física

- **Transmissão de Bits**: Converte os dados em sinais elétricos, ópticos ou radiofrequência.
- **Definição de Meios Físicos**: Especifica os tipos de cabos, conectores e protocolos de transmissão.
- **Codificação de Dados**: Determina como os bits serão representados no meio físico.
- **Modulação e Multiplexação**: Permite a transmissão simultânea de vários sinais no mesmo meio físico.

## 3. Meios de Transmissão

Os meios físicos podem ser classificados em:

### a) Meios Guiados

- **Par Trançado (Twisted Pair - UTP/STP)**: Utilizado em redes Ethernet.
- **Cabo Coaxial**: Usado em redes mais antigas e sistemas de TV a cabo.
- **Fibra Óptica**: Alta velocidade e imune a interferências eletromagnéticas.

### b) Meios Não Guiados

- **Radiofrequência (Wi-Fi, Bluetooth, LTE, 5G)**.
- **Infravermelho (IR)**.
- **Micro-ondas (Links Satelitais e Ponto a Ponto).**

## 4. Modulação e Multiplexação

### Modulação

A modulação é o processo de alterar características de uma onda portadora (frequência, amplitude ou fase) para transportar informação. Os principais tipos de modulação incluem:

- **AM (Modulação de Amplitude)**: A amplitude da onda portadora é alterada conforme o sinal de informação.
- **FM (Modulação de Frequência)**: A frequência da onda portadora varia de acordo com o sinal transmitido.
- **PM (Modulação de Fase)**: A fase da onda portadora é modificada conforme o sinal de entrada.

### Multiplexação

A multiplexação é uma técnica que permite a transmissão de múltiplos sinais sobre um único meio físico, otimizando o uso do canal. Os principais tipos de multiplexação incluem:

- **FDM (Multiplexação por Divisão de Frequência)**: Divide a largura de banda do canal em subfaixas de frequência.
- **TDM (Multiplexação por Divisão de Tempo)**: Aloca faixas de tempo para diferentes transmissões.
- **WDM (Multiplexação por Divisão de Comprimento de Onda)**: Usado em fibra óptica para enviar vários sinais simultaneamente.
- **CDM (Multiplexação por Divisão de Código)**: Cada transmissão recebe um código exclusivo para diferenciar sinais no mesmo meio.

## 5. Codificação de Dados na Camada Física

A codificação é fundamental para representar os dados no meio físico. Alguns métodos comuns incluem:

- **NRZ (Non-Return-to-Zero)**: Mantém o mesmo nível de voltagem para cada bit transmitido.
- **Manchester Encoding**: Utiliza transições de sinal para indicar bits.
- **4B/5B e 8B/10B**: Adiciona bits extras para garantir sincronização e evitar sequências problemáticas.

## 6. Exemplo de Implementação em Python

A seguir, um código simples para simular a codificação Manchester:

```python
import matplotlib.pyplot as plt

def manchester_encoding(bits):
    encoded_signal = []
    time = []
    t = 0
    for bit in bits:
        if bit == '0':
            encoded_signal.extend([-1, 1])
        else:
            encoded_signal.extend([1, -1])
        time.extend([t, t+1])
        t += 1
    return time, encoded_signal

# Exemplo de transmissão de bits
bits = "1011001"
time, signal = manchester_encoding(bits)

# Plotando o sinal codificado
plt.step(time, signal, where='mid', linewidth=2)
plt.ylim(-1.5, 1.5)
plt.xlabel('Tempo')
plt.ylabel('Nível de Sinal')
plt.title('Codificação Manchester')
plt.grid()
plt.show()

```

## 7. Conclusão

A Camada Física do Modelo OSI é a base para a comunicação em redes de computadores. Ela define como os bits são transmitidos, quais meios são utilizados e como os sinais são codificados para evitar erros. O entendimento dessa camada é essencial para projetar redes eficientes e solucionar problemas de conexão.