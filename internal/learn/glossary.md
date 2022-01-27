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
- **Mainnet (主網):** 公共可用的 IOTA 網絡，其中使用在加密貨幣交易所交易的 IOTA 代幣。
- **Milestone (里程碑) (IOTA 1.5):** 里程碑是由協調員簽署和發布的消息。他們的主要目標是幫助糾纏健康成長並保證最終性。當里程碑直接或間接批准糾纏中的交易時，節點會將該交易的狀態及其整個歷史標記為已確認。
- **Message (訊息):** 訊息是一種核心數據類型，它反映了通信層 DAG 中的一個頂點。它包含以下屬性：對其他訊息的引用、發送者的公鑰、訊息的發佈時間、來自發布訊息的節點的消息序列號、可以被更高層解釋的有效負載、訊息的隨機數用於滿足 PoW 要求，即對上述所有字段進行簽名的簽名。一條訊息在變為“可靠”之前不會被轉發，即節點知道它的歷史。訊息必須滿足 PoW 要求，目前是找到一個隨機數，以便訊息字段的哈希（減去簽名）具有一定數量的前導零。
- **Message overhead (訊息開銷):** 必須與實際信息（數據）一起發送的附加信息（元數據）。這可以包括簽名、投票和任何通過網絡傳輸但不是交易本身的東西。
- **Mana (法力) (IOTA 2.0):** 當一個價值交易被處理時，一個名為法力的數量將被“質押”到一個指定的節點 ID。這個數量與轉移到交易中的 IOTA 數量有關。獲得法力的唯一方法是說服某個代幣持有者將其質押給您。從這個意義上說，法力是代幣所有權的委託證明。因此，法力提供了足夠的 Sybil 保護，因為很難以任意數量獲得它。
- **Markers (標記) (IOTA 2.0):** 一種只存在於本地並允許更有效地執行某些計算的工具，例如批准權重的計算或某些消息在過去或未來錐體中的存在。
- **Messages per Second (每秒訊息數) (MPS):** 每秒向網絡發布的訊息量。

## N

- **Nakamoto Consensus (中本共識):** 中本共識以比特幣的創造者中本聰的名字命名，描述了用密碼學難題（工作證明）替換已知代理之間的協調/通信。謎題的完成決定了接下來哪個代理行動。
- **Neighbors (鄰居):** 直接連接的網絡節點，無需中間節點即可交換訊息。
- **Nodes (節點):** 節點是通過軟件連接到網絡中其他節點的任何計算機。原則上，它們用作數據傳輸的連接點。 糾纏適用於不同類型的節點，例如完整節點（大黃蜂、蜜蜂）、永久節點（編年史）或智能合約節點（黃蜂）。
- **Network Layer (網絡層) (IOTA 2.0):** 該層管理網路通信的較低層，例如 TCP。在這一層中，節點之間的連接由 Auto peering 和 Peer Discovery 模塊以及 Gossip 協議管理。
- **Network ID (網絡 ID):** 網絡 ID 啟用用戶特定的子纏結，其中節點只能識別來自其配置文件中列出的網絡 ID 的訊息。

## O

- **Orphan (孤兒):** 未被任何後續交易（或區塊）引用的交易（或區塊）。孤兒不被視為已確認，也不會成為共識的一部分。
- **Object (物品) (IOTA 2.0):** IOTA 協議中最基本的信息單元。每個對像都有類型和大小並包含數據。
- **Oracles (預言):** 預言機旨在以去中心化、無需許可的方式在數字世界和物理世界之間架起一座安全的橋樑。他們將鏈下數據帶到 IOTA 網絡上的去中心化應用程序和智能合約。
- **OTV (On Tangle Voting) (糾纏投票) (IOTA 2.0):** 糾纏投票是 Hans Moog 描述的多元宇宙共識的官方名稱。這是一種新的共識機制，允許節點通過向糾纏發布訊息來直接對沖突進行投票。
- **OTVFPCS (On Tangle Voting with FPCS) (使用 FPCS 進行 Tangle 投票) (IOTA 2.0):** 使用 FPCS 進行 Tangle 投票（FPCS (Fast Probabilistic Consensus on a Set）(集合上的快速概率共識))是一種打破亞穩態的機制，除了糾纏投票外，還可以使用。通常，在 IOTA2.0 中，達到較高的批准權重是確定性標準。如果批准權重足夠高，則消息/交易完成。使用 OTVFPC，初始意見是由 OTV 創建的，如果經過一段時間後節點的意見仍然分裂，無論出於何種原因，都會激活 FPC 以打破這種亞穩態。通過這種方式，應該更快地達到價值交易的最終確定性。

