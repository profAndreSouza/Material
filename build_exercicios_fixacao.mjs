import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = path.resolve("outputs/exercicios_fixacao_aeronautica");
const workbook = Workbook.create();
const navy = "#17365D";
const blue = "#D9EAF7";
const lightBlue = "#EAF2F8";
const amber = "#FFF2CC";
const green = "#E2F0D9";
const gray = "#E7E6E6";
const red = "#F4CCCC";
const font = "Arial";

function baseSheet(name, title, context, objective, lastCol = "G") {
  const s = workbook.worksheets.add(name);
  s.showGridLines = false;
  s.tabColor = navy;
  s.getRange(`A2:${lastCol}2`).merge();
  s.getRange("A2").values = [[title]];
  s.getRange("A2").format = { font: { name: font, size: 15, bold: true, color: navy }, verticalAlignment: "center" };
  s.getRange(`A3:${lastCol}3`).merge();
  s.getRange("A3").values = [[context]];
  s.getRange("A3").format = { font: { name: font, size: 10, italic: true, color: "#444444" }, wrapText: true, verticalAlignment: "center" };
  s.getRange(`A5:${lastCol}5`).merge();
  s.getRange("A5").values = [[objective]];
  s.getRange("A5").format = { fill: lightBlue, font: { name: font, size: 10, bold: true, color: navy }, wrapText: true, verticalAlignment: "center", borders: { preset: "outside", style: "thin", color: "#9EADBA" } };
  s.getRange(`A1:${lastCol}40`).format.font.name = font;
  s.getRange(`A1:${lastCol}40`).format.font.size = 10;
  s.getRange("A2").format.font.size = 15;
  s.getRange("A3").format.rowHeight = 34;
  s.getRange("A5").format.rowHeight = 42;
  return s;
}

function header(s, range, values) {
  s.getRange(range).values = [values];
  s.getRange(range).format = {
    fill: navy,
    font: { name: font, size: 10, bold: true, color: "#FFFFFF" },
    horizontalAlignment: "center",
    verticalAlignment: "center",
    wrapText: true,
    borders: { preset: "all", style: "thin", color: "#FFFFFF" },
  };
  s.getRange(range).format.rowHeight = 34;
}

function body(s, range) {
  s.getRange(range).format = {
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: "#D9E1F2" },
  };
}

function input(s, range) {
  s.getRange(range).format.fill = amber;
  s.getRange(range).format.borders = { preset: "all", style: "thin", color: "#C9B458" };
}

// 1 — Operadores aritméticos
{
  const s = baseSheet("Ex1_Operadores", "Exercício 1 — Operadores aritméticos", "Contexto: registro de consumo, autonomia e custos de uma aeronave de instrução.", "Complete as células amarelas usando apenas os operadores +, -, * e /. Não digite o resultado manualmente: escreva uma fórmula.", "G");
  header(s, "A7:G7", ["Item", "Valor 1", "Valor 2", "Unidade", "Operação solicitada", "Fórmula / resposta", "Questão"]);
  s.getRange("A8:G13").values = [
    ["Combustível disponível", 180, 42, "L", "Subtrair o consumo do total abastecido", null, "Quanto combustível restou?"],
    ["Tempo total de voo", 1.8, 0.7, "h", "Somar os dois trechos", null, "Qual foi o tempo total?"],
    ["Consumo estimado", 38, 2.5, "L", "Multiplicar consumo horário por duração", null, "Quantos litros serão consumidos?"],
    ["Custo por litro", 7.45, 96, "R$", "Multiplicar preço por quantidade", null, "Qual é o custo do abastecimento?"],
    ["Velocidade média", 420, 2.8, "km/h", "Dividir distância pelo tempo", null, "Qual foi a velocidade média?"],
    ["Carga disponível", 610, 4, "kg", "Dividir igualmente entre quatro posições", null, "Quantos kg por posição?"],
  ];
  body(s, "A8:G13"); input(s, "F8:F13");
  s.getRange("B8:C13").format.numberFormat = "0.00";
  s.getRange("A15:G15").merge(); s.getRange("A15").values = [["Desafio: na célula F15, calcule o custo por hora do voo usando o custo total do abastecimento e o tempo total calculado acima."]]; input(s, "A15:G15");
  s.getRange("A15:G15").format.wrapText = true; s.getRange("A15:G15").format.rowHeight = 34;
  s.getRange("A:A").format.columnWidth = 22; s.getRange("B:C").format.columnWidth = 13; s.getRange("D:D").format.columnWidth = 12; s.getRange("E:E").format.columnWidth = 34; s.getRange("F:F").format.columnWidth = 20; s.getRange("G:G").format.columnWidth = 28;
  s.freezePanes.freezeRows(7);
}

