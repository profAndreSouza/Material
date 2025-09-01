# Parte 1 – Fundamentos de Python

## 1. Introdução ao Python e ao Google Colab

Python é uma linguagem de programação **interpretada**, ou seja, o código é executado linha por linha, sem a necessidade de compilação. Isso torna o aprendizado mais simples e a depuração de erros mais rápida.

Ela é amplamente utilizada em **ciência de dados** por três motivos principais:

1. Sintaxe simples e próxima da linguagem humana.
2. Grande número de bibliotecas prontas para análise e visualização de dados.
3. Comunidade ativa e vasta documentação.

O **Google Colab** é um ambiente gratuito para programar em Python na nuvem, sem necessidade de instalar nada no computador. Basta ter uma conta Google.

* Para acessar: [https://colab.research.google.com](https://colab.research.google.com)
* Você pode criar novos notebooks, escrever código em células e ver o resultado imediatamente.

---

## 2. Variáveis, Tipos de Dados e Operações Básicas

Uma **variável** é um espaço de memória identificado por um nome, usado para armazenar informações.
Exemplo: idade, altura, nome de uma pessoa.

Em Python, não é necessário declarar o tipo da variável explicitamente. O interpretador reconhece automaticamente:

* **int** → números inteiros (10, -5, 0)
* **float** → números decimais (3.14, -2.7)
* **str** → textos, chamados de *strings* ("Maria", "Ciência de Dados")
* **bool** → valores lógicos (True ou False)

Também é possível realizar operações aritméticas (soma, subtração, multiplicação, divisão) e manipular textos.

Exemplo:

```python
# Variáveis numéricas
idade = 20
altura = 1.75

# String
nome = "Maria"

# Booleano
aprovado = True
```

---

## 3. Estruturas de Decisão e Laços

Na ciência de dados, muitas vezes precisamos **tomar decisões** (ex.: aprovar ou reprovar um aluno de acordo com a nota).
Isso é feito com estruturas condicionais como `if`, `elif` e `else`.

Além disso, quando lidamos com coleções de dados (listas de notas, idades, preços), precisamos **repetir ações** sobre cada elemento. Para isso, utilizamos **laços de repetição**, como `for` e `while`.

Exemplo de decisão:

```python
nota = 6.5

if nota >= 7:
    print("Aprovado")
else:
    print("Reprovado")
```

Exemplo de laço:

```python
notas = [8.5, 7.0, 9.0, 6.5]

for n in notas:
    print("Nota:", n)
```

---

## 4. Estruturas de Dados em Python

Python oferece diferentes formas de organizar dados:

* **Listas**: coleções ordenadas e mutáveis.
* **Tuplas**: coleções ordenadas e imutáveis.
* **Dicionários**: pares de chave e valor.
* **Conjuntos (sets)**: coleções não ordenadas, sem elementos repetidos.

Essas estruturas são a base para manipulação de dados antes de avançarmos para bibliotecas mais sofisticadas como NumPy e Pandas.

Exemplo:

```python
# Lista
notas = [8.5, 7.0, 9.0]
notas.append(6.5)

# Tupla
coordenadas = (10, 20)

# Dicionário
aluno = {"nome": "Maria", "idade": 20, "nota": 8.5}

# Conjunto
materias = {"Matemática", "Português", "Matemática"}
```

---

## 5. Funções e Organização do Código

Uma função é um bloco de código reutilizável que recebe entradas (parâmetros), realiza um processamento e retorna um resultado.

Em ciência de dados, usamos funções para criar rotinas como cálculo de médias, normalização de valores ou filtragem de dados.

Exemplo:

```python
def calcular_media(notas):
    return sum(notas) / len(notas)

notas = [8.5, 7.0, 9.0, 6.5]
print("Média da turma:", calcular_media(notas))
```

---

## 6. Manipulação de Arquivos

Grande parte dos dados está armazenada em arquivos, principalmente no formato **CSV (Comma-Separated Values)**.
Python permite criar, abrir, ler e escrever arquivos de forma simples.

Exemplo criando e lendo um CSV:

```python
# Criando um arquivo CSV
with open("notas.csv", "w") as f:
    f.write("nome,nota\n")
    f.write("Maria,8.5\n")
    f.write("João,6.5\n")

# Lendo o arquivo
with open("notas.csv", "r") as f:
    conteudo = f.read()
    print(conteudo)
```
