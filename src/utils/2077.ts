import { Theme } from "react-shiki";

const white = "oklch(1 0 0)";
const lightGray = "oklch(0.8624 0.0066 17.29)";
const green = "oklch(0.8314 0.2088 153.08)";
const blue = "oklch(0.5552 0.1703 257.32)";
const violet = "oklch(0.5724 0.2706 303.91)";
const orange = "oklch(0.7583 0.1638 59.01)";
const yellow = "oklch(0.8072 0.1498 81.8)";
const red = "oklch(0.6565 0.2298 24.01)";
const cyan = "oklch(0.8965 0.1273 200.71)";
const darkestBlue = "oklch(0.1685 0.0187 284.21)";
const muteGray = "oklch(0.4701 0.0112 285.96)";

const locate = "oklch(0.7685 0.1842 336.71)";

export const myTheme: Theme = {
  name: "2077",
  type: "dark",
  colors: {
    "editor.background": "transparent",
    "editor.foreground": white,
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
      settings: { foreground: orange },
    },
    {
      scope: ["entity", "entity.name"],
      settings: { foreground: cyan },
    },
    {
      scope: "variable.parameter.function",
      settings: { foreground: yellow },
    },
    {
      scope: "entity.name.tag",
      settings: { foreground: orange },
    },
    {
      scope: "keyword",
      settings: { foreground: red },
    },
    {
      scope: ["storage", "storage.type"],
      settings: { foreground: red },
    },
    {
      scope: ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      settings: { foreground: yellow },
    },
    {
      scope: ["string", "punctuation.definition.string", "string punctuation.section.embedded source"],
      settings: { foreground: blue },
    },
    {
      scope: "support",
      settings: { foreground: cyan },
    },
    {
      scope: "meta.property-name",
      settings: { foreground: red },
    },
    {
      scope: ["variable", "variable.other"],
      settings: { foreground: white },
    },
    {
      scope: ["invalid.broken", "invalid.deprecated", "invalid.illegal", "invalid.unimplemented"],
      settings: { fontStyle: "italic", foreground: red },
    },
    {
      scope: "carriage-return",
      settings: { background: red, fontStyle: "italic underline", foreground: white },
    },
    {
      scope: "message.error",
      settings: { foreground: red },
    },
    {
      scope: "string variable",
      settings: { foreground: yellow },
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: { foreground: cyan },
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: { foreground: orange },
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: { fontStyle: "bold", foreground: red },
    },
    {
      scope: "support.constant",
      settings: { foreground: blue },
    },
    {
      scope: "support.variable",
      settings: { foreground: yellow },
    },
    {
      scope: "support.function",
      settings: { foreground: red },
    },
    {
      scope: "support.class",
      settings: { foreground: cyan },
    },
    {
      scope: "support.type",
      settings: { foreground: cyan },
    },
    {
      scope: "meta.module-reference",
      settings: { foreground: cyan },
    },
    {
      scope: "meta.property-name",
      settings: { foreground: red },
    },
    {
      scope: "meta.function-call",
      settings: { foreground: red },
    },
    {
      scope: "meta.function",
      settings: { foreground: cyan },
    },
    {
      scope: "meta.class",
      settings: { foreground: cyan },
    },
    {
      scope: "meta.method-call",
      settings: { foreground: cyan },
    },
    {
      scope: "meta.definition.variable",
      settings: { foreground: white },
    },
    {
      scope: "meta.import",
      settings: { foreground: yellow },
    },
    {
      scope: "meta.export",
      settings: { foreground: yellow },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: { foreground: red },
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: { fontStyle: "bold", foreground: cyan },
    },
    {
      scope: "markup.quote",
      settings: { foreground: green },
    },
    {
      scope: "markup.italic",
      settings: { fontStyle: "italic" },
    },
    {
      scope: "markup.bold",
      settings: { fontStyle: "bold" },
    },
    {
      scope: ["markup.underline"],
      settings: { fontStyle: "underline" },
    },
    {
      scope: ["markup.strikethrough"],
      settings: { fontStyle: "strikethrough", foreground: muteGray },
    },
    {
      scope: "markup.inline.raw",
      settings: { foreground: red },
    },
    {
      scope: ["markup.fenced_code.block.markdown", "markup.raw.block.markdown"],
      settings: { foreground: red, fontStyle: "italic" },
    },
    {
      scope: "punctuation.definition.fenced.markdown",
      settings: { foreground: yellow, fontStyle: "bold" },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link", "markup.underline.link"],
      settings: { fontStyle: "underline", foreground: red },
    },
    {
      scope: ["string.other.link.title.markdown", "string.other.link.description.markdown"],
      settings: { foreground: white },
    },
    {
      scope: "markup.bold.inline.markdown",
      settings: { fontStyle: "bold", foreground: yellow },
    },
    {
      scope: "markup.italic.inline.markdown",
      settings: { fontStyle: "italic", foreground: violet },
    },
    {
      scope: "markup.changed.markdown",
      settings: { foreground: yellow },
    },
    {
      scope: "markup.deleted.markdown",
      settings: { foreground: red },
    },
    {
      scope: "markup.inserted.markdown",
      settings: { foreground: green },
    },
    {
      scope: ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      settings: { foreground: red },
    },
    {
      scope: ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      settings: { foreground: green },
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: { foreground: yellow },
    },
    {
      scope: "meta.diff.range",
      settings: { fontStyle: "bold", foreground: violet },
    },
    {
      scope: "meta.diff.header",
      settings: { foreground: white },
    },
    {
      scope: "meta.separator",
      settings: { fontStyle: "bold", foreground: muteGray },
    },
    {
      scope: "meta.output",
      settings: { foreground: white },
    },
    {
      scope: "entity.other.attribute-name",
      settings: { foreground: cyan },
    },
    {
      scope: "string.quoted",
      settings: { foreground: blue },
    },
    {
      scope: "punctuation.definition.tag",
      settings: { foreground: red },
    },
    {
      scope: "entity.name.tag.css",
      settings: { foreground: orange },
    },
    {
      scope: ["entity.other.attribute-name.class.css", "entity.other.attribute-name.id.css"],
      settings: { foreground: yellow },
    },
    {
      scope: "support.type.property-name.css",
      settings: { foreground: cyan },
    },
    {
      scope: "support.constant.property-value.css",
      settings: { foreground: green },
    },
    {
      scope: "constant.numeric.css",
      settings: { foreground: orange },
    },
    {
      scope: "constant.other.color.rgb-value.css",
      settings: { foreground: blue },
    },
    {
      scope: "punctuation.separator",
      settings: { foreground: muteGray },
    },
    {
      scope: "punctuation.terminator",
      settings: { foreground: muteGray },
    },
    {
      scope: "punctuation.section",
      settings: { foreground: muteGray },
    },
    {
      scope: "keyword.operator",
      settings: { foreground: red },
    },
    {
      scope: "keyword.operator.assignment",
      settings: { foreground: red },
    },
    {
      scope: "keyword.operator.arithmetic",
      settings: { foreground: red },
    },
    {
      scope: "keyword.operator.comparison",
      settings: { foreground: red },
    },
    {
      scope: "punctuation.operator",
      settings: { foreground: muteGray },
    },
    {
      scope: "constant.numeric",
      settings: { foreground: orange },
    },
    {
      scope: "constant.language.boolean",
      settings: { foreground: orange },
    },
    {
      scope: ["constant.language.null", "constant.language.nil"],
      settings: { foreground: orange },
    },
    {
      scope: "entity.name.type.js",
      settings: { foreground: cyan },
    },
    {
      scope: "variable.other.object.js",
      settings: { foreground: white },
    },
    {
      scope: "variable.other.property.js",
      settings: { foreground: white },
    },
    {
      scope: "entity.name.tag.tsx",
      settings: { foreground: orange },
    },
    {
      scope: "support.variable.dom",
      settings: { foreground: cyan },
    },
  ],
} satisfies Theme;
