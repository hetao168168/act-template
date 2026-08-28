var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ActWorkspacePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// theme-data.gen.ts
var THEME_CSS = '/* ============================================================\n   ACT Workspace \u2014 Payview SaaS Style\n   \u65B9\u5411: \u767D\u8272\u753B\u5E03 + \u6DF1\u7EFF\u4E3B\u8272 + \u67D4\u548C\u9634\u5F71 + \u73B0\u4EE3 SaaS \u4EEA\u8868\u76D8\n   \u53C2\u8003: Payview Task Management Platform\n   ============================================================ */\n\n.act-root {\n  container-type: inline-size;\n  --act-bg: #F4F6F3;\n  --act-card: #FFFFFF;\n  --act-card-dark: #1B3A2D;\n  --act-green: #40916C;\n  --act-green-deep: #2D6A4F;\n  --act-green-light: #D8F3DC;\n  --act-green-muted: #B7E4C7;\n  --act-purple: #95D5B2;\n  --act-purple-deep: #2D6A4F;\n  --act-text: #1B4332;\n  --act-text-soft: #40514E;\n  --act-text-faint: #8FA39B;\n  --act-text-inv: #FFFFFF;\n  --act-border: rgba(45, 106, 79, 0.10);\n  --act-border-strong: rgba(45, 106, 79, 0.20);\n  --act-red: #E06C75;\n  --act-orange: #D19A66;\n  --act-positive: #40916C;\n  --act-shadow-sm: 0 2px 8px rgba(27, 67, 50, 0.06);\n  --act-shadow: 0 4px 20px rgba(27, 67, 50, 0.08);\n  --act-shadow-lg: 0 8px 32px rgba(27, 67, 50, 0.10);\n  --act-warm-yellow: #FFF8E7;\n  --act-warm-yellow-border: #F5E6C8;\n  --act-warm-blue: #EEF4FF;\n  --act-warm-blue-border: #D4E2F5;\n  --act-warm-pink: #FFF0F0;\n  --act-warm-pink-border: #F5D4D4;\n  --act-r: 20px;\n  --act-r-sm: 14px;\n  --act-font: Inter, "SF Pro Text", -apple-system, system-ui, "Noto Sans SC", sans-serif;\n  --act-mono: "SF Mono", ui-monospace, Menlo, Consolas, monospace;\n\n  min-height: 100%;\n  padding: 32px;\n  color: var(--act-text);\n  font-family: var(--act-font);\n  font-size: 14px;\n  line-height: 1.5;\n  background: var(--act-bg);\n  overflow-y: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\n.act-root *,\n.act-root *::before,\n.act-root *::after {\n  box-sizing: border-box;\n}\n\n.act-root button,\n.act-root a {\n  text-decoration: none;\n}\n\n/* ========= OVERVIEW CARD \u2014 \u7EFF\u8272\u865A\u7EBF\u8FB9\u6846\uFF0C\u53C2\u8003 Payview Profile Card ========= */\n.act-overview {\n  max-width: 1480px;\n  margin: 0 auto 20px;\n  padding: 20px 24px;\n  border: 2px dashed var(--act-green-muted);\n  border-radius: var(--act-r);\n  background: var(--act-card);\n  box-shadow: var(--act-shadow-sm);\n}\n\n/* --- \u5DE5\u5177\u680F --- */\n.act-ov-toolbar {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.act-ov-skill-header {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n\n.act-ov-skill-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--act-text);\n}\n\n.act-ov-skill-desc {\n  font-size: 11px;\n  color: var(--act-text-soft);\n}\n\n.act-ov-skills {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  min-width: 0;\n}\n\n.act-ov-skill {\n  padding: 5px 12px;\n  border: 1.5px solid var(--act-border-strong);\n  border-radius: 999px;\n  background: var(--act-card);\n  color: var(--act-text-soft);\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.3;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-ov-skill:hover {\n  background: var(--act-green-light);\n  color: var(--act-green-deep);\n  border-color: var(--act-green-muted);\n}\n\n/* ========= TABS \u2014 \u836F\u4E38\u5F62\u5BFC\u822A\uFF0C\u53C2\u8003 Payview \u9876\u90E8 ========= */\n.act-tabs {\n  display: flex;\n  gap: 6px;\n  max-width: 1480px;\n  margin: 0 auto;\n  padding: 6px 8px;\n  border: 0;\n  border-radius: 999px;\n  background: var(--act-card);\n  box-shadow: var(--act-shadow-sm);\n}\n\n.act-tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 18px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent !important;\n  color: var(--act-text-faint);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: none !important;\n  transition: all 0.2s ease;\n}\n.act-tab-icon { font-size: 14px; }\n.act-tab-label { letter-spacing: 0.3px; }\n\n.act-tab:hover {\n  background: var(--act-green-light) !important;\n  color: var(--act-green-deep);\n}\n\n.act-tab.is-active {\n  background: var(--act-card-dark) !important;\n  color: var(--act-text-inv) !important;\n  font-weight: 700;\n}\n\n.act-action-button {\n  display: inline-flex;\n  width: 100%;\n  min-height: 42px;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border: 1.5px solid var(--act-border-strong) !important;\n  border-radius: 999px !important;\n  background: var(--act-card) !important;\n  color: var(--act-text) !important;\n  font-size: 13px;\n  font-weight: 600;\n  box-shadow: var(--act-shadow-sm);\n  transition: all 0.2s ease;\n}\n\n.act-action-button:hover {\n  background: var(--act-green) !important;\n  color: var(--act-text-inv) !important;\n  border-color: var(--act-green) !important;\n  box-shadow: 0 4px 12px rgba(64, 145, 108, 0.2);\n}\n\n.act-action-icon {\n  display: inline-flex;\n  flex: 0 0 auto;\n  width: 16px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n}\n\n.act-action-icon svg {\n  width: 16px;\n  height: 16px;\n}\n\n.act-action-label {\n  display: inline-block !important;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* ========= TAB BODY ========= */\n.act-tab-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 1480px;\n  margin: 0 auto 20px;\n  padding: 24px 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n}\n\n/* ========= PANELS ========= */\n.act-panel-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 1fr);\n  gap: 20px;\n  align-items: start;\n}\n\n.act-panel-main,\n.act-panel-side {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 20px;\n}\n\n/* ========= SECTION ========= */\n.act-section {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r);\n  background: var(--act-card);\n  color: var(--act-text);\n  box-shadow: var(--act-shadow);\n}\n\n.act-section::before {\n  content: attr(data-label);\n  display: block;\n  margin: 0 0 6px;\n  color: var(--act-green);\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.act-section::after {\n  content: none;\n}\n\n/* \u6DF1\u8272\u53D8\u4F53 section */\n.act-section[data-theme="dark"] {\n  background: var(--act-card-dark);\n  border-color: rgba(255, 255, 255, 0.06);\n  color: var(--act-text-inv);\n  box-shadow: var(--act-shadow-lg);\n}\n\n.act-section[data-theme="dark"]::before {\n  color: var(--act-green-muted);\n}\n\n.act-section[data-theme="dark"] .act-section-title {\n  color: var(--act-text-inv);\n}\n\n.act-section[data-theme="dark"] .act-task-row,\n.act-section[data-theme="dark"] .act-subtask {\n  color: rgba(255, 255, 255, 0.85);\n  border-top-color: rgba(255, 255, 255, 0.08);\n}\n\n.act-section[data-theme="dark"] .act-task-row:hover,\n.act-section[data-theme="dark"] .act-subtask:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #FFFFFF;\n}\n\n.act-section[data-theme="dark"] .act-task-row.is-done {\n  color: rgba(255, 255, 255, 0.35);\n}\n\n.act-section[data-theme="dark"] .act-empty,\n.act-section[data-theme="dark"] .act-hint,\n.act-section[data-theme="dark"] .act-source-note {\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.act-section-title {\n  margin: 0 0 14px;\n  padding-right: 0;\n  color: var(--act-text);\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.25;\n  letter-spacing: -0.01em;\n}\n\n.act-source-note {\n  position: static;\n  order: 99;\n  max-width: none;\n  margin-top: 14px;\n  padding-top: 10px;\n  border-top: 1px solid rgba(22, 57, 43, 0.10);\n  color: var(--act-text-faint);\n  font-size: 10px;\n  font-weight: 450;\n  line-height: 1.45;\n  opacity: 0.72;\n  text-align: left;\n  white-space: normal;\n}\n\n.act-action-btn-group {\n  position: absolute;\n  top: 42px;\n  right: 18px;\n  display: flex;\n  gap: 6px;\n}\n\n.act-action-btn-group .act-small-action {\n  position: static;\n}\n\n.act-small-action {\n  position: absolute;\n  top: 42px;\n  right: 18px;\n  padding: 6px 14px;\n  border: 1px solid var(--act-border-strong);\n  border-radius: 999px;\n  background: var(--act-card);\n  color: var(--act-green-deep);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.2;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-small-action:hover {\n  background: var(--act-green);\n  color: var(--act-text-inv);\n  border-color: var(--act-green);\n}\n\n.act-section[data-theme="dark"] .act-flow-step {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.10);\n  color: rgba(255, 255, 255, 0.55);\n}\n\n.act-section[data-theme="dark"] .act-flow-step:hover {\n  background: var(--act-green-muted);\n  color: var(--act-card-dark);\n  border-color: var(--act-green-muted);\n}\n\n.act-section[data-theme="dark"] .act-flow-step.is-active {\n  background: var(--act-text-inv);\n  color: var(--act-card-dark);\n  border-color: var(--act-text-inv);\n}\n\n.act-section[data-theme="dark"] .act-flow-step.is-done {\n  background: var(--act-green);\n  color: var(--act-text-inv);\n  border-color: var(--act-green);\n}\n\n.act-section[data-theme="dark"] .act-day {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.10);\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.act-section[data-theme="dark"] .act-day:hover {\n  background: var(--act-green-muted);\n  color: var(--act-card-dark);\n}\n\n.act-section[data-theme="dark"] .act-day.is-today {\n  background: var(--act-green);\n  color: var(--act-text-inv);\n  border-color: var(--act-green);\n}\n\n.act-section[data-theme="dark"] .act-day.is-empty {\n  background: transparent;\n  border-style: dashed;\n  border-color: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.25);\n}\n\n.act-section[data-theme="dark"] .act-small-action {\n  border-color: rgba(255, 255, 255, 0.15);\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--act-green-muted);\n}\n\n.act-section[data-theme="dark"] .act-small-action:hover {\n  background: var(--act-green);\n  color: var(--act-text-inv);\n}\n\n/* ========= TEXT ELEMENTS ========= */\n.act-empty,\n.act-hint,\n.act-more {\n  color: var(--act-text-faint);\n  font-size: 13px;\n  line-height: 1.55;\n}\n\n.act-note {\n  padding: 12px 16px;\n  border-radius: var(--act-r-sm);\n  background: var(--act-bg);\n  color: var(--act-text-soft);\n  font-size: 13px;\n  line-height: 1.55;\n}\n\n.act-action-remark-box {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 8px;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  color: var(--act-text-faint);\n  font-size: 12px;\n  line-height: 1.45;\n}\n\n.act-action-remark-row {\n  display: flex;\n  gap: 8px;\n  min-width: 0;\n}\n\n.act-action-remark-label {\n  flex: 0 0 auto;\n  color: var(--act-text-faint);\n  font-size: 10px;\n  font-weight: 700;\n}\n\n.act-action-remark-text {\n  min-width: 0;\n  color: var(--act-text-soft);\n}\n\n/* ========= TASKS ========= */\n.act-task-row,\n.act-subtask {\n  display: block;\n  padding: 10px 0;\n  border-top: 1px solid var(--act-border);\n  color: var(--act-text);\n  font-size: 13.5px;\n  line-height: 1.45;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.act-task-row:first-of-type,\n.act-subtask:first-of-type {\n  border-top: none;\n}\n\n.act-task-row:hover,\n.act-subtask:hover {\n  color: var(--act-text);\n  background: var(--act-green-light);\n  padding-left: 10px;\n  border-radius: 8px;\n}\n\n.act-task-row.is-done {\n  color: var(--act-text-faint);\n  text-decoration: line-through;\n}\n\n/* ========= DIDA FIXED SCHEDULE ========= */\n.act-dida-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 12px;\n}\n\n.act-dida-source-inline {\n  margin: -4px 0 14px;\n  color: var(--act-text-faint);\n  font-size: 10px;\n  font-weight: 400;\n}\n\n.act-dida-header-actions {\n  position: absolute;\n  top: 38px;\n  right: 18px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.act-dida-tool {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 32px;\n  padding: 0 12px;\n  border: 1px solid var(--act-border-strong);\n  border-radius: 999px;\n  background: var(--act-card);\n  color: var(--act-text-soft);\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-dida-tool:hover {\n  background: var(--act-green);\n  color: var(--act-text-inv);\n  border-color: var(--act-green);\n}\n\n.act-dida-tool-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  flex: 0 0 auto;\n}\n\n.act-dida-tool-label {\n  display: inline-flex;\n  align-items: center;\n  line-height: 1;\n}\n\n.act-dida-panel {\n  min-width: 0;\n  padding: 16px;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r-sm);\n  background: var(--act-bg);\n  transition: padding 0.16s ease, background-color 0.16s ease, border-color 0.16s ease;\n}\n\n/* \u5F69\u8272\u9762\u677F \u2014 \u4ECA\u65E5\u6696\u9EC4\uFF0C\u672A\u5B89\u6392\u6696\u84DD\uFF0C\u53C2\u8003 Payview \u9879\u76EE\u5F69\u8272\u5361 */\n.act-dida-panel:first-child {\n  background: var(--act-warm-yellow);\n  border-color: var(--act-warm-yellow-border);\n}\n\n.act-dida-panel:nth-child(2) {\n  background: var(--act-warm-blue);\n  border-color: var(--act-warm-blue-border);\n}\n\n.act-dida-panel-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.act-dida-panel.is-collapsed {\n  padding: 14px 16px;\n  cursor: pointer;\n}\n\n.act-dida-panel-toggle {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 6px;\n  padding: 0;\n  border: 0 !important;\n  background: transparent !important;\n  color: var(--act-text) !important;\n  box-shadow: none !important;\n  cursor: pointer;\n  text-align: left;\n}\n\n.act-dida-panel-toggle-icon {\n  display: inline-flex;\n  width: 14px;\n  flex: 0 0 14px;\n  justify-content: center;\n  color: var(--act-text-faint);\n  font-size: 12px;\n  line-height: 1;\n}\n\n.act-dida-panel-title {\n  color: var(--act-text);\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.act-dida-count {\n  flex: 0 0 auto;\n  color: var(--act-text-faint);\n  font-size: 12px;\n  font-weight: 600;\n  text-align: right;\n}\n\n.act-dida-filter {\n  display: inline-flex;\n  max-width: 100%;\n  margin-top: 8px;\n  padding: 5px 8px;\n  border-radius: 8px;\n  background: var(--act-card);\n  color: var(--act-text-soft);\n  font-family: var(--act-mono);\n  font-size: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.act-dida-task {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 10px 0;\n  border-top: 1px solid var(--act-border);\n}\n\n.act-dida-task:first-child {\n  border-top: 0;\n}\n\n.act-dida-task.is-completing {\n  opacity: 0.55;\n  pointer-events: none;\n}\n\n.act-dida-task.is-mutating {\n  opacity: 0.55;\n  pointer-events: none;\n}\n\n.act-dida-check {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 18px;\n  flex: 0 0 16px;\n  margin-top: 2px;\n  cursor: pointer;\n}\n\n.act-dida-check > div {\n  width: 12px;\n  height: 12px;\n  border: 1.5px solid var(--act-text-faint);\n  border-radius: 50%;\n  transition: all 0.15s ease;\n}\n\n.act-dida-check:hover > div {\n  border-color: var(--act-green);\n  background: var(--act-green);\n}\n\n.act-dida-body {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.act-dida-title {\n  display: block;\n  min-width: 0;\n  color: var(--act-text);\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.45;\n  overflow-wrap: anywhere;\n}\n\n.act-dida-priority {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 6px;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: var(--act-green);\n  color: var(--act-text-inv);\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 1.3;\n  vertical-align: middle;\n}\n\n.act-dida-overdue {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 6px;\n  padding: 1px 7px;\n  border-radius: 999px;\n  background: #FFE7E0;\n  color: #B5422B;\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 1.3;\n  vertical-align: middle;\n}\n\n.act-dida-due {\n  color: var(--act-text-faint);\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.act-dida-due.is-overdue {\n  color: #B5422B;\n  font-weight: 700;\n}\n\n.act-dida-task-actions {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  flex: 0 0 auto;\n  margin-left: auto;\n}\n\n.act-dida-task-action {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: 1px solid var(--act-border);\n  border-radius: 999px;\n  background: var(--act-card);\n  color: var(--act-text-faint);\n  cursor: pointer;\n}\n\n.act-dida-task-action svg {\n  width: 13px;\n  height: 13px;\n  color: currentColor;\n  stroke: currentColor;\n}\n\n.act-dida-task-action:hover {\n  border-color: var(--act-green);\n  background: var(--act-green-light);\n  color: var(--act-green-deep);\n}\n\n.act-dida-desc {\n  color: var(--act-text-faint);\n  font-size: 11px;\n  line-height: 1.4;\n  overflow-wrap: anywhere;\n}\n\n/* ========= GROUP LABEL \u2014 \u5F69\u8272\u533A\u5206\u805A\u7126/\u8DDF\u8FDB ========= */\n.act-group-label {\n  display: inline-flex;\n  width: fit-content;\n  margin: 12px 0 6px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  background: var(--act-green-light);\n  color: var(--act-green-deep);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n/* \u805A\u7126\u7EC4\u7528\u6696\u7C89\u8272\u6807\u7B7E */\n.act-group-label:first-of-type {\n  background: var(--act-warm-pink);\n  color: #C25050;\n  border: 1px solid var(--act-warm-pink-border);\n}\n\n/* \u8DDF\u8FDB\u7EC4\u7528\u6696\u84DD\u8272\u6807\u7B7E */\n.act-group-label:nth-of-type(2) {\n  background: var(--act-warm-blue);\n  color: #4A7AB5;\n  border: 1px solid var(--act-warm-blue-border);\n}\n\n/* ========= CARDS \u2014 \u53C2\u8003 Payview \u9879\u76EE\u5361\u7247\u98CE\u683C ========= */\n.act-action-card,\n.act-project-card,\n.act-read-item {\n  margin-top: 10px;\n  padding: 16px;\n  border: 1px solid var(--act-border);\n  border-left: 4px solid var(--act-green-muted);\n  border-radius: var(--act-r-sm);\n  background: var(--act-card);\n  box-shadow: var(--act-shadow-sm);\n  transition: all 0.2s ease;\n}\n\n.act-action-card:hover,\n.act-project-card:hover,\n.act-read-item:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--act-shadow);\n  border-left-color: var(--act-green);\n}\n\n/* \u9879\u76EE\u5361\u7247\u4E0D\u540C\u72B6\u6001\u7684\u5DE6\u8FB9\u6846\u8272 */\n.act-project-card {\n  border-left-color: var(--act-warm-yellow-border);\n  background: linear-gradient(135deg, var(--act-warm-yellow) 0%, var(--act-card) 60%);\n}\n\n.act-section[data-theme="dark"] .act-action-card,\n.act-section[data-theme="dark"] .act-project-card,\n.act-section[data-theme="dark"] .act-read-item {\n  border-color: rgba(255, 255, 255, 0.10);\n  background: rgba(255, 255, 255, 0.04);\n  box-shadow: none;\n}\n\n.act-section[data-theme="dark"] .act-action-card:hover,\n.act-section[data-theme="dark"] .act-project-card:hover,\n.act-section[data-theme="dark"] .act-read-item:hover {\n  background: rgba(255, 255, 255, 0.08);\n  box-shadow: none;\n}\n\n.act-action-top {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.act-action-title,\n.act-project-title,\n.act-read-title,\n.act-file-title,\n.act-file-label {\n  color: var(--act-text);\n  font-size: 14px;\n  font-weight: 650;\n  line-height: 1.3;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.act-action-title:hover,\n.act-project-title:hover,\n.act-read-title:hover,\n.act-file-title:hover,\n.act-file-label:hover {\n  color: var(--act-green-deep);\n}\n\n.act-section[data-theme="dark"] .act-action-title,\n.act-section[data-theme="dark"] .act-project-title,\n.act-section[data-theme="dark"] .act-read-title,\n.act-section[data-theme="dark"] .act-file-title,\n.act-section[data-theme="dark"] .act-file-label {\n  color: var(--act-text-inv);\n}\n\n/* ========= BADGES & CHIPS ========= */\n.act-badge,\n.act-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border: 1px solid var(--act-border-strong);\n  border-radius: 999px;\n  background: var(--act-bg);\n  color: var(--act-text-soft);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.3;\n  text-decoration: none;\n}\n\n.act-section[data-theme="dark"] .act-badge,\n.act-section[data-theme="dark"] .act-chip {\n  border-color: rgba(255, 255, 255, 0.16);\n  background: rgba(255, 255, 255, 0.06);\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.act-chip:hover {\n  background: var(--act-green);\n  color: var(--act-text-inv);\n  border-color: var(--act-green);\n}\n\n.act-priority {\n  border-color: var(--act-orange);\n  color: var(--act-orange);\n  background: rgba(209, 154, 102, 0.1);\n}\n\n.act-deadline-urgent,\n.act-deadline-soon {\n  border-color: var(--act-orange);\n  color: var(--act-orange);\n}\n\n.act-ready,\n.act-flow-step.is-done {\n  border-color: var(--act-green);\n  color: var(--act-green);\n}\n\n.act-deadline-overdue,\n.act-deadline-today {\n  border-color: var(--act-red);\n  background: rgba(224, 108, 117, 0.08);\n  color: var(--act-red);\n}\n\n/* ========= PROGRESS WORKBENCH ========= */\n.act-action-workbench {\n  display: grid;\n  grid-template-columns: minmax(240px, 0.82fr) minmax(0, 1.55fr) minmax(240px, 0.82fr);\n  gap: 20px;\n  align-items: start;\n}\n\n.act-week-direction-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n  margin-top: 14px;\n}\n\n.act-week-direction-item {\n  min-height: 56px;\n  padding: 12px 14px;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--act-text-inv);\n  font-size: 13px;\n  font-weight: 650;\n  line-height: 1.45;\n}\n\n.act-progress-shell {\n  display: grid;\n  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.8fr);\n  gap: 20px;\n  align-items: start;\n}\n\n.act-progress-list,\n.act-progress-detail,\n.act-action-insights {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  padding: 20px;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r);\n  background: var(--act-card);\n  box-shadow: var(--act-shadow);\n}\n\n.act-progress-list {\n  position: sticky;\n  top: 16px;\n  max-height: calc(100vh - 220px);\n  overflow: auto;\n}\n\n.act-action-insights {\n  position: sticky;\n  top: 16px;\n  max-height: calc(100vh - 220px);\n  overflow: auto;\n}\n\n.act-progress-list-title {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.act-progress-list-subtitle {\n  margin-top: 4px;\n  color: var(--act-text-faint);\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.act-progress-group {\n  margin: 16px 0 8px;\n  color: var(--act-green-deep);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.act-progress-task {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  width: 100%;\n  margin-top: 8px;\n  min-height: 62px;\n  padding: 12px 14px;\n  border: 1px solid var(--act-border) !important;\n  border-radius: 12px !important;\n  background: var(--act-bg) !important;\n  color: var(--act-text) !important;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.15s ease;\n}\n\n.act-progress-task:hover,\n.act-progress-task.is-active {\n  border-color: var(--act-green) !important;\n  background: var(--act-green-light) !important;\n}\n\n.act-progress-task.is-active {\n  box-shadow: 0 0 0 2px rgba(64, 145, 108, 0.2);\n  border-left: 3px solid var(--act-green) !important;\n}\n\n.act-progress-task.is-done {\n  opacity: 0.62;\n}\n\n.act-progress-task-title {\n  display: block;\n  min-width: 0;\n  font-size: 13px;\n  font-weight: 650;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n\n.act-progress-task-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 0;\n  color: var(--act-text-faint);\n  font-size: 10.5px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n\n.act-progress-task-meta span {\n  display: inline-flex;\n  align-items: center;\n  min-height: 18px;\n  padding: 2px 7px;\n  border: 1px solid rgba(22, 57, 43, 0.12);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.62);\n  color: var(--act-text-faint);\n  white-space: nowrap;\n}\n\n.act-filter-note {\n  order: 99;\n  margin-top: auto;\n  padding-top: 12px;\n  border-top: 1px solid rgba(22, 57, 43, 0.10);\n  color: var(--act-text-faint);\n  font-size: 10px;\n  font-weight: 450;\n  line-height: 1.45;\n  opacity: 0.72;\n}\n\n.act-progress-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n}\n\n.act-progress-head-text {\n  min-width: 0;\n}\n\n.act-progress-title {\n  color: var(--act-text);\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.act-progress-path {\n  margin-top: 4px;\n  color: var(--act-text-faint);\n  font-family: var(--act-mono);\n  font-size: 11px;\n  overflow-wrap: anywhere;\n}\n\n.act-progress-open,\n.act-progress-save {\n  flex: 0 0 auto;\n  min-height: 34px;\n  padding: 0 14px;\n  border: 1.5px solid var(--act-border-strong) !important;\n  border-radius: 999px !important;\n  background: var(--act-card) !important;\n  color: var(--act-text) !important;\n  font-size: 12px;\n  font-weight: 650;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-progress-open:hover,\n.act-progress-save:hover {\n  background: var(--act-green) !important;\n  color: var(--act-text-inv) !important;\n  border-color: var(--act-green) !important;\n}\n\n.act-progress-context {\n  margin-top: 14px;\n  padding: 14px 16px;\n  border: 1px solid var(--act-border);\n  border-radius: 12px;\n  background: var(--act-bg);\n}\n\n.act-progress-context-title {\n  color: var(--act-text);\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.act-progress-context-body {\n  margin-top: 7px;\n  color: var(--act-text-soft);\n  font-size: 13px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n}\n\n.act-progress-editor {\n  margin-top: 16px;\n  padding: 16px;\n  border: 1px solid var(--act-border);\n  border-radius: 16px;\n  background: var(--act-bg);\n}\n\n.act-progress-type-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n\n.act-progress-type {\n  min-height: 28px;\n  padding: 0 10px;\n  border: 1px solid var(--act-border-strong) !important;\n  border-radius: 999px !important;\n  background: var(--act-card) !important;\n  color: var(--act-text-soft) !important;\n  font-size: 11px;\n  font-weight: 650;\n  cursor: pointer;\n}\n\n.act-progress-type.is-active {\n  border-color: var(--act-green) !important;\n  background: var(--act-green) !important;\n  color: var(--act-text-inv) !important;\n}\n\n.act-progress-input {\n  width: 100%;\n  min-height: 132px;\n  resize: vertical;\n  border: 1.5px solid var(--act-border-strong);\n  border-radius: 12px;\n  background: #FFFFFF;\n  color: var(--act-text);\n  font-family: var(--act-font);\n  font-size: 14px;\n  line-height: 1.55;\n  padding: 12px;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n\n.act-progress-input:hover {\n  background: var(--act-card);\n}\n\n.act-progress-input:focus {\n  background: var(--act-card);\n  border-color: var(--act-green);\n  box-shadow: 0 0 0 3px rgba(64, 145, 108, 0.15);\n  outline: none;\n}\n\n.theme-dark .act-progress-input {\n  background: var(--act-card);\n  color: var(--act-text);\n  border-color: var(--act-border-strong);\n}\n\n.act-progress-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.act-progress-timeline {\n  margin-top: 18px;\n}\n\n.act-progress-timeline-title {\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.act-progress-entry {\n  margin-top: 10px;\n  padding: 12px 14px 12px 18px;\n  border-left: 3px solid var(--act-green);\n  border-radius: 0 12px 12px 0;\n  background: var(--act-bg);\n}\n\n.act-progress-entry-time {\n  color: var(--act-green-deep);\n  font-family: var(--act-mono);\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.act-progress-entry-text {\n  margin-top: 5px;\n  color: var(--act-text-soft);\n  font-size: 13px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n}\n\n.act-insight-item {\n  width: 100%;\n  margin-top: 10px;\n  padding: 12px 14px;\n  border: 1px solid var(--act-border) !important;\n  border-left: 4px solid var(--act-green) !important;\n  border-radius: 12px !important;\n  background: var(--act-bg) !important;\n  color: var(--act-text) !important;\n  text-align: left;\n  cursor: pointer;\n}\n\n.act-insight-item.is-danger {\n  border-left-color: var(--act-red) !important;\n}\n\n.act-insight-item.is-warning {\n  border-left-color: var(--act-orange) !important;\n}\n\n.act-insight-title {\n  font-size: 12px;\n  font-weight: 750;\n  line-height: 1.25;\n}\n\n.act-insight-detail {\n  margin-top: 5px;\n  color: var(--act-text-soft);\n  font-size: 12px;\n  line-height: 1.45;\n  overflow-wrap: anywhere;\n}\n\n/* ========= 12-WEEK FLOW ========= */\n.act-flow {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 8px;\n  margin-bottom: 10px;\n}\n\n.act-flow-step {\n  min-height: 40px;\n  padding: 8px 6px;\n  border: 1px solid var(--act-border-strong);\n  border-radius: 12px;\n  background: var(--act-bg);\n  color: var(--act-text-soft);\n  font-size: 12px;\n  font-weight: 650;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-flow-step:hover {\n  background: var(--act-green-light);\n  color: var(--act-green-deep);\n  border-color: var(--act-green-muted);\n}\n\n.act-flow-step.is-active {\n  background: var(--act-green-deep);\n  color: var(--act-text-inv);\n  border-color: var(--act-green-deep);\n}\n\n.act-flow-step.is-done {\n  background: var(--act-green);\n  color: var(--act-text-inv);\n  border-color: var(--act-green);\n}\n\n/* ========= WEEK GRID ========= */\n.act-week-grid {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  gap: 8px;\n}\n\n.act-day {\n  min-width: 0;\n  min-height: 56px;\n  padding: 8px 4px;\n  border: 1px solid var(--act-border-strong);\n  border-radius: var(--act-r-sm);\n  background: var(--act-bg);\n  color: var(--act-text-soft);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-day:hover {\n  background: var(--act-green-light);\n  color: var(--act-green-deep);\n  border-color: var(--act-green-muted);\n}\n\n.act-day.is-today {\n  background: var(--act-green-deep);\n  color: var(--act-text-inv);\n  border-color: var(--act-green-deep);\n}\n\n.act-day.is-empty {\n  color: var(--act-text-faint);\n  background: transparent;\n  border-style: dashed;\n  border-color: var(--act-border-strong);\n}\n\n.act-day-name,\n.act-day-num {\n  display: block;\n  text-align: center;\n  line-height: 1.1;\n}\n\n.act-day-name {\n  color: currentColor;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.act-day-num {\n  margin-top: 6px;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n\n.act-week-log-grid .act-day {\n  min-height: 46px;\n  padding: 7px 4px;\n}\n\n.act-week-log-grid .act-day-name {\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.act-week-log-grid .act-day-num {\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n/* ========= META ROWS ========= */\n.act-project-meta,\n.act-chip-row,\n.act-read-meta,\n.act-resource-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-top: 10px;\n}\n\n.act-published-row {\n  display: grid;\n  grid-template-columns: 86px minmax(0, 1fr);\n  gap: 10px;\n  align-items: baseline;\n  padding: 10px 0;\n  border-top: 1px solid var(--act-border);\n}\n\n.act-published-row:first-of-type {\n  border-top: none;\n}\n\n.act-published-row:hover {\n  background: var(--act-green-light);\n  padding-left: 8px;\n  border-radius: 8px;\n}\n\n.act-date {\n  color: var(--act-text-faint);\n  font-family: var(--act-mono);\n  font-size: 11px;\n}\n\n/* ========= RESOURCE ========= */\n.act-resource-card {\n  flex: 1 1 160px;\n  min-width: 0;\n  min-height: 74px;\n  padding: 16px;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r);\n  background: var(--act-card);\n  color: var(--act-text);\n  text-align: left;\n  cursor: pointer;\n  box-shadow: var(--act-shadow-sm);\n  transition: all 0.2s ease;\n}\n\n.act-resource-card:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: var(--act-shadow);\n  border-color: var(--act-green-muted);\n}\n\n.act-resource-card:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.act-resource-title {\n  font-size: 15px;\n  font-weight: 650;\n  line-height: 1.2;\n}\n\n.act-resource-meta {\n  margin-top: 8px;\n  color: var(--act-text-faint);\n  font-size: 12px;\n}\n\n/* ========= READ TAB ========= */\n.act-read-stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 8px;\n}\n\n.act-read-source {\n  margin: -2px 0 16px;\n  color: var(--act-text-faint);\n  font-size: 9px;\n  font-weight: 400;\n  line-height: 1.25;\n  opacity: 0.6;\n  text-align: right;\n}\n\n.act-read-stat {\n  min-height: 88px;\n  padding: 18px;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r);\n  background: var(--act-card);\n  box-shadow: var(--act-shadow-sm);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.act-read-stat:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--act-shadow);\n}\n.act-read-stat.is-clickable {\n  cursor: pointer;\n}\n\n.act-read-stat:first-child {\n  background: var(--act-warm-yellow);\n  border-color: var(--act-warm-yellow-border);\n}\n\n.act-read-stat:nth-child(2) {\n  background: var(--act-warm-blue);\n  border-color: var(--act-warm-blue-border);\n}\n\n.act-read-stat:last-child {\n  background: var(--act-bg-muted);\n  border-color: var(--act-border);\n}\n\n.act-section[data-theme="dark"] .act-read-stat {\n  color: #1a1a1a;\n}\n\n.act-section[data-theme="dark"] .act-read-stat:last-child {\n  background: var(--act-warm-yellow);\n  border-color: var(--act-warm-yellow-border);\n}\n\n.act-section[data-theme="dark"] .act-read-stat .act-read-count {\n  color: #1a1a1a;\n}\n\n.act-section[data-theme="dark"] .act-read-stat .act-read-label {\n  color: #555;\n}\n\n.act-section[data-theme="dark"] .act-pending-label {\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.act-section[data-theme="dark"] .act-pending-item {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.act-section[data-theme="dark"] .act-pending-item:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n\n.act-read-count {\n  color: var(--act-text);\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n\n.act-read-label {\n  margin-top: 8px;\n  color: var(--act-text-soft);\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.act-subtabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.act-subtab {\n  min-width: 0;\n  padding: 8px 16px;\n  border: 1px solid var(--act-border-strong);\n  border-radius: 999px;\n  background: var(--act-card);\n  color: var(--act-text-soft);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-subtab:hover {\n  border-color: var(--act-green);\n  color: var(--act-green-deep);\n}\n\n.act-subtab.is-active {\n  background: var(--act-green-deep);\n  color: var(--act-text-inv);\n  border-color: var(--act-green-deep);\n}\n\n.act-subtab.is-active::before,\n.act-subtab.is-active::after {\n  content: none;\n}\n\n.act-read-meta {\n  color: var(--act-text-faint);\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.act-remark {\n  margin-top: 10px;\n  padding: 12px 16px;\n  border-radius: var(--act-r-sm);\n  background: var(--act-bg);\n  color: var(--act-text-soft);\n  font-size: 13px;\n  line-height: 1.55;\n}\n\n.act-highlights {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.act-highlights-label {\n  color: var(--act-green-deep);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.act-highlight {\n  padding: 10px 14px;\n  border: 1px solid var(--act-green-muted);\n  border-radius: var(--act-r-sm);\n  background: rgba(216, 243, 220, 0.4);\n  color: var(--act-text);\n  font-size: 13px;\n  line-height: 1.55;\n}\n\n/* ========= AI SESSION TAB ========= */\n.act-ai-stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 8px;\n}\n\n.act-ai-platform-tabs {\n  margin-bottom: 0;\n}\n\n.act-ai-app-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin: 6px 0 14px;\n}\n\n.act-ai-utility {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  min-height: 32px;\n  padding: 0 12px;\n  border: 1px solid rgba(255, 255, 255, 0.18) !important;\n  border-radius: var(--act-r-sm) !important;\n  background: rgba(255, 255, 255, 0.06) !important;\n  color: #FFFFFF !important;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-ai-utility:hover {\n  border-color: var(--act-green) !important;\n  background: var(--act-green) !important;\n  color: #FFFFFF !important;\n}\n\n.act-ai-utility-icon {\n  display: inline-flex;\n  width: 14px;\n  height: 14px;\n  align-items: center;\n  justify-content: center;\n}\n\n.act-ai-utility-icon svg {\n  width: 14px;\n  height: 14px;\n}\n\n.act-ai-session-card {\n  margin-top: 12px;\n  padding: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  border-radius: var(--act-r-sm);\n  background: rgba(255, 255, 255, 0.04);\n  color: var(--act-text-inv);\n  transition: all 0.2s ease;\n}\n\n.act-ai-session-card:hover {\n  background: rgba(255, 255, 255, 0.07);\n}\n\n.act-ai-session-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.act-ai-session-title {\n  min-width: 0;\n  color: var(--act-text-inv);\n  font-size: 15px;\n  font-weight: 650;\n  line-height: 1.35;\n}\n\n.act-ai-platform {\n  flex: 0 0 auto;\n  padding: 4px 10px;\n  border-radius: 999px;\n  color: var(--act-card-dark);\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.act-ai-platform.is-codex {\n  background: var(--act-green-muted);\n}\n\n.act-ai-platform.is-claude {\n  background: var(--act-green-light);\n}\n\n.act-ai-session-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 10px;\n  margin-top: 8px;\n  color: rgba(255, 255, 255, 0.40);\n  font-family: var(--act-mono);\n  font-size: 10px;\n  line-height: 1.4;\n}\n\n.act-ai-session-summary {\n  margin-top: 10px;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.act-ai-session-prompt {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.act-ai-session-prompt-label {\n  flex: 0 0 auto;\n  color: var(--act-green-muted);\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.act-ai-session-prompt-text {\n  min-width: 0;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 12px;\n  line-height: 1.45;\n}\n\n.act-ai-session-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.act-ai-action {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 30px;\n  padding: 0 11px;\n  border: 1px solid rgba(255, 255, 255, 0.20) !important;\n  border-radius: 999px !important;\n  background: rgba(255, 255, 255, 0.08) !important;\n  color: #FFFFFF !important;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.act-ai-action:hover {\n  border-color: var(--act-green) !important;\n  background: var(--act-green) !important;\n  color: #FFFFFF !important;\n}\n\n.act-ai-action-icon {\n  display: inline-flex;\n  width: 13px;\n  height: 13px;\n  align-items: center;\n  justify-content: center;\n}\n\n.act-ai-action-icon svg {\n  width: 13px;\n  height: 13px;\n}\n\n.act-ai-source-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.act-ai-source-path {\n  padding: 10px 12px;\n  border-radius: 10px;\n  background: var(--act-bg);\n  color: var(--act-text-soft);\n  font-family: var(--act-mono);\n  font-size: 11px;\n  line-height: 1.4;\n  overflow-wrap: anywhere;\n}\n\n/* ========= MODAL \u2014 \u786C\u7F16\u7801\u989C\u8272\uFF08Modal \u5728 .act-root \u5916\u90E8\uFF0CCSS \u53D8\u91CF\u4E0D\u53EF\u7528\uFF09 ========= */\n.act-modal {\n  padding: 6px !important;\n  color: #1B4332 !important;\n  font-family: Inter, "SF Pro Text", -apple-system, system-ui, "Noto Sans SC", sans-serif !important;\n  background: #FFFFFF !important;\n}\n\n.act-note-modal,\n.modal:has(.act-modal) {\n  opacity: 1 !important;\n  border: 1px solid rgba(45, 106, 79, 0.15) !important;\n  border-radius: 20px !important;\n  background: #FFFFFF !important;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.12) !important;\n}\n\n.act-note-modal .modal-content,\n.modal:has(.act-modal) .modal-content {\n  background: #FFFFFF !important;\n  color: #1B4332 !important;\n}\n\n.act-note-modal .modal-title,\n.modal:has(.act-modal) .modal-title {\n  color: #1B4332 !important;\n}\n\n.act-note-modal .modal-close-button,\n.modal:has(.act-modal) .modal-close-button {\n  color: #8FA39B !important;\n  opacity: 1 !important;\n}\n\n.act-modal h2 {\n  margin: 0 0 14px;\n  color: #1B4332 !important;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.act-note-modal input.act-input,\n.act-note-modal select.act-input,\n.act-note-modal textarea.act-input,\n.modal:has(.act-modal) input.act-input,\n.modal:has(.act-modal) select.act-input,\n.modal:has(.act-modal) textarea.act-input {\n  width: 100%;\n  margin: 10px 0;\n  padding: 12px 14px;\n  border: 1.5px solid rgba(45, 106, 79, 0.20) !important;\n  border-radius: 12px !important;\n  background: #F4F6F3 !important;\n  color: #1B4332 !important;\n  font-family: Inter, "SF Pro Text", -apple-system, system-ui, "Noto Sans SC", sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  opacity: 1 !important;\n  caret-color: #2D6A4F !important;\n  appearance: none !important;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\n.act-note-modal input.act-input::placeholder,\n.act-note-modal textarea.act-input::placeholder,\n.modal:has(.act-modal) input.act-input::placeholder,\n.modal:has(.act-modal) textarea.act-input::placeholder {\n  color: #8FA39B !important;\n}\n\n.act-note-modal select.act-input,\n.modal:has(.act-modal) select.act-input {\n  height: 48px;\n  min-height: 48px;\n  padding: 0 34px 0 14px !important;\n  line-height: normal !important;\n  overflow: visible;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.act-note-modal select.act-input option,\n.modal:has(.act-modal) select.act-input option {\n  background: #FFFFFF;\n  color: #1B4332;\n}\n\n.act-textarea {\n  min-height: 150px;\n  resize: vertical;\n  line-height: 1.55;\n}\n\n.act-modal-helper {\n  margin: -4px 0 12px;\n  color: #6F8179 !important;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.45;\n}\n\n.act-modal-field-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin: 4px 0 10px;\n}\n\n.act-modal-field {\n  min-width: 0;\n}\n\n.act-modal-field label {\n  display: block;\n  margin: 0 0 5px;\n  color: #8FA39B !important;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n\n.act-note-modal .act-modal-field input.act-input,\n.act-note-modal .act-modal-field select.act-input,\n.modal:has(.act-modal) .act-modal-field input.act-input {\n  margin: 0;\n}\n\n.modal:has(.act-modal) .act-modal-field select.act-input {\n  margin: 0;\n}\n\n.act-due-quick {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n\n.act-due-quick button {\n  min-height: 28px;\n  padding: 0 10px;\n  border: 1px solid rgba(45, 106, 79, 0.18) !important;\n  border-radius: 999px !important;\n  background: #FFFFFF !important;\n  color: #2D6A4F !important;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1;\n}\n\n.act-due-quick button:hover {\n  border-color: #40916C !important;\n  background: #F4F6F3 !important;\n}\n\n.act-due-quick button.is-clear {\n  color: #8FA39B !important;\n}\n\n.act-note-modal input.act-input:focus,\n.act-note-modal select.act-input:focus,\n.act-note-modal textarea.act-input:focus,\n.modal:has(.act-modal) input.act-input:focus,\n.modal:has(.act-modal) select.act-input:focus,\n.modal:has(.act-modal) textarea.act-input:focus {\n  outline: none !important;\n  border-color: #40916C !important;\n  background: #F4F6F3 !important;\n  box-shadow: 0 0 0 3px rgba(64, 145, 108, 0.15) !important;\n}\n\n.act-modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.act-note-modal .act-modal-actions button,\n.modal:has(.act-modal) .act-modal-actions button {\n  border: 1.5px solid rgba(45, 106, 79, 0.20) !important;\n  border-radius: 999px !important;\n  background: #FFFFFF !important;\n  color: #1B4332 !important;\n  font-size: 13px;\n  font-weight: 600;\n  opacity: 1 !important;\n  transition: all 0.2s ease;\n}\n\n.act-note-modal .act-modal-actions button:hover,\n.modal:has(.act-modal) .act-modal-actions button:hover {\n  background: #F4F6F3 !important;\n  color: #1B4332 !important;\n}\n\n.act-note-modal .act-modal-actions button.mod-cta,\n.modal:has(.act-modal) .act-modal-actions button.mod-cta {\n  border-color: #40916C !important;\n  background: #40916C !important;\n  color: #FFFFFF !important;\n}\n\n.act-note-modal .act-modal-actions button.mod-cta:hover,\n.modal:has(.act-modal) .act-modal-actions button.mod-cta:hover {\n  background: #2D6A4F !important;\n}\n\n/* \u6697\u8272\u6A21\u5F0F Modal */\n.theme-dark .act-modal {\n  color: #E8F0EC !important;\n  background: #1A2420 !important;\n}\n\n.theme-dark .act-note-modal,\n.theme-dark .modal:has(.act-modal) {\n  background: #1A2420 !important;\n  border-color: rgba(82, 183, 136, 0.16) !important;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5) !important;\n}\n\n.theme-dark .act-note-modal .modal-content,\n.theme-dark .modal:has(.act-modal) .modal-content {\n  background: #1A2420 !important;\n  color: #E8F0EC !important;\n}\n\n.theme-dark .act-note-modal .modal-title,\n.theme-dark .modal:has(.act-modal) .modal-title,\n.theme-dark .act-modal h2 {\n  color: #E8F0EC !important;\n}\n\n.theme-dark .act-note-modal .modal-close-button,\n.theme-dark .modal:has(.act-modal) .modal-close-button {\n  color: #6B8576 !important;\n}\n\n.theme-dark .act-note-modal input.act-input,\n.theme-dark .act-note-modal select.act-input,\n.theme-dark .act-note-modal textarea.act-input,\n.theme-dark .modal:has(.act-modal) input.act-input,\n.theme-dark .modal:has(.act-modal) select.act-input,\n.theme-dark .modal:has(.act-modal) textarea.act-input {\n  border-color: rgba(82, 183, 136, 0.16) !important;\n  background: #0F1612 !important;\n  color: #E8F0EC !important;\n  caret-color: #52B788 !important;\n}\n\n.theme-dark .act-note-modal input.act-input:focus,\n.theme-dark .act-note-modal select.act-input:focus,\n.theme-dark .act-note-modal textarea.act-input:focus,\n.theme-dark .modal:has(.act-modal) input.act-input:focus,\n.theme-dark .modal:has(.act-modal) select.act-input:focus,\n.theme-dark .modal:has(.act-modal) textarea.act-input:focus {\n  background: #0F1612 !important;\n}\n\n.theme-dark .act-note-modal input.act-input::placeholder,\n.theme-dark .act-note-modal textarea.act-input::placeholder,\n.theme-dark .modal:has(.act-modal) input.act-input::placeholder,\n.theme-dark .modal:has(.act-modal) textarea.act-input::placeholder {\n  color: #6B8576 !important;\n}\n\n.theme-dark .act-note-modal select.act-input option,\n.theme-dark .modal:has(.act-modal) select.act-input option {\n  background: #1A2420;\n  color: #E8F0EC;\n}\n\n.theme-dark .act-modal-field label {\n  color: #9FB5AB !important;\n}\n\n.theme-dark .act-modal-helper {\n  color: #A8BDB3 !important;\n}\n\n.theme-dark .act-due-quick button {\n  border-color: rgba(82, 183, 136, 0.18) !important;\n  background: #1A2420 !important;\n  color: #CDE9DC !important;\n}\n\n.theme-dark .act-due-quick button:hover {\n  border-color: #52B788 !important;\n  background: #0F1612 !important;\n}\n\n.theme-dark .act-due-quick button.is-clear {\n  color: #8EA69A !important;\n}\n\n.theme-dark .act-note-modal .act-modal-actions button,\n.theme-dark .modal:has(.act-modal) .act-modal-actions button {\n  border-color: rgba(82, 183, 136, 0.16) !important;\n  background: #1A2420 !important;\n  color: #E8F0EC !important;\n}\n\n.theme-dark .act-note-modal .act-modal-actions button:hover,\n.theme-dark .modal:has(.act-modal) .act-modal-actions button:hover {\n  background: #0F1612 !important;\n}\n\n/* ========= OVERRIDES ========= */\n.act-root .act-action-button svg,\n.act-root .act-action-button span,\n.act-root .act-tab *,\n.act-root .act-subtab *,\n.act-root .act-flow-step *,\n.act-root .act-day *,\n.act-root .act-dida-tool *,\n.act-root .act-mini-btn *,\n.act-root .act-ai-action * {\n  color: currentColor !important;\n  stroke: currentColor !important;\n}\n\n/* ========= OBSIDIAN DARK THEME ========= */\n.theme-dark .act-root {\n  --act-bg: #0F1612;\n  --act-card: #1A2420;\n  --act-card-dark: #0A100D;\n  --act-green: #40916C;\n  --act-green-deep: #52B788;\n  --act-green-light: rgba(64, 145, 108, 0.12);\n  --act-green-muted: rgba(82, 183, 136, 0.25);\n  --act-warm-yellow: rgba(255, 200, 87, 0.06);\n  --act-warm-yellow-border: rgba(255, 200, 87, 0.12);\n  --act-warm-blue: rgba(130, 170, 255, 0.06);\n  --act-warm-blue-border: rgba(130, 170, 255, 0.12);\n  --act-warm-pink: rgba(255, 130, 130, 0.06);\n  --act-warm-pink-border: rgba(255, 130, 130, 0.12);\n  --act-text: #E8F0EC;\n  --act-text-soft: #B0C4BA;\n  --act-text-faint: #6B8576;\n  --act-border: rgba(82, 183, 136, 0.08);\n  --act-border-strong: rgba(82, 183, 136, 0.16);\n  --act-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);\n  --act-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\n  --act-shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.3);\n  background: #0B0F0D;\n  color: var(--act-text);\n}\n\n.theme-dark .act-overview,\n.theme-dark .act-section:not([data-theme="dark"]),\n.theme-dark .act-action-card,\n.theme-dark .act-project-card,\n.theme-dark .act-read-item,\n.theme-dark .act-resource-card,\n.theme-dark .act-read-stat,\n.theme-dark .act-subtab,\n.theme-dark .act-action-button,\n.theme-dark .act-mini-btn,\n.theme-dark .act-ov-skill {\n  background-color: var(--act-card) !important;\n  color: var(--act-text) !important;\n}\n\n.theme-dark .act-section:not([data-theme="dark"]),\n.theme-dark .act-action-card,\n.theme-dark .act-project-card,\n.theme-dark .act-read-item,\n.theme-dark .act-resource-card,\n.theme-dark .act-read-stat,\n.theme-dark .act-flow-step,\n.theme-dark .act-day,\n.theme-dark .act-badge,\n.theme-dark .act-chip,\n.theme-dark .act-dida-panel,\n.theme-dark .act-dida-tool,\n.theme-dark .act-subtab,\n.theme-dark .act-small-action,\n.theme-dark .act-action-remark-box {\n  border-color: var(--act-border-strong);\n}\n\n.theme-dark .act-section[data-theme="dark"],\n.theme-dark .act-read-stat:last-child,\n.theme-dark .act-subtab.is-active {\n  background-color: var(--act-card-dark) !important;\n  color: var(--act-text) !important;\n}\n\n.theme-dark .act-flow-step.is-active {\n  background-color: var(--act-green-deep) !important;\n  color: #FFFFFF !important;\n}\n\n.theme-dark .act-day.is-today {\n  background-color: var(--act-green-deep) !important;\n  color: #FFFFFF !important;\n}\n\n.theme-dark .act-read-stat:first-child {\n  background-color: var(--act-warm-yellow) !important;\n  border-color: var(--act-warm-yellow-border) !important;\n}\n\n.theme-dark .act-read-stat:nth-child(2) {\n  background-color: var(--act-warm-blue) !important;\n  border-color: var(--act-warm-blue-border) !important;\n}\n\n.theme-dark .act-read-stat:first-child,\n.theme-dark .act-read-stat:nth-child(2) {\n  color: var(--act-text) !important;\n}\n\n.theme-dark .act-platform-card[data-color="green"] {\n  background: var(--act-warm-yellow) !important;\n  border-color: var(--act-warm-yellow-border) !important;\n}\n\n.theme-dark .act-platform-card[data-color="purple"] {\n  background: var(--act-warm-pink) !important;\n  border-color: var(--act-warm-pink-border) !important;\n}\n\n.theme-dark .act-dida-panel:first-child {\n  background: var(--act-warm-yellow) !important;\n  border-color: var(--act-warm-yellow-border) !important;\n}\n\n.theme-dark .act-dida-panel:nth-child(2) {\n  background: var(--act-warm-blue) !important;\n  border-color: var(--act-warm-blue-border) !important;\n}\n\n.theme-dark .act-project-card {\n  border-left-color: var(--act-warm-yellow-border) !important;\n  background: var(--act-card) !important;\n}\n\n.theme-dark .act-group-label:first-of-type {\n  background: var(--act-warm-pink) !important;\n  color: #E88888 !important;\n  border-color: var(--act-warm-pink-border) !important;\n}\n\n.theme-dark .act-group-label:nth-of-type(2) {\n  background: var(--act-warm-blue) !important;\n  color: #88AAEE !important;\n  border-color: var(--act-warm-blue-border) !important;\n}\n\n.theme-dark .act-overview {\n  border-color: var(--act-green-muted) !important;\n}\n\n.theme-dark .act-flow-step.is-done,\n.theme-dark .act-group-label {\n  background-color: var(--act-green) !important;\n  color: #FFFFFF !important;\n}\n\n.theme-dark .act-tab {\n  color: var(--act-text-faint) !important;\n}\n\n.theme-dark .act-tab:hover,\n.theme-dark .act-tab.is-active {\n  color: var(--act-green-deep) !important;\n}\n\n.theme-dark .act-section-title,\n.theme-dark .act-action-title,\n.theme-dark .act-project-title,\n.theme-dark .act-read-title,\n.theme-dark .act-file-title,\n.theme-dark .act-file-label,\n.theme-dark .act-read-count,\n.theme-dark .act-resource-title {\n  color: var(--act-text) !important;\n}\n\n.theme-dark .act-section[data-theme="dark"] .act-section-title,\n.theme-dark .act-section[data-theme="dark"] .act-action-title,\n.theme-dark .act-section[data-theme="dark"] .act-project-title,\n.theme-dark .act-section[data-theme="dark"] .act-read-title,\n.theme-dark .act-section[data-theme="dark"] .act-file-title,\n.theme-dark .act-section[data-theme="dark"] .act-file-label,\n.theme-dark .act-read-stat:last-child .act-read-count {\n  color: #FFFFFF !important;\n}\n\n.theme-dark .act-empty,\n.theme-dark .act-hint,\n.theme-dark .act-more,\n.theme-dark .act-note,\n.theme-dark .act-read-label,\n.theme-dark .act-resource-meta,\n.theme-dark .act-read-meta,\n.theme-dark .act-remark,\n.theme-dark .act-action-remark-text,\n.theme-dark .act-advice-list,\n.theme-dark .act-dida-due,\n.theme-dark .act-dida-desc,\n.theme-dark .act-publish-titleline {\n  color: var(--act-text-soft) !important;\n}\n\n.theme-dark .act-source-note,\n.theme-dark .act-filter-note,\n.theme-dark .act-date,\n.theme-dark .act-action-remark-label,\n.theme-dark .act-dida-source-inline,\n.theme-dark .act-dida-count,\n.theme-dark .act-publish-week-id,\n.theme-dark .act-publish-week-range {\n  color: var(--act-text-faint) !important;\n}\n\n.theme-dark .act-source-note,\n.theme-dark .act-filter-note {\n  border-top-color: rgba(255, 255, 255, 0.12);\n}\n\n.theme-dark .act-dida-task-action {\n  border-color: rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--act-text-soft);\n}\n\n.theme-dark .act-dida-task-action:hover {\n  border-color: var(--act-green-muted);\n  background: rgba(82, 183, 136, 0.16);\n  color: var(--act-green-deep);\n}\n\n.theme-dark .act-dida-overdue {\n  background: rgba(255, 119, 89, 0.18);\n  color: #FFB09A;\n}\n\n.theme-dark .act-dida-due.is-overdue {\n  color: #FFB09A !important;\n}\n\n.theme-dark .act-progress-task-meta span {\n  border-color: rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--act-text-faint);\n}\n\n.theme-dark .act-advice-title,\n.theme-dark .act-dida-panel-title,\n.theme-dark .act-dida-title,\n.theme-dark .act-publish-count,\n.theme-dark .act-publish-week.has-published .act-publish-week-id {\n  color: var(--act-text) !important;\n}\n\n.theme-dark .act-note,\n.theme-dark .act-remark,\n.theme-dark .act-highlight,\n.theme-dark .act-action-remark-box,\n.theme-dark .act-dida-panel,\n.theme-dark .act-dida-filter,\n.theme-dark .act-flow-step,\n.theme-dark .act-day,\n.theme-dark .act-badge,\n.theme-dark .act-chip {\n  background-color: var(--act-bg) !important;\n}\n\n.theme-dark .act-dida-task {\n  border-color: var(--act-border);\n}\n\n.theme-dark .act-dida-check > div,\n.theme-dark .act-focus-action-check > div {\n  border-color: var(--act-text-faint);\n}\n\n.theme-dark .act-dida-check:hover > div,\n.theme-dark .act-focus-action-check:hover > div {\n  border-color: var(--act-green);\n  background-color: var(--act-green);\n}\n\n.theme-dark .act-dida-priority {\n  background-color: var(--act-green) !important;\n  color: #FFFFFF !important;\n}\n\n.theme-dark .act-priority {\n  background-color: rgba(209, 154, 102, 0.15) !important;\n  color: #D19A66 !important;\n  border-color: rgba(209, 154, 102, 0.3) !important;\n}\n\n.theme-dark .act-deadline-overdue,\n.theme-dark .act-deadline-today {\n  background-color: rgba(224, 108, 117, 0.12) !important;\n  color: #E06C75 !important;\n  border-color: rgba(224, 108, 117, 0.3) !important;\n}\n\n.theme-dark .act-deadline-urgent,\n.theme-dark .act-deadline-soon {\n  color: #D19A66 !important;\n  border-color: rgba(209, 154, 102, 0.3) !important;\n}\n\n.theme-dark .act-ready {\n  color: var(--act-green-deep) !important;\n  border-color: rgba(82, 183, 136, 0.3) !important;\n}\n\n.theme-dark .act-task-row:hover,\n.theme-dark .act-subtask:hover {\n  background: var(--act-green-light) !important;\n}\n\n.theme-dark .act-published-row:hover {\n  background: var(--act-green-light) !important;\n}\n\n.theme-dark .act-progress-task:hover,\n.theme-dark .act-progress-task.is-active {\n  background: var(--act-green-light) !important;\n  border-color: var(--act-green) !important;\n}\n\n.theme-dark .act-highlight {\n  border-color: rgba(82, 183, 136, 0.2) !important;\n  background: rgba(64, 145, 108, 0.08) !important;\n}\n\n/* ========= RESPONSIVE ========= */\n@container (max-width: 700px) {\n  .act-root {\n    padding: 16px;\n  }\n\n  .act-ov-toolbar {\n    flex-wrap: wrap;\n  }\n\n  .act-tabs {\n    overflow-x: auto;\n  }\n\n  .act-panel-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .act-progress-shell {\n    grid-template-columns: 1fr;\n  }\n\n  .act-action-workbench,\n  .act-week-direction-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .act-progress-list,\n  .act-action-insights {\n    position: static;\n    max-height: none;\n  }\n\n  .act-dida-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .act-dida-header-actions {\n    position: static;\n    flex-wrap: wrap;\n    margin: -4px 0 12px;\n  }\n\n  .act-dida-count {\n    text-align: left;\n  }\n\n  .act-small-action {\n    position: static;\n    margin: -2px 0 10px;\n  }\n\n  .act-source-note {\n    position: static;\n    max-width: none;\n    margin: 14px 0 0;\n    text-align: left;\n    white-space: normal;\n  }\n\n  .act-flow {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .act-subtabs {\n    flex-wrap: wrap;\n  }\n\n  .act-ai-stats {\n    grid-template-columns: 1fr;\n  }\n\n  .act-analytics-platforms {\n    grid-template-columns: repeat(2, 1fr) !important;\n  }\n\n  .act-publish-week {\n    grid-template-columns: 86px minmax(0, 1fr);\n  }\n}\n\n/* ========= ANALYTICS TAB ========= */\n\n.act-analytics-platforms {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  margin: 12px 0;\n}\n\n.act-platform-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 18px 12px;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r-sm);\n  background: var(--act-card);\n  box-shadow: var(--act-shadow-sm);\n  transition: all 0.2s ease;\n}\n\n.act-platform-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--act-shadow);\n}\n.act-platform-card.is-clickable {\n  cursor: pointer;\n}\n\n.act-platform-card[data-color="green"] {\n  background: var(--act-warm-yellow);\n  border-color: var(--act-warm-yellow-border);\n}\n\n.act-platform-card[data-color="purple"] {\n  background: var(--act-warm-pink);\n  border-color: var(--act-warm-pink-border);\n}\n\n.act-platform-value {\n  font-size: 28px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: var(--act-text);\n}\n\n.act-platform-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--act-text-soft);\n}\n\n/* --- Month Summary --- */\n.act-month-summary {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  margin: 8px 0 12px;\n}\n\n.act-month-count {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n}\n\n.act-month-number {\n  font-size: 36px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: var(--act-text);\n}\n\n.act-month-unit {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--act-text-soft);\n}\n\n.act-month-pending {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--act-orange);\n  padding: 3px 10px;\n  border-radius: 999px;\n  background: rgba(209, 154, 102, 0.1);\n}\n\n/* --- Video Card --- */\n.act-video-card {\n  padding: 12px 14px;\n  margin: 6px 0;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r-sm);\n  background: var(--act-card);\n  box-shadow: var(--act-shadow-sm);\n  transition: all 0.2s ease;\n}\n\n.act-video-card:hover {\n  transform: translateY(-1px);\n  box-shadow: var(--act-shadow);\n}\n\n.act-video-top {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.act-video-title {\n  font-size: 13px;\n  font-weight: 650;\n  color: var(--act-text) !important;\n  cursor: pointer;\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.act-video-title:hover {\n  color: var(--act-green-deep) !important;\n}\n\n.act-video-meta {\n  display: flex;\n  gap: 6px;\n  margin-top: 6px;\n  flex-wrap: wrap;\n}\n\n.act-metric-bars {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--act-border);\n}\n\n.act-metric-row {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.act-metric-platform {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--act-text-faint);\n  min-width: 32px;\n}\n\n.act-metric-label {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--act-text-faint);\n}\n\n.act-metric-value {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--act-text);\n  font-family: var(--act-mono);\n}\n\n/* --- Pattern Stats --- */\n.act-pattern-stats {\n  display: flex;\n  gap: 12px;\n  margin: 10px 0;\n}\n\n.act-pattern-stat {\n  flex: 1;\n  text-align: center;\n  padding: 12px 8px;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r-sm);\n  background: var(--act-bg);\n}\n\n.act-pattern-value {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n  color: var(--act-green-deep);\n}\n\n.act-pattern-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--act-text-faint);\n  margin-top: 4px;\n}\n\n/* --- Creation Advice --- */\n.act-advice-group {\n  margin-top: 12px;\n}\n\n.act-advice-title {\n  color: var(--act-text);\n  font-size: 13px;\n  font-weight: 650;\n}\n\n.act-advice-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin: 8px 0 0;\n  padding-left: 18px;\n  color: var(--act-text-soft);\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.act-advice-list li::marker {\n  color: var(--act-green);\n}\n\n/* --- Publishing Timeline --- */\n.act-publish-timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.act-publish-week {\n  display: grid;\n  grid-template-columns: 104px minmax(0, 1fr);\n  gap: 12px;\n  align-items: center;\n  padding: 11px 0;\n  border-top: 1px solid var(--act-border);\n}\n\n.act-publish-week:first-child {\n  border-top: 0;\n}\n\n.act-publish-week.has-published .act-publish-week-id {\n  color: var(--act-text);\n}\n\n.act-publish-week-id {\n  color: var(--act-text-faint);\n  font-family: var(--act-mono);\n  font-size: 12px;\n  font-weight: 650;\n  line-height: 1.2;\n}\n\n.act-publish-week-range {\n  margin-top: 2px;\n  color: var(--act-text-faint);\n  font-family: var(--act-mono);\n  font-size: 10px;\n  line-height: 1.2;\n}\n\n.act-publish-detail {\n  min-width: 0;\n}\n\n.act-publish-count {\n  color: var(--act-text);\n  font-size: 13px;\n  font-weight: 650;\n  line-height: 1.25;\n}\n\n.act-publish-titleline {\n  margin-top: 3px;\n  color: var(--act-text-faint);\n  font-size: 12px;\n  line-height: 1.35;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* ========= ACT Health Metrics ========= */\n\n.act-act-health {\n  margin-bottom: 16px;\n}\n\n.act-metrics-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n}\n\n@container (max-width: 700px) {\n  .act-metrics-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .act-metrics-row > .act-metric:first-child {\n    grid-column: 1 / -1;\n  }\n}\n\n.act-metric {\n  min-height: 110px;\n  padding: 18px 20px;\n  border-radius: var(--act-r);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n\n.act-metric:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--act-shadow);\n}\n\n.act-metric.is-clickable {\n  cursor: pointer;\n}\n\n.act-metric[data-color="green"] {\n  background: var(--act-green-light, var(--act-green));\n  color: var(--act-green-deep, var(--act-text));\n}\n\n.act-metric[data-color="purple"] {\n  background: var(--act-purple, #C4B8F0);\n  color: var(--act-purple-deep, var(--act-text));\n}\n\n.act-metric[data-color="dark"] {\n  background: var(--act-card-dark);\n  color: var(--act-text-inv);\n}\n\n.act-metric-label {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  opacity: 0.8;\n}\n\n.act-metric-number {\n  font-size: 28px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n\n/* ========= Cycle Progress Bar ========= */\n\n.act-cycle-progress {\n  margin: 16px 0 12px;\n}\n\n.act-cycle-bar {\n  height: 8px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.2);\n  overflow: hidden;\n}\n\n[data-theme="dark"] .act-cycle-bar {\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.act-cycle-fill {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--act-green, #40916C);\n  transition: width 0.3s ease;\n}\n\n[data-theme="dark"] .act-cycle-fill {\n  background: var(--act-green-light, #D8F3DC);\n}\n\n.act-cycle-label {\n  margin-top: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  opacity: 0.7;\n}\n\n/* ========= INFO TOOLTIP ========= */\n\n.act-info-trigger {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  margin-left: 6px;\n  vertical-align: middle;\n  cursor: help;\n}\n\n.act-info-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: rgba(22, 57, 43, 0.08);\n  color: var(--act-text-faint, #6b7280);\n  opacity: 0.5;\n  transition: opacity 0.15s, background 0.15s;\n}\n\n.act-info-icon svg {\n  width: 12px;\n  height: 12px;\n}\n\n.act-info-trigger:hover .act-info-icon {\n  opacity: 1;\n  background: rgba(22, 57, 43, 0.14);\n  color: var(--act-green, #16392B);\n}\n\n.act-info-popup {\n  display: none;\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  min-width: 260px;\n  max-width: 380px;\n  padding: 12px 14px;\n  background: var(--act-card, #FFFFFF);\n  border: 1px solid rgba(22, 57, 43, 0.12);\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(22, 57, 43, 0.12), 0 2px 6px rgba(22, 57, 43, 0.06);\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--act-text, #16392B);\n  text-align: left;\n  font-weight: 400;\n  white-space: normal;\n}\n\n.act-info-trigger:hover .act-info-popup {\n  display: block;\n}\n\n.act-info-heading {\n  margin-top: 8px;\n  margin-bottom: 2px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--act-green, #16392B);\n  opacity: 0.6;\n}\n\n.act-info-heading:first-child {\n  margin-top: 0;\n}\n\n.act-info-text {\n  margin: 0 0 4px;\n  font-size: 12px;\n  line-height: 1.55;\n  color: var(--act-text, #16392B);\n  opacity: 0.85;\n  white-space: pre-line;\n}\n\n.act-info-props {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 4px;\n}\n\n.act-info-props td {\n  padding: 2px 0;\n  font-size: 11px;\n  line-height: 1.4;\n  vertical-align: top;\n  border: none;\n}\n\n.act-info-prop-name {\n  font-weight: 600;\n  white-space: nowrap;\n  padding-right: 10px !important;\n  color: var(--act-green, #16392B);\n  opacity: 0.85;\n}\n\n.act-info-prop-desc {\n  color: var(--act-text, #16392B);\n  opacity: 0.7;\n}\n\n/* Health metrics info trigger (non-section) */\n.act-act-health > .act-info-trigger {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n}\n\n.act-act-health {\n  position: relative;\n}\n\n/* ========= DATA TABLE ========= */\n\n.act-data-table-wrap {\n  overflow-x: auto;\n  margin-top: 8px;\n}\n\n.act-data-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.act-data-table thead th {\n  padding: 6px 8px;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--act-text-faint, #6b7280);\n  border-bottom: 2px solid rgba(22, 57, 43, 0.10);\n  white-space: nowrap;\n}\n\n.act-data-table tbody tr {\n  border-bottom: 1px solid rgba(22, 57, 43, 0.06);\n  transition: background 0.1s;\n}\n\n.act-data-table tbody tr.is-clickable {\n  cursor: pointer;\n}\n\n.act-data-table tbody tr.is-clickable:hover {\n  background: rgba(22, 57, 43, 0.04);\n}\n\n.act-data-table tbody td {\n  padding: 7px 8px;\n  font-size: 12px;\n  color: var(--act-text, #16392B);\n  vertical-align: top;\n  border: none;\n}\n\n.act-data-table tbody td:first-child {\n  font-weight: 550;\n}\n\n.act-section[data-theme="dark"] .act-data-table thead th {\n  color: rgba(255, 255, 255, 0.5);\n  border-bottom-color: rgba(255, 255, 255, 0.12);\n}\n\n.act-section[data-theme="dark"] .act-data-table tbody tr {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n}\n\n.act-section[data-theme="dark"] .act-data-table tbody tr.is-clickable:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n\n.act-section[data-theme="dark"] .act-data-table tbody td {\n  color: rgba(255, 255, 255, 0.88);\n}\n\n.act-section[data-theme="dark"] .act-info-popup {\n  background: var(--act-green-dark, #0B1D14);\n  border-color: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);\n}\n\n.act-section[data-theme="dark"] .act-info-heading {\n  color: var(--act-green-light, #D8F3DC);\n}\n\n.act-section[data-theme="dark"] .act-info-text,\n.act-section[data-theme="dark"] .act-info-prop-desc {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.act-section[data-theme="dark"] .act-info-prop-name {\n  color: var(--act-green-light, #D8F3DC);\n}\n\n.act-section[data-theme="dark"] .act-info-icon {\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.act-section[data-theme="dark"] .act-info-trigger:hover .act-info-icon {\n  background: rgba(255, 255, 255, 0.14);\n  color: rgba(255, 255, 255, 0.9);\n}\n\n/* ===== Focus Tab: Focus Actions ===== */\n\n.act-focus-action-group {\n  margin-bottom: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--background-modifier-border);\n}\n\n.act-focus-action-group:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.act-focus-action-head {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.act-focus-action-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-normal);\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.act-focus-action-title:hover {\n  color: var(--interactive-accent);\n}\n\n.act-focus-action-all-done {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--act-green);\n  padding: 1px 6px;\n  border-radius: 3px;\n  background: color-mix(in srgb, var(--act-green) 12%, transparent);\n}\n\n.act-focus-action-group.is-all-done {\n  opacity: 0.7;\n}\n\n.act-focus-action-done-date {\n  font-size: 10px;\n  color: var(--text-faint);\n  white-space: nowrap;\n}\n\n.act-focus-action-item.is-done .act-focus-action-check {\n  cursor: default;\n}\n\n.act-focus-action-deadline {\n  font-size: 11px;\n  color: var(--text-faint);\n}\n\n.act-focus-action-empty {\n  font-size: 11px;\n  color: var(--text-faint);\n  font-style: italic;\n  padding-left: 4px;\n}\n\n.act-focus-action-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 0 3px 4px;\n  font-size: 12px;\n}\n\n.act-focus-action-item.is-done {\n  opacity: 0.5;\n  text-decoration: line-through;\n}\n\n.act-focus-action-check {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  flex: 0 0 16px;\n  cursor: pointer;\n}\n\n.act-focus-action-check > div {\n  width: 12px;\n  height: 12px;\n  border: 1.5px solid var(--act-text-faint);\n  border-radius: 50%;\n  transition: all 0.15s ease;\n}\n\n.act-focus-action-check:hover > div {\n  border-color: var(--act-green);\n  background: var(--act-green);\n}\n\n.act-focus-action-item.is-done .act-focus-action-check > div {\n  border-color: var(--act-green);\n  background: var(--act-green);\n}\n\n.act-focus-action-text {\n  flex: 1;\n  color: var(--text-normal);\n  line-height: 1.5;\n}\n\n.act-focus-action-priority {\n  flex-shrink: 0;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 5px;\n  border-radius: 3px;\n  background: var(--background-modifier-border);\n  color: var(--text-muted);\n}\n\n.act-focus-action-priority.is-p1 {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n\n.act-focus-action-priority.is-p2 {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n\n/* ===== Focus Tab: Today Completed ===== */\n\n.act-completed-row {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  padding: 3px 0;\n  font-size: 12px;\n}\n\n.act-completed-check {\n  color: var(--interactive-accent);\n  font-weight: 600;\n  flex-shrink: 0;\n}\n\n.act-completed-text {\n  color: var(--text-muted);\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.act-completed-source {\n  font-size: 10px;\n  font-weight: 600;\n  flex-shrink: 0;\n  padding: 1px 6px;\n  border-radius: 3px;\n  color: var(--text-faint);\n  background: var(--background-modifier-border);\n}\n.act-completed-source.is-dida {\n  color: #fff;\n  background: #4a90d9;\n}\n.act-completed-source.is-plan {\n  color: #fff;\n  background: var(--act-green-deep, #2d5a3d);\n}\n.act-completed-source.is-focus {\n  color: #fff;\n  background: #c0392b;\n}\n.act-completed-source.is-active {\n  color: #fff;\n  background: #e67e22;\n}\n.act-completed-source.is-maybe {\n  color: var(--text-muted);\n  background: var(--background-modifier-border);\n}\n.act-completed-source.is-daily {\n  color: #fff;\n  background: #7d5ba6;\n}\n\n/* ===== \u8BBE\u7F6E\u9875\uFF1AWindows \u7EC8\u7AEF\u6A21\u5F0F\u8B66\u544A ===== */\n.act-skill-warning {\n  margin: 10px 0 14px;\n  padding: 12px 14px;\n  border: 1px solid rgba(192, 57, 43, 0.28);\n  border-left: 3px solid #c0392b;\n  border-radius: 10px;\n  background: rgba(192, 57, 43, 0.05);\n}\n.act-skill-warning-title {\n  color: #c0392b;\n  font-size: 13px;\n  font-weight: 700;\n}\n.act-skill-warning-body {\n  margin: 5px 0 10px;\n  color: var(--text-muted);\n  font-size: 12px;\n  line-height: 1.55;\n}\n.act-skill-warning-btn {\n  padding: 6px 14px;\n  border: none;\n  border-radius: 999px;\n  background: #c0392b;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.act-skill-warning-btn:hover { background: #a93226; }\n\n/* ===== \u8BBE\u7F6E\u9875\uFF1ASkill \u4F7F\u7528\u8BF4\u660E ===== */\n.act-skill-guide-head {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 8px;\n}\n.act-skill-guide-head h4 { margin: 0; }\n.act-skill-guide-env {\n  padding: 2px 9px;\n  border-radius: 999px;\n  background: rgba(45, 106, 79, 0.1);\n  color: #2D6A4F;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n/* ===== \u8BBE\u7F6E\u9875\uFF1A\u6298\u53E0\u533A ===== */\n.act-fold {\n  margin: 14px 0 0;\n  border: 1px solid rgba(45, 106, 79, 0.16);\n  border-radius: 12px;\n  background: rgba(45, 106, 79, 0.025);\n  overflow: hidden;\n}\n.act-fold-summary {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  padding: 11px 14px;\n  cursor: pointer;\n  list-style: none;\n  user-select: none;\n}\n.act-fold-summary::-webkit-details-marker { display: none; }\n.act-fold-summary::before {\n  content: "\u25B8";\n  flex-shrink: 0;\n  color: var(--text-faint);\n  font-size: 11px;\n  transition: transform 0.15s ease;\n}\n.act-fold[open] > .act-fold-summary::before { transform: rotate(90deg); }\n.act-fold-summary:hover { background: rgba(45, 106, 79, 0.05); }\n.act-fold-title {\n  font-size: 14px;\n  font-weight: 600;\n}\n.act-fold-hint {\n  color: var(--text-faint);\n  font-size: 11px;\n}\n.act-fold-body {\n  padding: 0 14px 8px;\n  border-top: 1px solid rgba(45, 106, 79, 0.1);\n}\n.act-fold-body h3:first-child { margin-top: 12px; }\n\n/* ===== \u540C\u6B65\u786E\u8BA4\u6E05\u5355\u5F39\u7A97 ===== */\n.act-sync-modal {\n  width: min(620px, 92vw) !important;\n}\n.act-sync-toolbar {\n  display: flex;\n  gap: 6px;\n  margin: 0 0 10px;\n}\n.act-sync-btn {\n  padding: 5px 12px;\n  border: 1px solid rgba(45, 106, 79, 0.2);\n  border-radius: 999px;\n  background: #FFFFFF;\n  color: #2D6A4F;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.2;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.act-sync-btn:hover {\n  border-color: rgba(45, 106, 79, 0.45);\n  background: rgba(45, 106, 79, 0.06);\n}\n.act-sync-list {\n  max-height: min(48vh, 420px);\n  overflow-y: auto;\n  padding: 4px;\n  border: 1px solid rgba(45, 106, 79, 0.12);\n  border-radius: 12px;\n  background: #FBFDFC;\n}\n.act-sync-group + .act-sync-group {\n  margin-top: 10px;\n}\n.act-sync-group-title {\n  padding: 4px 8px;\n  color: #6F8179;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.act-sync-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 7px 8px;\n  border-radius: 8px;\n}\n.act-sync-row:hover {\n  background: rgba(45, 106, 79, 0.05);\n}\n.act-sync-check {\n  flex-shrink: 0;\n  margin-top: 2px;\n  cursor: pointer;\n}\n.act-sync-row-main {\n  flex: 1;\n  min-width: 0;\n}\n.act-sync-row-text {\n  color: #1B4332;\n  font-size: 13px;\n  line-height: 1.4;\n  overflow-wrap: anywhere;\n}\n.act-sync-row-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 3px;\n  font-size: 11px;\n}\n.act-sync-row-date {\n  color: #8FA39B;\n  font-variant-numeric: tabular-nums;\n}\n.act-sync-row-from {\n  color: #2D6A4F;\n  text-decoration: none;\n  border-bottom: 1px dashed rgba(45, 106, 79, 0.35);\n  overflow-wrap: anywhere;\n}\n.act-sync-row-from:hover {\n  border-bottom-style: solid;\n}\n.act-sync-row-from.is-external {\n  color: #8FA39B;\n  border-bottom: none;\n}\n.act-sync-footer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n}\n.act-sync-confirm {\n  padding: 7px 18px;\n  border: none;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.act-sync-confirm:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n/* ===== Focus Tab: Recent Thoughts ===== */\n\n.act-thought-row {\n  padding: 8px 10px;\n  border-radius: 6px;\n  margin-bottom: 4px;\n  transition: background 0.15s;\n}\n\n.act-thought-row.is-clickable {\n  cursor: pointer;\n}\n\n.act-thought-row:hover {\n  background: var(--background-modifier-hover);\n}\n\n.act-thought-date {\n  font-size: 10px;\n  color: var(--text-faint);\n  margin-bottom: 2px;\n}\n\n.act-thought-preview {\n  font-size: 12px;\n  color: var(--text-normal);\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* ===== Dark theme overrides for focus sections ===== */\n\n.theme-dark .act-focus-action-priority {\n  background: rgba(255, 255, 255, 0.08);\n}\n\n.theme-dark .act-focus-action-priority.is-p1 {\n  background: rgba(239, 68, 68, 0.2);\n  color: #f87171;\n}\n\n.theme-dark .act-focus-action-priority.is-p2 {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fbbf24;\n}\n\n/* ===== Action Tab: Alerts ===== */\n\n.act-action-alerts {\n  margin-top: 12px;\n  padding: 10px;\n  border-radius: var(--act-r-sm);\n  background: var(--act-warm-yellow);\n  border: 1px solid var(--act-warm-yellow-border);\n}\n\n.act-action-alerts-title {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--act-orange);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n\n.act-alert-item {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  width: 100%;\n  padding: 4px 6px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  border-radius: 4px;\n  font-size: 11px;\n}\n\n.act-alert-item:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.act-alert-label {\n  flex-shrink: 0;\n  font-weight: 600;\n  color: var(--act-orange);\n}\n\n.act-alert-item.is-danger .act-alert-label {\n  color: var(--act-red);\n}\n\n.act-alert-detail {\n  flex: 1;\n  color: var(--act-text-soft);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* ===== Action Tab: Editor Collapse ===== */\n\n.act-progress-editor-toggle {\n  display: block;\n  width: 100%;\n  padding: 6px 8px;\n  border: 1px dashed var(--act-border);\n  border-radius: var(--act-r-sm);\n  background: transparent;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--act-text-faint);\n  text-align: left;\n}\n\n.act-progress-editor-toggle:hover {\n  color: var(--act-text);\n  border-color: var(--act-border-strong);\n}\n\n.act-progress-editor.is-collapsed .act-progress-editor-body {\n  display: none;\n}\n\n.act-progress-editor-body {\n  margin-top: 8px;\n}\n\n.theme-dark .act-action-alerts {\n  background: rgba(209, 154, 102, 0.08);\n  border-color: rgba(209, 154, 102, 0.2);\n}\n\n/* ===== Action Tab: Grid Override ===== */\n\n.act-action-grid {\n  grid-template-columns: 220px minmax(0, 1fr);\n}\n\n/* ===== Action Tab: Task List ===== */\n\n.act-action-folder {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 8px 4px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--act-text);\n  border-bottom: 2px solid var(--act-orange);\n  margin-bottom: 2px;\n}\n\n.act-action-folder:not(:first-child) {\n  margin-top: 12px;\n}\n\n.act-action-group-count {\n  font-size: 9px;\n  padding: 0 4px;\n  border-radius: 6px;\n  background: var(--act-bg-muted);\n  color: var(--act-text-faint);\n}\n\n.act-action-status-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 8px 2px;\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--act-text-faint);\n  letter-spacing: 0.3px;\n}\n\n.act-action-status-label.is-active { color: var(--act-green, #16a34a); }\n.act-action-status-label.is-waiting { color: var(--act-orange); }\n.act-action-status-label.is-paused { color: var(--act-text-faint); }\n\n.act-action-task-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  padding: 5px 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  border-radius: var(--act-r-sm);\n  font-size: 12px;\n  color: var(--act-text);\n  line-height: 1.3;\n}\n\n.act-action-task-btn:hover {\n  background: var(--act-bg-muted);\n}\n\n.act-action-task-btn.is-active {\n  background: var(--act-warm-yellow);\n  font-weight: 600;\n}\n\n.act-action-dot {\n  flex-shrink: 0;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--act-text-faint);\n}\n\n.act-action-dot.is-active { background: var(--act-green, #16a34a); }\n.act-action-dot.is-waiting { background: var(--act-orange); }\n.act-action-dot.is-paused { background: var(--act-text-faint); }\n.act-action-dot.is-none { background: var(--act-border-strong); }\n\n.act-action-task-name {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.act-action-task-badge {\n  flex-shrink: 0;\n  font-size: 9px;\n  padding: 0 4px;\n  border-radius: 4px;\n  background: var(--act-bg-muted);\n  color: var(--act-text-faint);\n}\n\n.act-action-done-hint {\n  padding: 8px;\n  font-size: 10px;\n  color: var(--act-text-faint);\n  text-align: center;\n}\n\n/* ===== Action Tab: Status Switcher ===== */\n\n.act-section-tabs {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  margin-bottom: 10px;\n  padding: 3px 4px;\n  border-radius: 999px;\n  background: var(--act-green-light);\n}\n\n.act-section-tab-add {\n  margin-left: auto;\n  font-size: 14px !important;\n  font-weight: 700 !important;\n  padding: 3px 10px !important;\n  color: var(--act-green) !important;\n}\n\n.act-section-tab-add:hover {\n  background: var(--act-card-dark) !important;\n  color: var(--act-text-inv) !important;\n}\n\n.act-section-tabs > .act-info-trigger {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n.act-section-tabs > .act-info-trigger .act-info-popup {\n  left: auto;\n  right: 0;\n  transform: none;\n}\n\n.act-section-tab {\n  padding: 5px 14px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent !important;\n  color: var(--act-text-faint);\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: none !important;\n  transition: all 0.2s ease;\n  letter-spacing: 0.03em;\n}\n\n.act-section-tab:hover {\n  color: var(--act-green-deep);\n}\n\n.act-section-tab.is-active {\n  background: var(--act-card-dark) !important;\n  color: var(--act-text-inv) !important;\n  font-weight: 700;\n}\n\n.act-status-switcher {\n  display: flex;\n  gap: 6px;\n  margin-top: 8px;\n  flex-wrap: wrap;\n}\n\n.act-status-chip {\n  padding: 3px 10px;\n  border: 1px solid var(--act-border);\n  border-radius: 12px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 11px;\n  color: var(--act-text-faint);\n  transition: all 0.15s;\n}\n\n.act-status-chip:hover {\n  border-color: var(--act-border-strong);\n  color: var(--act-text);\n}\n\n.act-status-chip.is-current {\n  font-weight: 600;\n}\n\n.act-status-chip.is-active.is-current {\n  background: rgba(22, 163, 74, 0.1);\n  border-color: var(--act-green, #16a34a);\n  color: var(--act-green, #16a34a);\n}\n\n.act-status-chip.is-waiting.is-current {\n  background: rgba(245, 158, 11, 0.1);\n  border-color: var(--act-orange);\n  color: var(--act-orange);\n}\n\n.act-status-chip.is-paused.is-current {\n  background: var(--act-bg-muted);\n  border-color: var(--act-text-faint);\n  color: var(--act-text-faint);\n}\n\n.act-status-chip.is-done.is-current {\n  background: rgba(22, 163, 74, 0.1);\n  border-color: var(--act-green, #16a34a);\n  color: var(--act-green, #16a34a);\n}\n\n/* ===== Action Tab: Workbench ===== */\n\n.act-deadline-hint.is-overdue {\n  color: var(--act-red) !important;\n  font-weight: 600;\n  background: rgba(220, 38, 38, 0.08) !important;\n}\n\n.act-deadline-hint.is-urgent {\n  color: var(--act-orange) !important;\n  font-weight: 600;\n  background: rgba(245, 158, 11, 0.08) !important;\n}\n\n.act-head-remark {\n  font-weight: 400;\n  color: var(--act-text-faint) !important;\n  background: transparent !important;\n  font-style: italic;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.act-progress-head-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--act-text-faint);\n  margin-top: 2px;\n}\n\n.act-progress-head-meta span {\n  padding: 1px 6px;\n  background: var(--act-bg-muted);\n  border-radius: 4px;\n}\n\n.act-workbench-next {\n  margin-top: 12px;\n  padding: 12px;\n  background: var(--act-warm-yellow);\n  border: 1px solid var(--act-warm-yellow-border);\n  border-radius: var(--act-r-sm);\n}\n\n.act-workbench-next.is-empty {\n  background: var(--act-bg-muted);\n  border-color: var(--act-border);\n}\n\n.act-workbench-next-title {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--act-orange);\n  margin-bottom: 8px;\n}\n\n.act-workbench-next.is-empty .act-workbench-next-title {\n  color: var(--act-text-faint);\n}\n\n.act-workbench-todo {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  padding: 3px 0;\n  font-size: 13px;\n  color: var(--act-text);\n}\n\n.act-workbench-todo.is-done {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n\n.act-workbench-todo .act-focus-action-check {\n  margin-top: 2px;\n}\n\n.act-workbench-todo.is-done .act-focus-action-check > div {\n  border-color: var(--act-green);\n  background: var(--act-green);\n}\n\n.act-workbench-todo-plain {\n  padding: 3px 0;\n  font-size: 13px;\n  color: var(--act-text-soft);\n}\n\n/* Workbench Editor (always visible) */\n\n.act-workbench-editor {\n  margin-top: 12px;\n  padding: 10px;\n  background: var(--act-bg-muted);\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r-sm);\n}\n\n.act-workbench-editor .act-progress-type-row {\n  margin-bottom: 8px;\n}\n\n.act-workbench-input-row {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n}\n\n.act-workbench-input-row .act-progress-input {\n  flex: 1;\n  min-height: 160px;\n  transition: min-height 0.2s ease;\n}\n\n.act-workbench-input-row .act-progress-input.is-expanded {\n  min-height: 420px;\n}\n\n.act-progress-btn-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-self: stretch;\n  justify-content: flex-end;\n}\n\n.act-progress-expand {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 42px;\n  border: 1.5px solid var(--act-border-strong);\n  border-radius: 12px;\n  background: var(--act-card);\n  color: var(--act-text-faint);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\n.act-progress-expand:hover {\n  border-color: var(--act-green);\n  color: var(--act-green);\n  background: var(--act-green-light);\n}\n\n.act-progress-expand svg {\n  width: 16px;\n  height: 16px;\n}\n\n.act-workbench-input-row .act-progress-save {\n  flex-shrink: 0;\n  align-self: flex-end;\n}\n\n/* Workbench Recent Progress */\n\n.act-workbench-recent {\n  margin-top: 12px;\n}\n\n.act-workbench-recent-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n\n.act-workbench-recent-head .act-workbench-section-title {\n  margin-bottom: 0;\n}\n\n.act-progress-limit {\n  display: inline-flex;\n  flex: 0 0 auto;\n  gap: 2px;\n  padding: 3px;\n  border: 1px solid var(--act-border);\n  border-radius: 999px;\n  background: var(--act-bg-muted);\n}\n\n.act-progress-limit-button {\n  min-width: 44px;\n  min-height: 26px;\n  padding: 4px 9px;\n  border: 0 !important;\n  border-radius: 999px !important;\n  background: transparent !important;\n  color: var(--act-text-faint) !important;\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 1;\n  box-shadow: none !important;\n}\n\n.act-progress-limit-button:hover {\n  color: var(--act-text) !important;\n}\n\n.act-progress-limit-button.is-active {\n  background: var(--act-card-dark) !important;\n  color: var(--act-text-inv) !important;\n}\n\n.act-workbench-section-title {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--act-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n\n/* Workbench Foldable Sections */\n\n.act-workbench-folds {\n  margin-top: 12px;\n  border-top: 1px solid var(--act-border);\n  padding-top: 8px;\n}\n\n.act-fold {\n  margin-bottom: 4px;\n}\n\n.act-fold-toggle {\n  display: block;\n  width: 100%;\n  padding: 6px 8px;\n  border: none;\n  border-radius: var(--act-r-sm);\n  background: transparent;\n  cursor: pointer;\n  font-size: 12px;\n  color: var(--act-text-faint);\n  text-align: left;\n}\n\n.act-fold-toggle:hover {\n  color: var(--act-text);\n  background: var(--act-bg-muted);\n}\n\n.act-fold.is-collapsed .act-fold-body {\n  display: none;\n}\n\n.act-fold-body {\n  padding: 8px 8px 8px 16px;\n  font-size: 13px;\n  color: var(--act-text-soft);\n  line-height: 1.6;\n}\n\n.theme-dark .act-workbench-next {\n  background: rgba(209, 154, 102, 0.08);\n  border-color: rgba(209, 154, 102, 0.2);\n}\n\n.theme-dark .act-workbench-editor {\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(255, 255, 255, 0.08);\n}\n\n/* ===== Goal-Task Association ===== */\n\n.act-goal-box {\n  margin-top: 10px;\n  padding: 10px 12px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: var(--act-r-sm);\n}\n\n.act-section[data-theme="dark"] .act-goal-box {\n  background: rgba(255, 255, 255, 0.08);\n}\n\n.act-section[data-theme="dark"] .act-goal-title {\n  color: rgba(255, 255, 255, 0.95);\n}\n\n.act-section[data-theme="dark"] .act-goal-title:hover {\n  color: #fff;\n}\n\n.act-section[data-theme="dark"] .act-goal-task-name {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.act-section[data-theme="dark"] .act-goal-task-name:hover {\n  color: #fff;\n}\n\n.act-goal-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.act-goal-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--act-text);\n  text-decoration: none;\n}\n\n.act-goal-title:hover {\n  color: var(--act-green-deep);\n}\n\n.act-goal-tasks {\n  margin-top: 6px;\n  padding-left: 4px;\n}\n\n.act-goal-task-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 3px 0;\n}\n\n.act-goal-task-status {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n\n.act-goal-task-status.is-active {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n}\n\n.act-goal-task-status.is-waiting {\n  background: rgba(217, 119, 6, 0.12);\n  color: var(--act-orange);\n}\n\n.act-goal-task-status.is-paused {\n  background: rgba(107, 114, 128, 0.12);\n  color: #6b7280;\n}\n\n.act-goal-task-status.is-none {\n  background: rgba(107, 114, 128, 0.08);\n  color: #9ca3af;\n}\n\n.act-goal-task-name {\n  font-size: 12px;\n  color: var(--act-text-soft);\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.act-goal-task-name:hover {\n  color: var(--act-green-deep);\n}\n\n/* ===== Action Tab: List Header + Add Button ===== */\n\n.act-action-list-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 8px 4px;\n}\n\n.act-action-list-header .act-section-title {\n  font-size: 12px;\n  margin: 0;\n}\n\n.act-action-add-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: 1px dashed var(--act-border);\n  border-radius: var(--act-r-sm);\n  background: transparent;\n  color: var(--act-text-faint);\n  cursor: pointer;\n  padding: 0;\n}\n\n.act-action-add-btn:hover {\n  color: var(--act-orange);\n  border-color: var(--act-orange);\n  background: rgba(217, 119, 6, 0.06);\n}\n\n.act-action-add-btn svg {\n  width: 14px;\n  height: 14px;\n}\n\n/* ===== Folder Choice Modal ===== */\n\n.act-folder-choice-hint {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n}\n\n.act-folder-choice-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 4px;\n  width: 100%;\n  min-height: 72px;\n  height: auto;\n  padding: 14px 18px;\n  margin-bottom: 10px;\n  border: 1px solid var(--background-modifier-border);\n  border-radius: 8px;\n  background: var(--background-primary);\n  cursor: pointer;\n  text-align: left;\n  white-space: normal;\n}\n\n.act-folder-choice-btn:hover {\n  border-color: var(--interactive-accent);\n  background: var(--background-secondary);\n}\n\n.act-folder-choice-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-normal);\n  line-height: 1.35;\n}\n\n.act-folder-choice-desc {\n  font-size: 12px;\n  color: var(--text-muted);\n  line-height: 1.45;\n  margin-top: 0;\n  white-space: normal;\n}\n\n/* ===== Progress Entry Type Tags ===== */\n\n.act-progress-tag {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 600;\n  font-family: var(--act-sans);\n  letter-spacing: 0.3px;\n}\n\n.act-progress-tag.is-\u5361\u70B9 {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n\n.act-progress-tag.is-\u5224\u65AD {\n  background: rgba(59, 130, 246, 0.12);\n  color: #2563eb;\n}\n\n.act-progress-tag.is-\u60C5\u7EEA {\n  background: rgba(168, 85, 247, 0.12);\n  color: #9333ea;\n}\n\n.act-progress-tag.is-\u4E0B\u4E00\u6B65 {\n  background: rgba(34, 197, 94, 0.12);\n  color: #16a34a;\n}\n\n.act-progress-entry.is-type-\u5361\u70B9 {\n  border-left-color: #dc2626;\n}\n\n.act-progress-entry.is-type-\u5224\u65AD {\n  border-left-color: #2563eb;\n}\n\n.act-progress-entry.is-type-\u60C5\u7EEA {\n  border-left-color: #9333ea;\n}\n\n.act-progress-entry.is-type-\u4E0B\u4E00\u6B65 {\n  border-left-color: #16a34a;\n}\n\n.act-workbench-recent .act-progress-entry-time {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n/* ===== Workbench Editor Title ===== */\n\n.act-workbench-editor-title {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--act-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n\n/* ===== Status Switcher Label ===== */\n\n.act-status-switcher-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--act-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n\n/* ===== Card Tab: Pending Board ===== */\n\n.act-pending-group {\n  margin-top: 10px;\n}\n\n.act-pending-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--act-text-faint);\n  margin-bottom: 4px;\n}\n\n.act-pending-item {\n  display: block;\n  padding: 5px 10px;\n  font-size: 13px;\n  color: var(--act-text-soft);\n  text-decoration: none;\n  border-radius: var(--act-r-sm);\n  cursor: pointer;\n}\n\n.act-pending-item:hover {\n  background: var(--act-bg-muted);\n  color: var(--act-text);\n}\n\n/* ===== Card Tab: Index Card Overview ===== */\n\n.act-index-group {\n  margin-top: 10px;\n}\n\n.act-index-group-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--act-text-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  margin-bottom: 6px;\n}\n\n.act-index-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  margin: 0 4px 4px 0;\n  border: 1px solid var(--act-border);\n  border-radius: var(--act-r-sm);\n  font-size: 12px;\n  color: var(--act-text-soft);\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.act-index-chip:hover {\n  border-color: var(--act-green);\n  color: var(--act-green-deep);\n  background: rgba(34, 197, 94, 0.06);\n}\n\n.act-index-chip-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  border-radius: 8px;\n  background: var(--act-green);\n  color: white;\n  font-size: 10px;\n  font-weight: 700;\n}\n\n/* Startup screen */\n.act-startup {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 360px;\n  padding: 48px 24px;\n  animation: act-startup-fadein 0.6s ease-out both;\n}\n@keyframes act-startup-fadein {\n  from { opacity: 0; transform: translateY(12px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.act-startup-brand {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.act-startup-letter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  font-size: 22px;\n  font-weight: 800;\n  letter-spacing: 0;\n  color: var(--act-card);\n  background: var(--act-green);\n  box-shadow: 0 2px 8px rgba(45, 106, 79, 0.2);\n  opacity: 0;\n  animation: act-letter-in 0.4s ease-out forwards;\n}\n.act-startup-letter:nth-child(1) { animation-delay: 0.1s; }\n.act-startup-letter:nth-child(2) { animation-delay: 0.25s; }\n.act-startup-letter:nth-child(3) { animation-delay: 0.4s; }\n@keyframes act-letter-in {\n  from { opacity: 0; transform: scale(0.6) translateY(8px); }\n  to { opacity: 1; transform: scale(1) translateY(0); }\n}\n\n.act-startup-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--act-text-faint);\n  letter-spacing: 4px;\n  margin-bottom: 24px;\n  opacity: 0;\n  animation: act-startup-fadein 0.5s ease-out 0.5s forwards;\n}\n\n.act-startup-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--act-text-soft);\n  margin-bottom: 10px;\n  opacity: 0;\n  animation: act-startup-fadein 0.5s ease-out 0.6s forwards;\n}\n.act-startup-dot {\n  color: var(--act-text-faint);\n}\n\n.act-startup-quote {\n  font-size: 14px;\n  color: var(--act-green-deep);\n  font-weight: 500;\n  letter-spacing: 1px;\n  margin-bottom: 32px;\n  opacity: 0;\n  animation: act-startup-fadein 0.5s ease-out 0.75s forwards;\n}\n\n.act-startup-bar {\n  width: 120px;\n  height: 3px;\n  border-radius: 2px;\n  background: var(--act-border);\n  overflow: hidden;\n  opacity: 0;\n  animation: act-startup-fadein 0.3s ease-out 0.9s forwards;\n}\n.act-startup-bar-fill {\n  width: 40%;\n  height: 100%;\n  border-radius: 2px;\n  background: var(--act-green);\n  animation: act-bar-slide 1.8s ease-in-out 1s infinite;\n}\n@keyframes act-bar-slide {\n  0% { width: 20%; margin-left: 0; }\n  50% { width: 50%; margin-left: 50%; }\n  100% { width: 20%; margin-left: 0; }\n}\n\n/* ========= UPDATE NOTES ========= */\n.act-update-notes {\n  margin-top: 10px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  background: var(--background-secondary);\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.act-update-notes-title {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.act-update-notes-item {\n  padding-left: 6px;\n}\n';

// main.ts
var VIEW_TYPE = "act-workspace-view";
var RECENT_THOUGHTS_LIMIT = 3;
var MOBILE_DAILY_CAPTURE_COMMAND_ID = "act-capture:act-capture-open";
var DIDA_WEB_URL = "https://dida365.com";
var DIDA_API_BASE = "https://api.dida365.com";
var DIDA_PREVIEW_LIMIT = 10;
var WEEK_IMPORTANT_HEADINGS = ["\u672C\u5468\u8981\u4E8B", "\u4ECA\u65E5\u884C\u52A8", "\u6BCF\u65E5\u884C\u52A8"];
var RENDER_DEBOUNCE_MS = 350;
var TERMINAL_VIEW_TYPE = "terminal:terminal";
var TERMINAL_READY_TIMEOUT_MS = 8e3;
var TERMINAL_POLL_INTERVAL_MS = 150;
var TERMINAL_NEW_LEAF_GRACE_MS = 2e3;
var STARTUP_RENDER_DELAY_MS = 1600;
var STARTUP_AUTO_OPEN_DELAY_MS = 1800;
var MOBILE_STARTUP_AUTO_OPEN_DELAY_MS = 2400;
var DIDA_ACTIVE_CACHE_MS = 5e3;
var QUICK_SKILLS = [];
var DEFAULT_FOLDERS = {
  inbox: "+",
  focusAction: "10-Action/11-Focus-\u805A\u7126\u627F\u8BFA",
  activeAction: "10-Action/12-Active-\u6D3B\u8DC3\u8DDF\u8FDB",
  maybeAction: "10-Action/13-Maybe-\u5C06\u6765\u4E5F\u8BB8",
  daily: "30-Time/34-Daily-\u65E5\u5FD7",
  weekly: "30-Time/33-Weekly-\u6BCF\u5468",
  cycle: "30-Time/32-12Week-\u5341\u4E8C\u5468",
  vision: "30-Time/31-Vision-\u613F\u666F",
  card: "20-Card",
  // 编号须与仓库实际一致：21-IndexCard / 22-BibCard / 23-MainCard
  mainCard: "20-Card/23-MainCard-\u6838\u5FC3\u5361",
  bibCard: "20-Card/22-BibCard-\u9605\u8BFB\u5361",
  indexCard: "20-Card/21-IndexCard-\u7D22\u5F15\u5361",
  newCard: "",
  thought: "+/ACT\u95EA\u5FF5",
  thoughtFile: "+/ACT\u95EA\u5FF5/\u6BCF\u65E5\u95EA\u5FF5.md"
};
var DEFAULT_DIDA = {
  enabled: false,
  accessToken: "",
  lookbackDays: 14,
  completedLogTarget: "weekly",
  completedLogPathTemplate: "{weeklyFolder}/{weekId}.md",
  completedLogHeading: "## \u6BCF\u65E5\u8BB0\u5F55"
};
var DEFAULT_COMPLETED_LOG = {
  target: "weekly",
  pathTemplate: "{weeklyFolder}/{weekId}.md",
  heading: "## \u6BCF\u65E5\u8BB0\u5F55",
  dailyLookbackDays: 14
};
var DEFAULT_DV_PATHS = {
  mainCard: "20-Card/\u77E5\u8BC6\u603B\u89C8.base#\u6838\u5FC3\u5361\u603B\u89C8",
  bibCard: "20-Card/\u77E5\u8BC6\u603B\u89C8.base#\u9605\u8BFB\u5361\u603B\u89C8",
  indexCard: "20-Card/\u77E5\u8BC6\u603B\u89C8.base#\u7D22\u5F15\u5361\u603B\u89C8",
  newCard: ""
};
var DEFAULT_PROGRESS_LOG = {
  heading: "## \u8FDB\u5C55\u8BB0\u5F55",
  format: "heading-time"
};
var DEFAULT_SETTINGS = {
  promptDrafts: {},
  progressDrafts: {},
  progressLog: { ...DEFAULT_PROGRESS_LOG },
  recentProgressLimit: 3,
  skillItems: QUICK_SKILLS.map((s) => ({ ...s })),
  skillCommandTemplate: "cd {{vault}} && codex -- '{{skill}}'",
  terminalMode: "terminal",
  noteOpenMode: "split",
  cycleMode: "monthly",
  dvPaths: { ...DEFAULT_DV_PATHS },
  folders: { ...DEFAULT_FOLDERS },
  dida: { ...DEFAULT_DIDA },
  completedLog: { ...DEFAULT_COMPLETED_LOG },
  updateRepo: "",
  updateToken: "",
  hideCompletedNotes: false,
  autoStampDoneDate: true,
  // 两端都默认开启，保持 0.3.5 及以前「启动即打开工作台」的既有行为
  openOnMobileStartup: true,
  openOnDesktopStartup: true,
  cardVisibility: { mainCard: true, bibCard: true, indexCard: true, newCard: false },
  cardSearchMode: {},
  cardTags: {},
  templates: { taskNote: "", cycle: "", weekly: "", daily: "" },
  refreshInterval: 30
};
function pad(n) {
  return String(n).padStart(2, "0");
}
function formatDateOnly(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function formatDateTime(date) {
  return `${formatDateOnly(date)} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function formatShortDateTime(date) {
  return `${String(date.getFullYear()).slice(2)}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
}
function getWeekdayShortName(date) {
  return ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][date.getDay()];
}
function formatDailyDate(date) {
  return `${formatDateOnly(date)}\uFF08${getWeekdayShortName(date)}\uFF09`;
}
function formatWeeklyLogHeading(date) {
  return `${pad(date.getMonth() + 1)}-${pad(date.getDate())} \u5468${getWeekdayShortName(date)}`;
}
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 864e5 + 1) / 7);
}
function formatWeekId(date) {
  return `${date.getFullYear()}-W${pad(getWeekNumber(date))}`;
}
function weekIdToDate(weekId) {
  const [yearStr, weekStr] = weekId.split("-W");
  const year = parseInt(yearStr);
  const week = parseInt(weekStr);
  const jan4 = new Date(year, 0, 4);
  const dayOfWeek = jan4.getDay() || 7;
  const week1Monday = new Date(jan4);
  week1Monday.setDate(jan4.getDate() - (dayOfWeek - 1));
  const target = new Date(week1Monday);
  target.setDate(week1Monday.getDate() + (week - 1) * 7);
  return target;
}
function getWeekBounds(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(d.setDate(diff));
  monday.setHours(0, 0, 0, 0);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return { monday, sunday };
}
function getNextMonday(date) {
  const next = new Date(date);
  const day = next.getDay();
  const diff = day === 0 ? 1 : 8 - day;
  next.setDate(next.getDate() + diff);
  return next;
}
function getCycleInfo(date, mode) {
  if (mode === "monthly") {
    const month = date.getMonth();
    const quarter = Math.floor(month / 3);
    const cycle2 = `Y${quarter + 1}`;
    const qStart = new Date(date.getFullYear(), quarter * 3, 1);
    const qEnd = new Date(date.getFullYear(), (quarter + 1) * 3, 0);
    const dayOfQ = Math.floor((date.getTime() - qStart.getTime()) / 864e5);
    const weekOfCycle = Math.floor(dayOfQ / 7) + 1;
    const totalDays = Math.floor((qEnd.getTime() - qStart.getTime()) / 864e5) + 1;
    const totalWeeks = Math.ceil(totalDays / 7);
    return { cycle: cycle2, weekOfCycle, totalWeeks };
  }
  const weekNum = getWeekNumber(date);
  if (mode === "weekly13") {
    const cycle2 = weekNum <= 13 ? "Y1" : weekNum <= 26 ? "Y2" : weekNum <= 39 ? "Y3" : "Y4";
    return { cycle: cycle2, weekOfCycle: (weekNum - 1) % 13 + 1, totalWeeks: 13 };
  }
  const cycle = weekNum <= 12 ? "Y1" : weekNum <= 24 ? "Y2" : weekNum <= 36 ? "Y3" : "Y4";
  return { cycle, weekOfCycle: (weekNum - 1) % 12 + 1, totalWeeks: 12 };
}
function getNextYearCycle(year, cycle) {
  const order = ["Y1", "Y2", "Y3", "Y4"];
  const index = order.indexOf(cycle);
  if (index >= 0 && index < order.length - 1) return { year, cycle: order[index + 1] };
  return { year: year + 1, cycle: "Y1" };
}
function safeFileName(input) {
  return input.trim().replace(/[\\/:*?"<>|#^[\]]/g, "").replace(/\s+/g, "-").slice(0, 48) || "\u672A\u547D\u540D";
}
function stampNewlyCompleted(prev, next, dateStr) {
  const openBefore = /* @__PURE__ */ new Set();
  for (const line of prev.split("\n")) {
    const m = line.match(/^\s*[-*]\s*\[ \]\s*(.*)$/);
    if (m) openBefore.add(normalizeInlineText(m[1]));
  }
  if (openBefore.size === 0) return { content: next, stamped: 0 };
  const lines = next.split("\n");
  let stamped = 0;
  for (let i = 0; i < lines.length; i++) {
    if (/✅\s*\d{4}-\d{2}-\d{2}/.test(lines[i])) continue;
    const m = lines[i].match(/^(\s*[-*]\s*\[[xX]\]\s*)(.*)$/);
    if (!m) continue;
    const body = m[2].replace(/\s+$/, "");
    if (!body) continue;
    if (!openBefore.has(normalizeInlineText(body))) continue;
    lines[i] = `${m[1]}${body} \u2705 ${dateStr}`;
    stamped++;
  }
  return { content: lines.join("\n"), stamped };
}
function isMobileRuntime() {
  return import_obsidian.Platform.isMobileApp || import_obsidian.Platform.isMobile;
}
function isUnderFolder(path, folderPath) {
  const folder = folderPath.replace(/\/+$/, "");
  if (!folder) return false;
  return path === folder || path.startsWith(`${folder}/`);
}
function collectMarkdownFiles(folder) {
  const files = [];
  for (const child of folder.children) {
    if (child instanceof import_obsidian.TFile && child.extension === "md") files.push(child);
    else if (child instanceof import_obsidian.TFolder) files.push(...collectMarkdownFiles(child));
  }
  return files;
}
function normalizeInlineText(input) {
  return input.replace(/-->/g, "").replace(/\s+/g, " ").trim();
}
function normalizeHeadingLine(input) {
  return input.trim().replace(/^(?:>\s*)+/, "").replace(/^\[![^\]]+\][+-]?\s*/, "").trim();
}
function parseGoalHeading(input) {
  const line = normalizeHeadingLine(input);
  const match = line.match(/^#{1,6}\s+(G\s*\d+)(?:\s*[-–—：:]\s*|\s+)(.+?)\s*$/i);
  if (!match) return null;
  return {
    id: match[1].replace(/\s+/g, "").toUpperCase(),
    title: match[2].trim()
  };
}
function shellQuote(input) {
  return `'${input.replace(/'/g, "'\\''")}'`;
}
function getRuntimePlatform() {
  return globalThis.process?.platform;
}
function windowsCmdQuote(input) {
  return `"${input.replace(/["^&|<>()]/g, "^$&").replace(/%/g, "%%")}"`;
}
function toAppleScriptString(input) {
  return `"${input.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
var DEFAULT_UPDATE_REPO = "KivenBig/obsidian-act-console";
var UPDATE_CHECK_INTERVAL_MS = 5 * 60 * 1e3;
function normalizeGitHubRepo(input) {
  const trimmed = input.trim().replace(/\/+$/, "");
  if (!trimmed) return "";
  const sshMatch = trimmed.match(/^git@github\.com:(.+?\/.+?)(?:\.git)?$/i);
  const urlMatch = trimmed.match(/^https?:\/\/github\.com\/([^/\s]+\/[^/\s#?]+)(?:\.git)?(?:[/?#].*)?$/i);
  const shortMatch = trimmed.match(/^([^/\s]+\/[^/\s]+)$/);
  const repo = sshMatch?.[1] ?? urlMatch?.[1] ?? shortMatch?.[1] ?? "";
  return repo.replace(/\.git$/i, "").replace(/\/+$/, "");
}
function getGitHubRepoUrl(input) {
  const repo = normalizeGitHubRepo(input);
  return repo ? `https://github.com/${repo}` : "";
}
function formatWeekRange(weekId) {
  if (!/^\d{4}-W\d{2}$/.test(weekId)) return "";
  const monday = weekIdToDate(weekId);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return `${pad(monday.getMonth() + 1)}.${pad(monday.getDate())} - ${pad(sunday.getMonth() + 1)}.${pad(sunday.getDate())}`;
}
function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function parseCheckboxes(content) {
  const tasks = [];
  for (const line of content.split("\n")) {
    const m = line.match(/^[-*]\s*\[([ xX])\]\s*(.+)/);
    if (m) tasks.push({ done: m[1].toLowerCase() === "x", text: m[2].trim() });
  }
  return tasks;
}
function parseConfigHeading(input, fallbackLevel, fallbackTitle) {
  const trimmed = input.trim();
  if (!trimmed) return { level: fallbackLevel, title: fallbackTitle };
  const match = trimmed.match(/^(#{1,3})\s+(.+)$/);
  if (!match) return { level: fallbackLevel, title: trimmed };
  return { level: match[1].length, title: match[2].trim() || fallbackTitle };
}
function findProgressSection(content, headingSetting = DEFAULT_PROGRESS_LOG.heading) {
  const target = parseConfigHeading(headingSetting, 2, "\u8FDB\u5C55\u8BB0\u5F55");
  const lines = content.split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{1,6})\s+(.+?)\s*$/);
    if (!match || match[1].length !== target.level || match[2].trim() !== target.title) continue;
    const level = target.level;
    let end = lines.length;
    for (let next = index + 1; next < lines.length; next += 1) {
      const nextHeading = lines[next].match(/^(#{1,6})\s+/);
      if (nextHeading && nextHeading[1].length <= level) {
        end = next;
        break;
      }
    }
    return { start: index + 1, end, level };
  }
  return null;
}
function extractTaskSection(content, matchHeading) {
  const lines = content.split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^##\s+(.+?)\s*$/);
    if (!match || !matchHeading(match[1].trim())) continue;
    let end = lines.length;
    for (let next = index + 1; next < lines.length; next += 1) {
      const nextHeading = lines[next].match(/^(#{1,6})\s+/);
      if (nextHeading && nextHeading[1].length <= 2) {
        end = next;
        break;
      }
    }
    return lines.slice(index + 1, end).join("\n").trim();
  }
  return "";
}
function findTaskSection(content, matchHeading) {
  const lines = content.split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^(#{1,6})\s+(.+?)\s*$/);
    if (!match || !matchHeading(match[2].trim())) continue;
    const level = match[1].length;
    let end = lines.length;
    for (let next = index + 1; next < lines.length; next += 1) {
      const nextHeading = lines[next].match(/^(#{1,6})\s+/);
      if (nextHeading && nextHeading[1].length <= level) {
        end = next;
        break;
      }
    }
    return { start: index + 1, end, level };
  }
  return null;
}
function getNextActionSection(content) {
  return findTaskSection(content, (heading) => /^(?:下一步行动|下步行动|行动清单)$/.test(heading));
}
function extractSectionBlock(content, heading) {
  return extractTaskSection(content, (title) => title === heading);
}
function extractProgressEntries(content, headingSetting = DEFAULT_PROGRESS_LOG.heading) {
  const section = findProgressSection(content, headingSetting);
  if (!section) return [];
  const lines = content.split("\n").slice(section.start, section.end);
  const entries = [];
  let current = null;
  const pushCurrent = () => {
    if (current && current.text.trim()) entries.push({ marker: current.marker, text: current.text.trim() });
    current = null;
  };
  for (const line of lines) {
    const normalizedLine = normalizeHeadingLine(line);
    const heading = normalizedLine.match(/^#{3,6}\s+(.+)/);
    if (heading) {
      pushCurrent();
      current = { marker: heading[1].trim(), text: "" };
      continue;
    }
    const bullet = line.match(/^\s*[-*]\s+(.+)/);
    if (bullet) {
      const marker = extractProgressMarker(bullet[1]);
      if (marker) {
        pushCurrent();
        current = { marker, text: bullet[1].trim() };
        continue;
      }
    }
    const bodyLine = line.replace(/^(?:>\s?)+/, "").trim();
    if (current && bodyLine) {
      current.text = current.text ? `${current.text}
${bodyLine}` : bodyLine;
    }
  }
  pushCurrent();
  return entries.sort((a, b) => {
    const aTime = parseProgressMarkerTime(a.marker);
    const bTime = parseProgressMarkerTime(b.marker);
    if (!Number.isNaN(aTime) && !Number.isNaN(bTime)) return bTime - aTime;
    if (!Number.isNaN(aTime)) return -1;
    if (!Number.isNaN(bTime)) return 1;
    return 0;
  });
}
function extractProgressMarker(text) {
  return text.match(/^(\[\[\d{4}[-/]\d{1,2}[-/]\d{1,2}[^\]]*\]\]|\d{4}[-/]\d{1,2}[-/]\d{1,2}(?:\s+\d{1,2}:\d{2})?)/)?.[1] ?? "";
}
function parseProgressMarkerTime(marker) {
  const match = marker.match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})(?:\s+(\d{1,2}):(\d{2}))?/);
  if (!match) return Number.NaN;
  return new Date(
    parseInt(match[1]),
    parseInt(match[2]) - 1,
    parseInt(match[3]),
    match[4] ? parseInt(match[4]) : 0,
    match[5] ? parseInt(match[5]) : 0
  ).getTime();
}
function extractProgressTypeTag(text) {
  const match = text.match(/^【(判断|卡点|情绪|下步行动|下一步)】\s*/);
  if (match) return { tag: match[1], body: text.slice(match[0].length).trim() };
  return { tag: "", body: text };
}
function buildProgressEntry(text, format, headingLevel = 3) {
  const time = formatDateTime(/* @__PURE__ */ new Date());
  const body = text.trim();
  if (format === "bullet-time") return `- ${time} ${body}`;
  return `${"#".repeat(headingLevel)} ${time}

${body}`;
}
function appendProgressEntry(content, text, progressLog = DEFAULT_PROGRESS_LOG) {
  const target = parseConfigHeading(progressLog.heading, 2, "\u8FDB\u5C55\u8BB0\u5F55");
  const entryHeadingLevel = target.level >= 3 ? Math.min(6, target.level + 1) : 3;
  const entry = buildProgressEntry(text, progressLog.format, entryHeadingLevel);
  const section = findProgressSection(content, progressLog.heading);
  if (!section) {
    const trimmed = content.replace(/\s*$/, "");
    return `${trimmed}

${"#".repeat(target.level)} ${target.title}

${entry}
`;
  }
  const lines = content.split("\n");
  let insertAt = section.start;
  while (insertAt < section.end && lines[insertAt].trim() === "") insertAt += 1;
  lines.splice(insertAt, 0, entry, "");
  return lines.join("\n").replace(/\s*$/, "\n");
}
function parseCheckboxesInSection(content, heading) {
  const sectionLines = [];
  let inSection = false;
  let sectionLevel = 0;
  for (const line of content.split("\n")) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const title = headingMatch[2].trim();
      if (title === heading) {
        inSection = true;
        sectionLevel = level;
        continue;
      }
      if (inSection && level <= sectionLevel) break;
    }
    if (inSection) sectionLines.push(line);
  }
  return parseCheckboxes(sectionLines.join("\n"));
}
function parsePriorityTasks(content, sectionHeading = "\u6BCF\u65E5\u884C\u52A8") {
  const tasks = [];
  const headings = Array.isArray(sectionHeading) ? sectionHeading : [sectionHeading];
  const lines = content.split("\n");
  let inSection = false;
  for (const line of lines) {
    if (headings.some((heading) => line.match(new RegExp(`^##\\s+${escapeRegExp(heading)}\\s*$`)))) {
      inSection = true;
      continue;
    }
    if (inSection && line.match(/^##\s+/)) break;
    if (!inSection) continue;
    const m = line.match(/^[-*]\s*\[([ xX])\]\s*(.+)/);
    if (!m) continue;
    const done = m[1].toLowerCase() === "x";
    const rawText = m[2].trim();
    const leadingMatch = rawText.match(/^([!！]{1,3})\s+/);
    const trailingMatch = rawText.match(/\s*([!！]{1,3})\s*(?:✅.*)?$/);
    const priority = leadingMatch ? leadingMatch[1].length : trailingMatch ? trailingMatch[1].length : 0;
    const doneDateMatch = rawText.match(/✅\s*(\d{4}-\d{2}-\d{2})/);
    const doneDate = doneDateMatch ? doneDateMatch[1] : "";
    const displayText = rawText.replace(/^[!！]{1,3}\s+/, "").replace(/\s*[!！]{1,3}\s*(?:✅.*)?$/, "").replace(/\s*✅.*$/, "").trim();
    tasks.push({ text: rawText, done, priority, displayText, doneDate });
  }
  return tasks;
}
function parseMarkedActions(content) {
  const items = [];
  const lines = content.split("\n");
  const section = getNextActionSection(content);
  if (!section) return items;
  for (let lineIndex = section.start; lineIndex < section.end; lineIndex += 1) {
    const line = lines[lineIndex];
    const m = line.match(/^\s*[-*]\s*\[([ xX])\]\s*(.+)/);
    if (!m) {
      const plain = line.match(/^\s*[-*]\s+([!！]{1,3})\s+(.+)/);
      if (plain) {
        items.push({ text: plain[2].trim(), priority: plain[1].length, done: false, doneDate: "", lineIndex });
      }
      continue;
    }
    const done = m[1].toLowerCase() === "x";
    const rawText = m[2].trim();
    const leadingMatch = rawText.match(/^([!！]{1,3})\s+/);
    const trailingMatch = rawText.match(/\s*([!！]{1,3})\s*(?:✅.*)?$/);
    const priority = leadingMatch ? leadingMatch[1].length : trailingMatch ? trailingMatch[1].length : 0;
    if (priority === 0) continue;
    const doneDateMatch = rawText.match(/✅\s*(\d{4}-\d{2}-\d{2})/);
    const doneDate = doneDateMatch ? doneDateMatch[1] : "";
    const text = rawText.replace(/^[!！]{1,3}\s+/, "").replace(/\s*[!！]{1,3}\s*(?:✅.*)?$/, "").replace(/\s*✅.*$/, "").trim();
    items.push({ text, priority, done, doneDate, lineIndex });
  }
  items.sort((a, b) => b.priority - a.priority);
  return items;
}
function completeTaskActionLine(content, lineIndex, completedDate) {
  const lines = content.split("\n");
  const line = lines[lineIndex];
  if (!line) return content;
  if (/^\s*[-*]\s*\[x\]/i.test(line)) {
    if (/✅\s*\d{4}-\d{2}-\d{2}/.test(line)) return content;
    lines[lineIndex] = `${line.trimEnd()} \u2705 ${completedDate}`;
    return lines.join("\n");
  }
  const openCheckbox = line.match(/^(\s*[-*]\s*)\[ \](\s*.+)$/);
  if (openCheckbox) {
    const nextLine = `${openCheckbox[1]}[x]${openCheckbox[2].trimEnd()}`;
    lines[lineIndex] = /✅\s*\d{4}-\d{2}-\d{2}/.test(nextLine) ? nextLine : `${nextLine} \u2705 ${completedDate}`;
    return lines.join("\n");
  }
  const plain = line.match(/^(\s*[-*]\s+)(.+)$/);
  if (plain) {
    const nextLine = `${plain[1]}[x] ${plain[2].trimEnd()}`;
    lines[lineIndex] = /✅\s*\d{4}-\d{2}-\d{2}/.test(nextLine) ? nextLine : `${nextLine} \u2705 ${completedDate}`;
    return lines.join("\n");
  }
  return content;
}
function readFrontmatterLine(fm, pattern) {
  return fm.match(new RegExp(`^${pattern}:[^\\S\\r\\n]*(.*)$`, "m"))?.[1]?.trim() ?? "";
}
function parseFrontmatterAction(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { tags: [], aiNote: "", personalNote: "", deadline: "", priority: "" };
  const fm = fmMatch[1];
  const tags = [];
  const tagsBlock = fm.match(/^tags:\s*\n((?:[ \t]+-[^\n]*\n?)*)/m);
  if (tagsBlock) {
    const tagRe = /[ \t]+-\s*(.+)/g;
    let tagMatch;
    while ((tagMatch = tagRe.exec(tagsBlock[1])) !== null) tags.push(tagMatch[1].trim());
  }
  const aiNote = readFrontmatterLine(fm, "AI[ \\t]?\u5907\u6CE8");
  const personalNote = readFrontmatterLine(fm, "\u4E2A\u4EBA\u5907\u6CE8");
  const deadlineRaw = readFrontmatterLine(fm, "(?:t-deadline|\u622A\u6B62\u65E5\u671F)").replace(/^["'](.*)["']$/, "$1");
  const priority = readFrontmatterLine(fm, "(?:priority|\u4F18\u5148\u7EA7)");
  return { tags, aiNote, personalNote, deadline: /\d/.test(deadlineRaw) ? deadlineRaw : "", priority };
}
function parseDidaLogHeading(input) {
  const trimmed = input.trim() || "## \u6BCF\u65E5\u8BB0\u5F55";
  const match = trimmed.match(/^(#{1,3})\s+(.+)$/);
  if (!match) return { level: 2, title: trimmed };
  return { level: match[1].length, title: match[2].trim() || "\u6BCF\u65E5\u8BB0\u5F55" };
}
function renderDidaLogTemplate(template, date) {
  const weekId = formatWeekId(date);
  const dateKey = formatDateOnly(date);
  return template.replace(/\{weekId\}/g, weekId).replace(/\{date\}/g, dateKey).replace(/\{dailyDate\}/g, formatDailyDate(date)).replace(/\{dateHeading\}/g, formatWeeklyLogHeading(date)).replace(/\{year\}/g, String(date.getFullYear())).replace(/\{month\}/g, pad(date.getMonth() + 1)).replace(/\{day\}/g, pad(date.getDate()));
}
function findHeadingIndex(lines, level, title, start = 0, end = lines.length) {
  const headingRe = new RegExp(`^#{${level}}\\s+${escapeRegExp(title)}\\s*$`);
  for (let i = start; i < end; i++) {
    if (headingRe.test(lines[i])) return i;
  }
  return -1;
}
function findSectionEnd(lines, headingIndex, level, limit = lines.length) {
  for (let i = headingIndex + 1; i < limit; i++) {
    const match = lines[i].match(/^(#{1,6})\s+/);
    if (match && match[1].length <= level) return i;
  }
  return limit;
}
function ensureHeading(lines, level, title) {
  let index = findHeadingIndex(lines, level, title);
  if (index !== -1) return index;
  if (lines.length > 0 && lines[lines.length - 1].trim() !== "") lines.push("");
  lines.push(`${"#".repeat(level)} ${title}`, "");
  index = lines.length - 2;
  return index;
}
function insertLinesAtSectionEnd(lines, sectionEnd, newLines) {
  const prefixBlank = lines[sectionEnd - 1]?.trim() === "" ? [] : [""];
  lines.splice(sectionEnd, 0, ...prefixBlank, ...newLines, "");
}
function insertCompletedLines(content, date, linesToAdd, headingSetting) {
  const newLines = linesToAdd.filter((line) => !content.includes(line.match(/<!--\s*(?:dida|action|daily):[^>]+-->/)?.[0] ?? line));
  if (newLines.length === 0) return { content, added: 0 };
  const lines = content.split("\n");
  const target = parseDidaLogHeading(renderDidaLogTemplate(headingSetting, date));
  const targetIndex = ensureHeading(lines, target.level, target.title);
  const targetEnd = findSectionEnd(lines, targetIndex, target.level);
  if (target.level >= 3) {
    insertLinesAtSectionEnd(lines, targetEnd, newLines);
    return { content: lines.join("\n"), added: newLines.length };
  }
  const dayLevel = target.level + 1;
  const dayHeading = formatWeeklyLogHeading(date);
  let dayIndex = findHeadingIndex(lines, dayLevel, dayHeading, targetIndex + 1, targetEnd);
  if (dayIndex === -1) {
    const prefixBlank = lines[targetEnd - 1]?.trim() === "" ? [] : [""];
    lines.splice(targetEnd, 0, ...prefixBlank, `${"#".repeat(dayLevel)} ${dayHeading}`, ...newLines, "");
    return { content: lines.join("\n"), added: newLines.length };
  }
  const dayEnd = findSectionEnd(lines, dayIndex, dayLevel, targetEnd);
  insertLinesAtSectionEnd(lines, dayEnd, newLines);
  return { content: lines.join("\n"), added: newLines.length };
}
function formatDeadline(dateStr) {
  const m = dateStr.match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (!m) return { text: dateStr, cls: "act-deadline-normal" };
  const target = new Date(parseInt(m[1]), parseInt(m[2]) - 1, parseInt(m[3]));
  target.setHours(0, 0, 0, 0);
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((target.getTime() - today.getTime()) / 864e5);
  if (diff < 0) return { text: "\u5DF2\u8FC7\u671F", cls: "act-deadline-overdue" };
  if (diff === 0) return { text: "\u4ECA\u5929\u622A\u6B62", cls: "act-deadline-today" };
  if (diff <= 3) return { text: `\u5269 ${diff} \u5929`, cls: "act-deadline-urgent" };
  if (diff <= 7) return { text: `\u5269 ${diff} \u5929`, cls: "act-deadline-soon" };
  return { text: `${target.getMonth() + 1}\u6708${target.getDate()}\u65E5`, cls: "act-deadline-normal" };
}
function parseDeadlineDate(dateStr) {
  const m = dateStr.match(/(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (!m) return null;
  const target = new Date(parseInt(m[1]), parseInt(m[2]) - 1, parseInt(m[3]));
  target.setHours(0, 0, 0, 0);
  return target;
}
function countOpenTasks(tasks) {
  return tasks.filter((task) => !task.done).length;
}
function detectSkillCli(template) {
  return /(^|\s)claude(\s|$)/.test(template) ? { bin: "claude", label: "Claude Code" } : { bin: "codex", label: "Codex" };
}
function describeTerminalPluginFailure(reason) {
  if (reason === "no-command-api") return "\u65E0\u6CD5\u8C03\u7528 Terminal \u63D2\u4EF6\u547D\u4EE4\uFF0C\u8BF7\u786E\u8BA4 Terminal \u63D2\u4EF6\u5DF2\u542F\u7528\u3002";
  if (reason === "terminal-not-opened") {
    return "Terminal \u63D2\u4EF6\u6CA1\u6709\u6253\u5F00\u65B0\u7EC8\u7AEF\u3002\u8BF7\u68C0\u67E5\u8BE5\u63D2\u4EF6\u8BBE\u7F6E\u4E2D\u300CAdd to command\u300D\u662F\u5426\u5F00\u542F\u3002";
  }
  if (getRuntimePlatform() === "win32") {
    return "\u7EC8\u7AEF\u5DF2\u6253\u5F00\u4F46\u672A\u80FD\u5C31\u7EEA\u3002Windows \u4E0A\u901A\u5E38\u662F Terminal \u63D2\u4EF6\u4F9D\u8D56\u7684 Python \u627E\u4E0D\u5230\uFF08\u8868\u73B0\u4E3A\u300C\u7EC8\u7AEF\u7F29\u653E\u5668\u610F\u5916\u9000\u51FA\uFF1A9009\u300D\uFF09\u3002\u6700\u5FEB\u7684\u89E3\u51B3\u529E\u6CD5\uFF1A\u628A\u4E0A\u65B9\u300C\u7EC8\u7AEF\u6A21\u5F0F\u300D\u6539\u4E3A\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D\uFF0C\u8BE5\u6A21\u5F0F\u4E0D\u9700\u8981 Python\u3002";
  }
  return "\u7EC8\u7AEF\u5DF2\u6253\u5F00\u4F46\u672A\u80FD\u5C31\u7EEA\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF0C\u6216\u6539\u7528\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D\u6A21\u5F0F\u3002";
}
function getNodeRequire() {
  try {
    const globalRequire = globalThis.require;
    return globalRequire ?? eval("require");
  } catch {
    return null;
  }
}
function getNodeChildProcess() {
  const req = getNodeRequire();
  if (!req) return null;
  try {
    return req("child_process");
  } catch {
    return null;
  }
}
var SyncPreviewModal = class extends import_obsidian.Modal {
  constructor(app, candidates, onConfirm, onOpenSource) {
    super(app);
    this.candidates = candidates;
    this.selected = new Set(candidates.map((_, i) => i));
    this.onConfirm = onConfirm;
    this.onOpenSource = onOpenSource;
  }
  onOpen() {
    this.modalEl.addClass("act-sync-modal");
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("act-modal");
    contentEl.createEl("h2", { text: `\u5F85\u540C\u6B65 ${this.candidates.length} \u6761\u5B8C\u6210\u8BB0\u5F55` });
    const targets = [...new Set(this.candidates.map((c) => c.targetPath))];
    contentEl.createDiv({
      cls: "act-modal-helper",
      text: targets.length === 1 ? `\u5C06\u5199\u5165\uFF1A${targets[0]}` : `\u5C06\u5199\u5165 ${targets.length} \u4E2A\u8D26\u672C\u6587\u4EF6\uFF1A${targets.join("\u3001")}`
    });
    const toolbar = contentEl.createDiv({ cls: "act-sync-toolbar" });
    const selectAll = toolbar.createEl("button", { text: "\u5168\u9009", cls: "act-sync-btn", attr: { type: "button" } });
    const selectNone = toolbar.createEl("button", { text: "\u5168\u4E0D\u9009", cls: "act-sync-btn", attr: { type: "button" } });
    const listEl = contentEl.createDiv({ cls: "act-sync-list" });
    const rowChecks = [];
    const groups = /* @__PURE__ */ new Map();
    this.candidates.forEach((c, i) => {
      const bucket = groups.get(c.source) ?? [];
      bucket.push(i);
      groups.set(c.source, bucket);
    });
    for (const [source, indexes] of groups) {
      const groupEl = listEl.createDiv({ cls: "act-sync-group" });
      groupEl.createDiv({ cls: "act-sync-group-title", text: `${source}  \xB7  ${indexes.length} \u6761` });
      indexes.sort((a, b) => this.candidates[a].dateKey.localeCompare(this.candidates[b].dateKey));
      for (const i of indexes) {
        const candidate = this.candidates[i];
        const row = groupEl.createDiv({ cls: "act-sync-row" });
        const check = row.createEl("input", { type: "checkbox", cls: "act-sync-check" });
        check.checked = true;
        check.addEventListener("change", () => {
          if (check.checked) this.selected.add(i);
          else this.selected.delete(i);
          this.updateConfirmLabel();
        });
        rowChecks.push(check);
        const main = row.createDiv({ cls: "act-sync-row-main" });
        main.createDiv({ text: candidate.text, cls: "act-sync-row-text" });
        const meta = main.createDiv({ cls: "act-sync-row-meta" });
        meta.createSpan({ text: candidate.dateKey, cls: "act-sync-row-date" });
        if (candidate.fromPath) {
          const link = meta.createEl("a", { text: candidate.fromLabel, cls: "act-sync-row-from", href: "#" });
          link.addEventListener("click", (e) => {
            e.preventDefault();
            void this.onOpenSource(candidate.fromPath);
          });
        } else {
          meta.createSpan({ text: candidate.fromLabel, cls: "act-sync-row-from is-external" });
        }
      }
    }
    const setAll = (value) => {
      this.selected = value ? new Set(this.candidates.map((_, i) => i)) : /* @__PURE__ */ new Set();
      for (const check of rowChecks) check.checked = value;
      this.updateConfirmLabel();
    };
    selectAll.addEventListener("click", () => setAll(true));
    selectNone.addEventListener("click", () => setAll(false));
    const footer = contentEl.createDiv({ cls: "act-sync-footer" });
    this.confirmBtn = footer.createEl("button", { cls: "act-sync-confirm mod-cta", attr: { type: "button" } });
    this.updateConfirmLabel();
    this.confirmBtn.addEventListener("click", async () => {
      const chosen = this.candidates.filter((_, i) => this.selected.has(i));
      this.close();
      await this.onConfirm(chosen);
    });
    const cancelBtn = footer.createEl("button", { text: "\u53D6\u6D88", cls: "act-sync-btn", attr: { type: "button" } });
    cancelBtn.addEventListener("click", () => this.close());
  }
  updateConfirmLabel() {
    const count = this.selected.size;
    this.confirmBtn.setText(count > 0 ? `\u5199\u5165 ${count} \u6761` : "\u672A\u9009\u62E9\u4EFB\u4F55\u6761\u76EE");
    this.confirmBtn.disabled = count === 0;
  }
  onClose() {
    this.contentEl.empty();
  }
};
var NotePromptModal = class extends import_obsidian.Modal {
  constructor(app, title, titlePlaceholder, bodyPlaceholder, draft, onDraftChange, onDraftClear, onSubmit, options = {}) {
    super(app);
    this.draftSaveTimer = null;
    this.submitted = false;
    this.titleText = title;
    this.titlePlaceholder = titlePlaceholder;
    this.bodyPlaceholder = bodyPlaceholder;
    this.draft = draft;
    this.options = options;
    this.onDraftChange = onDraftChange;
    this.onDraftClear = onDraftClear;
    this.onSubmit = onSubmit;
  }
  onOpen() {
    this.modalEl.addClass("act-note-modal");
    this.contentEl.empty();
    this.contentEl.addClass("act-modal");
    this.contentEl.createEl("h2", { text: this.titleText });
    this.titleInputEl = this.contentEl.createEl("input", { type: "text", placeholder: this.titlePlaceholder, cls: "act-input" });
    this.bodyInputEl = this.contentEl.createEl("textarea", { placeholder: this.bodyPlaceholder, cls: "act-input act-textarea" });
    this.titleInputEl.value = this.draft.title;
    this.bodyInputEl.value = this.draft.body;
    this.titleInputEl.addEventListener("input", () => this.scheduleDraftSave());
    this.bodyInputEl.addEventListener("input", () => this.scheduleDraftSave());
    if (this.options.helperText) {
      this.contentEl.createDiv({ cls: "act-modal-helper", text: this.options.helperText });
    }
    if (this.options.dueDateLabel || this.options.dueTimeLabel || this.options.priorityLabel) {
      const row = this.contentEl.createDiv({ cls: "act-modal-field-row" });
      if (this.options.dueDateLabel) {
        const field = row.createDiv({ cls: "act-modal-field" });
        field.createEl("label", { text: this.options.dueDateLabel });
        this.dueDateInputEl = field.createEl("input", { type: "date", cls: "act-input" });
        this.dueDateInputEl.value = this.draft.dueDate ?? this.options.defaultDueDate ?? "";
        this.dueDateInputEl.addEventListener("input", () => this.scheduleDraftSave());
        this.renderDueDateQuickActions(field);
      }
      if (this.options.dueTimeLabel) {
        const field = row.createDiv({ cls: "act-modal-field" });
        field.createEl("label", { text: this.options.dueTimeLabel });
        this.dueTimeInputEl = field.createEl("input", { type: "time", cls: "act-input" });
        this.dueTimeInputEl.value = this.draft.dueTime ?? "";
        this.dueTimeInputEl.addEventListener("input", () => this.scheduleDraftSave());
      }
      if (this.options.priorityLabel) {
        const field = row.createDiv({ cls: "act-modal-field" });
        field.createEl("label", { text: this.options.priorityLabel });
        this.prioritySelectEl = field.createEl("select", { cls: "act-input" });
        [
          { value: "0", label: "\u65E0\u4F18\u5148\u7EA7" },
          { value: "1", label: "\u4F4E\u4F18\u5148\u7EA7" },
          { value: "3", label: "\u4E2D\u4F18\u5148\u7EA7" },
          { value: "5", label: "\u9AD8\u4F18\u5148\u7EA7" }
        ].forEach((option) => {
          this.prioritySelectEl?.createEl("option", { value: option.value, text: option.label });
        });
        this.prioritySelectEl.value = this.draft.priority ?? this.options.defaultPriority ?? "0";
        this.prioritySelectEl.addEventListener("change", () => this.scheduleDraftSave());
      }
    }
    this.titleInputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.isComposing) {
        event.preventDefault();
        this.bodyInputEl.focus();
      }
      if (event.key === "Escape") this.close();
    });
    this.bodyInputEl.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") void this.submit();
      if (event.key === "Escape") this.close();
    });
    const actions = this.contentEl.createDiv({ cls: "act-modal-actions" });
    new import_obsidian.ButtonComponent(actions).setButtonText("\u53D6\u6D88").onClick(() => this.close());
    new import_obsidian.ButtonComponent(actions).setButtonText("\u786E\u5B9A").setCta().onClick(() => void this.submit());
    this.titleInputEl.focus();
  }
  renderDueDateQuickActions(container) {
    const quick = container.createDiv({ cls: "act-due-quick" });
    const today = /* @__PURE__ */ new Date();
    const options = [
      { label: "\u4ECA\u65E5", date: today },
      { label: "\u660E\u5929", date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) },
      { label: "\u4E0B\u5468\u4E00", date: getNextMonday(today) }
    ];
    for (const option of options) {
      const button = quick.createEl("button", { text: option.label, attr: { type: "button" } });
      button.addEventListener("click", () => {
        if (!this.dueDateInputEl) return;
        this.dueDateInputEl.value = formatDateOnly(option.date);
        this.scheduleDraftSave();
      });
    }
    const clear = quick.createEl("button", { text: "\u6E05\u7A7A", cls: "is-clear", attr: { type: "button" } });
    clear.addEventListener("click", () => {
      if (this.dueDateInputEl) this.dueDateInputEl.value = "";
      if (this.dueTimeInputEl) this.dueTimeInputEl.value = "";
      this.scheduleDraftSave();
    });
  }
  onClose() {
    if (this.draftSaveTimer !== null) {
      window.clearTimeout(this.draftSaveTimer);
      this.draftSaveTimer = null;
    }
    if (!this.submitted && this.titleInputEl && this.bodyInputEl) void this.saveDraftNow();
  }
  currentValue() {
    return {
      title: this.titleInputEl.value,
      body: this.bodyInputEl.value,
      dueDate: this.dueDateInputEl?.value,
      dueTime: this.dueTimeInputEl?.value,
      priority: this.prioritySelectEl?.value
    };
  }
  scheduleDraftSave() {
    if (this.draftSaveTimer !== null) window.clearTimeout(this.draftSaveTimer);
    this.draftSaveTimer = window.setTimeout(() => {
      this.draftSaveTimer = null;
      void this.saveDraftNow();
    }, 350);
  }
  async saveDraftNow() {
    await this.onDraftChange(this.currentValue());
  }
  async submit() {
    const title = this.titleInputEl.value.trim();
    const body = this.bodyInputEl.value.trim();
    if (!title) {
      new import_obsidian.Notice("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    try {
      await this.onSubmit({
        ...this.currentValue(),
        title,
        body
      });
      this.submitted = true;
      await this.onDraftClear();
      this.close();
    } catch (error) {
      console.error("Failed to save note prompt", error);
      new import_obsidian.Notice("\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u5F00\u53D1\u8005\u63A7\u5236\u53F0");
    }
  }
};
var ActWorkspaceView = class _ActWorkspaceView extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.activeTab = "focus";
    this.selectedProgressTaskPath = "";
    this.focusActionFolder = "focus";
    this.didaUnscheduledExpanded = false;
    this.renderTimer = null;
    this.isRendering = false;
    this.renderQueued = false;
    this.didaActiveCache = null;
    this.refreshIntervalId = null;
    this.plugin = plugin;
  }
  get progressDrafts() {
    return this.plugin.settings.progressDrafts;
  }
  get F() {
    return this.plugin.settings.folders;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "ACT \u5DE5\u4F5C\u53F0";
  }
  getIcon() {
    return "layout-dashboard";
  }
  async onOpen() {
    this.renderStartupPlaceholder();
    this.requestRender(STARTUP_RENDER_DELAY_MS);
    this.startRefreshInterval();
    this.registerEvent(this.app.vault.on("modify", (file) => {
      if (file instanceof import_obsidian.TFile && this.isWatchedPath(file.path)) this.requestRender();
    }));
    this.registerEvent(this.app.vault.on("create", (file) => {
      if (this.isWatchedPath(file.path)) this.requestRender();
    }));
    this.registerEvent(this.app.vault.on("delete", (file) => {
      if (this.isWatchedPath(file.path)) this.requestRender();
    }));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      if (this.isWatchedPath(file.path) || this.isWatchedPath(oldPath)) this.requestRender();
    }));
  }
  async onClose() {
    if (this.renderTimer !== null) {
      window.clearTimeout(this.renderTimer);
      this.renderTimer = null;
    }
    this.stopRefreshInterval();
  }
  startRefreshInterval() {
    this.stopRefreshInterval();
    const seconds = this.plugin.settings.refreshInterval;
    if (seconds <= 0) return;
    this.refreshIntervalId = window.setInterval(() => {
      const active = document.activeElement;
      if (active instanceof HTMLElement && this.containerEl.contains(active) && (active instanceof HTMLTextAreaElement || active instanceof HTMLInputElement)) return;
      void this.render();
    }, seconds * 1e3);
  }
  stopRefreshInterval() {
    if (this.refreshIntervalId !== null) {
      window.clearInterval(this.refreshIntervalId);
      this.refreshIntervalId = null;
    }
  }
  isDailyLedger() {
    return this.plugin.isDailyLogTheLedger();
  }
  isCycleNotePath(path) {
    return isUnderFolder(path, this.F.cycle);
  }
  // 工作台展示的所有数据源都要触发重渲染，否则在编辑器里勾一个复选框，面板不会更新
  isWatchedPath(path) {
    if (path === this.plugin.resolveCompletedLogPath(/* @__PURE__ */ new Date())) return true;
    return [this.F.cycle, this.F.weekly, this.F.daily, this.F.focusAction, this.F.activeAction, this.F.maybeAction, this.F.thought].some((folder) => isUnderFolder(path, folder));
  }
  requestRender(delay = RENDER_DEBOUNCE_MS) {
    if (this.renderTimer !== null) window.clearTimeout(this.renderTimer);
    this.renderTimer = window.setTimeout(() => {
      this.renderTimer = null;
      void this.render();
    }, delay);
  }
  renderStartupPlaceholder() {
    const container = this.containerEl.children[1];
    container.empty();
    container.addClass("act-root");
    const quotes = [
      "\u770B\u6E05\u5168\u5C40\uFF0C\u63A8\u8FDB\u4E00\u6B65\u3002",
      "\u884C\u52A8 \xB7 \u77E5\u8BC6 \xB7 \u65B9\u5411\uFF0C\u6B63\u5728\u5C31\u4F4D...",
      "\u4ECA\u5929\uFF0C\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002",
      "\u5C11\u5373\u662F\u591A\uFF0C\u5B8C\u6210\u5373\u5F00\u59CB\u3002"
    ];
    const now = /* @__PURE__ */ new Date();
    const weekday = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][now.getDay()];
    const dateStr = `${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())}`;
    const weekId = formatWeekId(now);
    const wrap = container.createDiv({ cls: "act-startup" });
    const brand = wrap.createDiv({ cls: "act-startup-brand" });
    brand.createSpan({ text: "A", cls: "act-startup-letter" });
    brand.createSpan({ text: "C", cls: "act-startup-letter" });
    brand.createSpan({ text: "T", cls: "act-startup-letter" });
    wrap.createDiv({ text: "\u5DE5\u4F5C\u53F0", cls: "act-startup-label" });
    const meta = wrap.createDiv({ cls: "act-startup-meta" });
    meta.createSpan({ text: `${dateStr}  \u661F\u671F${weekday}` });
    meta.createSpan({ text: "\xB7", cls: "act-startup-dot" });
    meta.createSpan({ text: weekId });
    wrap.createDiv({ text: quotes[Math.floor(Math.random() * quotes.length)], cls: "act-startup-quote" });
    const bar = wrap.createDiv({ cls: "act-startup-bar" });
    bar.createDiv({ cls: "act-startup-bar-fill" });
  }
  async render() {
    if (this.isRendering) {
      this.renderQueued = true;
      return;
    }
    this.isRendering = true;
    try {
      const container = this.containerEl.children[1];
      container.empty();
      container.addClass("act-root");
      this.renderOverview(container);
      this.renderMainTabs(container);
      const body = container.createDiv({ cls: "act-tab-body" });
      if (this.activeTab === "focus") await this.renderFocusTab(body);
      if (this.activeTab === "action") await this.renderActionTab(body);
      if (this.activeTab === "card") await this.renderCardTab(body);
      if (this.activeTab === "time") await this.renderTimeTab(body);
    } finally {
      this.isRendering = false;
      if (this.renderQueued) {
        this.renderQueued = false;
        this.requestRender();
      }
    }
  }
  renderOverview(container) {
    const card = container.createDiv({ cls: "act-overview" });
    const toolbar = card.createDiv({ cls: "act-ov-toolbar" });
    const header = toolbar.createDiv({ cls: "act-ov-skill-header" });
    header.createSpan({ text: "\u5E38\u7528\u6280\u80FD", cls: "act-ov-skill-title" });
    header.createSpan({ text: "\u4E00\u952E\u5524\u8D77 AI Agent\uFF0C\u8BA9\u7B14\u8BB0\u81EA\u5DF1\u601D\u8003", cls: "act-ov-skill-desc" });
    const skills = toolbar.createDiv({ cls: "act-ov-skills" });
    const skillItems = this.plugin.settings.skillItems.length > 0 ? this.plugin.settings.skillItems : QUICK_SKILLS;
    for (const item of skillItems) {
      const chip = skills.createEl("button", {
        text: item.label,
        cls: "act-ov-skill",
        attr: { title: `\u8FD0\u884C Skill\uFF1A${item.skill}` }
      });
      chip.addEventListener("click", () => this.plugin.openSkillInTerminal(item.skill));
    }
  }
  renderMainTabs(container) {
    const tabs = container.createDiv({ cls: "act-tabs" });
    this.tabButton(tabs, "focus", "\u{1F3AF}", "Today", "\u805A\u7126");
    this.tabButton(tabs, "action", "\u26A1", "Action", "\u884C\u52A8");
    this.tabButton(tabs, "card", "\u{1F48E}", "Card", "\u77E5\u8BC6");
    this.tabButton(tabs, "time", "\u{1F9ED}", "Time", "\u65B9\u5411");
  }
  tabButton(container, mode, icon, en, zh) {
    const button = container.createEl("button", { cls: `act-tab ${this.activeTab === mode ? "is-active" : ""}` });
    button.createSpan({ text: icon, cls: "act-tab-icon" });
    button.createSpan({ text: `${en} \xB7 ${zh}`, cls: "act-tab-label" });
    button.addEventListener("click", () => this.setTab(mode));
  }
  async setTab(mode) {
    this.activeTab = mode;
    await this.render();
  }
  async renderFocusTab(container) {
    const grid = container.createDiv({ cls: "act-panel-grid" });
    const main = grid.createDiv({ cls: "act-panel-main" });
    const side = grid.createDiv({ cls: "act-panel-side" });
    await this.renderFocusActions(main);
    await this.renderFixedSchedule(main);
    await this.renderTodayCompleted(side);
    await this.renderRecentThoughts(side);
  }
  async renderFocusActions(container) {
    const tabs = [
      { id: "focus", label: "\u805A\u7126\u627F\u8BFA", folder: this.F.focusAction },
      { id: "active", label: "\u6D3B\u8DC3\u8DDF\u8FDB", folder: this.F.activeAction },
      { id: "maybe", label: "\u5C06\u6765\u4E5F\u8BB8", folder: this.F.maybeAction }
    ];
    const current = tabs.find((t) => t.id === this.focusActionFolder) ?? tabs[0];
    const section = container.createDiv({ cls: "act-section" });
    section.setAttribute("data-label", "\u4EFB\u52A1\u6E05\u5355 \xB7 \u4ECA\u65E5");
    const tabBar = section.createDiv({ cls: "act-section-tabs" });
    for (const tab of tabs) {
      const btn = tabBar.createEl("button", { text: tab.label, cls: `act-section-tab ${tab.id === this.focusActionFolder ? "is-active" : ""}`, attr: { type: "button" } });
      btn.addEventListener("click", () => {
        this.focusActionFolder = tab.id;
        this.render();
      });
    }
    const infoTrigger = tabBar.createDiv({ cls: "act-info-trigger" });
    const infoIcon = infoTrigger.createSpan({ cls: "act-info-icon" });
    (0, import_obsidian.setIcon)(infoIcon, "info");
    const popup = infoTrigger.createDiv({ cls: "act-info-popup" });
    popup.createDiv({ text: "\u6570\u636E\u6765\u6E90", cls: "act-info-heading" });
    popup.createDiv({ text: current.folder, cls: "act-info-text" });
    popup.createDiv({ text: "\u663E\u793A\u89C4\u5219", cls: "act-info-heading" });
    popup.createDiv({ text: "\u4EC5\u663E\u793A\u5E26 #a-\u4EFB\u52A1\u7B14\u8BB0 \u6807\u7B7E\u7684\u7B14\u8BB0\u3002\u884C\u52A8\u9879\u8BFB\u53D6 ## \u4E0B\u6B65\u884C\u52A8 \u533A\u5757\u4E2D\u5E26 ! \u6216 \uFF01 \u6807\u8BB0\u7684\u672A\u5B8C\u6210\u5185\u5BB9\uFF1B\u5DF2\u5B8C\u6210\u884C\u52A8\u9879\u4E0D\u5728\u6B64\u5904\u663E\u793A\uFF0C\u4F1A\u8FDB\u5165\u300C\u4ECA\u65E5\u5DF2\u5B8C\u6210\u300D\u3002! / \uFF01 = \u4E00\u822C\uFF0C!! / \uFF01\uFF01 = \u91CD\u8981\uFF0C!!! / \uFF01\uFF01\uFF01 = \u6700\u4F18\u5148\u3002", cls: "act-info-text" });
    popup.createDiv({ text: "\u65B0\u5EFA\u89C4\u5219", cls: "act-info-heading" });
    popup.createDiv({ text: "\u70B9\u51FB + \u6309\u94AE\u65B0\u5EFA\u4EFB\u52A1\u7B14\u8BB0\uFF0C\u81EA\u52A8\u4FDD\u5B58\u5230\u5F53\u524D\u6240\u9009\u6587\u4EF6\u5939\u3002\u7B14\u8BB0\u81EA\u5E26 #a-\u4EFB\u52A1\u7B14\u8BB0 \u6807\u7B7E\u548C\u6807\u51C6\u6A21\u677F\uFF08\u4E0B\u6B65\u884C\u52A8 / \u8FDB\u5C55\u8BB0\u5F55 / \u80CC\u666F\u76EE\u6807\uFF09\u3002", cls: "act-info-text" });
    const addBtn = tabBar.createEl("button", { text: "+", cls: "act-section-tab act-section-tab-add", attr: { type: "button" } });
    addBtn.addEventListener("click", () => this.createFocusTaskNote(current));
    const folder = this.app.vault.getAbstractFileByPath(current.folder);
    if (!(folder instanceof import_obsidian.TFolder)) {
      this.empty(section, "\u6587\u4EF6\u5939\u4E0D\u5B58\u5728");
      return;
    }
    const todayStr = formatDateOnly(/* @__PURE__ */ new Date());
    let noteCount = 0;
    const allFiles = [];
    const collectFiles = (f) => {
      for (const child of f.children) {
        if (child instanceof import_obsidian.TFile && child.extension === "md") allFiles.push(child);
        else if (child instanceof import_obsidian.TFolder) collectFiles(child);
      }
    };
    collectFiles(folder);
    for (const child of allFiles) {
      const content = await this.app.vault.cachedRead(child);
      const { tags, deadline } = parseFrontmatterAction(content);
      if (!tags.includes("a-\u4EFB\u52A1\u7B14\u8BB0")) continue;
      const markedItems = parseMarkedActions(content);
      const pendingItems = markedItems.filter((item) => !item.done);
      const todayDoneItems = markedItems.filter((item) => item.done && item.doneDate === todayStr);
      const allDone = pendingItems.length === 0;
      if (this.plugin.settings.hideCompletedNotes && pendingItems.length === 0 && todayDoneItems.length === 0) continue;
      noteCount++;
      const group = section.createDiv({ cls: `act-focus-action-group ${allDone ? "is-all-done" : ""}` });
      const head = group.createDiv({ cls: "act-focus-action-head" });
      const titleLink = head.createEl("a", { text: child.basename, cls: "act-focus-action-title", href: "#" });
      titleLink.addEventListener("click", (e) => {
        e.preventDefault();
        this.plugin.openPath(child.path);
      });
      if (allDone) {
        head.createSpan({ text: "\u2713 \u5168\u90E8\u5B8C\u6210", cls: "act-focus-action-all-done" });
      }
      if (deadline) {
        const dl = formatDeadline(deadline);
        head.createSpan({ text: dl.text, cls: "act-focus-action-deadline" });
      }
      for (const item of pendingItems) {
        const row = group.createDiv({ cls: "act-focus-action-item" });
        const check = row.createDiv({ cls: "act-focus-action-check", attr: { role: "button", "aria-label": "\u5B8C\u6210\u884C\u52A8\u9879", title: "\u5B8C\u6210\u884C\u52A8\u9879" } });
        check.createDiv();
        check.addEventListener("click", async (event) => {
          event.preventDefault();
          event.stopPropagation();
          await this.plugin.completeTaskActionItem(child.path, item.lineIndex);
          await this.render();
        });
        row.createSpan({ text: item.text, cls: "act-focus-action-text" });
        if (item.priority >= 3) row.createSpan({ text: "!!!", cls: "act-focus-action-priority is-p1" });
        else if (item.priority >= 2) row.createSpan({ text: "!!", cls: "act-focus-action-priority is-p2" });
      }
      for (const item of todayDoneItems) {
        const row = group.createDiv({ cls: "act-focus-action-item is-done" });
        const check = row.createDiv({ cls: "act-focus-action-check" });
        check.createDiv();
        row.createSpan({ text: item.text, cls: "act-focus-action-text" });
        row.createSpan({ text: `\u2713 ${item.doneDate}`, cls: "act-focus-action-done-date" });
      }
    }
    if (noteCount === 0) {
      this.empty(section, "\u5F53\u524D\u6587\u4EF6\u5939\u6682\u65E0\u672A\u5B8C\u6210\u884C\u52A8\u9879");
    }
  }
  async renderTodayCompleted(container) {
    const section = this.section(container, "\u4ECA\u65E5\u5DF2\u5B8C\u6210", "\u805A\u7126 \xB7 \u5B8C\u6210");
    const today = /* @__PURE__ */ new Date();
    const todayStr = formatDateOnly(today);
    const ledgerPath = this.plugin.resolveCompletedLogPath(today);
    const btnGroup = section.createDiv({ cls: "act-action-btn-group" });
    const openBtn = btnGroup.createEl("button", { text: "\u6253\u5F00\u8D26\u672C", cls: "act-small-action", attr: { type: "button" } });
    openBtn.addEventListener("click", async () => {
      await this.plugin.ensureCompletedLogFileForDate(today);
      await this.plugin.openPath(ledgerPath);
    });
    const syncBtn = btnGroup.createEl("button", { text: "\u4EFB\u52A1\u66F4\u65B0", cls: "act-small-action is-sync-accent", attr: { type: "button" } });
    syncBtn.addEventListener("click", async () => {
      syncBtn.disabled = true;
      try {
        this.invalidateDidaActiveCache();
        await this.plugin.reviewAndCommitCandidates(await this.plugin.collectPendingCandidates(), () => this.render());
      } catch (error) {
        console.error("\u4EFB\u52A1\u66F4\u65B0\u5931\u8D25", error);
        new import_obsidian.Notice(`\u540C\u6B65\u5931\u8D25\uFF1A${error instanceof Error ? error.message : String(error)}`);
      } finally {
        syncBtn.disabled = false;
      }
    });
    const sources = ["\u884C\u52A8\u6587\u4EF6\u5939\u52FE\u9009", this.plugin.settings.dida.enabled ? "\u6EF4\u7B54\u6E05\u5355\u5B8C\u6210" : null, this.isDailyLedger() ? null : "\u65E5\u5FD7\u5185\u52FE\u9009"].filter((s) => s !== null).join(" / ");
    this.sectionInfo(section, {
      source: ledgerPath,
      rule: `\u53EA\u8BFB\u5B8C\u6210\u8D26\u672C\uFF08${this.plugin.describeCompletedLogTarget()}\uFF09\uFF0C\u6C47\u805A\u4F4D\u7F6E\u53EF\u5728\u8BBE\u7F6E \u2192 \u884C\u52A8 \u2192 \u5B8C\u6210\u8BB0\u5F55\u4E2D\u4FEE\u6539\u3002\u6765\u6E90\uFF1A${sources}\uFF0C\u70B9\u300C\u4EFB\u52A1\u66F4\u65B0\u300D\u6C47\u5165\uFF08\u52FE\u9009\u884C\u52A8\u9879\u65F6\u4F1A\u81EA\u52A8\u6C47\u5165\uFF09\u3002${this.isDailyLedger() ? "\u5F53\u524D\u8D26\u672C\u5C31\u662F\u65E5\u5FD7\u672C\u8EAB\uFF0C\u6545\u4E0D\u518D\u505A\u65E5\u5FD7\u63D0\u70BC\u3002" : ""}\u6765\u6E90\u6807\u7B7E\uFF1A\u6EF4\u7B54\u6E05\u5355\uFF1A\u2192 \u6EF4\u7B54\uFF1B\u805A\u7126/\u8DDF\u8FDB/\u4E5F\u8BB8\uFF1A\u2192 \u5BF9\u5E94\u884C\u52A8\u6765\u6E90\uFF1B\u65E5\u5FD7\uFF1A\u2192 \u65E5\u5FD7\uFF1B\u5176\u4ED6 \u2192 \u8BA1\u5212\u3002`
    });
    const completed = [];
    const ledgerFile = this.app.vault.getAbstractFileByPath(ledgerPath);
    if (ledgerFile instanceof import_obsidian.TFile) {
      const content = await this.app.vault.read(ledgerFile);
      const dateAgnostic = this.isDailyLedger();
      for (const line of content.split("\n")) {
        if (/^\s*-\s*\[x\]/i.test(line) && (dateAgnostic || line.includes(todayStr))) {
          let text = line.replace(/^\s*-\s*\[x\]\s*/i, "").replace(/<!--.*?-->/g, "").replace(/\s*✅\s*\d{4}-\d{2}-\d{2}/, "").trim();
          const isDida = text.startsWith("\u6EF4\u7B54\u6E05\u5355\uFF1A") || text.startsWith("\u6EF4\u7B54\u6E05\u5355:");
          const isDaily = /^日志[：:]/.test(text);
          const actionMatch = text.match(/^(聚焦|跟进|也许)[：:]/);
          if (isDida) {
            text = text.replace(/^滴答清单[：:]/, "").trim();
            completed.push({ text, source: "\u6EF4\u7B54" });
          } else if (isDaily) {
            text = text.replace(/^日志[：:]/, "").trim();
            completed.push({ text, source: "\u65E5\u5FD7" });
          } else if (actionMatch) {
            text = text.replace(/^(?:聚焦|跟进|也许)[：:]/, "").trim();
            completed.push({ text, source: actionMatch[1] });
          } else {
            completed.push({ text, source: "\u8BA1\u5212" });
          }
        }
      }
    }
    if (completed.length === 0) {
      this.empty(section, "\u4ECA\u5929\u8FD8\u6CA1\u6709\u5B8C\u6210\u8BB0\u5F55");
      return;
    }
    section.createDiv({ text: `\u4ECA\u65E5\u5B8C\u6210 ${completed.length} \u9879`, cls: "act-hint" });
    const sourceClsMap = { "\u6EF4\u7B54": "is-dida", "\u8BA1\u5212": "is-plan", "\u805A\u7126": "is-focus", "\u8DDF\u8FDB": "is-active", "\u4E5F\u8BB8": "is-maybe", "\u65E5\u5FD7": "is-daily" };
    for (const item of completed) {
      const row = section.createDiv({ cls: "act-completed-row" });
      row.createSpan({ text: "\u2713", cls: "act-completed-check" });
      row.createSpan({ text: item.text, cls: "act-completed-text" });
      row.createSpan({ text: item.source, cls: `act-completed-source ${sourceClsMap[item.source] ?? ""}` });
    }
  }
  async renderRecentThoughts(container) {
    const section = this.section(container, "\u6700\u8FD1\u95EA\u5FF5", "\u95EA\u5FF5 \xB7 \u6700\u8FD1");
    this.sectionInfo(section, {
      source: this.F.thought,
      rule: "\u5217\u51FA ACT \u95EA\u5FF5\u6587\u4EF6\u5939\u4E0B\u7684\u95EA\u5FF5\u7B14\u8BB0\u3002\u8FD9\u91CC\u53EA\u663E\u793A\u7B14\u8BB0\u5165\u53E3\uFF0C\u4E0D\u8BFB\u53D6\u6B63\u6587\u5185\u5BB9\uFF1B\u70B9\u51FB\u6761\u76EE\u4F1A\u6253\u5F00\u5BF9\u5E94\u7B14\u8BB0\u3002"
    });
    const dailyPath = `${this.F.daily}/${formatDailyDate(/* @__PURE__ */ new Date())}.md`;
    const btnGroup = section.createDiv({ cls: "act-action-btn-group" });
    const dailyBtn = btnGroup.createEl("button", { text: "\u4ECA\u65E5\u65E5\u5FD7", cls: "act-small-action", attr: { type: "button" } });
    dailyBtn.addEventListener("click", () => this.plugin.openOrCreateDaily(dailyPath));
    const thoughtBtn = btnGroup.createEl("button", { text: "\u8BB0\u5F55\u95EA\u5FF5", cls: "act-small-action", attr: { type: "button" } });
    thoughtBtn.addEventListener("click", () => this.plugin.openDailyCapture());
    const folder = this.app.vault.getAbstractFileByPath(this.F.thought);
    if (!(folder instanceof import_obsidian.TFolder)) {
      this.empty(section, "ACT \u95EA\u5FF5\u6587\u4EF6\u5939\u4E0D\u5B58\u5728");
      return;
    }
    const notes = folder.children.filter((child) => child instanceof import_obsidian.TFile && child.extension === "md").sort((a, b) => b.stat.mtime - a.stat.mtime);
    if (notes.length === 0) {
      this.empty(section, "\u8FD8\u6CA1\u6709\u95EA\u5FF5\u7B14\u8BB0");
      return;
    }
    section.createDiv({ text: `${notes.length} \u7BC7\u95EA\u5FF5\u7B14\u8BB0`, cls: "act-hint" });
    for (const file of notes) {
      const row = section.createDiv({ cls: "act-thought-row" });
      row.createDiv({
        text: new Date(file.stat.mtime).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
        cls: "act-thought-date"
      });
      row.createDiv({ text: file.basename, cls: "act-thought-preview" });
      row.addEventListener("click", () => this.plugin.openPath(file.path));
      row.addClass("is-clickable");
    }
  }
  static {
    this.ACTION_STATUSES = [
      { tag: "a-\u63A8\u8FDB\u4E2D", label: "\u63A8\u8FDB\u4E2D", css: "active" },
      { tag: "a-\u7B49\u5F85\u4E2D", label: "\u7B49\u5F85\u4E2D", css: "waiting" },
      { tag: "a-\u6682\u505C\u6401\u7F6E", label: "\u6682\u505C\u6401\u7F6E", css: "paused" },
      { tag: "a-\u5DF2\u5B8C\u6210", label: "\u5DF2\u5B8C\u6210", css: "done" }
    ];
  }
  getActionStatus(task) {
    for (const s of _ActWorkspaceView.ACTION_STATUSES) {
      if (task.tags.includes(s.tag)) return s.css;
    }
    return "none";
  }
  async setActionStatus(task, newTag) {
    const file = this.app.vault.getAbstractFileByPath(task.filePath);
    if (!(file instanceof import_obsidian.TFile)) return;
    const statusTags = _ActWorkspaceView.ACTION_STATUSES.map((s) => s.tag);
    await this.app.vault.process(file, (content) => {
      const fmMatch = content.match(/^(---\n)([\s\S]*?)(\n---)/);
      if (!fmMatch) return content;
      const before = fmMatch[1];
      let fm = fmMatch[2];
      const after = fmMatch[3];
      const rest = content.slice(fmMatch[0].length);
      const tagsBlock = fm.match(/^(tags:\s*\n)((?:[ \t]+-[^\n]*\n?)*)/m);
      if (!tagsBlock) {
        fm += `
tags:
  - ${newTag}
`;
        return before + fm + after + rest;
      }
      let tagLines = tagsBlock[2].split("\n").filter((l) => l.trim());
      tagLines = tagLines.filter((l) => {
        const t = l.replace(/^[ \t]+-\s*/, "").trim();
        return !statusTags.includes(t);
      });
      if (newTag) tagLines.push(`  - ${newTag}`);
      fm = fm.replace(tagsBlock[0], tagsBlock[1] + tagLines.join("\n") + (tagLines.length ? "\n" : ""));
      return before + fm + after + rest;
    });
    new import_obsidian.Notice(`\u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A ${newTag || "\u65E0"}`);
  }
  async renderActionTab(container) {
    const tasks = (await this.parseActionTasks()).sort((a, b) => {
      const folderOrder = a.folder.localeCompare(b.folder);
      if (folderOrder !== 0) return folderOrder;
      const aDate = parseDeadlineDate(a.deadline)?.getTime() ?? Number.MAX_SAFE_INTEGER;
      const bDate = parseDeadlineDate(b.deadline)?.getTime() ?? Number.MAX_SAFE_INTEGER;
      return aDate - bDate || a.title.localeCompare(b.title, "zh-CN");
    });
    if (!this.selectedProgressTaskPath || !tasks.some((task) => task.filePath === this.selectedProgressTaskPath)) {
      this.selectedProgressTaskPath = tasks[0]?.filePath ?? "";
    }
    const grid = container.createDiv({ cls: "act-panel-grid act-action-grid" });
    const list = grid.createDiv({ cls: "act-panel-side" });
    const detail = grid.createDiv({ cls: "act-panel-main" });
    this.renderActionTaskList(list, tasks);
    const selectedTask = tasks.find((task) => task.filePath === this.selectedProgressTaskPath);
    if (selectedTask) await this.renderProgressDetail(detail, selectedTask);
    else this.empty(detail, "\u5148\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1\u7B14\u8BB0");
  }
  renderActionTaskList(container, tasks) {
    const headerRow = container.createDiv({ cls: "act-action-list-header" });
    headerRow.createEl("h2", { text: "\u4EFB\u52A1\u5217\u8868", cls: "act-section-title" });
    const addBtn = headerRow.createEl("button", { cls: "act-action-add-btn", attr: { type: "button", "aria-label": "\u65B0\u5EFA\u4EFB\u52A1\u7B14\u8BB0" } });
    (0, import_obsidian.setIcon)(addBtn, "plus");
    addBtn.addEventListener("click", () => this.createActionTaskNote());
    this.sectionInfo(headerRow, {
      source: `${this.F.focusAction} \u4E0E ${this.F.activeAction} \u4E0B\u7684 Markdown \u6587\u4EF6`,
      rule: "\u4EC5\u663E\u793A tags \u5305\u542B a-\u4EFB\u52A1\u7B14\u8BB0 \u7684\u7B14\u8BB0\uFF0C\u8D44\u6599\u7B14\u8BB0\u4E0D\u4F1A\u51FA\u73B0\u3002\u6309\u6587\u4EF6\u5939\u5206\u7EC4\uFF08\u805A\u7126\u627F\u8BFA / \u6D3B\u8DC3\u8DDF\u8FDB\uFF09\uFF0C\u7EC4\u5185\u6309\u6267\u884C\u72B6\u6001\u6392\u5E8F\uFF1A\u63A8\u8FDB\u4E2D \u2192 \u7B49\u5F85\u4E2D \u2192 \u672A\u6807\u8BB0 \u2192 \u6682\u505C\u6401\u7F6E\u3002\u5DF2\u5B8C\u6210\u4EFB\u52A1\u9690\u85CF\u3002",
      props: [
        { name: "tags: a-\u4EFB\u52A1\u7B14\u8BB0", desc: "\u5FC5\u987B\u6709\u6B64\u6807\u7B7E\u624D\u4F1A\u663E\u793A\u5728\u5217\u8868\u4E2D" },
        { name: "tags: a-\u63A8\u8FDB\u4E2D", desc: "\u6B63\u5728\u63A8\u8FDB\u7684\u4EFB\u52A1" },
        { name: "tags: a-\u7B49\u5F85\u4E2D", desc: "\u7B49\u5F85\u5916\u90E8\u6761\u4EF6\u7684\u4EFB\u52A1" },
        { name: "tags: a-\u6682\u505C\u6401\u7F6E", desc: "\u6682\u65F6\u6401\u7F6E\u7684\u4EFB\u52A1" },
        { name: "tags: a-\u5DF2\u5B8C\u6210", desc: "\u5DF2\u5B8C\u6210\uFF0C\u81EA\u52A8\u9690\u85CF" },
        { name: "t-deadline", desc: "\u622A\u6B62\u65E5\u671F\uFF0C\u7528\u4E8E\u6392\u5E8F" }
      ]
    });
    const folders = [
      { id: "11", label: "\u805A\u7126\u627F\u8BFA" },
      { id: "12", label: "\u6D3B\u8DC3\u8DDF\u8FDB" }
    ];
    for (const folder of folders) {
      const folderTasks = tasks.filter((t) => t.folder === folder.id && !t.tags.includes("a-\u5DF2\u5B8C\u6210"));
      if (folderTasks.length === 0) continue;
      const folderHeader = container.createDiv({ cls: `act-action-folder is-folder-${folder.id}` });
      folderHeader.createSpan({ text: folder.label });
      folderHeader.createSpan({ text: `${folderTasks.length}`, cls: "act-action-group-count" });
      const statusOrder = [
        { css: "active", label: "\u63A8\u8FDB\u4E2D" },
        { css: "waiting", label: "\u7B49\u5F85\u4E2D" },
        { css: "none", label: "" },
        { css: "paused", label: "\u6682\u505C\u6401\u7F6E" }
      ];
      const grouped = /* @__PURE__ */ new Map();
      for (const task of folderTasks) {
        const status = this.getActionStatus(task);
        if (!grouped.has(status)) grouped.set(status, []);
        grouped.get(status).push(task);
      }
      for (const s of statusOrder) {
        const items = grouped.get(s.css);
        if (!items || items.length === 0) continue;
        if (s.label) {
          const subHeader = container.createDiv({ cls: `act-action-status-label is-${s.css}` });
          subHeader.createSpan({ cls: `act-action-dot is-${s.css}` });
          subHeader.createSpan({ text: s.label });
        }
        for (const task of items) {
          const active = task.filePath === this.selectedProgressTaskPath;
          const btn = container.createEl("button", { cls: `act-action-task-btn ${active ? "is-active" : ""}`, attr: { type: "button" } });
          btn.createSpan({ text: task.title, cls: "act-action-task-name" });
          btn.addEventListener("click", async () => {
            this.selectedProgressTaskPath = task.filePath;
            await this.render();
          });
        }
      }
    }
    const doneCount = tasks.filter((t) => t.tags.includes("a-\u5DF2\u5B8C\u6210")).length;
    if (doneCount > 0) {
      container.createDiv({ text: `${doneCount} \u4E2A\u5DF2\u5B8C\u6210\u4EFB\u52A1\u5DF2\u9690\u85CF`, cls: "act-action-done-hint" });
    }
  }
  createActionTaskNote() {
    const folderChoices = [
      { path: this.F.focusAction, label: "\u805A\u7126\u627F\u8BFA", desc: "\u91CD\u8981\u4E14\u9700\u8981\u6301\u7EED\u63A8\u8FDB\u7684\u6838\u5FC3\u4EFB\u52A1" },
      { path: this.F.activeAction, label: "\u6D3B\u8DC3\u8DDF\u8FDB", desc: "\u9700\u8981\u5173\u6CE8\u4F46\u975E\u6700\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1" },
      { path: this.F.maybeAction, label: "\u5C06\u6765\u4E5F\u8BB8", desc: "\u672A\u6765\u53EF\u80FD\u505A\u3001\u5F53\u524D\u4E0D\u63A8\u8FDB\u7684\u4E8B\u9879" }
    ];
    const modal = new import_obsidian.Modal(this.app);
    modal.titleEl.setText("\u65B0\u5EFA\u4EFB\u52A1\u7B14\u8BB0");
    const body = modal.contentEl;
    body.createDiv({ text: "\u9009\u62E9\u4EFB\u52A1\u6240\u5C5E\u6587\u4EF6\u5939\uFF1A", cls: "act-folder-choice-hint" });
    for (const choice of folderChoices) {
      const btn = body.createEl("button", { cls: "act-folder-choice-btn", attr: { type: "button" } });
      btn.createDiv({ text: choice.label, cls: "act-folder-choice-label" });
      btn.createDiv({ text: choice.desc, cls: "act-folder-choice-desc" });
      btn.addEventListener("click", () => {
        modal.close();
        this.plugin.openNotePrompt(
          "action-task",
          `\u65B0\u5EFA\u4EFB\u52A1 \xB7 ${choice.label}`,
          "\u4EFB\u52A1\u6807\u9898",
          "\u8865\u5145\u80CC\u666F\u3001\u76EE\u6807\u6216\u7EA6\u675F...",
          async ({ title, body: noteBody }) => {
            const path = `${choice.path}/${safeFileName(title)}.md`;
            const content = await this.plugin.buildTaskNoteContent(noteBody);
            await this.app.vault.create(path, content);
            this.selectedProgressTaskPath = path;
            await this.render();
            await this.plugin.openPathInSide(path);
          }
        );
      });
    }
    modal.open();
  }
  createFocusTaskNote(tab) {
    this.plugin.openNotePrompt(
      "action-task",
      `\u65B0\u5EFA\u4EFB\u52A1 \xB7 ${tab.label}`,
      "\u4EFB\u52A1\u6807\u9898",
      "\u8865\u5145\u80CC\u666F\u3001\u76EE\u6807\u6216\u7EA6\u675F...",
      async ({ title, body: noteBody }) => {
        const path = `${tab.folder}/${safeFileName(title)}.md`;
        const content = await this.plugin.buildTaskNoteContent(noteBody);
        await this.app.vault.create(path, content);
        await this.render();
        await this.plugin.openPathInSide(path);
      }
    );
  }
  async renderProgressDetail(container, task) {
    const file = this.app.vault.getAbstractFileByPath(task.filePath);
    if (!(file instanceof import_obsidian.TFile)) {
      this.empty(container, "\u4EFB\u52A1\u7B14\u8BB0\u4E0D\u5B58\u5728");
      return;
    }
    const content = await this.app.vault.cachedRead(file);
    const entries = extractProgressEntries(content, this.plugin.settings.progressLog.heading);
    const head = container.createDiv({ cls: "act-progress-head" });
    const titleWrap = head.createDiv({ cls: "act-progress-head-text" });
    titleWrap.createDiv({ text: task.title, cls: "act-progress-title" });
    const headMeta = titleWrap.createDiv({ cls: "act-progress-head-meta" });
    headMeta.createSpan({ text: task.folder === "11" ? "\u805A\u7126\u627F\u8BFA" : "\u6D3B\u8DC3\u8DDF\u8FDB" });
    if (task.deadline) {
      const dl = parseDeadlineDate(task.deadline);
      if (dl) {
        const daysLeft = Math.ceil((dl.getTime() - Date.now()) / 864e5);
        const urgency = daysLeft < 0 ? `\u5DF2\u903E\u671F ${-daysLeft} \u5929` : daysLeft <= 7 ? `\u8FD8\u5269 ${daysLeft} \u5929` : `\u622A\u6B62 ${task.deadline}`;
        const cls = daysLeft < 0 ? "is-overdue" : daysLeft <= 7 ? "is-urgent" : "";
        headMeta.createSpan({ text: urgency, cls: `act-deadline-hint ${cls}` });
      } else {
        headMeta.createSpan({ text: `\u622A\u6B62 ${task.deadline}` });
      }
    }
    if (task.priority) headMeta.createSpan({ text: `P${task.priority}` });
    if (task.aiNote) headMeta.createSpan({ text: task.aiNote, cls: "act-head-remark" });
    const open = head.createEl("button", { text: "\u6253\u5F00\u539F\u7B14\u8BB0", cls: "act-progress-open", attr: { type: "button" } });
    open.addEventListener("click", () => this.plugin.openPath(task.filePath));
    const statusBar = container.createDiv({ cls: "act-status-switcher" });
    statusBar.createDiv({ text: "\u6267\u884C\u72B6\u6001", cls: "act-status-switcher-label act-section-title" });
    this.sectionInfo(statusBar, {
      source: "\u4EFB\u52A1\u7B14\u8BB0 frontmatter \u2192 tags \u5C5E\u6027",
      rule: "\u70B9\u51FB\u72B6\u6001\u6807\u7B7E\u5207\u6362\u4EFB\u52A1\u7684\u6267\u884C\u72B6\u6001\uFF08\u5199\u5165 frontmatter tags\uFF09\u3002\u518D\u6B21\u70B9\u51FB\u5F53\u524D\u72B6\u6001\u53EF\u6E05\u9664\u3002\u72B6\u6001\u4E0E\u6587\u4EF6\u5939\u6B63\u4EA4\uFF1A\u6587\u4EF6\u5939\u7BA1\u627F\u8BFA\u7A0B\u5EA6\uFF0C\u6807\u7B7E\u7BA1\u5F53\u524D\u8FDB\u5EA6\u3002",
      props: [
        { name: "a-\u63A8\u8FDB\u4E2D", desc: "\u6B63\u5728\u63A8\u8FDB\u6267\u884C" },
        { name: "a-\u7B49\u5F85\u4E2D", desc: "\u7B49\u5F85\u5916\u90E8\u6761\u4EF6\uFF08\u522B\u4EBA\u56DE\u590D\u3001\u8D44\u6E90\u5C31\u4F4D\u7B49\uFF09" },
        { name: "a-\u6682\u505C\u6401\u7F6E", desc: "\u6682\u65F6\u6401\u7F6E\uFF0C\u4E0D\u7D27\u6025" },
        { name: "a-\u5DF2\u5B8C\u6210", desc: "\u5DF2\u5B8C\u6210\uFF0C\u4ECE\u5217\u8868\u9690\u85CF" }
      ]
    });
    const currentStatus = this.getActionStatus(task);
    for (const s of _ActWorkspaceView.ACTION_STATUSES) {
      const chip = statusBar.createEl("button", { text: s.label, cls: `act-status-chip is-${s.css} ${currentStatus === s.css ? "is-current" : ""}`, attr: { type: "button" } });
      chip.addEventListener("click", async () => {
        if (currentStatus === s.css) {
          await this.setActionStatus(task, "");
        } else {
          await this.setActionStatus(task, s.tag);
        }
        await this.render();
      });
    }
    const editor = container.createDiv({ cls: "act-workbench-editor" });
    editor.createDiv({ text: "\u8BB0\u5F55\u8FDB\u5C55", cls: "act-workbench-editor-title act-section-title" });
    this.sectionInfo(editor, {
      source: `\u5199\u5165\u5230\u4EFB\u52A1\u7B14\u8BB0 \u2192 ${this.plugin.settings.progressLog.heading} \u533A\u5757\u9876\u90E8`,
      rule: `\u9009\u62E9\u7C7B\u578B\u540E\u8F93\u5165\u5185\u5BB9\uFF0C\u4FDD\u5B58\u540E\u6309\u300C${this.plugin.settings.progressLog.format === "bullet-time" ? "\u9879\u76EE\u7B26 + \u65F6\u95F4" : "\u4E09\u7EA7\u6807\u9898 + \u65F6\u95F4"}\u300D\u63D2\u5165\u3002\u975E\u8FDB\u5C55\u7C7B\u578B\u4F1A\u4EE5\u3010\u7C7B\u578B\u3011\u524D\u7F00\u5199\u5165\uFF0C\u5982\u3010\u5361\u70B9\u3011\u5185\u5BB9\u3002`
    });
    const draft = this.progressDrafts[task.filePath] ?? { text: "", type: "\u8FDB\u5C55" };
    let recordType = draft.type;
    let draftSaveTimer = null;
    const saveDraft = () => {
      this.progressDrafts[task.filePath] = draft;
      this.plugin.saveSettings();
    };
    const saveDraftDebounced = () => {
      if (draftSaveTimer !== null) window.clearTimeout(draftSaveTimer);
      draftSaveTimer = window.setTimeout(() => {
        draftSaveTimer = null;
        saveDraft();
      }, 400);
    };
    const typeRow = editor.createDiv({ cls: "act-progress-type-row" });
    for (const type of ["\u8FDB\u5C55", "\u5224\u65AD", "\u5361\u70B9", "\u60C5\u7EEA", "\u4E0B\u6B65\u884C\u52A8"]) {
      const chip = typeRow.createEl("button", { text: type, cls: `act-progress-type ${type === recordType ? "is-active" : ""}`, attr: { type: "button" } });
      chip.addEventListener("click", () => {
        recordType = type;
        draft.type = type;
        saveDraft();
        typeRow.querySelectorAll(".act-progress-type").forEach((el) => el.removeClass("is-active"));
        chip.addClass("is-active");
      });
    }
    const inputRow = editor.createDiv({ cls: "act-workbench-input-row" });
    const input = inputRow.createEl("textarea", {
      cls: "act-progress-input",
      attr: { placeholder: "\u8BB0\u5F55\u8FDB\u5C55\u3001\u5224\u65AD\u3001\u5361\u70B9...", rows: "4" }
    });
    input.value = draft.text;
    input.addEventListener("input", () => {
      draft.text = input.value;
      saveDraftDebounced();
    });
    input.addEventListener("blur", () => {
      if (draftSaveTimer !== null) {
        window.clearTimeout(draftSaveTimer);
        draftSaveTimer = null;
        saveDraft();
      }
    });
    const btnGroup = inputRow.createDiv({ cls: "act-progress-btn-group" });
    let expanded = false;
    const expandBtn = btnGroup.createEl("button", { cls: "act-progress-expand", attr: { type: "button" } });
    (0, import_obsidian.setIcon)(expandBtn, "maximize-2");
    expandBtn.addEventListener("click", () => {
      expanded = !expanded;
      input.classList.toggle("is-expanded", expanded);
      (0, import_obsidian.setIcon)(expandBtn, expanded ? "minimize-2" : "maximize-2");
      input.focus();
    });
    const save = btnGroup.createEl("button", { text: "\u4FDD\u5B58", cls: "act-progress-save", attr: { type: "button" } });
    save.addEventListener("click", async () => {
      const text = input.value.trim();
      if (!text) {
        new import_obsidian.Notice("\u5148\u5199\u70B9\u5185\u5BB9");
        input.focus();
        return;
      }
      if (recordType === "\u4E0B\u6B65\u884C\u52A8") {
        await this.plugin.appendNextAction(task.filePath, text);
      } else {
        await this.plugin.appendProgressToTask(task.filePath, `\u3010${recordType}\u3011${text}`);
      }
      this.progressDrafts[task.filePath] = { text: "", type: recordType };
      await this.plugin.saveSettings();
      await this.render();
    });
    const section = getNextActionSection(content);
    const contentLines = content.split("\n");
    const nextActionLines = section ? contentLines.slice(section.start, section.end).map((line, offset) => ({ line, lineIndex: section.start + offset, writable: true })) : task.todos.map((todo) => ({ line: `- [ ] ${todo}`, lineIndex: -1, writable: false }));
    const visibleNextActionLines = nextActionLines.filter((item) => item.line.trim());
    if (visibleNextActionLines.length > 0) {
      const nextBox = container.createDiv({ cls: "act-workbench-next" });
      nextBox.createDiv({ text: "\u4E0B\u6B65\u884C\u52A8", cls: "act-workbench-next-title act-section-title" });
      this.sectionInfo(nextBox, {
        source: "\u4EFB\u52A1\u7B14\u8BB0 \u2192 ## \u4E0B\u6B65\u884C\u52A8 \u533A\u5757",
        rule: "\u8BFB\u53D6\u4EFB\u52A1\u7B14\u8BB0\u4E2D ## \u4E0B\u6B65\u884C\u52A8\uFF08\u6216 ## \u4E0B\u4E00\u6B65\u884C\u52A8 / ## \u884C\u52A8\u6E05\u5355\uFF09\u4E0B\u7684\u5185\u5BB9\u3002\u652F\u6301\u590D\u9009\u6846\uFF08- [ ] / - [x]\uFF09\u548C\u666E\u901A\u5217\u8868\u3002"
      });
      const nextBody = nextBox.createDiv({ cls: "act-workbench-next-body" });
      for (const action of visibleNextActionLines) {
        const line = action.line;
        const trimmed = line.trim();
        if (!trimmed) continue;
        const isCheckbox = /^[-*]\s*\[([ xX])\]\s*(.+)/.exec(trimmed);
        if (isCheckbox) {
          const done = isCheckbox[1].toLowerCase() === "x";
          const row = nextBody.createDiv({ cls: `act-workbench-todo ${done ? "is-done" : ""}` });
          const check = row.createDiv({ cls: "act-focus-action-check" });
          check.createDiv();
          if (!done && action.writable) {
            check.setAttribute("role", "button");
            check.setAttribute("aria-label", "\u5B8C\u6210\u884C\u52A8\u9879");
            check.setAttribute("title", "\u5B8C\u6210\u884C\u52A8\u9879");
            check.addEventListener("click", async () => {
              await this.plugin.completeTaskActionItem(task.filePath, action.lineIndex);
              await this.render();
            });
          }
          row.createSpan({ text: isCheckbox[2].trim(), cls: "act-workbench-todo-text" });
        } else if (/^[-*]\s+/.test(trimmed)) {
          const row = nextBody.createDiv({ cls: "act-workbench-todo" });
          const check = row.createDiv({ cls: "act-focus-action-check" });
          check.createDiv();
          if (action.writable) {
            check.setAttribute("role", "button");
            check.setAttribute("aria-label", "\u5B8C\u6210\u884C\u52A8\u9879");
            check.setAttribute("title", "\u5B8C\u6210\u884C\u52A8\u9879");
            check.addEventListener("click", async () => {
              await this.plugin.completeTaskActionItem(task.filePath, action.lineIndex);
              await this.render();
            });
          }
          row.createSpan({ text: trimmed.replace(/^[-*]\s+/, ""), cls: "act-workbench-todo-text" });
        } else {
          nextBody.createDiv({ text: trimmed.replace(/^[-*]\s+/, ""), cls: "act-workbench-todo-plain" });
        }
      }
    } else {
      const nextBox = container.createDiv({ cls: "act-workbench-next is-empty" });
      nextBox.createDiv({ text: "\u4E0B\u6B65\u884C\u52A8", cls: "act-workbench-next-title act-section-title" });
      this.sectionInfo(nextBox, {
        source: "\u4EFB\u52A1\u7B14\u8BB0 \u2192 ## \u4E0B\u6B65\u884C\u52A8 \u533A\u5757",
        rule: "\u8BFB\u53D6\u4EFB\u52A1\u7B14\u8BB0\u4E2D ## \u4E0B\u6B65\u884C\u52A8\uFF08\u6216 ## \u4E0B\u4E00\u6B65\u884C\u52A8 / ## \u884C\u52A8\u6E05\u5355\uFF09\u4E0B\u7684\u5185\u5BB9\u3002\u652F\u6301\u590D\u9009\u6846\uFF08- [ ] / - [x]\uFF09\u548C\u666E\u901A\u5217\u8868\u3002"
      });
      nextBox.createDiv({ text: "\u8FD8\u6CA1\u6709\u5199\u4E0B\u4E00\u6B65\uFF0C\u5728\u539F\u7B14\u8BB0\u7684 ## \u4E0B\u6B65\u884C\u52A8 \u4E2D\u6DFB\u52A0", cls: "act-empty" });
    }
    if (entries.length > 0) {
      const recentBox = container.createDiv({ cls: "act-workbench-recent" });
      const recentHead = recentBox.createDiv({ cls: "act-workbench-recent-head" });
      recentHead.createDiv({ text: "\u6700\u8FD1\u8FDB\u5C55", cls: "act-workbench-section-title act-section-title" });
      const limitControl = recentHead.createDiv({ cls: "act-progress-limit", attr: { "aria-label": "\u6700\u8FD1\u8FDB\u5C55\u663E\u793A\u6570\u91CF" } });
      for (const limit of [3, 7, 14]) {
        const limitButton = limitControl.createEl("button", {
          text: `${limit} \u6761`,
          cls: `act-progress-limit-button ${this.plugin.settings.recentProgressLimit === limit ? "is-active" : ""}`,
          attr: { type: "button", "aria-label": `\u663E\u793A\u6700\u8FD1 ${limit} \u6761\u8FDB\u5C55` }
        });
        limitButton.addEventListener("click", async () => {
          if (this.plugin.settings.recentProgressLimit === limit) return;
          this.plugin.settings.recentProgressLimit = limit;
          await this.plugin.saveSettings();
          await this.render();
        });
      }
      const recentLimit = this.plugin.settings.recentProgressLimit;
      this.sectionInfo(recentBox, {
        source: `\u4EFB\u52A1\u7B14\u8BB0 \u2192 ${this.plugin.settings.progressLog.heading} \u533A\u5757\uFF08\u6700\u8FD1 ${recentLimit} \u6761\uFF09`,
        rule: `\u8BC6\u522B\u4E09\u79CD\u683C\u5F0F\uFF1A1) ### \u6807\u9898\uFF1B2) > [!\u7C7B\u578B] ### \u6807\u9898 \u7684 Callout\uFF1B3) \u4EE5\u65E5\u671F\u5F00\u5934\u7684\u5217\u8868\u9879\u3002\u6309\u65F6\u95F4\u5012\u5E8F\u663E\u793A\u6700\u8FD1 ${recentLimit} \u6761\u3002`,
        props: [
          { name: "### \u6807\u9898", desc: "\u4E09\u7EA7\u6807\u9898\u4F5C\u4E3A\u8FDB\u5C55\u5206\u6BB5\u6807\u8BB0" },
          { name: "> [!tip] ### \u6807\u9898", desc: "Callout \u4E2D\u7684\u6807\u9898\u548C\u5F15\u7528\u6B63\u6587" },
          { name: "- YYYY-MM-DD HH:MM", desc: "\u65E5\u671F\u65F6\u95F4\u5F00\u5934\u7684\u5217\u8868\u9879" },
          { name: "- [[\u65E5\u671F\u94FE\u63A5]]", desc: "Obsidian \u65E5\u671F\u53CC\u94FE\u5F00\u5934\u7684\u5217\u8868\u9879" }
        ]
      });
      for (const entry of entries.slice(0, recentLimit)) {
        const { tag, body: entryBody } = extractProgressTypeTag(entry.text);
        const item = recentBox.createDiv({ cls: `act-progress-entry ${tag ? `is-type-${tag}` : ""}` });
        const timeRow = item.createDiv({ cls: "act-progress-entry-time" });
        timeRow.createSpan({ text: entry.marker || "\u8BB0\u5F55" });
        if (tag) timeRow.createSpan({ text: tag, cls: `act-progress-tag is-${tag}` });
        item.createDiv({ text: entryBody, cls: "act-progress-entry-text" });
      }
    }
  }
  async renderFixedSchedule(container) {
    if (!this.plugin.settings.dida.enabled) return;
    const section = this.section(container, "\u56FA\u5B9A\u65E5\u7A0B", "\u6EF4\u7B54\u6E05\u5355 \xB7 \u4ECA\u65E5");
    section.addClass("act-dida-section");
    const actions = section.createDiv({ cls: "act-dida-header-actions" });
    this.didaToolButton(actions, "\u65B0\u589E\u4EFB\u52A1", "plus", () => this.plugin.captureDidaTask());
    this.didaToolButton(actions, "\u6253\u5F00\u6EF4\u7B54\u6E05\u5355", "external-link", () => window.open(DIDA_WEB_URL, "_blank"));
    this.sectionInfo(section, {
      source: "\u6EF4\u7B54\u6E05\u5355 Open API\uFF08\u8BBE\u7F6E\u4E2D\u914D\u7F6E Access Token\uFF09",
      rule: `\u4ECA\u65E5\u4EFB\u52A1 = dueDate \u4E3A\u4ECA\u5929\uFF1B\u672A\u5B89\u6392\u4EFB\u52A1 = \u65E0 dueDate \u6216\u5DF2\u8D85\u671F\u3002\u5B8C\u6210\u8BB0\u5F55\u7684\u540C\u6B65\u5165\u53E3\u5DF2\u79FB\u5230\u300C\u4ECA\u65E5\u5DF2\u5B8C\u6210\u300D\u533A\u57DF\u7684\u300C\u4EFB\u52A1\u66F4\u65B0\u300D\u6309\u94AE\uFF08\u4E0D\u542F\u7528\u6EF4\u7B54\u6E05\u5355\u4E5F\u80FD\u7528\uFF09\u3002\u6309\u4F18\u5148\u7EA7\u964D\u5E8F\u3001\u622A\u6B62\u65E5\u671F\u5347\u5E8F\u6392\u5217\u3002`,
      props: [
        { name: "priority", desc: "0=\u65E0, 1=\u4F4E, 3=\u4E2D, 5=\u9AD8" },
        { name: "dueDate", desc: "\u4EFB\u52A1\u622A\u6B62\u65E5\u671F" },
        { name: "status", desc: "0=\u8FDB\u884C\u4E2D, 2=\u5DF2\u5B8C\u6210" }
      ]
    });
    const layout = section.createDiv({ cls: "act-dida-layout" });
    await this.renderTodayDidaPanel(layout);
    await this.renderUnscheduledDidaPanel(layout);
  }
  didaToolButton(container, label, icon, onClick) {
    const button = container.createEl("button", { cls: "act-dida-tool", attr: { type: "button" } });
    const iconEl = button.createSpan({ cls: "act-dida-tool-icon" });
    (0, import_obsidian.setIcon)(iconEl, icon);
    button.createSpan({ text: label, cls: "act-dida-tool-label" });
    button.addEventListener("click", onClick);
  }
  async renderTodayDidaPanel(container) {
    await this.renderDidaApiPanel(container, "\u4ECA\u65E5\u4EFB\u52A1", void 0, "\u4ECA\u5929\u6CA1\u6709\u4EFB\u52A1", (task) => this.isTodayDidaTask(task));
  }
  async renderUnscheduledDidaPanel(container) {
    await this.renderDidaApiPanel(
      container,
      "\u672A\u5B89\u6392\u4EFB\u52A1",
      DIDA_PREVIEW_LIMIT,
      "\u6682\u65E0\u672A\u5B89\u6392\u6216\u8D85\u671F\u4EFB\u52A1",
      (task) => this.isUnscheduledOrOverdueDidaTask(task),
      {
        expanded: this.didaUnscheduledExpanded,
        collapsedText: "\u5DF2\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00",
        onToggle: (panel, expanded) => this.toggleDidaApiPanel(
          panel,
          expanded,
          "\u672A\u5B89\u6392\u4EFB\u52A1",
          DIDA_PREVIEW_LIMIT,
          "\u6682\u65E0\u672A\u5B89\u6392\u6216\u8D85\u671F\u4EFB\u52A1",
          (task) => this.isUnscheduledOrOverdueDidaTask(task)
        )
      }
    );
  }
  async toggleDidaApiPanel(panel, expanded, title, limit, emptyMessage, filterTask) {
    this.didaUnscheduledExpanded = !expanded;
    panel.empty();
    await this.renderDidaApiPanelContent(panel, title, limit, emptyMessage, filterTask, {
      expanded: this.didaUnscheduledExpanded,
      collapsedText: "\u5DF2\u6298\u53E0\uFF0C\u70B9\u51FB\u5C55\u5F00",
      onToggle: (nextPanel, nextExpanded) => this.toggleDidaApiPanel(nextPanel, nextExpanded, title, limit, emptyMessage, filterTask)
    });
  }
  async renderDidaApiPanel(container, title, limit, emptyMessage, filterTask, toggle) {
    const panel = container.createDiv({
      cls: `act-dida-panel ${toggle ? "is-collapsible" : ""} ${toggle && !toggle.expanded ? "is-collapsed" : ""}`
    });
    await this.renderDidaApiPanelContent(panel, title, limit, emptyMessage, filterTask, toggle);
  }
  async renderDidaApiPanelContent(panel, title, limit, emptyMessage, filterTask, toggle) {
    panel.toggleClass("is-collapsible", Boolean(toggle));
    panel.toggleClass("is-collapsed", Boolean(toggle && !toggle.expanded));
    const head = panel.createDiv({ cls: "act-dida-panel-head" });
    if (toggle) {
      const titleButton = head.createEl("button", { cls: "act-dida-panel-toggle", attr: { type: "button" } });
      titleButton.createSpan({ text: toggle.expanded ? "\u25BE" : "\u25B8", cls: "act-dida-panel-toggle-icon" });
      titleButton.createSpan({ text: title, cls: "act-dida-panel-title" });
      titleButton.addEventListener("click", () => void toggle.onToggle(panel, toggle.expanded));
    } else {
      head.createDiv({ text: title, cls: "act-dida-panel-title" });
    }
    const countEl = head.createDiv({ text: "\u6B63\u5728\u8BFB\u53D6...", cls: "act-dida-count" });
    if (toggle && !toggle.expanded) {
      countEl.setText(toggle.collapsedText);
      head.addEventListener("click", (event) => {
        if (event.target instanceof HTMLElement && event.target.closest("button")) return;
        void toggle.onToggle(panel, toggle.expanded);
      });
      return;
    }
    const listEl = panel.createDiv({ cls: "act-dida-list" });
    const token = await this.plugin.getDidaApiToken();
    if (!token) {
      countEl.setText("Token \u4E0D\u53EF\u7528");
      this.empty(listEl, "\u8BF7\u5148\u5728\u63D2\u4EF6\u8BBE\u7F6E \u2192 \u6EF4\u7B54\u6E05\u5355\u4E2D\u914D\u7F6E Access Token");
      return;
    }
    try {
      const tasks = (await this.getCachedActiveDidaTasks(token)).filter(filterTask).sort((a, b) => {
        const rankDelta = this.getDidaPriorityRank(b) - this.getDidaPriorityRank(a);
        if (rankDelta !== 0) return rankDelta;
        return this.getDidaDueTimestamp(a) - this.getDidaDueTimestamp(b);
      });
      const visibleTasks = typeof limit === "number" ? tasks.slice(0, limit) : tasks;
      if (visibleTasks.length === 0) {
        countEl.setText("\u6682\u65E0\u4EFB\u52A1");
        this.empty(listEl, emptyMessage);
        return;
      }
      for (const task of visibleTasks) this.renderDidaTaskRow(listEl, task);
      const hiddenCount = typeof limit === "number" ? Math.max(0, tasks.length - limit) : 0;
      countEl.setText(hiddenCount > 0 ? `\u663E\u793A ${visibleTasks.length} \u4E2A\uFF0C\u8FD8\u6709 ${hiddenCount} \u4E2A` : `\u5171 ${tasks.length} \u4E2A`);
    } catch (error) {
      console.error("Failed to load Dida tasks", error);
      countEl.setText("\u8BFB\u53D6\u5931\u8D25");
      this.empty(listEl, "\u672A\u80FD\u8BFB\u53D6\u6EF4\u7B54\u6E05\u5355\u4EFB\u52A1\uFF0C\u8BF7\u68C0\u67E5 Access Token \u6216\u7F51\u7EDC\u8FDE\u63A5");
    }
  }
  async getCachedActiveDidaTasks(token) {
    const now = Date.now();
    if (this.didaActiveCache?.token === token) {
      if (this.didaActiveCache.promise) return this.didaActiveCache.promise;
      if (now - this.didaActiveCache.fetchedAt < DIDA_ACTIVE_CACHE_MS) return this.didaActiveCache.tasks;
    }
    const promise = this.fetchActiveDidaTasks(token);
    this.didaActiveCache = {
      token,
      fetchedAt: now,
      tasks: this.didaActiveCache?.token === token ? this.didaActiveCache.tasks : [],
      promise
    };
    try {
      const tasks = await promise;
      this.didaActiveCache = { token, fetchedAt: Date.now(), tasks };
      return tasks;
    } catch (error) {
      this.didaActiveCache = null;
      throw error;
    }
  }
  invalidateDidaActiveCache() {
    this.didaActiveCache = null;
  }
  async fetchActiveDidaTasks(token) {
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    const projectsRes = await (0, import_obsidian.requestUrl)({ url: `${DIDA_API_BASE}/open/v1/project`, method: "GET", headers });
    const projects = projectsRes.json;
    if (!Array.isArray(projects)) {
      console.error("[ACT] Dida projects response is not an array", projectsRes.json);
      return [];
    }
    projects.unshift({ id: "inbox", name: "\u6536\u4EF6\u7BB1" });
    const results = await Promise.all(
      projects.map(async (project) => {
        try {
          const res = await (0, import_obsidian.requestUrl)({ url: `${DIDA_API_BASE}/open/v1/project/${encodeURIComponent(project.id)}/data`, method: "GET", headers });
          const data = res.json;
          return (data.tasks ?? []).map((t) => ({ ...t, projectId: t.projectId ?? project.id }));
        } catch (error) {
          console.error(`[ACT] Failed to fetch tasks for project "${project.name}"`, error);
          return [];
        }
      })
    );
    const allTasks = [];
    for (const batch of results) {
      for (const t of batch) {
        if (t.id && t.title && t.status === 0) allTasks.push(t);
      }
    }
    return allTasks;
  }
  isTodayDidaTask(task) {
    const dueDate = this.getDidaDueDate(task);
    return Boolean(dueDate && formatDateOnly(dueDate) === formatDateOnly(/* @__PURE__ */ new Date()));
  }
  isUnscheduledOrOverdueDidaTask(task) {
    const dueDate = this.getDidaDueDate(task);
    if (!dueDate) return true;
    return this.isOverdueDidaTask(task);
  }
  isOverdueDidaTask(task) {
    const dueDate = this.getDidaDueDate(task);
    if (!dueDate) return false;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return dueDate.getTime() < today.getTime();
  }
  getDidaDueDate(task) {
    const raw = task.dueDate ?? task.startDate;
    if (!raw) return null;
    const date = new Date(raw);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  getDidaDueTimestamp(task) {
    return this.getDidaDueDate(task)?.getTime() ?? Number.MAX_SAFE_INTEGER;
  }
  getDidaPriorityRank(task) {
    return task.priority ?? 0;
  }
  getDidaPriorityLabel(task) {
    const p = task.priority ?? 0;
    if (p >= 5) return "\u9AD8";
    if (p >= 3) return "\u4E2D";
    if (p >= 1) return "\u4F4E";
    return "";
  }
  formatDidaDueText(task) {
    const dueDate = this.getDidaDueDate(task);
    if (!dueDate) return "\u672A\u5B89\u6392";
    return `${formatDateOnly(dueDate)} \u622A\u6B62`;
  }
  renderDidaTaskRow(container, task) {
    const row = container.createDiv({ cls: "act-dida-task" });
    row.setAttr("data-priority", String(task.priority ?? 0));
    const check = row.createDiv({ cls: "act-dida-check" });
    check.setAttr("role", "button");
    check.setAttr("aria-label", "\u5B8C\u6210\u4EFB\u52A1");
    check.setAttr("title", "\u5B8C\u6210\u4EFB\u52A1");
    check.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (row.hasClass("is-completing")) return;
      row.addClass("is-completing");
      const completed = await this.plugin.completeDidaTask(task.id, task.projectId ?? "");
      if (completed) {
        this.invalidateDidaActiveCache();
        await this.render();
      } else {
        row.removeClass("is-completing");
      }
    });
    check.createDiv();
    const body = row.createDiv({ cls: "act-dida-body" });
    const titleEl = body.createDiv({ text: normalizeInlineText(task.title), cls: "act-dida-title" });
    const priorityLabel = this.getDidaPriorityLabel(task);
    if (priorityLabel) titleEl.createSpan({ text: priorityLabel, cls: "act-dida-priority" });
    const overdue = this.isOverdueDidaTask(task);
    if (overdue) titleEl.createSpan({ text: "\u5DF2\u8FC7\u671F", cls: "act-dida-overdue" });
    const dueText = this.formatDidaDueText(task);
    if (dueText !== "\u672A\u5B89\u6392") body.createDiv({ text: dueText, cls: `act-dida-due ${overdue ? "is-overdue" : ""}` });
    const actions = row.createDiv({ cls: "act-dida-task-actions" });
    this.didaTaskActionButton(actions, "\u7F16\u8F91\u4EFB\u52A1", "pencil", () => this.plugin.editDidaTask(task));
    this.didaTaskActionButton(actions, "\u5220\u9664\u4EFB\u52A1", "trash-2", async () => {
      const title = normalizeInlineText(task.title);
      const confirmed = window.confirm(`\u786E\u5B9A\u5220\u9664\u6EF4\u7B54\u6E05\u5355\u4EFB\u52A1\u300C${title}\u300D\u5417\uFF1F

\u5220\u9664\u540E\u65E0\u6CD5\u4ECE\u9996\u9875\u6062\u590D\u3002`);
      if (!confirmed) return;
      if (row.hasClass("is-mutating")) return;
      row.addClass("is-mutating");
      const deleted = await this.plugin.deleteDidaTask(task.id, task.projectId ?? "inbox");
      if (deleted) {
        this.invalidateDidaActiveCache();
        await this.render();
      } else {
        row.removeClass("is-mutating");
      }
    });
    const desc = normalizeInlineText(task.content ?? task.desc ?? "");
    if (desc) body.createDiv({ text: desc, cls: "act-dida-desc" });
  }
  didaTaskActionButton(container, label, icon, onClick) {
    const button = container.createEl("button", { cls: "act-dida-task-action", attr: { type: "button", "aria-label": label, title: label } });
    (0, import_obsidian.setIcon)(button, icon);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      void onClick();
    });
  }
  async renderWeeklyFlow(container) {
    const section = this.section(container, "12\u5468\u6D41\u7A0B", "12\u5468 \xB7 \u6D41\u7A0B");
    this.sectionInfo(section, {
      source: `${this.F.cycle} \u5468\u671F\u6587\u4EF6 + ${this.F.weekly} \u672C\u5468\u5468\u8BB0`,
      rule: "5 \u6B65\u6D41\u7A0B\u5224\u65AD\uFF1A\u542F\u52A8=\u76EE\u6807\u6587\u4EF6\u542B G1 \u2192 \u5468\u8BA1\u5212=\u5468\u8BB0\u542B [\u672C\u5468\u7B56\u7565\u6267\u884C] \u2192 \u6267\u884C=\u975E\u5468\u516D\u4E14\u5DF2\u6709\u5468\u8BA1\u5212 \u2192 \u5468\u8BC4\u5206=\u5468\u8BB0\u542B\u6267\u884C\u5206\u4E14\u5DF2\u586B\u5199 \u2192 \u4E0B\u5468\u671F=\u4E0B\u4E00\u4E2A 12 \u5468\u6587\u4EF6\u542B G1\u3002\u7EFF\u8272\u9AD8\u4EAE\u5F53\u524D\u5E94\u5173\u6CE8\u7684\u6B65\u9AA4\u3002"
    });
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    const ci = getCycleInfo(today, this.plugin.settings.cycleMode);
    const yearCycle = ci.cycle;
    const nextCycle = getNextYearCycle(year, yearCycle);
    const weekOfCycle = ci.weekOfCycle;
    const weekId = formatWeekId(today);
    const cyclePath = `${this.F.cycle}/${year}-${yearCycle}.md`;
    const nextCyclePath = `${this.F.cycle}/${nextCycle.year}-${nextCycle.cycle}.md`;
    const weekPath = `${this.F.weekly}/${weekId}.md`;
    const cycleFile = this.app.vault.getAbstractFileByPath(cyclePath);
    const nextCycleFile = this.app.vault.getAbstractFileByPath(nextCyclePath);
    const weekFile = this.app.vault.getAbstractFileByPath(weekPath);
    let cycleStarted = false;
    let nextCycleStarted = false;
    let weekPlanDone = false;
    let weekRatingDone = false;
    let cycleReviewDone = false;
    if (cycleFile instanceof import_obsidian.TFile) {
      const content = await this.app.vault.cachedRead(cycleFile);
      cycleStarted = content.includes("### G1");
      cycleReviewDone = content.includes("\u5468\u671F\u603B\u7ED3") && content.match(/周期总结[：:]\s*\n\s*>/) === null;
    }
    if (nextCycleFile instanceof import_obsidian.TFile) {
      const content = await this.app.vault.cachedRead(nextCycleFile);
      nextCycleStarted = content.includes("### G1");
    }
    if (weekFile instanceof import_obsidian.TFile) {
      const content = await this.app.vault.cachedRead(weekFile);
      weekPlanDone = content.includes("\u672C\u5468\u7B56\u7565\u6267\u884C");
      const exec = content.match(/执行分[：:]\s*(.+)/);
      weekRatingDone = Boolean(exec?.[1] && !exec[1].includes("\u5F85\u5468\u672B") && !exec[1].includes("\u5468\u672B\u586B\u5165"));
    }
    const isSaturday = today.getDay() === 6;
    const steps = [
      { label: "\u542F\u52A8", done: cycleStarted, current: weekOfCycle === 1, path: cyclePath },
      { label: "\u5468\u8BA1\u5212", done: weekPlanDone, current: isSaturday && !weekPlanDone, path: weekPath },
      { label: "\u6267\u884C", done: false, current: !isSaturday && weekPlanDone && !weekRatingDone, path: weekPath },
      { label: "\u5468\u8BC4\u5206", done: weekRatingDone, current: isSaturday && weekPlanDone && !weekRatingDone, path: weekPath },
      { label: nextCycle.cycle, done: nextCycleStarted, current: weekOfCycle >= ci.totalWeeks && cycleReviewDone && !nextCycleStarted, path: nextCyclePath }
    ];
    const row = section.createDiv({ cls: "act-flow" });
    for (const step of steps) {
      const el = row.createEl("button", { text: step.label, cls: `act-flow-step ${step.done ? "is-done" : ""} ${step.current ? "is-active" : ""}` });
      el.addEventListener("click", async () => {
        if (step.path === weekPath) await this.plugin.ensureWeeklyFile(weekId);
        if (step.path === cyclePath) await this.plugin.ensureCycleFile(year, yearCycle);
        if (step.path === nextCyclePath) await this.plugin.ensureCycleFile(nextCycle.year, nextCycle.cycle);
        await this.plugin.openPath(step.path);
      });
    }
    const current = steps.find((s) => s.current);
    section.createDiv({ text: current ? `\u73B0\u5728\u5E94\u5173\u6CE8\uFF1A${current.label}` : "\u672C\u5468\u6D41\u7A0B\u5DF2\u5B8C\u6210\uFF0C\u7EE7\u7EED\u6267\u884C\u7B56\u7565", cls: "act-hint" });
  }
  /* ========= CARD TAB (C 层 · 知识) ========= */
  async renderCardTab(container) {
    const grid = container.createDiv({ cls: "act-panel-grid" });
    const main = grid.createDiv({ cls: "act-panel-main" });
    const side = grid.createDiv({ cls: "act-panel-side" });
    await this.renderIndexCardOverview(main);
    await this.renderCardOverview(side);
    await this.renderRecentCards(side);
  }
  async renderIndexCardOverview(container) {
    const section = this.section(container, "\u4E3B\u9898\u7D22\u5F15", "\u77E5\u8BC6 \xB7 \u7D22\u5F15");
    this.smallAction(section, "\u65B0\u589E\u7D22\u5F15", () => this.plugin.captureIndexCard());
    this.sectionInfo(section, {
      source: `${this.F.indexCard} \u4E0B\u7684\u7D22\u5F15\u5361\u6587\u4EF6`,
      rule: "\u6309\u5B50\u6587\u4EF6\u5939\uFF08\u4E3B\u9898\u7D22\u5F15 / \u4EBA\u7269\u7D22\u5F15\uFF09\u5206\u7EC4\u5C55\u793A\u3002\u6BCF\u5F20\u7D22\u5F15\u5361\u663E\u793A\u88AB\u6838\u5FC3\u5361 index \u5C5E\u6027\u5F15\u7528\u7684\u6B21\u6570\u3002"
    });
    const mainCardFiles = this.getCardFiles("mainCard", this.F.mainCard);
    const indexRefCounts = /* @__PURE__ */ new Map();
    for (const file of mainCardFiles) {
      const fm = this.app.metadataCache.getFileCache(file)?.frontmatter;
      if (!fm?.["index"]) continue;
      const indexVal = fm["index"];
      const refs = Array.isArray(indexVal) ? indexVal : [indexVal];
      for (const ref of refs) {
        const name = String(ref).replace(/^\[\[|\]\]$/g, "").trim();
        if (name) indexRefCounts.set(name, (indexRefCounts.get(name) ?? 0) + 1);
      }
    }
    const allIndexFiles = this.getCardFiles("indexCard", this.F.indexCard).sort((a, b) => a.basename.localeCompare(b.basename, "zh-CN"));
    if (allIndexFiles.length === 0) {
      this.empty(section, "\u8FD8\u6CA1\u6709\u7D22\u5F15\u5361");
      return;
    }
    const chipRow = section.createDiv({ cls: "act-chip-row" });
    for (const file of allIndexFiles) {
      const count = indexRefCounts.get(file.basename) ?? 0;
      const chip = chipRow.createDiv({ cls: "act-index-chip is-clickable" });
      chip.createSpan({ text: file.basename.replace(/^[kbp]\d*-/, ""), cls: "act-index-chip-name" });
      if (count > 0) chip.createSpan({ text: String(count), cls: "act-index-chip-count" });
      chip.addEventListener("click", () => this.plugin.openPath(file.path));
    }
  }
  async renderCardOverview(container) {
    const section = this.section(container, "\u77E5\u8BC6\u5C42\u603B\u89C8", "\u77E5\u8BC6 \xB7 \u603B\u89C8", "dark");
    this.sectionInfo(section, {
      source: `${this.F.card} \u4E0B\u5404\u5B50\u6587\u4EF6\u5939\u7684 Markdown \u6587\u4EF6\u6570`,
      rule: "\u9012\u5F52\u7EDF\u8BA1\u6BCF\u4E2A\u5B50\u6587\u4EF6\u5939\u4E2D\u7684 .md \u6587\u4EF6\u6570\u91CF\u3002",
      props: [
        { name: "\u6838\u5FC3\u5361 (24)", desc: "\u7ECF\u8FC7\u6DF1\u5EA6\u601D\u8003\u63D0\u70BC\u7684\u6C38\u4E45\u7B14\u8BB0" },
        { name: "\u9605\u8BFB\u5361 (23)", desc: "\u6765\u6E90\u4E66\u7C4D/\u6587\u7AE0\u7684\u9605\u8BFB\u7B14\u8BB0" },
        { name: "\u7D22\u5F15\u5361 (22)", desc: "\u8FDE\u63A5\u591A\u5F20\u5361\u7247\u7684\u4E3B\u9898\u5165\u53E3" },
        { name: "\u65B0\u5361\u6682\u5B58 (21)", desc: "\u5C1A\u672A\u5F52\u7C7B\u7684\u65B0\u7B14\u8BB0" }
      ]
    });
    const dvp = this.plugin.settings.dvPaths;
    const vis = this.plugin.settings.cardVisibility ?? {};
    const allFolders = [
      { key: "mainCard", path: this.F.mainCard, label: "\u6838\u5FC3\u5361", color: "green", dv: dvp.mainCard },
      { key: "bibCard", path: this.F.bibCard, label: "\u9605\u8BFB\u5361", color: "purple", dv: dvp.bibCard },
      { key: "indexCard", path: this.F.indexCard, label: "\u7D22\u5F15\u5361", color: "default", dv: dvp.indexCard },
      { key: "newCard", path: this.F.newCard, label: "\u65B0\u5361\u6682\u5B58", color: "default", dv: dvp.newCard }
    ];
    const folders = allFolders.filter((f) => vis[f.key] !== false && f.path);
    const stats = section.createDiv({ cls: "act-analytics-platforms" });
    for (const f of folders) {
      const count = this.getCardFiles(f.key, f.path).length;
      const card = stats.createDiv({ cls: `act-platform-card${f.dv ? " is-clickable" : ""}` });
      card.setAttribute("data-color", f.color);
      card.createDiv({ text: String(count), cls: "act-platform-value" });
      card.createDiv({ text: f.label, cls: "act-platform-name" });
      if (f.dv) card.addEventListener("click", () => this.plugin.openPath(f.dv));
    }
  }
  async renderRecentCards(container) {
    const section = this.section(container, "\u6700\u8FD1\u5199\u7684\u5361\u7247", "\u77E5\u8BC6 \xB7 \u6700\u8FD1");
    this.smallAction(section, "\u65B0\u589E\u5361\u7247", () => this.plugin.captureKnowledgeCard());
    this.sectionInfo(section, {
      source: `${this.F.mainCard} \u4E0E ${this.F.bibCard} \u6309\u4FEE\u6539\u65F6\u95F4\u6392\u5E8F`,
      rule: "\u53D6\u6700\u8FD1\u4FEE\u6539\u7684 10 \u5F20\u5361\u7247\uFF0C\u8BFB\u53D6 frontmatter \u5C5E\u6027\u5C55\u793A\u3002",
      props: [
        { name: "created", desc: "\u5361\u7247\u521B\u5EFA\u65E5\u671F" },
        { name: "index", desc: "\u7D22\u5F15\u5361\u53CC\u94FE\uFF0C\u6307\u5411\u6240\u5C5E\u4E3B\u9898" },
        { name: "\u626B\u63CF\u5361\u7247", desc: "\u5173\u8054\u7684\u626B\u63CF\u56FE\u7247\u6587\u4EF6\u540D" }
      ]
    });
    const allCards = [];
    for (const cardKey of ["mainCard", "bibCard"]) {
      allCards.push(...this.getCardFiles(cardKey, this.F[cardKey]));
    }
    allCards.sort((a, b) => b.stat.mtime - a.stat.mtime);
    const recent = allCards.slice(0, 5);
    if (recent.length === 0) {
      this.empty(section, "\u8FD8\u6CA1\u6709\u6838\u5FC3\u5361\u6216\u9605\u8BFB\u5361");
      return;
    }
    const columns = [
      { key: "title", label: "\u6807\u9898" },
      { key: "type", label: "\u7C7B\u578B", width: "50px" },
      { key: "created", label: "\u521B\u5EFA", width: "72px" },
      { key: "index", label: "\u7D22\u5F15" },
      { key: "modified", label: "\u4FEE\u6539", width: "72px" }
    ];
    const rows = [];
    for (const file of recent) {
      const mainFiles = this.getCardFiles("mainCard", this.F.mainCard);
      const isMain = mainFiles.some((f) => f.path === file.path);
      const fm = this.app.metadataCache.getFileCache(file)?.frontmatter ?? {};
      const indexVal = fm["index"];
      let indexStr = "\u2014";
      if (Array.isArray(indexVal)) indexStr = indexVal.map((v) => String(v).replace(/^\[\[|\]\]$/g, "")).join(", ");
      else if (indexVal) indexStr = String(indexVal).replace(/^\[\[|\]\]$/g, "");
      const created = fm["created"] ? String(fm["created"]).slice(0, 10) : "\u2014";
      rows.push({
        data: {
          title: file.basename,
          type: isMain ? "\u6838\u5FC3" : "\u9605\u8BFB",
          created,
          index: indexStr,
          modified: new Date(file.stat.mtime).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })
        },
        onClick: () => this.plugin.openPath(file.path)
      });
    }
    this.renderDataTable(section, columns, rows);
  }
  /* ========= TIME TAB (T 层 · 方向) ========= */
  async renderTimeTab(container) {
    const grid = container.createDiv({ cls: "act-panel-grid" });
    const main = grid.createDiv({ cls: "act-panel-main" });
    const side = grid.createDiv({ cls: "act-panel-side" });
    await this.renderCurrentCycleGoals(main);
    await this.renderWeeklyFlow(main);
    await this.renderVisionSummary(side);
    await this.renderWeeklyHistory(side);
  }
  async renderCurrentCycleGoals(container) {
    const today = /* @__PURE__ */ new Date();
    const ci = getCycleInfo(today, this.plugin.settings.cycleMode);
    const yearCycle = ci.cycle;
    const year = today.getFullYear();
    const cyclePath = `${this.F.cycle}/${year}-${yearCycle}.md`;
    const weekOfCycle = ci.weekOfCycle;
    const cycleLabel = ci.totalWeeks === 12 ? "\u5341\u4E8C\u5468\u76EE\u6807" : `${ci.totalWeeks}\u5468\u76EE\u6807`;
    const section = this.section(container, `${year}-${yearCycle} ${cycleLabel}`, "\u65B9\u5411 \xB7 \u76EE\u6807", "dark");
    this.sectionInfo(section, {
      source: cyclePath,
      rule: "\u8BFB\u53D6\u5468\u671F\u6587\u4EF6\u4E2D ### G1 - / G2 - \u683C\u5F0F\u7684\u76EE\u6807\uFF0C\u652F\u6301\u666E\u901A\u6807\u9898\u3001\u5F15\u7528\u5757\u548C Callout \u6807\u9898\u3002\u540C\u4E00\u5468\u671F\u5185\u6BCF\u4E2A G \u7F16\u53F7\u5FC5\u987B\u552F\u4E00\uFF1B\u91CD\u590D\u7F16\u53F7\u4E0D\u4F1A\u540C\u65F6\u5C55\u793A\uFF0C\u4F1A\u4F18\u5148\u4FDD\u7559\u5305\u542B\u4EFB\u52A1\u53CC\u94FE\u7684\u76EE\u6807\u3002\u81EA\u52A8\u8BC6\u522B\u76EE\u6807\u533A\u5757\u5185\u7684 [[\u53CC\u94FE]] \u5E76\u5339\u914D\u884C\u52A8\u6A21\u5757\u4E2D\u7684\u4EFB\u52A1\u7B14\u8BB0\uFF08\u9700\u6709 a-\u4EFB\u52A1\u7B14\u8BB0 \u6807\u7B7E\uFF09\u3002",
      props: [
        { name: "### G1/G2/G3", desc: "\u76EE\u6807\u6807\u9898\uFF1B\u540C\u4E00\u5468\u671F\u5185 G \u7F16\u53F7\u5FC5\u987B\u552F\u4E00" },
        { name: "\u7F16\u53F7\u552F\u4E00\u6027", desc: "G1\u3001G2\u3001G3\u2026\u4E0D\u5F97\u91CD\u590D" },
        { name: "[[\u4EFB\u52A1\u540D]]", desc: "\u76EE\u6807\u533A\u5757\u5185\u7684\u53CC\u94FE\uFF0C\u81EA\u52A8\u5173\u8054\u4EFB\u52A1\u7B14\u8BB0" },
        { name: "\u8FDB\u5EA6\u6761", desc: `\u5F53\u524D\u5468\u6570 / ${ci.totalWeeks} \u5468` }
      ]
    });
    this.smallAction(section, "\u6253\u5F00\u76EE\u6807\u7B14\u8BB0", async () => {
      await this.plugin.ensureCycleFile(year, yearCycle);
      await this.plugin.openPath(cyclePath);
      await this.render();
    });
    const file = this.app.vault.getAbstractFileByPath(cyclePath);
    if (!(file instanceof import_obsidian.TFile)) {
      this.empty(section, "\u5F53\u524D\u5468\u671F\u76EE\u6807\u5C1A\u672A\u521B\u5EFA");
      return;
    }
    const content = await this.app.vault.cachedRead(file);
    const progressBar = section.createDiv({ cls: "act-cycle-progress" });
    const bar = progressBar.createDiv({ cls: "act-cycle-bar" });
    const fill = bar.createDiv({ cls: "act-cycle-fill" });
    fill.style.width = `${Math.round(weekOfCycle / ci.totalWeeks * 100)}%`;
    progressBar.createDiv({ text: `\u7B2C ${weekOfCycle} \u5468 / ${ci.totalWeeks} \u5468`, cls: "act-cycle-label" });
    const actionTasks = await this.parseActionTasks();
    const taskByName = /* @__PURE__ */ new Map();
    for (const t of actionTasks) taskByName.set(t.title, t);
    const lines = content.split("\n");
    const goalSections = [];
    let current = null;
    for (const line of lines) {
      const goalHeading = parseGoalHeading(line);
      if (goalHeading) {
        if (current) goalSections.push(current);
        current = { ...goalHeading, links: [] };
      } else if (/^#{2,6}\s+/.test(normalizeHeadingLine(line)) && current) {
        goalSections.push(current);
        current = null;
      }
      if (current) {
        const wikilinks = line.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g);
        for (const m of wikilinks) {
          const name = m[1].trim();
          if (taskByName.has(name) && !current.links.includes(name)) current.links.push(name);
        }
      }
    }
    if (current) goalSections.push(current);
    const goalsById = /* @__PURE__ */ new Map();
    for (const goal of goalSections) {
      const existing = goalsById.get(goal.id);
      if (!existing || goal.links.length >= existing.links.length) goalsById.set(goal.id, goal);
    }
    const uniqueGoals = [...goalsById.values()];
    if (uniqueGoals.length === 0) {
      this.empty(section, "\u76EE\u6807\u7B14\u8BB0\u4E2D\u672A\u627E\u5230 G1/G2/G3 \u683C\u5F0F\u7684\u76EE\u6807");
      return;
    }
    for (const goal of uniqueGoals) {
      const goalBox = section.createDiv({ cls: "act-goal-box" });
      const goalHead = goalBox.createDiv({ cls: "act-goal-head" });
      goalHead.createSpan({ text: goal.id, cls: "act-badge" });
      const goalLink = goalHead.createEl("a", { text: goal.title, cls: "act-goal-title", href: "#" });
      goalLink.addEventListener("click", (e) => {
        e.preventDefault();
        this.plugin.openPath(cyclePath);
      });
      if (goal.links.length > 0) {
        const taskList = goalBox.createDiv({ cls: "act-goal-tasks" });
        for (const linkName of goal.links) {
          const task = taskByName.get(linkName);
          if (!task) continue;
          const status = this.getActionStatus(task);
          const statusInfo = _ActWorkspaceView.ACTION_STATUSES.find((s) => s.css === status);
          const taskRow = taskList.createDiv({ cls: "act-goal-task-row" });
          if (statusInfo) {
            taskRow.createSpan({ text: statusInfo.label, cls: `act-goal-task-status is-${status}` });
          }
          const taskLink = taskRow.createEl("a", { text: task.title, cls: "act-goal-task-name", href: "#" });
          taskLink.addEventListener("click", (e) => {
            e.preventDefault();
            this.selectedProgressTaskPath = task.filePath;
            this.activeTab = "action";
            this.render();
          });
        }
      }
    }
  }
  async renderVisionSummary(container) {
    const section = this.section(container, "\u613F\u666F", "\u65B9\u5411 \xB7 \u613F\u666F");
    this.sectionInfo(section, {
      source: this.F.vision,
      rule: "\u5217\u51FA\u613F\u666F\u6587\u4EF6\u5939\u4E2D\u7684 .md \u6587\u4EF6\uFF0C\u6309\u4FEE\u6539\u65F6\u95F4\u964D\u5E8F\uFF0C\u6700\u591A\u663E\u793A 3 \u4E2A\u3002"
    });
    const folder = this.app.vault.getAbstractFileByPath(this.F.vision);
    if (!(folder instanceof import_obsidian.TFolder)) {
      this.empty(section, "\u613F\u666F\u6587\u4EF6\u5939\u4E0D\u5B58\u5728");
      return;
    }
    const files = this.collectMarkdownFiles(folder).sort((a, b) => b.stat.mtime - a.stat.mtime);
    if (files.length === 0) {
      this.empty(section, "\u8FD8\u6CA1\u6709\u5199\u613F\u666F\u4FE1");
      return;
    }
    for (const file of files.slice(0, 3)) {
      const row = section.createDiv({ cls: "act-published-row" });
      const link = row.createEl("a", { text: file.basename, cls: "act-file-title", href: "#" });
      link.addEventListener("click", (event) => {
        event.preventDefault();
        this.plugin.openPath(file.path);
      });
    }
  }
  async renderWeeklyHistory(container) {
    const section = this.section(container, "\u6700\u8FD1\u5468\u8BB0", "\u65B9\u5411 \xB7 \u5468\u8BB0");
    const nextWeekDate = /* @__PURE__ */ new Date();
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    const nextWeekId = formatWeekId(nextWeekDate);
    const nextWeekPath = `${this.F.weekly}/${nextWeekId}.md`;
    const nextWeekExists = this.app.vault.getAbstractFileByPath(nextWeekPath) instanceof import_obsidian.TFile;
    const btnRow = section.createDiv({ cls: "act-section-actions" });
    if (nextWeekExists) {
      this.smallAction(btnRow, `\u6253\u5F00 ${nextWeekId}`, async () => {
        await this.plugin.ensureWeeklyFile(nextWeekId);
        await this.plugin.openPath(nextWeekPath);
      });
    } else {
      this.smallAction(btnRow, `\u65B0\u5EFA ${nextWeekId}`, async () => {
        await this.plugin.ensureWeeklyFile(nextWeekId);
        await this.plugin.openPath(nextWeekPath);
        await this.render();
      });
    }
    this.sectionInfo(section, {
      source: `${this.F.weekly} \u6700\u8FD1 8 \u5468`,
      rule: "\u5339\u914D\u6587\u4EF6\u540D YYYY-Wxx.md\uFF0C\u6309\u6587\u4EF6\u540D\u5012\u5E8F\u3002\u8BFB\u53D6 [\u672C\u5468\u8BA1\u5212] \u533A\u5757\u7EDF\u8BA1\u5DF2\u5B8C\u6210/\u672A\u5B8C\u6210\u4EFB\u52A1\u6570\u3002",
      props: [
        { name: "\u672C\u5468\u8BA1\u5212", desc: "\u590D\u9009\u6846\u533A\u5757\uFF0C\u7EDF\u8BA1\u5B8C\u6210\u72B6\u6001" },
        { name: "\u65E5\u671F\u8303\u56F4", desc: "\u4ECE\u5468\u8BB0\u6587\u4EF6\u540D\u63A8\u7B97\u7684\u5468\u4E00\u81F3\u5468\u65E5" }
      ]
    });
    const folder = this.app.vault.getAbstractFileByPath(this.F.weekly);
    if (!(folder instanceof import_obsidian.TFolder)) {
      this.empty(section, "\u5468\u8BB0\u6587\u4EF6\u5939\u4E0D\u5B58\u5728");
      return;
    }
    const files = this.collectMarkdownFiles(folder).filter((f) => /^\d{4}-W\d{2}\.md$/.test(f.name)).sort((a, b) => b.name.localeCompare(a.name)).slice(0, 8);
    if (files.length === 0) {
      this.empty(section, "\u8FD8\u6CA1\u6709\u521B\u5EFA\u5468\u8BB0");
      return;
    }
    const columns = [
      { key: "week", label: "\u5468\u8BB0", width: "80px" },
      { key: "range", label: "\u65E5\u671F\u8303\u56F4" },
      { key: "open", label: "\u5F85\u529E", width: "56px" },
      { key: "status", label: "\u72B6\u6001", width: "56px" }
    ];
    const rows = [];
    for (const file of files) {
      const content = await this.app.vault.cachedRead(file);
      const allTasks = parseCheckboxesInSection(content, "\u672C\u5468\u8BA1\u5212");
      const openTasks = countOpenTasks(allTasks);
      const doneTasks = allTasks.length - openTasks;
      const weekId = file.basename.replace(".md", "");
      rows.push({
        data: {
          week: weekId,
          range: formatWeekRange(weekId),
          open: openTasks > 0 ? `${openTasks}` : "0",
          status: openTasks === 0 && allTasks.length > 0 ? "\u5DF2\u5B8C\u6210" : openTasks > 0 ? "\u8FDB\u884C\u4E2D" : "\u65E0\u8BA1\u5212"
        },
        onClick: () => this.plugin.openPath(file.path)
      });
    }
    this.renderDataTable(section, columns, rows);
  }
  async parseActionTasks() {
    const folders = [
      { path: this.F.focusAction, id: "11" },
      { path: this.F.activeAction, id: "12" }
    ];
    const tasks = [];
    const allMdFiles = this.app.vault.getMarkdownFiles();
    for (const folder of folders) {
      const prefix = folder.path + "/";
      const folderFiles = allMdFiles.filter((f) => f.path.startsWith(prefix));
      for (const child of folderFiles) {
        const content = await this.app.vault.cachedRead(child);
        const { tags, aiNote, personalNote, deadline, priority } = parseFrontmatterAction(content);
        if (!tags.includes("a-\u4EFB\u52A1\u7B14\u8BB0")) continue;
        const entries = extractProgressEntries(content, this.plugin.settings.progressLog.heading);
        const latestProgressAt = entries[0] ? parseProgressMarkerTime(entries[0].marker) : Number.NaN;
        const todos = content.split("\n").filter((line) => /^[-*]\s*\[ \]\s*/.test(line)).map((line) => line.replace(/^[-*]\s*\[ \]\s*/, "").trim());
        tasks.push({
          title: child.basename,
          aiNote,
          personalNote,
          deadline,
          priority,
          tags,
          isTracked: tags.includes("a1-\u8981\u4E8B\u63A8\u8FDB"),
          todos,
          filePath: child.path,
          folder: folder.id,
          latestProgressAt: Number.isNaN(latestProgressAt) ? null : latestProgressAt,
          latestProgressText: entries[0]?.text ?? "",
          progressCount: entries.length
        });
      }
    }
    return tasks;
  }
  collectMarkdownFiles(folder) {
    const files = [];
    for (const child of folder.children) {
      if (child instanceof import_obsidian.TFile && child.extension === "md") files.push(child);
      if (child instanceof import_obsidian.TFolder) files.push(...this.collectMarkdownFiles(child));
    }
    return files;
  }
  getCardFiles(key, folderPath) {
    const mode = this.plugin.settings.cardSearchMode[key] || "folder";
    if (mode === "tag") {
      const tag = this.plugin.settings.cardTags[key];
      if (!tag) return [];
      return this.app.vault.getMarkdownFiles().filter((f) => {
        const cache = this.app.metadataCache.getFileCache(f);
        const t = cache?.frontmatter?.tags;
        if (!t) return false;
        return Array.isArray(t) ? t.includes(tag) : t === tag;
      });
    }
    const folder = this.app.vault.getAbstractFileByPath(folderPath);
    if (!(folder instanceof import_obsidian.TFolder)) return [];
    return this.collectMarkdownFiles(folder);
  }
  section(container, title, label = "", theme = "") {
    const section = container.createDiv({ cls: "act-section" });
    section.setAttribute("data-label", label);
    if (theme) section.setAttribute("data-theme", theme);
    section.createEl("h2", { text: title, cls: "act-section-title" });
    return section;
  }
  smallAction(container, label, onClick) {
    const action = container.createEl("button", { text: label, cls: "act-small-action" });
    action.addEventListener("click", onClick);
  }
  sectionInfo(section, info) {
    const title = section.querySelector(".act-section-title");
    if (!title) return;
    const trigger = createDiv({ cls: "act-info-trigger" });
    const iconEl = trigger.createSpan({ cls: "act-info-icon" });
    (0, import_obsidian.setIcon)(iconEl, "info");
    const popup = trigger.createDiv({ cls: "act-info-popup" });
    popup.createDiv({ text: "\u6570\u636E\u6765\u6E90", cls: "act-info-heading" });
    popup.createDiv({ text: info.source, cls: "act-info-text" });
    if (info.rule) {
      popup.createDiv({ text: "\u4F7F\u7528\u89C4\u5219", cls: "act-info-heading" });
      popup.createDiv({ text: info.rule, cls: "act-info-text" });
    }
    if (info.props && info.props.length > 0) {
      popup.createDiv({ text: "\u76F8\u5173\u5C5E\u6027", cls: "act-info-heading" });
      const tbl = popup.createEl("table", { cls: "act-info-props" });
      for (const p of info.props) {
        const row = tbl.createEl("tr");
        row.createEl("td", { text: p.name, cls: "act-info-prop-name" });
        row.createEl("td", { text: p.desc, cls: "act-info-prop-desc" });
      }
    }
    title.appendChild(trigger);
  }
  renderDataTable(container, columns, rows) {
    const wrapper = container.createDiv({ cls: "act-data-table-wrap" });
    const table = wrapper.createEl("table", { cls: "act-data-table" });
    const thead = table.createEl("thead");
    const hr = thead.createEl("tr");
    for (const col of columns) {
      const th = hr.createEl("th", { text: col.label });
      if (col.width) th.style.width = col.width;
    }
    const tbody = table.createEl("tbody");
    for (const row of rows) {
      const tr = tbody.createEl("tr");
      if (row.onClick) {
        tr.addClass("is-clickable");
        tr.addEventListener("click", row.onClick);
      }
      for (const col of columns) {
        const td = tr.createEl("td");
        if (col.cls) td.addClass(col.cls);
        td.setText(row.data[col.key] ?? "\u2014");
      }
    }
  }
  empty(container, text) {
    container.createDiv({ text, cls: "act-empty" });
  }
};
var ActWorkspacePlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    this.completedDidaSyncing = false;
    this.actionNoteSnapshots = /* @__PURE__ */ new Map();
    this.stampingPaths = /* @__PURE__ */ new Set();
    this.themeStyleEl = null;
    this.updateCheckTimes = [];
  }
  get F() {
    return this.settings.folders;
  }
  async onload() {
    await this.loadSettings();
    await this.applyTheme();
    this.addSettingTab(new ActWorkspaceSettingTab(this.app, this));
    this.registerView(VIEW_TYPE, (leaf) => new ActWorkspaceView(leaf, this));
    this.addRibbonIcon("layout-dashboard", "ACT \u5DE5\u4F5C\u53F0", () => this.activateView());
    this.addCommand({
      id: "open-act-workspace",
      name: "\u6253\u5F00 ACT \u5DE5\u4F5C\u53F0",
      callback: () => this.activateView()
    });
    this.registerDoneDateStamping();
    this.app.workspace.onLayoutReady(() => {
      if (!this.shouldOpenOnStartup()) return;
      const delay = isMobileRuntime() ? MOBILE_STARTUP_AUTO_OPEN_DELAY_MS : STARTUP_AUTO_OPEN_DELAY_MS;
      window.setTimeout(() => {
        void this.activateView();
      }, delay);
    });
  }
  shouldOpenOnStartup() {
    if (isMobileRuntime()) return this.settings.openOnMobileStartup;
    return this.settings.openOnDesktopStartup;
  }
  // 在任务笔记里直接点复选框时，Obsidian 原生只把 [ ] 改成 [x]，不写完成日期，
  // 于是这条记录永远进不了完成账本。这里补上日期，行为与工作台面板内勾选对齐。
  // 与 Tasks 插件互补：只处理「本次编辑中刚翻转、且这一行没有日期」的项；Tasks 已写过日期的直接跳过。
  registerDoneDateStamping() {
    this.registerEvent(this.app.workspace.on("file-open", (file) => {
      if (file && this.isActionNotePath(file.path)) void this.snapshotActionNote(file);
    }));
    this.registerEvent(this.app.vault.on("modify", (file) => {
      if (file instanceof import_obsidian.TFile && this.isActionNotePath(file.path)) void this.handleActionNoteModify(file);
    }));
    const active = this.app.workspace.getActiveFile();
    if (active && this.isActionNotePath(active.path)) void this.snapshotActionNote(active);
  }
  isActionNotePath(path) {
    if (!path.endsWith(".md")) return false;
    return [this.F.focusAction, this.F.activeAction, this.F.maybeAction].some((folder) => isUnderFolder(path, folder));
  }
  async snapshotActionNote(file) {
    try {
      this.actionNoteSnapshots.set(file.path, await this.app.vault.read(file));
    } catch (error) {
      console.error("[ACT] \u8BFB\u53D6\u4EFB\u52A1\u7B14\u8BB0\u5FEB\u7167\u5931\u8D25", error);
    }
  }
  async handleActionNoteModify(file) {
    if (!this.settings.autoStampDoneDate) return;
    if (this.stampingPaths.has(file.path)) return;
    let next;
    try {
      next = await this.app.vault.read(file);
    } catch {
      return;
    }
    const prev = this.actionNoteSnapshots.get(file.path);
    this.actionNoteSnapshots.set(file.path, next);
    if (prev === void 0 || prev === next) return;
    const dateStr = formatDateOnly(/* @__PURE__ */ new Date());
    const { content, stamped } = stampNewlyCompleted(prev, next, dateStr);
    if (stamped === 0) return;
    this.stampingPaths.add(file.path);
    try {
      await this.app.vault.modify(file, content);
      this.actionNoteSnapshots.set(file.path, content);
      new import_obsidian.Notice(`\u5DF2\u8BB0\u5B8C\u6210\u65E5\u671F \u2705 ${dateStr}${stamped > 1 ? `\uFF08${stamped} \u9879\uFF09` : ""}\uFF0C\u70B9\u300C\u4EFB\u52A1\u66F4\u65B0\u300D\u5165\u8D26`);
    } catch (error) {
      console.error("[ACT] \u8865\u5199\u5B8C\u6210\u65E5\u671F\u5931\u8D25", error);
    } finally {
      this.stampingPaths.delete(file.path);
    }
  }
  onunload() {
    this.removeThemeStyle();
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
  }
  async loadSettings() {
    const saved = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, saved);
    this.settings.dvPaths = Object.assign({}, DEFAULT_DV_PATHS, saved?.dvPaths);
    this.settings.folders = Object.assign({}, DEFAULT_FOLDERS, saved?.folders);
    this.settings.dida = Object.assign({}, DEFAULT_DIDA, saved?.dida);
    this.settings.templates = Object.assign({}, DEFAULT_SETTINGS.templates, saved?.templates);
    if (!saved?.terminalMode && getRuntimePlatform() === "win32") {
      this.settings.terminalMode = "system";
    }
    if (!saved?.dida?.completedLogTarget) {
      const template = this.settings.dida.completedLogPathTemplate;
      if (template === "{dailyFolder}/{dailyDate}.md") this.settings.dida.completedLogTarget = "daily";
      else if (template === "{weeklyFolder}/{weekId}.md") this.settings.dida.completedLogTarget = "weekly";
      else this.settings.dida.completedLogTarget = "custom";
    }
    this.settings.completedLog = Object.assign({}, DEFAULT_COMPLETED_LOG, saved?.completedLog);
    if (!saved?.completedLog && saved?.dida) {
      this.settings.completedLog.target = this.settings.dida.completedLogTarget;
      this.settings.completedLog.pathTemplate = this.settings.dida.completedLogPathTemplate;
      this.settings.completedLog.heading = this.settings.dida.completedLogHeading;
    }
    if (!["weekly", "daily", "custom"].includes(this.settings.completedLog.target)) {
      this.settings.completedLog.target = DEFAULT_COMPLETED_LOG.target;
    }
    this.settings.completedLog.dailyLookbackDays = Math.max(
      0,
      Math.min(90, Number(this.settings.completedLog.dailyLookbackDays) || DEFAULT_COMPLETED_LOG.dailyLookbackDays)
    );
    this.settings.cardSearchMode = Object.assign({}, saved?.cardSearchMode);
    this.settings.cardTags = Object.assign({}, saved?.cardTags);
    this.settings.progressLog = Object.assign({}, DEFAULT_PROGRESS_LOG, saved?.progressLog);
    if (![3, 7, 14].includes(this.settings.recentProgressLimit)) {
      this.settings.recentProgressLimit = DEFAULT_SETTINGS.recentProgressLimit;
    }
    if (!["split", "tab"].includes(this.settings.noteOpenMode)) {
      this.settings.noteOpenMode = DEFAULT_SETTINGS.noteOpenMode;
    }
    if (this.settings.terminalMode === "termy") this.settings.terminalMode = "terminal";
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async applyTheme() {
    if (!THEME_CSS) {
      console.error("[ACT] No embedded theme CSS available");
      return;
    }
    this.removeThemeStyle();
    this.themeStyleEl = document.createElement("style");
    this.themeStyleEl.id = "act-theme-style";
    this.themeStyleEl.textContent = THEME_CSS;
    document.head.appendChild(this.themeStyleEl);
  }
  removeThemeStyle() {
    if (this.themeStyleEl) {
      this.themeStyleEl.remove();
      this.themeStyleEl = null;
    }
  }
  async activateView() {
    const existing = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (existing.length > 0) {
      this.app.workspace.revealLeaf(existing[0]);
      return;
    }
    const leaf = this.app.workspace.getLeaf(false);
    await leaf.setViewState({ type: VIEW_TYPE, active: true });
    this.app.workspace.revealLeaf(leaf);
  }
  async completeDidaTask(taskId, projectId) {
    const token = await this.getDidaApiToken();
    if (!token) {
      new import_obsidian.Notice("\u6EF4\u7B54\u6E05\u5355 Access Token \u4E0D\u53EF\u7528");
      return false;
    }
    try {
      const response = await (0, import_obsidian.requestUrl)({
        url: `${DIDA_API_BASE}/open/v1/project/${encodeURIComponent(projectId)}/task/${encodeURIComponent(taskId)}/complete`,
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status >= 400) throw new Error(`Dida complete task failed: ${response.status}`);
      new import_obsidian.Notice("\u4EFB\u52A1\u5DF2\u5B8C\u6210");
      return true;
    } catch (error) {
      console.error("Failed to complete Dida task", error);
      new import_obsidian.Notice("\u5B8C\u6210\u4EFB\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 Access Token \u6216\u7F51\u7EDC\u8FDE\u63A5");
      return false;
    }
  }
  buildDidaDateTime(dueDate, dueTime) {
    const hasTime = Boolean(dueTime);
    return {
      value: `${dueDate}T${hasTime ? dueTime : "00:00"}:00+08:00`,
      isAllDay: !hasTime
    };
  }
  getDidaTaskPromptValue(task) {
    const dueDate = task.dueDate ?? task.startDate;
    const parsed = dueDate ? new Date(dueDate) : null;
    const validDate = parsed && !Number.isNaN(parsed.getTime()) ? parsed : null;
    return {
      title: normalizeInlineText(task.title),
      body: task.content ?? task.desc ?? "",
      dueDate: validDate ? formatDateOnly(validDate) : "",
      dueTime: validDate && !task.isAllDay ? `${pad(validDate.getHours())}:${pad(validDate.getMinutes())}` : "",
      priority: String(task.priority ?? 0)
    };
  }
  parseDidaPriority(value) {
    const priority = Number(value ?? 0);
    return [0, 1, 3, 5].includes(priority) ? priority : 0;
  }
  editDidaTask(task) {
    new NotePromptModal(
      this.app,
      "\u4FEE\u6539\u6EF4\u7B54\u4EFB\u52A1",
      "\u4EFB\u52A1\u6807\u9898",
      "\u8865\u5145\u4EFB\u52A1\u5907\u6CE8...",
      this.getDidaTaskPromptValue(task),
      () => void 0,
      () => void 0,
      async ({ title, body, dueDate, dueTime, priority }) => {
        const updated = await this.updateDidaTask(task, title, body, dueDate, dueTime, priority);
        if (!updated) throw new Error("Failed to update Dida task");
        const view = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]?.view;
        if (view instanceof ActWorkspaceView) {
          view.invalidateDidaActiveCache();
          await view.render();
        }
      },
      {
        helperText: "\u4EC5\u4FEE\u6539\u6EF4\u7B54\u6E05\u5355\u4E2D\u7684\u5F53\u524D\u4EFB\u52A1\uFF1B\u6E05\u5355\u4F4D\u7F6E\u4FDD\u6301\u4E0D\u53D8\u3002",
        dueDateLabel: "\u622A\u6B62\u65E5\u671F",
        dueTimeLabel: "\u622A\u6B62\u65F6\u95F4",
        priorityLabel: "\u4F18\u5148\u7EA7"
      }
    ).open();
  }
  async updateDidaTask(task, title, content, dueDate, dueTime, priority) {
    const token = await this.getDidaApiToken();
    if (!token) {
      new import_obsidian.Notice("\u6EF4\u7B54\u6E05\u5355 Access Token \u4E0D\u53EF\u7528\uFF0C\u8BF7\u5728\u63D2\u4EF6\u8BBE\u7F6E \u2192 \u6EF4\u7B54\u6E05\u5355\u4E2D\u914D\u7F6E");
      return false;
    }
    const projectId = task.projectId ?? "inbox";
    const payload = {
      ...task,
      id: task.id,
      projectId,
      title,
      content,
      priority: this.parseDidaPriority(priority),
      status: task.status ?? 0
    };
    if (dueDate) {
      const dateTime = this.buildDidaDateTime(dueDate, dueTime);
      payload.startDate = dateTime.value;
      payload.dueDate = dateTime.value;
      payload.isAllDay = dateTime.isAllDay;
    } else {
      delete payload.startDate;
      delete payload.dueDate;
      payload.isAllDay = true;
    }
    try {
      const response = await (0, import_obsidian.requestUrl)({
        url: `${DIDA_API_BASE}/open/v1/task/${encodeURIComponent(task.id)}`,
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (response.status >= 400) throw new Error(`Dida update task failed: ${response.status}`);
      new import_obsidian.Notice("\u6EF4\u7B54\u6E05\u5355\u4EFB\u52A1\u5DF2\u66F4\u65B0");
      return true;
    } catch (error) {
      console.error("Failed to update Dida task", error);
      new import_obsidian.Notice("\u66F4\u65B0\u6EF4\u7B54\u6E05\u5355\u4EFB\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 Access Token \u6216\u63A5\u53E3\u6743\u9650");
      return false;
    }
  }
  async deleteDidaTask(taskId, projectId) {
    const token = await this.getDidaApiToken();
    if (!token) {
      new import_obsidian.Notice("\u6EF4\u7B54\u6E05\u5355 Access Token \u4E0D\u53EF\u7528\uFF0C\u8BF7\u5728\u63D2\u4EF6\u8BBE\u7F6E \u2192 \u6EF4\u7B54\u6E05\u5355\u4E2D\u914D\u7F6E");
      return false;
    }
    try {
      const response = await (0, import_obsidian.requestUrl)({
        url: `${DIDA_API_BASE}/open/v1/project/${encodeURIComponent(projectId)}/task/${encodeURIComponent(taskId)}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status >= 400) throw new Error(`Dida delete task failed: ${response.status}`);
      new import_obsidian.Notice("\u6EF4\u7B54\u6E05\u5355\u4EFB\u52A1\u5DF2\u5220\u9664");
      return true;
    } catch (error) {
      console.error("Failed to delete Dida task", error);
      new import_obsidian.Notice("\u5220\u9664\u6EF4\u7B54\u6E05\u5355\u4EFB\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 Access Token \u6216\u63A5\u53E3\u6743\u9650");
      return false;
    }
  }
  async createDidaTask(title, content, dueDate, dueTime, priority) {
    const token = await this.getDidaApiToken();
    if (!token) {
      new import_obsidian.Notice("\u6EF4\u7B54\u6E05\u5355 Access Token \u4E0D\u53EF\u7528\uFF0C\u8BF7\u5728\u63D2\u4EF6\u8BBE\u7F6E \u2192 \u6EF4\u7B54\u6E05\u5355\u4E2D\u914D\u7F6E");
      return false;
    }
    const dateTime = dueDate ? this.buildDidaDateTime(dueDate, dueTime) : null;
    const body = {
      title,
      content,
      priority: this.parseDidaPriority(priority)
    };
    if (dateTime) {
      body.startDate = dateTime.value;
      body.dueDate = dateTime.value;
      body.isAllDay = dateTime.isAllDay;
    }
    try {
      const response = await (0, import_obsidian.requestUrl)({
        url: `${DIDA_API_BASE}/open/v1/task`,
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (response.status >= 400) throw new Error(`Dida create task failed: ${response.status}`);
      new import_obsidian.Notice("\u6EF4\u7B54\u6E05\u5355\u4EFB\u52A1\u5DF2\u521B\u5EFA");
      return true;
    } catch (error) {
      console.error("Failed to create Dida task", error);
      new import_obsidian.Notice("\u521B\u5EFA\u6EF4\u7B54\u6E05\u5355\u4EFB\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 Access Token \u6216\u63A5\u53E3\u6743\u9650");
      return false;
    }
  }
  async getDidaApiToken() {
    if (!this.settings.dida.enabled) return null;
    const settingsToken = this.settings.dida.accessToken?.trim();
    return settingsToken || null;
  }
  async fetchCompletedDidaTasks(token, from, to) {
    const response = await (0, import_obsidian.requestUrl)({
      url: `${DIDA_API_BASE}/open/v1/task/completed`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        startDate: from.toISOString(),
        endDate: to.toISOString()
      })
    });
    const data = response.json;
    if (Array.isArray(data)) return data.filter((t) => t.id && t.title);
    return [];
  }
  // 来源 1：滴答清单已完成任务 → 候选条目
  async collectDidaCandidates(options = {}) {
    if (this.completedDidaSyncing) return [];
    this.completedDidaSyncing = true;
    try {
      const token = await this.getDidaApiToken();
      if (!token) {
        if (!options.silent) new import_obsidian.Notice("\u6EF4\u7B54\u6E05\u5355 Access Token \u4E0D\u53EF\u7528");
        return [];
      }
      const until = /* @__PURE__ */ new Date();
      until.setHours(23, 59, 59, 999);
      const since = new Date(until);
      since.setDate(since.getDate() - this.settings.dida.lookbackDays);
      since.setHours(0, 0, 0, 0);
      const completedTasks = await this.fetchCompletedDidaTasks(token, since, until);
      const candidates = [];
      for (const task of completedTasks.sort((a, b) => (a.completedTime ?? "").localeCompare(b.completedTime ?? ""))) {
        const completedAt = new Date(task.completedTime ?? "");
        if (Number.isNaN(completedAt.getTime())) continue;
        const dateKey = formatDateOnly(completedAt);
        const text = normalizeInlineText(task.title);
        candidates.push({
          source: "\u6EF4\u7B54",
          text,
          dateKey,
          fromLabel: "\u6EF4\u7B54\u6E05\u5355 API",
          fromPath: "",
          targetPath: this.resolveCompletedLogPath(completedAt),
          line: `- [x] \u6EF4\u7B54\u6E05\u5355\uFF1A${text} \u2705 ${dateKey} <!-- dida:${task.id} -->`,
          legacyTags: []
        });
      }
      return candidates;
    } catch (error) {
      console.error("Failed to collect completed Dida tasks", error);
      if (!options.silent) new import_obsidian.Notice("\u8BFB\u53D6\u6EF4\u7B54\u6E05\u5355\u5B8C\u6210\u4EFB\u52A1\u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u5F00\u53D1\u8005\u63A7\u5236\u53F0");
      return [];
    } finally {
      this.completedDidaSyncing = false;
    }
  }
  // 来源 2：行动文件夹里已勾选的行动项 → 候选条目
  async collectActionCandidates() {
    const actionFolders = [
      { path: this.F.focusAction, label: "\u805A\u7126" },
      { path: this.F.activeAction, label: "\u8DDF\u8FDB" },
      { path: this.F.maybeAction, label: "\u4E5F\u8BB8" }
    ];
    const candidates = [];
    for (const af of actionFolders) {
      const folder = this.app.vault.getAbstractFileByPath(af.path);
      if (!(folder instanceof import_obsidian.TFolder)) continue;
      for (const child of collectMarkdownFiles(folder)) {
        const content = await this.app.vault.read(child);
        for (const line of content.split("\n")) {
          const doneMatch = line.match(/^\s*[-*]\s*\[[xX]\].*✅\s*(\d{4}-\d{2}-\d{2})/);
          if (!doneMatch) continue;
          const dateKey = doneMatch[1];
          const raw = line.replace(/^\s*[-*]\s*\[[xX]\]\s*/, "").replace(/[!！]{1,3}\s*/g, "").replace(/\s*✅\s*\d{4}-\d{2}-\d{2}.*$/, "").trim();
          if (!raw) continue;
          const text = normalizeInlineText(raw);
          const tagId = `${child.basename}::${text}`.replace(/[<>]/g, "");
          const legacyTagId = `${child.basename}::${text.slice(0, 30)}`.replace(/[<>]/g, "");
          candidates.push({
            source: af.label,
            text,
            dateKey,
            fromLabel: child.basename,
            fromPath: child.path,
            targetPath: this.resolveCompletedLogPath(/* @__PURE__ */ new Date(`${dateKey}T12:00:00`)),
            line: `- [x] ${af.label}\uFF1A${text}\uFF08${child.basename}\uFF09 \u2705 ${dateKey} <!-- action:${tagId} -->`,
            legacyTags: [`<!-- action:${legacyTagId} -->`]
          });
        }
      }
    }
    return candidates;
  }
  // 来源 3：日志里手动勾选的复选框 → 候选条目
  // 账本本身就是日志时跳过（否则自己写自己，会把日志原有勾选复制一份回去）
  async collectDailyLogCandidates() {
    if (this.isDailyLogTheLedger()) return [];
    const folder = this.app.vault.getAbstractFileByPath(this.F.daily);
    if (!(folder instanceof import_obsidian.TFolder)) return [];
    const earliest = /* @__PURE__ */ new Date();
    earliest.setHours(0, 0, 0, 0);
    earliest.setDate(earliest.getDate() - this.settings.completedLog.dailyLookbackDays);
    const candidates = [];
    for (const child of collectMarkdownFiles(folder)) {
      const dateKey = child.basename.match(/^(\d{4}-\d{2}-\d{2})/)?.[1];
      if (!dateKey) continue;
      const date = /* @__PURE__ */ new Date(`${dateKey}T12:00:00`);
      if (Number.isNaN(date.getTime()) || date < earliest) continue;
      const content = await this.app.vault.read(child);
      for (const line of content.split("\n")) {
        if (!/^\s*[-*]\s*\[[xX]\]/.test(line)) continue;
        if (/<!--\s*(?:action|dida|daily):/.test(line)) continue;
        const text = normalizeInlineText(
          line.replace(/^\s*[-*]\s*\[[xX]\]\s*/, "").replace(/[!！]{1,3}\s*/g, "").replace(/\s*✅\s*\d{4}-\d{2}-\d{2}\s*/, " ").trim()
        );
        if (!text) continue;
        const tagId = `${dateKey}::${text}`.replace(/[<>]/g, "");
        candidates.push({
          source: "\u65E5\u5FD7",
          text,
          dateKey,
          fromLabel: child.basename,
          fromPath: child.path,
          targetPath: this.resolveCompletedLogPath(date),
          line: `- [x] \u65E5\u5FD7\uFF1A${text} \u2705 ${dateKey} <!-- daily:${tagId} -->`,
          legacyTags: []
        });
      }
    }
    return candidates;
  }
  // 采集阶段的收口：剔除账本里已存在的，以及本批次内部的重复
  // 不做这一步，每次点「任务更新」都会把历史上同步过的全部列出来
  async filterPendingCandidates(candidates) {
    const contentCache = /* @__PURE__ */ new Map();
    const seenTags = /* @__PURE__ */ new Set();
    const pending = [];
    for (const candidate of candidates) {
      if (!contentCache.has(candidate.targetPath)) {
        const file = this.app.vault.getAbstractFileByPath(candidate.targetPath);
        contentCache.set(candidate.targetPath, file instanceof import_obsidian.TFile ? await this.app.vault.read(file) : "");
      }
      const content = contentCache.get(candidate.targetPath) ?? "";
      const primaryTag = candidate.line.match(/<!--\s*(?:dida|action|daily):[^>]+-->/)?.[0] ?? candidate.line;
      const batchKey = JSON.stringify([candidate.targetPath, primaryTag]);
      if (seenTags.has(batchKey)) continue;
      if (content.includes(primaryTag)) continue;
      if (candidate.legacyTags.some((tag) => content.includes(tag))) continue;
      seenTags.add(batchKey);
      pending.push(candidate);
    }
    return pending;
  }
  // 采集：三条来源合并 + 过滤，得到「待确认」清单。includeDida 为 false 时不发网络请求
  async collectPendingCandidates(options = {}) {
    const includeDida = options.includeDida !== false && this.settings.dida.enabled;
    const all = [
      ...includeDida ? await this.collectDidaCandidates({ silent: true }) : [],
      ...await this.collectActionCandidates(),
      ...await this.collectDailyLogCandidates()
    ];
    return await this.filterPendingCandidates(all);
  }
  // 写入：把用户确认后的条目落盘。按目标文件 + 完成日期分组，交给 insertCompletedLines 定位标题
  async commitCandidates(candidates) {
    const todayStr = formatDateOnly(/* @__PURE__ */ new Date());
    const byTarget = /* @__PURE__ */ new Map();
    for (const candidate of candidates) {
      const byDate = byTarget.get(candidate.targetPath) ?? /* @__PURE__ */ new Map();
      const bucket = byDate.get(candidate.dateKey) ?? [];
      bucket.push(candidate);
      byDate.set(candidate.dateKey, bucket);
      byTarget.set(candidate.targetPath, byDate);
    }
    let todayCount = 0;
    let backfillCount = 0;
    for (const [targetPath, byDate] of byTarget) {
      const anyDateKey = byDate.keys().next().value;
      const file = await this.ensureCompletedLogFile(targetPath, formatWeekId(/* @__PURE__ */ new Date(`${anyDateKey}T12:00:00`)));
      let content = await this.app.vault.read(file);
      let changed = false;
      for (const [dateKey, bucket] of byDate) {
        const date = /* @__PURE__ */ new Date(`${dateKey}T12:00:00`);
        const result = insertCompletedLines(content, date, bucket.map((c) => c.line), this.settings.completedLog.heading);
        if (result.added === 0) continue;
        content = result.content;
        changed = true;
        if (dateKey === todayStr) todayCount += result.added;
        else backfillCount += result.added;
      }
      if (changed) await this.app.vault.modify(file, content);
    }
    return { today: todayCount, backfill: backfillCount };
  }
  resolveCompletedLogPath(date) {
    const template = this.getCompletedLogPathTemplate();
    const rendered = renderDidaLogTemplate(
      template.replace(/\{weeklyFolder\}/g, this.F.weekly).replace(/\{dailyFolder\}/g, this.F.daily),
      date
    ).replace(/^\/+/, "");
    return rendered.endsWith(".md") ? rendered : `${rendered}.md`;
  }
  getCompletedLogPathTemplate() {
    if (this.settings.completedLog.target === "daily") return "{dailyFolder}/{dailyDate}.md";
    if (this.settings.completedLog.target === "custom") {
      return this.settings.completedLog.pathTemplate?.trim() || DEFAULT_COMPLETED_LOG.pathTemplate;
    }
    return "{weeklyFolder}/{weekId}.md";
  }
  describeCompletedLogTarget() {
    if (this.settings.completedLog.target === "daily") return "\u6BCF\u65E5\u65E5\u5FD7\uFF08\u6309\u5B8C\u6210\u65E5\u671F\u5199\u5165\u5BF9\u5E94\u65E5\u5FD7\uFF09";
    if (this.settings.completedLog.target === "custom") return `\u81EA\u5B9A\u4E49\u7B14\u8BB0\uFF08${this.settings.completedLog.pathTemplate || DEFAULT_COMPLETED_LOG.pathTemplate}\uFF09`;
    return "\u6BCF\u5468\u5468\u8BB0\uFF08\u6309\u5B8C\u6210\u65E5\u671F\u5199\u5165\u5BF9\u5E94\u5468\u8BB0\uFF09";
  }
  // 账本 = 日志时，「日志 → 账本」等于自己写自己，必须关闭该来源，否则会把日志原有的勾选复制一份回自己
  // 不能只看 target：自定义模板也可能指回日志文件夹（例如手填 {dailyFolder}/{dailyDate}.md），故按解析后的实际路径判断
  isDailyLogTheLedger() {
    if (this.settings.completedLog.target === "daily") return true;
    return isUnderFolder(this.resolveCompletedLogPath(/* @__PURE__ */ new Date()), this.F.daily);
  }
  async ensureCompletedLogFileForDate(date) {
    return await this.ensureCompletedLogFile(this.resolveCompletedLogPath(date), formatWeekId(date));
  }
  async ensureCompletedLogFile(path, weekId) {
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing instanceof import_obsidian.TFile) return existing;
    const defaultWeeklyPath = `${this.F.weekly}/${weekId}.md`;
    if (path === defaultWeeklyPath) return await this.ensureWeeklyFile(weekId);
    const parentPath = path.split("/").slice(0, -1).join("/");
    if (parentPath) await this.ensureVaultFolder(parentPath);
    await this.app.vault.create(path, "");
    const created = this.app.vault.getAbstractFileByPath(path);
    if (created instanceof import_obsidian.TFile) return created;
    throw new Error(`Failed to create completed log: ${path}`);
  }
  async ensureVaultFolder(path) {
    const parts = path.split("/").filter(Boolean);
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      const existing = this.app.vault.getAbstractFileByPath(current);
      if (existing instanceof import_obsidian.TFolder) continue;
      if (existing) throw new Error(`Cannot create folder because a file exists at: ${current}`);
      await this.app.vault.createFolder(current);
    }
  }
  async createMarkdownNote(folderPath, baseName, content) {
    await this.ensureVaultFolder(folderPath);
    let candidate = `${folderPath}/${safeFileName(baseName)}.md`;
    let index = 2;
    while (this.app.vault.getAbstractFileByPath(candidate)) {
      candidate = `${folderPath}/${safeFileName(baseName)}-${index}.md`;
      index += 1;
    }
    await this.app.vault.create(candidate, content.replace(/\s*$/, "\n"));
    const created = this.app.vault.getAbstractFileByPath(candidate);
    if (created instanceof import_obsidian.TFile) return created;
    throw new Error(`Failed to create note: ${candidate}`);
  }
  async buildCycleTemplate(year, cycle) {
    const cycleId = `${year}-${cycle}`;
    const ci = getCycleInfo(/* @__PURE__ */ new Date(), this.settings.cycleMode);
    const custom = await this.readTemplateFile(this.settings.templates?.cycle || "", {
      year: String(year),
      cycle,
      cycleId,
      totalWeeks: String(ci.totalWeeks)
    });
    if (custom !== null) return custom;
    return [
      `# ${cycleId} | \u5341\u4E8C\u5468\u76EE\u6807`,
      ``,
      `## \u76EE\u6807\u4E0E\u7B56\u7565`,
      ``,
      `### G1 - `,
      ``,
      `**\u6210\u529F\u6807\u51C6**\uFF1A`,
      ``,
      `- \u5173\u8054\u4EFB\u52A1\uFF1A`,
      ``,
      `## \u5468\u6267\u884C\u8BB0\u5F55`,
      ``,
      `## \u8C03\u6574\u8BB0\u5F55`,
      ``,
      `## \u5468\u671F\u603B\u7ED3`,
      ``
    ].join("\n");
  }
  async ensureCycleFile(year, cycle) {
    const path = `${this.F.cycle}/${year}-${cycle}.md`;
    await this.ensureVaultFolder(this.F.cycle);
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing instanceof import_obsidian.TFile) {
      const content = await this.app.vault.cachedRead(existing);
      if (!content.trim()) {
        await this.app.vault.modify(existing, await this.buildCycleTemplate(year, cycle));
      }
      return existing;
    }
    await this.app.vault.create(path, await this.buildCycleTemplate(year, cycle));
    const created = this.app.vault.getAbstractFileByPath(path);
    if (created instanceof import_obsidian.TFile) return created;
    throw new Error(`Failed to create cycle note: ${path}`);
  }
  async buildWeeklyTemplate(weekId) {
    const date = weekIdToDate(weekId);
    const { monday, sunday } = getWeekBounds(date);
    const range = `${monday.getMonth() + 1}\u6708${monday.getDate()}\u65E5 \u2014 ${sunday.getMonth() + 1}\u6708${sunday.getDate()}\u65E5`;
    const ci = getCycleInfo(monday, this.settings.cycleMode);
    const cycleId = `${weekId.split("-")[0]}-${ci.cycle}`;
    const weekOfCycle = String(ci.weekOfCycle);
    const custom = await this.readTemplateFile(this.settings.templates?.weekly || "", {
      weekId,
      range,
      cycleId,
      weekOfCycle,
      cycleName: cycleId.split("-")[1]
    });
    if (custom !== null) return custom;
    return [
      `# ${weekId}\uFF08${range}\uFF09`,
      ``,
      `\u5173\u8054\u5468\u671F\uFF1A[[${cycleId}]]`,
      ``,
      `## \u672C\u5468\u8BA1\u5212`,
      ``,
      `> ${cycleId.split("-")[1]} \u7B2C${weekOfCycle}\u5468`,
      ``,
      `- [ ] `,
      ``,
      `---`,
      ``,
      `## \u672C\u5468\u8981\u4E8B`,
      ``,
      ``,
      ``,
      `---`,
      ``,
      `## \u6BCF\u65E5\u8BB0\u5F55`,
      ``,
      ``,
      ``,
      `---`,
      ``,
      `## \u672C\u5468\u603B\u7ED3`,
      ``,
      ``,
      ``
    ].join("\n");
  }
  async ensureWeeklyFile(weekId) {
    const path = `${this.F.weekly}/${weekId}.md`;
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing instanceof import_obsidian.TFile) {
      const content = await this.app.vault.cachedRead(existing);
      if (!content.trim()) {
        await this.app.vault.modify(existing, await this.buildWeeklyTemplate(weekId));
      }
      return existing;
    }
    await this.app.vault.create(path, await this.buildWeeklyTemplate(weekId));
    const created = this.app.vault.getAbstractFileByPath(path);
    if (created instanceof import_obsidian.TFile) return created;
    throw new Error(`Failed to create weekly note: ${path}`);
  }
  async openPath(path) {
    await this.openPathInSide(path);
  }
  async appendNextAction(path, text) {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice("\u672A\u627E\u5230\u4EFB\u52A1\u7B14\u8BB0");
      return;
    }
    await this.app.vault.process(file, (content) => {
      const section = getNextActionSection(content);
      const todoLine = `- [ ] ${text}`;
      if (!section) return content + `
## \u4E0B\u6B65\u884C\u52A8

${todoLine}
`;
      const lines = content.split("\n");
      lines.splice(section.end, 0, todoLine);
      return lines.join("\n");
    });
    new import_obsidian.Notice("\u5DF2\u6DFB\u52A0\u5230\u4E0B\u6B65\u884C\u52A8");
  }
  async appendProgressToTask(path, text) {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian.TFile)) {
      new import_obsidian.Notice("\u672A\u627E\u5230\u4EFB\u52A1\u7B14\u8BB0");
      return;
    }
    await this.app.vault.process(file, (content) => appendProgressEntry(content, text, this.settings.progressLog));
    new import_obsidian.Notice("\u5DF2\u4FDD\u5B58\u5230\u8FDB\u5C55\u8BB0\u5F55");
  }
  async completeTaskActionItem(path, lineIndex) {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian.TFile) || lineIndex < 0) {
      new import_obsidian.Notice("\u672A\u627E\u5230\u53EF\u5B8C\u6210\u7684\u884C\u52A8\u9879");
      return;
    }
    const completedDate = formatDateOnly(/* @__PURE__ */ new Date());
    let changed = false;
    await this.app.vault.process(file, (content) => {
      const next = completeTaskActionLine(content, lineIndex, completedDate);
      changed = next !== content;
      return next;
    });
    if (!changed) {
      new import_obsidian.Notice("\u884C\u52A8\u9879\u5DF2\u7ECF\u662F\u5B8C\u6210\u72B6\u6001");
      return;
    }
    try {
      const pending = await this.collectPendingCandidates({ includeDida: false });
      if (pending.length === 0) {
        new import_obsidian.Notice("\u884C\u52A8\u9879\u5DF2\u5B8C\u6210");
        return;
      }
      await this.reviewAndCommitCandidates(pending);
    } catch (error) {
      console.error("\u540C\u6B65\u5B8C\u6210\u8BB0\u5F55\u5931\u8D25", error);
      new import_obsidian.Notice("\u884C\u52A8\u9879\u5DF2\u5B8C\u6210\uFF0C\u4F46\u8BFB\u53D6\u5F85\u540C\u6B65\u6E05\u5355\u5931\u8D25\uFF0C\u8BF7\u70B9\u300C\u4EFB\u52A1\u66F4\u65B0\u300D\u91CD\u8BD5");
    }
  }
  // 弹出确认清单 → 用户勾选 → 写入。无候选时只提示，不弹空窗
  async reviewAndCommitCandidates(pending, afterCommit) {
    if (pending.length === 0) {
      new import_obsidian.Notice("\u5DF2\u662F\u6700\u65B0\uFF0C\u65E0\u5F85\u540C\u6B65\u7684\u5B8C\u6210\u8BB0\u5F55");
      await afterCommit?.();
      return;
    }
    new SyncPreviewModal(
      this.app,
      pending,
      async (chosen) => {
        if (chosen.length === 0) {
          new import_obsidian.Notice("\u5DF2\u53D6\u6D88\uFF0C\u672A\u5199\u5165\u4EFB\u4F55\u8BB0\u5F55");
          await afterCommit?.();
          return;
        }
        try {
          const { today, backfill } = await this.commitCandidates(chosen);
          const parts = [];
          if (today > 0) parts.push(`\u4ECA\u65E5 ${today} \u6761`);
          if (backfill > 0) parts.push(`\u8865\u5F55\u5386\u53F2 ${backfill} \u6761`);
          new import_obsidian.Notice(parts.length > 0 ? `\u5DF2\u5199\u5165\u5B8C\u6210\u8D26\u672C\uFF1A${parts.join("\u3001")}` : "\u6CA1\u6709\u65B0\u589E\u8BB0\u5F55");
        } catch (error) {
          console.error("\u5199\u5165\u5B8C\u6210\u8D26\u672C\u5931\u8D25", error);
          new import_obsidian.Notice(`\u5199\u5165\u5931\u8D25\uFF1A${error instanceof Error ? error.message : String(error)}`);
        }
        await afterCommit?.();
      },
      (path) => this.openPathInSide(path)
    ).open();
  }
  async openPathInSide(path) {
    const openMode = this.settings.noteOpenMode;
    if (path.includes("#")) {
      await this.app.workspace.openLinkText(path, "", openMode);
      return;
    }
    const file = this.app.vault.getAbstractFileByPath(path);
    if (file instanceof import_obsidian.TFile) {
      const leaf = openMode === "split" ? this.app.workspace.getLeaf("split", "vertical") : this.app.workspace.getLeaf("tab");
      await leaf.openFile(file);
      this.app.workspace.setActiveLeaf(leaf, { focus: true });
      return;
    }
    await this.app.workspace.openLinkText(path, "", openMode);
  }
  async openOrCreateDaily(path) {
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing instanceof import_obsidian.TFile) {
      await this.openPath(path);
      return;
    }
    const template = await this.getDailyTemplate();
    await this.app.vault.create(path, template);
    await this.openPathInSide(path);
  }
  async readTemplateFile(path, vars) {
    if (!path) return null;
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof import_obsidian.TFile)) return null;
    let content = await this.app.vault.cachedRead(file);
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        content = content.replace(new RegExp(`\\{\\{${k}\\}\\}`, "g"), v);
      }
    }
    return content;
  }
  async buildTaskNoteContent(noteBody) {
    const now = /* @__PURE__ */ new Date();
    const created = formatDateOnly(now);
    const custom = await this.readTemplateFile(this.settings.templates?.taskNote || "", {
      created,
      body: noteBody || ""
    });
    let content = custom ?? `---
tags:
  - a-\u4EFB\u52A1\u7B14\u8BB0
created: ${created}
t-deadline:
priority:
AI \u5907\u6CE8:
---
## \u4E0B\u6B65\u884C\u52A8


## \u8FDB\u5C55\u8BB0\u5F55


## \u80CC\u666F\u76EE\u6807
`;
    if (content.includes("created:") && !content.match(/created:\s*\S/)) {
      content = content.replace(/created:[ \t]*/, `created: ${created}`);
    }
    if (noteBody) {
      // 2026-08-28 patch: 自动包装 body 为 `- [ ] ! 任务名` 格式，避免空任务项触发"全部完成"
      const wrapped = noteBody.split("\n").map((line) => {
        if (!line.trim()) return line;
        if (/^\s*[-*]\s*\[/.test(line)) return line;
        if (/^\s*[-*]\s+[!！]/.test(line)) return line;
        if (/^\s*#{1,6}\s+/.test(line)) return line;
        return `- [ ] ! ${line.trim()}`;
      }).join("\n");
      // 2026-08-28 patch v2: 必须把 body 插在 ## 下一步行动 heading **之后**，否则 parseMarkedActions 扫不到
      const headingMatch = content.match(/^##\s+(?:下一步行动|下步行动|行动清单)\s*$/m);
      if (headingMatch) {
        const insertAt = headingMatch.index + headingMatch[0].length;
        content = content.slice(0, insertAt) + `\n${wrapped}\n` + content.slice(insertAt);
      } else {
        const fmEnd = content.indexOf("---", content.indexOf("---") + 3);
        if (fmEnd !== -1) {
          const insertAt = content.indexOf("\n", fmEnd) + 1;
          content = content.slice(0, insertAt) + `
${wrapped}
` + content.slice(insertAt);
        } else {
          content = wrapped + "\n\n" + content;
        }
      }
    }
    return content;
  }
  async getDailyTemplate() {
    const customPath = this.settings.templates?.daily;
    const custom = await this.readTemplateFile(customPath || "");
    if (custom !== null) return custom;
    const fallbackPath = "+/_storage/42-template-\u6A21\u677F/time-\u65E5\u5FD7.md";
    const fallback = this.app.vault.getAbstractFileByPath(fallbackPath);
    if (fallback instanceof import_obsidian.TFile) return await this.app.vault.cachedRead(fallback);
    return `---
\u5DF2\u56DE\u987E: false
---

## \u4ECA\u65E5\u91CD\u70B9



---

## \u4ECA\u65E5\u603B\u7ED3



---

## \u4ECA\u65E5\u521B\u5EFA\u7684\u7B14\u8BB0

![[base-\u5F53\u65E5\u521B\u5EFA\u7B14\u8BB0.base]]
`;
  }
  getPromptDraft(key) {
    return this.settings.promptDrafts?.[key] ?? { title: "", body: "" };
  }
  async savePromptDraft(key, value) {
    const title = value.title.trim();
    const body = value.body.trim();
    const hasExtraValue = Boolean(value.dueDate || value.dueTime || value.priority && value.priority !== "0");
    this.settings.promptDrafts = { ...this.settings.promptDrafts ?? {} };
    if (!title && !body && !hasExtraValue) {
      delete this.settings.promptDrafts[key];
    } else {
      this.settings.promptDrafts[key] = value;
    }
    await this.saveSettings();
  }
  async clearPromptDraft(key) {
    if (!this.settings.promptDrafts?.[key]) return;
    this.settings.promptDrafts = { ...this.settings.promptDrafts };
    delete this.settings.promptDrafts[key];
    await this.saveSettings();
  }
  openNotePrompt(key, title, titlePlaceholder, bodyPlaceholder, onSubmit, options = {}) {
    new NotePromptModal(
      this.app,
      title,
      titlePlaceholder,
      bodyPlaceholder,
      this.getPromptDraft(key),
      (value) => this.savePromptDraft(key, value),
      () => this.clearPromptDraft(key),
      onSubmit,
      options
    ).open();
  }
  captureDidaTask() {
    this.openNotePrompt(
      "dida-task",
      "\u65B0\u589E\u6EF4\u7B54\u4EFB\u52A1",
      "\u4EFB\u52A1\u6807\u9898",
      "\u8865\u5145\u4EFB\u52A1\u5907\u6CE8...",
      async ({ title, body, dueDate, dueTime, priority }) => {
        const created = await this.createDidaTask(title, body, dueDate, dueTime, priority);
        if (!created) throw new Error("Failed to create Dida task");
        const view = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]?.view;
        if (view instanceof ActWorkspaceView) {
          view.invalidateDidaActiveCache();
          await view.render();
        }
      },
      {
        helperText: "\u4FDD\u5B58\u4F4D\u7F6E\uFF1A\u6EF4\u7B54\u6E05\u5355\u6536\u4EF6\u7BB1\u3002\u9700\u8981\u5F52\u7C7B\u65F6\uFF0C\u53EF\u5728\u6EF4\u7B54\u6E05\u5355\u4E2D\u79FB\u52A8\u5230\u5BF9\u5E94\u6E05\u5355\u3002",
        dueDateLabel: "\u622A\u6B62\u65E5\u671F",
        dueTimeLabel: "\u622A\u6B62\u65F6\u95F4",
        priorityLabel: "\u4F18\u5148\u7EA7",
        defaultDueDate: formatDateOnly(/* @__PURE__ */ new Date()),
        defaultPriority: "0"
      }
    );
  }
  captureIndexCard() {
    const choices = [
      { label: "\u5173\u952E\u5B57", folder: `${this.F.indexCard}/k-Topic-\u4E3B\u9898\u7D22\u5F15`, prefix: "k", titlePlaceholder: "\u5173\u952E\u5B57\u540D\u79F0" },
      { label: "\u4EBA\u7269", folder: `${this.F.indexCard}/b-Person-\u4EBA\u7269\u7D22\u5F15`, prefix: "b", titlePlaceholder: "\u4EBA\u7269\u540D\u79F0" }
    ];
    this.openChoiceModal("\u65B0\u589E\u7D22\u5F15", choices, (choice) => {
      this.openNotePrompt(
        `index-card-${choice.prefix}`,
        `\u65B0\u589E\u7D22\u5F15 \xB7 ${choice.label}`,
        choice.titlePlaceholder,
        "\u8865\u5145\u5B9A\u4E49\u3001\u76F8\u5173\u5361\u7247\u3001\u5907\u6CE8...",
        async ({ title, body }) => {
          const now = /* @__PURE__ */ new Date();
          const file = await this.createMarkdownNote(choice.folder, `${choice.prefix}-${safeFileName(title)}`, [
            "---",
            `created: ${formatDateOnly(now)}`,
            "---",
            "",
            `# ${title}`,
            "",
            body ? `${body}
` : ""
          ].join("\n"));
          await this.openPathInSide(file.path);
          const view = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]?.view;
          if (view instanceof ActWorkspaceView) await view.render();
        }
      );
    });
  }
  captureKnowledgeCard() {
    const choices = [
      { label: "\u6838\u5FC3\u5361\u7247", folder: this.F.mainCard, key: "main" },
      { label: "\u9605\u8BFB\u5361\u7247", folder: this.F.bibCard, key: "bib" }
    ];
    this.openChoiceModal("\u65B0\u589E\u5361\u7247", choices, (choice) => {
      this.openNotePrompt(
        `knowledge-card-${choice.key}`,
        `\u65B0\u589E\u5361\u7247 \xB7 ${choice.label}`,
        "\u5361\u7247\u6807\u9898",
        "\u5199\u5165\u5361\u7247\u5185\u5BB9\u3001\u6765\u6E90\u6216\u6458\u5F55...",
        async ({ title, body }) => {
          const now = /* @__PURE__ */ new Date();
          const file = await this.createMarkdownNote(choice.folder, safeFileName(title), [
            "---",
            `created: ${formatDateOnly(now)}`,
            "---",
            "",
            `# ${title}`,
            "",
            body ? `${body}
` : ""
          ].join("\n"));
          await this.openPathInSide(file.path);
          const view = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]?.view;
          if (view instanceof ActWorkspaceView) await view.render();
        }
      );
    });
  }
  openChoiceModal(title, choices, onChoose) {
    const modal = new import_obsidian.Modal(this.app);
    modal.titleEl.setText(title);
    modal.contentEl.addClass("act-choice-modal");
    for (const choice of choices) {
      const btn = modal.contentEl.createEl("button", { text: choice.label, cls: "act-folder-choice-btn", attr: { type: "button" } });
      btn.addEventListener("click", () => {
        modal.close();
        onChoose(choice);
      });
    }
    modal.open();
  }
  openDailyCapture() {
    const commands = this.app.commands;
    const opened = commands?.executeCommandById?.(MOBILE_DAILY_CAPTURE_COMMAND_ID);
    if (opened === false || !commands?.executeCommandById) {
      new import_obsidian.Notice("\u8BF7\u5148\u542F\u7528 ACT \u95EA\u5FF5\u7C3F \u63D2\u4EF6");
    }
  }
  async openSkillInTerminal(skillName) {
    const command = this.buildSkillCommand(skillName);
    await this.openCommandInTerminal(command, `\u5DF2\u6253\u5F00 Skill\uFF1A${skillName}`, `\u5DF2\u590D\u5236\u6307\u4EE4\u3002\u8BF7\u624B\u52A8\u7C98\u8D34\uFF1A${skillName}`);
  }
  async openCommandInTerminal(command, successMessage, fallbackMessage = "\u5DF2\u590D\u5236\u547D\u4EE4\uFF0C\u8BF7\u624B\u52A8\u7C98\u8D34\u5230\u7EC8\u7AEF") {
    const mode = this.settings.terminalMode;
    if (mode === "terminal") {
      const result = await this.openInTerminalPlugin(command);
      if (result.ok) {
        new import_obsidian.Notice(successMessage);
        return;
      }
      await this.copyText(command, `${describeTerminalPluginFailure(result.reason)}
\u5DF2\u590D\u5236\u547D\u4EE4\u5230\u526A\u8D34\u677F\uFF0C\u53EF\u624B\u52A8\u7C98\u8D34\u6267\u884C\u3002`);
      return;
    }
    if (mode === "system") {
      const opened = await this.openExternalTerminal(command);
      if (opened) {
        new import_obsidian.Notice(successMessage);
        return;
      }
      await this.copyText(command, "\u65E0\u6CD5\u542F\u52A8\u7CFB\u7EDF\u7EC8\u7AEF\u3002\u5DF2\u590D\u5236\u547D\u4EE4\u5230\u526A\u8D34\u677F\uFF0C\u53EF\u624B\u52A8\u7C98\u8D34\u6267\u884C\u3002");
      return;
    }
    await this.copyText(command, fallbackMessage);
  }
  // Terminal 插件的终端不是同步就绪的：Windows 上要写临时 .bat、经 cmd 启动、再 spawn Python resizer，
  // 比 macOS 直接 spawn zsh 慢得多。旧实现固定等 500ms 就去取 emulator，Windows 上基本等不到，
  // 于是静默降级到剪贴板 —— 表现就是「终端开了，但命令没进去」。
  // 这里改成轮询等待就绪，并且只认本次新开的那个终端，失败时返回具体原因供调用方提示。
  async openInTerminalPlugin(command) {
    const commands = this.app.commands;
    if (!commands?.executeCommandById) return { ok: false, reason: "no-command-api" };
    const readyPaste = (leaf) => {
      const termView = leaf?.view;
      const terminal = termView?.emulator?.terminal;
      if (!terminal || typeof terminal.paste !== "function") return null;
      return (text) => terminal.paste?.(text);
    };
    const before = new Set(this.app.workspace.getLeavesOfType(TERMINAL_VIEW_TYPE));
    commands.executeCommandById("terminal:open-terminal.integrated.root");
    const deadline = Date.now() + TERMINAL_READY_TIMEOUT_MS;
    let sawNewLeaf = false;
    while (Date.now() < deadline) {
      const leaves = this.app.workspace.getLeavesOfType(TERMINAL_VIEW_TYPE);
      const fresh = leaves.filter((leaf) => !before.has(leaf));
      if (fresh.length > 0) sawNewLeaf = true;
      const paste = readyPaste(fresh[fresh.length - 1]);
      if (paste) {
        paste(command + "\n");
        return { ok: true };
      }
      if (!sawNewLeaf && Date.now() > deadline - TERMINAL_READY_TIMEOUT_MS + TERMINAL_NEW_LEAF_GRACE_MS) {
        const reused = readyPaste(leaves[leaves.length - 1]);
        if (reused) {
          reused(command + "\n");
          return { ok: true };
        }
      }
      await new Promise((r) => setTimeout(r, TERMINAL_POLL_INTERVAL_MS));
    }
    return { ok: false, reason: sawNewLeaf ? "emulator-timeout" : "terminal-not-opened" };
  }
  buildSkillCommand(skillName) {
    const vaultPath = this.getVaultBasePath() ?? ".";
    const template = this.settings.skillCommandTemplate || DEFAULT_SETTINGS.skillCommandTemplate;
    const cli = detectSkillCli(template).bin;
    if (getRuntimePlatform() === "win32") {
      return `cd /d ${windowsCmdQuote(vaultPath)} && ${cli} -- ${windowsCmdQuote(skillName)}`;
    }
    return `cd ${shellQuote(vaultPath)} && ${cli} -- ${shellQuote(skillName)}`;
  }
  async copyText(text, notice = "\u5DF2\u590D\u5236") {
    try {
      await navigator.clipboard.writeText(text);
      new import_obsidian.Notice(notice);
      return;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      new import_obsidian.Notice(notice);
    }
  }
  getVaultBasePath() {
    const adapter = this.app.vault.adapter;
    return adapter.getBasePath?.() ?? "";
  }
  async openExternalTerminal(command) {
    const childProcess = getNodeChildProcess();
    if (!childProcess) return false;
    const platform = globalThis.process?.platform;
    if (platform === "darwin") {
      const script = command.trim() ? `tell application "Terminal"
activate
do script ${toAppleScriptString(command)}
end tell` : `tell application "Terminal"
activate
do script ""
end tell`;
      return new Promise((resolve) => {
        childProcess.execFile("osascript", ["-e", script], (error) => resolve(!error));
      });
    }
    if (platform === "win32") {
      if (!command.trim()) {
        return new Promise((resolve) => {
          childProcess.execFile("cmd", ["/c", "start", "", "cmd"], (error) => resolve(!error));
        });
      }
      const scriptPath = this.writeWindowsLauncherScript(command);
      if (!scriptPath) return false;
      return new Promise((resolve) => {
        childProcess.execFile("cmd", ["/c", "start", "", "cmd", "/k", scriptPath], (error) => resolve(!error));
      });
    }
    return false;
  }
  // 生成 %TEMP%\act-skill-<时间戳>.cmd。chcp 65001 解决中文乱码；where 自检把
  // 「CLI 不在 PATH」从黑窗一闪变成一句看得懂的提示
  writeWindowsLauncherScript(command) {
    const req = getNodeRequire();
    if (!req) return null;
    try {
      const fs = req("fs");
      const os = req("os");
      const path = req("path");
      const scriptPath = path.join(os.tmpdir(), `act-skill-${Date.now()}.cmd`);
      const cliName = command.match(/&&\s*([A-Za-z][A-Za-z0-9_.-]*)/)?.[1] ?? "";
      const lines = [
        "@echo off",
        "chcp 65001 >nul",
        cliName ? `where ${cliName} >nul 2>nul || (echo [ACT] \u672A\u627E\u5230\u547D\u4EE4 ${cliName}\uFF0C\u8BF7\u786E\u8BA4\u5DF2\u5B89\u88C5\u4E14\u5728 PATH \u4E2D\u3002 & echo. & pause & exit /b 1)` : "",
        command,
        ""
      ].filter((line) => line !== "");
      fs.writeFileSync(scriptPath, `${lines.join("\r\n")}\r
`, { encoding: "utf8" });
      return scriptPath;
    } catch (error) {
      console.error("[ACT] \u751F\u6210 Windows \u542F\u52A8\u811A\u672C\u5931\u8D25", error);
      return null;
    }
  }
  getUpdateRepo() {
    return normalizeGitHubRepo(this.settings.updateRepo) || DEFAULT_UPDATE_REPO;
  }
  getUpdateHeaders() {
    const headers = { "Accept": "application/vnd.github.v3+json", "User-Agent": "act-workspace" };
    const token = this.settings.updateToken?.trim();
    if (token) headers["Authorization"] = `token ${token}`;
    return headers;
  }
  // 从 Release 附件读取 manifest.json，保证「检查到的版本」与「实际下载的文件」来自同一发布
  async fetchLatestReleaseVersion(repo) {
    const resp = await (0, import_obsidian.requestUrl)({
      url: `https://github.com/${repo}/releases/latest/download/manifest.json`,
      headers: this.getUpdateHeaders()
    });
    const latest = resp.json?.version ?? "";
    if (!latest) throw new Error("\u65E0\u6CD5\u83B7\u53D6\u6700\u65B0\u7248\u672C\u53F7");
    return latest;
  }
  async sha256Hex(data) {
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  // 读取 Release 附件 checksums.json；旧版 Release 没有该文件时返回 null（跳过校验）
  async fetchReleaseChecksums(repo) {
    try {
      const resp = await (0, import_obsidian.requestUrl)({
        url: `https://github.com/${repo}/releases/latest/download/checksums.json`,
        headers: this.getUpdateHeaders()
      });
      const data = resp.json;
      if (data && typeof data === "object") return data;
    } catch {
    }
    return null;
  }
  isNewerVersion(latest, current) {
    const a = latest.split(".").map((n) => parseInt(n) || 0);
    const b = current.split(".").map((n) => parseInt(n) || 0);
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      const diff = (a[i] ?? 0) - (b[i] ?? 0);
      if (diff !== 0) return diff > 0;
    }
    return false;
  }
  async checkForUpdate() {
    const now = Date.now();
    this.updateCheckTimes = this.updateCheckTimes.filter((t) => now - t < UPDATE_CHECK_INTERVAL_MS);
    if (this.updateCheckTimes.length >= 2) {
      const oldest = this.updateCheckTimes[0];
      const remain = Math.ceil((UPDATE_CHECK_INTERVAL_MS - (now - oldest)) / 1e3);
      throw new Error(`\u8BF7 ${remain} \u79D2\u540E\u518D\u8BD5`);
    }
    this.updateCheckTimes.push(now);
    try {
      const latest = await this.fetchLatestReleaseVersion(this.getUpdateRepo());
      return { hasUpdate: this.isNewerVersion(latest, this.manifest.version), latest, current: this.manifest.version };
    } catch (err) {
      this.updateCheckTimes.pop();
      throw err;
    }
  }
  async performUpdate() {
    const repo = this.getUpdateRepo();
    const latest = await this.fetchLatestReleaseVersion(repo);
    if (!this.isNewerVersion(latest, this.manifest.version)) return latest;
    const pluginDir = this.manifest.dir;
    if (!pluginDir) throw new Error("\u65E0\u6CD5\u786E\u5B9A\u63D2\u4EF6\u76EE\u5F55");
    const requiredFiles = ["main.js", "manifest.json"];
    const optionalFiles = ["styles.css"];
    const downloaded = /* @__PURE__ */ new Map();
    for (const filename of requiredFiles) {
      const fileResp = await (0, import_obsidian.requestUrl)({
        url: `https://github.com/${repo}/releases/latest/download/${filename}`,
        headers: this.getUpdateHeaders()
      });
      if (!fileResp.arrayBuffer || fileResp.arrayBuffer.byteLength === 0) {
        throw new Error(`\u4E0B\u8F7D\u7684 ${filename} \u4E3A\u7A7A\uFF0C\u5DF2\u53D6\u6D88\u66F4\u65B0`);
      }
      downloaded.set(filename, fileResp.arrayBuffer);
    }
    for (const filename of optionalFiles) {
      try {
        const fileResp = await (0, import_obsidian.requestUrl)({
          url: `https://github.com/${repo}/releases/latest/download/${filename}`,
          headers: this.getUpdateHeaders()
        });
        if (fileResp.arrayBuffer && fileResp.arrayBuffer.byteLength > 0) {
          downloaded.set(filename, fileResp.arrayBuffer);
        }
      } catch {
      }
    }
    const checksums = await this.fetchReleaseChecksums(repo);
    if (checksums) {
      for (const [filename, data] of downloaded) {
        const expected = checksums[filename]?.toLowerCase();
        if (!expected) throw new Error(`checksums.json \u4E2D\u7F3A\u5C11 ${filename} \u7684\u6821\u9A8C\u503C\uFF0C\u5DF2\u53D6\u6D88\u66F4\u65B0`);
        const actual = await this.sha256Hex(data);
        if (actual !== expected) throw new Error(`${filename} \u6821\u9A8C\u5931\u8D25\uFF08\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u6216\u88AB\u7BE1\u6539\uFF09\uFF0C\u5DF2\u53D6\u6D88\u66F4\u65B0`);
      }
    }
    for (const [filename, data] of downloaded) {
      await this.app.vault.adapter.writeBinary(`${pluginDir}/${filename}`, data);
    }
    return latest;
  }
  async fetchReleaseNotes(version) {
    try {
      const repo = this.getUpdateRepo();
      const resp = await (0, import_obsidian.requestUrl)({
        url: `https://raw.githubusercontent.com/${repo}/main/releases.json`,
        headers: this.getUpdateHeaders()
      });
      const notes = resp.json ?? {};
      const items = notes[version];
      if (items && items.length > 0) return items.join("\n");
    } catch {
    }
    return "";
  }
};
var ActWorkspaceSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.activeTab = 0;
    // 折叠区：路径、模板这类「装好就不用动」的设置默认收起，避免新手一打开就面对几十个输入框。
    // 用原生 <details>，无需额外 JS；展开状态记在实例上，重渲染后不丢
    this.openFolds = /* @__PURE__ */ new Set();
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("act-settings");
    const tabs = ["\u884C\u52A8", "\u65F6\u95F4", "\u77E5\u8BC6", "\u6EF4\u7B54\u6E05\u5355", "Skill", "\u66F4\u65B0", "\u652F\u6301"];
    if (this.activeTab >= tabs.length) this.activeTab = 0;
    const tabBar = containerEl.createDiv({ cls: "act-settings-tab-bar" });
    const contentEl = containerEl.createDiv({ cls: "act-settings-content" });
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabBar.createDiv({
        text: tabs[i],
        cls: `act-settings-tab${i === this.activeTab ? " is-active" : ""}`
      });
      tab.addEventListener("click", () => {
        this.activeTab = i;
        tabBar.querySelectorAll(".act-settings-tab").forEach((el, idx) => {
          el.toggleClass("is-active", idx === i);
        });
        this.renderTabContent(contentEl);
      });
    }
    this.renderTabContent(contentEl);
    this.renderFooter(containerEl);
    this.addSettingsStyles(containerEl);
  }
  renderFooter(container) {
    container.createDiv({ cls: "act-settings-footer" });
  }
  renderUpdateSection(container) {
    const section = container.createDiv({ cls: "act-update-section" });
    const header = section.createDiv({ cls: "act-update-header" });
    header.createSpan({ text: `ACT \u5DE5\u4F5C\u53F0  v${this.plugin.manifest.version}`, cls: "act-update-version" });
    const statusEl = section.createDiv({ cls: "act-update-status" });
    section.createDiv({
      cls: "act-update-help",
      text: "\u70B9\u51FB\u300C\u68C0\u67E5\u66F4\u65B0\u300D\u83B7\u53D6\u6700\u65B0\u7248\u672C\u3002\u66F4\u65B0\u4E0D\u4F1A\u5F71\u54CD\u4F60\u7684\u914D\u7F6E\u548C\u6570\u636E\u3002"
    });
    const btnGroup = section.createDiv({ cls: "act-update-actions" });
    const checkBtn = btnGroup.createEl("button", { text: "\u68C0\u67E5\u66F4\u65B0", cls: "act-update-btn" });
    checkBtn.addEventListener("click", async () => {
      checkBtn.disabled = true;
      checkBtn.textContent = "\u68C0\u67E5\u4E2D...";
      statusEl.empty();
      try {
        const result = await this.plugin.checkForUpdate();
        if (result.hasUpdate) {
          statusEl.createSpan({ text: `\u53D1\u73B0\u65B0\u7248\u672C v${result.latest}`, cls: "act-update-available" });
          const preNotes = await this.plugin.fetchReleaseNotes(result.latest);
          if (preNotes) {
            const notesEl = statusEl.createDiv({ cls: "act-update-notes" });
            for (const line of preNotes.split("\n")) {
              notesEl.createDiv({ text: line, cls: "act-update-notes-item" });
            }
          }
          const updateBtn = statusEl.createEl("button", { text: "\u7ACB\u5373\u66F4\u65B0", cls: "act-update-btn is-primary" });
          updateBtn.addEventListener("click", async () => {
            updateBtn.disabled = true;
            updateBtn.textContent = "\u4E0B\u8F7D\u4E2D...";
            try {
              const version = await this.plugin.performUpdate();
              const notes = await this.plugin.fetchReleaseNotes(version);
              statusEl.empty();
              statusEl.createSpan({ text: `\u5DF2\u66F4\u65B0\u5230 v${version}\uFF0C\u8BF7\u91CD\u542F Obsidian \u6216\u91CD\u65B0\u52A0\u8F7D\u63D2\u4EF6`, cls: "act-update-success" });
              if (notes) {
                const notesEl = statusEl.createDiv({ cls: "act-update-notes" });
                notesEl.createDiv({ text: "\u66F4\u65B0\u5185\u5BB9\uFF1A", cls: "act-update-notes-title" });
                for (const line of notes.split("\n")) {
                  notesEl.createDiv({ text: line, cls: "act-update-notes-item" });
                }
              }
              new import_obsidian.Notice(`ACT \u5DE5\u4F5C\u53F0\u5DF2\u66F4\u65B0\u5230 v${version}\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u63D2\u4EF6`);
            } catch (err) {
              updateBtn.disabled = false;
              updateBtn.textContent = "\u7ACB\u5373\u66F4\u65B0";
              new import_obsidian.Notice(`\u66F4\u65B0\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
            }
          });
        } else {
          statusEl.createSpan({ text: "\u5DF2\u662F\u6700\u65B0\u7248\u672C \u2713", cls: "act-update-latest" });
        }
      } catch (err) {
        statusEl.createSpan({ text: `\u68C0\u67E5\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`, cls: "act-update-error" });
      } finally {
        checkBtn.disabled = false;
        checkBtn.textContent = "\u68C0\u67E5\u66F4\u65B0";
      }
    });
  }
  renderTabContent(container) {
    container.empty();
    switch (this.activeTab) {
      case 0:
        this.renderActionTab(container);
        break;
      case 1:
        this.renderTimeTab(container);
        break;
      case 2:
        this.renderCardTab(container);
        break;
      case 3:
        this.renderDidaTab(container);
        break;
      case 4:
        this.renderSkillTab(container);
        break;
      case 5:
        this.renderUpdateSection(container);
        break;
      case 6:
        this.renderSupportTab(container);
        break;
    }
  }
  renderSupportTab(container) {
    const card = container.createDiv({ cls: "act-support-card" });
    card.createEl("h2", { text: "\u652F\u6301\u4E0E\u8D44\u6E90" });
    card.createEl("p", { text: "\u516C\u4F17\u53F7\uFF1Akiven\u5927\u6C49\u5821\uFF08\u540C\u540D\uFF09", cls: "act-support-lead" });
    card.createEl("div", { text: "\u2B07\uFE0F", cls: "act-support-arrow" });
    const list = card.createDiv({ cls: "act-support-list" });
    list.createEl("p", { text: "\u5F80\u671F\u4E2A\u4EBA\u751F\u4EA7\u529B\u89C6\u9891\u5408\u96C6" });
    list.createEl("p", { text: "Obsidian \u5B98\u65B9\u540C\u6B65\u62FC\u8F66\uFF1A\u5DF2\u62FC 4000+" });
    list.createEl("p", { text: "Obsidian + AI \u7B14\u8BB0\u7CFB\u7EDF\u6559\u7A0B\uFF1A\u5B66\u5458 500+" });
    const blogLine = card.createEl("p", { cls: "act-support-blog" });
    blogLine.appendText("\u8BE6\u60C5\u4ECB\u7ECD\u4E0E\u8D2D\u4E70\uFF0C\u8BF7\u67E5\u770B\u4E2A\u4EBA\u535A\u5BA2\uFF1A");
    const link = blogLine.createEl("a", { text: "kivenbig.com", href: "https://kivenbig.com" });
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://kivenbig.com", "_blank");
    });
  }
  // 说明文案里的 CLI 名称跟随「CLI 工具」下拉框，避免出现「claude 或 codex」这种要用户自己二选一的写法
  // 判定条件必须与 buildSkillCommand / CLI 下拉框保持一致（都用 "claude '"），
  // 否则说明写着 Claude Code、实际执行的却是 codex
  currentCli() {
    return detectSkillCli(this.plugin.settings.skillCommandTemplate);
  }
  // 只渲染当前平台的说明。分「必做 / 点了会怎样 / 出问题时」三段：
  // 前置条件提到最前，推荐项唯一，备选项降级到排障段落
  renderSkillUsageGuide(container) {
    const { bin, label } = this.currentCli();
    const platform = getRuntimePlatform();
    const isWin = platform === "win32";
    const isMac = platform === "darwin";
    const envName = isMobileRuntime() ? "\u624B\u673A\u7AEF" : isWin ? "Windows" : isMac ? "macOS" : "Linux";
    const guide = container.createDiv({ cls: "act-settings-guide act-skill-usage-guide" });
    const head = guide.createDiv({ cls: "act-skill-guide-head" });
    head.createEl("h4", { text: "Skill \u4F7F\u7528\u8BF4\u660E" });
    head.createSpan({ text: `\u5F53\u524D\u73AF\u5883\uFF1A${envName}`, cls: "act-skill-guide-env" });
    const section = (title) => {
      const box = guide.createDiv({ cls: "act-skill-usage-platform" });
      box.createEl("strong", { text: title });
      return box.createEl("ul");
    };
    if (isMobileRuntime()) {
      const steps = section("\u624B\u673A\u7AEF");
      steps.createEl("li", { text: `\u624B\u673A\u7AEF\u65E0\u6CD5\u542F\u52A8\u7EC8\u7AEF\uFF0C${label} \u4E5F\u4E0D\u80FD\u5728\u624B\u673A\u4E0A\u8FD0\u884C\u3002` });
      steps.createEl("li", { text: "\u70B9 Skill \u6309\u94AE\u53EA\u4F1A\u628A\u547D\u4EE4\u590D\u5236\u5230\u526A\u8D34\u677F\uFF0C\u9700\u8981\u56DE\u5230\u7535\u8111\u4E0A\u6267\u884C\u3002" });
      return;
    }
    const must = section("\u5FC5\u505A");
    must.createEl("li", {
      text: isWin ? `\u786E\u8BA4\u5DF2\u5B89\u88C5 ${label}\uFF1A\u5728\u547D\u4EE4\u63D0\u793A\u7B26\u6216 PowerShell \u8FD0\u884C ${bin} --version` : `\u786E\u8BA4\u5DF2\u5B89\u88C5 ${label}\uFF1A\u5728\u7EC8\u7AEF\u8FD0\u884C ${bin} --version`
    });
    must.createEl("li", {
      text: isWin ? "\u7EC8\u7AEF\u6A21\u5F0F\u9009\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D\u2014\u2014Windows \u4E0A\u552F\u4E00\u4E0D\u9700\u8981\u989D\u5916\u4F9D\u8D56\u7684\u65B9\u5F0F\u3002" : "\u7EC8\u7AEF\u6A21\u5F0F\u9009\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D\uFF08\u76F4\u63A5\u6253\u5F00 macOS Terminal\uFF09\u6216\u300CTerminal \u63D2\u4EF6\u300D\uFF08\u5728 Obsidian \u5185\u5D4C\u7EC8\u7AEF\u91CC\u8FD0\u884C\uFF09\uFF0C\u4E24\u8005\u90FD\u53EF\u7528\u3002"
    });
    const expect = section("\u70B9\u4E86\u4F1A\u600E\u6837");
    expect.createEl("li", { text: `\u7EC8\u7AEF\u6253\u5F00 \u2192 \u81EA\u52A8\u8FDB\u5165 Vault \u76EE\u5F55 \u2192 \u542F\u52A8 ${label} \u2192 \u6280\u80FD\u540D\u5DF2\u586B\u597D\u3002` });
    expect.createEl("li", { text: "\u5982\u679C\u7EC8\u7AEF\u6CA1\u6253\u5F00\u3001\u6216\u6253\u5F00\u540E\u662F\u7A7A\u7684\uFF0C\u8BF4\u660E\u6CA1\u6210\u529F\uFF0C\u770B\u4E0B\u9762\u4E00\u6BB5\u3002" });
    const trouble = section("\u51FA\u95EE\u9898\u65F6");
    if (isWin) {
      trouble.createEl("li", { text: "\u63D0\u793A\u300C\u7EC8\u7AEF\u7F29\u653E\u5668\u610F\u5916\u9000\u51FA\uFF1A9009\u300D\u2192 \u8FD9\u662F Terminal \u63D2\u4EF6\u7F3A Python\u3002\u628A\u7EC8\u7AEF\u6A21\u5F0F\u6539\u4E3A\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D\u5373\u53EF\u7ED5\u5F00\uFF08\u8BE5\u63D2\u4EF6\u8BBE\u7F6E\u91CC\u6CA1\u6709 Python \u5B57\u6BB5\uFF0C\u53EA\u80FD\u6539\u539F\u59CB JSON\uFF0C\u4E0D\u63A8\u8350\u6298\u817E\uFF09\u3002" });
      trouble.createEl("li", { text: `\u7EC8\u7AEF\u95EA\u4E00\u4E0B\u5C31\u5173\u3001\u6216\u63D0\u793A\u300C\u4E0D\u662F\u5185\u90E8\u6216\u5916\u90E8\u547D\u4EE4\u300D\u2192 ${bin} \u4E0D\u5728 PATH \u4E0A\u3002\u5148\u5728\u547D\u4EE4\u63D0\u793A\u7B26\u786E\u8BA4 ${bin} --version \u80FD\u8DD1\u3002` });
    } else {
      trouble.createEl("li", { text: "\u63D0\u793A\u300C\u7EC8\u7AEF\u5DF2\u6253\u5F00\u4F46\u672A\u80FD\u5C31\u7EEA\u300D\u2192 Terminal \u63D2\u4EF6\u7684\u5185\u5D4C\u7EC8\u7AEF\u6CA1\u8D77\u6765\uFF0C\u6539\u7528\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D\u91CD\u8BD5\u3002" });
      trouble.createEl("li", { text: `\u7EC8\u7AEF\u63D0\u793A command not found: ${bin} \u2192 \u8BE5\u547D\u4EE4\u4E0D\u5728 PATH \u4E0A\u3002\u82E5\u4F60\u662F\u7528 shell \u51FD\u6570\u6216\u522B\u540D\u5305\u88C5\u7684\uFF0C\u8BF7\u6539\u7528\u300C\u4EC5\u590D\u5236\u547D\u4EE4\u300D\u624B\u52A8\u7C98\u8D34\u3002` });
    }
    trouble.createEl("li", { text: "\u60F3\u7528\u81EA\u5DF1\u7684\u7EC8\u7AEF\u6216\u8FDC\u7A0B\u73AF\u5883 \u2192 \u9009\u300C\u4EC5\u590D\u5236\u547D\u4EE4\u300D\uFF0C\u70B9 Skill \u540E\u624B\u52A8\u7C98\u8D34\u6267\u884C\u3002" });
  }
  collapsible(container, title, hint) {
    const details = container.createEl("details", { cls: "act-fold" });
    if (this.openFolds.has(title)) details.setAttribute("open", "");
    details.addEventListener("toggle", () => {
      if (details.hasAttribute("open")) this.openFolds.add(title);
      else this.openFolds.delete(title);
    });
    const summary = details.createEl("summary", { cls: "act-fold-summary" });
    summary.createSpan({ text: title, cls: "act-fold-title" });
    summary.createSpan({ text: hint, cls: "act-fold-hint" });
    return details.createDiv({ cls: "act-fold-body" });
  }
  getVaultFolders() {
    const folders = [];
    const recurse = (folder) => {
      if (folder.path) folders.push(folder);
      for (const child of folder.children) {
        if (child instanceof import_obsidian.TFolder) recurse(child);
      }
    };
    recurse(this.app.vault.getRoot());
    return folders.sort((a, b) => a.path.localeCompare(b.path, "zh-CN"));
  }
  folderSetting(container, key, label, desc) {
    new import_obsidian.Setting(container).setName(label).setDesc(desc).addSearch((search) => {
      const folders = this.getVaultFolders();
      const currentValue = this.plugin.settings.folders[key];
      const listId = `act-folder-${key}`;
      const optionsEl = container.createEl("datalist");
      optionsEl.id = listId;
      for (const folder of folders) {
        optionsEl.createEl("option", { attr: { value: folder.path } });
      }
      search.inputEl.setAttribute("list", listId);
      search.inputEl.setAttribute("autocomplete", "off");
      search.setPlaceholder(DEFAULT_FOLDERS[key]).setValue(currentValue).onChange(async (value) => {
        this.plugin.settings.folders[key] = value;
        await this.plugin.saveSettings();
      });
      search.inputEl.addEventListener("change", async () => {
        const value = search.inputEl.value;
        if (value !== this.plugin.settings.folders[key]) {
          this.plugin.settings.folders[key] = value;
          await this.plugin.saveSettings();
        }
      });
    });
  }
  templateSetting(container, key, label, desc) {
    new import_obsidian.Setting(container).setName(label).setDesc(desc).addSearch((search) => {
      const files = this.plugin.app.vault.getMarkdownFiles().map((f) => f.path).sort();
      const listId = `act-tpl-${key}`;
      const optionsEl = container.createEl("datalist");
      optionsEl.id = listId;
      for (const p of files) {
        optionsEl.createEl("option", { attr: { value: p } });
      }
      search.inputEl.setAttribute("list", listId);
      search.inputEl.setAttribute("autocomplete", "off");
      if (!this.plugin.settings.templates) this.plugin.settings.templates = { taskNote: "", cycle: "", weekly: "", daily: "" };
      search.setPlaceholder("\u7559\u7A7A\u4F7F\u7528\u5185\u7F6E\u6A21\u677F").setValue(this.plugin.settings.templates[key]).onChange(async (value) => {
        this.plugin.settings.templates[key] = value;
        await this.plugin.saveSettings();
      });
      search.inputEl.addEventListener("change", async () => {
        const value = search.inputEl.value;
        if (value !== this.plugin.settings.templates[key]) {
          this.plugin.settings.templates[key] = value;
          await this.plugin.saveSettings();
        }
      });
    });
  }
  renderActionTab(container) {
    container.createEl("h3", { text: "\u901A\u7528" });
    container.createDiv({
      text: `\u5F53\u524D\u8FD0\u884C\u73AF\u5883\uFF1A${isMobileRuntime() ? "\u624B\u673A\u7AEF" : "\u7535\u8111\u7AEF"}\u3002\u542F\u52A8\u5F00\u5173\u4E24\u7AEF\u72EC\u7ACB\u8BBE\u7F6E\uFF0C\u4E92\u4E0D\u5F71\u54CD\u3002`,
      cls: "setting-item-description"
    });
    new import_obsidian.Setting(container).setName("\u624B\u673A\u7AEF\u542F\u52A8\u65F6\u6253\u5F00").setDesc("\u5728\u624B\u673A\u7AEF\u6253\u5F00 Obsidian \u540E\uFF0C\u81EA\u52A8\u8FDB\u5165 ACT \u5DE5\u4F5C\u53F0\u3002").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.openOnMobileStartup);
      toggle.onChange(async (value) => {
        this.plugin.settings.openOnMobileStartup = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(container).setName("\u7535\u8111\u7AEF\u542F\u52A8\u65F6\u6253\u5F00").setDesc("\u5728\u7535\u8111\u7AEF\u6253\u5F00 Obsidian \u540E\uFF0C\u81EA\u52A8\u8FDB\u5165 ACT \u5DE5\u4F5C\u53F0\u3002\u5173\u95ED\u540E\u53EF\u7528\u5DE6\u4FA7\u680F\u56FE\u6807\u6216\u547D\u4EE4\u9762\u677F\u300C\u6253\u5F00 ACT \u5DE5\u4F5C\u53F0\u300D\u624B\u52A8\u8FDB\u5165\u3002").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.openOnDesktopStartup);
      toggle.onChange(async (value) => {
        this.plugin.settings.openOnDesktopStartup = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(container).setName("\u7B14\u8BB0\u6253\u5F00\u65B9\u5F0F").setDesc("\u5728\u5DE5\u4F5C\u53F0\u91CC\u70B9\u5F00\u4E00\u7BC7\u7B14\u8BB0\u65F6\uFF0C\u662F\u5728\u53F3\u8FB9\u5206\u680F\u6253\u5F00\uFF08\u5DE5\u4F5C\u53F0\u4ECD\u53EF\u89C1\uFF09\uFF0C\u8FD8\u662F\u65B0\u5F00\u4E00\u4E2A\u6807\u7B7E\u9875\u3002").addDropdown((dropdown) => {
      dropdown.addOption("split", "\u53F3\u4FA7\u5206\u680F");
      dropdown.addOption("tab", "\u65B0\u6807\u7B7E\u9875");
      dropdown.setValue(this.plugin.settings.noteOpenMode);
      dropdown.onChange(async (value) => {
        this.plugin.settings.noteOpenMode = value;
        await this.plugin.saveSettings();
      });
    });
    container.createEl("h3", { text: "\u4EFB\u52A1\u6E05\u5355" });
    new import_obsidian.Setting(container).setName("\u9690\u85CF\u5DF2\u5B8C\u6210\u7684\u4EFB\u52A1\u7B14\u8BB0").setDesc("\u4E00\u7BC7\u4EFB\u52A1\u7B14\u8BB0\u91CC\u7684\u4E8B\u5168\u90FD\u505A\u5B8C\u540E\uFF0C\u5C31\u4E0D\u518D\u663E\u793A\u5728\u300C\u4EFB\u52A1\u6E05\u5355 \xB7 \u4ECA\u65E5\u300D\u91CC\uFF0C\u8BA9\u5217\u8868\u66F4\u5E72\u51C0\u3002\u5173\u95ED\u5219\u4E00\u76F4\u663E\u793A\u3002").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.hideCompletedNotes);
      toggle.onChange(async (value) => {
        this.plugin.settings.hideCompletedNotes = value;
        await this.plugin.saveSettings();
      });
    });
    const paths = this.collapsible(container, "\u6587\u4EF6\u5939\u4E0E\u6A21\u677F\u8DEF\u5F84", "\u5DF2\u9884\u7F6E\uFF0C\u901A\u5E38\u65E0\u9700\u4FEE\u6539");
    paths.createDiv({
      text: "\u6A21\u677F\u91CC\u5DF2\u7ECF\u914D\u597D\u4E86\u3002\u53EA\u6709\u4F60\u81EA\u5DF1\u6539\u8FC7\u6587\u4EF6\u5939\u540D\u5B57\uFF0C\u624D\u9700\u8981\u5728\u8FD9\u91CC\u8DDF\u7740\u6539\u3002\u6539\u5B8C\u8981\u91CD\u65B0\u6253\u5F00\u5DE5\u4F5C\u53F0\u624D\u751F\u6548\u3002",
      cls: "setting-item-description"
    });
    this.folderSetting(paths, "inbox", "\u6536\u4EF6\u7BB1", "\u60F3\u6CD5\u5148\u6254\u8FD9\u91CC\uFF0C\u4E4B\u540E\u518D\u6574\u7406");
    this.folderSetting(paths, "focusAction", "\u805A\u7126\u627F\u8BFA", "\u5F53\u524D\u6700\u91CD\u8981\u3001\u8981\u6301\u7EED\u63A8\u8FDB\u7684\u4E8B");
    this.folderSetting(paths, "activeAction", "\u6D3B\u8DC3\u8DDF\u8FDB", "\u5728\u505A\uFF0C\u4F46\u6CA1\u90A3\u4E48\u7D27\u6025\u7684\u4E8B");
    this.folderSetting(paths, "maybeAction", "\u5C06\u6765\u4E5F\u8BB8", "\u4EE5\u540E\u53EF\u80FD\u505A\uFF0C\u73B0\u5728\u5148\u4E0D\u63A8\u8FDB");
    this.folderSetting(paths, "thought", "\u95EA\u5FF5", "\u968F\u624B\u8BB0\u4E0B\u7684\u4E00\u53E5\u8BDD\u60F3\u6CD5");
    this.templateSetting(paths, "taskNote", "\u4EFB\u52A1\u7B14\u8BB0\u6A21\u677F", "\u65B0\u5EFA\u4EFB\u52A1\u7B14\u8BB0\u65F6\u5957\u7528\u7684\u6837\u5F0F\u3002\u7559\u7A7A\u5C31\u7528\u63D2\u4EF6\u81EA\u5E26\u7684\uFF0C\u4E00\u6837\u80FD\u7528\u3002");
    const done = this.collapsible(container, "\u5B8C\u6210\u8BB0\u5F55", "\u5B8C\u6210\u7684\u4E8B\u8BB0\u5230\u54EA\u7BC7\u7B14\u8BB0");
    done.createDiv({
      text: "\u4F60\u5B8C\u6210\u4E00\u4EF6\u4E8B\uFF0C\u53EF\u80FD\u662F\u5728\u6EF4\u7B54\u6E05\u5355\u91CC\u6253\u52FE\u3001\u5728\u5DE5\u4F5C\u53F0\u70B9\u590D\u9009\u6846\u3001\u6216\u5728\u65E5\u5FD7\u91CC\u6253\u52FE\u3002\u8FD9\u4E09\u79CD\u90FD\u4F1A\u88AB\u6536\u62E2\u5199\u8FDB\u540C\u4E00\u7BC7\u7B14\u8BB0\uFF08\u9ED8\u8BA4\u662F\u672C\u5468\u5468\u8BB0\uFF09\uFF0C\u5DE5\u4F5C\u53F0\u7684\u300C\u4ECA\u65E5\u5DF2\u5B8C\u6210\u300D\u5C31\u662F\u8BFB\u90A3\u7BC7\u7B14\u8BB0\u3002",
      cls: "setting-item-description"
    });
    new import_obsidian.Setting(done).setName("\u5728\u4EFB\u52A1\u7B14\u8BB0\u91CC\u6253\u52FE\u65F6\uFF0C\u81EA\u52A8\u8865\u4E0A\u5B8C\u6210\u65E5\u671F").setDesc("Obsidian \u81EA\u5E26\u7684\u590D\u9009\u6846\u6253\u52FE\u540E\u53EA\u4F1A\u53D8\u6210 [x]\uFF0C\u4E0D\u8BB0\u65E5\u671F\uFF0C\u63D2\u4EF6\u5C31\u4E0D\u77E5\u9053\u5B83\u662F\u54EA\u5929\u5B8C\u6210\u7684\uFF0C\u8FD9\u6761\u4E5F\u5C31\u6536\u4E0D\u8FDB\u6765\u3002\u5F00\u542F\u540E\u4F1A\u81EA\u52A8\u8865\u4E00\u4E2A \u2705 \u65E5\u671F\u3002\u53EA\u5904\u7406\u4F60\u65B0\u6253\u7684\u52FE\uFF0C\u4EE5\u524D\u5C31\u5DF2\u7ECF\u52FE\u4E0A\u7684\u4E0D\u4F1A\u88AB\u6539\u52A8\u3002\u88C5\u4E86 Tasks \u63D2\u4EF6\u7684\u8BDD\u7531\u5B83\u6765\u5199\uFF0C\u4E0D\u4F1A\u91CD\u590D\u3002").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.autoStampDoneDate);
      toggle.onChange(async (value) => {
        this.plugin.settings.autoStampDoneDate = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(done).setName("\u5B8C\u6210\u8BB0\u5F55\u5199\u5230\u54EA\u7BC7\u7B14\u8BB0").setDesc("\u9ED8\u8BA4\u5199\u8FDB\u5F53\u5468\u5468\u8BB0\uFF0C\u505A\u5468\u56DE\u987E\u65F6\u6B63\u597D\u80FD\u770B\u5230\u3002\u4E5F\u53EF\u4EE5\u6539\u6210\u5199\u8FDB\u5F53\u5929\u65E5\u5FD7\uFF0C\u6216\u81EA\u5DF1\u6307\u5B9A\u4E00\u7BC7\u3002").addDropdown((dropdown) => {
      dropdown.addOption("weekly", "\u672C\u5468\u5468\u8BB0\uFF08\u63A8\u8350\uFF09");
      dropdown.addOption("daily", "\u5F53\u5929\u65E5\u5FD7");
      dropdown.addOption("custom", "\u81EA\u5DF1\u6307\u5B9A\u4E00\u7BC7");
      dropdown.setValue(this.plugin.settings.completedLog.target);
      dropdown.onChange(async (value) => {
        this.plugin.settings.completedLog.target = value;
        if (value === "weekly") this.plugin.settings.completedLog.pathTemplate = "{weeklyFolder}/{weekId}.md";
        if (value === "daily") this.plugin.settings.completedLog.pathTemplate = "{dailyFolder}/{dailyDate}.md";
        await this.plugin.saveSettings();
        this.renderTabContent(container);
      });
    });
    const targetHelp = done.createDiv({ cls: "setting-item-description" });
    if (this.plugin.settings.completedLog.target === "weekly") {
      targetHelp.setText("\u73B0\u5728\u7684\u89C4\u5219\uFF1A\u6309\u5B8C\u6210\u65E5\u671F\u5199\u8FDB\u5BF9\u5E94\u90A3\u4E00\u5468\u7684\u5468\u8BB0\uFF0C\u4F8B\u5982 2026-W25.md\u3002\u65E5\u5FD7\u91CC\u6253\u7684\u52FE\u4E5F\u4F1A\u6C47\u603B\u8FC7\u53BB\u3002");
    } else if (this.plugin.settings.completedLog.target === "daily") {
      targetHelp.setText("\u73B0\u5728\u7684\u89C4\u5219\uFF1A\u6309\u5B8C\u6210\u65E5\u671F\u5199\u8FDB\u5F53\u5929\u65E5\u5FD7\uFF0C\u4F8B\u5982 2026-06-15\uFF08\u5468\u4E00\uFF09.md\u3002\u6CE8\u610F\uFF1A\u8FD9\u6837\u5468\u8BB0\u91CC\u5C31\u6CA1\u6709\u5B8C\u6210\u8BB0\u5F55\u4E86\uFF0C\u505A\u5468\u56DE\u987E\u65F6\u9700\u8981\u81EA\u5DF1\u6C47\u603B\u3002");
    } else {
      targetHelp.setText("\u73B0\u5728\u7684\u89C4\u5219\uFF1A\u5168\u90E8\u5199\u8FDB\u4F60\u5728\u4E0B\u9762\u586B\u7684\u90A3\u7BC7\u7B14\u8BB0\u3002\u9002\u5408\u5355\u72EC\u7EF4\u62A4\u4E00\u4EFD\u5B8C\u6210\u6E05\u5355\u3002");
      new import_obsidian.Setting(done).setName("\u6307\u5B9A\u7B14\u8BB0\u7684\u8DEF\u5F84").setDesc("\u53EF\u4EE5\u7528\u8FD9\u4E9B\u5360\u4F4D\u7B26\u81EA\u52A8\u5E26\u4E0A\u65E5\u671F\uFF1A{weekId} \u5468\u8BB0\u7F16\u53F7\u3001{date} \u5B8C\u6210\u65E5\u671F\u3001{dailyDate} \u65E5\u5FD7\u6587\u4EF6\u540D\u3001{year}/{month}/{day} \u5E74\u6708\u65E5\u3002\u4F8B\uFF1A40-storage/\u5B8C\u6210\u8BB0\u5F55-{year}-{month}.md").addText((text) => {
        text.setPlaceholder("{weeklyFolder}/{weekId}.md");
        text.setValue(this.plugin.settings.completedLog.pathTemplate);
        text.inputEl.style.width = "100%";
        text.onChange(async (value) => {
          this.plugin.settings.completedLog.pathTemplate = value.trim() || DEFAULT_COMPLETED_LOG.pathTemplate;
          await this.plugin.saveSettings();
        });
      });
    }
    new import_obsidian.Setting(done).setName("\u5199\u5728\u7B14\u8BB0\u7684\u54EA\u4E2A\u6807\u9898\u4E0B\u9762").setDesc("\u586B\u4E00\u4E2A\u6807\u9898\uFF0C\u5B8C\u6210\u8BB0\u5F55\u5C31\u5199\u5728\u5B83\u4E0B\u9762\uFF0C\u5E76\u6309\u65E5\u671F\u81EA\u52A8\u5206\u5C0F\u8282\u3002\u4E0D\u786E\u5B9A\u5C31\u4FDD\u6301\u9ED8\u8BA4\u7684\u300C## \u6BCF\u65E5\u8BB0\u5F55\u300D\u3002\u8FDB\u9636\uFF1A\u586B ### {dateHeading} \u53EF\u4EE5\u76F4\u63A5\u5199\u5230\u5F53\u5929\u7684\u65E5\u671F\u6807\u9898\u4E0B\u3002").addText((text) => {
      text.setPlaceholder(DEFAULT_COMPLETED_LOG.heading);
      text.setValue(this.plugin.settings.completedLog.heading);
      text.inputEl.style.width = "100%";
      text.onChange(async (value) => {
        this.plugin.settings.completedLog.heading = value.trim() || DEFAULT_COMPLETED_LOG.heading;
        await this.plugin.saveSettings();
      });
    });
    if (this.plugin.settings.completedLog.target !== "daily") {
      new import_obsidian.Setting(done).setName("\u5F80\u524D\u68C0\u67E5\u51E0\u5929\u7684\u65E5\u5FD7").setDesc("\u70B9\u5DE5\u4F5C\u53F0\u7684\u300C\u4EFB\u52A1\u66F4\u65B0\u300D\u65F6\uFF0C\u4F1A\u5F80\u524D\u7FFB\u8FD9\u4E48\u591A\u5929\u7684\u65E5\u5FD7\uFF0C\u628A\u91CC\u9762\u6253\u4E86\u52FE\u3001\u4F46\u8FD8\u6CA1\u6536\u8FDB\u6765\u7684\u6761\u76EE\u8865\u4E0A\u3002\u586B 0 \u5C31\u53EA\u770B\u4ECA\u5929\u3002").addText((text) => {
        text.setPlaceholder(String(DEFAULT_COMPLETED_LOG.dailyLookbackDays));
        text.setValue(String(this.plugin.settings.completedLog.dailyLookbackDays));
        text.inputEl.type = "number";
        text.inputEl.min = "0";
        text.inputEl.max = "90";
        text.inputEl.style.width = "80px";
        text.onChange(async (value) => {
          this.plugin.settings.completedLog.dailyLookbackDays = Math.max(0, Math.min(90, parseInt(value) || 0));
          await this.plugin.saveSettings();
        });
      });
    }
    const advanced = this.collapsible(container, "\u9AD8\u7EA7", "\u8FDB\u5C55\u8BB0\u5F55\u683C\u5F0F\u3001\u5237\u65B0\u95F4\u9694");
    advanced.createEl("h3", { text: "\u8FDB\u5C55\u8BB0\u5F55" });
    advanced.createDiv({
      text: "\u5728\u5DE5\u4F5C\u53F0\u7ED9\u67D0\u4E2A\u4EFB\u52A1\u5199\u4E00\u53E5\u8FDB\u5C55\u65F6\uFF0C\u8FD9\u6BB5\u8BDD\u5199\u5230\u4EFB\u52A1\u7B14\u8BB0\u7684\u54EA\u91CC\u3001\u957F\u4EC0\u4E48\u6837\u3002",
      cls: "setting-item-description"
    });
    new import_obsidian.Setting(advanced).setName("\u8FDB\u5C55\u5199\u5728\u54EA\u4E2A\u6807\u9898\u4E0B\u9762").setDesc("\u586B\u4E00\u4E2A\u6807\u9898\uFF0C\u4F8B\u5982 ## \u8FDB\u5C55\u8BB0\u5F55\u3002\u652F\u6301 # / ## / ###\u3002").addText((text) => {
      text.setPlaceholder(DEFAULT_PROGRESS_LOG.heading);
      text.setValue(this.plugin.settings.progressLog.heading);
      text.inputEl.style.width = "100%";
      text.onChange(async (value) => {
        this.plugin.settings.progressLog.heading = value.trim() || DEFAULT_PROGRESS_LOG.heading;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(advanced).setName("\u6BCF\u6761\u8FDB\u5C55\u957F\u4EC0\u4E48\u6837").setDesc("\u4E09\u7EA7\u6807\u9898 + \u65F6\u95F4 \u2192 \u72EC\u7ACB\u6210\u6BB5\uFF0C\u9002\u5408\u5199\u957F\u4E00\u70B9\uFF1B\u9879\u76EE\u7B26 + \u65F6\u95F4 \u2192 \u4E00\u884C\u4E00\u6761\uFF0C\u9002\u5408\u7B80\u77ED\u8BB0\u5F55\u3002").addDropdown((dropdown) => {
      dropdown.addOption("heading-time", "\u4E09\u7EA7\u6807\u9898 + \u65F6\u95F4");
      dropdown.addOption("bullet-time", "\u9879\u76EE\u7B26 + \u65F6\u95F4");
      dropdown.setValue(this.plugin.settings.progressLog.format);
      dropdown.onChange(async (value) => {
        this.plugin.settings.progressLog.format = value;
        await this.plugin.saveSettings();
      });
    });
    advanced.createEl("h3", { text: "\u6570\u636E\u5237\u65B0" });
    new import_obsidian.Setting(advanced).setName("\u5DE5\u4F5C\u53F0\u81EA\u52A8\u5237\u65B0\u95F4\u9694\uFF08\u79D2\uFF09").setDesc("\u5DE5\u4F5C\u53F0\u6BCF\u9694\u591A\u4E45\u91CD\u65B0\u8BFB\u4E00\u6B21\u7B14\u8BB0\u3002\u9ED8\u8BA4 30 \u79D2\uFF0C\u4E00\u822C\u4E0D\u7528\u6539\u3002\u586B 0 \u5C31\u53EA\u5728\u6253\u5F00\u65F6\u8BFB\u4E00\u6B21\u3002").addText((text) => {
      text.setPlaceholder("30");
      text.setValue(String(this.plugin.settings.refreshInterval));
      text.inputEl.type = "number";
      text.inputEl.min = "0";
      text.inputEl.max = "3600";
      text.inputEl.style.width = "80px";
      text.onChange(async (value) => {
        const num = Math.max(0, Math.min(3600, parseInt(value) || 0));
        this.plugin.settings.refreshInterval = num;
        await this.plugin.saveSettings();
        const leaf = this.plugin.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
        if (leaf?.view instanceof ActWorkspaceView) {
          leaf.view.startRefreshInterval();
        }
      });
    });
  }
  renderTimeTab(container) {
    new import_obsidian.Setting(container).setName("\u5468\u671F\u5212\u5206\u65B9\u5F0F").setDesc("\u4E00\u4E2A\u300C\u5468\u671F\u300D\u600E\u4E48\u7B97\u3002\u6309\u5B63\u5EA6\u6708\u4EFD\u6700\u7701\u5FC3\uFF081-3\u6708\u30014-6\u6708\u2026\uFF09\uFF0C\u548C\u81EA\u7136\u5B63\u5EA6\u5BF9\u9F50\uFF1B\u4E25\u683C 12 \u5468\u5219\u4ECE\u8D77\u59CB\u65E5\u5F00\u59CB\u6BCF 12 \u5468\u4E00\u8F6E\u3002\u4E0D\u786E\u5B9A\u5C31\u7528\u63A8\u8350\u7684\u3002").addDropdown((dropdown) => {
      dropdown.addOption("monthly", "\u6309\u5B63\u5EA6\u6708\u4EFD\uFF08\u63A8\u8350\uFF09");
      dropdown.addOption("weekly", "\u4E25\u683C 12 \u5468");
      dropdown.addOption("weekly13", "12+1 \u5468");
      dropdown.setValue(this.plugin.settings.cycleMode);
      dropdown.onChange(async (value) => {
        this.plugin.settings.cycleMode = value;
        await this.plugin.saveSettings();
        const view = this.plugin.app.workspace.getLeavesOfType(VIEW_TYPE)[0]?.view;
        if (view instanceof ActWorkspaceView) await view.render();
      });
    });
    container.createEl("h3", { text: "\u6587\u4EF6\u5939\u8DEF\u5F84" });
    container.createDiv({
      text: "\u6A21\u677F\u91CC\u5DF2\u7ECF\u914D\u597D\u4E86\u3002\u53EA\u6709\u4F60\u81EA\u5DF1\u6539\u8FC7\u6587\u4EF6\u5939\u540D\u5B57\uFF0C\u624D\u9700\u8981\u5728\u8FD9\u91CC\u8DDF\u7740\u6539\u3002\u6539\u5B8C\u8981\u91CD\u65B0\u6253\u5F00\u5DE5\u4F5C\u53F0\u624D\u751F\u6548\u3002",
      cls: "setting-item-description"
    });
    this.folderSetting(container, "daily", "\u65E5\u5FD7", "\u6BCF\u5929\u4E00\u7BC7\uFF0C\u8BB0\u4ECA\u5929\u505A\u4E86\u4EC0\u4E48");
    this.folderSetting(container, "weekly", "\u5468\u8BB0", "\u6BCF\u5468\u4E00\u7BC7\uFF0C\u672C\u5468\u8BA1\u5212\u4E0E\u56DE\u987E");
    this.folderSetting(container, "cycle", "\u5468\u671F\u76EE\u6807", "12 \u5468\uFF08\u6216\u4E00\u4E2A\u5B63\u5EA6\uFF09\u7684\u76EE\u6807");
    this.folderSetting(container, "vision", "\u613F\u666F", "\u66F4\u957F\u671F\u7684\u65B9\u5411\uFF0C\u5F88\u5C11\u6539\u52A8");
    container.createEl("h3", { text: "\u7B14\u8BB0\u6A21\u677F" });
    container.createDiv({
      text: "\u65B0\u5EFA\u7B14\u8BB0\u65F6\u5957\u7528\u7684\u6837\u5F0F\u3002\u7559\u7A7A\u5C31\u7528\u63D2\u4EF6\u81EA\u5E26\u7684\uFF0C\u4E00\u6837\u80FD\u7528\u3002",
      cls: "setting-item-description"
    });
    this.templateSetting(container, "cycle", "\u5468\u671F\u76EE\u6807\u6A21\u677F", "\u70B9\u300C\u6253\u5F00\u76EE\u6807\u7B14\u8BB0\u300D\u65B0\u5EFA\u65F6\u5957\u7528\u3002\u8FDB\u9636\uFF1A\u6A21\u677F\u91CC\u5199 {{year}}\u3001{{cycle}}\u3001{{cycleId}}\u3001{{totalWeeks}} \u4F1A\u81EA\u52A8\u66FF\u6362\u6210\u5F53\u524D\u5E74\u4EFD\u548C\u5468\u671F\u3002");
    this.templateSetting(container, "weekly", "\u5468\u8BB0\u6A21\u677F", "\u65B0\u5EFA\u5468\u8BB0\u65F6\u5957\u7528\u3002");
    this.templateSetting(container, "daily", "\u65E5\u5FD7\u6A21\u677F", "\u65B0\u5EFA\u65E5\u5FD7\u65F6\u5957\u7528\u3002");
  }
  renderCardTab(container) {
    container.createDiv({
      text: "\u5DE5\u4F5C\u53F0\u7684\u300C\u77E5\u8BC6\u300D\u533A\u4F1A\u7EDF\u8BA1\u6BCF\u7C7B\u5361\u7247\u6709\u591A\u5C11\u5F20\u3002\u8FD9\u91CC\u51B3\u5B9A\u663E\u793A\u54EA\u51E0\u7C7B\u3001\u4EE5\u53CA\u4ECE\u54EA\u91CC\u7EDF\u8BA1\u3002\u6539\u5B8C\u8981\u91CD\u65B0\u6253\u5F00\u5DE5\u4F5C\u53F0\u624D\u751F\u6548\u3002",
      cls: "setting-item-description"
    });
    container.createDiv({
      text: "\u6BCF\u884C\u5DE6\u8FB9\u7684\u5F00\u5173 = \u8981\u4E0D\u8981\u5728\u5DE5\u4F5C\u53F0\u663E\u793A\u8FD9\u4E00\u7C7B\uFF1B\u53F3\u8FB9\u7684\u4E0B\u62C9 = \u6309\u6587\u4EF6\u5939\u7EDF\u8BA1\uFF0C\u8FD8\u662F\u6309\u6807\u7B7E\u7EDF\u8BA1\u3002",
      cls: "setting-item-description"
    });
    const cardTypes = [
      { key: "mainCard", folderKey: "mainCard", label: "\u6838\u5FC3\u5361", desc: "\u7528\u81EA\u5DF1\u7684\u8BDD\u5199\u4E0B\u6765\u7684\u60F3\u6CD5\uFF0C\u4E00\u5F20\u4E00\u4E2A\u89C2\u70B9" },
      { key: "bibCard", folderKey: "bibCard", label: "\u9605\u8BFB\u5361", desc: "\u8BFB\u4E66\u3001\u770B\u89C6\u9891\u65F6\u6458\u5F55\u548C\u6574\u7406\u7684\u5185\u5BB9" },
      { key: "indexCard", folderKey: "indexCard", label: "\u7D22\u5F15\u5361", desc: "\u628A\u540C\u4E00\u4E3B\u9898\u7684\u5361\u7247\u4E32\u8D77\u6765\u7684\u76EE\u5F55\u9875" },
      { key: "newCard", folderKey: "newCard", label: "\u65B0\u5361\u6682\u5B58", desc: "\u8FD8\u6CA1\u5F52\u7C7B\u3001\u6CA1\u7F16\u53F7\u7684\u65B0\u5361\u3002\u9ED8\u8BA4\u4E0D\u663E\u793A" }
    ];
    for (const ct of cardTypes) {
      const vis = this.plugin.settings.cardVisibility ?? {};
      const isVisible = vis[ct.key] !== false;
      const mode = this.plugin.settings.cardSearchMode[ct.key] || "folder";
      new import_obsidian.Setting(container).setName(ct.label).setDesc(ct.desc).addToggle((toggle) => {
        toggle.setValue(isVisible).onChange(async (value) => {
          if (!this.plugin.settings.cardVisibility) this.plugin.settings.cardVisibility = {};
          this.plugin.settings.cardVisibility[ct.key] = value;
          await this.plugin.saveSettings();
        });
        toggle.toggleEl.setAttribute("aria-label", "\u5728\u524D\u7AEF\u663E\u793A");
      }).addDropdown((dropdown) => {
        dropdown.addOption("folder", "\u6309\u6587\u4EF6\u5939");
        dropdown.addOption("tag", "\u6309\u6807\u7B7E");
        dropdown.setValue(mode);
        dropdown.onChange(async (value) => {
          this.plugin.settings.cardSearchMode[ct.key] = value;
          await this.plugin.saveSettings();
          this.display();
        });
      });
      if (mode === "folder") {
        new import_obsidian.Setting(container).setDesc("\u7EDF\u8BA1\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u7B14\u8BB0").addSearch((search) => {
          const folders = this.getVaultFolders();
          const listId = `act-card-folder-${ct.key}`;
          const optionsEl = container.createEl("datalist");
          optionsEl.id = listId;
          for (const folder of folders) {
            optionsEl.createEl("option", { attr: { value: folder.path } });
          }
          search.inputEl.setAttribute("list", listId);
          search.inputEl.setAttribute("autocomplete", "off");
          search.setPlaceholder(DEFAULT_FOLDERS[ct.folderKey] || "\u7559\u7A7A\u5219\u4E0D\u663E\u793A").setValue(this.plugin.settings.folders[ct.folderKey]).onChange(async (value) => {
            this.plugin.settings.folders[ct.folderKey] = value;
            await this.plugin.saveSettings();
          });
          search.inputEl.addEventListener("change", async () => {
            const value = search.inputEl.value;
            if (value !== this.plugin.settings.folders[ct.folderKey]) {
              this.plugin.settings.folders[ct.folderKey] = value;
              await this.plugin.saveSettings();
            }
          });
        });
      } else {
        new import_obsidian.Setting(container).setDesc("\u7EDF\u8BA1\u5E26\u8FD9\u4E2A\u6807\u7B7E\u7684\u7B14\u8BB0\u3002\u53EA\u586B\u6807\u7B7E\u540D\uFF0C\u4E0D\u8981\u5199 #").addText((text) => {
          text.setPlaceholder("\u4F8B\u5982\uFF1Ac-\u6838\u5FC3\u5361").setValue(this.plugin.settings.cardTags[ct.key] || "").onChange(async (value) => {
            this.plugin.settings.cardTags[ct.key] = value;
            await this.plugin.saveSettings();
          });
        });
      }
    }
    container.createEl("h3", { text: "\u70B9\u6570\u5B57\u540E\u8DF3\u5230\u54EA" });
    container.createDiv({
      text: "\u5DE5\u4F5C\u53F0\u300C\u77E5\u8BC6\u300D\u533A\u7684\u6570\u5B57\u662F\u53EF\u4EE5\u70B9\u7684\uFF0C\u70B9\u4E86\u4F1A\u6253\u5F00\u4E00\u4E2A\u8868\u683C\u89C6\u56FE\uFF08.base \u6587\u4EF6\uFF09\u3002\u8FD9\u91CC\u6307\u5B9A\u5404\u81EA\u6253\u5F00\u54EA\u4E00\u4E2A\u3002\u7559\u7A7A\u7684\u8BDD\u90A3\u4E2A\u6570\u5B57\u5C31\u70B9\u4E0D\u52A8\u3002",
      cls: "setting-item-description"
    });
    container.createDiv({
      text: "\u5199\u6210 \u6587\u4EF6\u540D#\u89C6\u56FE\u540D \u53EF\u4EE5\u76F4\u63A5\u8DF3\u5230\u8BE5\u6587\u4EF6\u91CC\u7684\u6307\u5B9A\u89C6\u56FE\uFF0C\u4F8B\u5982 20-Card/\u77E5\u8BC6\u603B\u89C8.base#\u6838\u5FC3\u5361\u603B\u89C8\u3002",
      cls: "setting-item-description"
    });
    const dvLabels = [
      { key: "mainCard", label: "\u6838\u5FC3\u5361" },
      { key: "bibCard", label: "\u9605\u8BFB\u5361" },
      { key: "indexCard", label: "\u7D22\u5F15\u5361" },
      { key: "newCard", label: "\u65B0\u5361\u6682\u5B58" }
    ];
    for (const item of dvLabels) {
      new import_obsidian.Setting(container).setName(item.label).addSearch((search) => {
        const files = this.app.vault.getFiles().filter((f) => f.extension === "base").map((f) => f.path).sort((a, b) => a.localeCompare(b, "zh-CN"));
        const listId = `act-dv-${item.key}`;
        const optionsEl = container.createEl("datalist");
        optionsEl.id = listId;
        for (const filePath of files) {
          optionsEl.createEl("option", { attr: { value: filePath } });
        }
        search.inputEl.setAttribute("list", listId);
        search.inputEl.setAttribute("autocomplete", "off");
        search.setPlaceholder(DEFAULT_DV_PATHS[item.key]).setValue(this.plugin.settings.dvPaths[item.key]).onChange(async (value) => {
          this.plugin.settings.dvPaths[item.key] = value;
          await this.plugin.saveSettings();
        });
        search.inputEl.addEventListener("change", async () => {
          const value = search.inputEl.value;
          if (value !== this.plugin.settings.dvPaths[item.key]) {
            this.plugin.settings.dvPaths[item.key] = value;
            await this.plugin.saveSettings();
          }
        });
      });
    }
  }
  renderDidaTab(container) {
    new import_obsidian.Setting(container).setName("\u542F\u7528\u6EF4\u7B54\u6E05\u5355").setDesc("\u4E0D\u7528\u6EF4\u7B54\u6E05\u5355\u5C31\u4FDD\u6301\u5173\u95ED\uFF0C\u5DE5\u4F5C\u53F0\u4E0D\u53D7\u5F71\u54CD\u3002\u5F00\u542F\u540E\u300C\u4ECA\u65E5\u805A\u7126\u300D\u91CC\u4F1A\u591A\u51FA\u4E00\u5757\u6EF4\u7B54\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u76F4\u63A5\u52FE\u9009\u3001\u65B0\u589E\uFF0C\u5B8C\u6210\u7684\u4EFB\u52A1\u4E5F\u4F1A\u4E00\u8D77\u6536\u8FDB\u5B8C\u6210\u8BB0\u5F55\u3002").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.dida.enabled);
      toggle.onChange(async (value) => {
        this.plugin.settings.dida.enabled = value;
        await this.plugin.saveSettings();
        const view = this.plugin.app.workspace.getLeavesOfType(VIEW_TYPE)[0]?.view;
        if (view instanceof ActWorkspaceView) await view.render();
      });
    });
    new import_obsidian.Setting(container).setName("Access Token").setDesc("\u4E00\u4E32\u6388\u6743\u53E3\u4EE4\uFF0C\u8BA9\u63D2\u4EF6\u80FD\u8BFB\u5199\u4F60\u7684\u6EF4\u7B54\u6E05\u5355\u3002\u6309\u4E0B\u9762\u56DB\u6B65\u53BB\u6EF4\u7B54\u6E05\u5355\u7F51\u9875\u7248\u7533\u8BF7\u3002\u53EA\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u4E0D\u4F1A\u4E0A\u4F20\u3002").addText((text) => {
      text.setPlaceholder("your-access-token");
      text.setValue(this.plugin.settings.dida.accessToken);
      text.inputEl.style.width = "100%";
      text.inputEl.type = "password";
      text.onChange(async (value) => {
        this.plugin.settings.dida.accessToken = value;
        await this.plugin.saveSettings();
      });
    });
    container.createDiv({
      text: "\u5B8C\u6210\u8BB0\u5F55\u7684\u4FDD\u5B58\u4F4D\u7F6E\u4E0E\u5199\u5165\u6807\u9898\u5DF2\u79FB\u5230\u300C\u884C\u52A8\u300D\u9875\u7B7E \u2192 \u5B8C\u6210\u8BB0\u5F55\uFF0C\u4E09\u6761\u6765\u6E90\uFF08\u6EF4\u7B54\u6E05\u5355\u3001\u884C\u52A8\u52FE\u9009\u3001\u65E5\u5FD7\u52FE\u9009\uFF09\u7EDF\u4E00\u5728\u90A3\u91CC\u914D\u7F6E\u3002",
      cls: "setting-item-description"
    });
    const guideEl = container.createDiv({ cls: "act-settings-guide" });
    guideEl.createEl("h4", { text: "\u53BB\u54EA\u62FF\u8FD9\u4E32\u53E3\u4EE4" });
    const steps = guideEl.createEl("ol");
    steps.createEl("li", { text: "\u524D\u5F80\u7F51\u9875\u7248\u6EF4\u7B54\u6E05\u5355\uFF08dida365.com\uFF09\u5E76\u767B\u5F55" });
    steps.createEl("li", { text: "\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u5934\u50CF\u300D\u2192\u300C\u8BBE\u7F6E\u300D" });
    steps.createEl("li", { text: "\u8FDB\u5165\u300C\u8D26\u6237\u4E0E\u5B89\u5168\u300D\u2192\u300CAPI \u53E3\u4EE4\u300D" });
    steps.createEl("li", { text: "\u521B\u5EFA\u53E3\u4EE4\u5E76\u590D\u5236\uFF0C\u7C98\u8D34\u5230\u4E0A\u65B9 Access Token \u8F93\u5165\u6846" });
  }
  renderSkillTab(container) {
    new import_obsidian.Setting(container).setName("\u7EC8\u7AEF\u6A21\u5F0F").setDesc(getRuntimePlatform() === "win32" ? "Windows \u8BF7\u7528\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D\u3002Terminal \u63D2\u4EF6\u5728 Windows \u9700\u8981 Python\uFF0C\u7F3A\u5931\u65F6\u4F1A\u63D0\u793A\u300C\u7EC8\u7AEF\u7F29\u653E\u5668\u610F\u5916\u9000\u51FA\uFF1A9009\u300D\u4E14\u547D\u4EE4\u9001\u4E0D\u8FDB\u7EC8\u7AEF\u3002" : "\u70B9\u51FB Skill \u6309\u94AE\u65F6\u6253\u5F00\u54EA\u4E2A\u7EC8\u7AEF").addDropdown((dropdown) => {
      dropdown.addOption("terminal", "Terminal \u63D2\u4EF6");
      dropdown.addOption("system", "\u7CFB\u7EDF\u7EC8\u7AEF\uFF08macOS/Windows\uFF09");
      dropdown.addOption("copy", "\u4EC5\u590D\u5236\u547D\u4EE4");
      dropdown.setValue(this.plugin.settings.terminalMode);
      dropdown.onChange(async (value) => {
        this.plugin.settings.terminalMode = value;
        await this.plugin.saveSettings();
        this.renderTabContent(container);
      });
    });
    if (getRuntimePlatform() === "win32" && this.plugin.settings.terminalMode === "terminal") {
      const warn = container.createDiv({ cls: "act-skill-warning" });
      warn.createDiv({ text: "\u26A0\uFE0F Windows \u4E0A\u4E0D\u5EFA\u8BAE\u7528 Terminal \u63D2\u4EF6", cls: "act-skill-warning-title" });
      warn.createDiv({
        text: "\u8BE5\u63D2\u4EF6\u5728 Windows \u9700\u8981 Python \u624D\u80FD\u542F\u52A8\u7EC8\u7AEF\uFF0C\u7F3A\u5931\u65F6\u4F1A\u63D0\u793A\u300C\u7EC8\u7AEF\u7F29\u653E\u5668\u610F\u5916\u9000\u51FA\uFF1A9009\u300D\uFF0CSkill \u547D\u4EE4\u9001\u4E0D\u8FDB\u53BB\u3002\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D\u6CA1\u6709\u8FD9\u4E2A\u4F9D\u8D56\u3002",
        cls: "act-skill-warning-body"
      });
      const fixBtn = warn.createEl("button", { text: "\u6539\u4E3A\u300C\u7CFB\u7EDF\u7EC8\u7AEF\u300D", cls: "act-skill-warning-btn", attr: { type: "button" } });
      fixBtn.addEventListener("click", async () => {
        this.plugin.settings.terminalMode = "system";
        await this.plugin.saveSettings();
        new import_obsidian.Notice("\u5DF2\u5207\u6362\u4E3A\u7CFB\u7EDF\u7EC8\u7AEF");
        this.renderTabContent(container);
      });
    }
    new import_obsidian.Setting(container).setName("CLI \u5DE5\u5177").setDesc("\u9009\u62E9\u7528\u4E8E\u8FD0\u884C Skill \u7684\u547D\u4EE4\u884C\u5DE5\u5177").addDropdown((dropdown) => {
      dropdown.addOption("claude", "Claude Code\uFF08claude\uFF09");
      dropdown.addOption("codex", "Codex\uFF08codex\uFF09");
      const current = this.plugin.settings.skillCommandTemplate;
      dropdown.setValue(detectSkillCli(current).bin);
      dropdown.onChange(async (value) => {
        if (value === "claude") {
          this.plugin.settings.skillCommandTemplate = "cd {{vault}} && claude -- '{{skill}}'";
        } else {
          this.plugin.settings.skillCommandTemplate = "cd {{vault}} && codex -- '{{skill}}'";
        }
        await this.plugin.saveSettings();
        this.renderTabContent(container);
      });
    });
    this.renderSkillUsageGuide(container);
    const skillListEl = container.createDiv({ cls: "act-settings-skill-list" });
    this.renderSkillList(skillListEl);
  }
  renderSkillList(container) {
    container.empty();
    const skills = this.plugin.settings.skillItems;
    for (let i = 0; i < skills.length; i++) {
      const item = skills[i];
      new import_obsidian.Setting(container).setName(`#${i + 1}`).addText((text) => {
        text.setPlaceholder("\u6309\u94AE\u540D\u79F0");
        text.setValue(item.label);
        text.inputEl.style.width = "80px";
        text.onChange(async (value) => {
          item.label = value;
          await this.plugin.saveSettings();
        });
      }).addText((text) => {
        text.setPlaceholder("skill \u540D\u79F0\uFF08\u5982 \u65E5\u5E38-\u6BCF\u65E5\u5F00\u573A\uFF09");
        text.setValue(item.skill);
        text.inputEl.style.width = "200px";
        text.onChange(async (value) => {
          item.skill = value;
          await this.plugin.saveSettings();
        });
      }).addExtraButton((btn) => {
        btn.setIcon("trash-2").setTooltip("\u5220\u9664").onClick(async () => {
          skills.splice(i, 1);
          await this.plugin.saveSettings();
          this.renderSkillList(container);
        });
      });
    }
    new import_obsidian.Setting(container).addButton((btn) => {
      btn.setButtonText("\u6DFB\u52A0 Skill").setCta().onClick(async () => {
        skills.push({ label: "", skill: "" });
        await this.plugin.saveSettings();
        this.renderSkillList(container);
      });
    });
  }
  addSettingsStyles(container) {
    const style = container.createEl("style");
    style.textContent = `
      .act-settings-tab-bar {
        display: flex;
        gap: 4px;
        border-bottom: 1px solid var(--background-modifier-border);
        margin-bottom: 16px;
      }
      .act-settings-tab {
        padding: 8px 16px;
        cursor: pointer;
        font-size: 14px;
        color: var(--text-muted);
        border-bottom: 2px solid transparent;
        transition: color 0.15s, border-color 0.15s;
        user-select: none;
      }
      .act-settings-tab:hover {
        color: var(--text-normal);
      }
      .act-settings-tab.is-active {
        color: var(--text-accent);
        border-bottom-color: var(--text-accent);
        font-weight: 600;
      }
      .act-settings-content {
        min-height: 200px;
      }
      .act-settings-guide {
        margin-top: 16px;
        padding: 12px 16px;
        border-radius: 8px;
        background: var(--background-secondary);
        font-size: 13px;
        color: var(--text-muted);
        line-height: 1.6;
      }
      .act-settings-guide h4 {
        margin: 0 0 8px 0;
        font-size: 13px;
        font-weight: 600;
        color: var(--text-normal);
      }
      .act-settings-guide ol {
        margin: 0;
        padding-left: 20px;
      }
      .act-skill-usage-guide {
        margin-bottom: 16px;
      }
      .act-skill-usage-platform + .act-skill-usage-platform {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid var(--background-modifier-border);
      }
      .act-skill-usage-platform strong {
        color: var(--text-normal);
        font-size: 12px;
      }
      .act-skill-usage-platform ul {
        margin: 4px 0 0;
        padding-left: 20px;
      }
      .act-support-card {
        max-width: 760px;
        padding: 28px 32px;
        border-radius: 18px;
        background: var(--background-primary);
        border: 1px solid var(--background-modifier-border);
        color: var(--text-normal);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
      }
      .act-support-card h2 {
        margin: 0 0 14px 0;
        font-size: 24px;
        font-weight: 800;
        color: var(--text-normal);
      }
      .act-support-card p {
        margin: 0;
        font-size: 18px;
        line-height: 1.75;
        color: var(--text-normal);
      }
      .act-support-lead {
        font-weight: 700;
      }
      .act-support-arrow {
        margin: 8px 0 14px 0;
        font-size: 22px;
        line-height: 1;
      }
      .act-support-list {
        margin: 0 0 6px 24px;
      }
      .act-support-blog {
        font-weight: 700;
      }
      .act-support-blog a {
        color: var(--text-accent);
        text-decoration: underline;
        text-underline-offset: 3px;
      }
      .act-update-section {
        padding: 16px 0;
        margin-bottom: 12px;
        border-bottom: 1px solid var(--background-modifier-border);
      }
      .act-update-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 10px;
      }
      .act-update-version {
        font-size: 15px;
        font-weight: 600;
        color: var(--text-normal);
      }
      .act-update-actions {
        margin-bottom: 10px;
      }
      .act-update-help {
        margin: 0 0 12px 0;
        font-size: 12px;
        line-height: 1.5;
        color: var(--text-muted);
      }
      .act-update-btn {
        padding: 4px 14px;
        font-size: 13px;
        border-radius: 6px;
        cursor: pointer;
        border: 1px solid var(--background-modifier-border);
        background: var(--background-secondary);
        color: var(--text-normal);
      }
      .act-update-btn:hover {
        background: var(--background-modifier-hover);
      }
      .act-update-btn.is-primary {
        background: var(--interactive-accent);
        color: var(--text-on-accent);
        border-color: var(--interactive-accent);
        margin-left: 10px;
      }
      .act-update-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .act-update-status {
        display: flex;
        align-items: center;
        min-height: 28px;
        font-size: 13px;
        margin-bottom: 8px;
      }
      .act-update-available {
        color: var(--text-accent);
        font-weight: 500;
      }
      .act-update-latest {
        color: var(--text-success, #2d5a3d);
      }
      .act-update-success {
        color: var(--text-success, #2d5a3d);
        font-weight: 500;
      }
      .act-update-error {
        color: var(--text-error);
      }
      .act-settings-footer {
        margin-top: 32px;
        padding: 20px;
        border-top: 1px solid var(--background-modifier-border);
        background: var(--background-secondary);
        border-radius: 8px;
        font-size: 13px;
        line-height: 1.8;
        color: var(--text-muted);
      }
      .act-settings-footer h3 {
        margin: 0 0 10px 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--text-normal);
      }
      .act-settings-footer p {
        margin: 6px 0;
      }
      .act-footer-links {
        margin: 8px 0 8px 16px;
      }
      .act-footer-link-item {
        position: relative;
        padding-left: 12px;
      }
      .act-footer-link-item::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--text-faint);
      }
      .act-footer-blog-link {
        color: var(--text-accent);
        text-decoration: underline;
        cursor: pointer;
      }
    `;
  }
};