// 2 — SOMA
{
  const s = baseSheet("Ex2_SOMA", "Exercício 2 — Função SOMA", "Contexto: consolidação das horas de voo realizadas por uma frota de treinamento durante a semana.", "Use a função SOMA para preencher os totais amarelos. Evite somar célula por célula quando um intervalo puder ser usado.", "H");
  header(s, "A7:H7", ["Prefixo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Total semanal", "Observação"]);
  s.getRange("A8:H13").values = [
    ["PR-IAA", 2.4, 3.1, 0, 2.8, 3.4, null, "Aeronave de instrução básica"],
    ["PR-IAB", 1.8, 2.2, 2.6, 0, 3.0, null, "Treinamento por instrumentos"],
    ["PT-IAC", 4.0, 3.5, 3.2, 4.1, 2.9, null, "Treinamento multimotor"],
    ["PR-IAD", 0, 1.9, 2.1, 2.5, 2.0, null, "Inspeção concluída na segunda"],
    ["PS-IAE", 3.3, 2.7, 3.5, 3.0, 3.6, null, "Treinamento avançado"],
    ["Total diário", null, null, null, null, null, null, "Use SOMA em cada coluna"],
  ];
  body(s, "A8:H13"); input(s, "G8:G12"); input(s, "B13:G13");
  s.getRange("B8:G13").format.numberFormat = "0.0";
  s.getRange("A13:H13").format.font.bold = true;
  s.getRange("A15:H17").values = [["Pergunta", "Resposta", null, null, null, null, null, null],["Qual foi o total de horas voadas por toda a frota?", null, null, null, null, null, null, null],["Qual dia concentrou mais horas de voo?", null, null, null, null, null, null, null]];
  s.getRange("A15:D15").merge(); s.getRange("E15:H15").merge();
  s.getRange("A16:D16").merge(); s.getRange("E16:H16").merge();
  s.getRange("A17:D17").merge(); s.getRange("E17:H17").merge();
  s.getRange("A15:H15").format = { fill: blue, font: { bold: true, color: navy }, borders: { preset: "outside", style: "thin", color: "#9EADBA" } }; input(s, "B16:H17");
  s.getRange("A:A").format.columnWidth = 18; s.getRange("B:G").format.columnWidth = 13; s.getRange("H:H").format.columnWidth = 31;
  s.freezePanes.freezeRows(7);
}

// 3 — MÉDIA
{
  const s = baseSheet("Ex3_MEDIA", "Exercício 3 — Função MÉDIA", "Contexto: análise do desempenho de tempos de atendimento em ordens de serviço no hangar.", "Calcule a média de horas de cada equipe e a média de cada tipo de serviço. Use a função MÉDIA nas células amarelas.", "H");
  header(s, "A7:H7", ["Equipe", "Troca de pneu", "Inspeção visual", "Teste de rádio", "Troca de óleo", "Média da equipe", "Meta (h)", "Situação observada"]);
  s.getRange("A8:H13").values = [
    ["Alfa", 2.2, 1.1, 1.8, 2.5, null, 2.0, "Compare a média com a meta"],
    ["Bravo", 2.5, 0.9, 2.1, 2.3, null, 2.0, "Compare a média com a meta"],
    ["Charlie", 1.9, 1.0, 1.7, 2.1, null, 2.0, "Compare a média com a meta"],
    ["Delta", 2.8, 1.3, 2.4, 2.6, null, 2.0, "Compare a média com a meta"],
    ["Eco", 2.1, 1.2, 1.9, 2.2, null, 2.0, "Compare a média com a meta"],
    ["Média do serviço", null, null, null, null, null, null, "Calcule as médias verticais"],
  ];
  body(s, "A8:H13"); input(s, "F8:F12"); input(s, "B13:F13");
  s.getRange("B8:G13").format.numberFormat = "0.00"; s.getRange("A13:H13").format.font.bold = true;
  s.getRange("A15:H16").values = [["Análise", "Resposta", null, null, null, null, null, null],["Qual equipe apresentou o menor tempo médio?", null, null, null, null, null, null, null]];
  s.getRange("A15:D15").merge(); s.getRange("E15:H15").merge();
  s.getRange("A16:D16").merge(); s.getRange("E16:H16").merge();
  s.getRange("A15:H15").format = { fill: blue, font: { bold: true, color: navy } }; input(s, "B16:H16");
  s.getRange("A:A").format.columnWidth = 19; s.getRange("B:E").format.columnWidth = 18; s.getRange("F:G").format.columnWidth = 16; s.getRange("H:H").format.columnWidth = 27;
  s.freezePanes.freezeRows(7);
}

