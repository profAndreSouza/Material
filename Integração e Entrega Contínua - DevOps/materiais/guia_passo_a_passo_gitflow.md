# Guia Passo a Passo de Operações Git e GitFlow

Este documento apresenta o manual prático com a sequência exata de comandos de linha de comando (CLI) para realizar operações no Git segundo a metodologia **GitFlow**.

---

## 1. Preparação e Configuração Inicial

### 1.1 Configurar Identidade do Desenvolvedor
Antes de iniciar qualquer trabalho, configure seu nome e e-mail no Git local:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@empresa.com"
```

### 1.2 Clonar Repositório Existente
```bash
git clone https://github.com/empresa/repositorio.git
cd repositorio
```

---

## 2. Fluxo de Desenvolvimento de Novas Funcionalidades (Feature)

### 2.1 Atualizar a Branch de Integração (`develop`)
Sempre inicie novas tarefas a partir do código mais recente da branch `develop`:
```bash
git checkout develop
git pull origin develop
```

### 2.2 Criar Branch de Feature
Crie e mude para a nova branch no padrão `feature/nome-da-funcionalidade`:
```bash
git checkout -b feature/leitor-telemetria
```
*(Alternativa moderna: `git switch -c feature/leitor-telemetria`)*

### 2.3 Preparar e Realizar Commits Atômicos
Verifique os arquivos modificados, adicione-os à área de preparação (*staging area*) e faça o commit padronizado:
```bash
# Verificar arquivos alterados
git status

# Adicionar arquivos específicos ao staging
git add src/telemetria.py config/settings.json

# Ou adicionar todas as alterações do diretório
git add .

# Realizar o commit com mensagem padronizada
git commit -m "feat(telemetria): adiciona modulo de leitura do sensor OPC UA"
```

### 2.4 Publicar a Branch no Servidor Remoto
Ao realizar o primeiro push da branch, vincule-a ao repositório remoto com a flag `-u`:
```bash
git push -u origin feature/leitor-telemetria
```

---

## 3. Atualização e Organização da Branch com Rebase

Se a branch `develop` recebeu novos commits enquanto você trabalhava em sua `feature`, atualize seu histórico local utilizando `rebase` para manter um histórico linear:

```bash
# 1. Atualize a branch develop local
git checkout develop
git pull origin develop

# 2. Volte para sua feature e aplique o rebase
git checkout feature/leitor-telemetria
git rebase develop
```

### 3.1 Rebase Interativo para Limpeza de Commits (Squash)
Caso queira juntar múltiplos commits pequenos ou rascunhos antes de abrir o Pull Request:
```bash
git rebase -i HEAD~3
```
No editor que abrir, altere a palavra `pick` para `squash` (ou `s`) nos commits que deseja mesclar com o commit anterior.

---

## 4. Resolução de Conflitos de Merge e Rebase

Quando duas alterações entram em conflito no mesmo arquivo, o Git interrompe a operação e insere marcadores de conflito:

```text
<<<<<<< HEAD (Sua alteração atual)
PORTA_COMUNICACAO = 8080
=======
PORTA_COMUNICACAO = 9090
>>>>>>> feature/leitor-telemetria (Alteração vinda do rebase/merge)
```

### 4.1 Passo a Passo para Resolver Conflitos:

1. Abra o arquivo indicado no terminal e localize os marcadores `<<<<<<<`, `=======` e `>>>>>>>`.
2. Edite o código manualmente, decidindo qual versão manter (ou combinando ambas) e remova todos os marcadores do Git.
3. Adicione o arquivo resolvido ao staging:
```bash
git add src/config.py
```
4. Finalize o processo dependendo do comando que gerou o conflito:
```bash
# Se o conflito ocorreu durante um REBASE:
git rebase --continue

# Se o conflito ocorreu durante um MERGE:
git commit -m "fix: resolve conflitos de merge entre develop e feature/leitor-telemetria"
```

---

## 5. Finalização da Feature e Merge em `develop`

Após aprovação do Pull Request (PR) no servidor remoto (ou na execução manual local):

```bash
# 1. Alterne para a branch develop
git checkout develop
git pull origin develop

# 2. Execute a mesclagem desativando a flag Fast-Forward (--no-ff)
git merge --no-ff feature/leitor-telemetria -m "chore: merge PR feature/leitor-telemetria em develop"

# 3. Envie a develop atualizada para o servidor remoto
git push origin develop

# 4. Remova a branch de feature local e remota (opcional)
git branch -d feature/leitor-telemetria
git push origin --delete feature/leitor-telemetria
```

---

## 6. Preparação e Lançamento de Release

Quando a branch `develop` contiver todas as funcionalidades planejadas para uma nova versão do sistema:

### 6.1 Criar Branch de Release
```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.1.0
```

### 6.2 Executar Ajustes Finais e Testes
Nesta fase, apenas correções de bugs de homologação e atualizações de documentação são permitidas:
```bash
git commit -m "docs(changelog): atualiza notas da versao 1.1.0"
git push -u origin release/v1.1.0
```

### 6.3 Concluir a Release (Merge em `main` e `develop`)
Ao aprovar a release:

```bash
# 1. Mesclar em MAIN
git checkout main
git pull origin main
git merge --no-ff release/v1.1.0 -m "chore: release da versao 1.1.0 para producao"

# 2. Criar a Tag Anotada de Versão
git tag -a v1.1.0 -m "Versão 1.1.0 com suporte a OPC UA e telemetria OEE"

# 3. Publicar MAIN e TAGS no Servidor Remoto
git push origin main
git push origin v1.1.0
# Ou publicar todas as tags de uma vez: git push origin --tags

# 4. Propagar os ajustes de release de volta para DEVELOP
git checkout develop
git merge --no-ff release/v1.1.0 -m "chore: sincroniza release v1.1.0 em develop"
git push origin develop

# 5. Excluir a branch de release concluída
git branch -d release/v1.1.0
git push origin --delete release/v1.1.0
```

---

## 7. Quadro Resumo de Comandos Rápidos

| Operação | Comando Git |
| :--- | :--- |
| Criar e entrar em nova branch | `git checkout -b <nome-branch>` |
| Verificar estado dos arquivos | `git status` |
| Adicionar arquivos ao staging | `git add <arquivo>` ou `git add .` |
| Fazer commit | `git commit -m "<mensagem>"` |
| Enviar branch remota pela 1ª vez | `git push -u origin <nome-branch>` |
| Atualizar branch local | `git pull origin <nome-branch>` |
| Aplicar rebase | `git rebase <branch-base>` |
| Mesclar mantendo nó de merge | `git merge --no-ff <branch>` |
| Criar tag anotada de versão | `git tag -a <versao> -m "<descricao>"` |
| Publicar tags no remoto | `git push origin --tags` |
