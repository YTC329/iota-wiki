---
id: smart-contracts-consensus
title: Consensus
description: In this article you will learn how the IOTA Smart Contract Consensus works.
keywords:
  - Cosensus
  - Smart Contracts
  - wasp
  - ISCP
---

在本文中，您將了解 IOTA 智能合約共識的工作原理。

IOTA 智能合約是一個分片的智能合約網絡，每個智能合約鏈都受到其自身可擴展性的限制，不受網絡其餘部分的阻礙。

該委員會的規模是固定的，因此我們使用拜占庭容錯算法，如果少於 1/3 的節點是惡意的，該算法可以保證一致性和拜占庭容錯。因此，驗證過程在鏈委員會內的節點上運行。

## 分佈式處理器

驗證意味著當您需要確定您是否信任智能合約的狀態時，您自己重新運行程序。相反，為了使狀態轉換可信，運行 SC 程序的處理器需要是可信的。

這就是智能合約由分佈式處理器運行的原因。術語“分佈式處理器”是指許多處理器執行相同的計算並就這些計算的結果達成共識。這種共識反映在下一個更新鏈狀態的塊中。

在以太坊的情況下，整個網絡就是那個分佈式處理器。
IOTA 智能合約在“拜占庭容錯”設置中使用法定多數投票來確定不同處理器委員會達成的共識。

它應該只可能產生輸入的有效簽名
通過達到節點委員會中的法定人數來進行錨定交易。在這種情況下，確認的錨定交易成為委員會共識的加密證明。

## BLS 閾值簽名

IOTA 智能合約使用 BLS 加密和閾值簽名與多項式 (Shamir) 秘密共享相結合來實現上述要求。
簡而言之，IOTA 智能合約使用 BLS 地址作為鏈狀態被鎖定的鏈帳戶的狀態地址（控制地址）。秘密共享和閾值簽名允許通過 N 個密鑰（部分私鑰）中的任何 T 個來控制地址，其中 N 是委員會的規模，T 是法定人數因子。

“地址控制”是指能夠產生交易的有效簽名到相應地址的能力。在閾值簽名中，有效（主）簽名可以從 N 個部分簽名中的任何 T 個重構。不需要所有 N 個，也不需要知道主私鑰來重建有效簽名。每個部分簽名都是 N 個密鑰中的一個的簽名，而這些密鑰中的每一個只有相應的委員會節點知道。

IOTA 智能合約在實施黃蜂時使用 Dedis Kyber 庫。 Go微光在其核心實現了 BLS 地址。這意味著 BLS 地址是傳統地址，交易中的 BLS 簽名可以像任何其他類型的簽名一樣由 IOTA 節點驗證。

---

- 在 [IOTA 智能合約架構描述] 中了解有關共識的更多信息(https://github.com/iotaledger/wasp/blob/master/documentation/ISC_WP_Nov_10_2021.pdf).
- 參與並使用[預配置開發Docker設置](/smart-contracts/guide/development_tools/docker_preconfigured).
- 使用構建去中心化應用程序[Schema Tool](/smart-contracts/guide/schema).
 
