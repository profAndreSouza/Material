import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

def build_aula07_manutencao_workbooks():
    for is_resolvido in [False, True]:
        wb = openpyxl.Workbook()
        default_sheet = wb.active
        wb.remove(default_sheet)

        font_family = "Segoe UI"
        
        # Color Palette - Aeronautical Maintenance & Engineering Theme
        NAVY_HEX = "0B1D3A"          # Deep Hangar Navy
        STEEL_BLUE_HEX = "0066B2"    # Aviation Blue
        ICE_BLUE_HEX = "F0F4F8"      # Card / Formula background
        LIGHT_GRAY_HEX = "F8FAFC"    # Zebra row
        BORDER_GRAY_HEX = "CBD5E1"   # Cell borders
        ACCENT_GREEN_HEX = "166534"  # Approved / RTS (Return to Service)
        ALERT_RED_HEX = "991B1B"     # Alert text / Grounded
        ALERT_RED_BG = "FEE2E2"      # Alert fill
        GOLD_HEX = "92400E"          # Highlight text
        PROMPT_FILL_HEX = "FEF9C3"   # Soft yellow prompt for student input
        PROMPT_BORDER_HEX = "F59E0B" # Amber border for empty formula cells
        SOLVED_FILL_HEX = "F0FDF4"   # Soft green tint for solved formulas
        CARD_BG_HEX = "F1F5F9"       # Slate card background

        # Fonts
        font_title = Font(name=font_family, size=13, bold=True, color="FFFFFF")
        font_subtitle = Font(name=font_family, size=9, italic=True, color="E2E8F0")
        font_section = Font(name=font_family, size=11, bold=True, color=NAVY_HEX)
        font_header = Font(name=font_family, size=10, bold=True, color="FFFFFF")
        font_header_accent = Font(name=font_family, size=10, bold=True, color="FFFFFF")
        font_sub_header = Font(name=font_family, size=10, bold=True, color=NAVY_HEX)
        font_data = Font(name=font_family, size=10, color="1E293B")
        font_data_bold = Font(name=font_family, size=10, bold=True, color="1E293B")
        font_formula = Font(name="Consolas", size=9, bold=True, color="004085")
        font_formula_solved = Font(name="Consolas", size=10, bold=True, color="0F5132")
        font_note = Font(name=font_family, size=9, italic=True, color="64748B")
        font_card_title = Font(name=font_family, size=10, bold=True, color=NAVY_HEX)
        font_card_body = Font(name=font_family, size=9, color="334155")
        font_alert_safe = Font(name=font_family, size=10, bold=True, color="15803D")
        font_alert_danger = Font(name=font_family, size=10, bold=True, color=ALERT_RED_HEX)

        # Fills
        fill_title = PatternFill(start_color=NAVY_HEX, end_color=NAVY_HEX, fill_type="solid")
        fill_header = PatternFill(start_color=NAVY_HEX, end_color=NAVY_HEX, fill_type="solid")
        fill_header_accent = PatternFill(start_color=STEEL_BLUE_HEX, end_color=STEEL_BLUE_HEX, fill_type="solid")
        fill_sub_header = PatternFill(start_color=ICE_BLUE_HEX, end_color=ICE_BLUE_HEX, fill_type="solid")
        fill_zebra = PatternFill(start_color=LIGHT_GRAY_HEX, end_color=LIGHT_GRAY_HEX, fill_type="solid")
        fill_formula_bg = PatternFill(start_color=ICE_BLUE_HEX, end_color=ICE_BLUE_HEX, fill_type="solid")
        fill_total = PatternFill(start_color="E2E8F0", end_color="E2E8F0", fill_type="solid")
        fill_card = PatternFill(start_color=CARD_BG_HEX, end_color=CARD_BG_HEX, fill_type="solid")
        fill_param_header = PatternFill(start_color="1E3A8A", end_color="1E3A8A", fill_type="solid")
        fill_param_cell = PatternFill(start_color="EFF6FF", end_color="EFF6FF", fill_type="solid")
        fill_student_prompt = PatternFill(start_color=PROMPT_FILL_HEX, end_color=PROMPT_FILL_HEX, fill_type="solid")
        fill_solved = PatternFill(start_color=SOLVED_FILL_HEX, end_color=SOLVED_FILL_HEX, fill_type="solid")
        fill_safe_badge = PatternFill(start_color="DCFCE7", end_color="DCFCE7", fill_type="solid")
        fill_alert_badge = PatternFill(start_color=ALERT_RED_BG, end_color=ALERT_RED_BG, fill_type="solid")

        # Borders
        thin_border_side = Side(border_style="thin", color=BORDER_GRAY_HEX)
        med_navy_side = Side(border_style="medium", color=NAVY_HEX)
        double_border_side = Side(border_style="double", color="1E293B")
        amber_border_side = Side(border_style="thin", color=PROMPT_BORDER_HEX)
        
        border_cell = Border(left=thin_border_side, right=thin_border_side, top=thin_border_side, bottom=thin_border_side)
        border_param = Border(left=thin_border_side, right=thin_border_side, top=thin_border_side, bottom=thin_border_side)
        border_total = Border(left=thin_border_side, right=thin_border_side, top=thin_border_side, bottom=double_border_side)
        border_prompt = Border(left=amber_border_side, right=amber_border_side, top=amber_border_side, bottom=amber_border_side)

        # Alignments
        align_center = Alignment(horizontal="center", vertical="center")
        align_left = Alignment(horizontal="left", vertical="center")
        align_right = Alignment(horizontal="right", vertical="center")
        align_header = Alignment(horizontal="center", vertical="center", wrap_text=True)
        align_card = Alignment(horizontal="left", vertical="top", wrap_text=True)

        # Number Formats
        FMT_INT = '#,##0'
        FMT_DEC1 = '#,##0.0'
        FMT_DEC2 = '#,##0.00'
        FMT_DEC4 = '#,##0.0000'
        FMT_PERCENT = '0.0%'

        def style_header_row(ws, row_idx, headers, fill=fill_header, font=font_header, height=28):
            ws.row_dimensions[row_idx].height = height
            for c_idx, text in enumerate(headers, start=1):
                cell = ws.cell(row=row_idx, column=c_idx, value=text)
                cell.font = font
                cell.fill = fill
                cell.alignment = align_header
                cell.border = border_cell

        def autofit(ws, min_col=1, max_col=None, padding=3):
            if max_col is None:
                max_col = ws.max_column
            for col in range(min_col, max_col + 1):
                col_letter = get_column_letter(col)
                max_len = 0
                for row in range(1, ws.max_row + 1):
                    if row in [1, 2]:
                        continue
                    cell = ws.cell(row=row, column=col)
                    val_str = str(cell.value or '')
                    if val_str.startswith('='):
                        val_str = "123,456.78 pol"
                    if len(val_str) > max_len:
                        max_len = len(val_str)
                ws.column_dimensions[col_letter].width = max(max_len + padding, 12)

        # =====================================================================
        # ABA 0: GUIA TÉCNICO DE PESAGEM E REFERÊNCIAS ABSOLUTAS NO HANGAR
        # =====================================================================
        ws0 = wb.create_sheet(title="00_Guia_Manutencao_e_Ref_Abs")
        ws0.views.sheetView[0].showGridLines = True

        ws0.merge_cells("A1:G1")
        ws0["A1"] = "INF-117 INFORMÁTICA APLICADA A AERONÁUTICA — MANUTENÇÃO DE AERONAVES"
        ws0["A1"].font = font_title; ws0["A1"].fill = fill_title; ws0["A1"].alignment = align_center
        ws0.row_dimensions[1].height = 28

        ws0.merge_cells("A2:G2")
        ws0["A2"] = "Aula 07: Planilhas de Peso e Balanceamento em Hangar & Referências Absolutas ($) conforme RBAC 43 / 145 e FAA-H-8083-1B"
        ws0["A2"].font = font_subtitle; ws0["A2"].fill = fill_title; ws0["A2"].alignment = align_center
        ws0.row_dimensions[2].height = 20

        # Section 1: Maintenance Plan
        ws0["A4"] = "1. Visão Geral das Planilhas de Manutenção & Oficinas Homologadas"
        ws0["A4"].font = font_section

        guias = [
            ("Aba 1: Ativ1_Pesagem_Hangar_EWCG", "PLANILHA GUIADA 1 (Fazer Junto): Relatório Oficial de Pesagem Periódica em Hangar com 3 Células de Carga (Trem Principal Esq/Dir e Trem de Nariz). Desconto da tara calibrada de calços/macacos fixada com Referência Absoluta ($C$7), cálculo do Peso Vazio (BEW) e do Centro de Gravidade Vazio (EWCG)."),
            ("Aba 2: Ativ2_Modificacao_Avionicos", "PLANILHA GUIADA 2 (Fazer Junto): Alteração de Peso e Balanceamento pós-Modificação (Major Alteration / STC) na oficina de aviônicos. Registro de itens removidos (-P, -M) e instalados (+P, +M), recálculo do novo EWCG, nova Carga Útil com MTOW travado ($C$5) e conversão métrica para o SI."),
            ("Aba 3: Ativ3_Exercicio_Revisao_Geral", "EXERCÍCIO DE FIXAÇÃO: Revisão Geral (Overhaul) e Repintura Completa de um bimotor executivo em oficina de manutenção. O aluno desconta taras de balança com $, totaliza novo BEW, calcula novo EWCG, avalia o limite traseiro do TCDS e emite o parecer de Liberação para Retorno ao Serviço (RTS)."),
        ]

        ws0.cell(row=6, column=1, value="Aba da Planilha").font = font_header
        ws0.cell(row=6, column=1).fill = fill_header_accent
        ws0.cell(row=6, column=1).alignment = align_center
        ws0.cell(row=6, column=1).border = border_cell

        ws0.merge_cells("B6:G6")
        ws0.cell(row=6, column=2, value="Aplicação Real na Manutenção Aeronáutica & Formulação no Excel").font = font_header
        ws0.cell(row=6, column=2).fill = fill_header_accent
        ws0.cell(row=6, column=2).alignment = align_left
        ws0.cell(row=6, column=2).border = border_cell
        ws0.row_dimensions[6].height = 24

        for idx, (aba_nome, desc) in enumerate(guias, start=7):
            c1 = ws0.cell(row=idx, column=1, value=aba_nome)
            c1.font = font_data_bold; c1.fill = fill_zebra if idx % 2 == 0 else PatternFill(fill_type=None)
            c1.alignment = align_left; c1.border = border_cell

            ws0.merge_cells(start_row=idx, start_column=2, end_row=idx, end_column=7)
            c2 = ws0.cell(row=idx, column=2, value=desc)
            c2.font = font_data; c2.fill = fill_zebra if idx % 2 == 0 else PatternFill(fill_type=None)
            c2.alignment = align_left; c2.border = border_cell
            ws0.row_dimensions[idx].height = 36

        # Section 2: Reference Theory
        ws0["A11"] = "2. O Cifrão ($) e a Tecla F4 Aplicados aos Formulários de Manutenção"
        ws0["A11"].font = font_section

        ref_teoria = [
            ("Referência Relativa", "Ex: C13 ou D13", "Desloca linha e coluna ao arrastar a fórmula pela alça de preenchimento.", "Cálculo de Momento de cada ponto de pesagem (=C13*D13). Ao arrastar para a linha 14, torna-se (=C14*D14)."),
            ("Referência Absoluta", "Ex: $C$5 ou $C$7", "Trava linha e coluna. O cifrão ($) fixa a célula ao arrastar em qualquer direção.", "Subtração da tara de balança em todos os pontos (=B13-$C$7) e cálculo de nova Carga Útil (=$C$5-Novo_Peso)."),
            ("Referência Mista (Linha)", "Ex: C$5", "A coluna varia livremente, mas a linha 5 permanece 'congelada'.", "Tabelas matriciais de tolerância de combustível residual e balanceamento de superfícies de controle."),
            ("Referência Mista (Coluna)", "Ex: $C5", "A coluna C permanece fixa, mas a linha varia ao arrastar lateralmente.", "Comparação entre pesagens de diferentes inspeções C-Check preservando a coluna original."),
        ]

        ws0.cell(row=13, column=1, value="Tipo de Referência").font = font_header
        ws0.cell(row=13, column=1).fill = fill_header; ws0.cell(row=13, column=1).border = border_cell; ws0.cell(row=13, column=1).alignment = align_center
        ws0.cell(row=13, column=2, value="Sintaxe").font = font_header
        ws0.cell(row=13, column=2).fill = fill_header; ws0.cell(row=13, column=2).border = border_cell; ws0.cell(row=13, column=2).alignment = align_center
        ws0.merge_cells("C13:D13")
        ws0.cell(row=13, column=3, value="Comportamento no Excel").font = font_header
        ws0.cell(row=13, column=3).fill = fill_header; ws0.cell(row=13, column=3).border = border_cell; ws0.cell(row=13, column=3).alignment = align_left
        ws0.merge_cells("E13:G13")
        ws0.cell(row=13, column=5, value="Exemplo Real no Hangar / Oficina").font = font_header
        ws0.cell(row=13, column=5).fill = fill_header; ws0.cell(row=13, column=5).border = border_cell; ws0.cell(row=13, column=5).alignment = align_left
        ws0.row_dimensions[13].height = 24

        for idx, (nome, sintaxe, comp, ex) in enumerate(ref_teoria, start=14):
            c1 = ws0.cell(row=idx, column=1, value=nome); c1.font = font_data_bold; c1.border = border_cell; c1.alignment = align_left
            c2 = ws0.cell(row=idx, column=2, value=sintaxe); c2.font = font_formula; c2.fill = fill_formula_bg; c2.border = border_cell; c2.alignment = align_center
            
            ws0.merge_cells(start_row=idx, start_column=3, end_row=idx, end_column=4)
            c3 = ws0.cell(row=idx, column=3, value=comp); c3.font = font_data; c3.border = border_cell; c3.alignment = align_left
            
            ws0.merge_cells(start_row=idx, start_column=5, end_row=idx, end_column=7)
            c4 = ws0.cell(row=idx, column=5, value=ex); c4.font = font_data; c4.border = border_cell; c4.alignment = align_left
            ws0.row_dimensions[idx].height = 32

        # Section 3: Engineering Formulas in Maintenance
        ws0["A19"] = "3. Equações Regulamentares de Manutenção (FAA-H-8083-1B / RBAC 43)"
        ws0["A19"].font = font_section

        eqs = [
            ("Peso Líquido da Balança", "Peso Líquido = Leitura Bruta da Célula de Carga - Tara Calibrada de Calços", "=B13-$C$7 (usando $ para fixar a tara)"),
            ("Momento da Estação", "Momento (M) = Peso Líquido (P) * Braço da Estação (B)", "=C13*D13 (referência relativa para arrastar)"),
            ("Peso Básico Vazio (BEW)", "BEW = Somatória dos Pesos Líquidos de Todos os Pontos de Pesagem", "=SOMA(C13:C16)"),
            ("Centro de Gravidade Vazio (EWCG)", "EWCG = Somatória dos Momentos Totais / Peso Básico Vazio Total", "=E17/C17 (Posição do CG da aeronave vazia)"),
            ("Carga Útil Disponível (Useful Load)", "Carga Útil = MTOW Homologado no TCDS - Peso Básico Vazio (BEW)", "=$C$5-C17 (MTOW travado com referência absoluta)"),
            ("Modificação de Aviônicos", "Novo Momento = Momento Anterior - Momento Removido + Momento Instalado", "=SOMA(E13:E20) (com pesos e momentos negativos para remoção)"),
        ]

        ws0.cell(row=21, column=1, value="Conceito Técnico").font = font_header
        ws0.cell(row=21, column=1).fill = fill_param_header; ws0.cell(row=21, column=1).border = border_cell; ws0.cell(row=21, column=1).alignment = align_center
        ws0.merge_cells("B21:D21")
        ws0.cell(row=21, column=2, value="Definição Física & Regulamentar").font = font_header
        ws0.cell(row=21, column=2).fill = fill_param_header; ws0.cell(row=21, column=2).border = border_cell; ws0.cell(row=21, column=2).alignment = align_left
        ws0.merge_cells("E21:G21")
        ws0.cell(row=21, column=5, value="Fórmula Correspondente no Excel").font = font_header
        ws0.cell(row=21, column=5).fill = fill_param_header; ws0.cell(row=21, column=5).border = border_cell; ws0.cell(row=21, column=5).alignment = align_left
        ws0.row_dimensions[21].height = 24

        for idx, (c_nome, c_def, c_form) in enumerate(eqs, start=22):
            c1 = ws0.cell(row=idx, column=1, value=c_nome); c1.font = font_data_bold; c1.border = border_cell; c1.alignment = align_left
            ws0.merge_cells(start_row=idx, start_column=2, end_row=idx, end_column=4)
            c2 = ws0.cell(row=idx, column=2, value=c_def); c2.font = font_data; c2.border = border_cell; c2.alignment = align_left
            ws0.merge_cells(start_row=idx, start_column=5, end_row=idx, end_column=7)
            c3 = ws0.cell(row=idx, column=5, value=c_form); c3.font = font_formula; c3.fill = fill_formula_bg; c3.border = border_cell; c3.alignment = align_left
            ws0.row_dimensions[idx].height = 22

        ws0.column_dimensions["A"].width = 28
        ws0.column_dimensions["B"].width = 18
        ws0.column_dimensions["C"].width = 24
        ws0.column_dimensions["D"].width = 22
        ws0.column_dimensions["E"].width = 22
        ws0.column_dimensions["F"].width = 22
        ws0.column_dimensions["G"].width = 24

        # =====================================================================
        # ABA 1: PESAGEM EM HANGAR (CÁLCULO DO EWCG) — FAZER JUNTO
        # =====================================================================
        ws1 = wb.create_sheet(title="Ativ1_Pesagem_Hangar_EWCG")
        ws1.views.sheetView[0].showGridLines = True

        ws1.merge_cells("A1:G1")
        ws1["A1"] = "RELATÓRIO TÉCNICO DE PESAGEM PERIÓDICA EM HANGAR — CESSNA 172 SKYHAWK"
        ws1["A1"].font = font_title; ws1["A1"].fill = fill_title; ws1["A1"].alignment = align_center
        ws1.row_dimensions[1].height = 28

        ws1.merge_cells("A2:G2")
        ws1["A2"] = "Atividade 1 (Fazer Junto): Determinação do Peso Básico Vazio (BEW) e Centro de Gravidade Vazio (EWCG) com Referência Absoluta à Tara"
        ws1["A2"].font = font_subtitle; ws1["A2"].fill = fill_title; ws1["A2"].alignment = align_center
        ws1.row_dimensions[2].height = 20

        # Parameters Table (Rows 4-9)
        ws1.merge_cells("A4:E4")
        ws1["A4"] = "PARÂMETROS DE CERTIFICAÇÃO DA AERONAVE & DADOS DA PESAGEM (TRAVAR CÉLULAS COM $)"
        ws1["A4"].font = font_header; ws1["A4"].fill = fill_param_header; ws1["A4"].alignment = align_left
        ws1.row_dimensions[4].height = 22

        param_c172 = [
            ("Peso Máximo de Decolagem Homologado (MTOW)", 2550.0, "lb", "$C$5", "Limite estrutural estabelecido no TCDS 3A12 da FAA/ANAC"),
            ("Limite Dianteiro de EWCG no TCDS (Forward Limit)", 82.0, "pol", "$C$6", "Faixa dianteira mínima para liberação técnica da célula"),
            ("Tara Fixa dos Calços / Macacos de Pesagem", 12.0, "lb", "$C$7", "Peso dos calços e adaptadores sobre cada balança (Descontar via $C$7)"),
            ("Limite Traseiro de EWCG no TCDS (Aft Limit)", 86.5, "pol", "$C$8", "Faixa traseira máxima do peso vazio para estabilidade estática"),
            ("Densidade Padronizada do Combustível Residual (AvGas)", 6.0, "lb/gal", "$C$9", "Fator de conversão da tara de combustível inutilizável"),
        ]

        for idx, (p_nome, p_val, p_unid, p_ref, p_obs) in enumerate(param_c172, start=5):
            ws1.merge_cells(start_row=idx, start_column=1, end_row=idx, end_column=2)
            c1 = ws1.cell(row=idx, column=1, value=p_nome); c1.font = font_data_bold; c1.fill = fill_param_cell; c1.border = border_param
            c2 = ws1.cell(row=idx, column=3, value=p_val); c2.font = font_data_bold; c2.fill = fill_param_cell; c2.border = border_param; c2.alignment = align_right
            c2.number_format = FMT_DEC1 if isinstance(p_val, float) else FMT_INT
            ws1.cell(row=idx, column=4, value=p_unid).font = font_note; ws1.cell(row=idx, column=4).fill = fill_param_cell; ws1.cell(row=idx, column=4).border = border_param; ws1.cell(row=idx, column=4).alignment = align_center
            ws1.cell(row=idx, column=5, value=f"Célula {p_ref}").font = font_formula; ws1.cell(row=idx, column=5).fill = fill_formula_bg; ws1.cell(row=idx, column=5).border = border_param; ws1.cell(row=idx, column=5).alignment = align_center
            ws1.merge_cells(start_row=idx, start_column=6, end_row=idx, end_column=7)
            ws1.cell(row=idx, column=6, value=p_obs).font = font_note; ws1.cell(row=idx, column=6).fill = fill_zebra; ws1.cell(row=idx, column=6).border = border_cell
            ws1.row_dimensions[idx].height = 20

        # Weighing Schedule (Rows 11-17)
        ws1["A11"] = "LEITURAS DAS CÉLULAS DE CARGA (BALANÇAS CALIBRADAS DE HANGAR)"
        ws1["A11"].font = font_section

        headers_weighing = [
            "Ponto de Pesagem / Célula de Carga",
            "Leitura Bruta (lb)",
            "PESO LÍQUIDO (lb) [=Bruto-$C$7]",
            "Braço da Balança (pol)",
            "MOMENTO (lb.pol) [=P*B]",
            "Fórmula Sugerida no Excel",
            "Referência Técnica no Hangar"
        ]
        style_header_row(ws1, 12, headers_weighing, fill=fill_header, font=font_header, height=26)

        c172_points = [
            ("Trem Principal Esquerdo (LMLG - Left Main Gear)", 685.0, "=B13-$C$7", 90.5, "=C13*D13", "Balança Digital Hangar RBC #1"),
            ("Trem Principal Direito (RMLG - Right Main Gear)", 692.0, "=B14-$C$7", 90.5, "=C14*D14", "Balança Digital Hangar RBC #2"),
            ("Trem de Nariz (NLG - Nose Landing Gear)", 311.0, "=B15-$C$7", 42.0, "=C15*D15", "Balança de Nariz / Jack Hangar #3"),
            ("Combustível Inutilizável Drenado (Dedução)", -18.0, -18.0, 95.0, "=C16*D16", "Combustível residual nas tubulações"),
        ]

        for idx, (pt_nome, pt_bruto, pt_liq_form, pt_braco, pt_mom_form, pt_ref_tec) in enumerate(c172_points, start=13):
            ws1.row_dimensions[idx].height = 22
            ws1.cell(row=idx, column=1, value=pt_nome).font = font_data_bold; ws1.cell(row=idx, column=1).border = border_cell
            
            # Leitura Bruta (Col B)
            c_bruto = ws1.cell(row=idx, column=2, value=pt_bruto)
            c_bruto.font = font_data; c_bruto.border = border_cell; c_bruto.alignment = align_right; c_bruto.number_format = FMT_DEC1

            # Peso Líquido (Col C) - USA REFERÊNCIA ABSOLUTA $C$7 (Tara)
            c_liq = ws1.cell(row=idx, column=3)
            c_liq.border = border_cell; c_liq.alignment = align_right; c_liq.number_format = FMT_DEC1
            if idx == 16: # Dedução Combustível já é líquido
                c_liq.value = -18.0
                c_liq.font = font_data
            else:
                if is_resolvido:
                    c_liq.value = f"=B{idx}-$C$7"
                    c_liq.font = font_formula_solved; c_liq.fill = fill_solved
                else:
                    c_liq.value = None
                    c_liq.fill = fill_student_prompt; c_liq.border = border_prompt

            # Braço (Col D)
            c_b = ws1.cell(row=idx, column=4, value=pt_braco)
            c_b.font = font_data; c_b.border = border_cell; c_b.alignment = align_right; c_b.number_format = FMT_DEC1

            # Momento (Col E)
            c_m = ws1.cell(row=idx, column=5)
            c_m.border = border_cell; c_m.alignment = align_right; c_m.number_format = FMT_DEC1
            if is_resolvido:
                c_m.value = pt_mom_form
                c_m.font = font_formula_solved; c_m.fill = fill_solved
            else:
                c_m.value = None
                c_m.fill = fill_student_prompt; c_m.border = border_prompt

            # Fórmula Sugerida
            ws1.cell(row=idx, column=6, value=f"Peso: =B{idx}-$C$7 | Mom: =C{idx}*D{idx}" if idx != 16 else f"Mom: =C{idx}*D{idx}").font = font_formula; ws1.cell(row=idx, column=6).fill = fill_formula_bg; ws1.cell(row=idx, column=6).border = border_cell; ws1.cell(row=idx, column=6).alignment = align_left
            ws1.cell(row=idx, column=7, value=pt_ref_tec).font = font_note; ws1.cell(row=idx, column=7).border = border_cell; ws1.cell(row=idx, column=7).alignment = align_left

        # Totals Row (Row 17)
        ws1.row_dimensions[17].height = 24
        ws1.merge_cells("A17:B17")
        ws1["A17"] = "PESO BÁSICO VAZIO (BEW) & MOMENTO VAZIO TOTAL DA AERONAVE"
        ws1["A17"].font = font_section; ws1["A17"].fill = fill_total; ws1["A17"].border = border_total

        # Tot Peso
        c_tot_p = ws1.cell(row=17, column=3)
        c_tot_p.border = border_total; c_tot_p.fill = fill_total; c_tot_p.alignment = align_right; c_tot_p.number_format = FMT_DEC1
        if is_resolvido:
            c_tot_p.value = "=SUM(C13:C16)"
            c_tot_p.font = font_formula_solved
        else:
            c_tot_p.value = None
            c_tot_p.fill = fill_student_prompt; c_tot_p.border = border_prompt

        ws1.cell(row=17, column=4, value="—").font = font_note; ws1.cell(row=17, column=4).fill = fill_total; ws1.cell(row=17, column=4).border = border_total; ws1.cell(row=17, column=4).alignment = align_center

        # Tot Momento
        c_tot_m = ws1.cell(row=17, column=5)
        c_tot_m.border = border_total; c_tot_m.fill = fill_total; c_tot_m.alignment = align_right; c_tot_m.number_format = FMT_DEC1
        if is_resolvido:
            c_tot_m.value = "=SUM(E13:E16)"
            c_tot_m.font = font_formula_solved
        else:
            c_tot_m.value = None
            c_tot_m.fill = fill_student_prompt; c_tot_m.border = border_prompt

        ws1.cell(row=17, column=6, value="=SOMA(C13:C16) e =SOMA(E13:E16)").font = font_formula; ws1.cell(row=17, column=6).fill = fill_total; ws1.cell(row=17, column=6).border = border_total; ws1.cell(row=17, column=6).alignment = align_left
        ws1.cell(row=17, column=7, value="Somatórias Finais").font = font_note; ws1.cell(row=17, column=7).fill = fill_total; ws1.cell(row=17, column=7).border = border_total; ws1.cell(row=17, column=7).alignment = align_center

        # Maintenance Engineering Dashboard (Rows 20-25)
        ws1["A19"] = "PAINEL DE CERTIFICAÇÃO & LAUDO TÉCNICO DE PESAGEM DO HANGAR"
        ws1["A19"].font = font_section

        headers_diag_maint = [
            "Parâmetro de Aeronavegabilidade",
            "Fórmula a ser Construída",
            "Valor Calculado",
            "Unidade",
            "Critério Homologado (TCDS)",
            "Laudo Técnico de Liberação",
            "Tipo de Referência Utilizada"
        ]
        style_header_row(ws1, 20, headers_diag_maint, fill=fill_header_accent, font=font_header_accent, height=26)

        diag_maint_items = [
            ("Centro de Gravidade Vazio (EWCG)", "=E17/C17", "=E17/C17", "pol", "82,0 pol a 86,5 pol (TCDS)", "=IF(C21<$C$6, \"REPROVADO: EWCG MUITO DIANTEIRO\", IF(C21>$C$8, \"REPROVADO: EWCG MUITO TRASEIRO\", \"APROVADO: EWCG DENTRO DO TCDS\"))", "Relativa (=Momento / Peso)"),
            ("Nova Carga Útil Disponível (Useful Load)", "=$C$5-C17", "=$C$5-C17", "lb", "Deve ser > 850 lb para operação comercial", "=IF(C22>=850, \"CARGA ÚTIL SATISFATÓRIA\", \"ATENÇÃO: CARGA ÚTIL REDUZIDA\")", "ABSOLUTA: MTOW fixado ($C$5)"),
            ("Porcentagem de Peso Vazio em relação ao MTOW", "=C17/$C$5", "=C17/$C$5", "%", "Referência histórica de projeto (60% a 66%)", "Conformidade Estrutural", "ABSOLUTA: MTOW fixado ($C$5)"),
            ("Assinatura do Laudo / Parecer de Retorno ao Serviço", "Decisão Técnica", "LIBERADO", "Status", "RBAC 43.9 / Apêndice B", "AERONAVE HOMOLOGADA PARA VOO", "Certificação de Hangar"),
        ]

        for idx, (d_nome, d_form_txt, d_form, d_unid, d_crit, d_laudo, d_ref) in enumerate(diag_maint_items, start=21):
            ws1.row_dimensions[idx].height = 24
            ws1.cell(row=idx, column=1, value=d_nome).font = font_data_bold; ws1.cell(row=idx, column=1).border = border_cell
            ws1.cell(row=idx, column=2, value=d_form_txt).font = font_formula; ws1.cell(row=idx, column=2).fill = fill_formula_bg; ws1.cell(row=idx, column=2).border = border_cell; ws1.cell(row=idx, column=2).alignment = align_left

            # Result Cell (Col C)
            c_res = ws1.cell(row=idx, column=3)
            c_res.border = border_cell; c_res.alignment = align_right
            if idx in [21, 22]:
                c_res.number_format = FMT_DEC2 if idx == 21 else FMT_DEC1
            elif idx == 23:
                c_res.number_format = FMT_PERCENT

            if is_resolvido:
                if idx == 24:
                    c_res.value = "LIBERADO RTS"
                    c_res.font = font_alert_safe; c_res.fill = fill_safe_badge; c_res.alignment = align_center
                else:
                    c_res.value = d_form
                    c_res.font = font_formula_solved; c_res.fill = fill_solved
            else:
                c_res.value = None
                c_res.fill = fill_student_prompt; c_res.border = border_prompt

            ws1.cell(row=idx, column=4, value=d_unid).font = font_note; ws1.cell(row=idx, column=4).border = border_cell; ws1.cell(row=idx, column=4).alignment = align_center
            ws1.cell(row=idx, column=5, value=d_crit).font = font_data; ws1.cell(row=idx, column=5).border = border_cell; ws1.cell(row=idx, column=5).alignment = align_left

            # Status Badge (Col F)
            c_st = ws1.cell(row=idx, column=6)
            c_st.border = border_cell; c_st.alignment = align_center
            if is_resolvido:
                if str(d_laudo).startswith("="):
                    c_st.value = d_laudo
                else:
                    c_st.value = d_laudo
                c_st.font = font_alert_safe; c_st.fill = fill_safe_badge
            else:
                c_st.value = "Aguardando pesagem..."
                c_st.font = font_note; c_st.fill = fill_zebra

            ws1.cell(row=idx, column=7, value=d_ref).font = font_note; ws1.cell(row=idx, column=7).border = border_cell; ws1.cell(row=idx, column=7).alignment = align_left

        # Instructions Card
        ws1.merge_cells("A26:G29")
        card_text_1 = (
            "PROCEDIMENTO DE MANUTENÇÃO AERONÁUTICA (ATIVIDADE 1):\n"
            "1. Desconto da Tara com $: Na coluna C (linhas 13 a 15), desconte a tara calibrada da balança digitando =B13-$C$7. Trave com $C$7 (tecla F4) e arraste para baixo.\n"
            "2. Momento de cada ponto: Na coluna E (linhas 13 a 16), multiplique Peso Líquido por Braço (=C13*D13) e dê duplo clique para arrastar.\n"
            "3. Totais do Hangar: Na linha 17, some os pesos (=SOMA(C13:C16)) para obter o Peso Básico Vazio (BEW = 1.642,0 lb) e os momentos (=SOMA(E13:E16) = 135.034,0 lb.pol).\n"
            "4. EWCG e Carga Útil com $: Em C21, calcule o EWCG (=E17/C17 = 82,24 pol). Em C22, calcule a nova Carga Útil subtraindo o BEW do MTOW fixado: =$C$5-C17."
        )
        ws1["A26"] = card_text_1
        ws1["A26"].font = font_card_body; ws1["A26"].fill = fill_card; ws1["A26"].border = border_cell; ws1["A26"].alignment = align_card

        autofit(ws1, 1, 7)

        # =====================================================================
        # ABA 2: ALTERAÇÃO DE PESO POR MODIFICAÇÃO DE AVIÔNICOS (FAZER JUNTO 2)
        # =====================================================================
        ws2 = wb.create_sheet(title="Ativ2_Modificacao_Avionicos")
        ws2.views.sheetView[0].showGridLines = True

        ws2.merge_cells("A1:G1")
        ws2["A1"] = "ALTERAÇÃO DE PESO E BALANCEAMENTO PÓS-MODIFICAÇÃO (MAJOR ALTERATION / STC)"
        ws2["A1"].font = font_title; ws2["A1"].fill = fill_title; ws2["A1"].alignment = align_center
        ws2.row_dimensions[1].height = 28

        ws2.merge_cells("A2:G2")
        ws2["A2"] = "Atividade 2 (Fazer Junto): Registro Técnico de Remoção (-P, -M) e Instalação (+P, +M) de Aviônicos e Bateria Leve (RBAC 43 - Form 337)"
        ws2["A2"].font = font_subtitle; ws2["A2"].fill = fill_title; ws2["A2"].alignment = align_center
        ws2.row_dimensions[2].height = 20

        # Parameters Table (Rows 4-8)
        ws2.merge_cells("A4:E4")
        ws2["A4"] = "PARÂMETROS DE CERTIFICAÇÃO DA MODIFICAÇÃO (CÉLULAS COM $ PARA REFERÊNCIA ABSOLUTA)"
        ws2["A4"].font = font_header; ws2["A4"].fill = fill_param_header; ws2["A4"].alignment = align_left
        ws2.row_dimensions[4].height = 22

        params_mod = [
            ("Peso Máximo de Decolagem (MTOW)", 2550.0, "lb", "$C$5", "Limite de massa para cálculo da nova carga útil disponível"),
            ("Limite Dianteiro de EWCG no TCDS", 82.0, "pol", "$C$6", "Faixa dianteira mínima após alteração de componentes"),
            ("Limite Traseiro de EWCG no TCDS", 86.5, "pol", "$C$7", "Faixa traseira máxima para evitar instabilidade com peso vazio"),
            ("Fator de Conversão Massa (lb -> kg)", 0.453592, "kg / lb", "$C$8", "Fator internacional para atualização do manual em quilogramas"),
            ("Fator de Conversão Comprimento (pol -> mm)", 25.4000, "mm / pol", "$C$9", "Fator internacional para desenho técnico de montagem mecânica"),
        ]

        for idx, (p_nome, p_val, p_unid, p_ref, p_obs) in enumerate(params_mod, start=5):
            ws2.merge_cells(start_row=idx, start_column=1, end_row=idx, end_column=2)
            c1 = ws2.cell(row=idx, column=1, value=p_nome); c1.font = font_data_bold; c1.fill = fill_param_cell; c1.border = border_param
            c2 = ws2.cell(row=idx, column=3, value=p_val); c2.font = font_data_bold; c2.fill = fill_param_cell; c2.border = border_param; c2.alignment = align_right
            c2.number_format = FMT_DEC4 if idx in [8, 9] else (FMT_DEC1 if isinstance(p_val, float) else FMT_INT)
            ws2.cell(row=idx, column=4, value=p_unid).font = font_note; ws2.cell(row=idx, column=4).fill = fill_param_cell; ws2.cell(row=idx, column=4).border = border_param; ws2.cell(row=idx, column=4).alignment = align_center
            ws2.cell(row=idx, column=5, value=f"Célula {p_ref}").font = font_formula; ws2.cell(row=idx, column=5).fill = fill_formula_bg; ws2.cell(row=idx, column=5).border = border_param; ws2.cell(row=idx, column=5).alignment = align_center
            ws2.merge_cells(start_row=idx, start_column=6, end_row=idx, end_column=7)
            ws2.cell(row=idx, column=6, value=p_obs).font = font_note; ws2.cell(row=idx, column=6).fill = fill_zebra; ws2.cell(row=idx, column=6).border = border_cell
            ws2.row_dimensions[idx].height = 20

        # Modification Table (Rows 11-20)
        ws2["A11"] = "TABELA DE REGISTRO TÉCNICO DE REMOÇÃO E INSTALAÇÃO DE COMPONENTES"
        ws2["A11"].font = font_section

        headers_mod = [
            "Ação de Manutenção / Componente",
            "Número de Peça (P/N) & Descrição",
            "Peso (lb) [+/- P]",
            "Braço (pol) [B]",
            "MOMENTO (lb.pol) [=P*B]",
            "Fórmula Sugerida",
            "Impacto Técnico"
        ]
        style_header_row(ws2, 12, headers_mod, fill=fill_header, font=font_header, height=26)

        mod_items = [
            ("Condição Anterior da Aeronave", "Peso Vazio Original registrado na Caderneta", 1642.0, 82.24, "=C13*D13", "Base de Cálculo Inicial"),
            ("REMOÇÃO: Rádio VHF King KX-170B Antigo", "P/N 069-1020-00 (VHF/NAV Analógico)", -15.0, 56.0, "=C14*D14", "Alívio de peso no painel"),
            ("REMOÇÃO: Receptor ADF King KR-87", "P/N 066-1072-00 (Com antena de quadro)", -18.0, 62.0, "=C15*D15", "Alívio de peso na cabine"),
            ("REMOÇÃO: Sistema de Vácuo (Giro + Bomba)", "P/N 215CC (Bomba + Horizon + DG pneumático)", -12.5, 45.0, "=C16*D16", "Eliminação do sistema pneumático"),
            ("REMOÇÃO: Bateria Chumbo-Ácido Original", "P/N RG-35A (Bateria pesada original)", -28.0, 32.0, "=C17*D17", "Substituição por tecnologia moderna"),
            ("INSTALAÇÃO: Display Garmin GI-275 Digital", "P/N 010-02201-00 (Horizonte/HSI Eletrônico)", 4.5, 55.0, "=C18*D18", "Modernização Glass Cockpit"),
            ("INSTALAÇÃO: Navegador GPS/NAV/COM GTN-650Xi", "P/N 010-02256-00 (GPS IFR Touchscreen)", 7.8, 56.5, "=C19*D19", "Modernização de navegação"),
            ("INSTALAÇÃO: Bateria Leve de Íon-Lítio", "P/N TB17 (Bateria de Lítio Certificada TSO)", 14.2, 32.0, "=C20*D20", "Redução expressiva de peso"),
        ]

        for idx, (m_acao, m_pn, m_peso, m_braco, m_mom_form, m_impacto) in enumerate(mod_items, start=13):
            ws2.row_dimensions[idx].height = 20
            ws2.cell(row=idx, column=1, value=m_acao).font = font_data_bold; ws2.cell(row=idx, column=1).border = border_cell
            ws2.cell(row=idx, column=2, value=m_pn).font = font_data; ws2.cell(row=idx, column=2).border = border_cell

            # Peso (+/- P)
            c_p = ws2.cell(row=idx, column=3, value=m_peso)
            c_p.font = font_data_bold if idx == 13 else font_data
            c_p.border = border_cell; c_p.alignment = align_right; c_p.number_format = FMT_DEC1

            # Braço
            c_b = ws2.cell(row=idx, column=4, value=m_braco)
            c_b.font = font_data; c_b.border = border_cell; c_b.alignment = align_right; c_b.number_format = FMT_DEC2

            # Momento
            c_m = ws2.cell(row=idx, column=5)
            c_m.border = border_cell; c_m.alignment = align_right; c_m.number_format = FMT_DEC1
            if is_resolvido:
                c_m.value = m_mom_form
                c_m.font = font_formula_solved; c_m.fill = fill_solved
            else:
                c_m.value = None
                c_m.fill = fill_student_prompt; c_m.border = border_prompt

            ws2.cell(row=idx, column=6, value=f"=C{idx}*D{idx}").font = font_formula; ws2.cell(row=idx, column=6).fill = fill_formula_bg; ws2.cell(row=idx, column=6).border = border_cell; ws2.cell(row=idx, column=6).alignment = align_left
            ws2.cell(row=idx, column=7, value=m_impacto).font = font_note; ws2.cell(row=idx, column=7).border = border_cell; ws2.cell(row=idx, column=7).alignment = align_left

        # Row 21: Totals Row
        ws2.row_dimensions[21].height = 24
        ws2.merge_cells("A21:B21")
        ws2["A21"] = "NOVO PESO BÁSICO VAZIO (NOVO BEW) & NOVO MOMENTO VAZIO"
        ws2["A21"].font = font_section; ws2["A21"].fill = fill_total; ws2["A21"].border = border_total

        # Novo Peso
        c_novo_p = ws2.cell(row=21, column=3)
        c_novo_p.border = border_total; c_novo_p.fill = fill_total; c_novo_p.alignment = align_right; c_novo_p.number_format = FMT_DEC1
        if is_resolvido:
            c_novo_p.value = "=SUM(C13:C20)"
            c_novo_p.font = font_formula_solved
        else:
            c_novo_p.value = None
            c_novo_p.fill = fill_student_prompt; c_novo_p.border = border_prompt

        ws2.cell(row=21, column=4, value="—").font = font_note; ws2.cell(row=21, column=4).fill = fill_total; ws2.cell(row=21, column=4).border = border_total; ws2.cell(row=21, column=4).alignment = align_center

        # Novo Momento
        c_novo_m = ws2.cell(row=21, column=5)
        c_novo_m.border = border_total; c_novo_m.fill = fill_total; c_novo_m.alignment = align_right; c_novo_m.number_format = FMT_DEC1
        if is_resolvido:
            c_novo_m.value = "=SUM(E13:E20)"
            c_novo_m.font = font_formula_solved
        else:
            c_novo_m.value = None
            c_novo_m.fill = fill_student_prompt; c_novo_m.border = border_prompt

        ws2.cell(row=21, column=6, value="=SOMA(C13:C20) e =SOMA(E13:E20)").font = font_formula; ws2.cell(row=21, column=6).fill = fill_total; ws2.cell(row=21, column=6).border = border_total; ws2.cell(row=21, column=6).alignment = align_left
        ws2.cell(row=21, column=7, value="Novo Peso Homologado").font = font_note; ws2.cell(row=21, column=7).fill = fill_total; ws2.cell(row=21, column=7).border = border_total; ws2.cell(row=21, column=7).alignment = align_center

        # Post-Mod Dashboard (Rows 23-28)
        ws2["A23"] = "CONSEQUÊNCIAS TÉCNICAS DA MODIFICAÇÃO (LAUDO DA OFICINA DE AVIÔNICOS)"
        ws2["A23"].font = font_section

        headers_post_mod = [
            "Resultado da Modificação",
            "Fórmula no Excel",
            "Valor Calculado",
            "Unidade",
            "Parâmetro Homologado",
            "Avaliação Técnica",
            "Uso da Referência Absoluta ($)"
        ]
        style_header_row(ws2, 24, headers_post_mod, fill=fill_header_accent, font=font_header_accent, height=26)

        diag_post_mod = [
            ("Novo Centro de Gravidade Vazio (Novo EWCG)", "=E21/C21", "=E21/C21", "pol", "82,0 pol a 86,5 pol", "=IF(C25<$C$6, \"FORA DO LIMITE: DIANTEIRO\", IF(C25>$C$7, \"FORA DO LIMITE: TRASEIRO\", \"CONFORME: DENTRO DO TCDS\"))", "Relativa (=Novo_M / Novo_P)"),
            ("Deslocamento do CG após a Modificação (Delta CG)", "=C25-D13", "=C25-D13", "pol", "Variação admissível da envoltória", "=IF(C26>0, \"CG DESLOCOU PARA TRÁS\", \"CG DESLOCOU PARA FRENTE\")", "Relativa (=Novo_CG - CG_Antigo)"),
            ("Nova Carga Útil Disponível (Useful Load)", "=$C$5-C21", "=$C$5-C21", "lb", "Capacidade de carga para combustível/ocupantes", "=IF(C27>=( $C$5-C13 ), \"GANHO DE CARGA ÚTIL!\", \"PERDA DE CARGA ÚTIL\")", "ABSOLUTA: Célula $C$5 travada"),
            ("Novo Peso Vazio em Quilogramas (SI)", "=C21*$C$8", "=C21*$C$8", "kg", "Registro para manuais padrão ICAO", "Conversão Oficial SI", "ABSOLUTA: Fator $C$8 travado"),
        ]

        for idx, (pm_nome, pm_form_txt, pm_form, pm_unid, pm_crit, pm_status, pm_ref) in enumerate(diag_post_mod, start=25):
            ws2.row_dimensions[idx].height = 24
            ws2.cell(row=idx, column=1, value=pm_nome).font = font_data_bold; ws2.cell(row=idx, column=1).border = border_cell
            ws2.cell(row=idx, column=2, value=pm_form_txt).font = font_formula; ws2.cell(row=idx, column=2).fill = fill_formula_bg; ws2.cell(row=idx, column=2).border = border_cell; ws2.cell(row=idx, column=2).alignment = align_left

            # Result Cell
            c_r = ws2.cell(row=idx, column=3)
            c_r.border = border_cell; c_r.alignment = align_right
            c_r.number_format = FMT_DEC2

            if is_resolvido:
                c_r.value = pm_form
                c_r.font = font_formula_solved; c_r.fill = fill_solved
            else:
                c_r.value = None
                c_r.fill = fill_student_prompt; c_r.border = border_prompt

            ws2.cell(row=idx, column=4, value=pm_unid).font = font_note; ws2.cell(row=idx, column=4).border = border_cell; ws2.cell(row=idx, column=4).alignment = align_center
            ws2.cell(row=idx, column=5, value=pm_crit).font = font_data; ws2.cell(row=idx, column=5).border = border_cell; ws2.cell(row=idx, column=5).alignment = align_left

            # Status Badge
            c_st = ws2.cell(row=idx, column=6)
            c_st.border = border_cell; c_st.alignment = align_center
            if is_resolvido:
                if str(pm_status).startswith("="):
                    c_st.value = pm_status
                else:
                    c_st.value = pm_status
                c_st.font = font_alert_safe; c_st.fill = fill_safe_badge
            else:
                c_st.value = "Aguardando cálculo..."
                c_st.font = font_note; c_st.fill = fill_zebra

            ws2.cell(row=idx, column=7, value=pm_ref).font = font_note; ws2.cell(row=idx, column=7).border = border_cell; ws2.cell(row=idx, column=7).alignment = align_left

        # Instructions Card
        ws2.merge_cells("A30:G34")
        card_text_2 = (
            "ORIENTAÇÕES PRÁTICAS DA ATIVIDADE 2 (OFICINA DE AVIÔNICOS):\n"
            "1. Sinal dos Componentes: Note que equipamentos removidos entram com sinal NEGATIVO (-15 lb, -18 lb, -12,5 lb, -28 lb), gerando momentos negativos automaticamente (=C*D).\n"
            "2. Totalização do Novo Peso Vazio: Na célula C21, utilize =SOMA(C13:C20). O novo peso cai de 1.642,0 lb para 1.595,0 lb (uma economia de 47 lb de peso morto!).\n"
            "3. Nova Carga Útil com $: Em C27, calcule a nova carga útil subtraindo o novo peso vazio do MTOW homologado: =$C$5-C21. A carga útil aumentou de 908 lb para 955 lb!\n"
            "4. Conversão Internacional com $: Em C28, converta o novo peso para kg multiplicando pela célula absoluta $C$8 (=C21*$C$8 = 723,48 kg). A fixação com $ garante que a fórmula funcione corretamente ao ser copiada."
        )
        ws2["A30"] = card_text_2
        ws2["A30"].font = font_card_body; ws2["A30"].fill = fill_card; ws2["A30"].border = border_cell; ws2["A30"].alignment = align_card

        autofit(ws2, 1, 7)

        # =====================================================================
        # ABA 3: EXERCÍCIO DE FIXAÇÃO EM HANGAR (REVISÃO GERAL BIMOTOR)
        # =====================================================================
        ws3 = wb.create_sheet(title="Ativ3_Exercicio_Revisao_Geral")
        ws3.views.sheetView[0].showGridLines = True

        ws3.merge_cells("A1:G1")
        ws3["A1"] = "EXERCÍCIO DE FIXAÇÃO: PESAGEM E BALANCEAMENTO PÓS-REVISÃO GERAL (OVERHAUL) — BEECHCRAFT BARON 58"
        ws3["A1"].font = font_title; ws3["A1"].fill = fill_title; ws3["A1"].alignment = align_center
        ws3.row_dimensions[1].height = 28

        ws3.merge_cells("A2:G2")
        ws3["A2"] = "Atividade 3 (Exercício Autônomo de Manutenção): Pesagem de Células de Carga, Repintura, Motores Novos e Liberação Técnica RTS"
        ws3["A2"].font = font_subtitle; ws3["A2"].fill = fill_title; ws3["A2"].alignment = align_center
        ws3.row_dimensions[2].height = 20

        # Parameters Table (Rows 4-10)
        ws3.merge_cells("A4:E4")
        ws3["A4"] = "PARÂMETROS REGULAMENTARES DO MANUAL DE MANUTENÇÃO (AMM) DO BIMOTOR — TRAVE COM $!"
        ws3["A4"].font = font_header; ws3["A4"].fill = fill_param_header; ws3["A4"].alignment = align_left
        ws3.row_dimensions[4].height = 22

        param_baron_maint = [
            ("Peso Máximo de Decolagem Homologado (MTOW)", 5400.0, "lb", "$C$5", "Capacidade estrutural máxima certificada no TCDS A17CE"),
            ("Limite Dianteiro de EWCG no TCDS (Forward Limit)", 84.0, "pol", "$C$6", "Faixa dianteira mínima para liberação técnica da aeronave"),
            ("Limite Traseiro de EWCG no TCDS (Aft Limit)", 88.5, "pol", "$C$7", "Faixa traseira máxima do peso vazio antes do carregamento operacional"),
            ("Tara Calibrada dos Macacos de Pesagem do Hangar", 15.0, "lb", "$C$8", "Tara física por célula de carga (Descontar via $C$8)"),
            ("Fator de Conversão Massa (lb -> kg)", 0.453592, "kg / lb", "$C$9", "Fator internacional para documentação de manutenção"),
            ("Fator de Conversão Comprimento (pol -> m)", 0.025400, "m / pol", "$C$10", "Fator métrico para envelope no Sistema Internacional"),
        ]

        for idx, (p_nome, p_val, p_unid, p_ref, p_obs) in enumerate(param_baron_maint, start=5):
            ws3.merge_cells(start_row=idx, start_column=1, end_row=idx, end_column=2)
            c1 = ws3.cell(row=idx, column=1, value=p_nome); c1.font = font_data_bold; c1.fill = fill_param_cell; c1.border = border_param
            c2 = ws3.cell(row=idx, column=3, value=p_val); c2.font = font_data_bold; c2.fill = fill_param_cell; c2.border = border_param; c2.alignment = align_right
            c2.number_format = FMT_DEC4 if idx in [9, 10] else (FMT_DEC1 if isinstance(p_val, float) else FMT_INT)
            ws3.cell(row=idx, column=4, value=p_unid).font = font_note; ws3.cell(row=idx, column=4).fill = fill_param_cell; ws3.cell(row=idx, column=4).border = border_param; ws3.cell(row=idx, column=4).alignment = align_center
            ws3.cell(row=idx, column=5, value=f"Célula {p_ref}").font = font_formula; ws3.cell(row=idx, column=5).fill = fill_formula_bg; ws3.cell(row=idx, column=5).border = border_param; ws3.cell(row=idx, column=5).alignment = align_center
            ws3.merge_cells(start_row=idx, start_column=6, end_row=idx, end_column=7)
            ws3.cell(row=idx, column=6, value=p_obs).font = font_note; ws3.cell(row=idx, column=6).fill = fill_zebra; ws3.cell(row=idx, column=6).border = border_cell
            ws3.row_dimensions[idx].height = 20

        # Weighing Schedule for Baron (Rows 12-20)
        ws3["A12"] = "DADOS DE PESAGEM NO HANGAR APÓS OVERHAUL DE MOTORES & PINTURA GERAL"
        ws3["A12"].font = font_section

        headers_baron_maint = [
            "Item de Pesagem / Célula de Carga",
            "Leitura Bruta (lb)",
            "PESO LÍQUIDO (lb) [=Bruto-$C$8]",
            "Braço da Estação (pol)",
            "MOMENTO (lb.pol) [=P*B]",
            "Fórmula a ser Construída",
            "Referência de Manutenção"
        ]
        style_header_row(ws3, 13, headers_baron_maint, fill=fill_header, font=font_header, height=26)

        baron_points = [
            ("Trem Principal Esquerdo (LMLG)", 1485.0, "=B14-$C$8", 96.5, "=C14*D14", "Célula de Carga RBC #1 (Asa Esquerda)"),
            ("Trem Principal Direito (RMLG)", 1492.0, "=B15-$C$8", 96.5, "=C15*D15", "Célula de Carga RBC #2 (Asa Direita)"),
            ("Trem de Nariz (NLG)", 568.0, "=B16-$C$8", 45.0, "=C16*D16", "Célula de Carga RBC #3 (Macaco de Nariz)"),
            ("Acréscimo de Peso: Nova Pintura Poliuretano", 42.0, 42.0, 140.0, "=C17*D17", "Camada de tinta em fuselagem e empenagem"),
            ("Acréscimo: Novo Radar Meteorológico de Nariz", 18.0, 18.0, 25.0, "=C18*D18", "Instalação no radome dianteiro"),
            ("Combustível Inutilizável Residual (Dedução)", -24.0, -24.0, 95.0, "=C19*D19", "Drenagem obrigatória para pesagem em hangar"),
        ]

        for idx, (bp_nome, bp_bruto, bp_liq_form, bp_braco, bp_mom_form, bp_ref) in enumerate(baron_points, start=14):
            ws3.row_dimensions[idx].height = 20
            ws3.cell(row=idx, column=1, value=bp_nome).font = font_data_bold; ws3.cell(row=idx, column=1).border = border_cell
            
            # Leitura Bruta
            c_bruto = ws3.cell(row=idx, column=2, value=bp_bruto)
            c_bruto.font = font_data; c_bruto.border = border_cell; c_bruto.alignment = align_right; c_bruto.number_format = FMT_DEC1

            # Peso Líquido (Col C) - USA REFERÊNCIA ABSOLUTA $C$8 (Tara dos macacos)
            c_liq = ws3.cell(row=idx, column=3)
            c_liq.border = border_cell; c_liq.alignment = align_right; c_liq.number_format = FMT_DEC1
            if idx in [17, 18, 19]:
                c_liq.value = bp_bruto
                c_liq.font = font_data
            else:
                if is_resolvido:
                    c_liq.value = f"=B{idx}-$C$8"
                    c_liq.font = font_formula_solved; c_liq.fill = fill_solved
                else:
                    c_liq.value = None
                    c_liq.fill = fill_student_prompt; c_liq.border = border_prompt

            # Braço
            c_b = ws3.cell(row=idx, column=4, value=bp_braco)
            c_b.font = font_data; c_b.border = border_cell; c_b.alignment = align_right; c_b.number_format = FMT_DEC1

            # Momento
            c_m = ws3.cell(row=idx, column=5)
            c_m.border = border_cell; c_m.alignment = align_right; c_m.number_format = FMT_DEC1
            if is_resolvido:
                c_m.value = bp_mom_form
                c_m.font = font_formula_solved; c_m.fill = fill_solved
            else:
                c_m.value = None
                c_m.fill = fill_student_prompt; c_m.border = border_prompt

            ws3.cell(row=idx, column=6, value=f"=B{idx}-$C$8 | =C{idx}*D{idx}" if idx <= 16 else f"=C{idx}*D{idx}").font = font_formula; ws3.cell(row=idx, column=6).fill = fill_formula_bg; ws3.cell(row=idx, column=6).border = border_cell; ws3.cell(row=idx, column=6).alignment = align_left
            ws3.cell(row=idx, column=7, value=bp_ref).font = font_note; ws3.cell(row=idx, column=7).border = border_cell; ws3.cell(row=idx, column=7).alignment = align_left

        # Row 20: Totals Row for Baron
        ws3.row_dimensions[20].height = 24
        ws3.merge_cells("A20:B20")
        ws3["A20"] = "PESO BÁSICO VAZIO (BEW) & MOMENTO VAZIO TOTAL DO BIMOTOR"
        ws3["A20"].font = font_section; ws3["A20"].fill = fill_total; ws3["A20"].border = border_total

        # Tot Peso
        c_tot_bp = ws3.cell(row=20, column=3)
        c_tot_bp.border = border_total; c_tot_bp.fill = fill_total; c_tot_bp.alignment = align_right; c_tot_bp.number_format = FMT_DEC1
        if is_resolvido:
            c_tot_bp.value = "=SUM(C14:C19)"
            c_tot_bp.font = font_formula_solved
        else:
            c_tot_bp.value = None
            c_tot_bp.fill = fill_student_prompt; c_tot_bp.border = border_prompt

        ws3.cell(row=20, column=4, value="—").font = font_note; ws3.cell(row=20, column=4).fill = fill_total; ws3.cell(row=20, column=4).border = border_total; ws3.cell(row=20, column=4).alignment = align_center

        # Tot Momento
        c_tot_bm = ws3.cell(row=20, column=5)
        c_tot_bm.border = border_total; c_tot_bm.fill = fill_total; c_tot_bm.alignment = align_right; c_tot_bm.number_format = FMT_DEC1
        if is_resolvido:
            c_tot_bm.value = "=SUM(E14:E19)"
            c_tot_bm.font = font_formula_solved
        else:
            c_tot_bm.value = None
            c_tot_bm.fill = fill_student_prompt; c_tot_bm.border = border_prompt

        ws3.cell(row=20, column=6, value="=SOMA(C14:C19) e =SOMA(E14:E19)").font = font_formula; ws3.cell(row=20, column=6).fill = fill_total; ws3.cell(row=20, column=6).border = border_total; ws3.cell(row=20, column=6).alignment = align_left
        ws3.cell(row=20, column=7, value="Novo BEW Homologado").font = font_note; ws3.cell(row=20, column=7).fill = fill_total; ws3.cell(row=20, column=7).border = border_total; ws3.cell(row=20, column=7).alignment = align_center

        # Maintenance Dashboard for Baron (Rows 22-29)
        ws3["A22"] = "LAUDO TÉCNICO DE APROVAÇÃO DA ORDEM DE SERVIÇO (OS DE REVISÃO GERAL)"
        ws3["A22"].font = font_section

        headers_diag_baron_m = [
            "Questão Avaliativa da Ordem de Serviço",
            "Fórmula a ser Construída pelo Aluno",
            "Resultado Calculado",
            "Unidade",
            "Parâmetro Limite do AMM/TCDS",
            "Parecer Técnico de Liberação",
            "Conceito de Informática Aplicado"
        ]
        style_header_row(ws3, 23, headers_diag_baron_m, fill=fill_header_accent, font=font_header_accent, height=26)

        diag_baron_m_items = [
            ("1. Centro de Gravidade Vazio Final (Novo EWCG)", "=E20/C20", "=E20/C20", "pol", "84,0 pol a 88,5 pol", "=IF(C24<$C$6, \"REPROVADO: EWCG MUITO DIANTEIRO\", IF(C24>$C$7, \"CRÍTICO: EWCG TRASEIRO FORA DO LIMITE!\", \"APROVADO: EWCG CONFORME TCDS\"))", "Fórmula Fundamental do EWCG"),
            ("2. Nova Carga Útil Disponível (Useful Load)", "=$C$5-C20", "=$C$5-C20", "lb", "Capacidade para pilotos, pax e fuel", "=IF(C25>=1800, \"CAPACIDADE EXCELENTE\", \"CARGA ÚTIL REGULAR\")", "Referência Absoluta ($C$5)"),
            ("3. Peso Básico Vazio Convertido para o SI", "=C20*$C$9", "=C20*$C$9", "kg", "Registro obrigatório no diário de bordo", "Conformidade ICAO Métrico", "Referência Absoluta ($C$9)"),
            ("4. Posição do EWCG Convertida para o SI", "=C24*$C$10", "=C24*$C$10", "m", "Envelope Métrico: 2,1336 m a 2,2479 m", "Conformidade ICAO Métrico", "Referência Absoluta ($C$10)"),
            ("5. Utilização Estrutural do MTOW pelo Peso Vazio", "=C20/$C$5", "=C20/$C$5", "%", "Máximo 65,0% do MTOW para bimotor", "=IF(C28<=0.65, \"ESTRUTURA DENTRO DO PADRÃO\", \"ALERTA: AERONAVE MUITO PESADA\")", "Referência Absoluta ($C$5)"),
            ("6. Parecer Final do Responsável Técnico (RTS)", "Decisão Integrada", "LIBERADO RTS", "Decisão", "Aprovado em pesagem e tolerância", "AERONAVE RETORNADA AO SERVIÇO", "Aeronavegabilidade Continuada"),
        ]

        for idx, (q_nome, q_form_txt, q_formula, q_unid, q_lim, q_diag, q_conc) in enumerate(diag_baron_m_items, start=24):
            ws3.row_dimensions[idx].height = 24
            ws3.cell(row=idx, column=1, value=q_nome).font = font_data_bold; ws3.cell(row=idx, column=1).border = border_cell
            ws3.cell(row=idx, column=2, value=q_form_txt).font = font_formula; ws3.cell(row=idx, column=2).fill = fill_formula_bg; ws3.cell(row=idx, column=2).border = border_cell; ws3.cell(row=idx, column=2).alignment = align_left

            # Result cell
            c_r = ws3.cell(row=idx, column=3)
            c_r.border = border_cell; c_r.alignment = align_right
            if idx in [24, 25, 26]:
                c_r.number_format = FMT_DEC2 if idx != 25 else FMT_DEC1
            elif idx == 27:
                c_r.number_format = FMT_DEC4
            elif idx == 28:
                c_r.number_format = FMT_PERCENT

            if is_resolvido:
                if idx == 29:
                    c_r.value = "APROVADO RTS"
                    c_r.font = font_alert_safe; c_r.fill = fill_safe_badge; c_r.alignment = align_center
                else:
                    c_r.value = q_formula
                    c_r.font = font_formula_solved; c_r.fill = fill_solved
            else:
                c_r.value = None
                c_r.fill = fill_student_prompt; c_r.border = border_prompt

            ws3.cell(row=idx, column=4, value=q_unid).font = font_note; ws3.cell(row=idx, column=4).border = border_cell; ws3.cell(row=idx, column=4).alignment = align_center
            ws3.cell(row=idx, column=5, value=q_lim).font = font_data; ws3.cell(row=idx, column=5).border = border_cell; ws3.cell(row=idx, column=5).alignment = align_left

            # Status Badge
            c_diag = ws3.cell(row=idx, column=6)
            c_diag.border = border_cell; c_diag.alignment = align_center
            if is_resolvido:
                if str(q_diag).startswith("="):
                    c_diag.value = q_diag
                else:
                    c_diag.value = q_diag
                c_diag.font = font_alert_safe; c_diag.fill = fill_safe_badge
            else:
                c_diag.value = "Aguardando cálculo..."
                c_diag.font = font_note; c_diag.fill = fill_zebra

            ws3.cell(row=idx, column=7, value=q_conc).font = font_note; ws3.cell(row=idx, column=7).border = border_cell; ws3.cell(row=idx, column=7).alignment = align_left

        # Instructions Card
        ws3.merge_cells("A31:G35")
        card_text_3 = (
            "ROTEIRO TÉCNICO DE EXECUÇÃO DO EXERCÍCIO (OFICINA DE MANUTENÇÃO AERONÁUTICA):\n"
            "• Tarefa 1 (Desconto com $): Na coluna C (linhas 14 a 16), desconte a tara calibrada dos macacos digitando =B14-$C$8 e arraste. As células adicionais de pintura e radar já são pesos líquidos.\n"
            "• Tarefa 2 (Momentos): Na coluna E (linhas 14 a 19), calcule o Momento multiplicando Peso por Braço (=C14*D14).\n"
            "• Tarefa 3 (Novo BEW e EWCG): Na linha 20, obtenha o Peso Vazio Total (=SOMA(C14:C19) = 3.557,0 lb) e o Momento Vazio Total (=SOMA(E14:E19) = 310.865,0 lb.pol). Na célula C24, calcule o novo EWCG (=E20/C20 = 87,39 pol).\n"
            "• Tarefa 4 (Carga Útil com $): Na linha 25, calcule a nova Carga Útil travando o MTOW: =$C$5-C20 (resultando em 1.843,0 lb disponíveis para combustível e passageiros).\n"
            "• Tarefa 5 (Conversão para o SI com $): Converta o novo peso para kg em C26 (=C20*$C$9 = 1.613,43 kg) e o EWCG para metros em C27 (=C24*$C$10 = 2,2198 m).\n"
            "• Parecer Técnico: O EWCG (87,39 pol) está DENTRO da faixa permitida pelo TCDS (84,0 a 88,5 pol). A aeronave está formalmente APROVADA PARA RETORNO AO SERVIÇO (RTS)!"
        )
        ws3["A31"] = card_text_3
        ws3["A31"].font = font_card_body; ws3["A31"].fill = fill_card; ws3["A31"].border = border_cell; ws3["A31"].alignment = align_card

        autofit(ws3, 1, 7)

        # File saving
        filename = "Aula_07_Excel_Modelagem_Peso_Balanceamento_Resolvido.xlsx" if is_resolvido else "Aula_07_Excel_Modelagem_Peso_Balanceamento.xlsx"
        save_path = rf"c:\projetos\Material\Informática Aplicada a Aeronáutica\Exercicios\{filename}"
        wb.save(save_path)
        print(f"Salvo com sucesso (Manutenção): {save_path}")

if __name__ == "__main__":
    build_aula07_manutencao_workbooks()
