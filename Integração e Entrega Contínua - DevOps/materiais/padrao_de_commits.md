# Guia de Padronização de Commits (Conventional Commits)

Este documento apresenta a especificação técnica para padronização de mensagens de commit baseada na convenção internacional **Conventional Commits 1.0.0**. O objetivo deste padrão é garantir a legibilidade do histórico de alterações, facilitar a navegação no código e permitir a automação da geração de relatórios de mudanças (changelogs) e do versionamento semântico.

---

## 1. Estrutura Geral da Mensagem de Commit

Uma mensagem de commit em conformidade com a convenção deve seguir a estrutura abaixo:

```text
<tipo>[escopo opcional][!]: <descrição sucinta>

[corpo opcional explicativo]

[rodapé opcional de referências/breaking changes]
```

### Regras de Formatação:
- A primeira linha (cabeçalho) é obrigatória e deve ter no máximo 72 caracteres.
- O tipo deve ser escrito em letras minúsculas.
- O uso de escopo entre parênteses é opcional, mas fortemente recomendado para projetos em grande escala.
- A descrição sucinta deve iniciar com letra minúscula e utilizar o verbo no **modo imperativo** (exemplo: "adiciona" ou "add" em vez de "adicionado" ou "adicionando").
- Não deve haver ponto final ao término da descrição no cabeçalho.
- O corpo e o rodapé devem ser separados do cabeçalho por uma linha em branco.

---

## 2. Tipos de Commit e Suas Aplicações

A tabela abaixo descreve os tipos de commit padronizados e a situação em que cada um deve ser utilizado:

| Tipo | Descrição | Exemplo de Aplicação |
| :--- | :--- | :--- |
| **feat** | Adiciona uma nova funcionalidade ao sistema. | `feat(auth): adiciona autenticação JWT` |
| **fix** | Corrige um erro ou defeito de software (bug). | `fix(banco): corrige vazamento de conexões no pool` |
| **docs** | Alterações exclusivas na documentação. | `docs(readme): atualiza instruções de instalação` |
| **style** | Mudanças de formatação de código que não afetam o significado lógica. | `style(linter): ajusta identação para 4 espaços` |
| **refactor** | Alteração no código que não corrige bug nem adiciona funcionalidade. | `refactor(telemetria): simplifica estrutura do parser` |
| **perf** | Mudança de código focada em melhorar o desempenho do sistema. | `perf(query): adiciona índice para otimizar busca SQL` |
| **test** | Adição de novos testes ou correção de testes existentes. | `test(sensor): adiciona teste unitário para cálculo OEE` |
| **build** | Alterações que afetam o sistema de compilação ou dependências externas. | `build(npm): atualiza pacote express para v4.18` |
| **ci** | Mudanças nos arquivos de configuração e scripts de CI/CD. | `ci(github): adiciona etapa de linting no workflow` |
| **chore** | Outras tarefas de manutenção que não modificam arquivos de código ou teste. | `chore(gitignore): adiciona pasta temporária ao gitignore` |
| **revert** | Reverte um commit anterior. | `revert: reverte commit 3a4b5c6` |

---

## 3. Alterações Incompatíveis (Breaking Changes)

Uma **Breaking Change** ocorre quando uma alteração modifica o comportamento existente de forma incompatível com a versão anterior, exigindo que clientes ou outros sistemas atualizem suas chamadas.

Existem duas formas válidas de indicar uma Breaking Change:

### Forma 1: Inclusão do ponto de exclamação `!` após o tipo/escopo
```text
feat(api)!: altera a estrutura de resposta do endpoint de telemetria
```

### Forma 2: Inclusão da palavra `BREAKING CHANGE:` no rodapé
```text
feat(api): altera a estrutura de resposta do endpoint de telemetria

BREAKING CHANGE: O campo 'valor' foi renomeado para 'leitura_sensor' no payload JSON.
```

---

## 4. Exemplos Práticos de Commits

### 4.1 Commit Simples de Funcionalidade
```text
feat(sensor): adiciona suporte ao protocolo OPC UA
```

### 4.2 Commit de Correção com Corpo Explicativo
```text
fix(conector): trata exceção de timeout durante desconexão MQTT

O driver de rede não encerrava a instrução de socket quando o servidor caía abruptamente. Foi adicionado um timeout de 3 segundos para liberar a porta.
```

### 4.3 Commit com Referência a Tarefa / Issue
```text
fix(painel): corrige alinhamento do gráfico de temperatura

Closes #142
```

### 4.4 Commit Completo com Breaking Change
```text
refactor(autenticacao)!: substitui suporte a tokens MD5 por bcrypt

BREAKING CHANGE: Senhas salvas com hash MD5 legadas não serão mais aceitas. Todos os usuários deverão redefinir suas credenciais no primeiro acesso.
```

---

## 5. Boas Práticas Recomendadas

1. **Faça Commits Atômicos:** Cada commit deve representar uma única alteração lógica e independente. Evite juntar correções de bugs, novas telas e refatorações em um único commit.
2. **Escreva Mensagens Claras:** Pense no commit como uma mensagem para a sua equipe do futuro. Evite mensagens genéricas como "ajustes", "corrigido" ou "commit".
3. **Mantenha o Histórico Limpo:** Utilize linters de commit (como o Commitlint) integrados aos ganchos de pre-commit do Git para barrar mensagens fora do padrão.
