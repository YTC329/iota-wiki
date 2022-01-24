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

Additionally, there can be three types of message payloads:

- A transaction payload
- An indexation payload
- A milestone payload

## Message payloads

### Transaction payload

A transaction payload is made up of two parts:

1. The Transaction Essence part, which contains the inputs, outputs, and an optional embedded payload.
2. The Unlock Blocks, which unlocks the Transaction Essence's inputs. In case the unlock block contains a signature, it signs the entire Transaction Essence part.

In general, all parts of a transaction payload begin with a byte describing the type of the given part to keep the flexibility to introduce new types/versions of the given part in the future.

And, as mentioned above, the payload part of a Transaction Essence can hold an optional payload. This payload does not affect the validity of the Transaction Essence. If the transaction is not valid, then the payload must also be discarded.

### Indexation payload

The concept of the payload allows for the addition of an index to the encapsulating message, as well as some arbitrary data. Nodes expose an application programming interface that enables the querying of messages by the index. Index payloads may also be contained within a transaction payload.

### Milestone payload

A milestone payload contains the Milestone Essence, which consists of the actual milestone information (like its index number or position in the tangle), which is signed using the Ed25519 signature scheme. It uses keys of 32 bytes, while the generated signatures are 64 bytes.

To increase the security of the design, a milestone can (optionally) be independently signed by multiple keys at once. These keys should be operated by detached signature provider services running on independent infrastructure elements. This assists in mitigating the risk of an attacker having access to all the key material necessary for forging milestones.

In addition, a key rotation policy can also be enforced by limiting key validity to certain milestone intervals.

### Conflict

Additionally, if messages conflict, milestones can confirm them by enforcing deterministic ordering by applying only the first message that will not violate the ledger state; this is accomplished by using the White Flag feature.

## Validation

Finally, a message is considered valid if the following syntactic rules are met:

1. The message size must not exceed 32 KiB (32 \* 1024 bytes).
2. When parsing the message is complete, there should not be any trailing bytes left that were not parsed.
3. If the payload type is in the core payload range (0-127) and the node is familiar with it, or if it is above this range.
4. If the Message Proof of Work Hash will contain at least the number of trailing 0 trits the node defines as required.
5. Parents' length must be between two and eight.
