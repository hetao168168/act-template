# 压力测试结果 — guimo-jueding-shu

- **测试方式**: 独立 sub-agent 盲测
- **测试时间**: 2026-08-26
- **通过率**: 6/6 = 100% (edge-01 首轮误判, 修复边界后重测通过)

| id | type | 预期 | 盲测结果 | 判定 |
|---|---|---|---|---|
| should-trigger-01 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-02 | should_trigger | 本 skill | 本 skill | ✓ |
| should-trigger-03 | should_trigger | 本 skill | 本 skill | ✓ |
| should-not-trigger-01 | should_not_trigger | 不调用 | none | ✓ |
| should-not-trigger-02 | should_not_trigger | 调 shifei-ji-chengbai | shifei-ji-chengbai | ✓ |
| edge-01 | edge_case | 本 skill(激进参数也先判本金安全) | ~~jiang-yuqi-maodian~~ → 修复后本 skill | ✓(重测) |

**修复记录**: edge-01「资金不大想设激进止盈线」首轮被误判为 `jiang-yuqi-maodian`,暴露了两个 skill 在"本金少/求快"信号上的重叠。修复方式(修 skill 而非修测试): 在 `guimo-jueding-shu` 的 A2 与 `jiang-yuqi-maodian` 的 B 段互写边界——"只要落点在参数怎么设(止盈线/额度/网格),归 guimo;落点在收益目标该定多高(翻倍/年化X%),才归 jiang"。重测通过。

**结论**: 全通过。
