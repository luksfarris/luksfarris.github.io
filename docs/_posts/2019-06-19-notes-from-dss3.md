---
layout: post
title: "Notes From DSS3"
date: 2019-06-19 12:00:00 +0100
author: Lucas Farris
categories: data-science
permalink: /dss3
---

# Data Science Summit - Warsaw, June 2019

> Innovative Data - Create Real Value<br>
Jean-Phillipe Schepens - Bisnode

Started storytelling about the Black Swan Paradigm (falsifiability), and the importance of always looking at all the data. Talked about how having more data not always means having more insights, used an UCLA example about how a wolves vs huskies classifier learned to detect snow. Said there are 3 pillars for what AI in enterprise should do: Marketing, Compliance & Risk, and Sustainability. To illustrate this, he told a story about how LEGO had deficit near Christmas when Toys'r'us went bankrupt. He claimed the data was out there 3 months before it happened.

He told 3 stories about his company and what they do. The first one, how they helped a recruitment agency to predict which companies would be opening which job positions, so recruiters could contact companies beforehand. The second example was about predicting leads for a flight company's cold calling department, so they could call in clients with more context. Results from the calls reinforced the learning model, sales department claimed these insights made their job more meaningful. The final example was a Slovenian bank, which was helped by predicting which small/medium business would be needing loans in the near future. Most of these were a result of crawling multiple different data sources (i.e. news outlets), and curating the data.

> Traditional and Deep Learning Vehicle Autonomy<br>
Krzysztof Kudryński - Nvidia

Showcased a pet project of a drone behaving in an indoors factory-like scenario. Showed how the drone learns to map the environment, localize itself, and go to specific points in the map. Talked about particle filtering, and correlating identified particles with the learned map. Discussed the optical flow algorithm, and inferring 3D structures from a single POV camera. Demonstrated this with a 3d reconstruction of his chair.

Then proceeded to elaborate about the complexity of using deep learning architectures to help cars identify their surroundings. Elaborated on the following algorithms: ResNet-50, Single Shot Detector (SSD), Mask R-CNN, and U-NET. His examples should be available for download on the NVIDIA website (https://developer.nvidia.com/deep-learning-examples).

> Sales Modeling<br>
Łukasz Dylewski - ITMAGINATION

Told a story about predicting the sales of his company. Spoke on high level about using Python, and many ML classifiers. Showed a few lessons learned and pitfalls.

> Credit Risk In Practice<br>
Konrad Wypchło - ING

Talked about the importance of credit risk analysis, and to prove this claimed that ING lends 600 bi per year. Explained that there are trade-offs between choosing models that have high accuracy, but with predictions that are not explainable. Results that can be interpreted are key to this business. 
They predict 3 things in each analysis: Probability at default (how likely this customer is to not pay the loan), Exposure at default, and Loss given default. He talked about anomaly detection, and using MSCRED and convolutional LSTM (none in production). The talk ended with how using Agile methodologies has improved the productivity and culture of his department, and some benefits of this methodology.

>AI Not A Buzz Word<br>
Kamil Kosiński & Hoand Duc Vu  - PwC

Talked about using Python, R, Spark, and Tableau, and having teams of specialists in Data Science, Data Engineering, BI specialists, and UX designers. Showcased 4 examples of how their company solves real world problems using machine learning.

Firstly an example of predicting how multiple physiological body metrics are influenced (for a period of the next 6 months) by changes in diet, and introduction of drugs, or other pharmacological products. This could be used to evaluate how populations of specific geographical areas are affected by medical interventions. Secondly they talked about fraud detection, and using ML to detect automatically false articles from clients.

The third project was a brief example of modelling behavior of  self-driving cars, and the last one was cognitive analysis, and predicting customer behavior using cameras. They demonstrated prediction of age, gender, and identifying specific people in real time.

>Lather, Rinse, Repeat, and Die or Deploy<br>
Wit Jakuczun - WLOG Solutions

Talked about the importance and problems of the Cross-industry standard process for data mining (CRISP-DM) methodology. Went through each step of the methodology, and discussed lessons learned and best practices.

On Business Understanding, he discussed the importance of every time clearly defining how to test, and how to validate. On Data Understanding, the importance of always pursuing the real, historical, complete data sets. Emphasized how Data Preparation and Modelling are (contrary to the expectations of many data scientists) not the most important part of the process, by arguing that if you cannot deploy, your project failed.

Highlighted that when Evaluating results, test schemas must be agreed with all the stakeholders, and that all the problems will appear in the Deploy step. He addressed a paper called Hidden Technical Debt in Machine Learning Systems, and showed a checklist for identifying of poorly prepared tech projects. Some points were to use Feature Store abstractions (so you don't depend on the data storage), abstracting the machine learning model used (so you don't depend on specific models), and having automated Continuous Integration and Continuous Delivery.

> Decision Making using DL<br>
Olgun Aydin - PwC

Told a story about how his company predicts machinery failures. He discussed his deep learning architecture, how it started with a single LSTM layer, and grew. His final architecture looked something like: [Input, LSTM, Dropout Layer, LSTM, Hidden Layer, Output]. He further talked about parameter optimization with genetic algorithms and grid search.

> Operating Big Data For IoT Infrastructure<br>
Divesh Kumar - Equinix

Talked about the necessity of monitoring petabytes of data that is transferred through their network. The necessities of providing 99% availability, and latency under 30 seconds. Mentioned it was important that architectures are API-first, use micro-services and lambdas, are scalable and secure, that data quality is always guaranteed, and that there is always operational excellence.

Showed how they use Apache Kafka (message broker), Storm (processing streams), Cassandra (NoSQL DB), and Spark. He mentioned it was important that assets always push data, not pull. Finally explained they use Redis as the cache mechanism, that it's important to enable batching (i.e. in Kafka), and that consumers in Storm should be very quick.

> Event Extraction Classifiers for Automated Pathway Curation<br>
Wojciech Kusa - Square One

Introduced the literature on BioNLP. Explained what is TEES (Turku Event Extraction System), using Python, Sklearn, and Keras. He explained the process of tokenization, entity recognition, parsers, trigger detection, edge detection, unmerging, detection of speculations and negations. He discussed how Random Forest performed best for finding the best pathway curation (had around 40% accuracy, still not usable in practice).

> Intro To Quantum Computing And ML<br>
Paweł Gora -University Of Warsaw

Explained what are Qubits and Quantum gates. Discussed uses of quantum computers in cryptography, combinatorial optimization, and sampling Boltzmann distributions. Showed how Quantum Annealing works (similar to simulated annealing), and how it was used to find optimal taxi routes in Beijing. Showed the PennyLane Python package, a quantum library for machine learning applications.