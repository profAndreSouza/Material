import os
from PIL import Image, ImageDraw, ImageFont

def get_font(size=14, bold=False):
    # Try Windows system fonts
    font_paths = [
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\calibrib.ttf" if bold else r"C:\Windows\Fonts\calibri.ttf"
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

out_dir = r"c:\projetos\Material\Informática Aplicada a Aeronáutica\Exercicios\tutorial_images"
os.makedirs(out_dir, exist_ok=True)

# Color Palette
NAVY = (15, 32, 67)
WORD_BLUE = (43, 87, 154)
WORD_DARK = (30, 60, 110)
RIBBON_BG = (243, 242, 241)
BORDER_GRAY = (200, 198, 196)
BORDER_COLOR = (210, 220, 230)
DARK_TEXT = (32, 31, 30)
GRAY_TEXT = (100, 100, 100)
LIGHT_BLUE = (230, 240, 250)
WHITE = (255, 255, 255)
HIGHLIGHT_RED = (219, 58, 54)
HIGHLIGHT_YELLOW = (255, 244, 206)
ACCENT_BLUE = (0, 120, 212)
DIALOG_BG = (240, 240, 240)
INPUT_BG = (255, 255, 255)

def draw_word_window_header(draw, title="Documento1 - Microsoft Word", width=900):
    # Title bar
    draw.rectangle([0, 0, width, 38], fill=WORD_BLUE)
    font_title = get_font(13, bold=True)
    draw.text((15, 10), title, fill=WHITE, font=font_title)
    
    # Minimize / Maximize / Close
    draw.rectangle([width-40, 0, width, 38], fill=(232, 17, 35))
    draw.text((width-26, 8), "X", fill=WHITE, font=get_font(13, bold=True))

def draw_ribbon(draw, active_tab="Página Inicial", width=900):
    # Ribbon Tabs bar
    draw.rectangle([0, 38, width, 68], fill=WORD_DARK)
    tabs = ["Arquivo", "Página Inicial", "Inserir", "Desenho", "Design", "Layout", "Referências", "Correspondências", "Revisão", "Exibir"]
    x = 10
    font_tab = get_font(12, bold=False)
    font_tab_bold = get_font(12, bold=True)
    
    for tab in tabs:
        tw = int(draw.textlength(tab, font=font_tab) + 20)
        if tab == active_tab:
            draw.rectangle([x, 38, x + tw, 68], fill=RIBBON_BG)
            draw.text((x + 10, 45), tab, fill=WORD_BLUE, font=font_tab_bold)
        else:
            draw.text((x + 10, 45), tab, fill=WHITE, font=font_tab)
        x += tw + 4
        
    # Ribbon Body
    draw.rectangle([0, 68, width, 140], fill=RIBBON_BG)
    draw.line([0, 140, width, 140], fill=BORDER_GRAY, width=1)

# ==============================================================================
# SCREENSHOT 1: CONFIGURAÇÃO DE MARGENS E PAPEL A4 (LAYOUT)
# ==============================================================================
def create_step1():
    w, h = 920, 520
    img = Image.new('RGB', (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    draw_word_window_header(draw, "Relatorio_Tecnico.docx - Microsoft Word (Layout)", w)
    draw_ribbon(draw, active_tab="Layout", width=w)
    
    # Ribbon items in Layout
    draw.rectangle([15, 75, 85, 133], fill=WHITE, outline=BORDER_GRAY)
    draw.text((22, 85), "Margens", fill=DARK_TEXT, font=get_font(12, bold=True))
    draw.text((22, 105), "Personaliz.", fill=ACCENT_BLUE, font=get_font(10, bold=False))
    
    draw.rectangle([95, 75, 160, 133], fill=WHITE, outline=BORDER_GRAY)
    draw.text((105, 85), "Tamanho", fill=DARK_TEXT, font=get_font(12, bold=True))
    draw.text((115, 105), "A4", fill=ACCENT_BLUE, font=get_font(11, bold=True))
    
    draw.rectangle([170, 75, 240, 133], fill=WHITE, outline=BORDER_GRAY)
    draw.text((180, 85), "Quebras", fill=DARK_TEXT, font=get_font(12, bold=True))
    draw.text((180, 105), "Seção", fill=DARK_TEXT, font=get_font(10, bold=False))
    
    # Red Highlight Box on Margins
    draw.rectangle([10, 72, 90, 136], outline=HIGHLIGHT_RED, width=3)
    
    # Dialog Box: "Configurar Página"
    dx, dy, dw, dh = 260, 155, 480, 345
    draw.rectangle([dx, dy, dx + dw, dy + dh], fill=DIALOG_BG, outline=(130, 135, 144), width=2)
    # Dialog Title
    draw.rectangle([dx, dy, dx + dw, dy + 32], fill=(220, 225, 235))
    draw.text((dx + 12, dy + 8), "Configurar Página", fill=DARK_TEXT, font=get_font(13, bold=True))
    draw.rectangle([dx + dw - 28, dy + 6, dx + dw - 6, dy + 26], fill=(210, 60, 60))
    draw.text((dx + dw - 20, dy + 7), "x", fill=WHITE, font=get_font(11, bold=True))
    
    # Tabs in Dialog
    draw.rectangle([dx + 15, dy + 40, dx + 90, dy + 62], fill=WHITE, outline=BORDER_GRAY)
    draw.text((dx + 25, dy + 44), "Margens", fill=WORD_BLUE, font=get_font(11, bold=True))
    draw.text((dx + 105, dy + 44), "Papel (A4)", fill=DARK_TEXT, font=get_font(11, bold=False))
    draw.text((dx + 185, dy + 44), "Layout", fill=DARK_TEXT, font=get_font(11, bold=False))
    
    # Margins Inputs Box
    draw.rectangle([dx + 15, dy + 70, dx + dw - 15, dy + 240], fill=WHITE, outline=BORDER_GRAY)
    draw.text((dx + 25, dy + 80), "Margens da Página (Norma ABNT NBR 14724):", fill=NAVY, font=get_font(12, bold=True))
    
    # Inputs
    fields = [
        ("Superior:", "3,0 cm", dx + 35, dy + 110),
        ("Inferior:", "2,0 cm", dx + 250, dy + 110),
        ("Esquerda:", "3,0 cm", dx + 35, dy + 160),
        ("Direita:", "2,0 cm", dx + 250, dy + 160),
    ]
    for label, val, fx, fy in fields:
        draw.text((fx, fy), label, fill=DARK_TEXT, font=get_font(12, bold=True))
        draw.rectangle([fx + 80, fy - 4, fx + 160, fy + 22], fill=INPUT_BG, outline=(0, 120, 215), width=2)
        draw.text((fx + 92, fy), val, fill=NAVY, font=get_font(12, bold=True))
        
    # Orientation
    draw.text((dx + 25, dy + 210), "Orientação: [ X ] Retrato     [   ] Paisagem", fill=DARK_TEXT, font=get_font(11, bold=False))
    
    # OK Button
    draw.rectangle([dx + dw - 180, dy + dh - 40, dx + dw - 100, dy + dh - 12], fill=WORD_BLUE)
    draw.text((dx + dw - 155, dy + dh - 32), "OK", fill=WHITE, font=get_font(12, bold=True))
    draw.rectangle([dx + dw - 90, dy + dh - 40, dx + dw - 15, dy + dh - 12], fill=(225, 225, 225), outline=BORDER_GRAY)
    draw.text((dx + dw - 75, dy + dh - 32), "Cancelar", fill=DARK_TEXT, font=get_font(11))
    
    # Annotation pointer
    draw.rectangle([30, 200, 230, 310], fill=HIGHLIGHT_YELLOW, outline=HIGHLIGHT_RED, width=2)
    draw.text((40, 210), "REGRA DE OURO ABNT:", fill=HIGHLIGHT_RED, font=get_font(11, bold=True))
    draw.text((40, 232), "• Sup/Esq = 3,0 cm", fill=DARK_TEXT, font=get_font(11, bold=True))
    draw.text((40, 252), "  (Espaço p/ encadernar)", fill=GRAY_TEXT, font=get_font(10))
    draw.text((40, 272), "• Inf/Dir = 2,0 cm", fill=DARK_TEXT, font=get_font(11, bold=True))
    draw.text((40, 292), "• Papel: A4", fill=NAVY, font=get_font(11, bold=True))
    
    img.save(os.path.join(out_dir, "step1_margens.png"))

# ==============================================================================
# SCREENSHOT 2: ESTILOS - MODIFICAR ESTILO NORMAL (PARÁGRAFO 1.5, RECUO 1.25)
# ==============================================================================
def create_step2():
    w, h = 920, 540
    img = Image.new('RGB', (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    draw_word_window_header(draw, "Relatorio_Tecnico.docx - Microsoft Word (Estilos)", w)
    draw_ribbon(draw, active_tab="Página Inicial", width=w)
    
    # Ribbon Styles Gallery
    draw.text((320, 75), "Galeria de Estilos:", fill=NAVY, font=get_font(11, bold=True))
    styles = ["Normal", "Sem Espaçamento", "Título 1", "Título 2", "Título", "Subtítulo"]
    sx = 320
    for s in styles:
        box_w = 90
        is_normal = (s == "Normal")
        draw.rectangle([sx, 92, sx + box_w, 134], fill=WHITE if not is_normal else HIGHLIGHT_YELLOW, outline=HIGHLIGHT_RED if is_normal else BORDER_GRAY, width=2 if is_normal else 1)
        draw.text((sx + 10, 98), "AaBbCc", fill=NAVY, font=get_font(11, bold=True))
        draw.text((sx + 10, 116), s, fill=DARK_TEXT, font=get_font(9))
        sx += box_w + 6
        
    # Dialog: Modificar Estilo
    dx, dy, dw, dh = 180, 150, 560, 375
    draw.rectangle([dx, dy, dx + dw, dy + dh], fill=DIALOG_BG, outline=(100, 110, 130), width=2)
    # Header
    draw.rectangle([dx, dy, dx + dw, dy + 32], fill=(220, 225, 235))
    draw.text((dx + 15, dy + 8), "Modificar Estilo: Normal (Corpo de Texto)", fill=DARK_TEXT, font=get_font(13, bold=True))
    
    # Form fields
    draw.text((dx + 25, dy + 45), "Nome: Normal    |    Tipo do Estilo: Parágrafo", fill=DARK_TEXT, font=get_font(11))
    
    # Formatting toolbar inside dialog
    draw.rectangle([dx + 20, dy + 70, dx + dw - 20, dy + 115], fill=WHITE, outline=BORDER_GRAY)
    draw.text((dx + 30, dy + 82), "Fonte: Arial", fill=NAVY, font=get_font(12, bold=True))
    draw.text((dx + 160, dy + 82), "12 pt", fill=NAVY, font=get_font(12, bold=True))
    draw.text((dx + 230, dy + 82), "[ N ]  [ I ]  [ S ]", fill=GRAY_TEXT, font=get_font(11))
    draw.rectangle([dx + 340, dy + 77, dx + 425, dy + 107], fill=(230, 240, 255), outline=ACCENT_BLUE)
    draw.text((dx + 346, dy + 83), "Justificado [ = ]", fill=NAVY, font=get_font(10, bold=True))
    
    # Paragraph Sub-box
    draw.rectangle([dx + 20, dy + 125, dx + dw - 20, dy + 310], fill=WHITE, outline=(0, 120, 215), width=2)
    draw.text((dx + 30, dy + 135), "Configurações de Parágrafo (Formatar -> Parágrafo):", fill=WORD_BLUE, font=get_font(12, bold=True))
    
    p_details = [
        ("• Alinhamento:", "Justificado (Ctrl + J) — Alinha margem esquerda e direita"),
        ("• Recuo Especial:", "Primeira linha em 1,25 cm (Padrão de parágrafo ABNT)"),
        ("• Espaçamento entre Linhas:", "1,5 linha (Obrigatório em todo o relatório)"),
        ("• Espaçamento Depois:", "6 pt (Garante respiro suave entre parágrafos)"),
        ("• Espaçamento Antes:", "0 pt")
    ]
    for idx, (label, val) in enumerate(p_details):
        draw.text((dx + 35, dy + 165 + idx * 26), label, fill=NAVY, font=get_font(11, bold=True))
        draw.text((dx + 210, dy + 165 + idx * 26), val, fill=DARK_TEXT, font=get_font(11))
        
    # Buttons
    draw.rectangle([dx + 20, dy + 325, dx + 150, dy + 360], fill=(235, 235, 235), outline=BORDER_GRAY)
    draw.text((dx + 35, dy + 335), "Formatar v", fill=DARK_TEXT, font=get_font(11, bold=True))
    
    draw.rectangle([dx + dw - 180, dy + 325, dx + dw - 100, dy + 360], fill=WORD_BLUE)
    draw.text((dx + dw - 155, dy + 335), "OK", fill=WHITE, font=get_font(12, bold=True))
    
    img.save(os.path.join(out_dir, "step2_estilo_normal.png"))

# ==============================================================================
# SCREENSHOT 3: HIERARQUIA DE TÍTULO 1, TÍTULO 2 E PAINEL DE NAVEGAÇÃO
# ==============================================================================
def create_step3():
    w, h = 920, 520
    img = Image.new('RGB', (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    draw_word_window_header(draw, "Relatorio_Tecnico.docx - Microsoft Word (Hierarquia de Títulos)", w)
    draw_ribbon(draw, active_tab="Página Inicial", width=w)
    
    # Left Navigation Pane (Ctrl + F)
    draw.rectangle([10, 150, 260, 505], fill=WHITE, outline=BORDER_GRAY)
    draw.rectangle([10, 150, 260, 185], fill=(235, 240, 250))
    draw.text((20, 160), "Navegação (Ctrl + F)", fill=NAVY, font=get_font(12, bold=True))
    
    nav_items = [
        ("1. HISTÓRIA DA AVIAÇÃO", 20, True),
        ("  1.1 Santos Dumont e o 14-Bis", 30, False),
        ("2. HISTÓRIA DA ANAC", 20, True),
        ("3. ATUAÇÃO E COMPETÊNCIAS", 20, True),
        ("4. CLASSIFICAÇÃO AERONAVES", 20, True),
        ("5. FORMAÇÃO E LICENÇAS", 20, True),
        ("6. SEGURANÇA OPERACIONAL", 20, True),
        ("7. CONSIDERAÇÕES FINAIS", 20, True)
    ]
    for idx, (item, px, is_main) in enumerate(nav_items):
        draw.text((px, 200 + idx * 34), item, fill=NAVY if is_main else DARK_TEXT, font=get_font(11, bold=is_main))
        draw.line([15, 228 + idx * 34, 255, 228 + idx * 34], fill=(240, 240, 240))
        
    # Right Content View (Page Preview)
    draw.rectangle([280, 150, 905, 505], fill=WHITE, outline=BORDER_GRAY)
    
    # Document Title 1
    draw.text((310, 175), "1. HISTÓRIA E EVOLUÇÃO DA AVIAÇÃO", fill=NAVY, font=get_font(14, bold=True))
    draw.rectangle([305, 170, 750, 198], outline=HIGHLIGHT_RED, width=2)
    draw.text((760, 175), "[ Estilo: Título 1 ]", fill=HIGHLIGHT_RED, font=get_font(11, bold=True))
    
    # Document Paragraph
    p_text1 = "Na era pré-histórica, o ser humano observava os pássaros voando e desejava imitá-los, porém não"
    p_text2 = "dispunha de conhecimento nem de meios físicos para fazê-lo. A lógica empírica da época sugeria que,"
    p_text3 = "se pequenos músculos de pássaros podiam sustentá-los, músculos maiores duplicariam essa proeza..."
    draw.text((345, 215), p_text1, fill=DARK_TEXT, font=get_font(11))
    draw.text((310, 235), p_text2, fill=DARK_TEXT, font=get_font(11))
    draw.text((310, 255), p_text3, fill=DARK_TEXT, font=get_font(11))
    draw.rectangle([305, 210, 885, 275], outline=(0, 150, 0), width=1)
    draw.text((760, 280), "[ Estilo: Normal ]", fill=(0, 150, 0), font=get_font(11, bold=True))
    
    # Subsection Title 2
    draw.text((310, 315), "1.1 Santos Dumont e o Voo do 14-Bis", fill=NAVY, font=get_font(12, bold=True))
    draw.rectangle([305, 310, 680, 335], outline=ACCENT_BLUE, width=2)
    draw.text((690, 315), "[ Estilo: Título 2 ]", fill=ACCENT_BLUE, font=get_font(11, bold=True))
    
    # Summary of Rules Box
    draw.rectangle([310, 360, 880, 485], fill=LIGHT_BLUE, outline=BORDER_COLOR)
    draw.text((325, 370), "REGRAS DOS ESTILOS DE TÍTULO NA ABNT:", fill=NAVY, font=get_font(12, bold=True))
    draw.text((325, 395), "• Título 1: Arial 14 pt, Negrito, MAIÚSCULAS | Espaçamento: Antes 12 pt / Depois 6 pt", fill=DARK_TEXT, font=get_font(11, bold=True))
    draw.text((325, 420), "• Título 2: Arial 12 pt, Negrito, Caixa Mista   | Espaçamento: Antes 6 pt / Depois 6 pt", fill=DARK_TEXT, font=get_font(11, bold=True))
    draw.text((325, 445), "• Atalhos Rápidos: Ctrl + Alt + 1 (Título 1)  |  Ctrl + Alt + 2 (Título 2)", fill=WORD_BLUE, font=get_font(11, bold=True))
    
    img.save(os.path.join(out_dir, "step3_estilo_titulos.png"))

# ==============================================================================
# SCREENSHOT 4: QUEBRAS DE SEÇÃO (PRÓXIMA PÁGINA) APÓS CAPA E SUMÁRIO
# ==============================================================================
def create_step4():
    w, h = 920, 520
    img = Image.new('RGB', (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    draw_word_window_header(draw, "Relatorio_Tecnico.docx - Microsoft Word (Quebras de Seção)", w)
    draw_ribbon(draw, active_tab="Layout", width=w)
    
    # Ribbon Quebras Menu Open
    draw.rectangle([170, 75, 260, 133], fill=WHITE, outline=HIGHLIGHT_RED, width=2)
    draw.text((180, 85), "Quebras v", fill=NAVY, font=get_font(12, bold=True))
    
    # Dropdown Menu
    draw.rectangle([170, 140, 480, 370], fill=WHITE, outline=(120, 120, 120), width=2)
    draw.text((185, 150), "Quebras de Página:", fill=GRAY_TEXT, font=get_font(11, bold=True))
    draw.text((195, 175), "Página (Ctrl + Enter)", fill=DARK_TEXT, font=get_font(11))
    draw.line([185, 205, 465, 205], fill=BORDER_GRAY)
    
    draw.text((185, 215), "Quebras de Seção:", fill=NAVY, font=get_font(11, bold=True))
    draw.rectangle([180, 238, 470, 285], fill=HIGHLIGHT_YELLOW, outline=HIGHLIGHT_RED, width=2)
    draw.text((195, 245), "Próxima Página", fill=HIGHLIGHT_RED, font=get_font(12, bold=True))
    draw.text((195, 265), "Insere uma quebra de seção e inicia nova página", fill=DARK_TEXT, font=get_font(9.5))
    
    draw.text((195, 300), "Contínuo", fill=DARK_TEXT, font=get_font(11))
    draw.text((195, 330), "Página Par / Ímpar", fill=DARK_TEXT, font=get_font(11))
    
    # Document Preview with Sections
    draw.rectangle([510, 150, 900, 500], fill=WHITE, outline=BORDER_GRAY)
    draw.text((530, 165), "[ ESTRUTURA DE SEÇÕES NO DOCUMENTO ]", fill=NAVY, font=get_font(12, bold=True))
    
    # Section 1 Box
    draw.rectangle([530, 195, 880, 290], fill=(250, 250, 250), outline=BORDER_COLOR)
    draw.text((545, 205), "SEÇÃO 1: ELEMENTOS PRÉ-TEXTUAIS", fill=WORD_BLUE, font=get_font(11, bold=True))
    draw.text((545, 228), "• Página 1: Capa (Sem numeração visível)", fill=DARK_TEXT, font=get_font(10.5))
    draw.text((545, 248), "• Página 2: Sumário (Sem numeração visível)", fill=DARK_TEXT, font=get_font(10.5))
    draw.text((545, 268), "==== [ Quebra de Seção: Próxima Página ] ====", fill=HIGHLIGHT_RED, font=get_font(10.5, bold=True))
    
    # Section 2 Box
    draw.rectangle([530, 310, 880, 480], fill=LIGHT_BLUE, outline=ACCENT_BLUE, width=2)
    draw.text((545, 320), "SEÇÃO 2: ELEMENTOS TEXTUAIS", fill=NAVY, font=get_font(11, bold=True))
    draw.text((545, 345), "• Página 3: 1. INTRODUÇÃO", fill=NAVY, font=get_font(11, bold=True))
    draw.text((545, 370), "• Cabeçalho: Desvinculado da Seção 1!", fill=(0, 140, 50), font=get_font(10.5, bold=True))
    draw.text((545, 395), "• Numeração ABNT: Inicia visível em 3 no canto direito!", fill=HIGHLIGHT_RED, font=get_font(10.5, bold=True))
    draw.text((545, 420), "• Páginas seguintes: 4, 5, 6... contínuas", fill=DARK_TEXT, font=get_font(10.5))
    
    img.save(os.path.join(out_dir, "step4_capa_quebra_secao.png"))

# ==============================================================================
# SCREENSHOT 5: DESVINCULAR CABEÇALHO E NUMERAÇÃO ABNT (INICIAR EM 3)
# ==============================================================================
def create_step5():
    w, h = 920, 520
    img = Image.new('RGB', (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    draw_word_window_header(draw, "Relatorio_Tecnico.docx - Microsoft Word (Cabeçalho e Rodapé)", w)
    draw_ribbon(draw, active_tab="Layout", width=w)
    
    # Ribbon Toolbar for Header & Footer
    draw.rectangle([0, 68, w, 140], fill=(230, 240, 255))
    draw.text((20, 75), "Ferramentas de Cabeçalho e Rodapé", fill=WORD_BLUE, font=get_font(11, bold=True))
    
    # "Vincular ao Anterior" Button (HIGHLIGHTED)
    draw.rectangle([250, 85, 430, 132], fill=WHITE, outline=HIGHLIGHT_RED, width=3)
    draw.text((260, 93), "[ / ] Vincular ao Anterior", fill=HIGHLIGHT_RED, font=get_font(12, bold=True))
    draw.text((260, 113), "(CLIQUE PARA DESATIVAR!)", fill=DARK_TEXT, font=get_font(9.5, bold=True))
    
    # "Número de Página" Button
    draw.rectangle([445, 85, 600, 132], fill=WHITE, outline=ACCENT_BLUE, width=2)
    draw.text((455, 93), "Número de Página v", fill=NAVY, font=get_font(12, bold=True))
    draw.text((455, 113), "Iniciar em: 3", fill=ACCENT_BLUE, font=get_font(10))
    
    # Document Page View (Top of Page 3)
    draw.rectangle([100, 160, 820, 500], fill=WHITE, outline=(150, 150, 150), width=2)
    
    # Header Area with Dashed Line
    draw.rectangle([110, 170, 810, 230], fill=(245, 250, 255), outline=(0, 120, 215))
    draw.text((120, 175), "--- Cabeçalho - Seção 2 - (Mesmo que a Seção Anterior: DESATIVADO) ---", fill=GRAY_TEXT, font=get_font(10))
    
    # The Page Number "3" aligned at right
    draw.rectangle([760, 185, 795, 215], fill=HIGHLIGHT_YELLOW, outline=HIGHLIGHT_RED, width=2)
    draw.text((772, 190), "3", fill=HIGHLIGHT_RED, font=get_font(15, bold=True))
    draw.text((630, 192), "Número da Página ABNT ->", fill=NAVY, font=get_font(11, bold=True))
    
    # Document Body
    draw.text((140, 255), "1. INTRODUÇÃO E EVOLUÇÃO DA AVIAÇÃO", fill=NAVY, font=get_font(14, bold=True))
    draw.text((170, 290), "Na era pré-histórica, o ser humano observava os pássaros voando e desejava imitá-los...", fill=DARK_TEXT, font=get_font(11))
    
    # Explanation Callout
    draw.rectangle([140, 340, 780, 475], fill=LIGHT_BLUE, outline=BORDER_COLOR)
    draw.text((155, 350), "PASSO A PASSO DA NUMERAÇÃO ABNT:", fill=NAVY, font=get_font(12, bold=True))
    draw.text((155, 375), "1. Dê duplo clique no Cabeçalho da Página 3 (Introdução - Seção 2).", fill=DARK_TEXT, font=get_font(11))
    draw.text((155, 400), "2. Clique em 'Vincular ao Anterior' para DESCONECTAR da Capa/Sumário.", fill=HIGHLIGHT_RED, font=get_font(11, bold=True))
    draw.text((155, 425), "3. Acesse: Número de Página -> Formatar Números de Página -> Marque 'Iniciar em: 3'.", fill=DARK_TEXT, font=get_font(11))
    draw.text((155, 450), "4. Acesse: Número de Página -> Início da Página -> Número Sem Formatação 3 (canto direito).", fill=DARK_TEXT, font=get_font(11))
    
    img.save(os.path.join(out_dir, "step5_desvincular_numeracao.png"))

# ==============================================================================
# SCREENSHOT 6: TABELAS TÉCNICAS E FIGURAS COM LEGENDAS E FONTE
# ==============================================================================
def create_step6():
    w, h = 920, 520
    img = Image.new('RGB', (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    draw_word_window_header(draw, "Relatorio_Tecnico.docx - Microsoft Word (Tabelas e Legendas)", w)
    draw_ribbon(draw, active_tab="Referências", width=w)
    
    # Left: Table Example
    draw.rectangle([20, 155, 540, 495], fill=WHITE, outline=BORDER_GRAY)
    draw.text((35, 168), "Tabela 1: Comparativo de especificações de aeronaves", fill=NAVY, font=get_font(11, bold=True))
    draw.text((430, 168), "[ Legenda Acima ]", fill=GRAY_TEXT, font=get_font(9))
    
    # Table Grid
    tx, ty = 35, 195
    # Header Row
    draw.rectangle([tx, ty, tx + 485, ty + 26], fill=WORD_BLUE)
    draw.text((tx + 10, ty + 6), "Modelo", fill=WHITE, font=get_font(10, bold=True))
    draw.text((tx + 120, ty + 6), "Ano", fill=WHITE, font=get_font(10, bold=True))
    draw.text((tx + 180, ty + 6), "Tipo Motor", fill=WHITE, font=get_font(10, bold=True))
    draw.text((tx + 310, ty + 6), "Velocidade", fill=WHITE, font=get_font(10, bold=True))
    draw.text((tx + 400, ty + 6), "MTOW (kg)", fill=WHITE, font=get_font(10, bold=True))
    
    # Data Rows
    data_rows = [
        ("14-Bis (Santos Dumont)", "1906", "Gasolina 50 hp", "41 km/h", "290 kg"),
        ("Demoiselle Nº 20", "1909", "Darracq 30 hp", "90 km/h", "143 kg"),
        ("Douglas DC-3", "1935", "2x Radial 1200 hp", "370 km/h", "11.430 kg"),
        ("Embraer E195-E2", "2019", "2x Geared Turbofan", "870 km/h", "61.500 kg")
    ]
    for r_idx, row in enumerate(data_rows):
        ry = ty + 26 + r_idx * 24
        bg_color = (245, 248, 252) if r_idx % 2 == 1 else WHITE
        draw.rectangle([tx, ry, tx + 485, ry + 24], fill=bg_color, outline=(220, 220, 220))
        draw.text((tx + 10, ry + 4), row[0], fill=DARK_TEXT, font=get_font(9.5))
        draw.text((tx + 120, ry + 4), row[1], fill=DARK_TEXT, font=get_font(9.5))
        draw.text((tx + 180, ry + 4), row[2], fill=DARK_TEXT, font=get_font(9.5))
        draw.text((tx + 310, ry + 4), row[3], fill=DARK_TEXT, font=get_font(9.5))
        draw.text((tx + 400, ry + 4), row[4], fill=DARK_TEXT, font=get_font(9.5))
        
    # Table Source Line
    draw.text((35, ty + 130), "Fonte: Cartilha ANAC e Manuais Operacionais (2026).", fill=GRAY_TEXT, font=get_font(10, bold=False))
    draw.text((35, ty + 155), "• Propriedades da Tabela: 'Repetir Linhas de Cabeçalho' habilitado.", fill=WORD_BLUE, font=get_font(9.5))
    draw.text((35, ty + 175), "• Alinhamento vertical centralizado em todas as células.", fill=DARK_TEXT, font=get_font(9.5))
    
    # Right: Figure Example & Dialog Box
    draw.rectangle([560, 155, 900, 495], fill=WHITE, outline=BORDER_GRAY)
    draw.text((575, 168), "Figura 1: Aeronave Embraer E195-E2", fill=NAVY, font=get_font(11, bold=True))
    
    # Mock Image Box
    draw.rectangle([575, 195, 885, 330], fill=(230, 235, 245), outline=BORDER_COLOR)
    draw.text((640, 250), "[ IMAGEM TÉCNICA / FOTO ]", fill=GRAY_TEXT, font=get_font(11, bold=True))
    draw.text((575, 340), "Fonte: Embraer Media Center (2026).", fill=GRAY_TEXT, font=get_font(10))
    
    # Caption Dialog Mini
    draw.rectangle([575, 370, 885, 480], fill=LIGHT_BLUE, outline=ACCENT_BLUE)
    draw.text((585, 380), "COMO INSERIR LEGENDA OFICIAL:", fill=NAVY, font=get_font(10.5, bold=True))
    draw.text((585, 402), "1. Botão direito na Tabela/Figura -> Inserir Legenda...", fill=DARK_TEXT, font=get_font(9.5))
    draw.text((585, 422), "2. Rótulo: 'Tabela' ou 'Figura'", fill=DARK_TEXT, font=get_font(9.5))
    draw.text((585, 442), "3. Digite o título após os dois pontos", fill=DARK_TEXT, font=get_font(9.5))
    draw.text((585, 460), "4. Digite a 'Fonte: ...' logo abaixo em 10 pt", fill=DARK_TEXT, font=get_font(9.5))
    
    img.save(os.path.join(out_dir, "step6_tabela_figura_legendas.png"))

# ==============================================================================
# SCREENSHOT 7: GERAÇÃO DO SUMÁRIO AUTOMÁTICO E TECLA F9
# ==============================================================================
def create_step7():
    w, h = 920, 520
    img = Image.new('RGB', (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    draw_word_window_header(draw, "Relatorio_Tecnico.docx - Microsoft Word (Sumário Automático)", w)
    draw_ribbon(draw, active_tab="Referências", width=w)
    
    # Ribbon Sumário Click
    draw.rectangle([10, 75, 90, 133], fill=WHITE, outline=HIGHLIGHT_RED, width=2)
    draw.text((20, 85), "Sumário v", fill=NAVY, font=get_font(12, bold=True))
    draw.text((20, 105), "Automático", fill=HIGHLIGHT_RED, font=get_font(9.5, bold=True))
    
    # Dropdown Mini for Sumário Automático 1
    draw.rectangle([10, 140, 240, 240], fill=WHITE, outline=(120, 120, 120), width=2)
    draw.rectangle([15, 145, 235, 190], fill=HIGHLIGHT_YELLOW, outline=HIGHLIGHT_RED)
    draw.text((25, 152), "Sumário Automático 1", fill=NAVY, font=get_font(11, bold=True))
    draw.text((25, 170), "Varre Título 1, 2 e 3", fill=GRAY_TEXT, font=get_font(9.5))
    
    # Document Page 2 (Sumário Preview)
    draw.rectangle([270, 150, 900, 500], fill=WHITE, outline=BORDER_GRAY)
    draw.text((300, 170), "SUMÁRIO", fill=NAVY, font=get_font(15, bold=True))
    
    # Summary Entries
    toc_entries = [
        ("1. HISTÓRIA E EVOLUÇÃO DA AVIAÇÃO .....................................................", "3"),
        ("   1.1 Santos Dumont e o Voo do 14-Bis ...................................................", "3"),
        ("2. HISTÓRIA DA AVIAÇÃO CIVIL BRASILEIRA E A ANAC .............................", "4"),
        ("3. ATUAÇÃO E COMPETÊNCIAS REGULATÓRIAS DA ANAC ..........................", "4"),
        ("4. CLASSIFICAÇÃO DAS AERONAVES E ESPECIFICAÇÕES TÉCNICAS ..........", "5"),
        ("5. FORMAÇÃO E LICENÇAS NA AVIAÇÃO CIVIL ..........................................", "6"),
        ("6. SEGURANÇA OPERACIONAL E TOMADA DE DECISÃO ...............................", "7"),
        ("7. CONSIDERAÇÕES FINAIS E PERSPECTIVAS FUTURAS ............................", "8")
    ]
    for idx, (title_dots, pg) in enumerate(toc_entries):
        y_pos = 210 + idx * 26
        is_bold = not title_dots.startswith("   ")
        draw.text((300, y_pos), title_dots, fill=NAVY if is_bold else DARK_TEXT, font=get_font(10.5, bold=is_bold))
        draw.text((860, y_pos), pg, fill=NAVY if is_bold else DARK_TEXT, font=get_font(10.5, bold=True))
        
    # F9 Key Tip Callout
    draw.rectangle([300, 435, 875, 485], fill=HIGHLIGHT_YELLOW, outline=HIGHLIGHT_RED, width=2)
    draw.text((315, 445), "ATALHO F9:", fill=HIGHLIGHT_RED, font=get_font(11, bold=True))
    draw.text((395, 445), "Ao alterar páginas ou títulos, clique no sumário e aperte F9 -> 'Atualizar índice inteiro'.", fill=DARK_TEXT, font=get_font(10.5))
    draw.text((315, 465), "O Word recalcula instantaneamente todos os números de página sem erros manuais!", fill=WORD_BLUE, font=get_font(10, bold=True))
    
    img.save(os.path.join(out_dir, "step7_sumario_automatico.png"))

# ==============================================================================
# SCREENSHOT 8: SALVAR COMO PDF/A (ISO 19005)
# ==============================================================================
def create_step8():
    w, h = 920, 520
    img = Image.new('RGB', (w, h), (245, 245, 245))
    draw = ImageDraw.Draw(img)
    
    draw_word_window_header(draw, "Salvar Como - Microsoft Word (Exportação PDF/A)", w)
    
    # Save As Dialog Box
    dx, dy, dw, dh = 100, 60, 720, 430
    draw.rectangle([dx, dy, dx + dw, dy + dh], fill=DIALOG_BG, outline=(100, 110, 130), width=2)
    draw.rectangle([dx, dy, dx + dw, dy + 35], fill=(220, 225, 235))
    draw.text((dx + 15, dy + 10), "Salvar Como", fill=DARK_TEXT, font=get_font(13, bold=True))
    
    # Inputs
    draw.text((dx + 30, dy + 60), "Nome do arquivo:", fill=DARK_TEXT, font=get_font(11, bold=True))
    draw.rectangle([dx + 150, dy + 55, dx + 520, dy + 82], fill=WHITE, outline=BORDER_GRAY)
    draw.text((dx + 160, dy + 62), "Relatorio_ABNT_SeuNome_RA.pdf", fill=NAVY, font=get_font(11, bold=True))
    
    draw.text((dx + 30, dy + 105), "Tipo:", fill=DARK_TEXT, font=get_font(11, bold=True))
    draw.rectangle([dx + 150, dy + 100, dx + 520, dy + 127], fill=WHITE, outline=BORDER_GRAY)
    draw.text((dx + 160, dy + 107), "PDF (*.pdf)", fill=NAVY, font=get_font(11, bold=True))
    
    # "Mais Opções..." Button
    draw.rectangle([dx + 540, dy + 100, dx + 690, dy + 127], fill=(235, 240, 255), outline=ACCENT_BLUE, width=2)
    draw.text((dx + 550, dy + 107), "Mais opções... [ > ]", fill=NAVY, font=get_font(10.5, bold=True))
    
    # Sub-Dialog: "Opções de PDF"
    ox, oy, ow, oh = dx + 80, dy + 150, 560, 220
    draw.rectangle([ox, oy, ox + ow, oy + oh], fill=WHITE, outline=HIGHLIGHT_RED, width=3)
    draw.rectangle([ox, oy, ox + ow, oy + 30], fill=(235, 240, 250))
    draw.text((ox + 12, oy + 7), "Opções do PDF", fill=NAVY, font=get_font(12, bold=True))
    
    draw.text((ox + 20, oy + 45), "Intervalo de Páginas: ( • ) Tudo    ( ) Página Atual    ( ) Páginas:", fill=DARK_TEXT, font=get_font(11))
    draw.text((ox + 20, oy + 80), "O que publicar: Documento com marcações", fill=GRAY_TEXT, font=get_font(11))
    
    # PDF/A Checkbox Box (HIGHLIGHTED)
    draw.rectangle([ox + 20, oy + 115, ox + ow - 20, oy + 165], fill=HIGHLIGHT_YELLOW, outline=HIGHLIGHT_RED, width=2)
    draw.rectangle([ox + 35, oy + 130, ox + 50, oy + 145], fill=WORD_BLUE, outline=NAVY)
    draw.text((ox + 38, oy + 130), "V", fill=WHITE, font=get_font(11, bold=True))
    draw.text((ox + 60, oy + 130), "Compatível com ISO 19005-1 (PDF/A)", fill=NAVY, font=get_font(12, bold=True))
    
    # OK Button in Sub-dialog
    draw.rectangle([ox + ow - 100, oy + oh - 35, ox + ow - 20, oy + oh - 10], fill=WORD_BLUE)
    draw.text((ox + ow - 75, oy + oh - 28), "OK", fill=WHITE, font=get_font(11, bold=True))
    
    # Bottom Note
    draw.text((dx + 30, dy + 390), "O padrão PDF/A garante que todas as fontes e tabelas fiquem embutidas permanentemente.", fill=(0, 130, 50), font=get_font(11, bold=True))
    
    img.save(os.path.join(out_dir, "step8_salvar_pdfa.png"))

if __name__ == '__main__':
    create_step1()
    create_step2()
    create_step3()
    create_step4()
    create_step5()
    create_step6()
    create_step7()
    create_step8()
    print("All 8 screenshots generated successfully in", out_dir)
