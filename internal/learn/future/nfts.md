---
title: Non-fungile Token (NFTs)
description: This article explains the different types of NFTs on IOTA.
---

## 什麼是 NFT？

以太坊是第一個通過 ERC-721 標準支持 NFT 的區塊鏈。與普通代幣的不同之處在於，NFT 是獨一無二的，並且可以清楚地驗證，並且可以用來證明任何數字商品的所有權。

NFT 有很多用例，最常見的用例是將圖像鏈接到它，這成為獨特的數字藝術，可以在開放的 NFT 市場上出售。

其他用例是將 NFT 用作遊戲中的資產、活動門票、去中心化金融 (DeFi)、去中心化自治組織 (DAO) 中的投票或元界中的任何對象。

## IOTA 上的不同 NFT 類型

![代幣化資產](/img/learn/layer2-tokenized-assets.png)

### 數字原生資產

第 1 層資產也稱為“數字原生資產”。借助 [IOTA 代幣化框架](https://blog.iota.org/tokenization-on-the-tangle-iota-digital-assets-framework/)，您可以使用 NFT 輸出類型在 L1 上創建 NFT。第 1 層 NFT 可以在整個層上轉移，無需任何費用，使您能夠在不同的智能合約鏈之間轉移 NFT。

### 第 2 層資產

第 2 層資產是在智能合約中創建的，可以憑空鑄造。這意味著，你不需要任何硬幣來鑄造新的 NFT。

- 對於 Wasm VM，在 [Rust、Go 和 Typescript](https://github.com/iotaledger/wasp/tree/develop/contracts/wasm/erc721) 中實現了 ERC721 標準。
- EVM 資產（以太坊標準，如 ERC721 或 ERC1155）可用於 IOTA 智能合約 EVM 鏈。您可以使用 [OpenZeppelin Smart Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) 中的開源庫。

## NFT 市場

第一個 IOTA NFT 市場由 IOTA 社區開發，並於 2021 年 7 月在 IOTA 2.0 DevNet 上推出。與其他網絡採用的昂貴且浪費能源的方法相比，市場是一種毫無意義的替代方案。
他們的測試階段已經結束。在接下來的步驟中，他們實施智能合約並集成瀏覽器錢包，以使 NFT 交易安全且可訪問。

- [nftiota.org](https://nftiota.org/)

## NFT 項目

社區還創造了非常棒的藝術品，並已經將它們放到了智能合約測試網上。請注意 - 所有這些 NFT 都在測試網上，請注意一些 NFT 項目可能會在主網啟動時進行新的投放。

這是社區項目的列表。請隨時添加您的！

- [iota-nft.art](https://iota-nft.art/)
- [iotabots.io](https://iotabots.io/)
- [iotawhales](https://pixeldoggy.com/iotawhales)
