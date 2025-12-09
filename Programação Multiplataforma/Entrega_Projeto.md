# Instruções para adicionar o vídeo pitch e a documentação ao repositório

## 1. Criar a pasta de documentação

No repositório, crie a pasta:

```
/docs
```

Dentro dela, coloque:

* DOCUMENTACAO_DO_PROJETO.md
* Outras mídias ou arquivos complementares (diagramas, PDFs etc.)

Exemplo:

```
/docs
   DOCUMENTACAO_DO_PROJETO.md
   video_pitch.mp4
```


## 2. Adicionar o vídeo pitch ao repositório

### Opção recomendada: colocar o vídeo fora do GitHub

O ideal é subir o vídeo para:

* YouTube (como "não listado"), ou
* Google Drive com link público de visualização

Depois basta colocar esse link no README e/ou na pasta docs.

### Caso queira armazenar o vídeo no GitHub

Se desejar incluir o vídeo no próprio repositório:

1. Crie a pasta:

   ```
   /video
   ```

2. Coloque o arquivo do vídeo lá:

   ```
   /video/pitch.mp4
   ```

3. Se o arquivo tiver mais de 100 MB, ative o Git LFS:

   ```
   git lfs install
   git lfs track "*.mp4"
   git add .gitattributes
   ```

4. Faça commit e push:

   ```
   git add video/pitch.mp4
   git commit -m "Adiciona video pitch"
   git push
   ```