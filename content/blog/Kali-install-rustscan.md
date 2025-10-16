---
title: 在Kali中安装最新版的rustscan
date: 2025-10-12
authors:
  - name: Lamber
    link: https://github.com/Lamber-maybe
    image: https://github.com/Lamber-maybe.png
---

直接使用 `apt install` 安装的 rust 会存在版本老旧的问题，一些新的工具可能不兼容老版本rust。

按照以下步骤，可以安装最新版的rust，并使用最新版的cargo安装新工具：

```bash
# 1. 系统更新并安装必要工具
sudo apt update
sudo apt install -y build-essential curl

# 2. 安装 rustup（会安装 rustc 和 cargo）
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# 3. 让当前 shell 生效（或重开一个终端）
source "$HOME/.cargo/env"

# 4. 使用 cargo 安装 rustscan（加 --locked 更保险）
cargo install --locked rustscan

# 5. 确认安装成功
rustscan --version
```