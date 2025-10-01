# Camada de Aplicação (Modelo OSI e TCP/IP)

A **Camada de Aplicação** é a camada mais próxima do usuário no modelo OSI. Ela fornece serviços de rede diretamente para os aplicativos e define como os programas se comunicam pela rede.

No modelo **TCP/IP**, algumas funções das camadas **Aplicação**, **Apresentação** e **Sessão** do modelo OSI foram agrupadas apenas na **Camada de Aplicação**.

## 15.1 Aplicação, Apresentação e Sessão

### Camada de Aplicação

* Interface entre aplicativos e a rede.
* Protocolos comuns:

  * HTTP → Acesso a páginas da Web.
  * FTP / TFTP → Transferência de arquivos.
  * IMAP / POP3 / SMTP → E-mail.
  * DNS → Resolução de nomes.

### Camada de Apresentação

Responsável por preparar os dados para que possam ser transmitidos corretamente.

* Formatar os dados → Ex.: converter caracteres UTF-8 em outro padrão.
* Compactar os dados → Ex.: arquivos .zip ou compressão de imagens.
* Criptografar os dados → Ex.: HTTPS utiliza SSL/TLS para proteger informações.

### Camada de Sessão

Responsável pelo controle do diálogo entre aplicativos:

* Inicia e mantém sessões de comunicação.
* Restaura conexões interrompidas.
* Exemplo: uma chamada de vídeo no Zoom ou Teams mantém a sessão ativa até o fim da reunião.

## 15.2 Modelo Cliente-Servidor e Ponto a Ponto

### Modelo Cliente-Servidor

* O cliente envia requisições (ex.: navegador acessando uma página).
* O servidor responde (ex.: servidor web entregando a página).
* Exemplo: quando você acessa [www.google.com](http://www.google.com), seu navegador é o cliente e o Google é o servidor.

### Modelo Ponto a Ponto (P2P)

* Não há servidor central dedicado.
* Cada dispositivo (peer) pode atuar como cliente e servidor.
* Exemplos:

  * Compartilhamento de arquivos no BitTorrent.
  * Direct Connect, eDonkey, Freenet.

Exemplo prático: Em uma rede P2P, seu computador pode baixar músicas de outro peer e, ao mesmo tempo, enviar vídeos que você tem armazenados.

## 15.3 Protocolos da Web e de E-mail

### Funcionamento do HTTP

1. O usuário digita a URL no navegador (ex.: [http://www.cisco.com/index.html](http://www.cisco.com/index.html)).

   * http → protocolo.
   * [www.cisco.com](http://www.cisco.com) → nome do servidor.
   * index.html → arquivo solicitado.
2. O navegador consulta o DNS para obter o IP do servidor.
3. O cliente envia uma requisição HTTP GET.
4. O servidor retorna o código HTML da página.
5. O navegador interpreta o HTML e exibe a página.

Observação:

* HTTP → protocolo não seguro (porta 80).
* HTTPS → versão segura com criptografia TLS/SSL (porta 443).

### Métodos HTTP

* GET → Solicitar dados (ex.: acessar uma página).
* POST → Enviar dados ao servidor (ex.: enviar formulário).
* PUT → Atualizar dados (ex.: upload de uma imagem).

### Protocolos de E-mail

* SMTP (porta 25) → envio de e-mails.
* POP3 (porta 110) → recebimento; baixa e remove do servidor.
* IMAP (porta 143) → recebimento; mantém cópias no servidor.

Exemplo:

* Quando você envia um e-mail → usa SMTP.
* Quando acessa pelo celular → pode usar IMAP (mantém mensagens no servidor).
* Quando baixa os e-mails para o PC → pode usar POP3 (remove do servidor).

## 15.4 Serviços de Endereçamento IP

### DNS – Sistema de Nomes de Domínio

* Converte nomes como [www.cisco.com](http://www.cisco.com) → em endereços IP (198.133.219.25).
* Hierarquia:

  * .com, .org, .br (domínios de topo).
* Tipos de registros:

  * A → endereço IPv4.
  * AAAA → endereço IPv6.
  * MX → servidor de e-mail.
  * NS → servidor de nomes.

Ferramenta prática:

* `nslookup www.google.com` → retorna o endereço IP associado ao nome.

### DHCP – Protocolo de Configuração Dinâmica de Host

* Atribui endereços IP automaticamente.
* Processo:

  1. Cliente → DHCPDISCOVER.
  2. Servidor → DHCPOFFER.
  3. Cliente → DHCPREQUEST.
  4. Servidor → DHCPACK (confirmação).

Exemplo prático:
Quando você conecta o celular ao Wi-Fi, o roteador (servidor DHCP) atribui um IP automaticamente.

## 15.5 Serviços de Compartilhamento de Arquivos

### FTP – File Transfer Protocol

* Porta 21 → controle.
* Porta 20 → transferência de dados.
* Permite upload e download de arquivos.
* Exemplo: envio de arquivos de um site para um servidor de hospedagem.

### SMB – Server Message Block

* Protocolo usado para compartilhar arquivos e impressoras em redes Windows.
* Permite acessar pastas remotas como se fossem locais.
* Exemplo: acesso a pastas compartilhadas em uma rede corporativa.

## 15.6 Resumo do Módulo

* Camada de Aplicação → interface entre programas e rede.
* Camada de Apresentação → formatação, compressão e criptografia.
* Camada de Sessão → inicia, mantém e reinicia diálogos.
* Modelo Cliente-Servidor e P2P → diferentes formas de comunicação.
* Protocolos Web → HTTP/HTTPS (GET, POST, PUT).
* Protocolos de E-mail → SMTP, POP3, IMAP.
* DNS → converte nomes em IPs.
* DHCP → atribui IPs dinamicamente.
* FTP e SMB → compartilhamento de arquivos.

## Quiz de Fixação

1. Qual a diferença entre POP3 e IMAP?
2. Explique o papel do DNS em uma navegação na web.
3. Quais são as principais funções da Camada de Apresentação?
4. Em que situação o modelo P2P é mais vantajoso que o cliente-servidor?
5. Qual é a diferença entre HTTP e HTTPS?
