# Parte 2 – Introdução ao NumPy

## 7. O que é o NumPy e por que usá-lo em Ciência de Dados

O **NumPy (Numerical Python)** é uma biblioteca fundamental para cálculos numéricos em Python.
Enquanto as listas nativas do Python são versáteis, elas não são otimizadas para operações matemáticas em grandes volumes de dados.

Principais vantagens do NumPy:

* Estrutura de dados chamada **array**: semelhante a listas, mas muito mais eficiente para operações numéricas.
* Suporte a operações vetorizadas: é possível somar, multiplicar ou aplicar funções matemáticas em todos os elementos sem usar laços explícitos.
* Recursos estatísticos e matemáticos prontos (média, soma, variância, etc.).
* Base para outras bibliotecas de ciência de dados, como Pandas e Scikit-learn.

---

## 8. Arrays NumPy: Criação e Manipulação

Um **array NumPy** é uma coleção de valores do mesmo tipo organizados em uma ou mais dimensões.

Para começar a usar, é necessário importar a biblioteca:

```python
import numpy as np
```

Criação de arrays:

```python
# A partir de uma lista
arr = np.array([1, 2, 3, 4, 5])

# Arrays de múltiplas dimensões
matriz = np.array([[1, 2, 3], [4, 5, 6]])

# Arrays preenchidos automaticamente
zeros = np.zeros((3, 3))   # matriz 3x3 só com zeros
uns = np.ones((2, 4))      # matriz 2x4 só com uns
sequencia = np.arange(0, 10, 2)  # valores de 0 a 8, de 2 em 2
```

---

## 9. Operações Matemáticas e Estatísticas

Diferente das listas do Python, os arrays do NumPy permitem operações vetorizadas diretamente.

Exemplo:

```python
arr = np.array([10, 20, 30, 40])

# Operações matemáticas
print(arr + 5)   # soma 5 em cada elemento
print(arr * 2)   # multiplica cada elemento por 2

# Estatísticas
print(arr.mean())   # média
print(arr.max())    # valor máximo
print(arr.min())    # valor mínimo
```

Essas operações são muito mais rápidas e eficientes do que laços `for` tradicionais.

---

## 10. Indexação, Slicing e Reshape

Arrays NumPy permitem acessar e manipular subconjuntos de dados facilmente.

Exemplo de indexação e fatiamento:

```python
arr = np.array([10, 20, 30, 40, 50])

print(arr[0])     # primeiro elemento
print(arr[-1])    # último elemento
print(arr[1:4])   # do índice 1 até o 3
```

Alterando a forma de um array (`reshape`):

```python
matriz = np.arange(1, 10).reshape(3, 3)
print(matriz)
```

Isso transforma um vetor de 9 elementos em uma matriz 3x3.

---

## 11. Exemplos Práticos em Ciência de Dados

O NumPy é muito útil para lidar com grandes volumes de dados numéricos.

Exemplo 1: calcular médias de notas de alunos

```python
notas = np.array([8.5, 7.0, 9.0, 6.5, 5.0])
print("Média:", notas.mean())
print("Maior nota:", notas.max())
print("Menor nota:", notas.min())
```

Exemplo 2: conversão de listas em arrays para análise rápida

```python
# Lista comum
precos = [1200, 1500, 1700, 2000]

# Convertendo para array
precos_arr = np.array(precos)

# Aplicando um aumento de 10%
ajustados = precos_arr * 1.10
print("Preços ajustados:", ajustados)
```
