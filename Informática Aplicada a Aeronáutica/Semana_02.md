# ROTEIRO DE AULA EXPANDIDO — SEMANA 02
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Windows 11: Gerenciamento de Arquivos, Organização de Diretórios, Extensões Técnicas e Backup  
**Ambiente:** Laboratório de Informática  

---

## 1. OBJETIVOS DE INFORMATICA
Ao final desta aula, você será capaz de:
- Operar com eficiência o Explorador de Arquivos do Windows 11.
- Criar e gerenciar estruturas lógicas de diretórios (pastas e subpastas) padronizadas.
- Reconhecer e associar extensões de arquivos (`.pdf`, `.docx`, `.xlsx`, `.dwg`, `.zip`, `.csv`) aos seus respectivos softwares executáveis.
- Exibir e alterar extensões ocultas de arquivos no sistema operacional.
- Executar procedimentos de compactação de arquivos e políticas de backup seguro de dados computacionais.

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 Estrutura em Árvore de Diretórios
O sistema operacional organiza dados no disco em uma **estrutura hierárquica em árvore**:
- **Unidade Raiz (`C:\`):** A raiz do sistema de arquivos.
- **Diretórios (Pastas):** Contêineres lógicos para agrupar arquivos e outras pastas.
- **Caminho Absoluto (*Path*):** A rota completa até um arquivo no sistema (ex: `C:\Oficina\Manutenção\Aeronaves\PR-XYZ\Relatorio.pdf`).

```
C:\
 └── Oficina_Digital\
      ├── 01_Documentos_Tecnicos\
      │    ├── Manuais_PDF\
      │    └── Cadastros_DOCX\
      ├── 02_Planilhas_Gestao\
      │    ├── Frota_XLSX\
      │    └── Estoque_CSV\
      └── 03_Projetos_CAD\
           └── Desenhos_DWG\
```

### 2.2 Extensões de Arquivos e Software Associado
No Windows, os últimos caracteres após o ponto no nome de um arquivo indicam seu **formato e tipo de dado**:

| Extensão | Tipo de Arquivo | Software Principal |
| :--- | :--- | :--- |
| `.xlsx` / `.xls` | Planilha Eletrônica | Microsoft Excel / LibreOffice Calc |
| `.docx` / `.doc` | Documento de Texto | Microsoft Word / LibreOffice Writer |
| `.pdf` | Documento Portátil Não Editável | Adobe Acrobat / Microsoft Edge |
| `.dwg` / `.dxf` | Desenho Vetorial CAD 2D/3D | AutoCAD / DWG TrueView |
| `.mpp` | Cronograma de Projetos | Microsoft Project |
| `.csv` / `.txt` | Texto Plano Separado por Vírgulas/Tabulações | Bloco de Notas / MS Excel |
| `.zip` / `.7z` / `.rar` | Arquivo Compactado (Compressão) | WinRAR / 7-Zip / Gerenciador do Windows |

---

## 3. GUIA PRÁTICO EM LABORATÓRIO (PASSO A PASSO)

### Atividade 1: Exibir Extensões de Arquivos Ocultas no Windows 11
Por padrão, o Windows oculta as extensões dos arquivos conhecidos, o que pode gerar confusão no trabalho computacional. Siga os passos:

1. Abra o **Explorador de Arquivos** com o atalho `Win + E`.
2. No menu superior da janela, clique em **Visualizar**.
3. Passe o ponteiro sobre **Mostrar** e marque a opção **Extensões de nomes de arquivos**.
4. Agora todos os arquivos exibirão a extensão exata (ex: `Relatorio.docx` em vez de apenas `Relatorio`).

---

### Atividade 2: Construindo uma Estrutura Lógica de Diretórios
Vamos criar uma estrutura organizada de pastas para simular um repositório computacional técnico:

1. Acesse o disco `C:\` ou sua pasta de trabalho.
2. Crie uma pasta principal chamada `Gestao_Aeronautica_2026`.
3. Dentro de `Gestao_Aeronautica_2026`, crie as seguintes subpastas:
   - `01_Manuais_Tecnicos`
   - `02_Ordens_de_Servico`
   - `03_Planilhas_Controle`
   - `04_Projetos_MSProject`
4. Renomeie arquivos de teste atribuindo nomes padronizados (sem espaços, usando sublinhado `_` e datas ISO `AAAA-MM-DD`).
   - *Exemplo de boa prática:* `OS_2026-08-15_Inspecao_PréVoo.docx` em vez de `ordem de servico nova (1).docx`.

---

### Atividade 3: Compactação de Arquivos (`.zip`)
Para enviar múltiplos arquivos pesados por e-mail ou sistema de rede:

1. Selecione as pastas `01_Manuais_Tecnicos` e `02_Ordens_de_Servico`.
2. Clique com o botão direito do mouse sobre os arquivos selecionados.
3. Escolha a opção **Compactar para arquivo ZIP**.
4. Defina o nome do arquivo resultante como `Backup_Documentos_2026.zip`.

---

## 4. EXERCÍCIO DE FIXAÇÃO COMPUTACIONAL

**Desafio em Dupla no Laboratório:**
1. Crie um arquivo no Bloco de Notas chamado `dados_frota.txt`.
2. Digite 3 linhas com dados separados por ponto e vírgula:
   ```txt
   Prefixo;Modelo;HorasVoo
   PR-ABC;Cessna 172;1450
   PT-XYZ;Piper Seneca;2300
   ```
3. Salve o arquivo. Em seguida, troque a extensão do arquivo no Explorador de Arquivos de `.txt` para `.csv`.
4. Dê um duplo clique no arquivo `.csv` e observe qual programa o Windows abre automaticamente para ler esse formato.

---

## 5. DICAS DE PRODUTIVIDADE & ATALHOS DE TECLADO

| Atalho de Teclado | Função no Explorador de Arquivos |
| :--- | :--- |
| `Ctrl + Shift + N` | Cria instantaneamente uma Nova Pasta no diretório atual |
| `F2` | Renomeia a pasta ou arquivo selecionado |
| `Shift + Delete` | Exclui o arquivo permanentemente sem enviar para a Lixeira |
| `Ctrl + F` / `F3` | Ativa a barra de busca/pesquisa de arquivos |
| `Alt + Enter` | Exibe as propriedades detalhadas do arquivo (tamanho, permissões, data) |
