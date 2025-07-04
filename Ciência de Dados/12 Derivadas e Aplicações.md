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


## Projeto Prático 1: Estimar a velocidade instantânea de um carro

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

## Projeto Prático 2: Estimativa de Taxa de Crescimento de Usuários em uma Aplicação Web

> Usar diferenciação numérica (derivada) para estimar a velocidade de crescimento de usuários ativos ao longo do tempo — algo comum em sistemas de monitoramento, analytics ou dashboards de produtos digitais.

```python
import numpy as np
import matplotlib.pyplot as plt

# Dados simulados: tempo em dias e número de usuários ativos
dias = np.array([0, 1, 2, 3, 4, 5, 6])
usuarios = np.array([50, 80, 120, 180, 260, 360, 480])  # crescimento de usuários

# Estimando a taxa de crescimento (derivada numérica)
crescimento = np.gradient(usuarios, dias)

# Visualização
plt.figure(figsize=(10, 4))

plt.subplot(1, 2, 1)
plt.plot(dias, usuarios, 'o-', label='Usuários Ativos')
plt.title('Usuários Ativos ao Longo do Tempo')
plt.xlabel('Dias')
plt.ylabel('Total de Usuários')
plt.grid(True)
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(dias, crescimento, 'o-', color='green', label='Taxa de Crescimento')
plt.title('Estimativa de Velocidade de Crescimento')
plt.xlabel('Dias')
plt.ylabel('Usuários por Dia')
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


## Material de Apoio

1. **GRANVILLE, William Anthony.**
   *Cálculo Diferencial e Integral.* 2. ed. São Paulo: Blucher, 2012.

2. **ANTON, Howard; BIVENS, Irl; DAVIS, Stephen.**
   *Cálculo.* 10. ed. Porto Alegre: Bookman, 2019.

3. **GUIDORIZZI, Hamilton Luiz.**
   *Um Curso de Cálculo – Volume 1.* 6. ed. Rio de Janeiro: LTC, 2010.

4. **LEITHOLD, Louis.**
   *O Cálculo com Geometria Analítica – Volume 1.* 6. ed. São Paulo: Harbra, 1994.

5. **STEWART, James.**
   *Cálculo.* 8. ed. São Paulo: Cengage Learning, 2018.
