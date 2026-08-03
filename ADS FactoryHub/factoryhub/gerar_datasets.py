import os
import pandas as pd
import numpy as np
import json

os.makedirs('data', exist_ok=True)
np.random.seed(42)

# ==============================================================================
# 1. Dataset 1 – Manufacturing Quality Inspection (data/manufacturing_quality.csv)
# Utilizado nas Aulas 1 a 4
# ==============================================================================
n1 = 500
part_ids = [f"PART-{1000 + i}" for i in range(n1)]
machines1 = np.random.choice(['Prensa_01', 'Torno_CNC_02', 'Fresadora_03', 'Injetora_04'], size=n1)
shifts1 = np.random.choice(['Manhã', 'Tarde', 'Noite'], size=n1, p=[0.4, 0.35, 0.25])
operators1 = np.random.choice(['Carlos Silva', 'Ana Souza', 'Roberto Lima', 'Fernanda Alves'], size=n1)

temp1 = np.random.normal(loc=72.5, scale=3.5, size=n1)
press1 = np.random.normal(loc=5.5, scale=0.4, size=n1)
press1[np.random.choice(n1, size=20, replace=False)] = np.nan # Inserindo ausentes para aula 2
hum1 = np.random.normal(loc=55.0, scale=6.0, size=n1)
prod_time1 = np.round(np.random.normal(loc=45.0, scale=8.0, size=n1), 1)

defect1 = []
defect_type1 = []
for i in range(n1):
    if np.abs(temp1[i] - 72.5) > 7.0 or prod_time1[i] > 60:
        defect1.append('Sim')
        defect_type1.append(np.random.choice(['Solda Fria', 'Risco Superficial', 'Desalinhamento'], p=[0.5, 0.3, 0.2]))
    else:
        if np.random.rand() < 0.08:
            defect1.append('Sim')
            defect_type1.append(np.random.choice(['Porosidade', 'Risco Superficial'], p=[0.6, 0.4]))
        else:
            defect1.append('Não')
            defect_type1.append('Nenhum')

df1 = pd.DataFrame({
    'Part_ID': part_ids,
    'Machine_ID': machines1,
    'Shift': shifts1,
    'Operator': operators1,
    'Temperature': np.round(temp1, 2),
    'Pressure': np.round(press1, 2),
    'Humidity': np.round(hum1, 1),
    'Production_Time': prod_time1,
    'Defect': defect1,
    'Defect_Type': defect_type1
})
df1.to_csv('data/manufacturing_quality.csv', index=False)
print("-> data/manufacturing_quality.csv criado (500 linhas)")

# ==============================================================================
# 2. Dataset 2 – Predictive Maintenance (data/predictive_maintenance.csv)
# Utilizado nas Aulas 5 a 8
# ==============================================================================
n2 = 600
datas2 = pd.date_range(start='2026-08-01 00:00:00', periods=n2, freq='30min')
machines2 = np.random.choice(['Caldeira_01', 'Turbina_02', 'Compressor_03', 'Motor_04'], size=n2)
temp2 = np.random.normal(loc=85.0, scale=5.0, size=n2)
vib2 = np.random.normal(loc=3.2, scale=0.7, size=n2)
torque2 = np.random.normal(loc=40.0, scale=4.5, size=n2)
rpm2 = np.random.normal(loc=1800, scale=150, size=n2).astype(int)
tool_wear2 = np.linspace(0, 240, n2) + np.random.normal(0, 5, n2)
tool_wear2 = np.clip(tool_wear2, 0, 250)

failure2 = np.where((temp2 > 96) | (vib2 > 5.0) | (tool_wear2 > 210), 'Sim', 'Não')

df2 = pd.DataFrame({
    'Machine_ID': machines2,
    'Timestamp': datas2,
    'Temperature': np.round(temp2, 2),
    'Vibration': np.round(vib2, 2),
    'Torque': np.round(torque2, 2),
    'RPM': rpm2,
    'Tool_Wear': np.round(tool_wear2, 1),
    'Machine_Failure': failure2
})
df2.to_csv('data/predictive_maintenance.csv', index=False)
print("-> data/predictive_maintenance.csv criado (600 linhas)")

# ==============================================================================
# 3. Dataset 3 – Smart Factory Analytics (data/smart_factory_analytics.csv)
# Utilizado nas Aulas 9 e 10
# ==============================================================================
n3 = 400
lines3 = np.random.choice(['Linha_Alpha', 'Linha_Beta', 'Linha_Gamma', 'Linha_Delta'], size=n3)
products3 = np.random.choice(['Sensor_A1', 'Painel_B2', 'Conector_C3', 'Módulo_D4'], size=n3)
energy3 = np.round(np.random.normal(loc=350.0, scale=45.0, size=n3), 2)
efficiency3 = np.round(np.random.uniform(70.0, 99.5, size=n3), 1)
downtime3 = np.round(np.random.exponential(scale=15.0, size=n3), 1)
maint_cost3 = np.round(downtime3 * 45.0 + np.random.normal(200, 30, size=n3), 2)
prod_count3 = np.random.randint(500, 2500, size=n3)
defect_rate3 = np.round(np.random.uniform(0.5, 8.5, size=n3), 2)
revenue3 = np.round(prod_count3 * np.random.uniform(15.0, 45.0, size=n3) - maint_cost3, 2)

