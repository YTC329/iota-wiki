---
title: Network Token Migration
description: We describe the process of migrating tokens from the IOTA legacy network
  into the new Chrysalis network
---

# 網絡代幣遷移：

## 為什麼 IOTA 遷移代幣？

2021 年 4 月的蛹網絡更新改變了協議的核心功能，並在許多方面改進了 IOTA。這些都是重大變化，協議的幾乎每個部分都已更改。因此，IOTA 遺留網絡已經貶值，無法再進行代幣的正常交易。

- [蛹網站](https://chrysalis.iota.org/) 提供了有關為什麼會發生這種情況以及發生了什麼變化的詳細信息。

- [蛹文檔](/chrysalis-docs/welcome) 詳細介紹了新網絡及其規範。

為了繼續保證代幣的可訪問性，舊 IOTA 1.0 網絡中的所有代幣所有者都被要求將他們擁有的資金轉移到新的 IOTA 1.5 蛹網絡中。

## 遷移過程

代幣從舊網絡遷移到新網絡是在 [IOTA 螢火蟲錢包](https://firely.iota.org) 中執行的一個特殊過程

它遵循以下步驟：

- 1.) 你在螢火蟲中輸入你的種子。
- 2.) 螢火蟲創建一個新種子並為新網絡生成一個 EdDSA 地址。
- 3.) 螢火蟲將您的資金發送到舊網絡上的特定遷移地址（封裝了您的 EdDSA 地址）。
- 4.) 您的資金在 Firefly 為您創建的 EdDSA 地址上的新網絡上可用。
- 5.) 您的資金已成功遷移。

[蛹文檔](/chrysalis-docs/guides/migration_mechanism) 中解釋了技術細節

如何遷移您的資金的確切指南位於此處：

- [螢火蟲代幣遷移](/learn/wallets/firefly/general#firefly-token-migration)

我們敦促所有尚未完成遷移的 IOTA 代幣持有者按照這些步驟將代幣轉移到新網絡中。

使用螢火蟲代幣遷移的可能性最遲將隨著升級到完全去中心化的 IOTA 2.0 網絡（Coordicide）而結束。


