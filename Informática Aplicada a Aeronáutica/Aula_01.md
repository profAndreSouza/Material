# ROTEIRO DE AULA EXPANDIDO — AULA 01
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Data:** 07/08/2026  
**Tema:** Introdução à Informática Técnica, Hardware, Processadores e Especificação de Estações de Trabalho para Manutenção Aeronáutica  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta aula, você será capaz de:
- Identificar e diferenciar a atuação de componentes de hardware (CPU, Memória RAM, Armazenamento NVMe, GPU) em estações de trabalho de engenharia e oficinas MRO.
- Compreender a arquitetura de armazenamento e memória para manipulação de arquivos grandes (como projetos CAD e manuais AMM/IPC com mais de 3.000 páginas em PDF).
- Avaliar, diagnosticar e justificar tecnicamente configurações computacionais sob medida para diferentes perfis de atuação na aviação (Hangar/Oficina vs. Engenharia/PCM).
- Utilizar ferramentas de diagnóstico do sistema operacional para monitorar gargalos de CPU, memória e disco.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O que é Hardware e Software no Contexto Aeronáutico?
- **Hardware:** A parte física do computador (placas, chips, circuitos, memórias e periféricos).
- **Software:** O conjunto de instruções e programas que dizem ao hardware o que executar. Divide-se em:
  - **Software de Sistema:** Sistema Operacional (Windows 11, Linux) que gerencia o hardware.
  - **Software de Aplicação:** Programas que realizam tarefas específicas (MS Excel, MS Word, MS Project, AutoCAD, leitores de manuais técnicos).

### 2.2 Componentes Principais da Estação de Trabalho (*Workstation*)

```
+--------------------------------------------------------------------------+
|                         ESTAÇÃO DE TRABALHO                              |
|                                                                          |
|  +-------------------+  +-------------------+  +----------------------+  |
|  | PROCESSADOR (CPU) |  |   MEMÓRIA RAM     |  | ARMAZENAMENTO (SSD)  |  |
|  | Cérebro do sistema|  | Memória volátil   |  | Guarda dados e arquivos||
|  | Frequência (GHz)  |  | Trabalha os dados |  | Leitura/Escrita      |  |
|  +-------------------+  +-------------------+  +----------------------+  |
|                                                                          |
|  +-------------------+  +-------------------+                            |
|  | PROCESSADOR VÍDEO |  | PERIFÉRICOS I/O   |                            |
|  | Placa Gráfica GPU |  | Teclado, Mouse,   |                            |
|  | Renderiza 3D/CAD  |  | Monitores Duplos  |                            |
|  +-------------------+  +-------------------+                            |
+--------------------------------------------------------------------------+
```

1. **Processador (CPU - Central Processing Unit):**
   - É o "cérebro" do computador. Medido em número de núcleos (*cores*), *threads* e velocidade de clock (GHz).
   - *Importância na Prática:* Softwares como o MS Excel (cálculo matricial e algoritmos PERT/CPM) utilizam múltiplos núcleos do processador para reavaliar fórmulas complexas em paralelo.

2. **Memória RAM (Random Access Memory):**
   - Memória temporária de altíssima velocidade usada enquanto os programas estão abertos.
   - *Importância na Prática:* Manter abertos simultaneamente o Excel, Word, sistema MRO e manuais técnicos de 3.000 páginas sem lentidão exige no mínimo 16 GB a 32 GB de RAM.

3. **Armazenamento de Dados (SSD NVMe vs. HDD):**
   - **HDD (Hard Disk Drive):** Armazenamento magnético mecânico tradicional. Lento (leitura ~150 MB/s) e frágil a choques físicos e vibrações.
   - **SSD (Solid State Drive NVMe PCIe 4.0):** Armazenamento em chips de memória flash. Ultrarrápido (leitura de 5.000 a 7.000 MB/s) e 100% imune a vibrações de ferramentas em hangares.

4. **Processador Gráfico (GPU - Graphics Processing Unit):**
   - Placa de vídeo com memória dedicada (VRAM GDDR6). Responsável pela renderização de desenhos 3D/CAD de motores, células e trens de pouso.

### 2.3 Tópico Especial — Computação Quântica na Aviação (Dúvida dos Alunos)
Em resposta às perguntas levantadas durante a aula sobre o futuro do processamento de dados na aviação:

- **O que é Computação Quântica?**
  Enquanto os computadores clássicos operam com bits binários ($0$ ou $1$), os computadores quânticos utilizam **qubits** (bits quânticos), baseados em fenômenos da mecânica quântica como **Superposição** (capacidade de existir em múltiplos estados simultaneamente) e **Emaranhamento**.
- **Aplicações Práticas no Setor Aeroespacial:**
  1. **Otimização Combinatória de Rotas e Malhas Aéreas:** Resolução em segundos do problema de otimização de rotas globais, consumo de combustível e alocação de tripulações em tempo real.
  2. **Ciência dos Materiais Aeronáuticos:** Simulação quântica no nível molecular para criar novas ligas metálicas mais leves e compósitos termorresistentes para turbinas e fuselagens.
  3. **Otimização de Manutenção Preditiva (*Fleet Alignment*):** Reorganização de cronogramas complexos de manutenção tipo C e D para grandes frotas comerciais.
- **Relação com a Computação Clássica:**
  A computação quântica **não substitui** as workstations de engenharia ou estações de hangar para tarefas do dia a dia (AutoCAD, MS Excel, SO). Ela funciona como um supercomputador acelerador especializado operado em nuvem corporativa para desafios matemáticos hiper-complexos.

