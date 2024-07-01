---
layout: post
title:  "A Practical Guide To Machine Learning"
date:   2024-01-28 14:00:00 +0100
categories: data-science machine-learning
permalink: /ml-guide
published: false
---

After 10+ years working with Machine Learning, I decided to keep this page as a place for me to come back to often, and update with newer logic I gain over time. I hope it can be useful to other people too.
Unlike my previous guide to scrum, this one is a lot less opinionated.

# Overview

- Supervised: classification, regression
- Unsupervised: clustering, dimensionality reduction

Training: 
- Over-fitting: model loses capacity to generalize. Detectable if training error is low, but test error is high.
- Training: training set, test set, validation set
  - Evaluation: leave-one-out, leave-p-out, k-fold cross-validation
  - Classifiers: Confusion matrix, ROC curve, AUC, F1 score, precision, recall, accuracy, specificity, sensitivity
  - Regressors: MAE, MS, RNMSE, R2, Pearson correlation coefficient
  - Clustering: Partition metrics (diameter, cohesion, separation), quality metrics (dunn index, silhouette coefficient, C index), external quality metrics (rand index)

# Methodology

- PDCA: Plan, Do, Check, Act
- CRISP-DM: Business understanding, Data understanding, Data preparation, Modeling, Evaluation, Deployment
- Microsoft's Team Data Science Process ([TDSP](https://learn.microsoft.com/en-us/azure/architecture/data-science-process/overview))

# Unsupervised Learning

## RFM Analysis

A RFM (recency, frequency, monetary) analysis breaks down transactional data into the 3 components, and looks to divide customers among these categories. I'll refer to time periods meaning the smallest unit of time that make sense for the business (days, weeks, months, quarters, years).

- **Recency**: periods since last transaction
- **Frequency**: average amount of transactions per period (think Basket Size)
- **Monetary (Value)**: avg sum of transaction values per period
- **Tenure** (optional): periods since first transaction