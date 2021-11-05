---
title: Theme Transformer
stack: HTML & python
slug: thm-trnfrm
date: 2021-11-02T00:00:00+00:00
thumb: ./MusicChainArchitecture-Architecture.png
featuredImg: 
tags: ["music", "ML","research"]
description: "Theme-based music generation"
---

# Theme Transformer: Symbolic Music Generationwith Theme-Conditioned Transformer

![](overall2model.jpg)
<!-- 
## Demo
| ID| Theme | Real Data | Baseline | Theme Transformer
| -- | -------- | -------- | -------- | -------- |
| 875 | `audio: /theme-transformer-audio/875_Theme.mp3` | `audio: /theme-transformer-audio/875_Realdata.mp3` | `audio: /theme-transformer-audio/875_Baseline.mp3` | `audio: /theme-transformer-audio/875_ThemeTransformer.mp3`|
| 888 | `audio: /theme-transformer-audio/888_Theme.mp3` | `audio: /theme-transformer-audio/888_Realdata.mp3` | `audio: /theme-transformer-audio/888_Baseline.mp3` | `audio: /theme-transformer-audio/888_ThemeTransformer.mp3`|
| 890 | `audio: /theme-transformer-audio/890_Theme.mp3` | `audio: /theme-transformer-audio/890_Realdata.mp3` | `audio: /theme-transformer-audio/890_Baseline.mp3` | `audio: /theme-transformer-audio/890_ThemeTransformer.mp3`|
| 893 | `audio: /theme-transformer-audio/893_Theme.mp3` | `audio: /theme-transformer-audio/893_Realdata.mp3` | `audio: /theme-transformer-audio/893_Baseline.mp3` | `audio: /theme-transformer-audio/893_ThemeTransformer.mp3`|
| 899 | `audio: /theme-transformer-audio/899_Theme.mp3` | `audio: /theme-transformer-audio/899_Realdata.mp3` | `audio: /theme-transformer-audio/899_Baseline.mp3` | `audio: /theme-transformer-audio/899_ThemeTransformer.mp3`|
| 900 | `audio: /theme-transformer-audio/900_Theme.mp3` | `audio: /theme-transformer-audio/900_Realdata.mp3` | `audio: /theme-transformer-audio/900_Baseline.mp3` | `audio: /theme-transformer-audio/900_ThemeTransformer.mp3`|
| 901 | `audio: /theme-transformer-audio/901_Theme.mp3` | `audio: /theme-transformer-audio/901_Realdata.mp3` | `audio: /theme-transformer-audio/901_Baseline.mp3` | `audio: /theme-transformer-audio/901_ThemeTransformer.mp3`|
| 904 | `audio: /theme-transformer-audio/904_Theme.mp3` | `audio: /theme-transformer-audio/904_Realdata.mp3` | `audio: /theme-transformer-audio/904_Baseline.mp3` | `audio: /theme-transformer-audio/904_ThemeTransformer.mp3`|
| 908 | `audio: /theme-transformer-audio/908_Theme.mp3` | `audio: /theme-transformer-audio/908_Realdata.mp3` | `audio: /theme-transformer-audio/908_Baseline.mp3` | `audio: /theme-transformer-audio/908_ThemeTransformer.mp3`|
| 909 | `audio: /theme-transformer-audio/909_Theme.mp3` | `audio: /theme-transformer-audio/909_Realdata.mp3` | `audio: /theme-transformer-audio/909_Baseline.mp3` | `audio: /theme-transformer-audio/909_ThemeTransformer.mp3`|


## Figures
|#id| First 24 bars  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   | Melody Embedding Distance|
| ------ | -------- | -------- | 
|875| <img src="testdata_24bars_modelC/test_875_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_875_front24.jpg" width="100%"/> | 
|888| <img src="testdata_24bars_modelC/test_888_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_888_front24.jpg" width="100%"/> | 
|890| <img src="testdata_24bars_modelC/test_890_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_890_front24.jpg" width="100%"/> | 
|893| <img src="testdata_24bars_modelC/test_893_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_893_front24.jpg" width="100%"/> | 
|894| <img src="testdata_24bars_modelC/test_894_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_894_front24.jpg" width="100%"/> | 
|896| <img src="testdata_24bars_modelC/test_896_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_896_front24.jpg" width="100%"/> | 
|899| <img src="testdata_24bars_modelC/test_899_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_899_front24.jpg" width="100%"/> | 
|900| <img src="testdata_24bars_modelC/test_900_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_900_front24.jpg" width="100%"/> | 
|901| <img src="testdata_24bars_modelC/test_901_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_901_front24.jpg" width="100%"/> | 
|904| <img src="testdata_24bars_modelC/test_904_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_904_front24.jpg" width="100%"/> | 
|908| <img src="testdata_24bars_modelC/test_908_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_908_front24.jpg" width="100%"/> | 
|909| <img src="testdata_24bars_modelC/test_909_front24.jpg" width="100%"/> | <img src="testdata_24bars_modelC/test_909_front24.jpg" width="100%"/> |  -->

