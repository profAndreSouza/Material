# Aula 05 – Projeto 1: Escritório Simples

## Objetivos de Aprendizagem
* Revisar conceitos de topologia em estrela e endereçamento IPv4 básico.
* Montar uma rede simples com **5 computadores e 1 switch**.
* Configurar os PCs com endereços IP na **mesma sub-rede**.
* Testar a conectividade usando o comando `ping`.
* Discutir a importância do cabeamento correto em redes locais.


## 1. Contexto do Projeto
Uma **pequena empresa de contabilidade** precisa conectar 5 computadores em rede local para **troca de arquivos internos**.  
Neste primeiro projeto, não haverá conexão com a internet, apenas comunicação entre os PCs.


## 2. Requisitos da Rede
- 5 PCs conectados a **1 switch**.
- Todos os PCs devem estar na **mesma sub-rede IPv4**.
- Usar cabos **diretos (PC–Switch)**.
- Testar comunicação com `ping`.


## 3. Endereçamento IPv4

| Dispositivo | Endereço IP     | Máscara          |
|-------------|----------------|-----------------|
| PC1         | 192.168.1.1    | 255.255.255.0   |
| PC2         | 192.168.1.2    | 255.255.255.0   |
| PC3         | 192.168.1.3    | 255.255.255.0   |
| PC4         | 192.168.1.4    | 255.255.255.0   |
| PC5         | 192.168.1.5    | 255.255.255.0   |

> Todos os dispositivos estão na rede **192.168.1.0/24**.


## 4. Etapas no Packet Tracer

### Passo 1 – Montagem da Rede
- Inserir **1 switch** e **5 PCs**.
- Conectar cada PC ao switch usando **cabo direto**.

### Passo 2 – Configuração dos IPs
- Em cada PC → Desktop → IP Configuration.
- Atribuir os endereços conforme a tabela.

### Passo 3 – Teste de Conectividade
- Abrir o **Prompt de Comando** no PC1.
- Executar:
```

ping 192.168.1.2
ping 192.168.1.3

```
- Repetir entre diferentes PCs.

### Passo 4 – Diagnóstico de Erros
- Trocar propositalmente o **cabo direto por cruzado** e verificar falha.
- Corrigir e retestar.


## 5. Questões para Discussão
1. Qual a vantagem de utilizar um **switch** em vez de conectar os PCs em barramento?
2. Por que todos os PCs precisam estar na **mesma sub-rede** para se comunicarem neste cenário?
3. O que acontece se configurarmos máscaras diferentes?


## 6. Critérios de Sucesso
- Todos os PCs se comunicam entre si.
- Endereços IP corretamente configurados.
- Cabeamento apropriado (direto PC–Switch).
- Rede documentada com diagrama e tabela de IPs.


## 7. Atividade Extra (opcional)
- Simular um **sexto computador visitante**.
- Atribuir endereço IP errado (ex.: `192.168.2.10`) e observar o que acontece ao tentar pingar os outros PCs.


## Referências
- TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. *Redes de Computadores*, 6ª ed.  
- KUROSE, J.; ROSS, K. *Redes de Computadores e a Internet: uma abordagem top-down*, 8ª ed.
```
