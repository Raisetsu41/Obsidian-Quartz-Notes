---
title: "📐 数学公式测试"
date: "2026-01-01"
tags:
  - demo
  - math
publish: true
description: "LaTeX 数学公式全面测试——线性代数、微积分、概率论、统计学公式渲染效果。"
---

# 📐 数学公式测试

## 线性代数

**矩阵乘法：**

$$
C_{ij} = \sum_{k=1}^{n} A_{ik} \cdot B_{kj}
$$

**特征值分解：**

$$
A = Q \Lambda Q^{-1}
$$

**奇异值分解（SVD）：**

$$
A = U \Sigma V^T
$$

## 微积分

**泰勒展开：**

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x - a)^n
$$

**傅里叶变换：**

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) \, e^{-2\pi i x \xi} \, dx
$$

**梯度下降：**

$$
\theta_{t+1} = \theta_t - \eta \nabla J(\theta_t)
$$

## 概率论与统计学

**正态分布概率密度函数：**

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

**最大似然估计：**

$$
\hat{\theta}_{\mathrm{MLE}} = \arg\max_{\theta} \prod_{i=1}^{n} p(x_i \mid \theta)
$$

**中心极限定理：**

$$
\sqrt{n}\left(\bar{X}_n - \mu\right) \xrightarrow{d} \mathcal{N}(0, \sigma^2)
$$

**普通最小二乘法（OLS）：**

$$
\hat{\beta} = (X^{\mathsf{T}} X)^{-1} X^{\mathsf{T}} y
$$

## 信息论

**信息熵：**

$$
H(X) = -\sum_{i=1}^{n} p(x_i) \log_2 p(x_i)
$$

**KL 散度：**

$$
D_{\mathrm{KL}}(P \parallel Q) = \sum_{x} P(x) \log\frac{P(x)}{Q(x)}
$$

## 机器学习

**Softmax 函数：**

$$
\operatorname{softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}
$$

**交叉熵损失：**

$$
\mathcal{L} = -\sum_{i=1}^{C} y_i \log(\hat{y}_i)
$$

**Transformer 注意力机制：**

$$
\operatorname{Attention}(Q, K, V) = \operatorname{softmax}\left(\frac{QK^{\mathsf{T}}}{\sqrt{d_k}}\right) V
$$

---

> 所有公式均由 KaTeX 渲染。如果看到公式正确显示，说明 LaTeX 插件配置正常 ✅
