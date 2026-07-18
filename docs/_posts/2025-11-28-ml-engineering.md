---
layout: post
title:  "Deep Learning Reproducibility: Engineering Approaches"
date:   2025-11-28 09:00:00 +0100
author: Lucas Farris
categories: data-science
permalink: /dl-experiments
published: false
---



*Cloud Service Providers will offer ML-As-A-Service products like GCP Vertex AI, AWS SageMaker, and whatever Azure calls their stuff has at the moment. The issue I keep running into is that these services keep getting renamed, features keep changing, the UI keeps changing, the API's keep changing, and you can never rely on them. Code authors don't make the slightest effort to make their code reproducible either, and will very often mislead you, as you will see in this post. The summary is: there are three ways to try to run a Machine Learning paper you read about. There's the quick and dirty way, the high fidelity way, and the hard rewarding way.*

* Do not remove this line (it will not be displayed)
{:toc}

----


## 0. Problem Statement

Here I will discuss the three approaches, using [Bert4Rec](https://arxiv.org/abs/1904.06690) as an example. You can find my annotated version of the [paper here](./assets/img/deep_learning/bert4rec.pdf)

Given a set of user features $U = {u_1, u_2, \dots, u_{\|U\|}}$, item features $I = {i_1, i_2, \dots, i_{\|I\|}}$, and user interactions $S_u = {v_1^{(u)}, \dots, v_t^{(u)}, \dots, v_{n_u}^{(u)}}$. We want to estimate the probability of the next item interaction being a certain item: $$ \mathcal{p}(v_{n_u+1}^{(u)} = v \mid S_u) $$

The authors measure the performance using *Hit Ratio* (HR), *Normalized Discounted Cumulative Gain* (NDCG), and *Mean Reciprocal Rank* (MRR). In terms of training parameters, we see:

- Network parameters initialized using normal noise around $[−0.02, 0.02]$
- Optimizer is Adam with learning rate $0.0001$, decay rates $\beta_1 = 0.9$, $\beta_2 = 0.999$, $l_2$ weight decay $0.01$, and linear decay of the learning rate.
- They use 2 Transformer blocks, and 2 attention heads of size $32$.
- They train in batches of $256$, with maximum sequence length of $50$.

We're gonna discuss the architecture in detail when we implement it in the last section. For MovieLens 1M, their results were $0.70$ for HR@10, $0.48$ for NDCG@10, and $0.42$ for MRR.

## 1. The Quick And Dirty Way

This approach is gonna cost you around one hour of your time, and about 1 USD.

This is the quick and dirty way. You read        'recall@10': 0.141, the paper, you find a library that implements it (RecBole), you run it on a managed notebook service like GCP Vertex AI or AWS SageMaker.

As of December 2025 AWS has renamed `SageMaker` to `SageMaker AI`. SageMaker is not something completely different and IMHO useless. Under `Applications and IDEs` we will navigate to `Notebooks` and create a new instance. Choose `ml.g4dn.2xlarge` to be safe.

{% include admonition.html 
type="Info" 
body="
You may be required to submit a support ticket to be able to use a GPU instance. Those tickets may take several business days to be approved.
"
%}

Start the instance and open a notebook (I prefer the Jupyter Lab option). You will need to choose a kernel with Pytorch and GPU support. Doing it this way, you don't get a choice on the versions, so you kind of have to hope for the best. At the time of writing, the kernel I can choose is called `conda_pytorch_p310`.

As a good general practice, let's check what we're working with:

```shell
! python --version
! nvcc --version
! pip show torch
```

> Python 3.10.19 [...] Cuda compilation tools, release 12.1, V12.1.105 [...] Name: torch Version: 2.6.0+cu124 [...]

So we got Python 3.10, CUDA 12.1 and Torch 2.6.0.

Now we need to install RecBole. A quick look at their open Pull Requests shows that [Python3.10 is not supported](https://github.com/RUCAIBox/RecBole/pull/2187). so instead of installing the latest version, we will install this PR's version.

```shell
! pip install git+https://github.com/tamio0800/RecBole.git
```
> Successfully installed [...] recbole-1.2.1 [...]

{% include admonition.html 
type="Danger" 
body="
Make sure you review unmerged PR's before installing them. They may contain bugs or security vulnerabilities.
"
%}

Now we have everything we need to run our model.

```python
from recbole.quick_start import run_recbole
parameter_dict = {'train_neg_sample_args': None}
training_results = run_recbole(model='BERT4Rec', dataset='ml-100k', config_dict=parameter_dict)
```

As you can see we're training with the 100K MovieLens dataset instead of 1M. This is because our little notebook instance won't have enough RAM to handle the bigger datasets. After training for 47 epochs we get:

```python
{
    'best_valid_result': {
        'mrr@10': 0.0509, # 0.42 in the paper
        'ndcg@10': 0.0715, # 0.48 in the paper
        'hit@10': 0.141, # 0.70 in the paper
    }
}
```

Which is not even close to the paper's results 🤷‍♂️. We're not the only ones:

<center><img src="./assets/img/deep_learning/reproduce.png" alt="Github users unable to reproduce the original author's code's results." style="width: 100%;"/></center>
> Fig 1: Github users unable to reproduce the original author's code's results. [Reference](https://github.com/FeiSun/BERT4Rec/issues?q=is%3Aissue%20reproduce).

But hey, we got it working. With this notebook we can now run a large number of experiments quickly, different models, different parameters, different datasets. Now, let's see if we can run the original code.

## 2. The High Fidelity Way

### 2.1. Motivation

Despite what ML libraries will tell you, they are built to run on:
- a specific version of Python
- a specific version of CUDA
- a specific version of Pytorch or Tensorflow

And guess what: they will *not* tell you which. Here's an example of RecBole's "Quickstart" page:

> Python 3.7 (or later), torch 1.7.0 (or later) are required to install our library. If you want to use RecBole with GPU, please ensure that CUDA or CUDAToolkit version is 9.2 or later. This requires NVIDIA driver version >= 396.26 (for Linux) or >= 397.44 (for Windows10). - [RecBole Doc](https://recbole.io/docs/get_started/install.html)

Obviously, this is not true. One cannot guarantee their code future proof because libraries will almost never be backwards compatible. This particular library breaks at `Python 10`, and breaks at `CUDA 12.6`. This is not me throwing shade at other developers; my own libraries break at newer releases, and everyone else's too. 

Machine Learning Engineers are also Archeologists sometimes. Obviously you can read a paper reference and re-implement anything from scratch using the latest tech stack. However, this road is more time consuming and more risky. When possible, I like to rely on popular libraries maintained by multiple people.

So if we'll use a stable library, and we'll need to figure out it's requirements. Don't start at the latest version, or the version your cloud service provider gives you. Start at the minimum version and only upgrade if needed.

**You need to be able to provision almost any hardware or software on demand**. This is critical. I'll be using the original [Bert4Rec](https://github.com/FeiSun/BERT4Rec/) code as an example throughout this post. I'll be using AWS, but the instructions are for vanilla machines, so it doesn't matter the provider really.

{% include admonition.html 
type="Info" 
body="
Quick disclaimer: I would love for this post to come with IaT code, but it would take me too long to prepare one for each provider. Additionally, as I said, they keep changing their API's so whatever code I provide today will likely be broken in a couple years.
"
%}

Look at what the authors wrote on the README:

>Requirements: python 2.7+, Tensorflow 1.12 (GPU version), CUDA compatible with TF 1.12

Again, this is clearly incorrect. Unfortunately using Python 2 is not going to be practical. So we'll look into [TF 1.12's Pypi page](https://pypi.org/project/tensorflow/1.12.3/) to check the latest Python version we can get away with. It's `CPython 3.6m`.

Now let's figure out the CUDA version we need. Looking at [Tensorflow's documentation](https://www.tensorflow.org/install/source#gpu) we see that for `tensorflow_gpu-1.12.0` we need `cuDNN 7` and `CUDA 9`.
 

### 2.2 The Virtual Machine

Don't go for a managed notebook service. Especially not a free one. You can train a full transformer model end-to-end with millions of data points for under 3 USD. That's cheaper than coffee. But it requires a bit of work, so let's get cracking.

Here's our shopping list for the VM: 
- [Hardware] GPU, minimum 8GB VRAM, ideally 16
- [Hardware] Minimum 50GB storage, ideally 80
- [Hardware] Minimum 16GB RAM, ideally 64
- [Software] Ubuntu base image
- [Software] Python 3.6.15
- [Software] CUDA 9.2
- [Software] Tensorflow 1.12 (GPU version)

For the hardware, I found that `g4dn.2xlarge` on AWS was a good fit for my purposes. For the software, you may have realized Python3.7 and CUDA 9.2 are 7 years old at the time of writing this article. This may look bad, but reproducibility is king in Machine Learning.

{% include admonition.html 
type="Info" 
body="
I expect not every NVIDIA GPU is compatible with every version of CUDA. For example, the VM we chose uses a T4 GPU, which is supposed to run on CUDA 10 or later. However, we want to install CUDA 9.2. This means the T4 may be a deal breaker, we need to be prepared to have start from scratch with a different GPU if needed.
"
%}

#### 2.2.1 Finding The Right Operational System

We chose CUDA 9.2. That means we have to find the version of Ubuntu it was made to run on. So we will head over to [developer.nvidia.com/cuda-92-download-archive](https://developer.nvidia.com/cuda-92-download-archive) and figure that out.

<center><img src="./assets/img/deep_learning/cuda.png" alt="CUDA driver download showing the available ubuntu versions" style="width: 100%;"/></center>
> Fig 1: CUDA driver download showing the available ubuntu versions

As you can see, there are two versions we can choose from, 17 or 16. In the Ubuntu world, every even version (e.g., 16.04, 18.04, 20.04, ...) is the LTS version, so we'll pick `Ubuntu 16.04`.

#### 2.2.2 Provisioning The VM

So we'll head over to our Compute provider (in my case AWS EC2) and provision a virtual machine. Here are the key parameters I had to choose:

- **Name**: call it something like `[name]-[tool]-[purpose]-[date]`, or `farris-recbole-notebooks-Dec2025`
- **Base Image**: Make sure you choose the right OS (in our case `Ubuntu 16.04 LTS`), and make sure it's a `x86_64` architecture image.
- **Instance Type**: Here is where we choose the hardware. For us it would be `g4dn.2xlarge`, but choose the appropriate ones for Google or Azure.
- **Networking**: allow SSH and HTTPS traffic. Ideally, only from your IP.
- **Storage**: configure 50-80 GB of storage. Preferably SSD.
- **Log In**: create a key pair so that you can log in to your machine via SSH.


{% include admonition.html 
type="Info" 
body="
AWS does not allow anyone to spin up any instance on a whim, even if you're happy to pay. Check your quotas here <a href=\"https://us-east-1.console.aws.amazon.com/servicequotas/home/services/ec2/quotas\">{region}.console.aws.amazon.com/servicequotas/home/services/ec2/quotas </a>to see if you're allowed. In our case <code>Running On-Demand G and VT instances</code> needs to be $\geq 1$ (not to be confused with dedicated g4dn hosts). If it's zero, you need to create a support ticket for them, which may take a few days. This is a one-time thing per account/region though. You will receive updates via email, and can track the status on <a href=\"https://support.console.aws.amazon.com/support/home#/case/history\">support.console.aws.amazon.com/support/home#/case/history</a>.
"
%}

Launch your instance and connect to it via SSH.

#### 2.2.3 Setting Up The Software

...

## 3. The Hard Rewarding Way

Since here we're gonna implement the paper from scratch, we're free to choose how we want to do it. I personally choose to do it in the current latest versions of Keras 3 and torch. All the **exact** versions I used are in the README of the repository.