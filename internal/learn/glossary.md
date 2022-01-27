---
title: Glossary
description: Glossary of all specialized names and phrases used in the IOTA
  Technology. If you dont understand a wording you will find answers here.
---

# Glossary

## A

- **Address Checksum (地址校驗和):** 校驗和驗證是一種確定地址是否有效且不包含拼寫錯誤的方法。
- **Adaptive PoW (自適應 PoW)** (為了IOTA 1.5開發中):借助此功能，協調者可以發布里程碑並同時設置未來的 PoW 分數。這意味著如果網絡沒有得到充分利用，PoW 將減少到可以由微設備執行的程度。因此，協調者在利用率高的情況下也可以提高 PoW 難度，從而使攻擊變得非常昂貴。
- **Auto peering (自動對等):** 一種允許節點自動選擇其鄰居而無需節點操作員手動干預的機制。
- **API(Application Programming Interfaces) (應用程序編程接口):** 應用程序與糾纏交互的方式。
- **Atomic Transactions 原子交易:** IOTA 1.5 沒有使用 bundle 結構，而是使用更簡單的原子交易。原子交易將與交易相關的所有內容包含在單個訊息中，而不是將其拆分（捆綁）。這減少了網絡開銷和簽名驗證負載，改進了垃圾郵件保護和速率控制，並縮短了 Merkle 證明的長度（用於未來的分片）。它還減少了實現開銷並提高了核心節點軟件的可維護性。
- **Application Layer (應用層) (IOTA 2.0):** 三層通信協議的頂層。 IOTA 協議允許各種外部應用程序在 Message Tangle 上運行。任何人都可以設計應用程序，用戶可以決定在他們的節點上運行哪些應用程序。這些應用程序都將使用通信層來傳輸和存儲數據。
- **Approval Switch (批准開關) (IOTA 2.0):** 當一條訊息被選為父級訊息時，我們可以從強或弱提示池中進行選擇。這種機制稱為批准開關。
- **Approval Weight (批准權重) (IOTA 2.0):** 訊息通過直接或間接批准訊息獲得Mana權重。然而，只有強父級才能將Mana權重傳給過去，而弱父級從弱孩子那裡得到了權重，但不會將其傳遞下去。
- **Approvers (審批人) (IOTA 2.0):** 父級通過稱為批准者的參考消息獲得批准。因此，它是父級的反向映射。正如父級的定義一樣，批准者可能是強者，也可能是弱者。

## B

- **Balance (餘額):** 地址（帳戶）上的資金。這些始終可用，不能刪除或忘記。
- **Blockchain Bottleneck (區塊鏈瓶頸):** 發出的交易越多，出塊率和大小就越會成為系統的瓶頸。不再可能以迅速的方式捕獲所有傳入的交易。加快塊速率的嘗試會導致更多的孤立塊（塊被留下）並降低區塊鏈的安全性。
- **Branch (分支) (IOTA 2.0):** 與其他版本暫時共存的分類帳版本，每個版本都由衝突的交易產生。
- **Bee (蜜蜂):** IOTA 基金會使用 Rust 編程語言開發的節點軟件。
- **Bootstrapping attack (自舉攻擊):** 節點下載惡意快照文件的攻擊，包括無效交易和餘額。

## C

- **Curl (捲曲):** 這是當前使用的哈希函數之一。它基於 Keccak 發明者 (SHA-3) 的“海綿”結構。
- **Confirmed (已確認):** 確認交易。在 IOTA 1.5 中，糾纏中的訊息僅在被協調器節點已驗證的里程碑直接或間接引用時才被考慮進行確認。
  為了允許節點識別里程碑，參與同一 IOTA 網絡的所有節點都配置有他們信任的協調器的 Merkle 根地址以確認消息。使用此地址，節點可以驗證里程碑中的簽名，以驗證受信任的協調者是否對其進行簽名。為確保新消息始終有機會得到確認，協調器會定期發送索引里程碑。這樣，節點可以比較其里程碑的索引，以檢查它們是否與網絡的其餘部分同步。
