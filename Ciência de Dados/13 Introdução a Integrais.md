# Aula 13 – Introdução a Integrais

## Objetivo da Aula:

* Compreender o conceito de integral definida como **área sob uma curva**.
* Identificar funções primitivas.
* Aplicar integrais para resolver problemas reais de **distribuição de vendas** em sistemas.

## 1. Definição de Integral

A **integral definida** de uma função $f(x)$ em um intervalo $[a, b]$ representa a **área sob a curva** de $f(x)$, entre os pontos $x = a$ e $x = b$, **no plano cartesiano**.

$$
\int_a^b f(x)\,dx
$$

Essa área pode representar:

* A **distância total percorrida** se $f(x)$ for uma função de velocidade.
* O **volume total de vendas** se $f(x)$ representar vendas por hora.
* O **consumo acumulado** de CPU em um sistema, se $f(x)$ representar uso ao longo do tempo.

### Interpretação geométrica

Imagine que a função $f(x)$ descreve a linha de um gráfico. A **integral definida** calcula a área entre essa linha e o eixo $x$, dentro do intervalo definido. Se a curva estiver acima do eixo $x$, a área é positiva; se estiver abaixo, a área é negativa (por convenção matemática).

### Intuição computacional:

A integral pode ser pensada como a **soma de infinitas “fatias” muito finas** (retângulos com largura infinitesimal $dx$):

$$
\text{Área Total} \approx \sum f(x_i) \cdot \Delta x
$$

Em Python (com `scipy`), usamos métodos como a **Regra de Simpson** ou **Trapézios** para calcular essa soma de forma numérica.

## 2. Primitiva de uma Função

A **primitiva** (ou antiderivada) de uma função $f(x)$ é uma função $F(x)$ cuja derivada é $f(x)$. Em outras palavras:

$$
F'(x) = f(x)
$$

Isso significa que integrar $f(x)$ é o processo inverso de derivar $F(x)$:

$$
\int f(x)\, dx = F(x) + C
$$

> O **+ C** representa a constante de integração — porque várias funções podem ter a mesma derivada (ex: $x^2 + 3$, $x^2 - 7$, etc., todas têm derivada $2x$).

### Exemplos Simples:

* Se $f(x) = 2x$, então $F(x) = x^2$ é uma primitiva.
* Se $f(x) = \cos(x)$, então $F(x) = \sin(x)$ é uma primitiva.

## Relação entre Primitiva e Integral Definida

O **Teorema Fundamental do Cálculo** conecta os dois conceitos:

$$
\int_a^b f(x)\, dx = F(b) - F(a)
$$

Ou seja, se você conhece uma primitiva $F(x)$ da função $f(x)$, basta calcular o valor da primitiva nos extremos do intervalo $[a, b]$, e subtrair.

## Aplicações no Desenvolvimento de Sistemas

| Situação Prática   | $f(x)$                 | Interpretação da Integral      |
| ------------------ | ---------------------- | ------------------------------ |
| Vendas por hora    | Vendas no tempo        | Volume total de vendas         |
| Consumo de API     | Requisições por minuto | Carga acumulada no backend     |
| Velocidade de rede | Mbps                   | Dados totais transferidos      |
| Uso de CPU         | % de uso no tempo      | Consumo total de processamento |


## Aplicações de Integrais em Sistemas Computacionais

O conceito de **integral definida como área sob uma curva** tem aplicações diretas no desenvolvimento de sistemas, especialmente na análise e monitoramento de dados contínuos ao longo do tempo. Abaixo, listamos três aplicações fundamentais com exemplos práticos:

### 1. **Distância Percorrida a partir da Velocidade**

**Contexto:**
Em sistemas embarcados ou de monitoramento veicular (como em IoT ou apps de mobilidade), sensores capturam a velocidade de um veículo ao longo do tempo.

**Matematicamente:**
Se $v(t)$ representa a **velocidade** de um objeto em função do tempo, a **área sob o gráfico** de $v(t)$ entre $t = a$ e $t = b$ nos dá a **distância total percorrida**:

$$
\text{Distância} = \int_a^b v(t)\, dt
$$

**Aplicações práticas:**

