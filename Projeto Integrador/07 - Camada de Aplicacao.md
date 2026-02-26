# 07 – Camada de Aplicação (Web e Mobile)

## 1. Objetivo

Levantar o estado atual das aplicações Web e Mobile desenvolvidas no semestre anterior e mapear lacunas para integração com o novo ecossistema IoT.


## 2. Levantamento da Stack

Documente:

### Web

* Framework (React? Angular? Vue?)
* Versão
* Gerenciamento de estado (Redux? Context API?)
* Biblioteca de UI
* Comunicação com backend (Axios? Fetch?)
* Autenticação (JWT armazenado onde?)

### Mobile

* Framework (Flutter? React Native? MAUI?)
* Versão
* Comunicação com backend
* Autenticação
* Plataforma alvo (Android? iOS?)



## 3. Mapeamento das Telas Existentes

Listar TODAS as telas existentes.

Modelo:

| Tela                    | Implementada | Integrada ao Backend | Observações                |
| -- |  | -- | -- |
| Login                   | Sim          | Sim                  | JWT funcionando            |
| Cadastro Cliente        | Sim          | Sim                  |                            |
| Pedido                  | Sim          | Parcial              | Não mostra status produção |
| Acompanhamento Produção | Não          | —                    | Necessário criar           |
| Manutenção              | Não          | —                    | Necessário criar           |



## 4. Fluxo Atual do Usuário

Documentar como o sistema funciona hoje:

1. Usuário faz login
2. Consulta pedido
3. Visualiza dados estáticos

Ou outro fluxo real identificado.



## 5. Lacunas Identificadas

Aponte tecnicamente:

* Não existe tela de acompanhamento de produção
* Não existe atualização em tempo real
* Não existe dashboard de eventos
* Não existe histórico de etapas
* Não existe módulo de recomendação de opcionais
* Não existe integração com financiamento

Registrar de forma objetiva.



### Comunicação Esperada

Documentar:

* Web/Mobile irão consumir:

  * `/api/producao/{vin}`
  * `/api/recomendacoes/{clienteId}`
* Autenticação via JWT
* Possível uso futuro de WebSocket para atualização em tempo real
