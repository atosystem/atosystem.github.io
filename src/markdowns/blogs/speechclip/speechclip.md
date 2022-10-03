---
title: SpeechCLIP
stack: HTML & python
slug: speechclip
date: 2021-11-02T00:00:00+00:00
thumb: ./model_summary.jpg
featuredImg:
tags: ["speech", "visual", "ML", "research", "project"]
description: "Bridging unparallel speech and text via visual signal"
---

# SpeechCLIP: Integrating Speech with Pre-Trained Vision and Language Model

<!-- <img height="600px" src="./model_overall.png"></img> -->

![](./model_summary.jpg)

# TL;DR

Parallel speech-text data is expensive and hard to collect, compared to paired speech-image, text-image data. To this end, we utilize the large scale pretrained image-language model, CLIP and speech self-supervised model, HuBERT to bridge speech and text together. Under several design of model architecture, we achieve SOTA on image-speech retrieval and we also show that SpeechCLIP can conduct zero-shot speech-text retrieval and keywords discovery from speech utternace.

# Abstract

Data-driven speech processing models usually perform well with a large amount of text supervision, but collecting transcribed speech data is costly. Therefore, we propose SpeechCLIP, a novel framework bridging speech and text through images to enhance speech models without transcriptions. We leverage state-of-the-art pre-trained HuBERT and CLIP, aligning them via paired images and spoken captions with minimal fine-tuning. SpeechCLIP outperforms prior state-of-the-art on image-speech retrieval and performs zero-shot speech-text retrieval without direct supervision from transcriptions. Moreover, SpeechCLIP can directly retrieve semantically related keywords from speech.

# Cite our work!
