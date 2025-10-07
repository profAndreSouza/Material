# **Projeto 3 – Subredes em um Campus**

**Tema:** Revisão de IPv4 e Arquitetura de Redes

Você foi contratado para projetar e documentar a rede de um campus universitário. O campus terá **três blocos de prédios (Bloco A, Bloco B e Bloco C)**, cada um com sua própria sub-rede, interligados por um roteador central.

O objetivo é planejar, configurar e justificar tecnicamente cada camada envolvida na construção dessa rede, desde a **camada física até a camada de transporte**, garantindo comunicação eficiente e segura entre os blocos.


## **Parte 1 – Camada Física**

1. Quais tipos de cabos de rede seriam adequados para conectar os computadores dentro de cada bloco? Justifique sua escolha (ex.: UTP Cat5e, Cat6, fibra).
2. Quantos switches seriam necessários em cada bloco, considerando que cada um terá **50 computadores**? Explique o critério de dimensionamento.
3. Cite dois cuidados que devem ser tomados na infraestrutura física para evitar problemas de interferência ou perda de sinal.


## **Parte 2 – Camada de Enlace**

4. Qual protocolo é utilizado para a comunicação entre dispositivos dentro da mesma rede local (LAN)? Explique como ele funciona na prática.
5. Qual é a função da tabela MAC em um switch?
6. Explique como o **ARP (Address Resolution Protocol)** atua na comunicação entre hosts dentro de uma sub-rede.


## **Parte 3 – Camada de Rede (IPv4 e Sub-redes)**

7. O campus recebeu o bloco de endereços **192.168.10.0/24**. Divida esse bloco em **3 sub-redes**, uma para cada prédio, com pelo menos **50 hosts por sub-rede**.

   * Apresente:

     * Endereço da sub-rede
     * Máscara de sub-rede
     * Endereço de broadcast
     * Faixa de hosts válidos
8. Explique o papel do roteador no interligamento dessas sub-redes.
9. Descreva como funcionaria o roteamento entre as redes **192.168.10.0/26**, **192.168.10.64/26** e **192.168.10.128/26** (exemplo de sub-redes possíveis).


## **Parte 4 – Camada de Transporte**

10. Diferencie **TCP e UDP** em termos de confiabilidade e uso típico.
11. Em uma aplicação de videoconferência entre computadores dos blocos A e B, qual protocolo de transporte seria mais adequado? Justifique.
12. Explique como as **portas lógicas** (ex.: 80, 443, 25) são utilizadas para identificar serviços em uma rede.


## **Parte 5 – Desafio de Integração (Montagem da Rede)**

13. Monte o **esquema lógico** da rede do campus, contendo:

* 3 sub-redes IPv4 interligadas via roteador
* Pelo menos **um switch em cada bloco**
* Um servidor central de serviços (DNS/Web) localizado no **Bloco A**, acessível pelas demais sub-redes

14. Faça o diagrama da rede (pode ser feito em papel, software de simulação ou ferramenta online como Cisco Packet Tracer).
15. Escreva as configurações IP que seriam aplicadas em:

* 1 PC do Bloco A
* 1 PC do Bloco B
* 1 PC do Bloco C
* Interfaces do roteador


## **Entrega do Projeto**

* Cada integrante deverá produzir um **arquivo Word** contendo:

  * Todas as perguntas respondidas **com justificativas técnicas**.
  * Explicações detalhadas dos cálculos de sub-redes e das escolhas feitas.
* Deverá ser anexado também o **arquivo .pkt** com a simulação da rede montada no **Cisco Packet Tracer**.
* Ambos os arquivos (**.docx e .pkt**) deverão ser enviados via **Forms disponibilizado pelo professor** até a data estipulada.
