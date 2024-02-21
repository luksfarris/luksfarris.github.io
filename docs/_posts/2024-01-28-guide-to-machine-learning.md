---
layout: post
title:  "A Practical Guide To Machine Learning"
date:   2024-01-28 14:00:00 +0100
categories: data-science machine-learning
permalink: /ml-guide
published: false
---

After 10+ years working with Machine Learning, I decided to keep this page as a place for me to come back to often, and update with newer logic I gain over time. I hope it can be useful to other people too.
Unlike my previous guide to scrum, this one is a lot less opinionated, and more scientific.

# Overview

- Supervised: classification, regression
- Unsupervised: clustering, dimensionality reduction

Traning: 
- Overfitting: model loses capacity to generalize. Detectable if training error is low, but test error is high.
- Traning: traning set, test set, validation set
  - Evaluation: leave-one-out, leave-p-out, k-fold cross-validation
  - Classifiers: Confusion matrix, ROC curve, AUC, F1 score, precision, recall, accuracy, specificity, sensitivity
  - Regressors: MAE, MS, RNMSE, R2, Pearson correlation coefficient
  - Clustering: Partition metrics (diameter, cohesion, separation), quality metrics (dunn index, silhouette coefficient, C index), external quality metrics (rand index)

# Methodology

- PDCA: Plan, Do, Check, Act
- CRISP-DM: Business understanding, Data understanding, Data preparation, Modeling, Evaluation, Deployment