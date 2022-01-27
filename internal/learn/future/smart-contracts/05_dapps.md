---
id: smart-contracts-dapps
title: Decentralized Applications
description: In this article you decentralized applications work and how users can interact with it.
keywords:
  - Decentralized Applications
  - dApps
  - Smart Contracts
  - wasp
  - ISCP
  - Schema Tool
  - Wasp API
  - REST API
  - Fair roulette
image: http://blog.iota.org/content/images/size/w1600/2021/10/Group-4947.png
---

在本文中，您將了解去中心化應用程序 (dApp) 的工作原理以及用戶如何與它們進行交互。

## 在 IOTA 智能合約上構建 dApp

去中心化應用程序（dApps）是在去中心化計算系統上運行的計算機應用程序，如 IOTA 智能合約。

IOTA 智能合約使您能夠使用您喜歡的編程語言、為用戶設置費用模型、為驗證者提供激勵和委員會結構。

dApp 有一些令人興奮的方面：

- **沒有停機時間**: dApps 基於點對點系統，即使個別計算機或部分網絡離線，dApps 也能繼續工作。
- **抗審查**: 由於不存在單點故障，並且基於糾纏，因此無法接管網絡。
- **開源**: 這給 dApp 帶來了更多的信任。由於源代碼是公開的，它可以被許多開發人員驗證和改進。

## 架構

去中心化應用程序由一個或多個智能合約和一個用戶界面組成。用戶界面通常是與智能合約交互的網站。

### 與智能合約交流

與 IOTA 智能合約交流的方式有兩種：

- [帳上](/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests): 對智能合約的請求是糾纏上的交易。
- [帳外](/smart-contracts/guide/core_concepts/smartcontract-interaction/off-ledger-requests): 使用 API 調用將請求發送到黃蜂節點。

你可以[配置你的 Wasp 節點的 API URL]/smart-contracts/guide/chains_and_nodes/running-a-node#web-api)，或使用 [公共黃蜂 REST API](https://api.wasp.sc.iota.org/doc).

## 例子

部署了幾個不同的示例應用程序在 [公共測試網](/smart-contracts/guide/chains_and_nodes/testnet) chain.

### 公平輪盤賭

![公平輪盤賭](http://blog.iota.org/content/images/size/w1600/2021/10/Group-4947.png)

[公平輪盤賭例子](/smart-contracts/guide/example_projects/fair_roulette) 是一個簡單的投注遊戲，玩家可以在一定範圍內投註一個數字。

- 玩 [現場演示](https://demo.sc.iota.org/).
- 發現 [代碼庫](https://github.com/iotaledger/wasp/tree/roulette_poc/contracts/rust/fairroulette).

更多用 Rust 和 Go (TinyGo) 編寫的 Wasm 智能合約示例可以在 [Wasp 代碼存儲庫] 中找到 (https://github.com/iotaledger/wasp/tree/master/contracts/wasm).

---

- 了解更多關於 [帳上](/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests) 以及 [帳外要求](/smart-contracts/guide/core_concepts/smartcontract-interaction/off-ledger-requests).
- 參與 [公共測試網](/smart-contracts/guide/chains_and_nodes/testnet).
- 使用 [Schema Tool] 構建您的第一個 dApp(/smart-contracts/guide/schema).
