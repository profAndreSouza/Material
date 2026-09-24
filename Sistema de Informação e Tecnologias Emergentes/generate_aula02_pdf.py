import os
import re
import base64
import subprocess
import nbformat
from nbconvert import HTMLExporter

print("=" * 80)
print("INICIANDO CONVERSÃO DA AULA 02 PARA PDF (COM CONTEXTUALIZAÇÃO PARA LEIGOS)")
print("=" * 80)

nb_path = r"c:\projetos\Material\Sistema de Informação e Tecnologias Emergentes\Aula02_Consenso_Ethereum_EVM.ipynb"
html_path = r"c:\projetos\Material\Sistema de Informação e Tecnologias Emergentes\Aula02_Consenso_Ethereum_EVM.html"
pdf_path = r"c:\projetos\Material\Sistema de Informação e Tecnologias Emergentes\Aula02_Consenso_Ethereum_EVM.pdf"
edge_exe = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# 1. Carregar Notebook
with open(nb_path, "r", encoding="utf-8") as f:
    nb = nbformat.read(f, as_version=4)

print(f"1. Notebook carregado ({len(nb.cells)} células).")

# 2. Exportar para HTML usando nbconvert HTMLExporter
exporter = HTMLExporter()
exporter.template_name = "classic"
html_content, resources = exporter.from_notebook_node(nb)
print("2. HTML base gerado com sucesso via HTMLExporter.")

# 3. Converter imagens locais (JPG/PNG) em Base64
images_dir = r"c:\projetos\Material\Sistema de Informação e Tecnologias Emergentes\images"

def get_base64_image(filename):
    full_path = os.path.join(images_dir, filename)
    if os.path.exists(full_path):
        ext = os.path.splitext(filename)[1].lower().replace(".", "")
        mime = "jpeg" if ext in ["jpg", "jpeg"] else "png"
        with open(full_path, "rb") as img_f:
            b64 = base64.b64encode(img_f.read()).decode("utf-8")
            return f"data:image/{mime};base64,{b64}"
    return None

# Mapeamento de imagens
image_files = [
    "descentralizacao_seguranca_escalabilidade.jpg",
    "mecanismo_consenso.jpg",
    "particionamento_memoria_evm.jpg",
    "eip_1559.jpg"
]

for img_name in image_files:
    pattern = r'src=["\'](?:images[/\\\\])?' + re.escape(img_name) + r'["\']'
    if re.search(pattern, html_content):
        b64_src = get_base64_image(img_name)
        if b64_src:
            html_content = re.sub(pattern, f'src="{b64_src}"', html_content)
            print(f"   -> Imagem embutida em Base64: {img_name}")

# 4. Injetar Estilos Visuais Elegantes e CSS de Impressão (A4)
custom_css = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap');

:root {
    --primary: #4338ca;
    --primary-light: #e0e7ff;
    --text-main: #1e293b;
    --text-muted: #64748b;
    --border-color: #cbd5e1;
    --bg-callout: #f8fafc;
    --bg-code: #0f172a;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    color: var(--text-main);
    line-height: 1.65;
    background-color: #ffffff;
    font-size: 13.5px;
    padding: 0;
    margin: 0;
}

#notebook-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 25px 35px;
    box-shadow: none !important;
}

/* Títulos e Cabeçalhos */
h1 {
    color: #1e1b4b;
    font-weight: 800;
    font-size: 24px;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 8px;
    margin-top: 28px;
    margin-bottom: 16px;
}

h2 {
    color: #312e81;
    font-weight: 700;
    font-size: 19px;
    margin-top: 22px;
    margin-bottom: 12px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 5px;
}

h3 {
    color: #3730a3;
    font-weight: 600;
    font-size: 16px;
    margin-top: 18px;
    margin-bottom: 10px;
}

h4 {
    color: #4338ca;
    font-weight: 600;
    font-size: 14.5px;
}