- **CTPS (Confirmed transactions per second.):** 每秒確認交易。
- **累積權重:** 評估交易的系統。每個引用交易的附加交易都會增加其累積權重。當選擇提示時，首選具有較高累積權重的交易路徑。
- **ComNet:** ComNet 是一個僅用於測試的網絡，除了由 IOTA 社區維護之外，它與測試網類似。通信網中的節點繼續使用由 IOTA 社區運營的協調器。
- **Chronicle (編年史):** IOTA 基金會的永久節點解決方案。它允許將到達節點的所有事務存儲在安全且可擴展的分佈式數據庫中。 編年史用於存儲糾纏的無限數據流並使其可查詢。換句話說，持久性允許無限期地存儲 Tangle 的整個歷史，並使這些數據易於訪問。
- **Consensus (共識):** 在存在錯誤流程的情況下，就分佈式多代理系統中的特定日期或值達成一致。
- **Coordinator (協調員) (直到 IOTA 2.0):** 一個受信任的實體，作為對惡意交易的保護。糾纏還不是最終產品，它仍處於測試階段。該網絡目前依賴於一種屏蔽，即所謂的協調員。它是開源的，在 Hornet 節點上運行。協調員充當糾纏的中心化、自願和臨時替代共識機制。為此，協調員會定期向全節點發送誠實交易。這些數據包包含一個沒有價值的簽名消息，稱為里程碑。糾纏中的完整節點僅在獲得里程碑批准時才認為交易已確認。重要提示：協調者只能確認交易，但不能繞過共識規則。他無法創建、凍結或竊取代幣。這個固定的規則和協調員地址在每個全節點上都是硬編碼的，所以協調者對糾纏的影響是非常有限的，因為糾纏也一直受到所有其他全節點的監控。 > 隨著 IOTA 2.0 升級，協調員將被關閉。
- **ComNet (通信層) (IOTA 2.0):** 該層存儲和交流信息。該層包含分佈式帳本或糾纏。速率控制和時間戳也位於這一層。
- **Core Object type (核心對像類型) (IOTA 2.0):** 必須由所有節點解析的對像類型。解析器是負責將輸入分解和轉換為更適合進一步處理的格式的計算機程序。
- **Core Application (核心應用) (IOTA 2.0):** 必須由所有節點執行的核心應用程序，例如價值轉移應用程序。
- **Child (子級) (IOTA 2.0):** 被父級引用的交易。
- **Chrysalis (蛹):** IOTA 1.5 網絡升級的名稱。

## D

