---
name: zsxq
description: 知识星球 CLI 助手 — 在 Claude Code 中通过 zsxq-cli 操作知识星球（发帖、评论、查询、运营等）。需要 zsxq-cli 已登录。
user-invocable: true
allowed-tools: Bash, Read, Glob
---

# 知识星球助手 (zsxq)

在 Obsidian / Claude Code 中调用 `zsxq-cli` 操作知识星球。

## 触发条件

用户提到以下任一意图时触发：
- 知识星球、zsxq、小密圈、星球
- 发帖、发主题、提问、回答、评论
- 精华、置顶、标签、专栏
- 成员、到期、续费
- 日报、周报、海报、视频
- 每日巡场、负面监控

## 前提条件

- `zsxq-cli` 已安装并登录。
- 本机绝对路径：`C:\Users\Administrator\.workbuddy\binaries\node\versions\22.22.2\zsxq-cli`
- 在 Windows cmd 中请使用该绝对路径；Git Bash 中对应路径为 `/c/Users/Administrator/.workbuddy/binaries/node/versions/22.22.2/zsxq-cli`。

## 调用方式

Windows cmd：

```cmd
C:\Users\Administrator\.workbuddy\binaries\node\versions\22.22.2\zsxq-cli --help
```

Git Bash：

```bash
/c/Users/Administrator/.workbuddy/binaries/node/versions/22.22.2/zsxq-cli --help
```

## 常用命令速查

| 意图 | 命令 |
|---|---|
| 帮助 | `zsxq-cli --help` |
| 查看加入的星球 | `zsxq-cli group list` |
| 查看星球主题 | `zsxq-cli group topics --group-id <id>` |
| 发帖 | `zsxq-cli topic create --group-id <id> --content "..."` |
| 回答问题 | `zsxq-cli topic answer --topic-id <id> --content "..."` |
| 精华 | `zsxq-cli topic set --topic-id <id> --digest` |
| 置顶 | `zsxq-cli topic set --topic-id <id> --sticky` |
| 评论 | `zsxq-cli topic reply --topic-id <id> --content "..."` |
| 笔记 | `zsxq-cli note list` |

## 安全规则

- 写入、删除、精华、置顶等操作前必须向用户确认。
- 批量操作前确认影响范围。
- 定时任务注意每星球上限 10 个。

## 执行模式

1. **场景模式**：请求命中已注册场景时，先 Read `references/scenarios/<场景>.md` 再编排命令。
2. **原子操作**：请求明确对应一个常用操作时，直接调用命令。
3. **探索模式**：都不命中时，用 `zsxq-cli --help` 和 `zsxq-cli api list` 发现能力。

## 常见场景索引

| 用户想要… | 先读哪个 reference |
|---|---|
| 登录 / 查看登录状态 / 排查认证或 HTTP 错误 | `references/auth-errors.md` |
| 每日巡场 | `references/scenarios/daily-patrol.md` |
| 整理评论区、未回复评论 | `references/scenarios/triage-comments.md` |
| 处理向我提的未回答问题 | `references/scenarios/manage-inbound-questions.md` |
| 整理精华与标签 | `references/scenarios/curate-digest-and-tags.md` |
| 运营日报 / 周报 / 复盘 | `references/scenarios/compose-operations-report.md` |
| 生成日报海报 | `references/scenarios/generate-daily-poster.md` |
| 生成竖版动画视频 | `references/scenarios/generate-video.md` |
| 负面内容监控 | `references/scenarios/monitor-risky-content.md` |
| 批量打标签 | `references/scenarios/batch-tag-topics.md` |
| 到期成员续费关怀 | `references/scenarios/care-expiring-members.md` |
| 收录主题到专栏 | `references/scenarios/archive-topics-to-column.md` |
| 列出我加入的星球 / 获取 group_id | `references/group-list.md` |
| 修改星球名称 / 简介 / 背景图 | `references/group-settings.md` |
| 浏览星球内最新主题 | `references/group-topics.md` |
| 发帖 | `references/topic-create.md` |
| 编辑帖子 | `references/topic-edit.md` |
| 评论 / 楼中楼回复 | `references/topic-reply.md` |
| 回答提问 | `references/topic-answer.md` |
| 删除主题 | `references/topic-delete.md` |
| 定时发布主题 | `references/topic-schedule.md` |
| 查看待执行定时任务 | `references/topic-scheduled.md` |
| 查看自己发过的帖子 | `references/user-footprints.md` |
| 查看 / 编辑 / 删除笔记 | `references/note-create.md` 等 |

## 详细参考

当前目录下的 `references/` 文件夹包含所有接口与场景说明，`workbuddy-SKILL.md` 保留原始完整指南。