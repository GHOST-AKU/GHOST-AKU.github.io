# GHOST_AKU 的个人网站

[![Website](https://img.shields.io/badge/website-ghost--aku.github.io-234bf2)](https://ghost-aku.github.io/)
[![GitHub Pages](https://img.shields.io/badge/deployed%20with-GitHub%20Pages-222)](https://pages.github.com/)

这是 **GHOST_AKU（谢志豪）** 的个人网站：一个放置代码实验、游戏、虚拟空间、人工智能探索和各种“不太安分的想法”的小型网络据点。

网站地址：**https://ghost-aku.github.io/**

## 这是什么

这里不是传统意义上的简历页，也不是单纯的项目列表。

它更像一个持续生长中的个人入口：

- 机器学习、深度学习与交互式 AI 实验
- 游戏与可玩性研究
- 虚拟漫游、程序化空间与数字城市
- 开放协议、数字所有权与区块链应用
- 对技术、城市、宗教、心灵和日常生活的随笔式思考

首页使用清冷的纸张色、钴蓝色轨道和像素幽灵，表达一种简单的工作态度：

> 保持好奇。拒绝无趣。

## 当前内容

### 个人首页

入口页位于仓库根目录，包含：

- 中文个人介绍与作品入口
- 响应式布局，适配桌面端与移动端
- 可互动的轨道像素幽灵
- 幽灵问候彩蛋与夜间模式
- prefers-reduced-motion 支持
- 不依赖构建工具、分析脚本、Cookie 或第三方运行时

### 精选项目

首页目前连接到几个公开项目：

- [AI Training Arcade / GBM Gradient Game](https://github.com/GHOST-AKU/gbm-gradient-game)
- [aku-rubik](https://github.com/GHOST-AKU/aku-rubik)
- [Bilibili World 2026 Virtual Tour](./bw/)

### 虚拟漫展

原有的 Bilibili World 2026 虚拟漫展没有删除，而是移动到 [/bw/](./bw/) 作为一个独立作品保留。

它包括：

- 国家会展中心总览
- 展馆入场引导
- 可步行的虚拟展厅
- 展厅探索与漫展护照收集机制

## 项目结构

    .
    ├── index.html          # 个人网站首页
    ├── home/
    │   ├── style.css       # 页面样式与响应式规则
    │   ├── app.js          # 幽灵互动、指针跟随与彩蛋
    │   └── ghost.svg       # 网站图标
    ├── bw/                 # 原 Bilibili World 虚拟漫展
    ├── assets/             # 虚拟漫展使用的静态资源
    ├── favicon.svg
    └── .nojekyll

## 本地运行

这是一个无构建步骤的静态网站。克隆仓库后，在仓库根目录运行：

    python3 -m http.server 8000

然后打开 http://localhost:8000。

也可以使用任何静态文件服务器直接托管根目录。

## 发布

网站通过 GitHub Pages 从 main 分支根目录发布：

https://ghost-aku.github.io/

修改 index.html、home/style.css 或 home/app.js 后，推送到 main，GitHub Pages 会自动更新。

## English

This repository contains **GHOST_AKU's personal website**: a small, evolving home for code experiments, games, virtual spaces, AI explorations, open protocols, and curious questions.

The site is intentionally a static, dependency-free HTML/CSS/JavaScript project. It includes a responsive Chinese editorial homepage, an interactive cobalt pixel ghost, a small night-mode easter egg, selected project links, and the preserved Bilibili World 2026 virtual tour at [/bw/](./bw/).

Live site: https://ghost-aku.github.io/

Run locally:

    python3 -m http.server 8000

The site is deployed from the main branch root through GitHub Pages.
