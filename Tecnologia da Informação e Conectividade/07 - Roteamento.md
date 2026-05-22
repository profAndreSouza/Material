# Roteamento Estático e NAT no Packet Tracer

## Objetivo

Configurar uma topologia de rede utilizando roteamento estático e NAT no Packet Tracer, garantindo comunicação entre redes internas e externas.

O exercício será dividido em duas etapas:

* **Etapa 1:** configuração inicial junto com o professor;
* **Etapa 2:** expansão da topologia com uma nova rede externa.

---

# Etapa 1 – Configuração Inicial

## Cenário

Uma empresa possui duas redes distintas conectadas por roteadores.

* A **Rede A** utiliza endereçamento privado e deverá acessar a rede externa utilizando NAT.
* A **Rede B** utiliza endereçamento público válido e NÃO deverá utilizar NAT.
* A comunicação entre as redes deve ocorrer por meio de roteamento estático.

---

## Topologia Sugerida

### Rede A (Rede Privada com NAT)

* LAN A: `192.168.10.0/24`
* Gateway: `192.168.10.1`

### Rede B (Rede Pública sem NAT)

* LAN B: `200.10.10.0/24`
* Gateway: `200.10.10.1`

### Rede entre roteadores

* `10.0.0.0/30`

---

## Equipamentos

* 2 roteadores;
* 2 switches;
* 4 computadores (2 em cada rede).

---

## Requisitos

### Parte 1 – Endereçamento

Configure:

* IP dos computadores;
* Interfaces dos roteadores;
* Gateways padrão.

---

### Parte 2 – Roteamento Estático

Configure rotas estáticas para permitir:

* Comunicação entre as duas LANs;
* Testes de conectividade utilizando `ping`.

---

### Parte 3 – NAT

Configure NAT apenas no roteador da Rede A:

* Os dispositivos da rede `192.168.10.0/24` devem sair para a rede externa utilizando o IP da interface WAN do roteador;
* Utilize PAT (NAT Overload).

---

## Testes Esperados

Ao final da etapa:

* PCs da Rede A devem acessar a Rede B;
* PCs da Rede B devem responder aos testes de conectividade;
* A tradução NAT deve ser verificada utilizando:

```bash
show ip nat translations
```

---

# Etapa 2 – Expansão da Rede

## Novo Cenário

A empresa contratou uma nova conexão externa e será necessário anexar uma terceira rede ao ambiente.

---

## Nova Rede Externa

### Rede C

* `172.16.20.0/24`
* Gateway: `172.16.20.1`

---

## Novos Requisitos

O aluno deverá:

1. Adicionar um novo roteador à topologia;
2. Configurar a nova rede;
3. Implementar o roteamento estático necessário;
4. Garantir comunicação entre:

   * Rede A;
   * Rede B;
   * Rede C.
5. Ajustar o NAT caso necessário para manter acesso externo da Rede A.

---

## Comandos Úteis

### Verificação de Rotas

```bash
show ip route
```

### Verificação do NAT

```bash
show ip nat translations
show ip nat statistics
```

### Testes

```bash
ping
tracert
```
