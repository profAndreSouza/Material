# SLIDES DA AULA 01 — INF-117 (ENRIQUECIDOS COM IMAGENS)

**Tema:** Hardware, Processadores, Estações de Trabalho e Introdução à Computação Quântica na Aviação  
**Arquivo de Apresentação:** [`Slides_Aula_01_Hardware_e_Estacoes_de_Trabalho.pptx`](Slides_Aula_01_Hardware_e_Estacoes_de_Trabalho.pptx)  
**Recursos Visuais:** 5 Imagens HD em `Slides/images/` (Estação de trabalho aeronáutica, CPU, SSD vs HDD, Hangar MRO e Computação Quântica).

---

### Slide 1: Capa (Com Recursos Visuais de Engenharia Aeronáutica)
- **INF-117 — Informática Aplicada a Aeronáutica**
- **Hardware, Processadores e Estações de Trabalho**
- Fundamentos de Arquitetura Computacional, Dimensionamento MRO/Engenharia e Tópico Especial em Computação Quântica
- Fatec Sorocaba — CST em Manutenção de Aeronaves (Prof. André Souza)
- *Imagem:* [`cover.jpg`](images/cover.jpg) (Estação de engenharia aeronáutica com monitores duplos e modelo CAD 3D em hangar).

---

### Slide 2: Objetivos de Aprendizagem
- **Competências Técnicas de Hardware:** Compreender a atuação da CPU, Memória RAM, SSD NVMe e GPU em sistemas computacionais aeronáuticos.
- **Arquitetura de Armazenamento:** Avaliar o impacto do SSD na abertura de manuais pesados (AMM, IPC, SRM com 3.000+ páginas em PDF) e arquivos CAD 3D.
- **Dimensionamento Técnico:** Especificar e justificar computadores para Hangar/Oficina MRO vs. Engenharia/PCM.
- **Diagnóstico Prático no SO:** Diagnosticar gargalos de CPU, memória e disco no Windows 11.
- **Fronteiras da Computação (Quântica):** Compreender o papel dos qubits e da superposição quântica na aviação.

---

### Slide 3: Fundamentos — Hardware vs. Software na Aviação
- **Hardware Aeronáutico:** Processadores, memórias RAM DDR4/DDR5, SSD NVMe PCIe 4.0, GPUs dedicadas e monitores antirreflexo.
- **Software de Sistema:** Sistema Operacional (Windows 11 / Linux) gerenciando a alocação de recursos e drivers certificados.
- **Software de Aplicação:** MS Excel (Cálculos de CG, PERT/CPM), MS Word (Relatórios/OS), Softwares CAD 3D (AutoCAD, CATIA) e leitores de manuais (PDF Vetorial AMM/IPC).

---

### Slide 4: O Processador (CPU): O Cérebro do Sistema
- **Arquitetura Interna:** Núcleos (Cores) e Threads para execução em paralelo; Clock (GHz) para velocidade de ciclo; Memória Cache (L1/L2/L3) para acesso ultra-rápido.
- **Impacto no MS Excel & Manutenção:** Motor multithread do Excel reavaliando milhares de fórmulas matriciais e redes PERT/CPM.
- **Recomendação:** 6 a 8 núcleos (Intel Core i5/i7 ou AMD Ryzen 5/7).
- *Imagem:* [`cpu.jpg`](images/cpu.jpg) (Fotografia em alta resolução de processador moderno em placa-mãe).

---

### Slide 5: Memória RAM & Armazenamento SSD NVMe vs. HDD
- **Memória RAM (Volátil):** 16 GB (MRO) a 32 GB/64 GB DDR5 (Engenharia). Evita o uso da memória virtual em disco (*Paging File*).
- **SSD NVMe PCIe 4.0 (Persistente):** Taxas de leitura de 5.000 a 7.000 MB/s. Chips Flash 100% imunes a vibrações de ferramentas pneumáticas em hangares.
- **HDD Mecânico (Obsoleto):** Apenas ~150 MB/s, lento e vulnerável a choques físicos mecânicos.
- *Imagem:* [`storage.jpg`](images/storage.jpg) (Comparativo de drive M.2 SSD NVMe com disco rígido HDD mecânico).

---

### Slide 6: Processamento Gráfico (GPU) e Periféricos Ergonomicos
- **Placa de Vídeo (GPU):** Memória VRAM GDDR6 dedicada para renderização e rotação fluida de turbinas, células e trens de pouso em CAD 3D.
- **Periféricos & Ergonomia:** Monitores duplos para leitura de manuais SRM lado a lado com a OS; painel antirreflexo (*Matte*) para luz industrial; teclados numéricos para inserção rápida de Part Numbers.

