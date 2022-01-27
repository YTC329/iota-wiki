---
id: smart-contracts-validators
title: Validators
description: In this article you will learn how the IOTA Smart Contract validators works.
keywords:
  - Validator
  - Smart Contracts
  - wasp
  - ISCP
  - Node
---

# 驗證器

在本文中，您將了解 IOTA 智能合約驗證器的工作原理。

驗證器是 IOTA 智能合約節點，用於驗證來自其他節點的傳入訊息的正確性。當前的節點實現稱為 Wasp，是用 Go 編寫的。每個驗證器都包含整個鏈的副本。這種冗餘使得合約鏈也成為一個分佈式數據庫。

每個合約鏈都由一個固定的驗證節點委員會運行。因此，每條合約鏈都是一個分佈式的冗餘結構——**一個分佈式處理器**。

## 委員會

委員會是智能合約鏈的主要安全要素。委員會最重要的特徵之一是參與者的數量，即“法定人數”因素。

“鏈下”智能合約，就像在 IOTA 智能合約中一樣，在核心協議之外執行。這意味著只有一部分驗證者，即委員會，需要執行智能合約，並且可以在核心協議之外達成共識，從而形成一個可擴展且高效的系統。

每條 IOTA 智能合約鏈都在其委員會的共識下運行，因此每條鏈都是一個沒有單點故障的分佈式系統。

只有當委員會的絕大多數驗證者達成共識時，結果才會被添加到鏈中。達成共識的驗證者數量可針對每條鏈進行配置。

委員會本身的規模也可以是可變的——從幾個節點到數百個節點，每個節點都可以是許多不同委員會的一部分。

## 委員會的選擇和輪換

選擇節點組成委員會的過程必須手動進行。這種靈活性允許適用於不同用例的不同模型：選擇可以基於節點的公開市場，可以是利益相關方聯盟的決定，或者實際上是單個實體的決定。

運行合約鏈的委員會可以更改（輪換）為具有另一組私鑰和另一個地址的新委員會。

## 補充閱讀

- 您可以在 [構建段落] 中了解如何設置智能合約節點 (/smart-contracts/guide/chains_and_nodes/running-a-node).
- [了解如何配置委員會](/smart-contracts/guide/chains_and_nodes/wasp-cli#configuration)
- [參與運行智能合約節點的網絡](/smart-contracts/guide/chains_and_nodes/running-a-node)
- [構建具有可信智能合約節點的網絡](/smart-contracts/guide/chains_and_nodes/setting-up-a-chain#trust-setup)

在下一篇文章中，您將了解有關鏈的所有信息，您可以在其中部署智能合約。
