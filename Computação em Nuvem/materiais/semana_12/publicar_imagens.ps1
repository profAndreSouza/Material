param(
    [Parameter(Mandatory = $true)]
    [string]$DockerHubUsuario,
    [string]$Versao = '1.0'
)

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path

docker buildx build --platform linux/amd64 `
    -t "$DockerHubUsuario/smartn1-backend:$Versao" `
    --push `
    (Join-Path $Root 'backend')

docker buildx build --platform linux/amd64 `
    -t "$DockerHubUsuario/smartn1-frontend:$Versao" `
    --push `
    (Join-Path $Root 'frontend')

Write-Host "Imagens publicadas:"
Write-Host "$DockerHubUsuario/smartn1-backend:$Versao"
Write-Host "$DockerHubUsuario/smartn1-frontend:$Versao"
