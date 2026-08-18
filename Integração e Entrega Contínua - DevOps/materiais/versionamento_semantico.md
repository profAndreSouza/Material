# Guia de Versionamento Semântico (Semantic Versioning - SemVer)

Este documento apresenta as diretrizes e regras formais da especificação **Semantic Versioning 2.0.0 (SemVer)**. O versionamento semântico estabelece um conjunto de regras claras para a atribuição de números de versão a pacotes de software, bibliotecas e APIs, permitindo que desenvolvedores e sistemas automatizados compreendam o impacto de atualizações sem a necessidade de ler o código-fonte.

---

## 1. Estrutura do Número de Versão

Uma versão semântica completa é composta por três inteiros não negativos separados por pontos, no formato:

```text
MAJOR.MINOR.PATCH
```

Exemplo: `2.4.1`

### Significado dos Componentes:

1. **MAJOR (Versão Principal):** Incrementada quando ocorrem alterações incompatíveis com versões anteriores (**Breaking Changes**).
2. **MINOR (Versão Secundária):** Incrementada quando novas funcionalidades são adicionadas ao software de forma **compatível com versões anteriores**.
3. **PATCH (Versão de Correção):** Incrementada quando correções de defeitos (**bug fixes**) são aplicadas de forma **compatível com versões anteriores**.

---

## 2. Regras de Incremento de Versão

### 2.1 Quando incrementar a versão MAJOR (x.0.0)
- Ao alterar, remover ou renomear parâmetros em APIs públicas existentes.
- Ao modificar o comportamento padrão de rotinas existentes que quebrem contratos anteriores.
- Ao remover suporte a funcionalidades legadas marcadas como obsoletas (deprecated).
- *Nota:* Quando a versão MAJOR é incrementada, as versões MINOR e PATCH devem ser zeradas (exemplo: de `1.8.4` para `2.0.0`).

### 2.2 Quando incrementar a versão MINOR (x.y.0)
- Ao adicionar novas rotinas, módulos ou endpoints sem alterar os existentes.
- Ao marcar rotinas existentes como obsoletas (*deprecated*), sem removê-las.
- Ao introduzir melhorias significativamente grandes de desempenho ou arquitetura mantendo compatibilidade.
- *Nota:* Quando a versão MINOR é incrementada, a versão PATCH deve ser zerada (exemplo: de `1.4.2` para `1.5.0`).

### 2.3 Quando incrementar a versão PATCH (x.y.z)
- Ao corrigir erros de lógica, vazamentos de memória ou falhas pontuais mantendo total compatibilidade.
- Ao atualizar dependências internas de segurança sem afetar a API pública.
- *Nota:* Apenas o número PATCH é incrementado (exemplo: de `1.5.0` para `1.5.1`).

---

## 3. Qualificadores Especiais: Pré-lançamentos e Build

### 3.1 Versões de Pré-lançamento (Pre-release)
Uma versão de pré-lançamento indica que o pacote instável está em testes de validação antes da publicação oficial. É indicada anexando um hífen e identificadores separados por ponto imediatamente após o número PATCH.

Sintaxe: `MAJOR.MINOR.PATCH-PRERELEASE`

Exemplos:
- `1.0.0-alpha` (Fase inicial de desenvolvimento)
- `1.0.0-alpha.1` (Primeira iteração da fase alpha)
- `1.0.0-beta.2` (Fase de testes com funcionalidades congeladas)
- `1.0.0-rc.1` (Release Candidate: versão candidata a lançamento definitivo)

Ordem de precedência: `1.0.0-alpha < 1.0.0-beta < 1.0.0-rc.1 < 1.0.0`

### 3.2 Metadados de Compilação (Build Metadata)
Metadados de compilação servem para registrar informações específicas do processo de build (como hash de commit ou data) sem afetar a precedência de versão. É indicado anexando um sinal de mais `+` no final.

Sintaxe: `MAJOR.MINOR.PATCH+BUILD`

Exemplos:
- `1.0.0+20260818`
- `1.0.0-beta.1+exp.sha.5114f85`

---

## 4. O Ciclo de Vida da Versão Inicial (0.y.z)

O desenvolvimento inicial de um software deve começar na versão `0.1.0`.

- A versão `0.y.z` é reservada para **desenvolvimento inicial**.
- Durante esta fase, a API pública **não é considerada estável**. Alterações incompatíveis (Breaking Changes) podem ocorrer a qualquer momento sem a necessidade de incrementar o número MAJOR.
- A primeira versão estável oficial de produção deve ser lançada como `1.0.0`.

---

## 5. Relação entre Conventional Commits e SemVer

Quando a equipe adota **Conventional Commits** e **SemVer** de forma integrada, o processo de incremento de versão e geração de release pode ser $100\%$ automatizado no pipeline de CI/CD:

```text
HISTÓRICO DE COMMITS NAS BRANCHES   ->   INCREMENTO NO SEMVER
------------------------------------------------------------
Apenas commits do tipo 'fix:'       ->   Incremente PATCH  (ex: 1.2.0 -> 1.2.1)
Commits contendo tipo 'feat:'       ->   Incremente MINOR  (ex: 1.2.1 -> 1.3.0)
Commits contendo '!' ou 'BREAKING'   ->   Incremente MAJOR  (ex: 1.3.0 -> 2.0.0)
```

---

## 6. Quadro Resumo de Compatibilidade

```text
  Versão Atual: 2.3.1
  
  [Atualização para 2.3.2] -> Segura. Apenas correções de bugs. Totalmente compatível.
  [Atualização para 2.4.0] -> Segura. Novas funcionalidades foram adicionadas. Compatível.
  [Atualização para 3.0.0] -> ATENÇÃO! Possui alterações incompatíveis. Requer alteração no código do cliente.
```
