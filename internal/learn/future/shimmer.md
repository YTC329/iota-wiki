---
id: shimmer
title: Shimmer
description: Introduction to the emerging incentivized staging network
keywords:
  - Incentivized
  - staking
  - SMR
---

![微光](/img/learn/future/shimmer.svg 'Click to see the full-size image.')

2021 年 11 月，IOTA 基金會[介紹](https://blog.iota.org/introducing-iota-staking/)微光，一個激勵性的分期網絡。 微光將作為即將到來的 IOTA 更新到達主網之前的驗證和暫存網絡。它還將擁有自己的令牌，稱為[SMR](https://shimmer.network/token)。為了在新網絡上公平分配微光代幣，您可以在微光啟動之前質押您的 IOTA 代幣，並在新網絡啟動後收到微光代幣。

## 啟動前質押

在微光網絡啟動前的 90 天內，您將能夠在啟動時在微光網絡上質押您的 IOTA 代幣以接收 SMR 代幣。 IOTA 基金會將提前 24 小時公佈開始日期。在這 90 天內，您每 10 秒質押 1Mi IOTA，您將獲得 1 個 SMR。質押您的 IOTA 代幣沒有任何風險。您將繼續控制您的代幣，而不必將它們轉讓給第三方。讓我們仔細（簡化）了解一下該過程背後的技術。

### 技術概述

質押將使用官方 IOTA [螢火蟲錢包](https://firefly.iota.org/) 進行。要質押您的 IOTA 代幣以換取 SMR 代幣，您需要創建一個具有特定負載的特殊質押交易。這表明您希望質押該數量的 IOTA 代幣以接收 SMR 代幣。 Hornet 節點使用插件來註冊哪些地址已質押 IOTA 以及多長時間 - 節點所有者可以選擇啟用此插件。

那些已經熟悉即將到來的 Build/Burn 投票過程的人會認識到該投票過程和微光質押過程之間的相似之處，因為相同的黃蜂插件執行它。

這是一個如何工作的**一個範例**：Bob 在一個地址上有 1Mi，並使用 IOTA 官方錢包 Firefly。他想用他的 IOTA 代幣來質押一些 Shimmer 代幣（SMR）。他單擊螢火蟲中的質押按鈕，生成質押交易。 黃蜂看到此消息並開始監控 IOTA 代幣在該地址上的質押時間。如果代幣從該地址移出，則該地址的質押期結束。

對於每個里程碑，1 Mi 質押會返回 1 個 SMR 代幣。所以在第一個里程碑之後，返回的金額將是 1 SMR。十秒後，第二個里程碑之後，就是2個SMR，以此類推。只要他的 IOTA 代幣留在用於質押的地址上，SMR 代幣的數量就會累積。

如果 Bob 在 90 天內質押 1 Mi，他將獲得 777,600 SMR 代幣。在 Shimmer 網絡上，Bob 現在可以使用螢火蟲錢包領取他的真實 SMR 代幣。

SMR 的初始代幣供應由質押的 IOTA 代幣數量以及在 90 天質押期間質押的時間定義。

![質押範例](/img/learn/future/staking_example.svg 'Click to see the full-size image.')

## 發布後質押

一旦 Shimmer 網絡上線，您將能夠直接質押您的 SMR 代幣。計劃的初始 APY 為 8%。這可以稍後由社區更改。有關“發布後”質押的更多信息將隨後發布。
