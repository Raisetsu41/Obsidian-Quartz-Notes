---
title: "2026-01-01 数据科学导论"
date: "2026-01-01"
tags:
  - 课程笔记
description: "数据科学导论第一讲：Python 环境配置与 NumPy 基础。"
publish: true
---

# 2026-01-01 数据科学导论

## 笔记正文

### 一、课程概述

数据科学是一门交叉学科，结合了统计学、计算机科学和领域知识。本课程将使用 Python 作为主要工具，覆盖从数据清洗到机器学习的完整流程。

### 二、Python 环境配置

推荐使用 Miniconda 管理 Python 环境：

```bash
conda create -n ds python=3.11
conda activate ds
pip install numpy pandas matplotlib scikit-learn jupyter
```

### 三、NumPy 基础

NumPy 是 Python 科学计算的核心库，提供了高效的多维数组操作。

```python
import numpy as np

# 创建数组
a = np.array([1, 2, 3, 4, 5])
b = np.arange(0, 10, 2)
c = np.linspace(0, 1, 100)
d = np.random.randn(1000)

# 矩阵运算
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = A @ B  # 矩阵乘法
```

## 关键概念

| 术语 | 定义 | 个人理解 |
|------|------|----------|
| ndarray | N 维数组对象 | 比 Python List 快 50 倍的核心数据结构 |
| Broadcasting | 不同形状数组间的运算规则 | 自动扩展维度，避免显式循环 |
| Vectorization | 向量化操作 | 用数组运算替代 for 循环 |
| Axis | 数组的轴 | axis=0 按行，axis=1 按列 |

## 重要公式

**向量范数：**

$$
\|x\|_p = \left(\sum_{i=1}^{n} |x_i|^p\right)^{1/p}
$$

**矩阵 Frobenius 范数：**

$$
\|A\|_F = \sqrt{\sum_{i=1}^{m}\sum_{j=1}^{n} |a_{ij}|^2}
$$

## 疑问

- [ ] NumPy 的广播机制和 PyTorch 的有什么不同？
- [ ] ndarray 的内存布局（row-major vs column-major）

## 课后作业

- [ ] 用 NumPy 实现一个简单的线性回归
- [ ] 阅读 ISLR 第 2 章

## 延伸阅读

- 论文：*Array Programming with NumPy* (Nature, 2020)
- 参考：[NumPy 官方文档](https://numpy.org/doc/)
- 下节课预习：Pandas 数据处理基础

---

> [!summary]- 小结
> 今天学习了 NumPy 核心概念：ndarray、广播、向量化。明天将学习 Pandas DataFrame 操作。