/* Bloco de Destaque / Analogia para Leigos */
blockquote {
    border-left: 4.5px solid #4f46e5 !important;
    background: linear-gradient(to right, #f8fafc, #f1f5f9) !important;
    padding: 14px 18px !important;
    border-radius: 0 10px 10px 0 !important;
    margin: 16px 0 !important;
    color: #1e293b !important;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

blockquote h3 {
    color: #312e81 !important;
    margin-top: 0 !important;
    margin-bottom: 8px !important;
    font-size: 15px !important;
    display: flex;
    align-items: center;
}

/* Tabelas */
table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100% !important;
    margin: 18px 0 !important;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #cbd5e1;
    font-size: 12.5px;
}

table th {
    background-color: #f1f5f9 !important;
    color: #0f172a !important;
    font-weight: 700;
    padding: 9px 12px !important;
    border-bottom: 2px solid #cbd5e1 !important;
    text-align: left;
}

table td {
    padding: 8px 12px !important;
    border-bottom: 1px solid #e2e8f0 !important;
    color: #334155 !important;
}

table tr:nth-child(even) td {
    background-color: #f8fafc;
}

table tr:last-child td {
    border-bottom: none !important;
}

/* Código de Entrada */
div.input_area {
    background-color: #f8fafc !important;
    border: 1px solid #cbd5e1 !important;
    border-radius: 6px !important;
    margin-bottom: 6px !important;
}

div.input_area pre {
    font-family: 'Fira Code', 'Consolas', monospace !important;
    font-size: 11.5px !important;
    line-height: 1.5;
}

/* Terminal de Saída */
div.output_area pre {
    background-color: #0f172a !important;
    color: #e2e8f0 !important;
    border-radius: 6px !important;
    padding: 12px 14px !important;
    font-family: 'Fira Code', 'Consolas', monospace !important;
    font-size: 11.5px !important;
    line-height: 1.5;
    border: 1px solid #1e293b;
    overflow-x: auto;
}

/* Gráficos Matplotlib e Imagens */
div.output_png, div.output_area img {
    text-align: center;
    margin: 12px 0;
}

div.output_png img, img {
    max-width: 95% !important;
    height: auto !important;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    display: inline-block;
}

/* Mermaid SVG */
pre.mermaid, .mermaid {
    text-align: center;
    background: #ffffff !important;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
}

/* Configurações Estritas de Impressão para PDF */
@media print {
    @page {
        size: A4;
        margin: 16mm 14mm 16mm 14mm;
        @bottom-right {
            content: "Página " counter(page);
            font-size: 9px;
            color: #64748b;
        }
        @top-right {
            content: "ISI022 - Sistemas de Informação e Tecnologias Emergentes";
            font-size: 9px;
            color: #64748b;
        }
    }

    body {
        font-size: 12px !important;
        background-color: #ffffff !important;
    }

    #notebook-container {
        padding: 0 !important;
        max-width: 100% !important;
    }

    /* Quebras de Página Apropriadas */
    h1, h2 {
        page-break-after: avoid;
    }

    .cell {
        page-break-inside: avoid;
    }

    table {
        page-break-inside: avoid;
    }

    blockquote {
        page-break-inside: avoid;
    }

    div.output_area {
        page-break-inside: avoid;
    }

    div.output_png img, img {
        page-break-inside: avoid;
        max-height: 380px !important;
    }

    .prompt {
        display: none !important;
    }
/* Estilo para Diagramas Mermaid Renderizados */
.rendered-diagram {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 22px 0 !important;
    padding: 18px !important;
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 8px !important;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    page-break-inside: avoid !important;
}

.rendered-diagram svg {
    max-width: 95% !important;
    height: auto !important;
    display: block;
}

.jp-Mermaid, pre.mermaid {
    margin: 0 !important;
}

@media print {
    .rendered-diagram {
        page-break-inside: avoid !important;
        box-shadow: none !important;
    }
}
</style>
"""

# 5. Injetar Mermaid.js para renderização limpa dos diagramas
mermaid_js = """
<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
mermaid.initialize({
    startOnLoad: false,
    theme: 'neutral',
    securityLevel: 'loose',
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' }
});

window.addEventListener('load', async () => {
    const blocks = document.querySelectorAll('.jp-Mermaid, pre.mermaid');
    for (let i = 0; i < blocks.length; i++) {
        const el = blocks[i];
        const pre = el.tagName === 'PRE' ? el : el.querySelector('pre');
        const code = (pre || el).textContent.trim();
        if (!code) continue;
        try {
            const { svg } = await mermaid.render('mermaid-svg-' + i, code);
            const container = document.createElement('div');
            container.className = 'rendered-diagram';
            container.innerHTML = svg;
            el.replaceWith(container);
        } catch(err) {
            console.error('Erro renderizando diagrama Mermaid ' + i, err);
        }
    }
    document.title = 'AULA02_READY';
});
</script>
"""

# Remover script default do nbconvert se existir para não causar conflitos
html_content = re.sub(
    r'<script type="module">\s*document\.addEventListener\("DOMContentLoaded", async \(\) => \{\s*const diagrams = document\.querySelectorAll\("\.jp-Mermaid > pre\.mermaid"\);.*?</script>',
    '',
    html_content,
    flags=re.DOTALL
)

# Substituir </head> injetando CSS e Script Mermaid
html_content = html_content.replace("</head>", custom_css + mermaid_js + "</head>")

# Salvar HTML intermediário pronto para impressão
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"3. HTML polido salvo em: {html_path} ({len(html_content):,} caracteres).")

# 6. Invocar Microsoft Edge em modo Headless para gerar o PDF
file_url = "file:///" + os.path.abspath(html_path).replace("\\", "/")
print("4. Renderizando PDF via Headless Edge...")

cmd = [
    edge_exe,
    "--headless=new",
    "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=10000",
    f"--print-to-pdf={pdf_path}",
    file_url
]

res = subprocess.run(cmd, capture_output=True, text=True, timeout=60)

if os.path.exists(pdf_path):
    pdf_size = os.path.getsize(pdf_path)
    print("=" * 80)
    print(f"✅ SUCESSO! PDF GERADO COM SUCESSO!")
    print(f"📄 Arquivo: {pdf_path}")
    print(f"📊 Tamanho do PDF: {pdf_size:,} bytes ({pdf_size / (1024*1024):.2f} MB)")
    print("=" * 80)
else:
    print(f"❌ Erro ao gerar PDF. Retorno: {res.returncode}")
    print(f"Stdout: {res.stdout}")
    print(f"Stderr: {res.stderr}")

