---
id: energy-efficiency
title: Energy efficiency
description: Energy efficiency of transactions in the IOTA Network.
---

# 能源效率

任何分佈式帳本技術的一個重要衡量標準是每筆交易的能源成本。 IOTA 網絡旨在實現輕量級和節能。本頁概述了 IOTA 基金會為測量糾纏的能源效率而進行的測試的過程和結果要閱讀測試的全部細節，這個 [IOTA 基金會部落客文章](https://blog.iota.org/internal-energy-benchmarks-for-iota/)深入介紹了這個過程。

## 測試

能源基準測試是使用 Raspberry Pi 3 和 4 運行的 [Hornet節點](https://github.com/gohornet/hornet) 軟體。 Hornet 被設計為能夠在這些小型計算機等低功耗設備上運行。

測試是在為測試設置的專用私人糾纏以及主 [Chrysalis 網路](https://chrysalis.iota.org/)。對於專用測試網絡，使用筆記本電腦作為測試協調器並為 Pi 節點生成垃圾郵件交易。

為了測量能耗，INA219 電流傳感器用於測量設備在處理事務時消耗的功率。 INA219 數據由 BeagleBone Black 收集。然後根據設備空閒時消耗的功率對這些數據進行標準化，以確定處理事務的成本。在 10 分鐘內收集每組測量值。

## 結果

測試結果如下表1和圖2所示。

| 設備 |平均功率 | 
| ----------------------------------- | ------------- | 
| Raspberry Pi 3 (參考) | 2617.35 兆瓦 | 
| Raspberry Pi 4 (參考) | 2785.91 兆瓦 | 
| Raspberry Pi 3 (無訊息) | 2628.58 兆瓦 | 
| Raspberry Pi 4 (無訊息) | 2801.58 兆瓦 | 
| Raspberry Pi 3 (50 MPS 遠程 PoW) | 2745.52 兆瓦 | 
| Raspberry Pi 4 (50 MPS 遠程 PoW) | 2862.21 兆瓦 | 
| Raspberry Pi 3 (100 MPS 遠程 PoW) | 2947.90 兆瓦 | 
| Raspberry Pi 4 (100 MPS 遠程 PoW) | 2920.55 兆瓦 | 
| Raspberry Pi 3 (主網 PoW) | 2968.84 mW | 
| Raspberry Pi 4 (主網 PoW) | 3095.51 mW |

表 1：參考功率等級

有了這些結果，節點測試的數據然後根據節點沒有運行 Hornet 和運行 Hornet 而不處理消息的結果進行標準化。表 2 顯示了測試的最終結果。

|設備 |無訊息 |50 MPS 遠程 PoW |100 MPS 遠程 PoW |主網 PoW | 
| -------------------------------------- | ----------- | ----------------- | ------------------ | ----------- | 
| Raspberry Pi 3 | 11.23 兆瓦 | 128.16 兆瓦 | 330.55 兆瓦 | 351.49 兆瓦 | 
| Raspberry Pi 4 | 15.67 兆瓦 | 76.30 兆瓦 | 134.63 兆瓦 | 309.60 兆瓦 | 
| Raspberry Pi 3 (從 0 MPS 標準化) | | 116.92 兆瓦 | 319.32 兆瓦 | 340.26 兆瓦 | | Raspberry Pi 4 (從 0 MPS 標準化) | | 60.62 兆瓦 | 118.97 兆瓦 | 293.94 兆瓦 |

## 結果解釋

使用以每秒 0 條訊息運行的節點的歸一化數據，可以使用以下公式計算每條訊息的能量成本：

**能量(J) = 功率(W) \* 時間(s)**

需要注意的是，當設備執行主網工作證明時，它們平均每秒處理 0.0592 條訊息（RPi 3）和每秒 0.0730 條訊息（RPi 4）。對於遠程工作量證明方案，MPS 速率為每秒固定 50 條和 100 條消息。表 3 顯示了為每個測試場景計算的每條訊息的能源成本。

|設備|50 MPS 遠程 PoW |100 MPS 遠程 PoW |主網 PoW | 
| -------------- | ----------------------------------- | ------------------------------------ | -------------------------------------- | 
| Raspberry Pi 3 | 116.92 兆瓦 \* (1/50) S = **2.33 兆焦耳** | 319.32 兆瓦 \* (1/100) S = **3.19 兆焦耳** | 340.26 兆瓦 \* (1/.059) S = **5.77 焦耳** | | Raspberry Pi 4 | 60.62 兆瓦 \* (1/50) S = **1.21 兆焦耳** | 118.97 兆瓦 \* (1/100) S = **1.18 兆焦耳** | 293.94 兆瓦 \* (1/0.073) S = **4.026 焦耳** |
