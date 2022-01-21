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

## **區塊鏈的資料結構**

區塊鏈資料結構由一系列順序塊組成，其中每個塊包含有限數量的消息。因此，驗證者只能將新消息附加到一個地方：鏈末端的一個塊。由於這一限制，區塊鍊網絡通常會經歷緩慢的確認時間。這種限制被稱為區塊鏈瓶頸。

**區塊鏈的瓶頸**

![blockchain-bottleneck](/img/learn/blockchain-bottleneck.gif)

區塊鏈中的所有交易都必須等到它們被包含在一個塊中。由於塊大小和塊生產時間的限制，這會造成交易的擁塞和等待時間。

## **纏結的資料結構**

Tangle的資料結構是一個有向無環圖 (DAG)，其中每條消息都附加到 2 到 8 個之前的消息。您可以在 Tangle 前面的不同位置附加消息，而不是僅限於附加新消息的單個位置。該協議可以平行處理這些不同的附件。

**纏結的瓶頸**

![tangle-bottleneck](/img/learn/tangle-bottleneck.gif)

允許平行處理消除了擁塞。

## **區塊鏈中的共識**

在區塊鏈中，網絡參與者分為驗證者（礦工、質押者）和用戶。礦工消耗大量計​​算能力來完成將塊鏈接在一起所需的工作量證明（PoW）。由於以下原因，礦工和質押者被激勵驗證消息：

- 用戶願意為將他們的消息包含在區塊中而支付的費用
- 網絡以新創建的代幣的形式向驗證者支付用於生成新塊的獎勵。

在 POW 區塊鏈中反轉消息的唯一方法是在與其他礦工挖掘單個區塊所需的時間相同的時間內挖掘新的區塊鏈。為此，礦工需要 51% 的網絡執行 PoW 的能力，即哈希算力。因此，要求驗證者進行 PoW 使得區塊鏈網絡難以被攻擊、更改或停止，從而保護了區塊鏈網絡。參與的礦工越多，網絡就越安全。

\
在權益證明 (PoS) 區塊鏈中生產區塊通常需要質押者擁有大量質押代幣。通常只有少數選定或固定的驗證者被授予成為區塊生產者。這些實體由協議的創建者（一種中心化形式）預先定義，或者作為持有最重要代幣權益的驗證者出現。 PoS 區塊鏈不需要為 PoW 浪費大量能源，因此只允許最富有的參與者寫入帳本並生成新區塊。

## Consensus in the Tangle

Sending messages requires no fees in the Tangle because the network has no miners or stakers. In the Tangle, PoW is not used to secure the network. Instead, PoW is used only to discourage spam messages. All IOTA nodes validate messages and use different functions alongside messages in their confirmation to reach consensus. Currently, messages will only be considered valid if they reference a milestone. These milestones are issued by a special network node – the Coordinator.

## The Coordinator

The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. This topic describes how nodes use milestones to determine which messages are confirmed.

The Coordinator is a temporary solution. IOTA will remove the Coordinator in the upcoming IOTA 2.0 network. The following text describes how the Coordinator is currently deployed within IOTA.

Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated.

To allow the nodes to recognize valid milestones, all nodes that participate in the same IOTA network are configured with the Ed25519 signatures of a coordinator they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them.

To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network.

![coordinator](/img/learn/milestones.gif)
