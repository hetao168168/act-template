# AI 系统导航 · 可迁移个人知识系统

> 本笔记是 Obsidian「何涛的知识库」侧的统一入口，对应 WorkBuddy 侧的可迁移 AI 系统。
> 核心原则：纯文本 Markdown、本地优先、与平台解耦——换任何 AI 工具，只要指给它这个系统，就能复刻你的协作方式。

## 一、身份系统（让 AI 认识你）
身份文件是单一事实源，存放在 WorkBuddy 侧，此处只引用、不复制：
- SOUL.md（AI 灵魂/准则）：`C:\Users\Administrator\.workbuddy\SOUL.md`
- IDENTITY.md（AI 身份）：`C:\Users\Administrator\.workbuddy\IDENTITY.md`
- USER.md（你的档案/偏好）：`C:\Users\Administrator\.workbuddy\USER.md`

> 新 AI 工具接手时，让它先读这三个文件，即可"认识你"。

## 二、顶层索引（系统地图）
- 本地索引：`D:\workBuddy\AI系统索引.md`
- 它串起身份文件、记忆（`.workbuddy/memory`）、技能（`skills`）、文件家目录（`D:\workBuddy`）。

## 三、本 Vault 的 ACT / SOP 落地映射
你已有的 00–06 编号体系，本身就是 ACT + Skills 框架的实例：

| 文件夹 | 含义 | 对应框架 |
|---|---|---|
| 00-灵感库 | 临时灵感、碎片 | Action（输入端） |
| 01-项目 | 进行中的事 | **A**ction |
| 02-处理好的知识库 | 沉淀的知识资产 | **C**ontent |
| 03-资源 | 素材（epub、图片等） | Content（素材层） |
| 04-归档 | 历史记录、时间归档 | **T**ime |
| 05-Skills | 固化的 SOP 流程 | Workflow / Skills |
| 06-wiki | 知识网络、索引 | 索引层 |
| epub-books | 电子书摘录笔记 | **C**ontent（沉淀资产）|

> ACT = Action（行动）/ Content（内容）/ Time（时间）。你已自然落地，无需重建文件夹。

## 四、如何迁移 / 让新 AI 工具接手
1. 告诉新工具：「请先读 请先读 `D:\workBuddy\AI系统索引.md`，并按其中路径加载身份文件与记忆。」
2. 若新工具用 Obsidian：直接打开本 Vault，本导航笔记即入口。
3. 全部纯文本，无平台绑定——换工具只需重新指一次路径。

## 五、维护约定
- 身份文件 ≤ 200 行、高度提炼（避免 AI 读到后面忘前面）。
- 记忆只记有持久价值的内容。
- 文件操作：先复制校验、再删除；删除前必须明确确认。
- 身份文件单一事实源在 WorkBuddy 侧，Obsidian 内只引用、不复制。


## 相关笔记
- [[笔记系统-如何让AI认识你的仓库]] — 让 AI 认识仓库的 Obsidian 侧方法
- [[00-开始使用]] — 本 Vault 的启动入口
- [[8-第八节-记忆系统]] — AI 记忆与身份系统的衔接