- **Data (數據):** 纏結是一種以可信賴的方式證明數據完整性（完整性和來源的可驗證性）的方法。目前，有幾種加密方法使這成為可能，但這裡反復發現安全漏洞，使數據容易受到操縱。這是一個主要問題，尤其是在雲計算中，有時甚至使用第三方審計工具（收費）來確保數據完整性。這正是 IOTA 的用武之地，它提供了一種相對簡單的方法來通過其協議避免這種情況，並且無需任何費用。
- **Data transactions (數據交易):** 這些都是直接確認和公證的。借助“公證”，可以證明電子文檔在某個時間以某種形式存在，並且自創建以來就沒有改變過。創建公證時，會計算文檔的唯一哈希（指紋）並將其與時間戳一起以不可變的方式存儲在 IOTA 分類帳（纏結）中。
- **Data storage (數據存儲):** 就像互聯網一樣，IOTA 協議不存儲數據，換句話說，糾纏不是數據存儲。如果有人想以去中心化的方式存儲交易歷史，他們可以自己為此構建第二層解決方案，或者為這種存儲付費給第三方。對於基礎層，IOTA 專注於性能、吞吐量和安全性，而不是構建全局數據庫。
- **Distributed Ledger Technology (分佈式帳本技術) (DLT):** 這是一種數據庫架構，允許數字資產的所有者在點對點之間傳輸和記錄它們。 DLT 中的每次轉賬都作為記錄存儲在分佈式帳本（數據庫）中。該數據庫存儲在網絡的所有節點中。
- **DevNet (開發網):** DevNet（開發者網絡）是一個純測試網絡，可以在沒有協調員的情況下研究和測試糾纏。
- **Decay (衰減):** 法力值和未決法力值都與其值成比例衰減，防止法力值隨時間無限增長。
- **Double-spending (雙花):** 雙重支付是對數字貨幣系統的威脅，在這種系統中，同一個數字代幣可以多次使用。與實物貨幣不同，數字代幣由可以復製或偽造的數字文件組成。
- **dRNG (Decentralized Random Number Generator) (去中心化隨機數生成器）:** 快速概率共識 (FPC) 中需要此隨機數生成器，以使共識模型對攻擊更具彈性。在交易衝突的情況下，FPC 會分幾輪對相關交易進行投票。節點在這次投票中改變主意的閾值是 50% +/- 一個小的隨機偏差（使用 dRNG）。為了避免投票中的僵局或特定結果，這個額外的隨機組件可以防止潛在的惡意節點影響投票過程。
- **Dust Protection (防塵) (IOTA 1.5):** 想要傷害 IOTA 的人可以自動將 1i 發送到反復重新創建的地址連續好幾年，從而將分類帳的內存需求推高到一個完整節點最終只能在大型服務器上運行的地步。在蛹中，如果你想創建一個微交易 (<1Mi)，你需要在接收地址上激活灰塵。這將使您收到一定量的灰塵。此外，必須對帶有彩色硬幣的地址進行標記。在 Coordicide 之後，IOTA 2.0 將會有另一個解決方案。
- **Directed Acyclic Graph (有向無環圖) (DAG):** 有向無環圖是由永遠不會形成閉環的邊和頂點組成的 DLT 結構。 IOTA 架構“纏結”是有向無環圖的一種形式。

## E

- **Eclipse attack (日食攻擊):** 旨在隔離特定節點而不是攻擊整個網絡的網絡攻擊。
- **ETH Virtual Machine (ETH 虛擬機):** 虛擬機是執行智能合約代碼的東西，以便確定性地運行。運行代碼所使用的語言提供了訪問運行虛擬機的沙箱的掛鉤。對於 IOTA，這是 ISCP 沙箱，它只提供對 IOTA 代幣的訪問，因此共識也在 IOTA 代幣上運行。 IOTA 只使用虛擬機，外部代幣與運行 SC 代碼的虛擬機無關，與 ETH 虛擬機或 Cartesi 虛擬機無關。
- **Epoch (時期) (IOTA 2.0):** 用於特定類型共識法力的時間間隔。在每個時期結束時，都會對網絡上的法力分配狀態進行快照。由於該工具使用消息的時間戳，因此每個節點最終都可以就一個時期的法力分配達成共識。

## F

- **Faucet (水龍頭):** 一個代幣池（資金）。根據簡單的請求，一個人會獲得有限數量的測試令牌，特別是對於自己的應用程序的開發人員來說，這是一個很大的幫助。
- **Firefly (螢火蟲):** 螢火蟲是一個錢包，旨在作為當前和未來 IOTA 生態系統的平台。
- **Finality (確定性):** 交易一旦完成，就無法撤銷或改變它的屬性。這是參與轉讓的各方可以認為交易已完成的時刻。確定性可以是確定性的或概率性的。
- **Full nodes (Hornet, Bee) 全節點（大黃蜂、蜜蜂）:** 它們構成了 IOTA 網絡的核心（基礎設施）。為了參與點對點網絡，完整節點必須始終在線並連接到鄰居（其他完整節點）。此外，交易數據庫必須與網絡中的所有其他全節點同步。全節點的作用是與客戶端（錢包、DApp 等）交互並將其交易附加到賬本上，使網絡中的所有其他全節點都知道交易，驗證交易並將其存儲在賬本中。
- **Future Cone (未來錐):** 所有直接或間接引用訊息的訊息都稱為它的未來錐。
- **Fork (分叉):** 在 IT 中，這是一個項目拆分為第二個後續項目後的新開發分支；源代碼或其部分是獨立於原始父項目開發的。
- **FPC(Fast Probabilistic Consensus) (快速概率共識):** 使用隨機數和節點意見達成共識的共識。在 On-Tangle 投票中，它僅用於特定的邊緣情況。查看 OTVFPCS。
## G

- **Genesis transaction (創世交易):** 創世交易是第一個創建所有 IOTA 代幣並將其分發到買家地址的交易。
- **GoShimmer (Go微光) (非主網):** 用 Go 編程語言編寫的無協調器版本的 IOTA 的原型。 Go微光實現了 Coordicide 的各種模塊，例如自動對等、節點身份、法力等。Go微光作為第一個 alpha 版本和測試網絡的測試環境。這裡測試的一切都將逐漸與大黃蜂和蜜蜂合併。
- **Generic Data Object (通用數據對象) (IOTA 2.0):** 最基本的對像類型。所有無法識別的數據對像都以這種方式定義。

## H

- **History (歷史):** 由特定交易直接或間接授權的交易列表。
- **Hash values (哈希值):** 應用於可變長度消息加密的校驗和。哈希值就像一個很長的數據集的指紋。每條消息都被分配了一個非常具體的哈希值。
- **Hooks (掛鉤):** 允許將外部程序代碼集成到現有應用程序中以對其進行擴展、更改其流程或攔截某些事件的接口。
- **Hornet Node (大黃蜂節點) (IOTA 1.5):** 社區開發的 IOTA 節點，用 Go 編程語言編寫。此外，協調員還通過大黃蜂作為插件運行。

## I

- **Inclusion state (包含態):** 用於確定交易是否已被網絡接受和確認。特別是對於交易和提示列表：如果提示引用此交易，則包含態為真。

## L

- **Local Snapshots (局部快照):** 局部快照用於限制節點的內存需求。為此，在各個節點上，已確認的舊交易將從數據庫中刪除。剩下的只是一個小文件（列表），其中包含各個地址的餘額。節點獨立並自行決定執行快照。此功能允許更快的同步、更低的系統資源要求並且無需再等待全局快照來清理數據庫。
- **Layer (層):** 在 DLT 中，第二層是指建立在現有分佈式帳本之上的二級框架或協議。在這些第二層上，可以執行其他應用程序而不會對基礎層施加太大壓力。例如，在 IOTA 中，這些是智能合約和 IOTA 流。
- **Local Modifiers (局部修飾器):** 用戶定義的條件，節點在選擇提示時可以考慮。在 IOTA 中，節點不一定具有相同的纏結視圖。只能在本地獲得的不同類型的信息可用於加強安全性。

## M

- **Merkle Tree (默克爾樹):** 默克爾樹是一種用於計算機科學應用的數據結構。在加密貨幣中，默克爾樹用於更有效、更安全地編碼。
- **Mainnet (主網):** The public usable IOTA network, in which the IOTA tokens are used that are traded on cryptocurrency exchanges.
- **Milestone (IOTA 1.5):** Milestones are messages that are signed and issued by the coordinator. Their main goal is to help the Tangle grow healthily and guarantee finality. When milestones directly or indirectly approve a transaction in the Tangle, nodes mark the status of that transaction and its entire history as confirmed.
- **Message:** A message is a core data type that reflects a vertex in the communication layer DAG. It contains the following properties: References to other messages, the sender’s public key, the issuing time of the message, the message sequence number from the node that issued the message, the payload that can be interpreted by higher layers, the nonce that the message uses to satisfy the PoW requirement, a signature that signs all of the above fields. A message is not forwarded until it becomes “solid”, i.e., its history is known to the node. Messages must meet a PoW requirement, which currently is to find a nonce so that the hash of the message’s fields (minus the signature) has a certain number of leading zeros.
- **Message overhead:** The additional information (metadata) that must be sent along with the actual information (data). This can include signatures, polls and anything that is transmitted over the network but is not the transaction itself.
- **Mana (IOTA 2.0):** When a value transaction is processed, a quantity called Mana will be “pledged” to a specified node ID. This quantity is related to the amount of IOTA moved into the transaction. The only way to gain Mana is to convince some token holder to pledge it to you. In this sense, Mana is Delegated Proof of Token Ownership. Mana, therefore, provides adequate Sybil protection because it is difficult to acquire it in arbitrary amounts.
- **Markers (IOTA 2.0):** A tool that exists only locally and allows certain calculations to be performed more efficiently, such as the calculation of the approval weight or the presence of certain messages in the past or future cone of another message.
- **Messages per Second (MPS):** The amount of messages issued to the network every second.

## N

- **Nakamoto Consensus:** Named after the creator of Bitcoin, Satoshi Nakamoto, the Nakamoto Consensus describes the replacement of coordination / communication between known agents with a cryptographic puzzle (Proof-of-Work). Completion of the puzzle determines which agent acts next.
- **Neighbors:** Network nodes that are directly connected and can exchange messages without intermediate nodes.
- **Nodes:** A node is any computer that connects to other nodes in the network via software. In principle, they serve as a connection point for data transfers. The Tangle works with different types of nodes, such as full nodes (Hornet, Bee), permanodes (Chronicle) or smart contract nodes (Wasp).
- **Network Layer (IOTA 2.0):** This layer manages the lower layers of Internet communication such as TCP. In this layer, the connections between the nodes are managed by the Auto peering and Peer Discovery modules and the Gossip protocol.
- **Network ID:** The network ID enables user-specific subtangles in which nodes can only recognize messages from the network ID listed in their configuration file.

## O

- **Orphan:** A transaction (or block) that is not referenced by any subsequent transaction (or block). An orphan is not considered confirmed and will not be part of the consensus.
- **Object (IOTA 2.0):** the most basic unit of information in the IOTA protocol. Each object has a type and size and contains data.
- **Oracles:** Oracles are designed to build a secure bridge between the digital and physical worlds in a decentralized, permissionless way. They bring off-chain data to decentralized applications and smart contracts on the IOTA network.
- **OTV (IOTA 2.0):** On Tangle Voting is the official name for the multiverse consensus described by Hans Moog. It is a new consensus mechanism that allows nodes to vote on conflicts directly by publishing a message to the tangle.
- **OTVFPCS (IOTA 2.0):** On Tangle Voting with FPCS (Fast Probabilistic Consensus on a Set) is a mechanism for breaking metastability, which can be used in addition to OTV (On Tangle Voting). Generally, in IOTA2.0, reaching a high approval weight is the finality criteria. If the approval weight is high enough, the message / transaction is finalized. With OTVFPC the initial opinion is created with OTV, if after some time the opinions of the nodes are still split, for whatever reason, FPC is activated to break this metastable state. The finality of value transactions should be reached faster this way.

## P

- **Parents:** A message directly references up to 8 previous messages that we call its parents. In IOTA 2.0 a parent can be either strong or weak (see approval switch).
- **Parallel reality ledger state (IOTA 2.0):** This state is used to track conflicts in the tangle. Two new ledger entries that are causally valid but in conflict with each other (ex. Double Spend) are posted into two separate “realities” for this purpose, representing possible but mutually exclusive future ledger states. The consensus mechanism (with FPC, etc.) will now operate until the perception of most nodes tilts in one direction and one of the two possible ledger states is accepted as true.
- **Partition Tolerant:** This means that a part of the Tangle can be disconnected from the main tangle for a certain time and continue to run without an Internet connection. These parts can be reconnected to the main Tangle when the Internet connection is restored.
- **Past Cone:** All messages that are directly or indirectly referenced by a message are called its past cone.
- **Parasite Chain Attacks:** A double spending attack on the Tangle. Here, an attacker attempts to reverse a transaction by setting up an alternate Tangle in which the funds were not spent. He then tries to get the majority of the network to accept the alternative Tangle as the legitimate one.
- **Permanode:** This type of node permanently stores the entire transaction history, possibly with the help of external storage solutions, and possibly only specific transactions (selective permanode).
- **Pending:** A transaction has been seen by the network but not yet confirmed.
- **Peer to Peer Network:** A decentralized network of different network nodes that are connected to each other and exchange data.
- **Peering:** The process of discovering and connecting to other network nodes.
- **Payload (IOTA 2.0):** A field in a message that determines the type. Examples are value payload (TransactionType type), FPC opinion payload (StatementType type), dRNG payload (Payload), Salt declaration payload, generic data payload.
- **Private Tangle:** A private tangle is comparable to a test network under complete control of the operator. This allows companies and developers to test their applications under self-defined environment variables without external influences and protected from prying eyes. There is no interoperability between a private Tangle and the IOTA Tangle. So, sending from one to the other does not work either. Each private Tangle is an independent network with its own nodes, tokens, and coordinator.
- **Proof of Work (PoW):** A time-consuming (expensive) mathematical calculation that uses computational power to prevent spam attacks. It consists of a difficult cryptographic puzzle that is easy to verify.
- **Proof of Inclusion (PoI):** With PoI, one is able to provide evidence that a transaction was indirectly referenced by another transaction without having to present the full chain of actual transactions between the two transactions. This is done by using a sequence of hashes instead of the actual transaction data to prove the inclusion of a transaction (inclusion) in the referenced subtangle.
- **Pruning:** In computer science, this is a term for simplifying, shortening, and optimizing decision trees. In IOTA, this is done by local snapshots on each full node. Old transactions that have already been confirmed are deleted from the database, leaving only a file (list) of credits on each address.
- **Public and private keys:** These are used in cryptographic systems which use key pairs. There are public keys which can be shared and private keys which are known only to the owner. The generation of such keys depends on cryptographic algorithms based on mathematical problems to generate one-way functions. Effective security requires keeping the private key to remain only known to the owner. Public keys derived from this private key can be shared and used by others to verify ownership of the private key, without exposing the private key. Public keys function as addresses in IOTA.

## R

- **Rebroadcast:** Repeats the sending of a transaction. While a transaction is being sent to an IOTA node, it may go offline. In this case, the IOTA node may not forward the transactions to its neighbors, and the rest of the network will never see these transactions. As a result, that transaction will never be referenced by the coordinator and thus never confirmed. Resending a bundle means resending the same bundle to an IOTA node. This way you give your transactions another chance to be forwarded to the rest of the network.
- **Reusable Addresses:** With the introduction of the Ed25519 signature scheme, through the IOTA 1.5 Chrysalis upgrade, reusable addresses are now supported.
- **Reattachment:** Resending a transaction by re-selecting a tip and referencing newer tips by repeating PoW.

## S

- **Salt:** In cryptography, salt is a randomly chosen string of characters that is appended to a given plaintext before it is further processed to increase the entropy (disorder) of the input. It is often used for storing and transmitting passwords to increase information security.
- **Sandbox:** An isolated area where programs can be tested.
- **Software as a Service (SaaS):** The SaaS model is a subset of cloud computing. It is based on the principle that the software and IT infrastructure can be operated by an external service provider and rented by the customer as a service.
- **Smart Contract:** Smart contracts are contracts or programs that are automatically executed.
- **Smart Contract Chain:** Smart contracts are processed via a so-called contract chain, the representation of the contract state. A smart contract writes its state every time it is requested, and a new block is added for each of these state updates. All these updates are collected and confirmed in one block. So, the chain also contains all the past states. The chain can contain many Smart Contracts, all working on the same global state of the chain. From this perspective, the Contract chain is essentially a blockchain anchored on the Tangle. IOTA Smart Contracts can be considered “classic” Smart Contracts, but with the added feature that you can have multiple such parallel chains all using the same native IOTA token and trading between them in a trusted manner on the Tangle. This enables trusted interoperability between different applications.
- **Solidification time:** The time of solidification when the entire history of a transaction has been received by a node.
- **Splitting Attacks:** An attack in which a malicious node attempts to split the tangle into two branches. As one of the branches grows, the attacker publishes transactions on the other branch to keep both alive. Splitting attacks attempt to slow down the consensus process or perform double spending.
- **Sharding:** IOTA nodes have an upper limit on transactions per second (TPS) they can process. Through a type of database partitioning (breaking a very large database into smaller ones) into more manageable segments (shards), each shard would contain a unique set of account balances and nodes would then be assigned to individual shards to validate transactions. The goal is that by dividing into more manageable segments, it will increase transaction throughput and thus overcome scalability issues.
- **Signatures:** Signatures prove ownership of an address. Clients (Wallets) need this proof before nodes validate a transaction. To prove ownership, input transactions must be signed with the private key used to create the address.
- **Solidity (IOTA 2.0):** A message is marked as solid if its entire past cone until the Genesis (or the latest snapshot) is known.
- **Subtangle:** A consistent section of the tangle (i.e., a subset of messages / value objects) such that each contained message / value object also contains its referenced messages / value objects.
- **Streams:** IOTA Streams is a multifunctional second layer data transfer protocol that can be used for various types of data transfer (e.g., streaming data). For example, it allows sensors and other devices to encrypt entire data streams and anchor them in the IOTA Tangle. IOTA’s consensus protocol adds integrity and authenticity to these message streams. Given these characteristics, IOTA Streams fills an important need in industries where integrity, privacy, and immutability collide.
- **Sybil Attack:** An attempt to gain control of a peer-to-peer network by forging multiple false identities.
- **Snapshot:** A special feature of the Tangle. A snapshot deletes all transactions. Only transactions with a balance > 0 are kept. The metadata such as tags and messages are also deleted. What is left behind is just a list of addresses and balances. After a snapshot, the nodes use this list as “genesis”, a new starting point for the tangle. This reduces the size of the tangle network, allowing IOTA nodes to use less memory. Full nodes perform what are called “Local Snapshots” independently and at their own discretion.

## T

- **Tangle:** The Tangle is the underlying core data structure. In mathematical terms it is a directed acyclic graph (DAG). The Tangle is the distributed ledger of IOTA that stores all transactions.
- **Ternary system:** A trit (trinary digit) can have exactly three states (3 x 1 = 3): -1, 0 and 1. Three trits result in one tryte (33 = 27) and can thus represent 27 combinations. In IOTA, the letters A-Z (26 pieces) and the number 9 are used for this purpose.
- **Token:** The digital currency form (cryptocurrency). It is a powerful tool for value transfer between people and machines. Total number: 2,779,530,283,277,761 IOTA. The base units are Pi,
  Ti, Gi, Mi, ki, i
- **Trinity (IOTA 1.0):** Depreciated IOTA Wallet
- **Tip:** A transaction that has not yet been approved.
- **Tip Selection:** The process of selecting previous transactions to be referenced by a new transaction. In these references, a transaction ties into the existing data structure. IOTA only enforces that a transaction approves up to eight other transactions, the tip selection strategy is left to the user (with a good default provided by IOTA).
- **Tip Transaction:** A solid end transaction that is not yet a parent.
- **Transaction (IOTA 2.0):** A message that contains a Token transfer as a payload. The transferred tokens can be native IOTA Tokens or native IOTA Assets.

## U

- **UTXO model:** This is a so-called addressing model. UTXO stands for “unspent transaction output”, which simply means that you not only keep track of the credits on the address, but also keep track of where the credits come from and where they are sent when they are spent. Each token on an address is thus uniquely identifiable and each issue names the exact token they want to move. This enables faster and more accurate conflict handling and improves the resilience and security of the protocol.

## V

- **Value Layer (IOTA 2.0):** The Value layer builds on the Communication layer. It works exclusively with payloads of type Value object. This layer has several tasks: Forming the ledger state, processing, validation and output of transactions, conflict detection, conflict resolution via FPC, forming a DAG from value objects, tip selection (on value object tips).
- **Value Transactions:** Value transactions either withdraw IOTA tokens from an address or deposit them to an address. Nodes must verify these transactions to ensure that the sender actually owns the IOTA tokens and that additional tokens are never generated. To do this, the following checks are performed: All IOTA tokens withdrawn from an address are also deposited into one or more other addresses; the value of each transaction does not exceed the total global supply; signatures are valid.
- **Version Number (IOTA 2.0):** Indicates the correct format of each type.

## W

- **White-flag approach (IOTA 1.5):** Used to calculate credits. A simpler, conflict-avoiding approach that improves the speed and efficiency of tip selection, eliminates certain attacks, and significantly reduces the need for reattachments.
- **Wasp:** The Wasp node software is an implementation of Smart Contracts on the IOTA Tangle.
