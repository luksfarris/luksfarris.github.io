---
layout: post
title: "A Practical Guide To Data Engineering"
date: 2024-01-28 14:00:00 +0100
author: Lucas Farris
categories: data-science data-engineering
permalink: /de-guide
published: false
---

I've decided to keep this page as a place for me to come back to often, and update with newer logic I gain over time. I hope it can be useful to other people too.
Unlike my previous guide to scrum, this one is a lot less opinionated, and more scientific.


# Data Lifecycle

- **Data Types**: simple (text, numbers), structured (images, documents), semi-structured (json, html)
- **Access Levels**: public (low impact), internal (medium impact), confidential (high impact)
- **Data Types**: cuantitative (numbers), qualitative (text). Qualitative data can be ordinal (youth, adults, elders) or nominal (apples, pears, bananas). Qualitative data can be also be binary (yes/no, true/false), or categorical (red, green, blue).
- **Data Quality**: accuracy (correctness), completeness (missing values), consistency (same data, different values), timeliness (up to date), validity (conforms to rules), uniqueness (no duplicates)
- **Data Lifecycle**: data creation, data storage, data processing, data analysis, data archiving, data destruction
  - **Data Processing**
      - integration: combining, enriching data from different sources
      - selection: filtering
      - reduction: dimensionality reduction (pca, t-SNE), clustering, sampling, compression (word2vec, autoencoders) 
      - conversion: smoothing (binnning, regressions), aggregation, normalization, discretization, hierarchy generation
      - cleaning: missing data (imputation), outliers, noise, duplicates, undefined values
        - normalization: min-max, z-score
        - discretization: equal-width, equal-frequency, entropy-based, chi merge
        - dimensionality reduction: PCA, LDA, SVD, t-SNE
        - sampling: random, stratified, systematic, cluster, oversampling, undersampling
  - **Data Analysis**
      - descriptive statistics
      - inference
      - featire extraction
      - supervised models
      - unsupervised models
  - **Data Visualisation**
      - charts
      - dashboards: zoom, filter, drill-down, history, extract
      - reports
      - presentations


# Web Scraping

Data sources: API, public web pages, mobile apps, RSS, exported files, ...

TODO (Page 20)

# NoSQL Databases

TODO (Page 21)

