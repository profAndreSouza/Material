# Monitoramento e Visualização em Tempo Real com Power BI

## Enunciado
Após criar modelos de detecção e simular pipelines de streaming, a empresa precisa acompanhar visualmente o status da rede.  
O desafio é desenvolver um dashboard interativo que mostre métricas e alertas em tempo real.


## Contexto
Dashboards de segurança auxiliam analistas a identificar ataques, picos de tráfego e falhas rapidamente.  
Ferramentas como **Power BI** e **Streamlit** são ideais para visualizar métricas e gerar alertas automáticos.


## Teoria

### Principais Métricas de Rede
- Volume de tráfego (bytes/s)
- Latência média (ms)
- Taxa de erros (%)
- Quantidade de eventos anômalos

### Boas Práticas de Dashboard
- Clareza e hierarquia visual
- Atualização periódica (refresh)
- Alertas automáticos (condicionais)
- Indicadores (KPIs) de performance

### Ferramentas
| Ferramenta | Aplicação | Nível de Código |
|-------------|------------|----------------|
| Power BI | Visualização de dados | Baixo |
| Streamlit | Dashboards em Python | Médio |
| Grafana | Monitoramento de sistemas | Avançado |


## Atividade Prática - Power BI

### Objetivo
Criar um dashboard simples e funcional para visualizar as métricas de rede e alertas de anomalias.

### Dataset sugerido
- Dados processados na Aula 09 (KDDCup99) ou Aula 10 (UNSW-NB15).


### Passos

#### 1. Exportar os resultados do modelo
No Colab:
```python
df['anomalia_iso'] = (pred_iso == -1).astype(int)
df.to_csv("resultado_anomalias.csv", index=False)
````

#### 2. Importar dados no Power BI

* Carregar o arquivo `resultado_anomalias.csv`.
* Criar os seguintes gráficos:

  * Linha: tráfego ao longo do tempo
  * Barras: tipos de ataque ou categorias
  * KPI: porcentagem de registros anômalos

#### 3. Adicionar alertas visuais

* Utilize formatação condicional (ex: fundo vermelho para tráfego alto).
* Adicione segmentações (por IP, data, tipo de ataque).

#### 4. Atualização automática

* Configure o Power BI Service para atualizar a cada 1 minuto (simulação de tempo real).


## Discussão

* Quais métricas devem ser priorizadas em um painel de cibersegurança?
* Como equilibrar detalhamento e velocidade de resposta?


## Reflexão

Como dashboards inteligentes podem apoiar decisões rápidas em incidentes de segurança?
