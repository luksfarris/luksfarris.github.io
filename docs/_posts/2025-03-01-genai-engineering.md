---
layout: post
title:  "Gen AI Engineering"
date:   2024-03-01 12:00:00 +0100
author: Lucas Farris
categories: data-science
permalink: /genai-engineering
published: false
---



## Introduction

So the metric I'm trying to use to compare is: cost (USD) @ 100 tokens / second.


## AWS Infra

Sagemaker Studio - Jupyter Lab



Figure out what exact version of CUDA, Python, and Pytorch you need. This is critical.

I chose to use `ml.g4dn.2xlarge` with 80GB:

- 8 CPUS
- 32 GB RAM
- 1 NVIDIA T4 GPU (16GB)
- $0.94 / hour

Some sanity checks:

```bash
! python --version
# Python 3.12
! nvcc --version
# Cuda 12.6
```

```python
(item_embedding): Embedding(1684, 64, padding_idx=0)
(position_embedding): Embedding(50, 64)
(trm_encoder): TransformerEncoder(
(layer): ModuleList(
    (0-1): 2 x TransformerLayer(
    (multi_head_attention): MultiHeadAttention(
        (query): Linear(in_features=64, out_features=64, bias=True)
        (key): Linear(in_features=64, out_features=64, bias=True)
        (value): Linear(in_features=64, out_features=64, bias=True)
        (softmax): Softmax(dim=-1)
        (attn_dropout): Dropout(p=0.2, inplace=False)
        (dense): Linear(in_features=64, out_features=64, bias=True)
        (LayerNorm): LayerNorm((64,), eps=1e-12, elementwise_affine=True)
        (out_dropout): Dropout(p=0.2, inplace=False)
    )
    (feed_forward): FeedForward(
        (dense_1): Linear(in_features=64, out_features=256, bias=True)
        (dense_2): Linear(in_features=256, out_features=64, bias=True)
        (LayerNorm): LayerNorm((64,), eps=1e-12, elementwise_affine=True)
        (dropout): Dropout(p=0.2, inplace=False)
    )
    )
)
)
(LayerNorm): LayerNorm((64,), eps=1e-12, elementwise_affine=True)
(dropout): Dropout(p=0.2, inplace=False)
(output_ffn): Linear(in_features=64, out_features=64, bias=True)
(output_gelu): GELU(approximate='none')
(output_ln): LayerNorm((64,), eps=1e-12, elementwise_affine=True)
```

After 47 epochs (~80K user interactions each), 9 minutes

```python
OrderedDict([('recall@10', 0.141), ('mrr@10', 0.0509), ('ndcg@10', 0.0715), ('hit@10', 0.141), ('precision@10', 0.0141)])
```

Arriving at a cost of $\frac{80000 \times 47}{9 \div 60} \times 0.94$, or 2.3M interactions per USD.