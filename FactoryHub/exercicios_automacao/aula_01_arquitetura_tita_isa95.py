"""
Aula 01 - Automação Industrial: Pirâmide ISA-95 e Arquitetura TI/TA
===================================================================
Exercício Prático para Alunos:
1. Importe a biblioteca 'json'.
2. Monte o dicionário 'payload_evento' com a estrutura de mensagem Nível 1 ISA-95:
   - plant: "SmartN1"
   - station: "Entrada"
   - level_isa95: "Nivel 1 - Controle"
   - sensor_id: "SENS_IND_01"
   - signal_24v: True
   - event: "piece.detected"
3. Imprima o dicionário formatado como JSON.
"""
import json

# TODO: Monte o dicionário payload_evento conforme as instruções acima
payload_evento = {
    # Insira as chaves e valores aqui
}

print("=== Arquitetura TI/TA - Mapeamento Nível 1 ISA-95 ===")
# TODO: Imprima o payload serializado em JSON com indentação de 2 espaços (json.dumps)