df3 = pd.DataFrame({
    'Production_Line': lines3,
    'Product': products3,
    'Energy_Consumption': energy3,
    'Machine_Efficiency': efficiency3,
    'Downtime': downtime3,
    'Maintenance_Cost': maint_cost3,
    'Production_Count': prod_count3,
    'Defect_Rate': defect_rate3,
    'Revenue': revenue3
})
df3.to_csv('data/smart_factory_analytics.csv', index=False)
print("-> data/smart_factory_analytics.csv criado (400 linhas)")

# ==============================================================================
# 4. Dataset 4 – Projeto Capstone Final (data/projeto_final_capstone.csv)
# Utilizado na Aula 11
# ==============================================================================
n4 = 550
batches4 = [f"BATCH-2026-{100 + i}" for i in range(n4)]
locations4 = np.random.choice(['Planta_SP', 'Planta_MG', 'Planta_PR'], size=n4)
timestamps4 = pd.date_range(start='2026-06-01', periods=n4, freq='4h')
stemp4 = np.random.normal(loc=78.0, scale=4.0, size=n4)
spress4 = np.random.normal(loc=6.0, scale=0.5, size=n4)
spress4[np.random.choice(n4, size=15, replace=False)] = np.nan
vib_rms4 = np.random.normal(loc=2.9, scale=0.5, size=n4)
power_kw4 = np.random.normal(loc=120.0, scale=15.0, size=n4)
q_score4 = np.round(np.random.uniform(80.0, 100.0, size=n4), 1)
scrap4 = np.random.poisson(lam=3, size=n4)
cost4 = np.round(power_kw4 * 1.8 + scrap4 * 25.0 + np.random.normal(500, 50, size=n4), 2)

status4 = np.where((stemp4 > 88) | (vib_rms4 > 4.2), 'Alerta Crítico', 'Operação Normal')

df4 = pd.DataFrame({
    'Batch_ID': batches4,
    'Plant_Location': locations4,
    'Timestamp': timestamps4,
    'Sensor_Temp': np.round(stemp4, 2),
    'Sensor_Pressure': np.round(spress4, 2),
    'Vibration_RMS': np.round(vib_rms4, 2),
    'Power_KW': np.round(power_kw4, 2),
    'Quality_Score': q_score4,
    'Scrap_Units': scrap4,
    'Operational_Cost_USD': cost4,
    'Status': status4
})
df4.to_csv('data/projeto_final_capstone.csv', index=False)
print("-> data/projeto_final_capstone.csv criado (550 linhas)")

# ==============================================================================
# 5. Dataset 5 – Telemetry Sensors (data/telemetry.csv)
# Utilizado na Telemetria da Fábrica e Aulas de Séries Temporais / EDA
# ==============================================================================
n5 = 1000
ids5 = np.arange(1, n5 + 1)
timestamps5 = pd.date_range(start='2026-08-01 00:00:00', periods=n5, freq='1min')
plants5 = ['SmartN1'] * n5
stations5 = np.random.choice(['Prensa_01', 'Torno_CNC_02', 'Fresadora_03', 'Injetora_04', 'Linha_Montagem'], size=n5)
piece_ids5 = [f"PART-{1000 + (i % 250)}" for i in range(n5)]
events5 = np.random.choice(['sensor.read', 'press.cycle', 'piece.detected', 'inspection.done', 'temp.warning'], size=n5, p=[0.5, 0.2, 0.15, 0.1, 0.05])
statuses5 = np.random.choice(['OK', 'WARNING', 'ERROR'], size=n5, p=[0.85, 0.10, 0.05])

press5 = np.random.normal(loc=5.8, scale=0.4, size=n5)
nan_indices = np.random.choice(n5, size=30, replace=False)
press5[nan_indices] = np.nan

outlier_indices = np.random.choice([i for i in range(n5) if i not in nan_indices], size=15, replace=False)
press5[outlier_indices] = np.random.uniform(9.0, 12.0, size=15)

temp5 = np.random.normal(loc=72.5, scale=3.5, size=n5)

payloads5 = []
for p, t in zip(press5, temp5):
    p_val = None if np.isnan(p) else round(float(p), 2)
    t_val = round(float(t), 2)
    payloads5.append(json.dumps({"pressao_bar": p_val, "temperatura_c": t_val}))

df5 = pd.DataFrame({
    'id': ids5,
    'timestamp': timestamps5,
    'plant': plants5,
    'station': stations5,
    'piece_id': piece_ids5,
    'event': events5,
    'status': statuses5,
    'pressao_bar': np.round(press5, 2),
    'temperature': np.round(temp5, 2),
    'payload': payloads5
})
df5.to_csv('data/telemetry.csv', index=False)
print("-> data/telemetry.csv criado (1000 linhas)")
print("=== Todos os 5 datasets industriais criados com sucesso! ===")
