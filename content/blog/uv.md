---
title: 环境搭建之使用uv管理Python工具包
date: 2025-10-15
authors:
  - name: Lamber
    link: https://github.com/Lamber-maybe
    image: https://github.com/Lamber-maybe.png
tags:
  - uv
---

## 01. 安装

> An extremely fast Python package and project manager, written in Rust.

### 01.01 安装uv

安装方法参考其[官方仓库](https://github.com/astral-sh/uv)

### 01.02 通过uv安装特定版本的python

 `uv` 可以使用 `--python` 标志来指定 Python 版本，例如 `--python 3.11` 。如果系统上没有安装这个版本的python，它会下载并安装。

## 02. 用法

### 02.01 使用uv安装python软件包

所有能够使用 `pipx install` 安装的python工具，都可以使用 `uv tool install` 安装

并且支持以下3种安装方式：
1. 从PyPI安装：`uv tool install impacket`
2. 从git安装：`uv tool install git+https://github.com/Pennyw0rth/NetExec`
	1. 如果需要安装特定分支，只需要：`uv tool install git+https://github.com/dirkjanm/BloodHound.py.git@bloodhound-ce`
3. 从本地安装（也就是支持 `setup.py` 或 `setup.cfg` 或 `pyproject.toml` 安装方式的包）：`uv tool install .`

注：如果项目所描述的依赖不全，可以使用 `uv tool install --with <package>` 手动附加额外的依赖

### 02.02 使用uv更新python软件包

使用 `uv tool list` 列出已经安装的软件包。

1. 使用 `uv tool upgrade --all` 更新所有软件包
2. 使用 `uv tool upgrade <package>` 更新指定软件包

### 02.03 使用uv安装普通python脚本

第一步是使用 [PEP 723 – Inline script metadata](https://peps.python.org/pep-0723/) ，将 所需要的依赖添加到python脚本中

uv的add参数可以快速的做到这一点：
1. 添加指定依赖：`uv add --script targetedKerberoast.py impacket`
2. 添加整个 `requirements.txt`：`uv add --script targetedKerberoast.py -r requirements.txt`

然后 `uv run targetedKerberoast.py` 运行。

`uv` 会自动安装所需要的依赖，并且未来的运行不需要重新安装。

然后此时我们可以在脚本的头部，添加 `#!/usr/bin/env -S uv run --script`

然后 `chmod +x targetedKerberoast.py`

这样就可以将python脚本当作可执行文件直接运行。（注：可以将脚本复制到环境变量支持的路径下，如 `~/.local/bin`。这样就可以在任意位置直接运行脚本了）


## 附：参考链接

1. [Python Tools and Scripts w/ UV CheatSheet](https://0xdf.gitlab.io/cheatsheets/uv)