// 4 — MEDIANA
{
  const s = baseSheet("Ex4_MEDIANA", "Exercício 4 — Função MEDIANA", "Contexto: avaliação de tempos de espera de aeronaves por disponibilidade de peças.", "Use MEDIANA para encontrar o valor central. Depois compare média e mediana e identifique o efeito de valores extremos.", "G");
  header(s, "A7:G7", ["Ordem de serviço", "Componente", "Dias de espera", "Fornecedor", "Prioridade", "Cálculo solicitado", "Resposta"]);
  s.getRange("A8:G16").values = [
    ["OS-401", "Filtro hidráulico", 3, "AeroParts", "Normal", null, null],
    ["OS-402", "Pneu principal", 2, "FlySupply", "Alta", null, null],
    ["OS-403", "Sensor de temperatura", 5, "AeroParts", "Normal", null, null],
    ["OS-404", "Bomba de combustível", 4, "JetLog", "Alta", null, null],
    ["OS-405", "Válvula pneumática", 18, "Importação", "Crítica", null, null],
    ["OS-406", "Pastilha de freio", 2, "FlySupply", "Normal", null, null],
    ["OS-407", "Lâmpada de navegação", 1, "JetLog", "Baixa", null, null],
    ["OS-408", "Mangueira de óleo", 4, "AeroParts", "Normal", null, null],
    ["OS-409", "Alternador", 6, "Importação", "Alta", null, null],
  ];
  body(s, "A8:G16");
  s.getRange("F8:G10").values = [["Mediana dos dias", null],["Média dos dias", null],["Diferença: média - mediana", null]]; input(s, "G8:G10");
  s.getRange("F8:F10").format.fill = blue; s.getRange("F8:F10").format.font.bold = true;
  s.getRange("A18:G19").values = [["Pergunta de interpretação", "Resposta", null, null, null, null, null],["O prazo de 18 dias altera mais a média ou a mediana? Explique em uma frase.", null, null, null, null, null, null]];
  s.getRange("A18:C18").merge(); s.getRange("D18:G18").merge();
  s.getRange("A19:C19").merge(); s.getRange("D19:G19").merge();
  s.getRange("A18:G18").format = { fill: blue, font: { bold: true, color: navy } }; input(s, "B19:G19"); s.getRange("A19:G19").format.wrapText = true;
  s.getRange("A:A").format.columnWidth = 19; s.getRange("B:B").format.columnWidth = 26; s.getRange("C:C").format.columnWidth = 14; s.getRange("D:E").format.columnWidth = 16; s.getRange("F:F").format.columnWidth = 26; s.getRange("G:G").format.columnWidth = 20;
  s.freezePanes.freezeRows(7);
}

// 5 — SE simples
{
  const s = baseSheet("Ex5_SE_Simples", "Exercício 5 — Função SE simples", "Contexto: controle de vencimento da inspeção de 100 horas de aeronaves em operação.", "Calcule as horas restantes e use SE para retornar “LIBERADO” quando as horas voadas forem menores que 100; caso contrário, retorne “INSPEÇÃO OBRIGATÓRIA”.", "G");
  header(s, "A7:G7", ["Prefixo", "Modelo", "Horas desde inspeção", "Limite (h)", "Horas restantes", "Status com SE", "Observação"]);
  s.getRange("A8:G14").values = [
    ["PR-AAA", "Cessna 172", 98, 100, null, null, "Próxima do limite"],
    ["PT-BBB", "Seneca III", 45, 100, null, null, "Uso regular"],
    ["PR-CCC", "Baron G58", 102, 100, null, null, "Limite ultrapassado"],
    ["PP-DDD", "Caravan", 15, 100, null, null, "Baixa utilização"],
    ["PR-EEE", "Cirrus SR22", 88, 100, null, null, "Programar inspeção"],
    ["PS-FFF", "Robinson R44", 100, 100, null, null, "Exatamente no limite"],
    ["PR-GGG", "Piper Archer", 63, 100, null, null, "Uso regular"],
  ];
  body(s, "A8:G14"); input(s, "E8:F14");
  s.getRange("F8:F14").conditionalFormats.add("containsText", { text: "INSPEÇÃO", format: { fill: red, font: { bold: true, color: "#9C0006" } } });
  s.getRange("F8:F14").conditionalFormats.add("containsText", { text: "LIBERADO", format: { fill: green, font: { bold: true, color: "#006100" } } });
  s.getRange("A16:G17").values = [["Questão", "Resposta", null, null, null, null, null],["Quantas aeronaves exigem inspeção imediata?", null, null, null, null, null, null]];
  s.getRange("A16:C16").merge(); s.getRange("D16:G16").merge();
  s.getRange("A17:C17").merge(); s.getRange("D17:G17").merge();
  s.getRange("A16:G16").format = { fill: blue, font: { bold: true, color: navy } }; input(s, "B17:G17");
  s.getRange("A:A").format.columnWidth = 15; s.getRange("B:B").format.columnWidth = 20; s.getRange("C:F").format.columnWidth = 19; s.getRange("G:G").format.columnWidth = 25;
  s.freezePanes.freezeRows(7);
}

