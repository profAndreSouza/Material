# Ecossistema Integrado de Aprendizagem — Smart N1

Este repositório reúne os planos de ensino, materiais didáticos teóricos, apresentações de slides em LaTeX e projetos práticos das unidades curriculares da trilha de Tecnologia da Informação e Automação Industrial.

---

## 🎯 Visão Geral & Modelo Pedagógico

O modelo de ensino é fundamentado no **Ecossistema Integrado de Aprendizagem**, onde as disciplinas teóricas e práticas atuam de forma sinérgica utilizando uma célula fabril didática de referência — a **Smart N1**.

A proposta pedagógica conecta 4 pilares tecnológicos fundamentais da Indústria 4.0:

1. **Tecnologia da Automação (TA / OT)**: Aquisição de sinais de sensores, atuadores e controladores de campo (CLPs) via protocolos industriais e IoT (MQTT / Modbus).
2. **Ciência de Dados**: Análise exploratória, tratamento de telemetria em tempo real, inferência estatística, detecção de anomalias e cálculo de indicadores de eficiência (OEE).
3. **Integração e Entrega Contínua (DevOps)**: Versionamento de código, esteiras automatizadas de CI/CD, testes unitários, containerização e observabilidade.
4. **Computação em Nuvem**: Arquitetura de infraestrutura escalável, bancos de dados gerenciados, serviços serverless e alta disponibilidade.

Adicionalmente, o repositório contempla disciplinas de gestão e governança estratégica (como **Governança de TI**), garantindo o alinhamento entre soluções tecnológicas e valor de negócio.

---

## 📚 Padronização dos Materiais Didáticos

Cada unidade curricular presente neste repositório é organizada sob um padrão estrutural único para facilitar o acompanhamento por alunos e docentes:

- `README.md`: Plano de ensino completo contendo ementa oficial, objetivos pedagógicos, capacidades técnicas e socioemocionais, referências bibliográficas (básicas e complementares), critérios de avaliação e o **cronograma semestral detalhado**.
- `aulas/`: Coleção de guias e apostilas teóricas em formato Markdown (`semana_XX.md`) cobrindo o conteúdo de cada semana letiva.
- `slides/`: Códigos-fonte das apresentações de aula desenvolvidos em **LaTeX Beamer** (`semana_XX.tex`) utilizando o tema institucional padronizado.

---

## 🚀 Plataforma Prática Integrada (FactoryHub)

Para vivenciar na prática o ciclo completo de desenvolvimento de software e telemetria industrial, o ecossistema disponibiliza a aplicação **FactoryHub**: uma plataforma web em Flask containerizada via Docker Compose que simula e processa os eventos do chão de fábrica, integrando ingestão MQTT, persistência de dados, endpoints REST e dashboards operacionais em tempo real.

---

## 🛠️ Como Utilizar este Repositório

### Para Estudantes
1. Navegue até a disciplina desejada e consulte o arquivo `README.md` principal para visualizar o cronograma semestral e as datas de avaliação.
2. Acesse a pasta `aulas/` para estudar os materiais teóricos semanais recomendados antes dos encontros presenciais.
3. Utilize os exercícios práticos e datasets da plataforma **FactoryHub** para fixação dos conceitos técnicos de programação, dados e infraestrutura.

### Para Docentes
1. Utilize os arquivos `.tex` localizados na pasta `slides/` de cada disciplina para compilar e ministrar as apresentações com o padrão visual oficial.
2. Siga as diretrizes e mapeamentos bibliográficos constantes na ementa para condução das atividades de laboratório e avaliações.