## P

- **Parents (父級):** 一條訊息直接引用最多 8 條我們稱之為父級訊息的先前消息。在 IOTA 2.0 中，父級可以是強的也可以是弱的（參見批准開關）。
- **Parallel reality ledger state (平行現實帳本狀態) (IOTA 2.0):** 此狀態用於跟踪糾纏中的衝突。為此，兩個因果有效但相互衝突的新分類帳條目（例如雙花）被發佈到兩個獨立的“現實”中，代表可能但相互排斥的未來分類帳狀態。共識機制（使用 FPC 等）現在將運行，直到大多數節點的感知向一個方向傾斜並且兩種可能的分類帳狀態之一被接受為真實。
- **Partition Tolerant (分區容錯):** 這意味著糾纏的一部分可以在一段時間內與主糾纏斷開連接，並在沒有網路連接的情況下繼續運行。當互聯網連接恢復時，這些部分可以重新連接到主糾纏。
- **Past Cone (過去錐):** 訊息直接或間接引用的所有訊息稱為其過去錐。
- **Parasite Chain Attacks (寄生蟲鏈攻擊):** 對糾纏的雙重支出攻擊。在這裡，攻擊者試圖通過設置一個沒有花費資金的備用糾纏來撤銷交易。然後，他試圖讓網絡中的大多數人接受替代的糾纏作為合法的糾纏。
- **Permanode (永久節點):** 這種類型的節點永久存儲整個交易歷史，可能藉助外部存儲解決方案，也可能僅存儲特定交易（選擇性永久節點）。
- **Pending (待辦的):** 網絡已看到一筆交易，但尚未確認。
- **Peer to Peer Network (點對點網絡):** 不同網絡節點相互連接並交換數據的去中心化網絡。
- **Peering (對等互連):** 發現和連接到其他網絡節點的過程。
- **Payload (有效載荷) (IOTA 2.0):** 訊息中確定類型的字段。示例是值負載（TransactionType 類型）、FPC 意見負載（StatementType 類型）、dRNG 負載（Payload）、Salt 聲明負載、通用數據負載。
- **Private Tangle (私有糾纏):** 私有糾纏可與運營商完全控制的測試網絡相媲美。這使公司和開發人員可以在自定義環境變量下測試他們的應用程序，而不受外部影響，並免受窺探。私有糾纏和 IOTA 糾纏之間沒有互操作性。因此，從一個發送到另一個也不起作用。每個私有糾纏都是一個獨立的網絡，擁有自己的節點、代幣和協調器。
- **Proof of Work (工作證明) (PoW):** 使用計算能力來防止垃圾郵件攻擊的耗時（昂貴）的數學計算。它由一個易於驗證的困難密碼難題組成。
- **Proof of Inclusion (包含證明) (PoI):** 使用 PoI，可以提供證據證明一筆交易被另一筆交易間接引用，而無需展示兩筆交易之間的完整實際交易鏈。這是通過使用哈希序列而不是實際交易數據來證明在引用的子糾纏中包含交易（包含）來完成的。
- **Pruning (修剪):** 在計算機科學中，這是簡化、縮短和優化決策樹的術語。在 IOTA 中，這是通過每個完整節點上的本地快照來完成的。已確認的舊交易將從數據庫中刪除，在每個地址上只留下一個信用文件（列表）。
- **Public and private keys (公鑰和私鑰):** 這些用於使用密鑰對的密碼系統中。有可以共享的公鑰和只有所有者知道的私鑰。這種密鑰的生成依賴於基於數學問題的密碼算法來生成單向函數。有效的安全性要求保持私鑰只為所有者所知。從此私鑰派生的公鑰可以被其他人共享和使用，以驗證私鑰的所有權，而不會暴露私鑰。公鑰在 IOTA 中充當地址。

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
