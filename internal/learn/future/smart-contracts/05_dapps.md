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

### Interacting With Smart Contracts

There are two ways to interact with IOTA Smart Contracts:

- [On-ledger](/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests): Requests to the smart contract are transactions on the Tangle.
- [Off-ledger](/smart-contracts/guide/core_concepts/smartcontract-interaction/off-ledger-requests): The requests are sent using an API call to a Wasp node.

You can [configure your Wasp node's API URL](/smart-contracts/guide/chains_and_nodes/running-a-node#web-api), or use the [public Wasp REST API](https://api.wasp.sc.iota.org/doc).

## Examples

There are several different example applications deployed on the [public test-net](/smart-contracts/guide/chains_and_nodes/testnet) chain.

### Fair Roulette

![Fair Roulette](http://blog.iota.org/content/images/size/w1600/2021/10/Group-4947.png)

The [Fair roulette example](/smart-contracts/guide/example_projects/fair_roulette) is a simple betting game in which players can bet on a number within a certain range.

- Play with the [Live Demo](https://demo.sc.iota.org/).
- Discover the [Code Repository](https://github.com/iotaledger/wasp/tree/roulette_poc/contracts/rust/fairroulette).

More examples for Wasm Smart Contracts written in Rust and Go (TinyGo) can be found in the [Wasp code repository](https://github.com/iotaledger/wasp/tree/master/contracts/wasm).

---

- Learn more about [On-ledger](/smart-contracts/guide/core_concepts/smartcontract-interaction/on-ledger-requests) and [Off-ledger Requests](/smart-contracts/guide/core_concepts/smartcontract-interaction/off-ledger-requests).
- Participate on the [public testnet](/smart-contracts/guide/chains_and_nodes/testnet).
- Build your first dApp with the [Schema Tool](/smart-contracts/guide/schema).
