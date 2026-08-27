# Obsidian ACT 模板库 · Git 版本管理说明

> 适用仓库：`E:\何涛的知识库\ACT模板_2.1_260730`（ACT 课程配套模板库，与主知识库分仓管理）

## 1. 分支模型（单主干）
- `master` 为主分支，obsidian-git 自动提交目标。
- 大范围改动临时开 `feature/xxx`，验证后合并回 `master`。

## 2. 提交规范（Conventional Commits）
格式：`<type>(<scope>): <subject>`，类型见 `.gitmessage` 模板。已配置 `commit.template`。

## 3. .gitignore 要点
- 忽略 `.obsidian/workspace.json`、`.obsidian/workspace`（UI 状态）
- 忽略 `.obsidian/cache`、`.obsidian/.obsidian-sync-helper-backup/`（可重建）
- 忽略 `.trash/`、`*.tmp`、`.DS_Store`、`Thumbs.db`
- 保留插件二进制与启用列表，便于换机恢复

## 4. 远程同步
```bash
git remote add origin <仓库URL>   # 首次
git push -u origin master         # 首次推送
git push                          # 之后日常推送
```
> 建议远程仓库设为**私有**。

## 5. 常用命令
```bash
git status                 # 查看变更
git add -A && git commit   # 按模板提交
git push                   # 推送
git pull                   # 拉取（多设备时先 pull 再编辑）
```
