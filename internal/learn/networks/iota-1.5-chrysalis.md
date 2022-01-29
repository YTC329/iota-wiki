---
title: IOTA 1.5 Chrysalis
description: The current Mainnet implementation where all IOTA transactions and
  use cases happen.
---

# IOTA 1.5 蛹

## 遠見

IOTA 基金會正在實現其去中心化 IOTA 主網的核心目標。在去除協調器的基礎研究方面取得了相當大的進展：這被稱為“Coordicide”。一些 Coordicide 模塊已經添加到 IOTA 主網上，包括自動對等和對象存儲。在完成 Coordicide 之前，IOTA 主網必須進一步優化，為生態系統提供業務兼容的解決方案。

此中間更新在項目名稱“蛹”下運行。蛹是毛毛蟲在從繭中出來之前形成的一種完全發育的飛蛾或蝴蝶的形狀。在 IOTA 的背景下，蛹代表將主網轉變為成熟的形式，以使 IOTA 進入生產就緒狀態。

為了更簡潔地描述網絡的狀態，它也被標記為IOTA 1.5。任何人都可以在 Tangle 上開始構建項目，而不必擔心需要對最終網絡遷移進行重大重構。在通往 IOTA 2.0（Coordicide）的道路上不會有重大變化，因為包括工具、庫和 API 在內的大部分代碼庫已經可用。

## 發行

蛹是 IOTA 歷史上最重要的更新；它涵蓋了 IOTA 基金會開發的協議、庫、錢包和軟件實現的所有方面。 糾纏的更新修復了技術問題和效率低下，並在性能和安全性方面實現了進一步的改進。該協議的奇異方面已被既定標準取代，並且為開發人員、企業和交易所提供了大量新工具。

第一個重要里程碑是在 2020 年 8 月部署 Chrysalis Phase One 實現的。此更新包括一組組件，可提高 IOTA 網絡的可靠性、性能和可用性。

Chrysalis 的第一階段導致：

- 交易確認時間約為 10 秒
- 減少將交易重新附加到糾纏的需要
- TPS（每秒事務數）顯著增加
- 節點的性能和可靠性改進

自 2021 年 4 月以來，完整的蛹網絡終於上線了。它應該給糾纏帶來顯著的性能提升，並極大地簡化了開發人員和感興趣的公司的處理。所有用戶都應該能夠通過新版本從幾個新功能中受益。除了糾纏的性能有所提高之外，還有很多變化，尤其是在賬戶管理方面。

Chrysalis 的第二階段包括：

- 可重複使用的地址和對標準加密 (EdDSA) 的支持
- 簡化的事務佈局和減小的事務大小，從而提高性能和效率
- IOTA 的可用性和可靠性的顯著改進
- 從帳戶模型到基於 UTXO 的模型的變化

## 遷移

遺留網絡仍在運行，以保證在 Coordicide 之前的任何時間遷移 IOTA 代幣。不再可能在舊網絡中轉移資金。

有關 IOTA 代幣遷移的更多詳細信息，請參閱 [這篇部落格](https://blog.iota.org/chrysalis-migration-process/)。在交易所持有的代幣將由各自的交易所代表其客戶進行遷移。

所有在新網絡或舊網絡中維護節點的用戶都可以使用 GitHub 上的最新版本升級他們的系統：

- [**蛹黃蜂**](https://github.com/gohornet/hornet)
- [**蛹蜂**](https://github.com/iotaledger/bee)
- [**遺留大黃蜂**](https://github.com/gohornet/hornet/releases/tag/v0.5.8)

---


## 有用的鏈接

- [**chrysalis.iota.org**](https://chrysalis.iota.org/) - 官方蛹狀態頁面
- [**blog.iota.org/iota-chrysalis-a-new-dawn**](https://blog.iota.org/iota-chrysalis-a-new-dawn/) - 關於 Chrysalis 的部落格公告
