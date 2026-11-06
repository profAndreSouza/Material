# Slides reutilizáveis

Abra `index.html` e escolha a disciplina e a aula. O aplicativo usa um único motor de navegação e aplica automaticamente o tema institucional definido em `catalog.js`.

Os conteúdos ficam junto às respectivas disciplinas. A pasta central `Slides/` mantém somente o apresentador, os temas e o modelo para novas aulas.

## Temas

- Fatec: Banco de Dados, Informática Aplicada à Aeronáutica e Sistemas de Informação e Tecnologias Emergentes.
- SENAI: Automação Industrial, Computação em Nuvem, Ciência de Dados, DevOps e Governança de TI.

## Adicionar uma aula

1. Copie `content/_modelo/aula-modelo.js` para a pasta `Slides` da própria disciplina.
2. Edite apenas os dados e o conteúdo dos slides. Não crie outro `index.html`, `style.css` ou controlador de navegação.
3. Inclua a aula em `catalog.js`, informando `id`, `label`, `title` e o caminho relativo do arquivo em `source`.

Exemplo:

```text
Sistema de Informação e Tecnologias Emergentes/
└── Slides/
    ├── aula-02.js
    └── aula-03.js
```

Exemplo em Banco de Dados I: a Aula 04 está no catálogo como `aula-04` e seu conteúdo fica em `Banco de Dados I/slides/aula-04.js`.

O endereço aceita links diretos: `index.html?disciplina=banco-de-dados&aula=aula-04#slide-1`.

## Gerar PDF

1. Carregue a disciplina e a aula desejadas.
2. Clique em **Imprimir / PDF** no cabeçalho ou pressione `P`.
3. Na janela do navegador, escolha **Salvar como PDF**.

O modo de impressão inclui todos os slides da aula, um slide por página, no formato 16:9 e sem os controles de navegação.

## Estrutura central

```text
Slides/
├── index.html
├── app.js
├── catalog.js
├── content/
│   └── _modelo/aula-modelo.js
├── styles/
│   ├── base.css
│   ├── components.css
│   └── themes/{fatec,senai}.css
└── README.md
```
