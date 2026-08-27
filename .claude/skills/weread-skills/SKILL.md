---
name: weread-skills
description: 微信读书助手 — 在 Claude Code 中调用微信读书接口搜索书籍、管理书架、查看笔记划线、浏览书评、阅读统计等。需要环境变量 WEREAD_API_KEY 已设置。
user-invocable: true
allowed-tools: Bash, Read, Glob
---

# 微信读书助手 (weread-skills)

在 Obsidian / Claude Code 中调用微信读书 Agent API。

## 触发条件

用户提到以下任一意图时触发：
- 搜书、找书、微信读书搜索
- 书架、我的书架、看看书架
- 笔记、划线、想法、点评、导出的划线
- 阅读时长、读了多久、阅读统计
- 书评、推荐好书

## 前提条件

- 环境变量 `WEREAD_API_KEY` 必须已设置（格式 `wrk-xxxxxxxx`）。
- `curl` 必须可用（Windows 10+ 自带 `curl.exe`，Git Bash 也有）。

## 调用规范

**统一入口**

```
POST https://i.weread.qq.com/api/agent/gateway
```

**Header**

```
Authorization: Bearer $WEREAD_API_KEY
Content-Type: application/json
```

**Body 规则**

- 每次请求必须带 `"skill_version": "1.0.4"`
- 业务参数平铺在 body 顶层，不要包在 `params` 里

## Windows cmd 示例

```cmd
curl -X POST "https://i.weread.qq.com/api/agent/gateway" -H "Authorization: Bearer %WEREAD_API_KEY%" -H "Content-Type: application/json" -d "{\"api_name\":\"/store/search\",\"keyword\":\"三体\",\"count\":10,\"skill_version\":\"1.0.4\"}"
```

## Git Bash / WSL 示例

```bash
curl -X POST "https://i.weread.qq.com/api/agent/gateway" \
  -H "Authorization: Bearer $WEREAD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"api_name":"/store/search","keyword":"三体","count":10,"skill_version":"1.0.4"}'
```

## 常用接口速查

| 意图 | api_name | 关键参数 |
|---|---|---|
| 搜索书籍 | `/store/search` | `keyword`, `count` |
| 书籍详情 | `/book/info` | `bookId` |
| 书架 | `/shelf/sync` | — |
| 笔记/划线 | `/user/notebooks` | `count`, `lastSort` |
| 阅读统计 | `/user/read-data` | 见 `readdata.md` |
| 书评 | `/book/readreviews` | `bookId`, `count` |

## 核心规则

1. **版本上报**：每次请求必须带 `"skill_version": "1.0.4"`。
2. **参数平铺**：业务参数必须和 `api_name`、`skill_version` 放在同一层，不要包在 `params`、`data`、`body` 里。
3. **先搜书再查详情**：用户输入书名时，先调 `/store/search` 获取 `bookId`，再执行后续操作。
4. **时间戳展示**：Unix 时间戳字段展示时须转为 `YYYY-MM-DD`。
5. **阅读时长**：单位为秒，展示时转为"X小时Y分钟"。
6. **升级提示**：若回包出现 `upgrade_info`，立即停止并按指引升级，不得忽略。
7. **上下文衔接**：对话中记住已查询的 `bookId`，后续操作无需用户重复提供。
8. **结果展示**：列表用编号展示；搜索结果重点展示书名、作者、评分。

## 详细参考

当前目录下的 `workbuddy-SKILL.md`、`search.md`、`book.md`、`notes.md`、`shelf.md`、`readdata.md`、`review.md`、`discover.md`、`profile.md`。

调用具体能力前，先 Read 对应说明文件确认接口参数和字段含义。