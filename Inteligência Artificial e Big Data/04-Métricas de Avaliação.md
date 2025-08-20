# **Aula 4 – Métricas de Avaliação de Modelos**

## **1. Contextualização Inicial (5–10 min)**

Na aula anterior, treinamos modelos supervisionados (Regressão Logística e Árvore de Decisão).  
Agora, vamos avaliar **qual deles responde melhor ao problema de negócio**.

**Pergunta central:**

> “Como saber se o modelo realmente ajuda a empresa a identificar clientes com chance de comprar?”


## **2. Métricas para Classificação**

### 2.1 Acurácia
- Proporção de previsões corretas.  
- Limitação: pode enganar em datasets desbalanceados.

### 2.2 Matriz de Confusão
- Mostra a distribuição entre:
  - **Verdadeiros Positivos (VP)**: clientes que compraram e o modelo acertou.
  - **Falsos Positivos (FP)**: modelo disse que compraria, mas não comprou.
  - **Verdadeiros Negativos (VN)**: clientes que não compraram e o modelo acertou.
  - **Falsos Negativos (FN)**: modelo disse que não compraria, mas comprou.

### 2.3 Precisão (Precision)
- Entre os clientes que o modelo disse que **comprariam**, quantos realmente compraram?  
- Fórmula: `VP / (VP + FP)`  

### 2.4 Recall (Sensibilidade)
- Entre os clientes que **realmente compraram**, quantos o modelo conseguiu identificar?  
- Fórmula: `VP / (VP + FN)`

### 2.5 F1-Score
- Média harmônica entre precisão e recall.  
- Bom equilíbrio quando os dois são igualmente importantes.


## **3. Riscos e Considerações**

- **Overfitting**: quando o modelo “decorou” o treino e não generaliza bem.  
- **Trade-off**: dependendo do negócio, pode ser melhor priorizar recall (captar todos clientes potenciais) ou precisão (evitar desperdício em clientes que não comprariam).


## **4. Atividade Prática Orientada**

### Passos no Google Colab/Jupyter:
```python
from sklearn.metrics import confusion_matrix, classification_report
import seaborn as sns
import matplotlib.pyplot as plt

# 1. Avaliar regressão logística
y_pred_log = log_model.predict(X_test)
print("Relatório Regressão Logística:")
print(classification_report(y_test, y_pred_log))

# 2. Avaliar árvore de decisão
y_pred_tree = tree_model.predict(X_test)
print("Relatório Árvore de Decisão:")
print(classification_report(y_test, y_pred_tree))

# 3. Exibir matriz de confusão da árvore de decisão
cm = confusion_matrix(y_test, y_pred_tree)

sns.heatmap(cm, annot=True, fmt="d", cmap="Blues")
plt.xlabel("Previsto")
plt.ylabel("Real")
plt.title("Matriz de Confusão - Árvore de Decisão")
plt.show()
```

## **5. Discussão em Grupo**

* Qual modelo apresentou melhor equilíbrio entre precisão e recall?
* Se a empresa quer **maximizar vendas**, é melhor priorizar recall.
* Se a empresa quer **reduzir desperdício em campanhas**, é melhor priorizar precisão.
* Há indícios de overfitting na árvore de decisão?


## **6. Produto Esperado**

* Avaliação completa dos modelos com acurácia, precisão, recall e F1-score.
* Matriz de confusão interpretada.
* Discussão sobre qual modelo é mais adequado para a empresa de varejo.
* Recomendações estratégicas baseadas nos resultados obtidos.
