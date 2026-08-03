# ROTEIRO DE AULA EXPANDIDO — SEMANA 01
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Introdução à Informática Técnica, Hardware, Software e Especificação de Estações de Trabalho  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Identificar e diferenciar componentes de hardware de alto desempenho (CPU, RAM, SSD/HD, GPU) em estações de trabalho computacionais.
- Entender a arquitetura de armazenamento e memória para manipulação de arquivos grandes (como projetos CAD e manuais em PDF).
- Avaliar e especificar configurações de computadores para suporte a softwares de engenharia e gerenciamento de manutenção.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O que é Hardware e Software?
- **Hardware:** A parte física do computador (placas, chips, circuitos, memórias e periféricos).
- **Software:** O conjunto de instruções e programas que dizem ao hardware o que executar. Divide-se em:
  - **Software de Sistema:** Sistema Operacional (Windows 11, Linux) que gerencia o hardware.
  - **Software de Aplicação:** Programas que realizam tarefas específicas (MS Excel, MS Word, MS Project, AutoCAD, leitores de PDF).

### 2.2 Componentes Principais do Hardware (Estação de Trabalho / Workstation)

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
   - É o "cérebro" do computador. Medido em número de núcleos (*cores*) e velocidade de clock (GHz).
   - *Importância na Prática:* Softwares como MS Excel (fórmulas complexas) e MS Project utilizam múltiplos núcleos do processador para cálculos rápidos.

2. **Memória RAM (Random Access Memory):**
   - Memória temporária de altíssima velocidade usada enquanto os programas estão abertos.
   - *Importância na Prática:* Manter vários arquivos grandes de Excel e manuais técnicos abertos simultaneamente sem deixar a máquina lenta exige no mínimo 16 GB de RAM.

3. **Armazenamento de Dados (SSD vs. HDD):**
   - **HDD (Hard Disk Drive):** Armazenamento magnético tradicional. Mais lento (leitura ~100 a 150 MB/s).
   - **SSD (Solid State Drive NVMe):** Armazenamento em chips de memória flash. Extremamente rápido (leitura ~3.500 MB/s a 7.000 MB/s).
   - *Importância na Prática:* Abrir o sistema operacional e carregar planilhas de 50 MB leva segundos no SSD contra minutos no HDD.

4. **Processador Gráfico (GPU - Graphics Processing Unit):**
   - Placa de vídeo dedicada (ex: NVIDIA RTX). Responsável pelo processamento gráfico e renderização de desenhos 3D/CAD de aeronaves.

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Diagnosticando o Hardware da sua Estação de Trabalho no Windows 11

Siga os passos abaixo para verificar as especificações do computador do laboratório:

1. **Abrir as Informações do Sistema:**
   - Pressione no teclado o atalho `Win + Pause/Break` ou `Win + i` para abrir as **Configurações**.
   - Clique em **Sistema** -> **Sobre**.
2. **Anotar os Dados do Processador e RAM:**
   - Observe o item **Processador** (ex: *Intel Core i7-12700 2.10 GHz*).
   - Observe o item **RAM instalada** (ex: *16,0 GB*).
3. **Verificar o Armazenamento no Gerenciador de Tarefas:**
   - Pressione `Ctrl + Shift + Esc` para abrir o **Gerenciador de Tarefas**.
   - Clique na aba **Desempenho** no menu lateral esquerdo.
   - Clique em **Disco (C:)** e verifique o tipo de disco (SSD ou HDD) e a capacidade total.
   - Clique em **Memória** e veja quanto da memória RAM está em uso neste momento.

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Desafio Individual:**
Você precisa especificar a compra de um novo computador para uma estação de trabalho de suporte técnico que executará planilhas pesadas do MS Excel, Microsoft Project e leitores de arquivos PDF gigantescos.

Monte uma tabela simples no editor de texto com as especificações recomendadas justificando o motivo computacional de cada componente:

| Componente | Especificação Mínima | Justificativa Computacional de Escolha |
| :--- | :--- | :--- |
| **Processador (CPU)** | Intel Core i7 / AMD Ryzen 7 | Múltiplos núcleos para processar planilhas extensas em paralelo |
| **Memória RAM** | 16 GB ou 32 GB DDR4/DDR5 | Permitir execução simultânea do Excel, Project e navegador sem lentidão |
| **Armazenamento** | SSD 512 GB NVMe M.2 | Acelerar tempo de boot do Windows e abertura instantânea de arquivos |
| **Monitores** | 2 Monitores de 24" Full HD | Área de trabalho estendida para comparar dados lado a lado |

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no Windows 11 |
| :--- | :--- |
| `Ctrl + Shift + Esc` | Abre diretamente o Gerenciador de Tarefas do Windows |
| `Win + E` | Abre o Explorador de Arquivos |
| `Win + Pause/Break` | Abre as Propriedades do Sistema |
| `Win + D` | Minimiza todas as janelas e mostra a Área de Trabalho |
| `Alt + Tab` | Alterna rapidamente entre as janelas abertas |
