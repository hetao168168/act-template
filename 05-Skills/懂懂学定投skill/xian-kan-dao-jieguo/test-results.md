# 压力测试结果 — xian-kan-dao-jieguo

- **测试方式**: 独立 sub-agent 盲测 (无预期答案泄露)
- **测试时间**: 2026-08-26
- **通过率**: 6/6 = 100%

| id | type | 预期 | 盲测结果 | 判定 |
|---|---|---|---|---|
| should-trigger-01 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-02 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-03 | should_trigger | 本 skill | 本 skill | ✓ |
| should-not-trigger-01 | should_not_trigger | 不调用 | none | ✓ |
| should-not-trigger-02 | should_not_trigger | 调 zhi-xuan-zhishu-jijin | zhi-xuan-zhishu-jijin | ✓ |
| edge-01 | edge_case | 不优先调用(短期场景) | none | ✓ |

**结论**: 全通过。诱饵容错 0 满足,跨 skill 混淆测试通过。

---

## 复测（2026-09-08）

- **测试方式**: 独立 sub-agent 盲测（只给 5 个技能的 frontmatter description，不给预期答案）
- **通过率**: 5/6 = 83.3%

| id | type | 预期 | 复测结果 | 判定 |
|---|---|---|---|---|
| should-trigger-01 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-02 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-03 | should_trigger | 本 skill | **none** | ✗ |
| should-not-trigger-01 | should_not_trigger | 不调用 | none | ✓ |
| should-not-trigger-02 | should_not_trigger | 调 zhi-xuan-zhishu-jijin | zhi-xuan-zhishu-jijin | ✓ |
| edge-01 | edge_case | 不优先调用(短期场景) | none | ✓ |

**唯一不一致 — should-trigger-03**：prompt 为「怎么才能让自己长期坚持做一件事，而不是三分钟热度」。预期本 skill，盲测判 none，理由是「泛化的'如何长期坚持'方法论咨询，无具体长期投资/人生目标语境，不贴合任一技能语义」。

**根因**：本 skill 的 description 把适用范围锚定在具体长期事项上（定投、存养老金、练技能、写作、创业），而该 prompt 是泛化提问、未点名任何长期事项，盲测 agent 找不到语义锚点。

**建议修法（二选一，倾向前者——修 skill 而非修测试）**：
1. 在 description 中补一句：泛泛问「怎么才能长期坚持一件事」也应激活，先追问具体长期事项、确认时间尺度 ≥3 年后再套用本方法（与 E 段第 1 步「识别时间尺度」一致）；
2. 或把该测试用例改成带具体事项的问法（如「我在练一项技能，三五年才有回报，怎么坚持下去」）。

> 注：即便按此次复测的 5/6 计，仍高于 minimum_pass_rate 0.8；且诱饵（should_not_trigger）2/2 全对，容错 0 要求满足。
