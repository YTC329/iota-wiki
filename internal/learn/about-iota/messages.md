---
id: messages
title: Messages
description: This topic explores messages, models, and payloads that encompass
  the transfer of data within the Tangle.
---

# 訊息

訊息是節點在網絡中閒聊的對象。它總是引用 2 到 8 條其他消息，稱為 **父級**。它存儲為節點維護的糾纏數據結構上的一個頂點。

訊息可以包含有效負載。其中一些是核心有效載荷，作為核心協議的一部分由所有節點處理。其他是社區有效負載，可以在糾纏之上構建新功能。並且一些有效載荷中嵌入了其他嵌套的有效載荷。因此，訊息的解析是逐層完成的，以確保嵌入的有效負載也具有正確的語法結構。

## UTXO

以前IOTA 協議使用交易 (纏結中的頂點)，其中每個交易定義一個輸入或一個輸出。這些輸入/輸出事務頂點的分組組成了一個捆綁包，將給定值作為一個原子單元傳輸。但這種方法被認為過於耗時。因此，我們採用了一種新的交易結構，稱為**未使用的交易輸出**（UTXO）。


UTXO 模型定義了一種帳本狀態，其中餘額不直接與地址相關聯，而是與交易的輸出相關聯。在此模型中，交易將先前交易的輸出指定為輸入，這些輸入用於創建新的輸出。交易必須消耗整個指定的輸入。

![utxo模型](/img/learn/about-iota/utxo.png)

因此，UTXO 是一個更大、獨立且靈活的訊息結構的一部分，稱為**有效負載**。這種方法旨在啟用一個自包含的訊息結構，將整個傳輸的數據定義為嵌入到訊息中的有效負載。

總的來說，這些有效載荷結構很簡單：

| 名稱         | 種類      | 描述                                          |
| ------------ | --------- | ---------------------------------------------------- |
| 有效載荷類型 | uint32    | 必須設置為 **2**                             |
| 索引        | 字串    | 訊息的索引鍵，一個 UTF-8 編碼的字符串 |
| 資料         | ByteArray | 我們附上的數據                                |

此外，可以有三種類型的訊息有效負載：

- 交易有效負載
- 索引有效負載
- 里程碑有效負載

## 訊息有效負載

### 交易有效負載

交易有效負載由兩部分組成：

1. 交易本質部分，包含輸入、輸出和可選的嵌入式有效負載。
2. 解鎖塊，解鎖交易本質的輸入。如果解鎖塊包含簽名，它會對整個交易本質部分進行簽名。

通常，交易有效負載的所有部分都以描述給定部分類型的字節開頭，以保持將來引入給定部分的新類型/版本的靈活性。

而且，如上所述，交易本質的有效負載部分可以包含一個可選的有效負載。此有效負載不影響交易本質的有效性。如果交易無效，那麼有效載荷也必須被丟棄。

### 索引有效負載

有效負載的概念允許向封裝訊息以及一些任意數據添加索引。節點公開了一個應用程序編程接口，可以通過索引查詢訊息。索引有效負載也可以包含在交易有效負載中。

### 里程碑有效負載

里程碑有效負載包含里程碑本質，其中包含使用 Ed25519 簽名方案簽名的實際里程碑信息（如其索引號或纏結中的位置）。它使用 32 字節的密鑰，而生成的簽名是 64 字節。

為了提高設計的安全性，里程碑可以（選填）一次由多個密鑰獨立簽名。這些密鑰應該由運行在獨立基礎設施元素上的獨立簽名提供者服務來操作。這有助於降低攻擊者訪問偽造里程碑所需的所有關鍵材料的風險。

此外，還可以通過將密鑰有效性限制在某些里程碑間隔來實施密鑰輪換策略。

### 衝突

此外，如果消息發生衝突，里程碑可以通過僅應用不會違反分類帳狀態的第一條消息來強制執行確定性排序來確認它們；這是通過使用白旗功能來實現的。

## 驗證

最後，如果滿足以下句法規則，則認為訊息有效：

1. 訊息大小不得超過 32 KiB（32 \* 1024 字節）。
2. 訊息解析完成後，不應有任何未解析的尾隨字節。
3. 有效載荷類型是否在核心有效載荷範圍（0-127）並且節點熟悉，或者是否高於該範圍。
4. 如果訊息證明工作散列將至少包含節點根據需要定義的尾隨 0 trit 的數量。
5. 父級的長度必須在二到八之間。
