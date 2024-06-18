---
title: "VIM备忘录"
toc: true
---


VIM设计哲学

# 基础操作

## Insert text
在 `normal` 模式下，按 `i` 进入 `insert` 模式。这时 Vim 就和普通的记事本软件没有区别。

## Buffers, tabs, and windows

Vim 将所有打开的文件作为一组，叫做 `buffer`。在一次 Vim Session 中，有许多 `tab`，每个 `tab` 都会有许多 `window`，每个 `window` 显示一个 `buffer`。

与浏览器不同，`buffer` 和 `window` 不存在一一对应的关系。`window` 只是视图，指定的 `buffer` 可以在多个 `window` 中打开，甚至在同一个 `tab` 中也是如此

例如，这可以非常方便地同时查看文件的两个不同部分。

默认情况下，Vim 打开一个 `tab`，其中包含一个 `window`

## Command-Line

在 `normal` 模式下，按 `:` 即可进入命令模式。该模式有很多功能，包括打开、保存、关闭文件以及退出Vim

- `:q` quit (close window)
- `:w` save ("write")
- `:wq` save and quit
- `:e {name or file}` open file for editing
- `:ls` show open buffers
- `:help {topic}` open help
  - `:help :w` opens help for the `:w` command
  - `help w` opens help for the `w` movement

# Vim的本质是一种编程语言

## Movement
正常情况下，应该花费大量时间在 `normal` 模式下，使用移动键来进行移动

- Basic movement: `hjkl` (left, down, up, right)
- Words: `w` (next word), `b` (beginning of word), `e` (end of word)
- Lines: `0` (beginning of line), `^` (first non-blank character), `$` (end of line)
- Screen: `H` (top of screen), `M` (middle of screen), `L` (bottom of screen)
- Scroll: `Crtl-u` (up), `Ctrl-d` (down)
- File: `gg` (beginning of file), `G` (end of file)
- Line numbers: `:{number}<CR>` or `{number}G` (line {number})
- Misc: `%`(corresponding item)
- Find: `f{character}`, `t{character}`, `F{character}`, `T{character}`
  - find/to forward/backward {character} on the current line
  - `,` / `;` for navigating matches
- Search: `/{regex}`, `n` / `N` for navigating matches

Q:如何将光标移动到行尾怎么办？

A: `A` 表示将光标移动到行尾并进入 `Insert` 模式
   `$` 表示光标移动到行尾


