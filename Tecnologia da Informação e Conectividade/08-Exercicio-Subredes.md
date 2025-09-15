## Exercício – Cálculo de Sub-redes e Implementação no Packet Tracer

Uma **empresa de tecnologia** está em expansão e precisa organizar melhor sua rede interna para suportar diferentes departamentos. Atualmente, todos os dispositivos estão em uma única rede, o que causa lentidão, dificuldades de gerenciamento e baixa segurança.

A equipe de TI decidiu **subdividir a rede em sub-redes (subnetting)** para isolar os departamentos e otimizar o uso de endereços IP. A empresa recebeu o bloco de endereços **192.168.10.0/24**.

Os setores e suas necessidades são:

* **Administração**: 50 hosts
* **Suporte Técnico**: 30 hosts
* **Desenvolvimento**: 60 hosts
* **RH**: 25 hosts
* **Diretoria**: 10 hosts

## Tarefas:

1. Calcule as sub-redes necessárias para atender a cada setor, utilizando o bloco disponível.
2. Apresente a **máscara de sub-rede**, o **endereço de rede**, o **primeiro IP válido**, o **último IP válido** e o **broadcast** de cada sub-rede.
3. Monte o cenário no **Cisco Packet Tracer**, representando cada setor com um **switch e PCs**, conectados a um **roteador** que fará a interligação entre as redes.
4. Configure os endereços IP em cada dispositivo conforme o planejamento de sub-redes realizado.
5. Teste a comunicação entre setores (ping), verificando se a segmentação funciona corretamente.

## Entregáveis:

* Tabela com os cálculos das sub-redes.
* Arquivo `.pkt` do Packet Tracer com a topologia configurada.
