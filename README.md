# 高清源

从 `com.isiketv.app` (FongMi TV 内核) 提取的 TVBox 播放源，已重组成可直接远程订阅的配置。

## 订阅地址

**GitHub（主）**
```
https://raw.githubusercontent.com/haonanren118/高清源/main/config.json
```

**Gitee（镜像，国内更快）**
```
https://gitee.com/haonanren118/高清源/raw/main/config.json
```

## 内容

| 项 | 数量 | 说明 |
|---|---|---|
| 站点 | 82 | drpy2 (type=3) 规则，含 4K 分类 |
| 直播 | 6 | 含本地 m3u/txt 与远程直播源 |
| 解析 | 1 | 嗅探解析接口 |
| 规则 | 13 | 播放器嗅探规则 |

### 4K 源

- **电影港 4K高清区** — `https://www.dygang.tv/4K/`（备用域名 `https://www.dygang.cc/4K/`）
  - 首页 21 条 `[2160p]`，全站 35 条真 4K
  - 详情页明确标注「2160p高清电影」
  - **磁力资源站**，播放地址为 magnet 链接，需支持磁力的播放器

## 使用方法

### TVBox / 影视仓
设置 → 配置地址 → 填入上面的 `config.json` 链接。

### 飞牛 NAS fnmedia
应用设置 → 配置管理 → 添加远程配置，填入同一链接。

## 目录结构

```
├── config.json          # 主配置（GitHub raw）
├── config.gitee.json    # 镜像配置（Gitee raw）
└── js/
    ├── drpy2.min.js     # drpy2 引擎
    ├── cheerio.min.js   # 引擎依赖（必须与引擎同目录）
    ├── 模板.js          # 引擎依赖
    ├── gbk.js           # 引擎依赖
    └── <各站点规则>.js
```

> **注意**：drpy2 引擎用相对路径 `import` 加载依赖（`from"cheerio.min.js"`），
> 引擎的 base 取 URL 中最后一个 `/` 之前的部分，因此 `js/` 下的文件必须保持在同一目录。

## 来源与声明

规则与配置来自公开的 `com.isiketv.app` APK 提取整理，仅供个人学习交流使用。
请勿用于商业用途或二次售卖。
