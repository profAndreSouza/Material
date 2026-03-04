# 2. **Meios de Transmissão, Cabeamento Estruturado e Dispositivos de Rede**

### **1. Meios de Transmissão**

Os meios de transmissão são os caminhos físicos ou lógicos usados para transportar dados entre dispositivos de rede. Eles podem ser divididos em **meios guiados (cabos físicos)** e **meios não guiados (sem fio)**.

### **1.1 Meios Guiados**

São aqueles que utilizam cabos físicos para a transmissão de dados. Os principais tipos incluem:

- **Par Trançado (Twisted Pair)**
    - Composto por dois fios de cobre trançados entre si para minimizar interferências eletromagnéticas.
    - Padrões comuns: **Cat5e, Cat6, Cat6a, Cat7**.
    - Pode ser **blindado (STP)** ou **não blindado (UTP)**.
    - Utilizado em redes Ethernet, podendo alcançar velocidades de até **10 Gbps** dependendo da categoria.
    
    ![image.png](attachment:f18f4482-0a7a-4cd3-ae28-3525824bbf6c:image.png)
    
- **Fibra Óptica**
    - Utiliza pulsos de luz para a transmissão de dados, oferecendo maior velocidade e imunidade a interferências.
    - Tipos principais:
        - **Monomodo (SMF - Single Mode Fiber)**: maior alcance (até centenas de quilômetros).
        - **Multimodo (MMF - Multi Mode Fiber)**: menor alcance, ideal para curtas distâncias.
    - Utilizada em **backbones de redes corporativas e conexões de longa distância**.
    
    ![image.png](attachment:83034776-ccee-44ae-a8d3-897d596d3ca0:image.png)
    
- **Cabo Coaxial**
    - Antigamente utilizado em redes Ethernet (padrões **10Base2 e 10Base5**).
    - Ainda é empregado em conexões de TV a cabo e algumas redes de provedores de internet.
    
    ![image.png](attachment:cd2b2517-8a10-4b16-a8db-0ad95db9d6e9:image.png)
    

### **1.2 Meios Não Guiados (Sem Fio)**

Os meios não guiados transmitem dados via ondas eletromagnéticas pelo ar. Exemplos incluem:

- **Wi-Fi (Wireless Fidelity)**
    - Baseado no padrão **IEEE 802.11** (ex: 802.11ac, 802.11ax).
    - Pode operar em **2.4 GHz (maior alcance, menor velocidade)** e **5 GHz (menor alcance, maior velocidade)**.
- **Bluetooth**
    - Usado para comunicação de curto alcance em dispositivos móveis e IoT.
- **Rádio e Satélite**
    - Tecnologias utilizadas para comunicação de longa distância.

| Característica | Wi-Fi | Bluetooth | Rádio/Satélite |
| --- | --- | --- | --- |
| **Frequência** | 2,4 GHz / 5 GHz / 6 GHz | 2,4 GHz / 5 GHz | Variável (VHF, UHF, GHz) |
| **Alcance** | 30-100m (interno) | 1-100m | Km a milhares de km |
| **Taxa de Transferência** | Até 10 Gbps (Wi-Fi 6E) | Até 3 Mbps (Bluetooth 5.0) | Até 100 Mbps (dependendo da tecnologia) |
| **Consumo de Energia** | Moderado | Baixo | Alto |
| **Latência** | Baixa (1-10 ms) | Muito baixa | Alta (pode chegar a 600 ms para satélites geoestacionários) |
| **Segurança** | WPA2/WPA3 | AES-128, SSP | Criptografia proprietária |
| **Custo** | Médio | Baixo | Alto |
| **Facilidade de Implementação** | Fácil | Muito fácil | Complexa |
| **Mobilidade** | Alta | Muito alta | Muito alta |
| **Uso Típico** | Redes domésticas, empresariais e públicas | Conexão entre dispositivos próximos (teclados, fones de ouvido, IoT) | Comunicação de longa distância, áreas remotas, conexões marítimas e espaciais |

### **2. Cabeamento Estruturado**

O cabeamento estruturado é um sistema padronizado de cabos, conectores e dispositivos para redes de computadores. Ele segue normas como a **TIA/EIA-568** e a **ISO/IEC 11801**.

### **2.1 Componentes do Cabeamento Estruturado**

- **Sala de telecomunicações (TR - Telecommunications Room):** espaço onde os equipamentos de rede ficam organizados.
- **Backbone de Rede:** interliga diferentes setores e andares em grandes ambientes.
    
    ![image.png](attachment:18249d0d-e338-4726-8874-20d025b34e3d:image.png)
    
- **Pontos de Rede (TO - Telecommunications Outlet):** terminais nos quais os dispositivos finais são conectados.
    
    ![image.png](attachment:2fdac71c-2fbf-43a1-88fc-cf7ca79b47ee:image.png)
    
- **Patch Panel:** facilita a organização e a conexão dos cabos com switches e roteadores.
    
    ![image.png](attachment:8f788892-d415-429c-b2f9-32ad46418e02:image.png)
    

### **2.2 Padrões de Cabeamento**

- **Padrões de conectorização RJ-45:**
    - **T568A** e **T568B** são os dois principais padrões para crimpagem de cabos Ethernet.
    
    ![image.png](attachment:dfa0be6b-db88-4ab1-9a30-1442965fecb4:image.png)
    
    - Para conectar um **PC a um switch**, utiliza-se um **cabo direto**.
    - Para conectar dois dispositivos iguais (ex: PC-PC, switch-switch), utiliza-se um **cabo crossover** (hoje, switches modernos fazem a correção automática).
    
    ![image.png](attachment:b35c9695-acad-47e3-8147-d83e0fcaff59:image.png)
    

---

### **3. Dispositivos de Rede**

Os dispositivos de rede são responsáveis por interligar os equipamentos e garantir a comunicação.

### **3.1 Switches**

- Equipamento que interliga dispositivos dentro de uma rede local (LAN).
- Funciona na **Camada 2 (Enlace) do modelo OSI**, utilizando endereços MAC para encaminhamento de pacotes.
- Pode operar em **modo gerenciado (permite configuração avançada)** ou **não gerenciado**.

![image.png](attachment:aaf5d240-1283-486a-b193-0269b2c1e559:image.png)

### **3.2 Roteadores**

- Dispositivos que conectam diferentes redes e fazem o encaminhamento de pacotes baseado em **endereços IP**.
- Trabalham na **Camada 3 (Rede) do modelo OSI**.
- Exemplo: roteadores domésticos conectam uma LAN à Internet.

![image.png](attachment:25e97062-38f1-428d-9920-d6b88ba97210:image.png)

### **3.3 Access Points (APs)**

- Permitem a conexão de dispositivos sem fio a uma rede cabeada.
- Funcionam na **Camada 2 (Enlace)** e são essenciais para redes Wi-Fi.

![image.png](attachment:4b901540-83c2-46b7-9b87-8cc8c1a8ae9a:image.png)

### **3.4 Firewalls**

- Dispositivos de segurança que monitoram e filtram o tráfego de rede.
- Podem ser implementados em hardware ou software.