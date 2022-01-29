---
title: Firefly Wallet
description: The IOTA Firefly Wallet sets a new standard for Software Wallets in
  DLT. Learn everything here.
---

# 螢火蟲錢包

## 目錄

- [一般概述和介紹](#general-overview-and-introduction)
- [螢火蟲代幣遷移](#firefly-token-migration)
- 螢火蟲用戶指南
  - [標準用戶的用戶指南](#user-guide-for-standard-users)
  - [Ledger Nano X 或 Ledger Nano S 設備用戶的用戶指南](#user-guide-for-users-of-a-ledger-nano-x-or-ledger-nano-s-device)
- 螢火蟲 FAQ
  - [設置和安裝](#setup-and-installation)
  - [備份和恢復](#backups-and-recovery)
  - [個人資料和錢包](#profiles-and-wallets)
  - [交易](#transactions)
  - [設置](#settings)
  - [故障排除](#troubleshooting)
  - [遷移](#migration)
  - [已用地址](#spent-addresses)

## 一般概述和介紹

螢火蟲是 IOTA 生態系統的安全入口點。

它是在考慮到光明的未來的情況下建造的。它將演變成一種工具，提供的不僅僅是 IOTA 代幣的軟件錢包。 螢火蟲提供模塊化設計，便於以後添加創新的新功能。 IOTA 的新錢包將引導您輕鬆應對加密的複雜性，同時使用尖端技術保護您的代幣。

一些最重要的功能是：

- _用 Rust 編寫_：Rust 從頭開始提供安全性——同時保持速度、低內存使用和可擴展性。這使我們能夠構建具有更好性能和更高安全性的應用程序。
- _模塊化設計_：螢火蟲在模塊箱中分離不同的功能——如種子存儲、處理交易和密碼學。模塊箱將相關功能組合在一起，以便在旨在使用相同功能的多個項目之間輕鬆共享功能。
- _用 Stronghold 保護_：地址生成和交易簽名等敏感操作發生在 IOTA Stronghold 庫上構建的隔離應用程序內存中，使種子遠離潛在的攻擊者。
- _Crypto.rs_：Crypto.rs 結合了 IOTA 基金會許多項目使用的所有加密算法。它降低了使用不安全加密實現的風險，使其更容易審計，從而產生可驗證的更安全的代碼。

在官方網站上查找更多信息，並從以下網址獨家下載螢火蟲錢包：

- [**螢火蟲**](https://firefly.iota.org/)**:** 官方網站
- [**Firefly Github 發布**](https://github.com/iotaledger/firefly/releases): 帶有最新發布版本的官方 Firefly GitHub 存儲庫
- 
## 螢火蟲代幣遷移

隨著新的 IOTA 1.5 Chrysalis 主網於 2021 年 4 月 28 日結束，每個 IOTA 持有者都必須將其全部資金從舊的 IOTA 1.0 網絡遷移到新的、改進的和先進的 1.5 網絡。為了使這個過程對用戶友好且安全，IOTA 基金會在 Firefly 錢包中集成了一個遷移工具，該工具負責整個過程並自動將您的資金從舊網絡轉移到新網絡。

將代幣移動到新網絡唯一需要做的就是你當前的 IOTA 1.0 網絡種子，表示為 81 個字符的組合，或者你從 Trinity 錢包和密碼備份的“.kdbx 種子庫文件”屬於該文件或您的 Ledger Nano 設備。在 Firefly 錢包遷移過程中輸入此信息後，將開始全自動遷移，您的所有資金都將安全地轉移到新網絡中。完成後，您將可以通過 Firefly 訪問它們。在此處閱讀有關該過程的所有信息：

- [**蛹遷移**](https://blog.iota.org/the-chrysalis-token-migration-starts-now/)**:** 蛹網絡遷移過程
- [**螢火蟲遷移過程**](https://blog.iota.org/firefly-token-migration/): 解釋了整個遷移過程（針對非 Ledger 用戶）
- [**Ledger Nano 遷移指南**](https://blog.iota.org/firefly-token-migration-guide-for-ledger-users/): 為 Ledger 用戶解釋了整個遷移過程
- [**遷移安全性**](https://blog.iota.org/security-during-token-migration/): 安全遷移過程的重要建議

## 有用的鏈接

- [**螢火蟲 Discord 頻道**](https://discord.com/channels/397872799483428865/748265907351978115): 在 Discord 上討論螢火蟲錢包、提出問題並與 IOTA 社區互動
- [**螢火蟲 GitHub**](https://github.com/iotaledger/firefly): 螢火蟲代碼庫和開發存儲庫

---

## **螢火蟲用戶指南**

## 標準用戶的用戶指南

### 帳戶結構

螢火蟲的基本帳戶處理邏輯如下：

- 一個螢火蟲 **配置文件** 始終代表一個 **IOTA 種子**
- 每個 Firefly **配置文件** 可以託管無限數量的 **錢包，** 可以看作是一個 **配置文件種子** 下的子賬戶。

### 配置文件設置

每個 **配置文件** 都會收到一個唯一的 IOTA Seed，其中包含使用“BIP39 標準”創建的 **24 字助記詞**。在配置文件創建期間，這 24 個單詞將向用戶顯示**一次**，用戶必須確保備份這 24 個單詞。我們強烈建議創建一個紙質錢包作為這些詞的物理備份。丟失單詞可能會導致無法訪問個人資料和與種子相關的資金。為了確保用戶已經創建了 24 個單詞的備份，在設置過程中會進行檢查，這需要用戶以正確的順序添加所有 24 個單詞。

在用戶收到 24 個種子詞後，用戶還可以創建一個 **要塞文件** 作為配置文件的數字備份。此文件還包含配置文件的安全加密種子和設置信息。我們強烈建議將此文件存儲在幾個獨立的位置（例如 U 盤或云存儲）。如果 24 個單詞不知何故丟失，則可以使用此文件恢復配置文件。要使用該文件，用戶必須創建一個加密要塞文件的安全密碼。只有結合此密碼，要塞文件才能恢復配置文件。因此，用戶還必須將密碼安全地存儲到此要塞文件中。

接下來，用戶創建一個 PIN 碼作為訪問螢火蟲錢包界面的簡單方法。進入個人資料儀表板需要此 PIN 碼，但不能訪問處理或移動用戶資金或訪問錢包安全設置的功能。對於這些需要更高安全級別的操作，用戶需要輸入要塞密碼。只有這個密碼才能訪問錢包的全部功能。

如果不同的用戶打算使用同一個螢火蟲錢包應用程序，或者如果您在多個種子上擁有 IOTA 代幣，您需要為每個種子/每個用戶創建一個新的配置文件。

**關鍵要點:**

- **安全備份 24 個單詞的助記詞——它是您的 IOTA 種子！**
- **安全地存儲您的要塞備份文件和要塞密碼！**
- **以數字和物理方式將其存儲在多個獨立位置！**

### 螢火蟲儀表板

![儀表板](/img/learn/firefly/dashboard.png)

螢火蟲儀表板是用戶配置文件的主要概覽。現場易於訪問的信息和最常見的功能——“發送”和“接收”——以清晰的佈局排列。在這裡，用戶可以看到個人資料總餘額、屬於個人資料的不同錢包以及最新交易列表。 IOTA 價格或配置文件價值顯示在一個方便的圖表中，並顯示配置文件的基本安全信息。

## 錢包

錢包是種子（配置文件）的子帳戶。在不同的場合使用其中的幾個可能是一種方便的方法。用戶可以有一個“長期持有”和一個“支出”錢包，或者一個他們接收付款的錢包，另一個只接收捐款的錢包，等等。用戶可以根據自己的意願自由設置。要創建新錢包，只需使用儀表板“我的錢包”部分中的“+”號即可。為錢包指定一個名稱，使用您的 Stronghold 密碼確認創建，錢包已準備好接收資金。

錢包包含一組地址，這些地址被分組在這個錢包下，以幫助用戶保持他們的地址井井有條。

重要的是這裡要提到的是，如果第一個錢包已經包含資金，用戶只能設置更多的錢包。如果用戶想要設置五個不同的錢包，他們需要在每個新創建的錢包中添加少量 IOTA，然後才能創建另一個錢包。

### 錢包詳情視圖

![錢包詳情視圖](/img/learn/firefly/wallet_detail_view.png)

在儀表板概覽中的一個錢包上單擊鼠標可打開錢包詳細信息屏幕。在這裡，用戶可以看到此特定錢包中包含的餘額，並可以選擇發送和接收交易。

在發送和接收部分旁邊，顯示了與此特定錢包相關的所有交易的概述。小圖標指示發送或接收交易是在內部（到相同配置文件的另一個錢包）還是在外部完成。

此外，您會在錢包餘額旁邊找到**三個小點**。

單擊這些點會打開一個彈出菜單。

在此彈出菜單中，您可以輸入以下功能：

**自定義錢包**

- 提供更改錢包名稱的可能性。

**查看地址歷史記錄**

- A list of all addresses that have been used by this wallet and the balance that sits currently on this address. You can copy this list and paste it into your documents.

**Hide Wallet**

- 此錢包已使用的所有地址的列表以及當前位於此地址上的餘額。您可以復制此列表並將其粘貼到您的文檔中。

#### 交易詳情視圖。

![交易詳情視圖](/img/learn/firefly/transaction_details_view.png)

顯示有關交易的以下信息：

- 一個交易流，表明：**從哪裡 > 代幣數量 > 到哪裡，** 後跟：

**狀態**

- 訊息的已確認或待處理狀態

**日期**

- 交易發出或接收的日期和時間（本地系統時間）

**訊息 ID**

- 此特定訊息（IOTA 中的每筆交易都是一條訊息）在 IOTA 帳本中的唯一標識符。

**發送地址**

- 發起交易的地址

**接收地址**

- 該交易的代幣到達的地址。此視圖中可能會顯示幾個不同的接收地址。屬於您的地址以括號中的錢包名稱突出顯示，其他不帶括號的地址不屬於您。這些通常是發件人的地址。將發送者地址中未使用的剩餘資金轉移到這些地址。這與 IOTA 中的 UTXO（未使用的交易輸出）帳戶模型有關。
- 如果一筆交易是從一個 UTXO 輸出（持有資金的地址）發出的，該輸出不消耗作為該輸出一部分的所有資金，則一筆交易將計劃發送的資金從該地址移走，第二筆交易將其餘的資金移走將未使用的資金從這個 UTXO 轉移到一個新的 UTXO 輸出。這兩個事務都是訊息的一部分，因此顯示在事務詳細信息中。閱讀更多關於 UTXO 賬戶模型的信息 [這裡](/IOTA-2.0-Research-Specifications/5.1UTXO/)。

**數量**

- 以所選配置文件貨幣發送的 IOTA 數量和當前價值

**兩個不同的圖表**

- **錢包價值**和**錢包活動**還提供此錢包中活動的圖形概覽。

### 發送和接收交易

- 發送和接收功能可在主錢包的儀表板中使用，也可在每個錢包詳細信息視圖中使用。

**接收**

- 點擊“接收”按鈕打開接收資金對話框。使用下拉菜單，用戶可以選擇應在哪個錢包中接收傳入資金。所選錢包的接收地址顯示為二維碼和書面地址。 “複製地址”按鈕將顯示的接收地址複製到用戶的剪貼板中，以便於粘貼到其他應用程序或文檔中。 **每次從該地址接收和再次使用資金時，用戶的接收地址都會改變。錢包會自動為下一次接收嘗試創建一個新地址。**
- 如果用戶已從該收款地址收到但尚未花費資金，用戶可以使用二維碼上方的刷新按鈕手動決定生成新的收款地址。此功能是一項重要的隱私功能，是加密貨幣中減少餘額可追溯性的標準方法。

**發送**

- 發送功能有兩個基本特徵。第一個是**發送付款**，這是一個標準的 IOTA 交易，您可以在其中輸入或複製完整的 IOTA 接收地址，格式為“iotaxjdjfkfkldldd.......”。用戶現在在下拉菜單中定義應從哪裡發送代幣的錢包以及要發送的代幣數量。在定義金額時，用戶可以選擇**max**，這是第二個基本功能，它將發送所選錢包中包含的所有代幣或通過手動輸入指定確切的金額。下拉按鈕提供了在不同單位大小（Mi、Gi 等）之間切換數量的選項。 **確保您以正確的單位大小輸入代幣數量。**
- 要啟動交易，用戶必須輸入確認和簽署交易的要塞密碼。在此之後，錢包將執行以下步驟以將交易交付給收件人：
- **同步錢包**：建立與 IOTA Ledger 的連接，
- **執行 PoW：** 少量工作證明由用戶的設備執行，
- **廣播交易：**將簽名的交易發送到連接的節點，
- **轉帳完成：**確認交易被接受並包含在分類帳中。

整個過程只需幾秒鐘。

如果您發送和接收資金，它們將始終組織在您用於發送或接收的錢包下，因此如果您有大量交易進行，則更容易跟踪。

## Ledger Nano X 或 Ledger Nano S 設備用戶用戶指南

螢火蟲可在 Windows、Mac 和 Linux 上使用，現在通過 USB 連接支持 Ledger Nano X 和 Ledger Nano S。 Ledger Nano 集成很簡單，類似於將螢火蟲與非 Ledger 配置文件一起使用。本指南可作為附加資源，幫助您了解如何使用帳本通過 Firefly 保護您的代幣，以及在使用錢包時執行某些操作時需要注意的事項。

### 什麼是 Ledger Nano？

[Ledger Nano](https://www.ledger.com/) 是一種硬件設備，通過 USB 連接到您的計算機（其他型號支持藍牙，但目前螢火蟲不支持）。設置 Ledger Nano 時，系統會指示您安全地存儲恢復短語。設備使用此恢復短語來簽署交易並生成地址。無法從 Ledger 設備中提取恢復短語（或從中生成的私鑰）。因此，安全地存儲您的恢復短語非常重要。硬件設備在您的計算機和訪問您的資金所需的私鑰之間創建了一個邊界。它提供了僅靠軟件根本無法實現的安全級別。

### 在開始之前，請確保：

- 1.) 您已經 [初始化](https://support.ledgerwallet.com/hc/en-us/articles/360000613793) 您的 Ledger 設備。
- 2.) [已安裝]最新固件(https://support.ledgerwallet.com/hc/en-us/articles/360002731113)。
- 3.) Ledger Live [已安裝並可以使用](https://www.ledger.com/ledger-live/download)。
- 4.) 您已安裝最新版本的 Firefly

### 在您的帳本設備上安裝 IOTA 應用程序

- 1.) 在 Ledger Live 中打開管理器選項卡。
- 2.) 連接並解鎖您的 Ledger 設備。
- 3.) 按照屏幕上的說明操作並允許 Ledger Manager。
- 4.) 在應用程序目錄中找到並安裝 IOTA (MIOTA)。
- 
### 如何使用螢火蟲設置 Ledger Nano

注意：如果您是現有的 IOTA 用戶，並且在 2021 年 4 月 28 日蛹網絡升級之前使用 Ledger 保護了 IOTA，您需要將您的代幣遷移到新網絡，然後才能開始使用螢火蟲。有一個全面的書面指南和視頻指南可幫助您完成遷移過程。

### 創建新的分類帳配置文件

在螢火蟲中創建新的 Ledger 配置文件既快速又簡單。下載螢火蟲後，打開應用程序並按照設置說明進行操作。您首先需要查看並接受條款和條件，設置主題（深色或淺色），然後選擇個人資料名稱。選擇“創建新錢包”。

![設置錢包分類帳](/img/learn/firefly/setup_a_wallet_ledger.png)

按“我想要一個硬件錢包”開始 Ledger 配置文件設置過程。

![創建一個錢包分類帳](/img/learn/firefly/create_a_wallet_ledger.png)

在下一頁上，您將被要求設置 PIN 碼。此 PIN 用於登錄您的錢包並阻止其他人登錄和查看您的餘額交易歷史記錄。選擇一個只有您知道的 PIN。在下一頁重新輸入您的 PIN 碼以確認。

![設定 pin ledger](/img/learn/firefly/set_pin_ledger.png)

現在，螢火蟲將檢查您的 Ledger Nano 是否已連接。確保 IOTA 應用程序在您的設備上打開並且 Ledger Live 已關閉。如果您遇到連接問題，請遵循螢火蟲中的“如果您的 Ledger 未連接時的提示”指南。

![連接 Ledger 帳本](/img/learn/firefly/connect_ledger.png)

點擊“繼續”，這就是它的全部內容。真的就是這麼簡單。您現在可以進入儀表板並開始探索螢火蟲。

![設置完整 ledger](/img/learn/firefly/setup_complete_ledger.png)

### 接收代幣

如果您想將資金接收到您的新分類帳配置文件中，您可以按儀表板上的“接收”按鈕。

![生成地址 ledger](/img/learn/firefly/generate_address_ledger.png)

在此頁面上，您可以選擇“生成地址”，螢火蟲將提示您確認地址與您的 Ledger 設備上顯示的地址匹配。

![確認接收地址 ledger](/img/learn/firefly/confirm_receive_address_ledger.png)

滾動瀏覽 Ledger 設備上的地址。當您的 Ledger 顯示“Ok”時，按兩個按鈕確認它匹配。

注意：這是一項安全檢查，可確保您連接到 Firefly 的官方安全版本。它確保沒有惡意軟件可以更改您收到的地址，並且它與您的 Ledger 生成的地址相匹配。

![顯示 ledger 地址](/img/learn/firefly/display_ledger_address.png)![okay ledger 顯示](/img/learn/firefly/okay_ledger_display.png)

您現在可以復制地址並將其分享給您希望從中接收代幣的朋友或交易所。始終確保地址與分類帳設備上顯示的地址相同。

![查看錢包 ledger](/img/learn/firefly/wallet_view_ledger.png)

### 發送代幣

一旦您收到某個地址的代幣，您的餘額將更新，您將能夠在交易歷史記錄中查看交易。要發送這些代幣，請按儀表板上的“發送”按鈕。在這裡您可以填寫您要發送的地址，輸入金額，然後點擊“發送”。

![傳送支付 ledger](/img/learn/firefly/send_payment_ledger.png)

然後，您需要確認完整的交易詳情與您的 Ledger 設備上顯示的內容相符。在某些情況下，如果您沒有發送地址上的總餘額，您還需要批准“剩餘地址”。滾動瀏覽您的分類帳上的交易詳情。當您的 Ledger 顯示“Accept”時，按兩個按鈕確認詳細信息匹配。如果它們不匹配，請按“拒絕”。

注意：與生成地址一樣，這是一項安全檢查，可確保您連接到 Firefly 的官方安全版本。它確保沒有惡意軟件可以更改您的交易內容，並確保您將正確的金額發送到正確的地址。

![確認剩餘地址 ledger](/img/learn/firefly/confirm_remainder_address_ledger.png)![確認交易 ledger](/img/learn/firefly/confirm_transaction_ledger.png)![顯示數量 ledger](/img/learn/firefly/dispaly_amount_ledger.png)![顯示接受 ledger](/img/learn/firefly/display_accept_ledger.png)

### 創建錢包並發送內部轉帳

螢火蟲可以將您的代幣組織到您個人資料中的不同錢包中。這些代幣彼此分開。從技術上講，它們存儲在您分類帳上不同子帳戶上生成的地址上。按儀表板中的“創建”並選擇一個名稱以添加另一個錢包。

![查看多個錢包 ledger](/img/learn/firefly/multiple_wallet_view_ledger.png)

使用多個錢包，您可以在它們之間發送並拆分您的代幣以按照您的喜好組織它們。您可以從發送視圖中選擇“內部轉帳”，然後選擇您要發送到的錢包。

注意：您最近創建的錢包必須先收到資金（即不能為空），然後才能創建新錢包。如果您需要在新設備上恢復 Ledger 配置文件，這可以確保您的錢包可以更順利地恢復。

![選擇從錢包發送 ledger](/img/learn/firefly/choose_send_from_wallet_ledger.png)

### 恢復現有的分類帳配置文件
如果您需要使用新設備恢復現有的螢火蟲配置文件，或者您以某種方式無法訪問螢火蟲，您可以通過幾個簡單的步驟插入 Ledger 並恢復現有的配置文件。為此，請在設置中選擇“遷移或恢復錢包”，然後選擇“我有 Firefly Ledger 備份”。

![setup a wallet1 ledger](/img/learn/firefly/setup_a_wallet_ledger.png)![create a wallet1 ledger](/img/learn/firefly/create_a_wallet_ledger.png)

Note: Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Once a profile is restored, Firefly will sync your transaction history. It will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the IOTA Tangle.

### Adding a second Ledger device to Firefly

It is possible to have more than one Ledger device with the same Firefly app. You can add another device by creating an additional profile from the login page. Firefly will always check that the right device is connected and you will receive an error message if you try to generate an address or send a transaction with the wrong device.

![ledger multiple profile view](/img/learn/firefly/ledger_multiple_profile_view.png)

## Firefly FAQ

## Setup and installation

#### I'm worried I might make a mistake when setting up Firefly.

Don't worry! All you need to do is download Firefly only from the official website for your preferred OS and start the setup. The application has been designed to guide you through setting up your profile, securing it, and migrating your tokens successfully.

#### How do I back up my seed?

IOTA Firefly now uses a 24-word mnemonic or a recovery phrase. Like with other cryptocurrencies, all you will need are 24 words to recover access to your tokens on the Tangle. You will be able to back up your recovery phrase using the recovery kit you create when you set up your wallet. You will have captured the 24-word recovery phrase in a safe location by saving a so-called "stronghold-file" and writing the 24 words down.

This physical paper backup is recommended as computers can fail.

Hardware wallets such as the Ledger Nano X and S are also supported. In case you use a Ledger Nano device, all relevant security measures are taken by using your ledger device together with the Firefly Wallet. Ledger Seeds are only stored on the Ledger device and never revealed to you.

#### What is Stronghold?

Stronghold is a secure software implementation developed by the IOTA Foundation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks. It uses versioned, file-based backups (with the file extension .stronghold) with double encryption that can be easily backed up and securely shared between devices. You can read more about Stronghold [here!](IOTA Stronghold: Beta Release)

#### I have lost access to my device. How do I recover my wallet?

There are several ways to recover your wallet, and both can be found in the backups you performed in the wallet setup. One way would be using your 24-word recovery phrase, while the other would be using the Stronghold file you backed up.

#### Do you plan to support Trezor or other hardware wallets?

We do not currently have any plans to support Trezor, but if a community member would like to work on the integration, please get in touch with Charlie#0123 on our Discord.

#### Which Ledger hardware do you support?

The IOTA app is supported on Ledger Nano S/X via a USB connection. Additionally, the IOTA legacy app, which would be needed for a network migration process from the deprecated legacy network, works with Ledger Blue. Since official support is no longer provided for the Blue by Ledger, Blue can only be used for migrating funds.

#### Do I need to install the Ledger app on my computer? Where do I download this?

You can install both the new and legacy applications by downloading and installing Ledger Live. After ensuring your firmware is up-to-date, both IOTA apps can be installed to your Ledger device directly from Ledger Live in the Manager tab.

#### I don't have my original Ledger USB cable anymore. Will this be a problem?

Most Micro-USB (for Nano S) and USB-C (for Nano X) cables should work. We do recommend using the original cable, though.

#### Do I need to update my Ledger firmware before using it with Firefly?

Yes, the legacy and the new applications may not be visible in Ledger Live without the current firmware. Make sure you have the latest versions of both apps on your device.

#### I don't have the original Ledger device that I used when I first set up Firefly. Will this be a problem?

The 24 words mnemonic (also known as the recovery phrase) and your Firefly account index (default 0) are all you need to regain access to your tokens on the IOTA Tangle. The tokens are in no way connected to the hardware itself. You can set up a new device with the same recovery phrase to access your tokens.

#### I have run out of space to install more applications on the Ledger. What should I do?

If you're short on space, you may need to remove other cryptocurrency applications from your Ledger device temporarily. This will have no impact on the related cryptocurrencies. After reinstalling the apps, they will be available again. You should refer to the official Ledger support site if you need more help.

## Backups and recovery

#### I have the seed words (recovery phrase) but don't remember the password; what can I do?

The recovery phrase works without a password or PIN. Just input the words at the wallet set up, using the 'I have a text backup' option.

#### Why should I do regular Stronghold backups?

Performing regular Stronghold backups will allow you to keep convenient, up-to-date digital backups should something happen, where you would then have a complete recovery of your funds.

#### What is an internal transfer? Is it different from a standard transaction?

An internal transfer is the same as a standard transaction. It is just made between your own wallets; it is also handled entirely on the Tangle. It is easier to perform because you don't need to input the address.

#### I have forgotten my device pin. How do I recover my Ledger?

Should you forget the Ledger PIN, you can reset and restore the Ledger using the 24-word recovery phrase.

#### How do I backup my Ledger transaction history?

Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Firefly will sync your available transaction history when a Ledger profile is restored. It may not find all transactions, but it will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the IOTA Tangle.

#### Are the 24 words previously found in the Ledger and are now in Firefly for the same seed?

The 24 words mnemonic, also known as the recovery passphrase, work in Firefly as both reflect the BIP39 standard. Never enter your recovery phrase anywhere other than your Ledger is strongly recommended. This defeats the security benefits of having a Ledger.

#### Can I save a Stronghold backup in Firefly for a Ledger Profile? If yes, does this contain my Ledger Seed?

Strongholds are not used for Ledger profiles in Firefly.

#### Can I put my 24 words from the Ledger into Firefly to see/use my funds with Firefly?

You can, but it is not recommended because it circumvents the hardware wallet security model entirely and is therefore strongly advised against it!

## Profiles and wallets

#### What are profiles in Firefly?

Profiles in Firefly are representations of your IOTA seed and contain all of your balances on different wallets. They also include general information such as your language and currency preferences and system notifications.

#### What are wallets in Firefly?

Wallets in Firefly are like a bank account and a personalized stock portfolio all in one. And in that sense, wallets always belong to a specific profile of your Firefly application. You can view your wallet balance and transactions, send and receive funds instantly, measure your wallet and token value over time, and check your wallet activity by month.

#### Can I change profile names after I create the profile?

No, you cannot change a profile name after creating a profile just yet. But you can add a profile with your preferred name and populate it near-instantly with your preferred wallet(s), security, and other such information.

#### Can I change wallet names after I create the account?

Yes. You can change your wallet name by clicking on the ellipses (three dots in a row) next to your wallet balance, giving you the "Customise wallet" option. There, you can change the name of the wallet you are currently in.

#### What is "resync wallet"? Why do I need it, and what happens when I resync my wallet?

Resyncing your wallet starts a background task that makes sure all of your wallets are up to date; you would need it to ensure your wallet is correct so you can conduct the everyday functions of Firefly without issues.

#### I want to delete a wallet; what happens to the funds in that wallet?

Wallets can only be deleted after your funds have been moved out of your wallet. So, you would need to send your funds from that wallet to another address.

However, an empty 0 balance profile can be deleted.

#### I want to delete a profile; what happens to the funds in that profile?

If you want to delete a profile, it is recommended that you first transfer your funds to a different profile. You need to make sure you have a backup for all of your wallets. If you delete a profile without a backup or recovery phrase, you will lose access to your IOTA!

#### Why do I need to confirm the receiving address against one displayed on my Ledger device?

This function is in place to confirm that the receiving address hasn't been manipulated by malicious software or by a man-in-the-middle attack. Make sure you always double-check it matches what is displayed on your device.

#### Can I have a Ledger wallet under my standard Firefly profile, or do I need to set up an entirely new profile for Ledger?

Every seed and Ledger has its own profile in Firefly. You need to create a new Firefly profile for every Ledger device you own.

#### How can I easily switch from one profile to another? Do I need to sign out each time?

It is possible to change profiles. And yes, it is necessary to log out from one profile and log in to another with your PIN.

#### Is it a bad idea to use the same PIN for Firefly as I do for my Ledger device?

Yes! As with websites, where security experts generally recommend that you use strong and unique passwords for each of your accounts, it is recommended to use unique PINs for Firefly and the Ledger device.

#### Where are my tokens located exactly if they are not on my Ledger device nor on my computer?

Since the Tangle is a distributed ledger, no one actually "holds" IOTA tokens in their wallet. The wallet controls the private keys.

A private key is like a secret passcode needed to transfer ownership of IOTA tokens on the Tangle. The private keys give the power to alter the Tangle record by authorizing an ownership transfer from one address to another. That transaction gets recorded in the Tangle.

To go deeper, IOTA tokens are, at their root, numbers: amounts assigned to IOTA addresses. For every private key, there are one or more public keys (which are translated into IOTA addresses).

The private key belonging to that corresponding public key is the secret code needed to "spend" IOTA tokens.

You can think of the Firefly wallet as a password manager. Password managers store and secure the secret passwords you need to access websites, rather than the content of the websites themselves.

In this way, your Firefly wallet is essentially a key manager!

Your private keys are stored on the Ledger device for and can never be extracted.

## Transactions

#### Can I use my own node to process my transaction?

Yes. You can use your own node to process your transaction if it is accessible over HTTPS.

#### I accidentally sent funds to the wrong address. Can I get them back?

There is no way to recover funds accidentally sent to the wrong address.

#### Why can I not send less than 1Mi?

Because there is a minimum requirement of 1Mi due to the IOTA protocol's dust protection, in a later version, Firefly will enable a feature that allows you to send less than 1Mi.

#### How can I send data transactions with Firefly?

You cannot send data transactions with Firefly at this point in time.

#### Where can I see my transaction history?

Your transaction history is broken down within your wallets. When you select "Wallets" from your dashboard, you will see a column with all of the transactions you made within the respective wallet.

Additionally, there is an extra function, "wallet history," found in the ellipses (three dots) next to the "wallet balance" of your wallet page.

#### How do I find a specific transaction that I did send/receive; I only know the day when it happened. Is there a search function?

There is no search function in Firefly.

#### What is a deep link, and how do I use it?

Deep links automatically fill transaction data in Firefly when you click on an "iota://" link.

#### Can I have a fixed receive address?

Yes, you can have a fixed receive address. Simply copy an address from Firefly and store it somewhere. You can safely receive to an address as much as you like, but it is recommended to use new addresses for better privacy.

#### Why do I need to confirm my transaction on the Ledger device against the one displayed in Firefly?

The Ledger Nano S/X shows you the transaction details before asking you to confirm. It then signs the transaction.

The addresses and values must exactly match those displayed by Firefly. This is to prevent man-in-the-middle attacks.

You should thoroughly verify them before confirming the transaction.

## Staking

#### Is staking secure? Will staked tokens stay in my control?

Yes, absolutely. The staked tokens will always stay in your control. They neither need to be sent to a third party nor do private keys have to be shared with anyone. Firefly attaches a special message to IOTA tokens by sending them to the same address they currently reside on to stake IOTA tokens.

#### How soon do I receive staking rewards?

Staking rewards are being generated immediately after starting a new staking period. Staking for a specific reward is announced by projects that want to distribute staking rewards. Once the staking period starts, stakers will be earning staking rewards, usually every 10 seconds. Reward tokens are automatically issued to the Firefly wallet of the staker and can only be accessed by that wallet holder. Depending on the project doing the token distribution, the tokens might only be accessible with the launch of the actual project. Please refer to the individual project for more information when your tokens become fully available.

#### How and when can I unstake my tokens?

Whenever you want, staking on IOTA is completely fluid, and there are no freezing or activation periods.

#### Is this like airdrops?

Somewhat. You could see IOTA staking as rolling airdrops or lock-drops, coming in every 10 seconds.

#### Why don’t you just airdrop tokens to random accounts?

The idea is to incentivize active community members in order to allow new ecosystems to grow. To flourish, new economies need users that are willing to participate. Having users actively staking their IOTA tokens to gain rewards allows builders to separate the wheat from the chaff and only reward active users who care about upcoming economies and their opportunities. Simply speaking: builders are not interested in inactive, dormant users.

## Settings

#### Where can I change my PIN and password?

You can change both your PIN and password under "Security" found in the settings of your dashboard.

#### Can I reuse an address? I know that this was always a problem in Trinity.

You can reuse an address in Firefly due to the EdDSA reusable address format.

#### Can I create NFTs or other digital assets in Firefly?

You cannot create NFTs or other digital assets in Firefly at this time.

## Troubleshooting

#### How do I recover a PIN code?

If you have lost your PIN, you need to create the profile again from a backup (recovery phrase or a Stronghold file) to re-access the profile. Later, you will create a new profile with a new PIN.

#### I have my backup file but don't remember the password. How can I recover my funds?

Without the password, you will not be able to recover your funds using the backup file. It is possible to access your funds using the recovery phrase and to set up a new profile in Firefly. However, your Firefly settings and history are lost by doing so.

#### I received an error: what can I do?

You can report to this GitHub page for any issues or errors: https://github.com/iotaledger/firefly/issues.

#### I received an error: "client error: { }". What does it mean, and what can I do?

You can report to this GitHub page with any issues or errors: https://github.com/iotaledger/firefly/issues.

#### I received the "operation timed out" error message. What does it mean, and how can I solve it?

You can report any issues or errors to this GitHub page: https://github.com/iotaledger/firefly/issues.

#### For those with more than one seed, can we replicate this process with every seed we have? Or do we need to transfer all tokens to one seed to migrate to the new network?

You can import multiple seeds in Firefly. But this process must be replicated for every seed you own. Each seed will be imported into a new profile.

#### Can I buy IOTAs directly in Firefly?

You cannot buy IOTAs directly in Firefly at this time. You can visit the IOTA website for more information about buying IOTA from an exchange.

#### Why won't Firefly connect with my Ledger? Also, My IOTA application always closes after a couple of seconds after opening it. Why is this?

If your Ledger is already connected and unlocked, ensure that you have closed the official Ledger Live application or browser plug-ins that might use the Ledger (e.g. MetaMask). Then make sure Ledger Live is not running silently in the background. Firefly cannot communicate with Ledger hardware if the Ledger Live software is open simultaneously. Firefly also provides a guide during setup to help with connection issues, and you can read the official Ledger guide here.

#### Finding balances keeps stalling. Why is this?

If your Ledger device does not show "Generating address…" while finding balances, then try disconnecting and reconnecting the device in rare cases where you used an old version of the legacy app. You may need to uninstall and reinstall the legacy app. Return to Ledger Live, reinstall this application on your Ledger device and try again.

#### Why does my balance keep showing zero?

Firstly, you can try "Check Again" to search for more addresses with balance.

If your balance continues to display 0, you may have selected the wrong account index number. The default account index number is 0, but it is possible to change this from 0-2147483647. If this was changed during your Trinity Ledger setup, you might wish to try alternative account indexes to reveal your funds.

#### What happens if my computer falls asleep or restarts during the migration process?

First, check if the migration is still in progress. If it is, then it should be complete on its own. Alternatively, you can check if you have a profile for that migration as it may have already been completed. If there are no profiles associated with the migration, you can simply create a new profile to start the migration again. If there is a profile, but the full set of migration transactions are not there, go to Advanced Settings and select "Migrate Another Index." You can continue where you left off by choosing the same account index and searching for more balance.

## Migration

#### I found an old seed from Trinity. Now that the migration period has already finished, how can I access these funds?

Seed migrations can be made after the migration period ends, at least until Coordicide.

#### Do I need to keep the IOTA Legacy app installed on my Ledger Nano after I have finished migration?

Once you have safely migrated all your account indexes to Firefly, the Legacy IOTA app will no longer be needed. Follow official Ledger guidance on how to remove Ledger Nano apps with Ledger Live.

#### If I follow the Ledger migration procedures, can I migrate the Ledger accounts that have been created with the 25th "word" passphrase?

The 25th word can be used with your Ledger, and Firefly will still find your tokens.

#### What if something goes wrong while I migrate? Who do I contact?

If any part of the process is aborted or fails, it can be redone! If something still goes wrong, reach out to the #help channel on Discord for community support.

IMPORTANT: Never share personal information regarding the number of tokens you own, their type, or where and how you keep them, how you secure them, including passwords, recovery passphrases, and user names of wallet accounts or exchanges. Do NOT share that information with anyone – including members of the IOTA Foundation.

Read more about "Security During Token Migration" on Chrysalis [here](https://blog.iota.org/security-during-token-migration/).

#### If I have multiple addresses associated with one seed, will the Chrysalis migration send all of my tokens to one address?

Yes, Firefly will send your funds to one address in migration.

#### I have lots of addresses with less than 1Mi balance. What should I do?

Firefly will attempt to consolidate all of your funds, but there is a chance some dust (<1 Mi) is lost. If you have lots of addresses with <1Mi funds, it is recommended you first consolidate your balance in Trinity before 28 April 2021.

#### In Chrysalis, will it be possible to migrate a seed for which all the addresses sum to less than 1 Mi?

Seeds with <1 Mi balance in total will not migrate. We recommend sending all of those small balances to a seed with a balance of >=1 Mi to migrate.

#### Will the Firefly mobile app be available upon Chrysalis release, or do I have to migrate on PC?

For now, the migration will be done via PC. Once Chrysalis is complete, we will focus on the mobile app!

#### I have 20 addresses on my Ledger Nano S. Is that a problem? I heard about this memory problem where only two addresses can be emptied at once.

The migration will bundle addresses together to avoid issues. Have a look at this article by the IOTA community for further information about how to consolidate your tokens.

Firefly will attempt to consolidate all of your funds, but there is a chance some dust (<1 Mi) is lost.

#### What are the tax implications of the migration?

Tax regulations are different from country to country. Contact your local tax office or a tax consultant for the exact handling in your country.

#### How do I migrate more than one Trinity account index?

If you want to migrate more than one account index, you will need to manually go through the indexes one by one and migrate them. Once you have completed the migration for one index, you will be prompted to migrate another index on the same profile. Each migration is sent to a separate wallet within the same Firefly profile.

You can also migrate additional indexes by going to the Advanced Settings in your dashboard and choosing "Migrate Ledger Index." This will migrate the funds to the same profile.

#### The balance that is shown is less than the balance I have on my Ledger. What can I do?

Firefly provides a "check again" option to check more addresses for balance. If the balance is 0 and cannot be found by checking multiple times again, you likely selected the wrong account index.

#### Why does it say my "Funds are at risk" during migration?

It was a risk to send funds from the same address more than once in the old legacy network. If you see this message, Firefly will guide you through a process to help secure those addresses before migration. You can read more about spent addresses here.

#### What is bundle mining?

If you have spent addresses, it means you accidentally received funds to an address that was already spent from. These funds are not safe to send again due to the Winternitz type one-time signature scheme (see below under "Spent Addresses" for more details).

To secure your spent addresses during the migration, Firefly will try to find a new bundle that reveals the least amount of additional private key parts compared to previous signs.

This process will take 10 minutes per spent address and, upon completion, you will be presented with a risk calculation (very high, high, medium, low, very low). It is recommended that you repeat the process if it returns a bundle with medium risk or higher, particularly for significant sums of IOTA. You have the option to select which addresses you want to mine for and again which you want to rerun the process for.

## Spent Addresses

#### What are spent addresses, and why are they dangerous?

In the original IOTA network, IOTA used Winternitz One Time Signatures (W-OTS): think of these as, more or less, an authenticator and validator for a transaction. These keys and signatures are highly secure against malicious attacks for signing transactions. But, on the downside, by signing a transaction, W-OTS reveals parts of a private key for the specific address tokens are being spent from.

With W-OTS, every time a signature is signed to spend tokens from a particular address, any remaining tokens need to be moved onto a new address to prevent malicious actors from brute-forcing (trial-and-error guessing) the remaining parts of the private key for the address. That's the main reason why this signature scheme is considered to be a "one-time signature".

So after the Chrysalis update, we are using the Ed25519, based on the EdDSA scheme instead of W-OTS. The advantage is that the new scheme addresses all of the issues that W-OTS originally had, where Ed25519 verifies both single-signature and batch verification (taking care of the remaining tokens) very quickly and faster key generation and smaller signatures (very secure).

#### Why is it not possible to migrate some of my tokens?

If you have lots of small amounts (<1Mi) spread across many addresses, it may not be possible to migrate these as there is a minimum requirement of 1Mi for a successful migration due to our dust protection. In this case, it is not possible to migrate a seed with less than 1Mi. It is recommended you consolidate your funds in Trinity first by simply sending your entire balance to yourself.

#### Why does Firefly keep telling me the same risk rating?

Firefly will conduct bundle mining in rare cases because of your spent address(es). When attempting to proceed with the migration, Firefly will spend a few minutes trying to find a safe bundle for the address(es), so you can migrate tokens safely.

Once the security check completes, you can choose to rerun the process (which may lower your risk level) or continue the migration process once you feel satisfied.

However, in some cases, it is difficult to improve the bundle's security. You may rerun the process as many times as you like, but some spent addresses are very difficult to lower the risk. You can keep trying or migrate anyway and accept the risk involved.
