---
id: dust-protection
title: Dust Protection
description: Introduction to the history of dust protection in IOTA
keywords:
  - Dust
  - Chrysalis
  - Legacy
---

# IOTA防塵的演變

這篇簡短的說明試圖解釋防塵保護是如何隨著 IOTA 網絡的需求而發展的。

## IOTA 1.0

基於帳戶的分類帳。
每個地址都有一個代幣餘額。

沒有防塵保護。
因此，地址可以持有任何數量，低至 1 個 IOTA，交易可以小至 1 個 IOTA。

因此，帳本狀態可能會膨脹。

## IOTA 1.5

IOTA 切換到基於 UTXO 的分類帳。
每個地址現在可以保存多個 [UTXO](/learn/about-iota/messages#utxo)，每個都有自己的平衡。有關 UTXO 的更廣泛描述，請查看[此文章](https://medium.com/bitbees/what-the-heck-is-utxo-ca68f2651819)。
地址餘額計算為該地址上 UTXO 餘額的總和。

認識到帳本膨脹的風險，引入了防塵機制。
在考慮灰塵時，我們現在必須考慮 UTXO 而不是地址。正如我們將看到的，這真的很棘手。

IOTA 1.5 防塵的基本規則是“UTXO 不能低於 100 萬 IOTA (1 Mi)”。
試著記住這個非常重要的規則，因為它使得發送低於 1 Mi 的金額非常棘手！

要理解為什麼這很棘手，讓我們看一個示例，我嘗試將 10i 發送到已經包含 5 Mi 的地址。您可以假設您可以將 10i 添加到該 5 Mi，因此您總共有 5.00001 Mi，這符合基本的防塵規則。
但不是！

每個 UTXO 實際上是一個獨立的罐子，它只包含一個交易的輸出。在這種情況下，那個罐子將只包含您發送的 10i（即該交易的輸出）。因此，由於 UTXO 僅包含 10i，因此您違反了防塵規則。
（您可能需要重新閱讀幾次才能正確理解它）

為了克服這個問題，引入了一種稱為“灰塵餘量輸出”的特殊 UTXO。用戶現在可以將 1-10 Mi 鎖定在一個粉塵配額輸出上，然後在相關地址上每個存儲的 Mi 最多可以接收 10 個粉塵 UTXO。
例如，我在地址 A 上創建了一個 2 Mi 鎖定的灰塵允許輸出。您現在可以向地址 A 發送多達 20 個灰塵交易（灰塵交易是 1 Mi 以下的任何東西）。
用戶還可以掃描灰塵 UTXO——這意味著將多個灰塵 UTXO 組合成一個 UTXO（例如 1i + 1i + 1i -> 3i on 1 UTXO）。

這是一個合理的臨時解決方案，但不幸的是它與 IOTA 2.0 不兼容，因為它需要對糾纏進行總排序（以確定交易是否有效，以及是否滿足防塵規則）。 IOTA 2.0 沒有總排序。

## 新的標記化框架

引入了各種新的 UTXO 類型，它們可以向賬本中添加不同數量的數據（例如，用於 NFT、原生資產、別名），而無需任何 IOTA。因此，帳本膨脹的風險非常高。
1.5 的防塵保護也沒有為 IOTA 2.0 做好準備。因此，提出了一種新的防塵方案，可以解決這兩個問題。

新的防塵保護規則是：

1. 任何 UTXO 都必須包含最低存款（為了簡單起見，我們將這個 1 Mi 用於我們的示例）。
2. 任何 UTXO 可以保存的數據量與該 UTXO 上的 IOTA 量成正比。 IOTA 充當保證金以保護 Tangle 上的數據，您可以添加更多 IOTA 以添加更多數據。 IOTA 每字節的實際成本目前正在確定中，並且會隨著時間而變化。

為了發送小於 1 Mi 的金額，或者發送原生資產，我們引入了一個新的“條件發送”系統，它不需要糾纏的總排序（因此為 IOTA 2.0 做好了準備）。
如果我想將 10i 發送到已經擁有 5 Mi 的地址（假設最低存款為 1 Mi），讓我們看看這是如何工作的。和以前一樣，我不能只發送 10i，因為 UTXO 的值為 10i（遠低於 1 Mi 的最小值）。
我不能像 1.5 那樣使用特殊的灰塵 UTXO，因為這些需要糾纏的總排序。
相反，我使用“條件發送”：

1. 我將 10i 連同最低存款金額 (1 Mi) - 總共 1.00001 Mi（符合防塵標準） - 發送到目標地址。
2. 然而，這是一種特殊類型的交易，需要進一步的步驟才能完成。它必須由收件人“認領”。因此，此交易可能會發生 2 件事：
   a) 10i 由接收者認領 - 10i 與接收者自己的最低存款一起轉移到一個新的有效 UTXO。收件人需要自己的 1 Mi 存款才能領取 10i。同時將寄件人的 1 Mi 押金退還給寄件人。
   b) 10i 沒有在合理的時間段內（由發送者設置）被索取，並且 1.00001 Mi 的總量現在可以被發送者回收或花費（機制有點複雜，但這是描述它的最簡單的方式）。

#### 額外獎勵

這種有條件的發送也可以用作安全網，以防止發送到錯誤的地址。加密貨幣中的一個常見問題是，由於地址輸入錯誤，資金有時會轉移到不正確的地址 - 通常這個地址沒有所有者並且代幣永遠丟失！但是，如果這發生在有條件的發送中，那麼代幣不太可能在設定的時間段內被索取，並且總金額可以由發送者索取。一個非常有用的功能！

#### 最後說明

我們還在研究其他微交易機制，使流程更簡單，同時仍然遵守防塵規則。我們希望盡快與您分享更多內容。
