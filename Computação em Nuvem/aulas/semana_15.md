# Semana 15: Atividade Integrada Parte 2 — Pipelines CI/CD, Docker Hub e Implantação na Nuvem

## 1. Visão Geral & Objetivos
Desenvolver a aplicação de monitoramento industrial da planta e construir um pipeline automatizado de Integração e Entrega Contínuas (CI/CD) utilizando **GitHub Actions** e **Docker Hub**, realizando o deploy automatizado na nuvem AWS.

---

## 2. Conteúdo Teórico

### 2.1 Conceitos de DevOps e CI/CD
- **Continuous Integration (CI):** Automação do build, testes e criação de artefatos a cada push no repositório.
- **Continuous Deployment (CD):** Publicação automatizada do artefato gerado no ambiente de produção/nuvem.

### 2.2 Registro de Containers e GitHub Actions
- **Docker Hub / Container Registry:** Repositório centralizado para armazenamento e versionamento de imagens Docker.
- **GitHub Actions Workflows:** Arquivos `.github/workflows/deploy.yml` configurados com triggers de compilação, login no Docker Hub, push de imagem e execução SSH na AWS EC2.

---

## 3. Aplicação Prática no Ecossistema Smart N1

### 3.1 Atividade de Laboratório (Atividade Integrada - Etapa 2)
1. Desenvolver uma aplicação Web/API em Node.js, Python ou Java para exibição do status dos equipamentos industriais.
2. Criar o arquivo `Dockerfile` na raiz do projeto da aplicação.
3. Configurar os segredos de acesso (`DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`, `AWS_EC2_SSH_KEY`) nas configurações do repositório no GitHub.
4. Escrever o pipeline do GitHub Actions para:
   - Fazer checkout do código.
   - Gerar a imagem Docker e enviá-la ao Docker Hub.
   - Conectar via SSH na instância EC2 do AWS Learner Lab, realizar a atualização da imagem (`docker pull`) e reiniciar o container.
5. Realizar uma alteração no código da aplicação e validar a execução completa do pipeline CI/CD sem intervenção manual.

---

## 4. Exercícios de Fixação
1. Explique como a integração entre GitHub Actions, Docker Hub e AWS EC2 automatiza o ciclo de entrega de software na Indústria 4.0.
2. Quais os cuidados de segurança necessários no gerenciamento de chaves SSH e senhas dentro de pipelines de CI/CD?
