# 05 – Backend

## 1. Objetivo

Mapear o estado atual do backend desenvolvido no semestre anterior e estruturar sua documentação técnica no padrão utilizado pelo mercado.

Este documento deve refletir **a situação real do projeto** após a análise do código existente.


## 2. Levantamento Inicial Obrigatório

Analize o repositório atual e documente:

### 2.1 Stack Tecnológica

Preencher:

* Linguagem: (Java / .NET C#)
* Framework: (Spring Boot / ASP.NET Core / outro)
* Versão utilizada
* Padrão arquitetural (MVC, Clean Architecture, Monolito, etc.)
* ORM utilizado (Hibernate, JPA, Entity Framework, Dapper, etc.)
* Banco conectado (PostgreSQL, SQL Server, outro)
* Sistema de autenticação (JWT? OAuth2? Identity?)

Exemplo esperado de documentação:

```markdown
#### Stack Identificada

- Linguagem: Java 17
- Framework: Spring Boot 3.x
- ORM: Spring Data JPA (Hibernate)
- Banco: PostgreSQL 15
- Autenticação: JWT Stateless
- Documentação: Swagger/OpenAPI
```



## 3. Arquitetura Atual do Backend

Identifiquem:

* Existe separação por camadas?

  * Controller
  * Service
  * Repository
* Existe DTO?
* Existe camada de domínio?
* Existe tratamento global de exceção?
* Existe padrão de logs?
* Existe validação?

Documentar em texto técnico, exemplo:

```markdown
A aplicação está estruturada em padrão Controller → Service → Repository.
A camada Service concentra regras de negócio.
A persistência é realizada via JPA.
```



## 4. Documentação Formal dos Endpoints

Todos os endpoints devem ser listados e documentados no seguinte padrão profissional:



### Modelo Padrão de Documentação

#### Nome da Funcionalidade

Breve descrição funcional.



#### Endpoint

```
GET /api/veiculos/{id}
```

#### Método HTTP

GET

#### Autenticação

Bearer Token (JWT)

#### Path Params

| Parâmetro | Tipo | Obrigatório | Descrição                |
|  | - | -- |  |
| id        | UUID | Sim         | Identificador do veículo |

#### Response 200

```json
{
  "id": "uuid",
  "modelo": "SUV X",
  "statusProducao": "PINTURA",
  "dataEntradaEtapa": "2026-02-26T10:23:00"
}
```

#### Códigos de Erro

| Código | Descrição              |
|  | - |
| 404    | Veículo não encontrado |
| 401    | Não autenticado        |



## 5. Endpoints que DEVEM ser mapeados

Identifique e documente:

* Cadastro de Cliente
* Cadastro de Pedido
* Consulta de Pedido
* Consulta de Veículo
* Atualização de Status
* Login
* Registro
* Qualquer endpoint de manutenção
* Qualquer endpoint financeiro
* Qualquer endpoint de financiamento

Se não existir, registrar explicitamente:

```markdown
Endpoint não encontrado no projeto atual.
Necessário implementação.
```



## 6. Situação Geral Atual

Finalize com um resumo técnico objetivo:

```markdown
O backend encontra-se funcional para cadastro de clientes e pedidos.
Não há integração com IoT.
Não há modelagem de etapas de produção.
Não há controle de eventos.
Autenticação implementada via JWT.
```

Sem textos genéricos. Apenas diagnóstico técnico.


