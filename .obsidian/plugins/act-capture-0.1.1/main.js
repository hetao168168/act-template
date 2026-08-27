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
  default: () => MobileDailyCapturePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var VIEW_TYPE = "act-capture-view";
var PAGE_SIZE = 10;
var MAX_PREVIEW_LIMIT = 50;
var MOBILE_STARTUP_OPEN_DELAY_MS = 900;
var DESKTOP_STARTUP_OPEN_DELAY_MS = 0;
var MOBILE_PREVIEW_LOAD_DELAY_MS = 700;
var DESKTOP_PREVIEW_LOAD_DELAY_MS = 80;
var MOBILE_AUTO_FOCUS_DELAY_MS = 650;
var DESKTOP_AUTO_FOCUS_DELAY_MS = 120;
var UPDATE_REPO = "KivenBig/obsidian-act-capture";
var UPDATE_CHECK_INTERVAL_MS = 5 * 60 * 1e3;
var DEFAULT_SETTINGS = {
  storageMode: "daily",
  dailyConfigSource: "custom",
  weeklyConfigSource: "custom",
  dailyFolder: "Daily Notes",
  dailyFileNameFormat: "YYYY-MM-DD",
  weeklyFolder: "Weekly Notes",
  weeklyFileNameFormat: "gggg-[W]ww",
  dailyTemplatePath: "",
  weeklyTemplatePath: "",
  thoughtHeading: "\u6BCF\u65E5\u95EA\u5FF5",
  singleNotePath: "\u6BCF\u65E5\u95EA\u5FF5.md",
  singleEntryHeadingFormat: "YYYYMMDD HH:mm",
  projectNotesFolder: "",
  selectedProjectNotePath: "",
  openOnMobileStartup: true,
  openOnDesktopStartup: false,
  draftText: "",
  draftUpdatedAt: 0
};
function pad(value) {
  return value.toString().padStart(2, "0");
}
function isMobileRuntime() {
  return import_obsidian.Platform.isMobileApp || import_obsidian.Platform.isMobile;
}
function formatDateOnly(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function getWeekdayShortName(date) {
  return ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][date.getDay()];
}
function getWeekdayFullName(date) {
  return `\u5468${getWeekdayShortName(date)}`;
}
function getWeekdayDisplayName(date) {
  const shortName = getWeekdayShortName(date);
  return shortName === "\u65E5" ? "\u661F\u671F\u65E5" : `\u661F\u671F${shortName}`;
}
function formatTime(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function formatDateTime(date) {
  return `${formatDateOnly(date)} ${formatTime(date)}`;
}
function formatEditorDateLabel(date) {
  return `\u4ECA\u5929\uFF0C${getWeekdayDisplayName(date)}`;
}
function formatCompactDate(date) {
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
}
function getMomentFactory() {
  const moment = window.moment;
  return typeof moment === "function" ? moment : null;
}
function getIsoWeekInfo(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const weekday = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - weekday);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  return {
    year: target.getUTCFullYear(),
    week: Math.ceil(((target.getTime() - yearStart.getTime()) / 864e5 + 1) / 7)
  };
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function cleanHeadingText(value) {
  return value.trim().replace(/^#{1,6}\s*/, "").trim() || DEFAULT_SETTINGS.thoughtHeading;
}
function expandLegacyDateVariables(format, date) {
  return format.replace(/\{date\}/g, formatDateOnly(date)).replace(/\{compactDate\}/g, formatCompactDate(date)).replace(/\{datetime\}/g, formatDateTime(date)).replace(/\{time\}/g, formatTime(date)).replace(/\{year\}/g, `${date.getFullYear()}`).replace(/\{month\}/g, pad(date.getMonth() + 1)).replace(/\{day\}/g, pad(date.getDate())).replace(/\{weekdayFull\}/g, getWeekdayFullName(date)).replace(/\{weekday\}/g, getWeekdayShortName(date));
}
function applyDateFormat(format, date) {
  const expandedFormat = expandLegacyDateVariables(format, date);
  const moment = getMomentFactory();
  if (moment) return moment(date).format(expandedFormat);
  const isoWeek = getIsoWeekInfo(date);
  return expandedFormat.replace(/GGGG|gggg/g, `${isoWeek.year}`).replace(/WW|ww/g, pad(isoWeek.week)).replace(/W|w/g, `${isoWeek.week}`).replace(/YYYY/g, `${date.getFullYear()}`).replace(/YY/g, `${date.getFullYear()}`.slice(-2)).replace(/MM/g, pad(date.getMonth() + 1)).replace(/DD/g, pad(date.getDate())).replace(/HH/g, pad(date.getHours())).replace(/mm/g, pad(date.getMinutes()));
}
function formatLogFileName(format, date, fallbackFormat) {
  const safeFormat = format.trim() || fallbackFormat;
  const fileName = applyDateFormat(safeFormat, date).replace(/[\\:*?"<>|]/g, "-");
  return fileName.endsWith(".md") ? fileName : `${fileName}.md`;
}
function formatSingleEntryHeading(format, date) {
  const safeFormat = format.trim() || DEFAULT_SETTINGS.singleEntryHeadingFormat;
  return applyDateFormat(safeFormat, date).trim() || formatDateTime(date);
}
function joinVaultPath(folder, fileName) {
  const cleanFolder = normalizeFolderPath(folder);
  return (0, import_obsidian.normalizePath)(cleanFolder ? `${cleanFolder}/${fileName}` : fileName);
}
function normalizeFolderPath(path) {
  const cleanPath = path.trim().replace(/^\/+|\/+$/g, "");
  return cleanPath ? (0, import_obsidian.normalizePath)(cleanPath) : "";
}
function normalizeNotePath(path) {
  const cleanPath = (0, import_obsidian.normalizePath)(path.trim().replace(/^\/+/, "") || DEFAULT_SETTINGS.singleNotePath);
  return cleanPath.endsWith(".md") ? cleanPath : `${cleanPath}.md`;
}
function normalizeProjectNoteName(name) {
  const cleanName = sanitizeFileName(name).replace(/\.md$/i, "").trim();
  return cleanName ? `${cleanName}.md` : "";
}
function getParentFolderPath(path) {
  const parts = path.split("/");
  parts.pop();
  return parts.join("/");
}
function sanitizeFileName(fileName) {
  const cleanName = fileName.trim().replace(/[\\/:*?"<>|]/g, "-").replace(/\s+/g, " ");
  return cleanName || "\u9644\u4EF6";
}
function buildAttachmentEmbed(file) {
  const isImage = /^(png|jpe?g|gif|webp|svg|bmp)$/i.test(file.extension);
  return `${isImage ? "!" : ""}[[${file.path}]]`;
}
function squeezeBlankLines(text) {
  if (text.includes("```") || text.includes("~~~")) return text;
  return text.replace(/\n{4,}/g, "\n\n\n");
}
function isTimestampLikeHeading(title) {
  return /^\d/.test(title.trim()) && (title.match(/\d/g) ?? []).length >= 6;
}
function isHeading(line) {
  return /^#{1,6}\s+/.test(line);
}
function isThoughtHeading(line, heading) {
  const pattern = new RegExp(`^#{1,6}\\s*${escapeRegExp(cleanHeadingText(heading))}\\s*$`);
  return pattern.test(line.trim());
}
function buildEntry(text, date) {
  const lines = text.trim().split(/\r?\n/);
  const firstLine = lines.shift() ?? "";
  const rest = lines.map((line) => `  ${line}`);
  return [`- ${formatTime(date)} ${firstLine}`, ...rest].join("\n");
}
function buildSingleNoteEntry(text, title) {
  return `## ${title}

${text.trim()}`;
}
function insertThought(content, entry, heading) {
  const lines = content.split("\n");
  const cleanHeading = cleanHeadingText(heading);
  const existingHeadingIndex = lines.findIndex((line) => isThoughtHeading(line, cleanHeading));
  if (existingHeadingIndex >= 0) {
    let insertIndex2 = lines.length;
    for (let i = existingHeadingIndex + 1; i < lines.length; i++) {
      if (isHeading(lines[i]) || /^---\s*$/.test(lines[i])) {
        insertIndex2 = i;
        break;
      }
    }
    const before2 = lines.slice(0, insertIndex2);
    const after2 = lines.slice(insertIndex2);
    if (before2[before2.length - 1]?.trim()) before2.push("");
    before2.push(entry);
    before2.push("");
    return squeezeBlankLines([...before2, ...after2].join("\n"));
  }
  const summaryIndex = lines.findIndex((line) => /^##\s+今日总结\s*$/.test(line.trim()));
  let insertIndex = summaryIndex >= 0 ? summaryIndex : lines.length;
  if (summaryIndex > 0 && /^---\s*$/.test(lines[summaryIndex - 2]?.trim())) {
    insertIndex = summaryIndex - 2;
  } else if (summaryIndex > 0 && /^---\s*$/.test(lines[summaryIndex - 1]?.trim())) {
    insertIndex = summaryIndex - 1;
  }
  const section = ["", `## ${cleanHeading}`, "", entry, ""];
  const before = lines.slice(0, insertIndex);
  const after = lines.slice(insertIndex);
  while (before.length > 0 && before[before.length - 1] === "") before.pop();
  return squeezeBlankLines([...before, ...section, ...after].join("\n"));
}
function isThoughtEntryStart(line) {
  return /^-\s+\d{2}:\d{2}\s*/.test(line.trim());
}
function sortThoughtsNewestFirst(thoughts) {
  return thoughts.sort((a, b) => b.time.localeCompare(a.time));
}
function extractThoughts(content, heading) {
  const lines = content.split("\n");
  const headingIndex = lines.findIndex((line) => isThoughtHeading(line, heading));
  if (headingIndex < 0) return [];
  const thoughts = [];
  let i = headingIndex + 1;
  while (i < lines.length) {
    const line = lines[i];
    if (isHeading(line) || /^---\s*$/.test(line)) break;
    const match = line.trim().match(/^-\s+(\d{2}:\d{2})\s*(.*)$/);
    if (!match) {
      i++;
      continue;
    }
    const startLine = i;
    const bodyLines = [match[2] ?? ""];
    i++;
    while (i < lines.length) {
      const nextLine = lines[i];
      if (isHeading(nextLine) || /^---\s*$/.test(nextLine) || isThoughtEntryStart(nextLine)) break;
      bodyLines.push(nextLine.replace(/^\s{2}/, ""));
      i++;
    }
    const endLine = i - 1;
    thoughts.push({
      startLine,
      endLine,
      time: match[1],
      body: bodyLines.join("\n").trim(),
      source: lines.slice(startLine, endLine + 1).join("\n")
    });
  }
  return sortThoughtsNewestFirst(thoughts);
}
function findThoughtRange(content, target, heading) {
  const lines = content.split("\n");
  let startLine = target.startLine;
  let endLine = target.endLine;
  const currentSource = lines.slice(startLine, endLine + 1).join("\n");
  if (currentSource !== target.source) {
    const thoughts = extractThoughts(content, heading);
    const freshTarget = thoughts.find((thought) => thought.source === target.source);
    if (!freshTarget) throw new Error("Thought entry was not found.");
    startLine = freshTarget.startLine;
    endLine = freshTarget.endLine;
  }
  return { startLine, endLine };
}
function replaceThought(content, target, newBody, heading) {
  const lines = content.split("\n");
  const { startLine, endLine } = findThoughtRange(content, target, heading);
  const replacement = buildEntry(newBody, /* @__PURE__ */ new Date()).replace(/^- \d{2}:\d{2}/, `- ${target.time}`).split("\n");
  lines.splice(startLine, endLine - startLine + 1, ...replacement);
  return lines.join("\n");
}
function deleteThought(content, target, heading) {
  const lines = content.split("\n");
  const { startLine, endLine } = findThoughtRange(content, target, heading);
  let deleteEnd = endLine;
  if (lines[deleteEnd + 1] === "") deleteEnd++;
  lines.splice(startLine, deleteEnd - startLine + 1);
  return squeezeBlankLines(lines.join("\n"));
}
function isSingleEntryHeading(line) {
  return /^##\s+\S+/.test(line.trim());
}
function extractSingleNoteThoughts(content, limit) {
  const lines = content.split("\n");
  const thoughts = [];
  let i = 0;
  while (i < lines.length) {
    const match = lines[i].trim().match(/^##\s+(.+)$/);
    if (!match) {
      i++;
      continue;
    }
    const startLine = i;
    const time = match[1].trim();
    const bodyLines = [];
    i++;
    while (i < lines.length) {
      if (isSingleEntryHeading(lines[i])) break;
      bodyLines.push(lines[i]);
      i++;
    }
    const endLine = i - 1;
    const body = bodyLines.join("\n").trim();
    thoughts.push({
      startLine,
      endLine,
      time,
      body,
      source: lines.slice(startLine, endLine + 1).join("\n").trim()
    });
    if (limit !== void 0 && thoughts.length >= limit) break;
  }
  return sortThoughtsNewestFirst(thoughts);
}
function extractSingleNotePreviewThoughts(content, limit) {
  const thoughts = [];
  let index = 0;
  let lineNumber = 0;
  let current = null;
  const finishCurrent = (sourceEnd, endLine) => {
    if (!current) return;
    thoughts.push({
      startLine: current.startLine,
      endLine,
      time: current.time,
      body: current.bodyLines.join("\n").trim(),
      source: content.slice(current.sourceStart, sourceEnd).trim()
    });
    current = null;
  };
  while (index <= content.length) {
    const nextNewline = content.indexOf("\n", index);
    const lineEnd = nextNewline === -1 ? content.length : nextNewline;
    const rawLine = content.slice(index, lineEnd).replace(/\r$/, "");
    const headingMatch = rawLine.trim().match(/^##\s+(.+)$/);
    if (headingMatch) {
      finishCurrent(index, lineNumber - 1);
      if (thoughts.length >= limit) break;
      current = {
        startLine: lineNumber,
        sourceStart: index,
        time: headingMatch[1].trim(),
        bodyLines: []
      };
    } else if (current) {
      current.bodyLines.push(rawLine);
    }
    if (nextNewline === -1) break;
    index = nextNewline + 1;
    lineNumber++;
  }
  if (thoughts.length < limit) finishCurrent(content.length, lineNumber);
  return sortThoughtsNewestFirst(thoughts);
}
function findSingleNoteThoughtRange(content, target) {
  const lines = content.split("\n");
  let startLine = target.startLine;
  let endLine = target.endLine;
  const currentSource = lines.slice(startLine, endLine + 1).join("\n").trim();
  if (currentSource !== target.source) {
    const thoughts = extractSingleNoteThoughts(content);
    const freshTarget = thoughts.find((thought) => thought.source === target.source);
    if (!freshTarget) throw new Error("Thought entry was not found.");
    startLine = freshTarget.startLine;
    endLine = freshTarget.endLine;
  }
  return { startLine, endLine };
}
function insertSingleNoteThought(content, entry) {
  const cleanContent = content.replace(/\s+$/g, "");
  if (!cleanContent) return `${entry}
`;
  const lines = cleanContent.split("\n");
  const firstEntryIndex = lines.findIndex(isSingleEntryHeading);
  if (firstEntryIndex >= 0) {
    const before = lines.slice(0, firstEntryIndex);
    const after = lines.slice(firstEntryIndex);
    while (before.length > 0 && before[before.length - 1] === "") before.pop();
    return squeezeBlankLines([...before, "", entry, "", ...after].join("\n"));
  }
  return `${cleanContent}

${entry}
`;
}
function sortSingleNoteContentNewestFirst(content) {
  const lines = content.split("\n");
  const firstEntryIndex = lines.findIndex(isSingleEntryHeading);
  if (firstEntryIndex < 0) return content;
  const leading = lines.slice(0, firstEntryIndex).join("\n").replace(/\s+$/g, "");
  const thoughts = extractSingleNoteThoughts(content);
  if (thoughts.some((thought) => !isTimestampLikeHeading(thought.time))) return content;
  const body = thoughts.map((thought) => thought.source).join("\n\n");
  return leading ? `${leading}

${body}
` : `${body}
`;
}
function replaceSingleNoteThought(content, target, newBody) {
  const lines = content.split("\n");
  const { startLine, endLine } = findSingleNoteThoughtRange(content, target);
  const replacement = buildSingleNoteEntry(newBody, target.time).split("\n");
  lines.splice(startLine, endLine - startLine + 1, ...replacement);
  return squeezeBlankLines(lines.join("\n"));
}
function deleteSingleNoteThought(content, target) {
  const lines = content.split("\n");
  const { startLine, endLine } = findSingleNoteThoughtRange(content, target);
  let deleteEnd = endLine;
  while (lines[deleteEnd + 1] === "") deleteEnd++;
  lines.splice(startLine, deleteEnd - startLine + 1);
  return squeezeBlankLines(lines.join("\n"));
}
var ProjectNoteNameModal = class extends import_obsidian.Modal {
  constructor(app, onSubmit) {
    super(app);
    this.submitted = false;
    this.value = "";
    this.onSubmit = onSubmit;
  }
  onOpen() {
    this.setTitle("\u65B0\u5EFA\u9879\u76EE\u7B14\u8BB0");
    let textInputEl = null;
    const submit = () => {
      const trimmedValue = this.value.trim();
      if (!trimmedValue) {
        new import_obsidian.Notice("\u8BF7\u8F93\u5165\u7B14\u8BB0\u540D\u79F0");
        textInputEl?.focus();
        return;
      }
      this.submitted = true;
      this.onSubmit(trimmedValue);
      this.close();
    };
    new import_obsidian.Setting(this.contentEl).setName("\u7B14\u8BB0\u540D\u79F0").setDesc("\u521B\u5EFA\u540E\u4F1A\u4FDD\u5B58\u5230\u5F53\u524D\u9879\u76EE\u95EA\u5FF5\u6587\u4EF6\u5939\uFF0C\u5E76\u81EA\u52A8\u5207\u6362\u4E3A\u5199\u5165\u76EE\u6807\u3002").addText((text) => {
      text.setPlaceholder("\u4F8B\u5982\uFF1A\u8BFE\u7A0B\u601D\u8003").onChange((value) => {
        this.value = value;
      });
      textInputEl = text.inputEl;
      text.inputEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          submit();
        }
      });
      window.setTimeout(() => text.inputEl.focus(), 30);
    });
    new import_obsidian.Setting(this.contentEl).addButton((button) => {
      button.setButtonText("\u53D6\u6D88").onClick(() => this.close());
    }).addButton((button) => {
      button.setButtonText("\u521B\u5EFA").setCta().onClick(() => submit());
    });
  }
  onClose() {
    this.contentEl.empty();
    if (!this.submitted) this.onSubmit("");
  }
};
var ProjectNoteSelectModal = class extends import_obsidian.Modal {
  constructor(app, files, currentPath, onSelect) {
    super(app);
    this.files = files;
    this.currentPath = currentPath;
    this.onSelect = onSelect;
  }
  onOpen() {
    this.setTitle("\u9009\u62E9\u5199\u5165\u7B14\u8BB0");
    const listEl = this.contentEl.createDiv({ cls: "act-capture-note-select" });
    if (this.files.length === 0) {
      listEl.createDiv({
        cls: "act-capture-note-select__empty",
        text: "\u9879\u76EE\u95EA\u5FF5\u6587\u4EF6\u5939\u91CC\u8FD8\u6CA1\u6709\u53EF\u9009\u7B14\u8BB0\u3002"
      });
      return;
    }
    for (const file of this.files) {
      const button = listEl.createEl("button", {
        cls: `act-capture-note-select__item ${file.path === this.currentPath ? "is-active" : ""}`,
        attr: { type: "button" }
      });
      button.createSpan({ cls: "act-capture-note-select__name", text: file.basename });
      button.createSpan({ cls: "act-capture-note-select__path", text: file.path });
      if (file.path === this.currentPath) {
        button.createSpan({ cls: "act-capture-note-select__current", text: "\u5F53\u524D" });
      }
      button.addEventListener("click", () => {
        void this.onSelect(file);
        this.close();
      });
    }
  }
  onClose() {
    this.contentEl.empty();
  }
};
var DailyCaptureView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.inputEl = null;
    this.currentProjectLabelEl = null;
    this.previewEl = null;
    this.footerEl = null;
    this.draftSaveTimer = null;
    this.previewLoadTimer = null;
    this.lastSelectionStart = 0;
    this.lastSelectionEnd = 0;
    this.visibleLimit = PAGE_SIZE;
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "ACT \u95EA\u5FF5\u7C3F";
  }
  getIcon() {
    return "message-square-plus";
  }
  async onOpen() {
    this.clearPreviewLoadTimer();
    const root = this.containerEl.children[1];
    root.empty();
    root.addClass("act-capture");
    if (!this.app.workspace.layoutReady) {
      window.setTimeout(() => this.buildUI(root), 0);
      return;
    }
    this.buildUI(root);
  }
  buildUI(root) {
    const composer = root.createDiv({ cls: "act-capture__composer" });
    const topbar = composer.createDiv({ cls: "act-capture__topbar" });
    const topbarMain = topbar.createDiv({ cls: "act-capture__topbar-main" });
    const topbarActions = topbar.createDiv({ cls: "act-capture__topbar-actions" });
    if (this.plugin.settings.storageMode === "single") {
      const selectButton = topbarActions.createEl("button", {
        cls: "act-capture__secondary act-capture__compact-action act-capture__select-note",
        text: "\u9009\u62E9",
        attr: {
          type: "button",
          "aria-label": "\u9009\u62E9\u5199\u5165\u7B14\u8BB0"
        }
      });
      (0, import_obsidian.setTooltip)(selectButton, "\u9009\u62E9\u5199\u5165\u7B14\u8BB0");
      selectButton.addEventListener("click", () => {
        this.openProjectNoteSelector();
      });
      const newNoteButton = topbarActions.createEl("button", {
        cls: "act-capture__secondary act-capture__compact-action act-capture__new-note",
        text: "\u65B0\u5EFA"
      });
      newNoteButton.addEventListener("click", () => {
        void this.createProjectNote();
      });
    }
    const fullscreenButton = topbarActions.createEl("button", {
      cls: "act-capture__secondary act-capture__compact-action act-capture__focus-toggle",
      text: "\u805A\u7126"
    });
    fullscreenButton.addEventListener("click", () => {
      this.toggleMainFullscreen(composer, fullscreenButton);
    });
    const saveButton = topbarActions.createEl("button", {
      cls: "act-capture__primary act-capture__topbar-save",
      text: "\u4FDD\u5B58 \u2192"
    });
    saveButton.addEventListener("click", () => {
      void this.saveInput();
    });
    this.createProjectNoteStatus(topbarMain);
    const editor = composer.createDiv({ cls: "act-capture__editor" });
    const editorHeader = editor.createDiv({ cls: "act-capture__editor-header" });
    editorHeader.createSpan({ cls: "act-capture__editor-dot" });
    editorHeader.createSpan({ cls: "act-capture__editor-time", text: formatEditorDateLabel(/* @__PURE__ */ new Date()) });
    const openNoteButton = editorHeader.createEl("button", {
      cls: "act-capture__editor-menu",
      text: "\u22EF",
      attr: {
        type: "button",
        "aria-label": "\u6253\u5F00\u5F53\u524D\u5199\u5165\u7B14\u8BB0"
      }
    });
    (0, import_obsidian.setTooltip)(openNoteButton, "\u6253\u5F00\u5F53\u524D\u5199\u5165\u7B14\u8BB0");
    openNoteButton.addEventListener("click", () => {
      void this.plugin.openCaptureNote();
    });
    this.inputEl = editor.createEl("textarea", {
      cls: "act-capture__input",
      attr: {
        placeholder: "\u4F60\u73B0\u5728\u5728\u60F3\u4EC0\u4E48\uFF1F",
        rows: "7"
      }
    });
    this.inputEl.value = this.plugin.settings.draftText;
    const editorFooter = editor.createDiv({ cls: "act-capture__editor-footer" });
    const toolbar = editorFooter.createDiv({ cls: "act-capture__toolbar" });
    this.createEditorToolButton(toolbar, "\u6807\u9898", "heading", "#", () => this.insertAtCursor("#"));
    this.createEditorToolButton(toolbar, "\u52A0\u7C97", "bold", "B", () => this.wrapSelection("**", "**", "\u52A0\u7C97\u6587\u5B57"));
    this.createEditorToolButton(toolbar, "\u9879\u76EE\u7B26\u53F7", "list", null, () => this.insertBullet());
    this.createEditorToolButton(toolbar, "\u6DFB\u52A0\u9644\u4EF6", "paperclip", null, () => {
      void this.pickAttachment();
    });
    this.inputEl.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        void this.saveInput();
        return;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "b") {
        event.preventDefault();
        this.wrapSelection("**", "**", "\u52A0\u7C97\u6587\u5B57");
        return;
      }
      if (event.key === "Escape" && composer.hasClass("is-focus-editor")) {
        event.preventDefault();
        this.setMainFullscreen(composer, fullscreenButton, false);
        return;
      }
      this.handleListKeydown(event);
    });
    this.inputEl.addEventListener("input", () => {
      this.rememberInputSelection();
      this.queueDraftSave();
    });
    this.inputEl.addEventListener("select", () => {
      this.rememberInputSelection();
    });
    this.inputEl.addEventListener("keyup", () => {
      this.rememberInputSelection();
    });
    this.inputEl.addEventListener("mouseup", () => {
      this.rememberInputSelection();
    });
    this.inputEl.addEventListener("touchend", () => {
      window.setTimeout(() => this.rememberInputSelection(), 0);
    });
    this.inputEl.addEventListener("focus", () => {
      this.rememberInputSelection();
      this.setKeyboardMode(root, true);
    });
    this.inputEl.addEventListener("blur", () => {
      this.setKeyboardMode(root, false);
      void this.flushDraft();
    });
    const preview = root.createDiv({ cls: "act-capture__preview" });
    const sectionTitle = this.plugin.settings.storageMode === "single" ? "\u6700\u8FD1\u7684\u95EA\u5FF5" : "\u4ECA\u5929\u7684\u95EA\u5FF5";
    preview.createDiv({ cls: "act-capture__section-title", text: sectionTitle });
    this.previewEl = preview.createDiv({ cls: "act-capture__list" });
    this.footerEl = preview.createDiv({ cls: "act-capture__footer" });
    this.previewEl.createDiv({
      cls: "act-capture__empty",
      text: "\u6B63\u5728\u8F7D\u5165\u6700\u8FD1\u95EA\u5FF5..."
    });
    this.schedulePreviewLoad();
    window.setTimeout(
      () => this.inputEl?.focus(),
      isMobileRuntime() ? MOBILE_AUTO_FOCUS_DELAY_MS : DESKTOP_AUTO_FOCUS_DELAY_MS
    );
  }
  createProjectNoteStatus(container) {
    if (this.plugin.settings.storageMode !== "single") return;
    this.currentProjectLabelEl = container.createDiv({ cls: "act-capture__current-note" });
    this.updateCurrentProjectLabel();
  }
  updateCurrentProjectLabel() {
    if (!this.currentProjectLabelEl) return;
    this.currentProjectLabelEl.setText(`\u5199\u5165\uFF1A${this.plugin.getCaptureDisplayName(/* @__PURE__ */ new Date())}`);
  }
  openProjectNoteSelector() {
    const files = this.plugin.getProjectNoteFiles();
    const currentPath = this.plugin.getSingleCapturePath();
    new ProjectNoteSelectModal(this.app, files, currentPath, async (file) => {
      await this.plugin.setSelectedProjectNotePath(file.path);
      this.updateCurrentProjectLabel();
      this.visibleLimit = PAGE_SIZE;
      await this.refreshPreview();
      this.inputEl?.focus();
    }).open();
  }
  async createProjectNote() {
    new ProjectNoteNameModal(this.app, (name) => {
      if (!name) return;
      void this.finishCreatingProjectNote(name);
    }).open();
  }
  async finishCreatingProjectNote(name) {
    const file = await this.plugin.createProjectNote(name);
    if (!file) return;
    await this.plugin.setSelectedProjectNotePath(file.path);
    this.updateCurrentProjectLabel();
    this.visibleLimit = PAGE_SIZE;
    await this.refreshPreview();
    this.inputEl?.focus();
    new import_obsidian.Notice(`\u5DF2\u65B0\u5EFA\u9879\u76EE\u7B14\u8BB0\uFF1A${file.basename}`);
  }
  createEditorToolButton(container, tooltip, icon, text, onClick) {
    const button = container.createEl("button", {
      cls: "act-capture__tool-button",
      attr: {
        type: "button",
        "aria-label": tooltip
      }
    });
    if (text) {
      button.setText(text);
    } else {
      (0, import_obsidian.setIcon)(button, icon);
    }
    (0, import_obsidian.setTooltip)(button, tooltip);
    let handledByPointer = false;
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      this.restoreInputSelection();
    });
    button.addEventListener("pointerup", (event) => {
      event.preventDefault();
      event.stopPropagation();
      handledByPointer = true;
      this.restoreInputSelection();
      onClick();
      window.setTimeout(() => {
        handledByPointer = false;
      }, 0);
    });
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (handledByPointer) return;
      this.restoreInputSelection();
      onClick();
    });
    return button;
  }
  setKeyboardMode(root, active) {
    if (!isMobileRuntime()) return;
    root.toggleClass("is-keyboard-active", active);
    if (active) {
      window.setTimeout(() => {
        this.inputEl?.closest(".act-capture__editor")?.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      }, 80);
    }
  }
  rememberInputSelection() {
    if (!this.inputEl) return;
    this.lastSelectionStart = this.inputEl.selectionStart ?? this.inputEl.value.length;
    this.lastSelectionEnd = this.inputEl.selectionEnd ?? this.lastSelectionStart;
  }
  restoreInputSelection() {
    if (!this.inputEl) return;
    const valueLength = this.inputEl.value.length;
    const start = Math.min(this.lastSelectionStart, valueLength);
    const end = Math.min(this.lastSelectionEnd, valueLength);
    this.inputEl.focus({ preventScroll: true });
    this.inputEl.setSelectionRange(start, end);
  }
  getInputSelection() {
    if (!this.inputEl) return { start: 0, end: 0 };
    if (document.activeElement === this.inputEl) {
      this.rememberInputSelection();
    } else {
      this.restoreInputSelection();
    }
    return {
      start: this.lastSelectionStart,
      end: this.lastSelectionEnd
    };
  }
  insertAtCursor(text) {
    if (!this.inputEl) return;
    const { start, end } = this.getInputSelection();
    this.inputEl.setRangeText(text, start, end, "end");
    this.inputEl.dispatchEvent(new Event("input", { bubbles: true }));
    this.restoreInputSelection();
    this.queueDraftSave();
  }
  wrapSelection(prefix, suffix, placeholder) {
    if (!this.inputEl) return;
    const { start, end } = this.getInputSelection();
    const selectedText = this.inputEl.value.slice(start, end) || placeholder;
    const replacement = `${prefix}${selectedText}${suffix}`;
    this.inputEl.setRangeText(replacement, start, end, "select");
    this.inputEl.selectionStart = start + prefix.length;
    this.inputEl.selectionEnd = start + prefix.length + selectedText.length;
    this.inputEl.dispatchEvent(new Event("input", { bubbles: true }));
    this.rememberInputSelection();
    this.restoreInputSelection();
    this.queueDraftSave();
  }
  insertLinePrefix(prefix) {
    if (!this.inputEl) return;
    const { start, end } = this.getInputSelection();
    const value = this.inputEl.value;
    const lineStart = value.lastIndexOf("\n", Math.max(start - 1, 0)) + 1;
    const selectedText = value.slice(start, end);
    if (selectedText.includes("\n")) {
      const replacement = selectedText.split("\n").map((line) => line.trim() ? `${prefix}${line}` : line).join("\n");
      this.inputEl.setRangeText(replacement, start, end, "end");
    } else {
      this.inputEl.setRangeText(prefix, lineStart, lineStart, "end");
    }
    this.inputEl.dispatchEvent(new Event("input", { bubbles: true }));
    this.restoreInputSelection();
    this.queueDraftSave();
  }
  insertBullet() {
    if (!this.inputEl) return;
    const { start, end } = this.getInputSelection();
    const selectedText = this.inputEl.value.slice(start, end);
    if (selectedText.includes("\n")) {
      const bulletText = selectedText.split("\n").map((line) => line.trim() ? `- ${line}` : line).join("\n");
      this.inputEl.setRangeText(bulletText, start, end, "end");
    } else {
      const lineStart = this.inputEl.value.lastIndexOf("\n", Math.max(start - 1, 0)) + 1;
      const beforeCursor = this.inputEl.value.slice(lineStart, start);
      const insertText = beforeCursor.trim().length === 0 ? "- " : "\n- ";
      this.inputEl.setRangeText(insertText, start, end, "end");
    }
    this.inputEl.dispatchEvent(new Event("input", { bubbles: true }));
    this.restoreInputSelection();
    this.queueDraftSave();
  }
  insertTask() {
    if (!this.inputEl) return;
    const { start, end } = this.getInputSelection();
    const selectedText = this.inputEl.value.slice(start, end);
    if (selectedText.includes("\n")) {
      const taskText = selectedText.split("\n").map((line) => line.trim() ? `- [ ] ${line}` : line).join("\n");
      this.inputEl.setRangeText(taskText, start, end, "end");
    } else {
      const lineStart = this.inputEl.value.lastIndexOf("\n", Math.max(start - 1, 0)) + 1;
      const beforeCursor = this.inputEl.value.slice(lineStart, start);
      const insertText = beforeCursor.trim().length === 0 ? "- [ ] " : "\n- [ ] ";
      this.inputEl.setRangeText(insertText, start, end, "end");
    }
    this.inputEl.dispatchEvent(new Event("input", { bubbles: true }));
    this.restoreInputSelection();
    this.queueDraftSave();
  }
  insertMarkdownLink() {
    if (!this.inputEl) return;
    const { start, end } = this.getInputSelection();
    const selectedText = this.inputEl.value.slice(start, end) || "\u94FE\u63A5\u6587\u5B57";
    const replacement = `[${selectedText}](https://)`;
    this.inputEl.setRangeText(replacement, start, end, "select");
    const urlStart = start + selectedText.length + 3;
    this.inputEl.selectionStart = urlStart;
    this.inputEl.selectionEnd = urlStart + "https://".length;
    this.inputEl.dispatchEvent(new Event("input", { bubbles: true }));
    this.rememberInputSelection();
    this.restoreInputSelection();
    this.queueDraftSave();
  }
  handleListKeydown(event) {
    if (!this.inputEl) return;
    const cursor = this.inputEl.selectionStart ?? this.inputEl.value.length;
    const lineStart = this.inputEl.value.lastIndexOf("\n", Math.max(cursor - 1, 0)) + 1;
    const lineBeforeCursor = this.inputEl.value.slice(lineStart, cursor);
    if (event.key === "Enter") {
      const bulletMatch = lineBeforeCursor.match(/^(\s*)-\s(?:\[( |x|X)\]\s)?(.*)$/);
      if (!bulletMatch) return;
      event.preventDefault();
      if (bulletMatch[3].trim().length === 0) {
        this.inputEl.setRangeText("\n", lineStart, cursor, "end");
      } else {
        const marker = bulletMatch[2] === void 0 ? "- " : "- [ ] ";
        this.inputEl.setRangeText(`
${bulletMatch[1]}${marker}`, cursor, cursor, "end");
      }
      this.inputEl.dispatchEvent(new Event("input", { bubbles: true }));
      this.queueDraftSave();
      return;
    }
    if (event.key === "Tab") {
      const lineEnd = this.inputEl.value.indexOf("\n", cursor);
      const currentLine = this.inputEl.value.slice(lineStart, lineEnd === -1 ? void 0 : lineEnd);
      if (!/^\s*-\s/.test(currentLine)) return;
      event.preventDefault();
      if (event.shiftKey) {
        const removeCount = this.inputEl.value.slice(lineStart, lineStart + 2) === "  " ? 2 : 0;
        if (removeCount > 0) this.inputEl.setRangeText("", lineStart, lineStart + removeCount, "end");
      } else {
        this.inputEl.setRangeText("  ", lineStart, lineStart, "end");
      }
      this.inputEl.dispatchEvent(new Event("input", { bubbles: true }));
      this.queueDraftSave();
    }
  }
  async pickAttachment() {
    if (!this.inputEl) return;
    const picker = document.createElement("input");
    picker.type = "file";
    picker.multiple = true;
    picker.addEventListener("change", async () => {
      const files = Array.from(picker.files ?? []);
      if (files.length === 0) return;
      const embeds = [];
      for (const file of files) {
        const savedFile = await this.plugin.importAttachment(file);
        embeds.push(buildAttachmentEmbed(savedFile));
      }
      this.insertAtCursor(embeds.join("\n"));
      new import_obsidian.Notice(files.length === 1 ? "\u9644\u4EF6\u5DF2\u63D2\u5165" : `\u5DF2\u63D2\u5165 ${files.length} \u4E2A\u9644\u4EF6`);
    });
    picker.click();
  }
  toggleMainFullscreen(composer, button) {
    this.setMainFullscreen(composer, button, !composer.hasClass("is-focus-editor"));
  }
  setMainFullscreen(composer, button, expanded) {
    const root = composer.closest(".act-capture");
    composer.toggleClass("is-focus-editor", expanded);
    root?.toggleClass("is-focus-mode", expanded);
    button.setText(expanded ? "\u9000\u51FA" : "\u805A\u7126");
    if (expanded) {
      window.setTimeout(() => this.inputEl?.focus(), 30);
    } else {
      this.inputEl?.blur();
    }
  }
  async onClose() {
    this.clearPreviewLoadTimer();
    await this.flushDraft();
  }
  async rebuildUI() {
    await this.flushDraft();
    const root = this.containerEl.children[1];
    root.empty();
    root.addClass("act-capture");
    this.buildUI(root);
  }
  async saveInput() {
    const value = this.inputEl?.value.trim() ?? "";
    if (!value) {
      new import_obsidian.Notice("\u5148\u5199\u4E00\u70B9\u5185\u5BB9");
      this.inputEl?.focus();
      return;
    }
    await this.plugin.saveThought(value);
    if (this.inputEl) this.inputEl.value = "";
    await this.plugin.saveDraft("");
    this.visibleLimit = PAGE_SIZE;
    await this.refreshPreview();
    this.inputEl?.focus();
    new import_obsidian.Notice("\u4FDD\u5B58\u6210\u529F");
  }
  queueDraftSave() {
    if (this.draftSaveTimer !== null) window.clearTimeout(this.draftSaveTimer);
    this.draftSaveTimer = window.setTimeout(() => {
      this.draftSaveTimer = null;
      void this.flushDraft();
    }, 300);
  }
  async flushDraft() {
    if (this.draftSaveTimer !== null) {
      window.clearTimeout(this.draftSaveTimer);
      this.draftSaveTimer = null;
    }
    await this.plugin.saveDraft(this.inputEl?.value ?? "");
  }
  schedulePreviewLoad() {
    this.clearPreviewLoadTimer();
    this.previewLoadTimer = window.setTimeout(() => {
      this.previewLoadTimer = null;
      void this.refreshPreview();
    }, isMobileRuntime() ? MOBILE_PREVIEW_LOAD_DELAY_MS : DESKTOP_PREVIEW_LOAD_DELAY_MS);
  }
  clearPreviewLoadTimer() {
    if (this.previewLoadTimer === null) return;
    window.clearTimeout(this.previewLoadTimer);
    this.previewLoadTimer = null;
  }
  async refreshPreview() {
    if (!this.previewEl) return;
    this.previewEl.empty();
    this.footerEl?.empty();
    const file = await this.plugin.getCaptureFile(false);
    if (!file) {
      this.previewEl.createDiv({
        cls: "act-capture__empty",
        text: "\u8FD8\u6CA1\u6709\u76EE\u6807\u7B14\u8BB0\uFF0C\u4FDD\u5B58\u7B2C\u4E00\u6761\u95EA\u5FF5\u65F6\u4F1A\u81EA\u52A8\u521B\u5EFA\u3002"
      });
      return;
    }
    const content = await this.app.vault.cachedRead(file);
    const thoughts = this.plugin.extractPreviewThoughts(content, MAX_PREVIEW_LIMIT);
    if (thoughts.length === 0) {
      this.previewEl.createDiv({
        cls: "act-capture__empty",
        text: "\u4ECA\u5929\u8FD8\u6CA1\u6709\u95EA\u5FF5\u3002"
      });
      return;
    }
    const cappedThoughts = thoughts.slice(0, MAX_PREVIEW_LIMIT);
    const visibleThoughts = cappedThoughts.slice(0, this.visibleLimit);
    for (const thought of visibleThoughts) {
      await this.renderThought(file, thought);
    }
    if (this.footerEl) {
      const shown = Math.min(visibleThoughts.length, MAX_PREVIEW_LIMIT);
      const total = Math.min(cappedThoughts.length, MAX_PREVIEW_LIMIT);
      this.footerEl.createSpan({
        cls: "act-capture__count",
        text: `\u5DF2\u663E\u793A ${shown}/${total}`
      });
      if (shown < total) {
        const moreButton = this.footerEl.createEl("button", {
          cls: "act-capture__secondary act-capture__more",
          text: "\u5237\u65B0\u66F4\u591A"
        });
        moreButton.addEventListener("click", () => {
          this.visibleLimit = Math.min(this.visibleLimit + PAGE_SIZE, MAX_PREVIEW_LIMIT);
          void this.refreshPreview();
        });
      }
    }
  }
  async renderThought(file, thought) {
    if (!this.previewEl) return;
    const item = this.previewEl.createDiv({ cls: "act-capture__item" });
    const contentEl = item.createDiv({ cls: "act-capture__item-content" });
    await import_obsidian.MarkdownRenderer.render(this.app, thought.source, contentEl, file.path, this);
    const actions = item.createDiv({ cls: "act-capture__item-actions" });
    const openButton = actions.createEl("button", {
      cls: "act-capture__item-button",
      text: "\u8DF3\u8F6C"
    });
    openButton.addEventListener("click", () => {
      void this.plugin.openThought(thought);
    });
    const editButton = actions.createEl("button", {
      cls: "act-capture__item-button",
      text: "\u7F16\u8F91"
    });
    editButton.addEventListener("click", () => {
      this.renderInlineEditor(item, thought);
    });
    const deleteButton = actions.createEl("button", {
      cls: "act-capture__item-button act-capture__item-button--danger",
      text: "\u5220\u9664"
    });
    deleteButton.addEventListener("click", async () => {
      if (!window.confirm("\u5220\u9664\u8FD9\u6761\u95EA\u5FF5\uFF1F")) return;
      await this.plugin.deleteThought(thought);
      await this.refreshPreview();
      new import_obsidian.Notice("\u95EA\u5FF5\u5DF2\u5220\u9664");
    });
  }
  renderInlineEditor(item, thought) {
    item.empty();
    const editor = item.createEl("textarea", {
      cls: "act-capture__edit-input",
      attr: {
        rows: "5"
      }
    });
    editor.value = thought.body;
    const actions = item.createDiv({ cls: "act-capture__edit-actions" });
    const cancelButton = actions.createEl("button", {
      cls: "act-capture__item-button",
      text: "\u53D6\u6D88"
    });
    cancelButton.addEventListener("click", () => {
      void this.refreshPreview();
    });
    const fullscreenButton = actions.createEl("button", {
      cls: "act-capture__item-button",
      text: "\u5168\u5C4F"
    });
    fullscreenButton.addEventListener("click", () => {
      const expanded = !item.hasClass("is-fullscreen-editor");
      item.toggleClass("is-fullscreen-editor", expanded);
      fullscreenButton.setText(expanded ? "\u7F29\u5C0F" : "\u5168\u5C4F");
      window.setTimeout(() => editor.focus(), 30);
    });
    editor.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && item.hasClass("is-fullscreen-editor")) {
        event.preventDefault();
        item.removeClass("is-fullscreen-editor");
        fullscreenButton.setText("\u5168\u5C4F");
      }
    });
    const saveButton = actions.createEl("button", {
      cls: "act-capture__item-button act-capture__item-button--primary",
      text: "\u4FDD\u5B58"
    });
    saveButton.addEventListener("click", async () => {
      const value = editor.value.trim();
      if (!value) {
        new import_obsidian.Notice("\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A");
        editor.focus();
        return;
      }
      await this.plugin.updateThought(thought, value);
      await this.refreshPreview();
      new import_obsidian.Notice("\u95EA\u5FF5\u5DF2\u66F4\u65B0");
    });
    window.setTimeout(() => editor.focus(), 60);
  }
};
var MobileDailyCapturePlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = { ...DEFAULT_SETTINGS };
    this.updateCheckTimes = [];
  }
  async onload() {
    await this.loadSettings();
    this.registerView(VIEW_TYPE, (leaf) => new DailyCaptureView(leaf, this));
    this.addSettingTab(new MobileDailyCaptureSettingTab(this.app, this));
    this.addCommand({
      id: "act-capture-open",
      name: "\u6253\u5F00\u95EA\u5FF5\u7C3F",
      callback: () => {
        void this.activateView();
      }
    });
    this.addCommand({
      id: "open-today-daily-note",
      name: "\u6253\u5F00\u95EA\u5FF5\u4FDD\u5B58\u7B14\u8BB0",
      callback: () => {
        void this.openCaptureNote();
      }
    });
    this.app.workspace.onLayoutReady(() => {
      if (this.shouldOpenOnStartup()) {
        const delay = isMobileRuntime() ? MOBILE_STARTUP_OPEN_DELAY_MS : DESKTOP_STARTUP_OPEN_DELAY_MS;
        window.setTimeout(() => void this.activateView(), delay);
      }
    });
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
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
  shouldOpenOnStartup() {
    if (isMobileRuntime()) return this.settings.openOnMobileStartup;
    return this.settings.openOnDesktopStartup;
  }
  async saveThought(text) {
    const file = await this.getCaptureFile(true);
    if (!file) throw new Error("Capture note was not created.");
    if (this.settings.storageMode === "single") {
      const entry2 = buildSingleNoteEntry(text, this.getSingleEntryHeading(/* @__PURE__ */ new Date()));
      await this.app.vault.process(file, (content) => sortSingleNoteContentNewestFirst(insertSingleNoteThought(content, entry2)));
      return;
    }
    const entry = buildEntry(text, /* @__PURE__ */ new Date());
    await this.app.vault.process(file, (content) => insertThought(content, entry, this.getThoughtHeading()));
  }
  async updateThought(thought, text) {
    const file = await this.getCaptureFile(false);
    if (!file) throw new Error("Capture note was not found.");
    if (this.settings.storageMode === "single") {
      await this.app.vault.process(file, (content) => replaceSingleNoteThought(content, thought, text));
      return;
    }
    await this.app.vault.process(file, (content) => replaceThought(content, thought, text, this.getThoughtHeading()));
  }
  async deleteThought(thought) {
    const file = await this.getCaptureFile(false);
    if (!file) throw new Error("Capture note was not found.");
    if (this.settings.storageMode === "single") {
      await this.app.vault.process(file, (content) => deleteSingleNoteThought(content, thought));
      return;
    }
    await this.app.vault.process(file, (content) => deleteThought(content, thought, this.getThoughtHeading()));
  }
  async openCaptureNote() {
    const file = await this.getCaptureFile(true);
    if (!file) throw new Error("Capture note was not created.");
    await this.sortSingleNoteIfNeeded(file);
    const leaf = this.getOrCreateLeafForFile(file);
    await leaf.openFile(file);
    this.app.workspace.setActiveLeaf(leaf, { focus: true });
  }
  async openThought(thought) {
    const file = await this.getCaptureFile(false);
    if (!file) throw new Error("Capture note was not found.");
    let targetLine = thought.startLine;
    const sortedContent = await this.sortSingleNoteIfNeeded(file);
    if (sortedContent) {
      const freshThought = extractSingleNoteThoughts(sortedContent).find((entry) => entry.source === thought.source);
      if (freshThought) targetLine = freshThought.startLine;
    }
    const leaf = this.getOrCreateLeafForFile(file);
    await leaf.openFile(file, {
      active: true,
      eState: { line: targetLine }
    });
    this.app.workspace.setActiveLeaf(leaf, { focus: true });
  }
  getOrCreateLeafForFile(file) {
    let existingLeaf = null;
    this.app.workspace.iterateAllLeaves((leaf) => {
      if (!existingLeaf && leaf.view instanceof import_obsidian.MarkdownView && leaf.view.file?.path === file.path) {
        existingLeaf = leaf;
      }
    });
    return existingLeaf ?? this.app.workspace.getLeaf("split", "vertical");
  }
  async sortSingleNoteIfNeeded(file) {
    if (this.settings.storageMode !== "single") return null;
    const content = await this.app.vault.read(file);
    const sorted = sortSingleNoteContentNewestFirst(content);
    if (sorted !== content) await this.app.vault.modify(file, sorted);
    return sorted;
  }
  getLogConfigSource(period) {
    return period === "daily" ? this.settings.dailyConfigSource : this.settings.weeklyConfigSource;
  }
  getCustomLogSettings(period) {
    if (period === "weekly") {
      return {
        folder: normalizeFolderPath(this.settings.weeklyFolder),
        format: this.settings.weeklyFileNameFormat.trim() || DEFAULT_SETTINGS.weeklyFileNameFormat,
        template: this.settings.weeklyTemplatePath.trim()
      };
    }
    return {
      folder: normalizeFolderPath(this.settings.dailyFolder),
      format: this.settings.dailyFileNameFormat.trim() || DEFAULT_SETTINGS.dailyFileNameFormat,
      template: this.settings.dailyTemplatePath.trim()
    };
  }
  getObsidianLogSettings(period) {
    const appWithPlugins = this.app;
    if (period === "daily") {
      const dailyPlugin = appWithPlugins.internalPlugins?.getPluginById?.("daily-notes") ?? appWithPlugins.internalPlugins?.plugins?.["daily-notes"];
      const options = dailyPlugin?.instance?.options;
      if (!options) return null;
      return {
        folder: normalizeFolderPath(options.folder ?? ""),
        format: options.format?.trim() || DEFAULT_SETTINGS.dailyFileNameFormat,
        template: options.template?.trim() || ""
      };
    }
    const periodicNotes = appWithPlugins.plugins?.getPlugin?.("periodic-notes");
    const weekly = periodicNotes?.settings?.weekly;
    if (weekly) {
      return {
        folder: normalizeFolderPath(weekly.folder ?? ""),
        format: weekly.format?.trim() || DEFAULT_SETTINGS.weeklyFileNameFormat,
        template: weekly.template?.trim() || ""
      };
    }
    const calendar = appWithPlugins.plugins?.getPlugin?.("calendar")?.options;
    if (!calendar) return null;
    return {
      folder: normalizeFolderPath(calendar.weeklyNoteFolder ?? ""),
      format: calendar.weeklyNoteFormat?.trim() || DEFAULT_SETTINGS.weeklyFileNameFormat,
      template: calendar.weeklyNoteTemplate?.trim() || ""
    };
  }
  getActiveLogSettings(period) {
    if (this.getLogConfigSource(period) === "obsidian") {
      return this.getObsidianLogSettings(period) ?? this.getCustomLogSettings(period);
    }
    return this.getCustomLogSettings(period);
  }
  getLogSettingsSourceName(period) {
    if (period === "daily") return "Obsidian \u6838\u5FC3\u300C\u6BCF\u65E5\u7B14\u8BB0\u300D";
    return "Periodic Notes\u300C\u6BCF\u5468\u7B14\u8BB0\u300D\u6216 Calendar\u300C\u6BCF\u5468\u7B14\u8BB0\u300D";
  }
  async getCaptureFile(createIfMissing) {
    const path = this.getCapturePath(/* @__PURE__ */ new Date());
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing instanceof import_obsidian.TFile) return existing;
    if (!createIfMissing) return null;
    await this.ensureParentFolder(path);
    const template = await this.getCaptureTemplate(/* @__PURE__ */ new Date());
    await this.app.vault.create(path, template);
    const created = this.app.vault.getAbstractFileByPath(path);
    if (created instanceof import_obsidian.TFile) return created;
    throw new Error(`Failed to create capture note: ${path}`);
  }
  async getCaptureTemplate(date) {
    if (this.settings.storageMode === "single") {
      const title2 = this.settings.singleNotePath.split("/").pop()?.replace(/\.md$/i, "") || DEFAULT_SETTINGS.thoughtHeading;
      return `# ${title2}

`;
    }
    const period = this.settings.storageMode === "weekly" ? "weekly" : "daily";
    const logSettings = this.getActiveLogSettings(period);
    const template = await this.readLogTemplate(logSettings.template);
    if (template !== null) return this.applyLogTemplateVariables(template, date, logSettings.format);
    const title = formatLogFileName(logSettings.format, date, period === "weekly" ? DEFAULT_SETTINGS.weeklyFileNameFormat : DEFAULT_SETTINGS.dailyFileNameFormat).replace(/\.md$/i, "");
    return `# ${title}

## ${this.getThoughtHeading()}

`;
  }
  async readLogTemplate(templatePath) {
    const normalizedPath = (0, import_obsidian.normalizePath)(templatePath.trim());
    if (!normalizedPath) return null;
    const templateFile = this.app.metadataCache.getFirstLinkpathDest(normalizedPath, "") ?? this.app.vault.getAbstractFileByPath(normalizedPath);
    return templateFile instanceof import_obsidian.TFile ? this.app.vault.cachedRead(templateFile) : null;
  }
  applyLogTemplateVariables(template, date, format) {
    const filename = formatLogFileName(format, date, DEFAULT_SETTINGS.dailyFileNameFormat).replace(/\.md$/i, "");
    const moment = getMomentFactory();
    const now = moment?.();
    return template.replace(/\{\{\s*date\s*\}\}/gi, filename).replace(/\{\{\s*title\s*\}\}/gi, filename).replace(/\{\{\s*time\s*\}\}/gi, formatTime(/* @__PURE__ */ new Date())).replace(
      /\{\{\s*(date|time)\s*(([+-]\d+)([yqmwdhs]))?\s*(:.+?)?\}\}/gi,
      (_match, _kind, calculation, amount, unit, formatPart) => {
        if (!moment) return filename;
        const current = moment(date).set({
          hour: Number(now?.format("H") ?? date.getHours()),
          minute: Number(now?.format("m") ?? date.getMinutes()),
          second: Number(now?.format("s") ?? date.getSeconds())
        });
        if (calculation && amount && unit) current.add(Number(amount), unit);
        return formatPart ? current.format(formatPart.slice(1).trim()) : current.format(format);
      }
    ).replace(/\{\{\s*yesterday\s*\}\}/gi, this.formatRelativeLogDate(date, -1, format)).replace(/\{\{\s*tomorrow\s*\}\}/gi, this.formatRelativeLogDate(date, 1, format));
  }
  formatRelativeLogDate(date, offset, format) {
    const moment = getMomentFactory();
    if (moment) return moment(date).add(offset, "day").format(format);
    const target = new Date(date);
    target.setDate(target.getDate() + offset);
    return applyDateFormat(format, target);
  }
  extractThoughts(content) {
    if (this.settings.storageMode === "single") return extractSingleNoteThoughts(content);
    return extractThoughts(content, this.getThoughtHeading());
  }
  extractPreviewThoughts(content, limit) {
    if (this.settings.storageMode === "single") return extractSingleNotePreviewThoughts(content, limit);
    return extractThoughts(content, this.getThoughtHeading()).slice(0, limit);
  }
  getThoughtHeading() {
    return cleanHeadingText(this.settings.thoughtHeading);
  }
  getStorageModeLabel() {
    if (this.settings.storageMode === "single") return "\u5355\u4E00\u7B14\u8BB0";
    return this.settings.storageMode === "weekly" ? "\u6BCF\u5468\u7B14\u8BB0" : "\u6BCF\u65E5\u65E5\u5FD7";
  }
  getCaptureDisplayName(date) {
    const path = this.getCapturePath(date);
    const fileName = path.split("/").pop() ?? path;
    return fileName.replace(/\.md$/i, "");
  }
  getSingleEntryHeading(date) {
    return formatSingleEntryHeading(this.settings.singleEntryHeadingFormat, date);
  }
  getCurrentLogPath(date) {
    const period = this.settings.storageMode === "weekly" ? "weekly" : "daily";
    const logSettings = this.getActiveLogSettings(period);
    return joinVaultPath(
      logSettings.folder,
      formatLogFileName(logSettings.format, date, period === "weekly" ? DEFAULT_SETTINGS.weeklyFileNameFormat : DEFAULT_SETTINGS.dailyFileNameFormat)
    );
  }
  getCapturePath(date) {
    if (this.settings.storageMode === "single") return this.getSingleCapturePath();
    return this.getCurrentLogPath(date);
  }
  getSingleCapturePath() {
    const files = this.getProjectNoteFiles();
    const selected = (0, import_obsidian.normalizePath)(this.settings.selectedProjectNotePath.trim());
    if (selected && files.some((file) => file.path === selected)) return selected;
    if (files.length > 0) return files[0].path;
    return normalizeNotePath(this.settings.singleNotePath);
  }
  getProjectNoteFiles() {
    const folderPath = normalizeFolderPath(this.settings.projectNotesFolder);
    if (!folderPath) return [];
    const folder = this.app.vault.getAbstractFileByPath(folderPath);
    if (!(folder instanceof import_obsidian.TFolder)) return [];
    return folder.children.filter((child) => child instanceof import_obsidian.TFile && child.extension === "md").sort((a, b) => a.basename.localeCompare(b.basename, "zh-CN"));
  }
  getVaultFolders() {
    return this.app.vault.getAllLoadedFiles().filter((file) => file instanceof import_obsidian.TFolder && file.path.length > 0).sort((a, b) => a.path.localeCompare(b.path, "zh-CN"));
  }
  async setSelectedProjectNotePath(path) {
    this.settings.selectedProjectNotePath = path;
    if (path) this.settings.singleNotePath = path;
    await this.saveSettings();
  }
  async createProjectNote(name) {
    const fileName = normalizeProjectNoteName(name);
    if (!fileName) return null;
    const folderPath = normalizeFolderPath(this.settings.projectNotesFolder);
    if (!folderPath) {
      new import_obsidian.Notice("\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u914D\u7F6E\u9879\u76EE\u95EA\u5FF5\u6587\u4EF6\u5939");
      return null;
    }
    const path = (0, import_obsidian.normalizePath)(`${folderPath}/${fileName}`);
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing instanceof import_obsidian.TFile) {
      await this.setSelectedProjectNotePath(existing.path);
      return existing;
    }
    if (existing) {
      new import_obsidian.Notice("\u540C\u540D\u8DEF\u5F84\u5DF2\u5B58\u5728\uFF0C\u4F46\u4E0D\u662F\u7B14\u8BB0\u6587\u4EF6");
      return null;
    }
    await this.ensureParentFolder(path);
    const title = fileName.replace(/\.md$/i, "");
    const file = await this.app.vault.create(path, `# ${title}

`);
    await this.setSelectedProjectNotePath(file.path);
    return file;
  }
  async importAttachment(file) {
    const capturePath = this.getCapturePath(/* @__PURE__ */ new Date());
    const parentFolder = getParentFolderPath(capturePath);
    const attachmentFolder = (0, import_obsidian.normalizePath)(parentFolder ? `${parentFolder}/\u9644\u4EF6` : "\u9644\u4EF6");
    const fileName = sanitizeFileName(file.name);
    const targetPath = await this.getAvailableAttachmentPath(attachmentFolder, fileName);
    await this.ensureParentFolder(targetPath);
    return this.app.vault.createBinary(targetPath, await file.arrayBuffer());
  }
  async getAvailableAttachmentPath(folder, fileName) {
    const normalizedName = sanitizeFileName(fileName);
    const dotIndex = normalizedName.lastIndexOf(".");
    const baseName = dotIndex > 0 ? normalizedName.slice(0, dotIndex) : normalizedName;
    const extension = dotIndex > 0 ? normalizedName.slice(dotIndex) : "";
    let index = 0;
    while (true) {
      const suffix = index === 0 ? "" : `-${index}`;
      const candidate = (0, import_obsidian.normalizePath)(`${folder}/${baseName}${suffix}${extension}`);
      if (!this.app.vault.getAbstractFileByPath(candidate)) return candidate;
      index++;
    }
  }
  async ensureParentFolder(path) {
    const parts = path.split("/");
    parts.pop();
    if (parts.length === 0) return;
    let currentPath = "";
    for (const part of parts) {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      const existing = this.app.vault.getAbstractFileByPath(currentPath);
      if (existing instanceof import_obsidian.TFolder) continue;
      if (existing) throw new Error(`Path exists and is not a folder: ${currentPath}`);
      await this.app.vault.createFolder(currentPath);
    }
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async saveDraft(text) {
    if (this.settings.draftText === text) return;
    this.settings.draftText = text;
    this.settings.draftUpdatedAt = text ? Date.now() : 0;
    await this.saveSettings();
  }
  refreshOpenViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      if (leaf.view instanceof DailyCaptureView) void leaf.view.rebuildUI();
    }
  }
  // 从 Release 附件读取 manifest.json，保证「检查到的版本」与「实际下载的文件」来自同一发布
  async fetchLatestReleaseVersion() {
    const resp = await (0, import_obsidian.requestUrl)({
      url: `https://github.com/${UPDATE_REPO}/releases/latest/download/manifest.json`
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
  async fetchReleaseChecksums() {
    try {
      const resp = await (0, import_obsidian.requestUrl)({
        url: `https://github.com/${UPDATE_REPO}/releases/latest/download/checksums.json`
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
      const latest = await this.fetchLatestReleaseVersion();
      return { hasUpdate: this.isNewerVersion(latest, this.manifest.version), latest, current: this.manifest.version };
    } catch (err) {
      this.updateCheckTimes.pop();
      throw err;
    }
  }
  async performUpdate() {
    const latest = await this.fetchLatestReleaseVersion();
    if (!this.isNewerVersion(latest, this.manifest.version)) return latest;
    const pluginDir = this.manifest.dir;
    if (!pluginDir) throw new Error("\u65E0\u6CD5\u786E\u5B9A\u63D2\u4EF6\u76EE\u5F55");
    const requiredFiles = ["main.js", "manifest.json"];
    const optionalFiles = ["styles.css"];
    const downloaded = /* @__PURE__ */ new Map();
    for (const filename of requiredFiles) {
      const fileResp = await (0, import_obsidian.requestUrl)({
        url: `https://github.com/${UPDATE_REPO}/releases/latest/download/${filename}`
      });
      if (!fileResp.arrayBuffer || fileResp.arrayBuffer.byteLength === 0) {
        throw new Error(`\u4E0B\u8F7D\u7684 ${filename} \u4E3A\u7A7A\uFF0C\u5DF2\u53D6\u6D88\u66F4\u65B0`);
      }
      downloaded.set(filename, fileResp.arrayBuffer);
    }
    for (const filename of optionalFiles) {
      try {
        const fileResp = await (0, import_obsidian.requestUrl)({
          url: `https://github.com/${UPDATE_REPO}/releases/latest/download/${filename}`
        });
        if (fileResp.arrayBuffer && fileResp.arrayBuffer.byteLength > 0) {
          downloaded.set(filename, fileResp.arrayBuffer);
        }
      } catch {
      }
    }
    const checksums = await this.fetchReleaseChecksums();
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
      const resp = await (0, import_obsidian.requestUrl)({
        url: `https://raw.githubusercontent.com/${UPDATE_REPO}/main/releases.json`
      });
      const notes = resp.json ?? {};
      const items = notes[version];
      if (items && items.length > 0) return items.join("\n");
    } catch {
    }
    return "";
  }
};
var MobileDailyCaptureSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.activeTab = 0;
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("act-capture-settings");
    const tabs = ["\u914D\u7F6E", "\u66F4\u65B0", "\u652F\u6301"];
    if (this.activeTab >= tabs.length) this.activeTab = 0;
    const tabBar = containerEl.createDiv({ cls: "act-capture-settings__tab-bar" });
    const contentEl = containerEl.createDiv({ cls: "act-capture-settings__content" });
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabBar.createDiv({
        text: tabs[i],
        cls: `act-capture-settings__tab${i === this.activeTab ? " is-active" : ""}`
      });
      tab.addEventListener("click", () => {
        this.activeTab = i;
        tabBar.querySelectorAll(".act-capture-settings__tab").forEach((el, idx) => {
          el.toggleClass("is-active", idx === i);
        });
        this.renderTabContent(contentEl);
      });
    }
    this.renderTabContent(contentEl);
  }
  renderTabContent(container) {
    container.empty();
    switch (this.activeTab) {
      case 0:
        this.displayConfigTab(container);
        break;
      case 1:
        this.displayUpdateSection(container);
        break;
      case 2:
        this.displaySupportSection(container);
        break;
    }
  }
  displayConfigTab(containerEl) {
    containerEl.createEl("h3", { text: "\u542F\u52A8" });
    new import_obsidian.Setting(containerEl).setName("\u624B\u673A\u7AEF\u542F\u52A8\u65F6\u6253\u5F00").setDesc("\u5728\u624B\u673A\u7AEF\u6253\u5F00 Obsidian \u540E\uFF0C\u81EA\u52A8\u8FDB\u5165\u95EA\u5FF5\u7C3F\u3002").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.openOnMobileStartup).onChange(async (value) => {
        this.plugin.settings.openOnMobileStartup = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u7535\u8111\u7AEF\u542F\u52A8\u65F6\u6253\u5F00").setDesc("\u5728\u7535\u8111\u7AEF\u6253\u5F00 Obsidian \u540E\uFF0C\u81EA\u52A8\u8FDB\u5165\u95EA\u5FF5\u7C3F\u3002").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.openOnDesktopStartup).onChange(async (value) => {
        this.plugin.settings.openOnDesktopStartup = value;
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u4FDD\u5B58\u6A21\u5F0F").setDesc("\u9009\u62E9\u628A\u95EA\u5FF5\u4FDD\u5B58\u5230\u6BCF\u65E5\u65E5\u5FD7\u3001\u6BCF\u5468\u7B14\u8BB0\uFF0C\u6216\u4FDD\u5B58\u5230\u4E00\u7BC7\u56FA\u5B9A\u7B14\u8BB0\u3002").addDropdown((dropdown) => {
      dropdown.addOption("daily", "\u6BCF\u65E5\u65E5\u5FD7").addOption("weekly", "\u6BCF\u5468\u7B14\u8BB0").addOption("single", "\u5355\u4E00\u7B14\u8BB0").setValue(this.plugin.settings.storageMode).onChange(async (value) => {
        this.plugin.settings.storageMode = value;
        await this.plugin.saveSettings();
        this.plugin.refreshOpenViews();
        this.display();
      });
    });
    if (this.plugin.settings.storageMode === "single") {
      this.displaySingleModeSettings(containerEl);
    } else {
      this.displayLogModeSettings(containerEl, this.plugin.settings.storageMode);
    }
  }
  displaySingleModeSettings(containerEl) {
    containerEl.createEl("h3", { text: "\u5355\u4E00\u7B14\u8BB0\u6A21\u5F0F" });
    new import_obsidian.Setting(containerEl).setName("\u9879\u76EE\u95EA\u5FF5\u6587\u4EF6\u5939").setDesc("\u4FDD\u5B58\u6A21\u5F0F\u4E3A\u201C\u5355\u4E00\u7B14\u8BB0\u201D\u65F6\uFF0C\u9996\u9875\u53EF\u4ECE\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u5DF2\u6709\u7684 Markdown \u7B14\u8BB0\u4E2D\u9009\u62E9\u5199\u5165\u76EE\u6807\u3002").addSearch((search) => {
      const folders = this.plugin.getVaultFolders();
      const currentFolder = normalizeFolderPath(this.plugin.settings.projectNotesFolder);
      const listId = "act-capture-project-folder-options";
      const optionsEl = containerEl.createEl("datalist");
      optionsEl.id = listId;
      if (currentFolder && !folders.some((folder) => folder.path === currentFolder)) {
        optionsEl.createEl("option", { attr: { value: currentFolder } });
      }
      for (const folder of folders) {
        optionsEl.createEl("option", { attr: { value: folder.path } });
      }
      search.inputEl.setAttribute("list", listId);
      search.inputEl.setAttribute("autocomplete", "off");
      search.setPlaceholder("\u8F93\u5165\u6216\u9009\u62E9\u9879\u76EE\u95EA\u5FF5\u6587\u4EF6\u5939").setValue(currentFolder).onChange(async (value) => {
        this.plugin.settings.projectNotesFolder = normalizeFolderPath(value);
        const files = this.plugin.getProjectNoteFiles();
        if (!files.some((file) => file.path === this.plugin.settings.selectedProjectNotePath)) {
          this.plugin.settings.selectedProjectNotePath = files[0]?.path ?? "";
        }
        await this.plugin.saveSettings();
        this.plugin.refreshOpenViews();
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u95EA\u5FF5\u4E8C\u7EA7\u6807\u9898\u683C\u5F0F").setDesc("\u7528\u4E8E\u5355\u4E00\u7B14\u8BB0\u4E2D\u6BCF\u6761\u95EA\u5FF5\u7684 `##` \u6807\u9898\u3002\u5EFA\u8BAE\u4F7F\u7528\u5E38\u89C1\u683C\u5F0F\uFF1AYYYYMMDD HH:mm\u3002\u4E5F\u652F\u6301 YYYY\u3001YY\u3001MM\u3001DD\u3001HH\u3001mm\uFF0C\u4EE5\u53CA\u65E7\u53D8\u91CF {date}\u3001{time}\u3001{weekday} \u7B49\u3002").addText((text) => {
      const preview = containerEl.createDiv({ cls: "act-capture-setting-preview" });
      const updatePreview = (format) => {
        preview.setText(`\u5F53\u524D\u6548\u679C\uFF1A## ${formatSingleEntryHeading(format, /* @__PURE__ */ new Date())}`);
      };
      updatePreview(this.plugin.settings.singleEntryHeadingFormat);
      text.setPlaceholder("YYYYMMDD HH:mm").setValue(this.plugin.settings.singleEntryHeadingFormat).onChange(async (value) => {
        this.plugin.settings.singleEntryHeadingFormat = value.trim() || DEFAULT_SETTINGS.singleEntryHeadingFormat;
        updatePreview(this.plugin.settings.singleEntryHeadingFormat);
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u5355\u4E00\u7B14\u8BB0\u8DEF\u5F84").setDesc("\u5F53\u201C\u9879\u76EE\u95EA\u5FF5\u6587\u4EF6\u5939\u201D\u91CC\u6CA1\u6709\u53EF\u9009\u7B14\u8BB0\u65F6\uFF0C\u95EA\u5FF5\u4F1A\u4FDD\u5B58\u5230\u8FD9\u7BC7\u7B14\u8BB0\u3002\u6BCF\u6761\u95EA\u5FF5\u4F1A\u7528\u4E0B\u65B9\u683C\u5F0F\u751F\u6210 `##` \u4E8C\u7EA7\u6807\u9898\u3002").addText((text) => {
      text.setPlaceholder("\u6BCF\u65E5\u95EA\u5FF5.md").setValue(this.plugin.settings.singleNotePath).onChange(async (value) => {
        this.plugin.settings.singleNotePath = normalizeNotePath(value);
        await this.plugin.saveSettings();
        this.plugin.refreshOpenViews();
      });
    });
  }
  displayLogModeSettings(containerEl, period) {
    const isWeekly = period === "weekly";
    const modeName = isWeekly ? "\u6BCF\u5468\u7B14\u8BB0" : "\u6BCF\u65E5\u65E5\u5FD7";
    const itemName = isWeekly ? "\u7B14\u8BB0" : "\u65E5\u5FD7";
    const customFolder = isWeekly ? this.plugin.settings.weeklyFolder : this.plugin.settings.dailyFolder;
    const customFormat = isWeekly ? this.plugin.settings.weeklyFileNameFormat : this.plugin.settings.dailyFileNameFormat;
    const customTemplate = isWeekly ? this.plugin.settings.weeklyTemplatePath : this.plugin.settings.dailyTemplatePath;
    const defaultFormat = isWeekly ? DEFAULT_SETTINGS.weeklyFileNameFormat : DEFAULT_SETTINGS.dailyFileNameFormat;
    const folderListId = isWeekly ? "act-capture-weekly-folder-options" : "act-capture-daily-folder-options";
    const templateListId = isWeekly ? "act-capture-weekly-template-options" : "act-capture-daily-template-options";
    const useObsidianSettings = this.plugin.getLogConfigSource(period) === "obsidian";
    containerEl.createEl("h3", { text: `${modeName}\u6A21\u5F0F` });
    new import_obsidian.Setting(containerEl).setName(`${itemName}\u914D\u7F6E`).setDesc(isWeekly ? "\u53EF\u81EA\u884C\u8BBE\u7F6E\uFF0C\u6216\u76F4\u63A5\u8BFB\u53D6 Periodic Notes \u7684\u6BCF\u5468\u7B14\u8BB0\u914D\u7F6E\uFF1B\u672A\u5B89\u88C5\u65F6\u4F1A\u5C1D\u8BD5\u8BFB\u53D6 Calendar \u7684\u6BCF\u5468\u7B14\u8BB0\u914D\u7F6E\u3002" : "\u53EF\u81EA\u884C\u8BBE\u7F6E\uFF0C\u6216\u76F4\u63A5\u8BFB\u53D6 Obsidian \u6838\u5FC3\u300C\u6BCF\u65E5\u7B14\u8BB0\u300D\u7684\u6587\u4EF6\u5939\u3001\u547D\u540D\u683C\u5F0F\u548C\u6A21\u677F\u3002").addDropdown((dropdown) => {
      dropdown.addOption("custom", "\u81EA\u5B9A\u4E49").addOption("obsidian", `\u76F4\u63A5\u4F7F\u7528 Obsidian ${itemName}\u8BBE\u7F6E`).setValue(this.plugin.getLogConfigSource(period)).onChange(async (value) => {
        if (period === "weekly") this.plugin.settings.weeklyConfigSource = value;
        else this.plugin.settings.dailyConfigSource = value;
        await this.plugin.saveSettings();
        this.plugin.refreshOpenViews();
        this.display();
      });
    });
    if (useObsidianSettings) {
      const linkedSettings = this.plugin.getObsidianLogSettings(period);
      const sourceName = this.plugin.getLogSettingsSourceName(period);
      const description = linkedSettings ? `\u5F53\u524D\u8BFB\u53D6 ${sourceName}\uFF1A\u6587\u4EF6\u5939 ${linkedSettings.folder || "Vault \u6839\u76EE\u5F55"}\uFF1B\u683C\u5F0F ${linkedSettings.format}\uFF1B\u6A21\u677F ${linkedSettings.template || "\u672A\u8BBE\u7F6E"}\u3002\u4FEE\u6539\u539F\u65E5\u5FD7\u8BBE\u7F6E\u540E\uFF0C\u8FD9\u91CC\u4F1A\u81EA\u52A8\u8DDF\u968F\u3002` : `\u672A\u8BFB\u53D6\u5230 ${sourceName} \u7684\u914D\u7F6E\u3002\u8BF7\u542F\u7528\u5BF9\u5E94\u65E5\u5FD7\u63D2\u4EF6\u5E76\u5B8C\u6210\u8BBE\u7F6E\uFF0C\u6216\u5207\u6362\u56DE\u201C\u81EA\u5B9A\u4E49\u201D\u3002`;
      new import_obsidian.Setting(containerEl).setName(`\u5F53\u524D${itemName}\u8BBE\u7F6E`).setDesc(description);
      return;
    }
    new import_obsidian.Setting(containerEl).setName(`${itemName}\u6587\u4EF6\u5939`).setDesc(`${modeName}\u6240\u5728\u6587\u4EF6\u5939\u3002\u7559\u7A7A\u5219\u4FDD\u5B58\u5230 Vault \u6839\u76EE\u5F55\u3002`).addSearch((search) => {
      const folders = this.plugin.getVaultFolders();
      const currentFolder = normalizeFolderPath(customFolder);
      const optionsEl = containerEl.createEl("datalist");
      optionsEl.id = folderListId;
      if (currentFolder && !folders.some((folder) => folder.path === currentFolder)) {
        optionsEl.createEl("option", { attr: { value: currentFolder } });
      }
      for (const folder of folders) optionsEl.createEl("option", { attr: { value: folder.path } });
      search.inputEl.setAttribute("list", folderListId);
      search.inputEl.setAttribute("autocomplete", "off");
      search.setPlaceholder("\u8F93\u5165\u6216\u9009\u62E9\u6587\u4EF6\u5939\uFF0C\u7559\u7A7A\u4E3A\u6839\u76EE\u5F55").setValue(currentFolder).onChange(async (value) => {
        if (isWeekly) this.plugin.settings.weeklyFolder = normalizeFolderPath(value);
        else this.plugin.settings.dailyFolder = normalizeFolderPath(value);
        await this.plugin.saveSettings();
        this.plugin.refreshOpenViews();
      });
    });
    let updateDescriptionPreview = (_format) => void 0;
    const formatSetting = new import_obsidian.Setting(containerEl).setName("\u81EA\u5B9A\u4E49\u683C\u5F0F").addText((text) => {
      text.setPlaceholder(isWeekly ? "gggg-[W]ww" : "YYYYMMDD").setValue(customFormat).onChange(async (value) => {
        const normalizedFormat = value.trim() || defaultFormat;
        if (isWeekly) this.plugin.settings.weeklyFileNameFormat = normalizedFormat;
        else this.plugin.settings.dailyFileNameFormat = normalizedFormat;
        updateDescriptionPreview(normalizedFormat);
        await this.plugin.saveSettings();
        this.plugin.refreshOpenViews();
      });
      text.inputEl.addEventListener("input", () => {
        updateDescriptionPreview(text.inputEl.value.trim() || defaultFormat);
      });
    });
    formatSetting.descEl.empty();
    formatSetting.descEl.createSpan({ text: "\u66F4\u591A\u8BED\u6CD5\uFF0C\u8BF7\u53C2\u9605\uFF1A" });
    const formatLink = formatSetting.descEl.createEl("a", {
      text: "\u65F6\u95F4\u683C\u5F0F\u53C2\u8003",
      href: "https://momentjs.com/docs/#/displaying/format/"
    });
    formatLink.setAttribute("target", "_blank");
    formatLink.setAttribute("rel", "noopener");
    formatSetting.descEl.createEl("br");
    formatSetting.descEl.createSpan({ text: "\u8FD9\u662F\u5F53\u524D\u6240\u7528\u683C\u5F0F\u7684\u6837\u4F8B\uFF1A" });
    const formatPreview = formatSetting.descEl.createSpan({ cls: "act-capture-setting-format-example" });
    updateDescriptionPreview = (format) => {
      formatPreview.setText(formatLogFileName(format, /* @__PURE__ */ new Date(), defaultFormat).replace(/\.md$/i, ""));
    };
    updateDescriptionPreview(customFormat);
    new import_obsidian.Setting(containerEl).setName("\u4FDD\u5B58\u6807\u9898").setDesc(`\u95EA\u5FF5\u4FDD\u5B58\u5230\u8FD9\u4E2A Markdown \u6807\u9898\u4E0B\u9762\u3002\u53EF\u586B\u5199\u201C${isWeekly ? "\u6BCF\u5468\u95EA\u5FF5" : "\u6BCF\u65E5\u95EA\u5FF5"}\u201D\u6216\u201C## ${isWeekly ? "\u6BCF\u5468\u95EA\u5FF5" : "\u6BCF\u65E5\u95EA\u5FF5"}\u201D\u3002`).addText((text) => {
      text.setPlaceholder(isWeekly ? "\u6BCF\u5468\u95EA\u5FF5" : "\u6BCF\u65E5\u95EA\u5FF5").setValue(this.plugin.settings.thoughtHeading).onChange(async (value) => {
        this.plugin.settings.thoughtHeading = cleanHeadingText(value);
        await this.plugin.saveSettings();
        this.plugin.refreshOpenViews();
      });
    });
    new import_obsidian.Setting(containerEl).setName(`${itemName}\u6A21\u677F\u8DEF\u5F84`).setDesc(`\u65B0\u5EFA${itemName}\u65F6\u4F7F\u7528\u7684 Markdown \u6A21\u677F\u3002\u53EF\u8F93\u5165\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4ECE Vault \u5185\u73B0\u6709 Markdown \u7B14\u8BB0\u4E2D\u7B5B\u9009\uFF1B\u7559\u7A7A\u5219\u81EA\u52A8\u751F\u6210\u57FA\u7840\u683C\u5F0F\u3002`).addSearch((search) => {
      const templates = this.plugin.app.vault.getMarkdownFiles().sort((a, b) => a.path.localeCompare(b.path, "zh-CN"));
      const optionsEl = containerEl.createEl("datalist");
      optionsEl.id = templateListId;
      if (customTemplate && !templates.some((file) => file.path === customTemplate)) {
        optionsEl.createEl("option", { attr: { value: customTemplate } });
      }
      for (const template of templates) optionsEl.createEl("option", { attr: { value: template.path } });
      search.inputEl.setAttribute("list", templateListId);
      search.inputEl.setAttribute("autocomplete", "off");
      search.setPlaceholder(isWeekly ? "templates/weekly.md" : "templates/daily.md").setValue(customTemplate).onChange(async (value) => {
        if (isWeekly) this.plugin.settings.weeklyTemplatePath = value.trim();
        else this.plugin.settings.dailyTemplatePath = value.trim();
        await this.plugin.saveSettings();
      });
    });
  }
  displayUpdateSection(containerEl) {
    const section = containerEl.createDiv({ cls: "act-capture-update-section" });
    const header = section.createDiv({ cls: "act-capture-update-header" });
    header.createSpan({ text: `ACT \u95EA\u5FF5\u7C3F  v${this.plugin.manifest.version}`, cls: "act-capture-update-version" });
    const statusEl = section.createDiv({ cls: "act-capture-update-status" });
    section.createDiv({
      text: "\u70B9\u51FB\u300C\u68C0\u67E5\u66F4\u65B0\u300D\u83B7\u53D6\u6700\u65B0\u7248\u672C\u3002\u66F4\u65B0\u4E0D\u4F1A\u5F71\u54CD\u4F60\u7684\u914D\u7F6E\u548C\u6570\u636E\u3002",
      cls: "setting-item-description"
    });
    const checkBtn = section.createEl("button", { text: "\u68C0\u67E5\u66F4\u65B0", cls: "act-capture-update-btn" });
    checkBtn.addEventListener("click", async () => {
      checkBtn.disabled = true;
      checkBtn.textContent = "\u68C0\u67E5\u4E2D...";
      statusEl.empty();
      try {
        const result = await this.plugin.checkForUpdate();
        if (result.hasUpdate) {
          statusEl.createSpan({ text: `\u53D1\u73B0\u65B0\u7248\u672C v${result.latest}` });
          const preNotes = await this.plugin.fetchReleaseNotes(result.latest);
          if (preNotes) {
            const notesEl = statusEl.createDiv({ cls: "act-capture-update-notes" });
            for (const line of preNotes.split("\n")) {
              notesEl.createDiv({ text: line });
            }
          }
          const updateBtn = statusEl.createEl("button", { text: "\u7ACB\u5373\u66F4\u65B0" });
          updateBtn.addEventListener("click", async () => {
            updateBtn.disabled = true;
            updateBtn.textContent = "\u4E0B\u8F7D\u4E2D...";
            try {
              const version = await this.plugin.performUpdate();
              const notes = await this.plugin.fetchReleaseNotes(version);
              statusEl.empty();
              statusEl.createSpan({ text: `\u5DF2\u66F4\u65B0\u5230 v${version}\uFF0C\u8BF7\u91CD\u542F Obsidian \u6216\u91CD\u65B0\u52A0\u8F7D\u63D2\u4EF6` });
              if (notes) {
                const notesEl = statusEl.createDiv({ cls: "act-capture-update-notes" });
                notesEl.createDiv({ text: "\u66F4\u65B0\u5185\u5BB9\uFF1A", attr: { style: "font-weight:600;margin-bottom:4px" } });
                for (const line of notes.split("\n")) {
                  notesEl.createDiv({ text: line });
                }
              }
              new import_obsidian.Notice(`ACT \u95EA\u5FF5\u7C3F\u5DF2\u66F4\u65B0\u5230 v${version}\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u63D2\u4EF6`);
            } catch (err) {
              updateBtn.disabled = false;
              updateBtn.textContent = "\u7ACB\u5373\u66F4\u65B0";
              new import_obsidian.Notice(`\u66F4\u65B0\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}`);
            }
          });
        } else {
          statusEl.createSpan({ text: "\u5DF2\u662F\u6700\u65B0\u7248\u672C \u2713" });
        }
      } catch (err) {
        statusEl.createSpan({ text: `\u68C0\u67E5\u5931\u8D25\uFF1A${err instanceof Error ? err.message : String(err)}` });
      } finally {
        checkBtn.disabled = false;
        checkBtn.textContent = "\u68C0\u67E5\u66F4\u65B0";
      }
    });
  }
  displaySupportSection(containerEl) {
    const supportEl = containerEl.createDiv({ cls: "act-capture-setting-support" });
    supportEl.createEl("h3", { text: "\u652F\u6301\u4E0E\u8D44\u6E90" });
    supportEl.createEl("p", {
      text: "\u516C\u4F17\u53F7\uFF1Akiven\u5927\u6C49\u5821\uFF08\u540C\u540D\uFF09",
      cls: "act-capture-setting-support__lead"
    });
    supportEl.createDiv({ text: "\u2B07\uFE0F", cls: "act-capture-setting-support__arrow" });
    const listEl = supportEl.createDiv({ cls: "act-capture-setting-support__list" });
    listEl.createEl("p", { text: "\u5F80\u671F\u4E2A\u4EBA\u751F\u4EA7\u529B\u89C6\u9891\u5408\u96C6" });
    listEl.createEl("p", { text: "Obsidian \u5B98\u65B9\u540C\u6B65\u62FC\u8F66\uFF1A\u5DF2\u62FC 4000+" });
    listEl.createEl("p", { text: "Obsidian + AI \u7B14\u8BB0\u7CFB\u7EDF\u6559\u7A0B\uFF1A\u5B66\u5458 200+" });
    const websiteEl = supportEl.createEl("p", { cls: "act-capture-setting-support__website" });
    websiteEl.appendText("\u8BE6\u60C5\u4ECB\u7ECD\u4E0E\u8D2D\u4E70\uFF0C\u8BF7\u67E5\u770B\u4E2A\u4EBA\u535A\u5BA2\uFF1A");
    const linkEl = websiteEl.createEl("a", {
      text: "kivenbig.com",
      href: "https://kivenbig.com"
    });
    linkEl.addEventListener("click", (event) => {
      event.preventDefault();
      window.open("https://kivenbig.com", "_blank");
    });
  }
};
