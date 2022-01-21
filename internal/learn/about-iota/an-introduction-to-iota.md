---
id: an-introduction-to-iota
title: An Introduction to IOTA
description: A basic introduction to the IOTA DLT Technology. The use-cases and
  the Ecosystem developed around it.
---

# IOTA 簡介

**本主題簡要概述並描述了 IOTA 的 糾纏 (Tangle)和區塊鏈 (Blockchain)之間的一些主要區別。**

區塊鏈和糾纏都屬於同一類別的分散式帳本技術(DLT)。

區塊鏈和糾纏的主要區別如下：

- 在區塊鏈中，新交易只能附加到單個點（新塊）。該塊在先前生成的塊之後，並直接以密碼方式鏈接到該先前塊。區塊鏈中的交易只有被區塊生產者（PoW 區塊鏈中的礦工、PoS 區塊鏈中的質押者）包含在新發行的區塊中，才能成為分類帳（餘額和帳戶的記錄）的一部分。在幾乎所有的區塊鏈中，區塊生產者都可以決定他們喜歡在他們生產的區塊中包含和確認哪些新交易。這導致新發行的交易之間競爭成為新區塊的一部分。這些區塊鏈的基於費用的激勵結構有利於願意為交易支付更高費用的用戶，因為與提供較低費用的用戶相比，他們更有可能包含在新區塊中。
- 在糾纏中，沒有區塊生產者，因此每個用戶都可以自由地發布新交易並將它們附加到不同的糾纏部分，而無需充當中間人的實體。糾纏不是一個相互跟隨的單一區塊鏈。它是一個平行處理的交易網絡（所謂的 Tips）。這種平行交易形成了糾纏的“前端”，並為附加新發行的交易提供了許多不同的點，從而大大加快了交易的處理速度。網絡中的每個節點都可以隨時自由地將新交易附加到網絡。不需要任何實體來決定何時以及是否包含這些交易。只要它們遵循協議的基本規則（有效簽名/沒有資金雙重支出），這些交易將成為分類帳的一部分，只需將它們發佈到節點即可。
- 與此相反，區塊鏈交易必須由區塊生產者包含在區塊中。這些實體收集新發行的交易、驗證它們並將它們包含在下一個區塊中。區塊鏈必須始終選擇一個領導者作為區塊生產者，以將新區塊附加到區塊鏈。只有這個單一的區塊生產者將獲得作為已發行區塊一部分的交易的所有費用，並獲得產生區塊的獎勵（以新創建的代幣的形式）。這也被視為區塊鏈中的一種中心化形式，因為您需要中間人來處理您的交易。普通用戶不允許直接寫入帳本。這導致了眾所周知的“礦工競賽”，其中只有具有最高計算處理能力的礦工，或擁有最高權益的質押者，才有合理的機會成為區塊生產者，並被允許附加一個新區塊，包括他們處理的區塊交易到帳本。其他礦工在解決密碼難題的競賽中使用的所有電力都被浪費了，因為他們嘗試的區塊永遠不會成為區塊鏈的一部分。
- 相比之下，IOTA 是一個無領導者協議。它不需要任何中間人將交易包含在 糾纏中。只要遵循協議的基本佈局設計，每個人都可以自由附加交易。無需選舉領導者，因為糾纏能夠在平行處理中實現新事務。因此，IOTA 是一個多執行緒的分類帳。這也是 IOTA 可以達到非常高的交易吞吐量並保持無手續費的原因之一。

要解釋這些要點，您需要了解這些分散式帳本技術中數據結構和共識機制之間的差異。

**區塊鏈與纏結**

![layer1-tangle](/img/learn/layer1-tangle.png)

## The blockchain data structure

The blockchain data structure consists of a chain of sequential blocks, where each block contains a limited number of messages. As a result, Validators can attach new messages to only one place: a block at the end of the chain. Due to this limitation, blockchain networks often experience slow confirmation times. This limitation is known as the blockchain bottleneck.

**Blockchain bottleneck**

![blockchain-bottleneck](/img/learn/blockchain-bottleneck.gif)

All transactions in a blockchain have to wait until they are included in a block. Due to block size and block production time limitations, this creates congestion and waiting times for transactions.

## The Tangle data structure

The Tangle data structure is a directed acyclic graph (DAG), where each message is attached to two to eight previous ones. Rather than being limited to a single place for attaching new messages, you can attach messages in different places at the front of the Tangle. The protocol can process these various attachments in parallel.

**Tangle bottleneck**

![tangle-bottleneck](/img/learn/tangle-bottleneck.gif)

Allowing parallel processing removes congestion.

## Consensus in a blockchain

In blockchains, the network participants are divided into validators (miners, stakers) and users. Miners consume large amounts of computing power to complete the proof of work (PoW) required to chain the blocks together. Miners and stakers are incentivized to validate messages because of the following:

- The fees that users are willing to pay to have their messages included in a block
- The reward that the network pays out in the form of freshly created tokens to the validators for producing the new block.

The only way to reverse messages in a POW blockchain is to mine a new blockchain in the same amount of time it takes other miners to mine a single block. To do so, a miner would need 51% of the network's ability to do PoW, known as hash power. As a result, requiring validators to do PoW secures blockchain networks by making it difficult to attack, change, or stop. The more miners participate, the more secure the network is.

Producing blocks in a proof of stake (PoS) Blockchain usually requires a staker to own vast amounts of staked tokens. Often only a few selected or fixed Validators are granted to be block producers. These entities are pre-defined by the protocol's creators (a form of centralization) or emerge as validators holding the most significant stake of tokens. PoS blockchains do not require enormous amounts of energy wasted for PoW, but therefore only allow the wealthiest participants to write to the ledger and produce new blocks.

## Consensus in the Tangle

Sending messages requires no fees in the Tangle because the network has no miners or stakers. In the Tangle, PoW is not used to secure the network. Instead, PoW is used only to discourage spam messages. All IOTA nodes validate messages and use different functions alongside messages in their confirmation to reach consensus. Currently, messages will only be considered valid if they reference a milestone. These milestones are issued by a special network node – the Coordinator.

## The Coordinator

The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. This topic describes how nodes use milestones to determine which messages are confirmed.

The Coordinator is a temporary solution. IOTA will remove the Coordinator in the upcoming IOTA 2.0 network. The following text describes how the Coordinator is currently deployed within IOTA.

Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated.

To allow the nodes to recognize valid milestones, all nodes that participate in the same IOTA network are configured with the Ed25519 signatures of a coordinator they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them.

To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network.

![coordinator](/img/learn/milestones.gif)