---

### Slide 7: Especificação 1 — Estação para Hangar & Oficina MRO
- **Configuração Especificada:**
  - **CPU:** Intel Core i5 / AMD Ryzen 5 (6 Cores / 12 Threads)
  - **RAM:** 16 GB DDR4 3200 MHz
  - **Armazenamento:** SSD NVMe M.2 512 GB PCIe 3.0/4.0
  - **GPU:** Vídeo Integrado (Intel Iris Xe / AMD Radeon Vega)
  - **Monitor:** 24" Full HD Antirreflexo (*Matte*)
- **Justificativa Técnica:** Manuais AMM ocupam de 2 a 4 GB em RAM ao renderizar camadas vetoriais. 16 GB evita travamento. O SSD NVMe é resistente a choques mecânicos e vibrações do hangar, carregando o sistema em 5 segundos.
- *Imagem:* [`hangar.jpg`](images/hangar.jpg) (Técnico de manutenção utilizando estação resistente em hangar aeronáutico).

---

### Slide 8: Especificação 2 — Workstation de Engenharia & PCM
- **Configuração Especificada:**
  - **CPU:** Intel Core i7/i9 ou Ryzen 7/9 (8 a 16 Cores, Clock Boost $\ge 4.7\text{ GHz}$)
  - **RAM:** 32 GB a 64 GB DDR5 5600 MHz (Dual Channel)
  - **Armazenamento:** SSD NVMe 1 TB a 2 TB PCIe 4.0 (Leitura $\ge 7.000\text{ MB/s}$)
  - **GPU:** NVIDIA RTX Profissional Dedicada (8 a 12 GB VRAM GDDR6)
  - **Telas:** 2 Monitores de 27" IPS QHD (2560x1440) em Braço Articulado
- **Justificativa Técnica:** Alto clock acelerado para modelagem paramétrica CAD; múltiplos núcleos para cálculos matriciais no Excel; 32-64 GB de RAM suporta bases de confiabilidade com 500k+ registros; GPU dedicada renderiza montagens 3D em tempo real.

---

### Slide 9: Tópico Especial — Computação Quântica na Aviação (Pergunta dos Alunos)
- **O que é o Qubit?** Ao contrário do bit clássico (0 ou 1), o *qubit* utiliza princípios da mecânica quântica: **Superposição** (0 e 1 simultaneamente) e **Emaranhamento**.
- **Aplicações Aeroespaciais:**
  - *Otimização Extrema de Rotas e Malha Aérea:* Cálculo simultâneo de milhões de trajetórias reduzindo consumo de combustível.
  - *Ciência de Materiais:* Simulação molecular de ligas metálicas mais leves e compósitos resistentes a altas temperaturas.
  - *Manutenção Preditiva Global:* Otimização combinatória de escalas de aeronaves (*Fleet Scheduling & Maintenance Alignment*).
- **Quântico vs. Clássico:** A computação quântica **não substitui** computadores de hangar ou CAD; ela atua como supercomputador acelerador em nuvem para problemas combinatórios hiper-complexos.
- *Imagem:* [`quantum.jpg`](images/quantum.jpg) (Processador quântico futurista com circuitos de qubits e otimização de rotas aéreas).

---

### Slide 10: Prática em Laboratório — Diagnóstico no Windows 11
- **1. Informações do Sistema (`msinfo32`):** Identificar modelo da CPU, clock e RAM.
- **2. Gerenciador de Tarefas (`Ctrl + Shift + Esc`):** Monitorar uso da CPU, RAM e identificar tipo de disco (SSD vs. HDD).
- **3. Identificação de Gargalos:** Avaliar se a ocupação da RAM supera 80% ou se o disco atinge 100% de uso.

---

### Slide 11: Exercício de Fixação Computacional — Parecer Técnico
- **Desafio Individual no Laboratório:** Elaboração do parecer técnico de aquisição de 2 computadores (1 Estação MRO de Hangar e 1 Workstation de Engenharia/Confiabilidade).
- **Entregável:** Tabela comparativa com especificações completas e justificativas técnicas detalhadas para cada escolha.

---

### Slide 12: Encerramento e Próximos Passos
- **Síntese:** Domínio dos componentes computacionais e dimensionamento consciente.
- **Próxima Aula (Aula 02):** MS Word Técnico para Relatórios Formais — Estilos ABNT, Quebras de Seção, Sumários Automáticos e Tabelas de Engenharia.
