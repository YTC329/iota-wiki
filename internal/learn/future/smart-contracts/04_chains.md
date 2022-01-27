---
id: smart-contracts-chains
title: Chains
description: In this article you will learn how the IOTA Smart Contract Chains works.
keywords:
  - Chains
  - Smart Contracts
  - wasp
  - ISCP
  - Multi-Chain
image: /img/learn/multichain.png
---

IOTA 智能合約是一個**多鏈**環境，這意味著您可以在 IOTA 糾纏上運行許多**平行鏈**：

- 每條鏈都有自己的狀態，可以在第二層（L2）上並行更新。
- 每個鏈狀態都錨定在第一層 (L1) 的 IOTA Tangle (UTXO Ledger) 上。
- 每條鏈都由一組驗證者（即委員會）進行驗證。
- 每條鏈可以包含多個智能合約。
- 每個智能合約都可以以去信任和分佈式的方式與其他鏈上的其他智能合約交換資產。

![多鏈環境](/img/learn/multichain.png)

IOTA 智能合約被定義為不可變狀態機：

- **狀態機**：每個智能合約都有一個狀態，該狀態附加到糾纏。狀態包含帳戶餘額、輸入條件和隨時間變化的後果等數據。每個狀態更新代表糾纏上的一個狀態轉換。

- **不可變**：狀態和智能合約程序代碼都是不可變的，因為它們存儲在糾纏中。可以通過將新交易附加到糾纏來逐步更新狀態。

糾纏提供了可驗證的狀態轉換審計跟踪。它允許我們相信狀態轉換是有效的，並且它們不會被惡意或錯誤的節點破壞。

## 鏈態

鏈的狀態包括：

- **原生 IOTA 數字資產或有色代幣的餘額**：該鏈充當這些資產的保管人。
- **任意鍵/值對的集合，數據狀態**：表示由 UTXO 分類帳之外的智能合約存儲在鏈中的特定用例數據。

鏈的狀態是由分佈式維護的僅附加（不可變）數據結構其驗證者的共識。

該鏈還包含未處理請求的分類帳積壓。

數據狀態存儲在帳本之外，由驗證節點維護的分佈式數據庫中。

## 鏈上數字資產

IOTA UTXO 賬本的本地 L1 賬戶由地址表示，每個地址由持有相應私鑰和公鑰對的實體控制。 L1 賬戶是屬於該地址的 UTXO 的集合。

同樣，鏈將所有委託給它的代幣保存在一個特殊的 UTXO 中，狀態輸出始終位於鏈控制的地址中。這類似於銀行如何將所有存款存放在其金庫中。這樣，鏈（實體控制狀態輸出) 成為其客戶擁有的資產的保管人，就像銀行的客戶擁有存入銀行的資金一樣。

## 補充閱讀

- 了解有關 [狀態、轉換和狀態錨定](/smart-contracts/guide/core_concepts/states).
- 參與 [公共測試網](/smart-contracts/guide/chains_and_nodes/testnet).
- 建立[在您的委員會上的鏈](/smart-contracts/guide/chains_and_nodes/setting-up-a-chain).
