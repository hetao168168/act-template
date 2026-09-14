# 压力测试结果 — zhi-xuan-zhishu-jijin

- **测试方式**: 独立 sub-agent 盲测
- **测试时间**: 2026-08-26
- **通过率**: 6/6 = 100%

| id | type | 预期 | 盲测结果 | 判定 |
|---|---|---|---|---|
| should-trigger-01 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-02 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-03 | should_trigger | 本 skill | 本 skill | ✓ |
| should-not-trigger-01 | should_not_trigger | 不调用 | none | ✓ |
| should-not-trigger-02 | should_not_trigger | 调 guimo-jueding-shu | guimo-jueding-shu | ✓ |
| edge-01 | edge_case | 本 skill(个股也过不了筛选) | 本 skill | ✓ |

**结论**: 全通过。

---

## 复测（2026-09-08）

- **测试方式**: 独立 sub-agent 盲测（只给 5 个技能的 frontmatter description，不给预期答案）
- **通过率**: 6/6 = 100%

| id | type | 预期 | 复测结果 | 判定 |
|---|---|---|---|---|
| should-trigger-01 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-02 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-03 | should_trigger | 本 skill | 本 skill | ✓ |
| should-not-trigger-01 | should_not_trigger | 不调用 | none | ✓ |
| should-not-trigger-02 | should_not_trigger | 调 guimo-jueding-shu | guimo-jueding-shu | ✓ |
| edge-01 | edge_case | 本 skill(个股也过不了筛选) | 本 skill | ✓ |

**备注**: edge-01 中「翻倍」是朋友转述而非用户自身预期，盲测 agent 正确未误投 `jiang-yuqi-maodian`；should-not-trigger-02 虽含触发词「定投」「指数」，仍靠语义门（"纠结选什么标的"）正确排除。
