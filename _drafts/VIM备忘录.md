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

```
     ^
     k
< h     l >
     j
     v
```

- 基础移动: `hjkl` (←, ↓, ↑, →) 
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

## Selection

Visual modes:

- Visual: `v`
- Visual Line: `V`

Q:如何将光标移动到行尾怎么办？

A: `A` 表示将光标移动到行尾并进入 `Insert` 模式
   `$` 表示光标移动到行尾


```
" Comments in Vimscript start with a `"`.

" If you open this file in Vim, it'll be syntax highlighted for you.

" Vim is based on Vi. Setting `nocompatible` switches from the default
" Vi-compatibility mode and enables useful Vim functionality. This
" configuration option turns out not to be necessary for the file named
" '~/.vimrc', because Vim automatically enters nocompatible mode if that file
" is present. But we're including it here just in case this config file is
" loaded some other way (e.g. saved as `foo`, and then Vim started with
" `vim -u foo`).
set nocompatible

" Turn on syntax highlighting.
syntax on

" Disable the default Vim startup message.
set shortmess+=I

" Show line numbers.
set number

" This enables relative line numbering mode. With both number and
" relativenumber enabled, the current line shows the true line number, while
" all other lines (above and below) are numbered relative to the current line.
" This is useful because you can tell, at a glance, what count is needed to
" jump up or down to a particular line, by {count}k to go up or {count}j to go
" down.
set relativenumber

" Always show the status line at the bottom, even if you only have one window open.
set laststatus=2

" The backspace key has slightly unintuitive behavior by default. For example,
" by default, you can't backspace before the insertion point set with 'i'.
" This configuration makes backspace behave more reasonably, in that you can
" backspace over anything.
set backspace=indent,eol,start

" By default, Vim doesn't let you hide a buffer (i.e. have a buffer that isn't
" shown in any window) that has unsaved changes. This is to prevent you from "
" forgetting about unsaved changes and then quitting e.g. via `:qa!`. We find
" hidden buffers helpful enough to disable this protection. See `:help hidden`
" for more information on this.
set hidden

" This setting makes search case-insensitive when all characters in the string
" being searched are lowercase. However, the search becomes case-sensitive if
" it contains any capital letters. This makes searching more convenient.
set ignorecase
set smartcase

" Enable searching as you type, rather than waiting till you press enter.
set incsearch

" Unbind some useless/annoying default key bindings.
nmap Q <Nop> " 'Q' in normal mode enters Ex mode. You almost never want this.

" Disable audible bell because it's annoying.
set noerrorbells visualbell t_vb=

" Enable mouse support. You should avoid relying on this too much, but it can
" sometimes be convenient.
set mouse+=a

" Try to prevent bad habits like using the arrow keys for movement. This is
" not the only possible bad habit. For example, holding down the h/j/k/l keys
" for movement, rather than using more efficient movement commands, is also a
" bad habit. The former is enforceable through a .vimrc, while we don't know
" how to prevent the latter.
" Do this in normal mode...
nnoremap <Left>  :echoe "Use h"<CR>
nnoremap <Right> :echoe "Use l"<CR>
nnoremap <Up>    :echoe "Use k"<CR>
nnoremap <Down>  :echoe "Use j"<CR>
" ...and in insert mode
inoremap <Left>  <ESC>:echoe "Use h"<CR>
inoremap <Right> <ESC>:echoe "Use l"<CR>
inoremap <Up>    <ESC>:echoe "Use k"<CR>
inoremap <Down>  <ESC>:echoe "Use j"<CR>

" A minimalist Vim plugin manager.
" https://github.com/junegunn/vim-plug
call plug#begin()

" List your plugins here
Plug 'tpope/vim-sensible'
Plug 'preservim/nerdtree'
Plug 'vim-airline/vim-airline'
Plug 'tpope/vim-liquid'

Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

Plug 'Valloric/YouCompleteMe'
call plug#end()
```
