# Diagrama de Componentes

## Para que serve

O **Diagrama de Componentes** é um dos diagramas estruturais da UML (Unified Modeling Language) usado para **visualizar a estrutura física dos componentes de software** em um sistema. Ele mostra como os componentes estão organizados e como eles se relacionam por meio de interfaces.

### Principais finalidades:

* Modelar a arquitetura de sistemas complexos.
* Representar dependências entre componentes (módulos, bibliotecas, arquivos, executáveis).
* Ajudar a visualizar e organizar o código fonte.
* Planejar e documentar a modularização do sistema.

## Motivação

O desenvolvimento de sistemas modernos exige **alta modularidade**, **reutilização de código** e **facilidade de manutenção**. O diagrama de componentes oferece uma maneira de:

* **Separar responsabilidades** por meio de componentes distintos.
* **Estabelecer contratos de interface** entre partes do sistema.
* **Facilitar a compreensão da estrutura do sistema** por equipes de desenvolvimento, QA, DevOps e gestão.
* Apoiar o **desenvolvimento orientado a serviços**, microserviços e APIs.


## Exemplo contextualizado

### Sistema de E-commerce

Imagine um sistema de e-commerce dividido em componentes. O diagrama de componentes pode ilustrar:

* O componente `Frontend Web` (React)
* O componente `API de Pedidos` (Node.js)
* O componente `Serviço de Pagamento` (microserviço externo)
* O componente `Banco de Dados` (MySQL)
* As interfaces REST entre eles


### Elementos comuns

* **Componente (`Component`)**: Representa uma parte reutilizável do sistema.
* **Interface (`Interface`)**: Mostra os pontos de acesso oferecidos ou requeridos.
* **Dependência (`Dependency`)**: Linha pontilhada indicando uso de outro componente.


## Conclusão

O **Diagrama de Componentes** é essencial para entender **como as partes de um sistema interagem fisicamente**. Ele é útil tanto no planejamento quanto na manutenção de sistemas complexos, e sua representação gráfica facilita a comunicação entre desenvolvedores, arquitetos e stakeholders.