// 6 — Revisão integrada
{
  const s = baseSheet("Ex6_Revisao", "Exercício 6 — Revisão integrada", "Contexto: inspeção de pressão de pneus do trem principal antes da liberação para voo.", "Aplique operadores, SOMA, MÉDIA, MEDIANA e SE. Faixa aceitável: de 92 a 98 psi, inclusive.", "I");
  header(s, "A7:I7", ["Aeronave", "Pneu", "Medição 1", "Medição 2", "Medição 3", "Média", "Mediana", "Variação máx.-mín.", "Status com SE"]);
  s.getRange("A8:I15").values = [
    ["PR-A01", "Principal esquerdo", 94, 95, 94, null, null, null, null],
    ["PR-A01", "Principal direito", 96, 96, 97, null, null, null, null],
    ["PT-B02", "Principal esquerdo", 90, 91, 90, null, null, null, null],
    ["PT-B02", "Principal direito", 93, 94, 93, null, null, null, null],
    ["PS-C03", "Principal esquerdo", 99, 100, 99, null, null, null, null],
    ["PS-C03", "Principal direito", 95, 94, 95, null, null, null, null],
    ["PR-D04", "Principal esquerdo", 92, 92, 93, null, null, null, null],
    ["PR-D04", "Principal direito", 98, 97, 98, null, null, null, null],
  ];
  body(s, "A8:I15"); input(s, "F8:I15");
  s.getRange("C8:H15").format.numberFormat = "0.0";
  s.getRange("I8:I15").conditionalFormats.add("containsText", { text: "AJUSTAR", format: { fill: red, font: { bold: true, color: "#9C0006" } } });
  s.getRange("I8:I15").conditionalFormats.add("containsText", { text: "CONFORME", format: { fill: green, font: { bold: true, color: "#006100" } } });
  header(s, "A18:C18", ["Resumo solicitado", "Fórmula / resposta", "Orientação"]);
  s.getRange("A19:C23").values = [
    ["Soma de todas as médias", null, "Use SOMA"],
    ["Média geral das medições", null, "Use MÉDIA no intervalo de medições"],
    ["Mediana geral das medições", null, "Use MEDIANA no intervalo de medições"],
    ["Quantidade de pneus conformes", null, "Conte os resultados após preencher o status"],
    ["Maior diferença entre duas médias", null, "Use subtração com as médias que escolher"],
  ];
  body(s, "A19:C23"); input(s, "B19:B23");
  s.getRange("A25:I25").merge(); s.getRange("A25").values = [["Regra para o status: se a média estiver entre 92 e 98 psi, escreva “CONFORME”; caso contrário, “AJUSTAR PRESSÃO”. Você pode usar SE aninhado."]]; s.getRange("A25:I25").format = { fill: gray, font: { italic: true, color: navy }, wrapText: true, borders: { preset: "outside", style: "thin", color: "#9EADBA" } }; s.getRange("A25:I25").format.rowHeight = 34;
  s.getRange("A:A").format.columnWidth = 29; s.getRange("B:B").format.columnWidth = 24; s.getRange("C:C").format.columnWidth = 37; s.getRange("D:H").format.columnWidth = 15; s.getRange("I:I").format.columnWidth = 24;
  s.freezePanes.freezeRows(7);
}

workbook.recalculate();
await fs.mkdir(outputDir, { recursive: true });

for (const sheetName of ["Ex1_Operadores", "Ex2_SOMA", "Ex3_MEDIA", "Ex4_MEDIANA", "Ex5_SE_Simples", "Ex6_Revisao"]) {
  const preview = await workbook.render({ sheetName, autoCrop: "all", scale: 1, format: "png" });
  await fs.writeFile(path.join(outputDir, `${sheetName}.png`), new Uint8Array(await preview.arrayBuffer()));
}

const checks = [];
for (const sheetName of ["Ex1_Operadores", "Ex2_SOMA", "Ex3_MEDIA", "Ex4_MEDIANA", "Ex5_SE_Simples", "Ex6_Revisao"]) {
  const inspection = await workbook.inspect({ kind: "table", range: `${sheetName}!A1:I26`, include: "values,formulas", tableMaxRows: 26, tableMaxCols: 9, maxChars: 3500 });
  checks.push(inspection.ndjson);
}
const errors = await workbook.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!", options: { useRegex: true, maxResults: 300 }, summary: "final formula error scan" });
await fs.writeFile(path.join(outputDir, "verificacao.txt"), `${checks.join("\n")}\n${errors.ndjson}`, "utf8");

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(path.join(outputDir, "Exercicios_Fixacao_Informatica_Aplicada_Aeronautica.xlsx"));
console.log(path.join(outputDir, "Exercicios_Fixacao_Informatica_Aplicada_Aeronautica.xlsx"));
