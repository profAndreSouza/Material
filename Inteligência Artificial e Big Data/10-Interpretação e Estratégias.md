# Interpretação, Estratégias e Ética

Nesta etapa vamos:
1. Analisar estatísticas de cada cluster.
2. Criar **personas** para cada grupo.
3. Propor estratégias de negócio.
4. Refletir sobre limitações e ética no uso dos dados.


## 1. Estatísticas por cluster

```python
# Médias por cluster
df.groupby("novo_cluster").mean(numeric_only=True)
```

```python
# Gastos por cluster
sns.boxplot(data=df, x="novo_cluster", y="gasto_ult_12m")
plt.title("Gasto Anual por Cluster")
plt.show()

# Tipo de veículo predominante por cluster
pd.crosstab(df["novo_cluster"], df["tipo_veiculo"], normalize="index") * 100
```


## 2. Personas criadas a partir dos dados

### **Cluster 0 – Profissionais Consolidados**

* **Idade média:** \~47 anos (18–74)
* **Renda média:** R\$ 4.454 (até R\$ 10.386)
* **Tempo de cliente:** 2,6 anos
* **Gasto anual médio:** R\$ 8.300 (até R\$ 22.838)
* **Veículo mais comum:** Sedan
* **Forma de pagamento:** Financiamento
  **Interpretação:** Adultos de meia-idade, boa renda, gastam bastante.
  **Estratégia:** Oferecer upgrades de veículo, pacotes de manutenção premium.


### **Cluster 1 – Tradicionais Econômicos**

* **Idade média:** \~61 anos (45–74)
* **Renda média:** R\$ 4.262
* **Tempo de cliente:** 2,2 anos
* **Gasto anual médio:** R\$ 1.120 (máx. \~R\$ 5.375)
* **Veículo mais comum:** Hatch
* **Forma de pagamento:** Financiamento
  **Interpretação:** Clientes mais velhos, baixo gasto.
  **Estratégia:** Ofertas em carros econômicos, revisões preventivas, foco em custo-benefício.


### **Cluster 2 – Jovens Aspirantes**

* **Idade média:** \~32 anos (18–48)
* **Renda média:** R\$ 4.040
* **Tempo de cliente:** 2 anos
* **Gasto anual médio:** R\$ 1.043 (máx. \~R\$ 5.402)
* **Veículo mais comum:** Sedan
* **Forma de pagamento:** Financiamento
  **Interpretação:** Jovens, recém-clientes, gastos moderados.
  **Estratégia:** Planos de entrada, condições de financiamento flexíveis, apps de fidelização.


### **Cluster 3 – Clientes Fiéis e Moderados**

* **Idade média:** \~46 anos (18–73)
* **Renda média:** R\$ 3.894
* **Tempo de cliente:** 9,2 anos
* **Gasto anual médio:** R\$ 1.418 (máx. \~R\$ 11.673)
* **Veículo mais comum:** Sedan
* **Forma de pagamento:** Financiamento
  **Interpretação:** Clientes de longa data, gastos moderados.
  **Estratégia:** Programas de fidelidade, descontos em serviços, recompensas pela lealdade.


## 3. Reflexão Crítica

* Esses perfis podem mudar com o tempo?
* O que acontece se uma campanha excluir ou rotular mal um grupo?
* Como aplicar a **LGPD** para proteger a privacidade dos clientes?
* Quais são os limites de usar algoritmos para tomar decisões de marketing?
