import { Theme } from "react-shiki";

const white = "oklch(1 0 0)";
const lightGrey = "oklch(0.8624 0.0066 17.29)";
const green = "oklch(0.8314 0.2088 153.08)";
const blue = "oklch(0.5552 0.1703 257.32)";
const violet = "oklch(0.5724 0.2706 303.91)";
const orange = "oklch(0.7583 0.1638 59.01)";
const yellow = "oklch(0.8072 0.1498 81.8)";

const red = "oklch(0.6565 0.2298 24.01)";
const cyan = "oklch(0.8965 0.1273 200.71)";
const darkestBlue = "oklch(0.1685 0.0187 284.21)";
const muteGray = "oklch(0.4701 0.0112 285.96)";

export const myTheme: Theme = {
  name: "2077",
  type: "dark",
  colors: {
    "editor.background": "oklch(0.1685 0.0187 284.21)",
    "editor.foreground": lightGrey,
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: { foreground: muteGray },
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.language",
      ],
      settings: { foreground: white },
    },
    {
      scope: ["entity", "entity.name"],
      settings: { foreground: white },
    },
    {
      scope: "variable.parameter.function",
      settings: { foreground: white },
    },
    {
      scope: "entity.name.tag",
      settings: { foreground: white },
    },
    {
      scope: "keyword",
      settings: { foreground: white },
    },
    {
      scope: ["storage", "storage.type"],
      settings: { foreground: white },
    },
    {
      scope: ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      settings: { foreground: white },
    },
    {
      scope: ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
      settings: { foreground: white },
    },
    {
      scope: "support",
      settings: { foreground: white },
    },
    {
      scope: "meta.property-name",
      settings: { foreground: white },
    },
    {
      scope: "variable",
      settings: { foreground: white },
    },
    {
      scope: "variable.other",
      settings: { foreground: white },
    },
    {
      scope: "invalid.broken",
      settings: { fontStyle: "italic", foreground: white },
    },
    {
      scope: "invalid.deprecated",
      settings: { fontStyle: "italic", foreground: white },
    },
    {
      scope: "invalid.illegal",
      settings: { fontStyle: "italic", foreground: white },
    },
    {
      scope: "invalid.unimplemented",
      settings: { fontStyle: "italic", foreground: white },
    },
    {
      scope: "carriage-return",
      settings: { background: white, fontStyle: "italic underline", foreground: "#24292e" },
    },
    {
      scope: "message.error",
      settings: { foreground: white },
    },
    {
      scope: "string variable",
      settings: { foreground: white },
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: { foreground: white },
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: { foreground: white },
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: { fontStyle: "bold", foreground: white },
    },
    {
      scope: "support.constant",
      settings: { foreground: white },
    },
    {
      scope: "support.variable",
      settings: { foreground: white },
    },
    {
      scope: "meta.module-reference",
      settings: { foreground: white },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: { foreground: white },
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: { fontStyle: "bold", foreground: white },
    },
    {
      scope: "markup.quote",
      settings: { foreground: white },
    },
    {
      scope: "markup.italic",
      settings: { fontStyle: "italic", foreground: white },
    },
    {
      scope: "markup.bold",
      settings: { fontStyle: "bold", foreground: white },
    },
    {
      scope: ["markup.underline"],
      settings: { fontStyle: "underline", foreground: white },
    },
    {
      scope: ["markup.strikethrough"],
      settings: { fontStyle: "strikethrough", foreground: white },
    },
    {
      scope: "markup.inline.raw",
      settings: { foreground: white },
    },
    {
      scope: ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      settings: { foreground: white },
    },
    {
      scope: ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      settings: { foreground: white },
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: { foreground: white },
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: { background: white, foreground: "#2f363d" },
    },
    {
      scope: "meta.diff.range",
      settings: { fontStyle: "bold", foreground: white },
    },
    {
      scope: "meta.diff.header",
      settings: { foreground: white },
    },
    {
      scope: "meta.separator",
      settings: { fontStyle: "bold", foreground: white },
    },
    {
      scope: "meta.output",
      settings: { foreground: white },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: { fontStyle: "underline", foreground: white },
    },
    {
      scope: ["markup.fenced_code.block.markdown", "markup.raw.block.markdown"],
      settings: { foreground: white, fontStyle: "italic" },
    },
    {
      scope: "punctuation.definition.fenced.markdown",
      settings: { foreground: white, fontStyle: "bold" },
    },
  ],
} satisfies Theme;
