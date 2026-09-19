# Repositório de Materiais Didáticos & Unidades Curriculares

Este repositório reúne os planos de ensino, ementas, cronogramas, materiais didáticos teóricos em Markdown, apresentações de slides em LaTeX Beamer e projetos práticos das unidades curriculares ministradas nos cursos de Tecnologia da Informação, Engenharia e Automação.

---

## 📢 Avisos e Avaliações

> [!IMPORTANT]
> **Calendário de Provas P1 e Guias de Estudo (TADS2 e TADS2-S)**  
> Consulte as datas das provas regimentais e acesse todos os guias de estudo detalhados no arquivo:  
> 👉 **[📅 Calendário de Avaliações — Datas_P1.md](./Datas_P1.md)**

---

## 📚 Visão Geral do Repositório

O repositório está organizado de forma modular para atender a diferentes trilhas de formação e unidades curriculares:

### 1. Trilha de Software Industrial & Indústria 4.0 (Ecossistema Integrado)
Conjunto de disciplinas que atuam de forma conectada utilizando uma célula fabril didática de referência para simulação e integração de sistemas TI/TA:

- **[Automação Industrial](./Automação%20Industrial/)**: Aquisição de sinais de sensores, atuadores, controladores (CLP) e protocolos industriais (MQTT/Modbus).  
  *Guia de Estudo:* [GUIA_ESTUDO_P1.md](./Automação%20Industrial/GUIA_ESTUDO_P1.md)
- **[Ciência de Dados](./Ciencia%20de%20Dados/)**: Análise exploratória, estatística descritiva, séries temporais, aprendizado de máquina e cálculo do OEE.  
  *Guia de Estudo:* [GUIA_ESTUDO_P1.md](./Ciencia%20de%20Dados/GUIA_ESTUDO_P1.md)
- **[Integração e Entrega Contínua (DevOps)](./Integração%20e%20Entrega%20Contínua%20-%20DevOps/)**: Versionamento com Git, esteiras de CI/CD (GitHub Actions), contêineres (Docker) e observabilidade.  
  *Guia de Estudo:* [GUIA_ESTUDO_P1.md](./Integração%20e%20Entrega%20Contínua%20-%20DevOps/GUIA_ESTUDO_P1.md)
- **[Computação em Nuvem](./Computação%20em%20Nuvem/)**: Infraestrutura escalável, bancos de dados gerenciados, computação serverless e alta disponibilidade.  
  *Guia de Estudo:* [GUIA_ESTUDO_P1.md](./Computação%20em%20Nuvem/GUIA_ESTUDO_P1.md)
- **[ADS FactoryHub](./ADS%20FactoryHub/)**: Aplicação web/IoT integradora que centraliza a ingestão de telemetria, APIs REST e dashboards operacionais.

### 2. Trilha de Gestão e Governança de TI
- **[Governança de TI](./Governança%20de%20TI/)**: Modelos de governança corporativa e de TI (COBIT, ITIL, ISO/IEC 38500), alinhamento estratégico, gestão de riscos, compliance (SOX, LGPD) e elaboração do Plano Diretor de Governança de TI (PDGTI).  
  *Guia de Estudo:* [GUIA_ESTUDO_P1.md](./Governança%20de%20TI/GUIA_ESTUDO_P1.md)

### 3. Trilhas Específicas e Tecnologias Emergentes
- **[Sistema de Informação e Tecnologias Emergentes](./Sistema%20de%20Informação%20e%20Tecnologias%20Emergentes/)**: Fundamentos de blockchain, criptografia, arquiteturas descentralizadas e inovação tecnológica.
- **[Informática Aplicada à Aeronáutica](./Informática%20Aplicada%20a%20Aeronáutica/)**: Conteúdos voltados à aplicação de tecnologias de informação e ferramentas computacionais no setor aeronáutico.

### 4. Recursos e Modelos
- **[latex_template](./latex_template/)**: Modelos institucionais em LaTeX Beamer para apresentações de aulas e documentos acadêmicos.

---

## 🗂️ Padronização dos Materiais Didáticos

As disciplinas presentes neste repositório seguem uma estrutura padronizada de organização:

- `README.md`: Plano de ensino completo contendo ementa oficial, objetivos pedagógicos, capacidades técnicas e socioemocionais, referências bibliográficas (básicas e complementares), critérios de avaliação e o cronograma semestral detalhado.
- `aulas/`: Apostilas e arquivos teóricos em formato Markdown (`semana_XX.md`) detalhando o conteúdo de cada encontro letivo.
- `slides/`: Arquivos de apresentação desenvolvidos em LaTeX Beamer (`semana_XX.tex`) utilizando o tema institucional oficial SENAI.
- `GUIA_ESTUDO_PX.md`: Roteiros de revisão e preparação direcionados para as avaliações regimentais com exercícios e mapas conceituais.

---

## 🚀 Como Utilizar este Repositório

### Para Estudantes
1. Consulte o arquivo **[Datas_P1.md](./Datas_P1.md)** para verificar as datas de avaliações da sua turma e acessar os roteiros de estudo.
2. Navegue até a pasta da sua unidade curricular e abra o arquivo `README.md` para consultar o cronograma semestral e os critérios de nota.
3. Acesse a pasta `aulas/` de cada disciplina para realizar a leitura dos materiais teóricos antes dos encontros presenciais.
4. Nas disciplinas da trilha de software industrial, utilize os recursos e rotas da plataforma **FactoryHub** para execução dos exercícios práticos.

### Para Docentes
1. Acesse a pasta `slides/` de cada disciplina para compilar e ministrar as aulas utilizando o padrão visual Beamer LaTeX.
2. Siga as orientações constantes na ementa e no cronograma do `README.md` de cada unidade curricular para condução das oficinas e avaliações regimentais.