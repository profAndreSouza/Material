# Aula 11 – Limites e Continuidade para Modelagem

## Conceito de Limite

Em matemática, o **limite** de uma função descreve o comportamento de \$f(x)\$ quando \$x\$ se aproxima de um determinado valor.

**Notação:**

$$
\lim_{x \to a} f(x)
$$

Lê-se: “o limite de \$f(x)\$ quando \$x\$ tende a \$a\$”.

### Exemplo 1: Limite simples

$$
\lim_{x \to 2} (3x + 1) = 7
$$

Podemos verificar isso em Python:

```python
from sympy import Symbol, limit

x = Symbol('x')
f = 3*x + 1
lim_val = limit(f, x, 2)
print("Limite:", lim_val)
```

## Limites Laterais

* **Limite à esquerda**: $\lim_{x \to a^-} f(x)$
* **Limite à direita**: $\lim_{x \to a^+} f(x)$

Para que o **limite exista**, os dois limites laterais devem ser iguais.

### Exemplo 2: Função com limite diferente nos lados

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 400)
y = np.where(x < 0, 1, 2)

plt.plot(x, y, label='f(x)', color='blue')
plt.axvline(0, color='gray', linestyle='--', label='x = 0')
plt.title('Função com Limite Diferente nos Lados')
plt.xlabel('x')
plt.ylabel('f(x)')
plt.grid(True)
plt.legend()
plt.show()
```


## Continuidade

Uma função \$f(x)\$ é **contínua em \$x = a\$** se:

1. \$f(a)\$ está definida.
2. \$\lim\_{x \to a} f(x)\$ existe.
3. \$\lim\_{x \to a} f(x) = f(a)\$.

> Se qualquer um desses critérios falhar, a função **não é contínua** em \$a\$.

## Tipos de Descontinuidade

1. **Removível**: ponto isolado fora do gráfico, mas o limite existe.
2. **Salto (Discreta)**: limites laterais diferentes.
3. **Infinita**: tende ao infinito (ex: divisão por zero).


## Projeto Prático: Visualizar comportamento de funções com descontinuidades

> **Objetivo**: simular e visualizar descontinuidades para entender onde os limites falham — importante em modelagem de dados com quebras ou falhas nos sensores, mudanças de regime, etc.

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 500)
y1 = np.piecewise(x, [x < 0, x >= 0], [lambda x: x + 1, lambda x: 2 - x])
y2 = np.where(x != 0, 1/x, np.nan)  # descontinuidade infinita

fig, axs = plt.subplots(1, 2, figsize=(12, 4))

# Descontinuidade por salto
axs[0].plot(x, y1, color='green')
axs[0].axvline(0, color='gray', linestyle='--')
axs[0].set_title('Descontinuidade por Salto')
axs[0].grid(True)

# Descontinuidade infinita
axs[1].plot(x, y2, color='red')
axs[1].axvline(0, color='gray', linestyle='--')
axs[1].set_ylim(-10, 10)
axs[1].set_title('Descontinuidade Infinita (f(x) = 1/x)')
axs[1].grid(True)

plt.tight_layout()
plt.show()
```


## Exercícios

1. **Sensores com falhas**: simule uma função contínua com uma **descontinuidade de salto** e identifique o ponto onde os dados devem ser tratados.
2. **Análise de rupturas em séries temporais**: use funções com descontinuidade para representar mudanças bruscas de regime (ex: queda de acessos, ruptura de tendência).
3. **Pré-processamento**: onde ocorrem descontinuidades, aplique estratégias de imputação ou suavização.
