# SLIDES DA AULA 01 — INF-117
**Tema:** Hardware, Processadores e Estações de Trabalho para Manutenção Aeronáutica  
**Arquivo de Apresentação:** [`Slides/Slides_Aula_01_Hardware_e_Estacoes_de_Trabalho.pptx`](file:///c:/projetos/Material/Inform%C3%A1tica%20Aplicada%20a%20Aeron%C3%A1utica/Slides/Slides_Aula_01_Hardware_e_Estacoes_de_Trabalho.pptx)

---

### Slide 1: Capa
- **INF-117 — Informática Aplicada a Aeronáutica**
- **Hardware, Processadores e Estações de Trabalho**
- Fundamentos de Arquitetura Computacional e Dimensionamento Técnico de Estações MRO e Engenharia
- Fatec Sorocaba — CST em Manutenção de Aeronaves

### Slide 2: Objetivos de Aprendizagem
- **Competências Técnicas:** Compreender a arquitetura interna de computadores, CPU, RAM, SSD NVMe e GPU; avaliar e diagnosticar gargalos de desempenho; dimensionar e justificar tecnicamente configurações computacionais.
- **Contextualização Aeronáutica:** Manipulação de manuais digitais pesados (AMM, IPC, SRM com 3.000+ páginas em PDF); processamento de bases de dados de voo e confiabilidade de frotas; planilhas de grande porte com fórmulas matriciais e redes PERT/CPM.

### Slide 3: O Processador (CPU): O Cérebro do Sistema
- **Arquitetura:** Núcleos (Cores) e Threads para execução paralela; Clock (GHz) para velocidade de cálculo; Memória Cache (L1, L2, L3) para acesso ultrarrápido a dados imediatos.
- **Na Rotina de Manutenção:** Processamento de planilhas complexas com milhares de fórmulas; motor multithread do Excel para caminhos críticos e matrizes; renderização de desenhos 2D/3D no AutoCAD.
- **Recomendação:** 6 a 8 núcleos (Intel Core i7 / AMD Ryzen 7).

### Slide 4: Memória RAM e Armazenamento SSD NVMe
- **Memória RAM (Volátil):** 16 GB a 32 GB DDR4/DDR5. Sem RAM suficiente, o Windows recorre ao disco (*Paging File*), gerando lentidão severa. Permite abrir simultaneamente Excel, Word, PDF e ERP.
- **Armazenamento SSD NVMe (Persistente):** Taxas de leitura de 5.000 a 7.000 MB/s (contra 150 MB/s do HDD). Abertura instantânea do Windows e catálogos em segundos; resistência total a vibrações de ferramentas em hangares.

### Slide 5: Processamento Gráfico (GPU) e Periféricos
- **Placa de Vídeo Dedicada (GPU):** Memória VRAM GDDR6 para rotação e manipulação suave de modelos CAD 3D de aeronaves, motores e trens de pouso; aceleração de esquemáticos elétricos e hidráulicos complexos; liberação da CPU para cálculos lógicos.
- **Periféricos e Ergonomia:** Monitores duplos para comparar manuais e ordens de serviço lado a lado; teclados com numérico dedicado para digitação de Part Numbers; portas USB 3.2, Thunderbolt e Ethernet Gigabit para instrumentos de teste.

### Slide 6: Detalhamento Técnico — Estação para Hangar e Oficina MRO
- **Configuração Especificada:**
  - **CPU:** Intel Core i5 / AMD Ryzen 5 (6 Núcleos / 12 Threads)
  - **Memória RAM:** 16 GB DDR4 3200 MHz
  - **Armazenamento:** SSD NVMe M.2 512 GB PCIe 3.0 / 4.0
  - **GPU:** Vídeo Integrado (Intel Iris Xe / AMD Radeon Vega)
  - **Monitor:** 24" Full HD com Tratamento Antirreflexo (Matte)
- **Justificativa Técnica ("Por que dessa configuração?"):**
  - *CPU (6 Cores):* Renderiza PDFs vetoriais pesados de manuais e executa sistemas MRO web sem sobreaquecimento.
  - *RAM (16 GB):* Manuais AMM ocupam 2 a 4 GB em memória; 16 GB evita travamento ao alternar entre a OS e o manual.
  - *SSD (512 GB):* Não possui partes móveis, sendo imune a choques mecânicos, vibrações e poeira do hangar.
  - *GPU Integrada:* Desenhos 2D e esquemáticos elétricos não exigem placa dedicada cara, reduzindo consumo de energia.
  - *Monitor Antirreflexo:* Evita reflexos sob a forte iluminação industrial do hangar, eliminando fadiga visual e erros de leitura.

### Slide 7: Detalhamento Técnico — Workstation de Engenharia e PCM
- **Configuração Especificada:**
  - **CPU:** Intel Core i7 / Ryzen 7 (8 a 16 Núcleos, Clock Boost $\ge 4.7\text{ GHz}$)
  - **Memória RAM:** 32 GB a 64 GB DDR5 5600 MHz (Dual Channel)
  - **Armazenamento:** SSD NVMe 1 TB a 2 TB PCIe 4.0 (Leitura $\ge 7.000\text{ MB/s}$)
  - **GPU:** Placa Dedicada NVIDIA RTX Profissional (8 a 12 GB VRAM GDDR6)
  - **Monitores:** 2 Monitores de 27" IPS QHD (2560x1440) com Braço Articulado
- **Justificativa Técnica ("Por que dessa configuração?"):**
  - *CPU (High Clock + Multithread):* Alto clock mononucleor acelera modelagem paramétrica em CAD; múltiplos núcleos aceleram cálculos matriciais massivos no Excel.
  - *RAM (32-64 GB DDR5):* Bases de confiabilidade com 500k+ registros e montagens 3D consomem mais de 20 GB de memória real com largura de banda superior a 80 GB/s.
  - *SSD PCIe 4.0:* Carrega montagens CAD com milhares de componentes e grandes bases `.csv` em segundos.
  - *GPU RTX Dedicada:* Renderização de modelos 3D complexos (turbinas, asas) em tempo real com estabilidade de drivers certificados.
  - *2x Telas 27" QHD:* 77% mais área visual que 1080p, permitindo exibir o manual estrutural (SRM) em uma tela e a planilha/CAD na outra sem rolagem lateral constante.

### Slide 8: Comparativo Síntese — Hangar vs. Engenharia
- **Perfil 1 (Hangar / Linha de Voo):** Foco em estabilidade, resposta ágil, tela antirreflexo e resistência mecânica. Excelente relação custo/desempenho.
- **Perfil 2 (Engenharia / PCM / Confiabilidade):** Foco em poder de processamento bruto, simulação 3D, largura de banda de memória e área visual dupla de alta resolução.

### Slide 9: Diagnóstico Prático de Hardware no Windows
- **Gerenciador de Tarefas (`Ctrl + Shift + Esc`):** Identificação de gargalos em tempo real (CPU a 100%, RAM esgotada, disco saturado).
- **Informações do Sistema (`msinfo32`):** Especificações exatas da placa-mãe, processador e BIOS.
- **Boas Práticas:** Monitoramento de temperatura em hangares, backups em nuvem corporativa e nobreaks senoidais para estações de teste.

### Slide 10: Síntese e Atividade de Fixação
- Execução do diagnóstico no computador da bancada.
- Preenchimento da tabela de dimensionamento com justificativa técnica individual.

### Slide 11: Encerramento
- Próxima Aula: MS Word Técnico — Estilos ABNT, Quebras de Seção e Sumários Automáticos.
