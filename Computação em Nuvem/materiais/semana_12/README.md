# Aplicações Docker — Semana 12

O material contém duas aplicações para demonstrar uma VPC em camadas:

- `smartn1-frontend`: Nginx público que consulta o backend por proxy reverso;
- `smartn1-backend`: API Flask privada com endpoints de saúde, status e telemetria.

Nesta aula de Computação em Nuvem, as imagens são construídas e publicadas previamente pelo professor. Os alunos apenas executam `docker pull` e `docker run`. A construção de imagens, tags e `docker push` será trabalhada posteriormente em DevOps.

## Validação local do professor

```bash
docker compose up --build -d
docker compose ps
```

Acesse <http://localhost:8080>. A página deve informar que o backend privado respondeu.

```bash
docker compose down
```

## Publicação pelo professor

Faça login antes de executar o script:

```powershell
docker login
.\publicar_imagens.ps1 -DockerHubUsuario SEU_USUARIO_DOCKERHUB -Versao 1.0
```

O script produz e publica imagens Linux AMD64 adequadas às instâncias EC2 x86 usadas no laboratório:

```text
SEU_USUARIO_DOCKERHUB/smartn1-backend:1.0
SEU_USUARIO_DOCKERHUB/smartn1-frontend:1.0
```

Depois da publicação, substitua `PROFESSOR_DOCKERHUB` no material entregue à turma pelo usuário real.

## Uso pelo aluno na AWS

Na EC2 privada:

```bash
docker pull PROFESSOR_DOCKERHUB/smartn1-backend:1.0
docker run -d --name smartn1-backend --restart unless-stopped \
  -p 8000:8000 \
  PROFESSOR_DOCKERHUB/smartn1-backend:1.0
```

Na EC2 pública, substituindo pelo IP privado do backend:

```bash
docker pull PROFESSOR_DOCKERHUB/smartn1-frontend:1.0
docker run -d --name smartn1-frontend --restart unless-stopped \
  -p 80:8080 \
  -e BACKEND_HOST=IP_PRIVADO_BACKEND \
  -e BACKEND_PORT=8000 \
  PROFESSOR_DOCKERHUB/smartn1-frontend:1.0
```

O Security Group do backend deve liberar TCP/8000 somente a partir do Security Group do frontend.

## Contrato das imagens

### Backend

- porta do contêiner: `8000`;
- health check: `/health`;
- status consumido pelo frontend: `/status`;
- telemetria de exemplo: `/telemetria`.

### Frontend

- porta do contêiner: `8080`;
- variável `BACKEND_HOST`: IP privado ou DNS do backend;
- variável `BACKEND_PORT`: `8000` por padrão;
- health check: `/health`.