---

## 3. DIMENSIONAMENTO TÉCNICO E JUSTIFICATIVA POR PERFIL DE USO

### 3.1 Perfil 1: Estação de Trabalho para Hangar e Oficina MRO (Linha de Voo)

| Componente | Especificação Técnica Recomendada | Justificativa Técnica do Porquê da Escolha |
| :--- | :--- | :--- |
| **Processador (CPU)** | Intel Core i5 ou AMD Ryzen 5 (6 Núcleos / 12 Threads) | Renderiza PDFs vetoriais pesados de manuais e executa sistemas MRO web sem gerar sobreaquecimento em ambientes fechados. |
| **Memória RAM** | 16 GB DDR4 3200 MHz | Manuais AMM ocupam de 2 a 4 GB em memória na renderização de camadas vetoriais. 16 GB evita travamento ao alternar entre a Ordem de Serviço e o manual. |
| **Armazenamento** | SSD NVMe M.2 512 GB PCIe 3.0 / 4.0 | Não possui partes móveis mecânicas, sendo resistente a vibrações de ferramentas pneumáticas e poeira do hangar. Carrega o sistema em 5 segundos. |
| **Placa de Vídeo (GPU)**| Vídeo Integrado (Intel Iris Xe / AMD Radeon Vega) | A visualização em oficina é focada em esquemáticos 2D e diagramas elétricos/hidráulicos, não justificando o custo e consumo de energia de uma GPU dedicada. |
| **Monitor** | 24" Full HD com Tratamento Antirreflexo (*Matte*) | Galpões de hangar possuem iluminação industrial forte. Telas brilhantes causam reflexos e fadiga visual; o painel antirreflexo garante leitura perfeita. |

---

### 3.2 Perfil 2: Workstation para Engenharia, Confiabilidade e Planejamento (PCM)

| Componente | Especificação Técnica Recomendada | Justificativa Técnica do Porquê da Escolha |
| :--- | :--- | :--- |
| **Processador (CPU)** | Intel Core i7 / Core i9 ou Ryzen 7 / Ryzen 9 (8 a 16 Núcleos, Clock Boost $\ge 4.7\text{ GHz}$) | Alto clock *single-core* acelera a modelagem paramétrica em CAD; os múltiplos núcleos aceleram o motor de cálculo matricial e redes PERT do Excel. |
| **Memória RAM** | 32 GB a 64 GB DDR5 5600 MHz (Dual Channel) | Bases de dados de confiabilidade com mais de 500.000 linhas e montagens 3D de aeronaves consomem mais de 20 GB de RAM com largura de banda de 80 GB/s. |
| **Armazenamento** | SSD NVMe 1 TB a 2 TB PCIe 4.0 (Leitura $\ge 7.000\text{ MB/s}$) | A alta taxa de operações por segundo (IOPS) reduz o tempo de carregamento de montagens CAD complexas com milhares de peças de minutos para segundos. |
| **Placa de Vídeo (GPU)**| Placa Dedicada NVIDIA RTX Profissional (8 a 12 GB VRAM GDDR6) | Renderização fluida de modelos 3D complexos (turbinas, asas, trem de pouso) com aceleração por hardware e estabilidade de drivers certificados para engenharia. |
| **Monitores** | 2 Monitores de 27" IPS QHD (2560x1440) com Braço Articulado | A resolução QHD (2,5K) oferece 77% mais área útil que o 1080p, permitindo exibir o manual estrutural (SRM) em uma tela e a planilha de cálculo/CAD na outra. |

---

## 4. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Diagnosticando o Hardware no Windows 11

1. **Abrir as Informações do Sistema:**
   - Pressione no teclado o atalho `Win + Pause/Break` ou `Win + i` para abrir as **Configurações**.
   - Clique em **Sistema** -> **Sobre** e anote o modelo da CPU e a quantidade de RAM instalada.
2. **Verificar o Armazenamento no Gerenciador de Tarefas:**
   - Pressione `Ctrl + Shift + Esc` para abrir o **Gerenciador de Tarefas**.
   - Clique na aba **Desempenho** no menu lateral esquerdo.
   - Clique em **Disco (C:)** e verifique o tipo de disco (SSD ou HDD) e a taxa de transferência.
   - Clique em **Memória** e veja quanto da memória RAM está comprometido neste momento.

---

## 5. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Desafio Individual:**
Você foi designado para emitir o parecer técnico de compra de 2 computadores para a nova base da oficina:
1. Uma estação de bancada para lançamento de Ordens de Serviço e consulta a manuais AMM.
2. Uma estação para o engenheiro de confiabilidade responsável pelas análises de falhas e planejamento de grandes revisões.

Elabore a especificação detalhada de cada máquina justificando tecnicamente por que cada componente foi selecionado.

---

## 6. DICAS DE PRODUTIVIDADE & ATALHOS NO WINDOWS

| Atalho de Teclado | Função no Windows |
| :--- | :--- |
| `Ctrl + Shift + Esc` | Abre diretamente o Gerenciador de Tarefas do Windows |
| `Win + E` | Abre o Explorador de Arquivos |
| `Win + Pause/Break` | Abre as Propriedades do Sistema |
| `Win + D` | Minimiza todas as janelas e mostra a Área de Trabalho |
| `Alt + Tab` | Alterna rapidamente entre as janelas abertas |
