---
id: value-transfer
title: Value Transfer
description: Learn how the IOTA Cryptocurrency Protocol transfers the native IOTA Tokens.
---

# IOTA 價值交易

本頁解釋了 IOTA 代幣如何在 IOTA 網絡中發送和接收，並鏈接到更詳細的內容。

## 簡單的例子：

為了解釋 IOTA 代幣如何從一個地址轉移到另一個地址，本主題遵循三個字符：Alice、Bob 和 Charlie。

### 目標

Charlie 想將 10i 轉移給 Bob。

### 糾纏中有什麼

在這個例子中，Alice 有 10i 轉給 Bob。因此，糾纏現在包含一個將這些 10i 轉移給 Bob 的價值訊息。

### 選擇附加訊息的位置

要將 10i 轉移給 Bob，Charlie 必須將價值訊息附加到糾纏。為此，他需要 1 到 8 條可以附加到自己的訊息中的提示訊息。

為了獲得這些提示訊息，Charlie 從一個節點請求它們。

節點通過使用一種稱為 **Uniform Random Tip Selection** (URTS) 的算法來選擇這些訊息。該算法選擇 1 到 8 條有效的提示訊息，這些提示訊息會導致有效的分類帳狀態。

- 帳本狀態是所有在糾纏中轉移 IOTA 代幣的價值訊息的記錄，包括地址上所有餘額的狀態。這種狀態必須始終保持平衡：IOTA 代幣的總數必須始終與總供應量相加。

通過使用節點給他的提示訊息，Charlie 讓網絡知道他也在批准他們和他們的歷史。如果這些訊息中的任何一條被證明是無效的，Charlie 的訊息也將被視為無效，其他節點在節點選擇期間不會選擇 Charlie 的訊息。
- 在提示選擇期間，節點會忽略糾纏的無效部分。這些術語是 **無效的子糾纏**。

### 簽署訊息

為了向節點證明他確實是他地址中 IOTA 代幣的所有者，Charlie 用他的私鑰簽署了一條輸入訊息。此輸入訊息從他的地址中提取 10i。

Charlie 然後創建一個輸出訊息，將該 10i 存入 Bob 的地址。此訊息不需要簽名，因為它不會提取 IOTA 代幣。

然後 Charlie 將所有訊息放入 UTXO 中，並將它們發送到 IOTA 網絡上的節點。

### 等待訊息被確認

任何人都可以隨時向節點發送訊息。因此，選擇有效的提示訊息並不總是一件簡單的事情。但是，里程碑根據確定性排序確定包含和確認哪些訊息。

例如，如果 Alice 實際上將兩條訊息附加到糾纏：一條將 10i 傳輸給 Bob，另一條將 10i 傳輸給 Charlie？這些消息一起被稱為**雙花**，因為它們試圖將相同的 IOTA 代幣轉移到不同的地址。

Both of Alice's messages could not be part of the ledger state because it would result in a negative balance for Alice’s address: minus 10i.

Messages in the Tangle are confirmed by special messages called **milestones**. Milestones are issued by a special node called Coordinator, which is operated by the IOTA Foundation and is therefore still a centralized part of the Consensus.

After Charlie's message is confirmed by a milestone, the nodes update his and Bob's balances to reflect the transfer of 10i to Bob's address. Bob can now spend his new IOTA tokens.

Let's go a bit more into details and observe the single steps taken by the participants:

## Clients

Everything starts with a client. A client is a software that initiates and creates IOTA transactions for a user (whether human, machine or device). Most clients for users will come in the form of a wallet software like the [IOTA Firefly Wallet](https://firefly.iota.org/).

Simple command-line tools for professional users, like the [CLI Wallet](https://github.com/iotaledger/cli-wallet/), are also available.

Machines, sensors, and devices, etc. will use the code of the IOTA wallet libraries to create and execute the transactions autonomously.

To send a value transaction into the IOTA network, a client creates an IOTA message that includes a **signed transaction payload**. In this payload, all the data is specified to tell the IOTA network how many tokens from address A (owned by the issuer of the message) should be transferred to address B and makes it possible to upgrade the state of the IOTA Ledger accordingly.

The signed transaction payload must contain a digital signature that guarantees that the sender of the transaction is the owner of the address where those funds are currently stored. This is guaranteed through signing the transaction with the private key of that address. A public key, which is also part of the message, will be used to validate the ownership of the funds. Read more about how private and public keys work together to establish this here:

The next step will be that the client connects to a node in the IOTA network and asks this node for valid tips to include in the message. After the tips (between one and eight previous messages of the tangle) are known to the client, they can be included in the message and therefore create a reference path for this message in the Tangle. Finally, the client now submits this message (that includes the transaction payload) for validation and processing to the node.

## Nodes

Nodes are the bookkeepers, decision-makers, and validators of all information in the IOTA network. Every node in the IOTA network knows the exact status and containing value of all existing addresses in the IOTA network at any given time. This is called **the ledger state**.

A Node is also the entry point for clients into the network. The clients submit messages to the node over a specified port in the node. The node collects all arriving traffic of this entry port in his inbox and first checks if the message is correctly formatted and can be processed.

If all bits of the message are readable for the node and the node detects the signed transaction payload included in the message, a validation process starts.

Firstly, the node verifies if the address that tries to send these funds has the needed balance to do this. So he checks his current knowledge of that address (his ledger state) to see whether the address has enough funds. The node also checks that no conflicts are known in the network that would make it possible to spend more funds than are currently located on the address (in other words, a double spend). So if there is another message currently present and know for the node that wants to spend the same funds of the address, a conflict is detected and both messages will be processed into conflict resolution - more about this process later.

If no conflicts are detected, the next step for a node is to submit the requested update of the ledger state: "remove amount Funds x from address A and add those amount to address B". Submitting happens via the so-called **gossip protocol**.

The node sends its updated ledger state to all its directly connected neighboring nodes. Every node is connected to several other nodes. Those nodes receive the updated ledger state from their neighbors. Every node compares the request to its currently known version of the ledger and checks again for conflicts. If no conflicts are found, the node updates his ledger state and sends the updated state to his neighbors again.

This leads to an extremely fast propagation of ledger updates through the network and in a few seconds, it has reached every node in the network and is therefore accepted and confirmed. In this stage, the message has reached full confirmation and is considered solid. It will now be added to the tip pool of every node and can be used as a reference by new messages.
