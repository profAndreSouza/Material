# ROTEIRO DE AULA EXPANDIDO — SEMANA 10
**Componente Curricular:** INF-117 — Informática Aplicada a Aeronáutica  
**Tema:** Semana de Tecnologia (Setec) — Leitura Orientada: Sistemas de Gestão MRO, ERP e Transformação Digital na Aviação  
**Ambiente:** Estudo Autônomo / Palestras da Setec Fatec Sorocaba  
**Articulação com o PPC:** EAA-009 (Informação Técnica) e EAM-007 (Gerenciamento da Manutenção)  

---

## 1. OBJETIVOS DE INFORMÁTICA
Ao final desta leitura orientada e da participação nos eventos da Setec, você será capaz de:
- Compreender a arquitetura computacional dos sistemas de informação corporativos da indústria aeronáutica (**MRO, ERP e EFB**).
- Entender como bancos de dados relacionais registram a vida útil de cada componente (*Life-Limited Parts - LLP*).
- Identificar o papel da interoperabilidade de dados (arquivos `.csv`, `.xml` e APIs) na exportação de relatórios para ferramentas analíticas de escritório (Excel / Power BI).

---

## 2. FUNDAMENTAÇÃO TEÓRICA COMPUTACIONAL

### 2.1 O Papel dos Sistemas Especializados na Manutenção

```
+------------------------------------------------------------------------------------+
|                         PIRÂMIDE DE SOFTWARES DA AVIAÇÃO                           |
+------------------------------------------------------------------------------------+
|                                                                                    |
|                     [ DASHBOARDS / BI & EXCEL ANALYTICS ]                          |
|                     - Tomada de decisão da diretoria e engenharia                  |
|                     - Curva S, custos de manutenção, disponibilidade               |
|                                                                                    |
|               [ SISTEMAS MRO / ERP (TRAX, AMOS, TOTVS, SAP) ]                      |
|               - Banco de dados relacional centralizado                             |
|               - Histórico de aeronaves, logs de voo, rastreabilidade de peças      |
|                                                                                    |
|         [ EFB - ELECTRONIC FLIGHT BAG & DISPOSITIVOS MÓVEIS DE CABINE ]            |
|         - Tablets de pilotos e mecânicos no pátio para assinatura digital          |
+------------------------------------------------------------------------------------+
```

### 2.2 Por que o Excel continua indispensável mesmo com sistemas ERP milionários?
Nenhum sistema MRO/ERP fornece 100% dos relatórios customizados que a engenharia precisa para análises rápidas, estudos de confiabilidade e planejamento de curto prazo.
- **Rotina do Engenheiro/Técnico de Manutenção:** Exportar extratos do sistema MRO em formato tabular plano (`.csv` ou `.txt`), abrir no Excel e aplicar fórmulas de busca, formatação condicional, tabelas dinâmicas e gráficos de tendência.

---

## 3. ATIVIDADE DE SÍNTESE E PESQUISA COMPUTACIONAL

Elabore um texto técnico estruturado no MS Word (aplicando os Estilos de Título e Parágrafo aprendidos na Semana 2) abordando:
1. **O formato `.csv`:** Por que o formato de texto delimitado por vírgulas é o padrão universal para exportação de dados entre diferentes softwares?
2. **Rastreabilidade Digital:** Como o registro computacional de peças substitui os antigos livros físicos de manutenção (*Logbooks*) com maior segurança contra adulterações?
3. **Colaboração em Nuvem:** Quais os benefícios do compartilhamento de dados em tempo real no Microsoft 365 para equipes de manutenção distribuídas em diferentes bases e aeroportos?
