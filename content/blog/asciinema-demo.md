---
title: "Asciinema Player 演示"
date: 2025-08-21
description: "演示如何在Hugo博客中使用asciinema player播放终端录制文件"
tags: ["asciinema", "demo", "terminal"]
---

# Asciinema Player 演示

这篇文章演示了如何在Hugo博客中使用asciinema player来播放终端录制文件。

## 基本用法

最简单的用法，只需要指定cast文件路径：

{{< asciinema file="demo.cast" >}}

## 带主题的播放器

你可以指定不同的主题：

{{< asciinema file="demo.cast" theme="dracula" >}}

## Marker点功能

### 普通Marker点

在特定时间点添加标记，用于导航：

{{< asciinema file="demo.cast" markers="2.0,4.0,6.0,8.0" >}}

### 带标签的Marker点

在特定时间点添加带标签的标记：

{{< asciinema file="demo.cast" labeledMarkers="2.0:ls命令,4.0:查看文件,6.0:执行命令,8.0:显示路径" >}}

### 混合Marker点

同时使用普通marker和labeled marker：

{{< asciinema file="demo.cast" markers="1.0,3.0,5.0" labeledMarkers="2.0:ls命令,4.0:查看文件,6.0:执行命令" >}}

## 自定义播放设置

你可以调整播放速度、字体大小等：

{{< asciinema file="demo.cast" speed="2" fontSize="18px" theme="monokai" >}}

## 自动播放和循环

{{< asciinema file="demo.cast" autoplay="true" loop="true" >}}

## 从特定时间开始播放

{{< asciinema file="demo.cast" startAt="3.0" >}}

## 完整配置示例

{{< asciinema 
    file="demo.cast" 
    theme="solarized-dark" 
    speed="1.5" 
    fontSize="16px" 
    lineHeight="1.4" 
    markers="2.0,4.0,6.0" 
    labeledMarkers="3.0:文件列表,5.0:文件内容,7.0:命令执行" 
    width="90%" 
    height="400px" 
>}}

## 高级示例 - Node.js项目设置

这是一个更复杂的示例，展示了如何设置一个Node.js项目：

{{< asciinema 
    file="advanced-demo.cast" 
    theme="dracula" 
    speed="2" 
    fontSize="14px" 
    markers="4.0,7.0,10.0,12.0,14.0,17.0,19.0" 
    labeledMarkers="2.0:开始设置,4.0:创建项目目录,7.0:初始化npm项目,10.0:安装依赖,12.0:查看文件结构,14.0:创建服务器代码,17.0:启动服务器,19.0:测试API" 
    width="95%" 
    height="500px" 
>}}

## 使用方法

在你的Markdown文件中，使用以下语法：

```markdown
{{</* asciinema file="your-file.cast" */>}}
```

### 可用参数

- `file`: cast文件路径（必需）
- `theme`: 主题名称（默认：asciinema）
- `speed`: 播放速度（默认：1）
- `autoplay`: 是否自动播放（默认：false）
- `loop`: 是否循环播放（默认：false）
- `startAt`: 开始播放的时间点
- `poster`: 海报图片URL
- `markers`: 普通marker点，用逗号分隔的时间点
- `labeledMarkers`: 带标签的marker点，格式为"时间:标签,时间:标签"
- `fontSize`: 字体大小（默认：15px）
- `lineHeight`: 行高（默认：1.33333334）
- `width`: 容器宽度（默认：100%）
- `height`: 容器高度（默认：auto）

### 支持的主题

- asciinema（默认）
- dracula
- monokai
- solarized-dark
- solarized-light
- tango
- tomorrow-night
- tomorrow-night-bright
- tomorrow-night-blue
- tomorrow-night-eighties
- tomorrow
- white
