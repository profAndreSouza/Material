# Aula 12 – Derivadas e Aplicações

## Conceito de Derivada

A **derivada** de uma função \$f(x)\$ representa a **taxa de variação instantânea** de \$f(x)\$ em relação a \$x\$ — isto é, o quanto \$f(x)\$ está mudando quando \$x\$ muda.

**Notação:**

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

Na prática, a derivada de \$f(x)\$ nos informa:

* A **inclinação** da curva no ponto \$x\$
* A **velocidade instantânea** (quando \$f\$ é uma posição e \$x\$ é tempo)


## Exemplo: Derivada de \$f(x) = x^2\$

```python
from sympy import symbols, diff

x = symbols('x')
f = x**2
f_prime = diff(f, x)
print("Derivada de x²:", f_prime)
```


## Regras Básicas de Derivação

| Função            | Derivada      |
| ----------------- | ------------- |
| \$c\$ (constante) | \$0\$         |
| \$x^n\$           | \$nx^{n-1}\$  |
| \$a^x\$           | \$a^x \ln a\$ |
| \$\ln x\$         | \$1/x\$       |
| \$\sin x\$        | \$\cos x\$    |
| \$\cos x\$        | \$- \sin x\$  |

### Exemplo com várias regras

```python
from sympy import sin, cos, ln, exp

f = 3*x**2 + sin(x) - ln(x) + exp(x)
f_prime = diff(f, x)
print("Derivada:", f_prime)
```

## Interpretação em Ciência de Dados

Em problemas de análise de séries temporais ou simulações físicas, as derivadas são úteis para:

* Estimar **velocidade** ou **aceleração**
* Calcular **taxas de crescimento**
* Detectar **pontos de inflexão** ou máximos/mínimos


## Projeto Prático: Estimar a velocidade instantânea de um carro

> Vamos usar dados de distância ao longo do tempo para calcular a **velocidade média** e a **velocidade instantânea estimada** usando diferenciação numérica.

```python
import numpy as np
import matplotlib.pyplot as plt

# Dados fictícios: tempo (s) e distância (m)
tempo = np.array([0, 1, 2, 3, 4, 5, 6])  # segundos
distancia = np.array([0, 2, 5, 9, 14, 20, 27])  # metros

# Derivada numérica usando diferenças finitas
velocidade = np.gradient(distancia, tempo)

# Plotando
plt.figure(figsize=(10, 4))

plt.subplot(1, 2, 1)
plt.plot(tempo, distancia, 'o-', label='Distância (m)')
plt.title('Distância x Tempo')
plt.xlabel('Tempo (s)')
plt.ylabel('Distância (m)')
plt.grid(True)
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(tempo, velocidade, 'o-', color='orange', label='Velocidade (m/s)')
plt.title('Velocidade Instantânea Estimada')
plt.xlabel('Tempo (s)')
plt.ylabel('Velocidade (m/s)')
plt.grid(True)
plt.legend()

plt.tight_layout()
plt.show()
```

## Extensões e Aplicações

* Estimar taxa de crescimento de usuários em uma plataforma.
* Detectar mudanças bruscas em sensores de IoT.
* Calcular tendência de queda ou subida em preços de ativos.


## Exercícios

1. Dada a função \$f(x) = x^3 - 6x^2 + 9x + 2\$, calcule a derivada e identifique os pontos de máximo e mínimo.
2. Com uma série temporal de temperatura por hora, estime a variação instantânea de temperatura.
3. Modele um cenário de aceleração de um robô com dados fictícios e plote velocidade e aceleração.
