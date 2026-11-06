# Oracle XE 11g — Banco de Dados I

Ambiente de aula com **Oracle Database 11g Express Edition 11.2.0.2.0, 64 bits**, SID `XE` e conta `BD001` com senha `BD001`.

A [imagem gvenzl/oracle-xe](https://github.com/gvenzl/oci-oracle-xe) executa Oracle em **Linux amd64**. A versão do banco corresponde à solicitada, mas o banner TNS identifica Linux, em vez de Windows.

## Iniciar

Com Docker Desktop iniciado e configurado para containers Linux, execute na raiz do repositório:

```powershell
cd "Banco de Dados I/docker"
docker compose up -d --wait --wait-timeout 600
docker compose ps
```

O primeiro início baixa a imagem, prepara o volume e cria a conta. Aguarde o estado `healthy` antes de conectar.

## Conectar pelo DBeaver ou SQL Developer

Selecione Oracle, conexão básica e **SID** (não PDB):

| Campo | Valor |
| --- | --- |
| Host, no computador que executa o Docker | `localhost` |
| Porta | `1521` |
| SID | `xe` |
| Usuário | `BD001` |
| Senha | `BD001` |
| Função/role | Normal (Default) |

URL JDBC com SID: `jdbc:oracle:thin:@localhost:1521:xe`.

### Sobre o host APOLO

O container tem hostname `APOLO` e esse alias na rede do Compose. Isso **não registra APOLO no DNS do Windows ou da rede da instituição**, nem altera o servidor institucional existente.

Para uma instalação individual, use `localhost`. Para usar literalmente `APOLO` localmente, seria necessário configurar esse nome no arquivo `hosts` do computador apontando para `127.0.0.1`; não faça isso se o nome já for utilizado para acessar o servidor institucional.

Por padrão, a porta é publicada apenas na interface local. Para compartilhar este banco com outros computadores do laboratório, execute no PowerShell, nesta pasta:

```powershell
$env:ORACLE_BIND_ADDRESS = "0.0.0.0"
docker compose up -d --wait --wait-timeout 600
```

Nos computadores dos alunos, use o IP do computador que executa o Docker, ou `APOLO` se o DNS da rede já apontar esse nome para ele. O firewall do host precisa permitir TCP 1521 na rede do laboratório. Todos os acessos com `BD001` compartilham o mesmo esquema e as mesmas tabelas.

## Acessar pelo terminal (SQL*Plus)

Na pasta `Banco de Dados I/docker`, execute no Prompt de Comando, PowerShell ou Bash para abrir o SQL*Plus com a conta do aluno, sem instalar um cliente adicional:

```bash
docker compose exec oracle sqlplus -L BD001/BD001@//localhost:1521/XE
```

Quando aparecer `SQL>`, execute os comandos abaixo para verificar o banco. Use `EXIT;` para sair:

```sql
SELECT USER FROM dual;
SELECT banner FROM v$version;
SELECT SYS_CONTEXT('USERENV', 'INSTANCE_NAME') AS instancia FROM dual;
EXIT;
```

A conta pode criar tabelas, sequências, procedures, triggers, views e outros objetos de aula no próprio esquema, sem usar a conta de administração.

## Administração e persistência

As contas `SYS` e `SYSTEM` usam a senha didática `OracleAdmin123`. Para definir outra senha antes da primeira inicialização, configure a variável `ORACLE_PASSWORD` no terminal. As variáveis de usuário e senha são aplicadas somente na criação inicial do banco; alterá-las depois não muda as contas do volume existente.

```powershell
# Acompanhar a inicialização (Ctrl+C encerra somente a visualização dos logs)
docker compose logs -f oracle

# Parar e remover o container, mantendo os dados no volume
docker compose down

# Iniciar novamente com os dados existentes
docker compose up -d --wait --wait-timeout 600
```

Os dados ficam no volume `oracle-data`, montado em `/u01/app/oracle/oradata`, caminho específico do Oracle 11g nesta imagem. Não use `docker compose down -v` se quiser preservar os exercícios: a opção `-v` apaga o volume do banco.
