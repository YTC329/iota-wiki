---
id: smart-contracts-VM-and-languages
title: Smart Contract VM & Languages
description: This article explains the underlying technologies of IOTA Smart Contracts - the Virtual Machine, and its plugins.
keywords:
  - Virtual Machines
  - VM
  - Smart Contracts
  - wasp
  - iscp
  - Wasm
  - EVM
  - Rust
  - Go
  - Solidity
---

本文解釋了 IOTA 智能合約的底層技術——虛擬機及其插件。

您將學習：

- 什麼是虛擬機，什麼是插件？
- Wasm VM 和 EVM 插件之間的差異
- 支持哪些編程語言？

## 虛擬機

在 IOTA 智能合約中，我們區分了兩件事：

- 虛擬機 (VM) 本身
- 虛擬機插件：處理器、動態擴展虛擬機的智能合約。

VM 本身是一個確定性的可執行文件，一個“黑匣子”。

VM 可以通過添加 VM 插件（運行確定性智能合約程序的 VM 處理器）來動態擴展。

在 IOTA 智能合約中，抽像是通用接口的集合，它使 IOTA 智能合約的整個架構和黃蜂節點不知道使用哪種確定性計算機器來運行智能合約程序。

目前，有兩個 VM 插件可用，[黃蜂虛擬機](/smart-contracts/guide/wasm_vm/intro) 和 [以太坊虛擬機](/smart-contracts/guide/evm/introduction)。

## 黃蜂 VM

WebAssembly（縮寫為 Wasm）是一種用於基於堆棧的虛擬機的二進制指令格式。任何高級語言都可用於編寫 IOTA 智能合約以編譯成 Wasm。 Wasm VM 當前支持 TinyGo（Go 的子集）和 Rust 編程語言。

### 為什麼我們選擇 Rust

我們使用 Rust 作為高級語言來編寫智能合約（SC）程序有幾個原因：

- Wasm 工具非常先進，因此可以輕鬆地將 Rust 程序編譯成 Wasm 二進製文件。
- Rust 的靈活性和內存管理模型允許在 Wasm 二進製文件中實現最小的運行時開銷。
- 從 Rust 生成的 Wasm 二進製文件非常小，只有幾千字節
- Rust 正在成為 SC 開發的流行語言，擁有良好的支持和廣泛的開發者社區。

### 為什麼我們選擇 TinyGo

也可以用 TinyGo 編程語言編寫 IOTA 智能合約，這是 Go 的一個子集。使用 TinyGo 具有以下優點：

- TinyGo 和 Go 易於理解和學習。
- Go 是 IOTA 社區中非常流行的語言。
- 一個非常擴展且易於使用的開發人員環境

[黃蜂節點](https://github.com/iotaledger/wasp) 是用 Go 編程的，[Test Framework Solo](/smart-contracts/guide/solo/what-is-solo/) 也是如此意味著您在測試代碼時不必經常切換語言。事實上，使用 Schema 工具，您可以以與編寫智能合約完全相同的方式進行測試。

TinyGo 代碼可以在不編譯到 Wasm 的情況下進行測試，這意味著您可以使用調試器單步執行代碼並檢查變量。

您可以找到許多 Wasm 智能合約示例 [在代碼存儲庫中](https://github.com/iotaledger/wasp/tree/master/contracts/wasm)。

## 以太坊虛擬機

[以太坊虛擬機](https://ethereum.org/en/developers/docs/evm/) 是以太坊中的運行時環境，允許使用[Solidity](https://docs.soliditylang.org/en/v0.8.9/) 編程語言。

Solidity 是一種專門為編寫智能合約而開發的面向對象的編程語言。

[IOTA 智能合約 EVM 插件](/smart-contracts/guide/evm/introduction/) 利用了 Solidity 智能合約的當前開發，並允許區塊鏈開發人員留在他們的舒適區。

在下一篇文章中，您將了解有關 IOTA 智能合約驗證器的所有信息。
