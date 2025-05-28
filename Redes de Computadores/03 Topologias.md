# 3. **Topologias de Rede: Física e Lógica**

As topologias de rede definem a maneira como os dispositivos estão organizados e interconectados dentro de um ambiente de rede. Elas podem ser classificadas em dois tipos principais: topologia física e topologia lógica.

## 1. Topologia Física

A topologia física refere-se à disposição dos dispositivos e cabos dentro da rede. Ela influencia diretamente a facilidade de manutenção, escalabilidade e desempenho da rede. As principais topologias físicas incluem:

### a) Topologia em Barramento

- Todos os dispositivos estão conectados a um único cabo principal (backbone).
- Comunicação unidirecional, onde os dados percorrem toda a extensão do cabo.
- Utiliza conectores BNC ou terminadores em suas extremidades para evitar reflexões de sinal.
- Vantagens: Custo reduzido e fácil implementação.
- Desvantagens: Baixa escalabilidade, dificuldade na detecção de falhas e vulnerabilidade a falhas no cabo principal.

![image.png](attachment:c4552e5d-9b76-491b-867a-9e1590b9c61e:image.png)

### b) Topologia em Estrela

- Todos os dispositivos estão conectados a um único ponto central (switch ou hub).
- Comunicação eficiente, pois cada dispositivo tem um canal dedicado ao nó central.
- Se um dispositivo falhar, os outros não são afetados, desde que o nó central esteja operacional.
- Vantagens: Facilidade de manutenção, escalabilidade e maior confiabilidade.
- Desvantagens: Dependência do nó central; se ele falhar, toda a rede fica inoperante.

![image.png](attachment:c7798b83-f84a-4fdf-853c-5da87fc166e2:image.png)

### c) Topologia em Anel

- Cada dispositivo é conectado ao próximo, formando um círculo fechado.
- Os dados circulam em uma única direção (ou bidirecional, em algumas variações).
- Utiliza um token para regular a transmissão de dados, reduzindo colisões.
- Vantagens: Melhor desempenho sob tráfego intenso, menor ocorrência de colisões.
- Desvantagens: Falhas em um único ponto podem afetar toda a rede; manutenção mais complexa.

![image.png](attachment:b0e32c2e-e7f4-49fc-ac16-f2e576f4a015:image.png)

### d) Topologia em Malha

- Cada dispositivo está conectado a vários outros, garantindo redundância.
- Comunicação direta entre dispositivos, reduzindo congestionamento.
- Pode ser implementada de forma parcial (malha parcial) ou total (malha completa).
- Vantagens: Alta tolerância a falhas, segurança e desempenho otimizado.
- Desvantagens: Alto custo de implementação, complexidade de configuração e manutenção.

![image.png](attachment:3fbadc92-c7fe-4a00-9560-0552f6b9600f:image.png)

### e) Topologia Híbrida

- Combinação de duas ou mais topologias anteriores.
- Pode ser adaptada conforme as necessidades da rede, misturando características específicas.
- Exemplo: Uma rede corporativa pode ter setores com topologia em estrela interconectados via um backbone de topologia em barramento.
- Vantagens: Flexibilidade, escalabilidade e maior eficiência.
- Desvantagens: Maior custo e complexidade de gerenciamento.

![image.png](attachment:9babcbe1-f42e-491b-a0e9-69ac07495227:image.png)

## 2. Topologia Lógica

A topologia lógica refere-se ao caminho percorrido pelos dados dentro da rede, independentemente da disposição física dos dispositivos. As principais topologias lógicas incluem:

### a) Ethernet (Topologia em Barramento Lógico)

- Utiliza um canal compartilhado para transmissão de dados.
- Controla o acesso por meio do protocolo CSMA/CD (Carrier Sense Multiple Access with Collision Detection).
- Amplamente utilizada em redes locais (LANs) devido à sua simplicidade e eficiência.
- Pode ser implementada em diferentes meios físicos, como cabo UTP, fibra óptica e redes sem fio.

### b) Token Ring (Topologia em Anel Lógico)

- Os dados circulam em um anel lógico e só podem ser transmitidos quando um dispositivo recebe um token.
- Reduz colisões, garantindo uma comunicação mais organizada e previsível.
- Embora tenha sido amplamente utilizada no passado, perdeu espaço para Ethernet devido ao custo e menor flexibilidade.

### c) Redes comutadas (Topologia em Estrela Lógica)

- Cada dispositivo se comunica diretamente com o nó central (switch), garantindo um canal dedicado.
- Utiliza comutação para determinar o melhor caminho para os dados, otimizando a eficiência.
- Pode ser implementada em redes locais e de longa distância, sendo a base das redes modernas.

### d) Redes Definidas por Software (SDN)

- Separação do plano de controle do plano de dados, permitindo gerenciamento centralizado.
- Oferece maior flexibilidade e automação na configuração da rede.
- Permite a criação de redes dinâmicas e adaptáveis, sendo utilizada em data centers e infraestruturas em nuvem.

![image.png](attachment:735e9d7d-366f-477d-9986-c413c9fad8e1:image.png)