* Cálculo de deslocamento em apps de transporte.
* Estimativa de autonomia de veículos elétricos com base em consumo.
* Monitoramento de movimentação em fábricas ou estoques automatizados.

### 2. **Volume de Transações em Sistemas Web**

**Contexto:**
Sistemas web frequentemente registram transações por unidade de tempo (ex: número de vendas, requisições por segundo, cliques).

**Matematicamente:**
Se $r(t)$ representa o **número de transações por unidade de tempo**, a **integral de $r(t)$** ao longo de um intervalo nos fornece o **total acumulado** de transações:

$$
\text{Transações Totais} = \int_a^b r(t)\, dt
$$

**Aplicações práticas:**

* Avaliar o desempenho de sistemas sob carga alta.
* Calcular o faturamento diário com base no histórico de vendas por hora.
* Ajustar o provisionamento de recursos (escalabilidade automática).

### 3. **Consumo Acumulado de Recursos (CPU, Memória, Energia)**

**Contexto:**
Monitoramento contínuo de recursos é essencial em sistemas distribuídos, containers, servidores em nuvem e dispositivos móveis.

**Matematicamente:**
Se $c(t)$ representa o **uso percentual de CPU**, ou consumo de energia, a **área sob o gráfico de $c(t)$** corresponde ao **uso acumulado**:

$$
\text{Uso acumulado} = \int_a^b c(t)\, dt
$$

**Aplicações práticas:**

* Otimização de escalonamento de containers.
* Faturamento em plataformas "pay-as-you-go".
* Previsão de sobrecarga e planejamento de upgrades.

### Exemplo de Integrais + Programação

Você pode simular todos esses cenários em **Python com NumPy e SciPy**, usando dados reais de sensores ou sistemas de monitoramento. Exemplo de integração numérica:

```python
from scipy.integrate import simps
import numpy as np

tempo = np.linspace(0, 24, 100)  # horas do dia
consumo_cpu = 40 + 30 * np.sin((np.pi / 12) * tempo)  # uso simulado em %

uso_acumulado = simps(consumo_cpu, tempo)  # integração pela Regra de Simpson

print(f"Consumo acumulado de CPU no dia: {uso_acumulado:.2f} %·h")
```


## Projeto Prático: **Área sob a Curva de Vendas Diárias**

### Contexto:

Uma aplicação web coleta dados de **vendas por hora** ao longo de um dia. Queremos saber:

* Qual foi o **volume total de vendas** (área sob a curva)?
* Em quais períodos houve **maior densidade de vendas**?


```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import simpson

# Simulando dados: horas do dia e vendas por hora (densidade de vendas)
horas = np.linspace(0, 24, 100)  # das 00h às 24h
vendas_por_hora = 20 * np.sin((np.pi / 12) * horas) + 30  # função simulada para densidade de vendas

# Visualização
plt.figure(figsize=(10, 5))
plt.plot(horas, vendas_por_hora, label='Vendas por Hora')
plt.fill_between(horas, vendas_por_hora, alpha=0.3, color='orange', label='Área sob a curva')
plt.title('Distribuição de Vendas ao Longo do Dia')
plt.xlabel('Hora do Dia')
plt.ylabel('Vendas por Hora')
plt.grid(True)
plt.legend()
plt.show()

# Cálculo da área sob a curva usando método de Simpson (aproximação da integral)
area_total = simpson(vendas_por_hora, horas)

print(f"Estimativa do volume total de vendas no dia: {area_total:.2f} unidades")
```

* A função representa **a densidade de vendas por hora**.
* A **área sob a curva** equivale ao **total acumulado de vendas** no dia.
* Alunos podem explorar diferentes formas de curva (picos de manhã, à noite, etc.).


### Exercícios:

1. **Modifique a função de vendas** para simular diferentes padrões (ex: e-commerce com pico à noite).
2. **Compare áreas** entre diferentes dias (alterando a curva).
3. **Adicione intervalo parcial**: calcular vendas só entre 9h e 18h.
4. **Desafio**: encontre a **hora com pico de vendas** e discuta estratégias que um sistema poderia adotar (ex: balanceamento de carga, cache de produtos populares).
