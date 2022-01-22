---
title: Data Transfer
description: A major use-case for the IOTA Technology is Data Transfer. Learn how it works.
---

# 數據傳輸

IOTA 提供免費傳輸數據的能力。數據傳輸快速、不可變、不可偽造且安全，是 IOTA 的核心功能之一。這種能力開闢了大多數其他加密貨幣無法做到，但IOTA卻能做到的廣泛用途。

客戶端，可以是錢包或應用程序，通過 IOTA 中的節點發送和接收訊息（數據對象）。節點是這些訊息的入口和出口點，這些節點相互通信並與連接的客戶端通信。

IOTA 中實現了幾種類型的訊息。有些訊息傳遞價值（IOTA 代幣或數字資產），而另一些只傳遞純數據，有些訊息類型甚至可以同時包含價值和數據。這種靈活的訊息結構可以在具有最高安全等級且完全不收費的單個訊息中實現數據和價值的分散傳輸。網絡節點負責糾纏中所有這些訊息的安全分發。

## 數據使用

許多應用程序和用例可以從這種免費、安全、快速的數據和價值傳輸的組合中獲益，這在許多主要行業都有需求。閱讀有關 [IOTA 數據用例] (https://www.iota.org/solutions/industries).

## 什麼是 IOTA 訊息？?

訊息是由糾纏中廣播的信息組成的物件。

每個使用該協議的應用程序都可以將這些信息對象發布給節點。 Iota 節點的工作是驗證傳入訊息並通過網絡廣播它們，如果它們被認為是有效的並遵循協議的標準規範。

如果一個節點確定一條訊息是有效的，它將使用 gossip 協議將它發送給它的直接鄰居。每個收到訊息的鄰居都會將其再次傳輸給它的鄰居，依此類推。很快，網絡中的每個其他節點都會看到該訊息，並且在給定時間對網路的“狀態”具有相同的信息和相同的知識。

訊息由定義訊息類型和結構的基本信息組成，還可以包含不同的**有效負載**。有效負載是一個附件，可以包含 IOTA 交易和許多其他類型的數據。


IOTA 協議將這些信息包分類為不同的類型，並以不同於其他類型的方式處理某些類型。因此，發送到網絡的每條訊息都必須包含一個唯一的標籤作為標識符，用於描述此訊息是什麼以及應該如何處理它。只有正確地陳述了此信息，節點才會接受並處理訊息。此協議級別的更詳細描述可以在[TIP-0006 (Tangle Message)](https://github.com/iotaledger/tips/blob/main/tips/TIP-0006/tip-0006.md)找到

## 在 IOTA 中發送訊息

所謂的客戶端創建訊息。這些客戶端可以是 IOTA 錢包或任何其他生成 IOTA 訊息的應用程序。客戶端將這些訊息發送到 IOTA 節點以進行處理。

為了確保訊息有效並且節點知道如何處理該訊息，客戶端創建的訊息標籤必須提供幾條信息供節點處理並進入網絡。

**訊息 ID**

訊息ID創建為訊息中包含的字節的唯一加密哈希。它由發出訊息的客戶端（應用程序）或錢包創建。

**網路 ID**

訊息所屬的 IOTA 網絡（主網/測試網/私有網絡）的標識 - 節點將僅接受將自己標識為節點所屬網絡的訊息。

**父級長度和父級ID**

這是新訊息引用的訊息的數量和標識符。為了構建 Tangle 的圖結構，Tangle 中的每條新訊息都必須引用 2 - 8 條之前的訊息。節點選擇這兩條訊息並將 ID 發送給客戶端，客戶端必須將此信息包含在訊息“標籤”中。因此，節點確保 Tangle 的數據結構按照協議中的規定進行演變。

**有效負載長度**

因為 IOTA 中的訊息不允許超過 32kb 的大小，所以訊息必須向節點聲明其有效負載的大小......就像如果你想用快遞發送包裹，你需要事先報告包裹的重量。

**有效負載類別**

定義哪種類型的有效負載是訊息的一部分。節點需要知道這一點，因為某些有效負載類型的處理方式與其他類型不同。

**隨機數**

就是隨機數讓這個訊息滿足PoW的需求。PoW主要在發出訊息的設備上本地完成，是一種垃圾郵件保護形式。但是如果節點允許，PoW 可以由節點而不是客戶端來完成。這是一個方便的功能，因為它使功率非常低的設備能夠發布訊息（如傳感器、芯片等），而無需在本地設備中執行 PoW。如果連接到允許遠程 PoW 的節點，這些低功耗設備可以發送訊息，並且節點（通常在更強大的設備上運行）為它們執行 PoW。這也是 IOTA 如此適合物聯網和數據應用的原因之一。計劃從大量極低功耗設備發出許多數據訊息的用戶只需將這些設備連接到允許他們為它們執行 PoW 的節點（在大多數情況下，這將是他們自己的節點）。由於IOTA中的PoW要求一般都非常低，即使是大量設備也可以透過一個節點做到。

附註 - 在即將到來的 2.0 IOTA 版本中，此 PoW 要求將變得調適，並計劃在正常網絡負載時完全刪除...閱讀有關 [IOTA 2.0](/build/networks/iota-2.0).

## 訊息結構

這是 IOTA 協議中每條消息的定義語法結構（我們組件的標籤）：

<table>
    <tr>
        <th>名稱</th>
        <th>類別</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>網路ID</td>
        <td>uint64</td>
        <td>網絡標識符。此字段將表示此訊息是用於主網、測試網還是專用網。它還說明了適用於訊息的協議規則。它是網絡類型和協議版本字符串串聯的“BLAKE2b-256”哈希的前 8 個字節。</td>
        </tr>
    <tr>
        <td> Parents' length </td>
        <td> uint8</td>
        <td> The number of messages we directly approve. Can be any value between 1-8.</td>
    </tr>
    <tr>
        <td>Parents </td>
        <td>ByteArray[32 * `parents length`]</td>
        <td>The Message IDs that are referenced.</td>
    </tr>
    <tr>
        <td>Payload Length</td>
        <td>uint32</td>
        <td> The length of the payload. Since its type may be unknown to the node it must be declared in advance. 0 length means no payload will be attached.</td>
    </tr>
    <tr>
        <td colspan="1">
            Payload
        </td>
        <td colspan="2">
            <details open="true">
                <summary>Generic Payload</summary>
                <blockquote>
                An outline of a general payload
                </blockquote>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Payload Type</td>
                        <td>uint32</td>
                        <td>
                            The type of the payload. It will instruct the node on how to parse the fields that follow.
                        </td>
                    </tr>
                    <tr>
                        <td>Data Fields</td>
                        <td>ANY</td>
                        <td>A sequence of fields, where the structure depends on <code>payload type</code>.</td>
                    </tr>
                </table>
            </details>
        </td>
    </tr>
    <tr>
        <td>Nonce</td>
        <td>uint64</td>
        <td>The nonce which lets this message fulfill the Proof-of-Work requirement.</td>
    </tr>
</table>

All this information must be created by a client (wallet software or other programs that generate IOTA messages) to issue a message to a node and make sure the node knows what to do with this message.

### Message validation

A message is considered valid if the following syntactic rules are met:

1. The message size must not exceed 32 KiB (32 \* 1024 bytes).
2. Analyzing the Syntax structure of the message (parsing) does not leave any unknown bits - this means that all the message information is fully readable by the node... unreadable information could contain malicious code and is therefore denied.
3. If the payload type is known to the node.
4. If the Message PoW Hash indicates that the minimum requirements of PoW requested by the network or the node have been fulfilled.
5. Number of parent messages must be between 1-8.

The message will only be accepted for processing if these parameters are met and readable by the node.

### Payloads

A message may contain a payload. Three payload types are currently defined in the mainnet, but developers can create their custom payloads and attach them to messages as long as they fit the general requirements. This means an IOTA message can contain many types of information, and the IOTA token as transaction payload is just one of many. Below is a table of the currently specified core payloads with a link to their specifications.

| Payload Name                                                                                                    | Type Value |
| --------------------------------------------------------------------------------------------------------------- | ---------- |
| [Transaction Payload](https://github.com/iotaledger/tips/blob/main/tips/TIP-0007/tip-0007.md)                   | 0          |
| [Milestone Payload](https://github.com/iotaledger/tips/blob/main/tips/TIP-0008/tip-0008.md)                     | 1          |
| [Indexation Payload](https://github.com/iotaledger/tips/blob/main/tips/TIP-0006/tip-0006.md#indexation-payload) | 2          |

A message containing only an **indexation payload** (Data) can be sent without a signature. It can hold any data the user wants to send, as long as it is parsable and follows the required syntax and size limit.

The message is specified by an **index**, which will make it possible for any users to find this message and the containing Data by searching the network for this index.

As you may have recognized, a message in the IOTA network does not need a specific receiver. All messages in the network are propagated to all nodes and are visible to every network user. Also, the data payload (if not encrypted by the sender) is visible for everyone that sees the message. If you want to send a data message using the IOTA protocol that should only be visible to a selected group of receivers, the IOTA Streams framework is built precisely for this purpose. It will enable a direct gateway to receivers and encrypt the information from everyone else in the network. 

A **data message**, which is defined as an indexation payload, can be easily found by everyone who knows that message's index. If you want to send an arbitrary message or sensitive data, you need to tell the receiver which index you are using. He can observe the network for all messages containing this index using an explorer.

In a **value transaction**, the payment receiver - an IOTA address - will be specified in the "signed transaction payload" field. Then, only the owner of that specific address can use the contained funds by unlocking them with the private key that belongs to that receiving address. Read more about how sending value transactions in IOTA work here: [value transfer](/learn/about-iota/value-transfer)

As the IOTA protocol is continuously improving, a new specification for payloads has been developed to dramatically extend the functionality of messages and payloads. Please read the [IOTA tokenization framework](https://blog.iota.org/iota-tokenization-framework-specifications/) specifications.
Those changes will be implemented after intensive testing in the next update of the IOTA mainnet.
